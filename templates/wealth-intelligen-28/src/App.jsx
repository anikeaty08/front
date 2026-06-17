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
      

<header className="w-full border-b border-gray-100">
<nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-50">
<div className="flex items-center gap-12">
<a className="flex items-center" href="#">
<span className="text-2xl font-medium tracking-tighter text-black uppercase">ROWEALTH</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-gray-800 hover:text-black" href="#">Product</a>
<a className="text-lg text-gray-800 hover:text-black" href="#">Security</a>
<a className="text-lg text-gray-800 hover:text-black" href="#">Pricing</a>
<a className="text-lg text-gray-800 hover:text-black" href="#">About Us</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="bg-black text-white rounded-full px-5 py-2.5 text-lg flex items-center gap-2 hover:bg-gray-800 transition-colors" href="#">
                    Request access <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</a>
</div>
</nav>
</header>

<section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.05] max-w-5xl">
            Unified intelligence <br/>
            across your wealth
        </h1>
<p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            ROWealth is a wealth-tech platform for individuals and family offices to consolidate financial accounts, real estate, private markets, and digital assets—so you can track performance, exposure, cash flows, and reporting across entities in one place.
        </p>
</section>

<section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full relative pb-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

<div className="bg-gray-900 rounded-[40px] h-[500px] md:h-[700px] relative overflow-hidden group">

<img alt="Mobile Wealth Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60 z-10 transition-opacity duration-700"></div>
<div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-20">
<div>
<h2 className="text-2xl font-normal tracking-tight mb-2 text-white drop-shadow-sm">ROWealth Core</h2>
<p className="text-xl text-gray-200 max-w-sm drop-shadow-sm">A single source of truth across cash, savings, brokerage, and alternative holdings.</p>
</div>
<a className="bg-white text-black rounded-full px-6 py-2.5 text-lg hover:bg-gray-100 hover:scale-105 transition-all flex-shrink-0 shadow-lg" href="#">Explore</a>
</div>
</div>

<div className="bg-gray-900 rounded-[40px] h-[500px] md:h-[700px] relative overflow-hidden group">

<img alt="Institutional Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/60 z-10 transition-opacity duration-700"></div>
<div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-20">
<div>
<h2 className="text-2xl font-normal tracking-tight mb-2 text-white drop-shadow-sm">ROWealth Alternatives</h2>
<p className="text-xl text-gray-200 max-w-sm drop-shadow-sm">Track real estate, private equity, venture, and digital assets with institution-grade oversight.</p>
</div>
<a className="bg-white text-black rounded-full px-6 py-2.5 text-lg hover:bg-gray-100 hover:scale-105 transition-all flex-shrink-0 shadow-lg" href="#">Explore</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] md:w-auto flex justify-center">
<a className="bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-6 py-3.5 flex flex-col md:flex-row items-center gap-1 md:gap-3 hover:scale-105 transition-transform cursor-pointer text-center" href="#">
<span className="text-lg text-gray-900">Secure connectivity for bank and brokerage accounts.</span>
<span className="text-lg font-normal flex items-center gap-1 text-black">Read more <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 flex flex-col items-center text-center max-w-4xl mx-auto border-t border-gray-100 mt-10">
<div className="mb-10 flex items-center gap-2 text-2xl font-serif tracking-tight">
<iconify-icon height="1.5em" icon="solar:buildings-2-linear" width="1.5em"></iconify-icon>
             A multi-generational family office
        </div>
<h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-[1.2] mb-10 text-gray-900">
            “ROWealth gives us a clear, current view of liquid and alternative assets—so we can govern complexity with confidence.”
        </h2>
</section>

<section className="px-4 md:px-8 py-20 max-w-[1440px] mx-auto w-full">
<div className="bg-white border border-gray-200 rounded-[40px] p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative overflow-hidden">

<div className="flex flex-col items-start justify-center z-20 relative">
<div className="border border-gray-200 rounded-full px-4 py-1.5 text-lg text-gray-600 mb-8 bg-white">
                    Insight
                </div>
<h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-none mb-2 text-black">
                    ROWealth Market Note
                </h3>
<p className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none text-gray-400 mb-12">
                    Private Assets &amp; Liquidity
                </p>
<a className="bg-black text-white rounded-full px-8 py-3.5 text-lg hover:bg-gray-800 transition-colors" href="#">
                    Request access
                </a>
</div>

<div className="relative h-[450px] lg:h-[600px] w-full mt-10 lg:mt-0 flex items-center justify-center">
<div className="absolute top-0 right-0 lg:right-4 w-[65%] h-[55%] rounded-[2rem] overflow-hidden shadow-xl z-10 bg-gray-100 ring-1 ring-black/5">
<img alt="Market Analytics" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute top-12 left-0 w-[45%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[6px] border-white bg-white">
<img alt="Institutional Wealth" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="absolute bottom-8 right-8 w-[30%] h-[35%] rounded-[1.5rem] overflow-hidden shadow-xl z-20 border-[6px] border-white bg-white">
<img alt="Premium Asset Detail" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute bottom-16 left-[20%] w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-30 border-[6px] border-white bg-white">
<img alt="Wealth Advisory" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<footer className="mt-auto pt-24 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
<div className="lg:col-span-2 flex flex-col justify-between">
<div>
<span className="text-2xl font-medium tracking-tighter text-black uppercase mb-8 block">ROWEALTH</span>
</div>
<div className="mt-auto w-full max-w-sm">
<p className="text-xl text-gray-500 mb-4">Receive updates on portfolio oversight and private markets</p>
<div className="flex items-center border-b border-gray-300 py-2 group">
<input className="w-full bg-transparent outline-none text-lg text-gray-900 placeholder-gray-400" placeholder="Email address" type="email"/>
<button aria-label="Subscribe" className="text-gray-400 group-hover:text-black transition-colors">
<iconify-icon height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
</button>
</div>
</div>
</div>
<div>
<h4 className="text-lg font-normal text-black mb-6">Platform</h4>
<ul className="space-y-4">
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Overview</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Account Aggregation</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Holdings &amp; Performance</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Reporting</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors flex items-center gap-2" href="#">Use Cases <iconify-icon height="1em" icon="solar:alt-arrow-down-linear" width="1em"></iconify-icon></a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Integrations</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-normal text-black mb-6">Asset Coverage</h4>
<ul className="space-y-4">
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Cash &amp; Savings</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Brokerage &amp; Funds</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Real Estate</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Private Equity &amp; Venture</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Digital Assets</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Other Alternatives</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-normal text-black mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Insights</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Guides</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Case Studies</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Support</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Developer API</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-normal text-black mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">About</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Press</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Contact</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Legal</a></li>
<li><a className="text-lg text-gray-500 hover:text-black transition-colors" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-0 text-center md:text-left">
<span className="text-xl text-gray-500">© ROWealth Technologies 2026</span>
<span className="hidden md:inline text-gray-300">|</span>
<span className="text-sm text-gray-400">ROWealth is a financial technology company, not an investment advisor.</span>
</div>
<div className="flex items-center gap-6">
<a aria-label="Facebook" className="text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon height="1.5em" icon="mdi:facebook" width="1.5em"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon height="1.5em" icon="mdi:linkedin" width="1.5em"></iconify-icon>
</a>
<a aria-label="Google" className="text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon height="1.5em" icon="mdi:google" width="1.5em"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
