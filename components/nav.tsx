"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import styles from "./nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/#lineup", label: "Lineup" },
  { href: "/#info", label: "Info" },
  { href: "/legacy", label: "Legacy" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.toggle}
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={open ? styles.x : styles.burger} />
      </button>
      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={path === href ? styles.active : styles.link}
            onClick={close}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://start.gg/Headstomper"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.link}
          onClick={close}
        >
          Register
        </a>
      </div>
    </nav>
  );
}
