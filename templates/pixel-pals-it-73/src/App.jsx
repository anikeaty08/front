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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">

<div className="absolute top-[15%] left-[5%] text-blue-500/10 animate-float-slow" style={{animationDelay: '0s'}}>
<i className="w-32 h-32 md:w-48 md:h-48 stroke-[1.5]" data-lucide="wifi"></i>
</div>

<div className="absolute top-[25%] right-[8%] text-red-500/10 animate-float" style={{animationDelay: '2s'}}>
<i className="w-24 h-24 md:w-40 md:h-40 stroke-[1.5]" data-lucide="triangle-alert"></i>
</div>

<div className="absolute bottom-[20%] left-[8%] text-purple-500/10 animate-float-fast" style={{animationDelay: '1s'}}>
<i className="w-40 h-40 md:w-64 md:h-64 stroke-[1.5]" data-lucide="gamepad-2"></i>
</div>

<div className="absolute bottom-[10%] right-[15%] text-green-500/10 animate-float-slow" style={{animationDelay: '3s'}}>
<i className="w-20 h-20 md:w-32 md:h-32 stroke-[1.5]" data-lucide="database"></i>
</div>

<div className="absolute top-[60%] left-[50%] -translate-x-1/2 text-cyan-500/10 animate-float" style={{animationDelay: '4s'}}>
<i className="w-48 h-48 md:w-80 md:h-80 stroke-[1.5]" data-lucide="globe"></i>
</div>

<div className="absolute top-[5%] left-[40%] text-yellow-500/10 animate-float-fast" style={{animationDelay: '1.5s'}}>
<i className="w-16 h-16 md:w-24 md:h-24 stroke-[1.5]" data-lucide="cpu"></i>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<div className="font-pixel text-4xl tracking-tighter flex select-none">
<span className="text-red-500 group-hover:-translate-y-1 transition-transform duration-300">P</span>
<span className="text-yellow-500 group-hover:-translate-y-1 transition-transform delay-75 duration-300">I</span>
<span className="text-green-500 group-hover:-translate-y-1 transition-transform delay-100 duration-300">X</span>
<span className="text-blue-500 group-hover:-translate-y-1 transition-transform delay-150 duration-300">E</span>
<span className="text-purple-500 mr-2 group-hover:-translate-y-1 transition-transform delay-200 duration-300">L</span>
<span className="text-pink-500 group-hover:-translate-y-1 transition-transform delay-300 duration-300">P</span>
<span className="text-orange-500 group-hover:-translate-y-1 transition-transform delay-500 duration-300">A</span>
<span className="text-cyan-500 group-hover:-translate-y-1 transition-transform delay-700 duration-300">L</span>
<span className="text-neutral-900 group-hover:-translate-y-1 transition-transform delay-1000 duration-300">S</span>
</div>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="font-pixel text-xl hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="font-pixel text-xl hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="px-4 py-2 bg-neutral-900 text-white font-pixel text-xl shadow-hard hover:bg-neutral-800 transition-all shadow-hard-hover" href="#contact">
                    Contact Us
                </a>
</div>

<button className="md:hidden p-2 border-2 border-black shadow-hard-sm bg-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden z-10">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 space-y-8">
<div className="inline-block px-3 py-1 bg-yellow-100 border border-yellow-400 rounded-none transform -rotate-1 shadow-sm">
<span className="font-pixel text-yellow-800 text-lg uppercase tracking-wide">Christchurch IT Services</span>
</div>
<h1 className="font-pixel text-6xl lg:text-8xl leading-none tracking-tight text-neutral-900 bg-white/50 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none p-2 lg:p-0 rounded-lg">
                    HAVING TROUBLE<br/>
                    WITH YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500">TECH?</span>
</h1>
<p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-lg bg-white/80 lg:bg-transparent p-2 lg:p-0">
                    Got tech troubles? Pixel Pals is here to help! Whether it's setting up your devices, fixing Wi-Fi issues, or building your dream PC. Affordable, reliable, and sorted today.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="px-8 py-4 bg-yellow-400 border-2 border-black font-pixel text-2xl text-black shadow-hard shadow-hard-hover transition-all duration-200">
                        Let's get you sorted
                    </button>
<button className="px-8 py-4 bg-white border-2 border-black font-pixel text-2xl text-black shadow-hard shadow-hard-hover transition-all duration-200">
                        View Pricing
                    </button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end animate-float">

<div className="absolute top-0 right-10 text-purple-500 font-pixel text-4xl animate-bounce z-20">404</div>
<div className="absolute bottom-10 left-0 text-blue-500 font-pixel text-4xl animate-pulse z-20">?</div>

<div className="relative w-full max-w-md bg-red-500 border-4 border-black rounded-lg p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
<div className="bg-red-500 border-2 border-red-400 h-64 flex flex-col items-center justify-center text-white relative overflow-hidden">

<div className="absolute w-full h-1 bg-white/20 top-10"></div>
<div className="absolute w-full h-1 bg-white/20 top-20"></div>
<div className="absolute w-full h-1 bg-white/20 bottom-10"></div>
<i className="w-20 h-20 mb-4 stroke-[2]" data-lucide="triangle-alert"></i>
<h2 className="font-pixel text-5xl tracking-widest uppercase">Warning</h2>
<p className="font-sans font-medium mt-2 text-red-100">System Malfunction Detected</p>
</div>

<div className="h-12 bg-red-600 flex items-center justify-center">
<div className="w-16 h-2 bg-red-800 rounded-full"></div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-dashed border-neutral-300 rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
</div>
</div>
</section>

<section className="relative py-24 border-t-2 border-neutral-100 bg-white/50 backdrop-blur-sm z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-pixel text-6xl tracking-tight mb-16 text-center">SERVICE_MENU</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="lg:row-span-2 bg-yellow-50 border-2 border-yellow-400 p-8 flex flex-col justify-between items-center text-center shadow-hard-sm hover:shadow-hard transition-shadow group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>
<div className="relative z-10">
<div className="font-pixel text-4xl mb-2 flex justify-center gap-1">
<span className="text-red-500">P</span><span className="text-green-500">A</span><span className="text-blue-500">L</span><span className="text-purple-500">S</span>
</div>
<p className="font-sans text-neutral-500 text-sm font-medium uppercase tracking-wider">Standard Rate</p>
</div>
<div className="py-8 relative z-10">
<span className="font-pixel text-8xl text-neutral-900">$80</span>
<span className="block font-sans text-neutral-500 text-lg">/per hour</span>
</div>
<div className="space-y-2 text-sm text-neutral-600 font-medium relative z-10">
<p>- One hour minimum</p>
<p>- From $20 call out fee</p>
</div>
</div>

<div className="group bg-neutral-100 border-2 border-neutral-200 p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300 bg-white">
<div className="p-4 bg-neutral-500 text-white rounded-none shadow-sm">
<i className="w-8 h-8" data-lucide="laptop"></i>
</div>
<h3 className="font-sans font-medium text-lg leading-tight">Computer Setup &amp; Data Transfer</h3>
</div>

<div className="group bg-red-500 border-2 border-black p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
<div className="p-4 border-2 border-white text-white rounded-none">
<i className="w-8 h-8" data-lucide="smartphone"></i>
</div>
<h3 className="font-pixel text-2xl text-white">Phone Setup</h3>
</div>

<div className="group bg-purple-500 border-2 border-black p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
<div className="p-4 border-2 border-white text-white rounded-none">
<i className="w-8 h-8" data-lucide="gamepad-2"></i>
</div>
<h3 className="font-pixel text-2xl text-white">PC Build / Gaming</h3>
</div>

<div className="group bg-green-500 border-2 border-black p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
<div className="p-4 border-2 border-white text-white rounded-none">
<i className="w-8 h-8" data-lucide="wifi"></i>
</div>
<h3 className="font-pixel text-2xl text-white">Wifi Setup</h3>
</div>

<div className="group bg-blue-500 border-2 border-black p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
<div className="p-4 border-2 border-white text-white rounded-none">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h3 className="font-pixel text-2xl text-white">Home / Workplace</h3>
</div>

<div className="group bg-pink-500 border-2 border-black p-8 flex flex-col items-center justify-center gap-4 text-center shadow-hard-sm hover:shadow-hard hover:-translate-y-1 transition-all duration-300">
<div className="p-4 border-2 border-white text-white rounded-none">
<i className="w-8 h-8" data-lucide="server"></i>
</div>
<h3 className="font-pixel text-2xl text-white">NAS / Server Build</h3>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-neutral-50/90 border-t-2 border-neutral-200 z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<div className="lg:sticky lg:top-32">
<h2 className="font-pixel text-6xl tracking-tight mb-6">ABOUT_US</h2>
<div className="w-20 h-2 bg-neutral-900 mb-6"></div>
<p className="text-xl text-neutral-500 font-medium">Your friendly local IT service business in Christchurch.</p>
</div>
</div>

<div className="lg:col-span-8 space-y-12">
<div className="bg-white p-8 border-2 border-neutral-100 shadow-sm relative overflow-hidden">
<h3 className="font-sans text-2xl font-semibold mb-4 flex items-center gap-3 relative z-10">
<i className="w-6 h-6 text-blue-500" data-lucide="users"></i> Who are we?
                        </h3>
<p className="text-lg text-neutral-600 leading-relaxed relative z-10">
                            Welcome to Pixel Pals! We're dedicated to providing reliable and affordable tech solutions for everyone. Whether it's setting up a computer, building a custom PC, troubleshooting tech issues, or optimizing your Wi-Fi, we've got you covered.
                        </p>
</div>
<div className="bg-white p-8 border-2 border-neutral-100 shadow-sm relative overflow-hidden">
<h3 className="font-sans text-2xl font-semibold mb-4 flex items-center gap-3 relative z-10">
<i className="w-6 h-6 text-red-500" data-lucide="book-open"></i> Our Story
                        </h3>
<p className="text-lg text-neutral-600 leading-relaxed relative z-10">
                            Pixel Pals was born out of a shared passion for technology. We're a team of two: a Computer Science graduate from the University of Canterbury and a tech geek with a deep love for gadgets. We started this journey to make IT services accessible to everyone—without the hefty price tag.
                        </p>
</div>
<div className="bg-white p-8 border-2 border-neutral-100 shadow-sm relative overflow-hidden">
<h3 className="font-sans text-2xl font-semibold mb-4 flex items-center gap-3 relative z-10">
<i className="w-6 h-6 text-green-500" data-lucide="target"></i> Our Mission &amp; Values
                        </h3>
<p className="text-lg text-neutral-600 leading-relaxed mb-6 relative z-10">
                            We believe in making technology easy, affordable, and accessible for all. Our mission is to help people navigate the tech world with ease, offering practical solutions that fit your budget.
                        </p>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-3">
<div className="w-2 h-2 mt-2.5 bg-neutral-900 flex-shrink-0"></div>
<span className="text-lg text-neutral-600"><strong className="text-neutral-900 font-semibold">Affordability:</strong> We're committed to offering services that won't break the bank.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 mt-2.5 bg-neutral-900 flex-shrink-0"></div>
<span className="text-lg text-neutral-600"><strong className="text-neutral-900 font-semibold">Reliability:</strong> You can count on us to deliver honest, quality work.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-2 h-2 mt-2.5 bg-neutral-900 flex-shrink-0"></div>
<span className="text-lg text-neutral-600"><strong className="text-neutral-900 font-semibold">Transparency:</strong> No hidden fees or confusing jargon—just clear communication.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 z-10" id="contact">
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-pixel text-5xl lg:text-7xl tracking-tight mb-12 bg-white/50 backdrop-blur-sm p-4 rounded-xl inline-block">Let's schedule you in?</h2>
<div className="flex flex-col gap-6 max-w-sm mx-auto">

<a className="group relative w-full" href="tel:036679039">
<div className="absolute inset-0 bg-red-800 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative bg-red-500 border-2 border-black p-4 flex items-center justify-center gap-3 text-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
<i className="w-6 h-6 fill-current" data-lucide="phone"></i>
<span className="font-sans font-semibold text-lg">Give us a call</span>
</div>
</a>

<a className="group relative w-full" href="mailto:enquiries@pixelpals.co.nz">
<div className="absolute inset-0 bg-blue-800 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative bg-blue-500 border-2 border-black p-4 flex items-center justify-center gap-3 text-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
<i className="w-6 h-6 fill-current" data-lucide="mail"></i>
<span className="font-sans font-semibold text-lg">Flick us an email</span>
</div>
</a>

<a className="group relative w-full" href="#">
<div className="absolute inset-0 bg-pink-800 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative bg-pink-500 border-2 border-black p-4 flex items-center justify-center gap-3 text-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
<i className="w-6 h-6" data-lucide="instagram"></i>
<span className="font-sans font-semibold text-lg">DM us on Instagram</span>
</div>
</a>
</div>
</div>
</section>

<footer className="relative z-10 border-t-2 border-black bg-neutral-50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 font-medium">
<div className="flex items-center gap-2 hover:text-red-600 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="phone"></i>
<span className="text-lg">036679039</span>
</div>
<div className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="mail"></i>
<span className="text-lg">enquiries@pixelpals.co.nz</span>
</div>
<div className="flex items-center gap-2 hover:text-pink-600 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="instagram"></i>
<span className="text-lg">pixel_pals_technology</span>
</div>
</div>
<div className="text-center mt-12 text-sm text-neutral-400 font-sans">
            © 2023 Pixel Pals. Christchurch, NZ.
        </div>
</footer>


    </>
  );
}
