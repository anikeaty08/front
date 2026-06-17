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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFDFD]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
<div className="flex justify-between items-center h-14 px-4 md:px-6">
<a className="flex items-center gap-2 hover:opacity-70 transition-opacity" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:layers" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-medium tracking-tight text-sm">STRUCTURAL</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors" href="#">Index</a>
<a className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors" href="#">Studio</a>
<a className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors" href="#">Research</a>
</div>
<button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-[#E5E5E5] px-4 py-2 bg-neutral-50 text-black cursor-default">
<span>Contact</span>
</button>
</div>
</nav>

<main className="pt-14 flex-grow">

<div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E5E5E5]">

<div className="md:col-span-7 p-6 md:p-12 border-r border-[#E5E5E5]">
<div className="inline-flex items-center gap-2 border border-[#E5E5E5] rounded-full px-3 py-1 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Open for Commission</span>
</div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tighter text-neutral-900 mb-6">
                    Initiate a <br/>
<span className="text-neutral-400">Dialogue.</span>
</h1>
<p className="text-lg text-neutral-500 font-light max-w-lg leading-relaxed">
                    We approach every partnership with rigorous curiosity. Tell us about your site, your constraints, and your vision.
                </p>
</div>

<div className="md:col-span-5 bg-neutral-50">
<div className="h-full flex flex-col">
<div className="flex-1 p-6 md:p-10 border-b border-[#E5E5E5] flex flex-col justify-center">
<span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">New Business</span>
<a className="text-xl hover:text-neutral-600 transition-colors" href="mailto:commissions@structural.bureau">commissions@structural.bureau</a>
</div>
<div className="flex-1 p-6 md:p-10 border-b border-[#E5E5E5] flex flex-col justify-center">
<span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">Press &amp; Media</span>
<a className="text-xl hover:text-neutral-600 transition-colors" href="mailto:press@structural.bureau">press@structural.bureau</a>
</div>
<div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
<span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3">Careers</span>
<a className="text-xl hover:text-neutral-600 transition-colors" href="mailto:careers@structural.bureau">careers@structural.bureau</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E5E5E5]">
<div className="md:col-span-8 md:border-r border-[#E5E5E5] p-6 md:p-12 bg-white">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group">
<label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-black transition-colors">Full Name</label>
<input className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors" placeholder="Jane Doe" type="text"/>
</div>

<div className="group">
<label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-black transition-colors">Email Address</label>
<input className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors" placeholder="jane@company.com" type="email"/>
</div>
</div>

<div>
<label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4">Nature of Inquiry</label>
<div className="flex flex-wrap gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500 rounded-full transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black group-hover:border-neutral-400">New Project</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500 rounded-full transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black group-hover:border-neutral-400">Collaboration</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500 rounded-full transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black group-hover:border-neutral-400">Speaking / Press</span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500 rounded-full transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black group-hover:border-neutral-400">General</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 group-focus-within:text-black transition-colors">Project Details / Message</label>
<textarea className="w-full bg-transparent border-b border-neutral-200 py-2 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Tell us about the scope, timeline, and location..." rows="4"></textarea>
</div>

<div className="group">
<div className="flex justify-between mb-2">
<label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-focus-within:text-black transition-colors">Estimated Budget</label>
<span className="text-[10px] font-mono text-neutral-400">Optional</span>
</div>
<div className="relative">
<span className="absolute left-0 top-2 text-sm text-neutral-400">$</span>
<input className="w-full bg-transparent border-b border-neutral-200 py-2 pl-4 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors" type="text"/>
</div>
</div>

<div className="pt-6 flex justify-between items-center">
<label className="flex items-center gap-3 cursor-pointer">
<input className="custom-checkbox sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-300 rounded-sm flex items-center justify-center transition-colors">
<svg className="hidden w-3 h-3 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-neutral-500 select-none">Subscribe to our journal</span>
</label>
<button className="group flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-all" type="button">
                            Send Request
                            <svg aria-hidden="true" className="iconify iconify--lucide group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>

<div className="hidden md:block md:col-span-4 bg-neutral-100 relative overflow-hidden">
<img alt="Office Detail" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur p-4 border border-white/20">
<p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">Our Studio</p>
<p className="text-xs font-light leading-relaxed">We operate an open studio policy. Clients are welcome to visit our material library by appointment.</p>
</div>
</div>
</div>
</div>

<section className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">

<div className="p-8 hover:bg-white transition-colors group">
<div className="flex items-start justify-between mb-8">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-black group-hover:text-black transition-colors">
<span className="text-xs font-mono">01</span>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 09:42 AM
                        </span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4">Melbourne (HQ)</h3>
<address className="not-italic text-sm text-neutral-500 leading-relaxed font-light mb-6">
                        120 Collins Street, Level 45<br/>
                        Melbourne VIC 3000<br/>
                        Australia
                    </address>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-transparent hover:border-black pb-0.5 transition-colors" href="#">
                        View Map <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="10" height="10" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="p-8 hover:bg-white transition-colors group">
<div className="flex items-start justify-between mb-8">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-black group-hover:text-black transition-colors">
<span className="text-xs font-mono">02</span>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span> 11:42 PM
                        </span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4">London</h3>
<address className="not-italic text-sm text-neutral-500 leading-relaxed font-light mb-6">
                        24 Clerkenwell Road<br/>
                        London EC1M 5PS<br/>
                        United Kingdom
                    </address>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-transparent hover:border-black pb-0.5 transition-colors" href="#">
                        View Map <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="10" height="10" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="p-8 hover:bg-white transition-colors group">
<div className="flex items-start justify-between mb-8">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-black group-hover:text-black transition-colors">
<span className="text-xs font-mono">03</span>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span> 06:42 PM
                        </span>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4">New York</h3>
<address className="not-italic text-sm text-neutral-500 leading-relaxed font-light mb-6">
                        109 Wooster Street<br/>
                        SoHo, NY 10012<br/>
                        United States
                    </address>
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-transparent hover:border-black pb-0.5 transition-colors" href="#">
                        View Map <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="10" height="10" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-[#1A1A1A] text-white pt-20 pb-10 mt-auto">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
<div className="col-span-1 md:col-span-2">
<h2 className="text-5xl md:text-7xl font-normal tracking-tighter mb-8 text-white/90">Let's build <br/>tomorrow.</h2>
<a className="text-2xl border-b border-white/30 hover:border-white hover:text-white transition-colors text-white/70 pb-1" href="mailto:hello@structural.bureau">hello@structural.bureau</a>
</div>
<div className="space-y-6">
<h4 className="text-xs font-mono uppercase tracking-widest text-white/40">Office</h4>
<address className="not-italic text-sm text-white/70 leading-relaxed font-light">
                        120 Collins Street<br/>
                        Melbourne VIC 3000<br/>
                        Australia
                    </address>
<p className="text-sm text-white/70 font-light">+61 (0) 3 9000 0000</p>
</div>
<div className="space-y-6">
<h4 className="text-xs font-mono uppercase tracking-widest text-white/40">Connect</h4>
<ul className="space-y-3">
<li><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg> Instagram</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg> LinkedIn</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white/90">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:layers" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="font-medium tracking-tight text-sm">STRUCTURAL</span>
</div>
<div className="flex gap-6">
<a className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">Legal</a>
<a className="text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<p className="text-[10px] font-mono uppercase tracking-widest text-white/20">© 2024 Structural Bureau.</p>
</div>
</div>
</footer>

    </>
  );
}
