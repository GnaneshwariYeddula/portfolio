import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Eye, 
  Terminal, 
  Wand2, 
  Copy,
  CheckCheck
} from 'lucide-react';

const designPresets = [
  {
    id: 'archaeology',
    name: 'Archaeology Platform',
    badge: 'MERN + AI',
    prompt: 'Immersive research community layout for archaeological field discoveries with artifact cards and peer reviews.',
    sampleCode: `// ArtifactCard Component
export function ArtifactCard({ artifact }) {
  return (
    <div className="rounded-xl border border-amber-500/30 bg-slate-900/90 p-4">
      <div className="flex justify-between text-xs font-mono text-amber-400">
        <span>LOC: #TEL-2024-C</span>
        <span className="px-2 py-0.5 rounded bg-amber-500/20">Verified</span>
      </div>
      <h4 className="text-base font-bold text-white mt-1">{artifact.title}</h4>
      <p className="text-xs text-slate-300 mt-1">{artifact.dating} • Stratum IV</p>
    </div>
  );
}`
  },
  {
    id: 'tratayantra',
    name: 'TRATAYANTRA IoT',
    badge: 'Patent Hardware',
    prompt: 'Live safety telemetry dashboard for industrial LPG gas leak monitoring and automatic servo valve shutoff.',
    sampleCode: `// Tratayantra Safety Controller Hook
export function TratayantraMonitor({ gasLevelPPM, valveOpen, onEmergencyShutoff }) {
  const isHazardous = gasLevelPPM > 280;
  return (
    <div className="p-4 rounded-xl border border-emerald-500/30 bg-slate-900/90">
      <div className="text-xs font-mono text-emerald-400">STATUS: {isHazardous ? 'CRITICAL' : 'OPTIMAL'}</div>
      <div className="text-2xl font-mono text-white font-bold">{gasLevelPPM} PPM</div>
      <button onClick={onEmergencyShutoff} className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-xs">
        Emergency Valve Cutoff
      </button>
    </div>
  );
}`
  },
  {
    id: 'collaboration',
    name: 'Real-Time Chat & Collab',
    badge: 'WebSockets',
    prompt: 'Fluid collaborative chat and document stream with live user presence indicators and low-latency sync.',
    sampleCode: `// WebSocket Chat Channel
export function LiveChatStream({ messages, room }) {
  return (
    <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 p-4 font-mono text-xs">
      <div className="text-cyan-400 font-bold mb-2">#ROOM: {room} (Active)</div>
      {messages.map(m => (
        <div key={m.id} className="text-slate-300 py-0.5">{m.sender}: {m.text}</div>
      ))}
    </div>
  );
}`
  }
];

export default function AIStudio() {
  const [selectedId, setSelectedId] = useState(designPresets[0].id);
  const [viewMode, setViewMode] = useState('preview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [simulatedGas, setSimulatedGas] = useState(140);
  const [valveState, setValveState] = useState(true);

  const activePreset = designPresets.find((p) => p.id === selectedId) || designPresets[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activePreset.sampleCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="ai-studio" className="relative z-10 py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Prototyping</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Designing Websites with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Interactive demonstration of prompt-to-component UI workflows accelerated by AI tools.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          
          {/* Controls Bar */}
          <div className="p-4 border-b border-white/10 bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {designPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedId(preset.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    preset.id === selectedId
                      ? 'bg-purple-600/30 border border-purple-500/50 text-white'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1 p-1 rounded-xl bg-slate-800 border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('preview')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'preview' ? 'bg-purple-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>UI Preview</span>
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'code' ? 'bg-purple-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Code</span>
              </button>
            </div>
          </div>

          {/* AI Prompt Snippet */}
          <div className="px-5 py-2.5 bg-slate-900/30 border-b border-white/5 flex items-center space-x-2.5 text-xs">
            <Wand2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <div className="font-mono text-slate-300 truncate">
              <span className="text-purple-400 font-semibold mr-1">AI Prompt:</span>
              <span>"{activePreset.prompt}"</span>
            </div>
          </div>

          {/* Canvas Display */}
          <div className="p-6 min-h-[300px] flex items-center justify-center bg-[#070A14] relative">
            {viewMode === 'preview' ? (
              <div className="w-full max-w-xl">
                {activePreset.id === 'archaeology' && (
                  <div className="p-5 rounded-xl border border-amber-500/30 bg-slate-900/90 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div>
                        <span className="text-[10px] font-mono text-amber-400">Site #KA-402 • Harappan Layer</span>
                        <h4 className="text-lg font-bold text-white">Terracotta Seals & Inscribed Tablets</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                        Verified
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 rounded-lg bg-white/5"><div className="text-[10px] text-slate-400">Dating</div><div className="font-bold text-amber-300">~2400 BCE</div></div>
                      <div className="p-2 rounded-lg bg-white/5"><div className="text-[10px] text-slate-400">Depth</div><div className="font-bold text-amber-300">4.2m</div></div>
                      <div className="p-2 rounded-lg bg-white/5"><div className="text-[10px] text-slate-400">Catalog</div><div className="font-bold text-amber-300">#ARC-9021</div></div>
                    </div>
                  </div>
                )}

                {activePreset.id === 'tratayantra' && (
                  <div className="p-5 rounded-xl border border-emerald-500/30 bg-slate-900/90 space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <h4 className="text-base font-bold text-white">TRATAYANTRA Hardware Telemetry</h4>
                      <span className="text-xs font-mono text-cyan-400">ESP32 Cloud Link</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-slate-950/60 border border-white/10">
                        <div className="text-[11px] text-slate-400 font-mono">Gas Level</div>
                        <div className={`text-2xl font-bold font-mono ${simulatedGas > 280 ? 'text-red-400' : 'text-emerald-400'}`}>
                          {simulatedGas} PPM
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/60 border border-white/10 flex flex-col justify-between">
                        <div className="text-[11px] text-slate-400 font-mono">Servo Valve</div>
                        <button
                          onClick={() => setValveState(!valveState)}
                          className={`mt-1 py-1 px-2 rounded text-[11px] font-bold ${
                            valveState ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'
                          }`}
                        >
                          {valveState ? 'Trigger Auto-Shutoff' : 'Reset Supply Valve'}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                        <span>Test Sensor Slider:</span>
                        <span>{simulatedGas} PPM</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="400"
                        value={simulatedGas}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setSimulatedGas(val);
                          if (val > 280) setValveState(false);
                        }}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {activePreset.id === 'collaboration' && (
                  <div className="p-5 rounded-xl border border-cyan-500/30 bg-slate-900/90 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-cyan-400 font-bold">#ROOM: WebSockets-Live</span>
                      <span className="text-emerald-400">● Live Connected</span>
                    </div>
                    <div className="space-y-1.5 text-slate-300">
                      <div className="p-2 rounded bg-white/5"><span className="text-cyan-400 font-bold">Ganeshwari:</span> Merged Express auth endpoints & socket listeners.</div>
                      <div className="p-2 rounded bg-white/5"><span className="text-purple-400 font-bold">Peer:</span> MongoDB query response latency confirmed at 11ms.</div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full relative">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-2 right-2 flex items-center space-x-1 px-2.5 py-1 rounded bg-white/10 text-xs font-mono text-slate-200"
                >
                  {copiedCode ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
                <pre className="p-4 rounded-xl bg-[#080B14] border border-white/10 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <code>{activePreset.sampleCode}</code>
                </pre>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
