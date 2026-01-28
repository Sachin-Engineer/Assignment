import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ExpertsSection from "./components/ExpertsSection"
import ClientsSection from "./components/ClientsSection"
import ServicesSection from "./components/ServicesSection"

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
    </>
  )
}

export default App
