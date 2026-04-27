import { FaDiscord, FaTwitch, FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/container";
import styles from "./page.module.css";

const social = [
  { href: "https://x.com/Headstomper/", icon: FaXTwitter, label: "X" },
  { href: "https://twitch.tv/headstomper", icon: FaTwitch, label: "Twitch" },
  {
    href: "https://discord.gg/headstomper",
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
          Headstomper was born in the basements and backrooms of Malmö's
          underground scene, where a small crew of obsessive music lovers
          decided the city deserved something heavier. What started as a
          one-night experiment in 2019 quickly grew into one of Scandinavia's
          most talked-about extreme music gatherings — a festival built not on
          spectacle, but on sound.
        </p>
        <p>
          We are promoters, engineers, artists and fans who share a single
          conviction: that the music coming out of the underground right now is
          the most vital and uncompromising it has ever been. Headstomper exists
          to give that music a room, a rig and an audience willing to stand in
          the dark and feel it.
        </p>
        <p>
          Every edition is deliberately small. We cap capacity, we hand-pick the
          bill, and we spend an unreasonable amount of time on the sound system.
          Past editions have brought together artists from across Europe and
          beyond — spanning doom, death, noise, industrial and everything in
          between — united only by the requirement that they make the floor
          shake.
        </p>
        <p>
          Headstomper is run entirely on goodwill, sweat and an unhealthy
          passion for loud music. If any of that sounds familiar, you're already
          one of us.
        </p>

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
