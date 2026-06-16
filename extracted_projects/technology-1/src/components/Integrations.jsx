import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = [
  'simple-icons:react',
  'simple-icons:vuedotjs',
  'simple-icons:svelte',
  'simple-icons:nextdotjs',
  'simple-icons:nuxtdotjs',
  'simple-icons:astro',
  'simple-icons:nodedotjs',
  'simple-icons:python',
  'simple-icons:go',
  'simple-icons:rust',
  'simple-icons:docker',
  'simple-icons:github',
];

export default function Integrations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.int-header', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });
      
      gsap.from('.int-track', {
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="int-header text-center mb-10">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Plays perfectly with your stack
        </p>
      </div>

      <div className="int-track relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>

        <div className="flex testimonial-track items-center gap-16 px-8">
          {[...icons, ...icons].map((icon, i) => (
            <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 hover:scale-110 transform-gpu">
              <iconify-icon icon={icon} class="text-4xl"></iconify-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}