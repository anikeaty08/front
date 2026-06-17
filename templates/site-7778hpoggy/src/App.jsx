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
      

<nav className="glass-nav sticky top-0 z-50 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-12">
<span className="text-2xl font-semibold tracking-tighter uppercase cursor-default">FIFA</span>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 active:opacity-70 transition-all" href="#">Tournaments</a>
<a className="hover:text-zinc-900 active:opacity-70 transition-all" href="#">Rankings</a>
<a className="hover:text-zinc-900 active:opacity-70 transition-all" href="#">News</a>
<a className="hover:text-zinc-900 active:opacity-70 transition-all" href="#">FIFA+</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-zinc-500 hover:text-zinc-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:magnifer-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:user-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="md:hidden text-zinc-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="hero-gradient pt-20 pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    Live Qualifiers
                </span>
<h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
                    The World's <br/> Greatest Stage.
                </h1>
<p className="text-lg text-zinc-500 mb-10 max-w-md leading-relaxed">
                    Experience the passion, the glory, and the history of football's premier tournaments in a completely redefined digital atmosphere.
                </p>
<div className="flex items-center gap-4">
<button className="px-8 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 active:scale-[0.97] transition-all">
                        World Cup 2026
                    </button>
<button className="px-8 py-4 bg-white border border-zinc-200 rounded-full text-sm font-medium hover:bg-zinc-50 active:scale-[0.97] transition-all flex items-center gap-2">
                        View Rankings
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl">
<img alt="Stadium" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200"></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-400"></div>
</div>
<div>
<p className="text-sm font-semibold">211 Associations</p>
<p className="text-xs text-zinc-400">United through football</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Match Center</h2>
<p className="text-zinc-500 text-sm">Upcoming and live international fixtures.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 active:scale-90 transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 active:scale-90 transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="clickable-card p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50 cursor-pointer hover:border-zinc-200">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Qualifier</span>
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Live</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">Argentina</span>
</div>
<span className="text-lg font-semibold tracking-tight">2</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">Brazil</span>
</div>
<span className="text-lg font-semibold tracking-tight">1</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs text-zinc-400">82' Minute</span>
<button className="text-zinc-400 hover:text-zinc-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
</button>
</div>
</div>

<div className="clickable-card p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm cursor-pointer hover:shadow-md">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Friendly</span>
<span className="text-xs font-medium text-zinc-500">Tomorrow</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">England</span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-300">-</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">France</span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-300">-</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs text-zinc-400">20:45 GMT</span>
<button className="text-zinc-400 hover:text-zinc-900 active:scale-90 transition-transform">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</button>
</div>
</div>

<div className="clickable-card p-6 rounded-2xl border border-zinc-100 bg-white shadow-sm cursor-pointer hover:shadow-md">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Asian Cup</span>
<span className="text-xs font-medium text-zinc-500">Finished</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">Japan</span>
</div>
<span className="text-lg font-semibold tracking-tight">3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<span className="text-sm font-medium">South Korea</span>
</div>
<span className="text-lg font-semibold tracking-tight">1</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs text-zinc-400">Full Time</span>
<button className="text-xs font-medium text-zinc-900 px-2 py-0.5 bg-zinc-100 rounded hover:bg-zinc-200 active:scale-95 transition-all">Highlights</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Latest Headlines</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2 group cursor-pointer active:opacity-90 transition-opacity">
<div className="aspect-video rounded-2xl overflow-hidden bg-zinc-200 mb-6">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-semibold text-blue-600 mb-3 block">FIFA+ Exclusive</span>
<h3 className="text-2xl font-semibold tracking-tight mb-4 group-hover:text-blue-600 transition-colors">Behind the scenes at the newly renovated Santiago Bernabéu</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Discover how modern architecture is reshaping the home of football in the heart of Madrid.</p>
</div>
<div className="space-y-8 md:col-span-2">
<div className="flex gap-6 group cursor-pointer active:opacity-70 transition-all">
<div className="w-24 h-24 shrink-0 rounded-xl bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div>
<span className="text-xs text-zinc-400 mb-1 block">4 hours ago</span>
<h4 className="text-sm font-semibold group-hover:text-blue-600 transition-colors">Men's World Ranking update: A new number one emerges</h4>
</div>
</div>
<div className="flex gap-6 group cursor-pointer active:opacity-70 transition-all">
<div className="w-24 h-24 shrink-0 rounded-xl bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<span className="text-xs text-zinc-400 mb-1 block">12 hours ago</span>
<h4 className="text-sm font-semibold group-hover:text-blue-600 transition-colors">World Cup 2026: Host city infrastructure progress reports</h4>
</div>
</div>
<div className="flex gap-6 group cursor-pointer active:opacity-70 transition-all">
<div className="w-24 h-24 shrink-0 rounded-xl bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div>
<span className="text-xs text-zinc-400 mb-1 block">1 day ago</span>
<h4 className="text-sm font-semibold group-hover:text-blue-600 transition-colors">Grassroots development programs reaching 1 million children</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<span className="text-xl font-semibold tracking-tighter uppercase mb-6 block cursor-default">FIFA</span>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        The world's governing body of football, committed to the growth and development of the game for all.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16">
<div className="space-y-4">
<h5 className="text-sm font-semibold">Organization</h5>
<ul className="text-sm text-zinc-500 space-y-3">
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">About FIFA</a></li>
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">President</a></li>
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Sustainability</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-sm font-semibold">Governance</h5>
<ul className="text-sm text-zinc-500 space-y-3">
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Committees</a></li>
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Legal</a></li>
<li><a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Documents</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-sm font-semibold">Social</h5>
<div className="flex gap-4">
<button className="text-xl text-zinc-400 hover:text-zinc-900 active:scale-90 transition-all">
<iconify-icon icon="solar:globus-linear"></iconify-icon>
</button>
<button className="text-xl text-zinc-400 hover:text-zinc-900 active:scale-90 transition-all">
<iconify-icon icon="solar:star-linear"></iconify-icon>
</button>
<button className="text-xl text-zinc-400 hover:text-zinc-900 active:scale-90 transition-all">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-zinc-400 tracking-tight cursor-default">© 2024 FIFA. All Rights Reserved.</p>
<div className="flex gap-8 text-xs text-zinc-400">
<a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Terms of Service</a>
<a className="hover:text-zinc-900 active:opacity-60 transition-all" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
