import type React from "react";
import styles from "./section.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className }: Props) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section
      id={id}
      className={`${styles.section}${className ? ` ${className}` : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
