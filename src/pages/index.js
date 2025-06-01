import Layout from "@/layouts";

import Hero from "@/sections/Hero";
import Information from "@/sections/Information";
import Contact from "@/sections/Contact";
import Gallery from "@/sections/Gallery";
import Results from "@/sections/Results";
import Events from "@/sections/Events";
import Sponsors from "@/sections/Sponsors";

export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* <Information /> */}
      {/* <Events /> */}
      <Results />
      <Gallery />
      <Sponsors />
      <Contact />
    </Layout>
  );
}
