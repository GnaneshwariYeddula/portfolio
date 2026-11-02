import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#00F0FF', '#6366F1', '#A855F7', '#10B981']
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    triggerConfetti();
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    triggerConfetti();
    setIsSubmitted(true);

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Ganeshwari,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect & Hire</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Ganeshwari
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Actively seeking SDE internships and full-time full-stack roles.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Email Card */}
            <SpotlightCard className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-white hover:text-cyan-300 transition-colors truncate block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white shrink-0 ml-2"
                title="Copy"
              >
                {copiedType === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <a href={`tel:${personalInfo.phoneRaw}`} className="text-xs font-bold text-white hover:text-cyan-300 font-mono">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phoneRaw, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white shrink-0 ml-2"
                title="Copy"
              >
                {copiedType === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-blue-500/40 flex items-center space-x-2.5 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-xs font-bold text-white truncate">Connect</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 hover:border-purple-500/40 flex items-center space-x-2.5 transition-all"
              >
                <Github className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 font-mono">GitHub</div>
                  <div className="text-xs font-bold text-white truncate">Follow</div>
                </div>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Andhra Pradesh, India • Open to Relocation</span>
            </div>

          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Send Direct Message</h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Ready in Email Client!</h4>
                  <p className="text-xs text-slate-300">
                    Your email client was opened. You can also contact directly at <strong className="text-emerald-400">{personalInfo.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <textarea
                    required
                    rows={4}
                    placeholder="Message: SDE Internship / Full-time role opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
