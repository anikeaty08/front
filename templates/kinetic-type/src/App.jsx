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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          const splitText = (selector) => {
              document.querySelectorAll(selector).forEach(el => {
                  const text = el.innerText;
                  el.innerHTML = '';
                  text.split('').forEach(char => {
                      const span = document.createElement('span');
                      span.style.display = 'inline-block';
                      span.innerText = char === ' ' ? '\u00A0' : char;
                      if(el.closest('#lab-text-base')) span.className = 'char';
                      el.appendChild(span);
                  });
              });
          };
          splitText('#lab-text-base .word');
          splitText('#lab-text-wipe .word');

          gsap.registerPlugin(ScrollTrigger);
          let mm = gsap.matchMedia();

          mm.add("(prefers-reduced-motion: no-preference)", () => {
              const stripTl = gsap.timeline({ delay: 0.1 });
              stripTl.to(".strip", {
                  scaleX: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power3.inOut"
              })
              .to(".signal-sweep", {
                  x: "100%",
                  duration: 0.8,
                  ease: "power2.inOut"
              }, "-=0.2")
              .set(".strip-reveal", { display: "none" });

              gsap.from(".hero-reveal", { y: 40, opacity: 0, stagger: 0.1, duration: 1.2, ease: "power4.out", delay: 0.4 });

              gsap.utils.toArray(".section-reveal").forEach(section => {
                  const items = section.querySelectorAll(".reveal-item, .reveal-line, .spec-reveal, .spec-tile");
                  if (items.length > 0) {
                      gsap.from(items, {
                          scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
                          y: 24, opacity: 0, skewY: 6, stagger: 0.08, duration: 1, ease: "power3.out"
                      });
                  }
              });

              const scanLine = document.querySelector(".scan-line");
              if(scanLine) {
                  gsap.timeline({ scrollTrigger: { trigger: scanLine.parentElement, start: "top 60%", toggleActions: "play none none reverse" }})
                      .to(scanLine, { opacity: 1, duration: 0.2 })
                      .to(scanLine, { top: "100%", duration: 2, ease: "power2.inOut" })
                      .to(scanLine, { opacity: 0, duration: 0.2 });
              }

              gsap.to(".grid-container-reveal", {
                  scrollTrigger: { trigger: ".grid-container-reveal", start: "top 80%", toggleActions: "play none none reverse" },
                  backgroundColor: "rgba(255,255,255,0.03)", duration: 1.5, ease: "power2.out"
              });

              gsap.from(".map-container > *", {
                  scrollTrigger: { trigger: ".map-container", start: "top 80%", toggleActions: "play none none reverse" },
                  borderColor: "transparent", duration: 1.5, stagger: 0.1
              });

              const tl = gsap.timeline({
                  scrollTrigger: {
                      trigger: "#lab-section",
                      start: "top top",
                      end: () => "+=" + window.innerHeight * 4,
                      scrub: 1,
                      pin: "#lab-container",
                      anticipatePin: 1,
                      invalidateOnRefresh: true
                  }
              });

              tl.to("#phase-hud", { opacity: 1, duration: 0.2 })
                .from("#lab-text-base .char", { y: 120, opacity: 0, skewY: 15, stagger: 0.03, duration: 2, ease: "power3.out" })

                .to("#phase-a", { opacity: 0, duration: 0.1 }, "+=0.2")
                .to("#phase-b", { opacity: 1, duration: 0.1 }, "<")
                .to("#lab-text-base", { scale: 1.05, duration: 0.2, ease: "power2.inOut" })
                .to("#impact-flash", { opacity: 1, duration: 0.05 }, "<")
                .to("#lab-text-base", { x: 8, y: -8, duration: 0.05, yoyo: true, repeat: 3 }, "<")
                .to("#impact-flash", { opacity: 0, duration: 0.1 })
                .to("#lab-text-base", { scale: 1, duration: 0.3, ease: "power2.out" })

                .to("#phase-b", { opacity: 0, duration: 0.1 }, "+=0.2")
                .to("#phase-c", { opacity: 1, duration: 0.1 }, "<")
                .to(".speed-line", { scaleX: 1, stagger: 0.1, duration: 1.5, ease: "power4.inOut" }, "<")
                .to("#lab-text-wipe", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5, ease: "power3.inOut" }, "<")

                .to("#phase-c", { opacity: 0, duration: 0.1 }, "+=0.2")
                .to("#phase-d", { opacity: 1, duration: 0.1 }, "<")
                .to("#lab-frame", { opacity: 1, duration: 0.5 }, "<")
                .from(".kana-glyph", { opacity: 0, scale: 2, stagger: 0.1, duration: 1, ease: "back.out(1.5)" }, "<");
          });

          mm.add("(prefers-reduced-motion: reduce)", () => {
              gsap.set(".strip", { scaleX: 0 });
              gsap.set(".strip-reveal", { display: "none" });
              gsap.set(".signal-sweep", { display: "none" });

              gsap.set("#lab-text-wipe", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
              gsap.set("#lab-frame", { opacity: 1 });
              gsap.set(".kana-glyph", { opacity: 1 });
              gsap.set(".speed-line", { scaleX: 1 });
              gsap.set(".hero-reveal, .reveal-item, .reveal-line, .spec-reveal, .spec-tile", { opacity: 1, y: 0, skewY: 0 });
          });
      });
    
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none flex flex-col items-center justify-center">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '12rem 12rem'}}></div>
<div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, transparent 10%, #050505 100%)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-[#050505]/70 transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="tracking-widest text-xl text-white select-none" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
          KINETIC
        </div>
<div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<a className="text-white/60 hover:text-[#06b6d4] transition-colors" href="#lab-section">
            Lab
          </a>
<a className="text-white/60 hover:text-[#06b6d4] transition-colors" href="#specs-section">
            Specs
          </a>
<a className="text-white/60 hover:text-[#06b6d4] transition-colors" href="#">
            Docs
          </a>
</div>
<a className="bg-[#06b6d4] text-[#050505] px-6 py-2.5 text-xs font-medium tracking-widest hover:bg-white transition-colors uppercase rounded-none" href="#" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Download
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden border-b border-white/10">

<div className="absolute inset-0 pointer-events-none opacity-20 flex flex-col justify-between py-32 z-0 overflow-hidden">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{transform: 'translateX(-20%)'}}></div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{transform: 'translateX(10%)'}}></div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{transform: 'translateX(-10%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<div className="flex flex-col gap-8 md:gap-10">
<div className="hero-reveal flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase border border-white/10 p-2.5 w-max bg-[#050505]/50 backdrop-blur-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="flex items-center gap-2">
<div className="w-2 h-2 bg-[#bef264] shadow-[0_0_8px_rgba(190,242,100,0.4)]"></div>
              Available
            </span>
<span className="text-white/20">/</span>
<span className="text-white/60">Free Template</span>
<span className="text-white/20">/</span>
<span className="text-[#06b6d4]">GSAP 3</span>
</div>
<div className="relative w-max mt-4">
<div className="hero-reveal absolute -top-6 -left-4 md:-top-10 md:-left-8 z-20 text-[#050505] text-xs tracking-widest px-3 py-1.5 bg-[#bef264] border border-[#bef264] shadow-sm select-none" style={{fontFamily: '\'JetBrains Mono\', monospace', transform: 'rotate(-6deg)'}}>
              EP.01 / TITLE_CARD_SYSTEM
            </div>
<div className="relative">
<div className="absolute inset-0 z-0 flex flex-col pointer-events-none select-none" style={{transform: 'translate(6px, 6px)'}}>
<div className="overflow-hidden">
<h1 className="hero-reveal text-6xl md:text-7xl lg:text-[8rem] xl:text-[9rem] tracking-tight uppercase leading-[0.85]" style={{fontFamily: '\'Bebas Neue\', sans-serif', WebkitTextStroke: '1.5px #06b6d4', color: 'transparent'}}>
                    Opening
                  </h1>
</div>
<div className="overflow-hidden pl-0 md:pl-12 lg:pl-16">
<h1 className="hero-reveal text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-tight uppercase leading-[0.85]" style={{fontFamily: '\'Bebas Neue\', sans-serif', WebkitTextStroke: '1.5px #06b6d4', color: 'transparent'}}>
                    Sequence
                  </h1>
</div>
</div>
<div className="relative z-10 flex flex-col">
<div className="overflow-hidden">
<h1 className="hero-reveal text-6xl md:text-7xl lg:text-[8rem] xl:text-[9rem] tracking-tight uppercase text-white leading-[0.85]" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                    Opening
                  </h1>
</div>
<div className="overflow-hidden pl-0 md:pl-12 lg:pl-16">
<h1 className="hero-reveal text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem] tracking-tight uppercase text-white leading-[0.85]" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                    Sequence
                  </h1>
</div>
</div>
</div>
</div>
<div className="hero-reveal max-w-md text-sm text-white/50 leading-relaxed" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
            A purely front-end title sequence system. Scrubbable timelines,
            frame-perfect slice wipes, and absolute architectural control.
          </div>
<div className="hero-reveal flex flex-wrap gap-4 mt-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<a className="bg-white text-[#050505] px-8 py-4 text-xs font-medium tracking-widest hover:bg-[#06b6d4] transition-colors uppercase rounded-none flex items-center gap-2" href="#">
              Download
              <iconify-icon className="text-base" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border border-white/20 bg-transparent text-white px-8 py-4 text-xs font-medium tracking-widest hover:border-white transition-colors uppercase rounded-none flex items-center gap-2" href="#lab-section">
              Watch Demo
              <iconify-icon className="text-base" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="hero-image-panel relative w-full max-w-[560px] aspect-[4/5] mx-auto md:ml-auto border border-white/10 bg-[#050505] overflow-hidden group">
<img alt="Hero Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d528f48-3680-4076-89a4-0befe9712f9d_1600w.jpg"/>
<div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(5,5,5,0.9)] pointer-events-none z-10"></div>
<div className="absolute inset-4 border border-white/5 pointer-events-none z-10"></div>
<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#06b6d4] z-10"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#06b6d4] z-10"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#06b6d4] z-10"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#06b6d4] z-10"></div>
<div className="absolute top-6 right-6 z-10 text-right flex flex-col gap-1 text-[10px] tracking-widest text-[#06b6d4] uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>SYS.ON</span>
<span className="text-white/40">V.1.0.4</span>
</div>
<div className="signal-sweep absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-[-20deg] z-10 pointer-events-none"></div>
<div className="strip-reveal absolute inset-0 flex flex-col z-20 pointer-events-none">
<div className="strip flex-1 bg-[#050505] border-b border-white/5" style={{transformOrigin: 'left'}}></div>
<div className="strip flex-1 bg-[#050505] border-b border-white/5" style={{transformOrigin: 'right'}}></div>
<div className="strip flex-1 bg-[#050505] border-b border-white/5" style={{transformOrigin: 'left'}}></div>
<div className="strip flex-1 bg-[#050505] border-b border-white/5" style={{transformOrigin: 'right'}}></div>
<div className="strip flex-1 bg-[#050505]" style={{transformOrigin: 'left'}}></div>
</div>
</div>
</div>

<div className="absolute top-24 left-6 w-4 h-4 border-t border-l border-white/30 pointer-events-none"></div>
<div className="absolute top-24 right-6 w-4 h-4 border-t border-r border-white/30 pointer-events-none"></div>
<div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/30 pointer-events-none"></div>
<div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/30 pointer-events-none"></div>
</section>

<section className="py-24 md:py-32 border-b border-white/10 relative bg-[#050505] section-reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="border border-white/10 p-8 md:p-20 relative overflow-hidden bg-white/[0.01]">

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 -translate-x-px -translate-y-px pointer-events-none"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 translate-x-px -translate-y-px pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 -translate-x-px translate-y-px pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 translate-x-px translate-y-px pointer-events-none"></div>
<div className="reveal-item text-[#06b6d4] text-xs tracking-widest mb-10 uppercase flex items-center gap-3" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="w-1.5 h-1.5 bg-[#06b6d4]"></div>
            Transmission
          </div>
<div className="text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tight text-white mb-8 flex flex-wrap items-center gap-x-4 md:gap-x-6 leading-none" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
<div className="overflow-hidden">
<span className="reveal-line block">Type</span>
</div>
<div className="overflow-hidden">
<span className="reveal-line block" style={{WebkitTextStroke: '1.5px #06b6d4', color: 'transparent'}}>
                Is The
              </span>
</div>
<div className="overflow-hidden px-2 py-4 -my-4">
<span className="reveal-line inline-block bg-[#bef264] text-[#050505] px-4 md:px-6 py-1 md:py-2 -rotate-6 transform origin-left shadow-lg">
                Scene.
              </span>
</div>
</div>
<div className="overflow-hidden">
<p className="reveal-line text-white/60 text-sm md:text-base max-w-xl leading-relaxed mt-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              Scroll becomes the edit. The title card becomes a system.
            </p>
</div>
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#06b6d4]/50 shadow-[0_0_10px_#06b6d4] scan-line opacity-0 pointer-events-none z-10"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/10 relative bg-[#050505] section-reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/10 rounded-none bg-white/0 grid-container-reveal">

<div className="reveal-item bg-[#050505] aspect-square p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group cursor-default lift-card relative z-10">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              [01]
            </div>
<div>
<h3 className="text-4xl tracking-tight uppercase mb-3 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Assembly
              </h3>
<p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Architectural Stagger
              </p>
</div>
<div className="sweep-container"><div className="sweep"></div></div>
<div className="corner-tick corner-tl"></div>
<div className="corner-tick corner-tr"></div>
<div className="corner-tick corner-bl"></div>
<div className="corner-tick corner-br"></div>
</div>

<div className="reveal-item bg-[#050505] aspect-square p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group cursor-default lift-card relative z-10">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              [02]
            </div>
<div>
<h3 className="text-4xl tracking-tight uppercase mb-3 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Impact
              </h3>
<p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Kinetic Flash Framing
              </p>
</div>
<div className="sweep-container"><div className="sweep"></div></div>
<div className="corner-tick corner-tl"></div>
<div className="corner-tick corner-tr"></div>
<div className="corner-tick corner-bl"></div>
<div className="corner-tick corner-br"></div>
</div>

<div className="reveal-item bg-[#050505] aspect-square p-8 md:p-12 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group cursor-default lift-card relative z-10">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              [03]
            </div>
<div>
<h3 className="text-4xl tracking-tight uppercase mb-3 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Slice
              </h3>
<p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Path Geometry Wipes
              </p>
</div>
<div className="sweep-container"><div className="sweep"></div></div>
<div className="corner-tick corner-tl"></div>
<div className="corner-tick corner-tr"></div>
<div className="corner-tick corner-bl"></div>
<div className="corner-tick corner-br"></div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10 relative bg-[#050505] section-reveal">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 border-x border-white/10 rounded-none map-container">

<div className="reveal-item flex-1 p-6 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors cursor-default group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left z-20"></div>
<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-right z-20"></div>
<span className="text-xs text-white/30 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Phase A
          </span>
<span className="text-base text-white uppercase tracking-widest flex items-center justify-between font-medium" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
            Rise
            <span className="text-[#bef264] text-xs">上昇</span>
</span>
</div>

<div className="reveal-item flex-1 p-6 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors cursor-default group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left z-20"></div>
<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-right z-20"></div>
<span className="text-xs text-white/30 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Phase B
          </span>
<span className="text-base text-white uppercase tracking-widest flex items-center justify-between font-medium" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
            Impact
            <span className="text-[#bef264] text-xs">衝撃</span>
</span>
</div>

<div className="reveal-item flex-1 p-6 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors cursor-default group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left z-20"></div>
<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-right z-20"></div>
<span className="text-xs text-white/30 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Phase C
          </span>
<span className="text-base text-white uppercase tracking-widest flex items-center justify-between font-medium" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
            Slice
            <span className="text-[#bef264] text-xs">切断</span>
</span>
</div>

<div className="reveal-item flex-1 p-6 md:p-8 flex flex-col gap-4 hover:bg-white/[0.02] transition-colors cursor-default group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left z-20"></div>
<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-right z-20"></div>
<span className="text-xs text-white/30 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Phase D
          </span>
<span className="text-base text-white uppercase tracking-widest flex items-center justify-between font-medium" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
            Lock
            <span className="text-[#bef264] text-xs">完了</span>
</span>
</div>

<a className="reveal-item flex-1 p-6 md:p-8 flex flex-col items-center justify-center gap-2 bg-[#06b6d4] text-[#050505] hover:bg-white transition-colors text-xs tracking-widest uppercase font-medium rounded-none" href="#lab-section" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Enter Lab
          <iconify-icon className="text-lg mt-1" icon="solar:arrow-down-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</section>

<section className="relative bg-[#050505]" id="lab-section">

<div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/10 relative" id="lab-container">

<div className="absolute inset-0 pointer-events-none z-0" id="lab-bg"></div>

<div className="absolute inset-0 z-0 flex flex-col justify-around py-20 pointer-events-none opacity-40 mix-blend-screen">
<div className="speed-line h-px w-full bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent" style={{transformOrigin: 'left', transform: 'scaleX(0)'}}></div>
<div className="speed-line h-px w-full bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent" style={{transformOrigin: 'right', transform: 'scaleX(0)'}}></div>
<div className="speed-line h-px w-full bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent" style={{transformOrigin: 'left', transform: 'scaleX(0)'}}></div>
<div className="speed-line h-px w-full bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent" style={{transformOrigin: 'right', transform: 'scaleX(0)'}}></div>
</div>

<div className="absolute inset-8 md:inset-16 border border-white/10 opacity-0 pointer-events-none z-10 p-6 flex flex-col justify-between" id="lab-frame" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex justify-between w-full">
<span className="kana-glyph text-[#bef264] text-xs tracking-widest">
              システム
            </span>
<span className="kana-glyph text-[#bef264] text-xs tracking-widest">
              起動
            </span>
</div>
<div className="flex justify-between w-full">
<span className="kana-glyph text-white/40 text-xs tracking-widest">
              /// 01
            </span>
<span className="kana-glyph text-white/40 text-xs tracking-widest">
              READY
            </span>
</div>

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#bef264] -translate-x-[1px] -translate-y-[1px]"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#bef264] translate-x-[1px] -translate-y-[1px]"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#bef264] -translate-x-[1px] translate-y-[1px]"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#bef264] translate-x-[1px] translate-y-[1px]"></div>
</div>

<div className="relative z-20 text-center uppercase tracking-tight w-full flex justify-center" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>

<div className="text-6xl md:text-8xl lg:text-[12rem] leading-[0.8] text-white flex flex-wrap justify-center gap-x-6 md:gap-x-10 w-full px-4" id="lab-text-base">
<div className="word overflow-hidden flex pb-2">KINETIC</div>
<div className="word overflow-hidden flex pb-2">TYPE</div>
</div>

<div className="absolute inset-0 text-6xl md:text-8xl lg:text-[12rem] leading-[0.8] text-[#06b6d4] flex flex-wrap justify-center gap-x-6 md:gap-x-10 w-full px-4 pointer-events-none" id="lab-text-wipe" style={{clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'}}>
<div className="word flex pb-2">KINETIC</div>
<div className="word flex pb-2">TYPE</div>
</div>
</div>

<div className="absolute bottom-10 flex flex-col items-center gap-2 text-xs text-white/30 tracking-widest uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="animate-pulse">Scroll to scrub</span>
<iconify-icon className="text-lg" icon="solar:arrow-down-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-white opacity-0 pointer-events-none z-30 mix-blend-overlay" id="impact-flash"></div>
<div className="absolute top-32 left-6 md:left-12 z-30 text-[#06b6d4] text-xs tracking-widest uppercase flex flex-col gap-1 opacity-0 pointer-events-none" id="phase-hud" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-white/40">STATUS</span>
<div className="relative w-32 h-4">
<span className="absolute inset-0 opacity-100" id="phase-a">
              A // ASSEMBLY
            </span>
<span className="absolute inset-0 opacity-0" id="phase-b">
              B // IMPACT
            </span>
<span className="absolute inset-0 opacity-0" id="phase-c">
              C // SLICE
            </span>
<span className="absolute inset-0 opacity-0" id="phase-d">
              D // LOCK
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-white/10 relative bg-[#050505] section-reveal" id="specs-section">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="overflow-hidden">
<h2 className="spec-reveal text-5xl md:text-6xl uppercase tracking-tight text-white leading-none" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
              System Specs
            </h2>
</div>
<p className="spec-reveal text-white/50 text-sm max-w-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            Engineered for high-performance DOM manipulation and seamless visual
            integration.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-none relative">

<div className="spec-tile bg-[#050505] p-10 flex flex-col gap-8 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center justify-between">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                [01]
              </div>
<iconify-icon className="text-2xl text-white/20 group-hover:text-white/60 transition-colors" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-3xl tracking-tight uppercase mb-4 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Zero Dependencies
              </h3>
<p className="text-sm text-white/50 leading-relaxed font-medium">
                Built purely on native web APIs and GSAP core. No heavy React
                layers, no external canvas libraries required.
              </p>
</div>
</div>

<div className="spec-tile bg-[#050505] p-10 flex flex-col gap-8 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center justify-between">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                [02]
              </div>
<iconify-icon className="text-2xl text-white/20 group-hover:text-white/60 transition-colors" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-3xl tracking-tight uppercase mb-4 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Reverse-Scroll Clean
              </h3>
<p className="text-sm text-white/50 leading-relaxed font-medium">
                Fully scrubbable timelines mean flawless forward and backward
                playback without layout shifts.
              </p>
</div>
</div>

<div className="spec-tile bg-[#050505] p-10 flex flex-col gap-8 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center justify-between">
<div className="text-[#06b6d4] text-xs tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                [03]
              </div>
<iconify-icon className="text-2xl text-white/20 group-hover:text-white/60 transition-colors" icon="solar:slider-minimalistic-horizontal-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-3xl tracking-tight uppercase mb-4 text-white" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
                Premium Easing
              </h3>
<p className="text-sm text-white/50 leading-relaxed font-medium">
                Custom cubic-bezier curves and precise staggered logic deliver
                that signature editorial punch.
              </p>
</div>
</div>
<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 -translate-x-px -translate-y-px pointer-events-none"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 translate-x-px -translate-y-px pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 -translate-x-px translate-y-px pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 translate-x-px translate-y-px pointer-events-none"></div>
</div>
</div>
</section>

<footer className="py-32 text-center flex flex-col items-center justify-center gap-10 relative overflow-hidden bg-[#050505] section-reveal">
<div className="relative z-10 flex flex-col items-center">
<h2 className="reveal-item text-6xl md:text-8xl uppercase tracking-tight text-white mb-8" style={{fontFamily: '\'Bebas Neue\', sans-serif'}}>
          Initiate Sequence
        </h2>
<a className="reveal-item bg-[#06b6d4] text-[#050505] px-10 py-5 text-xs font-medium tracking-widest hover:bg-white transition-colors uppercase rounded-none flex items-center gap-3" href="#" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Deploy System
          <iconify-icon className="text-base" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="reveal-item text-xs text-white/30 tracking-widest uppercase mt-8 z-10 flex flex-col gap-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>Copy/paste ready. Single file.</span>
<span>© Kinetic Lab Systems</span>
</div>
</footer>



    </>
  );
}
