"use client";

import { useEffect, useRef, useState } from "react";

type CursorGlowProps = {
  isEnabled?: boolean;
};

export default function CursorGlow({ isEnabled = true }: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.7);

  useEffect(() => {
    if (!isEnabled) {
      setOpacity(0);
      return;
    }

    setOpacity(0.7);

    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let frameId = 0;
    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      glow.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frameId);
    };
  }, [isEnabled]);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
      style={{ opacity, transition: "opacity 2s ease-out" }}
    />
  );
}