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
      

<nav className="fixed top-0 z-50 w-full pt-6 px-6">
<div className="mx-auto max-w-[1400px] rounded-full bg-black/30 backdrop-blur-md border border-white/5 px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6">
<a className="text-lg font-semibold tracking-tighter text-white uppercase" href="#">Dominicana.PRO</a>
<div className="hidden md:block w-px h-4 bg-white/20"></div>
<span className="hidden md:block text-xs text-zinc-400 max-w-[150px] leading-tight">Creating premium memories since 2014</span>
</div>
<div className="hidden lg:flex items-center space-x-8 text-xs font-medium text-white/80">
<a className="hover:text-white transition-colors" href="#tours">TOURS</a>
<a className="hover:text-white transition-colors" href="#">CAR RENTAL</a>
<a className="hover:text-white transition-colors" href="#">CATALOG</a>
<a className="hover:text-white transition-colors" href="#">TRANSFERS</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition hover:bg-white/10">
<iconify-icon className="text-white" icon="lucide:globe" width="14"></iconify-icon>
<span className="text-xs font-medium text-white">EN</span>
</div>
<button className="p-2 text-white bg-white/10 rounded-full hover:bg-white/20">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="relative w-full h-screen min-h-[700px] overflow-hidden">

<div className="absolute inset-0">
<img alt="Nature" className="h-full w-full object-cover brightness-[0.6]" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent"></div>
<div className="relative mx-auto h-full max-w-[1400px] px-6 pb-12 flex flex-col justify-end">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
<h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                    Premium travels <br/>
                    to the most amazing <br/>
                    places on the island
                </h1>

<div className="hidden md:flex relative h-32 w-32 items-center justify-center rounded-full border border-white/20 backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer group">
<div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
<svg height="100%" viewbox="0 0 100 100" width="100%">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text fill="white" fontFamily="Inter" fontSize="11" font-weight="500" letter-spacing="2">
<textpath xlink:href="#circle">
                                    CHOOSE YOUR ADVENTURE • START NOW •
                                </textpath>
</text>
</svg>
</div>
<iconify-icon className="text-white rotate-45 group-hover:rotate-90 transition-transform duration-300" icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="py-20 bg-[#0c0c0c]" id="tours">
<div className="mx-auto max-w-[1400px] px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">Upcoming top <br/> travel events</h2>
</div>
<div className="hidden sm:flex gap-2">
<iconify-icon className="text-orange-400" icon="lucide:flower-2" width="32"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#161616] transition-all hover:bg-[#1f1f1f]">
<div className="relative aspect-[16/10] overflow-hidden m-2 rounded-2xl">
<img alt="Saona" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium text-white border border-white/10">BESTSELLER</div>
</div>
<div className="flex flex-1 flex-col p-6 pt-2">
<div className="mb-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Daily • From $169</div>
<h3 className="text-xl font-medium text-white leading-tight mb-2">Saona Funta</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6">Experience the magic of Saona Island with our premium VIP service. White sands and turquoise waters await.</p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105" href="#">
                                Details
                                <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#161616] transition-all hover:bg-[#1f1f1f]">
<div className="relative aspect-[16/10] overflow-hidden m-2 rounded-2xl">
<img alt="Samana" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-6 pt-2">
<div className="mb-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Jan - Mar • From $135</div>
<h3 className="text-xl font-medium text-white leading-tight mb-2">Samana Whales</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6">A unique opportunity to see humpback whales in their natural habitat combined with Bacardi island.</p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105" href="#">
                                Details
                                <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#161616] transition-all hover:bg-[#1f1f1f]">
<div className="relative aspect-[16/10] overflow-hidden m-2 rounded-2xl">
<img alt="Jungle" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533619043865-1c2e2f32ff2f?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex flex-1 flex-col p-6 pt-2">
<div className="mb-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Daily • From $99</div>
<h3 className="text-xl font-medium text-white leading-tight mb-2">Jungle Thrills</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-6">Thrilling adventures amidst stunning natural landscapes. Zipline, buggies and waterfalls.</p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105" href="#">
                                Details
                                <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-[#161616] transition-all hover:bg-[#1f1f1f] md:col-span-3 min-h-[400px]">
<div className="relative w-full md:w-1/2 overflow-hidden m-2 rounded-2xl md:mr-0">
<img alt="Private" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex flex-1 flex-col justify-center p-8 md:p-12">
<h3 className="text-2xl md:text-3xl font-medium text-white leading-tight mb-4">We organize any custom<br/> private journey for you</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="mt-0.5 text-white" icon="lucide:check" width="14"></iconify-icon>
<span>We save time by choosing ideal routes</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="mt-0.5 text-white" icon="lucide:check" width="14"></iconify-icon>
<span>Attention to detail and care at every stage</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<iconify-icon className="mt-0.5 text-white" icon="lucide:check" width="14"></iconify-icon>
<span>We guarantee clear organization and support</span>
</li>
</ul>
<div>
<a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition-transform hover:scale-105" href="#">
                                Request proposal
                                <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden bg-[#0c0c0c]">
<div className="mx-auto max-w-[1400px] px-6 mb-8 flex items-center justify-between">
<div>
<h2 className="text-2xl font-medium text-white">Early booking season 2026</h2>
<p className="text-sm text-zinc-500 mt-1">Selected destinations, thoughtful details</p>
</div>
<div className="flex gap-2">
<button className="rounded-full border border-white/10 p-3 text-white hover:bg-white/10 transition">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="rounded-full border border-white/10 p-3 text-white hover:bg-white/10 transition">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto px-6 pb-8 no-scrollbar snap-x">
<div className="ml-[max(0px,calc(50vw-700px))] hidden md:block"></div> 

<div className="relative min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden group snap-center cursor-pointer">
<img alt="Party" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 brightness-[0.7]" src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-[10px] text-zinc-400 mb-2">Dec 2025 - Jan 2026</div>
<h3 className="text-xl font-medium text-white mb-4">New Year Party Boat</h3>
<span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] font-bold text-black">
                        Pre-order
                    </span>
</div>
</div>

<div className="relative min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden group snap-center cursor-pointer">
<img alt="Island" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 brightness-[0.7]" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-[10px] text-zinc-400 mb-2">Feb 2026 - Mar 2026</div>
<h3 className="text-xl font-medium text-white mb-4">Saona Private Beach</h3>
<span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] font-bold text-black">
                        Pre-order
                    </span>
</div>
</div>

<div className="relative min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden group snap-center cursor-pointer">
<img alt="Dunes" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 brightness-[0.7]" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-[10px] text-zinc-400 mb-2">Mar 2026 - Apr 2026</div>
<h3 className="text-xl font-medium text-white mb-4">Safari &amp; Dunes</h3>
<span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] font-bold text-black">
                        Pre-order
                    </span>
</div>
</div>

<div className="relative min-w-[300px] md:min-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden group snap-center cursor-pointer">
<img alt="Paris" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 brightness-[0.7]" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="text-[10px] text-zinc-400 mb-2">Apr 2026</div>
<h3 className="text-xl font-medium text-white mb-4">Colonial Zone</h3>
<span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] font-bold text-black">
                        Pre-order
                    </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0c0c0c]">
<div className="mx-auto max-w-[1400px] px-6">
<div className="mb-12 text-center">
<h2 className="text-sm font-medium tracking-widest text-zinc-500 uppercase">Dominicana.PRO —</h2>
<p className="mt-2 text-xl text-white">Agency of premium travels across the island</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="rounded-3xl bg-[#121212] p-8 border border-white/5 relative overflow-hidden group">
<div className="relative z-10">
<span className="text-7xl font-bold text-white tracking-tighter">10</span>
<span className="text-xl text-zinc-500 ml-1">years</span>
<p className="mt-4 text-xs text-zinc-400 leading-relaxed">Helping discover the world around and within yourself</p>
</div>
</div>

<div className="rounded-3xl bg-[#121212] p-8 border border-white/5 relative overflow-hidden group md:col-span-2">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex -space-x-4">
<img alt="" className="h-16 w-16 rounded-full border-2 border-[#121212] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="" className="h-16 w-16 rounded-full border-2 border-[#121212] object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="" className="h-16 w-16 rounded-full border-2 border-[#121212] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm text-zinc-300">Travel with us alongside major influencers and happy travelers.</p>
</div>
</div>
</div>

<div className="rounded-3xl bg-[#121212] p-8 border border-white/5 relative overflow-hidden group">
<div className="relative z-10">
<span className="text-7xl font-bold text-white tracking-tighter">0.5</span>
<span className="text-3xl text-zinc-500">%</span>
<p className="mt-4 text-xs text-zinc-400 leading-relaxed">Our clients include the top 0.5% wealthiest people in the world</p>
</div>
</div>
</div>

<div className="mt-20 flex justify-center gap-12 opacity-30 grayscale">
<iconify-icon icon="lucide:waves" width="32"></iconify-icon>
<iconify-icon icon="lucide:mountain" width="32"></iconify-icon>
<iconify-icon icon="lucide:tent" width="32"></iconify-icon>
<iconify-icon icon="lucide:plane" width="32"></iconify-icon>
</div>
</div>
</section>

<footer className="pb-6 px-6 bg-[#0c0c0c]">
<div className="mx-auto max-w-[1400px] rounded-[2.5rem] bg-[#161616] px-6 py-16 md:px-20 md:py-24 relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 h-full w-full opacity-5 pointer-events-none flex items-end justify-center">
<span className="text-[15vw] font-bold text-white leading-none tracking-tighter select-none">DOMINICANA</span>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">We help select <br /> the perfect journey</br></h2>
<p className="text-zinc-500 mb-12">Or we'll create a custom route just for you</p>
<form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4">
<input className="w-full rounded-xl bg-[#222] border border-white/5 px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Name" type="text"/>
<div className="relative w-full rounded-xl bg-[#222] border border-white/5 flex items-center">
<div className="pl-4 pr-2 text-zinc-500 border-r border-white/5 text-sm">+1</div>
<input className="w-full bg-transparent px-4 py-4 text-white placeholder-zinc-500 focus:outline-none" placeholder="(000) 000-0000" type="tel"/>
</div>
<input className="w-full rounded-xl bg-[#222] border border-white/5 px-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20" placeholder="Email" type="email"/>
<button className="w-full rounded-xl bg-white px-4 py-4 text-sm font-bold text-black hover:bg-zinc-200 transition-colors" type="submit">
                        SEND REQUEST
                    </button>
</form>
<div className="mt-6 flex items-center gap-2 text-[10px] text-zinc-600">
<iconify-icon icon="lucide:check-square" width="12"></iconify-icon>
<span>By clicking, I agree to the Personal Data Processing Policy</span>
</div>
<div className="mt-20 w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-start">
<a className="text-xl font-medium text-white hover:text-zinc-300" href="mailto:go@dominicana.pro">go@dominicana.pro</a>
</div>
<div className="text-right flex flex-col items-end">
<div className="text-xs text-zinc-500 mb-1">For partners and agents:</div>
<a className="text-sm text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white" href="#">b2b@dominicana.pro</a>
</div>
</div>
<div className="mt-8 text-[10px] text-zinc-700">
                    © 2014 – 2024 «DOMINICANA.PRO»
                </div>
</div>
</div>
</footer>

    </>
  );
}
