import type { Metadata } from "next";
import { FaDiscord, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Container } from "@/components/container";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Headstomper is Scandinavia's biggest fighting game event — born from a love of competition and community in Copenhagen and Malmö.",
  openGraph: {
    title: "About – Headstomper",
    description:
      "Headstomper is Scandinavia's biggest fighting game event — born from a love of competition and community in Copenhagen and Malmö.",
  },
};

const social = [
  { href: "https://x.com/Headstomper/", icon: FaXTwitter, label: "X" },
  { href: "https://twitch.tv/headstomperTV", icon: FaTwitch, label: "Twitch" },
  {
    href: "https://www.youtube.com/@headstompertv",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    href: "https://discord.gg/MJzU8Gn6gt",
    icon: FaDiscord,
    label: "Discord",
  },
];

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
          Headstomper is Scandinavia&apos;s biggest fighting game event - born
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
          {social.map(({ href, icon: Icon, label }) => (
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
