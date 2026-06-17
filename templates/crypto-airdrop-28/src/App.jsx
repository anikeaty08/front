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
      

<div className="absolute inset-0 glow-bg pointer-events-none -z-10"></div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<span className="text-zinc-950 font-semibold tracking-tighter text-sm">PA</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">PRIMIUM</span>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200" href="https://t.me/primiumairdrop" target="_blank">
<iconify-icon className="text-lg" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                @primiumairdrop
            </a>
</div>
</nav>

<main className="flex-grow">

<section className="text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300">Verified Opportunities Daily</span>
</div>

<h1 className="md:text-7xl leading-tight text-gradient text-5xl font-semibold text-white tracking-tighter max-w-4xl mr-auto mb-6 ml-auto">
                Discover Genuine Ways to Earn Online.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join our dedicated Telegram channel for the latest, best, and verified <strong className="">crypto airdrops</strong>, new earning bots, and <em>legit earning websites</em>.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5" href="https://t.me/primiumairdrop" target="_blank">
<iconify-icon className="text-xl" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Join Telegram Channel
                </a>
<a className="sm:w-auto hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white bg-transparent w-full border-white/10 border rounded-lg pt-3 pr-8 pb-3 pl-8" href="#promotion">
<iconify-icon className="text-xl" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Promote Your Project
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden relative aspect-[21/9]">

<img alt="Abstract representation of blockchain and digital currency networking" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">

<h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">Everything you need to start earning.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:parachute-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<h3 className="text-base font-medium text-white mb-2">Latest Airdrops</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Stay updated with the most trending and high-potential crypto airdrops as soon as they launch.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Verified Bots</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Access a curated list of reliable and <em>verified earning bots</em> that actually pay out.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Trusted Websites</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Discover legitimate websites and apps designed to help you generate extra income safely.</p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Regular Updates</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Never miss the next big earning opportunity with our consistent and timely channel alerts.</p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-24">
<div className="max-w-4xl mx-auto px-6 text-center">

<h4 className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-4">Our Methodology</h4>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">Carefully Selected. Rigorously Verified.</h2>
<p className="text-base text-zinc-400 leading-relaxed mb-8">
                    Our goal is to help users discover genuine ways to earn online. We sift through the noise of the crypto and online earning world to bring you only the opportunities that pass our quality checks. By joining PRIMIUM AIRDROP, you save time and focus only on what works.
                </p>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center" id="promotion">
<div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/50 to-zinc-950">

<h5 className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-3">Partnerships</h5>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Promote Your Project</h2>
<p className="text-sm text-zinc-400 mb-8 max-w-xl mx-auto">
                    Are you building the next big app, bot, or website? PRIMIUM AIRDROP is open for promotions. Reach an active, engaged audience specifically interested in discovering new earning platforms and crypto projects.
                </p>
<a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/10 text-white border border-white/10 font-medium text-sm hover:bg-white/20 transition-colors" href="https://t.me/primiumairdrop" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Contact for Promotion
                </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
<span className="text-zinc-950 font-semibold tracking-tighter" style={{fontSize: '0.65rem'}}>PA</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">PRIMIUM AIRDROP</span>
</div>
<p className="text-xs text-zinc-600">Discover genuine ways to earn online.</p>
</div>
<div className="flex flex-col items-center md:items-end gap-2">

<h6 className="text-xs font-medium text-zinc-500 mb-1">Stay Updated</h6>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="https://t.me/primiumairdrop" target="_blank">
<iconify-icon className="text-base" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Join Telegram
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
<p className="text-xs text-zinc-600">© 2024 PRIMIUM AIRDROP. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
