import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from '../components/Reveal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FeatureList = ({ features }) => (
  <ul className="flex flex-col gap-4 mb-8 flex-1">
    {features.map((feat, i) => (
      <li key={i} className="flex items-start gap-3 text-framer-muted text-sm">
        <iconify-icon icon="solar:check-circle-bold" class="text-white text-lg shrink-0"></iconify-icon>
        <span>{feat}</span>
      </li>
    ))}
  </ul>
);

export default function Pricing() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-24">
      <div className="text-center mb-20 flex flex-col items-center">
        <Reveal 
          text="Pricing for everyone" 
          as="h1" 
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6" 
          width="w-auto" 
        />
        <Reveal delay={200} width="w-auto">
          <p className="text-xl text-framer-muted max-w-2xl mx-auto">
            Start for free, upgrade when you need to. No hidden fees or surprise charges.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free */}
        <Reveal delay={100}>
          <div className="bg-framer-panel border border-white/[0.06] rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
            <p className="text-framer-muted text-sm mb-6">For hobby sites and prototypes.</p>
            <div className="text-4xl font-bold text-white mb-8">$0<span className="text-lg text-framer-muted font-normal">/mo</span></div>
            <FeatureList features={[
              "Framer domain",
              "Framer banner",
              "Up to 1,000 visitors/mo",
              "Basic support"
            ]} />
            <button className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors mt-auto">
              Start Free
            </button>
          </div>
        </Reveal>

        {/* Pro */}
        <Reveal delay={200}>
          <div className="bg-gradient-to-b from-[#1a1a1a] to-framer-panel border border-[#0099ff]/30 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,153,255,0.1)] h-full">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-3xl"></div>
            <div className="absolute top-4 right-6 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-framer-muted text-sm mb-6">For professional sites and portfolios.</p>
            <div className="text-4xl font-bold text-white mb-8">$15<span className="text-lg text-framer-muted font-normal">/mo</span></div>
            <FeatureList features={[
              "Custom domain",
              "No Framer banner",
              "Up to 100,000 visitors/mo",
              "CMS Collection (up to 1,000 items)",
              "Priority support"
            ]} />
            <button className="w-full py-3 rounded-xl bg-[#0099ff] text-white font-semibold hover:bg-[#0088ee] transition-colors shadow-[0_0_20px_rgba(0,153,255,0.4)] mt-auto">
              Upgrade to Pro
            </button>
          </div>
        </Reveal>

        {/* Enterprise */}
        <Reveal delay={300}>
          <div className="bg-framer-panel border border-white/[0.06] rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
            <p className="text-framer-muted text-sm mb-6">For teams that need advanced features.</p>
            <div className="text-4xl font-bold text-white mb-8">$25<span className="text-lg text-framer-muted font-normal">/mo</span></div>
            <FeatureList features={[
              "Everything in Pro",
              "Unlimited CMS collections",
              "Advanced permissions",
              "Staging environments",
              "Dedicated support"
            ]} />
            <button className="w-full py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors mt-auto">
              Contact Sales
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}