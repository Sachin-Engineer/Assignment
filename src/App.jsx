import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ExpertsSection from "./components/ExpertsSection"
import ClientsSection from "./components/ClientsSection"
import ServicesSection from "./components/ServicesSection"
import ClientStoriesSection from "./components/ClientStoriesSection"
import ThodaAurSection from "./components/ThodaAurSection"

function App() {

  return (
    <>
      <header className="pl-5 pr-5 pt-3 pb-3">
        <Header />
      </header>

      <section className="Hero-Section pl-5 pr-5 pt-3 pb-3">
        <HeroSection />
      </section>

      <section className="pl-5 pr-5 pt-3 pb-3">
        <ExpertsSection />
      </section>

      <section className="pl-5 pr-5 pt-3 pb-3">
        <ClientsSection />
      </section>

      <section className="pl-5 pr-5 pt-3 pb-3">
        <ServicesSection />
      </section>

      <section>
        <ThodaAurSection />
      </section>

      <section>
        <ClientStoriesSection />
      </section>
    </>
  )
} export default App
