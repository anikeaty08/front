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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  lucide.createIcons();
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with animate-in class
  document.querySelectorAll('.animate-in').forEach(el => {
    observer.observe(el);
  });
  
  // Trigger hero animations immediately
  setTimeout(() => {
    document.querySelectorAll('#hero-content .animate-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxBg = document.getElementById('parallax-bg');
    const heroContent = document.getElementById('hero-content');
    const portraitImg = document.getElementById('portrait-img');
    
    // Move background text slower (parallax)
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Add blur to portrait and fade out content
    if (heroContent && portraitImg) {
      const blurAmount = Math.min(scrollY / 50, 10);
      const opacity = Math.max(1 - (scrollY / 500), 0);
      
      portraitImg.style.filter = `blur(${blurAmount}px)`;
      heroContent.style.opacity = opacity;
    }
  });
  
  // Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-white/10', 'text-white', 'border-white/20');
        b.classList.add('text-neutral-400', 'border-white/10');
      });
      btn.classList.add('active', 'bg-white/10', 'text-white', 'border-white/20');
      btn.classList.remove('text-neutral-400', 'border-white/10');
      
      // Filter items
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Play buttons
  const playBtns = document.querySelectorAll('.play-btn');
  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const trackName = btn.closest('.group').querySelector('h3').textContent;
      alert(`Playing: ${trackName}\n\nThis would launch an immersive visual experience.`);
    });
  });
  
  // View buttons in gallery
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('This would open the image in a lightbox viewer.');
    });
  });
  
  // Smooth scroll offset for fixed nav
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 100;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hk4GkXoEfSX9qZozoFL6"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="particle absolute w-1 h-1 bg-red-500/40 rounded-full blur-sm" style={{left: '10%', top: '20%', '--tx': '50px', '--ty': '-200px', animationDelay: '0s'}}></div>
<div className="particle absolute w-1.5 h-1.5 bg-purple-500/30 rounded-full blur-sm" style={{left: '80%', top: '40%', '--tx': '-100px', '--ty': '-300px', animationDelay: '3s'}}></div>
<div className="particle absolute w-1 h-1 bg-amber-500/30 rounded-full blur-sm" style={{left: '30%', top: '60%', '--tx': '80px', '--ty': '-250px', animationDelay: '6s'}}></div>
<div className="particle absolute w-2 h-2 bg-red-500/20 rounded-full blur-md" style={{left: '60%', top: '80%', '--tx': '-60px', '--ty': '-180px', animationDelay: '9s'}}></div>
<div className="particle absolute w-1 h-1 bg-purple-400/40 rounded-full blur-sm" style={{left: '90%', top: '15%', '--tx': '-120px', '--ty': '-220px', animationDelay: '12s'}}></div>
</div>

<div className="grain fixed inset-0 pointer-events-none z-10 opacity-40"></div>

<nav className="fixed z-50 top-0 right-0 left-0">
<div className="mx-auto max-w-7xl px-6 sm:px-8 pt-3">
<div className="flex bg-white/5 border-white/10 border rounded-none pt-4 pr-8 pb-4 pl-8 backdrop-blur-xl items-center justify-between">
<div className="text-2xl font-light tracking-widest text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>ECHOES</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-white/80">
<a className="transition-colors hover:text-white" href="#experience">Experience</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#gallery">Gallery</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden mx-6 sm:mx-8 mt-2 bg-white/5 border-white/10 border backdrop-blur-xl" id="mobile-menu">
<div className="flex flex-col p-4 gap-4">
<a className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-white" href="#experience">Experience</a>
<a className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-white" href="#about">About</a>
<a className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-white" href="#gallery">Gallery</a>
<a className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-white" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-36 flex justify-center text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tight text-white/5 select-none transition-transform duration-0" id="parallax-bg" style={{maskImage: 'linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%)', willChange: 'transform'}}>
    CREATIVE
  </div>
<div className="relative z-10 text-center px-6 py-32 transition-all duration-0" id="hero-content">

<div className="mb-12 flex justify-center">
<div className="relative animate-float transition-all duration-0 animate-in scale-in delay-100" id="portrait-wrapper">
<div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent rounded-full blur-2xl"></div>
<div className="sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden w-88 h-88 ring-stone-50/20 ring-1 rounded-full relative">
<img alt="Portrait" className="w-full h-full object-cover transition-all duration-0" id="portrait-img" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0b31c4eb-a2a6-4e45-9ce8-f948ad5e230f_1600w.png"/>
<div className="bg-gradient-to-b from-black/20 via-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0 saturate-0"></div>
</div>
</div>
</div>

<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6 text-outline animate-in delay-200" style={{fontFamily: '\'Playfair Display\', serif'}}>ECHOES</h1>
<p className="text-base sm:text-lg md:text-xl font-extralight tracking-wide text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-in delay-300">
      A visual journey through rhythm, silence, and emotion.
    </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-400">
<a className="group inline-flex items-center gap-3 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 font-light text-white tracking-wide bg-red-600 px-8 py-4 relative" href="#experience">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
        Experience Now
      </a>
<a className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-light tracking-wide backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/40" href="#about">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
        About the Project
      </a>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce animate-in delay-500">
<span className="text-xs font-light tracking-widest">SCROLL</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7-7 7-7-7"></path></svg>
</div>
</div>
</section>

<section className="sm:px-8 pt-32 pr-6 pb-32 pl-6 relative" id="experience">
<div className="mx-auto max-w-7xl">
<div className="text-center mb-20">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 animate-in" style={{fontFamily: '\'Playfair Display\', serif'}}>Visual Album</h2>
<p className="text-sm sm:text-base font-extralight tracking-wide text-neutral-400 animate-in delay-100">Chapters of sound translated into motion</p>
</div>
<div className="space-y-8">

<div className="group relative overflow-hidden bg-gradient-to-br from-red-950/20 to-transparent border border-red-500/10 backdrop-blur-sm transition-all hover:border-red-500/30 animate-in">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-5 aspect-video lg:aspect-square overflow-hidden">
<img alt="Crimson Pulse" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0db5b9f1-ec3e-4f81-a9dd-299db35d3aa6_3840w.jpg"/>
</div>
<div className="lg:col-span-7 p-8 lg:p-12">
<div className="flex items-center gap-4 mb-6">
<span className="text-5xl font-extralight text-red-500/60">01</span>
<div className="h-px flex-1 bg-gradient-to-r from-red-500/40 to-transparent"></div>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Crimson Pulse</h3>
<p className="text-sm font-light text-neutral-400 mb-8 leading-relaxed italic">"The heartbeat of desire, painted in red."</p>
<button className="play-btn group/btn inline-flex items-center gap-3 px-6 py-3 border border-red-500/30 text-red-400 font-light tracking-wide transition-all hover:bg-red-500/10 hover:border-red-500/50">
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Play Experience
            </button>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-gradient-to-br from-purple-950/20 to-transparent border border-purple-500/10 backdrop-blur-sm transition-all hover:border-purple-500/30 animate-in delay-100">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 p-8 lg:p-12 order-2 lg:order-1">
<div className="flex items-center gap-4 mb-6">
<span className="text-5xl font-extralight text-purple-500/60">02</span>
<div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent"></div>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Reflections in Glass</h3>
<p className="text-sm font-light text-neutral-400 mb-8 leading-relaxed italic">"Fragments of memory caught between light and shadow."</p>
<button className="play-btn group/btn inline-flex items-center gap-3 px-6 py-3 border border-purple-500/30 text-purple-400 font-light tracking-wide transition-all hover:bg-purple-500/10 hover:border-purple-500/50">
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Play Experience
            </button>
</div>
<div className="lg:col-span-5 aspect-video lg:aspect-square overflow-hidden order-1 lg:order-2">
<img alt="Reflections" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ada23122-88a0-4549-a816-aa0d985efcbf_1600w.webp"/>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-gradient-to-br from-amber-950/20 to-transparent border border-amber-500/10 backdrop-blur-sm transition-all hover:border-amber-500/30 animate-in delay-200">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-5 aspect-video lg:aspect-square overflow-hidden">
<img alt="Falling Light" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4b769dcd-6824-405e-9468-9e9de7c75d81_1600w.jpg"/>
</div>
<div className="lg:col-span-7 p-8 lg:p-12">
<div className="flex items-center gap-4 mb-6">
<span className="text-5xl font-extralight text-amber-500/60">03</span>
<div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent"></div>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Falling Light</h3>
<p className="text-sm font-light text-neutral-400 mb-8 leading-relaxed italic">"Grace descends in golden silence."</p>
<button className="play-btn group/btn inline-flex items-center gap-3 px-6 py-3 border border-amber-500/30 text-amber-400 font-light tracking-wide transition-all hover:bg-amber-500/10 hover:border-amber-500/50">
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Play Experience
            </button>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-gradient-to-br from-red-950/20 to-transparent border border-red-500/10 backdrop-blur-sm transition-all hover:border-red-500/30 animate-in delay-300">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div className="lg:col-span-7 lg:p-12 order-2 lg:order-1 pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-4 mb-6">
<span className="text-5xl font-extralight text-pink-500/60">04</span>
<div className="h-px flex-1 bg-gradient-to-r from-pink-500/40 to-transparent"></div>
</div>
<h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Echoes of You</h3>
<p className="text-sm font-light text-neutral-400 mb-8 leading-relaxed italic">"Reverberations of presence long after the sound has faded."</p>
<button className="play-btn group/btn inline-flex gap-3 transition-all hover:bg-red-500/10 hover:border-pink-500/50 font-light text-pink-400 tracking-wide border-pink-400/30 border px-6 py-3 gap-x-3 gap-y-3 items-center">
<svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Play Experience
            </button>
</div>
<div className="lg:col-span-5 aspect-video lg:aspect-square overflow-hidden order-1 lg:order-2">
<img alt="Echoes" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0415ae4b-2c65-41d6-92b9-3b67dc5d66ab_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pt-32 pr-6 pb-32 pl-6 relative" id="about">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-8 animate-in" style={{fontFamily: '\'Playfair Display\', serif'}}>Beyond Sound</h2>
<div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-164 mr-auto mb-12 ml-auto animate-in delay-100"></div>
<p className="text-base sm:text-lg font-light leading-relaxed text-neutral-300 mb-8 animate-in delay-200">
      ECHOES is more than sound. It's a fusion of 3D design, color, and rhythm — turning feelings into visual stories.
    </p>
<p className="sm:text-base leading-relaxed text-sm text-neutral-400 font-extralight animate-in delay-300">Each piece begins with a feeling. A rhythm. A moment suspended in time. Through careful composition of light, texture, and motion, I translate sonic experiences into visual narratives that breathe and pulse with their own life. This is where emotion becomes tangible where you can see what you feel when the music plays.</p>
</div>
</section>

<section className="relative py-32 px-6 sm:px-8" id="gallery">
<div className="mx-auto max-w-7xl">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 animate-in" style={{fontFamily: '\'Playfair Display\', serif'}}>Gallery</h2>
<p className="text-sm sm:text-base font-extralight tracking-wide text-neutral-400 mb-8 animate-in delay-100">Cinematic stills from the visual universe</p>

<div className="flex flex-wrap items-center justify-center gap-3 animate-in delay-200">
<button className="filter-btn active px-4 py-2 text-xs font-light tracking-wide bg-white/10 text-white border border-white/20 backdrop-blur-sm transition hover:bg-white/20" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 text-xs font-light tracking-wide text-neutral-400 border border-white/10 backdrop-blur-sm transition hover:text-white hover:border-white/20" data-filter="3d">3D</button>
<button className="filter-btn px-4 py-2 text-xs font-light tracking-wide text-neutral-400 border border-white/10 backdrop-blur-sm transition hover:text-white hover:border-white/20" data-filter="concept">Concept</button>
<button className="filter-btn px-4 py-2 text-xs font-light tracking-wide text-neutral-400 border border-white/10 backdrop-blur-sm transition hover:text-white hover:border-white/20" data-filter="sound">Sound Visuals</button>
<button className="filter-btn px-4 py-2 text-xs font-light tracking-wide text-neutral-400 border border-white/10 backdrop-blur-sm transition hover:text-white hover:border-white/20" data-filter="storyboard">Storyboards</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="gallery-grid">
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-red-500/30 animate-in delay-100" data-category="3d">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0600d42f-8b5f-433f-a705-67543465aac1_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-purple-500/30 animate-in delay-200" data-category="concept">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b2b6cef4-678b-4d54-ab64-a5411f5d271f_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-amber-500/30 animate-in delay-300" data-category="sound">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4141a0d4-ecd9-4d81-a70e-58a82a928cd6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-red-500/30 animate-in delay-400" data-category="3d">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f5581f8-0e22-4d5e-bf09-49852ba18367_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-purple-500/30 animate-in delay-500" data-category="storyboard">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/28815bdd-f673-46c3-80b4-05cbb3bbbc33_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/60 to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
<div className="gallery-item group relative aspect-square overflow-hidden bg-neutral-900 border border-white/5 transition hover:border-red-500/30 animate-in delay-600" data-category="sound">
<img alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0a2dab0-f8ec-483b-adec-e6c23c38aa9c_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
<button className="view-btn text-white text-sm font-light tracking-wide">View</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 sm:px-8" id="contact">
<div className="mx-auto max-w-3xl">
<div className="overflow-hidden sm:p-16 bg-gradient-to-br from-red-950/10 via-black to-purple-950/20 border-red-500/20 border pt-12 pr-12 pb-12 pl-12 relative backdrop-blur-xl animate-in">

<div className="absolute -top-20 -left-20 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
<div className="relative text-center">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Let's Create</h2>
<p className="text-base sm:text-lg font-light text-neutral-300 mb-12">Your sound in motion.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-light tracking-wide transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/20" href="mailto:hello@echoes.studio">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          Get in Touch
        </a>
</div>
</div>
</div>
</section>

<footer className="relative py-16 px-6 sm:px-8 border-t border-white/5 animate-in">
<div className="mx-auto max-w-7xl text-center">
<div className="text-2xl font-light tracking-widest text-white/60 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>ECHOES</div>
<p className="text-xs font-light tracking-widest text-neutral-600">© 2025 ECHOES — Crafted by Your Name</p>
</div>
</footer>


    </>
  );
}
