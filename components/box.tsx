import styles from "./box.module.css";

export function Box({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.box}>{children}</div>;
}
