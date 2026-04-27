import { redirect } from "next/navigation";
import events from "@/data/events.json";

const latest = Object.keys(events).sort((a, b) => Number(b) - Number(a))[0];

export default function Legacy() {
  redirect(`/legacy/${latest}`);
}
