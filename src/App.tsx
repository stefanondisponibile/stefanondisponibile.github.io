import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 focus:outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
