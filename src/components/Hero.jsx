import { MapPin, Mail, Github, Linkedin, ArrowDown, Sparkles } from 'lucide-react'
import { person, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6 max-w-5xl mx-auto">

      {/* Top badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-200 rounded-full text-sm text-violet-700 font-medium">
          <Sparkles size={14} />
          Open to new opportunities
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col sm:flex-row items-center gap-10">

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-violet-200">
            <span className="text-5xl font-bold text-white">{person.avatarInitials}</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm <span className="text-violet-600">{person.name}</span> 👋
          </h1>
          <p className="mt-2 text-xl font-medium text-slate-500">{person.role}</p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">{person.bio}</p>

          {/* Location + email */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-violet-500" />
              {person.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-violet-500" />
              {person.email}
            </span>
          </div>

          {/* Social buttons */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="text-3xl font-extrabold text-violet-600">{s.value}</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="mt-12 flex justify-center animate-bounce">
        <a href="#skills" aria-label="Scroll down">
          <ArrowDown size={22} className="text-slate-400" />
        </a>
      </div>
    </section>
  )
}
