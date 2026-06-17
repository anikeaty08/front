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
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af',
400: '#fb7185',
500: '#f43f5e',
900: '#881337',
},
dark: {
900: '#0a0a0a',
800: '#171717',
700: '#262626'
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'fade-in': 'fadeIn 1s ease-out both',
'blur-in': 'blurIn 0.8s ease-out both',
'zoom-slow': 'zoomSlow 20s linear infinite alternate',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(10px)' },
'100%': { opacity: '1', filter: 'blur(0)' },
},
zoomSlow: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Navbar Scroll Effect (Handle transition from Dark Hero to White content)
        const navbar = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navBg.classList.remove('bg-white/0', 'dark:bg-dark-900/0');
                navBg.classList.add('bg-white/90', 'dark:bg-dark-900/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100', 'dark:border-neutral-800');
                
                // Change text color on scroll if mostly white bg
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.remove('text-white');
                     logoText.classList.add('text-neutral-900');
                     
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.remove('text-white/80', 'hover:text-white');
                         link.classList.add('text-neutral-500', 'hover:text-neutral-900');
                     });
                }
            } else {
                navBg.classList.add('bg-white/0', 'dark:bg-dark-900/0');
                navBg.classList.remove('bg-white/90', 'dark:bg-dark-900/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100', 'dark:border-neutral-800');
                
                // Revert text color
                if (!document.documentElement.classList.contains('dark')) {
                     logoText.classList.add('text-white');
                     logoText.classList.remove('text-neutral-900');
                     
                     Array.from(navLinks.children).forEach(link => {
                         link.classList.add('text-white/80', 'hover:text-white');
                         link.classList.remove('text-neutral-500', 'hover:text-neutral-900');
                     });
                }
            }
        });

        // Before & After Slider Logic
        const slider = document.getElementById('comparisonSlider');
        const overlay = document.getElementById('comparisonOverlay');
        const handle = document.getElementById('comparisonHandle');
        const beforeImg = document.getElementById('comparisonImageBefore');
        let isDown = false;

        function updateSlider(x) {
            if (!slider) return;
            const rect = slider.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            
            if (position < 0) position = 0;
            if (position > 100) position = 100;

            overlay.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }

        if (slider) {
            slider.addEventListener('mousedown', () => isDown = true);
            window.addEventListener('mouseup', () => isDown = false);
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                updateSlider(e.clientX);
            });

            // Touch support
            slider.addEventListener('touchstart', () => isDown = true);
            window.addEventListener('touchend', () => isDown = false);
            slider.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                updateSlider(e.touches[0].clientX);
            });
            
            // Make Before Image same width as container on resize
            const resizeImg = () => {
                const width = slider.getBoundingClientRect().width;
                if(beforeImg) beforeImg.style.width = width + 'px';
            };
            window.addEventListener('resize', resizeImg);
            setTimeout(resizeImg, 100);
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/0 dark:bg-dark-900/0 backdrop-blur-none border-b border-transparent transition-all duration-300" id="nav-bg"></div>
<div className="relative flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 text-white" id="logo-icon">
<svg height="100%" viewbox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9 9l-7 3l7 3l3 7l3-7l7-3l-7-3z" fill="currentColor"></path></svg>
</div>
<span className="font-serif text-lg tracking-tight font-medium text-white group-hover:opacity-80 transition-opacity" id="logo-text">CharisLooks</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80" id="nav-links">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#reviews">Stories</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="bg-white text-neutral-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-100 transition-colors" href="#booking">
                    Book Appointment
                </a>
</div>

<button className="md:hidden p-2 text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white dark:bg-dark-900 border-b border-neutral-100 dark:border-neutral-800 p-6 flex flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-lg font-serif text-neutral-900 dark:text-white" href="#services">Services</a>
<a className="text-lg font-serif text-neutral-900 dark:text-white" href="#portfolio">Portfolio</a>
<a className="text-lg font-serif text-indigo-400" href="#booking">Book Now</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[750px] overflow-hidden bg-dark-900">

<div className="absolute inset-0 w-full h-full animate-zoom-slow">
<img alt="Luxury Beauty" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-dark-900"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
</div>

<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">

<div className="max-w-2xl mt-16">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 animate-fade-in-up" style={{animationDelay: '100ms'}}>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-neutral-300 font-medium">New Collection 2024</span>
</div>

<h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] tracking-tight mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    Unveil Your <br/>
<span className="italic font-light text-white/80">True Essence</span>
</h1>

<p className="text-lg text-neutral-300 font-light max-w-md mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '300ms'}}>
                    Curated beauty experiences designed to enhance, not conceal. Discover artistry in hair, skin, and makeup.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors text-center" href="#booking">
                        Book Appointment
                    </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group" href="#services">
                        Explore Services
                        <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="hidden lg:block absolute right-6 bottom-32 animate-fade-in-up" style={{animationDelay: '600ms'}}>
<div className="glass-panel p-6 rounded-2xl max-w-xs backdrop-blur-xl border border-white/10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Trending Now</span>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-black" src="https://randomuser.me/api/portraits/women/32.jpg"/>
<img alt="" className="w-6 h-6 rounded-full border border-black" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="w-6 h-6 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[8px] text-white">+12</div>
</div>
</div>
<h3 className="text-lg font-serif text-white mb-1">Hydra-Glow Facial</h3>
<p className="text-xs text-neutral-400 mb-4">Our most requested treatment this month. Restores vital moisture.</p>
<div className="flex items-center gap-2 text-xs text-indigo-300">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        Available Today
                    </div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
<span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white dark:bg-dark-900" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-4xl mb-2 tracking-tight">Our Services</h2>
<p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">Curated treatments for the modern muse.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors mt-4 md:mt-0" href="#all-services">
                    View Full Menu <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Hair Styling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic">Bridal Artistry</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-xs">Hair &amp; Makeup packages</p>
</div>
<span className="text-sm font-medium">$250+</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Skincare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic">Luxe Facials</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-xs">Hydration &amp; Anti-aging</p>
</div>
<span className="text-sm font-medium">$120+</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800">
<img alt="Makeup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl mb-1 font-serif italic">Evening Glam</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-xs">Full face application</p>
</div>
<span className="text-sm font-medium">$95+</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 dark:bg-dark-800" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center reveal-on-scroll">
<span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">The Results</span>
<h2 className="text-3xl md:text-4xl tracking-tight">Transformations</h2>
</div>

<div className="max-w-4xl mx-auto mb-24 reveal-on-scroll">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl comparison-slider" id="comparisonSlider">

<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">AFTER</span>

<div className="comparison-item" id="comparisonOverlay" style={{width: '50%'}}>
<img alt="Before" className="absolute top-0 left-0 h-full max-w-none w-[100vw] md:w-[64rem] lg:w-[56rem] object-cover" id="comparisonImageBefore" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">BEFORE</span>
</div>

<div className="comparison-handle" id="comparisonHandle" style={{left: '50%'}}>
<div className="comparison-circle bg-white text-indigo-400">
<svg className="lucide lucide-chevrons-left-right w-5 h-5" data-lucide="chevrons-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-400 mt-4">Drag the slider to see the transformation</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-serif text-xl italic">Bridal</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll">
<img className="w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden relative group reveal-on-scroll delay-100">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1457972851104-4fd469440bf9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white dark:bg-dark-900 border-t border-neutral-100 dark:border-neutral-800" id="all-services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

<div className="lg:col-span-5 relative">
<div className="sticky top-32 flex flex-col gap-6 reveal-on-scroll">
<div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl">

<img alt="Menu Visual" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<h3 className="text-2xl font-serif text-white italic mb-2">The Collection</h3>
<p className="text-white/80 text-xs font-light leading-relaxed mb-4">
                                        Explore our full range of services designed for the modern aesthetic. Each treatment is tailored to your unique features.
                                    </p>
<a className="inline-flex items-center gap-2 text-white text-xs font-medium tracking-wide uppercase hover:text-indigo-300 transition-colors" href="#booking">
                                        Book Consultation <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="flex flex-col gap-16">

<div className="flex flex-col gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-8 reveal-on-scroll">
<span className="text-indigo-500 font-bold text-[10px] tracking-[0.2em] uppercase">Service Menu</span>
<h2 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white">Curated Treatments</h2>
</div>

<div className="reveal-on-scroll delay-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
<svg className="lucide lucide-scissors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" x2="8.12" y1="4" y2="15.88"></line><line x1="14.47" x2="20" y1="14.48" y2="20"></line><line x1="8.12" x2="12" y1="8.12" y2="12"></line></svg>
</div>
<h3 className="text-xl font-medium tracking-tight">Hair Artistry</h3>
</div>
<div className="grid gap-3">

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Signature Blowout</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$65</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Includes scalp massage, wash, and volume styling.</p>
<span className="text-[10px] text-neutral-400 font-mono">45m</span>
</div>
</div>

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Balayage &amp; Tone</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$280+</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Hand-painted highlights for natural gradation + gloss.</p>
<span className="text-[10px] text-neutral-400 font-mono">180m</span>
</div>
</div>

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Keratin Treatment</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$350</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Smooths frizz and restores shine for up to 4 months.</p>
<span className="text-[10px] text-neutral-400 font-mono">150m</span>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M3 5h4"></path><path d="M3 9h4"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight">Face &amp; Skin</h3>
</div>
<div className="grid gap-3">

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Signature Soft Glam</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$95</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Radiant skin, defined eyes, and neutral lip application.</p>
<span className="text-[10px] text-neutral-400 font-mono">60m</span>
</div>
</div>

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Hydra-Glow Facial</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$140</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Deep cleansing with hyaluronic infusion.</p>
<span className="text-[10px] text-neutral-400 font-mono">50m</span>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
<svg className="lucide lucide-eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-medium tracking-tight">Lashes &amp; Brows</h3>
</div>
<div className="grid gap-3">

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Lash Lift &amp; Tint</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$85</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Semi-permanent curl and color for natural lashes.</p>
<span className="text-[10px] text-neutral-400 font-mono">45m</span>
</div>
</div>

<div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
<div className="flex justify-between items-start mb-1">
<span className="text-base font-medium text-neutral-900 dark:text-white">Brow Lamination</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">$90</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-neutral-500 dark:text-neutral-400 font-light max-w-[80%]">Restructures brow hairs to keep them in a desired shape.</p>
<span className="text-[10px] text-neutral-400 font-mono">40m</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white dark:bg-black relative overflow-hidden" id="booking">

<div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col justify-center reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif mb-6">Secure Your <br/><span className="text-indigo-400 italic">Spot</span></h2>
<p className="text-neutral-400 mb-8 font-light">Select your preferred treatment and time. We require a 20% deposit for all online bookings.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="p-2 rounded-full bg-white/5 border border-white/10"><svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Instant Confirmation</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="p-2 rounded-full bg-white/5 border border-white/10"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></div>
<span>24h Cancellation Policy</span>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-white dark:bg-dark-800 rounded-3xl p-6 md:p-8 shadow-2xl text-neutral-900 dark:text-white reveal-on-scroll delay-200">

<div className="flex items-center gap-4 mb-8 text-xs font-bold tracking-widest uppercase text-neutral-400">
<span className="text-indigo-400">01. Service</span>
<span className="w-8 h-px bg-neutral-200 dark:bg-neutral-700"></span>
<span className="">02. Date</span>
<span className="w-8 h-px bg-neutral-200 dark:bg-neutral-700"></span>
<span className="">03. Details</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<button className="text-left p-4 rounded-xl border-2 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 relative">
<div className="absolute top-3 right-3 text-indigo-400"><svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
<span className="block font-medium text-sm mb-1">Signature Soft Glam</span>
<span className="block text-xs text-neutral-500 dark:text-neutral-400">60 mins • $95</span>
</button>
<button className="text-left p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-indigo-300 transition-colors">
<span className="block font-medium text-sm mb-1">Bridal Trial</span>
<span className="block text-xs text-neutral-500 dark:text-neutral-400">90 mins • $150</span>
</button>
<button className="text-left p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-indigo-300 transition-colors">
<span className="block font-medium text-sm mb-1">Luxe Facial</span>
<span className="block text-xs text-neutral-500 dark:text-neutral-400">50 mins • $120</span>
</button>
<button className="text-left p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-indigo-300 transition-colors">
<span className="block font-medium text-sm mb-1">Blowout</span>
<span className="block text-xs text-neutral-500 dark:text-neutral-400">45 mins • $65</span>
</button>
</div>

<div className="mb-8">
<h4 className="text-sm font-medium mb-4">Select Date &amp; Time</h4>
<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-neutral-50 dark:bg-dark-900 rounded-xl p-4">
<div className="flex justify-between mb-4 text-sm font-medium">
<span>October 2023</span>
<div className="flex gap-2">
<svg className="lucide lucide-chevron-left w-4 h-4 cursor-pointer" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<svg className="lucide lucide-chevron-right w-4 h-4 cursor-pointer" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-xs text-neutral-400 mb-2">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-xs font-medium">
<span className="text-neutral-300">29</span><span className="text-neutral-300">30</span><span>1</span><span>2</span><span className="bg-indigo-400 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto shadow-lg shadow-indigo-400/40">3</span><span>4</span><span>5</span>
</div>
</div>

<div className="flex-1 grid grid-cols-2 gap-2 content-start">
<button className="py-2 px-3 rounded-lg text-xs border border-neutral-200 dark:border-neutral-700 hover:bg-indigo-50 dark:hover:bg-white/5">10:00 AM</button>
<button className="py-2 px-3 rounded-lg text-xs bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md">11:30 AM</button>
<button className="py-2 px-3 rounded-lg text-xs border border-neutral-200 dark:border-neutral-700 hover:bg-indigo-50 dark:hover:bg-white/5">2:00 PM</button>
<button className="py-2 px-3 rounded-lg text-xs border border-neutral-200 dark:border-neutral-700 hover:bg-indigo-50 dark:hover:bg-white/5">4:15 PM</button>
</div>
</div>
</div>

<button className="w-full py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-lg">
                        Confirm Booking
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-dark-900 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12 reveal-on-scroll">
<h2 className="text-3xl font-serif">Client Stories</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 reveal-on-scroll delay-100">

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-dark-800 p-8 rounded-2xl snap-center">
<div className="flex gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700 dark:text-neutral-300">"Absolutely transformed my look for my wedding. The attention to detail was impeccable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div>
<p className="text-sm font-medium">Sarah Jenkins</p>
<p className="text-xs text-neutral-400">Bridal Package</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-dark-800 p-8 rounded-2xl snap-center">
<div className="flex gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700 dark:text-neutral-300">"The atmosphere is so calming and high-end. Best facial I've had in the city."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
</div>
<div>
<p className="text-sm font-medium">Elena Rodriguez</p>
<p className="text-xs text-neutral-400">Skincare</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-neutral-50 dark:bg-dark-800 p-8 rounded-2xl snap-center">
<div className="flex gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-serif italic mb-6 text-neutral-700 dark:text-neutral-300">"My hair has never looked healthier. The balayage technique used is pure magic."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/22.jpg"/>
</div>
<div>
<p className="text-sm font-medium">Priya Patel</p>
<p className="text-xs text-neutral-400">Hair Styling</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-300 py-20 px-6 border-t border-neutral-800" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-6">
<div className="flex items-center gap-2 text-indigo-400">
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9 9l-7 3l7 3l3 7l3-7l7-3l-7-3z" fill="currentColor"></path></svg>
<span className="font-serif text-xl text-white tracking-tight">CharisLooks</span>
</div>
<p className="text-xs text-neutral-500 font-light leading-relaxed max-w-xs">
                    Elevating beauty through personalized artistry and luxurious care. Located in the heart of the city.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Explore</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#services">Services Menu</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">Contact</h4>
<ul className="space-y-3 text-xs font-light">
<li className="flex gap-2 items-start">
<svg className="lucide lucide-map-pin w-4 h-4 shrink-0 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>123 Fifth Avenue, New York, NY 10010</span>
</li>
<li className="flex gap-2 items-center">
<svg className="lucide lucide-phone w-4 h-4 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+1 (212) 555-0199</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm">FAQ</h4>
<div className="space-y-3 text-xs font-light">
<details className="group cursor-pointer">
<summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
<span>Do you accept walk-ins?</span>
<svg className="lucide lucide-chevron-down w-3 h-3 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="pt-2 text-neutral-500">We recommend booking in advance, but walk-ins are welcome based on availability.</p>
</details>
<details className="group cursor-pointer">
<summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
<span>What is the cancellation policy?</span>
<svg className="lucide lucide-chevron-down w-3 h-3 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="pt-2 text-neutral-500">Cancellations must be made 24 hours prior to avoid a 50% service fee.</p>
</details>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 CharisLooks Beauty. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
