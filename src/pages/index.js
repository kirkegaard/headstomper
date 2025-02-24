import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Upcoming from "@/sections/Information/Upcoming";
import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Stats from "@/sections/Stats";
import Events from "@/sections/Events";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Upcoming />
      <Events />
      <Stats />
      <Gallery />
      <Contact />
    </Layout>
  );
}
