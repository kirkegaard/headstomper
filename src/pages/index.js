import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Events from "@/sections/Events";
import Information from "@/sections/Information";
import Sponsors from "@/sections/Sponsors";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Events />
      <Information />
      <Sponsors />
      <Contact />
    </Layout>
  );
}
