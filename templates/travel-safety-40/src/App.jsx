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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                        entry.target.classList.remove('animate-hidden');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-hidden').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed bg-[#F4F6F8]/80 w-full z-50 border-gray-200/50 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Skyline Logo" className="cursor-pointer bg-center w-auto h-16 object-cover rounded" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9a953e1-7410-4a5c-8a83-d676c8665f3f_320w.png"/>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#1F2D3D] transition-colors" href="#choose-protection">The Kit</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="#whats-inside">What's Inside</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="/#our-story">Our Story</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="/#reviews">Shop</a>
</nav>
<div className="flex gap-4 items-center">
<a className="hidden hover:bg-[#c29c5a] transition-colors duration-300 sm:flex text-sm font-bold text-[#233C4F] bg-[#D5AD67] rounded-md pt-2 pr-5 pb-2 pl-5" href="/bid">Get
            Your Kit</a>
<button aria-label="Toggle menu" className="md:hidden flex items-center justify-center p-2 text-gray-600 hover:text-[#1F2D3D] transition-colors" onclick="
                const menu = document.getElementById('mobile-menu');
                const openIcon = document.getElementById('menu-icon');
                const closeIcon = document.getElementById('close-icon');
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            ">
<svg className="lucide lucide-menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-x hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="hidden absolute top-20 left-0 w-full bg-[#F4F6F8] border-b border-gray-200 shadow-md md:hidden flex-col pt-4 pr-6 pb-6 pl-6 gap-4 z-40" id="mobile-menu">
<nav className="flex flex-col gap-2 text-base font-medium text-gray-600"><a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="#choose-protection">The Kit</a><a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="#whats-inside">What's Inside</a><a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="#our-story">Our
                Story</a><a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="#reviews">Reviews</a>
<a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="#">Shop</a></nav>
</div>
</div>
</header>


<section className="bg-center bg-stone-950 max-w-none mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="bg-center opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17947ef8-57fa-4816-928d-549e1a287f45_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 z-10 max-w-7xl mt-8 mr-auto mb-8 ml-auto relative gap-x-12 gap-y-12 items-center">
<div className="bg-slate-900/50 max-w-2xl rounded-3xl mt-10 pt-8 pr-8 pb-8 pl-8 gap-x-12 gap-y-12">
<h1 className="leading-tight md:text-5xl lg:text-5xl text-4xl font-semibold text-slate-50 tracking-tight">Be Ready for the Cold and Flu – Wherever you Go</h1>
<p className="leading-relaxed text-lg text-slate-50 mt-6" style={{transitionDelay: '100ms'}}>A compact, resealable cold and flu health kit designed for real-world travel risks – so you stay prepared, confident, and stress-free anywhere you go.</p>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6" style={{transitionDelay: '200ms'}}>
<a className="sm:w-auto hover:bg-[#D5AD67]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-semibold text-[#233C4F] text-center bg-[#D5AD67] w-full rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#checkout">Get Your Travel Health Kit</a>
<a className="group flex items-center gap-2 hover:text-[#D5AD67] transition-colors font-medium text-slate-50" href="#whats-inside">
          See What's Inside
          <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex flex-col flex-wrap sm:flex-row text-sm text-slate-50 border-slate-50/20 border-t mt-12 pt-8 gap-x-8 gap-y-4" style={{transitionDelay: '300ms'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#D5AD67]" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="">Trusted components</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#D5AD67]" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="">Assembled in the USA</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-[#D5AD67]" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="">Designed informed by real-world health needs</span>
</div>
</div>
</div>
</div>
</section><section className="bg-slate-50 max-w-none mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="relative w-full aspect-[4/5] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#233C4F]/10">
<img alt="Traveler dealing with unexpected situation abroad" className="object-center w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78891759-5011-4355-90af-0393b98ab4a4_1600w.png"/>
<div className="bg-gradient-to-t from-[#233C4F]/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-[#233C4F] tracking-tight" style={{transitionDelay: '100ms'}}>
        Travel Doesn't Go Wrong—Until It Does
      </h2>
<div className="leading-relaxed text-lg text-[#233C4F]/80 mt-8 space-y-4">
<p className="" style={{transitionDelay: '200ms'}}>You don't plan to get sick on the road—but respiratory illness is
          one of the most common travel complaints for a reason.
        </p>
<p className="" style={{transitionDelay: '200ms'}}>
          A scratchy throat on the flight over.
          A full-blown cold by day two of your trip.
          A fever that turns a dream vacation into a hotel room recovery.</p>
<p className="" style={{transitionDelay: '200ms'}}>
          Planes, trains, and crowded terminals are prime environments for cold, flu, and respiratory viruses to
          spread—and once symptoms hit, they hit fast.</p>
<p className="" style={{transitionDelay: '200ms'}}>
          Finding relief isn't always easy when you're away from home. Pharmacies may carry unfamiliar brands. Language
          barriers slow you down and a sick day abroad costs far more than it should.
        </p>
<p className="font-semibold text-[#233C4F]" style={{transitionDelay: '600ms'}}>Most travelers don't think about
          this—until they're already sick.
        </p>
</div>
</div>
</div>
</section>


<section className="bg-[#233C4F] pt-24 pr-6 pb-24 pl-6 relative" id="choose-protection">
<div className="text-center max-w-7xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-50 tracking-tight">
 Travel Smart. Be prepared for the cold or flu wherever you go.
</h2>
<p className="leading-relaxed text-lg text-slate-50/80 max-w-2xl mt-5 mr-auto ml-auto" style={{transitionDelay: '100ms'}}>
            Choose the right Respiratory Shield Kit for your trip—whether you're traveling solo or with family.
        </p>
</div>
<div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 max-w-7xl mt-16 mr-auto ml-auto gap-x-8 gap-y-8">

<div className="order-2 md:order-1 hover:shadow-xl hover:shadow-[#233C4F]/10 hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300 flex flex-col group overflow-hidden bg-[#ffffff] w-full border-[#233C4F]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-white/50 pointer-events-none"></div>
<div className="z-10 relative">
<div className="inline-flex gap-2 text-lg font-semibold text-slate-50 bg-[#233C4F] w-fit border-[#233C4F]/10 border rounded-full mr-auto mb-6 ml-auto pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center justify-center">
        RSTK - Individual</div>
<div className="overflow-hidden aspect-[4/3] bg-white mb-8 relative">
<img alt="16-Piece Travel Kit" className="group-hover:scale-105 transition-transform duration-700 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93823378-c7d6-4938-9592-550ac1eff667_1600w.png"/>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F]">
        Respiratory Shield Travel Kit
    </h3>
<p className="font-semibold text-[#D5AD67] mt-1">16 Pieces</p>
<p className="text-[#233C4F]/70 mt-4 text-sm leading-relaxed">
        Essentials for quick trips and light travel
    </p>
<div className="flex-grow mt-8 mb-10 space-y-4 gap-x-2 gap-y-2">
<div className="flex gap-3 text-sm text-[#233C4F]/90 gap-x-3 gap-y-3 items-start">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">2 N95 respirators (NIOSH-approved)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1 COVID-19/Flu A&amp;B antigen test</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">3 Pouches multi-symptom cold and flu medication</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1 Hand sanitizer, 2 oz (59 ml)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1 Pack of surface travel wipes, 2.1 oz (58 g)</span>
</div>
<div className="flex gap-3 text-sm text-[#233C4F]/90 gap-x-3 gap-y-3 items-start">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1 Pocket tissue pack (10 tissues)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">1 Stick of cough drops (9 drops)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">4 Disposable thermometers</span>
</div>
<div className="flex gap-3 text-sm text-[#233C4F]/90 gap-x-3 gap-y-3 items-start">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">2 Packets of immune support supplement; 0.32 oz (9.1 g) per packet</span>
</div>
<div className="flex gap-3 text-sm text-[#233C4F]/90 gap-x-3 gap-y-3 items-start">
<svg className="flex-shrink-0 w-[20px] h-[20px] text-[#233c4f]/0" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className=""></span>
</div>
<div className="flex text-sm text-slate-50 gap-x-3 gap-y-3 items-start">
<svg className="flex-shrink-0 mt-0.5 w-[20px] h-[20px] text-slate-50" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<div className="">
<span className="">.</span><br/>
<span className="text-xs italic text-[#ffffff]/50">*</span>
</div>
</div>
</div>
<button className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D5AD67] focus:ring-offset-2 focus:ring-offset-[#F4F1E8] hover:-translate-y-1 hover:shadow-lg hover:bg-[#c29c5a] hover:border-[#c29c5a] font-semibold text-[#233C4F] bg-[#D5AD67] w-full border-[#233C4F]/20 border rounded-xl pt-4 pr-6 pb-4 pl-6 relative">
                    Buy Now
                </button>
</div>
</div>
<div className="order-2 md:order-1 hover:shadow-xl hover:shadow-[#233C4F]/10 hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300 flex flex-col group overflow-hidden bg-[#ffffff] w-full border-[#233C4F]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-white/50 pointer-events-none"></div>
<div className="z-10 relative">
<div className="inline-flex text-lg font-semibold text-slate-50 bg-[#233C4F] w-fit border-[#233C4F]/10 border rounded-full mb-6 pt-1.5 pr-3.5 pb-1.5 pl-3.5 gap-x-2 gap-y-2 items-center">RSTK - Family Kit</div>
<div className="overflow-hidden aspect-[4/3] bg-white mb-8 relative">
<img alt="16-Piece Travel Kit" className="group-hover:scale-105 transition-transform duration-700 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e947d027-43e1-4fe5-8496-d8333d639a25_1600w.png"/>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F]">
                    Respiratory Shield Travel Kit
                </h3>
<p className="font-semibold text-[#D5AD67] mt-1">41 Pieces</p>
<p className="leading-relaxed text-sm text-[#233C4F]/70 mt-4">Complete protection for longer trips or families</p>
<div className="flex-grow mt-8 mb-10 space-y-4 gap-x-3 gap-y-3">
<div className="flex gap-3 text-sm text-[#233C4F]/90 gap-x-3 gap-y-3 items-start">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<div className="">
<span className="">6 N95 respirators (NIOSH-approved)</span><br/>
<span className="text-xs italic text-[#233C4F]/50">*these respirators were not designed to be used by children</span>
</div>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">4 COVID-19/Flu A&amp;B antigen tests</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">4 Packets of immune support supplement for adults; 0.32 oz (9.1 g) per packet</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">4 Sticks of immune support supplement for kids; 0.07 oz (2 g) per stick</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">2 Hand sanitizers, 2 oz (59 ml) each</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">2 Packs of surface travel wipes, 2.1 oz (58 g) each</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">2 Pocket tissue packs (10 tissues per pack)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">1 Children’s ibuprofen (ages 2-11), 4 oz (120 ml)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">2 Sticks of cough drops (9 drops in a stick)</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">8 Disposable thermometers</span>
</div>
<div className="flex items-start gap-3 text-[#233C4F]/90 text-sm">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">6 Pouches of adult multi-symptom cold and flu medication</span>
</div>
</div>
<button className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D5AD67] focus:ring-offset-2 focus:ring-offset-[#F4F1E8] font-semibold text-[#233C4F] bg-[#D5AD67] w-full border-[#233C4F]/20 border rounded-xl px-6 py-4 relative hover:-translate-y-1 hover:shadow-lg hover:bg-[#c29c5a] hover:border-[#c29c5a]">
                    Buy Now
                </button>
</div>
</div>

</div>

</section><section className="bg-slate-50 max-w-none border-[#233C4F]/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#233C4F]">
            Who This Is For
        </h2>
<p className="text-lg text-[#233C4F]/80 mt-4">
            Designed for travelers who value preparedness, efficiency, and peace of mind on every journey.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

<div className="bg-white border border-[#233C4F]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
<div className="aspect-[4/3] w-full overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-[#233C4F]/10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="The Prepared Family Traveler" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/326a6559-4473-4e68-a3f8-b8834f59649c_800w.png"/>
</div>
<div className="pt-8 pr-8 pb-8 pl-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F] mb-6">The Prepared Family Traveler</h3>
<ul className="space-y-4 text-sm text-[#233C4F]/80">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Keeps family safe and stress-free</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Avoids forgotten essentials</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Wants peace of mind on trips</span>
</li>
</ul>
</div>
</div>

<div className="bg-white border border-[#233C4F]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
<div className="aspect-[4/3] w-full overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-[#233C4F]/10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="The Frequent Business Traveler" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa6f44a2-c451-4bfa-8805-899e1060fe24_800w.png"/>
</div>
<div className="pt-8 pr-8 pb-8 pl-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F] mb-6">The Frequent Business Traveler</h3>
<ul className="space-y-4 text-sm text-[#233C4F]/80">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Travels often, stays productive</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Avoids illness disruptions</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Needs compact, ready-to-go kit</span>
</li>
</ul>
</div>
</div>

<div className="bg-white border border-[#233C4F]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
<div className="aspect-[4/3] w-full overflow-hidden relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-[#233C4F]/10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="The Organizational Buyer" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b75fa90d-59a4-4628-b6af-d1eea984a06b_800w.png"/>
</div>
<div className="pt-8 pr-8 pb-8 pl-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F] mb-6">The Organizational Buyer</h3>
<ul className="space-y-4 text-sm text-[#233C4F]/80">
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Buys for teams or institutions</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Needs reliable bulk solutions</span>
</li>
<li className="flex items-start gap-3">
<svg className="w-5 h-5 text-[#D5AD67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="">Values trust and simplicity</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="whats-inside">
<div className="text-center max-w-2xl mx-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-[#233C4F] tracking-tight">RiskWise Difference</h2>
<p className="text-lg text-[#233C4F]/80 mt-4" style={{transitionDelay: '100ms'}}>Carefully selected essentials for the cold and flu – no fluff, no wasted space.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-6 gap-y-10">

<div className="relative w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
<div className="flex flex-col z-10 overflow-hidden bg-[#233C4F] w-full h-full rounded-[24px] relative">
<div className="flex shrink-0 bg-[#233C4F] w-full h-20 relative justify-center">
</div>
<div className="-mt-10 flex z-20 shrink-0 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0031300-0e2b-4d86-a2de-d66b58f025bb_320w.png)] bg-cover bg-center mr-auto ml-auto relative shadow-[0_8px_16px_rgba(0,0,0,0.08)] items-center justify-center">
</div>
<div className="flex flex-col flex-grow text-slate-50 text-center pt-4 pr-6 pb-8 pl-6 items-center">
<h3 className="text-2xl font-normal text-[#D5AD67] tracking-tight mb-3">Protection</h3>
<p className="leading-relaxed text-lg text-slate-50">Support protection
with hygiene essentials</p>
</div>
</div>
<div className="-bottom-2.5 -translate-x-1/2 z-0 bg-white w-6 h-6 rounded-sm absolute left-1/2 rotate-45"></div>
</div>

<div className="relative w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
<div className="flex flex-col z-10 overflow-hidden text-slate-50 bg-[#233C4F] w-full h-full rounded-[24px] relative">
<div className="flex shrink-0 bg-[#233C4F] w-full h-20 relative justify-center">
</div>
<div className="-mt-10 flex shrink-0 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b27f4727-e3f2-4ba3-a4d7-299e0d5bc6a6_320w.png)] bg-cover bg-center z-20 mx-auto relative shadow-[0_8px_16px_rgba(0,0,0,0.08)] items-center justify-center">
</div>
<div className="flex flex-col flex-grow text-center pt-4 pr-6 pb-8 pl-6 items-center">
<h3 className="text-2xl font-normal text-[#D5AD67] tracking-tight mb-3">Testing</h3>
<p className="leading-relaxed text-lg text-slate-50">Know your status
COVID + flu testing</p>
</div>
</div>
<div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 rounded-sm z-0"></div>
</div>

<div className="relative w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full">
<div className="flex flex-col z-10 overflow-hidden bg-[#233C4F] w-full h-full rounded-[24px] relative">
<div className="flex shrink-0 bg-[#233C4F] w-full h-20 relative justify-center">
</div>
<div className="relative w-20 h-20 mx-auto -mt-10 bg-white rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.08)] z-20 shrink-0">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '32px', height: '32px', color: 'rgb(35, 60, 79)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 3 0 5 1 7 2a1 1 0 0 1 1 1v7z"></path>
                    &gt;
                </svg>
</div>
<div className="flex flex-col flex-grow text-center pt-4 pr-6 pb-8 pl-6 items-center">
<h3 className="text-2xl font-normal text-[#D5AD67] tracking-tight mb-3">Relief</h3>
<p className="leading-relaxed text-lg text-slate-50">Symptom reliefready</p>
</div>
</div>
<div className="absolute - bg-white rotate-45 rounded-sm z-0"></div>
</div>

</div>
</section><section className="bg-slate-50 max-w-none border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="our-story">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto items-center">
<div className="order-2 lg:order-1 flex flex-col justify-center" style={{transitionDelay: '100ms'}}>
<div className="inline-flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<div className="w-8 h-[2px] bg-[#D5AD67]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-[#D5AD67]">Our Story</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#233C4F] leading-[1.15] mb-6">
        Built on Discipline.<br/>
<span className="text-[#3F7984]">Designed for Preparedness.</span>
</h2>
<p className="leading-relaxed text-lg text-[#233C4F]/80 mb-10">Kay Kinder founded RiskWise Health Kits, a small,
        veteran- and woman-owned business built on a simple truth: real preparedness starts at home. As a mother of three, Kay knows firsthand what it means to navigate illness and unexpected health moments with kids in tow.</p>
<p className="leading-relaxed text-lg text-[#233C4F]/80 mb-10">
        When the right supplies weren't where she needed them or weren't packaged sensibly for real life, she started  thinking differently about what a health kit could look like. That everyday experience became the foundation for RiskWise. </p>
<p className="leading-relaxed text-lg text-[#233C4F]/80 mb-10">
        She brought more than a mom's instinct to the design. A U.S. Army veteran with over 20 years of
        experience in health protection, Kay spent her military career protecting the health and readiness of service members in complex, high-risk environments. That same mission-driven thinking now shapes every kit RiskWise  builds.</p>
<p className="leading-relaxed text-lg text-[#233C4F]/80 mb-10"> 
        Each kit reflects the RiskWise Difference—combining protection (through hygiene or education), rapid
        testing, and symptom relief into one thoughtfully assembled format. Whether you're managing a respiratory illness, preparing for a health transition, or simply staying a step ahead, RiskWise kits are designed to support you at every stage. The goal is straightforward: make it easier for people to feel informed, equipped,
        and prepared—whatever life brings.</p>
<div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-[#233C4F]/10">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="shrink-0 flex text-[#233c4f] bg-[#233C4F] w-12 h-12 rounded-2xl items-center justify-center">
<svg className="w-[24px] h-[24px] text-slate-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-semibold text-[#233C4F] tracking-tight">Veteran-Owned</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="shrink-0 flex text-slate-50 bg-[#233c4f] w-12 h-12 rounded-2xl items-center justify-center">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-semibold text-[#233C4F] tracking-tight">Woman-Owned</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#233C4F]/10" style={{transitionDelay: '300ms'}}>
<img alt="Preparedness and Discipline" className="object-center hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec4e7aa3-ea5b-4cc7-8a37-d6cf1428df55_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#233C4F]/20 to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y bg-[#F4F1E8] pt-24 pr-6 pb-24 pl-6" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-[#233C4F] tracking-tight text-center mb-4 pb-12">
            "Saved My Trip When I Needed It Most"
        </h2>
<div className="flex flex-col w-full mb-16 gap-x-12 gap-y-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full gap-x-6 gap-y-6">

<div className="flex flex-col gap-4 overflow-hidden bg-white h-full border-[#233C4F]/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm gap-x-4 gap-y-4" style={{transitionDelay: '200ms'}}>
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4"></div>
<div className="relative z-10 flex flex-col h-full gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#233C4F]/10 text-[#233C4F] flex items-center justify-center font-semibold text-lg">
                        S
                    </div>
<div className="">
<p className="text-sm font-semibold text-[#233C4F]">Mike N.</p>
<p className="text-xs text-[#233C4F]/60">2 months ago</p>
</div>
</div>
</div>
<p className="leading-relaxed text-sm text-[#233C4F]/80">I ordered 4 Family Respiratory Shield Travel Kits for family members as gifts for Christmas 2025. These kits are perfect for anyone who travels and prepares for unforeseen conditions. They are your "Go To" if illness symptoms appear. The kits put what you need together in usable quantities at your fingertips. Don't leave home without one.</p>
</div>
</div>

<div className="flex flex-col gap-4 overflow-hidden bg-white h-full border-[#233C4F]/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm gap-x-4 gap-y-4" style={{transitionDelay: '350ms'}}>
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4"></div>
<div className="relative z-10 flex flex-col h-full gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#D5AD67]/20 text-[#233C4F] flex items-center justify-center font-semibold text-lg">
                        D
                    </div>
<div className="">
<p className="text-sm font-semibold text-[#233C4F]">Margaret B.</p>
<p className="text-xs text-[#233C4F]/60">3 weeks ago</p>
</div>
</div>
</div>
<p className="leading-relaxed text-sm text-[#233C4F]/80">The family health kit from Risk Wise Supplies is a well-thought-out, practical resource for emergency preparedness. It includes a comprehensive range of medical essentials organized in a way that’s easy to access during stressful situations. The quality of the supplies feels reliable, which made it a reassuring addition to our travel plan. Extra bonus is that it's from a female Veteran-owned company.</p>
</div>
</div>

<div className="flex flex-col gap-4 overflow-hidden bg-white h-full border-[#233C4F]/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm gap-x-45xwz" style={{transitionDelay: '500ms'}}>
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4"></div>
<div className="relative z-10 flex flex-col h-full gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#233C4F]/10 text-[#233C4F] flex items-center justify-center font-semibold text-lg">
                        E
                    </div>
<div className="">
<p className="text-sm font-semibold text-[#233C4F]">Angie M. </p>
<p className="text-xs text-[#233C4F]/60">1 month ago</p>
</div>
</div>
</div>
<p className="leading-relaxed text-sm text-[#233C4F]/80">I cannot tell you how happy I am to have the Respiratory Travel Kit on hand! I bought the kit after a couple of trips out of the country and getting very sick both times. If my husband and I had this kit on hand, it would have provided a ton of relief. Thankfully, we have not had to use it yet, but it gives me peace of mind knowing I have it with me when we are traveling! </p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="text-center max-w-none mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="md:text-4xl text-3xl font-semibold text-[#233C4F] tracking-tight">Built for Real Travel Situations</h2>
<p className="leading-relaxed text-lg text-[#233C4F]/80 max-w-7xl mt-6 mr-auto ml-auto" style={{transitionDelay: '100ms'}}>This kit is assembled around the real respiratory risks of travel — crowded airports, recycled cabin air, and exposure to cold and flu viruses that don't wait for a convenient time. Everything is included so you can focus on your trip, not your symptoms.</p>
<div className="grid md:grid-cols-3 gap-8 max-w-7xl mt-12 mr-auto ml-auto gap-x-8 gap-y-8">
<div className="group overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-[#233C4F]/10 border rounded-2xl shadow-sm" style={{transitionDelay: '100ms'}}>
<img alt="Pack It" className="transition-transform duration-500 group-hover:scale-105 w-full h-56 object-cover" src="https://images.unsplash.com/photo-1611865533400-5ab41181212d?w=800&amp;q=80"/>
<div className="flex flex-col flex-grow text-left pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-semibold tracking-tight text-[#233C4F]">1. Pack It</h3>
<p className="leading-relaxed text-sm text-[#233C4F]/70 mt-3">Both kits are compact and resealable — easy to tuck into your bag and ready to close back up between uses.</p>
</div>
</div>
<div className="group overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-[#233C4F]/10 border rounded-2xl shadow-sm" style={{transitionDelay: '100ms'}}>
<img alt="Travel Confidently" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1643033998438-38b4211fa2d5?w=800&amp;q=80"/>
<div className="flex flex-col flex-grow text-left pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-semibold tracking-tight text-[#233C4F]">2. Travel Confidently</h3>
<p className="leading-relaxed text-sm text-[#233C4F]/70 mt-3">Move through airports, flights, and new destinations knowing you're prepared for the respiratory symptoms that catch most travelers off guard.</p>
</div>
</div>
<div className="group overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-[#233C4F]/10 border rounded-2xl shadow-sm" style={{transitionDelay: '100ms'}}>
<img alt="Handle Issues Instantly" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1593131492215-67b479a3d915?w=800&amp;q=80"/>
<div className="p-8 flex flex-col flex-grow text-left">
<h3 className="text-xl font-semibold text-[#233C4F] tracking-tight">3. Respond the Moment Symptoms Start</h3>
<p className="leading-relaxed text-sm text-[#233C4F]/70 mt-3">Access exactly what you need — whether it's protection support before exposure, a test to guide decisions, or relief when symptoms hit.</p>
</div>
</div>
</div>
</section>


<section className="max-w-7xl mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg border border-[#233C4F]/10" style={{transitionDelay: '100ms'}}>

<div className="md:p-12 md:border-b-0 md:border-r bg-white border-[#233C4F]/10 border-b pt-10 pr-10 pb-10 pl-10 relative">
<div className="absolute inset-0 bg-[#F4F1E8]/80 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight text-[#233C4F]/50 mb-8">Traveling Without a Kit</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-[#233C4F]/70">
<iconify-icon className="text-2xl text-[#233C4F]/30 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="">Hunting for an open pharmacy in an unfamiliar city while feeling awful.</span>
</li>
<li className="flex items-start gap-4 text-[#233C4F]/70">
<iconify-icon className="text-2xl text-[#233C4F]/30 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="">Losing two days of your trip to symptoms you could have caught early.</span>
</li>
<li className="flex items-start gap-4 text-[#233C4F]/70">
<iconify-icon className="text-2xl text-[#233C4F]/30 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="">Overpacking bulky, disorganized boxes of medicine.</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#233C4F] p-10 md:p-12 text-[#F4F1E8] relative">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon className="text-8xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight z-10 mb-8 relative">Traveling With the Health Kit</h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#D5AD67] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#F4F1E8]">Protection support, Testing, symptom relief — everything in one place before symptoms take over.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#D5AD67] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#F4F1E8]">Familiar brands you already trust, packed and ready to go.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-[#D5AD67] flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#F4F1E8]">Minimalist packing, Compact and resealable, built to travel with you.</span>
</li>
</ul>
</div>
</div>
</section>


<section className="text-[#F4F1E8] bg-[#233C4F] pt-32 pr-6 pb-32 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Travel Smarter. Travel Prepared.
            </h2>
<p className="md:text-xl text-lg text-[#F4F1E8]/70 max-w-2xl mt-6 mr-auto ml-auto" style={{transitionDelay: '100ms'}}>Don't wait until symptoms hit mid-trip — respiratory illness is one of the most common travel setbacks, and most travelers aren't ready for it.</p>
<div className="flex flex-col mt-12 items-center justify-center" style={{transitionDelay: '200ms'}}>
<a className="sm:w-auto hover:bg-[#D5AD67]/90 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg font-semibold text-[#233C4F] text-center bg-[#D5AD67] w-full rounded-xl pt-5 pr-10 pb-5 pl-10 shadow-lg" href="#checkout">Get Your Travel Health Kit Now</a>
<p className="text-sm text-[#F4F1E8]/50 mt-6 flex items-center gap-2">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                    Limited stock available for peak travel season
                </p>
</div>
</div>
</section>

<footer className="flex flex-col md:flex-row text-sm text-[#233C4F]/60 max-w-7xl border-[#233C4F]/10 border-t mx-auto pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-2 text-lg font-semibold text-[#233C4F] tracking-tighter gap-x-2 gap-y-2 items-center">
<img alt="TSK Logo" className="cursor-pointer w-auto h-16 object-contain" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9a953e1-7410-4a5c-8a83-d676c8665f3f_800w.png"/>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-8" style={{transitionDelay: '100ms'}}>
<a className="hover:text-[#233C4F] transition-colors" href="#">Shipping &amp; Returns</a>
<a className="hover:text-[#233C4F] transition-colors" href="#">Contact Support</a>
<a className="hover:text-[#233C4F] transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex gap-2 text-[#233C4F]/50 gap-x-2 gap-y-2 items-center" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-lg" icon="solar:lock-password-linear"></iconify-icon>
<span className="">Secure 256-bit Checkout</span>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#F4F1E8]/95 backdrop-blur-md border-t border-[#233C4F]/10 z-50">
<a className="block w-full text-center bg-[#D5AD67] hover:bg-[#D5AD67]/90 text-[#233C4F] py-4 rounded-xl font-semibold shadow-md transition-colors" href="#checkout">
            Get Your Kit Now
        </a>
</div>


    </>
  );
}
