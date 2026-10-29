import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from 'lucide-react'
import { person } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section-padding px-4 sm:px-6 max-w-5xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-xs font-semibold text-violet-600 mb-4">
          <MessageSquare size={12} />
          Let's talk
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Get In Touch</h2>
        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          Have an opportunity or a question? I'd love to hear from you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">

        {/* Left: contact info */}
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Contact Details</h3>

            <div className="space-y-4">
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-violet-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  <Mail size={18} className="text-violet-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email</div>
                  <div className="text-sm font-semibold text-slate-800">{person.email}</div>
                </div>
              </a>

              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Github size={18} className="text-slate-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">GitHub</div>
                  <div className="text-sm font-semibold text-slate-800">github.com/nehamichael05</div>
                </div>
              </a>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Linkedin size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">LinkedIn</div>
                  <div className="text-sm font-semibold text-slate-800">linkedin.com/in/neha-michael</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-rose-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-800">{person.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: "message" card (static — no form submission) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill this in and copy the details — or just email me directly at{' '}
              <a href={`mailto:${person.email}`} className="text-violet-600 font-medium hover:underline">
                {person.email}
              </a>
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Hi Neha, I'd like to talk to you about..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-slate-50 resize-none"
                />
              </div>
            </div>
          </div>

          <a
            href={`mailto:${person.email}`}
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-violet-600 text-white font-semibold text-sm rounded-xl hover:bg-violet-700 transition-colors"
          >
            <Send size={15} />
            Send via Email
          </a>
        </div>
      </div>
    </section>
  )
}
