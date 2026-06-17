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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
mint: {
50: '#F5FAF8',
100: '#EBF7F4',
200: '#D1EBE5',
300: '#A3D9CE',
900: '#134E48',
},
sand: {
100: '#F3EFE9',
200: '#E6DDD0',
300: '#E3C9A6',
400: '#D4B996',
500: '#C0A076',
600: '#A48255',
},
dark: {
900: '#0F172A',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'spin-slow': 'spin 12s linear infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%) skewX(-12deg)' },
'100%': { transform: 'translateX(200%) skewX(-12deg)' },
}
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' },
'.backface-hidden': { backfaceVisibility: 'hidden' },
})
}
]
}



        // Init Lucide Icons
        lucide.createIcons();

        // 3D Tilt Effect Logic (Adapted from SaaS inspiration)
        const heroVisual = document.getElementById('hero-visual');
        if(heroVisual) {
            heroVisual.addEventListener('mousemove', (e) => {
                const rect = heroVisual.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / 25) * -1;
                const rotateY = (x - centerX) / 25;
                heroVisual.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            heroVisual.addEventListener('mouseleave', () => {
                heroVisual.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        }

        // Scroll Reveal Animation (Intersection Observer)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect for Background Blobs
        const blobs = document.querySelectorAll('.parallax-blob');
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            blobs.forEach(blob => {
                const speed = blob.getAttribute('data-speed');
                blob.style.transform = `translateY(${scrollY * speed}px)`;
            });
            
            // Navbar background transition
            const navbarBg = document.getElementById('nav-bg');
            if (scrollY > 50) {
                navbarBg.classList.remove('opacity-0');
            } else {
                navbarBg.classList.add('opacity-0');
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="parallax-blob blob w-[30rem] h-[30rem] rounded-full bg-sand-200 top-[-5rem] left-[-5rem] mix-blend-multiply opacity-50" data-speed="0.05" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-blob blob w-[40rem] h-[40rem] rounded-full bg-mint-200 bottom-0 right-[-10rem] mix-blend-multiply opacity-50" data-speed="0.08" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-blob blob w-[25rem] h-[25rem] rounded-full bg-blue-100 top-[40%] left-[30%] mix-blend-multiply opacity-30" data-speed="0.03" style={{transform: 'translateY(0px)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 p-6 md:px-12 transition-all duration-300" id="navbar">
<div className="transition-opacity duration-300 border-white/20 border-b absolute top-0 right-0 bottom-0 left-0 backdrop-blur-md" id="nav-bg"></div>
<div className="flex z-10 max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex flex-col gap-1 group cursor-pointer reveal-element delay-100 active">
<div className="flex gap-1 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1 h-1 rounded-full bg-neutral-800"></div>
<div className="w-1 h-1 rounded-full bg-neutral-800"></div>
<div className="w-1 h-1 rounded-full bg-neutral-800"></div>
</div>
<span className="uppercase text-xl font-medium text-neutral-900 tracking-[0.2em] font-serif">CharisLooks</span>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600 reveal-element delay-200 active">
<a className="hover:text-neutral-900 transition-colors" href="#">Products</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Science</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Reviews</a>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-semibold border-b-2 border-neutral-900 pb-0.5 hover:text-sand-500 hover:border-sand-500 transition-all reveal-element delay-300 active">
                Sign In
            </button>
</div>
</nav>

<main className="min-h-screen flex overflow-hidden w-full pt-32 pb-20 relative perspective-1000 items-center">
<div className="md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start max-w-xl">

<div className="reveal-element delay-100 inline-flex gap-2 hover:bg-white/60 transition-colors cursor-default active text-xs font-medium text-neutral-600 bg-white/40 border-white/60 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sand-500"></span>
</span>
                    New: Hyaluron Complex 4.0
                </div>
<h1 className="reveal-element delay-200 md:text-6xl lg:text-7xl leading-[1.1] active text-5xl font-bold text-neutral-900 tracking-tight font-serif mb-6">
                    The skincare<br/>
                    that makes you <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 to-sand-600">glow.</span>
</h1>
<p className="reveal-element delay-300 text-lg text-neutral-500 font-medium mb-10 leading-relaxed max-w-md active">
                    Clinically proven to hydrate, repair and protect. Experience the science of nature in every drop.
                </p>
<div className="reveal-element delay-400 flex flex-col sm:flex-row items-center gap-6 mb-12 active">

<button className="shiny-cta group">
<span className="">
                            Start Your Routine
                            <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="flex items-center gap-3 text-neutral-500 hover:text-neutral-900 font-medium transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:border-sand-300 transition-colors shadow-sm">
<svg className="translate-x-0.5" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
                        Watch the ritual
                    </button>
</div>

<div className="reveal-element delay-500 flex items-center gap-6 pt-8 border-t border-neutral-200/50 w-full active">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-mint-50 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-mint-50 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop" style={{}}/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-mint-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop" style={{}}/>
</div>
<div>
<div className="flex gap-0.5 text-sand-500 mb-0.5">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-xs font-semibold text-neutral-800">Trusted by 4,000+ faces</p>
</div>
</div>
</div>

<div className="reveal-element delay-300 relative w-full h-[600px] flex items-center justify-center tilt-card cursor-pointer group active" id="hero-visual" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-sand-200 via-white to-mint-200 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>

<div className="glass flex flex-col transition-all duration-300 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] w-[380px] h-[520px] border-white/60 border rounded-[2.5rem] pt-4 pr-4 pb-4 pl-4 relative shadow-2xl items-center justify-between">

<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
<div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur text-[10px] font-bold tracking-widest uppercase text-neutral-900 shadow-sm border border-white/50">Summer Edition</div>
<div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm text-sand-500">
<svg className="" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</div>
</div>

<div className="absolute inset-2 rounded-[2rem] overflow-hidden">
<div className="bg-gradient-to-t from-sand-900/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Model" className="transform group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51a51c7f-bd95-43ab-8499-9707501ef863_1600w.png"/>

</div>

<div className="absolute -right-12 top-24 glass p-3 rounded-2xl flex items-center gap-3 w-56 transform translate-z-10 transition-transform duration-300 group-hover:translate-x-2 shadow-lg animate-float">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0 border border-neutral-100">
<img alt="Bottle" className="h-10 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=100&amp;h=150&amp;fit=crop"/>
</div>
<div className="">
<p className="text-xs font-bold text-neutral-900">Hydration Serum</p>
<p className="text-[10px] text-neutral-500">Restores barrier function</p>
</div>
</div>

<div className="-left-12 glass flex gap-3 transform translate-z-10 transition-transform duration-300 group-hover:-translate-x-2 animate-float-delayed rounded-2xl pt-3 pr-3 pb-3 pl-3 absolute bottom-32 shadow-lg gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-2">
<div className="flex text-[10px] font-bold text-neutral-700 w-8 h-8 border-white border-2 rounded-full items-center justify-center">98%</div>
</div>
<div className="">
<p className="text-xs font-bold text-neutral-900">Customer Satisfaction</p>
<div className="flex text-sand-400 w-2 h-2 gap-0.5 mt-0.5">
<svg className="fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 glass p-2 rounded-xl flex justify-between items-center z-20">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
</div>
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Swipe</span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 mt-8 lg:mt-0 flex flex-wrap justify-center gap-8 lg:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 reveal-element delay-500 active">
<span className="text-xl font-serif font-bold italic tracking-tighter text-neutral-800 cursor-default hover:scale-105 transition-transform">VOGUE</span>
<span className="text-xl font-serif font-bold tracking-widest text-neutral-800 cursor-default hover:scale-105 transition-transform">ELLE</span>
<span className="text-xl font-serif font-bold tracking-tighter text-neutral-800 cursor-default hover:scale-105 transition-transform">Harper's BAZAAR</span>
<span className="text-xl font-serif font-bold italic tracking-tight text-neutral-800 cursor-default hover:scale-105 transition-transform">Marie Claire</span>
</div>
</div>
</main>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16 reveal-element">
<span className="text-xs font-bold tracking-[0.3em] text-sand-500 uppercase">The Science</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mt-4 mb-4">Formula for Radiance</h2>
<p className="text-neutral-500 max-w-2xl mx-auto">Our proprietary blend of botanicals and clinical actives delivers results you can see and feel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="reveal-element md:col-span-2 md:row-span-2 glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-xl hover:shadow-mint-200/50 transition-all duration-500 border border-white/60">
<div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-mint-200 to-transparent rounded-full blur-[80px] group-hover:bg-mint-300/30 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<svg className="text-mint-900" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Clean Active Complex™</h3>
<p className="text-neutral-500 text-lg leading-relaxed max-w-md">
                            Bio-engineered ingredients that mimic your skin's natural structure. 100% vegan, cruelty-free, and devoid of parabens.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-4">
<div className="bg-white/50 backdrop-blur border border-white rounded-2xl p-4 group-hover:border-mint-300 transition-colors">
<div className="text-xs font-bold uppercase text-neutral-400 mb-1 tracking-wider">Absorption</div>
<div className="text-2xl font-serif font-bold text-mint-900 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
</span>
                                2x Faster
                            </div>
</div>
<div className="bg-white/50 backdrop-blur border border-white rounded-2xl p-4 group-hover:border-sand-300 transition-colors">
<div className="text-xs font-bold uppercase text-neutral-400 mb-1 tracking-wider">Hydration</div>
<div className="text-2xl font-serif font-bold text-sand-600">+142%</div>
</div>
</div>
</div>
</div>

<div className="reveal-element delay-200 glass rounded-[2rem] p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-white/60">
<div className="absolute inset-0 bg-gradient-to-t from-sand-100/50 to-transparent"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
<svg className="text-sand-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded-md">AI SCAN</span>
</div>
<h3 className="text-lg font-bold text-neutral-900 mb-2">Smart Analysis</h3>
<p className="text-sm text-neutral-500 mb-4">Personalized routine based on your unique skin profile.</p>

<div className="bg-neutral-900 rounded-lg p-3 font-mono text-[10px] text-neutral-300 shadow-inner overflow-hidden">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
</div>
<div className="space-y-1">
<div className="text-mint-300">&gt; Detecting skin_type...</div>
<div>&gt; Type: Combination</div>
<div>&gt; Concerns: ['Dryness', 'Glow']</div>
<div className="text-sand-300">&gt; Generating routine...</div>
</div>
</div>
</div>
</div>

<div className="reveal-element delay-300 glass rounded-[2rem] p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-white/60">
<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-mint-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="text-lg font-bold text-neutral-900 mb-2">Zero Waste</h3>
<p className="text-sm text-neutral-500">Refillable glass packaging. Carbon neutral shipping worldwide.</p>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-orange-500 rounded-full animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
</div>
<span className="text-xs font-bold text-neutral-900">85%</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12 px-6 mt-12 relative z-10 reveal-element">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<div className="flex gap-0.5">
<div className="w-1 h-1 rounded-full bg-neutral-400"></div>
<div className="w-1 h-1 rounded-full bg-neutral-400"></div>
</div>
<span className="font-serif font-bold text-neutral-700 tracking-widest">CHARISLOOKS</span>
</div>
<p>© 2024 CharisLooks Beauty. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-neutral-900 transition-colors" href="#">TikTok</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
