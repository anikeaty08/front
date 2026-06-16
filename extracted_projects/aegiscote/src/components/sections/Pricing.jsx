import React from 'react';

const plans = [
  {
    name: "Standard",
    price: "$49",
    period: "/cycle",
    desc: "Baseline telemetry and node management for localized clusters.",
    features: [
      "Up to 10 Active Nodes",
      "1TB Encrypted Storage",
      "Standard Latency SLA",
      "Community Support"
    ],
    highlighted: false
  },
  {
    name: "Aegis Core",
    price: "$199",
    period: "/cycle",
    desc: "Advanced routing and deep metric retention for enterprise environments.",
    features: [
      "Up to 100 Active Nodes",
      "10TB Encrypted Storage",
      "Quantum Routing Protocol",
      "Priority Ops Support"
    ],
    highlighted: true
  },
  {
    name: "Dedicated",
    price: "Custom",
    period: "",
    desc: "Bare-metal integration and unlimited horizontal scaling.",
    features: [
      "Unlimited Nodes",
      "Petabyte Scale Storage",
      "Dedicated Hardware",
      "24/7 Direct Line Ops"
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative border-b border-white/10 flex flex-col items-center overflow-hidden bg-[#030303]">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10 gsap-fade-up">
        <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4 text-xs tracking-widest uppercase font-bold">
          <iconify-icon icon="solar:tag-linear" class="text-lg"></iconify-icon>
          Resource Allocation
        </div>
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">Licensing Tiers</h2>
        <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
          Scale your processing capabilities on demand. Select a provisioning tier that matches your cryptographic workloads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6 relative z-10">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 flex flex-col gsap-card transition-colors duration-300 ${
              plan.highlighted 
                ? 'bg-[#080808] border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.05)] scale-100 md:scale-105 z-20' 
                : 'bg-[#050505] border border-white/10 hover:border-white/30 z-10'
            }`}
          >
            {/* Corner accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${plan.highlighted ? 'border-cyan-400' : 'border-white/30'}`} />
            <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${plan.highlighted ? 'border-cyan-400' : 'border-white/30'}`} />
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${plan.highlighted ? 'border-cyan-400' : 'border-white/30'}`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${plan.highlighted ? 'border-cyan-400' : 'border-white/30'}`} />

            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1">
                Recommended
              </div>
            )}

            <div className={`text-[0.65rem] tracking-widest uppercase mb-2 ${plan.highlighted ? 'text-cyan-400' : 'text-neutral-500'}`}>
              Tier {idx + 1}
            </div>
            
            <h3 className="text-2xl text-white font-light tracking-tight mb-2 uppercase">{plan.name}</h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 min-h-[40px]">
              {plan.desc}
            </p>

            <div className="mb-8 border-b border-white/10 pb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-light text-white">{plan.price}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">{plan.period}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-4 flex-grow mb-8 text-sm">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-neutral-300">
                  <iconify-icon 
                    icon="solar:check-circle-linear" 
                    class={`text-lg ${plan.highlighted ? 'text-cyan-400' : 'text-neutral-500'}`}
                  ></iconify-icon>
                  <span className="text-xs tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mt-auto border ${
              plan.highlighted 
                ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black font-medium' 
                : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
            }`}>
              Initialize Plan <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}