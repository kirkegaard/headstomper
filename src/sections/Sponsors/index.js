import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Sponsors = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1>Sponsors</h1>
        <p>List of sponsors</p>
      </Container>
    </Section>
  );
};

export default Sponsors;