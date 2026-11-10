import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = join(process.cwd(), "public", "assets", "gallery");
const image = /\.(jpe?g|png|webp|avif)$/i;

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const found = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return walk(path);
      return image.test(entry.name) ? [path] : [];
    }),
  );

  return found.flat();
}

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

/** Returns sorted photo paths for a year, relative to the year folder. */
export async function photos(year: string) {
  const dir = join(root, year);
  const files = await walk(dir);

  return files.map((file) => relative(dir, file).replaceAll(sep, "/")).sort();
}
