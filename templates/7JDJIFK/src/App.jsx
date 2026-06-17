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
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0) translateY(0)';
                    entry.target.style.filter = 'blur(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.about-content, .about-image').forEach(el => {
            observer.observe(el);
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe></div>

<nav className="fixed top-0 left-0 right-0 z-50 lg:px-8 opacity-0 pt-6 pr-6 pb-6 pl-6 blur-sm translate-y-[-20px] transition-all duration-300" style={{animation: '0.8s ease-in-out 0.2s 1 normal forwards running fadeInSlide', backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.3)'}}>
<div className="max-w-7xl flex mr-auto ml-auto items-center justify-between">
<div className="text-xl font-black text-gray-900 tracking-tight font-inter" style={{}}>TASG GmbH</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-sky-500 transition-colors duration-200 text-sm text-gray-700 font-manrope" href="#" style={{}}>Wohngebäude</a>
<a className="hover:text-sky-500 transition-colors duration-200 text-sm text-gray-700 font-manrope" href="#" style={{}}>Nichtwohngebäude</a>
<a className="hover:text-sky-500 transition-colors duration-200 text-sm text-gray-700 font-manrope" href="#" style={{}}>Kostenschätzer</a>
<a className="hover:text-sky-500 transition-colors duration-200 text-sm text-gray-700 font-manrope" href="#" style={{}}>Standorte</a>
</div>
<button className="md:hidden p-2 text-gray-700 hover:text-sky-500 transition-colors" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>

<main className="relative min-h-screen flex lg:px-8 pt-20 pr-6 pb-20 pl-6 items-center justify-center">
<div className="max-w-7xl text-center mr-auto ml-auto">

<h1 className="md:text-6xl lg:text-7xl opacity-0 text-5xl font-extrabold text-gray-900 tracking-tight font-inter mt-20 mb-5 blur-sm translate-y-8" style={{animation: '1s ease-in-out 0.4s 1 normal forwards running fadeInSlideBlur'}}>Lüftungsgeräte<br/><span className="font-light text-sky-500" style={{}}>schlüsselfertig!</span></h1>

<p className="md:text-2xl max-w-3xl leading-relaxed opacity-0 text-xl text-gray-600 font-manrope mr-auto mb-12 ml-auto blur-sm translate-y-6" style={{animation: '1s ease-in-out 0.6s 1 normal forwards running fadeInSlideBlur'}}>Austausch und Installation von Lüftungsgeräten, RLT-Geräten und Klimageräten mit ±15% Kostenschätzungdurch TGA-Ingenieur</p>

<div className="flex flex-col sm:flex-row gap-4 opacity-0 mb-16 blur-sm translate-y-4 items-center justify-center" style={{animation: 'fadeInSlideBlur 1s ease-in-out 0.8s forwards'}}>
<button className="hover:bg-sky-600 transition-all duration-200 hover:shadow-lg transform hover:scale-105 min-w-[160px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-sm font-medium text-white font-manrope bg-gradient-to-r from-sky-500 to-sky-800 rounded-full pt-4 pr-8 pb-4 pl-8" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>Kostenschätzung starten</button>
<button className="hover:border-sky-500 hover:text-sky-500 transition-all duration-200 hover:shadow-md transform hover:scale-105 min-w-[160px] text-sm font-medium text-gray-700 font-manrope bg-white/80 border-gray-300 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" style={{}}>Sofort anrufen</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 translate-y-6 blur-sm" style={{animation: 'fadeInSlideBlur 1s ease-in-out 1s forwards'}}>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 flex group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 bg-white/80 rounded-2xl mb-4 backdrop-blur-sm items-center justify-center" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
<svg className="lucide lucide-zap w-7 h-7 text-sky-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="font-inter font-medium text-lg text-gray-900 mb-2" style={{}}>Lightning Fast</h3>
<p className="font-manrope text-sm text-gray-600" style={{}}>Built for speed and performance</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
<svg className="lucide lucide-shield-check w-7 h-7 text-sky-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-inter font-medium text-lg text-gray-900 mb-2" style={{}}>Secure &amp; Reliable</h3>
<p className="font-manrope text-sm text-gray-600" style={{}}>Enterprise-grade security</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
<svg className="lucide lucide-sparkles w-7 h-7 text-sky-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-inter font-medium text-lg text-gray-900 mb-2" style={{}}>AI Powered</h3>
<p className="font-manrope text-sm text-gray-600" style={{}}>Intelligent automation</p>
</div>
</div>

<div className="mt-20 opacity-0 translate-y-8 blur-sm" style={{animation: 'fadeInSlideBlur 1.2s ease-in-out 1.2s forwards'}}>
<div className="relative max-w-5xl mr-auto ml-auto">
</div>
</div>
</div>

<div className="absolute top-20 left-10 w-32 h-32 opacity-30 bg-sky-100 rounded-full blur-xl" style={{}}></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-sky-50 rounded-full opacity-40 blur-2xl" style={{}}></div>
</main>

<section className="relative lg:px-8 bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 about-content opacity-0 translate-x-[-30px] blur-sm" style={{animation: '1s ease-in-out 0s 1 normal forwards running fadeInSlideBlur', opacity: '1', transform: 'translateX(0px) translateY(0px)', filter: 'blur(0px)'}}>
<div className="">
<h2 className="lg:text-5xl text-4xl font-bold text-gray-900 tracking-tight font-inter mb-6">Alles schlüsselfertig <span className="text-sky-500"> aus einer Hand</span></h2>
<p className="leading-relaxed text-lg font-bold text-gray-600 font-manrope mb-8">Von der TGA-Planung bis zur Inbetriebnahme übernehmen wir alle Schritte für Ihren Lüftungsgeräte-Austausch.</p>
<p className="leading-relaxed text-base text-gray-600 font-manrope">Moderne Lüftungstechnik ist das Herzstück eines gesunden und energieeffizienten Gebäudes. Unser erfahrenes Team begleitet Sie durch den gesamten Prozess – von der ersten Beratung über die fachgerechte Installation bis hin zur langfristigen Wartung Ihrer Lüftungsanlage.</p>
</div>

<div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
<div className="text-center">
<div className="text-3xl font-bold text-sky-500 font-inter mb-2">7+</div>
<div className="text-sm text-gray-600 font-manrope">Erfahrung</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-sky-500 font-inter mb-2">50+</div>
<div className="text-sm text-gray-600 font-manrope">zufriedene Kunden</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-sky-500 font-inter mb-2">99%</div>
<div className="text-sm text-gray-600 font-manrope">Satisfaction Rate</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 about-image opacity-0 translate-x-[30px] blur-sm" style={{animation: '1s ease-in-out 0s 1 normal forwards running fadeInSlideBlur', opacity: '1', transform: 'translateX(0px) translateY(0px)', filter: 'blur(0px)'}}>

<div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-xl pt-6 pr-6 pb-6 pl-6 group shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<h3 className="font-semibold text-white font-inter mb-3">Beratung &amp; Planung</h3>
<p className="text-sm text-sky-100 font-manrope leading-relaxed">TGA-Planung HOAI LP1-LP8 &amp; 14001h durch zertifizierte Ingenieure – für eine maßgeschneiderte Lösung, die perfekt zu Ihren Anforderungen passt.</p>
</div>

<div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-xl pt-6 pr-6 pb-6 pl-6 group shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<h3 className="font-semibold text-white font-inter mb-3">Produktion &amp; Lieferung</h3>
<p className="text-sm text-sky-100 font-manrope leading-relaxed">Erstklassige Flex/Phoenix Geräte von IV Produkt mit CE-Kennzeichnung – höchste Qualität und Zuverlässigkeit garantiert.</p>
</div>

<div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-xl pt-6 pr-6 pb-6 pl-6 group shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>
</div>
<h3 className="font-semibold text-white font-inter mb-3">Installation &amp; Bauleitung</h3>
<p className="text-sm text-sky-100 font-manrope leading-relaxed">Rückbau Altgerät, Installation der neuen Geräte und fachgerechter Anschluss aller Komponenten durch unsere Spezialisten.</p>
</div>

<div className="bg-gradient-to-br from-sky-500 to-sky-700 text-white rounded-xl pt-6 pr-6 pb-6 pl-6 group shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="m2 17 10 5 10-5"></path>
<path d="m2 12 10 5 10-5"></path>
</svg>
</div>
<h3 className="font-semibold text-white font-inter mb-3">Inbetriebnahme &amp; Service</h3>
<p className="text-sm text-sky-100 font-manrope leading-relaxed">Funktionsprüfung, Einregulierung und langfristige Wartungsverträge für optimale Leistung Ihrer Lüftungsanlage.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gray-50 py-24 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<h2 className="lg:text-5xl text-4xl font-bold text-gray-900 tracking-tight font-inter mb-6">Kostenschätzer für Lüftungsgeräte</h2>
<p className="max-w-3xl leading-relaxed text-xl text-gray-600 font-manrope mr-auto ml-auto">Erhalten Sie eine ±15% genaue Kostenschätzung durch unseren TGA-lngenieur. Wählen
Sie die passende Gerätegröße für Ihr Projekt</p>
</div>

<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-gray-900 font-inter mb-2">Wohngebäude</h3>
<p className="text-gray-600 font-manrope mb-6">Perfekt für Einfamilienhäuser</p>
<div className="text-4xl font-bold text-sky-500 font-inter mb-2">ab €15.000</div>
<p className="text-sm text-gray-500 font-manrope">Komplettpaket</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">TGA-Planung HOAI LP1-8</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Flex/Phoenix Gerät bis 2.000 m³/h</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Installation &amp; Inbetriebnahme</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">±15% Kostenschätzung</span>
</li>
</ul>
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 font-manrope">
                        Angebot anfordern
                    </button>
</div>

<div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-2xl p-8 shadow-xl text-white transform scale-105 relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold font-manrope">
                            Beliebt
                        </span>
</div>
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white font-inter mb-2">Nichtwohngebäude</h3>
<p className="text-sky-100 font-manrope mb-6">Ideal für Büros &amp; Gewerbe</p>
<div className="text-4xl font-bold text-white font-inter mb-2">ab €35.000</div>
<p className="text-sm text-sky-100 font-manrope">Vollservice-Paket</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-sky-100 font-manrope">Komplette TGA-Planung</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-sky-100 font-manrope">RLT-Geräte bis 10.000 m³/h</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-sky-100 font-manrope">Bauleitung &amp; Koordination</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-sky-100 font-manrope">24/7 Support &amp; Wartung</span>
</li>
</ul>
<button className="w-full bg-white text-sky-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 font-manrope">
                        Kostenlos beraten lassen
                    </button>
</div>

<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-gray-900 font-inter mb-2">Industrie</h3>
<p className="text-gray-600 font-manrope mb-6">Für große Industrieanlagen</p>
<div className="text-4xl font-bold text-sky-500 font-inter mb-2">Auf Anfrage</div>
<p className="text-sm text-gray-500 font-manrope">Individuelle Lösung</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Maßgeschneiderte Planung</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Großanlagen &gt;10.000 m³/h</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Projektmanagement</span>
</li>
<li className="flex items-start">
<svg className="w-5 h-5 text-sky-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-700 font-manrope">Langzeit-Serviceverträge</span>
</li>
</ul>
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 font-manrope">
                        Kontakt aufnehmen
                    </button>
</div>
</div>
</div>
</section><section className="relative lg:px-8 bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="lg:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-inter mb-12 text-center">Häufig gestellte Fragen (FAQ)</h2>
<div className="space-y-6">
<details className="group border border-gray-200 rounded-lg p-6 open:border-sky-500 open:ring-1 open:ring-sky-500 transition-all duration-300">
<summary className="font-manrope font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
          Was ist in der Kostenschätzung enthalten?
          <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</summary>
<p className="mt-4 text-gray-700 font-manrope text-base leading-relaxed">Unsere Kostenschätzung umfasst die TGA-Planung, die Auswahl der passenden Lüftungsgeräte und eine ±15% genaue Preisprognose basierend auf Ihren Projektanforderungen.</p>
</details>
<details className="group border border-gray-200 rounded-lg p-6 open:border-sky-500 open:ring-1 open:ring-sky-500 transition-all duration-300">
<summary className="font-manrope font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
          Wie lange dauert die Installation der Lüftungsgeräte?
          <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</summary>
<p className="mt-4 text-gray-700 font-manrope text-base leading-relaxed">Die Installationsdauer hängt von der Größe und Komplexität des Projekts ab. Typischerweise dauert die Installation bei Wohngebäuden wenige Tage, bei größeren Gewerbeanlagen entsprechend länger.</p>
</details>
<details className="group border border-gray-200 rounded-lg p-6 open:border-sky-500 open:ring-1 open:ring-sky-500 transition-all duration-300">
<summary className="font-manrope font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
          Welche Wartungsservices bieten Sie an?
          <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</summary>
<p className="mt-4 text-gray-700 font-manrope text-base leading-relaxed">Wir bieten langfristige Wartungsverträge inklusive regelmäßiger Inspektionen, Funktionsprüfungen und Einregulierungen, um die optimale Leistung Ihrer Lüftungsanlagen sicherzustellen.</p>
</details>
<details className="group border border-gray-200 rounded-lg p-6 open:border-sky-500 open:ring-1 open:ring-sky-500 transition-all duration-300">
<summary className="font-manrope font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
          Können auch Großanlagen über 10.000 m³/h geplant werden?
          <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</summary>
<p className="mt-4 text-gray-700 font-manrope text-base leading-relaxed">Ja, wir bieten maßgeschneiderte Lösungen und Projektmanagement für große Industrieanlagen mit Lüftungsgeräten über 10.000 m³/h inklusive Bauleitung und Serviceverträgen.</p>
</details>
<details className="group border border-gray-200 rounded-lg p-6 open:border-sky-500 open:ring-1 open:ring-sky-500 transition-all duration-300">
<summary className="font-manrope font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
          Wie kann ich eine Beratung oder ein Angebot anfordern?
          <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</summary>
<p className="mt-4 text-gray-700 font-manrope text-base leading-relaxed">Sie können direkt über unsere Website ein Angebot anfordern oder telefonisch eine kostenlose Beratung vereinbaren. Unsere Experten helfen Ihnen gern weiter.</p>
</details>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-4 gap-8 mb-12">

<div className="space-y-4">
<h3 className="text-2xl font-bold font-inter">TASG GmbH</h3>
<p className="text-gray-300 font-manrope leading-relaxed">
                        Ihr Partner für professionelle Lüftungstechnik und schlüsselfertige TGA-Lösungen.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-sky-400 transition-colors" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-sky-400 transition-colors" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
</svg>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold font-inter mb-4">Services</h4>
<ul className="space-y-2 font-manrope">
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Wohngebäude</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Nichtwohngebäude</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">TGA-Planung</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Wartung &amp; Service</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold font-inter mb-4">Unternehmen</h4>
<ul className="space-y-2 font-manrope">
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Über uns</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Karriere</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Referenzen</a></li>
<li><a className="text-gray-300 hover:text-sky-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold font-inter mb-4">Kontakt</h4>
<div className="space-y-2 font-manrope text-gray-300">
<p>Musterstraße 123</p>
<p>12345 Musterstadt</p>
<p>+49 (0) 123 456 789</p>
<p>info@tasg.de</p>
</div>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 font-manrope">© 2024 TASG GmbH. Alle Rechte vorbehalten.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-sky-400 transition-colors font-manrope text-sm" href="#">Datenschutz</a>
<a className="text-gray-400 hover:text-sky-400 transition-colors font-manrope text-sm" href="#">Impressum</a>
<a className="text-gray-400 hover:text-sky-400 transition-colors font-manrope text-sm" href="#">AGB</a>
</div>
</div>
</div>
</footer>
<style>
        @keyframes fadeInSlide {
            from {
                opacity: 0;
                transform: translateY(-20px);
                filter: blur(4px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        @keyframes fadeInSlideBlur {
            from {
                opacity: 0;
                transform: translateY(20px);
                filter: blur(4px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        .about-content,
        .about-image {
            animation: fadeInSlideBlur 1s ease-in-out forwards;
        }
    </style>


    </>
  );
}
