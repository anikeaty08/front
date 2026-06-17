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



        function toggleFAQ(button) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const content = button.nextElementSibling;
            
            document.querySelectorAll('.faq-button').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.classList.remove('open');
            });

            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
            }
        }
    
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
      

<nav className="w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
<div className="md:px-8 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="font-sans font-medium text-lg tracking-tight">1 FINANCE</div>
<div className="hidden md:flex space-x-8 text-sm text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#">Advisory</a>
<a className="hover:text-gray-900 transition-colors" href="#">Services</a>
<a className="text-gray-900 border-b border-gray-900 pb-1" href="#">Insights</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
</div>
<div className="flex items-center space-x-4">
<button className="text-gray-900 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="w-full">

<section className="md:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4">
<div className="flex flex-col lg:flex-row lg:items-end gap-8 gap-x-8 gap-y-8 items-start justify-between">
<div className="max-w-3xl">
<h1 className="md:text-5xl lg:text-6xl text-4xl text-[#171717] tracking-tight font-serif mb-4">Blogs</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-gray-500">
                        Expert-backed perspectives on planning, investing, taxes, and smarter money decisions.
                    </p>
</div>
<div className="w-full lg:w-auto relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-gray-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-transparent border-b border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 smooth-transition" placeholder="Search topics..." type="text"/>
</div>
</div>
</section>

<section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
<article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm smooth-transition hover:shadow-md image-zoom">
<div className="lg:col-span-7 w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
<img alt="Architecture" className="w-full h-full object-cover smooth-transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70426dad-3f33-4dea-a151-4dda47043b18_1600w.png"/>
</div>
<div className="lg:col-span-5 flex flex-col justify-center px-4 lg:px-6 py-4">
<div className="flex items-center space-x-3 mb-4">
<span className="text-xs font-medium tracking-[0.1em] text-gray-900 uppercase">Featured Insight</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-xs text-gray-500 font-light">Investing</span>
</div>
<h2 className="md:text-4xl group-hover:text-gray-600 smooth-transition text-3xl text-[#171717] tracking-tight font-serif mb-4">
                        The Architecture of Wealth: Structured Portfolios for Market Cycles
                    </h2>
<p className="text-base text-gray-500 font-light leading-relaxed mb-6">
                        Building a resilient portfolio requires an understanding of underlying asset structures and personal risk thresholds. A curated approach for sophisticated investors.
                    </p>
<div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-gray-600 font-medium">Editorial Board</span>
</div>
<span className="text-xs text-gray-400 font-light">8 min read</span>
</div>
</div>
</article>
</section><section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-20 pl-4">
<h2 className="text-xs font-medium tracking-[0.1em] uppercase text-gray-400 mb-6">Explore by Topic</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
<a className="group flex flex-col justify-between hover:bg-gray-800 smooth-transition bg-gray-900 h-32 rounded-xl pt-5 pr-5 pb-5 pl-5" href="#">
<iconify-icon className="group-hover:text-white smooth-transition text-gray-400" height="24" icon="solar:star-fall-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Latest</span>
</a><a className="group flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm smooth-transition h-32" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 smooth-transition" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Planning</span>
</a>
<a className="group flex flex-col justify-between hover:border-gray-300 hover:shadow-sm smooth-transition bg-white h-32 border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 smooth-transition" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Investing</span>
</a>
<a className="group flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm smooth-transition h-32" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 smooth-transition" icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Tax / ITR</span>
</a>
<a className="group flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm smooth-transition h-32" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 smooth-transition" icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Loans</span>
</a>
<a className="group flex flex-col justify-between hover:border-gray-300 hover:shadow-sm smooth-transition bg-white h-32 border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 smooth-transition" icon="solar:hourglass-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Retirement</span>
</a>
<a className="group flex flex-col justify-between hover:border-gray-300 hover:shadow-sm smooth-transition bg-white h-32 border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5" href="#">
<iconify-icon className="group-hover:text-gray-900 smooth-transition text-gray-400" height="24" icon="solar:shield-check-linear" strokeWidth="1.5" style={{color: 'rgb(207, 209, 216)'}} width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-gray-900">Insurance</span>
</a>
<a className="group flex flex-col justify-between hover:border-gray-300 hover:shadow-sm smooth-transition bg-white h-32 border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5" href="#">
<svg className="text-gray-400 group-hover:text-gray-900 smooth-transition lucide lucide-landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="22" y2="22"></line>
<line x1="6" x2="6" y1="18" y2="11"></line>
<line x1="10" x2="10" y1="18" y2="11"></line>
<line x1="14" x2="14" y1="18" y2="11"></line>
<line x1="18" x2="18" y1="18" y2="11"></line>
<polygon points="12 2 20 7 4 7"></polygon>
</svg>
<span className="text-sm font-medium text-gray-900 tracking-tight">Will &amp; Estate</span>
</a>
</div>
</section>


<section className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
<div className="flex border-gray-200 border-b mb-8 pb-4 items-center justify-between">
<h3 className="text-xl text-[#171717] tracking-tight font-serif">Latest</h3>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 smooth-transition flex items-center group" href="#">
                    View all <iconify-icon className="ml-1 group-hover:translate-x-1 smooth-transition" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Will &amp; Estate" className="smooth-transition duration-700 -multi w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">Will &amp; Estate</div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2 -multi">
            Securing the Legacy: Core Principles of Indian Estate Planning
        </h4>
</article>

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Tax Planning" className="smooth-transition duration-700 -multi w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">
                Tax Planning
            </div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2">
            Optimizing Tax Liabilities for High-Net-Worth Individuals
        </h4>
</article>

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Retirement" className="smooth-transition duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">
                Retirement
            </div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2">
            Redefining Retirement: From Accumulation to Distribution
        </h4>
</article>

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Investing" className="smooth-transition duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/97eec6f9-aedd-4b66-8fb9-b911fd095c25/800w.jpg"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">
                Investing
            </div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2">
            Strategic Asset Allocation in Volatile Markets
        </h4>
</article>

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Diversification" className="smooth-transition duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8f2e308-3a78-44ba-ad9b-3f23f5863b94_800w.webp"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">
                Diversification
            </div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2">
            Understanding Alternative Investments for Diversification
        </h4>
</article>

<article className="group cursor-pointer flex flex-col image-zoom">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-5">
<img alt="Wealth Preservation" className="smooth-transition duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="text-[10px] sm:text-xs uppercase font-medium text-[#171717] tracking-[0.1em] bg-white/95 border-gray-200/50 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-md">
                Wealth Preservation
            </div>
</div>
<h4 className="group-hover:underline decoration-1 underline-offset-4 decoration-gray-300 leading-snug text-xl font-medium text-[#171717] tracking-tight font-sans mb-2">
            Wealth Preservation Strategies Across Generations
        </h4>
</article>
</div>
</section>

<section className="bg-[#121212] text-white w-full border-y border-gray-800">
<div className="md:px-8 flex flex-col lg:flex-row gap-12 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 gap-x-12 gap-y-12 items-center justify-between">
<div className="max-w-2xl text-center lg:text-left">
<h2 className="md:text-4xl text-3xl text-white tracking-tight font-serif mb-4">Clarity requires conversation.</h2>
<p className="md:text-lg leading-relaxed text-base font-light text-gray-400">Move beyond articles. Speak directly with our credentialed advisors to apply these insights to your unique financial architecture.</p>
</div>
<div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 lg:shrink-0 items-center">
<div className="relative w-full sm:w-72">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+91</span>
<input className="w-full bg-[#1A1A1A] border border-gray-700 text-white rounded-lg pl-12 pr-4 py-3.5 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 smooth-transition" placeholder="Enter phone number" type="tel"/>
</div>
<button className="w-full sm:w-auto bg-white text-[#121212] px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-gray-100 smooth-transition whitespace-nowrap">
                        Request Callback
                    </button>
</div>
</div>
</section>

<section className="md:px-8 max-w-5xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="mb-12 border-b border-gray-200 pb-4">
<h3 className="text-xl text-[#171717] tracking-tight font-serif">Reader's Top Picks</h3>
</div>
<div className="flex flex-col">

<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start py-8 border-b border-gray-100 last:border-0 first:pt-0">
<div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2 pt-1">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Data &amp; Tech</span>
<span className="text-xs text-gray-400 font-light">Oct 18, 2023</span>
</div>
<div className="md:col-span-9">
<h4 className="font-sans text-xl md:text-2xl font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition mb-3">
                            Algorithmic Trading vs. Human Advisory: Finding the Balance
                        </h4>
<p className="text-base text-gray-500 font-light leading-relaxed mb-4 max-w-3xl">
                            While technology brings efficiency, the nuance of behavioral finance often requires a human touch. How to leverage both for optimal portfolio outcomes without succumbing to automated panic.
                        </p>
<span className="text-xs font-medium text-gray-400 flex items-center group-hover:text-gray-900 smooth-transition">
                            Read Article <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</article>
<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start py-8 border-b border-gray-100 last:border-0">
<div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2 pt-1">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Insurance</span>
<span className="text-xs text-gray-400 font-light">Oct 12, 2023</span>
</div>
<div className="md:col-span-9">
<h4 className="font-sans text-xl md:text-2xl font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition mb-3">
                            The Hidden Costs of Under-Insuring Your Health in 2023
                        </h4>
<p className="text-base text-gray-500 font-light leading-relaxed mb-4 max-w-3xl">
                            We hear stories of medical bills eroding wealth. Understanding adequate coverage limits and corporate policy gaps is the first step in defensive financial planning.
                        </p>
<span className="text-xs font-medium text-gray-400 flex items-center group-hover:text-gray-900 smooth-transition">
                            Read Article <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</article>
<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start py-8 border-b border-gray-100 last:border-0">
<div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2 pt-1">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Loan Strategy</span>
<span className="text-xs text-gray-400 font-light">Oct 05, 2023</span>
</div>
<div className="md:col-span-9">
<h4 className="font-sans text-xl md:text-2xl font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition mb-3">
                            Strategic Leverage: When Debt Accelerates Wealth
                        </h4>
<p className="text-base text-gray-500 font-light leading-relaxed mb-4 max-w-3xl">
                            Not all debt is created equal. Examining scenarios where acquiring structured liabilities can accelerate asset acquisition rather than hinder long-term cash flow.
                        </p>
<span className="text-xs font-medium text-gray-400 flex items-center group-hover:text-gray-900 smooth-transition">
                            Read Article <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</article>
<article className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start py-8 border-b border-gray-100 last:border-0">
<div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2 pt-1">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase">Real Estate</span>
<span className="text-xs text-gray-400 font-light">Sep 28, 2023</span>
</div>
<div className="md:col-span-9">
<h4 className="font-sans text-xl md:text-2xl font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition mb-3">
                            Commercial vs. Residential: Evaluating Yields in Premium Markets
                        </h4>
<p className="text-base text-gray-500 font-light leading-relaxed mb-4 max-w-3xl">
                            A deep dive into cap rates, tenant risk profiles, and liquidity differences between investing in prime commercial spaces versus high-end residential properties.
                        </p>
<span className="text-xs font-medium text-gray-400 flex items-center group-hover:text-gray-900 smooth-transition">
                            Read Article <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</div>
</article>
</div>
<div className="mt-12 flex justify-center">
<button className="hover:text-gray-900 hover:border-gray-400 hover:bg-white smooth-transition text-sm font-medium text-gray-600 border-gray-300 border rounded-lg pt-3 pr-6 pb-3 pl-6">Load More Picks</button>
</div>
</section>

<section className="md:px-8 md:py-24 max-w-3xl border-gray-200 border-t mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl text-[#171717] tracking-tight font-serif mb-3">FAQ</h2>
</div>
<div className="border-t border-gray-100">

<div className="border-b border-gray-100">
<button aria-expanded="false" className="faq-button w-full py-6 flex justify-between items-center focus:outline-none text-left group" onclick="toggleFAQ(this)">
<span className="font-sans text-base font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition">Who authors the content in the Insights Library?</span>
<iconify-icon className="faq-icon text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="faq-content">
<p className="pb-6 text-sm text-gray-500 font-light leading-relaxed pr-8">
                            Content is authored and vetted by our internal committee of certified financial planners, tax experts, and market analysts. We ensure all perspectives align with strict fiduciary standards and current regulatory frameworks.
                        </p>
</div>
</div>

<div className="border-b border-gray-100">
<button aria-expanded="false" className="faq-button w-full py-6 flex justify-between items-center focus:outline-none text-left group" onclick="toggleFAQ(this)">
<span className="font-sans text-base font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition">Is this advice tailored to my specific situation?</span>
<iconify-icon className="faq-icon text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="faq-content">
<p className="pb-6 text-sm text-gray-500 font-light leading-relaxed pr-8">
                            The articles herein serve as educational frameworks and general perspectives. For strategies tailored to your specific liabilities, assets, and goals, we recommend speaking directly with an advisor via the consultation form.
                        </p>
</div>
</div>

<div className="border-b border-gray-100">
<button aria-expanded="false" className="faq-button flex focus:outline-none group text-left w-full pt-6 pb-6 items-center justify-between" onclick="toggleFAQ(this)">
<span className="font-sans text-base font-medium tracking-tight text-[#171717] group-hover:text-gray-600 smooth-transition">How often are new perspectives published?</span>
<iconify-icon className="faq-icon text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button><button aria-expanded="false" className="faq-button flex focus:outline-none group text-left w-full pt-6 pb-6 items-center justify-between" onclick="toggleFAQ(this)">
<span className="group-hover:text-gray-600 smooth-transition text-base font-medium text-[#171717] tracking-tight font-sans">How often are new perspectives published?</span>
<iconify-icon className="faq-icon text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button><button aria-expanded="false" className="faq-button flex focus:outline-none group text-left w-full pt-6 pb-6 items-center justify-between" onclick="toggleFAQ(this)">
<span className="group-hover:text-gray-600 smooth-transition text-base font-medium text-[#171717] tracking-tight font-sans">How often are new perspectives published?</span>
<iconify-icon className="faq-icon text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="faq-content">
<p className="pb-6 text-sm text-gray-500 font-light leading-relaxed pr-8">
                            We prioritize deep research over daily market commentary. New insights are typically published bi-weekly, ensuring each piece adds substantial, timeless value to your financial understanding rather than reacting to short-term noise.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="font-sans font-medium text-xl tracking-tight mb-4">1 FINANCE</div>
<p className="text-gray-500 font-light leading-relaxed max-w-xs">
                    Redefining personal finance with unbiased, expert-led advisory and sophisticated wealth management strategies.
                </p>
</div>
<div>
<h4 className="font-medium text-[#171717] mb-4 tracking-tight">Services</h4>
<ul className="space-y-3 font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Wealth Planning</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Tax Optimization</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Estate &amp; Wills</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Risk Management</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#171717] mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Insights Library</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#171717] mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 font-light text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Disclosures</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-light">
<p>© 2023 1 Finance. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-gray-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-gray-900 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
