import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Brain, 
  FileCode, 
  Database, 
  Cloud, 
  Cpu, 
  Atom,
  CheckCircle2
} from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

const certIcons = {
  Brain: Brain,
  FileCode: FileCode,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  Atom: Atom,
};

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Standing & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Certifications
            </span>
          </h2>
        </div>

        {/* Education 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {education.map((edu, idx) => (
            <SpotlightCard key={idx} className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400">{edu.year}</span>
                  <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    {edu.score}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-xs text-slate-400 mb-2">{edu.institution}</p>
              </div>

              <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-mono text-cyan-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.highlight}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Verified Certifications & Workshops
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((cert, idx) => {
              const Icon = certIcons[cert.icon] || Award;
              const isQuantum = cert.icon === 'Atom';
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all text-center flex flex-col items-center justify-between ${
                    isQuantum 
                      ? 'bg-purple-950/20 border-purple-500/30 hover:border-purple-400' 
                      : 'bg-slate-900/60 border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 mb-2">
                    <Icon className={`w-4 h-4 ${isQuantum ? 'text-purple-400' : 'text-cyan-400'}`} />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1 line-clamp-2">
                    {cert.title}
                  </h4>
                  <div className="text-[10px] text-slate-400 font-mono mb-2">
                    {cert.issuer}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                    isQuantum 
                      ? 'bg-purple-500/20 text-purple-300' 
                      : 'bg-cyan-500/10 text-cyan-300'
                  }`}>
                    {cert.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
