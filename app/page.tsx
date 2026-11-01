import Hero from "./components/Hero";
import Process from "./components/Process";
import Templates from "./components/Templates";
import Experience from "./components/Experience";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Templates />
        <Experience />
        <Process />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
