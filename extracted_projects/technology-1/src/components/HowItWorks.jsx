import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Connect Repository',
    desc: 'Link your GitHub, GitLab, or Bitbucket account. We automatically detect your framework and configure the build settings.',
    icon: 'solar:folder-with-files-bold-duotone'
  },
  {
    num: '02',
    title: 'Automated Build',
    desc: 'Every push triggers a highly-parallelized build process in our secure containers, running tests and optimizing assets.',
    icon: 'solar:settings-bold-duotone'
  },
  {
    num: '03',
    title: 'Global Deployment',
    desc: 'Your application is instantly replicated to over 250 edge locations worldwide, ready to serve users instantly.',
    icon: 'solar:earth-bold-duotone'
  }
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.from('.hiw-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.hiw-container',
          start: 'top 70%'
        }
      });

      gsap.from('.hiw-step', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hiw-container',
          start: 'top 70%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-white/5">
      <div className="hiw-header text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          From commit to live in seconds
        </h2>
        <p className="text-zinc-400 text-lg">
          A radically simplified workflow that respects your time.
        </p>
      </div>

      <div className="hiw-container relative">
        <div className="hiw-line hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step flex flex-col items-center text-center relative group">
              <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border-2 border-[#FF4500]/20 flex items-center justify-center mb-8 relative group-hover:border-[#FF4500] transition-colors duration-500 shadow-[0_0_30px_rgba(255,69,0,0)] group-hover:shadow-[0_0_30px_rgba(255,69,0,0.15)]">
                <iconify-icon icon={step.icon} class="text-4xl text-zinc-300 group-hover:text-[#FF4500] transition-colors duration-500"></iconify-icon>
                <div className="absolute -bottom-4 bg-[#FF4500] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.num}
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}