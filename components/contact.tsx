import { FaDiscord, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Section } from "./section";
import styles from "./contact.module.css";

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

export function Contact() {
  return (
    <Section title="Contact">
      <div className={styles.content}>
        <p className={styles.text}>
          Headstomper is Scandinavia&rsquo;s greatest fighting game event - born
          from a love of competition and community in Copenhagen and Malm&ouml;.
        </p>
        <div className={styles.socials}>
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
        </div>
      </div>
    </Section>
  );
}
