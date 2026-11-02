import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Mail, 
  ShieldCheck, 
  Code2, 
  Atom,
  CheckCircle2, 
  Copy
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import DecryptedText from './DecryptedText';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Sharp, punchy text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 text-left">
            
            {/* Seeking Role Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">SDE Internships & Full-Time Roles</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Portfolio // Full-Stack & AI
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Ganeshwari{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  Yeddula
                </span>
              </h1>
              
              <div className="pt-1 flex items-center space-x-2 text-base sm:text-xl font-semibold text-slate-200">
                <span className="text-cyan-400">⚡</span>
                <span className="font-mono text-cyan-300">
                  <DecryptedText text="MERN Stack Developer • AI Web Designer" speed={25} />
                </span>
              </div>
            </div>

            {/* Concise One-Liner (NO WALL OF TEXT!) */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
              B.Tech CSE student (<span className="text-cyan-300 font-semibold font-mono">CGPA 8.57</span>) at CBIT JNTUA. Architecting high-performance MERN web apps with AI design workflows, and exploring <span className="text-purple-300 font-medium">Quantum Science</span>.
            </p>

            {/* Visual Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                <Code2 className="w-3.5 h-3.5" />
                <span>MERN Full-Stack</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Website Prototyping</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
                <Atom className="w-3.5 h-3.5" />
                <span>Quantum Science & Qiskit</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Patent Filed: TRATAYANTRA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="group flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs sm:text-sm border border-white/10 transition-all hover:scale-105 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center space-x-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-xs sm:text-sm border border-white/10 transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links & Instant Email Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-slate-400 text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual with Profile Pic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 md:w-88 aspect-square">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-600/30 to-purple-600/20 blur-xl animate-pulse-glow" />
              
              {/* Rotating Accent Ring */}
              <div className="absolute -inset-1.5 rounded-[30px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-40 blur-sm animate-spin-slow" />

              {/* Glass Frame Container */}
              <div className="relative w-full h-full rounded-[26px] overflow-hidden border border-white/20 bg-gradient-to-b from-slate-900/90 to-[#0A0D18]/90 backdrop-blur-xl p-2 shadow-2xl">
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-slate-950/80 group">
                  <img
                    src="/profile.jpeg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Tech Corners */}
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

                  {/* Identity Banner */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-xs">{personalInfo.name}</p>
                      <p className="text-[10px] text-cyan-400 font-mono">B.Tech CSE • CGPA 8.57</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Orbiting Badge 1 */}
              <div className="absolute -top-3 -left-4 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-lg backdrop-blur-md flex items-center space-x-1.5 animate-float-slow">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-bold text-white">Patent Filed</span>
              </div>

              {/* Orbiting Badge 2 */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-lg backdrop-blur-md flex items-center space-x-1.5 animate-float-reverse">
                <Atom className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-bold text-white">Quantum & AI</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
