import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-padding px-4 sm:px-6 max-w-5xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-xs font-semibold text-violet-600 mb-4">
          <Briefcase size={12} />
          Experience & research
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Experience</h2>
        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          My internship and research work so far.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200" />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-14">

              {/* Circle dot on the line */}
              <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-violet-600 border-4 border-white shadow-md" />

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                    <p className="text-violet-600 font-semibold text-sm">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full w-fit">
                    <Calendar size={11} />
                    {job.period}
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
