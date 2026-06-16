import { useState } from 'react';
import Reveal from '../components/ui/Reveal';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    id: 'prototyping',
    name: 'Prototyping',
    price: '$5k',
    description: 'Rapid validation and concept visualization for spatial computing ideas.',
    features: [
      '3D Environment Design',
      'Basic Interactive Logic',
      'WebXR Deployment',
      '1 Revision Cycle',
      '2 Weeks Delivery'
    ]
  },
  {
    id: 'immersive',
    name: 'Immersive',
    price: '$15k',
    description: 'Full-scale experiential applications built for brand engagement.',
    features: [
      'Custom 3D Assets & Rigging',
      'Advanced Physics & Shaders',
      'Multi-platform XR Support',
      'Analytics Integration',
      'Dedicated Art Director'
    ],
    highlight: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke digital reality solutions embedded deep into your infrastructure.',
    features: [
      'Live Data Integration',
      'Multiplayer / Social XR',
      'Ongoing Support SLAs',
      'Custom Hardware Setup',
      'Source Code Handover'
    ]
  }
];

const comparisonFeatures = [
  { name: '3D Environment Design', prototyping: true, immersive: true, enterprise: true },
  { name: 'Basic Interactive Logic', prototyping: true, immersive: true, enterprise: true },
  { name: 'WebXR Deployment', prototyping: true, immersive: true, enterprise: true },
  { name: 'Custom 3D Assets & Rigging', prototyping: false, immersive: true, enterprise: true },
  { name: 'Advanced Physics & Shaders', prototyping: false, immersive: true, enterprise: true },
  { name: 'Analytics Integration', prototyping: false, immersive: true, enterprise: true },
  { name: 'Multiplayer / Social XR', prototyping: false, immersive: false, enterprise: true },
  { name: 'Live Data Integration', prototyping: false, immersive: false, enterprise: true },
  { name: 'Ongoing Support SLAs', prototyping: false, immersive: false, enterprise: true },
  { name: 'Custom Hardware Infrastructure', prototyping: false, immersive: false, enterprise: true },
];

const faqs = [
  {
    question: "What exactly is spatial computing?",
    answer: "Spatial computing seamlessly blends digital content with the physical world. Unlike traditional screens, it utilizes augmented reality (AR), virtual reality (VR), and mixed reality (MR) to allow humans to interact with computers using natural physical actions and 3D space."
  },
  {
    question: "What platforms do you develop for?",
    answer: "We are platform-agnostic but specialize in WebXR, Apple Vision Pro (visionOS), Meta Quest ecosystem, and high-end PC VR setups. We ensure your application is built on the framework best suited for your target audience."
  },
  {
    question: "How long does a typical XR project take?",
    answer: "A rapid WebXR prototype can be delivered in as little as 2-3 weeks. Full-scale immersive applications typically range from 8 to 16 weeks depending on the complexity of 3D assets, backend integrations, and physical hardware requirements."
  },
  {
    question: "Do I need to provide my own 3D assets?",
    answer: "Not necessarily. While we can optimize and integrate your existing CAD or 3D models, we have a complete in-house technical art team capable of creating optimized, photorealistic assets tailored specifically for real-time engines."
  },
  {
    question: "How do you handle maintenance and updates?",
    answer: "We offer ongoing retention and SLA packages for all enterprise clients. This includes OS compatibility updates, server-side infrastructure scaling, and continuous performance optimization as new hardware hits the market."
  }
];

export default function Pricing() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-32 flex flex-col items-center min-h-[70vh]">
      <Reveal className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">NextGen Solutions</h1>
        <p className="text-white/60 max-w-2xl leading-relaxed mb-20">
          Transparent pricing for next-generation digital experiences. From rapid prototypes to deeply integrated NextGen enterprise spatial solutions.
        </p>
      </Reveal>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {pricingTiers.map((tier, index) => (
          <Reveal 
            key={tier.id} 
            delay={index * 150} 
            className={clsx(
              "p-8 border rounded-sm flex flex-col relative transition-all duration-500",
              tier.highlight 
                ? "bg-gradient-to-b from-[#1a1025] to-black border-purple-500/50 md:-translate-y-4 shadow-[0_0_40px_rgba(168,85,247,0.15)] z-10" 
                : "bg-black border-white/10 hover:border-white/20"
            )}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-sm shadow-lg">
                Most Popular
              </div>
            )}
            
            <h3 className="text-lg font-medium tracking-tight text-white mb-2">{tier.name}</h3>
            <p className="text-sm text-white/40 mb-6 min-h-[40px]">{tier.description}</p>
            
            <div className="mb-8 pb-8 border-b border-white/10">
              <span className="text-4xl font-semibold tracking-tighter text-white">{tier.price}</span>
              {tier.price !== 'Custom' && <span className="text-white/40 text-sm"> /project</span>}
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <iconify-icon icon="solar:check-circle-linear" class="text-purple-400 text-lg mt-[2px]"></iconify-icon>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/contact" 
              className={clsx(
                "h-12 w-full rounded-sm flex items-center justify-center text-xs font-medium tracking-wider uppercase transition-all duration-300",
                tier.highlight 
                  ? "bg-white text-black hover:bg-purple-100 shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                  : "border border-white/20 text-white hover:bg-white/5"
              )}
            >
              {tier.price === 'Custom' ? 'Contact Sales' : 'Start Building'}
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="w-full mt-32 flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">Compare Capabilities</h2>
        </Reveal>
        
        <Reveal delay={150} className="w-full overflow-x-auto hide-scrollbar pb-8">
          <div className="min-w-[800px] flex flex-col border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl relative">
            
            {/* Header */}
            <div className="grid grid-cols-4 p-6 border-b border-white/10 bg-white/[0.02] sticky top-0 z-10">
              <div className="font-medium text-white/40 tracking-wider text-xs uppercase self-end">Features</div>
              <div className="font-medium text-white text-center tracking-wider text-sm uppercase">Prototyping</div>
              <div className="font-medium text-purple-400 text-center tracking-wider text-sm uppercase relative">
                Immersive
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
              </div>
              <div className="font-medium text-white text-center tracking-wider text-sm uppercase">Enterprise</div>
            </div>
            
            {/* Rows */}
            {comparisonFeatures.map((feat, i) => (
              <div 
                key={i} 
                className={clsx(
                  "grid grid-cols-4 p-6 border-b border-white/10 last:border-0 hover:bg-white/[0.04] transition-colors",
                  i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                )}
              >
                <div className="text-white/80 text-sm font-medium flex items-center">{feat.name}</div>
                <div className="flex justify-center items-center">
                  {feat.prototyping 
                    ? <iconify-icon icon="solar:check-circle-bold" class="text-white/40 text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"></iconify-icon> 
                    : <iconify-icon icon="solar:minus-circle-linear" class="text-white/10 text-xl"></iconify-icon>
                  }
                </div>
                <div className="flex justify-center items-center bg-purple-900/[0.03] -my-6 py-6 border-x border-purple-500/10">
                  {feat.immersive 
                    ? <iconify-icon icon="solar:check-circle-bold" class="text-purple-500 text-2xl drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"></iconify-icon> 
                    : <iconify-icon icon="solar:minus-circle-linear" class="text-white/10 text-xl"></iconify-icon>
                  }
                </div>
                <div className="flex justify-center items-center">
                  {feat.enterprise 
                    ? <iconify-icon icon="solar:check-circle-bold" class="text-white/40 text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"></iconify-icon> 
                    : <iconify-icon icon="solar:minus-circle-linear" class="text-white/10 text-xl"></iconify-icon>
                  }
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mt-32 flex flex-col items-center">
        <Reveal className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8">Frequently Asked Questions</h2>
          <p className="text-white/60 leading-relaxed mb-16">
            Everything you need to know about our methodologies and spatial computing integration.
          </p>
        </Reveal>

        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            
            return (
              <Reveal key={i} delay={i * 100} className="w-full">
                <div 
                  className="w-full border border-white/10 bg-black p-6 rounded-sm cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={clsx(
                      "text-lg font-medium tracking-tight transition-colors duration-300",
                      isOpen ? "text-purple-400" : "text-white"
                    )}>
                      {faq.question}
                    </h3>
                    <div className={clsx(
                      "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
                      isOpen ? "border-purple-500/50 bg-purple-500/10 text-purple-400" : "border-white/10 text-white/40"
                    )}>
                      <iconify-icon 
                        icon="solar:alt-arrow-down-linear" 
                        class={clsx("transition-transform duration-500", isOpen && "rotate-180")}
                      ></iconify-icon>
                    </div>
                  </div>
                  
                  <div 
                    className={clsx(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

    </div>
  );
}