import { Zap } from 'lucide-react'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-4 sm:px-6 max-w-5xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-xs font-semibold text-violet-600 mb-4">
          <Zap size={12} />
          What I work with
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Skills & Tools</h2>
        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          Technologies I have used in my projects and coursework.
        </p>
      </div>

      {/* Skill groups */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {skills.map((group) => (
          <div key={group.category} className="sm:flex sm:items-start sm:gap-6">
            <div className="sm:w-32 flex-shrink-0 text-sm font-bold text-slate-700 mb-2 sm:mb-0 sm:pt-1">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
