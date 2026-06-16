import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuresList = [
  {
    title: 'Lightning Fast Deployments',
    description:
      'Push to production in milliseconds. Our edge network ensures your code is globally distributed instantly without manual intervention.',
    icon: 'solar:rocket-line-duotone',
  },
  {
    title: 'Zero Configuration',
    description:
      'Stop wrestling with complex config files. Dasher auto-detects your framework and perfectly optimizes the build process automatically.',
    icon: 'solar:magic-stick-3-line-duotone',
  },
  {
    title: 'Infinite Scalability',
    description:
      'Traffic spikes are handled automatically. Never worry about provisioning servers, load balancing, or unexpected downtime again.',
    icon: 'solar:graph-up-line-duotone',
  },
  {
    title: 'Bank-Grade Security',
    description:
      'Enterprise-level DDoS protection, automatic SSL, and end-to-end encryption come standard on every single deployment tier.',
    icon: 'solar:shield-check-line-duotone',
  },
  {
    title: 'Real-time Analytics',
    description:
      "Monitor your application's health, traffic, and performance with our built-in, completely transparent and lightning-fast dashboard.",
    icon: 'solar:chart-square-line-duotone',
  },
  {
    title: 'Edge Computing',
    description:
      'Run logic closer to your users. Drastically reduce latency by executing custom code at the edge instead of centralized servers.',
    icon: 'solar:cpu-line-duotone',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector('.feature-header');
      const cards = sectionRef.current?.querySelectorAll('.feature-card');

      if (header) {
        gsap.fromTo(
          header,
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'opacity,visibility,transform',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (cards?.length) {
        gsap.fromTo(
          cards,
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'opacity,visibility,transform',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32"
    >
      <div className="feature-header text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Everything you need to
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            {' '}
            ship products faster
          </span>
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          We&apos;ve abstracted away the complexity of modern infrastructure so
          your team can focus entirely on building great user experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {featuresList.map((feature, i) => (
          <div
            key={i}
            className="feature-card group relative rounded-2xl border border-white/5 bg-white/[0.015] p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Elegant Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Very faint background highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-300">
              <iconify-icon
                icon={feature.icon}
                className="text-xl text-zinc-400 group-hover:text-white transition-colors duration-300"
              ></iconify-icon>
            </div>

            <h3 className="text-lg font-medium tracking-tight text-white mb-2">
              {feature.title}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-500 flex-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}