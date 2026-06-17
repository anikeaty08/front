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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none">
<div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center justify-between gap-2 max-w-xl w-full transition-all hover:scale-[1.01]">
<a className="flex items-center gap-2 pl-4 pr-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform duration-500">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-800">CoFee</span>
</a>
<div className="flex items-center">
<a className="hidden sm:block px-5 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Log In</a>
<a className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-lg shadow-slate-900/20" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="bg-grid-slate absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Revolutionizing Collections
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                Fees without <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">friction.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                We replaced the chaos of spreadsheets and reminders with a system that just works. 
                <span className="text-slate-900 font-medium">Simple. Automatic. Secure.</span>
</p>

<div className="relative mx-auto max-w-4xl">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-2xl opacity-10 rounded-3xl"></div>
<div className="relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-200/50">
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">20Cr+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">Volume</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">3L+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">Transactions</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">100+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">Institutions</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">0%</div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">Headache</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200 bg-white overflow-hidden">
<div className="marquee-container">
<div className="marquee-content gap-6 px-4">

<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&amp;q=80"/>
</div>

<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&amp;q=80"/>
</div>
<div className="w-80 aspect-video rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 relative">
<div className="lg:sticky lg:top-32">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">The Origin Story</h2>
<div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
<p className="text-slate-500 text-sm font-medium uppercase tracking-widest">From KeyValue Labs</p>
</div>
</div>

<div className="lg:col-span-8 space-y-16">
<div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Born from frustration</h3>
<p className="text-xl text-slate-500 leading-relaxed font-light">
                        CoFee wasn't a boardroom idea. It was a response to a real problem we saw around us. Schools, gyms, and coaching centers were drowning in paperwork. The act of collecting a fee had become more complex than the service they were providing. We knew there had to be a cleaner way.
                    </p>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">The invisible layer</h3>
<p className="text-xl text-slate-500 leading-relaxed font-light">
                        Our goal is invisibility. The best payment system is one you don't notice. No chasing parents, no awkward "payment due" calls, no manual reconciliation at month-end. Just a smooth, background process that ensures liquidity for the business and convenience for the payer.
                    </p>
</div>
<div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-emerald-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<p className="text-2xl font-medium leading-normal relative z-10">
                        "We didn't just build a payment gateway. We built a relationship management tool that happens to process money."
                    </p>
<div className="mt-6 flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-white/20"></div>
<span className="text-sm font-medium">Founding Team, KeyValue</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-100/50">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-12 text-center">Brand DNA</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 bg-white rounded-3xl p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/30"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Simplicity First</h3>
<p className="text-slate-500 max-w-md">Our logo captures the infinite loop of recurring payments, stripped of all complexity. A perfect circle of trust.</p>
</div>
<div className="flex justify-end mt-8">

<svg className="w-64 h-32 stroke-slate-900 fill-none stroke-[1.5] group-hover:stroke-emerald-500 transition-colors" viewbox="0 0 200 100">
<path d="M20 50 Q 50 10 80 50 T 140 50 T 200 50"></path>
<circle className="fill-slate-900" cx="20" cy="50" r="4"></circle>
<circle className="fill-emerald-500" cx="200" cy="50" r="4"></circle>
</svg>
</div>
</div>
</div>

<div className="md:row-span-2 bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
<i className="w-6 h-6 text-emerald-400" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-semibold mb-2">Co + Fee</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Collect + Fee. <br/><br/>
                            It sounds like Coffee because it should be that essential to your morning routine. A daily driver for business health.
                        </p>
</div>
<div className="mt-8 font-mono text-xs text-slate-500">
                        // ESSENCE_ID: 001<br/>
                        // TYPE: RECURRING
                    </div>
</div>

<div className="bg-white rounded-3xl p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
<div className="text-center">
<div className="text-6xl font-light text-slate-200 group-hover:text-emerald-500 transition-colors duration-500 mb-4">Aa</div>
<p className="text-slate-900 font-medium">Inter Tight</p>
<p className="text-xs text-slate-400">Clean. Modern. Legible.</p>
</div>
</div>

<div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl p-10 text-white shadow-lg shadow-emerald-200 flex flex-col justify-center relative overflow-hidden group">
<i className="w-32 h-32 absolute -bottom-8 -right-8 text-white/10 group-hover:scale-110 transition-transform" data-lucide="shield-check"></i>
<h3 className="text-2xl font-semibold mb-2 relative z-10">Trust</h3>
<p className="text-emerald-100 text-sm relative z-10">The foundation of every transaction.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Fort Knox Grade <br/> Security.</h2>
<p className="text-slate-400 text-lg max-w-xl">We don't just move money; we protect it. Our infrastructure is built on the same rails that power global banking.</p>
</div>
<div className="flex gap-4">
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">SOC2_READY</div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">256_BIT_ENC</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-slate-400 mb-4 group-hover:text-emerald-400 transition-colors" data-lucide="lock"></i>
<h3 className="font-medium text-lg">Encrypted</h3>
<p className="text-sm text-slate-500 mt-1">End-to-end data protection.</p>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-slate-400 mb-4 group-hover:text-emerald-400 transition-colors" data-lucide="server"></i>
<h3 className="font-medium text-lg">Redundant</h3>
<p className="text-sm text-slate-500 mt-1">99.99% Uptime guarantee.</p>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-slate-400 mb-4 group-hover:text-emerald-400 transition-colors" data-lucide="eye-off"></i>
<h3 className="font-medium text-lg">Private</h3>
<p className="text-sm text-slate-500 mt-1">GDPR &amp; HIPAA Compliant.</p>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-slate-400 mb-4 group-hover:text-emerald-400 transition-colors" data-lucide="refresh-cw"></i>
<h3 className="font-medium text-lg">Real-time</h3>
<p className="text-sm text-slate-500 mt-1">Instant reconciliation.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-50 to-orange-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
<div className="w-full md:w-1/3 relative z-10">
<div className="aspect-square bg-slate-900 rounded-3xl flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="text-center">
<svg className="w-24 h-24 mx-auto mb-4 text-cyan-500" viewbox="0 0 100 100">
<path d="M50 10 L90 90 H10 Z" fill="none" stroke="currentColor" strokeWidth="6"></path>
<path d="M50 35 L75 80 H25 Z" fill="#F43F5E"></path>
</svg>
<div className="text-white font-bold text-2xl tracking-widest">KEY<span className="text-rose-500">VALUE</span></div>
</div>
</div>
</div>
<div className="w-full md:w-2/3 relative z-10">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Powerhouse</h3>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Built by Product Experts.</h2>
<p className="text-lg text-slate-500 mb-8 font-light">
                    CoFee is engineered by KeyValue Software Systems. With over 450 engineers and a decade of experience building for Series A &amp; B startups globally, we know scale.
                </p>
<div className="flex flex-wrap gap-8 border-t border-slate-100 pt-8">
<div>
<span className="block text-3xl font-bold text-slate-900">120+</span>
<span className="text-sm text-slate-400">Products Shipped</span>
</div>
<div>
<span className="block text-3xl font-bold text-slate-900">450+</span>
<span className="text-sm text-slate-400">Engineers</span>
</div>
<div>
<span className="block text-3xl font-bold text-slate-900">15+</span>
<span className="text-sm text-slate-400">Series B Wins</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-8">
                Ready to simplify?
            </h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-24">
<a className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:scale-105 transition-transform" href="#">Get Started Free</a>
<a className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors" href="#">Book a Demo</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 rounded-full bg-slate-900"></div>
<span className="font-bold text-slate-900">CoFee</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
<a className="hover:text-slate-900" href="#">LinkedIn</a>
</div>
<div className="text-sm text-slate-400 mt-4 md:mt-0">
                    © 2024 KeyValue Software Systems.
                </div>
</div>
</div>
</footer>


    </>
  );
}
