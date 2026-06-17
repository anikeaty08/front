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
      

<nav className="fixed top-0 w-full z-50 border-b glass-nav border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tighter text-lg flex items-center gap-2 text-gray-100" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:building-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
                ihsaan.
            </a>
<div className="hidden md:flex gap-8 text-sm font-normal">
<a className="transition-colors hover:text-gray-100" href="#about">Why Dubai</a>
<a className="transition-colors hover:text-gray-100" href="#process">Process</a>
<a className="transition-colors hover:text-gray-100" href="#contact">Contact</a>
</div>
<a className="text-xs font-medium px-4 py-2 rounded-full transition-colors bg-white text-black hover:bg-gray-200" href="#contact">
                Get Referred
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-white">
                Your gateway to <br/>
<span className="text-gradient">exceptional living</span> in Dubai.
            </h1>
<p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed text-gray-400">
                Navigating the Dubai real estate market requires insider knowledge. We connect you directly with the most reputable, high-performing agents to find your dream home or investment.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm bg-white text-gray-950 hover:bg-gray-200" href="#contact">
                    Start Your Journey
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-3.5 border font-medium rounded-full transition-all flex items-center justify-center gap-2 text-sm border-gray-800 text-gray-300 hover:bg-gray-900" href="#process">
                    How it Works
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-8 gap-y-8">
<div className="text-center md:text-left">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-white">0%</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Fees for Buyers</p>
</div>
<div className="text-center md:text-left">
<p className="md:text-3xl text-2xl font-medium text-white tracking-tight">VIP</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Agent Network</p>
</div>
<div className="text-center md:text-left">
<p className="md:text-3xl text-2xl font-medium text-white tracking-tight">Dedicated Support</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Support</p>
</div>
<div className="text-center md:text-left">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-white">AED</p>
<p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Tax Free Living</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-grid relative" id="about">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4 text-white">Why Dubai?</h2>
<p className="max-w-xl font-light text-gray-400">A global hub of innovation, luxury, and safety. Discover why the world's elite are choosing Dubai as their primary residence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-gray-900/40 border-white/5 hover:border-white/10">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gray-800 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:coins" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path><path d="m16.71 13.88l.7.71l-2.82 2.82"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Tax-Free Economy</h3>
<p className="text-sm leading-relaxed text-gray-400">Keep what you earn. Enjoy 0% income tax, 0% capital gains tax, and 0% property tax on residential real estate.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-gray-900/40 border-white/5 hover:border-white/10">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gray-800 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Unrivaled Safety</h3>
<p className="text-sm leading-relaxed text-gray-400">Rated as one of the safest cities globally, providing peace of mind for you and your family day and night.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-gray-900/40 border-white/5 hover:border-white/10">
<div className="h-10 w-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gray-800 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Luxury Lifestyle</h3>
<p className="text-sm leading-relaxed text-gray-400">Access world-class amenities, pristine beaches, and architectural marvels. A standard of living unlike anywhere else.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="process">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4 text-white">Curated Connections</h2>
<p className="font-light mb-8 text-gray-400">We don't sell property; we ensure you buy from the best. Our vetting process filters for integrity, track record, and market access.</p>
<div className="inline-flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Pre-vetted Agents
                    </div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Off-market Opportunities
                    </div>
</div>
</div>
<div className="md:w-2/3 grid gap-8">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium border-gray-700 bg-gray-900 text-white">1</div>
<div className="w-px h-full my-2 bg-gray-800"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium mb-2 text-white">Consultation</h4>
<p className="text-sm text-gray-400">You tell us your budget, preferences (Villa, Apartment, Penthouse), and goals (Investment or Residence).</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium border-gray-700 bg-gray-900 text-white">2</div>
<div className="w-px h-full my-2 bg-gray-800"></div>
</div>
<div className="pb-8">
<h4 className="text-lg font-medium mb-2 text-white">The Match</h4>
<p className="text-sm text-gray-400">We analyze your needs and introduce you to the specific specialist agent best suited for that area (e.g., Palm Jumeirah, Downtown, Dubai Hills).</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-sm font-medium border-gray-700 bg-gray-900 text-white">3</div>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-white">Acquisition</h4>
<p className="text-sm text-gray-400">Your agent guides you through viewings, negotiation, and the transfer process, ensuring a smooth transaction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6" id="contact">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white">Ready to move?</h2>
<p className="max-w-xl mr-auto mb-12 ml-auto text-gray-400">Get in touch directly. We will analyze your requirements and connect you with a senior property agent.</p>
<div className="flex flex-col items-center justify-center gap-6">
<a className="group relative inline-flex items-center gap-3 px-8 py-4 font-medium rounded-full transition-all text-lg tracking-tight hover:scale-105 active:scale-95 duration-200 bg-gray-100 text-gray-950 hover:bg-white" href="mailto:ihsaanreferral@gmail.com">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                    ihsaanreferral@gmail.com
                </a>
<p className="text-xs text-gray-600">Email us for general inquiries or referral requests.</p>
</div>
</div>
</section>

<footer className="border-t py-12 px-6 border-white/5 bg-gray-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-600" data-icon="lucide:building-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
<span className="text-sm text-gray-500 font-medium tracking-tight">ihsaan property referrals</span>
</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="transition-colors hover:text-gray-300" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-gray-300" href="#">Terms of Service</a>
<span>© 2023 Ihsaan Referrals</span>
</div>
</div>
</footer>

    </>
  );
}
