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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] opacity-20"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-medium tracking-tighter text-white hover:text-white/80 transition-colors" href="#">
                GARHWAL<span className="text-slate-500">FOLK</span>
</a>
<div className="flex items-center gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">Story</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<main className="relative z-10">

<section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 mountain-glow border-b border-white/5" id="home">
<div className="max-w-3xl text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-emerald-400/90 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    From Pauri Garhwal
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent pb-2">
                    Voices of the Valley.<br/>
                    Stories of the Soil.
                </h1>
<p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
                    Preserving the soul of Uttarakhand through melody. Writing and singing for the rural hearts of the Himalayas.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group h-10 px-6 rounded-md bg-white text-black text-xs font-medium hover:bg-slate-200 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play" strokeWidth="1.5" width="14"></iconify-icon>
                        Latest Release
                    </button>
<button className="h-10 px-6 rounded-md border border-white/10 bg-transparent text-slate-300 text-xs font-medium hover:bg-white/5 transition-all">
                        View Discography
                    </button>
</div>
</div>

<div className="mt-20 w-full max-w-lg p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="lucide:music" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-white truncate">Mero Pahad (My Mountain)</div>
<div className="text-[10px] text-slate-500 truncate">Acoustic Folk Session</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer transition-colors" icon="lucide:skip-back" width="16"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
<iconify-icon icon="lucide:pause" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer transition-colors" icon="lucide:skip-forward" width="16"></iconify-icon>
</div>
</div>

<div className="mt-4 flex items-center gap-3 group">
<span className="text-[10px] text-slate-600 font-mono">1:24</span>
<div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[45%] bg-white group-hover:bg-emerald-400 transition-colors"></div>
</div>
<span className="text-[10px] text-slate-600 font-mono">3:42</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5" id="about">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="flex items-center gap-2 text-emerald-500/80 text-xs font-medium uppercase tracking-wide">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                        Pauri Garhwal
                    </div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                        Rooted in the hills,<br/>
                        Echoing for the people.
                    </h2>
<div className="space-y-4 text-sm font-light leading-relaxed text-slate-400">
<p>
                            Born in the misty terrains of Pauri, my music is not just entertainment; it is a documentation of our lifestyle. The winding roads, the terrace farms, and the silence of the pine forests find a voice in my lyrics.
                        </p>
<p>
                            I write specifically for the rural communities—stories of migration, love, harvest, and the simple joys of village life. Using traditional instruments blended with contemporary acoustic arrangements, I aim to keep our dialect alive for the next generation.
                        </p>
</div>

<div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
<div>
<div className="text-xl font-medium text-white">50+</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Original Songs</div>
</div>
<div>
<div className="text-xl font-medium text-white">10yrs</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Writing</div>
</div>
<div>
<div className="text-xl font-medium text-white">100%</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide mt-1">Pahadi Soul</div>
</div>
</div>
</div>

<div className="relative h-80 md:h-96 w-full bg-white/[0.02] rounded-2xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-start z-10">
<iconify-icon className="text-white/20" icon="lucide:mic-2" strokeWidth="1" width="32"></iconify-icon>
<iconify-icon className="text-white/20" icon="lucide:waves" strokeWidth="1" width="32"></iconify-icon>
</div>
<div className="space-y-2 z-10">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
<div className="h-px w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent mx-auto"></div>
</div>
<div className="text-center z-10">
<p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Acoustic / Folk / Regional</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-xl mx-auto text-center space-y-4 mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Connect for Collaborations</h2>
<p className="text-sm text-slate-400 font-light">Available for events in Uttarakhand and songwriting workshops.</p>
</div>
<div className="max-w-md mx-auto bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wide text-slate-500 font-medium ml-1">Name</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-900 transition-all placeholder:text-slate-700" placeholder="Enter your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wide text-slate-500 font-medium ml-1">Email</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-900 transition-all placeholder:text-slate-700" placeholder="hello@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wide text-slate-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-900 transition-all placeholder:text-slate-700 resize-none" placeholder="Tell me about your event or request..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full h-10 bg-white text-black text-xs font-medium rounded-md hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="button">
                            Send Message
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
<div className="flex justify-center gap-6 mt-12">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-8 text-center">
<p className="text-[10px] text-slate-600 font-mono">
            © 2024 Garhwal Folk. Made in Uttarakhand.
        </p>
</footer>

    </>
  );
}
