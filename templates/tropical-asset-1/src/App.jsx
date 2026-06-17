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
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
hand: ['"La Belle Aurore"', 'cursive'],
},
colors: {
sea: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59', // Deep Tropical
900: '#064e3b', // Dark Jungle
950: '#022c22',
},
sand: {
50: '#fdfbf7',
100: '#f7f3e8',
200: '#efe6d0',
300: '#e5d3b0',
400: '#dabb8e',
500: '#d1a472',
800: '#8c6b48',
}
},
backgroundImage: {
'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'wave': 'wave 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
wave: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



      // Initialize Icons
      lucide.createIcons();

      // Reveal Animation on Scroll
      const revealElements = document.querySelectorAll('.reveal');

      const revealOnScroll = () => {
          const windowHeight = window.innerHeight;
          const elementVisible = 150;

          revealElements.forEach((reveal) => {
              const elementTop = reveal.getBoundingClientRect().top;
              if (elementTop < windowHeight - elementVisible) {
                  reveal.classList.add('active');
              }
          });
      };

      window.addEventListener('scroll', revealOnScroll);
      // Trigger once on load
      revealOnScroll();

      // Parallax Effect for Hero
      window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          const heroBg = document.getElementById('hero-bg');
          if(heroBg) {
              heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.05)`;
          }
      });

      // Horizontal Scroll Buttons
      const slider = document.getElementById('sliderContainer');
      document.getElementById('slideLeft').onclick = () => slider.scrollBy({ left: -400, behavior: 'smooth' });
      document.getElementById('slideRight').onclick = () => slider.scrollBy({ left: 400, behavior: 'smooth' });

      // Popup Logic
      setTimeout(() => {
          const popup = document.getElementById('popup');
          const content = document.getElementById('popupContent');
          popup.classList.remove('opacity-0', 'pointer-events-none');
          content.classList.remove('scale-95');
          content.classList.add('scale-100');
      }, 5000);

      function closePopup() {
          const popup = document.getElementById('popup');
          popup.classList.add('opacity-0', 'pointer-events-none');
      }

      // Navbar blur effect
      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 50) {
              nav.classList.add('py-2');
              nav.classList.remove('pt-6');
          } else {
              nav.classList.remove('py-2');
              nav.classList.add('pt-6');
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
      

<div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/stardust.png\')'}}></div>

<nav className="fixed z-50 w-full transition-all duration-300 px-6" id="navbar">
<div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border px-6 py-3 flex items-center justify-between rounded-none border-b border-sea-100/20 bg-white/80 backdrop-blur-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-sea-800 rounded-full flex items-center justify-center text-white shadow-lg shadow-sea-800/30">
<i className="w-5 h-5" data-lucide="palm-tree"></i>
</div>
<span className="text-xl font-serif font-bold text-sea-900 tracking-tight">
            Tropical
            <span className="text-sea-500">Asset</span>
</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-sea-700 transition relative group" href="#home">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sea-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-sea-700 transition relative group" href="#about">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sea-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-sea-700 transition relative group" href="#portfolio">
            Villas
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sea-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-sea-700 transition relative group" href="#insights">
            Insights
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sea-400 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 font-serif italic text-lg text-sea-900 hover:text-sea-600 transition relative" href="#contact">
            Inquire
            <span className="block w-8 h-[1px] bg-sea-900"></span>
</a>
<button className="lg:hidden p-2 text-sea-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden torn-bottom bg-sand-100" id="home">

<div className="absolute inset-0 z-0">
<img alt="Tropical Beach" className="w-full h-full object-cover opacity-90 scale-105" id="hero-bg" src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&amp;w=2800&amp;auto=format&amp;fit=crop" style={{transform: 'translateY(0px) scale(1.05)'}}/>
<div className="absolute inset-0 bg-gradient-to-r from-sea-900/60 via-sea-800/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-sea-900/50 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center mt-10">
<div className="lg:col-span-7 space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg animate-float">
<span className="w-2 h-2 rounded-full bg-sea-300 animate-pulse"></span>
<span className="text-xs font-bold tracking-widest uppercase">
              Koh Phangan, Thailand
            </span>
</div>
<h1 className="relative z-10">
<span className="block md:text-9xl leading-[0.8] text-7xl font-bold text-white tracking-tighter font-serif">
              WILD
            </span>
<span className="block text-6xl md:text-8xl font-serif italic text-sea-200 ml-2 md:ml-16 leading-[0.9] opacity-90">
              Luxury
            </span>
<div className="flex items-start gap-4 ml-4 md:ml-32 mt-2">
<span className="font-hand text-3xl text-sea-300 -rotate-12 mt-4 decoration-wavy underline">
                by the
              </span>
<span className="text-7xl md:text-9xl font-serif font-bold text-transparent text-stroke-white leading-[0.8] opacity-80" style={{WebkitTextStroke: '2px rgba(255,255,255,0.8)'}}>
                SEA.
              </span>
</div>
</h1>
<p className="text-xl md:text-2xl max-w-lg leading-relaxed drop-shadow-md font-serif italic text-white/90 mix-blend-overlay">
            Curated investment portfolios in Thailand's most preserved island
            paradise. Secure, managed, and breathtaking.
          </p>
<div className="flex flex-col sm:flex-row gap-5 pt-4">
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-sand-100 hover:bg-white text-sea-900 text-lg font-serif italic rounded-full transition shadow-xl hover:shadow-2xl hover:-translate-y-1 group" href="#portfolio">
<span>Explore Collection</span>
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<button className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-transparent border border-white/40 hover:bg-white/10 backdrop-blur-sm text-white text-lg font-serif rounded-full transition">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Watch Film</span>
</button>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block relative reveal reveal-delay-2 animate-float-delayed active">
<div className="relative bg-sand-50 p-4 pb-12 shadow-2xl rotate-3 hover:rotate-1 transition duration-500 transform-gpu">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-1 z-20"></div>
<div className="relative overflow-hidden aspect-[4/5] mb-6 grayscale hover:grayscale-0 transition duration-700">
<img alt="Villa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="bg-sea-900 text-white px-3 py-1 text-xs font-serif italic">
                  The Azure Cliff
                </span>
</div>
</div>
<div className="flex justify-between items-end px-2">
<div className="font-hand text-sea-800 text-xl -rotate-2">
                Available Now
              </div>
<p className="text-2xl font-serif font-bold text-sea-900">฿18.5M</p>
</div>
</div>
</div>
</div>

</header>

<section className="py-24 bg-sand-100 relative">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<span className="font-hand text-3xl text-sea-600 rotate-2 inline-block mb-4">
          Welcome to paradise
        </span>
<h2 className="text-4xl md:text-5xl font-serif text-sea-900 leading-tight mb-8">
          We bridge the gap between
          <span className="brush-highlight">global capital</span>
          and
          <span className="italic text-sea-700">island serenity.</span>
</h2>
<p className="text-lg text-slate-600 font-light leading-relaxed">
          Tropical Asset Group is more than a real estate agency. We are your
          on-ground partners, legal safeguards, and lifestyle architects on the
          island of Koh Phangan.
        </p>
</div>

<div className="absolute top-20 left-10 opacity-20 rotate-12 hidden lg:block">
<svg fill="none" height="100" stroke="#0d9488" strokeWidth="2" viewbox="0 0 100 100" width="100">
<path d="M10,50 Q25,25 50,50 T90,50"></path>
<path d="M10,60 Q25,35 50,60 T90,60"></path>
<path d="M10,70 Q25,45 50,70 T90,70"></path>
</svg>
</div>
</section>

<section className="py-20 bg-white torn-top torn-bottom relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[600px] w-full reveal">

<div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-[2rem] shadow-xl rotate-3 z-10">
<img className="w-full h-full object-cover hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 left-0 w-2/3 h-2/3 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl -rotate-2 z-20">
<img className="w-full h-full object-cover hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-10 right-10 z-30 bg-sea-300 text-sea-900 rounded-full w-24 h-24 flex items-center justify-center font-bold text-center text-sm shadow-lg animate-float-delayed">
              High
              
              ROI
            </div>
</div>

<div className="space-y-8 reveal reveal-delay-2">
<div className="inline-block border-b-2 border-sea-300 pb-1 mb-2">
<span className="text-sm font-bold tracking-widest uppercase text-sea-800">
                Our Philosophy
              </span>
</div>
<h2 className="text-5xl font-serif text-slate-800 leading-[1.1]">
              Invest where the
              
              <span className="text-sea-600 italic">palm trees</span>
              sway.
            </h2>
<p className="text-slate-500 text-lg font-light leading-relaxed">
              Koh Phangan isn't just a destination; it's a lifestyle shift.
              While you enjoy the pristine beaches and yoga retreats, your asset
              appreciates in one of Southeast Asia's most resilient markets.
            </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div className="space-y-2">
<h3 className="text-3xl font-serif text-sea-700">8-12%</h3>
<p className="text-sm text-slate-500 uppercase tracking-wide border-t border-slate-200 pt-2">
                  Avg. Annual Returns
                </p>
</div>
<div className="space-y-2">
<h3 className="text-3xl font-serif text-sea-700">100%</h3>
<p className="text-sm text-slate-500 uppercase tracking-wide border-t border-slate-200 pt-2">
                  Legal Compliance
                </p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sea-700 font-serif italic text-lg hover:text-sea-900 transition group" href="#contact">
              Read our investment guide
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-sea-900 relative overflow-hidden" id="portfolio">

<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

<svg className="absolute bottom-0 left-0 w-[200%] h-auto text-white/5 animate-wave" fill="currentColor" viewbox="0 0 1440 320">
<path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fillOpacity="1"></path>
</svg>
</div>
<div className="relative max-w-7xl mx-auto px-6 z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<h2 className="text-5xl font-serif text-white mb-4">
              Curated Collection
            </h2>
<p className="text-sea-200 font-light max-w-lg">
              Handpicked villas offering the perfect blend of ROI and personal
              paradise.
            </p>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<button className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-sea-900 transition" id="slideLeft">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-white text-sea-900 flex items-center justify-center hover:bg-sea-100 transition shadow-lg shadow-white/10" id="slideRight">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar scroll-smooth" id="sliderContainer">

<div className="min-w-[300px] md:min-w-[360px] snap-center group">
<div className="relative aspect-[3/5] overflow-hidden rounded-t-full bg-sand-200">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1510662145379-13537db782dc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="inline-block bg-white text-sea-900 px-6 py-3 font-serif text-lg italic shadow-lg -rotate-1 group-hover:rotate-0 transition">
                  Azure Horizon
                </span>
</div>
</div>
<div className="text-center mt-4 space-y-1">
<p className="text-xs font-bold tracking-widest uppercase text-sea-300">
                Haad Salad
              </p>
<p className="text-white/60 font-serif">Starting ฿12M</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center group">
<div className="relative aspect-[3/5] overflow-hidden rounded-t-full bg-sand-200">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="inline-block bg-white text-sea-900 px-6 py-3 font-serif text-lg italic shadow-lg rotate-1 group-hover:rotate-0 transition">
                  Crystal Bay
                </span>
</div>
</div>
<div className="text-center mt-4 space-y-1">
<p className="text-xs font-bold tracking-widest uppercase text-sea-300">
                Srithanu
              </p>
<p className="text-white/60 font-serif">Starting ฿15.5M</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center group">
<div className="relative aspect-[3/5] overflow-hidden rounded-t-full bg-sand-200">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="inline-block bg-white text-sea-900 px-6 py-3 font-serif text-lg italic shadow-lg -rotate-1 group-hover:rotate-0 transition">
                  The Canopy
                </span>
</div>
</div>
<div className="text-center mt-4 space-y-1">
<p className="text-xs font-bold tracking-widest uppercase text-sea-300">
                Hin Kong
              </p>
<p className="text-white/60 font-serif">Starting ฿9.8M</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[360px] snap-center group">
<div className="relative aspect-[3/5] overflow-hidden rounded-t-full bg-sand-200">
<img className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-6ad4c4225c3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
<div className="absolute bottom-8 left-0 right-0 text-center">
<span className="inline-block bg-white text-sea-900 px-6 py-3 font-serif text-lg italic shadow-lg rotate-1 group-hover:rotate-0 transition">
                  Cape Residence
                </span>
</div>
</div>
<div className="text-center mt-4 space-y-1">
<p className="text-xs font-bold tracking-widest uppercase text-sea-300">
                Thong Nai Pan
              </p>
<p className="text-white/60 font-serif">Starting ฿22M</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sand-200 torn-top torn-bottom relative z-10" id="insights">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="reveal">
<span className="font-hand text-2xl text-sea-600 block mb-2">
              Why Koh Phangan?
            </span>
<h2 className="text-4xl font-serif text-sea-900">Market Insights</h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-12 border-t border-sea-900/10 pt-12">

<div className="group reveal reveal-delay-1">
<span className="block text-6xl font-serif text-sea-200 group-hover:text-sea-600 transition duration-500">
              01
            </span>
<h3 className="text-2xl font-serif font-medium text-sea-900 mt-4 mb-2">
              Steady Growth
            </h3>
<p className="text-slate-600 font-light leading-relaxed">
              Land prices have seen a consistent 10-15% growth year-on-year.
              Infrastructure improves while nature remains the priority.
            </p>
</div>

<div className="group reveal reveal-delay-2">
<span className="block text-6xl font-serif text-sea-200 group-hover:text-sea-600 transition duration-500">
              02
            </span>
<h3 className="text-2xl font-serif font-medium text-sea-900 mt-4 mb-2">
              High Occupancy
            </h3>
<p className="text-slate-600 font-light leading-relaxed">
              Driven by the global wellness and digital nomad community. The
              island is no longer just seasonal; it's a year-round haven.
            </p>
</div>

<div className="group reveal reveal-delay-3">
<span className="block text-6xl font-serif text-sea-200 group-hover:text-sea-600 transition duration-500">
              03
            </span>
<h3 className="text-2xl font-serif font-medium text-sea-900 mt-4 mb-2">
              Secure Title
            </h3>
<p className="text-slate-600 font-light leading-relaxed">
              We provide comprehensive due diligence. From Nor Sor 3 Gor to
              Chanote titles, your ownership structure is our priority.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-sea-800 relative overflow-hidden" id="contact">

<div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-white space-y-8 reveal">
<h2 className="text-5xl md:text-6xl font-serif leading-none">
              Start your
              <br/>
<span className="text-sea-300 italic">island journey</span>
</h2>
<p className="text-sea-100 text-lg font-light max-w-md">
              Whether you are looking for a holiday home or a high-yield
              investment, our team is ready to guide you.
            </p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="text-xs text-sea-300 uppercase tracking-wider">
                    Call Us
                  </p>
<p className="text-xl font-serif">+33 6 27 30 65 65</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-xs text-sea-300 uppercase tracking-wider">
                    Email Us
                  </p>
<p className="text-xl font-serif">invest@tropicalasset.com</p>
</div>
</div>
</div>
</div>

<div className="bg-sand-50 p-8 md:p-10 rounded-[2rem] shadow-2xl relative reveal reveal-delay-2">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur rotate-2 shadow-sm z-20"></div>
<h3 className="text-2xl font-serif text-sea-900 mb-6">
              Request Portfolio Access
            </h3>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-sea-800 uppercase tracking-wide mb-1">
                    First Name
                  </label>
<input className="w-full px-4 py-3 bg-white border border-sand-200 rounded-lg focus:border-sea-500 focus:ring-2 focus:ring-sea-200 outline-none transition font-serif" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-sea-800 uppercase tracking-wide mb-1">
                    Last Name
                  </label>
<input className="w-full px-4 py-3 bg-white border border-sand-200 rounded-lg focus:border-sea-500 focus:ring-2 focus:ring-sea-200 outline-none transition font-serif" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-sea-800 uppercase tracking-wide mb-1">
                  Email
                </label>
<input className="w-full px-4 py-3 bg-white border border-sand-200 rounded-lg focus:border-sea-500 focus:ring-2 focus:ring-sea-200 outline-none transition font-serif" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-sea-800 uppercase tracking-wide mb-1">
                  Interest
                </label>
<select className="w-full px-4 py-3 bg-white border border-sand-200 rounded-lg focus:border-sea-500 focus:ring-2 focus:ring-sea-200 outline-none transition font-serif text-slate-600">
<option>Buying a Villa</option>
<option>Land Investment</option>
<option>Development Project</option>
</select>
</div>
<button className="w-full font-serif text-lg italic py-4 rounded-xl transition shadow-lg hover:shadow-sea-500/30 mt-4 border border-sea-400 bg-sea-900 hover:bg-white hover:text-sea-900" type="button">
                Unlock Opportunities
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-sea-950 text-sea-100 py-16 torn-top relative z-20">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-sea-400" data-lucide="palm-tree"></i>
<span className="text-2xl font-serif text-white">TropicalAsset</span>
</div>
<p className="text-sea-300/60 max-w-sm font-light leading-relaxed">
            Connecting international investors to the hidden gems of Koh
            Phangan. Registered in England &amp; Wales – Company No. 16776440.
          </p>
</div>
<div>
<h4 className="font-serif text-white text-lg mb-4">Explore</h4>
<ul className="space-y-2 text-sea-300/60">
<li>
<a className="hover:text-sea-300 transition" href="#">Portfolio</a>
</li>
<li>
<a className="hover:text-sea-300 transition" href="#">
                Investment Process
              </a>
</li>
<li>
<a className="hover:text-sea-300 transition" href="#">
                About the Island
              </a>
</li>
<li>
<a className="hover:text-sea-300 transition" href="#">Contact</a>
</li>
</ul>
</div>
<div>
<h4 className="font-serif text-white text-lg mb-4">Legal</h4>
<ul className="space-y-2 text-sea-300/60">
<li>
<a className="hover:text-sea-300 transition" href="#">
                Privacy Policy
              </a>
</li>
<li>
<a className="hover:text-sea-300 transition" href="#">
                Terms of Service
              </a>
</li>
<li>
<a className="hover:text-sea-300 transition" href="#">Disclaimer</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-sea-900 text-center text-xs text-sea-800">
        © 2025 Tropical Asset Group Ltd. Design inspired by the sea.
      </div>
</footer>

<div className="fixed flex transition-opacity duration-500 z-[100] top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center" id="popup">
<div className="transform transition-transform duration-500 w-full max-w-md rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl" id="popupContent">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-800" onclick="closePopup()">
<svg className="lucide lucide-x w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(30, 41, 59)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="text-center mb-6">
<span className="font-hand text-xl text-sea-600 block -rotate-2">
            Don't miss out
          </span>
<h3 className="text-3xl font-serif text-sea-900">
        Exclusive Island Guide
      </h3>
<p className="text-slate-500 mt-2 text-sm font-light">
        Download our 2025 Market Report for free.
      </p>
</div>
<div className="h-1 w-20 bg-sea-200 mx-auto mb-6 rounded-full"></div>
<button className="w-full py-3 bg-sea-700 text-white rounded-lg font-serif hover:bg-sea-800 transition">
          Download Now
        </button>
</div>
</div>


    </>
  );
}
