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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<iconify-icon className="text-2xl text-zinc-300 group-hover:text-white transition-colors" icon="solar:shield-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-white">Sun Stalwart</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-base text-white font-medium" href="#">Our Services</a>
</div>
<a className="hidden md:inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Contact Command
            </a>

<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-56 md:pb-24 overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
<iconify-icon className="text-base text-zinc-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Uncompromising Excellence</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8">
                Elite Protection.<br/>
<span className="text-zinc-500">Absolute Certainty.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                We provide the industry’s most trusted and rigorous security solutions. From elite executive protection to advanced surveillance, our vanguard ensures your operations remain impenetrable.
            </p>
</div>
</header>

<section className="py-12 md:py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[320px]">

<div className="group relative md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-end p-8 md:p-12">
<img alt="Corporate Security" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-md flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-zinc-200" icon="solar:shield-user-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4">Static &amp; Armed Guarding</h3>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                            Highly disciplined local and rigorously vetted Gurkha guards providing an impenetrable frontline defense for corporate, commercial, and residential sectors.
                        </p>
</div>
</div>

<div className="group relative md:col-span-2 rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col justify-end p-8">
<img alt="Executive Protection" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1590494056257-268e0e7a25de?q=80&amp;w=1200&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20"></div>
<div className="relative z-10 flex items-end justify-between gap-6">
<div>
<div className="w-12 h-12 rounded-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-md flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-zinc-200" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Executive Protection</h3>
<p className="text-base text-zinc-400 max-w-sm">Elite, discreet bodyguards trained in advanced threat mitigation and close-quarter defense.</p>
</div>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:bg-zinc-900 transition-colors duration-500 flex flex-col p-8">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-auto">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:safe-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Secure Escort</h3>
<p className="text-sm text-zinc-500">Heavily fortified transport and escort services for high-value assets and VIPs.</p>
</div>
</div>

<div className="group relative md:col-span-1 rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:bg-zinc-900 transition-colors duration-500 flex flex-col p-8">
<div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-auto">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Risk Audits</h3>
<p className="text-sm text-zinc-500">Comprehensive vulnerability assessments and strategic security architecture design.</p>
</div>
</div>

<div className="group relative lg:col-span-4 rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 md:gap-16 min-h-[280px]">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20"></div>
<div className="relative z-10 flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Live 24/7 Monitoring</span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4">Command &amp; Surveillance</h3>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                            State-of-the-art Centralized Monitoring Systems (CMS). We deploy advanced CCTV networks, perimeter breach detection, and immediate rapid-response protocols to neutralize threats before they escalate.
                        </p>
</div>
<div className="relative z-10 w-full md:w-auto flex shrink-0 justify-center">
<div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-zinc-800/80 flex items-center justify-center relative">
<div className="absolute inset-2 rounded-full border border-zinc-700/50 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-6 rounded-full border border-zinc-600/30 animate-[spin_15s_linear_infinite_reverse]"></div>
<iconify-icon className="text-6xl text-zinc-400" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-900 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col">
<iconify-icon className="text-4xl text-white mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Vetted &amp; Trained Personnel</h3>
<p className="text-base text-zinc-400">Every officer undergoes rigorous background checks and specialized tactical training to ensure peak operational readiness.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-4xl text-white mb-6" icon="solar:global-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Nationwide Deployment</h3>
<p className="text-base text-zinc-400">A vast network of highly responsive security units ready to mobilize and secure assets anywhere in the region.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-4xl text-white mb-6" icon="solar:target-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Zero Compromise Policy</h3>
<p className="text-base text-zinc-400">We operate with absolute integrity and strict compliance, providing liability-free, world-class protection you can trust.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 py-20 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

<img alt="Command Center" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent md:to-zinc-950/40"></div>
<div className="relative z-10 max-w-2xl text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Fortify Your Perimeter Today.
                    </h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                        Don't leave your assets vulnerable. Partner with the industry's most trusted security vanguard. Contact our command center to architect a customized protection strategy.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors group" href="#">
                            Deploy Services
                            <iconify-icon className="ml-2 text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors" href="tel:+60386821407">
<iconify-icon className="mr-2 text-xl text-zinc-400" icon="solar:phone-linear"></iconify-icon>
                            +603 8682 1407
                        </a>
</div>
</div>

<div className="relative z-10 hidden lg:flex items-center justify-center w-64 h-64">
<div className="absolute inset-0 rounded-full border border-zinc-700/50 flex items-center justify-center backdrop-blur-sm bg-zinc-950/30">
<div className="text-center">
<iconify-icon className="text-5xl text-white mb-2" icon="solar:shield-star-linear"></iconify-icon>
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Trust &amp; Excellence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-white" href="#">
<iconify-icon className="text-2xl" icon="solar:shield-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tight">Sun Stalwart</span>
</a>
<p className="text-base text-zinc-500 mb-2">No 23-1M @ Eco Somerset,</p>
<p className="text-base text-zinc-500 mb-2">Jalan Eco Santuari 8/1C,</p>
<p className="text-base text-zinc-500">42500 Shah Alam, Selangor.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Main Menu</h4>
<ul className="space-y-4 text-base text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-white" href="#">Our Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Our Services</h4>
<ul className="space-y-4 text-base text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Static Guarding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Executive Protection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Surveillance Systems</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Get Updates</h4>
<p className="text-base text-zinc-500 mb-4">Subscribe to our newsletter to stay updated.</p>
<form className="flex gap-2">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-900 text-sm text-zinc-600">
<p>© 2024 Sun Stalwart Security Services Sdn Bhd (1367915-T). All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
