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
      

<div className="bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">Blog</a>
<a className="hover:text-blue-600 transition-colors" href="#">Team</a>
<a className="hover:text-blue-600 transition-colors" href="#">Locations</a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="bg-blue-900 text-white p-1.5 rounded-md">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 uppercase">Navigator</span>
</div>

<div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#">Home</a>
<a className="hover:text-blue-600 transition-colors" href="#">Products</a>
<a className="hover:text-blue-600 transition-colors" href="#">Services</a>
<a className="text-blue-600" href="#">About us</a>
<a className="hover:text-blue-600 transition-colors" href="#">Contact</a>
</div>

<div className="hidden md:flex items-center">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all w-48 focus:w-64" placeholder="Search..." type="text"/>
</div>
</div>

<button className="md:hidden text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="py-24 max-w-4xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<span className="h-px w-8 bg-blue-600"></span>
<span className="text-blue-600 font-medium tracking-wide text-sm uppercase">Our Story</span>
<span className="h-px w-8 bg-blue-600"></span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-10">
            About <span className="text-blue-600">Us</span>
</h1>
<div className="space-y-6 text-lg md:text-xl text-slate-500 leading-relaxed font-light">
<p>
                Navigator Insurance Consultants NV was formally established in July 2020, but its origins date back to the 1990s. The company grew out of the former RKH Specialty Caribbean company and their founders who are doing business in the Caribbean since the early 1990s within several well-known Curacao and Sint-Maarten based companies.
            </p>
<p>
                With clients throughout the Caribbean region for more than 30 years we have an extensive experience in servicing large clients with their specific risks, but also private insurances and international medical health solutions.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 flex items-center justify-center gap-3">
                    Our Journey
                </h2>
</div>

<div className="relative">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center justify-between w-full group">
<div className="md:w-5/12 text-center md:text-right order-2 md:order-1 pt-4 md:pt-0">
<h3 className="text-lg font-medium text-slate-900">Start doing business</h3>
<p className="text-base text-slate-500 mt-1">Founders begin in the Caribbean via <span className="italic">International Insurance Brokers</span>.</p>
</div>
<div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
<div className="w-16 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg ring-4 ring-white">1992</div>
</div>
<div className="md:w-5/12 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between w-full group">
<div className="md:w-5/12 order-2 md:order-1"></div>
<div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
<div className="w-16 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg ring-4 ring-white">2002</div>
</div>
<div className="md:w-5/12 text-center md:text-left order-3 pt-4 md:pt-0">
<h3 className="text-lg font-medium text-slate-900">Launch CIB</h3>
<p className="text-base text-slate-500 mt-1">Caribbean Insurance Brokers (CIB) launches in Sint Maarten &amp; Anguilla.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between w-full group">
<div className="md:w-5/12 text-center md:text-right order-2 md:order-1 pt-4 md:pt-0">
<h3 className="text-lg font-medium text-slate-900">Regional Expansion</h3>
<p className="text-base text-slate-500 mt-1">CIB expands operations to Curaçao &amp; Bonaire.</p>
</div>
<div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
<div className="w-16 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg ring-4 ring-white">2007</div>
</div>
<div className="md:w-5/12 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between w-full group">
<div className="md:w-5/12 order-2 md:order-1"></div>
<div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
<div className="w-16 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg ring-4 ring-white">2019</div>
</div>
<div className="md:w-5/12 text-center md:text-left order-3 pt-4 md:pt-0">
<h3 className="text-lg font-medium text-slate-900">Founding of NIC</h3>
<p className="text-base text-slate-500 mt-1">Navigator Insurance Consultants (NIC) founded in Curaçao &amp; Sint Maarten.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between w-full group">
<div className="md:w-5/12 text-center md:text-right order-2 md:order-1 pt-4 md:pt-0">
<h3 className="text-lg font-medium text-slate-900">Expansion to Suriname</h3>
<p className="text-base text-slate-500 mt-1">Joint venture with Kersten in Suriname → <span className="italic">Kersten Insurance Broker</span>.</p>
</div>
<div className="md:w-2/12 flex justify-center order-1 md:order-2 relative">
<div className="w-16 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg ring-4 ring-white">2024</div>
</div>
<div className="md:w-5/12 order-3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0f172a] py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-center text-center space-y-6">
<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
<img alt="Bram Boeren" className="relative w-32 h-32 rounded-full object-cover border-4 border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<blockquote className="text-xl font-light leading-relaxed max-w-sm">
                        "Unique and high risk exposures require unique risk solutions."
                    </blockquote>
<div>
<div className="font-medium text-lg">Bram Boeren</div>
<div className="text-slate-400 text-sm">Founder</div>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-6 md:border-l md:border-white/10">
<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
<img alt="Jan Hein Braam" className="relative w-32 h-32 rounded-full object-cover border-4 border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<blockquote className="text-xl font-light leading-relaxed max-w-sm">
                        "Client first, that simple."
                    </blockquote>
<div>
<div className="font-medium text-lg">Jan Hein Braam</div>
<div className="text-slate-400 text-sm">Founder</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 sticky top-20 bg-white/90 backdrop-blur z-40">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-2">
                    Our <span className="text-blue-600">Teams</span>
</h2>
<div className="flex flex-wrap justify-center gap-2">
<a className="px-4 py-2 rounded-full text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors" href="#curacao">Curaçao</a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#bonaire">Bonaire</a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#aruba">Aruba</a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#stmaarten">St. Maarten</a>
<a className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors" href="#finance">Finance</a>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6" id="curacao">
<div className="mb-12 border-l-4 border-blue-600 pl-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">Team Curaçao <span className="text-slate-400 font-normal">&amp;</span> Bonaire</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Bram Boeren" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Founder</span>
<h4 className="text-xl font-medium text-slate-900">Bram Boeren</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="mailto:bram@navigator.com">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> bram@navigator.com
                        </a>
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="tel:+59991234567">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> +599 9 511 79 65
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Johannes William" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">General Manager</span>
<h4 className="text-xl font-medium text-slate-900">Johannes William</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> johannes@navigator.com
                        </a>
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> +1 721 554 6921
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Edward van Glabbeek" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Associate Director</span>
<h4 className="text-xl font-medium text-slate-900">Edward van Glabbeek</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> edward@navigator.com
                        </a>
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> +599 9 678 3556
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Jorge Brouwer" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Associate Director Sales</span>
<h4 className="text-xl font-medium text-slate-900">Jorge Brouwer</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> jorge@navigator.com
                        </a>
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> +599 9 511 1555
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="aruba">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 border-l-4 border-blue-600 pl-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">Team Aruba</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm relative">
<img alt="Lex Gottenbos" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Managing Director</span>
<h4 className="text-xl font-medium text-slate-900">Lex Gottenbos</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> lex@navigator.com
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm relative">
<img alt="Gamir Valmar Ruiz" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Senior Account Manager</span>
<h4 className="text-xl font-medium text-slate-900">Gamir Valmar Ruiz</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> gamir@navigator.com
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm relative">
<img alt="Sylvia Jongbloed" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Account Manager</span>
<h4 className="text-xl font-medium text-slate-900">Sylvia Jongbloed</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> sylvia@navigator.com
                            </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-white shadow-sm relative">
<img alt="Dorina Danies" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Commercial Support</span>
<h4 className="text-xl font-medium text-slate-900">Dorina Danies</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> dorina@navigator.com
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6" id="finance">
<div className="mb-12 border-l-4 border-blue-600 pl-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">Finance</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Wouter Driever" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Head of Finance</span>
<h4 className="text-xl font-medium text-slate-900">Wouter Driever</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> wouter@navigator.com
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Tanischa Harms" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Senior Finance Officer</span>
<h4 className="text-xl font-medium text-slate-900">Tanischa Harms</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> tanischa@navigator.com
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 relative">
<img alt="Shary Jantje" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<span className="text-xs font-semibold tracking-wide text-blue-600 uppercase mb-1 block">Finance Officer</span>
<h4 className="text-xl font-medium text-slate-900">Shary Jantje</h4>
<div className="flex flex-col gap-1 mt-3 text-sm text-slate-500">
<a className="hover:text-blue-600 flex items-center gap-2 transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> shary@navigator.com
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-slate-900 text-white overflow-hidden">

<div className="absolute inset-0">
<img alt="Building" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
<div>
<h4 className="font-semibold text-white mb-6">Explore</h4>
<ul className="space-y-4 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">About us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6">Locations</h4>
<ul className="space-y-4 text-slate-400">
<li className="flex flex-col">
<span className="text-white font-medium">Curaçao</span>
<span className="text-xs">+599 9 736 7022</span>
</li>
<li className="flex flex-col">
<span className="text-white font-medium">Bonaire</span>
<span className="text-xs">+599 9 736 7022</span>
</li>
<li className="flex flex-col">
<span className="text-white font-medium">St. Maarten</span>
<span className="text-xs">+1 721 544 0700</span>
</li>
<li className="flex flex-col">
<span className="text-white font-medium">Aruba</span>
<span className="text-xs">+297 583 3844</span>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6">Legal</h4>
<ul className="space-y-4 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
<div className="mt-8">
<span className="text-xs text-slate-500">In co-operation with</span>
<div className="text-2xl font-bold text-red-600 mt-1">AON</div>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:pl-12">
<h3 className="text-3xl font-semibold tracking-tight mb-2">Stay Informed</h3>
<p className="text-slate-400 mb-8 text-base">Subscribe to our newsletter for the latest updates on insurance regulations and company news.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="Enter your email address" type="email"/>
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-colors whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
<div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
<p className="text-xs text-slate-500">© 2024 Navigator Insurance Consultants. All rights reserved.</p>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
