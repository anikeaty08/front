import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Data Ingestion',
    description: 'Raw localized streams are ingested through edge nodes and cryptographically validated.',
    icon: 'solar:database-linear',
    delay: '0.1s'
  },
  {
    id: '02',
    title: 'Neural Routing',
    description: 'Packets are dynamically routed through optimal mesh pathways using ML-driven consensus.',
    icon: 'solar:routing-3-linear',
    delay: '0.3s'
  },
  {
    id: '03',
    title: 'Global Sync',
    description: 'Processed state is synchronized across the distributed network with sub-millisecond latency.',
    icon: 'solar:earth-linear',
    delay: '0.5s'
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-white/10 text-[#60A5FA] rounded-full bg-white/5 backdrop-blur-sm">
            <iconify-icon icon="solar:git-commit-linear" stroke-width="1.5"></iconify-icon>
            Protocol Flow
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            System Architecture
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-sm font-inter font-light max-w-lg mx-auto">
            The Nexus framework utilizes a seamless three-phase pipeline to ensure data integrity and minimal latency across all active nodes.
          </p>
        </div>

        {/* System Diagram Layout */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          
          {/* Connecting Line / Track (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[16.66%] right-[16.66%] h-[1px] bg-white/10 z-0">
            {/* Animated Data Packets Flowing */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-1/2 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent animate-move-data" />
              <div className="absolute top-1/2 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent animate-move-data" style={{ animationDelay: '1.25s' }} />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="flex flex-col items-center text-center group fade-in-animate"
                style={{ animationDelay: step.delay }}
              >
                {/* Visual Node */}
                <div className="relative mb-8">
                  {/* Outer spinning dash ring (appears on hover) */}
                  <div className="absolute -inset-4 rounded-full border border-dashed border-[#60A5FA]/30 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_10s_linear_infinite] transition-all duration-700 pointer-events-none" />
                  
                  {/* Core Node Circle */}
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-[#030509] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-[#60A5FA]/40 group-hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] transition-all duration-500 z-10">
                    <iconify-icon 
                      icon={step.icon} 
                      class="text-3xl text-white/70 group-hover:text-[#60A5FA] group-hover:scale-110 transition-all duration-500"
                    ></iconify-icon>
                    
                    {/* Step ID Badge */}
                    <div className="absolute -top-3 bg-[#030509] px-2 py-0.5 text-[10px] font-mono tracking-widest text-[#60A5FA] border border-white/10 rounded backdrop-blur-md">
                      [{step.id}]
                    </div>
                  </div>
                  
                  {/* Vertical Connection Line for Mobile */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white/10 via-[#60A5FA]/30 to-white/10" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-playfair font-medium text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;