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
            
            // Time update
            const updateTime = () => {
                const now = new Date();
                const options = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
                document.getElementById('local-time').textContent = now.toLocaleTimeString('en-US', options);
            };
            setInterval(updateTime, 1000);
            updateTime();

            // Entrance Animation
            gsap.from(".bento-card", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });

            // 3D Tilt & Mouse Glow Effect
            document.querySelectorAll('.bento-card').forEach(card => {
                const content = card.querySelector('.content-layer');
                
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Update CSS variables for glow position
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);

                    // 3D Tilt calculation
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -4; // Max rotation 4deg
                    const rotateY = ((x - centerX) / centerX) * 4;

                    if (content) {
                        gsap.to(content, {
                            rotateX: rotateX,
                            rotateY: rotateY,
                            duration: 0.5,
                            ease: "power2.out",
                            transformPerspective: 1000
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (content) {
                        gsap.to(content, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.8,
                            ease: "elastic.out(1, 0.5)"
                        });
                    }
                });
            });

            // Magnetic Buttons
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        duration: 0.7,
                        ease: "elastic.out(1, 0.3)"
                    });
                });
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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference transition-all duration-500 pt-8 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white hover:opacity-50 transition-opacity duration-500 magnetic-btn" href="#">
                CRV.
            </a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors duration-500 magnetic-btn px-4 py-2" href="#contact">
                Let's Talk
            </a>
</div>
</nav>

<main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center items-center">
<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[16rem] md:auto-rows-[14rem]">

<div className="bento-card col-span-1 md:col-span-2 md:row-span-2 bg-white/[0.01] ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-end group">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent z-0 bg-layer"></div>
<div className="relative z-10 content-layer space-y-8">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100 leading-[1.1]">
                        Designing systems <br className="hidden sm:block"/>
<span className="text-neutral-600">for the modern web.</span>
</h1>
<p className="text-sm sm:text-base text-neutral-400 max-w-sm font-light leading-relaxed">
                        I specialize in minimal, high-performance interfaces that bridge the gap between engineering and aesthetic intent.
                    </p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-2 bg-white/[0.01] ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden flex flex-col items-start justify-between group">
<div className="content-layer w-10 h-10 rounded-full ring-1 ring-white/[0.05] bg-white/[0.02] flex items-center justify-center group-hover:bg-white/[0.05] transition-colors duration-500">
<iconify-icon className="text-lg text-neutral-500 group-hover:text-neutral-200 transition-colors duration-500" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="content-layer">
<h3 className="text-lg font-medium text-neutral-200 tracking-tight">Interface</h3>
<p className="mt-3 text-xs text-neutral-500 leading-relaxed font-light">Crafting pixel-perfect, accessible, and modular design components.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-white/[0.01] ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center text-center group">
<div className="content-layer flex flex-col items-center">
<div className="px-4 py-2 rounded-full ring-1 ring-white/[0.05] bg-white/[0.02] flex items-center gap-3 mb-4">
<span className="relative flex w-2 h-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-40"></span>
<span className="relative inline-flex rounded-full w-2 h-2 bg-neutral-300"></span>
</span>
<span className="text-xs font-light text-neutral-300">Available</span>
</div>
<p className="text-sm font-medium tracking-tight text-neutral-400" id="local-time">00:00 PST</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-white/[0.01] ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end group">
<iconify-icon className="absolute top-8 right-8 text-2xl text-neutral-800 group-hover:text-neutral-500 transition-colors duration-500 bg-layer" icon="solar:code-2-linear" strokeWidth="1.5"></iconify-icon>
<div className="content-layer">
<h3 className="text-base font-medium text-neutral-200 tracking-tight">Engineering</h3>
<p className="mt-2 text-xs text-neutral-500 font-light">React, Next.js &amp; WebGL</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 md:row-span-2 bg-neutral-900/50 ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-layer"></div>
<div className="w-10 h-10 rounded-full bg-white/[0.02] ring-1 ring-white/[0.05] flex items-center justify-center text-neutral-500 group-hover:text-neutral-100 group-hover:bg-white/[0.05] transition-all duration-500 self-end content-layer">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="content-layer">
<p className="text-xs text-neutral-500 mb-2 font-light tracking-wide uppercase">Featured</p>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-300 tracking-tight group-hover:text-white transition-colors duration-500">Aura Financial</h3>
<p className="text-sm text-neutral-500 mt-3 font-light max-w-sm">Complete platform redesign and design system architecture for a modern fintech app.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-white/[0.01] ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end group">
<iconify-icon className="absolute top-8 right-8 text-2xl text-neutral-800 group-hover:text-neutral-500 transition-colors duration-500 bg-layer" icon="solar:slider-minimalistic-horizontal-linear" strokeWidth="1.5"></iconify-icon>
<div className="content-layer">
<h3 className="text-base font-medium text-neutral-200 tracking-tight">Interaction</h3>
<p className="mt-2 text-xs text-neutral-500 font-light">Fluid, physics-based motion.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-neutral-900/30 ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-end">
<div className="content-layer">
<h3 className="text-base font-medium text-neutral-400 tracking-tight group-hover:text-neutral-100 transition-colors duration-500">Lumina Commerce</h3>
<p className="mt-2 text-xs text-neutral-600 font-light group-hover:text-neutral-400 transition-colors duration-500">Headless Storefront</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-neutral-900/30 ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-end">
<div className="content-layer">
<h3 className="text-base font-medium text-neutral-400 tracking-tight group-hover:text-neutral-100 transition-colors duration-500">Nexus Core</h3>
<p className="mt-2 text-xs text-neutral-600 font-light group-hover:text-neutral-400 transition-colors duration-500">Brand Identity</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-1 md:row-span-1 bg-neutral-900/30 ring-1 ring-white/[0.03] hover:ring-white/[0.08] transition-all duration-700 rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-end">
<div className="content-layer">
<h3 className="text-base font-medium text-neutral-400 tracking-tight group-hover:text-neutral-100 transition-colors duration-500">Verve Mobile</h3>
<p className="mt-2 text-xs text-neutral-600 font-light group-hover:text-neutral-400 transition-colors duration-500">iOS Application</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-4 md:row-span-1 bg-transparent rounded-3xl pt-12 pb-4 flex flex-col sm:flex-row items-end justify-between gap-8 border-t border-white/[0.02] mt-4" id="contact">
<div className="content-layer">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-300">Start a conversation.</h2>
<div className="flex gap-6 mt-6">
<a className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors font-light relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-neutral-200 hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors font-light relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-neutral-200 hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors font-light relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-neutral-200 hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">GitHub</a>
</div>
</div>
<div className="content-layer flex flex-col items-end gap-6 w-full sm:w-auto">
<a className="magnetic-btn px-6 py-3 rounded-full bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors duration-300 flex items-center gap-2" href="mailto:hello@example.com">
                        hello@crv.design
                    </a>
<div className="text-[10px] text-neutral-600 font-light tracking-widest uppercase">© 2024</div>
</div>
</div>
</div>
</main>



    </>
  );
}
