import React from 'react';

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#60A5FA]/5 blur-[120px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-white/10 text-[#60A5FA] rounded-full bg-white/5 backdrop-blur-sm">
            <iconify-icon icon="solar:chat-round-line-linear" stroke-width="1.5"></iconify-icon>
            Network Consensus
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            Validated by scale.
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-sm font-inter font-light max-w-lg mx-auto">
            Industry leaders rely on Nexus to handle their most complex computational boundaries with zero compromise on latency or data integrity.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Large Featured (Spans 7 Cols) */}
          <div 
            className="md:col-span-7 group relative p-8 md:p-12 rounded-2xl bg-[#05080f] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col justify-between fade-in-animate"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Visual Hover Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#60A5FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-bl-full" />

            <div className="mb-8 relative z-10">
              <iconify-icon icon="solar:quote-right-bold-duotone" class="text-4xl text-[#60A5FA]/20 mb-6"></iconify-icon>
              <p className="text-xl md:text-2xl font-playfair font-light text-[#E5E7EB] leading-relaxed tracking-wide group-hover:text-white transition-colors duration-500">
                "Nexus obliterated our cross-continental arbitrage latency. What used to take 40ms now resolves in 8ms consistently. It's mathematically beautiful and fundamentally changed our execution model."
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                alt="Marcus Chen" 
                className="w-12 h-12 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-white/10" 
              />
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide font-inter">Marcus Chen</h4>
                <p className="text-xs text-[#9CA3AF] font-inter tracking-wider uppercase mt-0.5">CTO, QuantEdge Capital</p>
              </div>
              <div className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity text-white group-hover:text-[#60A5FA]">
                <iconify-icon icon="simple-icons:stripe" class="text-3xl"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Card 2: Taller / Narrower (Spans 5 Cols) */}
          <div 
            className="md:col-span-5 group relative p-8 md:p-10 rounded-2xl bg-[#05080f] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col justify-between fade-in-animate"
            style={{ animationDelay: '0.3s' }}
          >
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#60A5FA]/0 to-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="mb-8 relative z-10">
              <iconify-icon icon="solar:quote-right-bold-duotone" class="text-3xl text-[#60A5FA]/20 mb-6"></iconify-icon>
              <p className="text-lg font-inter font-light text-[#9CA3AF] leading-relaxed group-hover:text-[#E5E7EB] transition-colors duration-500">
                "Distributing inference loads across the edge used to be a nightmare of state conflicts. The CRDT implementation here is genuinely flawless. Our global model sync is completely automated now."
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Dr. Sarah Jenkins" 
                className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-white/10" 
              />
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide font-inter">Dr. Sarah Jenkins</h4>
                <p className="text-xs text-[#9CA3AF] font-inter tracking-wider uppercase mt-0.5">Lead AI Researcher</p>
              </div>
              <div className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity text-white group-hover:text-[#60A5FA]">
                <iconify-icon icon="simple-icons:openai" class="text-2xl"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Card 3: Wide Panoramic Banner (Spans 12 Cols) */}
          <div 
            className="md:col-span-12 group relative p-8 md:p-10 rounded-2xl bg-gradient-to-r from-[#05080f] to-[#030509] border border-white/5 overflow-hidden hover:border-[#60A5FA]/30 hover:shadow-[0_0_30px_rgba(96,165,250,0.05)] transition-all duration-700 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 fade-in-animate"
            style={{ animationDelay: '0.5s' }}
          >
            {/* Moving Laser Line Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

            <div className="flex-1 relative z-10">
              <iconify-icon icon="solar:quote-right-bold-duotone" class="text-3xl text-[#60A5FA]/20 mb-4"></iconify-icon>
              <p className="text-xl font-playfair font-light text-[#9CA3AF] leading-relaxed group-hover:text-[#E5E7EB] transition-colors duration-500">
                "We migrated 2 million concurrent players to the mesh network without a single dropped packet. The self-healing routing protocol dynamically routed around three major regional ISP outages seamlessly."
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 relative z-10 md:min-w-[280px] border-l-0 md:border-l border-white/5 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" 
                alt="David Park" 
                className="w-14 h-14 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-[#60A5FA]/20 shadow-[0_0_15px_rgba(96,165,250,0.1)]" 
              />
              <div>
                <h4 className="text-sm font-medium text-white tracking-wide font-inter">David Park</h4>
                <p className="text-xs text-[#60A5FA]/70 font-inter tracking-wider uppercase mt-1">VP Infrastructure</p>
              </div>
              
              {/* Background watermark logo */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <iconify-icon icon="simple-icons:discord" class="text-[80px] text-white"></iconify-icon>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;