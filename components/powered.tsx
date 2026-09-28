import Image from "next/image";
import styles from "./powered.module.css";
import { Section } from "./section";

export function Powered() {
  return (
    <Section title="Powered by" className={styles.powered}>
      <div className={styles.logos}>
        <Image
          src="/assets/images/AGON_BY_AOC_LOGO_LR_WHITE.png"
          alt="AGON by AOC"
          width={1267}
          height={723}
          className={styles.logo}
        />
        <Image
          src="/assets/images/Turtlebeach_Logo_Stacked_WHT.svg"
          alt="Turtle Beach"
          width={161}
          height={45}
          className={styles.logo}
        />
      </div>
    </Section>
  );
}
