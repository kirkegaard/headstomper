import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Gallery } from "@/components/gallery";
import { PageHeader } from "@/components/page-header";
import { ScrollFade } from "@/components/scroll-fade";
import { photos, years } from "@/lib/gallery";
import styles from "../page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await years()).map((year) => ({ year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const title = `${year} Gallery – Headstomper`;
  const description = `Photos from Headstomper ${year} — Scandinavia's greatest fighting game event.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function GalleryYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const all = await years();
  if (!all.includes(year)) notFound();

  return (
    <Container fill flexDirection="column" alignItems="flexStart">
      <PageHeader title="Gallery">
        <ScrollFade className={styles.years}>
          {all.map((entry) => (
            <a
              key={entry}
              href={`/gallery/${entry}`}
              className={entry === year ? styles.yearActive : styles.year}
            >
              {entry}
            </a>
          ))}
        </ScrollFade>
      </PageHeader>
      <div className={styles.page}>
        <div className={styles.content}>
          <Gallery
            photos={await photos(year)}
            basePath={`/assets/gallery/${year}`}
          />
        </div>
      </div>
    </Container>
  );
}
