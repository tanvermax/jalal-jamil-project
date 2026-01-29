import { Helmet } from "react-helmet-async";
import About from "../About";
import Companies from "./Companies";
import Hero from "./Hero";
import Services from "./Services";
import News from "./News";
import CEOMessage from "@/components/layout/CEOMessage";






export default function Home() {



  return (
    <div>
      <Helmet>
        <title>Jalal Jamil Project Company | Saudi Group of Companies</title>
        <meta
          name="description"
          content="Jalal Jamil Project Company is a trusted Saudi group of companies providing construction, logistics, food services, and manpower solutions across Saudi Arabia."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Jalal Jamil Project Company" />
        <meta
          property="og:description"
          content="Construction, logistics, food services & manpower solutions across Saudi Arabia."
        />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Hero />
      <About />
      <Companies />
      <News/>
      <CEOMessage/>
      <Services />


    </div>
  );
}