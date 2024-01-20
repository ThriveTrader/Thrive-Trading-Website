import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Sect from "../components/Sect";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/Contact";
import Vid from "../components/Vid";
import ContactS from "../components/ContactS";
import Imager from "../components/Imager";
import { Carousel } from "@material-tailwind/react";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Head>
        <title>Thrive Trader</title>
        <meta name="description" content="Learn Coding with Abhishek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <article className="rounded-xl border border-black w-full bggg p-4">
        <Hero />
      </article>
      <br></br>
      <article className="rounded-xl border border-black  w-full bggg p-4">
        <SectionTitle
          pretitle=""
          title="SEE WHAT MY CLIENT'S ARE SAYING ABOUT ME"
        ></SectionTitle>
        <Imager />
      </article>
      <br></br>
      <article className="rounded-xl border border-black  w-full bggg ">
      <Sect
        pretitle=""
        title="JOIN THE FAMILY OF 40K PROFITABLE TRADERS WHO ARE ACTIVELY TRADING WITH US FROM YEARS."
      ></Sect>
      </article>
      <br></br>
      <article className="rounded-xl border border-black  w-full bggg ">
      <SectionTitle pretitle="" title="RESULTS"></SectionTitle>
      <Video />
      </article>
      <br></br>
      <article className="rounded-xl border border-black w-full bggg ">
      <Sect pretitle="" title="WHAT WE OFFER"></Sect>
      <Benefits data={benefitOne} />
      </article>
      <br></br>
      <Card />
      <br></br>
      <article className="rounded-xl border border-black w-full bggg ">
      <SectionTitle pretitle="" title="JOIN MY TELEGRAM"></SectionTitle>
      <br></br>
      <Contact />
      <br></br>
      <SectionTitle pretitle="" title="FOLLOW MY PAGES"></SectionTitle>
      <ContactS />
      <br></br>
      </article>
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
};

export default Home;
