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
      

<div className="fixed top-0 left-0 right-0 z-[60] flex h-8 items-center justify-between px-6 text-[10px] font-medium uppercase tracking-widest transition-transform duration-300 bg-neutral-100 text-black">
<div className="hidden md:flex items-center gap-4">
<span className="flex items-center gap-1 opacity-80 hover:opacity-100 cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" width="12"></iconify-icon>
                Advisors: +1 (800) 928-1039
            </span>
<span className="opacity-40">|</span>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="mailto:concierge@sheraz.com">Email Us</a>
</div>
<div className="mx-auto md:mx-0">
<span className="opacity-90">Complimentary White Glove Delivery Worldwide</span>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="flex items-center gap-1 opacity-80 hover:opacity-100">
<iconify-icon icon="solar:globe-linear" width="12"></iconify-icon>
                United States (USD)
            </button>
<span className="opacity-40">|</span>
<a className="opacity-80 hover:opacity-100" href="#">Showrooms</a>
</div>
</div>

<nav className="fixed top-8 left-0 right-0 z-50 border-b backdrop-blur-sm transition-all duration-300 border-neutral-900 bg-black/95">
<div className="mx-auto max-w-[1600px] px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-neutral-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.2" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-neutral-500">
<a className="transition-colors hover:text-white" href="#">New Arrivals</a>
<a className="transition-colors hover:text-white" href="#">Antique</a>
<a className="transition-colors hover:text-white" href="#">Modern</a>
<a className="transition-colors hover:text-white" href="#">Bespoke</a>
<a className="transition-colors hover:text-white text-red-300" href="#">Vault</a>
</div>

<a className="text-2xl lg:text-3xl font-display tracking-widest font-normal absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-neutral-100" href="#">
                SHERAZ CARPETS
            </a>

<div className="flex items-center gap-8">
<button className="text-neutral-500 transition-colors flex items-center gap-2 group hover:text-white">
<span className="hidden lg:block text-xs uppercase tracking-widest group-hover:text-black">Search</span>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.2" width="20"></iconify-icon>
</button>
<button className="hidden md:block text-neutral-500 transition-colors hover:text-white">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.2" width="20"></iconify-icon>
</button>
<button className="relative text-neutral-500 transition-colors group hover:text-white">
<iconify-icon className="" height="20" icon="solar:bag-5-linear" strokeWidth="1.2" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-100"></span>
</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-28">
<div className="mx-auto w-full px-4 sm:px-6 lg:px-6 mt-0">
<div className="relative h-[85vh] w-full overflow-hidden bg-neutral-900">
<img alt="Luxury Interior Rug" className="image-fade-in h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-white/20"></div>
<div className="flex flex-col text-black text-center pb-12 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-black/90">The Heritage Collection</p>
<h1 className="mb-8 text-5xl md:text-8xl font-display tracking-tight font-normal leading-[1.1] drop-shadow-sm text-black">
                        TimelessWeaves
                    </h1>
<div className="flex flex-col md:flex-row items-center gap-6 mt-4">
<a className="inline-flex h-12 min-w-[160px] items-center justify-center border px-8 text-xs uppercase tracking-widest transition-all border-black bg-black text-neutral-100 hover:bg-neutral-100 hover:border-neutral-100 hover:text-black" href="#">
                            Shop Antique
                        </a>
<a className="inline-flex h-12 min-w-[160px] items-center justify-center border bg-transparent px-8 text-xs uppercase tracking-widest transition-all border-black text-black hover:bg-black hover:text-neutral-100" href="#">
                            Shop Modern
                        </a>
</div>
</div>
</div>
</div>
</header>

<section className="border-b py-12 overflow-hidden border-neutral-900 bg-black">
<div className="flex w-full items-center justify-between gap-16 px-12 md:justify-center md:gap-32">
<span className="font-display text-lg tracking-[0.2em] text-neutral-600">TABRIZ</span>
<span className="font-display text-lg tracking-[0.2em] text-neutral-600">ISFAHAN</span>
<span className="font-display text-lg tracking-[0.2em] text-neutral-600">KASHAN</span>
<span className="font-display text-lg tracking-[0.2em] hidden md:inline text-neutral-600">HEREKE</span>
<span className="font-display text-lg tracking-[0.2em] hidden md:inline text-neutral-600">AGRA</span>
</div>
</section>

<section className="py-32">
<div className="mx-auto max-w-[1600px] px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-3 sticky top-32">
<h2 className="text-4xl font-display font-normal leading-tight text-neutral-100">The <br/>Curated <br/>Loom</h2>
<p className="mt-6 text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
                        An uncompromising selection of the world's finest knots. Defined by ancient techniques, natural dyes, and masterful artistry.
                    </p>
<a className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors border-b pb-1 hover:border-neutral-500 text-neutral-100 border-neutral-100" href="#">
                        View All Collections
                    </a>
</div>

<div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-2">

<div className="group relative cursor-pointer overflow-hidden bg-neutral-900">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Persian Rugs" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 from-white/50"></div>
<div className="absolute bottom-10 left-10">
<h3 className="text-3xl font-display tracking-wide text-black">Persian Classics</h3>
<div className="h-[1px] w-0 mt-4 group-hover:w-16 transition-all duration-500 ease-out bg-black"></div>
</div>
</div>

<div className="group relative cursor-pointer overflow-hidden md:mt-24 bg-neutral-900">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Modern Rugs" className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 from-white/50"></div>
<div className="absolute bottom-10 left-10">
<h3 className="text-3xl font-display tracking-wide text-black">Modern Silk</h3>
<div className="h-[1px] w-0 mt-4 group-hover:w-16 transition-all duration-500 ease-out bg-black"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t bg-neutral-950/50 border-neutral-900">
<div className="mx-auto max-w-[1600px] px-6">
<div className="mb-16 flex items-end justify-between">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600">Recent Acquisitions</span>
<h2 className="mt-3 text-3xl font-display tracking-tight text-neutral-100">Just Landed</h2>
</div>

<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
<button className="underline underline-offset-8 decoration-[0.5px] text-neutral-100">All</button>
<button className="transition-colors text-neutral-600 hover:text-neutral-100">Area Rugs</button>
<button className="transition-colors text-neutral-600 hover:text-neutral-100">Runners</button>
<button className="transition-colors text-neutral-600 hover:text-neutral-100">Kilims</button>
</div>
</div>
<div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
<img alt="Tabriz Rug" className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 backdrop-blur py-3 px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 border-t bg-black/95 border-neutral-900">
<div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
<span>Dimensions</span>
<span className="text-neutral-600">FT</span>
</div>
<div className="mt-2 flex gap-2">
<button className="h-6 px-2 flex items-center justify-center border text-[10px] transition-all border-neutral-800 hover:border-white hover:bg-white hover:text-black">6x9</button>
<button className="h-6 px-2 flex items-center justify-center border text-[10px] transition-all border-neutral-800 hover:border-white hover:bg-white hover:text-black">8x10</button>
<button className="h-6 px-2 flex items-center justify-center border text-[10px] transition-all border-neutral-800 hover:border-white hover:bg-white hover:text-black">9x12</button>
</div>
</div>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Fine Tabriz</p>
<div className="flex gap-1">
<div className="h-2 w-2 rounded-full border bg-[#8B4513] border-neutral-800"></div>
<div className="h-2 w-2 rounded-full border bg-[#F5DEB3] border-neutral-800"></div>
</div>
</div>
<h3 className="text-sm font-normal text-neutral-100">Royal Garden Medallion</h3>
<p className="text-sm font-medium text-neutral-100">$12,500</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
<span className="absolute top-4 left-4 backdrop-blur px-2 py-1 text-[9px] uppercase tracking-widest font-semibold z-10 bg-black/90 text-neutral-100">Rare Find</span>
<img alt="Oushak Rug" className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 backdrop-blur py-4 px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 border-t text-center bg-black/95 border-neutral-900">
<button className="w-full text-[10px] uppercase tracking-widest font-medium hover:underline">Inquire Pricing</button>
</div>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Antique Oushak</p>
<span className="text-[9px] tracking-wide uppercase text-red-300">One of a kind</span>
</div>
<h3 className="text-sm font-normal text-neutral-100">Soft Palette Geometric</h3>
<p className="text-sm font-medium text-neutral-100">$24,900</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
<img alt="Silk Qom" className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 backdrop-blur py-3 px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 border-t bg-black/95 border-neutral-900">
<div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
<span>Dimensions</span>
<span className="text-neutral-600">FT</span>
</div>
<div className="mt-2 flex gap-2">
<button className="h-6 px-2 flex items-center justify-center border text-[10px] transition-all border-neutral-800 hover:border-white hover:bg-white hover:text-black">4x6</button>
<button className="h-6 px-2 flex items-center justify-center border text-[10px] transition-all border-neutral-800 hover:border-white hover:bg-white hover:text-black">5x7</button>
</div>
</div>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Pure Silk Qom</p>
</div>
<h3 className="text-sm font-normal text-neutral-100">Celestial Hunter</h3>
<p className="text-sm font-medium text-neutral-100">$8,450</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
<img alt="Kilim Runner" className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors bg-black text-neutral-100 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.2" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 backdrop-blur py-4 px-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 border-t text-center bg-black/95 border-neutral-900">
<button className="w-full text-[10px] uppercase tracking-widest font-medium hover:underline">Add to Bag</button>
</div>
</div>
<div className="mt-5 space-y-1">
<div className="flex justify-between items-start">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Anatolian Kilim</p>
</div>
<h3 className="text-sm font-normal text-neutral-100">Geometric Runner</h3>
<p className="text-sm font-medium text-neutral-100">$1,280</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-neutral-100 text-black">
<div className="relative h-[700px] w-full overflow-hidden group">
<img alt="Weaving Loom" className="h-full w-full object-cover opacity-80 transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center px-12 py-20 md:px-32 relative">
<span className="absolute top-20 left-12 md:left-32 text-xs uppercase tracking-[0.2em] text-black/40">Craftsmanship</span>
<h2 className="mb-8 text-5xl font-display font-light tracking-tight leading-none text-black/90">Woven  History</h2>
<p className="mb-10 max-w-md font-light leading-loose text-sm text-neutral-600">
                Every knot tells a story. Our carpets are more than furnishings; they are heirlooms crafted by master artisans using techniques passed down through generations.
            </p>
<a className="group inline-flex w-fit items-center gap-4 text-xs uppercase tracking-widest text-black hover:text-neutral-700" href="#">
                Discover The Process
                <iconify-icon className="transition-transform group-hover:translate-x-2" icon="solar:arrow-right-linear" strokeWidth="1.2" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-black">
<div className="mx-auto max-w-xl px-6 text-center">
<h2 className="text-2xl font-display tracking-wide text-neutral-100">SHERAZ</h2>
<p className="mt-4 text-xs font-light tracking-wide text-neutral-500 uppercase">Join our list for private vault access</p>
<form className="mt-10 relative group">
<input className="w-full border-b bg-transparent py-4 pr-12 text-sm placeholder-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors border-neutral-800 text-neutral-100" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-0 bottom-0 transition-colors text-neutral-700 hover:text-neutral-100" type="button">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.2" width="20"></iconify-icon>
</button>
</form>
<div className="mt-8 flex items-center justify-center gap-3">
<input className="h-3 w-3 cursor-pointer appearance-none border rounded-[1px] checked:bg-neutral-900 checked:border-neutral-900 transition-all border-neutral-700" id="terms" type="checkbox"/>
<label className="text-[10px] cursor-pointer select-none uppercase tracking-wider text-neutral-600" htmlFor="terms">I agree to the Privacy Policy</label>
</div>
</div>
</section>

<footer className="pt-20 border-t bg-neutral-950 border-neutral-900">
<div className="mx-auto max-w-[1600px] px-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-neutral-800">
<div className="flex items-start gap-4">
<div className="p-2 rounded-full border bg-black border-neutral-900 text-neutral-400">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-100">Interior Consultation</h4>
<p className="mt-1 text-xs text-neutral-500">Virtual or in-home appointments</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-full border bg-black border-neutral-900 text-neutral-400">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-100">White Glove Delivery</h4>
<p className="mt-1 text-xs text-neutral-500">Placement and pad installation</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-full border bg-black border-neutral-900 text-neutral-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-100">Authenticity Guaranteed</h4>
<p className="mt-1 text-xs text-neutral-500">Certificate of Origin included</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8 pt-16 pb-12">
<div className="md:col-span-1 pr-8">
<a className="text-2xl font-display font-medium tracking-wide" href="#">SHERAZ</a>
<p className="mt-6 text-xs leading-relaxed text-neutral-500 font-light">
                        Purveyors of fine antique and contemporary hand-knotted carpets. Bridging the gap between ancient tradition and modern interior design.
                    </p>
<div className="mt-8 flex gap-4 text-neutral-600">
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="grayscale opacity-60 hover:opacity-100" icon="logos:instagram-icon" width="16"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="grayscale opacity-60 hover:opacity-100" icon="logos:facebook" width="16"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="grayscale opacity-60 hover:opacity-100" icon="logos:pinterest" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-100">Services</h3>
<ul className="space-y-4 text-xs text-neutral-500 font-light tracking-wide">
<li><a className="transition-colors hover:text-neutral-100" href="#">Cleaning &amp; Repair</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Appraisals</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Trade Program</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Custom Rugs</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Home Trial</a></li>
</ul>
</div>
<div>
<h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-100">The Company</h3>
<ul className="space-y-4 text-xs text-neutral-500 font-light tracking-wide">
<li><a className="transition-colors hover:text-neutral-100" href="#">Our Heritage</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Showrooms</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Journal</a></li>
<li><a className="transition-colors hover:text-neutral-100" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-100">Payment Methods</h3>
<div className="flex flex-wrap gap-3">
<div className="h-8 w-12 rounded border flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all bg-black border-neutral-800">
<iconify-icon icon="logos:visa" width="24"></iconify-icon>
</div>
<div className="h-8 w-12 rounded border flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all bg-black border-neutral-800">
<iconify-icon icon="logos:mastercard" width="24"></iconify-icon>
</div>
<div className="h-8 w-12 rounded border flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all bg-black border-neutral-800">
<iconify-icon icon="logos:amex" width="24"></iconify-icon>
</div>
<div className="h-8 w-12 rounded border flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-all bg-black border-neutral-800">
<iconify-icon icon="logos:paypal" width="20"></iconify-icon>
</div>
</div>
<p className="mt-4 text-[10px] text-neutral-600">Secure 256-bit SSL Encryption.</p>
</div>
</div>
<div className="flex flex-col items-center justify-between border-t py-8 md:flex-row border-neutral-800">
<p className="text-[10px] tracking-wide text-neutral-600">© 2024 Sheraz Carpets Inc. All rights reserved.</p>
<div className="mt-4 flex gap-6 md:mt-0">
<a className="text-[10px] uppercase tracking-wider text-neutral-600 hover:text-neutral-100" href="#">Privacy</a>
<a className="text-[10px] uppercase tracking-wider text-neutral-600 hover:text-neutral-100" href="#">Terms</a>
<a className="text-[10px] uppercase tracking-wider text-neutral-600 hover:text-neutral-100" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
