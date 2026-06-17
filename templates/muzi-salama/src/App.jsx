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



      // Scroll Animation Observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

      // Download Modal
      function openDownloadModal() {
          document.getElementById('downloadModal').classList.add('active');
          document.body.style.overflow = 'hidden';
      }
      function closeDownloadModal() {
          document.getElementById('downloadModal').classList.remove('active');
          document.body.style.overflow = '';
      }
      function handleDownload(e) {
          e.preventDefault();
          closeDownloadModal();
          // Simulate download
          alert('Thank you! Your download will begin shortly. Check your email for the full brochure.');
      }

      // Registration Form
      function handleRegister(e) {
          e.preventDefault();
          document.getElementById('successModal').classList.add('active');
          document.body.style.overflow = 'hidden';
          e.target.reset();
      }
      function closeSuccessModal() {
          document.getElementById('successModal').classList.remove('active');
          document.body.style.overflow = '';
      }

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          });
      });

      // Counter animation for progress bar
      const progressSection = document.querySelector('.w-\\[87\\%\\]');
      if (progressSection) {
          const progressObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.style.width = '87%';
                  }
              });
          }, { threshold: 0.5 });
          progressSection.style.width = '0%';
          progressObserver.observe(progressSection);
      }
    


      function openSubscribeModal(){document.getElementById('subscribeModal').classList.add('active');document.body.style.overflow='hidden';}
      function closeSubscribeModal(){document.getElementById('subscribeModal').classList.remove('active');document.body.style.overflow='';}
      function closeSubscribeSuccessModal(){document.getElementById('subscribeSuccessModal').classList.remove('active');document.body.style.overflow='';}
      function handleSubscribe(e){
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch('https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/', { method: 'POST', body: data, mode: 'no-cors' }).catch(()=>{});
        document.getElementById('subscribeModal').classList.remove('active');
        document.getElementById('subscribeSuccessModal').classList.add('active');
        document.body.style.overflow='hidden';
        form.reset();
      }
      function handleRegister(e){
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch('https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/', { method: 'POST', body: data, mode: 'no-cors' }).catch(()=>{});
        document.getElementById('successModal').classList.add('active');
        document.body.style.overflow='hidden';
        form.reset();
      }
    


      const floorPlans={'2bed':'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98075abc-03f5-46ae-af0d-de9c257d7ddb_1600w.png','3bed':'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e84f2f02-6831-4b9a-a43c-39d3dd9d4777_1600w.png'};
      function openFloorPlanModal(type){document.getElementById('floorPlanImage').src=floorPlans[type];document.getElementById('floorPlanModal').classList.add('active');document.body.style.overflow='hidden';}
      function closeFloorPlanModal(){document.getElementById('floorPlanModal').classList.remove('active');document.body.style.overflow='';}
      function handleDownload(e){e.preventDefault();const form=e.target;const data=new FormData(form);data.append('source','brochure_download');data.append('country','Kenya');fetch('https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/',{method:'POST',body:data,mode:'no-cors'}).catch(()=>{});closeDownloadModal();form.reset();window.open('https://drive.google.com/file/d/17ioWQSMVPqr1BtK2EcaTcyRuwwTQaizn/view?usp=sharing','_blank');}
    
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
      

<nav className="absolute top-0 w-full z-50 pt-6 px-4 lg:px-8">
<div className="flex gap-4 sm:px-6 sm:py-3 bg-white/10 max-w-7xl border-white/20 border rounded-full mr-auto ml-auto pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur-xl gap-x-4 gap-y-4 items-center justify-between">

<div className="shrink-0 flex gap-3 items-center min-w-0">
<a className="flex items-center transition-opacity hover:opacity-80" href="#">
<img alt="Muzisalama Logo" className="w-auto h-9 sm:h-12 object-contain rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e39c4445-de9c-46d1-ae89-10a1ed53d96f_800w.png"/>
<img alt="Muzisalama Logo" className="w-auto h-9 sm:h-12 object-contain rounded-lg shadow-sm hidden sm:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bb9b8f1-de7a-4e80-913f-6351c56e2ca2_320w.png"/>
</a>
<div className="hidden xl:flex gap-3 items-center">
<div className="w-px h-8 bg-white/30"></div>
<div className="flex flex-col">
<span className="text-[10px] uppercase font-medium text-white/60 tracking-widest">
                An IHS Kenya Development
              </span>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-white/90">
<a className="hover:text-white transition-colors drop-shadow-sm" href="https://muzi-salama.co.ke/home/">
            Home
          </a>
<a className="hover:text-white transition-colors drop-shadow-sm" href="https://muzi-salama.co.ke/amenities/">
            Amenities
          </a>
<a className="hover:text-white transition-colors drop-shadow-sm" href="https://muzi-salama.co.ke/lifestyle/">
            Lifestyle
          </a>
<a className="hover:text-white transition-colors drop-shadow-sm" href="https://muzi-salama.co.ke/smart-investment/">
            Smart Investment
          </a>
<div className="relative dropdown-parent">
<a className="hover:text-white transition-colors flex items-center gap-1 drop-shadow-sm" href="#">
              More
              <iconify-icon className="" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
<div className="dropdown-menu">
<a className="" href="https://muzi-salama.co.ke/construction-updates/">
                Construction Updates
              </a>
<a className="" href="https://muzi-salama.co.ke/buy-to-rent/">
                Buy-To-Rent
              </a>
<a className="" href="https://muzi-salama.co.ke/faqs/">FAQs</a>
<a className="" href="https://muzi-salama.co.ke/contact-us/">
                Contact Us
              </a>
</div>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">
<a className="hidden sm:inline-flex items-center justify-center sm:px-5 hover:bg-gray-50 transition-all whitespace-nowrap text-sm font-semibold text-[#001C36] bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#register">
            Start Buying
          </a>

<button className="lg:hidden flex hover:bg-white/10 transition-colors text-white w-10 h-10 rounded-full items-center justify-center" id="mobileMenuBtn" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<iconify-icon className="" height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</div>
<div className="lg:hidden hidden mt-3 mx-4 bg-white rounded-3xl shadow-xl border border-black/5 p-5" id="mobileMenu">
<div className="flex flex-col space-y-1 text-base font-medium text-[#001C36]">
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/home/">
            Home
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/amenities/">
            Amenities
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/lifestyle/">
            Lifestyle
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/smart-investment/">
            Smart Investment
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/construction-updates/">
            Construction Updates
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/buy-to-rent/">
            Buy-To-Rent
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/faqs/">
            FAQs
          </a>
<a className="px-4 py-3 rounded-xl hover:bg-[#F4F7F5]" href="https://muzi-salama.co.ke/contact-us/">
            Contact Us
          </a>
<a className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#0071E3] rounded-full hover:bg-[#005BBB] transition-all" href="#register">
            Start Buying
          </a>
</div>
</div>
</nav>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
<img alt="Modern Architecture" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/230fe872-0106-4d1d-afef-c9cfc45afb2b_3840w.png"/>
<div className="bg-gradient-to-tr from-[#001C36]/95 via-[#001C36]/50 to-[#0071E3]/20 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col gap-6 text-center w-full max-w-4xl pt-20 pr-6 pb-32 pl-6 relative gap-x-6 gap-y-6 items-center">
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white/90 mix-blend-overlay drop-shadow-md animate-fade-in-up">
          A new standard of living.
        </h1>
<p className="text-lg sm:text-xl text-white/80 font-normal max-w-2xl drop-shadow-sm animate-fade-in-up delay-200">
          Discover thoughtfully designed residences that blend modern comfort
          with serene surroundings. Choose your path to Muzi Salama.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fade-in-up delay-400">
<a className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#001C36] bg-white rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg" href="#register">
<iconify-icon className="" height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
            Register Interest Now
          </a>
<a className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300" href="#units">
            View Units
            <iconify-icon height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>
<main className="flex flex-col w-full">

<div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-24 relative z-20 w-full mb-20">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

<a className="group p-8 bg-[#F4F7F5] border border-black/5 rounded-3xl hover:border-[#0071E3]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-full" href="#units">
<div className="">
<div className="w-14 h-14 rounded-full bg-white border border-black/5 flex items-center justify-center mb-6 text-[#001C36] shadow-sm group-hover:scale-105 group-hover:text-[#0071E3] transition-all duration-300">
<iconify-icon height="24" icon="solar:key-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#001C36] mb-3">
                Buy a home
              </h3>
<p className="text-base text-[#4B5563] font-normal leading-relaxed">
                Find your perfect permanent residence among our contemporary
                apartments.
              </p>
</div>
</a>

<a className="group p-8 bg-[#FDF8F3] border border-black/5 rounded-3xl hover:border-[#F59E0B]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-full" href="#">
<div className="">
<div className="w-14 h-14 rounded-full bg-white border border-black/5 flex items-center justify-center mb-6 text-[#D97706] shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon className="" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#001C36] mb-3">
                Invest
              </h3>
<p className="text-base text-[#4B5563] font-normal leading-relaxed">
                View high-yield opportunities and secure your early stake in
                Tilisi.
              </p>
</div>
</a>

<a className="group p-8 bg-[#F3F6FD] border border-black/5 rounded-3xl hover:border-[#0071E3]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-full" href="#">
<div className="">
<div className="w-14 h-14 rounded-full bg-white border border-black/5 flex items-center justify-center mb-6 text-[#0071E3] shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon height="24" icon="solar:armchair-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#001C36] mb-3">
                Live here
              </h3>
<p className="text-base text-[#4B5563] font-normal leading-relaxed">
                Browse premium long-term rentals and flexible, vibrant living
                arrangements.
              </p>
</div>
</a>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full">
<div className="bg-[#001C36] text-white rounded-[3rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-[#003A70] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium tracking-wide uppercase text-[#0071E3] mb-8">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                Tilisi, Limuru
              </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Sustainable urban development and community-centric living.
              </h2>
<p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 font-normal">
                Nestled within the scenic landscape of Tilisi, Limuru, Muzi
                Salama stands as a testament to sustainable urban development.
                Developed by IHS Kenya, this innovative project spans 2.5 acres
                and is designed to address the growing demand for affordable yet
                high quality housing solutions in Kenya.
              </p>
<div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-normal text-base sm:text-lg backdrop-blur-md">
<iconify-icon className="text-[#0071E3]" height="24" icon="solar:home-2-linear" width="24"></iconify-icon>
                2 and 3-bedroom, master en-suite contemporary apartments.
              </div>
</div>

<div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#0071E3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-16 h-16 rounded-full bg-[#0071E3]/20 flex items-center justify-center text-[#0071E3] mb-8">
<iconify-icon height="32" icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-5">
                A 15-Minute City
              </h3>
<p className="text-lg text-white/70 leading-relaxed font-normal">
                Tilisi is a revolutionary concept in Kenya. Designed as a
                walkable 15-minute city, Tilisi is a visionary 400-acre
                mixed-use development in Limuru, Kiambu County, Kenya. Designed
                as a self-sufficient community, Tilisi integrates residential,
                commercial, industrial, and recreational spaces.
              </p>
</div>
</div>

<div className="relative z-10 mt-16 w-full aspect-[21/9] sm:aspect-[2.5/1] rounded-[2rem] overflow-hidden group border border-white/10">
<img alt="Tilisi Masterplan" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" src="https://marcopolis.net/wp-content/uploads/company_news/2020/May_2020/Tilisi/Real_Estate_in_Kenya_How_Tilisi_are_Ensuring_Business_Continuity_During_the_COVID_19_Pandemic.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#001C36] via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wide uppercase text-white mb-3">
                Masterplan View
              </div>
<h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
                Tilisi 400-Acre Development
              </h3>
<p className="text-sm sm:text-base text-white/70 font-normal max-w-2xl">
                A visionary mixed-use urban node integrating residential,
                commercial, and expansive green recreational spaces.
              </p>
</div>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6" id="units">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
<div className="max-w-3xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#001C36] mb-5">
              Unit Types &amp; Floor Plans
            </h2>
<p className="text-lg text-[#4B5563] font-normal leading-relaxed">
              Thoughtfully designed layouts maximizing space and natural light.
              Choose between our contemporary 2 and 3-bedroom configurations.
            </p>
</div>
<button className="inline-flex items-center gap-2 text-base font-medium text-[#001C36] hover:text-[#0071E3] transition-colors group" onclick="openDownloadModal()">
            Download Brochure
            <iconify-icon className="group-hover:-translate-y-1 transition-transform" height="20" icon="solar:download-linear" width="20"></iconify-icon>
</button>
</div>
<div className="grid lg:grid-cols-2 gap-10">

<div className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full group scroll-animate visible">
<div className="w-full aspect-[16/10] relative overflow-hidden">
<img alt="2 Bedroom Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98075abc-03f5-46ae-af0d-de9c257d7ddb_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-sm font-medium text-[#001C36]">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Phase 1 Available
              </div>
<div className="absolute bottom-5 left-5 right-5">
<div className="flex items-center gap-3 flex-wrap">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    Master En-suite
                  </span>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    Contemporary
                  </span>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    Balcony
                  </span>
</div>
</div>
</div>
<div className="p-8 sm:p-10 flex flex-col flex-1">
<div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
<div className="">
<h3 className="text-3xl font-medium tracking-tight text-[#001C36] mb-2">
                    2 Bedroom Unit
                  </h3>
<p className="text-base text-[#4B5563] font-normal">
                    Master en-suite contemporary apartment
                  </p>
</div>
<div className="sm:text-right">
<p className="text-xs text-[#4B5563] font-medium uppercase tracking-widest mb-1">
                    Starting from
                  </p>
<p className="text-3xl font-medium tracking-tight text-[#0071E3]">
                    KES 5.75 M
                  </p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:bed-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">2 Beds</p>
</div>
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:bath-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">2 Baths</p>
</div>
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:ruler-angular-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">60.9 m²</p>
</div>
</div>
<div className="flex gap-3 mt-auto">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0071E3] rounded-full hover:bg-[#005BBB] transition-all" href="#register">
                  Reserve Now
                </a>
<button className="inline-flex hover:bg-[#E5E7EB] transition-all text-sm font-medium text-[#001C36] bg-[#F4F7F5] rounded-full pt-3.5 pr-5 pb-3.5 pl-5 gap-x-2 gap-y-2 items-center justify-center" onclick="openFloorPlanModal('2bed')">
<iconify-icon className="" height="18" icon="solar:eye-linear" style={{color: 'rgb(0, 28, 54)'}} width="18"></iconify-icon>
                  Floor Plan
                </button>
</div>
</div>
</div>

<div className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full group scroll-animate delay-200 visible">
<div className="w-full aspect-[16/10] relative overflow-hidden">
<img alt="3 Bedroom Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e84f2f02-6831-4b9a-a43c-39d3dd9d4777_1600w.png"/>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-sm font-medium text-[#001C36]">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Phase 1 Available
              </div>
<div className="absolute bottom-5 left-5 right-5">
<div className="flex items-center gap-3 flex-wrap">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    Master En-suite
                  </span>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    DSQ Option
                  </span>
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                    Large Balcony
                  </span>
</div>
</div>
</div>
<div className="p-8 sm:p-10 flex flex-col flex-1">
<div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
<div className="">
<h3 className="text-3xl font-medium tracking-tight text-[#001C36] mb-2">
                    3 Bedroom Unit
                  </h3>
<p className="text-base text-[#4B5563] font-normal">
                    Master en-suite contemporary apartment
                  </p>
</div>
<div className="sm:text-right">
<p className="text-xs text-[#4B5563] font-medium uppercase tracking-widest mb-1">
                    Starting from
                  </p>
<p className="text-3xl font-medium tracking-tight text-[#0071E3]">
                    KES 7.7 M
                  </p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:bed-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">3 Beds</p>
</div>
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:bath-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">3 Baths</p>
</div>
<div className="text-center p-4 bg-[#FAFAFB] rounded-2xl">
<iconify-icon className="text-[#0071E3] mb-1" height="24" icon="solar:ruler-angular-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-[#001C36]">83.4 m²</p>
</div>
</div>
<div className="flex gap-3 mt-auto">
<a className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0071E3] rounded-full hover:bg-[#005BBB] transition-all" href="#register">
                  Reserve Now
                </a>
<button className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#001C36] bg-[#F4F7F5] rounded-full hover:bg-[#E5E7EB] transition-all" onclick="openFloorPlanModal('3bed')">
<iconify-icon height="18" icon="solar:eye-linear" width="18"></iconify-icon>
                  Floor Plan
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 lg:px-8 pb-32 pt-10 w-full">
<div className="flex flex-col">

<div className="flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] text-white text-base font-normal shadow-sm">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
              Structure Complete
            </div>
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3] text-white text-base font-normal shadow-sm">
<iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
              Utilities Installation
            </div>
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0071E3]/5 border border-[#0071E3]/20 text-[#0071E3] text-base font-normal">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
              Finishing Works
            </div>
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-black/10 text-[#6B7280] text-base font-normal">
              Landscaping (Upcoming)
            </div>
</div>

<div className="mt-16 w-full">
<div className="flex items-end justify-between mb-4">
<span className="text-xl text-[#4B5563] font-normal">
                Overall Project Completion
              </span>
<span className="text-3xl font-medium tracking-tight text-[#0071E3]">
                92%
              </span>
</div>
<div className="w-full h-3 bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-[#0071E3] rounded-full w-[92%] transition-all duration-1000 ease-out" style={{width: '92%'}}></div>
</div>
<div className="text-right mt-4 text-base font-normal text-[#9CA3AF]">
              Target Completion: Q2 2026
            </div>
</div>
</div>
</section>

<section className="w-full py-4 px-4 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group scroll-animate visible">
<img alt="Exterior View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/50 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/000652fb-1e90-44ea-af3c-21bd9fda634e_1600w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  Exterior View
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group scroll-animate delay-100 visible">
<img alt="Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da40bd2b-a6bc-4d64-8517-41a5b689b34e_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  Kitchen
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group scroll-animate delay-200 visible">
<img alt="Bathroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b80b43ee-9169-4b0a-8650-fb6308b87e69_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  Bathroom
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group scroll-animate delay-300 visible">
<img alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="bg-gradient-to-t from-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/454ced00-1fa4-4bf9-bef7-45ac2e8b8f11_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  Bedroom
                </span>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group scroll-animate delay-400 visible">
<img alt="Living Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7a99eaa-6729-4cfd-b3d4-55bb8dbbfb4b_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  Living Area
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-4 sm:pr-6 pb-20 pl-4 sm:pl-6" id="videos">
<div className="mb-14 scroll-animate visible">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#001C36] mb-5">
            Video Tours
          </h2>
<p className="text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl">
            Take a virtual walk through our units and explore the Tilisi
            community from wherever you are.
          </p>
<div className="mt-8 scroll-animate delay-200 visible">
<div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#001C36] shadow-2xl border border-black/5">
<div className="aspect-video relative">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1182542953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<div className="p-6 flex items-center justify-between">
<div>
<h4 className="font-medium text-[#001C36] text-lg tracking-tight hidden"></h4>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#4B5563] hover:text-[#0071E3] transition-colors" href="https://vimeo.com/1182542953?fl=tl&amp;fe=ec" rel="noopener noreferrer" target="_blank">
                  Watch on Vimeo
                  <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-12 scroll-animate visible">
<div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#001C36] shadow-2xl border border-black/5">
<div className="aspect-video relative">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1182549330?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<div className="p-6 flex items-center justify-between">
<div>
<h4 className="font-medium text-[#001C36] text-lg tracking-tight hidden"></h4>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#4B5563] hover:text-[#0071E3] transition-colors" href="https://vimeo.com/1182549330?fl=tl&amp;fe=ec" rel="noopener noreferrer" target="_blank">
                  Watch on Vimeo
                  <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-4 sm:pr-6 pb-20 pl-4 sm:pl-6" id="register">
<div className="relative bg-gradient-to-br from-[#0071E3] via-[#005BBB] to-[#001C36] rounded-[3rem] p-8 sm:p-12 lg:p-20 overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#001C36]/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="scroll-animate">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-medium text-white mb-8">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
                Limited Phase 1 Units
              </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Start your journey home today.
              </h2>
<p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal mb-8">
                Register your interest to begin the buying process. Our team
                will guide you through every step — from unit selection to
                financing options and move-in.
              </p>
<div className="flex flex-wrap gap-6 text-white/70">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-base">No commitment required</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-base">Flexible payment plans</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-base">Priority unit selection</span>
</div>
</div>
</div>
<div className="scroll-animate delay-300">
<form action="https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/" className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl" id="registerForm" method="POST" onsubmit="handleRegister(event)">
<input name="country" type="hidden" value="Kenya"/>
<h3 className="text-2xl font-medium tracking-tight text-[#001C36] mb-2">
                  Register Your Interest
                </h3>
<p className="text-base text-[#4B5563] mb-8">
                  Fill in your details and we'll be in touch within 24 hours.
                </p>
<div className="space-y-5">
<div className="">
<label className="block text-sm font-medium text-[#001C36] mb-2">
                      Full Name *
                    </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="full_name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-[#001C36] mb-2">
                      Email Address *
                    </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-[#001C36] mb-2">
                      Phone Number *
                    </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="phone" placeholder="+254 700 000 000" required="" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium text-[#001C36] mb-2">
                      Interested In
                    </label>
<select className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="interest">
<option>2 Bedroom Unit</option>
<option>3 Bedroom Unit</option>
<option>Investment Opportunity</option>
<option>Rental / Long-term Lease</option>
</select>
</div>
<button className="hover:bg-[#005BBB] transition-all duration-300 hover:shadow-xl flex text-base font-semibold text-white bg-[#0071E3] w-full rounded-xl pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="submit">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
                    Submit &amp; Start Process
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>


<a className="whatsapp-float fixed z-[100] flex items-center justify-center hover:scale-110 transition-transform duration-300 group bg-[#25D366] w-16 h-16 rounded-full right-6 bottom-6 shadow-2xl" href="https://wa.me/254705004004?text=Hi%2C%20I'm%20interested%20in%20Muzi%20Salama%20units" target="_blank">
<iconify-icon className="text-white" height="32" icon="mdi:whatsapp" style={{color: 'rgb(255, 255, 255)'}} width="32"></iconify-icon>
<span className="absolute right-full mr-3 px-4 py-2 bg-white rounded-xl shadow-lg text-sm font-medium text-[#001C36] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
</a>

<div className="modal-overlay" id="downloadModal" onclick="if(event.target===this)closeDownloadModal()">
<div className="modal-content">
<button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FAFAFB] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors" onclick="closeDownloadModal()">
<iconify-icon className="text-[#4B5563]" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-14 h-14 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] mb-6">
<iconify-icon height="28" icon="solar:download-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#001C36] mb-2">
          Download Information
        </h3>
<p className="text-base text-[#4B5563] mb-8">
          Please share your contact details to access our brochure and floor
          plans.
        </p>
<form action="https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/" className="space-y-5" method="POST" onsubmit="handleDownload(event)">
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Full Name *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="full_name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Email Address *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Phone Number *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="phone" placeholder="+254 700 000 000" required="" type="tel"/>
</div>
<button className="w-full py-4 bg-[#0071E3] text-white font-semibold text-base rounded-xl hover:bg-[#005BBB] transition-all shadow-lg flex items-center justify-center gap-2" type="submit">
<iconify-icon height="20" icon="solar:download-linear" width="20"></iconify-icon>
            Download Now
          </button>
</form>
</div>
</div>

<div className="modal-overlay" id="successModal" onclick="if(event.target===this)closeSuccessModal()">
<div className="modal-content text-center">
<div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 mx-auto">
<iconify-icon height="48" icon="solar:check-circle-bold" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#001C36] mb-3">
          Thank You!
        </h3>
<p className="text-base text-[#4B5563] mb-8">
          Your registration has been received. Our team will contact you within
          24 hours to guide you through the next steps.
        </p>
<button className="px-8 py-3.5 bg-[#0071E3] text-white font-semibold text-base rounded-xl hover:bg-[#005BBB] transition-all" onclick="closeSuccessModal()">
          Got It
        </button>
</div>
</div>
<div className="modal-overlay" id="subscribeModal" onclick="if(event.target===this)closeSubscribeModal()">
<div className="modal-content">
<button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FAFAFB] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors" onclick="closeSubscribeModal()">
<iconify-icon className="text-[#4B5563]" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-14 h-14 rounded-full bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] mb-6">
<iconify-icon height="28" icon="solar:letter-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#001C36] mb-2">
          Subscribe to our Newsletter
        </h3>
<p className="text-base text-[#4B5563] mb-8">
          Stay updated with the latest news and construction updates from Muzi
          Salama.
        </p>
<form action="https://hooks.zapier.com/hooks/catch/25228786/4ymdnqb/" className="space-y-5" id="newsletterForm" method="POST" onsubmit="handleSubscribe(event)">
<input name="country" type="hidden" value="Kenya"/>
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Full Name *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="full_name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Phone Number *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="phone" placeholder="+254 700 000 000" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-[#001C36] mb-2">
              Email Address *
            </label>
<input className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#FAFAFB] text-[#001C36] text-base outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
<button className="w-full py-4 bg-[#0071E3] text-white font-semibold text-base rounded-xl hover:bg-[#005BBB] transition-all shadow-lg flex items-center justify-center gap-2" type="submit">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
            Subscribe
          </button>
</form>
</div>
</div>
<div className="modal-overlay" id="subscribeSuccessModal" onclick="if(event.target===this)closeSubscribeSuccessModal()">
<div className="modal-content text-center">
<div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 mx-auto">
<iconify-icon height="48" icon="solar:check-circle-bold" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#001C36] mb-3">
          Thank You!
        </h3>
<p className="text-base text-[#4B5563] mb-8">
          You've been added to our mailing list. Look out for updates from Muzi
          Salama in your inbox.
        </p>
<button className="px-8 py-3.5 bg-[#0071E3] text-white font-semibold text-base rounded-xl hover:bg-[#005BBB] transition-all" onclick="closeSubscribeSuccessModal()">
          Got It
        </button>
</div>
</div>
<footer className="lg:px-8 text-white bg-[#001C36] mt-auto pt-24 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<h2 className="uppercase text-2xl font-medium text-white tracking-tight mb-8">
              Muzi salama
            </h2>
<p className="text-white/70 max-w-sm mb-10 leading-relaxed font-normal text-base">
              Sustainable urban development and community-centric living in the
              heart of Tilisi, Limuru. Designed as part of a 15-minute city.
            </p>
<div className="flex items-center gap-5">
<a className="flex items-center justify-center hover:bg-[#0071E3] hover:border-[#0071E3] hover:text-white transition-all duration-300 bg-white/5 w-12 h-12 border-white/10 border rounded-full" href="/mailto:sales@muzi-salama.co.ke">
<iconify-icon className="" height="20" icon="solar:letter-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-[#0071E3] hover:border-[#0071E3] hover:text-white transition-all duration-300 bg-white/5 w-12 h-12 border-white/10 border rounded-full" href="/tel:+254705004004">
<iconify-icon className="" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1">
<h4 className="font-medium mb-8 text-white/40 text-sm uppercase tracking-widest">
              Explore
            </h4>
<ul className="space-y-5 text-base font-normal text-white/80">
<li className="" onclick="window.location.href='https://muzi-salama.co.ke/home/'" role="button">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/home/">
                  Home
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/amenities/">
                  Amenities
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/lifestyle/">
                  Lifestyle
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/smart-investment/">
                  Smart Investment
                </a>
</li>
</ul>
</div>
<div className="col-span-1 lg:col-span-2">
<h4 className="font-medium mb-8 text-white/40 text-sm uppercase tracking-widest">
              Discover
            </h4>
<ul className="space-y-5 text-base font-normal text-white/80">
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/construction-updates/">
                  Construction Updates
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/buy-to-rent/">
                  Buy-To-Rent
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/faqs/">
                  FAQs
                </a>
</li>
<li className="">
<a className="hover:text-[#0071E3] transition-colors" href="https://muzi-salama.co.ke/contact-us/">
                  Contact Us
                </a>
</li>
</ul>
</div>
<div className="col-span-2 lg:col-span-1">
<h4 className="font-medium mb-8 text-white/40 text-sm uppercase tracking-widest">
              Stay Updated
            </h4>
<p className="text-base font-normal text-white/70 mb-5">
              Get the latest news and construction updatesby subscribing to our
              newsletter.
            </p>
<button className="flex hover:bg-[#005BBB] transition-colors text-sm font-medium text-white bg-[#0071E3] w-full rounded-full pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2 items-center justify-center" onclick="openSubscribeModal()" type="button">
              Subscribe to Newsletter
              <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-white/50 tracking-wide">
<p className="">© 2026 Muzi Salama. All rights reserved.</p>
<div className="mt-5 md:mt-0 flex items-center gap-2">
            Developed by
            <span className="text-white">IHS Kenya</span>
</div>
</div>
</div>
</footer>


<div className="modal-overlay" id="floorPlanModal" onclick="if(event.target===this)closeFloorPlanModal()">
<div className="relative max-w-5xl w-[95%] max-h-[95vh]">
<button className="absolute -top-4 -right-4 sm:top-4 sm:right-4 w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xl z-10" onclick="closeFloorPlanModal()">
<iconify-icon className="text-[#001C36]" height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<img alt="Floor Plan" className="w-full h-auto max-h-[95vh] object-contain rounded-2xl bg-white" id="floorPlanImage" src=""/>
</div>
</div>


    </>
  );
}
