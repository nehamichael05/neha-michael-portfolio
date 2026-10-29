import { Heart, Code2 } from 'lucide-react'
import { person } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
            <Code2 size={13} className="text-white" />
          </div>
          <span className="font-semibold text-white">{person.name}</span>
        </div>
        <p className="flex items-center gap-1.5 text-xs">
          Built with <Heart size={11} className="text-rose-400 fill-rose-400" /> using React + Tailwind CSS
        </p>
        <p className="text-xs">© {new Date().getFullYear()} {person.name}</p>
      </div>
    </footer>
  )
}
