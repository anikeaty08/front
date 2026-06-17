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
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
extend: {
colors: {
pastel: {
bg: '#FFF5F5',      /* Warm blush base */
100: '#FDE2E4',     /* Soft Rose */
200: '#FAD2E1',     /* Pale Pink */
300: '#E2ECE9',     /* Mint Cream */
400: '#CDDAFD',     /* Periwinkle */
500: '#BEE1E6',     /* Icy Blue */
800: '#5E5466',     /* Dark Lilac Grey for text */
900: '#2D2434',     /* Deep Purple Grey for headings */
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 10s ease-in-out 2s infinite',
'float-slow': 'float 12s ease-in-out 1s infinite',
'mist-rise': 'mistRise 4s ease-out infinite',
'mist-rise-slow': 'mistRise 6s ease-out 1s infinite',
'scent-flow': 'scentFlow 20s linear infinite',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) scale(1)' },
'50%': { transform: 'translateY(-20px) scale(1.05)' },
},
mistRise: {
'0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
'20%': { opacity: '0.6' },
'100%': { transform: 'translateY(-100px) scale(1.5)', opacity: '0' },
},
scentFlow: {
'0%': { transform: 'rotate(0deg) scale(1)' },
'33%': { transform: 'rotate(120deg) scale(1.2)' },
'66%': { transform: 'rotate(240deg) scale(0.8)' },
'100%': { transform: 'rotate(360deg) scale(1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Scroll Reveal Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<div className="custom-cursor hidden md:block" id="cursor"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden vapor-container">

<div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pastel-100 rounded-full animate-scent-flow opacity-70"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-pastel-400 rounded-full animate-scent-flow opacity-60" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>

<div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-pastel-300 rounded-full animate-float-slow opacity-50 mix-blend-multiply"></div>

<div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] bg-orange-100 rounded-full animate-float opacity-40 mix-blend-multiply"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center backdrop-blur-[4px]">
<div className="flex items-center gap-1 cursor-pointer hover-trigger">
<span className="text-xl tracking-tighter font-semibold text-pastel-900">AURA</span>
</div>
<div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-tight text-pastel-800/80">
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Discovery</a>
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Scents</a>
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Technology</a>
</div>
<button className="text-sm font-medium border border-white/50 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white hover:shadow-lg hover:shadow-pastel-200/50 transition-all duration-300 hover-trigger text-pastel-900">
            Shop Collection
        </button>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 z-10 perspective-[1000px]">

<div className="space-y-6 max-w-2xl mx-auto relative z-20 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="flex items-center justify-center gap-2 text-pastel-800/60 mb-4">
<span className="iconify" data-icon="lucide:wind" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-xs uppercase tracking-[0.2em]">The Art of Atmosphere</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-light text-pastel-900 leading-[0.9]">
                Breathe in <br/>
<span className="italic font-thin text-pastel-800/50">beauty.</span>
</h1>
<p className="text-lg text-pastel-800/70 font-light max-w-md mx-auto leading-relaxed">
                Transform your sanctuary with an invisible architecture of scent. Soft, silent, and wonderfully serene.
            </p>
</div>

<div className="relative mt-16 md:mt-24 w-full h-[400px] md:h-[500px] flex justify-center items-end opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>

<div className="relative w-32 md:w-40 h-64 md:h-80 group cursor-pointer hover-trigger">

<div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full flex justify-center">
<div className="w-12 h-12 bg-white/60 blur-xl rounded-full absolute animate-mist-rise"></div>
<div className="w-16 h-16 bg-pastel-200/40 blur-2xl rounded-full absolute top-4 animate-mist-rise-slow"></div>
<div className="w-8 h-8 bg-pastel-300/30 blur-lg rounded-full absolute top-2 animate-mist-rise" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="w-full h-full diffuser-body rounded-t-full rounded-b-[40px] relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-4">

<div className="absolute top-10 right-4 w-2 h-32 bg-gradient-to-b from-white/70 to-transparent opacity-60 rounded-full blur-[1px]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-pastel-100 rounded-full mt-4 blur-[0.5px]"></div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-1 bg-pastel-400 rounded-full shadow-[0_0_10px_1px_rgba(255,255,255,0.9)]"></div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-4 bg-pastel-900/10 blur-xl rounded-full transition-all duration-700 group-hover:w-16 group-hover:blur-2xl group-hover:opacity-50"></div>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="reveal flex flex-col items-center text-center space-y-4 group hover-trigger">
<div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-110 group-hover:bg-pastel-100/30">
<span className="iconify text-pastel-800" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-pastel-900">Cold-Air Diffusion</h3>
<p className="text-pastel-800/60 text-sm leading-relaxed max-w-xs">
                    Preserves the therapeutic integrity of essential oils without heat or water.
                </p>
</div>

<div className="reveal flex flex-col items-center text-center space-y-4 group hover-trigger" style={{transitionDelay: '0.1s'}}>
<div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-110 group-hover:bg-pastel-400/30">
<span className="iconify text-pastel-800" data-icon="lucide:volume-x" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-pastel-900">Whisper Quiet</h3>
<p className="text-pastel-800/60 text-sm leading-relaxed max-w-xs">
                    Designed to disappear into the background, leaving only pure fragrance.
                </p>
</div>

<div className="reveal flex flex-col items-center text-center space-y-4 group hover-trigger" style={{transitionDelay: '0.2s'}}>
<div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-110 group-hover:bg-pastel-300/30">
<span className="iconify text-pastel-800" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-pastel-900">Smart Control</h3>
<p className="text-pastel-800/60 text-sm leading-relaxed max-w-xs">
                    Adjust intensity and schedules effortlessly from your device.
                </p>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
<div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
<div className="reveal order-2 md:order-1 relative">

<div className="relative w-full aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden group">
<img alt="Minimalist Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-pastel-100/20 to-transparent mix-blend-overlay"></div>

<div className="absolute inset-4 border border-white/40 rounded-[2.5rem] backdrop-blur-[1px]"></div>
</div>
</div>
<div className="reveal order-1 md:order-2 space-y-8">
<span className="text-xs font-semibold tracking-widest text-pastel-800/50 uppercase">The Essence</span>
<h2 className="text-4xl md:text-5xl tracking-tighter font-light text-pastel-900">
                    Designed for <br/> modern living.
                </h2>
<p className="text-lg text-pastel-800/70 font-light leading-relaxed">
                    We believe fragrance is an extension of interior design. Our signature diffusers blend minimalist aesthetics with powerful nebulizing technology, ensuring your space feels as curated as it looks.
                </p>
<div className="pt-4">
<button className="flex items-center gap-3 text-pastel-900 font-medium tracking-tight group hover-trigger">
                        Explore Our Philosophy
                        <span className="w-8 h-8 rounded-full border border-pastel-900/20 flex items-center justify-center group-hover:bg-pastel-900 group-hover:text-white transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10">
<div className="px-6 md:px-16 mb-12 flex justify-between items-end">
<h2 className="text-3xl tracking-tighter font-light text-pastel-900 reveal">Signature Blends</h2>
<div className="flex gap-2 reveal">
<button className="w-10 h-10 rounded-full border border-pastel-900/10 bg-white/30 flex items-center justify-center hover:bg-white transition-colors hover-trigger">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
</button>
<button className="w-10 h-10 rounded-full border border-pastel-900/10 bg-white/30 flex items-center justify-center hover:bg-white transition-colors hover-trigger">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto px-6 md:px-16 pb-12 snap-x hide-scroll">

<div className="min-w-[300px] md:min-w-[380px] group cursor-pointer hover-trigger reveal snap-center">
<div className="aspect-[3/4] bg-white rounded-[2rem] relative overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-pastel-900/5">

<img alt="Santal" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1615634260167-c8c9c3138884?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-100/50 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 z-20">
<h3 className="text-2xl font-medium tracking-tight text-pastel-900">Santal &amp; Grey</h3>
<p className="text-sm text-pastel-800/70 mt-1">Sandalwood, Cedar, Musk</p>
</div>
<div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium tracking-wide text-pastel-900">
                            $45
                        </span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] group cursor-pointer hover-trigger reveal snap-center" style={{transitionDelay: '0.1s'}}>
<div className="aspect-[3/4] bg-white rounded-[2rem] relative overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-pastel-900/5">

<img alt="White Tea" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1605265058749-78afeb7b57bd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 z-20">
<h3 className="text-2xl font-medium tracking-tight text-pastel-900">White Tea</h3>
<p className="text-sm text-pastel-800/70 mt-1">Bergamot, Jasmine, Ginger</p>
</div>
<div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium tracking-wide text-pastel-900">
                            $45
                        </span>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] group cursor-pointer hover-trigger reveal snap-center" style={{transitionDelay: '0.2s'}}>
<div className="aspect-[3/4] bg-white rounded-[2rem] relative overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-pastel-900/5">

<img alt="Wild Sage" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616604847460-e85a9651a90c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-pastel-300/40 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 z-20">
<h3 className="text-2xl font-medium tracking-tight text-pastel-900">Wild Sage</h3>
<p className="text-sm text-pastel-800/70 mt-1">Sage, Sea Salt, Eucalyptus</p>
</div>
<div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium tracking-wide text-pastel-900">
                            $45
                        </span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white/60 backdrop-blur-lg pt-20 pb-10 px-6 md:px-16 border-t border-pastel-900/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-6 max-w-sm">
<span className="text-2xl tracking-tighter font-semibold text-pastel-900 block">AURA</span>
<p className="text-sm text-pastel-800/70 leading-relaxed">
                    Elevating interiors through the invisible art of scent. Experience a new standard of home fragrance.
                </p>
<div className="flex gap-4 text-pastel-800/50">
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-pastel-900 transition-colors hover-trigger" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm">
<div className="space-y-4">
<h4 className="font-semibold text-pastel-900">Shop</h4>
<ul className="space-y-2 text-pastel-800/70">
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Diffusers</a></li>
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Oils</a></li>
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Sets</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-semibold text-pastel-900">Company</h4>
<ul className="space-y-2 text-pastel-800/70">
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Our Story</a></li>
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Sustainability</a></li>
<li><a className="hover:text-pastel-900 transition-colors hover-trigger" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-pastel-900/5 flex flex-col md:flex-row justify-between items-center text-xs text-pastel-800/50 gap-4">
<p>© 2024 Aura Scents. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-pastel-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-pastel-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
