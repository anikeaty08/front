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
      

<nav className="fixed glass-panel z-50 w-full border-b top-0 border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-20 items-center justify-between">
<div className="flex-shrink-0">
<a className="block hover:opacity-80 transition-opacity duration-300" href="/">

<img alt="Just In Car Logo" className="w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/973fbfcc-73fe-42ad-8ef6-63f75436905b_320w.png?w=800&amp;q=80"/>
</a>
</div>
<div className="hidden lg:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="transition-colors duration-300 uppercase text-sm font-normal tracking-wide hover:text-neutral-50" href="#sluzby">
                Služby
              </a>
<a className="transition-colors duration-300 text-sm font-normal tracking-wide uppercase hover:text-neutral-50" href="#proc-my">
                Proč my
              </a>
<a className="transition-colors duration-300 text-sm font-normal tracking-wide uppercase hover:text-neutral-50" href="#cennik">
                Ceník
              </a>
<a className="transition-colors duration-300 text-sm font-normal tracking-wide uppercase hover:text-neutral-50" href="#o-nas">
                O nás
              </a>
<a className="transition-colors duration-300 text-sm font-normal tracking-wide uppercase hover:text-neutral-50" href="#faq">
                FAQ
              </a>
<a className="transition-all duration-300 uppercase hover:bg-neutral-50 text-sm font-medium text-white tracking-wide pt-2 pr-6 pb-2 pl-6 bg-neutral-950/75" href="#kontakt">
                Kontakt
              </a>
</div>
</div>
<div className="lg:hidden">
<label className="cursor-pointer text-white hover:text-neutral-50" htmlFor="mobile-menu-check">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</label>
<input className="hidden" id="mobile-menu-check" type="checkbox"/>
</div>
</div>
</div>
<div className="hidden lg:hidden border-b absolute w-full border-white/10 bg-neutral-950/75" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-2">
<a className="block px-3 py-3 text-base font-normal border-b text-white border-white/5 hover:text-neutral-50" href="#sluzby">
            Služby
          </a>
<a className="block px-3 py-3 text-base font-normal border-b text-white border-white/5 hover:text-neutral-50" href="#proc-my">
            Proč my
          </a>
<a className="block px-3 py-3 text-base font-normal border-b text-white border-white/5 hover:text-neutral-50" href="#cennik">
            Ceník
          </a>
<a className="block px-3 py-3 text-base font-normal border-b text-white border-white/5 hover:text-neutral-50" href="#o-nas">
            O nás
          </a>
<a className="block px-3 py-3 text-base font-normal border-b text-white border-white/5 hover:text-neutral-50" href="#faq">
            FAQ
          </a>
<a className="block px-3 py-3 text-base font-medium text-neutral-50" href="#kontakt">
            Kontaktovat
          </a>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Profesionální čištění vozidla" className="w-full h-full object-cover object-center opacity-80" loading="eager" src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mx-auto pt-20 px-6 relative">
<div className="fade-up max-w-3xl">

<div className="inline-flex items-center gap-2.5 mb-8 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="uppercase text-xs font-medium tracking-widest text-white">
              ČIŠTĚNÍ VOZIDEL
            </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium text-white tracking-tight font-display mb-6">
            VRÁTÍME VAŠEMU AUTU
            <br/>
            DOKONALOU ČISTOTU
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">
              I PŮVODNÍ LESK
            </span>
</h1>
<p className="leading-relaxed md:text-xl text-lg font-light text-neutral-50 max-w-xl mb-10">
            Dopřejte svému vozu prémiovou péči. Ruční mytí, hloubkové tepování a
            renovace laku v Uničově. Výsledek, který uvidíte na první pohled.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="uppercase transition-all duration-300 hover:bg-neutral-50 text-sm font-medium text-white tracking-widest text-center pt-4 pr-8 pb-4 pl-8 bg-neutral-950/75" href="#kontakt">
              Chci termín
            </a>
<a className="uppercase transition-all duration-300 glass-panel hover:text-neutral-50 hover:border-neutral-50 text-sm font-medium text-white tracking-widest text-center border pt-4 pr-8 pb-4 pl-8" href="tel:+420702904237">
              Zavolat
            </a>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
<iconify-icon className="text-white/50" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</header>
<main className="">

<section className="bg-[#050505] border-b pt-24 pb-24 relative border-white/5" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<header className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-2 text-white">
                JAK VÁM POMŮŽEME
              </h2>
<div className="bg-neutral-50 w-20 h-1"></div>
</div>
<p className="max-w-md mt-6 md:mt-0 text-sm leading-relaxed text-gray-400">
              Ať už potřebujete vyčistit skvrny na sedačkách, nebo rozzářit lak
              karoserie, postaráme se o to s maximální pečlivostí a citem pro
              detail.
            </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<article className="group relative h-96 overflow-hidden border bg-neutral-900 border-white/5">
<img alt="Hloubkové čištění interiéru vozidla" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40 bg-center opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bb02f67-7554-467d-b10c-be5c9849248c_1600w.jpg?w=800&amp;q=80"/><div className="flex flex-col bg-gradient-to-t via-transparent to-transparent from-black pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:sofa-2-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal tracking-wide font-display mb-2 text-white">
                  Interiér jako nový
                </h3>
<p className="group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 text-sm text-neutral-50 opacity-0 mb-4 translate-y-4">
                  Zbavíme interiér prachu, skvrn i bakterií. Hloubkové tepování
                  sedaček a čištění plastů pro dokonalou čistotu a svěží vůni
                  uvnitř vozu.
                </p>
<a className="uppercase flex items-center gap-2 transition-colors group-hover:text-gray-400 text-xs font-medium text-neutral-50 tracking-widest" href="#cennik">
                  Zjistit více
                  <iconify-icon className="" height="15" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', color: 'rgb(250, 250, 250)'}} width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative h-96 overflow-hidden border bg-neutral-900 border-white/5">
<img alt="Ruční mytí exteriéru vozidla" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40 bg-center opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b75f9d1d-6bb9-4e04-997c-933315d85e64_1600w.jpg"/>
<div className="flex flex-col bg-gradient-to-t via-transparent to-transparent from-black pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:washing-machine-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal tracking-wide font-display mb-2 text-white">
                  Šetrná péče o exteriér
                </h3>
<p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-gray-400">
                  Důkladné ruční mytí, které je bezpečné k laku. Odstraníme
                  hmyz, polétavou rez i zažranou špínu. Vaše auto bude opět
                  zářit.
                </p>
<a className="text-xs font-medium uppercase tracking-widest flex items-center gap-2 transition-colors text-white group-hover:text-gray-400" href="#cennik">
                  Zjistit více
                  <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</article>

<article className="group relative h-96 overflow-hidden border bg-neutral-900 border-white/5">
<img alt="Detailing a ochrana laku" className="transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40 bg-center opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0c0ee5f-0c57-42c4-9c4d-e53bbb5a5d29_1600w.webp?w=800&amp;q=80"/>
<div className="flex flex-col bg-gradient-to-t via-transparent to-transparent from-black pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<iconify-icon className="text-neutral-50 mb-4" height="31" icon="solar:star-shine-linear" style={{strokeWidth: '1.5', color: 'rgb(250, 250, 250)'}} width="32"></iconify-icon>
<h3 className="uppercase text-xl font-normal tracking-wide font-display mb-2 text-white">
                  Detailing &amp; Lesk
                </h3>
<p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-gray-400">
                  Oživíme zašlý lak a ochráníme ho před vlivy počasí. Strojní
                  leštění a voskování zajistí dlouhotrvající lesk a snadnější
                  údržbu.
                </p>
<a className="uppercase flex items-center gap-2 transition-colors group-hover:text-gray-400 text-xs font-medium text-white tracking-widest" href="#kontakt">
                  Zjistit více
                </a>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24" id="proc-my">
<div className="max-w-7xl mx-auto px-6">
<header className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">
              PROČ SVĚŘIT AUTO NÁM
            </h2>
<div className="h-1 w-20 mx-auto mb-6 bg-neutral-950/75"></div>
<p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-400">
              Nejsme rychlomylka, jsme nadšenci do aut. Každému vozu věnujeme
              tolik času a péče, kolik je potřeba pro perfektní výsledek.
            </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="border p-6 text-center bg-neutral-900 border-white/5">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:user-check-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="font-display text-base uppercase tracking-wide mb-2 text-white">
                Osobní domluva
              </h3>
<p className="text-gray-500 text-xs leading-relaxed">
                Vyjdeme vám vstříc časově i rozsahem práce.
              </p>
</div>
<div className="border p-6 text-center bg-neutral-900 border-white/5">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:hand-stars-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="font-display text-base uppercase tracking-wide mb-2 text-white">
                Ruční pečlivost
              </h3>
<p className="text-gray-500 text-xs leading-relaxed">
                Jdeme do detailů, které běžná myčka nezvládne.
              </p>
</div>
<div className="border p-6 text-center bg-neutral-900 border-white/5">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="font-display text-base uppercase tracking-wide mb-2 text-white">
                Špičková kosmetika
              </h3>
<p className="text-gray-500 text-xs leading-relaxed">
                Používáme jen ověřené a šetrné produkty.
              </p>
</div>
<div className="border p-6 text-center bg-neutral-900 border-white/5">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="font-display text-base uppercase tracking-wide mb-2 text-white">
                Jasná cena
              </h3>
<p className="text-gray-500 text-xs leading-relaxed">
                Cenu znáte předem, žádné skryté doplatky.
              </p>
</div>
<div className="border p-6 text-center bg-neutral-900 border-white/5">
<iconify-icon className="mb-4 text-neutral-50" icon="solar:chat-dots-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
<h3 className="font-display text-base uppercase tracking-wide mb-2 text-white">
                Flexibilita
              </h3>
<p className="text-gray-500 text-xs leading-relaxed">
                Zavoláte a termín najdeme co nejdříve.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-t pt-24 pb-24 border-white/5" id="cennik">
<div className="max-w-5xl mx-auto px-6">
<header className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">
              INVESTICE DO VAŠEHO VOZU
            </h2>
<div className="h-1 w-20 mx-auto mb-6 bg-neutral-950/75"></div>
<p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-400">
              Chcete vědět přesnou cenu pro vaše auto? Ozvěte se nám.
            </p>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border p-6 bg-neutral-900 border-white/5">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-neutral-50" icon="solar:bath-linear" width="24"></iconify-icon>
<h3 className="text-lg font-display uppercase tracking-wide text-white">
                  Čištění
                </h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between border-b pb-3 text-gray-300 border-white/5">
<span>Jednostupňové leštění laku</span>
<span className="font-medium text-white">od 1 200 Kč</span>
</li>
<li className="flex justify-between border-b pb-3 text-gray-300 border-white/5">
<span>Ochrana tvrdým voskem</span>
<span className="font-medium text-white">od 400 Kč</span>
</li>
<li className="flex justify-between text-gray-300">
<span>Renovace zašlých světlometů</span>
<span className="font-medium text-white">od 1 500 Kč</span>
</li>
</ul>
</div>

<div className="border p-6 bg-neutral-900 border-white/5">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-neutral-50" icon="solar:star-shine-linear" width="24"></iconify-icon>
<h3 className="text-lg font-display uppercase tracking-wide text-white">
                  Detailing &amp; Ochrana
                </h3>
</div>
<ul className="space-y-3 text-sm">
<li className="flex justify-between border-b pb-3 text-gray-300 border-white/5">
<span>Strojní leštění laku</span>
<span className="font-medium text-white">od 2 500 Kč</span>
</li>
<li className="flex justify-between border-b pb-3 text-gray-300 border-white/5">
<span>Voskování</span>
<span className="font-medium text-white">od 800 Kč</span>
</li>
<li className="flex justify-between text-gray-300">
<span className="">Renovace světlometů</span>
<span className="font-medium text-white">od 1 000 Kč</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm mb-6 text-gray-400">
              Potřebujete přesnou kalkulaci? Kontaktujte nás – připravíme
              nezávaznou nabídku.
            </p>
<a className="inline-block uppercase transition-all duration-300 hover:bg-neutral-50 text-sm font-medium text-white tracking-widest px-8 py-4 bg-neutral-950/75" href="#kontakt">
              Nezávazně poptat
            </a>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0a0a0a] pt-24 pb-24 relative" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6 text-white">
                VAŠE AUTO, NAŠE VIZITKA
              </h2>
<div className="h-1 w-20 mb-8 bg-neutral-950/75"></div>
<div className="space-y-6 font-light leading-relaxed text-base text-gray-300">
<p className="">
<strong className="font-display font-medium text-lg uppercase tracking-wider text-white">
                    Just In Car
                  </strong>
                  je lokální služba v Uničově pro všechny, kdo mají rádi svá
                  auta čistá a udržovaná.
                </p>
<p className="">
                  Věříme, že čisté auto není jen o vzhledu, ale o lepším pocitu
                  z jízdy. Ať už vozíte rodinu, klienty, nebo si jízdu užíváte
                  sami,
                  <strong className="font-medium text-neutral-50">
                    připravíme váš vůz tak, aby dělal radost
                  </strong>
                  .
                </p>
<p className="">
                  Specializujeme se na precizní ruční práci. Žádné automatické
                  linky, ale poctivá péče centimetr po centimetru.
                </p>
</div>
<div className="flex gap-12 mt-10 border-t pt-8 border-white/10">
<div className="flex items-start gap-3">
<div className="mt-1 text-neutral-50">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-2xl font-display font-medium tracking-tight text-white">
                      100%
                    </span>
<span className="text-sm font-medium uppercase tracking-wider text-gray-400">
                      Pečlivost
                    </span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-neutral-50">
<iconify-icon className="" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-2xl font-display font-medium tracking-tight text-white">
                      100%
                    </span>
<span className="text-sm font-medium uppercase tracking-wider text-gray-400">
                      Spokojenost
                    </span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="relative">
<div className="bg-gradient-to-t to-transparent from-black/50 absolute top-0 right-0 bottom-0 left-0"></div><img alt="Profesionální péče o vozidlo" className="bg-center w-full h-96 object-cover border-white/5 border" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4d40c90-582c-493f-8150-1482b41299cc_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-t pt-24 pb-24 border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-display font-medium tracking-tight mb-12 text-center text-white">
            ČASTÉ DOTAZY
          </h2>
<div className="space-y-4">
<details className="group border p-4 bg-neutral-900 border-white/5">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none text-white">
<span className="text-sm">Jak dlouho budu bez auta?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">
                Záleží na programu. Běžné mytí exteriéru zvládneme za 1–2
                hodiny. Důkladné čištění interiéru zabere 3–5 hodin. U
                kompletního detailingu si auto necháme celý den, aby výsledek
                stál za to.
              </p>
</details>
<details className="group border p-4 bg-neutral-900 border-white/5">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none text-white">
<span className="text-sm">Je nutné se objednat předem?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">
                Ano, abychom se vašemu vozu mohli věnovat naplno a bez spěchu,
                pracujeme pouze na objednání. Zavolejte nám a najdeme termín,
                který vám sedne.
              </p>
</details>
<details className="group border p-4 bg-neutral-900 border-white/5">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none text-white">
<span className="text-sm">Zvládnete i silně znečištěná auta?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">
                Ano, nebojíme se ani chlupů od psa, skvrn od jídla nebo bláta. V
                případě extrémního znečištění si cenu a čas upřesníme předem při
                prohlídce.
              </p>
</details>
<details className="group border p-4 bg-neutral-900 border-white/5">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none text-white">
<span className="text-sm">Čistíte i firemní vozové parky?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">
                Určitě. Pro firmy v Uničově a okolí nabízíme pravidelnou péči o
                flotilu vozidel, abyste u klientů dělali ten nejlepší dojem.
              </p>
</details>
<details className="group border p-4 bg-neutral-900 border-white/5">
<summary className="flex items-center justify-between cursor-pointer font-medium list-none text-white">
<span className="text-sm">Kdy mohu přijet?</span>
<span className="text-gray-500 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">
                Objednávky řešíme telefonicky nebo formulářem. Díky tomu
                nečekáte ve frontě. Stačí zavolat na 702 904 237.
              </p>
</details>
</div>
</div>
</section>
</main>

<footer className="border-white/10 border-t pt-20 pb-10 bg-neutral-950/75" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight font-display mb-2">MÁTE ZÁJEM O ČIŠTĚNÍ?</h2>
<p className="mb-8 text-sm text-gray-400">
            Napište nám nebo zavolejte. Rádi s vámi probereme, co vaše auto
            potřebuje, a domluvíme se na předání.
          </p>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input autocomplete="given-name" className="border p-4 text-sm focus:outline-none transition-colors w-full bg-neutral-900 border-white/10 text-white focus:border-white" name="name" placeholder="Jméno" required="" type="text"/>
<input autocomplete="tel" className="border p-4 text-sm focus:outline-none transition-colors w-full bg-neutral-900 border-white/10 text-white focus:border-white" name="phone" placeholder="Telefon" required="" type="tel"/>
</div>
<input autocomplete="email" className="border p-4 text-sm focus:outline-none transition-colors w-full bg-neutral-900 border-white/10 text-white focus:border-white" name="email" placeholder="Email" type="email"/>
<textarea className="border p-4 text-sm focus:outline-none transition-colors w-full bg-neutral-900 border-white/10 text-white focus:border-white" name="message" placeholder="Zpráva / Popište, co potřebujete" rows="4"></textarea>
<button className="uppercase transition-all duration-300 hover:bg-neutral-50 md:w-auto text-sm font-medium text-white tracking-widest bg-neutral-900 w-full px-8 py-4" type="submit">
              Odeslat zprávu
            </button>
</form>
</div>

<div className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<h3 className="font-display text-lg mb-4 uppercase tracking-wide text-white">
                Lokalita
              </h3>
<address className="text-sm leading-relaxed not-italic text-gray-400">
<strong>Just In Car</strong>
<br/>
                Uničov a okolí
                <br/>
                Přijedeme nebo auto vyzvedneme
              </address>
</div>
<div className="">
<h3 className="font-display text-lg mb-4 uppercase tracking-wide text-white">
                Kontakt
              </h3>
<div className="text-sm leading-relaxed flex flex-col gap-2 text-gray-400">
<a className="transition-colors flex items-center gap-2 hover:text-neutral-50" href="tel:+420702904237">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                  +420 702 904 237
                </a>
<a className="transition-colors flex items-center gap-2 hover:text-neutral-50" href="mailto:zdena.vojacek@just-in-car.cz">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                  zdena.vojacek@just-in-car.cz
                </a>
</div>
</div>
</div>

<div className="bg-neutral-900 border-white/5 border pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4">
<div className="flex bg-neutral-900/20 w-12 h-12 items-center justify-center">
<iconify-icon className="text-neutral-50" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="font-medium text-white">Raději voláte?</p>
<a className="text-xl font-display font-medium tracking-tight transition-colors text-neutral-50 hover:text-neutral-50" href="tel:+420702904237">
                  +420 702 904 237
                </a>
</div>
</div>
</div>

<div className="w-full h-48 border relative group overflow-hidden flex items-center justify-center bg-neutral-900 border-white/10">
<div className="text-center">
<iconify-icon className="mb-2 text-neutral-50" icon="solar:map-point-linear" width="40"></iconify-icon>
<p className="text-sm text-gray-400">Uničov a okolí</p>
<p className="text-gray-500 text-xs">Mohelnice, Uničov (do 30 km)</p>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs border-white/5 text-gray-600">
<p className="">© 2026 Just In Car. Všechna práva vyhrazena.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<span className="text-gray-500">
            Profesionální čištění vozidel • Uničov a okolí
          </span>
</div>
</div>
</footer>

<a className="fixed z-50 flex items-center justify-center shadow-white/10 transition-transform duration-300 hover:scale-105 active:scale-95 md:hidden text-neutral-950 bg-neutral-50/90 w-14 h-14 border-neutral-50/15 border rounded-full right-6 bottom-6 shadow-lg backdrop-blur-md" href="tel:+420702904237">
<iconify-icon className="" height="23" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5', color: 'rgb(10, 10, 10)'}} width="24"></iconify-icon>
</a>

    </>
  );
}
