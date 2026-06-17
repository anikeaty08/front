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

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('translate-x-full');
            if(menu.classList.contains('translate-x-full')) {
                btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6" stroke-width="1.5"></i>';
            } else {
                btn.innerHTML = '<i data-lucide="x" class="w-6 h-6" stroke-width="1.5"></i>';
            }
            lucide.createIcons();
        });

        // Close mobile menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('translate-x-full');
                btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6" stroke-width="1.5"></i>';
                lucide.createIcons();
            });
        });

        // FAQ Toggle function
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon-plus');
            
            // Close others (optional accordion behavior)
            /*
            document.querySelectorAll('.faq-content').forEach(el => {
                if(el !== content && !el.classList.contains('hidden')) {
                    el.classList.add('hidden');
                    el.previousElementSibling.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
                }
            });
            */

            content.classList.toggle('hidden');
            
            if(content.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(45deg)';
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
      

<nav className="absolute top-0 w-full z-50 py-6 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-3 z-50" href="#">
<div className="relative w-8 h-10 flex items-end">

<div className="absolute bottom-0 left-0 w-5 h-8 bg-[#829E95] rounded-t-full rounded-bl-md rounded-br-sm opacity-90"></div>
<div className="absolute bottom-0 left-3 w-5 h-6 bg-[#D48D75] rounded-t-full rounded-bl-sm rounded-br-md opacity-90 mix-blend-multiply"></div>
<div className="absolute top-0 left-1 w-3 h-3 bg-[#4A5A55] rounded-full"></div>
</div>
<div className="flex flex-col">
<span className="text-3xl font-medium tracking-tight text-[#2D332F] leading-none">bloom</span>
<span className="text-xs font-normal tracking-[0.2em] text-gray-500 mt-1">PRENATAL YOGA</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors relative flex flex-col items-center" href="#">
                    Home
                    <div className="w-1.5 h-1.5 bg-[#2D332F] rounded-full absolute -bottom-3"></div>
</a>
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors" href="#about">About</a>
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors" href="#classes">Classes</a>
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors" href="#benefits">Benefits</a>
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors" href="#reviews">Reviews</a>
<a className="text-lg font-normal hover:text-[#D48D75] transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4 z-50">
<a className="hidden md:flex items-center gap-2 bg-[#4A5A55] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#3d4a46] transition-colors" href="#book">
                    BOOK A PRIVATE CLASS <i className="w-4 h-4 ml-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="lg:hidden p-2 text-[#2D332F] hover:text-[#D48D75] transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-[#FAF7F2] z-40 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col pt-32 px-8" id="mobile-menu">
<a className="text-3xl font-medium mb-6 text-[#2D332F]" href="#">Home</a>
<a className="text-3xl font-medium mb-6 text-gray-500 hover:text-[#2D332F]" href="#about">About</a>
<a className="text-3xl font-medium mb-6 text-gray-500 hover:text-[#2D332F]" href="#classes">Classes</a>
<a className="text-3xl font-medium mb-6 text-gray-500 hover:text-[#2D332F]" href="#benefits">Benefits</a>
<a className="text-3xl font-medium mb-6 text-gray-500 hover:text-[#2D332F]" href="#reviews">Reviews</a>
<a className="text-3xl font-medium mb-10 text-gray-500 hover:text-[#2D332F]" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center gap-2 bg-[#4A5A55] text-white px-8 py-4 rounded-full text-lg font-medium w-full" href="#book">
                BOOK A CLASS <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<section className="relative min-h-screen pt-32 lg:pt-40 pb-0 overflow-hidden flex flex-col">
<div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-grow relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-0">

<div className="lg:col-span-5 flex flex-col justify-center pt-10 lg:pt-0 relative z-20">

<svg className="w-16 h-16 text-[#D48D75] mb-6" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 85V95M50 5V15M85 50H95M5 50H15M74.7487 74.7487L81.8198 81.8198M18.1802 18.1802L25.2513 25.2513M74.7487 25.2513L81.8198 18.1802M18.1802 81.8198L25.2513 74.7487M65 50C65 58.2843 58.2843 65 50 65C41.7157 65 35 58.2843 35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50Z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M50 40 L50 15 M30 50 L10 50 M70 50 L90 50" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M35 35 L20 20 M65 35 L80 20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<h1 className="text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-[#2D332F] mb-2">
                    Yoga.<br/>
                    Connection.<br/>
<span className="text-[#D48D75]">For this beautiful<br/>journey.</span>
</h1>
<p className="text-xl text-gray-600 mt-8 max-w-md font-light leading-relaxed">
                    Private prenatal yoga classes, tailored to support your body, your mind, and your baby.
                </p>
<div className="mt-12 flex items-center gap-4 cursor-pointer group w-max" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})">
<div className="w-10 h-10 rounded-full bg-[#D48D75]/20 flex items-center justify-center text-[#D48D75] group-hover:bg-[#D48D75] group-hover:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium tracking-[0.1em] text-gray-500 uppercase group-hover:text-[#2D332F] transition-colors">SCROLL TO EXPLORE</span>
</div>
</div>

<div className="lg:col-span-7 relative h-[50vh] lg:h-auto min-h-[500px] mt-10 lg:mt-0">
<div className="absolute top-0 right-0 lg:-right-[10%] w-full lg:w-[120%] h-full rounded-t-[200px] lg:rounded-t-full rounded-b-3xl lg:rounded-b-none overflow-hidden bg-white shadow-2xl">
<img alt="Pregnant woman practicing yoga" className="w-full h-full object-cover object-top opacity-90 scale-105 hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>

<div className="absolute top-10 left-0 lg:top-32 lg:-left-12 w-40 h-40 bg-transparent rounded-full flex items-center justify-center z-20 mix-blend-multiply">
<svg className="w-full h-full animate-[spin_30s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="curve"></path>
<text className="text-[9px] font-normal tracking-[0.3em] uppercase text-gray-600 fill-current">
<textpath href="#curve" startoffset="0%">FOR EVERY STAGE OF PREGNANCY •</textpath>
</text>
</svg>

<div className="absolute inset-0 flex items-center justify-center text-[#4A5A55]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="relative w-full mt-auto z-30 pt-20 lg:pt-0">

<div className="absolute bottom-0 left-0 w-[80%] h-full lg:h-[200px] overflow-hidden -z-10 hidden lg:block">
<svg className="absolute bottom-0 w-full h-full text-[#E6EBE6] fill-current" preserveaspectratio="none" viewbox="0 0 1000 200">
<path d="M0,200 L1000,200 L1000,100 C800,180 500,40 0,80 Z"></path>
</svg>
</div>

<div className="absolute bottom-0 left-0 w-full h-full bg-[#E6EBE6] -z-10 lg:hidden rounded-t-[40px]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 pb-10 lg:pb-12 pt-12 lg:pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 lg:pr-[30%]">

<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
<i className="w-6 h-6 text-[#4A5A55]" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-[#2D332F] mb-1">100% Personalized</h3>
<p className="text-base text-gray-500 font-light leading-relaxed">Classes designed around you.</p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
<i className="w-6 h-6 text-[#4A5A55]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-[#2D332F] mb-1">Safe &amp; Gentle</h3>
<p className="text-base text-gray-500 font-light leading-relaxed">Support for every stage of pregnancy.</p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
<i className="w-6 h-6 text-[#4A5A55]" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium text-[#2D332F] mb-1">Mind + Body</h3>
<p className="text-base text-gray-500 font-light leading-relaxed">Build strength, ease stress and connect within.</p>
</div>
</div>
</div>

<div className="lg:absolute bottom-0 right-0 lg:w-[28%] bg-[#F4E4DB] lg:rounded-tl-[80px] p-10 lg:p-14 z-40 h-auto lg:h-[280px] flex flex-col justify-end">
<i className="w-8 h-8 text-transparent stroke-[#2D332F] mb-6" data-lucide="heart" strokeWidth="1"></i>
<p className="text-2xl font-normal text-[#2D332F] leading-snug mb-8">
                    Personalized.<br/>Supportive.<br/>Just for you.
                </p>
<a className="flex items-center gap-2 text-sm font-medium tracking-[0.1em] text-[#2D332F] uppercase group w-max" href="#about">
                    LEARN MORE <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-40 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="organic-shape-1 bg-[#E6EBE6] absolute -inset-4 lg:-inset-8 -z-10"></div>
<img alt="Detail of hands resting on pregnant belly during yoga" className="w-full h-auto rounded-[40px] shadow-lg object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute -bottom-10 -right-10 bg-[#FAF7F2] p-8 rounded-[30px] shadow-xl max-w-xs hidden md:block border border-gray-100">
<p className="text-lg italic text-gray-600 font-light">"The connection you build now is the foundation for a lifetime."</p>
</div>
</div>
<div className="lg:pl-10">
<span className="text-sm font-medium tracking-[0.1em] text-[#D48D75] uppercase mb-4 block">Our Philosophy</span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-8 leading-tight">
                    Nurturing the mother,<br/>so she can nurture the child.
                </h2>
<div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
<p>
                        Pregnancy is a profound transformation. At Bloom, we believe in honoring this physical and emotional journey through mindful movement, conscious breathing, and deep relaxation.
                    </p>
<p>
                        Our private sessions provide a sanctuary where you can step away from the noise, tune into your body's changing needs, and foster a serene environment for your baby to grow. We focus on preparing you for birth and easing common discomforts.
                    </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-normal text-[#4A5A55] mb-2">500+</div>
<p className="text-base text-gray-500">Mothers supported</p>
</div>
<div>
<div className="text-4xl font-normal text-[#4A5A55] mb-2">10+</div>
<p className="text-base text-gray-500">Years of experience</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FAF7F2]" id="classes">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-sm font-medium tracking-[0.1em] text-[#D48D75] uppercase mb-4 block">How we support you</span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-6">Tailored to your journey</h2>
<p className="text-xl text-gray-600 font-light">Choose the environment that feels most comfortable and supportive for you right now.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-[40px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm hover:shadow-xl group">
<div className="w-16 h-16 rounded-full bg-[#E6EBE6] flex items-center justify-center mb-8 group-hover:bg-[#4A5A55] group-hover:text-white transition-colors text-[#4A5A55]">
<i className="w-7 h-7" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-[#2D332F] mb-4">In-Home Private</h3>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">Enjoy the ultimate comfort and convenience. We bring the studio experience to your living room, focusing entirely on your specific needs.</p>
<a className="inline-flex items-center text-[#D48D75] font-medium text-base hover:text-[#b5735c] transition-colors" href="#contact">
                        Learn details <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#4A5A55] rounded-[40px] p-10 hover:-translate-y-2 transition-transform duration-300 shadow-xl group relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 text-white">
<i className="w-7 h-7" data-lucide="video" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Virtual Sessions</h3>
<p className="text-lg text-[#E6EBE6] font-light mb-8 leading-relaxed">Connect from anywhere. Our virtual classes offer the same level of personalization and guidance, delivered through high-quality video call.</p>
<a className="inline-flex items-center text-white font-medium text-base hover:text-[#F4E4DB] transition-colors" href="#contact">
                        Book a session <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white rounded-[40px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 shadow-sm hover:shadow-xl group">
<div className="w-16 h-16 rounded-full bg-[#F4E4DB] flex items-center justify-center mb-8 group-hover:bg-[#D48D75] group-hover:text-white transition-colors text-[#D48D75]">
<i className="w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-[#2D332F] mb-4">Small Group Studio</h3>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">Join a community of other expectant mothers in our serene studio space. Classes are kept very small to ensure individual attention.</p>
<a className="inline-flex items-center text-[#4A5A55] font-medium text-base hover:text-[#2D332F] transition-colors" href="#contact">
                        View schedule <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden" id="benefits">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 relative order-2 lg:order-1">
<div className="organic-shape-2 bg-[#F4E4DB] absolute -inset-6 -z-10 opacity-70"></div>
<img alt="Serene pregnant woman in meditation pose" className="w-full rounded-[200px] rounded-bl-[40px] object-cover h-[600px] shadow-md" src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="lg:col-span-7 order-1 lg:order-2">
<span className="text-sm font-medium tracking-[0.1em] text-[#4A5A55] uppercase mb-4 block">The Benefits</span>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-12">More than just stretching.</h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">

<div>
<div className="w-12 h-12 rounded-2xl bg-[#E6EBE6] flex items-center justify-center text-[#4A5A55] mb-5">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-[#2D332F] mb-3">Relieve Discomfort</h4>
<p className="text-lg text-gray-600 font-light leading-relaxed">Alleviate backache, sciatica, and swelling through targeted movements and proper alignment techniques.</p>
</div>

<div>
<div className="w-12 h-12 rounded-2xl bg-[#F4E4DB] flex items-center justify-center text-[#D48D75] mb-5">
<i className="w-6 h-6" data-lucide="moon" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-[#2D332F] mb-3">Better Sleep</h4>
<p className="text-lg text-gray-600 font-light leading-relaxed">Learn breathing techniques and gentle restorative poses that calm the nervous system for deeper rest.</p>
</div>

<div>
<div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-gray-200 flex items-center justify-center text-[#2D332F] mb-5">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-[#2D332F] mb-3">Birth Preparation</h4>
<p className="text-lg text-gray-600 font-light leading-relaxed">Build physical stamina and mental focus. Learn coping strategies and optimal positions for labor.</p>
</div>

<div>
<div className="w-12 h-12 rounded-2xl bg-[#E6EBE6] flex items-center justify-center text-[#4A5A55] mb-5">
<i className="w-6 h-6" data-lucide="baby" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl font-medium text-[#2D332F] mb-3">Baby Bonding</h4>
<p className="text-lg text-gray-600 font-light leading-relaxed">Carve out dedicated, quiet time to consciously connect with your baby before they even arrive.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E6EBE6] relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF7F2] rounded-l-[200px] -z-10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-6">Meet your guide, Sarah.</h2>
<h3 className="text-xl text-[#4A5A55] font-medium mb-8">E-RYT 500, Certified Prenatal Specialist</h3>
<p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                    "After experiencing the transformative power of yoga during my own pregnancies, I dedicated my practice to supporting other women through this profound transition."
                </p>
<p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                    With over a decade of specialized training in anatomy, biomechanics of pregnancy, and birth preparation, Sarah creates a safe, nurturing container for you to explore movement and connection.
                </p>
<img alt="Signature" className="h-12 opacity-50 mix-blend-multiply filter grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-md aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-xl">
<img alt="Yoga instructor portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FAF7F2]" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-4">Words from mothers</h2>
<p className="text-xl text-gray-600 font-light">Experiences from our beautiful community.</p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-[#2D332F] hover:bg-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-[#4A5A55] flex items-center justify-center text-white hover:bg-[#3d4a46] transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 pt-4 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">

<div className="min-w-[320px] md:min-w-[400px] bg-white p-10 rounded-[30px] shadow-sm border border-gray-100 flex-shrink-0">
<div className="flex gap-1 text-[#D48D75] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-gray-700 font-light leading-relaxed mb-8 italic">"The private sessions completely changed my pregnancy experience. I had severe lower back pain that disappeared after our 3rd session. I felt so much more prepared for labor."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h5 className="text-base font-medium text-[#2D332F]">Elena R.</h5>
<span className="text-sm text-gray-500">First-time mom</span>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-[#4A5A55] text-white p-10 rounded-[30px] shadow-md flex-shrink-0">
<div className="flex gap-1 text-[#F4E4DB] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-gray-100 font-light leading-relaxed mb-8 italic">"Virtual classes with Sarah were my sanctuary during a stressful pregnancy. The breathing techniques were invaluable during my natural delivery. Highly recommend to any expectant mother."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h5 className="text-base font-medium text-white">Sophie M.</h5>
<span className="text-sm text-gray-300">Mother of two</span>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-[#F4E4DB] p-10 rounded-[30px] shadow-sm flex-shrink-0">
<div className="flex gap-1 text-[#4A5A55] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-[#2D332F] font-light leading-relaxed mb-8 italic">"I loved the focus on the emotional connection with the baby. It wasn't just a workout, it was a dedicated hour of bonding and preparing mentally for motherhood."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h5 className="text-base font-medium text-[#2D332F]">Clara T.</h5>
<span className="text-sm text-gray-600">32 weeks pregnant</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight text-[#2D332F] mb-6">Common questions</h2>
<p className="text-xl text-gray-600 font-light">Everything you need to know before joining.</p>
</div>
<div className="space-y-4">

<div className="border border-gray-100 rounded-3xl bg-[#FAF7F2] overflow-hidden faq-item transition-all duration-300">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-[#2D332F]">When is it safe to start prenatal yoga?</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
<i className="w-4 h-4 text-[#4A5A55] icon-plus transition-transform duration-300" data-lucide="plus"></i>
</div>
</button>
<div className="px-8 pb-6 hidden faq-content text-lg text-gray-600 font-light leading-relaxed">
                        Generally, if you are experiencing a healthy, uncomplicated pregnancy, you can start prenatal yoga as soon as you feel ready. Many women prefer to wait until their second trimester when nausea subsides, but gentle practice is safe in the first trimester. Always consult your healthcare provider first.
                    </div>
</div>

<div className="border border-gray-100 rounded-3xl bg-[#FAF7F2] overflow-hidden faq-item transition-all duration-300">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-[#2D332F]">I've never done yoga before. Is this for me?</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
<i className="w-4 h-4 text-[#4A5A55] icon-plus transition-transform duration-300" data-lucide="plus"></i>
</div>
</button>
<div className="px-8 pb-6 hidden faq-content text-lg text-gray-600 font-light leading-relaxed">
                        Absolutely. Our classes are designed to be accessible for complete beginners. We move slowly, focus on alignment, and provide plenty of props to support your body. Private sessions are especially great for beginners as we move at your exact pace.
                    </div>
</div>

<div className="border border-gray-100 rounded-3xl bg-[#FAF7F2] overflow-hidden faq-item transition-all duration-300">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-[#2D332F]">What do I need to prepare for an in-home session?</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200">
<i className="w-4 h-4 text-[#4A5A55] icon-plus transition-transform duration-300" data-lucide="plus"></i>
</div>
</button>
<div className="px-8 pb-6 hidden faq-content text-lg text-gray-600 font-light leading-relaxed">
                        Just a quiet, clear space (roughly 6x6 feet) where we can lay out a mat. We will bring all necessary props including bolsters, blocks, and straps. Wear comfortable, stretchy clothing.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="book">

<div className="absolute inset-0 z-0">
<img alt="Peaceful nature background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#4A5A55]/90 mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center text-white">
<svg className="w-12 h-12 text-[#F4E4DB] mx-auto mb-8" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 85V95M50 5V15M85 50H95M5 50H15M74.7487 74.7487L81.8198 81.8198M18.1802 18.1802L25.2513 25.2513M74.7487 25.2513L81.8198 18.1802M18.1802 81.8198L25.2513 74.7487M65 50C65 58.2843 58.2843 65 50 65C41.7157 65 35 58.2843 35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50Z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<h2 className="text-4xl lg:text-6xl font-normal tracking-tight mb-6">Begin your practice.</h2>
<p className="text-xl text-[#E6EBE6] font-light mb-10 max-w-2xl mx-auto">Schedule a complimentary 15-minute consultation to discuss your needs and see if we're a good fit for your journey.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#F4E4DB] text-[#2D332F] px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-colors flex items-center justify-center gap-2" href="#">
                    SCHEDULE CONSULT <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center" href="#contact">
                    CONTACT US
                </a>
</div>
</div>
</section>

<footer className="bg-[#FAF7F2] pt-24 pb-12 border-t border-gray-200" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="relative w-6 h-8 flex items-end">
<div className="absolute bottom-0 left-0 w-3.5 h-6 bg-[#829E95] rounded-t-full rounded-bl-md rounded-br-sm opacity-90"></div>
<div className="absolute bottom-0 left-2 w-3.5 h-4.5 bg-[#D48D75] rounded-t-full rounded-bl-sm rounded-br-md opacity-90 mix-blend-multiply"></div>
<div className="absolute top-0 left-0.5 w-2 h-2 bg-[#4A5A55] rounded-full"></div>
</div>
<span className="text-2xl font-medium tracking-tight text-[#2D332F]">bloom</span>
</a>
<p className="text-lg text-gray-500 font-light leading-relaxed mb-6">Nurturing practices for every stage of pregnancy.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#D48D75] border border-gray-100 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#D48D75] border border-gray-100 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-medium text-[#2D332F] mb-6">Explore</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-500 hover:text-[#D48D75] transition-colors" href="#about">Philosophy</a></li>
<li><a className="text-base text-gray-500 hover:text-[#D48D75] transition-colors" href="#classes">Private Classes</a></li>
<li><a className="text-base text-gray-500 hover:text-[#D48D75] transition-colors" href="#classes">Virtual Sessions</a></li>
<li><a className="text-base text-gray-500 hover:text-[#D48D75] transition-colors" href="#reviews">Testimonials</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-medium text-[#2D332F] mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-base text-gray-500">
<i className="w-5 h-5 mt-0.5 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="hover:text-[#D48D75] transition-colors" href="mailto:hello@bloomyoga.com">hello@bloomyoga.com</a>
</li>
<li className="flex items-start gap-3 text-base text-gray-500">
<i className="w-5 h-5 mt-0.5 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<a className="hover:text-[#D48D75] transition-colors" href="tel:+1234567890">(555) 123-4567</a>
</li>
<li className="flex items-start gap-3 text-base text-gray-500">
<i className="w-5 h-5 mt-0.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Serving the Greater Metro Area &amp; Worldwide Virtually</span>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-medium text-[#2D332F] mb-6">Newsletter</h4>
<p className="text-base text-gray-500 font-light mb-4">Gentle tips and community news, once a month.</p>
<form className="flex gap-2">
<input className="w-full bg-white border border-gray-200 rounded-full px-4 py-3 text-base focus:outline-none focus:border-[#4A5A55] transition-colors" placeholder="Your email" type="email"/>
<button className="bg-[#4A5A55] text-white p-3 rounded-full hover:bg-[#3d4a46] transition-colors shrink-0" type="submit">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">© 2024 Bloom Prenatal Yoga. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-gray-400 hover:text-gray-600" href="#">Privacy Policy</a>
<a className="text-sm text-gray-400 hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
