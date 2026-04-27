"use client";

import { useCallback, useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/container";
import events from "@/data/events.json";
import styles from "../page.module.css";

const years = Object.keys(events).sort((a, b) => Number(b) - Number(a));

function place(result: string) {
  const match = result.match(/^(\d+)\.\s/);
  return match ? match[1] : null;
}

function name(result: string) {
  return result.replace(/^\d+\.\s/, "");
}

export default function LegacyYear({ params }: { params: Promise<{ year: string }> }) {
  const router = useRouter();
  const { year: param } = use(params);
  const year = years.includes(param) ? param : years[0];
  const data = events[year as keyof typeof events];
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [year]);

  const switchYear = useCallback((y: string) => {
    if (y === year) return;
    setVisible(false);
    setTimeout(() => router.push(`/legacy/${y}`), 150);
  }, [year, router]);

  return (
    <Container fill flexDirection="column" alignItems="flexStart">
      <div className={styles.page}>
        <h1 className={styles.title}>Legacy</h1>

        <nav className={styles.years}>
          {years.map((y) => (
            <button
              key={y}
              className={y === year ? styles.yearActive : styles.year}
              onClick={() => switchYear(y)}
            >
              {y}
            </button>
          ))}
        </nav>

        <div className={styles.content} style={{ opacity: visible ? 1 : 0 }}>
          <div className={styles.events}>
            {data.main.map((event) => (
              <div key={event.title} className={styles.event}>
                <div className={styles.eventHeader}>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.eventTitle}
                  >
                    {event.title}
                  </a>
                </div>

                <ol className={styles.results}>
                  {event.results.map((r) => (
                    <li key={r} className={styles.result} data-place={place(r)}>
                      <span className={styles.pos}>{place(r)}</span>
                      <span className={styles.player}>{name(r)}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {data.side.length > 0 && (
            <div className={styles.side}>
              <h2 className={styles.sideTitle}>Side Events</h2>
              <div className={styles.sideEvents}>
                {data.side.map((s) => (
                  <div key={s.title} className={styles.sideEvent}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sideEventTitle}
                      >
                        {s.title}
                      </a>
                    ) : (
                      <span className={styles.sideEventTitle}>{s.title}</span>
                    )}
                    {"results" in s && s.results && (
                      <ol className={styles.sideResults}>
                        {s.results.map((r) => (
                          <li
                            key={r}
                            className={styles.sideResult}
                            data-place={place(r)}
                          >
                            <span className={styles.pos}>{place(r)}</span>
                            <span className={styles.player}>{name(r)}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
