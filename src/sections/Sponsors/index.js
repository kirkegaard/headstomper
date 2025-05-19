import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

import agon from "./assets/agon.svg";
import mgw from "./assets/mgw.svg";

const Sponsors = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Sponsors</h1>
        <div className={styles.sponsors}>
          <Link href="https://www.malmogameweek.com">
            <Image alt="Malmö Game Week: 30-31 aug 2025" src={mgw} />
          </Link>
          <Link href="https://aoc.com/us/gaming">
            <Image alt="AGON by AOC Monitors" src={agon} />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Sponsors;
