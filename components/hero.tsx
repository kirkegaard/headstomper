"use client";

import { motion } from "motion/react";
import Image from "next/image";

import styles from "./hero.module.css";

export const Hero = () => (
  <motion.div
    className={styles.root}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
  >
    <Image
      src="/assets/images/logo.png"
      alt="Headstomper"
      width={400}
      height={200}
      style={{ objectFit: "contain" }}
      priority
    />
    <p className={styles.tagline}>Save the date</p>
    <p className={styles.date}>06 - 08 November 2026</p>
  </motion.div>
);
