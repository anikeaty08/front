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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<span className="bg-white text-slate-950 w-6 h-6 flex items-center justify-center rounded text-xs font-bold">N</span>
                NEXTEL
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About Us</a>
<a className="hover:text-white transition-colors duration-200" href="#careers">Careers</a>
<a className="px-4 py-2 bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="glow top-0"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Global BPO &amp; Technology Solutions
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
                Empowering your business <br/>
<span className="text-gradient">with next-gen solutions.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We provide world-class Business Process Outsourcing and technology services designed to accelerate growth and enhance customer experience.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group" href="#contact">
                    Get Started
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white rounded-full font-medium hover:bg-white/10 transition-all" href="#services">
                    Explore Services
                </a>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">10+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">500+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Global Clients</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Support Coverage</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">99%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider">Satisfaction Rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Our Expertise</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">Comprehensive solutions tailored to streamline your operations and drive efficiency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
<span className="iconify" data-icon="lucide:headset" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Customer Experience</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Omnichannel support services including voice, chat, and email to ensure your customers receive exceptional care around the clock.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Analytics</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Transform raw data into actionable insights. We help you make informed decisions to optimize performance and strategy.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-icon="lucide:cloud" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cloud Solutions</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Scalable cloud infrastructure management and migration services to modernize your IT environment securely.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 text-orange-400">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Back Office Support</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Efficient administrative support, data entry, and processing services to let you focus on core business activities.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
<span className="iconify" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Tech Development</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Custom software development and IT consulting to build robust tools tailored to your specific operational needs.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.06] transition-all duration-300">
<div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Security &amp; Compliance</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Ensuring your operations meet global compliance standards and your data remains protected against threats.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>

<div className="aspect-video bg-slate-900 flex items-center justify-center relative overflow-hidden">
<div className="absolute w-[150%] h-[150%] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-slate-900 via-indigo-900/20 to-slate-900 animate-[spin_10s_linear_infinite]"></div>
<div className="z-10 text-white/20">
<span className="iconify" data-icon="lucide:globe-2" data-width="120"></span>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Why Choose Nextel?</h2>
<p className="text-slate-400 mb-6 font-light leading-relaxed">
                        At Nextel Global Solutions, we don't just provide services; we build partnerships. Our approach is rooted in understanding the unique challenges of your industry and deploying the right mix of talent and technology to solve them.
                    </p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-3">
<span className="mt-1 text-emerald-400 iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300">Agile methodologies that adapt to market changes.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-emerald-400 iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300">Cost-effective scaling for startups and enterprises.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-emerald-400 iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-300">Global talent pool with multi-lingual capabilities.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Ready to transform your business?</h2>
<p className="text-slate-400 text-lg mb-10 font-light">Join hundreds of forward-thinking companies leveraging Nextel for superior performance.</p>
<div className="flex justify-center">
<a className="px-8 py-4 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#contact">
                    Schedule a Consultation
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<span className="bg-white text-slate-950 w-6 h-6 flex items-center justify-center rounded text-xs font-bold">N</span>
                        NEXTEL
                    </a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Nextel Global Solutions is a premier provider of BPO and technology services, dedicated to driving excellence in every interaction.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Customer Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cloud Infrastructure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Development</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            info@nextelglobalsolutions.com
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                            Global Headquarters
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<p>© 2024 Nextel Global Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
