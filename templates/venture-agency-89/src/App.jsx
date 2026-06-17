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

        // 1. Menu Toggle Logic
        function toggleMenu() {
            const menu = document.getElementById('fullscreen-menu');
            const isOpen = menu.classList.contains('menu-open');
            
            if (isOpen) {
                menu.classList.remove('menu-open');
                menu.classList.add('menu-closed');
            } else {
                menu.classList.remove('menu-closed');
                menu.classList.add('menu-open');
            }
        }

        // 2. Parallax Effect Logic for Hero
        const heroImg = document.getElementById('hero-image');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                // Move image slower than scroll speed to create parallax
                // TranslateY moves the image down as we scroll down
                heroImg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            }
        });

        // 3. Text Reveal Logic (Word by Word)
        document.addEventListener("DOMContentLoaded", function() {
            const revealElements = document.querySelectorAll('.reveal-text');

            revealElements.forEach(element => {
                const text = element.innerText;
                // Split text into words, wrap in span for masking, and inner span for animation
                const words = text.split(' ').map(word => {
                    return `<span class="word-wrapper"><span class="word-inner">${word}&nbsp;</span></span>`;
                }).join('');
                
                element.innerHTML = words;
            });

            // Intersection Observer to trigger animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        
                        // Select all words inside the revealed element
                        const innerWords = entry.target.querySelectorAll('.word-inner');
                        
                        // Stagger the animation
                        innerWords.forEach((word, index) => {
                            word.style.transitionDelay = `${index * 0.03}s`;
                        });
                        
                        // Handle Badges if present in same section
                        const badges = entry.target.parentElement.querySelectorAll('.reveal-badge');
                        badges.forEach(badge => {
                            if(badge.classList.contains('scale-0')) {
                                badge.classList.remove('scale-0');
                                badge.classList.add('scale-100');
                            }
                            if(badge.classList.contains('opacity-0')) {
                                badge.classList.remove('opacity-0');
                                badge.classList.add('opacity-100');
                            }
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white menu-closed transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden grain-overlay backdrop-blur-sm" id="fullscreen-menu">

<div className="relative z-10 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-lg font-medium tracking-tight">
<div>The Venture Agency.</div>
<button className="cursor-pointer hover:opacity-70 transition-opacity" onclick="toggleMenu()">Close</button>
</div>

<div className="relative z-10 flex-1 flex flex-col justify-center items-center gap-2 md:gap-6">
<a className="group relative overflow-hidden" href="#">
<span className="block text-5xl md:text-7xl lg:text-8xl tracking-tighter font-normal hover:text-gray-400 transition-colors duration-300">About</span>
</a>
<a className="group relative overflow-hidden" href="#">
<span className="block text-5xl md:text-7xl lg:text-8xl tracking-tighter font-normal hover:text-gray-400 transition-colors duration-300">Gallery</span>
</a>
<a className="group relative overflow-hidden" href="#">
<span className="block text-5xl md:text-7xl lg:text-8xl tracking-tighter font-normal hover:text-gray-400 transition-colors duration-300">News</span>
</a>
<a className="group relative overflow-hidden" href="#">
<span className="block text-5xl md:text-7xl lg:text-8xl tracking-tighter font-normal hover:text-gray-400 transition-colors duration-300">Contact Us</span>
</a>
</div>

<div className="relative z-10 w-full px-6 py-6 md:px-12 md:pb-12 flex flex-col md:flex-row justify-between items-end text-sm md:text-base text-white/60">
<div className="flex gap-4 md:gap-8 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#">X</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div>
<p>San Diego — Paris</p>
</div>
</div>
</div>

<header className="relative w-full h-screen overflow-hidden bg-black text-white">

<div className="absolute inset-0 overflow-hidden">
<img alt="Mossy Rocks" className="w-full h-[120%] object-cover opacity-80" id="hero-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{willChange: 'transform'}}/>
</div>

<nav className="absolute top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-10 text-lg font-medium tracking-tight">
<div className="reveal-on-load">The Venture Agency.</div>
<button className="cursor-pointer hover:opacity-70 transition-opacity reveal-on-load" onclick="toggleMenu()">Menu</button>
</nav>

<div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-12 z-10 pointer-events-none">
<h1 className="text-[24vw] leading-[0.8] tracking-tighter font-normal select-none reveal-text">rejouice</h1>
</div>
</header>

<section className="px-6 py-20 md:px-12 md:py-32 max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 text-xl md:text-2xl font-normal leading-snug">
<div className="max-w-md">
<p className="reveal-text">Full-service agency.</p>
<p className="reveal-text">Two engagement models.</p>
</div>
<div className="mt-4 md:mt-0">
<p className="reveal-text">Paris &amp; San Diego</p>
</div>
</div>
<h2 className="reveal-text text-3xl md:text-5xl lg:text-[4.2rem] leading-[1.1] tracking-tight font-normal max-w-6xl">
            We design and develop market-defining brands through award-winning deliverables. Choose full cash compensation or offset up to 50% of our fees for equity in your company. Your vision, your decision.
        </h2>
</section>

<section className="py-24 md:py-40 flex flex-col items-center justify-center text-center px-4">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg font-medium reveal-text">Agency &amp; Venture</span>
<span className="bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider scale-0 transition-transform duration-700 delay-500 reveal-badge">Models</span>
<span className="reveal-badge opacity-0 transition-opacity duration-700 delay-700">
<svg className="lucide lucide-corner-right-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="10 9 15 14 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path></svg>
</span>
</div>
<a className="group relative inline-block" href="#">
<h3 className="reveal-text text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight border-b-2 border-transparent hover:border-black transition-colors duration-300 pb-1">
                Explore our services and engagement models
            </h3>
</a>
</section>

<section className="px-6 md:px-12 pb-32 max-w-[1800px] mx-auto">
<div className="flex justify-between items-end mb-8 text-xl">
<span className="font-normal reveal-text">Transforming visions into brands.</span>
<a className="flex items-center gap-2 font-normal hover:underline reveal-text" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                See the work
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="relative group aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden bg-gray-200">
<img alt="Rivian" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-8 left-0 w-full flex justify-center text-white tracking-[0.2em] font-medium text-lg">
<span className="reveal-text">RIVIAN</span>
</div>
</div>

<div className="relative group aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden bg-gray-200">
<img alt="Oura" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-0 w-full flex justify-center text-white tracking-[0.2em] font-medium text-lg">
<span className="reveal-text">ŌURA</span>
</div>
</div>

<div className="relative group aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden bg-gray-200">
<img alt="Moxion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-0 w-full flex justify-center text-white tracking-[0.2em] font-medium text-lg">
<span className="reveal-text">MOXION</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 md:px-12 md:py-32 max-w-[1800px] mx-auto border-t border-gray-300">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 text-xl md:text-2xl font-normal leading-snug">
<div className="max-w-md">
<p className="reveal-text">We operate on a simple philosophy:</p>
<p className="reveal-text">Quality over quantity.</p>
</div>
</div>
<h2 className="reveal-text text-3xl md:text-5xl lg:text-[4.2rem] leading-[1.1] tracking-tight font-normal max-w-6xl">
            We partner with 5 clients each year. This allows for intense focus on the transformation and launch of your brand by our very best team, which is the only team we have.
        </h2>
</section>

<section className="h-[80vh] w-full flex items-center justify-center relative overflow-hidden bg-[#faf8f5]">

<div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full orb-gradient absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>

<div className="relative z-10 w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
<svg className="w-full h-full animate-spin-slow" style={{animation: 'spin 20s linear infinite'}} viewbox="0 0 200 200">
<defs>
<path d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" id="circlePath"></path>
</defs>
<circle cx="100" cy="100" fill="none" opacity="0.6" r="80" stroke="white" strokeWidth="1.5"></circle>
<circle cx="20" cy="100" fill="white" r="3"></circle>
<text fill="white" fontFamily="Inter" fontSize="12" font-weight="500" letter-spacing="1">
<textpath href="#circlePath" startoffset="50%" text-anchor="middle">
                        1 seat available for 2023
                    </textpath>
</text>
</svg>
</div>
</section>

<section className="px-6 py-20 md:px-12 md:py-32 max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 text-xl md:text-2xl font-normal leading-snug">
<div className="max-w-md">
<p className="reveal-text">Harnessing emotions</p>
<p className="reveal-text">to connect with your audience.</p>
</div>
</div>
<h2 className="reveal-text text-3xl md:text-5xl lg:text-[4.2rem] leading-[1.1] tracking-tight font-normal max-w-[90%]">
            Data matters, yet it's emotions that drive buying decisions. We don't believe in 'one size fits all.' Instead, we craft bespoke brand experiences that resonate with your audience and boost your KPIs. Our approach is centered on collaboration, transparency, and flexibility. We deliver on time and with precision.
        </h2>
</section>

<section className="pt-20 pb-40 overflow-hidden relative">
<div className="px-6 md:px-12 mb-10">
<h2 className="reveal-text text-6xl md:text-[8rem] lg:text-[10rem] leading-none tracking-tighter font-normal">
                Get in touch.
            </h2>
</div>

<div className="flex gap-4 overflow-x-auto px-6 md:px-12 no-scrollbar pb-10">

<div className="flex-none w-[300px] md:w-[450px] aspect-[4/3] bg-gray-200">
<img alt="Moxion Van" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>

<div className="flex-none w-[300px] md:w-[450px] aspect-[4/3] bg-gray-200">
<img alt="Woman" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex-none w-[300px] md:w-[450px] aspect-[4/3] bg-gray-200">
<img alt="Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex-none w-[300px] md:w-[450px] aspect-[4/3] bg-gray-200">
<img alt="Ring Render" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="flex-none w-[300px] md:w-[450px] aspect-[4/3] bg-gray-200">
<img alt="Rivian" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex flex-col items-center justify-center mt-20 text-center">
<div className="flex items-center gap-1 mb-2 text-sm">
<span className="reveal-text">We're uniquely built</span>
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<a className="reveal-text text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight border-b-2 border-transparent hover:border-black transition-colors duration-300 pb-1" href="#">
                Meet your team
            </a>
</div>
</section>

<footer className="bg-black text-white pt-24 px-6 md:px-12 pb-6 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start mb-32 md:mb-48 max-w-[1800px] mx-auto">
<div className="mb-12 md:mb-0">
<h3 className="reveal-text text-3xl md:text-4xl tracking-tight mb-8">Relax. We got you.</h3>
<button className="border border-white/30 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-colors text-sm font-medium">
                    Take a seat
                </button>
</div>
<div className="flex gap-16 md:gap-32 text-lg font-medium leading-loose">
<ul className="space-y-1">
<li><a className="hover:text-gray-400" href="#">Home</a></li>
<li><a className="hover:text-gray-400" href="#">Work</a></li>
<li><a className="hover:text-gray-400" href="#">About</a></li>
<li><a className="hover:text-gray-400" href="#">Services &amp; Models</a></li>
<li><a className="hover:text-gray-400" href="#">Contact</a></li>
</ul>
<ul className="space-y-1">
<li><a className="hover:text-gray-400" href="#">X <span className="text-[10px] align-top">↗</span></a></li>
<li><a className="hover:text-gray-400" href="#">Instagram <span className="text-[10px] align-top">↗</span></a></li>
<li><a className="hover:text-gray-400" href="#">LinkedIn <span className="text-[10px] align-top">↗</span></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end text-sm text-gray-400 mb-6 max-w-[1800px] mx-auto">
<div className="mb-4 md:mb-0">
<p>San Diego—California</p>
<p>Paris—France</p>
</div>
<div className="flex gap-8">
<a className="hover:text-white" href="#">biz@rejouice.com</a>
<span>©2023 legal</span>
</div>
</div>
<div className="w-full flex justify-center items-end">
<h1 className="text-[24vw] leading-[0.7] tracking-tighter font-normal text-white select-none reveal-text">rejouice</h1>
</div>
</footer>


    </>
  );
}
