import React from 'react';

const DarkStats = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden clip-diagonal text-white">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-20 max-w-2xl mx-auto leading-tight">
          The backbone for internet business
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-light mb-2 tabular-nums-tight">250M+</div>
            <div className="text-slate-300 font-light">API requests per day</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-light mb-2 tabular-nums-tight">99.99%</div>
            <div className="text-slate-300 font-light">Historical uptime</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-light mb-2 tabular-nums-tight">135+</div>
            <div className="text-slate-300 font-light">Currencies supported</div>
          </div>
          <div className="pt-8 md:pt-0 px-4">
            <div className="text-4xl lg:text-5xl font-light mb-2 tabular-nums-tight">40+</div>
            <div className="text-slate-300 font-light">Countries with local acquiring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkStats;