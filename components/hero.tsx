"use client";

import type { Easing } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

import styles from "./hero.module.css";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 2, ease: "easeOut" as Easing, delay },
});

export const Hero = () => (
  <div className={styles.root}>
    <motion.div {...fade(0.2)}>
      <Image
        src="/assets/images/logo.png"
        alt="Headstomper"
        width={400}
        height={200}
        style={{ objectFit: "contain" }}
        priority
      />
    </motion.div>
    <motion.p className={styles.tagline} {...fade(0.6)}>
      Save the date
    </motion.p>
    <motion.p className={styles.date} {...fade(1)}>
      06 - 08 November 2026
    </motion.p>
  </div>
);
