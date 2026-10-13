import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import { profile } from './content'

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 focus:outline-none">
        <div className="py-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">{profile.tagline}</p>
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
