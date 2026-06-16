import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%'
        }
      });

      gsap.from('.cta-el', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] py-20 px-8 text-center group">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF4500]/20 via-[#111]/80 to-[#111] pointer-events-none group-hover:from-[#FF4500]/30 transition-all duration-700"></div>
        <div className="absolute -top-[50%] -right-[10%] w-96 h-96 bg-[#FF4500] blur-[150px] opacity-20 pointer-events-none rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute -bottom-[50%] -left-[10%] w-96 h-96 bg-orange-600 blur-[150px] opacity-10 pointer-events-none rounded-full group-hover:scale-110 transition-transform duration-1000"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="cta-el text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Ready to accelerate?
          </h2>
          <p className="cta-el text-xl text-zinc-400 mb-10">
            Join thousands of developers building the future on Dasher. Start shipping faster today.
          </p>
          
          <div className="cta-el flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Started for Free
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2">
              Talk to Sales
            </button>
          </div>
          
          <div className="cta-el mt-8 text-sm text-zinc-500">
            No credit card required. 14-day free trial on Pro plans.
          </div>
        </div>
      </div>
    </section>
  );
}