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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const heroSection = document.getElementById('hero-section');
            
            // Trigger animation shortly after load to ensure smooth transition
            requestAnimationFrame(() => {
                setTimeout(() => {
                    heroSection.classList.remove('opacity-0', '-translate-y-32');
                }, 100);
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
      

<div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"></div>

<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-blue-900/20 rounded-[100%] blur-[120px] opacity-70 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[150px] opacity-50 animate-[pulse_12s_ease-in-out_infinite]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] border border-dashed border-blue-100/[0.05] rounded-full animate-[spin_120s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vw] md:w-[100vw] md:h-[100vw] border border-dotted border-blue-100/[0.05] rounded-full animate-[spin_180s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240vw] h-[240vw] md:w-[130vw] md:h-[130vw] border border-dashed border-blue-100/[0.03] rounded-full animate-[spin_240s_linear_infinite]"></div>

<div className="absolute inset-0 origin-center animate-[spin_300s_linear_infinite]">

<div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-80 animate-[pulse_3s_ease-in-out_infinite]"></div>
<div className="absolute top-[45%] left-[85%] w-1 h-1 bg-blue-200 rounded-full shadow-[0_0_12px_rgba(191,219,254,1)] opacity-90 animate-[pulse_4s_ease-in-out_infinite]"></div>
<div className="absolute top-[75%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
<div className="absolute top-[30%] left-[70%] w-1.5 h-1.5 bg-blue-100 rounded-full shadow-[0_0_15px_rgba(219,234,254,0.6)] opacity-60 animate-[pulse_5s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[10%] right-[30%] w-1 h-1 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.8)] opacity-70"></div>

<div className="absolute top-[60%] left-[40%] w-0.5 h-0.5 bg-blue-50 rounded-full opacity-50"></div>
<div className="absolute top-[20%] left-[80%] w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)] opacity-40"></div>
</div>
</div>

<main className="relative z-10 w-full flex flex-col items-center pt-32 pb-24">

<section className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mb-40 opacity-0 -translate-y-32 transition-all duration-[2000ms] ease-out" id="hero-section">

<div className="relative flex justify-center items-center mb-16">

<div className="absolute w-40 h-40 bg-blue-400/20 rounded-full blur-[40px] animate-[pulse_6s_ease-in-out_infinite]"></div>
<div className="absolute w-20 h-20 bg-blue-200/30 rounded-full blur-[20px]"></div>
<svg className="relative z-10 text-blue-50 drop-shadow-[0_0_12px_rgba(219,234,254,0.7)]" fill="none" height="80" viewbox="0 0 48 64" width="64">
<circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<line stroke="currentColor" strokeWidth="1.5" x1="24" x2="24" y1="26" y2="44"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="2" x2="46" y1="36" y2="36"></line>
<polygon fill="none" points="17,48 31,48 24,58" stroke="currentColor" strokeWidth="1.5"></polygon>
</svg>
</div>

<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6">
                AETHERIS
            </h1>
<p className="text-lg md:text-xl text-blue-200/70 uppercase tracking-[0.2em] font-light">
                Celestial Gin
            </p>
</section>

<section className="w-full max-w-3xl mx-auto px-6 text-center space-y-24 mb-40">
<div className="space-y-8">
<p className="text-lg text-zinc-400/80 leading-relaxed">
                    In ancient cosmology, the universe was composed of four elements:
                </p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base text-zinc-600 uppercase tracking-[0.15em]">
<span className="flex items-center gap-2">Earth</span>
<span className="flex items-center gap-2">Water</span>
<span className="flex items-center gap-2">Fire</span>
<span className="flex items-center gap-2">Air</span>
</div>
</div>
<div className="space-y-12">
<p className="text-lg text-zinc-400/80">
                    But beyond them existed a fifth.
                </p>
<h2 className="font-serif text-4xl md:text-5xl text-blue-50 tracking-tight drop-shadow-[0_0_15px_rgba(191,219,254,0.4)]">
                    Aether.
                </h2>
<p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                    The luminous substance of the heavens — the pure upper air breathed by the gods. 
                    It was believed to fill the celestial spheres and carry the light of the stars.
                </p>
</div>
<div className="w-px h-32 bg-gradient-to-b from-blue-500/0 via-blue-400/40 to-blue-500/0 mx-auto"></div>
<div className="space-y-8">
<p className="text-lg text-blue-100/90 font-medium">
                    Aetheris is a tribute to this forgotten element.
                </p>
<p className="text-lg text-zinc-400/80 leading-relaxed">
                    A spirit inspired not by the soil below,<br className="hidden md:block"/>
                    but by the atmosphere above.
                </p>
<p className="text-lg text-zinc-300 leading-relaxed">
                    Distilled with rare botanicals and crystalline water,<br className="hidden md:block"/>
                    Aetheris captures the clarity of the upper air —<br className="hidden md:block"/>
<span className="text-blue-200 mt-2 block">bright, weightless, eternal.</span>
</p>
</div>
</section>

<section className="w-full px-6 flex justify-center mb-40">
<div className="relative w-full max-w-md aspect-[1/1.8] group">

<div className="absolute inset-0 bg-blue-600/10 rounded-[100px] blur-[60px] group-hover:bg-blue-500/20 transition duration-1000"></div>

<div className="relative w-full h-full rounded-[100px] border border-white/5 bg-zinc-950/40 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-between py-16 shadow-[0_0_40px_rgba(30,58,138,0.2)]">

<div className="absolute inset-y-0 left-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute inset-y-0 right-[10%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

<svg className="text-blue-100/30" fill="none" height="32" viewbox="0 0 48 64" width="24">
<circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<line stroke="currentColor" strokeWidth="1.5" x1="24" x2="24" y1="26" y2="44"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="2" x2="46" y1="36" y2="36"></line>
<polygon fill="none" points="17,48 31,48 24,58" stroke="currentColor" strokeWidth="1.5"></polygon>
</svg>

<div className="relative w-full h-1/2 flex items-end justify-center mt-auto">

<div className="absolute bottom-0 w-[80%] h-32 bg-blue-500/20 blur-[30px]"></div>

<svg className="w-full h-full text-blue-100 drop-shadow-[0_0_15px_rgba(191,219,254,0.3)] z-10" fill="none" preserveaspectratio="none" viewbox="0 0 100 100">
<polygon fill="rgba(255,255,255,0.02)" points="10,100 50,20 90,100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></polygon>
<polygon fill="rgba(255,255,255,0.08)" points="50,20 50,100 15,100" stroke="none"></polygon>
<polygon fill="rgba(30,58,138,0.1)" points="30,100 60,40 85,100" stroke="none"></polygon>
<path d="M45,30 L50,20 L55,30 Z" fill="rgba(255,255,255,0.5)" filter="blur(2px)"></path>
</svg>
</div>

<div className="absolute bottom-12 text-center w-full px-8">
<p className="text-xs text-blue-200/50 uppercase tracking-[0.2em] mb-1">Born of the</p>
<p className="text-base text-zinc-300 font-serif tracking-tight">Fifth Element</p>
</div>
</div>

<div className="w-[60%] h-2 mx-auto bg-blue-600/30 blur-xl mt-6 rounded-[100%]"></div>
</div>
</section>

<section className="w-full max-w-md mx-auto px-6 text-center">
<h3 className="font-serif text-3xl text-white tracking-tight mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                Join the Expedition
            </h3>
<p className="text-lg text-zinc-400/80 mb-10">
                Secure your allocation of the first celestial drop.
            </p>
<form className="flex flex-col gap-4">
<div className="relative flex items-center">
<iconify-icon className="absolute left-5 text-zinc-500" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-full py-4 pl-14 pr-6 text-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/[0.05] transition-all" placeholder="Enter your email address" type="email"/>
</div>
<button className="w-full bg-blue-50 hover:bg-white text-zinc-950 rounded-full py-4 text-lg font-medium transition-colors flex items-center justify-center gap-2 group" type="button">
                    Notify Me
                    <iconify-icon className="text-zinc-700 group-hover:text-zinc-950 transition-colors" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
<p className="text-xs text-zinc-600 uppercase tracking-[0.15em] mt-8">
                Strictly limited to 500 vessels
            </p>
</section>
</main>

<footer className="relative z-10 w-full border-t border-white/5 py-12 mt-20">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4 opacity-50">
<svg className="text-zinc-400" fill="none" height="16" viewbox="0 0 48 64" width="12">
<circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2"></circle>
<line stroke="currentColor" strokeWidth="2" x1="24" x2="24" y1="26" y2="44"></line>
<line stroke="currentColor" strokeWidth="2" x1="2" x2="46" y1="36" y2="36"></line>
<polygon fill="none" points="17,48 31,48 24,58" stroke="currentColor" strokeWidth="2"></polygon>
</svg>
<span className="text-base font-serif tracking-tight text-zinc-400">AETHERIS</span>
</div>
<div className="flex gap-8 text-base text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Manifesto</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Elements</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
