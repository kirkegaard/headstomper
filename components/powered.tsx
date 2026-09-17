import Image from "next/image";
import styles from "./powered.module.css";
import { Section } from "./section";

export function Powered() {
  return (
    <Section title="Powered by" className={styles.powered}>
      <Image
        src="/assets/images/AGON_BY_AOC_LOGO_LR_WHITE.png"
        alt="AGON by AOC"
        width={1267}
        height={723}
        className={styles.logo}
      />
    </Section>
  );
}
