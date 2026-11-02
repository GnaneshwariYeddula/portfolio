import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Perspective Cyber Grid */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)'
        }}
      />

      {/* Primary Cyan Glow Orb Top Left */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none animate-pulse-glow"
      />

      {/* Indigo Violet Glow Orb Center Right */}
      <div 
        className="absolute top-[25%] -right-[15%] w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[160px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* Deep Violet Glow Bottom Center */}
      <div 
        className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-purple-600/12 blur-[150px] pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '4s' }}
      />

      {/* Subtle Noise Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06080F]/40 to-[#06080F] pointer-events-none" />
    </div>
  );
}

