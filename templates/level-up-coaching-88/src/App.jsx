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



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#fdfbf7',
tan: '#e8decc',
dark: '#121212',
'dark-gray': '#1a1a1a',
'badge-bg': '#2a332d',
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'Georgia', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = menuBtn.querySelector('i');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons(); // Re-render icon
        }

        menuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // FAQ Accordion Logic
        const faqBtns = document.querySelectorAll('.faq-btn');
        
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('i');
                const isOpen = content.style.maxHeight;

                // Close all other accordions
                document.querySelectorAll('.faq-content').forEach(el => {
                    el.style.maxHeight = null;
                    el.previousElementSibling.querySelector('i').classList.remove('rotate-45');
                });

                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.classList.add('rotate-45');
                }
            });
        });

        // Navbar blur on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-cream/90 backdrop-blur-md border-b border-gray-200">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 z-50" href="#">
<div className="w-10 h-10 flex flex-col items-center justify-center relative">
<div className="absolute inset-0 border-2 border-dark rounded-full mix-blend-multiply flex items-center justify-center">
<div className="h-6 w-[2px] bg-dark mx-[2px]"></div>
<div className="h-4 w-[2px] bg-dark mx-[2px]"></div>
<div className="h-6 w-[2px] bg-dark mx-[2px]"></div>
</div>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight leading-none">LEVEL UP</span>
<span className="text-xs text-gray-500 tracking-wider leading-tight">PERSONAL COACH</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-10 text-xs font-medium tracking-widest text-gray-800">
<a className="hover:text-dark transition-colors" href="#about">ABOUT</a>
<a className="relative text-dark transition-colors" href="#coaching">
                    COACHING
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-dark rounded-full"></span>
</a>
<a className="hover:text-dark transition-colors" href="#approach">APPROACH</a>
<a className="hover:text-dark transition-colors" href="#success">SUCCESS STORIES</a>
<a className="hover:text-dark transition-colors" href="#resources">RESOURCES</a>
</div>

<div className="flex items-center gap-4 z-50">
<a className="hidden md:flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-full text-xs font-medium tracking-widest hover:bg-gray-800 transition-colors" href="#contact">
                    BOOK A FREE CALL
                    <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
<button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none" id="mobile-menu-btn">
<i className="w-5 h-5 text-dark" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-cream z-40 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-center items-center gap-8" id="mobile-menu">
<a className="text-2xl font-medium tracking-tight hover:text-gray-500 mobile-link" href="#about">About</a>
<a className="text-2xl font-medium tracking-tight hover:text-gray-500 mobile-link" href="#coaching">Coaching</a>
<a className="text-2xl font-medium tracking-tight hover:text-gray-500 mobile-link" href="#approach">Approach</a>
<a className="text-2xl font-medium tracking-tight hover:text-gray-500 mobile-link" href="#success">Success Stories</a>
<a className="text-2xl font-medium tracking-tight hover:text-gray-500 mobile-link" href="#resources">Resources</a>
<a className="mt-8 bg-dark text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest mobile-link" href="#contact">BOOK A FREE CALL</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-0 overflow-hidden min-h-screen flex items-center">

<div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-4 text-xs tracking-[0.2em] text-gray-500 vertical-text z-20">
<span>GROWTH</span>
<span className="w-1 h-1 bg-gray-400 rounded-full"></span>
<span>FOCUS</span>
<span className="w-1 h-1 bg-gray-400 rounded-full"></span>
<span>FREEDOM</span>
<div className="w-[1px] h-16 bg-gray-300 mt-4"></div>
</div>
<div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-16 lg:gap-8 relative z-10">

<div className="flex flex-col justify-center pt-10 lg:pt-0">
<div className="inline-flex items-center gap-3 border border-gray-300 rounded-full py-2 px-4 mb-8 w-max">
<div className="w-6 h-6 bg-dark rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium tracking-widest text-gray-800">PREMIUM PERSONAL COACHING</span>
</div>
<h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[1.05] font-semibold tracking-tight mb-8">
                    BECOME WHO<br/>
                    YOU'RE MEANT<br/>
<span className="font-serif italic font-normal text-6xl md:text-8xl xl:text-[96px]">TO BE.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-[480px] mb-12 leading-relaxed">
                    I help high achievers break through limits, build unshakable habits and design a life that feels aligned and extraordinary.
                </p>
<div className="flex items-center gap-6 mb-16 lg:mb-24">
<a className="flex items-center gap-4 bg-dark text-white pl-6 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all group" href="#contact">
<span className="text-xs font-medium tracking-widest">LET'S WORK TOGETHER</span>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-5 h-5 text-dark" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
<div className="flex flex-col gap-3">
<div className="flex -space-x-3 mb-1">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-cream object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 border-cream bg-dark flex items-center justify-center z-10 text-white text-[10px] font-medium">+</div>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">250+</p>
<p className="text-xs text-gray-500 font-medium tracking-wider mt-1 uppercase">Clients Transformed</p>
</div>
</div>
<div className="flex flex-col gap-3 md:border-l border-gray-200 md:pl-8">
<div className="h-8 flex items-end">
<i className="w-5 h-5 text-gray-400 mb-1" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">87%</p>
<p className="text-xs text-gray-500 font-medium tracking-wider mt-1 uppercase">Achieve their goals</p>
</div>
</div>
<div className="flex flex-col gap-3 col-span-2 md:col-span-1 md:border-l border-gray-200 md:pl-8">
<div className="h-8 flex items-end">
<i className="w-5 h-5 text-gray-400 mb-1" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">5+</p>
<p className="text-xs text-gray-500 font-medium tracking-wider mt-1 uppercase">Years of experience</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[500px] lg:min-h-[700px] flex items-end justify-center pt-20">

<div className="absolute top-[10%] right-[-10%] w-[80%] aspect-square bg-tan rounded-full mix-blend-multiply opacity-80"></div>
<div className="absolute bottom-[5%] left-[5%] w-[85%] aspect-square bg-dark-gray rounded-full z-0"></div>

<img alt="Personal Coach Portrait" className="relative z-10 w-[85%] h-[90%] object-cover object-top rounded-b-full drop-shadow-2xl grayscale-[20%] contrast-125" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=100&amp;w=1200&amp;h=1400" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'}}/>


<div className="absolute top-[25%] -right-[5%] z-20 w-48 h-48 bg-badge-bg rounded-full flex flex-col items-center justify-center p-6 text-center text-white/90 shadow-xl backdrop-blur-sm border border-white/10 transform rotate-3">
<i className="w-6 h-6 mb-3 opacity-80" data-lucide="diamond" strokeWidth="1.5"></i>
<span className="text-sm tracking-widest font-medium leading-relaxed">CLARITY<br/>CONFIDENCE<br/>CONSISTENCY</span>
</div>

<div className="absolute top-1/3 -right-12 z-0 grid grid-cols-4 gap-4 opacity-20">
<div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div>
<div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div>
<div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div>
<div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div><div className="w-1 h-1 bg-dark rounded-full"></div>
</div>

<div className="absolute bottom-[20%] right-[10%] w-64 h-[1px] bg-white/40 -rotate-45 z-20 overflow-visible">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>

<div className="absolute -bottom-8 -right-8 z-30 w-32 h-32 rounded-full border border-gray-300 bg-cream/80 backdrop-blur-md flex items-center justify-center p-2">
<div className="relative w-full h-full flex items-center justify-center animate-[spin_15s_linear_infinite]">

<svg className="w-full h-full overflow-visible text-gray-800" viewbox="0 0 100 100">
<path d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" id="curve"></path>
<text className="text-[10px] font-medium tracking-widest uppercase">
<textpath href="#curve" startoffset="0">Take the first step • start now • </textpath>
</text>
</svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-8 h-8 text-dark" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
<p className="text-center text-sm font-medium tracking-widest text-gray-400 mb-8 uppercase">Trusted by leaders from</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-dark rounded-md rotate-45"></div>
<span className="text-xl font-semibold tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border-4 border-dark"></div>
<span className="text-xl font-serif italic">Globex</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-dark rounded-sm"></div>
<span className="text-xl font-semibold tracking-tight">Soylent</span>
</div>
<div className="flex items-center gap-2">
<div className="w-0 h-0 border-l-[16px] border-l-transparent border-b-[28px] border-b-dark border-r-[16px] border-r-transparent"></div>
<span className="text-xl font-semibold tracking-tight">Initech</span>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="w-8 h-8 border-4 border-dark rounded-tl-xl rounded-br-xl"></div>
<span className="text-xl font-serif italic">Massive</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden" id="about">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-12 -left-12 w-64 h-64 bg-tan rounded-full mix-blend-multiply opacity-50 z-0"></div>
<img alt="Workspace" className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale-[30%]" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-[280px] z-20">
<i className="w-8 h-8 text-tan mb-4" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg font-serif italic text-gray-800 leading-snug">"Success isn't about doing more. It's about being more aligned."</p>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-medium tracking-widest text-gray-500 mb-4 block uppercase">The Philosophy</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold mb-8 leading-[1.1]">
                    Stop managing time. <br/>
<span className="font-serif italic font-normal">Start managing energy.</span>
</h2>
<div className="space-y-6 text-lg text-gray-600">
<p>
                        Most high-performers are stuck in a cycle of endless doing. You've achieved conventional success, but it feels heavy. You're constantly pushing against friction.
                    </p>
<p>
                        My approach shifts the paradigm. We don't add more tasks to your plate; we strip away the non-essentials. We identify your core zone of genius and reconstruct your life and habits around it.
                    </p>
<p>
                        The result? Deep work, profound clarity, and a feeling of effortless momentum. It's not magic; it's engineered alignment.
                    </p>
</div>
<div className="mt-12 flex items-center gap-6">
<a className="group flex items-center gap-3 text-dark font-medium tracking-wide pb-1 border-b border-dark hover:text-gray-600 hover:border-gray-600 transition-colors" href="#approach">
                        Discover the framework
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-dark text-white rounded-t-[3rem] md:rounded-t-[5rem]" id="coaching">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
<div className="max-w-2xl">
<span className="text-xs font-medium tracking-widest text-gray-400 mb-4 block uppercase">Coaching Programs</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.1]">
                        Tailored pathways to <span className="font-serif italic font-normal text-tan">mastery.</span>
</h2>
</div>
<p className="text-lg text-gray-400 max-w-md">
                    Select the container that matches your ambition. Each program is strictly limited to ensure maximum impact.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-dark-gray border border-gray-800 p-10 rounded-2xl hover:border-tan transition-colors group flex flex-col h-full">
<div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center mb-8 border border-gray-700 group-hover:bg-tan group-hover:border-tan transition-colors">
<i className="w-6 h-6 text-white group-hover:text-dark transition-colors" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">1-on-1 Mentorship</h3>
<p className="text-lg text-gray-400 mb-8 flex-grow">
                        Intimate, highly personalized coaching for executives and founders. Bi-weekly sessions, direct access, and custom strategy.
                    </p>
<div className="mt-auto">
<div className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">6 Month Container</div>
<a className="flex items-center justify-between w-full border border-gray-700 py-4 px-6 rounded-full group-hover:bg-white group-hover:text-dark transition-all" href="#contact">
<span className="font-medium">Apply Now</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-dark-gray border border-tan p-10 rounded-2xl relative flex flex-col h-full overflow-hidden">
<div className="absolute top-0 right-0 bg-tan text-dark text-[10px] font-bold tracking-widest px-4 py-1 rounded-bl-lg uppercase">Most Popular</div>
<div className="absolute -right-12 -top-12 w-48 h-48 bg-tan rounded-full mix-blend-overlay opacity-10 blur-2xl"></div>
<div className="w-14 h-14 bg-tan rounded-full flex items-center justify-center mb-8 border border-tan">
<i className="w-6 h-6 text-dark" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">The Mastermind</h3>
<p className="text-lg text-gray-400 mb-8 flex-grow">
                        Join a curated group of 8 high-achievers. Peer accountability, shared resources, and collective problem-solving.
                    </p>
<div className="mt-auto relative z-10">
<div className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">Quarterly Cohorts</div>
<a className="flex items-center justify-between w-full bg-tan text-dark py-4 px-6 rounded-full hover:bg-white transition-all" href="#contact">
<span className="font-medium">Join Waitlist</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-dark-gray border border-gray-800 p-10 rounded-2xl hover:border-tan transition-colors group flex flex-col h-full">
<div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center mb-8 border border-gray-700 group-hover:bg-tan group-hover:border-tan transition-colors">
<i className="w-6 h-6 text-white group-hover:text-dark transition-colors" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">Intensive Sprint</h3>
<p className="text-lg text-gray-400 mb-8 flex-grow">
                        A focused 30-day program to break a specific plateau or launch a major initiative. Daily touchpoints and rapid iteration.
                    </p>
<div className="mt-auto">
<div className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">Results Driven</div>
<a className="flex items-center justify-between w-full border border-gray-700 py-4 px-6 rounded-full group-hover:bg-white group-hover:text-dark transition-all" href="#contact">
<span className="font-medium">Book Sprint</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-6">The Three Pillars</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">A holistic approach to redefining your potential across every area of life.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 lg:gap-20">
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-cream rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-10 h-10 text-dark" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Absolute Clarity</h3>
<p className="text-lg text-gray-600">Cut through the noise. We define exactly what you want, why you want it, and the precise steps to get there without burnout.</p>
</div>
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-cream rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-10 h-10 text-dark" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Unshakable Confidence</h3>
<p className="text-lg text-gray-600">Rewire limiting beliefs. Build a self-image that naturally supports your highest ambitions and largest goals.</p>
</div>
<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-cream rounded-full flex items-center justify-center mb-8 border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
<i className="w-10 h-10 text-dark" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Relentless Consistency</h3>
<p className="text-lg text-gray-600">Design systems, not just goals. We install frictionless habits that make progress inevitable and automatic over time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-cream border-t border-gray-200 overflow-hidden relative" id="success">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tan rounded-full mix-blend-multiply opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
<span className="text-xs font-medium tracking-widest text-gray-500 mb-4 block uppercase text-center">Success Stories</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-semibold mb-16 text-center">
                Don't just take <span className="font-serif italic font-normal">my word for it.</span>
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full relative z-10">
<div className="flex gap-1 mb-6 text-dark">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 mb-8 flex-grow font-serif italic">
                        "Working with Level Up completely changed my trajectory. I was scaling my agency but drowning in stress. Within 3 months, I doubled my revenue while taking Fridays off. The clarity is unmatched."
                    </p>
<div className="flex items-center gap-4">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h4 className="font-semibold tracking-tight text-base">Sarah Jenkins</h4>
<p className="text-sm text-gray-500">Founder, DesignCo</p>
</div>
</div>
</div>

<div className="bg-dark p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col h-full text-white relative z-10 transform md:-translate-y-4">
<div className="absolute -right-4 -top-4 w-12 h-12 bg-tan rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-dark" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<div className="flex gap-1 mb-6 text-tan">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-300 mb-8 flex-grow font-serif italic">
                        "I've worked with several coaches before, but this is different. It's not just hype; it's a systematic deconstruction of what holds you back. I've never felt more powerful or aligned in my decisions."
                    </p>
<div className="flex items-center gap-4">
<img alt="Michael C." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h4 className="font-semibold tracking-tight text-base">Michael Chen</h4>
<p className="text-sm text-gray-400">VP of Product</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full relative z-10">
<div className="flex gap-1 mb-6 text-dark">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i><i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 mb-8 flex-grow font-serif italic">
                        "The accountability and perspective shift is worth 10x the investment. I broke through a major income plateau that I had been stuck at for two years, simply by changing my daily systems."
                    </p>
<div className="flex items-center gap-4">
<img alt="Elena R." className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h4 className="font-semibold tracking-tight text-base">Elena Rodriguez</h4>
<p className="text-sm text-gray-500">Real Estate Investor</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-[1000px] mx-auto px-6 md:px-12">
<div className="text-center mb-20">
<span className="text-xs font-medium tracking-widest text-gray-500 mb-4 block uppercase">How it works</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-semibold">The Transformation Framework</h2>
</div>
<div className="space-y-12 relative">

<div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gray-100 md:left-1/2 md:-translate-x-1/2 hidden md:block"></div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-2xl font-semibold tracking-tight mb-3">1. The Deep Audit</h3>
<p className="text-lg text-gray-600">We dissect your current reality. Where are the leaks in your energy, time, and focus? We establish a brutally honest baseline.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center font-serif text-xl z-10 border-4 border-white shadow-sm order-1 md:order-none relative md:absolute">
                        1
                    </div>
<div className="md:w-1/2 order-3 md:order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 order-2 md:order-1 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 bg-tan text-dark rounded-full flex items-center justify-center font-serif text-xl z-10 border-4 border-white shadow-sm order-1 md:order-none relative md:absolute">
                        2
                    </div>
<div className="md:w-1/2 order-3 md:order-2">
<h3 className="text-2xl font-semibold tracking-tight mb-3">2. Vision &amp; Architecture</h3>
<p className="text-lg text-gray-600">We define the 'Who' and the 'Where'. We build a custom blueprint mapping exactly how to bridge the gap between your current state and desired outcome.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-2xl font-semibold tracking-tight mb-3">3. Execution &amp; Optimization</h3>
<p className="text-lg text-gray-600">Ideas are cheap. We implement rigorous accountability and daily systems. We track metrics, adjust course, and build relentless momentum.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center font-serif text-xl z-10 border-4 border-white shadow-sm order-1 md:order-none relative md:absolute">
                        3
                    </div>
<div className="md:w-1/2 order-3 md:order-2"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream border-t border-gray-200">
<div className="max-w-[800px] mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border border-gray-300 rounded-xl bg-white overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-semibold tracking-tight pr-8">Who is this coaching for?</span>
<i className="w-5 h-5 text-gray-400 transform transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-6 pb-6 text-lg text-gray-600">
                            My coaching is specifically designed for high-achieving professionals, entrepreneurs, and leaders who have experienced success but feel stuck, overwhelmed, or disconnected from their purpose. If you want to scale your life and business without sacrificing your well-being, this is for you.
                        </p>
</div>
</div>

<div className="border border-gray-300 rounded-xl bg-white overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-semibold tracking-tight pr-8">How much time will this require?</span>
<i className="w-5 h-5 text-gray-400 transform transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-6 pb-6 text-lg text-gray-600">
                            The goal is to give you time back, not take more of it. Beyond our scheduled calls (usually bi-weekly for 60 mins), expect to spend 1-2 hours a week initially setting up systems, and then 15 mins daily on maintenance and reflection.
                        </p>
</div>
</div>

<div className="border border-gray-300 rounded-xl bg-white overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-semibold tracking-tight pr-8">What is the investment?</span>
<i className="w-5 h-5 text-gray-400 transform transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-6 pb-6 text-lg text-gray-600">
                            Investment varies depending on the program (1-on-1 vs Mastermind) and duration. Premium coaching is an investment in your highest asset: yourself. We discuss specific pricing tailored to your needs during our initial discovery call to ensure ROI.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark text-white pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem] mt-[-2rem] relative z-20" id="contact">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
<div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mb-8">
<i className="w-8 h-8 text-dark" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h2 className="text-5xl md:text-7xl tracking-tight font-semibold mb-8 leading-[1.05]">
                    Ready to draw a line <br/>
<span className="font-serif italic font-normal text-tan">in the sand?</span>
</h2>
<p className="text-xl text-gray-400 mb-12 max-w-2xl">
                    Stop delaying the life you're meant to live. Book a complimentary discovery call to see if we're a fit.
                </p>
<a className="flex items-center gap-4 bg-white text-dark pl-8 pr-2 py-2 rounded-full hover:bg-tan transition-all group" href="#">
<span className="text-sm font-semibold tracking-widest uppercase">Book Your Free Call</span>
<div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-800 pt-16 mb-16">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-8 h-8 flex flex-col items-center justify-center relative bg-white rounded-full">
<div className="absolute inset-0 border-2 border-white rounded-full mix-blend-multiply flex items-center justify-center">
<div className="h-4 w-[2px] bg-dark mx-[1px]"></div>
<div className="h-3 w-[2px] bg-dark mx-[1px]"></div>
<div className="h-4 w-[2px] bg-dark mx-[1px]"></div>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight leading-none text-white">LEVEL UP</span>
</div>
</a>
<p className="text-lg text-gray-400 max-w-sm">Premium personal coaching for high achievers ready to build an extraordinary life.</p>
</div>
<div>
<h4 className="font-semibold tracking-wider text-sm uppercase mb-6 text-white">Navigation</h4>
<ul className="space-y-4 text-lg text-gray-400">
<li><a className="hover:text-tan transition-colors" href="#about">About</a></li>
<li><a className="hover:text-tan transition-colors" href="#coaching">Coaching</a></li>
<li><a className="hover:text-tan transition-colors" href="#success">Success Stories</a></li>
<li><a className="hover:text-tan transition-colors" href="#resources">Resources</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold tracking-wider text-sm uppercase mb-6 text-white">Legal</h4>
<ul className="space-y-4 text-lg text-gray-400">
<li><a className="hover:text-tan transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-tan transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-tan transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-8 text-gray-500 text-sm">
<p>© 2024 Level Up Coaching. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</section>


    </>
  );
}
