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
theme: {
extend: {
colors: {
cream: '#F6EAD0',
bordeaux: '#230007',
'bordeaux-light': '#3E000D',
orange: '#FB612E',
'brand-blue': '#0099FF',
},
fontFamily: {
editorial: ['PPEditorialNew', 'serif'],
instrument: ['Instrument Sans', 'sans-serif'],
fragment: ['Fragment Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'marquee-slow': 'marquee 35s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full relative z-50">
<div className="flex items-center gap-2">
<div className="logo-mark rotate-45">
<span className="bg-brand-blue"></span>
<span className="bg-orange"></span>
<span className="bg-bordeaux-light"></span>
<span className="bg-orange"></span>
<span className="bg-bordeaux-light"></span>
<span className="bg-brand-blue"></span>
<span className="bg-bordeaux-light"></span>
<span className="bg-brand-blue"></span>
<span className="bg-orange"></span>
</div>
<span className="font-editorial text-3xl tracking-tight leading-none mt-1">everything</span>
</div>
<div className="hidden lg:flex items-center gap-10">
<a className="hover:opacity-70 transition-opacity" href="#">Home</a>
<a className="hover:opacity-70 transition-opacity" href="#">Earn Rewards</a>
<a className="hover:opacity-70 transition-opacity" href="#">Public Sale</a>
<a className="hover:opacity-70 transition-opacity" href="#">Litepaper</a>
</div>
<div className="flex items-center gap-6">
<button className="hover:opacity-70 transition-opacity">
<i className="w-6 h-6" data-lucide="globe"></i>
</button>
<button className="bg-bordeaux-light text-cream p-2 rounded-lg hover:bg-bordeaux transition-colors">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</button>
</div>
</nav>

<section className="relative pt-16 pb-12 px-4 max-w-[1200px] mx-auto w-full flex flex-col items-center">
<h1 className="font-editorial text-7xl md:text-9xl font-medium tracking-tight text-center leading-[0.9] w-full max-w-4xl relative z-10">
<div className="relative inline-block">
                Looking for your
                <div className="absolute -top-6 -right-16 md:-right-24 rotate-[12deg] bg-brand-blue text-white font-instrument text-sm md:text-base px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                    bro shill some coins!
                </div>
</div>
<br/>
<div className="relative inline-block mt-2">
                next 1000x?
                <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-[40%] -rotate-[8deg] bg-orange text-white font-instrument text-sm md:text-base px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                    everything is here!
                </div>
</div>
</h1>

<div className="absolute right-0 top-0 w-64 h-80 hidden lg:block opacity-90 pointer-events-none -z-10 translate-x-20 translate-y-10">
<div className="absolute right-10 top-0 w-36 h-72 bg-white rounded-3xl border-4 border-gray-200 shadow-xl rotate-[15deg] overflow-hidden flex flex-col">
<div className="bg-gray-100 p-3 border-b border-gray-200 flex justify-between items-center">
<span className="text-xs font-medium">Trading</span>
<i className="w-3 h-3 text-brand-blue" data-lucide="settings"></i>
</div>
<div className="p-3 flex-1">
<div className="flex gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-brand-blue/20"></div>
<div>
<div className="w-12 h-2 bg-gray-200 rounded-full mb-1"></div>
<div className="w-8 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="h-20 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden">
<svg className="absolute bottom-0 w-full h-12 text-green-400 opacity-50" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 L0,30 L20,40 L40,20 L60,35 L80,10 L100,25 L100,50 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
<div className="absolute right-24 top-20 w-36 h-72 bg-white rounded-3xl border-4 border-gray-200 shadow-2xl rotate-[5deg] overflow-hidden flex flex-col">
<div className="bg-gray-100 p-3 border-b border-gray-200 flex justify-between items-center">
<span className="text-xs font-medium">Earn</span>
<i className="w-3 h-3 text-orange" data-lucide="circle-dollar-sign"></i>
</div>
<div className="p-4 flex flex-col items-center justify-center h-full">
<div className="w-20 h-20 border-4 border-gray-100 rounded-lg p-2 flex flex-wrap gap-1 items-center justify-center">
<div className="w-3 h-3 bg-bordeaux-light"></div>
<div className="w-3 h-3 bg-orange"></div>
<div className="w-3 h-3 bg-brand-blue"></div>
<div className="w-3 h-3 bg-bordeaux-light"></div>
</div>
<div className="w-16 h-2 bg-gray-200 rounded-full mt-4"></div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 mt-8 mb-16 relative z-20">
<div className="flex flex-col lg:flex-row justify-between items-center gap-6">
<div className="flex flex-wrap items-center bg-transparent border border-bordeaux-light/30 rounded-3xl p-1.5 hide-scrollbar overflow-x-auto w-full lg:w-auto">
<div className="px-6 py-3 font-fragment text-xl border-r border-bordeaux-light/30 min-w-max hover:bg-bordeaux-light/5 transition-colors cursor-pointer">
                    IB / USDT
                </div>
<div className="px-6 py-3 font-fragment text-xl border-r border-bordeaux-light/30 min-w-max bg-bordeaux-light/5 cursor-pointer">
                    SOL / USDT
                </div>
<div className="px-6 py-3 font-fragment text-xl min-w-max hover:bg-bordeaux-light/5 transition-colors cursor-pointer">
                    BONK / USDT
                </div>
</div>
<button className="bg-bordeaux text-orange rounded-3xl px-8 py-3.5 flex items-center justify-between gap-6 hover:bg-bordeaux-light transition-colors group w-full lg:w-auto">
<span className="font-editorial text-4xl tracking-tight mt-1">Trade Now!</span>
<div className="w-10 h-10 rounded-full bg-orange text-bordeaux flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 mb-20">
<div className="bg-bordeaux rounded-[32px] p-12 flex items-center justify-center text-center min-h-[280px]">
<h2 className="font-editorial text-5xl md:text-6xl tracking-tight text-orange font-medium leading-tight max-w-md">
                The $E Public Sale is Now Live!
            </h2>
</div>
<div className="border border-bordeaux-light/30 rounded-[32px] p-10 flex flex-col justify-between bg-cream min-h-[280px]">
<h3 className="font-instrument text-3xl font-medium leading-tight max-w-[250px]">
                Join early to lock in lower prices
            </h3>
<button className="bg-orange text-white rounded-xl py-4 px-6 flex items-center justify-between mt-8 hover:bg-orange/90 transition-colors w-full group">
<span className="text-xl">I'm in!</span>
<div className="w-8 h-8 rounded-full bg-white text-orange flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</section>

<div className="w-full overflow-hidden whitespace-nowrap py-4 border-y border-bordeaux-light/10 mb-20 opacity-40">
<div className="inline-block animate-marquee font-editorial text-3xl tracking-tight">
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
</div>
</div>

<section className="max-w-[1000px] mx-auto px-6 relative h-auto md:h-[650px] flex flex-col md:block gap-6 mb-20">

<div className="md:absolute left-6 top-0 w-full md:w-[65%] bg-orange rounded-[32px] p-12 text-bordeaux shadow-sm z-10">
<h2 className="font-editorial text-6xl tracking-tight font-medium leading-tight mb-4">
                Easier than<br/>eating a banana!
            </h2>
<p className="text-xl mb-12 opacity-90 max-w-sm">
                Trade in 3 simple steps! No KYC within Telegram
            </p>
<div className="flex justify-end">
<button className="bg-white text-bordeaux rounded-xl py-3 px-6 flex items-center gap-3 hover:bg-gray-50 transition-colors group">
<span className="text-xl">Trade now</span>
<div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>

<div className="md:absolute right-6 top-48 w-full md:w-[65%] bg-brand-blue rounded-[32px] p-12 text-bordeaux shadow-sm z-20">
<h2 className="font-editorial text-6xl tracking-tight font-medium leading-tight mb-4">
                Complete tasks<br/>&amp; earn rewards
            </h2>
<p className="text-xl mb-12 opacity-90 max-w-sm">
                Check it off, cash it in!
            </p>
<div className="flex justify-end">
<button className="bg-white text-bordeaux rounded-xl py-3 px-6 flex items-center gap-3 hover:bg-gray-50 transition-colors group">
<span className="text-xl">Let's go!</span>
<div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</section>

<div className="w-full overflow-hidden whitespace-nowrap py-4 border-y border-bordeaux-light/10 mt-12 mb-32 opacity-40">
<div className="inline-block animate-marquee-slow font-editorial text-3xl tracking-tight">
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
<span className="mx-4">24/7 BUY IN AT ANY TIME! •</span>
</div>
</div>

<section className="max-w-[1000px] mx-auto px-6 mb-32">
<div className="relative mb-16 text-center border-b border-bordeaux-light/20 pb-8">
<h2 className="font-editorial text-6xl md:text-8xl tracking-tight font-medium inline-block relative">
                Frequently Asked Questions
                <span className="absolute -top-4 -right-12 text-orange text-7xl font-sans">*</span>
</h2>
<div className="absolute right-0 bottom-2 text-brand-blue text-xl font-instrument">
                *yes, we've spilled it all
            </div>
</div>
<div className="flex flex-col">

<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What's the Everything Mini App?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">Do I need to pass KYC?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What is leverage?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What is slippage?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">Can I really trade futures up to 1000x leverage?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What happens if I open a position with 1000x leverage?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What happens when I get liquidated?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What are Everything Points?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">Do I need to complete KYC to earn Everything Points?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">How can I start earning Everything Points?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">Will I get rewards for inviting friends?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">How do I redeem Everything Points for real money?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
<div className="border-b border-bordeaux-light/20 py-6 flex justify-between items-center cursor-pointer group">
<h3 className="text-2xl font-medium group-hover:text-orange transition-colors">What is the $E Public Sale?</h3>
<i className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</div>
</div>
</section>

<footer className="bg-bordeaux text-cream pt-24 pb-12 px-6">
<div className="max-w-[1000px] mx-auto">
<h2 className="font-editorial text-5xl md:text-7xl tracking-tight text-orange font-medium mb-8">
                Trade everything, everywhere
            </h2>
<ul className="font-editorial text-3xl md:text-4xl tracking-tight space-y-4 mb-16 pl-6 list-disc marker:text-white">
<li>Telegram mini app</li>
<li>Web app</li>
<li>iOS and Android compatible</li>
</ul>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="border border-white/20 rounded-2xl py-4 flex items-center justify-center font-fragment text-2xl text-cream hover:bg-white/5 transition-colors cursor-default">
                    10x
                </div>
<div className="border border-white/20 rounded-2xl py-4 flex items-center justify-center font-fragment text-2xl text-cream hover:bg-white/5 transition-colors cursor-default">
                    100x
                </div>
<div className="border border-white/20 rounded-2xl py-4 flex items-center justify-center font-fragment text-2xl text-cream hover:bg-white/5 transition-colors cursor-default">
                    500x
                </div>
<div className="border border-orange rounded-2xl py-4 flex items-center justify-center font-fragment text-2xl text-orange bg-orange/5 cursor-default">
                    1000x
                </div>
</div>
<button className="w-full bg-brand-blue text-white rounded-2xl py-6 px-8 flex items-center justify-between hover:bg-brand-blue/90 transition-colors group">
<span className="font-instrument text-3xl font-medium">Trade now</span>
<i className="w-8 h-8 fill-white -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="send"></i>
</button>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-20 pt-8 border-t border-white/10 text-sm opacity-80">
<div className="flex items-center gap-2">
<div className="logo-mark rotate-45 scale-75">
<span className="bg-brand-blue"></span><span className="bg-orange"></span><span className="bg-white"></span>
<span className="bg-orange"></span><span className="bg-white"></span><span className="bg-brand-blue"></span>
<span className="bg-white"></span><span className="bg-brand-blue"></span><span className="bg-orange"></span>
</div>
<span className="font-editorial text-2xl tracking-tight leading-none mt-1">everything</span>
</div>
<div className="text-center font-instrument text-xs md:text-sm">
                    © 2026 Everything.co. All rights reserved.
                </div>
<div className="flex items-center gap-6">
<a className="hover:text-orange transition-colors" href="#">
<i className="w-5 h-5 -rotate-45 fill-current" data-lucide="send"></i>
</a>
<a className="hover:text-orange transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
