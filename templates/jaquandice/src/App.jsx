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



tailwind.config = {
theme: {
extend: {
colors: {
vintage: {
950: '#0f0a06', // Darker black/brown
900: '#1a120b', // Base
800: '#2c1a12', // Panel
700: '#4a2512', // Border dark
600: '#8f3e1b', // Muted Orange
500: '#b45309', // Primary Gold
400: '#d97706', // Bright Gold
300: '#e8cfa0', // Muted Text
200: '#f5e6ca', // Light Text
100: '#fef3c7', // Highlight
50: '#fffbeb',  // Paper
},
accent: {
red: '#7f1d1d', // Deep Blood Red
crimson: '#991b1b',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
display: ['Cinzel', 'serif'],
script: ['Great Vibes', 'cursive'],
},
backgroundImage: {
'grain': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.07%22/%3E%3C/svg%3E')",
},
letterSpacing: {
'ultra': '0.25em',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'shimmer': 'shimmer 2s infinite linear',
'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) scale(1.05)' },
'50%': { transform: 'translateY(-15px) scale(1.05)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
},
fadeUp: {
'0%': { opacity: 0, transform: 'translateY(40px)' },
'100%': { opacity: 1, transform: 'translateY(0)' }
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-50 w-full h-full bg-grain mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-transparent transition-all duration-500 hover:bg-vintage-950/80 hover:backdrop-blur-xl hover:border-vintage-100/5 group/nav reveal-on-scroll is-visible">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="relative z-50 group" href="#">
<span className="font-script text-4xl text-vintage-100 relative z-10 block transition-transform duration-300 group-hover:scale-110 drop-shadow-md">JaQuandice</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-[11px] font-semibold uppercase tracking-widest text-vintage-300 hover:text-vintage-50 transition-colors duration-300 relative group" href="#music">
                    Music
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[11px] font-semibold uppercase tracking-widest text-vintage-300 hover:text-vintage-50 transition-colors duration-300 relative group" href="#tour">
                    Tour
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[11px] font-semibold uppercase tracking-widest text-vintage-300 hover:text-vintage-50 transition-colors duration-300 relative group" href="#gallery">
                    Diary
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[11px] font-semibold uppercase tracking-widest text-vintage-300 hover:text-vintage-50 transition-colors duration-300 relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full"></span>
</a>
<button className="bg-vintage-100/5 border border-vintage-100/10 text-vintage-100 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-red hover:border-accent-red hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)]">
<span>Listen Now</span>
<iconify-icon icon="solar:play-circle-linear" width="14"></iconify-icon>
</button>
</div>

<button className="md:hidden text-vintage-100 relative z-50 p-2 hover:bg-vintage-800 rounded-full transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-vintage-950/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-transform duration-500 translate-x-full md:hidden border-l border-vintage-800" id="mobile-menu">
<div className="absolute top-0 w-full p-6 flex justify-between items-center border-b border-vintage-800/50">
<span className="font-script text-3xl text-vintage-100">JaQuandice</span>
<button className="text-vintage-400 hover:text-accent-red transition-colors" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full')">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<a className="font-display text-3xl uppercase tracking-widest text-vintage-200 hover:text-accent-red transition-colors" href="#music" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full')">Music</a>
<a className="font-display text-3xl uppercase tracking-widest text-vintage-200 hover:text-accent-red transition-colors" href="#tour" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full')">Tour</a>
<a className="font-display text-3xl uppercase tracking-widest text-vintage-200 hover:text-accent-red transition-colors" href="#gallery" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full')">Diary</a>
<a className="font-display text-3xl uppercase tracking-widest text-vintage-200 hover:text-accent-red transition-colors" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full')">Contact</a>
</div>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">

<img alt="Background" className="contrast-125 brightness-[0.6] animate-float opacity-95 w-full h-full object-cover grayscale-0 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcda4867-aa7d-46a1-b5e4-3e27fc230eec_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-vintage-900 via-vintage-900/40 to-vintage-950/80"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 reveal-on-scroll is-visible">
<div className="inline-flex items-center gap-2 mb-8 border border-vintage-100/10 px-4 py-1.5 rounded-full bg-vintage-950/30 backdrop-blur-md shadow-2xl animate-[fade-up_1s_ease-out]">
<div className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse"></div>
<span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-vintage-200">New Single "How To Love"</span>
</div>
<h1 className="font-script text-[5rem] md:text-[9rem] lg:text-[11rem] text-vintage-50 leading-[0.8] mb-6 text-glow mix-blend-screen drop-shadow-2xl">
                JaQuandice
            </h1>
<p className="font-serif italic text-xl md:text-3xl text-vintage-300/80 mb-12 font-light max-w-2xl mx-auto reveal-on-scroll stagger-delay-1 is-visible">
                The new voice of <span className="text-accent-red font-normal relative inline-block">
                    neo soul
                    <svg className="absolute w-full h-2 bottom-0 left-0 text-accent-red opacity-50" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-on-scroll stagger-delay-2 is-visible">
<a className="w-full sm:w-auto group relative px-8 py-4 bg-accent-crimson text-vintage-50 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-15px_rgba(153,27,27,0.6)]" href="#music">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div className="relative flex items-center justify-center gap-3">
<span className="text-xs font-bold uppercase tracking-widest">Listen Now</span>
<iconify-icon icon="solar:music-note-2-linear" width="18"></iconify-icon>
</div>
</a>
<a className="w-full sm:w-auto group px-8 py-4 border border-vintage-700 hover:border-vintage-400 text-vintage-300 hover:text-vintage-100 rounded-full transition-all duration-300 bg-vintage-900/30 backdrop-blur-sm hover:bg-vintage-900/60" href="#tour">
<div className="flex items-center justify-center gap-3">
<span className="text-xs font-bold uppercase tracking-widest">Tour Dates</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-[fade-up_1s_ease-out_1s_forwards]">
<span className="text-[9px] uppercase tracking-[0.3em] text-vintage-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-vintage-500 to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 relative overflow-hidden" id="music">

<div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-red/5 rounded-full blur-[128px] pointer-events-none -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 items-center">

<div className="relative order-2 lg:order-1 w-full reveal-on-scroll">

<div className="absolute -inset-1 bg-gradient-to-tr from-accent-red/30 to-vintage-500/10 rounded-[14px] blur-xl opacity-60"></div>

<div className="relative z-10 rounded-xl overflow-hidden border border-vintage-700/50 shadow-2xl bg-vintage-950">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="opacity-90 hover:opacity-100 transition-opacity duration-500" frameborder="0" height="450" loading="lazy" src="https://open.spotify.com/embed/artist/55tWFrZCE2JSINkrHPJkAm?utm_source=generator&amp;theme=0" style={{borderRadius: '12px'}} width="100%"></iframe>
</div>
</div>

<div className="order-1 lg:order-2 reveal-on-scroll stagger-delay-1">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-accent-red animate-spin-slow" icon="solar:vinyl-record-linear" width="20"></iconify-icon>
<span className="text-accent-red text-xs font-bold uppercase tracking-widest">Latest Release</span>
</div>
<h2 className="font-display text-4xl md:text-6xl text-vintage-100 mb-8 leading-[1.1]">
                        Melodies from the 
                        <span className="font-script text-6xl md:text-7xl text-vintage-500 ml-4">Golden Age</span>
</h2>
<p className="text-vintage-300 text-base md:text-lg font-light leading-relaxed mb-10 border-l-2 border-vintage-800 pl-6">
                        Immerse yourself in the soundscape of JaQuandice. From heart-wrenching ballads to groove-laden anthems, explore the complete discography that is redefining the modern soul genre.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-3 text-vintage-100 bg-vintage-800/50 hover:bg-[#1DB954] hover:text-white border border-vintage-700 hover:border-[#1DB954] rounded-lg px-6 py-3.5 transition-all duration-300 group w-full sm:w-auto" href="https://open.spotify.com/artist/55tWFrZCE2JSINkrHPJkAm" target="_blank">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="mdi:spotify" width="22"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">Spotify</span>
</a>
<a className="flex items-center justify-center gap-3 text-vintage-100 bg-vintage-800/50 hover:bg-[#FA243C] hover:text-white border border-vintage-700 hover:border-[#FA243C] rounded-lg px-6 py-3.5 transition-all duration-300 group w-full sm:w-auto" href="https://music.apple.com/us/artist/jaquandice/1211594088" target="_blank">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="mdi:apple" width="22"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">Apple Music</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-vintage-950 border-t border-vintage-800/50 relative" id="tour">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
<div>
<h2 className="font-display text-4xl md:text-5xl text-vintage-100 mb-2">Tour Dates</h2>
<p className="text-vintage-500 font-serif italic text-xl">Catch the vibe live</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-vintage-800 flex items-center justify-center text-vintage-400 hover:border-vintage-500 hover:text-vintage-100 hover:bg-vintage-900 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-vintage-800 flex items-center justify-center text-vintage-400 hover:border-vintage-500 hover:text-vintage-100 hover:bg-vintage-900 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-2">

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 border border-vintage-800/30 rounded-xl bg-vintage-900/20 hover:bg-vintage-900 hover:border-vintage-700 transition-all duration-300 reveal-on-scroll stagger-delay-1">
<div className="col-span-2 font-display text-2xl text-vintage-100 group-hover:text-accent-red transition-colors flex items-center gap-3">
<span className="text-sm font-sans text-vintage-500 font-bold uppercase tracking-wider block md:hidden">Date:</span>
                        Oct 14
                    </div>
<div className="col-span-5">
<div className="font-serif text-xl text-vintage-200 mb-1">The Velvet Lounge</div>
<div className="flex items-center gap-2 text-vintage-500 text-xs uppercase tracking-wider">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Chicago, IL
                        </div>
</div>
<div className="col-span-3 text-sm text-vintage-400 font-light hidden md:block">
                        Opening for <span className="text-vintage-300">Moonchild</span>
</div>
<div className="col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
<a className="w-full md:w-auto text-center inline-block px-5 py-2 rounded-lg bg-vintage-800/50 text-vintage-300 text-xs font-bold uppercase tracking-widest hover:bg-accent-red hover:text-white transition-all duration-300" href="#">
                            Tickets
                        </a>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 border border-vintage-800/30 rounded-xl bg-vintage-900/20 hover:bg-vintage-900 hover:border-vintage-700 transition-all duration-300 reveal-on-scroll stagger-delay-2">
<div className="col-span-2 font-display text-2xl text-vintage-100 group-hover:text-accent-red transition-colors flex items-center gap-3">
<span className="text-sm font-sans text-vintage-500 font-bold uppercase tracking-wider block md:hidden">Date:</span>
                        Oct 22
                    </div>
<div className="col-span-5">
<div className="font-serif text-xl text-vintage-200 mb-1">Bluebird Theater</div>
<div className="flex items-center gap-2 text-vintage-500 text-xs uppercase tracking-wider">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Denver, CO
                        </div>
</div>
<div className="col-span-3 text-sm text-vintage-400 font-light hidden md:block">
                        Headline Show
                    </div>
<div className="col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
<button className="w-full md:w-auto text-center px-5 py-2 rounded-lg border border-vintage-800 text-vintage-600 text-xs font-bold uppercase tracking-widest cursor-not-allowed opacity-50" disabled="">
                            Sold Out
                        </button>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 border border-vintage-800/30 rounded-xl bg-vintage-900/20 hover:bg-vintage-900 hover:border-vintage-700 transition-all duration-300 reveal-on-scroll stagger-delay-3">
<div className="col-span-2 font-display text-2xl text-vintage-100 group-hover:text-accent-red transition-colors flex items-center gap-3">
<span className="text-sm font-sans text-vintage-500 font-bold uppercase tracking-wider block md:hidden">Date:</span>
                        Nov 05
                    </div>
<div className="col-span-5">
<div className="font-serif text-xl text-vintage-200 mb-1">The Fillmore</div>
<div className="flex items-center gap-2 text-vintage-500 text-xs uppercase tracking-wider">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            San Francisco, CA
                        </div>
</div>
<div className="col-span-3 text-sm text-vintage-400 font-light hidden md:block">
                        Festival Set
                    </div>
<div className="col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
<a className="w-full md:w-auto text-center inline-block px-5 py-2 rounded-lg bg-vintage-800/50 text-vintage-300 text-xs font-bold uppercase tracking-widest hover:bg-accent-red hover:text-white transition-all duration-300" href="#">
                            Tickets
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-vintage-900 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex items-center justify-between reveal-on-scroll">
<div>
<div className="flex items-center gap-2 mb-2 text-accent-red">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Behind the Scenes</span>
</div>
<h2 className="font-display text-4xl text-vintage-100">Visual Diary</h2>
</div>
<div className="hidden md:block w-32 h-[1px] bg-vintage-800"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="row-span-1 md:row-span-2 relative group overflow-hidden rounded-lg bg-vintage-800 reveal-on-scroll">
<img alt="Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a533fd76-d6ac-46f6-8abf-dc6095aa48e8_800w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-vintage-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-vintage-200 font-serif italic">Studio Sessions</span>
</div>
</div>

<div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-lg bg-vintage-800 reveal-on-scroll stagger-delay-1">
<img alt="Gallery" className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcd5d216-d0d4-4685-bd4c-a42423ba8cc3_800w.png" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-4 right-4 bg-vintage-950/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-vintage-200 uppercase tracking-widest border border-vintage-100/10">
                        Live in LA
                    </div>
</div>

<div className="relative group overflow-hidden rounded-lg bg-vintage-800 reveal-on-scroll stagger-delay-2">
<img alt="Gallery" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae32bc3a-5310-493c-aa07-61ffc1565582_800w.png"/>
</div>

<div className="relative group overflow-hidden rounded-lg bg-vintage-950 border border-vintage-800 flex items-center justify-center p-8 text-center reveal-on-scroll">
<div>
<iconify-icon className="text-accent-red mb-4" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="font-serif italic text-lg text-vintage-200 leading-relaxed">
                            "Music is the space between the notes."
                        </p>
<p className="mt-4 text-[10px] uppercase tracking-widest text-vintage-500 font-bold">- JaQuandice</p>
</div>
<div className="absolute inset-0 border border-accent-red/20 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 rounded-lg"></div>
</div>

<div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-lg bg-vintage-800 reveal-on-scroll stagger-delay-1">
<img alt="Gallery" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f46d38c-7816-4695-868b-f71c5788f5ac_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-vintage-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-vintage-200 font-serif italic">Backstage</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-lg bg-vintage-800 reveal-on-scroll stagger-delay-2">
<a className="block w-full h-full bg-vintage-950 border border-vintage-800 flex flex-col items-center justify-center gap-4 group hover:bg-vintage-900 transition-colors cursor-pointer" href="https://www.instagram.com/jaquandice/" target="_blank">
<div className="w-16 h-16 rounded-full border border-vintage-700 flex items-center justify-center text-vintage-500 group-hover:text-accent-red group-hover:border-accent-red transition-all duration-300 group-hover:scale-110">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-vintage-400 group-hover:text-vintage-200 transition-colors">View All Photos</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-vintage-950 border-t border-vintage-800 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vintage-500/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 reveal-on-scroll">
<div className="glass-panel p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-50"></div>
<div className="text-center mb-12">
<h2 className="font-display text-3xl md:text-5xl text-vintage-100 mb-4">Get in Touch</h2>
<p className="text-vintage-300 font-light text-lg">For booking inquiries, collaborations, or just to say hello.</p>
</div>
<form action="mailto:jaquandice@gmail.com" className="space-y-8" enctype="text/plain" method="post">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group/input">
<label className="block text-[10px] uppercase tracking-widest text-vintage-500 mb-2 group-focus-within/input:text-accent-red transition-colors font-bold">Name</label>
<input className="w-full bg-transparent border-b border-vintage-700 text-vintage-100 px-0 py-3 focus:outline-none focus:border-accent-red transition-all placeholder-vintage-800 font-serif text-lg" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="relative group/input">
<label className="block text-[10px] uppercase tracking-widest text-vintage-500 mb-2 group-focus-within/input:text-accent-red transition-colors font-bold">Email</label>
<input className="w-full bg-transparent border-b border-vintage-700 text-vintage-100 px-0 py-3 focus:outline-none focus:border-accent-red transition-all placeholder-vintage-800 font-serif text-lg" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div className="relative group/input">
<label className="block text-[10px] uppercase tracking-widest text-vintage-500 mb-2 group-focus-within/input:text-accent-red transition-colors font-bold">Subject</label>
<select className="w-full bg-transparent border-b border-vintage-700 text-vintage-100 px-0 py-3 focus:outline-none focus:border-accent-red transition-all font-serif text-lg cursor-pointer" name="subject">
<option className="bg-vintage-900" value="">Select Inquiry Type</option>
<option className="bg-vintage-900" value="booking">Booking &amp; Live Performance</option>
<option className="bg-vintage-900" value="press">Press &amp; Media</option>
<option className="bg-vintage-900" value="collab">Collaboration</option>
<option className="bg-vintage-900" value="other">Other</option>
</select>
</div>
<div className="relative group/input">
<label className="block text-[10px] uppercase tracking-widest text-vintage-500 mb-2 group-focus-within/input:text-accent-red transition-colors font-bold">Message</label>
<textarea className="w-full bg-transparent border-b border-vintage-700 text-vintage-100 px-0 py-3 focus:outline-none focus:border-accent-red transition-all placeholder-vintage-800 font-serif text-lg resize-none" name="message" placeholder="Tell us more about your inquiry..." required="" rows="4"></textarea>
</div>
<div className="pt-4 flex justify-end">
<button className="w-full md:w-auto px-10 bg-vintage-100 text-vintage-900 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-accent-red hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group/btn relative overflow-hidden" type="submit">
<span className="relative z-10">Send Message</span>
<iconify-icon className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" icon="solar:plain-linear" width="18"></iconify-icon>
<div className="absolute inset-0 bg-accent-crimson translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</form>
</div>
<div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-vintage-800/50 pt-10 gap-8">
<div className="text-center md:text-left">
<span className="block text-[10px] uppercase tracking-widest text-vintage-500 mb-2">Direct Booking</span>
<a className="text-xl md:text-2xl font-serif italic text-vintage-200 hover:text-accent-red transition-colors relative group" href="mailto:jaquandice@gmail.com">
                        jaquandice@gmail.com
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-red transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex gap-8">
<a className="text-vintage-400 hover:text-vintage-100 transition-all transform hover:-translate-y-1 hover:scale-110" href="https://www.instagram.com/jaquandice?igsh=Z3lqdnRla2w4cHc5" target="_blank">
<iconify-icon icon="ri:instagram-line" width="24"></iconify-icon>
</a>
<a className="text-vintage-400 hover:text-vintage-100 transition-all transform hover:-translate-y-1 hover:scale-110" href="#">
<iconify-icon icon="ri:twitter-x-line" width="24"></iconify-icon>
</a>
<a className="text-vintage-400 hover:text-vintage-100 transition-all transform hover:-translate-y-1 hover:scale-110" href="https://www.youtube.com/@JaQuandicee" target="_blank">
<iconify-icon icon="ri:youtube-line" width="24"></iconify-icon>
</a>
<a className="text-vintage-400 hover:text-vintage-100 transition-all transform hover:-translate-y-1 hover:scale-110" href="#">
<iconify-icon icon="ri:spotify-line" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-vintage-950 py-10 border-t border-vintage-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-script text-xl text-vintage-500">JaQuandice</span>
<span className="text-[10px] uppercase tracking-widest text-vintage-700">| © 2024 All rights reserved.</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] uppercase tracking-widest text-vintage-600 hover:text-vintage-300 transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] uppercase tracking-widest text-vintage-600 hover:text-vintage-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
