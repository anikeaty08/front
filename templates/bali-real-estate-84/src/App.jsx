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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
stone: {
850: '#1c1917',
}
},
backgroundImage: {
'hero-gradient': 'linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
}
}
}
}



    lucide.createIcons();
  


    // Initialize EmailJS with your Public Key
  emailjs.init("iJFxDgenAwdjSXWjH"); // replace with your actual EmailJS public key

  document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault(); // stop page reload
  
  emailjs.sendForm("service_xggw38a", "template_7pg0pn4", this)
  .then(() => {
  alert("Message sent! We will contact you soon.");
  this.reset(); // clear the form
  }, (err) => {
  alert("Failed to send. Please try again later.");
  console.error(err);
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
      

<div className="sm:p-4 lg:p-6 max-w-[1600px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2">

<div className="z-20 flex flex-col h-full relative">



<header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl">

<img alt="Hero - Jestaber At Your Service" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[20s] hover:scale-105 ease-linear" src="https://img-l.ink/img/1CnMfxVjb5dvh-OHFFUgCekga0zNzvFJd.jpeg"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>


<nav className="flex sm:px-10 z-20 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between" style={{paddingTop: 'max(1.5rem, env(safe-area-inset-top))'}}>

<div className="flex items-center gap-2">
<div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/10">
<i className="w-6 h-6 text-white" data-lucide="building-2"></i>
</div>
<span className="text-lg font-medium text-white tracking-tight">Jestaber</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2">
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#about">About</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#units">Services</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#video">Why
            Us</a>
<a className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">Contact
            Us</a>
</div>

<button className="md:hidden text-white bg-white/10 rounded-full pt-2 pr-2 pb-2 pl-2 backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20" onclick="document.getElementById('mobile-menu-panel').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="hidden absolute top-full left-0 right-0 mt-2 mx-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden overflow-hidden transition-all duration-300 z-50 animate-in slide-in-from-top-2 fade-in" id="mobile-menu-panel">
<div className="flex flex-col p-2 space-y-1">
<a className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors" href="#about" onclick="document.getElementById('mobile-menu-panel').classList.add('hidden')">About</a>
<a className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors" href="#units" onclick="document.getElementById('mobile-menu-panel').classList.add('hidden')">Services</a>
<a className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors" href="#video" onclick="document.getElementById('mobile-menu-panel').classList.add('hidden')">Why
              Us</a>
<a className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors" href="#contact" onclick="document.getElementById('mobile-menu-panel').classList.add('hidden')">Contact
              Us</a>
</div>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center justify-center hover:bg-white/20 transition-all text-white bg-white/10 w-10 h-10 border-white/10 border rounded-full backdrop-blur-md" href="https://www.instagram.com/jestabernyc/">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="flex items-center justify-center hover:bg-white/20 transition-all text-white bg-white/10 w-10 h-10 border-white/10 border rounded-full backdrop-blur-md" href="/#contact">
<i className="w-4 h-4" data-lucide="phone"></i>
</a>
<a className="group flex items-center gap-3 transition-transform hover:scale-105 bg-white rounded-full pt-1.5 pr-1.5 pb-1.5 pl-5" href="/#contact">
<span className="text-sm font-medium text-stone-900">Contact Us</span>
<span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
</div>
</nav>

<div className="sm:p-10 z-10 flex flex-col md:flex-row gap-8 w-full pt-6 pr-6 pb-12 pl-6 absolute bottom-0 left-0 gap-x-8 gap-y-8 items-end justify-between">

<div className="fade-in-up max-w-2xl" style={{animationDelay: '0.1s'}}>
<span className="inline-block uppercase text-xs font-medium text-white tracking-wider bg-white/20 border-white/10 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">
        Jestaber at your service
      </span>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Real
            Estate Made Simple with Complete Property Solutions.</h1>
<p className="leading-relaxed text-lg font-light text-white/80 max-w-lg mb-8">
            We offer advisory, sales, investments, rental, management, development – tailored for you
          </p>
<a className="group inline-flex items-center gap-4 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 text-stone-900 bg-white rounded-full pt-2 pr-2 pb-2 pl-6" href="#contact">
<span className="text-base font-medium">Contact Us</span>
<span className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="arrow-right"></i>
</span>
</a>
</div>
<div className="flex flex-col md:w-auto fade-in-up w-full gap-x-4 gap-y-4" style={{animationDelay: '0.3s'}}>

<div className="md:w-72 hover:bg-black/35 transition-colors bg-black/25 w-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex mb-2 items-start justify-between">
<span className="text-3xl font-semibold text-white tracking-tight">100%</span>
<svg aria-hidden="true" className="lucide lucide-smile-plus text-slate-50 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="smile-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
</div>
<p className="text-sm text-white/70 leading-relaxed">Client dedication. Personalized service through every stage.</p>
</div>

<div className="md:w-72 hover:bg-black/55 transition-colors bg-black/45 w-full border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<div className="flex mb-2 items-start justify-between">
<span className="text-3xl font-semibold text-white tracking-tight">360°</span>
<svg aria-hidden="true" className="lucide lucide-circle-check-big text-slate-50 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="circle-check-big" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<p className="text-sm text-white/70 leading-relaxed">Real estate solutions covering acquisition, management, growth.</p>
</div>
</div>
</div>
</header>

<section className="sm:px-6 mt-24 pr-4 pl-4" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">ALL-IN-ONE Real Estate
            Solutions</h2>
<p className="leading-relaxed text-lg font-light text-stone-500 mb-8">A full-service real estate firm where
            rentals, sales, investments, and property value enhancement are integrated into one streamlined client
            experience.</p>
<p className="leading-relaxed text-base text-stone-500 mb-8">With 20 years of New York market expertise, we
            guide residential and commercial clients with strategic execution, delivering confident decisions,
            stronger asset performance, and lasting partnerships built on honesty, integrity, ingenuity, and client
            care.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3 group">
<span className="flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors bg-stone-100 w-8 h-8 rounded-full">
<i className="w-4 h-4" data-lucide="building"></i>
</span>
<span className="text-sm font-medium text-stone-800">Find Investment</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="info"></i>
</span>
<span className="text-sm font-medium text-stone-800">Advisory</span>
</div>
<div className="flex items-center gap-3 group">
<span className="flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors bg-stone-100 w-8 h-8 rounded-full">
<i className="w-4 h-4" data-lucide="house-plus"></i>
</span>
<span className="text-sm font-medium text-stone-800">Sell Property</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="chart-line"></i>
</span>
<span className="text-sm font-medium text-stone-800">Raise Value</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="brick-wall"></i>
</span>
<span className="text-sm font-medium text-stone-800">Develop Property</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="notebook-pen"></i>
</span>
<span className="text-sm font-medium text-stone-800">Management</span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
<img alt="ALL-IN-ONE Real Estate Solutions" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://img-l.ink/img/1Qi7-Phw4j_UjeYvcHMVwPtd1iu_5_CuB.jpeg"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block">
<span className="uppercase text-xs font-semibold text-stone-500 tracking-wider">TOTAL REALTY SOLUTIONS</span>
<p className="font-medium text-stone-900">Confident decisions with tailored strategies</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-stone-900 rounded-[2rem] mt-24 relative gap-x-12 gap-y-12">
<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12">
<img alt="Tailored Solutions Fit For You" className="w-full h-full object-cover" src="https://img-l.ink/img/1qr-lWRP7asX50duOyAr1-bhX4khZ1kEu.jpeg"/>
</div>
<div className="bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12"></div>
<div className="sm:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12">
<div className="">
<span className="uppercase block cursor-pointer text-sm font-medium text-stone-400 tracking-wide mb-2" role="button">Jestaber</span>
<h2 className="cursor-pointer text-4xl font-medium tracking-tight mb-6" onclick="window.location.href='/Prime Location'" role="button">Tailored Solutions Fit — For
      You</h2>
<p className="leading-relaxed text-lg font-light text-stone-300 mb-8">Our experienced team supports every stage
      of your real estate journey. Combining strategic guidance, trusted expertise, and full-service solutions
      to help you buy, sell, invest, manage, and grow your property with confidence.</p>
<div className="space-y-4 mb-8">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="flex bg-white/5 w-10 h-10 border-white/20 border rounded-full items-center justify-center">
<span className="text-sm font-bold"></span>
<svg aria-hidden="true" className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-stone-300">Buy &amp; Sell Representation</span>
</div>
<div className="flex items-center gap-4">
<div className="flex bg-white/5 w-10 h-10 border-white/20 border rounded-full items-center justify-center">
<span className="text-sm font-bold"></span>
<div className="flex bg-white/5 w-10 h-10 border-white/20 border rounded-full items-center justify-center">
<span className="text-sm font-bold"></span>
<svg aria-hidden="true" className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<span className="text-stone-300">Property Search &amp; Negotiation</span>
</div>
<div className="flex items-center gap-4">
<div className="flex bg-white/5 w-10 h-10 border-white/20 border rounded-full items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-stone-300">Portfolio Growth Strategies</span>
</div>
</div>
<div className="bg-white/10 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<i className="w-6 h-6 text-emerald-400 mb-3" data-lucide="trending-up"></i>
<p className="text-sm text-stone-200">From tenant management and rent collection to renovations and new
        developments, our team delivers complete planning, building, and management solutions designed to
        increase value and simplify ownership.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 mt-24 pr-4 pl-4" id="units">
<div className="flex flex-col md:flex-row mb-12 items-end justify-between">
<div className="max-w-xl">
<h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">Our Services</h2>
<p className="font-light text-stone-500">Integrated real estate services from property search to portfolio
            growth, management, renovations, and development. Tailored for flexible strategies.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 transition-opacity mt-4 md:mt-0" href="#contact">
          Get full catalog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Consultation" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://img-l.ink/img/1cQ90RPzWrdtXA9PzMK5V73PfBrJG0U3E.jpeg"/>
<div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">
              expert advice</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Consultation</h3>
<p className="text-sm text-stone-500 mb-4">Our experienced team is ready to handle all your questions.</p>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex cursor-pointer gap-x-2 gap-y-2 items-center justify-center font-medium text-stone-900 w-full border-stone-200 border rounded-xl pt-3 pb-3" href="#contact" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); return false;">
              Learn More
              <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>

<div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-3xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Rental &amp; MGMT" className="group-hover:scale-105 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://img-l.ink/img/1gt3E2zf6mPqdkUq12fbV6yu4MzVPr26n.jpeg"/>
<div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">
              lease &amp; manage</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Rental &amp; MGMT</h3>
<p className="text-sm text-stone-500 mb-4">We manage your property, find tenants, and saving you time.</p>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex cursor-pointer font-medium text-stone-900 w-full border-stone-200 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" href="#contact" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); return false;">
              Learn More
              <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Development" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://img-l.ink/img/1emrE5xic6kjYYrT4RWsQxHFcqmCZW527.jpeg"/>
<div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">
              improvement</div>
</div>
<div className="pr-4 pb-6 pl-4">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Development</h3>
<p className="text-sm text-stone-500 mb-4">Helping you realize your vision for property and investments.</p>
<a className="hover:bg-stone-900 hover:text-white transition-colors flex cursor-pointer font-medium text-stone-900 w-full border-stone-200 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" href="#contact" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); return false;">
              Learn More
              <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="mt-24">
<div className="sm:p-12 lg:p-20 flex flex-col overflow-hidden text-center bg-stone-100 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative items-center">

<div className="filter -translate-x-1/2 -translate-y-1/2 bg-blue-200 opacity-20 mix-blend-multiply w-64 h-64 rounded-full absolute top-0 left-0 blur-3xl">
</div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2">
</div>
<div className="z-10 max-w-2xl relative">
<span className="uppercase block text-xs font-medium text-stone-500 tracking-wider mb-4">Exclusive Service</span>
<h2 className="sm:text-5xl text-3xl font-medium text-stone-900 tracking-tight mb-6">Turn Your Real Estate Vision
            Into Reality</h2>
<p className="text-lg font-light text-stone-600 mb-8">Experience complete real estate support with our expert
            team,
            offering guidance, full-service solutions, and strategies to help you buy, sell, invest, manage, and grow
            property efficiently.</p>
<a className="inline-flex items-center gap-3 hover:bg-stone-800 transition-all hover:scale-105 shadow-stone-900/10 text-white bg-stone-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#contact">
<span className="">Contact Us Today To Learn More</span>
<svg aria-hidden="true" className="lucide lucide-message-square w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="message-square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
<p className="text-sm text-stone-400 mt-6">We’re excited to support you in reaching your real estate goals.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 sm:px-6 mt-24 pr-4 pl-4 gap-x-8 gap-y-8 items-center" id="video">

<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
<img alt="Why Clients Choose Jesraber Real Estate" className="group-hover:scale-105 transition-transform duration-500 opacity-60 w-full h-full object-cover" src="https://img-l.ink/img/1s7er2bl4ORSSI-_r5HhOad7NiHfyrJh-.jpeg"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>

<div className="">
<h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">Why Clients Choose Jesraber
          Real Estate</h2>
<div className="prose prose-stone mb-8">
<p className="leading-relaxed text-lg font-light text-stone-500">We offer refined real estate solutions with
            strategic advisory and seamless execution, helping clients build, manage, and grow valuable property
            portfolios with confidence.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Skilled representation &amp; negotiation expertise</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Smart investment and portfolio strategies</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Transparent process with trusted advisors</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">End-to-end property and management support</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="text-xl font-medium italic text-stone-900">“We focus on building value, trust, and lasting client
            success.”</p>
</div>
</div>
</section>

<section className="mt-24 mb-12" id="contact">
<div className="sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:gap-24 bg-white border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-xl gap-x-12 gap-y-12">
<div className="lg:w-1/2">
<h2 className="sm:text-5xl text-4xl font-medium text-stone-900 tracking-tight mb-6">Contact Us</h2>
<p className="text-lg font-light text-stone-500 max-w-md mb-10">Our team supports every step of your real estate
            journey,
            helping you secure properties that build value, create opportunity, and strengthen your long-term
            investment
            goals.
          </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div className="">
<span className="block text-sm text-stone-400">Email</span>
<a className="hover:underline text-lg font-medium text-stone-900" href="mailto:info@jestaber.com">
                  info@jestaber.com
                </a>
</div>
</div>
<div className="flex gap-4 group gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="">
<span className="block text-sm text-stone-400">Address</span>
<a className="hover:underline text-lg font-medium text-stone-900" href="https://www.google.com/maps/place/3-11+St+Nicholas+Ave,+Ridgewood,+NY+11385/@40.7013743,-73.9106761,16z/data=!3m1!4b1!4m6!3m5!1s0x89c25c21943afb25:0x5487b69642a998d0!8m2!3d40.7013743!4d-73.9106761!16s%2Fg%2F11bw3_n569?entry=ttu&amp;g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
                  311 St. Nicholas Ave. Ridgewood NY 11385
                </a>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-stone-50 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<form className="space-y-5" id="contact-form">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">First Name</label>
<input className="placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow text-stone-900 bg-white w-full border-0 rounded-xl pt-3 pr-4 pb-3 pl-4" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<button className="hover:bg-stone-800 transition-colors flex group font-medium text-white bg-stone-900 w-full rounded-xl mt-4 pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" type="submit">
      Contact Us Today
      <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="flex flex-col md:flex-row border-stone-200 border-t pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-stone-900 p-1.5 rounded border border-stone-800">
<i className="w-5 h-5 text-white" data-lucide="building-2"></i>
</div>
<span className="font-semibold text-stone-900 tracking-tight">Jestaber</span>
</div>
<div className="flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="/#units">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#video">Why Us</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact Us</a>
</div>
<div className="text-xs text-stone-400">© 2026 Jestaber LLC.</div>
</footer>
<footer className="flex flex-col md:flex-row border-stone-200 border-t pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">

</div>
<div className="flex gap-4 text-stone-500 flex-col text-center">
<p className="text-[0.59rem] font-inter text-stone-500 leading-6">
          CORPORATE RESPONSIBILITY, PRIVACY &amp; LEGAL NOTICES: JESTABER IS A LICENSED REAL ESTATE BROKER, LICENSED
          TO DO BUSINESS AS JESTABER LLC IN NEW YORK STATE LICENSE #
          <span style={{fontFamily: 'system-ui, sans-serif', fontWeight: '900', color: 'black'}}>10991230428</span>.<br/>
            ALL INFORMATION CONTAINED IN THIS WEB SITE IS DEEMED RELIABLE BUT NOT GUARANTEED. ALL PROPERTIES ARE SUBJECT
            TO PRIOR SALE, CHANGE OR WITHDRAWAL NOTICE. JESTABER BELIEVES ALL INFORMATION TO BE CORRECT BUT ASSUMES NO
            LEGAL RESPONSIBILITY FOR ACCURACY.<br/>
<span className="" style={{fontFamily: 'system-ui, sans-serif', fontWeight: '900', color: 'black'}}>NO FINANCIAL OR LEGAL ADVICE PROVIDED. EQUAL HOUSING OPPORTUNITY.</span>
</p>
<div className="text-[0.59rem] font-inter leading-6 flex flex-col gap-1">
<a className="underline text-black hover:font-bold" href="https://dos.ny.gov/system/files/documents/2025/03/nys-housing-and-anti-discrimination-notice_02.2025.pdf" rel="noopener noreferrer" target="_blank">
            NEW YORK FAIR HOUSING NOTICE
          </a>
<a className="hover:underline text-black" href="https://drive.google.com/file/d/1Y_AdEULoCmnvhA143GbAopDz3X1F-TRO/view?usp=sharing" rel="noopener noreferrer" target="_blank">
            NEW YORK STATE STANDARD OPERATING PROCEDURES
          </a>
</div>
</div>
</footer>
</div>




</div>
    </>
  );
}
