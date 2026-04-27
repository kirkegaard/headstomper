"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./scroll-fade.module.css";

export function ScrollFade({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fadeLeft, setFadeLeft] = useState(false);
  const [fadeRight, setFadeRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setFadeLeft(el.scrollLeft > 0);
    setFadeRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  return (
    <div
      className={styles.wrap}
      style={style}
      data-fade-left={fadeLeft}
      data-fade-right={fadeRight}
    >
      <div
        ref={ref}
        className={`${styles.inner}${className ? ` ${className}` : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
