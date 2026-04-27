"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/legacy", label: "Legacy" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={path === href ? styles.active : styles.link}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
