import React from 'react';

const FloatingMetric = () => {
  return (
    <div 
      className="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto float-animate"
      style={{ animationDelay: '0.8s' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
          <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
        </div>
        <span className="text-xs uppercase tracking-widest font-light font-inter">
          Transfer Rate
        </span>
      </div>
      <div className="text-3xl leading-9 tracking-tighter mb-1 font-inter font-medium">
        42.4 TB/s
      </div>
      <div className="text-xs uppercase tracking-widest text-[#60A5FA]/60 font-inter">
        Latency Optimism
      </div>
    </div>
  );
};

export default FloatingMetric;