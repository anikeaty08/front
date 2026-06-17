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



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-x-full');
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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,56,202,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

<header className="fixed top-0 left-0 w-full z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-zinc-200 to-zinc-500 flex items-center justify-center text-black">
<iconify-icon className="text-black" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-1.5 leading-none tracking-tight">
<span className="text-base font-semibold text-white">Agency</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#results">Work</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-8 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-black transition-all hover:bg-zinc-200 btn-glow" href="#contact">
                    Let's Talk
                </a>
<button className="md:hidden text-zinc-400 hover:text-white transition-colors flex items-center" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-[#030303]/95 backdrop-blur-2xl z-50 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center md:hidden" id="mobile-menu">
<button className="absolute top-5 right-6 text-zinc-500 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<nav className="flex flex-col gap-6 text-center text-lg tracking-tight">
<a className="text-zinc-400 hover:text-white" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-zinc-400 hover:text-white" href="#results" onclick="toggleMobileMenu()">Work</a>
<a className="text-zinc-400 hover:text-white" href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
<a className="text-white mt-4 font-medium" href="#contact" onclick="toggleMobileMenu()">Let's Talk</a>
</nav>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-indigo-200">Accepting new clients for Q3</span>
</div>
<h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-6 leading-[1.05] max-w-4xl">
                Scale Your Brand With <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Performance Marketing.</span>
</h1>
<p className="text-zinc-400 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-2xl">
                We help brands grow using paid ads, AI automation, and conversion-focused systems designed for measurable impact.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all btn-glow" href="#contact">
                    Book a Free Strategy Call
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors" href="#results">
                    View Case Studies
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5 text-center">
<div className="pt-8 md:pt-0">
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">50+</span>
<span className="text-sm text-zinc-500 font-medium tracking-wide">Active Clients</span>
</div>
<div className="pt-8 md:pt-0">
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">$5M+</span>
<span className="text-sm text-zinc-500 font-medium tracking-wide">Revenue Generated</span>
</div>
<div className="pt-8 md:pt-0">
<span className="block text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">120+</span>
<span className="text-sm text-zinc-500 font-medium tracking-wide">Campaigns Launched</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-xl">
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-zinc-400 font-light text-base leading-relaxed">
                        End-to-end growth solutions built to scale your customer acquisition and retention systems.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4 lg:gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight text-white mb-3">Paid Advertising</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        Data-driven media buying across Meta, Google, and TikTok to acquire customers at profitable CAC.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-indigo-400 transition-colors mt-auto" href="#contact">
                        Learn More <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight text-white mb-3">Social Media Growth</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        Organic content systems and community management that build brand equity and loyal audiences.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-indigo-400 transition-colors mt-auto" href="#contact">
                        Learn More <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight text-white mb-3">Website Design</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        High-converting landing pages and headless commerce experiences optimized for conversion rates.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-indigo-400 transition-colors mt-auto" href="#contact">
                        Learn More <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden flex flex-col">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl tracking-tight text-white mb-3">AI Automation</h3>
<p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                        Streamline operations and nurture leads automatically with intelligent CRM setups and workflows.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-indigo-400 transition-colors mt-auto" href="#contact">
                        Learn More <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/5 relative" id="results">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-indigo-900/[0.03] to-[#030303] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center">
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-white mb-4">Proven Results</h2>
<p className="text-zinc-400 text-sm">We let the numbers speak for our methodology.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-10 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon height="120" icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
                            E-Commerce Brand
                        </div>
<h3 className="font-semibold text-6xl md:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white mb-6">
                            +340%
                        </h3>
<p className="text-white font-medium text-lg mb-2 tracking-tight">Revenue Growth in 90 Days</p>
<p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
                            Scaled Meta ads spend while maintaining a 3.2x blended ROAS through creative testing and audience consolidation.
                        </p>
</div>
</div>

<div className="p-10 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-bl from-white/[0.04] to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon height="120" icon="solar:rocket-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8">
                            SaaS Startup
                        </div>
<h3 className="font-semibold text-6xl md:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white mb-6">
                            -45%
                        </h3>
<p className="text-white font-medium text-lg mb-2 tracking-tight">Reduction in CAC</p>
<p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
                            Restructured Google Search campaigns and implemented automated email sequences to nurture leads efficiently.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-white mb-4">Client Feedback</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                        "They completely transformed our acquisition funnel. The attention to detail in the ad creatives and the data-driven approach is unmatched. Highly recommend for any brand looking to scale."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-500" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Sarah Jenkins</h4>
<p className="text-zinc-500 text-xs">CMO, Lumina Tech</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                        "Working with them feels like having an in-house growth team. They don't just run ads; they look at the whole picture—from website conversion rate to LTV. Game changers."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-500" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Marcus Thorne</h4>
<p className="text-zinc-500 text-xs">Founder, Core Athletics</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                        "The automation systems they built saved us hours every week, while simultaneously increasing our lead closing rate. It's rare to find an agency that actually over-delivers."
                    </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-zinc-500" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">Elena Rostova</h4>
<p className="text-zinc-500 text-xs">VP Marketing, ScaleFlow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative overflow-hidden text-center" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(67,56,202,0.1),rgba(255,255,255,0))] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="font-semibold text-4xl md:text-6xl tracking-tighter text-white mb-6">
                Ready to Grow?
            </h2>
<p className="text-zinc-400 font-light text-lg mb-10">
                Let’s build a scalable system for your brand. Schedule a free discovery call to see if we're the right fit.
            </p>
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-medium transition-all btn-glow w-full sm:w-auto" href="#">
                Schedule Call
                <iconify-icon height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center md:text-left bg-[#030303]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-zinc-500 flex items-center justify-center text-black">
<iconify-icon className="text-black" height="10" icon="solar:chart-square-linear" width="10"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white text-sm">Agency</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-zinc-600 text-xs font-light">
                © 2024 Agency. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
