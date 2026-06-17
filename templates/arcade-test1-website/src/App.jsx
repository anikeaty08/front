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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Live Time Tracker
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById('live-time').textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Scroll Reveal / Inventory Animation
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Trigger once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-inventory').forEach((element) => {
            observer.observe(element);
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
      

<nav className="fixed top-0 w-full z-50 bg-[#020101]/80 backdrop-blur-md border-b border-red-900/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center bg-red-900/20 rounded border border-red-500/30">
<span className="text-lg font-bold text-red-500">A</span>
</div>
<span className="font-bold text-sm tracking-tight text-white uppercase">Arcade Society</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400 uppercase tracking-wide">
<a className="hover:text-red-500 transition-colors duration-300" href="#games">Games</a>
<a className="hover:text-red-500 transition-colors duration-300" href="#events">Events</a>
<a className="hover:text-red-500 transition-colors duration-300" href="#infrastructure">Infrastructure</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-red-950/30 border border-red-900/50 text-[10px] font-bold text-red-400 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    System Online
                </div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden bg-[#020101]">

<div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

<div className="absolute top-[15%] left-[5%] md:left-[10%] w-48 md:w-64 aspect-video rounded-lg opacity-20 border border-red-500/20 shadow-2xl shadow-red-900/20 animate-float-1 overflow-hidden z-0">
<img alt="Event 1" className="w-full h-full object-cover grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-[40%] right-[5%] md:right-[12%] w-40 md:w-56 aspect-square rounded-lg opacity-10 border border-red-500/20 shadow-2xl shadow-red-900/20 animate-float-2 overflow-hidden z-0">
<img alt="Event 2" className="w-full h-full object-cover grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-[20%] left-[10%] w-56 aspect-video rounded-lg opacity-15 border border-red-500/20 shadow-2xl shadow-red-900/20 animate-float-3 overflow-hidden z-0">
<img alt="Event 3" className="w-full h-full object-cover grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1593305841991-05c29736f87e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.08),transparent_70%)]"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

<div className="mb-8 reveal-inventory is-visible">
<div className="px-3 py-1 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-sm inline-flex items-center gap-2">
<svg className="lucide lucide-crosshair w-3 h-3 text-red-500" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
<span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Collegiate Esports Division</span>
</div>
</div>

<h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 reveal-inventory delay-100 uppercase leading-none text-glow is-visible">
                Arcade<br/>
<span className="text-red-600">Society</span>
</h1>

<p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed reveal-inventory delay-200 font-light is-visible">
                The premier gaming ecosystem. Hosting elite tournaments for BGMI, Valorant, Free Fire, and beyond.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-inventory delay-300 w-full sm:w-auto is-visible">
<button className="w-full sm:w-auto h-12 px-8 rounded-none border-l-2 border-red-600 bg-gradient-to-r from-red-900/40 to-transparent text-white text-sm font-bold uppercase tracking-wider hover:bg-red-900/60 transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
<span className="absolute inset-0 bg-red-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
<span className="relative">Enter Arena</span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-red-500 relative" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
<div className="relative w-12 h-12 flex items-center justify-center">
<div className="absolute inset-0 bg-red-500 rounded-full radar-circle"></div>
<div className="absolute inset-0 bg-red-500 rounded-full radar-circle" style={{animationDelay: '1s'}}></div>
<svg className="lucide lucide-wifi w-5 h-5 text-red-500 relative z-10" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<span className="text-[10px] text-red-500 font-mono tracking-widest uppercase">Connection Stable</span>
</div>
</section>

<section className="border-y border-red-900/20 bg-black/50 py-6 overflow-hidden relative z-20">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020101] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020101] to-transparent z-10"></div>
<div className="flex w-[200%] animate-scroll hover:pause">

<div className="flex items-center justify-around w-1/2 gap-12 px-12">

<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#f40009] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:redbull"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#76b900] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:nvidia"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#00539b] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:asus"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<svg className="text-4xl text-neutral-600 group-hover:text-[#00B8FC] transition-colors duration-300 grayscale group-hover:grayscale-0" data-icon-set="simple-icons" data-simple-icons="logitechg" height="36" style={{}} viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M12.566 0Q10.083 0 7.89.941A12.1 12.1 0 0 0 4.03 3.51a12 12 0 0 0-2.582 3.822Q.482 9.503.506 11.988q0 2.486.941 4.68c.854 1.97 2.677 4.771 6.442 6.367q2.194.965 4.677.965v-4.992q-1.47 0-2.75-.555a7.1 7.1 0 0 1-3.738-3.74a6.96 6.96 0 0 1 0-5.451a7.1 7.1 0 0 1 3.738-3.739a6.8 6.8 0 0 1 2.75-.554Zm.17 9.842v4.943h5.813V20.6h4.945V9.842Z" fill="currentColor"></path></svg>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#a0c101] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:monster"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#1c77c3] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:unstop"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#5865F2] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:discord"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-around w-1/2 gap-12 px-12">
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#f40009] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:redbull"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#76b900] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:nvidia"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#00539b] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:asus"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#00B8FC] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:logitechg"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#a0c101] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:monster"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#1c77c3] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:unstop"></iconify-icon>
</div>
<div className="group flex flex-col items-center gap-2 cursor-pointer">
<iconify-icon className="text-4xl text-neutral-600 group-hover:text-[#5865F2] transition-colors duration-300 grayscale group-hover:grayscale-0" icon="simple-icons:discord"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#020101]" id="games">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-16 reveal-inventory">
<div>
<h2 className="text-3xl font-bold text-white tracking-tight mb-2">Active Roster</h2>
<p className="text-sm text-neutral-500">Currently deployed competitive titles</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0a0505] border border-white/5 rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory delay-100">
<div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-3xl text-neutral-500 group-hover:text-red-500 transition-colors" icon="mdi:controller"></iconify-icon>
<span className="text-[10px] font-bold text-neutral-600 uppercase border border-neutral-800 px-2 py-1 rounded">Mobile</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">BGMI</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Battle Royale</p>
</div>
</div>
</div>

<div className="group relative bg-[#0a0505] border border-white/5 rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory delay-200">
<div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-3xl text-neutral-500 group-hover:text-red-500 transition-colors" icon="simple-icons:valorant"></iconify-icon>
<span className="text-[10px] font-bold text-neutral-600 uppercase border border-neutral-800 px-2 py-1 rounded">PC</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">Valorant</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Tac Shooter</p>
</div>
</div>
</div>

<div className="group relative bg-[#0a0505] border border-white/5 rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory delay-300">
<div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-3xl text-neutral-500 group-hover:text-red-500 transition-colors" icon="mdi:fire"></iconify-icon>
<span className="text-[10px] font-bold text-neutral-600 uppercase border border-neutral-800 px-2 py-1 rounded">Mobile</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">Free Fire</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Battle Royale</p>
</div>
</div>
</div>

<div className="group relative bg-[#0a0505] border border-white/5 rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory">
<div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-3xl text-neutral-500 group-hover:text-red-500 transition-colors" icon="simple-icons:rocketleague"></iconify-icon>
<span className="text-[10px] font-bold text-neutral-600 uppercase border border-neutral-800 px-2 py-1 rounded">PC / Console</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">Rocket League</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Sports</p>
</div>
</div>
</div>

<div className="group relative bg-[#0a0505] border border-white/5 rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory delay-100">
<div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-3xl text-neutral-500 group-hover:text-red-500 transition-colors" icon="mdi:cricket"></iconify-icon>
<span className="text-[10px] font-bold text-neutral-600 uppercase border border-neutral-800 px-2 py-1 rounded">Mobile</span>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1 tracking-tight">Real Cricket 24</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider">Sports Simulation</p>
</div>
</div>
</div>

<div className="group relative bg-[#0a0505] border border-white/5 border-dashed rounded-xl p-1 overflow-hidden hover:border-red-500/50 transition-all duration-300 reveal-inventory delay-200">
<div className="relative h-full p-6 flex flex-col justify-center items-center z-10 text-center">
<iconify-icon className="text-3xl text-neutral-700 mb-2 group-hover:text-white transition-colors" icon="lucide:plus"></iconify-icon>
<h3 className="text-lg font-bold text-neutral-600 group-hover:text-white transition-colors tracking-tight">And More</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 relative border-t border-red-900/20 bg-[#020101]" id="events">
<div className="max-w-7xl mx-auto px-6">

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden group reveal-inventory border border-white/10">

<div className="absolute inset-0 bg-neutral-900">
<img alt="Esports Setup" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#020101] via-black/50 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">Registration Open</span>
<span className="text-[10px] font-medium text-neutral-300 uppercase tracking-wider flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Starts Nov 24
                        </span>
</div>
<h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">Winter Varsity Cup</h3>
<p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed font-light">
                        Inter-college tournament featuring a ₹50,000 prize pool across Valorant and BGMI. 
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-red-900/20 bg-[#020101] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 flex items-center justify-center bg-red-600 rounded-sm">
<span className="text-xs font-bold text-black">A</span>
</div>
<span className="font-bold text-sm tracking-tight text-white uppercase">Arcade Society</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs font-light">Leveling up the collegiate gaming scene.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Connect</h4>
<ul className="space-y-2 text-neutral-500 text-sm">
<li><a className="hover:text-red-500 transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© ARCADE SOCIETY 2024</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg shadow-black/50">
<div className="flex flex-col items-end">
<span className="text-lg font-bold text-white leading-none font-mono tracking-wider" id="live-time">19:11:08</span>
<span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">IST / Live</span>
</div>
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
</div>
</div>


    </>
  );
}
