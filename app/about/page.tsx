import { FaDiscord, FaTwitch, FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/container";
import styles from "./page.module.css";

const social = [
  { href: "https://x.com/Headstomper/", icon: FaXTwitter, label: "X" },
  { href: "https://twitch.tv/headstomper", icon: FaTwitch, label: "Twitch" },
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
        <p>Scandinavia’s Greatest Fighting Game Tournament.</p>

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
