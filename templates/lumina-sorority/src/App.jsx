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



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#A01830]/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-[#881337]/5 rounded-full blur-[80px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-[#E5E0DC]/60 transition-all duration-500">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button className="md:hidden text-[#292524] hover:text-[#A01830] transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-[#78716C]">
<a className="hover:text-[#A01830] transition-colors duration-300" href="/track">Tracks</a>
</div>
<a className="text-2xl font-['Cormorant_Garamond'] tracking-tighter font-semibold text-[#881337] uppercase flex items-center gap-2" href="#">
                LUMINA
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium text-[#78716C]">
<a className="hover:border-[#A01830] hover:text-[#A01830] hover:bg-[#A01830]/5 transition-all duration-300 border-[#D6D3CD] border rounded-full pt-2 pr-5 pb-2 pl-5" href="#participation">
                    Join Us
                </a>
</div>
<button className="md:hidden text-[#292524] hover:text-[#A01830] transition-colors">
<iconify-icon height="24" icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="lg:px-6 bg-[#FAF9F6] pt-24 pr-4 pb-6 pl-4 relative z-10">
<div className="max-w-7xl mx-auto">

<div className="relative w-full h-[65vh] min-h-[500px] max-h-[650px] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#881337]/20 group animate-on-scroll is-visible">

<img alt="Youth collaboration in Bangladesh" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-105 filter sepia-[0.1] contrast-[1.05]" src="https://images.unsplash.com/photo-1578988247625-4e87a4a56afa?w=2560&amp;q=80"/>

<div className="absolute inset-0 bg-[#4A0404]/30 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-[#2A0A0A]/90"></div>

<div className="flex flex-col text-center h-full z-10 pr-6 pl-6 relative items-center justify-center">

<div className="relative mb-6 animate-on-scroll delay-100 is-visible">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-white tracking-[0.25em] bg-[#A01830] border-white/20 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-lg ring-1 ring-[#A01830]/50 ring-offset-2 ring-offset-[#4A0404]/30">LUMINA sorority</span>
</div>

<h1 className="animate-on-scroll delay-200 is-visible md:text-7xl lg:text-8xl leading-[0.95] hero-text-shadow text-5xl font-light text-[#FAF9F6] tracking-tighter font-['Cormorant_Garamond'] mb-8">Freedom. Trust.<br/> Work that <span className="italic pl-2 text-[#FECDD3]">matters.</span></h1>

<div className="animate-on-scroll delay-300 is-visible max-w-lg mr-auto ml-auto">
<p className="md:text-lg leading-relaxed text-base font-light text-[#EAE8E4] mb-8 drop-shadow-md">A women-led ecosystem for study, support, projects, and startups. We gather to find practical solutions to fem-centric problems of the society.</p>
<div className="flex items-center justify-center space-x-4">
<button className="hover:bg-[#881337] hover:text-white transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold text-[#881337] bg-[#FAF9F6] rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl" onclick="window.location.href='https://www.instagram.com/lumina_is'" role="button">DM for a chat</button>
<button className="hover:text-[#FAF9F6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#881337] cursor-pointer text-sm font-medium text-white bg-white/10 border-white/30 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" onclick="window.location.href='mailto:lumina.intl@gmail.com'" role="button">Write an email</button>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-y bg-[#EBE7DF] w-full border-[#D6D3CD]/30 pt-6 pb-6 relative z-10 px-6">
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 max-w-6xl mx-auto">
<div className="flex opacity-70 flex-wrap justify-center gap-x-12 gap-y-2 items-center text-[#554040]">
<span className="text-2xl italic font-['Cormorant_Garamond']">Startup</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Community</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Activism</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Knowledge</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Skills</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Virtues</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Service</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#A01830] hidden md:block"></span>
<span className="text-2xl italic font-['Cormorant_Garamond']">Output</span>
</div>
</div>
</div>

<section className="bg-[#F5F2EB] pt-16 pr-6 pb-16 pl-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-12 gap-y-8">

<div className="text-center p-8 group hover:-translate-y-1 transition-transform duration-500 animate-on-scroll">
<div className="relative flex items-center justify-center w-14 h-14 mx-auto mb-6">
<div className="absolute inset-0 bg-[#A01830]/20 rounded-full animate-ping opacity-20"></div>
<div className="relative flex items-center justify-center w-full h-full text-[#A01830] bg-[#A01830]/10 group-hover:bg-[#A01830] group-hover:text-white transition-colors duration-300 rounded-full">
<iconify-icon height="28" icon="solar:butterfly-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium font-['Cormorant_Garamond'] mb-3 text-[#4A0404]">Freedom</h3>
<p className="text-sm font-light text-[#78716C] leading-relaxed">Lumina is a self-sustaining support ecosystem so women can break the chain of social pressure, dependency, and isolation. We back each other with practical help.</p>
</div>

<div className="text-center pt-8 pr-8 pb-8 pl-8 group hover:-translate-y-1 transition-transform duration-500 animate-on-scroll delay-100">
<div className="w-14 h-14 mx-auto bg-[#A01830]/10 group-hover:bg-[#A01830] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center text-[#A01830] mb-6">
<iconify-icon height="28" icon="solar:wineglass-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-['Cormorant_Garamond'] mb-3 text-[#4A0404]">Socio-cultural shift</h3>
<p className="text-sm font-light text-[#78716C] leading-relaxed">We exist to change what society expects from women and what women contribute to society. Not virtue signalling. We choose real problems, do the work.</p>
</div>

<div className="text-center p-8 group hover:-translate-y-1 transition-transform duration-500 animate-on-scroll delay-200">
<div className="w-14 h-14 mx-auto bg-[#A01830]/10 group-hover:bg-[#A01830] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center text-[#A01830] mb-6">
<iconify-icon height="28" icon="solar:notebook-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium font-['Cormorant_Garamond'] mb-3 text-[#4A0404]">Intellectual Life</h3>
<p className="text-sm font-light text-[#78716C] leading-relaxed">We train the mind to see reality. We study society, history, human nature, and the deeper structure of the world so our actions are grounded.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative z-10" id="about">

<div className="absolute right-0 top-1/2 w-64 h-64 bg-[#A01830]/5 rounded-full blur-[60px] pointer-events-none -z-10"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-on-scroll">
<div className="">
<span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#A01830] mb-3">The Ecosystem</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-medium tracking-tight text-[#292524]">What is Lumina?</h2>
</div>
<p className="lg:text-base leading-relaxed text-sm font-light text-[#78716C] max-w-sm">Lumina is a non-partisan support ecosystem for high-agency women. We help each other think clearly, build skills, and ship real work.</p>
</div>

<div className="grid md:grid-cols-3 gap-8" id="tracks">

<div className="group relative p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(160,24,48,0.1)] transition-all duration-500 border border-[#F5F5F0] bg-[#0F0505] animate-on-scroll">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Studios" className="transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?w=800&amp;q=80"/>
<div className="text-xs font-semibold uppercase tracking-wider text-[#A01830] bg-[#FAF9F6] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 right-4 shadow-sm">Build</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-2xl font-medium text-[#FAF9F6] font-['Cormorant_Garamond'] mb-2">Studios</h3>
<p className="text-sm font-light text-[#A8A29E] mb-6">Building and collaborations around real problems. Research notes, awareness efforts, experiments, or pilot initiatives.</p>
<a className="inline-flex items-center uppercase hover:text-white transition-colors duration-300 text-xs font-bold text-[#A01830] tracking-widest" href="#">
                            See Studios 
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>

<div className="group relative p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(160,24,48,0.1)] transition-all duration-500 border border-[#F5F5F0] bg-[#0F0505] animate-on-scroll delay-100">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Fellowship" className="transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1722185423084-7feac3ca80ed?w=800&amp;q=80"/>
<div className="text-xs font-semibold uppercase tracking-wider text-[#A01830] bg-[#FAF9F6] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 right-4 shadow-sm">Study</div>
</div>
<div className="pr-4 pb-6 pl-4">
<h3 className="text-2xl font-medium text-[#FAF9F6] font-['Cormorant_Garamond'] mb-2">Reading Circles</h3>
<p className="text-sm font-light text-[#A8A29E] mb-6">Small, serious groups reading one book or question at a time. Discussion, reflection, and written responses.</p>
<a className="inline-flex items-center uppercase hover:text-white transition-colors duration-300 text-xs font-bold text-[#A01830] tracking-widest" href="#">
                            See Circles
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>

<div className="group relative p-2 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(160,24,48,0.1)] transition-all duration-500 border border-[#F5F5F0] bg-[#0F0505] animate-on-scroll delay-200">
<div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
<img alt="Build Track" className="transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=800&amp;q=80"/>
<div className="text-xs font-semibold uppercase tracking-wider text-[#A01830] bg-[#FAF9F6] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 absolute top-4 right-4 shadow-sm">Community</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-2xl font-medium text-[#FAF9F6] font-['Cormorant_Garamond'] mb-2">Events &amp; Gatherings</h3>
<p className="text-sm font-light text-[#A8A29E] mb-6">Workshops, discussions, field visits, and curated conversations. We meet to be united at all possible fronts of a society.</p>
<a className="inline-flex items-center uppercase hover:text-white transition-colors duration-300 text-xs font-bold text-[#A01830] tracking-widest" href="#">
                            See Events
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pr-6 pb-24 pl-6 relative z-10" id="participation">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="md:text-5xl text-4xl font-medium text-[#292524] tracking-tight font-['Cormorant_Garamond'] mb-4">Participation</h2>
<p className="font-light text-[#78716C] text-lg">No fees. Shared purpose.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-[2rem] border border-[#EAE8E4] text-center hover:border-[#A01830] transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm animate-on-scroll">
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#78716C] mb-4">Level 1</h3>
<div className="text-4xl font-['Cormorant_Garamond'] text-[#292524] font-medium mb-2">Observer</div>
<p className="text-xs text-[#78716C] mb-8 uppercase tracking-wide">Open Access</p>
<ul className="space-y-3 mb-8 text-sm text-[#57534E] font-light">
<li>Attend open sessions</li>
<li>Connect online</li>
<li>Become friends</li>
</ul>
<button className="hover:bg-[#A01830] hover:border-[#A01830] hover:text-white transition-all text-sm font-medium text-[#292524] w-full border-[#D6D3CD] border rounded-xl pt-3 pb-3">Request Access</button>
</div>

<div className="relative p-8 rounded-[2rem] bg-[#0F0505] text-[#FAF9F6] text-center shadow-2xl transform md:-translate-y-4 border border-[#2A0A0A] animate-on-scroll delay-100 z-10">
<div className="absolute -inset-0.5 bg-gradient-to-b from-[#A01830]/30 to-transparent rounded-[2.1rem] -z-10 blur-sm"></div>
<div className="inline-block text-[10px] uppercase font-bold text-white tracking-widest bg-[#A01830] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 relative overflow-hidden">
<span className="relative z-10">Accepting now</span>
<div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
</div>
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#A8A29E] mb-4">Level 2</h3>
<div className="text-4xl font-['Cormorant_Garamond'] font-medium mb-2 text-white">Member</div>
<p className="text-xs text-[#A8A29E] mb-8 uppercase tracking-wide">Commitment</p>
<ul className="space-y-3 mb-8 text-sm text-[#D6D3CD] font-light">
<li>Frequent meetups</li>
<li>Community role</li>
<li>Join a project</li>
</ul>
<button className="hover:bg-[#BE123C] hover:shadow-lg hover:shadow-[#A01830]/20 transition-all cursor-pointer text-sm font-bold text-white bg-[#A01830] w-full rounded-xl pt-3 pb-3" onclick="window.location.href='https://forms.gle/8RTD5LW587S9xB1ZA'" role="button">Apply Now</button>
</div>

<div className="p-8 rounded-[2rem] border border-[#EAE8E4] text-center hover:border-[#A01830] transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm animate-on-scroll delay-200">
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#78716C] mb-4">Level 3</h3>
<div className="text-4xl font-['Cormorant_Garamond'] text-[#292524] font-medium mb-2">Core</div>
<p className="text-xs text-[#78716C] mb-8 uppercase tracking-wide">Leadership</p>
<ul className="space-y-3 mb-8 text-sm text-[#57534E] font-light">
<li>Greater purpose</li>
<li>Represent Lumina</li>
<li>Mentor members</li>
</ul>
<button className="w-full py-3 rounded-xl border border-[#D6D3CD] text-[#292524] text-sm font-medium hover:bg-[#A01830] hover:border-[#A01830] transition-all hover:text-white">Discuss</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0F0505] text-[#EAE8E4] pt-24 pb-12 rounded-t-[3rem] mt-12 border-t border-[#A01830]/20 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 animate-on-scroll">

<div className="col-span-1 md:col-span-1">
<a className="block uppercase text-3xl font-medium text-[#FAF9F6] tracking-tighter font-['Cormorant_Garamond'] mb-6" href="https://youtube.com/shorts/od4UwJsO3RE?si=DWU1xgw6nhW7E7ba">LUMINA</a>
<p className="leading-relaxed text-sm font-light text-[#A8A29E]">Lumina Bangladesh.<br/> A women-led ecosystem for freedom, knowledge, and startup.</p>
</div>

<div className="">
<h4 className="uppercase text-xs font-semibold text-[#A01830] tracking-widest mb-6">Connect</h4>
<ul className="text-sm font-light space-y-4 text-[#D6D3CD]">
<li><a className="hover:text-[#A01830] transition-colors" href="/#">Studios</a></li>
<li><a className="hover:text-[#A01830] transition-colors" href="#">Circles</a></li>
<li><a className="hover:text-[#A01830] transition-colors" href="#">Events</a></li>
</ul>
</div>

<div className="">
<h4 className="uppercase text-xs font-semibold text-[#A01830] tracking-widest mb-6">Participation</h4>
<ul className="space-y-4 text-sm font-light text-[#D6D3CD]">
<li><a className="hover:text-[#A01830] transition-colors" href="/#">Level 1</a></li>
<li><a className="hover:text-[#A01830] transition-colors" href="https://forms.gle/8RTD5LW587S9xB1ZA">Level 2</a></li>
<li><a className="hover:text-[#A01830] transition-colors" href="#">Level 3</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#A01830] mb-6">Stay Connected</h4>
<form className="space-y-4">
<div className="relative">
<input className="w-full bg-[#1C1917] border border-[#2A0A0A] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#A01830] text-[#EAE8E4] placeholder-[#57534E] transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A01830] hover:text-white transition-colors" type="button">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</form>
<div className="flex space-x-4 mt-6">
<a className="transition-colors hover:text-[#A01830] text-[#78716C]" href="https://www.instagram.com/lumina_is">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="transition-colors hover:text-[#A01830] text-[#78716C]" href="https://www.facebook.com/profile.php?id=61561314281071">
<iconify-icon height="20" icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-[#2A0A0A] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#57534E] font-light animate-on-scroll delay-100">
<p>© 2026 Lumina Intellecta Sorority. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#A01830] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#A01830] transition-colors" href="#">Community Guidelines</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
