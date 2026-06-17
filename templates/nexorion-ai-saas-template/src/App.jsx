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



      (function(){var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var pc=document.getElementById('heroParticles');if(pc&&!rm){for(var i=0;i<22;i++){var p=document.createElement('span');p.className='particle';var s=Math.random()*3+1;p.style.width=s+'px';p.style.height=s+'px';p.style.left=Math.random()*100+'%';p.style.top=Math.random()*100+'%';p.style.background=['#00E5FF','#6C5CFF','#00FFB2'][i%3];p.style.opacity='.5';p.style.animation='floatP '+(8+Math.random()*8)+'s linear infinite';p.style.animationDelay=(Math.random()*8)+'s';pc.appendChild(p);}}var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){var par=e.target.parentElement;var sibs=Array.prototype.filter.call(par.children,function(c){return c.classList.contains('stagger-item');});var idx=sibs.indexOf(e.target);if(idx>=0){e.target.style.transitionDelay=(idx*0.1)+'s';}e.target.classList.add('active');io.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -50px 0px'});document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right,.stagger-item').forEach(function(el){io.observe(el);});document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(ev){var t=document.querySelector(a.getAttribute('href'));if(t){ev.preventDefault();t.scrollIntoView({behavior:'smooth'});}});});if(!rm){document.querySelectorAll('.float-card').forEach(function(c){c.classList.add('tilt');});var hero=document.querySelector('section');var floats=document.querySelectorAll('.float-card');addEventListener('mousemove',function(e){var cx=(e.clientX/innerWidth-.5),cy=(e.clientY/innerHeight-.5);floats.forEach(function(f,i){var d=(i+1)*8;f.style.transform='translate('+(cx*d)+'px,'+(cy*d)+'px)';});});}})();
    


      // Nav scroll
      const nav = document.getElementById('nav');
      addEventListener('scroll', () => {
        if (scrollY > 30) { nav.classList.add('bg-[#03040a]/80','backdrop-blur-xl'); }
        else { nav.classList.remove('bg-[#03040a]/80','backdrop-blur-xl'); }
      });
      // Mobile menu
      const mb = document.getElementById('menuBtn'), mm = document.getElementById('mobileMenu');
      mb.addEventListener('click', () => mm.classList.toggle('hidden'));
      mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.add('hidden')));

      // Reveal
      const ro = new IntersectionObserver((ents) => {
        ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); ro.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

      // Cursor glow
      const cg = document.getElementById('cursorGlow');
      addEventListener('mousemove', e => { cg.style.left = e.clientX+'px'; cg.style.top = e.clientY+'px'; });

      // glow-card mouse pos
      document.querySelectorAll('.glow-card').forEach(c => {
        c.addEventListener('mousemove', e => {
          const r = c.getBoundingClientRect();
          c.style.setProperty('--mx', (e.clientX-r.left)+'px');
          c.style.setProperty('--my', (e.clientY-r.top)+'px');
        });
      });

      // Hero tilt
      const dash = document.getElementById('heroDash');
      const dashWrap = dash.parentElement;
      dashWrap.addEventListener('mousemove', e => {
        const r = dashWrap.getBoundingClientRect();
        const rx = ((e.clientY-r.top)/r.height-.5)*-8;
        const ry = ((e.clientX-r.left)/r.width-.5)*8;
        dash.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      dashWrap.addEventListener('mouseleave', () => dash.style.transform = 'rotateX(0) rotateY(0)');

      // Magnetic buttons
      document.querySelectorAll('.magnetic').forEach(b => {
        b.addEventListener('mousemove', e => {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.25}px, ${(e.clientY-r.top-r.height/2)*.35}px)`;
        });
        b.addEventListener('mouseleave', () => b.style.transform = 'translate(0,0)');
      });

      // Counters
      const counters = document.querySelectorAll('.counter');
      const co = new IntersectionObserver((ents) => {
        ents.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target, target = parseFloat(el.dataset.target), dec = +el.dataset.dec, suf = el.dataset.suffix;
          let start = null, dur = 1800;
          const step = ts => {
            if (!start) start = ts;
            const p = Math.min((ts-start)/dur, 1);
            const v = (target*(1-Math.pow(1-p,3)));
            el.textContent = v.toFixed(dec) + suf;
            if (p<1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          co.unobserve(el);
        });
      }, { threshold: .5 });
      counters.forEach(c => co.observe(c));

      // Accordion
      document.querySelectorAll('.acc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const body = btn.nextElementSibling;
          const icon = btn.querySelector('.acc-icon');
          const open = body.style.maxHeight && body.style.maxHeight !== '0px';
          document.querySelectorAll('.acc-body').forEach(b => b.style.maxHeight = '0px');
          document.querySelectorAll('.acc-icon').forEach(i => i.style.transform = 'rotate(0)');
          if (!open) { body.style.maxHeight = body.scrollHeight + 'px'; icon.style.transform = 'rotate(45deg)'; }
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
      

<div className="cursor-glow hidden lg:block" id="cursorGlow" style={{left: '641px', top: '31px'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-40"></div>
<div className="fixed inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(900px circle at 20% 10%, rgba(34,211,238,.10), transparent 60%), radial-gradient(900px circle at 85% 25%, rgba(139,92,246,.12), transparent 60%), radial-gradient(800px circle at 50% 90%, rgba(110,231,183,.07), transparent 55%)'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')', opacity: '.025', mixBlendMode: 'overlay'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 30%, #03040a 95%)'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 load-anim" id="nav">
<div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
<a className="flex items-center gap-2.5" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center relative bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
<img alt="NEXORION.AI" className="w-full h-full object-contain rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d749214-219d-451c-b855-3e699cf8a6ad_320w.png"/>
</div>
<span className="font-display text-lg font-semibold tracking-tight">
            NEXORION
            <span className="text-cyan-400">.AI</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-cyan-300 transition-colors" href="#platform">
            Platform
          </a>
<a className="hover:text-cyan-300 transition-colors" href="#intelligence">
            Intelligence
          </a>
<a className="hover:text-cyan-300 transition-colors" href="#security">
            Security
          </a>
<a className="hover:text-cyan-300 transition-colors" href="#solutions">
            Solutions
          </a>
<a className="hover:text-cyan-300 transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden text-white/80 text-2xl" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="group relative hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#03040a] bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_24px_rgba(34,211,238,.45)] hover:shadow-[0_0_38px_rgba(34,211,238,.65)] transition-all" href="#cta">
            Request Access
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="md:hidden hidden bg-[#06070f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-5 space-y-4 text-sm text-white/75" id="mobileMenu">
<a className="block" href="#platform">Platform</a>
<a className="block" href="#intelligence">Intelligence</a>
<a className="block" href="#security">Security</a>
<a className="block" href="#solutions">Solutions</a>
<a className="block" href="#pricing">Pricing</a>
<a className="block text-cyan-300 font-medium" href="#cta">
          Request Access →
        </a>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" id="heroParticles">
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.43006px', height: '2.43006px', left: '27.0517%', top: '31.9757%', background: 'rgb(108, 92, 255)', animation: '15.3583s linear 0.667716s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.45268px', height: '3.45268px', left: '7.33682%', top: '65.6426%', background: 'rgb(0, 255, 178)', animation: '14.1972s linear 7.22544s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.78658px', height: '3.78658px', left: '66.7028%', top: '95.1509%', background: 'rgb(0, 229, 255)', animation: '10.7584s linear 5.5404s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.15103px', height: '2.15103px', left: '33.0035%', top: '78.5985%', background: 'rgb(108, 92, 255)', animation: '15.0638s linear 3.29224s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.51695px', height: '1.51695px', left: '4.48239%', top: '88.4164%', background: 'rgb(0, 255, 178)', animation: '13.8556s linear 7.13464s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.20829px', height: '2.20829px', left: '95.0149%', top: '97.1212%', background: 'rgb(0, 229, 255)', animation: '10.4355s linear 0.603485s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.79935px', height: '3.79935px', left: '11.7008%', top: '57.9247%', background: 'rgb(108, 92, 255)', animation: '11.9133s linear 7.59427s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.49228px', height: '2.49228px', left: '81.1304%', top: '48.7933%', background: 'rgb(0, 255, 178)', animation: '15.7555s linear 2.65042s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.36488px', height: '2.36488px', left: '84.1348%', top: '45.9178%', background: 'rgb(0, 229, 255)', animation: '11.5765s linear 0.626315s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.1035px', height: '1.1035px', left: '10.3561%', top: '31.2654%', background: 'rgb(108, 92, 255)', animation: '12.674s linear 6.2601s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.03168px', height: '1.03168px', left: '5.19642%', top: '63.8303%', background: 'rgb(0, 255, 178)', animation: '10.2673s linear 4.75843s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.94272px', height: '3.94272px', left: '75.64%', top: '43.5232%', background: 'rgb(0, 229, 255)', animation: '13.3034s linear 6.65187s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.89072px', height: '2.89072px', left: '68.3892%', top: '20.6176%', background: 'rgb(108, 92, 255)', animation: '11.7312s linear 0.996702s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.70762px', height: '1.70762px', left: '8.08056%', top: '16.6842%', background: 'rgb(0, 255, 178)', animation: '14.6962s linear 7.47079s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.71285px', height: '3.71285px', left: '42.0404%', top: '4.87034%', background: 'rgb(0, 229, 255)', animation: '10.7205s linear 5.38366s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.32708px', height: '1.32708px', left: '98.8475%', top: '93.5652%', background: 'rgb(108, 92, 255)', animation: '11.1607s linear 6.35662s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.32762px', height: '2.32762px', left: '2.49527%', top: '12.0453%', background: 'rgb(0, 255, 178)', animation: '8.57441s linear 3.65758s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.30731px', height: '1.30731px', left: '3.60305%', top: '27.8549%', background: 'rgb(0, 229, 255)', animation: '8.86938s linear 7.14618s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '2.26762px', height: '2.26762px', left: '17.4314%', top: '50.5649%', background: 'rgb(108, 92, 255)', animation: '13.2616s linear 6.0338s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.3018px', height: '1.3018px', left: '37.5344%', top: '73.5999%', background: 'rgb(0, 255, 178)', animation: '15.6268s linear 4.7591s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '1.17628px', height: '1.17628px', left: '56.3093%', top: '36.2046%', background: 'rgb(0, 229, 255)', animation: '14.7299s linear 0.27925s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
<span className="particle" style={{width: '3.35491px', height: '3.35491px', left: '54.2504%', top: '89.4359%', background: 'rgb(0, 229, 255)', animation: '14.6087s linear 7.05896s infinite normal none running floatP'}}></span>
</div>
<div className="absolute left-1/2 top-0 w-[2px] h-full pointer-events-none" style={{background: 'linear-gradient(180deg,transparent,rgba(0,229,255,.5),transparent)', animation: 'scanline 6s linear infinite', opacity: '.4'}}></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full blur-[120px] pointer-events-none" style={{background: 'radial-gradient(closest-side, rgba(34,211,238,.18), transparent 70%)'}}></div>
<div className="absolute top-10 right-0 w-[40vw] h-[40vh] rounded-full blur-[110px] pointer-events-none" style={{background: 'radial-gradient(closest-side, rgba(139,92,246,.18), transparent 70%)'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" preserveaspectratio="none">
<defs>
<lineargradient id="og" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="#22d3ee"></stop>
<stop offset="1" stop-color="#8b5cf6"></stop>
</lineargradient>
</defs>
<path d="M-100,200 C400,100 900,500 1600,250" fill="none" stroke="url(#og)" stroke-dasharray="6 14" strokeWidth="1.2" style={{animation: 'dash 22s linear infinite'}}></path>
<path d="M-100,500 C500,650 1000,150 1700,550" fill="none" opacity=".5" stroke="url(#og)" stroke-dasharray="4 18" strokeWidth="0.9" style={{animation: 'dash 30s linear infinite reverse'}}></path>
</svg>
<div className="grid lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-14 gap-y-14 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm mb-7">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
<span className="font-mono text-xs tracking-widest text-emerald-300 uppercase">
                SYSTEM STATUS: ALL SHIELDS ONLINE
              </span>
</div>
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/80 mb-5">
              Autonomous Intelligence for the Secure Digital Future
            </p>
<h1 className="font-display text-5xl sm:text-6xl lg:text-[4.8rem] font-bold leading-[1.04] tracking-tight mb-7">
<span className="block overflow-hidden">
<span className="block reveal-line" style={{animationDelay: '.2s'}}>
                  Autonomous
                  <span className="text-holo">AI Defense</span>
</span>
</span>
<span className="block overflow-hidden">
<span className="block reveal-line" style={{animationDelay: '.4s'}}>
                  for Enterprise
                </span>
</span>
<span className="block overflow-hidden">
<span className="block reveal-line" style={{animationDelay: '.6s'}}>
                  Systems
                </span>
</span>
</h1>
<p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-9 load-anim" style={{animationDelay: '1.1s'}}>
              Predict threats, neutralize attacks, and secure cloud
              infrastructure with real-time autonomous intelligence built for
              modern enterprise teams.
            </p>
<div className="flex flex-col sm:flex-row gap-4 load-anim" style={{animationDelay: '1.3s'}}>
<a className="magnetic btn-shine group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#03040a] bg-gradient-to-r from-cyan-300 via-cyan-200 to-emerald-300 shadow-[0_0_30px_rgba(0,229,255,.5)] hover:shadow-[0_0_50px_rgba(0,229,255,.75)] transition-all" href="#cta">
                Launch Platform
                <iconify-icon icon="solar:rocket-2-linear"></iconify-icon>
</a>
<a className="shim-border group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-white/90 border border-white/15 bg-white/5 backdrop-blur-sm hover:text-cyan-200 transition-all" href="#platform">
                Watch Security Demo
                <iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
<div className="mt-12 pt-7 border-t border-white/8 load-anim" style={{animationDelay: '1.5s'}}>
<p className="font-mono text-[11px] tracking-widest uppercase text-white/40 mb-4">
                Trusted by AI-first security teams and enterprise cloud
                platforms
              </p>
<div className="flex flex-wrap gap-x-8 gap-y-3 items-center font-display font-semibold text-white/45 text-sm tracking-tight">
<span>AXIOM CLOUD</span>
<span>NOVA BANK</span>
<span>HELIX LABS</span>
<span>STRATOS AI</span>
<span>QUANTUMGRID</span>
</div>
</div>
</div>

<div className="reveal relative" style={{perspective: '1400px'}}>
<div className="tilt dash-in relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.01] backdrop-blur-xl p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,.9),0_0_60px_-15px_rgba(0,229,255,.25)] overflow-hidden" id="heroDash" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute left-0 right-0 h-16 pointer-events-none" style={{background: 'linear-gradient(180deg, transparent, rgba(34,211,238,.10), transparent)', animation: 'scanline 5s linear infinite'}}></div>

<div className="flex items-center justify-between mb-4 relative">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
<span className="w-2.5 h-2.5 rounded-full bg-amber-300/70"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"></span>
</div>
<span className="font-mono text-[11px] tracking-widest text-cyan-300/80 uppercase">
                  NEXORION_CMD // LIVE
                </span>
</div>

<div className="grid grid-cols-3 gap-3 mb-4 relative">
<div className="rounded-xl border border-white/10 bg-black/30 p-3">
<p className="font-mono text-[10px] uppercase text-white/40 mb-1">
                    Integrity
                  </p>
<p className="font-display text-emerald-300 font-semibold text-lg">
                    99.99%
                  </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/30 p-3">
<p className="font-mono text-[10px] uppercase text-white/40 mb-1">
                    Response
                  </p>
<p className="font-display text-cyan-300 font-semibold text-lg">
                    0.03s
                  </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/30 p-3">
<p className="font-mono text-[10px] uppercase text-white/40 mb-1">
                    Blocked
                  </p>
<p className="font-display text-violet-300 font-semibold text-lg">
                    9.8M
                  </p>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-black/30 p-4 mb-4 relative">
<div className="flex justify-between items-center mb-3">
<p className="font-mono text-[11px] uppercase text-white/50">
                    Threat Surface Analysis
                  </p>
<span className="font-mono text-[10px] text-emerald-300">
                    ▲ Neutralized
                  </span>
</div>
<svg className="w-full h-20" viewbox="0 0 320 80">
<defs>
<lineargradient id="cg" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#22d3ee" stop-opacity=".5"></stop>
<stop offset="1" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,60 Q40,30 70,45 T140,25 T210,40 T280,15 L320,22 L320,80 L0,80Z" fill="url(#cg)"></path>
<path d="M0,60 Q40,30 70,45 T140,25 T210,40 T280,15 L320,22" fill="none" stroke="#22d3ee" stroke-dasharray="700" stroke-dashoffset="700" strokeWidth="2" style={{animation: 'dash 4s ease forwards'}}></path>
</svg>

<div className="flex items-end gap-1.5 h-10 mt-2">
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 2s ease-in-out infinite'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 2.4s ease-in-out infinite .2s'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 1.8s ease-in-out infinite .4s'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 2.6s ease-in-out infinite .1s'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 2.1s ease-in-out infinite .5s'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 2.3s ease-in-out infinite .3s'}}></div>
<div className="w-full bg-gradient-to-t from-violet-500/60 to-cyan-400/60 rounded-sm" style={{animation: 'barpulse 1.9s ease-in-out infinite .6s'}}></div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-black/30 p-3 relative font-mono text-[11px] space-y-1.5">
<div className="flex items-center gap-2 text-white/55">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
                  AI core neutralized intrusion · node 0x4F
                </div>
<div className="flex items-center gap-2 text-white/55">
<iconify-icon className="text-cyan-400" icon="solar:lock-keyhole-linear"></iconify-icon>
                  Encrypted packet verified · cloud edge
                </div>
<div className="flex items-center gap-2 text-white/40">
<iconify-icon className="text-violet-400" icon="solar:radar-linear"></iconify-icon>
                  Behavioral anomaly isolated · finance API
                </div>
</div>
</div>

<div className="absolute -top-5 -left-6 hidden sm:block rounded-xl border border-cyan-400/20 bg-white/[.06] backdrop-blur-xl px-4 py-3 shadow-2xl float-card tilt" style={{animation: 'float 6s ease-in-out infinite, dashIn 1.2s cubic-bezier(.16,1,.3,1) 1s both'}}>
<p className="font-mono text-[10px] uppercase text-white/40">
                Threats Blocked
              </p>
<p className="font-display font-semibold text-cyan-300 text-lg">
                9.8M
              </p>
</div>
<div className="absolute -bottom-6 -right-5 hidden sm:block rounded-xl border border-emerald-400/20 bg-white/[.06] backdrop-blur-xl px-4 py-3 shadow-2xl float-card tilt" style={{animation: 'floatslow 7s ease-in-out infinite, dashIn 1.2s cubic-bezier(.16,1,.3,1) 1.2s both'}}>
<p className="font-mono text-[10px] uppercase text-white/40">
                AI Response
              </p>
<p className="font-display font-semibold text-emerald-300 text-lg">
                0.03s
              </p>
</div>
<div className="absolute top-1/2 -right-8 hidden lg:flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 backdrop-blur-xl px-4 py-2 shadow-2xl" style={{animation: 'float 8s ease-in-out infinite 1s, dashIn 1.2s cubic-bezier(.16,1,.3,1) 1.4s both'}}>
<iconify-icon className="text-violet-300" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="font-mono text-[11px] text-violet-200">
                Quantum Shield Active
              </span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="security">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            The Threat Landscape
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight reveal-up">
            Security Teams Are Fighting Tomorrow's Threats With Yesterday's
            Tools
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 hover:bg-white/[.06] transition-all duration-300 card3d sheen">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-400/10 border border-red-400/20 text-red-300 mb-5 icon-pop">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-2">
              Real-Time Attacks
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Adversaries deploy automated, polymorphic attacks faster than any
              human team can detect or contain them.
            </p>
</div>
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 hover:bg-white/[.06] transition-all duration-300 card3d sheen">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-300/10 border border-amber-300/20 text-amber-300 mb-5 icon-pop">
<iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-2">
              Data Overload
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Millions of daily signals drown analysts in noise — the critical
              threats hide where no one is looking.
            </p>
</div>
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 hover:bg-white/[.06] transition-all duration-300 card3d sheen">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-400/10 border border-violet-400/20 text-violet-300 mb-5 icon-pop">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold mb-2">
              Slow Manual Response
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Every second of manual triage gives attackers more ground. Damage
              compounds before humans even respond.
            </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="intelligence">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
              The NEXORION Difference
            </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-7 reveal-left">
              NEXORION Thinks, Detects, and Responds Before Damage Happens
            </h2>
<div className="space-y-5">
<div className="flex gap-4">
<iconify-icon className="text-emerald-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<div>
<p className="font-medium">Predictive neural detection</p>
<p className="text-white/55 text-sm">
                    AI models forecast attack vectors before they materialize.
                  </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-emerald-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<div>
<p className="font-medium">Autonomous containment</p>
<p className="text-white/55 text-sm">
                    Threats are isolated and neutralized in milliseconds, no
                    human needed.
                  </p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-emerald-400 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<div>
<p className="font-medium">Self-evolving defense grid</p>
<p className="text-white/55 text-sm">
                    Every attack makes the system stronger and smarter.
                  </p>
</div>
</div>
</div>
</div>

<div className="reveal-right flex justify-center items-center relative h-[420px]">
<div className="absolute w-72 h-72 rounded-full blur-[60px] bg-cyan-400/20"></div>
<div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/15" style={{animation: 'spin360 30s linear infinite'}}></div>
<div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-violet-400/25" style={{animation: 'spin360 22s linear infinite reverse'}}></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-400/20" style={{animation: 'spin360 16s linear infinite'}}></div>

<div className="absolute top-[10%] left-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" style={{animation: 'pulseglow 2s infinite'}}></div>
<div className="absolute bottom-[14%] right-[22%] w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_14px_#8b5cf6]" style={{animation: 'pulseglow 2.4s infinite .4s'}}></div>
<div className="absolute top-[40%] left-[8%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_14px_#6ee7b7]" style={{animation: 'pulseglow 2.2s infinite .8s'}}></div>
<div className="relative w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.35)]">
<iconify-icon className="text-4xl text-cyan-200" icon="solar:cpu-bolt-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="platform">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            Capabilities
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight reveal-up">
            Enterprise Security Intelligence, Engineered for Speed
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:radar-2-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Predictive Threat Intelligence
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Anticipate attacks with models trained on global threat telemetry.
            </p>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-400/10 border border-violet-400/20 text-violet-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Autonomous Incident Response
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Detect, contain, and remediate threats in milliseconds — fully
              hands-free.
            </p>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:cloud-storage-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Cloud-Native Protection
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Built for multi-cloud, hybrid, and edge — secured wherever you
              run.
            </p>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Encrypted Data Flow Mapping
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Visualize and protect every data path across your infrastructure.
            </p>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-400/10 border border-violet-400/20 text-violet-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Real-Time Risk Scoring
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Quantified, continuously updated risk posture across every asset.
            </p>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden card3d sheen">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-emerald-400/10 blur-2xl"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 mb-5 icon-pop float3d">
<iconify-icon className="text-2xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="font-display text-lg font-semibold mb-2">
              Executive Security Dashboards
            </h3>
<p className="text-white/55 text-sm leading-relaxed">
              Board-ready insights translating raw signals into business
              clarity.
            </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            Architecture
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight reveal-up">
            The AI Security Engine
          </h2>
</div>
<div className="relative grid md:grid-cols-5 gap-4">

<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-violet-400/0"></div>
<div className="hidden md:block absolute top-1/2 left-0 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" style={{offsetPath: 'path(\'M0,0 H1100\')', animation: 'packet 4s linear infinite'}}></div>

<div className="stagger-item relative z-10 rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-md p-6 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all card3d sheen glow-anim">
<div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-4 icon-pop float3d">
<iconify-icon className="text-xl" icon="solar:streets-linear"></iconify-icon>
</div>
<p className="font-display font-semibold text-sm mb-1">Data Stream</p>
<p className="font-mono text-[10px] text-white/40 uppercase">Ingest</p>
</div>
<div className="stagger-item relative z-10 rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-md p-6 text-center hover:border-violet-400/40 hover:-translate-y-1 transition-all card3d sheen glow-anim">
<div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center bg-violet-400/10 border border-violet-400/20 text-violet-300 mb-4 icon-pop float3d">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<p className="font-display font-semibold text-sm mb-1">
              Neural Detection
            </p>
<p className="font-mono text-[10px] text-white/40 uppercase">Analyze</p>
</div>
<div className="stagger-item relative z-10 rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-md p-6 text-center hover:border-emerald-400/40 hover:-translate-y-1 transition-all card3d sheen glow-anim">
<div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 mb-4 icon-pop float3d">
<iconify-icon className="text-xl" icon="solar:magnifer-bug-linear"></iconify-icon>
</div>
<p className="font-display font-semibold text-sm mb-1">
              Threat Analysis
            </p>
<p className="font-mono text-[10px] text-white/40 uppercase">
              Classify
            </p>
</div>
<div className="stagger-item relative z-10 rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-md p-6 text-center hover:border-cyan-400/40 hover:-translate-y-1 transition-all card3d sheen glow-anim">
<div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 mb-4 icon-pop float3d">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<p className="font-display font-semibold text-sm mb-1">Auto Response</p>
<p className="font-mono text-[10px] text-white/40 uppercase">
              Neutralize
            </p>
</div>
<div className="stagger-item relative z-10 rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-md p-6 text-center hover:border-violet-400/40 hover:-translate-y-1 transition-all card3d sheen glow-anim">
<div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center bg-violet-400/10 border border-violet-400/20 text-violet-300 mb-4 icon-pop float3d">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<p className="font-display font-semibold text-sm mb-1">
              Compliance Report
            </p>
<p className="font-mono text-[10px] text-white/40 uppercase">Audit</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.05] to-transparent backdrop-blur-md p-10 sm:p-14 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center reveal relative overflow-hidden">
<div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="relative">
<p className="font-display text-4xl sm:text-5xl font-bold text-holo counter" data-dec="2" data-suffix="%" data-target="99.99">
              0
            </p>
<p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-2">
              Uptime
            </p>
</div>
<div className="relative">
<p className="font-display text-4xl sm:text-5xl font-bold text-holo counter" data-dec="2" data-suffix="s" data-target="0.03">
              0
            </p>
<p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-2">
              AI Response
            </p>
</div>
<div className="relative">
<p className="font-display text-4xl sm:text-5xl font-bold text-holo counter" data-dec="1" data-suffix="M" data-target="9.8">
              0
            </p>
<p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-2">
              Threats Blocked
            </p>
</div>
<div className="relative">
<p className="font-display text-4xl sm:text-5xl font-bold text-holo counter" data-dec="0" data-suffix="+" data-target="420">
              0
            </p>
<p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-2">
              Integrations
            </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="solutions">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            Deployments
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight reveal-up">
            Built for Every Mission-Critical Environment
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glow-card stagger-item rounded-2xl border border-white/10 p-7 h-64 flex flex-col justify-end relative overflow-hidden hover:-translate-y-2 transition-all duration-300 card3d sheen" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,211,238,.22), transparent 55%), #06070f'}}>
<iconify-icon className="text-3xl text-cyan-300 mb-3 icon-pop float3d" icon="solar:server-linear"></iconify-icon>
<h3 className="font-display text-lg font-semibold">
              Enterprise Cloud Security
            </h3>
<p className="text-white/55 text-sm mt-1">
              Defend multi-cloud estates at scale.
            </p>
</div>
<div className="glow-card stagger-item rounded-2xl border border-white/10 p-7 h-64 flex flex-col justify-end relative overflow-hidden hover:-translate-y-2 transition-all duration-300 card3d sheen" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(139,92,246,.22), transparent 55%), #06070f'}}>
<iconify-icon className="text-3xl text-violet-300 mb-3 icon-pop float3d" icon="solar:card-linear"></iconify-icon>
<h3 className="font-display text-lg font-semibold">
              Fintech Fraud Defense
            </h3>
<p className="text-white/55 text-sm mt-1">
              Stop fraud before transactions clear.
            </p>
</div>
<div className="glow-card stagger-item rounded-2xl border border-white/10 p-7 h-64 flex flex-col justify-end relative overflow-hidden hover:-translate-y-2 transition-all duration-300 card3d sheen" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(110,231,183,.22), transparent 55%), #06070f'}}>
<iconify-icon className="text-3xl text-emerald-300 mb-3 icon-pop float3d" icon="solar:health-linear"></iconify-icon>
<h3 className="font-display text-lg font-semibold">
              Healthcare Data Protection
            </h3>
<p className="text-white/55 text-sm mt-1">
              HIPAA-grade patient data security.
            </p>
</div>
<div className="glow-card stagger-item rounded-2xl border border-white/10 p-7 h-64 flex flex-col justify-end relative overflow-hidden hover:-translate-y-2 transition-all duration-300 card3d sheen" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(34,211,238,.18), rgba(139,92,246,.12) 40%, transparent 60%), #06070f'}}>
<iconify-icon className="text-3xl text-cyan-300 mb-3 icon-pop float3d" icon="solar:cpu-bolt-linear"></iconify-icon>
<h3 className="font-display text-lg font-semibold">
              AI Infrastructure Monitoring
            </h3>
<p className="text-white/55 text-sm mt-1">
              Secure your models and pipelines.
            </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="pricing">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            Pricing
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight reveal-up">
            Defense That Scales With You
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 items-center">

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-8 hover:-translate-y-2 transition-all duration-300">
<p className="font-display text-lg font-semibold">Sentinel</p>
<p className="text-white/50 text-sm mb-6">
              For growing security teams.
            </p>
<p className="font-display text-4xl font-bold mb-6">
              $19
              <span className="text-base font-normal text-white/50">/mo</span>
</p>
<ul className="space-y-3 text-sm text-white/65 mb-8">
<li className="flex gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Predictive threat intel
              </li>
<li className="flex gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Up to 25 endpoints
              </li>
<li className="flex gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                Standard dashboards
              </li>
</ul>
<a className="block text-center py-3 rounded-full border border-white/15 hover:border-cyan-400/40 hover:text-cyan-200 transition-all text-sm font-medium" href="#cta">
              Get Started
            </a>
</div>

<div className="glow-card btn-shine stagger-item rounded-2xl border border-cyan-400/50 bg-gradient-to-b from-cyan-400/[.10] to-violet-500/[.06] backdrop-blur-md p-8 relative scale-[1.04] shadow-[0_0_54px_rgba(0,229,255,.3)]" style={{marginTop: '1.75rem'}}>
<span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#03040a] font-semibold">
              Most Popular
            </span>
<p className="font-display text-lg font-semibold">Vanguard</p>
<p className="text-white/50 text-sm mb-6">For scaling enterprises.</p>
<p className="font-display text-4xl font-bold mb-6">
              $49
              <span className="text-base font-normal text-white/50">/mo</span>
</p>
<ul className="space-y-3 text-sm text-white/75 mb-8">
<li className="flex gap-2">
<iconify-icon className="text-cyan-300" icon="solar:check-circle-bold"></iconify-icon>
                Everything in Sentinel
              </li>
<li className="flex gap-2">
<iconify-icon className="text-cyan-300" icon="solar:check-circle-bold"></iconify-icon>
                Autonomous response
              </li>
<li className="flex gap-2">
<iconify-icon className="text-cyan-300" icon="solar:check-circle-bold"></iconify-icon>
                Unlimited endpoints
              </li>
<li className="flex gap-2">
<iconify-icon className="text-cyan-300" icon="solar:check-circle-bold"></iconify-icon>
                Executive dashboards
              </li>
</ul>
<a className="block text-center py-3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 text-[#03040a] font-semibold text-sm shadow-[0_0_24px_rgba(34,211,238,.5)]" href="#cta">
              Request Access
            </a>
</div>

<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-8 hover:-translate-y-2 transition-all duration-300">
<p className="font-display text-lg font-semibold">Dominion</p>
<p className="text-white/50 text-sm mb-6">For global infrastructure.</p>
<p className="font-display text-4xl font-bold mb-6">Custom</p>
<ul className="space-y-3 text-sm text-white/65 mb-8">
<li className="flex gap-2">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                Everything in Vanguard
              </li>
<li className="flex gap-2">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                Dedicated AI core
              </li>
<li className="flex gap-2">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                24/7 command support
              </li>
</ul>
<a className="block text-center py-3 rounded-full border border-white/15 hover:border-violet-400/40 hover:text-violet-200 transition-all text-sm font-medium" href="#cta">
              Contact Sales
            </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28">
<div className="text-center mb-16 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            Field Reports
          </p>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight reveal-up">
            Trusted by Security Leaders
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 card3d sheen">
<p className="text-white/70 text-sm leading-relaxed mb-6">
              "NEXORION neutralized a coordinated attack before our team even
              saw the alert. It's like having a thousand analysts that never
              sleep."
            </p>
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-400/30 to-violet-500/30 border border-white/10 font-display font-semibold text-cyan-200">
                EM
              </div>
<div>
<p className="font-medium text-sm">Elena Marsh</p>
<p className="text-white/45 text-xs">CISO, Helix Cloud</p>
</div>
</div>
</div>
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 card3d sheen">
<p className="text-white/70 text-sm leading-relaxed mb-6">
              "Deployment took an afternoon. Within a week our risk posture
              transformed entirely. The ROI was undeniable."
            </p>
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-400/30 to-cyan-500/30 border border-white/10 font-display font-semibold text-emerald-200">
                DK
              </div>
<div>
<p className="font-medium text-sm">David Kane</p>
<p className="text-white/45 text-xs">VP Security, NovaSec</p>
</div>
</div>
</div>
<div className="glow-card shim-border stagger-item rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 card3d sheen">
<p className="text-white/70 text-sm leading-relaxed mb-6">
              "The executive dashboards finally let me speak to the board in
              business terms. NEXORION is now core to our strategy."
            </p>
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-400/30 to-cyan-500/30 border border-white/10 font-display font-semibold text-violet-200">
                SR
              </div>
<div>
<p className="font-medium text-sm">Sofia Rivera</p>
<p className="text-white/45 text-xs">CTO, Aether Labs</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-28">
<div className="text-center mb-14 reveal">
<p className="font-mono text-xs tracking-[.3em] uppercase text-cyan-300/70 mb-4">
            FAQ
          </p>
<h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight reveal-up">
            Answers, Decrypted
          </h2>
</div>
<div className="space-y-4" id="faq">

<div className="acc stagger-item rounded-xl border border-white/10 bg-white/[.045] overflow-hidden hover:border-cyan-400/30 transition-colors">
<button className="acc-btn w-full flex items-center justify-between gap-4 p-5 text-left">
<span className="font-medium">
                Can this platform integrate with our existing cloud stack?
              </span>
<iconify-icon className="text-cyan-300 text-xl shrink-0 acc-icon transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="acc-body">
<p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                Yes. NEXORION ships with 420+ native integrations across AWS,
                Azure, GCP, and hybrid environments — deployment is seamless and
                agentless where supported.
              </p>
</div>
</div>
<div className="acc stagger-item rounded-xl border border-white/10 bg-white/[.045] overflow-hidden hover:border-cyan-400/30 transition-colors">
<button className="acc-btn w-full flex items-center justify-between gap-4 p-5 text-left">
<span className="font-medium">
                Is NEXORION built for enterprise security teams?
              </span>
<iconify-icon className="text-cyan-300 text-xl shrink-0 acc-icon transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="acc-body">
<p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                Absolutely. From SOC analysts to the C-suite, NEXORION delivers
                role-based dashboards, compliance reporting, and autonomous
                workflows designed for scale.
              </p>
</div>
</div>
<div className="acc stagger-item rounded-xl border border-white/10 bg-white/[.045] overflow-hidden hover:border-cyan-400/30 transition-colors">
<button className="acc-btn w-full flex items-center justify-between gap-4 p-5 text-left">
<span className="font-medium">
                Does it support real-time automated response?
              </span>
<iconify-icon className="text-cyan-300 text-xl shrink-0 acc-icon transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="acc-body">
<p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                Threats are detected and neutralized autonomously in an average
                of 0.03 seconds — no human intervention required for known and
                predicted attack classes.
              </p>
</div>
</div>
<div className="acc stagger-item rounded-xl border border-white/10 bg-white/[.045] overflow-hidden hover:border-cyan-400/30 transition-colors">
<button className="acc-btn w-full flex items-center justify-between gap-4 p-5 text-left">
<span className="font-medium">Can dashboards be customized?</span>
<iconify-icon className="text-cyan-300 text-xl shrink-0 acc-icon transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="acc-body">
<p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                Fully. Build custom views with drag-and-drop widgets, define
                metrics, and export board-ready reports tailored to any
                stakeholder.
              </p>
</div>
</div>
<div className="acc stagger-item rounded-xl border border-white/10 bg-white/[.045] overflow-hidden hover:border-cyan-400/30 transition-colors">
<button className="acc-btn w-full flex items-center justify-between gap-4 p-5 text-left">
<span className="font-medium">Is deployment complicated?</span>
<iconify-icon className="text-cyan-300 text-xl shrink-0 acc-icon transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="acc-body">
<p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                Not at all. Most teams are fully operational within hours. Our
                guided onboarding and dedicated support make integration
                effortless.
              </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-28" id="cta">
<div className="reveal relative rounded-3xl border border-white/10 overflow-hidden p-12 sm:p-20 text-center" style={{background: 'radial-gradient(100% 120% at 50% 0%, rgba(34,211,238,.16), transparent 60%), radial-gradient(80% 80% at 80% 100%, rgba(139,92,246,.16), transparent 60%), #06070f'}}>
<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] bg-cyan-400/15 pointer-events-none"></div>
<div className="relative">
<h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-holo mb-5 reveal-up">
              Build a Security Layer That Never Sleeps
            </h2>
<p className="text-white/60 max-w-xl mx-auto mb-9">
              Start deploying autonomous AI defense across your infrastructure
              today.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="magnetic inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[#03040a] bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_30px_rgba(34,211,238,.5)] hover:shadow-[0_0_46px_rgba(34,211,238,.7)] transition-all" href="#">
                Request Access
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-white/15 bg-white/5 hover:border-cyan-400/40 hover:text-cyan-200 transition-all" href="#platform">
                Explore Platform
              </a>
</div>
</div>
<div className="absolute inset-0 pointer-events-none shim-border rounded-3xl" style={{opacity: '1'}}></div>
</div>
</section>

<footer className="border-t border-white/8 pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2.5 mb-4" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-cyan-400/30">
<iconify-icon className="text-cyan-300" icon="solar:atom-linear"></iconify-icon>
</div>
<span className="font-display text-lg font-semibold tracking-tight">
                  NEXORION
                  <span className="text-cyan-400">.AI</span>
</span>
</a>
<p className="text-white/50 text-sm max-w-sm leading-relaxed">
                Autonomous intelligence for the secure digital future. Predict,
                neutralize, and protect — in real time.
              </p>
<div className="flex gap-3 mt-6">
<a className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 transition-all" href="#">
<iconify-icon icon="solar:hashtag-linear"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 transition-all" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 transition-all" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
                Product
              </p>
<ul className="space-y-3 text-sm text-white/60">
<li>
<a className="hover:text-cyan-300 transition-colors" href="#platform">
                    Platform
                  </a>
</li>
<li>
<a className="hover:text-cyan-300 transition-colors" href="#intelligence">
                    Intelligence
                  </a>
</li>
<li>
<a className="hover:text-cyan-300 transition-colors" href="#pricing">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div>
<p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
                Company
              </p>
<ul className="space-y-3 text-sm text-white/60">
<li>
<a className="hover:text-cyan-300 transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-cyan-300 transition-colors" href="#">
                    Security
                  </a>
</li>
<li>
<a className="hover:text-cyan-300 transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/8 gap-4 text-xs text-white/40 font-mono">
<p>© 2026 NEXORION AI — All Shields Online</p>
<div className="flex gap-6">
<a className="hover:text-cyan-300 transition-colors" href="#">
                Privacy
              </a>
<a className="hover:text-cyan-300 transition-colors" href="#">
                Terms
              </a>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
