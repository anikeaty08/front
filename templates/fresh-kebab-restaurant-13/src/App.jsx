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
        
        // Mobile Menu Toggle Logic
        const menuBtn = document.querySelector('button.md\\:hidden');
        const navLinks = document.querySelector('.hidden.md\\:flex');
        
        if(menuBtn) {
            menuBtn.addEventListener('click', () => {
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'fixed inset-0 bg-[#E6F9EA] z-[60] flex flex-col items-center justify-center gap-8 p-8 transition-opacity duration-300';
                mobileMenu.innerHTML = `
                    <button class="absolute top-6 right-6 p-2 close-menu">
                        <i data-lucide="x" class="w-8 h-8 text-black"></i>
                    </button>
                    <a href="#acasa" class="text-3xl font-display hover:text-[#28D156]">Acasa</a>
                    <a href="#despre" class="text-3xl font-display hover:text-[#28D156]">Despre noi</a>
                    <a href="#meniu" class="text-3xl font-display hover:text-[#28D156]">Meniu</a>
                    <a href="#contact" class="text-3xl font-display hover:text-[#28D156]">Contact</a>
                    <a href="https://wolt.com" target="_blank" class="mt-4 px-8 py-3 bg-[#28D156] border-2 border-black rounded-full font-bold shadow-hard">COMANDA ACUM</a>
                `;
                document.body.appendChild(mobileMenu);
                lucide.createIcons();
                document.body.style.overflow = 'hidden';

                mobileMenu.querySelector('.close-menu').addEventListener('click', () => {
                    mobileMenu.remove();
                    document.body.style.overflow = 'auto';
                });
                
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.remove();
                        document.body.style.overflow = 'auto';
                    });
                });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 bg-[#E6F9EA]/90 backdrop-blur-sm border-b border-black/5">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<div className="relative w-8 h-10 mr-1 transition-transform group-hover:rotate-12">

<svg className="text-black w-full h-full fill-[#6ADE7D]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L12 22M7 6H17M6 10H18M7 14H17M8 18H16" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-2xl tracking-tight font-display text-[#555] flex flex-col leading-none">
<span className="text-[#6ADE7D] text-shadow-sm stroke-black" style={{WebkitTextStroke: '1px black'}}>Fresh</span>
<span className="-mt-1 text-black">Kebab</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 font-medium text-sm">
<a className="px-5 py-2 bg-[#6ADE7D] border-2 border-black rounded-full shadow-hard-sm transition-transform hover:-translate-y-0.5" href="#acasa">Acasa</a>
<a className="hover:text-[#6ADE7D] transition-colors" href="#despre">Despre noi</a>
<a className="hover:text-[#6ADE7D] transition-colors" href="#meniu">Meniu</a>
<a className="hover:text-[#6ADE7D] transition-colors" href="#parteneri">Parteneri</a>
<a className="hover:text-[#6ADE7D] transition-colors" href="#contact">Contact</a>
</div>

<a className="hidden md:flex items-center gap-3 bg-[#1ecf42] border-2 border-black rounded-full px-1 pl-1 py-1 pr-6 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group" href="https://wolt.com/ro/rou/timisoara/restaurant/fresh-kebab-centru-67daff6ce014794baf590645?pid=google&amp;c=ROU_Web_FTU_Search_DSA_All&amp;af_adset=DSA&amp;af_keywords=&amp;keyword_match_type=&amp;matchtype=&amp;device=c&amp;utm_adgroup=DSA&amp;utm_keyword=&amp;utm_term=&amp;adgroup_id=176380529177&amp;keyword_id=dsa-19959388920&amp;ad_id=750305405200&amp;gad_campaignid=22473557682" target="_blank">
<div className="bg-white border-2 border-black rounded-full p-1.5 group-hover:rotate-45 transition-transform duration-300">
<i className="w-4 h-4 text-black stroke-[2.5]" data-lucide="arrow-up-right"></i>
</div>
<span className="font-bold text-xs tracking-wide">COMANDA ACUM!</span>
</a>

<button className="md:hidden p-2">
<i className="w-8 h-8 text-black" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center overflow-hidden" id="acasa">

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 mt-[-5vh]">
<h1 className="font-display text-[#86EFAC] text-stroke-3 shadow-text-hard text-[16vw] md:text-[11vw] leading-[0.85] text-center w-full uppercase transform -rotate-2 md:rotate-0">
                EAT DIFFERENT
            </h1>
<h1 className="font-display text-[#86EFAC] text-stroke-3 shadow-text-hard text-[16vw] md:text-[11vw] leading-[0.85] text-center w-full uppercase transform rotate-2 md:rotate-0">
                EAT FRESH
            </h1>
</div>

<div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex flex-col items-center">


<div className="relative w-full max-w-sm md:max-w-2xl aspect-[4/3] md:aspect-[16/9] mb-8 md:mb-12 flex justify-center items-center">
<img alt="Fresh Kebab Delicious" className="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500 ease-in-out filter brightness-105 contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

<div className="hidden md:block md:col-span-3 relative h-32">
<svg className="absolute bottom-0 right-0 w-full h-full text-[#38782B]" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" viewbox="0 0 200 120">
<path d="M180,10 C150,5 100,20 80,60 C60,100 100,110 140,100 C170,90 190,60 160,80 C130,100 50,110 10,80"></path>
<path d="M10,80 L20,70 M10,80 L25,90"></path>
</svg>
</div>

<div className="md:col-span-6 flex flex-col md:flex-row gap-4 justify-center items-center w-full">
<a className="w-full md:w-auto flex items-center justify-between gap-4 bg-[#28D156] border-2 border-black rounded-full pl-2 pr-8 py-2 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="https://wolt.com/ro/rou/timisoara/restaurant/fresh-kebab-centru-67daff6ce014794baf590645?pid=google&amp;c=ROU_Web_FTU_Search_DSA_All&amp;af_adset=DSA&amp;af_keywords=&amp;keyword_match_type=&amp;matchtype=&amp;device=c&amp;utm_adgroup=DSA&amp;utm_keyword=&amp;utm_term=&amp;adgroup_id=176380529177&amp;keyword_id=dsa-19959388920&amp;ad_id=750305405200&amp;gad_campaignid=22473557682" target="_blank">
<div className="bg-white border-2 border-black rounded-full p-2">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right"></i>
</div>
<span className="font-bold text-sm tracking-tight">COMANDA ACUM!</span>
</a>
<a className="w-full md:w-auto flex items-center justify-between gap-4 bg-[#9dfaa8] border-2 border-black rounded-full pl-2 pr-8 py-2 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="#meniu">
<div className="bg-white border-2 border-black rounded-full p-2">
<i className="w-5 h-5 text-black" data-lucide="utensils"></i>
</div>
<span className="font-bold text-sm tracking-tight">VEZI MENIU</span>
</a>
</div>

<div className="md:col-span-3 flex flex-row md:flex-col gap-4 justify-center md:items-end text-right">
<div className="flex items-center gap-3 group cursor-default">
<div className="flex flex-col">
<span className="text-[10px] md:text-xs text-gray-600 font-medium">Ingrediente proaspete</span>
<span className="font-bold text-xl md:text-2xl leading-none tracking-tight text-[#444]">FRESH</span>
</div>
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#28D156] border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
<i className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" data-lucide="leaf"></i>
</div>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="flex flex-col">
<span className="text-[10px] md:text-xs text-gray-600 font-medium">Optiuni vegetariene</span>
<span className="font-bold text-xl md:text-2xl leading-none tracking-tight text-[#444]">VEGAN</span>
</div>
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#28D156] border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
<i className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" data-lucide="carrot"></i>
</div>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="flex flex-col">
<span className="text-[10px] md:text-xs text-gray-600 font-medium">Certificat HALAL</span>
<span className="font-bold text-xl md:text-2xl leading-none tracking-tight text-[#444]">HALAL</span>
</div>
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#28D156] border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
<i className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t-2 border-black" id="despre">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="text-[#28D156] font-bold tracking-widest text-sm uppercase mb-2 block">Povestea Noastra</span>
<h2 className="text-4xl md:text-5xl font-display mb-6 tracking-tight">Mai mult decat un simplu Kebab.</h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    La Fresh Kebab, credem ca mancarea rapida nu trebuie sa fie un compromis. Folosim doar carne proaspata, legume taiate zilnic si sosuri facute in casa dupa retete originale.
                </p>
<div className="flex gap-4">
<div className="px-4 py-3 bg-[#E6F9EA] rounded-xl border-2 border-black shadow-hard-sm">
<span className="block text-2xl font-bold mb-1">100%</span>
<span className="text-xs text-gray-600 font-medium">Carne Naturala</span>
</div>
<div className="px-4 py-3 bg-[#E6F9EA] rounded-xl border-2 border-black shadow-hard-sm">
<span className="block text-2xl font-bold mb-1">24/7</span>
<span className="text-xs text-gray-600 font-medium">Ingrediente Proaspete</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#28D156] rounded-2xl border-2 border-black translate-x-4 translate-y-4"></div>
<img alt="Chef preparing kebab" className="relative rounded-2xl border-2 border-black grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[400px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-[#E6F9EA] border-t-2 border-black" id="meniu">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-display mb-4 tracking-tight">Preferatele Clientilor</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Descopera cele mai populare alegeri din meniul nostru. Comanda acum si bucura-te de gustul autentic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl border-2 border-black p-6 shadow-hard hover:-translate-y-2 transition-transform duration-300">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden border border-black/10 flex items-center justify-center">
<img alt="Classic Kebab" className="w-full h-full object-cover mix-blend-multiply" src="https://img.freepik.com/premium-photo/doner-kebab-shawarma-sandwich-isolated-white-background_185193-76495.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold tracking-tight">Kebab Clasic</h3>
<span className="bg-[#28D156] px-2 py-1 rounded-md text-xs font-bold border border-black">POPULAR</span>
</div>
<p className="text-gray-500 text-sm mb-6">Carne rotisata, legume proaspete, sos de usturoi, lipie calda.</p>
<a className="w-full block text-center py-3 rounded-xl border-2 border-black font-bold hover:bg-black hover:text-white transition-colors" href="https://wolt.com/ro/rou/timisoara/restaurant/fresh-kebab-centru-67daff6ce014794baf590645" target="_blank">
                        Comanda pe Wolt
                    </a>
</div>

<div className="bg-white rounded-3xl border-2 border-black p-6 shadow-hard hover:-translate-y-2 transition-transform duration-300">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden border border-black/10 flex items-center justify-center">
<img alt="Kebab la Farfurie" className="w-full h-full object-cover mix-blend-multiply" src="https://img.freepik.com/premium-photo/shawarma-plate-isolated-white-background_185193-76497.jpg"/>
</div>
<h3 className="text-xl font-bold tracking-tight mb-2">Kebab la Farfurie</h3>
<p className="text-gray-500 text-sm mb-6">Portie generoasa cu cartofi prajiti, salata asortata si extra carne.</p>
<a className="w-full block text-center py-3 rounded-xl border-2 border-black font-bold hover:bg-black hover:text-white transition-colors" href="https://wolt.com/ro/rou/timisoara/restaurant/fresh-kebab-centru-67daff6ce014794baf590645" target="_blank">
                        Comanda pe Wolt
                    </a>
</div>

<div className="bg-white rounded-3xl border-2 border-black p-6 shadow-hard hover:-translate-y-2 transition-transform duration-300">
<div className="bg-gray-100 rounded-xl h-48 mb-6 overflow-hidden border border-black/10 flex items-center justify-center">
<img alt="Vegetarian" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold tracking-tight">Kebab Vegetarian</h3>
<span className="bg-[#9dfaa8] px-2 py-1 rounded-md text-xs font-bold border border-black">NOU</span>
</div>
<p className="text-gray-500 text-sm mb-6">Falafel crocant, hummus, tabouleh si legume de sezon.</p>
<a className="w-full block text-center py-3 rounded-xl border-2 border-black font-bold hover:bg-black hover:text-white transition-colors" href="https://wolt.com/ro/rou/timisoara/restaurant/fresh-kebab-centru-67daff6ce014794baf590645" target="_blank">
                        Comanda pe Wolt
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t-2 border-black" id="parteneri">
<div className="max-w-6xl mx-auto px-6 text-center">
<span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 block">Livram prin partenerii nostri</span>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">

<svg className="h-10" fill="currentColor" viewbox="0 0 100 40">
<path d="M15,30 L10,10 L5,30 L0,10 H5 L8,22 L12,10 H18 L22,22 L25,10 H30 L25,30 H20 L17,18 L14,30 H15 Z" stroke="black" strokeWidth="2"></path>
<text fontFamily="Arial" fontSize="24" font-weight="900" x="35" y="28">Wolt</text>
</svg>

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-yellow-400"></div>
<span className="text-2xl font-black italic">Glovo</span>
</div>

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-red-600"></div>
<span className="text-2xl font-black italic">Tazz</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E6F9EA] border-t-2 border-black relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-display mb-6 tracking-tight">Intra in legatura cu noi</h2>
<p className="text-lg text-gray-600 mb-10">Ai intrebari sau sugestii? Suntem aici pentru tine.</p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<a className="group flex items-center justify-center gap-3 bg-white border-2 border-black rounded-xl px-8 py-4 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="mailto:contact@freshkebab.ro">
<i className="w-6 h-6 text-[#28D156] group-hover:scale-110 transition-transform" data-lucide="mail"></i>
<span className="font-bold text-lg">contact@freshkebab.ro</span>
</a>
<a className="group flex items-center justify-center gap-3 bg-white border-2 border-black rounded-xl px-8 py-4 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" href="tel:+40700000000">
<i className="w-6 h-6 text-[#28D156] group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<span className="font-bold text-lg">+40 700 000 000</span>
</a>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#28D156] rounded-full border-2 border-black opacity-20"></div>
<div className="absolute top-10 -right-10 w-24 h-24 bg-[#9dfaa8] rounded-full border-2 border-black opacity-20"></div>
</section>

<footer className="bg-black text-white py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#6ADE7D] rounded-full flex items-center justify-center">
<span className="text-black font-bold text-xs">F</span>
</div>
<span className="font-bold tracking-tight">Fresh Kebab</span>
</div>
<p className="text-gray-400 text-sm">© 2024 Fresh Kebab. Toate drepturile rezervate.</p>
</div>
</footer>


    </>
  );
}
