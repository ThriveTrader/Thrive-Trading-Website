import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Sect  from "../components/Sect";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/Contact";
import Vid from "../components/Vid";
import ContactS from "../components/ContactS";
import Imager from "../components/Imager";
import { Carousel } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Thrive Trader</title>
        <meta
          name="description"
          content="Learn Coding with Abhishek"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle=""
        title="SEE WHAT MY CLIENT'S ARE SAYING ABOUT ME">
      </SectionTitle>
      <Imager />
      <Sect pretitle="" title="JOIN THE FAMILY OF 40K PROFITABLE TRADERS WHO ARE ACTIVELY TRADING WITH US FROM YEARS.">

      </Sect>
      <SectionTitle
        pretitle=""
        title="RESULTS">
      </SectionTitle>
      <Video />
      <Video />
      <SectionTitle
        pretitle=""
        title="CLIENT TESTIMONIALS"></SectionTitle>
      {/*
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
        </SectionTitle> 
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />*/}
      <Vid />
      <Video />
      <SectionTitle
        pretitle=""
        title="JOIN MY TELEGRAM">
      </SectionTitle>
      <Contact />
      <SectionTitle
        pretitle=""
        title="FOLLOW MY PAGES"></SectionTitle>
        <ContactS />
       {/*
      <Testimonials /> 
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
  <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;