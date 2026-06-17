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



        document.addEventListener('DOMContentLoaded', () => {
            // Define starting scatter positions (x, y, rotation) for scroll = 0
            const carConfig = [
                { id: 'part-body', x: 0, y: -800, r: -45 },
                { id: 'part-wheel-f', x: 1000, y: 800, r: 720 },
                { id: 'part-wheel-r', x: -1000, y: 800, r: -720 },
                { id: 'part-hub-f', x: 1200, y: 1000, r: 1080 },
                { id: 'part-hub-r', x: -1200, y: 1000, r: -1080 },
                { id: 'part-window', x: -600, y: -1000, r: 60 },
                { id: 'part-door', x: 800, y: -500, r: -90 },
                { id: 'part-light', x: 1200, y: -300, r: 180 },
                { id: 'part-spoiler', x: -1000, y: -600, r: -180 },
                { id: 'part-chassis', x: 0, y: 1000, r: 0 }
            ];

            // Set dynamic transform origin for natural rotations
            carConfig.forEach(c => {
                const el = document.getElementById(c.id);
                if (el) {
                    el.style.transformBox = 'fill-box';
                    el.style.transformOrigin = 'center';
                }
            });

            function animateCar() {
                const scrollY = window.scrollY;
                // Assembly fully completes at 700px scrolled down
                const progress = Math.min(scrollY / 700, 1);
                
                // Smooth easeOutCubic curve
                const ease = 1 - Math.pow(1 - progress, 3);
                
                carConfig.forEach(c => {
                    const el = document.getElementById(c.id);
                    if (el) {
                        const cx = c.x * (1 - ease);
                        const cy = c.y * (1 - ease);
                        const cr = c.r * (1 - ease);
                        el.style.transform = `translate(${cx}px, ${cy}px) rotate(${cr}deg)`;
                        // Opacity interpolates from faint to full defined opacity
                        el.style.opacity = 0.1 + (0.9 * ease);
                    }
                });
            }

            window.addEventListener('scroll', () => {
                requestAnimationFrame(animateCar);
            }, { passive: true });
            
            // Run immediately on load to set initial state
            animateCar();
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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-800/20 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-900/40 blur-[120px] pointer-events-none z-0"></div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] pointer-events-none z-0 opacity-[0.15] mix-blend-screen px-6">
<svg className="w-full h-auto overflow-visible text-zinc-500" id="scatter-car" viewbox="0 0 800 300">

<path className="will-change-transform" d="M 60,220 L 780,220" fill="none" id="part-chassis" stroke="#3f3f46" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="1.5"></path>

<path className="will-change-transform" d="M 100,200 L 100,140 Q 120,110 180,100 L 300,60 Q 350,50 420,50 L 520,100 Q 560,120 660,130 L 740,150 L 740,200 L 660,200 A 60 60 0 0 1 540 200 L 260,200 A 60 60 0 0 1 140 200 Z" fill="none" id="part-body" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<path className="will-change-transform" d="M 310,65 Q 360,55 410,60 L 500,105 L 330,105 Q 310,90 310,65 Z" fill="none" id="part-window" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>

<path className="will-change-transform" d="M 330,110 L 480,110 L 450,190 L 330,190 Z" fill="none" id="part-door" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>

<path className="will-change-transform" d="M 700,135 L 735,145 L 720,155 Z" fill="none" id="part-light" stroke="#52525b" strokeLinejoin="round" strokeWidth="2"></path>

<path className="will-change-transform" d="M 90,140 L 60,100 L 120,110 L 110,140 Z" fill="none" id="part-spoiler" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle className="will-change-transform" cx="600" cy="200" fill="none" id="part-wheel-f" r="45" stroke="currentColor" strokeWidth="2"></circle>

<g className="will-change-transform" id="part-hub-f">
<circle cx="600" cy="200" fill="none" r="15" stroke="#52525b" strokeWidth="1.5"></circle>
<path d="M 600 155 L 600 245 M 555 200 L 645 200 M 568 168 L 632 232 M 568 232 L 632 168" stroke="#52525b" strokeLinecap="round" strokeWidth="1.5"></path>
</g>

<circle className="will-change-transform" cx="200" cy="200" fill="none" id="part-wheel-r" r="45" stroke="currentColor" strokeWidth="2"></circle>

<g className="will-change-transform" id="part-hub-r">
<circle cx="200" cy="200" fill="none" r="15" stroke="#52525b" strokeWidth="1.5"></circle>
<path d="M 200 155 L 200 245 M 155 200 L 245 200 M 168 168 L 232 232 M 168 232 L 232 168" stroke="#52525b" strokeLinecap="round" strokeWidth="1.5"></path>
</g>
</svg>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-medium tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
                LUSTER
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="#technology">Technology</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Sign In</a>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Book Now
                </button>
</div>
</div>
</header>
<main className="pt-24 md:pt-32 relative z-10">

<section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
<div className="flex flex-col gap-6 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/[0.05] text-zinc-300 text-xs font-medium w-fit backdrop-blur-sm shadow-sm">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                    Next-Generation Detailing
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 leading-[1.1]">
                    Flawless <br/> perfection.
                </h1>
<p className="text-base text-zinc-400 max-w-md font-normal leading-relaxed backdrop-blur-sm rounded-xl">
                    Experience vehicle care elevated to an art form. Advanced ceramics, spatial precision cleaning, and obsessive attention to detail.
                </p>
<div className="flex items-center gap-4 mt-4">
<button className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all shadow-sm">
                        Explore Services
                    </button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 flex items-center gap-2 transition-colors">
                        Watch Process
                        <iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center [perspective:1200px] z-10">
<div className="relative w-3/4 h-3/4 transition-all duration-1000 ease-out [transform-style:preserve-3d] [transform:rotateX(20deg)_rotateY(-25deg)] hover:[transform:rotateX(10deg)_rotateY(-10deg)] group">
<div className="absolute inset-0 rounded-[2rem] bg-zinc-800/10 blur-2xl [transform:translateZ(-100px)] group-hover:bg-zinc-700/10 transition-colors duration-1000"></div>
<div className="absolute inset-0 rounded-[2rem] border border-white/[0.05] bg-zinc-900/60 backdrop-blur-xl [transform:translateZ(0px)] overflow-hidden shadow-2xl flex flex-col justify-between p-8">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_50%)]"></div>
<div className="flex justify-between items-start relative z-10">
<iconify-icon className="text-2xl text-zinc-500" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-wider uppercase">Active Scan</span>
</div>
<div className="relative flex-1 flex items-center justify-center">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent absolute top-1/2 -translate-y-1/2"></div>
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-600/30 to-transparent absolute left-1/2 -translate-x-1/2"></div>
<iconify-icon className="text-7xl text-zinc-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" icon="solar:car-linear"></iconify-icon>
</div>
<div className="relative z-10 flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-300">Nano-Ceramic Coating</span>
</div>
</div>
<div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-zinc-900/90 border border-white/[0.05] backdrop-blur-md [transform:translateZ(60px)] shadow-xl flex items-center gap-3">
<div className="p-2 rounded-full bg-zinc-800/50 text-zinc-300">
<iconify-icon icon="solar:droplets-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Purity</span>
<span className="text-sm font-medium text-zinc-200">99.9%</span>
</div>
</div>
<div className="absolute -bottom-4 -left-8 p-4 rounded-2xl bg-zinc-900/90 border border-white/[0.05] backdrop-blur-md [transform:translateZ(80px)] shadow-xl flex items-center gap-3">
<div className="p-2 rounded-full bg-zinc-800/50 text-zinc-300">
<iconify-icon icon="solar:wind-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Drying</span>
<span className="text-sm font-medium text-zinc-200">Touchless</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/[0.02] bg-zinc-950/80 backdrop-blur-md" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Spatial Detailing Matrix</h2>
<p className="text-sm text-zinc-400 max-w-xl mx-auto">Our multi-dimensional approach to vehicle restoration ensures every surface, visible or hidden, is treated with exact precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative rounded-2xl bg-zinc-900/30 border border-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-2">Exterior Genesis</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 font-normal">Deionization wash, clay bar decontamination, and multi-stage paint correction to restore factory luster.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group relative rounded-2xl bg-zinc-900/30 border border-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-2">Interior Sanctuary</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 font-normal">Ozone treatment, alcantara/leather restoration, and deep extraction for a clinically clean cabin environment.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group relative rounded-2xl bg-zinc-900/30 border border-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-white/[0.05] flex items-center justify-center mb-6 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-2">Ceramic Armor</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 font-normal">Application of aerospace-grade nano-coatings providing years of hydrophobic defense and gloss retention.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors" href="#">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-zinc-950/90 backdrop-blur-md" id="pricing">
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-6">Configure Your Service</h2>
<label className="relative inline-flex items-center cursor-pointer justify-center">
<input className="sr-only peer" type="checkbox"/>
<span className="mr-4 text-sm font-medium text-zinc-400 peer-checked:text-zinc-500 transition-colors">Standard Care</span>
<div className="w-10 h-5 bg-zinc-800/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[calc(50%-18px)] after:bg-zinc-400 after:border-zinc-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:border-zinc-900 peer-checked:after:bg-zinc-900 shadow-inner border border-white/[0.05]"></div>
<span className="ml-4 text-sm font-medium text-zinc-500 peer-checked:text-zinc-100 transition-colors">Premium Detail</span>
</label>
</div>
<div className="bg-zinc-900/30 border border-white/[0.05] rounded-2xl p-8 backdrop-blur-lg relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-8 border-b border-white/[0.05] gap-6">
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100">Signature Wash</h3>
<p className="text-sm text-zinc-500 mt-1 font-normal">Perfect for bi-weekly maintenance.</p>
</div>
<div className="text-left md:text-right">
<span className="text-4xl font-medium tracking-tighter text-white">$85</span>
<span className="text-sm text-zinc-500 font-normal">/vehicle</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-zinc-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            pH-Neutral Snow Foam Pre-Wash
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-zinc-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Two-Bucket Contact Wash
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-zinc-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Wheel Face &amp; Barrel Decontamination
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-zinc-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
                            Plush Microfiber Touchless Dry
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600 font-normal">
<iconify-icon className="text-zinc-700 text-base" icon="solar:close-circle-linear"></iconify-icon>
                            Interior Vacuum &amp; Wipe Down
                        </li>
</ul>
<button className="w-full bg-white text-zinc-950 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
                        Schedule Appointment
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.02] bg-zinc-950 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
<div>
<a className="text-base font-medium tracking-tighter text-zinc-100 flex items-center gap-2 mb-4" href="#">
                        LUSTER
                    </a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed font-normal">Defining the future of automotive care through technology, precision, and passion.</p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-zinc-300 tracking-wider mb-1">Platform</span>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">Services</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">Pricing</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">Booking</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-zinc-300 tracking-wider mb-1">Company</span>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">About</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">Contact</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-normal" href="#">Legal</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.02] text-xs text-zinc-600 font-normal gap-4">
<p>© 2024 Luster Detailing Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#"><iconify-icon className="text-base" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-zinc-400 transition-colors" href="#"><iconify-icon className="text-base" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
