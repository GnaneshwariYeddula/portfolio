import React from 'react';
import { GraduationCap, Award, Code2, Atom, Sparkles } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Award: Award,
  Code2: Code2,
  Atom: Atom,
};

export default function StatsBar() {
  return (
    <section className="relative z-10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {stats.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:bg-slate-900/80 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight group-hover:text-cyan-300">
                      {item.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-300">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {item.sub}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
