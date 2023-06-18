import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Events from "@/sections/Events";
import Thankyou from "@/sections/Information/thankyou";
import Sponsors from "@/sections/Sponsors";
import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Rules from "@/sections/Rules";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Thankyou />
      <Stats />
      <Gallery />
      <Sponsors />
      <Contact />
    </Layout>
  );
}
