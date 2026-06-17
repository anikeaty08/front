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



      lucide.createIcons();
    


      document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById('product-scroll-container');
        const cards = document.querySelectorAll('.product-card');
        if (!container || cards.length === 0) return;

        if (window.innerWidth >= 768) {
          cards.forEach(card => {
            card.classList.remove('scale-[0.97]', 'opacity-[0.85]');
          });
          return;
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scale-[1.06]', 'shadow-[0_12px_40px_rgba(1,126,255,0.10)]', 'border-[#017eff]/15', 'opacity-100');
              entry.target.classList.remove('scale-[0.97]', 'shadow-none', 'border-gray-100', 'opacity-[0.85]');
            } else {
              entry.target.classList.remove('scale-[1.06]', 'shadow-[0_12px_40px_rgba(1,126,255,0.10)]', 'border-[#017eff]/15', 'opacity-100');
              entry.target.classList.add('scale-[0.97]', 'shadow-none', 'border-gray-100', 'opacity-[0.85]');
            }
          });
        }, {
          root: container,
          rootMargin: '-10% 0px -10% 0px',
          threshold: 0.7
        });

        cards.forEach(card => observer.observe(card));
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
      

<div className="w-full py-2 px-4 flex justify-center items-center text-center bg-[#f8f8fa] border-b border-gray-100">
<p className="text-xs md:text-sm font-normal text-[#292e4c]">
<span className="md:hidden">
          Need help? Text us:
          <a className="underline font-medium underline-offset-2 ml-1" href="#">
            +1 (972) 919-0219
          </a>
</span>
<span className="hidden md:inline">
          Need help? Text us, and a team member will reply in mins.
          <a className="underline font-medium ml-1 underline-offset-2 hover:text-[#017eff] transition-colors" href="#">
            +1 (972) 919-0219
          </a>
</span>
</p>
</div>

<nav className="bg-white px-4 md:px-8 h-16 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
<div className="w-1/3 flex justify-start">
<button className="p-2 -ml-2 text-[#292e4c] hover:bg-gray-50 rounded-full transition-colors focus:outline-none">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
<div className="w-1/3 flex justify-center">
<a className="flex-shrink-0 transition-opacity hover:opacity-80" href="#">
<img alt="Direct Peptides" className="h-5 w-auto" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
</div>
<div className="w-1/3 flex justify-end gap-1">
<button className="hidden md:block p-2 text-[#292e4c] hover:bg-gray-50 rounded-full transition-colors focus:outline-none">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
</button>
<button className="p-2 -mr-2 text-[#292e4c] hover:bg-gray-50 rounded-full transition-colors relative focus:outline-none">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-bag"></i>
<div className="absolute top-1 right-0 bg-[#017eff] text-white text-xs h-4 w-4 rounded-full flex items-center justify-center font-medium border-2 border-white">
            0
          </div>
</button>
</div>
</nav>

<div className="w-full bg-white border-b border-gray-100 overflow-hidden py-3">
<div className="animate-marquee">
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-[#9394a1] font-normal">
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="shield-check"></i>
            Manufactured in USA
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="microscope"></i>
            Third-party batch tested
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="truck"></i>
            Fast discreet shipping
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="headphones"></i>
            24/7 dedicated support
          </div>
</div>
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-[#9394a1] font-normal">
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="shield-check"></i>
            Manufactured in USA
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="microscope"></i>
            Third-party batch tested
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="truck"></i>
            Fast discreet shipping
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="headphones"></i>
            24/7 dedicated support
          </div>
</div>
</div>
</div>

<main className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-10">
<h1 className="text-[28px] md:text-5xl font-semibold text-[#292e4c] tracking-[-0.03em] font-heading mb-2 leading-[1.1]">
        Direct-access
        <br/>
        laboratory peptides
      </h1>
<div className="grid grid-cols-2 gap-3 md:gap-5">

<div className="bg-[#fafafa] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col relative h-[200px] md:h-[260px] w-full group shadow-sm border border-gray-100">
<div className="p-4 md:p-6 flex flex-col items-start z-20 w-full relative h-[45%]">
<h2 className="font-heading text-base md:text-xl font-medium text-[#292e4c] mb-0.5 tracking-tight leading-tight">
              Made in the
              <span className="text-[#017eff]">USA</span>
</h2>
<p className="text-xs md:text-sm text-[#9394a1] font-normal leading-tight">
              No outsourcing, ever.
            </p>
<a className="mt-3 bg-[#017eff] text-white text-[11px] font-medium px-2 py-1.5 rounded-full inline-flex items-center gap-1 w-max" href="#">
              Shop Now
              <div className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center">
<i className="w-2.5 h-2.5 stroke-[2.5]" data-lucide="chevron-right"></i>
</div>
</a>
</div>
<div className="absolute right-0 bottom-0 w-[55%] h-[60%] md:w-[60%] md:h-[90%] z-10 pointer-events-none">
<img alt="Vial" className="absolute bottom-0 right-0 w-full h-full object-contain object-right-bottom transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064ad93f-4750-48ed-9c24-9177bc3f4335_800w.png"/>
</div>
</div>

<div className="bg-[#fafafa] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col relative h-[200px] md:h-[260px] w-full group shadow-sm border border-gray-100">
<div className="opacity-[0.04] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg\')', backgroundSize: '60px'}}></div>
<div className="p-4 md:p-6 flex flex-col items-start z-20 w-full relative pr-8 h-[45%]">
<h2 className="font-heading text-base md:text-xl font-medium text-[#292e4c] mb-0.5 tracking-tight leading-tight">
              Batch Produced,
              <br className="block md:hidden"/>
              Batch Tested
            </h2>
<p className="text-xs md:text-sm text-[#9394a1] font-normal leading-tight">
              COAs available for each batch.
            </p>
<a className="text-[11px] inline-flex items-center gap-1 font-medium text-white bg-[#017eff] w-max rounded-full mt-3 pt-1.5 pr-2 pb-1.5 pl-2 -translate-x-1 translate-y-8" href="#">
              Learn More
              <div className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center">
<i className="w-2.5 h-2.5 stroke-[2.5]" data-lucide="chevron-right"></i>
</div>
</a>
</div>
<div className="absolute right-0 bottom-0 w-[50%] h-[65%] md:w-[70%] md:h-[95%] z-10 pointer-events-none">
<img alt="Phone" className="absolute bottom-0 right-0 w-full h-full object-contain object-right-bottom drop-shadow-xl transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/SPBQYXIBH1Ef7F7XbGwZfFxIgg.png"/>
</div>
</div>
</div>
<div className="mt-3 bg-[#f8f8fa] border border-[#292e4c]/[0.06] rounded-xl py-3 px-4 flex justify-center w-full">
<span className="inline-flex items-center gap-2 font-medium text-[11px] text-[#292e4c]/40 uppercase tracking-[0.08em] text-center">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="flask-round"></i>
          For laboratory research use only — not for human consumption.
        </span>
</div>

</main>

<div className="max-w-[1024px] mx-auto px-4 md:px-6 space-y-6">

<div className="pt-6 pb-4 text-left">
<h2 className="font-heading text-2xl md:text-3xl font-medium text-[#292e4c] mb-4 md:mb-6 tracking-tight">
          Explore our products
        </h2>
<div className="-mx-4 md:mx-0 px-[calc(50vw-130px)] md:px-0 flex md:grid md:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none pb-8 pt-2" id="product-scroll-container">
<div className="product-card snap-center shrink-0 w-[260px] md:w-auto bg-[#fafafa] border rounded-2xl md:rounded-3xl p-5 md:p-6 relative h-[210px] md:h-[250px] flex overflow-hidden group hover:shadow-[0_12px_40px_rgba(1,126,255,0.10)] hover:border-[#017eff]/15 md:scale-100 md:opacity-100" style={{transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.4s ease'}}>
<div className="flex flex-col justify-between items-start z-10 w-3/5 h-full">
<div>
<span className="text-xs font-medium text-[#017eff]/50 uppercase tracking-widest block mb-1">
                  Recovery
                </span>
<h3 className="font-heading text-lg md:text-xl font-medium text-[#292e4c] leading-tight tracking-tight mb-1">
                  BPC-157
                </h3>
<div className="flex items-baseline gap-1 text-[#292e4c]">
<span className="text-xs font-normal">from</span>
<span className="text-sm font-medium">$39</span>
</div>
</div>
<button className="bg-[#017eff] hover:bg-[#0066cc] text-white px-4 py-1.5 md:py-2 rounded-full text-xs font-medium flex items-center gap-1 transition-all active:scale-95">
                Shop
                <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-right"></i>
</button>
</div>
<div className="absolute right-[0%] bottom-[0%] w-[65%] h-[80%] flex items-end justify-end pointer-events-none">
<img alt="BPC-157" className="object-contain object-bottom w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png"/>
</div>
</div>
<div className="product-card snap-center shrink-0 w-[260px] md:w-auto bg-[#fafafa] border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 relative h-[210px] md:h-[250px] flex overflow-hidden group hover:shadow-[0_12px_40px_rgba(1,126,255,0.10)] hover:border-[#017eff]/15 scale-[0.97] opacity-[0.85] md:scale-100 md:opacity-100" style={{transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.4s ease'}}>
<div className="flex flex-col justify-between items-start z-10 w-3/5 h-full">
<div className="">
<span className="text-xs font-medium text-[#017eff]/50 uppercase tracking-widest block mb-1">
                  Blend
                </span>
<h3 className="font-heading text-lg md:text-xl font-medium text-[#292e4c] leading-tight tracking-tight mb-1">
                  BPC-157 + TB-500
                </h3>
<div className="flex items-baseline gap-1 text-[#292e4c]">
<span className="text-xs font-normal">from</span>
<span className="text-sm font-medium">$99</span>
</div>
</div>
<button className="bg-[#017eff] hover:bg-[#0066cc] text-white px-4 py-1.5 md:py-2 rounded-full text-xs font-medium flex items-center gap-1 transition-all active:scale-95">
                Shop
                <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-right"></i>
</button>
</div>
<div className="absolute right-[0%] bottom-[0%] w-[65%] h-[80%] flex items-end justify-end pointer-events-none">
<img alt="Blend" className="object-contain object-bottom w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"/>
</div>
</div>
<div className="product-card snap-center shrink-0 w-[260px] md:w-auto bg-[#fafafa] border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 relative h-[210px] md:h-[250px] flex overflow-hidden group hover:shadow-[0_12px_40px_rgba(1,126,255,0.10)] hover:border-[#017eff]/15 scale-[0.97] opacity-[0.85] md:scale-100 md:opacity-100" style={{transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.4s ease'}}>
<div className="flex flex-col justify-between items-start z-10 w-3/5 h-full">
<div>
<span className="text-xs font-medium text-[#017eff]/50 uppercase tracking-widest block mb-1">
                  Blend
                </span>
<h3 className="font-heading text-lg md:text-xl font-medium text-[#292e4c] leading-tight tracking-tight mb-1">
                  CJC-1295 + Ipamorelin
                </h3>
<div className="flex items-baseline gap-1 text-[#292e4c]">
<span className="text-xs font-normal">from</span>
<span className="text-sm font-medium">$89</span>
</div>
</div>
<button className="bg-[#017eff] hover:bg-[#0066cc] text-white px-4 py-1.5 md:py-2 rounded-full text-xs font-medium flex items-center gap-1 transition-all active:scale-95">
                Shop
                <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-right"></i>
</button>
</div>
<div className="absolute right-[0%] bottom-[0%] w-[65%] h-[80%] flex items-end justify-end pointer-events-none">
<img alt="Blend" className="object-contain object-bottom w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png"/>
</div>
</div>
<div className="product-card snap-center shrink-0 w-[260px] md:w-auto bg-[#fafafa] border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-6 relative h-[210px] md:h-[250px] flex overflow-hidden group hover:shadow-[0_12px_40px_rgba(1,126,255,0.10)] hover:border-[#017eff]/15 scale-[0.97] opacity-[0.85] md:scale-100 md:opacity-100" style={{transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.4s ease'}}>
<div className="flex flex-col justify-between items-start z-10 w-3/5 h-full">
<div>
<span className="text-xs font-medium text-[#017eff]/50 uppercase tracking-widest block mb-1">
                  Growth
                </span>
<h3 className="font-heading text-lg md:text-xl font-medium text-[#292e4c] leading-tight tracking-tight mb-1">
                  Tesamorelin
                </h3>
<div className="flex items-baseline gap-1 text-[#292e4c]">
<span className="text-xs font-normal">from</span>
<span className="text-sm font-medium">$79</span>
</div>
</div>
<button className="bg-[#017eff] hover:bg-[#0066cc] text-white px-4 py-1.5 md:py-2 rounded-full text-xs font-medium flex items-center gap-1 transition-all active:scale-95">
                Shop
                <i className="w-3 h-3 stroke-[2]" data-lucide="chevron-right"></i>
</button>
</div>
<div className="absolute right-[0%] bottom-[0%] w-[65%] h-[80%] flex items-end justify-end pointer-events-none">
<img alt="Tesamorelin" className="object-contain object-bottom w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ea59d50-b436-44ec-af35-5f2e13e48e78_800w.png"/>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">

<div className="bg-[#282d49] rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-sm group border border-white/5">
<div className="absolute -right-[15%] -bottom-[15%] w-[120%] md:w-[95%] z-0 pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105">
<img alt="Chemical Compound" className="w-full h-auto object-cover opacity-90" src="https://framerusercontent.com/images/7J0jBeVzjtC34NSerXOtD0nfY.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#282d49] via-[#282d49]/80 to-transparent z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#282d49]/40 to-transparent z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-[340px] flex flex-col items-start">
<h3 className="text-[#017eff] font-medium text-xs tracking-widest uppercase mb-4">
              Order with confidence
            </h3>
<h2 className="font-heading text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-5">
              No more guessing<br/>games.
            </h2>
<p className="text-base text-gray-300 font-normal leading-relaxed mb-8 pr-4">
              US-made, third-party batch tested for guaranteed purity. Elevate
              your research today.
            </p>
<a className="bg-[#017eff] hover:bg-[#0066cc] text-white pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium flex items-center gap-3 w-fit transition-all active:scale-95 shadow-[0_4px_14px_0_rgba(1,126,255,0.39)]" href="#">
              Shop Collection
              <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-transform hover:translate-x-0.5">
<i className="w-4 h-4 stroke-[1.5] text-white" data-lucide="chevron-right"></i>
</div>
</a>
</div>
</div>

<div className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[380px] group shadow-sm">
<div className="absolute right-[-10%] bottom-[-10%] w-[60%] md:w-[55%] z-0 pointer-events-none opacity-[0.03] transition-transform duration-1000 group-hover:scale-105">
<img alt="Logo Mark" className="w-full h-auto object-cover" src="https://framerusercontent.com/images/9clPMCZNzJ6NZO4m6bAxXYfD3c.png"/>
</div>
<div className="relative z-10 max-w-[320px]">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#292e4c]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="microscope"></i>
</div>
<h3 className="font-heading text-2xl md:text-3xl font-medium text-[#292e4c] tracking-tight mb-4 leading-tight">
              COA Documentation
            </h3>
<p className="text-sm text-[#9394a1] leading-relaxed font-normal mb-8">
              Manufactured in U.S. laboratories through advanced solid-phase
              synthesis, each batch is verified by HPLC, mass spectrometry, and
              backed by Certificates of Analysis confirming ≥99% purity.
            </p>
<a className="text-[#017eff] font-medium text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all" href="#">
              View Sample COA
              <i className="w-4 h-4 stroke-[2]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="pt-12 pb-10">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-[#292e4c] tracking-tight mb-8 text-center">
          How It Works
        </h2>
<div className="grid md:grid-cols-3 gap-5">
<div className="bg-[#fafafa] border border-gray-100 rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-sm transition-shadow">
<div className="p-8 flex flex-col items-start h-full">
<div className="w-8 h-8 rounded-full bg-[#292e4c] text-white flex items-center justify-center text-sm font-medium mb-5">
                1
              </div>
<h3 className="font-heading text-xl font-medium text-[#292e4c] mb-2 tracking-tight">
                Precision Synthesis
              </h3>
<p className="text-sm text-[#9394a1] leading-relaxed font-normal mb-8">
                Made in a controlled, U.S based facility under strict
                manufacturing standards.
              </p>
<div className="mt-auto w-full flex justify-center pt-4">
<img className="w-full max-w-[160px] h-auto object-contain mix-blend-multiply" src="https://framerusercontent.com/images/RXZqa2MimRE1Gek6LZBX1DlnU.png"/>
</div>
</div>
</div>
<div className="bg-[#fafafa] border border-gray-100 rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-sm transition-shadow">
<div className="p-8 flex flex-col items-start h-full">
<div className="w-8 h-8 rounded-full bg-[#292e4c] text-white flex items-center justify-center text-sm font-medium mb-5">
                2
              </div>
<h3 className="font-heading text-xl font-medium text-[#292e4c] mb-2 tracking-tight">
                Verified Purity
              </h3>
<p className="text-sm text-[#9394a1] leading-relaxed font-normal mb-8">
                Every batch is third-party tested with HPLC and MS to confirm
                chemical integrity.
              </p>
<div className="mt-auto w-full flex justify-center pt-4">
<img className="w-full max-w-[140px] h-auto object-contain mix-blend-multiply" src="https://framerusercontent.com/images/pmcOgm8JFbBzpUOMTRczT3mKQ.png"/>
</div>
</div>
</div>
<div className="bg-[#fafafa] border border-gray-100 rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-sm transition-shadow">
<div className="p-8 flex flex-col items-start h-full">
<div className="w-8 h-8 rounded-full bg-[#292e4c] text-white flex items-center justify-center text-sm font-medium mb-5">
                3
              </div>
<h3 className="font-heading text-xl font-medium text-[#292e4c] mb-2 tracking-tight">
                Same-Day Fulfillment
              </h3>
<p className="text-sm text-[#9394a1] leading-relaxed font-normal mb-8">
                Products are dispatched same-day from our U.S. facility.
              </p>
<div className="mt-auto w-full flex justify-center pt-4">
<img className="w-full max-w-[160px] h-auto object-contain mix-blend-multiply" src="https://framerusercontent.com/images/jBZkkZAb0U5dnFrnusbZuscd0YQ.png"/>
</div>
</div>
</div>
</div>
</div>

<div className="pt-6 pb-16">
<h2 className="font-heading text-2xl md:text-3xl font-medium text-[#292e4c] tracking-tight mb-6 text-center md:text-left">
          Frequently Asked Questions
        </h2>
<div className="space-y-0">
<div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer group hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
<span className="font-heading text-base md:text-lg font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
              What are peptides and how do they work?
            </span>
<i className="w-5 h-5 text-gray-400 group-hover:text-[#017eff] transition-colors stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer group hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
<span className="font-heading text-base md:text-lg font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
              Do these products come with instructions?
            </span>
<i className="w-5 h-5 text-gray-400 group-hover:text-[#017eff] transition-colors stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer group hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
<span className="font-heading text-base md:text-lg font-medium text-[#292e4c] tracking-tight group-hover:text-[#017eff] transition-colors">
              How long do products take to deliver?
            </span>
<i className="w-5 h-5 text-gray-400 group-hover:text-[#017eff] transition-colors stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-12 px-4 md:px-6">
<div className="max-w-[1024px] mx-auto bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
<div className="space-y-4">
<div className="w-10 h-10">
<img alt="Logo" className="w-full h-full object-contain" src="https://framerusercontent.com/images/FU2XOfjCkf6Kq1IlaYWG4ug5nY.png"/>
</div>
<h3 className="font-heading text-2xl font-medium tracking-tight text-[#292e4c] leading-tight">
              Verified compounds.
              <br/>
              Ready to ship.
            </h3>
</div>
<div className="text-left md:text-right self-start md:self-end">
<p className="text-sm text-[#9394a1] font-normal mb-1">
              Need help? Text us, and a team member will reply in minutes.
            </p>
<a className="font-heading text-xl md:text-2xl font-medium tracking-tight text-[#017eff] hover:text-[#0066cc] transition-colors" href="#">
              +1 (972) 919-0219
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-[#9394a1] font-normal gap-4 mb-8">
<p>© DirectPeptides 2025. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-[#292e4c] transition-colors" href="#">
              Privacy Policy
            </a>
<div className="w-px h-3 bg-gray-300"></div>
<a className="hover:text-[#292e4c] transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
<div className="pt-6 border-t border-gray-100 space-y-4">
<p className="text-xs text-[#9394a1] font-normal leading-relaxed text-left">
<strong className="font-medium text-[#9394a1]">
              Research Use Only:
            </strong>
            All products from Direct Peptides are intended solely for laboratory
            research purposes and are not for human or animal consumption. These
            materials are for in vitro research only and must be handled by
            qualified professionals in controlled lab environments. By
            purchasing, the buyer agrees to use these products in compliance
            with all applicable laws and regulations.
          </p>
<p className="text-xs text-[#9394a1] font-normal leading-relaxed text-left">
            The statements made on this website have not been evaluated by the
            U.S. Food and Drug Administration, the products offered are not
            intended to diagnose, treat, cure, or prevent any disease. Direct
            Peptides is not a compounding pharmacy or chemical compounding
            facility as defined under Section 503A of the Federal Food, Drug,
            and Cosmetic Act, and all products are sold strictly for research
            purposes only and are not for human or animal consumption.
          </p>
</div>
</div>
</div>



    </>
  );
}
