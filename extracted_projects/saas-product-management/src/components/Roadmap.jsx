import React from 'react';

export default function Roadmap() {
  return (
    <section className="relative w-full h-[1000px] bg-[#050505] overflow-hidden border-t border-b border-white/5 pt-20 pb-20">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 text-center">Built for scale</h2>
        <p className="text-lg text-[#8A8F98] text-center max-w-2xl mx-auto">Visualize your team's velocity and infrastructure evolution.</p>
      </div>

      <div className="overflow-visible select-none absolute top-0 right-0 bottom-0 left-0 perspective-[1000px] mt-4">
        <div className="w-[140%] h-[150%] mt-44 absolute top-[10%] left-[-20%]" style={{ transform: 'rotateX(55deg) rotateZ(-15deg) rotateY(5deg)', transformStyle: 'preserve-3d', animation: 'scene-drift 24s ease-in-out infinite' }}>
          
          <div className="absolute inset-0 border-t border-white/10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 140px)' }}>
            <div className="relative h-full w-full">
              <div className="absolute left-[15%] top-6 text-xs font-mono text-[#555] tracking-wider">AUG 3</div>
              <div className="absolute left-[15%] top-0 h-full w-px border-l border-dashed border-white/5"></div>

              <div className="absolute left-[22%] top-8 text-[10px] font-mono text-[#333]">10</div>
              <div className="absolute left-[28%] top-10 h-3 w-px bg-white/5"></div>

              <div className="absolute left-[35%] top-6 text-xs font-mono text-[#555] tracking-wider">17</div>
              <div className="absolute left-[35%] top-0 h-full w-px border-l border-white/5"></div>

              <div className="absolute left-[48%] w-px bg-gradient-to-b from-transparent via-[#4DAF73] to-transparent z-10" style={{ animation: 'laser-scan 4s ease-in-out infinite' }}></div>

              <div className="absolute left-[48%] top-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4DAF73]/20 opacity-0 scale-0" style={{ animation: 'ping 4s cubic-bezier(0,0,0.2,1) infinite' }}></div>

              <div className="absolute left-[48%] top-[-25px] transform -translate-x-1/2 -rotate-x-60 z-30" style={{ transformStyle: 'preserve-3d' }}>
                <div className="bg-[#1A1C1E] ring-1 ring-[#333] px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-[#ccc] shadow-2xl whitespace-nowrap flex items-center gap-1.5" style={{ transform: 'rotateX(-55deg)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DAF73] animate-pulse"></div>
                  AUG 22
                </div>
              </div>

              <div className="absolute left-[60%] top-6 text-xs font-mono text-[#555] tracking-wider">24</div>
              <div className="absolute left-[60%] top-0 h-full w-px border-l border-white/5"></div>

              <div className="absolute left-[75%] top-6 text-xs font-bold font-mono text-[#555] tracking-[0.2em]">SEP</div>
              <div className="absolute left-[75%] top-0 h-full w-px border-l border-white/10"></div>
            </div>
          </div>

          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: 'translateZ(10px)' }}>
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(77,175,115,0)"></stop>
                  <stop offset="50%" stopColor="#4DAF73"></stop>
                  <stop offset="100%" stopColor="rgba(77,175,115,0)"></stop>
                </linearGradient>
              </defs>
              <path d="M 250 200 Q 300 200 350 308" fill="none" stroke="url(#flow-gradient)" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 10" style={{ animation: 'signal-flow 3s linear infinite', opacity: 0.6, filter: 'drop-shadow(0 0 5px rgba(77,175,115,0.5))' }}></path>
              <line x1="48%" y1="0" x2="48%" y2="170" stroke="rgba(77,175,115,0.2)" strokeDasharray="4 4"></line>
            </svg>

            <div className="absolute top-[140px] left-[22%] w-[38%] h-[64px] bg-[#141518]/90 backdrop-blur-xl rounded-lg border border-white/10 flex flex-col justify-center px-5 z-20 group transition-transform duration-500 hover:translate-z-[60px]" style={{ transform: 'translateZ(40px)', animation: 'active-pulse 4s infinite' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-[3px] bg-[#4DAF73]/10 border border-[#4DAF73] flex items-center justify-center transform rotate-45 shadow-[0_0_10px_rgba(77,175,115,0.2)]">
                    <div className="w-1.5 h-1.5 bg-[#4DAF73] rounded-full shadow-[0_0_5px_#4DAF73]"></div>
                  </div>
                  <span className="text-[17px] font-medium text-white tracking-tight group-hover:text-[#4DAF73] transition-colors">Realtime inference</span>
                </div>
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#141518] grayscale opacity-80 group-hover:grayscale-0 transition-all object-cover" />
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" className="w-6 h-6 rounded-full ring-2 ring-[#141518] grayscale opacity-80 group-hover:grayscale-0 transition-all object-cover" />
                  <div className="w-6 h-6 rounded-full ring-2 ring-[#141518] bg-[#333] flex items-center justify-center text-[9px] font-medium text-white/70">+3</div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-2 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                <div className="w-1 h-1 bg-white/30 rounded-full"></div> Prototype
              </div>
            </div>

            <div className="absolute top-[280px] left-[55%] w-[32%] h-[56px] bg-[#0F1012]/80 backdrop-blur-md rounded-lg border border-white/5 flex items-center px-5 gap-4 z-10 shadow-lg hover:border-white/20 transition-colors" style={{ transform: 'translateZ(20px)' }}>
              <div className="grid grid-cols-2 gap-[3px] opacity-40 rotate-12">
                <div className="w-1.5 h-1.5 bg-white rounded-[1px] reveal-left"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-[1px] reveal-right delay-100"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-white/80 tracking-tight">RLHF fine tuning</span>
                <div className="h-0.5 w-12 bg-white/10 mt-1.5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-white/30 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-2 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Beta</div>
            </div>

            <div className="absolute top-[80px] left-[65%] w-[28%] h-[48px] bg-[#0F1012]/60 backdrop-blur-sm rounded-lg border border-white/5 flex items-center px-4 gap-3 z-5 shadow-lg" style={{ transform: 'translateZ(10px)' }}>
              <div className="w-2 h-2 rounded-full border border-[#E2B340] flex items-center justify-center">
                <div className="w-0.5 h-0.5 bg-[#E2B340] rounded-full"></div>
              </div>
              <span className="text-[13px] font-medium text-white/40 tracking-tight">API Gateway v2</span>
            </div>

            <div className="absolute bottom-[20%] right-[10%] w-[180px] p-4 bg-[#111]/80 backdrop-blur border border-white/5 rounded-lg flex flex-col gap-2 z-20" style={{ transform: 'translateZ(60px) rotateY(-10deg)' }}>
              <div className="text-[10px] uppercase tracking-wider text-white/40 font-mono">Sprint Velocity</div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">42.5</span>
                <span className="text-xs text-[#4DAF73] mb-1 flex items-center">▲ 12%</span>
              </div>
              <div className="flex items-end gap-1 h-6 mt-1">
                <div className="w-1.5 bg-white/10 h-[40%] rounded-sm"></div>
                <div className="w-1.5 bg-white/10 h-[60%] rounded-sm"></div>
                <div className="w-1.5 bg-white/10 h-[30%] rounded-sm"></div>
                <div className="w-1.5 bg-white/20 h-[80%] rounded-sm"></div>
                <div className="w-1.5 bg-[#4DAF73] h-[100%] rounded-sm shadow-[0_0_10px_rgba(77,175,115,0.4)]"></div>
              </div>
            </div>

            <div className="absolute left-[30%] top-[40%] pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
              <div className="font-mono text-[10px] text-[#4DAF73]/40 whitespace-nowrap" style={{ animation: 'float-particle 4s infinite ease-out' }}>git commit -m "fix: latency"</div>
            </div>
            <div className="absolute left-[50%] top-[60%] pointer-events-none" style={{ transform: 'translateZ(15px)' }}>
              <div className="font-mono text-[10px] text-white/20 whitespace-nowrap" style={{ animation: 'float-particle 5s 1s infinite ease-out' }}>deploy_prod.sh</div>
            </div>

            <div className="absolute top-[380px] left-[8%] w-[25%] h-[40px] bg-gradient-to-r from-white/5 to-transparent rounded border-l border-t border-white/5 opacity-20" style={{ transform: 'translateZ(5px)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}