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
colors: {
base: '#0E0E0E',
'base-to': '#1A1410',
gold: '#C9A227',
'deep-red': '#7A1C1C',
'deep-red-hover': '#8B0000',
cream: '#F7F3EA',
surface: '#181818',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
letterSpacing: {
tightest: '-0.03em',
}
}
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
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center border-b border-white/5 bg-base/80 backdrop-blur-sm fixed top-0 z-50">
<div className="text-xs uppercase tracking-widest text-gray-400 font-medium flex items-center gap-2">
<span>China</span>
<iconify-icon className="text-gold" icon="solar:arrow-right-linear" width="12"></iconify-icon>
<span>Russia</span>
<span className="w-px h-3 bg-white/20 mx-2"></span>
<span>Business Connections</span>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
<div className="flex-1 space-y-8 md:space-y-12">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
                Potential clients <br/>
<span className="text-gray-400">from Russia</span>
</h1>
<div className="h-px w-24 gold-line"></div>
<p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
                For Chinese companies entering the market.
                <br/>
<span className="text-sm md:text-base text-gray-500 mt-4 block">Transparent. With inquiry quality control. No hidden conditions.</span>
</p>
</div>

<div className="w-full md:w-[400px] bg-white/5 border border-white/10 p-8 backdrop-blur-md rounded-sm mt-8 md:mt-0">
<div className="space-y-6">
<div className="">
<label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Company Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold outline-none transition-colors text-sm" placeholder="Enterprise Name" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-500 mb-2 uppercase tracking-wide">Contact</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold outline-none transition-colors text-sm" placeholder="WeChat / Email / WhatsApp" type="text"/>
</div>
<button className="w-full bg-deep-red hover:bg-deep-red-hover text-white text-sm font-medium py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 mt-4">
<span>Start Conversation</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-gray-500 text-center font-light leading-relaxed">
                    We reply personally.<br/>No automated messages.
                </p>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
<div className="grid md:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
                    Entering the Russian market <br/> involves risks
                </h2>
</div>
<div>
<p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                    Most companies face not a lack of clients, but a lack of understanding of <span className="text-white font-medium">who is truly interested</span> and what specifically the budget is being spent on.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="max-w-4xl">
<span className="text-gold text-sm tracking-widest uppercase mb-4 block">Our Approach</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">We work differently</h2>
<p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
                We focus not on the quantity of inquiries, 
                but on which companies come to you.
            </p>
<div className="h-12"></div> 
<p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
                And whether a business conversation is possible with them.
            </p>
</div>
</section>

<section className="bg-cream text-base py-24 md:py-32">
<div className="px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black">What you get</h2>
<div className="h-px w-12 bg-gold mt-6"></div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-4">
<iconify-icon className="text-gray-400" icon="solar:letter-linear" width="24"></iconify-icon>
<p className="text-lg font-medium">Inquiries from Russian companies</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-gray-400" icon="solar:user-id-linear" width="24"></iconify-icon>
<p className="text-lg font-medium">Clear potential client profile</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-gray-400" icon="solar:box-linear" width="24"></iconify-icon>
<p className="text-lg font-medium">Real need for the product</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-gray-400" icon="solar:chat-line-linear" width="24"></iconify-icon>
<p className="text-lg font-medium">Opportunity to continue dialogue</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-24 items-start">
<div className="sticky top-32 -multi">
<h2 className="md:text-5xl text-3xl font-medium md:tracking-tight mb-8">
    What means <br/>
<span className="text-gray-400">"Suitable Client"</span>
</h2>
<p className="text-gray-400 leading-relaxed text-lg -multi">
                    Before starting work, we determine in advance which inquiries are considered suitable, and we account for results based only on these criteria.
                </p>
</div>
<div className="space-y-8 border-l border-white/10 pl-8 md:pl-12">
<div className="flex items-start gap-4">
<span className="text-gold mt-1">—</span>
<span className="text-xl font-light">Company from Russia</span>
</div>
<div className="flex items-start gap-4">
<span className="text-gold mt-1">—</span>
<span className="text-xl font-light">Interest in your product</span>
</div>
<div className="flex items-start gap-4">
<span className="text-gold mt-1">—</span>
<span className="text-xl font-light">Clear sphere of activity</span>
</div>
<div className="flex items-start gap-4">
<span className="text-gold mt-1">—</span>
<span className="text-xl font-light">Clear role in purchasing</span>
</div>
<div className="flex items-start gap-4">
<span className="text-gold mt-1">—</span>
<span className="text-xl font-light">Intention to consider purchase</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="">
<span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Quality Control in Figures</span>
<div className="text-6xl md:text-9xl font-medium text-[#F3F4F6] tracking-tighter flex items-start">
                    40<span className="text-gold mx-2 font-light text-4xl md:text-7xl self-center">–</span>55<span className="text-4xl md:text-6xl text-gray-500 ml-2 mt-2">%</span>
</div>
</div>
<p className="text-gray-400 text-sm md:text-base max-w-xs text-right md:text-left mb-4">
                Share of inquiries meeting  agreed criteria.
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">

<div className="flex flex-col md:flex-row justify-end">
<div className="md:w-1/2">
<h3 className="text-2xl md:text-3xl font-medium mb-6">Transparency and Control</h3>
<p className="text-gray-400 text-lg leading-relaxed mb-6">
                    We structure our work so that the client always sees all inquiries, understands where they come from, and why they are counted in the result.
                </p>
<p className="text-white text-lg font-medium">All data remains open to the client.</p>
</div>
</div>

<div className="flex flex-col md:flex-row justify-start">
<div className="md:w-1/2">
<h3 className="text-2xl md:text-3xl font-medium mb-6">Our Area of Responsibility</h3>
<p className="text-gray-400 text-lg leading-relaxed mb-6">
                    We are responsible for attracting inquiries and for the quality of these inquiries.
                </p>
<p className="text-white text-lg font-medium">Negotiations and deal decisions remain on the client's side.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-surface/30 rounded-sm">
<div className="md:flex gap-16 items-start">
<h2 className="text-3xl font-medium mb-8 md:mb-0 shrink-0 w-64">How we work</h2>
<div>
<p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                    We start by understanding the task, fixing quality criteria, and only then launch the process. Result is regularly analyzed and improved.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="group">
<span className="text-xs text-gold mb-2 block font-mono">01</span>
<h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">Contact us</h4>
</div>
<div className="group">
<span className="text-xs text-gold mb-2 block font-mono">02</span>
<h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">Discuss the task</h4>
</div>
<div className="group">
<span className="text-xs text-gold mb-2 block font-mono">03</span>
<h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">Fix criteria</h4>
</div>
<div className="group">
<span className="text-xs text-gold mb-2 block font-mono">04</span>
<h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">Start work</h4>
</div>
</div>
</section>

<section className="bg-cream text-base py-24">
<div className="px-6 md:px-12 max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-black">Formats of Cooperation</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col hover:border-black/30 transition-colors h-64 border-black/10 border pt-8 pr-8 pb-8 pl-8 justify-between">
<h3 className="text-2xl font-medium">Start</h3>
<p className="text-gray-600">1 product / careful entry</p>
<p className="text-gray-600">1 landing page</p><p className="text-gray-600">Regular reporting based on agreed criteria</p></div>

<div className="border-gold flex flex-col bg-white h-64 border pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute top-4 right-4 text-gold">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium">Growth</h3>
<p className="text-gray-600">2–3 directions / systematic work</p>
<p className="text-gray-600">Up to 2 landing pages</p><p className="text-gray-600">Full transparency and access to all data</p></div>

<div className="flex flex-col hover:border-black/30 transition-colors h-64 border-black/10 border pt-8 pr-8 pb-8 pl-8 justify-between">
<h3 className="text-2xl font-medium">Scale</h3>
<p className="text-gray-600">4 or more products or directions</p>
<p className="text-gray-600">3 or more landing pages or a full website</p><p className="text-gray-600">Extended reporting and analytics</p></div>
</div>
</div>
</section>

<footer className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 max-w-4xl mx-auto leading-tight">
            You see all inquiries and understand <br/> where they come from.
        </h2>
<button className="bg-deep-red hover:bg-deep-red-hover text-white text-base font-medium py-4 px-10 transition-all duration-300 inline-flex items-center gap-3">
<span>Start Conversation</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<div className="mt-24 text-xs text-gray-600 uppercase tracking-widest flex justify-center items-center gap-4">
<span>China</span>
<span className="w-1 h-1 bg-gold rounded-full"></span>
<span>Russia</span>
</div>
</footer>

    </>
  );
}
