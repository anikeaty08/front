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



  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('closeDrawer');
  const overlay = document.getElementById('drawerOverlay');
  menuBtn?.addEventListener('click', () => drawer.classList.remove('hidden'));
  closeDrawer?.addEventListener('click', () => drawer.classList.add('hidden'));
  overlay?.addEventListener('click', () => drawer.classList.add('hidden'));

  // Scroll to top
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.remove('opacity-0','pointer-events-none');
      scrollBtn.classList.add('opacity-100');
    } else {
      scrollBtn.classList.add('opacity-0','pointer-events-none');
      scrollBtn.classList.remove('opacity-100');
    }
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

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
      

<header className="hero-bg relative">

<nav className="relative z-20">
<div className="max-w-[1200px] mx-auto px-5 py-6 flex items-center justify-between">
<a className="text-white font-heading font-bold text-lg tracking-tight" href="#">HRTS</a>
<ul className="hidden md:flex items-center gap-8 text-sm text-white/90 font-medium">
<li><a className="nav-link" href="#">Home</a></li>
<li><a className="nav-link" href="#">About</a></li>
<li><a className="nav-link" href="#">Services</a></li>
<li><a className="nav-link" href="#">Portfolio</a></li>
<li><a className="nav-link" href="#">Contact</a></li>
<li><a className="nav-link" href="#">Privacy Policy</a></li>
</ul>
<button aria-label="Menu" className="md:hidden text-white" id="menuBtn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 hidden" id="mobileDrawer">
<div className="absolute inset-0 bg-black/50" id="drawerOverlay"></div>
<div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
<div className="flex justify-between items-center mb-8">
<span className="font-heading font-bold tracking-tight text-[#222]">HRTS</span>
<button id="closeDrawer"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<ul className="space-y-4 text-sm font-medium text-[#222]">
<li><a className="nav-link" href="#">Home</a></li>
<li><a className="nav-link" href="#">About</a></li>
<li><a className="nav-link" href="#">Services</a></li>
<li><a className="nav-link" href="#">Portfolio</a></li>
<li><a className="nav-link" href="#">Contact</a></li>
<li><a className="nav-link" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>

<div className="relative z-10 max-w-[1200px] mx-auto px-5 pt-16 pb-32 md:pt-24 md:pb-40">
<h1 className="font-heading font-bold text-white leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl" style={{letterSpacing: '-0.02em'}}>
      Professional<br/>
      High-Rise<br/>
      Building<br/>
      Maintenance
    </h1>
<p className="mt-6 text-xl md:text-2xl font-heading font-semibold" style={{color: '#f5c542'}}>
      Safe and Effective Rope Access Services
    </p>
<div className="mt-8 max-w-2xl space-y-4 text-white/85 text-base">
<p>At High-Rise Technical Services, we provide reliable, professional, and certified rope access solutions for commercial and residential buildings across Halifax and Nova Scotia.</p>
<p>From window cleaning to structural inspections, our experienced team delivers safe, efficient results — no scaffolding, no disruptions, just trusted technical service at heights.</p>
</div>
<div className="mt-10 flex flex-wrap gap-4">
<a className="btn-primary inline-flex items-center gap-2 text-white px-7 py-4 rounded text-sm font-semibold" href="#">
        Get a Free Quote <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-4 rounded text-sm font-semibold hover:bg-white/10 transition" href="#">
        Our Services
      </a>
</div>
</div>
</header>

<div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:max-w-md bg-white shadow-xl rounded border border-[#e7e7e7] p-5 z-50" id="cookieBanner">
<div className="flex items-start gap-3 mb-3">
<iconify-icon icon="solar:cookie-linear" style={{color: '#0274be'}} width="22"></iconify-icon>
<h4 className="font-heading font-semibold text-[#222] text-sm">Cookie Privacy Notice – highrisetechnicalservices</h4>
</div>
<p className="text-xs text-[#808285] mb-4 leading-relaxed">
    We use cookies to enhance your experience, analyze traffic, and provide personalized content in accordance with PIPEDA and CASL regulations. By clicking "Accept All", you consent to our use of cookies.
  </p>
<div className="flex flex-wrap justify-end gap-2">
<button className="text-xs px-3 py-2 border border-[#e7e7e7] rounded text-[#222] hover:bg-gray-50">Customize</button>
<button className="text-xs px-3 py-2 border border-[#e7e7e7] rounded text-[#222] hover:bg-gray-50" onclick="document.getElementById('cookieBanner').remove()">Reject All</button>
<button className="text-xs px-3 py-2 rounded text-white btn-primary" onclick="document.getElementById('cookieBanner').remove()">Accept All</button>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-5">
<div className="text-center max-w-2xl mx-auto mb-14">
<p className="text-xs uppercase font-semibold tracking-widest mb-3" style={{color: '#0274be'}}>Why Choose Us</p>
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#222] tracking-tight" style={{letterSpacing: '-0.01em'}}>Trusted, Certified, Local</h2>
<p className="mt-4 text-base">We bring expertise, certifications, and care to every job — keeping your building safe, clean, and well maintained.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="text-center">
<div className="w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center mb-5" style={{borderColor: '#0274be'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: '#0274be'}} width="34"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Safety First</h3>
<p className="text-sm">IRATA / SPRAT certified technicians follow strict safety standards on every project.</p>
</div>
<div className="text-center">
<div className="w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center mb-5" style={{borderColor: '#0274be'}}>
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: '#0274be'}} width="34"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Expert Team</h3>
<p className="text-sm">Years of rope-access experience across commercial and residential building portfolios.</p>
</div>
<div className="text-center">
<div className="w-20 h-20 mx-auto rounded-full border-2 flex items-center justify-center mb-5" style={{borderColor: '#0274be'}}>
<iconify-icon icon="solar:map-point-linear" style={{color: '#0274be'}} width="34"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Local Service</h3>
<p className="text-sm">Proudly serving Halifax and Nova Scotia with prompt, friendly, professional service.</p>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#f7f9fb'}}>
<div className="max-w-[1200px] mx-auto px-5">
<div className="text-center mb-14">
<p className="text-xs uppercase font-semibold tracking-widest mb-3" style={{color: '#0274be'}}>Our Services</p>
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#222] tracking-tight" style={{letterSpacing: '-0.01em'}}>Our Complete Services</h2>
<p className="mt-4 max-w-2xl mx-auto">Comprehensive maintenance and repair solutions, delivered safely from height.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Window cleaning" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/09/Window-Cleaning-768x651.jpeg"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Window Cleaning</h3>
<p className="text-sm">Streak-free, professional window cleaning for high-rise and mid-rise buildings.</p>
</div>
<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Pressure washing" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/10/pressure-12345-2.png"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Pressure Washing</h3>
<p className="text-sm">Restore building façades, walkways and driveways with high-pressure cleaning.</p>
</div>
<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Leak repair" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/08/3123154-768x637.jpg"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Leak Repair</h3>
<p className="text-sm">Identify and repair leaks at height — preventing damage before it spreads.</p>
</div>
<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Caulking" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/08/IMG_2092-768x638.jpg"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Caulking &amp; Sealing</h3>
<p className="text-sm">Weatherproof your building envelope with expert caulking and joint sealing.</p>
</div>
<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Installations" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/10/4cal-1-768x662.jpg"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Installations</h3>
<p className="text-sm">Signage, fixtures, and hardware installations at any elevation, safely executed.</p>
</div>
<div className="bg-white rounded-md shadow-sm p-5 card-hover">
<div className="card-img mb-5">
<img alt="Tree removal" className="w-full h-56 object-cover" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/10/Zrzut-ekranu-2025-10-03-162017-768x297.png"/>
</div>
<h3 className="font-heading font-semibold text-xl text-[#222] mb-2">Tree Removal</h3>
<p className="text-sm">Difficult tree removal services using certified climbing and rigging techniques.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
<div className="card-img card-hover">
<img alt="Residential home" className="w-full rounded-md" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/10/4cal-1-1024x882.jpg"/>
</div>
<div>
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#222] tracking-tight mb-5" style={{letterSpacing: '-0.01em'}}>
<span className="mr-2">🏠</span> House and Home Services
      </h2>
<p className="mb-4 text-base">From routine maintenance to complex repairs, we provide complete residential exterior services for your home. Our team handles eavestroughs, siding, painting, and storm damage repair with the same professional rope-access expertise we bring to commercial buildings.</p>
<p className="mb-6 text-base">Whether you need a quick inspection or a full exterior makeover, we have you covered.</p>
<a className="btn-primary inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold" href="#">
        Services <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20" style={{background: '#f7f9fb'}}>
<div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
<div className="md:order-2 card-img card-hover">
<img alt="Painting services" className="w-full rounded-md" src="https://www.highrisetechnicalservices.ca/wp-content/uploads/2025/08/IMG_2092.jpg"/>
</div>
<div className="md:order-1">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#222] tracking-tight mb-5" style={{letterSpacing: '-0.01em'}}>
<span className="mr-2">🎨</span> Painting Services
      </h2>
<p className="mb-6 text-base">Our certified painters deliver durable, high-quality finishes for both residential and commercial properties — at any height.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#0274be'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#fff'}} width="12"></iconify-icon>
</span>
<span className="text-sm text-[#222]">Structural &amp; façade painting</span>
</li>
<li className="flex items-start gap-3">
<span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#0274be'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#fff'}} width="12"></iconify-icon>
</span>
<span className="text-sm text-[#222]">Anti-corrosion coatings</span>
</li>
<li className="flex items-start gap-3">
<span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#0274be'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#fff'}} width="12"></iconify-icon>
</span>
<span className="text-sm text-[#222]">Surface prep (washing, sanding, priming)</span>
</li>
<li className="flex items-start gap-3">
<span className="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#0274be'}}>
<iconify-icon icon="solar:check-read-linear" style={{color: '#fff'}} width="12"></iconify-icon>
</span>
<span className="text-sm text-[#222]">Maintenance painting &amp; touch-ups</span>
</li>
</ul>
<a className="btn-primary inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold" href="#">
        Services <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12" style={{background: '#0f1a2e'}}></section>

<section className="py-20" style={{background: '#eaf2f9'}}>
<div className="max-w-[1200px] mx-auto px-5">
<div className="text-center mb-14">
<p className="text-xs uppercase font-semibold tracking-widest mb-3" style={{color: '#0274be'}}>Testimonials</p>
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-[#222] tracking-tight" style={{letterSpacing: '-0.01em'}}>Success Stories</h2>
<p className="mt-4 max-w-2xl mx-auto">Real reviews from real Halifax customers.</p>
</div>
<div className="grid md:grid-cols-2 gap-7">

<div className="bg-white rounded-md p-7 shadow-sm relative">
<h4 className="font-heading font-semibold text-lg text-[#222] mb-1">Alex</h4>
<p className="text-xs mb-4 text-[#999]">Property Manager</p>
<p className="text-sm mb-5">"High-Rise Technical Services completed our window cleaning project on time, on budget, and with no disruptions. Their team was professional from start to finish."</p>
<div className="flex items-center justify-between">
<div className="flex gap-1" style={{color: '#f5b425'}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg" style={{color: '#4285F4'}}>G</span>
</div>
</div>
<div className="bg-white rounded-md p-7 shadow-sm relative">
<h4 className="font-heading font-semibold text-lg text-[#222] mb-1">Haley</h4>
<p className="text-xs mb-4 text-[#999]">Homeowner</p>
<p className="text-sm mb-5">"They repaired a difficult leak on our roof that two other companies couldn't solve. Friendly, fast, and thorough — highly recommend."</p>
<div className="flex items-center justify-between">
<div className="flex gap-1" style={{color: '#f5b425'}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg" style={{color: '#4285F4'}}>G</span>
</div>
</div>
<div className="bg-white rounded-md p-7 shadow-sm relative">
<h4 className="font-heading font-semibold text-lg text-[#222] mb-1">Henry Lockyer</h4>
<p className="text-xs mb-4 text-[#999]">Building Owner</p>
<p className="text-sm mb-5">"The painting work on our facade is excellent. Crew was respectful of tenants and finished ahead of schedule. We'll definitely use them again."</p>
<div className="flex items-center justify-between">
<div className="flex gap-1" style={{color: '#f5b425'}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg" style={{color: '#4285F4'}}>G</span>
</div>
</div>
<div className="bg-white rounded-md p-7 shadow-sm relative">
<h4 className="font-heading font-semibold text-lg text-[#222] mb-1">Shannon</h4>
<p className="text-xs mb-4 text-[#999]">Condo Board Member</p>
<p className="text-sm mb-5">"Professional, certified, and genuinely safety-focused. They handled caulking and sealing across all our units without a single complaint from residents."</p>
<div className="flex items-center justify-between">
<div className="flex gap-1" style={{color: '#f5b425'}}>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-heading font-bold text-lg" style={{color: '#4285F4'}}>G</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#e98870'}}>
<div className="max-w-[1200px] mx-auto px-5 text-center">
<h2 className="font-heading font-semibold text-white text-3xl md:text-5xl tracking-tight mb-4" style={{letterSpacing: '-0.02em'}}>Ready to work with Halifax's best?</h2>
<p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">Get in touch today for a free quote on rope-access services tailored to your building.</p>
<a className="inline-flex items-center gap-2 bg-white text-[#e98870] px-7 py-4 rounded text-sm font-semibold hover:bg-gray-50 transition" href="#">
      Contact Us <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="text-white/80" style={{background: '#0f1a2e'}}>
<div className="max-w-[1200px] mx-auto px-5 py-16 grid md:grid-cols-4 gap-10">
<div>
<h3 className="font-heading font-bold text-white text-xl tracking-tight mb-4">HRTS</h3>
<p className="text-sm leading-relaxed">High-Rise Technical Services delivers certified rope-access maintenance, repair, and cleaning for buildings across Halifax and Nova Scotia.</p>
<div className="flex gap-3 mt-5">
<a className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:linkedin-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-heading font-semibold text-white text-sm mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="nav-link" href="#">Home</a></li>
<li><a className="nav-link" href="#">About</a></li>
<li><a className="nav-link" href="#">Services</a></li>
<li><a className="nav-link" href="#">Portfolio</a></li>
<li><a className="nav-link" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-semibold text-white text-sm mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="nav-link" href="#">Window Cleaning</a></li>
<li><a className="nav-link" href="#">Pressure Washing</a></li>
<li><a className="nav-link" href="#">Leak Repair</a></li>
<li><a className="nav-link" href="#">Caulking &amp; Sealing</a></li>
<li><a className="nav-link" href="#">Painting</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-semibold text-white text-sm mb-4">Address</h4>
<ul className="space-y-3 text-sm">
<li className="flex gap-2"><iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon> Halifax, Nova Scotia, Canada</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5" icon="solar:phone-linear" width="16"></iconify-icon> (902) 000-0000</li>
<li className="flex gap-2"><iconify-icon className="mt-0.5" icon="solar:letter-linear" width="16"></iconify-icon> info@highrisetechnicalservices.ca</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 py-5 text-center text-xs">
    © 2025 High-Rise Technical Services. All rights reserved.
  </div>
</footer>

<button aria-label="Scroll to top" className="scroll-top fixed bottom-6 right-6 w-10 h-10 btn-primary text-white rounded-sm shadow-lg opacity-0 pointer-events-none z-30" id="scrollTop" style={{borderRadius: '2px'}}>
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>


    </>
  );
}
