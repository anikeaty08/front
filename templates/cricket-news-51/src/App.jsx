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
      

<nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">CRIC</a>

<div className="hidden md:block">
<div className="flex items-baseline space-x-6">
<a className="text-sm font-medium text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Scores</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Tests</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">ODIs</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">T20s</a>
<a className="text-sm font-medium text-zinc-400 transition-colors hover:text-white" href="#">Analysis</a>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center justify-center text-zinc-400 transition-colors hover:text-white">
<iconify-icon className="text-xl" icon="solar:magnifier-linear"></iconify-icon>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="flex items-center justify-center text-zinc-400 transition-colors hover:text-white">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="border-b border-zinc-900 bg-zinc-950 py-2">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-md bg-zinc-900/50 border border-zinc-800/50">
<span className="text-xs font-medium text-red-500 animate-pulse flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>LIVE</span>
<span className="text-xs text-zinc-400 ml-2">Day 3, Sess 2</span>
<div className="flex items-center gap-2 ml-3 border-l border-zinc-800 pl-3">
<span className="text-sm font-medium text-white tracking-tight">IND</span>
<span className="text-sm font-semibold text-white">342/6</span>
<span className="text-xs text-zinc-600">vs</span>
<span className="text-sm font-medium text-zinc-400 tracking-tight">AUS</span>
<span className="text-sm font-semibold text-zinc-400">212</span>
</div>
</div>
<div className="flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-zinc-900/30 transition-colors cursor-pointer border border-transparent">
<span className="text-xs text-zinc-500">FINAL</span>
<div className="flex items-center gap-2 ml-2 border-l border-zinc-800/50 pl-3">
<span className="text-sm font-medium text-zinc-400 tracking-tight">ENG</span>
<span className="text-sm font-semibold text-zinc-400">185/6</span>
<span className="text-xs text-zinc-600">-</span>
<span className="text-sm font-medium text-white tracking-tight">SA</span>
<span className="text-sm font-semibold text-white">186/4</span>
</div>
</div>
<div className="flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-zinc-900/30 transition-colors cursor-pointer border border-transparent">
<span className="text-xs text-zinc-500">FINAL</span>
<div className="flex items-center gap-2 ml-2 border-l border-zinc-800/50 pl-3">
<span className="text-sm font-medium text-white tracking-tight">CSK</span>
<span className="text-sm font-semibold text-white">210/4</span>
<span className="text-xs text-zinc-600">-</span>
<span className="text-sm font-medium text-zinc-400 tracking-tight">MI</span>
<span className="text-sm font-semibold text-zinc-400">195/8</span>
</div>
</div>
<div className="flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-md hover:bg-zinc-900/30 transition-colors cursor-pointer border border-transparent">
<span className="text-xs text-zinc-500">TOMORROW 14:00</span>
<div className="flex items-center gap-2 ml-2 border-l border-zinc-800/50 pl-3">
<span className="text-sm font-medium text-white tracking-tight">PAK</span>
<span className="text-xs text-zinc-600">vs</span>
<span className="text-sm font-medium text-white tracking-tight">NZ</span>
</div>
</div>
</div>
</div>
</div>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<article className="lg:col-span-8 group cursor-pointer flex flex-col justify-end">
<div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden bg-zinc-900 mb-5 border border-zinc-800/50">
<img alt="Cricket Match" className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Test Cricket</span>
<span className="text-xs text-zinc-500 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2 hours ago</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors">
                    Sensational Century on Final Day Secures Historic Run Chase
                </h1>
<p className="text-base text-zinc-400 max-w-3xl leading-relaxed">
                    In a stunning turn of events on a deteriorating day-five pitch, the touring side chased down a massive fourth-innings target. The captain's counter-attacking century in the final session proved too much for the hosts, marking one of the greatest chases in Test history.
                </p>
</article>

<aside className="lg:col-span-4 flex flex-col gap-8">

<div className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
<h2 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:graph-up-linear"></iconify-icon> Trending Now
                        </h2>
</div>
<div className="flex flex-col gap-5">
<a className="group grid grid-cols-[auto_1fr] gap-4 items-start" href="#">
<span className="text-xl font-semibold text-zinc-700 group-hover:text-blue-500 transition-colors">01</span>
<div>
<h3 className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-snug mb-1">Star All-Rounder Expected to Miss World Cup After Shoulder Injury</h3>
<span className="text-xs text-zinc-500">ODIs</span>
</div>
</a>
<a className="group grid grid-cols-[auto_1fr] gap-4 items-start" href="#">
<span className="text-xl font-semibold text-zinc-700 group-hover:text-blue-500 transition-colors">02</span>
<div>
<h3 className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-snug mb-1">ICC Announces New Penalty Regulations for Slow Over-Rates</h3>
<span className="text-xs text-zinc-500">Global</span>
</div>
</a>
<a className="group grid grid-cols-[auto_1fr] gap-4 items-start" href="#">
<span className="text-xl font-semibold text-zinc-700 group-hover:text-blue-500 transition-colors">03</span>
<div>
<h3 className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-snug mb-1">Exclusive Interview: Inside the Mind of a World Cup Winning Captain</h3>
<span className="text-xs text-zinc-500">Features</span>
</div>
</a>
<a className="group grid grid-cols-[auto_1fr] gap-4 items-start" href="#">
<span className="text-xl font-semibold text-zinc-700 group-hover:text-blue-500 transition-colors">04</span>
<div>
<h3 className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-snug mb-1">Franchise League Proposes Changes to Mega Auction Retention Rules</h3>
<span className="text-xs text-zinc-500">T20 Leagues</span>
</div>
</a>
</div>
</div>
</aside>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-16"></div>

<section>
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white">Latest Updates</h2>
<a className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 relative">
<img alt="Cricket Ball" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">T20 Leagues</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white leading-snug transition-colors">Mystery Spinner Breaks Franchise Wicket Record in Debut Season</h3>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 relative">
<img alt="Batsman" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">ODIs</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white leading-snug transition-colors">Veteran Opener Announces Retirement After 15-Year International Career</h3>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 relative">
<img alt="Stadium" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Infrastructure</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white leading-snug transition-colors">Board Approves Funding for State-of-the-Art National Cricket Academy</h3>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 relative">
<img alt="Pitch" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Analysis</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white leading-snug transition-colors">Pitch Analysis: How the Red Soil Surface Will Decide the Upcoming Series</h3>
</div>
</article>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950/50 pt-16 pb-8 mt-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white inline-block mb-4" href="#">CRIC</a>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        The premium destination for global cricket coverage, in-depth analysis, and real-time updates. Crafted for the modern fan.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Formats</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Test Matches</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">One Day Internationals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">T20 Internationals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Domestic Leagues</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Network</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Podcasts</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Newsletters</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Live Scores</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Data &amp; Stats</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Company</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 gap-4">
<p className="text-xs text-zinc-600">
                    © 2024 CRIC Network. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:video-frame-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
