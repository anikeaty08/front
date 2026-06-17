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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform duration-300">
<span className="font-semibold tracking-tighter text-sm">SL</span>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap tracking-tight text-slate-900">SPORTLINK</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
<button className="text-slate-500 hover:text-slate-900 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors" type="button">Log in</button>
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-slate-900/10" type="button">Get Started</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-slate-900 rounded md:bg-transparent md:p-0 hover:text-indigo-600 transition-colors" href="#">Talent</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#">Clubs</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#">Market</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-500 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 transition-colors" href="#">Sponsors</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
<div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
<div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide">Live Transfer Window Open</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Connect within the global<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900">sports ecosystem.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                The unified platform for players, coaches, agents, and clubs. Manage careers, find opportunities, negotiate transfers, and secure sponsorships.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

<div className="w-full max-w-3xl bg-white p-2 rounded-2xl shadow-xl shadow-indigo-100/50 border border-slate-200 flex flex-col md:flex-row items-center gap-2">
<div className="relative w-full md:w-1/3 group">
<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" icon="lucide:search" width="18"></iconify-icon>
</div>
<input className="bg-transparent border-0 text-slate-900 text-sm rounded-lg focus:ring-0 block w-full ps-10 p-2.5 placeholder-slate-400" placeholder="Search player, club..." type="text"/>
<div className="hidden md:block absolute right-0 top-2 bottom-2 w-px bg-slate-100"></div>
</div>
<div className="relative w-full md:w-1/4 group">
<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" icon="lucide:trophy" width="18"></iconify-icon>
</div>
<select className="bg-transparent border-0 text-slate-900 text-sm rounded-lg focus:ring-0 block w-full ps-10 p-2.5 appearance-none cursor-pointer">
<option>Soccer</option>
<option>Handball</option>
<option>Basketball</option>
<option>Volleyball</option>
</select>
<div className="hidden md:block absolute right-0 top-2 bottom-2 w-px bg-slate-100"></div>
</div>
<div className="relative w-full md:w-1/4 group">
<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<select className="bg-transparent border-0 text-slate-900 text-sm rounded-lg focus:ring-0 block w-full ps-10 p-2.5 appearance-none cursor-pointer">
<option>Global</option>
<option>Europe</option>
<option>Americas</option>
<option>Asia</option>
</select>
</div>
<button className="w-full md:w-auto bg-slate-900 hover:bg-indigo-600 text-white font-medium rounded-xl text-sm px-6 py-3 transition-colors flex items-center justify-center gap-2">
                        Explore
                    </button>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400">
<span className="flex items-center gap-1"><iconify-icon className="text-slate-300" icon="lucide:check-circle" width="14"></iconify-icon> Verified Agents</span>
<span className="flex items-center gap-1"><iconify-icon className="text-slate-300" icon="lucide:check-circle" width="14"></iconify-icon> Direct Club Access</span>
<span className="flex items-center gap-1"><iconify-icon className="text-slate-300" icon="lucide:check-circle" width="14"></iconify-icon> Sponsorship Hub</span>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Featured Opportunities</h2>
<p className="text-slate-500 text-sm mt-1">Discover trending talent and club requirements.</p>
</div>
<div className="flex items-center gap-3 mt-4 md:mt-0">

<label className="flex items-center cursor-pointer" htmlFor="toggle">
<div className="relative">
<input className="sr-only peer" id="toggle" type="checkbox"/>
<div className="block bg-slate-200 w-10 h-6 rounded-full peer-checked:bg-slate-900 transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
</div>
<div className="ml-3 text-slate-600 text-sm font-medium">Free Agents Only</div>
</label>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors">View All</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-400" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="relative">
<img alt="Player" className="w-14 h-14 rounded-full object-cover border border-slate-100" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-4 h-4 rounded-full"></div>
</div>
<div>
<h3 className="font-semibold text-slate-900">Lucas M.</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Midfielder · Soccer</p>
<div className="flex items-center gap-1 mt-1">
<iconify-icon className="text-slate-400" icon="lucide:map-pin" width="12"></iconify-icon>
<span className="text-xs text-slate-500">Lyon, France</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-4">
<div className="bg-slate-50 rounded-lg p-2 text-center">
<div className="text-xs text-slate-400">Age</div>
<div className="font-medium text-slate-900">24</div>
</div>
<div className="bg-slate-50 rounded-lg p-2 text-center">
<div className="text-xs text-slate-400">Matches</div>
<div className="font-medium text-slate-900">142</div>
</div>
<div className="bg-slate-50 rounded-lg p-2 text-center">
<div className="text-xs text-slate-400">Goals</div>
<div className="font-medium text-slate-900">38</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-slate-100 pt-4">
<div>
<div className="text-xs text-slate-400 mb-0.5">Market Value</div>
<div className="text-sm font-semibold text-slate-900">€2.5M - €3M</div>
</div>
<button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-md font-medium hover:bg-slate-800 transition-colors">View Profile</button>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl border border-slate-200 p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 shadow-sm text-lg">
                            ⚽️
                        </div>
<span className="bg-indigo-100 text-indigo-700 text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide">Recruiting</span>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Striker Needed</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">FC Copenhagen is looking for an experienced striker for the upcoming season. Requires Champions League experience.</p>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:briefcase" width="14"></iconify-icon>
<span>Contract: 2 Years</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:coins" width="14"></iconify-icon>
<span>Budget: €800k / yr</span>
</div>
</div>
<button className="w-full text-center text-sm font-medium bg-white border border-slate-200 text-slate-700 py-2 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                        Apply / Contact Agent
                    </button>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 cursor-pointer relative">
<div className="flex items-start gap-4 mb-4">
<div className="relative">
<img alt="Coach" className="w-14 h-14 rounded-full object-cover border border-slate-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<h3 className="font-semibold text-slate-900">David Hansen</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Head Coach · Handball</p>
<div className="flex items-center gap-1 mt-1">
<iconify-icon className="text-amber-500" icon="lucide:award" width="12"></iconify-icon>
<span className="text-xs text-slate-500">UEFA Pro License</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium rounded border border-slate-100">Tactical</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium rounded border border-slate-100">Youth Dev</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-medium rounded border border-slate-100">Leadership</span>
</div>
<p className="text-xs text-slate-500 mb-4">Former national team coach looking for club challenges in DACH region.</p>
<div className="flex justify-between items-center border-t border-slate-100 pt-4">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-500">Available immediately</span>
</div>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Tailored for the industry</h2>
<p className="text-slate-500 max-w-xl mx-auto">Our platform provides specialized tools for every stakeholder in the modern sports landscape.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Players</h3>
<p className="text-sm text-slate-500 leading-relaxed">Build your digital CV, upload highlights, and get discovered by scouts and clubs worldwide.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Clubs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Scout talent with advanced filters, post vacancies, and manage your squad roster efficiently.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Agents</h3>
<p className="text-sm text-slate-500 leading-relaxed">Manage your client portfolio, negotiate directly on platform, and expand your network.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
<iconify-icon icon="lucide:banknote" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Sponsorships</h3>
<p className="text-sm text-slate-500 leading-relaxed">Clubs can create verified funding requests. Brands can find teams that match their values.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6">
<span className="text-xs font-medium text-indigo-400">For Clubs &amp; Academies</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Secure funding for your season.</h2>
<p className="text-slate-400 text-lg mb-8 font-light">
                    We've built a dedicated marketplace for clubs to request sponsorship. Create a proposal, set your budget, and connect with local and global brands looking for exposure.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-medium text-sm transition-colors">
                        Create Funding Request
                    </button>
<button className="text-slate-300 hover:text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
                        Browse Sponsors <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="md:w-1/2 w-full">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 rounded-xl relative">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold">HC</div>
<div>
<div className="text-sm font-semibold">Handball Club V.</div>
<div className="text-xs text-slate-400">Youth Academy Kit Sponsor</div>
</div>
</div>
<span className="text-emerald-400 text-xs bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">Active</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2 mb-2">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-400 mb-6">
<span>€7,500 raised</span>
<span>Goal: €10,000</span>
</div>
<div className="flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100" />
<div className="h-8 w-8 rounded-full ring-2 ring-slate-800 bg-slate-700 flex items-center justify-center text-xs text-slate-300">+4</div>
</img></img></div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="bg-slate-900 text-white w-6 h-6 flex items-center justify-center rounded-md">
<span className="font-semibold tracking-tighter text-xs">SL</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">SPORTLINK</span>
</a>
<p className="text-slate-500 text-sm max-w-xs mb-6">
                        Empowering the next generation of athletes and streamlining club management through technology.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Browse Talent</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Club Vacancies</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contract Templates</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Sponsorship Guide</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">API for Clubs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">© 2023 SportLink Inc. All rights reserved.</p>
<div className="flex space-x-6 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
