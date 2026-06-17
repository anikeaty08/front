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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
    
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        }
      });
    


      gsap.registerPlugin(ScrollTrigger);const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!prefersReducedMotion){document.querySelectorAll('.reveal-up').forEach((el,i)=>{gsap.fromTo(el,{y:32,opacity:0},{y:0,opacity:1,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true},delay:i*0.02});});gsap.utils.toArray('.reveal-card').forEach((card,i)=>{gsap.fromTo(card,{y:44,opacity:0,rotateX:-3},{y:0,opacity:1,rotateX:0,duration:0.95,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 85%',once:true},delay:i*0.06});});gsap.utils.toArray('.workflow-step').forEach((step,i)=>{gsap.fromTo(step,{y:36,opacity:0},{y:0,opacity:1,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:step,start:'top 87%',once:true},delay:i*0.05});});gsap.utils.toArray('.testimonial-card, .pricing-card, .metric-card').forEach((card,i)=>{gsap.fromTo(card,{y:28,opacity:0,scale:0.985},{y:0,opacity:1,scale:1,duration:0.82,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 88%',once:true},delay:i*0.04});});const heroTl=gsap.timeline({defaults:{ease:'power3.out'}});heroTl.from('[data-aura-edit-target="aet-117"]',{y:18,opacity:0,duration:0.7}).from('[data-aura-edit-target="aet-20"]',{y:26,opacity:0,duration:0.9},'-=0.45').from('[data-aura-edit-target="aet-323"]',{y:20,opacity:0,duration:0.8},'-=0.55').from('[data-aura-edit-target="aet-118"] > a',{y:16,opacity:0,stagger:0.08,duration:0.55},'-=0.35').from('[data-aura-edit-target="aet-130"]',{y:34,opacity:0,scale:0.97,duration:1},'-=0.85').from('[data-aura-edit-target="aet-145"]',{x:-18,opacity:0,duration:0.8},'-=0.55');gsap.to('[data-aura-edit-target="aet-113"]',{x:20,y:-12,duration:5.5,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('[data-aura-edit-target="aet-114"]',{x:-18,y:14,duration:6.5,repeat:-1,yoyo:true,ease:'sine.inOut'});gsap.to('.marquee-track',{xPercent:-50,duration:26,ease:'none',repeat:-1});gsap.to('.float-y',{y:-14,duration:2.6,ease:'sine.inOut',repeat:-1,yoyo:true});gsap.to('.floating-panel',{y:-8,duration:2.8,ease:'sine.inOut',repeat:-1,yoyo:true,stagger:0.22});gsap.fromTo('.sprint-bar',{width:'0%'},{width:'78%',duration:1.6,ease:'power3.out',delay:0.25});gsap.utils.toArray('.metric-card').forEach((card)=>{const fill=card.querySelector('.metric-fill');const counter=card.querySelector('.counter');ScrollTrigger.create({trigger:card,start:'top 85%',once:true,onEnter:()=>{if(fill){gsap.to(fill,{width:counter?.dataset.target==='41'?'41%':counter?.dataset.target==='3'?'82%':'92%',duration:1.3,ease:'power3.out'});}if(counter){const target=parseInt(counter.dataset.target,10);const obj={val:0};gsap.to(obj,{val:target,duration:1.5,ease:'power3.out',onUpdate:()=>{counter.textContent=Math.round(obj.val);}});}}});});gsap.utils.toArray('.bar-chart').forEach((bar,i)=>{gsap.fromTo(bar,{scaleY:0,transformOrigin:'bottom center'},{scaleY:1,duration:1,ease:'power3.out',delay:i*0.08,scrollTrigger:{trigger:bar.closest('.metric-card'),start:'top 85%',once:true}});});document.querySelectorAll('[data-aura-edit-target="aet-155"] > div, .pricing-card, .testimonial-card, .reveal-card, .workflow-step').forEach((item)=>{item.addEventListener('mouseenter',()=>{gsap.to(item,{y:-6,scale:1.01,duration:0.35,ease:'power3.out'});});item.addEventListener('mouseleave',()=>{gsap.to(item,{y:0,scale:1,duration:0.4,ease:'power3.out'});});});document.querySelectorAll('.tilt-card').forEach((card)=>{const glow=card.querySelector('.hero-glow');card.addEventListener('mousemove',(e)=>{const rect=card.getBoundingClientRect();const px=(e.clientX-rect.left)/rect.width;const py=(e.clientY-rect.top)/rect.height;const rx=(py-0.5)*-10;const ry=(px-0.5)*12;card.style.setProperty('--mx',px*100+'%');card.style.setProperty('--my',py*100+'%');gsap.to(card,{rotateX:rx,rotateY:ry,transformPerspective:1400,duration:0.35,ease:'power3.out'});if(glow){gsap.to(glow,{opacity:1,duration:0.25,ease:'power2.out'});}});card.addEventListener('mouseleave',()=>{gsap.to(card,{rotateX:0,rotateY:0,duration:0.45,ease:'power3.out'});if(glow){gsap.to(glow,{opacity:0,duration:0.3,ease:'power2.out'});}});});}document.querySelectorAll('.faq-item').forEach((item)=>{item.addEventListener('toggle',()=>{const icon=item.querySelector('.faq-plus');if(icon){icon.style.transform=item.open?'rotate(45deg)':'rotate(0deg)';icon.style.transition='transform 0.3s ease';}});});document.querySelectorAll('.magnetic-btn').forEach((btn)=>{if(prefersReducedMotion)return;btn.addEventListener('mousemove',(e)=>{const rect=btn.getBoundingClientRect();const x=e.clientX-rect.left-rect.width/2;const y=e.clientY-rect.top-rect.height/2;gsap.to(btn,{x:x*0.12,y:y*0.12,duration:0.3,ease:'power2.out'});});btn.addEventListener('mouseleave',()=>{gsap.to(btn,{x:0,y:0,duration:0.5,ease:'elastic.out(1,0.45)'});});});const heroCanvas=document.getElementById('hero-canvas');if(heroCanvas&&!prefersReducedMotion){const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(60,heroCanvas.clientWidth/heroCanvas.clientHeight,0.1,1000);const renderer=new THREE.WebGLRenderer({canvas:heroCanvas,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));renderer.setSize(heroCanvas.clientWidth,heroCanvas.clientHeight,false);camera.position.z=24;const group=new THREE.Group();scene.add(group);const pointsCount=120;const positions=new Float32Array(pointsCount*3);for(let i=0;i<pointsCount;i++){positions[i*3]=(Math.random()-0.5)*34;positions[i*3+1]=(Math.random()-0.5)*20;positions[i*3+2]=(Math.random()-0.5)*14;}const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));const material=new THREE.PointsMaterial({color:0xc7f36b,size:0.16,transparent:true,opacity:0.75});const points=new THREE.Points(geometry,material);group.add(points);const lineMaterial=new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:0.09});for(let i=0;i<28;i++){const lineGeometry=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3((Math.random()-0.5)*30,(Math.random()-0.5)*18,(Math.random()-0.5)*10),new THREE.Vector3((Math.random()-0.5)*30,(Math.random()-0.5)*18,(Math.random()-0.5)*10)]);const line=new THREE.Line(lineGeometry,lineMaterial);group.add(line);}let mouseX=0;let mouseY=0;window.addEventListener('mousemove',(e)=>{mouseX=(e.clientX/window.innerWidth-0.5)*2;mouseY=(e.clientY/window.innerHeight-0.5)*2;});function resizeCanvas(){const width=heroCanvas.clientWidth;const height=heroCanvas.clientHeight;camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height,false);}window.addEventListener('resize',resizeCanvas);resizeCanvas();function animate(){requestAnimationFrame(animate);group.rotation.y+=0.0016;group.rotation.x+=0.0007;group.rotation.y+=mouseX*0.0015;group.rotation.x+=mouseY*0.001;points.rotation.y-=0.0008;renderer.render(scene,camera);}animate();}
    
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
      
<nav className="z-50 w-full absolute top-0 left-0">
<nav className="relative z-50">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="text-xl tracking-tight uppercase text-white font-normal font-dm-sans" href="#">
      Loom &amp; Logic
    </a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm text-white/70 hover:text-white transition-colors font-dm-sans" href="#process">
        Process
      </a>
<a className="hidden md:block text-sm text-white/70 hover:text-white transition-colors font-dm-sans" href="#pricing">
        Pricing
      </a>
<a className="hidden md:block text-sm text-white/70 hover:text-white transition-colors font-dm-sans" href="#faq">
        FAQ
      </a>
<button className="flex md:hidden items-center gap-2 text-sm text-white hover:text-[#d4ff33] transition-colors focus:outline-none" id="mobile-menu-btn">
<span className="font-dm-sans">Menu</span>
<iconify-icon height="1rem" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden absolute top-24 left-0 w-full bg-[#0f2824]/95 border-b border-white/10 backdrop-blur-md px-6 py-6 flex flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="mobile-nav-link text-base text-white/80 hover:text-white transition-colors py-2 font-dm-sans" href="#process">
      Process
    </a>
<a className="mobile-nav-link text-base text-white/80 hover:text-white transition-colors py-2 font-dm-sans" href="#pricing">
      Pricing
    </a>
<a className="mobile-nav-link text-base text-white/80 hover:text-white transition-colors py-2 font-dm-sans" href="#faq">
      FAQ
    </a>
<a className="mobile-nav-link text-base text-[#d4ff33] font-medium transition-colors py-2 border-t border-white/5 mt-2 font-dm-sans" href="#contact">
      Contact
    </a>
</div>
</nav>
</nav>
<section className="relative overflow-hidden bg-[#0d2621] text-white pt-40 md:pt-48 pb-24 md:pb-32 px-6" style={{backgroundImage: 'radial-gradient(circle at 16% 18%, rgba(108, 232, 188, 0.18) 0%, transparent 26%), radial-gradient(circle at 84% 14%, rgba(199, 243, 107, 0.16) 0%, transparent 24%), linear-gradient(135deg, rgb(18, 53, 47) 0%, rgb(13, 38, 33) 48%, rgb(8, 23, 20) 100%)'}}>
<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-80" height="2039" id="hero-canvas" width="2026"></canvas>
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{background: 'linear-gradient(180deg,rgba(255,255,255,0.03),transparent 30%,transparent 70%,rgba(255,255,255,0.02))'}}></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-24 right-[10%] w-72 h-72 rounded-full blur-3xl bg-[#d4ff33]/10"></div>
<div className="absolute bottom-0 left-[8%] w-80 h-80 rounded-full blur-3xl bg-slate-600/5"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center relative z-10">
<div className="hero-copy">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/70 tracking-tight backdrop-blur-sm mb-8 bg-slate-600/5 font-dm-sans">
<span className="inline-block w-2 h-2 rounded-full bg-lime-300"></span>
            Product engineering for teams that need traction, clarity, and speed
          </div>
<h1 className="text-5xl leading-none tracking-tight font-normal max-w-4xl font-dm-sans md:text-7xl lg:text-7xl">
            Build the product
            <span className="block font-normal italic text-lime-300 font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              people choose faster
            </span>
</h1>
<p className="mt-8 text-lg md:text-2xl text-white/68 leading-relaxed max-w-2xl tracking-tight font-dm-sans">
            We turn strategy, design, and engineering into one execution
            system—so your team ships a better product, with less drag, and
            clearer momentum every week.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10 gap-x-3 gap-y-3">
<a className="magnetic-btn glowing-cta group inline-flex items-center justify-center gap-3 rounded-full text-[#08211d] text-sm font-semibold tracking-tight px-8 py-5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden ring-1 ring-white/15 touch-manipulation" href="#pricing">
<span className="absolute inset-0 bg-gradient-to-r from-[#d7f95d] via-[#b8ff70] to-[#78f0c0] opacity-95 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_48%)] mix-blend-overlay"></span>
<span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_45%)] mix-blend-overlay"></span>
<span className="absolute inset-[1px] rounded-full border border-white/50 shadow-[inset_0_0_18px_rgba(255,255,255,0.45)] transition-all duration-300 group-hover:border-white/75 group-hover:shadow-[inset_0_0_24px_rgba(255,255,255,0.62)]" onclick="window.location.href='https://calendly.com'" role="button"></span>
<span className="relative z-10 flex items-center gap-3">
<span className="font-dm-sans">Book a discovery call</span>
<iconify-icon className="" height="1rem" icon="solar:calendar-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 text-white text-sm font-normal tracking-tight px-8 py-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 active:scale-[0.98] bg-slate-600/5" href="#work">
<span className="font-dm-sans">See how we work</span>
</a>
</div>
<div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
<div className="rounded-2xl border border-white/8 px-5 py-4 backdrop-blur-sm bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-2 font-dm-sans">
                Typical fit
              </div>
<div className="text-sm text-white/75 leading-relaxed font-dm-sans">
                Seed to growth-stage teams with live pressure to ship
              </div>
</div>
<div className="rounded-2xl border border-white/8 px-5 py-4 backdrop-blur-sm bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-2 font-dm-sans">
                Engagement
              </div>
<div className="text-sm text-white/75 leading-relaxed font-dm-sans">
                Embedded product partner, not a handoff vendor
              </div>
</div>
<div className="rounded-2xl border border-white/8 px-5 py-4 backdrop-blur-sm bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-2 font-dm-sans">
                Outcome
              </div>
<div className="text-sm text-white/75 leading-relaxed font-dm-sans">
                Sharper UX, cleaner systems, faster iteration loops
              </div>
</div>
</div>
</div>
<div className="relative hero-art perspective-card">
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm tilt-card will-change-transform transition-transform duration-300 ease-out [transform-style:preserve-3d] bg-slate-600/5" style={{'--mx': '25.841151806693084%', '--my': '24.687226020164736%'}}>
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<video autoplay="" className="hero-mask-video absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" loop="" muted="" playsinline="" preload="auto">
<source src="https://cdn.coverr.co/videos/coverr-programming-at-night-1560676832149?download=1080p" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(199,243,107,0.18),transparent_28%),linear-gradient(180deg,rgba(8,23,20,0.08),rgba(8,23,20,0.48)_42%,rgba(8,23,20,0.9)_100%)]"></div>
<div className="hero-mask-text absolute inset-0 flex items-start justify-start p-6 md:p-8 lg:p-10">
<div className="text-[18vw] md:text-[9rem] lg:text-[10rem] leading-none tracking-tight font-medium uppercase text-white/10 select-none font-dm-sans">
                  Build
                </div>
</div>
<div className="hero-glow absolute -inset-[12%] opacity-0 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(199,243,107,0.22),transparent_20%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_36%)]"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
<img alt="Product team collaborating on strategy and interface design" className="w-full h-[34rem] md:h-[42rem] object-cover scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dce8baa7-7520-4233-8d79-82ffcf134d47_1600w.webp"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg,rgba(15,40,36,0.05),rgba(15,40,36,0.15) 40%,rgba(15,40,36,0.78) 100%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
<div className="grid sm:grid-cols-2 gap-4">
<div className="floating-panel rounded-2xl border border-white/10 bg-[#102b26]/80 p-5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
<div className="flex items-center justify-between mb-4">
<div className="text-xs uppercase tracking-[0.18em] text-white/40 font-dm-sans">
                      Current sprint
                    </div>
<div className="inline-flex items-center gap-2 text-xs text-lime-300 font-dm-sans">
<span className="inline-block w-2 h-2 rounded-full animate-pulse bg-lime-300"></span>
                      Active
                    </div>
</div>
<div className="space-y-3">
<div className="h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full w-[78%] sprint-bar bg-lime-300" style={{width: '78%'}}></div>
</div>
<div className="flex items-center justify-between text-xs text-white/60">
<span className="font-dm-sans">Checkout redesign</span>
<span className="font-dm-sans">78%</span>
</div>
</div>
</div>
<div className="floating-panel rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
<div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-3 font-dm-sans">
                    Why teams switch
                  </div>
<p className="text-sm text-white/75 leading-relaxed font-dm-sans">
                    They need one team that can think in product, move in
                    design, and deliver in code.
                  </p>
</div>
</div>
</div>
</div>
<div className="absolute -left-6 top-12 hidden md:block rounded-2xl border border-white/10 p-4 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.22)] float-y bg-slate-600/5">
<div className="flex -space-x-3">
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9151d42-d755-4ed2-8f34-097ecfd4320e_320w.webp"/>
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6a5cab-715c-44c6-9cd8-aff440c886f6_320w.webp"/>
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div className="mt-3 text-xs text-white/60 font-dm-sans">
              Founders, PMs, and design leads trust the process
            </div>
</div>
</div>
</div>
</section>
<section className="bg-[#f8fcf7] border-b border-black/5 py-10 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-6">
<p className="text-xs uppercase tracking-[0.2em] text-black/35 font-dm-sans">
            Selected partners and product environments
          </p>
</div>
<div className="relative overflow-hidden">
<div className="flex gap-14 md:gap-20 whitespace-nowrap marquee-track text-black/35 text-xl md:text-2xl tracking-tight">
<span className="font-dm-sans">Series A SaaS</span>
<span className="font-dm-sans">Growth marketplaces</span>
<span className="font-dm-sans">Operational tools</span>
<span className="font-dm-sans">AI-enabled products</span>
<span className="font-dm-sans">Fintech workflows</span>
<span className="font-dm-sans">Member platforms</span>
<span className="font-dm-sans">Series A SaaS</span>
<span className="font-dm-sans">Growth marketplaces</span>
<span className="font-dm-sans">Operational tools</span>
<span className="font-dm-sans">AI-enabled products</span>
<span className="font-dm-sans">Fintech workflows</span>
<span className="font-dm-sans">Member platforms</span>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-[#f3f8f2] overflow-hidden" id="work">
<div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
<div className="reveal-up">
<div className="text-xs uppercase tracking-[0.2em] text-black/35 mb-6 font-dm-sans">
            A new way of working
          </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal max-w-xl font-dm-sans text-stone-700">
            One product partner.
            <span className="block italic text-[#0f2824]/55 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              No fragmented handoffs.
            </span>
</h2>
<p className="mt-7 text-lg md:text-xl text-black/60 leading-relaxed max-w-xl tracking-tight font-dm-sans">
            Most teams lose speed in the gaps between strategy, design, and
            engineering. We close those gaps with a compact product system built
            for weekly decisions, clear priorities, and visible progress.
          </p>
<div className="mt-10 space-y-5">
<div className="group rounded-3xl border border-black/6 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#e8eadf] flex items-center justify-center text-[#0f2824] shrink-0">
<iconify-icon height="1.25rem" icon="solar:target-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1.25rem"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                    Sharper product decisions
                  </h3>
<p className="mt-2 text-sm text-black/55 leading-relaxed font-dm-sans">
                    We help define what matters now, what can wait, and what
                    compounds value over the next release cycles.
                  </p>
</div>
</div>
</div>
<div className="group rounded-3xl border border-black/6 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#dcf0eb] flex items-center justify-center text-[#0f2824] shrink-0">
<iconify-icon height="1.25rem" icon="solar:palette-2-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1.25rem"></iconify-icon>
<iconify-icon className="" height="20" icon="solar:ruler-cross-pen-outline" strokeWidth="1.5" style={{color: 'rgb(15, 40, 36)'}} width="20"></iconify-icon></div>
<div className="">
<h3 className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                    Design that reduces friction
                  </h3>
<p className="mt-2 text-sm text-black/55 leading-relaxed font-dm-sans">
                    Interfaces are designed around flow, confidence, and
                    speed—not decoration or trend-driven complexity.
                  </p>
</div>
</div>
</div>
<div className="group rounded-3xl border border-black/6 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-[#eef0f2] flex items-center justify-center text-[#0f2824] shrink-0">
<iconify-icon className="" height="20" icon="solar:code-square-linear" strokeWidth="1.5" style={{color: 'rgb(15, 40, 36)'}} width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                    Engineering built to scale cleanly
                  </h3>
<p className="mt-2 text-sm text-black/55 leading-relaxed font-dm-sans">
                    The product ships fast now, without setting traps that slow
                    your team later.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="reveal-up relative">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 rounded-[2rem] overflow-hidden border border-black/6 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
<div className="relative rounded-[1.4rem] overflow-hidden">
<img alt="Team workshop and product planning session" className="w-full h-72 md:h-80 object-cover transition-transform duration-700 hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e5c96b55-1ccb-433a-8410-b5376d2d2135/1600w.png"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,40,36,0.52))'}}></div>
<div className="absolute left-5 bottom-5 right-5">
<div className="rounded-2xl border border-white/10 bg-[#102b26]/75 p-5 backdrop-blur-md">
<div className="text-xs uppercase tracking-[0.18em] text-white/40 mb-2 font-dm-sans">
                      Operating model
                    </div>
<div className="text-sm text-white/75 leading-relaxed font-dm-sans">
                      A single loop for prioritization, interface refinement,
                      technical execution, and weekly release clarity.
                    </div>
</div>
</div>
</div>
</div>
<div className="rounded-[1.75rem] overflow-hidden border border-black/6 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
<img alt="Code and systems architecture on a developer workstation" className="w-full h-80 object-cover transition-transform duration-700 hover:scale-[1.04]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a95c951d-c036-49ac-907c-adacf54e997f_800w.jpg"/>
</div>
<div className="rounded-[1.75rem] overflow-hidden border border-black/6 bg-[#0f2824] text-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] flex flex-col justify-between">
<div>
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4 font-dm-sans">
                  What clients feel
                </div>
<p className="text-xl leading-relaxed tracking-tight font-dm-sans">
                  “We stopped managing vendors and started building momentum.”
                </p>
</div>
<div className="pt-8 border-t border-white/10">
<div className="text-sm text-white/70 font-dm-sans">
                  That shift matters because execution gets easier when one team
                  owns the full path.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-[#102d27] text-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl reveal-up">
<div className="text-xs uppercase tracking-[0.2em] text-[#d4ff33]/70 mb-6 font-dm-sans">
            Engineered to work
          </div>
<h2 className="text-4xl md:text-6xl leading-none tracking-tight font-normal font-dm-sans">
            Built around the moments
            <span className="block italic text-white/45 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              that decide growth
            </span>
</h2>
<p className="mt-7 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl tracking-tight font-dm-sans">
            Conversion drops, messy flows, slow onboarding, brittle code,
            unclear ownership—these are product problems, not isolated tasks. We
            design and build around the points where teams usually lose trust
            and time.
          </p>
</div>
<div className="mt-16 grid lg:grid-cols-12 gap-5">
<div className="lg:col-span-5 reveal-card rounded-[2rem] border border-white/8 p-6 md:p-8 backdrop-blur-sm overflow-hidden group relative bg-slate-600/5">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(135deg,rgba(212,255,51,0.08),transparent 55%)'}}></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 rounded-2xl border border-white/8 flex items-center justify-center text-lime-300 bg-slate-600/5">
<iconify-icon height="1.5rem" icon="solar:chart-square-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1.5rem"></iconify-icon>
</div>
<div className="text-xs uppercase tracking-[0.18em] text-white/35 font-dm-sans">
                  Friction mapping
                </div>
</div>
<h3 className="text-2xl tracking-tight font-normal font-dm-sans">
                Find the points where users hesitate
              </h3>
<p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md font-dm-sans">
                We identify where trust drops, decisions stall, or effort
                spikes—then redesign those moments to feel obvious, calm, and
                easy to continue.
              </p>
<div className="mt-10 space-y-4">
<div className="rounded-2xl border border-white/8 bg-black/10 p-4">
<div className="flex items-center justify-between text-sm text-white/70">
<span className="font-dm-sans">Activation flow</span>
<span className="text-lime-300 font-dm-sans">Improving</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full w-[68%] panel-line bg-lime-300"></div>
</div>
</div>
<div className="rounded-2xl border border-white/8 bg-black/10 p-4">
<div className="flex items-center justify-between text-sm text-white/70">
<span className="font-dm-sans">Checkout confidence</span>
<span className="text-lime-300 font-dm-sans">Stabilizing</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full bg-white rounded-full w-[81%] panel-line-alt"></div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 reveal-card rounded-[2rem] overflow-hidden border border-white/8 bg-[#17332d] relative min-h-[28rem] group">
<img alt="Product team reviewing interface flows and planning releases" className="absolute inset-0 w-full h-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.04]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07c949f-48b5-4c70-b3b1-89f31bf7231d_1600w.webp"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(120deg,rgba(15,40,36,0.92),rgba(15,40,36,0.66))'}}></div>
<div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-3xl border border-white/8 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4 font-dm-sans">
                    Design systems
                  </div>
<h3 className="text-xl tracking-tight font-normal font-dm-sans">
                    Consistency becomes leverage
                  </h3>
<p className="mt-3 text-sm text-white/60 leading-relaxed font-dm-sans">
                    A reusable design and component system reduces decision
                    fatigue, speeds implementation, and keeps the product
                    coherent as it grows.
                  </p>
</div>
<div className="rounded-3xl border border-white/8 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-4 font-dm-sans">
                    Full-stack delivery
                  </div>
<h3 className="text-xl tracking-tight font-normal font-dm-sans">
                    Execution stays close to intent
                  </h3>
<p className="mt-3 text-sm text-white/60 leading-relaxed font-dm-sans">
                    Because strategy, design, and build live together, fewer
                    decisions get diluted between documents, meetings, and
                    handoffs.
                  </p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
<div className="">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-2 font-dm-sans">
                      What this changes
                    </div>
<p className="text-lg text-white/72 max-w-2xl tracking-tight font-dm-sans">
                      The product feels more coherent to users and easier to
                      manage internally—two outcomes that usually compound
                      together.
                    </p>
</div>
<a className="inline-flex items-center gap-3 text-sm tracking-tight hover:gap-4 transition-all text-lime-300" href="#process">
<span className="font-dm-sans">See the workflow</span>
<iconify-icon height="1rem" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-[#102d27] text-white border-t border-white/6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
<div className="reveal-up">
<div className="text-xs uppercase tracking-[0.2em] text-white/35 mb-6 font-dm-sans">
              Success in numbers
            </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal font-dm-sans">
              Proof should
              <span className="block italic text-white/45 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
                feel alive on the page
              </span>
</h2>
<p className="mt-7 text-lg text-white/62 leading-relaxed max-w-md tracking-tight font-dm-sans">
              Instead of static stats, this section now carries motion,
              progress, and contrast—making performance feel active, not
              decorative.
            </p>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div className="metric-card rounded-[2rem] border border-white/8 p-7 backdrop-blur-sm relative overflow-hidden bg-slate-600/5">
<div className="absolute inset-0 opacity-60 pointer-events-none" style={{background: 'radial-gradient(circle at top right, rgba(212,255,51,0.12), transparent 45%)'}}></div>
<div className="relative z-10">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-5 font-dm-sans">
                  Average sprint visibility
                </div>
<div className="counter text-6xl md:text-7xl tracking-tight leading-none font-light font-dm-sans text-lime-300" data-target="92">92</div>
<div className="text-sm text-white/60 mt-4 font-dm-sans">
                  Teams say priorities, blockers, and next moves feel clearer
                  within the first two weeks.
                </div>
<div className="mt-6 h-1.5 rounded-full bg-white/10 overflow-hidden">
<div className="metric-fill h-full rounded-full w-0 bg-lime-300" style={{width: '92%'}}></div>
</div>
</div>
</div>
<div className="metric-card rounded-[2rem] border border-white/8 p-7 backdrop-blur-sm relative overflow-hidden bg-slate-600/5">
<div className="relative z-10">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-5 font-dm-sans">
                  Decision speed
                </div>
<div className="counter text-6xl md:text-7xl tracking-tight leading-none font-light text-white font-dm-sans" data-target="41">41</div>
<div className="text-sm text-white/60 mt-4 font-dm-sans">
                  Percent reduction in back-and-forth caused by unclear specs,
                  fragmented review loops, and handoff confusion.
                </div>
<div className="mt-6 h-1.5 rounded-full bg-white/10 overflow-hidden">
<div className="metric-fill h-full bg-white rounded-full w-0" style={{width: '41%'}}></div>
</div>
</div>
</div>
<div className="metric-card rounded-[2rem] border border-white/8 p-7 backdrop-blur-sm relative overflow-hidden sm:col-span-2 bg-slate-600/5">
<div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
<div className="">
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-5 font-dm-sans">
                    Release rhythm
                  </div>
<div className="counter text-6xl md:text-7xl tracking-tight leading-none font-light font-dm-sans text-lime-300" data-target="3">3</div>
<div className="text-sm text-white/60 mt-4 font-dm-sans">
                    Shippable improvements often land within the first 3 weekly
                    cycles when scope and ownership are tight.
                  </div>
</div>
<div className="rounded-[1.5rem] border border-white/8 bg-black/10 p-5">
<div className="flex items-end gap-3 h-40">
<div className="bar-chart w-full rounded-t-2xl bg-white/15 h-[28%]" style={{transformOrigin: '50% 100%'}}></div>
<div className="bar-chart w-full rounded-t-2xl bg-white/20 h-[44%]" style={{transformOrigin: '50% 100%'}}></div>
<div className="bar-chart w-full rounded-t-2xl bg-white/25 h-[61%]" style={{transformOrigin: '50% 100%'}}></div>
<div className="bar-chart w-full rounded-t-2xl h-[82%] bg-lime-300" style={{transformOrigin: '50% 100%'}}></div>
</div>
<div className="mt-4 flex justify-between text-xs text-white/35 uppercase tracking-[0.16em]">
<span className="font-dm-sans">Week 1</span>
<span className="font-dm-sans">Week 2</span>
<span className="font-dm-sans">Week 3</span>
<span className="font-dm-sans">Week 4</span>
</div>
</div>
</div>
</div>
<div className="metric-card rounded-[2rem] border border-white/8 text-[#0f2824] p-7 sm:col-span-2 bg-lime-300">
<div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
<div className="">
<div className="text-xs uppercase tracking-[0.18em] text-[#0f2824]/55 mb-4 font-dm-sans">
                    Strategic benefit
                  </div>
<p className="text-2xl md:text-3xl tracking-tight leading-tight font-normal font-dm-sans">
                    Less time coordinating execution. More time improving the
                    product.
                  </p>
</div>
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0f2824] text-white text-sm font-semibold tracking-tight px-7 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="#contact">
<span className="font-dm-sans">Talk through your roadmap</span>
<iconify-icon height="1rem" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-[#f7f6f2] overflow-hidden" id="process">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl reveal-up">
<div className="text-xs uppercase tracking-[0.2em] text-black/35 mb-6 font-dm-sans">
            Easy &amp; purposeful
          </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal font-dm-sans text-stone-700">
            A workflow your team can
            <span className="block italic text-black/40 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              actually operate inside
            </span>
</h2>
<p className="mt-7 text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl tracking-tight font-dm-sans">
            Clear inputs. Visible progress. Fewer loops. Each phase is designed
            to reduce uncertainty and move the product forward with practical
            momentum.
          </p>
</div>
<div className="mt-16 space-y-6">
<div className="workflow-step rounded-[2rem] border border-black/6 bg-white p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
<div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
<div className="">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/35 mb-5 font-dm-sans">
<span className="w-10 h-10 rounded-full bg-[#e8eadf] flex items-center justify-center text-[#0f2824]">
                    01
                  </span>
                  Alignment
                </div>
<h3 className="text-3xl tracking-tight font-normal font-dm-sans text-stone-700">
                  We define the product pressure clearly
                </h3>
<p className="mt-4 text-base text-black/60 leading-relaxed max-w-xl font-dm-sans">
                  What is blocking growth right now? Where is trust leaking?
                  What should ship first? The first phase builds a shared model
                  around user friction, business goals, and technical reality.
                </p>
</div>
<div className="rounded-[1.5rem] overflow-hidden border border-black/6">
<img alt="Collaborative strategy workshop with a product team" className="w-full h-72 object-cover transition-transform duration-700 hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bec02ad-7636-45cf-998f-29c70770cf44_1600w.webp"/>
</div>
</div>
</div>
<div className="workflow-step rounded-[2rem] border border-black/6 bg-[#0f2824] text-white p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
<div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
<div className="order-2 lg:order-1 rounded-[1.5rem] overflow-hidden border border-white/8">
<img alt="Interface review session with product design screens" className="w-full h-72 object-cover transition-transform duration-700 hover:scale-[1.03]" src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&amp;q=80"/>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 mb-5 font-dm-sans">
<span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lime-300">
                    02
                  </span>
                  Interface direction
                </div>
<h3 className="text-3xl tracking-tight font-normal font-dm-sans">
                  We turn strategy into flows people understand fast
                </h3>
<p className="mt-4 text-base text-white/62 leading-relaxed max-w-xl font-dm-sans">
                  Key journeys are simplified, pressure points are redesigned,
                  and the interface starts to communicate confidence before the
                  user needs to think too hard.
                </p>
</div>
</div>
</div>
<div className="workflow-step rounded-[2rem] border border-black/6 bg-white p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
<div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
<div className="">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/35 mb-5 font-dm-sans">
<span className="w-10 h-10 rounded-full bg-[#dcf0eb] flex items-center justify-center text-[#0f2824]">
                    03
                  </span>
                  Delivery
                </div>
<h3 className="text-3xl tracking-tight font-normal font-dm-sans text-stone-700">
                  We build in a way your team can keep using
                </h3>
<p className="mt-4 text-base text-black/60 leading-relaxed max-w-xl font-dm-sans">
                  The codebase, component structure, and release rhythm are set
                  up for continuity—so your product improves without becoming
                  harder to maintain.
                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-[1.5rem] overflow-hidden border border-black/6">
<img alt="Engineer working on a software system" className="w-full h-72 object-cover transition-transform duration-700 hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c37fd2f-a574-4faf-9351-90b6225756ff_800w.webp"/>
</div>
<div className="rounded-[1.5rem] border border-black/6 bg-[#f0f1eb] p-6 flex flex-col justify-between">
<div>
<div className="text-xs uppercase tracking-[0.18em] text-black/35 mb-4 font-dm-sans">
                      Delivery rhythm
                    </div>
<p className="text-xl tracking-tight leading-relaxed font-dm-sans text-stone-700">
                      Weekly priorities, visible changes, no guessing what
                      happened.
                    </p>
</div>
<div className="mt-8 space-y-3">
<div className="h-2 rounded-full bg-black/8 overflow-hidden">
<div className="h-full rounded-full bg-[#0f2824] w-[84%]"></div>
</div>
<div className="h-2 rounded-full bg-black/8 overflow-hidden">
<div className="h-full rounded-full bg-[#0f2824]/70 w-[65%]"></div>
</div>
<div className="h-2 rounded-full bg-black/8 overflow-hidden">
<div className="h-full rounded-full w-[92%] bg-lime-300"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="workflow-step rounded-[2rem] border border-black/6 bg-[#e8eadf] p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
<div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
<div className="">
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/35 mb-5 font-dm-sans">
<span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0f2824]">
                    04
                  </span>
                  Compound gains
                </div>
<h3 className="text-3xl tracking-tight font-normal font-dm-sans text-stone-700">
                  Every sprint should leave the system stronger
                </h3>
<p className="mt-4 text-base text-black/60 leading-relaxed max-w-2xl font-dm-sans">
                  Beyond individual tasks, the real goal is a cleaner product
                  foundation: better clarity, better reuse, better speed, better
                  decision quality.
                </p>
</div>
<div className="inline-flex items-center gap-3 text-sm text-[#0f2824] rounded-full border border-black/8 bg-white px-6 py-4 shadow-sm">
<iconify-icon height="1rem" icon="solar:graph-new-up-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Compounding product quality over time</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-white border-t border-black/5 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl reveal-up mb-14">
<div className="text-xs uppercase tracking-[0.2em] text-black/35 mb-6 font-dm-sans">
            Client perspective
          </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal font-dm-sans text-stone-700">
            The common thread is
            <span className="block italic text-black/40 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              clarity after complexity
            </span>
</h2>
</div>
<div className="grid lg:grid-cols-3 gap-5">
<div className="testimonial-card rounded-[2rem] border border-black/6 bg-[#f7f6f2] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
<p className="text-xl tracking-tight leading-relaxed font-dm-sans text-stone-700">
              “What changed first was not velocity. It was confidence. We
              finally knew what we were building and why.”
            </p>
<div className="mt-8 flex items-center gap-4">
<img alt="Portrait of Elena Voss" className="w-14 h-14 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b5f0bcf-319f-4750-b016-09c89f89f8ca_320w.webp"/>
<div>
<div className="text-sm font-normal text-stone-700 font-dm-sans">Elena Voss</div>
<div className="text-xs text-black/45 font-dm-sans">
                  Founder, member platform
                </div>
</div>
</div>
</div>
<div className="testimonial-card rounded-[2rem] border border-black/6 bg-[#0f2824] text-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
<p className="text-xl tracking-tight leading-relaxed font-dm-sans">
              “Their team reduced the noise. Product decisions got faster
              because strategy, UI, and build were finally aligned.”
            </p>
<div className="mt-8 flex items-center gap-4">
<img alt="Portrait of Malik Rowan" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&amp;q=80"/>
<div className="">
<div className="text-sm font-normal text-white font-dm-sans">Malik Rowan</div>
<div className="text-xs text-white/45 font-dm-sans">
                  Head of Product, B2B workflow tool
                </div>
</div>
</div>
</div>
<div className="testimonial-card rounded-[2rem] border border-black/6 bg-[#eef0f2] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
<p className="text-xl tracking-tight leading-relaxed font-dm-sans text-stone-700">
              “The product became easier to sell because it became easier to
              understand. The interface started doing more of the work.”
            </p>
<div className="mt-8 flex items-center gap-4">
<img alt="Portrait of Priya Sen" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1648415041078-d5b259c683be?w=320&amp;q=80"/>
<div>
<div className="text-sm font-normal text-stone-700 font-dm-sans">Priya Sen</div>
<div className="text-xs text-black/45 font-dm-sans">
                  Growth lead, fintech product
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-[#f4faf3] border-t border-black/5 overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto" style={{position: 'relative'}}>
<div className="absolute inset-x-0 top-12 h-64 pointer-events-none -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,240,192,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(199,243,107,0.18),transparent_26%)] blur-3xl"></div>
<div className="max-w-3xl reveal-up mb-14">
<div className="pricing-card pricing-glass group rounded-[2rem] border border-white/60 bg-white/68 p-8 shadow-[0_20px_70px_rgba(16,45,39,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(16,45,39,0.12)] backdrop-blur-xl relative overflow-hidden [transform-style:preserve-3d] font-dm-sans">
<div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-[#d7f95d]/10 pointer-events-none"></div>
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#78f0c0]/18 blur-3xl pointer-events-none"></div>
<div className="pricing-shine absolute inset-0 opacity-0 pointer-events-none bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.55)_46%,transparent_70%)]"></div>
            Practical pricing
          </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal font-dm-sans text-stone-700">
            Choose the level of help
            <span className="block italic text-black/40 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              your roadmap actually needs
            </span>
</h2>
<p className="mt-7 text-lg text-black/60 leading-relaxed max-w-2xl tracking-tight font-dm-sans">
            Pricing is structured around real operating needs—not vague
            retainers. Start with a focused sprint or embed us deeper if the
            product needs ongoing momentum.
          </p>
</div>
<div className="grid xl:grid-cols-3 gap-5 items-stretch">
<div className="pricing-card group rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
<div className="text-xs uppercase tracking-[0.18em] text-black/35 mb-5 font-dm-sans">
              Sprint audit
            </div>
<div className="flex items-end gap-2 mb-6">
<span className="text-5xl tracking-tight font-light font-dm-sans text-stone-700">
                $4,800
              </span>
<span className="text-sm text-black/40 mb-2 font-dm-sans">one-time</span>
</div>
<p className="text-sm text-black/60 leading-relaxed mb-8 font-dm-sans">
              For teams that need clarity before committing to a deeper build
              cycle.
            </p>
<ul className="space-y-4 text-sm text-black/68">
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Roadmap review and friction audit</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">UX direction and interface recommendations</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Technical and delivery plan</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f7f6f2] text-sm font-normal tracking-tight px-6 py-4 transition-all duration-300 hover:bg-[#eef0e8] active:scale-[0.98] text-stone-700 font-dm-sans" href="#contact">
              Book an audit
            </a>
</div>
<div className="pricing-card group rounded-[2rem] border border-[#d4ff33]/50 bg-[#0f2824] text-white p-8 shadow-[0_22px_80px_rgba(15,40,36,0.18)] relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#d4ff33]/12 blur-3xl"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-[#d4ff33]/30 bg-[#d4ff33]/10 px-3 py-1.5 text-xs tracking-tight mb-5 text-lime-300 font-dm-sans">
                Recommended
              </div>
<div className="text-xs uppercase tracking-[0.18em] text-white/35 mb-5 font-dm-sans">
                Embedded sprint partner
              </div>
<div className="flex items-end gap-2 mb-6">
<span className="text-5xl tracking-tight font-light text-white font-dm-sans">
                  $8,900
                </span>
<span className="text-sm text-white/40 mb-2 font-dm-sans">per sprint</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8 font-dm-sans">
                For teams actively shipping and needing strategy, design, and
                build in one operating rhythm.
              </p>
<ul className="space-y-4 text-sm text-white/72">
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#d4ff33'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Weekly sprint planning and execution</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#d4ff33'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Product design, systems, and engineering delivery</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#d4ff33'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Release support and ongoing iteration</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#d4ff33'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Direct communication with decision-makers</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full text-[#0f2824] text-sm font-semibold tracking-tight px-6 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-lime-300" href="#contact">
<span className="font-dm-sans">Start with this option</span>
<iconify-icon height="1rem" icon="solar:arrow-right-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
<div className="pricing-card group rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
<div className="text-xs uppercase tracking-[0.18em] text-black/35 mb-5 font-dm-sans">
              Product buildout
            </div>
<div className="flex items-end gap-2 mb-6">
<span className="text-5xl tracking-tight font-light font-dm-sans text-stone-700">
                Custom
              </span>
</div>
<p className="text-sm text-black/60 leading-relaxed mb-8 font-dm-sans">
              For larger roadmap phases, new product surfaces, migrations, or
              complex multi-team initiatives.
            </p>
<ul className="space-y-4 text-sm text-black/68">
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Scoped around roadmap complexity</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Dedicated planning and technical alignment</span>
</li>
<li className="flex gap-3">
<iconify-icon className="shrink-0 mt-0.5" height="1rem" icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#0f2824'}} width="1rem"></iconify-icon>
<span className="font-dm-sans">Flexible structure for expansion or recovery work</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f7f6f2] text-sm font-normal tracking-tight px-6 py-4 transition-all duration-300 hover:bg-[#eef0e8] active:scale-[0.98] text-stone-700 font-dm-sans" href="#contact">
              Request a scope
            </a>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-white border-t border-black/5 overflow-hidden" id="faq">
<div className="max-w-5xl mx-auto">
<div className="max-w-3xl reveal-up mb-12">
<div className="text-xs uppercase tracking-[0.2em] text-black/35 mb-6 font-dm-sans">
            FAQ
          </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-none font-normal font-dm-sans text-stone-700">
            Questions teams ask
            <span className="block italic text-black/40 font-light font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
              before they commit
            </span>
</h2>
</div>
<div className="space-y-4">
<details className="faq-item group rounded-[1.75rem] border border-black/6 bg-[#f7f6f2] p-6 transition-all duration-300 open:bg-white open:shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
<summary className="list-none cursor-pointer flex items-center justify-between gap-6">
<span className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                Do you replace an internal team or work alongside one?
              </span>
<span className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center shrink-0 text-stone-700">
<iconify-icon className="faq-plus" height="1rem" icon="solar:add-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-black/60 leading-relaxed max-w-3xl font-dm-sans">
              Usually alongside one. We often support founders, product leads,
              or lean engineering teams that need more clarity and execution
              power without building a full in-house function immediately.
            </p>
</details>
<details className="faq-item group rounded-[1.75rem] border border-black/6 bg-[#f7f6f2] p-6 transition-all duration-300 open:bg-white open:shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
<summary className="list-none cursor-pointer flex items-center justify-between gap-6">
<span className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                How quickly can we start?
              </span>
<span className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center shrink-0 text-stone-700">
<iconify-icon className="faq-plus" height="1rem" icon="solar:add-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-black/60 leading-relaxed max-w-3xl font-dm-sans">
              For most teams, onboarding can start within one to two weeks
              depending on scope. The first phase is designed to create clarity
              quickly, not drag through a long setup period.
            </p>
</details>
<details className="faq-item group rounded-[1.75rem] border border-black/6 bg-[#f7f6f2] p-6 transition-all duration-300 open:bg-white open:shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
<summary className="list-none cursor-pointer flex items-center justify-between gap-6">
<span className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                What kinds of products are the best fit?
              </span>
<span className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center shrink-0 text-stone-700">
<iconify-icon className="faq-plus" height="1rem" icon="solar:add-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-black/60 leading-relaxed max-w-3xl font-dm-sans">
              Products with real usage, real growth pressure, and a need for
              better execution are the best match. That includes SaaS products,
              internal tools, member platforms, and workflow-heavy interfaces.
            </p>
</details>
<details className="faq-item group rounded-[1.75rem] border border-black/6 bg-[#f7f6f2] p-6 transition-all duration-300 open:bg-white open:shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
<summary className="list-none cursor-pointer flex items-center justify-between gap-6">
<span className="text-xl tracking-tight font-normal font-dm-sans text-stone-700">
                What happens after the first sprint?
              </span>
<span className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center shrink-0 text-stone-700">
<iconify-icon className="faq-plus" height="1rem" icon="solar:add-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-black/60 leading-relaxed max-w-3xl font-dm-sans">
              You can continue in an embedded sprint model, pause with a clearer
              roadmap, or expand into a larger product build. The structure is
              flexible because different teams need different levels of support
              over time.
            </p>
</details>
</div>
</div>
</section>
<section className="relative overflow-hidden py-28 md:py-40 px-6 bg-[#081d1a] text-white border-t border-[#c7f36b]/15" id="contact">
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 18% 22%, rgba(120,240,192,0.16), transparent 24%),radial-gradient(circle at 78% 18%, rgba(199,243,107,0.12), transparent 22%),radial-gradient(circle at 50% 30%, rgba(199,243,107,0.1), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 25%, transparent 75%, rgba(255,255,255,0.02))'}}></div>
<div className="max-w-5xl mx-auto text-center relative z-10 reveal-up rounded-[2.5rem] border border-white/10 backdrop-blur-xl px-8 py-12 md:px-14 md:py-16 shadow-[0_30px_120px_rgba(0,0,0,0.22)] bg-slate-600/5">
<div className="text-xs uppercase tracking-[0.2em] text-white/35 mb-6 font-dm-sans">
          Final step
        </div>
<h2 className="text-5xl tracking-tight leading-none font-normal font-dm-sans md:text-7xl lg:text-7xl">
          If the product matters,
          <span className="block italic font-normal text-lime-300 font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>
            the execution model does too
          </span>
</h2>
<p className="mt-8 text-lg md:text-2xl text-white/62 leading-relaxed max-w-2xl mx-auto tracking-tight font-dm-sans">
          Bring the roadmap, the friction points, or the messy middle. We’ll
          help you see what to fix first and how to move without adding more
          operational drag.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="magnetic-btn glowing-cta group inline-flex items-center justify-center gap-3 rounded-full text-[#08211d] text-sm font-semibold tracking-tight px-8 py-5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden ring-1 ring-white/15 touch-manipulation" href="#">
<span className="absolute inset-0 bg-gradient-to-r from-[#d7f95d] via-[#b8ff70] to-[#78f0c0] opacity-95 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.28),transparent_48%)] mix-blend-overlay"></span>
<span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_45%)] mix-blend-overlay"></span>
<span className="absolute inset-[1px] rounded-full border border-white/50 shadow-[inset_0_0_18px_rgba(255,255,255,0.45)] transition-all duration-300 group-hover:border-white/75 group-hover:shadow-[inset_0_0_24px_rgba(255,255,255,0.62)]" onclick="window.location.href='https://calendly.com'" role="button"></span>
<span className="relative z-10 flex items-center gap-3">
<span className="font-dm-sans">Book a discovery call</span>
<iconify-icon className="" height="1rem" icon="solar:calendar-linear" strokeWidth="1.5" style={{color: 'currentColor'}} width="1rem"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 text-white text-sm font-normal tracking-tight px-8 py-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 active:scale-[0.98] bg-slate-600/5" href="#pricing">
<span className="font-dm-sans">Review pricing first</span>
</a>
</div>
</div>
</section>
<footer className="bg-[#f8fcf7] px-6 pt-20 pb-12 border-t border-black/5">
<div className="max-w-7xl mx-auto rounded-[2.25rem] border border-black/6 bg-white px-8 py-10 md:px-10 md:py-12 shadow-[0_20px_80px_rgba(15,40,36,0.06)]">
<div className="grid md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<div className="text-2xl uppercase tracking-tight font-medium text-[#102d27] mb-5 font-dm-sans">
              Loom &amp; Logic
            </div>
<p className="text-sm text-black/50 max-w-sm leading-relaxed font-dm-sans">
              A product engineering partner for teams that need better
              decisions, cleaner design systems, and faster execution without
              the usual handoff friction.
            </p>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-[#102d27]/55 mb-5 font-medium font-dm-sans">
              Explore
            </div>
<ul className="space-y-3 text-sm text-black/50">
<li className="">
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#work">
                  How we work
                </a>
</li>
<li>
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#process">
                  Workflow
                </a>
</li>
<li>
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#pricing">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#testimonials">
                  Testimonials
                </a>
</li>
</ul>
</div>
<div className="">
<div className="text-xs uppercase tracking-[0.2em] text-[#102d27]/55 mb-5 font-medium font-dm-sans">
              Contact
            </div>
<ul className="space-y-3 text-sm text-black/50">
<li>
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#contact">
                  Discovery call
                </a>
</li>
<li className="">
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#faq">
                  FAQ
                </a>
</li>
<li>
<a className="hover:text-[#0f2824] transition-colors font-dm-sans" href="#">
                  Privacy
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-6 border-t border-black/6 flex flex-col md:flex-row gap-3 justify-between text-xs text-[#102d27]/55">
<p className="font-dm-sans">© 2024 Loom &amp; Logic. All rights reserved.</p>
<p className="font-dm-sans">Design-led product execution for high-stakes teams.</p>
</div>
</div>
</footer>



    </>
  );
}
