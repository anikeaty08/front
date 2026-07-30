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
      {

    lucide.createIcons();
    // Intersection Observer for fade-up animations
    const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('opacity-100');}}),
    },{threshold:0.2});
    document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));
  
}
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
      

<header className="sticky top-0 z-20 backdrop-blur bg-white/60">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-red-500 rounded-full"></div>
<span className="font-semibold tracking-tight text-xl">Marmalade</span>
</div>
<nav className="hidden md:flex space-x-8 text-sm font-medium">
<a className="hover:text-red-500 transition" href="#roster">Artists</a>
<a className="hover:text-red-500 transition" href="#presents">Presents</a>
<a className="hover:text-red-500 transition" href="#spread">Radio</a>
<a className="hover:text-red-500 transition" href="#newsletter">Newsletter</a>
</nav>
<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="border-t border-black/5"></div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-24 flex flex-col items-center text-center gap-10">

<div className="relative">
<div className="animate-logo w-40 h-40 rounded-full border-8 border-red-500 flex items-center justify-center">

<span className="text-5xl font-semibold text-red-500 tracking-tight">M</span>
</div>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl fade-up" style={{animationDelay: `.1s`}}>Amplifying Bold, Emerging Voices</h1>
<p className="text-lg md:text-xl text-black/70 max-w-xl fade-up" style={{animationDelay: `.25s`}}>
        Marmalade empowers artists to break boundaries, connect with fans, and create the future of sound.
      </p>
<a className="fade-up" href="#roster" style={{animationDelay: `.4s`}}>
<button className="mt-6 px-6 py-3 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition">
          Explore Artists
        </button>
</a>
</div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-2xl"></div>
</div>
</section>

<section className="py-24" id="roster">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-up" style={{animationDelay: `.1s`}}>Artist Roster</h2>
<p className="mt-2 text-black/70 fade-up" style={{animationDelay: `.2s`}}>
        Discover the incredible talent shaping tomorrow’s sound.
      </p>
<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-xl border border-black/10 hover:border-red-500 transition overflow-hidden fade-up" style={{animationDelay: `.3s`}}>
<img alt="" className="h-56 w-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" />
<div className="p-6">
<h3 className="font-semibold tracking-tight text-lg">Nova Miles</h3>
<p className="text-sm text-black/60 mt-1">Dream-Pop · Los Angeles</p>
</div>
</div>
<div className="group rounded-xl border border-black/10 hover:border-red-500 transition overflow-hidden fade-up" style={{animationDelay: `.35s`}}>
<img alt="" className="h-56 w-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80&sat=-50" />
<div className="p-6">
<h3 className="font-semibold tracking-tight text-lg">Echo Night</h3>
<p className="text-sm text-black/60 mt-1">Indie Rock · London</p>
</div>
</div>
<div className="group rounded-xl border border-black/10 hover:border-red-500 transition overflow-hidden fade-up" style={{animationDelay: `.4s`}}>
<img alt="" className="h-56 w-full object-cover group-hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80&sat=50" />
<div className="p-6">
<h3 className="font-semibold tracking-tight text-lg">Siela</h3>
<p className="text-sm text-black/60 mt-1">Soul R&B · Toronto</p>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 bg-black text-white" id="presents">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-up" style={{animationDelay: `.1s`}}>Marmalade Presents</h2>
<p className="mt-2 text-white/70 fade-up" style={{animationDelay: `.2s`}}>Live showcases connecting artists & fans worldwide.</p>
<div className="mt-12 grid md:grid-cols-2 gap-10">

<div className="relative rounded-xl bg-white text-black overflow-hidden fade-up" style={{animationDelay: `.3s`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" />
<div className="p-6">
<h3 className="font-semibold tracking-tight text-lg">Signal Waves · NYC</h3>
<p className="text-sm text-black/60 mt-1">April 14 · Brooklyn Steel</p>
<button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black hover:bg-red-500 hover:text-white transition">
<span>RSVP</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="relative rounded-xl bg-white text-black overflow-hidden fade-up" style={{animationDelay: `.4s`}}>
<img alt="" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-6">
<h3 className="font-semibold tracking-tight text-lg">Electric Bloom · Berlin</h3>
<p className="text-sm text-black/60 mt-1">May 23 · Berghain</p>
<button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black hover:bg-red-500 hover:text-white transition">
<span>RSVP</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="spread">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid md:grid-cols-2 items-center gap-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-up" style={{animationDelay: `.1s`}}>Marmalade Spread Radio</h2>
<p className="mt-4 text-black/70 fade-up" style={{animationDelay: `.2s`}}>
            Weekly transmissions featuring new releases, interviews, and behind-the-scenes stories from our roster.
          </p>
<button className="mt-6 px-5 py-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition fade-up" style={{animationDelay: `.3s`}}>
            Listen on Mixcloud
          </button>
</div>

<div className="relative overflow-hidden rounded-xl fade-up" style={{animationDelay: `.35s`}}>
<img alt="" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" />
<div className="absolute inset-0 bg-black/50 backdrop-blur flex flex-col justify-center items-center">
<i className="w-14 h-14 text-white opacity-80 hover:opacity-100 transition" data-lucide="play-circle"></i>
<span className="mt-4 text-white/80 text-sm">Latest Episode</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-red-50" id="newsletter">
<div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight fade-up" style={{animationDelay: `.1s`}}>
        Stay in the Loop
      </h2>
<p className="mt-3 text-black/70 fade-up" style={{animationDelay: `.2s`}}>
        Sign up for Marmalade’s newsletter for new releases, blog stories, and showcase announcements.
      </p>
<form action="#" className="mt-8 flex flex-col sm:flex-row items-center gap-4 fade-up" style={{animationDelay: `.3s`}}>
<input className="w-full sm:flex-1 px-5 py-3 rounded-md border border-black/20 focus:border-red-500 focus:ring-0 outline-none transition" placeholder="Your email address" required type="email" />
<button className="px-6 py-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition" type="submit">
          Subscribe
        </button>
</form>
<p className="mt-4 text-xs text-black/50 fade-up" style={{animationDelay: `.35s`}}>
        We respect your privacy. Unsubscribe at any time.
      </p>
</div>
</section>

<footer className="bg-black text-white py-16">
<div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between gap-8">
<div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-red-500 rounded-full"></div>
<span className="font-semibold tracking-tight text-lg">Marmalade</span>
</div>
<p className="mt-4 text-white/60 text-sm max-w-xs">
          Marmalade is a forward-thinking music company dedicated to empowering emerging artists worldwide.
        </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-medium tracking-tight mb-3">Explore</h4>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-red-400 transition" href="#roster">Artists</a></li>
<li><a className="hover:text-red-400 transition" href="#presents">Live Shows</a></li>
<li><a className="hover:text-red-400 transition" href="#spread">Radio</a></li>
<li><a className="hover:text-red-400 transition" href="#newsletter">Newsletter</a></li>
</ul>
</div>
<div>
<h4 className="font-medium tracking-tight mb-3">Connect</h4>
<div className="flex gap-4">
<a className="hover:text-red-400 transition" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="hover:text-red-400 transition" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="hover:text-red-400 transition" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
<a className="hover:text-red-400 transition" href="#">
<i className="w-5 h-5" data-lucide="spotify"></i>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-xs text-white/40">
<span>© 2024 Marmalade Music</span>
<span className="space-x-4">
<a className="hover:text-red-400 transition" href="#">Terms</a>
<a className="hover:text-red-400 transition" href="#">Privacy</a>
</span>
</div>
</div>
</footer>


    </>
  );
}
