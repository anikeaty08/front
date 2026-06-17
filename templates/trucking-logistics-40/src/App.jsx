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
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="iconify text-indigo-500" data-height="24" data-icon="lucide:truck" data-width="24"></span>
<span className="text-white font-medium tracking-tighter text-lg uppercase">Nile Express</span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Lanes</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Safety</a>
</div>
</div>

<div className="hidden md:block">
<a className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900" href="#">
<span>Drive With Us</span>
<span className="iconify ml-2 group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none" type="button">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none hero-glow z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">Hiring CDL Class A Drivers</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6">
                Moving America’s Freight <br className="hidden lg:block"/>
<span className="text-slate-500">With Precision &amp; Speed.</span>
</h1>

<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
                Nile Express LLC connects the nation's supply chain with over 100 dedicated drivers. Servicing major lanes for USPS, Walmart, and J.B. Hunt with unwavering reliability.
            </p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
                    Partner With Us
                </button>
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">
                    Apply as Driver
                </button>
</div>
</div>
</div>

<div className="border-y border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:package" data-width="24"></span>
<span className="text-lg font-semibold text-white tracking-tight">USPS</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:shopping-cart" data-width="24"></span>
<span className="text-lg font-semibold text-white tracking-tight">Walmart</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:truck" data-width="24"></span>
<span className="text-lg font-semibold text-white tracking-tight">J.B. Hunt</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:box" data-width="24"></span>
<span className="text-lg font-semibold text-white tracking-tight">Amazon</span>
</div>
<div className="flex items-center gap-2 md:col-span-4 lg:col-span-1">
<span className="iconify text-white" data-icon="lucide:globe" data-width="24"></span>
<span className="text-lg font-semibold text-white tracking-tight">FedEx</span>
</div>
</div>
</div>
</div>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Optimized for Distance</h2>
<p className="text-slate-400 text-lg font-light">
                    We combine a modern fleet with experienced drivers to ensure your cargo arrives safely and on time, every time.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-500/30">
<span className="iconify text-indigo-400" data-icon="lucide:map" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Nationwide Coverage</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                Operating across 10 dedicated lanes connecting major distribution hubs. Our strategic network ensures efficient routing for USPS and retail giants.
                            </p>
</div>

<div className="mt-8 w-full h-48 rounded-xl bg-slate-900/50 border border-white/5 relative overflow-hidden">
<img alt="Highway Map" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

<div className="absolute top-1/3 left-1/4 h-2 w-2 bg-indigo-400 rounded-full animate-ping"></div>
<div className="absolute top-1/3 left-1/4 h-2 w-2 bg-indigo-400 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/3 h-2 w-2 bg-white rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{strokeDasharray: '4', animation: 'dash 20s linear infinite'}}>
<path d="M 200 80 Q 400 150 600 100" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute -right-10 -top-10 h-32 w-32 bg-purple-500/10 rounded-full blur-2xl"></div>
<span className="iconify text-slate-500 mb-4" data-icon="lucide:users" data-width="24"></span>
<div className="text-5xl font-medium text-white tracking-tighter mb-1">100+</div>
<div className="text-sm text-slate-400 font-medium">Professional Drivers</div>
<div className="mt-4 text-xs text-slate-500">Fully vetted, CDL Class A certified team members.</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 h-32 w-32 bg-blue-500/10 rounded-full blur-2xl"></div>
<span className="iconify text-slate-500 mb-4" data-icon="lucide:shield-check" data-width="24"></span>
<div className="text-2xl font-medium text-white tracking-tight mb-2">Safety First</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Top-tier safety ratings and strict compliance with DOT regulations. 
                    </p>
</div>

<div className="md:col-span-3 glass-panel-highlight rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="flex-1 z-10">
<div className="flex items-center flex-wrap gap-3 mb-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">Fleet Status: Active</span>
</div>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:wrench" data-width="14"></span>
<span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Partner: Southgate</span>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Maintained for Maximum Uptime</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                            Reliability isn't an accident. Through our exclusive partnership with <a className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium border-b border-indigo-500/30 hover:border-indigo-400 pb-0.5 inline-flex items-center gap-1" href="#">Southgate Truck Repair Service <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span></a>, our fleet receives 24/7 priority maintenance and preventive care, ensuring your cargo never waits on a repair.
                        </p>
<div className="mt-6 flex flex-wrap gap-4">
<div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle" data-width="14"></span> 
                                Certified Mechanics
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle" data-width="14"></span> 
                                Preventive Scheduling
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:clock" data-width="14"></span> 
                                Rapid Response
                            </div>
</div>
</div>
<div className="flex-1 w-full relative h-56 md:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Truck Fleet Maintenance" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Built on Trust &amp; Integrity</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-900 border border-white/10 text-white">
<span className="iconify" data-icon="lucide:briefcase" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white">Consistent Freight</h4>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                    Our contracts with USPS and major retailers guarantee consistent miles for our drivers and reliable capacity for our clients.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-900 border border-white/10 text-white">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white">Driver-Centric Culture</h4>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                    We treat our drivers like family. Competitive pay, home time, and respect are the pillars of Nile Express.
                                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-900 border border-white/10 text-white">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white">On-Time Performance</h4>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                    With a 99% on-time delivery rate, we understand that in logistics, time is the most valuable currency.
                                </p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-50 rounded-2xl"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Truck driving at night" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-3 mb-2">
<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-green-400 uppercase tracking-wider">Live Operations</span>
</div>
<p className="text-white font-medium">Servicing 10+ Major Lanes Daily</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-indigo-600/10 border border-indigo-500/20 px-6 py-16 text-center">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">Ready to drive with Nile Express?</h2>
<p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg font-light">
                    Join a team that values your skill and dedication. Apply now and start your journey with a company that puts you first.
                </p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-slate-900/50 border border-white/10 text-white text-sm rounded-full px-5 py-3 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-200 transition-colors text-sm" type="button">
                        Get Started
                    </button>
</form>
<p className="mt-4 text-xs text-slate-600">By subscribing, you agree to our Terms &amp; Privacy Policy.</p>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-indigo-500" data-icon="lucide:truck" data-width="24"></span>
<span className="text-white font-medium tracking-tighter text-xl uppercase">Nile Express</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Providing premier trucking and logistics solutions across the United States. Dedicated lanes, experienced drivers, and unwavering commitment to service.
                    </p>
</div>
<div>
<h3 className="text-white font-medium mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Safety</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">News</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4">Contact</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Burnsville, MN
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            (612) 555-0123
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            dispatch@nileexpress.net
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Nile Express LLC. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
