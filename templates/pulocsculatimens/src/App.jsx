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



const g=d=>document.getElementById(d);
const db = [
{t: "Forgotten Reserve", c: "Barrel Aged Rum", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20f840bd-5600-4a0f-8218-dad70ea1c431_1600w.webp","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf886ac6-d35a-4046-add1-1bfc00fb323f_1600w.png","https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1600&auto=format&fit=crop"]},
{t: "Navy Strength", c: "Caribbean Rum", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb25994b-dc84-489c-bc95-6cf339f7cc8a_1600w.png","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg","https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop"]},
{t: "Fort Hill", c: "Bourbon Whiskey", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81b00c79-4d24-43ef-8b6b-c006387c67d2_1600w.png","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcafdfb7-9865-499e-bdd3-df7845836185_1600w.png","https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"]},
{t: "Flying Ace", c: "Brand Identity", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8318b3d-4016-4a42-af29-4c68124c8fba_1600w.png","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb25994b-dc84-489c-bc95-6cf339f7cc8a_1600w.png","https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1600&auto=format&fit=crop"]},
{t: "Woodacre", c: "Small Batch Vodka", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcafdfb7-9865-499e-bdd3-df7845836185_1600w.png","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81b00c79-4d24-43ef-8b6b-c006387c67d2_1600w.png","https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1600&auto=format&fit=crop"]},
{t: "Connecticut", c: "Charred Spirits", imgs: ["https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf886ac6-d35a-4046-add1-1bfc00fb323f_1600w.png","https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20f840bd-5600-4a0f-8218-dad70ea1c431_1600w.webp","https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop"]},
{t: "Ironclad", c: "Cask Aged Gin", imgs: ["https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81b00c79-4d24-43ef-8b6b-c006387c67d2_1600w.png"]},
{t: "Crimson Peak", c: "Red Blend Wine", imgs: ["https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1600&auto=format&fit=crop", "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf886ac6-d35a-4046-add1-1bfc00fb323f_1600w.png"]}
];
const arcDB = [
{t:"Obsidian Flow",c:"Web Design",i:"https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop"},
{t:"Mono Systems",c:"Branding",i:"https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop"},
{t:"Aero Dynamics",c:"Industrial",i:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"},
{t:"Neon Drift",c:"Photography",i:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"},
{t:"Carbon Layer",c:"Architecture",i:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop"},
{t:"Silent North",c:"Editorial",i:"https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=800&auto=format&fit=crop"},
{t:"Vapor Phase",c:"Packaging",i:"https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=800&auto=format&fit=crop"},
{t:"Steel Echo",c:"Environment",i:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"},
{t:"Lunar Dust",c:"Concept",i:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"},
{t:"Void Walker",c:"CGI",i:"https://images.unsplash.com/photo-1506259091721-347f79819643?q=80&w=800&auto=format&fit=crop"},
{t:"Zero Point",c:"Identity",i:"https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=800&auto=format&fit=crop"},
{t:"Flux State",c:"Motion",i:"https://images.unsplash.com/photo-1618544199616-a4c8c09d5694?q=80&w=800&auto=format&fit=crop"},
{t:"Apex Form",c:"Product",i:"https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop"},
{t:"Deep Field",c:"Typography",i:"https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop"}
];
const logoDB = Array.from({length:21}, (_,i) => `https://images.unsplash.com/photo-${['1620641788421-7a1c342ea42e','1618005182384-a83a8bd57fbe','1614730341194-75c6074065db','1550684848-fac1c5b4e853','1634152962476-4b8a00e1915c'][i%5]}?q=80&w=600&auto=format&fit=crop`);
let cIdx = 0;
let cType = 'work';
let activePage = 'main';
function nav(v,t){
['main','arc','abt','detail','logos'].forEach(i=>g(i)?.classList.add('hidden'));
const e=g(v);
if(e){
e.classList.remove('hidden');
activePage = v;
window.scrollTo(0,0);
updateScroll();
if(t) setTimeout(()=>g(t)?.scrollIntoView({behavior:'smooth'}),10);
}
}
function loadP(i, type='work'){
cType = type;
cIdx = i;
const data = type === 'work' ? db : arcDB;
const p = data[i];
g('dt-title').innerText = p.t;
g('dt-cat').innerText = p.c;
const c = g('dt-imgs');
c.innerHTML = '';
const images = p.imgs || [p.i];
images.forEach(url=>{
const img = document.createElement('img');
img.src = url;
img.className = 'w-full min-h-[50vh] object-cover bg-[#0c0907] block mb-1';
c.appendChild(img);
});
}
function viewProject(idx, type){
loadP(idx, type);
nav('detail');
}
function nextPrj(){
const data = cType === 'work' ? db : arcDB;
cIdx = (cIdx + 1) % data.length;
loadP(cIdx, cType);
nav('detail');
window.scrollTo(0,0);
}
function tog(){
const m=g('mob'),i=g('mi'),b=document.body;
if(m.classList.contains('pointer-events-none')){
m.classList.remove('pointer-events-none','opacity-0');
m.classList.add('auto','opacity-100');
i.setAttribute('data-lucide','x-circle');
b.style.overflow='hidden';
} else {
m.classList.remove('auto','opacity-100');
m.classList.add('pointer-events-none','opacity-0');
i.setAttribute('data-lucide','menu');
b.style.overflow='auto';
}
lucide.createIcons();
}
function mNav(v,t){tog();setTimeout(()=>nav(v,t),300)}
function mCont(){tog();setTimeout(()=>g('cont').scrollIntoView({behavior:'smooth'}),300)}
function loadArc(){
g('arc-grid').innerHTML = arcDB.map((x,i)=>`
<div onclick="viewProject(${i}, 'archive')" class="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
<div class="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 class="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">${x.t}</h3>
<p class="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">${x.c}</p>
</div>
</div>
`).join('');
}
function loadLogos(){
g('logo-grid').innerHTML = logoDB.map((url, i) => `
<div class="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500">
<div class="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO ${i+1}</div>
</div>
`).join('');
}
let lS = 0;
function updateScroll() {
const cS = window.scrollY || 0;
let p = activePage === 'main' ? Math.min(cS / 400, 1) : 1;
const easeP = p * (2 - p);
const splitP = Math.max(0, (p - 0.7) / 0.3);
const easeSplit = splitP * (2 - splitP);
const logo = g('anim-logo');
const container = g('anim-logo-container');
const n = g('nav-header');
const navLeft = g('nav-left');
const navRight = g('nav-right');
const ww = window.innerWidth;
const isMob = ww < 768;
if (logo) {
const baseSize = isMob ? (ww * 0.25) : (ww * 0.16);
const targetSize = isMob ? 32 : 42;
const currentSize = baseSize + (targetSize - baseSize) * easeP;
logo.style.fontSize = `${currentSize}px`;
}
if (container) {
const startY = window.innerHeight / 2;
const endY = 44;
const currentY = startY + (endY - startY) * easeP;
container.style.top = `${currentY}px`;
}
if (navLeft && navRight && !isMob) {
const maxMove = 136;
const move = maxMove * easeSplit;
navLeft.style.transform = `translate3d(-${move}px, 0, 0)`;
navRight.style.transform = `translate3d(${move}px, 0, 0)`;
} else if (navLeft && navRight) {
navLeft.style.transform = `translate3d(0, 0, 0)`;
navRight.style.transform = `translate3d(0, 0, 0)`;
}
if (cS <= 400) {
if (n) n.style.transform = 'translateY(0)';
if (container) container.style.transform = 'translate(-50%, -50%)';
} else if (cS > lS && cS > 500) {
if (n) n.style.transform = 'translateY(-100%)';
if (container) container.style.transform = 'translate(-50%, calc(-50% - 100px))';
} else if (cS < lS) {
if (n) n.style.transform = 'translateY(0)';
if (container) container.style.transform = 'translate(-50%, -50%)';
}
const doc = document.documentElement;
const scrollTotal = doc.scrollHeight - doc.clientHeight;
const val = scrollTotal > 0 ? (cS / scrollTotal) * 100 : 0;
const bar = g('v-prog');
if(bar) bar.style.height = Math.min(100, Math.max(0, val)) + '%';
lS = cS;
}
window.addEventListener('scroll', updateScroll);
window.addEventListener('resize', updateScroll);
window.onload=()=>{
const c=document.createElement('canvas'),x=c.getContext('2d');
c.width=128;c.height=128;const d=x.createImageData(128,128),b=d.data;
for(let i=0;i<b.length;i+=4){const v=Math.random()*255;b[i]=v;b[i+1]=v;b[i+2]=v;b[i+3]=255;}
x.putImageData(d,0,0);g('n-bg').style.backgroundImage=`url(${c.toDataURL()})`;
loadP(0, 'work');
loadArc();
loadLogos();
document.querySelectorAll('.init-hide').forEach(el => el.classList.add('a-fu'));
updateScroll();
lucide.createIcons();
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="noise" id="n-bg" style={{backgroundImage: 'url("data:image/png'}}></div>

<div className="fixed -translate-x-1/2 -translate-y-1/2 z-[550] flex flex-col pointer-events-none transition-transform duration-500 ease-out text-center w-full top-1/2 left-1/2 items-center justify-center" id="anim-logo-container" style={{top: '444.5px'}}>
<div className="init-hide flex flex-col a-fu opacity-0 w-full relative items-center justify-center">
<h1 className="font-sixcaps leading-[0.8] text-[#e8e0dc] tracking-widest cursor-default select-none text-glow uppercase pl-1" id="anim-logo" style={{fontSize: '196.32px'}}>
      PSWIZZARD
    </h1>
</div>
</div>

<nav className="fixed md:px-12 flex z-[500] transform-gpu transition-transform duration-500 ease-in-out bg-[#050403]/90 w-full h-[88px] border-[#45281a]/20 border-b pr-6 pl-6 top-0 left-0 backdrop-blur-xl items-center justify-center" id="nav-header">
<div className="hidden md:flex w-full max-w-5xl mx-auto justify-center items-center">

<div className="flex gap-10 lg:gap-14 will-change-transform pr-4" id="nav-left">
<button className="group relative py-1 text-xs uppercase tracking-widest font-normal text-[#9c8479] hover:text-[#e8e0dc] transition-colors duration-300" onclick="nav('main','work')">
    Work
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c77d56] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
</button>
<button className="group relative py-1 text-xs uppercase tracking-widest font-normal text-[#9c8479] hover:text-[#e8e0dc] transition-colors duration-300" onclick="nav('logos')">
    Logos
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c77d56] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
</button>
</div>

<div className="flex gap-10 lg:gap-14 will-change-transform pl-4" id="nav-right">
<button className="group relative py-1 text-xs uppercase tracking-widest font-normal text-[#9c8479] hover:text-[#e8e0dc] transition-colors duration-300" onclick="nav('abt')">
    About
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c77d56] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
</button>
<button className="group relative py-1 text-xs uppercase tracking-widest font-normal text-[#9c8479] hover:text-[#e8e0dc] transition-colors duration-300" onclick="g('cont').scrollIntoView({behavior:'smooth'})">
    Contact
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c77d56] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
</button>
</div>
</div>
<button className="md:hidden absolute right-6 text-[#e8e0dc] z-[610] w-12 h-12 flex items-center justify-end outline-none" onclick="tog()"><i className="w-6 h-6 pointer-events-none" data-lucide="menu" id="mi"></i></button>
</nav>

<div className="fixed left-6 lg:left-10 top-0 bottom-0 z-[400] flex flex-col items-center justify-center pointer-events-none hidden lg:flex mix-blend-screen">
<div className="text-[#593524] opacity-80 mt-24 mb-6">
<div className="w-8 h-12 border border-[#45281a] rounded-full flex items-center justify-center bg-[#0c0907] relative z-10">
<span className="font-serif text-xs text-[#c77d56] tracking-tighter">PS</span>
</div>
</div>
<div className="flex-1 w-[1px] bg-[#2e1d15] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-[#c77d56] transition-[height] duration-75 ease-linear" id="v-prog" style={{height: '0%'}}></div>
</div>
<div className="h-24"></div>
</div>

<div className="fixed inset-0 bg-[#0c0907] z-[600] flex flex-col justify-center items-center gap-6 opacity-0 pointer-events-none transition-all duration-500 md:hidden" id="mob">
<button className="text-5xl tracking-tighter text-[#e8e0dc] hover:text-[#c77d56] transition-colors" onclick="mNav('main','work')">Work</button>
<button className="text-5xl tracking-tighter text-[#e8e0dc] hover:text-[#c77d56] transition-colors" onclick="mNav('logos')">Logos</button>
<button className="text-5xl tracking-tighter text-[#e8e0dc] hover:text-[#c77d56] transition-colors" onclick="mNav('abt')">About</button>
<button className="text-5xl tracking-tighter text-[#e8e0dc] hover:text-[#c77d56] transition-colors" onclick="mCont()">Contact</button>
<div className="absolute bottom-12 flex gap-8 text-[#7d5e50]">
<a className="hover:text-[#c77d56]"><i className="w-6 h-6" data-lucide="camera"></i></a>
<a className="hover:text-[#c77d56]"><i className="w-6 h-6" data-lucide="dribbble"></i></a>
<a className="hover:text-[#c77d56]"><i className="w-6 h-6" data-lucide="image"></i></a>
</div>
</div>

<main className="z-[900]" id="main">
<header className="min-h-screen flex flex-col overflow-hidden transform-gpu relative items-center justify-center pointer-events-none">




<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" loop="" muted="" playsinline="">
<source src="https://i.imgur.com/lPyPVcN.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-[#050403]/10 via-[#050403]/60 to-[#050403]"></div>
</header>
<section className="px-6 py-24 md:px-12 md:py-32 bg-[#45281a]/5 border-t border-[#45281a]/30 relative z-20 bg-[#050403]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-screen-2xl mx-auto items-center">
<div className="flex flex-col order-2 lg:order-1 justify-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#e8e0dc] mb-8 leading-[1.05] uppercase">I craft award-winning artworks that drive results</h2>
<p className="text-xl md:text-2xl text-[#9c8479] font-extralight leading-relaxed mb-10 max-w-xl">I’m Andreas, a graphic designer with 15+ years of experience in visual identity. I work with ambitious businesses to create meaningful, strategic brands that stand out.</p>
<button className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#c77d56] hover:text-[#e8e0dc] transition-colors" onclick="g('cont').scrollIntoView({behavior:'smooth'})">Start a Project <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></button>
</div>
<div className="relative order-1 lg:order-2 group aspect-[4/5] bg-[#0c0907] rounded-sm overflow-hidden border border-[#45281a]/40">
<img className="group-hover:scale-105 transition-transform duration-700 ease-out group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>
<section className="md:px-8 md:py-32 border-[#45281a]/30 border-t pt-24 pr-6 pb-24 pl-6 relative z-20 bg-[#050403]" id="work">
<div className="flex flex-col md:flex-row md:mb-24 mb-24 items-baseline justify-between">
<h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#e8e0dc]">Selected Work</h2><span className="text-[#7d5e50] text-xs uppercase tracking-widest mt-4 md:mt-0 font-normal">(2023 — Present)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full">
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(0,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20f840bd-5600-4a0f-8218-dad70ea1c431_1600w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Forgotten Reserve</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Barrel Aged Rum</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(1,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb25994b-dc84-489c-bc95-6cf339f7cc8a_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Navy Strength</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Caribbean Rum</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(2,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81b00c79-4d24-43ef-8b6b-c006387c67d2_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Fort Hill</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Bourbon Whiskey</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(3,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8318b3d-4016-4a42-af29-4c68124c8fba_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Flying Ace</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Brand Identity</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(4,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu w-full h-full object-cover" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcafdfb7-9865-499e-bdd3-df7845836185_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Woodacre</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Small Batch Vodka</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(5,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf886ac6-d35a-4046-add1-1bfc00fb323f_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Connecticut</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Charred Spirits</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(6,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Ironclad</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Cask Aged Gin</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] md:rounded-sm overflow-hidden bg-[#0c0907] relative" onclick="viewProject(7,'work')">
<img className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover transform-gpu" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center bg-[#0c0907]/90 opacity-0 absolute inset-0 items-center justify-center">
<h3 className="group-hover:translate-y-0 transition-transform duration-500 ease-out text-3xl text-[#e8e0dc] tracking-tight translate-y-4">Crimson Peak</h3><p className="uppercase group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75 text-sm text-[#c77d56] tracking-widest translate-y-4">Red Blend Wine</p>
</div>
</div>
</div>
<div className="md:mt-40 flex mt-40 justify-center">
<button className="group flex items-center gap-4 px-10 py-5 border border-[#45281a]/40 rounded-full hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" onclick="nav('arc')"><span className="text-sm uppercase tracking-widest font-normal">View Archive</span><i className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></button>
</div>
</section>
<section className="md:px-12 md:py-32 bg-[#45281a]/5 border-[#45281a]/30 border-t pt-24 pr-6 pb-24 pl-6 relative z-20 bg-[#050403]">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#e8e0dc] mb-8">Ready to elevate your brand?</h3>
<p className="text-[#9c8479] text-xl md:text-2xl font-extralight leading-relaxed mb-10 max-w-2xl">This isn’t about looking “nice.” It’s about elevating your brand so it actually turns heads. Ready to show up like the brand you really are?</p>
<button className="group flex items-center gap-4 px-10 py-5 border border-[#45281a]/40 rounded-full hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" onclick="g('cont').scrollIntoView({behavior:'smooth'})"><span className="text-sm uppercase tracking-widest font-normal">Let's Talk</span><i className="w-[18px] h-[18px] group-hover:translate-y-1 transition-transform" data-lucide="arrow-down"></i></button>
</div>
</section>
</main>

<main className="hidden min-h-screen px-6 md:px-12 py-32 a-fu" id="abt">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-screen-2xl mr-auto ml-auto items-start pt-24">
<div className="flex flex-col h-full justify-center">
<h2 className="text-xs uppercase tracking-widest text-[#c77d56] mb-8 font-normal">About The Brand</h2>
<h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#e8e0dc] mb-10 leading-[1.1]">Architects of the <br/><span className="text-[#7d5e50]">Digital Void.</span></h1>
<div className="leading-relaxed text-xl md:text-2xl font-extralight text-[#9c8479] max-w-xl space-y-8">
<p className="">PSWIZZARD operates at the intersection of rigorous engineering and pure aesthetic intuition. We don't just build websites; we construct digital environments that breathe.</p>
<ul className="space-y-4 pt-4 border-t border-[#45281a]/30 mt-8">
<li className="flex items-center gap-4 text-sm uppercase tracking-widest text-[#c77d56] font-normal"><i className="w-6 h-6 text-[#7d5e50]" data-lucide="check-circle"></i>Radical Simplification</li>
<li className="flex items-center gap-4 text-sm uppercase tracking-widest text-[#c77d56] font-normal"><i className="w-6 h-6 text-[#7d5e50]" data-lucide="check-circle"></i>Systemic Design</li>
<li className="flex items-center gap-4 text-sm uppercase tracking-widest text-[#c77d56] font-normal"><i className="w-6 h-6 text-[#7d5e50]" data-lucide="check-circle"></i>Performance as Art</li>
</ul>
</div>
<div className="mt-12">
<button className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#e8e0dc] hover:text-[#c77d56] transition-colors" onclick="g('cont').scrollIntoView({behavior:'smooth'})">Start a Project <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="aspect-[4/5] lg:aspect-square overflow-hidden group bg-[#0c0907] w-full rounded-sm relative border border-[#45281a]/20">
<img className="group-hover:scale-105 transition-transform duration-1000 ease-out transform-gpu opacity-80 mix-blend-screen w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0c0907] via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="flex border-[#45281a]/30 border-t mt-24 pt-24 justify-center">
<button className="group flex gap-4 hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300 border-[#45281a]/40 border rounded-full pt-5 pr-10 pb-5 pl-10 items-center" onclick="nav('main')"><i className="w-[18px] h-[18px] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i><span className="text-sm uppercase tracking-widest font-normal">Back Home</span></button>
</div>
</main>

<main className="hidden min-h-screen px-6 py-32 md:px-8 a-fu pt-48" id="arc">
<div className="flex flex-col md:flex-row border-[#45281a]/30 border-b mb-24 pb-12 items-baseline justify-between">
<h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#e8e0dc]">Full Archive</h2><span className="text-[#7d5e50] text-xs uppercase tracking-widest mt-4 md:mt-0 font-normal">20 Projects</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-32" id="arc-grid">
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(0, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Obsidian Flow</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Web Design</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(1, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Mono Systems</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Branding</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(2, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Aero Dynamics</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Industrial</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(3, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Neon Drift</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Photography</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(4, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Carbon Layer</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Architecture</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(5, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Silent North</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Editorial</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(6, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Vapor Phase</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Packaging</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(7, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Steel Echo</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Environment</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(8, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Lunar Dust</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Concept</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(9, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Void Walker</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">CGI</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(10, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Zero Point</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Identity</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(11, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Flux State</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Motion</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(12, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Apex Form</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Product</p>
</div>
</div>
<div className="group cursor-pointer aspect-[3/4] bg-[#0c0907] md:rounded-sm overflow-hidden relative border border-[#45281a]/30" onclick="viewProject(13, 'archive')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0c0907]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-2 p-6 text-center">
<h3 className="text-xl text-white tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">Deep Field</h3>
<p className="text-[#c77d56] text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">Typography</p>
</div>
</div>
</div>
</main>

<main className="hidden min-h-screen px-6 py-32 md:px-8 a-fu pt-48" id="logos">
<div className="flex flex-col md:flex-row border-[#45281a]/30 border-b mb-12 pb-12 items-baseline justify-between">
<h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#e8e0dc]">Logotypes</h2><span className="text-[#7d5e50] text-xs uppercase tracking-widest mt-4 md:mt-0 font-normal">Selection</span>
</div>
<div className="logo-grid grid grid-cols-1 md:grid-cols-3 gap-1 mb-32" id="logo-grid">
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 1</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 2</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 3</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 4</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 5</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 6</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 7</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 8</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 9</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 10</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 11</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 12</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 13</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 14</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 15</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 16</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 17</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 18</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 19</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 20</div>
</div>
<div className="logo-item aspect-square bg-[#0c0907] overflow-hidden relative border border-[#45281a]/20">
<img className="w-full h-full object-cover opacity-80 grayscale mix-blend-screen hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 text-xs text-[#c77d56] opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">LOGO 21</div>
</div>
</div>
<div className="flex border-[#45281a]/30 border-t pt-24 justify-center">
<button className="group flex gap-4 hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300 border-[#45281a]/40 border rounded-full pt-5 pr-10 pb-5 pl-10 items-center" onclick="nav('main')"><i className="w-[18px] h-[18px] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i><span className="text-sm uppercase tracking-widest font-normal">Back Home</span></button>
</div>
</main>

<main className="hidden min-h-screen pt-48 pb-24 a-fu bg-[#050403]" id="detail">
<div className="px-6 md:px-12 mb-20 max-w-screen-2xl mx-auto min-h-[40vh] flex flex-col justify-end">
<button className="group flex items-center gap-3 text-sm uppercase tracking-widest text-[#7d5e50] hover:text-[#c77d56] transition-colors mb-12 font-normal" onclick="nav('main')"><i className="w-[18px] h-[18px] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i> Back</button>
<div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#e8e0dc]" id="dt-title">Forgotten Reserve</h1>
<div className="flex flex-col gap-4 max-w-md">
<p className="text-xs uppercase tracking-widest text-[#c77d56] font-normal" id="dt-cat">Barrel Aged Rum</p>
<p className="text-[#9c8479] text-xl md:text-2xl font-extralight leading-relaxed">This project represents a detailed exploration of visual hierarchy and structural integrity. Every element was carefully calibrated to ensure maximum impact while maintaining a minimalist footprint.</p>
</div>
</div>
</div>
<div className="flex flex-col gap-[0] w-full" id="dt-imgs"><img className="w-full min-h-[50vh] object-cover bg-[#0c0907] block mb-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20f840bd-5600-4a0f-8218-dad70ea1c431_1600w.webp"/><img className="w-full min-h-[50vh] object-cover bg-[#0c0907] block mb-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf886ac6-d35a-4046-add1-1bfc00fb323f_1600w.png"/><img className="w-full min-h-[50vh] object-cover bg-[#0c0907] block mb-1" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/></div>
<div className="px-6 md:px-12 mt-0 h-screen flex justify-center items-center bg-[#45281a]/5">
<button className="group flex items-center gap-4 px-10 py-5 border border-[#45281a]/40 rounded-full hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" onclick="nextPrj()"><span className="text-sm uppercase tracking-widest font-normal">Next Project</span><i className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i></button>
</div>
</main>

<footer className="w-full px-6 py-24 md:px-12 md:py-32 bg-[#050403] border-t border-[#45281a]/30 flex flex-col justify-between min-h-[50vh] z-[100] relative" id="cont">
<div>
<h3 className="text-xs uppercase tracking-widest text-[#7d5e50] mb-8 font-normal">Get in Touch</h3>
<a className="block w-fit text-[6vw] md:text-[5vw] leading-none text-[#e8e0dc] tracking-tight hover:text-[#c77d56] transition-colors duration-300" href="mailto:contactpswizzard@gmail.com">contactpswizzard@gmail.com</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mt-24 gap-12">
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full border border-[#45281a]/40 flex items-center justify-center text-[#7d5e50] hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" href="https://instagram.com/pswizzard"><i className="w-5 h-5" data-lucide="camera"></i></a>
<a className="w-12 h-12 rounded-full border border-[#45281a]/40 flex items-center justify-center text-[#7d5e50] hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" href="#"><i className="w-5 h-5" data-lucide="globe"></i></a>
<a className="w-12 h-12 rounded-full border border-[#45281a]/40 flex items-center justify-center text-[#7d5e50] hover:bg-[#c77d56] hover:text-black hover:border-[#c77d56] transition-all duration-300" href="https://behance.net/pswizzard"><i className="w-5 h-5" data-lucide="image"></i></a>
</div>
<div className="flex gap-16 text-xs tracking-widest uppercase text-[#593524] text-right items-center">
<div className="flex flex-col gap-2 text-left md:text-right">
<span className="block text-[#7d5e50]">Location</span>
<span className="text-[#e8e0dc] font-normal">New York, NY EST</span>
</div>
<div className="flex flex-col gap-2 text-left md:text-right">
<span className="block text-[#7d5e50]">Legal</span>
<span className="text-[#e8e0dc] font-normal">©2015 PSWIZZARD</span>
</div>
<img alt="Logo" className="w-24 h-24 object-contain invert opacity-60 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/780303ae-95d1-4a2f-873d-54285d1bc0ca_320w.png"/>
</div>
</div>
</footer>

    </>
  );
}
