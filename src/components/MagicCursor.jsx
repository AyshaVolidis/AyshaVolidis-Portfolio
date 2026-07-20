import { useCallback, useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 16;
const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, [role='button'], label, .btn-primary, .btn-outline";

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function MagicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const trailRef = useRef([]);
  const sparklesRef = useRef([]);
  const rafRef = useRef(null);
  const lastMoveTime = useRef(0);
  const prevPos = useRef({ x: -100, y: -100 });
  const speedRef = useRef(0);
  const isHoveringRef = useRef(false);

  const updateCursor = useCallback((e) => {
    const now = performance.now();
    const dx = e.clientX - prevPos.current.x;
    const dy = e.clientY - prevPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const dt = Math.max(now - lastMoveTime.current, 1);
    speedRef.current = dist / dt;

    prevPos.current = { x: e.clientX, y: e.clientY };
    lastMoveTime.current = now;
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);

    trailRef.current.push({
      x: e.clientX,
      y: e.clientY,
      life: TRAIL_LENGTH,
      speed: speedRef.current,
    });
    if (trailRef.current.length > 40) {
      trailRef.current = trailRef.current.slice(-40);
    }
  }, []);

  useEffect(() => {
    let sparkleInterval;

    const handleMouseMove = (e) => {
      updateCursor(e);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseOver = (e) => {
      const el = e.target.closest?.(INTERACTIVE_SELECTOR);
      if (el) {
        isHoveringRef.current = true;
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const el = e.target.closest?.(INTERACTIVE_SELECTOR);
      if (el) {
        isHoveringRef.current = false;
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);

    sparkleInterval = setInterval(() => {
      if (!isHoveringRef.current) return;
      for (let i = 0; i < 2; i++) {
        const angle = randomBetween(0, Math.PI * 2);
        const velocity = randomBetween(0.8, 2.5);
        sparklesRef.current.push({
          x: pos.x,
          y: pos.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 0.5,
          life: 25 + Math.floor(randomBetween(0, 20)),
          maxLife: 45,
          size: randomBetween(2, 4),
          hue: randomBetween(280, 340),
        });
      }
      if (sparklesRef.current.length > 80) {
        sparklesRef.current = sparklesRef.current.slice(-80);
      }
    }, 70);

    const animate = () => {
      trailRef.current = trailRef.current
        .map((t) => ({ ...t, life: t.life - 1 }))
        .filter((t) => t.life > 0);

      sparklesRef.current = sparklesRef.current
        .map((s) => ({
          ...s,
          x: s.x + s.vx,
          y: s.y + s.vy,
          vy: s.vy + 0.04,
          life: s.life - 1,
        }))
        .filter((s) => s.life > 0);

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      clearInterval(sparkleInterval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCursor, pos.x, pos.y]);

  const orbSize = hovering ? 36 : 26;
  const trail = trailRef.current;
  const sparkles = sparklesRef.current;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {visible && (
        <>
          <div
            style={{
              position: "fixed",
              left: pos.x,
              top: pos.y,
              width: orbSize,
              height: orbSize,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              background: hovering
                ? "radial-gradient(circle at 35% 35%, rgba(255,220,100,0.95), rgba(100,200,255,0.6))"
                : "radial-gradient(circle at 35% 35%, rgba(200,120,255,0.95), rgba(80,200,240,0.6))",
              boxShadow: hovering
                ? `0 0 ${orbSize * 1.5}px rgba(255,220,100,0.4), 0 0 ${orbSize * 3}px rgba(100,200,255,0.2)`
                : `0 0 ${orbSize}px rgba(200,120,255,0.4), 0 0 ${orbSize * 2.5}px rgba(80,200,240,0.15)`,
              transition: "width 0.2s ease-out, height 0.2s ease-out, background 0.4s ease, box-shadow 0.4s ease",
              mixBlendMode: "screen",
            }}
          />

          {trail.map((t, i) => {
            const lifeRatio = t.life / TRAIL_LENGTH;
            const speedFactor = Math.min(t.speed * 2, 1);
            const size = 2 + lifeRatio * 4 + speedFactor * 3;
            const opacity = lifeRatio * 0.55;
            const hue = lerp(190, 300, lifeRatio);
            return (
              <div
                key={i}
                style={{
                  position: "fixed",
                  left: t.x,
                  top: t.y,
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  background: `hsla(${hue}, 85%, 65%, ${opacity})`,
                  boxShadow: `0 0 ${size * 2.5}px hsla(${hue}, 85%, 65%, ${opacity * 0.5})`,
                  transition: "opacity 0.08s ease",
                }}
              />
            );
          })}

          {sparkles.map((s, i) => {
            const lifeRatio = s.life / s.maxLife;
            const opacity = lifeRatio * 0.85;
            const size = s.size * (0.3 + lifeRatio * 0.7);
            return (
              <div
                key={i}
                style={{
                  position: "fixed",
                  left: s.x,
                  top: s.y,
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  background: `hsla(${s.hue}, 90%, 72%, ${opacity})`,
                  boxShadow: `0 0 ${size * 2.5}px hsla(${s.hue}, 90%, 72%, ${opacity * 0.5})`,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
