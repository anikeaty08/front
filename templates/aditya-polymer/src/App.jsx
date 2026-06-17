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
display: ['Open Sans', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
},
blue: {
50: '#eff6ff',
100: '#dbeafe',
500: '#0555BD',
600: '#0447a0',
700: '#1d4ed8',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.025em',
},
animation: {
'slide-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
'fade-in': 'fadeIn 1s ease-in-out forwards',
},
keyframes: {
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



      // Simple Vanilla JS for Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu() {
          mobileMenu.classList.toggle('hidden');
          mobileMenu.classList.toggle('flex');
          iconOpen.classList.toggle('hidden');
          iconOpen.classList.toggle('block');
          iconClose.classList.toggle('hidden');
          iconClose.classList.toggle('block');
          document.body.classList.toggle('overflow-hidden');
      }

      menuBtn.addEventListener('click', toggleMenu);

      mobileLinks.forEach(link => {
          link.addEventListener('click', toggleMenu);
      });
    


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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-white/80 border-gray-100" x-data="{ open: false }">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group z-50 relative" href="#">
<i className="w-6 h-6 text-blue-500" data-lucide="box" strokeWidth="1.5"></i>
<span className="font-display font-semibold text-lg tracking-tighter uppercase text-gray-900">
            Aditya Polymers
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-blue-500 transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-blue-500 transition-colors" href="/#capabilities">
            Capabilities
          </a>
<a className="hover:text-blue-500 transition-colors" href="/#about-us">
            About US
          </a>
</div>
<div className="hidden md:flex items-center gap-4">

<a className="relative group inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md overflow-hidden bg-[#0555BD] shadow-sm hover:shadow-md transition-all text-white" href="#contact">

<span className="absolute inset-0 bg-[linear-gradient(120deg,#0555BD_8.76%,#5FCAC1_45.93%,#45BE9E_94.67%)] transition-opacity duration-500 ease-out group-hover:opacity-0"></span>

<span className="relative z-10">
              Request Quote
            </span>
</a>
</div>

<button className="md:hidden relative z-50 p-2 hover:text-blue-500 focus:outline-none text-gray-600" id="mobile-menu-btn">
<i className="w-6 h-6 block" data-lucide="menu" id="menu-icon-open" strokeWidth="1.5"></i>
<i className="w-6 h-6 hidden" data-lucide="x" id="menu-icon-close" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden fixed inset-0 z-40 pt-20 px-6 md:hidden flex-col gap-6 h-screen bg-white" id="mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium text-gray-600">
<a className="mobile-link py-2 border-b hover:text-blue-500 border-gray-100" href="#products">
            Products
          </a>
<a className="mobile-link py-2 border-b hover:text-blue-500 border-gray-100" href="#capabilities">
            Capabilities
          </a>
<a className="mobile-link py-2 border-b hover:text-blue-500 border-gray-100" href="#company">
            Company
          </a>
<a className="mobile-link mt-4 inline-flex w-full items-center justify-center px-4 py-3 text-base font-medium bg-[#0555BD] rounded-md shadow-sm text-white" href="#contact">
            Request Quote
          </a>
</div>
</div>
</nav>


<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-28 pb-16 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

<div className="space-y-6 lg:space-y-8 animate-slide-up opacity-0 text-center lg:text-left" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-blue-500 text-xs font-medium uppercase tracking-wide bg-blue-50 border-blue-100">
            ISO 9001:2015 Certified
          </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.1] text-4xl font-semibold tracking-tight font-display text-gray-900">
            Precision Polymer
            <br/>
<span className="text-gray-400">
              Manufacturing Solutions
            </span>
</h1>
<p className="sm:text-lg lg:mx-0 leading-relaxed text-base font-light max-w-lg mr-auto ml-auto text-gray-600">
            Scalable, high-quality plastic and polymer packaging for Pharma,
            FMCG, and Industrial sectors. We transform raw materials into
            market-ready precision components.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">

<a className="relative group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md overflow-hidden bg-[#0555BD] shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-white" href="#products">

<span className="absolute inset-0 bg-[linear-gradient(120deg,#0555BD_8.76%,#5FCAC1_45.93%,#45BE9E_94.67%)] transition-opacity duration-500 ease-out group-hover:opacity-0"></span>

<span className="relative z-10 flex items-center gap-2">
                View Products
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-md transition-all shadow-sm w-full sm:w-auto text-gray-700 bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300" href="#">
<i className="w-4 h-4 mr-2" data-lucide="download" strokeWidth="1.5"></i>
              Download Catalogue
            </a>
</div>
</div>

<div className="relative h-64 sm:h-[400px] lg:h-full min-h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border animate-slide-up opacity-0 order-first lg:order-last bg-gray-100 border-gray-100" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 bg-gradient-to-br flex items-center justify-center from-gray-100 to-gray-200">
<img alt="Industrial Manufacturing" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-sm p-4 sm:p-5 rounded-lg border shadow-lg bg-white/95 border-gray-100">
<div className="flex items-start justify-between">
<div className="">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Production Capacity
                </p>
<p className="text-lg sm:text-xl font-display font-semibold mt-1 text-gray-900">
                  2M+ Units / Month
                </p>
</div>
<i className="w-6 h-6 text-blue-500" data-lucide="activity" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
<div className="text-center md:text-left space-y-1">
<p className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-gray-900">
              25+
            </p>
<p className="text-sm text-gray-500 font-medium">
              Years Experience
            </p>
</div>
<div className="text-center md:text-left space-y-1">
<p className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-gray-900">
              500+
            </p>
<p className="text-sm text-gray-500 font-medium">
              B2B Clients
            </p>
</div>
<div className="text-center md:text-left space-y-1">
<p className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-gray-900">
              100%
            </p>
<p className="text-sm text-gray-500 font-medium">
              On-Time Delivery
            </p>
</div>
<div className="text-center md:text-left space-y-1">
<p className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-gray-900">
              Zero
            </p>
<p className="text-sm text-gray-500 font-medium">
              Defect Tolerance
            </p>
</div>
</div>
</div>
</section>
<section className="py-16 sm:py-24 bg-gray-50" id="capabilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="max-w-2xl mb-12 sm:mb-16">
<h2 className="font-display font-semibold text-3xl lg:text-4xl tracking-tight mb-4 text-gray-900">
            Why Industry Leaders Trust Us
          </h2>
<p className="text-gray-600">
            We combine advanced moulding technology with rigorous quality
            control to deliver polymer solutions that drive your business
            forward.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="factory" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              In-House Manufacturing
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Complete control over the production line ensures consistency,
              speed, and cost-efficiency for all orders.
            </p>
</div>

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              Quality-Tested Materials
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              We use only premium, compliant polymers. rigorous batch testing
              ensures safety for Pharma &amp; FMCG use.
            </p>
</div>

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              Bulk Scalability
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              From pilot runs to mass production of millions of units, our
              infrastructure scales with your demand.
            </p>
</div>

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="drafting-compass" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              Custom Moulding
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Tailored designs to meet specific packaging requirements,
              including custom shapes, necks, and closures.
            </p>
</div>

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              On-Time Delivery
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Optimized logistics and inventory management ensure your supply
              chain never faces downtime.
            </p>
</div>

<div className="p-6 sm:p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-500 mb-6 bg-blue-50">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-semibold text-lg mb-2 text-gray-900">
              Sustainable Options
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Offering recyclable materials and eco-friendly manufacturing
              processes to support your sustainability goals.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t bg-white border-gray-200" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
<div className="">
<h2 className="font-display font-semibold text-3xl lg:text-4xl tracking-tight mb-3 text-gray-900">
              Product Categories
            </h2>
<p className="max-w-xl text-gray-600">
              Explore our diverse range of high-quality polymer packaging
              solutions designed for durability and precision.
            </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Rub &amp; Inhaler Containers
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="tablets" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Churan &amp; Tablet Containers
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Oil, Shampoo &amp; Lotion
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="flask-conical" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              PET Bottles
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="circle-dot" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Caps &amp; Closures
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="spray-can" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Talcum Powder Bottles
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="cylinder" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Cream Jars
            </h3>
</a>

<a className="group block rounded-xl p-4 sm:p-6 border hover:shadow-md transition-all bg-gray-50 border-gray-100 hover:border-blue-300" href="#">
<div className="aspect-square rounded-lg mb-4 flex items-center justify-center border bg-white border-gray-100">
<i className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" data-lucide="beaker" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors text-gray-900">
              Petroleum Jelly Containers
            </h3>
</a>
</div>
</div>
</section>

<section className="sm:py-16 border-t pt-12 pb-12 bg-gray-50 border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
<p className="text-xs font-semibold uppercase tracking-widest mb-6 sm:mb-8 text-gray-400">
          Trusted by industry leaders in Pharma &amp; FMCG
        </p>
<div className="group relative flex w-full flex-nowrap overflow-hidden py-4 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<style>
            @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: scroll 40s linear infinite;
            }
          </style>

<div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 pr-12">
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PHARMA<span className="text-blue-500">CORP</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              MEDI<span className="font-light">CARE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PURE<span className="text-blue-500">LIFE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PACK<span className="font-light">TECH</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              BIO<span className="text-blue-500">GEN</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PHARMA<span className="text-blue-500">CORP</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              MEDI<span className="font-light">CARE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PURE<span className="text-blue-500">LIFE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PACK<span className="font-light">TECH</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              BIO<span className="text-blue-500">GEN</span>
</span>
</div>

<div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12 pr-12">
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PHARMA<span className="text-blue-500">CORP</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              MEDI<span className="font-light">CARE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PURE<span className="text-blue-500">LIFE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PACK<span className="font-light">TECH</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              BIO<span className="text-blue-500">GEN</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PHARMA<span className="text-blue-500">CORP</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              MEDI<span className="font-light">CARE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PURE<span className="text-blue-500">LIFE</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              PACK<span className="font-light">TECH</span>
</span>
<span className="font-display font-semibold text-xl tracking-tighter text-gray-800">
              BIO<span className="text-blue-500">GEN</span>
</span>
</div>
</div>
</div>
</section>

<section className="sm:py-32 overflow-hidden pt-24 pb-24 relative bg-gray-900" id="contact">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Industrial background" className="opacity-25 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e05fc312-9fcd-45f7-8496-21b8d66aa093_3840w.webp"/>
<div className="bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 text-white">
          Ready to scale your packaging?
        </h2>
<p className="text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed text-gray-300">
          Get a custom quote for your bulk polymer requirements. Our engineering
          team usually responds within 24 hours.
        </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">

<button className="relative group w-full sm:w-auto px-8 py-3.5 font-semibold rounded-lg overflow-hidden bg-[#0555BD] shadow-lg hover:shadow-blue-500/25 transition-all text-sm flex items-center justify-center text-white" type="button">

<span className="absolute inset-0 bg-[linear-gradient(120deg,#0555BD_8.76%,#5FCAC1_45.93%,#45BE9E_94.67%)] transition-opacity duration-500 ease-out group-hover:opacity-0"></span>

<span className="relative z-10 flex items-center justify-center gap-2">
              Request Quote
              <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
</section>

<footer className="bg-white border-gray-200 border-t pt-16 pb-8">
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-5">
<a className="flex items-center gap-2" href="#">
<i className="w-5 h-5 text-blue-500" data-lucide="box" strokeWidth="1.5"></i>
<span className="font-display font-semibold text-sm tracking-tighter uppercase text-gray-900">
                ADITYA POLYMERS
              </span>
</a>
<p className="text-sm text-gray-500 leading-relaxed">
              Leading B2B manufacturer of high-quality polymer and plastic packaging solutions for global industries.
            </p>
<div className="flex gap-4 pt-1">
<a className="hover:text-blue-500 transition-colors text-gray-400" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="hover:text-blue-500 transition-colors text-gray-400" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="">
<h4 className="font-semibold text-sm mb-5 text-gray-900">
              Company
            </h4>
<ul className="space-y-4 text-sm text-gray-500">
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#capabilities">
                  Capabilities
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Infrastructure
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-semibold text-sm mb-5 text-gray-900">
              Products
            </h4>
<ul className="text-sm text-gray-500 space-y-4">
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Rub &amp; Inhaler Containers
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Churan &amp; Tablet Containers
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Oil, Shampoo &amp; Lotion Bottles
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  PET Bottles
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Caps &amp; Closures
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Talcum Powder Bottles
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Cream Jars
                </a>
</li>
<li>
<a className="hover:text-blue-500 transition-colors" href="#">
                  Petroleum Jelly Containers
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-semibold text-sm mb-5 text-gray-900">
              Contact
            </h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>
                  Industrial Area, Phase II, New Delhi, India
                </span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span>
                  +91 98765 43210
                </span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span>
                  sales@adityapolymers.com
                </span>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-gray-200">
<p className="text-sm text-center md:text-left text-gray-400">
            © 2024 Aditya Polymers. All rights reserved.
          </p>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-blue-500 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-blue-500 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
