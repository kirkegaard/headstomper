import Container from "@/components/Container";
import Section from "@/components/Section";
import styles from "./index.module.css";

const Tournaments = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1>Tournaments</h1>
        <p>List of tournaments</p>
      </Container>
    </Section>
  );
};

export default Tournaments;
