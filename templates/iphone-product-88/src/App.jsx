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



        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .scale-in, .reveal-text').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-xs font-light tracking-wide text-[#e8e8edcc]">
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
<iconify-icon height="18" icon="lucide:apple" width="18"></iconify-icon>
</a>
<div className="hidden md:flex space-x-8">
<a className="hover:text-white transition-colors" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Mac</a>
<a className="hover:text-white transition-colors" href="#">iPad</a>
<a className="hover:text-white transition-colors" href="#">iPhone</a>
<a className="hover:text-white transition-colors" href="#">Watch</a>
<a className="hover:text-white transition-colors" href="#">Vision</a>
<a className="hover:text-white transition-colors" href="#">AirPods</a>
</div>
<div className="flex gap-4">
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
<iconify-icon height="16" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
<iconify-icon height="16" icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<div className="sticky top-12 z-40 bg-black/70 backdrop-blur-xl border-b border-white/10">
<div className="max-w-[980px] mx-auto px-4 h-14 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">iPhone 17 Pro</h2>
<div className="flex items-center gap-6 text-xs">
<a className="text-[#86868b] hover:text-white transition-colors hidden sm:block" href="#">Overview</a>
<a className="text-[#86868b] hover:text-white transition-colors hidden sm:block" href="#">Specs</a>
<a className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-3 py-1 rounded-full transition-colors font-normal" href="#">Buy</a>
</div>
</div>
</div>

<section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden pt-20">
<div className="text-center z-10 fade-up active delay-100">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-2">iPhone 17 Pro</h1>
<p className="text-xl md:text-2xl text-[#86868b] font-medium tracking-tight">Titanium. Perfection.</p>
</div>

<div className="relative mt-12 w-64 h-[500px] md:w-80 md:h-[600px] rounded-[50px] border-[6px] border-[#444] shadow-2xl scale-in delay-300 bg-black overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621330396167-e41485e8d9d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[2s]"></div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 flex items-center justify-center gap-2 px-2 transition-all duration-300 hover:w-48 hover:h-10 cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>

<div className="absolute inset-0 rounded-[42px] border border-white/20 pointer-events-none"></div>
<div className="titanium-shine pointer-events-none"></div>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-4 fade-up delay-700">
<p className="text-[#86868b] text-lg font-medium">From $999 or $41.62/mo. for 24 mo.</p>
<button className="bg-[#0071e3] text-white px-6 py-2.5 rounded-full text-base font-normal hover:bg-[#0077ed] transition-colors">Buy</button>
</div>
</section>

<section className="bg-[#101010] py-32 overflow-hidden">
<div className="max-w-[980px] mx-auto px-6">
<div className="mb-32">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.1] reveal-text">
                    Forged in titanium.<br/>
                    Lighter. Stronger.<br/>
                    Pro to the core.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-black rounded-3xl overflow-hidden h-[500px] relative group fade-up">
<div className="absolute inset-0 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-50"></div>
</div>
<div className="absolute bottom-8 left-8 z-10">
<p className="text-[#86868b] text-sm font-semibold mb-1">DESIGN</p>
<h3 className="text-3xl font-semibold tracking-tight text-white">Refined finish.</h3>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full blur-3xl opacity-40 group-hover:scale-125 transition-transform duration-1000"></div>
<div className="absolute top-1/4 right-0 w-full h-full border-t border-l border-white/10 rounded-tl-[100px] opacity-20"></div>
</div>

<div className="bg-black rounded-3xl overflow-hidden h-[500px] relative group fade-up delay-200">
<img alt="Display" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-8 left-8 z-10">
<p className="text-[#86868b] text-sm font-semibold mb-1">DISPLAY</p>
<h3 className="text-3xl font-semibold tracking-tight text-white">Tougher than ever.</h3>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-32 relative">
<div className="max-w-[980px] mx-auto px-6 text-center">
<div className="fade-up">
<p className="text-[#86868b] text-xl font-medium mb-4">A19 Pro Chip</p>
<div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
<div className="absolute inset-0 border border-white/20 rounded-xl bg-neutral-900/50 backdrop-blur-sm"></div>
<span className="text-white font-semibold text-xl z-10">A19</span>
<span className="absolute -bottom-2 text-[10px] text-[#86868b] uppercase tracking-widest font-bold">Pro</span>

<div className="absolute inset-0 overflow-hidden rounded-xl">
<div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
</div>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
                    A monster win for gaming.
                </h2>
<p className="text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed">
                    The biggest redesign in the history of Apple GPUs. A19 Pro features an all-new class of architecture that provides improved graphics performance and efficiency.
                </p>
</div>
</div>
</section>

<section className="bg-[#101010] py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 fade-up">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#f5f5f7]">
                    Camera Control.<br/>
<span className="text-[#86868b]">Capture the moment.</span>
</h2>
<div className="mt-8 md:mt-0 max-w-sm">
<p className="text-[#86868b] text-lg">Now you can take the perfect photo or video in record time without touching the screen.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-black rounded-[30px] h-[500px] relative overflow-hidden group border border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-2 mb-2 text-yellow-500">
<iconify-icon icon="lucide:aperture" width="20"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-wide">48MP Main</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight">More detail. More color.</h3>
</div>
</div>

<div className="bg-black rounded-[30px] h-[500px] relative overflow-hidden group border border-white/5 flex flex-col items-center justify-center p-8 text-center">
<div className="w-40 h-40 rounded-full border-2 border-white/10 flex items-center justify-center mb-8 relative">
<div className="w-32 h-32 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#333] to-[#000]"></div>
</div>

<div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full"></div>
</div>
<h3 className="text-5xl font-semibold tracking-tighter mb-2">5x</h3>
<p className="text-[#86868b] font-medium">Optical Zoom</p>
<p className="mt-4 text-sm text-[#86868b] leading-snug">With the longest optical zoom in iPhone ever, you can frame the perfect closeup from farther away.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black">
<div className="max-w-[980px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div className="fade-up">
<p className="text-[#86868b] text-sm font-semibold mb-2">ACTION BUTTON</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Get in on the <br/>action.</h2>
<p className="text-[#86868b] text-lg mb-8 leading-relaxed">
                    The all-new Action button is a fast track to your favorite feature. Once you set the one you want, just press and hold to launch the action.
                </p>

<div className="bg-[#1c1c1e] p-1 rounded-2xl inline-flex flex-col gap-1 w-full max-w-xs">
<div className="flex items-center gap-3 p-3 bg-[#2c2c2e] rounded-xl cursor-pointer hover:bg-[#3a3a3c] transition-colors group">
<div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="lucide:bell-off" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Silent Mode</span>
<div className="ml-auto w-4 h-4 rounded-full border border-white/20 group-hover:bg-white/20"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-[#2c2c2e] transition-colors group">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:camera" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Camera</span>
<div className="ml-auto w-4 h-4 rounded-full border border-white/20 group-hover:bg-white/20"></div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-[#2c2c2e] transition-colors group">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="lucide:flashlight" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Flashlight</span>
<div className="ml-auto w-4 h-4 rounded-full border border-white/20 group-hover:bg-white/20"></div>
</div>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center fade-up delay-200">

<div className="w-4 h-80 bg-neutral-800 rounded-full relative shadow-[0_0_50px_rgba(255,255,255,0.1)]">

<div className="absolute top-12 -left-1 w-1 h-10 bg-orange-500/80 rounded-l-md shadow-[0_0_15px_orange]"></div>
<div className="absolute top-32 -left-1 w-1 h-16 bg-neutral-600 rounded-l-md"></div>
<div className="absolute top-52 -left-1 w-1 h-16 bg-neutral-600 rounded-l-md"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50 rounded-full"></div>
</div>

<div className="absolute top-[148px] left-[calc(50%-20px)] w-20 h-20 border border-orange-500/30 rounded-full animate-[ping_2s_infinite]"></div>
</div>
</div>
</section>

<section className="bg-[#101010] py-24 border-t border-white/5">
<div className="max-w-[980px] mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-12 text-center">Which iPhone is right for you?</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">

<div className="flex flex-col items-center gap-4 fade-up">
<div className="w-24 h-36 bg-neutral-800 rounded-2xl border-4 border-neutral-700 shadow-xl mb-4"></div>
<h3 className="text-xl font-semibold">iPhone 17 Pro</h3>
<p className="text-xs text-[#86868b]">The ultimate iPhone.</p>
<p className="text-sm mt-2">From $999</p>
<button className="bg-[#0071e3] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#0077ed] transition-colors mt-2">Buy</button>
</div>

<div className="flex flex-col items-center gap-4 fade-up delay-100">
<div className="w-24 h-36 bg-neutral-800 rounded-2xl border-4 border-neutral-600 shadow-xl mb-4"></div>
<h3 className="text-xl font-semibold">iPhone 17</h3>
<p className="text-xs text-[#86868b]">A total powerhouse.</p>
<p className="text-sm mt-2">From $799</p>
<button className="bg-[#0071e3] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#0077ed] transition-colors mt-2">Buy</button>
</div>

<div className="hidden md:flex flex-col items-center gap-4 fade-up delay-200">
<div className="w-24 h-36 bg-neutral-800 rounded-2xl border-4 border-neutral-500 shadow-xl mb-4"></div>
<h3 className="text-xl font-semibold">iPhone SE</h3>
<p className="text-xs text-[#86868b]">Serious power. Serious value.</p>
<p className="text-sm mt-2">From $429</p>
<button className="bg-[#0071e3] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#0077ed] transition-colors mt-2">Buy</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#101010] text-[#86868b] text-xs py-10 border-t border-white/10">
<div className="max-w-[980px] mx-auto px-4">
<div className="mb-6 space-y-2 border-b border-white/10 pb-6">
<p>1. Pricing determines final trade-in value.</p>
<p>2. iPhone 17 Pro and iPhone 17 Pro Max are splash, water, and dust resistant.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
<div className="flex flex-col gap-2">
<h4 className="text-white font-semibold mb-1">Shop and Learn</h4>
<a className="hover:underline" href="#">Store</a>
<a className="hover:underline" href="#">Mac</a>
<a className="hover:underline" href="#">iPad</a>
<a className="hover:underline" href="#">iPhone</a>
<a className="hover:underline" href="#">Watch</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-white font-semibold mb-1">Wallet</h4>
<a className="hover:underline" href="#">Wallet</a>
<a className="hover:underline" href="#">Apple Card</a>
<a className="hover:underline" href="#">Apple Pay</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-white font-semibold mb-1">Account</h4>
<a className="hover:underline" href="#">Manage Your Apple ID</a>
<a className="hover:underline" href="#">Apple Store Account</a>
<a className="hover:underline" href="#">iCloud.com</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-white font-semibold mb-1">Entertainment</h4>
<a className="hover:underline" href="#">Apple One</a>
<a className="hover:underline" href="#">Apple TV+</a>
<a className="hover:underline" href="#">Apple Music</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-white font-semibold mb-1">Apple Values</h4>
<a className="hover:underline" href="#">Accessibility</a>
<a className="hover:underline" href="#">Environment</a>
<a className="hover:underline" href="#">Privacy</a>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p>Copyright © 2025 Apple Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:underline" href="#">Privacy Policy</a>
<span className="text-neutral-600">|</span>
<a className="hover:underline" href="#">Terms of Use</a>
<span className="text-neutral-600">|</span>
<a className="hover:underline" href="#">Sales and Refunds</a>
</div>
<p>United States</p>
</div>
</div>
</footer>


    </>
  );
}
