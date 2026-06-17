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



      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {
        // Lower Product Gallery
        const gallery = document.getElementById('product-gallery');
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');
        const dots = document.querySelectorAll('.gallery-dot');

        if (gallery && prevBtn && nextBtn) {
          const scrollAmount = () => gallery.clientWidth;

          nextBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
          });

          prevBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
          });

          gallery.addEventListener('scroll', () => {
            const index = Math.round(gallery.scrollLeft / gallery.clientWidth);
            dots.forEach((dot, i) => {
              if (i === index) {
                dot.classList.remove('bg-gray-400');
                dot.classList.add('bg-gray-900');
              } else {
                dot.classList.remove('bg-gray-900');
                dot.classList.add('bg-gray-400');
              }
            });
          });
        }

        // Hero Slider
        const heroSlider = document.getElementById('hero-slider');
        const heroPrev = document.getElementById('hero-prev');
        const heroNext = document.getElementById('hero-next');
        const heroDots = document.querySelectorAll('.hero-dot');

        if (heroSlider && heroPrev && heroNext) {
          const heroScrollAmount = () => heroSlider.clientWidth;

          heroNext.addEventListener('click', () => {
            heroSlider.scrollBy({ left: heroScrollAmount(), behavior: 'smooth' });
          });

          heroPrev.addEventListener('click', () => {
            heroSlider.scrollBy({ left: -heroScrollAmount(), behavior: 'smooth' });
          });

          heroSlider.addEventListener('scroll', () => {
            const index = Math.round(heroSlider.scrollLeft / heroSlider.clientWidth);
            heroDots.forEach((dot, i) => {
              if (i === index) {
                dot.classList.remove('w-8', 'bg-white/30');
                dot.classList.add('w-12', 'bg-white');
              } else {
                dot.classList.remove('w-12', 'bg-white');
                dot.classList.add('w-8', 'bg-white/30');
              }
            });
          });

          heroDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
              heroSlider.scrollTo({ left: i * heroScrollAmount(), behavior: 'smooth' });
            });
          });
        }
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
      
<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6">
<button className="text-gray-900 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
<button className="hidden md:block text-gray-900 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="search"></i>
</button>
</div>
<a className="text-lg font-light tracking-widest uppercase absolute left-1/2 -translate-x-1/2" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Matouk
        </a>
<div className="flex items-center gap-6">
<button className="hidden md:block text-gray-900 hover:text-gray-600 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="user"></i>
</button>
<button className="text-gray-900 hover:text-gray-600 transition-colors relative">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-light">
              2
            </span>
</button>
</div>
</div>
</nav>
<main className="w-full pt-16">
<div className="relative w-full h-[65vh] lg:h-[85vh] bg-gray-100 overflow-hidden group">

<div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth" id="hero-slider">
<div className="flex-none w-full h-full snap-center relative">
<img alt="Modern Luxury Bedroom" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff6e1891-8af8-4b7c-a1ed-096717ec887d_3840w.jpg"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Duvet View" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Fabric Close Up" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Folded Sheets" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>
<div className="absolute bottom-10 left-6 md:bottom-16 md:left-12 text-white pointer-events-none">
<p className="text-base font-light tracking-widest uppercase mb-3 opacity-90">
            Signature Collection
          </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Lowell.
          </h1>
</div>
<div className="absolute inset-y-0 px-4 md:px-8 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
<button className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all" id="hero-prev">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all" id="hero-next">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
<div className="absolute bottom-10 right-6 md:bottom-16 md:right-12 flex gap-2 items-center z-10">
<div className="hero-dot w-12 h-0.5 bg-white transition-all cursor-pointer pointer-events-auto"></div>
<div className="hero-dot w-8 h-0.5 bg-white/30 hover:bg-white/60 transition-all cursor-pointer pointer-events-auto"></div>
<div className="hero-dot w-8 h-0.5 bg-white/30 hover:bg-white/60 transition-all cursor-pointer pointer-events-auto"></div>
<div className="hero-dot w-8 h-0.5 bg-white/30 hover:bg-white/60 transition-all cursor-pointer pointer-events-auto"></div>
</div>
</div>
<div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row">

<div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col">
<div className="py-24 px-8 md:px-16 flex flex-col items-center text-center bg-white">
<h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-gray-900" style={{fontFamily: '\'Playfair Display\', serif'}}>
              A single, perfect line.
            </h2>
<p className="text-xl md:text-2xl text-gray-500 font-thin max-w-2xl leading-relaxed">
              Lowell is the quintessential Matouk style. An elegant, 1-inch
              sateen tape detail traces the edges of our crisp, 600 thread count
              Milano percale. It is a study in restrained luxury, designed to
              frame your bed with architectural precision.
            </p>
</div>
<div className="w-full aspect-video bg-gray-100 overflow-hidden">
<img alt="Elegant Stacks of White Luxury Linens" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/553fa24f-1394-4869-b038-37dcf8896fc1_1600w.png"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
<div className="bg-white p-12 md:p-16 flex flex-col justify-center">
<i className="w-8 h-8 stroke-[1.5] mb-6 text-gray-400" data-lucide="leaf"></i>
<h3 className="text-2xl font-light tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Milano Percale
              </h3>
<p className="text-lg text-gray-500 font-thin leading-relaxed">
                Woven in Italy from the finest Egyptian cotton, our Milano
                percale offers a crisp, cool hand that only gets softer with
                time. The perfect canvas.
              </p>
</div>
<div className="bg-white p-12 md:p-16 flex flex-col justify-center">
<i className="w-8 h-8 stroke-[1.5] mb-6 text-gray-400" data-lucide="globe"></i>
<h3 className="text-2xl font-light tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Crafted in Fall River
              </h3>
<p className="text-lg text-gray-500 font-thin leading-relaxed">
                Every piece of Lowell is cut, sewn, and meticulously finished by
                our team of skilled artisans in our Massachusetts facility,
                ensuring flawless execution.
              </p>
</div>
</div>
<div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden group">
<div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth" id="product-gallery">
<div className="flex-none w-full h-full snap-center relative">
<img alt="Lowell Bed Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Folded Lowell Sheets" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Elegant White and Gray Bordered Pillowcase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92dc2538-c89d-40d4-beca-a40b175e8dfd_1600w.jpg"/>
</div>
<div className="flex-none w-full h-full snap-center relative">
<img alt="Modern White Pillowcase with Gray Border" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c7192c8-a59f-48c8-8a79-68636ab04ef5_1600w.jpg"/>
</div>
</div>
<div className="absolute inset-y-0 left-0 right-0 px-4 md:px-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<button className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 flex items-center justify-center text-gray-900 transition-all shadow-sm" id="gallery-prev">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<button className="pointer-events-auto w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 flex items-center justify-center text-gray-900 transition-all shadow-sm" id="gallery-next">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
<div className="gallery-dot w-1.5 h-1.5 rounded-full bg-gray-900 transition-colors"></div>
<div className="gallery-dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-colors"></div>
<div className="gallery-dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-colors"></div>
<div className="gallery-dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-colors"></div>
</div>
</div>
</div>

<div className="w-full lg:w-[50%] xl:w-[45%] bg-white border-l border-gray-200">
<div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] flex flex-col">

<div className="p-6 md:p-10 border-b border-gray-200 shrink-0 bg-white z-10 relative shadow-sm">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Shop the Lowell Style
              </h2>
<p className="text-base text-gray-500 font-thin mb-10 leading-relaxed max-w-xl">
                Personalize your Lowell bed. Choose a color and size to see how each piece fits together. Add what you need and shop the full coordinated look below.
              </p>
<div className="flex flex-col md:flex-row gap-10 md:gap-16">

<div className="flex-1">
<div className="flex items-baseline gap-2 mb-4">
<span className="text-base font-light text-gray-900">Color</span>
<span className="text-sm font-thin text-gray-500">Navy</span>
</div>
<div className="flex flex-wrap gap-3">
<button aria-label="Navy" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-gray-900 ring-offset-2 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#1a2a40'}}></span></button>
<button aria-label="White" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#f1f1f1'}}></span></button>
<button aria-label="Silver" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#b0b3b8'}}></span></button>
<button aria-label="Charcoal" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#4a4a4a'}}></span></button>
<button aria-label="Light Blue" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#a3c1d4'}}></span></button>
<button aria-label="Jade" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#5c8a7c'}}></span></button>
<button aria-label="Blush" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#e6c8c4'}}></span></button>
<button aria-label="Sand" className="relative w-9 h-9 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-2 flex items-center justify-center shrink-0 transition-all"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.125rem] rounded-full border-[2px]" style={{borderColor: '#d1bfae'}}></span></button>
</div>
</div>

<div className="flex-1 md:max-w-xs">
<div className="text-base font-light text-gray-900 mb-4">Size</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<button className="py-2.5 px-2 text-sm font-light border border-gray-200 bg-white text-gray-500 hover:text-gray-900 transition-colors">Twin</button>
<button className="py-2.5 px-2 text-sm font-light border border-gray-200 bg-white text-gray-500 hover:text-gray-900 transition-colors">Full</button>
<button className="py-2.5 px-2 text-sm font-light border border-gray-900 bg-white text-gray-900 transition-colors">Queen</button>
<button className="py-2.5 px-2 text-sm font-light border border-gray-200 bg-white text-gray-500 hover:text-gray-900 transition-colors">King</button>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-gray-50">

<div className="p-6 md:p-10 border-b border-gray-200 bg-white flex flex-col xl:flex-row gap-8">

<div className="flex-1 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 p-2">
<img alt="Flat Sheet" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 space-y-6">
<div>
<h3 className="text-2xl font-light tracking-tight text-gray-900 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Lowell Flat Sheet</h3>
<div className="text-base font-light text-gray-900">$295</div>
</div>
<div className="space-y-5">
<div>
<div className="flex items-baseline gap-2 mb-2"><span className="text-sm font-light text-gray-500">Color:</span><span className="text-sm font-light text-gray-900">Navy</span></div>
<div className="flex flex-wrap gap-2">
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-gray-900 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#1a2a40'}}></span></button>
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#f1f1f1'}}></span></button>
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#b0b3b8'}}></span></button>
</div>
</div>
<div>
<div className="text-sm font-light text-gray-500 mb-2">Size</div>
<div className="flex flex-wrap gap-2">
<button className="py-2 px-4 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors">Twin</button>
<button className="py-2 px-4 text-xs font-light border border-gray-900 text-gray-900 transition-colors">Full / Queen</button>
<button className="py-2 px-4 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors">King</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-full xl:w-64 shrink-0 flex flex-col justify-between pt-4 xl:pt-0 xl:border-l xl:border-gray-100 xl:pl-8">
<div className="space-y-6">
<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-light transition-colors group">
<i className="w-4 h-4 stroke-[1.5] text-gray-400 group-hover:text-gray-600" data-lucide="type"></i> Add a Monogram <i className="w-3 h-3 stroke-[1.5] opacity-50" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="flex gap-3 mt-8 xl:mt-auto">
<div className="flex items-center border border-gray-200 h-12 bg-white">
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="minus"></i></button>
<span className="w-6 text-center text-sm font-light">1</span>
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-gray-900 text-white text-sm font-light tracking-widest uppercase hover:bg-black transition-colors h-12">
                      Add to Bag
                    </button>
</div>
</div>
</div>

<div className="p-6 md:p-10 border-b border-gray-200 bg-white flex flex-col xl:flex-row gap-8">
<div className="flex-1 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 p-2">
<img alt="Fitted Sheet" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 space-y-6">
<div>
<h3 className="text-2xl font-light tracking-tight text-gray-900 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Lowell Fitted Sheet</h3>
<div className="text-base font-light text-gray-900">$295</div>
</div>
<div className="space-y-5">
<div>
<div className="flex items-baseline gap-2 mb-2"><span className="text-sm font-light text-gray-500">Color:</span><span className="text-sm font-light text-gray-900">Navy</span></div>
<div className="flex flex-wrap gap-2">
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-gray-900 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#1a2a40'}}></span></button>
</div>
</div>
<div>
<div className="text-sm font-light text-gray-500 mb-2">Size</div>
<div className="grid grid-cols-2 gap-2 max-w-xs">
<button className="py-2 px-3 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors text-center w-full">Twin 17"</button>
<button className="py-2 px-3 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors text-center w-full">Full 17"</button>
<button className="py-2 px-3 text-xs font-light border border-gray-900 text-gray-900 transition-colors text-center w-full">Queen 17"</button>
<button className="py-2 px-3 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors text-center w-full">King 17"</button>
<button className="py-2 px-3 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors text-center w-full col-span-2">California King 17"</button>
</div>
</div>
</div>
</div>
</div>
<div className="w-full xl:w-64 shrink-0 flex flex-col justify-between pt-4 xl:pt-0 xl:border-l xl:border-gray-100 xl:pl-8">
<div className="space-y-4">
<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-light transition-colors group">
<i className="w-4 h-4 stroke-[1.5] text-gray-400 group-hover:text-gray-600" data-lucide="type"></i> Add a Monogram <i className="w-3 h-3 stroke-[1.5] opacity-50" data-lucide="arrow-up-right"></i>
</button>
<p className="text-xs font-thin text-gray-400 leading-relaxed pt-2">
                      This item is made to order and requires 3-4 weeks lead time.
                    </p>
</div>
<div className="flex gap-3 mt-8 xl:mt-auto">
<div className="flex items-center border border-gray-200 h-12 bg-white">
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="minus"></i></button>
<span className="w-6 text-center text-sm font-light">1</span>
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-gray-900 text-white text-sm font-light tracking-widest uppercase hover:bg-black transition-colors h-12">
                      Add to Bag
                    </button>
</div>
</div>
</div>

<div className="p-6 md:p-10 border-b border-gray-200 bg-white flex flex-col xl:flex-row gap-8 relative z-0">
<div className="flex-1 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 p-2">
<img alt="Duvet Cover" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 space-y-6">
<div>
<h3 className="text-2xl font-light tracking-tight text-gray-900 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Lowell Duvet Cover</h3>
<div className="text-base font-light text-gray-900">$650</div>
</div>
<div className="space-y-5">
<div>
<div className="flex items-baseline gap-2 mb-2"><span className="text-sm font-light text-gray-500">Color:</span><span className="text-sm font-light text-gray-900">Navy</span></div>
<div className="flex flex-wrap gap-2">
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-gray-900 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#1a2a40'}}></span></button>
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-transparent hover:ring-gray-300 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#f1f1f1'}}></span></button>
</div>
</div>
<div>
<div className="text-sm font-light text-gray-500 mb-2">Size</div>
<div className="flex flex-wrap gap-2">
<button className="py-2 px-4 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors">Twin</button>
<button className="py-2 px-4 text-xs font-light border border-gray-900 text-gray-900 transition-colors">Full / Queen</button>
<button className="py-2 px-4 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors">King</button>
</div>
</div>
</div>
</div>
</div>
<div className="w-full xl:w-64 shrink-0 flex flex-col justify-between pt-4 xl:pt-0 xl:border-l xl:border-gray-100 xl:pl-8">
<div className="space-y-4">
<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-light transition-colors group">
<i className="w-4 h-4 stroke-[1.5] text-gray-400 group-hover:text-gray-600" data-lucide="type"></i> Add a Monogram <i className="w-3 h-3 stroke-[1.5] opacity-50" data-lucide="arrow-up-right"></i>
</button>

<div className="p-3 bg-gray-50/80 border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center p-1 shrink-0 shadow-sm">
<img alt="Comforter" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-50 grayscale" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-light text-gray-900">Add Montreux Comforter</span>
</div>
<div className="w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:border-gray-900 transition-all shrink-0">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="plus"></i>
</div>
</div>
</div>
<div className="flex gap-3 mt-8 xl:mt-auto">
<div className="flex items-center border border-gray-200 h-12 bg-white">
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="minus"></i></button>
<span className="w-6 text-center text-sm font-light">1</span>
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-gray-900 text-white text-sm font-light tracking-widest uppercase hover:bg-black transition-colors h-12">
                      Add to Bag
                    </button>
</div>
</div>
</div>

<div className="p-6 md:p-10 bg-white flex flex-col xl:flex-row gap-8">
<div className="flex-1 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 p-2">
<img alt="Pillow Cases" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c7192c8-a59f-48c8-8a79-68636ab04ef5_1600w.jpg"/>
</div>
<div className="flex-1 space-y-6">
<div>
<h3 className="text-2xl font-light tracking-tight text-gray-900 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>Lowell Pillow Case - Pair</h3>
<div className="text-base font-light text-gray-900">$125</div>
</div>
<div className="space-y-5">
<div>
<div className="flex items-baseline gap-2 mb-2"><span className="text-sm font-light text-gray-500">Color:</span><span className="text-sm font-light text-gray-900">Navy</span></div>
<div className="flex flex-wrap gap-2">
<button className="relative w-7 h-7 rounded-full bg-white ring-1 ring-gray-900 ring-offset-1 flex items-center justify-center shrink-0"><span className="w-full h-full rounded-full bg-white border border-gray-200"></span><span className="absolute inset-[0.1rem] rounded-full border-[1.5px]" style={{borderColor: '#1a2a40'}}></span></button>
</div>
</div>
<div>
<div className="text-sm font-light text-gray-500 mb-2">Size</div>
<div className="flex flex-wrap gap-2">
<button className="py-2 px-6 text-xs font-light border border-gray-900 text-gray-900 transition-colors">Standard</button>
<button className="py-2 px-6 text-xs font-light border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors">King</button>
</div>
</div>
</div>
</div>
</div>
<div className="w-full xl:w-64 shrink-0 flex flex-col justify-between pt-4 xl:pt-0 xl:border-l xl:border-gray-100 xl:pl-8">
<div className="space-y-4">
<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-light transition-colors group">
<i className="w-4 h-4 stroke-[1.5] text-gray-400 group-hover:text-gray-600" data-lucide="type"></i> Add a Monogram <i className="w-3 h-3 stroke-[1.5] opacity-50" data-lucide="arrow-up-right"></i>
</button>
<div className="p-3 bg-gray-50/80 border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-gray-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center p-1 shrink-0 shadow-sm">
<img alt="Pillow Insert" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-50 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c7192c8-a59f-48c8-8a79-68636ab04ef5_1600w.jpg"/>
</div>
<span className="text-xs font-light text-gray-900">Add Montreux Pillow</span>
</div>
<div className="w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:border-gray-900 transition-all shrink-0">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="plus"></i>
</div>
</div>
</div>
<div className="flex gap-3 mt-8 xl:mt-auto">
<div className="flex items-center border border-gray-200 h-12 bg-white">
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="minus"></i></button>
<span className="w-6 text-center text-sm font-light">1</span>
<button className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"><i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-gray-900 text-white text-sm font-light tracking-widest uppercase hover:bg-black transition-colors h-12">
                      Add to Bag
                    </button>
</div>
</div>
</div>

<div className="h-24 bg-gray-50"></div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
