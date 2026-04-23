import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Overlay } from "@/components/overlay";
import { Slider } from "@/components/slider";
import data from "@/data/gallery-2025.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container fill>
      <Overlay
        layers={[
          {
            type: "gradient",
            direction: "to bottom",
            colors: ["transparent", "rgba(0,0,0,1)"],
          },
          {
            type: "gradient",
            colors: [
              "rgba(0,0,0,0.8)",
              "rgb(255, 5, 131, 0.4)",
              "rgba(0,0,0,0.1)",
            ],
          },
        ]}
        effect={{
          type: "dots",
          color: "rgba(0,0,0,0.05)",
          size: 4,
          radius: 0.35,
        }}
      >
        <Slider
          data={data}
          basePath="/assets/gallery/2025"
          interval={5000}
          transition={1000}
        />
      </Overlay>
      <div className={styles.hero}>
        <Hero />
      </div>
      <footer className={styles.footer}>
        <a
          href="https://x.com/Headstomper/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Follow us on X
        </a>
      </footer>
    </Container>
  );
}
