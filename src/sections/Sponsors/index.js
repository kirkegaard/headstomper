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
          <Image alt="Powered by PlayStation" src={playstation} />
          <Image alt="Powered by hyper x" src={hyperx} />
          <Image
            className={styles.smoll}
            alt="Copenhagen Malmø FGC"
            src={coma}
          />
          <Image
            className={styles.smoll}
            alt="Copenhagen Esport"
            src={cphEsports}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Sponsors;
