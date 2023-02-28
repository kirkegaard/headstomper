import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Rules = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Rules</h1>
        <p>Du skal lytte efter Glenn når han afholder Melty Blood!</p>
        <p>
          Det er den eneste regel er at Melty Blood spilles på Glenn´s bærbar på
          toilettet
        </p>
      </Container>
    </Section>
  );
};

export default Rules;
