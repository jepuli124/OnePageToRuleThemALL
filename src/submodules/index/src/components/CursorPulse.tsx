import { useEffect, useRef, useState } from "react";
import "../css/CursorPulse.css";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

type Particle = {
  id: number;
  x: number;
  y: number;
};

export default function CursorPulse() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let rippleId = 0;
    let particleId = 0;

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // CORE glow
      if (glowRef.current) {
        glowRef.current.style.left = `${clientX}px`;
        glowRef.current.style.top = `${clientY}px`;
      }

      // DEPTH trail (lag)
      if (trailRef.current) {
        trailRef.current.animate(
          { left: `${clientX}px`, top: `${clientY}px` },
          { duration: 400, fill: "forwards", easing: "ease-out" }
        );
      }

      // PARTICLE FIRE TRAIL
      const newParticle = {
        id: particleId++,
        x: clientX,
        y: clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== newParticle.id)
        );
      }, 800);
    };

    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const newRipple = {
        id: rippleId++,
        x: clientX,
        y: clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((r) => r.id !== newRipple.id)
        );
      }, 1400);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" />
      <div ref={glowRef} className="cursor-glow" />

      {/* PARTICLE TRAIL */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* CLICK SHOCKWAVE */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}