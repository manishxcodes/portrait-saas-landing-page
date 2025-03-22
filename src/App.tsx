import Demo from "./components/Demo"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Features } from "./components/Features"
import { FAQ } from "./components/FAQ"
import { InfiniteMovingCardsDemo } from "./components/MovingCard"
import { Pricing } from "./components/Pricing"
import { Footer } from "./components/Footer"
function App() {

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <FAQ />
      <InfiniteMovingCardsDemo />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
