import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  /* 
    Sequence animation on scroll when visible (Observer Logic)
  */
  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;

    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }

    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };

    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



      (function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileCloseButton = document.getElementById('mobile-close-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const menuText = document.getElementById('menu-text');
        let isMenuOpen = false;

        function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          
          if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenu.classList.add('opacity-100', 'visible');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            menuText.textContent = 'Fermer';
            document.body.style.overflow = 'hidden';
          } else {
            mobileMenu.classList.remove('opacity-100', 'visible');
            mobileMenu.classList.add('opacity-0', 'invisible');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            menuText.textContent = 'Menu';
            document.body.style.overflow = '';
          }
        }
        mobileMenuButton.addEventListener('click', toggleMenu);
        mobileCloseButton.addEventListener('click', toggleMenu);
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => { if (isMenuOpen) toggleMenu(); });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495528867373-cbf2089b8eb7?q=80&amp', animation: 'scrollBlur linear both', animationTimeline: 'scroll()', animationRange: '0px 800px'}}></div>
<style className="">
  /* 
    The Animation Definition 
  */
  @keyframes scrollBlur {
    0% {
      filter: blur(0px) brightness(0.7);
      transform: scale(1);
    }
    100% {
      filter: blur(20px) brightness(0.3);
      transform: scale(1.05);
    }
  }

  /* Intro Animations */
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


<header className="z-50 relative" style={{backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.5), transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-6 pb-6 items-center justify-between">
<a className="inline-flex items-center gap-2 text-xl font-bold tracking-tight font-geist text-white" href="/">
<svg className="lucide lucide-car-taxi-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
        TaxiPro
      </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/services">Services</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/flotte">Notre Flotte</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/business">Entreprises</a>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur items-center">
          Commander un taxi
        </button>
</nav>

<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<svg className="lucide lucide-menu w-[16px] h-[16px]" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-[16px] h-[16px] hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
<span id="menu-text">Menu</span>
</button>
</div>

<div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300 ease-out" id="mobile-menu">
<div className="flex flex-col h-full pt-6 pb-8 px-6">

<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur" id="mobile-close-button">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/services">Services</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/flotte">Véhicules</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/app">Application</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#tarifs">Tarifs</a>
<a className="block text-2xl font-normal text-white/80 hover:text-white transition font-geist" href="#support">Aide</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<button className="w-full inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur items-center justify-center">
              Commander un taxi
            </button>
</div>
</nav>
</div>
</div>

</div>
</header>

<section className="flex min-h-[90vh] z-20 relative items-end" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \'Apple Color Emoji\', \'Segoe UI Emoji\''}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">

<div className="order-1 opacity-0 animate-[slideInBlur_1.2s_ease-out_0.4s_forwards]" style={{transform: 'translateY(30px)', filter: 'blur(10px)'}}>
<h1 className="sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-6xl font-semibold tracking-tighter font-geist">Rapide.<br/>Fiable.<br/>À proximité.</h1>
</div>

<div className="order-2 lg:order-2">
<div className="flex gap-3 animate-[fadeInSlide_0.8s_ease-out_0.6s_forwards] text-xs text-white/70 opacity-0 mb-6 gap-x-3 gap-y-3 items-center" style={{transform: 'translateX(20px)'}}>
<div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur border border-white/10">
<svg className="lucide lucide-map-pin w-[14px] h-[14px] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="font-medium text-white/90 font-geist">Disponible maintenant</span>
<span className="text-white/60 font-geist">à &lt; 5 min</span>
</div>
<div className="hidden md:block w-px h-4 bg-white/20"></div>
<span className="hidden md:inline font-normal font-geist">Plus de 500 chauffeurs connectés</span>
</div>
<p className="sm:text-xl leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] text-lg text-white/80 font-geist opacity-0 mb-8" style={{transform: 'translateY(20px)', filter: 'blur(5px)'}}>Commandez votre taxi en quelques secondes. Des chauffeurs professionnels, des véhicules premium et une tarification transparente pour tous vos déplacements.</p>
<div className="border-t border-white/10 pt-6 mb-6 opacity-0 animate-[fadeInScale_0.8s_ease-out_1s_forwards]" style={{transform: 'scale(0.95)', filter: 'blur(3px)'}}>
<div className="flex flex-wrap gap-4 gap-x-4 gap-y-4 items-center">
<div className="relative inline-block group rounded-full">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] hover:bg-white/15 text-white bg-white/10 opacity-0 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] cursor-pointer" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" role="button" style={{-X: '199.6484375px', -Y: '12px', -O: '0', transform: 'translateX(-30px)', filter: 'blur(8px)'}}>
<span className="inline-flex items-center gap-2 font-normal font-geist z-10 rounded-full relative">Commander<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 rounded-full" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="rounded-full" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<div className="w-px h-6 bg-white/20"></div>
<button className="inline-flex gap-2 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 animate-[fadeInSlide_0.8s_ease-out_1.4s_forwards] text-base font-normal text-white/90 font-geist opacity-0 border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur gap-x-2 gap-y-2 items-center cursor-pointer" role="button" style={{transform: 'translateX(20px)', filter: 'blur(4px)'}}>
<svg className="lucide lucide-calculator h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
          Estimer le prix
        </button>
</div>
</div>
<div className="border-t border-white/10 pt-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_1.6s_forwards]" style={{transform: 'translateY(15px)', filter: 'blur(2px)'}}>
<p className="text-sm text-white/45 font-geist">Service disponible à Paris, Lyon, Marseille et Bordeaux.</p>
</div>
</div>
<style className="">
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
              filter: blur(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0px);
            }
          }

          @keyframes slideInBlur {
            from {
              opacity: 0;
              transform: translateX(-30px);
              filter: blur(8px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0px);
            }
          }

          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateX(20px);
              filter: blur(4px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0px);
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.95);
              filter: blur(3px);
            }

            to {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }
        </style>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 text-[11px] uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}><svg className="lucide lucide-shield-check h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg> Service Premium</span>
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Voyagez comme il se doit</h2>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-3" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>Fini l'attente incertaine. Nous vous connectons au chauffeur le plus proche en temps réel. Profitez d'un confort absolu et d'un trajet en toute sécurité.</p>
</div>

<div className="text-center mt-10">
<p className="text-[11px] text-white/50 tracking-widest font-geist animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>FLOTTE EXCLUSIVE</p>
</div>

<div className="mt-6">
<div className="overflow-hidden animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<img alt="Luxury car interior" className="aspect-[16/9] w-full h-full object-cover" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-3 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-wifi text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" x2="12.01" y1="20" y2="20"></line></svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Wi-Fi à bord</p>
<p className="text-xs text-white/60 font-geist">Connecté pendant tout le trajet</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex animate-on-scroll mt-6 justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/90 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Réserver un chauffeur</a>
</div>
</div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 text-[11px] uppercase animate-on-scroll text-white/70 tracking-widest font-geist bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}><svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> L'excellence du transport</span>
<h2 className="sm:text-5xl animate-on-scroll text-3xl font-semibold tracking-tight font-geist mt-4" style={{animation: '1s ease-out 0.2s 1 normal both running fadeSlideIn'}}>Plus qu'un simple taxi</h2>
<p className="leading-relaxed animate-on-scroll text-white/70 font-geist mt-3" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>Que ce soit pour un transfert aéroport, un rendez-vous d'affaires ou une soirée, nous garantissons ponctualité et discrétion.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 animate-on-scroll mt-12 gap-x-6 gap-y-6" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Disponibilité 24/7</p>
<p className="text-sm text-white/60 font-geist mt-1">De jour comme de nuit, dimanche et jours fériés, nous sommes là.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-plane" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path><path d="M13 12v6c0 1 1 2 2 2s2-1 2-2v-6"></path><path d="M13 12V6c0-1 1-2 2-2s2 1 2 2v6"></path><path d="M10 12l-5 5v2h2l5-5"></path><path d="M10 12L5 7V5h2l5 5"></path>
</svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Transferts Aéroport</p>
<p className="text-sm text-white/60 font-geist mt-1">Roissy CDG, Orly, Beauvais. Suivi de vol inclus pour un accueil parfait.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-badge-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 2 2 0 0 0 0-2.82Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Chauffeurs Pro</p>
<p className="text-sm text-white/60 font-geist mt-1">Tous nos chauffeurs sont certifiés, formés et évalués par les clients.</p>
</div>
<div className="group hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-credit-card" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line><line x1="2" x2="22" y1="10" y2="10"></line><path d="M12 15h2"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist mt-3">Prix Fixe &amp; Sécurisé</p>
<p className="text-sm text-white/60 font-geist mt-1">Prix annoncé à la commande. Pas de surprise. Paiement CB in-app ou à bord.</p>
</div>
</div><div className="flex animate-on-scroll mt-8 justify-center" style={{animation: 'fadeSlideIn 1.0s ease-out 0.9s both'}}>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-white/90 font-geist border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Devenir Partenaire</a>
</div></div>
</section>
<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<p className="uppercase text-xs text-white/50 tracking-widest font-geist" style={{}}>L'Application Mobile</p>
<h2 className="sm:text-5xl text-3xl font-semibold tracking-tight font-geist mt-3">Commandez en un clic, suivez votre chauffeur</h2>
<p className="leading-relaxed text-white/70 font-geist mt-4">Notre application a été pensée pour simplifier vos déplacements. Géolocalisation précise, choix du véhicule et paiement dématérialisé.</p>
<div className="mt-8 space-y-3">

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="lucide lucide-smartphone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Commande immédiate</p>
<p className="text-sm text-white/60 font-geist">L'app vous géolocalise et trouve le chauffeur le plus proche</p>
</div>
</div>
</div>

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="lucide lucide-map" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Suivi en temps réel</p>
<p className="text-sm text-white/60 font-geist">Visualisez l'approche de votre chauffeur sur la carte</p>
</div>
</div>
</div>

<div className="group flex hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur items-center justify-between animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center sm:w-9 bg-white/5 w-16 h-9 border-white/10 border rounded-lg">
<svg className="lucide lucide-history" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</span>
<div className="">
<p className="font-medium tracking-tight font-geist">Historique &amp; Factures</p>
<p className="text-sm text-white/60 font-geist">Retrouvez toutes vos courses et justificatifs automatiquement</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<img alt="App interface on phone" className="aspect-square w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>

<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="lucide lucide-navigation h-4 w-4 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>
<span className="text-xs font-medium text-white/90 font-geist">Arrivée dans 4 min</span>
</div>
<div className="absolute bottom-4 left-4 flex flex-col gap-2">
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="lucide lucide-user w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-white/90 font-geist">Chauffeur: Thomas D.</span>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2">
<svg className="lucide lucide-car" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
<span className="text-xs font-medium text-white/90 font-geist">Mercedes Classe E</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-white/10 border-t relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-6 pl-6">
<div className="mb-10 flex items-end justify-between gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight font-geist">Choisissez votre confort</h2>
<p className="mt-2 text-white/70 font-geist">Une gamme de véhicules adaptée à chacun de vos besoins.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition animate-on-scroll" href="#" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<svg className="lucide lucide-layout-grid h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
          Voir toute la flotte
        </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="relative h-56">
<img alt="Standard Taxi Sedan" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&amp;w=2836&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Eco Standard</p>
<p className="text-sm text-white/60 font-geist">Toyota Prius / Peugeot 508</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Économique</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">4 Passagers</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Hybride</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="relative h-56">
<img alt="Premium Black Car" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Berline Affaires</p>
<p className="text-sm text-white/60 font-geist">Mercedes Classe E / BMW Série 5</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Confort</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Cuir</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Bouteille d'eau</span>
</div>
</div>
</div>

<div className="group overflow-hidden hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="relative h-56">
<img alt="Van for groups" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-lg font-medium font-geist tracking-tight">Van XL</p>
<p className="text-sm text-white/60 font-geist">Mercedes Classe V</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Groupe</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">7 Passagers</span>
<span className="text-xs text-white/80 border border-white/10 rounded-full px-2 py-1">Bagages XL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 animate-on-scroll relative" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6">
<div className="mb-8 flex items-end justify-between gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<h2 className="sm:text-4xl text-3xl font-semibold tracking-tight font-geist" style={{}}>Comment ça marche ?</h2>
<p className="text-white/70 font-geist mt-2">Réserver votre course n'a jamais été aussi simple.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-map-pin-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"></path><path d="m9 10 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">1. Indiquez votre trajet</p>
<p className="text-sm text-white/60 font-geist">Départ et destination</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Géolocalisation automatique</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Estimation du prix immédiate</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Réservation à l'avance possible</li>
</ul>
<div className="mt-5">
<button className="inline-flex hover:bg-white/10 transition text-sm font-medium text-white/90 border-white/10 border rounded-full pt-2 pr-3.5 pb-2 pl-3.5 gap-x-2 gap-y-2 items-center">Simuler un trajet</button>
</div>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">2. Confirmez le chauffeur</p>
<p className="text-sm text-white/60 font-geist">Sécurité et transparence</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Nom et photo du chauffeur</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Modèle et plaque du véhicule</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Contact direct via l'app</li>
</ul>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 h-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<svg className="lucide lucide-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div className="">
<p className="text-lg font-medium tracking-tight font-geist">3. Profitez du voyage</p>
<p className="text-sm text-white/60 font-geist">Arrivez à bon port</p>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Paiement automatique</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Facture par email</li>
<li className="flex items-center gap-2 text-sm text-white/80"><svg className="lucide lucide-check h-4 w-4 text-white/80" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg> Notez votre chauffeur</li>
</ul>
</div>
</div>
</div>
</section>
<footer className="relative z-20 border-white/10 border-t">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="">
<a className="inline-flex items-center gap-2 text-xl font-bold tracking-tight font-geist text-white" href="#">
<svg className="lucide lucide-car-taxi-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
            TaxiPro
          </a>
<p className="text-sm text-white/60 font-geist mt-4">La référence du transport de personnes. Fiabilité, confort et sécurité pour tous vos trajets.</p>
<form className="mt-6 flex items-center gap-2">
<input className="flex-1 rounded-full bg-white/5 border border-white/10 px-3.5 py-2 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 font-geist" placeholder="Votre email" type="email"/>
<button className="inline-flex items-center gap-2 text-sm font-medium text-white/90 border border-white/10 rounded-full px-3.5 py-2 hover:bg-white/10 transition font-geist">
            S'inscrire
            
          </button>
</form>
</div>

<div className="">
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Services</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Commander un taxi</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Aéroport</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Gare</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Mise à disposition</a></li>
</ul>
</div>

<div className="">
<p className="text-xs uppercase tracking-widest text-white/50 font-geist">Liens utiles</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Devenir Chauffeur</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Espace Entreprise</a></li>
<li className=""><a className="hover:text-white/90 transition text-sm text-white/70 font-geist" href="#">Centre d'aide</a></li>
</ul>
</div>

<div className="">
<p className="uppercase text-xs text-white/50 tracking-widest font-geist">Société</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#">À propos</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#">Contact</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white/90 transition font-geist" href="#">Presse</a></li>
</ul>
</div>
</div>

<div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-xs text-white/50 font-geist">© 2025 TaxiPro. Tous droits réservés.</p>
<div className="flex flex-wrap items-center gap-4">
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">CGV</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">Confidentialité</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="#">Cookies</a>
<span className="w-px h-3 bg-white/15"></span>
<a className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white transition font-geist" href="#">
            Status
            <svg className="lucide h-3 w-3" data-lucide="activity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
</path>
</svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
