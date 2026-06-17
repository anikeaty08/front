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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] blur-[120px] rounded-full pointer-events-none -z-10 bg-indigo-200/20"></div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-indigo-100/50 bg-indigo-50/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold tracking-tighter text-lg transition-colors text-indigo-900 hover:text-black" data-imt-p="1" href="#">JIEJOE</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors font-medium text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#work">Work</a>
<a className="text-sm transition-colors font-medium text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#services">Services</a>
<a className="text-sm transition-colors font-medium text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm transition-colors font-medium text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#">Sign In</a>
<a className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-indigo-900 text-indigo-50 hover:bg-black" data-imt-p="1" href="#contact">Start Project</a>
<button className="md:hidden text-indigo-600 hover:text-indigo-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 z-10 pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8 backdrop-blur-sm border-indigo-200/80 bg-indigo-100/30 text-indigo-700">
<iconify-icon className="text-indigo-600" height="16" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="" data-imt-p="1">Defining the digital frontier</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b to-indigo-500 leading-[1.1] max-w-3xl from-black" data-imt-p="1">
                Crafting interfaces that inspire action.
            </h1>
<p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-normal text-indigo-600" data-imt-p="1">
                We design and engineer digital products that elevate brands and simplify complex problems. Focused on performance, aesthetics, and user experience.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-indigo-900 text-indigo-50 hover:bg-black" data-imt-p="1" href="#work">
                    View Portfolio
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-100 hover:text-black" data-imt-p="1" href="#contact">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Book a call
                </a>
</div>
</div>
</section>

<section className="py-12 border-y overflow-hidden border-indigo-100/50 bg-indigo-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-indigo-500 mb-6 uppercase tracking-wider" data-imt-p="1">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter" data-imt-p="1">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter" data-imt-p="1">GLOBAL</span>
<span className="text-xl font-semibold tracking-tighter" data-imt-p="1">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter" data-imt-p="1">ZENITH</span>
<span className="text-xl font-semibold tracking-tighter hidden md:block" data-imt-p="1" data-imt_insert_failed_reason="same_text">APEX</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-indigo-900" data-imt-p="1">A unified approach to digital.</h2>
<p className="text-base max-w-xl font-normal text-indigo-600" data-imt-p="1">Everything you need to scale your digital presence, from foundational design systems to complex web applications.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl border transition-colors duration-300 overflow-hidden border-indigo-200/60 bg-indigo-100/20 hover:bg-indigo-100/40">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-indigo-200/10"></div>
<div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 group-hover:text-white transition-all duration-300 bg-indigo-200/50 border-indigo-300/50 text-indigo-700">
<iconify-icon height="24" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 relative z-10 text-indigo-900" data-imt-p="1">Product Design</h3>
<p className="text-sm leading-relaxed font-normal relative z-10 text-indigo-600" data-imt-p="1">We create intuitive, user-centric interfaces that solve real problems. From wireframes to high-fidelity prototypes, every detail is considered.</p>
</div>

<div className="group relative p-8 rounded-3xl border transition-colors duration-300 overflow-hidden border-indigo-200/60 bg-indigo-100/20 hover:bg-indigo-100/40">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-indigo-200/10"></div>
<div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 group-hover:text-white transition-all duration-300 bg-indigo-200/50 border-indigo-300/50 text-indigo-700">
<iconify-icon className="" height="24" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 relative z-10 text-indigo-900" data-imt-p="1">Web Engineering</h3>
<p className="text-sm leading-relaxed font-normal relative z-10 text-indigo-600" data-imt-p="1">Modern stack development utilizing React, Next.js, and Tailwind. We build fast, scalable, and secure web applications.</p>
</div>

<div className="group relative p-8 rounded-3xl border transition-colors duration-300 overflow-hidden border-indigo-200/60 bg-indigo-100/20 hover:bg-indigo-100/40">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-indigo-200/10"></div>
<div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 group-hover:text-white transition-all duration-300 bg-indigo-200/50 border-indigo-300/50 text-indigo-700">
<iconify-icon height="24" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 relative z-10 text-indigo-900" data-imt-p="1">Growth &amp; Strategy</h3>
<p className="text-sm leading-relaxed font-normal relative z-10 text-indigo-600" data-imt-p="1">Beyond deployment, we help you optimize performance, improve SEO, and establish a digital strategy for long-term success.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-indigo-100/50" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-indigo-900" data-imt-p="1">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border mb-6 bg-indigo-100 border-indigo-200/50">
<div className="absolute inset-0 flex items-center justify-center text-indigo-200">

<div className="w-1/2 h-1/2 rounded-full border blur-[2px] group-hover:blur-[1px] transition-all duration-500 border-indigo-200/50"></div>
<div className="absolute w-1/3 h-1/3 rounded-full border translate-x-4 -translate-y-4 blur-[1px] group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500 border-indigo-300/50"></div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-indigo-900" data-imt-p="1">Fintech Dashboard</h3>
<p className="text-sm text-indigo-500 font-normal" data-imt-p="1">Design &amp; Development</p>
</div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-900 group-hover:border-transparent transition-all duration-300 -rotate-45 group-hover:rotate-0 border-indigo-200 text-indigo-600">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-16" href="#">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border mb-6 bg-indigo-100 border-indigo-200/50">
<div className="absolute inset-0 bg-gradient-to-br to-transparent flex items-center justify-center from-indigo-200/20">

<div className="w-2/3 h-12 rounded-xl rotate-12 group-hover:rotate-6 transition-transform duration-500 border bg-indigo-200/40 border-indigo-300/30"></div>
<div className="absolute w-2/3 h-12 rounded-xl -rotate-12 group-hover:-rotate-6 transition-transform duration-500 border bg-indigo-200/20 border-indigo-300/30"></div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-indigo-900" data-imt-p="1">E-commerce Platform</h3>
<p className="text-sm text-indigo-500 font-normal" data-imt-p="1">Architecture &amp; Frontend</p>
</div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-900 group-hover:border-transparent transition-all duration-300 -rotate-45 group-hover:rotate-0 border-indigo-200 text-indigo-600">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-indigo-100/50 bg-indigo-50/30">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight mb-3 text-indigo-900" data-imt-p="1">Attention to detail.</h2>
<p className="text-sm text-indigo-500 font-normal" data-imt-p="1">Custom components built with precision.</p>
</div>

<div className="border rounded-3xl p-8 backdrop-blur-sm shadow-2xl bg-indigo-100/40 border-indigo-200/60">
<div className="flex items-center justify-between pb-6 border-b mb-6 border-indigo-200/50">
<div>
<h4 className="text-base font-medium text-indigo-900" data-imt-p="1">Notifications</h4>
<p className="text-xs text-indigo-500 mt-1" data-imt-p="1">Manage your email and push preferences.</p>
</div>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between group cursor-pointer">
<div>
<p className="text-sm font-medium text-indigo-800" data-imt-p="1">Marketing Emails</p>
<p className="text-xs text-indigo-500 mt-1" data-imt-p="1">Receive updates about new features.</p>
</div>
<div className="relative w-10 h-6 rounded-full border transition-colors group-hover:bg-indigo-700/50 bg-indigo-200 border-indigo-300/50">
<div className="absolute left-1 top-1 w-4 h-4 rounded-full transition-transform bg-indigo-600"></div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div>
<p className="text-sm font-medium text-indigo-800" data-imt-p="1">Security Alerts</p>
<p className="text-xs text-indigo-500 mt-1" data-imt-p="1">Get notified about unusual activity.</p>
</div>
<div className="relative w-10 h-6 rounded-full border transition-colors bg-indigo-900 border-indigo-900">
<div className="absolute left-1 top-1 w-4 h-4 rounded-full transition-transform translate-x-4 bg-indigo-100"></div>
</div>
</div>

<div className="pt-6 border-t border-indigo-200/50">
<label className="block text-sm font-medium mb-3 text-indigo-800" data-imt-p="1">Theme Preference</label>
<div className="relative w-full max-w-xs">
<div className="w-full border text-sm rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors bg-indigo-50 border-indigo-200 hover:border-indigo-300 text-indigo-700">
<span className="flex items-center gap-2" data-imt-p="1">
<iconify-icon height="16" icon="solar:moon-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Dark Mode
                                </span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 border-indigo-100/80 bg-indigo-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="font-semibold tracking-tighter text-xl mb-4 block text-indigo-900" data-imt-p="1" href="#">JIEJOE</a>
<p className="text-sm text-indigo-500 max-w-sm font-normal" data-imt-p="1">
                        Designing the future of digital interactions. Based in the cloud, serving globally.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-indigo-900" data-imt-p="1">Social</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors font-medium flex items-center gap-2 text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#"><iconify-icon height="16" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Twitter / X</a></li>
<li><a className="text-sm transition-colors font-medium flex items-center gap-2 text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#"><iconify-icon height="16" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> LinkedIn</a></li>
<li><a className="text-sm transition-colors font-medium flex items-center gap-2 text-indigo-600 hover:text-indigo-900" data-imt-p="1" href="#"><iconify-icon height="16" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-indigo-900" data-imt-p="1">Contact</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors font-medium text-indigo-600 hover:text-indigo-900" href="mailto:hello@jiejoe.com">hello@jiejoe.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-indigo-100/50">
<p className="text-xs font-normal text-indigo-400" data-imt-p="1">© 2024 Jiejoe. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs transition-colors font-medium text-indigo-400 hover:text-indigo-600" data-imt-p="1" href="#">Privacy Policy</a>
<a className="text-xs transition-colors font-medium text-indigo-400 hover:text-indigo-600" data-imt-p="1" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
