import Hero from "./components/Hero";
import Process from "./components/Process";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Process />
        <Templates />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
