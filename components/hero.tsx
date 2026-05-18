"use client";

import type { Easing } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

import { REGISTER_URL } from "@/lib/constants";
import { Button } from "./button";
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
      Registrations are open
    </motion.p>
    <motion.p className={styles.date} {...fade(1)}>
      06 - 08 November 2026
    </motion.p>
    <motion.p className={styles.place} {...fade(1.4)}>
      Malmö, Sweden
    </motion.p>
    <motion.div {...fade(1.8)} className={styles.cta}>
      <Button href={REGISTER_URL} target="_blank" rel="noreferrer noopener">
        Register now
      </Button>
      <p className={styles.deadline}>
        Registration closes 31 October 2026, 23:59 CEST
      </p>
    </motion.div>
  </div>
);
