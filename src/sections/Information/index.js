import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Information = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1>Information</h1>
        <p>The whereabouts</p>
      </Container>
    </Section>
  );
};

export default Information;
