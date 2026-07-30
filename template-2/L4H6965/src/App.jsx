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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 animate-blur-in nav-element">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-xl font-medium tracking-tight">Studio</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-black transition-colors duration-200 font-light text-gray-600" href="#casi-studio">Casi Studio</a>
<a className="text-gray-600 hover:text-black transition-colors duration-200 font-light" href="#services">Services</a>
<a className="hover:text-black transition-colors duration-200 font-light text-gray-600" href="#about">About</a>
</div>
<div className="hidden md:block">
<button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300" onClick={(e) => { openContactModal() }}>
                        Get in Touch
                    </button>
</div>
<div className="md:hidden">
<button className="p-2 text-gray-600 hover:text-black transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center pt-20 pr-6 pl-6">
<div className="max-w-6xl mx-auto text-center">
<h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 animate-blur-in hero-element-1">
<span className="block">Design</span>
<span className="block">Excellence</span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-blur-in hero-element-2">
                We craft digital experiences that connect, inspire, and transform your vision into reality
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-blur-in hero-element-3">
<button className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md" onClick={(e) => { openContactModal() }}>
                    Start Project
                </button>
<button className="px-8 py-4 border border-gray-300 text-black rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md" onClick={(e) => { document.getElementById('casi-studio').scrollIntoView({behavior: 'smooth'}) }}>
                    View Portfolio
                </button>
</div>
<div className="relative animate-blur-in hero-element-4">
<div className="w-full max-w-4xl mx-auto">
<div className="relative h-64 md:h-80 bg-gray-50 rounded-3xl shadow-sm overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full">
<div className="absolute top-1/4 left-1/4 w-16 h-16 bg-black rounded-full"></div>
<div className="absolute top-1/2 right-1/3 w-24 h-1 bg-black"></div>
<div className="absolute bottom-1/3 left-1/2 w-12 h-12 border-2 border-black transform rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-blur-in hero-element-5">
<div className="text-center">
<div className="text-3xl font-light mb-2">150+</div>
<div className="text-gray-600 font-light">Projects Completed</div>
</div>
<div className="text-center">
<div className="text-3xl font-light mb-2">50+</div>
<div className="text-gray-600 font-light">Happy Clients</div>
</div>
<div className="text-center">
<div className="text-3xl font-light mb-2">5+</div>
<div className="text-gray-600 font-light">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-50" id="casi-studio">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Casi Studio</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    Progetti reali che hanno trasformato le visioni dei nostri clienti in successi digitali
                </p>
</div>

<div className="mb-20">
<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative">
<div className="case-study-image h-80 lg:h-full">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-4xl font-light opacity-20">FEATURED</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">WEB DEVELOPMENT • E-COMMERCE</div>
<div className="text-lg font-semibold">Visualizza il progetto →</div>
</div>
</div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="text-sm font-medium text-gray-500 mb-4">FEATURED PROJECT</div>
<h3 className="text-3xl font-semibold mb-6">TechStore Platform</h3>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                                Piattaforma e-commerce completa per un retailer di tecnologia con oltre 10.000 prodotti. Sistema di gestione inventario in tempo reale, integrazione con multiple payment gateway e dashboard analytics avanzata.
                            </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
<span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Node.js</span>
<span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">MongoDB</span>
<span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Stripe</span>
<span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AWS</span>
</div>
<div className="grid grid-cols-3 gap-6 mb-8">
<div>
<div className="text-2xl font-semibold text-green-600">+250%</div>
<div className="text-sm text-gray-600">Conversion Rate</div>
</div>
<div>
<div className="text-2xl font-semibold text-blue-600">98%</div>
<div className="text-sm text-gray-600">Uptime</div>
</div>
<div>
<div className="text-2xl font-semibold text-purple-600">2.1s</div>
<div className="text-sm text-gray-600">Load Time</div>
</div>
</div>
<button className="px-6 py-3 border border-gray-300 text-black rounded-full font-medium hover:bg-gray-50 transition-all duration-300 self-start">
                                View Case Study
                            </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">MOBILE</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">MOBILE APP</div>
<div className="text-lg font-semibold">Esplora →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">FitTracker App</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            App mobile per il fitness tracking con integrazione wearables, social features e AI-powered coaching personalizzato.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">React Native</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Firebase</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">ML Kit</span>
</div>
<div className="text-sm text-gray-500">50K+ Downloads</div>
</div>
</div>

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">SAAS</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">WEB APPLICATION</div>
<div className="text-lg font-semibold">Scopri →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">ProjectFlow</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            Piattaforma SaaS per project management con automazioni avanzate, reporting in tempo reale e integrazione con tool esterni.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue.js</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Python</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">PostgreSQL</span>
</div>
<div className="text-sm text-gray-500">1000+ Active Users</div>
</div>
</div>

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">BRAND</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">BRANDING • WEB</div>
<div className="text-lg font-semibold">Vedi →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">GreenTech Startup</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            Rebranding completo e sito web per startup nel settore cleantech, con focus su sostenibilità e innovazione.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Next.js</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Figma</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Framer Motion</span>
</div>
<div className="text-sm text-gray-500">Award Winner</div>
</div>
</div>

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">FINTECH</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">FINTECH • MOBILE</div>
<div className="text-lg font-semibold">Analizza →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">PaymentPro</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            Sistema di pagamenti digitali per PMI con dashboard analytics, gestione fatturazione e compliance normativa.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Angular</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Spring Boot</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">MySQL</span>
</div>
<div className="text-sm text-gray-500">€10M+ Processed</div>
</div>
</div>

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">HEALTH</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">HEALTHCARE • WEB</div>
<div className="text-lg font-semibold">Esplora →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">MediConnect</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            Piattaforma telemedicina per connettere pazienti e medici, con prenotazioni online, videoconsulti e cartelle digitali.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">React</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">WebRTC</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">HIPAA</span>
</div>
<div className="text-sm text-gray-500">5000+ Consultations</div>
</div>
</div>

<div className="case-study-card bg-white rounded-3xl overflow-hidden shadow-sm">
<div className="relative">
<div className="case-study-image h-48" style={{background: `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)`}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-white text-2xl font-light opacity-30">EDTECH</div>
</div>
<div className="case-study-overlay">
<div className="text-sm font-medium mb-2">EDUCATION • PLATFORM</div>
<div className="text-lg font-semibold">Scopri →</div>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-3">LearnHub</h3>
<p className="text-gray-600 mb-4 leading-relaxed">
                            Piattaforma e-learning con corsi interattivi, gamification, progress tracking e certificazioni digitali.
                        </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nuxt.js</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Laravel</span>
<span className="tech-tag px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Redis</span>
</div>
<div className="text-sm text-gray-500">15K+ Students</div>
</div>
</div>
</div>
<div className="text-center mt-16">
<button className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md" onClick={(e) => { openContactModal() }}>
                    Inizia il Tuo Progetto
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Our Services</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    Offriamo soluzioni complete per trasformare le tue idee in realtà digitali innovative
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="service-card bg-white rounded-3xl p-8 shadow-sm">
<div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Web Development</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Sviluppiamo siti web e applicazioni web moderne, responsive e ottimizzate per le performance. Utilizziamo le tecnologie più avanzate per garantire scalabilità e sicurezza.
                    </p>
<ul className="text-sm text-gray-600 space-y-2 mb-6">
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            React, Vue.js, Angular
                        </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Node.js, Python, PHP
                        </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Database Design & API
                        </li>
</ul>
<div className="text-2xl font-light mb-2">Da €2.500</div>
<div className="text-sm text-gray-500">Progetti personalizzati</div>
</div>

<div className="service-card bg-white rounded-3xl p-8 shadow-sm">
<div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
<path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold mb-4">Mobile Applications</h3>
<p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Creiamo app mobile native e cross-platform per iOS e Android. Dall'ideazione al deployment negli store, gestiamo l'intero processo di sviluppo.
                    </p>
<ul className="text-sm text-gray-600 space-y-2 mb-6">
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            React Native, Flutter
                        </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            iOS & Android Native
                        </li></ul></div></div></div></section>
    </>
  );
}
