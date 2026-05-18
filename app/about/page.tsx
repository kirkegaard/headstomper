import type { Metadata } from "next";
import { ABOUT_DESCRIPTION, SOCIALS } from "@/lib/constants";
import { Container } from "@/components/container";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_DESCRIPTION,
  openGraph: {
    title: "About – Headstomper",
    description: ABOUT_DESCRIPTION,
  },
};

export default function About() {
  return (
    <Container
      fill
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={styles.page}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>About</h1>
        <p>
          Headstomper is Scandinavia&apos;s greatest fighting game event - born
          from a love of competition and community.
        </p>
        <p>
          We are two FGC groups from Copenhagen and Malmö who came together to
          build something bigger than either of us could alone. What started in
          humble living rooms with CRT TVs, Super Nintendo, and Dreamcast has
          grown into the region&apos;s premier fighting game tournament.
        </p>
        <p>Same passion. Bigger stage.</p>

        <footer className={styles.footer}>
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Follow us on ${label}`}
              className={styles.icon}
            >
              <Icon size={20} aria-hidden />
            </a>
          ))}
        </footer>
      </div>
    </Container>
  );
}
