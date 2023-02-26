import Container from "@/components/Container";
import Section from "@/components/Section";
import Event from "@/components/Event";
import styles from "./index.module.css";

import data from "@/data/events.json";

const Events = () => {
  console.log(data);
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Main Events</h1>

        <div className={styles.grid}>
          {data.main.map((props, index) => (
            <Event key={index} {...{ props }} />
          ))}
        </div>

        <h1 className="title">Side Events</h1>
        <div className={styles.grid}>
          {data.side.map((props, index) => (
            <Event key={index} {...{ props }} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Events;
