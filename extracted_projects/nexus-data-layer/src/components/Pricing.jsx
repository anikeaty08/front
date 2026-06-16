import React, { useState } from 'react';

const tiers = [
  {
    name: 'Developer',
    price: '49',
    description: 'Perfect for prototyping distributed applications and testing the mesh.',
    features: [
      'Up to 5 global edge nodes',
      '100GB monthly bandwidth',
      'Standard routing algorithms',
      'Community discord support',
      '48hr state retention'
    ],
    buttonText: 'Start Building',
    isPopular: false,
    delay: '0.1s'
  },
  {
    name: 'Scale',
    price: '199',
    description: 'For production applications requiring sub-millisecond global synchronization.',
    features: [
      'Unlimited edge node access',
      '2TB monthly bandwidth',
      'Neural edge routing (ML)',
      'Dedicated slack channel',
      'Infinite state retention',
      'Real-time analytics dashboard'
    ],
    buttonText: 'Initialize Protocol',
    isPopular: true,
    delay: '0.3s'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke infrastructure for massive-scale computational requirements.',
    features: [
      'Custom bare-metal deployment',
      'Unmetered network bandwidth',
      'Quantum-resistant layer',
      '24/7 dedicated engineering team',
      'On-premise core integration',
      'SLA with 99.999% uptime'
    ],
    buttonText: 'Contact Engineering',
    isPopular: false,
    delay: '0.5s'
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="w-full py-24 bg-[#030509] relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#60A5FA]/5 blur-[120px] pointer-events-none rounded-b-[100%]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-medium tracking-[0.3em] uppercase mb-6 border border-white/10 text-[#60A5FA] rounded-full bg-white/5 backdrop-blur-sm">
            <iconify-icon icon="solar:wallet-money-linear" stroke-width="1.5"></iconify-icon>
            Resource Allocation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#FFFFFF] font-playfair font-light max-w-2xl">
            Transparent scaling.
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-sm font-inter font-light max-w-lg mx-auto">
            Select the tier that aligns with your computational boundaries. Scale dynamically as your data streams multiply.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center bg-[#05080f] border border-white/10 p-1.5 rounded-full relative">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`w-32 relative z-10 py-2.5 text-xs font-medium tracking-wide transition-colors duration-300 rounded-full ${!isAnnual ? 'text-[#030509]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`w-32 relative z-10 py-2.5 text-xs font-medium tracking-wide transition-colors duration-300 rounded-full ${isAnnual ? 'text-[#030509]' : 'text-[#9CA3AF] hover:text-white'}`}
            >
              Annually
              {/* Absolute positioned tag as decoration to keep equal button widths */}
              <span className={`absolute -top-2 -right-1 md:-top-3 md:-right-2 px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[9px] uppercase tracking-widest font-bold shadow-lg inline-block transition-colors duration-300 ${isAnnual ? 'bg-[#030509] text-[#60A5FA] border border-[#60A5FA]/30' : 'bg-[#60A5FA] text-[#030509]'}`}>
                -20%
              </span>
            </button>
            
            {/* Toggle slider background */}
            <div 
              className="absolute top-1.5 bottom-1.5 left-1.5 w-32 bg-[#60A5FA] rounded-full transition-transform duration-500 ease-in-out z-0"
              style={{ transform: isAnnual ? 'translateX(100%)' : 'translateX(0)' }}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl bg-[#05080f] flex flex-col fade-in-animate transition-all duration-700 hover:-translate-y-2 ${
                tier.isPopular 
                  ? 'border border-[#60A5FA]/30 shadow-[0_0_40px_rgba(96,165,250,0.05)] md:-mt-4 md:mb-4' 
                  : 'border border-white/5 hover:border-white/20'
              }`}
              style={{ animationDelay: tier.delay }}
            >
              {/* Highlight Glow for Popular Tier */}
              {tier.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#60A5FA]/10 to-transparent opacity-50 rounded-2xl pointer-events-none" />
              )}
              
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />

              <div className="p-8 md:p-10 flex-1 relative z-10">
                {/* Tier Name & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-playfair font-medium text-white tracking-wide">
                    {tier.name}
                  </h3>
                  {tier.isPopular && (
                    <div className="px-3 py-1 text-[9px] font-medium tracking-[0.2em] uppercase border border-[#60A5FA]/30 text-[#60A5FA] rounded-full bg-[#60A5FA]/10 backdrop-blur-sm animate-pulse-glow">
                      Optimized
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {tier.price !== 'Custom' && <span className="text-[#60A5FA] text-lg font-medium">$</span>}
                    <span className="text-4xl md:text-5xl font-playfair tracking-tight text-white">
                      {tier.price !== 'Custom' ? (isAnnual ? Math.floor(tier.price * 0.8) : tier.price) : tier.price}
                    </span>
                    {tier.price !== 'Custom' && (
                      <span className="text-sm text-[#9CA3AF] font-light ml-1">/mo</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-inter font-light text-[#9CA3AF] leading-relaxed mb-8 h-12">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-10">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <iconify-icon 
                        icon="solar:check-circle-linear" 
                        class={`mt-0.5 text-lg ${tier.isPopular ? 'text-[#60A5FA]' : 'text-white/30'}`}
                      ></iconify-icon>
                      <span className="text-sm font-inter font-light text-[#E5E7EB]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 md:p-10 pt-0 mt-auto relative z-10">
                <button className={`w-full py-3.5 rounded-full text-sm font-light transition-all duration-300 font-inter flex items-center justify-center gap-2 group/btn ${
                  tier.isPopular 
                    ? 'bg-[#60A5FA] text-[#030509] hover:bg-blue-300' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}>
                  {tier.buttonText}
                  <iconify-icon 
                    icon="solar:arrow-right-linear" 
                    stroke-width="1.5" 
                    class={`text-lg transform group-hover/btn:translate-x-1 transition-transform ${tier.isPopular ? 'text-[#030509]' : 'text-white'}`}
                  ></iconify-icon>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;