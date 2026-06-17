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



      document.addEventListener("DOMContentLoaded", () => {
          // Scroll Animation Observer
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          });

          document.querySelectorAll('.reveal-up').forEach((el) => {
              observer.observe(el);
          });

          // Mobile Menu Toggle Logic
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileNav = document.getElementById('mobile-nav');
          const mobileLinks = document.querySelectorAll('.mobile-link');

          if(mobileMenuBtn && mobileNav) {
              mobileMenuBtn.addEventListener('click', () => {
                  mobileNav.classList.toggle('hidden');
              });

              // Close menu when clicking a link
              mobileLinks.forEach(link => {
                  link.addEventListener('click', () => {
                      mobileNav.classList.add('hidden');
                  });
              });
          }

          // Scrollspy pour la navigation active
          const sectionsToTrack = ["home", "cards", "push-notifications", "plans", "commencer"];
          const updateActiveNav = () => {
              let currentSection = "home";

              sectionsToTrack.forEach((id) => {
                  const section = document.getElementById(id);
                  if (section) {
                      const sectionTop = section.offsetTop;
                      if (window.pageYOffset >= sectionTop - 300) {
                          currentSection = id;
                      }
                  }
              });

              document.querySelectorAll(".nav-link, .mobile-link").forEach((link) => {
                  link.classList.remove("active-nav");
                  if (link.getAttribute("href") === `#${currentSection}`) {
                      link.classList.add("active-nav");
                  }
              });
          };

          window.addEventListener("scroll", updateActiveNav);
          updateActiveNav(); // Initialisation au chargement
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
      

<header className="fixed top-0 inset-x-0 w-full z-[100] backdrop-blur-xl border-b bg-zinc-50/80 border-zinc-200/50 transition-all duration-300">
<div className="flex md:h-20 md:px-6 h-16 max-w-6xl mr-auto ml-auto pr-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">

<a className="flex items-center gap-2 shrink-0" href="/">
<img alt="Voisin Logo" className="bg-center w-auto h-12 md:h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/979e5c6e-5f51-4d18-a17d-a7a196a24a8b_320w.png"/>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors lowercase relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all after:duration-300" href="#home">
            accueil
          </a>
<a className="nav-link text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors lowercase relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all after:duration-300" href="#cards">
            cartes
          </a>
<a className="nav-link text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors lowercase relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all after:duration-300" href="#push-notifications">
            notifications push
          </a>
<a className="nav-link text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors lowercase relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all after:duration-300" href="#plans">
            plans
          </a>
<a className="nav-link hover:text-zinc-900 transition-colors lowercase after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all after:duration-300 text-sm font-normal text-zinc-500 pt-1 pb-1 relative" href="/tarifs" rel="noopener noreferrer" target="_blank">
            tarifs
          </a>
</nav>

<div className="flex items-center gap-3 md:gap-4 shrink-0">

<button className="md:hidden flex items-center justify-center p-2 -ml-2 text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-200/50" id="mobile-menu-btn">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<a className="transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] md:text-lg md:py-2.5 md:px-6 whitespace-nowrap text-sm font-normal text-white bg-[#00A3E0] rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm" href="#commencer">
            Découvrir
          </a>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-zinc-50/95 backdrop-blur-xl border-b border-zinc-200 shadow-xl overflow-hidden transition-all" id="mobile-nav">
<nav className="flex flex-col px-6 py-6 gap-6">
<a className="mobile-link text-xl font-normal text-zinc-600 hover:text-[#00A3E0] lowercase transition-colors" href="#home">
            accueil
          </a>
<a className="mobile-link text-xl font-normal text-zinc-600 hover:text-[#00A3E0] lowercase transition-colors" href="#cards">
            cartes
          </a>
<a className="mobile-link text-xl font-normal text-zinc-600 hover:text-[#00A3E0] lowercase transition-colors" href="#push-notifications">
            notifications push
          </a>
<a className="mobile-link text-xl font-normal text-zinc-600 hover:text-[#00A3E0] lowercase transition-colors" href="#plans">
            plans
          </a>
<a className="mobile-link text-xl font-normal text-zinc-600 hover:text-[#00A3E0] lowercase transition-colors" href="/tarifs" rel="noopener noreferrer" target="_blank">
            tarifs
          </a>
</nav>
</div>
</header>
<main className="flex-1 pt-16 md:pt-20">

<section className="md:pt-52 md:pb-32 overflow-hidden flex flex-col text-center pt-36 pr-6 pb-20 pl-6 relative items-center bg-gradient-to-b from-[#00A3E0]/5 via-zinc-50 to-zinc-50" id="home">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<div className="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00A3E0]/20 bg-[#00A3E0]/5 text-[#00A3E0] text-sm font-normal mb-8 active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3E0] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0]"></span>
</span>
            La fidélité nouvelle génération
          </div>
<h1 className="reveal-up delay-100 md:text-6xl lg:text-7xl leading-tight text-5xl font-normal text-zinc-900 tracking-tight mb-8 active">
            Transformez vos clients d'un jour
            <span className="text-[#00A3E0]">en habitués de toujours.</span>
</h1>
<p className="reveal-up delay-200 md:text-2xl leading-relaxed active text-xl font-light text-zinc-500 max-w-2xl mr-auto mb-12 ml-auto">
            Un système simple et invisible pour transformer vos clients de
            passage en habitués, sans aucun effort de votre part.
          </p>
<div className="reveal-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 active">
<a className="sm:w-auto inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] shadow-[#00A3E0]/20 text-xl font-normal text-white bg-[#00A3E0] w-full rounded-full pt-4 pr-10 pb-4 pl-10 shadow-xl" href="#commencer">
              Découvrir
            </a>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-zinc-100 border-zinc-200/50 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="reveal-up leading-tight md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight text-center lg:text-left mb-6">
              Suivre sa fidélité n'a jamais été aussi simple.
            </h2>
<p className="reveal-up delay-100 leading-relaxed text-xl font-light text-zinc-500 mb-10 text-center lg:text-left">
              Une carte élégante, à vos couleurs, nichée dans leur téléphone.
              Ils voient leur progression en un clin d'œil. Vous leur donnez une
              raison de repasser la porte.
            </p>
<div className="reveal-up delay-200 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] text-lg font-normal text-white bg-[#00A3E0] rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" href="#commencer">
                Découvrir
              </a>
<a className="inline-flex items-center justify-center gap-2 border text-lg font-normal px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50" href="#comment-ca-marche">
                Voir comment ça marche
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-up delay-300 relative mx-auto w-full max-w-[320px]">
<div className="absolute -inset-4 rounded-3xl transform rotate-3 z-0 bg-[#00A3E0]/10"></div>
<div className="rounded-[2.5rem] p-2 shadow-2xl relative z-10 border bg-zinc-900 border-zinc-800">
<div className="absolute top-0 inset-x-0 h-5 rounded-b-xl w-32 mx-auto z-20 bg-zinc-900"></div>
<div className="rounded-[2rem] h-[580px] overflow-hidden relative flex flex-col bg-zinc-50">
<div className="px-6 pt-12 pb-4 flex justify-between items-center text-zinc-900">
<span className="text-xl font-normal tracking-tight">Wallet</span>
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="mx-4 mt-2 rounded-2xl shadow-sm border flex-1 mb-6 flex flex-col relative overflow-hidden group bg-white border-zinc-200">
<div className="p-6 border-b flex items-center gap-4 border-zinc-50 bg-gradient-to-b from-[#00A3E0]/5 to-transparent">
<div className="w-14 h-14 bg-[#00A3E0] rounded-full flex items-center justify-center text-white shadow-inner">
<iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                        Le Café Tchatcheur
                      </div>
<div className="text-base font-light text-zinc-400">
                        Carte de fidélité
                      </div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-center bg-zinc-900 rounded-b-2xl">
<div className="text-center mb-8">
<div className="text-6xl font-normal tracking-tight mb-2 text-white">
                        4
                        <span className="text-zinc-600">/ 8</span>
</div>
<div className="text-sm font-light text-zinc-400 uppercase tracking-widest">
                        Points accumulés
                      </div>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-full bg-[#00A3E0] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,163,224,0.5)]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full bg-[#00A3E0] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,163,224,0.5)]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full bg-[#00A3E0] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,163,224,0.5)]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full bg-[#00A3E0] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,163,224,0.5)]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full border flex items-center justify-center bg-zinc-800 border-zinc-700 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full border flex items-center justify-center bg-zinc-800 border-zinc-700 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full border flex items-center justify-center bg-zinc-800 border-zinc-700 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="aspect-square rounded-full border flex items-center justify-center bg-zinc-800 border-zinc-700 text-zinc-600">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-4xl mx-auto text-center">
<p className="reveal-up md:text-5xl leading-snug text-4xl font-light text-zinc-400 tracking-tight">
          Aujourd’hui, la majorité de vos clients ne reviennent jamais.
          <br/>
<span className="font-normal text-zinc-900">
            Ils viennent une fois… puis disparaissent.
          </span>
</p>
<p className="reveal-up delay-100 mt-10 text-2xl font-light text-zinc-500 mb-12">
          Vous ne savez pas qui sont vos meilleurs clients ni quand les
          relancer.
        </p>
<div className="reveal-up delay-200">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-lg font-normal border rounded-full py-3.5 px-8 shadow-sm hover:bg-zinc-100 text-zinc-900 bg-white border-zinc-200" href="#comment-ca-marche">
            Découvrez la solution
            <iconify-icon className="text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 px-6 bg-[#00A3E0] text-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="relative z-10 reveal-up">
<h2 className="md:text-6xl leading-tight text-5xl font-normal tracking-tight max-w-4xl mr-auto mb-12 ml-auto">
            Ne soyez plus une option, devenez leur habitude.
          </h2>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.05] active:scale-95 hover:bg-zinc-50 text-xl font-normal text-[#00A3E0] bg-white rounded-full pt-4 pr-10 pb-4 pl-10 shadow-xl" href="#commencer">
            Découvrir
          </a>
</div>
</section>

<section className="py-32 px-6 max-w-5xl mx-auto border-b border-zinc-200" id="comment-ca-marche">
<div className="text-center mb-24 reveal-up">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8 text-zinc-900">
            Voisin. rend vos clients fidèles.
          </h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-2xl text-zinc-500 font-light">
<span className="">Une carte digitale simple.</span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></span>
<span className="">Un suivi automatique.</span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></span>
<span className="text-zinc-900 font-normal">
              Des clients qui reviennent.
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-16">
<div className="reveal-up delay-100 flex flex-col items-center relative">
<div className="text-7xl font-light tracking-tighter mb-6 text-zinc-200">
              1
            </div>
<div className="flex text-4xl text-[#00A3E0] bg-[#00A3E0]/10 w-20 h-20 rounded-3xl mb-8 items-center justify-center">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
</div>
<p className="text-2xl font-normal tracking-tight leading-tight text-zinc-900">
              Le client ajoute sa carte sur son téléphone
            </p>
</div>
<div className="reveal-up delay-200 flex flex-col items-center">
<div className="text-7xl font-light tracking-tighter mb-6 text-zinc-200">
              2
            </div>
<div className="flex text-4xl text-[#00A3E0] bg-[#00A3E0]/10 w-20 h-20 rounded-3xl mb-8 items-center justify-center">
<iconify-icon icon="solar:scanner-linear"></iconify-icon>
</div>
<p className="text-2xl font-normal tracking-tight leading-tight text-zinc-900">
              Vous scannez à chaque passage
            </p>
</div>
<div className="reveal-up delay-300 flex flex-col items-center">
<div className="text-7xl font-light tracking-tighter mb-6 text-zinc-200">
              3
            </div>
<div className="flex text-4xl text-[#00A3E0] bg-[#00A3E0]/10 w-20 h-20 rounded-3xl mb-8 items-center justify-center">
<iconify-icon icon="solar:gift-linear"></iconify-icon>
</div>
<p className="text-2xl font-normal tracking-tight leading-tight text-zinc-900">
              Il gagne des récompenses et revient
            </p>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950 relative overflow-hidden" id="cards">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#00A3E0]/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto relative">
<div className="text-center mb-20 reveal-up">
<div className="text-[#00A3E0] font-normal text-lg tracking-widest uppercase mb-4">
              Programmes
            </div>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-normal text-white tracking-tight mb-6">
              À chaque métier son lien de proximité.
            </h2>
<p className="md:text-2xl text-xl font-light text-zinc-400 max-w-3xl mr-auto ml-auto">
              Avec Voisin, vous avez accès à une variété de programmes de
              fidélité pour engager et récompenser vos clients simplement et
              efficacement.
            </p>
<div className="flex gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex bg-neutral-50 border-zinc-800 border rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-white text-xl" icon="solar:apple-linear"></iconify-icon>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="apple" height="20" strokeWidth="2" style={{color: 'rgb(24, 24, 27)', width: '20px', height: '20px'}} viewbox="0 0 256 315" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"></path>
</svg>
<span className="uppercase text-xs font-normal text-slate-950 tracking-wider">
                  Apple Wallet
                </span>
</div>
<div className="flex gap-2 bg-gray-50 border-zinc-800 border rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 48 48">
<path className="" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335"></path>
<path className="" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" fill="#4285F4"></path>
<path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" fill="#FBBC05"></path>
<path className="" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853"></path>
</svg>
<span className="uppercase text-xs font-normal text-slate-950 tracking-wider">
                  Google Wallet
                </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="reveal-up delay-100 flex flex-col hover:border-zinc-700 transition-colors bg-zinc-900 border-zinc-800 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8">
<div className="text-[#00A3E0] text-sm font-normal tracking-widest uppercase mb-3">
                Fidélité
              </div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
                Rewards
              </h3>
<p className="flex-1 leading-relaxed text-lg font-light text-zinc-400 mb-10">
                L'indémodable. Récompensez la répétition.
              </p>
<div className="bg-black rounded-3xl p-5 border border-zinc-800 mt-auto flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-normal tracking-widest text-zinc-300">
                    VOISIN.
                  </span>
<span className="text-xs text-zinc-600">RÉCOMPENSE</span>
</div>
<div className="grid grid-cols-4 gap-2 mb-8">
<div className="bg-zinc-800 rounded-md aspect-square flex items-center justify-center text-[#00A3E0]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="bg-zinc-800 rounded-md aspect-square flex items-center justify-center text-[#00A3E0]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square"></div>
<div className="bg-zinc-900 border border-zinc-800 rounded-md aspect-square flex items-center justify-center">
<iconify-icon className="text-base text-zinc-700" icon="solar:gift-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-4 mb-4">
<div className="">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Objectif
                    </div>
<div className="text-sm text-white">8 tampons</div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Client
                    </div>
<div className="text-sm text-white">Mike</div>
</div>
</div>
<div className="bg-white rounded-lg h-14 w-full flex items-center justify-center p-2">
<iconify-icon className="text-black w-full h-full" height="50" icon="lucide:barcode" style={{color: 'rgb(0, 0, 0)'}} width="326"></iconify-icon>
</div>
</div>
</div>
<div className="reveal-up delay-200 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="text-[#00A3E0] text-sm font-normal tracking-widest uppercase mb-3">
                Valeur
              </div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
                Montant Fixe
              </h3>
<p className="flex-1 leading-relaxed text-lg font-light text-zinc-400 mb-10">
                Le portefeuille digital. Incitez à la dépense.
              </p>
<div className="bg-black rounded-3xl p-5 border border-zinc-800 mt-auto flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-normal tracking-widest text-zinc-300">
                    VOISIN.
                  </span>
<span className="text-xs text-zinc-600">CAGNOTTE</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                    Solde disponible
                  </div>
<div className="text-5xl font-normal text-white">
                    15,00
                    <span className="text-2xl text-zinc-500 ml-1">€</span>
</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-4 mb-4 mt-auto">
<div className="">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Avantage
                    </div>
<div className="text-sm text-white">Montant fixe</div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Client
                    </div>
<div className="text-sm text-white">Sophie</div>
</div>
</div>
<div className="flex bg-white w-full h-14 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-center">
<iconify-icon className="text-black w-full h-full" height="50" icon="lucide:barcode" style={{color: 'rgb(0, 0, 0)'}} width="326"></iconify-icon>
</div>
</div>
</div>
<div className="reveal-up delay-300 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="text-[#00A3E0] text-sm font-normal tracking-widest uppercase mb-3">
                Privilège
              </div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
                Discount
              </h3>
<p className="flex-1 leading-relaxed text-lg font-light text-zinc-400 mb-10">
                Appliquez une réduction en pourcentage sur l'ensemble de la
                commande pour vos clients fidèles.
              </p>
<div className="bg-black rounded-3xl p-5 border border-zinc-800 mt-auto flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-normal tracking-widest text-zinc-300">
                    VOISIN.
                  </span>
<span className="text-xs text-zinc-600">RÉDUCTION</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<div className="w-16 h-16 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-[#00A3E0]" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div className="text-4xl font-normal text-white">- 20%</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-4 mb-4 mt-auto">
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Status
                    </div>
<div className="text-sm text-[#00A3E0]">Actif</div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Client
                    </div>
<div className="text-sm text-white">Julie</div>
</div>
</div>
<div className="bg-white rounded-lg h-14 w-full flex items-center justify-center p-2">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="barcode" fill="none" height="50" icon="lucide:barcode" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="326" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5v14"></path>
<path d="M8 5v14"></path>
<path d="M12 5v14"></path>
<path d="M17 5v14"></path>
<path d="M21 5v14"></path>
</svg>
</div>
</div>
</div>
<div className="reveal-up delay-[400ms] bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 flex flex-col hover:border-zinc-700 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
<iconify-icon className="text-7xl text-[#00A3E0]" icon="solar:stars-linear"></iconify-icon>
</div>
<div className="text-[#00A3E0] text-sm font-normal tracking-widest uppercase mb-3 relative z-10">
                Sur-mesure
              </div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight relative z-10">
                Perso
              </h3>
<p className="flex-1 leading-relaxed text-lg font-light text-zinc-400 z-10 mb-10 relative">
                Créez vos propres règles. Voisin s'adapte à l'ADN de votre
                établissement.
              </p>
<div className="bg-black rounded-3xl p-5 border border-zinc-800 mt-auto flex flex-col relative z-10">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-normal tracking-widest text-[#00A3E0]">
                    CLUB VOISIN
                  </span>
<span className="text-xs text-zinc-600">VIP PASS</span>
</div>
<div className="flex flex-col items-center justify-center py-6 mb-2">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A3E0] to-blue-600 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,163,224,0.4)]">
<iconify-icon className="text-3xl text-white" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="text-2xl font-normal text-white">Membre Gold</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-4 mb-4 mt-auto">
<div className="">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Valide jusqu'au
                    </div>
<div className="text-sm text-white">22.06.2024</div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                      Client
                    </div>
<div className="text-sm text-white">Thomas</div>
</div>
</div>
<div className="bg-white rounded-lg h-14 w-full flex items-center justify-center p-2">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="barcode" fill="none" height="50" icon="lucide:barcode" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="326" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5v14"></path>
<path d="M8 5v14"></path>
<path d="M12 5v14"></path>
<path d="M17 5v14"></path>
<path d="M21 5v14"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-b px-6 overflow-hidden bg-zinc-50 border-zinc-200">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="reveal-up">
<h2 className="md:text-5xl leading-tight text-4xl font-normal text-zinc-900 tracking-tight mb-6">
              Voyez vos clients actifs, vos VIP et ceux à relancer.
            </h2>
<p className="text-xl text-zinc-500 font-light mb-12">
              Pilotez votre fidélité depuis un tableau de bord clair et
              intuitif, pensé pour les commerçants.
            </p>
<ul className="space-y-6 mb-12">
<li className="flex items-center gap-5 text-xl font-light text-zinc-700">
<iconify-icon className="text-[#00A3E0] text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Plus de clients réguliers
              </li>
<li className="flex items-center gap-5 text-xl font-light text-zinc-700">
<iconify-icon className="text-[#00A3E0] text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Plus de visites
              </li>
<li className="flex items-center gap-5 text-xl font-light text-zinc-700">
<iconify-icon className="text-[#00A3E0] text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Plus de chiffre d’affaires
              </li>
<li className="flex items-center gap-5 text-xl font-light text-zinc-700">
<iconify-icon className="text-[#00A3E0] text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Suivi client en temps réel
              </li>
</ul>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] shadow-[#00A3E0]/20 text-xl font-normal text-white bg-[#00A3E0] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-md" href="#commencer">
                Découvrir
              </a>
</div>
</div>
<div className="reveal-up delay-200 relative mx-auto w-full max-w-lg">
<div className="absolute -inset-6 rounded-[2.5rem] transform -rotate-2 z-0 bg-[#00A3E0]/5 border border-[#00A3E0]/10"></div>
<div className="rounded-3xl border shadow-2xl relative z-10 overflow-hidden flex flex-col bg-white border-zinc-200">
<div className="px-6 py-5 border-b flex items-center justify-between border-zinc-100 bg-zinc-50/80">
<div className="font-normal text-xl tracking-tight text-zinc-900">
                  Clients
                </div>
<div className="text-sm border px-3 py-1.5 rounded-md text-zinc-500 font-normal bg-white border-zinc-200 shadow-sm flex items-center gap-2">
                  Ce mois
                  <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between items-center p-4 rounded-2xl border shadow-sm border-zinc-200 bg-white">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#00A3E0] flex items-center justify-center text-white shadow-inner">
<iconify-icon className="text-2xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                        Sophie M.
                      </div>
<div className="text-base text-zinc-500 font-light mt-0.5">
                        VIP • 45 visites
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                      8/8 pts
                    </div>
<div className="text-sm text-[#00A3E0] font-normal uppercase tracking-wider mt-1">
                      Cadeau dispo
                    </div>
</div>
</div>
<div className="flex justify-between items-center p-4 rounded-2xl border transition-colors border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border flex items-center justify-center bg-white border-zinc-200 text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                        Marc T.
                      </div>
<div className="text-base font-light mt-0.5 text-emerald-600">
                        Actif • Venu hier
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                      5/8 pts
                    </div>
</div>
</div>
<div className="flex justify-between items-center p-4 rounded-2xl border transition-colors opacity-70 border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border flex items-center justify-center bg-white border-zinc-200 text-zinc-400">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                        Julie D.
                      </div>
<div className="text-base text-amber-500 font-light mt-0.5">
                        À relancer • +30j
                      </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-normal tracking-tight text-zinc-900">
                      2/8 pts
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-950 border-zinc-800 border-t pt-32 pr-6 pb-32 pl-6 relative" id="push-notifications">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#00A3E0]/15 blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-up">
<div className="text-[#00A3E0] font-normal text-lg tracking-widest uppercase mb-4">
            Communication
          </div>
<h2 className="md:text-5xl lg:text-6xl text-4xl font-normal text-white tracking-tight mb-6">
            Reprenez la parole, au bon moment.
          </h2>
<p className="md:text-2xl leading-relaxed text-xl font-light text-zinc-400 max-w-3xl mr-auto ml-auto">
            Un client n'est pas venu depuis 3 semaines ? Voisin lui envoie un
            petit mot automatique. Un client passe à 100m de votre boutique ?
            Son téléphone s'éclaire. C'est ça, être un bon voisin.
          </p>
</div>

<div className="max-w-6xl mx-auto mt-24 relative z-10 reveal-up delay-100">
<div className="rounded-3xl border bg-[#0a0a0a] overflow-hidden shadow-2xl relative w-full lg:w-11/12 mx-auto border-zinc-800">
<div className="h-12 border-b flex items-center px-6 gap-2 border-zinc-800 bg-zinc-900">
<div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
<div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
<div className="w-3.5 h-3.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex flex-col md:flex-row h-auto md:h-[550px]">
<div className="md:w-20 md:border-b-0 md:border-r flex flex-row md:flex-col md:py-8 gap-8 text-zinc-500 bg-zinc-900/50 w-full border-zinc-800 border-b pt-4 pb-4 gap-x-8 gap-y-8 items-center justify-center">
<iconify-icon className="text-2xl transition-colors cursor-pointer hover:text-white" icon="solar:widget-linear"></iconify-icon>
<iconify-icon className="text-2xl transition-colors cursor-pointer hover:text-white" icon="solar:users-group-rounded-linear"></iconify-icon>
<iconify-icon className="text-2xl text-[#00A3E0] cursor-pointer" icon="solar:chat-round-line-linear"></iconify-icon>
<div className="-left-6 lg:-left-12 md:w-72 transform z-20 hidden sm:block bg-slate-900/90 w-64 border-slate-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute bottom-10 shadow-2xl backdrop-blur-xl translate-x-3 rotate-10">
<div className="flex mb-2 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00A3E0] to-[#008bc0] flex items-center justify-center text-base font-normal text-white">
                        V
                      </div>
<span className="text-xs font-normal uppercase tracking-wider text-slate-400">
                        Lien
                      </span>
</div>
<span className="text-xs text-slate-500 font-light">
                      il y a 2h
                    </span>
</div>
<div className="text-base font-normal text-white tracking-tight mb-1">
                    Vous nous manquez !
                  </div>
<div className="text-sm font-light leading-snug text-slate-400">
                    Réservez une table à tout moment en utilisant le lien sur
                    votre carte.
                  </div>
</div>
<iconify-icon className="text-2xl transition-colors cursor-pointer md:mt-auto hover:text-white" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex-1 p-8 md:p-12 flex flex-col relative overflow-hidden bg-zinc-50">
<div className="mb-10 relative z-10">
<h3 className="text-3xl font-normal tracking-tight text-zinc-900">
                    Envoyer une notification push
                  </h3>
<p className="text-lg text-zinc-500 font-light mt-2">
                    Ce message apparaîtra sur l'écran de verrouillage des
                    clients sélectionnés.
                  </p>
</div>
<div className="flex flex-col lg:flex-row gap-8 max-w-3xl relative z-10">
<div className="flex-1 space-y-8">
<div className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border rounded-xl p-4 text-lg font-normal flex justify-between items-center shadow-sm cursor-pointer tracking-tight bg-white border-zinc-200 text-zinc-900 transition-colors hover:border-[#00A3E0]/30">
                          Tous les clients
                          <iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="border rounded-xl p-4 text-lg font-light flex justify-between items-center cursor-not-allowed bg-zinc-50 border-zinc-200 text-zinc-400">
                          Segment sélectionné
                          <iconify-icon className="text-zinc-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="text-lg text-zinc-500 font-light flex items-center gap-2">
<iconify-icon className="text-xl text-[#00A3E0]" icon="solar:users-group-rounded-linear"></iconify-icon>
                        203 clients recevront ce message.
                      </div>
<div className="border rounded-xl p-5 shadow-sm h-36 relative focus-within:border-[#00A3E0] transition-colors bg-white border-zinc-200">
<div className="text-xl font-light outline-none w-full h-full resize-none text-zinc-900" contenteditable="true">
                          Nous avons de nouvelles viennoiseries ! 🥐 Venez les
                          goûter aujourd'hui !
                        </div>
<iconify-icon className="absolute bottom-4 right-4 cursor-pointer text-xl transition-colors text-zinc-400 hover:text-[#00A3E0]" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<button className="bg-[#00A3E0] text-xl font-normal py-4 px-10 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] shadow-sm text-white inline-flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
                        Envoyer la notification
                      </button>
</div>
</div>
</div>
<div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 w-[260px] h-[520px] rounded-[3rem] shadow-2xl border-[8px] overflow-hidden flex-col pointer-events-none bg-zinc-100 border-zinc-900">
<div className="absolute top-0 inset-x-0 h-6 rounded-b-2xl w-32 mx-auto z-20 bg-zinc-900"></div>
<div className="flex-1 relative flex items-center justify-center p-4 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>
<div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
<div className="w-full backdrop-blur-xl p-4 rounded-3xl shadow-lg border z-30 absolute top-24 bg-white/90 border-white/50">
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 rounded bg-[#00A3E0] flex items-center justify-center text-xs font-normal tracking-tight text-white">
                          V.
                        </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest flex-1">
                          Wallet
                        </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                          Maint.
                        </div>
</div>
<div className="text-base font-normal mb-1 tracking-tight text-zinc-900">
                        Le Café Central
                      </div>
<div className="text-sm font-light leading-snug text-zinc-700">
                        Nous avons de nouvelles viennoiseries ! 🥐 Venez les
                        goûter aujourd'hui !
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="-top-10 -left-6 lg:-left-24 md:w-80 transform hidden md:block bg-zinc-900/95 w-72 z-20 border-zinc-800 border rounded-3xl pt-5 pr-5 pb-5 pl-5 absolute shadow-2xl backdrop-blur-xl translate-x-16 -rotate-3" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="flex mb-3 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00A3E0] to-[#008bc0] flex items-center justify-center text-lg font-normal text-white">
                  V
                </div>
<span className="text-xs font-normal uppercase tracking-widest text-zinc-400">
                  Wallet
                </span>
</div>
<span className="text-xs font-light text-zinc-500">il y a 3m</span>
</div>
<div className="text-lg font-normal tracking-tight mb-1 text-white">
              Vous avez gagné 62 points
            </div>
<div className="text-base font-light leading-snug text-zinc-400">
              Merci de votre visite ! À très bientôt.
            </div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-40 relative z-10 reveal-up delay-200">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-800 rounded-tl-3xl">
<div className="p-10 border-b border-r transition-colors flex flex-col justify-start border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50">
<div className="text-[#00A3E0] mb-6 bg-[#00A3E0]/10 w-14 h-14 flex items-center justify-center rounded-2xl">
<iconify-icon className="text-3xl" height="30" icon="solar:bill-list-linear" style={{color: 'rgb(0, 163, 224)'}} width="30"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Transaction
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Envoyées à l'encaissement pour montrer la progression de
                fidélité.
              </p>
</div>
<div className="transition-colors flex flex-col hover:bg-zinc-800/50 bg-zinc-900/30 border-zinc-800 border-r border-b pt-10 pr-10 pb-10 pl-10 justify-start">
<div className="flex text-[#00A3E0] bg-[#00A3E0]/10 w-14 h-14 rounded-2xl mb-6 items-center justify-center">
<iconify-icon className="text-3xl" icon="solar:megaphone-linear"></iconify-icon>
<iconify-icon className="text-3xl" height="30" icon="solar:course-up-outline" style={{color: 'rgb(0, 163, 224)'}} width="30"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Marketing
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Diffusez manuellement vos offres exclusives et nouveautés.
              </p>
</div>
<div className="p-10 border-b border-r transition-colors flex flex-col justify-start border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50">
<div className="text-[#00A3E0] mb-6 bg-[#00A3E0]/10 w-14 h-14 flex items-center justify-center rounded-2xl">
<iconify-icon className="text-3xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Géolocalisation
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Déclenchées automatiquement lorsque le client est à proximité.
              </p>
</div>
<div className="p-10 border-b border-r transition-colors flex flex-col justify-start border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50">
<div className="text-[#00A3E0] mb-6 bg-[#00A3E0]/10 w-14 h-14 flex items-center justify-center rounded-2xl">
<iconify-icon className="text-3xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Contrôle qualité
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Demandez des avis ou retours juste après le passage du client.
              </p>
</div>
<div className="p-10 border-b border-r transition-colors flex flex-col justify-start border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50">
<div className="text-[#00A3E0] mb-6 bg-[#00A3E0]/10 w-14 h-14 flex items-center justify-center rounded-2xl">
<iconify-icon className="text-3xl" icon="solar:bell-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Rappels
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Relancez les clients inactifs des semaines après leur visite.
              </p>
</div>
<div className="p-10 border-b border-r transition-colors flex flex-col justify-start border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 rounded-br-3xl">
<div className="text-[#00A3E0] mb-6 bg-[#00A3E0]/10 w-14 h-14 flex items-center justify-center rounded-2xl">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-3">
                Sur-mesure
              </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                Des messages entièrement personnalisables, sans aucune limite.
              </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-950 border-zinc-800 border-t pt-32 pr-6 pb-32 pl-6 relative" id="plans">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-24 reveal-up">
<div className="text-[#00A3E0] font-normal text-lg tracking-widest uppercase mb-4">
              Abonnements
            </div>
<h2 className="md:text-5xl text-4xl font-normal text-white tracking-tight mb-6">
              Investissez dans votre croissance. À partir de 79€/mois.
            </h2>
<p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-zinc-400">
              Évoluez à tout moment. Sans engagement. Sans surprise.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
<div className="reveal-up delay-100 border rounded-[2.5rem] p-10 flex flex-col relative group transition-colors bg-zinc-900 border-zinc-800 hover:border-zinc-700">
<div className="mb-8 border-b pb-8 border-zinc-800">
<h3 className="text-3xl font-normal tracking-tight mb-4 text-white">
                  Starter
                </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                  Pour les commerces indépendants qui veulent lancer leur
                  fidélité sans friction
                </p>
</div>
<ul className="space-y-5 flex-1 mb-10">
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">1 établissement (jusqu'à 3 accès)</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">1 programme de fidélité actif</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Cartes Apple &amp; Google Wallet natives</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Base clients centralisée (emails)</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Page client dédiée</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Relances automatiques</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Statistiques essentielles</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Support standard</span>
</li>
</ul>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-zinc-700 text-xl font-normal text-white bg-[#00A3E0] w-full rounded-full pt-4 pb-4" href="#commencer">
                Découvrir
              </a>
</div>
<div className="reveal-up delay-200 border border-[#00A3E0]/50 rounded-[2.5rem] p-10 flex flex-col relative transform lg:-translate-y-6 shadow-[0_0_50px_-15px_rgba(0,163,224,0.4)] overflow-hidden bg-zinc-900">
<div className="absolute top-0 inset-x-0 flex justify-center">
<div className="bg-[#00A3E0] text-sm font-normal tracking-widest uppercase px-6 py-1.5 rounded-b-xl flex items-center gap-2 shadow-sm text-white">
<iconify-icon className="text-base" icon="solar:star-linear"></iconify-icon>
                  Le plus populaire
                </div>
</div>
<div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#00A3E0]/10 to-transparent pointer-events-none"></div>
<div className="mb-8 border-b pb-8 mt-6 relative z-10 border-zinc-800">
<h3 className="text-3xl font-normal tracking-tight mb-4 text-white">
                  Pro
                </h3>
<p className="text-lg font-light leading-relaxed text-zinc-400">
                  Pour les commerces qui veulent piloter leur fidélité et
                  activer leur base
                </p>
</div>
<ul className="space-y-5 flex-1 mb-10 relative z-10">
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">1 établissement (jusqu'à 10 accès)</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Jusqu'à 3 programmes de fidélité actifs</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                    Cartes Wallet et page client personnalisées
                  </span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                    Base clients et segmentation intelligente
                  </span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                    Relances auto &amp; Notifications push illimitées
                  </span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Voisin IA pour vos campagnes</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Statistiques et analyses avancées</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-200">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Support prioritaire</span>
</li>
</ul>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] shadow-[#00A3E0]/20 text-xl font-normal text-white bg-[#00A3E0] w-full z-10 rounded-full pt-4 pb-4 relative shadow-lg" href="#commencer">
                Découvrir
              </a>
</div>
<div className="reveal-up delay-300 border rounded-[2.5rem] p-10 flex flex-col relative group transition-colors bg-zinc-900 border-zinc-800 hover:border-zinc-700">
<div className="mb-8 border-b pb-8 border-zinc-800">
<h3 className="text-3xl font-normal tracking-tight mb-4 text-white">
                  Multi-site
                </h3>
<p className="leading-relaxed text-lg font-light text-zinc-400">
                  Pour les réseaux et franchises qui voient grand
                </p>
</div>
<ul className="space-y-5 flex-1 mb-10">
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Jusqu'à 3 établissements inclus</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Managers multiples (jusqu'à 25 accès)</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Programmes de fidélité illimités</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Campagnes et notifications multi-sites</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Gestion avancée des équipes et droits</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Tableau de bord consolidé inter-sites</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Accompagnement expert au déploiement</span>
</li>
<li className="flex items-start gap-4 text-lg font-normal text-zinc-300">
<iconify-icon className="text-[#00A3E0] shrink-0 mt-0.5 text-xl" icon="solar:check-read-linear"></iconify-icon>
<span className="">Support Premium 7j/7</span>
</li>
</ul>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-zinc-700 text-xl font-normal text-white bg-[#00A3E0] w-full rounded-full mt-auto pt-4 pb-4" href="#commencer">
                Découvrir
              </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-zinc-50 border-t border-zinc-200">
<div className="max-w-4xl mx-auto reveal-up">
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-3xl md:text-4xl font-normal tracking-tight mb-16 text-zinc-900">
<div className="">Aucune installation.</div>
<div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></div>
<div className="">Aucun matériel.</div>
<div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#00A3E0]"></div>
<div className="">Prêt en quelques minutes.</div>
</div>
<div className="inline-flex items-center justify-center gap-4 text-xl font-light text-zinc-600 border px-8 py-4 rounded-full mb-12 bg-white border-zinc-200 shadow-sm">
<iconify-icon className="text-3xl text-[#00A3E0]" icon="solar:shield-check-linear"></iconify-icon>
            Déjà utilisé en conditions réelles par les commerçants de votre
            quartier.
          </div>
<div className="">
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xl font-normal border rounded-full py-4 px-10 shadow-sm hover:bg-white text-zinc-900 bg-zinc-100 border-zinc-200" href="#commencer">
              Je découvre
            </a>
</div>
</div>
</section>

<section className="max-w-4xl border-zinc-200 border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="text-center mb-20 reveal-up">
<h2 className="md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight">
            FAQ
          </h2>
<p className="mt-6 text-xl font-light text-zinc-500">
            Tout ce que vous devez savoir sur Voisin.
          </p>
</div>
<div className="divide-y border-y divide-zinc-200 border-zinc-200 reveal-up delay-100">
<details className="group py-8" open="">
<summary className="flex justify-between items-center font-normal tracking-tight cursor-pointer list-none text-2xl md:text-3xl text-zinc-900">
<span className="">
                Mes clients doivent-ils télécharger une application ?
              </span>
<span className="transition group-open:rotate-180 text-[#00A3E0]">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 mt-6 leading-relaxed font-light text-xl">
              Non, vos clients n'ont rien à télécharger. En scannant votre QR
              code, la carte s'ajoute directement dans Apple Wallet ou Google
              Wallet, des applications déjà pré-installées nativement sur leurs
              téléphones.
            </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center font-normal tracking-tight cursor-pointer list-none text-2xl md:text-3xl text-zinc-900">
<span className="">
                Comment sont envoyées les notifications push ?
              </span>
<span className="transition group-open:rotate-180 text-[#00A3E0]">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 mt-6 leading-relaxed font-light text-xl">
              Les notifications push passent directement par le système d'Apple
              Wallet et Google Wallet. Vous pouvez les déclencher depuis votre
              tableau de bord Voisin. pour informer vos clients de leur solde de
              points ou d'une offre spéciale.
            </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center font-normal tracking-tight cursor-pointer list-none text-2xl md:text-3xl text-zinc-900">
<span className="">
                Puis-je personnaliser le design de la carte ?
              </span>
<span className="transition group-open:rotate-180 text-[#00A3E0]">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 mt-6 leading-relaxed font-light text-xl">
              Absolument. Vous pouvez personnaliser les couleurs de fond,
              ajouter votre logo officiel, et modifier les textes de votre carte
              de fidélité pour qu'elle reflète parfaitement l'identité de votre
              commerce.
            </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center font-normal tracking-tight cursor-pointer list-none text-2xl md:text-3xl text-zinc-900">
<span className="">Est-ce compliqué à mettre en place ?</span>
<span className="transition group-open:rotate-180 text-[#00A3E0]">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 mt-6 leading-relaxed font-light text-xl">
              Non. La solution est pensée pour être déployée rapidement, sans
              application client et sans empiler plusieurs logiciels.
            </div>
</details>
<details className="group py-8">
<summary className="flex justify-between items-center font-normal tracking-tight cursor-pointer list-none text-2xl md:text-3xl text-zinc-900">
<span className="">Existe-t-il une offre gratuite ?</span>
<span className="transition group-open:rotate-180 text-[#00A3E0]">
<iconify-icon className="text-3xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-zinc-500 mt-6 leading-relaxed font-light text-xl">
              Non, cependant notre modèle est basé sur les résultats. Votre
              abonnement est garanti : il est remboursé si vous n'obtenez pas de
              résultats concrets sur la fidélisation de vos clients.
            </div>
</details>
</div>
<div className="text-center mt-16 reveal-up delay-200">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xl font-normal border rounded-full py-4 px-10 shadow-sm text-zinc-900 bg-white border-zinc-200 hover:bg-zinc-50" href="#commencer">
            Une autre question ? Discutons-en
          </a>
</div>
</section>

<section className="py-32 lg:py-40 px-6 bg-white border-t border-zinc-200" id="commencer">
<div className="max-w-5xl mx-auto reveal-up">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

<div className="bg-zinc-50 border border-zinc-200/60 rounded-[2.5rem] p-10 lg:p-14 flex flex-col transition-colors hover:bg-zinc-100/50">
<h3 className="text-3xl font-normal text-zinc-900 tracking-tight mb-5">
                Besoin d'échanger ?
              </h3>
<p className="flex-1 leading-relaxed text-xl font-light text-zinc-500 mb-14">
                Réservez un créneau pour poser vos questions et découvrir
                l'outil avec nous.
              </p>
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-zinc-50 hover:border-zinc-400 text-xl font-normal text-zinc-900 bg-white w-full border-zinc-300 border rounded-full pt-5 pr-8 pb-5 pl-8 shadow-sm" href="https://calendly.com/voisinya/new-meeting">
                Découvrez
              </a>
</div>

<div className="bg-white border shadow-xl shadow-zinc-200/30 border-zinc-200 rounded-[2.5rem] p-10 lg:p-14 flex flex-col relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00A3E0] to-[#008bc0]"></div>
<h3 className="text-3xl font-normal text-zinc-900 tracking-tight mb-5">
                Prêt à commencer ?
              </h3>
<p className="text-xl font-light text-zinc-500 mb-14 flex-1 leading-relaxed">
                Vous êtes convaincu ? Passez directement au paiement pour
                activer votre programme de fidélité dès aujourd'hui.
              </p>
<div className="flex flex-col gap-5 mt-auto">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:bg-[#008bc0] shadow-[#00A3E0]/20 text-xl font-normal text-white bg-[#00A3E0] w-full rounded-full pt-5 pr-8 pb-5 pl-8 shadow-lg" href="/tarifs" rel="noopener noreferrer" target="_blank">
                  Lancer mon Voisin. maintenant
                </a>
<p className="text-sm font-light text-zinc-400 text-center flex items-center justify-center gap-2">
<iconify-icon className="text-base text-zinc-300" icon="solar:shield-check-linear"></iconify-icon>
                  Garantie de résultat : satisfait ou remboursé
                </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 border-t border-zinc-200 bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center reveal-up">
<img alt="Voisin Logo" className="bg-center opacity-40 w-auto h-16 object-cover mb-6 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/979e5c6e-5f51-4d18-a17d-a7a196a24a8b_320w.png"/>
<div className="text-base font-light text-zinc-400">
          © Voisin. Tous droits réservés.
        </div>
</div>
</footer>


    </>
  );
}
