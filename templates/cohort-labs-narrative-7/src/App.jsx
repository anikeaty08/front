import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



// MOUSE TRACKING SPOTLIGHT
const cards = document.querySelectorAll('.spotlight-card');
const container = document.getElementById('arsenal');
if(container) {
container.onmousemove = e => {
for(const card of cards) {
const rect = card.getBoundingClientRect(),
x = e.clientX - rect.left,
y = e.clientY - rect.top;
card.style.setProperty("--mouse-x", `${x}px`);
card.style.setProperty("--mouse-y", `${y}px`);
}
};
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
  }, []);

  return (
    <>
      

<div className="loader-curtain" id="loader" style={{transform: 'translateY(-100%)'}}>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-1 bg-signal animate-pulse"></div>
<div className="font-mono text-xs text-signal tracking-[0.3em] uppercase">
          Initializing Weaponry
        </div>
</div>
</div>

<div className="noise-overlay"></div>
<div className="scanlines"></div>
<div className="cursor-dot hidden md:block" style={{left: '50px', top: '0px'}}></div>
<div className="cursor-ring hidden md:block rounded-full" style={{left: '0px', top: '0px', width: '32px', height: '32px', backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', mixBlendMode: 'normal'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
<a className="group flex items-center gap-4" href="#">
<div className="relative w-10 h-10 flex items-center justify-center font-bold font-display text-base tracking-tighter bg-white text-black transition-all duration-500 group-hover:scale-110 group-hover:bg-signal">
          CL
          <div className="absolute -inset-1 border border-white/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
</div>
<div className="flex flex-col">
<span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase group-hover:text-signal transition-colors">
            Cohort Labs
          </span>
<span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
            [ Narrative Warfare ]
          </span>
</div>
</a>
<div className="hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-xl p-1.5 rounded-full border border-white/10">
<a className="px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black hover:bg-signal hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all duration-300" href="#work">
          Ops
        </a>
<span className="text-zinc-700">/</span>
<a className="px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black hover:bg-signal hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all duration-300" href="#arsenal">
          Tech
        </a>
<span className="text-zinc-700">/</span>
<a className="px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-black hover:bg-signal hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all duration-300" href="#protocol">
          Intel
        </a>
</div>
<a className="btn-magnetic hidden md:flex items-center justify-center px-8 py-3 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-signal transition-all duration-300 border border-transparent hover:border-black/10 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]" href="#contact">
<span className="mr-2 text-signal mix-blend-difference">●</span>
        Init_Protocol
      </a>
</nav>
<main className="">

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-black">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black"></div>
<div className="absolute inset-0 bg-[url('https://i.ibb.co/WWhbDQRw/ezgif-frame-001-2.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay grayscale contrast-125"></div>

<div className="atom-container">
<div className="atom">
<div className="orbit"></div>
<div className="orbit"></div>
<div className="orbit"></div>
<div className="orbit" style={{transform: 'rotateY(90deg)'}}></div>
</div>
</div>
<div className="perspective-grid"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>

<div className="absolute top-1/3 left-8 hidden lg:flex flex-col gap-12 z-10">
<div className="flex flex-col gap-2">
<div className="w-1 h-1 bg-signal animate-pulse"></div>
<div className="w-px h-32 bg-gradient-to-b from-signal/80 to-transparent"></div>
</div>
<div className="writing-vertical-lr rotate-180 font-mono text-[9px] text-zinc-600 tracking-[0.2em] mix-blend-exclusion">
            ㅤㅤㅤㅤㅤ
          </div>
</div>
<div className="absolute bottom-12 left-12 hidden lg:block z-10">
<div className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
            System Status:
            <span className="text-signal">Optimal</span>
</div>
</div>

<div className="md:px-12 flex flex-col w-full max-w-[1800px] z-20 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="mb-10 reveal-text">
<div className="reveal-inner inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-black/50 backdrop-blur-md rounded-full">
<span className="w-1.5 h-1.5 bg-signal rounded-full shadow-[0_0_10px_#CCFF00]"></span>
<span className="font-mono text-[9px] text-zinc-300 tracking-[0.3em] uppercase">
                Protocol v4.0 Online
              </span>
</div>
</div>
<h1 className="flex flex-col items-center text-center font-display font-semibold text-[13vw] leading-[0.85] tracking-[-0.08em] text-white uppercase mix-blend-normal select-none pointer-events-none perspective-1000">
<div className="reveal-text">
<span className="block reveal-inner tilt-target text-white drop-shadow-2xl" data-tilt-amount="15" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
                MEMETICS IS
              </span>
</div>
<div className="reveal-text">
<span className="block reveal-inner tilt-target text-transparent bg-clip-text bg-gradient-to-b from-signal via-signal to-transparent relative opacity-90" data-tilt-amount="25" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
                MARKET CAP
                <div aria-hidden="true" className="absolute inset-0 text-white blur-md opacity-30 animate-pulse">
                  MARKET CAP
                </div>
</span>
</div>
</h1>
<div className="mt-16 flex flex-col items-center text-center reveal-text">
<p className="font-mono text-xs md:text-sm text-zinc-400 max-w-lg leading-relaxed mb-10 tracking-tight">
<span className="text-signal">&gt;&gt;</span>
              We don't do marketing. We engineer consensus reality for the
              highest-stakes protocols in Web3.
              <span className="text-white">Resistance is futile.</span>
</p>
<div className="reveal-inner" style={{transform: 'translateY(0px)'}}>
<a className="group relative inline-flex items-center justify-center px-16 py-4 border border-signal/20 bg-signal/5 overflow-hidden transition-all duration-300 hover:bg-signal/10 hover:border-signal/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]" href="#work">
<div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 left-0 w-1 h-1 bg-signal"></div>
<div className="absolute bottom-0 right-0 w-1 h-1 bg-signal"></div>
<span className="relative z-10 font-mono text-[10px] font-bold text-white uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all flex items-center gap-3">
<iconify-icon className="text-signal" icon="lucide:terminal"></iconify-icon>
                  Deploy_Cohort
                </span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-20 right-12 z-20 hidden md:block">
<div className="glass-elite p-8 min-w-[320px] tilt-target group" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>
<div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
<span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Total Value Unlocked
              </span>
<iconify-icon className="text-signal animate-pulse" icon="lucide:activity"></iconify-icon>
</div>
<div className="font-display text-7xl font-bold text-white tracking-tighter group-hover:text-glow transition-all duration-300">
              $8.4B
            </div>
<div className="flex gap-4 mt-6 items-center">
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-signal w-[90%]"></div>
</div>
<span className="font-mono text-[9px] text-signal">98%</span>
</div>
</div>
</div>
</section>

<div className="py-8 bg-signal overflow-hidden border-y border-black">
<div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
<span className="text-8xl font-display font-semibold text-black tracking-tighter uppercase opacity-90">
            REALITY FORKED
          </span>
<span className="mx-8 text-4xl text-black">//</span>
<span className="text-8xl font-display font-semibold text-black tracking-tighter uppercase opacity-90">
            ATTENTION CAPTURED
          </span>
<span className="mx-8 text-4xl text-black">//</span>
<span className="text-8xl font-display font-semibold text-black tracking-tighter uppercase opacity-90">
            LIQUIDITY SECURED
          </span>
<span className="mx-8 text-4xl text-black">//</span>
</div>
</div>

<section className="relative py-32 bg-[#050505] overflow-hidden" id="work">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
<div className="flex items-end justify-between mb-24 border-b border-white/10 pb-8">
<h2 className="text-[6vw] font-display font-medium text-white tracking-[-0.06em] leading-none">
              OPERATIONS
            </h2>
<div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest text-right hidden md:block">
              [ Decrypted Files ]
              <br/>
              Clearance: Level 5
            </div>
</div>

<div className="group relative mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 relative h-[70vh] overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
<img alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://i.ibb.co/WWhbDQRw/ezgif-frame-001-2.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute top-6 left-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/20">
<span className="w-1.5 h-1.5 bg-signal animate-pulse"></span>
<span className="font-mono text-[9px] text-white uppercase tracking-widest">
                    Op: Velocity
                  </span>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col justify-center">
<div className="font-mono text-xs text-signal mb-6 tracking-widest uppercase">
                [ Sector: L2 Infrastructure ]
              </div>
<h3 className="text-5xl md:text-7xl font-display font-semibold text-white mb-8 tracking-tighter leading-[0.9]">
                WEAPONIZED
                <span className="text-zinc-600">TRIBALISM</span>
</h3>
<p className="font-mono text-sm text-zinc-400 leading-relaxed max-w-md mb-12 border-l border-zinc-800 pl-6">
                Problem: Another generic L2 launch.
                <br/>
                Solution: Turned a technical upgrade into a moral imperative. We
                didn't sell speed; we sold sovereignty.
              </p>
<div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-8">
<div>
<div className="font-display text-4xl text-white tracking-tighter">
                    $300M
                  </div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-2">
                    TVL in 48h
                  </div>
</div>
<div>
<div className="font-display text-4xl text-white tracking-tighter">
                    50k+
                  </div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-2">
                    Active Wallets
                  </div>
</div>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
<div className="font-mono text-xs text-signal mb-6 tracking-widest uppercase">
                [ Sector: DeFi Protocol ]
              </div>
<h3 className="text-5xl md:text-7xl font-display font-semibold text-white mb-8 tracking-tighter leading-[0.9]">
                MEMETIC
                <span className="text-zinc-600">CONTAGION</span>
</h3>
<p className="font-mono text-sm text-zinc-400 leading-relaxed max-w-md mb-12 border-l border-zinc-800 pl-6">
                Problem: Oversaturated yield market.
                <br/>
                Solution: Engineered hysteria. Bypassed logic filters. Direct
                injection into the greed centers of the ecosystem.
              </p>
<div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-8">
<div>
<div className="font-display text-4xl text-white tracking-tighter">
                    150x
                  </div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-2">
                    Oversubscription
                  </div>
</div>
<div>
<div className="font-display text-4xl text-white tracking-tighter">
                    $0
                  </div>
<div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-2">
                    Ad Spend
                  </div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative h-[70vh] overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 order-1 lg:order-2">
<img alt="" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
<div className="absolute top-6 left-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/20">
<span className="w-1.5 h-1.5 bg-signal animate-pulse"></span>
<span className="font-mono text-[9px] text-white uppercase tracking-widest">
                    Op: Hysteria
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808] overflow-hidden" id="arsenal">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
<div className="mb-24">
<h2 className="text-[6vw] font-display font-medium text-white tracking-[-0.06em] leading-none mb-6">
              CAPABILITIES
            </h2>
<p className="font-mono text-zinc-500 max-w-xl text-sm md:text-base leading-relaxed">
<span className="text-signal">&gt;</span>
              executing_protocols...
              <br/>
              We don't guess. We deploy proven psychological weaponry.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 transition-all duration-500 spotlight-card overflow-hidden hover:border-signal/20" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 bg-noise opacity-5"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-12">
<iconify-icon className="text-zinc-600 group-hover:text-signal transition-colors text-3xl" icon="lucide:brain-circuit"></iconify-icon>
<span className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
                    Sys_01
                  </span>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                  MEMETIC WARFARE
                </h3>
<p className="text-xs font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  We design autonomous mental viruses. Concepts that bypass
                  logic filters, infect the host, and propagate across the
                  network without friction.
                </p>
<div className="mt-auto">
<div className="h-px w-full bg-gradient-to-r from-signal/0 via-signal/20 to-signal/0 group-hover:via-signal/50 transition-all"></div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 transition-all duration-500 spotlight-card overflow-hidden hover:border-signal/20" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 bg-noise opacity-5"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-12">
<iconify-icon className="text-zinc-600 group-hover:text-signal transition-colors text-3xl" icon="lucide:radio-tower"></iconify-icon>
<span className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
                    Sys_02
                  </span>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                  SIGNAL INJECTION
                </h3>
<p className="text-xs font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  Direct insertion into 500+ tier-one nodes. We don't ask for
                  attention. We force it through sheer network saturation and
                  orchestrated echo chambers.
                </p>
<div className="mt-auto">
<div className="h-px w-full bg-gradient-to-r from-signal/0 via-signal/20 to-signal/0 group-hover:via-signal/50 transition-all"></div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 transition-all duration-500 spotlight-card overflow-hidden hover:border-signal/20" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 bg-noise opacity-5"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-12">
<iconify-icon className="text-zinc-600 group-hover:text-signal transition-colors text-3xl" icon="lucide:anchor"></iconify-icon>
<span className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
                    Sys_03
                  </span>
</div>
<h3 className="text-xl font-display font-semibold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                  INCENTIVE DESIGN
                </h3>
<p className="text-xs font-mono text-zinc-400 leading-relaxed mb-8 border-l border-zinc-800 pl-4">
                  Weaponized game theory. Retention is no longer a choice; it's
                  a mathematical certainty designed into the protocol layer.
                </p>
<div className="mt-auto">
<div className="h-px w-full bg-gradient-to-r from-signal/0 via-signal/20 to-signal/0 group-hover:via-signal/50 transition-all"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-32" id="contact">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-signal/5 blur-[100px] rounded-full pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-signal/20 bg-signal/5 rounded-full mb-16 animate-pulse">
<span className="w-1.5 h-1.5 bg-signal rounded-full"></span>
<span className="font-mono text-[9px] text-signal uppercase tracking-widest">
              Cohort 04: Accepting Applications
            </span>
</div>
<h2 className="text-[9vw] md:text-[7vw] font-display font-semibold text-white tracking-[-0.06em] leading-[0.8] mb-12 uppercase">
            DOMINANCE IS
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-900 block">
              A CHOICE.
            </span>
</h2>
<p className="font-mono text-zinc-500 mb-16 max-w-lg mx-auto text-xs md:text-sm leading-relaxed tracking-wide">
            The narrative layer is the only moat left. Secure your position
            before the fork.
          </p>
<a className="btn-magnetic group relative inline-flex items-center justify-center px-24 py-6 bg-white overflow-hidden hover:bg-signal transition-colors duration-200" href="#">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
<span className="relative z-10 font-mono text-sm font-bold text-black uppercase tracking-[0.3em] flex items-center gap-4">
<span className="w-2 h-2 bg-black rotate-45 group-hover:rotate-90 transition-transform"></span>
              INITIATE_SEQUENCE
            </span>
</a>
<div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-8 justify-center items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-lg group-hover:text-signal" icon="lucide:twitter"></iconify-icon>
              @COHORT_LABS
            </a>
<span className="text-zinc-900 hidden md:inline">//</span>
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-lg group-hover:text-signal" icon="lucide:key"></iconify-icon>
              PGP: 0x4F...9A
            </a>
</div>
</div>
</section>
</main>



    </>
  );
}
