import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Hobby',
    description: 'Perfect for side projects and learning.',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      'Up to 3 personal projects',
      'Deploy from GitHub',
      'Standard edge network',
      'Community support',
      '100GB bandwidth per month'
    ],
    buttonText: 'Start for free',
    isPopular: false
  },
  {
    name: 'Pro',
    description: 'For professionals building production apps.',
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      'Unlimited projects',
      'Zero-downtime deployments',
      'Premium global edge routing',
      'Priority email support',
      '1TB bandwidth per month',
      'Custom domains with free SSL'
    ],
    buttonText: 'Start 14-day trial',
    isPopular: true
  },
  {
    name: 'Enterprise',
    description: 'Custom infrastructure for large scale teams.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    features: [
      'Unlimited bandwidth',
      'Dedicated hypervisor nodes',
      '99.99% Uptime SLA',
      '24/7 Phone & Slack support',
      'Advanced DDoS protection',
      'Custom security compliance'
    ],
    buttonText: 'Contact Sales',
    isPopular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.from('.pricing-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-32 px-6 md:px-12 relative w-full border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="pricing-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Start for free and scale smoothly. Choose the plan that best fits your needs without worrying about hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/10 transition-colors focus:outline-none hover:bg-white/15"
              aria-label="Toggle billing period"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-7 bg-[#FF4500]' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annually
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-xs font-semibold border border-[#FF4500]/20 ml-2">
              Save 20%
            </span>
          </div>
        </div>

        <div className="pricing-grid grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`pricing-card relative rounded-3xl p-8 flex flex-col ${
                plan.isPopular 
                ? 'bg-[#111111] border border-[#FF4500]/30 shadow-[0_0_40px_rgba(255,69,0,0.05)]' 
                : 'bg-white/[0.015] border border-white/5 hover:border-white/10 transition-colors'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#FF4500] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <>
                      <span className="text-4xl font-semibold tracking-tight text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-zinc-500 text-sm">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-semibold tracking-tight text-white">
                      Custom
                    </span>
                  )}
                </div>
                {typeof plan.monthlyPrice === 'number' && plan.monthlyPrice > 0 && isAnnual && (
                  <p className="text-xs text-zinc-500 mt-2">Billed annually (${plan.annualPrice * 12}/year)</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <iconify-icon icon="solar:check-circle-bold" class={`text-lg mt-0.5 ${plan.isPopular ? 'text-[#FF4500]' : 'text-zinc-600'}`}></iconify-icon>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                plan.isPopular 
                ? 'bg-[#FF4500] text-white hover:bg-[#ff571a] shadow-[0_0_20px_rgba(255,69,0,0.2)] hover:shadow-[0_0_30px_rgba(255,69,0,0.4)]' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}