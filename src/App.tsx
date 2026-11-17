import { About, LeadStrip, Projects } from './components/AboutAndProjects';
import { Contact, ExitIntentModal, Footer, MobileStickyCta } from './components/ContactAndFooter';
import { Header } from './components/Header';
import { Hero, StatsStrip } from './components/Hero';
import { EstateFit, QuickQuote, StartOffer, TownhousePack } from './components/OfferSections';
import { Faq, Pricing, Process, Services, Testimonials } from './components/PricingServicesProcess';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <StartOffer />
        <TownhousePack />
        <EstateFit />
        <QuickQuote />
        <About />
        <Projects />
        <LeadStrip />
        <Pricing />
        <Services />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCta />
      <ExitIntentModal />
    </>
  );
}

export default App;
