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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
lava: {
500: '#ff4d00',
600: '#cc3d00',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
},
animation: {
'shine': 'shine 3s infinite linear',
},
keyframes: {
shine: {
'0%': { transform: 'translateX(-100%) skewX(-12deg)' },
'100%': { transform: 'translateX(200%) skewX(-12deg)' }
}
}
}
}
}



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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[20%] left-[20%] w-[60%] h-[60%] bg-lava-500/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-orange-600/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30 mask-image-gradient-b"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center">
</div>
<span className="text-lg font-medium text-white tracking-tight">PAYMARK</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm text-neutral-300 hover:text-white transition-colors" href="#">Login</a>
<button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95">
                    Open Account
                </button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-40 pb-20 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full opacity-30">

<div className="godray opacity-50 w-[200px] h-[80vh]"></div>

<div className="godray -rotate-[15deg] translate-x-[-150px] opacity-30"></div>
<div className="godray -rotate-[30deg] translate-x-[-300px] opacity-20"></div>

<div className="godray rotate-[15deg] translate-x-[150px] opacity-30"></div>
<div className="godray rotate-[30deg] translate-x-[300px] opacity-20"></div>
</div>
</div>
<div className="flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 mb-8 animate-fade-in-up backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-lava-500 animate-pulse"></span>
<span>The new standard for modern banking</span>
</div>
<h1 className="md:text-7xl leading-[1.1] bg-clip-text text-glow text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-white to-white/50 max-w-4xl mr-auto mb-8 ml-auto relative">Next Gen Solutions<br/> Built for the <span className="bg-gradient-to-r from-lava-500 to-orange-200 bg-clip-text text-transparent">Future of Finance</span> </h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                Track the growth and engagement of your newsletter with detailed analytics. Experience the seamless flow of money.
            </p>

<div className="relative w-full max-w-md group z-20">
<div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
<div className="relative flex items-center bg-[#0a0a0a] rounded-full p-1.5 border border-white/10 shadow-2xl">
<input className="w-full bg-transparent text-white placeholder-neutral-500 px-6 py-3 outline-none text-base font-light" placeholder="Enter Your Email" type="email"/>
<button className="hover:bg-neutral-200 transition-transform active:scale-95 whitespace-nowrap text-sm font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6">Join Waitlist</button>
</div>
</div>
</div>

<div className="relative mt-24 h-[400px] w-full max-w-5xl mx-auto perspective-1000 z-10">

<div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

<div className="flex w-full h-full relative items-center justify-center">

<div className="absolute left-1/4 transform -translate-x-1/2 translate-y-4 scale-90 opacity-40 blur-[1px] -rotate-6 z-0 hover:opacity-100 hover:blur-0 hover:scale-95 transition-all duration-500">
<div className="flex flex-col overflow-hidden bg-[#0f0f0f] w-[340px] h-[210px] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl justify-between">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="flex z-10 items-start justify-between">
<span className="uppercase text-xs text-neutral-400 tracking-widest font-mono">Business Debit</span>
<svg className="lucide lucide-building-2 w-5 h-5 text-neutral-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="space-y-4 z-10">
<div className="">
<p className="text-[10px] text-neutral-500 mb-1">Monthly Spend</p>
<p className="text-xl font-medium text-white">$4,250.00</p>
</div>
<div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="w-[70%] h-full bg-neutral-600 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute right-1/4 transform translate-x-1/2 translate-y-4 scale-90 opacity-40 blur-[1px] rotate-6 z-0 hover:opacity-100 hover:blur-0 hover:scale-95 transition-all duration-500">
<div className="w-[340px] h-[210px] rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-32 h-32 bg-lava-500/10 rounded-full blur-3xl"></div>
<div className="flex justify-between items-start z-10">
<span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Vault</span>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] text-neutral-400">Active</span>
</div>
</div>
<div className="z-10">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-medium text-white">€14,892</span>
<span className="text-sm text-neutral-500">.44</span>
</div>
<p className="text-[10px] text-neutral-500 mb-4">Total Balance</p>
<div className="flex gap-2">
<div className="h-6 px-2 bg-white/5 rounded flex items-center gap-1 border border-white/5">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-[10px] text-green-400">+2.4%</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
<div className="flex flex-col overflow-hidden group bg-gradient-to-br from-neutral-800 via-[#1a1a1a] to-black w-[380px] h-[235px] border-white/10 border rounded-2xl pt-7 pr-7 pb-7 pl-7 relative shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)] justify-between">

<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine">

<div className="flex justify-between items-start relative z-10">

<div className="w-11 h-8 rounded bg-gradient-to-br from-[#d4af37] to-[#8a7224] flex items-center justify-center border border-white/20 shadow-inner relative overflow-hidden">
<div className="absolute inset-0 border border-black/20 rounded opacity-50"></div>
<div className="w-full h-[1px] bg-black/30"></div>
<div className="absolute w-[1px] h-full bg-black/30 left-1/3"></div>
<div className="absolute w-[1px] h-full bg-black/30 right-1/3"></div>
</div>
<div className="flex flex-col items-end">
<svg className="lucide lucide-rss text-white/40 rotate-90 w-5 h-5 mb-1" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
<span className="text-[8px] font-bold text-white/30 tracking-widest uppercase">Contactless</span>
</div>
</div>

<div className="relative z-10 mt-2">
<div className="font-mono text-xl tracking-[0.15em] text-white/90 drop-shadow-md">
                                 4920 1234 5678 9012
                             </div>
<div className="flex gap-6 mt-3">
<div>
<p className="text-[7px] text-neutral-500 uppercase tracking-widest mb-0.5">Valid Thru</p>
<p className="font-mono text-xs text-white/80">09/28</p>
</div>
<div>
<p className="text-[7px] text-neutral-500 uppercase tracking-widest mb-0.5">CVC</p>
<p className="font-mono text-xs text-white/80">•••</p>
</div>
</div>
</div>

<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-white/90 text-sm font-medium tracking-widest uppercase text-glow">EDWARD COLLINS</p>
</div>

<div className="flex items-center relative">
<div className="w-8 h-8 rounded-full bg-[#eb001b] mix-blend-screen opacity-90"></div>
<div className="w-8 h-8 rounded-full bg-[#f79e1b] mix-blend-screen opacity-90 -ml-5"></div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
</div>
<p className="text-[10px] text-neutral-500 mb-1">Alex Morgan
</p><div className="flex z-10 items-start justify-between">
<span className="uppercase text-xs text-neutral-400 tracking-widest font-mono">Business Debit</span>
<svg className="lucide lucide-building-2 w-5 h-5 text-neutral-500" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div><p className="text-xl font-medium text-gray-400 absolute bottom-20">4452 2131 4123 9876</p></div>
</div>
</div>

<div className="z-10 max-w-6xl mt-16 mr-auto ml-auto pr-6 pl-6 relative space-y-0">
<div className="flex flex-wrap md:gap-20 hover:grayscale-0 transition-all duration-500 opacity-40 grayscale gap-x-12 gap-y-12 items-center justify-center">

<svg className="h-7 text-white" fill="currentColor" viewbox="0 0 100 26">
<path className="" d="M12.9 3.4h-5.2c-.3 0-.6.2-.7.5l-4.5 21.6h3.4l.9-4.8h3.3c3.6 0 6.4-1.8 7.2-5.4.5-2.6-.4-5.3-2.6-7.1-1.2-1-2.9-1.5-4.7-1.5H8.7l.4-1.7c.1-.4.4-.7.8-.7h2.8c.4 0 .7-.4.6-.9-.3-1.6-1.5-2.8-3.1-2.8h2.7z"></path>
<path d="M40 9.8c-.8-3.4-3.6-5.1-7.2-5.1h-7.6c-.3 0-.6.2-.7.5l-4.5 21.6h3.4l1-4.9h2.9c3.6 0 6.4-1.8 7.2-5.4.2-1 .2-2.1.1-3.1-.4 1.4-1.2 2.6-2.3 3.5-1.5 1.2-3.4 1.8-5.4 1.8h-1.8l.5-2.6c.1-.4.4-.7.8-.7h1.6c1.2 0 2.3-.3 3.1-1 .9-.7 1.4-1.8 1.5-3.1.2-.7.1-1.3-.1-1.9.8.7 1.4 1.5 1.5 2.5z"></path>
</svg>

<div className="flex gap-1 text-2xl font-semibold italic text-white tracking-tight gap-x-1 gap-y-1 items-center">
                   amazon <span className="font-light">pay</span>
</div>

<div className="text-2xl font-bold text-white tracking-tighter">stripe</div>

<div className="flex items-center gap-2">
<div className="flex relative">
<div className="w-6 h-6 rounded-full bg-white opacity-80"></div>
<div className="w-6 h-6 rounded-full bg-white opacity-60 -ml-3"></div>
</div>
<span className="text-sm font-medium tracking-wide">mastercard</span>
</div>

<div className="text-2xl font-bold tracking-wide italic text-white">VISA</div>
</div>
</div>
</div></main>

<section className="bg-[#030303] border-white/5 border-t pt-24 pb-24 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<svg className="absolute top-0 left-0 w-full h-full opacity-20" fill="none" stroke="url(#lineGradient)" strokeWidth="1">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#ff4d00"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
<path d="M0 200 H 200 Q 250 200 250 250 V 400"></path>
<path d="M-50 220 H 180 Q 230 220 230 270 V 450"></path>
<path d="M100% 600 H 80% Q 75% 600 75% 650 V 800"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-3 flex flex-col gap-4">
<div className="glass-card p-4 rounded-xl transform translate-x-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-neutral-300 font-medium">From Alex Manda</span>
<span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-neutral-400">+$50</span>
</div>
<span className="text-[10px] text-neutral-500">Today, 16:36</span>
</div>
<div className="glass-card p-4 rounded-xl -translate-x-2 opacity-80">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-neutral-300 font-medium">To Laura Santos</span>
<span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-neutral-500">-$27</span>
</div>
<span className="text-[10px] text-neutral-500">Today, 08:49</span>
</div>

<div className="glass-card p-5 rounded-2xl mt-8 orange-glow border-lava-500/20">
<div className="mb-4">
<h4 className="text-3xl font-medium tracking-tight">$521K</h4>
<p className="text-xs text-neutral-400 mt-1">Your investment is growing</p>
</div>

<div className="h-16 w-full relative">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 40 L0 30 C10 30 15 20 25 25 C35 30 40 10 50 15 C60 20 65 5 75 10 C85 15 90 0 100 5 V40 Z" fill="url(#chartGradient)" opacity="0.2"></path>
<path d="M0 30 C10 30 15 20 25 25 C35 30 40 10 50 15 C60 20 65 5 75 10 C85 15 90 0 100 5" fill="none" stroke="#ff4d00" strokeWidth="1"></path>
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ff4d00"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex justify-between items-center mt-4 border-t border-white/5 pt-3">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-lava-500"></span>
<span className="text-[10px] text-neutral-400">Education</span>
</div>
<span className="text-[10px] text-white font-medium">+40%</span>
</div>
</div>
</div>

<div className="lg:col-span-6 text-center px-4">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                        Who Says a Banking Platform<br/>
<span className="text-neutral-500">Can't Blow Your Mind?</span>
</h2>
<p className="text-lg text-neutral-400 mb-8 max-w-lg mx-auto font-light">
                        We care a lot. And you'll feel it in everything we do. With Paymark, feel seen &amp; taken care of across every step of the startup journey.
                    </p>
<button className="bg-white text-black px-8 py-3 rounded-full text-base font-medium hover:bg-neutral-200 transition-all hover:scale-105 inline-flex items-center gap-2 group">
                        Start Banking
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="lg:col-span-3 flex flex-col gap-6 items-end">

<div className="glass-card w-64 p-6 rounded-2xl relative overflow-hidden bg-neutral-900/80">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lava-500 to-orange-400"></div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-lava-500/20 flex items-center justify-center mb-4 text-lava-500 border border-lava-500/30">
<svg className="lucide lucide-check w-6 h-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-1">$128,12</h3>
<p className="text-[10px] text-neutral-500 mb-6">Payment sent successfully</p>
<div className="w-full bg-white/5 rounded-lg p-3 flex items-center gap-3 border border-white/5">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="text-left">
<p className="text-[10px] text-neutral-400 uppercase tracking-wider">Recipient</p>
<p className="text-xs text-white">Edward Collins</p>
</div>
</div>
</div>
</div>

<div className="w-72 glass-card rounded-xl p-0 overflow-hidden border-t-0 opacity-90">
<div className="p-4 border-b border-white/5 bg-white/[0.02]">
<span className="text-xs text-neutral-500 uppercase tracking-widest">Recent Activity</span>
</div>
<div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
<div>
<p className="text-sm text-neutral-300">Sent €9,561</p>
<p className="text-[10px] text-neutral-600">Balance: €789,213</p>
</div>
<span className="text-xs font-medium text-white/50 border border-white/10 px-2 py-1 rounded">EUR</span>
</div>
<div className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer border-t border-white/5">
<div>
<p className="text-sm text-neutral-300">Receive €9,561</p>
<p className="text-[10px] text-neutral-600">Balance: €798,774</p>
</div>
<span className="text-xs font-medium text-white/50 border border-white/10 px-2 py-1 rounded">EUR</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<span className="text-neutral-500 text-sm">© 2025 Paymark Inc.</span>
<div className="flex gap-6">
<svg className="lucide lucide-twitter w-5 h-5 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-instagram w-5 h-5 text-neutral-600 hover:text-white cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</footer>


    </>
  );
}
