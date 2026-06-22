"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function MagneticButton({ 
  children, 
  className = "", 
  as = "button",
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string;
  as?: React.ElementType | string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerPointX = left + width / 2;
    const centerPointY = top + height / 2;
    
    x.set((clientX - centerPointX) * 0.2);
    y.set((clientY - centerPointY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = as === "a" ? motion.a : motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
