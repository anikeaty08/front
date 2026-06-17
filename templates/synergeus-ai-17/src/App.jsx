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



    const video = document.getElementById('heroVideo');
    const source = 'https://stream.mux.com/rfmAy41mljxrk4K28xbeP6bt7UOMsf6d6Ce7C7Ul4vs.m3u8';
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', '');
    const tryPlay = () => video.play().catch(() => console.warn('Video play blocked'));
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
      video.addEventListener('loadedmetadata', tryPlay);
    } else if (window.Hls && Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(source);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
    } else {
      video.src = source;
      video.addEventListener('loadedmetadata', tryPlay);
    }

    document.querySelectorAll('.nav-pill').forEach((el) => {
      el.addEventListener('mouseenter', () => el.style.background = 'rgba(255,255,255,.10)');
      el.addEventListener('mouseleave', () => el.style.background = 'transparent');
    });

    const ease = 'cubic-bezier(.22,1,.36,1)';
    function revealElement(el) {
      const delay = Number(el.dataset.delay || 0);
      const duration = Number(el.dataset.duration || 800);
      const x = Number(el.dataset.x || 0);
      const y = Number(el.dataset.y || 0);
      el.style.transition = `opacity ${duration}ms ${ease} ${delay}ms, transform ${duration}ms ${ease} ${delay}ms, filter ${duration}ms ease-out ${delay}ms`;
      el.style.opacity = '1';
      el.style.transform = 'translate(0,0)';
      el.style.filter = 'blur(0)';
    }

    document.querySelectorAll('[data-reveal]:not([data-scope])').forEach(revealElement);

    function scopedReveal(scope) {
      document.querySelectorAll(`[data-scope="${scope}"][data-reveal]`).forEach(revealElement);
    }

    const analyticsObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        scopedReveal('analytics');
        countUp(document.getElementById('countMain'), 100, 14250, 1200);
        countUp(document.getElementById('countSmall'), 10, 925, 1200);
        analyticsObs.disconnect();
      }
    }, { rootMargin: '-100px' });
    analyticsObs.observe(document.getElementById('analyticsTrigger'));

    const aiObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        scopedReveal('ai');
        animateChart();
        animateTree();
        aiObs.disconnect();
      }
    }, { rootMargin: '-100px' });
    aiObs.observe(document.getElementById('aiTrigger'));

    function countUp(el, from, to, duration) {
      const start = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = from + (to - from) * eased;
        el.textContent = '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const marquee = document.getElementById('marquee');
    marquee.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: 14000, iterations: Infinity, easing: 'linear' });

    const storyCard = document.getElementById('storyCard');
    let rx = 0, ry = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      tx = nx * 18;
      ty = ny * -12;
    });
    function tilt() {
      rx += (ty - rx) * 0.08;
      ry += (tx - ry) * 0.08;
      storyCard.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      requestAnimationFrame(tilt);
    }
    setTimeout(tilt, 900);

    function storyBars() {
      const b1 = document.getElementById('storyBar1');
      const b2 = document.getElementById('storyBar2');
      b1.getAnimations().forEach(a => a.cancel());
      b2.getAnimations().forEach(a => a.cancel());
      b1.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)', offset: .5 }, { transform: 'scaleX(1)' }], { duration: 6000, iterations: Infinity, easing: 'linear' });
      b2.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(0)', offset: .5 }, { transform: 'scaleX(1)' }], { duration: 6000, iterations: Infinity, easing: 'linear' });
    }
    storyBars();

    const headline = document.getElementById('storyHeadline');
    let storySlide = 0;
    function setStorySlide(n) {
      storySlide = n;
      headline.style.transition = 'opacity 250ms ease, transform 250ms ease, filter 250ms ease';
      headline.style.opacity = '0';
      headline.style.transform = 'translateY(12px)';
      headline.style.filter = 'blur(6px)';
      setTimeout(() => {
        headline.innerHTML = n === 0
          ? '<span class="font-semibold">Guiding</span><br><span style="font-family:\'Instrument Serif\',serif;font-style:italic;">your money</span>'
          : '<span class="font-semibold">Building</span><br><span style="font-family:\'Instrument Serif\',serif;font-style:italic;">the future</span>';
        headline.style.opacity = '1';
        headline.style.transform = 'translateY(0)';
        headline.style.filter = 'blur(0)';
      }, 260);
    }
    setTimeout(() => setStorySlide(1), 3000);
    setInterval(() => {
      setStorySlide(0);
      setTimeout(() => setStorySlide(1), 3000);
    }, 6000);

    const questions = [
      {
        q: 'Can I afford to invest $500 this month?',
        a: 'Based on your current income and expenses, you’ll have around $620 in available balance after bills. Investing $500 is within reach - but consider saving at least $200 as an emergency buffer.'
      },
      {
        q: 'When will I reach my savings goal?',
        a: 'At your current savings rate of $850/month, you’ll reach your $10,000 goal in approximately 8 months. Cutting discretionary spending by 15% could shave off 3 weeks.'
      },
      {
        q: 'How much did I spend on food last month?',
        a: 'You spent $643 on food in March - $421 on groceries and $222 on dining out. That’s 18% above your monthly food budget of $545.'
      }
    ];
    let qi = 0;
    const qaBlock = document.getElementById('qaBlock');
    setInterval(() => {
      qi = (qi + 1) % questions.length;
      qaBlock.style.transition = `opacity 600ms ${ease}, transform 600ms ${ease}, filter 600ms ${ease}`;
      qaBlock.style.opacity = '0';
      qaBlock.style.transform = 'translateY(-6px)';
      qaBlock.style.filter = 'blur(8px)';
      setTimeout(() => {
        document.getElementById('qaQuestion').textContent = questions[qi].q;
        document.getElementById('qaAnswer').textContent = questions[qi].a;
        qaBlock.style.opacity = '1';
        qaBlock.style.transform = 'translateY(0)';
        qaBlock.style.filter = 'blur(0)';
      }, 650);
    }, 4000);

    function animateChart() {
      const rect = document.getElementById('chartReveal');
      const start = performance.now() + 300;
      function frame(now) {
        const t = Math.max(0, Math.min(1, (now - start) / 1400));
        const eased = 1 - Math.pow(1 - t, 3);
        rect.setAttribute('width', 220 * eased);
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
      setTimeout(() => {
        const line = document.getElementById('greenConnector');
        line.style.transition = 'stroke-dashoffset 500ms ease-out';
        line.style.strokeDashoffset = '0';
      }, 1400);
      setTimeout(() => {
        const dot = document.getElementById('greenDot');
        dot.style.transition = 'transform 300ms ease-out';
        dot.style.transform = 'scale(1)';
      }, 1700);
    }

    function animateTree() {
      document.querySelectorAll('.tree-node').forEach((node) => {
        const delay = Number(node.dataset.delay || 0) + 450;
        node.style.transition = `opacity 450ms ease-out ${delay}ms, transform 450ms ease-out ${delay}ms`;
        node.style.opacity = '1';
        node.style.transform = 'scale(1)';
      });
      document.querySelectorAll('.tree-line').forEach((line) => {
        line.style.transition = 'opacity 700ms ease-out 700ms';
        line.style.opacity = '1';
      });
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
      
<main>
<section className="relative min-h-screen overflow-hidden bg-black" id="hero">
<video autoplay="" className="absolute inset-0 z-0 h-full w-full object-cover" id="heroVideo" loop="" muted="" playsinline="" webkit-playsinline=""></video>
<div className="absolute inset-0 z-[1]" style={{background: 'linear-gradient(to bottom,rgba(0,0,0,.60) 0%,rgba(0,0,0,.15) 50%,rgba(0,0,0,.65) 100%)'}}></div>
<nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
<div className="relative flex h-12 items-center">
<a className="flex items-center" href="#">
<img alt="Synergeus" className="h-7 w-auto brightness-0 invert" src="https://qclay.design/lovable/synergy/Logo-lov.svg"/>
</a>
<div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-2 py-1.5 md:flex" style={{background: 'rgba(28, 28, 28, .75)', borderColor: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
<a className="nav-pill rounded-full px-4 py-2 text-[0.875rem] font-normal text-white/80" href="#">Advisors</a>
<a className="nav-pill rounded-full px-4 py-2 text-[0.875rem] font-normal text-white/80" href="#analytics">What we do</a>
<a className="nav-pill rounded-full px-4 py-2 text-[0.875rem] font-normal text-white/80" href="#ai">AI Intelligence</a>
<a className="nav-pill rounded-full px-4 py-2 text-[0.875rem] font-normal text-white/80" href="#">Tools</a>
</div>
<div className="ml-auto flex items-center gap-2">
<a className="hidden rounded-full px-4 py-2 text-[0.875rem] text-white/80 sm:block" href="#">Login</a>
<a className="rounded-full bg-white px-5 py-2.5 text-[0.875rem] font-normal text-black" href="#">Find an advisor</a>
</div>
</div>
</nav>
<div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pt-20">
<h1 className="text-center text-[4rem] font-normal leading-[0.94] tracking-tight text-white opacity-0 md:text-[6.375rem]" data-duration="900" data-reveal="" data-y="-40" style={{transform: 'translateY(-40px)'}}>
<span className="block">Our AI simplify</span>
<span className="block">
<span>your </span><span style={{fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic'}}>financial life</span>
</span>
</h1>
<button className="mt-8 flex items-center gap-2 rounded-full bg-white py-1.5 pl-6 pr-2 text-[0.9375rem] font-normal text-black opacity-0" data-delay="250" data-duration="800" data-reveal="" data-y="30" style={{transform: 'translateY(30px)'}}>
          Start free trial now
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '.875rem', strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<div className="mt-12" style={{perspective: '1200px'}}>
<div className="relative h-[455px] w-[310px] overflow-hidden rounded-[28px] bg-[#1a1a1a] opacity-0 will-change-transform" data-delay="200" data-duration="800" data-reveal="" data-y="30" id="storyCard" style={{transformStyle: 'preserve-3d', transform: 'translateY(30px)', boxShadow: '0 40px 100px rgba(0, 0, 0, .55), 0 8px 24px rgba(0, 0, 0, .35), inset 0 1px 0 rgba(255, 255, 255, .18), inset 0 0 0 1px rgba(255,255,255,.06)'}}>
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/person-2.png" style={{objectPosition: 'center 20%'}}/>
<div className="pointer-events-none absolute inset-0" style={{mixBlendMode: 'soft-light', background: 'linear-gradient(160deg,rgba(220,255,90,.65) 0%,rgba(170,230,70,.35) 40%,rgba(80,140,40,.25) 100%)'}}></div>
<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(circle at 30% 15%,rgba(230,255,120,.25),transparent 55%)'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,.25)'}}></div>
<div className="absolute left-6 right-6 top-6 z-20 flex gap-1.5">
<div className="h-[3px] flex-1 overflow-hidden rounded-full" style={{background: 'rgba(0,0,0,.25)'}}>
<div className="h-full origin-left rounded-full" id="storyBar1" style={{background: 'rgba(0, 0, 0, .95)', transform: 'scaleX(0)'}}></div>
</div>
<div className="h-[3px] flex-1 overflow-hidden rounded-full" style={{background: 'rgba(0,0,0,.25)'}}>
<div className="h-full origin-left rounded-full" id="storyBar2" style={{background: 'rgba(0, 0, 0, .95)', transform: 'scaleX(0)'}}></div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{background: 'linear-gradient(0deg,#040504 20.54%,rgba(29,37,9,0) 100%)'}}></div>
<h3 className="absolute bottom-[88px] left-6 right-6 z-10 text-[2.375rem] font-normal leading-[2.5rem] tracking-tight text-white" id="storyHeadline" style={{textShadow: '0 2px 18px rgba(0,0,0,.35)'}}>
<span className="font-semibold">Guiding</span><br/>
<span style={{fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic'}}>your money</span>
</h3>
<div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-2.5">
<span className="rounded-full px-4 py-[9px] text-[0.8125rem] font-normal text-[#0a0a0a]" style={{background: 'rgba(255, 255, 255, .96)', boxShadow: '0 6px 18px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255,255,255,.9)'}}>Top Rated</span>
<button className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] border text-white" style={{background: 'rgba(20, 20, 20, .45)', borderColor: 'rgba(255, 255, 255, .14)', backdropFilter: 'blur(10px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12)'}}>
<iconify-icon icon="solar:heart-linear" style={{fontSize: '1.125rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] border text-white" style={{background: 'rgba(20, 20, 20, .45)', borderColor: 'rgba(255, 255, 255, .14)', backdropFilter: 'blur(10px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12)'}}>
<iconify-icon icon="solar:chat-round-line-linear" style={{fontSize: '1.125rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-10 z-10 hidden lg:block">
<h2 className="mb-[18px] text-[1.3125rem] font-normal leading-[1.2] text-white/60 tracking-tight">Nationally recognized</h2>
<div className="w-[430px] overflow-hidden">
<div className="flex w-max gap-[54px]" id="marquee">
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-taa.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-harris.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-siemens.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-summit.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-taa.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-harris.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-siemens.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
<img alt="" className="h-[30px] w-auto shrink-0 object-contain" src="https://qclay.design/lovable/synergy/logo-summit.png" style={{filter: 'brightness(0) invert(1) opacity(.55)'}}/>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 z-10 hidden max-w-[430px] lg:block">
<p className="mb-3 text-[1.3125rem] font-normal leading-[1.4] tracking-tight text-white">Synergeus is your all in one financial home, now powered by your own intelligent AI advisor.</p>
<a className="text-[1.3125rem] font-normal tracking-tight text-white underline" href="#">Learn more</a>
</div>
</section>
<section className="overflow-hidden bg-black px-5 py-20 md:px-12" id="analytics">
<div className="mb-16 text-center" id="analyticsTrigger">
<div className="mb-4 text-[0.75rem] font-normal uppercase tracking-[0.125rem] text-white/50">ANALYTICS</div>
<h2 className="m-0 text-white opacity-0" data-blur="12" data-duration="800" data-reveal="" data-scope="analytics" data-y="30" style={{transform: 'translateY(30px)', filter: 'blur(12px)'}}>
<span className="block text-[3.5rem] font-normal leading-none tracking-tight md:text-[4.5rem]">Smarter cash flow</span>
<span className="block text-[3.5rem] font-normal italic leading-none tracking-tight md:text-[4.5rem]" style={{fontFamily: '\'Instrument Serif\', serif'}}>insights at a glance</span>
</h2>
<p className="mt-4 text-[1rem] font-normal text-white/60 opacity-0" data-blur="8" data-delay="200" data-duration="800" data-reveal="" data-scope="analytics" data-y="20" style={{transform: 'translateY(20px)', filter: 'blur(8px)'}}>Keep your income and expense in sync with real-time AI</p>
</div>
<div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-4 lg:flex-row">
<article className="relative min-h-[480px] flex-[1.4] overflow-hidden rounded-3xl opacity-0" data-delay="300" data-duration="800" data-reveal="" data-scope="analytics" data-x="-60" style={{transform: 'translateX(-60px)'}}>
<img alt="" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/block-1.png"/>
<div className="absolute inset-0 z-[1]" style={{background: 'rgba(0,0,0,.35)'}}></div>
<div className="absolute left-8 right-8 top-8 z-[2] rounded-[20px] border px-7 py-6" style={{borderColor: 'rgba(255, 255, 255, .20)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(56px)', WebkitBackdropFilter: 'blur(56px)'}}>
<div className="mb-2 flex items-center justify-between">
<span className="text-[0.6875rem] font-normal tracking-[0.09375rem] text-white/60">MONTHLY OVERVIEW</span>
<span className="text-[0.6875rem] font-normal tracking-[0.09375rem] text-white/60 underline">MONTHLY</span>
</div>
<div className="mb-6 text-[2.625rem] font-normal tracking-tight text-white tabular-nums" id="countMain">$100.00</div>
<div className="mb-5 w-full border-t border-dashed border-white/20"></div>
<div className="mb-4">
<div className="flex items-center justify-between text-[0.8125rem]"><span className="text-white/70">Income</span><span className="font-normal text-white">$15,500</span></div>
<div className="relative mt-1.5 h-[5px] w-full overflow-hidden rounded-full">
<div className="absolute inset-0 opacity-[.13]" style={{background: 'linear-gradient(90deg,#040504 0%,rgba(4,5,4,.50) 100%)'}}></div>
<div className="absolute left-0 top-0 h-full w-[75%] rounded-full" style={{background: 'linear-gradient(90deg,#1DC47D 60.8%,rgba(29,196,125,0) 100%)'}}></div>
</div>
</div>
<div className="mb-4">
<div className="flex items-center justify-between text-[0.8125rem]"><span className="text-white/70">Investment</span><span className="font-normal text-white">$4,250</span></div>
<div className="relative mt-1.5 h-[5px] w-full overflow-hidden rounded-full">
<div className="absolute inset-0 opacity-[.13]" style={{background: 'linear-gradient(90deg,#040504 0%,rgba(4,5,4,.50) 100%)'}}></div>
<div className="absolute left-0 top-0 h-full w-[45%] rounded-full" style={{background: 'linear-gradient(90deg,#B48F17 55.74%,rgba(180,143,23,0) 100%)'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-[0.8125rem]"><span className="text-white/70">Expenses</span><span className="font-normal text-white">$8,200</span></div>
<div className="relative mt-1.5 h-[5px] w-full overflow-hidden rounded-full">
<div className="absolute inset-0 opacity-[.13]" style={{background: 'linear-gradient(90deg,#040504 0%,rgba(4,5,4,.50) 100%)'}}></div>
<div className="absolute left-0 top-0 h-full w-[60%] rounded-full" style={{background: 'linear-gradient(90deg,#fff 52.46%,rgba(255,255,255,0) 100%)'}}></div>
</div>
</div>
</div>
<div className="absolute bottom-[22px] left-8 right-8 z-[2]">
<h3 className="mb-2 text-[1.625rem] font-normal italic tracking-tight text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>See the full picture of your finances.</h3>
<p className="m-0 text-[0.8125rem] font-normal leading-[1.6] text-white/65">AI keeps your income, expenses, and goals effortlessly aligned giving you a clearer view of your financial rhythm, smarter decisions, and lasting stability.</p>
</div>
</article>
<article className="relative min-h-[480px] flex-1 overflow-hidden rounded-3xl opacity-0" data-delay="450" data-duration="800" data-reveal="" data-scope="analytics" data-x="60" style={{transform: 'translateX(60px)'}}>
<img alt="" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/block-2.png"/>
<div className="absolute inset-0 z-[1]" style={{background: 'rgba(0,0,0,.25)'}}></div>
<div className="absolute right-6 top-6 z-[2] text-[0.6875rem] font-normal tracking-[0.09375rem] text-white/70 underline">DAILY</div>
<div className="absolute left-8 top-8 z-[2] w-[200px] rounded-2xl bg-white px-[18px] py-4 shadow-2xl">
<div className="flex items-start justify-between">
<div className="text-[1.375rem] font-normal tracking-tight text-black tabular-nums" id="countSmall">$10.00</div>
<iconify-icon icon="solar:info-circle-linear" style={{fontSize: '1rem', color: 'rgba(0,0,0,.35)', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="mb-3.5 text-[0.75rem] text-black/45">Sent today</div>
<button className="flex w-full items-center justify-between rounded-full bg-black py-2.5 pl-3.5 pr-2 text-[0.8125rem] font-normal text-white">
              View transaction
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '.8125rem', strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
<img alt="" className="absolute bottom-[140px] left-1/2 z-[2] h-[240px] w-[200px] -translate-x-1/2 rounded-2xl object-cover" src="https://qclay.design/lovable/synergy/person-2.png" style={{objectPosition: 'top center'}}/>
<div className="absolute bottom-[160px] right-6 z-[3] flex items-center gap-2">
<div className="flex items-center gap-2 rounded-full py-2 pl-2.5 pr-4" style={{background: 'rgba(255, 255, 255, .15)', backdropFilter: 'blur(12px)'}}>
<img alt="" className="h-[22px] w-auto brightness-0 invert" src="https://qclay.design/lovable/synergy/Logo-lov.svg"/>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{background: 'rgba(255, 255, 255, .15)', backdropFilter: 'blur(12px)'}}>
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="absolute bottom-[22px] left-8 right-8 z-[2]">
<h3 className="mb-2 text-[1.5rem] font-normal italic tracking-tight text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>Your money, perfect transactions</h3>
<p className="m-0 text-[0.8125rem] font-normal leading-[1.6] text-white/65">Stay grounded with real-time visibility into where your money’s going and growing.</p>
</div>
</article>
</div>
</section>
<section className="overflow-hidden bg-black px-5 py-20 md:px-12" id="ai">
<div className="mb-16 text-center" id="aiTrigger">
<div className="mb-4 text-[0.75rem] font-normal uppercase tracking-[0.125rem] text-white/50">AI INTELLIGENCE</div>
<h2 className="m-0 text-white opacity-0" data-blur="12" data-duration="800" data-reveal="" data-scope="ai" data-y="30" style={{transform: 'translateY(30px)', filter: 'blur(12px)'}}>
<span className="text-[3.5rem] font-normal leading-none tracking-tight md:text-[4.5rem]">Your personal </span>
<span className="text-[3.5rem] font-normal italic leading-none tracking-tight md:text-[4.5rem]" style={{fontFamily: '\'Instrument Serif\', serif'}}>AI advisor</span>
</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-[1rem] font-normal leading-[1.6] text-white/60 opacity-0" data-blur="8" data-delay="200" data-duration="800" data-reveal="" data-scope="ai" data-y="20" style={{transform: 'translateY(20px)', filter: 'blur(8px)'}}>Experience the power of artificial intelligence working for your financial well being</p>
</div>
<div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-4 lg:flex-row">
<article className="relative min-h-[560px] flex-1 overflow-hidden rounded-3xl opacity-0" data-delay="200" data-duration="700" data-reveal="" data-scope="ai" data-y="40" style={{transform: 'translateY(40px)'}}>
<img alt="" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/back-3-1.png"/>
<div className="absolute inset-0 z-[1]" style={{background: 'rgba(0,0,0,.30)'}}></div>
<div className="absolute left-6 right-6 top-8 z-[2] rounded-[20px] border p-5" style={{borderColor: 'rgba(255, 255, 255, .20)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(56px)', WebkitBackdropFilter: 'blur(56px)'}}>
<div className="mb-4 flex items-center gap-2.5">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
<img alt="" className="w-[22px] brightness-0" src="https://qclay.design/lovable/synergy/Logo-lov.svg"/>
</div>
<span className="text-[1rem] font-normal text-white">Synergeus</span>
</div>
<div className="mb-4 border-t border-dashed border-white/20"></div>
<div className="relative h-40" id="qaBlock">
<div className="absolute inset-0">
<p className="mb-3 text-[1rem] font-normal leading-[1.4] text-white" id="qaQuestion">Can I afford to invest $500 this month?</p>
<div className="flex items-start gap-2">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/15">
<img alt="" className="w-3 opacity-80 brightness-0 invert" src="https://qclay.design/lovable/synergy/Logo-lov.svg"/>
</div>
<p className="m-0 text-[0.75rem] font-normal leading-[1.6] text-white/55" id="qaAnswer">Based on your current income and expenses, you’ll have around $620 in available balance after bills. Investing $500 is within reach - but consider saving at least $200 as an emergency buffer.</p>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-[0.8125rem] font-normal text-black">
                View transaction
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-white">
<iconify-icon icon="solar:arrow-right-up-linear" style={{fontSize: '.75rem', strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<a className="text-[0.8125rem] font-normal text-white/80 underline" href="#">ASK YOURS</a>
</div>
</div>
<div className="absolute bottom-7 left-6 right-6 z-[2]">
<h3 className="mb-2 text-[1.625rem] font-normal italic tracking-tight text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>Natural Language Queries</h3>
<p className="text-[0.8125rem] font-normal leading-[1.6] text-white/65">Ask questions about your finances in plain English and get instant, accurate answers.</p>
</div>
</article>
<article className="relative min-h-[560px] flex-1 overflow-hidden rounded-3xl opacity-0" data-delay="350" data-duration="700" data-reveal="" data-scope="ai" data-y="40" style={{transform: 'translateY(40px)'}}>
<img alt="" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/back-3-2.png"/>
<div className="absolute inset-0 z-[1]" style={{background: 'rgba(0,0,0,.20)'}}></div>
<div className="absolute left-6 right-6 top-8 z-[2]">
<div className="rounded-[20px] px-5 pb-5 pt-6 text-center" style={{background: 'rgba(255,255,255,.92)'}}>
<div className="mb-1 text-[0.75rem] font-normal leading-[1.5] text-black/50">Expenses<br/>expected to rise</div>
<div className="text-[3.25rem] font-normal italic leading-none tracking-tight text-black" style={{fontFamily: '\'Instrument Serif\', serif'}}>3%</div>
<div className="h-4"></div>
<div className="relative mx-auto h-[145px] w-[280px] max-w-full overflow-visible">
<svg height="100%" preserveaspectratio="none" style={{overflow: 'visible'}} viewbox="60 -25 220 145" width="100%">
<defs>
<lineargradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(180,210,80,.85)"></stop>
<stop offset="100%" stop-color="rgba(180,210,80,.10)"></stop>
</lineargradient>
<clippath id="reveal">
<rect height="145" id="chartReveal" width="0" x="60" y="-25"></rect>
</clippath>
</defs>
<g clipPath="url(#reveal)">
<path d="M 60 75 L 150 20 L 280 28 L 280 120 L 60 120 Z" fill="url(#areaFill)"></path>
<path d="M 60 75 L 150 20 L 280 28" fill="none" stroke="#8DB800" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<line opacity=".6" stroke="#8DB800" stroke-dasharray="3 3" strokeWidth="1" x1="60" x2="60" y1="75" y2="120"></line>
<line opacity=".6" stroke="#8DB800" stroke-dasharray="3 3" strokeWidth="1" x1="280" x2="280" y1="28" y2="120"></line>
</g>
<line id="greenConnector" stroke="#1DC47D" stroke-dasharray="36" stroke-dashoffset="36" strokeWidth="1.2" x1="150" x2="150" y1="-15" y2="20"></line>
<circle cx="150" cy="-15" fill="#1DC47D" id="greenDot" r="4.5" style={{transformBox: 'fill-box', transformOrigin: 'center', transform: 'scale(0)'}}></circle>
</svg>
</div>
<div className="mt-4 inline-block rounded-full border px-4 py-2 text-center text-[0.6875rem] text-black/60" style={{borderColor: 'rgba(0, 0, 0, .12)', background: 'rgba(255, 255, 255, .80)', backdropFilter: 'blur(8px)'}}>Tip: Reduce subscriptions to maintain savings target.</div>
</div>
</div>
<div className="absolute bottom-7 left-6 right-6 z-[2]">
<h3 className="mb-2 text-[1.625rem] font-normal italic tracking-tight text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>Predictive Analysis</h3>
<p className="text-[0.8125rem] font-normal leading-[1.6] text-white/65">AI algorithms analyze patterns to forecast future expenses and income trends.</p>
</div>
</article>
<article className="relative min-h-[560px] flex-1 overflow-hidden rounded-3xl opacity-0" data-delay="500" data-duration="700" data-reveal="" data-scope="ai" data-y="40" style={{transform: 'translateY(40px)'}}>
<img alt="" className="absolute inset-0 z-0 h-full w-full object-cover" src="https://qclay.design/lovable/synergy/back-3-3.png"/>
<div className="absolute inset-0 z-[1]" style={{background: 'rgba(0,0,0,.30)'}}></div>
<div className="absolute left-4 right-4 top-8 bottom-[110px] z-[2]">
<svg className="absolute inset-0 z-[1] h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 360 380">
<defs>
<path d="M180 44 C180 73,105 73,105 102" id="tree-path-0"></path>
<path d="M180 44 C180 73,255 73,255 102" id="tree-path-1"></path>
<path d="M105 140 C105 166,105 166,105 192" id="tree-path-2"></path>
<path d="M255 140 C255 166,255 166,255 192" id="tree-path-3"></path>
<path d="M180 44 C180 171,180 171,180 298" id="tree-path-4"></path>
<path d="M180 334 C180 347,180 347,180 360" id="tree-path-5"></path>
</defs>
<g className="tree-line" opacity="0">
<path d="M180 44 C180 73,105 73,105 102" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<path d="M180 44 C180 73,255 73,255 102" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<path d="M105 140 C105 166,105 166,105 192" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<path d="M255 140 C255 166,255 166,255 192" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<path d="M180 44 C180 171,180 171,180 298" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<path d="M180 334 C180 347,180 347,180 360" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1"></path>
<circle cx="105" cy="102" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle cx="255" cy="102" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle cx="105" cy="192" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle cx="255" cy="192" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle cx="180" cy="298" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle cx="180" cy="360" fill="rgba(255,255,255,.9)" r="2.5"></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin=".85s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-0"></mpath></animatemotion></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin="1s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-1"></mpath></animatemotion></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin="1.2s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-2"></mpath></animatemotion></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin="1.38s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-3"></mpath></animatemotion></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin="1.55s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-4"></mpath></animatemotion></circle>
<circle fill="#fff" r="3" style={{filter: 'drop-shadow(0 0 4px rgba(255,255,255,.8))'}}><animatemotion begin="1.75s" dur="2.4s" repeatcount="indefinite"><mpath href="#tree-path-5"></mpath></animatemotion></circle>
</g>
</svg>
<div className="relative z-[2] flex h-full flex-col items-center gap-[18px]">
<div className="tree-node rounded-full border px-5 py-2.5 text-[1rem] italic text-white opacity-0" data-delay="0" style={{fontFamily: '\'Instrument Serif\', serif', borderColor: 'rgba(255, 255, 255, .25)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(20px)', transform: 'scale(.85)'}}>Categorization</div>
<div className="flex gap-4">
<div className="tree-node rounded-full border px-5 py-2.5 text-[1rem] italic text-white opacity-0" data-delay="180" style={{fontFamily: '\'Instrument Serif\', serif', borderColor: 'rgba(255, 255, 255, .25)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(20px)', transform: 'scale(.85)'}}>Transportation</div>
<div className="tree-node rounded-full border px-5 py-2.5 text-[1rem] italic text-white opacity-0" data-delay="360" style={{fontFamily: '\'Instrument Serif\', serif', borderColor: 'rgba(255, 255, 255, .25)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(20px)', transform: 'scale(.85)'}}>Entertainment</div>
</div>
<div className="flex items-start gap-4">
<div className="tree-node max-w-[160px] rounded-xl px-4 py-2.5 text-[0.75rem] font-normal leading-[1.5] text-black/75 opacity-0" data-delay="540" style={{background: 'rgba(255, 255, 255, .92)', transform: 'scale(.85)'}}>Fuel, rides, car maintenance, public transit</div>
<div className="tree-node max-w-[160px] rounded-xl px-4 py-2.5 text-[0.75rem] font-normal leading-[1.5] text-black/75 opacity-0" data-delay="720" style={{background: 'rgba(255, 255, 255, .92)', transform: 'scale(.85)'}}>Streaming services, gaming, events</div>
</div>
<div className="mt-auto tree-node rounded-full border px-5 py-2.5 text-[1rem] italic text-white opacity-0" data-delay="900" style={{fontFamily: '\'Instrument Serif\', serif', borderColor: 'rgba(255, 255, 255, .25)', background: 'rgba(255, 255, 255, .10)', backdropFilter: 'blur(20px)', transform: 'scale(.85)'}}>Bills and Utilities</div>
<div className="tree-node max-w-[160px] rounded-xl px-4 py-2.5 text-center text-[0.75rem] font-normal leading-[1.5] text-black/75 opacity-0" data-delay="1080" style={{background: 'rgba(255, 255, 255, .92)', transform: 'scale(.85)'}}>Electricity, water, gas, internet, phone</div>
</div>
</div>
<div className="absolute bottom-7 left-6 right-6 z-[2]">
<h3 className="mb-2 text-[1.625rem] font-normal italic tracking-tight text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>Smart Categorization</h3>
<p className="text-[0.8125rem] font-normal leading-[1.6] text-white/65">Automatically categorize transactions with machine learning that improves over time.</p>
</div>
</article>
</div>
</section>
</main>


    </>
  );
}
