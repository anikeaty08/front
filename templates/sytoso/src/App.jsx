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



        // Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger Global Animation Function
        gsap.registerPlugin(ScrollTrigger);

        function initAnimations() {
            // Kill old triggers
            ScrollTrigger.getAll().forEach(t => t.kill());

            const revealElements = document.querySelectorAll('.page-view:not(.hidden) .gsap-reveal');
            revealElements.forEach((el) => {
                gsap.fromTo(el, 
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
            // Also animate the global CTA if it's visible
            document.querySelectorAll('#book .gsap-reveal').forEach(el => {
                 gsap.fromTo(el, 
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" }
                    }
                );
            });
        }

        // Single Page App Logic
        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(p => p.classList.add('hidden'));
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) target.classList.remove('hidden');
            
            // Scroll to top instantly
            window.scrollTo(0, 0);
            
            // Re-init animations for new view
            setTimeout(() => {
                ScrollTrigger.refresh();
                initAnimations();
            }, 100);
            
            // Close menu if open
            if(isMenuOpen) {
                menuToggle.click();
            }
        }

        // Initialize on load
        window.addEventListener('load', initAnimations);

        // Magnetic Buttons Logic
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            if (window.matchMedia("(pointer: fine)").matches) {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width/2) * 0.2;
                    const y = (e.clientY - rect.top - rect.height/2) * 0.2;
                    gsap.to(btn, { x: x, y: y, duration: 0.4, ease: "power2.out" });
                    
                    const icon = btn.querySelector('iconify-icon');
                    if(icon) gsap.to(icon, { x: x*0.5, y: y*0.5, duration: 0.4, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                    const icon = btn.querySelector('iconify-icon');
                    if(icon) gsap.to(icon, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                });
            }
        });

        // Hamburger Menu Animation
        const menuToggle = document.getElementById('menu-toggle');
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const body = document.body;
        let isMenuOpen = false;

        const menuTl = gsap.timeline({ paused: true });
        menuTl.to('.menu-overlay', { duration: 0.01, display: 'flex' })
        .fromTo('.menu-link', 
            { y: 100, opacity: 0, rotate: 5 },
            { y: 0, opacity: 1, rotate: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }, 0.2
        )
        .fromTo('.menu-footer', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.6);

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                body.classList.add('menu-open');
                lenis.stop();
                gsap.to(line1, { y: 3.5, rotate: 45, duration: 0.3, ease: "power2.inOut" });
                gsap.to(line2, { y: -3.5, rotate: -45, duration: 0.3, ease: "power2.inOut" });
                menuTl.play();
            } else {
                body.classList.remove('menu-open');
                lenis.start();
                gsap.to(line1, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
                gsap.to(line2, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
                menuTl.reverse();
                setTimeout(() => { if(!isMenuOpen) gsap.set('.menu-overlay', { display: 'none' }); }, 1000);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#E8DBC8]">
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-8 flex justify-between items-center">
<a className="relative z-50 flex items-center gap-3 magnetic-btn group" href="#" onclick="switchPage('view-home')">
<span className="font-heading font-normal text-2xl tracking-tight">SYTOSO</span>
</a>

<button className="relative z-50 flex flex-col justify-center items-center w-12 h-12 gap-1.5 magnetic-btn focus:outline-none" id="menu-toggle">
<span className="w-8 h-[1px] bg-current block transition-all duration-300 origin-center" id="line1"></span>
<span className="w-8 h-[1px] bg-current block transition-all duration-300 origin-center" id="line2"></span>
</button>
</div>
</header>

<div className="menu-overlay fixed inset-0 bg-[#4A0F2F] text-[#E8DBC8] z-40 flex flex-col justify-center px-6 md:px-24">
<nav className="flex flex-col gap-6 md:gap-10 mt-20">
<button className="menu-link text-left font-display text-5xl md:text-8xl tracking-tight hover:text-[#D96C3F] transition-colors w-max" onclick="switchPage('view-home')">Home.</button>
<button className="menu-link text-left font-display text-5xl md:text-8xl tracking-tight hover:text-[#D96C3F] transition-colors w-max" onclick="switchPage('view-services')">Services.</button>
<button className="menu-link text-left font-display text-5xl md:text-8xl tracking-tight hover:text-[#D96C3F] transition-colors w-max" onclick="switchPage('view-how')">How It Works.</button>
<button className="menu-link text-left font-display text-5xl md:text-8xl tracking-tight hover:text-[#D96C3F] transition-colors w-max" onclick="switchPage('view-cases')">Case Studies.</button>
<button className="menu-link text-left font-display text-5xl md:text-8xl tracking-tight hover:text-[#D96C3F] transition-colors w-max" onclick="switchPage('view-about')">About.</button>
</nav>
<div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 menu-footer opacity-0">
<div>
<p className="text-sm uppercase tracking-widest text-[#D96C3F] mb-4">Contact</p>
<a className="text-xl md:text-2xl hover:opacity-70 transition-opacity" href="mailto:hassan@sytoso.com">hassan@sytoso.com</a>
</div>
<button className="inline-flex items-center gap-2 text-[#E8DBC8] bg-[#D96C3F] px-8 py-4 rounded-full text-base font-normal hover:scale-105 transition-transform magnetic-btn" onclick="document.getElementById('book').scrollIntoView(); if(isMenuOpen) menuToggle.click();">
                Book a Free Audit
                <iconify-icon className="stroke-[1.5]" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<main id="app">

<div className="page-view block" id="view-home">
<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
<div className="max-w-screen-xl mx-auto w-full relative z-10">
<div className="gsap-reveal overflow-hidden mb-8">
<span className="inline-block text-[#D96C3F] font-normal tracking-widest uppercase text-sm border border-[#D96C3F]/30 rounded-full px-4 py-1.5">
                            B2B AI Automation &amp; SEO Agency
                        </span>
</div>
<h1 className="font-heading font-normal text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-balance mb-10 text-[#4A0F2F]">
<span className="block gsap-reveal">Your B2B company</span>
<span className="block gsap-reveal">should run like a <span className="font-display text-[#D96C3F]">machine.</span></span>
<span className="block gsap-reveal text-4xl md:text-6xl lg:text-7xl mt-4 opacity-70 font-light">Right now, you're the machine.</span>
</h1>
<p className="gsap-reveal max-w-2xl text-xl md:text-2xl text-[#4A0F2F]/80 leading-relaxed mb-12 text-balance">
                        Sytoso builds the AI automation and search infrastructure that lets B2B companies operate at the level of companies 3x their size — without hiring anyone new.
                    </p>
<div className="gsap-reveal flex flex-col sm:flex-row items-center gap-6">
<button className="magnetic-btn group relative inline-flex items-center justify-center gap-3 bg-[#D96C3F] text-[#E8DBC8] px-8 py-5 rounded-full text-lg overflow-hidden w-full sm:w-auto" onclick="document.getElementById('book').scrollIntoView();">
<span className="relative z-10 font-normal">Book Workflow Drain Audit</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[1.5]" height="24" icon="solar:arrow-up-right-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-[#4A0F2F] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
</button>
<button className="magnetic-btn inline-flex items-center gap-2 text-[#4A0F2F] hover:text-[#D96C3F] transition-colors py-4 font-normal text-lg" onclick="switchPage('view-how')">
                            See How It Works
                        </button>
</div>
</div>
</section>
<section className="py-24 border-y border-[#4A0F2F]/10 overflow-hidden relative bg-white/30 backdrop-blur-sm">
<div className="max-w-screen-xl mx-auto px-6 md:px-12 mb-12">
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/60 font-normal">Trusted by B2B founders who got tired of waiting.</p>
</div>
<div className="flex gap-12 md:gap-24 whitespace-nowrap px-6 md:px-12 pb-16 gsap-reveal">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D96C3F] stroke-[1.5]" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="font-heading text-2xl md:text-3xl tracking-tight">50 days to #1 Google ranking</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D96C3F] stroke-[1.5]" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="font-heading text-2xl md:text-3xl tracking-tight">150+ new appointments/month</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D96C3F] stroke-[1.5]" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="font-heading text-2xl md:text-3xl tracking-tight">45 AI search mentions. Zero paid ads.</span>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-services">
<section className="pt-40 pb-20 px-6 md:px-12 relative z-10 bg-[#E8DBC8]">
<div className="max-w-screen-xl mx-auto">
<div className="mb-24 text-center max-w-3xl mx-auto gsap-reveal">
<span className="text-[#D96C3F] font-normal tracking-widest uppercase text-sm mb-4 block">Infrastructure</span>
<h1 className="font-heading font-normal text-5xl md:text-7xl tracking-tight text-[#4A0F2F] text-balance">
                            Stop paying for hours. <br/>
<span className="font-display">Start buying systems.</span>
</h1>
<p className="mt-8 text-xl text-[#4A0F2F]/70 text-balance">We don't do retainers for manual labor. We build fixed-price infrastructure that replaces it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-10 md:p-12 border border-[#4A0F2F]/10 flex flex-col h-full gsap-reveal">
<iconify-icon className="text-[#D96C3F] mb-8 stroke-[1.5]" height="48" icon="solar:cpu-linear" width="48"></iconify-icon>
<h3 className="font-heading font-normal text-3xl tracking-tight text-[#4A0F2F] mb-2">Ops Autopilot</h3>
<p className="text-[#4A0F2F]/70 mb-8 flex-grow text-lg">We build 3-5 custom AI workflows to handle onboarding, CRM updates, and lead routing instantly.</p>
<div className="p-4 bg-[#E8DBC8]/50 rounded-2xl mb-6">
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/60 mb-1">Pricing</p>
<p className="font-normal text-[#4A0F2F]">$3,500 setup + $1,500/month</p>
</div>
<ul className="flex flex-col gap-3 text-base text-[#4A0F2F]/80">
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> 30-day go-live</li>
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> Saves 10-20 hrs/week</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-10 md:p-12 border border-[#4A0F2F]/10 flex flex-col h-full gsap-reveal">
<iconify-icon className="text-[#D96C3F] mb-8 stroke-[1.5]" height="48" icon="solar:chart-square-linear" width="48"></iconify-icon>
<h3 className="font-heading font-normal text-3xl tracking-tight text-[#4A0F2F] mb-2">SEO Foundation</h3>
<p className="text-[#4A0F2F]/70 mb-8 flex-grow text-lg">Get found by buyers already searching. We build the architecture and content to rank page one.</p>
<div className="p-4 bg-[#E8DBC8]/50 rounded-2xl mb-6">
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/60 mb-1">Pricing</p>
<p className="font-normal text-[#4A0F2F]">$500 setup + $1,500/month</p>
</div>
<ul className="flex flex-col gap-3 text-base text-[#4A0F2F]/80">
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> 90-day page one rankings</li>
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> Conversion-focused content</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-10 md:p-12 border border-[#4A0F2F]/10 flex flex-col h-full gsap-reveal">
<iconify-icon className="text-[#D96C3F] mb-8 stroke-[1.5]" height="48" icon="solar:stars-linear" width="48"></iconify-icon>
<h3 className="font-heading font-normal text-3xl tracking-tight text-[#4A0F2F] mb-2">AI Search Authority</h3>
<p className="text-[#4A0F2F]/70 mb-8 flex-grow text-lg">We engineer your brand's presence so ChatGPT and Perplexity cite you as the top solution.</p>
<div className="p-4 bg-[#E8DBC8]/50 rounded-2xl mb-6">
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/60 mb-1">Pricing</p>
<p className="font-normal text-[#4A0F2F]">$500 setup + $2,000/month</p>
</div>
<ul className="flex flex-col gap-3 text-base text-[#4A0F2F]/80">
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> LLM optimization (AEO)</li>
<li className="flex gap-2"><iconify-icon className="text-[#D96C3F] shrink-0 mt-1" icon="solar:check-circle-linear"></iconify-icon> Mentioned in AI answers</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-how">
<section className="pt-40 pb-32 px-6 md:px-12 bg-[#4A0F2F] text-[#E8DBC8] min-h-screen">
<div className="max-w-screen-xl mx-auto">
<div className="mb-24 text-center max-w-3xl mx-auto gsap-reveal">
<span className="text-[#D96C3F] font-normal tracking-widest uppercase text-sm mb-4 block">The WIRE Method</span>
<h1 className="font-heading font-normal text-5xl md:text-7xl tracking-tight text-balance">
                            Four steps to a <br/> <span className="font-display text-[#E8DBC8]/70">self-driving business.</span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 relative">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E8DBC8]/10 -translate-x-1/2"></div>

<div className="md:text-right relative pr-0 md:pr-12 md:pb-16 gsap-reveal">
<span className="text-[#D96C3F] font-heading text-2xl mb-4 block">01 / Workflow Audit</span>
<p className="text-[#E8DBC8]/70 text-lg font-light">We map where your team loses time and identify the automations with the highest ROI.</p>
</div>
<div className="hidden md:block"></div>
<div className="hidden md:block"></div>
<div className="relative pl-0 md:pl-12 md:pb-16 gsap-reveal border-t border-[#E8DBC8]/10 md:border-none pt-8 md:pt-0">
<span className="text-[#D96C3F] font-heading text-2xl mb-4 block">02 / Infrastructure Blueprint</span>
<p className="text-[#E8DBC8]/70 text-lg font-light">We design your automation stack and search infrastructure before touching a tool.</p>
</div>
<div className="md:text-right relative pr-0 md:pr-12 md:pb-16 gsap-reveal border-t border-[#E8DBC8]/10 md:border-none pt-8 md:pt-0">
<span className="text-[#D96C3F] font-heading text-2xl mb-4 block">03 / Rapid Build Sprint</span>
<p className="text-[#E8DBC8]/70 text-lg font-light">We build, test, and launch. Standard builds go live in 2–3 weeks without your management.</p>
</div>
<div className="hidden md:block"></div>
<div className="hidden md:block"></div>
<div className="relative pl-0 md:pl-12 gsap-reveal border-t border-[#E8DBC8]/10 md:border-none pt-8 md:pt-0">
<span className="text-[#D96C3F] font-heading text-2xl mb-4 block">04 / Evolve &amp; Compound</span>
<p className="text-[#E8DBC8]/70 text-lg font-light">We monitor, maintain, and improve monthly. Your infrastructure gets stronger over time.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-cases">
<section className="pt-40 pb-20 px-6 md:px-12 bg-[#E8DBC8] min-h-screen">
<div className="max-w-screen-xl mx-auto">
<div className="mb-20 gsap-reveal">
<span className="text-[#D96C3F] font-normal tracking-widest uppercase text-sm mb-4 block">Proof of Concept</span>
<h1 className="font-heading font-normal text-5xl md:text-7xl tracking-tight text-[#4A0F2F]">
                            Don't trust the pitch. <br/>
<span className="font-display">Trust the data.</span>
</h1>
</div>
<div className="space-y-12">

<div className="bg-white rounded-[3rem] p-8 md:p-16 border border-[#4A0F2F]/10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center gsap-reveal">
<div>
<h2 className="font-heading font-normal text-4xl tracking-tight text-[#4A0F2F] mb-6">Sight Specialists</h2>
<p className="text-[#4A0F2F]/80 text-lg mb-8 leading-relaxed">Combined SEO Foundation and AI Search Authority transformed this local practice from invisible to dominating search and AI recommendations.</p>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/50 mb-1">Time to #1</p>
<p className="font-heading text-3xl text-[#D96C3F]">50 Days</p>
</div>
<div>
<p className="text-sm uppercase tracking-widest text-[#4A0F2F]/50 mb-1">New Appts</p>
<p className="font-heading text-3xl text-[#4A0F2F]">150+/mo</p>
</div>
</div>
</div>
<div className="bg-[#E8DBC8]/30 rounded-3xl p-8 border border-[#4A0F2F]/5">
<p className="text-sm text-[#4A0F2F]/50 uppercase tracking-wider font-normal mb-4">AI Search Context Mention</p>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-[#10A37F] flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:smart-speaker-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-[#4A0F2F]/80 bg-white p-4 rounded-xl rounded-tl-none border border-[#4A0F2F]/5">
                                        "Based on your location, I highly recommend <strong className="text-[#4A0F2F]">Sight Specialists</strong>. They are consistently rated as the top provider..."
                                    </p>
</div>
</div>
</div>

<div className="bg-[#4A0F2F] rounded-[3rem] p-8 md:p-16 text-[#E8DBC8] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center gsap-reveal">
<div className="order-2 lg:order-1 bg-white/5 rounded-3xl p-8 border border-white/10">
<div className="space-y-6">
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-[#E8DBC8]/70">Lead Processing</span>
<span className="text-[#D96C3F]">Instant (was 24h)</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-[#E8DBC8]/70">Manual Data Entry</span>
<span className="text-[#D96C3F]">0 hrs (was 15h/wk)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-[#E8DBC8]/70">System Uptime</span>
<span className="text-[#D96C3F]">99.9%</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-heading font-normal text-4xl tracking-tight mb-6">TechFlow Logistics</h2>
<p className="text-[#E8DBC8]/70 text-lg leading-relaxed">Replaced two part-time virtual assistants with a continuous AI workflow for lead routing and CRM synchronization.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="view-about">
<section className="pt-40 pb-20 px-6 md:px-12 bg-[#E8DBC8] min-h-screen">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="gsap-reveal">
<span className="text-[#D96C3F] font-normal tracking-widest uppercase text-sm mb-4 block">The Philosophy</span>
<h1 className="font-heading font-normal text-5xl md:text-7xl tracking-tight text-[#4A0F2F] mb-8">
                            Founded on <br/><span className="font-display">frustration.</span>
</h1>
<div className="space-y-6 text-[#4A0F2F]/80 text-lg font-light leading-relaxed">
<p>I watched B2B founders burn out trying to manually operate businesses that should have been running on autopilot.</p>
<p>Agencies were charging massive monthly retainers just to write generic blog posts or manually copy-paste data across spreadsheets. They profited off the inefficiency.</p>
<p>Sytoso was built to do the opposite. We build infrastructure once, automate the manual drain, and align your brand with how modern buyers search (AI and Google). No bloat. Just systems that scale without you.</p>
<p className="font-normal text-[#4A0F2F] pt-4">— Muhammad Hassan, Founder</p>
</div>
</div>
<div className="relative bg-white rounded-3xl overflow-hidden border border-[#4A0F2F]/10 min-h-[400px] gsap-reveal">

<div className="absolute inset-0 flex items-center justify-center bg-[#4A0F2F]/5">
<iconify-icon className="text-[#D96C3F]/20 stroke-[1]" height="120" icon="solar:pulse-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</section>
</div>

<section className="py-32 px-6 md:px-12 bg-[#E8DBC8] relative overflow-hidden z-30 border-t border-[#4A0F2F]/10" id="book">
<div className="max-w-screen-lg mx-auto bg-white rounded-[3rem] p-8 md:p-16 border border-[#4A0F2F]/10 shadow-2xl relative z-10 flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 gsap-reveal">
<span className="text-[#D96C3F] font-normal tracking-widest uppercase text-sm mb-4 block">Start here</span>
<h2 className="font-heading font-normal text-5xl md:text-6xl tracking-tight text-[#4A0F2F] mb-6 leading-none">
                        Stop being the bottleneck.
                    </h2>
<p className="text-[#4A0F2F]/70 text-lg mb-8 leading-relaxed">
                        Book a free 30-minute Workflow Drain Audit. We'll identify the 3 biggest time drains in your business and show you exactly what we'd automate first.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="magnetic-btn bg-[#4A0F2F] text-[#E8DBC8] px-8 py-4 rounded-full font-normal hover:bg-[#D96C3F] transition-colors flex items-center justify-center gap-2">
                            Book My Free Audit <iconify-icon className="stroke-[1.5]" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="w-full md:w-[400px] bg-[#E8DBC8]/30 rounded-2xl p-6 border border-[#4A0F2F]/5 gsap-reveal">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#4A0F2F] flex items-center justify-center text-[#E8DBC8] font-heading tracking-tighter">MH</div>
<div>
<p className="font-normal text-[#4A0F2F] leading-tight">Muhammad Hassan</p>
<p className="text-xs text-[#4A0F2F]/50">Workflow Drain Audit</p>
</div>
</div>
<iconify-icon className="text-[#4A0F2F]/30 stroke-[1.5]" height="24" icon="solar:videocamera-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="p-4 bg-white rounded-xl border border-[#4A0F2F]/5 flex justify-between items-center cursor-pointer hover:border-[#D96C3F]/50 transition-colors">
<span className="text-[#4A0F2F] font-normal">Tomorrow</span>
<span className="text-xs text-[#D96C3F] bg-[#D96C3F]/10 px-3 py-1 rounded-full">3 times</span>
</div>
<div className="p-4 bg-white rounded-xl border border-[#4A0F2F]/5 flex justify-between items-center cursor-pointer hover:border-[#D96C3F]/50 transition-colors">
<span className="text-[#4A0F2F] font-normal">Thursday</span>
<span className="text-xs text-[#D96C3F] bg-[#D96C3F]/10 px-3 py-1 rounded-full">5 times</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#2A081A] text-[#E8DBC8]/60 py-20 px-6 md:px-12 border-t border-white/10">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6 text-[#E8DBC8]">
<span className="font-heading font-normal text-2xl tracking-tight">SYTOSO</span>
</div>
<p className="max-w-xs text-sm leading-relaxed font-light">
                    B2B AI Automation &amp; SEO Agency.<br/>
                    Turning founder-dependent businesses into machines since 2026.
                </p>
</div>
<div>
<h4 className="text-[#E8DBC8] font-normal mb-6 uppercase tracking-widest text-xs">Services</h4>
<ul className="space-y-4 text-sm font-light">
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-services')">Ops Autopilot</button></li>
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-services')">SEO Foundation</button></li>
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-services')">AI Search Authority</button></li>
</ul>
</div>
<div>
<h4 className="text-[#E8DBC8] font-normal mb-6 uppercase tracking-widest text-xs">Company</h4>
<ul className="space-y-4 text-sm font-light">
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-about')">About</button></li>
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-how')">How It Works</button></li>
<li><button className="hover:text-[#D96C3F] transition-colors" onclick="switchPage('view-cases')">Case Studies</button></li>
</ul>
</div>
</div>
<div className="max-w-screen-xl mx-auto flex justify-between items-center pt-8 border-t border-white/10 text-xs font-light">
<p>© 2026 Sytoso LLC.</p>
<a className="hover:text-[#E8DBC8] transition-colors" href="mailto:hassan@sytoso.com">hassan@sytoso.com</a>
</div>
</footer>


    </>
  );
}
