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



      // Parallax Effect
      const parallaxLayers = document.querySelectorAll('.parallax-layer');

      window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;

          // Only apply parallax if we are near the top to save resources
          if (scrollY < 1000) {
              parallaxLayers.forEach(layer => {
                  const speed = layer.getAttribute('data-speed');
                  const yPos = -(scrollY * speed);
                  layer.style.transform = `translateY(${yPos}px)`;
              });
          }

          // Navbar transparency
          const nav = document.getElementById('navbar');
          if (scrollY > 20) {
              nav.classList.add('bg-[#030303]/90', 'backdrop-blur-xl');
              nav.classList.remove('bg-[#030303]/80', 'backdrop-blur-md');
          } else {
              nav.classList.remove('bg-[#030303]/90', 'backdrop-blur-xl');
              nav.classList.add('bg-[#030303]/80', 'backdrop-blur-md');
          }
      });

      // Horizontal Scroll Buttons
      const container = document.getElementById('storiesContainer');
      document.getElementById('scrollRight').addEventListener('click', () => {
          container.scrollBy({ left: 400, behavior: 'smooth' });
      });
      document.getElementById('scrollLeft').addEventListener('click', () => {
          container.scrollBy({ left: -400, behavior: 'smooth' });
      });

      // Fade In Observer
      const observerOptions = {
          root: null,
          threshold: 0.1,
          rootMargin: "0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('fade-enter-active');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-enter').forEach(el => {
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5 group z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black group-hover:scale-105 transition-transform">
<span className="iconify text-lg" data-icon="lucide:trophy"></span>
</div>
<span className="font-semibold tracking-tight text-sm text-white">
            World Class Sports
          </span>
</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-medium text-white transition-colors" href="#home">
            Home
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#around-wcs">
            Programs
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#tournaments">
            Tournaments
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#camps">
            Camps
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#schedule">
            Schedule
          </a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex text-xs font-medium text-neutral-400 hover:text-white px-3 py-2 transition-colors" href="#">
            Sign In
          </a>
<a className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-all hover:scale-[1.02]" href="#register">
            Register
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/[0.05] blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-5xl mx-auto text-center flex flex-col items-center z-10 relative">
<div className="fade-enter inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-medium uppercase tracking-widest text-neutral-300">
            Winter Leagues Open
          </span>
</div>
<h1 className="fade-enter delay-100 text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.9] text-balance mb-8">
          BUILT FOR
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            THE GAME.
          </span>
</h1>
<p className="fade-enter delay-200 text-neutral-400 text-lg leading-relaxed max-w-xl mb-10 text-balance font-light">
          The premier destination for youth basketball development, competitive
          tournaments, and elite training.
        </p>
<div className="fade-enter delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
            Find a Program
          </button>
</div>
</div>

<div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">

<div className="absolute left-[5%] md:left-[10%] top-[20%] w-48 md:w-64 aspect-[3/4] rounded-lg overflow-hidden opacity-30 parallax-layer" data-speed="0.05">
<img alt="Team" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute left-[2%] md:left-[5%] top-[70%] w-40 md:w-56 aspect-[3/4] rounded-lg overflow-hidden opacity-20 parallax-layer" data-speed="0.1">
<img alt="Play" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1518407613690-d9fc990e795f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute right-[5%] md:right-[10%] top-[15%] w-56 md:w-72 aspect-[3/4] rounded-lg overflow-hidden opacity-30 parallax-layer" data-speed="0.08">
<img alt="Hoop" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute right-[2%] md:right-[8%] top-[65%] w-44 md:w-60 aspect-[3/4] rounded-lg overflow-hidden opacity-20 parallax-layer" data-speed="0.12">
<img alt="Coach" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1628779238951-be2c9f2a0791?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
<section className="py-16 border-y border-white/5 bg-[#0A0A0A] relative z-20" id="metrics">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="fade-enter group">
<h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
              15k+
            </h3>
<p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Athletes Developed
            </p>
</div>
<div className="fade-enter delay-100 group">
<h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
              200+
            </h3>
<p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              College Commits
            </p>
</div>
<div className="fade-enter delay-200 group">
<h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
              45
            </h3>
<p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              State Titles
            </p>
</div>
<div className="fade-enter delay-300 group">
<h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
              #1
            </h3>
<p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Rated Facility
            </p>
</div>
</div>
</div>
</section>


<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="px-6 max-w-7xl mx-auto mb-10 flex items-end justify-between">
<div className="fade-enter">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-2">
            THE CULTURE.
          </h2>
<p className="text-neutral-500 text-sm font-mono uppercase tracking-widest">
            Raw and Real. Inside WCS.
          </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" id="scrollLeft">
<span className="iconify" data-icon="lucide:arrow-left"></span>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" id="scrollRight">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>

<div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-10 snap-x snap-mandatory" id="storiesContainer">
<div className="shrink-0 w-[10vw] hidden md:block"></div>


<div className="story-card relative shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 snap-center cursor-pointer group border border-white/10">
<img alt="Story" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<span className="text-[10px] font-mono uppercase text-white/60 mb-2 block">
              Documentary
            </span>
<h3 className="text-2xl font-medium text-white leading-tight mb-2">
              Road to Nationals
            </h3>
<p className="text-neutral-400 text-xs line-clamp-2">
              Follow the U17 Elite team as they navigate the toughest circuit in
              the region.
            </p>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">
            08:24
          </div>
</div>

<div className="story-card relative shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 snap-center cursor-pointer group border border-white/10">
<img alt="Story" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1519861531473-9200263931a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<span className="text-[10px] font-mono uppercase text-white/60 mb-2 block">
              Player Profile
            </span>
<h3 className="text-2xl font-medium text-white leading-tight mb-2">
              The Grind Never Stops
            </h3>
<p className="text-neutral-400 text-xs line-clamp-2">
              A day in the life of our top prospects. School, training,
              recovery.
            </p>
</div>
</div>

<div className="story-card relative shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 snap-center cursor-pointer group border border-white/10">
<img alt="Story" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1577471488278-168255ad1d5b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<span className="text-[10px] font-mono uppercase text-white/60 mb-2 block">
              Event
            </span>
<h3 className="text-2xl font-medium text-white leading-tight mb-2">
              Winter Showcase
            </h3>
<p className="text-neutral-400 text-xs line-clamp-2">
              Highlights from the annual WCS Winter Classic tournament.
            </p>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">
            Live
          </div>
</div>

<div className="story-card relative shrink-0 w-[85vw] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 snap-center cursor-pointer group border border-white/10">
<img alt="Story" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<span className="text-[10px] font-mono uppercase text-white/60 mb-2 block">
              Alumni
            </span>
<h3 className="text-2xl font-medium text-white leading-tight mb-2">
              Next Level
            </h3>
<p className="text-neutral-400 text-xs line-clamp-2">
              Tracking our alumni currently playing in Collegiate programs.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-[#030303]" id="around-wcs">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="fade-enter">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
              Around the WCS
            </h2>
<p className="text-neutral-400 text-sm max-w-md">
              From beginners to college prospects. Choose your path.
            </p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors inline-block" href="#">
            View All Divisions
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">

<div className="md:col-span-2 row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] fade-enter p-8 flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:dumbbell"></span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Skills Academy
              </h3>
<p className="text-neutral-400 text-sm max-w-xs">
                Focus on fundamentals: shooting, ball handling, and footwork
                mechanics.
              </p>
</div>
</div>

<div className="md:col-span-2 row-span-2 relative group rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] fade-enter delay-100">
<img alt="Travel Team" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wide mb-4">
                Tryouts Open
              </div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">
                WCS Travel Teams
              </h3>
<p className="text-neutral-300 text-sm max-w-md mb-4">
                Regional and National AAU competition. Join a legacy of winning
                teams.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all" href="#">
                Team Details
                <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] fade-enter delay-200 p-6 flex flex-col justify-between">
<span className="iconify text-3xl text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:users"></span>
<div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
                3v3 League
              </h3>
<p className="text-neutral-500 text-xs">Fast-paced competition.</p>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative group rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] fade-enter delay-300 p-6 flex flex-col justify-between">
<span className="iconify text-3xl text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:tent"></span>
<div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
                Summer Camps
              </h3>
<p className="text-neutral-500 text-xs">
                Week-long intensive sessions.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-white" data-icon="lucide:trophy"></span>
<span className="font-semibold text-white">WCS</span>
</a>
<h3 className="text-2xl text-white font-medium mb-6">
            Join the legacy today.
          </h3>
<form className="flex gap-2 max-w-xs">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</form>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Programs</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                Travel Teams
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Skills Training
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Camps &amp; Clinics
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Private Coaching
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Organization</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                About WCS
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Coaching Staff
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Facilities
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 World Class Sports. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>


    </>
  );
}
