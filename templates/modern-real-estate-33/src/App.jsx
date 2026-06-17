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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5"></span>
</div>
<span className="text-lg font-medium tracking-tight group-hover:opacity-80 transition-opacity">maple.realty show</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#episodes">Episodes</a>
<a className="hover:text-zinc-900 transition-colors" href="#shorts">Market Shorts</a>
<a className="hover:text-zinc-900 transition-colors" href="#brokerage">Brokerage</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
<span>Log in</span>
</button>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-200">
                    Subscribe
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl fade-enter" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">New Episode Live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-zinc-900 mb-6">
                    The blueprint for <br/> <span className="text-zinc-400">modern real estate.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 max-w-xl font-light">
                    Join industry leaders as we deconstruct market trends, brokerage strategies, and the architecture of selling luxury properties.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-zinc-800 transition-transform active:scale-95 shadow-lg shadow-zinc-200">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5"></span>
<span>Watch Latest Episode</span>
</button>
<button className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium border border-zinc-200 hover:bg-zinc-50 text-zinc-600 transition-colors">
<span className="iconify" data-icon="lucide:mic" data-strokeWidth="1.5"></span>
<span>Listen on Spotify</span>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-24 fade-enter" style={{animationDelay: '0.3s'}}>
<div className="border-y border-zinc-100 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">$2.5B+</div>
<div className="text-sm text-zinc-500 mt-1">Properties Sold</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">500K+</div>
<div className="text-sm text-zinc-500 mt-1">Monthly Listeners</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">120+</div>
<div className="text-sm text-zinc-500 mt-1">Brokerage Agents</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-zinc-900">#1</div>
<div className="text-sm text-zinc-500 mt-1">Real Estate Podcast</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="episodes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Latest Conversations</h2>
<p className="text-zinc-500 mt-2">Deep dives with top producers and developers.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all episodes <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 mb-4 shadow-sm border border-zinc-200/50">
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-zinc-900/0 transition-colors z-10"></div>
<img alt="Modern House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded">
                            48:12
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Market Analysis</span>
<span className="text-xs font-medium text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded">Ep. 142</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors mb-1">
                        Is the Luxury Bubble About to Burst? Q3 Forecast
                    </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                        We sit down with the head of global sales to discuss interest rates, inventory shortages, and the future of downtown penthouses.
                    </p>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 mb-4 shadow-sm border border-zinc-200/50">
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-zinc-900/0 transition-colors z-10"></div>
<img alt="Architect" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded">
                            52:05
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Strategy</span>
<span className="text-xs font-medium text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded">Ep. 141</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors mb-1">
                        Scaling from $0 to $100M in Volume
                    </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                        A masterclass in client acquisition, building a team, and the systems needed to scale a brokerage effectively.
                    </p>
</article>

<article className="group cursor-pointer">
<div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 mb-4 shadow-sm border border-zinc-200/50">
<div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-zinc-900/0 transition-colors z-10"></div>
<img alt="Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded">
                            34:18
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:play" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">Design</span>
<span className="text-xs font-medium text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded">Ep. 140</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors mb-1">
                        Architecture Trends that Sell in 2024
                    </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                        Why open floor plans might be dying and what high-net-worth individuals are actually asking for in new builds.
                    </p>
</article>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100" id="shorts">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12">
<div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5"></span>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Market Shorts</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer">
<img alt="Short" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute top-3 right-3">
<span className="iconify text-white drop-shadow-md" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-medium text-sm leading-snug drop-shadow-sm">The #1 mistake first-time investors make.</p>
<p className="text-zinc-300 text-xs mt-1">142K views</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer">
<img alt="Short" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-medium text-sm leading-snug drop-shadow-sm">Touring a $45M Beverly Hills Estate</p>
<p className="text-zinc-300 text-xs mt-1">890K views</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer">
<img alt="Short" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-medium text-sm leading-snug drop-shadow-sm">Negotiation tactic: The Silence.</p>
<p className="text-zinc-300 text-xs mt-1">33K views</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer hidden md:block">
<img alt="Short" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-medium text-sm leading-snug drop-shadow-sm">Closing day checklist.</p>
<p className="text-zinc-300 text-xs mt-1">12K views</p>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer hidden lg:block">
<img alt="Short" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white font-medium text-sm leading-snug drop-shadow-sm">Office Tour 2024</p>
<p className="text-zinc-300 text-xs mt-1">45K views</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-24 text-white relative overflow-hidden" id="brokerage">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Built for the agents<br/>of tomorrow.</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        We aren't just a media company. We are a full-service brokerage empowering agents with cutting-edge technology, in-house content production, and a global referral network.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="iconify" data-icon="lucide:video" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="font-medium text-lg">In-House Studio</h3>
<p className="text-zinc-500 text-sm mt-1">Full production team available for every listing.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="font-medium text-lg">Global Reach</h3>
<p className="text-zinc-500 text-sm mt-1">Syndication to 40+ countries instantly.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="iconify" data-icon="lucide:trending-up" data-strokeWidth="1.5"></span>
</div>
<div>
<h3 className="font-medium text-lg">Highest Splits</h3>
<p className="text-zinc-500 text-sm mt-1">Keep more of your commission with our capped model.</p>
</div>
</div>
</div>
<button className="mt-10 bg-white text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                        Join the Brokerage
                    </button>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Office" className="rounded-2xl border border-zinc-700 transform translate-y-8 shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Building" className="rounded-2xl border border-zinc-700 shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
</div>
<span className="font-medium tracking-tight">maple.realty show</span>
</div>
<p className="text-zinc-500 text-sm mb-6">Redefining the real estate experience through media and technology.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-zinc-900">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Podcast Episodes</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Market Shorts</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Academy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-zinc-900">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-zinc-900">Weekly Briefing</h4>
<p className="text-xs text-zinc-500 mb-4">Market trends delivered to your inbox every Monday.</p>
<form className="flex flex-col gap-3">
<input className="bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 block w-full p-2.5 outline-none transition-all placeholder-zinc-400" placeholder="email@address.com" type="email"/>

<div className="flex items-center justify-between py-1">
<span className="text-xs text-zinc-500">Daily Updates?</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
<button className="text-white bg-zinc-900 hover:bg-zinc-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all shadow-sm" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 maple.realty show. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
