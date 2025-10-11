// src/App.jsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoEvent from "./components/InfoEvent/InfoEvent";
import About from "./components/About/About";
import Values from "./components/Values/Values";
import ForWho from "./components/ForWho/ForWho";
import Timeline from "./components/Timeline/Timeline";
import Supporters from "./components/Supporters/Supporters";
import FAQ from "./components/FAQ/FAQ";
import CTAFinal from "./components/CTAFinal/CTAFinal";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <InfoEvent />
        <About />
        <Values />
        <ForWho />
        <Timeline />
        <Supporters />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
