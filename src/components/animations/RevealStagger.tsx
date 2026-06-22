"use client";
import { motion, useReducedMotion } from "motion/react";
import React from "react";

export function RevealStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  
  // Convert children to array to animate them individually
  const items = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
        hidden: {},
      }}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: reduce ? {} : { opacity: 0, y: 24 },
            visible: reduce ? {} : { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
