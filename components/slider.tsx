"use client";

import type { Easing } from "motion/react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";

interface SliderProps {
  data: string[];
  basePath: string;
  interval?: number;
  transition?: number;
  easing?: Easing | Easing[];
}

function random(arr: string[], exclude?: string): string {
  const pool = arr.length > 1 ? arr.filter((i) => i !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

function preload(src: string) {
  const img = new window.Image();
  img.src = src;
}

interface SlideProps {
  src: string;
  duration: number;
  easing: Easing | Easing[];
  onExited?: () => void;
}

const Slide = ({ src, duration, easing }: SlideProps) => {
  const [scope, animate] = useAnimate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    animate(scope.current, { opacity: 1 }, { duration, ease: easing });
  }, [loaded, animate, scope, duration, easing]);

  return (
    <motion.div
      ref={scope}
      className={styles.slide}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration, ease: easing } }}
    >
      <Image
        src={src}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        onLoad={() => setLoaded(true)}
        priority
      />
    </motion.div>
  );
};

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

    // preload the second image early
    preload(`${basePath}/${random(data, initial)}`);

    const id = setInterval(() => {
      const next = random(data, ref.current ?? undefined);
      ref.current = next;
      setCurrent(next);

      // preload the one after
      preload(`${basePath}/${random(data, next)}`);
    }, interval);

    return () => clearInterval(id);
  }, [data, interval, basePath]);

  if (!current) return <div className={styles.root} />;

  return (
    <div className={styles.root}>
      <AnimatePresence>
        <Slide
          key={current}
          src={`${basePath}/${current}`}
          duration={transition / 1000}
          easing={easing}
        />
      </AnimatePresence>
    </div>
  );
};
