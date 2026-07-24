"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const pathname = usePathname();
  const glowRef = useRef<HTMLDivElement>(null);
  const isWorkPage = pathname?.startsWith("/work/") ?? false;

  useEffect(() => {
    if (isWorkPage) return;

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
  }, [isWorkPage]);

  if (isWorkPage) return null;

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}