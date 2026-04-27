"use client";

import { useEffect, useRef } from "react";
import styles from "./page-header.module.css";

/**
 * A fixed page header that shrinks its title and compresses padding as the
 * user scrolls. Pass `children` for any supplementary content (e.g. a year
 * switcher) rendered below the title.
 */
export function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const t = Math.min(window.scrollY / 80, 1);
      el.style.setProperty("--scroll", String(t));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={ref} className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {children && <div className={styles.sub}>{children}</div>}
      </div>
    </div>
  );
}
