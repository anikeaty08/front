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
              if (typeof lucide !== 'undefined') {
                lucide.createIcons();
              }

              const sections = document.querySelectorAll(".fade-in-section");

              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("visible");
                      observer.unobserve(entry.target);
                    }
                  });
                },
                {
                  threshold: 0.1,
                  rootMargin: "0px 0px -50px 0px"
                }
              );

              sections.forEach((section) => {
                observer.observe(section);
              });
            });
      


              (function(){
                const form = document.querySelector('#quote-form');
                const originalFormHTML = form.innerHTML;
                form.addEventListener('submit', async function(e) {
                  e.preventDefault();
                  const btn = form.querySelector('button[type="submit"]');
                  if (btn) {
                    btn.disabled = true;
                    btn.classList.add('opacity-75', 'cursor-not-allowed');
                  }
                  try {
                    const response = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
                      method: 'POST',
                      headers: { 'Accept': 'application/json' },
                      body: new FormData(form)
                    });
                    if (response.ok) {
                      form.innerHTML = '<div class="text-center py-12 px-6 bg-green-50 rounded-xl border border-green-100"><div class="w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-green-200 text-green-800 mb-4"><iconify-icon icon="solar:check-circle-linear" style="stroke-width: 1.5;" class="text-2xl"></iconify-icon></div><p class="text-green-900 font-medium">Thank you! Your quote request has been received. We will contact you shortly.</p></div>';
                      setTimeout(function(){
                        form.innerHTML = originalFormHTML;
                        form.reset();
                      }, 5000);
                    } else {
                      form.submit();
                    }
                  } catch (err) {
                    form.submit();
                  }
                });
              })();
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-[#f4f7f4]/80 border-green-900/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<img alt="Martinez Landscaping Logo" className="w-auto h-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b1b0f3f-a0f8-4085-ba1f-8b43da0a45e8_320w.png"/>
<span className="sr-only">Martinez Landscaping</span>
</a>

<details className="relative md:hidden group">
<summary className="cursor-pointer p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-600 hover:text-gray-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="absolute right-0 top-full mt-2 w-56 border rounded-xl shadow-lg p-2 flex flex-col gap-1 z-50 origin-top-right bg-white border-gray-200">

<details className="group/sub">
<summary className="cursor-pointer flex items-center justify-between p-3 text-sm font-medium rounded-lg select-none text-gray-700 hover:bg-gray-50">
                Services
                <iconify-icon className="transition-transform group-open/sub:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pl-4 py-1 pr-2 flex flex-col gap-1 border-l-2 ml-4 mb-2 border-gray-100">
<a className="block p-2 text-sm text-gray-500 rounded-md transition-colors hover:text-green-700 hover:bg-green-50" href="#gallery-fence">
                  Fence Installation
                </a>
<a className="block p-2 text-sm text-gray-500 rounded-md transition-colors hover:text-green-700 hover:bg-green-50" href="#gallery-pavers">
                  Pavers &amp; Patios
                </a>
<a className="block p-2 text-sm text-gray-500 rounded-md transition-colors hover:text-green-700 hover:bg-green-50" href="#gallery-landscaping">
                  General Landscaping
                </a>
</div>
</details>
<a className="block p-3 text-sm font-medium rounded-lg transition-colors text-gray-700 hover:bg-gray-50" href="#reviews">
              Reviews
            </a>
<a className="block p-3 text-sm font-medium rounded-lg transition-colors text-gray-700 hover:bg-gray-50" href="#contact">
              Contact
            </a>
<div className="h-px my-1 bg-gray-500"></div>
<a className="block p-3 text-sm font-medium rounded-lg transition-colors text-center text-green-700 hover:bg-green-50" href="#quote">
              Get a Free Quote
            </a>
</div>
</details>

<nav className="hidden md:flex items-center gap-8">

<details className="relative group">
<summary className="cursor-pointer flex items-center gap-1 text-sm font-medium transition-colors select-none focus:outline-none text-gray-600 hover:text-gray-900">
              Services
              <iconify-icon className="" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 border rounded-xl shadow-lg p-2 flex flex-col gap-1 z-50 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 bg-white border-gray-200">
<a className="block p-2 text-sm rounded-md transition-colors text-gray-600 hover:text-green-700 hover:bg-green-50" href="#gallery-fence">
                Fencing
              </a>
<a className="block p-2 text-sm rounded-md transition-colors text-gray-600 hover:text-green-700 hover:bg-green-50" href="#gallery-pavers">
                Pavers
              </a>
<a className="block p-2 text-sm rounded-md transition-colors text-gray-600 hover:text-green-700 hover:bg-green-50" href="#gallery-landscaping">
                Landscaping
              </a>
</div>
</details>
<a className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900" href="#reviews">
            Reviews
          </a>
<a className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900" href="#contact">
            Contact
          </a>
<a className="px-5 py-2.5 text-sm font-medium rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 text-white bg-green-700 hover:bg-green-800" href="#quote">
            Free Quote
          </a>
</nav>
</div>
</header>

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] via-transparent to-transparent from-green-200/50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="flex-1 flex flex-col text-center lg:text-left fade-in-section">
<h1 className="md:text-5xl lg:text-6xl lg:max-w-none lg:mx-0 leading-tight text-4xl font-medium text-gray-900 tracking-normal max-w-3xl mb-6">
            Landscaping design &amp; Pavers in Renton, WA
          </h1>
<p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            Specializing in custom landscaping, durable fencing, and precision
            paver installations. Simple process, transparent pricing.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-white bg-gray-900 hover:bg-gray-800" href="#quote">Get a free quote</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium border rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 flex items-center justify-center gap-2 text-gray-700 bg-white border-gray-200 hover:bg-gray-50" href="#gallery">
              View Our Work
              <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 flex justify-center mt-8 lg:mt-0 w-full fade-in-section" style={{animationDelay: '200ms'}}>
<img alt="Martinez Landscaping Services Flyer" className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-200/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1e2b2f5-cc0d-4665-80af-83b186af691e_800w.png"/>
</div>
</div>
</section>

<section className="py-20 border-y border-green-900/5 bg-green-50" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center fade-in-section">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-gray-900">
            Recent Projects
          </h2>
<p className="text-sm text-gray-500">
            Explore our portfolio across different service categories.
          </p>
</div>
<div className="space-y-24">

<div className="scroll-mt-32" id="gallery-fence">
<div className="flex gap-3 border-gray-100 border-b mb-8 pb-4 gap-x-3 gap-y-3 items-center fade-in-section">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-amber-700 bg-lime-500">
<i className="w-5 h-5" data-lucide="columns-3"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-gray-900">
                Fencing Solutions
              </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '300ms'}}>
<img alt="Modern Dark Wood Privacy Fence and Gravel Landscaping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/161ca052-96ff-4a2d-8e67-5c6b1f4046ca_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Dark Wood Privacy Fence
                  </span>
</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '200ms'}}>
<img alt="Residential Backyard Patio and Dark Wood Fence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f980d8ca-c9c0-4d11-950e-1c2be1675758_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Patio &amp; Dark Wood Fence
                  </span>
</div>
</div>
</div>
</div>

<div className="scroll-mt-32" id="gallery-pavers">
<div className="flex gap-3 fade-in-section border-gray-100 border-b mb-8 pb-4 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-600">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-gray-900">
                Pavers &amp; Patios
              </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '100ms'}}>
<img alt="Modern Paver Walkway and Residential Landscaping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe1c280b-13de-4c65-99a4-454dd9d530c6_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Modern Paver Walkway
                  </span>
</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '200ms'}}>
<img alt="Residential Landscaping with Sod and Retaining Wall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5bc2e8-025e-4993-8e8f-0305489128ff_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Sod &amp; Retaining Wall
                  </span>
</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '300ms'}}>
<img alt="Wooden Outdoor Stairs Leading to a Deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3d29ca1-104d-4728-bc9f-d300f1d72bce_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Custom Outdoor Stairs
                  </span>
</div>
</div>
</div>
</div>

<div className="scroll-mt-32" id="gallery-landscaping">
<div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 fade-in-section">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-green-600 bg-green-400">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-normal tracking-tight text-gray-900">
                Landscaping
              </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '200ms'}}>
<img alt="Suburban Backyard with Fresh Landscaping and Dark Mulch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12dde911-6626-4dfb-a325-c3fe90169dbb_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Fresh Landscaping &amp; Mulch
                  </span>
</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group border bg-gray-500 border-gray-200/50 fade-in-section" style={{transitionDelay: '300ms'}}>
<img alt="Residential Backyard with Green Lawn and Wood Fence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95e40b6d-92c9-4bf2-a1e6-c1955ed05e07_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 from-gray-900/60">
<span className="text-sm font-normal text-white">
                    Backyard Lawn
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
        .fade-in-section {
          opacity: 0;
          will-change: opacity, transform, filter;
        }

        .fade-in-section.visible {
          animation: blurFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fade-in-section[style*="100ms"] {
          animation-delay: 100ms;
        }

        .fade-in-section[style*="200ms"] {
          animation-delay: 200ms;
        }

        .fade-in-section[style*="300ms"] {
          animation-delay: 300ms;
        }

        @keyframes blurFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      </style>


</section>
<section className="py-24 scroll-mt-20 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center fade-in-section">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-gray-900">
            Customer Reviews
          </h2>
<p className="text-sm text-gray-500 mb-6">
            See what our clients have to say about our work.
          </p>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 text-gray-700 bg-white border-gray-200 hover:bg-gray-50" href="https://www.angi.com/companylist/us/wa/renton/martinez-landscaping-reviews-1.htm#photos" rel="noopener noreferrer" target="_blank">
            Read more reviews on Angi
            <iconify-icon className="" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl border border-gray-200/80 bg-white shadow-sm fade-in-section" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-6">
<div className="">
<h4 className="font-semibold text-gray-900 text-lg">Amanda F.</h4>
<div className="flex items-center gap-1 mt-1 text-[#ff5741]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-semibold text-gray-900 ml-1">
                    5.0
                  </span>
</div>
</div>
<span className="text-sm text-gray-500">May 2026</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 text-gray-700 text-xs font-medium mb-4 border border-gray-200/60">
<span className="text-[#ff5741] font-bold text-sm italic pr-0.5">
                A
              </span>
              Verified Review
            </div>
<p className="text-sm text-gray-500 mb-4 font-medium">
              Lawn Care Maintenance And Mowing
            </p>
<p className="text-base text-gray-700 leading-relaxed">
              "Wow! What a transformation! I'm very happy with the results and
              will definitely hire this company again!"
            </p>
</div>
<div className="p-8 rounded-3xl border border-gray-200/80 bg-white shadow-sm fade-in-section" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-6">
<div className="">
<h4 className="font-semibold text-gray-900 text-lg">Patrick G.</h4>
<div className="flex items-center gap-1 mt-1 text-[#ff5741]">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-gray-300" height="16" icon="solar:star-linear" style={{color: 'rgb(209, 213, 219)'}} width="16"></iconify-icon>
<span className="text-sm font-semibold text-gray-900 ml-1">
                    4.0
                  </span>
</div>
</div>
<span className="text-sm text-gray-500">May 2026</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 text-gray-700 text-xs font-medium mb-4 border border-gray-200/60">
<span className="text-[#ff5741] font-bold text-sm italic pr-0.5">
                A
              </span>
              Verified Review
            </div>
<p className="text-sm text-gray-500 mb-4 font-medium">
              Lawn Care Maintenance And Mowing
            </p>
<p className="text-base text-gray-700 leading-relaxed">
              "Reliable communication orchestrating time to complete project"
            </p>
</div>
<div className="p-8 rounded-3xl border border-gray-200/80 bg-white shadow-sm fade-in-section" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-start mb-6">
<div className="">
<h4 className="font-semibold text-gray-900 text-lg">Chad B.</h4>
<div className="flex items-center gap-1 mt-1 text-[#ff5741]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-semibold text-gray-900 ml-1">
                    5.0
                  </span>
</div>
</div>
<span className="text-sm text-gray-500">Mar 2026</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-50 text-gray-700 text-xs font-medium mb-4 border border-gray-200/60">
<span className="text-[#ff5741] font-bold text-sm italic pr-0.5">
                A
              </span>
              Verified Review
            </div>
<p className="text-sm text-gray-500 mb-4 font-medium">
              Lawn &amp; Yard Waste Clean Up
            </p>
<p className="text-base text-gray-700 leading-relaxed">
              "Great price, got the job done as expected. Hired for additional
              work."
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 flex-grow scroll-mt-10 bg-[#f4f7f4]" id="quote">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="rounded-3xl shadow-sm border overflow-hidden bg-white border-gray-200/80 w-full flex-1 fade-in-section">
<div className="p-8 sm:p-12">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100 text-green-700">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">
                Request a Free Quote
              </h2>
</div>
<p className="text-sm text-gray-500 mb-8 ml-11">
              Provide some details about your project and we'll be in touch
              soon.
            </p>
<form action="https://formsubmit.co/martinezlandscapingwa@gmail.com" className="space-y-6" id="quote-form" method="POST">
<input name="_subject" type="hidden" value="New Martinez Landscaping Quote Request"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>

<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 uppercase tracking-wide text-gray-600" htmlFor="name">
                  Full Name
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 shadow-sm focus:ring-green-500/20 focus:border-green-500 bg-white border-gray-200 text-gray-900" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 ml-1 uppercase tracking-wide text-gray-600" htmlFor="phone">
                  Phone Number
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 shadow-sm focus:ring-green-500/20 focus:border-green-500 bg-white border-gray-200 text-gray-900" id="phone" name="phone" placeholder="(123) 456-7890" required="" type="tel"/>
</div>
</div>

<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 uppercase tracking-wide text-gray-600" htmlFor="address">
                  Property Address
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 shadow-sm focus:ring-green-500/20 focus:border-green-500 bg-white border-gray-200 text-gray-900" id="address" name="address" placeholder="123 Main St, City, State, ZIP" required="" type="text"/>
</div>
</div>

<div className="">
<label className="block text-xs font-medium mb-1.5 ml-1 uppercase tracking-wide text-gray-600" htmlFor="description">
                  Type of Work
                </label>
<textarea className="block w-full p-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all placeholder-gray-400 resize-none shadow-sm focus:ring-green-500/20 focus:border-green-500 bg-white border-gray-200 text-gray-900" id="description" name="description" placeholder="Please describe the landscaping, paver, or fence project you have in mind..." required="" rows="4"></textarea>
</div>
<button className="transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex focus:ring-green-600 hover:bg-green-800 text-sm font-medium text-white bg-green-700 w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="submit">
                Submit Request
                <iconify-icon className="" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>

</div>
</div>
<div className="w-full flex-1 flex justify-center mt-12 lg:mt-0 fade-in-section" style={{animationDelay: '200ms'}}>
<img alt="Martinez Landscaping Business Card" className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-200/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6374e77c-3cec-455c-8175-78f417207e4a_800w.png"/>
</div>
</div>
</section>

<footer className="border-t py-12 mt-auto border-green-900/10 bg-green-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col items-center md:items-start gap-2">
<img alt="Martinez Landscaping Logo" className="w-auto h-14 mb-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b1b0f3f-a0f8-4085-ba1f-8b43da0a45e8_320w.png"/>
<span className="sr-only">Martinez Landscaping</span>
<span className="text-xs text-gray-500">
              © 2024 All rights reserved.
            </span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
<a className="transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 hover:text-green-700" href="tel:+12066172915">
<div className="w-8 h-8 rounded-full flex items-center justify-center border text-green-700 border-green-100 bg-green-400">
<iconify-icon className="" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
              (206) 617-2915
            </a>
<a className="transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 hover:text-green-700" href="mailto:martinezlandscapingwa@gmail.com">
<div className="w-8 h-8 rounded-full flex items-center justify-center border text-green-700 border-green-100 bg-green-400">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
              martinezlandscapingwa@gmail.com
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
