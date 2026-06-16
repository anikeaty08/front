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



      document.addEventListener('DOMContentLoaded', () => {
          // Mobile Menu Toggle
          const toggleBtn = document.getElementById('mobile-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
          let isMenuOpen = false;

          toggleBtn.addEventListener('click', () => {
              isMenuOpen = !isMenuOpen;
              if (isMenuOpen) {
                  mobileMenu.classList.add('active');
                  toggleBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl"></iconify-icon>';
                  document.body.style.overflow = 'hidden';
              } else {
                  mobileMenu.classList.remove('active');
                  toggleBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
                  document.body.style.overflow = '';
              }
          });

          // Subtle Scroll Reveal Motion (Evidenced in DESIGN.md)
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (!reduceMotion) {
              const observerOptions = {
                  root: null,
                  rootMargin: '0px 0px -50px 0px',
                  threshold: 0.1
              };

              const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('is-revealed');
                          observer.unobserve(entry.target); // Only reveal once
                      }
                  });
              }, observerOptions);

              document.querySelectorAll('.reveal-element').forEach(el => {
                  observer.observe(el);
              });
          } else {
              // If reduced motion is preferred, reveal everything immediately
              document.querySelectorAll('.reveal-element').forEach(el => {
                  el.style.opacity = '1';
                  el.style.transform = 'none';
              });
          }

          // Nav background on scroll
          const nav = document.getElementById('main-nav');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  nav.classList.add('bg-[#16231B]/95');
                  nav.classList.remove('bg-[#16231B]/80');
              } else {
                  nav.classList.add('bg-[#16231B]/80');
                  nav.classList.remove('bg-[#16231B]/95');
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed transition-colors duration-300 bg-emerald-950/80 w-full z-50 border-white/10 border-b top-0 backdrop-blur-md" id="main-nav">
<div className="flex max-w-[1600px] mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="uppercase z-50 text-xl tracking-tighter relative font-cormorant font-medium" href="#">
          Oakley
        </a>

<div className="hidden md:flex uppercase text-xs text-white/80 tracking-widest font-mono gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition-colors font-bold font-space-grotesk" href="/brokerage">
            Brokerage
          </a>
<a className="hover:text-white transition-colors font-bold font-space-grotesk" href="/brokerage-2">
            IOS
          </a>
<a className="hover:text-white transition-colors font-bold font-space-grotesk" href="/brokerage-3">
            Capital
          </a>
<a className="hover:text-white transition-colors font-space-grotesk font-bold" href="#">
            Retail
          </a>
<a className="hover:text-white transition-colors font-space-grotesk font-bold" href="#">
            Listings
          </a>
</div>

<div className="flex items-center gap-4 z-50 relative">
<a className="hidden md:inline-flex items-center justify-center uppercase hover:bg-white/10 transition-colors text-xs tracking-widest border-white/20 border rounded-full pt-2 pr-4 pb-2 pl-4 font-space-grotesk font-bold" href="#">
            Contact Us
          </a>
<button className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors" id="mobile-toggle">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-screen bg-[#16231B] flex-col items-center justify-center gap-8 z-40" id="mobile-menu">
<a className="text-4xl tracking-tight hover:text-white/60 transition-colors font-cormorant font-medium" href="#">
          Brokerage
        </a>
<a className="text-4xl tracking-tight hover:text-white/60 transition-colors font-cormorant font-medium" href="#">
          IOS
        </a>
<a className="text-4xl tracking-tight hover:text-white/60 transition-colors font-cormorant font-medium" href="#">
          Capital
        </a>
<a className="text-4xl tracking-tight hover:text-white/60 transition-colors font-cormorant font-medium" href="#">
          Retail
        </a>
<a className="mt-8 border border-white/20 rounded-full px-6 py-3 text-sm uppercase tracking-widest font-space-grotesk font-bold" href="#">
          Contact Us
        </a>
</div>
</nav>

<header className="flex flex-col overflow-hidden bg-center min-h-screen w-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49c96214-d8ef-418b-b13a-4e634b790f98_3840w.png')] bg-cover border-white/10 border-b pt-32 pb-8 relative justify-end" id="hero-section">
<div className="z-0 bg-gradient-to-t from-[#16231B] via-[#16231B]/60 to-[#16231B]/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-0 hidden lg:flex flex-col absolute top-[65%] right-[35%] items-center">
<div className="flex animate-pulse bg-white/20 w-4 h-4 rounded-full items-center justify-center">
<div className="bg-white w-2 h-2 rounded-full"></div>
</div>
<div className="text-[10px] uppercase font-bold text-white tracking-widest font-space-grotesk bg-black/40 border-white/10 border rounded mt-2 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">
          Target Asset
        </div>
</div>
<div className="hidden flex-col lg:flex z-0 absolute top-[30%] right-[20%] items-center">
<div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="mt-2 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] text-white uppercase tracking-widest font-space-grotesk font-bold">
          Development Site
        </div>
</div>
<div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 flex flex-col gap-8 md:gap-16">
<div className="reveal-element is-revealed max-w-4xl">
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[0.9] uppercase text-5xl font-medium text-white tracking-tight font-cormorant mb-6">Oakley Real Estate Partners</h1>
<p className="md:text-xl leading-relaxed text-base font-medium text-white/80 font-space-grotesk max-w-xl mb-8">
            Industrial real estate investment, brokerage, and development
            opportunities across high-growth markets.
          </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center uppercase hover:bg-white hover:text-[#16231B] transition-colors text-xs tracking-widest bg-transparent border border-white text-white rounded-full px-6 py-3 font-space-grotesk font-bold" href="#">
              View Listings
            </a>
<a className="inline-flex items-center justify-center uppercase hover:bg-white/90 transition-colors text-xs font-bold text-[#16231B] tracking-widest font-space-grotesk bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
              Discuss an Opportunity
            </a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-element delay-100 is-revealed">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
<h3 className="text-white text-xl md:text-2xl tracking-tight font-cormorant font-medium mb-2 uppercase">
              Brokerage
            </h3>
<p className="text-white/60 text-sm font-space-grotesk font-medium">
              Investment sales and advisory
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
<h3 className="text-white text-xl md:text-2xl tracking-tight font-cormorant font-medium mb-2 uppercase">
              IOS
            </h3>
<p className="text-white/60 text-sm font-space-grotesk font-medium">
              Outdoor storage and logistics assets
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
<h3 className="text-white text-xl md:text-2xl tracking-tight font-cormorant font-medium mb-2 uppercase">
              Capital
            </h3>
<p className="text-white/60 text-sm font-space-grotesk font-medium">
              Investment and development partnerships
            </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
<h3 className="text-white text-xl md:text-2xl tracking-tight font-cormorant font-medium mb-2 uppercase">
              Retail
            </h3>
<p className="text-white/60 text-sm font-space-grotesk font-medium">
              Strategic retail acquisition opportunities
            </p>
</div>
</div>
</div>
</header>

<section className="text-[#16231B] bg-[#F9F5EB] border-[#16231B]/10 border-b">
<div className="max-w-[1600px] mx-auto grid lg:grid-cols-2">

<div className="md:p-16 lg:border-b-0 lg:border-r flex flex-col border-[#16231B]/10 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="mb-16 reveal-element is-revealed">
<span className="inline-block border border-[#16231B]/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest font-space-grotesk font-bold">
              Who We Are
            </span>
</div>
<div className="grid gap-10 reveal-element delay-100 is-revealed">
<div className="">
<p className="text-xs uppercase tracking-widest text-[#16231B]/50 mb-2 font-space-grotesk font-bold">
                Brokerage Transaction Volume
              </p>
<h2 className="text-5xl md:text-6xl tracking-tight font-cormorant font-medium">
                $3B+
              </h2>
</div>
<div className="">
<p className="text-xs uppercase tracking-widest text-[#16231B]/50 mb-2 font-space-grotesk font-bold">
                Successful Investments
              </p>
<h2 className="text-5xl md:text-6xl tracking-tight font-cormorant font-medium">
                $1B+
              </h2>
</div>
<div className="">
<p className="uppercase text-xs text-[#16231B]/50 tracking-widest mb-2 font-space-grotesk font-bold">
                Cumulative Experience
              </p>
<h2 className="text-5xl md:text-6xl tracking-tight font-cormorant font-medium">
                40 Yrs
              </h2>
</div>
</div>
</div>

<div className="md:p-16 flex reveal-element is-revealed bg-[#F4F0E6] pt-8 pr-8 pb-8 pl-8 items-center">
<div className="max-w-xl">
<p className="text-2xl md:text-4xl tracking-tight leading-snug mb-8 font-cormorant font-medium">
              Oakley Real Estate Partners is a full-service commercial real
              estate firm headquartered in Atlanta, Georgia.
            </p>
<p className="text-base text-[#16231B]/80 leading-relaxed font-space-grotesk font-bold">
              Our focus is twofold: providing exceptional brokerage services and
              identifying private funded investment and development
              opportunities throughout the Sun Belt. With our unparalleled
              market knowledge, established relationships, and unwavering
              integrity, we deliver top-quality customer service and outstanding
              results.
            </p>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden md:pb-8 md:pt-8 bg-[#F9F5EB] border-[#16231B]/10 border-b pt-12 pb-12 relative">
<div className="max-w-[1600px] mr-auto ml-auto">
<div className="reveal-element text-center pt-8 pr-4 pb-8 pl-4">
<span className="uppercase text-lg text-[#16231B]/50 tracking-widest pt-4 pb-4 font-space-grotesk font-bold">
            Trusted by Capital Partners
          </span>
</div>

<div className="overflow-hidden reveal-element delay-100 relative">

<div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F9F5EB] via-[#F9F5EB]/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F9F5EB] via-[#F9F5EB]/80 to-transparent z-10 pointer-events-none"></div>

<div className="ticker-track-custom pt-0 pb-0">

<div className="flex flex-wrap md:flex-nowrap md:gap-24 w-full mr-auto ml-auto gap-x-12 gap-y-12 items-center justify-center">
<style className="">
    .ticker-track-custom {
      animation: none !important;
      transform: none !important;
      width: 100% !important;
      justify-content: center !important;
    }
  </style>
<div className="flex items-center justify-center cursor-pointer">
<img alt="Partner Logo" className="h-10 md:h-14 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7f7595c-0941-48b0-b1f4-34795b921746_320w.png"/>
</div>
<div className="flex items-center justify-center cursor-pointer">
<img alt="Partner Logo" className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63959707-a8bf-4087-89b8-2d4f2d4b7efc_320w.png"/>
</div>
<div className="flex items-center justify-center cursor-pointer">
<img alt="Partner Logo" className="h-12 md:h-16 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbdde002-5450-4a5a-9316-763fab06df05_1600w.png"/>
</div>
<div className="flex items-center justify-center cursor-pointer">
<img alt="Partner Logo" className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdea3167-85fa-4a58-8121-9f421e6af1eb_320w.png"/>
</div>
<div className="flex items-center justify-center cursor-pointer">
</div>
</div>

</div>
</div>
</div>
<style className="">
        .ticker-track-custom {
            display: flex;
            width: max-content;
            animation: custom-ticker 40s linear infinite;
        }

        .ticker-track-custom:hover {
            animation-play-state: paused;
        }

        @keyframes custom-ticker {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
      </style>
</section>

<section className="bg-[#F9F5EB] text-[#16231B] border-b border-[#16231B]/10" id="services">
<div className="max-w-[1600px] mx-auto">

<div className="p-8 md:p-16 border-b border-[#16231B]/10 reveal-element">
<span className="inline-block border border-[#16231B]/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-6 font-space-grotesk font-bold">
            Our Services
          </span>
<h2 className="text-3xl md:text-5xl tracking-tight max-w-2xl font-cormorant font-medium">
            We offer a range of services to meet your specific needs.
          </h2>
</div>

<div className="grid md:grid-cols-2">

<div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#16231B]/10 group hover:bg-[#16231B]/[0.02] transition-colors reveal-element">
<iconify-icon className="text-4xl text-[#16231B]/60 mb-12" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="text-3xl md:text-4xl tracking-tight mb-4 group-hover:-translate-y-1 transition-transform font-cormorant font-medium">
              Oakley Brokerage Partners
            </h3>
<p className="text-xl md:text-2xl text-[#16231B]/70 mb-6 font-cormorant font-medium">
              Your Strategic Advantage in Commercial Real Estate
            </p>
<p className="text-sm md:text-base text-[#16231B]/80 leading-relaxed font-space-grotesk font-bold">
              Specializing in the sale and leasing of institutional industrial
              properties, along with Industrial Outside Storage (IOS) sites
              throughout the Southeast. With over $3BB in transaction volume,
              our team is equipped to handle any of your brokerage needs.
            </p>
</div>

<div className="p-8 md:p-16 group hover:bg-[#16231B]/[0.02] transition-colors reveal-element delay-100">
<iconify-icon className="text-4xl text-[#16231B]/60 mb-12" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-3xl md:text-4xl tracking-tight mb-4 group-hover:-translate-y-1 transition-transform font-cormorant font-medium">
              Oakley Capital Partners
            </h3>
<p className="text-xl md:text-2xl text-[#16231B]/70 mb-6 font-cormorant font-medium">
              Innovating Investment and Development
            </p>
<p className="text-sm md:text-base text-[#16231B]/80 leading-relaxed font-space-grotesk font-bold">
              Identifying and capitalizing on investment and development
              opportunities in the Sun Belt. With over $1 Billion in successful
              investments, we focus on industrial properties, IOS solutions, and
              strategic land investments.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#16231B] text-[#F9F5EB] border-b border-white/10">
<div className="max-w-[1600px] mx-auto grid lg:grid-cols-2">

<div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
<div className="p-8 md:px-16 border-b border-white/10 reveal-element">
<span className="inline-block border border-white/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 font-space-grotesk font-bold">
              Landlord Partners
            </span>
</div>

<div className="p-8 md:px-16 border-b border-white/10 flex justify-between items-center hover:bg-white/[0.04] transition-colors cursor-pointer group reveal-element">
<h3 className="text-3xl tracking-tight group-hover:translate-x-2 transition-transform font-cormorant font-medium">
              Link Logistics
            </h3>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-8 md:px-16 border-b border-white/10 flex justify-between items-center hover:bg-white/[0.04] transition-colors cursor-pointer group reveal-element">
<h3 className="text-3xl tracking-tight group-hover:translate-x-2 transition-transform font-cormorant font-medium">
              Brookfield Properties
            </h3>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-8 md:px-16 border-b border-white/10 flex justify-between items-center hover:bg-white/[0.04] transition-colors cursor-pointer group reveal-element">
<h3 className="text-3xl tracking-tight group-hover:translate-x-2 transition-transform font-cormorant font-medium">
              Dogwood Industrial
            </h3>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-8 md:px-16 border-b border-white/10 flex justify-between items-center hover:bg-white/[0.04] transition-colors cursor-pointer group reveal-element">
<h3 className="text-3xl tracking-tight group-hover:translate-x-2 transition-transform font-cormorant font-medium">
              KKR Real Estate
            </h3>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="p-8 md:px-16 flex justify-between items-center hover:bg-white/[0.04] transition-colors cursor-pointer group reveal-element">
<h3 className="text-3xl tracking-tight group-hover:translate-x-2 transition-transform font-cormorant font-medium">
              Realterm
            </h3>
<iconify-icon className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="p-8 md:p-16 flex justify-center items-center relative overflow-hidden bg-[#1A2A20] reveal-element">
<div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden group">
<img alt="Warehouse Architecture" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf30732a-fd73-4649-8ba4-f2f627f01a81_1600w.jpg"/>

<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded px-2 py-1">
<span className="text-xs uppercase tracking-widest text-white/80 font-space-grotesk font-bold">
                Atlanta, GA
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-8 lg:px-16 bg-[#F9F5EB] border-[#16231B]/10 border-b pt-16 pr-4 pb-16 pl-4">
<div className="max-w-[1600px] mr-auto ml-auto">
<div className="reveal-element mb-12">
<span className="inline-block uppercase text-xs text-[#16231B] tracking-widest border-[#16231B]/20 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 font-space-grotesk font-bold">
            What They Say
          </span>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="overflow-hidden md:h-[550px] reveal-element h-[450px] rounded-lg relative">
<img alt="Team member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1669003154314-71bfb4192338?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 right-8 text-[#F9F5EB]">
<p className="text-2xl leading-snug mb-6 font-cormorant font-medium">
                "Their deep understanding of the property type has made them a
                valuable resource."
              </p>
<div className="h-[1px] w-full bg-white/20 mb-4"></div>
<p className="text-xs uppercase tracking-widest text-white/80 font-space-grotesk font-bold">
                Arnie Capute
                <br/>
                Realterm
              </p>
</div>
</div>

<div className="bg-[#F0ECE1] border border-[#16231B]/5 rounded-lg p-8 md:p-10 flex flex-col justify-between h-[450px] md:h-[550px] text-[#16231B] reveal-element delay-100">
<iconify-icon className="text-4xl text-[#16231B]/20 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-2xl md:text-3xl leading-snug flex-grow font-cormorant font-medium">
              "Oakley is unmatched in its understanding of Atlanta's industrial
              and IOS markets. We trust their guidance and rely on our
              relationship to grow."
            </p>
<div className="">
<div className="h-[1px] w-full bg-[#16231B]/10 mb-4"></div>
<p className="text-xs uppercase tracking-widest text-[#16231B]/60 font-space-grotesk font-bold">
                Zach Dobin
                <br/>
                Triten Real Estate Partners
              </p>
</div>
</div>

<div className="bg-[#16231B] rounded-lg p-8 md:p-10 flex flex-col justify-between h-[450px] md:h-[550px] text-[#F9F5EB] reveal-element delay-200">
<iconify-icon className="text-4xl text-white/20 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-2xl md:text-3xl leading-snug flex-grow font-cormorant font-medium">
              "The Oakley team is one of the strongest we see. Their boots on
              the ground knowledge and market connectivity provide invaluable
              information."
            </p>
<div>
<div className="h-[1px] w-full bg-white/10 mb-4"></div>
<p className="text-xs uppercase tracking-widest text-white/60 font-space-grotesk font-bold">
                Emily Cannon
                <br/>
                Dogwood Industrial
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#16231B] text-[#F9F5EB] relative">

<div className="max-w-[1600px] mx-auto px-8 md:px-16 pt-20 pb-10">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 reveal-element">

<div>
<h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-space-grotesk font-bold">
              Location
            </h4>
<p className="text-sm leading-loose font-space-grotesk font-bold">
              Seven Piedmont Center
              <br/>
              3525 Piedmont Road, Suite 204
              <br/>
              Atlanta, GA 30305
            </p>
</div>

<div className="">
<h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-space-grotesk font-bold">
              Contact
            </h4>
<p className="text-sm leading-loose">
<a className="hover:text-white/70 transition-colors font-space-grotesk font-bold" href="tel:4704708901">
                470-470-8901
              </a>
<br/>
<a className="hover:text-white/70 transition-colors font-space-grotesk font-bold" href="mailto:info@oakleyrep.com">
                info@oakleyrep.com
              </a>
</p>
</div>

<div className="">
<h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-space-grotesk font-bold">
              Socials
            </h4>
<p className="text-sm leading-loose">
<a className="hover:text-white/70 transition-colors font-space-grotesk font-bold" href="#">
                LinkedIn
              </a>
</p>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest text-white/50 mb-6 font-space-grotesk font-bold">
              Inquiries
            </h4>
<p className="text-sm leading-relaxed mb-4 font-space-grotesk font-bold">
              Looking to work with us?
            </p>
<a className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg px-4 py-2 text-sm hover:bg-white/20 transition-colors font-space-grotesk font-bold" href="#">
              Contact Us
            </a>
</div>
</div>

<div className="border-b border-white/10 pb-10 mb-6 overflow-hidden reveal-element">
<h2 className="text-[15vw] leading-[0.75] tracking-tighter uppercase text-center w-full font-cormorant font-medium">
            Oakley
          </h2>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40 reveal-element">
<p className="font-space-grotesk font-bold">
            © 2026 Oakley Real Estate Partners.
          </p>
<a className="hover:text-white/80 transition-colors font-space-grotesk font-bold" href="#">
            Back to Top ↑
          </a>
</div>
</div>
</footer>



    </>
  );
}
