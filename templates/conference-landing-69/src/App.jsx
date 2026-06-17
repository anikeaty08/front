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
      

<header className="relative z-50 border-b border-zinc-200/80 bg-white/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-lg flex items-center gap-2 text-zinc-900">
<div className="w-6 h-6 rounded bg-gradient-to-br from-zinc-700 to-zinc-950 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
                NEXUS
            </div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Overview</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Speakers</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Schedule</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Venue</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">
                    Reserve Seat
                </button>
</div>
</div>
</header>

<main className="flex-grow relative z-10">

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Event stage background" className="w-full h-full object-cover object-top opacity-[0.15]" src="https://images.unsplash.com/photo-1540575467063-112007323308?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-50/20 via-zinc-50/80 to-zinc-50"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-50/50 via-transparent to-zinc-50/50"></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-zinc-200/80 text-xs font-medium text-zinc-600 mb-8 backdrop-blur-sm shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse"></span>
                    Early bird tickets now available
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-500 leading-tight pb-2">
                    Where design meets <br className="hidden md:block"/> the future of engineering.
                </h1>
<p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    Join over 2,000 industry leaders for an immersive three-day experience exploring the intersection of interfaces, artificial intelligence, and human connection.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] flex items-center justify-center gap-2">
                        Get Tickets
                        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium text-zinc-700 border border-zinc-200 bg-white/60 hover:bg-white hover:shadow-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon height="18" icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch 2023 Keynote
                    </button>
</div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-sm font-medium text-zinc-600">
<div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-zinc-200/80 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-zinc-500" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
                        November 12-14, 2024
                    </div>
<div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-zinc-200/80 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-zinc-500" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
                        Pier 27, San Francisco
                    </div>
</div>

<div className="mt-16 md:mt-24 relative max-w-4xl mx-auto w-full group">
<div className="absolute -inset-1.5 bg-gradient-to-b from-zinc-200/60 to-transparent rounded-[2rem] blur-xl opacity-70"></div>
<div className="relative p-2 rounded-[2rem] bg-white/40 border border-zinc-200/50 backdrop-blur-md shadow-2xl">
<img alt="Event keynote presentation" className="rounded-[1.5rem] w-full object-cover aspect-video border border-zinc-200/50 shadow-sm" src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&amp;fit=crop&amp;q=80&amp;w=1200&amp;h=675"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16 text-center md:text-left">
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-4">An experience designed <br/> for creators.</h2>
<p className="text-sm text-zinc-500 max-w-md font-medium">Every aspect of Nexus is curated to foster learning, networking, and inspiration among the best in the industry.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-700" height="24" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-zinc-900">Visionary Keynotes</h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow font-medium">Hear from pioneers who are actively shaping the next generation of digital products and pushing the boundaries of what's possible.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-700" height="24" icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-zinc-900">Technical Deep Dives</h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow font-medium">Hands-on masterclasses and technical breakdowns designed to give you practical skills you can apply to your work immediately.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col hover:border-zinc-300 hover:shadow-md transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-zinc-700" height="24" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-zinc-900">Curated Networking</h3>
<p className="text-sm text-zinc-500 leading-relaxed flex-grow font-medium">Connect with peers, potential collaborators, and industry veterans at exclusive evening mixers and roundtable discussions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-2">Featured Speakers</h2>
<p className="text-sm text-zinc-500 font-medium">Learn from the minds behind your favorite products.</p>
</div>
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-100">
                        View all 40+ speakers
                        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-zinc-100 border border-zinc-200/60 mb-4 overflow-hidden relative">
<img alt="Elena Rodriguez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-base font-medium text-zinc-900">Elena Rodriguez</h4>
<p className="text-sm text-zinc-500">VP of Design, Vercel</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-zinc-100 border border-zinc-200/60 mb-4 overflow-hidden relative">
<img alt="Marcus Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-base font-medium text-zinc-900">Marcus Chen</h4>
<p className="text-sm text-zinc-500">Founder, BuildAI</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-zinc-100 border border-zinc-200/60 mb-4 overflow-hidden relative">
<img alt="Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-base font-medium text-zinc-900">Sarah Jenkins</h4>
<p className="text-sm text-zinc-500">Lead Engineer, Stripe</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl bg-zinc-100 border border-zinc-200/60 mb-4 overflow-hidden relative">
<img alt="David Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h4 className="text-base font-medium text-zinc-900">David Park</h4>
<p className="text-sm text-zinc-500">Design Director, Linear</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-200 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
</div>
<span className="font-medium tracking-tighter text-sm text-zinc-500">NEXUS</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Code of Conduct</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:hashtag-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-zinc-400 font-medium">
                © 2024 Nexus Event Series. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
