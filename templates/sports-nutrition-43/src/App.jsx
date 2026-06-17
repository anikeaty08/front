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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="glass-panel mx-auto max-w-7xl mt-4 rounded-full px-6 py-3 flex items-center justify-between mx-4 md:mx-auto">

<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-semibold tracking-tighter text-white group-hover:text-orange-500 transition-colors">EAT ROUTES</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#brands">Brands</a>
<a className="hover:text-white transition-colors" href="#about">Our Story</a>
<a className="hover:text-white transition-colors" href="#events">Events</a>
<a className="hover:text-white transition-colors" href="#awards">Recognition</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300" href="#contact">
                Partner with us
                <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">

<div className="absolute inset-0 hero-gradient pointer-events-none"></div>

<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium tracking-wide uppercase mb-4">
<span className="iconify" data-icon="lucide:trophy" data-strokeWidth="1.5" data-width="14"></span>
                Award Winning Distributor
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                Redefining <br/>
                Sports Nutrition.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                Celebrating nearly a decade of excellence in distribution. Connecting premium nutrition brands with the athletes who need them.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2" href="#brands">
                    Discover Brands
                </a>
<a className="px-8 py-3.5 glass-panel text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2" href="#contact">
                    Become a Reseller
                </a>
</div>
</div>

<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-20"></div>
<div className="mt-16 relative w-full max-w-6xl mx-auto rounded-t-3xl overflow-hidden opacity-80 border-t border-x border-neutral-800/50 shadow-2xl shadow-orange-900/20">
<img alt="Sports Nutrition Warehouse" className="w-full h-[400px] object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</header>

<section className="py-20 border-y border-neutral-900 bg-neutral-950/50" id="awards">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 mb-12 tracking-widest uppercase">Recognized for Excellence by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">

<div className="flex flex-col items-center gap-3 group">
<span className="iconify text-neutral-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:award" data-strokeWidth="1" data-width="40"></span>
<div className="text-center">
<h4 className="text-white font-medium tracking-tight">Financial Times</h4>
<span className="text-xs text-neutral-500">2x Award Winner</span>
</div>
</div>

<div className="hidden md:block w-px h-12 bg-neutral-800"></div>

<div className="flex flex-col items-center gap-3 group">
<span className="iconify text-neutral-300 group-hover:text-orange-500 transition-colors" data-icon="lucide:medal" data-strokeWidth="1" data-width="40"></span>
<div className="text-center">
<h4 className="text-white font-medium tracking-tight">Globe &amp; Mail</h4>
<span className="text-xs text-neutral-500">3x Award Winner</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Built on Performance.</h2>
<p className="text-xl text-neutral-400 max-w-2xl font-light">As we approach our 10-year mark, we reflect on the milestones that have defined our journey from a local distributor to an award-winning industry leader.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-black z-10"></div>
<img alt="Runner track" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-between p-10">
<span className="iconify text-orange-500" data-icon="lucide:infinity" data-strokeWidth="1.5" data-width="32"></span>
<div>
<h3 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-2">8+ Years</h3>
<p className="text-neutral-400 text-lg">Of unwavering dedication to the sports nutrition market.</p>
</div>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-10 flex flex-col justify-center items-center text-center hover:bg-neutral-800/50 transition-colors duration-300">
<div className="mb-6 relative">
<div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full"></div>
<span className="iconify relative z-10 text-white" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="48"></span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Fastest Growing</h3>
<p className="text-sm text-neutral-400">Consistently ranked among Canada's top growing companies.</p>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-white text-black p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="1.5" data-width="32"></span>
<span className="iconify rotate-45" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Seamless Logistics</h3>
<p className="text-neutral-600 text-sm">State-of-the-art warehousing ensuring product integrity.</p>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20 rotate-12 scale-125">

<div className="text-6xl font-bold text-transparent text-stroke-1">BRAND</div>
<div className="text-6xl font-bold text-transparent text-stroke-1">PROTEIN</div>
<div className="text-6xl font-bold text-transparent text-stroke-1">FUEL</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
<div className="relative z-20 h-full flex flex-col justify-end p-10">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Curated Excellence</h3>
<p className="text-neutral-400 max-w-md">We don't just distribute; we partner with brands that are changing the game.</p>
<a className="mt-6 text-orange-500 flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all" href="#brands">
                            View Brand Portfolio <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-neutral-800 overflow-hidden" id="brands">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Our Partners</h2>
<p className="text-neutral-400 mt-2">Fueling athletes with the world's best.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 md:px-[max(24px,calc((100vw-80rem)/2))] pb-8">

<div className="min-w-[280px] h-[320px] bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center gap-6 group hover:border-orange-500/50 transition-colors">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="32"></span>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold text-white">PowerSupps</h3>
<p className="text-sm text-neutral-500 mt-2">Performance Energy</p>
</div>
</div>

<div className="min-w-[280px] h-[320px] bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center gap-6 group hover:border-orange-500/50 transition-colors">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:dumbbell" data-width="32"></span>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold text-white">IronWhey</h3>
<p className="text-sm text-neutral-500 mt-2">Premium Protein</p>
</div>
</div>

<div className="min-w-[280px] h-[320px] bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center gap-6 group hover:border-orange-500/50 transition-colors">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:vegan" data-width="32"></span>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold text-white">GreenFuel</h3>
<p className="text-sm text-neutral-500 mt-2">Plant Based</p>
</div>
</div>

<div className="min-w-[280px] h-[320px] bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center gap-6 group hover:border-orange-500/50 transition-colors">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:activity" data-width="32"></span>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold text-white">EndureLabs</h3>
<p className="text-sm text-neutral-500 mt-2">Recovery Science</p>
</div>
</div>

<div className="min-w-[280px] h-[320px] bg-black rounded-2xl border border-neutral-800 p-8 flex flex-col items-center justify-center gap-6 group hover:border-orange-500/50 transition-colors">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:flame" data-width="32"></span>
</div>
<div className="text-center">
<h3 className="text-xl font-semibold text-white">BurnTech</h3>
<p className="text-sm text-neutral-500 mt-2">Metabolic Support</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4" id="events">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-4">In The Field.</h2>
<p className="text-xl text-neutral-400 font-light">From expos to local meets, we are where the action is.</p>
</div>
<a className="text-orange-500 flex items-center gap-2 font-medium hover:text-white transition-colors" href="#">
                    View all events <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative aspect-video md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Expo Booth" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8">
<span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">EXPO 2023</span>
<h3 className="text-2xl font-semibold text-white">Toronto Pro Show</h3>
</div>
</div>
<div className="grid grid-rows-2 gap-8 h-[500px]">

<div className="group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Gym Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-semibold text-white">Vancouver FitWeek</h3>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-semibold text-white">Annual Brand Summit</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 pt-24 pb-12 border-t border-neutral-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 block" href="#">EAT ROUTES</a>
<h3 className="text-4xl font-medium tracking-tight text-white mb-8">Ready to elevate your inventory?</h3>
<div className="flex gap-4">
<a className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300" href="mailto:info@eatroutes.com">
                            Contact Sales
                        </a>
<a className="px-6 py-3 border border-neutral-700 text-white rounded-full font-semibold hover:bg-neutral-800 transition-all duration-300" href="#">
                            Download Catalog
                        </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-4 text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Awards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">Social</h4>
<ul className="space-y-4 text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Eat Routes Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
