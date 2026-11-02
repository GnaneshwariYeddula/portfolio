import React from 'react';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0C1022] p-6 sm:p-8 text-white shadow-2xl shadow-indigo-950/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              {project.category}
            </span>
            {project.patentBadge && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{project.patentBadge}</span>
              </span>
            )}
            {project.statusBadge && (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
                {project.statusBadge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300 font-mono">Role: {project.role}</p>
        </div>

        {/* Short Summary */}
        <p className="mt-4 text-slate-300 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Architecture Pipeline Box */}
        {project.architecture && (
          <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-1.5">
            <div className="text-xs font-mono uppercase text-slate-400 flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>System Architecture Flow</span>
            </div>
            <div className="text-xs sm:text-sm font-mono text-cyan-300 font-medium">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Engineering Highlights */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            Technical Implementation & Highlights
          </h4>
          <div className="space-y-2.5">
            {project.highlights.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.secondaryGithubUrl && (
              <a
                href={project.secondaryGithubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>Collab Editor Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
          >
            Close Deep-Dive
          </button>
        </div>

      </div>
    </div>
  );
}
