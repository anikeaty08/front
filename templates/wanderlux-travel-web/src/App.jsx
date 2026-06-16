import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Parallax Scrolling Effect
    const heroImage = document.getElementById('heroImage');
    const heroSection = document.getElementById('heroSection');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;
      
      if (scrolled < heroHeight) {
        const parallaxValue = scrolled * 0.5;
        heroImage.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
      }
    });

    // Search Functionality
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('locationInput');
    const dateInput = document.getElementById('dateInput');
    const guestsInput = document.getElementById('guestsInput');

    searchBtn.addEventListener('click', () => {
      const location = locationInput.value;
      const dates = dateInput.value;
      const guests = guestsInput.value;
      
      if (location && dates && guests) {
        alert(`Searching for properties in ${location} for ${guests} on ${dates}`);
      } else {
        alert('Please fill in all search fields');
      }
    });

    // Favorite Button Toggle
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(btn => {
      let isFavorited = false;
      
      btn.addEventListener('click', () => {
        const heartIcon = btn.querySelector('i[data-lucide="heart"]');
        isFavorited = !isFavorited;
        
        if (isFavorited) {
          heartIcon.classList.add('fill-red-500', 'text-red-500');
          heartIcon.classList.remove('text-slate-700');
        } else {
          heartIcon.classList.remove('fill-red-500', 'text-red-500');
          heartIcon.classList.add('text-slate-700');
        }
        
        // Reinitialize icons to apply changes
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5
          }
        });
      });
    });

    // Newsletter Subscribe
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');

    subscribeBtn.addEventListener('click', () => {
      const email = emailInput.value;
      
      if (email && email.includes('@')) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });

    // Video Button
    const videoBtn = document.getElementById('videoBtn');
    
    videoBtn.addEventListener('click', () => {
      alert('Video modal would open here');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add active state to navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-slate-900');
        link.classList.add('text-slate-600');
        
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-slate-900');
          link.classList.remove('text-slate-600');
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50" style={{animation: 'slideDown 0.6s ease-out'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center">
<span className="text-xs sm:text-sm font-semibold tracking-tight">WL</span>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Wanderlux</span>
</div>
<div className="hidden md:flex items-center gap-6 lg:gap-8">
<a className="hover:text-slate-600 transition-colors text-sm font-medium" href="/home">Discover</a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium" href="/destinations">Destinations</a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="/experiences">Experiences</a>
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="/about">About</a>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Sign in
          </button>
<button className="hidden sm:block px-3 sm:px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors">
            Get Started
          </button>
<button className="md:hidden p-2 rounded-lg hover:bg-slate-50" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block px-4 py-2 text-sm font-medium hover:bg-slate-50 rounded-lg transition-colors" href="#discover">Discover</a>
<a className="block px-4 py-2 text-sm font-medium hover:bg-slate-50 rounded-lg transition-colors" href="#destinations">Destinations</a>
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#experiences">Experiences</a>
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors" href="#about">About</a>
<div className="pt-3 border-t border-slate-200 space-y-2">
<button className="w-full px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Sign in
          </button>
<button className="w-full px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors">
            Get Started
          </button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" id="heroSection">
<div className="absolute inset-0">
<img alt="Mountain Vista" className="parallax-bg w-full h-full object-cover scale-110" id="heroImage" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&amp;w=2400&amp;auto=format&amp;fit=crop" style={{transform: 'translateY(446.75px) scale(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-white" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
<div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-xs font-medium">Premium Collection</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-xs font-medium flex items-center gap-1.5">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
          Trending Now
        </span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-4 sm:mb-6 px-4">
        Discover Your<br/>Perfect Escape
      </h1>
<p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        Experience handpicked luxury stays in the world's most breathtaking destinations. From mountain lodges to coastal villas.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white hover:bg-white/95 text-slate-900 font-medium transition-all flex items-center justify-center gap-2 shadow-lg">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Start exploring
        </button>
<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white font-medium backdrop-blur transition-all flex items-center justify-center gap-2" id="videoBtn">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Watch video
        </button>
</div>

<div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-6 sm:pt-8 border-t border-white/20 px-4">
<div>
<p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 sm:mb-2">2.4M+</p>
<p className="text-xs sm:text-sm text-white/80">Happy guests</p>
</div>
<div>
<p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 sm:mb-2">150+</p>
<p className="text-xs sm:text-sm text-white/80">Countries</p>
</div>
<div>
<p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 sm:mb-2">50k+</p>
<p className="text-xs sm:text-sm text-white/80">Properties</p>
</div>
</div>
</div>
</section>

<section className="relative -mt-12 sm:-mt-20 z-20 px-4 sm:px-6 lg:px-8" style={{animation: 'scaleIn 0.6s ease-out 0.4s both'}}>
<div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-slate-200 p-4 sm:p-6 lg:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
<div className="relative">
<label className="block text-xs font-medium text-slate-600 mb-2">Location</label>
<div className="relative">
<svg className="lucide lucide-map-pinned w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="map-pinned" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
<input className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 focus:border-slate-300 focus:outline-none text-sm transition-all" id="locationInput" placeholder="Where to?" type="text"/>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-600 mb-2">Check in - Check out</label>
<div className="relative">
<svg className="lucide lucide-calendar-range w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<input className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 focus:border-slate-300 focus:outline-none text-sm transition-all" id="dateInput" placeholder="Select dates" type="text"/>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-600 mb-2">Guests</label>
<div className="relative">
<svg className="lucide lucide-users-round w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<input className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 focus:border-slate-300 focus:outline-none text-sm transition-all" id="guestsInput" placeholder="Add guests" type="text"/>
</div>
</div>
</div>
<button className="w-full mt-4 sm:mt-6 px-6 py-3 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all flex items-center justify-center gap-2" id="searchBtn">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        Search destinations
      </button>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{animation: 'slideUp 0.6s ease-out 0.6s both'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3 sm:mb-4">Browse by type</h2>
<p className="text-base sm:text-lg text-slate-600">Find your perfect accommodation style</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<button className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-lg hover:shadow-xl">
<svg className="lucide lucide-home w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1 sm:mb-2">Villas</h3>
<p className="text-sm text-white/80">Luxury private homes</p>
</button>
<button className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 transition-all">
<svg className="lucide lucide-plane w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4 text-slate-700" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1 sm:mb-2 text-slate-900">Flights</h3>
<p className="text-sm text-slate-600">Book your journey</p>
</button>
<button className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 transition-all">
<svg className="lucide lucide-palmtree w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4 text-slate-700" data-lucide="palmtree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1 sm:mb-2 text-slate-900">Resorts</h3>
<p className="text-sm text-slate-600">All-inclusive getaways</p>
</button>
<button className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 transition-all">
<svg className="lucide lucide-ship w-8 sm:w-10 h-8 sm:h-10 mb-3 sm:mb-4 text-slate-700" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1 sm:mb-2 text-slate-900">Cruises</h3>
<p className="text-sm text-slate-600">Sail the seas</p>
</button>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" id="destinations">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
<div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3 sm:mb-4">Featured destinations</h2>
<p className="text-base sm:text-lg text-slate-600">Handpicked luxury stays around the world</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
          View all
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="group rounded-2xl sm:rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden hover:shadow-xl transition-all">
<div className="relative overflow-hidden">
<img alt="Azure Bay Residence" className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
<span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9
              </span>
<span className="hidden sm:inline px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-sm text-white text-xs font-semibold">Super Host</span>
</div>
<button className="favorite-btn absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-all">
<svg className="lucide lucide-heart w-4 h-4 text-slate-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 sm:p-6">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2">Azure Bay Residence</h3>
<p className="text-sm text-slate-600 flex items-center gap-1 mb-4">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Santorini, Greece
            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-200">
<div>
<p className="text-xs text-slate-500">from</p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">$850<span className="text-sm font-medium text-slate-500">/night</span></p>
</div>
<button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all">
                View details
              </button>
</div>
</div>
</div>

<div className="group rounded-2xl sm:rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden hover:shadow-xl transition-all">
<div className="relative overflow-hidden">
<img alt="Mountain Peak Lodge" className="sm:h-64 group-hover:scale-105 transition-transform duration-500 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/32f0e634-c09b-40be-95b6-f56d07589c20_3840w.jpg"/>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
<span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.95
              </span>
</div>
<button className="favorite-btn absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-all">
<svg className="lucide lucide-heart w-4 h-4 text-slate-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 sm:p-6">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2">Mountain Peak Lodge</h3>
<p className="text-sm text-slate-600 flex items-center gap-1 mb-4">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Aspen, Colorado
            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-200">
<div>
<p className="text-xs text-slate-500">from</p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">$1,250<span className="text-sm font-medium text-slate-500">/night</span></p>
</div>
<button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all">
                View details
              </button>
</div>
</div>
</div>

<div className="group rounded-2xl sm:rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden hover:shadow-xl transition-all">
<div className="relative overflow-hidden">
<img alt="Coastal Paradise Villa" className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
<span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.85
              </span>
</div>
<button className="favorite-btn absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm transition-all">
<svg className="lucide lucide-heart w-4 h-4 text-slate-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 sm:p-6">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2">Coastal Paradise Villa</h3>
<p className="text-sm text-slate-600 flex items-center gap-1 mb-4">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Bali, Indonesia
            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-200">
<div>
<p className="text-xs text-slate-500">from</p>
<p className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">$680<span className="text-sm font-medium text-slate-500">/night</span></p>
</div>
<button className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all">
                View details
              </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3 sm:mb-4">Why book with Wanderlux</h2>
<p className="text-base sm:text-lg text-slate-600">Your journey, our promise</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
<div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4 sm:mb-6">
<svg className="lucide lucide-shield-check w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2 sm:mb-3">Verified Properties</h3>
<p className="text-sm text-slate-600">Every property is personally checked and verified by our team</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4 sm:mb-6">
<svg className="lucide lucide-headphones w-7 h-7 sm:w-8 sm:h-8 text-blue-600" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2 sm:mb-3">24/7 Support</h3>
<p className="text-sm text-slate-600">Our travel experts are always here to help with any questions</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all text-center">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 sm:mb-6">
<svg className="lucide lucide-zap w-7 h-7 sm:w-8 sm:h-8 text-purple-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 mb-2 sm:mb-3">Instant Booking</h3>
<p className="text-sm text-slate-600">Confirm your reservation in seconds with our instant booking</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 sm:mb-6">Ready to start your journey?</h2>
<p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10">Join 2.4 million travelers booking their dream stays</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white hover:bg-white/95 text-slate-900 font-medium transition-all shadow-lg">
          Get started now
        </button>
<button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white font-medium backdrop-blur transition-all">
          Learn more
        </button>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 object-cover rounded-full ring-slate-900 ring-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg"/>
<img alt="" className="w-10 h-10 object-cover ring-slate-900 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<img alt="" className="w-10 h-10 object-cover ring-slate-900 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
</div>
<p className="text-sm text-white/70">Trusted by 2.4M+ travelers worldwide</p>
</div>
</div>
</section>

<footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
<div className="sm:col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">WL</span>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Wanderlux</span>
</div>
<p className="text-sm text-slate-600">Discover luxury stays in the world's most beautiful destinations.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">About us</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Press</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Help center</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Contact us</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Newsletter</h4>
<p className="text-sm text-slate-600 mb-4">Get the latest travel deals and inspiration</p>
<div className="flex gap-2">
<input className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-300 focus:outline-none text-sm" id="emailInput" placeholder="Your email" type="email"/>
<button className="px-3 sm:px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors whitespace-nowrap" id="subscribeBtn">
              Subscribe
            </button>
</div>
</div>
</div>
<div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-600 text-center sm:text-left">© 2024 Wanderlux. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
