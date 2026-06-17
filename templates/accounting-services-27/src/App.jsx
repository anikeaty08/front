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
      

<header bis_size='{"x":0,"y":3032,"w":1040,"h":64,"abs_x":480,"abs_y":3074}' className="fixed top-0 w-full backdrop-blur-xl border-b z-50 bg-white/70 border-gray-200/50">
<div bis_size='{"x":0,"y":3032,"w":1040,"h":64,"abs_x":480,"abs_y":3074}' className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div bis_size='{"x":24,"y":3054,"w":317,"h":20,"abs_x":504,"abs_y":3096}' className="flex items-center gap-8">

<div bis_size='{"x":24,"y":3055,"w":63,"h":18,"abs_x":504,"abs_y":3097}' className="flex flex-col">
<span bis_size='{"x":24,"y":3055,"w":63,"h":18,"abs_x":504,"abs_y":3097}' className="text-lg font-medium tracking-tighter leading-none text-gray-900">MyBMC</span>
</div>
<nav bis_size='{"x":119,"y":3054,"w":221,"h":20,"abs_x":599,"abs_y":3096}' className="hidden md:flex items-center gap-6 border-l pl-6 border-gray-200">
<a bis_size='{"x":144,"y":3054,"w":57,"h":20,"abs_x":624,"abs_y":3096}' className="text-sm font-normal text-gray-500 transition-colors hover:text-gray-900" href="#services">Services</a>
<a bis_size='{"x":226,"y":3054,"w":39,"h":20,"abs_x":706,"abs_y":3096}' className="text-sm font-normal text-gray-500 transition-colors hover:text-gray-900" href="#about">About</a>
<a bis_size='{"x":289,"y":3054,"w":51,"h":20,"abs_x":769,"abs_y":3096}' className="text-sm font-normal text-gray-500 transition-colors hover:text-gray-900" href="#contact">Contact</a>
</nav>
</div>
<div bis_size='{"x":820,"y":3050,"w":196,"h":28,"abs_x":1300,"abs_y":3092}' className="flex items-center gap-5">
<button bis_size='{"x":820,"y":3054,"w":87,"h":20,"abs_x":1300,"abs_y":3096}' className="hidden md:flex items-center gap-1.5 text-sm font-normal text-gray-500 transition-colors hover:text-gray-900">
<iconify-icon bis_size='{"x":820,"y":3056,"w":16,"h":16,"abs_x":1300,"abs_y":3098}' className="text-base" icon="solar:global-linear"></iconify-icon>
                    English
                    <iconify-icon bis_size='{"x":896,"y":3058,"w":12,"h":12,"abs_x":1376,"abs_y":3100}' className="text-xs text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<a bis_size='{"x":928,"y":3050,"w":88,"h":28,"abs_x":1408,"abs_y":3092}' className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-gray-900 hover:bg-gray-800 text-white" href="#appointment">
                    Book now
                </a>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":0,"w":1040,"h":1168,"abs_x":480,"abs_y":42}' className="md:pt-44 md:pb-24 flex flex-col text-center pt-32 pr-6 pb-16 pl-6 items-center">
<div bis_size='{"x":184,"y":176,"w":672,"h":471,"abs_x":664,"abs_y":218}' className="max-w-4xl mx-auto flex flex-col items-center">
<div bis_size='{"x":429,"y":176,"w":182,"h":25,"abs_x":909,"abs_y":218}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-blue-50 border-blue-200/60 text-blue-700">
<span bis_size='{"x":442,"y":185,"w":6,"h":6,"abs_x":922,"abs_y":227}' className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Professional Corporation
            </div>
<h1 bis_size='{"x":187,"y":233,"w":666,"h":144,"abs_x":667,"abs_y":275}' className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-8 text-gray-900">
                Your CPA for Clarity,<br bis_size='{"x":833,"y":225,"w":0,"h":87,"abs_x":1313,"abs_y":267}' className="hidden md:block"/> Confidence &amp; Growth
            </h1>
<p bis_size='{"x":184,"y":409,"w":672,"h":84,"abs_x":664,"abs_y":451}' className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-12 font-normal">
                Personalized accounting and tax solutions designed to help you stay compliant while maximizing savings for you, your business, and your family.
            </p>
<div bis_size='{"x":370,"y":541,"w":300,"h":41,"abs_x":850,"abs_y":583}' className="flex items-center gap-4 mb-16">
<a bis_size='{"x":370,"y":542,"w":160,"h":40,"abs_x":850,"abs_y":584}' className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-gray-900 hover:bg-gray-800 text-white" href="#services">
                    Explore Services
                </a>
<a bis_size='{"x":546,"y":541,"w":124,"h":41,"abs_x":1026,"abs_y":583}' className="border px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-white hover:bg-gray-50 text-gray-900 border-gray-200" href="#contact">
                    Contact Us
                </a>
</div>
</div>
<div bis_size='{"x":24,"y":647,"w":992,"h":425,"abs_x":504,"abs_y":689}' className="w-full max-w-6xl mx-auto aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border shadow-blue-900/5 border-gray-200/60 bg-gray-100">
<img alt="Financial growth visualization" bis_size='{"x":24,"y":648,"w":991,"h":423,"abs_x":504,"abs_y":690}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</section>

<section bis_size='{"x":0,"y":1168,"w":1040,"h":1475,"abs_x":480,"abs_y":1210}' className="py-24 border-y bg-white border-gray-200" id="services">
<div bis_size='{"x":0,"y":1265,"w":1040,"h":1281,"abs_x":480,"abs_y":1307}' className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8">

<div bis_size='{"x":24,"y":1265,"w":309,"h":1281,"abs_x":504,"abs_y":1307}' className="lg:col-span-4 relative">
<div bis_size='{"x":24,"y":2413,"w":309,"h":134,"abs_x":504,"abs_y":2455}' className="lg:sticky lg:top-32">
<h2 bis_size='{"x":24,"y":2413,"w":309,"h":40,"abs_x":504,"abs_y":2455}' className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-gray-900">Our Services</h2>
<p bis_size='{"x":24,"y":2469,"w":309,"h":78,"abs_x":504,"abs_y":2511}' className="text-base text-gray-500 font-normal leading-relaxed max-w-sm">
                        Bringing clarity and structure to your finances—so you can focus on what truly matters in your business and life.
                    </p>
</div>
</div>

<div bis_size='{"x":365,"y":1265,"w":651,"h":1281,"abs_x":845,"abs_y":1307}' className="lg:col-span-8 flex flex-col gap-6">

<div bis_size='{"x":365,"y":1265,"w":651,"h":396,"abs_x":845,"abs_y":1307}' className="rounded-3xl p-8 md:p-10 border transition-colors bg-gray-50/50 border-gray-100 hover:bg-gray-50">
<div bis_size='{"x":406,"y":1306,"w":569,"h":72,"abs_x":886,"abs_y":1348}' className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
<div bis_size='{"x":406,"y":1306,"w":48,"h":48,"abs_x":886,"abs_y":1348}' className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center bg-white border-gray-200">
<iconify-icon bis_size='{"x":418,"y":1318,"w":24,"h":24,"abs_x":898,"abs_y":1360}' className="text-2xl text-blue-600" icon="solar:calculator-linear"></iconify-icon>
</div>
<h3 bis_size='{"x":470,"y":1314,"w":191,"h":32,"abs_x":950,"abs_y":1356}' className="text-2xl font-medium tracking-tight text-gray-900">Tax &amp; Accounting</h3>
</div>
<div bis_size='{"x":406,"y":1411,"w":569,"h":209,"abs_x":886,"abs_y":1453}' className="grid md:grid-cols-2 gap-8">
<div bis_size='{"x":406,"y":1411,"w":268,"h":100,"abs_x":886,"abs_y":1453}'>
<h4 bis_size='{"x":406,"y":1411,"w":268,"h":24,"abs_x":886,"abs_y":1453}' className="text-base font-medium mb-2 text-gray-900">T1 – Personal Income Tax</h4>
<p bis_size='{"x":406,"y":1443,"w":268,"h":68,"abs_x":886,"abs_y":1485}' className="text-sm text-gray-500 font-normal leading-relaxed">For employees, contractors, and self-employed individuals seeking maximum deductions while staying compliant.</p>
</div>
<div bis_size='{"x":707,"y":1411,"w":268,"h":100,"abs_x":1187,"abs_y":1453}'>
<h4 bis_size='{"x":707,"y":1411,"w":268,"h":24,"abs_x":1187,"abs_y":1453}' className="text-base font-medium mb-2 text-gray-900">T2 – Corporate Tax</h4>
<p bis_size='{"x":707,"y":1443,"w":268,"h":68,"abs_x":1187,"abs_y":1485}' className="text-sm text-gray-500 font-normal leading-relaxed">For small businesses and CCPCs looking to optimize tax strategies, dividend planning, and CRA compliance.</p>
</div>
<div bis_size='{"x":406,"y":1543,"w":569,"h":77,"abs_x":886,"abs_y":1585}' className="md:col-span-2">
<h4 bis_size='{"x":406,"y":1543,"w":569,"h":24,"abs_x":886,"abs_y":1585}' className="text-base font-medium mb-2 text-gray-900">Bookkeeping &amp; Financial Reporting</h4>
<p bis_size='{"x":406,"y":1575,"w":569,"h":45,"abs_x":886,"abs_y":1617}' className="text-sm text-gray-500 font-normal leading-relaxed">Ensure accuracy, transparency, and real-time insights into your business performance.</p>
</div>
</div>
</div>

<div bis_size='{"x":365,"y":1685,"w":651,"h":418,"abs_x":845,"abs_y":1727}' className="rounded-3xl p-8 md:p-10 border transition-colors bg-gray-50/50 border-gray-100 hover:bg-gray-50">
<div bis_size='{"x":406,"y":1726,"w":569,"h":72,"abs_x":886,"abs_y":1768}' className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
<div bis_size='{"x":406,"y":1726,"w":48,"h":48,"abs_x":886,"abs_y":1768}' className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center bg-white border-gray-200">
<iconify-icon bis_size='{"x":418,"y":1738,"w":24,"h":24,"abs_x":898,"abs_y":1780}' className="text-2xl text-blue-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 bis_size='{"x":470,"y":1734,"w":234,"h":32,"abs_x":950,"abs_y":1776}' className="text-2xl font-medium tracking-tight text-gray-900">Finance &amp; Investment</h3>
</div>
<div bis_size='{"x":406,"y":1831,"w":569,"h":232,"abs_x":886,"abs_y":1873}' className="grid md:grid-cols-2 gap-8">
<div bis_size='{"x":406,"y":1831,"w":268,"h":100,"abs_x":886,"abs_y":1873}'>
<h4 bis_size='{"x":406,"y":1831,"w":268,"h":24,"abs_x":886,"abs_y":1873}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":406,"y":1835,"w":16,"h":16,"abs_x":886,"abs_y":1877}' className="text-purple-500" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
                                Wealth Management
                            </h4>
<p bis_size='{"x":406,"y":1863,"w":268,"h":68,"abs_x":886,"abs_y":1905}' className="text-sm text-gray-500 font-normal leading-relaxed">Align your goals, risk tolerance, and tax strategies to grow and protect your assets.</p>
</div>
<div bis_size='{"x":707,"y":1831,"w":268,"h":100,"abs_x":1187,"abs_y":1873}'>
<h4 bis_size='{"x":707,"y":1831,"w":268,"h":24,"abs_x":1187,"abs_y":1873}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":707,"y":1835,"w":16,"h":16,"abs_x":1187,"abs_y":1877}' className="text-pink-500" icon="solar:home-2-linear"></iconify-icon>
                                Cash Flow Advisory
                            </h4>
<p bis_size='{"x":707,"y":1863,"w":268,"h":68,"abs_x":1187,"abs_y":1905}' className="text-sm text-gray-500 font-normal leading-relaxed">Understand your inflows and outflows to improve liquidity and long-term sustainability.</p>
</div>
<div bis_size='{"x":406,"y":1963,"w":268,"h":100,"abs_x":886,"abs_y":2005}'>
<h4 bis_size='{"x":406,"y":1963,"w":268,"h":24,"abs_x":886,"abs_y":2005}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":406,"y":1967,"w":16,"h":16,"abs_x":886,"abs_y":2009}' className="text-blue-500" icon="solar:chart-linear"></iconify-icon>
                                Portfolio Review
                            </h4>
<p bis_size='{"x":406,"y":1995,"w":268,"h":68,"abs_x":886,"abs_y":2037}' className="text-sm text-gray-500 font-normal leading-relaxed">Evaluate your investment mix with an eye toward diversification, tax efficiency, and future growth.</p>
</div>
<div bis_size='{"x":707,"y":1963,"w":268,"h":100,"abs_x":1187,"abs_y":2005}'>
<h4 bis_size='{"x":707,"y":1963,"w":268,"h":24,"abs_x":1187,"abs_y":2005}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":707,"y":1967,"w":16,"h":16,"abs_x":1187,"abs_y":2009}' className="text-rose-500" icon="solar:compass-linear"></iconify-icon>
                                Retirement Planning
                            </h4>
<p bis_size='{"x":707,"y":1995,"w":268,"h":45,"abs_x":1187,"abs_y":2037}' className="text-sm text-gray-500 font-normal leading-relaxed">Prepare for financial independence and seamless business or family transitions.</p>
</div>
</div>
</div>

<div bis_size='{"x":365,"y":2128,"w":651,"h":418,"abs_x":845,"abs_y":2170}' className="rounded-3xl p-8 md:p-10 border transition-colors bg-gray-50/50 border-gray-100 hover:bg-gray-50">
<div bis_size='{"x":406,"y":2169,"w":569,"h":72,"abs_x":886,"abs_y":2211}' className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
<div bis_size='{"x":406,"y":2169,"w":48,"h":48,"abs_x":886,"abs_y":2211}' className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center bg-white border-gray-200">
<iconify-icon bis_size='{"x":418,"y":2181,"w":24,"h":24,"abs_x":898,"abs_y":2223}' className="text-2xl text-blue-600" icon="solar:planet-linear"></iconify-icon>
</div>
<h3 bis_size='{"x":470,"y":2177,"w":242,"h":32,"abs_x":950,"abs_y":2219}' className="text-2xl font-medium tracking-tight text-gray-900">Business Consultation</h3>
</div>
<div bis_size='{"x":406,"y":2274,"w":569,"h":232,"abs_x":886,"abs_y":2316}' className="grid md:grid-cols-2 gap-8">
<div bis_size='{"x":406,"y":2274,"w":268,"h":100,"abs_x":886,"abs_y":2316}'>
<h4 bis_size='{"x":406,"y":2274,"w":268,"h":24,"abs_x":886,"abs_y":2316}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":406,"y":2278,"w":16,"h":16,"abs_x":886,"abs_y":2320}' className="text-purple-500" icon="solar:earth-linear"></iconify-icon>
                                Global Supply Chain
                            </h4>
<p bis_size='{"x":406,"y":2306,"w":268,"h":68,"abs_x":886,"abs_y":2348}' className="text-sm text-gray-500 font-normal leading-relaxed">Optimize sourcing, logistics, and supplier relations across Asia, the U.S., and Mexico.</p>
</div>
<div bis_size='{"x":707,"y":2274,"w":268,"h":100,"abs_x":1187,"abs_y":2316}'>
<h4 bis_size='{"x":707,"y":2274,"w":268,"h":24,"abs_x":1187,"abs_y":2316}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":707,"y":2286,"w":0,"h":0,"abs_x":1187,"abs_y":2328}' className="text-purple-600" icon="solar:handshake-linear"></iconify-icon>
                                Sales &amp; Marketing
                            </h4>
<p bis_size='{"x":707,"y":2306,"w":268,"h":45,"abs_x":1187,"abs_y":2348}' className="text-sm text-gray-500 font-normal leading-relaxed">Expand your reach through data-driven market analysis and brand positioning.</p>
</div>
<div bis_size='{"x":406,"y":2406,"w":268,"h":100,"abs_x":886,"abs_y":2448}'>
<h4 bis_size='{"x":406,"y":2406,"w":268,"h":24,"abs_x":886,"abs_y":2448}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":406,"y":2410,"w":16,"h":16,"abs_x":886,"abs_y":2452}' className="text-gray-500" icon="solar:buildings-linear"></iconify-icon>
                                Near-shoring
                            </h4>
<p bis_size='{"x":406,"y":2438,"w":268,"h":68,"abs_x":886,"abs_y":2480}' className="text-sm text-gray-500 font-normal leading-relaxed">Evaluate, plan, and execute transitions to the U.S., Mexico, and Canada for cost efficiency.</p>
</div>
<div bis_size='{"x":707,"y":2406,"w":268,"h":100,"abs_x":1187,"abs_y":2448}'>
<h4 bis_size='{"x":707,"y":2406,"w":268,"h":24,"abs_x":1187,"abs_y":2448}' className="text-base font-medium mb-2 flex items-center gap-2 text-gray-900">
<iconify-icon bis_size='{"x":707,"y":2410,"w":16,"h":16,"abs_x":1187,"abs_y":2452}' className="text-blue-500" icon="solar:chart-square-linear"></iconify-icon>
                                Process Optimization
                            </h4>
<p bis_size='{"x":707,"y":2438,"w":268,"h":68,"abs_x":1187,"abs_y":2480}' className="text-sm text-gray-500 font-normal leading-relaxed">Streamline your operations with financial clarity and sustainable growth plans.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2644,"w":1040,"h":464,"abs_x":480,"abs_y":2686}' className="py-12 px-6 bg-gray-50" id="appointment">
<div bis_size='{"x":24,"y":2692,"w":992,"h":368,"abs_x":504,"abs_y":2734}' className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative bg-gray-900">
<div bis_label="style" bis_size='{"x":24,"y":2692,"w":992,"h":368,"abs_x":504,"abs_y":2734}' className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
<div bis_size='{"x":24,"y":2692,"w":992,"h":368,"abs_x":504,"abs_y":2734}' className="p-10 md:p-16 lg:p-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div bis_size='{"x":104,"y":2777,"w":384,"h":198,"abs_x":584,"abs_y":2819}'>
<h2 bis_size='{"x":104,"y":2777,"w":384,"h":96,"abs_x":584,"abs_y":2819}' className="text-3xl lg:text-5xl font-medium tracking-tight mb-6 text-white">Schedule an<br bis_size='{"x":374,"y":2772,"w":0,"h":57,"abs_x":854,"abs_y":2814}'/>Appointment</h2>
<p bis_size='{"x":104,"y":2897,"w":384,"h":78,"abs_x":584,"abs_y":2939}' className="text-base font-normal leading-relaxed max-w-md text-gray-400">
                        Ensure your financial records are precise and compliant. Our experts are dedicated to providing accurate insights tailored to your business needs.
                    </p>
</div>
<div bis_size='{"x":552,"y":2772,"w":384,"h":208,"abs_x":1032,"abs_y":2814}' className="flex flex-col gap-3 w-full">
<a bis_size='{"x":552,"y":2772,"w":384,"h":61,"abs_x":1032,"abs_y":2814}' className="group flex items-center justify-between px-6 py-5 border rounded-2xl transition-all duration-200 bg-white/5 border-white/10 hover:bg-white/10" href="#">
<span bis_size='{"x":577,"y":2793,"w":118,"h":20,"abs_x":1057,"abs_y":2835}' className="text-sm font-medium text-white">Free Consultation</span>
<iconify-icon bis_size='{"x":894,"y":2794,"w":18,"h":18,"abs_x":1374,"abs_y":2836}' className="text-lg group-hover:translate-x-1 transition-transform text-blue-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a bis_size='{"x":552,"y":2845,"w":384,"h":61,"abs_x":1032,"abs_y":2887}' className="group flex items-center justify-between px-6 py-5 border rounded-2xl transition-all duration-200 bg-white/5 border-white/10 hover:bg-white/10" href="#">
<span bis_size='{"x":577,"y":2866,"w":203,"h":20,"abs_x":1057,"abs_y":2908}' className="text-sm font-medium text-white">Personal Finance Consultation</span>
<iconify-icon bis_size='{"x":894,"y":2867,"w":18,"h":18,"abs_x":1374,"abs_y":2909}' className="text-lg group-hover:translate-x-1 transition-transform text-blue-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a bis_size='{"x":552,"y":2919,"w":384,"h":61,"abs_x":1032,"abs_y":2961}' className="group flex items-center justify-between px-6 py-5 border rounded-2xl transition-all duration-200 bg-white/5 border-white/10 hover:bg-white/10" href="#">
<span bis_size='{"x":577,"y":2940,"w":171,"h":20,"abs_x":1057,"abs_y":2982}' className="text-sm font-medium text-white">Consultation for Business</span>
<iconify-icon bis_size='{"x":894,"y":2941,"w":18,"h":18,"abs_x":1374,"abs_y":2983}' className="text-lg group-hover:translate-x-1 transition-transform text-blue-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3109,"w":1040,"h":842,"abs_x":480,"abs_y":3151}' className="py-24 bg-gray-50" id="about">
<div bis_size='{"x":0,"y":3205,"w":1040,"h":650,"abs_x":480,"abs_y":3247}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":3205,"w":992,"h":650,"abs_x":504,"abs_y":3247}' className="grid lg:grid-cols-5 gap-6">

<div bis_size='{"x":24,"y":3205,"w":586,"h":650,"abs_x":504,"abs_y":3247}' className="lg:col-span-3 p-10 md:p-14 rounded-[2rem] border flex flex-col justify-center bg-white border-gray-200">
<h2 bis_size='{"x":80,"y":3261,"w":472,"h":40,"abs_x":560,"abs_y":3303}' className="text-3xl lg:text-4xl font-medium tracking-tight mb-8 text-gray-900">About the Founder</h2>
<div bis_size='{"x":80,"y":3333,"w":472,"h":464,"abs_x":560,"abs_y":3375}' className="space-y-6 text-base text-gray-500 font-normal leading-relaxed">
<p bis_size='{"x":80,"y":3333,"w":472,"h":130,"abs_x":560,"abs_y":3375}'>
                            As both an entrepreneur and a CPA, I understand how overwhelming it can feel to navigate today's complex tax rules, financial decisions, and business challenges. That's why I built <strong bis_size='{"x":162,"y":3415,"w":255,"h":19,"abs_x":642,"abs_y":3457}' className="font-medium text-gray-900">MyBMC Professional Corporation</strong> — to bridge the gap between compliance and clarity.
                        </p>
<p bis_size='{"x":80,"y":3487,"w":472,"h":78,"abs_x":560,"abs_y":3529}'>
                            My approach is simple: explain the rules in plain language, uncover savings others overlook, and create strategies that align with your goals.
                        </p>
<p bis_size='{"x":80,"y":3589,"w":472,"h":104,"abs_x":560,"abs_y":3631}'>
                            Whether you're growing a business or building personal wealth, I'll help you stay compliant, confident, and on track toward true financial freedom — for yourself, your family, and your future.
                        </p>
<div bis_size='{"x":80,"y":3717,"w":472,"h":80,"abs_x":560,"abs_y":3759}' className="pt-6 mt-6 border-t border-gray-100">
<p bis_size='{"x":80,"y":3742,"w":472,"h":56,"abs_x":560,"abs_y":3784}' className="text-lg font-medium italic tracking-tight text-gray-900">
                                "Because understanding your numbers means owning your freedom."
                            </p>
</div>
</div>
</div>

<div bis_size='{"x":634,"y":3205,"w":382,"h":650,"abs_x":1114,"abs_y":3247}' className="lg:col-span-2 rounded-[2rem] overflow-hidden min-h-[400px] bg-gray-200">
<img alt="Founder Portrait" bis_size='{"x":634,"y":3205,"w":382,"h":650,"abs_x":1114,"abs_y":3247}' className="grayscale-[20%] w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/68fa3547b6e44038eab18d49/ca1fadbd-5a6f-40c3-8441-c4c2a59ba3e8/2636c688-a709-4c2d-8d69-aa001eb08eb1.jpeg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3951,"w":1040,"h":651,"abs_x":480,"abs_y":3993}' className="py-24 border-t bg-white border-gray-200" id="contact">
<div bis_size='{"x":8,"y":4048,"w":1024,"h":458,"abs_x":488,"abs_y":4090}' className="max-w-5xl mx-auto px-6">
<div bis_size='{"x":32,"y":4048,"w":976,"h":458,"abs_x":512,"abs_y":4090}' className="rounded-[2rem] shadow-sm border overflow-hidden flex flex-col md:flex-row bg-white border-gray-200">
<div bis_size='{"x":33,"y":4049,"w":389,"h":457,"abs_x":513,"abs_y":4091}' className="p-10 md:p-14 md:w-2/5 flex flex-col justify-between border-b md:border-b-0 md:border-r bg-gray-50 border-gray-200">
<div bis_size='{"x":89,"y":4105,"w":276,"h":97,"abs_x":569,"abs_y":4147}'>
<h2 bis_size='{"x":89,"y":4105,"w":276,"h":36,"abs_x":569,"abs_y":4147}' className="text-3xl font-medium tracking-tight mb-4 text-gray-900">Get in touch</h2>
<p bis_size='{"x":89,"y":4157,"w":276,"h":45,"abs_x":569,"abs_y":4199}' className="text-sm text-gray-500 font-normal leading-relaxed">
                            Interested in working together? Fill out some info and we will be in touch shortly.
                        </p>
</div>
<div bis_size='{"x":89,"y":4394,"w":276,"h":56,"abs_x":569,"abs_y":4436}' className="mt-12 space-y-4 text-sm">
<a bis_size='{"x":89,"y":4394,"w":276,"h":20,"abs_x":569,"abs_y":4436}' className="flex items-center gap-3 transition-colors text-gray-600 hover:text-blue-700" href="mailto:books@mybmc.co">
<iconify-icon bis_size='{"x":89,"y":4395,"w":18,"h":18,"abs_x":569,"abs_y":4437}' className="text-lg" icon="solar:letter-linear"></iconify-icon>
                            books@mybmc.co
                        </a>
<a bis_size='{"x":89,"y":4430,"w":276,"h":20,"abs_x":569,"abs_y":4472}' className="flex items-center gap-3 transition-colors text-gray-600 hover:text-blue-700" href="tel:+12899639885">
<iconify-icon bis_size='{"x":89,"y":4431,"w":18,"h":18,"abs_x":569,"abs_y":4473}' className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            +1 (289) 963 9885
                        </a>
</div>
</div>
<div bis_size='{"x":422,"y":4049,"w":584,"h":457,"abs_x":902,"abs_y":4091}' className="p-10 md:p-14 md:w-3/5">
<form bis_size='{"x":478,"y":4105,"w":472,"h":345,"abs_x":958,"abs_y":4147}' className="space-y-5">
<div bis_size='{"x":478,"y":4105,"w":472,"h":59,"abs_x":958,"abs_y":4147}' className="grid grid-cols-2 gap-5">
<div bis_size='{"x":478,"y":4105,"w":226,"h":59,"abs_x":958,"abs_y":4147}'>
<label bis_size='{"x":478,"y":4105,"w":226,"h":16,"abs_x":958,"abs_y":4147}' className="block text-xs font-medium mb-1.5 text-gray-700" htmlFor="firstName">First Name</label>
<input bis_size='{"x":478,"y":4127,"w":226,"h":37,"abs_x":958,"abs_y":4169}' className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-shadow text-sm bg-gray-50 border-gray-200 text-gray-900" id="firstName" required="" type="text"/>
</div>
<div bis_size='{"x":725,"y":4105,"w":226,"h":59,"abs_x":1205,"abs_y":4147}'>
<label bis_size='{"x":725,"y":4105,"w":226,"h":16,"abs_x":1205,"abs_y":4147}' className="block text-xs font-medium mb-1.5 text-gray-700" htmlFor="lastName">Last Name</label>
<input bis_size='{"x":725,"y":4127,"w":226,"h":37,"abs_x":1205,"abs_y":4169}' className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-shadow text-sm bg-gray-50 border-gray-200 text-gray-900" id="lastName" required="" type="text"/>
</div>
</div>
<div bis_size='{"x":478,"y":4184,"w":472,"h":59,"abs_x":958,"abs_y":4226}'>
<label bis_size='{"x":478,"y":4184,"w":472,"h":16,"abs_x":958,"abs_y":4226}' className="block text-xs font-medium mb-1.5 text-gray-700" htmlFor="email">Email</label>
<input bis_size='{"x":478,"y":4206,"w":472,"h":37,"abs_x":958,"abs_y":4248}' className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-shadow text-sm bg-gray-50 border-gray-200 text-gray-900" id="email" required="" type="email"/>
</div>
<div bis_size='{"x":478,"y":4264,"w":472,"h":126,"abs_x":958,"abs_y":4306}'>
<label bis_size='{"x":478,"y":4264,"w":472,"h":16,"abs_x":958,"abs_y":4306}' className="block text-xs font-medium mb-1.5 text-gray-700" htmlFor="message">Message</label>
<textarea bis_size='{"x":478,"y":4286,"w":472,"h":97,"abs_x":958,"abs_y":4328}' className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-shadow text-sm resize-y bg-gray-50 border-gray-200 text-gray-900" id="message" required="" rows="4"></textarea>
</div>
<button bis_size='{"x":478,"y":4410,"w":472,"h":40,"abs_x":958,"abs_y":4452}' className="w-full font-medium py-2.5 px-6 rounded-lg transition-colors text-sm mt-2 bg-gray-900 hover:bg-gray-800 text-white" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":4603,"w":1040,"h":116,"abs_x":480,"abs_y":4645}' className="border-t py-12 bg-white border-gray-200">
<div bis_size='{"x":0,"y":4651,"w":1040,"h":20,"abs_x":480,"abs_y":4693}' className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p bis_size='{"x":24,"y":4651,"w":280,"h":20,"abs_x":504,"abs_y":4693}' className="text-sm font-normal text-gray-400">
                © 2024 MyBMC Professional Corporation.
            </p>
<p bis_size='{"x":614,"y":4651,"w":402,"h":20,"abs_x":1094,"abs_y":4693}' className="text-sm font-medium tracking-tight text-center md:text-right text-gray-600">
                Turning numbers into knowledge, and knowledge into freedom.
            </p>
</div>
</footer>

    </>
  );
}
