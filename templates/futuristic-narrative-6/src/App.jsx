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



tailwind.config = {
theme: {
extend: {
colors: {
'void': '#050505',
'signal': '#CCFF00',
'concrete': '#1a1a1a',
},
fontFamily: {
'display': ['"Space Grotesk"', 'sans-serif'],
'mono': ['"JetBrains Mono"', 'monospace'],
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
}
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
          // --- LOADING SEQUENCE ---
          const loader = document.getElementById('loader');
          const body = document.body;

          // Remove loader after brief delay
          setTimeout(() => {
              loader.style.transform = 'translateY(-100%)';
              body.classList.remove('loading');

              // Trigger reveal animations after loader moves
              setTimeout(() => {
                  document.querySelectorAll('.reveal-inner').forEach((el, index) => {
                      // Staggered initial reveal
                      setTimeout(() => {
                          el.style.transform = 'translateY(0)';
                      }, index * 100);
                  });
              }, 500);
          }, 1000);

          // --- CUSTOM CURSOR ---
          const cursorDot = document.querySelector('.cursor-dot');
          const cursorRing = document.querySelector('.cursor-ring');

          if (window.matchMedia("(pointer: fine)").matches) {
              let mouseX = 0;
              let mouseY = 0;
              let ringX = 0;
              let ringY = 0;

              window.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;

                  // Dot follows instantly
                  cursorDot.style.left = `${mouseX}px`;
                  cursorDot.style.top = `${mouseY}px`;
              });

              // Smooth ring animation loop
              const animateRing = () => {
                  ringX += (mouseX - ringX) * 0.15;
                  ringY += (mouseY - ringY) * 0.15;

                  cursorRing.style.left = `${ringX}px`;
                  cursorRing.style.top = `${ringY}px`;

                  requestAnimationFrame(animateRing);
              }
              animateRing();

              // Interactive Elements
              const interactives = document.querySelectorAll('a, button, .btn-magnetic');
              interactives.forEach(el => {
                  el.addEventListener('mouseenter', () => {
                      cursorRing.style.width = '60px';
                      cursorRing.style.height = '60px';
                      cursorRing.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      cursorRing.style.border = 'none';
                      cursorRing.style.mixBlendMode = 'difference';
                  });

                  el.addEventListener('mouseleave', () => {
                      cursorRing.style.width = '32px';
                      cursorRing.style.height = '32px';
                      cursorRing.style.backgroundColor = 'transparent';
                      cursorRing.style.border = '1px solid rgba(255,255,255,0.2)';
                      cursorRing.style.mixBlendMode = 'normal';
                  });
              });
          }

          // --- MAGNETIC BUTTONS ---
          const magnetics = document.querySelectorAll('.btn-magnetic');
          magnetics.forEach(btn => {
              btn.addEventListener('mousemove', (e) => {
                  const rect = btn.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;

                  btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
              });

              btn.addEventListener('mouseleave', () => {
                  btn.style.transform = 'translate(0px, 0px)';
              });
          });

          // --- GSAP SCROLL ANIMATIONS ---
          if (typeof gsap !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);

              // Work Section Parallax
              gsap.utils.toArray('.glass-panel').forEach(panel => {
                  gsap.from(panel, {
                      scrollTrigger: {
                          trigger: panel,
                          start: "top bottom-=100",
                          toggleActions: "play none none reverse"
                      },
                      y: 50,
                      opacity: 0,
                      duration: 0.8,
                      ease: "power3.out"
                  });
              });

              // Arsenal Cards Stagger
              gsap.from("#arsenal .group", {
                  scrollTrigger: {
                      trigger: "#arsenal",
                      start: "top center",
                  },
                  y: 100,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power4.out"
              });

              // Hero Image Parallax
              gsap.to("#hero-img", {
                  scrollTrigger: {
                      trigger: "body",
                      start: "top top",
                      end: "bottom top",
                      scrub: true
                  },
                  y: 200,
                  scale: 1,
              });
          }
      });
    


      // TILT EFFECT SCRIPT
      document.addEventListener('mousemove', (e) => {
          const cards = document.querySelectorAll('.tilt-target');
          cards.forEach(card => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // Only animate if mouse is near/over
              if (x > -100 && x < rect.width + 100 && y > -100 && y < rect.height + 100) {
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * -5; // Max -5deg
                  const rotateY = ((x - centerX) / centerX) * 5; // Max 5deg

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              } else {
                  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
              }
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
      

<div className="loader-curtain" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-1 bg-signal animate-pulse"></div>
<div className="font-mono text-xs text-signal tracking-[0.3em] uppercase">
          Initializing Weaponry
        </div>
</div>
</div>

<div className="noise-overlay"></div>
<div className="scanlines"></div>
<div className="cursor-dot hidden md:block"></div>
<div className="cursor-ring hidden md:block rounded-full"></div>

<nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-display text-sm group-hover:bg-signal group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          CL
        </div>
<span className="font-mono text-xs tracking-widest uppercase hidden md:block group-hover:tracking-[0.2em] transition-all duration-300">
          Cohort Labs
        </span>
</a>
<div className="hidden md:flex items-center gap-12 bg-white/5 backdrop-blur-sm px-8 py-2 border border-white/10 rounded-full">
<a className="nav-link font-mono text-[10px] uppercase tracking-widest hover:text-signal transition-colors flex items-center gap-1" href="#work">
<span className="w-1 h-1 bg-signal rounded-full opacity-0 group-hover:opacity-100"></span>
          Operations
        </a>
<a className="nav-link font-mono text-[10px] uppercase tracking-widest hover:text-signal transition-colors" href="#arsenal">
          Capabilities
        </a>
<a className="nav-link font-mono text-[10px] uppercase tracking-widest hover:text-signal transition-colors" href="#protocol">
          Intel
        </a>
</div>
<a className="btn-magnetic group relative overflow-hidden bg-white text-black px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-colors duration-300" href="#contact">
<span className="relative z-10 flex items-center gap-2">
          Deploy
          <iconify-icon className="text-xs" icon="lucide:arrow-up-right"></iconify-icon>
</span>
</a>
</nav>
<main>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">

<div className="absolute inset-0 z-0">

<img alt="Urban Velocity" className="w-full h-full object-cover scale-110 opacity-60" id="hero-img" src="https://i.ibb.co/WWhbDQRw/ezgif-frame-001-2.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 to-transparent"></div>
</div>

<div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 hidden md:flex flex-col gap-8 z-10 opacity-50 mix-blend-screen">
<div className="writing-vertical-lr rotate-180 font-mono text-[9px] tracking-[0.2em] border-l border-white/20 pl-4 h-32 flex items-center">
            SYS.V.4.0 // ONLINE
          </div>
<div className="w-px h-12 bg-gradient-to-b from-signal to-transparent"></div>
</div>
<div className="absolute bottom-12 right-6 md:right-12 z-20 text-right">
<div className="glass-panel px-6 py-4 rounded-sm border-l-2 border-signal/80 backdrop-blur-xl bg-black/40 tilt-target transform-style-3d hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border-white/5">
<div className="flex items-center justify-end gap-2 mb-1">
<span className="block w-1.5 h-1.5 bg-signal rounded-full animate-pulse shadow-[0_0_10px_#CCFF00]"></span>
<span className="font-mono text-[9px] text-signal uppercase tracking-widest">
                Aggregate Value
              </span>
</div>
<div className="font-display text-5xl font-semibold text-white tracking-tighter tabular-nums">
              $8.4B+
            </div>
<div className="flex justify-end gap-4 mt-2">
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Locked
              </div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Verified
              </div>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-20">
<div className="mb-8 flex flex-col items-center gap-4 reveal-text">
<div className="reveal-inner inline-flex items-center gap-3 px-4 py-1.5 border border-signal/20 bg-signal/5 backdrop-blur-md rounded-full">
<div className="w-1.5 h-1.5 bg-signal animate-pulse shadow-[0_0_8px_#CCFF00]"></div>
<span className="font-mono text-[10px] text-signal tracking-[0.2em] uppercase font-bold">
                System Status: Sovereignty
              </span>
</div>
</div>
<h1 className="relative z-20 flex flex-col items-center font-display font-semibold text-[13vw] leading-[0.8] tracking-[-0.06em] text-white uppercase mix-blend-normal select-none pointer-events-none perspective-1000">
<div className="reveal-text">
<span className="block reveal-inner delay-100 tilt-target" data-tilt-amount="10">
                Narrative
              </span>
</div>
<div className="reveal-text">
<span className="block reveal-inner delay-200 text-transparent text-stroke md:text-stroke-2 opacity-80 tilt-target" data-tilt-amount="20">
                Dominance
              </span>
</div>
</h1>
<div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-white/10 pt-8 reveal-text">
<div className="reveal-inner delay-300 max-w-xl">
<p className="font-mono text-sm md:text-[15px] text-zinc-400 leading-relaxed max-w-xl text-center md:text-left">
<span className="text-white font-semibold">
                  We don't do marketing.
                </span>
                We engineer cults.
                
                We weaponize attention to turn abstract protocols into
                <span className="text-signal/80 border-b border-signal/20 pb-0.5">
                  inevitable religions
                </span>
                .
              </p>
</div>
<div className="reveal-inner delay-500 mt-8 md:mt-0">
<a className="btn-magnetic group relative inline-flex items-center justify-center px-10 py-5 bg-signal overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.3)]" href="#contact">
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.86,0,0.07,1)]"></div>
<span className="relative z-10 font-mono text-xs font-bold text-black uppercase tracking-[0.25em] flex items-center gap-3">
                  Initialize_Sequence
                  <iconify-icon className="text-sm group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</section>

<div className="py-8 bg-signal overflow-hidden border-y border-black">
<div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
<span className="text-4xl font-display font-bold text-black tracking-tighter uppercase">
            Narrative Hegemony
          </span>
<iconify-icon className="text-2xl text-black" icon="lucide:asterisk"></iconify-icon>
<span className="text-4xl font-display font-bold text-black tracking-tighter uppercase">
            Consensus Engineered
          </span>
<iconify-icon className="text-2xl text-black" icon="lucide:asterisk"></iconify-icon>
<span className="text-4xl font-display font-bold text-black tracking-tighter uppercase">
            Zero Friction
          </span>
<iconify-icon className="text-2xl text-black" icon="lucide:asterisk"></iconify-icon>
<span className="text-4xl font-display font-bold text-black tracking-tighter uppercase">
            Narrative Hegemony
          </span>
<iconify-icon className="text-2xl text-black" icon="lucide:asterisk"></iconify-icon>
<span className="text-4xl font-display font-bold text-black tracking-tighter uppercase">
            Consensus Engineered
          </span>
<iconify-icon className="text-2xl text-black" icon="lucide:asterisk"></iconify-icon>
</div>
</div>

<section className="relative py-32 px-6 md:px-12 bg-void" id="work">
<div className="max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-6 border-b border-white/10">
<h2 className="text-7xl md:text-9xl font-display font-semibold text-white tracking-[-0.04em] mb-4 md:mb-0">
              OP
              <span className="text-zinc-800">_LOGS</span>
</h2>
<div className="font-mono text-xs text-zinc-500 uppercase tracking-widest text-right">
<div>Clearance: Top Secret</div>
<div>Status: Decrypted</div>
</div>
</div>

<div className="sticky top-24 mb-24 glass-panel group transition-all duration-500 hover:border-signal/50">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[60vh] lg:h-auto overflow-hidden glitch-wrapper border-b lg:border-b-0 lg:border-r border-white/10">
<img alt="Cybersecurity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
<div className="absolute top-6 left-6 px-3 py-1 bg-black/80 backdrop-blur text-white font-mono text-[10px] uppercase tracking-widest border border-white/20">
                  Case: 01 // Vortex
                </div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-signal rounded-full shadow-[0_0_10px_#CCFF00]"></span>
<span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      Mission Complete
                    </span>
</div>
<h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-none uppercase">
                    Cult Status
                    
                    <span className="text-zinc-600">Generated</span>
</h3>
<p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
                    We didn't launch a token. We launched a moral imperative.
                    Weaponized tribalism for a generic L2 infrastructure,
                    turning a technical upgrade into a social movement.
                  </p>
</div>
<div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/10">
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
                      $300M
                    </div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                      TVL Generated
                    </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-signal tracking-tighter">
                      48h
                    </div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                      Execution Time
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-28 mb-12 glass-panel group transition-all duration-500 hover:border-signal/50">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[60vh] lg:h-auto overflow-hidden glitch-wrapper border-b lg:border-b-0 lg:border-r border-white/10">
<img alt="Data Core" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
<div className="absolute top-6 left-6 px-3 py-1 bg-black/80 backdrop-blur text-white font-mono text-[10px] uppercase tracking-widest border border-white/20">
                  Case: 02 // Nexus
                </div>
</div>
<div className="p-8 md:p-16 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-2 h-2 bg-signal rounded-full shadow-[0_0_10px_#CCFF00]"></span>
<span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      Mission Complete
                    </span>
</div>
<h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-none uppercase">
                    Memetic
                    <br/>
<span className="text-zinc-600">Velocity</span>
</h3>
<p className="text-zinc-400 font-mono text-sm leading-relaxed max-w-md">
                    Engineered hysteria. 150x oversubscription via pure
                    narrative injection. We bypassed the logic filters and spoke
                    directly to the greed centers.
                  </p>
</div>
<div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/10">
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">
                      150x
                    </div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                      Oversubscription
                    </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-signal tracking-tighter">
                      $0
                    </div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                      Ad Spend
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808] overflow-hidden" id="arsenal">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
<div className="mb-24">
<h2 className="text-6xl md:text-[8vw] font-display font-semibold text-white tracking-[-0.04em] leading-[0.8] mb-6">
              CAPABILITIES
            </h2>
<p className="font-mono text-zinc-500 max-w-xl">
              Strategies deployed for maximum lethality. We don't guess. We
              execute.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">

<div className="group relative bg-[#080808] p-10 border border-white/5 hover:border-signal/40 transition-all duration-500 hover:bg-[#0a0a0a] overflow-hidden tilt-target">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10 tilt-inner">
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-[9px] text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-black">
                    [ 01 ]
                  </div>
<iconify-icon className="text-3xl text-zinc-700 group-hover:text-signal transition-colors duration-300" icon="lucide:brain-circuit"></iconify-icon>
</div>
<h3 className="text-3xl font-display font-semibold text-white mb-4 tracking-tight group-hover:text-signal transition-colors">
                  Memetic
                  <br/>
                  Warfare
                </h3>
<p className="text-sm font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  We design mental viruses. Concepts that bypass logic filters,
                  infect the host, and propagate autonomously.
                </p>
<div className="w-full h-px bg-zinc-900 group-hover:bg-signal/30 transition-colors duration-300 mb-4"></div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
<span className="group-hover:text-white transition-colors">
                    Status: Ready
                  </span>
<iconify-icon className="text-signal opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-[#080808] p-10 border border-white/5 hover:border-signal/40 transition-all duration-500 hover:bg-[#0a0a0a] overflow-hidden tilt-target">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10 tilt-inner">
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-[9px] text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-black">
                    [ 02 ]
                  </div>
<iconify-icon className="text-3xl text-zinc-700 group-hover:text-signal transition-colors duration-300" icon="lucide:radio-tower"></iconify-icon>
</div>
<h3 className="text-3xl font-display font-semibold text-white mb-4 tracking-tight group-hover:text-signal transition-colors">
                  Signal
                  <br/>
                  Injection
                </h3>
<p className="text-sm font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  Direct insertion into 500+ tier-one nodes. We bypass the
                  noise. We force attention. We guarantee visibility.
                </p>
<div className="w-full h-px bg-zinc-900 group-hover:bg-signal/30 transition-colors duration-300 mb-4"></div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
<span className="group-hover:text-white transition-colors">
                    Status: Amplified
                  </span>
<iconify-icon className="text-signal opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-[#080808] p-10 border border-white/5 hover:border-signal/40 transition-all duration-500 hover:bg-[#0a0a0a] overflow-hidden tilt-target">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10 tilt-inner">
<div className="flex justify-between items-start mb-16">
<div className="font-mono text-[9px] text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-black">
                    [ 03 ]
                  </div>
<iconify-icon className="text-3xl text-zinc-700 group-hover:text-signal transition-colors duration-300" icon="lucide:magnet"></iconify-icon>
</div>
<h3 className="text-3xl font-display font-semibold text-white mb-4 tracking-tight group-hover:text-signal transition-colors">
                  Tokenomic
                  <br/>
                  Gravity
                </h3>
<p className="text-sm font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  Weaponized incentives. Retention is no longer a choice; it's a
                  mathematical certainty designed into the code.
                </p>
<div className="w-full h-px bg-zinc-900 group-hover:bg-signal/30 transition-colors duration-300 mb-4"></div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center justify-between">
<span className="group-hover:text-white transition-colors">
                    Status: Locked
                  </span>
<iconify-icon className="text-signal opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-20" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 px-4 py-2 border border-red-500/20 bg-red-900/10 rounded-full mb-12">
<span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
<span className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-bold">
              Capacity: Critical // 1 Slot Remaining
            </span>
</div>
<h2 className="text-[10vw] leading-[0.8] font-display font-semibold tracking-[-0.06em] text-white mb-10 uppercase">
            History is
            <br/>
<span className="text-transparent text-stroke hover:text-white hover:text-stroke-0 transition-colors duration-500 cursor-none">
              Written.
            </span>
</h2>
<p className="text-lg md:text-xl text-zinc-500 font-mono mb-16 max-w-2xl mx-auto leading-relaxed">
            The victors don't ask for permission.
            <span className="text-white border-b border-signal">They take it.</span>
<br/>
            Ready to weaponize your narrative?
          </p>
<div className="flex flex-col items-center gap-8">
<a className="btn-magnetic group relative inline-flex items-center justify-center px-12 py-5 bg-signal overflow-hidden transition-transform hover:scale-105" href="#">
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
<span className="relative z-10 font-mono text-sm font-bold text-black uppercase tracking-[0.25em] flex items-center gap-4">
                Secure_Slot
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
</a>
<div className="flex gap-8 mt-12">
<a className="text-zinc-600 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest" href="#">
                [ Twitter ]
              </a>
<a className="text-zinc-600 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest" href="#">
                [ Manifesto ]
              </a>
</div>
</div>
</div>
<div className="absolute bottom-8 w-full text-center">
<div className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.5em]">
            Cohort Systems © 2024
          </div>
</div>
</section>
</main>



    </>
  );
}
