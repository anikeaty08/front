import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.perf-text', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      gsap.from('.perf-card-container', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });

      gsap.from('.perf-bar', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: '.perf-card-container',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="performance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4500]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-16">
        
        <div className="perf-text flex-1 lg:pr-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF4500] border border-[#FF4500]/20 text-xs font-medium mb-6">
            <iconify-icon icon="solar:server-square-bold"></iconify-icon>
            Global Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Designed for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-yellow-500">
              maximum velocity
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Our custom-built network backbone bypasses public internet congestion. Requests are routed through our private fiber network, ensuring the lowest possible latency regardless of where your users are.
          </p>
          
          <ul className="space-y-4 mb-8">
            {['Rust-based core engine', 'Distributed SQLite replicas', 'Automatic asset optimization'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-[#FF4500]/20 flex items-center justify-center text-[#FF4500]">
                  <iconify-icon icon="solar:check-read-linear" class="text-xs"></iconify-icon>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="perf-card-container flex-1 w-full relative z-10">
          <div className="relative rounded-2xl bg-[#111] border border-white/10 shadow-2xl p-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4500] via-orange-400 to-yellow-500"></div>
            
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="text-sm font-medium text-zinc-400">Response Times (Global Avg)</div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Dasher Engine', time: '12ms', width: 'w-[15%]', color: 'bg-[#FF4500]' },
                { label: 'Traditional Cloud', time: '145ms', width: 'w-[65%]', color: 'bg-zinc-700' },
                { label: 'Serverless V1', time: '85ms', width: 'w-[45%]', color: 'bg-zinc-700' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-medium text-zinc-400 mb-2">
                    <span>{stat.label}</span>
                    <span>{stat.time}</span>
                  </div>
                  <div className="w-full bg-black rounded-full h-3 overflow-hidden border border-white/5">
                    <div className={`perf-bar h-full ${stat.width} ${stat.color} rounded-full relative overflow-hidden`}>
                      {i === 0 && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full animate-[flow_2s_linear_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF4500] blur-[120px] opacity-10 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}