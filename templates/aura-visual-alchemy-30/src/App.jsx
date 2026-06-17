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

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="aura-orb absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-indigo-900/20 rounded-full mix-blend-screen opacity-50"></div>
<div className="aura-orb absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-fuchsia-900/10 rounded-full mix-blend-screen opacity-40 animation-delay-2000" style={{animationDelay: '-2s'}}></div>
<div className="aura-orb absolute top-1/3 right-1/3 w-[25rem] h-[25rem] bg-teal-900/10 rounded-full mix-blend-screen opacity-30 animation-delay-4000" style={{animationDelay: '-5s'}}></div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-center">
<div className="glass-nav flex items-center gap-8 md:gap-12 px-8 py-3 rounded-full border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/40">
<a className="text-zinc-100 font-medium tracking-tight text-sm hover:text-white transition-colors" href="#">WORK</a>
<a className="text-zinc-100 font-medium tracking-tight text-sm hover:text-white transition-colors" href="#">ESSENCE</a>
<div className="px-2">
<span className="font-semibold tracking-tighter text-zinc-100 text-lg">AURA</span>
</div>
<a className="text-zinc-100 font-medium tracking-tight text-sm hover:text-white transition-colors" href="#">ALCHEMY</a>
<a className="text-zinc-100 font-medium tracking-tight text-sm hover:text-white transition-colors" href="#">CONTACT</a>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto pt-20">
<div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-zinc-300 tracking-wide backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                    AVAILABLE FOR COMMISSIONS
                </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[0.9] opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                Designing the <br/>
<span className="italic font-light opacity-80">Intangible.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-light tracking-tight opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                Crafting digital whispers of light and form. Where intuition meets interface in the quiet space between pixels.
            </p>
<div className="mt-12 flex flex-col items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
<div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
<span className="text-xs text-zinc-600 tracking-widest uppercase">Explore</span>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-indigo-500/10 rounded-sm blur-2xl transition-opacity opacity-0 group-hover:opacity-100 duration-700"></div>

<div className="relative overflow-hidden rounded-sm aspect-[3/4] border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>

<img alt="Abstract texture" className="object-cover w-full h-full grayscale contrast-125 brightness-75 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col gap-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">The Essence</h2>
<div className="space-y-6 text-lg font-light leading-relaxed text-zinc-400">
<p>
                        I don't just build interfaces; I translate feelings into pixels. My process is a conversation with the void, extracting structure from chaos.
                    </p>
<p>
                        In a world of noise, I design silence. My work focuses on the "aura" of a product—the subconscious emotional resonance that lingers long after the tab is closed.
                    </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm tracking-wide" href="#">
                        READ THE MANIFESTO <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24">
<div className="flex justify-between items-end mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">Visual Alchemy</h2>
<span className="text-xs text-zinc-600 uppercase tracking-widest hidden md:block">Methodology</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 mb-4 text-indigo-300/80 group-hover:text-indigo-200 transition-colors">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Aesthetic Synthesis</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Blending brutalism with ethereal grace to create visual tension.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 mb-4 text-rose-300/80 group-hover:text-rose-200 transition-colors">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">System Architecture</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Scalable component libraries that breathe and adapt organically.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 mb-4 text-teal-300/80 group-hover:text-teal-200 transition-colors">
<i className="w-6 h-6" data-lucide="move"></i>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Motion Poetry</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Choreographing micro-interactions that feel like natural physics.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300">
<div className="w-8 h-8 mb-4 text-orange-300/80 group-hover:text-orange-200 transition-colors">
<i className="w-6 h-6" data-lucide="eye"></i>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">User Intuition</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Predicting desire paths before they are walked.</p>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-24 text-center">Selected Visions</h2>
<div className="flex flex-col gap-32">

<article className="project-card group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
<div className="md:col-span-7 relative order-2 md:order-1">
<div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl shadow-black/50">

<img alt="Project 1" className="project-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply"></div>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-center order-1 md:order-2 pl-0 md:pl-8">
<span className="text-xs text-indigo-400 font-medium tracking-widest mb-3">01 / FINTECH</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-indigo-200 transition-colors">Obsidian Flow</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-6">A liquidity aggregator interface designed with glass optics and dark mode supremacy.</p>
<div className="flex gap-4">
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">UI/UX</span>
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Motion</span>
</div>
</div>
</article>

<article className="project-card group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
<div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-8">
<span className="text-xs text-rose-400 font-medium tracking-widest mb-3">02 / E-COMMERCE</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-rose-200 transition-colors">Velvet Skin</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-6">High-end beauty branding featuring visceral textures and fluid navigation patterns.</p>
<div className="flex gap-4">
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Art Direction</span>
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Web</span>
</div>
</div>
<div className="md:col-span-7 relative">
<div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl shadow-black/50">
<img alt="Project 2" className="project-image w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply"></div>
</div>
</div>
</article>

<article className="project-card group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
<div className="md:col-span-7 relative order-2 md:order-1">
<div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-white/5 shadow-2xl shadow-black/50">
<img alt="Project 3" className="project-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply"></div>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-center order-1 md:order-2 pl-0 md:pl-8">
<span className="text-xs text-teal-400 font-medium tracking-widest mb-3">03 / ARCHITECTURE</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4 group-hover:text-teal-200 transition-colors">Void Space</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-6">Minimalist portfolio for an architectural firm focusing on negative space and light.</p>
<div className="flex gap-4">
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Brand</span>
<span className="text-xs text-zinc-600 border border-zinc-800 px-2 py-1 rounded">Development</span>
</div>
</div>
</article>
</div>
<div className="mt-32 text-center">
<a className="inline-block px-8 py-3 rounded-full bg-white text-zinc-950 font-medium text-sm tracking-tight hover:bg-zinc-200 transition-colors" href="#">
                    VIEW ARCHIVE
                </a>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-zinc-900/10 backdrop-blur-lg">
<div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-1">AURA</h4>
<p className="text-xs text-zinc-600">© 2024 Digital Artifacts.</p>
</div>
<div className="flex gap-8">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>
</main>
<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
