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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
},
slate: {
200: '#e2e8f0',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.02em',
},
animation: {
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'blur-in': 'blurIn 1.5s ease-out forwards',
'scale-slow': 'scaleSlow 10s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blurIn: {
'0%': { filter: 'blur(20px)', opacity: '0' },
'100%': { filter: 'blur(0)', opacity: '1' },
},
scaleSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.05)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navigation Scroll Logic
        const nav = document.getElementById('main-nav');
        const navCta = document.getElementById('nav-cta');
        const navLinks = nav.querySelectorAll('div > a');

        function handleScroll() {
            if (window.scrollY > 50) {
                // Scrolled state
                nav.classList.remove('text-white');
                nav.classList.add('text-stone-900', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
                
                // Button invert
                navCta.classList.remove('bg-white', 'text-black', 'hover:bg-stone-200');
                navCta.classList.add('bg-stone-900', 'text-white', 'hover:bg-stone-700');

                // Update link hover
                navLinks.forEach(link => {
                    link.classList.remove('hover:text-stone-300');
                    link.classList.add('hover:text-stone-500');
                });
            } else {
                // Top state
                nav.classList.add('text-white');
                nav.classList.remove('text-stone-900', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
                
                // Button revert
                navCta.classList.add('bg-white', 'text-black', 'hover:bg-stone-200');
                navCta.classList.remove('bg-stone-900', 'text-white', 'hover:bg-stone-700');

                // Update link hover
                navLinks.forEach(link => {
                    link.classList.add('hover:text-stone-300');
                    link.classList.remove('hover:text-stone-500');
                });
            }
        }

        window.addEventListener('scroll', handleScroll);
        // Ensure state is correct on load
        handleScroll();

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Intersection Observer for Animations (Fade ins)
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    if (entry.target.classList.contains('reveal-header')) {
                        const spans = entry.target.querySelectorAll('span > span');
                        spans.forEach(span => span.style.transform = 'translateY(0)');
                    }
                }
            });
        }, observerOptions);
        
        window.addEventListener('load', () => {
            const headers = document.querySelectorAll('.reveal-header span > span');
            headers.forEach(header => {
                header.style.transform = 'translateY(0)';
            });
        });

        // Values Section Observer (Center Image Trigger)
        const valuesObserverOptions = {
            threshold: 0.5,
            rootMargin: "-10% 0px -10% 0px" 
        };

        const valuesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const textId = id.replace('img-', 'text-');
                    
                    document.querySelectorAll('.value-text').forEach(el => el.classList.remove('active'));
                    const activeText = document.getElementById(textId);
                    if (activeText) activeText.classList.add('active');
                }
            });
        }, valuesObserverOptions);

        document.querySelectorAll('.value-image-trigger').forEach(el => valuesObserver.observe(el));

        // Program Section Manual Scroll Logic
        const container = document.getElementById('programs-container');
        const leftBtn = document.getElementById('scroll-left-btn');
        const rightBtn = document.getElementById('scroll-right-btn');

        if (container && leftBtn && rightBtn) {
            const scrollAmount = 350; // Approx card width + gap

            leftBtn.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            rightBtn.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        // Testimonial Carousel Logic
        (function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.getElementById('test-prev');
            const nextBtn = document.getElementById('test-next');
            let currentSlide = 0;

            function updateSlide(index) {
                // Bounds check
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;
                
                currentSlide = index;

                // Update slides
                slides.forEach((slide, i) => {
                    if (i === currentSlide) {
                        slide.classList.remove('hidden');
                        slide.classList.add('block', 'testimonial-enter');
                    } else {
                        slide.classList.add('hidden');
                        slide.classList.remove('block', 'testimonial-enter');
                    }
                });

                // Update indicators
                indicators.forEach((ind, i) => {
                    if (i === currentSlide) {
                        ind.classList.remove('bg-stone-300', 'hover:bg-stone-500');
                        ind.classList.add('bg-stone-900');
                    } else {
                        ind.classList.add('bg-stone-300', 'hover:bg-stone-500');
                        ind.classList.remove('bg-stone-900');
                    }
                });
            }

            // Listeners
            if(prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
            if(nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));
            
            indicators.forEach((ind, i) => {
                ind.addEventListener('click', () => updateSlide(i));
            });

        })();

        // Pricing Toggle
        (function () {
            const tabs = document.querySelectorAll('.billing-tab');
            const prices = document.querySelectorAll('.price');
            const units = document.querySelectorAll('.price-unit');
            const notes = document.querySelectorAll('.billing-note');

            function setBilling(mode) {
                tabs.forEach(btn => {
                    const active = btn.dataset.billing === mode;
                    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
                    if (active) {
                        btn.classList.add('bg-white', 'shadow-sm', 'text-stone-900');
                        btn.classList.remove('text-stone-500', 'hover:text-stone-900');
                    } else {
                        btn.classList.remove('bg-white', 'shadow-sm', 'text-stone-900');
                        btn.classList.add('text-stone-500', 'hover:text-stone-900');
                    }
                });

                prices.forEach(el => el.textContent = el.dataset[mode]);
                units.forEach(el => el.textContent = el.dataset[mode]);
                notes.forEach(el => el.classList.toggle('hidden', mode !== 'annual'));
            }

            tabs.forEach(btn => btn.addEventListener('click', () => setBilling(btn.dataset.billing)));
            setBilling('monthly'); // default
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
      

<div className="cursor-dot hidden md:block" style={{left: '576px', top: '45px'}}></div>
<div className="cursor-outline hidden md:block"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 text-white" id="main-nav">
<a className="font-display text-xl tracking-tighter font-semibold z-50 hover:opacity-80 transition-opacity" href="#">
            CHORUS
        </a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium tracking-widest uppercase transition-colors hover:text-stone-300" href="#philosophy">Philosophy</a>
<a className="text-xs font-medium tracking-widest uppercase transition-colors hover:text-stone-300" href="#stories">Stories</a>
<a className="text-xs font-medium tracking-widest uppercase transition-colors hover:text-stone-300" href="#pricing">Pricing</a>
</div>
<button className="px-6 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors z-50 border border-transparent bg-white text-black hover:bg-stone-200" id="nav-cta">
            Join Now
        </button>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-stone-900 flex items-center justify-center">
<div className="absolute inset-0 w-full h-full z-0">
<img alt="Runner in motion" className="w-full h-full object-cover opacity-60 animate-blur-in scale-105 animate-scale-slow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/886f9966-52e7-4e87-abd8-477e9d498e49_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900/90"></div>
</div>
<div className="z-10 text-center max-w-5xl mt-20 mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 reveal-header">
<span className="block overflow-hidden"><span className="block translate-y-full transition-transform duration-1000 delay-100 ease-out" style={{transform: 'translateY(0px)'}}>FIND YOUR</span></span>
<span className="block overflow-hidden"><span className="block transition-transform duration-1000 delay-300 ease-out italic text-stone-300 font-serif translate-y-full" style={{transform: 'translateY(0px)'}}>RHYTHM</span></span>
</h1>
<p className="font-sans text-stone-200 text-sm md:text-base max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-700 tracking-wide">
                Fitness designed for the modern man. No intimidation, just progress. A proven path for beginners to build strength and comfort.
            </p>
<div className="mt-12 opacity-0 animate-fade-in-up delay-1000">
<a className="group inline-flex items-center gap-3 bg-white text-black border border-white rounded-full pl-6 pr-2 py-2 hover:bg-stone-200 hover:border-stone-200 transition-all duration-300 shadow-xl shadow-white/10" href="#pricing">
<span className="text-xs tracking-widest uppercase font-bold">Start Free Trial</span>
<span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<svg className="lucide lucide-chevron-down w-6 h-6" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<div className="bg-stone-100 py-6 border-b border-slate-200 overflow-hidden relative z-20">
<div className="marquee-container opacity-40">
<div className="marquee-content font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 uppercase">
<span>Beginner Friendly</span>
<span className="text-stone-400 font-serif italic">Proven Results</span>
<span className="">Fresh Approach</span>
<span className="text-stone-400 font-serif italic">Comfort First</span>
<span>Beginner Friendly</span>
<span className="text-stone-400 font-serif italic">Proven Results</span>
</div>
<div aria-hidden="true" className="marquee-content font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 uppercase ml-16">
<span>Beginner Friendly</span>
<span className="text-stone-400 font-serif italic">Proven Results</span>
<span>Fresh Approach</span>
<span className="text-stone-400 font-serif italic">Comfort First</span>
<span>Beginner Friendly</span>
<span className="text-stone-400 font-serif italic">Proven Results</span>
</div>
</div>
</div>

<section className="relative bg-white border-b border-slate-200" id="philosophy">
<div className="max-w-7xl mx-auto md:flex">

<div className="w-full md:w-1/2 px-6 md:px-12 py-16 md:py-20 md:h-screen md:sticky md:top-0 flex flex-col justify-center z-10 bg-white">
<div className="relative">
<span className="inline-block px-3 py-1 border border-stone-300 rounded-full text-[10px] uppercase tracking-widest mb-8 text-stone-500 bg-stone-50 w-max">Our Values</span>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter leading-tight mb-16 text-stone-900">
                        WE BELIEVE IN <br/>
<span className="italic text-stone-400 font-serif">SUSTAINABLE</span> GROWTH.
                    </h2>
<div className="space-y-16 md:space-y-12">

<div className="value-text group cursor-default" id="text-comfort">
<h3 className="text-2xl font-medium mb-2 flex items-center gap-4">
<span className="text-xs font-mono text-stone-400">01</span>
                                Comfort
                            </h3>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                                Fitness shouldn't feel like punishment. We create an environment where you feel at home.
                            </p>

<div className="md:hidden mt-6 mb-2 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
<img alt="Comfort" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0460af14-56d7-41ee-bb61-5c26fe724072_1600w.webp"/>
</div>
</div>

<div className="value-text group cursor-default" id="text-clarity">
<h3 className="text-2xl font-medium mb-2 flex items-center gap-4">
<span className="text-xs font-mono text-stone-400">02</span>
                                Clarity
                            </h3>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                                No complex jargon. Just clear, proven instructions designed for men starting their journey.
                            </p>

<div className="md:hidden mt-6 mb-2 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
<img alt="Clarity" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="value-text group cursor-default" id="text-freshness">
<h3 className="text-2xl font-medium mb-2 flex items-center gap-4">
<span className="text-xs font-mono text-stone-400">03</span>
                                Freshness
                            </h3>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                                A modern approach to wellness. Combining classic strength with contemporary mobility.
                            </p>

<div className="md:hidden mt-6 mb-2 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
<img alt="Freshness" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:block w-1/2 relative bg-stone-100">
<div className="flex md:p-12 value-image-trigger w-full h-screen pt-6 pr-6 pb-6 pl-6 items-center justify-center" id="img-comfort">
<div className="w-full h-[70vh] relative rounded-2xl overflow-hidden shadow-2xl group hover-trigger">
<img alt="Comfort" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0460af14-56d7-41ee-bb61-5c26fe724072_1600w.webp"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl">
<p className="font-display text-xs font-bold uppercase tracking-widest text-black">Comfort</p>
</div>
</div>
</div>
<div className="h-screen w-full flex items-center justify-center p-6 md:p-12 value-image-trigger" id="img-clarity">
<div className="w-full h-[70vh] relative rounded-2xl overflow-hidden shadow-2xl group hover-trigger">
<img alt="Clarity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl">
<p className="font-display text-xs font-bold uppercase tracking-widest text-black">Clarity</p>
</div>
</div>
</div>
<div className="h-screen w-full flex items-center justify-center p-6 md:p-12 value-image-trigger" id="img-freshness">
<div className="w-full h-[70vh] relative rounded-2xl overflow-hidden shadow-2xl group hover-trigger">
<img alt="Freshness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl">
<p className="font-display text-xs font-bold uppercase tracking-widest text-black">Freshness</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-stone-50 border-slate-200 border-b pt-24 pb-24 relative" id="program-section">

<div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-stone-900">THE PROGRAM</h2>
<p className="text-stone-500 mt-4 max-w-sm text-lg font-light">Curated paths for every beginner. Choose your starting line.</p>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors" id="scroll-left-btn">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors" id="scroll-right-btn">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="ml-4 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors hidden md:block" href="#">View All</a>
</div>
</div>

<div className="w-full max-w-7xl mx-auto">

<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none md:block hidden"></div>
<div className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory md:pb-6 md:pr-6 md:pl-12 pr-6 pb-12 pl-6 gap-x-6 gap-y-6 items-start" id="programs-container">

<div className="md:w-80 group cursor-pointer flex-shrink-0 snap-start w-72">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 shadow-sm">
<img alt="Strength Foundation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        4 Weeks</div>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Foundation Strength</h3>
<p className="text-sm text-stone-500">Master the basics of movement.</p>
</div>

<div className="w-72 md:w-80 group cursor-pointer flex-shrink-0 snap-start">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 shadow-sm">
<img alt="Mobility Flow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        6 Weeks</div>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Mobility &amp; Flow</h3>
<p className="text-sm text-stone-500">Recover and build flexibility.</p>
</div>

<div className="w-72 md:w-80 group cursor-pointer flex-shrink-0 snap-start">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 shadow-sm">
<img alt="Cardio Base" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            8 Weeks
                        </div>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Cardio Base</h3>
<p className="text-sm text-stone-500">Build endurance comfortably.</p>
</div>

<div className="w-72 md:w-80 group cursor-pointer flex-shrink-0 snap-start">
<div className="aspect-[4/5] overflow-hidden flex bg-stone-200 rounded-2xl mb-5 relative items-center justify-center">
<span className="font-serif italic text-stone-400 text-xl">Coming Soon</span>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Mindset Reset</h3>
<p className="text-sm text-stone-500">Mental toughness for beginners.</p>
</div>

<div className="w-72 md:w-80 group cursor-pointer flex-shrink-0 snap-start">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 shadow-sm">
<img alt="Total Body" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        12 Weeks</div>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Total Body</h3>
<p className="text-sm text-stone-500">The complete beginner package.</p>
</div>

<div className="w-72 md:w-80 group cursor-pointer flex-shrink-0 snap-start">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-5 shadow-sm">
<img alt="Quick Start" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        2 Weeks</div>
</div>
<h3 className="font-display text-xl font-medium mb-1 text-stone-900">Quick Start</h3>
<p className="text-sm text-stone-500">Jump right into the action.</p>
</div>

<div className="w-6 md:w-12 flex-shrink-0"></div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto pt-24 pb-16 px-4" id="stories">
<div className="relative overflow-hidden sm:p-12 ring-1 ring-stone-200 bg-white rounded-[2.5rem] p-8 shadow-sm">
<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-bold tracking-widest text-stone-600 uppercase">
<svg className="lucide lucide-star w-3 h-3 fill-black text-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    Member Stories
                </span>
</div>
<div className="relative mt-8 sm:mt-12 min-h-[300px] flex items-center">
<button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-30" id="test-prev">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-30" id="test-next">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="w-full max-w-5xl mx-auto px-12">
<div className="testimonial-slide block" data-index="0">
<p className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tighter text-center font-display font-medium mb-10 text-stone-900">
                            "Finally, fitness that makes sense. Chorus helped me build a foundation without the ego. The lessons are <span className="text-stone-400 font-serif italic">clear, calm</span>, and incredibly effective."
                        </p>
<div className="flex gap-4 items-center justify-center">
<img alt="David M." className="h-12 w-12 ring-2 ring-stone-100 object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-stone-900 uppercase tracking-wide">David M.</p>
<p className="text-xs text-stone-500 font-medium">Member since 2023</p>
</div>
</div>
</div>
<div className="testimonial-slide hidden" data-index="1">
<p className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tighter text-center font-display font-medium mb-10 text-stone-900">
                            "I used to get injured every time I tried to get back in shape. This program taught me how to move <span className="text-stone-400 font-serif italic">intentionally</span>. It's not just a workout; it's a reset."
                        </p>
<div className="flex gap-4 items-center justify-center">
<img alt="Marcus J." className="h-12 w-12 ring-2 ring-stone-100 object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-stone-900 uppercase tracking-wide">Marcus J.</p>
<p className="text-xs text-stone-500 font-medium">Member since 2024</p>
</div>
</div>
</div>
<div className="testimonial-slide hidden" data-index="2">
<p className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tighter text-center font-display font-medium mb-10 text-stone-900">
                            "The mental clarity I get from these sessions is unmatched. It's the perfect balance of <span className="text-stone-400 font-serif italic">strength</span> and mobility for a busy schedule."
                        </p>
<div className="flex gap-4 items-center justify-center">
<img alt="Sarah L." className="h-12 w-12 ring-2 ring-stone-100 object-cover rounded-full grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-bold text-stone-900 uppercase tracking-wide">Sarah L.</p>
<p className="text-xs text-stone-500 font-medium">Member since 2023</p>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button aria-label="Go to slide 1" className="indicator w-2 h-2 rounded-full bg-stone-900 transition-colors" data-slide="0"></button>
<button aria-label="Go to slide 2" className="indicator w-2 h-2 rounded-full bg-stone-300 transition-colors hover:bg-stone-500" data-slide="1"></button>
<button aria-label="Go to slide 3" className="indicator w-2 h-2 rounded-full bg-stone-300 transition-colors hover:bg-stone-500" data-slide="2"></button>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-12">

<div className="lg:col-span-5">
<div className="sticky top-24">
<span className="inline-flex items-center gap-2 text-[10px] font-bold text-stone-500 tracking-widest uppercase bg-stone-200/50 rounded-full px-3 py-1 mb-8">
                            Membership
                        </span>
<h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 tracking-tighter leading-tight mb-6">
                            Simple, transparent <br/>
<span className="font-serif italic text-stone-400">pricing</span>.
                        </h2>
<p className="text-stone-500 text-lg font-light leading-relaxed mb-10">
                            Invest in yourself with a plan that fits your pace. No hidden fees, cancel anytime.
                        </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/50 text-stone-900">
<svg className="lucide lucide-dumbbell w-5 h-5" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</span>
<div>
<h3 className="text-base font-semibold text-stone-900">Unlimited Access</h3>
<p className="mt-1 text-sm text-stone-500">Full library of strength, mobility, and cardio courses.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/50 text-stone-900">
<svg className="lucide lucide-smartphone w-5 h-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</span>
<div>
<h3 className="text-base font-semibold text-stone-900">Anywhere, Anytime</h3>
<p className="mt-1 text-sm text-stone-500">Stream on mobile, tablet, or desktop. Offline mode included.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-200/50 text-stone-900">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<div>
<h3 className="text-base font-semibold text-stone-900">Community Support</h3>
<p className="mt-1 text-sm text-stone-500">Join a group of like-minded men on the same journey.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">

<div className="mb-8 flex items-center justify-center md:justify-end">
<div className="inline-flex rounded-full bg-stone-200/50 p-1">
<button aria-pressed="true" className="billing-tab px-6 py-2 text-sm rounded-full font-medium transition-all duration-200 bg-white shadow-sm text-stone-900" data-billing="monthly" type="button">Monthly</button>
<button aria-pressed="false" className="billing-tab px-6 py-2 text-sm rounded-full font-medium transition-all duration-200 text-stone-500 hover:text-stone-900" data-billing="annual" type="button">Annual</button>
</div>
<span className="ml-4 text-[10px] font-bold uppercase tracking-wide text-stone-500 bg-stone-200/50 px-2 py-1 rounded">
                            Save 20%
                        </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col h-full hover:border-stone-300 transition-colors shadow-sm">
<div className="mb-6">
<h3 className="text-lg font-bold uppercase tracking-widest text-stone-900">Standard</h3>
<p className="text-sm text-stone-500 mt-2">Essential tools for progress.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display font-medium text-stone-900 price" data-annual="$190" data-monthly="$19">$19</span>
<span className="text-sm text-stone-400 price-unit" data-annual="/yr" data-monthly="/mo">/mo</span>
</div>
<p className="text-xs text-stone-400 mt-2 billing-note hidden">Billed annually</p>
</div>
<div className="mt-auto space-y-4">
<a className="block w-full text-center bg-stone-100 text-stone-900 hover:bg-stone-200 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors" href="#">Start 7-Day Trial</a>
<ul className="space-y-3 pt-6 border-t border-stone-100">
<li className="flex items-center gap-3 text-sm text-stone-600">
<svg className="lucide lucide-check w-4 h-4 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Beginner Courses
                                    </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<svg className="lucide lucide-check w-4 h-4 text-stone-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> HD Video Quality
                                    </li>
</ul>
</div>
</div>

<div className="bg-stone-900 rounded-3xl p-8 border border-stone-900 flex flex-col h-full text-white relative overflow-hidden">
<div className="absolute top-0 right-0 bg-stone-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl text-white">Popular</div>
<div className="mb-6">
<h3 className="text-lg font-bold uppercase tracking-widest">Pro</h3>
<p className="text-sm text-stone-400 mt-2">Accelerated growth &amp; coaching.</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-display font-medium price" data-annual="$290" data-monthly="$29">$29</span>
<span className="text-sm text-stone-500 price-unit" data-annual="/yr" data-monthly="/mo">/mo</span>
</div>
<p className="text-xs text-stone-500 mt-2 billing-note hidden">Billed annually</p>
</div>
<div className="mt-auto space-y-4">
<a className="block w-full text-center bg-white text-black hover:bg-stone-200 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors" href="#">Start 7-Day Trial</a>
<ul className="space-y-3 pt-6 border-t border-stone-800">
<li className="flex items-center gap-3 text-sm text-stone-300">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Standard
                                    </li>
<li className="flex items-center gap-3 text-sm text-stone-300">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1-on-1 Coach Check-in
                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white border-t border-slate-200" id="trial">
<div className="max-w-6xl mx-auto bg-black text-white rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-800 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="font-display text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8">
                        READY TO <br/>
<span className="italic font-serif text-stone-300">BEGIN?</span>
</h2>
<p className="text-stone-300 mb-10 text-lg font-light">
                        Join thousands of men redefining their strength. It starts with one step.
                    </p>
<button className="bg-white text-black px-8 py-4 rounded-full font-semibold tracking-wide uppercase hover:bg-stone-200 transition-colors transform hover:scale-105 duration-200">
                        Create Account
                    </button>
<p className="mt-4 text-[10px] text-stone-500 uppercase tracking-widest">Cancel anytime.</p>
</div>
<div className="relative h-full min-h-[300px] md:min-h-[400px] hidden md:block group">
<img alt="Gym equipment detail" className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-2xl opacity-80 rotate-3 group-hover:rotate-0 transition-transform duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<a className="font-display text-2xl font-bold tracking-tighter mb-6 block" href="#">CHORUS</a>
<p className="text-stone-500 max-w-sm leading-relaxed mb-8">
                        We produce the best fitness lessons for beginners. Pride in our proven track-record, designed for comfort and freshness.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-stone-600">
<li><a className="hover:text-black transition-colors" href="#">Our Values</a></li>
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4 text-sm text-stone-600">
<li><a className="hover:text-black transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-400">
<p>© 2024 Chorus Fitness Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Terms</a>
<a className="hover:text-stone-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
