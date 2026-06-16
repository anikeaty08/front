export default function Pricing() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6 font-geist font-light">Predictable pricing for scale</h1>
        <p className="text-xl text-[#b0b3b8] max-w-2xl mx-auto font-geist font-light">Start for free, then pay a fraction of a percent as you grow. No hidden minimums or surprise fees.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Tier */}
        <div className="p-8 rounded-2xl border border-[#2e2e32] bg-[#0c0d0f] flex flex-col hover:border-white/10 transition-colors">
          <h3 className="text-xl text-white font-medium mb-2 font-geist">Starter</h3>
          <p className="text-sm text-[#7e828a] mb-6 font-geist">For early stage companies</p>
          <div className="text-5xl text-white font-light mb-6 font-geist">$0 <span className="text-sm text-[#7e828a] font-normal">/mo</span></div>
          <button className="w-full py-3 rounded-xl border border-[#2e2e32] text-white font-medium hover:bg-white/5 transition-all active:scale-95 mb-8 font-geist">Get Started</button>
          <ul className="space-y-4 text-[15px] text-[#b0b3b8] font-geist flex-1">
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Up to $50k MRR processed</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Standard reporting dashboard</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Community & email support</li>
          </ul>
        </div>
        
        {/* Growth Tier */}
        <div className="p-8 rounded-2xl border border-blue-500/40 bg-gradient-to-b from-[#12141a] to-[#0c0d0f] flex flex-col relative shadow-[0_0_40px_rgba(59,130,246,0.15)] transform md:-translate-y-4">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full font-geist shadow-[0_0_15px_rgba(59,130,246,0.5)]">Most Popular</div>
          <h3 className="text-xl text-white font-medium mb-2 font-geist">Growth</h3>
          <p className="text-sm text-[#7e828a] mb-6 font-geist">For scaling businesses</p>
          <div className="text-5xl text-white font-light mb-6 font-geist">0.4% <span className="text-sm text-[#7e828a] font-normal">of revenue</span></div>
          <button className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-all active:scale-95 mb-8 font-geist">Start Free Trial</button>
          <ul className="space-y-4 text-[15px] text-white font-geist flex-1">
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Advanced dunning & recovery</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Custom API integrations</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Multi-currency support</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Priority technical support</li>
          </ul>
        </div>
        
        {/* Enterprise Tier */}
        <div className="p-8 rounded-2xl border border-[#2e2e32] bg-[#0c0d0f] flex flex-col hover:border-white/10 transition-colors">
          <h3 className="text-xl text-white font-medium mb-2 font-geist">Enterprise</h3>
          <p className="text-sm text-[#7e828a] mb-6 font-geist">For large organizations</p>
          <div className="text-5xl text-white font-light mb-6 font-geist">Custom</div>
          <button className="w-full py-3 rounded-xl border border-[#2e2e32] text-white font-medium hover:bg-white/5 transition-all active:scale-95 mb-8 font-geist">Contact Sales</button>
          <ul className="space-y-4 text-[15px] text-[#b0b3b8] font-geist flex-1">
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Dedicated success manager</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Custom SLA guarantees</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Bespoke MSA & billing terms</li>
            <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" className="text-[#7e828a]"></iconify-icon> Hands-on migration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}