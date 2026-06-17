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



      (()=>{const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(window.Lenis&&!reduce){const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smooth:true});if(window.ScrollTrigger)lenis.on('scroll',ScrollTrigger.update);if(window.gsap){gsap.ticker.add(time=>{lenis.raf(time*1000)});gsap.ticker.lagSmoothing(0)}}if(!window.gsap)return;if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);const wrapWords=el=>{if(el.__auraSplit)return;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;const parent=node.parentElement;if(!parent||parent.closest('script,style,noscript,input,textarea,select')||parent.classList.contains('aura-animate-word'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{const frag=document.createDocumentFragment();node.nodeValue.split(/(\s+)/).forEach(part=>{if(!part.trim()){frag.appendChild(document.createTextNode(part))}else{const mask=document.createElement('span');mask.className='aura-word-mask';const word=document.createElement('span');word.className='aura-animate-word';word.textContent=part;mask.appendChild(word);frag.appendChild(mask)}});node.parentNode.replaceChild(frag,node)});el.__auraSplit=true};const textBlocks=[...document.querySelectorAll('h1,h2,h3,p,a,button')].filter(el=>el.textContent.trim()&&!el.closest('.reveal-text')&&!el.querySelector('.reveal-text')&&!el.querySelector('input,textarea,select'));textBlocks.forEach(wrapWords);const wordGroups=[...textBlocks.map(el=>({el,words:el.querySelectorAll('.aura-animate-word')})),...[...document.querySelectorAll('.reveal-text')].map(el=>({el,words:el.querySelectorAll('.reveal-word')}))].filter(group=>group.words.length);if(reduce){gsap.set('.aura-animate-word,.reveal-word',{clearProps:'all',opacity:1,filter:'none',y:0});return}gsap.set('.aura-animate-word',{opacity:0,y:24,filter:'blur(10px)'});gsap.set('.reveal-word',{opacity:0,y:'110%',filter:'blur(10px)'});const playWords=group=>gsap.to(group.words,{opacity:1,y:0,filter:'blur(0px)',duration:.85,stagger:.035,ease:'power3.out',overwrite:true});const wordObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const group=wordGroups.find(item=>item.el===entry.target);if(group)playWords(group);wordObserver.unobserve(entry.target)}})},{threshold:.15,rootMargin:'0px 0px -10% 0px'});wordGroups.forEach(group=>wordObserver.observe(group.el));const elementTargets=[...document.querySelectorAll('header,section > div,.grid > div,footer form,img,.marquee-track')].filter((el,index,array)=>!el.closest('script,style')&&!el.matches('h1,h2,h3,p,a,button')&&array.indexOf(el)===index);gsap.set(elementTargets,{autoAlpha:0,y:38,filter:'blur(14px)'});const elementObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){gsap.to(entry.target,{autoAlpha:1,y:0,filter:'blur(0px)',duration:1,delay:(entry.target.__auraOrder||0)*.04,ease:'power3.out',overwrite:true});elementObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});elementTargets.forEach((el,index)=>{el.__auraOrder=index%6;elementObserver.observe(el)});if(window.ScrollTrigger){gsap.to('.parallax-img',{yPercent:20,ease:'none',scrollTrigger:{trigger:'.parallax-container',start:'top bottom',end:'bottom top',scrub:true}})}})();
    


(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }

  function setupVideo(video) {
    if (video.__auraVideoReady === true) return;
    video.__auraVideoReady = true;
    video.removeAttribute("data-aura-video-ready");
    video.removeAttribute("data-aura-video-played");
    video.muted = true;
    video.playsInline = true;

    var preset = video.dataset.auraVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () {
        playVideo(video);
      });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__auraVideoPlayed === true) {
            return;
          }
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });

    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__auraVideoPlayed = true;
      }, { once: true });
    }

    observer.observe(video);
  }

  function setupVideos() {
    document
      .querySelectorAll("video[data-aura-video-preset]")
      .forEach(setupVideo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();
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
      
<style id="beige-palette-overrides">
      [class~='bg-[#E3E7E0]']{background-color:#E8DDCC!important;}[class~='bg-[#D5DBD1]']{background-color:#DDD1BE!important;}[class~='bg-[#2A3324]']{background-color:#3A2F24!important;}[class~='bg-[#5C715E]']{background-color:#8A6F4D!important;}[class~='bg-[#1F261B]']{background-color:#2F261D!important;}[class~='hover:bg-[#5C715E]']:hover{background-color:#8A6F4D!important;}[class~='hover:bg-[#2A3324]']:hover{background-color:#3A2F24!important;}[class~='hover:bg-[#C4CFC0]']:hover{background-color:#D2C2AA!important;}[class~='hover:bg-[#D5DBD1]/50']:hover{background-color:rgba(221,209,190,.5)!important;}[class~='text-[#2A3324]']{color:#3A2F24!important;}[class~='text-[#2A3324]/80']{color:rgba(58,47,36,.8)!important;}[class~='text-[#2A3324]/70']{color:rgba(58,47,36,.7)!important;}[class~='text-[#2A3324]/60']{color:rgba(58,47,36,.6)!important;}[class~='text-[#2A3324]/50']{color:rgba(58,47,36,.5)!important;}[class~='text-[#5C715E]']{color:#8A6F4D!important;}[class~='text-[#E3E7E0]']{color:#E8DDCC!important;}[class~='text-[#E3E7E0]/70']{color:rgba(232,221,204,.7)!important;}[class~='text-[#E3E7E0]/60']{color:rgba(232,221,204,.6)!important;}[class~='text-[#E3E7E0]/50']{color:rgba(232,221,204,.5)!important;}[class~='hover:text-[#2A3324]']:hover{color:#3A2F24!important;}[class~='hover:text-[#E3E7E0]']:hover{color:#E8DDCC!important;}[class~='hover:text-[#C4CFC0]']:hover{color:#D2C2AA!important;}[class~='border-[#C4CFC0]']{border-color:#D2C2AA!important;}[class~='border-[#C4CFC0]/60']{border-color:rgba(210,194,170,.6)!important;}[class~='border-[#E3E7E0]']{border-color:#E8DDCC!important;}[class~='border-[#E3E7E0]/30']{border-color:rgba(232,221,204,.3)!important;}[class~='border-[#E3E7E0]/20']{border-color:rgba(232,221,204,.2)!important;}[class~='border-[#2A3324]']{border-color:#3A2F24!important;}[class~='border-[#5C715E]']{border-color:#8A6F4D!important;}[class~='hover:border-[#C4CFC0]']:hover{border-color:#D2C2AA!important;}[class~='placeholder-[#E3E7E0]/50']::placeholder{color:rgba(232,221,204,.5)!important;}
    </style>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between border-x border-[#C4CFC0]/60">
<div className="h-full border-r border-[#C4CFC0]/60 w-1/3 hidden md:block"></div>
<div className="h-full border-r border-[#C4CFC0]/60 w-1/3 hidden md:block"></div>
</div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="py-6 flex justify-between items-start border-b border-[#C4CFC0]">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm uppercase tracking-widest text-[#2A3324]/70">
<a className="hover:text-[#2A3324] transition-colors font-manrope" href="#">
            Retreats
          </a>
<span className="font-manrope">/</span>
<a className="hover:text-[#2A3324] transition-colors font-manrope" href="#">
            Philosophy
          </a>
<span className="font-manrope">/</span>
<a className="hover:text-[#2A3324] transition-colors font-manrope" href="#">
            Facilitators
          </a>
<span className="font-manrope">/</span>
<a className="hover:text-[#2A3324] transition-colors font-manrope" href="#">
            Journal
          </a>
</nav>
<div className="hidden sm:block text-[#5C715E]">
<iconify-icon className="text-3xl" icon="solar:leaf-broken"></iconify-icon>
</div>
</header>

<section className="pt-16 pb-12 md:pt-24 md:pb-16 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight w-full md:w-3/4 font-fraunces font-medium">
            Somatic
            <br/>
<span className="pr-4 font-fraunces font-medium">Sanctuary</span>
<span className="hidden md:inline-block w-24 h-[2px] bg-[#2A3324] align-middle mb-4"></span>
            Retreats
          </h1>
<div className="mt-8 md:mt-0 md:w-1/4 flex flex-col items-start md:items-end text-left md:text-right">
<a className="inline-block border-b border-[#2A3324] pb-1 mb-6 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity font-manrope" href="#booking">
              Reserve Space
            </a>
<div className="relative w-40 h-32 md:w-48 md:h-40 group cursor-pointer shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" data-grayscale="true">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Minimalist retreat facade" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ec0494-aa88-4f04-bae2-37137852e6a1_3840w.png"/>
</div>
<div className="absolute bottom-2 left-2 bg-[#2A3324] text-[#E3E7E0] p-1 rounded-sm flex items-center justify-center z-10">
<iconify-icon className="text-base" icon="solar:arrow-right-broken"></iconify-icon>
</div>
</div>
<p className="text-sm mt-4 text-[#2A3324]/70 text-left font-manrope">
              Cultivating inner stillness through mindful movement and
              ecological harmony.
            </p>
</div>
</div>
<div className="flex justify-between items-center py-4 border-y border-[#C4CFC0] text-xs uppercase tracking-widest text-[#2A3324]/70">
<span className="font-manrope">Autumn Equinox</span>
<span className="hidden sm:block font-manrope">2024</span>
<span className="font-manrope">Alpine Immersion</span>
</div>

<div className="mt-4 w-full h-[400px] md:h-[600px] lg:h-[700px] relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="absolute inset-0 w-full h-full bg-transparent">
<video aria-label="Serene wooden sanctuary exterior" className="w-full h-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6caa0763-7ba4-42ba-8125-300107f10e0f_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779096204525-55ccafc0-2f52-44d0-a597-f2e6b67ed79c.mp4"></video>
</div>
</div>
<div className="flex justify-between items-center py-3 text-sm text-[#2A3324]/70">
<span className="font-manrope">Featured Location</span>
<a className="hover:text-[#2A3324] transition-colors font-manrope" href="#">
            Explore Sanctuary
          </a>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div>
<span className="text-xs uppercase tracking-widest text-[#2A3324]/70 block mb-6 font-manrope">
              Core Pillars
            </span>
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight font-fraunces font-medium">
              Elevating Consciousness
              <br/>
              Through Practice
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 duration-500 ease-out">
<span className="text-sm font-light text-[#2A3324]/50 mb-6 font-manrope">
              01
            </span>
<h3 className="text-3xl tracking-tight mb-8 pr-8 leading-tight font-fraunces font-medium">
              Mindful
              <br/>
              Somatic
              <br/>
              Movement
            </h3>
<div className="mt-auto">
<p className="text-base text-[#2A3324]/70 mb-8 font-manrope">
                Guided Vinyasa and Yin sequences designed to release physical
                blockages and restore the body's natural alignment.
              </p>
<div className="flex justify-start">
<button className="bg-[#2A3324] text-[#E3E7E0] p-3 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-broken"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#5C715E] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 duration-500 ease-out delay-75">
<span className="text-sm font-light text-[#2A3324]/50 mb-6 font-manrope">
              02
            </span>
<h3 className="text-3xl tracking-tight mb-8 pr-8 leading-tight font-fraunces font-medium">
              Ayurvedic
              <br/>
              Holistic
              <br/>
              Nutrition
            </h3>
<div className="mt-auto">
<p className="text-base text-[#2A3324]/70 mb-8 font-manrope">
                Nourish your vessel with plant-based, locally sourced meals
                tailored to balance your doshas and elevate energy.
              </p>
<div className="flex justify-end">
<button className="bg-[#5C715E] text-[#E3E7E0] p-3 hover:bg-[#2A3324] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-broken"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 duration-500 ease-out delay-150">
<span className="text-sm font-light text-[#2A3324]/50 mb-6 font-manrope">
              03
            </span>
<h3 className="text-3xl tracking-tight mb-8 pr-8 leading-tight font-fraunces font-medium">
              Breathwork
              <br/>
              &amp; Inner
              <br/>
              Stillness
            </h3>
<div className="mt-auto">
<p className="text-base text-[#2A3324]/70 mb-8 font-manrope">
                Learn transformative pranayama techniques and guided meditations
                to cultivate profound mental clarity.
              </p>
<div className="flex justify-end">
<button className="bg-[#5C715E] text-[#E3E7E0] p-3 hover:bg-[#2A3324] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-broken"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="mb-12 md:mb-16">
<span className="text-xs uppercase tracking-widest text-[#2A3324]/70 font-manrope">
            Voices of Serenity
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight mb-8 flex-grow font-fraunces font-medium">
              "The environment cultivated here allows for a complete unspooling
              of nervous tension. A truly transformative ecological habitat."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Guest" className="w-12 h-12 rounded-full object-cover shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs uppercase tracking-widest text-[#2A3324] font-normal font-manrope">
                  Elena Rostova
                </p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60 font-manrope">
                  Autumn Immersion
                </p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight mb-8 flex-grow font-fraunces font-medium">
              "Between the structural elegance of the sanctuary and the depth of
              the somatic practice, I found my center again."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Guest" className="w-12 h-12 rounded-full object-cover shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs uppercase tracking-widest text-[#2A3324] font-normal font-manrope">
                  Marcus Lin
                </p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60 font-manrope">
                  Spring Awakening
                </p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight mb-8 flex-grow font-fraunces font-medium">
              "Uncompromising stillness. The sequence of integration practiced
              here is flawless from the initial grounding to departure."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Guest" className="w-12 h-12 rounded-full object-cover shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs uppercase tracking-widest text-[#2A3324] font-normal font-manrope">
                  Sarah Jenkins
                </p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60 font-manrope">
                  Winter Solstice
                </p>
</div>
</div>
</div>
</div>
</section>
</div>


<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="flex justify-end mb-8">
<span className="text-xs uppercase tracking-widest text-[#2A3324]/70 font-manrope">
            The Path
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between">
<h2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-12 font-fraunces font-medium">
              A Structured Descent
              <br/>
              into Inner Stillness
            </h2>

<div className="relative w-full h-64 md:h-80 mt-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Sanctuary details" className="w-full h-full object-cover mt-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b42b0e11-af66-4f84-a804-470eb424d422_3840w.png"/>
</div>
</div>
</div>
<div>
<p className="text-base text-[#2A3324]/80 mb-12 font-manrope">
              Our immersive schedule is engineered to progressively strip away
              external cognitive load, allowing participants to access deeper
              states of physiological rest and self-inquiry.
            </p>
<div className="flex flex-col text-base">
<div className="flex justify-between py-5 border-t border-[#C4CFC0] group hover:bg-[#D5DBD1]/50 transition-colors px-2">
<span className="text-[#2A3324]/70 flex items-center gap-4 font-manrope">
<span className="text-xs tracking-widest font-manrope">
                    DAY 01
                  </span>
                  Arrival &amp; Grounding
                </span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] -rotate-90 transition-transform" icon="solar:alt-arrow-down-broken"></iconify-icon>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0] group hover:bg-[#D5DBD1]/50 transition-colors px-2">
<span className="text-[#2A3324]/70 flex items-center gap-4 font-manrope">
<span className="text-xs tracking-widest font-manrope">
                    DAY 02
                  </span>
                  Somatic Unwinding
                </span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] -rotate-90 transition-transform" icon="solar:alt-arrow-down-broken"></iconify-icon>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0] group hover:bg-[#D5DBD1]/50 transition-colors px-2">
<span className="text-[#2A3324]/70 flex items-center gap-4 font-manrope">
<span className="text-xs tracking-widest font-manrope">
                    DAY 03
                  </span>
                  Deep Exploration
                </span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] -rotate-90 transition-transform" icon="solar:alt-arrow-down-broken"></iconify-icon>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0] group hover:bg-[#D5DBD1]/50 transition-colors px-2">
<span className="text-[#2A3324]/70 flex items-center gap-4 font-manrope">
<span className="text-xs tracking-widest font-manrope">
                    DAY 04
                  </span>
                  Silence &amp; Insight
                </span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] -rotate-90 transition-transform" icon="solar:alt-arrow-down-broken"></iconify-icon>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0] border-b group hover:bg-[#D5DBD1]/50 transition-colors px-2">
<span className="text-[#2A3324]/70 flex items-center gap-4 font-manrope">
<span className="text-xs tracking-widest font-manrope">
                    DAY 05
                  </span>
                  Integration &amp; Return
                </span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] -rotate-90 transition-transform" icon="solar:alt-arrow-down-broken"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-[#C4CFC0] overflow-hidden">
<p className="text-xs text-[#2A3324]/60 uppercase tracking-widest mb-8 text-center md:text-left font-manrope">
          Recognized by Global Wellness Alliance
        </p>
<div className="w-full relative">
<div className="marquee-track flex gap-16 md:gap-32 items-center opacity-70">
<iconify-icon aria-label="Headspace" className="text-5xl" icon="simple-icons:headspace" role="img"></iconify-icon>
<iconify-icon aria-label="Calm" className="text-5xl" icon="simple-icons:calm" role="img"></iconify-icon>
<iconify-icon aria-label="Fitbit" className="text-5xl" icon="simple-icons:fitbit" role="img"></iconify-icon>
<iconify-icon aria-label="Peloton" className="text-5xl" icon="simple-icons:peloton" role="img"></iconify-icon>
<iconify-icon aria-label="Strava" className="text-5xl" icon="simple-icons:strava" role="img"></iconify-icon>
<iconify-icon aria-label="ClassPass" className="text-5xl" icon="simple-icons:classpass" role="img"></iconify-icon>
<iconify-icon aria-label="Headspace" className="text-5xl" icon="simple-icons:headspace" role="img"></iconify-icon>
<iconify-icon aria-label="Calm" className="text-5xl" icon="simple-icons:calm" role="img"></iconify-icon>
<iconify-icon aria-label="Fitbit" className="text-5xl" icon="simple-icons:fitbit" role="img"></iconify-icon>
<iconify-icon aria-label="Peloton" className="text-5xl" icon="simple-icons:peloton" role="img"></iconify-icon>
<iconify-icon aria-label="Strava" className="text-5xl" icon="simple-icons:strava" role="img"></iconify-icon>
<iconify-icon aria-label="ClassPass" className="text-5xl" icon="simple-icons:classpass" role="img"></iconify-icon>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h2 className="font-serif-custom text-3xl sm:text-4xl md:text-5xl tracking-tight font-normal leading-tight pr-0 md:pr-12">
<span className="font-fraunces font-medium">
                Born from a necessity to disconnect, our sanctuary was
                structurally designed to blend seamlessly into the alpine
                topography, acting as a vessel for
                <span className="italic text-[#5C715E]">
                  profound internal shifts.
                </span>
</span>
</h2>
</div>
<div className="md:col-span-4 flex flex-col justify-between">
<p className="text-base text-[#2A3324]/80 mb-8 md:mb-0 font-manrope">
              We pioneer a forward-thinking approach by fusing advanced
              structural engineering with ancient restorative practices. From
              the tactile selection of regional timber to the acoustic dampening
              of the meditation halls, every detail serves spatial harmony.
            </p>

<div className="relative w-full h-48 mt-auto group cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Zen interior detail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91126dae-53d0-49d3-b421-2b3d436408b8_3840w.png"/>
</div>
<div className="absolute top-2 right-2 bg-[#2A3324] text-[#E3E7E0] p-2 rounded-sm group-hover:bg-[#5C715E] transition-colors flex items-center justify-center z-10">
<iconify-icon className="text-xl" icon="solar:arrow-right-broken"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-8 border-t border-[#C4CFC0] relative z-10">
<div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center text-center overflow-hidden parallax-container">
<div className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full parallax-img">
<video aria-label="Atmospheric wooden canopy" className="w-full h-full object-cover brightness-50" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09f5f0d6-3a00-47d3-aff9-0d370945c952_3840w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779096260870-d081478a-cfd9-4fc0-baf6-a3265ff6b5a5.mp4"></video>
</div>
<div className="relative z-10 text-[#E3E7E0] px-4">
<span className="text-xs uppercase tracking-widest mb-4 block text-[#E3E7E0]/70 font-manrope">
            The Facilitators
          </span>
<h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8 font-fraunces font-medium">
            Guided by Masters
          </h2>
<a className="inline-block border-b border-[#E3E7E0] pb-1 text-xs uppercase tracking-widest hover:text-[#C4CFC0] hover:border-[#C4CFC0] transition-colors font-manrope" href="#">
            Meet the Lineage
          </a>
</div>
</div>
</section>
<footer className="bg-[#2A3324] text-[#E3E7E0] py-16 md:py-24 relative z-20 w-full overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div>
<h3 className="text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-[#E3E7E0] font-fraunces font-medium">
              Somatic Sanctuary
            </h3>
<p className="text-base text-[#E3E7E0]/70 max-w-sm font-light font-manrope">
              We engage in forging advanced environments for spiritual growth by
              merging ecological architecture with conscious practice.
            </p>
<div className="mt-12 flex flex-col gap-4">
<a className="text-lg hover:text-[#C4CFC0] transition-colors inline-flex items-center gap-2 group font-manrope" href="mailto:connect@somaticsanctuary.com">
                connect@somaticsanctuary.com
                <iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-broken"></iconify-icon>
</a>
</div>
</div>
<div className="bg-[#1F261B] p-8 md:p-10 border-t-2 border-[#5C715E] flex flex-col justify-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<span className="text-xs uppercase tracking-widest text-[#E3E7E0]/50 block mb-6 font-manrope">
              Join the Waitlist
            </span>
<form className="flex flex-col gap-6">
<div className="relative">
<input className="w-full bg-transparent border-b border-[#E3E7E0]/30 py-4 text-base focus:outline-none focus:border-[#E3E7E0] transition-colors placeholder-[#E3E7E0]/50 text-[#E3E7E0]" placeholder="Email Address" type="email"/>
</div>
<button className="mt-2 bg-[#E3E7E0] text-[#2A3324] py-4 px-6 text-xs uppercase tracking-widest hover:bg-[#C4CFC0] transition-colors flex justify-between items-center w-full group font-manrope" type="button">
                Subscribe
                <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-broken"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E3E7E0]/20 text-xs uppercase tracking-widest text-[#E3E7E0]/60">
<nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6 md:mb-0">
<a className="hover:text-[#E3E7E0] transition-colors font-manrope" href="#">
              Instagram
            </a>
<a className="hover:text-[#E3E7E0] transition-colors font-manrope" href="#">
              Spotify
            </a>
<a className="hover:text-[#E3E7E0] transition-colors font-manrope" href="#">
              Privacy
            </a>
</nav>
<p className="font-manrope">© 2024 Somatic Sanctuary.</p>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
<h3 className="text-[20vw] leading-none tracking-tight whitespace-nowrap translate-y-1/4 font-fraunces font-medium">
          Sanctuary
        </h3>
</div>
</footer>



    </>
  );
}
