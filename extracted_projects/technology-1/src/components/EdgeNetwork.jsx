import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EdgeNetwork() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw paths animation
      gsap.fromTo('.network-path', 
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { 
          strokeDashoffset: 0, 
          duration: 2.5, 
          ease: 'power2.inOut',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );

      // Node pop-in animation
      gsap.fromTo(nodesRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );

      // Section text fade up
      gsap.from('.network-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pre-defined nodes and abstract paths to simulate a map
  const nodes = [
    { x: 15, y: 30 }, { x: 25, y: 45 }, { x: 20, y: 70 },
    { x: 45, y: 25 }, { x: 50, y: 50 }, { x: 40, y: 80 },
    { x: 70, y: 35 }, { x: 85, y: 20 }, { x: 80, y: 60 },
    { x: 90, y: 85 }
  ];

  const paths = [
    "M15,30 Q30,10 45,25", "M25,45 Q40,60 50,50", "M15,30 L25,45",
    "M25,45 L20,70", "M20,70 Q30,90 40,80", "M45,25 L50,50",
    "M50,50 Q60,30 70,35", "M45,25 Q60,10 70,35", "M70,35 L85,20",
    "M50,50 L80,60", "M80,60 L90,85", "M40,80 Q60,90 80,60"
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#050505] border-y border-white/5">
      {/* Text Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-16 pointer-events-none">
        <div className="network-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-[#FF4500] text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
          </span>
          Live Traffic Routing
        </div>
        <h2 className="network-text text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
          The globe is your localhost
        </h2>
        <p className="network-text text-zinc-400 text-lg md:text-xl max-w-2xl">
          We’ve built a massive private backbone connecting top-tier data centers. Your application logic resides milliseconds away from billions of users.
        </p>
      </div>

      {/* SVG Network Canvas */}
      <div className="relative w-full h-[400px] md:h-[600px] max-w-6xl mx-auto opacity-80">
        <svg 
          ref={svgRef}
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          {/* Base drawing paths */}
          {paths.map((d, i) => (
            <path 
              key={`base-${i}`}
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.2"
              className="network-path"
            />
          ))}

          {/* Glowing animated pulse paths */}
          {paths.map((d, i) => (
            <path 
              key={`pulse-${i}`}
              d={d}
              fill="none"
              stroke="#FF4500"
              strokeWidth="0.3"
              strokeDasharray="2 15"
              className="animate-dash-flow opacity-60 mix-blend-screen"
              style={{ animationDelay: `${i * 0.5}s`, animationDuration: `${15 + (i * 2)}s` }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`} ref={el => nodesRef.current[i] = el} transform={`translate(${node.x}, ${node.y})`}>
              {/* Pulse ring */}
              <circle 
                cx="0" cy="0" r="2" 
                fill="none" 
                stroke="#FF4500" 
                strokeWidth="0.1" 
                className="opacity-40"
              >
                <animate attributeName="r" values="0; 3; 4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8; 0; 0" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Inner core */}
              <circle cx="0" cy="0" r="0.6" fill="#fff" />
              <circle cx="0" cy="0" r="1.5" fill="#FF4500" className="opacity-50 blur-[2px]" />
            </g>
          ))}
        </svg>

        {/* Ambient Map Gradients */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>
      
      {/* Bottom fade mask to blend into the next section smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
    </section>
  );
}