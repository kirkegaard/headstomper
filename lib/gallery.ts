import { readdir } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "public", "assets", "gallery");
const image = /\.(jpe?g|png|webp|avif)$/i;

/** Returns gallery years with photos, newest first. */
export async function years() {
  const entries = await readdir(root, { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory() && /^\d{4}$/.test(entry.name))
    .map((entry) => entry.name);
  const found = await Promise.all(
    dirs.map(async (year) => ((await photos(year)).length ? year : null)),
  );

  return found
    .filter((year): year is string => year !== null)
    .sort((a, b) => Number(b) - Number(a));
}

/** Returns sorted photo filenames for a year. */
export async function photos(year: string) {
  const files = await readdir(join(root, year));
  return files.filter((file) => image.test(file)).sort();
}
