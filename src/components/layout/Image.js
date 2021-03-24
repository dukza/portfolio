import React, { useMemo, useContext } from "react";
import { motion } from "framer-motion";
import {IntersectionContext,IntersectionObserver} from "hooks"

export default function Image ({
    className,
    src,
    index,
  type,
  children,
  property,
  delayOrder = 0.2, // order of appearance
  duration = `1`,
  easing = [0, 0, 0.2, 1] // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) {
  const { inView } = useContext(IntersectionContext);
  const transition = {
    duration,
    delay: delayOrder,
    ease: easing,
    type: "spring"
  };

  const variants = {
    hidden: {
      opacity: 0,
      transform: "scale(1.1)",
      clipPath: "inset(0 20% 0 0)"
    },
    show: {
      opacity: 1,
      transform: "scale(1)",
      clipPath: "inset(0 0 0 0)"
    }
  };

  return (
    <motion.img
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate={inView ? "show" : "hidden"}
        className={className}
        style={{ transition: "all 0.4s" }}
        src={src}
        alt={index}>
    </motion.img>   
  );
};
