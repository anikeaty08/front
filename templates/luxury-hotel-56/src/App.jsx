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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center text-white text-xs font-semibold">S</div>
                THE SINGULAR
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">The Rooms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Dining</a>
<a className="hover:text-slate-900 transition-colors" href="#">Wellness</a>
<a className="text-slate-900" href="#">The Antonio Suite</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm" href="#">
                    Book Stay
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Most Requested: The Grumpy Package
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Luxury, redefined by <br/> <span className="text-gradient">disapproval.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
                    Choose from 100 uniquely themed rooms. But you’re here for him. Experience the silence, the judgment, and the unparalleled stoicism of the Antonio Suite.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                        Book The Antonio
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition-all">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Him Code
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-slate-400 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
</div>
<p>4.9/5 from 2,000+ developers</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[4/5] lg:aspect-square">


<img alt="Antonio, the grumpy mascot" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-slate-900">Antonio C.</h3>
<p className="text-xs text-slate-500">Chief Disapproval Officer</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:code-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-[10px] uppercase tracking-wider font-medium text-slate-400">Mood</span>
<div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[15%] bg-slate-800 rounded-full"></div>
</div>
<span className="text-[10px] font-medium text-slate-900">Grumpy</span>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
<div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 p-2 flex flex-col md:flex-row gap-2">
<div className="flex-1 px-4 py-3 hover:bg-slate-50 rounded-lg transition cursor-pointer group">
<label className="block text-xs font-medium text-slate-500 mb-1 group-hover:text-slate-700">Check-in</label>
<div className="flex items-center gap-2 text-slate-900 text-sm font-medium">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear"></iconify-icon>
<span>Oct 24, 2023</span>
</div>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 px-4 py-3 hover:bg-slate-50 rounded-lg transition cursor-pointer group">
<label className="block text-xs font-medium text-slate-500 mb-1 group-hover:text-slate-700">Check-out</label>
<div className="flex items-center gap-2 text-slate-900 text-sm font-medium">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear"></iconify-icon>
<span>Oct 28, 2023</span>
</div>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 px-4 py-3 hover:bg-slate-50 rounded-lg transition cursor-pointer group">
<label className="block text-xs font-medium text-slate-500 mb-1 group-hover:text-slate-700">Theme</label>
<div className="flex items-center justify-between text-slate-900 text-sm font-medium">
<span className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:mask-happly-linear"></iconify-icon>
                        The Antonio
                    </span>
<iconify-icon className="text-slate-400 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="bg-slate-900 text-white rounded-lg px-8 py-3 text-sm font-medium hover:bg-slate-800 transition shadow-sm">
                Search
            </button>
</div>
</div>

<section className="py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">The Grumpy Standard.</h2>
<p className="text-slate-500 max-w-lg">Why settle for a smile when you can have brutally honest code reviews and a room temperature that matches his demeanor?</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View full itinerary <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-md transition duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:muted-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Zero Small Talk</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Staff are trained to avoid eye contact. "How is your day?" is strictly prohibited. Nodding is the only accepted currency.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-md transition duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:monitor-camera-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Live Code Reviews</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Wake up to Antonio reviewing your PRs on the bedroom ceiling projector. He won't merge, but he will comment.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-md transition duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:coffee-linear" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Dark Mode Coffee</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Coffee served blacker than a terminal background. No sugar, no milk, no joy. Just pure caffeine and regrets.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12">Not feeling grumpy? <br/><span className="text-slate-400">Try our other 99 themes.</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[4/5] bg-slate-200">
<img alt="Minimalist room" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium text-white/80 mb-1">Theme #04</p>
<h3 className="text-lg font-medium tracking-tight">The Minimalist</h3>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[4/5] bg-slate-200">
<img alt="Industrial room" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium text-white/80 mb-1">Theme #12</p>
<h3 className="text-lg font-medium tracking-tight">Industrial Loft</h3>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer ring-2 ring-slate-900 ring-offset-2">
<div className="aspect-[4/5] bg-slate-200 relative">

<img alt="Cyberpunk room" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Popular</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium text-white/80 mb-1">Theme #01</p>
<h3 className="text-lg font-medium tracking-tight">The Antonio Suite</h3>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden cursor-pointer">
<div className="aspect-[4/5] bg-slate-200">
<img alt="Nature room" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium text-white/80 mb-1">Theme #88</p>
<h3 className="text-lg font-medium tracking-tight">Botanical Zen</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Customize your misery</h2>
<p className="text-slate-500 mt-2 text-sm">Fine-tune the Antonio Experience before you arrive.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">

<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-slate-900">Sarcasm Level</h4>
<p className="text-xs text-slate-500">Adjust the frequency of passive-aggressive comments.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
<hr className="border-slate-100"/>

<div>
<div className="flex items-center justify-between mb-4">
<h4 className="text-sm font-medium text-slate-900">Grumpiness Intensity</h4>
<span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">85%</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="85"/>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium uppercase tracking-wide">
<span>Mildly Annoyed</span>
<span>Full Antonio</span>
</div>
</div>
<hr className="border-slate-100"/>

<div className="space-y-3">
<h4 className="text-sm font-medium text-slate-900 mb-2">Optional Add-ons</h4>
<label className="flex items-center space-x-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-slate-300 rounded checked:bg-slate-900 checked:border-slate-900 transition" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Disable Wi-Fi randomly (Realism Mode)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 appearance-none border border-slate-300 rounded checked:bg-slate-900 checked:border-slate-900 transition" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Include "It works on my machine" t-shirt</span>
</label>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-medium tracking-tight flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center text-white text-xs font-semibold">S</div>
                        THE SINGULAR
                    </a>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        The world's first multi-themed luxury hotel. Home of the legendary Antonio Suite. We promise nothing but excellence and slight judgment.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">The Hotel</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Themes</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">The Mascot</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Code of Conduct</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 The Singular Hotel. No bugs were fixed in the making of this site.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
