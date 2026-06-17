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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", function() {
// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Generate Leaves
const hero = document.getElementById('hero');
for(let i=0; i<8; i++) {
let leaf = document.createElement('div');
leaf.className = 'leaf';
leaf.style.left = Math.random() * 100 + '%';
leaf.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
leaf.style.animationDelay = `${Math.random() * 5}s`;
hero.appendChild(leaf);
}
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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
<svg aria-hidden="true" data-icon="solar:leaf-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">TRU LANDSCAPE</span>
<span className="text-[0.6rem] uppercase tracking-widest text-stone-500">Services of Orange County</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors" href="#hero">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors" href="#areas">Service Areas</a>
<a className="hover:text-emerald-700 transition-colors text-sm font-medium text-stone-600" href="#gallery">Gallery</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-stone-900 hover:text-emerald-700" href="tel:1-866-487-1359">1-866-487-1359</a>
<a className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-md hover:bg-stone-800 transition-all shadow-md" href="#contact">
                    Get Quote
                </a>
</div>

<button className="md:hidden text-stone-600">
<svg aria-hidden="true" data-icon="solar:hamburger-menu-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Orange County Landscape" className="w-full h-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-[20s] ease-out" src="https://www.trulandscape.com/wp-content/uploads/2023/01/unnamed-12.jpg"/>
<div className="bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    License #C-27 894221
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    If it's <span className="text-emerald-700">Outside</span>,<br/> We Do It.
                </h1>
<p className="text-lg text-stone-600 max-w-lg mb-8 leading-relaxed font-light">
                    Premier landscape contractor in Orange County. From custom pools and ADUs to synthetic turf and outdoor living. Licensed, bonded, and insured for over 30 years.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-robotic group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white overflow-hidden rounded-lg transition-all duration-300 hover:bg-emerald-900 shadow-lg shadow-emerald-900/20" href="#contact">
<span className="relative flex items-center gap-3 font-medium tracking-wide">
                            Free Estimate
                            <svg aria-hidden="true" data-icon="solar:arrow-right-linear" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-stone-200 text-stone-800 rounded-lg hover:bg-stone-50 transition-colors font-medium" href="tel:1-866-487-1359">
                        Call Now
                    </a>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4 reveal delay-200">
<div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:-translate-y-2 transition-transform duration-500 mt-12">
<svg aria-hidden="true" data-icon="solar:shield-check-linear" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></path><path d="m9.5 12.4l1.429 1.6l3.571-4" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
<h3 className="text-stone-900 font-medium mb-1">Licensed &amp; Bonded</h3>
<p className="text-xs text-stone-500">Full C-27 Landscape Contractor.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500">
<svg aria-hidden="true" data-icon="solar:calendar-linear" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" stroke="currentColor" strokeWidth="1.5"></path><path d="M7 4V2.5M17 4V2.5M2.5 9h19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path></g></svg>
<h3 className="text-stone-900 font-medium mb-1">30+ Years</h3>
<p className="text-xs text-stone-500">Serving all of Orange County.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500 col-span-2 w-3/4 mx-auto">
<svg aria-hidden="true" data-icon="solar:medal-star-circle-linear" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2m4.146 4.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
<h3 className="text-stone-900 font-medium mb-1">Award Winning</h3>
<p className="text-xs text-stone-500">Recognized for superior installation.</p>
</div>
</div>
</div>
<div className="leaf" style={{left: '43.9613%', animation: '8.10877s linear 3.91085s infinite normal none running float'}}></div><div className="leaf" style={{left: '15.8126%', animation: '6.95631s linear 0.458129s infinite normal none running float'}}></div><div className="leaf" style={{left: '10.8934%', animation: '5.60612s linear 3.4853s infinite normal none running float'}}></div><div className="leaf" style={{left: '77.4455%', animation: '10.6941s linear 2.59036s infinite normal none running float'}}></div><div className="leaf" style={{left: '22.8185%', animation: '7.5325s linear 0.610531s infinite normal none running float'}}></div><div className="leaf" style={{left: '25.2817%', animation: '9.93505s linear 3.81561s infinite normal none running float'}}></div><div className="leaf" style={{left: '87.3126%', animation: '9.37398s linear 1.53356s infinite normal none running float'}}></div><div className="leaf" style={{left: '64.6321%', animation: '7.68621s linear 4.51977s infinite normal none running float'}}></div><div className="leaf" style={{left: '89.2485%', animation: '11.143s linear 1.80404s infinite normal none running float'}}></div><div className="leaf" style={{left: '86.0996%', animation: '7.18314s linear 3.29248s infinite normal none running float'}}></div><div className="leaf" style={{left: '3.39298%', animation: '10.8008s linear 3.23s infinite normal none running float'}}></div><div className="leaf" style={{left: '6.22101%', animation: '11.7708s linear 4.26106s infinite normal none running float'}}></div><div className="leaf" style={{left: '36.9715%', animation: '5.11263s linear 1.79997s infinite normal none running float'}}></div><div className="leaf" style={{left: '41.157%', animation: '12.0972s linear 2.24115s infinite normal none running float'}}></div><div className="leaf" style={{left: '72.1087%', animation: '14.415s linear 2.8283s infinite normal none running float'}}></div><div className="leaf" style={{left: '37.1602%', animation: '9.5224s linear 1.81277s infinite normal none running float'}}></div><div className="leaf" style={{left: '18.5864%', animation: '8.28713s linear 2.88113s infinite normal none running float'}}></div><div className="leaf" style={{left: '90.6143%', animation: '9.24063s linear 3.34132s infinite normal none running float'}}></div><div className="leaf" style={{left: '40.9236%', animation: '11.7191s linear 1.45s infinite normal none running float'}}></div><div className="leaf" style={{left: '42.3636%', animation: '12.6712s linear 0.780858s infinite normal none running float'}}></div><div className="leaf" style={{left: '62.627%', animation: '12.2904s linear 0.451268s infinite normal none running float'}}></div><div className="leaf" style={{left: '89.5806%', animation: '5.22245s linear 3.66461s infinite normal none running float'}}></div><div className="leaf" style={{left: '55.0115%', animation: '12.9317s linear 2.72731s infinite normal none running float'}}></div><div className="leaf" style={{left: '10.5572%', animation: '7.94087s linear 0.462476s infinite normal none running float'}}></div><div className="leaf" style={{left: '90.9567%', animation: '7.24005s linear 1.68116s infinite normal none running float'}}></div><div className="leaf" style={{left: '67.8441%', animation: '13.8723s linear 0.202552s infinite normal none running float'}}></div><div className="leaf" style={{left: '59.1242%', animation: '5.73047s linear 0.506013s infinite normal none running float'}}></div><div className="leaf" style={{left: '10.7035%', animation: '5.93665s linear 4.40194s infinite normal none running float'}}></div><div className="leaf" style={{left: '14.7238%', animation: '8.32066s linear 1.55009s infinite normal none running float'}}></div><div className="leaf" style={{left: '5.0289%', animation: '5.18225s linear 1.07643s infinite normal none running float'}}></div><div className="leaf" style={{left: '23.1987%', animation: '10.3831s linear 4.40856s infinite normal none running float'}}></div><div className="leaf" style={{left: '17.8364%', animation: '14.4293s linear 3.63572s infinite normal none running float'}}></div><div className="leaf" style={{left: '28.149%', animation: '5.27373s linear 2.84146s infinite normal none running float'}}></div><div className="leaf" style={{left: '4.05317%', animation: '5.59936s linear 0.561388s infinite normal none running float'}}></div><div className="leaf" style={{left: '50.0199%', animation: '6.83797s linear 0.943273s infinite normal none running float'}}></div><div className="leaf" style={{left: '97.4864%', animation: '6.23693s linear 1.3705s infinite normal none running float'}}></div><div className="leaf" style={{left: '68.7625%', animation: '10.1175s linear 0.223399s infinite normal none running float'}}></div><div className="leaf" style={{left: '23.524%', animation: '6.80923s linear 1.97023s infinite normal none running float'}}></div><div className="leaf" style={{left: '38.6234%', animation: '13.3145s linear 3.23953s infinite normal none running float'}}></div><div className="leaf" style={{left: '52.9465%', animation: '8.60505s linear 3.91755s infinite normal none running float'}}></div></section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
<div className="">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Complete Outdoor Solutions</h2>
</div>
<p className="text-stone-500 max-w-sm text-sm mt-4 md:mt-0">
                    No need for multiple contractors. We handle everything from hardscape to irrigation.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group reveal rounded-xl overflow-hidden relative h-96 cursor-pointer">
<img alt="Orange County Pools" className="service-card-img absolute inset-0 w-full h-full object-cover" src="https://www.trulandscape.com/wp-content/uploads/2022/08/IMG_9807.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-3 border border-white/20">
<svg aria-hidden="true" data-icon="solar:water-sun-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773m20 5c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773" strokeLinejoin="round"></path><path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.393.393M5.322 5.322L4.93 4.93"></path></g></svg>
</div>
<h3 className="text-white text-lg font-medium mb-1">Custom Pools</h3>
<p className="text-stone-300 text-xs">New construction &amp; remodels.</p>
</div>
</div>

<div className="group reveal delay-100 rounded-xl overflow-hidden relative h-96 cursor-pointer">
<img alt="Outdoor Living" className="service-card-img absolute inset-0 w-full h-full object-cover" src="https://www.trulandscape.com/wp-content/uploads/2022/11/IMG-3079.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-3 border border-white/20">
<svg aria-hidden="true" data-icon="solar:flame-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.011c0-1.95-1.644-4.254-2.928-5.674c-.293-.325-.805-.11-.821.328c-.053 1.449-.282 3.388-1.268 4.907a.412.412 0 0 1-.677.037c-.308-.39-.616-.872-.924-1.252c-.166-.205-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-1">Outdoor Living</h3>
<p className="text-stone-300 text-xs">Fire pits, patios &amp; kitchens.</p>
</div>
</div>

<div className="group reveal delay-200 rounded-xl overflow-hidden relative h-96 cursor-pointer">
<img alt="ADU Construction" className="service-card-img absolute inset-0 w-full h-full object-cover" src="https://www.trulandscape.com/wp-content/uploads/2022/09/CE736F36-91CF-4356-9009-C808852B7603.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-3 border border-white/20">
<svg aria-hidden="true" data-icon="solar:home-smile-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></path><path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" strokeLinecap="round"></path></g></svg>
</div>
<h3 className="text-white text-lg font-medium mb-1">Custom ADUs</h3>
<p className="text-stone-300 text-xs">Extra living space construction.</p>
</div>
</div>

<div className="group reveal delay-300 rounded-xl overflow-hidden relative h-96 cursor-pointer">
<img alt="Turf and Hardscape" className="service-card-img absolute inset-0 w-full h-full object-cover" src="https://www.trulandscape.com/wp-content/uploads/2023/10/27331-Celanova-Web-4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-3 border border-white/20">
<svg aria-hidden="true" data-icon="solar:layers-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14"></path></g></svg>
</div>
<h3 className="text-white text-lg font-medium mb-1">Hardscape &amp; Turf</h3>
<p className="text-stone-300 text-xs">Pavers, concrete &amp; synthetic grass.</p>
</div>
</div>
</div>

<div className="mt-16 pt-16 border-t border-stone-100 grid md:grid-cols-4 gap-8 reveal">
<div className="">
<h4 className="font-medium text-stone-900 mb-4">Construction</h4>
<ul className="text-sm text-stone-500 space-y-2">
<li className="">Landscape Design</li>
<li>Interlocking Pavers</li>
<li className="">Block Walls</li>
<li>Drain Systems</li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Water &amp; Fire</h4>
<ul className="text-sm text-stone-500 space-y-2">
<li>Pool Remodels</li>
<li>Ponds &amp; Waterfalls</li>
<li>Fire Features</li>
<li>Irrigation Systems</li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Greens</h4>
<ul className="text-sm text-stone-500 space-y-2">
<li>Synthetic Turf</li>
<li>Putting Greens</li>
<li>Sod Installation</li>
<li>Tree Planting</li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Lighting</h4>
<ul className="text-sm text-stone-500 space-y-2">
<li>Low Voltage Lighting</li>
<li>Path Lights</li>
<li>Security Lighting</li>
<li>Smart Timers</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50" id="areas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10 reveal">
<h2 className="text-2xl font-medium text-stone-900 mb-2">Serving All of Orange County</h2>
<p className="text-sm text-stone-500">Local expertise in your neighborhood.</p>
</div>
<div className="flex flex-wrap justify-center gap-3 reveal">
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Anaheim</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Anaheim Hills</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Aliso Viejo</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Brea</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Buena Park</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Costa Mesa</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Coto De Caza</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Dana Point</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Fountain Valley</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Fullerton</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Garden Grove</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Huntington Beach</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Irvine</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Laguna Beach</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Laguna Niguel</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Lake Forest</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Mission Viejo</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Newport Beach</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Orange</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">San Clemente</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Santa Ana</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Tustin</span>
<span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs text-stone-600">Yorba Linda</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="reveal bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
<h2 className="text-2xl font-medium text-stone-900 mb-1">Request an Estimate</h2>
<p className="text-sm text-stone-500 mb-8">Ready to transform your yard? Send us a message.</p>
<form action="#" className="space-y-6">
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="name" placeholder=" " type="text"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="name">Your Name</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="email" placeholder=" " type="email"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<textarea className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="message">Project Details</label>
</div>
<button className="btn-robotic w-full py-4 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-900 transition-all flex justify-center items-center gap-2 group" type="button">
                            Submit Request
                            <svg aria-hidden="true" data-icon="solar:plain-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z" fill="currentColor"></path></g></svg>
</button>
</form>
</div>

<div className="reveal delay-100 flex flex-col h-full justify-between">
<div className="mb-8">
<h2 className="text-2xl font-medium text-stone-900 mb-6">Contact Us</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-emerald-700 shrink-0">
<svg aria-hidden="true" data-icon="solar:map-point-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Office Location</h4>
<p className="text-sm text-stone-500 leading-relaxed mt-1">850 E Chapman Ave Suite E,<br/>Orange, CA 92866</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-emerald-700 shrink-0">
<svg aria-hidden="true" data-icon="solar:phone-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z" fill="currentColor"></path></svg>
</div>
<div>
<h4 className="font-medium text-stone-900">Phone</h4>
<a className="text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors block mt-1" href="tel:1-866-487-1359">1-866-487-1359</a>
<span className="text-sm text-stone-400 block mt-1">Mon-Fri: 8am - 5pm</span>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-stone-200 relative group">
<div className="absolute inset-0 bg-emerald-900/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.352485526978!2d-117.84690828479132!3d33.78763488067868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9e514a6d90f%3A0xfca055cd4c75fd25!2sThe%20Fairbairn%20Professional%20Building%2C%20850%20E%20Chapman%20Ave%2C%20Orange%2C%20CA%2092866!5e0!3m2!1sen!2sus!4v1645555555555!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">
<svg aria-hidden="true" data-icon="solar:leaf-linear" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<span className="text-white font-medium tracking-tight">TRU LANDSCAPE</span>
</div>
<p className="text-xs max-w-sm leading-relaxed text-stone-500 mb-4">
                    Licensed, Bonded &amp; Insured Landscape Contractor in Orange County. Creating superior outdoor environments for over 30 years.
                </p>
<p className="text-xs text-stone-600 font-mono">License C-27 #894221</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-2 text-xs">
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Landscape Construction</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Pool Remodels</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Outdoor Living</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Synthetic Turf</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<a className="inline-flex items-center gap-2 text-xs hover:text-emerald-400 transition-colors group mb-2" href="https://www.facebook.com/TRU.Landscape.Services">
<span className="iconify" data-icon="solar:facebook-linear" data-width="14"></span>
                    Facebook
                </a>
<br/>
<a className="inline-flex items-center gap-2 text-xs hover:text-emerald-400 transition-colors group" href="tel:1-866-487-1359">
<svg aria-hidden="true" data-icon="solar:phone-linear" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z" fill="currentColor"></path></svg>
                    1-866-487-1359
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-wider text-stone-600">
<p>© 2025 TRU Landscape Services. All rights reserved.</p>
<p>Designed in Orange County</p>
</div>
</footer>

    </>
  );
}
