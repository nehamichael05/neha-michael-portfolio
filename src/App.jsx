import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Skills />
      </div>
      <Projects />
      <div className="bg-white">
        <Experience />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
