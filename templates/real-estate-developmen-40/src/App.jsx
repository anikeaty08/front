import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.documentElement.classList.add('js-active');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Sofia Pro"', 'sans-serif'],
},
colors: {
brand: {
black: '#121212',
dark: '#1C1C1C',
gray: '#888888',
light: '#F4F4F4',
white: '#FFFFFF',
accent: '#2D2D2D'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
normal: '0em',
wide: '0.02em',
},
}
}
}



      // Iconify
      lucide.createIcons();

      // --- SCROLL ANIMATION OBSERVER ---
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      // Re-initialize observer on page change or load
      function initObserver() {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
          observer.observe(el);
        });
      }

      // Initialize on load
      window.addEventListener('load', initObserver);

      // --- NAVIGATION LOGIC ---
      function navigateTo(pageId) {
          window.scrollTo(0, 0);

          document.querySelectorAll('.page-section').forEach(section => {
              section.classList.remove('active');
          });

          const target = document.getElementById(pageId);
          if (target) {
              target.classList.add('active');
              // Small delay to allow display:block to apply before re-triggering animations if needed
              setTimeout(initObserver, 100);
          }

          // Reset Navbar for specific pages
          const nav = document.getElementById('navbar');
          if (nav) {
            if (pageId === 'home') {
              // Ensure we are back to transparency/white text immediately
              nav.classList.remove('text-brand-dark', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
              nav.classList.add('text-white');
            } else {
              nav.classList.remove('text-white');
              nav.classList.add('text-brand-dark');
            }
          }
      }

      // --- NAVBAR SCROLL EFFECT (HOME PAGE) ---
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const homeSection = document.getElementById('home');

        // Only apply scroll effect if we are on the home page
        if (homeSection.classList.contains('active')) {
          if (window.scrollY > window.innerHeight - 100) {
            nav.classList.remove('text-white');
            nav.classList.add('text-brand-dark', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
          } else {
            nav.classList.add('text-white');
            nav.classList.remove('text-brand-dark', 'bg-white/90', 'backdrop-blur-md', 'shadow-sm');
          }
        }
      });

      // --- MOBILE MENU ---
      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');

        if (menu) {
          if (menu.classList.contains('opacity-0')) {
            // Open Menu
            menu.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
            if(icon) icon.classList.add('text-white');
          } else {
            // Close Menu
            menu.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
             // Check if we need to revert icon color based on scroll/page
             const nav = document.getElementById('navbar');
             if (nav.classList.contains('text-brand-dark')) {
                 // icon stays inherited color
             }
          }
        }
      }

      // --- CHATBOT ---
      function toggleChat() {
        const chatWindow = document.getElementById('chat-window');
        if (chatWindow.classList.contains('hidden')) {
          chatWindow.classList.remove('hidden');
          chatWindow.classList.add('flex');
        } else {
          chatWindow.classList.add('hidden');
          chatWindow.classList.remove('flex');
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-[60] transition-all duration-500" id="navbar">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">

<button className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity z-[70] focus:outline-none" onclick="navigateTo('home')">
          ose_
        </button>
<div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-tight">
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('about')">
            About
          </button>
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('haus')">
            HAUS Collection
          </button>
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('brokerage')">
            Brokerage
          </button>
<button className="hover:bg-brand-gray transition-colors duration-300 uppercase hover:border-brand-black/10 text-xs font-semibold tracking-wide border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6 text-white" onclick="navigateTo('contact')">
            Contact
          </button>
</div>

<button className="md:hidden z-[70]" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6 transition-colors duration-300" data-lucide="menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>

<div className="fixed inset-0 bg-[#1C1C1C] z-[65] flex flex-col justify-center items-center opacity-0 pointer-events-none transition-all duration-500 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-10 text-center">
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('home'); toggleMobileMenu()">
            Home
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('about'); toggleMobileMenu()">
            About
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('haus'); toggleMobileMenu()">
            HAUS Collection
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('brokerage'); toggleMobileMenu()">
            Brokerage
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('contact'); toggleMobileMenu()">
            Contact
          </button>
</nav>
</div>
</nav>

<main className="min-h-screen">

<section className="page-section active" id="home">

<div className="relative h-screen w-full overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b z-10 pointer-events-none from-black/60 via-black/10 to-black/80"></div>

<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="w-full h-full object-cover pointer-events-none scale-[1.35]" frameborder="0" src="https://www.youtube.com/embed/N1qPJLmNnyg?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;playsinline=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;playlist=N1qPJLmNnyg" title="HAUS FAQRA video"></iframe>
</div>
<div className="md:px-12 flex flex-col z-20 h-full max-w-[1800px] mx-auto relative justify-center px-6 text-white">
<h1 className="text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] select-none drop-shadow-2xl text-white">
<span className="block opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s'}}>
                on
              </span>
<span className="block opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s'}}>
                site
              </span>
<span className="block opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s'}}>
                experts_
              </span>
</h1>
</div>
<div className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-4 pointer-events-none text-white/90" style={{animation: 'bounce 2s infinite'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
<span className="text-xs font-bold tracking-[0.2em] uppercase">
              Scroll to explore
            </span>
</div>
</div>
<div className="bg-brand-white text-brand-dark py-24 md:py-32">
<div className="md:px-12 reveal-on-scroll max-w-[1800px] mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-semibold tracking-tighter mb-8">
              Timeless assets,
              <br className="hidden md:block"/>
              Modern development.
            </h2>
<p className="md:text-xl text-brand-gray leading-relaxed text-brand-accent text-lg font-normal tracking-tight max-w-2xl mb-10">
              OSE creates considered living spaces shaped by architecture,
              longevity, and over 40 years of real-estate expertise. Through the
              HAUS Collection, we transform land into long-term, high-value
              assets built for clarity, comfort, and a new pace of living in
              Lebanon.
            </p>
<button className="flex items-center gap-2 text-sm font-semibold border-b border-brand-dark pb-1 hover:opacity-70 transition-opacity w-fit group" onclick="navigateTo('haus-faqra')">
              explore haus faqra
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="md:px-12 md:py-40 max-w-[1800px] mr-auto ml-auto pt-12 pr-6 pb-32 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-light pb-6 reveal-on-scroll">
<h2 className="md:text-5xl text-brand-black text-3xl font-bold tracking-tighter">
              Featured Project
            </h2>
<span className="text-sm font-medium text-brand-gray md:mb-2">
              HAUS FAQRA
            </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
<div className="lg:col-span-8 relative group cursor-pointer reveal-on-scroll" onclick="navigateTo('haus-faqra')">
<div className="overflow-hidden bg-brand-light aspect-[16/9] w-full relative">

<img alt="Haus Faqra - Modern Mountain Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fc46c7e-c12d-48eb-8165-a6ba346afaa6_800w.webp?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex z-10 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="backdrop-blur-sm text-brand-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl bg-white/95">
                    View Project
                  </span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col reveal-on-scroll delay-100 pt-4 pb-4 justify-between">
<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  A curated collection of mountain homes.
                </h3>
<p className="text-brand-gray leading-relaxed font-normal">
                  A limited collection of mountain homes built for long-term
                  value. 22 Scandinavian-inspired duplex chalets within a gated
                  community — crafted for privacy, natural light, and clarity.
                  Designed as enduring assets in one of Lebanon’s most exclusive
                  mountain destinations.
                </p>
</div>
<button className="mt-8 px-8 py-4 border border-brand-black/20 text-brand-black rounded-full font-medium text-sm hover:bg-brand-black transition-all w-fit hover:text-white" onclick="navigateTo('haus-faqra')">
                View Project
              </button>
</div>
</div>
</div>

<div className="bg-brand-black py-32 md:py-40 text-white">
<div className="max-w-[1800px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t pt-12 gap-x-12 gap-y-12 border-white/20">
<div className="space-y-2 reveal-on-scroll">
<span className="block text-5xl md:text-6xl font-bold tracking-tighter">
                  40+
                </span>
<span className="text-sm font-medium uppercase tracking-wide text-white/60">
                  Years Experience
                </span>
</div>
<div className="space-y-2 reveal-on-scroll delay-100">
<span className="block text-5xl md:text-6xl font-bold tracking-tighter">
                  22
                </span>
<span className="text-sm font-medium uppercase tracking-wide text-white/60">
                  Units in Haus Faqra
                </span>
</div>
<div className="space-y-2 reveal-on-scroll delay-200">
<span className="block md:text-6xl text-5xl font-bold tracking-tighter">
                  $10M +
                </span>
<span className="text-sm font-medium uppercase tracking-wide text-white/60">
                  Property Value Managed
                </span>
</div>
<div className="flex items-end justify-start lg:justify-end reveal-on-scroll delay-300">
<button className="group flex items-center gap-4 text-lg font-medium transition-colors hover:text-white/70" onclick="navigateTo('about')">
                  About Us
                  <div className="text-brand-black rounded-full p-2 group-hover:bg-white/80 transition-transform duration-300 group-hover:translate-x-1 bg-white">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-40">
<div className="mb-20 max-w-2xl reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              The Collection
            </h2>
<p className="text-brand-gray leading-relaxed text-lg font-normal">
              A series of curated living spaces designed for escape. Defined by
              clean lines, natural light, and intelligent spatial planning
              across Lebanon.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer reveal-on-scroll" onclick="navigateTo('haus-faqra')">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg">

<img alt="Haus Faqra - Mountain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56597ec8-243b-4c3f-a5cb-6666f56dcb3b_1600w.webp"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight">Haus Faqra</h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  Selling Now
                </span>
</div>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg relative">
<div className="z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Haus Beirut - Heritage" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8683ddb3-cce8-4c14-9c0a-7a33c569f711_800w.webp"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight text-brand-gray">
                  Haus Beirut
                </h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  Coming Soon
                </span>
</div>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg relative">
<div className="z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Haus Urban - Apartment" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57c4803b-ee94-43bf-9f85-10775698ad8b_800w.webp"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight text-brand-gray">
                  Haus Urban
                </h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  Coming Soon
                </span>
</div>
</div>
</div>
</div>

<div className="md:py-40 md:px-12 pt-32 pr-6 pb-32 pl-6">
<div className="max-w-[1800px] mx-auto">
<h2 className="text-sm font-bold uppercase tracking-widest text-brand-gray mb-16 reveal-on-scroll">
              Expertise
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
<div className="space-y-6 group reveal-on-scroll">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 bg-white">
<svg className="lucide lucide-building-2 w-5 h-5 text-brand-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Development</h3>
<p className="text-brand-gray leading-relaxed">
                  Creating spaces that stand the test of time through rigorous
                  attention to architectural detail.
                </p>
</div>
<div className="group reveal-on-scroll delay-100 space-y-6">
<div className="flex transition-transform duration-300 group-hover:scale-110 w-12 h-12 rounded-full shadow-sm items-center justify-center bg-white">
<svg className="lucide lucide-key w-5 h-5 text-brand-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
<path d="m21 2-9.6 9.6"></path>
<circle cx="7.5" cy="15.5" r="5.5"></circle>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Brokerage</h3>
<p className="text-brand-gray leading-relaxed">
                  A private, data-driven approach to buying and selling premium
                  real estate assets in Lebanon.
                </p>
</div>
<div className="group reveal-on-scroll delay-200 space-y-6">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 bg-white">
<svg className="lucide lucide-pencil-ruler w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(18, 18, 18)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
<path d="m8 6 2-2"></path>
<path d="m18 16 2-2"></path>
<path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
<path className="" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
<path className="" d="m15 5 4 4"></path>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Architecture</h3>
<p className="text-brand-gray leading-relaxed">
                  In-house design capabilities ensuring vision matches execution
                  seamlessly.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="about">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="relative mb-24 reveal-on-scroll">
<h1 className="text-[8rem] md:text-[14rem] font-semibold tracking-tighter text-brand-light leading-[0.7] select-none absolute -top-12 md:-top-24 left-0 -z-10 opacity-60">
              ose_
            </h1>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] pt-12 md:pt-24 max-w-4xl">
              OSE builds with knowledge, precision, and presence.
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-8 lg:col-start-1 text-lg md:text-xl font-normal text-brand-gray leading-relaxed space-y-8 reveal-on-scroll delay-100">
<p>
                What began in brokerage evolved into architecture, and now,
                development — giving us a full, end-to-end understanding of how
                real estate performs over time.
              </p>
<p>
                We create homes that carry emotional resonance but are
                engineered as strong, long-term assets. The HAUS Collection is
                our commitment to shaping more intentional ways of living in
                Lebanon’s mountains and cities.
              </p>
</div>
</div>
</div>
<div className="w-full h-[70vh] relative overflow-hidden bg-brand-light reveal-on-scroll">

<img alt="City Architecture" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-brand-black py-32 px-6 md:px-12 text-white">
<div className="max-w-[1800px] mx-auto">
<div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b pb-8 reveal-on-scroll border-white/20">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
                The Process
              </h3>
<p className="mt-4 md:mt-0 max-w-sm text-right text-white/60">
                A disciplined approach to creating value.
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
<div className="group reveal-on-scroll">
<span className="block text-6xl md:text-7xl font-light mb-8 group-hover:text-white transition-colors text-white/20">
                  01
                </span>
<h4 className="text-2xl font-semibold mb-4">
                  Acquisition &amp; Vision
                </h4>
<p className="leading-relaxed text-white/60">
                  We identify sites with inherent character and value. Our
                  background in brokerage allows us to see potential where
                  others see complexity.
                </p>
</div>
<div className="group reveal-on-scroll delay-100">
<span className="block text-6xl md:text-7xl font-light mb-8 group-hover:text-white transition-colors text-white/20">
                  02
                </span>
<h4 className="text-2xl font-semibold mb-4">
                  Architecture &amp; Design
                </h4>
<p className="leading-relaxed text-white/60">
                  In-house design ensures the vision remains pure. We focus on
                  spatial clarity, natural light, and materials that age
                  gracefully.
                </p>
</div>
<div className="group reveal-on-scroll delay-200">
<span className="block text-6xl md:text-7xl font-light mb-8 group-hover:text-white transition-colors text-white/20">
                  03
                </span>
<h4 className="text-2xl font-semibold mb-4">
                  Development &amp; Delivery
                </h4>
<p className="leading-relaxed text-white/60">
                  We manage the build. Being "On Site" means we control the
                  quality, timeline, and details, delivering a turn-key home,
                  not just a shell.
                </p>
</div>
</div>
</div>
</div>
<div className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1 space-y-12 reveal-on-scroll">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                Architecture as a form of investment.
              </h3>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
<svg className="w-5 h-5 text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h5 className="text-xl font-semibold mb-2">Secure Assets</h5>
<p className="text-brand-gray">
                      Properties designed to retain value through timeless
                      aesthetics and superior build quality.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
<svg className="w-5 h-5 text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15-4.9"></path>
</svg>
</div>
<div>
<h5 className="text-xl font-semibold mb-2">Personal Service</h5>
<p className="text-brand-gray">
                      A family-run ethos means you deal directly with
                      decision-makers, not intermediaries.
                    </p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">

<img alt="Interior Detail" className="w-full aspect-square object-cover grayscale rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="haus">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-12 text-brand-dark reveal-on-scroll">
            The
            <span className="text-brand-gray">HAUS Collection</span>
</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-brand-dark/10 pt-12 reveal-on-scroll delay-100">
<div className="lg:col-span-5">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-dark">
                A family of design-led projects created for escape, clarity, and
                modern living.
              </p>
</div>
<div className="lg:col-span-7 text-brand-gray leading-relaxed space-y-6">
<p>
                Every HAUS development is grounded in the same principles —
                disciplined planning, architectural simplicity, and long-term
                value.
              </p>
</div>
</div>
</div>
<div className="px-6 md:px-12 max-w-[1800px] mx-auto pb-32">

<div className="group cursor-pointer mb-24 reveal-on-scroll" onclick="navigateTo('haus-faqra')">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
<div className="relative overflow-hidden aspect-[4/3] bg-brand-light lg:order-2">
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-black text-xs font-bold uppercase tracking-wider shadow-lg text-white">
                    Selling Now
                  </span>
</div>

<img alt="Haus Faqra - Winter" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-between h-full lg:py-8 lg:order-1">
<div className="space-y-8">
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-3 block">
                      01 — Mountain Collection
                    </span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-brand-dark group-hover:opacity-70 transition-opacity">
                      HAUS FAQRA – Selling Now
                    </h2>
</div>
<p className="text-lg text-brand-gray leading-relaxed max-w-md">
                    A curated collection of 22 chalets inspired by Scandinavian
                    living. Private gardens, clean lines, natural materials, and
                    amenities designed for all seasons — built as second homes
                    meant to become lifelong assets.
                  </p>
<ul className="space-y-3 text-sm font-medium text-brand-dark border-l-2 border-brand-dark/10 pl-6">
<li className="flex items-center gap-2">
                      120 - 180 sqm Duplexes
                    </li>
<li className="flex items-center gap-2">
                      Private Gardens &amp; Roofs
                    </li>
<li className="flex items-center gap-2">Starting $280,000</li>
</ul>
</div>
<div className="mt-12 flex items-center gap-4 text-brand-dark font-semibold group-hover:gap-6 transition-all">
<span className="border-b border-brand-dark pb-0.5">
                    discover project
                  </span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-brand-dark/10 mb-20"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

<div className="group opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default reveal-on-scroll">
<div className="relative aspect-[3/2] bg-brand-light overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">

<img className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest border border-brand-dark/10 bg-white/90">
                    Coming Soon
                  </span>
</div>
</div>
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2 block">
                  02 — City Collection
                </span>
<h3 className="text-3xl font-semibold tracking-tight mb-3 text-brand-dark">
<span className="block text-sm font-normal text-brand-gray mb-1">
                    In Development
                  </span>
                  HAUS BEIRUT
                </h3>
<p className="text-brand-gray text-sm max-w-sm leading-relaxed">
                  A primary-living concept currently in design study —
                  contemporary, efficient, and urban.
                </p>
</div>
</div>

<div className="group opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default reveal-on-scroll delay-100">
<div className="relative aspect-[3/2] bg-brand-light overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">

<img className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest border border-brand-dark/10 bg-white/90">
                    Coming Soon
                  </span>
</div>
</div>
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2 block">
                  03 — Urban Collection
                </span>
<h3 className="text-3xl font-semibold tracking-tight mb-3 text-brand-dark">
                  HAUS URBAN
                </h3>
<p className="text-brand-gray text-sm max-w-sm leading-relaxed">
                  A new model of compact, modern living for families and
                  professionals.
                </p>
</div>
</div>
</div>
<div className="mt-24 text-center border-t border-brand-dark/10 pt-16 reveal-on-scroll">
<p className="text-brand-gray mb-6 font-medium">
              Interested in our upcoming developments?
            </p>
<button className="px-8 py-3 rounded-full border border-brand-dark text-brand-dark hover:bg-brand-dark transition-all text-sm font-bold tracking-wide uppercase hover:text-white" onclick="navigateTo('contact')">
              Join the Waiting List
            </button>
</div>
</div>
</section>

<section className="page-section fade-in" id="haus-faqra">
<div className="relative w-full h-screen">

<img className="w-full h-full object-cover brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85318060-ed05-4104-8c4c-6b067b077e40_3840w.webp"/>
<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-24 max-w-[1800px] mx-auto">
<span className="font-medium tracking-widest uppercase mb-4 text-sm fade-in text-white/80">
              The Mountain Collection
            </span>
<h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none fade-in text-white">
              HAUS
              <br/>
              FAQRA
            </h1>
</div>
</div>
<div className="max-w-[1800px] mx-auto px-6 md:px-12 py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.1] mb-8">
                Designed for clarity.

                <span className="text-brand-gray">Built for longevity.</span>
</h2>
<p className="text-lg text-brand-gray leading-relaxed mb-8">
                22 duplex chalets set within a gated community — crafted for
                calm, privacy, and year-round living. Scandinavian-inspired
                architecture, clean volumes, and warm interiors make each unit a
                modern mountain retreat with strong long-term value.
              </p>
<button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-brand-black pb-1 hover:opacity-70 transition-opacity" onclick="document.getElementById('units').scrollIntoView({behavior: 'smooth'})">
                View Availability
                <svg className="lucide lucide-arrow-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</button>
</div>
<div className="reveal-on-scroll delay-100">
<h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-brand-dark">
                Key Features
              </h3>
<ul className="space-y-3 text-brand-dark font-medium leading-relaxed">
<li className="flex items-start gap-2">
<span className="text-brand-gray/50">•</span>
                  Private gardens &amp; terraces
                </li>
<li className="flex items-start gap-2">
<span className="text-brand-gray/50">•</span>
                  Natural light planning
                </li>
<li className="flex items-start gap-2">
<span className="text-brand-gray/50">•</span>
                  Underground parking &amp; driver rooms
                </li>
</ul>
</div>
</div>
</div>
<div className="w-full aspect-video md:aspect-[21/9] reveal-on-scroll bg-black">
<iframe allowfullscreen="" className="w-full h-full opacity-80" frameborder="0" src="https://www.youtube.com/embed/N1qPJLmNnyg?autoplay=0&amp;mute=1&amp;loop=1&amp;controls=1&amp;rel=0"></iframe>
</div>
<div className="max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-40">
<div className="mb-24">
<h3 className="text-3xl font-bold tracking-tighter mb-12 reveal-on-scroll">
              The Experience
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group reveal-on-scroll">
<div className="aspect-square bg-brand-light mb-6 overflow-hidden rounded-sm">

<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebc679c0-a119-4aee-b0c0-eefe1a95c18e_800w.webp"/>
</div>
<h4 className="text-xl font-semibold mb-2">Après Ski</h4>
<p className="text-brand-gray text-sm">
                  Direct access to the slopes and a warm hearth to return to.
                </p>
</div>
<div className="group reveal-on-scroll delay-100">
<div className="aspect-square bg-brand-light mb-6 overflow-hidden rounded-sm">

<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00807eaf-8702-4834-a6fd-4edfa367f039_3840w.jpg"/>
</div>
<h4 className="text-xl font-semibold mb-2">Summer Retreat</h4>
<p className="text-brand-gray text-sm">
                  Cool mountain breeze and private gardens for summer dining.
                </p>
</div>
<div className="group reveal-on-scroll delay-200">
<div className="aspect-square bg-brand-light mb-6 overflow-hidden rounded-sm">

<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9be316f-6690-4291-bcc8-0f8b4bd9404d_1600w.webp"/>
</div>
<h4 className="text-xl font-semibold mb-2">Concierge Living</h4>
<p className="text-brand-gray text-sm">
                  Full management, security, and maintenance services
                  year-round.
                </p>
</div>
</div>
</div>
<div className="bg-brand-light p-8 md:p-16 rounded-xl reveal-on-scroll" id="units">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-dark/10 pb-8">
<div>
<h3 className="text-4xl font-bold tracking-tighter mb-2">
                  Availability
                </h3>
<p className="text-brand-gray">
                  Structured layouts. Thoughtful proportions. Designed to hold
                  value.
                </p>
</div>
<button className="mt-6 md:mt-0 px-8 py-3 bg-brand-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-gray transition-colors text-white" onclick="navigateTo('contact')">
                Request Floorplans
              </button>
</div>
<div className="space-y-4">

<div className="group p-6 rounded-lg flex flex-col md:flex-row items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300 bg-white">
<div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center font-serif font-bold text-xl text-brand-dark/50 group-hover:bg-brand-black group-hover:text-white transition-colors">
                    A1
                  </div>
<div>
<span className="block text-xl font-bold tracking-tight">
                      Garden Duplex
                    </span>
<span className="text-sm text-brand-gray">
                      125 sqm + 60 sqm Garden
                    </span>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-12">
<div className="text-right">
<span className="block font-bold text-lg">$310,000</span>
<span className="text-xs text-brand-gray uppercase tracking-wide">
                      Starting Price
                    </span>
</div>
<svg className="lucide lucide-arrow-right text-brand-gray group-hover:text-brand-black group-hover:translate-x-1 transition-all" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div className="group p-6 rounded-lg flex flex-col md:flex-row items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300 bg-white">
<div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center font-serif font-bold text-xl text-brand-dark/50 group-hover:bg-brand-black group-hover:text-white transition-colors">
                    B2
                  </div>
<div>
<span className="block text-xl font-bold tracking-tight">
                      Terrace Loft
                    </span>
<span className="text-sm text-brand-gray">
                      180 sqm + 40 sqm Terrace
                    </span>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-12">
<div className="text-right">
<span className="block font-bold text-lg">$450,000</span>
<span className="text-xs text-brand-gray uppercase tracking-wide">
                      Starting Price
                    </span>
</div>
<svg className="lucide lucide-arrow-right text-brand-gray group-hover:text-brand-black group-hover:translate-x-1 transition-all" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
<div className="group p-6 rounded-lg flex flex-col md:flex-row items-center justify-between cursor-pointer hover:shadow-lg transition-all duration-300 opacity-60 bg-white">
<div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
<div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center font-serif font-bold text-xl text-brand-dark/50">
                    C1
                  </div>
<div>
<span className="block text-xl font-bold tracking-tight text-brand-gray">
                      Garden Duplex
                    </span>
<span className="text-sm text-brand-gray">125 sqm</span>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-12">
<div className="text-right">
<span className="block font-bold text-lg text-brand-gray line-through">
                      $310,000
                    </span>
<span className="text-xs text-brand-gray uppercase tracking-wide">
                      Reserved
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="brokerage">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="border-b border-brand-dark/10 pb-12 mb-24 reveal-on-scroll">
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter text-brand-dark mb-8">
              Private Brokerage.
              <br/>
<span className="text-brand-gray">Quiet Transactions.</span>
</h1>
<p className="text-xl md:text-2xl text-brand-gray max-w-2xl leading-relaxed">
              Access a network built over four decades — discreet, curated, and
              rooted in trust.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
<div className="relative aspect-[4/5] bg-brand-light overflow-hidden rounded-sm reveal-on-scroll">

<img alt="Private Consultation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="space-y-12 py-8 reveal-on-scroll delay-100">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[0.95]">
                Not every opportunity is public.
              </h2>
<div className="space-y-8 text-lg text-brand-dark/80 font-normal leading-relaxed mt-12">
<p>
                  Many of our best assets move privately, through relationships.
                </p>
</div>
<div className="pt-12 border-t border-brand-dark/10 mt-12">
<p className="font-semibold text-brand-dark mb-6 tracking-tight">
                  Connect with our private desk:
                </p>
<div className="flex flex-col sm:flex-row gap-4">

<a className="px-8 py-4 bg-brand-black rounded-full font-semibold tracking-wide hover:bg-brand-gray transition-colors flex items-center justify-center gap-3 w-full sm:w-auto text-white" href="https://wa.me/96170663366" rel="noopener noreferrer" target="_blank">
                    speak on whatsapp
                    <svg className="lucide lucide-arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<button className="px-8 py-4 border border-brand-black text-brand-black rounded-full font-semibold tracking-wide hover:bg-brand-black transition-colors w-full sm:w-auto hover:text-white" onclick="navigateTo('contact')">
                    tell us your requirements
                  </button>
</div>
</div>
</div>
</div>
<div className="bg-brand-light p-12 md:p-24 rounded-lg mb-20 reveal-on-scroll">
<h3 className="text-3xl font-bold tracking-tighter mb-16 text-center">
              The Process
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4 text-center group">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-6 bg-white shadow-sm">
<span className="text-lg font-bold font-serif">01</span>
</div>
<h4 className="text-xl font-semibold mb-2">
                  Valuation &amp; Requirements
                </h4>
<p className="text-brand-gray">
                  Understanding your goals and positioning the asset correctly.
                </p>
</div>
<div className="space-y-4 text-center group">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-6 bg-white shadow-sm">
<span className="text-lg font-bold font-serif">02</span>
</div>
<h4 className="text-xl font-semibold mb-2">Private Matching</h4>
<p className="text-brand-gray">
                  Access to serious buyers and off-market inventory through our
                  long-standing network.
                </p>
</div>
<div className="space-y-4 text-center group">
<div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-6 bg-white shadow-sm">
<span className="text-lg font-bold font-serif">03</span>
</div>
<h4 className="text-xl font-semibold mb-2">Closing</h4>
<p className="text-brand-gray">
                  Full support through legal, financial, and negotiation phases
                  — handled discreetly.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="contact">
<div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32 md:py-40">
<div className="text-center mb-20 reveal-on-scroll">
<h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's Talk.
            </h1>
<p className="text-xl text-brand-gray">
              Tell us about your next home or investment — our team will reach
              out privately.
            </p>
</div>
<div className="bg-brand-light rounded-2xl p-8 md:p-16 reveal-on-scroll delay-100">
<div className="mb-12 text-center">
<a className="inline-flex items-center gap-2 text-brand-black border-b border-brand-black pb-1 hover:opacity-70 transition-opacity font-semibold" href="https://wa.me/96170663366" rel="noopener noreferrer" target="_blank">
                Prefer WhatsApp? Message us directly
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Name
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Type your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Email
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Type your email" type="email"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Private Number
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="+961 XX XXX XXX" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-brand-gray">
                  Message
                </label>
<textarea className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors resize-none" placeholder="Tell us about your needs" rows="4"></textarea>
</div>
<div className="flex justify-end">
<button className="px-10 py-5 bg-brand-black rounded-full font-bold text-sm tracking-wide hover:bg-brand-gray transition-colors w-full md:w-auto text-white" type="button">
                  SEND MESSAGE
                </button>
</div>
</form>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-20 reveal-on-scroll">
<div>
<span className="block text-brand-gray text-sm mb-2">Email</span>
<a className="text-lg font-bold hover:opacity-70" href="mailto:hello@ose.com">
                hello@ose.com
              </a>
</div>
<div>
<span className="block text-brand-gray text-sm mb-2">Phone</span>
<a className="text-lg font-bold hover:opacity-70" href="tel:+961000000">
                +961 1 234 567
              </a>
</div>
<div>
<span className="block text-brand-gray text-sm mb-2">Visit</span>
<p className="text-lg font-bold">Beirut, Lebanon</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-brand-light py-16 px-6 md:px-12 bg-white">
<div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<span className="text-2xl font-bold tracking-tighter block mb-2">
              ose_
            </span>
<p className="text-brand-gray text-xs">Ose Realty Group © 2026</p>
</div>
<div className="flex gap-8">
<a className="text-brand-gray hover:text-brand-black transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-brand-gray hover:text-brand-black transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="text-brand-gray hover:text-brand-black transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</footer>
</main>
<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-[80] group bg-brand-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-dark transition-all duration-300 hover:scale-105 text-white print:hidden animate-periodic-bounce" href="https://wa.me/96170663366" rel="noopener noreferrer" target="_blank">
<svg className="group-hover:scale-110 transition-transform" fill="currentColor" height="30" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.371-.03-.544-.087-.173-.792-1.911-1.085-2.618-.291-.702-.591-.606-.807-.617-.202-.011-.433-.013-.674-.013-.242 0-.635.09-1.109.605-.474.516-1.812 1.773-1.812 4.325 0 2.553 1.86 5.019 2.118 5.366.258.348 3.662 5.592 8.872 7.842 3.098 1.338 3.73 1.072 4.417 1.006.687-.066 2.227-.909 2.541-1.786.314-.878.314-1.63.22-1.787-.093-.158-.346-.254-.643-.403zM12 2C6.486 2 2 6.486 2 12c0 1.846.48 3.568 1.316 5.068l-1.31 4.885 5.004-1.306A9.957 9.957 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"></path>
</svg>
</a>


    </>
  );
}
