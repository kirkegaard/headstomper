import { CONTACT_EMAIL, SOCIALS } from "@/lib/constants";
import { Section } from "./section";
import styles from "./contact.module.css";

export function Contact() {
  return (
    <Section>
      <div className={styles.content}>
        <p className={styles.text}>
          Headstomper is Scandinavia&rsquo;s greatest fighting game event - born
          from a love of competition and community in Copenhagen and Malm&ouml;.
        </p>
        <p className={styles.text}>
          Questions? Feedback? Contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>
        </p>
        <div className={styles.socials}>
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
        </div>
      </div>
    </Section>
  );
}
