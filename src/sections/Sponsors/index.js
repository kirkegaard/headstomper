import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

import coma from "./assets/coma.png";
import cphEsports from "./assets/cph-esports.png";
import hyperx from "./assets/hyperx.png";
import playstation from "./assets/playstation.png";

const Sponsors = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Sponsors</h1>
        <div className={styles.sponsors}>
          <Link href="https://playstation.com">
            <Image alt="Powered by PlayStation" src={playstation} />
          </Link>
          <Link href="https://hyperx.com/">
            <Image alt="Powered by hyper x" src={hyperx} />
          </Link>
          <Image
            className={styles.smoll}
            alt="Copenhagen Malmø FGC"
            src={coma}
          />
          <Link href="https://cphesport.com/">
            <Image
              className={styles.smoll}
              alt="Copenhagen Esport"
              src={cphEsports}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Sponsors;
