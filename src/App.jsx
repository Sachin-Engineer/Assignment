import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

function App() {

  return (
    <>
      <header className="pl-5 pr-5 pt-3 pb-3">
        <Header />
      </header>

      <section className="Hero-Section pl-5 pr-5 pt-3 pb-3">
        <HeroSection />
      </section>
    </>
  )
}

export default App
