import React from 'react';

export default function Terminal() {
  return (
    <main className="flex-1 flex flex-col pt-40 pb-20 px-6 md:px-12 relative z-20">
      <div className="max-w-4xl mx-auto w-full skeuo-shell rounded-xl p-8 border border-red-900/30 font-mono text-sm shadow-[0_0_40px_rgba(220,38,38,0.1)]">
        <div className="flex gap-2 mb-6 border-b border-red-900/30 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="text-zinc-400 space-y-3">
          <p><span className="text-red-400">root@nexara</span>:<span className="text-blue-400">~</span>$ ./init_sequence.sh</p>
          <p className="text-zinc-500">Initializing core systems...</p>
          <p className="text-green-400">[ OK ] Visual Cortex loaded</p>
          <p className="text-green-400">[ OK ] Kinetic Engine calibrated</p>
          <p className="text-green-400">[ OK ] Neural Pathing optimized</p>
          <p className="text-zinc-500">Establishing handshake with external nodes...</p>
          <p className="text-green-400">[ OK ] Connection secured.</p>
          <p className="mt-4"><span className="text-red-400">root@nexara</span>:<span className="text-blue-400">~</span>$ _ <span className="animate-pulse inline-block w-2 h-4 bg-zinc-400 translate-y-1"></span></p>
        </div>
      </div>
    </main>
  );
}