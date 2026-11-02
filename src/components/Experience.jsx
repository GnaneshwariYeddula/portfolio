import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Code2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Internship Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Practical Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Impact
            </span>
          </h2>
        </div>

        {/* Streamlined Card */}
        <div className="max-w-3xl mx-auto">
          <SpotlightCard className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {experience.role}
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  {experience.type} • 3 End-to-End Applications
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{experience.duration}</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {experience.highlights.map((pt, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Micro Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">React.js</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">Node.js</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">Express.js</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">MongoDB</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">REST APIs</span>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
