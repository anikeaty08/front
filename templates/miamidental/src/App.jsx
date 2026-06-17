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



      document.querySelectorAll('.before-after-slider').forEach(slider => {
          let isDown = false;
          const move = (e) => {
              if (!isDown) return;
              const rect = slider.getBoundingClientRect();
              const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
              const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
              slider.style.setProperty('--position', `${percent}%`);
          };
          slider.addEventListener('mousedown', () => isDown = true);
          slider.addEventListener('touchstart', () => isDown = true, {passive: true});
          window.addEventListener('mouseup', () => isDown = false);
          window.addEventListener('touchend', () => isDown = false);
          window.addEventListener('mousemove', move);
          window.addEventListener('touchmove', move, {passive: true});
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
      

<div className="w-full bg-zinc-900 py-2 px-4 flex items-center justify-center relative z-50">
<span className="text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-center">
        Dental Pearl Miami
      </span>
</div>

<header className="w-full border-b border-zinc-100 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-sm">
<div className="flex h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 items-center justify-between">
<a className="block hover:opacity-90 transition-opacity" href="#">
<img alt="Dental Pearl Miami Logo" className="h-10 md:h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcef91e0-b5fd-4388-bdc3-7dca42faabb1_320w.png"/>
</a>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-1 text-[#FF5C00]">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold text-zinc-600 ml-1">200+ Reviews</span>
</div>
<a className="hover:bg-[#FF5C00]/90 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white bg-[#FF5C00] rounded-[32px] py-2 sm:py-2.5 px-4 sm:px-6 shadow-md shadow-[#FF5C00]/20" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" target="_blank">
            Book Free Consult
          </a>
</div>
</div>
</header>
<main>

<section className="sm:px-6 py-10 lg:py-16 w-full pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">

<div className="flex flex-col items-start text-left w-full lg:col-span-7">

<div className="flex flex-col gap-4 w-full mb-6">
<div className="flex flex-wrap items-center justify-start gap-3">
<div className="bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-[32px] px-3 py-1.5 inline-flex items-center gap-2">
<div className="relative flex h-2 w-2 shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C00]"></span>
</div>
<p className="text-xs sm:text-sm font-medium text-zinc-900">
<span className="text-[#FF5C00] font-semibold">28 of 30</span> promotional spots claimed
                  </p>
</div>
</div>
</div>

<div className="flex flex-col gap-3 w-full mb-6">
<h2 className="text-[#FF5C00] font-semibold tracking-wider uppercase text-xs sm:text-sm">
                Premium Non-Prep Veneers
              </h2>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.05]">
                YOUR PERFECT SMILE.
                <br/>
<span className="text-[#FF5C00]">NO DRILLING.</span>
</h1>
</div>

<div className="flex flex-col w-full mb-8">
<div className="flex items-center justify-between px-1 mb-3">
<span className="text-sm md:text-base font-medium text-zinc-900">
                  Real Patient Transformation
                </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
                  Swipe to compare
                </span>
</div>
<div className="aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden before-after-slider group cursor-ew-resize select-none bg-zinc-900 w-full border-zinc-200 border rounded-[32px] relative shadow-sm" style={{'--position': '49.14383561643836%'}}>
<img alt="Macro Close-up of Healthy Human Smile" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d0bb2d0-6fc8-48bd-85fe-f9bf6f7bdaae_1600w.png"/>
<div className="absolute inset-0 w-full h-full image-before border-r border-white/50 group-hover:border-white transition-colors pointer-events-none">
<img alt="Macro View of Discolored Teeth and Diastema" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/131d686c-50ac-4005-bdcb-0783bfc07028_1600w.png"/>
<div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-[32px] text-xs md:text-sm font-medium border border-zinc-800 tracking-wide uppercase text-white">
                    Before
                  </div>
</div>
<div className="slider-handle absolute top-0 bottom-0 w-0 flex items-center justify-center pointer-events-none -translate-x-1/2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-zinc-100 text-zinc-900">
<iconify-icon className="w-5 h-5 text-zinc-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-[#FF5C00] text-white px-3 py-1.5 rounded-[32px] text-xs md:text-sm font-medium shadow-md tracking-wide uppercase pointer-events-none">
                  After
                </div>
</div>
</div>

<ul className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-4 w-full items-start justify-start mb-8">
<li className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-zinc-600 font-semibold">Free Consult ($250 Value)</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-zinc-900 font-semibold">50% Off Treatment</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm md:text-base text-zinc-600 font-semibold">Zero Pain, 100% Reversible</span>
</li>
</ul>

<div className="w-full lg:hidden">
<a className="hover:bg-[#FF5C00]/90 transition-colors flex items-center justify-center gap-2 text-base font-medium text-white bg-[#FF5C00] w-full rounded-[32px] py-4 px-6 shadow-md shadow-[#FF5C00]/20" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" target="_blank">
                SECURE YOUR 50% OFF SPOT
              </a>

<div className="flex items-center justify-center gap-1.5 mt-3">
<div className="flex text-[#FF5C00]">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-600">4.9/5 from 200+ Reviews</span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full lg:sticky lg:top-28 flex flex-col gap-6">
<div className="p-8 md:p-10 flex flex-col text-center bg-white border-zinc-200 border rounded-[32px] shadow-xl shadow-zinc-200/40 items-center justify-center w-full relative overflow-hidden" id="lead-form">

<div className="absolute top-0 left-0 w-full h-2 bg-[#FF5C00]"></div>
<div className="bg-red-50 border border-red-100 rounded-[32px] px-3 py-1.5 inline-flex items-center gap-2 mb-6 w-fit mx-auto">
<iconify-icon className="w-4 h-4 text-red-500" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-xs md:text-sm font-medium text-red-600">
                  Only 2 promotional spots remaining
                </p>
</div>
<div className="mb-8 w-full">
<h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight mb-2">Secure Your Spot</h2>
<p className="text-sm md:text-base text-zinc-500">
                  Claim your free consultation and lock in your 50% discount today.
                </p>
</div>
<div className="w-full">
<a className="hover:bg-[#FF5C00]/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base font-medium text-white bg-[#FF5C00] w-full rounded-[32px] py-4 px-6 shadow-md shadow-[#FF5C00]/20" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" target="_blank">
                  RESERVE NOW
                </a>

<div className="flex items-center justify-center gap-1.5 mt-4">
<div className="flex text-[#FF5C00]">
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-4 h-4" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-600">4.9/5 from 200+ Reviews</span>
</div>
</div>
<p className="text-xs md:text-sm text-zinc-400 w-full flex items-center justify-center gap-1.5 mt-6">
<iconify-icon className="w-4 h-4 shrink-0" icon="solar:lock-password-linear"></iconify-icon>
                100% Secure &amp; Confidential
              </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-zinc-900 text-white border-y border-zinc-800">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              The Ugly Truth About Traditional Veneers
            </h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Don't let a dentist destroy your natural teeth. Understand the vital difference between invasive traditional veneers and our 100% preservative technique.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="bg-red-500/5 border border-red-500/20 rounded-[32px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1.5 bg-red-500"></div>
<h3 className="text-xl md:text-2xl font-medium text-red-400 flex items-center gap-3">
<iconify-icon className="w-8 h-8" icon="solar:close-circle-bold"></iconify-icon>
                Traditional Veneers
              </h3>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-1 w-6 h-6" icon="solar:danger-triangle-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">70% Enamel Loss:</span> Dentist heavily shaves natural teeth down to sensitive "shark teeth" pegs.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-1 w-6 h-6" icon="solar:danger-triangle-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">Painful &amp; Invasive:</span> Requires heavy drilling, needles, numbing, and leaves you in pain for days.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 shrink-0 mt-1 w-6 h-6" icon="solar:danger-triangle-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">Permanent Damage:</span> Irreversible destruction. You can never go back to your natural smile.</p>
</li>
</ul>
</div>

<div className="bg-[#FF5C00]/5 border border-[#FF5C00]/20 rounded-[32px] p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden shadow-2xl shadow-[#FF5C00]/5">
<div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF5C00]"></div>
<h3 className="text-xl md:text-2xl font-medium text-[#FF5C00] flex items-center gap-3">
<iconify-icon className="w-8 h-8" icon="solar:check-circle-bold"></iconify-icon>
                Our Non-Prep Veneers
              </h3>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5C00] shrink-0 mt-1 w-6 h-6" icon="solar:shield-check-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">100% Enamel Preserved:</span> Ultra-thin non-prep veneers are seamlessly bonded directly over your natural teeth.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5C00] shrink-0 mt-1 w-6 h-6" icon="solar:shield-check-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">Zero Pain, No Needles:</span> Absolutely no drills, no numbing shots, and zero post-procedure sensitivity.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF5C00] shrink-0 mt-1 w-6 h-6" icon="solar:shield-check-bold"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed"><span className="font-semibold text-white">100% Reversible:</span> Because we don't drill, your healthy natural smile remains perfectly safe underneath.</p>
</li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center">
<a className="hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-base font-medium text-zinc-900 bg-white w-full max-w-sm rounded-[32px] py-4 px-6 shadow-xl" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9" target="_blank">
              SAVE YOUR TEETH - BOOK CONSULT
            </a>

<div className="flex items-center justify-center gap-1.5 mt-4">
<div className="flex text-[#FF5C00]">
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-400">4.9/5 from 200+ Reviews</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-b border-zinc-100 py-20 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Real Patient Transformations
            </h2>
<p className="text-zinc-500 text-base max-w-xl mx-auto">
              Life-changing results without the drill. Compare the before and afters of our custom non-prep veneers.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<div className="aspect-[4/3] overflow-hidden before-after-slider group cursor-ew-resize select-none bg-zinc-900 w-full border-zinc-200 border rounded-[32px] relative shadow-sm" style={{'--position': '50.086286471083994%'}}>
<img alt="Macro View of a Healthy Smile and Teeth" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0219e3ae-0c4d-4bf6-b11a-c7aef59ec7d5_800w.png"/>
<div className="absolute inset-0 w-full h-full image-before border-r border-white/50 group-hover:border-white transition-colors pointer-events-none">
<img alt="Screenshot of teeth before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f1f324f-c40e-4cb5-8726-4201a821cc66_800w.png"/>
<div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-[32px] text-xs font-medium border border-zinc-800 tracking-wide uppercase text-white">
                    Before
                  </div>
</div>
<div className="slider-handle absolute top-0 bottom-0 w-0 flex items-center justify-center pointer-events-none -translate-x-1/2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-zinc-100 text-zinc-900">
<iconify-icon className="w-5 h-5 text-zinc-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-[#FF5C00] text-white px-3 py-1.5 rounded-[32px] text-xs font-medium shadow-md tracking-wide uppercase pointer-events-none">
                  After
                </div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="aspect-[4/3] overflow-hidden before-after-slider group cursor-ew-resize select-none bg-zinc-900 w-full border-zinc-200 border rounded-[32px] relative shadow-sm" style={{'--position': '50.77154610213705%'}}>
<img alt="Macro View of a Healthy Male Smile" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6334a9d5-eb96-4097-aae1-09790c760e60_800w.png"/>
<div className="absolute inset-0 w-full h-full image-before border-r border-white/50 group-hover:border-white transition-colors pointer-events-none">
<img alt="Extreme Close-up of Man Smiling Showing Teeth Before" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96ad6cdb-c9a4-4981-ace0-8a02c4c51f0b_800w.jpg"/>
<div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-[32px] text-xs font-medium border border-zinc-800 tracking-wide uppercase text-white">
                    Before
                  </div>
</div>
<div className="slider-handle absolute top-0 bottom-0 w-0 flex items-center justify-center pointer-events-none -translate-x-1/2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-zinc-100 text-zinc-900">
<iconify-icon className="w-5 h-5 text-zinc-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-[#FF5C00] text-white px-3 py-1.5 rounded-[32px] text-xs font-medium shadow-md tracking-wide uppercase pointer-events-none">
                  After
                </div>
</div>
</div>
<div className="flex flex-col gap-4 hidden lg:flex">
<div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-[32px] overflow-hidden shadow-sm border border-zinc-200 before-after-slider group cursor-ew-resize select-none" style={{'--position': '50%'}}>
<img alt="Extreme Close-up of Healthy White Teeth and Smile" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e07a0da-6a93-480f-84d8-e9cb64ccda6c_800w.png"/>
<div className="absolute inset-0 w-full h-full image-before border-r border-white/50 group-hover:border-white transition-colors pointer-events-none">
<img alt="Extreme Close-up of Yellowed Teeth and Gums" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1272e19-5be7-4c12-beb6-0d6c19b4a5f4_800w.png"/>
<div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-[32px] text-xs font-medium border border-zinc-800 tracking-wide uppercase text-white">
                    Before
                  </div>
</div>
<div className="slider-handle absolute top-0 bottom-0 w-0 flex items-center justify-center pointer-events-none -translate-x-1/2">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-zinc-100 text-zinc-900">
<iconify-icon className="w-5 h-5 text-zinc-500" icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-[#FF5C00] text-white px-3 py-1.5 rounded-[32px] text-xs font-medium shadow-md tracking-wide uppercase pointer-events-none">
                  After
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Your New Smile in 3 Steps
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative max-w-5xl mx-auto">
<div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-[1px] bg-zinc-200 -z-10"></div>
<div className="flex flex-col items-center text-center bg-white z-10">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-[#FF5C00] font-medium text-xl mb-6 shadow-sm">1</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Free Consultation</h3>
<p className="text-base text-zinc-500 leading-relaxed max-w-xs">3D scanning, goal discussion, and a digital animation of your future smile.</p>
</div>
<div className="flex flex-col items-center text-center bg-white z-10">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-[#FF5C00] font-medium text-xl mb-6 shadow-sm">2</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Custom Lab Work</h3>
<p className="leading-relaxed text-base text-zinc-500 max-w-xs">Our master ceramists handcraft your ultra-thin veneers in our in-house lab.</p>
</div>
<div className="flex flex-col items-center text-center bg-white z-10">
<div className="w-12 h-12 bg-[#FF5C00] text-white rounded-full flex items-center justify-center font-medium text-xl mb-6 shadow-md shadow-[#FF5C00]/20">3</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">Smile Placement</h3>
<p className="leading-relaxed text-base text-zinc-500 max-w-xs">Permanent cementation over your natural teeth. No numbing required.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-100 bg-zinc-50 py-20 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
              Transparent Pricing
            </h2>
<p className="text-zinc-500 text-base max-w-xl mx-auto">
              Prices reflect the 50% limited-time promotional discount. Flexible 0% interest financing options available.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-white flex flex-col h-full">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-4">Single Tooth</h3>
<div className="flex flex-col items-baseline gap-1 mb-8">
<div className="flex items-end gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">$299</span>
<span className="text-lg text-zinc-500 font-medium pb-1">/ tooth</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-zinc-400 line-through">Was $598</span>
<span className="text-sm font-semibold text-[#FF5C00]">OR as low as $49/mo</span>
</div>
</div>
<ul className="flex flex-col gap-4 flex-grow mb-8">
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Custom shade matching</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Premium E.max non-prep veneers</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">5-year warranty</span>
</li>
</ul>
<div className="w-full mt-auto">
<a className="block w-full py-3 px-4 bg-zinc-900 text-white text-center font-medium rounded-[32px] hover:bg-zinc-800 transition-colors" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9">Book Consult</a>
<div className="flex items-center justify-center gap-1.5 mt-3">
<div className="flex text-[#FF5C00]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
</div>
</div>
</div>

<div className="border-2 border-[#FF5C00] rounded-[32px] p-8 md:p-10 bg-white flex flex-col h-full relative md:-translate-y-4 shadow-xl shadow-[#FF5C00]/10">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5C00] text-white text-xs font-semibold px-5 py-1.5 rounded-[32px] uppercase tracking-wider whitespace-nowrap shadow-md">
                Most Popular
              </div>
<h3 className="text-sm font-medium text-[#FF5C00] uppercase tracking-wide mb-4">4 Teeth Mini-Makeover</h3>
<div className="flex flex-col items-baseline gap-1 mb-8">
<div className="flex items-end gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">$1199</span>
<span className="text-lg text-zinc-500 font-medium pb-1">total</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-zinc-400 line-through">Was $2398</span>
<span className="text-sm font-semibold text-[#FF5C00]">OR as low as $119/mo</span>
</div>
</div>
<ul className="flex flex-col gap-4 flex-grow mb-8">
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Covers upper front teeth</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Digital smile design</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-[#FF5C00]" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Premium E.max non-prep veneers</span>
</li>
</ul>
<div className="w-full mt-auto">
<a className="block w-full py-4 px-4 bg-[#FF5C00] text-white text-center font-medium rounded-[32px] hover:bg-[#FF5C00]/90 transition-colors shadow-lg shadow-[#FF5C00]/20" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9">Claim 50% Off Spot</a>
<div className="flex items-center justify-center gap-1.5 mt-3">
<div className="flex text-[#FF5C00]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
</div>
</div>
</div>

<div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-white flex flex-col h-full">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-4">6 Teeth Full Smile</h3>
<div className="flex flex-col items-baseline gap-1 mb-8">
<div className="flex items-end gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">$1699</span>
<span className="text-lg text-zinc-500 font-medium pb-1">total</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm text-zinc-400 line-through">Was $3398</span>
<span className="text-sm font-semibold text-[#FF5C00]">OR as low as $169/mo</span>
</div>
</div>
<ul className="flex flex-col gap-4 flex-grow mb-8">
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Complete smile coverage</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Full bite alignment check</span>
</li>
<li className="text-base text-zinc-600 flex items-center gap-3">
<iconify-icon className="w-5 h-5 text-zinc-300" icon="solar:check-circle-bold"></iconify-icon> <span className="font-semibold text-zinc-800">Premium E.max non-prep veneers</span>
</li>
</ul>
<div className="w-full mt-auto">
<a className="block w-full py-3 px-4 bg-zinc-900 text-white text-center font-medium rounded-[32px] hover:bg-zinc-800 transition-colors" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9">Book Consult</a>
<div className="flex items-center justify-center gap-1.5 mt-3">
<div className="flex text-[#FF5C00]"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-zinc-200 rounded-[32px] overflow-hidden shadow-sm">
<div className="p-8 md:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-8">Visit Our Miami Clinic</h2>
<div className="flex flex-col gap-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#FF5C00] w-6 h-6 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-zinc-900">Address</h4>
<p className="text-base text-zinc-500 mt-1">14771 Biscayne Blvd<br/>North Miami Beach, FL 33181</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#FF5C00] w-6 h-6 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<div>
<h4 className="text-base font-semibold text-zinc-900">Phone</h4>
<p className="text-base text-zinc-500 mt-1">(305) 560-0507</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-100 min-h-[350px] w-full h-full relative border-t lg:border-t-0 lg:border-l border-zinc-200">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.8757056888344!2d-80.1557359!3d25.912281399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad6d2e9e7147%3A0xd1ecb807271b2c38!2sDental%20Pearl!5e1!3m2!1sen!2sus!4v1776454932192!5m2!1sen!2sus" style={{border: '0'}}></iframe>
</div>
</div>
</section>

<section className="w-full bg-[#FF5C00] py-20 md:py-24 text-center px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">
          YOUR NEW SMILE IS ONE CLICK AWAY.
        </h2>
<div className="max-w-md mx-auto flex flex-col items-center">
<a className="w-full inline-flex items-center justify-center hover:bg-zinc-50 transition-colors shadow-black/10 text-base font-medium text-[#FF5C00] bg-white rounded-[32px] py-4 px-8 shadow-xl" href="https://booking.adit.com/69228dcd-8ec2-4a00-bdb4-b6656e402dc9">
            CLAIM FREE CONSULT + 50% OFF
          </a>

<div className="flex items-center justify-center gap-1.5 mt-5">
<div className="flex text-white">
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="w-5 h-5" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white/90 drop-shadow-sm">4.9/5 from 200+ Reviews</span>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-zinc-100 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-8 text-center">
<a className="block hover:opacity-90 transition-opacity" href="#">
<img alt="Dental Pearl Miami Logo" className="h-10 md:h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcef91e0-b5fd-4388-bdc3-7dca42faabb1_320w.png"/>
</a>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
<div className="text-sm text-zinc-400">
          © 2023 Dental Pearl Miami. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}
