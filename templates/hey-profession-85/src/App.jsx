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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">Z</div>
<div className="flex flex-col leading-tight">
<span className="font-semibold tracking-tight text-slate-900">National Zakat</span>
<span className="text-sm text-slate-500 font-medium">Foundation</span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-red-600 flex items-center gap-1" href="#">Calculate <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-slate-600 hover:text-red-600 flex items-center gap-1" href="#">Programs <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-slate-600 hover:text-red-600 flex items-center gap-1" href="#">About Us <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
</nav>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="calculator"></i>
</button>
<a className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium border border-slate-300 rounded-full text-slate-700 hover:border-red-600 hover:text-red-600 transition-all" href="#">Receive Zakat</a>
<a className="px-5 py-2.5 text-sm font-medium bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all" href="#">Donate Zakat</a>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative w-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-1 p-1 bg-white">

<div className="lg:col-span-8 relative group overflow-hidden rounded-2xl bg-slate-900">
<img alt="Evacuee Support" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-200 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
                        Emergency Relief
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-4 leading-tight">
                        Evacuee Support
                    </h1>
<p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
                        Help evacuees transition into a new home with dignity by providing critical essentials and community support.
                    </p>
<button className="px-8 py-3.5 bg-red-600 text-white text-base font-medium rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 flex items-center gap-2">
                        Donate Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="lg:col-span-4 grid grid-rows-3 gap-1">

<div className="relative group overflow-hidden rounded-2xl bg-teal-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
<i className="w-10 h-10 text-white mb-2" data-lucide="snowflake"></i>
<h3 className="text-2xl font-semibold text-white tracking-tight">Share the Warmth</h3>
<p className="text-white/80 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Providing winter essentials.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-emerald-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
<i className="w-10 h-10 text-white mb-2" data-lucide="utensils"></i>
<h3 className="text-2xl font-semibold text-white tracking-tight">Feed Neighbours</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-amber-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
<i className="w-10 h-10 text-white mb-2" data-lucide="home"></i>
<h3 className="text-2xl font-semibold text-white tracking-tight">Housing Support</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-red-600 font-semibold tracking-wide uppercase text-sm mb-3">You Have Made a Difference</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Since 2013, You've Supported</h3>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-slate-100 pb-16">
<div className="flex flex-col items-center text-center group">
<div className="p-4 rounded-2xl bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="baby"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Single Mothers</h4>
<p className="text-sm text-slate-500 leading-relaxed">Providing hope and stability to mothers.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="p-4 rounded-2xl bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="globe-2"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Refugees</h4>
<p className="text-sm text-slate-500 leading-relaxed">Creating community and belonging.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="p-4 rounded-2xl bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="sparkles"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-1">New Converts</h4>
<div className="w-full h-px bg-slate-100 my-4 lg:hidden"></div>
<p className="text-sm text-slate-500 leading-relaxed">Helping new hearts find belonging.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="p-4 rounded-2xl bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="user-plus"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-1">Seniors</h4>
<p className="text-sm text-slate-500 leading-relaxed">Showing up for our elderly neighbors.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="p-4 rounded-2xl bg-red-50 text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="accessibility"></i>
</div>
<h4 className="font-semibold text-slate-900 mb-1">People with Disabilities</h4>
<p className="text-sm text-slate-500 leading-relaxed">Empowering independence.</p>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 pt-16 text-center">
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Impact of Your Local Giving</h3>
<p className="text-slate-400 text-sm font-medium tracking-wide uppercase mb-12">Since 2013</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="p-4">
<span className="block text-4xl md:text-5xl font-semibold text-red-600 tracking-tight mb-2">+81,239</span>
<span className="text-base font-medium text-slate-600">Recipients</span>
</div>
<div className="p-4">
<span className="block text-4xl md:text-5xl font-semibold text-red-600 tracking-tight mb-2">+27,616</span>
<span className="text-base font-medium text-slate-600">Women</span>
</div>
<div className="p-4">
<span className="block text-4xl md:text-5xl font-semibold text-red-600 tracking-tight mb-2">+30,155</span>
<span className="text-base font-medium text-slate-600">Children</span>
</div>
<div className="p-4">
<span className="block text-4xl md:text-5xl font-semibold text-red-600 tracking-tight mb-2">+2,617</span>
<span className="text-base font-medium text-slate-600">Orphans</span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-10 tracking-tight">Our Campaigns</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-96">

<a className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300" href="#">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold text-white mb-1">Share The Warmth</h3>
<div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-300"></div>
</div>
</a>

<a className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300" href="#">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold text-white mb-1">Feed Our Neighbours</h3>
<div className="h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
</div>
</a>

<a className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300" href="#">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold text-white mb-1">House Our Neighbours</h3>
<div className="h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
</div>
</a>

<a className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300" href="#">
<img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-semibold text-white mb-1">Evacuee Support</h3>
<div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-16 tracking-tight">How We Support</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-yellow-400 hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-2xl font-bold text-yellow-400">NEW ROOTS</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-slate-600 text-base leading-relaxed mb-6">Supporting newcomers in their resettlement journey, providing financial aid, resources and guidance.</p>
<div className="mt-auto">
<button className="w-full py-3 rounded-lg border border-slate-200 font-semibold text-slate-700 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-black transition-all">Donate Now</button>
</div>
</div>
</div>

<div className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-500 hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-2xl font-bold text-emerald-400">MEDICAL RELIEF</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-slate-600 text-base leading-relaxed mb-6">Offering essential health support, including dental care and mental health support to ensure families can access critical services.</p>
<div className="mt-auto">
<button className="w-full py-3 rounded-lg border border-slate-200 font-semibold text-slate-700 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all">Provide Relief</button>
</div>
</div>
</div>

<div className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-2xl font-bold text-red-400">LIFE ESSENTIALS</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<p className="text-slate-600 text-base leading-relaxed mb-6">Delivering vital items like furniture, and other basics to help families create safe, comfortable homes.</p>
<div className="mt-auto">
<button className="w-full py-3 rounded-lg border border-slate-200 font-semibold text-slate-700 group-hover:bg-red-500 group-hover:border-red-500 group-hover:text-white transition-all">Give Now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white text-center">
<div className="max-w-4xl mx-auto px-6">
<div className="inline-flex items-center justify-center p-3 bg-red-800 rounded-full mb-6">
<span className="font-bold text-xl">Z</span>
</div>
<h2 className="text-red-200 font-medium mb-2 uppercase tracking-widest text-sm">Your Trusted</h2>
<h3 className="text-4xl md:text-5xl font-semibold mb-16 flex items-center justify-center gap-3">
                    Zakat Partner <i className="w-8 h-8 text-white" data-lucide="check-circle-2"></i>
</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full border-2 border-red-400 p-1 mb-4 group-hover:border-white transition-colors">
<img className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<h4 className="font-semibold text-lg">Sh. Abdullah</h4>
<span className="text-red-200 text-sm">Yousri</span>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full border-2 border-red-400 p-1 mb-4 group-hover:border-white transition-colors">
<img className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://randomuser.me/api/portraits/men/44.jpg"/>
</div>
<h4 className="font-semibold text-lg">Sh. Hacene</h4>
<span className="text-red-200 text-sm">Chebbani</span>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full border-2 border-red-400 p-1 mb-4 group-hover:border-white transition-colors">
<img className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://randomuser.me/api/portraits/men/85.jpg"/>
</div>
<h4 className="font-semibold text-lg">Sh. Hosam</h4>
<span className="text-red-200 text-sm">Helal</span>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full border-2 border-red-400 p-1 mb-4 group-hover:border-white transition-colors">
<img className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://randomuser.me/api/portraits/men/22.jpg"/>
</div>
<h4 className="font-semibold text-lg">Sh. Imran</h4>
<span className="text-red-200 text-sm">Ally</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">

<div className="absolute top-10 left-0 w-full text-center pointer-events-none select-none overflow-hidden">
<span className="text-[12rem] md:text-[18rem] font-bold text-outline opacity-30 whitespace-nowrap">COMMUNITY</span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-red-600 font-semibold tracking-wide uppercase text-sm mb-2 block">Your Trusted</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Community Builder</h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        At National Zakat Foundation, our primary focus is local Zakat. We commit all our resources to managing your contributions in accordance with the Quran and Sunnah.
                    </p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        As one of the only Muslim charities that independently oversee the entire Zakat process, you can trust us to handle your Zakat with precision and integrity.
                    </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">Learn More</button>
<div className="bg-white px-4 py-2 rounded-lg border border-slate-200 flex items-center gap-2 shadow-sm">
<div className="h-6 w-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold">Z</div>
<span className="text-sm font-semibold text-slate-800">National Zakat Foundation</span>
</div>
</div>
</div>
<div className="relative h-[500px]">
<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-slate-200 rounded-3xl overflow-hidden shadow-2xl rotate-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-white p-2 rounded-3xl shadow-2xl -rotate-2">
<img className="w-full h-full object-cover rounded-2xl" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 mb-16 text-white flex flex-col md:flex-row md:items-end justify-between relative overflow-visible">
<div className="relative z-10 mb-8 md:mb-0">
<h4 className="text-red-100 uppercase tracking-widest text-sm font-semibold mb-2">End-To-End</h4>
<h2 className="text-3xl md:text-4xl font-bold">ZAKAT SOLUTIONS</h2>
</div>
<p className="max-w-md text-red-100 text-sm relative z-10">
                        A holistic approach to Zakat that ensures your giving makes a powerful, measurable impact across Canada.
                    </p>
</div>

<div className="grid md:grid-cols-3 gap-6 -mt-24 px-4">

<div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 pt-12 relative">
<div className="absolute -top-6 left-8 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-4 border-white">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Education</h3>
<p className="text-slate-600 text-base leading-relaxed mb-6">We empower donors with in-depth Zakat knowledge through workshops and resources.</p>
<a className="text-red-600 text-sm font-semibold hover:underline decoration-2 underline-offset-4" href="#">LEARN MORE</a>
</div>

<div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 pt-12 relative">
<div className="absolute -top-6 left-8 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-4 border-white">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Collection</h3>
<p className="text-slate-600 text-base leading-relaxed mb-6">Our secure and streamlined collection process enables individuals to give effortlessly.</p>
<a className="text-red-600 text-sm font-semibold hover:underline decoration-2 underline-offset-4" href="#">DONATE</a>
</div>

<div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8 pt-12 relative">
<div className="absolute -top-6 left-8 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-4 border-white">
<i className="w-6 h-6" data-lucide="share-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Distribution</h3>
<p className="text-slate-600 text-base leading-relaxed mb-6">We strategically allocate Zakat funds to those in need across Canada for maximum impact.</p>
<a className="text-red-600 text-sm font-semibold hover:underline decoration-2 underline-offset-4" href="#">IMPACT</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 relative h-[500px]">
<div className="absolute top-0 left-0 w-2/3 bg-white p-4 shadow-xl rounded-2xl z-20">
<img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="pt-4">
<span className="text-3xl font-bold text-red-600">54,000+</span>
<p className="text-sm text-slate-500">individuals supported</p>
</div>
</div>
<div className="absolute bottom-0 right-0 w-2/3 bg-white p-4 shadow-xl rounded-2xl z-10">
<img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="pt-4 text-right">
<span className="text-3xl font-bold text-red-600">256+</span>
<p className="text-sm text-slate-500">Cities impacted</p>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-slate-200 -z-0 opacity-50">
                        7
                    </div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-4xl font-semibold text-slate-900 mb-2">Power of</h2>
<h2 className="text-4xl font-semibold text-red-600 mb-6">Local Giving</h2>
<span className="text-sm font-medium text-slate-400 mb-8 block uppercase tracking-wide">Since 2023</span>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Over the past 10+ years, every dollar of local giving has fueled tangible, lasting change in Canadian Muslim communities. By addressing immediate needs and building pathways to self-sufficiency.
                    </p>
<button className="px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">Give Now</button>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900 text-white">
<div className="absolute inset-0 overflow-hidden">
<img className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">Help Starts Here</h2>
<p className="text-slate-300 text-lg leading-relaxed">
                         At National Zakat Foundation, we assist Canadian Muslims who are experiencing financial hardship and struggling to meet their essential needs. Our process is simple and confidential.
                     </p>
<button className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">Apply</button>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white text-slate-900 p-8 rounded-xl shadow-lg">
<i className="w-10 h-10 text-red-600 mb-4" data-lucide="clipboard-list"></i>
<h3 className="text-xl font-semibold mb-2">1. Submit Application</h3>
<p className="text-slate-600 text-sm leading-relaxed">An individual undergoing financial hardship contacts National Zakat Foundation by applying for Zakat.</p>
</div>
<div className="bg-white text-slate-900 p-8 rounded-xl shadow-lg">
<i className="w-10 h-10 text-red-600 mb-4" data-lucide="file-check"></i>
<h3 className="text-xl font-semibold mb-2">2. Application Assessment</h3>
<p className="text-slate-600 text-sm leading-relaxed">Intake team requests the client for identification, financial information and other relevant documents.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<span className="text-red-600 font-semibold tracking-wide uppercase text-sm">Your Impact</span>
<h2 className="text-3xl font-semibold text-slate-900">Their Words</h2>
</div>
<div className="flex overflow-hidden gap-6 px-6 pb-8 max-w-7xl mx-auto">

<div className="flex-none w-80 md:w-96 bg-slate-50 p-6 rounded-xl border border-slate-100">
<p className="text-slate-600 text-sm italic mb-4">"Our situation is about to get better as there is a new job I am getting ready for... Thank you."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Najwa</p>
<p className="text-xs text-red-600">Gaza Evacuee Supported by You</p>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 bg-slate-50 p-6 rounded-xl border border-slate-100">
<p className="text-slate-600 text-sm italic mb-4">"May Allah SWT grant you all your wishes in this world and the next for helping me in my most desperate situation."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Noora</p>
<p className="text-xs text-red-600">Single Mother</p>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 bg-slate-50 p-6 rounded-xl border border-slate-100">
<p className="text-slate-600 text-sm italic mb-4">"Thank you so much for supporting me, I received the check yesterday. May Allah reward everyone who helped."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Saba &amp; Sameer</p>
<p className="text-xs text-red-600">Refugee Couple</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<span className="text-red-600 font-semibold uppercase text-xs mb-6 block">Community Affiliates</span>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold text-slate-400">OBAT<span className="text-red-500">CANADA</span></div>
<div className="text-xl font-bold text-slate-400">Human<span className="text-green-500">Concern</span></div>
<div className="text-xl font-bold text-slate-400">Islamic<span className="text-blue-500">Relief</span></div>
<div className="text-xl font-bold text-slate-400">Penny<span className="text-yellow-500">Appeal</span></div>
<div className="text-xl font-bold text-slate-400">IDRF</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">Z</div>
<span className="font-bold text-slate-900">National Zakat Foundation</span>
</div>
<p className="text-slate-500 text-sm mb-6 max-w-xs">
                    115 Matheson Blvd W Unit 214, Mississauga, ON L5R 3L1 Canada
                </p>
<div className="mb-6">
<h5 className="text-slate-900 font-semibold mb-2">Join our newsletter</h5>
<div className="flex gap-2">
<input className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Email*" type="email"/>
<button className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-red-700">Subscribe</button>
</div>
</div>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:bg-yellow-500" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:bg-yellow-500" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:bg-yellow-500" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:bg-yellow-500" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">About NZF</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600" href="#">Who We Are</a></li>
<li><a className="hover:text-red-600" href="#">Join Us</a></li>
<li><a className="hover:text-red-600" href="#">Our Impact</a></li>
<li><a className="hover:text-red-600" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Zakat Guide</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600" href="#">What is Zakat</a></li>
<li><a className="hover:text-red-600" href="#">Zakat Papers</a></li>
<li><a className="hover:text-red-600" href="#">Zakat Calculator</a></li>
<li><a className="hover:text-red-600" href="#">Knowledge Bank</a></li>
<li><a className="hover:text-red-600" href="#">Ask an Expert</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Receive Zakat</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600" href="#">Apply for Zakat</a></li>
<li><a className="hover:text-red-600" href="#">Programs &amp; Services</a></li>
<li><a className="hover:text-red-600" href="#">Zakat Policies</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Stay Updated</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600" href="#">Blog</a></li>
<li><a className="hover:text-red-600" href="#">Events</a></li>
<li><a className="hover:text-red-600" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-sm text-slate-500">
<i className="w-4 h-4" data-lucide="globe"></i> <span>EN</span>
</div>
<p className="text-xs text-slate-400 text-center">
                 Copyright © 2023 National Zakat Foundation Canada | Registered Charity No. 839912599RR0001
             </p>
</div>
</footer>


    </>
  );
}
