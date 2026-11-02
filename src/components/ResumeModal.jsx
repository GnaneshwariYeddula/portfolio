import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Award,
  Atom,
  ShieldCheck
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, experience, projects, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 bg-[#0A0D18] text-slate-100 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
              Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="py-5 space-y-6 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="text-center space-y-1 pb-4 border-b border-white/10">
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-tight">
              {personalInfo.officialName}
            </h1>
            <p className="text-xs text-cyan-400 font-mono">
              Computer Science Engineering Student | MERN Stack Developer | Aspiring SDE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 text-xs text-slate-300 font-mono pt-1">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`tel:${personalInfo.phoneRaw}`} className="text-cyan-300 hover:underline">{personalInfo.phone}</a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline">{personalInfo.email}</a>
            </div>
            <div className="flex justify-center items-center space-x-3 text-xs font-mono text-indigo-300 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center space-x-1">
                <Github className="w-3 h-3" />
                <span>github.com/gnaneshwariyeddula</span>
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center space-x-1">
                <Linkedin className="w-3 h-3" />
                <span>linkedin.com/in/gnaneshwariyeddula</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-white">B.Tech — Computer Science Engineering</strong>
                <div className="text-slate-400">Chaitanya Bharathi Institute of Technology, JNTUA</div>
              </div>
              <div className="text-right font-mono">
                <span className="text-emerald-400 font-bold">CGPA: 8.57</span>
                <div className="text-[11px] text-slate-400">2023 – 2027 (Expected)</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-300 pt-0.5">
              Intermediate (CBSE): <strong className="text-white">77.4%</strong> | SSC (Class X): <strong className="text-emerald-400">97.8%</strong> (Distinction)
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-1">
              Technical Arsenal & Research
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-white">Languages:</strong> Python, JavaScript, Java, C, SQL</div>
              <div><strong className="text-white">Front-End:</strong> React.js, Tailwind CSS, JavaScript (ES6+), HTML, CSS</div>
              <div><strong className="text-white">Back-End & DB:</strong> Node.js, Express.js, REST APIs, MongoDB, MySQL</div>
              <div><strong className="text-white">AI & Science:</strong> NLP (NPTEL Elite), Quantum Superposition, Qiskit basics</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline border-b border-white/10 pb-1">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-300">
                Experience
              </h2>
              <span className="text-xs font-mono text-cyan-400">{experience.duration}</span>
            </div>
            <h3 className="text-xs font-bold text-white pt-1">{experience.role}</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              {experience.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-1">
              Featured Projects
            </h2>

            {projects.slice(0, 3).map((p, i) => (
              <div key={i} className="space-y-0.5 pt-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-white">{p.title}</h3>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">{p.badge}</span>
                </div>
                <div className="text-[11px] font-mono text-indigo-300">{p.tech.join(' • ')}</div>
                <ul className="list-disc list-inside text-xs text-slate-300">
                  {p.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-300 border-b border-white/10 pb-1">
              Certifications & Training
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <div>• <strong>Natural Language Processing (NLP):</strong> NPTEL, IIT Kharagpur (Elite Grade)</div>
              <div>• <strong>Python Programming:</strong> Udemy | <strong>Introduction to SQL:</strong> Coursera</div>
              <div>• <strong>Workshops:</strong> AWS Cloud (Reshapp Software) | Drone Tech (Garuda Aerospace)</div>
              <div>• <strong>Quantum Science:</strong> Self-driven study of qubits, superposition, gates, and beginner Qiskit</div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            {personalInfo.email}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
