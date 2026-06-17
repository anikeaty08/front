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



    !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
            i.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            },
            (document.head || document.body).appendChild(i)
          }
        }();
  


const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const body = item.querySelector('.faq-body');
    const icon = item.querySelector('.faq-icon');
    const open = !body.classList.contains('hidden');
    document.querySelectorAll('.faq-body').forEach(b => b.classList.add('hidden'));
    document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');
    if (!open) {
      body.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    }
  });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div></div>

<header className="sticky top-0 z-50" style={{backgroundColor: 'rgba(8, 8, 8, 0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
<div className="mx-auto flex items-center justify-between px-6 py-4" style={{maxWidth: '1280px'}}>
<a className="flex items-center gap-2" href="#">
<span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{backgroundColor: '#0055FE'}}>
<iconify-icon icon="solar:asterisk-square-linear" style={{color: '#fff'}} width="18"></iconify-icon>
</span>
<span className="text-lg font-semibold tracking-tight">Landin</span>
</a>
<nav className="hidden items-center gap-8 md:flex text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<a className="rounded-[10px] px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90" href="#" style={{backgroundColor: '#EFEFEC', color: '#131313'}}>Get Started</a>
</div>
</header>
<main className="mx-auto px-6" style={{maxWidth: '1280px'}}>

<section className="relative flex flex-col items-center pt-28 pb-24 text-center glow">
<div className="mb-6 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>
      Premium Creative Studio
    </div>
<h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl">
      Premium Agency<br/>for <span className="" style={{color: 'rgba(255,255,255,0.4)'}}>Creatives.</span>
</h1>
<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
      We craft brands, experiences and digital products that move people. A studio built for ambitious teams.
    </p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
<a className="rounded-[10px] px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-90" href="#" style={{backgroundColor: '#EFEFEC', color: '#131313'}}>Start a Project</a>
<a className="rounded-[10px] px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/5" href="#" style={{backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff'}}>View Portfolio</a>
</div>

<div className="logo-mask mt-20 w-full overflow-hidden">
<div className="scroll-track flex w-max items-center gap-16" style={{color: 'rgba(255,255,255,0.35)'}}>
<span className="text-xl font-semibold tracking-tight">Acme</span>
<span className="text-xl font-semibold tracking-tight">Vertex</span>
<span className="text-xl font-semibold tracking-tight">Nexus</span>
<span className="text-xl font-semibold tracking-tight">Quantum</span>
<span className="text-xl font-semibold tracking-tight">Lumen</span>
<span className="text-xl font-semibold tracking-tight">Orbit</span>
<span className="text-xl font-semibold tracking-tight">Acme</span>
<span className="text-xl font-semibold tracking-tight">Vertex</span>
<span className="text-xl font-semibold tracking-tight">Nexus</span>
<span className="text-xl font-semibold tracking-tight">Quantum</span>
<span className="text-xl font-semibold tracking-tight">Lumen</span>
<span className="text-xl font-semibold tracking-tight">Orbit</span>
</div>
</div>
</section>

<section className="pt-12 pb-24" id="portfolio">
<div className="grid gap-6 md:grid-cols-2">
<div className="relative overflow-hidden rounded-[30px]" style={{border: '1px solid rgba(255,255,255,0.08)'}}>
<img alt="" className="h-full w-full object-cover" src="https://framerusercontent.com/images/Nx7bt7sxDAxlLsAxW9jTN1wUsY.jpeg?scale-down-to=1024" style={{minHeight: '420px'}}/>
<div className="absolute bottom-5 left-5 right-5 rounded-[20px] p-5" style={{backgroundColor: 'rgba(8, 8, 8, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="flex flex-wrap gap-2">
<span className="rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(0,85,254,0.15)', color: '#7aa6ff'}}>60% Increased Traffic</span>
<span className="rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>Brand Strategy</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Reimagining digital identities</h3>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>A complete brand overhaul delivering measurable growth across all channels.</p>
</div>
</div>
<div className="flex flex-col justify-center rounded-[30px] p-9" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="mb-5 inline-flex w-fit items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>About
        </div>
<h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">Building experiences <span style={{color: 'rgba(255,255,255,0.4)'}}>that last.</span></h2>
<p className="mt-5 text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>From concept to launch, we partner with founders and brands to design products people genuinely love. Our process is collaborative, transparent and relentlessly focused on outcomes.</p>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="">
<div className="text-3xl font-bold tracking-tight" style={{color: '#0055FE'}}>120+</div>
<div className="mt-1 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Projects delivered</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight" style={{color: '#0055FE'}}>98%</div>
<div className="mt-1 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>Client retention</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="mb-10 text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>Portfolio
      </div>
<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Selected <span style={{color: 'rgba(255,255,255,0.4)'}}>work.</span></h2>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<img alt="" className="h-52 w-full object-cover" src="https://framerusercontent.com/images/bnku6hnBSYZilgRI7DsDA3HpUw.jpg?scale-down-to=512"/>
<div className="p-5">
<span className="text-xs font-medium" style={{color: '#7aa6ff'}}>Branding</span>
<h4 className="mt-2 text-lg font-semibold tracking-tight">Studio identity system</h4>
</div>
</div>
<div className="overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<img alt="" className="h-52 w-full object-cover" src="https://framerusercontent.com/images/QzVJof4LyYozD7Me8ArhbSZj2w.jpg?scale-down-to=512"/>
<div className="p-5">
<span className="text-xs font-medium" style={{color: '#7aa6ff'}}>3D &amp; Motion</span>
<h4 className="mt-2 text-lg font-semibold tracking-tight">Abstract render series</h4>
</div>
</div>
<div className="overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<img alt="" className="h-52 w-full object-cover" src="https://framerusercontent.com/images/DQcx4CixwudItOiXQfsSt4aiSCI.jpeg?scale-down-to=2048"/>
<div className="p-5">
<span className="text-xs font-medium" style={{color: '#7aa6ff'}}>Architecture</span>
<h4 className="mt-2 text-lg font-semibold tracking-tight">Minimal spaces</h4>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="mb-10">
<div className="mb-4 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>Services
      </div>
<h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">Everything you need <span style={{color: 'rgba(255,255,255,0.4)'}}>in one studio.</span></h2>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden rounded-[30px] p-8 md:row-span-2" style={{background: 'linear-gradient(160deg,#0055FE,#0030a0)'}}>
<iconify-icon icon="solar:rocket-2-linear" style={{color: '#fff'}} width="42"></iconify-icon>
<h3 className="mt-32 text-4xl font-bold tracking-tight">Next</h3>
<p className="mt-3 text-base leading-relaxed" style={{color: 'rgba(255,255,255,0.85)'}}>Future-ready strategy and design that scales with your ambition.</p>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<span className="flex h-11 w-11 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(0,85,254,0.15)'}}><iconify-icon icon="solar:palette-linear" style={{color: '#7aa6ff'}} width="22"></iconify-icon></span>
<h4 className="mt-5 text-lg font-semibold tracking-tight">Brand Design</h4>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Identities that communicate clearly and stand the test of time.</p>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<span className="flex h-11 w-11 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(0,85,254,0.15)'}}><iconify-icon icon="solar:smartphone-linear" style={{color: '#7aa6ff'}} width="22"></iconify-icon></span>
<h4 className="mt-5 text-lg font-semibold tracking-tight">Product Design</h4>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Interfaces engineered for clarity, speed and delight.</p>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<span className="flex h-11 w-11 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(0,85,254,0.15)'}}><iconify-icon icon="solar:code-linear" style={{color: '#7aa6ff'}} width="22"></iconify-icon></span>
<h4 className="mt-5 text-lg font-semibold tracking-tight">Development</h4>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Performant, accessible builds shipped with care.</p>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<span className="flex h-11 w-11 items-center justify-center rounded-full" style={{backgroundColor: 'rgba(0,85,254,0.15)'}}><iconify-icon icon="solar:chart-2-linear" style={{color: '#7aa6ff'}} width="22"></iconify-icon></span>
<h4 className="mt-5 text-lg font-semibold tracking-tight">Growth</h4>
<p className="mt-2 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Data-driven optimization that compounds over time.</p>
</div>
</div>
</section>

<section className="pb-24">
<div className="grid gap-6 md:grid-cols-2">
<div className="flex items-center justify-between overflow-hidden rounded-[30px] p-8" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<div>
<span className="rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(0,85,254,0.15)', color: '#7aa6ff'}}>2.4x Engagement</span>
<h3 className="mt-5 text-2xl font-semibold tracking-tight">Audio Product Launch</h3>
<p className="mt-2 max-w-xs text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Crafting a launch campaign that resonated.</p>
</div>
<img alt="" className="h-36 w-36 object-contain" src="https://framerusercontent.com/images/KfsUX7SjXWF8GYOil2kfkZ9e1PA.png?scale-down-to=512"/>
</div>
<div className="flex items-center justify-between overflow-hidden rounded-[30px] p-8" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<div>
<span className="rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(0,85,254,0.15)', color: '#7aa6ff'}}>Ø10 Series</span>
<h3 className="mt-5 text-2xl font-semibold tracking-tight">Apparel Collection</h3>
<p className="mt-2 max-w-xs text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Visual direction for a modern product line.</p>
</div>
<img alt="" className="h-36 w-36 object-contain" src="https://framerusercontent.com/images/vniufJMsSAXh18yjYsUsriXaJgw.png"/>
</div>
</div>
</section>

<section className="pb-24" id="pricing">
<div className="mb-10 text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>Pricing
      </div>
<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Simple, transparent <span style={{color: 'rgba(255,255,255,0.4)'}}>plans.</span></h2>
</div>
<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
<div className="rounded-[30px] p-9" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<h4 className="text-lg font-semibold tracking-tight">Starter</h4>
<p className="mt-2 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>For small projects and quick wins.</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-5xl font-bold tracking-tight">$99</span>
<span className="mb-1.5 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>/month</span>
</div>
<ul className="mt-7 space-y-3 text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>1 active project</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Brand consultation</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Email support</li>
</ul>
<a className="mt-8 block rounded-[10px] py-3.5 text-center text-sm font-medium transition-colors hover:bg-white/5" href="#" style={{backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff'}}>Choose Starter</a>
</div>
<div className="relative overflow-hidden rounded-[30px] p-9 glow" style={{backgroundColor: '#131313', border: '1px solid rgba(0,85,254,0.4)'}}>
<span className="absolute right-7 top-9 rounded-[10px] px-3 py-1 text-xs font-medium" style={{backgroundColor: '#0055FE', color: '#fff'}}>Popular</span>
<h4 className="text-lg font-semibold tracking-tight">Studio</h4>
<p className="mt-2 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>For brands ready to scale.</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-5xl font-bold tracking-tight">$2,599</span>
<span className="mb-1.5 text-sm" style={{color: 'rgba(255,255,255,0.6)'}}>/month</span>
</div>
<ul className="mt-7 space-y-3 text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Unlimited projects</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Dedicated design team</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Priority support</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" style={{color: '#0055FE'}} width="18"></iconify-icon>Growth analytics</li>
</ul>
<a className="mt-8 block rounded-[10px] py-3.5 text-center text-sm font-medium transition-opacity hover:opacity-90" href="#" style={{backgroundColor: '#EFEFEC', color: '#131313'}}>Choose Studio</a>
</div>
</div>
</section>

<section className="pb-24">
<div className="mb-10 text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>Testimonials
      </div>
<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by <span style={{color: 'rgba(255,255,255,0.4)'}}>our clients.</span></h2>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.8)'}}>"Landin transformed our brand completely. The attention to detail is unmatched."</p>
<div className="mt-6 flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold" style={{backgroundColor: '#0055FE'}}>EM</span>
<div><div className="text-sm font-medium">Emma Mills</div><div className="text-xs" style={{color: 'rgba(255,255,255,0.5)'}}>CEO, Vertex</div></div>
</div>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.8)'}}>"The most professional team we've worked with. They delivered beyond expectations."</p>
<div className="mt-6 flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold" style={{backgroundColor: '#0055FE'}}>JK</span>
<div><div className="text-sm font-medium">James Kim</div><div className="text-xs" style={{color: 'rgba(255,255,255,0.5)'}}>Founder, Nexus</div></div>
</div>
</div>
<div className="rounded-[20px] p-7" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.8)'}}>"Our traffic increased 60% within months. Genuinely a game-changing partnership."</p>
<div className="mt-6 flex items-center gap-3">
<span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold" style={{backgroundColor: '#0055FE'}}>SP</span>
<div><div className="text-sm font-medium">Sara Patel</div><div className="text-xs" style={{color: 'rgba(255,255,255,0.5)'}}>CMO, Lumen</div></div>
</div>
</div>
</div>
</section>

<section className="pb-24" id="faq">
<div className="mb-10 text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-[10px] px-3 py-1.5 text-xs font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.7)'}}>
<span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor: '#0055FE'}}></span>FAQ
      </div>
<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently asked <span style={{color: 'rgba(255,255,255,0.4)'}}>questions.</span></h2>
</div>
<div className="mx-auto max-w-3xl space-y-3" id="faqList">
<div className="faq-item overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<button className="flex w-full items-center justify-between p-6 text-left">
<span className="text-base font-medium">How long does a typical project take?</span>
<iconify-icon className="faq-icon transition-transform" icon="solar:alt-arrow-down-linear" style={{color: 'rgba(255,255,255,0.5)'}} width="20"></iconify-icon>
</button>
<div className="faq-body hidden px-6 pb-6 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Most engagements run between 4 and 12 weeks depending on scope. We share a clear timeline before kickoff.</div>
</div>
<div className="faq-item overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<button className="flex w-full items-center justify-between p-6 text-left">
<span className="text-base font-medium">Do you work with early-stage startups?</span>
<iconify-icon className="faq-icon transition-transform" icon="solar:alt-arrow-down-linear" style={{color: 'rgba(255,255,255,0.5)'}} width="20"></iconify-icon>
</button>
<div className="faq-body hidden px-6 pb-6 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Absolutely. We love partnering with ambitious founders to shape brands from the ground up.</div>
</div>
<div className="faq-item overflow-hidden rounded-[20px]" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<button className="flex w-full items-center justify-between p-6 text-left">
<span className="text-base font-medium">What's included in ongoing support?</span>
<iconify-icon className="faq-icon transition-transform" icon="solar:alt-arrow-down-linear" style={{color: 'rgba(255,255,255,0.5)'}} width="20"></iconify-icon>
</button>
<div className="faq-body hidden px-6 pb-6 text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Continuous design iteration, performance reviews, and priority access to our team for new requests.</div>
</div>
</div>
</section>

<section className="relative mb-24 overflow-hidden rounded-[30px] px-6 py-20 text-center glow" style={{backgroundColor: '#131313', border: '1px solid rgba(255,255,255,0.08)'}}>
<h2 className="mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">Each Project we Undertake is a <span style={{color: 'rgba(255,255,255,0.4)'}}>Unique Opportunity.</span></h2>
<a className="mt-8 inline-block rounded-[10px] px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90" href="#" style={{backgroundColor: '#EFEFEC', color: '#131313'}}>Start a Project</a>
</section>
</main>

<footer style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
<div className="mx-auto grid gap-10 px-6 py-16 md:grid-cols-4" style={{maxWidth: '1280px'}}>
<div>
<a className="flex items-center gap-2" href="#">
<span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{backgroundColor: '#0055FE'}}><iconify-icon icon="solar:asterisk-square-linear" style={{color: '#fff'}} width="18"></iconify-icon></span>
<span className="text-lg font-semibold tracking-tight">Landin</span>
</a>
<p className="mt-4 max-w-xs text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>A premium creative agency building brands and products that move people.</p>
</div>
<div>
<h5 className="text-sm font-semibold">Company</h5>
<ul className="mt-4 space-y-3 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold">Resources</h5>
<ul className="mt-4 space-y-3 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold">Social</h5>
<ul className="mt-4 space-y-3 text-sm" style={{color: 'rgba(255,255,255,0.5)'}}>
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="mx-auto px-6 pb-10 text-xs" style={{maxWidth: '1280px', color: 'rgba(255,255,255,0.4)'}}>© 2024 Landin. All rights reserved.</div>
</footer>


    </>
  );
}
