"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";

type Easing =
  | "linear"
  | "easeIn"
  | "easeOut"
  | "easeInOut"
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | [number, number, number, number];

interface SliderProps {
  data: string[];
  basePath: string;
  interval?: number;
  transition?: number;
  easing?: Easing;
}

function random(arr: string[], exclude?: string): string {
  const pool = arr.length > 1 ? arr.filter((i) => i !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

export const Slider = ({
  data,
  basePath,
  interval = 5000,
  transition = 1000,
  easing = "easeInOut",
}: SliderProps) => {
  const [current, setCurrent] = useState<string | null>(null);
  const ref = useRef<string | null>(null);

  useEffect(() => {
    const initial = random(data);
    ref.current = initial;
    setCurrent(initial);

    const id = setInterval(() => {
      const next = random(data, ref.current ?? undefined);
      ref.current = next;
      setCurrent(next);
    }, interval);
    return () => clearInterval(id);
  }, [data, interval]);

  if (!current) return <div className={styles.root} />;

  return (
    <div className={styles.root}>
      <AnimatePresence>
        <motion.div
          key={current}
          className={styles.slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transition / 1000, ease: easing }}
        >
          <Image
            src={`${basePath}/${current}`}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
