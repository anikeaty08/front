import React from 'react';

const ProductVisualization = () => {
  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background glow for section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#60A5FA]/5 blur-[150px] pointer-events-none rounded-[100%]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-[#60A5FA]/20 text-[#60A5FA] rounded-full bg-[#60A5FA]/5 backdrop-blur-sm">
            <iconify-icon icon="solar:screencast-2-linear" stroke-width="1.5"></iconify-icon>
            Infrastructure Topology
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            Visualize the neural mesh.
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-sm font-inter font-light max-w-lg mx-auto">
            Real-time monitoring of packet routing, node health, and core utilization across the globally distributed network architecture.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[900px] relative h-[600px] w-full max-w-5xl mx-auto bg-[#05080f] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* Blueprint Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ 
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '40px 40px' 
              }}
            />

            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#60A5FA]/10 to-transparent opacity-50 animate-scanline pointer-events-none z-0" />

            {/* Horizontal Layer Divisions */}
            <div className="absolute top-[25%] w-full border-t border-dashed border-white/5 z-0" />
            <div className="absolute top-[65%] w-full border-t border-dashed border-white/5 z-0" />
            
            {/* Layer Labels */}
            <div className="absolute top-4 left-6 text-[10px] font-mono tracking-widest text-white/30 uppercase z-10">Edge Ingestion Layer</div>
            <div className="absolute top-[28%] left-6 text-[10px] font-mono tracking-widest text-[#60A5FA]/40 uppercase z-10">Nexus Core Engine</div>
            <div className="absolute top-[68%] left-6 text-[10px] font-mono tracking-widest text-white/30 uppercase z-10">Distributed Persistence</div>

            {/* SVG Connections Canvas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(96, 165, 250, 0.2)" />
                  <stop offset="50%" stopColor="rgba(96, 165, 250, 0.8)" />
                  <stop offset="100%" stopColor="rgba(96, 165, 250, 0.2)" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Edge to Core Lines */}
              <line x1="20%" y1="15%" x2="50%" y2="45%" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-dash" />
              <line x1="50%" y1="15%" x2="50%" y2="45%" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-dash" />
              <line x1="80%" y1="15%" x2="50%" y2="45%" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-dash" />

              {/* Core to Storage Lines */}
              <line x1="50%" y1="45%" x2="35%" y2="82%" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-dash" />
              <line x1="50%" y1="45%" x2="65%" y2="82%" stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="6,6" className="animate-flow-dash" />
              
              {/* Storage Cross-Sync Line */}
              <line x1="35%" y1="82%" x2="65%" y2="82%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,4" />
            </svg>

            {/* NODES LAYER (HTML) */}
            
            {/* 1. Edge Nodes (Top) */}
            <DiagramNode x="20%" y="15%" title="US-East" icon="solar:server-minimalistic-linear" status="active" />
            <DiagramNode x="50%" y="15%" title="EU-West" icon="solar:server-minimalistic-linear" status="active" />
            <DiagramNode x="80%" y="15%" title="AP-South" icon="solar:server-minimalistic-linear" status="warning" />

            {/* 2. Core Node (Center) */}
            <div 
              className="absolute z-20 flex flex-col items-center group cursor-crosshair"
              style={{ left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[#60A5FA]/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#60A5FA]/40 to-transparent opacity-50 group-hover:animate-pulse-glow" />
                <div className="relative w-20 h-20 rounded-xl bg-[#030509] border border-[#60A5FA]/50 shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[#60A5FA]/10 mix-blend-overlay" />
                  <iconify-icon icon="solar:cpu-bolt-linear" class="text-4xl text-[#60A5FA] group-hover:scale-110 transition-transform"></iconify-icon>
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="text-white font-playfair font-medium text-lg tracking-wide shadow-black drop-shadow-md">Nexus Core</div>
                <div className="text-[10px] font-mono tracking-widest text-[#60A5FA]">ROUTING ENGINE</div>
              </div>
            </div>

            {/* 3. Storage Nodes (Bottom) */}
            <DiagramNode x="35%" y="82%" title="Hot Cache" icon="solar:database-linear" status="active" />
            <DiagramNode x="65%" y="82%" title="Cold Matrix" icon="solar:archive-minimalistic-linear" status="active" />

            {/* Floating Metrics Widgets */}
            <MetricWidget x="33%" y="28%" label="Bandwidth" value="1.2 TB/s" />
            <MetricWidget x="67%" y="28%" label="Latency" value="14 ms" align="right" />
            <MetricWidget x="42%" y="65%" label="Sync Rate" value="99.9%" />

          </div>
        </div>

      </div>
    </section>
  );
};

// Sub-components for cleaner markup
const DiagramNode = ({ x, y, title, icon, status }) => {
  const statusColor = status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400';
  const statusShadow = status === 'warning' ? 'shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'shadow-[0_0_8px_rgba(52,211,153,0.8)]';

  return (
    <div 
      className="absolute z-20 flex flex-col items-center group cursor-default"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <div className="relative w-14 h-14 rounded-full bg-[#030509] border border-white/20 flex items-center justify-center hover:border-[#60A5FA]/50 hover:bg-white/5 transition-colors shadow-lg">
        {/* Status indicator dot */}
        <div className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-full border border-[#030509] ${statusColor} ${statusShadow}`} />
        <iconify-icon icon={icon} class="text-2xl text-white/70 group-hover:text-white transition-colors"></iconify-icon>
      </div>
      <div className="mt-2 text-[11px] font-inter font-light tracking-wide text-white/80 whitespace-nowrap bg-[#030509]/80 px-2 py-0.5 rounded backdrop-blur-sm">
        {title}
      </div>
    </div>
  );
};

const MetricWidget = ({ x, y, label, value, align = 'left' }) => {
  return (
    <div 
      className={`absolute z-30 flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} pointer-events-none float-animate`}
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)', animationDelay: `${Math.random() * 2}s` }}
    >
      <div className="bg-[#030509]/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg shadow-xl relative overflow-hidden">
        {/* Subtle glass reflection */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/[0.02]" />
        
        <div className="text-[9px] font-mono tracking-widest text-white/40 uppercase mb-0.5">
          {label}
        </div>
        <div className="text-sm font-inter font-medium text-[#60A5FA] tracking-tight">
          {value}
        </div>
      </div>
    </div>
  );
};

export default ProductVisualization;