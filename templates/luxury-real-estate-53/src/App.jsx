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



      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
      });
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      function splitTextToWords(element) {
          const text = element.textContent.trim();
          const words = text.split(/\s+/);
          element.innerHTML = '';
          words.forEach(word => {
              const wordWrap = document.createElement('span');
              wordWrap.className = 'inline-block overflow-hidden align-top pb-[0.1em]';
              wordWrap.innerHTML = `<span class="word-inner inline-block translate-y-[110%]">${word}&nbsp;</span>`;
              element.appendChild(wordWrap);
          });
      }

      document.querySelectorAll('.split-animate').forEach(el => {
          splitTextToWords(el);
      });

      function initSite() {
          gsap.to('.hero-text .block', {
              y: 0,
              stagger: 0.1,
              duration: 1.5,
              ease: 'power4.out'
          });
          gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });

          gsap.to('.hero-img', {
              yPercent: 30,
              ease: 'none',
              scrollTrigger: {
                  trigger: '.hero-img',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: true
              }
          });

          const splitElements = document.querySelectorAll('.split-animate');
          splitElements.forEach(el => {
              const words = el.querySelectorAll('.word-inner');
              gsap.to(words, {
                  y: "0%",
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.02,
                  scrollTrigger: {
                      trigger: el,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  }
              });
          });

          const cards = gsap.utils.toArray('.card-item');

          cards.forEach((card, i) => {
              const nextCard = cards[i+1];
              if (nextCard) {
                  gsap.to(card.querySelector('.card-inner'), {
                      scale: 0.9,
                      opacity: 0.4,
                      ease: "none",
                      scrollTrigger: {
                          trigger: nextCard,
                          start: "top bottom",
                          end: "top 10vh",
                          scrub: true
                      }
                  });
              }
          });

          gsap.from('.footer-sticky > div', {
              y: 100,
              opacity: 0.5,
              scale: 0.9,
              scrollTrigger: {
                  trigger: '.wrapper',
                  start: 'bottom bottom',
                  end: '+=100%',
                  scrub: true
              }
          });
      }

      initSite();
    


      (function fixLeakedSchema() {
        const clean = () => {
          const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while ((node = walker.nextNode())) {
            if (node.nodeValue.includes('schema.org') && node.nodeValue.includes('aura.build')) {
              node.nodeValue = '';
            }
          }
        };
        clean();
        document.addEventListener('DOMContentLoaded', clean);
        window.addEventListener('load', clean);
        setTimeout(clean, 50);
        setTimeout(clean, 250);
        setTimeout(clean, 500);
        const observer = new MutationObserver(clean);
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[9000] opacity-5" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E&quot'}}></div>


<nav className="fixed left-0 top-0 w-full flex z-[100] text-white mix-blend-difference p-6 md:p-8 items-center justify-between">
<div className="font-['Syncopate',sans-serif] font-medium text-xl tracking-tight">
        12 VALHALLA
      </div>
<div className="hidden md:flex gap-10 text-base uppercase tracking-widest">
<a className="hover:text-gray-300 transition-colors" href="#neighborhood">
          neighborhood
        </a>
<a className="hover:text-gray-300 transition-colors" href="#features">
          the valhalla
        </a>
<a className="hover:text-gray-300 transition-colors" href="#tour">
          book a private tour
        </a>
</div>
</nav>

<div className="wrapper z-10 bg-[#E3E1DC] mb-[100vh] relative shadow-[0_50px_100px_rgba(0,0,0,0.5)]">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="hero-img w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0479fc57-4e2a-4fe8-b488-fc3f6aefc556_3840w.jpg"/>
<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="font-['Syncopate',sans-serif] text-[12vw] leading-none hero-text overflow-hidden tracking-tight">
<span className="block translate-y-full">THE</span>
</h1>
<h1 className="font-['Syncopate',sans-serif] text-[12vw] leading-none hero-text overflow-hidden tracking-tight">
<span className="block translate-y-full">VALHALLA</span>
</h1>
<p className="uppercase hero-fade text-lg tracking-[0.5em] opacity-0 mix-blend-difference mt-8">
            luxury family living in Beaches-Birchcliff
          </p>
</div>
</section>

<section className="w-full max-w-[1800px] mx-auto pt-32 px-6 md:px-20 relative z-20">
<div className="w-full aspect-video overflow-hidden rounded-2xl md:rounded-3xl bg-[#1a1a1a] shadow-xl relative z-20">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/cSmMYlSgZyM" title="YouTube video player"></iframe>
</div>
</section>
<section className="md:px-20 grid md:grid-cols-2 gap-16 bg-[#E3E1DC] max-w-[1800px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 gap-x-16 gap-y-16" id="neighborhood">
<div className="">
<h2 className="font-['Syncopate',sans-serif] text-4xl md:text-5xl leading-tight split-animate tracking-tight">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                12 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Valhalla 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Blvd. 
              </span>
</span>
</h2>
</div>
<div className="leading-relaxed text-2xl font-thin text-gray-700 tracking-tight">
<p className="split-animate mb-8">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                A 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                desirable 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                family 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                location 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                in 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Beaches-Birchcliff. 
              </span>
</span>
</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="split-animate text-base font-light tracking-widest uppercase">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Toronto, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Ontario 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                / 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Custom 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Built 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                2024 
              </span>
</span>
</div>
</div>
<div className="">
<h2 className="font-['Syncopate',sans-serif] text-3xl md:text-4xl leading-tight split-animate tracking-tight">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Beaches-Birchcliff 
              </span>
</span>
</h2>
</div>
<div className="text-lg md:text-xl font-thin leading-relaxed text-gray-700 tracking-tight flex flex-col gap-6">
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Birchcliff 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                is 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                one 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                of 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                those 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                rare 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Toronto 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                neighbourhoods 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                that 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                quietly 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                gives 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                you 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                everything. 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Set 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                along 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                the 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Scarborough 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Bluffs 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                overlooking 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Lake 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Ontario, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                it 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                blends 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                natural 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                beauty 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                with 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                everyday 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                convenience 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                in 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                a 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                way 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                that 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                feels 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                effortless. 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Morning 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                walks 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                along 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                the 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                waterfront, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                coffee 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                on 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Kingston 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Road, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                quick 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                access 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                to 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                the 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                city 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                all 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                become 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                part 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                of 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                your 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                routine. 
              </span>
</span>
</p>
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                From 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                here, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                you 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                are 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                connected 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                in 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                every 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                direction. 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Downtown 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Toronto 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                is 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                within 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                easy 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                reach, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                the 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                401 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                DVP 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                are 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                close 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                by, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                transit 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                options 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                make 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                commuting 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                simple. 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                At 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                the 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                same 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                time, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                you 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                are 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                surrounded 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                by 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                parks, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                trails, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                great 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                schools, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                a 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                tight-knit 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                community 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                that 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                gives 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Birchcliff 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                its 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                charm. 
              </span>
</span>
</p>
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                It 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                is 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                a 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                neighbourhood 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                that 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                feels 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                calm 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                without 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                being 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                disconnected, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                established 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                without 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                feeling 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                dated, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                and 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                vibrant 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                without 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                being 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                overwhelming. 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                In 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                Birchcliff, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                you 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                are 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                never 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                far 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                from 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                what 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                you 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                need, 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                but 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                always 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                close 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                to 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                what 
              </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                matters. 
              </span>
</span>
</p>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col lg:flex-row gap-16 pt-12 mt-4 border-t border-black/10">
<div className="lg:w-7/12 w-full h-[500px] lg:h-auto min-h-[400px] overflow-hidden bg-gray-200 rounded-2xl md:rounded-3xl">
<iframe allowfullscreen="" className="w-full h-full min-h-[400px] z-[1]" loading="lazy" src="https://maps.google.com/maps?q=12%20Valhalla%20Blvd,%20Toronto&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" style={{border: '0', filter: 'grayscale(100%) contrast(1.1) opacity(0.9)'}}></iframe>
</div>
<div className="lg:w-5/12 w-full flex flex-col gap-10">
<div className="">
<div className="uppercase text-sm tracking-widest opacity-50 mb-2">
                Explore the Area
              </div>
<h3 className="font-['Syncopate',sans-serif] text-3xl tracking-tight text-[#121212]">
                LOCAL HIGHLIGHTS
              </h3>
</div>
<ul className="text-lg font-thin flex flex-col gap-6 text-gray-700">
<li className="flex items-start gap-4">
<svg className="w-5 h-5 shrink-0 mt-1 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div className="">
<span className="block font-medium text-black tracking-tight text-xl mb-1">
                    The Toronto Hunt Club
                  </span>
<span className="block text-base opacity-80">
                    Exclusive golf and country club overlooking the lake
                  </span>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="w-5 h-5 shrink-0 mt-1 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div className="">
<span className="block font-medium text-black tracking-tight text-xl mb-1">
                    Birchcliff Public School
                  </span>
<span className="block text-base opacity-80">
                    Highly rated local public school within walking distance
                  </span>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="w-5 h-5 shrink-0 mt-1 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div>
<span className="block font-medium text-black tracking-tight text-xl mb-1">
                    Rosetta McClain Gardens
                  </span>
<span className="block text-base opacity-80">
                    Beautiful floral gardens with stunning views of Lake Ontario
                  </span>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="w-5 h-5 shrink-0 mt-1 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div>
<span className="block font-medium text-black tracking-tight text-xl mb-1">
                    City Cottage Market
                  </span>
<span className="block text-base opacity-80">
                    Local favorite for gourmet groceries, produce, and coffee
                  </span>
</div>
</li>
<li className="flex items-start gap-4">
<svg className="w-5 h-5 shrink-0 mt-1 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div>
<span className="block font-medium text-black tracking-tight text-xl mb-1">
                    Corbin's
                  </span>
<span className="block text-base opacity-80">
                    Cozy cafe, bakery, and community gathering hub
                  </span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="stack-section text-[#E3E1DC] bg-[#121212] pt-[10vh] pb-[10vh] relative" id="features">
<div className="text-center mb-20 px-6 max-w-4xl mx-auto">
<div className="uppercase text-base tracking-widest opacity-50 mb-4">
            designed for luxury family living
          </div>
<h2 className="md:text-7xl text-5xl tracking-tight font-['Syncopate',sans-serif] mb-12">
            THE VALHALLA
          </h2>
<div className="w-full aspect-video mb-12 overflow-hidden rounded-2xl md:rounded-3xl bg-[#1a1a1a] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] relative z-20">
<img alt="Modern Geometric Luxury Home at Twilight" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71e61f49-3f74-42ec-b7ab-e7993bb0b113_1600w.jpg"/>
</div>
<div className="text-lg md:text-xl font-thin leading-relaxed text-gray-300 tracking-tight flex flex-col gap-6 text-left">
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  A 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  contemporary 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  home 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  designed 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  for 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  modern 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  family 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  living, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  where 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  architecture, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  interiors, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  everyday 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  function 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  come 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  together 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  seamlessly. 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  Thoughtfully 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  built 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  for 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  a 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  busy 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  lifestyle, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  the 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  space 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  balances 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  sophistication 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  with 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  comfort, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  creating 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  an 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  environment 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  that 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  feels 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  both 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  elevated 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  effortless. 
                </span>
</span>
</p>
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  Clean 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  lines 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  expansive 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  windows 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  bring 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  in 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  an 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  abundance 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  of 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  natural 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  light, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  while 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  carefully 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  selected 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  premium 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  materials 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  add 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  warmth, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  texture, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  durability 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  throughout. 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  Every 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  detail 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  has 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  been 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  considered 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  create 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  a 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  calm, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  timeless 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  atmosphere 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  that 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  adapts 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  both 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  daily 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  routines 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  moments 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  of 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  gathering. 
                </span>
</span>
</p>
<p className="split-animate">
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  The 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  home’s 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  connection 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  nature 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  is 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  felt 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  in 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  every 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  space, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  from 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  open, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  flowing 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  interiors 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  its 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  relationship 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  with 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  the 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  outdoors. 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  It 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  is 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  a 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  place 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  designed 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  not 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  just 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  be 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  lived 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  in, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  but 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  to 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  enhance 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  how 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  you 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  live, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  offering 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  the 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  perfect 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  blend 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  of 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  luxury, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  functionality, 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  and 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  understated 
                </span>
</span>
<span className="inline-block overflow-hidden align-top pb-[0.1em]">
<span className="word-inner inline-block translate-y-[110%]">
                  elegance. 
                </span>
</span>
</p>
</div>
</div>
<div className="stack-container w-full max-w-[1400px] mx-auto relative pb-[10vh]">
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] rounded-2xl md:rounded-3xl">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div className="">
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    01
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Custom Kitchen
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Chef's Dream
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  State-of-the-art appliances, custom cabinetry, and an
                  expansive island perfect for family gatherings.
                </div>
</div>
<div className="card-img-wrap relative w-full md:h-full overflow-hidden order-none md:order-none flex-1 min-h-[40vh] md:min-h-0">
<img alt="Project 1" className="card-img transition-transform duration-[1500ms] ease-in-out group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de5a0bbd-7de2-4571-9e8b-8f7afcb6df4c_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    02
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Primary Retreat
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Sanctuary
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  A spacious master bedroom featuring a walk-in closet and a
                  spa-like ensuite bathroom for ultimate relaxation.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Project 2" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca558610-94a5-4f20-8532-1bddf0524ca2_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    03
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Dining Room
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Scandi-Style
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  An elegant, light-filled dining space featuring minimalist art
                  and modern Scandinavian design, perfect for hosting family and
                  friends.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Project 3" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6cabf8a-63d4-4738-8759-2c5e774e8e4d_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    04
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Executive Office
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Overlooking Lake
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  A sophisticated workspace featuring panoramic lake views,
                  inspiring design, and a quiet atmosphere for focused work.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Executive Office" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110 object-right" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6560c3dd-014d-4768-891d-8d46a6e25dc5_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    05
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Family Room
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Sleek Built-Ins
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  Open spacious family room featuring sleek built-ins, natural
                  wood accents, and a seamless flow for everyday living.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Modern Open-Concept Living Room with Wood Accents" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1fc333-cfbb-4f5f-b4cc-829e3cf905ae_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    06
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    High End Bathrooms
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Refined
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  Premium fixtures and custom tile work providing a lavish
                  experience in every bathroom.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Project 6" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7a2a0aa-1208-43f5-b996-23f45722c886_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    07
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Family-Ready Rooms
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Additional Spaces
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  Thoughtfully designed secondary bedrooms that provide comfort,
                  privacy, and ample space for family members and guests.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Modern Minimalist Bedroom with Blue Bed Frame" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cfb0892-e066-46f5-b7aa-e2e6273910c8_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    08
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Basement
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Soaring Ceilings
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  A spacious walkout basement featuring soaring ceilings, modern
                  minimalist design, and a custom wooden mudroom.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Modern Minimalist Hallway with Wooden Mudroom and Stairs" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8b47c10-6158-4960-b772-0dc8a51de985_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    09
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    Skylights
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Natural Light
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  Skylights throughout flooding the spaces with natural light.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Modern Minimalist Hallway with Skylights" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c60376d-ae9d-4b46-aa94-8f63bfe24b88_1600w.jpg"/>
</div>
</div>
</div>
<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner group w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]">
<div className="card-content p-8 md:p-16 flex flex-col justify-center gap-6 bg-[#1a1a1a] z-10 order-1 md:order-none">
<div>
<div className="text-5xl font-['Syncopate',sans-serif] mb-2 text-[#E3E1DC] opacity-30 tracking-tight">
                    10
                  </div>
<h3 className="text-3xl font-medium tracking-tight uppercase">
                    The Bluffs
                  </h3>
<p className="text-lg mt-4 opacity-70 uppercase tracking-widest">
                    Prime Location
                  </p>
</div>
<div className="text-gray-400 font-thin text-xl">
                  Overlooking Lake Ontario and positioned on the bluffs.
                </div>
</div>
<div className="card-img-wrap relative w-full h-1/2 md:h-full overflow-hidden order-none md:order-none">
<img alt="Aerial View of Coastal Residential Neighborhood" className="card-img object-cover w-full h-full transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81fffb68-337a-4337-a1de-99cca6c9f9dc_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] flex flex-col items-center justify-center relative z-10 px-6" id="tour">
<h2 className="font-['Syncopate',sans-serif] text-3xl md:text-5xl mb-8 tracking-tight text-center">
          BOOK A PRIVATE TOUR
        </h2>
<div className="max-w-xl text-gray-600 font-thin mb-12 leading-relaxed text-xl text-center">
          Experience the epitome of family living in Birchcliff. Schedule your
          exclusive viewing today.
        </div>
<form action="https://formsubmit.co/suba@naganathan.com" className="w-full max-w-md flex flex-col gap-6" method="POST">
<input name="_captcha" type="hidden" value="true"/>
<input className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-thin text-xl placeholder:text-gray-500" name="name" placeholder="Full Name" required="" type="text"/>
<input className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-thin text-xl placeholder:text-gray-500" name="email" placeholder="Email Address" required="" type="email"/>
<input className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-thin text-xl placeholder:text-gray-500" name="phone" placeholder="Phone Number" required="" type="tel"/>
<button className="mt-8 bg-[#121212] text-[#E3E1DC] py-4 px-8 uppercase tracking-widest text-sm hover:bg-black transition-colors border-none cursor-pointer" type="submit">
            Submit Request
          </button>
</form>
</section>
</div>

<footer className="footer-sticky fixed bottom-0 left-0 w-full h-screen z-[1] bg-[#111] text-white flex flex-col justify-center items-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0479fc57-4e2a-4fe8-b488-fc3f6aefc556_3840w.jpg"/>
</footer>



    </>
  );
}
