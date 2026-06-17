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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Satoshi', 'Inter', 'sans-serif'],
serif: ['Recoleta', '"DM Serif Display"', 'serif'],
},
colors: {
ccc: {
base: '#FAF9F6',
alt: '#F2EEE8',
yellow: '#F7D96C',
coral: '#E86F5D',
mint: '#B8E3C6',
blue: '#CFE8F7',
lavender: '#D8CCFF',
text: '#27272A', // zinc-800
muted: '#52525B', // zinc-600
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-ccc-base/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-sans font-semibold text-2xl tracking-tighter uppercase relative group" href="#">
                CCC
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ccc-text transition-all duration-300 group-hover:w-full"></span>
</a>

<div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-ccc-muted font-medium">
<a className="hover:text-ccc-text transition-colors" href="#story">Story</a>
<a className="hover:text-ccc-text transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-ccc-text transition-colors" href="#events">Events</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-ccc-text text-ccc-base text-xs tracking-wider uppercase rounded-full hover:bg-zinc-800 transition-colors" href="#events">
                    Join the Chaos
                </a>
<button className="md:hidden text-ccc-text flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="min-h-[90vh] flex overflow-hidden pt-20 relative items-center">

<div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100">
<div className="absolute bottom-1/4 right-[5%] w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden rotate-3 animate-float-delayed shadow-xl mix-blend-multiply">
<img alt="People" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/3 right-1/4 text-ccc-yellow opacity-50 animate-spin-slow">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
</div>
<div className="z-10 flex flex-col md:items-start md:text-left text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-ccc-text text-5xl font-extrabold tracking-tighter font-serif max-w-4xl">Where the<br/> <span className="text-ccc-coral inline-block transform mt-2 mb-2 -rotate-2">disorder</span><br/> is designed.</h1>
<p className="md:text-xl text-ccc-muted leading-relaxed text-lg font-normal max-w-lg mt-8">
                Life isn't perfectly organized — and honestly, that's where the fun lives. We create experiences that feel alive: thoughtful, playful, social, and just chaotic enough to become unforgettable.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center md:items-start gap-4">
<a className="px-8 py-4 bg-ccc-text text-ccc-base rounded-full text-sm uppercase tracking-widest font-medium hover:bg-zinc-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2 group" href="#experiences">
                    Explore Experiences
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-4 border border-zinc-300 text-ccc-text rounded-full text-sm uppercase tracking-widest font-medium hover:border-ccc-text transition-all w-full sm:w-auto flex items-center justify-center bg-white/50 backdrop-blur-sm" href="#events">
                    Join the Chaos
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-ccc-alt">
<div className="max-w-5xl mx-auto px-6 text-center md:text-left">
<h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-ccc-text">
                A little messy.<br/>
<span className="text-ccc-muted block my-1">A little meaningful.</span>
<span className="text-ccc-mint inline-block rotate-1">Entirely intentional.</span>
</h2>
</div>
</section>

<section className="py-24 md:py-32" id="story">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative group">
<div className="absolute inset-0 bg-ccc-lavender/20 -rotate-3 rounded-2xl transform transition-transform group-hover:-rotate-1"></div>
<img alt="Community" className="relative z-10 rounded-2xl w-full h-[60vh] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-ccc-yellow text-ccc-text p-6 rounded-full w-32 h-32 flex items-center justify-center text-center font-serif font-bold text-xl z-20 shadow-lg rotate-12 group-hover:rotate-0 transition-all duration-500 leading-tight">
                    Real<br/>Feelings
                </div>
</div>
<div className="order-1 md:order-2">
<h2 className="font-serif font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] mb-10">
                    People don't remember<br/>
                    perfect events.<br/>
                    They remember<br/>
<span className="text-ccc-yellow inline-block -rotate-1 mt-2">how it felt.</span>
</h2>
<div className="space-y-6 text-ccc-muted font-normal text-base md:text-lg max-w-md">
<p>We strip away the rigid itineraries and replace them with intentional environments where serendipity is the guest of honor.</p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-4">
<span className="mt-2 w-2 h-2 rounded-full bg-ccc-coral shrink-0"></span>
<span><strong>Treasure Hunts in Colaba:</strong> Decoding clues through historic streets with strangers who become friends.</span>
</li>
<li className="flex items-start gap-4">
<span className="mt-2 w-2 h-2 rounded-full bg-ccc-blue shrink-0"></span>
<span><strong>Corporate Un-events:</strong> 100 people dropping the jargon to build something messy and meaningful.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div className="">
<h2 className="font-serif font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                    Stories<br/>
                    in motion.
                </h2>
<p className="text-zinc-400 mt-6 font-normal max-w-sm">A few moments from the chaos we've curated.</p>
</div>
<div className="hidden md:flex gap-2 text-zinc-500">
<iconify-icon icon="solar:arrow-left-linear" width="28"></iconify-icon>
<iconify-icon icon="solar:arrow-right-linear" width="28"></iconify-icon>
</div>
</div>

<div className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 pb-8 hide-scrollbar cursor-grab">

<div className="w-[75vw] md:w-[25vw] flex-none snap-center relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800">
<img alt="Colaba Hunt" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="px-3 py-1 bg-ccc-coral/20 text-ccc-coral text-xs font-semibold rounded-full backdrop-blur-md mb-4 inline-block">Colaba</span>
<h3 className="font-serif font-bold text-2xl leading-tight">The Midnight<br/>Treasure Hunt</h3>
</div>
</div>

<div className="w-[75vw] md:w-[25vw] flex-none snap-center relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800 rotate-1">
<img alt="Corporate" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="px-3 py-1 bg-ccc-blue/20 text-ccc-blue text-xs font-semibold rounded-full backdrop-blur-md mb-4 inline-block">Corporate</span>
<h3 className="font-serif font-bold text-2xl leading-tight">100 People,<br/>0 Agendas</h3>
</div>
</div>

<div className="w-[75vw] md:w-[25vw] flex-none snap-center relative aspect-[9/16] rounded-2xl overflow-hidden group bg-zinc-800 -rotate-1">
<img alt="Book Club" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="px-3 py-1 bg-ccc-yellow/20 text-ccc-yellow text-xs font-semibold rounded-full backdrop-blur-md mb-4 inline-block">Community</span>
<h3 className="font-serif font-bold text-2xl leading-tight">No Homework<br/>Book Club</h3>
</div>
</div>
<div className="w-6 md:hidden flex-none"></div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="experiences">
<h2 className="font-serif font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] mb-16 md:text-center">
            Choose<br/>
            your chaos.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer">
<img alt="Treasure" className="w-full h-full object-cover img-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h3 className="font-serif font-bold text-3xl md:text-4xl tracking-tighter text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-none">Treasure<br/>Hunts</h3>
<p className="text-white/90 font-medium mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 text-sm max-w-xs">City-wide puzzles designed to make you look closer.</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer">
<img alt="Corporate" className="w-full h-full object-cover img-hover-zoom grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ccc-blue/20 group-hover:bg-black/50 transition-colors duration-500 mix-blend-multiply"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h3 className="font-serif font-bold text-3xl md:text-4xl tracking-tighter text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-none">Corporate<br/>Experiences</h3>
<p className="text-white/90 font-medium mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 text-sm max-w-xs">Team building that doesn't feel like a mandatory HR exercise.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="font-serif font-bold text-4xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-ccc-text">
                You don't attend this.<br/>
<span className="text-ccc-coral inline-block rotate-2 mt-2">You feel it.</span>
</h2>
</div>
</section>

<section className="py-24 bg-ccc-alt">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-16">
<div className="max-w-md">
<h2 className="font-serif font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] mb-6">Proof<br/>of life.</h2>
<p className="text-ccc-muted text-lg font-normal">Not staged. Not scripted. Just real moments caught in the act of living.</p>
</div>
<div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
<div>
<span className="font-serif font-bold text-5xl text-ccc-coral block mb-1">2</span>
<span className="text-xs font-semibold uppercase tracking-widest text-ccc-muted">Treasure Hunts</span>
</div>
<div>
<span className="font-serif font-bold text-5xl text-ccc-yellow block mb-1">100+</span>
<span className="text-xs font-semibold uppercase tracking-widest text-ccc-muted">People Connected</span>
</div>
</div>
</div>
<div className="masonry-grid">
<div className="masonry-item rounded-xl overflow-hidden">
<img alt="Gallery" className="w-full hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="masonry-item rounded-xl overflow-hidden -rotate-1 shadow-sm">
<img alt="Gallery" className="w-full grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="masonry-item rounded-xl overflow-hidden">
<img alt="Gallery" className="w-full hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="masonry-item rounded-xl overflow-hidden rotate-1 shadow-sm">
<img alt="Gallery" className="w-full hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="events">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-200 pb-8 gap-8">
<div className="">
<h2 className="font-serif font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95] mb-6">Upcoming<br/>chaos.</h2>
<p className="text-ccc-muted font-normal">Reserve your spot before it gets too crowded.</p>
</div>
<div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<label className="cursor-pointer whitespace-nowrap">
<input checked="" className="hidden custom-radio" name="filter" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-zinc-300 font-medium text-sm transition-colors bg-white text-zinc-600 hover:border-zinc-400">All Events</div>
</label>
<label className="cursor-pointer whitespace-nowrap">
<input className="hidden custom-radio" name="filter" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-zinc-300 font-medium text-sm transition-colors bg-white text-zinc-600 hover:border-zinc-400">South Mumbai</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="bg-ccc-alt text-ccc-text px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Oct 24, 8:00 PM
                    </div>
<span className="text-xs font-semibold uppercase tracking-widest text-ccc-muted">Book Club</span>
</div>
<h3 className="font-serif font-bold text-3xl leading-[1.05] tracking-tight mb-4">The Midnight<br/>Read</h3>
<p className="text-ccc-muted text-sm flex-grow mb-8 font-normal">Bring a book you abandoned. We'll tell you why you should finish it, over cheap wine and expensive cheese.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100">
<div className="flex items-center gap-2 text-ccc-coral text-sm font-semibold">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        Bandra West
                    </div>
<a className="w-10 h-10 rounded-full bg-ccc-base flex items-center justify-center group-hover:bg-ccc-text group-hover:text-white transition-colors border border-zinc-200" href="#">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="bg-ccc-alt text-ccc-text px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Nov 02, 4:00 PM
                    </div>
<span className="text-xs font-semibold uppercase tracking-widest text-ccc-muted">Hunt</span>
</div>
<h3 className="font-serif font-bold text-3xl leading-[1.05] tracking-tight mb-4">Colaba Secrets<br/>Vol. 3</h3>
<p className="text-ccc-muted text-sm flex-grow mb-8 font-normal">A puzzle that takes you through alleys that don't exist on Google Maps. Wear comfortable shoes.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-100">
<div className="flex items-center gap-2 text-ccc-coral text-sm font-semibold">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        Colaba
                    </div>
<a className="w-10 h-10 rounded-full bg-ccc-base flex items-center justify-center group-hover:bg-ccc-text group-hover:text-white transition-colors border border-zinc-200" href="#">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-ccc-alt relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 text-ccc-lavender opacity-50 pointer-events-none">
<iconify-icon icon="solar:asterisk-circle-linear" strokeWidth="0.5" width="300"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto px-6 text-center md:text-left relative z-10">
<h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] mb-8">
                Have something<br/>
                in mind?
            </h2>
<p className="text-lg md:text-xl text-ccc-muted mb-12 font-normal">
                Teams. Families. Communities.<br/>Or something harder to define.<br/>
<span className="text-ccc-text font-medium mt-4 block">That's where we work best.</span>
</p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-ccc-text text-ccc-base rounded-full text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 transition-all gap-2 group" href="#">
                Plan Your Experience
                <iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 md:py-48 max-w-6xl mx-auto px-6 text-center md:text-right">
<h2 className="font-serif font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-zinc-300">
            The best moments<br/>
            are never<br/>
<span className="text-ccc-text inline-block -rotate-1 mt-2">planned.</span>
</h2>
</section>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<a className="font-sans font-bold text-3xl tracking-tighter uppercase" href="#">CCC</a>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-wider text-ccc-muted">
<a className="hover:text-ccc-text transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Instagram
                    </a>
<a className="hover:text-ccc-text transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:ticket-linear"></iconify-icon> Luma
                    </a>
<a className="hover:text-ccc-text transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Email
                    </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-medium text-zinc-400 gap-4">
<p>Designed with joy, curiosity, and just enough chaos.</p>
<p>© 2024 Curated Chaos Club. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
