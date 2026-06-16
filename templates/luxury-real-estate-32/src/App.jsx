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
              setTimeout(initObserver, 100);
          }

          // Reset Navbar for specific pages
          const nav = document.getElementById('navbar');
          if (nav) {
            if (pageId === 'home') {
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
        if (homeSection && homeSection.classList.contains('active')) {
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
          }
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-[60] transition-all duration-500 text-white" id="navbar">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">

<button className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity z-[70] focus:outline-none uppercase" onclick="navigateTo('home')">
          Robyn Brand
        </button>
<div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-tight">
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('about')">
            Profile
          </button>
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('listings')">
            Properties
          </button>
<button className="hover-underline hover:opacity-100 opacity-80" onclick="navigateTo('compass')">
            Compass
          </button>
<button className="hover:bg-brand-white hover:text-brand-black transition-colors duration-300 uppercase hover:border-white text-xs font-semibold tracking-wide border-white/30 border rounded-full pt-3 pr-6 pb-3 pl-6" onclick="navigateTo('contact')">
            Contact
          </button>
</div>

<button className="md:hidden z-[70]" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6 transition-colors duration-300" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
            Profile
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('listings'); toggleMobileMenu()">
            Properties
          </button>
<button className="text-4xl font-medium tracking-tight transition-colors text-white hover:text-white/60" onclick="navigateTo('compass'); toggleMobileMenu()">
            Compass
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
<div className="absolute inset-0 bg-gradient-to-b z-10 pointer-events-none from-black/50 via-black/10 to-black/60"></div>

<img alt="Luxury Real Estate Spring TX" className="w-full h-full object-cover pointer-events-none scale-105 animate-[zoomIn_20s_ease-out_infinite]" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:px-12 flex flex-col z-20 h-full max-w-[1800px] mx-auto relative justify-center px-6 text-white">
<h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] select-none drop-shadow-2xl text-white">
<span className="block opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s'}}>
                robyn
              </span>
<span className="block opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s'}}>
                brand_
              </span>
</h1>
<p className="mt-6 text-lg md:text-xl font-medium tracking-wide text-white/90 max-w-xl opacity-0" style={{animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s'}}>
              Premier Real Estate in Spring, Texas.
            </p>
</div>
<div className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-4 pointer-events-none text-white/90" style={{animation: 'bounce 2s infinite'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
<span className="text-xs font-bold tracking-[0.2em] uppercase">
              Explore Properties
            </span>
</div>
</div>
<div className="bg-brand-white text-brand-dark py-24 md:py-32">
<div className="md:px-12 reveal-on-scroll max-w-[1800px] mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-6xl lg:text-7xl leading-[1] text-4xl font-semibold tracking-tighter mb-8">
              Guiding you home,
              <br className="hidden md:block"/>
              with integrity.
            </h2>
<p className="md:text-xl text-brand-gray leading-relaxed text-brand-accent text-lg font-normal tracking-tight max-w-2xl mb-10">
              With deep roots in Spring, TX, Robyn Brand combines local market expertise with the powerful technology of Compass. Whether buying your first home or selling a luxury estate, experience a transaction defined by clarity, precision, and personal attention.
            </p>
<button className="flex items-center gap-2 text-sm font-semibold border-b border-brand-dark pb-1 hover:opacity-70 transition-opacity w-fit group" onclick="navigateTo('listings')">
              view current listings
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
              Featured Property
            </h2>
<span className="text-sm font-medium text-brand-gray md:mb-2">
              THE WOODLANDS RESERVE
            </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
<div className="lg:col-span-8 relative group cursor-pointer reveal-on-scroll" onclick="navigateTo('listings')">
<div className="overflow-hidden bg-brand-light aspect-[16/9] w-full relative">
<img alt="Luxury Estate Spring TX" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex z-10 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="backdrop-blur-sm text-brand-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl bg-white/95">
                    View Details
                  </span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col reveal-on-scroll delay-100 pt-4 pb-4 justify-between">
<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Modern luxury meets Texas charm.
                </h3>
<p className="text-brand-gray leading-relaxed font-normal">
                  A spectacular residence in the heart of The Woodlands. Offering expansive outdoor living spaces, a resort-style pool, and custom finishes throughout. This property exemplifies the quality of life available in Spring's most exclusive neighborhoods.
                </p>
<ul className="text-sm text-brand-dark space-y-2 border-l border-brand-light pl-4">
<li>5 Bedrooms, 5.5 Baths</li>
<li>4,500 Sq Ft</li>
<li>Oversized Lot</li>
</ul>
</div>
<button className="mt-8 px-8 py-4 border border-brand-black/20 text-brand-black rounded-full font-medium text-sm hover:bg-brand-black transition-all w-fit hover:text-white" onclick="navigateTo('listings')">
                View All Properties
              </button>
</div>
</div>
</div>

<div className="bg-brand-black py-32 md:py-40 text-white">
<div className="max-w-[1800px] mx-auto px-6 md:px-12">
<h2 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-16 reveal-on-scroll">
              Why Work With Robyn
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
<div className="space-y-6 group reveal-on-scroll">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 bg-white text-brand-black">
<svg className="lucide lucide-map-pin w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Local Expert</h3>
<p className="text-white/60 leading-relaxed">
                  Deep knowledge of Spring, The Woodlands, and surrounding Houston markets to price and market your home effectively.
                </p>
</div>
<div className="group reveal-on-scroll delay-100 space-y-6">
<div className="flex transition-transform duration-300 group-hover:scale-110 w-12 h-12 rounded-full shadow-sm items-center justify-center bg-white text-brand-black">
<svg className="lucide lucide-trending-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Market Insight</h3>
<p className="text-white/60 leading-relaxed">
                  Data-driven strategies backed by Compass technology to ensure you make informed decisions.
                </p>
</div>
<div className="group reveal-on-scroll delay-200 space-y-6">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 bg-white text-brand-black">
<svg className="lucide lucide-handshake w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l4-4a1 1 0 0 1 1.41 0l2.17 2.17a1 1 0 0 0 1.42 0L21 9a1 1 0 0 0 0-1.42l-2.58-2.58a3 3 0 0 0-4.24 0l-3.75 3.75a2 2 0 0 0 0 2.82l-1.5 1.5"></path>
<path d="m6.5 17-2.3 2.3a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0L9.3 19.8"></path>
<path d="m2 2 20 20"></path>
</svg>
</div>
<h3 className="text-2xl font-bold tracking-tight">Dedicated Service</h3>
<p className="text-white/60 leading-relaxed">
                  A commitment to seamless transactions, advocating for your best interests from contract to closing.
                </p>
</div>
</div>
</div>
</div>

<div className="max-w-[1800px] mx-auto px-6 md:px-12 py-32 md:py-40">
<div className="mb-20 max-w-2xl reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Exclusive Listings
            </h2>
<p className="text-brand-gray leading-relaxed text-lg font-normal">
              A curated selection of properties currently available in Spring and the surrounding areas.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer reveal-on-scroll" onclick="navigateTo('listings')">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg">
<img alt="Spring Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight">Spring Creek Estate</h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  $1,250,000
                </span>
</div>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-100" onclick="navigateTo('listings')">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg">
<img alt="Woodlands Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight">
                  Woodlands Reserve
                </h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  $890,000
                </span>
</div>
</div>
<div className="group cursor-pointer reveal-on-scroll delay-200" onclick="navigateTo('listings')">
<div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-light rounded-lg">
<img alt="Auburn Lakes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center border-t border-brand-light pt-4">
<h3 className="text-lg font-semibold tracking-tight">
                  Auburn Lakes
                </h3>
<span className="text-xs font-medium text-brand-gray uppercase">
                  $650,000
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="about">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="relative mb-24 reveal-on-scroll">
<h1 className="text-[6rem] md:text-[12rem] font-semibold tracking-tighter text-brand-light leading-[0.7] select-none absolute -top-12 md:-top-24 left-0 -z-10 opacity-60">
              agent_
            </h1>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] pt-12 md:pt-24 max-w-4xl">
              Robyn Brand.
              <span className="text-brand-gray">Your Partner in Real Estate.</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-8 lg:col-start-1 text-lg md:text-xl font-normal text-brand-gray leading-relaxed space-y-8 reveal-on-scroll delay-100">
<p>
                Robyn Brand is a distinguished real estate professional serving Spring, Texas, and the greater Houston area. With an unwavering commitment to her clients, she navigates the complexities of the market with grace and precision.
              </p>
<p>
                Affiliated with Compass, the country's largest independent real estate brokerage, Robyn leverages best-in-class technology and a nationwide network to deliver exceptional results. Whether you are looking for a family home in The Woodlands or a luxury estate in Spring, Robyn provides the insight and guidance needed to make your move a success.
              </p>
</div>
</div>
</div>
<div className="w-full h-[60vh] relative overflow-hidden bg-brand-light reveal-on-scroll">
<img alt="Robyn Brand Professional Context" className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1 space-y-12 reveal-on-scroll">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                A strategic approach to selling.
              </h3>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
<svg className="w-5 h-5 text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<div>
<h5 className="text-xl font-semibold mb-2">Proven Integrity</h5>
<p className="text-brand-gray">
                      Honest communication and transparency are the cornerstones of Robyn's business philosophy.
                    </p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0">
<svg className="w-5 h-5 text-brand-dark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div>
<h5 className="text-xl font-semibold mb-2">Compass Concierge</h5>
<p className="text-brand-gray">
                      Unlock the ability to renovate your home before selling with no upfront costs, maximizing your sale price.
                    </p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100">
<img alt="Kitchen Detail" className="w-full aspect-square object-cover grayscale rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="listings">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-12 text-brand-dark reveal-on-scroll">
            Featured
            <span className="text-brand-gray">Listings</span>
</h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-brand-dark/10 pt-12 reveal-on-scroll delay-100">
<div className="lg:col-span-5">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-dark">
                Representing the finest homes in Spring, TX.
              </p>
</div>
<div className="lg:col-span-7 text-brand-gray leading-relaxed space-y-6">
<p>
                Explore a collection of properties hand-picked for their quality, location, and value.
              </p>
</div>
</div>
</div>
<div className="px-6 md:px-12 max-w-[1800px] mx-auto pb-32">

<div className="group cursor-pointer mb-24 reveal-on-scroll" onclick="navigateTo('contact')">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
<div className="relative overflow-hidden aspect-[4/3] bg-brand-light lg:order-2">
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-black text-xs font-bold uppercase tracking-wider shadow-lg text-white">
                    Active
                  </span>
</div>
<img alt="The Woodlands Reserve" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-between h-full lg:py-8 lg:order-1">
<div className="space-y-8">
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-3 block">
                      The Woodlands
                    </span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-brand-dark group-hover:opacity-70 transition-opacity">
                      124 Reserve Drive
                    </h2>
</div>
<p className="text-lg text-brand-gray leading-relaxed max-w-md">
                    Immaculate contemporary estate featuring high ceilings, chef's kitchen, and a private backyard oasis. Perfectly situated near top-rated schools and shopping.
                  </p>
<ul className="space-y-3 text-sm font-medium text-brand-dark border-l-2 border-brand-dark/10 pl-6">
<li className="flex items-center gap-2">
                      5 Beds, 5.5 Baths
                    </li>
<li className="flex items-center gap-2">
                      Pool &amp; Spa
                    </li>
<li className="flex items-center gap-2">$1,250,000</li>
</ul>
</div>
<div className="mt-12 flex items-center gap-4 text-brand-dark font-semibold group-hover:gap-6 transition-all">
<span className="border-b border-brand-dark pb-0.5">
                    Schedule Tour
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
<div className="group hover:opacity-100 transition-opacity duration-500 cursor-pointer reveal-on-scroll">
<div className="relative aspect-[3/2] bg-brand-light overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-xs font-bold uppercase tracking-wider shadow-sm text-black">
                    Under Contract
                  </span>
</div>
</div>
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2 block">
                  Spring, TX
                </span>
<h3 className="text-3xl font-semibold tracking-tight mb-3 text-brand-dark">
                  78 Willow Creek
                </h3>
<p className="text-brand-gray text-sm max-w-sm leading-relaxed">
                  Traditional brick family home on a quiet cul-de-sac.
                </p>
<p className="mt-4 font-bold text-lg">$450,000</p>
</div>
</div>
<div className="group hover:opacity-100 transition-opacity duration-500 cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-[3/2] bg-brand-light overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-10">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-black text-xs font-bold uppercase tracking-wider shadow-lg text-white">
                    Sold
                  </span>
</div>
</div>
<div>
<span className="text-xs font-bold text-brand-gray uppercase tracking-widest mb-2 block">
                  Creekside Park
                </span>
<h3 className="text-3xl font-semibold tracking-tight mb-3 text-brand-dark">
                  22 Blue Heron
                </h3>
<p className="text-brand-gray text-sm max-w-sm leading-relaxed">
                  Exquisite waterfront property with custom finishes.
                </p>
<p className="mt-4 font-bold text-lg">$920,000</p>
</div>
</div>
</div>
<div className="mt-24 text-center border-t border-brand-dark/10 pt-16 reveal-on-scroll">
<p className="text-brand-gray mb-6 font-medium">
              Looking for something specific?
            </p>
<button className="px-8 py-3 rounded-full border border-brand-dark text-brand-dark hover:bg-brand-dark transition-all text-sm font-bold tracking-wide uppercase hover:text-white" onclick="navigateTo('contact')">
              Contact Robyn
            </button>
</div>
</div>
</section>

<section className="page-section fade-in" id="compass">
<div className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="border-b border-brand-dark/10 pb-12 mb-24 reveal-on-scroll">
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-brand-dark mb-8">
              The Compass
              <br/>
<span className="text-brand-gray">Advantage.</span>
</h1>
<p className="text-xl md:text-2xl text-brand-gray max-w-2xl leading-relaxed">
              Robyn Brand is proud to be a broker associate with Compass, redefining the buying and selling experience through technology and reach.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-32">
<div className="relative aspect-[4/5] bg-brand-light overflow-hidden rounded-sm reveal-on-scroll">
<img alt="Compass Strategy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-12 py-8 reveal-on-scroll delay-100">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[0.95]">
                Technology + Tradition.
              </h2>
<div className="space-y-8 text-lg text-brand-dark/80 font-normal leading-relaxed mt-12">
<p>
                  We pair the industry's top talent with technology to make the search and sell experience intelligent and seamless.
                </p>
<ul className="space-y-4 mt-8">
<li className="flex items-start gap-4">
<span className="font-bold text-brand-black">Compass Concierge</span>
<span className="text-brand-gray">Fronts the cost of home improvement services with no interest or fees.</span>
</li>
<li className="flex items-start gap-4">
<span className="font-bold text-brand-black">Compass Lens</span>
<span className="text-brand-gray">AI-driven insights to price your home accurately.</span>
</li>
<li className="flex items-start gap-4">
<span className="font-bold text-brand-black">Private Exclusives</span>
<span className="text-brand-gray">Access to off-market listings before they hit the public sites.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="page-section fade-in" id="contact">
<div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32 md:py-40">
<div className="text-center mb-20 reveal-on-scroll">
<h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's Connect.
            </h1>
<p className="text-xl text-brand-gray">
              Ready to buy or sell in Spring? Contact Robyn Brand today.
            </p>
</div>
<div className="bg-brand-light rounded-2xl p-8 md:p-16 reveal-on-scroll delay-100">
<div className="mb-12 text-center">
<a className="inline-flex items-center gap-2 text-brand-black border-b border-brand-black pb-1 hover:opacity-70 transition-opacity font-semibold" href="tel:8329284143">
                Call Robyn directly
                <svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</a>
</div>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Name
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Email
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="Your email" type="email"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                    Phone
                  </label>
<input className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors" placeholder="(XXX) XXX-XXXX" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-brand-gray">
                  Message
                </label>
<textarea className="w-full bg-transparent border-b border-brand-black/20 py-4 text-xl font-medium focus:outline-none focus:border-brand-black transition-colors resize-none" placeholder="I'm interested in buying/selling..." rows="4"></textarea>
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
<a className="text-lg font-bold hover:opacity-70" href="mailto:robyn.brand@compass.com">
                robyn.brand@compass.com
              </a>
</div>
<div>
<span className="block text-brand-gray text-sm mb-2">Phone</span>
<a className="text-lg font-bold hover:opacity-70" href="tel:8329284143">
                (832) 928-4143
              </a>
</div>
<div>
<span className="block text-brand-gray text-sm mb-2">Area</span>
<p className="text-lg font-bold">Spring, TX</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-brand-light py-16 px-6 md:px-12 bg-white">
<div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<span className="text-2xl font-bold tracking-tighter block mb-2">
              Robyn Brand
            </span>
<p className="text-brand-gray text-xs">Compass Real Estate © 2024</p>
</div>
<div className="flex gap-8">
<a className="text-brand-gray hover:text-brand-black transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
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
</div>
</div>
</footer>
</main>
<a aria-label="Call Now" className="fixed bottom-6 right-6 z-[80] group bg-brand-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-dark transition-all duration-300 hover:scale-105 text-white print:hidden animate-periodic-bounce" href="tel:8329284143">
<svg className="lucide lucide-phone group-hover:scale-110 transition-transform" fill="none" height="30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</a>


    </>
  );
}
