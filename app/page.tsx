import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Overlay } from "@/components/overlay";
import { Slider } from "@/components/slider";
import data from "@/data/gallery-2025.json";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Headstomper 2026",
  description: "Scandinavia's biggest fighting game tournament.",
  startDate: "2026-11-06",
  endDate: "2026-11-08",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Malmö, Sweden",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malmö",
      addressCountry: "SE",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Headstomper",
    url: "https://headstomper.com",
  },
};

export default function Home() {
  return (
    <Container fill="fixed">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <h1 className={styles.sr}>
        Headstomper — 06-08 November 2026, Malmö, Sweden
      </h1>
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
