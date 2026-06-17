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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
display: ['Michroma', 'sans-serif'],
},
colors: {
brand: {
50: '#FFFAEB',
100: '#FCEFC7',
200: '#FAE3A3',
300: '#F7D070',
400: '#F2BD42',
500: '#D4AF37', // METALLIC GOLD
600: '#B08D26',
700: '#8C6D19',
800: '#664D10',
900: '#423008',
glow: 'rgba(212, 175, 55, 0.2)',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



const CONFIG = {
urls: {
booking: "#book-ride",
system: "#route",
results: "#safety",
founder: "#membership"
}
};
document.addEventListener("DOMContentLoaded", () => {
// 1. Handle "Book Ride" Actions
document.querySelectorAll('[data-action="book"]').forEach(el => {
el.addEventListener('click', (e) => {
e.preventDefault();
const btnText = el.querySelector('span') || el;
const originalText = btnText.innerText;
btnText.innerText = "Finding Shuttle...";
setTimeout(() => {
btnText.innerText = originalText;
window.location.href = CONFIG.urls.booking;
}, 1000);
});
});
// 2. Handle Navigation Scrolls
document.querySelectorAll('[data-action="scroll-system"]').forEach(el => {
el.onclick = () => document.querySelector(CONFIG.urls.system).scrollIntoView({behavior: 'smooth'});
});
// 3. Animation Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// 4. Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');
function toggleMenu() {
const isHidden = mobileMenu.classList.contains('translate-x-full');
if (isHidden) {
mobileMenu.classList.remove('translate-x-full');
document.body.style.overflow = 'hidden';
} else {
mobileMenu.classList.add('translate-x-full');
document.body.style.overflow = '';
}
}
mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('translate-x-full');
document.body.style.overflow = '';
});
});
});



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
      

<div className="fixed top-0 w-full h-screen -z-10 opacity-60 pointer-events-none">
<div className="absolute inset-0 bg-[#020202]"></div>
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-900/20 blur-[120px] rounded-full animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-900/10 blur-[120px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
</div>
<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 grid-lines opacity-20"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08),_transparent_70%)] opacity-50 blur-3xl"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020202]/60">
<div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-black shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
<iconify-icon icon="lucide:bus" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight text-white uppercase font-display font-bold leading-none">
            Grove<span className="text-brand-500">Shuttle</span>
</span>
<span className="text-[9px] text-neutral-500 uppercase tracking-widest leading-none mt-1">UMiami Exclusive</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1.5 text-neutral-400 hover:text-brand-300 transition-colors py-2">
             Stops &amp; Route
             <iconify-icon className="group-hover:rotate-180 transition-transform duration-200" icon="lucide:chevron-down" width="10"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="rounded-xl border border-brand-500/10 bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden ring-1 ring-white/5">
<div className="grid grid-cols-2">
<div className="p-5 border-r border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="lucide:map-pin" width="12"></iconify-icon>
<h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-display">Pick Up</h4>
</div>
<div className="space-y-1">
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">University Village</a>
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">Mahoney/Pearson</a>
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">Red Road Commons</a>
</div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-500" icon="lucide:music" width="12"></iconify-icon>
<h4 className="text-[10px] font-bold text-white uppercase tracking-widest font-display">Drop Off</h4>
</div>
<div className="space-y-1">
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">CocoWalk Main</a>
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">Bayshore Drive</a>
<a className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-brand-400 text-neutral-400 transition-colors" href="#">The Ritz (Special)</a>
</div>
</div>
</div>
<div className="px-5 py-3 bg-brand-900/10 border-t border-brand-500/10 flex items-center justify-between">
<span className="text-[10px] text-brand-200">Live GPS Tracking Available</span>
<span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse"></span>
</div>
</div>
</div>
</div>
<a className="text-neutral-400 hover:text-brand-300 transition-colors" href="#safety">Safety First</a>
<a className="text-neutral-400 hover:text-brand-300 transition-colors" href="#membership">Membership</a>
<a className="text-neutral-400 hover:text-brand-300 transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:block">
<button className="shiny-cta shiny-cta-sm" data-action="book">
<span className="flex items-center gap-2 font-bold tracking-tight">
            Reserve Seat
            <iconify-icon className="opacity-80" icon="lucide:ticket" width="14"></iconify-icon>
</span>
</button>
</div>

<button className="md:hidden flex items-center justify-center text-white p-2" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-[#020202] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col h-screen" id="mobile-menu">
<div className="flex items-center justify-between px-6 h-20 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl shrink-0">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500 text-black">
<iconify-icon icon="lucide:bus" width="18"></iconify-icon>
</div>
<span className="text-sm tracking-tight text-white uppercase font-display font-semibold">GroveShuttle</span>
</div>
<button className="text-neutral-400 hover:text-white p-2" id="close-menu-btn">
<iconify-icon icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8">
<div className="space-y-6">
<a className="block text-xl font-light text-white hover:text-brand-500 transition-colors" href="#route">Live Route Map</a>
<a className="block text-xl font-light text-white hover:text-brand-500 transition-colors" href="#safety">Safety Protocols</a>
<a className="block text-xl font-light text-white hover:text-brand-500 transition-colors" href="#membership">Membership &amp; Passes</a>
<a className="block text-xl font-light text-white hover:text-brand-500 transition-colors" href="#faq">Student FAQ</a>
</div>
</div>
<div className="p-6 border-t border-white/5 bg-[#050505]">
<button className="shiny-cta w-full flex justify-center" data-action="book">
<span>Book A Ride - $5</span>
</button>
</div>
</div>
<main className="relative z-10 pt-32 pb-24">

<section className="mx-auto max-w-7xl px-6 mb-32 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl relative z-10">
<div className="animate-on-scroll mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-900/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
</span>
            Shuttles Running Tonight: 9:00 PM - 3:00 AM
          </div>
<h1 className="animate-on-scroll font-display text-5xl md:text-7xl leading-[0.9] tracking-tighter mb-8 heading-gradient drop-shadow-2xl">
            Secure Transport.<br/>
<span className="text-neutral-500">Miami Nightlife.</span>
</h1>
<p className="animate-on-scroll text-lg font-light leading-relaxed text-neutral-300 tracking-tight mb-10 max-w-md">
            The premium shuttle service taking Canes from campus to the Grove. 
            Safe, reliable, and always a vibe. Leave the Uber surge pricing behind.
          </p>
<div className="animate-on-scroll flex flex-col sm:flex-row gap-6 items-center sm:items-stretch">
<button className="shiny-cta min-w-[180px]" data-action="book">
<span className="flex items-center justify-center gap-2">
                Reserve Seat
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="inline-flex h-full min-h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-brand-900/20 hover:border-brand-500/30 hover:text-brand-200" data-action="scroll-system">
              View Route Map
            </button>
</div>
<div className="mt-12 flex items-center gap-4 animate-on-scroll opacity-80">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border-2 border-black bg-neutral-800"></div>
<div className="h-8 w-8 rounded-full border-2 border-black bg-neutral-700"></div>
<div className="h-8 w-8 rounded-full border-2 border-black bg-neutral-600"></div>
</div>
<p className="text-xs text-neutral-500 font-medium"><span className="text-white">2,400+</span> Rides Completed Safely</p>
</div>
</div>

<div className="relative animate-on-scroll lg:pl-0 h-[600px] flex items-center justify-center map-perspective-container">

<div className="absolute inset-0 bg-brand-500/5 blur-[120px] rounded-full"></div>

<div className="map-plane relative w-[90%] h-[500px] bg-[#050505]/90 rounded-3xl border border-white/10 overflow-visible group">

<div className="absolute inset-0 rounded-3xl overflow-hidden">

<div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] border-[40px] border-white/5 rounded-full opacity-30"></div>
<div className="absolute w-[80%] h-[1px] bg-white/5 top-[30%] left-0"></div>
<div className="absolute w-[1px] h-[80%] top-0 left-[60%] bg-white/5"></div>
</div>


<div className="absolute top-[20%] left-[10%] z-20">
<div className="relative flex items-center justify-center">
<div className="absolute w-24 h-24 bg-brand-500/10 rounded-full animate-ping"></div>
<div className="w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_20px_#D4AF37] border-2 border-black z-10"></div>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 floating-marker whitespace-nowrap">
<div className="bg-black/90 border border-brand-500/30 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-sm">
<div className="text-[10px] font-bold text-white uppercase tracking-wider font-display">University Village</div>
<div className="text-[9px] text-brand-400">Next Stop: 5 min</div>
</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-brand-500/30 mx-auto"></div>
</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[10%] z-20">
<div className="relative flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] border-2 border-black z-10"></div>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 floating-marker whitespace-nowrap">
<div className="bg-black/90 border border-white/20 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-sm">
<div className="text-[10px] font-bold text-white uppercase tracking-wider font-display">CocoWalk</div>
<div className="text-[9px] text-neutral-400">Drop Off Zone</div>
</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/20 mx-auto"></div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
<defs>

<lineargradient id="routeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#D4AF37" stop-opacity="0.1"></stop>
<stop offset="50%" stop-color="#D4AF37" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#D4AF37" stop-opacity="0.1"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>



<path className="opacity-60" d="M 60,120 Q 250,120 280,250 T 500,400" fill="none" filter="url(#glow)" id="busRoute" stroke="url(#routeGradient)" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="3" transform="scale(1,1)"></path>

<g>

<circle fill="#000" r="8" stroke="#D4AF37" strokeWidth="2">
<animatemotion calcmode="linear" dur="6s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#busRoute"></mpath>
</animatemotion>
</circle>

<circle fill="#D4AF37" fillOpacity="0.2" r="16">
<animatemotion calcmode="linear" dur="6s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#busRoute"></mpath>
</animatemotion>
<animate attributename="r" dur="2s" repeatcount="indefinite" values="12;20;12"></animate>
</circle>

<foreignobject height="40" width="100" x="-50" y="-50">
<div className="w-full h-full flex items-center justify-center">
<animatemotion calcmode="linear" dur="6s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#busRoute">
</mpath></animatemotion>
<div className="px-2 py-0.5 bg-brand-500 text-[8px] font-bold text-black rounded shadow-lg floating-marker">BUS 104</div>
</div>
</foreignobject>
</g>
</svg>

<div className="absolute top-6 right-6 z-30 floating-marker">
<div className="glass-panel p-3 rounded-xl border border-white/10 flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 uppercase tracking-widest">Est. Travel</span>
<span className="text-sm font-bold text-white font-mono">18 MIN</span>
</div>
<div className="h-8 w-[1px] bg-white/10"></div>
<div className="flex flex-col items-end">
<span className="text-[9px] text-neutral-400 uppercase tracking-widest">Status</span>
<span className="text-xs font-bold text-brand-400">On Time</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#030303] py-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-none heading-gradient mb-6">
              Walking is unsafe.<br/>
              Ubers are expensive.
            </h2>
<div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
<p>Every Thursday, Friday, and Saturday, thousands of students migrate to Coconut Grove. The result? Chaos.</p>
<div className="pl-4 border-l border-brand-500/50 text-neutral-200 italic">
                 "I spent $120 on Ubers last weekend alone."
              </div>
<p>We built the shuttle loop to fix this. A continuous, safe, private transport network exclusively for students.</p>
</div>
</div>
<div className="animate-on-scroll relative">
<div className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-900/10 to-transparent">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<span className="text-sm font-medium text-white">Rideshare App</span>
<span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] uppercase font-bold">Surge Active</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-700"></div>
<div className="text-sm">Standard X</div>
</div>
<div className="text-sm font-bold">$42.98</div>
</div>
<div className="flex items-center justify-between p-4 rounded-lg bg-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-700"></div>
<div className="text-sm">Comfort</div>
</div>
<div className="text-sm font-bold">$56.12</div>
</div>

<div className="relative flex items-center justify-between p-4 rounded-xl bg-brand-500 border border-brand-400 shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-105 transform">
<div className="absolute -top-3 left-4 px-2 py-0.5 bg-black text-brand-500 text-[9px] uppercase font-bold rounded tracking-widest border border-brand-500">Best Value</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-black flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:bus" width="16"></iconify-icon>
</div>
<div className="text-sm text-black font-bold">Grove Shuttle</div>
</div>
<div className="text-lg font-black text-black">$5.00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 mx-auto max-w-7xl px-6" id="safety">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="animate-on-scroll max-w-2xl">
<h2 className="font-display text-3xl md:text-4xl mb-4 heading-gradient">High-End Transport. Zero Compromise.</h2>
<p className="text-neutral-400 font-light">We aren't a party bus company. We are a logistics company that understands the student lifestyle.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-400 group-hover:text-brand-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">Vetted Drivers</h3>
<p className="text-sm leading-relaxed text-neutral-400">Professional chauffeurs with background checks. No randoms.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-400 group-hover:text-brand-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
<iconify-icon icon="lucide:map" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">Live Tracking</h3>
<p className="text-sm leading-relaxed text-neutral-400">See exactly where the shuttle is on our web app. No waiting in the dark.</p>
</div>
<div className="animate-on-scroll group glass-panel p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-300">
<div className="mb-6 inline-flex rounded-lg border border-brand-500/20 bg-brand-500/10 p-2.5 text-brand-400 group-hover:text-brand-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all">
<iconify-icon icon="lucide:snowflake" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-white">Ice Cold AC</h3>
<p className="text-sm leading-relaxed text-neutral-400">Miami humidity stays outside. Clean, cool, and comfortable interiors.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="route">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="animate-on-scroll lg:col-span-5">
<h2 className="font-display text-4xl mb-6 tracking-tight heading-gradient">The Grove Loop.</h2>
<p className="text-neutral-400 text-lg font-light mb-8">Continuous service running every 20 minutes between campus housing and the heart of Coconut Grove.</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-2 h-24 rounded-full bg-gradient-to-b from-brand-500 via-brand-300 to-transparent"></div>
<div className="space-y-8 py-2">
<div>
<h4 className="text-white font-bold text-sm">Pick Up: Campus Housing</h4>
<p className="text-xs text-neutral-500">UV, Mahoney, Pearson, Red Road</p>
</div>
<div>
<h4 className="text-white font-bold text-sm">Drop Off: The Grove</h4>
<p className="text-xs text-neutral-500">CocoWalk, Bayshore, Barracuda</p>
</div>
</div>
</div>
</div>
<div className="mt-8">
<button className="flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-900/10 px-6 py-3 text-xs font-medium text-brand-400 transition-all hover:bg-brand-500 hover:text-black" data-action="book">
                See Live Schedule
                <iconify-icon icon="lucide:clock" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="lg:col-span-7">
<div className="animate-on-scroll rounded-2xl border border-white/10 bg-[#080808] p-2 shadow-2xl overflow-hidden relative aspect-video group">
<div className="absolute inset-0 bg-[#111] opacity-60">
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<path d="M-10,100 C 150,100 200,300 400,250 S 700,100 900,150" fill="none" stroke="#222" strokeWidth="8"></path>
<path className="animate-[dash_20s_linear_infinite]" d="M-10,100 C 150,100 200,300 400,250 S 700,100 900,150" fill="none" stroke="#D4AF37" stroke-dasharray="10 10" strokeWidth="2"></path>
</svg>
</div>
<div className="absolute top-[50%] left-[45%] w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_20px_rgba(212,175,55,1)] z-10 animate-pulse"></div>
<div className="absolute top-[50%] left-[45%] w-32 h-32 rounded-full border border-brand-500/20 -translate-x-1/2 -translate-y-1/2 -ml-2 -mt-2 animate-[ping_2s_infinite]"></div>
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 z-20">
<div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Status</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-bold text-white">Active Service</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="membership">
<div className="mx-auto max-w-7xl px-6 text-center mb-16">
<h2 className="animate-on-scroll font-display text-3xl md:text-5xl mb-4 heading-gradient">Ride Smart. Ride Safe.</h2>
<p className="animate-on-scroll text-neutral-400 mt-4 max-w-2xl mx-auto">Pay per ride or grab a semester pass for unlimited access.</p>
</div>
<div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="animate-on-scroll glass-panel p-10 rounded-3xl border-white/5 flex flex-col items-center text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-12 w-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="lucide:ticket" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Single Trip</h3>
<p className="text-sm text-neutral-400 mb-8">Perfect for the occasional night out.</p>
<div className="text-4xl font-display font-bold text-white mb-8">$5.00</div>
<button className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors text-white" data-action="book">
            Purchase Ticket
          </button>
</div>
<div className="animate-on-scroll relative p-10 rounded-3xl border border-brand-500/30 bg-[#1a1500] flex flex-col items-center text-center overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.1)]">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-400 blur-[60px] opacity-20"></div>
<div className="absolute top-4 right-4 px-3 py-1 bg-brand-500 text-black text-[10px] font-bold uppercase rounded-full tracking-wider">Most Popular</div>
<div className="h-12 w-12 rounded-full bg-brand-500/20 border border-brand-500 flex items-center justify-center mb-6 text-brand-400">
<iconify-icon icon="lucide:crown" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-2">Semester Pass</h3>
<p className="text-sm text-brand-200/70 mb-8">Unlimited rides all semester. VIP Line Access.</p>
<div className="text-4xl font-display font-bold text-brand-400 mb-8">$150</div>
<button className="shiny-cta w-full flex justify-center" data-action="book">
<span>Get VIP Access</span>
</button>
<p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-widest">Limited to 500 Students</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020202]">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="animate-on-scroll p-6 rounded-2xl bg-[#080808] border border-white/5">
<div className="flex gap-1 mb-4 text-brand-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6">"Honestly a lifesaver. Ubers were charging $60 during Halloween, shuttle was $5 and had better music."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div className="text-xs font-bold text-white">Sarah M. <span className="text-neutral-600 font-normal">| Sophomore</span></div>
</div>
</div>
<div className="animate-on-scroll p-6 rounded-2xl bg-[#080808] border border-white/5">
<div className="flex gap-1 mb-4 text-brand-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6">"My parents feel way better knowing I'm taking this instead of waiting on a dark street for a random car."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div className="text-xs font-bold text-white">Jason K. <span className="text-neutral-600 font-normal">| Junior</span></div>
</div>
</div>
<div className="animate-on-scroll p-6 rounded-2xl bg-[#080808] border border-white/5">
<div className="flex gap-1 mb-4 text-brand-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6">"The bus is actually a vibe. AC blasts, good lighting, everyone is chill. Best way to start the night."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div className="text-xs font-bold text-white">Daniella R. <span className="text-neutral-600 font-normal">| Senior</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_70%)] opacity-60 blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-3xl px-6 text-center relative z-10">
<h2 className="animate-on-scroll font-display text-5xl md:text-7xl mb-6 tracking-tighter heading-gradient">Don't get stranded.</h2>
<p className="animate-on-scroll text-lg text-neutral-400 mb-10 max-w-lg mx-auto">Secure your seat for this weekend. Safe, cheap, and reliable transport to the Grove.</p>
<div className="animate-on-scroll flex flex-col items-center gap-6">
<button className="shiny-cta scale-110" data-action="book">
<span>Book Ride Now</span>
</button>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon icon="lucide:info" width="12"></iconify-icon>
<span>Next shuttle departs in 12 mins from UV</span>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#020202] py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-brand-500 flex items-center justify-center text-black">
<iconify-icon icon="lucide:bus" width="12"></iconify-icon>
</div>
<span className="text-xs font-bold text-white uppercase tracking-widest">
          GroveShuttle
        </span>
</div>
<div className="flex gap-6 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Parent Info</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-[10px] text-neutral-700">
        © 2024 Grove Shuttle LLC. Not affiliated with UM.
      </p>
</div>
</footer>

    </>
  );
}
