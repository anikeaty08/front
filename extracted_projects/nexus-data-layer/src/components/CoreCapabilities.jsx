import React from 'react';

const capabilities = [
  {
    title: 'Neural Edge Routing',
    description: 'Autonomous packet direction utilizing edge-level machine learning models to dynamically bypass network congestion and minimize geographic latency.',
    icon: 'solar:routing-2-linear',
    delay: '0.2s'
  },
  {
    title: 'Real-time State Sync',
    description: 'Conflict-free replicated data types (CRDTs) ensure instantaneous global state consistency across distributed computational nodes without centralized locking.',
    icon: 'solar:refresh-square-linear',
    delay: '0.4s'
  },
  {
    title: 'Quantum-Resistant Layer',
    description: 'Post-quantum cryptographic primitives securing inter-node communication, ensuring data streams remain mathematically impenetrable against future decryption architectures.',
    icon: 'solar:shield-keyhole-linear',
    delay: '0.6s'
  }
];

const CoreCapabilities = () => {
  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#60A5FA]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-white/10 text-[#60A5FA] rounded-full bg-white/5 backdrop-blur-sm">
            <iconify-icon icon="solar:cpu-bolt-linear" stroke-width="1.5"></iconify-icon>
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            Architected for boundless computational scale.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#60A5FA]/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/0 to-[#60A5FA]/0 group-hover:from-[#60A5FA]/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center text-[#60A5FA] mb-8 group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon={feature.icon} class="text-2xl" stroke-width="1.5"></iconify-icon>
              </div>

              {/* Content */}
              <h3 className="text-xl font-playfair font-medium text-white mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/0 to-transparent group-hover:via-[#60A5FA]/50 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;