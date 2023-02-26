import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Tournaments from "@/sections/Tournaments";
import Information from "@/sections/Information";
import Sponsors from "@/sections/Sponsors";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Tournaments />
      <Information />
      <Sponsors />
      <Contact />
    </Layout>
  );
}
