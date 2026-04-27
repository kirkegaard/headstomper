import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Overlay } from "@/components/overlay";
import { Slider } from "@/components/slider";
import data from "@/data/gallery-2025.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container fill="fixed">
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
              "rgb(255, 5, 131, 0.5)",
              "rgba(0,0,0,0.1)",
            ],
          },
        ]}
        effect={[
          { type: "grayscale", amount: 0.35 },
          { type: "levels", saturate: 0.75 },
          { type: "dots", color: "rgba(0,0,0,0.075)", size: 4, radius: 0.25 },
        ]}
      >
        <Slider
          data={data}
          basePath="/assets/gallery/2025"
          interval={4500}
          transition={2500}
          easing="easeInOut"
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
