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
      

<nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 text-white font-medium text-sm transition-opacity hover:opacity-80" href="#top">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-xs tracking-tight">LF</div>
        Little Fitzroy
      </a>
<div className="hidden sm:flex items-center gap-6">
<a className="text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#menu">Menu</a>
<a className="text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#products">Shop</a>
<a className="text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="#reviews">Reviews</a>
<a className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium transition-transform hover:-translate-y-px" href="#visit">Visit Us</a>
</div>
<div className="sm:hidden text-white cursor-pointer flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</div>
</nav>

<header className="relative min-h-[85vh] flex items-center overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.15),rgba(0,0,0,0.85))]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 w-full mt-10">
<div className="max-w-2xl bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">Little Fitzroy Coffee</h1>
<p className="text-lg text-zinc-300 leading-relaxed mb-2 font-normal">
          Specialty coffee &amp; fresh pastries on Easter Road. Cosy, dog-friendly café with great vegan options.
        </p>
<p className="text-sm text-zinc-400 mb-8 font-normal">
          Rated 4.8★ from 458 Google reviews
        </p>
<div className="flex flex-wrap gap-3">
<a className="bg-white text-black px-5 py-3 rounded-xl text-sm font-medium transition-transform hover:-translate-y-px flex items-center gap-2" href="#menu">View Menu</a>
<a className="bg-white/5 border border-white/20 text-white px-5 py-3 rounded-xl text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10" href="https://www.google.com/maps/search/?api=1&amp;query=Little+Fitzroy+Coffee+46+Easter+Rd+Edinburgh+EH7+5PJ" rel="noopener" target="_blank">
            Directions
          </a>
</div>
<div className="flex flex-wrap gap-2 mt-8 opacity-90">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-xs font-medium">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> 4.8 Rating
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-xs font-medium">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Open until 4pm
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md text-xs font-medium">
<iconify-icon icon="solar:paw-linear" width="14"></iconify-icon> Dog friendly
          </span>
</div>
</div>
</div>
</header>

<section className="bg-white text-black py-20 border-t border-black/10" id="menu">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-wrap items-end justify-between gap-4 mb-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight">On the Menu</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-black transition-colors flex items-center gap-1" href="#">
          Full Menu <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<div className="group cursor-pointer flex flex-col gap-4">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
<img alt="Flat White" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight">Flat White</h3>
<p className="text-sm text-zinc-500 mt-1 font-normal">Silky, balanced, and what we do best.</p>
</div>
</div>
<div className="group cursor-pointer flex flex-col gap-4">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
<img alt="Fresh Bakes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight">Fresh Bakes</h3>
<p className="text-sm text-zinc-500 mt-1 font-normal">Cinnamon buns, vegan pastries daily.</p>
</div>
</div>
<div className="group cursor-pointer flex flex-col gap-4">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
<img alt="Matcha" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-1">
<h3 className="text-xl font-medium tracking-tight">Matcha</h3>
<p className="text-sm text-zinc-500 mt-1 font-normal">Premium matcha lattes and specials.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black pb-24 pt-4" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-10">Community Reviews</h2>
<div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<div className="min-w-[300px] md:min-w-[340px] border border-black/5 bg-zinc-50 p-6 md:p-8 rounded-2xl transition-shadow hover:shadow-xl hover:shadow-black/5">
<div className="text-emerald-600 text-xs tracking-wide font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon> GOOGLE REVIEW
          </div>
<p className="text-sm leading-relaxed text-zinc-700 font-normal">"Good vegan options… Dirty chai and a huge iced cinnamon bun – highly recommend."</p>
<div className="mt-6 text-xs font-medium text-zinc-400">— Sarah J.</div>
</div>
<div className="min-w-[300px] md:min-w-[340px] border border-black/5 bg-zinc-50 p-6 md:p-8 rounded-2xl transition-shadow hover:shadow-xl hover:shadow-black/5">
<div className="text-emerald-600 text-xs tracking-wide font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon> GOOGLE REVIEW
          </div>
<p className="text-sm leading-relaxed text-zinc-700 font-normal">"Great service, and their flat white is so tasty and creamy. Best in the area."</p>
<div className="mt-6 text-xs font-medium text-zinc-400">— Mark T.</div>
</div>
<div className="min-w-[300px] md:min-w-[340px] border border-black/5 bg-zinc-50 p-6 md:p-8 rounded-2xl transition-shadow hover:shadow-xl hover:shadow-black/5">
<div className="text-emerald-600 text-xs tracking-wide font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon> GOOGLE REVIEW
          </div>
<p className="text-sm leading-relaxed text-zinc-700 font-normal">"Lovely vegan goodies – buns, cakes and pastries. Dog friendly too!"</p>
<div className="mt-6 text-xs font-medium text-zinc-400">— Emma L.</div>
</div>
<div className="min-w-[300px] md:min-w-[340px] border border-black/5 bg-zinc-50 p-6 md:p-8 rounded-2xl transition-shadow hover:shadow-xl hover:shadow-black/5">
<div className="text-emerald-600 text-xs tracking-wide font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon> GOOGLE REVIEW
          </div>
<p className="text-sm leading-relaxed text-zinc-700 font-normal">"Fantastic artisan coffee… best coffee I've had in Edinburgh so far."</p>
<div className="mt-6 text-xs font-medium text-zinc-400">— James P.</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1008] text-white py-24 border-t border-white/10" id="products">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-12">Take Little Fitzroy Home</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<article className="group">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50 mb-6 aspect-[16/9]">
<img alt="Cups" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Reusable Cups</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-normal max-w-md">
            Bring your mug and save on every coffee. First coffee on us when you buy a mug.
          </p>
<a className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white transition-colors hover:text-zinc-400" href="#">
            Shop Cups <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>
<article className="group">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50 mb-6 aspect-[16/9]">
<img alt="Beans" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">House Coffee Beans</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-normal max-w-md">
            Take home the same beans we serve in-store. Available whole bean or ground.
          </p>
<a className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-white transition-colors hover:text-zinc-400" href="#">
            Shop Beans <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] text-white py-24 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
<div className="flex items-center gap-5">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[3px] shrink-0">
<div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden border-2 border-[#0a0a0a]">
<img alt="Little Fitzroy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&amp;w=200&amp;fit=crop"/>
</div>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-medium text-lg tracking-tight">@littlefitzroy</span>
<iconify-icon className="text-[#dc2743]" icon="solar:verified-check-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex gap-4 mt-1">
<span className="text-xs text-zinc-400"><span className="font-medium text-white">8,038</span> followers</span>
<span className="text-xs text-zinc-400"><span className="font-medium text-white">2,300</span> posts</span>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-medium text-sm transition-opacity hover:opacity-90" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
          Follow on Instagram
        </a>
</div>

<p className="text-zinc-400 text-sm mb-10 max-w-2xl leading-relaxed font-normal">
        Multi-roaster café on Easter Road. Specialty coffee, equipment &amp; snacks. Follow along for daily brews, bakes, and Edinburgh café life. ☕
      </p>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Flat white" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
</a>
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Cinnamon buns" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
</a>
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Matcha latte" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
</a>
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Latte art" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
</a>
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Coffee brewing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
</a>
<a className="block w-full aspect-square overflow-hidden rounded-xl relative group" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<img alt="Coffee cups" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&amp;w=600&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
<iconify-icon className="text-white mb-1" icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="text-white text-sm font-medium">View all</span>
<span className="text-white/70 text-xs">2,300 posts</span>
</div>
</a>
</div>

<div className="border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 backdrop-blur-sm">
<div>
<p className="font-medium text-base mb-1">See our daily brews &amp; bakes</p>
<p className="text-zinc-400 text-sm font-normal">Join 8,000+ followers — new content every day.</p>
</div>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium text-sm transition-transform hover:-translate-y-px whitespace-nowrap" href="https://www.instagram.com/littlefitzroy/" rel="noopener" target="_blank">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
          @littlefitzroy
        </a>
</div>
</div>
</section>

<section className="bg-white text-black py-24 border-t border-black/10" id="visit">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-8">Visit Us</h2>
<div className="space-y-5 text-zinc-600 font-normal text-sm sm:text-base">
<p className="flex items-center gap-4">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear" width="20"></iconify-icon>
              46 Easter Rd, Edinburgh EH7 5PJ
            </p>
<p className="flex items-center gap-4">
<iconify-icon className="text-zinc-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
              Mon-Sun: 8:00am – 4:00pm
            </p>
<p className="flex items-center gap-4">
<iconify-icon className="text-zinc-400" icon="solar:paw-linear" width="20"></iconify-icon>
              Dog friendly
            </p>
<p className="flex items-center gap-4">
<iconify-icon className="text-zinc-400" icon="solar:card-linear" width="20"></iconify-icon>
              Card payments only
            </p>
</div>
<div className="flex flex-wrap gap-4 mt-10">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black text-white font-medium text-sm transition-transform hover:-translate-y-px" href="https://www.google.com/maps/search/?api=1&amp;query=Little+Fitzroy+Coffee+46+Easter+Rd+Edinburgh+EH7+5PJ" target="_blank">
              Open Maps
            </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-black/20 text-black font-medium text-sm transition-colors hover:bg-black/5" href="mailto:hello@littlefitzroy.com">
<iconify-icon className="mr-2" icon="solar:letter-linear" width="16"></iconify-icon> Get in Touch
            </a>
</div>
</div>
<div className="h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-zinc-100 relative grayscale-[20%] border border-black/5">
<iframe className="w-full h-full border-0 absolute inset-0" loading="lazy" src="https://www.google.com/maps?q=46+Easter+Rd+Edinburgh+EH7+5PJ&amp;output=embed" title="Little Fitzroy Location Map"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1008] text-zinc-500 py-10 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6 text-xs flex flex-col sm:flex-row justify-between items-center gap-4 font-normal">
<span>© 2026 Little Fitzroy Coffee.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="https://instagram.com/littlefitzroy">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
