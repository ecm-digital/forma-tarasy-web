import { Projects } from './components/AboutAndProjects';
import { Contact, Footer, MobileStickyCta } from './components/ContactAndFooter';
import { Header } from './components/Header';
import { Hero, StatsStrip } from './components/Hero';
import { QuickQuote } from './components/OfferSections';
import { Faq, Pricing, Process } from './components/PricingServicesProcess';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Pricing />
        <QuickQuote />
        <Projects />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}

export default App;
