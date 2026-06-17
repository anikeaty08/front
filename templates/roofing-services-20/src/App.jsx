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
colors: {
brand: {
50: '#eff4ff',
100: '#dbe6fe',
400: '#60a5fa',
500: '#324696', /* Matched Original Blue */
600: '#253475',
700: '#1e2b5e',
900: '#111827',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(50, 70, 150, 0.15)',
}
}
}
}



        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const navbar = document.getElementById('navbar');

        function toggleMenu() {
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('py-0');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('py-0');
            }
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
      

<div className="bg-brand-500 text-white py-2.5 hidden lg:block border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium">
<div className="flex items-center gap-6">
<a className="hover:text-brand-100 transition-colors flex items-center gap-2" href="tel:469-344-0020">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span> (469) 344-0020
                </a>
<a className="hover:text-brand-100 transition-colors flex items-center gap-2" href="mailto:asroftx@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span> asroftx@gmail.com
                </a>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> 7601 Circle Dr, Fort Worth, TX 76180</span>
<div className="w-px h-3 bg-white/20"></div>
<div className="flex gap-3">
<a className="hover:text-brand-100 transition-colors" href="https://www.facebook.com/AStarRoofingOfTexas" target="_blank"><span className="iconify" data-icon="lucide:facebook" data-width="14"></span></a>
<a className="hover:text-brand-100 transition-colors" href="https://www.instagram.com/asroftx/" target="_blank"><span className="iconify" data-icon="lucide:instagram" data-width="14"></span></a>
<a className="hover:text-brand-100 transition-colors" href="https://www.youtube.com/@astarroofing" target="_blank"><span className="iconify" data-icon="lucide:youtube" data-width="14"></span></a>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-all duration-300 shadow-sm" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="/">
<div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-zinc-100 shadow-sm">
<img alt="A Star Roofing of Texas" className="h-full w-full object-contain" src="https://astarroofingoftexas.com/wp-content/uploads/2025/09/a-star-roofing-texas-logo-whiteBg.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-zinc-900 font-bold tracking-tight text-xl leading-none uppercase">A Star Roofing</span>
<span className="text-brand-500 text-xs font-semibold tracking-widest uppercase">Of Texas</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-brand-600" href="/">Home</a>
<a className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors" href="/about-us/">About Us</a>
<div className="relative group h-24 flex items-center">
<button className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors flex items-center gap-1">
                        Services <span className="iconify opacity-50" data-icon="lucide:chevron-down" data-width="12"></span>
</button>

<div className="absolute top-full -left-4 w-[280px] bg-white border border-zinc-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4 z-50">
<ul className="space-y-1">
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/roof-inspections/">Roof Inspections</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/storm-damage/">Storm Damage Repair</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/roof-installation/">Roof Installation</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/roof-repairs/">Roof Repairs</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/roof-replacements/">Roof Replacements</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/custom-roofing-solutions/">Custom Roofing Solutions</a></li>
<li className="border-t border-zinc-100 my-1"></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/gutters/">Gutters</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/fences/">Fences</a></li>
<li><a className="block text-sm text-zinc-600 hover:text-brand-600 hover:bg-zinc-50 px-3 py-2 rounded-lg transition-colors" href="/painting/">Painting</a></li>
</ul>
</div>
</div>
<a className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors" href="/faq/">FAQ</a>
<a className="text-sm font-medium text-zinc-600 hover:text-brand-600 transition-colors" href="/blog/">Blog</a>
</div>
<div className="hidden lg:flex items-center gap-4">
<a className="bg-brand-500 text-white hover:bg-brand-600 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2" href="/contact-us/">
                    Free Inspection
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<button className="lg:hidden text-zinc-900 p-2" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="p-6">
<div className="flex justify-between items-center mb-8">
<span className="text-zinc-900 font-bold text-lg">Menu</span>
<button className="text-zinc-500 hover:text-zinc-900 bg-zinc-100 p-2 rounded-full" id="close-menu-btn">
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</button>
</div>
<div className="flex flex-col gap-6 text-lg font-medium">
<a className="text-brand-600" href="/">Home</a>
<a className="text-zinc-800" href="/about-us/">About Us</a>
<div className="space-y-4">
<span className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Services</span>
<div className="pl-4 border-l-2 border-zinc-100 space-y-3">
<a className="block text-zinc-600" href="/roof-inspections/">Roof Inspections</a>
<a className="block text-zinc-600" href="/storm-damage/">Storm Damage Repair</a>
<a className="block text-zinc-600" href="/roof-installation/">Roof Installation</a>
<a className="block text-zinc-600" href="/roof-repairs/">Roof Repairs</a>
<a className="block text-zinc-600" href="/gutters/">Gutters</a>
<a className="block text-zinc-600" href="/fences/">Fences</a>
</div>
</div>
<a className="bg-brand-500 text-white p-4 rounded-xl text-center shadow-lg mt-4" href="/contact-us/">Get Free Inspection</a>
</div>
</div>
</div>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-50" loop="" muted="" playsinline="">
<source src="https://astarroofingoftexas.com/wp-content/uploads/2025/11/22397-530-Horizontal.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-8 fade-in-up">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                Tarrant County Roofer
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1] drop-shadow-sm fade-in-up" style={{animationDelay: '0.1s'}}>
                Top-Rated Expert Roofing <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">In Fort Worth &amp; DFW</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
                Certified Roofers in Fort Worth, Arlington, North Richland Hills, Mansfield, Grand Prairie, Grapevine and surrounding areas. Keeping Your Home Safe &amp; Your Investment Protected.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-900/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wide" href="/contact-us/">
                    Get Free Inspection
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 rounded-lg font-bold hover:bg-zinc-50 transition-all text-sm flex items-center justify-center gap-2 uppercase tracking-wide" href="tel:469-344-0020">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                    (469) 344-0020
                </a>
</div>
</div>
</section>

<section className="py-12 bg-zinc-50 -mt-10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-6 rounded-xl shadow-soft border border-zinc-100 text-center hover:-translate-y-1 transition-transform">
<div className="text-brand-500 mb-3 flex justify-center"><span className="iconify" data-icon="lucide:search" data-width="32"></span></div>
<h3 className="font-bold text-zinc-900 text-sm">Free Roof Inspections</h3>
<p className="text-xs text-zinc-500 mt-1">Detailed &amp; No-Obligation</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-soft border border-zinc-100 text-center hover:-translate-y-1 transition-transform">
<div className="text-brand-500 mb-3 flex justify-center"><span className="iconify" data-icon="lucide:shield-check" data-width="32"></span></div>
<h3 className="font-bold text-zinc-900 text-sm">GAF Certified</h3>
<p className="text-xs text-zinc-500 mt-1">Rated Top 5% Nationwide</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-soft border border-zinc-100 text-center hover:-translate-y-1 transition-transform">
<div className="text-brand-500 mb-3 flex justify-center"><span className="iconify" data-icon="lucide:banknote" data-width="32"></span></div>
<h3 className="font-bold text-zinc-900 text-sm">Deductible Financing</h3>
<p className="text-xs text-zinc-500 mt-1">Available Assistance</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-soft border border-zinc-100 text-center hover:-translate-y-1 transition-transform">
<div className="text-brand-500 mb-3 flex justify-center"><span className="iconify" data-icon="lucide:plane" data-width="32"></span></div>
<h3 className="font-bold text-zinc-900 text-sm">Drone Inspections</h3>
<p className="text-xs text-zinc-500 mt-1">Licensed FAA Pilot</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-200 rounded-full blur-3xl opacity-60"></div>
<img alt="Roofing Job Fort Worth" className="relative z-10 rounded-2xl shadow-xl w-full object-cover" src="https://astarroofingoftexas.com/wp-content/uploads/2025/10/residential-roof-home2.jpg"/>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-zinc-100 text-center z-20 hidden md:block">
<div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
</div>
<div className="text-xs text-zinc-500 font-bold uppercase tracking-wide">5-Star Rated in DFW</div>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wide mb-6">
                        Five-Star Roofing in DFW
                    </div>
<h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">Hire Local Cowtown Roofing Experts</h2>
<div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
<p>
                            A Star Roofing of Texas is a locally owned and operated, top-rated roofing company in Tarrant County, Texas. We believe in building long-lasting relationships through outstanding customer service. We use only top-quality materials to ensure that your roof continues to protect your family or business.
                        </p>
<p>
                            Get peace of mind with A Star Roofing of Texas. Fully licensed, insured, and ready to assist with insurance claims.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h5 className="font-bold text-zinc-900">A-Rating with BBB</h5>
</div>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<div>
<h5 className="font-bold text-zinc-900">Local Referrals Available</h5>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-white bg-zinc-900 hover:bg-brand-600 px-6 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2" href="/contact-us/">
                            Get Free Inspection <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">Complete Exterior Solutions</h3>
<p className="text-zinc-600 leading-relaxed">From comprehensive inspections to full replacements, we handle it all.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Roof Inspections</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">We offer free, certified, no-obligation inspections with a comprehensive review of your roof to proactively address problem areas.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/roof-inspections/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cloud-lightning" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Storm Damage Repair</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">Fast and effective solutions to quickly restore your roof's integrity after severe storms, ensuring your home is safe immediately.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/storm-damage/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Roof Installation</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">Expert roof installation services tailored to your specific needs for new construction projects, using best-in-class materials.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/roof-installation/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:home" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Roof Replacements</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">Our roof replacements are fast, using top-quality materials that stand the test of time. Improve your home's appearance and value.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/roof-replacements/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:wrench" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Roof Repairs</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">We fix damaged or missing shingles and roof leaks, ensuring your home is protected quickly for many years to come.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/roof-repairs/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<h4 className="text-xl font-bold text-zinc-900 mb-3">Custom Roofing Solutions</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">We create custom designs and solutions to meet the specific needs for your home, using only premium GAF roofing materials.</p>
<a className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all" href="/custom-roofing-solutions/">
                        Learn More <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="mt-16 border-t border-zinc-200 pt-10">
<div className="grid md:grid-cols-3 gap-6 text-center">
<a className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 hover:border-brand-200 transition-colors" href="/gutters/">
<h5 className="font-bold text-zinc-900"><span className="iconify inline mr-2 text-brand-500" data-icon="lucide:droplets"></span> Gutters</h5>
</a>
<a className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 hover:border-brand-200 transition-colors" href="/fences/">
<h5 className="font-bold text-zinc-900"><span className="iconify inline mr-2 text-brand-500" data-icon="lucide:fence"></span> Fences</h5>
</a>
<a className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 hover:border-brand-200 transition-colors" href="/painting/">
<h5 className="font-bold text-zinc-900"><span className="iconify inline mr-2 text-brand-500" data-icon="lucide:paint-bucket"></span> Painting</h5>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-bold text-zinc-900 mb-6">Expert Advice You Can Trust</h2>
<p className="text-zinc-600 mb-8 leading-relaxed">
                        Choosing a contractor shouldn't be a gamble. We provide educational content to help you make informed decisions. Watch our guide on "5 Insider Tips" to finding a reputable roofer.
                     </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center justify-center text-center">
<img alt="GAF Certified Roofer" className="h-16 object-contain mb-2 mix-blend-multiply" src="https://astarroofingoftexas.com/wp-content/uploads/2025/11/gaf-certified-roofer.jpg"/>
<span className="text-xs font-semibold text-zinc-900">Rated Top 5% Nationwide</span>
</div>
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center justify-center text-center">
<img alt="Winner Magazine" className="h-16 object-contain mb-2" src="https://astarroofingoftexas.com/wp-content/uploads/2025/11/2025-Winner-Medal-for-James-Lesjak-A-Star-Roofing-of-Texas.png"/>
<span className="text-xs font-semibold text-zinc-900">Award Winning</span>
</div>
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100 flex flex-col items-center justify-center text-center col-span-2 md:col-span-2">
<img alt="2025 BNS Award" className="h-20 object-contain mb-2 mix-blend-multiply" src="https://astarroofingoftexas.com/wp-content/uploads/2025/11/2025-bns-award-a-star-roofing-of-texas-cetificate.jpg"/>
<span className="text-xs font-semibold text-zinc-900">2025 BNS Best Roofing Award</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/lm3w97GZnJk?rel=0" title="5 Insider Tips"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-y border-brand-100" id="reviews">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-3">Testimonials</h2>
<h3 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Rated 5 Stars in Texas</h3>
</div>
<div className="flex gap-2">
<div className="text-sm text-zinc-500 italic">5-Star Ratings on Google, Facebook, and Yelp</div>
</div>
</div>
<div className="flex gap-6 px-6 overflow-x-auto pb-8 no-scrollbar snap-x max-w-7xl mx-auto">

<div className="snap-center shrink-0 w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col">
<div className="flex text-yellow-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-6 leading-relaxed italic flex-grow">"Very pleased with price quote! Did exactly what we wanted! Solved all our problems at a very affordable price! Very professional! Absolutely put our mind at ease! Great product! Very happy with the results... Highly recommend! Give them a call for ALL your roofing needs!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">SJ</div>
<div>
<div className="text-zinc-900 font-bold text-sm">Shawn J.</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col">
<div className="flex text-yellow-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-6 leading-relaxed italic flex-grow">"The quality and detail of the new roof put on my home is undeniable. It looks so smooth and clean. They were right on time and the there was no hidden costs. Thanks to Jimbo and his entire team to the best roofing experience I have ever had."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">JM</div>
<div>
<div className="text-zinc-900 font-bold text-sm">Joey M.</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col">
<div className="flex text-yellow-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-6 leading-relaxed italic flex-grow">"Jimbo is the only person I will call for roof issues... This man is truthful, helpful, affordable, and knowledgeable. And he has his daughter and crew working for him, making sure things get done right. No price gauging, no pressuring into something you don't need."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">JM</div>
<div>
<div className="text-zinc-900 font-bold text-sm">Jennifer M.</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col">
<div className="flex text-yellow-400 mb-4 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-zinc-600 text-sm mb-6 leading-relaxed italic flex-grow">"I highly recommend A Star Roofing of Texas!! I'd called Jim when I found out I had roof damage. We had rain coming and his company got right on it... If ya'll need repairs or a new roof, affordable prices, and true professionalism, you need to call A Star Roofing!!!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">TW</div>
<div>
<div className="text-zinc-900 font-bold text-sm">Terrie W.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-brand-500" id="contact">
<div className="absolute inset-0 bg-brand-900/10"></div>
<div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="text-white">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Contact Your Ft. Worth Area Roofer</h2>
<p className="text-brand-100 text-lg mb-8 max-w-md">Get a free, detailed inspection report. No obligation, just honest answers.</p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span>
</div>
<div>
<div className="text-xs text-brand-200 uppercase tracking-wide">Call Us</div>
<div className="text-xl font-bold"><a href="tel:469-344-0020">(469) 344-0020</a></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<div className="text-xs text-brand-200 uppercase tracking-wide">Location</div>
<div className="text-xl font-bold">7601 Circle Dr, Fort Worth, TX 76180</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
<div>
<div className="text-xs text-brand-200 uppercase tracking-wide">Email</div>
<div className="text-xl font-bold"><a href="mailto:asroftx@gmail.com">asroftx@gmail.com</a></div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-2xl">
<h3 className="text-2xl font-bold text-zinc-900 mb-6">Request Free Inspection</h3>
<form action="https://astarroofingoftexas.com/" className="space-y-4" method="post">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" name="et_pb_contact_name_0" placeholder="Name" type="text"/>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" name="et_pb_contact_phone_0" placeholder="Phone" type="text"/>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" name="et_pb_contact_email_0" placeholder="Email Address" type="email"/>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none" name="et_pb_contact_message_0" placeholder="Message" rows="3"></textarea>
<button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-lg hover:bg-black transition-colors shadow-lg mt-2" type="submit">
                        SEND
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="text-white font-bold text-xl mb-6 flex items-center gap-2 uppercase">
                        A STAR ROOFING
                    </div>
<p className="text-sm leading-relaxed mb-6 text-zinc-500">
                        Top-rated expert roofing in Fort Worth, Arlington, North Richland Hills, Mansfield, Grand Prairie, Grapevine and the Surrounding Areas.
                    </p>
<div className="flex gap-4">
<a className="bg-zinc-800 hover:bg-brand-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all" href="https://www.facebook.com/AStarRoofingOfTexas" target="_blank"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="bg-zinc-800 hover:bg-brand-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all" href="https://www.instagram.com/asroftx/" target="_blank"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="bg-zinc-800 hover:bg-brand-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all" href="https://www.youtube.com/@astarroofing" target="_blank"><span className="iconify" data-icon="lucide:youtube" data-width="18"></span></a>
</div>
<div className="mt-6">
<a href="https://search.google.com/local/writereview?placeid=ChIJOfPA5kAc4qoRb1E14-jSt28" target="_blank">
<img alt="Leave a Google Review" className="w-32 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" src="https://astarroofingoftexas.com/wp-content/uploads/2025/10/GoogleReview-216w.webp"/>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-400 transition-colors" href="/">Home</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/about-us/">About Us</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/faq/">Roofing FAQ</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/contact-us/">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Roofing Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-400 transition-colors" href="/storm-damage/">Storm Damage Repair</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/roof-installation/">Roof Installation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/roof-repairs/">Roof Repairs</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/roof-replacements/">Roof Replacements</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/custom-roofing-solutions/">Custom Roofing Solutions</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/roofing-contractor/">Roofing Contractor</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Other Services &amp; Info</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-brand-400 transition-colors" href="/gutters/">Gutters</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/fences/">Fences</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="/painting/">Painting</a></li>
<li className="border-t border-zinc-800 pt-4 mt-2">
<div className="flex items-start gap-3">
<span className="iconify text-brand-500 mt-0.5" data-icon="lucide:map-pin" data-width="16"></span>
<span>7601 Circle Dr<br/>Fort Worth, TX 76180</span>
</div>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-brand-500" data-icon="lucide:phone" data-width="16"></span>
<a className="hover:text-white transition-colors" href="tel:469-344-0020">(469) 344-0020</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2025 A Star Roofing of Texas. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
