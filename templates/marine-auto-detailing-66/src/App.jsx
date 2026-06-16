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



[
{
"@context": "https://schema.org",
"@type": ["LocalBusiness", "Service", "MarineService"],
"@id": "https://madsoaps.com/#madsoaps",
"name": "MAD Soaps",
"url": "https://madsoaps.com/",
"telephone": "+1-833-623-7627",
"priceRange": "$$",
"image": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/070e7b58-c912-4cf1-97bc-50abf4c4a642_3840w.jpg",
"description": "Boat detailing in Annapolis MD. Mobile marine detailing, gelcoat oxidation correction, ceramic coating, and Chesapeake Bay boat restoration by MAD Soaps.",
"serviceType": "Boat Detailing",
"address": {
"@type": "PostalAddress",
"streetAddress": "2830 Solomons Island Road",
"addressLocality": "Edgewater",
"addressRegion": "MD",
"postalCode": "21037",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 38.9386,
"longitude": -76.5491
},
"areaServed": [
{ "@type": "City", "name": "Annapolis" },
{ "@type": "City", "name": "Edgewater" },
{ "@type": "City", "name": "Crownsville" },
{ "@type": "City", "name": "Davidsonville" },
{ "@type": "City", "name": "Arnold" },
{ "@type": "City", "name": "Severna Park" },
{ "@type": "AdministrativeArea", "name": "Anne Arundel County" },
{ "@type": "Place", "name": "Chesapeake Bay" },
{ "@type": "Place", "name": "Annapolis Harbor" }
],
"sameAs": [
"https://www.facebook.com/RealMADsoaps/",
"https://www.instagram.com/madsoapsinc/",
"https://www.youtube.com/@RealMADSoaps",
"https://www.linkedin.com/company/madsoaps/"
],
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
],
"opens": "08:00",
"closes": "18:00"
}
},
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "How much does boat detailing cost in Annapolis?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Boat detailing in Annapolis typically ranges from $25 to $60 per foot depending on oxidation level and restoration requirements."
}
},
{
"@type": "Question",
"name": "Do you detail boats at Annapolis marinas?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes. MAD Soaps regularly services vessels at marinas throughout Annapolis including Port Annapolis Marina, Bert Jabin's Yacht Yard, Safe Harbor Annapolis, Annapolis Yacht Basin, Oak Grove Marine, and Chesapeake Harbour Marina."
}
},
{
"@type": "Question",
"name": "How often should boats be detailed in Annapolis?",
"acceptedAnswer": {
"@type": "Answer",
"text": "For boats kept in the Chesapeake Bay, we recommend a full detail and protection application at the start of the season, with regular maintenance washes every 2-4 weeks to prevent salt and organic buildup."
}
},
{
"@type": "Question",
"name": "Do you remove gelcoat oxidation?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes, we specialize in heavy gelcoat oxidation removal. We utilize a multi-step compounding and polishing process to restore the original color and gloss before sealing it with high-grade marine protection."
}
}
]
}
]



!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1417367325381077'); fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const toggles = document.querySelectorAll('[data-mobile-toggle]');
          const closes = document.querySelectorAll('[data-mobile-close]');
          const menu = document.getElementById('mobile-menu');

          function toggleMenu() {
              menu.classList.toggle('is-open');
              if (menu.classList.contains('is-open')) {
                  document.body.style.overflow = 'hidden';
              } else {
                  document.body.style.overflow = '';
              }
          }
          toggles.forEach(btn => btn.addEventListener('click', toggleMenu));
          closes.forEach(btn => btn.addEventListener('click', toggleMenu));
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('#hero-slideshow .slide');
        let currentSlide = 0;
        if (slides.length > 1) {
          setInterval(() => {
            if (window.innerWidth < 768) {
              if (currentSlide !== 0) {
                slides[currentSlide].classList.remove('opacity-100');
                slides[currentSlide].classList.add('opacity-0');
                slides[0].classList.remove('opacity-0');
                slides[0].classList.add('opacity-100');
                currentSlide = 0;
              }
              return;
            }
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
          }, 5000);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<img height="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{display: 'none'}} width="1"/>


<header className="fixed h-[5rem] bg-white/90 z-50 border-slate-200 border-b top-0 right-0 left-0 backdrop-blur-md transition-all duration-300">
<div className="container-page flex h-full items-center justify-between">

<a className="flex items-center gap-2 group z-50 text-decoration-none" href="/">
<div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:water-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">
            MAD SOAPS
          </span>
</a>

<nav className="hidden lg:flex gap-8 h-full items-center">
<a className="nav-link" href="/">Home</a>

<div className="dropdown">
<button className="nav-link flex gap-1 pt-4 pb-4 gap-x-1 gap-y-1 items-center" onclick="window.location.href='/marine-hub'">
              Marine
              <iconify-icon className="" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
<div className="dropdown-panel">
<span className="menu-label">Core Services</span>
<a className="dropdown-link" href="/marine-detailing">
                Boat Detailing
              </a>
<a className="dropdown-link" href="/marine-ceramic">
                Marine Ceramic Coating
              </a>
<a className="dropdown-link" href="/mpf">Marine Protection Film</a>
<a className="dropdown-link" href="/marine-bottom-paint">
                Bottom Paint
              </a>
<a className="dropdown-link" href="/marine-wood">
                Wood &amp; Varnish
              </a>
<a className="dropdown-link" href="/marine-engine">Engine Service</a>
<div className="my-2 border-t border-slate-100"></div>
<span className="menu-label">Seasonal</span>
<a className="dropdown-link" href="/marine-spring">
                Spring Recommissioning
              </a>
<a className="dropdown-link" href="/marine-winterization">
                Winterization
              </a>
<a className="dropdown-link" href="/marine-shrinkwrap">Shrink Wrap</a>
<div className="my-2 border-t border-slate-100"></div>
<a className="dropdown-link font-medium text-blue-600" href="/marine-maintenance">
                Marine Memberships
              </a>
</div>
</div>

<div className="dropdown">
<button className="nav-link flex gap-1 pt-4 pb-4 items-center" onclick="window.location.href='/auto-hub'">
              Auto
              <iconify-icon className="" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
<div className="dropdown-panel">
<span className="menu-label">Services</span>
<a className="dropdown-link" href="/auto-interior">
                Interior Detailing
              </a>
<a className="dropdown-link" href="/auto-exterior">
                Exterior Detailing
              </a>
<a className="dropdown-link" href="/auto-full">
                Full Detail Packages
              </a>
<a className="dropdown-link" href="/auto-ceramic">Ceramic Coating</a>
<a className="dropdown-link" href="/auto-ppf">Auto PPF</a>
<div className="my-2 border-t border-slate-100"></div>
<a className="dropdown-link font-medium text-blue-600" href="/auto-plans">
                Annual Plans
              </a>
</div>
</div>

<div className="dropdown">
<button className="nav-link flex gap-1 pt-4 pb-4 items-center" onclick="window.location.href='/plans-hub'">
              Plans
              <iconify-icon className="" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
<div className="dropdown-panel">
<a className="dropdown-link" href="/marine-maintenance">
                Marine Memberships
              </a>
<a className="dropdown-link" href="/auto-plans">Auto Annual Plans</a>
</div>
</div>
<a className="nav-link" href="https://mad-soaps.myshopify.com/">
            Products / Training
          </a>
<a className="nav-link" href="/get-in-touch">Book</a>
<a className="nav-link" href="/about">About</a>
<a className="nav-link" href="/careers">Careers</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex btn btn-primary btn-sm" href="/get-in-touch">
            Contact Us
          </a>
<button className="lg:hidden p-2 text-slate-600" data-mobile-toggle="" type="button">
<iconify-icon className="" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="mobile-drawer" id="mobile-menu">
<div className="mobile-overlay" data-mobile-close=""></div>
<div className="mobile-content">
<div className="flex items-center justify-between mb-8">
<span className="font-semibold text-lg tracking-tight">Menu</span>
<button className="p-2 text-slate-400 hover:text-slate-900" data-mobile-close="" type="button">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<nav className="flex flex-col gap-6">
<a className="text-lg font-medium text-slate-900 no-underline" href="/">
            Home
          </a>
<a className="text-lg font-medium text-slate-900 no-underline" href="/marine-training">
            Training
          </a>
<a className="text-lg font-medium text-slate-900 no-underline" href="https://mad-soaps.myshopify.com/">
            Products
          </a>
<div className="space-y-3">
<span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Marine
            </span>
<div className="flex flex-col gap-3 pl-3 border-l-2 border-slate-100">
<a className="text-slate-900 font-medium no-underline" href="/marine-hub">
                Marine Hub
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-detailing">
                Boat Detailing
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-ceramic">
                Marine Ceramic Coating
              </a>
<a className="text-slate-600 font-medium no-underline" href="/mpf">
                Marine Protection Film
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-bottom-paint">
                Bottom Paint
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-wood">
                Wood &amp; Varnish
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-engine">
                Engine Service
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-spring">
                Spring Recommissioning
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-winterization">
                Winterization
              </a>
<a className="text-slate-600 font-medium no-underline" href="/marine-shrinkwrap">
                Shrink Wrap
              </a>
<a className="text-blue-600 font-medium no-underline" href="/marine-maintenance">
                Marine Memberships
              </a>
</div>
</div>
<div className="space-y-3">
<span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Auto
            </span>
<div className="flex flex-col gap-3 pl-3 border-l-2 border-slate-100">
<a className="text-slate-900 font-medium no-underline" href="/auto-hub">
                Auto Hub
              </a>
<a className="text-slate-600 font-medium no-underline" href="/auto-interior">
                Interior Detailing
              </a>
<a className="text-slate-600 font-medium no-underline" href="/auto-exterior">
                Exterior Detailing
              </a>
<a className="text-slate-600 font-medium no-underline" href="/auto-full">
                Full Detail Packages
              </a>
<a className="text-slate-600 font-medium no-underline" href="/auto-ceramic">
                Ceramic Coating
              </a>
<a className="text-slate-600 font-medium no-underline" href="/auto-ppf">
                Auto PPF
              </a>
<a className="text-blue-600 font-medium no-underline" href="/auto-plans">
                Annual Plans
              </a>
</div>
</div>
<div className="space-y-3">
<span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Company
            </span>
<div className="flex flex-col gap-3 pl-3 border-l-2 border-slate-100">
<a className="text-slate-600 font-medium no-underline" href="/about">
                About
              </a>
<a className="text-slate-600 font-medium no-underline" href="/careers">
                Careers
              </a>
<a className="text-slate-600 font-medium no-underline" href="/get-in-touch">
                Book
              </a>
</div>
</div>
</nav>
<div className="mt-auto pt-8">
<a className="btn btn-primary w-full justify-center" href="/get-in-touch">
            Get a Quote
          </a>
</div>
</div>
</div>

<main className="">

<section className="relative bg-slate-900 min-h-[50vh] md:min-h-[85vh] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0" id="hero-slideshow">
<div className="slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-0">
<picture>
<source media="(max-width: 767px)" srcset="
                  https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ab86840-40a4-470b-ba0d-a62bbc4a3e0e_1600w.jpg
                "/>
<img alt="Luxury Sport Fishing Yachts at Marina" className="absolute inset-0 w-full h-full object-center opacity-50 object-cover" fetchpriority="high" height="2160" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613ce0bc-20bf-4fef-b8bf-497e97eaaacc_3840w.png" width="3840"/>
</picture>
</div>
<div className="slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-0 hidden md:block">
<img alt="Technician Applying Bottom Paint to Large Vessel Hull" className="absolute inset-0 w-full h-full object-center opacity-50 object-cover" height="2160" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/050b3889-440b-4ef6-83e7-65100148e75c_3840w.jpg" width="3840"/>
</div>
<div className="slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-0 hidden md:block">
<img alt="Professional Marine Detailing and Yacht Maintenance" className="absolute inset-0 w-full h-full object-center opacity-50 object-cover" height="2160" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b8edd23-dadd-487c-88e4-cc9ac66c8088_3840w.jpg" width="3840"/>
</div>
<div className="slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 z-0 hidden md:block">
<img alt="MAD SOAPS Team on Yacht Deck in Marina" className="absolute inset-0 w-full h-full object-center opacity-50 object-cover" height="2160" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be51fece-5116-4f75-9766-481acaa89b82_3840w.jpg" width="3840"/>
</div>
</div>
<div className="container-page md:py-20 z-10 w-full max-h-max pt-12 pb-12 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="eyebrow text-white/90 mb-0">
                Serving The East Coast
              </span>
</div>
<h1 className="h1 mb-4">
<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white relative bottom-2">
                Marine Surface Restoration for the Chesapeake Bay
              </span>
</h1>
<p className="text-2xl text-blue-100 font-medium mb-4">
              Marine &amp; Automotive Surface Preservation Experts
            </p>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed mb-10">
              Mobile boat detailing throughout Annapolis and Edgewater, seasonal
              marine services, and structured maintenance plans — handled for
              you across the Chesapeake Bay corridor.
            </p>
<div className="flex flex-wrap gap-6 gap-x-6 gap-y-6 items-center">
<a className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white h-[54px] rounded-full px-8 relative items-center justify-center no-underline" href="/get-in-touch" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
</div>
<style>
                  @keyframes beam-spin { to { transform: rotate(360deg); } } @keyframes lines-slide { 0% { background-position: 0 0; } 100% { background-position: 24px 0; } }
                </style>

<div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] -z-10"></div>
<span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</section>

<section className="section bg-slate-50 border-b border-slate-100">
<div className="container-page">
<div className="max-w-3xl mx-auto text-center mb-10">
<span className="eyebrow eyebrow-primary">Marine Restoration</span>
<h2 className="h2">Professional Boat Detailing in Annapolis</h2>
</div>
<div className="max-w-4xl mx-auto">
<p className="body mb-4 text-center md:text-left text-base md:text-lg">
              When it comes to maintaining your vessel in the demanding waters
              of the
              <span className="font-semibold text-slate-800">Chesapeake Bay</span>
              , nothing protects your investment quite like professional boat
              detailing in
              <span className="font-semibold text-slate-800">Annapolis</span>
              . MAD Soaps provides premier
              <a className="text-link" href="/marine-detailing">
                mobile marine detailing
              </a>
              services spanning from the historic harbor to the quiet
              tributaries of
              <span className="font-semibold text-slate-800">Edgewater</span>
              .
            </p>
<p className="body mb-4 text-center md:text-left text-base md:text-lg">
              We understand that constant exposure to salt, sun, and brackish
              water wreaks havoc on your vessel's exterior. That's why we
              specialize in advanced
              <span className="font-semibold text-slate-800">
                oxidation removal
              </span>
              , meticulously restoring the vibrant color, depth, and gloss to
              dull, chalky
              <span className="font-semibold text-slate-800">gelcoat</span>
              surfaces before it's too late.
            </p>
<p className="body text-center md:text-left text-base md:text-lg">
              Once the surface is completely flawless, we lock in that
              perfection with professional-grade marine
              <span className="font-semibold text-slate-800">ceramic coating</span>
              . This creates an impenetrable, hydrophobic barrier against harsh
              UV rays, organic growth, and environmental contaminants. Whether
              your boat requires seasonal preparation, rigorous compounding, or
              structured long-term protection, our dedicated team brings the
              highest standards of marine surface preservation directly to your
              slip, lift, or driveway.
            </p>
</div>
</div>
</section>

<section className="section bg-white border-b border-slate-100">
<div className="container-page">
<div className="max-w-3xl mx-auto text-center mb-12">
<span className="eyebrow eyebrow-primary">
              Chesapeake Bay Environment
            </span>
<h2 className="h2">
              Why Boats on the Chesapeake Bay Need Professional Detailing
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<p className="body mb-4">
                The unique brackish waters of the Chesapeake Bay introduce
                distinct challenges to marine gelcoat and painted surfaces.
                Constant exposure to UV radiation accelerates oxidation, leading
                to a dull, chalky appearance if left unprotected.
              </p>
<p className="body mb-4">
                Furthermore, persistent algae and tannin staining common in the
                Bay's tributaries can severely compromise your vessel's finish.
                That is why
                <a className="text-link" href="/marine-detailing">
                  professional boat detailing
                </a>
                is critical for proper preservation.
              </p>
<p className="body mb-6">
                By utilizing
                <a className="text-link" href="/marine-ceramic">
                  marine ceramic coating
                </a>
                , we create an impenetrable barrier that protects gelcoat
                surfaces from UV fading, salt film, and organic buildup. We also
                offer
                <a className="text-link" href="/mpf">marine protection film</a>
                for high-wear areas and complete
                <a className="text-link" href="/marine-bottom-paint">
                  bottom paint services
                </a>
                to defend against aggressive marine growth.
              </p>
<ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Prevents severe gelcoat oxidation and UV damage
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Eliminates stubborn algae and tannin staining
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Protects against corrosive salt film buildup
                </li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50"></div>
<iconify-icon className="text-blue-600 mb-6" icon="solar:shield-warning-linear" width="48"></iconify-icon>
<h3 className="h3 text-lg">
                Don't let the Bay degrade your investment
              </h3>
<p className="body text-sm mb-6">
                Consistent maintenance mitigates the harsh environmental effects
                of the Chesapeake Bay. Explore our structured marine protection
                plans designed specifically for our local waters.
              </p>
<a className="btn btn-primary btn-sm inline-flex" href="/marine-maintenance">
                Explore Memberships
              </a>
</div>
</div>
</div>
</section>

<section className="section bg-slate-50 border-b border-slate-100">
<div className="container-page">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<span className="eyebrow eyebrow-primary">Local Expertise</span>
<h2 className="h2">Chesapeake Bay Boat Detailing Specialists</h2>
<p className="body mb-8">
                Based out of Edgewater, MAD Soaps delivers premium
                <a className="text-link" href="/marine-detailing">
                  mobile marine detailing
                </a>
                directly to your slip or driveway. We actively serve the major
                boating hubs and tributary rivers that define the Maryland
                boating lifestyle, ensuring your vessel is always prepared for
                the water. Many of the vessels we service are docked in
                Annapolis Harbor, the Severn River, and surrounding Chesapeake
                Bay marinas.
              </p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Annapolis
                </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  South River
                </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Severn River
                </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Magothy River
                </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  Kent Narrows
                </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  St. Michaels
                </span>
</div>
</div>

<div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
<iconify-icon icon="solar:anchor-linear" width="24"></iconify-icon>
</div>
<h3 className="h3 text-xl mb-0">
                    Boat Detailing at Annapolis Marinas
                  </h3>
</div>
<p className="body text-sm mb-6">
                  We are fully insured and regularly service vessels at premier
                  marinas and boatyards throughout the region. Our trusted
                  partnerships guarantee seamless access to your boat.
                </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm font-medium text-slate-700">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="18"></iconify-icon>
                    Port Annapolis Marina
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="18"></iconify-icon>
                    Bert Jabin's Yacht Yard
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="18"></iconify-icon>
                    Safe Harbor Annapolis
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="section bg-white border-b border-slate-100">
<div className="container-page">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="eyebrow eyebrow-primary">Proven Excellence</span>
<h2 className="h2">Recent Marine Detailing Projects</h2>
<p className="body">
              Trusted by owners across the Chesapeake Bay corridor for premium
              surface preservation.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">

<a className="card-service items-start bg-slate-50 block hover:bg-white" href="/projects/sea-ray-oxidation-removal-annapolis">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 tracking-tight">
                Sea Ray Oxidation Removal
              </h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5 mt-auto pt-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Annapolis
              </p>
</a>

<a className="card-service items-start bg-slate-50 block hover:bg-white" href="/projects/ranger-tug-bottom-paint-edgewater">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 tracking-tight">
                Ranger Tug Bottom Paint
              </h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5 mt-auto pt-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Edgewater
              </p>
</a>

<a className="card-service items-start bg-slate-50 block hover:bg-white" href="/projects/beneteau-ceramic-coating-port-annapolis">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 tracking-tight">
                Beneteau Ceramic Coating
              </h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5 mt-auto pt-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Port Annapolis
              </p>
</a>

<a className="card-service items-start bg-slate-50 block hover:bg-white" href="/projects/formula-full-restoration-bert-jabins">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 tracking-tight">
                Formula Full Restoration
              </h3>
<p className="text-sm text-slate-500 flex items-center gap-1.5 mt-auto pt-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Bert Jabin's
              </p>
</a>
</div>
<div className="text-center">
<a className="btn btn-primary btn-sm inline-flex" href="/projects">
              View All Projects
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="section bg-slate-50 border-b border-slate-100">
<div className="container-page">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
<img alt="MAD Soaps Team Award Presentation" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b449261-0257-48af-922c-100ea2a69e5e_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<span className="eyebrow eyebrow-primary">Award-Winning Team</span>
<h2 className="h2">Recognized for Excellence in Preservation</h2>
<p className="body mb-6 text-base md:text-lg">
                At MAD Soaps, our commitment to perfection goes beyond a
                surface-level clean. We take pride in our highly trained
                professionals who treat every vessel with the utmost care,
                ensuring lasting protection against the elements of the
                Chesapeake Bay.
              </p>
<p className="body mb-8 text-base md:text-lg">
                Our dedication to the craft has recently earned us top industry
                recognition, but our true reward remains the continuous trust of
                the Annapolis and Edgewater boating community.
              </p>
<a className="btn btn-primary" href="/about">
                Meet the Team
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-b border-slate-100">
<div className="container-page">
<div className="max-w-4xl mx-auto text-center">
<div className="flex justify-center gap-1 mb-6 text-amber-400">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<blockquote className="text-xl md:text-3xl font-medium tracking-tight text-slate-900 mb-8 leading-relaxed">
              "MAD Soaps restored the gelcoat on our Sea Ray perfectly. The
              level of detail and professionalism is unmatched on the Bay."
            </blockquote>
<cite className="text-sm text-slate-500 font-medium flex items-center justify-center gap-3 not-italic">
<span className="w-8 h-[1px] bg-slate-200"></span>
              Annapolis boat owner
              <span className="w-8 h-[1px] bg-slate-200"></span>
</cite>
</div>
</div>
</section>

<section className="section bg-slate-50">
<div className="container-page max-w-4xl">
<div className="text-center mb-12">
<span className="eyebrow eyebrow-primary">Questions</span>
<h2 className="h2">Frequently Asked Questions</h2>
</div>
<div className="flex flex-col gap-4">

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" open="">
<summary className="flex items-center justify-between gap-4 p-5 font-semibold text-slate-900 tracking-tight">
                How much does boat detailing cost in Annapolis?
                <iconify-icon className="faq-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Boat detailing in Annapolis typically ranges from $25 to $60 per
                foot depending on oxidation level and restoration requirements.
              </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<summary className="flex items-center justify-between gap-4 p-5 font-semibold text-slate-900 tracking-tight">
                Do you detail boats at Annapolis marinas?
                <iconify-icon className="faq-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Yes. MAD Soaps regularly services vessels at marinas throughout
                Annapolis including Port Annapolis Marina, Bert Jabin's Yacht
                Yard, Safe Harbor Annapolis, Annapolis Yacht Basin, Oak Grove
                Marine, and Chesapeake Harbour Marina.
              </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<summary className="flex items-center justify-between gap-4 p-5 font-semibold text-slate-900 tracking-tight">
                How often should boats be detailed in Annapolis?
                <iconify-icon className="faq-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                For boats kept in the Chesapeake Bay, we recommend a full detail
                and protection application at the start of the season, with
                regular maintenance washes every 2-4 weeks to prevent salt and
                organic buildup.
              </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<summary className="flex items-center justify-between gap-4 p-5 font-semibold text-slate-900 tracking-tight">
                Do you remove gelcoat oxidation?
                <iconify-icon className="faq-icon text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                Yes, we specialize in heavy gelcoat oxidation removal. We
                utilize a multi-step compounding and polishing process to
                restore the original color and gloss before sealing it with
                high-grade marine protection.
              </div>
</details>
</div>
</div>
</section>
</main>

<footer className="ms-footer">
<div className="ms-footer-inner">
<div className="ms-footer-grid">

<div className="">
<div className="ms-footer-brand">
<div className="ms-footer-logo">
<iconify-icon icon="solar:water-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="ms-footer-title">MAD SOAPS</span>
</div>
<p className="ms-footer-sub">
              Premium mobile surface preservation for marine and automotive
              investments across the Chesapeake Bay corridor.
            </p>
<div className="ms-footer-meta">
<a className="flex items-center gap-2" href="tel:+18336237627">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                (833) 623-7627
              </a>
<a className="flex items-center gap-2" href="mailto:detailing@madsoaps.com">
                Detailing@madsoaps.com
              </a>
<span className="flex items-center gap-2 mt-1">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                Annapolis &amp; Edgewater, MD
              </span>
</div>
<div className="ms-social-row">
<a aria-label="Facebook" className="ms-social" href="https://www.facebook.com/RealMADsoaps/" target="_blank">
<iconify-icon icon="ic:baseline-facebook" width="20"></iconify-icon>
</a>
<a aria-label="Instagram" className="ms-social" href="https://www.instagram.com/madsoapsinc/" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a aria-label="YouTube" className="ms-social" href="https://www.youtube.com/@RealMADSoaps" target="_blank">
<iconify-icon icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="ms-footer-col">
<h4>Marine Services</h4>
<div className="ms-footer-links">
<a className="" href="/marine-detailing">Boat Detailing</a>
<a className="" href="/marine-ceramic">Ceramic Coating</a>
<a className="" href="/mpf">Marine Protection Film</a>
<a href="/marine-bottom-paint">Bottom Paint</a>
<a className="" href="/marine-wood">Wood &amp; Varnish</a>
<a href="/marine-shrinkwrap">Shrink Wrap</a>
<a className="text-blue-400 mt-2" href="/marine-maintenance">
                Marine Memberships →
              </a>
</div>
</div>

<div className="ms-footer-col">
<h4>Company</h4>
<div className="ms-footer-links mb-8">
<a href="/about">About Us</a>
<a href="/careers">Careers</a>
<a href="/get-in-touch">Contact</a>
</div>
<h4>Automotive</h4>
<div className="ms-footer-links">
<a className="" href="/auto-full">Full Details</a>
<a className="" href="/auto-ceramic">Ceramic Coating</a>
<a className="text-blue-400 mt-2" href="/auto-plans">
                Annual Plans →
              </a>
</div>
</div>
</div>

<div className="ms-footer-bottom">
<span>© 2026 MAD Soaps Inc. All rights reserved.</span>
<div className="ms-legal">
<a className="" href="/privacy-page-2">Privacy Policy</a>
<a className="" href="/terms-and-agreements">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
