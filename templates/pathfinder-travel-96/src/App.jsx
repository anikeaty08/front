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
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
surface: "#F9FAFB",
"surface-dark": "#0C0C0C",
"brand-gold": "#D4AF37",
"paper": "#FDFBF7",
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



    (function() {
        const ANIMATION_DURATION = 2000;
        
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseFloat(stat.dataset.target);
                const isDecimal = stat.dataset.decimal === 'true';
                const duration = ANIMATION_DURATION;
                const startTime = performance.now();
                
                function easeOutExpo(t) {
                    return t === 1 ? 1 : 1 - Math.pow(2, -5 * t);
                }
                
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutExpo(progress);
                    const currentValue = easedProgress * target;
                    
                    if (isDecimal) {
                        stat.textContent = currentValue.toFixed(1);
                    } else {
                        stat.textContent = Math.floor(currentValue);
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                
                requestAnimationFrame(update);
            });
        }
        
        const statsSection = document.querySelector('.stat-number').closest('section');
        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(statsSection);
        }
    })();
  


        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.destination-item');
            const img = document.getElementById('dynamic-image');
            const caption = document.getElementById('dynamic-caption');
            
            items.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    const newSrc = this.getAttribute('data-image');
                    const newCaption = this.getAttribute('data-caption');
                    
                    if (img.src !== newSrc) {
                        img.style.opacity = '0';
                        caption.style.opacity = '0';
                        
                        setTimeout(() => {
                            img.src = newSrc;
                            caption.textContent = newCaption;
                            img.onload = () => {
                                img.style.opacity = '1';
                                caption.style.opacity = '1';
                            };
                        }, 300);
                    }
                });
            });
        });
    


        function toggleGear(btn) {
            btn.classList.toggle('packed');
            btn.classList.toggle('border-brand-gold');
            btn.classList.toggle('bg-stone-800');
            btn.classList.toggle('bg-stone-700');
            
            const total = 6;
            const packed = document.querySelectorAll('.gear-item.packed').length;
            const percent = Math.round((packed / total) * 100);
            
            document.getElementById('progress-text').innerText = percent + '%';
            document.getElementById('progress-bar').style.width = percent + '%';
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
      

<div className="fixed inset-0 z-[100] hidden modal-backdrop flex items-center justify-center opacity-0 transition-opacity duration-300" id="videoModal">
<div className="relative w-full max-w-5xl aspect-video mx-4 md:mx-10 bg-black rounded-lg overflow-hidden shadow-2xl transform scale-95 transition-transform duration-300" id="modalContent">
<button className="absolute top-4 right-4 z-10 text-white hover:text-stone-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm" onclick="closeModal()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" id="videoFrame" src="" title="YouTube video player"></iframe>
</div>
</div>

<nav className="fixed z-50 w-full top-0 transition-all duration-500 backdrop-blur-md bg-black/10 border-b border-white/10" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center text-white">
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-stone-300 transition-colors font-sans" href="#">Destinations</a>
<a className="hover:text-stone-300 transition-colors font-sans" href="#">Journal</a>
<a className="hover:text-stone-300 transition-colors font-sans" href="#">Membership</a>
</div>
<div className="md:hidden text-white"><svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></div>
<div className="absolute left-1/2 transform -translate-x-1/2">
<a className="flex items-center gap-2 text-2xl tracking-tighter font-instrument-serif font-normal" href="#">
<svg className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" style={{}}></path><circle className="" cx="12" cy="12" r="10" style={{}}></circle></svg> Meridian
</a>
</div>
<div className="flex items-center space-x-6" style={{}}>
<a className="hidden md:block text-sm font-medium hover:text-stone-300 transition-colors font-sans" href="#">Sign In</a>
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] font-sans" href="#">Get Started</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-end" style={{}}>
<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
<div className="z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30 absolute top-0 right-0 bottom-0 left-0">
</div>
<img alt="Swiss Alps Hiking" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{animation: 'heroZoomOut 10s cubic-bezier(0.25, 0.1, 0.25, 1) forwards', transformOrigin: 'center center'}}/>
<style>
        /* ========== HERO IMAGE ZOOM ANIMATION ========== */
        @keyframes heroZoomOut {
            /* START: Image starts zoomed in at 125% scale */
            0% {
                transform: scale(1.25);
            }

            /* SMOOTH CONTINUOUS ZOOM: Gradual progression throughout */
            100% {
                transform: scale(1.02);
            }
        }

        /* ========== END HERO IMAGE ZOOM ANIMATION ========== */
    </style>
</div>
<div className="z-20 md:px-10 md:pb-24 w-full max-w-[1400px] mr-auto ml-auto pr-6 pb-16 pl-6 relative" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium text-white mb-6 backdrop-blur-md font-sans">● Exploring The Unseen</span>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-balance text-5xl text-white tracking-tight font-instrument-serif font-normal">Unlock the world's best kept secrets</h1>
</div>
<div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="group relative w-20 h-20 rounded-full flex items-center justify-center mb-2 cursor-pointer transition-transform hover:scale-105" onclick="openModal()">
<div className="absolute inset-0 bg-white/10 border border-white/30 backdrop-blur-md rounded-full group-hover:bg-white transition-colors duration-300"></div>
<svg className="lucide lucide-play relative z-10 w-8 h-8 text-white ml-1 fill-white group-hover:text-black group-hover:fill-black transition-colors duration-300" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="absolute -inset-4 border border-white/20 rounded-full animate-ping opacity-20"></div>
</button>
<p className="leading-relaxed text-lg font-light text-stone-300 max-w-sm font-sans">Curated expeditions to the most remote corners of the Earth. Let Meridian be your compass.</p>
</div>
</div>
</div>
</header>

<section className="bg-white border-stone-100 border-b pt-16 pb-16">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<h3 className="md:text-5xl text-4xl text-stone-900 tracking-tight font-instrument-serif font-normal">
<span className="stat-number font-instrument-serif font-normal" data-target="500">500</span>+
        </h3>
<p className="text-base text-stone-500 mt-2 font-sans">Destinations Mapped</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl text-stone-900 tracking-tight font-instrument-serif font-normal">
<span className="stat-number font-instrument-serif font-normal" data-target="12">12</span>k+
        </h3>
<p className="text-base text-stone-500 mt-2 font-sans">Community Members</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl text-stone-900 tracking-tight font-instrument-serif font-normal">
<span className="stat-number font-instrument-serif font-normal" data-decimal="true" data-target="4.9">4.9</span>/5
        </h3>
<p className="text-base text-stone-500 mt-2 font-sans">Average Rating</p>
</div>
<div className="text-center md:text-left">
<h3 className="text-4xl md:text-5xl text-stone-900 tracking-tight font-instrument-serif font-normal">
<span className="stat-number font-instrument-serif font-normal" data-target="100">100</span>%
        </h3>
<p className="text-base text-stone-500 mt-2 font-sans">Carbon Offset</p>
</div>
</div>
</div>
<style className="">
    .stat-number {
      display: inline-block;
    }
  </style>

</section>

<section className="md:py-32 overflow-hidden bg-white pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-16 mb-20">
<div className="md:col-span-5">
<span className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4 block font-sans">[ Our Philosophy ]</span>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-stone-900 tracking-tight font-instrument-serif font-normal">Not just a trip,an immersion.</h2>
</div>
<div className="md:col-span-6 md:col-start-7 flex items-end">
<p className="text-xl text-stone-600 leading-relaxed font-light font-sans">Standard tourism scratches the surface. We dig deeper. From the misty highlands of Scotland to the hidden temples of Kyoto, we provide the keys to unlock authentic local experiences that aren't found in guidebooks.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl h-[500px] cursor-pointer">
<img alt="Iceland Landscape" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=1600&amp;q=80"/>
<div className="group-hover:opacity-80 transition-opacity bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-xl bg-black/20 border-t border-white/10">
<span className="text-white/80 text-sm font-medium mb-2 block font-sans">Iceland</span>
<h3 className="text-white text-3xl tracking-tight font-instrument-serif font-normal">Glacial Horizons</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/70 mt-4 text-sm max-w-xs font-sans">Walk where fire meets ice in the land of eternal twilight.</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl h-[500px] cursor-pointer md:mt-12">
<img alt="Jordan Desert" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=1600&amp;q=80"/>
<div className="group-hover:opacity-80 transition-opacity bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-xl bg-black/20 border-t border-white/10">
<span className="text-white/80 text-sm font-medium mb-2 block font-sans">Jordan</span>
<h3 className="text-white text-3xl tracking-tight font-instrument-serif font-normal">Sands of Time</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/70 mt-4 text-sm max-w-xs font-sans">Traverse the red deserts and ancient stone cities.</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl h-[500px] cursor-pointer md:mt-24">
<img alt="Indonesia Islands" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724258391590-6cfdc2d783b4?w=1600&amp;q=80"/>
<div className="group-hover:opacity-80 transition-opacity bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-xl bg-black/20 border-t border-white/10">
<span className="text-white/80 text-sm font-medium mb-2 block font-sans">Indonesia</span>
<h3 className="text-white text-3xl tracking-tight font-instrument-serif font-normal">Emerald Isles</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
<p className="text-white/70 mt-4 text-sm max-w-xs font-sans">Discover hidden beaches and vibrant coral reefs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 border-stone-800 border-t pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">

<div className="mb-20 max-w-3xl">
<span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4 block font-sans">Global Expedition Network</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-instrument-serif font-normal" style={{opacity: '1'}}>Choose your horizon.</h2>
<p className="text-xl text-stone-400 font-light leading-relaxed font-sans" style={{opacity: '1'}}>From the frozen peaks of the north to the sun-scorched deserts of the south, our curated regions offer distinct paths for every style of explorer.</p>
</div>
<div className="flex flex-col gap-16">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full relative">

<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
<span className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-4 block font-sans">[ Select Region ]</span>
<div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl bg-stone-800 border border-white/10">
<img alt="Destination Preview" className="transition-opacity duration-300 ease-in-out w-full h-full object-cover" id="dynamic-image" src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?q=80&amp;w=2874&amp;auto=format&amp;fit=crop" style={{opacity: '1'}}/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-stone-900/90 to-transparent">
<p className="text-white text-lg font-medium transition-opacity duration-300 font-sans" id="dynamic-caption" style={{opacity: '1'}}>Ancient Streets of Europe</p>
</div>
</div>
<p className="text-stone-400 mt-6 text-sm font-sans" style={{opacity: '1'}}>Hover over a destination to preview the landscape. Click to explore itineraries.</p>
</div>

<div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">

<div className="flex flex-col space-y-2">
<a className="destination-item group flex items-center justify-between py-10 border-b border-white/10 hover:pl-4 transition-all duration-300" data-caption="Ancient Streets of Europe" data-image="https://images.unsplash.com/photo-1471306224500-6d0d218be372?q=80&amp;w=2874&amp;auto=format&amp;fit=crop" href="#">
<div className="">
<span className="text-3xl md:text-5xl text-stone-500 group-hover:text-white transition-colors font-instrument-serif font-normal">Europe</span>
<p className="h-0 overflow-hidden group-hover:h-6 text-stone-400 text-sm mt-0 group-hover:mt-2 transition-all duration-300 font-sans">History • Culture • Cuisine</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<a className="destination-item group flex items-center justify-between hover:pl-4 transition-all duration-300 border-white/10 border-b pt-10 pb-10" data-caption="Wild Frontiers of America" data-image="https://images.unsplash.com/photo-1615551043360-33de8b5f410c?w=1600&amp;q=80;w=2874&amp;auto=format&amp;fit=crop" href="#">
<div className="">
<span className="text-3xl md:text-5xl text-stone-500 group-hover:text-white transition-colors font-instrument-serif font-normal">Americas</span>
<p className="h-0 overflow-hidden group-hover:h-6 text-stone-400 text-sm mt-0 group-hover:mt-2 transition-all duration-300 font-sans">National Parks • Cities • Coasts</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<a className="destination-item group flex items-center justify-between hover:pl-4 transition-all duration-300 border-white/10 border-b pt-10 pb-10 pl-4" data-caption="Mystic Temples of Asia" data-image="https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&amp;w=2970&amp;auto=format&amp;fit=crop" href="#">
<div className="">
<span className="text-3xl md:text-5xl text-stone-500 group-hover:text-white transition-colors font-instrument-serif font-normal">Asia</span>
<p className="h-0 overflow-hidden group-hover:h-6 text-stone-400 text-sm mt-0 group-hover:mt-2 transition-all duration-300 font-sans">Tradition • Nature • Spirituality</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
<a className="destination-item group flex items-center justify-between py-10 border-b border-white/10 hover:pl-4 transition-all duration-300" data-caption="Untamed Plains of Africa" data-image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&amp;w=2872&amp;auto=format&amp;fit=crop" href="#">
<div className="">
<span className="text-3xl md:text-5xl text-stone-500 group-hover:text-white transition-colors font-instrument-serif font-normal">Africa</span>
<p className="h-0 overflow-hidden group-hover:h-6 text-stone-400 text-sm mt-0 group-hover:mt-2 transition-all duration-300 font-sans">Safari • Desert • Ocean</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>
</div>

<div className="border-white/10 border-t pt-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div className="max-w-2xl">
<h3 className="text-2xl text-white mb-4 font-instrument-serif font-normal">Our Methodology</h3>
<p className="text-stone-400 leading-relaxed max-w-xl font-sans" style={{opacity: '1'}}>We don't just pick places; we curate experiences. Every route is scouted by our team of anthropologists and local experts to ensure authenticity, safety, and immersion.</p>
</div>
<div className="w-full">
<div className="grid grid-cols-3 gap-8">
<div className="">
<span className="text-4xl md:text-5xl text-white block mb-2 tracking-tight font-instrument-serif font-normal">50+</span>
<span className="text-xs font-bold text-stone-500 uppercase tracking-widest font-sans">Countries</span>
</div>
<div>
<span className="text-4xl md:text-5xl text-white block mb-2 tracking-tight font-instrument-serif font-normal">120</span>
<span className="text-xs font-bold text-stone-500 uppercase tracking-widest font-sans">Itineraries</span>
</div>
<div className="">
<span className="text-4xl md:text-5xl text-white block mb-2 tracking-tight font-instrument-serif font-normal">24/7</span>
<span className="text-xs font-bold text-stone-500 uppercase tracking-widest font-sans">Support</span>
</div>
</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-3xl">
<span className="text-brand-gold font-mono text-xs font-semibold tracking-widest uppercase mb-4 block font-sans">Field Journal</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.1] font-instrument-serif font-normal" style={{opacity: '1'}}>Stories from the unknown.</h2>
</div>
<div className="flex gap-4">
<a className="group px-6 py-3 rounded-full border border-stone-200 text-stone-600 font-semibold text-sm hover:bg-stone-50 hover:text-stone-900 transition-colors flex items-center gap-2 font-sans" href="#">
                    View Archive
                    <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8 bg-stone-100 shadow-sm">
<img alt="Austrian Alps" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1526581671404-349f224db79b?w=1600&amp;q=80"/>
<div className="group-hover:bg-stone-900/5 transition-colors duration-500 bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<span className="text-xs font-semibold text-brand-gold uppercase tracking-wider font-sans">Expedition Guide</span>
<span className="text-xs font-medium text-stone-400 font-mono font-sans">Oct 12 • 8 min read</span>
</div>
<h3 className="text-2xl text-stone-900 mb-3 group-hover:text-stone-600 transition-colors leading-tight tracking-tight font-instrument-serif font-normal">3 Days of Silence in the Austrian Alps</h3>
<p className="text-stone-500 text-base leading-relaxed mb-6 line-clamp-3 font-sans" style={{opacity: '1'}}>We mapped a route that avoids the ski resorts entirely. Discover the untouched trails and hidden cabins that offer true solitude away from the tourist hubs.</p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-100">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
</div>
<span className="text-sm font-medium text-stone-900 font-sans">Alex M.</span>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8 bg-stone-100 shadow-sm">
<img alt="Thailand Coast" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1600&amp;q=80"/>
<div className="group-hover:bg-stone-900/5 transition-colors duration-500 bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<span className="text-xs font-semibold text-brand-gold uppercase tracking-wider font-sans">Location Review</span>
<span className="text-xs font-medium text-stone-400 font-mono font-sans">Sep 28 • 6 min read</span>
</div>
<h3 className="text-2xl text-stone-900 mb-3 group-hover:text-stone-600 transition-colors leading-tight tracking-tight font-instrument-serif font-normal">Hidden Beaches of the Andaman Sea</h3>
<p className="text-stone-500 text-base leading-relaxed mb-6 line-clamp-3 font-sans" style={{opacity: '1'}}>Avoiding the crowds in Phuket requires a boat and a bit of courage. Here is where to actually go for crystal clear waters and empty shores.</p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-100">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;q=80"/>
</div>
<span className="text-sm font-medium text-stone-900 font-sans">Sarah J.</span>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8 bg-stone-100 shadow-sm">
<img alt="Desert Landscape" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1555589545-d5b1aeca5466?w=1600&amp;q=80"/>
<div className="group-hover:bg-stone-900/5 transition-colors duration-500 bg-stone-900/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
<span className="text-xs font-semibold text-brand-gold uppercase tracking-wider font-sans">Essential Gear</span>
<span className="text-xs font-medium text-stone-400 font-mono font-sans">Sep 15 • 12 min read</span>
</div>
<h3 className="text-2xl text-stone-900 mb-3 group-hover:text-stone-600 transition-colors leading-tight tracking-tight font-instrument-serif font-normal">Navigating the Red Sands of Jordan</h3>
<p className="text-stone-500 text-base leading-relaxed mb-6 line-clamp-3 font-sans" style={{opacity: '1'}}>The desert is unforgiving but beautiful. The definitive list of gear, from hydration packs to solar chargers, that kept us alive and comfortable.</p>
<div className="mt-auto flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden ring-1 ring-stone-100">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80"/>
</div>
<span className="text-sm font-medium text-stone-900 font-sans">Marcus T.</span>
</div>
</article>
</div>
</div>
</section>


<section className="overflow-hidden bg-[#0A0A0A] border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Background Texture" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-[#0A0A0A]/90"></div>
</div>

<div className="pointer-events-none z-0 opacity-5 bg-[url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=3840&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-20 gap-x-8 gap-y-8 justify-between">
<div className="max-w-2xl">
<span className="text-brand-gold font-mono text-xs font-semibold tracking-widest uppercase mb-4 block font-sans">Membership Tiers</span>
<h2 className="text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6 font-instrument-serif font-normal" style={{opacity: '1'}}>Choose your expedition level.</h2>
<p className="leading-relaxed text-lg font-light text-stone-400 max-w-xl font-sans" style={{opacity: '1'}}>Whether you're mapping local trails or traversing Antarctica, we have the tools, insurance, and community to support your journey.</p>
</div>
<div className="flex items-center gap-4 text-sm font-medium text-stone-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
<span className="flex items-center gap-2 font-sans"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 428 Explorers active now</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative flex flex-col min-h-[700px] rounded-3xl overflow-hidden border border-white/10 bg-stone-900/50 hover:border-white/20 transition-all duration-500">

<div className="relative h-[280px] w-full overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white font-sans">Starter Access</div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
<div className="mb-8">
<h3 className="text-3xl text-white mb-2 tracking-tight font-instrument-serif font-normal">The Wanderer</h3>
<p className="text-stone-400 text-sm leading-relaxed font-sans" style={{opacity: '1'}}>For weekend warriors and local explorers.</p>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl text-white tracking-tight font-instrument-serif font-normal">Free</span>
<span className="text-stone-500 font-medium font-sans">/ forever</span>
</div>
<p className="text-xs text-stone-500 font-sans" style={{opacity: '1'}}>No credit card required.</p>
</div>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Access to public community maps</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Basic GPS tracking &amp; logging</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Global regions: 🇺🇸 🇨🇦 🇬🇧</span>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center -space-x-3 mb-6">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-stone-800 flex items-center justify-center text-[10px] text-white font-medium font-sans">+2k</div>
</div>
<button className="w-full py-4 bg-white/5 hover:bg-white hover:text-black border border-white/10 text-white rounded-xl transition-all duration-300 font-medium font-sans">Start Wandering</button>
</div>
</div>
</div>

<div className="group relative flex flex-col min-h-[700px] rounded-3xl overflow-hidden border border-brand-gold/30 bg-stone-900/80 hover:border-brand-gold/50 transition-all duration-500 shadow-2xl shadow-brand-gold/5 lg:-translate-y-6">

<div className="relative h-[280px] w-full overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544639385-efb07ba990d9?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 right-0 bg-brand-gold text-black text-xs font-bold px-4 py-2 rounded-bl-xl tracking-wider uppercase font-sans">Most Popular</div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
<div className="mb-8">
<h3 className="text-3xl text-white mb-2 flex items-center gap-2 tracking-tight font-instrument-serif font-normal">The Nomad <svg className="lucide lucide-sparkles text-brand-gold" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg></h3>
<p className="text-stone-300 text-sm leading-relaxed font-sans" style={{opacity: '1'}}>Serious tools for the digital nomad and frequent traveler.</p>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-6xl text-white tracking-tight font-instrument-serif font-normal">$29</span>
<span className="text-stone-500 font-medium font-sans">/ month</span>
</div>
<p className="text-xs text-brand-gold/80 font-sans" style={{opacity: '1'}}>Includes 7-day free trial.</p>
</div>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<div className="p-1 rounded-full bg-brand-gold/20 mt-0.5"><svg className="lucide lucide-check text-brand-gold" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-white text-sm font-medium font-sans">Offline topography downloads</span>
</div>
<div className="flex items-start gap-3">
<div className="p-1 rounded-full bg-brand-gold/20 mt-0.5"><svg className="lucide lucide-check text-brand-gold" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-white text-sm font-medium font-sans">Weekly hidden gem drops</span>
</div>
<div className="flex items-start gap-3">
<div className="p-1 rounded-full bg-brand-gold/20 mt-0.5"><svg className="lucide lucide-check text-brand-gold" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-white text-sm font-medium font-sans">Verified Solo Safety Scores</span>
</div>
<div className="flex items-start gap-3">
<div className="p-1 rounded-full bg-brand-gold/20 mt-0.5"><svg className="lucide lucide-check text-brand-gold" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-white text-sm font-medium font-sans">Access to: 🇯🇵 🇮🇩 🇲🇽 🇻🇳 + 50 more</span>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center -space-x-3 mb-6">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-brand-gold flex items-center justify-center text-[10px] text-black font-bold font-sans">+8k</div>
</div>
<button className="w-full py-4 bg-brand-gold hover:bg-white text-black font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] font-sans">Become a Nomad</button>
</div>
</div>
</div>

<div className="group relative flex flex-col min-h-[700px] rounded-3xl overflow-hidden border border-white/10 bg-stone-900/50 hover:border-white/20 transition-all duration-500">

<div className="relative h-[280px] w-full overflow-hidden">
<img className="transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white font-sans">All Access</div>
</div>
<div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
<div className="mb-8">
<h3 className="text-3xl text-white mb-2 tracking-tight font-instrument-serif font-normal">The Voyager</h3>
<p className="text-stone-400 text-sm leading-relaxed font-sans" style={{opacity: '1'}}>Full concierge service for extreme expeditions.</p>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl text-white tracking-tight font-instrument-serif font-normal">$99</span>
<span className="text-stone-500 font-medium font-sans">/ month</span>
</div>
<p className="text-xs text-stone-500 font-sans" style={{opacity: '1'}}>Billed annually.</p>
</div>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">24/7 Satellite Uplink Support</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Custom Route Planning</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Emergency Extraction Insurance</span>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-stone-600 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-stone-300 text-sm font-sans">Access to: 🇦🇶 🇳🇵 🇨🇱 (Extreme)</span>
</div>
</div>
<div className="mt-auto">
<div className="flex items-center -space-x-3 mb-6">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#0A0A0A]" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-stone-800 flex items-center justify-center text-[10px] text-white font-medium font-sans">Limited</div>
</div>
<button className="w-full py-4 bg-white/5 hover:bg-white hover:text-black border border-white/10 text-white rounded-xl transition-all duration-300 font-medium font-sans">Join the Voyagers</button>
</div>
</div>
</div>
</div>

<div className="mt-20 border border-white/10 rounded-2xl p-8 md:p-12 bg-stone-900/30 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-building-2 w-8 h-8 text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div className="">
<h3 className="text-2xl text-white mb-2 font-instrument-serif font-normal">Expedition Teams</h3>
<p className="text-stone-400 max-w-lg text-sm leading-relaxed font-sans" style={{opacity: '1'}}>Planning a research trip or group expedition? We offer dedicated support for teams of 5+, including satellite phone rentals and bulk insurance rates.</p>
</div>
</div>
<button className="px-8 py-3 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-white transition-colors text-sm font-medium whitespace-nowrap font-sans">Contact Sales</button>
</div>
</div>
</section>

<section className="bg-stone-50 py-32 overflow-hidden relative">

<div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none"></div>
<div className="md:px-10 z-10 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
<div className="max-w-2xl">
<span className="text-brand-gold font-mono text-xs font-semibold tracking-widest uppercase mb-4 block font-sans">Traveler Testimonials</span>
<h2 className="text-4xl md:text-5xl text-stone-900 tracking-tight leading-tight font-instrument-serif font-normal">Postcards from the Edge</h2>
</div>

<div className="hidden md:flex gap-3">
<button className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-100 hover:border-stone-300 transition-all shadow-sm group">
<svg className="lucide lucide-arrow-left text-stone-500 group-hover:text-stone-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path className="" d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-100 hover:border-stone-300 transition-all shadow-sm group">
<svg className="lucide lucide-arrow-right text-stone-500 group-hover:text-stone-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto pb-20 pt-12 px-4 -mx-4 md:mx-0 gap-8 md:gap-12 snap-x snap-mandatory no-scrollbar items-center md:justify-center">

<div className="group flex-shrink-0 md:w-[420px] hover:rotate-0 hover:z-20 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out snap-center transform-gpu bg-white w-[320px] pt-4 pr-4 pb-4 pl-4 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -rotate-2">

<div className="-top-3 -translate-x-1/2 z-10 bg-yellow-100/90 opacity-90 w-24 h-6 absolute left-1/2 shadow-sm rotate-1"></div>
<div className="overflow-hidden bg-stone-100 w-full h-[260px] border-stone-100 border mb-6">
<img alt="Alps View" className="sepia-[0.1] contrast-[1.05] group-hover:sepia-0 transition-all duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=1000"/>
</div>
<div className="px-2 pb-2">
<p className="font-serif italic text-xl text-stone-800 leading-relaxed mb-6 font-sans">"The silence in the Alps is different. It's heavy, yet light. Pathfinder found us a cabin that wasn't on any map."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div className="flex flex-col">
<span className="font-serif font-bold text-lg text-stone-900 font-sans">Sarah Jenkins</span>
<span className="text-[10px] uppercase tracking-widest text-stone-400 mt-1 font-sans">Hallstatt, Austria</span>
</div>

<div className="border-2 border-dashed border-stone-200 p-2 rounded rotate-12 opacity-50">
<svg className="lucide lucide-stamp text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"></path><path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative group flex-shrink-0 w-[320px] md:w-[420px] bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rotate-1 hover:rotate-0 hover:z-20 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out snap-center transform-gpu">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/90 shadow-sm -rotate-2 z-10 opacity-90"></div>
<div className="h-[260px] w-full overflow-hidden mb-6 bg-stone-100 border border-stone-100">
<img alt="Jordan Desert Camp" className="sepia-[0.1] contrast-[1.05] group-hover:sepia-0 transition-all duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1465911817134-741b5e473a1b?q=80&amp;w=2000"/>
</div>
<div className="px-2 pb-2">
<p className="font-serif italic text-xl text-stone-800 leading-relaxed mb-6 font-sans">"We drank tea with the Bedouins under stars that looked like diamonds. An itinerary I'll never forget."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div className="flex flex-col">
<span className="font-serif font-bold text-lg text-stone-900 font-sans">Marcus Thorn</span>
<span className="text-[10px] uppercase tracking-widest text-stone-400 mt-1 font-sans">Wadi Rum, Jordan</span>
</div>

<div className="border-2 border-dashed border-stone-200 p-2 rounded -rotate-6 opacity-50">
<svg className="lucide lucide-plane text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M13 2v20"></path><path d="m12 17 5 5"></path><path d="m17 7-5-5"></path><path d="m17 7 5 5"></path><path d="m12 17-5 5"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative group flex-shrink-0 w-[320px] md:w-[420px] bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] -rotate-1 hover:rotate-0 hover:z-20 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out snap-center transform-gpu">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/90 shadow-sm rotate-2 z-10 opacity-90"></div>
<div className="h-[260px] w-full overflow-hidden mb-6 bg-stone-100 border border-stone-100">
<img alt="Patagonia Mountains" className="sepia-[0.1] contrast-[1.05] group-hover:sepia-0 transition-all duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1558517286-8a9cb0b8c793?w=800&amp;q=80"/>
</div>
<div className="px-2 pb-2">
<p className="font-serif italic text-xl text-stone-800 leading-relaxed mb-6 font-sans">"Solo travel can be scary. Pathfinder gave me the confidence to hike Patagonia alone. I never felt lost."</p>
<div className="flex justify-between items-end border-t border-stone-100 pt-4">
<div className="flex flex-col">
<span className="font-serif font-bold text-lg text-stone-900 font-sans">Elena Rodriguez</span>
<span className="text-[10px] uppercase tracking-widest text-stone-400 mt-1 font-sans">Torres del Paine, Chile</span>
</div>

<div className="border-2 border-dashed border-stone-200 p-2 rounded rotate-6 opacity-50">
<svg className="lucide lucide-mountain-snow text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-stone-900 pt-24 pb-24">
<div className="max-w-[1200px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2 block font-sans">Pre-Departure</span>
<h2 className="text-4xl mb-6 tracking-tight font-instrument-serif font-normal">The Explorer's Kit</h2>
<p className="text-stone-400 mb-8 font-sans">Don't leave the safehouse without the essentials. Click the items to pack your bag.</p>
<div className="p-6 bg-white/5 border border-white/10 rounded-xl">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-mono text-stone-300 font-sans">Readiness Level</span>
<span className="text-brand-gold font-semibold font-mono font-sans" id="progress-text">0%</span>
</div>
<div className="overflow-hidden bg-stone-800 w-full h-2 rounded-full">
<div className="h-full bg-brand-gold w-0 transition-all duration-500 ease-out" id="progress-bar"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-ticket w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Passport</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-compass w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Compass</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-flashlight w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v1"></path><path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z"></path><path d="M6 6h12"></path></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Light</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-smartphone w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Offline Map</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-briefcase-medical w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11v4"></path><path d="M14 13h-4"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M18 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6h12Z"></path></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Med Kit</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
<button className="gear-item group h-32 bg-stone-800 border border-white/5 hover:border-brand-gold rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative" onclick="toggleGear(this)">
<svg className="lucide lucide-camera w-8 h-8 text-stone-500 group-hover:text-white transition-colors mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-xs text-stone-500 group-hover:text-white uppercase tracking-wider font-sans">Camera</span>
<div className="check-icon opacity-0 group-[.packed]:opacity-100 text-brand-gold absolute top-2 right-2 transition-opacity">
<svg className="lucide lucide-check-circle-2 w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</button>
</div>
</div>
</div>

</section>

<section className="pt-24 pb-24 relative">
<div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none"></div>
<div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10">
<div className="text-center mb-16">
<svg className="lucide lucide-feather w-8 h-8 mx-auto text-stone-400 mb-4" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
<h2 className="text-4xl text-stone-900 tracking-tight font-instrument-serif font-normal">Field Notes &amp; Queries</h2>
</div>
<div className="space-y-6 font-serif">
<div className="bg-white p-8 shadow-sm border border-stone-200 rotate-1 transition-transform hover:rotate-0">
<h3 className="font-semibold text-lg text-stone-900 mb-2 font-sans">"How authentic are these routes?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">Every path is verified by a local anthropologist. We don't do tourist traps; we do heritage sites and hidden trails known only to locals.</p>
</div>
<div className="bg-white p-8 shadow-sm border border-stone-200 -rotate-1 transition-transform hover:rotate-0">
<h3 className="font-semibold text-lg text-stone-900 mb-2 font-sans">"Is it safe for solo explorers?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">We provide a 'Solo Safety Score' for every destination. The Nomad tier includes real-time GPS check-ins for peace of mind.</p>
</div>
<div className="bg-white p-8 shadow-sm border border-stone-200 rotate-1 transition-transform hover:rotate-0">
<h3 className="font-semibold text-lg text-stone-900 mb-2 font-sans">"What happens if I get lost?"</h3>
<p className="text-stone-600 leading-relaxed font-sans">Getting lost is part of the fun, but staying lost isn't. All maps work 100% offline. If you're really stuck, Voyagers have a 24/7 sat-phone uplink.</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-dark py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-900">
<div className="opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0">
<style>
        section.bg-surface-dark h2, 
        section.bg-surface-dark p { 
            opacity: 1 !important; 
            transform: none !important; 
        }
    </style>
</div>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-4xl md:text-5xl text-white mb-6 font-instrument-serif font-normal" style={{opacity: '0'}}>Never miss a new horizon.</h2>
<p className="text-stone-400 mb-10 text-lg font-sans" style={{opacity: '0'}}>Join 12,000+ travelers receiving our weekly hidden gems digest.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-white/10 border border-white/10 text-white px-6 py-4 rounded-full focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all placeholder:text-stone-500" placeholder="Enter your email address" type="email"/>
<button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform font-sans">Subscribe</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-10">

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-stone-100 pb-16">

<div className="md:col-span-4">
<a className="text-xl font-display font-semibold tracking-tight text-stone-900 flex items-center gap-2 mb-6 font-sans" href="#">
<svg className="lucide lucide-compass w-6 h-6 text-stone-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                    Meridian
                </a>
<p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-8 font-sans">
                    Curating the world's most extraordinary journeys for the modern explorer. Experience the unseen, mapped by locals.
                </p>
<div className="flex gap-5">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S1.2 2.9 8.3 9c-4.2-.2-6.1-3.3-4.5-6C1.5 8.7 6.9 12.6 12.5 4.7c-2-3.8 4-4.8 6.7-1.3-.3-2.2 2.8-2.3 2.8-2.3z"></path></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="md:col-span-2 hidden md:block"></div>

<div className="md:col-span-2">
<h4 className="font-semibold text-stone-900 mb-6 font-sans">Expeditions</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">North America</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Europe</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Asia Pacific</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Antarctica</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Middle East</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="font-semibold text-stone-900 mb-6 font-sans">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Our Story</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Journal</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Membership</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Press</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="font-semibold text-stone-900 mb-6 font-sans">Resources</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Support Center</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Safety Guides</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Gear Lists</a></li>
<li><a className="hover:text-stone-900 transition-colors font-sans" href="#">Community Rules</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-stone-400 text-sm font-sans">© 2024 Meridian Exploration Inc. All rights reserved.</p>
<div className="flex gap-8 text-sm text-stone-500">
<a className="hover:text-stone-900 transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 transition-colors font-sans" href="#">Terms of Service</a>
<a className="hover:text-stone-900 transition-colors font-sans" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
