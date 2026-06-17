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
                    },
                    colors: {
                        gray: {
                            50: '#f9fafb',
                            100: '#f3f4f6',
                            200: '#e5e7eb',
                            300: '#d1d5db',
                            400: '#9ca3af',
                            500: '#6b7280',
                            600: '#4b5563',
                            700: '#374151',
                            800: '#1f2937',
                            900: '#111827',
                        }
                    }
                }
            }
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
      code Html




    <meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>GrawerGift.pl - Mistrzowski Grawer w Krysztale</title>

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>





<style>
        body {
            font-size: 1rem; 
            line-height: 1.6;
        }
        /* Hide scrollbar for clean horizontal scroll if needed */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">Grawer<span className="text-gray-400">Gift</span></span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Okazje</a>
<a className="hover:text-gray-900 transition-colors" href="#">Biznes</a>
<a className="hover:text-gray-900 transition-colors" href="#">Technologia</a>
<a className="hover:text-gray-900 transition-colors" href="#">O nas</a>
</nav>

<div className="flex items-center gap-5">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon className="" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="relative text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon height="24" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white font-medium">0</span>
</button>
</div>
</div>
</header>

<section className="relative h-[650px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Grawer 3D w krysztale" className="opacity-90 w-full h-full object-cover grayscale-0 invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47cb12d6-672c-44ff-9250-c58e4035efc3_3840w.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl">
<h1 className="md:text-6xl leading-tight text-5xl font-medium text-white tracking-tight mb-6">Mistrzowski grawer<br/>w szkle. Pamiątki, które zostają na zawsze.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-200 max-w-xl mb-10">
                    Personalizowane prezenty i statuetki tworzone z pasją. Projekt JPG do akceptacji wysyłamy w 24h.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-base font-medium rounded-full hover:bg-gray-100 transition-all duration-200 min-w-[200px]" href="#bestsellers">
                        Zobacz bestsellery
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white text-base font-medium rounded-full hover:bg-white/10 transition-all duration-200 min-w-[200px]" href="#business">
                        Oferta dla biznesu
                    </a>
</div>
</div>
</div>
</section>

<div className="bg-gray-50 border-b border-gray-100 py-6">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
<div className="flex items-center gap-3 justify-center lg:justify-start">
<div className="p-2 bg-white rounded-lg shadow-sm text-gray-900">
<iconify-icon height="24" icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">5.0/5.0</span>
<span className="text-xs text-gray-500">na podstawie 485 opinii</span>
</div>
</div>
<div className="flex items-center gap-3 justify-center lg:justify-start">
<div className="p-2 bg-white rounded-lg shadow-sm text-gray-900">
<iconify-icon height="24" icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">Projekt JPG</span>
<span className="text-xs text-gray-500">do akceptacji przed grawerem</span>
</div>
</div>
<div className="flex items-center gap-3 justify-center lg:justify-start">
<div className="p-2 bg-white rounded-lg shadow-sm text-gray-900">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">Bezpieczna Paczka</span>
<span className="text-xs text-gray-500">100% ochrony przesyłki</span>
</div>
</div>
<div className="flex items-center gap-3 justify-center lg:justify-start">
<div className="p-2 bg-white rounded-lg shadow-sm text-gray-900">
<iconify-icon className="" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-900">Szybka realizacja</span>
<span className="text-xs text-gray-500">i ekspresowa wysyłka</span>
</div>
</div>
</div>
</div>
</div>

<section className="pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Kategorie produktów</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Zobacz pełną ofertę →</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200" href="#">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-gray-900">
<iconify-icon className="" height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Statuetki z grawerem</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200" href="#">
<div className="flex group-hover:scale-110 transition-transform text-gray-900 bg-white w-12 h-12 rounded-full mb-3 shadow-sm items-center justify-center">
<iconify-icon className="" height="24" icon="solar:box-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Karafki z grawerem</span>
</a>

<a className="group flex flex-col items-center justify-center hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200 bg-gray-50 border-transparent border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="flex group-hover:scale-110 transition-transform text-gray-900 bg-white w-12 h-12 rounded-full mb-3 shadow-sm items-center justify-center">
<iconify-icon className="" height="24" icon="solar:box-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Dodatki, etui</span>
</a>

<a className="group flex flex-col items-center justify-center hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200 bg-gray-50 border-transparent border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-gray-900">
<iconify-icon className="" height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Serca z grawerem</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200" href="#">
<div className="flex group-hover:scale-110 transition-transform text-gray-900 bg-white w-12 h-12 rounded-full mb-3 shadow-sm items-center justify-center">
<iconify-icon className="" height="24" icon="solar:box-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Wazony z grawerem</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200" href="#">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-gray-900">
<iconify-icon className="" height="24" icon="solar:case-round-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Prezenty biznesowe</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200" href="#">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform text-gray-900">
<iconify-icon className="" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Prezenty z zegarem</span>
</a>

<a className="group flex flex-col items-center justify-center hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200 bg-gray-50 border-transparent border rounded-2xl pt-6 pr-6 pb-6 pl-6" href="#">
<div className="flex group-hover:scale-110 transition-transform text-gray-900 bg-white w-12 h-12 rounded-full mb-3 shadow-sm items-center justify-center">
<iconify-icon className="" height="24" icon="solar:box-linear" style={{color: 'rgb(17, 24, 39)'}} width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 text-center">Kryształy Bohemia</span>
</a>
</div>
</div>
</section>

<section className="py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="group relative h-[500px] rounded-2xl overflow-hidden block" href="#">
<img alt="Prezenty na Okazje" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc7da176-464c-4167-b582-085ca3c42cc2_1600w.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-10">
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Prezenty na Okazje</h2>
<p className="text-gray-200 mb-6 font-light">Śluby, Jubileusze, Podziękowania dla rodziców.</p>
<span className="inline-flex items-center text-white text-sm font-medium border-b border-white pb-1 group-hover:border-gray-300 transition-colors">
                            Zobacz kolekcję <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</div>
</a>

<a className="group relative h-[500px] rounded-2xl overflow-hidden block" href="#">
<img alt="Statuetki Biznesowe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4b55d0d-14cf-4bdb-a188-9d54fb65c044_1600w.jpg?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-10">
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Statuetki Biznesowe</h2>
<p className="font-light text-gray-200 mb-6">Nagrody, Grawer z Logotypami , Statuetki korporacyjne.</p>
<span className="inline-flex items-center text-white text-sm font-medium border-b border-white pb-1 group-hover:border-gray-300 transition-colors">
                            Oferta dla firm <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800/30 blur-3xl -z-10 rounded-full translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6">Technologia Laserowa</span>
<h2 className="md:text-4xl text-3xl font-medium tracking-tight mb-6">Ze zwykłego zdjęcia tworzymy magię 3D</h2>
<p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                        Nasi graficy ręcznie modelują Twoje płaskie zdjęcie (2D), nadając mu głębię i trzeci wymiar. Następnie laser o mikronowej precyzji wypala miliony punktów wewnątrz kryształu K9.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon height="24" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-2">Konwersja zdjęcie do szkicu</h3>
<p className="text-sm text-gray-500">Specjalistyczny retusz i modelowanie twarzy z nadesłanej fotografii.</p>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon className="" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Wieczna Trwałość</h3>
<p className="text-sm text-gray-500">Grawer na szkle, nigdy nie wyblaknie ani się nie zetrze.</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Proces Grawerowania" className="w-full h-auto object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
<iconify-icon className="text-white" height="40" icon="solar:play-circle-linear" width="40"></iconify-icon>
<div className="">
<p className="text-sm font-medium text-white">Zobacz jak to robimy</p>
<p className="text-xs text-gray-400">Video z naszej pracowni (1:42)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Twój idealny prezent w 3 krokach</h2>
<p className="text-gray-500">Prosty proces zamówienia z gwarancją satysfakcji.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
<iconify-icon className="text-gray-800" height="40" icon="solar:cart-large-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Wybierz i zamów</h3>
<p className="text-sm text-gray-500 px-4">Wpisz tekst dedykacji lub wgraj logo bezpośrednio przy produkcie.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
<iconify-icon className="text-gray-800" height="40" icon="solar:gallery-check-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Zatwierdź projekt</h3>
<p className="text-sm text-gray-500 px-4">W 24h otrzymasz wizualizację JPG na maila. Masz pełne prawo do poprawek!</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
<iconify-icon className="text-gray-800" height="40" icon="solar:box-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">Odbierz przesyłkę</h3>
<p className="text-sm text-gray-500 px-4">Grawerujemy i wysyłamy Twoją pancerną paczkę. Bezpieczeństwo gwarantowane.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="bestsellers">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-12 text-center md:text-left">Najczęściej wybierane</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 relative">
<img alt="Statuetka Szklana" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-contain pt-6 pr-6 pb-6 pl-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/051235a1-fb57-4299-9f9a-6269d82ee0eb_800w.png?w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Statuetka "Diament"</h3>
<span className="text-base font-semibold text-gray-900">189 zł</span>
</div>
<p className="text-sm text-gray-500 mb-2">Grawer 3D wewnątrz</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(42)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 relative">
<img alt="Zestaw Karafka" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-contain pt-6 pr-6 pb-6 pl-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/217c7884-8760-4478-b5a3-20053f2533fa_800w.png?w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Zestaw Whisky Premium</h3>
<span className="text-base font-semibold text-gray-900">249 zł</span>
</div>
<p className="text-sm text-gray-500 mb-2">Karafka + 2 szklanki</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(128)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 relative">
<img alt="Wazon Grawerowany" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-contain pt-6 pr-6 pb-6 pl-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a3c7fd2-6bda-4809-9641-ddeb6c11e691_800w.png?w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Wazon "Rocznica"</h3>
<span className="text-base font-semibold text-gray-900">159 zł</span>
</div>
<p className="text-sm text-gray-500 mb-2">Dla Rodziców</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-half-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(56)</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 relative">
<img alt="Statuetka Serce" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-contain pt-6 pr-6 pb-6 pl-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64db7900-9903-46f6-afae-c64b92105e73_800w.png?w=800&amp;q=80"/>
</div>
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Serce Szklane</h3>
<span className="text-base font-semibold text-gray-900">119 zł</span>
</div>
<p className="text-sm text-gray-500 mb-2">Podziękowanie</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-400 ml-1">(215)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
<img alt="Pracownia Grawerska" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a3c7fd2-6bda-4809-9641-ddeb6c11e691_1600w.png?w=800&amp;q=80"/>
<div className="bg-gray-900/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
<p className="text-4xl font-semibold text-gray-900 mb-1" style={{}}>10+</p>
<p className="text-sm text-gray-500 font-medium">Lat doświadczenia</p>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">Dlaczego GrawerGift?</h2>
<p className="leading-relaxed text-lg text-gray-500 mb-6">Ponad 10 lat doświadczenia w pracy ze szkłem. Nie jesteśmy masową manufakturą – każdy produkt przechodzi przez ręce grafika i polernika, aby zagwarantować najwyższą jakość.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-600">Indywidualna kontrola jakości każdego graweru</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-600">Ręczne wykańczanie każdego produktu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-900 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-600">Nowoczesny park maszynowy laserów</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-center text-gray-900 mb-16">Co mówią nasi klienci?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
<div className="mb-6 text-gray-300">
<iconify-icon height="40" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic">"Statuetka przerosła moje oczekiwania. Rodzice byli wzruszeni do łez podczas rocznicy. Dziękuję za piękne wykonanie!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">AK</div>
<div>
<p className="text-sm font-semibold text-gray-900">Anna K.</p>
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
<div className="mb-6 text-gray-300">
<iconify-icon height="40" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic">"Świetny kontakt z obsługą. Projektant cierpliwie nanosił moje poprawki, aż efekt był idealny. Bardzo polecam!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">MP</div>
<div>
<p className="text-sm font-semibold text-gray-900">Michał P.</p>
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
<div className="mb-6 text-gray-300">
<iconify-icon height="40" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic">"Bałem się o transport szkła, ale paczka była pancerna. Wszystko dotarło w jednym kawałku i to ekspresowo."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">TJ</div>
<div>
<p className="text-sm font-semibold text-gray-900">Tomasz J.</p>
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-gray-900 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
<div className="">
<h2 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">Personalizacja Premium</h2>
<p className="text-gray-300 text-sm mb-6">Nie masz czasu na konfigurator? Prześlij wytyczne, zrobimy to za Ciebie.</p>
</div>
<button className="w-full bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
                    Zleć zamówienie nam
                </button>
</div>

<div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between border border-gray-200">
<div className="">
<h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-2 tracking-tight">Zostań z nami</h2>
<p className="text-gray-500 text-sm mb-6">Odbierz 5% rabatu na pierwsze zamówienie zapisując się do newslettera.</p>
</div>
<div className="flex gap-2">
<input className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:border-gray-400 text-sm text-gray-900 placeholder:text-gray-400" placeholder="Twój email" type="email"/>
<button className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="">
<h4 className="text-gray-900 font-semibold mb-6">O GrawerGift</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Nasza pracownia</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Galeria realizacji</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div className="">
<h4 className="text-gray-900 font-semibold mb-6">Pomoc</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Koszty i czas dostawy</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Metody płatności</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Zwroty i reklamacje</a></li>
</ul>
</div>

<div className="">
<h4 className="text-gray-900 font-semibold mb-6">Informacje</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Regulamin sklepu</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Polityka prywatności</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Pliki cookies</a></li>
</ul>
</div>

<div className="">
<h4 className="text-gray-900 font-semibold mb-6">Kontakt</h4>
<p className="text-sm text-gray-500 mb-2">pon-pt: 8:00 - 16:00</p>
<a className="text-sm text-gray-900 font-medium hover:underline" href="mailto:kontakt@grawergift.pl">kontakt@grawergift.pl</a>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 GrawerGift.pl. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
