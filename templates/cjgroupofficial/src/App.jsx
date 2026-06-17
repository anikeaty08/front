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



  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.hero-tab-btn');
    const dynamicText = document.getElementById('hero-dynamic-text');
    const verticalSlider = document.getElementById('hero-vertical-slider');
    const bgLayers = document.querySelectorAll('.hero-bg-layer');
    
    const contentMap = [
      "Strategic Integration: Placing environmental protection at the heart of our corporate strategy for systematic advancement.",
      "Intelligent Oversight: Employing a sophisticated Safety and Environmental Protection Intelligent Control System for real-time monitoring and sustained ultra-low emissions.",
      "Efficiency & Renewables: Enhancing resource efficiency through production optimization and clean energy adoption like photovoltaic systems.",
      "Responsible Waste Management: Handling all solid waste in strict compliance with regulations to prevent secondary pollution."
    ];

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Reset all buttons
        tabs.forEach(t => {
          t.classList.remove('bg-[#ff5539]');
          t.classList.add('hover:bg-white/10');
        });
        
        // Activate clicked button
        tab.classList.add('bg-[#ff5539]');
        tab.classList.remove('hover:bg-white/10');

        // Crossfade text
        dynamicText.style.opacity = '0';
        setTimeout(() => {
          dynamicText.textContent = contentMap[index];
          dynamicText.style.opacity = '1';
        }, 250);

        // Move vertical slider
        verticalSlider.style.transform = `translateY(${index * 100}%)`;

        // Crossfade backgrounds
        bgLayers.forEach((layer, layerIndex) => {
          if (layerIndex === index) {
            layer.style.opacity = '1';
          } else {
            layer.style.opacity = '0';
          }
        });
      });
    });
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="bg-white w-full z-50 border-gray-100 border-b relative top-0">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex gap-1 cursor-pointer gap-x-1 gap-y-1 items-center">
<div className="relative w-8 h-8 flex items-center justify-center"></div>
<span className="mt-1 flex items-center">
<img alt="Logo" className="-translate-x-16 w-auto h-7 object-cover rounded scale-150 cursor-pointer" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fde46af7-c9d3-4749-bf47-3fc9a2dff41e_320w.png"/>
</span>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="group hover:text-black transition-colors focus:outline-none text-base font-semibold text-gray-700 pt-2 pb-2 relative" href="/home">
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
<a className="hover:text-black transition-colors text-base font-semibold text-gray-700 pt-2 pb-2" href="/esg-policy">ESG Policy</a>
<div className="group/arrow flex cursor-pointer pt-2 pr-1 pb-2 pl-1 relative items-center" onclick="window.location.href='/esg-policy'" role="button">
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md opacity-0 invisible transition-all duration-200 z-50 flex flex-col py-2 cursor-default group-hover/arrow:opacity-100 group-hover/arrow:visible">
<div className="absolute -top-2 left-0 w-full h-2"></div>
<a className="hover:text-[#FF5722] transition-colors text-base text-gray-500 pt-3 pr-5 pb-3 pl-5" href="/environment">
          Environment
        </a>
<a className="hover:text-[#FF5722] transition-colors text-base text-gray-500 pt-3 pr-5 pb-3 pl-5" href="/esg-policy">
          Social
        </a>
<a className="hover:text-[#FF5722] transition-colors text-base text-gray-500 pt-3 pr-5 pb-3 pl-5" href="/esg-policy">
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
<a className="group hover:text-black transition-colors focus:outline-none text-base font-semibold text-gray-700 pt-2 pb-2 relative" href="/contact">
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
</header><section className="relative w-full h-[600px] md:h-[760px] flex items-center bg-gray-900">

<img alt="Industrial manufacturing background" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>

<div className="bg-center bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/175e7785-4102-442f-aad3-47a75952bf7f_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="z-10 lg:px-8 w-full max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">

<p className="text-white text-base md:text-xl font-normal mb-3 md:mb-5 tracking-wide">
        CJ GROUP Since 1984
      </p>

<h1 className="text-white text-6xl md:text-8xl lg:text-[7.5rem] font-semibold tracking-tight leading-[1.05]">
        Safety in<br/>
        Every Step<span className="inline-block w-5 h-5 md:w-8 md:h-8 bg-[#ff5539] ml-2 md:ml-4 relative -top-3 md:-top-6" style={{borderRadius: '50% 0 50% 0'}}></span>
</h1>
</div>
</div>
</section>





<footer className="text-white bg-[#1a1a1a] border-[#2563EB] border-t-4 pt-0 pb-0">
<section className="md:py-24 bg-white w-full pt-16 pb-16">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col items-start">

<img alt="About Us CJ Group Title Graphic" className="md:max-w-md object-left w-full h-auto max-w-sm object-contain mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9854b3dd-a17a-4653-b49b-a5125384a531_1600w.png"/>
<h2 className="text-2xl md:text-[1.75rem] font-semibold text-black mb-6 tracking-tight">
          A Legacy of Footwear Craftsmanship Since 1984
        </h2>
<p className="text-gray-600 text-base md:text-lg font-normal leading-[1.6] mb-6">
          Founded in 2004 in Linyi, Shandong by Mr. Lin Yonggang, Chunjiang Footwear is built upon a legacy that began in 1984 when its founder first entered the footwear industry. Through his dedication and passion, what started as a small workshop has grown into a major group.
        </p>
<p className="text-gray-600 text-base md:text-lg font-normal leading-[1.6] mb-10">
          Today, the company operates from a facility spanning over 60,000 square meters, with total assets exceeding RMB 120 million and a workforce of more than 1,000 employees. We produce a wide range of safety boots certified for various hazards, serving industries from petrochemicals to new energy with customized solutions.
        </p>
<button className="hover:bg-[#e64c33] flex transition-colors cursor-pointer text-base font-normal text-white bg-[#ff5539] rounded-md pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/cj-group'" role="button">
          View More
          <div className="bg-white rounded-full p-1 flex items-center justify-center ml-1">
<i className="w-3.5 h-3.5 text-[#ff5539] stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</button>
</div>

<div className="w-full h-full min-h-[400px] md:min-h-[500px]">
<img alt="Factory Complex" className="w-full h-full object-cover rounded-sm shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/deb9171e-4118-45ce-baa0-7ee19a73c47c_1600w.jpg"/>
</div>
</div>
</div>
</section><section className="md:py-20 bg-[#f8f9fa] w-full border-gray-100 border-t py-16">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-gray-300">

<div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-0">
<div className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 flex items-baseline tracking-tight">
          60000<span className="text-2xl md:text-3xl ml-2 font-semibold">m</span>
</div>
<div className="text-base md:text-lg text-gray-500 font-normal">Factory Area</div>
</div>

<div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-0">
<div className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 flex items-baseline tracking-tight">
          1000
        </div>
<div className="text-base md:text-lg text-gray-500 font-normal">Number of Employees</div>
</div>

<div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-0">
<div className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 flex items-baseline tracking-tight">
          260<span className="text-2xl md:text-3xl ml-2 font-semibold">w</span><span className="text-2xl md:text-3xl ml-2 font-semibold">pai</span>
</div>
<div className="text-base md:text-lg text-gray-500 font-normal">Annual Output Value</div>
</div>

<div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-0">
<div className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 tracking-tight">
          51200
        </div>
<div className="text-base md:text-lg text-gray-500 font-normal">Wear Test</div>
</div>

<div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-0">
<div className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 tracking-tight">
          66
        </div>
<div className="text-base md:text-lg text-gray-500 font-normal">Standard Process</div>
</div>
</div>
</div>
</section><section className="relative w-full min-h-[800px] flex flex-col justify-center py-20 lg:py-32 overflow-hidden bg-gray-900">

<img alt="Industrial factory background" className="absolute inset-0 w-full h-full object-cover saturate-50" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>

<div className="bg-black/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e578ca4-8b89-4bf3-bee4-e158d4acf30a_3840w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-8 flex flex-col">

<div className="mb-12 lg:mb-16 max-w-3xl">
<h2 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-tight mb-4">
        Work Safety Shoes for Every Industry
      </h2>
<p className="text-white text-lg md:text-xl lg:text-2xl font-normal">
        Meet All Your Requirements
      </p>
</div>

<div className="flex flex-col lg:flex-row w-full h-auto lg:h-[450px] shadow-2xl group/row">

<div className="relative flex-1 w-full lg:w-1/5 h-[300px] lg:h-full overflow-hidden cursor-pointer group/card">
<img alt="Petrochemicals" className="brightness-[0.8] transition-all duration-300 ease-out group-hover/row:brightness-[0.4] group-hover/card:!brightness-100 group-hover/card:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f47598-f51e-4565-8e6e-cd72fdaa33e5_800w.png"/>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-lg lg:text-xl leading-tight pointer-events-none z-10">
          Petrochemicals
        </div>
</div>

<div className="relative flex-1 w-full lg:w-1/5 h-[300px] lg:h-full overflow-hidden cursor-pointer group/card">
<img alt="Mechanical Manufacturing" className="brightness-[0.8] transition-all duration-300 ease-out group-hover/row:brightness-[0.4] group-hover/card:!brightness-100 group-hover/card:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f06fa770-0ea9-4bd0-b985-b2831e2b3d9d_800w.png"/>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-lg lg:text-xl leading-snug pointer-events-none z-10">
          Mechanical <br/> Manufacturing
        </div>
</div>

<div className="relative flex-1 w-full lg:w-1/5 h-[300px] lg:h-full overflow-hidden cursor-pointer group/card">
<img alt="Firefighting &amp; Military" className="brightness-[0.8] transition-all duration-300 ease-out group-hover/row:brightness-[0.4] group-hover/card:!brightness-100 group-hover/card:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6023db56-cb85-43c3-aa46-5d8c86a48cc6_800w.png"/>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-lg lg:text-xl leading-snug pointer-events-none z-10">
          Firefighting &amp; <br/> Military
        </div>
</div>

<div className="relative flex-1 w-full lg:w-1/5 h-[300px] lg:h-full overflow-hidden cursor-pointer group/card">
<img alt="New Energy" className="brightness-[0.8] transition-all duration-300 ease-out group-hover/row:brightness-[0.4] group-hover/card:!brightness-100 group-hover/card:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c62979a4-4328-475a-a270-fa55d242832d_800w.png"/>
<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 text-white font-semibold text-lg lg:text-xl leading-tight pointer-events-none z-10">
          New Energy
        </div>
</div>

<a className="flex-1 lg:w-1/5 lg:h-full cursor-pointer hover:bg-white/90 transition-colors duration-300 flex items-end group/link bg-white/70 w-full h-[120px] pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm" href="/by-industry-application">
<div className="flex items-center text-black font-semibold text-lg lg:text-xl">
          View More 
          <i className="w-5 h-5 ml-1.5 stroke-[1.5] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</div>
</section><section className="md:py-28 bg-[#fafafa] w-full pt-20 pb-20">
<div className="max-w-[1000px] mx-auto px-6 lg:px-8">

<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-3">
        Why is <span className="text-[#ff5539]">C</span><span className="text-[#2e66e5]">J</span> Group?
      </h2>
<p className="text-lg md:text-xl font-normal text-gray-500">
        Collaborate with Your Ideal Partner
      </p>
</div>

<div className="flex flex-col gap-y-6">

<div className="group flex flex-row items-center justify-between bg-white border border-[#e0e0e0] rounded-[12px] p-8 md:px-12 md:py-10 transition-all duration-300 shadow-sm hover:shadow-md">

<div className="flex-shrink-0 mr-6">
<img alt="Design &amp; Research" className="w-20 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1d3cebd-1c02-41d0-b14f-002dcc3c968d_320w.png"/>
</div>

<div className="flex flex-col items-end text-right flex-grow">
<h3 className="md:text-3xl group-hover:text-[#2e66e5] transition-colors duration-300 text-2xl font-semibold text-[#1a1a1a] tracking-tight mb-2 cursor-pointer" onclick="window.location.href='/design-and-research'" role="button">
            Design &amp; Research
          </h3>
<p className="text-lg text-gray-500 font-normal">
            Innovative designs driven by practical needs
          </p>

<div className="h-6 mt-3 flex justify-end items-center">
<a className="inline-flex items-center text-base text-[#2e66e5] border-b border-[#2e66e5] pb-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
              View More <i className="w-4 h-4 ml-1 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>

<div className="group flex flex-row items-center justify-between bg-white border border-[#e0e0e0] rounded-[12px] p-8 md:px-12 md:py-10 transition-all duration-300 shadow-sm hover:shadow-md">

<div className="flex-shrink-0 mr-6">
<img alt="Quality Management" className="w-20 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d70fbcf4-5236-413d-b327-e8e074eefc7a_320w.png"/>
</div>

<div className="flex flex-col items-end text-right flex-grow">
<h3 className="md:text-3xl group-hover:text-[#2e66e5] transition-colors duration-300 text-2xl font-semibold text-[#1a1a1a] tracking-tight mb-2 cursor-pointer" onclick="window.location.href='/quality-compliance'" role="button">
            Quality Management
          </h3>
<p className="text-lg text-gray-500 font-normal">
            Rigorous quality control ensures unmatched reliability
          </p>

<div className="h-6 mt-3 flex justify-end items-center">
<a className="inline-flex items-center text-base text-[#2e66e5] border-b border-[#2e66e5] pb-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
              View More <i className="w-4 h-4 ml-1 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>

<div className="group flex flex-row items-center justify-between bg-white border border-[#e0e0e0] rounded-[12px] p-8 md:px-12 md:py-10 transition-all duration-300 shadow-sm hover:shadow-md">

<div className="flex-shrink-0 mr-6">
<img alt="Intelligent Manufacturing" className="w-20 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22e128a7-dbe5-4190-9518-0c8b9e5d8023_320w.png"/>
</div>

<div className="flex flex-col items-end text-right flex-grow">
<h3 className="md:text-3xl group-hover:text-[#2e66e5] transition-colors duration-300 text-2xl font-semibold text-[#1a1a1a] tracking-tight mb-2 cursor-pointer" onclick="window.location.href='/intelligent-manufacturing'" role="button">
            Intelligent Manufacturing
          </h3>
<p className="text-lg text-gray-500 font-normal">
            processes ensure superior consistency and efficiency
          </p>

<div className="h-6 mt-3 flex justify-end items-center">
<a className="inline-flex items-center text-base text-[#2e66e5] border-b border-[#2e66e5] pb-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" href="#">
              View More <i className="w-4 h-4 ml-1 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="flex flex-col md:block md:h-[500px] lg:h-[60vh] overflow-hidden bg-[#1a1a1a] w-full h-[600px] relative">

<div className="relative md:absolute md:inset-0 w-full h-1/2 md:h-full group md:[clip-path:polygon(0_0,55%_0,45%_100%,0_100%)] overflow-hidden z-10 md:hover:z-20 transition-all duration-300 bg-gray-900">

<img alt="ESG Policy Background" className="brightness-[0.6] transition-all duration-500 ease-out group-hover:brightness-100 group-hover:scale-105 w-full h-full object-cover z-[1] absolute top-0 left-0 scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5619a89-9bb8-4a71-96e8-7895c4ba181e_3840w.jpg"/>

<div className="absolute top-0 left-0 w-full md:w-[50%] h-full flex flex-col items-center justify-center z-[2] px-6 pointer-events-none">
<h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-center">
        ESG Policy
      </h2>
<a className="pointer-events-auto inline-flex items-center md:text-base lg:text-lg transition-colors hover:text-gray-200 hover:border-gray-200 text-sm text-white border-white border-b pb-[2px]" href="/esg-policy">
        View More <i className="w-4 h-4 ml-1.5 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="relative md:absolute md:inset-0 w-full h-1/2 md:h-full group md:[clip-path:polygon(55%_0,100%_0,100%_100%,45%_100%)] overflow-hidden z-10 md:hover:z-20 transition-all duration-300 bg-gray-900">

<img alt="Accelerated Delivery Background" className="z-[1] brightness-[0.6] transition-all duration-500 ease-out group-hover:brightness-100 group-hover:scale-105 w-full h-full object-cover absolute top-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98e49592-028a-42a7-8214-07eaa96e756a_3840w.jpg"/>

<div className="absolute top-0 right-0 w-full md:w-[50%] h-full flex flex-col items-center justify-center z-[2] px-6 pointer-events-none">
<h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-center">
        Accelerated Delivery
      </h2>
<a className="pointer-events-auto inline-flex items-center text-sm md:text-base lg:text-lg text-white border-b border-white pb-[2px] transition-colors hover:text-gray-200 hover:border-gray-200" href="/fast-delivery">
        View More <i className="w-4 h-4 ml-1.5 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section><footer className="text-white bg-[#1a1a1a] border-[#2563EB] border-t-4 pt-16 pb-8">
<div className="lg:px-8 flex flex-col max-w-[90rem] mr-auto ml-auto pr-6 pl-6 items-center">

<div className="flex-shrink-0 flex items-center gap-1 mb-12">
<img alt="CJ Corporate Logo" className="w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795926d6-f0a8-4628-9487-2ca724aad4c5_320w.png"/>
</div>

<nav className="flex flex-wrap w-full border-gray-800 border-b mb-16 pb-12 gap-x-12 gap-y-4 justify-center">
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/home">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/cj-group">
            About Us
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/design-and-research">
            Why is CJ
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/by-industry-application">
            Products
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/esg-policy">
            ESG Policy
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/blog-news">
            Blog(News)
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group transition-colors text-base font-semibold text-white pt-1 pb-1 relative" href="/contact">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
</nav>

<p className="text-sm text-gray-500 font-normal">
          © 2025 All rights reserved.
        </p>
</div>
</footer></footer>




    </>
  );
}
