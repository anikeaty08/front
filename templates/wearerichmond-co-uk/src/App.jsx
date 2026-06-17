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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group cursor-pointer" href="#home">
<div className="w-10 h-10 bg-[#003087] rounded-lg flex items-center justify-center transform group-hover:scale-105 transition duration-300 shadow-sm shadow-[#003087]/20">
<span className="text-white text-lg font-semibold tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>AR</span>
</div>
<span className="text-xl font-semibold text-[#003087] tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>RICHMOND</span>
</a>

<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-sm font-medium text-slate-900 hover:text-[#003087] transition-colors" href="#club">Club</a>
<a className="hover:text-[#003087] transition-colors text-sm font-medium text-slate-500" href="#matches">Matches</a>
<a className="hover:text-[#003087] transition-colors text-sm font-medium text-slate-500" href="#squad">Squad</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#003087] transition-colors" href="#news">News</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#003087] transition">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<a className="bg-[#FFB81C] hover:bg-[#e5a519] text-[#003087] text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm flex items-center gap-2" href="#">
                    Tickets
                    <iconify-icon height="18" icon="solar:ticket-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#003087] scroll-mt-20" id="home">

<div className="absolute inset-0 z-0">
<img alt="Stadium" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/050566e3-b75b-48d8-bd1b-139a9bf32003_800w.jpg"/>
<div className="bg-gradient-to-b from-[#003087]/80 via-[#003087]/50 to-slate-50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex flex-col text-center w-full max-w-7xl z-10 mt-24 mr-auto ml-auto pr-6 pl-6 relative items-center">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-white tracking-widest bg-white/10 border-white/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-2xl backdrop-blur-md">Premier League 24/25</span>
<h1 className="md:text-8xl lg:text-9xl uppercase text-6xl font-semibold text-white tracking-tighter mb-6" style={{fontFamily: '\'Montserrat\', sans-serif', textShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                We Are<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] to-[#ffe082]">Richmond</span>
</h1>
<p className="max-w-2xl text-lg md:text-xl text-slate-200 font-light mb-12" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                Modern British Heritage. Forged in London, loved by the world. Witness the next chapter of the Greyhounds.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="sm:w-auto hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-sm font-semibold text-[#003087] bg-white w-full rounded-md pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#news" style={{maskImage: 'linear-gradient(270deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(270deg, transparent, black 0%, black 100%, transparent)'}}>
                    Latest Updates
                    <svg className="font-sans w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="solar" data-solar="double-alt-arrow-right-outline" height="18" icon="solar:double-alt-arrow-right-outline" style={{color: '#003087'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L12.012 12L6.431 5.488a.75.75 0 0 1 .08-1.057m4 0a.75.75 0 0 1 1.058.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.14-.976L16.013 12l-5.581-6.512a.75.75 0 0 1 .081-1.057" fill="#003087" fill-rule="evenodd"></path></svg>
</a>
<a className="sm:w-auto hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-transparent w-full border-white/30 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="https://youtu.be/3u7EIiohs6U?si=GVJnzkgzJ-adK5gx">
<iconify-icon className="" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Season Trailer
                </a>
</div>
</div>
</section>

<section className="overflow-hidden flex scroll-mt-20 bg-[#003087] border-white/10 border-t pt-32 pb-32 relative items-center justify-center" id="club">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#FFB81C 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-block bg-[#FFB81C] px-12 py-6 mb-10 transform -rotate-2 shadow-2xl rounded-sm">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#003087] uppercase" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    Believe
                </h2>
</div>
<p className="text-xl md:text-3xl text-slate-300 font-light leading-relaxed tracking-tight max-w-3xl mx-auto" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                "It's not about the wins and losses. It's about helping these young fellas be the best versions of themselves on and off the pitch."
            </p>
<p className="text-sm text-[#FFB81C] mt-8 tracking-widest uppercase font-medium">The Richmond Way</p>
</div>
</section>

<section className="py-24 bg-slate-50 relative scroll-mt-20" id="news">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3" style={{fontFamily: '\'Montserrat\', sans-serif'}}>The Greyhound Report</h2>
<p className="text-sm text-slate-500">Latest news, stats, and updates from Nelson Road.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#003087] hover:opacity-70 transition" href="#">
                    View all
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl relative overflow-hidden group shadow-sm border border-slate-200/60 bg-white scroll-mt-24" id="squad">
<img alt="Player Action" className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:rotate-1" src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003087]/90 via-[#003087]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
<span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFB81C] text-[#003087] text-xs font-semibold uppercase tracking-wider mb-4">
<iconify-icon height="14" icon="solar:star-linear" width="14"></iconify-icon>
                            Player of the Month
                        </span>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Jamie Tartt</h3>
<p className="text-sm text-slate-300 max-w-md mb-6">The star striker continues his prolific form, securing 5 goals in the last 3 matches for the Greyhounds.</p>

<div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
<div>
<div className="text-xs text-slate-300 mb-1 uppercase tracking-wider">Goals</div>
<div className="text-2xl font-semibold text-white">14</div>
</div>
<div>
<div className="text-xs text-slate-300 mb-1 uppercase tracking-wider">Assists</div>
<div className="text-2xl font-semibold text-white">7</div>
</div>
<div>
<div className="text-xs text-slate-300 mb-1 uppercase tracking-wider">App</div>
<div className="text-2xl font-semibold text-white">21</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between scroll-mt-24" id="matches">
<div className="flex items-center justify-between text-xs text-slate-500 font-medium tracking-wide uppercase">
<span>Next Match</span>
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col items-center justify-center flex-grow py-4">
<div className="flex items-center justify-center gap-6 w-full">

<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-[#003087] flex items-center justify-center text-white font-semibold text-sm tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>AR</div>
<span className="text-xs font-semibold text-slate-900">RIC</span>
</div>

<div className="flex flex-col items-center">
<span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full mb-1">VS</span>
</div>

<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold text-sm tracking-tighter shadow-inner">WHU</div>
<span className="text-xs font-semibold text-slate-900">WHU</span>
</div>
</div>
<div className="mt-4 text-center">
<div className="text-sm font-semibold text-slate-900">Nelson Road Stadium</div>
<div className="text-xs text-slate-500 mt-1">Saturday, 15:00 GMT</div>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-[#003087] text-white text-sm font-medium py-3 rounded-xl transition-colors duration-300">
                        Match Center
                    </button>
</div>

<div className="rounded-3xl bg-[#003087] text-white p-6 relative overflow-hidden group shadow-sm">

<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/5 rounded-full blur-2xl transition duration-500 group-hover:bg-[#FFB81C]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex items-center justify-between text-xs text-slate-300 font-medium tracking-wide uppercase">
<span>League Standing</span>
<iconify-icon className="text-[#FFB81C]" height="16" icon="solar:cup-star-linear" width="16"></iconify-icon>
</div>
<div className="flex items-end gap-3">
<span className="text-6xl font-semibold tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>6th</span>
<div className="pb-1.5 flex items-center text-emerald-400 text-xs font-medium">
<iconify-icon height="14" icon="solar:arrow-up-linear" width="14"></iconify-icon>
<span>Up 2 places</span>
</div>
</div>
<div className="space-y-3 mt-4 text-sm border-t border-white/10 pt-4">
<div className="flex justify-between items-center opacity-70">
<span>5. Newcastle</span>
<span>42 pts</span>
</div>
<div className="flex justify-between items-center font-semibold text-[#FFB81C]">
<span>6. Richmond</span>
<span>41 pts</span>
</div>
<div className="flex justify-between items-center opacity-70">
<span>7. Aston Villa</span>
<span>39 pts</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-1 rounded-3xl bg-slate-900 relative overflow-hidden group shadow-sm">
<img alt="Merch" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition duration-500 mix-blend-overlay" src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="relative z-10 h-full p-6 flex flex-col justify-between">
<span className="inline-flex w-fit px-2 py-1 rounded bg-white text-slate-900 text-[10px] font-semibold uppercase tracking-wider">New Kit</span>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2" style={{fontFamily: '\'Montserrat\', sans-serif'}}>The Heritage Collection</h3>
<p className="text-xs text-slate-300 mb-4 line-clamp-2">Get the new 24/25 home kit, inspired by our 1897 roots.</p>
<a className="inline-flex items-center text-xs font-medium text-[#FFB81C] hover:text-white transition-colors" href="#">
                                Shop Now <iconify-icon className="ml-1" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 group cursor-pointer hover:border-[#003087]/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#003087] mb-4 group-hover:scale-110 group-hover:bg-[#003087] group-hover:text-white transition-all duration-300">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mb-2">Club Statement</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug mb-3 line-clamp-3">Stadium expansion plans approved by local council</h3>
<div className="mt-auto flex items-center text-xs text-slate-500">
<iconify-icon className="mr-1" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        2 hours ago
                    </div>
</div>

<div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-white relative overflow-hidden group shadow-sm border border-slate-200/60">
<img alt="Training" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:-rotate-1" src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40"></div>

<div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
<div className="flex justify-between items-center">
<div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Inside Training</h3>
<p className="text-xs text-slate-200 mt-1">Preparing for the London Derby</p>
</div>
<button className="w-10 h-10 rounded-full bg-white text-[#003087] flex items-center justify-center hover:bg-[#FFB81C] transition-colors">
<iconify-icon height="16" icon="solar:play-bold" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden" id="manager">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[#003087] text-xs font-semibold uppercase tracking-wider mb-6">
<iconify-icon height="14" icon="solar:star-circle-linear" width="14"></iconify-icon>
                        The Gaffer
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                        The Lasso Way
                    </h2>
<p className="text-base md:text-lg text-slate-600 font-light mb-10 leading-relaxed max-w-lg">
                        Arriving with zero soccer experience but infinite optimism, Ted Lasso brought more than just unconventional tactics to Nelson Road. Through unwavering belief, daily biscuits with the boss, and a focus on making players the best versions of themselves, he transformed the culture of AFC Richmond forever.
                    </p>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 max-w-md">
<div className="">
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Philosophy</div>
<div className="text-lg font-semibold text-slate-900">Belief</div>
</div>
<div className="">
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Formation</div>
<div className="text-lg font-semibold text-slate-900">Total Football</div>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Spirit</div>
<div className="text-lg font-semibold text-[#003087]">Goldfish</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-[#003087]/5 to-[#FFB81C]/5 rounded-3xl transform rotate-2 scale-105 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-100"></div>
<div className="relative bg-white rounded-3xl border border-slate-200/80 p-12 shadow-sm overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#003087 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<img alt="AFC Richmond Crest" className="transition-transform duration-700 group-hover:scale-105 w-full max-w-sm object-contain z-10 drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfb43509-3b48-4882-bce6-5223dec7977a_800w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<footer className="text-slate-400 bg-slate-950 border-slate-900 border-t pt-16 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex gap-2 mb-6 items-center">
<div className="md flex bg-[#003087] w-8 h-8 rounded items-center justify-center">
<span className="text-xs font-semibold text-white tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>AR</span>
</div>
<span className="text-lg font-semibold text-white tracking-tighter" style={{fontFamily: '\'Montserrat\', sans-serif'}}>RICHMOND</span>
</div>
<p className="text-xs leading-relaxed max-w-xs">Nelson Road Stadium<br/>London, UK<br/>est. 1897</p>
</div>
<div className="">
<h4 className="text-white text-sm font-semibold mb-4">The Club</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">First Team</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Academy</a></li>
<li><a className="hover:text-white transition-colors" href="#">History</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staff</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Fans</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Tickets &amp; Memberships</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hospitality</a></li>
<li><a className="hover:text-white transition-colors" href="#">Online Store</a></li>
<li><a className="hover:text-white transition-colors" href="#">Supporters Trust</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Follow Us</h4>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#003087] hover:border-[#003087] hover:text-white transition-all" href="#">
<iconify-icon height="18" icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#003087] hover:border-[#003087] hover:text-white transition-all" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#003087] hover:border-[#003087] hover:text-white transition-all" href="#">
<iconify-icon height="18" icon="solar:video-frame-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2024 AFC Richmond. All rights reserved. A fictional entity.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
