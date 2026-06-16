import React from 'react';

export default function Uplink() {
  return (
    <main className="flex-1 flex flex-col pt-40 pb-20 px-6 md:px-12 relative z-20 items-center justify-center">
      <div className="max-w-xl mx-auto w-full skeuo-shell rounded-[2rem] p-8 md:p-12 border border-red-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center bg-black shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <iconify-icon icon="solar:satellite-bold-duotone" class="text-red-400"></iconify-icon>
          </div>
          <h1 className="text-3xl font-medium tracking-tight text-white">Establish Uplink</h1>
        </div>
        
        <p className="text-zinc-400 text-sm mb-10 font-light leading-relaxed">
          Transmit your parameters directly to our core processing unit. A node will be assigned to your request within standard operational cycles.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-medium">Identification</label>
            <input 
              type="text" 
              className="w-full skeuo-card-inner rounded-xl px-5 py-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 transition-colors" 
              placeholder="Designation / Name" 
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-medium">Frequency</label>
            <input 
              type="email" 
              className="w-full skeuo-card-inner rounded-xl px-5 py-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 transition-colors" 
              placeholder="node@network.com" 
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-medium">Data Payload</label>
            <textarea 
              rows="4" 
              className="w-full skeuo-card-inner rounded-xl px-5 py-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 transition-colors resize-none" 
              placeholder="Define your objective sequence..."
            ></textarea>
          </div>
          <button type="button" className="btn-gradient w-full py-4 rounded-xl text-xs font-medium tracking-wide text-white mt-4 flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            Transmit Packet
            <iconify-icon icon="solar:round-transfer-horizontal-bold-duotone" class="text-sm"></iconify-icon>
          </button>
        </form>
      </div>
    </main>
  );
}