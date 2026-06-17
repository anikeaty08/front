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
      

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight group-hover:text-neutral-300 transition-colors">CITRELL NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#about-us">About Us</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#values">Values</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-all transform active:scale-95" href="#contact">
                    Get in Touch
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-24 border-b border-white/5" id="about-us">
<div className="max-w-7xl mx-auto px-6">

<div className="max-w-4xl mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
<span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Who We Are</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 mb-8">
                    Architects of impact.<br/>Bridging strategy &amp; reality.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                    Citrell Nexus was established to fill a void in the market: the disconnect between high-level business strategy and on-the-ground execution. We function as a central hub—a nexus—connecting ideas, capital, and talent.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-32">
<div className="bg-black p-8 group hover:bg-neutral-900/50 transition-colors">
<span className="block text-3xl font-medium tracking-tight text-white mb-1">2019</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Established</span>
</div>
<div className="bg-black p-8 group hover:bg-neutral-900/50 transition-colors">
<span className="block text-3xl font-medium tracking-tight text-white mb-1">50+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Corporate Partners</span>
</div>
<div className="bg-black p-8 group hover:bg-neutral-900/50 transition-colors">
<span className="block text-3xl font-medium tracking-tight text-white mb-1">3</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Core Divisions</span>
</div>
<div className="bg-black p-8 group hover:bg-neutral-900/50 transition-colors">
<span className="block text-3xl font-medium tracking-tight text-white mb-1">KL</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Headquarters</span>
</div>
</div>

<div className="mb-24" id="values">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">Our DNA</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden group">
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-6">
<iconify-icon icon="lucide:fingerprint" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Identity &amp; Innovation</h3>
<p className="text-neutral-400 leading-relaxed max-w-md">
                                    We believe that every brand has a unique fingerprint. Our approach combines data-driven insights with creative intuition to build identities that resonate and endure in a crowded marketplace.
                                </p>
</div>
</div>

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="absolute -right-10 -bottom-10 w-64 h-64 border border-white/5 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 border border-white/5 rounded-full opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
</div>

<div className="flex flex-col gap-6">
<div className="flex-1 glass-panel rounded-3xl p-8 flex flex-col justify-center hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:globe" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-lg font-medium mb-2">Global Perspective</h4>
<p className="text-xs text-neutral-400">Local roots, international reach. We navigate cross-border complexities with ease.</p>
</div>
<div className="flex-1 glass-panel rounded-3xl p-8 flex flex-col justify-center hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-500 mb-4" icon="lucide:users" strokeWidth="1" width="32"></iconify-icon>
<h4 className="text-lg font-medium mb-2">People First</h4>
<p className="text-xs text-neutral-400">Technology powers us, but human connection drives us.</p>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-24">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight">Leadership</h2>
<a className="text-xs text-neutral-400 hover:text-white mt-4 md:mt-0 flex items-center gap-1 transition-colors" href="#">
                        View all careers <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/5] bg-neutral-900 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse"></div> 
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<iconify-icon className="text-white hover:text-indigo-400 transition-colors" icon="lucide:linkedin" width="20"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-white">Executive Director</h4>
<p className="text-xs text-neutral-500">Strategy &amp; Operations</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-neutral-900 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse" style={{animationDelay: '100ms'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<iconify-icon className="text-white hover:text-indigo-400 transition-colors" icon="lucide:linkedin" width="20"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-white">Creative Director</h4>
<p className="text-xs text-neutral-500">Nexus Studio</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-neutral-900 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse" style={{animationDelay: '200ms'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<iconify-icon className="text-white hover:text-indigo-400 transition-colors" icon="lucide:linkedin" width="20"></iconify-icon>
</div>
</div>
<h4 className="text-sm font-medium text-white">Head of Trade</h4>
<p className="text-xs text-neutral-500">Import &amp; Export</p>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">Open for Partnership</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Let's start a<br/>conversation.</h2>
<p className="text-neutral-400 font-light text-lg mb-12 max-w-md">
                        Whether you need strategic consulting, creative production, or trade solutions, our team is ready to scale your vision.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Headquarters</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Citrell Nexus Sdn. Bhd.<br/>
                                    Level 23, The Exchange 106,<br/>
                                    Tun Razak Exchange, 55188 Kuala Lumpur.
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Email</h4>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="mailto:hello@citrellnexus.com">hello@citrellnexus.com</a>
<br/>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="mailto:studio@citrellnexus.com">studio@citrellnexus.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Phone</h4>
<p className="text-sm text-neutral-400">+60 3-1234 5678</p>
<span className="text-[10px] text-neutral-600 uppercase tracking-wider">Mon-Fri, 9am - 6pm</span>
</div>
</div>
</div>

<div className="mt-12 flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-3xl">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none cursor-pointer">
<option className="bg-neutral-900">General Inquiry</option>
<option className="bg-neutral-900">Business Strategy</option>
<option className="bg-neutral-900">Nexus Studio (Production)</option>
<option className="bg-neutral-900">Import/Export</option>
<option className="bg-neutral-900">Careers</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none" placeholder="Tell us about your project needs..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-white text-black font-medium text-sm py-3.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" type="submit">
                                Send Message
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-white/5">
<a className="flex items-center gap-2 mb-6 md:mb-0" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">CITRELL NEXUS</span>
</a>
<div className="flex gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8">
<p className="text-xs text-neutral-600">© 2024 Citrell Nexus Sdn. Bhd. (1349700-V). All rights reserved.</p>
<p className="text-[10px] text-neutral-700 mt-4 md:mt-0 uppercase tracking-widest">Designed in Kuala Lumpur</p>
</div>
</div>
</footer>

    </>
  );
}
