import React from 'react';
import { Link } from 'react-router-dom';

const nodes = [
  {
    id: 1,
    icon: "solar:server-path-linear",
    version: "v1.0",
    title: "Central Node",
    location: "Sector 1",
    status: "Online",
    statusColor: "text-cyan-400",
    desc: "Primary data ingestion point. Filters anomalies and structures raw streams before distributing to auxiliary processing clusters.",
    badgeClass: "bg-white/5 border-white/10 text-white"
  },
  {
    id: 2,
    icon: "solar:shield-keyhole-linear",
    version: "v2.4",
    title: "Auth Gateway",
    location: "Perimeter",
    status: "Standby",
    statusColor: "text-white",
    desc: "Zero-trust authentication layer. Handles key exchange, token validation, and rate limiting for external API requests.",
    badgeClass: "bg-white/5 border-white/10 text-white"
  },
  {
    id: 3,
    icon: "solar:box-linear",
    version: "WARN",
    title: "Cold Storage",
    location: "Deep Archive",
    status: "Syncing",
    statusColor: "text-amber-500",
    desc: "Long-term immutable retention. Data is cryptographically signed and distributed across fragmented physical drives.",
    badgeClass: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
  }
];

export default function Topology() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
      {/* Left Sticky Title */}
      <div className="md:col-span-4 border-r border-white/10 p-12 relative flex flex-col justify-between gsap-fade-right bg-[#030303]">
        <div>
          <div className="flex items-center gap-1 text-cyan-400 mb-2">
            <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
            <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
            <iconify-icon icon="solar:star-fall-linear"></iconify-icon>
            <span className="text-white text-xs ml-2 tracking-widest">SYS.VER 4.2</span>
          </div>
          <h2 className="text-5xl font-light tracking-tighter text-white uppercase break-words">TOPOLOGY</h2>
        </div>
        
        <div className="mt-12 h-64 w-full bg-neutral-900/30 border border-white/5 relative overflow-hidden hidden md:block group">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a6468da-a7f7-450b-a982-3a9af56c6e5e_800w.webp"
            alt="Woman in blue hoodie by textured glass wall"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)', backgroundSize: '100% 4px' }} />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/30 to-transparent" />
        </div>
      </div>

      {/* Right List Container */}
      <div className="md:col-span-8 p-6 lg:p-12 bg-[#050505]/50 flex flex-col gap-6">
        {nodes.map((node) => (
          <div key={node.id} className="flex flex-col sm:flex-row bg-[#080808] border border-white/10 group hover:border-cyan-500/30 transition-colors gsap-list-item relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
            <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-neutral-900 relative border-r border-white/5 flex items-center justify-center">
              <iconify-icon icon={node.icon} class="text-5xl text-neutral-600 group-hover:text-cyan-500/50 transition-colors drop-shadow-md"></iconify-icon>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center w-full relative">
              <div className={`absolute top-4 right-4 px-2 py-1 text-[0.6rem] tracking-widest border ${node.badgeClass}`}>
                {node.version}
              </div>
              <h3 className="text-2xl font-light tracking-tight text-white mb-2">{node.title}</h3>
              <div className="flex gap-4 text-[0.65rem] tracking-widest text-neutral-500 uppercase mb-4">
                <span>{node.location}</span>
                <span className={node.statusColor}>{node.status}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">{node.desc}</p>
              <Link to={`/logs/${node.id}`} className="flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors w-max uppercase tracking-widest border border-cyan-500/20 px-3 py-1.5 rounded-sm bg-cyan-500/5 hover:bg-cyan-500/10">
                <iconify-icon icon="solar:eye-linear"></iconify-icon> Inspect Log
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}