import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
primary: '#DEDBC8',
},
fontFamily: {
sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const { useState, useEffect, useRef } = React;
        const { motion, useInView, useScroll, useTransform } = window.Motion;

        // --- ANIMATION COMPONENTS ---

        const WordsPullUp = ({ text, className, showAsterisk }) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-10%" });
            const words = text.split(" ");

            return (
                <div ref={ref} className={`flex flex-wrap ${className}`}>
                    {words.map((word, i) => {
                        const isLastWord = showAsterisk && i === words.length - 1;
                        return (
                            <div key={i} className="overflow-hidden mr-[0.2em] relative flex items-start">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={isInView ? { y: 0 } : { y: "100%" }}
                                    transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block relative"
                                >
                                    {word}
                                    {isLastWord && (
                                        <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-light">*</span>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            );
        };

        const WordsPullUpMultiStyle = ({ segments, className, wrapperClass = "justify-center" }) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-10%" });
            let wordCount = 0;

            return (
                <div ref={ref} className={`inline-flex flex-wrap ${wrapperClass} ${className}`}>
                    {segments.map((seg, sIdx) => {
                        const words = seg.text.split(" ").filter(w => w !== "");
                        return words.map((word, wIdx) => {
                            const currentIdx = wordCount++;
                            // Add space after word unless it's the last word of the last segment
                            const hasSpace = !(sIdx === segments.length - 1 && wIdx === words.length - 1);
                            
                            return (
                                <div key={`${sIdx}-${wIdx}`} className="overflow-hidden mr-[0.25em] mb-[0.1em]">
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={isInView ? { y: 0 } : { y: "100%" }}
                                        transition={{ delay: currentIdx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className={`inline-block ${seg.className || ""}`}
                                    >
                                        {word}
                                    </motion.div>
                                </div>
                            );
                        });
                    })}
                </div>
            );
        };

        const ScrollRevealText = ({ text, className }) => {
            const ref = useRef(null);
            const { scrollYProgress } = useScroll({
                target: ref,
                offset: ['start 0.8', 'end 0.2']
            });

            const chars = text.split("");

            return (
                <p ref={ref} className={`flex flex-wrap ${className}`}>
                    {chars.map((char, i) => {
                        const start = i / chars.length - 0.1;
                        const end = i / chars.length + 0.05;
                        const opacity = useTransform(scrollYProgress, [Math.max(0, start), Math.min(1, end)], [0.2, 1]);
                        return (
                            <motion.span key={i} style={{opacity}} className="whitespace-pre">
                                {char}
                            </motion.span>
                        );
                    })}
                </p>
            );
        };

        const FeatureCard = ({ delay, children, className }) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });
            
            return (
                <motion.div 
                    ref={ref} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} 
                    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} 
                    className={`rounded-3xl overflow-hidden relative flex flex-col ${className}`}
                >
                    {children}
                </motion.div>
            )
        };

        // --- SECTIONS ---

        const Hero = () => {
            return (
                <section className="h-screen p-4 md:p-6 w-full bg-black flex flex-col">
                    <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex-1 bg-[#101010]">
                        <video 
                            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" 
                            autoPlay loop muted playsInline 
                            className="absolute inset-0 w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

                        <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-10 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl">
                            {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map(link => (
                                <a 
                                    href="#" 
                                    key={link} 
                                    className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" 
                                    style={{color: 'rgba(225,224,204,0.8)'}} 
                                    onMouseEnter={e => e.currentTarget.style.color = '#E1E0CC'} 
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(225,224,204,0.8)'}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 z-10">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
                                <div className="md:col-span-8">
                                    <WordsPullUp 
                                        text="Prisma" 
                                        showAsterisk 
                                        className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-normal leading-[0.85] tracking-[-0.07em]" 
                                        style={{color: '#E1E0CC'}}
                                    />
                                </div>
                                <div className="md:col-span-4 flex flex-col items-start gap-5 md:gap-6 md:pb-4 lg:pb-6">
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-primary/70 text-xs sm:text-sm md:text-base font-light tracking-wide max-w-sm"
                                        style={{lineHeight: 1.2}}
                                    >
                                        Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
                                    </motion.p>
                                    
                                    <motion.button 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full py-1 pl-5 pr-1 transition-all duration-300 text-black font-normal text-sm sm:text-base"
                                    >
                                        Join the lab
                                        <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" className="text-primary text-lg sm:text-xl"></iconify-icon>
                                        </div>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        const About = () => {
            return (
                <section className="bg-black py-20 md:py-32 px-4 md:px-8 flex justify-center w-full">
                    <div className="bg-[#101010] rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-24 w-full max-w-6xl flex flex-col items-center text-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden">
                        
                        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase font-light opacity-80">
                            Visual arts
                        </span>
                        
                        <WordsPullUpMultiStyle
                            segments={[
                                { text: "I am Marcus Chen, ", className: "font-light text-primary" },
                                { text: "a self-taught director. ", className: "font-serif italic text-primary pr-2" },
                                { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-light text-primary" }
                            ]}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-[0.95] sm:leading-[0.9] tracking-tight"
                        />
                        
                        <div className="max-w-2xl mt-4 md:mt-8">
                            <ScrollRevealText 
                                text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals." 
                                className="text-[#DEDBC8] text-xs sm:text-sm md:text-base justify-center font-light leading-relaxed tracking-wide" 
                            />
                        </div>
                    </div>
                </section>
            );
        };

        const Features = () => {
            const checklists = {
                card2: ['Visual timeline mapping', 'Scene-by-scene notes', 'Asset organization'],
                card3: ['Automated structural analysis', 'Creative pacing notes', 'NLE tool integrations'],
                card4: ['Global notification silencing', 'Ambient soundscapes', 'Calendar schedule syncing']
            };

            return (
                <section className="min-h-screen bg-black relative py-20 md:py-32 px-4 md:px-6 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-[-1]" />
                    
                    <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16">
                        
                        <div className="w-full max-w-3xl">
                            <WordsPullUpMultiStyle
                                wrapperClass="justify-start text-left"
                                segments={[
                                    { text: "Studio-grade workflows for visionary creators. ", className: "text-primary block w-full" },
                                    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 block w-full" }
                                ]}
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
                            
                            {/* Card 1: Video */}
                            <FeatureCard delay={0.15} className="md:col-span-2 lg:col-span-1 h-[350px] sm:h-[400px] lg:h-full bg-[#151515]">
                                <video 
                                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4" 
                                    autoPlay loop muted playsInline 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <div className="mt-auto p-6 z-10 w-full">
                                    <p className="text-[#E1E0CC] font-light tracking-wide text-sm sm:text-base">Your creative canvas.</p>
                                </div>
                            </FeatureCard>

                            {/* Card 2 */}
                            <FeatureCard delay={0.30} className="bg-[#212121] p-6 sm:p-8 h-auto lg:h-full flex flex-col justify-between">
                                <div>
                                    <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" />
                                    <div className="flex justify-between items-baseline mb-8">
                                        <h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Project Storyboard.</h3>
                                        <span className="text-gray-500 text-xs font-light tracking-widest">01</span>
                                    </div>
                                    <ul className="flex flex-col gap-4">
                                        {checklists.card2.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light">
                                                <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5" className="text-primary mt-[2px] text-base flex-shrink-0 opacity-80"></iconify-icon>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">
                                    Learn more
                                    <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" className="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></iconify-icon>
                                </button>
                            </FeatureCard>

                            {/* Card 3 */}
                            <FeatureCard delay={0.45} className="bg-[#212121] p-6 sm:p-8 h-auto lg:h-full flex flex-col justify-between">
                                <div>
                                    <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" />
                                    <div className="flex justify-between items-baseline mb-8">
                                        <h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Smart Critiques.</h3>
                                        <span className="text-gray-500 text-xs font-light tracking-widest">02</span>
                                    </div>
                                    <ul className="flex flex-col gap-4">
                                        {checklists.card3.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light">
                                                <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5" className="text-primary mt-[2px] text-base flex-shrink-0 opacity-80"></iconify-icon>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">
                                    Learn more
                                    <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" className="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></iconify-icon>
                                </button>
                            </FeatureCard>

                            {/* Card 4 */}
                            <FeatureCard delay={0.60} className="bg-[#212121] p-6 sm:p-8 h-auto lg:h-full flex flex-col justify-between">
                                <div>
                                    <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" />
                                    <div className="flex justify-between items-baseline mb-8">
                                        <h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Immersion Capsule.</h3>
                                        <span className="text-gray-500 text-xs font-light tracking-widest">03</span>
                                    </div>
                                    <ul className="flex flex-col gap-4">
                                        {checklists.card4.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light">
                                                <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5" className="text-primary mt-[2px] text-base flex-shrink-0 opacity-80"></iconify-icon>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">
                                    Learn more
                                    <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5" className="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></iconify-icon>
                                </button>
                            </FeatureCard>

                        </div>
                    </div>
                </section>
            );
        };

        const App = () => {
            return (
                <main className="w-full bg-black min-h-screen font-sans selection:bg-primary selection:text-black">
                    <Hero />
                    <About />
                    <Features />
                </main>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="" id="root"><main className="w-full bg-black min-h-screen font-sans selection:bg-primary selection:text-black"><section className="h-screen p-4 md:p-6 w-full bg-black flex flex-col"><div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex-1 bg-[#101010]"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"></video><div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"></div><div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div><nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-10 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl"><a className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" href="#" style={{color: 'rgba(225, 224, 204, 0.8)'}}>Our story</a><a className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" href="#" style={{color: 'rgba(225, 224, 204, 0.8)'}}>Collective</a><a className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" href="#" style={{color: 'rgba(225, 224, 204, 0.8)'}}>Workshops</a><a className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" href="#" style={{color: 'rgba(225, 224, 204, 0.8)'}}>Programs</a><a className="text-[10px] sm:text-xs md:text-sm font-light tracking-wide transition-colors duration-300" href="#" style={{color: 'rgba(225, 224, 204, 0.8)'}}>Inquiries</a></nav><div className="md:p-10 lg:p-12 z-10 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0"><div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end"><div className="md:col-span-8"><div className="flex flex-wrap text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-normal leading-[0.85] tracking-[-0.07em]"><div className="overflow-hidden mr-[0.2em] relative flex items-start"><div className="inline-block relative">Prisma<span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-light">*</span></div></div></div></div><div className="md:col-span-4 flex flex-col items-start gap-5 md:gap-6 md:pb-4 lg:pb-6"><p className="text-primary/70 text-xs sm:text-sm md:text-base font-light tracking-wide max-w-sm" style={{lineHeight: '1.2'}}>Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.</p><button className="group flex items-center gap-2 hover:gap-3 bg-primary rounded-full py-1 pl-5 pr-1 transition-all duration-300 text-black font-normal text-sm sm:text-base">Join the lab<div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><iconify-icon classname="text-primary text-lg sm:text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></div></button></div></div></div></div></section><section className="bg-black py-20 md:py-32 px-4 md:px-8 flex justify-center w-full"><div className="bg-[#101010] rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-24 w-full max-w-6xl flex flex-col items-center text-center gap-8 md:gap-12 shadow-2xl relative overflow-hidden"><span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase font-light opacity-80">Visual arts</span><div className="inline-flex flex-wrap justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-[0.95] sm:leading-[0.9] tracking-tight"><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">I</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">am</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">Marcus</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">Chen,</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-serif italic text-primary pr-2">a</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-serif italic text-primary pr-2">self-taught</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-serif italic text-primary pr-2">director.</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">I</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">have</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">skills</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">in</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">color</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">grading,</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">visual</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">effects,</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">and</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">narrative</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block font-light text-primary">design.</div></div></div><div className="max-w-2xl mt-4 md:mt-8"><p className="flex flex-wrap text-[#DEDBC8] text-xs sm:text-sm md:text-base justify-center font-light leading-relaxed tracking-wide"><span className="whitespace-pre">O</span><span className="whitespace-pre">v</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre"> </span><span className="whitespace-pre">t</span><span className="whitespace-pre">h</span><span className="whitespace-pre">e</span><span className="whitespace-pre"> </span><span className="whitespace-pre">l</span><span className="whitespace-pre">a</span><span className="whitespace-pre">s</span><span className="whitespace-pre">t</span><span className="whitespace-pre"> </span><span className="whitespace-pre">s</span><span className="whitespace-pre">e</span><span className="whitespace-pre">v</span><span className="whitespace-pre">e</span><span className="whitespace-pre">n</span><span className="whitespace-pre"> </span><span className="whitespace-pre">y</span><span className="whitespace-pre">e</span><span className="whitespace-pre">a</span><span className="whitespace-pre">r</span><span className="whitespace-pre">s</span><span className="whitespace-pre">,</span><span className="whitespace-pre"> </span><span className="whitespace-pre">I</span><span className="whitespace-pre"> </span><span className="whitespace-pre">h</span><span className="whitespace-pre">a</span><span className="whitespace-pre">v</span><span className="whitespace-pre">e</span><span className="whitespace-pre"> </span><span className="whitespace-pre">w</span><span className="whitespace-pre">o</span><span className="whitespace-pre">r</span><span className="whitespace-pre">k</span><span className="whitespace-pre">e</span><span className="whitespace-pre">d</span><span className="whitespace-pre"> </span><span className="whitespace-pre">w</span><span className="whitespace-pre">i</span><span className="whitespace-pre">t</span><span className="whitespace-pre">h</span><span className="whitespace-pre"> </span><span className="whitespace-pre">P</span><span className="whitespace-pre">a</span><span className="whitespace-pre">r</span><span className="whitespace-pre">a</span><span className="whitespace-pre">l</span><span className="whitespace-pre">l</span><span className="whitespace-pre">a</span><span className="whitespace-pre">x</span><span className="whitespace-pre">,</span><span className="whitespace-pre"> </span><span className="whitespace-pre">a</span><span className="whitespace-pre"> </span><span className="whitespace-pre">B</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre">l</span><span className="whitespace-pre">i</span><span className="whitespace-pre">n</span><span className="whitespace-pre">-</span><span className="whitespace-pre">b</span><span className="whitespace-pre">a</span><span className="whitespace-pre">s</span><span className="whitespace-pre">e</span><span className="whitespace-pre">d</span><span className="whitespace-pre"> </span><span className="whitespace-pre">p</span><span className="whitespace-pre">r</span><span className="whitespace-pre">o</span><span className="whitespace-pre">d</span><span className="whitespace-pre">u</span><span className="whitespace-pre">c</span><span className="whitespace-pre">t</span><span className="whitespace-pre">i</span><span className="whitespace-pre">o</span><span className="whitespace-pre">n</span><span className="whitespace-pre"> </span><span className="whitespace-pre">h</span><span className="whitespace-pre">o</span><span className="whitespace-pre">u</span><span className="whitespace-pre">s</span><span className="whitespace-pre">e</span><span className="whitespace-pre"> </span><span className="whitespace-pre">t</span><span className="whitespace-pre">h</span><span className="whitespace-pre">a</span><span className="whitespace-pre">t</span><span className="whitespace-pre"> </span><span className="whitespace-pre">c</span><span className="whitespace-pre">r</span><span className="whitespace-pre">a</span><span className="whitespace-pre">f</span><span className="whitespace-pre">t</span><span className="whitespace-pre">s</span><span className="whitespace-pre"> </span><span className="whitespace-pre">c</span><span className="whitespace-pre">i</span><span className="whitespace-pre">n</span><span className="whitespace-pre">e</span><span className="whitespace-pre">m</span><span className="whitespace-pre">a</span><span className="whitespace-pre">,</span><span className="whitespace-pre"> </span><span className="whitespace-pre">s</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre">i</span><span className="whitespace-pre">e</span><span className="whitespace-pre">s</span><span className="whitespace-pre">,</span><span className="whitespace-pre"> </span><span className="whitespace-pre">a</span><span className="whitespace-pre">n</span><span className="whitespace-pre">d</span><span className="whitespace-pre"> </span><span className="whitespace-pre">N</span><span className="whitespace-pre">o</span><span className="whitespace-pre">i</span><span className="whitespace-pre">r</span><span className="whitespace-pre"> </span><span className="whitespace-pre">S</span><span className="whitespace-pre">t</span><span className="whitespace-pre">u</span><span className="whitespace-pre">d</span><span className="whitespace-pre">i</span><span className="whitespace-pre">o</span><span className="whitespace-pre"> </span><span className="whitespace-pre">i</span><span className="whitespace-pre">n</span><span className="whitespace-pre"> </span><span className="whitespace-pre">P</span><span className="whitespace-pre">a</span><span className="whitespace-pre">r</span><span className="whitespace-pre">i</span><span className="whitespace-pre">s</span><span className="whitespace-pre">.</span><span className="whitespace-pre"> </span><span className="whitespace-pre">T</span><span className="whitespace-pre">o</span><span className="whitespace-pre">g</span><span className="whitespace-pre">e</span><span className="whitespace-pre">t</span><span className="whitespace-pre">h</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre">,</span><span className="whitespace-pre"> </span><span className="whitespace-pre">w</span><span className="whitespace-pre">e</span><span className="whitespace-pre"> </span><span className="whitespace-pre">h</span><span className="whitespace-pre">a</span><span className="whitespace-pre">v</span><span className="whitespace-pre">e</span><span className="whitespace-pre"> </span><span className="whitespace-pre">c</span><span className="whitespace-pre">r</span><span className="whitespace-pre">e</span><span className="whitespace-pre">a</span><span className="whitespace-pre">t</span><span className="whitespace-pre">e</span><span className="whitespace-pre">d</span><span className="whitespace-pre"> </span><span className="whitespace-pre">w</span><span className="whitespace-pre">o</span><span className="whitespace-pre">r</span><span className="whitespace-pre">k</span><span className="whitespace-pre"> </span><span className="whitespace-pre">t</span><span className="whitespace-pre">h</span><span className="whitespace-pre">a</span><span className="whitespace-pre">t</span><span className="whitespace-pre"> </span><span className="whitespace-pre">h</span><span className="whitespace-pre">a</span><span className="whitespace-pre">s</span><span className="whitespace-pre"> </span><span className="whitespace-pre">e</span><span className="whitespace-pre">a</span><span className="whitespace-pre">r</span><span className="whitespace-pre">n</span><span className="whitespace-pre">e</span><span className="whitespace-pre">d</span><span className="whitespace-pre"> </span><span className="whitespace-pre">i</span><span className="whitespace-pre">n</span><span className="whitespace-pre">t</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre">n</span><span className="whitespace-pre">a</span><span className="whitespace-pre">t</span><span className="whitespace-pre">i</span><span className="whitespace-pre">o</span><span className="whitespace-pre">n</span><span className="whitespace-pre">a</span><span className="whitespace-pre">l</span><span className="whitespace-pre"> </span><span className="whitespace-pre">a</span><span className="whitespace-pre">c</span><span className="whitespace-pre">c</span><span className="whitespace-pre">l</span><span className="whitespace-pre">a</span><span className="whitespace-pre">i</span><span className="whitespace-pre">m</span><span className="whitespace-pre"> </span><span className="whitespace-pre">a</span><span className="whitespace-pre">t</span><span className="whitespace-pre"> </span><span className="whitespace-pre">s</span><span className="whitespace-pre">e</span><span className="whitespace-pre">v</span><span className="whitespace-pre">e</span><span className="whitespace-pre">r</span><span className="whitespace-pre">a</span><span className="whitespace-pre">l</span><span className="whitespace-pre"> </span><span className="whitespace-pre">m</span><span className="whitespace-pre">a</span><span className="whitespace-pre">j</span><span className="whitespace-pre">o</span><span className="whitespace-pre">r</span><span className="whitespace-pre"> </span><span className="whitespace-pre">f</span><span className="whitespace-pre">e</span><span className="whitespace-pre">s</span><span className="whitespace-pre">t</span><span className="whitespace-pre">i</span><span className="whitespace-pre">v</span><span className="whitespace-pre">a</span><span className="whitespace-pre">l</span><span className="whitespace-pre">s</span><span className="whitespace-pre">.</span></p></div></div></section><section className="min-h-screen md:py-32 md:px-6 overflow-hidden bg-black z-0 pt-20 pr-4 pb-20 pl-4 relative"><div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-[-1]"></div><div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-16"><div className="w-full max-w-3xl"><div className="inline-flex flex-wrap justify-start text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight"><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-primary block w-full">Studio-grade</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-primary block w-full">workflows</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-primary block w-full">for</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-primary block w-full">visionary</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-primary block w-full">creators.</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">Built</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">for</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">pure</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">vision.</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">Powered</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">by</div></div><div className="overflow-hidden mr-[0.25em] mb-[0.1em]"><div className="inline-block text-gray-500 block w-full">art.</div></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"><div className="rounded-3xl overflow-hidden relative flex flex-col md:col-span-2 lg:col-span-1 h-[350px] sm:h-[400px] lg:h-full bg-[#151515]"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" playsinline="" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"></video><div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><div className="mt-auto p-6 z-10 w-full"><p className="text-[#E1E0CC] font-light tracking-wide text-sm sm:text-base">Your creative canvas.</p></div></div><div className="overflow-hidden flex flex-col sm:p-8 lg:h-full bg-[#212121] h-auto rounded-3xl pt-6 pr-6 pb-6 pl-6 relative justify-between"><div><img alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" src="https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&amp;w=1280&amp;q=85"/><div className="flex justify-between items-baseline mb-8"><h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Project Storyboard.</h3><span className="text-gray-500 text-xs font-light tracking-widest">01</span></div><ul className="flex flex-col gap-4"><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Visual timeline mapping</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Scene-by-scene notes</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Asset organization</span></li></ul></div><button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">Learn more<iconify-icon classname="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button></div><div className="rounded-3xl overflow-hidden relative flex flex-col bg-[#212121] p-6 sm:p-8 h-auto lg:h-full justify-between"><div><img alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" src="https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&amp;w=1280&amp;q=85"/><div className="flex justify-between items-baseline mb-8"><h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Smart Critiques.</h3><span className="text-gray-500 text-xs font-light tracking-widest">02</span></div><ul className="flex flex-col gap-4"><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Automated structural analysis</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Creative pacing notes</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">NLE tool integrations</span></li></ul></div><button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">Learn more<iconify-icon classname="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button></div><div className="rounded-3xl overflow-hidden relative flex flex-col bg-[#212121] p-6 sm:p-8 h-auto lg:h-full justify-between"><div><img alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-6 object-cover opacity-90" src="https://images.higgs.ai/?default=1&amp;output=webp&amp;url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&amp;w=1280&amp;q=85"/><div className="flex justify-between items-baseline mb-8"><h3 className="text-primary text-base sm:text-lg font-normal tracking-tight">Immersion Capsule.</h3><span className="text-gray-500 text-xs font-light tracking-widest">03</span></div><ul className="flex flex-col gap-4"><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Global notification silencing</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Ambient soundscapes</span></li><li className="flex items-start gap-3 text-gray-400 text-xs sm:text-sm font-light"><iconify-icon classname="text-primary mt-[2px] text-base flex-shrink-0 opacity-80" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon><span className="leading-snug">Calendar schedule syncing</span></li></ul></div><button className="flex items-center gap-2 text-primary text-xs sm:text-sm font-normal mt-10 group w-fit hover:text-white transition-colors">Learn more<iconify-icon classname="text-base -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button></div></div></div></section></main></div>


    </>
  );
}
