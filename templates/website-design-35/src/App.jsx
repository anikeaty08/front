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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page-section');

            // Initialize correct display state
            pages.forEach(page => {
                if (!page.classList.contains('active')) {
                    page.style.display = 'none';
                } else {
                    page.style.display = 'block';
                }
            });

            function navigateTo(targetId) {
                const targetPage = document.getElementById(targetId);
                if (!targetPage) return; // Ignore if section doesn't exist

                // Instantly hide all pages cleanly
                pages.forEach(page => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                });

                // Show target page
                targetPage.style.display = 'block';
                
                // Allow browser repaint so display:block applies before CSS opacity transition triggers
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        targetPage.classList.add('active');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                });
            }

            // Attach click events resilient to inner child clicks
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const targetLink = e.currentTarget;
                    const targetId = targetLink.getAttribute('data-target');
                    if (targetId) {
                        e.preventDefault();
                        navigateTo(targetId);
                    }
                });
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="hidden md:flex items-center gap-3 text-xs font-medium text-gray-400">
<button className="text-gray-900 transition-colors">EN</button>
<button className="hover:text-gray-900 transition-colors">FR</button>
<button className="hover:text-gray-900 transition-colors">AR</button>
</div>

<a className="nav-link flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2" data-target="page-home" href="#">
<div className="bg-blue-600 text-white rounded-md p-1.5 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-xl tracking-tight font-medium">Studio</span>
</a>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6 mr-6 text-sm font-medium text-gray-600">
<a className="nav-link hover:text-gray-900 transition-colors" data-target="page-services" href="#">Services</a>
<a className="nav-link hover:text-gray-900 transition-colors" data-target="page-industries" href="#">Industries</a>
</div>
<button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl text-gray-600" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-24">



<div className="page-section active max-w-7xl mx-auto px-6" id="page-home">

<section className="text-center max-w-4xl mx-auto pt-12 pb-24 flex flex-col items-center">
<h1 className="text-5xl md:text-7xl tracking-tight font-medium text-gray-900 leading-[1.1] mb-8">
                    Websites Designed to Turn <br className="hidden md:block"/>
<span className="font-serif-italic text-blue-600 font-normal">Visitors</span> Into <span className="font-serif-italic text-blue-600 font-normal">Clients</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 font-normal">
                    Modern website design and redesign specifically crafted for service businesses aiming for growth.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-lg shadow-gray-900/20">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                        Book a Free Consultation
                    </button>
<a className="nav-link flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full text-sm font-medium transition-all shadow-sm" data-target="page-services" href="#">
<iconify-icon className="text-base text-gray-500" icon="solar:arrow-right-linear"></iconify-icon>
                        View our work
                    </a>
</div>
</section>

<section className="py-16">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Selected Projects</h2>
<p className="text-xl md:text-2xl tracking-tight font-medium text-gray-900">Websites designed for clarity, trust, and conversion.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="group relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white text-3xl tracking-tight font-medium mb-2">Architecture Sur-Mesure</h3>
<p className="text-gray-300 text-lg">Clean lines, high conversion.</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-stone-900 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-white text-3xl tracking-tight font-medium mb-2">Bloom Skin Consulting</h3>
<p className="text-gray-300 text-lg">Elegance meets functionality.</p>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors">
                        View portfolio <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-gray-900 mb-6">You’re Missing <span className="font-serif-italic text-orange-500 font-normal">Clients</span> Online</h2>
<p className="text-lg md:text-xl text-gray-600 mb-16">Visitors come — but only some businesses turn them into clients. We build websites that answer your <span className="font-serif-italic text-blue-600 font-normal">business goals</span>.</p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
<iconify-icon className="text-2xl text-blue-500 shrink-0 mt-1" icon="solar:chat-line-linear"></iconify-icon>
<div>
<h4 className="font-medium text-gray-900 mb-1">Clear messaging</h4>
<p className="text-sm text-gray-500">Communicate value instantly.</p>
</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
<iconify-icon className="text-2xl text-orange-500 shrink-0 mt-1" icon="solar:mouse-minimalistic-linear"></iconify-icon>
<div>
<h4 className="font-medium text-gray-900 mb-1">Conversion layout</h4>
<p className="text-sm text-gray-500">Guide users to act.</p>
</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
<iconify-icon className="text-2xl text-yellow-500 shrink-0 mt-1" icon="solar:bolt-linear"></iconify-icon>
<div>
<h4 className="font-medium text-gray-900 mb-1">Modern &amp; Fast</h4>
<p className="text-sm text-gray-500">Built for performance.</p>
</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
<iconify-icon className="text-2xl text-purple-500 shrink-0 mt-1" icon="solar:smartphone-linear"></iconify-icon>
<div>
<h4 className="font-medium text-gray-900 mb-1">Mobile-first</h4>
<p className="text-sm text-gray-500">Flawless on every device.</p>
</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4 md:col-span-2">
<iconify-icon className="text-2xl text-green-500 shrink-0 mt-1" icon="solar:magnifer-linear"></iconify-icon>
<div>
<h4 className="font-medium text-gray-900 mb-1">SEO-ready structure</h4>
<p className="text-sm text-gray-500">Foundational setup to help you rank on search engines.</p>
</div>
</div>
</div>
</section>

<section className="py-20 flex flex-col items-center">
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-8">What <span className="font-serif-italic text-blue-600 font-normal">we do</span></h2>
<div className="flex flex-wrap justify-center gap-3 max-w-3xl">
<a className="nav-link bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors" data-target="page-web-design" href="#">
<iconify-icon className="text-base" icon="solar:window-frame-linear"></iconify-icon> Website Design
                    </a>
<a className="nav-link bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-colors" data-target="page-redesign" href="#">
<iconify-icon className="text-base" icon="solar:restart-linear"></iconify-icon> Website Redesign
                    </a>
<div className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:chart-2-linear"></iconify-icon> SEO &amp; Conversion
                    </div>
</div>
<div className="mt-12 text-center">
<a className="nav-link text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors" data-target="page-services" href="#">
                        Explore all services <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-gray-900 mb-4 flex items-center justify-center gap-3">
                        Why <span className="font-serif-italic text-blue-600 font-normal">choose us</span> ? <span className="text-4xl">🤔</span>
</h2>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<iconify-icon className="text-[40px] text-teal-700 mb-8" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-xl tracking-tight font-medium text-gray-900 mb-3">Increase conversions</h3>
<p className="text-gray-500 text-lg leading-relaxed">We design high converting pages that guide customers straight to taking action.</p>
</div>
</div>

<div className="relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<iconify-icon className="text-[40px] text-blue-700 mb-8" icon="solar:crown-linear"></iconify-icon>
<h3 className="text-xl tracking-tight font-medium text-gray-900 mb-3">Stand out instantly</h3>
<p className="text-gray-500 text-lg leading-relaxed">Most websites look the same. We ensure yours makes a memorable impact.</p>
</div>
</div>

<div className="relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute bottom-0 -left-10 w-48 h-48 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<iconify-icon className="text-[40px] text-fuchsia-700 mb-8" icon="solar:puzzles-linear"></iconify-icon>
<h3 className="text-xl tracking-tight font-medium text-gray-900 mb-3">Understand business</h3>
<p className="text-gray-500 text-lg leading-relaxed">We help you communicate what you do and why you're better — in seconds.</p>
</div>
</div>

<div className="relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm group hover:shadow-md transition-shadow">
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full">
<iconify-icon className="text-[40px] text-orange-700 mb-8" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-xl tracking-tight font-medium text-gray-900 mb-3">Lightning-fast</h3>
<p className="text-gray-500 text-lg leading-relaxed">Optimized structures for peak performance and seamless user experience.</p>
</div>
</div>
</div>
</section>

<section className="py-24 grid md:grid-cols-2 gap-16 items-center">
<div className="flex flex-col gap-6">
<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
<div className="w-20 h-20 bg-gray-200 rounded-full shrink-0 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-3xl text-gray-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-medium text-gray-900">Lamiss B.</h4>
<span className="text-xs text-gray-400">Architect</span>
</div>
<p className="text-gray-600 text-lg italic mb-4">"An elegant and fluid site, faithful to my vision. Super experience!"</p>
<div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-3 w-max text-xs font-medium text-gray-600">
<iconify-icon className="text-base" icon="solar:play-circle-linear"></iconify-icon> Play video
                            </div>
</div>
</div>
<div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start ml-0 md:ml-12">
<div className="w-20 h-20 bg-gray-200 rounded-full shrink-0 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-3xl text-gray-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h4 className="font-medium text-gray-900">Nadia S.</h4>
<span className="text-xs text-gray-400">Consultant</span>
</div>
<p className="text-gray-600 text-lg italic mb-4">"Fast, clear, and easy to manage. It simplified my sales."</p>
<div className="flex items-center gap-2 text-gray-400 text-xs">
<iconify-icon className="text-xs" icon="solar:play-linear"></iconify-icon>
<div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-gray-400"></div></div>
<span>1:24</span>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-gray-900 mb-6 leading-tight">
                        Hear it from <span className="font-serif-italic text-blue-600 font-normal">our loyal clients!</span> ✨
                    </h2>
<div className="flex gap-4 mt-8">
<button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors">
<iconify-icon className="text-xl text-gray-600" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
<iconify-icon className="text-xl text-gray-900" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-32 text-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-gray-900 mb-6">
                    Get the website <span className="font-serif-italic text-orange-500 font-normal">your business deserves</span>
</h2>
<p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">Let's talk about what will work best for your business to attract and convert clients.</p>
<div className="flex justify-center gap-4">
<button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-lg shadow-gray-900/20">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
                        Book A Call
                    </button>
</div>
</section>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-services">
<section className="py-20 text-center max-w-3xl mx-auto border-b border-gray-200/50 mb-16">
<h1 className="text-4xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
<span className="font-serif-italic text-blue-600 font-normal">Design &amp; Redesign</span> Services
                </h1>
<p className="text-xl text-gray-600">Websites built to attract and convert clients.</p>
</section>
<div className="grid md:grid-cols-2 gap-8 mb-24">

<div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col group">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[28px] text-blue-600" icon="solar:window-frame-linear"></iconify-icon>
</div>
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">Website Design</h2>
<p className="text-lg text-gray-500 mb-10 flex-grow">Custom-built websites designed from scratch for clarity, trust, and conversion.</p>
<a className="nav-link flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors w-max" data-target="page-web-design" href="#">
                        Learn more <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col group">
<div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[28px] text-orange-600" icon="solar:restart-linear"></iconify-icon>
</div>
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">Website Redesign</h2>
<p className="text-lg text-gray-500 mb-10 flex-grow">Transform outdated, underperforming websites into modern, high-converting platforms.</p>
<a className="nav-link flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors w-max" data-target="page-redesign" href="#">
                        Learn more <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="bg-slate-900 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto mb-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
<div className="relative z-10">
<iconify-icon className="text-[40px] text-blue-400 mx-auto mb-6" icon="solar:chart-2-linear"></iconify-icon>
<h3 className="text-3xl tracking-tight font-medium mb-4">Built for SEO &amp; Conversion</h3>
<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">Every website is structured to be search-friendly and designed to convert visitors naturally.</p>
<button className="bg-white text-slate-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Book a Call</button>
</div>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-web-design">
<div className="py-12 mb-8">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-8 transition-colors" data-target="page-services" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Back to Services
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6 max-w-3xl">
                    Website Design for <span className="font-serif-italic text-blue-600 font-normal">Service Businesses</span>
</h1>
<p className="text-xl text-gray-500 max-w-2xl">Modern, conversion-focused websites designed from the ground up to attract and secure clients.</p>
</div>
<div className="grid md:grid-cols-2 gap-16 py-16 border-t border-gray-200/50">
<div>
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-6">If your business isn’t getting clients online, something is missing.</h2>
<p className="text-lg text-gray-600 mb-8">A beautiful website isn't enough. It needs to clearly articulate your value, build trust instantly, and provide a frictionless path for visitors to contact you.</p>
<h3 className="text-xl font-medium text-gray-900 mb-6 mt-12">What's Included in Design</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-gray-600">
<iconify-icon className="text-xl text-green-500" icon="solar:check-circle-linear"></iconify-icon> Strategy &amp; structure
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-600">
<iconify-icon className="text-xl text-green-500" icon="solar:check-circle-linear"></iconify-icon> Premium Design &amp; UX
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-600">
<iconify-icon className="text-xl text-green-500" icon="solar:check-circle-linear"></iconify-icon> Responsive Development
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-600">
<iconify-icon className="text-xl text-green-500" icon="solar:check-circle-linear"></iconify-icon> SEO foundations setup
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-600">
<iconify-icon className="text-xl text-green-500" icon="solar:check-circle-linear"></iconify-icon> Conversion tracking setup
                        </li>
</ul>
</div>
<div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center border border-gray-100">
<h3 className="text-2xl tracking-tight font-medium text-gray-900 mb-8 text-center">Our Process</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 font-medium text-gray-500">1</div>
<div>
<h4 className="font-medium text-gray-900 text-lg">Discovery</h4>
<p className="text-sm text-gray-500">Understanding your goals and audience.</p>
</div>
</div>
<div className="w-0.5 h-6 bg-gray-200 ml-5"></div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 font-medium text-gray-500">2</div>
<div>
<h4 className="font-medium text-gray-900 text-lg">Strategy</h4>
<p className="text-sm text-gray-500">Structuring flow and messaging.</p>
</div>
</div>
<div className="w-0.5 h-6 bg-gray-200 ml-5"></div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-medium shadow-md shadow-blue-500/20">3</div>
<div>
<h4 className="font-medium text-gray-900 text-lg">Design &amp; Build</h4>
<p className="text-sm text-gray-500">Bringing the vision to life perfectly.</p>
</div>
</div>
<div className="w-0.5 h-6 bg-gray-200 ml-5"></div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 font-medium text-gray-500">4</div>
<div>
<h4 className="font-medium text-gray-900 text-lg">Launch</h4>
<p className="text-sm text-gray-500">Testing, SEO checks, and going live.</p>
</div>
</div>
</div>
</div>
</div>
<div className="text-center py-20">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                    Let’s build a website that works
                </button>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-redesign">
<div className="py-12 mb-8 text-center max-w-4xl mx-auto">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-2 mb-8 transition-colors" data-target="page-services" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Back to Services
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6 leading-tight">
                    Website Redesign That Turns <br/> <span className="font-serif-italic text-orange-500 font-normal">Visitors Into Clients</span>
</h1>
<p className="text-xl text-gray-500">We transform outdated, slow, or confusing websites into modern, high-performing platforms.</p>
</div>
<div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100 mb-20">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">Your Website Is Costing You Clients</h2>
<p className="text-lg text-gray-600 mb-6">Visitors come, look around, get confused by outdated layouts or poor mobile experiences, and leave. A redesign isn't just a fresh coat of paint; it's a structural overhaul to fix leaks in your funnel.</p>
<div className="flex items-center gap-4 mt-8">
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-gray-400 line-through">Outdated</span>
<span className="text-sm font-medium text-gray-400 line-through">Confusing</span>
<span className="text-sm font-medium text-gray-400 line-through">Passive</span>
</div>
<div className="h-16 w-px bg-gray-200 mx-2"></div>
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-gray-900 flex items-center gap-2"><iconify-icon className="text-xs text-orange-500" icon="solar:arrow-right-linear"></iconify-icon> Modern</span>
<span className="text-sm font-medium text-gray-900 flex items-center gap-2"><iconify-icon className="text-xs text-orange-500" icon="solar:arrow-right-linear"></iconify-icon> Clear</span>
<span className="text-sm font-medium text-gray-900 flex items-center gap-2"><iconify-icon className="text-xs text-orange-500" icon="solar:arrow-right-linear"></iconify-icon> Conversion-driven</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 p-6 rounded-2xl">
<iconify-icon className="text-2xl text-gray-700 mb-4" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-medium text-gray-900">Audit</h4>
<p className="text-xs text-gray-500 mt-2">Identify what's failing.</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl">
<iconify-icon className="text-2xl text-gray-700 mb-4" icon="solar:monitor-linear"></iconify-icon>
<h4 className="font-medium text-gray-900">New Structure</h4>
<p className="text-xs text-gray-500 mt-2">Rebuild user flows.</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl">
<iconify-icon className="text-2xl text-gray-700 mb-4" icon="solar:stars-linear"></iconify-icon>
<h4 className="font-medium text-gray-900">Modern Design</h4>
<p className="text-xs text-gray-500 mt-2">Elevate brand trust.</p>
</div>
<div className="bg-gray-50 p-6 rounded-2xl">
<iconify-icon className="text-2xl text-gray-700 mb-4" icon="solar:graph-up-linear"></iconify-icon>
<h4 className="font-medium text-gray-900">Optimization</h4>
<p className="text-xs text-gray-500 mt-2">SEO &amp; speed boosts.</p>
</div>
</div>
</div>
</div>
<div className="text-center pb-20">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                    Let’s redesign your website
                </button>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-industries">
<section className="py-20 text-center max-w-3xl mx-auto border-b border-gray-200/50 mb-16">
<h1 className="text-4xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
                    Designed for <br/> <span className="font-serif-italic text-teal-600 font-normal">Service Businesses</span>
</h1>
<p className="text-xl text-gray-600 mb-8">Not all websites should be the same. Each industry requires a uniquely tailored approach to succeed.</p>
</section>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
<a className="nav-link group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center" data-target="page-real-estate" href="#">
<div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
<iconify-icon className="text-[32px] text-gray-600 group-hover:text-teal-600 transition-colors" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Real Estate</h3>
<p className="text-sm text-gray-500">Property showcases &amp; lead gen.</p>
</a>
<a className="nav-link group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center" data-target="page-consultants" href="#">
<div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-[32px] text-gray-600 group-hover:text-blue-600 transition-colors" icon="solar:case-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Consultants</h3>
<p className="text-sm text-gray-500">Authority building &amp; booking.</p>
</a>
<a className="nav-link group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center" data-target="page-architects" href="#">
<div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-stone-50 transition-colors">
<iconify-icon className="text-[32px] text-gray-600 group-hover:text-stone-600 transition-colors" icon="solar:pen-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Architects</h3>
<p className="text-sm text-gray-500">Minimalist portfolio focus.</p>
</a>
<a className="nav-link group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center" data-target="page-restaurants" href="#">
<div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
<iconify-icon className="text-[32px] text-gray-600 group-hover:text-orange-600 transition-colors" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Restaurants</h3>
<p className="text-sm text-gray-500">Menu visibility &amp; calls.</p>
</a>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-real-estate">
<div className="py-16 text-center max-w-4xl mx-auto">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-2 mb-8 transition-colors" data-target="page-industries" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Industries
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
                    Real Estate Websites That <span className="font-serif-italic text-teal-600 font-normal">Generate Inquiries</span>
</h1>
</div>
<div className="grid md:grid-cols-2 gap-16 py-12">
<div className="order-2 md:order-1 flex flex-col justify-center">
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">If your website isn’t generating inquiries, it’s not doing its job.</h2>
<p className="text-lg text-gray-600 mb-8">We build platforms that build trust instantly and make it frictionless for potential buyers or sellers to contact you.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<iconify-icon className="text-xl text-teal-500" icon="solar:gallery-linear"></iconify-icon> Property-focused structure
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<iconify-icon className="text-xl text-teal-500" icon="solar:smartphone-linear"></iconify-icon> Mobile optimization
                        </li>
<li className="flex items-center gap-3 text-lg text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<iconify-icon className="text-xl text-teal-500" icon="solar:target-linear"></iconify-icon> Conversion-focused layout
                        </li>
</ul>
</div>
<div className="order-1 md:order-2 bg-teal-50 rounded-[2.5rem] p-12 flex items-center justify-center">
<iconify-icon className="text-[128px] text-teal-200 stroke-[1]" icon="solar:home-angle-linear"></iconify-icon>
</div>
</div>
<div className="text-center py-20">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Build a real estate website that works</button>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-consultants">
<div className="py-16 text-center max-w-4xl mx-auto">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-2 mb-8 transition-colors" data-target="page-industries" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Industries
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
                    Consultant Websites That Build <span className="font-serif-italic text-blue-600 font-normal">Trust &amp; Attract Clients</span>
</h1>
</div>
<div className="grid md:grid-cols-2 gap-16 py-12">
<div className="bg-blue-50 rounded-[2.5rem] p-12 flex items-center justify-center">
<iconify-icon className="text-[128px] text-blue-200 stroke-[1]" icon="solar:case-linear"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">If your website doesn’t reflect your expertise, you’re losing opportunities.</h2>
<p className="text-lg text-gray-600 mb-8">Establish clear positioning and strong credibility with a professional design focused on capturing leads.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-gray-700"><iconify-icon className="text-xl text-blue-500" icon="solar:check-read-linear"></iconify-icon> Clear positioning &amp; messaging</li>
<li className="flex items-center gap-3 text-lg text-gray-700"><iconify-icon className="text-xl text-blue-500" icon="solar:check-read-linear"></iconify-icon> Service-focused structure</li>
<li className="flex items-center gap-3 text-lg text-gray-700"><iconify-icon className="text-xl text-blue-500" icon="solar:check-read-linear"></iconify-icon> Lead-focused layout</li>
</ul>
</div>
</div>
<div className="text-center py-20">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Let your website reflect your expertise</button>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-architects">
<div className="py-16 text-center max-w-4xl mx-auto">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-2 mb-8 transition-colors" data-target="page-industries" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Industries
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
                    Website Design for Architects That <span className="font-serif-italic text-stone-600 font-normal">Showcases Your Work</span>
</h1>
</div>
<div className="max-w-5xl mx-auto bg-stone-900 rounded-[2rem] p-12 text-white mb-16 text-center relative overflow-hidden">
<h2 className="text-3xl tracking-tight font-medium mb-4 relative z-10">Your work deserves better presentation.</h2>
<p className="text-lg text-stone-400 mb-10 max-w-2xl mx-auto relative z-10">Minimal layouts, project-focused design, strong visual hierarchy, and smooth navigation.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 text-left">
<div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700"><span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Focus</span> Portfolio Structure</div>
<div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700"><span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Aesthetic</span> Clean Design</div>
<div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700"><span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Tech</span> Responsive Exp.</div>
<div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700"><span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Visibility</span> SEO-Ready</div>
</div>
</div>
<div className="text-center py-10">
<button className="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">Let your work speak</button>
</div>
</div>



<div className="page-section max-w-7xl mx-auto px-6" id="page-restaurants">
<div className="py-16 text-center max-w-4xl mx-auto">
<a className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-2 mb-8 transition-colors" data-target="page-industries" href="#">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon> Industries
                </a>
<h1 className="text-5xl md:text-6xl tracking-tight font-medium text-gray-900 mb-6">
                    Restaurant Websites That <span className="font-serif-italic text-orange-500 font-normal">Drive Calls and Visits</span>
</h1>
</div>
<div className="grid md:grid-cols-2 gap-16 py-12 items-center">
<div>
<h2 className="text-3xl tracking-tight font-medium text-gray-900 mb-4">If your website doesn’t make people hungry, it’s not working.</h2>
<p className="text-lg text-gray-600 mb-6">Simple websites focused on calls — no complex booking systems unless needed. Just clear menus, strong visuals, and easy contact.</p>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3"><iconify-icon className="text-xl text-orange-500" icon="solar:chef-hat-linear"></iconify-icon> <span className="text-lg font-medium text-gray-900">Menu CMS</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-xl text-orange-500" icon="solar:gallery-linear"></iconify-icon> <span className="text-lg font-medium text-gray-900">Food Gallery</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-xl text-orange-500" icon="solar:phone-linear"></iconify-icon> <span className="text-lg font-medium text-gray-900">Call-focused layout</span></div>
</div>
</div>
<div className="bg-orange-50 rounded-[2rem] p-8">

<div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 mb-4 flex justify-between items-center">
<span className="font-medium text-gray-900">Enable Online Reservations</span>
<label className="custom-toggle relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer transition-colors">
<div className="w-5 h-5 bg-white rounded-full shadow-sm absolute top-[2px] left-[2px] transition-transform"></div>
</div>
</label>
</div>
<p className="text-sm text-gray-500 text-center px-4">We position your site simply. If you need reservations, we integrate them cleanly without cluttering the main experience.</p>
</div>
</div>
<div className="text-center py-20">
<button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">Make your restaurant stand out</button>
</div>
</div>
</main>

<footer className="bg-[#FAFAFA] border-t border-gray-200/50 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600 mb-8">
<a className="nav-link hover:text-gray-900 transition-colors" data-target="page-home" href="#">Home</a>
<a className="nav-link hover:text-gray-900 transition-colors" data-target="page-services" href="#">Services</a>
<a className="nav-link hover:text-gray-900 transition-colors" data-target="page-industries" href="#">Industries</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-gray-400 space-x-4 mb-4">
<a className="hover:text-gray-600" href="#">Privacy policy</a>
<a className="hover:text-gray-600" href="#">Terms &amp; conditions</a>
</div>
<p className="text-xs text-gray-400">All rights reserved © Studio</p>
</div>
</footer>



    </>
  );
}
