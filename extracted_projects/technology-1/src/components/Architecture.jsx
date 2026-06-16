import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Custom Animated Schemas ---

const SchemaCompute = () => (
  <svg viewBox="0 0 400 150" className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700">
    <defs>
      <filter id="glow-orange">
         <feGaussianBlur stdDeviation="3" result="blur"/>
         <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    
    <path d="M100 75 L280 25 M100 75 L280 75 M100 75 L280 125" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
    
    <path d="M100 75 L280 25 M100 75 L280 75 M100 75 L280 125" stroke="#FF4500" strokeWidth="2" fill="none" strokeDasharray="50 150">
       <animate attributeName="stroke-dashoffset" values="200; 0" dur="2s" repeatCount="indefinite" />
    </path>
    
    <rect x="60" y="45" width="60" height="60" rx="12" fill="rgba(255,69,0,0.05)" stroke="#FF4500" strokeWidth="2" />
    <rect x="75" y="60" width="30" height="30" rx="6" fill="#FF4500" filter="url(#glow-orange)">
       <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
    </rect>
    <circle cx="90" cy="75" r="4" fill="#fff" />
    
    {[25, 75, 125].map((y, i) => (
      <g key={i}>
        <rect x="280" y={y - 15} width="60" height="30" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <circle cx="295" cy={y} r="3" fill="#FF4500" filter="url(#glow-orange)">
           <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        </circle>
        <rect x="310" y={y - 2} width="20" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      </g>
    ))}
  </svg>
);

const SchemaRouting = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700">
    <defs>
      <filter id="glow-blue">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path id="path1" d="M30 75 Q 100 10 170 75" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
    <path id="path2" d="M30 75 Q 100 140 170 75" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
    <path id="path3" d="M30 75 L 170 75" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    
    <circle r="4" fill="#3B82F6" filter="url(#glow-blue)">
      <animateMotion dur="2.5s" repeatCount="indefinite">
        <mpath href="#path1" />
      </animateMotion>
    </circle>
    <circle r="4" fill="#3B82F6" filter="url(#glow-blue)">
      <animateMotion dur="3s" repeatCount="indefinite">
        <mpath href="#path2" />
      </animateMotion>
    </circle>
    <circle r="3" fill="#60A5FA" filter="url(#glow-blue)">
      <animateMotion dur="1.8s" repeatCount="indefinite">
        <mpath href="#path3" />
      </animateMotion>
    </circle>

    <circle cx="30" cy="75" r="8" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <circle cx="30" cy="75" r="3" fill="#3B82F6" />
    
    <circle cx="170" cy="75" r="8" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <circle cx="170" cy="75" r="3" fill="#3B82F6" />
  </svg>
);

const SchemaStorage = () => (
  <svg viewBox="0 0 200 300" className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700">
    <defs>
      <filter id="glow-emerald">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <g transform="translate(50, 40)">
      {[120, 80, 40].map((y, i) => (
        <g key={i} transform={`translate(0, ${y})`}>
          <path d="M50 0 L100 25 L50 50 L0 25 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M0 25 L50 50 L50 70 L0 45 Z" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <path d="M100 25 L50 50 L50 70 L100 45 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </g>
      ))}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,40; 0,80; 0,120; 0,0" dur="4s" repeatCount="indefinite" calcMode="discrete"/>
        <path d="M50 0 L100 25 L50 50 L0 25 Z" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1.5" filter="url(#glow-emerald)" />
        <path d="M0 25 L50 50 L50 70 L0 45 Z" fill="rgba(16,185,129,0.05)" stroke="#10B981" strokeWidth="1.5" />
        <path d="M100 25 L50 50 L50 70 L100 45 Z" fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.5" />
      </g>
      <path d="M50 -20 L50 160" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="50" cy="-20" r="3" fill="#10B981" filter="url(#glow-emerald)">
        <animate attributeName="cy" values="-20; 160" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

const SchemaHealing = () => (
  <svg viewBox="0 0 400 150" className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-700">
    <defs>
      <filter id="glow-purple">
         <feGaussianBlur stdDeviation="3" result="blur"/>
         <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <path d="M50 75 L150 25 L250 75 L350 75" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
    <path d="M50 75 L150 125 L250 75" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
    
    <path d="M50 75 L150 75" stroke="rgba(239,68,68,0.3)" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
    </path>
    <circle cx="100" cy="75" r="12" fill="rgba(239,68,68,0.1)" stroke="#EF4444" strokeWidth="1">
       <animate attributeName="r" values="8;16;8" dur="1.5s" repeatCount="indefinite" />
       <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    
    <path d="M50 75 L150 25 L250 75 L350 75" stroke="#A855F7" strokeWidth="2" fill="none" strokeDasharray="100 200">
       <animate attributeName="stroke-dashoffset" values="300; 0" dur="3s" repeatCount="indefinite" />
    </path>
    <path d="M50 75 L150 125 L250 75 L350 75" stroke="#A855F7" strokeWidth="2" fill="none" strokeDasharray="100 200">
       <animate attributeName="stroke-dashoffset" values="300; 0" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </path>

    {[
      [50, 75], [150, 25], [150, 75], [150, 125], [250, 75], [350, 75]
    ].map(([x,y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="6" fill="#111" stroke={i === 2 ? "#EF4444" : "rgba(255,255,255,0.2)"} strokeWidth="2" />
        {i !== 2 && <circle cx={x} cy={y} r="2" fill="#A855F7" filter="url(#glow-purple)" />}
      </g>
    ))}
  </svg>
);

// --- Content Data ---

const bentoItems = [
  {
    title: 'Distributed Compute Core',
    description: 'Our proprietary hypervisor runs thousands of isolated v8 isolates per metal node, allowing cold starts in under 5ms without container overhead.',
    icon: 'solar:cpu-bolt-bold-duotone',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    gradient: 'from-orange-500/20 to-transparent',
    schema: <SchemaCompute />
  },
  {
    title: 'Intelligent Routing',
    description: 'Anycast DNS automatically directs users to the closest node with zero round-trip penalties.',
    icon: 'solar:routing-3-bold-duotone',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    gradient: 'from-blue-500/20 to-transparent',
    schema: <SchemaRouting />
  },
  {
    title: 'Immutable Storage',
    description: 'Global KV stores and Object Storage replicated across regions seamlessly.',
    icon: 'solar:server-path-bold-duotone',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    gradient: 'from-emerald-500/20 to-transparent',
    schema: <SchemaStorage />
  },
  {
    title: 'Self-Healing Network',
    description: 'When a node goes offline, traffic is dynamically re-routed through optimized fallback paths before a single packet is dropped.',
    icon: 'solar:health-bold-duotone',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    gradient: 'from-purple-500/20 to-transparent',
    schema: <SchemaHealing />
  }
];

export default function Architecture() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arch-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.fromTo(cardsRef.current, 
        { 
          y: 100, 
          opacity: 0, 
          rotationX: 15,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          scale: 1,
          duration: 1.2, 
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    const handleMouseMove = (e) => {
      cardsRef.current.forEach(card => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto overflow-visible">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#FF4500]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="arch-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md">
            <iconify-icon icon="solar:layers-bold" class="text-[#FF4500] text-sm"></iconify-icon>
            Platform Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Engineered for the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
              Modern Web
            </span>
          </h2>
        </div>
        <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
          A deeply integrated stack designed from the silicon up to maximize throughput and minimize latency.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        {bentoItems.map((item, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] hover:border-white/20 transition-colors duration-500 ${item.colSpan} ${item.rowSpan} transform-gpu`}
            style={{
              '--mouse-x': '50%',
              '--mouse-y': '50%'
            }}
          >
            {/* Spotlight overlay driven by mouse coords */}
            <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                 }}
            ></div>
            
            {/* Border glow */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{
                   background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2), transparent 40%)',
                   maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                   WebkitMaskComposite: 'xor',
                   maskComposite: 'exclude',
                   padding: '1px',
                   borderRadius: 'inherit'
                 }}
            ></div>

            {/* Content inner */}
            <div className="relative z-10 h-full flex flex-col md:flex-row">
              <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${item.gradient} blur-[80px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10`}></div>
              
              {item.colSpan === 'md:col-span-2' ? (
                <>
                  <div className="p-8 md:p-10 md:w-[55%] flex flex-col justify-center relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <iconify-icon icon={item.icon} class="text-2xl text-zinc-300 group-hover:text-white transition-colors"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-white mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                  <div className="h-48 md:h-auto md:w-[45%] relative flex items-center justify-center p-6 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 hidden md:block"></div>
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0c0c0c] to-transparent z-10 block md:hidden"></div>
                    {item.schema}
                  </div>
                </>
              ) : item.rowSpan === 'md:row-span-2' ? (
                <div className="flex flex-col h-full w-full">
                  <div className="w-full flex-1 relative flex items-center justify-center min-h-[220px] p-6 overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10"></div>
                    {item.schema}
                  </div>
                  <div className="p-8 relative z-10 mt-auto">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <iconify-icon icon={item.icon} class="text-2xl text-zinc-300 group-hover:text-white transition-colors"></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-white mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full w-full justify-between">
                  <div className="h-36 relative flex items-center justify-center p-6 overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10"></div>
                    {item.schema}
                  </div>
                  <div className="p-8 pt-0 relative z-10 mt-auto">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <iconify-icon icon={item.icon} class="text-xl text-zinc-300 group-hover:text-white transition-colors"></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-white mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}