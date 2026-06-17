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



        // Simple Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
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
      

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group" href="https://WA.me/918779253734" target="_blank">
<iconify-icon className="animate-pulse" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-sm font-medium">Chat on WhatsApp</span>
</a>

<nav className="fixed w-full z-40 top-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold tracking-tighter text-sm shadow-md shadow-blue-500/30">SG</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Shivam Glass House</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2" href="tel:8779253734">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Call Now
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50" href="#home">Home</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50" href="#about">About</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50" href="#services">Services</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50" href="#gallery">Gallery</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden" id="home">
<div className="bg-center opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da666542-bfa8-493a-af68-db5a713dc548_3840w.jpg)] bg-cover z-0 absolute top-0 right-0 bottom-0 left-0" style={{}}>
<div className="blur-[100px] bg-blue-200/40 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute top-[-10%] right-[-10%]"></div>
<div className="blur-[100px] bg-slate-200/50 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute bottom-[-10%] left-[-10%]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium tracking-wide mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Serving Khagaria, Bihar
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 word-anim">
<span className="">Premium</span> <span className="">Aluminium</span> <span className="">Doors,</span> <br className="hidden sm:block"/> <span className="">Windows</span> <span className="">&amp;</span> <span className="">Glass</span> <span className="">Solutions</span>
</h1>
<p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed bg-gradient-to-br from-black/50 via-black/100 to-black/50 sm:text-xl sm:bg-clip-text sm:text-transparent">
                Custom aluminium fabrication and glass works for modern homes and offices. Trusted by hundreds of local clients in Khagaria for quality and durability.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2" href="https://WA.me/918779253734">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Get Free Quote on WhatsApp
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2" href="tel:8779253734">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Call Now
                </a>
</div>
</div>
</section>

<section className="bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d595b58-cb6d-471e-9b39-d56e0a3f7b12_3840w.jpg)] bg-cover bg-center pt-12 pb-12 relative backdrop-blur-sm">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="card-3d group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-5 text-blue-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Custom Size &amp; Design</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tailored to your exact specifications. We design what fits your space perfectly.</p>
</div>

<div className="card-3d group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-5 text-blue-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Strong &amp; Durable</h3>
<p className="text-sm text-slate-500 leading-relaxed">High-grade aluminium and glass materials that withstand weather and time.</p>
</div>

<div className="card-3d group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-5 text-blue-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Affordable Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Top quality workmanship at local, transparent and competitive market rates.</p>
</div>

<div className="card-3d group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-5 text-blue-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Trusted Local Service</h3>
<p className="text-sm text-slate-500 leading-relaxed">Based in Buddh Nagar, Khagaria. We are your neighbors committed to quality.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-10 lg:mb-0 relative">
<div className="aspect-square overflow-hidden bg-white border-slate-100 border rounded-2xl relative shadow-xl">

<div className="bg-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-400 to-red-600 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0eb2e6d1-3fa8-487a-a6c7-8ff70addab04_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300">
</div>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Owner</p>
<p className="text-slate-900 font-medium">Shailendra Sharma</p>
</div>
</div>
</div>
</div>
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Reliable Glass &amp; Aluminium Works in Khagaria</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        At <span className="text-slate-900 font-semibold">Shivam Glass House</span>, we understand that doors and windows are not just functional parts of a building but essential elements of its beauty and security. 
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        With years of experience serving residential and commercial clients, we specialize in delivering perfect fittings, high-quality material, and designs that elevate your space. Whether it's a simple mirror installation or a complex office partition, we handle every job with precision.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Perfect fitting guarantee</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>High-quality aluminium (Hindalco/Jindal grade)</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Timely project completion</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Our Services</h2>
<p className="text-slate-500 max-w-xl mx-auto">Complete aluminium and glass solutions for your home, shop, or office.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Aluminium Doors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:door-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Aluminium Doors</h3>
<p className="text-sm text-slate-500 leading-relaxed">Strong, waterproof, and stylish aluminium doors for bathrooms, entrances, and commercial shops.</p>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Aluminium Windows" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:window-frame-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Aluminium Windows</h3>
<p className="text-sm text-slate-500 leading-relaxed">Durable sliding and casement windows that offer great ventilation and modern looks.</p>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Sliding Doors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:minimize-square-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Sliding Doors</h3>
<p className="text-sm text-slate-500 leading-relaxed">Space-saving sliding doors with smooth bearings for balconies and partitions.</p>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Glass Partitions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Glass Partitions</h3>
<p className="text-sm text-slate-500 leading-relaxed">Toughened glass partitions for modern offices and showroom displays.</p>
</div>
</div>

<div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Glass &amp; Mirror" className="w-full h-full object-cover group-hover:scale-105 transitiont from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&amp;q=80" style={{}}/></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:mirror-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Glass &amp; Mirror</h3>
<p className="text-sm text-slate-500 leading-relaxed">Plain glass, fancy mirrors, and custom cut glass pieces for furniture and walls.</p>
</div>
</div>

<div className="group bg-white border border-slate-150 hover:border-slate-200 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<img alt="Custom Fabrication" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 bg-white rounded-xl shadow-00 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Custom Fabrication</h3>
<p className="text-sm text-slate-500 leading-relaxed">Any design, any size. We build exactly what you need for your renovation.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Recent Projects</h2>
<p className="text-slate-500">Our real project work delivered to happy customers.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700" href="https://WA.me/918779253734">
                    Request Portfolio
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 bg-zinc-200 rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium">Commercial Office Front</p>
</div>
</div>
<div className="bg-zinc-200 rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-sm font-medium">Sliding Window</p>
</div>
</div>
<div className="bg-zinc-200 rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<iconify-icon icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<p className="text-white text-sm font-medium">Glass Door</p>
</div>
</div>
<div className="col-span-2 bg-zinc-200 rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<p className="text-white font-medium">Shop Partition</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-blue-600 font-medium" href="https://WA.me/918779253734">
                    See More on WhatsApp
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12">Why Khagaria Chooses Us</h2>
<div className="space-y-6 text-left">
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-slate-50 transition-colors">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-slate-900">Unmatched Quality</h4>
<p className="text-slate-500 mt-1">We never compromise on the gauge of aluminium or the quality of glass.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-slate-50 transition-colors">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-slate-900">Transparent Pricing</h4>
<p className="text-slate-500 mt-1">No hidden charges. We provide a detailed estimate before starting work.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-slate-50 transition-colors">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-slate-900">On-Time Delivery</h4>
<p className="text-slate-500 mt-1">We respect your time. Installations are scheduled and completed promptly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">Let's start your project</h2>
<p className="text-slate-400 mb-8 text-lg">Contact us today for a free site visit and quotation. We are happy to help you choose the best design for your home.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">Visit our workshop</p>
<p className="font-medium text-lg">Buddh Nagar, Road No. 14,<br/>Khagaria, Bihar</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">Call us anytime</p>
<a className="font-medium text-lg hover:text-blue-400 transition-colors" href="tel:8779253734">+91 8779253734</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-slate-400 text-sm mb-1">Email</p>
<a className="font-medium text-lg hover:text-blue-400 transition-colors break-all" href="mailto:shailendrasharma9918@gmail.com">shailendrasharma9918@gmail.com</a>
</div>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/20">
<iconify-icon icon="brandico:whatsapp" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Instant Quote?</h3>
<p className="text-slate-400 mb-8">Send us your measurements or photos of the area on WhatsApp.</p>
<a className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors" href="https://WA.me/918779253734">
                        Chat on WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">SG</div>
<span className="font-semibold text-white tracking-tight">Shivam Glass House</span>
</div>
<p className="text-slate-500 text-sm">
                        Professional aluminium and glass services in Khagaria. Dedicated to quality and customer satisfaction.
                    </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Aluminium Doors</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Sliding Windows</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Glass Partitions</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#gallery">Our Work</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>Shailendra Sharma</li>
<li>+91 8779253734</li>
<li>Khagaria, Bihar</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs text-center md:text-left">
                    © 2023 Shivam Glass House. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="https://WA.me/918779253734">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
