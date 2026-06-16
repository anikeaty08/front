import React from 'react';

const UseCases = () => {
  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#60A5FA]/5 blur-[150px] pointer-events-none rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-white/10 text-[#60A5FA] rounded-full bg-white/5 backdrop-blur-sm">
            <iconify-icon icon="solar:layers-minimalistic-linear" stroke-width="1.5"></iconify-icon>
            Applied Scenarios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            Built for extreme boundaries.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* USE CASE 1: High-Frequency Trading (Spans 2 columns) */}
          <div className="lg:col-span-2 group relative p-8 md:p-10 rounded-2xl bg-[#05080f] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col justify-between min-h-[320px]">
            {/* Visual: Animated Speed Lines */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden flex flex-col justify-center gap-3 pr-8">
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#60A5FA] w-full transform translate-x-8 group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#60A5FA] w-3/4 self-end transform translate-x-12 group-hover:translate-x-0 transition-transform duration-700 ease-out delay-75"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#60A5FA] w-5/6 self-end transform translate-x-16 group-hover:translate-x-0 transition-transform duration-700 ease-out delay-150"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent to-[#60A5FA] w-full transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out delay-200"></div>
            </div>

            <div className="relative z-10 w-12 h-12 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center text-[#60A5FA] mb-12 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
              <iconify-icon icon="solar:graph-up-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>
            </div>
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-playfair font-medium text-white mb-3 tracking-wide group-hover:text-[#60A5FA] transition-colors duration-300">
                High-Frequency Trading
              </h3>
              <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed">
                When milliseconds dictate massive financial shifts, the Nexus protocol routes order books through the absolute shortest physical network path, shaving critical latency off transatlantic trades.
              </p>
            </div>
          </div>

          {/* USE CASE 2: Distributed ML Inference (Spans 1 column) */}
          <div className="lg:col-span-1 group relative p-8 md:p-10 rounded-2xl bg-[#05080f] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col justify-between min-h-[320px]">
            {/* Visual: Pulsing Nodes */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-[#60A5FA]/20 group-hover:animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <div className="absolute inset-8 rounded-full border border-[#60A5FA]/40 group-hover:animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-[#60A5FA]/10 to-[#60A5FA]/30 shadow-[0_0_30px_rgba(96,165,250,0.3)]"></div>
            </div>

            <div className="relative z-10 w-12 h-12 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center text-[#60A5FA] mb-12 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <iconify-icon icon="solar:cpu-bolt-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-playfair font-medium text-white mb-3 tracking-wide group-hover:text-[#60A5FA] transition-colors duration-300">
                Edge ML Inference
              </h3>
              <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed">
                Distribute complex machine learning models across decentralized nodes. Process inferences closer to the user, drastically reducing bandwidth and central server load.
              </p>
            </div>
          </div>

          {/* USE CASE 3: Global Multiplayer State (Spans 3 columns) */}
          <div className="lg:col-span-3 group relative p-8 md:p-10 rounded-2xl bg-[#05080f] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 min-h-[260px]">
            
            {/* Visual: Flowing Network SVG Map */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden">
              <svg className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 300" preserveAspectRatio="none">
                <path 
                  d="M0,150 C150,250 350,50 500,150 C650,250 850,50 1000,150" 
                  fill="none" 
                  stroke="#60A5FA" 
                  strokeWidth="1" 
                  className="[stroke-dasharray:10_10] group-hover:animate-[dash_20s_linear_infinite]" 
                />
                <path 
                  d="M0,200 C200,100 300,250 500,200 C700,150 800,280 1000,200" 
                  fill="none" 
                  stroke="#60A5FA" 
                  strokeWidth="0.5" 
                  className="[stroke-dasharray:5_5] group-hover:animate-[dash_15s_linear_infinite_reverse]" 
                />
                <circle cx="500" cy="150" r="4" fill="#60A5FA" className="group-hover:animate-pulse" />
                <circle cx="270" cy="120" r="3" fill="#60A5FA" className="group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                <circle cx="730" cy="170" r="3" fill="#60A5FA" className="group-hover:animate-pulse" style={{ animationDelay: '0.4s' }} />
              </svg>
              <style>{`
                @keyframes dash {
                  to { stroke-dashoffset: -1000; }
                }
              `}</style>
            </div>

            <div className="relative z-10 max-w-lg">
              <div className="w-12 h-12 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center text-[#60A5FA] mb-8 group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon="solar:gamepad-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>
              </div>
              <h3 className="text-2xl font-playfair font-medium text-white mb-3 tracking-wide group-hover:text-[#60A5FA] transition-colors duration-300">
                Real-Time Multiplayer State
              </h3>
              <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed">
                Seamlessly synchronize player state across continents. CRDT-backed event sourcing ensures no dropped packets and instant conflict resolution for competitive environments without traditional tick-rate limits.
              </p>
            </div>

            {/* Simulated Live Latency Stats */}
            <div className="relative z-10 flex gap-4 shrink-0">
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Tokyo</span>
                <span className="text-lg text-[#60A5FA] font-medium tracking-tight">12ms</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500 delay-150">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Frankfurt</span>
                <span className="text-lg text-[#60A5FA] font-medium tracking-tight">18ms</span>
              </div>
              <div className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:-translate-y-2 transition-transform duration-500 delay-200">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">New York</span>
                <span className="text-lg text-[#60A5FA] font-medium tracking-tight">08ms</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;