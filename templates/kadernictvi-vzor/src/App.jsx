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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
850: '#1c1917',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button className="md:hidden p-2 -ml-2 text-stone-600 hover:text-stone-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-2xl font-serif font-normal tracking-tighter uppercase z-50" href="#">
                [Název Salonu]
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#services">Služby</a>
<a className="hover:text-stone-900 transition-colors" href="#pricing">Ceník</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Galerie</a>
<a className="hover:text-stone-900 transition-colors" href="#reviews">Recenze</a>
</div>
<div className="hidden md:block">
<a className="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-6 py-3 border border-stone-200 rounded-full hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300" href="tel:+420123456789">
<iconify-icon height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Zavolat</span>
</a>
</div>
<a className="md:hidden p-2 -mr-2 text-stone-900" href="tel:+420123456789">
<iconify-icon height="24" icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden bg-white border-stone-200/60 border-b pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-6 space-y-8">
<h1 className="leading-[1.05] lg:text-8xl md:text-6xl text-5xl font-normal text-stone-900 tracking-tight font-serif">KADEŘNICTVÍ</h1>
<p className="text-stone-500 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                    Profesionální péče a individuální přístup.
                </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200/50" href="tel:+420123456789">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Zavolejte nám: 123 456 789
                    </a>
</div>
</div>
<div className="md:col-span-6 relative">
<div className="aspect-[4/3] w-full rounded-sm overflow-hidden relative">
<img alt="Kadeřnice při úpravě vlasů" className="object-cover w-full h-full grayscale-[0.2]" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-sm"></div>
</div>
</div>
</div>
</header>

<section className="bg-[#FAFAF9] border-stone-200/60 border-b pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-4xl text-3xl font-normal text-stone-900 tracking-tight font-serif mb-12">Naše služby</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 border border-stone-200/60 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="28" icon="solar:scissors-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2">Dámský střih</h3>
<p className="text-stone-500 text-sm font-light">Precizní střih a styling na míru vašim rysům.</p>
</div>

<div className="bg-white p-8 border border-stone-200/60 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="28" icon="solar:user-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2">Pánský střih</h3>
<p className="text-stone-500 text-sm font-light">Klasická i moderní úprava pro muže.</p>
</div>

<div className="bg-white p-8 border border-stone-200/60 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="28" icon="solar:pallete-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2">Barvení vlasů</h3>
<p className="text-stone-500 text-sm font-light">Odborné nanesení barvy pro přirozený a bezchybný výsledek.</p>
</div>

<div className="bg-white p-8 border border-stone-200/60 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="28" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-normal tracking-tight text-stone-900 mb-2">Melíry</h3>
<p className="text-stone-500 text-sm font-light">Vícerozměrné zesvětlení pro rozzáření vašeho vzhledu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-stone-200/60" id="pricing">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-stone-900 mb-12 text-center">Ceník</h2>
<div className="space-y-6">
<div className="flex justify-between items-baseline">
<span className="text-stone-900 text-base md:text-lg font-normal tracking-tight">Dámský střih</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-base md:text-lg font-normal">od 850 Kč</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-stone-900 text-base md:text-lg font-normal tracking-tight">Pánský střih</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-base md:text-lg font-normal">od 450 Kč</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-stone-900 text-base md:text-lg font-normal tracking-tight">Barvení vlasů</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-base md:text-lg font-normal">od 1200 Kč</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-stone-900 text-base md:text-lg font-normal tracking-tight">Melíry</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-base md:text-lg font-normal">od 1500 Kč</span>
</div>
<div className="flex justify-between items-baseline">
<span className="text-stone-900 text-base md:text-lg font-normal tracking-tight">Foukaná a styling</span>
<div className="flex-grow mx-4 border-b border-dotted border-stone-300"></div>
<span className="text-stone-900 text-base md:text-lg font-normal">od 650 Kč</span>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAF9] border-stone-200/60 border-b pt-24 pr-6 pb-24 pl-6" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-stone-900 mb-12">Galerie</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 1" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 2" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 3" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 4" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=2572&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 5" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5914e4f0-8e68-42b9-958a-68d54c3d507d_800w.webp"/>
</div>
<div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm">
<img alt="Fotografie z galerie 6" className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-stone-200/60" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-stone-900 mb-12 text-center">Hodnocení klientů</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-stone-100 bg-stone-50 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="24" icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-6">„Naprosto úžasný zážitek. Preciznost a péče při mém střihu byly bezkonkurenční. Vřele doporučuji všem.“</p>
<p className="text-stone-900 font-normal tracking-tight text-sm">— Klára Nováková</p>
</div>
<div className="p-8 border border-stone-100 bg-stone-50 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="24" icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-6">„Našla jsem svůj nový oblíbený salon. Čisté, profesionální prostředí a opravdu naslouchají vašim přáním. Moje barva nikdy nevypadala lépe.“</p>
<p className="text-stone-900 font-normal tracking-tight text-sm">— Eva R.</p>
</div>
<div className="p-8 border border-stone-100 bg-stone-50 rounded-sm">
<iconify-icon className="text-stone-400 mb-4" height="24" icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-stone-600 font-light text-sm leading-relaxed mb-6">„Rychlý, přímočarý a vynikající pánský střih. Atmosféra je velmi uvolněná a ceny jsou vzhledem ke kvalitě naprosto adekvátní.“</p>
<p className="text-stone-900 font-normal tracking-tight text-sm">— Michal T.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAF9] border-stone-200/60 border-b pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-stone-900 mb-8">Navštivte nás</h2>
<div className="space-y-6 text-sm">
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-0.5" height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="font-normal text-stone-900 mb-1">Adresa</p>
<p className="text-stone-500 font-light">[Hlavní ulice 123]<br/>[Město, PSČ 123 45]</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-0.5" height="24" icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="font-normal text-stone-900 mb-1">Telefon</p>
<p className="text-stone-500 font-light">123 456 789</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-0.5" height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="font-normal text-stone-900 mb-1">E-mail</p>
<p className="text-stone-500 font-light">ahoj@nazevsalonu.cz</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-0.5" height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="font-normal text-stone-900 mb-1">Otevírací doba</p>
<ul className="text-stone-500 font-light space-y-1">
<li>Po - Pá: 9:00 - 19:00</li>
<li>Sobota: 10:00 - 17:00</li>
<li>Neděle: Zavřeno</li>
</ul>
</div>
</div>
</div>
</div>
<div className="bg-white p-10 md:p-16 border border-stone-200/60 rounded-sm text-center">
<h3 className="text-2xl font-serif font-normal tracking-tight text-stone-900 mb-4">Jste připraveni na změnu?</h3>
<p className="text-sm font-light text-stone-500 mb-8">Zavolejte nám a zajistěte si svůj termín ještě dnes.</p>
<a className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200/50" href="tel:+420123456789">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Zavolat 123 456 789
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white py-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-xl font-serif font-normal tracking-tighter uppercase text-stone-900" href="#">
                [Název Salonu]
            </a>
<p className="text-xs text-stone-500 font-light">123 456 789</p>
<div className="flex gap-6">
<a aria-label="Instagram" className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a aria-label="Facebook" className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="" height="20" icon="solar:share-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
