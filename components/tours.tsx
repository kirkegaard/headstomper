import Image from "next/image";
import { Section } from "./section";
import styles from "./tours.module.css";

const tours = [
  {
    name: "Arc World Tour",
    image: "/assets/world-tour/arc-system.svg",
    href: "https://www.arcsystemworks.jp/awt2026/schedule/",
    width: 200,
    height: 80,
  },
  {
    name: "Tekken World Tour",
    image: "/assets/world-tour/tekken.png",
    href: "https://tekkenworldtour.com/",
    width: 200,
    height: 80,
  },
];

export function Tours() {
  return (
    <Section title="World Tour Games">
      <p className={styles.text}>
        We&rsquo;re proud to be an official stop on this year&rsquo;s world
        tour circuits. Compete at the highest level and earn points towards the
        global finals right here in Malm&ouml;.
      </p>
      <div className={styles.grid}>
        {tours.map((tour) => (
          <a
            key={tour.name}
            href={tour.href}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.logo}
          >
            <Image
              src={tour.image}
              alt={tour.name}
              width={tour.width}
              height={tour.height}
              style={{ objectFit: "contain" }}
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
