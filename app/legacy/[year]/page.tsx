import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ScrollFade } from "@/components/scroll-fade";
import events from "@/data/events.json";
import styles from "../page.module.css";

const years = Object.keys(events).sort((a, b) => Number(b) - Number(a));

export function generateStaticParams() {
  return years.map((year) => ({ year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year: param } = await params;
  const year = years.includes(param) ? param : years[0];
  return {
    title: `${year} Results – Headstomper Legacy`,
    description: `Tournament results from Headstomper ${year} — Scandinavia's biggest fighting game event.`,
    openGraph: {
      title: `${year} Results – Headstomper Legacy`,
      description: `Tournament results from Headstomper ${year} — Scandinavia's biggest fighting game event.`,
    },
  };
}

function place(result: string) {
  const match = result.match(/^(\d+)\.\s/);
  return match ? match[1] : null;
}

function playerName(result: string) {
  return result.replace(/^\d+\.\s/, "");
}

export default async function LegacyYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year: param } = await params;
  const year = years.includes(param) ? param : years[0];
  const data = events[year as keyof typeof events];

  return (
    <Container fill flexDirection="column" alignItems="flexStart">
      <PageHeader title="Legacy">
        <ScrollFade className={styles.years}>
          {years.map((y) => (
            <a
              key={y}
              href={`/legacy/${y}`}
              className={y === year ? styles.yearActive : styles.year}
            >
              {y}
            </a>
          ))}
        </ScrollFade>
      </PageHeader>

      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.events}>
            {data.main.map((event) => (
              <div key={event.title} className={styles.event}>
                <div className={styles.eventHeader}>
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.eventTitle}
                    >
                      {event.title}
                    </a>
                  ) : (
                    <span className={styles.eventTitle}>{event.title}</span>
                  )}
                </div>
                <ol className={styles.results}>
                  {event.results.map((r) => (
                    <li key={r} className={styles.result} data-place={place(r)}>
                      <span className={styles.pos}>{place(r)}</span>
                      <span className={styles.player}>{playerName(r)}</span>
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
                            <span className={styles.player}>
                              {playerName(r)}
                            </span>
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
