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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({ strokeWidth: 1.5 });

        // Navigation & Page Toggling Logic
        const app = document.getElementById('app');
        const pageHome = document.getElementById('page-home');
        const pageCollections = document.getElementById('page-collections');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbar = document.getElementById('navbar');

        function navigate(page) {
            // Fade out
            app.classList.add('fade-out');
            
            setTimeout(() => {
                // Switch display
                if (page === 'home') {
                    pageHome.classList.remove('hidden');
                    pageCollections.classList.add('hidden');
                } else {
                    pageHome.classList.add('hidden');
                    pageCollections.classList.remove('hidden');
                }

                // Update active state on nav links
                navLinks.forEach(link => {
                    if (link.dataset.target === page) {
                        link.classList.remove('text-neutral-400');
                        link.classList.add('text-black', 'active');
                    } else {
                        link.classList.add('text-neutral-400');
                        link.classList.remove('text-black', 'active');
                    }
                });

                window.scrollTo(0, 0);
                
                // Re-trigger animations
                document.querySelectorAll('.reveal').forEach(el => {
                    el.classList.remove('active');
                    setTimeout(() => {
                        observer.observe(el);
                    }, 100);
                });

                // Fade in
                app.classList.remove('fade-out');
            }, 400); // Wait for fade out transition
        }

        // Navbar blur on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('backdrop-blur-xl', 'bg-white/80', 'border-b', 'border-neutral-200');
                navbar.classList.remove('py-8');
                navbar.classList.add('py-4');
            } else {
                navbar.classList.remove('backdrop-blur-xl', 'bg-white/80', 'border-b', 'border-neutral-200');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-8');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Horizontal drag for the Wardrobe slider
        const slider = document.getElementById('wardrobe-slider');
        if (slider) {
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('cursor-grabbing');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('cursor-grabbing');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('cursor-grabbing');
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; // Scroll speed
                slider.scrollLeft = scrollLeft - walk;
            });
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-700" id="navbar">
<div className="container mx-auto px-6 py-8 flex justify-between items-center">

<button className="z-10 group flex flex-col gap-1 items-start" onclick="navigate('home')">
<div className="flex items-end gap-1">
<span className="font-sans font-medium text-3xl tracking-tighter text-[#f39200]">uni</span>
<span className="font-serif font-medium text-3xl tracking-tighter text-[#ee4b2b] ml-1">वस्त्र</span>
</div>
<span className="font-serif italic text-sm text-[#e4ab0f] tracking-wide">The Grooming Studio</span>
</button>
<div className="hidden md:flex gap-12 text-sm font-normal tracking-wide uppercase text-black" id="nav-links">
<button className="relative pb-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left nav-link active" data-target="home" onclick="navigate('home')">Home</button>
<button className="relative pb-1 text-neutral-400 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-black transition-colors nav-link" data-target="collections" onclick="navigate('collections')">Collections</button>
</div>
<button className="md:hidden text-black z-10">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="page-transition" id="app">

<main className="block" id="page-home">

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#f8f8f8]">

<div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8] to-[#efefef] opacity-80"></div>
<div className="relative z-10 text-center flex flex-col items-center px-6">
<h1 className="reveal font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] leading-tight">
                        Crafted for<br/>Identity.
                    </h1>
</div>
</section>

<section className="py-32 bg-[#f8f8f8]">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid md:grid-cols-12 gap-16 md:gap-24 items-center">

<div className="md:col-span-5 reveal relative w-full aspect-[3/4] hover-zoom overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-60"></div>

<img alt="Founder" className="w-full h-full object-cover object-center bg-white shadow-2xl" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-7 reveal reveal-delay-1 flex flex-col justify-center">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug mb-10 text-[#111111]">
                                A vision built on craftsmanship, identity, and personal style. Every piece is designed to reflect individuality and confidence.
                            </h2>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden relative border-t border-neutral-200">
<div className="container mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12 max-w-7xl">
<div className="reveal">
<h2 className="font-serif text-4xl tracking-tight mb-4">The Wardrobe</h2>
<p className="text-neutral-400 text-base">Swipe to explore curated pieces.</p>
</div>

<div className="reveal reveal-delay-1 flex flex-wrap gap-x-6 gap-y-3 w-full md:w-2/3 justify-end text-right">
<span className="text-sm uppercase tracking-wider text-black">Casual Shirts</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Denims</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">T-Shirts</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Lowers</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Formal Shirts</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Trousers</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Suits</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Blazers</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Kurta Pyjama</span>
<span className="text-sm uppercase tracking-wider text-neutral-400">Indo Western</span>
</div>
</div>

<div className="reveal relative w-full mt-16 max-w-[100vw]">

<div className="absolute top-0 w-full h-[3px] bg-[#dcdcdc] shadow-sm z-0"></div>

<div className="flex gap-16 overflow-x-auto no-scrollbar px-6 md:px-[10vw] pb-32 pt-2 cursor-grab active:cursor-grabbing relative z-10" id="wardrobe-slider">

<div className="hanger-item group relative flex flex-col items-center flex-shrink-0 w-[260px] md:w-[320px]">
<div className="hanger-hook w-[2px] h-12 bg-neutral-400 absolute top-0 origin-top"></div>
<div className="hanger-image w-full aspect-[3/4] bg-neutral-50 mt-12 overflow-hidden transition-all duration-700 relative">
<img alt="Casual Shirt" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<h4 className="font-serif text-xl tracking-tight">Textured Linen</h4>
</div>
</div>

<div className="hanger-item group relative flex flex-col items-center flex-shrink-0 w-[260px] md:w-[320px]">
<div className="hanger-hook w-[2px] h-12 bg-neutral-400 absolute top-0 origin-top"></div>
<div className="hanger-image w-full aspect-[3/4] bg-neutral-50 mt-12 overflow-hidden transition-all duration-700 relative">
<img alt="Denim" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<h4 className="font-serif text-xl tracking-tight">Raw Indigo</h4>
</div>
</div>

<div className="hanger-item group relative flex flex-col items-center flex-shrink-0 w-[260px] md:w-[320px]">
<div className="hanger-hook w-[2px] h-12 bg-neutral-400 absolute top-0 origin-top"></div>
<div className="hanger-image w-full aspect-[3/4] bg-neutral-50 mt-12 overflow-hidden transition-all duration-700 relative">
<img alt="Suit" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<h4 className="font-serif text-xl tracking-tight">Bespoke Navy</h4>
</div>
</div>

<div className="hanger-item group relative flex flex-col items-center flex-shrink-0 w-[260px] md:w-[320px]">
<div className="hanger-hook w-[2px] h-12 bg-neutral-400 absolute top-0 origin-top"></div>
<div className="hanger-image w-full aspect-[3/4] bg-neutral-50 mt-12 overflow-hidden transition-all duration-700 relative">
<img alt="Indo Western" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&amp;w=2652&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<h4 className="font-serif text-xl tracking-tight">Silk Bandhgala</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#f8f8f8]">
<div className="container mx-auto px-6 text-center max-w-6xl">
<h2 className="reveal font-serif text-2xl tracking-tight mb-20 text-neutral-400">Curating the Finest Brands</h2>
<div className="reveal reveal-delay-1 flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-16">
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">U.S. Polo</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Being Human</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Levi's</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Numero Uno</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Blackberrys</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Canoe</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Egoss</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Londonberry</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Richlook</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Spykar Women</span>
<span className="font-serif text-xl md:text-2xl text-neutral-400 hover:text-[#111111] transition-colors duration-500 cursor-default">Peachmode</span>
</div>
</div>
</section>
</main>

<main className="hidden min-h-screen pt-40 pb-32 bg-[#f8f8f8]" id="page-collections">
<div className="container mx-auto px-6 max-w-7xl">
<div className="mb-24 flex justify-between items-end">
<h1 className="font-serif text-5xl md:text-6xl tracking-tight text-[#111111]">Collections.</h1>
<p className="hidden md:block text-neutral-400 text-base max-w-xs text-right">The complete catalog of tailored and ready-to-wear essentials.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">


<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Casual Shirts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Casual Shirts</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Denims" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Denims</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="T-Shirts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">T-Shirts</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Lowers" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Lowers</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Track Suits" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Track Suits</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Formal Shirts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Formal Shirts</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Trousers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=1994&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Trousers</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Suits" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Suits</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Blazers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Blazers</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Kurta Pyjama" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Kurta Pyjama</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Waistcoat" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Waistcoat</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>

<div className="group cursor-pointer hover-lift">
<div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden mb-8 hover-zoom">
<img alt="Indo Western" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&amp;w=2652&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight">Indo Western</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase tracking-widest">View Edit</p>
</div>
</div>
</div>
</main>

<footer className="py-16 bg-[#f8f8f8] border-t border-neutral-200 text-[#111111]">
<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center gap-8">

<div className="flex items-end gap-1 opacity-80">
<span className="font-sans font-medium text-2xl tracking-tighter text-[#f39200]">uni</span>
<span className="font-serif font-medium text-2xl tracking-tighter text-[#ee4b2b] ml-1">वस्त्र</span>
</div>
<p className="text-sm text-neutral-400 tracking-wider uppercase">
                    © 2024 The Grooming Studio. All rights reserved.
                </p>
</div>
</footer>
</div>


    </>
  );
}
