import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filterTabs = ['All', 'Featured', 'MERN Stack', 'IoT & Full-Stack'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    if (filter === 'MERN Stack') return p.category.includes('MERN');
    if (filter === 'IoT & Full-Stack') return p.category.includes('IoT');
    return true;
  });

  return (
    <section id="projects" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Demonstrated Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Featured Projects &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Patented Engineering
            </span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'Featured' && <Sparkles className="w-3 h-3 inline mr-1 text-cyan-300" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="p-5 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Header Pills */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300 text-[11px] font-mono">
                    {project.category}
                  </span>

                  {project.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center space-x-1 ${
                        project.badgeType === 'patent'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : project.badgeType === 'progress'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-white/5 text-slate-300'
                      }`}
                    >
                      {project.badgeType === 'patent' && <ShieldCheck className="w-3 h-3" />}
                      <span>{project.badge}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Punchy Points */}
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom GitHub Link */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>

                {project.secondaryGithubUrl && (
                  <a
                    href={project.secondaryGithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Editor Repo</span>
                  </a>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
