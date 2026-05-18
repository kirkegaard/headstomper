import type React from "react";
import styles from "./section.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Section({ title, children, className }: Props) {
  let id = title;
  if (title) {
    id = title.toLowerCase().replace(/\s+/g, "-");
  }
  return (
    <section
      id={id}
      className={`${styles.section}${className ? ` ${className}` : ""}`}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
