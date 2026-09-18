import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
      </main>
      <Contact />
    </>
  )
}

export default App
