import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Event from "@/components/Event";
import data from "@/data/events-2025.json";

import styles from "./index.module.scss";

const Events = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Main Events</h1>

        <Grid>
          {data.main.map((props, index) => (
            <Event key={index} {...props} />
          ))}
        </Grid>

        {/* <h1 className="title">Side Events</h1> */}
        {/* <Grid className={styles.sideEvent}> */}
        {/*   {data.side.map((props, index) => ( */}
        {/*     <Event key={index} {...props} /> */}
        {/*   ))} */}
        {/* </Grid> */}
      </Container>
    </Section>
  );
};

export default Events;
