import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import AIChat from './components/AIChat'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
      <AIChat />
    </main>
  )
}

export default App
