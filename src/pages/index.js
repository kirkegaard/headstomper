import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Information from "@/sections/Information";
import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Stats from "@/sections/Stats";
import Events from "@/sections/Events";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Information />
      <Events />
      <Gallery />
      <Stats />
      <Contact />
    </Layout>
  );
}
