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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mobileNav');
    btn?.addEventListener('click', () => nav.classList.toggle('hidden'));
    document.getElementById('year').textContent = new Date().getFullYear();

    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      document.querySelectorAll('svg.lucide').forEach((svg) => {
        svg.setAttribute('stroke-width', '1.5');
        svg.setAttribute('width', '18');
        svg.setAttribute('height', '18');
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute inset-0" style={{background: '#F7F9FC'}}></div>
<div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F7F9FC] via-[#F7F9FC]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F7F9FC] via-[#F7F9FC]/80 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<header className="pt-6">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.05)'}}>
<span className="text-sm font-semibold tracking-tight text-neutral-900">N</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold text-neutral-900">Novadata</span>
<span className="text-xs text-neutral-600">Télématique souveraine</span>
</div>
</div>
<nav className="hidden items-center gap-2 rounded-full bg-white px-2 py-2 ring-1 backdrop-blur md:flex" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
<a className="rounded-full px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="#">Accueil</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50" href="#">Solutions</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50" href="#">Secteurs</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50" href="#">Produits</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50" href="#">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 md:inline-flex" href="#">Espace client</a>
<a className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white ring-1 ring-neutral-900/10 hover:bg-neutral-800" href="#" style={{boxShadow: 'none'}}>
            Nous contacter
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 backdrop-blur hover:bg-neutral-50" id="menuBtn" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.05)'}}>
<i className="text-neutral-700" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="mt-3 hidden rounded-2xl bg-white p-2 ring-1 backdrop-blur md:hidden" id="mobileNav" style={{borderColor: '#E6EAF0', boxShadow: '0 8px 24px rgba(16,24,40,0.06)'}}>
<div className="grid gap-1">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="#">Accueil</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#">Solutions</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#">Secteurs</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#">Produits</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#">Contact</a>
<div className="my-1 h-px" style={{background: '#E6EAF0'}}></div>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900" href="#">Espace client</a>
<a className="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-neutral-900 ring-1 ring-neutral-900/10 hover:bg-neutral-800" href="#">Nous contacter</a>
</div>
</div>
</header>

<main className="pb-16 pt-10 sm:pt-14">
<div className="mx-auto max-w-4xl text-center">
<h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
          Télématique souveraine
        </h1>
<p className="mt-5 text-lg text-neutral-600" style={{maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto'}}>
          Votre flotte • Vos données • Vos applications
        </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
<a className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900/10 hover:bg-neutral-800 sm:w-auto" href="#" style={{boxShadow: 'none'}}>
<i className="text-white/95" data-lucide="message-circle"></i>
            Nous contacter
            <i className="text-white/90 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-800 ring-1 backdrop-blur hover:bg-neutral-50 sm:w-auto" href="#" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.05)'}}>
<i className="text-neutral-700" data-lucide="compass"></i>
            Découvrir nos solutions
          </a>
</div>
<div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-600 sm:text-sm">
<div className="inline-flex items-center gap-2">
<i className="text-neutral-700" data-lucide="shield-check"></i>
            Souveraineté des données
          </div>
<div className="inline-flex items-center gap-2">
<i className="text-neutral-700" data-lucide="zap"></i>
            Déploiement maîtrisé
          </div>
<div className="inline-flex items-center gap-2">
<i className="text-neutral-700" data-lucide="sparkles"></i>
            Applications métier sur mesure
          </div>
</div>
</div>

<section className="relative mx-auto mt-12 max-w-5xl">
<div className="rounded-3xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 12px 32px rgba(16,24,40,0.06)'}}>
<div className="px-6 py-10 sm:px-8 sm:py-12">
<div className="flex flex-col gap-3 text-center">
<div className="text-xs font-semibold tracking-tight text-neutral-700">ENVIRONNEMENTS OPÉRATIONNELS</div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Une supervision fiable, sur le terrain comme au centre de contrôle
              </h2>
<p className="text-base text-neutral-600" style={{maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto'}}>
                Des interfaces et flux IoT conçus pour l’exploitation industrielle, la continuité de service et la traçabilité.
              </p>
</div>

<div className="relative mt-10 hidden lg:block">
<div className="relative mx-auto" style={{maxWidth: '58rem'}}>
<div className="pointer-events-none absolute inset-x-0 -top-6 h-px" style={{background: '#E6EAF0'}}></div>
<div className="relative flex items-end justify-center gap-4">
<div className="relative w-56 overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16, 24, 40, 0.06)', transform: 'translateY(0rem)', zIndex: '4'}}>
<div className="aspect-[3/4] w-full">
<img alt="Suivi des véhicules" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="map-pin"></i>
                        Suivi des véhicules
                      </div>
</div>
</div>
<div className="relative -ml-6 w-56 overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 14px 34px rgba(16, 24, 40, 0.08)', transform: 'translateY(-0.75rem)', zIndex: '5'}}>
<div className="aspect-[3/4] w-full">
<img alt="IoT industriel" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="cpu"></i>
                        IoT industriel
                      </div>
</div>
</div>
<div className="relative -ml-6 w-56 overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16, 24, 40, 0.06)', transform: 'translateY(-0.25rem)', zIndex: '3'}}>
<div className="aspect-[3/4] w-full">
<img alt="Ville intelligente" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="building-2"></i>
                        Ville intelligente
                      </div>
</div>
</div>
<div className="relative -ml-6 w-56 overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16, 24, 40, 0.06)', transform: 'translateY(0.5rem)', zIndex: '2'}}>
<div className="aspect-[3/4] w-full">
<img alt="IoT maritime" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="ship"></i>
                        IoT maritime
                      </div>
</div>
</div>
</div>
<div className="mt-6 text-center text-xs text-neutral-500 sm:text-sm">
                  Interfaces de supervision, alerting et traçabilité adaptées aux contraintes industrielles.
                </div>
</div>
</div>

<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
<div className="relative overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="aspect-[16/10] w-full">
<img alt="Suivi des véhicules" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="map-pin"></i>
                    Suivi des véhicules
                  </div>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="aspect-[16/10] w-full">
<img alt="IoT industriel" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="cpu"></i>
                    IoT industriel
                  </div>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="aspect-[16/10] w-full">
<img alt="Ville intelligente" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="building-2"></i>
                    Ville intelligente
                  </div>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="aspect-[16/10] w-full">
<img alt="IoT maritime" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="absolute inset-x-0 bottom-0 p-3">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
<i className="text-white/90" data-lucide="ship"></i>
                    IoT maritime
                  </div>
</div>
</div>
<div className="sm:col-span-2 text-center text-xs text-neutral-500 sm:text-sm">
                Interfaces de supervision, alerting et traçabilité adaptées aux contraintes industrielles.
              </div>
</div>
</div>
</div>
</section>

<div className="relative mx-auto mt-10 max-w-5xl">
<div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="map-pin"></i>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-neutral-900">Nos domaines d’expertise :</div>
<div className="text-sm text-neutral-600">Géolocalisation de véhicules</div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-700 ring-1" style={{borderColor: '#E6EAF0'}}>
                IoT
              </span>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="cpu"></i>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-neutral-900"> </div>
<div className="text-sm text-neutral-600">IoT industriel</div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-700 ring-1" style={{borderColor: '#E6EAF0'}}>
                Edge
              </span>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="building-2"></i>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-neutral-900"> </div>
<div className="text-sm text-neutral-600">Villes et bâtiments intelligents</div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-700 ring-1" style={{borderColor: '#E6EAF0'}}>
                Smart
              </span>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.06)'}}>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="ship"></i>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-neutral-900"> </div>
<div className="text-sm text-neutral-600">IoT maritime</div>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-700 ring-1" style={{borderColor: '#E6EAF0'}}>
                Marine
              </span>
</div>
</div>
</div>

<section className="mx-auto mt-10 max-w-4xl">
<div className="grid gap-4 rounded-3xl bg-white p-6 ring-1 backdrop-blur sm:p-7 lg:grid-cols-3" style={{borderColor: '#E6EAF0', boxShadow: '0 12px 32px rgba(16,24,40,0.06)'}}>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="shield-alert"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Gestion des risques</div>
<div className="mt-1 text-sm text-neutral-600">Anticipez, détectez et réduisez l’exposition.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="bus"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Efficacité &amp; Gestion de flotte</div>
<div className="mt-1 text-sm text-neutral-600">Optimisez l’exploitation et les coûts au quotidien.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="key-round"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Sécurité &amp; Pilotage des actifs</div>
<div className="mt-1 text-sm text-neutral-600">Protégez et pilotez vos actifs avec précision.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="clipboard-check"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Conformité</div>
<div className="mt-1 text-sm text-neutral-600">Simplifiez vos obligations et vos audits.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="leaf"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Durabilité</div>
<div className="mt-1 text-sm text-neutral-600">Mesurez, réduisez et valorisez votre impact.</div>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="server"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Connectivité &amp; infrastructure réseau industriel</div>
<div className="mt-1 text-sm text-neutral-600">Connectez et sécurisez l’ensemble de vos environnements.</div>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-14 max-w-5xl">
<div className="rounded-3xl bg-white p-6 ring-1 sm:p-8" style={{borderColor: '#E6EAF0', boxShadow: '0 14px 36px rgba(16,24,40,0.06)'}}>
<div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
<div className="min-w-0">
<div className="text-xs font-semibold tracking-tight text-neutral-700">TECHNOLOGIE</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl" style={{maxWidth: '30rem'}}>
                  L’intelligence au cœur de vos opérations
                </h2>
<p className="mt-3 text-lg font-medium text-neutral-700" style={{maxWidth: '32rem'}}>
                  Opérations simplifiées. Sécurité renforcée.
                </p>
<p className="mt-4 text-base text-neutral-600" style={{maxWidth: '34rem'}}>
                  Des systèmes IoT souverains conçus pour s’intégrer parfaitement à votre infrastructure et optimiser vos performances opérationnelles.
                </p>
<div className="mt-6 grid gap-3" style={{maxWidth: '34rem'}}>
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="server"></i>
</div>
<div className="text-base font-medium text-neutral-800">Données hébergées sur vos serveurs</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="link"></i>
</div>
<div className="text-base font-medium text-neutral-800">Intégration native à vos systèmes existants</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="trending-up"></i>
</div>
<div className="text-base font-medium text-neutral-800">Supervision centralisée et évolutive</div>
</div>
</div>
<div className="mt-7">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 ring-1 hover:bg-neutral-50" href="#" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.05)'}}>
                    Explorer notre architecture
                    <i className="text-neutral-700" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="min-w-0">
<div className="rounded-2xl bg-white p-5 ring-1 sm:p-6" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-center justify-between gap-4">
<div className="text-sm font-semibold text-neutral-900">Architecture stack</div>
<div className="text-xs font-medium text-neutral-600">Vue logique</div>
</div>
<div className="mt-5 grid gap-3">
<div className="rounded-xl bg-white p-4 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="layout-grid"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-neutral-900">Applications métier</div>
<div className="mt-1 text-xs text-neutral-600">Processus, reporting, workflows</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-4 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="cpu"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-neutral-900">Supervision &amp; IA</div>
<div className="mt-1 text-xs text-neutral-600">Corrélation, alerting, optimisation</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-4 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="router"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-neutral-900">Connectivité &amp; Edge</div>
<div className="mt-1 text-xs text-neutral-600">Réseaux, passerelles, latence maîtrisée</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-4 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-lg bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="radar"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-neutral-900">Matériel &amp; capteurs</div>
<div className="mt-1 text-xs text-neutral-600">Acquisition terrain, robustesse, continuité</div>
</div>
</div>
</div>
</div>
<div className="mt-5 rounded-xl bg-neutral-50 p-4 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
<i className="text-neutral-700" data-lucide="shield-check"></i>
                      Souveraineté &amp; contrôle
                    </div>
<div className="mt-1 text-xs text-neutral-600">
                      Couches modulaires déployables dans votre infrastructure, avec séparation claire des responsabilités.
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-14 max-w-5xl">
<div className="rounded-3xl bg-white ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 12px 32px rgba(16,24,40,0.06)'}}>
<div className="px-6 py-14 sm:px-8 sm:py-18">
<div className="mx-auto text-center" style={{maxWidth: '44rem'}}>
<div className="text-xs font-semibold tracking-wider text-neutral-600">SECTEURS D’ACTIVITÉ</div>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Votre entreprise se transforme grâce à des solutions adaptées.
                </h3>
<p className="mt-4 text-base text-neutral-600" style={{maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto'}}>
                  Optimisation des coûts, visibilité totale, décisions fondées sur les données – pilotez votre flotte avec l'excellence du marché.
                </p>
</div>
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="w-full overflow-hidden rounded-t-2xl">
<div className="aspect-[16/10] w-full">
<img alt="Transport &amp; Logistique" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="text-base font-semibold text-neutral-900">Transport &amp; Logistique</div>
<ul className="mt-4 space-y-2 text-base text-neutral-700">
<li>• Mobilité partagée &amp; Location</li>
<li>• Transport de passagers</li>
</ul>
<div className="mt-auto"></div>
</div>
</div>
<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="w-full overflow-hidden rounded-t-2xl">
<div className="aspect-[16/10] w-full">
<img alt="Industrial / infrastructure / teams" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="text-base font-semibold text-neutral-900">Connecter vos équipes, vos systèmes et vos données</div>
<ul className="mt-4 space-y-2 text-base text-neutral-700">
<li>• Construction</li>
<li>• Services de terrain</li>
<li>• Services d'infrastructure - Utilities</li>
<li>• Services publics</li>
</ul>
<div className="mt-auto"></div>
</div>
</div>
<div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="w-full overflow-hidden rounded-t-2xl">
<div className="aspect-[16/10] w-full">
<img alt="Internet des Objets (IoT)" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="flex flex-1 flex-col p-6">
<div className="text-base font-semibold text-neutral-900">Internet des Objets (IoT)</div>
<ul className="mt-4 space-y-2 text-base text-neutral-700">
<li>• Villes &amp; Territoires connectés</li>
<li>• Bâtiments intelligents</li>
<li>• Industrie intelligente</li>
<li>• IoT maritime</li>
</ul>
<div className="mt-auto"></div>
</div>
</div>
</div>
<div className="mt-12"></div>
</div>
</div>
</section>

<section className="mx-auto mt-14 max-w-4xl">
<div className="rounded-3xl bg-white p-6 ring-1 backdrop-blur sm:p-7" style={{borderColor: '#E6EAF0', boxShadow: '0 12px 32px rgba(16,24,40,0.06)'}}>
<div className="flex flex-col gap-2 text-center">
<div className="text-xs font-semibold tracking-tight text-neutral-600">NOTRE MÉTHODOLOGIE</div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Une transition maîtrisée vers une télématique souveraine
              </div>
<div className="text-base text-neutral-600" style={{maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto'}}>
                Une démarche chronologique, orientée terrain, pour sécuriser l’intégration et garantir l’exploitation.
              </div>
</div>
<div className="relative mt-10 hidden lg:block">
<div className="mx-auto" style={{maxWidth: '56rem'}}>
<div className="absolute left-0 right-0 top-5 h-px" style={{background: '#E6EAF0'}}></div>
<div className="grid grid-cols-3 gap-4">
<div className="relative">
<div className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                      01
                    </div>
<div className="mt-4 rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Diagnostic précis et personnalisé</div>
<div className="mt-2 text-base text-neutral-600">
                        Analyse des besoins, audit technique et définition de l’architecture adaptée.
                      </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                        Cadrer les priorités et établir un socle technique fiable.
                      </div>
</div>
</div>
<div className="relative">
<div className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                      02
                    </div>
<div className="mt-4 rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Transition progressive et sécurisée</div>
<div className="mt-2 text-base text-neutral-600">
                        Déploiement maîtrisé, intégration progressive et réduction des risques.
                      </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                        Mettre en production sans rupture d’exploitation.
                      </div>
</div>
</div>
<div className="relative">
<div className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                      03
                    </div>
<div className="mt-4 rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Évolutivité continue</div>
<div className="mt-2 text-base text-neutral-600">
                        Optimisation continue, supervision centralisée et adaptation à long terme.
                      </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                        Accroître la valeur métier et maintenir la performance.
                      </div>
</div>
</div>
</div>
</div>
</div>
<div className="relative mt-8 lg:hidden">
<div className="absolute left-5 top-2 bottom-2 w-px" style={{background: '#E6EAF0'}}></div>
<div className="grid gap-4">
<div className="relative pl-12">
<div className="absolute left-0 top-3 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                    01
                  </div>
<div className="rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Diagnostic précis et personnalisé</div>
<div className="mt-2 text-base text-neutral-600">
                      Analyse des besoins, audit technique et définition de l’architecture adaptée.
                    </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                      Cadrer les priorités et établir un socle technique fiable.
                    </div>
</div>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-3 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                    02
                  </div>
<div className="rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Transition progressive et sécurisée</div>
<div className="mt-2 text-base text-neutral-600">
                      Déploiement maîtrisé, intégration progressive et réduction des risques.
                    </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                      Mettre en production sans rupture d’exploitation.
                    </div>
</div>
</div>
<div className="relative pl-12">
<div className="absolute left-0 top-3 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 text-xs font-semibold text-neutral-700" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)'}}>
                    03
                  </div>
<div className="rounded-2xl bg-white p-5 ring-1" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="text-sm font-semibold text-neutral-900">Évolutivité continue</div>
<div className="mt-2 text-base text-neutral-600">
                      Optimisation continue, supervision centralisée et adaptation à long terme.
                    </div>
<div className="mt-3 text-xs font-semibold tracking-tight text-neutral-700">Rôle</div>
<div className="mt-1 text-sm text-neutral-600">
                      Accroître la valeur métier et maintenir la performance.
                    </div>
</div>
</div>
</div>
</div>
<div className="mt-7 rounded-2xl bg-neutral-50 p-5 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-sm font-semibold text-neutral-900">Déploiement dans votre infrastructure</div>
<div className="text-xs font-semibold text-neutral-700">Données protégées</div>
</div>
<div className="mt-2 text-base text-neutral-600">
                Intégration progressive et supervision centralisée.
              </div>
</div>
</div>
</section>

<section className="mx-auto mt-14 max-w-4xl">
<div className="text-center">
<div className="text-xs font-semibold tracking-tight text-neutral-700">PRODUITS</div>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Matériel d’origine européenne</h2>
<p className="mt-3 text-base text-neutral-600" style={{maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto'}}>
              Hardware certifié, conçu pour durer dans les conditions les plus exigeantes, protection renforcée des données et architecture évolutive compatible avec toutes vos applications métier.
            </p>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Suivi GPS</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="bus"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Télématique de flotte</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="gauge"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Gestion du tachygraphe</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="users"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Gestion du personnel</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="package"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">IoT pour chantiers ou in-warehouse</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="camera"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Caméras &amp; télématique vidéo</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="layout-grid"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Applications &amp; plateformes sur mesure</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-4 ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 10px 26px rgba(16,24,40,0.05)'}}>
<div className="flex items-start gap-3">
<div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="server"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Infrastructure réseau industrielle sécurisée</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-14 max-w-6xl">
<div className="rounded-3xl bg-white ring-1 backdrop-blur" style={{borderColor: '#E6EAF0', boxShadow: '0 12px 32px rgba(16,24,40,0.06)'}}>
<div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">

<div className="min-w-0">
<div className="text-xs font-semibold tracking-tight text-neutral-600">DISCUTONS DE VOS OBJECTIFS</div>
<h3 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  Une question, un projet, une idée ? Parlons-en.
                </h3>
<p className="mt-5 text-lg text-neutral-600" style={{maxWidth: '34rem'}}>
                  Nous prenons le temps de comprendre vos besoins pour construire ensemble une stratégie qui vous ressemble. Parlons de vos projets et vos ambitions.
                </p>
<div className="mt-8 grid gap-4 text-sm sm:text-base">
<a className="group inline-flex items-center gap-3 text-neutral-800 hover:text-neutral-900" href="mailto:info@novadata.com">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="mail"></i>
</span>
<span className="font-medium">info@novadata.com</span>
</a>
<a className="group inline-flex items-center gap-3 text-neutral-800 hover:text-neutral-900" href="tel:+33700000000">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="phone"></i>
</span>
<span className="font-medium">+33 7 00 00 00 00</span>
</a>
<div className="inline-flex items-center gap-3 text-neutral-800">
<span className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="map-pin"></i>
</span>
<span className="font-medium">Paris, France</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-neutral-50 p-5 ring-1" style={{borderColor: '#E6EAF0'}}>
<div className="flex items-start gap-3">
<div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white ring-1" style={{borderColor: '#E6EAF0'}}>
<i className="text-neutral-700" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Réponse rapide &amp; contexte maîtrisé</div>
<div className="mt-1 text-sm text-neutral-600">
                        Nous revenons vers vous avec des questions précises pour cadrer le besoin et proposer une approche adaptée.
                      </div>
</div>
</div>
</div>
</div>

<div className="min-w-0">
<div className="rounded-3xl bg-neutral-50 p-6 ring-1 sm:p-7" style={{borderColor: '#E6EAF0'}}>
<div className="text-sm font-semibold text-neutral-900">
                    Un instant pour vous, un grand pas avec nous
                  </div>
<form action="#" className="mt-6 grid gap-4" method="post">
<div>
<label className="sr-only" htmlFor="nom_complet">Nom complet</label>
<input autocomplete="name" className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 ring-1 placeholder:text-neutral-400 focus:outline-none focus:ring-2" id="nom_complet" name="nom_complet" placeholder="Nom complet" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)', '--tw-ring-color': '#E6EAF0'}} type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="telephone">Téléphone</label>
<input autocomplete="tel" className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 ring-1 placeholder:text-neutral-400 focus:outline-none focus:ring-2" id="telephone" name="telephone" placeholder="Téléphone" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)', '--tw-ring-color': '#E6EAF0'}} type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="email_contact">Email</label>
<input autocomplete="email" className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 ring-1 placeholder:text-neutral-400 focus:outline-none focus:ring-2" id="email_contact" name="email_contact" placeholder="Email" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)', '--tw-ring-color': '#E6EAF0'}} type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="societe_contact">Société</label>
<input autocomplete="organization" className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 ring-1 placeholder:text-neutral-400 focus:outline-none focus:ring-2" id="societe_contact" name="societe_contact" placeholder="Société" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)', '--tw-ring-color': '#E6EAF0'}} type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="message_contact">Message</label>
<textarea className="w-full rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 ring-1 placeholder:text-neutral-400 focus:outline-none focus:ring-2" id="message_contact" name="message_contact" placeholder="Message" rows="6" style={{borderColor: '#E6EAF0', boxShadow: '0 1px 2px rgba(16,24,40,0.04)', '--tw-ring-color': '#E6EAF0'}}></textarea>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white ring-1 ring-black/5 hover:opacity-95 focus:outline-none focus:ring-2" style={{background: '#E4572E', '--tw-ring-color': 'rgba(0,0,0,0.06)'}} type="submit">
                      Envoyer
                    </button>
<p className="text-xs text-neutral-500">
                      En envoyant ce message, vous acceptez d’être recontacté au sujet de votre demande.
                    </p>
</form>
</div>
</div>
</div>
</div>
</section>
</div>
<footer className="mt-14 pb-6">
<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row" style={{borderColor: '#E6EAF0'}}>
<p className="text-xs text-neutral-600 sm:text-sm">© <span id="year"></span> Novadata. Tous droits réservés.</p>
<div className="flex items-center gap-3 text-xs text-neutral-600 sm:text-sm">
<a className="hover:text-neutral-900" href="#">Confidentialité</a>
<span className="text-neutral-300">•</span>
<a className="hover:text-neutral-900" href="#">Conditions</a>
<span className="text-neutral-300">•</span>
<a className="hover:text-neutral-900" href="#">Contact</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
