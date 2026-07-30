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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 w-full z-50 bg-stone-900/95 backdrop-blur-md text-stone-50 transition-all duration-300 border-b border-stone-800">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="flex-shrink-0 group" href="#">
<img alt="4Safe Logo" className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300" src="http://4safeonline.com/wp-content/uploads/2023/03/image6.webp" />
</a>
<nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
<a className="text-[#f6931e] transition-colors hover:text-[#e0861b]" href="#">INICIO</a>
<a className="text-stone-300 transition-colors hover:text-stone-50" href="#services">4SAFE 3D SCAN</a>
<a className="text-stone-300 transition-colors hover:text-stone-50" href="#">PRESS</a>
<div className="w-px h-4 bg-stone-700 mx-2"></div>
<button className="text-stone-300 transition-colors hover:text-stone-50 flex items-center gap-1 group">
<iconify-icon className="text-lg group-hover:rotate-180 transition-transform duration-500" icon="solar:global-linear"></iconify-icon>
                    ENG/ESP
                </button>
</nav>
<div className="flex-shrink-0 hidden md:block">
<a className="inline-flex items-center justify-center bg-[#f6931e] hover:bg-[#e0861b] text-stone-50 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f6931e]/20 hover:-translate-y-0.5" href="#contact">
                    REQUEST A QUOTE
                </a>
</div>

<button className="md:hidden text-stone-300 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<main className="relative w-full min-h-screen flex items-center justify-center bg-stone-900 pt-20 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://4safeonline.com/wp-content/uploads/2025/11/4Safe-principal-bg.webp')] bg-cover bg-center opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/50 to-stone-900"></div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-[#f6931e] animate-pulse"></span>
<span className="text-xs text-stone-300 uppercase tracking-widest font-light">Natural Disaster Prevention</span>
</div>
<h1 className="text-stone-50 text-5xl md:text-7xl font-medium tracking-tight mb-6 max-w-4xl leading-[1.1]">
                YOUR SAFETY <span className="text-[#f6931e]">HUB</span>
</h1>
<h2 className="text-stone-300 text-lg md:text-2xl font-light tracking-tight max-w-2xl mb-8">
                FOR ALL ABOUT SECURITY & NATURAL DISASTER PREVENTION
            </h2>
<p className="text-stone-400 text-sm md:text-base font-light max-w-2xl leading-relaxed mb-12">
                We provide emergency preparedness and disaster relief products, Flood Barrier Solutions, satellite Phones, Emergency Meals, Uniforms and Tactical Gear for safety and security for all industries.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-[#f6931e] hover:bg-[#e0861b] text-stone-50 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#f6931e]/20 group" href="#contact">
                    Request a quote
                    <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-stone-600 hover:border-stone-400 hover:bg-stone-800 text-stone-300 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300" href="#services">
                    Servicios
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs text-stone-400 uppercase tracking-widest font-light">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</div>
</main>

<section className="py-32 w-full bg-stone-50 relative">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
<div className="max-w-4xl text-center flex flex-col items-center mb-20">
<h3 className="text-xs uppercase tracking-widest text-[#f6931e] font-medium mb-4">About Us</h3>
<p className="text-xl md:text-3xl font-light tracking-tight text-stone-900 leading-snug mb-8">
                    We are a <span className="font-medium">Certified Minority Owned Business</span>. We serve and work with: Government Entities, Small Businesses, Private and Public sectors, Homeowner Associations, Public & Private Schools, Hospitals, Fire Fighters, Natural Disaster Agencies, Constructions and local community and emergency response units.
                </p>
<p className="text-sm md:text-base text-stone-500 font-light max-w-3xl leading-relaxed">
                    We are a team of professionals, highly trained and firmly committed to our institutional values, through the development and implementation of quality solutions and services that contribute to a BETTER and SAFER life.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">

<div className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-orange-50 text-[#f6931e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-stone-400 uppercase tracking-widest mb-1">4 Safe</span>
<h4 className="text-base font-medium text-stone-800">Earthquakes</h4>
<span className="text-xs text-stone-400">Terremotos</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f6931e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-stone-400 uppercase tracking-widest mb-1">4 Safe</span>
<h4 className="text-base font-medium text-stone-800">Fires</h4>
<span className="text-xs text-stone-400">Incendios</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-stone-400 uppercase tracking-widest mb-1">4 Safe</span>
<h4 className="text-base font-medium text-stone-800">Hurricanes</h4>
<span className="text-xs text-stone-400">Huracanes</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs text-stone-400 uppercase tracking-widest mb-1">4 Safe</span>
<h4 className="text-base font-medium text-stone-800">Floods</h4>
<span className="text-xs text-stone-400">Inundaciones</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>
</section>

<section className="py-32 w-full bg-stone-100" id="services">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="mb-16">
<h3 className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">Our Solutions</h3>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 uppercase">SERVICES</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[auto]">

<div className="lg:col-span-2 bg-stone-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[360px] flex flex-col justify-between">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f6931e]/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#f6931e]/20 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col items-start gap-6">
<div className="bg-stone-800/50 backdrop-blur-sm p-3 rounded-xl border border-stone-700 text-[#f6931e]">
<iconify-icon className="text-3xl" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-2">Reality Capture</h4>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50 uppercase mb-4">SMART CITY PROJECTS</h3>
<p className="text-sm font-light text-stone-400 mb-6">Smart structure reality capture.</p>
<p className="text-sm md:text-base text-stone-300 font-light leading-relaxed max-w-xl">
                                SMART CITY DIGITIZATION, STRUCTURES 3D SCANNING, SEWER MAPPING DOCUMENTATION, SOIL STUDIES, DAMAGES and EVACUATION ROUTES.<br />
<span className="text-[#f6931e] font-medium mt-2 block">ASSESSMENT WITH CLOUD OF POINTS GENERATION.</span>
</p>
</div>
</div>
<div className="relative z-10 mt-8">
<a className="inline-flex items-center gap-2 text-sm text-[#f6931e] font-medium hover:text-[#e0861b] transition-colors" href="#">
                            Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-1 bg-[#f6931e] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 min-h-[360px] flex flex-col justify-between">

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-start gap-6">
<div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
<iconify-icon className="text-3xl" icon="solar:shield-water-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/80 font-medium mb-2">FLOOD PREVENTION SOLUTIONS</h4>
<h3 className="text-2xl font-medium tracking-tight text-white uppercase mb-4">STYMIE</h3>
<p className="text-sm text-white/90 font-light leading-relaxed">
                                Creating innovative solutions with super absorbent products to protect homes and businesses in a simple way with the most important resource in a flood. The water.
                            </p>
</div>
</div>
<div className="relative z-10 mt-8">
<a className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-white/80 transition-colors" href="#">
                            Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-3 bg-white border border-stone-200 rounded-[2rem] p-8 md:p-12 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-10 items-center justify-between overflow-hidden relative">
<div className="flex-1 relative z-10">
<div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600 w-fit mb-6">
<iconify-icon className="text-3xl" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-2">SAFETY AND SECURITY</h4>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 uppercase mb-2">RCU Systems & Development</h3>
<p className="text-sm font-medium text-[#f6931e] mb-6">Technology & Security</p>
<p className="text-sm md:text-base text-stone-500 font-light leading-relaxed max-w-xl">
                            We manufacture ballistic equipment and tactical clothing for different kind of operations and needs.
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-stone-900 font-medium hover:text-[#f6931e] transition-colors mt-8" href="#">
                            Learn more <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="flex-1 w-full relative z-10 bg-stone-50 p-8 rounded-2xl border border-stone-100">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-stone-600 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f6931e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Police type vest.
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f6931e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Ballistic plates.
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f6931e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Commando type coveralls.
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f6931e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Military style boots.
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f6931e] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Commando comisoles.
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 py-32 w-full border-t border-stone-200 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 clip-path-diagonal pointer-events-none hidden md:block" style={{clipPath: `polygon(20% 0, 100% 0, 100% 100%, 0 100%)`}}></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">
<div className="lg:w-5/12 flex flex-col justify-center">
<h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tight text-stone-900 uppercase leading-tight mb-6">CONTACT US:</h2>
<p className="text-base text-stone-500 font-light leading-relaxed max-w-md">
                    Access to more information about our exclusive services and to receive relevant updates and news.
                </p>
<div className="mt-12 flex flex-col gap-6">
<div className="flex items-center gap-4 text-stone-600">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<a className="text-sm font-light hover:text-[#f6931e] transition-colors" href="mailto:contact@4safenow.com">contact@4safenow.com</a>
</div>
<div className="flex items-center gap-4 text-stone-600">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<a className="text-sm font-light hover:text-[#f6931e] transition-colors" href="tel:+19545196807">+1 (954) 519 6807</a>
</div>
</div>
</div>
<div className="lg:w-7/12 w-full">
<div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100">
<form className="flex flex-col gap-8">
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full relative group">
<input className="block w-full px-0 py-3 text-sm text-stone-900 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] peer transition-colors" id="name" placeholder=" " type="text" />
<label className="absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f6931e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6" htmlFor="name">Your name *</label>
</div>
<div className="w-full relative group">
<input className="block w-full px-0 py-3 text-sm text-stone-900 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] peer transition-colors" id="lastname" placeholder=" " type="text" />
<label className="absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f6931e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6" htmlFor="lastname">Last name</label>
</div>
</div>
<div className="w-full relative group">
<input className="block w-full px-0 py-3 text-sm text-stone-900 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] peer transition-colors" id="email" placeholder=" " type="email" />
<label className="absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f6931e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6" htmlFor="email">Your mail *</label>
</div>
<div className="w-full relative group">
<input className="block w-full px-0 py-3 text-sm text-stone-900 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] peer transition-colors" id="phone" placeholder=" " type="tel" />
<label className="absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f6931e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6" htmlFor="phone">Your phone *</label>
</div>
<div className="w-full relative">
<select className="block w-full px-0 py-3 text-sm text-stone-600 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] transition-colors cursor-pointer pr-8">
<option disabled selected value="">Product / Service of interest *</option>
<option>3D Scan</option>
<option>Flood Prevention</option>
<option>Security Systems</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="w-full relative group">
<textarea className="block w-full px-0 py-3 text-sm text-stone-900 bg-transparent border-0 border-b border-stone-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#f6931e] peer transition-colors resize-none" id="message" placeholder=" " rows="1"></textarea>
<label className="absolute text-sm text-stone-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f6931e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6" htmlFor="message">Your message</label>
</div>
<button className="mt-4 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 w-full sm:w-fit self-start shadow-md hover:shadow-lg flex items-center gap-2 group" type="submit">
                            Send message
                            <iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 pt-16 pb-8 w-full border-t border-stone-800">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-400 font-light">
<img alt="4Safe Logo" className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="http://4safeonline.com/wp-content/uploads/2023/03/image6.webp" />
<div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center text-xs tracking-widest uppercase">
<a className="hover:text-[#f6931e] transition-colors" href="mailto:contact@4safenow.com">contact@4safenow.com</a>
<a className="hover:text-[#f6931e] transition-colors" href="tel:+19545196807">+1 (954) 519 6807</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
<p>© 2026 4Safe. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-stone-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
