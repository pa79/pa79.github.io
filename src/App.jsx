import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import CVSection from './components/CVSection'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <CVSection />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
