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
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Theme Toggle Logic
        const html = document.documentElement;
        
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                html.classList.toggle('dark');
                const isDark = html.classList.contains('dark');
                
                // Update all theme icons
                document.querySelectorAll('.theme-icon').forEach(icon => {
                    icon.setAttribute('icon', isDark ? 'solar:sun-linear' : 'solar:moon-linear');
                });
            });
        });

        // Language Toggle Logic (Minimal Text Swap)
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const currentLang = e.target.innerText.trim();
                const newLang = currentLang === 'EN' ? 'IT' : 'EN';
                
                // Update all language toggles
                document.querySelectorAll('.lang-toggle').forEach(el => {
                    el.innerText = newLang;
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-emerald-300/30 dark:from-emerald-900/20 to-transparent blur-[120px] animate-drift transition-colors duration-700"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-amber-300/20 dark:from-amber-900/10 to-transparent blur-[100px] animate-drift transition-colors duration-700" style={{animationDelay: '-10s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="dark:text-zinc-100 transition-colors flex flex-col items-start text-zinc-900" href="#">
<span className="text-[10px] font-sans uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 leading-none mb-0.5">Sorgente</span>
<span className="text-xl font-serif tracking-tight leading-none">Sant'Elena</span>
</a>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-500 dark:text-zinc-400">
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#heritage">Heritage</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#santelena">Sant'Elena</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#marzia">Marzia</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#contact">Source</a>
<div className="flex items-center gap-4 pl-8 border-l border-zinc-200 dark:border-white/10 transition-colors">
<button className="lang-toggle text-xs font-medium tracking-widest hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors w-6 text-center">EN</button>
<button className="theme-toggle hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center">
<iconify-icon className="theme-icon" icon="solar:sun-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex md:hidden items-center gap-5 text-zinc-500 dark:text-zinc-400">
<button className="lang-toggle text-xs font-medium tracking-widest hover:text-zinc-900 dark:hover:text-white transition-colors">EN</button>
<button className="theme-toggle hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center">
<iconify-icon className="theme-icon" icon="solar:sun-linear" width="18"></iconify-icon>
</button>
<button className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24 flex flex-col items-center">

<section className="w-full max-w-7xl mx-auto px-6 min-h-[70vh] flex flex-col justify-center items-center text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-white/5 border border-zinc-300/50 dark:border-white/10 text-xs font-light text-zinc-600 dark:text-zinc-400 mb-8 backdrop-blur-md transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-glow"></span>
                Drawn from the depths of Chianciano Terme
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-zinc-900 dark:text-zinc-100 tracking-tighter leading-[1.1] max-w-4xl mb-6 transition-colors">
                Purity <span className="italic font-serif text-zinc-400 dark:text-zinc-500">forged</span> by time.
            </h1>
<p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed mb-12 transition-colors">
                Two distinct mineral profiles born from the same sacred land. A fluid narrative bridging the ancient mysteries of the Etruscans with the enlightened balance of the Renaissance.
            </p>
<a className="group flex items-center gap-2 text-sm text-zinc-900 dark:text-zinc-100 font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" href="#collection">
                Explore the Source
                <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
</section>

<div className="w-full max-w-7xl px-6 py-12">
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 dark:via-white/10 to-transparent transition-colors"></div>
</div>

<section className="w-full max-w-7xl mx-auto px-6 py-12" id="collection">
<h2 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight mb-12 text-center transition-colors">The Duality of Water</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 backdrop-blur-sm p-8 md:p-12 transition-all hover:bg-white/90 dark:hover:bg-zinc-900/80">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 dark:from-orange-900/20 via-transparent to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-16">
<iconify-icon className="text-orange-600/50 dark:text-orange-900/50 transition-colors" icon="solar:cup-linear" width="28"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase transition-colors">The Earth</span>
</div>
<div className="mt-auto">
<h3 className="text-4xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight mb-3 transition-colors">Sant'Elena</h3>
<h4 className="text-sm text-orange-600/80 dark:text-orange-200/60 font-medium tracking-wide mb-6 transition-colors">THE ETRUSCAN ROOTS</h4>
<p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 max-w-sm transition-colors">
                                Grounded, mineral-rich, and deeply connected to the ancient soil. Sant'Elena channels the raw, earthy strength of the Etruscan civilization that first recognized its healing properties. A structural, robust profile.
                            </p>
<div className="flex gap-4 border-t border-zinc-200 dark:border-white/5 pt-6 transition-colors">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Character</span>
<span className="text-sm text-zinc-800 dark:text-zinc-200 font-light transition-colors">Oligomineral</span>
</div>
<div className="w-px bg-zinc-200 dark:bg-white/5 transition-colors"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Source</span>
<span className="text-sm text-zinc-800 dark:text-zinc-200 font-light transition-colors">Deep Aquifer</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 backdrop-blur-sm p-8 md:p-12 transition-all hover:bg-white/90 dark:hover:bg-zinc-900/80">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 dark:from-blue-900/20 via-transparent to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-16">
<iconify-icon className="text-blue-500/50 dark:text-blue-200/50 transition-colors" icon="solar:star-fall-minimalistic-linear" width="28"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase transition-colors">The Light</span>
</div>
<div className="mt-auto">
<h3 className="text-4xl font-serif text-zinc-900 dark:text-zinc-100 tracking-tight mb-3 transition-colors">Marzia</h3>
<h4 className="text-sm text-blue-600/80 dark:text-blue-200/60 font-medium tracking-wide mb-6 transition-colors">THE RENAISSANCE AWAKENING</h4>
<p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 max-w-sm transition-colors">
                                Light, perfectly balanced, and clarifying. Marzia flows with the grace and intellectual clarity of the Renaissance. It is water reborn—sculpted like marble, capturing the essence of pure light and harmony.
                            </p>
<div className="flex gap-4 border-t border-zinc-200 dark:border-white/5 pt-6 transition-colors">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Character</span>
<span className="text-sm text-zinc-800 dark:text-zinc-200 font-light transition-colors">Ultra-Light</span>
</div>
<div className="w-px bg-zinc-200 dark:bg-white/5 transition-colors"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">Source</span>
<span className="text-sm text-zinc-800 dark:text-zinc-200 font-light transition-colors">Surface Spring</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">Anatomy of a Drop</h2>
<p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-md transition-colors">
                        Beyond history lies science. Our springs are strictly monitored to ensure the delicate mineral balance remains untouched, from the aquifer to the glass.
                    </p>
</div>
<div className="flex-1 w-full grid grid-cols-2 gap-4">
<div className="p-6 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 flex flex-col gap-4 transition-colors">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div>
<div className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight transition-colors">0%</div>
<div className="text-xs text-zinc-500">Artificial Additives</div>
</div>
</div>
<div className="p-6 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 flex flex-col gap-4 transition-colors">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 transition-colors" icon="solar:test-tube-linear" width="24"></iconify-icon>
<div>
<div className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight transition-colors">pH 7.2</div>
<div className="text-xs text-zinc-500">Perfectly Balanced</div>
</div>
</div>
<div className="p-6 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 flex flex-col gap-4 transition-colors">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 transition-colors" icon="solar:waterdrops-linear" width="24"></iconify-icon>
<div>
<div className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight transition-colors">Micro</div>
<div className="text-xs text-zinc-500">Filtration</div>
</div>
</div>
<div className="p-6 rounded-xl bg-zinc-100/50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 flex flex-col gap-4 transition-colors">
<iconify-icon className="text-zinc-400 dark:text-zinc-500 transition-colors" icon="solar:leaf-linear" width="24"></iconify-icon>
<div>
<div className="text-xl font-medium text-zinc-900 dark:text-zinc-200 tracking-tight transition-colors">100%</div>
<div className="text-xs text-zinc-500">Recyclable Glass</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 pt-16 pb-8 transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-zinc-900 dark:text-zinc-100 font-medium tracking-tighter text-xl mb-4 block transition-colors" href="#">S S E</a>
<p className="text-sm text-zinc-600 dark:text-zinc-500 font-light max-w-sm transition-colors">
                        Sorgente Sant'Elena. Bottling the essence of Chianciano Terme, preserving history in every drop.
                    </p>
</div>
<div>
<h5 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-4 tracking-wide transition-colors">The Brands</h5>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">Sant'Elena</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">Marzia</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">Composition</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-4 tracking-wide transition-colors">Company</h5>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-200 dark:border-white/5 pt-8 text-xs text-zinc-500 dark:text-zinc-600 font-light transition-colors">
<p>© 2024 Sorgente Sant'Elena SpA. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
