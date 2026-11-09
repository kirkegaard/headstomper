"use client";

import type { Easing } from "motion/react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import Image, { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";

interface SliderProps {
  data: string[];
  basePath: string;
  interval?: number;
  transition?: number;
  easing?: Easing | Easing[];
}

const quality = 60;

function random(arr: string[], exclude?: string): string {
  const pool = arr.length > 1 ? arr.filter((i) => i !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

function preload(src: string) {
  const { props } = getImageProps({
    src,
    alt: "",
    fill: true,
    sizes: "100vw",
    quality,
  });
  const img = new window.Image();
  img.srcset = props.srcSet ?? "";
  img.sizes = props.sizes ?? "";
  img.src = props.src;
}

interface SlideProps {
  src: string;
  duration: number;
  easing: Easing | Easing[];
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
        sizes="100vw"
        quality={quality}
        style={{ objectFit: "cover" }}
        onLoad={() => setLoaded(true)}
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
    preload(`${basePath}/${random(data, initial)}`);

    let id: ReturnType<typeof setInterval> | undefined;

    const tick = () => {
      const next = random(data, ref.current ?? undefined);
      ref.current = next;
      setCurrent(next);
      preload(`${basePath}/${random(data, next)}`);
    };

    const start = () => {
      if (id) return;
      id = setInterval(tick, interval);
    };

    const stop = () => {
      if (!id) return;
      clearInterval(id);
      id = undefined;
    };

    const visible = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    if (document.visibilityState === "visible") start();
    document.addEventListener("visibilitychange", visible);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", visible);
    };
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
