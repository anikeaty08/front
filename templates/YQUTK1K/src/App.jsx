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
      
    lucide.createIcons();
    // Animate elements on load
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.addEventListener('animationend', () => {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
    });
  
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
      

<header className="flex items-center justify-between px-6 md:px-12 py-6 bg-[#101623] border-b border-slate-800/60 fade-in fade-in-stagger-1">
<div className="flex items-center gap-3">
<svg aria-hidden="true" fill="none" height="36" viewbox="0 0 36 36" width="36">
<circle cx="18" cy="18" fill="#2563eb" r="18"></circle>
<path d="M12 18h12M18 12v12" stroke="#fff" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<span className="font-semibold text-xl tracking-tight text-white">CD Baby</span>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-slate-200 hover:text-blue-500 font-medium transition" href="#">Features</a>
<a className="text-slate-200 hover:text-blue-500 font-medium transition" href="#">Pricing</a>
<a className="text-slate-200 hover:text-blue-500 font-medium transition" href="#">Blog</a>
<a className="text-slate-200 hover:text-blue-500 font-medium transition" href="#">Contact</a>
<a className="ml-3 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-white shadow transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#">Get Started</a>
</nav>
<button aria-label="Open menu" className="md:hidden block text-slate-100 focus:outline-none">
<svg fill="none" height="28" viewbox="0 0 24 24" width="28"><rect fill="#fff" height="2" rx="1" width="16" x="4" y="7"></rect><rect fill="#fff" height="2" rx="1" width="16" x="4" y="15"></rect></svg>
</button>
</header>

<section className="max-w-6xl mx-auto px-6 md:px-0 pt-20 pb-28 text-center fade-in fade-in-stagger-2">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg mb-6">
      Empowering <span className="text-blue-500">Independent Artists</span><br/>
      to Reach the World
    </h1>
<p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-medium mb-8">
      Distribute your music globally, keep your rights, and get paid fast. Join thousands of artists who trust us to help launch their careers.
    </p>
<a className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white text-lg shadow transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animate-bounce-slow" href="#">
      Start Distributing
    </a>
<div className="mt-14 flex justify-center">
<img alt="Artist in studio" className="rounded-3xl shadow-2xl w-full max-w-xl object-cover border-2 border-slate-800/60 fade-in fade-in-stagger-3" src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&amp;fit=crop&amp;w=900&amp;q=80" style={{filter: 'blur(0.5px)'}}/>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 md:px-0 py-14 fade-in fade-in-stagger-3">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#151d32] rounded-2xl p-8 border border-slate-800/80 shadow-lg transition hover:glow fade-in fade-in-stagger-1">
<div className="flex items-center justify-center mb-4">
<div className="bg-blue-700/20 rounded-full p-3">
<i className="w-8 h-8 text-blue-500 icon-outline" data-lucide="earth"></i>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">Global Distribution</h3>
<p className="text-slate-300 text-base">Release your music on Spotify, Apple Music, TikTok, and 150+ more platforms worldwide—instantly.</p>
</div>

<div className="bg-[#151d32] rounded-2xl p-8 border border-slate-800/80 shadow-lg transition hover:glow fade-in fade-in-stagger-2">
<div className="flex items-center justify-center mb-4">
<div className="bg-pink-600/20 rounded-full p-3">
<i className="w-8 h-8 text-pink-400 icon-outline" data-lucide="shield-check"></i>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">Artist Ownership</h3>
<p className="text-slate-300 text-base">Keep 100% of your rights and control your music. Transparent payouts, no hidden fees.</p>
</div>

<div className="bg-[#151d32] rounded-2xl p-8 border border-slate-800/80 shadow-lg transition hover:glow fade-in fade-in-stagger-3">
<div className="flex items-center justify-center mb-4">
<div className="bg-orange-500/20 rounded-full p-3">
<i className="w-8 h-8 text-orange-400 icon-outline" data-lucide="rocket"></i>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">Fast Payouts</h3>
<p className="text-slate-300 text-base">Get paid quickly via direct deposit, PayPal, or check—however works best for you.</p>
</div>
</div>
<div className="mt-8 border-t border-slate-800/60"></div>
</section>

<section className="max-w-6xl mx-auto px-6 md:px-0 py-14 fade-in fade-in-stagger-4">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1 flex flex-col items-center md:items-start">
<div className="text-4xl font-semibold tracking-tight text-blue-500 mb-2">1M+</div>
<div className="text-slate-200 font-medium">Artists distributed</div>
</div>
<div className="h-12 w-px bg-slate-800 hidden md:block"></div>
<div className="flex-1 flex flex-col items-center md:items-start">
<div className="text-4xl font-semibold tracking-tight text-pink-400 mb-2">$1B+</div>
<div className="text-slate-200 font-medium">Royalties paid out</div>
</div>
<div className="h-12 w-px bg-slate-800 hidden md:block"></div>
<div className="flex-1 flex flex-col items-center md:items-start">
<div className="text-4xl font-semibold tracking-tight text-orange-400 mb-2">150+</div>
<div className="text-slate-200 font-medium">Countries reached</div>
</div>
</div>
<div className="mt-8 border-t border-slate-800/60"></div>
</section>

<section className="max-w-7xl mx-auto px-5 md:px-8 py-20 fade-in fade-in-stagger-5">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 text-center mb-10 fade-in fade-in-stagger-1">
      What artists are saying about CD Baby
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#17223a] border border-[#23304a] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-6 fade-in fade-in-stagger-2 hover:glow transition">
<img alt="Aloe Blacc testimonial portrait" className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 shadow-lg mx-auto md:mx-0" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&amp;fit=facearea&amp;w=200&amp;h=200&amp;q=80" />
<div>
<p className="text-lg text-slate-100 italic mb-4 leading-relaxed">“CD Baby makes it super easy to drop a worldwide release on your own schedule. The user interface is simple and the terms are great. The best part is when you see an email with the sales statement. Then you know the music is making an impact on people.”</p>
<div>
<span className="font-semibold text-slate-50">Aloe Blacc</span>
<div className="text-slate-400 text-sm">Singer/songwriter, record producer</div>
</div>
</div>
</img></div>

<div className="bg-[#17223a] border border-[#23304a] rounded-xl p-8 shadow-lg flex flex-col md:flex-row gap-6 fade-in fade-in-stagger-3 hover:glow transition">
<img alt="SHEARS testimonial portrait" className="w-20 h-20 rounded-full object-cover border-2 border-pink-400 shadow-lg mx-auto md:mx-0" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;w=200&amp;h=200&amp;q=80"/>
<div>
<p className="text-lg text-slate-100 italic mb-4 leading-relaxed">“I recommend CD Baby to everyone. They are incredibly helpful and know what matters to artists. The platform is super easy to use, and the team is really responsive. Being an independent artist is tough, but CD Baby makes it easier. They’ve provided the best experience I’ve had with a distributor.”</p>
<div>
<span className="font-semibold text-slate-50">SHEARS</span>
<div className="text-slate-400 text-sm">Artist, producer, and mixer</div>
</div>
</div>
</div>

<div className="bg-[#17223a] border border-[#23304a] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-6 fade-in fade-in-stagger-4 hover:glow transition">
<img alt="Two Ways Home duo testimonial portrait" className="w-20 h-20 rounded-full object-cover border-2 border-orange-400 shadow-lg mx-auto md:mx-0" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=facearea&amp;w=200&amp;h=200&amp;q=80"/>
<div>
<p className="text-lg text-slate-100 italic mb-4 leading-relaxed">“Working with CD Baby has been a game changer for us. Their hands-on support and quick responses are a breath of fresh air, and they nail it every time. Everyone we have worked with at CD Baby has genuinely been interested in our music and helping us further our career. We love being part of their community and working with people we can trust.”</p>
<div>
<span className="font-semibold text-slate-50">Two Ways Home</span>
<div className="text-slate-400 text-sm">Americana songwriting duo</div>
</div>
</div>
</div>

<div className="bg-[#17223a] border border-[#23304a] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-6 fade-in fade-in-stagger-5 hover:glow transition">
<img alt="LAMIC testimonial portrait" className="w-20 h-20 rounded-full object-cover border-2 border-blue-300 shadow-lg mx-auto md:mx-0" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=facearea&amp;w=200&amp;h=200&amp;q=80"/>
<div>
<p className="text-lg text-slate-100 italic mb-4 leading-relaxed">“It’s been over a year since I started working with CD Baby, and I couldn’t be more satisfied! From the first contact to the release itself, their team was amazing. They not only helped me at every step, but they made me feel like part of the family from the beginning. This partnership has completely changed the game for me. I’m super grateful for all the support during this time. If you’re an artist looking for an easy and effective platform to release your music, don’t hesitate — go with CD Baby!”</p>
<div>
<span className="font-semibold text-slate-50">LAMIC</span>
<div className="text-slate-400 text-sm">Producer, DJ, and composer</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#151d32] border-t border-slate-800/80 pt-12 pb-8 px-6 md:px-0 fade-in fade-in-stagger-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
<div className="flex items-center gap-3">
<svg fill="none" height="32" viewbox="0 0 36 36" width="32"><circle cx="18" cy="18" fill="#2563eb" r="18"></circle><path d="M12 18h12M18 12v12" stroke="#fff" strokeLinecap="round" strokeWidth="2"></path></svg>
<span className="font-semibold text-lg tracking-tight text-white">CD Baby</span>
</div>
<nav className="flex gap-6 text-slate-300 mt-6 md:mt-0 text-sm">
<a className="hover:text-blue-500 focus:outline-none focus:text-blue-500 transition" href="#">Features</a>
<a className="hover:text-blue-500 focus:outline-none focus:text-blue-500 transition" href="#">Pricing</a>
<a className="hover:text-blue-500 focus:outline-none focus:text-blue-500 transition" href="#">Blog</a>
<a className="hover:text-blue-500 focus:outline-none focus:text-blue-500 transition" href="#">Contact</a>
</nav>
<div className="flex gap-4 mt-8 md:mt-0">
<a aria-label="Twitter" className="hover:text-blue-400 transition" href="#"><i className="w-6 h-6 text-slate-400 icon-outline" data-lucide="twitter"></i></a>
<a aria-label="Instagram" className="hover:text-pink-400 transition" href="#"><i className="w-6 h-6 text-slate-400 icon-outline" data-lucide="instagram"></i></a>
<a aria-label="Facebook" className="hover:text-blue-600 transition" href="#"><i className="w-6 h-6 text-slate-400 icon-outline" data-lucide="facebook"></i></a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-8 border-t border-slate-800/60 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-2">
<span>© 2024 CD Baby. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-slate-200 underline" href="#">Terms</a>
<a className="hover:text-slate-200 underline" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
