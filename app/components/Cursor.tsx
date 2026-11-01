"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 700, damping: 45 });
  const smoothY = useSpring(y, { stiffness: 700, damping: 45 });

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    );
    let positioned = false;
    const hide = () => {
      positioned = false;
      setVisible(false);
      delete document.body.dataset.cursor;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }
      x.set(event.clientX);
      y.set(event.clientY);
      if (!positioned) {
        smoothX.jump(event.clientX);
        smoothY.jump(event.clientY);
        positioned = true;
      }
      setVisible(true);
      document.body.dataset.cursor = "active";
    };
    const leave = (event: PointerEvent) => {
      if (event.relatedTarget === null) hide();
    };
    const visibility = () => {
      if (document.hidden) hide();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", leave);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", visibility);
    media.addEventListener("change", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", hide);
      delete document.body.dataset.cursor;
    };
  }, [x, y, smoothX, smoothY]);

  return (
    <motion.div
      className="cursor-dot"
      aria-hidden="true"
      style={{
        x: reduced ? x : smoothX,
        y: reduced ? y : smoothY,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
