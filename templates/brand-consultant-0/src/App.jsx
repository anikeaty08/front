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
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg z-50" href="#">
                MITHOO<span className="text-neutral-500">DESIGN</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wide text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                Building strong brands that <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">inspire trust</span> and drive growth.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                Strategic branding and digital growth partner for ambitious startups. Over 7 years of crafting identities that convert.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Start Your Project
                </a>
<a className="w-full md:w-auto px-8 py-3.5 border border-white/10 bg-transparent text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2 group" href="#contact">
                    Get a Quote
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-white" icon="simple-icons:shopify" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:wordpress" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:figma" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:googleanalytics" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:adobeillustrator" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 relative group">
<img alt="Workspace" className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100 transform" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white text-lg font-medium tracking-tight">Mithoo Design</p>
<p className="text-neutral-500 text-sm">Est. 2016</p>
</div>
</div>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Not an agency.<br/>Your creative partner.</h2>
<div className="space-y-4 text-neutral-400 font-light leading-relaxed">
<p>
                        I'm Mithoo, an independent creative consultant and digital strategist with a passion for clarity. Unlike traditional agencies, I offer direct access, agile execution, and a personal investment in your brand's success.
                    </p>
<p>
                        Specializing in branding, web development, and digital marketing, I help small businesses transition from "just another option" to the preferred choice in their market. My approach bridges the gap between beautiful design and functional business strategy.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight">7+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div>
<h3 className="text-2xl text-white font-medium tracking-tight">100+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Projects Delivered</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5 bg-white/[0.02]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Expertise</h2>
<p className="text-neutral-400 font-light max-w-md">Comprehensive digital solutions tailored for growth-focused businesses.</p>
</div>
<a className="text-sm text-white hover:text-neutral-300 flex items-center gap-1 transition-colors" href="#contact">
                    View all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Branding &amp; Identity</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Memorable logo design, visual systems, and brand guidelines that articulate your values and resonate with your audience.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Web Development</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Custom Shopify &amp; WordPress solutions. High-performance, responsive websites designed to convert visitors into customers.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Digital Strategy</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Content creation, social media management, and actionable roadmaps to scale your online presence effectively.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="portfolio">
<div className="text-center mb-16 space-y-3">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Selected Works</h2>
<p className="text-neutral-400 font-light">A curation of branding and digital experiences.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative mb-4">
<img alt="Branding Project" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Branding</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-neutral-200">Zile Boutik</h3>
<p className="text-sm text-neutral-500">Brand Identity &amp; E-commerce</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative mb-4">
<img alt="Web Design" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Web Design</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-neutral-200">Urban Cafe</h3>
<p className="text-sm text-neutral-500">Digital Strategy &amp; Socials</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative mb-4">
<img alt="Social Media" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Social Media</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-neutral-200">TechStart Inc.</h3>
<p className="text-sm text-neutral-500">Visual Identity System</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="aspect-video bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative mb-4">
<img alt="Shopify" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Shopify</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-neutral-200">Lumina Home</h3>
<p className="text-sm text-neutral-500">E-commerce Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-12 text-center">Why choose Mithoo Design?</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="space-y-3">
<iconify-icon className="text-white text-3xl mb-2" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-white font-medium">Trust &amp; Transparency</h3>
<p className="text-sm text-neutral-400 font-light">Honest communication and clear timelines. No hidden fees, just partnership.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-white text-3xl mb-2" icon="solar:target-linear"></iconify-icon>
<h3 className="text-white font-medium">Strategy First</h3>
<p className="text-sm text-neutral-400 font-light">Design without strategy is just art. Every pixel serves a business goal.</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-white text-3xl mb-2" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-white font-medium">Long-term Growth</h3>
<p className="text-sm text-neutral-400 font-light">Building systems that scale with your business, not just one-off fixes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex justify-center">
<div className="max-w-2xl text-center relative">
<iconify-icon className="text-white/20 text-6xl absolute -top-8 -left-8 md:-left-16" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-6">
                "Mithoo Design transformed our online presence completely. The clarity in branding and the seamless functionality of our new site helped Zile Boutik reach a whole new level of customer trust."
            </p>
<div>
<cite className="text-white font-medium not-italic">Zile Boutik</cite>
<p className="text-sm text-neutral-500 mt-1">Fashion &amp; Retail Brand</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Ready to elevate your brand?</h2>
<p className="text-neutral-400 font-light">Fill out the form below or chat on WhatsApp to get a quote.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wide ml-1">Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wide ml-1">Email</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wide ml-1">Service Interest</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-white/10 bg-neutral-900 text-neutral-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center">
                                Branding
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-white/10 bg-neutral-900 text-neutral-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center">
                                Web Design
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-white/10 bg-neutral-900 text-neutral-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center">
                                Strategy
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="px-4 py-3 rounded-lg border border-white/10 bg-neutral-900 text-neutral-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-center">
                                Other
                            </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wide ml-1">Message</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell me about your project goals..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg hover:bg-neutral-200 transition-colors mt-4" type="submit">
                    Send Request
                </button>
</form>
<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm text-green-500 hover:text-green-400 transition-colors font-medium border border-green-500/20 bg-green-500/10 px-6 py-2 rounded-full" href="#">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-white font-medium tracking-tight text-lg">MITHOO<span className="text-neutral-500">DESIGN</span></span>
<p className="text-xs text-neutral-500 mt-2">© 2024 Mithoo Design. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:dribbble"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
