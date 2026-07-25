import React, { useEffect, useState, useRef } from 'react';

export interface MouseGlowProps {
  /** Controls if the mouse glow spotlight is active */
  active?: boolean;
}

/**
 * MouseGlow Component
 * High-performance ambient radial mouse glow spotlight with linear interpolation (lerp)
 * for buttery smooth physical inertia behind dark-mode portfolio components.
 */
export const MouseGlow: React.FC<MouseGlowProps> = ({ active = true }) => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!active) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Smooth Lerp Render Loop (lerp factor = 0.14 for silky inertia)
    const render = () => {
      const lerpFactor = 0.14;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      setPos({ x: currentPos.current.x, y: currentPos.current.y });
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [active, isHovered]);

  if (!active || !isHovered) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 hidden sm:block"
      style={{
        background: `radial-gradient(550px circle at ${pos.x.toFixed(1)}px ${pos.y.toFixed(1)}px, rgba(99, 102, 241, 0.065), transparent 80%)`,
      }}
    />
  );
};

MouseGlow.displayName = 'MouseGlow';
