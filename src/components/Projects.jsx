import { ExternalLink, Github, FolderOpen } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Coloured top band */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        {/* Emoji icon + title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl shadow-sm`}>
              {project.emoji}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live demo button */}
        {(project.live || project.github) && (
          <a
            href={project.live || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors"
          >
            {project.live ? <ExternalLink size={14} /> : <Github size={14} />}
            {project.live ? 'View Live Demo' : 'View on GitHub'}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-4 sm:px-6 max-w-5xl mx-auto">

      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-full text-xs font-semibold text-violet-600 mb-4">
          <FolderOpen size={12} />
          Things I've built
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Projects</h2>
        <p className="mt-3 text-slate-500 max-w-md mx-auto">
          Projects I have built while studying, from IoT and machine learning to web apps.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
