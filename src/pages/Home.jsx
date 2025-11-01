import Header from "../components/sections/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import InfoEvent from "../components/sections/InfoEvent/InfoEvent";
import About from "../components/sections/About/About";
import Values from "../components/sections/Values/Values";
import ForWho from "../components/sections/ForWho/ForWho";
import Timeline from "../components/sections/Timeline/Timeline";
import Supporters from "../components/sections/Supporters/Supporters";
import FAQ from "../components/sections/FAQ/FAQ";
import CTAFinal from "../components/sections/CTAFinal/CTAFinal";
import Footer from "../components/sections/Footer/Footer";
import SpeakersSection from "../components/sections/SpeakersSection/SpeakersSection";

function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <Hero />
        <Supporters />
        <About />
        <Timeline />
        <SpeakersSection />
        <ForWho />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

//        <InfoEvent />
/*         <Hero />
        <Supporters />
        <About />
        <Values />
        <ForWho />
        <Timeline />
        <FAQ />
        <CTAFinal />
*/
