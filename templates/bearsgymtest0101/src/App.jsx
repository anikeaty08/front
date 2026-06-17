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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">

<span className="text-xl font-semibold tracking-tight text-white">BEARS GYM</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#prices">Membership</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#about">About &amp; Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Join Now
            </a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-900/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Open Daily in Aonang, Krabi
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Unleash Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Inner Beast.</span>
</h1>
<p className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-8">
                    The premier iron paradise in Krabi. Old school lifting meets modern equipment. Stop making excuses and start bending bars.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-gradient-to-b from-amber-400 to-amber-600 text-zinc-950 px-8 py-3.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity">
                        View Memberships
                    </button>
<button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin"></i>
                        Find Location
                    </button>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center relative">
<div className="relative w-64 md:w-96 aspect-square">
<div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full"></div>

<img alt="Bears Gym Logo Shield" className="relative w-full h-full object-contain drop-shadow-2xl" src="https://i.imgur.com/k6lPqZ0.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
<i data-lucide="dumbbell"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Heavy Iron</h3>
<p className="text-lg text-zinc-400">Professional dumbbells up to 50kg, squat racks, and deadlift platforms for serious lifters.</p>
</div>
<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
<i data-lucide="snowflake"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Fully Air-Conditioned</h3>
<p className="text-lg text-zinc-400">Escape the Krabi heat. Train in a cool, climate-controlled environment designed for performance.</p>
</div>
<div className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
<i data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Supplements Bar</h3>
<p className="text-lg text-zinc-400">Pre-workout, protein shakes, and amino acids available at the counter to fuel your recovery.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="prices">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Simple, Transparent Pricing</h2>
<p className="text-xl text-zinc-400">No hidden fees. Just pay and train.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Day Pass</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">200฿</span>
<span className="text-zinc-500">/day</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Full gym access</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Locker usage</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Free WiFi</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Select</button>
</div>

<div className="p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 relative flex flex-col shadow-2xl shadow-amber-900/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-600 text-white text-xs font-medium rounded-full tracking-wide uppercase">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Monthly</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">1,200฿</span>
<span className="text-zinc-500">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Unlimited access</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Free induction session</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Water refill included</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Bring a friend (1x)</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors">Choose Monthly</button>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Weekly</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">800฿</span>
<span className="text-zinc-500">/week</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>7 days unlimited</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Perfect for tourists</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Towel service</span>
</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all">Select</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Forged in Iron,<br/>Driven by Result.</h2>
<div className="space-y-6 text-lg text-zinc-400">
<p>
                            Located in the heart of Aonang, Bears Gym isn't your average fitness center. We are a community of dedicated individuals striving for strength.
                        </p>
<p>
                            Whether you are a local resident or visiting Krabi for a holiday, our doors are open. We combine the gritty, hardworking atmosphere of a traditional bodybuilding gym with the comfort of modern amenities.
                        </p>
</div>
<div className="mt-12 pt-8 border-t border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<i data-lucide="user"></i>
</div>
<div>
<p className="text-base text-white font-medium">Head Coach</p>
<p className="text-sm text-zinc-500">Tony "The Bear" Jaa</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded-3xl p-8 lg:p-12 border border-white/5">
<h3 className="text-2xl font-medium text-white tracking-tight mb-8">Visit Us</h3>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-amber-500" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-white font-medium mb-1">Address</p>
<p className="text-lg text-zinc-400">420 Aonang Road, Muang Krabi<br/>Thailand, 81180</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-amber-500" data-lucide="clock"></i>
</div>
<div>
<p className="text-white font-medium mb-1">Opening Hours</p>
<p className="text-lg text-zinc-400">Monday - Saturday: 07:00 - 22:00</p>
<p className="text-lg text-zinc-400">Sunday: 09:00 - 20:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-6 h-6 text-amber-500" data-lucide="phone"></i>
</div>
<div>
<p className="text-white font-medium mb-1">Contact</p>
<p className="text-lg text-zinc-400">+66 81 234 5678</p>
<p className="text-lg text-zinc-400">info@bearsgymkrabi.com</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="w-full py-4 rounded-xl bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">
                            Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-zinc-500 text-sm">© 2024 Bears Gym Aonang. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>


    </>
  );
}
