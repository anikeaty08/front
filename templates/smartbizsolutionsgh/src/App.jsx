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



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initialize Lucide icons with 1.5 stroke width globally
            lucide.createIcons({
                attrs: {
                    'stroke-width': 1.5
                }
            });

            // --- Routing Logic ---
            function handleRouting() {
                let hash = window.location.hash;
                if (!hash) hash = '#home';

                const pages = document.querySelectorAll('.page-section');
                pages.forEach(page => {
                    page.classList.add('hidden');
                });

                const activePage = document.querySelector(hash);
                if (activePage) {
                    activePage.classList.remove('hidden');
                } else {
                    document.getElementById('home').classList.remove('hidden');
                    hash = '#home';
                }

                // Update active state in footer nav
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === hash) {
                        link.classList.add('text-amber-600');
                        link.classList.remove('text-slate-600');
                    } else {
                        link.classList.remove('text-amber-600');
                        link.classList.add('text-slate-600');
                    }
                });

                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            window.addEventListener('hashchange', handleRouting);
            handleRouting();
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
      

<header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<a className="flex-shrink-0 flex items-center group" href="#home">
<div className="flex items-center gap-3 sm:gap-4 group-hover:scale-105 transition-transform">

<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100 shadow-sm">
<img alt="SmartBiz Icon" className="object-contain object-center w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77c81ba7-b867-439b-ae79-a33fb46436cb_800w.jpg"/>
</div>
<div className="flex flex-col items-start justify-center">
<span className="leading-none text-xl sm:text-2xl font-semibold text-blue-950 tracking-tight">SmartBiz</span>
<span className="uppercase leading-none text-sm font-semibold text-amber-500 tracking-widest mt-1 sm:mt-1.5">Solutions</span>
</div>
</div>
</a>

<div className="flex items-center">
<a className="relative inline-flex items-center justify-center transition-all text-xs sm:text-base font-semibold text-white rounded-full shadow-sm overflow-hidden p-[2px] group" href="#contact">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#f97316_100%)]"></span>
<span className="relative inline-flex items-center justify-center w-full h-full bg-blue-950 group-hover:bg-blue-900 transition-all rounded-full py-2 px-4 sm:py-2.5 sm:px-6">
                            Start Growing
                        </span>
</a>
</div>
</div>
</div>
</header>

<main className="flex-grow overflow-x-hidden pt-24">

<div className="page-section" id="home">

<section className="lg:pt-20 lg:pb-24 overflow-hidden pt-12 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="leading-tight sm:text-4xl lg:text-6xl text-3xl font-semibold text-blue-950 tracking-tight text-center max-w-4xl mr-auto mb-6 ml-auto">SmartBiz Solutions - Web Design &amp; Social Media Management</h1>
<p className="sm:text-xl leading-relaxed sm:px-0 text-lg text-slate-500 max-w-2xl mr-auto mb-10 ml-auto pr-4 pl-4">Give your business a clean, modern website and a growing, engaging social media presence.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center px-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center hover:bg-amber-400 transition-all text-blue-950 font-semibold text-base bg-amber-500 rounded-full py-3 px-8 shadow-lg shadow-amber-500/30" href="#pricing">
                            View Pricing
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center transition-all text-base font-semibold rounded-full pt-3 pr-8 pb-3 pl-8 bg-slate-100 sm:bg-amber-500 sm:text-blue-950 text-slate-700 hover:bg-slate-200 sm:hover:bg-amber-400" href="#services">
                            View Services
                        </a>
</div>

<div className="relative py-8 sm:py-12 w-full">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-900/10 via-transparent to-amber-500/10 blur-3xl -z-10 opacity-80 pointer-events-none"></div>
<div className="relative max-w-5xl mx-auto px-2 sm:px-0">

<div className="absolute -top-8 left-2 sm:left-[10%] z-20 animate-[bounce_3s_infinite_ease-in-out]">
<div className="flex items-center gap-1.5 bg-blue-950 text-white text-xs sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg transform -rotate-6">
<span>Clean UI/UX</span>
</div>
</div>
<div className="absolute -top-10 right-2 sm:right-[10%] z-20 animate-[bounce_3.5s_infinite_ease-in-out]">
<div className="flex items-center gap-1.5 bg-amber-500 text-blue-950 text-xs sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg transform rotate-3">
<span>Mobile Ready</span>
</div>
</div>
<div className="absolute bottom-4 right-[20%] sm:right-[30%] z-20 animate-[bounce_4s_infinite_ease-in-out]">
<div className="flex items-center gap-1.5 bg-white text-blue-950 border border-slate-100 text-xs sm:text-base font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg transform -rotate-2">
<span>Social Growth</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-4 relative z-10">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border-2 sm:border-4 border-white">
<img alt="Business Website" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-2 sm:border-4 border-white mt-4 sm:mt-8">
<img alt="Data Dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 border-2 sm:border-4 border-white">
<img alt="Web Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border-2 sm:border-4 border-white mt-4 sm:mt-8">
<img alt="Social Media" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 py-12 sm:py-16">
<div className="max-w-4xl mx-auto px-6 sm:px-6 text-center">
<i className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500/50 mb-4 mx-auto" data-lucide="quote"></i>
<p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-950 tracking-tight leading-snug">
                        "We create professional websites and engaging social media campaigns that make your business stand out online."
                    </p>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Fast Delivery</h3>
<p className="text-base text-slate-500 leading-relaxed">Get your professional website up and running quickly so you can start attracting customers sooner.</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Affordable Pricing</h3>
<p className="text-base text-slate-500 leading-relaxed">Premium quality design and social management structured specifically for small business budgets.</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="pen-square"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Clean UI/UX</h3>
<p className="text-base text-slate-500 leading-relaxed">Modern, intuitive designs that build trust and guide visitors seamlessly to contact you.</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Mobile-Friendly</h3>
<p className="text-base text-slate-500 leading-relaxed">Flawless website performance on phones, tablets, and desktops, where your customers are searching.</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Social Media Growth</h3>
<p className="text-base text-slate-500 leading-relaxed">Consistent, high-quality posts across all major social platforms to build your audience and engage customers.</p>
</div>
<div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">Fully Managed</h3>
<p className="text-base text-slate-500 leading-relaxed">We handle the technical web details and daily social content, so you can focus entirely on running your business.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white min-h-[80vh]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950 tracking-tight mb-4">About SmartBiz Solutions</h1>
<p className="text-xl md:text-2xl text-slate-500">We build professional websites and manage your social presence to make your business stand out online.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
<div className="space-y-8 sm:space-y-10">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-950">Who we are</h2>
</div>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed pl-11">SmartBiz Solutions is a dedicated digital agency focused on delivering high-quality, modern, and affordable online solutions. We believe every business, regardless of size, deserves a powerful and professional footprint across the web and social media.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-950">What we do</h2>
</div>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed pl-11">We design clean, responsive websites and provide full-service social media management tailored to your specific business needs. From the initial website launch to creating weekly social content and ongoing maintenance, we handle all the digital details so you can stay focused on running your business.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-950">Why we focus on small businesses</h2>
</div>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed pl-11">Small businesses are the backbone of the economy, yet many struggle to find affordable digital services. We bridge that gap by offering premium web design and reliable social media growth at accessible price points, ensuring you can compete effectively online.</p>
</div>
</div>
<div className="relative mt-12 md:mt-0 px-4 sm:px-0">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-amber-50 rounded-3xl transform rotate-3"></div>
<div className="bg-blue-950 rounded-3xl p-8 sm:p-10 md:p-16 relative shadow-2xl text-center text-white flex flex-col justify-center items-center min-h-[350px] sm:min-h-[450px]">
<i className="w-14 h-14 sm:w-16 sm:h-16 text-amber-500 mb-6 sm:mb-8" data-lucide="star"></i>
<h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">Our Mission</h3>
<p className="text-lg sm:text-xl text-slate-300 leading-relaxed">To empower local businesses with affordable, high-performing websites and engaging social media strategies that build immediate trust, attract more customers, and drive long-term growth.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-slate-50 min-h-[80vh]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
<span className="text-amber-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-2 block">Our Expertise</span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950 tracking-tight mb-4">Website Design &amp; Development</h1>
<p className="text-xl md:text-2xl text-slate-500">Everything your business needs to establish a powerful, fully-managed online presence.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="monitor-smartphone"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">Responsive Design</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">A flawless browsing experience across all devices - mobile phones, tablets, and desktop computers.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="layout-template"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">Modern Layouts</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">Clean, aesthetically pleasing designs that reflect your brand's professionalism and build immediate trust.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="building-2"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">Business-Focused</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">Strategically structured to convert visitors into leads and customers effectively with clear calls to action.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="zap"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">Fast Loading</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">Highly optimized performance and image loading to keep users engaged and dramatically reduce bounce rates.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="search"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">SEO-Ready Structure</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">Built from the ground up with search engine best practices to help your business rank higher locally.</p>
</div>
<div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-6 h-6 sm:w-7 sm:h-7" data-lucide="shield-check"></i>
</div>
<h3 className="font-semibold text-xl text-blue-950 mb-3 tracking-tight">Free Support &amp; Updates</h3>
<p className="text-base sm:text-lg text-slate-500 leading-relaxed">Hands-on assistance during setup, plus simple ongoing maintenance and updates whenever you need them.</p>
</div>
</div>

<div className="mt-24 sm:mt-32 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
<span className="text-amber-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-2 block">Grow Your Audience</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950 tracking-tight mb-4">Social Media Management</h2>
<p className="text-xl md:text-2xl text-slate-500">A premium, all-inclusive package to build your brand and engage your customers online.</p>
</div>
<div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">

<div className="p-8 sm:p-12 lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
<span className="inline-block py-1.5 px-4 rounded-full bg-amber-100 text-amber-700 font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6">All-Inclusive Package</span>
<h3 className="text-2xl sm:text-3xl font-semibold text-blue-950 tracking-tight mb-4">Complete Management</h3>
<div className="flex items-baseline justify-center lg:justify-start gap-1 mb-6">
<span className="text-lg font-semibold text-slate-500">GH₵</span>
<span className="text-5xl sm:text-6xl font-semibold text-blue-950 tracking-tight">2,500</span>
<span className="text-base sm:text-lg text-slate-500 font-medium">/month</span>
</div>
<p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">Everything you need to maintain a professional, active, and engaging presence across all major social platforms.</p>
<a className="inline-flex items-center justify-center w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold text-lg py-3.5 px-8 rounded-full transition-all shadow-lg shadow-amber-500/30 group" href="#contact">
                                Work With Me
                                <iconify-icon className="ml-2 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="p-8 sm:p-12 lg:w-7/12 grid sm:grid-cols-2 gap-8 sm:gap-10 bg-white">

<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight">Full Platform Management</h4>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">Comprehensive management of your Facebook, Instagram, TikTok, and LinkedIn profiles.</p>
</div>

<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:gallery-edit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight">Consistent Posting</h4>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">4–5 high-quality posts per week including professional graphics, engaging captions, and short videos.</p>
</div>

<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight">Active Engagement</h4>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">Prompt DM and comment management to build relationships and maintain excellent customer service.</p>
</div>

<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight">Strategy &amp; Planning</h4>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">Tailored content planning and strategy designed specifically to align with your business goals.</p>
</div>

<div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight">Performance Tracking</h4>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">Detailed monthly performance reporting so you can see exactly how your audience is growing.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white min-h-[80vh]" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950 tracking-tight mb-4">Transparent Pricing</h1>
<p className="text-xl md:text-2xl text-slate-500">Affordable solutions for your complete digital presence.</p>
</div>
<div className="max-w-4xl mx-auto px-2 sm:px-0 space-y-8 sm:space-y-12">

<div className="bg-blue-950 rounded-3xl shadow-2xl overflow-hidden border border-blue-900 relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="p-2 sm:p-3 bg-amber-500 text-center text-blue-950 text-sm sm:text-base font-bold uppercase tracking-widest shadow-sm">
                            Best Offer
                        </div>
<div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-8 sm:gap-12 items-center relative z-10">

<div className="md:w-[45%] space-y-4 sm:space-y-6 text-center md:text-left">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Complete Website Package</h2>
<p className="text-lg sm:text-xl text-blue-200 leading-relaxed">Everything you need to get your business online professionally, without breaking the bank.</p>
<ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-left">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-white">Custom, responsive design</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-white">SEO &amp; Mobile optimized</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-white">Fast turnaround time</span>
</li>
</ul>
</div>

<div className="md:w-[55%] bg-blue-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-800/80 w-full shadow-inner">
<div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
<div className="flex justify-between items-center border-b border-blue-800 pb-3 sm:pb-4 gap-2 sm:gap-4">
<span className="text-sm sm:text-base text-blue-200 font-semibold leading-tight">Website Setup <span className="text-xs sm:text-sm text-blue-400 block sm:inline mt-0.5 sm:mt-0 sm:ml-1">(One-time)</span></span>
<span className="text-lg sm:text-xl font-semibold text-white tracking-tight whitespace-nowrap shrink-0">1,200 <span className="text-xs sm:text-sm text-blue-200 font-medium ml-0.5">GHS</span></span>
</div>
<div className="flex justify-between items-center border-b border-blue-800 pb-3 sm:pb-4 gap-2 sm:gap-4">
<span className="text-sm sm:text-base text-blue-200 font-semibold leading-tight">Monthly Maintenance</span>
<span className="text-base sm:text-lg font-semibold text-white tracking-tight whitespace-nowrap shrink-0">200 <span className="text-xs sm:text-sm text-blue-200 font-medium ml-0.5">GHS</span></span>
</div>
<div className="flex justify-between items-center gap-2 sm:gap-4">
<span className="text-sm sm:text-base text-blue-200 font-semibold leading-tight">Annual Domain</span>
<span className="text-base sm:text-lg font-semibold text-white tracking-tight whitespace-nowrap shrink-0">200 <span className="text-xs sm:text-sm text-blue-200 font-medium ml-0.5">GHS</span></span>
</div>
</div>
<a className="relative block w-full rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] overflow-hidden p-[2px] group transition-all" href="#contact">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#ffffff_100%)]"></span>
<span className="relative block w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-amber-500 group-hover:bg-amber-400 text-blue-950 font-semibold text-lg sm:text-xl text-center rounded-full transition-all">
                                        Request a Website
                                    </span>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="p-2 sm:p-3 bg-slate-100 border-b border-slate-200 text-center text-slate-600 text-sm sm:text-base font-bold uppercase tracking-widest shadow-sm">
                            Growth Package
                        </div>
<div className="p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-8 sm:gap-12 items-center relative z-10">

<div className="md:w-[45%] space-y-4 sm:space-y-6 text-center md:text-left">
<h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 tracking-tight">Social Media Management</h2>
<p className="text-lg sm:text-xl text-slate-600 leading-relaxed">A complete, hands-off solution to build your brand and engage your customers online.</p>
<ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 text-left">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-slate-700">4-5 High-quality posts per week</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-slate-700">FB, IG, TikTok &amp; LinkedIn</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-base sm:text-lg text-slate-700">Active engagement &amp; reporting</span>
</li>
</ul>
</div>

<div className="md:w-[55%] bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 w-full shadow-inner">
<div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
<div className="flex justify-between items-center border-b border-slate-200 pb-3 sm:pb-4 gap-2 sm:gap-4">
<span className="text-sm sm:text-base text-slate-600 font-semibold leading-tight">Monthly Management</span>
<span className="text-lg sm:text-xl font-semibold text-blue-950 tracking-tight whitespace-nowrap shrink-0">2,500 <span className="text-xs sm:text-sm text-slate-500 font-medium ml-0.5">GHS</span></span>
</div>
<div className="flex justify-between items-center gap-2 sm:gap-4">
<span className="text-sm sm:text-base text-slate-600 font-semibold leading-tight">Setup Fee</span>
<span className="text-base sm:text-lg font-semibold text-blue-950 tracking-tight whitespace-nowrap shrink-0">0 <span className="text-xs sm:text-sm text-slate-500 font-medium ml-0.5">GHS</span></span>
</div>
</div>
<a className="relative block w-full rounded-full shadow-[0_0_15px_rgba(30,58,138,0.15)] hover:shadow-[0_0_20px_rgba(30,58,138,0.25)] overflow-hidden p-[2px] group transition-all" href="#contact">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#1e3a8a_100%)]"></span>
<span className="relative block w-full py-3.5 sm:py-4 px-4 sm:px-6 bg-blue-950 group-hover:bg-blue-900 text-white font-semibold text-lg sm:text-xl text-center rounded-full transition-all">
                                        Start Growing
                                    </span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden pt-8 sm:pt-12 pb-16 sm:pb-24 bg-slate-50 min-h-[80vh]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-950 tracking-tight mb-4">Get in Touch</h1>
<p className="text-xl md:text-2xl text-slate-500">Ready to start your project or have questions? Message us directly.</p>
</div>
<div className="max-w-2xl mx-auto bg-blue-950 rounded-3xl shadow-xl overflow-hidden text-center p-8 sm:p-10 md:p-16 relative">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-6 sm:mb-8 relative z-10">
<i className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" data-lucide="message-circle"></i>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight relative z-10">Chat with us on WhatsApp</h2>
<p className="text-lg sm:text-xl text-blue-200 mb-8 sm:mb-10 relative z-10 leading-relaxed max-w-lg mx-auto">We handle all inquiries, project requests, and support directly through WhatsApp for the fastest response time.</p>
<a className="relative inline-flex items-center justify-center w-full sm:w-auto p-[2px] rounded-full overflow-hidden group z-10 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all" href="https://wa.me/233246070047" target="_blank">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#f97316_100%)]"></span>
<span className="relative flex items-center justify-center gap-2 sm:gap-3 w-full h-full py-3.5 sm:py-4 px-6 sm:px-8 bg-blue-950 group-hover:bg-blue-900 text-white font-semibold text-lg sm:text-xl rounded-full transition-all">
<i className="w-6 h-6 sm:w-7 sm:h-7 text-[#f97316]" data-lucide="message-circle"></i>
                            Message 024 607 0047
                        </span>
</a>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-12 sm:pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-10 mb-10 text-center md:text-left">

<div className="max-w-md mx-auto md:mx-0">
<a className="inline-block mb-4" href="#home">
<img alt="SmartBiz Solutions" className="w-auto h-24 sm:h-32 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77c81ba7-b867-439b-ae79-a33fb46436cb_320w.jpg"/>
</a>
<p className="text-sm sm:text-base text-slate-500 leading-relaxed">Give your business a clean, modern website and engaging social presence at the best price. We focus on affordable, high-quality digital solutions for small businesses.</p>
</div>

<div className="flex flex-col items-center md:items-end gap-2 sm:gap-3">
<p className="font-semibold text-base sm:text-lg text-blue-950">Ready to start?</p>
<a className="flex items-center gap-2 text-sm sm:text-base font-semibold text-amber-600 hover:text-amber-500 transition-colors" href="https://wa.me/233246070047" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                        Message on WhatsApp
                    </a>
</div>
</div>

<div className="border-t border-slate-100 py-8 flex flex-wrap justify-center gap-6 sm:gap-10">
<a className="nav-link text-base font-semibold hover:text-amber-500 transition-colors text-amber-600" href="#home">Home</a>
<a className="nav-link text-base font-semibold text-slate-600 hover:text-amber-500 transition-colors" href="#about">About</a>
<a className="nav-link hover:text-amber-500 transition-colors text-base font-semibold text-slate-600" href="#services">Services</a>
<a className="nav-link hover:text-amber-500 transition-colors text-base font-semibold text-slate-600" href="#pricing">Pricing</a>
<a className="nav-link text-base font-semibold text-slate-600 hover:text-amber-500 transition-colors" href="#contact">Contact</a>
</div>
<div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
<p>© 2024 SmartBiz Solutions. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-blue-950 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-blue-950 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
