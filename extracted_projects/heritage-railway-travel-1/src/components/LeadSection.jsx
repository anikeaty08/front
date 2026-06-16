import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LeadSection({ 
  id, 
  bgImage,
  bgClass, 
  titleLine1, 
  titleLine2, 
  text, 
  buttonLabel, 
  buttonLink,
  images 
}) {
  const containerRef = useRef(null);
  const imgRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggerObj = {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      };

      if (id === 1) {
        gsap.fromTo(imgRefs[0].current, { yPercent: 5, scale: 1.15 }, { yPercent: -15, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        gsap.fromTo(imgRefs[1].current, { yPercent: 15, scale: 1.15, rotation: -2 }, { yPercent: -25, scale: 1.15, rotation: 2, ease: "none", scrollTrigger: triggerObj });
        gsap.fromTo(imgRefs[2].current, { yPercent: 25, scale: 1.15 }, { yPercent: -35, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
      } else {
        gsap.fromTo(imgRefs[0].current, { yPercent: 10, scale: 1.15 }, { yPercent: -20, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        gsap.fromTo(imgRefs[1].current, { yPercent: 20, scale: 1.15 }, { yPercent: -30, scale: 1.15, ease: "none", scrollTrigger: triggerObj });
        gsap.fromTo(imgRefs[2].current, { yPercent: 5, scale: 1.15, rotation: 3 }, { yPercent: -15, scale: 1.15, rotation: -2, ease: "none", scrollTrigger: triggerObj });
      }
    });

    // Mobile subtle parallax to keep the experience alive without breaking bounds
    mm.add("(max-width: 767px)", () => {
       const triggerObj = {
         trigger: containerRef.current,
         start: "top bottom",
         end: "bottom top",
         scrub: true
       };
       gsap.fromTo(imgRefs[0].current, { yPercent: 2, scale: 1.1 }, { yPercent: -8, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
       gsap.fromTo(imgRefs[1].current, { yPercent: 5, scale: 1.1 }, { yPercent: -12, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
       gsap.fromTo(imgRefs[2].current, { yPercent: 0, scale: 1.1 }, { yPercent: -5, scale: 1.1, ease: "none", scrollTrigger: triggerObj });
    });

    return () => mm.revert();
  }, [id]);

  return (
    <section 
      className={`relative flex flex-col justify-center min-h-screen py-24 lg:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden ${bgClass || ''}`} 
      ref={containerRef} 
      data-animate-section=""
    >
      {/* Background Layer with Darkening Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: bgImage ? `linear-gradient(rgba(12,18,28,0.7), rgba(12,18,28,0.4)), url('${bgImage}')` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Bottom Gradient Fade to smoothly blend into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-t from-[#f0ebe2] to-transparent z-10 pointer-events-none"></div>

      {/* Main Content Wrapper - Tailwind Flex Grid ensures full responsiveness */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch max-w-[1600px] mx-auto w-full gap-12 lg:gap-16">
        
        {/* Title Block - Horizontal on mobile, Vertical-RL on desktop */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-center shrink-0">
          <h2 
            className="text-white font-serif leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] flex flex-col lg:flex-row lg:[writing-mode:vertical-rl] lg:rotate-180" 
            data-anim=""
          >
            <span className="mb-2 lg:mb-0 lg:ml-4 uppercase tracking-widest">{titleLine1}</span>
            <span className="text-[#c49b4a] italic font-light tracking-normal">{titleLine2}</span>
          </h2>
        </div>

        {/* Text & Button Area */}
        <div className="w-full lg:flex-1 flex flex-col justify-center lg:max-w-xl xl:max-w-2xl lg:px-8">
          <p 
            className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 drop-shadow-md font-light" 
            data-anim="" 
            data-anim-delay="0.1" 
            dangerouslySetInnerHTML={{ __html: text }} 
          />
          <div data-anim="" data-anim-delay="0.2">
            <a className="c-button__circle--white" href={buttonLink}>
              <span className="label">{buttonLabel}</span>
            </a>
          </div>
        </div>

        {/* Dynamic Image Collage - Percentage widths preserve proportions on any screen */}
        <div className="w-full lg:w-[45%] xl:w-[50%] relative h-[450px] sm:h-[600px] lg:h-auto lg:min-h-[700px] xl:min-h-[800px] mt-10 lg:mt-0 flex-shrink-0">
          <div className="absolute inset-0 w-full h-full max-w-[500px] lg:max-w-none mx-auto">
            {/* Img 1 - Top Right */}
            <figure 
              className="absolute top-0 right-0 w-[60%] lg:w-[55%] aspect-[3/4] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl z-10" 
              data-anim="" 
              data-anim-delay="0.1"
            >
              <img 
                ref={imgRefs[0]} 
                src={images[0].src} 
                alt="" 
                className="w-full h-full object-cover transform-gpu" 
              />
            </figure>

            {/* Img 2 - Bottom Left */}
            <figure 
              className="absolute bottom-0 left-0 w-[55%] lg:w-[50%] aspect-[4/5] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl z-20" 
              data-anim="" 
              data-anim-delay="0.2"
            >
              <img 
                ref={imgRefs[1]} 
                src={images[1].src} 
                alt="" 
                className="w-full h-full object-cover transform-gpu" 
              />
            </figure>

            {/* Img 3 - Middle Overlap */}
            <figure 
              className="absolute top-[35%] lg:top-[40%] right-[15%] lg:right-[20%] w-[45%] lg:w-[40%] aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 ring-1 ring-white/20" 
              data-anim="" 
              data-anim-delay="0.3"
            >
              <img 
                ref={imgRefs[2]} 
                src={images[2].src} 
                alt="" 
                className="w-full h-full object-cover transform-gpu" 
              />
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}