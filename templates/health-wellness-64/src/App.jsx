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
}



        (function() {
          let currentCard = 0;
          const totalCards = 3;
          const cards = document.querySelectorAll('.card');
          const indicators = document.querySelectorAll('.card-indicator');
          const nextBtn = document.getElementById('nextCard');
          const prevBtn = document.getElementById('prevCard');

          const cardPositions = [
            // Front card
            { transform: 'translateZ(0px) rotateZ(-3deg) translateY(0px)', zIndex: 3 },
            // Middle card
            { transform: 'translateZ(-20px) rotateZ(2deg) translateY(8px)', zIndex: 2 },
            // Back card
            { transform: 'translateZ(-40px) rotateZ(-1deg) translateY(16px)', zIndex: 1 }
          ];

          function updateCardPositions() {
            cards.forEach((card, index) => {
              const cardIndex = parseInt(card.dataset.card);
              const position = (cardIndex - currentCard + totalCards) % totalCards;
              const pos = cardPositions[position];
              
              card.style.transform = pos.transform;
              card.style.zIndex = pos.zIndex;
            });

            // Update indicators
            indicators.forEach((indicator, index) => {
              if (index === currentCard) {
                indicator.classList.remove('bg-neutral-300', 'dark:bg-neutral-600');
                indicator.classList.add('bg-neutral-900', 'dark:bg-white');
              } else {
                indicator.classList.remove('bg-neutral-900', 'dark:bg-white');
                indicator.classList.add('bg-neutral-300', 'dark:bg-neutral-600');
              }
            });
          }

          function nextCard() {
            currentCard = (currentCard + 1) % totalCards;
            updateCardPositions();
          }

          function prevCard() {
            currentCard = (currentCard - 1 + totalCards) % totalCards;
            updateCardPositions();
          }

          nextBtn.addEventListener('click', nextCard);
          prevBtn.addEventListener('click', prevCard);

          // Auto-cycle cards every 5 seconds
          setInterval(nextCard, 5000);

          // Click on cards to cycle
          cards.forEach(card => {
            card.addEventListener('click', (e) => {
              if (e.target.closest('a')) return; // Don't interfere with links
              nextCard();
            });
          });

          // Initialize positions
          updateCardPositions();
        })();
      


      // Enhanced animation system
      (function() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        }, { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        document.addEventListener('DOMContentLoaded', () => {
          // Observe all animated elements
          document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
          });

          // Initialize hero content animation
          setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
              heroContent.classList.add('animate');
            }
          }, 500);
        });
      })();

      // Theme toggle functionality
      (function() {
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        const sunIcon = themeToggle.querySelector('svg');
        const themeText = themeToggle.querySelector('span');

        function updateTheme(isDark) {
          if (isDark) {
            html.classList.add('dark');
            sunIcon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
            themeText.textContent = 'Sombre';
          } else {
            html.classList.remove('dark');
            sunIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
            themeText.textContent = 'Clair';
          }
        }

        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          updateTheme(savedTheme === 'dark');
        }

        themeToggle.addEventListener('click', () => {
          const isDark = html.classList.contains('dark');
          updateTheme(!isDark);
          localStorage.setItem('theme', !isDark ? 'dark' : 'light');
        });
      })();

      // Mobile menu functionality
      (function() {
        const mobileOpen = document.getElementById('mobileOpen');
        const mobileClose = document.getElementById('mobileClose');
        const mobileDrawer = document.getElementById('mobileDrawer');
        const mobileBackdrop = document.getElementById('mobileBackdrop');

        function openMobile() {
          mobileDrawer.classList.remove('hidden');
          setTimeout(() => {
            mobileDrawer.querySelector('aside').style.transform = 'translateX(0)';
          }, 10);
        }

        function closeMobile() {
          mobileDrawer.querySelector('aside').style.transform = 'translateX(-100%)';
          setTimeout(() => {
            mobileDrawer.classList.add('hidden');
          }, 300);
        }

        mobileOpen.addEventListener('click', openMobile);
        mobileClose.addEventListener('click', closeMobile);
        mobileBackdrop.addEventListener('click', closeMobile);
      })();

      // Hero parallax effect
      (function() {
        const heroBackground = document.getElementById('heroBackground');
        
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          
          if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
          }
        });
      })();

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
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
      

<div className="fixed top-20 right-6 z-[100] space-y-2" id="toastContainer"></div>

<div className="hidden sm:block bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm transition-colors duration-300 animate-on-scroll slide-down">
<div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center">
<p className="opacity-90 animate-on-scroll text-reveal stagger-1">Protégez votre santé cardiaque avec une technologie médicale de pointe</p>
</div>
</div>

<header className="sticky z-50 supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 dark:bg-neutral-900/90 dark:border-neutral-700 transition-colors duration-300 animate-on-scroll blur-slide bg-white/90 border-neutral-200 border-b top-0 backdrop-blur">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<button className="sm:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors animate-on-scroll scale-in stagger-1" id="mobileOpen">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="flex items-center gap-2 animate-on-scroll slide-right stagger-1" href="#">
<svg className="w-6 h-6 text-red-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
<path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
</svg>
<span className="text-lg font-semibold tracking-tight">Gardien du Cœur</span>
</a>
</div>
<nav className="hidden sm:flex items-center gap-8 text-sm">
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition animate-on-scroll fade-in stagger-2" href="#solution">La Solution</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition animate-on-scroll fade-in stagger-3" href="#fonctionnement">Comment ça marche</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition animate-on-scroll fade-in stagger-4" href="#temoignages">Témoignages</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition animate-on-scroll fade-in stagger-5" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors border-neutral-200 border rounded-full ml-1 pt-1 pr-2 pb-1 pl-2 items-center animate-on-scroll slide-left stagger-2" id="themeToggle">
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-xs">Clair</span>
</button>
</div>
</div>

<div className="sm:hidden fixed inset-0 z-50 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/30" id="mobileBackdrop"></div>
<aside className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-xl p-6 flex flex-col transition-colors duration-300">
<div className="flex items-center justify-between mb-6">
<span className="text-lg tracking-tight font-semibold">Menu</span>
<button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" id="mobileClose">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col gap-4 text-base">
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition" href="#solution">La Solution</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition" href="#fonctionnement">Comment ça marche</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition" href="#temoignages">Témoignages</a>
<a className="hover:text-neutral-600 dark:hover:text-neutral-400 transition" href="#contact">Contact</a>
</nav>
</aside>
</div>
</header>

<section className="relative h-[80vh] overflow-hidden bg-neutral-900">
<div className="absolute inset-0 hero-parallax-bg animate-on-scroll image-reveal stagger-1" id="heroBackground">
<img alt="Personne âgée sereine utilisant la technologie" className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a687f7c0-d9cf-4cce-8e7e-13863f4a592e_1600w.jpg"/>

<div className="absolute inset-0 hero-gradient-overlay" id="heroGradient"></div>
</div>
<div className="relative z-10 flex h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="max-w-2xl text-white hero-content">
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight animate-on-scroll text-reveal stagger-1">Et si vous pouviez anticiper les risques liés à l'AVC avant qu'il ne soit trop tard ?</h1>
<p className="text-lg md:text-xl leading-relaxed opacity-90 mt-6 animate-on-scroll text-reveal stagger-2">Technologie discrète + suivi médical personnalisé = sérénité pour vous et vos proches.</p>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<a className="flex justify-center gap-2 items-center lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden group text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-xl backdrop-blur-md animate-on-scroll scale-in stagger-3" href="#solution">Découvrir la solution<svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewbox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
<path className="fill-gray-800 group-hover:fill-gray-800" d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
</svg></a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur transition transform hover:scale-105 animate-on-scroll slide-left stagger-4" href="#contact">
              Demander une démonstration
              <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="dark:border-neutral-700 transition-colors duration-300 dark:bg-neutral-900 bg-neutral-50 border-neutral-200 border-t">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center animate-on-scroll blur-slide">
<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
<span className="animate-on-scroll slide-left stagger-1 text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold italic font-playfair text-neutral-900 dark:text-white">Votre santé cardiaque,</span>
<img alt="Technologie médicale" className="animate-on-scroll rotate-in stagger-2 inline-block sm:h-12 sm:w-12 md:h-14 md:w-14 bg-white w-10 h-10 object-cover ring-white ring-4 rounded-2xl shadow-xl -rotate-6" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ead6a95d-ae67-4b24-9f26-ae02bf27cb1e_3840w.jpg" style={{}}/>
<span className="animate-on-scroll slide-right stagger-3 text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold italic font-playfair text-neutral-900 dark:text-white">notre priorité,</span>
<img alt="Suivi médical" className="animate-on-scroll rotate-in stagger-4 inline-block sm:h-12 sm:w-12 md:h-14 md:w-14 ring-white ring-4 bg-white w-10 h-10 object-cover rounded-2xl shadow-xl rotate-6" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cab73078-80bd-4f30-8d0d-775e21f09e27_3840w.jpg" style={{}}/>
</div>
<div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
<img alt="Protection santé" className="animate-on-scroll scale-up stagger-5 inline-block sm:h-12 sm:w-20 md:h-14 md:w-24 ring-white ring-4 w-0 h-0 object-cover rounded-2xl shadow-xl -rotate-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16c0110c-f333-4a45-a83a-d83ff9487661_3840w.jpg" style={{}}/>
<span className="animate-on-scroll slide-up stagger-6 text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold italic font-playfair text-neutral-900 dark:text-white">votre tranquillité.</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 justify-start" id="collections">
<div className="flex mb-8 items-end justify-between animate-on-scroll fade-in">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold animate-on-scroll text-reveal stagger-1">Explore Collections</h2>
<p className="mt-2 text-neutral-600 dark:text-neutral-400 animate-on-scroll text-reveal stagger-2">Targeted routines for every skin goal.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition animate-on-scroll slide-left stagger-3" href="#shop">
          View all
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="flex gap-1.5 bg-[#ffffff] w-[1190px] h-[464px] max-w-none rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl space-x-4 animate-on-scroll scale-in">
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-3xl relative top-0 right-0 bottom-0 left-0 items-center justify-center animate-on-scroll blur-in stagger-1">
<img alt="Hydrating serums collection" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/81c1ffe7-4ef4-4ad0-af93-20b8464eee2e_800w.jpg"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Hydrate &amp; Restore</h3>
<p className="text-gray-200 text-sm">Moisture-rich serums with hyaluronic acid</p>
<p className="text-gray-400 text-xs mt-2">Essential Hydration Collection</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-3xl relative top-0 right-0 bottom-0 left-0 items-center justify-center animate-on-scroll blur-in stagger-2">
<img alt="Gentle cleansing products" className="card-image w-full h-full object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_800w.jpg"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Cleanse &amp; Purify</h3>
<p className="text-gray-200 text-sm">pH-balanced cleansers for sensitive skin</p>
<p className="text-gray-400 text-xs mt-2">Gentle Care Collection</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 relative group bg-gray-800 h-full rounded-3xl top-0 right-0 bottom-0 left-0 items-center justify-center animate-on-scroll blur-in stagger-3">
<img alt="Anti-aging skincare products" className="card-image w-full h-full object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_800w.jpg"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Renew &amp; Repair</h3>
<p className="text-gray-200 text-sm">Anti-aging actives with botanical support</p>
<p className="text-gray-400 text-xs mt-2">Advanced Renewal Series</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-3xl relative top-0 right-0 bottom-0 left-0 items-center justify-center animate-on-scroll blur-in stagger-4">
<img alt="Natural botanical ingredients" className="card-image w-full h-full object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/66c7e7a4-0871-4ca4-9a13-ee7daeeeebe7_800w.jpg"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Botanical Blend</h3>
<p className="text-gray-200 text-sm">Nature-inspired actives for healthy glow</p>
<p className="text-gray-400 text-xs mt-2">Natural Radiance Collection</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group relative bg-stone-50 h-full rounded-3xl top-0 right-0 bottom-0 left-0 items-center justify-center animate-on-scroll blur-in stagger-5">
<img alt="Nourishing face oils and creams" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f0c6ca8f-90a8-4036-bdd1-9adc2e917c7b_3840w.jpg"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Nourish &amp; Protect</h3>
<p className="text-gray-200 text-sm">Rich moisturizers with barrier protection</p>
<p className="text-gray-400 text-xs mt-2">Barrier Repair Collection</p>
</div>
</div>
<style>
    .font-inter {
      font-family: 'Inter', sans-serif;
    }

    .card-panel {
      transition: flex 0.5s ease;
    }

    .card-panel:hover {
      flex: 4;
    }

    .card-image {
      transition: all 0.5s ease;
    }

    .card-overlay {
      transition: opacity 0.3s ease;
    }
  </style>
</div>

</section>

<section className="dark:bg-neutral-800 border-y dark:border-neutral-700 transition-colors duration-300 overflow-hidden bg-neutral-50 border-neutral-200" id="shop">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="flex items-end justify-between mb-8 animate-on-scroll slide-up">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold animate-on-scroll text-reveal stagger-1">Featured Products</h2>
<p className="mt-2 text-neutral-600 dark:text-neutral-400 animate-on-scroll text-reveal stagger-2">Thoughtful formulas, consciously packaged.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex gap-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm border-[#ffffff] border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-lg items-center animate-on-scroll scale-in stagger-3"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="inline-flex gap-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-sm border-[#ffffff] border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-lg items-center animate-on-scroll scale-in stagger-4"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

<article className="animate-on-scroll card-reveal stagger-1 group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
<div className="relative">
<img alt="Barrier Repair Serum" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-on-scroll image-reveal stagger-1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_800w.jpg" style={{}}/>
<span className="dark:bg-neutral-800/95 dark:text-white dark:border-neutral-600 text-xs font-medium text-neutral-900 bg-white/60 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm animate-on-scroll fade-in stagger-2">New</span>
<button className="absolute top-4 right-4 p-2.5 bg-white/95 dark:bg-neutral-800/95 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-all transform hover:scale-110 shadow-sm animate-on-scroll rotate-in stagger-3">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-6">
<header className="flex items-start justify-between">
<div className="min-w-0 flex-1">
<h3 className="text-lg tracking-tight font-semibold text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-4">Barrier Repair Serum</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 animate-on-scroll text-reveal stagger-5">Ceramides + Niacinamide 5%</p>
</div>
<span className="text-lg font-semibold text-neutral-900 dark:text-white ml-4 animate-on-scroll slide-left stagger-6">$42</span>
</header>
<div className="mt-4 flex items-center gap-1 text-amber-500 animate-on-scroll fade-in stagger-7">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a .53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 opacity-40" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">162 reviews</span>
</div>
<div className="mt-6 flex gap-3">
<button className="add-to-cart flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-on-scroll scale-in stagger-8" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_800w.jpg" data-price="42" data-product="Barrier Repair Serum">
          Add to cart
          <svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="animate-on-scroll card-reveal stagger-2 group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
<div className="relative">
<img alt="Cloud Cleanser" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-on-scroll image-reveal stagger-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_800w.jpg" style={{}}/>
<span className="dark:bg-neutral-800/95 dark:text-white dark:border-neutral-600 text-xs font-medium text-neutral-900 bg-white/60 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm animate-on-scroll fade-in stagger-3">pH 5.5</span>
</div>
<div className="p-6">
<header className="flex items-start justify-between">
<div className="min-w-0 flex-1">
<h3 className="text-lg tracking-tight font-semibold text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-4">Cloud Cleanser</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 animate-on-scroll text-reveal stagger-5">Amino Acid Gel</p>
</div>
<span className="text-lg font-semibold text-neutral-900 dark:text-white ml-4 animate-on-scroll slide-left stagger-6">$22</span>
</header>
<div className="mt-4 flex items-center gap-1 text-amber-500 animate-on-scroll fade-in stagger-7">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 opacity-40" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 opacity-40" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">84 reviews</span>
</div>
<div className="mt-6 flex gap-3">
<button className="add-to-cart flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-on-scroll scale-in stagger-8" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c09615d-a59e-4e70-a69c-f85d41f58008_800w.jpg" data-price="22" data-product="Cloud Cleanser">
          Add to cart
          <svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="animate-on-scroll card-reveal stagger-3 group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
<div className="relative">
<img alt="Silk Moisture Cream" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-on-scroll image-reveal stagger-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c698c05d-cf04-4db6-bbeb-c6b5bacd1d26_800w.jpg" style={{}}/>
<span className="dark:bg-neutral-800/95 dark:text-white dark:border-neutral-600 text-xs font-medium text-neutral-900 bg-white/60 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 left-4 shadow-sm backdrop-blur-sm animate-on-scroll fade-in stagger-4">Best Seller</span>
</div>
<div className="p-6">
<header className="flex items-start justify-between">
<div className="min-w-0 flex-1">
<h3 className="text-lg tracking-tight font-semibold text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-5">Silk Moisture Cream</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 animate-on-scroll text-reveal stagger-6">Squalane + Peptides</p>
</div>
<span className="text-lg font-semibold text-neutral-900 dark:text-white ml-4 animate-on-scroll slide-left stagger-7">$34</span>
</header>
<div className="mt-4 flex items-center gap-1 text-amber-500 animate-on-scroll fade-in stagger-8">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">420 reviews</span>
</div>
<div className="mt-6 flex gap-3">
<button className="add-to-cart flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-on-scroll scale-in stagger-1" data-image="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c698c05d-cf04-4db6-bbeb-c6b5bacd1d26_800w.jpg" data-price="34" data-product="Silk Moisture Cream">
          Add to cart
          <svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="about">
<div className="animate-on-scroll image-reveal grid lg:grid-cols-2 gap-16 md:px-16 md:py-20 lg:px-20 lg:py-24 relative group cursor-pointer transition-all duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4fbca9e2-8404-407b-b3f5-0d7031ed837c_1600w.jpg)] bg-cover rounded-3xl pt-16 pr-8 pb-16 pl-8 top-0 right-0 bottom-0 left-0 shadow-2xl items-center">

<div className="dark:bg-black/45 rounded-3xl absolute top-0 right-0 bottom-0 left-0 group-hover:bg-black/45 transition-all duration-500"></div>

<div className="group-hover:opacity-100 transition-all duration-500 opacity-0 rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{backdropFilter: 'blur(1px)'}}></div>

<div className="relative z-10 animate-on-scroll slide-left stagger-1">
<h2 className="md:text-4xl dark:text-white text-3xl font-semibold text-[#ffffff] tracking-tight animate-on-scroll text-reveal stagger-1">Clinically gentle. Consciously crafted.</h2>
<p className="dark:text-neutral-200 leading-relaxed text-neutral-200 mt-6 animate-on-scroll text-reveal stagger-2">We formulate with evidence‑based percentages, skin‑identical lipids, and soothing botanicals to support long‑term skin health.</p>
<div className="mt-10 grid sm:grid-cols-3 gap-6">
<div className="animate-on-scroll card-reveal stagger-3 dark:border-neutral-600 dark:bg-neutral-900/90 transition-colors duration-300 transform hover:scale-105 bg-white/50 border-neutral-300 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-sm">
<svg className="lucide lucide-leaf dark:text-green-400 w-[24px] h-[24px] animate-on-scroll scale-in stagger-4" data-icon-replaced="true" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(22, 163, 74)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<h4 className="mt-4 font-semibold tracking-tight text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-5">Botanical Actives</h4>
<p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 animate-on-scroll text-reveal stagger-6">Green tea, licorice root, centella.</p>
</div>
<div className="animate-on-scroll card-reveal stagger-4 dark:border-neutral-600 dark:bg-neutral-900/90 transition-colors duration-300 transform hover:scale-105 bg-white/50 border-neutral-300 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-sm">
<svg className="lucide lucide-droplets lucide-leaf dark:text-green-400 w-[24px] h-[24px] animate-on-scroll scale-in stagger-5" data-icon-replaced="true" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(22, 163, 74)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<h4 className="mt-4 font-semibold tracking-tight text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-6">Hydration Matrix</h4>
<p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 animate-on-scroll text-reveal stagger-7">Humectants + ceramides blend.</p>
</div>
<div className="animate-on-scroll card-reveal stagger-5 dark:border-neutral-600 dark:bg-neutral-900/90 transition-colors duration-300 transform hover:scale-105 bg-white/50 border-neutral-300 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-sm">
<svg className="lucide lucide-beaker dark:text-purple-400 w-[24px] h-[24px] animate-on-scroll scale-in stagger-6" data-icon-replaced="true" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(22, 163, 74)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
<h4 className="mt-4 font-semibold tracking-tight text-neutral-900 dark:text-white animate-on-scroll text-reveal stagger-7">Clinical Precision</h4>
<p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 animate-on-scroll text-reveal stagger-8">Evidence-based concentrations.</p>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur transition transform hover:scale-105 animate-on-scroll scale-in stagger-1" href="#ingredients">
          View Ingredients
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="relative z-10 lg:flex hidden items-center justify-center animate-on-scroll slide-right stagger-2">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-on-scroll card-reveal stagger-3">
<div className="grid grid-cols-2 gap-4">
<div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center animate-on-scroll rotate-in stagger-4">
<svg fill="white" height="32" viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M224,64V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path>
<path d="M208,40H48A24,24,0,0,0,24,64V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,200H48a8,8,0,0,1-8-8V160H216v32A8,8,0,0,1,208,200Z"></path>
</svg>
</div>
<div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center animate-on-scroll rotate-in stagger-5">
<svg fill="white" height="32" viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28H116a8,8,0,0,1,0-16h24a12,12,0,0,0,0-24H128a28,28,0,0,1,0-56h12a8,8,0,0,1,0,16H128a12,12,0,0,0,0,24h12A28,28,0,0,1,168,148Z"></path>
</svg>
</div>
<div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center animate-on-scroll rotate-in stagger-6">
<svg fill="white" height="32" viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M216,152v56H40V152a96,96,0,0,1,96-96h0A96,96,0,0,1,216,152Z" opacity="0.2"></path>
<path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,72a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v48H40ZM208,192H48a8,8,0,0,1-8-8V136H216v48A8,8,0,0,1,208,192Z"></path>
</svg>
</div>
<div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center animate-on-scroll rotate-in stagger-7">
<svg fill="white" height="32" viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" opacity="0.2"></path>
<path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V88H32ZM32,192V104H224v88Z"></path>
</svg>
</div>
</div>
<p className="text-white/80 text-sm mt-6 text-center animate-on-scroll text-reveal stagger-8">Backed by research, proven by results</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="text-center max-w-2xl mx-auto animate-on-scroll blur-slide">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight animate-on-scroll text-reveal stagger-1">Stay glowing</h2>
<p className="mt-4 text-lg opacity-90 animate-on-scroll text-reveal stagger-2">Be the first to know about new products, exclusive offers, and skincare tips from our experts.</p>
<form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-on-scroll scale-in stagger-3">
<input className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/30 dark:bg-neutral-900/10 dark:border-neutral-900/20 dark:text-neutral-900 dark:placeholder-neutral-900/60 dark:focus:ring-neutral-900/30 transition-colors duration-300" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white font-medium rounded-lg hover:opacity-90 transition transform hover:scale-105 animate-on-scroll slide-left stagger-4" type="submit">
              Subscribe
            </button>
</form>
<p className="mt-4 text-sm opacity-70 animate-on-scroll fade-in stagger-5">No spam, just glow. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll slide-up">

<div className="animate-on-scroll fade-in stagger-1">
<h3 className="text-lg font-semibold tracking-tight mb-4">Gardien du Cœur</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">Technologie discrète et suivi médical personnalisé pour votre santé cardiaque.</p>
<div className="flex gap-4">
<a className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition" href="#">
<svg fill="currentColor" height="20" viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
</svg>
</a>
<a className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition" href="#">
<svg fill="currentColor" height="20" viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM216,176a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
</svg>
</a>
<a className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition" href="#">
<svg fill="currentColor" height="20" viewbox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.17,126.83A76.05,76.05,0,0,1,82.83,82.83a75.9,75.9,0,0,1,90.34,90.34ZM148,96H124a12,12,0,0,0-12,12v56a8,8,0,0,1-16,0V108a28,28,0,0,1,28-28h24a8,8,0,0,1,0,16Zm24,0a8,8,0,0,1,8-8,8,8,0,0,1,8,8,8,8,0,0,1-8,8A8,8,0,0,1,172,96Z"></path>
</svg>
</a>
</div>
</div>

<div className="animate-on-scroll fade-in stagger-2">
<h4 className="font-semibold mb-4">Solution</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">La Technologie</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Comment ça marche</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Avantages</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Tarifs</a></li>
</ul>
</div>

<div className="animate-on-scroll fade-in stagger-3">
<h4 className="font-semibold mb-4">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Centre d'aide</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">FAQ</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Guide d'utilisation</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Nous contacter</a></li>
</ul>
</div>

<div className="animate-on-scroll fade-in stagger-4">
<h4 className="font-semibold mb-4">Entreprise</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">À propos</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Carrières</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Presse</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Partenaires</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between animate-on-scroll blur-slide">
<p className="text-sm text-neutral-600 dark:text-neutral-400 animate-on-scroll fade-in stagger-1">
            © 2024 Gardien du Cœur. Tous droits réservés.
          </p>
<div className="flex gap-6 mt-4 sm:mt-0 animate-on-scroll fade-in stagger-2">
<a className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Politique de confidentialité</a>
<a className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Conditions d'utilisation</a>
<a className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition" href="#">Mentions légales</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
