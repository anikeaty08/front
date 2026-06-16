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



        function showPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                window.scrollTo(0, 0);
            }
        }

        // Animation on scroll observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-fade').forEach((el) => {
            observer.observe(el);
        });

        // Webhook Form Submission Handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerText;
            
            // UI Loading State
            submitBtn.innerText = 'SENDING...';
            submitBtn.disabled = true;

            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Replace with your actual webhook URL
            const WEBHOOK_URL = 'https://n8n-axze.onrender.com/webhook/ec5efefe-7337-472a-b6c5-325b80ff8ea8';

            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if(response.ok) {
                    submitBtn.innerText = 'MESSAGE SENT';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Submission Error:', error);
                submitBtn.innerText = 'ERROR - TRY AGAIN';
            })
            .finally(() => {
                // Reset button text after 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex max-w-7xl mx-auto p-6 items-center justify-between">

<button className="z-50 group block cursor-pointer text-left focus:outline-none" onclick="showPage('home')" type="button">
<div className="text-sm tracking-[0.2em] font-light text-white group-hover:text-stone-400 transition-colors">POOL WATER CREATIONS</div>
<div className="text-xs tracking-widest text-stone-500 uppercase mt-1">Where Water Becomes Art.</div>
</button>

<div className="hidden md:flex space-x-12 items-center">
<button className="nav-link text-xs tracking-widest uppercase hover:text-stone-400 transition-colors py-1 focus:outline-none" onclick="showPage('about')" type="button">About</button>
<button className="nav-link text-xs tracking-widest uppercase hover:text-stone-400 transition-colors py-1 focus:outline-none" onclick="showPage('services')" type="button">Services</button>
<button className="nav-link text-xs tracking-widest uppercase hover:text-stone-400 transition-colors py-1 focus:outline-none" onclick="showPage('portfolio')" type="button">Portfolio</button>
<button className="nav-link text-xs tracking-widest uppercase hover:text-stone-400 transition-colors py-1 focus:outline-none" onclick="showPage('financing')" type="button">Financing</button>
<button className="uppercase hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-widest border-white/20 border py-3 px-6 focus:outline-none" onclick="showPage('contact')" type="button">
                    Consultation
                </button>
</div>

<button className="md:hidden text-white focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-stone-900 border-b border-white/10 md:hidden p-8 flex flex-col space-y-6 z-40" id="mobile-menu">
<button className="text-left text-sm tracking-widest uppercase focus:outline-none" onclick="showPage('about'); document.getElementById('mobile-menu').classList.add('hidden')" type="button">About</button>
<button className="text-left text-sm tracking-widest uppercase focus:outline-none" onclick="showPage('services'); document.getElementById('mobile-menu').classList.add('hidden')" type="button">Services</button>
<button className="text-left text-sm tracking-widest uppercase focus:outline-none" onclick="showPage('portfolio'); document.getElementById('mobile-menu').classList.add('hidden')" type="button">Portfolio</button>
<button className="text-left text-sm tracking-widest uppercase focus:outline-none" onclick="showPage('financing'); document.getElementById('mobile-menu').classList.add('hidden')" type="button">Financing</button>
<button className="text-left text-sm tracking-widest uppercase focus:outline-none" onclick="showPage('contact'); document.getElementById('mobile-menu').classList.add('hidden')" type="button">Contact</button>
</div>
</nav>

<main className="" id="main-content">

<div className="page-section animate-fade opacity-100 translate-y-0" id="home">

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Infinity Pool" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0c0c0c]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<h1 className="serif text-4xl md:text-7xl font-extralight text-white leading-tight tracking-tight mb-6 fade-in" style={{animationDelay: '0.2s'}}>
                        Luxury Pools Designed <br/> <span className="italic text-stone-300">to Be Lived In.</span>
</h1>
<p className="text-sm md:text-lg text-stone-200 font-extralight tracking-wide mb-10 max-w-2xl mx-auto fade-in" style={{animationDelay: '0.4s'}}>
                        Custom-crafted outdoor environments that redefine your home.
                    </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center fade-in" style={{animationDelay: '0.6s'}}>
<button className="uppercase hover:bg-stone-200 transition-colors focus:outline-none text-xs text-black tracking-[0.2em] bg-white pt-4 pr-8 pb-4 pl-8" onclick="showPage('contact')" type="button">FREE Consultation</button>
<button className="flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase hover:text-stone-300 transition-colors group focus:outline-none" onclick="showPage('portfolio')" type="button">
                            View Portfolio 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-[#0c0c0c]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="serif text-3xl md:text-5xl text-white mb-8 leading-tight font-extralight tracking-tight">
                            Built Like Architecture. <br/> Crafted Like Art.
                        </h2>
</div>
<div className="space-y-6 text-stone-400 font-extralight text-sm md:text-base leading-relaxed">
<p className="">
                            We do not simply dig holes; we engineer water. Pool Water Creations sits at the intersection of high-end structural engineering and aesthetic mastery.
                        </p>
<p className="">
                            We serve a discerning clientele who understand that a pool is not an accessory, but an extension of the architectural integrity of their estate. Our approach is design-first, detail-obsessed, and executed with white-glove precision.
                        </p>
<div className="pt-4 flex gap-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:ruler-pen-linear" width="20"></iconify-icon>
<span className="text-xs tracking-widest uppercase text-white">Design First</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs tracking-widest uppercase text-white">Engineering Precision</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="serif text-3xl md:text-4xl text-white font-extralight tracking-tight">Signature Services</h2>
<button className="hidden md:block text-xs tracking-widest uppercase text-stone-500 hover:text-white transition-colors focus:outline-none" onclick="showPage('services')" type="button">View Details</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="group relative bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 md:border-r-0 aspect-square flex flex-col justify-between">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
<div>
<h3 className="serif text-xl tracking-tight text-white mb-2">Custom Pool Design</h3>
<p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-400">Architectural-grade blueprints and 3D visualization for bespoke aquatic environments.</p>
</div>
</div>

<div className="group relative bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 md:border-r-0 aspect-square flex flex-col justify-between">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:water-sun-linear" width="32"></iconify-icon>
<div>
<h3 className="serif text-xl tracking-tight text-white mb-2">Infinity &amp; Negative Edge</h3>
<p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-400">Vanishing edges that seamlessly blend water with the horizon for a boundless aesthetic.</p>
</div>
</div>

<div className="group relative bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 aspect-square flex flex-col justify-between">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:sofa-linear" width="32"></iconify-icon>
<div>
<h3 className="serif text-xl tracking-tight text-white mb-2">Integrated Living</h3>
<p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-400">Sunken lounges, outdoor kitchens, and hardscapes unified with the water design.</p>
</div>
</div>

<div className="group relative bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 md:border-t-0 md:border-r-0 aspect-square flex flex-col justify-between">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:flame-linear" width="32"></iconify-icon>
<div>
<h3 className="serif text-xl tracking-tight text-white mb-2">Water &amp; Fire Features</h3>
<p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-400">Elemental contrasts utilizing automated fire bowls, sheer descents, and lighting.</p>
</div>
</div>

<div className="group relative bg-[#111] p-10 hover:bg-[#161616] transition-colors border border-white/5 md:border-t-0 aspect-square md:col-span-2 flex flex-col justify-between">
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:home-smile-linear" width="32"></iconify-icon>
<div>
<h3 className="serif text-xl tracking-tight text-white mb-2">Estate Renovations</h3>
<p className="text-xs text-stone-500 leading-relaxed max-w-md group-hover:text-stone-400">Modernizing existing structures with contemporary finishes, automation, and structural enhancements to match current luxury standards.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0c0c0c]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="serif text-3xl md:text-4xl tracking-tight text-white font-extralight mb-12">Curated Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="showPage('portfolio')">
<div className="overflow-hidden mb-4">
<img alt="Modern Hillside Retreat" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b6182aa-6ad2-4c32-ae67-2ce57ad7a64e_1600w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="serif text-2xl tracking-tight text-white mb-1">Modern Hillside Retreat</h3>
<p className="uppercase text-xs text-stone-500 tracking-wide">MALIBU, CA</p>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-24" onclick="showPage('portfolio')">
<div className="overflow-hidden mb-4">
<img alt="Desert Contemporary Escape" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c900fb4-f99b-42a7-9dcb-5643e84191bf_1600w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="serif text-2xl tracking-tight text-white mb-1">Desert Contemporary Escape</h3>
<p className="text-xs text-stone-500 tracking-wide uppercase">Palm Springs, CA</p>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer" onclick="showPage('portfolio')">
<div className="overflow-hidden mb-4">
<img alt="Coastal Infinity Residence" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da11f786-f477-493e-8ef9-826de4f014f4_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="serif text-2xl tracking-tight text-white mb-1">Modern Residence</h3>
<p className="uppercase text-xs text-stone-500 tracking-wide">HunTINGTON BEACH, CA</p>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-24" onclick="showPage('portfolio')">
<div className="overflow-hidden mb-4">
<img alt="Estate Courtyard Oasis" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d04aff6-7338-48fa-8cdb-45fb63bdff43_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="serif text-2xl tracking-tight text-white mb-1">Estate Courtyard Oasis</h3>
<p className="text-xs text-stone-500 tracking-wide uppercase">Montecito, CA</p>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900">
<div className="max-w-4xl mx-auto px-6">
<h2 className="serif md:text-4xl text-3xl tracking-tight font-extralight text-white text-center mb-16">Our Client Experience</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">

<div className="relative pl-12 md:flex md:gap-12 md:pl-0 md:items-baseline">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-white rounded-full md:hidden"></span>
<div className="hidden md:block w-32 text-right text-xs tracking-widest text-stone-500 uppercase">Phase 01</div>
<div className="md:border-l md:border-white/10 md:pl-12 pb-2 flex-1">
<h3 className="text-lg font-light text-white mb-2">Free Consultation</h3>
<p className="text-sm text-stone-400 font-extralight max-w-md">An in-depth site analysis and discovery session to understand your lifestyle, aesthetic preferences, and the property's potential.</p>
</div>
</div>

<div className="relative pl-12 md:flex md:gap-12 md:pl-0 md:items-baseline">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-stone-700 rounded-full md:hidden"></span>
<div className="hidden md:block w-32 text-right text-xs tracking-widest text-stone-500 uppercase">Phase 02</div>
<div className="md:border-l md:border-white/10 md:pl-12 pb-2 flex-1">
<h3 className="text-lg font-light text-white mb-2">Concept &amp; 3D Design Development</h3>
<p className="text-sm text-stone-400 font-extralight max-w-md">We create photorealistic renderings and architectural plans, allowing you to walk through the space virtually before ground is broken.</p>
</div>
</div>

<div className="relative pl-12 md:flex md:gap-12 md:pl-0 md:items-baseline">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-stone-700 rounded-full md:hidden"></span>
<div className="hidden md:block w-32 text-right text-xs tracking-widest text-stone-500 uppercase">Phase 03</div>
<div className="md:border-l md:border-white/10 md:pl-12 pb-2 flex-1">
<h3 className="text-lg font-light text-white mb-2">Structural Engineering &amp; Planning</h3>
<p className="text-sm text-stone-400 font-extralight max-w-md">Rigorous engineering ensures longevity. We handle all permitting and compliance with local luxury building codes.</p>
</div>
</div>

<div className="relative pl-12 md:flex md:gap-12 md:pl-0 md:items-baseline">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-stone-700 rounded-full md:hidden"></span>
<div className="hidden md:block w-32 text-right text-xs tracking-widest text-stone-500 uppercase">Phase 04</div>
<div className="md:border-l md:border-white/10 md:pl-12 pb-2 flex-1">
<h3 className="text-lg font-light text-white mb-2">Precision Build Execution</h3>
<p className="text-sm text-stone-400 font-extralight max-w-md">Our master craftsmen execute the build using the finest materials, from Italian porcelain to rare natural stones, with minimal site disruption.</p>
</div>
</div>

<div className="relative pl-12 md:flex md:gap-12 md:pl-0 md:items-baseline">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-stone-700 rounded-full md:hidden"></span>
<div className="hidden md:block w-32 text-right text-xs tracking-widest text-stone-500 uppercase">Phase 05</div>
<div className="md:border-l md:border-white/10 md:pl-12 pb-2 flex-1">
<h3 className="text-lg font-light text-white mb-2">Final Reveal &amp; Walkthrough</h3>
<p className="text-sm text-stone-400 font-extralight max-w-md">We commission the systems, balance the chemistry, and present you with your completed private oasis.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0c0c0c]">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-4">
<div className="flex justify-center text-white mb-2">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="serif text-xl tracking-tight text-white italic">"Pool Water Creations didn't just build a pool; they curated an atmosphere. The precision is unmatched."</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">— J. Sterling, Holmby Hills</p>
</div>
<div className="space-y-4">
<div className="flex justify-center text-white mb-2">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="serif text-xl tracking-tight text-white italic">"The process was as elegant as the final result. A truly white-glove experience from design to first swim."</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">— The Davies Family, Laguna Beach</p>
</div>
<div className="space-y-4">
<div className="flex justify-center text-white mb-2">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="serif text-xl tracking-tight text-white italic">"They understood that we wanted water to be a visual element of the architecture. Absolutely stunning."</p>
<p className="text-xs text-stone-500 uppercase tracking-widest">— M. Al-Fayed, Hidden Hills</p>
</div>
</div>
</div>
</section>

<section className="text-center bg-stone-950 pt-32 pr-6 pb-32 pl-6">
<h2 className="serif text-4xl md:text-6xl tracking-tight text-white font-extralight mb-8">Let’s Build Something Exceptional.</h2>
<button className="uppercase hover:bg-stone-200 transition-colors focus:outline-none text-xs text-black tracking-[0.2em] bg-white pt-5 pr-10 pb-5 pl-10" onclick="showPage('contact')" type="button">Schedule Your Free Consultation</button>
</section>
</div>

<div className="page-section hidden animate-fade pt-32 min-h-screen" id="about">
<div className="max-w-4xl mx-auto px-6 pb-24">
<h1 className="serif text-5xl md:text-7xl tracking-tight text-white font-extralight mb-12">Designing Water <br/>as Architecture.</h1>
<div className="prose prose-invert prose-lg text-stone-400 font-extralight mb-16 leading-loose">
<p className="first-letter:text-5xl first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:serif">
                        At Pool Water Creations, we believe that water is the most dynamic architectural element available to man. It reflects the sky, softens hard edges, and brings movement to stillness.
                    </p>
<p>
                        Founded on the principles of modernist architecture and structural integrity, we are not just pool builders; we are curators of outdoor space. Our philosophy is rooted in the belief that a pool should not compete with its environment but enhance it—creating a seamless dialogue between the home, the landscape, and the water.
                    </p>
<p>
                        We limit our engagement to a select number of projects each year. This intentional scarcity allows our senior team to maintain uncompromising oversight on every detail, from the hydraulics engineering to the hand-selection of stone coping. We construct legacy environments designed to endure for generations.
                    </p>
</div>
<div className="border-t border-white/10 pt-16">
<h3 className="text-xs tracking-widest uppercase text-white mb-12 text-center">The Leadership</h3>
<div className="flex justify-center">
<div className="w-full md:w-1/3 text-center">
<div className="h-[300px] bg-stone-900 mb-4 grayscale hover:grayscale-0 transition-all overflow-hidden">
<img alt="Founder Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10df6805-b074-46aa-a35e-9d238f83fdb3_800w.jpg"/>
</div>
<h4 className="serif text-xl tracking-tight text-white">D</h4>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-1">Founder</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden animate-fade pt-32 min-h-screen" id="services">
<div className="max-w-7xl mx-auto px-6 pb-24">
<h1 className="serif text-5xl tracking-tight text-white font-extralight mb-16 border-b border-white/10 pb-8">Our Capabilities</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">

<div className="group">
<div className="h-[1px] w-full bg-stone-800 mb-6 group-hover:bg-white transition-colors duration-500"></div>
<h2 className="serif text-3xl tracking-tight text-white mb-6">Custom Pools</h2>
<ul className="space-y-4 text-stone-400 font-extralight text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Luxury shotcrete Construction:</strong> Engineered for maximum durability and design flexibility.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Infinity Edge Systems:</strong> Precision catch basins for the perfect glass-like overflow.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Geometric &amp; Organic:</strong> From crisp modernist lines to naturalistic lagoon styling.</span>
</li>
</ul>
</div>

<div className="group">
<div className="h-[1px] w-full bg-stone-800 mb-6 group-hover:bg-white transition-colors duration-500"></div>
<h2 className="serif text-3xl tracking-tight text-white mb-6">Outdoor Living Integration</h2>
<ul className="space-y-4 text-stone-400 font-extralight text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Sunken Lounges:</strong> In-pool seating areas with fire features for intimate gatherings.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Outdoor Kitchens:</strong> Chef-grade culinary stations seamlessly built into the hardscape.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Covered Patios:</strong> Architectural structures providing shade and shelter.</span>
</li>
</ul>
</div>

<div className="group">
<div className="h-[1px] w-full bg-stone-800 mb-6 group-hover:bg-white transition-colors duration-500"></div>
<h2 className="serif text-3xl tracking-tight text-white mb-6">Water Features</h2>
<ul className="space-y-4 text-stone-400 font-extralight text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Sheer Descents:</strong> Modern water walls creating auditory masking and visual calm.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Cascading Waterfalls:</strong> Natural stone formations engineered for specific flow rates.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Reflecting Basins:</strong> Shallow, still water features designed to mirror architecture.</span>
</li>
</ul>
</div>

<div className="group">
<div className="h-[1px] w-full bg-stone-800 mb-6 group-hover:bg-white transition-colors duration-500"></div>
<h2 className="serif text-3xl tracking-tight text-white mb-6">Technological &amp; Fire</h2>
<ul className="space-y-4 text-stone-400 font-extralight text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Smart Automation:</strong> Full control of lighting, temperature, and flow via smartphone.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Fire Bowls &amp; Linear Fire:</strong> Automated gas features for drama and warmth.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-white" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="text-white font-light">Architectural Lighting:</strong> Low-voltage LED systems to illuminate the estate at night.</span>
</li>
</ul>
</div>
</div>
<div className="mt-24 text-center">
<button className="bg-white text-black px-10 py-5 text-xs tracking-[0.2em] uppercase hover:bg-stone-200 transition-colors focus:outline-none" onclick="showPage('contact')" type="button">
                        Discuss Your Project
                    </button>
</div>
</div>
</div>

<div className="page-section hidden animate-fade pt-32 min-h-screen" id="portfolio">
<div className="max-w-7xl mx-auto px-6 pb-24">
<h1 className="serif text-5xl tracking-tight text-white font-extralight mb-16">Selected Works</h1>
<div className="space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="order-2 lg:order-1 space-y-6">
<h2 className="serif text-3xl tracking-tight text-white">The Skyline Infinity</h2>
<div className="w-12 h-[1px] bg-white/30"></div>
<p className="text-stone-400 font-extralight leading-relaxed">
                                Perched on a promontory in the Hollywood Hills, this project required extensive structural design to support a 60-foot negative edge pool. The water appears to spill directly into the city lights below.
                            </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div>
<p className="text-xs uppercase tracking-widest text-stone-500">Materials</p>
<p className="text-sm text-white">Black Absolute Granite, Teak</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-stone-500">Features</p>
<p className="text-sm text-white">Zero-Edge, Floating Spa</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 h-[500px] overflow-hidden">
<img alt="Hollywood Hills Pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/874787cd-c46f-4056-ac7e-e888bb4fe7c1_1600w.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="h-[500px] overflow-hidden">
<img alt="Mid-Century Pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da11f786-f477-493e-8ef9-826de4f014f4_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="space-y-6 flex flex-col justify-center">
<h2 className="serif text-3xl tracking-tight text-white">Mid-Century Modernization</h2>
<div className="w-12 h-[1px] bg-white/30"></div>
<p className="text-stone-400 font-extralight leading-relaxed">
                                A faithful restoration of an original 1960s footprint, upgraded with modern hydraulics and a new pebble sheen finish. The design honors the original architecture while introducing automated fire features.
                            </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div>
<p className="text-xs uppercase tracking-widest text-stone-500">Materials</p>
<p className="text-sm text-white">Terrazzo Coping, White Plaster</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-stone-500">Features</p>
<p className="text-sm text-white">Architectural Steps, Baja Shelf</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden animate-fade pt-0 min-h-screen bg-[#0c0c0c]" id="financing">

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Infinity Pool Sunset Financing" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0c0c0c]"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<h1 className="serif text-4xl md:text-7xl font-extralight text-white leading-tight tracking-tight mb-6">
                        Build Your Dream Pool <br/> <span className="italic text-stone-300">Without Paying Upfront.</span>
</h1>
<p className="text-sm md:text-lg text-stone-200 font-extralight tracking-wide mb-10 max-w-2xl mx-auto">
                        Flexible financing options with fast approvals, low monthly payments, and trusted lenders.
                    </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<button className="uppercase hover:bg-stone-200 transition-colors focus:outline-none text-xs text-black tracking-[0.2em] bg-white pt-4 pr-8 pb-4 pl-8" onclick="document.getElementById('compare-options').scrollIntoView({behavior: 'smooth'})" type="button">Apply Now</button>
<button className="flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase hover:text-stone-300 transition-colors group focus:outline-none" onclick="document.getElementById('why-financing').scrollIntoView({behavior: 'smooth'})" type="button">
                            View Financing Options 
                            <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-24 bg-[#0c0c0c]" id="why-financing">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="serif text-3xl md:text-5xl text-white mb-8 leading-tight font-extralight tracking-tight">
                            Luxury Living, <br/> Made Affordable.
                        </h2>
<p className="text-stone-400 font-extralight text-sm md:text-base leading-relaxed mb-8">
                            You don’t have to wait years to build your dream backyard. With modern pool financing, you can start your project now and pay over time with manageable monthly payments.
                        </p>
</div>
<div>
<ul className="space-y-6">
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<div className="bg-blue-900/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-light text-sm tracking-wide">Start your pool project immediately</span>
</li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<div className="bg-blue-900/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-light text-sm tracking-wide">No large upfront payment required</span>
</li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<div className="bg-blue-900/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-light text-sm tracking-wide">Flexible terms based on your budget</span>
</li>
<li className="flex items-center gap-4 border-b border-white/5 pb-4">
<div className="bg-blue-900/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-light text-sm tracking-wide">Fast approvals available</span>
</li>
<li className="flex items-center gap-4">
<div className="bg-blue-900/20 p-2 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-light text-sm tracking-wide">Options without using home equity</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 relative overflow-hidden border-t border-white/5" id="compare-options">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="serif text-3xl md:text-5xl text-white font-extralight tracking-tight mb-6">Choose the Financing Option That Fits You</h2>
<p className="text-stone-400 font-extralight text-sm">We partner with top-tier lenders so you can choose the option that best fits your financial goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#111] border border-white/10 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full group relative z-10">
<h3 className="serif text-3xl tracking-tight text-white mb-2">HFS Financial</h3>
<p className="text-blue-400 text-xs font-light tracking-wide uppercase mb-6">Fast funding with flexible terms</p>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-8 flex-grow">
                                HFS Financial specializes in home improvement loans with quick funding and flexible repayment options, making it ideal for homeowners who want speed and flexibility.
                            </p>
<ul className="space-y-4 mb-10 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Competitive interest rates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Terms from 1 to 20 years</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>No prepayment penalties</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Fast funding — often within days</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Unsecured loans (no home equity required)</span>
</li>
</ul>
<a className="block w-full text-center bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white rounded-full py-4 text-xs uppercase tracking-widest transition-all duration-300" href="https://www.hfsfinancial.net/promo/PoolWaterCreationsIncCA/" target="_blank">
                                Apply with HFS Financial
                            </a>
<p className="text-xs text-stone-500 mt-4 text-center">You will be redirected to our trusted financing partner</p>
</div>

<div className="bg-[#111] border border-white/10 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full group relative z-10">
<h3 className="serif text-3xl tracking-tight text-white mb-2">Lyon Financial</h3>
<p className="text-blue-400 text-xs font-light tracking-wide uppercase mb-6">Low payments with long-term flexibility</p>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-8 flex-grow">
                                Lyon Financial is one of the most established pool financing providers in the U.S., offering long-term loan options with predictable monthly payments.
                            </p>
<ul className="space-y-4 mb-10 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Loans up to $200,000</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Terms up to 30 years</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Fixed rates with predictable payments</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>No home equity or appraisal required</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>No prepayment penalties</span>
</li>
</ul>
<a className="block w-full text-center bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white rounded-full py-4 text-xs uppercase tracking-widest transition-all duration-300" href="https://www.lyonfinancial.net/dealer/pool-water-creations/" target="_blank">
                                Apply with Lyon Financial
                            </a>
<p className="text-xs text-stone-500 mt-4 text-center">You will be redirected to our trusted financing partner</p>
</div>

<div className="bg-[#111] border border-white/10 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full group relative z-10">
<h3 className="serif text-3xl tracking-tight text-white mb-2">Viking Capital</h3>
<p className="text-blue-400 text-xs font-light tracking-wide uppercase mb-6">Fast, simple financing designed for speed</p>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-8 flex-grow">
                                Viking Capital is ideal for homeowners who want a quick and easy approval process. Their streamlined system allows you to get started without delays.
                            </p>
<ul className="space-y-4 mb-10 text-stone-300 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Quick application process</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Fast approvals</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Flexible loan structures</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-500 mt-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Built specifically for pool projects</span>
</li>
</ul>
<a className="block w-full text-center bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white rounded-full py-4 text-xs uppercase tracking-widest transition-all duration-300" href="https://poolloan.net/poolwatercreations/" target="_blank">
                                Apply with Viking Capital
                            </a>
<p className="text-xs text-stone-500 mt-4 text-center">You will be redirected to our trusted financing partner</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 border-t border-white/5 pb-32">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-blue-500 mb-6" icon="solar:shield-check-linear" width="48"></iconify-icon>
<h2 className="serif text-3xl md:text-5xl text-white font-extralight tracking-tight mb-8">Financing You Can Trust</h2>
<p className="text-stone-400 font-extralight text-base md:text-lg leading-relaxed mb-12">
                        We partner with reputable financing providers to ensure a smooth, transparent, and stress-free experience from start to finish. Our goal is to make luxury accessible.
                    </p>
<div className="border-l-2 border-blue-500/50 pl-6 text-left inline-block max-w-2xl">
<p className="serif text-xl md:text-2xl text-white italic tracking-tight mb-4">"The financing process was simple and fast — we were able to start our pool immediately. Completely seamless from application to funding."</p>
</div>
</div>
</section>
</div>

<div className="page-section hidden animate-fade pt-32 min-h-screen bg-stone-950" id="contact">
<div className="max-w-3xl mx-auto px-6 pb-24">
<div className="text-center mb-16">
<h1 className="serif text-4xl md:text-5xl tracking-tight text-white font-extralight mb-4">Begin Your Private Consultation.</h1>
<p className="text-stone-400 font-extralight">We accept a limited number of projects each year to ensure uncompromising quality.</p>
</div>
<form className="space-y-12" id="contactForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Full Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors" name="fullName" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Email Address</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors" name="email" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Phone Number</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors" name="phone" type="tel"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Property Location</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors" name="location" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Desired Timeline</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors appearance-none rounded-none" name="timeline">
<option className="bg-black text-stone-400" value="Immediate Start">Immediate Start</option>
<option className="bg-black text-stone-400" value="3-6 Months">3-6 Months</option>
<option className="bg-black text-stone-400" value="Future Planning">Future Planning</option>
</select>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 group-focus-within:text-white transition-colors">Brief Vision Description</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white font-light focus:outline-none focus:border-white transition-colors" name="vision" rows="4"></textarea>
</div>
<div className="pt-8 text-center">
<button className="bg-white text-black px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-stone-200 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" id="submitBtn" type="submit">
                            Submit Inquiry
                        </button>
</div>
</form>
</div>
</div>
</main>

<footer className="bg-black border-white/10 border-t pt-16 pr-6 pb-16 pl-6">
<div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto gap-x-12 gap-y-12 items-start justify-between">
<div>
<button className="cursor-pointer block text-left focus:outline-none" onclick="showPage('home')" type="button">
<div className="text-sm tracking-[0.2em] font-light text-white mb-4 hover:text-stone-400 transition-colors">POOL WATER CREATIONS</div>
</button>
<p className="text-xs text-stone-500 uppercase tracking-widest mb-6">Where Water Becomes Art.</p>
<div className="flex gap-4 text-stone-400">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:facebook-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="solar:pin-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-16">
<div>
<h5 className="text-xs uppercase tracking-widest text-white mb-6">Studio</h5>
<ul className="space-y-3 text-sm text-stone-500 font-extralight">
<li><button className="hover:text-white transition-colors focus:outline-none" onclick="showPage('about')" type="button">Our Story</button></li>
<li><button className="hover:text-white transition-colors focus:outline-none" onclick="showPage('services')" type="button">Services</button></li>
<li><button className="hover:text-white transition-colors focus:outline-none" onclick="showPage('portfolio')" type="button">Portfolio</button></li>
<li><button className="hover:text-white transition-colors focus:outline-none" onclick="showPage('financing')" type="button">Financing</button></li>
</ul>
</div>
<div className="">
<h5 className="text-xs uppercase tracking-widest text-white mb-6">Contact</h5>
<ul className="space-y-3 text-sm text-stone-500 font-extralight">
<li className=""><button className="hover:text-white transition-colors focus:outline-none" onclick="showPage('contact')" type="button">Inquire</button></li>
<li className="">poolwatercreations@gmail.com</li>
<li className="">(909)636-2847</li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-stone-600 uppercase tracking-wider font-extralight">
<div>© 2023 Pool Water Creations. All Rights Reserved.</div>
<div className="mt-2 md:mt-0 space-x-6">
<a className="hover:text-stone-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
