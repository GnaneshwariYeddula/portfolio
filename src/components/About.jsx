import React from 'react';
import { 
  User, 
  Sparkles, 
  Award, 
  Atom, 
  Code2, 
  GraduationCap, 
  CheckCircle2, 
  Cpu, 
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Core Focus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Engineering at the Intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Web, AI & Quantum Science
            </span>
          </h2>
        </div>

        {/* 4 Expressive Focus Cards (No walls of text!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 1: AI & Quantum Science Focus */}
          <SpotlightCard className="p-6 border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-slate-900/60 to-slate-900/60">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                <Atom className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold text-white">Quantum Science & AI Research</h3>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono">Special Interest</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deeply passionate about modern science and quantum computing: exploring <strong className="text-white">qubits, superposition, quantum gates/circuits</strong>, and beginner <strong className="text-purple-300">Qiskit</strong>, combined with generative AI prompt engineering.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono">Quantum Superposition</span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono">Qiskit Circuits</span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono">Generative AI</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Full-Stack MERN Expertise */}
          <SpotlightCard className="p-6 border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-slate-900/60">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold text-white">Full-Stack MERN Architecture</h3>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">Core Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Proven full-stack implementation across <strong className="text-white">MongoDB, Express.js, React.js, and Node.js</strong>. Completed an intensive 8-week MERN internship delivering 3 full-stack applications with REST APIs.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">MongoDB Schemas</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">Express REST APIs</span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-mono">React 18 & Hooks</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Academic Excellence */}
          <SpotlightCard className="p-6 border-indigo-500/20 bg-gradient-to-br from-indigo-950/20 via-slate-900/60 to-slate-900/60">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold text-white">Top Academic Performance</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">CGPA: 8.57</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  B.Tech in Computer Science Engineering at <strong className="text-white">Chaitanya Bharathi Institute of Technology (JNTUA)</strong>. Strong foundations in Data Structures, Relational DBMS, and Algorithms.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 text-[11px] font-mono">Class X SSC: 97.8%</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 text-[11px] font-mono">CBSE XII: 77.4%</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 4: Patent Innovation */}
          <SpotlightCard className="p-6 border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-slate-900/60 to-slate-900/60">
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold text-white">National Patent Filed</h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">TRATAYANTRA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered an autonomous IoT gas-leak detection and servo-driven shutoff valve system using ESP32, MQ-6 sensors, and Django/Firebase cloud hazard alerts.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-mono">Hardware Auto-Shutoff</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-mono">Firebase Realtime DB</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
