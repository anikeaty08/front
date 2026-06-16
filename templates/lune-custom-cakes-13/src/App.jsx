import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');
      let isMenuOpen = false;

      function toggleMenu() {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
              document.body.style.overflow = 'hidden';
              menuBtn.innerHTML = '<i data-lucide="x" class="w-7 h-7 stroke-[1.5]"></i>';
              lucide.createIcons();
          } else {
              mobileMenu.classList.add('opacity-0', 'pointer-events-none');
              document.body.style.overflow = '';
              menuBtn.innerHTML = '<i data-lucide="menu" class="w-7 h-7 stroke-[1.5]"></i>';
              lucide.createIcons();
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              if(isMenuOpen) toggleMenu();
          });
      });

      // Custom FAQ Accordion Logic
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
          const button = item.querySelector('.faq-button');
          const content = item.querySelector('.faq-content');
          const iconV = item.querySelector('.faq-icon-v');

          button.addEventListener('click', () => {
              const isOpen = content.style.maxHeight;

              // Close all other accordions
              faqItems.forEach(otherItem => {
                  otherItem.querySelector('.faq-content').style.maxHeight = null;
                  otherItem.querySelector('.faq-icon-v').style.transform = 'rotate(0deg)';
              });

              // Toggle current accordion
              if (!isOpen) {
                  content.style.maxHeight = content.scrollHeight + "px";
                  iconV.style.transform = 'rotate(90deg)';
              } else {
                  content.style.maxHeight = null;
                  iconV.style.transform = 'rotate(0deg)';
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full relative z-50 py-6 px-6 lg:px-12 max-w-[1600px] mx-auto flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group z-50">
<div className="bg-[#1a1a1a] text-[#f5f2ee] p-1.5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm transition-transform duration-500 group-hover:rotate-12">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cookie"></i>
</div>
<div className="flex flex-col">
<span className="text-xl tracking-[0.3em] font-medium leading-none ml-1">
            LUNE
          </span>
<span className="text-[0.6rem] tracking-[0.4em] text-[#6b6b6b] mt-1.5 uppercase">
            Custom Cakes
          </span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-12 text-sm tracking-[0.15em] uppercase font-medium">
<a className="relative flex flex-col items-center group text-[#1a1a1a]" href="#">
<span>Home</span>
<span className="w-1 h-1 bg-[#1a1a1a] rounded-full absolute -bottom-3"></span>
</a>
<a className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" href="#cakes">
          Our Cakes
        </a>
<a className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" href="#about">
          About
        </a>
<a className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" href="#portfolio">
          Portfolio
        </a>
<a className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" href="#process">
          Process
        </a>
<a className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" href="#faq">
          FAQ
        </a>
</nav>
<a className="hidden lg:flex items-center gap-3 bg-[#1a1a1a] text-[#f5f2ee] px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#333] transition-colors" href="#book">
        Book a consultation
        <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>

<button className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center text-[#1a1a1a]" id="mobile-menu-btn">
<i className="w-7 h-7 stroke-[1.5]" data-lucide="menu"></i>
</button>
</header>

<div className="fixed inset-0 bg-[#f5f2ee] z-40 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<nav className="flex flex-col items-center gap-8 text-xl tracking-[0.2em] uppercase font-medium">
<a className="mobile-link text-[#1a1a1a] relative" href="#">
          Home
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1a1a1a] rounded-full"></span>
</a>
<a className="mobile-link text-[#6b6b6b] hover:text-[#1a1a1a]" href="#cakes">
          Our Cakes
        </a>
<a className="mobile-link text-[#6b6b6b] hover:text-[#1a1a1a]" href="#about">
          About
        </a>
<a className="mobile-link text-[#6b6b6b] hover:text-[#1a1a1a]" href="#portfolio">
          Portfolio
        </a>
<a className="mobile-link text-[#6b6b6b] hover:text-[#1a1a1a]" href="#process">
          Process
        </a>
<a className="mobile-link text-[#6b6b6b] hover:text-[#1a1a1a]" href="#faq">
          FAQ
        </a>
<a className="mobile-link mt-8 bg-[#1a1a1a] text-[#f5f2ee] px-8 py-4 rounded-full text-sm" href="#book">
          Book a consultation
        </a>
</nav>
</div>

<section className="relative w-full max-w-[1600px] mx-auto min-h-[85vh] px-6 lg:px-12 flex flex-col lg:flex-row items-center pt-8 lg:pt-0 overflow-hidden lg:overflow-visible pb-20 lg:pb-0">

<div className="absolute left-0 top-1/2 -translate-y-[60%] lg:-translate-y-1/2 -translate-x-[20%] lg:-translate-x-[15%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#f2dfdb] rounded-full -z-10 opacity-60 lg:opacity-100"></div>

<div className="w-full lg:w-5/12 flex flex-col relative z-10 pt-10 lg:pt-0 mb-16 lg:mb-0">
<p className="text-sm tracking-[0.25em] uppercase text-[#1a1a1a] mb-6 font-medium ml-1">
          Wedding Cakes
        </p>
<h1 className="flex flex-col mb-8 relative">
<span className="text-[4rem] sm:text-[5rem] lg:text-[6.5rem] tracking-tight uppercase font-medium text-[#1a1a1a] leading-[0.85]">
            Made For
          </span>
<span className="text-[4.5rem] sm:text-[5.5rem] lg:text-[7rem] font-serif italic lowercase text-[#1a1a1a] leading-[0.85] ml-4 lg:ml-8 mt-1">
            your love
          </span>
</h1>
<p className="text-lg text-[#5a5a5a] max-w-sm mb-12 leading-relaxed font-light">
          Artisan cakes, thoughtfully designed and bespoke to your story.
          <br/>
          Beautiful inside and out.
        </p>
<a className="flex items-center gap-4 cursor-pointer group w-fit" href="#process">
<div className="w-14 h-14 rounded-full border border-[#1a1a1a] flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#f5f2ee] transition-all duration-300">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
<span className="text-sm uppercase tracking-[0.15em] border-b border-[#1a1a1a] pb-1 font-medium group-hover:text-[#5a5a5a] group-hover:border-[#5a5a5a] transition-colors">
            Start your cake journey
          </span>
</a>
</div>

<div className="w-full lg:w-4/12 flex justify-center relative h-[500px] sm:h-[600px] lg:h-[750px] z-20">

<div className="w-[85%] lg:w-[90%] h-[85%] lg:h-[90%] bg-[#dfd3c5] rounded-t-[12rem] lg:rounded-t-[15rem] overflow-hidden mt-auto relative shadow-2xl shadow-[#dfd3c5]/20">
<img alt="Elegant white wedding cake with botanical details" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-[5%] lg:top-[10%] -left-12 lg:-left-24 w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center z-30">
<div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
<svg className="w-full h-full" viewbox="0 0 100 100">
<path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" id="curve"></path>
<text className="text-[0.45rem] tracking-[0.3em] uppercase font-medium fill-[#1a1a1a]">
<textpath href="#curve" startoffset="0">
                  Bespoke Botanicals • Bespoke Botanicals •
                </textpath>
</text>
</svg>
</div>
<i className="w-7 h-7 stroke-[1.5] text-[#1a1a1a] relative z-10" data-lucide="leaf"></i>
</div>
</div>

<div className="hidden lg:flex w-3/12 h-full flex-row justify-between relative z-10 pl-2 pt-16 pr-2">
<div className="relative w-44 mt-8">
<div className="w-24 h-24 bg-[#dfd3c5] rounded-tl-full rounded-tr-full ml-auto mb-3"></div>
<div className="w-full h-32 bg-[#eadecd] rounded-t-xl rounded-b-sm mb-4 relative overflow-hidden">
<div className="absolute -top-3 left-0 w-full flex justify-around px-1">
<div className="w-5 h-5 rounded-full bg-[#f5f2ee]"></div>
<div className="w-5 h-5 rounded-full bg-[#f5f2ee]"></div>
<div className="w-5 h-5 rounded-full bg-[#f5f2ee]"></div>
<div className="w-5 h-5 rounded-full bg-[#f5f2ee]"></div>
<div className="w-5 h-5 rounded-full bg-[#f5f2ee]"></div>
</div>
</div>
<div className="w-full h-36 bg-white p-1 shadow-sm">
<img alt="Cake detail" className="w-full h-full object-cover grayscale opacity-90 sepia-[.2]" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -left-12 w-32 h-32 bg-[#dfd3c5] rounded-full flex flex-col items-center justify-center text-center p-4 z-30 shadow-lg shadow-[#dfd3c5]/40">
<i className="w-4 h-4 stroke-[1.5] mb-2 text-[#1a1a1a]" data-lucide="heart"></i>
<p className="text-[0.55rem] uppercase tracking-[0.15em] font-medium leading-[1.6] text-[#1a1a1a]">
              You dream it.
              <br/>
              We bake it
              <br/>
              beautifully.
            </p>
<svg className="w-6 h-2 mt-2 text-[#1a1a1a]" fill="none" stroke="currentColor" viewbox="0 0 40 10">
<path d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="flex flex-col gap-12 mt-24 pr-4">
<div className="flex flex-col items-center gap-3 text-center group cursor-default">
<i className="w-5 h-5 stroke-[1.5] text-[#1a1a1a] group-hover:-translate-y-1 transition-transform" data-lucide="leaf"></i>
<span className="text-[0.6rem] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] leading-relaxed">
              Bespoke
              <br/>
              Design
            </span>
</div>
<div className="flex flex-col items-center gap-3 text-center group cursor-default">
<i className="w-5 h-5 stroke-[1.5] text-[#1a1a1a] group-hover:-translate-y-1 transition-transform" data-lucide="cake"></i>
<span className="text-[0.6rem] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] leading-relaxed">
              Premium
              <br/>
              Ingredients
            </span>
</div>
<div className="flex flex-col items-center gap-3 text-center group cursor-default">
<i className="w-5 h-5 stroke-[1.5] text-[#1a1a1a] group-hover:-translate-y-1 transition-transform" data-lucide="heart"></i>
<span className="text-[0.6rem] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] leading-relaxed">
              Made
              <br/>
              With Love
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#1a1a1a]/5 max-w-[1400px] mx-auto px-6 w-full mt-10 lg:mt-20">
<p className="text-center text-sm uppercase tracking-[0.25em] text-[#8a8a8a] mb-12 font-medium">
        Celebrated By
      </p>
<div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 lg:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<span className="font-serif italic text-3xl tracking-tight text-[#1a1a1a]">
          Vogue
        </span>
<span className="uppercase tracking-[0.2em] font-medium text-2xl text-[#1a1a1a]">
          Brides
        </span>
<span className="font-serif text-3xl tracking-tight text-[#1a1a1a]">
          The Knot
        </span>
<span className="uppercase tracking-[0.25em] text-xl font-medium text-[#1a1a1a]">
          Harper's Bazaar
        </span>
</div>
</section>

<section className="py-24 lg:py-32 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24" id="about">
<div className="w-full lg:w-1/2 relative group">
<div className="w-[85%] lg:w-[75%] aspect-[3/4] rounded-t-full overflow-hidden mx-auto relative z-10 shadow-xl shadow-[#1a1a1a]/5">
<img alt="Baker decorating a cake" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-10 lg:bottom-20 -right-4 lg:-right-10 w-40 h-40 lg:w-56 lg:h-56 bg-[#f2dfdb] rounded-full -z-10 opacity-80"></div>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start">
<span className="text-sm uppercase tracking-[0.2em] text-[#8a8a8a] mb-6 font-medium">
          The Studio
        </span>
<h2 className="text-[3rem] lg:text-[4rem] tracking-tight font-serif italic mb-8 leading-none text-[#1a1a1a]">
          The art of
          <br/>
<span className="font-sans font-medium uppercase text-[2.5rem] lg:text-[3.5rem] not-italic tracking-tighter">
            Fine Baking
          </span>
</h2>
<p className="text-lg text-[#5a5a5a] mb-6 leading-relaxed font-light">
          Every creation is a labor of love, blending classic French techniques
          with modern, minimalist aesthetics. We believe a wedding cake should
          be a stunning centerpiece that tastes even better than it looks.
        </p>
<p className="text-lg text-[#5a5a5a] mb-12 leading-relaxed font-light">
          Sourcing only the finest organic ingredients, local farm eggs, and
          premium European chocolates to ensure a tasting experience that
          lingers in your memory long after the last crumb.
        </p>
<a className="border border-[#1a1a1a] px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#1a1a1a] hover:text-[#f5f2ee] transition-all duration-300" href="#portfolio">
          Meet the Baker
        </a>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1a1a1a] text-[#f5f2ee] px-6 lg:px-12 w-full rounded-t-[3rem] lg:rounded-t-[5rem]" id="portfolio">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
<div>
<span className="text-sm uppercase tracking-[0.2em] text-[#a3a3a3] mb-4 block font-medium">
              Portfolio
            </span>
<h2 className="text-[3rem] lg:text-[4.5rem] tracking-tight uppercase font-medium leading-none">
              Recent
              <span className="font-serif italic lowercase font-normal tracking-tight">
                commissions
              </span>
</h2>
</div>
<a className="flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-medium hover:text-[#a3a3a3] transition-colors group" href="#">
            View full gallery
            <div className="w-8 h-8 rounded-full border border-[#f5f2ee] flex items-center justify-center group-hover:bg-[#f5f2ee] group-hover:text-[#1a1a1a] transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-5 relative rounded-sm">
<img alt="Textured cake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl tracking-tight font-medium mb-1">
                  The Botanical Garden
                </h3>
<p className="text-sm text-[#a3a3a3] font-serif italic">
                  Vanilla bean &amp; Earl Grey
                </p>
</div>
<i className="w-5 h-5 stroke-[1] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="group cursor-pointer lg:mt-16">
<div className="aspect-square lg:aspect-[4/5] overflow-hidden mb-5 relative rounded-sm">
<img alt="Minimalist cake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl tracking-tight font-medium mb-1">
                  Modern Minimalist
                </h3>
<p className="text-sm text-[#a3a3a3] font-serif italic">
                  Dark chocolate &amp; Raspberry
                </p>
</div>
<i className="w-5 h-5 stroke-[1] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-5 relative rounded-sm">
<img alt="Floral cake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl tracking-tight font-medium mb-1">
                  Autumn Romance
                </h3>
<p className="text-sm text-[#a3a3a3] font-serif italic">
                  Spiced carrot &amp; Cream cheese
                </p>
</div>
<i className="w-5 h-5 stroke-[1] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-[1400px] mx-auto px-6 lg:px-12 w-full bg-[#f5f2ee]" id="process">
<div className="text-center mb-20 lg:mb-32">
<span className="text-sm uppercase tracking-[0.2em] text-[#8a8a8a] mb-4 block font-medium">
          How it works
        </span>
<h2 className="text-[3rem] lg:text-[4.5rem] tracking-tight font-serif italic mb-6 leading-none text-[#1a1a1a]">
          A seamless journey
        </h2>
<p className="text-lg text-[#5a5a5a] font-light max-w-xl mx-auto">
          From our first conversation to the moment you cut the cake, every step
          is designed to be effortless and inspiring.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">

<div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-[#dfd3c5]"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-[#f5f2ee] border border-[#dfd3c5] rounded-full flex items-center justify-center mb-8 relative z-10 text-xl font-serif text-[#1a1a1a] group-hover:bg-[#f2dfdb] group-hover:border-[#f2dfdb] transition-colors duration-500">
            1
          </div>
<h3 className="text-xl tracking-tight font-medium uppercase mb-4 text-[#1a1a1a]">
            Inquire
          </h3>
<p className="text-lg text-[#5a5a5a] font-light px-4">
            Share your date, venue, and initial vision through our detailed
            contact form.
          </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-[#f5f2ee] border border-[#dfd3c5] rounded-full flex items-center justify-center mb-8 relative z-10 text-xl font-serif text-[#1a1a1a] group-hover:bg-[#f2dfdb] group-hover:border-[#f2dfdb] transition-colors duration-500">
            2
          </div>
<h3 className="text-xl tracking-tight font-medium uppercase mb-4 text-[#1a1a1a]">
            Tasting
          </h3>
<p className="text-lg text-[#5a5a5a] font-light px-4">
            Sample a curated selection of our signature flavors in a private
            consultation.
          </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-[#f5f2ee] border border-[#dfd3c5] rounded-full flex items-center justify-center mb-8 relative z-10 text-xl font-serif text-[#1a1a1a] group-hover:bg-[#f2dfdb] group-hover:border-[#f2dfdb] transition-colors duration-500">
            3
          </div>
<h3 className="text-xl tracking-tight font-medium uppercase mb-4 text-[#1a1a1a]">
            Design
          </h3>
<p className="text-lg text-[#5a5a5a] font-light px-4">
            We sketch out custom concepts incorporating your floral and styling
            elements.
          </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-[#f5f2ee] border border-[#dfd3c5] rounded-full flex items-center justify-center mb-8 relative z-10 text-xl font-serif text-[#1a1a1a] group-hover:bg-[#f2dfdb] group-hover:border-[#f2dfdb] transition-colors duration-500">
            4
          </div>
<h3 className="text-xl tracking-tight font-medium uppercase mb-4 text-[#1a1a1a]">
            Celebrate
          </h3>
<p className="text-lg text-[#5a5a5a] font-light px-4">
            Seamless delivery and styling at your venue for a flawless
            presentation.
          </p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#eadecd]/40 w-full px-6 lg:px-12 border-y border-[#dfd3c5]" id="cakes">
<div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
<div className="w-16 h-16 bg-[#f5f2ee] rounded-full flex items-center justify-center mb-8 shadow-sm">
<i className="w-7 h-7 stroke-[1.5] text-[#1a1a1a]" data-lucide="wheat"></i>
</div>
<h2 className="text-[3rem] lg:text-[4rem] tracking-tight uppercase font-medium mb-16 lg:mb-24 leading-none text-[#1a1a1a]">
          Curated
          <span className="font-serif italic lowercase font-normal tracking-tight">
            flavors
          </span>
</h2>
<div className="w-full space-y-12 lg:space-y-16 text-left">

<div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-[#1a1a1a]/10 pb-8 group">
<div className="mb-4 md:mb-0 w-full md:w-1/2 pr-8">
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors">
                Signature Vanilla Bean
              </h3>
<p className="text-sm uppercase tracking-[0.15em] text-[#8a8a8a] font-medium">
                Classic &amp; Elegant
              </p>
</div>
<p className="text-xl text-[#5a5a5a] font-serif italic md:text-right w-full md:w-1/2 leading-relaxed">
              Madagascar vanilla sponge layered with whipped white chocolate
              ganache and fresh summer berry compote.
            </p>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-[#1a1a1a]/10 pb-8 group">
<div className="mb-4 md:mb-0 w-full md:w-1/2 pr-8">
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors">
                Earl Grey &amp; Honey
              </h3>
<p className="text-sm uppercase tracking-[0.15em] text-[#8a8a8a] font-medium">
                Floral &amp; Delicate
              </p>
</div>
<p className="text-xl text-[#5a5a5a] font-serif italic md:text-right w-full md:w-1/2 leading-relaxed">
              Bergamot infused sponge, local wildflower honey buttercream, and a
              subtle lemon curd center.
            </p>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-[#1a1a1a]/10 pb-8 group">
<div className="mb-4 md:mb-0 w-full md:w-1/2 pr-8">
<h3 className="text-2xl font-medium tracking-tight mb-2 text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors">
                Dark Chocolate Espresso
              </h3>
<p className="text-sm uppercase tracking-[0.15em] text-[#8a8a8a] font-medium">
                Rich &amp; Decadent
              </p>
</div>
<p className="text-xl text-[#5a5a5a] font-serif italic md:text-right w-full md:w-1/2 leading-relaxed">
              Valrhona chocolate mud cake, espresso soaked layers, salted
              caramel, and dark chocolate Swiss meringue buttercream.
            </p>
</div>
</div>
<button className="mt-20 flex items-center gap-3 border-b border-[#1a1a1a] pb-1.5 text-sm uppercase tracking-[0.15em] font-medium text-[#1a1a1a] hover:text-[#5a5a5a] hover:border-[#5a5a5a] transition-colors">
          Download Full Menu
          <i className="w-4 h-4 stroke-[1.5]" data-lucide="download"></i>
</button>
</div>
</section>

<section className="py-24 lg:py-40 max-w-[1200px] mx-auto px-6 lg:px-12 text-center w-full relative">
<i className="w-16 h-16 stroke-[0.5] text-[#f2dfdb] absolute top-10 lg:top-20 left-1/2 -translate-x-1/2 -z-10" data-lucide="quote"></i>
<h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] tracking-tight font-serif italic leading-[1.2] mb-12 text-[#1a1a1a]">
        "Not only was the cake a visual masterpiece that perfectly captured our
        aesthetic, but it was hands down the most delicious wedding cake we have
        ever tasted."
      </h2>
<div className="flex items-center justify-center gap-5">
<div className="w-14 h-14 rounded-full overflow-hidden">
<img alt="Happy couple" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-lg font-medium tracking-[0.1em] uppercase text-[#1a1a1a]">
            Sarah &amp; James
          </p>
<p className="text-base text-[#8a8a8a] font-serif italic">
            Married September 2023
          </p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 w-full max-w-[900px] mx-auto px-6 lg:px-12 border-t border-[#dfd3c5]" id="faq">
<div className="text-center mb-16 lg:mb-24">
<h2 className="text-[3rem] lg:text-[4rem] tracking-tight uppercase font-medium text-[#1a1a1a] leading-none mb-4">
          Questions
        </h2>
<p className="text-lg text-[#5a5a5a] font-serif italic">
          Everything you need to know.
        </p>
</div>
<div className="space-y-6">

<div className="faq-item border-b border-[#dfd3c5] pb-6">
<button className="faq-button w-full flex justify-between items-center text-left text-xl lg:text-2xl font-medium tracking-tight text-[#1a1a1a] py-4 group">
            How far in advance should we book?
            <div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute w-full h-[1.5px] bg-[#1a1a1a] transition-transform duration-300"></div>
<div className="absolute w-[1.5px] h-full bg-[#1a1a1a] transition-transform duration-300 faq-icon-v"></div>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-lg text-[#5a5a5a] font-serif leading-relaxed pb-6 pr-8">
              We recommend booking 6-9 months in advance for peak wedding season
              (May-October). However, we occasionally have last-minute
              availability, so please don't hesitate to inquire.
            </p>
</div>
</div>

<div className="faq-item border-b border-[#dfd3c5] pb-6">
<button className="faq-button w-full flex justify-between items-center text-left text-xl lg:text-2xl font-medium tracking-tight text-[#1a1a1a] py-4 group">
            Do you offer vegan or gluten-free options?
            <div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute w-full h-[1.5px] bg-[#1a1a1a] transition-transform duration-300"></div>
<div className="absolute w-[1.5px] h-full bg-[#1a1a1a] transition-transform duration-300 faq-icon-v"></div>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-lg text-[#5a5a5a] font-serif leading-relaxed pb-6 pr-8">
              Yes, we offer a selection of delicious gluten-free and vegan
              flavors. Please note our kitchen processes nuts, dairy, and
              gluten, so we cannot guarantee a completely allergen-free
              environment for severe allergies.
            </p>
</div>
</div>

<div className="faq-item border-b border-[#dfd3c5] pb-6">
<button className="faq-button w-full flex justify-between items-center text-left text-xl lg:text-2xl font-medium tracking-tight text-[#1a1a1a] py-4 group">
            Do you provide floral styling for the cake?
            <div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute w-full h-[1.5px] bg-[#1a1a1a] transition-transform duration-300"></div>
<div className="absolute w-[1.5px] h-full bg-[#1a1a1a] transition-transform duration-300 faq-icon-v"></div>
</div>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-500 ease-in-out">
<p className="text-lg text-[#5a5a5a] font-serif leading-relaxed pb-6 pr-8">
              We prefer to work directly with your chosen florist to ensure the
              blooms on your cake perfectly match your wedding design. We
              coordinate with them prior to the event and handle the arrangement
              on the cake upon delivery.
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a1a1a] text-[#f5f2ee] pt-24 lg:pt-32 pb-8 px-6 lg:px-12 w-full rounded-t-[2.5rem] lg:rounded-t-[5rem] mt-10" id="book">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20 lg:mb-32">

<div className="lg:col-span-6 flex flex-col">
<div className="flex items-center gap-3 mb-8">
<i className="w-8 h-8 stroke-[1.5] text-[#f2dfdb]" data-lucide="cookie"></i>
<span className="text-3xl tracking-[0.3em] font-medium leading-none mt-1">
                LUNE
              </span>
</div>
<p className="text-xl text-[#a3a3a3] max-w-md mb-12 font-serif italic leading-relaxed">
              Crafting edible art for your most cherished moments. Based in New
              York, traveling worldwide.
            </p>
<form className="flex gap-4 border-b border-[#5a5a5a] pb-3 max-w-md w-full relative group">
<input className="bg-transparent border-none outline-none w-full text-base text-[#f5f2ee] placeholder:text-[#5a5a5a] placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-xs" placeholder="Join our inner circle" required="" type="email"/>
<button className="text-[#a3a3a3] group-hover:text-[#f5f2ee] transition-colors" type="submit">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</form>
</div>

<div className="lg:col-span-3 lg:pl-10">
<h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-[#5a5a5a] font-medium">
              Explore
            </h3>
<ul className="space-y-5 text-lg font-light tracking-wide text-[#a3a3a3]">
<li>
<a className="hover:text-[#f5f2ee] transition-colors flex items-center gap-2 group" href="#portfolio">
<span className="w-0 group-hover:w-3 h-[1px] bg-[#f5f2ee] transition-all duration-300"></span>
                  Portfolio
                </a>
</li>
<li>
<a className="hover:text-[#f5f2ee] transition-colors flex items-center gap-2 group" href="#cakes">
<span className="w-0 group-hover:w-3 h-[1px] bg-[#f5f2ee] transition-all duration-300"></span>
                  Menu &amp; Flavors
                </a>
</li>
<li>
<a className="hover:text-[#f5f2ee] transition-colors flex items-center gap-2 group" href="#process">
<span className="w-0 group-hover:w-3 h-[1px] bg-[#f5f2ee] transition-all duration-300"></span>
                  The Process
                </a>
</li>
<li>
<a className="hover:text-[#f5f2ee] transition-colors flex items-center gap-2 group" href="#faq">
<span className="w-0 group-hover:w-3 h-[1px] bg-[#f5f2ee] transition-all duration-300"></span>
                  FAQ
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-3">
<h3 className="text-xs uppercase tracking-[0.2em] mb-8 text-[#5a5a5a] font-medium">
              Connect
            </h3>
<ul className="space-y-5 text-lg font-light tracking-wide text-[#a3a3a3]">
<li>
<a className="hover:text-[#f5f2ee] transition-colors" href="#">
                  Instagram
                </a>
</li>
<li>
<a className="hover:text-[#f5f2ee] transition-colors" href="#">
                  Pinterest
                </a>
</li>
<li className="pt-4">
<a className="hover:text-[#f5f2ee] transition-colors border-b border-[#a3a3a3] hover:border-[#f5f2ee] pb-1" href="mailto:hello@lunecakes.com">
                  hello@lunecakes.com
                </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.1em] uppercase text-[#5a5a5a] border-t border-[#333] pt-8">
<p>© 2024 Lune Custom Cakes. All rights reserved.</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-[#a3a3a3] transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-[#a3a3a3] transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
