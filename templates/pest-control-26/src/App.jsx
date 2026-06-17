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
      

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A1A1A] via-[#0F0F0F] to-[#0F0F0F]"></div>
<div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] z-[-1] mask-image:linear-gradient(to_bottom,white,transparent)"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0F0F0F]/80 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-[#22C55E] flex items-center justify-center">
<iconify-icon className="text-black text-sm" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg uppercase">PestGuard</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Process</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    (555) 123-4567
                </a>
<button className="bg-[#22C55E] text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-[#1fa14d] transition-colors flex items-center gap-2">
                    Get a Quote
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                24/7 Emergency Dispatch Available
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white">
                Eliminate pests. <br className="hidden md:block"/>
<span className="text-gray-500">Restore your peace of mind.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                Modern, targeted extermination solutions designed to eradicate infestations at the source. Safe for your family, ruthless on pests.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#22C55E] text-black text-sm font-medium px-6 py-3 rounded-md hover:bg-[#1fa14d] transition-colors flex items-center justify-center gap-2">
                    Schedule Inspection
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-white/10 bg-white/5 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    View Services
                </button>
</div>

<div className="mt-16 pt-8 border-t border-white/5 w-full max-w-3xl flex flex-wrap justify-center gap-x-12 gap-y-6 text-gray-500">
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#22C55E] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Licensed &amp; Insured
                </div>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#22C55E] text-lg" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
                    Eco-Friendly Options
                </div>
<div className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#22C55E] text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
                    Same-Day Service
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Comprehensive coverage.</h2>
<p className="text-gray-400 text-base">We handle everything from common household nuisances to severe structural threats. Our targeted approach ensures complete eradication.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative bg-[#131313] border border-white/5 rounded-xl p-6 hover:border-[#22C55E]/50 hover:bg-[#1A1A1A] transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#22C55E]/30 group-hover:bg-[#22C55E]/10 transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#22C55E] text-xl transition-colors" icon="solar:bug-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Insects &amp; Spiders</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Complete eradication of ants, roaches, spiders, and stinging insects nesting in or around your property.</p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#131313] border border-white/5 rounded-xl p-6 hover:border-[#22C55E]/50 hover:bg-[#1A1A1A] transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#22C55E]/30 group-hover:bg-[#22C55E]/10 transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#22C55E] text-xl transition-colors" icon="solar:mouse-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Rodent Control</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Exclusion, trapping, and baiting systems to eliminate mice and rats and prevent future entry.</p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#131313] border border-white/5 rounded-xl p-6 hover:border-[#22C55E]/50 hover:bg-[#1A1A1A] transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#22C55E]/30 group-hover:bg-[#22C55E]/10 transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#22C55E] text-xl transition-colors" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Termite Defense</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Advanced detection and barrier treatments to protect your structural integrity from wood-destroying insects.</p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#131313] border border-white/5 rounded-xl p-6 hover:border-[#22C55E]/50 hover:bg-[#1A1A1A] transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#22C55E]/30 group-hover:bg-[#22C55E]/10 transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#22C55E] text-xl transition-colors" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Wildlife Removal</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Humane trapping and relocation services for raccoons, squirrels, bats, and other intrusive wildlife.</p>
<a className="inline-flex items-center gap-1 text-xs font-medium text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#131313]/50 border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A tactical approach.</h2>
<p className="text-gray-400 text-base">We don't just spray and pray. Our methodology is rooted in science, ensuring long-term protection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(34,197,94,0.05)]">
<iconify-icon className="text-[#22C55E] text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">1. Inspect &amp; Identify</h3>
<p className="text-sm text-gray-400 leading-relaxed">Thorough property analysis to locate nests, entry points, and determine the exact species involved.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(34,197,94,0.05)]">
<iconify-icon className="text-[#22C55E] text-2xl" icon="solar:shield-cross-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">2. Targeted Treatment</h3>
<p className="text-sm text-gray-400 leading-relaxed">Deployment of precise, family-safe treatments to eradicate the active infestation quickly.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(34,197,94,0.05)]">
<iconify-icon className="text-[#22C55E] text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">3. Exclusion &amp; Prevention</h3>
<p className="text-sm text-gray-400 leading-relaxed">Sealing entry points and establishing ongoing barriers to ensure pests never return.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_50%)]"></div>
<div className="max-w-4xl mx-auto relative z-10 bg-[#131313] border border-white/10 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Ready to reclaim your space?</h2>
<p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">Get a free, no-obligation quote today. Our team is ready to dispatch within 24 hours.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#0F0F0F] border border-white/10 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] rounded-md text-sm px-10 py-3 outline-none text-white placeholder-gray-600 transition-all" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full sm:w-auto whitespace-nowrap bg-[#22C55E] text-black text-sm font-medium px-6 py-3 rounded-md hover:bg-[#1fa14d] transition-colors" type="submit">
                    Request Quote
                </button>
</form>
<p className="mt-4 text-xs text-gray-600">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0F0F0F] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-5 w-5 rounded bg-[#22C55E] flex items-center justify-center">
<iconify-icon className="text-black text-xs" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-base uppercase">PestGuard</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">
                    Advanced pest control solutions for modern homes and businesses. Protecting what matters most.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-400 hover:text-[#22C55E] transition-colors" href="#">Insect Control</a></li>
<li><a className="text-xs text-gray-400 hover:text-[#22C55E] transition-colors" href="#">Rodent Removal</a></li>
<li><a className="text-xs text-gray-400 hover:text-[#22C55E] transition-colors" href="#">Termite Protection</a></li>
<li><a className="text-xs text-gray-400 hover:text-[#22C55E] transition-colors" href="#">Commercial Plans</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Our Process</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Testimonials</a></li>
<li><a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white mb-4">Contact</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        (555) 123-4567
                    </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                        hello@pestguard.com
                    </li>
<li className="flex items-start gap-2 text-xs text-gray-400 mt-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        123 Control Way<br/>Suite 100<br/>Metropolis, NY 10001
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-gray-600 mb-4 md:mb-0">© 2023 PestGuard Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-gray-600 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-600 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
