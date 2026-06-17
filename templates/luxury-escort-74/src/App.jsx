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
      

<div className="fixed top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#d4c2a5]/[0.03] via-transparent to-transparent pointer-events-none z-0"></div>

<nav className="sticky top-0 z-50 glass-nav">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-24"> 

<div className="flex items-center gap-8">
<h1 className="font-display text-3xl tracking-tight font-medium text-white uppercase tracking-[0.15em]">
              LaFess
            </h1>
<div className="hidden md:flex items-center gap-3 border-l border-white/10 pl-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#d4c2a5]/60"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4c2a5]"></span>
</span>
<p className="text-xs text-[#d4c2a5]/80 font-light uppercase tracking-widest">
                1,248 Online
              </p>
</div>
</div>

<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-10 mr-6 text-sm font-light text-white/60 tracking-widest uppercase text-xs">
<a className="text-[#d4c2a5] border-b border-[#d4c2a5]/30 pb-1 transition" href="#">
                Discover
              </a>
<a className="hover:text-[#d4c2a5] transition duration-300" href="#">Experiences</a>
<a className="hover:text-[#d4c2a5] transition duration-300" href="#">Concierge</a>
</div>

<button className="relative p-3 rounded-full glass-panel hover:bg-white/5 transition text-white/70 hover:text-[#d4c2a5] duration-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<button className="relative p-3 rounded-full glass-panel hover:bg-white/5 transition text-white/70 hover:text-[#d4c2a5] duration-300">
<span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#d4c2a5] rounded-full"></span>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<button className="w-10 h-10 rounded-full bg-white/10 p-[1px] hover:border-[#d4c2a5] border border-transparent transition duration-300 ml-2">
<div className="w-full h-full rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
</div>
</button>
</div>
</div>
</div>
</nav>

<div className="relative z-40 bg-[#050505]/90 backdrop-blur-xl border-b border-[#d4c2a5]/10 pt-4 pb-4">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex gap-6 overflow-x-auto no-scrollbar items-center">
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-[#d4c2a5] border-b border-[#d4c2a5] transition">
            All Profiles
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            VIP Exclusive
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            Fine Dining
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            Travel Companions
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            Private Events
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            Available Now
          </button>
<button className="pb-2 text-xs uppercase tracking-[0.2em] font-normal whitespace-nowrap text-white/40 hover:text-[#d4c2a5] border-b border-transparent hover:border-[#d4c2a5]/30 transition duration-300">
            New Additions
          </button>
</div>
</div>
</div>

<div className="relative z-30 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
<div className="glass-panel rounded-lg flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-white/5 shadow-2xl">

<div className="flex-1 w-full flex items-center gap-4 px-8 py-5 group relative">
<iconify-icon className="text-[#d4c2a5]" icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Country</label>
<div className="relative w-full">
<select className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-light">
<option className="bg-[#0a0a0c] text-white" value="">Select Country</option>
<option className="bg-[#0a0a0c] text-white" value="us">United States</option>
<option className="bg-[#0a0a0c] text-white" value="fr">France</option>
<option className="bg-[#0a0a0c] text-white" value="uk">United Kingdom</option>
<option className="bg-[#0a0a0c] text-white" value="it">Italy</option>
<option className="bg-[#0a0a0c] text-white" value="ae">United Arab Emirates</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 w-full flex items-center gap-4 px-8 py-5 group relative">
<iconify-icon className="text-[#d4c2a5]" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[10px] uppercase tracking-widest text-white/40 mb-1">City</label>
<div className="relative w-full">
<select className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-light">
<option className="bg-[#0a0a0c] text-white" value="">Select City</option>
<option className="bg-[#0a0a0c] text-white" value="ny">New York</option>
<option className="bg-[#0a0a0c] text-white" value="pa">Paris</option>
<option className="bg-[#0a0a0c] text-white" value="ld">London</option>
<option className="bg-[#0a0a0c] text-white" value="ml">Milan</option>
<option className="bg-[#0a0a0c] text-white" value="db">Dubai</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 w-full flex items-center gap-4 px-8 py-5 group relative">
<iconify-icon className="text-[#d4c2a5]" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Category</label>
<div className="relative w-full">
<select className="w-full bg-transparent text-sm text-white focus:outline-none cursor-pointer font-light">
<option className="bg-[#0a0a0c] text-white" value="">Any Category</option>
<option className="bg-[#0a0a0c] text-white" value="vip">VIP Exclusive</option>
<option className="bg-[#0a0a0c] text-white" value="dining">Fine Dining</option>
<option className="bg-[#0a0a0c] text-white" value="travel">Travel Companions</option>
<option className="bg-[#0a0a0c] text-white" value="events">Private Events</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="p-3 w-full md:w-auto flex items-center justify-center">
<button className="w-full md:w-auto bg-[#d4c2a5] text-black px-10 py-4 rounded-md font-medium text-sm tracking-widest uppercase hover:bg-white transition duration-500 shadow-[0_0_20px_rgba(212,194,165,0.2)]">
            Find
          </button>
</div>
</div>
</div>

<main className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col gap-24">

<section>
<div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
<div>
<h2 className="font-display text-3xl tracking-tight font-medium text-white mb-2">
              Featured Selection
            </h2>
<p className="text-sm text-[#d4c2a5]/80 font-light italic">
              Highly sought-after profiles curated for you.
            </p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-white/50 hover:text-[#d4c2a5] transition duration-300 uppercase tracking-[0.2em] text-xs" href="#">
            View Collection
            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Chloe" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Chloe
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Paris, France
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                A lover of arts and fine dining, perfect for an elegant evening
                in the city of lights.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Fine Dining
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Art Events
                </span>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Sasha" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Sasha
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Milan, Italy
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Passionate about fashion and high-end shopping experiences
                across Europe.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Shopping
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Travel
                </span>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Elena" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Elena
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Monaco
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Ideal companion for yacht parties and exclusive VIP events on
                the Riviera.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  VIP Events
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Yachting
                </span>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Mia" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Mia
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                London, UK
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Sophisticated conversationalist, perfect for business dinners
                and gala events.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Business
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Galas
                </span>
</div>
</div>
</article>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-10 border-b border-white/10 pb-6">
<div>
<h2 className="font-display text-3xl tracking-tight font-medium text-white mb-2">
              High Society
            </h2>
<p className="text-sm text-[#d4c2a5]/80 font-light italic">
              Exclusive encounters with sophisticated individuals.
            </p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-white/50 hover:text-[#d4c2a5] transition duration-300 uppercase tracking-[0.2em] text-xs" href="#">
            View Collection
            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Isabella" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Isabella
                </h3>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Rome, Italy
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Brings elegance to every occasion, fluent in three languages and
                well-traveled.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Languages
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Travel
                </span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Sophia" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Sophia
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Geneva, Switzerland
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                A penchant for fine wines and skiing. An absolute delight for
                alpine getaways.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Getaways
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Skiing
                </span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Olivia" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Olivia
                </h3>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                New York, USA
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Captivating presence, turning heads at exclusive Manhattan
                rooftop parties.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Parties
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Social
                </span>
</div>
</div>
</article>
<article className="group cursor-pointer flex flex-col gap-5">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 rounded-sm">
<img alt="Emma" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-grow px-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-display text-2xl tracking-tight font-medium text-white group-hover:text-[#d4c2a5] transition duration-300">
                  Emma
                </h3>
<iconify-icon className="text-[#d4c2a5]" icon="solar:verified-check-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-white/40 font-normal mb-3 uppercase tracking-[0.2em]">
                Dubai, UAE
              </p>
<p className="text-sm text-white/60 font-light mb-5 line-clamp-2 leading-relaxed">
                Exquisite taste in luxury, an ideal match for high-end dining
                and desert excursions.
              </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Dining
                </span>
<span className="px-3 py-1.5 rounded-sm bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] text-[#d4c2a5]/80">
                  Excursions
                </span>
</div>
</div>
</article>
</div>
</section>
</main>

<footer className="border-t border-[#d4c2a5]/10 bg-[#050505] pt-24 pb-12 mt-10">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<h1 className="font-display text-3xl tracking-tight font-medium text-white uppercase tracking-[0.15em] mb-6">
              LaFess
            </h1>
<p className="text-xs text-white/40 font-light leading-relaxed max-w-xs italic">
              The premier platform for curating luxury experiences, exclusive
              companionship, and unforgettable moments worldwide.
            </p>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4c2a5] mb-8">
              Platform
            </h4>
<ul className="flex flex-col gap-5 text-sm font-light text-white/50">
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Discover Profiles
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Elite Memberships
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">City Guides</a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Concierge Services
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4c2a5] mb-8">
              Company
            </h4>
<ul className="flex flex-col gap-5 text-sm font-light text-white/50">
<li>
<a className="hover:text-white transition duration-300" href="#">About Us</a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Apply as Creator
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Press &amp; Media
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">Contact</a>
</li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4c2a5] mb-8">
              Legal
            </h4>
<ul className="flex flex-col gap-5 text-sm font-light text-white/50">
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-white transition duration-300" href="#">
                  Trust &amp; Safety
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#d4c2a5]/10 gap-4">
<p className="text-[10px] uppercase tracking-widest text-white/30 font-light">
            © 2024 LaFess Elite. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-[#d4c2a5]/50 hover:text-[#d4c2a5] transition duration-300" href="#">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="text-[#d4c2a5]/50 hover:text-[#d4c2a5] transition duration-300" href="#">
<iconify-icon icon="mdi:twitter" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
