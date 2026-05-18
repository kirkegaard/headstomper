"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./wordmark.module.css";

export function Wordmark() {
  const path = usePathname();
  const ref = useRef<HTMLAnchorElement>(null);
  const home = path === "/";

  useEffect(() => {
    const el = ref.current;
    if (!el || !home) return;

    const update = () => {
      const mid = window.innerHeight * 0.5;
      const opacity = Math.min(Math.max(window.scrollY / mid, 0), 1);
      el.style.opacity = String(opacity);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [home]);

  return (
    <Link
      ref={ref}
      href="/"
      className={styles.root}
      style={home ? { opacity: 0 } : undefined}
    >
      <span className={styles.text}>Headstomper</span>
    </Link>
  );
}
