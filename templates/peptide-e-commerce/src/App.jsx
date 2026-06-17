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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-full pl-6 pr-2 py-2 flex items-center justify-between max-w-5xl w-full">

<div className="flex items-center gap-2 mr-8">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold border border-yellow-500">M</div>
<span className="text-sm font-semibold tracking-tight uppercase">MOB Peptides</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full px-1 py-1">
<a className="px-4 py-1.5 text-sm font-medium bg-white shadow-sm rounded-full text-gray-900" href="#">Home</a>
<a className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Shop</a>
<a className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Certificates</a>
<a className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900" href="#">Contact</a>
</div>

<div className="flex items-center gap-3 ml-auto">
<button className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                    Contact us
                </button>
<button className="p-2 text-gray-500 hover:text-gray-900">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
<button className="p-2 text-gray-500 hover:text-gray-900 mr-2">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
</button>
</div>
</div>
</nav>
<main className="pt-24 pb-12 px-4 max-w-[1400px] mx-auto space-y-6">

<section className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden min-h-[600px] flex items-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb073656552?auto=format&amp;fit=crop&amp;q=80')] opacity-5 mix-blend-multiply bg-cover bg-center"></div>
<div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-5 space-y-8">
<div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 backdrop-blur mb-6">
<div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] font-bold">M</div>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                        Welcome to our<br/>Peptides Store!
                    </h1>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                        Shop Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-gray-500 text-sm max-w-sm leading-relaxed border-l-2 border-gray-300 pl-4 mt-12">
                        At MOB peptides, we're dedicated to providing you with high-quality peptides for your research and scientific endeavors. Whether you're a seasoned researcher or an academic institution.
                    </p>
</div>
<div className="lg:col-span-7 relative flex justify-center items-center h-full min-h-[400px]">

<div className="relative w-64 md:w-80">
<img alt="Peptide Bottle" className="w-full h-auto drop-shadow-2xl rounded-xl mix-blend-multiply filter contrast-125" src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute top-1/2 -right-4 md:-right-12 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[180px] transform -translate-y-1/2">
<div className="flex items-center gap-3 mb-2">
<i className="w-6 h-6 text-gray-400 stroke-[1.5]" data-lucide="microscope"></i>
<span className="text-xl">🇺🇸</span>
</div>
<p className="text-lg font-medium tracking-tight leading-snug">Tested in the United States</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-20 text-gray-900">
                    The Number One Online<br/>Resource For Peptides
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-4 h-full">
<div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] relative">
<img alt="Scientist" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-4 h-full justify-center">
<div className="bg-yellow-300 p-6 rounded-2xl flex items-center">
<p className="text-lg font-medium tracking-tight text-gray-900">Sourcing the purest peptides</p>
</div>
<div className="bg-blue-600 p-6 rounded-2xl flex items-center shadow-lg shadow-blue-900/10">
<p className="text-lg font-medium tracking-tight text-white">Unmatched customer service</p>
</div>
<div className="bg-gray-900 p-6 rounded-2xl flex items-center">
<p className="text-lg font-medium tracking-tight text-white">VIP list eligibility</p>
</div>
</div>

<div className="lg:col-span-5 pl-0 lg:pl-8 flex flex-col justify-center">
<h3 className="text-3xl font-semibold tracking-tight mb-4">We take pride</h3>
<p className="text-gray-500 text-lg leading-relaxed mb-8">
                            in being the purveyor of exceptional research products. Our repertoire includes the finest premium peptides across the US. All of our available peptides undergo independent testing to ensure authenticity and purity.
                        </p>
<div>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-md flex items-center gap-2">
                                Shop Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 bg-transparent">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-gray-900 stroke-[1.5]" data-lucide="clipboard-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Quality Assurance</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Our peptides undergo strict quality control to ensure purity, potency, and consistency, meeting industry standards.
                    </p>
</div>

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-gray-900 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Expert Guidance</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Our experienced team is dedicated to providing expert guidance and support for all your needs.
                    </p>
</div>

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-gray-900 stroke-[1.5]" data-lucide="truck"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Fast Shipping</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        We offer fast and reliable shipping options to ensure your peptides reach you promptly and securely.
                    </p>
</div>

<div className="bg-gray-50 p-8 rounded-3xl">
<div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-gray-900 stroke-[1.5]" data-lucide="badge-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Certified Products</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Our peptides are certified to meet industry standards and regulations, ensuring the highest quality.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Featured Products</h2>
<p className="text-gray-500 text-sm">Shop with confidence and unlock the potential of peptides for your research.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
<div className="absolute top-6 left-6 z-10">
<span className="bg-yellow-300 text-xs font-semibold px-2.5 py-1 rounded-md">-3% OFF</span>
</div>
<div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
<button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors">
<i className="w-3.5 h-3.5" data-lucide="shopping-bag"></i>
</button>
</div>
<div className="aspect-square flex items-center justify-center mb-6 bg-gray-50 rounded-2xl">
<img alt="Retatrutide" className="h-40 object-contain mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1">Retatrutide</h3>
<p className="text-gray-500 text-xs font-medium">$224.99 - $1,999.99</p>
</div>

<div className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
<div className="aspect-square flex items-center justify-center mb-6 bg-gray-50 rounded-2xl">
<img alt="Semaglutide" className="h-40 object-contain mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1">Semaglutide</h3>
<p className="text-gray-500 text-xs font-medium">$74.99 - $1,499.99</p>
</div>

<div className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
<div className="aspect-square flex items-center justify-center mb-6 bg-gray-50 rounded-2xl">
<img alt="Tirzepatide" className="h-40 object-contain mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1">Tirzepatide</h3>
<p className="text-gray-500 text-xs font-medium">$129.99 - $2,499.99</p>
</div>

<div className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
<div className="aspect-square flex items-center justify-center mb-6 bg-gray-50 rounded-2xl">
<img alt="Semaglutide" className="h-40 object-contain mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1">Semaglutide</h3>
<p className="text-gray-500 text-xs font-medium">$74.99 - $1,499.99</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-6">FAQ</h2>
<p className="text-gray-500 text-sm mb-8">Still need help? Reach out to customer support!</p>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xs font-medium transition-all shadow-md flex items-center gap-2 mb-12">
                        Contact us <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
<div className="rounded-3xl overflow-hidden h-64 w-full relative">
<img alt="Vials" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>

<div className="lg:col-span-7 space-y-3">

<div className="group">
<button className="w-full flex items-center justify-between p-6 bg-gray-100 rounded-t-2xl text-left">
<span className="text-lg font-medium tracking-tight text-gray-900">Are the peptides in a powder form?</span>
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</span>
</button>
<div className="px-6 pb-6 bg-gray-100 rounded-b-2xl">
<p className="text-gray-600 text-sm leading-relaxed">Yes, all peptides are in powder form and must be reconstituted with bacteriostatic water.</p>
</div>
</div>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900 w-10/12">Do you provide instructions on how to store and reconstitute research products?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900">When do you ship?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900">How do I know that your products are high quality?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900">The product I ordered is on backorder. When will it ship?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900">How should I store these products?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>

<button className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl text-left transition-colors">
<span className="text-lg font-medium tracking-tight text-gray-900 w-10/12">If the vial says 10mg does that mean there are 4 doses of 10mg in the vial?</span>
<span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down"></i>
</span>
</button>
</div>
</div>
</section>

<section className="py-24 px-4 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                        Subscribe to<br/>our newsletter
                    </h2>
</div>
<div className="flex flex-col md:flex-row items-start md:items-end gap-6">
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        "Stay up-to-date with the latest news, promotions, and exclusive offers! Subscribe to our newsletter now."
                    </p>
<div className="relative w-full max-w-sm">
<input className="w-full h-12 pl-4 pr-32 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors text-sm" placeholder="Email" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-yellow-300 hover:bg-yellow-400 text-gray-900 text-xs font-semibold px-4 rounded-md transition-colors">
                            Subscribe
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-950 text-white rounded-t-[3rem] pt-20 pb-12 px-4 mt-12 mx-4 mb-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 text-xs font-bold border border-yellow-500">M</div>
<span className="text-sm font-semibold tracking-tight uppercase">MOB Peptides</span>
</div>
<div className="space-y-1 text-xs text-gray-400 font-light">
<p>209 20th St N #95. SMBA 46833</p>
<p>Birmingham, AL 35203</p>
<p>251-290-5329</p>
<a className="underline hover:text-white" href="#">info@mobpeptides.com</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium mb-6">Menu</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shop</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sertificate</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Login</a></li>
<li><a className="hover:text-white transition-colors" href="#">Register</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium mb-6">Operational</h4>
<ul className="space-y-3 text-xs text-gray-400 mb-6">
<li>Every day: 9:00 - 22:00</li>
<li>Sat - Sun: 8:00 - 21:00</li>
</ul>
<h5 className="text-sm font-medium mb-2">You need a consult?</h5>
<p className="text-xs text-gray-400">+ (123) 1800-567-8990</p>
</div>
</div>
<div className="border-t border-gray-800 pt-8 text-center md:text-left">
<p className="text-[10px] text-gray-500">Copyright © MOB Peptides. All Rights Reserved. | Usman A.</p>
</div>
</div>
</footer>


    </>
  );
}
