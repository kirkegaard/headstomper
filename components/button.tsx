import type { AnchorHTMLAttributes } from "react";
import styles from "./button.module.css";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Button({ href, children, className, ...rest }: Props) {
  return (
    <a
      href={href}
      className={`${styles.button}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.overlay} aria-hidden="true">
        {children}
      </span>
    </a>
  );
}
