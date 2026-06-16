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



          (function initProjectsScroll() {
            if (typeof window === 'undefined') return;
            const section = document.getElementById('projects');
            if (!section) { setTimeout(initProjectsScroll, 100); return; }
            if (section.dataset.scrollInited === 'done') return;
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') { setTimeout(initProjectsScroll, 100); return; }
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            section.dataset.scrollInited = 'done';
            gsap.registerPlugin(ScrollTrigger);

            const cards = gsap.utils.toArray(section.querySelectorAll('.project-card'));

            cards.forEach((card, index) => {
              const img = card.querySelector('[data-project-image]');
              if (img) gsap.set(img, { filter: 'blur(0px)' });

              if (index < cards.length - 1) {
                gsap.to(card, {
                  scale: 0.9,
                  opacity: 0.35,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: cards[index + 1],
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                    refreshPriority: index
                  }
                });
              }

              if (img) {
                gsap.fromTo(img, { yPercent: -8 }, {
                  yPercent: 8,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    refreshPriority: index
                  }
                });
              }
            });

            ScrollTrigger.refresh();
          })();
        


      document.addEventListener("DOMContentLoaded", () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);

        const wrapTextNodes = (node) => {
            if (node.nodeType === 3) {
                const text = node.nodeValue;
                if (!text.trim()) return;
                const words = text.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                words.forEach(w => {
                    if (w.trim() === '') {
                        frag.appendChild(document.createTextNode(w));
                    } else {
                        const spanWrap = document.createElement('span');
                        spanWrap.className = 'gsap-word-wrapper';
                        const spanWord = document.createElement('span');
                        spanWord.className = 'gsap-word';
                        spanWord.textContent = w;
                        spanWrap.appendChild(spanWord);
                        frag.appendChild(spanWrap);
                    }
                });
                node.parentNode.replaceChild(frag, node);
            } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
                Array.from(node.childNodes).forEach(wrapTextNodes);
            }
        };

        document.querySelectorAll('h1, h2').forEach(el => {
            Array.from(el.childNodes).forEach(wrapTextNodes);
        });

        const heroHeader = document.querySelector('header');
        const heroH1 = document.querySelector('h1');
        const heroContent = heroH1 ? heroH1.parentElement.children : [];
        const heroSection = document.querySelector('main > section');
        const heroImageContainer = heroSection ? heroSection.querySelector('img').parentElement : null;
        const heroImage = heroImageContainer ? heroImageContainer.querySelector('img') : null;
        const bottomBar = heroSection ? heroSection.querySelector('div[class*="bottom-0"]') : null;

        if (heroHeader) gsap.set(heroHeader, { y: -30, opacity: 0 });
        if (heroContent.length) gsap.set(heroContent, { y: 40, opacity: 0 });
        if (heroImageContainer) gsap.set(heroImageContainer, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
        if (heroImage) gsap.set(heroImage, { scale: 1.2 });
        if (bottomBar) gsap.set(bottomBar, { y: 30, opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        if (heroHeader) tl.to(heroHeader, { y: 0, opacity: 1, duration: 1.5, delay: 0.1 });
        if (heroImageContainer) tl.to(heroImageContainer, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.8, ease: 'power3.inOut' }, '-=1');
        if (heroImage) tl.to(heroImage, { scale: 1, duration: 2, ease: 'power3.out' }, '-=1.8');
        if (heroContent.length) tl.to(heroContent, { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }, '-=1.5');
        if (bottomBar) tl.to(bottomBar, { y: 0, opacity: 1, duration: 1.2 }, '-=1.2');

        gsap.utils.toArray('h1, h2').forEach(heading => {
            const words = heading.querySelectorAll('.gsap-word');
            if(!words.length) return;
            gsap.to(words, {
                scrollTrigger: { trigger: heading, start: 'top 85%' },
                y: '0%', opacity: 1, duration: 1.2, stagger: 0.04, ease: 'power4.out'
            });
        });

        gsap.utils.toArray('section').forEach((sec, index) => {
            if (index === 0) return;
            if (sec.parentElement.tagName.toLowerCase() === 'section') return;

            const els = sec.querySelectorAll('span[class*="text-xs"][class*="uppercase"]:not(.gsap-word), p:not(.gsap-word), article:not([data-project-card]), div[class*="rounded-[24px]"], form, details');
            if(els.length) {
                gsap.fromTo(els,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: { trigger: sec, start: 'top 80%' },
                        y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out'
                    }
                );
            }
        });

        const pCards = document.querySelectorAll('[data-project-card]');
        if (pCards.length) {
            gsap.set(pCards, { y: 80, opacity: 0 });
            gsap.to(pCards, {
                scrollTrigger: { trigger: pCards[0].closest('section'), start: 'top 75%' },
                y: (i) => i * 24,
                opacity: 1,
                duration: 1.4,
                stagger: 0.15,
                ease: 'power4.out'
            });
        }

        gsap.utils.toArray('[class*="text-[160px]"], [class*="text-[180px]"], [class*="text-[240px]"]').forEach(num => {
            gsap.to(num, {
                y: -150,
                ease: 'none',
                scrollTrigger: { trigger: num.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
            });
        });

        gsap.utils.toArray('img').forEach(img => {
            if (img === heroImage) return;
            const parent = img.parentElement;
            if(parent && parent.classList.contains('overflow-hidden')) {
                gsap.fromTo(img,
                    { scale: 1.15, filter: 'blur(10px)' },
                    {
                        scrollTrigger: { trigger: parent, start: 'top 90%' },
                        scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out'
                    }
                );
            }
        });
      });
    


      document.addEventListener('DOMContentLoaded',function(){if(typeof ScrollTrigger!=='undefined'){window.addEventListener('load',function(){ScrollTrigger.refresh();});setTimeout(function(){ScrollTrigger.refresh();},500);}});
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 left-0 right-0 z-50">
<div className="relative mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-6 md:h-28 md:px-12 lg:px-12">
<nav className="hidden lg:flex items-center gap-10">
<a className="text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#">
            Home
          </a>
<a className="text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#about">
            About
          </a>
<a className="text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#services">
            Services
          </a>
<a className="text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#projects">
            Portfolio
          </a>
<a className="text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#">
            Journal
          </a>
</nav>
<a aria-label="La Belle logo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[#2B211B]" href="#" style={{fontFamily: '\'Cormorant Garamond\', \'Playfair Display\', serif'}}>
<span className="block text-[44px] font-light italic leading-[0.8] tracking-[-0.08em]">
            La Belle
          </span>
<span className="mt-2 block text-[8px] font-medium uppercase tracking-[0.34em]">
            Atelier
          </span>
</a>
<div className="ml-auto flex items-center gap-8">
<a className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-[#2B211B] hover:text-[#6F6258] transition-colors" href="#contact">
            Contact
          </a>
<button aria-label="Open menu" className="flex h-10 w-10 items-center justify-center text-[#2B211B]">
<span className="relative block h-3 w-5">
<span className="absolute left-0 top-0 block h-px w-5 bg-current"></span>
<span className="absolute left-0 bottom-0 block h-px w-5 bg-current"></span>
</span>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative mx-auto h-[100svh] min-h-[720px] max-h-[900px] w-full max-w-[1440px] overflow-hidden bg-[#ECE6DD]" onmouseleave="if(window.innerWidth &gt;= 1024) { const img = this.querySelector('.hero-parallax-img'); if(img) img.style.transform = 'translate(0px, 0px) scale(1.05)'; }" onmousemove="if(window.innerWidth &gt;= 1024) { const img = this.querySelector('.hero-parallax-img'); if(img) { const x = (event.clientX / window.innerWidth - 0.5) * 16; const y = (event.clientY / window.innerHeight - 0.5) * 16; img.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`; } }" style={{willChange: 'transform'}}>
<div className="grid h-full lg:grid-cols-[61%_39%]">

<div className="relative z-10 flex h-full items-center px-8 pb-[88px] pt-24 md:px-16 lg:px-[96px]">

<div className="absolute left-10 top-[46%] hidden -translate-y-1/2 rotate-180 text-[10px] font-light uppercase tracking-[0.48em] text-[#2B211B] md:block" style={{writingMode: 'vertical-rl'}}>
              Luxury Digital Design Studio
            </div>

<div className="ml-[64px] w-full max-w-[820px] -translate-y-12">
<h1 className="mb-5 whitespace-nowrap text-[clamp(96px,8.8vw,164px)] font-light uppercase leading-[0.88] tracking-tight text-[#2B211B]" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                            ATELIER
                                                                                                          </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<br/>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                            LA
                                                                                                          </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                            BELLE
                                                                                                          </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h1>
<p className="mb-3 text-[clamp(26px,2vw,34px)] font-light italic leading-none tracking-tight text-[#2B211B]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Luxury Digital Design Studio
              </p>
<div className="mb-5 h-px w-10 bg-[#2B211B]/40"></div>
<p className="mb-8 max-w-md text-[16px] font-light leading-relaxed text-[#2B211B]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Brands with beauty, clarity, and presence.
              </p>
<a className="inline-flex min-h-12 w-fit items-center justify-center gap-12 bg-[#35241B] px-9 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F6F1EA] transition-all duration-300 hover:bg-[#211916] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35241B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#ECE6DD] active:scale-[0.98]" href="#projects">
                Discover Our Work
                <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="relative h-full overflow-hidden" style={{clipPath: 'polygon(0% 68.4719%, 100% 68.4719%, 100% 100%, 0% 100%)'}}>
<img alt="Atelier La Belle beauty campaign" className="hero-parallax-img h-full w-full object-cover object-center transition-transform duration-1000 ease-out" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af81d316-ea1a-46ee-bc8d-06c212f2ee3d_1600w.png"/>
</div>
</div>

<div className="absolute bottom-0 left-0 hidden h-[88px] w-[61%] border-r border-t border-b border-[#2B211B]/20 bg-[#ECE6DD]/95 lg:block">
<div className="flex h-full">
<div className="grid flex-1 grid-cols-4 items-center px-9 text-[10px] font-normal uppercase tracking-[0.18em] text-[#2B211B]">
<span>Brand Identity</span>
<span className="relative before:absolute before:-left-7 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#2B211B]">
                Web Design
              </span>
<span className="relative before:absolute before:-left-7 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#2B211B]">
                E-Commerce
              </span>
<span className="relative before:absolute before:-left-7 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#2B211B]">
                Social Strategy
              </span>
</div>
<div className="flex w-40 items-center justify-center gap-2 border-l border-[#2B211B]/20 text-[#2B211B]">
<span className="text-2xl font-light text-[#7A6E62]">‹</span>
<div className="text-center">
<div className="text-[30px] font-light leading-none tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  5.0
                </div>
<div className="mt-1 text-[10px] tracking-[0.18em]">★★★★★</div>
<div className="mt-1 text-[7px] font-light uppercase tracking-[0.18em]">
                  Client Rating
                </div>
</div>
<span className="text-2xl font-light text-[#7A6E62]">›</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-16 bg-[#EFE6DC]" id="about">
<section className="relative overflow-hidden bg-[#ECE6DD] px-6 py-24 md:px-10 lg:px-16">
<div className="mx-auto max-w-[1440px]">
<div className="grid gap-12 lg:grid-cols-12 lg:gap-20">

<div className="relative lg:col-span-5">
<span className="mb-6 block text-xs uppercase tracking-[0.22em] text-[#9B8C80]">
                  About Studio
                </span>
<h2 className="relative z-10 max-w-[620px] text-4xl font-medium leading-[1.05] tracking-tight text-[#17120F] md:text-5xl lg:text-6xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              Digital
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              partner
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              for
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              refined
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              beauty
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              brands.
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>

<div className="pointer-events-none absolute -bottom-10 left-0 text-[180px] font-medium leading-none tracking-[-0.08em] text-[#17120F]/[0.04] md:text-[240px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  01
                </div>
</div>

<div className="lg:col-span-7">
<div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">

<div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-6">
<div className="absolute inset-x-6 top-6 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.18em] text-[#9B8C80]">
                        Studio Note
                      </span>
<span className="h-2 w-2 rounded-full bg-[#C8A99A]"></span>
</div>
<div className="flex h-full flex-col justify-end">
<p className="text-3xl font-medium leading-[1.12] tracking-tight text-[#17120F] md:text-4xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Minimal design with maximum presence.
                      </p>
<div className="mt-8 h-px w-full bg-[#17120F]/[0.08]"></div>
<div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#9B8C80]">
<span>Fashion</span>
<span>Beauty</span>
<span>Wellness</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between">
<p className="text-base font-light leading-relaxed text-[#6F6258] md:text-lg">
                      Atelier La Belle is a boutique creative studio
                      specializing in brand identity, editorial web design,
                      UI/UX, and e-commerce experiences for fashion, beauty,
                      wellness, and lifestyle brands.
                    </p>
<div className="mt-10 space-y-4">
<div className="flex items-center justify-between border-b border-[#17120F]/[0.08] pb-4">
<span className="text-sm text-[#17120F]">
                          Brand Identity
                        </span>
<span className="text-xs uppercase tracking-[0.16em] text-[#9B8C80]">
                          01
                        </span>
</div>
<div className="flex items-center justify-between border-b border-[#17120F]/[0.08] pb-4">
<span className="text-sm text-[#17120F]">
                          Editorial Web Design
                        </span>
<span className="text-xs uppercase tracking-[0.16em] text-[#9B8C80]">
                          02
                        </span>
</div>
<div className="flex items-center justify-between border-b border-[#17120F]/[0.08] pb-4">
<span className="text-sm text-[#17120F]">
                          E-commerce Experience
                        </span>
<span className="text-xs uppercase tracking-[0.16em] text-[#9B8C80]">
                          03
                        </span>
</div>
<div className="flex items-center justify-between border-b border-[#17120F]/[0.08] pb-4">
<span className="text-sm text-[#17120F]">
                          Creative Direction
                        </span>
<span className="text-xs uppercase tracking-[0.16em] text-[#9B8C80]">
                          04
                        </span>
</div>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
<div className="rounded-[24px] border border-[#17120F]/[0.08] bg-[#F6F0E7]/70 p-5">
<div className="mb-2 text-4xl font-medium tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      5.0
                    </div>
<div className="text-[10px] uppercase tracking-[0.14em] text-[#9B8C80]">
                      Client Rating
                    </div>
</div>
<div className="rounded-[24px] border border-[#17120F]/[0.08] bg-[#F6F0E7]/70 p-5">
<div className="mb-2 text-4xl font-medium tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      120
                      <span className="text-[#C8A99A]">+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.14em] text-[#9B8C80]">
                      Projects
                    </div>
</div>
<div className="rounded-[24px] border border-[#17120F]/[0.08] bg-[#F6F0E7]/70 p-5">
<div className="mb-2 text-4xl font-medium tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      8
                      <span className="text-[#C8A99A]">+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.14em] text-[#9B8C80]">
                      Years
                    </div>
</div>
<div className="rounded-[24px] border border-[#17120F]/[0.08] bg-[#F6F0E7]/70 p-5">
<div className="mb-2 text-4xl font-medium tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      32
                      <span className="text-[#C8A99A]">+</span>
</div>
<div className="text-[10px] uppercase tracking-[0.14em] text-[#9B8C80]">
                      Beauty Brands
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="relative overflow-hidden bg-[#ECE6DD] px-5 py-24 md:px-10 md:py-32 lg:px-16" id="services">
<div className="mx-auto max-w-[1440px]">

<div className="relative mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
<div className="max-w-2xl">
<span className="mb-6 block text-xs uppercase tracking-[0.22em] text-[#9B8C80]">
                What We Do
              </span>
<h2 className="relative z-10 text-5xl font-medium leading-[0.95] tracking-tight text-[#17120F] md:text-6xl lg:text-8xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                            Services.
                                                                                                          </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
</div>
<p className="max-w-sm text-base font-light leading-relaxed text-[#6F6258]">
              Strategy, design, and development tailored for modern fashion and
              beauty brands.
            </p>

<div className="pointer-events-none absolute -bottom-12 right-0 text-[160px] font-medium leading-none tracking-[-0.08em] text-[#17120F]/[0.04] md:text-[240px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              02
            </div>
</div>

<div className="grid gap-6 lg:grid-cols-12 lg:gap-8 gap-x-6 gap-y-6">

<article className="group relative overflow-hidden rounded-[34px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 transition-all duration-500 hover:bg-white/70 lg:col-span-7">
<div className="relative h-[420px] overflow-hidden rounded-[26px] md:h-[560px]">
<img alt="Editorial web design" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/711d14a5-d836-49d0-bd68-64ec2cf66f59_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="pointer-events-none absolute inset-0 z-10 bg-[#17120F]/0 transition-colors duration-700 ease-out group-hover:bg-[#17120F]/20"></div>
<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#17120F]/60 via-[#17120F]/10 to-transparent"></div>
<div className="absolute left-6 top-6 z-20 rounded-full bg-[#ECE6DD]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                  01 / Featured
                </div>
<div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end">
<h3 className="mb-3 text-4xl font-normal tracking-tight text-[#FFF8EF] transition-transform duration-700 ease-out group-hover:-translate-y-1 md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Editorial Web Design
                  </h3>
<p className="max-w-md text-sm font-light leading-relaxed text-[#FFF8EF]/80 md:text-base">
                    Elegant websites designed with strong hierarchy, refined
                    visuals, and a premium brand experience.
                  </p>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="pt-5 opacity-0 transition-all duration-700 ease-out translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
<span className="inline-flex items-center justify-center rounded-full bg-[#ECE6DD]/90 px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F] backdrop-blur-sm">
                          Explore Service
                        </span>
</div>
</div>
</div>
</div>
</div>
</article>

<div className="grid gap-6 lg:col-span-5">

<article className="group grid overflow-hidden rounded-[34px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 transition-all duration-500 hover:bg-white/70 md:grid-cols-[0.9fr_1.1fr]">
<div className="relative h-64 overflow-hidden rounded-[26px] md:h-full">
<img alt="Brand identity" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2c86b8f-1adc-4574-8011-28590460bc33_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="pointer-events-none absolute inset-0 z-10 bg-[#17120F]/0 transition-colors duration-700 ease-out group-hover:bg-[#17120F]/15"></div>
</div>
<div className="flex flex-col justify-between p-5 md:p-6">
<div className="mb-10 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                      02
                    </span>
<span className="h-2 w-2 rounded-full bg-[#C8A99A] transition-all duration-700 ease-out group-hover:h-[1px] group-hover:w-8 group-hover:rounded-none"></span>
</div>
<div className="flex flex-col justify-end">
<h3 className="mb-3 text-3xl font-normal tracking-tight text-[#17120F] transition-transform duration-700 ease-out group-hover:-translate-y-1" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Brand Identity
                    </h3>
<p className="text-sm font-light leading-relaxed text-[#6F6258]">
                      Visual systems, typography, colors, and creative direction
                      for beauty-led brands.
                    </p>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="pt-5 opacity-0 transition-all duration-700 ease-out translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
<span className="inline-flex items-center justify-center rounded-full border border-[#17120F]/15 bg-transparent px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F] transition-colors hover:bg-[#17120F] hover:text-[#F6F0E7]">
                            Explore Service
                          </span>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group grid overflow-hidden rounded-[34px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 transition-all duration-500 hover:bg-white/70 md:grid-cols-[1.1fr_0.9fr]">
<div className="flex flex-col justify-between p-5 md:p-6">
<div className="mb-10 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                      03
                    </span>
<span className="h-2 w-2 rounded-full bg-[#C8A99A] transition-all duration-700 ease-out group-hover:h-[1px] group-hover:w-8 group-hover:rounded-none"></span>
</div>
<div className="flex flex-col justify-end">
<h3 className="mb-3 text-3xl font-normal tracking-tight text-[#17120F] transition-transform duration-700 ease-out group-hover:-translate-y-1" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Shopify Experience
                    </h3>
<p className="text-sm font-light leading-relaxed text-[#6F6258]">
                      E-commerce experiences designed to feel premium,
                      intuitive, and conversion-focused.
                    </p>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="pt-5 opacity-0 transition-all duration-700 ease-out translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
<span className="inline-flex items-center justify-center rounded-full border border-[#17120F]/15 bg-transparent px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F] transition-colors hover:bg-[#17120F] hover:text-[#F6F0E7]">
                            Explore Service
                          </span>
</div>
</div>
</div>
</div>
</div>
<div className="relative h-64 overflow-hidden rounded-[26px] md:h-full">
<img alt="Shopify experience" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76af9664-93c7-4174-828c-42358492f3e2_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="pointer-events-none absolute inset-0 z-10 bg-[#17120F]/0 transition-colors duration-700 ease-out group-hover:bg-[#17120F]/15"></div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-y border-[#17120F]/[0.08] bg-[#EFE6DC] overflow-hidden">
<div className="flex whitespace-nowrap opacity-60">
<div className="animate-[marquee_30s_linear_infinite] flex items-center gap-16 md:gap-32 text-4xl md:text-6xl tracking-tight font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="">Luxury</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span className="">Beauty</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Elegance</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Presence</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Clarity</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Strategy</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Luxury</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Beauty</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
<span>Elegance</span>
<span className="text-xl md:text-2xl text-[#C8A99A]">✦</span>
</div>
</div>
<style>
          @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
        </style>
</section>

<section className="relative bg-[#ECE6DD] px-5 py-24 md:px-10 md:py-32 lg:px-16" data-projects-section="" data-scroll-inited="done" id="projects">
<div className="mx-auto max-w-[1440px]">

<div className="grid gap-16 lg:grid-cols-12 lg:items-start">

<div className="relative lg:col-span-5 lg:self-stretch">
<div className="sticky top-24 w-full md:top-32">
<span className="mb-6 block text-xs uppercase tracking-[0.22em] text-[#9B8C80]">
                  Our Work
                </span>
<h2 className="relative z-10 mb-8 text-5xl font-normal leading-[0.95] tracking-tight text-[#17120F] md:text-6xl lg:text-8xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                  Projects.
                                                                                                </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
<p className="max-w-sm text-base font-extralight leading-relaxed text-[#6F6258]">
                  A selection of visual identities and digital experiences
                  crafted for impact, elegance, and performance.
                </p>

<div className="pointer-events-none absolute -bottom-28 left-0 text-[160px] font-normal leading-none tracking-[-0.08em] text-[#17120F]/[0.04] md:text-[240px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  03
                </div>
</div>
</div>

<div className="relative flex flex-col gap-12 pb-10 md:gap-24 lg:col-span-7">

<a className="project-card group sticky top-24 block h-[500px] w-full origin-top overflow-hidden rounded-[36px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 will-change-transform md:top-32 md:h-[650px] lg:h-[750px]" data-project-card="" href="#" style={{zIndex: '1'}}>
<div className="relative h-full overflow-hidden rounded-[28px]">
<img alt="BelleSkin Paris" className="h-[115%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-project-image="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1437156-9852-45a9-a752-1cdad5666a32_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/65 via-[#17120F]/10 to-transparent"></div>
<div className="absolute left-6 top-6 rounded-full bg-[#ECE6DD]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                    01 / Beauty
                  </div>

<div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-[#ECE6DD]/90 p-6 backdrop-blur-md md:p-8">
<div className="mb-8 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                        Selected Project
                      </span>
<span className="text-sm font-extralight text-[#9B8C80]">
                        2023
                      </span>
</div>
<h3 className="mb-3 text-4xl font-normal leading-[1] tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      BelleSkin Paris
                    </h3>
<p className="mb-6 max-w-md text-sm font-extralight leading-relaxed text-[#6F6258] md:text-base">
                      Premium skincare brand identity and Shopify experience.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
<span>Beauty</span>
<span>/</span>
<span>Shopify</span>
</div>
</div>
</div>
</a>

<a className="project-card group sticky top-28 block h-[500px] w-full origin-top overflow-hidden rounded-[36px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 will-change-transform md:top-36 md:h-[650px] lg:h-[750px]" data-project-card="" href="#" style={{zIndex: '2'}}>
<div className="relative h-full overflow-hidden rounded-[28px]">
<img alt="Maison Fleur" className="h-[115%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-project-image="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e432f88-6f8c-4db5-93b2-21aa26a133a0_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/65 via-[#17120F]/10 to-transparent"></div>
<div className="absolute left-6 top-6 rounded-full bg-[#ECE6DD]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                    02 / Lifestyle
                  </div>
<div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-[#ECE6DD]/90 p-6 backdrop-blur-md md:p-8">
<div className="mb-8 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                        Selected Project
                      </span>
<span className="text-sm font-extralight text-[#9B8C80]">
                        2023
                      </span>
</div>
<h3 className="mb-3 text-4xl font-normal leading-[1] tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Maison Fleur
                    </h3>
<p className="mb-6 max-w-md text-sm font-extralight leading-relaxed text-[#6F6258] md:text-base">
                      Editorial website for a luxury floral and lifestyle brand.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
<span>Art Direction</span>
<span>/</span>
<span>Framer</span>
</div>
</div>
</div>
</a>

<a className="project-card group sticky top-32 block h-[500px] w-full origin-top overflow-hidden rounded-[36px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 will-change-transform md:top-40 md:h-[650px] lg:h-[750px]" data-project-card="" href="#" style={{zIndex: '3'}}>
<div className="relative h-full overflow-hidden rounded-[28px]">
<img alt="Noir Atelier" className="h-[115%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-project-image="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39300439-ee6a-41a5-a17f-998b114311b8_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/65 via-[#17120F]/10 to-transparent"></div>
<div className="absolute left-6 top-6 rounded-full bg-[#ECE6DD]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                    03 / Fashion
                  </div>
<div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-[#ECE6DD]/90 p-6 backdrop-blur-md md:p-8">
<div className="mb-8 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                        Selected Project
                      </span>
<span className="text-sm font-extralight text-[#9B8C80]">
                        2024
                      </span>
</div>
<h3 className="mb-3 text-4xl font-normal leading-[1] tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Noir Atelier
                    </h3>
<p className="mb-6 max-w-md text-sm font-extralight leading-relaxed text-[#6F6258] md:text-base">
                      Minimal fashion portfolio and e-commerce direction.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
<span>Fashion</span>
<span>/</span>
<span>Creative Direction</span>
</div>
</div>
</div>
</a>

<a className="project-card group sticky top-36 block h-[500px] w-full origin-top overflow-hidden rounded-[36px] border border-[#17120F]/[0.08] bg-[#F6F0E7] p-3 will-change-transform md:top-44 md:h-[650px] lg:h-[750px]" data-project-card="" href="#" style={{zIndex: '4'}}>
<div className="relative h-full overflow-hidden rounded-[28px]">
<img alt="Luma Beauty" className="h-[115%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-project-image="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/897964dd-190c-43f9-aeb4-79d475a1d7a4_3840w.png" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/65 via-[#17120F]/10 to-transparent"></div>
<div className="absolute left-6 top-6 rounded-full bg-[#ECE6DD]/90 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                    04 / Launch
                  </div>
<div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-[#ECE6DD]/90 p-6 backdrop-blur-md md:p-8">
<div className="mb-8 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
                        Selected Project
                      </span>
<span className="text-sm font-extralight text-[#9B8C80]">
                        2024
                      </span>
</div>
<h3 className="mb-3 text-4xl font-normal leading-[1] tracking-tight text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                      Luma Beauty
                    </h3>
<p className="mb-6 max-w-md text-sm font-extralight leading-relaxed text-[#6F6258] md:text-base">
                      Conversion-focused landing page for a clean beauty launch.
                    </p>
<div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[#9B8C80]">
<span>Beauty</span>
<span>/</span>
<span>Landing Page</span>
</div>
</div>
</div>
</a>
</div>
</div>

<div className="relative z-20 mt-20 flex justify-center md:mt-28">
<a className="group inline-flex items-center gap-3 rounded-full border border-[#17120F]/20 px-8 py-4 text-sm font-light text-[#17120F] transition-all duration-300 hover:bg-[#17120F] hover:text-[#FFF8EF]" href="#">
<span>View All Projects</span>
<span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
</a>
</div>
</div>

</section>

<section className="relative overflow-hidden bg-[#17120F] px-5 py-24 text-[#F6F1EA] md:px-10 md:py-32 lg:px-16">
<section className="relative overflow-hidden bg-[#17120F] px-5 py-24 text-[#F6F1EA] md:px-10 md:py-32 lg:px-16">
<div className="mx-auto max-w-[1440px]">

<div className="relative mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
<div className="max-w-2xl">
<span className="mb-6 block text-xs uppercase tracking-[0.22em] text-[#C8A99A]">
                  Client Notes
                </span>
<h2 className="relative z-10 text-5xl font-medium leading-[0.95] tracking-tight text-[#F6F1EA] md:text-6xl lg:text-8xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                              Trusted.
                                                                                                            </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
</div>
<p className="max-w-sm text-base font-light leading-relaxed text-[#B7A99E]">
                Partnerships built on clarity, taste, and a deep understanding
                of beauty-led brands.
              </p>

<div className="pointer-events-none absolute -bottom-12 right-0 text-[160px] font-medium leading-none tracking-[-0.08em] text-white/[0.04] md:text-[240px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                04
              </div>
</div>

<div className="grid gap-4 lg:grid-cols-3 lg:gap-4 gap-x-4 gap-y-4">

<article className="group relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17120F]">
<img alt="Fiurosa New York" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40a33daa-3579-412b-83ea-c969efcb9de9_1600w.webp" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
<div className="relative z-10 flex min-h-[560px] flex-col justify-end p-7 md:p-8">
<div className="transition-all duration-500 group-hover:-translate-y-2">
<div className="mb-3 flex text-[17px] leading-none text-[#F5A94A]">
                      ★★★★★
                    </div>
<p className="text-lg font-medium tracking-[-0.02em] text-white">
                      Fiurosa New York
                    </p>
<div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-56 group-hover:opacity-100">
<p className="max-w-md text-[32px] font-medium leading-[0.98] tracking-[-0.055em] text-white md:text-[40px]" style={{fontFamily: '"Playfair Display", serif'}}>
                        They gave our beauty brand a digital presence that
                        finally felt elegant.
                      </p>
<div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
<p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                          Beauty Brand
                        </p>
<span className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-white">
                          View Story
                        </span>
</div>
</div>
</div>
</div>
</article>

<article className="group relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17120F]">
<img alt="Alex Utah" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1606c367-c776-4d00-b3fa-ad8a24668ad4_1600w.webp" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
<div className="relative z-10 flex min-h-[560px] flex-col justify-end p-7 md:p-8">
<div className="transition-all duration-500 group-hover:-translate-y-2">
<div className="mb-3 flex text-[17px] leading-none text-[#F5A94A]">
                      ★★★★★
                    </div>
<p className="text-lg font-medium tracking-[-0.02em] text-white">
                      Alex Utah
                    </p>
<div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-64 group-hover:opacity-100">
<p className="max-w-md text-[32px] font-medium leading-[0.98] tracking-[-0.055em] text-white md:text-[40px]" style={{fontFamily: '"Playfair Display", serif'}}>
                        They understood fashion aesthetics instantly and
                        translated it beautifully online.
                      </p>
<div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/15 pt-5">
<div>
<p className="text-2xl font-medium tracking-[-0.04em] text-white" style={{fontFamily: '"Playfair Display", serif'}}>
                            5.0
                          </p>
<p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/50">
                            Rating
                          </p>
</div>
<div>
<p className="text-2xl font-medium tracking-[-0.04em] text-white" style={{fontFamily: '"Playfair Display", serif'}}>
                            8w
                          </p>
<p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/50">
                            Launch
                          </p>
</div>
<div className="">
<p className="text-2xl font-medium tracking-[-0.04em] text-white" style={{fontFamily: '"Playfair Display", serif'}}>
                            +42%
                          </p>
<p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/50">
                            Sales
                          </p>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17120F]">
<img alt="Symond Delaware" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e1fbf28-831e-4d42-a71f-a33bc90ff8fc_1600w.webp" style={{filter: 'blur(0px)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
<div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
<div className="relative z-10 flex min-h-[560px] flex-col justify-end p-7 md:p-8">
<div className="transition-all duration-500 group-hover:-translate-y-2 z-10">
<div className="mb-3 flex text-[17px] leading-none text-[#F5A94A]">
                      ★★★★★
                    </div>
<p className="text-lg font-medium tracking-[-0.02em] text-white">
                      Symond Delaware
                    </p>
<div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-56 group-hover:opacity-100">
<p className="max-w-md text-[32px] font-medium leading-[0.98] tracking-[-0.055em] text-white md:text-[40px]" style={{fontFamily: '"Playfair Display", serif'}}>
                        The final website felt premium, confident, and aligned
                        with our campaign.
                      </p>
<div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
<p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                          Fashion Campaign
                        </p>
<span className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-white">
                          View Story
                        </span>
</div>
</div>
</div>
</div>
</article>
</div>

</div>
</section>
</section>

<section className="relative overflow-hidden bg-[#ECE6DD] px-5 py-24 md:px-10 md:py-32 lg:px-16" id="pricing">
<div className="mx-auto max-w-[1440px]">

<div className="relative mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
<div className="max-w-2xl">
<span className="mb-6 block text-xs uppercase tracking-[0.22em] text-[#9B8C80]">
                Atelier La Belle
              </span>
<h2 className="relative z-10 text-5xl font-medium leading-[0.95] tracking-tight text-[#17120F] md:text-6xl lg:text-8xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                            Plans.
                                                                                                          </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
</div>
<div className="max-w-sm">
<p className="text-base font-light leading-relaxed text-[#6F6258]">
                Choose a collaboration model that fits your stage, from a
                refined project to a long-term creative partnership.
              </p>

<div className="mt-8 inline-flex rounded-full border border-[#17120F]/10 bg-[#F6F0E7] p-1">
<button className="rounded-full bg-[#17120F] px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-[#F6F1EA] transition-all duration-300" type="button">
                  Monthly
                </button>
<button className="rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-[#9B8C80] transition-all duration-300 hover:text-[#17120F]" type="button">
                  Yearly
                  <span className="ml-2 text-[#C8A99A]">-15%</span>
</button>
</div>
</div>

<div className="pointer-events-none absolute -bottom-12 right-0 text-[160px] font-medium leading-none tracking-[-0.08em] text-[#17120F]/[0.04] md:text-[240px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              05
            </div>
</div>

<div className="grid gap-6 lg:grid-cols-3 lg:items-center lg:gap-8">

<article className="group relative flex min-h-[640px] flex-col overflow-hidden rounded-[36px] border border-[#17120F]/10 bg-[#F6F0E7]/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A99A]/50 hover:bg-[#F6F0E7] md:p-8 lg:p-10">

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,169,154,0.22),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(23,18,15,0.05),transparent_28%)]"></div>
</div>
<div className="relative z-10 mb-10 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#9B8C80]">
                  01 / Project
                </span>
<span className="h-2 w-2 rounded-full bg-[#C8A99A] transition-all duration-500 group-hover:w-8"></span>
</div>
<div className="relative z-10">
<h3 className="mb-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Per
                  <br/>
                  Project
                </h3>
<p className="max-w-xs text-sm font-light leading-relaxed text-[#6F6258]">
                  For defined scope, clear timelines, and focused brand or
                  website needs.
                </p>
</div>
<div className="relative z-10 my-12">
<p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#9B8C80]">
                  Starting at
                </p>
<div className="text-[56px] font-medium leading-none tracking-[-0.06em] text-[#17120F] md:text-[72px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  $2,800
                </div>
</div>
<ul className="relative z-10 mb-10 space-y-4">
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Fixed number of concepts
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-75 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Brand direction
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-100 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Website design
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-150 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Responsive setup
                </li>
</ul>
<div className="relative z-10 mt-auto translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<a className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#17120F]/20 px-8 py-4 text-sm text-[#17120F] transition-all duration-300 hover:bg-[#17120F] hover:text-[#FFF8EF]" href="#contact">
<span>Book Now</span>
<span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
</a>
</div>
</article>

<article className="group relative flex min-h-[700px] flex-col overflow-hidden rounded-[36px] border border-[#C8A99A]/35 bg-[#17120F] p-6 text-[#F6F1EA] shadow-2xl shadow-[#17120F]/15 transition-all duration-500 hover:-translate-y-2 md:p-8 lg:p-10">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(200,169,154,0.18),transparent_36%),radial-gradient(circle_at_90%_90%,rgba(246,241,234,0.08),transparent_30%)]"></div>
</div>
<div className="absolute right-8 top-8 z-10 rounded-full bg-[#C8A99A] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#17120F]">
                Recommended
              </div>
<div className="relative z-10 mb-10 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A99A]">
                  02 / Retainer
                </span>
</div>
<div className="relative z-10">
<h3 className="mb-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#F6F1EA] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Monthly
                  <br/>
                  Studio
                </h3>
<p className="max-w-xs text-sm font-light leading-relaxed text-[#B7A99E]">
                  Ongoing creative direction, design support, and premium brand
                  evolution.
                </p>
</div>
<div className="relative z-10 my-12">
<p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#C8A99A]">
                  Starting at
                </p>
<div className="text-[56px] font-medium leading-none tracking-[-0.06em] text-[#F6F1EA] md:text-[72px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  $5,000
                  <span className="ml-2 text-base font-light tracking-normal text-[#B7A99E]" style={{fontFamily: 'Inter, sans-serif'}}>
                    /mo
                  </span>
</div>
</div>
<ul className="relative z-10 mb-10 space-y-4">
<li className="flex items-center gap-3 text-sm text-[#B7A99E] transition-transform duration-500 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A] text-xs text-[#17120F]">
                    ✓
                  </span>
                  Ongoing creative direction
                </li>
<li className="flex items-center gap-3 text-sm text-[#B7A99E] transition-transform duration-500 delay-75 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A] text-xs text-[#17120F]">
                    ✓
                  </span>
                  Unlimited design requests
                </li>
<li className="flex items-center gap-3 text-sm text-[#B7A99E] transition-transform duration-500 delay-100 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A] text-xs text-[#17120F]">
                    ✓
                  </span>
                  Campaign visuals
                </li>
<li className="flex items-center gap-3 text-sm text-[#B7A99E] transition-transform duration-500 delay-150 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A] text-xs text-[#17120F]">
                    ✓
                  </span>
                  Pause anytime
                </li>
</ul>
<div className="relative z-10 mt-auto">
<a className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F6F1EA] px-8 py-4 text-sm text-[#17120F] transition-all duration-300 hover:bg-[#C8A99A]" href="#contact">
<span>Book Now</span>
<span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
</a>
</div>
</article>

<article className="group relative flex min-h-[640px] flex-col overflow-hidden rounded-[36px] border border-[#17120F]/10 bg-[#F6F0E7]/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A99A]/50 hover:bg-[#F6F0E7] md:p-8 lg:p-10">

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,169,154,0.22),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(23,18,15,0.05),transparent_28%)]"></div>
</div>
<div className="relative z-10 mb-10 flex items-center justify-between">
<span className="text-[10px] uppercase tracking-[0.2em] text-[#9B8C80]">
                  03 / Launch
                </span>
<span className="h-2 w-2 rounded-full bg-[#C8A99A] transition-all duration-500 group-hover:w-8"></span>
</div>
<div className="relative z-10">
<h3 className="mb-4 text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#17120F] md:text-5xl" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Brand
                  <br/>
                  Launch
                </h3>
<p className="max-w-xs text-sm font-light leading-relaxed text-[#6F6258]">
                  Complete zero-to-one creative foundation for a new beauty or
                  fashion brand.
                </p>
</div>
<div className="relative z-10 my-12">
<p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#9B8C80]">
                  Starting at
                </p>
<div className="text-[56px] font-medium leading-none tracking-[-0.06em] text-[#17120F] md:text-[72px]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  $7,500
                </div>
</div>
<ul className="relative z-10 mb-10 space-y-4">
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Full brand identity
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-75 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Shopify or Framer setup
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-100 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Art direction and guidelines
                </li>
<li className="flex items-center gap-3 text-sm text-[#6F6258] transition-transform duration-500 delay-150 group-hover:translate-x-1">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A99A]/25 text-xs text-[#17120F]">
                    ✓
                  </span>
                  Launch assets and support
                </li>
</ul>
<div className="relative z-10 mt-auto translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<a className="group/btn inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#17120F]/20 px-8 py-4 text-sm text-[#17120F] transition-all duration-300 hover:bg-[#17120F] hover:text-[#FFF8EF]" href="#contact">
<span>Start Your Launch</span>
<span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-16 max-w-[1000px] mx-auto border-t border-[#17120F]/[0.08]">
<div className="text-center mb-16">
<span className="text-xs uppercase tracking-[0.18em] text-[#9B8C80] mb-6 block">
            Quick Answers
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-[#17120F]" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                        FAQs.
                                                                                                      </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
</div>
<div className="space-y-2">

<details className="group border-b border-[#17120F]/[0.08] py-6 [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex justify-between items-center cursor-pointer list-none text-lg md:text-xl tracking-tight font-medium text-[#17120F]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              What services does Atelier La Belle offer?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#9B8C80]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#6F6258] mt-4 font-light leading-relaxed text-sm md:text-base pr-8">
              We specialize in brand identity, editorial web design, UI/UX,
              motion graphics, Shopify e-commerce experiences, and overall
              creative direction tailored specifically for fashion and beauty
              brands.
            </p>
</details>

<details className="group border-b border-[#17120F]/[0.08] py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none text-lg md:text-xl tracking-tight font-medium text-[#17120F]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Do you work with small brands or startups?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#9B8C80]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#6F6258] mt-4 font-light leading-relaxed text-sm md:text-base pr-8">
              Yes, we love working with emerging brands that have a clear vision
              and an appreciation for premium design. Our "Brand Launch" package
              is specifically designed to give startups a high-end foundation.
            </p>
</details>

<details className="group border-b border-[#17120F]/[0.08] py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none text-lg md:text-xl tracking-tight font-medium text-[#17120F]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Can you redesign an existing Shopify store?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#9B8C80]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#6F6258] mt-4 font-light leading-relaxed text-sm md:text-base pr-8">
              Absolutely. We frequently audit and redesign existing Shopify
              stores to improve aesthetics, user experience, and conversion
              rates, elevating them to meet luxury standards.
            </p>
</details>

<details className="group border-b border-[#17120F]/[0.08] py-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none text-lg md:text-xl tracking-tight font-medium text-[#17120F]" style={{fontFamily: '\'Playfair Display\', serif'}}>
              How long does a project usually take?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-[#9B8C80]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#6F6258] mt-4 font-light leading-relaxed text-sm md:text-base pr-8">
              Depending on the scope, a standard branding and web design project
              takes between 6 to 10 weeks. We ensure every detail is refined
              before launch.
            </p>
</details>
</div>
</section>

<section className="py-24 md:py-32 px-5 md:px-10 lg:px-16 bg-[#17120F] text-[#F6F1EA] rounded-t-[40px] md:rounded-t-[60px] mt-12" id="contact">
<div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h2 className="text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tight font-medium mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          Ready
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          to
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          create
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          a
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          brand
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          with
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                          presence?
                                                                                                        </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
<p className="text-base md:text-lg text-[#9B8C80] max-w-md mb-12 font-light leading-relaxed">
              Let's build a refined digital experience that makes your fashion
              or beauty brand feel unforgettable.
            </p>
<div className="flex items-center gap-4">
<img alt="Studio Director" className="w-16 h-16 rounded-full object-cover grayscale border border-white/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
<div>
<p className="text-sm tracking-wide font-medium">Elena Rostova</p>
<p className="text-xs text-[#9B8C80] uppercase tracking-wider mt-1">
                  Creative Director
                </p>
</div>
</div>
</div>

<div className="bg-[#211916] p-8 md:p-12 rounded-[28px] border border-white/10">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#9B8C80]">
                    Name
                  </label>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#C8A99A] transition-colors placeholder:text-white/30" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#9B8C80]">
                    Email
                  </label>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#C8A99A] transition-colors placeholder:text-white/30" placeholder="jane@brand.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-[#9B8C80]">
                  Brand Name
                </label>
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#C8A99A] transition-colors placeholder:text-white/30" placeholder="Your brand or company" type="text"/>
</div>
<div className="space-y-4 pt-2">
<label className="text-xs uppercase tracking-widest text-[#9B8C80]">
                  Project Interest
                </label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs px-4 py-2.5 rounded-full border border-white/20 text-[#9B8C80] peer-checked:bg-[#F6F1EA] peer-checked:text-[#17120F] transition-all">
                      Web Design
                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs px-4 py-2.5 rounded-full border border-white/20 text-[#9B8C80] peer-checked:bg-[#F6F1EA] peer-checked:text-[#17120F] transition-all">
                      Branding
                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs px-4 py-2.5 rounded-full border border-white/20 text-[#9B8C80] peer-checked:bg-[#F6F1EA] peer-checked:text-[#17120F] transition-all">
                      Shopify
                    </div>
</label>
</div>
</div>
<div className="space-y-2 pt-2">
<label className="text-xs uppercase tracking-widest text-[#9B8C80]">
                  Message
                </label>
<textarea className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-[#C8A99A] transition-colors resize-none placeholder:text-white/30" placeholder="Tell us about your vision..." rows="3"></textarea>
</div>
<button className="w-full mt-8 bg-[#F6F1EA] text-[#17120F] text-sm px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 font-medium tracking-wide" type="button">
                Submit Inquiry
              </button>
</form>
</div>
</div>
</section>
</main>

<footer className="overflow-hidden bg-[#17120F] px-5 pt-20 pb-10 text-[#F6F1EA] md:px-10 lg:px-16">
<div className="mx-auto mb-20 grid max-w-[1440px] gap-12 md:grid-cols-4 md:gap-8">
<div className="md:col-span-2">
<a className="mb-6 block text-3xl font-medium tracking-tighter" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Atelier La Belle
          </a>
<p className="max-w-sm text-sm font-light leading-relaxed text-[#9B8C80]">
            Atelier La Belle is a boutique creative studio for fashion, beauty,
            wellness, and lifestyle brands.
          </p>
</div>
<div>
<h4 className="mb-6 block text-xs uppercase tracking-widest text-[#C8A99A]">
            Studio
          </h4>
<ul className="space-y-4 text-sm text-[#9B8C80]">
<li>
<a className="transition-colors hover:text-white" href="#projects">
                Projects
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#services">
                Services
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#about">
                About
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#pricing">
                Pricing
              </a>
</li>
</ul>
</div>
<div>
<h4 className="mb-6 block text-xs uppercase tracking-widest text-[#C8A99A]">
            Socials
          </h4>
<ul className="space-y-4 text-sm text-[#9B8C80]">
<li>
<a className="transition-colors hover:text-white" href="#">
                Instagram
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                Pinterest
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">
                LinkedIn
              </a>
</li>
<li>
<a className="transition-colors hover:text-white" href="#">Behance</a>
</li>
</ul>
</div>
</div>

<div className="mx-auto max-w-[1440px]">
<h2 className="pointer-events-none select-none whitespace-nowrap text-[17vw] font-medium leading-[0.82] tracking-[-0.08em] text-[#F6F1EA]/[0.08]" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                      Atelier
                                                                                                    </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                      La
                                                                                                    </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
<span className="gsap-word-wrapper">
<span className="gsap-word">
                                                                                                      Belle
                                                                                                    </span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</h2>
</div>

<div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 pt-8 text-xs tracking-wide text-[#9B8C80] md:flex-row">
<p>© 2024 Atelier La Belle. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-white" href="#">
            Privacy Policy
          </a>
<a className="transition-colors hover:text-white" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>



    </>
  );
}
