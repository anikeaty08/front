import React from 'react';

const logos = [
  { name: 'Vercel', icon: 'simple-icons:vercel' },
  { name: 'Stripe', icon: 'simple-icons:stripe' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'AWS', icon: 'simple-icons:amazonaws' },
  { name: 'Cloudflare', icon: 'simple-icons:cloudflare' },
  { name: 'Docker', icon: 'simple-icons:docker' },
];

const TrustBar = () => {
  return (
    <section className="w-full py-16 border-t border-white/5 bg-[#030509] relative z-10 fade-in-animate" style={{ animationDelay: '1.2s' }}>
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <p className="text-center text-[10px] font-medium tracking-[0.3em] text-white/30 uppercase font-inter">
          Trusted by distributed teams worldwide
        </p>
      </div>
      
      <div className="w-full overflow-hidden relative flex items-center h-16">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030509] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030509] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all cursor-default">
          {/* Duplicate array contents to create a seamless loop effect */}
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={`${logo.name}-${idx}`} 
              className="flex items-center justify-center w-40 md:w-56 text-white/20 hover:text-[#60A5FA] transition-colors duration-500"
            >
              <div className="flex items-center gap-3">
                <iconify-icon icon={logo.icon} class="text-2xl"></iconify-icon>
                <span className="font-inter font-medium tracking-wide text-sm opacity-80">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;