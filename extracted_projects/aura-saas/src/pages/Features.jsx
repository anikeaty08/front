import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from '../components/Reveal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Features() {
  const featureList = [
    {
      icon: "solar:magic-stick-3-bold",
      title: "AI Generation",
      desc: "Instantly draft entire landing pages or specific sections simply by describing what you need.",
      color: "text-purple-400"
    },
    {
      icon: "solar:code-circle-bold",
      title: "Code Components",
      desc: "Bring your own React components. Fully integrate them visually inside the canvas.",
      color: "text-blue-400"
    },
    {
      icon: "solar:text-square-bold",
      title: "Typography",
      desc: "Complete control over Google Fonts, custom fonts, variable fonts, and fluid sizing.",
      color: "text-green-400"
    },
    {
      icon: "solar:routing-2-bold",
      title: "Animations",
      desc: "Powerful scroll animations, hover states, and seamless page transitions without writing CSS.",
      color: "text-orange-400"
    },
    {
      icon: "solar:server-square-bold",
      title: "Hosting",
      desc: "Deploy directly to a globally distributed edge network for ultimate speed and reliability.",
      color: "text-pink-400"
    },
    {
      icon: "solar:graph-bold",
      title: "SEO Optimized",
      desc: "Built-in performance and metadata tools that ensure your pages rank beautifully on Google.",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-24">
      <div className="text-center mb-24 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <Reveal text="Everything you need." as="span" className="block" />
          <Reveal text="Nothing you don't." as="span" className="block text-white/50 mt-2" />
        </h1>
        <Reveal delay={200} width="w-auto">
          <p className="text-xl text-framer-muted max-w-2xl mx-auto">
            Explore a comprehensive toolkit specifically engineered for design freedom and blazing fast performance.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((feat, idx) => (
          <Reveal key={idx} delay={100 + idx * 100}>
            <div className={cn(
              'group bg-framer-panel border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-300 h-full'
            )}>
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <iconify-icon icon={feat.icon} class={cn("text-3xl", feat.color)}></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{feat.title}</h3>
              <p className="text-framer-muted leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}