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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/90 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex flex-col -space-y-1 group" href="#">

<span className="text-2xl font-bold font-heading tracking-tight leading-none group-hover:opacity-80 transition-opacity">
<span className="text-red-600">Merry</span><span className="text-blue-600">Pools</span>
</span>
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">Central Florida</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

<button className="bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:outline-none focus:ring-red-100 font-semibold rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 group" type="button">
<span>Get a Quote</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-50 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-sm border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-slate-900 rounded md:bg-transparent md:p-0 font-semibold" href="#">Home</a>
</li>
<li className="">
<a className="block hover:text-red-600 md:p-0 transition-colors text-slate-500 rounded pt-2 pr-3 pb-2 pl-3" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 rounded hover:text-red-600 md:p-0 transition-colors" href="#locations">Locations</a>
</li>
<li className="">
<a className="block py-2 px-3 text-slate-500 rounded hover:text-red-600 md:p-0 transition-colors" href="#reviews">Reviews</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden bg-white pt-32 pb-20 relative">

<div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-red-50/60 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 hover:bg-blue-100 transition-colors cursor-default">
<iconify-icon className="text-blue-500" height="14" icon="lucide:palmtree" width="14"></iconify-icon>
                Serving Orlando, Winter Park &amp; Windermere
            </div>
<h1 className="sm:text-7xl leading-[1.1] text-5xl font-bold text-slate-900 tracking-tight font-heading max-w-4xl mr-auto mb-6 ml-auto">We keep your pool <br className="hidden md:block"/> <span className="text-red-600">Merry</span> &amp; <span className="text-blue-600">Bright</span>.</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-10 leading-relaxed">
                Enjoy a sparkling backyard paradise year-round. We handle the Florida heat, humidity, and hurricanes so you can just enjoy the water.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-base font-semibold rounded-full shadow-xl shadow-red-600/20 transition-all hover:-translate-y-0.5 border border-transparent flex items-center justify-center gap-2" href="#book">
                    Schedule Cleaning
                </a>
<a className="sm:w-auto hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-base font-semibold text-slate-700 bg-white w-full border-slate-200 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#services">
                    Our Service Plan
                </a>
</div>

<div className="relative p-2 rounded-3xl bg-white shadow-2xl border border-slate-100">
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[2.35/1] group">

<img alt="Crystal clear Florida swimming pool with patio" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8fd5d5f-891c-47c0-96c1-12442105e1d5_1600w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

<div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/20 hidden sm:flex items-center gap-4">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600">
<iconify-icon height="20" icon="lucide:droplets" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Water Quality</p>
<p className="text-sm font-heading font-bold text-slate-900">Crystal Clear</p>
</div>
<div className="h-8 w-px bg-slate-100 mx-2"></div>
<div className="text-left">
<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Temp</p>
<p className="text-sm font-heading font-bold text-slate-900">84°F</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-2 block">Comprehensive Care</span>
<h2 className="font-heading text-4xl font-bold text-slate-900 tracking-tight">Tailored for the Florida lifestyle.</h2>
</div>
<p className="text-slate-500 text-lg max-w-md">We understand the unique challenges of Central Florida pools, from heavy summer rains to falling oak leaves.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:calendar-check-2" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Weekly Maintenance</h3>
<p className="text-slate-500 leading-relaxed max-w-lg">Consistency is key in the Florida heat. Our weekly visits include skimming, vacuuming, brushing walls, and emptying skimmer baskets to prevent algae blooms before they start.</p>
</div>
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-50/50 to-transparent -skew-x-12 translate-x-10 group-hover:translate-x-0 transition-transform duration-500"></div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:test-tube-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Precision Chemistry</h3>
<p className="text-slate-500 text-sm leading-relaxed">We carefully balance pH, chlorine, and alkalinity. Perfect chemistry means sparkling water that's safe for the whole family.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:wind" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Storm Cleanup</h3>
<p className="text-slate-500 text-sm leading-relaxed">Florida storms can wreak havoc. We prioritize cleanup after hurricanes and heavy storms to get you swimming again fast.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:filter" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Filter Cleaning</h3>
<p className="text-slate-500 text-sm leading-relaxed">Regular deep cleaning of your cartridge or DE filters to ensure maximum flow and crystal clear water clarity.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:wrench" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Equipment Checks</h3>
<p className="text-slate-500 text-sm leading-relaxed">Proactive monitoring of your pump, motor, and salt systems to catch small issues before they become expensive repairs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative p-3 bg-slate-50 rounded-3xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
<div className="grid grid-cols-2 gap-3">

<div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Green dirty pool water" className="grayscale-[20%] w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0a6508d-b45e-4e64-8451-4b885326f503_1600w.png"/>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
<span className="text-white text-[10px] font-bold uppercase tracking-wider">Before</span>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Clean sparkling blue pool water" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fea977-9e91-43ca-a645-5437eafc1e41_1600w.png" style={{}}/>
<div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex gap-1.5 items-center">
<iconify-icon className="text-white" height="10" icon="lucide:check" width="10"></iconify-icon>
<span className="text-white text-[10px] font-bold uppercase tracking-wider">After</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wide mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Green-to-Clean Experts
                    </div>
<h2 className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">We turn the <span className="text-green-600 line-through decoration-green-300">swamp</span> into a <span className="text-blue-600">sanctuary</span>.</h2>
<p className="text-slate-500 mb-8 text-lg leading-relaxed">
                        Has the Florida humidity turned your pool green? Don't drain it. Our shock treatments and filtration processes can restore water clarity in as little as 48 hours.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon height="16" icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm">Safe &amp; Sanitary</h4>
<p className="text-slate-500 text-xs mt-1">We eliminate harmful bacteria and algae, making it safe for kids and pets.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-100 transition-colors">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
<iconify-icon height="16" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 text-sm">Sparkling Results</h4>
<p className="text-slate-500 text-xs mt-1">Our vacuuming removes even the finest debris from your pool floor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="locations">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Serving Central Florida</h2>
<p className="text-slate-400 text-lg">Local experts who know Orlando pools inside and out.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
<iconify-icon className="text-red-500 mb-3 group-hover:-translate-y-1 transition-transform" height="24" icon="lucide:map-pin" width="24"></iconify-icon>
<h3 className="font-bold text-white">Orlando</h3>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
<iconify-icon className="text-red-500 mb-3 group-hover:-translate-y-1 transition-transform" height="24" icon="lucide:map-pin" width="24"></iconify-icon>
<h3 className="font-bold text-white">Winter Park</h3>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
<iconify-icon className="text-red-500 mb-3 group-hover:-translate-y-1 transition-transform" height="24" icon="lucide:map-pin" width="24"></iconify-icon>
<h3 className="font-bold text-white">Windermere</h3>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
<iconify-icon className="text-red-500 mb-3 group-hover:-translate-y-1 transition-transform" height="24" icon="lucide:map-pin" width="24"></iconify-icon>
<h3 className="font-bold text-white">Lake Nona</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-heading text-4xl font-bold text-slate-900 mb-16 text-center tracking-tight">Neighborhood Favorites</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-0.5 text-yellow-400 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-loose">"With the oak trees in my backyard, keeping the pool clean was a nightmare until I found Merry Pools. Now it's always ready for a weekend swim."</p>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xs">RJ</div>
<div>
<p className="text-sm font-bold text-slate-900">Robert J.</p>
<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Winter Park, FL</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-0.5 text-yellow-400 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-loose">"Living in Lake Nona, we wanted a service that was digital-friendly. I love getting the email reports with photos after every visit."</p>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xs">AM</div>
<div>
<p className="text-sm font-bold text-slate-900">Amanda M.</p>
<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Lake Nona, FL</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-0.5 text-yellow-400 mb-4">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-loose">"After the last hurricane, they were out here within days to clean up the mess. Super reliable and friendly team."</p>
<div className="flex items-center gap-3 border-t border-slate-50 pt-4">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xs">DT</div>
<div>
<p className="text-sm font-bold text-slate-900">David T.</p>
<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Dr. Phillips, FL</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500"></div>
<div className="absolute inset-0 opacity-10 bg-[url(default)] bg-cover bg-center" style={{}}></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Enjoy your pool this weekend.</h2>
<p className="text-red-50 text-xl font-medium mb-10 max-w-2xl mx-auto">
                Let us handle the chemicals and cleaning. You just bring the floaties and sunscreen.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-red-600 text-base font-bold rounded-full hover:bg-red-50 transition-colors shadow-xl" href="#">
                    Get Free Quote
                </a>
<a className="px-8 py-4 bg-transparent border border-red-200 text-white text-base font-bold rounded-full hover:bg-red-700/50 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon height="18" icon="lucide:phone" width="18"></iconify-icon>
                    (407) 555-0123
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex flex-col -space-y-1 mb-4 group w-fit" href="#">
<span className="text-xl font-bold font-heading tracking-tight leading-none">
<span className="text-red-600">Merry</span><span className="text-blue-600">Pools</span>
</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Premium pool maintenance for Central Florida homes. Licensed &amp; Insured.
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xs mb-4 uppercase tracking-wider">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-red-600 transition-colors" href="#">Weekly Service</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Green to Clean</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Storm Recovery</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Filter Cleaning</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xs mb-4 uppercase tracking-wider">Areas</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-red-600 transition-colors" href="#">Orlando</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Winter Park</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Windermere</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Lake Nona</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 text-xs mb-4 uppercase tracking-wider">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon height="14" icon="lucide:mail" width="14"></iconify-icon> hello@merrypools.com</li>
<li className="flex items-center gap-2"><iconify-icon height="14" icon="lucide:phone" width="14"></iconify-icon> (407) 555-0123</li>
</ul>
<div className="flex gap-4 text-slate-400 mt-6">
<a className="hover:text-blue-600 transition-colors" href="#"><iconify-icon height="20" icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-red-600 transition-colors" href="#"><iconify-icon height="20" icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Merry Pools, LLC. All rights reserved.</p>
<div className="flex gap-1 items-center text-xs text-slate-400">
<span>Made in Florida</span>
<iconify-icon className="text-yellow-400 fill-current" height="12" icon="lucide:sun" width="12"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
