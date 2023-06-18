import Link from "next/link";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Event from "@/components/Event";

import data from "@/data/events.json";

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

          <Event
            title="Side events"
            url="https://www.start.gg/tournament/side-events-headstomper-2023/events"
            streams={[
              {
                title: "Neophos",
                url: "https://www.twitch.tv/neophos/videos?filter=archives&sort=time",
              },
            ]}
          />
        </Grid>
      </Container>
    </Section>
  );
};

export default Stats;
