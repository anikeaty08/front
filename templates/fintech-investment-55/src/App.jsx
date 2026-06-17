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
      

<nav className="sticky top-0 z-50 backdrop-blur-xl border-b bg-black/80 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2">
<span className="text-2xl font-bold tracking-tight text-white">EquityPandit</span>
<div className="flex flex-col border-l-2 pl-2 border-white/20">
<span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase leading-none">Investment</span>
<span className="text-xs font-semibold tracking-widest text-[#d4f84a] uppercase leading-none mt-0.5">Advisor</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="flex items-center gap-2 text-sm font-medium transition-colors text-white hover:text-zinc-300" href="#">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon> Home
                    </a>
<a className="flex items-center gap-2 text-sm font-medium transition-colors text-zinc-400 hover:text-white" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon> Plans &amp; Pricing
                    </a>
<a className="flex items-center gap-2 text-sm font-medium transition-colors text-zinc-400 hover:text-white" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> Contact Us
                    </a>
</div>

<div className="flex items-center space-x-6">
<button className="text-zinc-400 transition-colors hidden sm:block hover:text-white">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</button>
<a className="text-sm font-medium transition-colors hidden sm:block text-zinc-400 hover:text-white" href="#">Login</a>
<a className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all bg-white hover:bg-zinc-200 text-black" href="#">
                        Get Started
                    </a>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden md:pt-24 bg-black pt-16 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[#d4f84a]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide mb-8 bg-white/5 border-white/10 text-zinc-300">
<iconify-icon className="text-[#d4f84a]" icon="solar:star-linear" width="14"></iconify-icon> AWARDED AS
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
                        Fastest Growing Market Research Company in India
                    </h1>
<p className="text-lg md:text-xl italic mb-10 font-medium text-zinc-400">
                        - By The Economic Times
                    </p>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-xl text-base font-semibold transition-all bg-white hover:bg-zinc-200 text-black" href="#">
                        Explore Services
                    </a>
</div>
<div className="relative lg:h-[600px] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
<img alt="Smiling professional working on laptop" className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80 mix-blend-lighten" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
</div>
</div>
</div>
</section>

<div className="bg-[#d4f84a] py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-between items-center gap-8">
<span className="text-xs font-bold tracking-widest uppercase text-black/60">Featured By</span>
<span className="text-xl font-bold font-serif tracking-tight text-black">Business Standard</span>
<span className="text-xl font-bold tracking-tight flex items-center gap-1 text-black">
<iconify-icon icon="solar:widget-5-linear" width="24"></iconify-icon>dailyhunt
                </span>
<span className="text-2xl font-bold tracking-tighter text-black">Bloomberg</span>
<span className="text-xl font-bold tracking-tight text-black flex items-center">
                    YAHOO!<span className="text-[10px] block leading-none tracking-widest text-black/60 ml-1">NEWS</span>
</span>
<span className="text-2xl font-bold tracking-tighter text-[#d4f84a] px-3 py-1 bg-black">THE WEEK</span>
</div>
</div>
</div>

<section className="bg-[#050505] py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex gap-6 items-start">
<div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-white" icon="solar:cup-star-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2 text-white">Recognized</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            Equitypandit bagged many prestigious national and international awards for research excellence.
                        </p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d4f84a]/10 border border-[#d4f84a]/20">
<iconify-icon className="text-[#d4f84a]" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2 text-white">Protected</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            EquityPandit is SEBI registered and committed to providing investment advice you can rely on.
                        </p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-white" icon="solar:star-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2 text-white">Trusted</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            Chosen &amp; Trusted by investors for over 18 years and in 32+ countries across the globe.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-black relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#d4f84a] mb-4">10,00,000+</h2>
<p className="text-3xl md:text-4xl font-bold tracking-tight mb-12 leading-tight text-white">
                        Investors &amp; Traders Use EquityPandit
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-end text-right">
<span className="text-3xl font-bold tracking-tight text-white">1 Million+</span>
<span className="text-xs font-medium uppercase tracking-widest mt-1 text-zinc-500">Registered Users</span>
</div>
<div className="bg-[#d4f84a]/10 border border-[#d4f84a]/20 rounded-2xl p-8 flex flex-col justify-center items-end text-right">
<span className="text-3xl font-bold tracking-tight text-[#d4f84a]">19+</span>
<span className="text-xs font-medium uppercase tracking-widest mt-1 text-[#d4f84a]/60">Years of Experience</span>
</div>
<div className="bg-[#d4f84a]/10 border border-[#d4f84a]/20 rounded-2xl p-8 flex flex-col justify-center items-end text-right">
<span className="text-3xl font-bold tracking-tight text-[#d4f84a]">11+</span>
<span className="text-xs font-medium uppercase tracking-widest mt-1 text-[#d4f84a]/60">Prestigious Awards</span>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-end text-right">
<span className="text-3xl font-bold tracking-tight text-white">350+</span>
<span className="text-xs font-medium uppercase tracking-widest mt-1 text-zinc-500">Research Algorithms</span>
</div>
</div>
</div>
<div className="relative h-[400px] lg:h-full min-h-[500px]">
<div className="absolute inset-0 rounded-3xl overflow-hidden bg-[#050505] ring-1 ring-white/10">
<img alt="Financial Growth Chart" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#d4f84a] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16 text-black">
                Personalized Solutions For All Your Financial Needs
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-3xl p-10 flex flex-col h-full bg-[#050505] ring-1 ring-black/5 shadow-xl">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border bg-white/5 border-white/10">
<iconify-icon className="text-[#d4f84a]" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Investing &amp; Trading Services</h3>
<p className="text-sm mb-10 flex-grow leading-relaxed text-zinc-400">
                        Specialized services designed to enhance your investing and trading journey, providing expert strategies to maximize returns.
                    </p>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors self-start bg-white hover:bg-zinc-200 text-black" href="#">
                        View Details <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="rounded-3xl p-10 flex flex-col h-full bg-[#050505] ring-1 ring-black/5 shadow-xl">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border bg-white/5 border-white/10">
<iconify-icon className="text-[#d4f84a]" icon="solar:diamonds-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight mb-4 text-white">HNI &amp; Ultra-HNI Services</h3>
<p className="text-sm mb-10 flex-grow leading-relaxed text-zinc-400">
                        Multiply your wealth with confidence. Our specialized HNI wealth services delivers exceptional returns with peace of mind.
                    </p>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors self-start bg-white hover:bg-zinc-200 text-black" href="#">
                        View Details <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="rounded-3xl p-10 flex flex-col h-full bg-[#050505] ring-1 ring-black/5 shadow-xl">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 border bg-white/5 border-white/10">
<iconify-icon className="text-[#d4f84a]" icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Institutional Investors &amp; Family Offices</h3>
<p className="text-sm mb-10 flex-grow leading-relaxed text-zinc-400">
                        Customized investment and trading solutions for Institutional Investors and Family Offices that prioritize risk management and superior returns.
                    </p>
<a className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-colors self-start bg-white hover:bg-zinc-200 text-black" href="#">
                        View Details <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 md:py-32 border-y border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 text-white">
                National &amp; International Awards
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl flex flex-col items-center text-center bg-[#0a0a0a] border border-white/10">
<h4 className="text-xl font-bold tracking-tight mb-4 h-14 flex items-center justify-center text-white">The Best Innovation For 2020</h4>
<p className="text-[10px] font-semibold text-zinc-600 mb-4 uppercase tracking-widest">By</p>
<div className="h-16 flex items-center justify-center">
<span className="text-2xl font-serif font-bold border-2 px-2 py-1 text-white border-white">ET</span>
</div>
<p className="text-sm font-serif font-bold mt-2 text-zinc-300">THE ECONOMIC TIMES</p>
</div>

<div className="p-8 rounded-2xl flex flex-col items-center text-center bg-[#0a0a0a] border border-white/10">
<h4 className="text-xl font-bold tracking-tight mb-4 h-14 flex items-center justify-center text-white">Excellence in Finance</h4>
<p className="text-[10px] font-semibold text-zinc-600 mb-4 uppercase tracking-widest">By</p>
<div className="h-16 flex items-center justify-center">
<span className="text-2xl font-bold border px-3 py-1 text-white border-white">FiNEXT</span>
</div>
<p className="text-[10px] text-zinc-400 mt-2 uppercase tracking-widest">Conference Dubai</p>
</div>

<div className="p-8 rounded-2xl flex flex-col items-center text-center bg-[#0a0a0a] border border-white/10">
<h4 className="text-xl font-bold tracking-tight mb-4 h-14 flex items-center justify-center text-white">Top 100 BFSI Leaders</h4>
<p className="text-[10px] font-semibold text-zinc-600 mb-4 uppercase tracking-widest">By</p>
<div className="h-16 flex items-center justify-center gap-2">
<span className="text-xl font-bold px-2 py-1 text-black bg-white">ET<br/><span className="text-[10px] block leading-none">NOW</span></span>
<div className="text-left leading-none">
<span className="text-sm font-bold block text-white">RISE</span>
<span className="text-[10px] block text-zinc-500 mt-0.5">WITH</span>
<span className="text-sm font-bold block text-white mt-0.5">INDIA</span>
</div>
</div>
</div>

<div className="p-8 rounded-2xl flex flex-col items-center text-center bg-[#0a0a0a] border border-white/10">
<h4 className="text-xl font-bold tracking-tight mb-4 h-14 flex items-center justify-center text-white">Leading Equity Research Company</h4>
<p className="text-[10px] font-semibold text-zinc-600 mb-4 uppercase tracking-widest">By</p>
<div className="h-16 flex items-center justify-center">
<div className="flex">
<span className="text-2xl font-bold px-2 py-1 text-black bg-white">NEWS</span>
<span className="text-2xl font-bold px-2 py-1 text-black bg-[#d4f84a]">24</span>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-10">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Why Choose Us?</h2>
<p className="text-base leading-relaxed text-zinc-400">
                    For nearly two decades, we've built a legacy of trust, transparency, and results. When you work with us, you gain more than just an investment plan—you gain a long-term partner committed to your financial success.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
<div className="w-full sm:w-2/5 min-h-[240px] relative overflow-hidden bg-black border-r border-white/5">
<img alt="Team hands together" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold tracking-tight mb-3 text-white">Experience You Can Trust</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            With over 18 years in the market, we have navigated all kinds of economic environments, and our insights give you an edge.
                        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
<div className="w-full sm:w-2/5 min-h-[240px] relative overflow-hidden bg-black border-r border-white/5">
<img alt="Data screens" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold tracking-tight mb-3 text-white">Data-Driven Insights</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            Our strategies are powered by cutting-edge technology, real-time data, and deep market research.
                        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
<div className="w-full sm:w-2/5 min-h-[240px] relative overflow-hidden bg-black border-r border-white/5">
<img alt="Professional meeting" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold tracking-tight mb-3 text-white">Client-Centered Approach</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            We don't just give you advice; we build a partnership. Our approach is personal, responsive, and designed around your unique needs.
                        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 group">
<div className="w-full sm:w-2/5 min-h-[240px] relative overflow-hidden bg-black border-r border-white/5">
<img alt="Support agent" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold tracking-tight mb-3 text-white">Dedicated Support Every Step</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                            We're here to guide you with ongoing support on anything, timely updates, and alerts to help you succeed.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#d4f84a] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">

<div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<svg className="absolute -top-24 -right-24 w-96 h-96 text-black" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.1C91,-33.1,97.2,-16.5,96.6,-0.4C95.9,15.8,88.4,31.6,78.3,44.9C68.2,58.2,55.5,69,41.2,76.5C26.9,84,11.1,88.2,-3.9,87.6C-18.9,87.1,-33.1,81.8,-46.2,74C-59.3,66.2,-71.3,55.9,-80.1,42.9C-88.9,29.9,-94.5,14.9,-95.1,-0.3C-95.7,-15.5,-91.3,-31,-82.4,-43.8C-73.5,-56.6,-60.1,-66.7,-45.9,-73.8C-31.7,-80.9,-16.7,-85.1,-0.7,-84C15.3,-82.9,30.6,-83.6,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)"></path>
</svg>
</div>
<div className="w-full lg:w-1/2 relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-black">
                        Real-Time Recommendations<br/>at Your Finger Tips
                    </h2>
<p className="text-lg mb-10 font-medium max-w-lg text-black/80">
                        Our subscribers gets all recommendations in real-time. Join India's Most Popular Investment and Trading Services Now!
                    </p>
<div className="flex flex-wrap gap-4">
<a className="rounded-xl px-6 py-3 flex items-center gap-3 transition-colors bg-black hover:bg-black/90 text-white" href="#">
<iconify-icon className="text-white" icon="solar:play-bold" width="32"></iconify-icon>
<div className="text-left">
<div className="text-[10px] font-semibold uppercase tracking-wider leading-none mb-1 text-zinc-400">Get it on</div>
<div className="text-lg font-semibold leading-none">Google Play</div>
</div>
</a>
<a className="rounded-xl px-6 py-3 flex items-center gap-3 transition-colors bg-black hover:bg-black/90 text-white" href="#">
<iconify-icon className="text-white" icon="mdi:apple" width="32"></iconify-icon>
<div className="text-left">
<div className="text-[10px] font-semibold uppercase tracking-wider leading-none mb-1 text-zinc-400">Download on the</div>
<div className="text-lg font-semibold leading-none">App Store</div>
</div>
</a>
</div>
</div>
<div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end gap-4 mt-8 lg:mt-0">

<div className="w-48 h-[400px] rounded-[2.5rem] border-[6px] shadow-2xl relative overflow-hidden hidden sm:block transform translate-y-8 bg-black border-zinc-900">
<div className="absolute top-0 inset-x-0 h-5 z-20 rounded-b-xl mx-12 bg-zinc-900"></div> 
<div className="w-full h-full flex flex-col pt-8 px-4 bg-[#050505]">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div>
<div className="h-2 w-16 rounded mb-1 bg-white/20"></div>
<div className="h-2 w-10 rounded bg-white/10"></div>
</div>
</div>
<div className="space-y-4">
<div className="h-10 rounded-xl flex items-center px-3 gap-2 bg-white/5"><iconify-icon className="text-zinc-500" icon="solar:home-smile-linear" width="16"></iconify-icon><div className="h-2 w-12 rounded bg-white/10"></div></div>
<div className="h-10 rounded-xl flex items-center px-3 gap-2 bg-white/5"><iconify-icon className="text-zinc-500" icon="solar:layers-minimalistic-linear" width="16"></iconify-icon><div className="h-2 w-20 rounded bg-white/10"></div></div>
<div className="h-10 rounded-xl flex items-center px-3 gap-2 bg-white/5"><iconify-icon className="text-zinc-500" icon="solar:pie-chart-2-linear" width="16"></iconify-icon><div className="h-2 w-16 rounded bg-white/10"></div></div>
<div className="h-10 rounded-xl flex items-center px-3 gap-2 bg-white/5"><iconify-icon className="text-zinc-500" icon="solar:chat-line-linear" width="16"></iconify-icon><div className="h-2 w-14 rounded bg-white/10"></div></div>
</div>
</div>
</div>

<div className="w-56 h-[460px] rounded-[2.5rem] border-[6px] shadow-2xl relative overflow-hidden z-20 bg-black border-zinc-900">
<div className="absolute top-0 inset-x-0 h-5 z-20 rounded-b-xl mx-16 bg-zinc-900"></div>
<div className="w-full h-full flex flex-col pt-10 px-4 bg-[#0a0a0a]">
<div className="h-3 w-24 rounded mb-6 bg-white/20"></div>
<div className="space-y-3">
<div className="border p-3 rounded-xl bg-white/5 border-white/10">
<div className="flex justify-between mb-2"><div className="h-2 w-10 rounded bg-[#d4f84a]/60"></div><div className="h-2 w-8 rounded bg-white/20"></div></div>
<div className="h-3 w-full rounded mb-1 bg-white/30"></div>
<div className="h-3 w-2/3 rounded bg-white/10"></div>
</div>
<div className="border p-3 rounded-xl bg-white/5 border-white/10">
<div className="flex justify-between mb-2"><div className="h-2 w-10 rounded bg-blue-500/60"></div><div className="h-2 w-8 rounded bg-white/20"></div></div>
<div className="h-3 w-full rounded mb-1 bg-white/30"></div>
<div className="h-3 w-3/4 rounded bg-white/10"></div>
</div>
<div className="border p-3 rounded-xl bg-white/5 border-white/10">
<div className="flex justify-between mb-2"><div className="h-2 w-10 rounded bg-white/40"></div><div className="h-2 w-8 rounded bg-white/20"></div></div>
<div className="h-3 w-full rounded mb-1 bg-white/30"></div>
<div className="h-3 w-1/2 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>

<div className="w-48 h-[400px] rounded-[2.5rem] border-[6px] shadow-2xl relative overflow-hidden hidden sm:block transform translate-y-8 bg-black border-zinc-900">
<div className="absolute top-0 inset-x-0 h-5 z-20 rounded-b-xl mx-12 bg-zinc-900"></div>
<div className="w-full h-full flex flex-col pt-10 px-4 bg-[#050505]">
<div className="h-3 w-20 rounded mx-auto mb-6 bg-white/20"></div>
<div className="grid grid-cols-2 gap-3">
<div className="border p-3 rounded-xl flex flex-col items-center justify-center h-20 bg-white/5 border-white/10"><div className="w-6 h-6 rounded-full mb-2 bg-blue-500/40"></div><div className="h-1.5 w-10 rounded bg-white/20"></div></div>
<div className="border p-3 rounded-xl flex flex-col items-center justify-center h-20 bg-white/5 border-white/10"><div className="w-6 h-6 rounded-full mb-2 bg-purple-500/40"></div><div className="h-1.5 w-12 rounded bg-white/20"></div></div>
<div className="border p-3 rounded-xl flex flex-col items-center justify-center h-20 bg-white/5 border-white/10"><div className="w-6 h-6 rounded-full mb-2 bg-[#d4f84a]/40"></div><div className="h-1.5 w-8 rounded bg-white/20"></div></div>
<div className="border p-3 rounded-xl flex flex-col items-center justify-center h-20 bg-white/5 border-white/10"><div className="w-6 h-6 rounded-full mb-2 bg-orange-500/40"></div><div className="h-1.5 w-10 rounded bg-white/20"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-black border-white/10">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Need any help? Contact To Our Support Team!</h2>
<p className="text-base mb-8 text-zinc-400">We are always there for you every time and will guide you at every step.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
<a className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-[#d4f84a]" href="tel:8000816688">
<iconify-icon className="text-zinc-500" icon="solar:phone-calling-linear" width="24"></iconify-icon> 8000 816 688
                </a>
<span className="hidden sm:block text-zinc-700">|</span>
<a className="flex items-center gap-2 text-xl font-bold transition-colors text-white hover:text-[#d4f84a]" href="mailto:support@equitypandit.com">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear" width="24"></iconify-icon> support@equitypandit.com
                </a>
</div>
<a className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-sm font-semibold transition-colors bg-white hover:bg-zinc-200 text-black" href="#">
                Contact Us
            </a>
</div>
</section>

<footer className="pt-16 bg-[#050505]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-bold tracking-tight text-white">EquityPandit</span>
<div className="flex flex-col border-l-2 pl-2 border-white/20">
<span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase leading-none">Investment</span>
<span className="text-[10px] font-semibold tracking-widest text-[#d4f84a] uppercase leading-none mt-0.5">Advisor</span>
</div>
</div>
<address className="not-italic text-sm mb-4 space-y-1 text-zinc-400">
<p>Address: A-488, Vidhyut Nagar,</p>
<p>Ajmer Road, Jaipur, Rajasthan - 302019</p>
</address>
<p className="text-sm mb-2 text-zinc-400">Phone: +91 8000 816 688</p>
<p className="text-sm mb-6 text-zinc-400">Email: support@equitypandit.com</p>
<div className="flex gap-4">
<a className="transition-colors text-zinc-500 hover:text-white" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="transition-colors text-zinc-500 hover:text-white" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
<a className="transition-colors text-zinc-500 hover:text-white" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold mb-6 text-white tracking-wide">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Home</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">About Us</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Careers</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold mb-6 text-white tracking-wide">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Plan &amp; Pricing</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Investing &amp; Trading</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">HNI Services</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Institutional Investors</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold mb-6 text-white tracking-wide">Download App</h4>
<ul className="space-y-4">
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Android</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">iOS</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold mb-6 text-white tracking-wide">Legal &amp; Privacy</h4>
<ul className="space-y-4">
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Terms and Conditions</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Grievance Redressal / Escalation</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="text-sm transition-colors text-zinc-400 hover:text-white" href="#">Disclosure</a></li>
</ul>
</div>
</div>

<div className="border-t py-6 mb-8 border-white/10">
<p className="text-sm text-zinc-400">
                    For any grievances/support, contact our support team at <a className="font-medium text-white hover:text-[#d4f84a] transition-colors" href="mailto:support@equitypandit.com">support@equitypandit.com</a> or call us at <a className="font-medium text-white hover:text-[#d4f84a] transition-colors" href="tel:8000816688">8000 816 688</a>
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-xs text-zinc-500 pb-12 leading-relaxed">
<div className="lg:col-span-1 space-y-4">
<p className="font-semibold text-zinc-300">SEBI Registered Investment Advisor Details:</p>
<p>Registered Name: Equitypandit Financial Services Private Limited</p>
<p>Type of registration: Non-Individual</p>
<p>Registration No.: INA000006688</p>
<p>Validity: Perpetual</p>
</div>
<div className="lg:col-span-2 space-y-4">
<p>Principal Officer: Kamlesh Sachar | Email: po@equitypandit.in | Contact No: +91 8000816688 | SEBI L.O.: Ground Floor, Jeevan Nidhi 2 LIC Building, Ambedkar Circle, Bhawani Singh Rd, Jaipur, Rajasthan 302005</p>
<p className="font-semibold pt-2 text-zinc-300">Disclaimers:</p>
<ol className="list-decimal pl-4 space-y-2">
<li>Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
<li>The securities quoted, if any are for illustration only and are not recommendatory.</li>
<li>Investments in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
</ol>
</div>
</div>
</div>

<div className="py-4 text-center border-t border-white/5 bg-black">
<p className="text-xs text-zinc-500">© Copyright 2024 <span className="text-white">Equitypandit Financial Services Private Limited</span>, All Rights Reserved</p>
</div>
</footer>

    </>
  );
}
