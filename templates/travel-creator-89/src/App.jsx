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



      (function() {
        // Observer for reveal on scroll
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Sticky Nav logic
        const navContainer = document.getElementById('main-nav-container');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
            navContainer.classList.add('scrolled');
          } else {
            navContainer.classList.remove('scrolled');
          }
        });

        // Scatter Grid Parallax Logic
        const scatterSection = document.getElementById('scatter-section');
        const scatterItems = document.querySelectorAll('.scatter-item');
        
        if (scatterSection && scatterItems.length > 0) {
          window.addEventListener('scroll', () => {
            const rect = scatterSection.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // Calculate progress: 0 when top of section hits bottom of viewport, 1 when bottom of section hits top of viewport
            // We want the effect to be strongest when the section is centered
            
            // Calculate distance from center of viewport to center of section
            const sectionCenterY = rect.top + rect.height / 2;
            const screenCenterY = viewHeight / 2;
            
            // value is negative when section is below center, positive when above
            const dist = (screenCenterY - sectionCenterY) * 0.1; 
            
            scatterItems.forEach(item => {
              const speedX = parseFloat(item.getAttribute('data-speed-x') || 0);
              const speedY = parseFloat(item.getAttribute('data-speed-y') || 0);
              
              // Move items away from center based on scroll
              const x = dist * speedX * 100;
              const y = dist * speedY * 100;
              
              item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
          }, { passive: true });
        }
      })();
    
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
      

<header className="z-50 transition-all duration-300 !border-none !backdrop-blur-none fixed w-full top-0" id="main-nav-container" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%) !important'}}>
<nav className="md:px-12 flex w-full max-w-[1440px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="hidden md:flex gap-8 text-sm font-medium text-white/90 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Creators</a>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex cursor-pointer items-center gap-2.5">
<img alt="Plandora Logo" className="w-30 h-8 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04653849-9066-47ef-ba52-4ee2d5fa9825_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="hover:border-white/40 hover:bg-white/10 transition-all text-sm font-medium text-white border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5">Sign up</button>
<button className="hover:shadow-lg hover:shadow-pink-500/20 transition-all text-sm font-semibold text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#ffcdc4] to-[#ff7dff] rounded-full pt-2.5 pr-5 pb-2.5 pl-5">Log in</button>
</div>
<div className="md:hidden flex items-center text-white">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
</nav>
</header>


<section className="md:h-screen flex overflow-hidden z-0 w-full h-screen relative items-center">

<div className="bg-center z-0 bg-cover absolute top-0 right-0 bottom-0 left-0 flex items-center justify-between px-4 md:px-12 pointer-events-none bg-[url(https://images.unsplash.com/photo-1570367364062-4ab01ebf0954?w=2560&amp;q=80)]"><button className="pointer-events-auto group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/10 backdrop-blur-md border border-white/20 hover:bg-black/20 transition-all duration-300 shadow-2xl"><iconify-icon className="text-white text-2xl group-hover:-translate-x-0.5 transition-transform" icon="solar:alt-arrow-left-linear"></iconify-icon></button><button className="pointer-events-auto group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/10 backdrop-blur-md border border-white/20 hover:bg-black/20 transition-all duration-300 shadow-2xl"><iconify-icon className="text-white text-2xl group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon></button></div>
<div className="md:px-12 z-10 grid md:grid-cols-2 gap-12 w-full max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="reveal-on-scroll is-visible text-white">
<h1 className="leading-[1.05] md:text-7xl text-5xl font-semibold tracking-tighter max-w-xl mb-6">Built by real travelers who have <span className="italic font-serif">actually</span> been there.</h1>
<div className="flex flex-col sm:flex-row gap-4 sm:items-center gap-x-4 gap-y-4 items-start">
</div>
</div>

<div className="reveal-on-scroll delay-200 is-visible relative">

<div className="bg-white/60 max-w-sm border-white/20 border rounded-[2rem] ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-xl [--fx-filter:blur(10px)_liquid-glass(3.5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="uppercase text-xs font-semibold text-gray-500 tracking-widest">Chat with Julian Rivers</span>
</div>
<div className="mb-6 space-y-4">
<div className="text-sm font-medium text-gray-700 bg-sky-50/80 rounded-2xl pt-4 pr-4 pb-4 pl-4" style={{borderBottomLeftRadius: '0px'}}>Hey, I am Julian 👋. I am a diver who has explored dive sites across 42 countries. Happy to share real tips and honest dive advice. Let's chat!</div>
<div className="text-sm font-normal text-white bg-slate-500 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-md" style={{borderBottomRightRadius: '0'}}>Going to Komodo. How are the currents and best dive spots?</div>
</div>
<button className="flex hover:shadow-lg hover:shadow-pink-500/20 transition-all group font-semibold text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#ffcdc4] to-[#ff7dff] w-full rounded-2xl pt-3.5 pb-3.5 gap-x-2 gap-y-2 items-center justify-center" style={{borderRadius: '90px'}}>Ask Julian</button>
</div>

<div className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 animate-float-slow">
<img alt="Creator" className="w-12 h-12 rounded-full object-cover border-2 border-pink-100" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=200&amp;h=200&amp;auto=format&amp;fit=crop"/>
<div className="space-y-1">
<h4 className="text-sm font-bold text-gray-900" style={{}}>Julian Rivers / @jul.ian.rivers</h4>
<p className="text-[11px] leading-tight font-medium text-gray-500" style={{}}>230k followers</p><p className="text-[11px] leading-tight font-medium text-gray-500">Diver enthusiast with 42 country stories</p>
</div>
</div>
</div>
</div>
</section><section className="md:h-[150vh] overflow-hidden flex z-10 bg-[#FDFBF7] w-full h-[120vh] relative items-center justify-center" id="scatter-section">

<div className="z-20 text-center max-w-4xl mr-auto ml-auto pr-4 pl-4 relative space-y-8">
<h2 className="leading-[1.05] md:text-7xl text-4xl font-medium text-gray-900 tracking-tighter drop-shadow-sm">
          Real recommendations<br/>
<span className="text-gray-400">by real people</span>
</h2><button className="hover:bg-gray-100 transition-all transform hover:scale-105 shadow-black/10 text-base font-semibold text-slate-50 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#ffcdc4] to-[#ff7dff] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl">Try Plandora for Free</button>
</div>

<div className="absolute inset-0 w-full h-full pointer-events-none">

<div className="scatter-item absolute top-[10%] left-[5%] md:left-[15%] w-32 md:w-48 aspect-[3/4] z-10 pointer-events-auto" data-speed-x="-0.08" data-speed-y="-0.08">
<div className="animate-float-slow group cursor-pointer w-full h-full">
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl bg-gray-200 w-full h-full rounded-lg shadow-xl" style={{borderRadius: '0'}}>
<img alt="Traveler" className="group-hover:opacity-100 transition-opacity opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1512359573855-953710d3f7a8?w=800&amp;q=80" style={{borderRadius: '0'}}/>
</div>

</div>
</div>

<div className="scatter-item absolute top-[15%] right-[5%] md:right-[12%] w-40 md:w-64 aspect-[4/3] z-0 pointer-events-auto" data-speed-x="0.06" data-speed-y="-0.05">
<div className="animate-float-medium group cursor-pointer w-full h-full" style={{animationDelay: '1s'}}>
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl bg-gray-200 w-full h-full rounded shadow-lg" style={{borderRadius: '0'}}>
<img alt="Adventure" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498090890888-3df9298e7b84?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute top-[40%] left-[-2%] md:left-[8%] w-24 md:w-40 aspect-square z-10 pointer-events-auto" data-speed-x="-0.05" data-speed-y="0.02">
<div className="animate-float-fast group cursor-pointer w-full h-full" style="animation-delay: 2s;
border-radius:0">
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 bg-white w-full h-full rounded-lg shadow-lg" style={{borderRadius: '0'}}>
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601576084861-5de423553c0f?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute top-[45%] right-[-5%] md:right-[5%] w-48 md:w-72 aspect-square z-20 pointer-events-auto" data-speed-x="0.09" data-speed-y="0.05">
<div className="animate-float-slow group cursor-pointer w-full h-full" style={{animationDelay: '0.5s'}}>
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 bg-gray-900 w-full h-full rounded shadow-2xl" style={{borderRadius: '0'}}>
<img alt="Cycling" className="group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1656446413640-290e985532ef?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute bottom-[15%] left-[5%] md:left-[18%] w-32 md:w-56 aspect-[3/4] z-0 pointer-events-auto" data-speed-x="-0.04" data-speed-y="0.08">
<div className="animate-float-medium group cursor-pointer w-full h-full" style={{animationDelay: '1.5s'}}>
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 bg-gray-100 w-full h-full rounded shadow-xl" style={{borderRadius: '0'}}>
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514904242691-805227244b5f?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute bottom-[10%] right-[10%] md:right-[20%] w-28 md:w-44 aspect-square z-10 pointer-events-auto" data-speed-x="0.05" data-speed-y="0.08">
<div className="animate-float-fast group cursor-pointer w-full h-full" style={{animationDelay: '3s'}}>
<div className="w-full h-full overflow-hidden rounded shadow-lg bg-gray-100 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
<img alt="Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515132292160-8ccaa03661f3?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute top-[5%] left-[45%] w-20 md:w-32 aspect-square z-0 pointer-events-auto" data-speed-x="0.01" data-speed-y="-0.1">
<div className="animate-float-slow group cursor-pointer w-full h-full" style={{animationDelay: '2.2s'}}>
<div className="overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 bg-gray-100 w-full h-full rounded shadow-sm" style={{borderRadius: '0'}}>
<img alt="Sneaker" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1660149224492-3843e977c6a1?w=320&amp;q=80"/>
</div>
</div>
</div>

<div className="scatter-item absolute bottom-[5%] left-[40%] w-40 md:w-60 aspect-video z-10 pointer-events-auto" data-speed-x="-0.02" data-speed-y="0.1">
<div className="animate-float-medium group cursor-pointer w-full h-full" style={{animationDelay: '0.8s'}}>
<div className="w-full h-full overflow-hidden rounded shadow-xl bg-gray-100 transition-all duration-500 ease-out group-hover:scale-105">
<img alt="Nature" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:py-32 md:px-12 font-sans bg-slate-200 w-full px-6 py-24 relative">
<div className="w-full max-w-[1440px] mr-auto ml-auto">

<div className="lg:mb-32 reveal-on-scroll text-center w-full mb-20 space-y-4">
<h2 className="leading-[0.9] md:text-7xl lg:text-7xl text-6xl font-medium text-gray-900 tracking-tighter max-w-6xl mr-auto ml-auto">
        Designed to connect<br className="hidden md:block"/> travellers &amp; creators
      </h2><button className="hover:bg-gray-100 transition-all transform hover:scale-105 shadow-black/10 text-base font-semibold text-gray-900 bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl">Explore features</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-2 max-w-7xl mr-auto ml-auto space-x-0 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-5 flex lg:justify-end lg:pr-12 reveal-on-scroll delay-100 pr-0 relative justify-center">
<div className="relative w-full max-w-[360px]">

<div className="border-[8px] lg:-rotate-2 transition-transform duration-700 hover:rotate-0 border-slate-300 rounded-[2.5rem] ring-1 relative shadow-2xl">

<div className="overflow-hidden flex flex-col font-sans w-full h-[240px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/203b2749-b4a7-4b62-abd1-bf21f390d24e_1600w.png)] bg-cover rounded-[2rem] relative">


</div>
</div>
</div>
</div>

<div className="flex flex-col reveal-on-scroll delay-200 lg:col-span-7 h-full justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

<div className="flex flex-col max-w-sm items-start">
<h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Chat with creators</h3>
<p className="text-gray-900/80 text-lg leading-relaxed mb-8">
              Access the collective wisdom of seasoned travelers through AI-powered "twins" that respond with their unique voice.
            </p>
</div>

<div className="flex flex-col items-start max-w-sm">
<h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Local insights</h3>
<p className="text-gray-900/80 text-lg leading-relaxed">
              Turn conversation into action. Plandora automatically generates plans based on tips and insights from people on the ground.
            </p>
</div>

<div className="flex flex-col items-start max-w-sm md:max-w-none md:col-span-2 md:w-3/4 border-t border-black/5 pt-12 md:pt-0 md:border-none">
<h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Interactive travel maps</h3>
<p className="text-gray-900/80 text-lg leading-relaxed">
                Transform creator insights into dynamic, visual itineraries. Navigate with real-time location mapping directly on your phone, even when offline.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[85vh] overflow-hidden flex items-end">

<div className="absolute inset-0 z-0">
<img alt="Traveler Portrait" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="bg-center bg-[url(https://images.unsplash.com/photo-1687360441027-27e70655b27e?w=2560&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pb-12 md:pb-24 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
<p className="leading-[1.15] md:text-7xl text-3xl font-medium text-white tracking-tighter max-w-2xl drop-shadow-sm">Real stories happen when you connect directly with local communities.</p><button className="hover:scale-105 transition-transform shadow-pink-500/20 font-semibold text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#FFCDC4] to-[#ff7dff] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg">
          Try Plandora for Free
        </button>
</div>
</section>

<footer className="overflow-hidden text-white bg-[#05261C] w-full pb-12 relative">
<div className="flex flex-col text-center max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="flex flex-wrap items-center justify-between text-sm font-medium text-white/70 w-full max-w-6xl mt-16 mr-auto mb-12 ml-auto gap-8">
<div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
<a className="hover:text-white transition-colors" href="#">About Plandora</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Creators</a>
<a className="hover:text-white transition-colors" href="#">Newsrooms</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div className="flex items-center gap-5 text-white/70">
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="TikTok" className="hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
</a>
<a aria-label="Telegram" className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
<a aria-label="YouTube" className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-youtube" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="Facebook" className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>

<div className="-mb-16 md:-mb-32 w-full max-w-5xl z-10 mt-20 mr-auto ml-auto pr-4 pl-4 relative">
<img alt="Camping Illustration" className="bg-center w-full h-100 object-cover drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6de2c01c-c850-4147-b612-1356aaea47c8_3840w.png"/>
</div><div className="select-none z-0 opacity-90 w-full mt-20 relative">
<h1 className="text-[23vw] leading-none font-extrabold tracking-tighter opacity-100">plandora</h1>
</div><div className="flex flex-col w-full mb-12 pt-12 items-center justify-center">
<p className="text-sm text-white/50">Copyright © 2026. TBA.LABS PTE.LTD.  Terms   Privacy Policy</p>
</div>


</div>
</footer>


    </>
  );
}
