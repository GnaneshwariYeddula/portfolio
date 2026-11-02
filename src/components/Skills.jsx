import React, { useState } from 'react';
import { Cpu, CheckCircle2, Sparkles, Atom } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Front-End', 'Back-End & APIs', 'Databases & Cloud', 'Languages', 'AI & Quantum Science', 'Developer Tools'];

  const displayedCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === activeTab);

  return (
    <section id="skills" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Core Competencies
            </span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {tab === 'AI & Quantum Science' && <Atom className="w-3 h-3 inline mr-1 text-purple-300" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCategories.map((cat, idx) => (
            <SpotlightCard
              key={idx}
              className={`p-5 ${
                cat.highlight
                  ? 'border-purple-500/30 bg-purple-950/10'
                  : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
                  {cat.highlight ? (
                    <Atom className="w-4 h-4 text-purple-400" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                  <span>{cat.title}</span>
                </h3>
                {cat.highlight && (
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono">
                    Special Focus
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                      cat.highlight
                        ? 'bg-purple-500/15 text-purple-200 border border-purple-500/30'
                        : 'bg-white/5 text-slate-200 border border-white/5 hover:border-cyan-500/30'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
