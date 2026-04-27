import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <div className={styles.root}>
      <Link href="/" aria-label="Headstomper home">
        <Image
          src="/assets/images/logo.png"
          alt="Headstomper"
          width={120}
          height={60}
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>
    </div>
  );
}
