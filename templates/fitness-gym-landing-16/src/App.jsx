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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white" href="#">JNKPR</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#facility">Facility</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#classes">Classes</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#pricing">Memberships</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">Join Now</a>
</div>
</div>
</nav>

<main className="md:pt-56 md:pb-32 overflow-hidden flex flex-col min-h-[90vh] pt-40 pb-24 relative items-center justify-center">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-4xl mt-auto mr-auto mb-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                Now open in Janakpur
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6">
                Redefine your limits. <br className="hidden md:block"/>
<span className="text-zinc-500">Shape your future.</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl font-normal leading-relaxed">
                The most advanced fitness facility in Janakpur. Equipped with industry-leading machinery, expert coaching, and a community built for progress.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="sm:w-auto hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
                    Start your journey
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white bg-black/50 w-full border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-md" href="#pricing">
                    View Plans
                </a>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black z-20 relative">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-around items-center gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="w-full pt-4 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">5,000+</div>
<div className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Sq. Ft. Space</div>
</div>
<div className="w-full pt-10 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">24/7</div>
<div className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Unrestricted Access</div>
</div>
<div className="w-full pt-10 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">15+</div>
<div className="text-xs text-zinc-500 font-medium tracking-wide uppercase">Expert Coaches</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="facility">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Engineered for performance</h2>
<p className="text-base text-zinc-400 font-normal">Everything you need to build your best self, centralized in the heart of Janakpur.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden relative border-b border-white/5">
<img alt="Premium Equipment" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
<iconify-icon height="20" icon="solar:dumbbell-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Premium Equipment</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">State-of-the-art free weights, resistance machines, and cardio setups designed for optimal biomechanics.</p>
</div>
</div>

<div className="rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden relative border-b border-white/5">
<img alt="Expert Coaching" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-70 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Expert Coaching</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Certified personal trainers dedicated to crafting custom programs that align with your specific physiological goals.</p>
</div>
</div>

<div className="rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden relative border-b border-white/5">
<img alt="Flexible Scheduling" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
<iconify-icon height="20" icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Flexible Scheduling</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">Train on your schedule. Group classes spanning from early morning HIIT to evening restorative yoga sessions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-black" id="pricing">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mr-auto mb-16 ml-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Transparent memberships</h2>

<div className="inline-flex items-center p-1 bg-white/[0.04] rounded-full border border-white/5 mb-2">
<button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium shadow-sm">Monthly</button>
<button className="px-5 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                        Annually 
                        <span className="px-1.5 py-0.5 rounded-md bg-zinc-800 text-white text-xs border border-white/10">-20%</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="flex flex-col hover:border-white/20 transition-colors bg-black border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Standard</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">Essential access for dedicated individuals.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">NPR 2,500</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Full gym access during hours
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Locker rooms &amp; standard showers
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon height="18" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Group classes (pay per class)
                        </li>
</ul>
<button className="w-full py-2.5 px-4 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors border border-white/5">Select Standard</button>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-700/50 relative flex flex-col shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-8 transform -translate-y-1/2 px-3 py-1 bg-white text-black text-xs font-medium rounded-full shadow-sm">Popular</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight relative z-10">Premium</h3>
<p className="text-sm text-zinc-400 mb-6 h-10 relative z-10">The complete, unrestricted fitness experience.</p>
<div className="mb-8 flex items-baseline gap-1 relative z-10">
<span className="text-4xl font-semibold tracking-tight text-white">NPR 4,000</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            24/7 Facility access
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Unlimited group classes
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" height="18" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            1 Personal Training session/mo
                        </li>
</ul>
<button className="w-full py-2.5 px-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">Select Premium</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-medium tracking-tighter text-white inline-block mb-4" href="#">JNKPR</a>
<p className="text-sm text-zinc-500 max-w-xs mb-6 leading-relaxed">
                        Elevating fitness standards in Madhesh Province. Join a community dedicated to strength, endurance, and overall well-being.
                    </p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon height="16" icon="solar:routing-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all" href="#">
<iconify-icon height="16" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Location</h4>
<ul className="space-y-2">
<li className="text-sm text-zinc-500">Ramanand Chowk</li>
<li className="text-sm text-zinc-500">Janakpurdham, Nepal</li>
<li className="text-sm text-zinc-500 mt-4">+977 9800000000</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Hours</h4>
<ul className="space-y-2">
<li className="text-sm text-zinc-500 flex justify-between">
<span>Mon - Fri</span>
<span className="text-zinc-400">5:00 AM - 10:00 PM</span>
</li>
<li className="text-sm text-zinc-500 flex justify-between">
<span>Saturday</span>
<span className="text-zinc-400">6:00 AM - 8:00 PM</span>
</li>
<li className="text-sm text-zinc-500 flex justify-between">
<span>Sunday</span>
<span className="text-zinc-600">Closed</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2024 JNKPR Fitness. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
