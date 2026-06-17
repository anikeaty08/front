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



      // Initialize Lucide Icons
      lucide.createIcons({
          attrs: {
              class: "stroke-current",
              "stroke-width": 1.5
          }
      });

      // Intersection Observer for Scroll Animations
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-['Space_Grotesk'] text-xl tracking-tight font-semibold text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center text-black">
<span className="font-bold -ml-0.5 mt-0.5">M</span>
</div>
          MAHASNCO
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#games">
            Rotation
          </a>
<a className="hover:text-white transition-colors" href="#videos">Clips</a>
<a className="hover:text-white transition-colors" href="#socials">
            Socials
          </a>
<a className="hover:text-white transition-colors" href="#donate">
            Support
          </a>
</div>
<a className="group flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-all" href="https://kick.com" target="_blank">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-zinc-300 group-hover:text-white">Live on Kick</span>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gaming Setup" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&amp;w=2665&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/20 bg-lime-400/10 text-lime-400 text-xs font-medium mb-8">
<i className="w-3 h-3" data-lucide="zap"></i>
<span>Streaming Daily at 8PM</span>
</div>
<h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6">
          LEVEL UP
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-600">
            WITH MAHASNCO
          </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          High-octane gameplay, competitive matches, and pure chaos. Join the
          community on Kick for the ultimate gaming experience.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2" href="https://kick.com" target="_blank">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
            Watch Stream
          </a>
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2" href="#socials">
<i className="w-5 h-5" data-lucide="users"></i>
            Join Community
          </a>
</div>
</div>
</header>

<section className="py-24 relative border-t border-white/5" id="games">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Daily Rotation
            </h2>
<p className="text-zinc-400 text-sm">
              The games defining the stream right now.
            </p>
</div>
<div className="h-px bg-zinc-800 flex-1 md:ml-8 hidden md:block self-center"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal">
<img alt="GTA V" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-1 block">
                Open World
              </span>
<h3 className="text-xl font-semibold text-white tracking-tight">
                GTA V
              </h3>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" style={{transitionDelay: '100ms'}}>
<img alt="CS2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-1 block">
                Tactical FPS
              </span>
<h3 className="text-xl font-semibold text-white tracking-tight">
                CS2
              </h3>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" style={{transitionDelay: '200ms'}}>
<img alt="RDR 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-1 block">
                Adventure
              </span>
<h3 className="text-xl font-semibold text-white tracking-tight">
                Red Dead 2
              </h3>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" style={{transitionDelay: '300ms'}}>
<img alt="FC26" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&amp;w=2589&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-1 block">
                Sports
              </span>
<h3 className="text-xl font-semibold text-white tracking-tight">
                FC26
              </h3>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-zinc-950" id="videos">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Recent Clips
            </h2>
<p className="text-zinc-400 text-sm">
              Highlights from Instagram, TikTok, and YouTube.
            </p>
</div>
<div className="h-px bg-zinc-800 flex-1 md:ml-8 hidden md:block self-center"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" href="#" target="_blank">
<img alt="Instagram Clip" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="instagram"></i>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-lime-400 text-black rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
<i className="w-6 h-6 fill-current ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-2 block">
                Instagram Reel
              </span>
<p className="text-lg font-medium text-white leading-tight">
                Best plays from last night's stream 📸
              </p>
</div>
</a>

<a className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" href="#" style={{transitionDelay: '100ms'}} target="_blank">
<img alt="TikTok Clip" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="music"></i>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-lime-400 text-black rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
<i className="w-6 h-6 fill-current ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-2 block">
                TikTok
              </span>
<p className="text-lg font-medium text-white leading-tight">
                Funny glitch moment 🤣 #gaming
              </p>
</div>
</a>

<a className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer reveal" href="#" style={{transitionDelay: '200ms'}} target="_blank">
<img alt="YouTube Video" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="youtube"></i>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-16 h-16 bg-lime-400 text-black rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
<i className="w-6 h-6 fill-current ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-lime-400 mb-2 block">
                YouTube Video
              </span>
<p className="text-lg font-medium text-white leading-tight">
                Full match highlights vs Pro Team 🎮
              </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-white/5" id="socials">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Connect Everywhere
          </h2>
<p className="text-zinc-400 text-sm max-w-md mx-auto">
            Follow the journey across all platforms. Clips, updates, and
            community events.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#">
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="instagram"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Instagram</span>
</a>

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#" style={{transitionDelay: '50ms'}}>
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="twitter"></i>
</div>
<span className="text-sm font-medium text-zinc-200">X.com</span>
</a>

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#" style={{transitionDelay: '100ms'}}>
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="ghost"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Snapchat</span>
</a>

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#" style={{transitionDelay: '150ms'}}>
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="youtube"></i>
</div>
<span className="text-sm font-medium text-zinc-200">YouTube</span>
</a>

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#" style={{transitionDelay: '200ms'}}>
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="music"></i>
</div>
<span className="text-sm font-medium text-zinc-200">TikTok</span>
</a>

<a className="group flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-950 border border-white/5 hover:border-lime-400/30 transition-all duration-300 hover:-translate-y-1 reveal" href="#" style={{transitionDelay: '250ms'}}>
<div className="p-3 rounded-full bg-zinc-900 text-zinc-400 group-hover:text-lime-400 group-hover:bg-lime-400/10 transition-colors mb-4">
<i className="w-6 h-6" data-lucide="gamepad-2"></i>
</div>
<span className="text-sm font-medium text-zinc-200">Discord</span>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="donate">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/10 via-zinc-950 to-zinc-950"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
          Support the Stream
        </h2>
<p className="text-zinc-400 mb-10 text-sm leading-relaxed">
          Your support keeps the stream alive and helps improve the setup.
          Messages are read live on stream.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 font-semibold rounded-lg transition-all">
<i className="w-4 h-4" data-lucide="dollar-sign"></i>
            Send Donation
          </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-medium rounded-lg transition-all">
<i className="w-4 h-4" data-lucide="mail"></i>
            Business Contact
          </button>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-lime-400 rounded flex items-center justify-center text-black text-xs font-bold">
            M
          </div>
<span className="text-zinc-500 text-xs font-medium tracking-wide">
            MAHASNCO © 2024
          </span>
</div>
<div className="flex gap-6 text-zinc-600">
<a className="hover:text-lime-400 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="hover:text-lime-400 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="hover:text-lime-400 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
