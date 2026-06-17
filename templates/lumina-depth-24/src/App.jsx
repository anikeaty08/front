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



        lucide.createIcons();

        // Dust Particle System
        (function() {
            const canvas = document.getElementById('ocean-dust');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height, particles = [];

            function init() {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
                createParticles();
            }

            function createParticles() {
                particles = [];
                const count = Math.floor((width * height) / 12000); // Density
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: Math.random() * 1.5 + 0.2,
                        speed: Math.random() * 0.3 + 0.05,
                        opacity: Math.random() * 0.5 + 0.1
                    });
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.y -= p.speed;
                    if (p.y < -5) p.y = height + 5;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(16, 185, 129, ' + p.opacity + ')'; // Emerald dust
                    ctx.fill();
                });
                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', init);
            init();
            animate();
        })();
    
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
      

<div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-black pointer-events-none">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
<canvas className="w-full h-full" height="868" id="ocean-dust" width="1440"></canvas>
</div>

<div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
</div>

<header className="fixed z-50 flex md:px-10 pt-8 pr-8 pb-8 pl-8 top-0 right-0 left-0 items-start justify-between mix-blend-screen pointer-events-none">
<div className="flex items-center gap-12 pointer-events-auto">

<div className="group relative flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0"></div>
<div className="transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-emerald-400/20 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="z-10 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] relative w-[24px] h-[24px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path className="" d="M2 17l10 5 10-5"></path>
<path className="" d="M2 12l10 5 10-5"></path>
</svg>
</div>
</div>
<div className="flex gap-4 items-center pointer-events-auto">
<nav className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-widest text-emerald-500/50 uppercase">
<a className="hover:text-emerald-400 transition-colors" href="#">Tools</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Explore</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Support</a>
</nav>
<a className="ml-8 text-xs font-sans text-emerald-500/50 hover:text-emerald-400 transition-colors tracking-widest uppercase" href="#">
                Acquire
            </a>
</div>
</header>

<main className="flex flex-col min-h-screen overflow-hidden w-full pt-20 pb-20 relative items-center justify-center">

<div className="relative z-30 text-center px-4 max-w-[90vw] space-y-4">
<h1 className="font-serif text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 via-emerald-400 to-emerald-900 opacity-0 animate-drift drop-shadow-2xl">
                Artistic<br/>
<span className="italic font-light biolum-text">Vision</span>
</h1>
<p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-500/50 opacity-0 animate-drift" style={{animationDelay: '500ms'}}>
                ( Unbounded depths )
            </p>
</div>


<div className="absolute left-[-5%] md:left-[2%] top-[30%] md:top-[40%] w-32 md:w-56 aspect-[3/4] z-10 rotate-[-6deg] hover:scale-105 transition-transform duration-700 ease-out depth-tint rounded-sm overflow-hidden border border-emerald-900/30 shadow-[0_0_30px_rgba(6,78,59,0.2)]">
<img alt="Nature" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6b823c9-b1b9-41f2-81e3-7417e30418f9_800w.webp"/>
</div>

<div className="hidden md:block absolute left-[18%] top-[25%] w-48 aspect-square z-0 rotate-[3deg] opacity-70 hover:z-40 hover:scale-110 transition-all duration-500 depth-tint rounded-sm overflow-hidden border border-emerald-900/30">
<img alt="Abstract" className="w-full h-full object-cover opacity-60 grayscale-[50%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3ebad9a-f340-4057-a000-3da4fde22619_800w.webp"/>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[28rem] aspect-square z-0 rotate-[-2deg] opacity-40 mix-blend-screen pointer-events-none">
<img alt="Center Graphic" className="w-full h-full object-cover blur-[1px] brightness-50 sepia hue-rotate-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5045c0e4-a0e6-44f5-9ce2-f0aeec2f9b70_1600w.webp"/>
</div>

<div className="absolute right-[5%] md:right-[20%] top-[20%] md:top-[28%] w-40 md:w-56 aspect-[4/5] z-20 rotate-[5deg] hover:scale-110 transition-transform duration-700 depth-tint rounded-sm overflow-hidden border border-emerald-900/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
<img alt="Portrait" className="w-full h-full object-cover opacity-80 grayscale-[30%] contrast-125" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden lg:block absolute right-[-2%] top-[55%] w-64 aspect-square z-10 rotate-[-4deg] opacity-80 hover:translate-x-[-20px] transition-transform duration-500 depth-tint rounded-sm overflow-hidden border border-emerald-900/30">
<img alt="Illustration" className="w-full h-full object-cover opacity-70 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ed20ae5-f8be-4c56-abdd-7784974ad093_800w.webp"/>
</div>

<div className="hidden md:block absolute left-[25%] bottom-[-5%] w-48 aspect-[3/4] z-10 rotate-[8deg] hover:grayscale-0 transition-all duration-500 depth-tint rounded-sm overflow-hidden border border-emerald-900/30 shadow-[0_0_30px_rgba(6,78,59,0.3)]">
<img alt="Man in suit" className="w-full h-full object-cover opacity-70 grayscale-[60%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/052a20e9-1afe-45b6-b271-f2144b2a3b2b_800w.webp"/>
</div>

<div className="absolute right-[10%] bottom-[5%] w-40 md:w-52 aspect-square z-0 rotate-[-3deg] opacity-60 hover:opacity-100 transition-opacity depth-tint rounded-sm overflow-hidden border border-emerald-900/30">
<img alt="Space" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</main>

<div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-10 fade-in duration-1000 hidden md:block">
<div className="group bg-[#020606] border border-emerald-900/40 rounded-sm p-4 shadow-2xl flex items-center gap-4 hover:border-emerald-500/30 transition-all cursor-pointer max-w-sm biolum-box">
<div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 border border-emerald-900/30">
<img alt="Thumbnail" className="w-full h-full object-cover opacity-60 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
<div className="text-emerald-400 opacity-80">
<svg className="lucide lucide-play w-4 h-4 fill-emerald-400/20" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-emerald-100/90 font-mono text-xs tracking-widest uppercase">Source Code</h3>
<div className="flex items-center gap-2 text-emerald-500/50 text-[10px] font-mono group-hover:text-emerald-400 transition-colors">
<span>View Repository</span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2">
<div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
<span className="font-mono text-[10px] text-emerald-500/30 uppercase tracking-widest">Scroll</span>
</div>

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-[#020606] hover:bg-[#050c0c] text-emerald-500/60 hover:text-emerald-400 p-3 rounded-full shadow-lg border border-emerald-900/30 transition-all group biolum-box">
<svg className="lucide lucide-settings-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-700" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</div>


    </>
  );
}
