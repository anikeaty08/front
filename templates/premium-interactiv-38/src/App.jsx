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



    lucide.createIcons();

      // Music Toggle Functionality
      let musicPlaying = false;
      const audio = document.getElementById("background-music");
      const musicOnIcon = document.getElementById("music-on-icon");
      const musicOffIcon = document.getElementById("music-off-icon");
      const musicPulse = document.getElementById("music-pulse");

      // Restore state
      if (localStorage.getItem("musicPlaying") === "true") {
        audio
          .play()
          .then(() => {
            musicPlaying = true;
            musicOnIcon.classList.remove("hidden");
            musicOffIcon.classList.add("hidden");
            musicPulse.classList.remove("hidden");
          })
          .catch(() => {
            // Autoplay blocked
          });
      }

      function toggleMusic() {
        if (musicPlaying) {
          audio.pause();
          musicPlaying = false;
          musicOnIcon.classList.add("hidden");
          musicOffIcon.classList.remove("hidden");
          musicPulse.classList.add("hidden");
          localStorage.setItem("musicPlaying", "false");
        } else {
          audio
            .play()
            .then(() => {
              musicPlaying = true;
              musicOnIcon.classList.remove("hidden");
              musicOffIcon.classList.add("hidden");
              musicPulse.classList.remove("hidden");
              localStorage.setItem("musicPlaying", "true");
            })
            .catch((e) => {
              console.log("Audio play failed:", e);
            });
        }
      }

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          if (!href || href === "#") return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Intersection Observer for scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document
        .querySelectorAll(
          ".fade-in, .fade-in-left, .fade-in-right, .scale-in, .line-reveal, .counter"
        )
        .forEach((el) => observer.observe(el));

      // Nav background on scroll
      const nav = document.querySelector("nav");
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
          nav.style.background = "rgba(0, 0, 0, 0.8)";
          nav.style.backdropFilter = "blur(20px)";
        } else {
          nav.style.background = "transparent";
          nav.style.backdropFilter = "none";
        }
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
      

<div aria-label="Toggle background music" className="fixed left-6 bottom-6 z-50 w-12 h-12 rounded-full bg-gray-900/80 border border-gray-800/50 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-gray-800/80 hover:border-gray-700/50 transition-all duration-500 group" id="music-toggle" onclick="toggleMusic()" role="button" tabindex="0">
<svg className="text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" height="20" id="music-off-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
<line x1="1" x2="23" y1="1" y2="23"></line>
</svg>
<svg className="text-white hidden" fill="none" height="20" id="music-on-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
<div className="absolute inset-0 rounded-full border border-white/20 animate-ping hidden" id="music-pulse" style={{display: 'none'}}></div>
</div>
<audio className="" id="background-music" loop="" preload="auto">
<source className="" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3"/>
</audio>

<nav className="fixed z-50 nav-fade top-0 right-0 left-0" style={{background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(20px)'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-6 font-semibold">
<div className="flex items-center justify-between">

<div className="flex gap-8 lg:gap-12 items-center">
<a className="hover:text-white transition-colors duration-500 text-sm font-light text-gray-300" href="#3d-art-section">3D Art</a>
<a className="hover:text-white transition-colors duration-500 text-sm font-light text-gray-300" href="#results-section">Results</a>
</div>

<a aria-label="Home" className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-gray-800/50 shadow-lg shrink-0" href="#">
<img alt="Personal Avatar" className="w-full h-full object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cb36989-9ccf-447e-b20d-a87ef87438d5_320w.png"/>
</a>

<div className="flex gap-8 lg:gap-12 items-center">
<a className="hover:text-white transition-colors duration-500 text-sm font-light text-gray-300" href="#photography-section">Photography</a>
<a className="hover:text-white transition-colors duration-500 text-sm font-light text-gray-300" href="#videography-section">Videography</a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

<div className="absolute inset-0 overflow-hidden hero-bg-anim">

<div className="absolute inset-0 bg-black"></div>

<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-indigo-900/30 to-blue-900/30 blur-[100px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-purple-900/20 to-pink-900/10 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-t from-gray-900/40 to-slate-900/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
<div className="bg-gradient-to-t from-black to-transparent h-48 absolute inset-x-0 bottom-0 z-10"></div>
</div>
<div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
<h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight uppercase leading-none drop-shadow-2xl">
        Premium Interactive Portfolio Template
      </h1>

<div className="mt-12 opacity-0 animate-[titleFade_1.5s_ease-out_1s_forwards] flex justify-center">
<a className="group relative px-8 py-3.5 bg-white text-black rounded-full font-semibold tracking-tight flex items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] ring-4 ring-white/10 ring-offset-2 ring-offset-black" href="#">
<span>Download Template</span>
<iconify-icon icon="solar:download-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] w-full h-full"></div>
</a>
</div>
</div>
<div className="-translate-x-1/2 nav-fade absolute bottom-8 left-1/2 z-20">
<svg className="lucide lucide-chevron-down w-6 h-6 text-gray-500 animate-bounce" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="min-h-screen flex pt-32 pr-6 pb-32 pl-6 items-center justify-center">
<div className="text-center max-w-4xl mx-auto">
<p className="fade-in text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
        Fully Responsive &amp; Easy to Customize
      </p>
<div className="mt-16 flex justify-center">
<div className="line-reveal h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16 fade-in">
        Services
      </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="service-card relative group cursor-pointer fade-in-left" data-category-link="3d-art" onclick="window.location.href='#3d-art-section'" style={{transitionDelay: '0.1s'}}>
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 aspect-[4/5] border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-700">
<div className="absolute inset-0 opacity-20">
<img alt="3D Art" className="service-image w-full h-full object-cover transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7718598-162f-4055-816f-7ed796662e34_3840w.png"/>
</div>
<div className="service-glow absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700">
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8">
<div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center">
<svg className="lucide lucide-box w-7 h-7 text-gray-300" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium tracking-tight mb-3">3D Art</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                  Dimensional storytelling through immersive 3D visuals and environments.
                </p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
<span className="font-light">Explore</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="service-card relative group cursor-pointer fade-in" data-category-link="photography" onclick="window.location.href='#photography-section'" style={{transitionDelay: '0.2s'}}>
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 aspect-[4/5] border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-700">
<div className="absolute inset-0 opacity-20">
<img alt="Photography" className="service-image w-full h-full object-cover transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac66da44-4d8d-4e28-a693-189e654e3e30_800w.png"/>
</div>
<div className="service-glow absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-700">
</div>
<div className="flex flex-col z-10 h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center">
<svg className="lucide lucide-camera w-7 h-7 text-gray-300" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium tracking-tight mb-3">Photography</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                  Captured moments that tell powerful stories through light and composition.
                </p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
<span className="font-light">Explore</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="service-card relative group cursor-pointer fade-in-right" data-category-link="videography" onclick="window.location.href='#videography-section'" style={{transitionDelay: '0.3s'}}>
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 aspect-[4/5] border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-700">
<div className="absolute inset-0 opacity-20">
<img alt="Videography" className="service-image w-full h-full object-cover transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&amp;q=80"/>
</div>
<div className="service-glow absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-700">
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8">
<div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center">
<svg className="lucide lucide-video w-7 h-7 text-gray-300" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Videography</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                  Motion and emotion combined to create cinematic visual experiences.
                </p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors duration-500">
<span className="font-light">Explore</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6" data-category="results" id="results-section">
<div className="max-w-7xl mx-auto">
<h2 className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16 fade-in">
        Selected Works
      </h2>
<div className="space-y-24">
<div className="work-card group cursor-pointer scale-in">
<div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-gray-900">
<img alt="Project 1" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52ca96d3-18d4-4859-9296-8bf670fa1db4_800w.jpg"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-12 left-12">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Automotive</p>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Porsche 911 Turbo</h3>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="work-card group cursor-pointer scale-in" style={{transitionDelay: '0.1s'}}>
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900">
<img alt="Project 2" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/638cdc8b-5e9e-4faf-946b-1e9141744e7b_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Abstract</p>
<h3 className="text-2xl font-medium tracking-tight">Fluid Forms</h3>
</div>
</div>
</div>
<div className="work-card group cursor-pointer scale-in" style={{transitionDelay: '0.2s'}}>
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900">
<img alt="Project 3" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/603c4ef5-0d89-444c-a992-4ff2cd26fd66_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Product</p>
<h3 className="text-2xl font-medium tracking-tight">Tech Noir</h3>
</div>
</div>
</div>
</div>
<div className="work-card group cursor-pointer scale-in">
<div className="relative overflow-hidden rounded-3xl aspect-[21/9] bg-gray-900">
<img alt="Project 4" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0c2f5fa-450a-40e9-8082-f8c6bdf5eae5_3840w.png"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-12 left-12">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Cinematic</p>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Night Drive</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" data-category="photography" id="photography-section">
<div className="max-w-7xl mx-auto">
<h2 className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16 fade-in">
        Photography
      </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="work-card group cursor-pointer scale-in">
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900">
<img alt="Photography 1" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfb4897c-1a15-4952-9c8b-7d1c9eaad4f6_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Portrait</p>
<h3 className="text-2xl font-medium tracking-tight">Golden Hour</h3>
</div>
</div>
</div>
<div className="work-card group cursor-pointer scale-in" style={{transitionDelay: '0.1s'}}>
<div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900">
<img alt="Photography 2" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de6dea83-3b4b-4887-a68f-00cd7eb1ad33_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Landscape</p>
<h3 className="text-2xl font-medium tracking-tight">Mountain Peaks</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black" data-category="videography" id="videography-section">
<div className="max-w-7xl mx-auto">
<h2 className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16 fade-in">
        Videography
      </h2>
<div className="space-y-16">
<div className="work-card group cursor-pointer scale-in">
<div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-gray-900">
<img alt="Video Project 1" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
<svg className="" fill="white" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
<div className="absolute bottom-12 left-12">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Commercial</p>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Brand Film</h3>
</div>
</div>
</div>
<div className="work-card group cursor-pointer scale-in" style={{transitionDelay: '0.1s'}}>
<div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-gray-900">
<img alt="Video Project 2" className="work-image w-full h-full object-cover transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62332b52-0be1-4366-a0a7-24b8d283dcba_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
<svg fill="white" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
<div className="absolute bottom-12 left-12">
<p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Documentary</p>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Behind The Scenes</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-48 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12 fade-in">
        Ready to create something <span className="font-medium">timeless</span>?
      </h2>
<div className="fade-in" style={{transitionDelay: '0.2s'}}>
<button className="shiny-cta text-base">
<span>Let's create something timeless</span>
</button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-900">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs text-gray-600 font-light">© 2024 USAMA NEAL. All rights reserved.</p>
<div className="flex items-center gap-8">
<a aria-label="Instagram" className="hover:text-white transition-colors duration-500 text-gray-500" href="/#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors duration-500" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Dribbble" className="text-gray-500 hover:text-white transition-colors duration-500" href="#">
<svg className="lucide lucide-dribbble w-5 h-5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors duration-500" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


/* --- Aura Design Editing Fix --- */

/* overlays &amp; fixed layers: لا تمسك النقر */
.vignette,
.service-glow,
.absolute.inset-0,
.fixed {
pointer-events: none !important;
}

/* خليه يسمح بتحديد المحتوى */
section,
h1, h2, h3, p,
img,
a,
button {
pointer-events: auto !important;
}                     

    </>
  );
}
