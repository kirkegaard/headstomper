import { redirect } from "next/navigation";
import { years } from "@/lib/gallery";

export default async function Gallery() {
  const [latest] = await years();
  redirect(`/gallery/${latest}`);
}
