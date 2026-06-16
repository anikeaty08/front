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



    document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('blog-card-container');
      if (!container) return;
      
      const totalPages = 4;
      const allCards = container.querySelectorAll('.blog-card');
      const pageBtns = document.querySelectorAll('.page-btn');
      const prevBtn = document.getElementById('prev-page');
      const nextBtn = document.getElementById('next-page');
      
      let currentPage = 1;

      function renderPage(page) {
        allCards.forEach(card => {
          const cardPage = parseInt(card.getAttribute('data-page'));
          if (cardPage === page) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 30);
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });

        pageBtns.forEach(btn => {
          if (parseInt(btn.getAttribute('data-page')) === page) {
            btn.classList.remove('font-normal', 'text-gray-400');
            btn.classList.add('font-semibold', 'text-black');
          } else {
            btn.classList.remove('font-semibold', 'text-black');
            btn.classList.add('font-normal', 'text-gray-400');
          }
        });

        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;

        if (currentPage !== page) {
          document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        currentPage = page;
      }

      pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          renderPage(parseInt(this.getAttribute('data-page')));
        });
      });

      prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
          renderPage(currentPage - 1);
        }
      });

      nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
          renderPage(currentPage + 1);
        }
      });

      renderPage(1);
    });
  


      // Initialize Lucide Icons
      lucide.createIcons();

      // Vertical Slider Logic
      document.addEventListener('DOMContentLoaded', () => {
          const track = document.getElementById('slider-track');
          const dots = document.querySelectorAll('.slider-dot');
          let currentSlide = 0;

          function goToSlide(index) {
              currentSlide = index;
              // Calculate percentage based on number of slides (pages). Assuming 100% per slide container.
              track.style.transform = `translateY(-${index * 100}%)`;

              // Update dots
              dots.forEach((dot, i) => {
                  if (i === index) {
                      dot.classList.remove('bg-gray-300');
                      dot.classList.add('bg-gray-800');
                  } else {
                      dot.classList.remove('bg-gray-800');
                      dot.classList.add('bg-gray-300');
                  }
              });
          }

          dots.forEach((dot, index) => {
              dot.addEventListener('click', () => goToSlide(index));
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white w-full z-50 border-gray-100 border-b relative top-0">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex gap-1 cursor-pointer gap-x-1 gap-y-1 items-center">
<div className="relative w-8 h-8 flex items-center justify-center"></div>
<span className="mt-1 flex items-center">
<img alt="Logo" className="w-auto h-7 object-cover rounded -translate-x-16 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fde46af7-c9d3-4749-bf47-3fc9a2dff41e_320w.png"/>
</span>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="relative group py-2 text-gray-700 hover:text-black transition-colors text-base font-semibold focus:outline-none" href="/home">
    Home
    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</a>
<div className="group relative flex items-center focus:outline-none" tabindex="0">
<a className="hover:text-black transition-colors text-base font-semibold text-gray-700 py-2" href="/cj-group">About Us</a>
<div className="group/arrow relative flex items-center cursor-pointer px-1 py-2">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible transition-all duration-200 z-50 flex flex-col py-2 cursor-default group-hover/arrow:opacity-100 group-hover/arrow:visible">
<div className="absolute -top-2 left-0 w-full h-2"></div>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/cj-group">
          CJ Group
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/history">
          History
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/honor-certification">
          Honor &amp; Certification
        </a>
</div>
</div>
<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</div>
<div className="group relative flex items-center focus:outline-none" tabindex="0">
<a className="hover:text-black transition-colors text-base font-semibold text-gray-700 py-2" href="/design-and-research">Why is CJ</a>
<div className="group/arrow relative flex items-center cursor-pointer px-1 py-2">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible transition-all duration-200 z-50 flex flex-col py-2 cursor-default group-hover/arrow:opacity-100 group-hover/arrow:visible">
<div className="absolute -top-2 left-0 w-full h-2"></div>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/design-and-research">
          Design &amp; Research
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/quality-compliance">
          Quality &amp; Compliance
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/intelligent-manufacturing">
          Intelligent Manufacturing
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/supply-chain-management">
          Supply Chain Management
        </a>
</div>
</div>
<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</div>
<div className="group relative flex items-center focus:outline-none" tabindex="0">
<a className="hover:text-black transition-colors text-base font-semibold text-gray-700 py-2" href="/fast-delivery">Products</a>
<div className="group/arrow flex cursor-pointer pt-2 pr-1 pb-2 pl-1 relative items-center" onclick="window.location.href='/products'" role="button">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible transition-all duration-200 z-50 flex flex-col py-2 cursor-default group-hover/arrow:opacity-100 group-hover/arrow:visible">
<div className="absolute -top-2 left-0 w-full h-2"></div>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/fast-delivery">
          Fast Delivery
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/by-industry-application">
          By Industry Application
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/by-function">
          By Function
        </a>
</div>
</div>
<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</div>
<div className="group relative flex items-center focus:outline-none" tabindex="0">
<a className="hover:text-black transition-colors text-base font-semibold text-gray-700 py-2" href="/environment">ESG Policy</a>
<div className="group/arrow relative flex items-center cursor-pointer px-1 py-2">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible transition-all duration-200 z-50 flex flex-col py-2 cursor-default group-hover/arrow:opacity-100 group-hover/arrow:visible">
<div className="absolute -top-2 left-0 w-full h-2"></div>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/environment">
          Environment
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/social">
          Social
        </a>
<a className="px-5 py-3 text-base text-gray-500 hover:text-[#FF5722] transition-colors" href="/governance">
          Governance
        </a>
</div>
</div>
<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</div>
<a className="relative group py-2 text-gray-700 hover:text-black transition-colors text-base font-semibold focus:outline-none" href="/blog-news">
    Blog(News)
    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</a>
<a className="relative group py-2 text-gray-700 hover:text-black transition-colors text-base font-semibold focus:outline-none" href="/contact">
    Contact
    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF5722] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 pointer-events-none"></span>
</a>
</nav>

<div className="hidden md:flex items-center ml-6 border-l border-gray-200 pl-6">
<button className="text-gray-500 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-black focus:outline-none">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header><section className="py-24 bg-white relative w-full overflow-x-hidden" id="blog-section">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8 mb-24">
<div className="relative flex items-center w-max">
<div className="absolute right-full mr-6 lg:mr-8 top-1/2 -translate-y-1/2 w-[100vw] h-7 lg:h-9 bg-[#2563EB]"></div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-none">Blog(News)</h2>
<div className="flex items-center ml-4 h-7 lg:h-9">
<div className="w-6 h-full bg-[#2563EB]"></div>
<div className="w-10 h-full bg-[#FF5722]" style={{clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)'}}></div>
</div>
</div>
</div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-8 min-h-[800px]" id="blog-card-container">

<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="1">
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Team Discussion" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Material Innovation</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 4 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="1">
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Laboratory" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Material Innovation</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 4 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="1">
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Showroom" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Material Innovation</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 4 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="1">
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Team Photo" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Material Innovation</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 4 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>

<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="2" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Production Line" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Future of Manufacturing</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 3 - 22</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="2" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Research" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Sustainable Solutions</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 3 - 15</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="2" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Quality Check" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Advanced QA Process</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 2 - 28</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="2" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Factory Floor" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Supply Chain Dynamics</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 2 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>

<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="3" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Showroom" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Global ESG Standards</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 1 - 25</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="3" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Team Photo" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Community Outreach</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 1 - 18</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="3" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Team Discussion" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Partnership Agreements</h3>
<p className="text-sm text-gray-500 mt-2">2026 - 1 - 05</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="3" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Laboratory" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Next-Gen Materials</h3>
<p className="text-sm text-gray-500 mt-2">2025 - 12 - 20</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>

<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="4" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Production Line" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Year in Review</h3>
<p className="text-sm text-gray-500 mt-2">2025 - 12 - 10</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="4" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Quality Check" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Industry Awards 2025</h3>
<p className="text-sm text-gray-500 mt-2">2025 - 11 - 15</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="4" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Research" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Pioneering Processes</h3>
<p className="text-sm text-gray-500 mt-2">2025 - 10 - 28</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
<div className="blog-card flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 transition-opacity duration-300" data-page="4" style={{display: 'none'}}>
<div className="w-full md:w-2/5 flex-shrink-0">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Material Innovation - Factory Floor" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
<div className="w-full md:w-3/5 flex flex-col justify-center py-2 md:py-4">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Expansion Highlights</h3>
<p className="text-sm text-gray-500 mt-2">2025 - 10 - 05</p>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">We utilize bio-based materials (yarn extracted from castor oil), recycled PET fabric, and coffee yarn alongside conventional premium materials like full-grain cowhide and nubuck leather.</p>
<div className="mt-8 lg:mt-auto pt-6">
<a className="text-[#FF5722] text-lg font-light hover:text-[#e64a19] transition-colors inline-flex items-center group" href="#">
            Reading <span className="ml-2 mt-[2px] transition-transform group-hover:translate-x-1">»</span>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-8 mt-4 mb-8 flex items-center justify-center gap-4">
<button aria-label="Previous page" className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none" id="prev-page">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center gap-3">
<button className="page-btn w-10 h-10 flex items-center justify-center text-xl font-semibold text-black transition-colors focus:outline-none" data-page="1">1</button>
<button className="page-btn w-10 h-10 flex items-center justify-center text-xl font-normal text-gray-400 hover:text-gray-900 transition-colors focus:outline-none" data-page="2">2</button>
<button className="page-btn w-10 h-10 flex items-center justify-center text-xl font-normal text-gray-400 hover:text-gray-900 transition-colors focus:outline-none" data-page="3">3</button>
<button className="page-btn w-10 h-10 flex items-center justify-center text-xl font-normal text-gray-400 hover:text-gray-900 transition-colors focus:outline-none" data-page="4">4</button>
</div>
<button aria-label="Next page" className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none" id="next-page">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

</section>





<footer className="bg-[#1a1a1a] pt-16 pb-8 text-white border-t-4 border-[#2563EB]">
<div className="lg:px-8 flex flex-col max-w-[90rem] mr-auto ml-auto pr-6 pl-6 items-center">

<div className="flex-shrink-0 flex items-center gap-1 mb-12">
<img alt="CJ Corporate Logo" className="w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795926d6-f0a8-4628-9487-2ca724aad4c5_320w.png"/>
</div>

<nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16 w-full border-b border-gray-800 pb-12">
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            About Us
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            Why is CJ
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            Products
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            ESG Policy
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            Blog(News)
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="relative group py-1 text-white text-base font-semibold transition-colors" href="#">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
</nav>

<p className="text-sm text-gray-500 font-normal">
          © 2025 All rights reserved.
        </p>
</div>
</footer>




    </>
  );
}
