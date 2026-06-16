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

      // Navbar Scroll Effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 80) {
              navbar.classList.add('bg-[#0F1B2E]/90', 'backdrop-blur-md', 'border-b', 'border-[#F4F1EB]/10');
          } else {
              navbar.classList.remove('bg-[#0F1B2E]/90', 'backdrop-blur-md', 'border-b', 'border-[#F4F1EB]/10');
          }
      });

      // Scroll Reveal Animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);

                  // Trigger stagger children if parent has class
                  if(entry.target.classList.contains('reveal')) {
                      const siblings = entry.target.parentElement.querySelectorAll('.reveal-stagger');
                      siblings.forEach((sibling, index) => {
                          setTimeout(() => {
                              sibling.classList.add('active');
                          }, index * 60);
                      });
                  }
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach((el) => {
          observer.observe(el);
      });

      // Manual setup for isolated staggered items
      const staggeredContainers = document.querySelectorAll('.grid');
      staggeredContainers.forEach(container => {
          const items = container.querySelectorAll('.reveal-stagger');
          if(items.length > 0) {
              const staggerObserver = new IntersectionObserver((entries) => {
                  if(entries[0].isIntersecting) {
                      items.forEach((item, index) => {
                          item.classList.add('reveal');
                          setTimeout(() => {
                              item.classList.add('active');
                          }, index * 60);
                      });
                      staggerObserver.disconnect();
                  }
              }, { threshold: 0.1 });
              staggerObserver.observe(container);
          }
      });


      // FAQ Accordion Logic
      const faqTriggers = document.querySelectorAll('.faq-trigger');
      faqTriggers.forEach(trigger => {
          trigger.addEventListener('click', () => {
              const content = trigger.nextElementSibling;
              const icon = trigger.querySelector('i');
              const isOpen = content.classList.contains('open');

              // Close all others (optional, but requested single col usually implies accordions can auto-close others, let's just toggle clicked)
              // If you want auto-close: document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));

              if (isOpen) {
                  content.classList.remove('open');
                  icon.style.transform = 'rotate(0deg)';
              } else {
                  content.classList.add('open');
                  icon.style.transform = 'rotate(45deg)';
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-240 w-full border-transparent pt-4 pb-4 top-0 left-0" id="navbar">
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<svg className="w-8 h-8 text-[#F4F1EB] transition-colors duration-240 group-hover:text-[#C9A961]" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 2L2 6V16C2 23 8 28 16 30C24 28 30 23 30 16V6L16 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9 12L12.5 21L16 12L19.5 21L23 12" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M16 12L12.5 21L9 12" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="font-heading font-medium text-lg tracking-tight text-[#F4F1EB]">
            Connectwright
          </span>
</a>

<div className="hidden md:flex items-center gap-8 font-light text-lg text-[#F4F1EB]/80">
<a className="hover:text-[#C9A961] transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-[#C9A961] transition-colors" href="#case-studies">
            Case Studies
          </a>
<a className="hover:text-[#C9A961] transition-colors" href="#about">
            About
          </a>
<a className="hover:text-[#C9A961] transition-colors" href="#partners">
            Partners
          </a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center gap-2 bg-[#F4F1EB] text-[#0F1B2E] px-5 py-2.5 rounded-lg font-light text-lg hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(201,169,97,0.25),0_16px_40px_rgba(201,169,97,0.12)] transition-all duration-220" href="#book">
            Book a Consultation
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<button className="md:hidden text-[#F4F1EB]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative flex flex-col items-center justify-center min-h-[92vh] w-full overflow-hidden bg-[#0F1B2E] pt-32 pb-32 md:pt-40 md:pb-40">
<style>
    @keyframes orbit-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes orbit-spin-reverse {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes node-drift {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-entry { 
      opacity: 0; 
      animation: fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards; 
    }
    .delay-1 { animation-delay: 80ms; }
    .delay-2 { animation-delay: 160ms; }
    .delay-3 { animation-delay: 240ms; }
    .delay-4 { animation-delay: 320ms; }
    .delay-5 { animation-delay: 400ms; }
    .delay-6 { animation-delay: 480ms; }
    .delay-7 { animation-delay: 540ms; }
    .delay-8 { animation-delay: 600ms; }
    .delay-9 { animation-delay: 660ms; }
    .delay-10 { animation-delay: 720ms; }
    .delay-11 { animation-delay: 780ms; }
    .delay-12 { animation-delay: 840ms; }
  </style>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(244,241,235,0.08),transparent_60%)] pointer-events-none z-0"></div>

<div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'radial-gradient(rgba(244,241,235,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center animate-entry delay-6 z-0 overflow-hidden">

<div className="absolute w-[110vw] h-[110vw] min-w-[800px] min-h-[800px] max-w-[1600px] max-h-[1600px] flex items-center justify-center" style={{animation: 'orbit-spin 60s linear infinite'}}>
<svg className="absolute pointer-events-none" fill="none" height="100%" viewbox="0 0 1000 1000" width="100%">
<circle cx="500" cy="500" r="498" stroke="#C9A961" stroke-dasharray="4 8" stroke-opacity="0.12" strokeWidth="1" vector-effect="non-scaling-stroke"></circle>
</svg>
</div>

<div className="absolute w-[80vw] h-[80vw] min-w-[600px] min-h-[600px] max-w-[1200px] max-h-[1200px] flex items-center justify-center" style={{animation: 'orbit-spin-reverse 60s linear infinite'}}>
<svg className="absolute pointer-events-none" fill="none" height="100%" viewbox="0 0 1000 1000" width="100%">
<circle cx="500" cy="500" r="498" stroke="#3B5876" stroke-opacity="0.18" strokeWidth="1" vector-effect="non-scaling-stroke"></circle>
</svg>
</div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 hidden lg:block max-w-[1440px] mx-auto w-full h-full">

<div className="absolute top-[18%] left-[8%] md:left-[12%] animate-entry delay-7">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 0s'}}>
<svg className="lucide lucide-target" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">PAID MEDIA</span>
</div>
</div>

<div className="absolute top-[12%] right-[10%] md:right-[15%] animate-entry delay-8">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 0.8s'}}>
<svg className="lucide lucide-search" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">SEO</span>
</div>
</div>

<div className="absolute top-[48%] left-[2%] md:left-[6%] animate-entry delay-9">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 1.6s'}}>
<svg className="lucide lucide-mail" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">EMAIL</span>
</div>
</div>

<div className="absolute top-[42%] right-[3%] md:right-[8%] animate-entry delay-10">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 2.4s'}}>
<svg className="lucide lucide-package" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">AMAZON</span>
</div>
</div>

<div className="absolute bottom-[18%] left-[10%] md:left-[18%] animate-entry delay-11">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 3.2s'}}>
<svg className="lucide lucide-shopping-bag" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">TIKTOK SHOP</span>
</div>
</div>

<div className="absolute bottom-[12%] right-[12%] md:right-[20%] animate-entry delay-12">
<div className="bg-[#1A2740] border border-[#C9A961]/25 rounded-[12px] px-[14px] py-[10px] shadow-[0_8px_24px_rgba(15,27,46,0.4)] flex flex-col w-max min-w-[120px] items-start" style={{animation: 'node-drift 5s ease-in-out infinite 4s'}}>
<svg className="lucide lucide-pen-tool" fill="none" height="18" stroke="#C9A961" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<div className="h-[6px]"></div>
<span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#F4F1EB]/70">CREATIVE</span>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1280px] mx-auto pointer-events-none">

<div className="animate-entry delay-1 pointer-events-auto">
<span className="inline-flex items-center justify-center font-mono text-[12px] tracking-[0.08em] uppercase text-[#C9A961] border border-[#C9A961]/30 rounded-full px-[14px] py-[8px] bg-transparent">
        FOR 6–8 FIGURE BRAND OWNERS
      </span>
</div>

<h1 className="mt-[24px] font-heading text-[36px] md:text-[48px] lg:text-[72px] xl:text-[88px] font-semibold text-[#F4F1EB] leading-[0.95] tracking-tight max-w-[960px] mx-auto font-geist animate-entry delay-2 pointer-events-auto">
      Strategic Marketing Leadership<br/>for Growing Brands.
    </h1>

<div className="mt-[28px] w-[64px] h-[1px] bg-[#C9A961]/60 mx-auto animate-entry delay-3"></div>

<p className="mt-[28px] font-sans font-normal text-[19px] leading-[1.55] text-[#9CA8B8] max-w-[640px] mx-auto animate-entry delay-4 pointer-events-auto">
      We help brands figure out what marketing actually works, who should run it, and how to make every dollar perform — as a strategic advisor, an operator, or both.
    </p>

<div className="mt-[40px] flex flex-col sm:flex-row items-center justify-center gap-[20px] w-full sm:w-auto animate-entry delay-5 pointer-events-auto">
<a className="inline-flex items-center justify-center bg-[#F4F1EB] text-[#0F1B2E] px-[24px] py-[14px] rounded-[8px] font-sans font-medium text-[15px] hover:-translate-y-[2px] hover:shadow-[0_0_0_1px_rgba(201,169,97,0.25),0_16px_40px_rgba(201,169,97,0.12)] transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)]" href="#book">
        Book a Free Strategy Call
        <svg className="lucide lucide-arrow-right ml-[8px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center justify-center text-[#F4F1EB] bg-transparent border-none font-sans font-medium text-[15px] underline underline-offset-[4px] decoration-1 decoration-[#C9A961] hover:text-[#C9A961] transition-colors duration-[220ms] px-[24px] py-[14px]" href="#how-it-works">
        See How We Work
        <svg className="lucide lucide-arrow-right ml-[8px] transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-y overflow-hidden flex bg-[#F4F1EB] h-[90px] border-[#0F1B2E]/10 pt-8 pb-8 relative items-center">

<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F4F1EB] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F4F1EB] to-transparent z-10"></div>
<div className="flex w-max animate-marquee font-mono text-base tracking-[0.05em] text-[#0F1B2E]/45 whitespace-nowrap font-normal">
<span className="mx-4">
          · Paid Media · SEO · GEO · Email · Amazon · TikTok Shop · Branding ·
          Creative · PR · Affiliate · Tracking · Tech Stack
        </span>
<span className="mx-4">
          · Paid Media · SEO · GEO · Email · Amazon · TikTok Shop · Branding ·
          Creative · PR · Affiliate · Tracking · Tech Stack
        </span>
</div>
</section>

<section className="md:py-32 text-[#0F1B2E] bg-[#FAFAF7] pt-24 pb-24">
<div className="md:px-12 lg:px-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-16 md:mb-24 flex flex-col items-center text-center">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] mb-6 font-normal">
            If any of these hit — you're in the right place
          </span>
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight font-geist mb-4">
            Sound Familiar?
          </h2>
<p className="font-sans font-normal text-[18px] text-[#0F1B2E]/60 max-w-[540px] text-center">
            Most brands waste 6 months and six figures finding out the hard way.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">

<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              01
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                You don't know what's actually driving results.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              02
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                You've been burned by the wrong agency.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              03
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                You're overpaying and you know it.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              04
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                Your team is stretched too thin.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              05
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                You don't know who to trust.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
<div className="reveal-stagger relative pt-6 group cursor-default">
<div className="absolute top-0 left-0 h-px bg-[#C9A961]/30 w-12 group-hover:w-full transition-all duration-[240ms] ease-out"></div>
<span className="absolute top-6 left-0 font-mono text-sm text-[#C9A961] font-normal opacity-50 group-hover:opacity-100 transition-opacity duration-[240ms] ease-out">
              06
            </span>
<div className="flex items-center pl-10 h-full justify-between">
<p className="font-heading font-medium text-[26px] leading-[1.25] pr-6 font-geist">
                You're growing — but leaving money on the table.
              </p>
<div className="w-8 h-px bg-[#C9A961] shrink-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F1B2E] text-[#F4F1EB] py-24 md:py-32" id="about">
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
<div className="reveal mb-16 md:mb-20">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] mb-6 font-normal">
            That's exactly why we exist
          </span>
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight max-w-3xl leading-[1.1] font-geist">
            You don't need another agency.
            <br/>
            You need experience that sees the patterns.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

<div className="reveal-stagger md:col-span-2 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="clock" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-4 font-geist">
              Current, Not Stale
            </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed max-w-2xl">
              15+ years of active, in-the-trenches, front-line experience. We
              know what's working right now, not what worked five years ago.
            </p>
</div>
<div className="reveal-stagger md:col-span-1 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="search" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-4 font-geist">
              Strategic Diagnosis First
            </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed">
              We align on clear financial targets for the next 3, 6, and 12
              months so every marketing decision supports profitability.
            </p>
</div>

<div className="reveal-stagger md:col-span-1 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="shield" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-4 font-geist">
              We Fight For You
            </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed">
              We challenge bad fits, push back on bad pricing, and make sure
              partners deliver what they promised.
            </p>
</div>
<div className="reveal-stagger md:col-span-1 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="fingerprint" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-4 font-geist">
              Pattern Recognition
            </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed">
              We've seen every mistake a 6–8 figure brand can make. That alone
              saves months of experimentation.
            </p>
</div>
<div className="reveal-stagger md:col-span-1 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="network" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-4 font-geist">
              The Network
            </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed">
              Vetted agencies, proven freelancers, and specialist talent across
              every major channel.
            </p>
</div>

<div className="reveal-stagger md:col-span-3 bg-[#1A2740] rounded-2xl p-8 md:p-10 border border-[#F4F1EB]/10 flex flex-col md:flex-row gap-8 items-start md:items-center hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.5)] transition-all duration-240">
<i className="text-[#C9A961] w-8 h-8 shrink-0" data-lucide="eye" strokeWidth="1.5"></i>
<div className="">
<h4 className="font-heading font-medium text-2xl tracking-tight mb-2 font-geist">
                Ongoing Stewardship
              </h4>
<p className="font-light text-lg text-[#F4F1EB]/65 leading-relaxed max-w-4xl">
                We stay involved after placement, overseeing performance and
                guiding strategy. When necessary, we hold partners accountable
                and ensure every last drop of value is extracted from the work.
              </p>
</div>
</div>
</div>
<div className="reveal mt-16 text-center">
<a className="group inline-flex items-center gap-2 text-[#F4F1EB] font-light text-lg underline underline-offset-4 decoration-1 decoration-[#C9A961] hover:text-[#C9A961] transition-colors" href="#contact">
            Work With Us
            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden text-[#0F1B2E] bg-[#F4F1EB] pt-24 pb-24 relative" id="services">
<div className="absolute inset-0 bg-dots-dark opacity-[0.03] pointer-events-none"></div>
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
<div className="reveal mb-16 md:mb-20 text-center flex flex-col items-center">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] mb-6 font-normal">
            What we do
          </span>
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight mb-8 font-geist">
            Full-Service Marketing.
            <br/>
            Built Around Your ROI.
          </h2>
<p className="font-light text-xl text-[#0F1B2E]/70 max-w-[680px] leading-relaxed">
            Most brands don't need more marketing activity. They need clarity on
            what actually drives growth. We diagnose your strategy, identify the
            right channels and partners, and guide execution so every initiative
            contributes to revenue.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="map" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Strategy &amp; Consulting
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              Growth Strategy · Channel Planning · Budget Allocation · Agency
              Audits · Team Structure
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              We figure out exactly what your business needs before a single
              dollar gets spent.
            </p>
</div>
<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="trending-up" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Paid &amp; Performance
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              Google &amp; Meta · Media Buying · Amazon · TikTok Shop
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              Right channels. Right spend. Every dollar accountable.
            </p>
</div>
<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="search-check" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Organic &amp; Content
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              SEO · GEO · Social Media · PR · Affiliate
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              Visibility everywhere your customers are searching — including AI.
            </p>
</div>
<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="pen-tool" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Creative &amp; Brand
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              Branding · Website · Landing Pages · Creative · Photo/Video
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              Everything a customer sees before they buy. Built to convert.
            </p>
</div>
<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Retention &amp; Lifecycle
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              Email · Lifecycle · Retention
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              Turn one-time buyers into repeat revenue. Your highest-margin
              growth lever.
            </p>
</div>
<div className="reveal-stagger bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col">
<i className="text-[#C9A961] w-6 h-6 mb-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
<h4 className="font-heading font-medium text-2xl tracking-tight mb-3 font-geist">
              Tracking &amp; Profitability
            </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-6 leading-relaxed font-normal">
              Attribution · Analytics · P&amp;L Review · Unit Economics ·
              Margins
            </p>
<p className="font-light text-lg text-[#5C6878] mt-auto">
              Know exactly what's working, what it costs, and what it's
              returning.
            </p>
</div>

<div className="reveal-stagger lg:col-span-3 bg-white rounded-2xl p-8 border border-[#0F1B2E]/10 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 flex flex-col md:flex-row items-start md:items-center gap-8 justify-center text-center md:text-left">
<i className="text-[#C9A961] w-8 h-8 shrink-0 mx-auto md:mx-0" data-lucide="cpu" strokeWidth="1.5"></i>
<div className="">
<h4 className="font-heading font-medium text-2xl tracking-tight mb-2 font-geist">
                Tech Stack
              </h4>
<p className="font-mono text-xs text-[#0F1B2E]/60 mb-4 font-normal">
                MarTech Audit · Tool Selection · Platform Setup · Integration ·
                Automation
              </p>
<p className="font-light text-lg text-[#5C6878]">
                The right tools, properly connected — so your infrastructure
                doesn't bottleneck your growth.
              </p>
</div>
</div>
</div>
<div className="reveal mt-20 text-center flex flex-col items-center">
<p className="font-heading font-normal text-2xl text-[#0F1B2E] max-w-4xl leading-snug mb-10 relative inline-block font-geist">
<span className="absolute -left-6 -top-2 text-[#C9A961] text-4xl leading-none">
              ❝
            </span>
            We don't do all of this for everyone. We find out what's right for
            your stage and build the right team around it.
          </p>
<a className="group inline-flex items-center gap-2 text-[#0F1B2E] font-light text-lg underline underline-offset-4 decoration-1 decoration-[#C9A961] hover:text-[#C9A961] transition-colors" href="#contact">
            See How We Work
            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="md:py-32 text-[#0F1B2E] bg-[#FAFAF7] pt-24 pb-24">
<div className="md:px-12 lg:px-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-16">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] mb-6 font-normal">
            Why Connectwright
          </span>
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight mb-6 font-geist">
            The Smarter Alternative.
          </h2>
<p className="font-light text-xl text-[#5C6878] max-w-2xl">
            Most brands choose between bad options. We're the one they wish
            they'd found first.
          </p>
</div>
<div className="reveal overflow-x-auto pb-8">
<table className="w-full min-w-[900px] border-collapse text-left">
<thead className="">
<tr className="bg-[#0F1B2E] text-[#F4F1EB] text-lg font-medium border-b border-[#0F1B2E]/10">
<th className="py-5 px-6 font-heading font-medium w-1/3 rounded-tl-xl">
                  Capability
                </th>
<th className="py-5 px-6 font-heading font-medium text-center relative border-b-2 border-[#C9A961]">
                  ConnectWright
                  <div className="absolute inset-0 bg-white/10 rounded-t-xl pointer-events-none"></div>
</th>
<th className="py-5 px-6 font-heading font-medium text-center text-[#F4F1EB]/70">
                  Traditional Agency
                </th>
<th className="py-5 px-6 font-heading font-medium text-center text-[#F4F1EB]/70">
                  Freelancer
                </th>
<th className="py-5 px-6 font-heading font-medium text-center text-[#F4F1EB]/70 rounded-tr-xl">
                  Recruiter
                </th>
</tr>
</thead>
<tbody className="font-light text-lg">
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Current, front-line market knowledge
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Vendor-neutral recommendations
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Vetted partner network across all channels
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Negotiates pricing &amp; scope on your behalf
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Ongoing oversight &amp; accountability
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Works across all channels &amp; disciplines
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Aligned with your outcomes, not their retainer
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Saves time AND money
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961]">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
<tr className="border-b border-[#0F1B2E]/10 hover:bg-[#F4F1EB]/50 transition-colors">
<td className="py-5 px-6 text-[#5C6878]">
                  Straight talk, no upsell
                </td>
<td className="py-5 px-6 text-center bg-white border-l-2 border-[#C9A961] rounded-bl-xl">
<i className="w-5 h-5 text-[#C9A961] mx-auto" data-lucide="check" strokeWidth="2"></i>
</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-center">
<span className="text-[#3B5876] font-mono text-xl">~</span>
</td>
<td className="py-5 px-6 text-center rounded-br-xl">
<i className="w-5 h-5 text-[#0F1B2E]/30 mx-auto" data-lucide="x" strokeWidth="1.5"></i>
</td>
</tr>
</tbody>
</table>
</div>
<div className="reveal mt-12 text-center">
<a className="group inline-flex items-center gap-2 text-[#0F1B2E] font-light text-lg underline underline-offset-4 decoration-1 decoration-[#C9A961] hover:text-[#C9A961] transition-colors" href="#contact">
            Work With Us
            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden text-[#F4F1EB] bg-[#0F1B2E] pt-24 pb-24 relative" id="how-it-works">
<div className="md:px-12 lg:px-20 z-10 max-w-[1080px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal mb-20 md:mb-32 text-center">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] mb-6 font-normal">
            How it works
          </span>
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight font-geist">
            From First Call to Full Clarity — Fast.
          </h2>
</div>
<div className="relative">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px border-l border-dashed border-[#C9A961]/30 -translate-x-1/2 hidden md:block"></div>
<div className="space-y-24 md:space-y-32">

<div className="reveal flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
<div className="w-full md:w-1/2 text-left md:text-right relative">
<span className="absolute -top-16 md:-top-20 -left-4 md:-right-8 md:left-auto font-mono text-8xl md:text-[120px] text-transparent leading-none select-none z-0 opacity-30" style={{WebkitTextStroke: '1px rgb(201, 169, 97)'}}>
                  01
                </span>
<div className="relative z-10">
<h3 className="font-heading font-medium text-3xl tracking-tight mb-4 font-geist">
                    Strategy Call
                  </h3>
<p className="font-light text-lg text-[#F4F1EB]/70 leading-relaxed max-w-md ml-auto">
                    We get into your business. Goals, stage, team, budget. No
                    templates, no assumptions.
                  </p>
</div>
</div>

<div className="w-full md:w-1/2 flex justify-start">
<div className="w-48 h-48 md:w-[280px] md:h-[280px] shrink-0 rounded-2xl border border-[#C9A961]/15 flex items-center justify-center bg-[#1A2740]/30 p-8">
<svg className="w-full h-full" fill="none" strokeWidth="1.5" viewbox="0 0 100 100">
<circle className="" cx="50" cy="40" r="25" stroke="#C9A961" stroke-opacity="0.5"></circle>
<line stroke="#C9A961" x1="50" x2="50" y1="15" y2="19"></line>
<line stroke="#C9A961" x1="50" x2="50" y1="61" y2="65"></line>
<line stroke="#C9A961" x1="25" x2="29" y1="40" y2="40"></line>
<line stroke="#C9A961" x1="71" x2="75" y1="40" y2="40"></line>
<line stroke="#C9A961" x1="50" x2="58" y1="40" y2="32"></line>
<line className="" stroke="#3B5876" x1="30" x2="60" y1="75" y2="75"></line>
<line stroke="#C9A961" x1="30" x2="80" y1="82" y2="82"></line>
<line stroke="#3B5876" x1="30" x2="50" y1="89" y2="89"></line>
</svg>
</div>
</div>
</div>

<div className="reveal flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative">
<div className="w-full md:w-1/2 text-left relative">
<span className="absolute -top-16 md:-top-20 -left-4 md:-left-8 font-mono text-8xl md:text-[120px] text-transparent leading-none select-none z-0 opacity-30" style={{WebkitTextStroke: '1px rgb(201, 169, 97)'}}>
                  02
                </span>
<div className="relative z-10">
<h3 className="font-heading font-medium text-3xl tracking-tight mb-4 font-geist">
                    Diagnosis &amp; Roadmap
                  </h3>
<p className="font-light text-lg text-[#F4F1EB]/70 leading-relaxed max-w-md">
                    We identify exactly what your business needs — which
                    channels, which type of partner, and what you should be
                    paying.
                  </p>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-start md:justify-end">
<div className="w-48 h-48 md:w-[280px] md:h-[280px] shrink-0 rounded-2xl border border-[#C9A961]/15 flex items-center justify-center bg-[#1A2740]/30 p-8">
<svg className="w-full h-full" fill="none" strokeWidth="1.5" viewbox="0 0 100 100">
<rect height="4" stroke="#3B5876" width="40" x="20" y="20"></rect>
<rect className="" height="4" stroke="#C9A961" width="60" x="20" y="30"></rect>
<rect height="4" stroke="#3B5876" width="30" x="20" y="40"></rect>
<path d="M20 65 Q 35 65, 45 55 T 80 50" fill="none" stroke="#3B5876"></path>
<circle cx="80" cy="50" fill="#C9A961" r="2" stroke="#C9A961"></circle>
<rect height="12" stroke="#C9A961" stroke-opacity="0.4" strokeWidth="1" width="16" x="20" y="80"></rect>
<rect height="12" stroke="#C9A961" stroke-opacity="0.4" strokeWidth="1" width="16" x="42" y="80"></rect>
<rect height="12" stroke="#C9A961" stroke-opacity="0.4" strokeWidth="1" width="16" x="64" y="80"></rect>
</svg>
</div>
</div>
</div>

<div className="reveal flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
<div className="w-full md:w-1/2 text-left md:text-right relative">
<span className="absolute -top-16 md:-top-20 -left-4 md:-right-8 md:left-auto font-mono text-8xl md:text-[120px] text-transparent leading-none select-none z-0 opacity-30" style={{WebkitTextStroke: '1px rgb(201, 169, 97)'}}>
                  03
                </span>
<div className="relative z-10">
<h3 className="font-heading font-medium text-3xl tracking-tight mb-4 font-geist">
                    Partner Placement
                  </h3>
<p className="font-light text-lg text-[#F4F1EB]/70 leading-relaxed max-w-md ml-auto">
                    We match you with vetted agencies, freelancers, or talent.
                    Pricing and scope already dialed in on your behalf.
                  </p>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-start">
<div className="w-48 h-48 md:w-[280px] md:h-[280px] shrink-0 rounded-2xl border border-[#C9A961]/15 flex items-center justify-center bg-[#1A2740]/30 p-8 relative">
<svg className="w-full h-full" fill="none" strokeWidth="1.5" viewbox="0 0 100 100">
<style>
                      @keyframes dashAnim { to { stroke-dashoffset: -20; } }
                      @keyframes dashAnimRev { to { stroke-dashoffset: 20; } }
                    </style>
<line stroke="#C9A961" stroke-dasharray="4 4" stroke-opacity="0.5" style={{animation: 'dashAnim 8s linear infinite'}} x1="50" x2="20" y1="50" y2="30"></line>
<line stroke="#C9A961" stroke-dasharray="4 4" stroke-opacity="0.5" style={{animation: 'dashAnimRev 8s linear infinite'}} x1="50" x2="80" y1="50" y2="30"></line>
<line stroke="#C9A961" stroke-dasharray="4 4" stroke-opacity="0.5" style={{animation: 'dashAnimRev 8s linear infinite'}} x1="50" x2="20" y1="50" y2="70"></line>
<line stroke="#C9A961" stroke-dasharray="4 4" stroke-opacity="0.5" style={{animation: 'dashAnim 8s linear infinite'}} x1="50" x2="80" y1="50" y2="70"></line>
<line stroke="#C9A961" stroke-dasharray="4 4" stroke-opacity="0.5" style={{animation: 'dashAnim 8s linear infinite'}} x1="50" x2="50" y1="50" y2="15"></line>
<circle cx="50" cy="50" fill="#C9A961" fillOpacity="0.4" r="14" stroke="#C9A961" strokeWidth="1"></circle>
<circle cx="20" cy="30" fill="#0F1B2E" r="6" stroke="#C9A961"></circle>
<circle cx="80" cy="30" fill="#0F1B2E" r="6" stroke="#C9A961"></circle>
<circle cx="20" cy="70" fill="#0F1B2E" r="6" stroke="#C9A961"></circle>
<circle cx="80" cy="70" fill="#0F1B2E" r="6" stroke="#C9A961"></circle>
<circle cx="50" cy="15" fill="#0F1B2E" r="6" stroke="#C9A961"></circle>
</svg>
</div>
</div>
</div>

<div className="reveal flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative">
<div className="w-full md:w-1/2 text-left relative">
<span className="absolute -top-16 md:-top-20 -left-4 md:-left-8 font-mono text-8xl md:text-[120px] text-transparent leading-none select-none z-0 opacity-30" style={{WebkitTextStroke: '1px rgb(201, 169, 97)'}}>
                  04
                </span>
<div className="relative z-10">
<h3 className="font-heading font-medium text-3xl tracking-tight mb-4 font-geist">
                    Ongoing Oversight
                  </h3>
<p className="font-light text-lg text-[#F4F1EB]/70 leading-relaxed max-w-md">
                    We stay involved. We hold partners accountable, protect your
                    investment, and keep your growth on track.
                  </p>
</div>
</div>
<div className="w-full md:w-1/2 flex justify-start md:justify-end">
<div className="w-48 h-48 md:w-[280px] md:h-[280px] shrink-0 rounded-2xl border border-[#C9A961]/15 flex items-center justify-center bg-[#1A2740]/30 p-8">
<svg className="w-full h-full" fill="none" strokeWidth="1.5" viewbox="0 0 100 100">
<line className="" stroke="#C9A961" stroke-opacity="0.1" strokeWidth="1" x1="10" x2="90" y1="30" y2="30"></line>
<line stroke="#C9A961" stroke-opacity="0.1" strokeWidth="1" x1="10" x2="90" y1="55" y2="55"></line>
<line stroke="#C9A961" stroke-opacity="0.1" strokeWidth="1" x1="10" x2="90" y1="80" y2="80"></line>
<path d="M 10 80 Q 40 70, 90 60" fill="none" stroke="#3B5876"></path>
<path className="" d="M 10 80 Q 50 80, 70 45 T 90 20" fill="none" stroke="#C9A961"></path>
<circle className="" cx="70" cy="45" fill="#C9A961" r="2" stroke="#C9A961"></circle>
<circle className="" cx="90" cy="20" fill="#C9A961" r="2" stroke="#C9A961"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="reveal mt-24 text-center">
<a className="inline-flex items-center gap-2 bg-[#F4F1EB] text-[#0F1B2E] px-8 py-4 rounded-lg font-light text-lg hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(201,169,97,0.25),0_16px_40px_rgba(201,169,97,0.12)] transition-all duration-220" href="#book">
            Book a Free Strategy Call
            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="bg-[#F4F1EB] text-[#0F1B2E] py-24 md:py-32" id="case-studies">
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
<div className="reveal text-center mb-16">
<span className="inline-block font-mono text-xs uppercase tracking-widest text-[#C9A961] font-normal">
            You're in good company
          </span>
</div>

<div className="reveal flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500 mb-24">

<svg className="h-8" fill="currentColor" viewbox="0 0 120 40">
<rect fillOpacity="0.1" height="40" rx="4" width="120"></rect>
<text fill="#0F1B2E" fontFamily="monospace" fontSize="14" text-anchor="middle" x="60" y="24">
              BRAND LOGO
            </text>
</svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 120 40">
<rect fillOpacity="0.1" height="40" rx="4" width="120"></rect>
<text fill="#0F1B2E" fontFamily="monospace" fontSize="14" text-anchor="middle" x="60" y="24">
              BRAND LOGO
            </text>
</svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 120 40">
<rect fillOpacity="0.1" height="40" rx="4" width="120"></rect>
<text fill="#0F1B2E" fontFamily="monospace" fontSize="14" text-anchor="middle" x="60" y="24">
              BRAND LOGO
            </text>
</svg>
<svg className="h-8 hidden md:block" fill="currentColor" viewbox="0 0 120 40">
<rect className="" fillOpacity="0.1" height="40" rx="4" width="120"></rect>
<text fill="#0F1B2E" fontFamily="monospace" fontSize="14" text-anchor="middle" x="60" y="24">
              BRAND LOGO
            </text>
</svg>
<svg className="h-8 hidden lg:block" fill="currentColor" viewbox="0 0 120 40">
<rect className="" fillOpacity="0.1" height="40" rx="4" width="120"></rect>
<text fill="#0F1B2E" fontFamily="monospace" fontSize="14" text-anchor="middle" x="60" y="24">
              BRAND LOGO
            </text>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-stagger bg-white border border-[#0F1B2E]/10 rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 relative">
<div className="flex gap-1 mb-8">
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
</div>
<span className="absolute top-6 left-6 text-6xl text-[#C9A961]/20 font-serif leading-none select-none">
              ❝
            </span>
<p className="font-heading font-normal text-xl leading-relaxed text-[#0F1B2E] mb-10 relative z-10 font-geist">
              "One call reset our entire strategy. We finally stopped wasting
              budget and started seeing real returns."
            </p>
<div className="mt-auto flex items-center gap-4 pt-6 border-t border-[#0F1B2E]/5">
<div className="w-10 h-10 rounded-full bg-[#0F1B2E] text-[#C9A961] flex items-center justify-center font-mono text-sm">
                JS
              </div>
<div>
<p className="font-heading font-medium text-sm">
                  Founder, DTC Brand
                </p>
<p className="font-mono text-xs text-[#C9A961] mt-1 data-stat font-normal" data-val="3.2">
                  Lift: $3.2M → $7.8M
                </p>
</div>
</div>
</div>

<div className="reveal-stagger bg-white border border-[#0F1B2E]/10 rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 relative">
<div className="flex gap-1 mb-8">
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
</div>
<span className="absolute top-6 left-6 text-6xl text-[#C9A961]/20 font-serif leading-none select-none">
              ❝
            </span>
<p className="font-heading font-normal text-xl leading-relaxed text-[#0F1B2E] mb-10 relative z-10 font-geist">
              "They tell you what you need to hear, not what you want to hear.
              That alone is worth every penny."
            </p>
<div className="mt-auto flex items-center gap-4 pt-6 border-t border-[#0F1B2E]/5">
<div className="w-10 h-10 rounded-full bg-[#0F1B2E] text-[#C9A961] flex items-center justify-center font-mono text-sm">
                AT
              </div>
<div>
<p className="font-heading font-medium text-sm">
                  Co-Founder, Apparel
                </p>
<p className="font-mono text-xs text-[#C9A961] mt-1 font-normal">
                  0 → $4M in 14 months
                </p>
</div>
</div>
</div>

<div className="reveal-stagger bg-white border border-[#0F1B2E]/10 rounded-3xl p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,27,46,0.06)] transition-all duration-240 relative">
<div className="flex gap-1 mb-8">
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" data-lucide="star"></i>
</div>
<span className="absolute top-6 left-6 text-6xl text-[#C9A961]/20 font-serif leading-none select-none">
              ❝
            </span>
<p className="font-heading font-normal text-xl leading-relaxed text-[#0F1B2E] mb-10 relative z-10 font-geist">
              "Vetted agency, renegotiated contract, and a real growth plan —
              all within 3 weeks of our first call."
            </p>
<div className="mt-auto flex items-center gap-4 pt-6 border-t border-[#0F1B2E]/5">
<div className="w-10 h-10 rounded-full bg-[#0F1B2E] text-[#C9A961] flex items-center justify-center font-mono text-sm">
                MR
              </div>
<div>
<p className="font-heading font-medium text-sm">
                  CMO, Consumer Goods
                </p>
<p className="font-mono text-xs text-[#C9A961] mt-1 data-stat font-normal" data-val="1">
                  Lift: $1M → $8M
                </p>
</div>
</div>
</div>
</div>
<div className="reveal mt-16 text-center">
<a className="group inline-flex items-center gap-2 text-[#0F1B2E] font-light text-lg underline underline-offset-4 decoration-1 decoration-[#C9A961] hover:text-[#C9A961] transition-colors" href="#case-studies">
            See More Case Studies
            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="bg-[#0F1B2E] text-[#F4F1EB] py-36 relative overflow-hidden flex flex-col items-center justify-center text-center" id="book">
<div className="absolute inset-0 bg-dots opacity-[0.04] pointer-events-none"></div>
<div className="absolute w-[600px] h-[600px] bg-[#3B5876] rounded-full blur-[120px] opacity-10 animate-drift pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<div className="w-20 h-px bg-[#C9A961] mx-auto mb-10"></div>
<h2 className="reveal font-heading font-medium text-5xl md:text-6xl tracking-tight mb-8 font-geist">
          Stop Guessing.
          <br/>
          Start Growing.
        </h2>
<p className="reveal font-light text-xl text-[#F4F1EB]/65 max-w-[580px] mx-auto leading-relaxed mb-12">
          One conversation is all it takes. We'll tell you exactly where your
          marketing dollars should be going — and who should be running them.
        </p>
<div className="reveal">
<a className="inline-flex items-center gap-2 bg-[#F4F1EB] text-[#0F1B2E] px-8 py-4 rounded-lg font-light text-lg hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(201,169,97,0.25),0_16px_40px_rgba(201,169,97,0.12)] transition-all duration-220 group" href="#contact">
            Book Your Free Strategy Call
            <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="md:py-32 text-[#0F1B2E] bg-[#FAFAF7] pt-24 pb-24">
<div className="max-w-[880px] mx-auto px-6 md:px-12">
<div className="reveal mb-16 text-center">
<h2 className="font-heading font-medium text-4xl md:text-5xl tracking-tight font-geist">
            Questions We Get Before Every First Call.
          </h2>
</div>
<div className="reveal space-y-2">

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                What makes you different from an agency or recruiter?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  Agencies sell you their services. Recruiters fill roles. We do
                  neither. We're vendor-neutral — our only job is making sure
                  you end up with the right partner, at the right price, for the
                  right reasons. No kickbacks. No quotas. Just straight talk.
                </p>
</div>
</div>
</div>

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                Who is this actually for?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  Brand owners running 6–8 figure businesses, plus early and
                  launch-stage brands looking to build the right foundation from
                  day one. Small team, too many options, not enough clarity. If
                  you're done wasting time and money on the wrong partners,
                  you're in the right place.
                </p>
</div>
</div>
</div>

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                How do you choose the partners you recommend?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  We don't work from a static roster. Every recommendation is
                  based on your stage, goals, budget, and internal team. We've
                  built a network of operators across channels, but we only
                  bring in people who are the right fit for your specific
                  situation, not just who's available.
                </p>
</div>
</div>
</div>

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                What does a typical engagement look like?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  Starts with a strategy call. We get into your business —
                  goals, team, budget, current setup. From there we build a
                  roadmap, identify the right partners for your stage, and stay
                  involved to make sure things run the way they should. Every
                  engagement is different. There is no template.
                </p>
</div>
</div>
</div>

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                What if I already have agencies in place?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  One of the most common situations we walk into. We'll audit
                  what you have, tell you honestly what's working and what
                  isn't, and help you either fix those relationships or replace
                  them. You don't need to start from scratch — you just need
                  clarity.
                </p>
</div>
</div>
</div>

<div className="border-b border-[#0F1B2E]/10">
<button className="w-full py-8 flex justify-between items-center text-left focus:outline-none faq-trigger group">
<span className="font-heading font-medium text-2xl group-hover:text-[#C9A961] transition-colors pr-8 font-geist">
                How quickly can we get started?
              </span>
<i className="w-6 h-6 text-[#C9A961] shrink-0 transition-transform duration-300 transform" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<div className="faq-inner pb-8">
<p className="font-light text-lg text-[#0F1B2E]/75 leading-[1.65]">
                  Book a call and come ready to talk about your business. We
                  move fast — because every week with the wrong setup is a week
                  of momentum you're not getting back.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#14181F] text-[#F4F1EB] pt-24 pb-8">
<div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-5 pr-0 md:pr-12">
<a className="flex items-center gap-3 mb-6" href="#">
<svg className="w-8 h-8 text-[#F4F1EB]" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L2 6V16C2 23 8 28 16 30C24 28 30 23 30 16V6L16 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9 12L12.5 21L16 12L19.5 21L23 12" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16 12L12.5 21L9 12" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="font-heading font-medium text-lg tracking-tight">
                Connectwright
              </span>
</a>
<p className="font-light text-base text-[#F4F1EB]/60 leading-relaxed mb-8 max-w-sm">
              Built for brands serious about growth — from launch and
              go-to-market to scaling 6–8 figures without wasting budget on the
              wrong partners.
            </p>
<p className="font-mono text-xs text-[#C9A961] font-normal">
              Working in New York City and beyond.
            </p>
</div>

<div className="md:col-span-2">
<h5 className="font-mono text-xs text-[#F4F1EB]/40 mb-6 uppercase tracking-widest font-normal">
              Company
            </h5>
<ul className="space-y-4 font-light text-base">
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#services">
                  Services
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#about">
                  About
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#case-studies">
                  Case Studies
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#partners">
                  Partners
                </a>
</li>
</ul>
</div>

<div className="md:col-span-2">
<h5 className="font-mono text-xs text-[#F4F1EB]/40 mb-6 uppercase tracking-widest font-normal">
              Connect
            </h5>
<ul className="space-y-4 font-light text-base">
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#book">
                  Book a Call
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#">
                  X / Twitter
                </a>
</li>
<li>
<a className="text-[#F4F1EB]/80 hover:text-[#C9A961] transition-colors" href="#">
                  Email
                </a>
</li>
</ul>
</div>

<div className="md:col-span-3">
<h5 className="font-mono text-xs text-[#F4F1EB]/40 mb-6 uppercase tracking-widest font-normal">
              Monthly Insights
            </h5>
<form className="relative max-w-sm" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent border-b border-[#F4F1EB]/20 py-3 pr-10 text-base font-light text-[#F4F1EB] placeholder-[#F4F1EB]/40 focus:outline-none focus:border-[#C9A961] transition-colors" placeholder="Email address..." type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C9A961] hover:-translate-y-1/2 hover:scale-110 transition-transform p-2" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>

<div className="pt-8 border-t border-[#F4F1EB]/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-[#F4F1EB]/50 font-normal">
<p>© 2026 ConnectWright</p>
<div className="flex gap-6">
<a className="hover:text-[#F4F1EB] transition-colors" href="#">
              Privacy
            </a>
<a className="hover:text-[#F4F1EB] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
