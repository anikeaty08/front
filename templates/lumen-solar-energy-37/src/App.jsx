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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/95', 'bg-white/80');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        function toggleMenu() {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                document.body.style.overflow = 'hidden';
                mobileBtn.innerHTML = '<i data-lucide="x" class="w-5 h-5" stroke-width="1.5"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = '';
                mobileBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5" stroke-width="1.5"></i>';
            }
            lucide.createIcons(); // Re-render icons after changing HTML
        }

        mobileBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(menuOpen) toggleMenu();
            });
        });

        // FAQ Accordion
        const faqBtns = document.querySelectorAll('.faq-btn');
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.icon');
                const isExpanded = !content.classList.contains('hidden');

                // Close all others
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-btn .icon').forEach(i => {
                    i.classList.remove('rotate-45');
                    i.classList.add('text-gray-500');
                    i.classList.remove('text-gray-900');
                });
                document.querySelectorAll('.faq-item').forEach(item => item.classList.replace('bg-white', 'bg-gray-50/50'));

                if (!isExpanded) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-45');
                    icon.classList.remove('text-gray-500');
                    icon.classList.add('text-gray-900');
                    btn.closest('.faq-item').classList.replace('bg-gray-50/50', 'bg-white');
                }
            });
        });

        // Calculator Mockup Logic
        const slider = document.getElementById('bill-slider');
        const sliderFill = document.getElementById('slider-fill');
        const sliderThumb = document.getElementById('slider-thumb');
        const billDisplay = document.getElementById('bill-display');
        const estSize = document.getElementById('est-size');
        const estSavings = document.getElementById('est-savings');

        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            const min = e.target.min;
            const max = e.target.max;
            const percentage = ((val - min) / (max - min)) * 100;
            
            // Update visual slider
            sliderFill.style.width = `${percentage}%`;
            sliderThumb.style.left = `${percentage}%`;
            
            // Format displays
            billDisplay.textContent = `$${val}`;
            
            // Simple calculation logic for mockup
            const sizeCalc = (val / 150) * 6.5;
            estSize.textContent = `${sizeCalc.toFixed(1)} kW`;
            
            const savingsCalc = (val / 150) * 28500;
            estSavings.textContent = `$${Math.round(savingsCalc).toLocaleString()}`;
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3 cursor-pointer">
<div className="relative w-8 h-8 flex flex-col items-center justify-center">
<div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-0 z-10"></div>
<div className="w-4 h-4 bg-gray-900 rotate-45 absolute bottom-0 z-0"></div>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-gray-900">LUMEN</span>
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase mt-0.5">Solar</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#solutions">Solutions</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#why-solar">Why Solar</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#about">About us</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#resources">Resources</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors group" href="#quote">
                        Get your quote
                        <i className="w-4 h-4 ml-2 text-yellow-400 group-hover:rotate-45 transition-transform duration-500" data-lucide="sun" strokeWidth="1.5"></i>
</a>
<button className="md:hidden p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors" id="mobile-menu-btn">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 hidden flex-col pt-24 px-6 pb-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<a className="text-2xl font-medium text-gray-900 tracking-tight mobile-link" href="#how-it-works">How it works</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight mobile-link" href="#solutions">Solutions</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight mobile-link" href="#why-solar">Why Solar</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight mobile-link" href="#about">About us</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight mobile-link" href="#resources">Resources</a>
<div className="pt-8">
<a className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-gray-900 text-white text-lg font-medium" href="#quote">
                    Get your quote
                    <i className="w-5 h-5 ml-2 text-yellow-400" data-lucide="sun" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

<div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-12">
<span className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Clean energy. Better living.
                    </span>
<h1 className="text-6xl md:text-7xl lg:text-[5rem] leading-[1.1] font-medium tracking-tight text-gray-900 mb-6">
                        Power your home. Brighten <span className="font-serif-custom italic font-normal text-gray-800">the future.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
                        Beautifully designed solar solutions for modern homes. Save more, live better, and create a cleaner tomorrow.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-medium hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group" href="#quote">
                        Get your personalized quote
                        <i className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-gray-500 mt-0.5">
<span className="text-gray-900">4.9/5</span> from 1,200+ homeowners
                            </span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">

<div className="absolute top-0 right-10 w-64 h-[28rem] bg-blue-100/60 rounded-t-full -z-10 blur-2xl lg:blur-none"></div>
<div className="absolute bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full -z-10"></div>
<div className="absolute top-1/2 -left-12 w-24 h-24 dot-pattern -z-10 opacity-60"></div>

<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 aspect-[4/3] lg:aspect-auto lg:h-[600px] w-full">
<img alt="Modern home with integrated solar panels" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-2xl shadow-xl shadow-gray-200/50 max-w-xs border border-gray-100 animate-fade-in-up">
<div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-green-700 mb-5 bg-green-50/50">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Made for your home</h3>
<p className="text-base text-gray-500 font-light leading-relaxed">
                            Custom solar systems designed around your lifestyle and energy needs.
                        </p>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-20 mt-12 lg:mt-0">

<svg className="w-full h-12 lg:h-20 text-[#132A23] fill-current -mb-1" preserveaspectratio="none" viewbox="0 0 1440 80">
<path d="M0,80 C320,0 1120,0 1440,80 L1440,80 L0,80 Z"></path>
</svg>
<section className="bg-[#132A23] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

<div className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-yellow-400 mb-6">
<i className="w-6 h-6" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Lower your bills</h4>
<p className="text-base text-gray-300 font-light">and save more instantly</p>
</div>

<div className="flex flex-col items-center text-center pt-8 sm:pt-0 px-4">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-green-400 mb-6">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Clean energy</h4>
<p className="text-base text-gray-300 font-light">for a better planet</p>
</div>

<div className="flex flex-col items-center text-center pt-8 lg:pt-0 px-4">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-blue-400 mb-6">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Reliable systems</h4>
<p className="text-base text-gray-300 font-light">built to last decades</p>
</div>

<div className="flex flex-col items-center text-center pt-8 lg:pt-0 px-4">
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-orange-400 mb-6">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Increase your</h4>
<p className="text-base text-gray-300 font-light">home's market value</p>
</div>
</div>
</section>
</div>

<section className="py-24 lg:py-32 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">The Process</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">Simple, transparent, <br/><span className="font-serif-custom italic text-gray-800">and stress-free.</span></h3>
<p className="text-lg text-gray-600 font-light">We handle everything from permits to installation, ensuring a smooth transition to clean energy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white z-10">
<i className="w-8 h-8 text-gray-900" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">1. Consultation</h4>
<p className="text-base text-gray-500 font-light px-4">We analyze your energy needs and roof suitability.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white z-10">
<i className="w-8 h-8 text-gray-900" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">2. Custom Design</h4>
<p className="text-base text-gray-500 font-light px-4">Engineers create a tailored system for maximum efficiency.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white z-10">
<i className="w-8 h-8 text-gray-900" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">3. Installation</h4>
<p className="text-base text-gray-500 font-light px-4">Certified professionals install your system typically in one day.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white z-10">
<i className="w-8 h-8 text-yellow-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">4. Activation</h4>
<p className="text-base text-gray-500 font-light px-4">Turn on the power and start watching your savings grow.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100" id="solutions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">A complete energy ecosystem.</h2>
<p className="text-lg text-gray-600 font-light">More than just panels. We provide an integrated solution to generate, store, and manage your power efficiently.</p>
</div>
<a className="text-base font-medium text-gray-900 flex items-center hover:text-gray-600 transition-colors" href="#">
                    Explore all solutions <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-64 overflow-hidden relative">
<img alt="Solar Panels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Sleek Solar Roofs</h3>
<p className="text-base text-gray-500 font-light mb-6">Low-profile, high-efficiency panels that blend seamlessly with your home's architecture.</p>
<div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center p-8">

<div className="w-24 h-40 bg-gray-800 rounded-lg relative shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-8 h-2 bg-gray-400 rounded-t-sm"></div>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
<div className="absolute bottom-8 left-4 right-4 h-1 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
<div className="absolute bottom-12 left-4 right-4 h-1 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Smart Battery Backup</h3>
<p className="text-base text-gray-500 font-light mb-6">Store excess energy for use at night or during grid outages. True energy independence.</p>
<div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-64 overflow-hidden relative">
<img alt="Smart App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">Monitoring App</h3>
<p className="text-base text-gray-500 font-light mb-6">Track your energy production, consumption, and savings in real-time from anywhere.</p>
<div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            Learn more <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="why-solar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">The numbers make sense.</h2>
<p className="text-lg text-gray-600 font-light mb-10 leading-relaxed">
                        Switching to solar isn't just about the environment; it's a smart financial decision. Lock in your energy rates and increase your property value simultaneously.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-4 h-4" data-lucide="trending-down" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-1">Slash energy bills</h4>
<p className="text-base text-gray-500 font-light">Reduce your reliance on the grid and save up to 80% on monthly electricity costs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="award" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-1">25-Year Warranty</h4>
<p className="text-base text-gray-500 font-light">Industry-leading protection on equipment, performance, and labor for peace of mind.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
<i className="w-4 h-4" data-lucide="piggy-bank" strokeWidth="2"></i>
</div>
</div>
<div>
<h4 className="text-xl font-medium text-gray-900 mb-1">Tax Incentives</h4>
<p className="text-base text-gray-500 font-light">Take advantage of federal and state tax credits that cover a significant portion of the cost.</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-50"></div>
<h3 className="text-2xl font-medium tracking-tight mb-8 relative z-10">Average Homeowner Impact</h3>
<div className="grid grid-cols-2 gap-8 relative z-10">
<div>
<div className="text-5xl font-medium text-yellow-400 mb-2 tracking-tight">$35k+</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Lifetime Savings</div>
</div>
<div>
<div className="text-5xl font-medium text-green-400 mb-2 tracking-tight">4.1%</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Home Value Increase</div>
</div>
<div>
<div className="text-5xl font-medium text-white mb-2 tracking-tight">6-8</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Years to Payback</div>
</div>
<div>
<div className="text-5xl font-medium text-white mb-2 tracking-tight">100%</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Clean Energy</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-800 relative z-10">
<div className="flex items-center justify-between">
<span className="text-base text-gray-400">Based on national averages.</span>
<a className="text-base font-medium text-white hover:text-yellow-400 transition-colors flex items-center" href="#calculator">
                                Calculate yours <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full">
<img alt="Close up of modern solar panels" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center max-w-4xl mx-auto px-4">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">Designed to disappear.</h2>
<p className="text-xl text-gray-200 font-light mb-10 max-w-2xl mx-auto">Our monocrystalline panels feature an all-black design with invisible mounting hardware, complementing your roof rather than cluttering it.</p>
<div className="flex flex-wrap justify-center gap-6">
<div className="flex items-center text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
<i className="w-5 h-5 mr-3 text-green-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">All-black aesthetic</span>
</div>
<div className="flex items-center text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
<i className="w-5 h-5 mr-3 text-green-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Low-profile mounting</span>
</div>
<div className="flex items-center text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
<i className="w-5 h-5 mr-3 text-green-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-base font-medium">Weather resistant</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="calculator">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">See your potential savings.</h2>
<p className="text-lg text-gray-600 font-light">Adjust the slider to match your current average monthly electricity bill.</p>
</div>
<div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-100 p-8 md:p-12">
<div className="mb-10">
<div className="flex justify-between items-end mb-6">
<label className="text-base font-medium text-gray-700">Average Monthly Bill</label>
<div className="text-3xl font-medium tracking-tight text-gray-900 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100" id="bill-display">$150</div>
</div>

<div className="relative w-full h-2 bg-gray-200 rounded-full outline-none">
<div className="absolute top-0 left-0 h-full bg-gray-900 rounded-full w-[40%]" id="slider-fill"></div>
<input className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" id="bill-slider" max="500" min="50" type="range" value="150"/>

<div className="absolute top-1/2 -mt-3 w-6 h-6 bg-white border-2 border-gray-900 rounded-full shadow-md pointer-events-none left-[40%] -ml-3 transition-all duration-75" id="slider-thumb"></div>
</div>
<div className="flex justify-between mt-3 text-sm font-medium text-gray-400">
<span>$50</span>
<span>$500+</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-10">
<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Estimated System Size</div>
<div className="text-3xl font-medium tracking-tight text-gray-900" id="est-size">6.5 kW</div>
</div>
<div className="bg-[#132A23] rounded-2xl p-6 text-white shadow-lg">
<div className="text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">Estimated 25-Year Savings</div>
<div className="text-4xl font-medium tracking-tight text-yellow-400" id="est-savings">$28,500</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto">
                        Get a detailed proposal
                    </button>
<p className="text-sm text-gray-500 mt-4 font-light">Estimates are based on average sunlight and rates in your area.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Don't just take our word for it.</h2>
<p className="text-lg text-gray-600 font-light">Join thousands of homeowners who have made the switch to Lumen Solar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-700 font-light mb-6 line-clamp-4">"The entire process was incredibly smooth. The installation team was professional, clean, and fast. My latest electricity bill was actually negative!"</p>
<div className="flex items-center gap-4">
<img alt="Sarah J." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-base font-medium text-gray-900">Sarah Jenkins</div>
<div className="text-sm text-gray-500">Austin, TX</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-700 font-light mb-6 line-clamp-4">"I was skeptical about the design, but the all-black panels look fantastic on our modern home. The app is also super addictive for tracking our production."</p>
<div className="flex items-center gap-4">
<img alt="Michael R." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-base font-medium text-gray-900">Michael Ross</div>
<div className="text-sm text-gray-500">Denver, CO</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-700 font-light mb-6 line-clamp-4">"Lumen handled all the permitting and HOA approvals. I didn't have to lift a finger. Highly recommend them if you want a hassle-free solar installation."</p>
<div className="flex items-center gap-4">
<img alt="Elena M." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-base font-medium text-gray-900">Elena Martinez</div>
<div className="text-sm text-gray-500">Phoenix, AZ</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-12 text-center">Common questions.</h2>
<div className="space-y-4">

<div className="border border-gray-200 rounded-2xl overflow-hidden faq-item bg-gray-50/50">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none faq-btn">
<span className="text-lg font-medium text-gray-900">Do solar panels work on cloudy days?</span>
<i className="w-5 h-5 text-gray-500 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 hidden faq-content text-base text-gray-600 font-light leading-relaxed">
                        Yes. While they are most efficient in direct sunlight, solar panels still generate electricity on cloudy days by capturing diffused sunlight. Our modern monocrystalline panels are highly efficient even in low-light conditions.
                    </div>
</div>

<div className="border border-gray-200 rounded-2xl overflow-hidden faq-item bg-gray-50/50">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none faq-btn">
<span className="text-lg font-medium text-gray-900">What happens if I sell my house?</span>
<i className="w-5 h-5 text-gray-500 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 hidden faq-content text-base text-gray-600 font-light leading-relaxed">
                        Studies show that homes with solar energy systems sell for more than homes without them. If you buy your system outright or with a loan, it adds value to your property. If you lease, the contract can usually be transferred to the new owner.
                    </div>
</div>

<div className="border border-gray-200 rounded-2xl overflow-hidden faq-item bg-gray-50/50">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none faq-btn">
<span className="text-lg font-medium text-gray-900">How long does installation take?</span>
<i className="w-5 h-5 text-gray-500 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-6 pb-5 hidden faq-content text-base text-gray-600 font-light leading-relaxed">
                        The physical installation usually only takes 1-2 days. However, the entire process, including site assessment, custom design, permitting, and final inspection by your utility company, typically takes 4-8 weeks.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#132A23] -z-20"></div>

<div className="absolute inset-0 opacity-10 -z-10 dot-pattern"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
<i className="w-8 h-8 text-yellow-400" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Ready to brighten <span className="font-serif-custom italic font-normal text-yellow-400">your future?</span></h2>
<p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
                Get a free, no-obligation quote and see exactly how much you can save by making the switch to clean energy today.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="px-8 py-4 rounded-full bg-yellow-400 text-gray-900 text-lg font-medium hover:bg-yellow-300 transition-colors w-full sm:w-auto" href="#quote">
                    Get your personalized quote
                </a>
<a className="px-8 py-4 rounded-full border border-white/30 text-white text-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center" href="tel:1-800-LUMEN">
<i className="w-5 h-5 mr-2" data-lucide="phone" strokeWidth="1.5"></i> Talk to an expert
                </a>
</div>
</div>
</section>

<footer className="bg-gray-900 pt-20 pb-10 text-gray-400 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="relative w-8 h-8 flex flex-col items-center justify-center">
<div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-0 z-10"></div>
<div className="w-4 h-4 bg-white rotate-45 absolute bottom-0 z-0"></div>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-white">LUMEN</span>
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase mt-0.5">Solar</span>
</div>
</div>
<p className="text-base font-light mb-6 max-w-sm">
                        Building a cleaner tomorrow through beautifully designed, high-efficiency solar solutions for modern homes.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-white" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Solutions</h4>
<ul className="space-y-4 text-base font-light">
<li><a className="hover:text-white transition-colors" href="#">Solar Roof</a></li>
<li><a className="hover:text-white transition-colors" href="#">Battery Storage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Smart App</a></li>
<li><a className="hover:text-white transition-colors" href="#">EV Charging</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Company</h4>
<ul className="space-y-4 text-base font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Support</h4>
<ul className="space-y-4 text-base font-light">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Referral Program</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm font-light">© 2024 Lumen Solar Inc. All rights reserved.</p>
<div className="flex space-x-6 text-sm font-light">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
