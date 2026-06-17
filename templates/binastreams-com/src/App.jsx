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
      
<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

<nav className="flex pt-6 pb-6 items-center justify-between">

<div className="flex items-center gap-12">
<a className="transition-colors hover:text-orange-300 text-3xl text-white tracking-tighter font-montserrat font-medium" href="#">Bina</a>
<div className="hidden md:flex items-center gap-8">
<a className="transition-colors text-sm font-medium text-white font-manrope" href="#">سەرەتا</a>
<a className="transition-colors text-sm font-medium hover:text-white text-orange-400 font-manrope" href="#">فیلمەکان</a>
<a className="transition-colors text-sm font-medium hover:text-white text-orange-400 font-manrope" href="#">زنجیرەکان</a>
<a className="transition-colors text-sm font-medium hover:text-white text-orange-400 font-manrope" href="#">ژانرەکان</a>
</div>
</div>

<div className="flex items-center gap-4 sm:gap-6">
<div className="hidden sm:flex items-center gap-2 rounded-xl px-4 py-2 ring-1 focus-within:ring-white/30 transition-shadow bg-white/5 ring-white/10">
<iconify-icon className="text-orange-400" height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="placeholder:text-orange-500 focus:outline-none text-sm bg-transparent w-48 text-orange-100" placeholder="Search movies..." type="text"/>
</div>
<button className="sm:hidden flex items-center justify-center transition-colors text-orange-400 hover:text-white">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full ring-1 transition-colors bg-white/5 ring-white/10 text-orange-400 hover:text-white hover:bg-white/10">
<iconify-icon height="18" icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</nav>
<main className="pb-32">

<section className="relative w-full h-[60vh] min-h-[450px] rounded-2xl overflow-hidden mt-4 mb-16 ring-1 group ring-white/10 bg-orange-900">
<img alt="Featured Movie" className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-orange-950 via-orange-950/60"></div>
<div className="bg-gradient-to-r to-transparent from-orange-950 via-orange-950/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:p-12 flex flex-col gap-5 max-w-3xl pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 gap-x-5 gap-y-5">
<div className="flex flex-wrap items-center gap-3">
<span className="px-2 py-1 rounded text-xs font-semibold uppercase tracking-widest bg-white text-orange-950 font-manrope">Web-DL</span>
<span className="px-2 py-1 rounded text-xs font-medium ring-1 bg-white/10 text-orange-200 ring-white/10 font-manrope">Sci-Fi</span>
<span className="text-xs font-medium text-orange-300 font-manrope">2024</span>
<span className="text-xs font-medium flex items-center gap-1.5 text-orange-300 font-manrope">
<iconify-icon className="text-amber-500" height="14" icon="solar:star-linear" width="14"></iconify-icon> 8.8
                        </span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white font-montserrat font-medium">
                        Starlight Drift
                    </h1>
<p className="text-sm sm:text-base line-clamp-2 sm:line-clamp-3 leading-relaxed max-w-2xl text-orange-400 font-manrope">
                        When a distant colony goes silent, a lone pilot must navigate through a treacherous asteroid field and anomalous black holes to uncover the mystery before the same fate befalls Earth.
                    </p>
<div className="mt-2 flex items-center gap-4">
<a className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 text-sm font-semibold rounded-xl pt-3 pr-6 pb-3 pl-6 text-orange-950 bg-white font-manrope" href="#">سەیر بکە</a>
<a className="hidden sm:flex items-center gap-2 transition-colors text-sm font-medium rounded-xl ring-1 pt-3 pr-6 pb-3 pl-6 hover:bg-white/10 text-white bg-white/5 ring-white/10 font-manrope" href="#">زانیاری</a>
</div>
</div>
</section>

<section className="mb-16">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-semibold tracking-tight text-orange-100 font-manrope">نوێترین فیلمەکان</h2>
<a className="transition-colors flex items-center gap-1 group text-xs font-medium hover:text-white text-orange-400 font-manrope" href="#">هەمووی</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f341b77-b6c1-4b70-b1ca-1e4c5813dd76_3840w.jpg?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex backdrop-blur-[2px] bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">HD</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Neon Horizon</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 7.5</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">CAM</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">The Last Code</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2023</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 6.8</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1574267432553-4b462808152a?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">HD</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Silent Valley</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 8.1</span>
</div>
</div>
</a>

<a className="group hidden sm:flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">HD</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Dark Matter</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2023</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 7.9</span>
</div>
</div>
</a>

<a className="group hidden md:flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">HD</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">The Architect</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 8.5</span>
</div>
</div>
</a>

<a className="group hidden xl:flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1596726915031-4822ab1a0f8b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 right-2 px-2 py-1 rounded backdrop-blur-md text-xs font-semibold uppercase tracking-widest ring-1 shadow-lg bg-orange-950/80 text-orange-200 ring-white/10 font-manrope">Web-DL</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Echoes</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2022</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 7.2</span>
</div>
</div>
</a>
</div>
</section>

<section className="mb-16">
<div className="flex items-center justify-between mb-8">
<h2 className="text-lg font-semibold tracking-tight text-orange-100 font-manrope">Trending Series</h2>
<a className="text-xs font-medium transition-colors flex items-center gap-1 group text-orange-400 hover:text-white font-manrope" href="#">
                        View All <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold shadow-lg bg-orange-100 text-orange-900 font-manrope">S3</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Mind Palace</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 9.0</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold shadow-lg bg-orange-100 text-orange-900 font-manrope">S1</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">The Divide</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 8.4</span>
</div>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold shadow-lg bg-orange-100 text-orange-900 font-manrope">S5</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Shadow Empire</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2023</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 8.9</span>
</div>
</div>
</a>

<a className="group hidden sm:flex flex-col gap-3" href="#">
<div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden ring-1 bg-orange-900 ring-white/10">
<img alt="Poster" className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] bg-black/40">
<div className="w-12 h-12 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 bg-white text-orange-950">
<iconify-icon className="ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold shadow-lg bg-orange-100 text-orange-900 font-manrope">S2</div>
</div>
<div className="flex flex-col gap-1 px-1">
<h3 className="text-sm font-medium truncate group-hover:text-white transition-colors text-orange-200 font-manrope">Film Noir</h3>
<div className="flex items-center justify-between text-xs text-orange-500">
<span className="font-manrope">2024</span>
<span className="flex items-center gap-1 font-manrope"><iconify-icon height="12" icon="solar:star-linear" width="12"></iconify-icon> 7.8</span>
</div>
</div>
</a>
</div>
</section>

<footer className="mt-24 border-t pt-8 text-xs text-orange-500 flex flex-col md:flex-row items-center justify-between gap-6 border-white/5">
<div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
<span className="text-sm font-semibold tracking-tighter text-orange-300 font-manrope">ىعنا</span>
<p className="font-manrope">© 2024 Kurdcinema. All rights reserved.</p>
</div>
<div className="flex items-center gap-6">
<a className="transition-colors hover:text-orange-300 font-manrope" href="#">Terms of Service</a>
<a className="transition-colors hover:text-orange-300 font-manrope" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-orange-300 font-manrope" href="#">DMCA</a>
</div>
<div className="flex items-center gap-5">
<a className="transition-colors hover:text-orange-300" href="#">
<iconify-icon height="18" icon="solar:twitter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="transition-colors hover:text-orange-300" href="#">
<iconify-icon height="18" icon="solar:global-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</footer>
</main>
</div>

    </>
  );
}
