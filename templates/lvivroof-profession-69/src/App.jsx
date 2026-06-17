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



        lucide.createIcons();
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
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
      

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight text-gray-900" style={{letterSpacing: '-0.02em'}}>
                        LVIV<span className="text-yellow-500">ROOF</span>
</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#services">Послуги</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#projects">Проєкти</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#about">Про нас</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#reviews">Відгуки</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Контакти</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden sm:flex items-center text-sm font-medium text-gray-900" href="tel:+380322000000">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i>
                        +380 32 200 00 00
                    </a>
<button className="md:hidden">
<i className="w-6 h-6 text-gray-900" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
</header>

<section className="hero-overlay relative min-h-[600px] lg:min-h-[700px] flex items-center">
<div 100\"="" 100px="" 100px;"="" 10h20v2h10zm40="" 10h20v2h40zm70="" 10h20v2h70z\"="" background-size:="" className="absolute inset-0 opacity-[0.08]" d='\"M10' fill="\&quot;%23FFC400\&quot;/%3E%3C/svg%3E');" height='\"100\"' style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg width=\'}} xmlns='\"http://www.w3.org/2000/svg\"%3E%3Cpath'></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                    Reliable roofs.<br/>Built with Lviv craft.
                </h1>
<p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                    Installation, repair, and maintenance backed by Ukrainian quality and clear guarantees.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all hover:shadow-lg" href="#contact">
                        Get a quote
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all" href="#projects">
                        See our work
                    </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-yellow-500" data-lucide="award"></i>
</div>
<div>
<div className="text-white font-semibold">10+ years</div>
<div className="text-sm text-gray-300">Experience</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-yellow-500" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-white font-semibold">Certified</div>
<div className="text-sm text-gray-300">Installers</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
<i className="w-6 h-6 text-yellow-500" data-lucide="clock"></i>
</div>
<div>
<div className="text-white font-semibold">Up to 15 years</div>
<div className="text-sm text-gray-300">Warranty</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Why choose us
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We combine Lviv craftsmanship with modern standards to deliver roofs that last.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
<i className="w-6 h-6 text-blue-900" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Local mastery</h3>
<p className="text-gray-600 leading-relaxed">
                        Born in Lviv. We know the climate, materials, and architecture. Our expertise is rooted in western Ukraine's unique building traditions.
                    </p>
</div>

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors">
<i className="w-6 h-6 text-yellow-600" data-lucide="package"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Quality materials</h3>
<p className="text-gray-600 leading-relaxed">
                        We use vetted suppliers. No compromise. Every tile, sheet, and fastener meets our strict standards for durability.
                    </p>
</div>

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
<i className="w-6 h-6 text-blue-900" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Clear warranties</h3>
<p className="text-gray-600 leading-relaxed">
                        Transparent contracts. Up to 15 years coverage. We stand behind our work with written guarantees you can trust.
                    </p>
</div>

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
<i className="w-6 h-6 text-green-700" data-lucide="check-circle"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Clean execution</h3>
<p className="text-gray-600 leading-relaxed">
                        On-time, on-budget, spotless site after work. We respect your property and schedule like it's our own.
                    </p>
</div>

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors">
<i className="w-6 h-6 text-yellow-600" data-lucide="calculator"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Fair pricing</h3>
<p className="text-gray-600 leading-relaxed">
                        Detailed estimates. No hidden fees. You'll know exactly what you're paying for before we start work.
                    </p>
</div>

<div className="group p-8 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-200">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
<i className="w-6 h-6 text-red-700" data-lucide="hard-hat"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Safety first</h3>
<p className="text-gray-600 leading-relaxed">
                        Insured crew. Certified safety protocols. We protect our team and your property on every project.
                    </p>
</div>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Our services
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Complete roofing solutions for residential and commercial properties across western Ukraine.
                </p>
</div>
<div className="space-y-8">

<div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
<div className="grid md:grid-cols-2 gap-0">
<div className="h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&amp'}}></div>
<div className="p-8 lg:p-10">
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Roof installation</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                                Complete new roof systems built to last decades in Ukraine's climate.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Clay tile, metal, bitumen, and membrane systems</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Energy-efficient insulation and ventilation</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Traditional Lviv architecture respect</span>
</li>
</ul>
<a className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors" href="#contact">
                                Request pricing
                                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
<div className="grid md:grid-cols-2 gap-0">
<div className="h-64 md:h-auto bg-cover bg-center md:order-2" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&amp'}}></div>
<div className="p-8 lg:p-10 md:order-1">
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Repair and maintenance</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                                Keep your roof performing at its best with expert repairs and preventive care.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Leak detection and waterproofing fixes</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Flashing repair and insulation upgrades</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Seasonal inspections and cleaning</span>
</li>
</ul>
<a className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors" href="#contact">
                                Request pricing
                                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
<div className="grid md:grid-cols-2 gap-0">
<div className="h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&amp'}}></div>
<div className="p-8 lg:p-10">
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Custom solutions</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                                Specialized features that enhance function, comfort, and your home's character.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Dormers, skylights, and roof windows</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Ventilation systems and snow guards</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Custom gutters and drainage solutions</span>
</li>
</ul>
<a className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors" href="#contact">
                                Request pricing
                                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
<div className="grid md:grid-cols-2 gap-0">
<div className="h-64 md:h-auto bg-cover bg-center md:order-2" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&amp'}}></div>
<div className="p-8 lg:p-10 md:order-1">
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Residential and commercial</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                                Tailored packages for homes, apartments, small businesses, and developers.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Single-family homes and townhouses</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Multi-unit residential buildings</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" data-lucide="check"></i>
<span className="text-gray-700">Shops, offices, and small warehouses</span>
</li>
</ul>
<a className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors" href="#contact">
                                Request pricing
                                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Featured projects
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Real roofs we've built for homeowners and businesses across Lviv and western Ukraine.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Clay tile installation</div>
<div className="text-white font-semibold mb-2">Historic home, Sychiv district</div>
<div className="text-gray-300 text-sm">Traditional red clay tiles, full insulation upgrade</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Metal roof system</div>
<div className="text-white font-semibold mb-2">Modern residence, Sykhiv</div>
<div className="text-gray-300 text-sm">Standing seam metal, custom ventilation</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Complete restoration</div>
<div className="text-white font-semibold mb-2">Townhouse, Old Town</div>
<div className="text-gray-300 text-sm">Period-appropriate tiles, structural repair</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Commercial project</div>
<div className="text-white font-semibold mb-2">Office building, Frankivskyi</div>
<div className="text-gray-300 text-sm">Bitumen membrane, skylights, drainage</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Dormer installation</div>
<div className="text-white font-semibold mb-2">Family home, Zamarstyniv</div>
<div className="text-gray-300 text-sm">Attic conversion with custom dormers</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] cursor-pointer">
<img alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-yellow-400 text-sm font-semibold mb-1">Emergency repair</div>
<div className="text-white font-semibold mb-2">Apartment complex, Lychakiv</div>
<div className="text-gray-300 text-sm">Storm damage repair, waterproofing</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-8 lg:p-12 mb-12">
<h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Before &amp; after transformations</h3>
<div className="grid md:grid-cols-2 gap-8">
<div>
<div className="relative overflow-hidden rounded-lg mb-3">
<img alt="Before" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">BEFORE</div>
</div>
<p className="text-sm text-gray-600">Damaged clay tiles, poor insulation</p>
</div>
<div>
<div className="relative overflow-hidden rounded-lg mb-3">
<img alt="After" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">AFTER</div>
</div>
<p className="text-sm text-gray-600">Complete renovation with modern materials</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors" href="#contact">
                    View full portfolio
                    <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Craft rooted in Lviv.<br/>Pride in Ukraine.
                    </h2>
<div className="space-y-4 text-gray-600 leading-relaxed mb-8">
<p>
                            We started as a small team of craftsmen who learned roofing from Lviv's master builders. Over ten years, we've grown into a trusted name across western Ukraine, but we've never lost our commitment to quality work and honest dealing.
                        </p>
<p>
                            Every crew member is trained in safety, modern techniques, and traditional methods. We partner with local suppliers who share our standards. We believe a roof is more than shelter—it's a promise that stands between your family and the elements.
                        </p>
<p>
                            Our clients become neighbors. We take care of their homes the way we'd care for our own. That's the Lviv way, and it's how we'll always work.
                        </p>
</div>

<div className="flex flex-wrap gap-4 mb-8">
<div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
<i className="w-5 h-5 text-blue-900" data-lucide="shield"></i>
<span className="text-sm font-medium text-gray-900">Licensed</span>
</div>
<div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
<i className="w-5 h-5 text-blue-900" data-lucide="check-circle"></i>
<span className="text-sm font-medium text-gray-900">Insured</span>
</div>
<div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
<i className="w-5 h-5 text-blue-900" data-lucide="award"></i>
<span className="text-sm font-medium text-gray-900">Certified installers</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Team" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=400&amp;q=80"/>
<img alt="Work" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&amp;q=80"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Craftsmanship" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&amp;q=80"/>
<img alt="City" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    What our clients say
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Real feedback from homeowners and property managers across Lviv region.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

<div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Mykola P.</div>
<div className="text-sm text-gray-500">Lychakiv district</div>
</div>
</div>
<div className="flex mb-4">
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed">
                        Professional team, clean work, fair price. They replaced our old clay tiles and the roof looks beautiful. Finished exactly on schedule.
                    </p>
</div>

<div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Oksana M.</div>
<div className="text-sm text-gray-500">Sykhiv</div>
</div>
</div>
<div className="flex mb-4">
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed">
                        They fixed a persistent leak that two other companies couldn't solve. Thorough inspection, clear explanation, lasting repair. Highly recommend.
                    </p>
</div>

<div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Andriy K.</div>
<div className="text-sm text-gray-500">Frankivskyi district</div>
</div>
</div>
<div className="flex mb-4">
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed">
                        Excellent communication from quote to completion. They respected our property, cleaned up thoroughly, and the metal roof looks perfect. True craftsmen.
                    </p>
</div>

<div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Iryna S.</div>
<div className="text-sm text-gray-500">Old Town</div>
</div>
</div>
<div className="flex mb-4">
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed">
                        Historic building restoration requires special care. They matched the original tiles perfectly and worked carefully around heritage details. Impressive work.
                    </p>
</div>

<div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full object-cover mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;q=80"/>
<div>
<div className="font-semibold text-gray-900">Taras V.</div>
<div className="text-sm text-gray-500">Zamarstyniv</div>
</div>
</div>
<div className="flex mb-4">
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-700 leading-relaxed">
                        Transparent pricing with no surprises. They added dormers to our attic and the quality exceeded expectations. Worth every hryvnia.
                    </p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors" href="#contact">
                    Read more reviews
                    <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<div className="embroidery-border"></div>

<section className="py-20 lg:py-28 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    Get your free quote
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Tell us about your project. We'll schedule an inspection and send you a detailed estimate within 48 hours.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-100">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Your name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all" placeholder="Ivan Petrenko" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all" placeholder="+380 XX XXX XX XX" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Email (optional)</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Property address</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all" placeholder="Street, district, Lviv" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Service needed</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all appearance-none bg-white">
<option>New roof installation</option>
<option>Repair or maintenance</option>
<option>Inspection only</option>
<option>Custom project</option>
<option>Not sure yet</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your project</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none" placeholder="Describe your roof, any issues, timeline, or questions..." rows="4"></textarea>
</div>
<button className="w-full px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all hover:shadow-lg" type="submit">
                            Schedule inspection
                        </button>
<p className="text-xs text-gray-500 text-center">
                            We'll contact you within 24 hours. Your information stays private.
                        </p>
</form>
</div>

<div className="space-y-8">
<div className="bg-white rounded-xl p-8 border border-gray-100">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Contact information</h3>
<div className="space-y-5">
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-blue-900" data-lucide="phone"></i>
</div>
<div>
<div className="text-sm text-gray-500 mb-1">Phone</div>
<a className="text-gray-900 font-semibold hover:text-blue-900 transition-colors" href="tel:+380322000000">+380 32 200 00 00</a>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-blue-900" data-lucide="mail"></i>
</div>
<div>
<div className="text-sm text-gray-500 mb-1">Email</div>
<a className="text-gray-900 font-semibold hover:text-blue-900 transition-colors" href="mailto:info@lvivroof.ua">info@lvivroof.ua</a>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-blue-900" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm text-gray-500 mb-1">Office</div>
<div className="text-gray-900 font-semibold">Lviv, Ukraine</div>
<div className="text-sm text-gray-600 mt-1">We serve all western Ukraine</div>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="w-5 h-5 text-blue-900" data-lucide="clock"></i>
</div>
<div>
<div className="text-sm text-gray-500 mb-1">Working hours</div>
<div className="text-gray-900 font-semibold">Mon–Fri: 8:00–18:00</div>
<div className="text-sm text-gray-600 mt-1">Sat: 9:00–15:00</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-2 border border-gray-100 overflow-hidden">
<div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
<img alt="Lviv" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
<div className="bg-white px-6 py-3 rounded-lg shadow-lg">
<div className="flex items-center">
<i className="w-5 h-5 text-blue-900 mr-2" data-lucide="map-pin"></i>
<span className="font-semibold text-gray-900">Lviv, Ukraine</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<div className="text-xl font-semibold tracking-tight text-white mb-4" style={{letterSpacing: '-0.02em'}}>
                        LVIV<span className="text-yellow-500">ROOF</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed mb-4">
                        Professional roofing solutions built with Lviv craftsmanship and Ukrainian pride.
                    </p>
<div className="flex items-center text-sm">
<span className="text-yellow-500 mr-2">🇺🇦</span>
<span className="text-gray-400">We build with integrity</span>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Roof installation</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Repair &amp; maintenance</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Custom solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Commercial roofing</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About us</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Our projects</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Client reviews</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Get in touch</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors flex items-center" href="tel:+380322000000">
<i className="w-4 h-4 mr-2" data-lucide="phone"></i>
                                +380 32 200 00 00
                            </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center" href="mailto:info@lvivroof.ua">
<i className="w-4 h-4 mr-2" data-lucide="mail"></i>
                                info@lvivroof.ua
                            </a>
</li>
<li className="flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="map-pin"></i>
                            Lviv, Ukraine
                        </li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-800">
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="text-sm text-gray-400">
                        © 2024 LvivRoof. All rights reserved.
                    </div>
<div className="flex items-center space-x-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
