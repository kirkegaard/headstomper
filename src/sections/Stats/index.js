import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Event from "@/components/Event";

import data from "@/data/events-2023.json";

import styles from "./index.module.css";

const Stats = () => {
  return (
    <Section id="results" className={styles.container}>
      <Container>
        <h1 className="title">2023 results</h1>
        <Grid>
          {data.main.map((props, index) => (
            <Event key={index} {...props} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Stats;
