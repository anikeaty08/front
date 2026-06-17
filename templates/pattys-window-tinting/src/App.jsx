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



        (function() {
            const container = document.getElementById('edge-to-edge-carousel');
            if (!container) return;
            
            const slides = container.querySelectorAll('.carousel-fade-slide');
            if (!slides.length) return;
            
            let activeIndex = 0;
            const interval = 4000;
            
            setInterval(() => {
                const currentSlide = slides[activeIndex];
                const nextIndex = (activeIndex + 1) % slides.length;
                const nextSlide = slides[nextIndex];
                
                // Fade out current
                currentSlide.classList.remove('opacity-100', 'z-10');
                currentSlide.classList.add('opacity-0', 'z-0');
                
                // Fade in next
                nextSlide.classList.remove('opacity-0', 'z-0');
                nextSlide.classList.add('opacity-100', 'z-10');
                
                activeIndex = nextIndex;
            }, interval);
        })();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-2 gap-y-2 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter h-10 max-w-sm" href="#">
<img alt="Patty's Window Tinting" className="cursor-pointer w-auto h-16 object-contain" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4996785-bc4f-485e-aa62-24a342b05553_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">How it Works</a>
<a className="hover:text-white transition-colors" href="#why-tint">Why Tint</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 text-xs font-medium text-black bg-white h-9 rounded-full pr-4 pl-4" href="#contact">
                Get a Quote
            </a>

<button className="md:hidden text-white gap-x-2 gap-y-2">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="overflow-hidden md:pb-20 md:pt-18 pt-32 pr-6 pb-20 pl-6 relative">

<div className="-translate-x-1/2 blur-[100px] bg-blue-500/10 w-[600px] h-[400px] rounded-full absolute top-0 left-1/2"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            Now serving local and mobile customers
        </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Precision Tinting for the Automotive Industry <span className="text-neutral-500"></span></h1>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-xl mr-auto mb-10 ml-auto">From daily drivers to high-end luxury vehicles.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors text-sm font-medium text-black bg-white w-full h-12 rounded-full pr-8 pl-8" href="#quote">
                Get a Quote
                <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="sm:w-auto flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm font-medium text-white bg-transparent w-full h-12 border-white/10 border rounded-full pr-8 pl-8" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                Call or Text Now
            </a>
</div>
</div>

</section><section className="w-full bg-neutral-950 border-t border-white/5 relative z-0">

<div className="w-full h-[400px] md:h-[600px] relative overflow-hidden bg-neutral-900 group" id="edge-to-edge-carousel">

<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">

<img alt="Premium Window Tinting Service" className="carousel-fade-slide transition-opacity duration-1000 ease-in-out z-10 bg-center opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c099f0f-efa9-48e3-8d19-9745244c897f_3840w.png"/>

<img alt="Luxury Car Detailing" className="carousel-fade-slide transition-opacity duration-1000 ease-in-out z-0 bg-center opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca4e3199-cb39-4b7e-8928-945b64433667_3840w.png"/>

<img alt="Automotive Protection Film" className="carousel-fade-slide transition-opacity duration-1000 ease-in-out z-0 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfbaaed0-fc9c-4c8d-9737-34611acff8d0_3840w.png"/>

<img alt="Ceramic Coating and Tint" className="carousel-fade-slide transition-opacity duration-1000 ease-in-out opacity-0 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c05aecfc-3ddd-42b0-9582-f3ebd413057a_3840w.png"/>
</div>

<div className="pointer-events-none z-20 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Serving Clackamas and Multnomah County For 11 Years</h2>
<p className="text-neutral-400 max-w-xl">Precision installation using Suntek, the highest quality films on the market.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">


<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
<div className="flex group-hover:scale-110 transition-transform text-white bg-neutral-900 w-10 h-10 border-white/10 border rounded-full mb-6 items-center justify-center">
<iconify-icon className="" height="20" icon="solar:wheel-angle-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Personal Vehicle Tinting</h3>
<p className="leading-relaxed text-sm text-neutral-500">Clean, professional tinting for cars, trucks, and SUVs.</p>
</div>


<div className="group hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex group-hover:scale-110 transition-transform text-white bg-neutral-900 w-10 h-10 border-white/10 border rounded-full mb-6 items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="garage-linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#ffffff" strokeWidth="1.5"><path d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4m-5 6.5h6m-6 3h6" strokeLinecap="round"></path><path d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Tinting for Automotive Service Businesses</h3>
<p className="leading-relaxed text-sm text-neutral-500">If your customer needs tint, we come to your shop and handle it professionally. We work directly with businesses to offer on-demand tinting services.</p>
</div><div className="group hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex group-hover:scale-110 transition-transform text-white bg-neutral-900 w-10 h-10 border-white/10 border rounded-full mb-6 items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="sort-horizontal-linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H6m0 0l4.125-4M6 8l4.125 4M6 16h12m0 0l-4.125-4M18 16l-4.125 4" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mobile Window Tinting </h3>
<p className="leading-relaxed text-sm text-neutral-500">Busy schedule? No problem. We bring all tools and materials to your home or workplace and tint your vehicle on-site.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/20 border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="md:text-2xl text-3xl font-medium text-white tracking-tight mb-4">Experience enhanced privacy and style with premium Suntek ceramic films.</h2>
<p className="text-neutral-400 max-w-xl"></p>
</div>
<div className="flex gap-2">
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">

<img alt="Tinted Car" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b724ff90-c40d-4302-aa43-c8f6228842db_3840w.png"/>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/80 bg-neutral-900 relative">
<img alt="Untinted Car" className="absolute top-0 left-0 min-w-[200%] h-full object-cover" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium text-white border border-white/10">
                        BEFORE
                    </div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize z-20">
<iconify-icon className="text-neutral-900 rotate-90" icon="solar:code-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-xs text-neutral-600 text-center mt-4"></p>
</div>
</section><section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-12">Rated 5 Stars by Local Customers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"Pattys the best tinter around! Hes done all of my detail shops window tinting for years and ive recommended him to many people with only the best feedback from everybody. Quality work and a super friendly guy with alot of experience. Give him a call you wont be disappointed"</p>
<div className="flex items-center gap-3">
<div className="flex text-xs text-white bg-neutral-800 w-8 h-8 rounded-full items-center justify-center">JR</div>
<span className="text-xs font-medium text-white">Justin Robinson</span>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">"Pat did an excellent job on my truck.  Super nice guy and very reasonably priced.  I am very happy with his work."</p>
<div className="flex items-center gap-3">
<div className="flex text-xs text-white bg-neutral-800 w-8 h-8 rounded-full items-center justify-center">D</div>
<span className="text-xs font-medium text-white">Don</span>
</div>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"I run a local body shop and use these guys for all our tint work. Consistent quality every single time. The lifetime warranty gives our customers peace of mind."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white">RL</div>
<span className="text-xs font-medium text-white">Ryan L.</span>
</div>
</div>
</div>
</div>
</section><section className="bg-neutral-900/20 border-white/5 border-t pt-28 pr-6 pb-28 pl-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">See Our Work in Action.</h2>
</div>
<div className="flex justify-center">
<div className="w-full max-w-sm">
<div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/50">

<img alt="Instagram Reel Preview" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
<iconify-icon className="ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
</div>

<div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<span className="text-xs font-semibold text-white drop-shadow-sm">ProTint Auto</span>
</div>
<iconify-icon className="text-white/90 drop-shadow-sm" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</div>

<iframe allowfullscreen="" className="absolute inset-0 h-full w-full" frameborder="0" scrolling="no" src="https://www.instagram.com/reel/DAel88syL2k/embed" title="Instagram Reel">
</iframe>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="process">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16 text-center">How It Works</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-2xl font-medium text-white">1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Request Quote</h3>
<p className="text-sm text-neutral-500">Call or text our support for an instant quote, 24/7.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-2xl font-medium text-white">2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Choose Darkness Level</h3>
<p className="text-sm text-neutral-500">Select how dark you want your tint, and what level of heat protection works for you. </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="text-2xl font-medium text-white">3</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Stress-Free Installation</h3>
<p className="text-sm text-neutral-500">Relax while we transform your vehicle on-site or in our shop.</p>
</div>
</div>
</div>
</section><section className="bg-neutral-900/20 border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end mb-12 gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Quality Installation</h2>
<p className="text-neutral-400 max-w-xl">Every car we tint with Suntek comes with their ownership lifetime warranty.</p>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2">
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">

<img alt="Tinted Car" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81e11bde-1994-468c-80cf-4fb168a4e98b_3840w.png"/>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/80 bg-neutral-900 relative">
<img alt="Untinted Car" className="absolute top-0 left-0 min-w-[200%] h-full object-cover" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium text-white border border-white/10">
                        BEFORE
                    </div>

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize z-20">
<iconify-icon className="text-neutral-900 rotate-90" icon="solar:code-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-xs text-neutral-600 text-center mt-4"></p>
</div>
</section><section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="why-tint">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">Why Tint Your Windows?</h2>
<p className="leading-relaxed text-neutral-400 mb-8">Many assume that tinted vehicles are just for looks. While your car will be upgraded in style, the benefits don't stop there.</p>
<a className="hover:text-neutral-300 hover:border-neutral-300 transition-colors inline-block text-sm text-white border-white border-b pb-0.5" href="#contact"></a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="">
<iconify-icon className="text-3xl text-white mb-4" height="30" icon="solar:shield-warning-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<h4 className="font-medium text-white mb-2">Added Safety</h4>
<p className="text-sm text-neutral-500">Quality film helps hold shattered glass together on impact.</p>
</div>

<div className="">
<iconify-icon className="text-white text-3xl mb-4" icon="solar:shield-star-linear"></iconify-icon>
<h4 className="font-medium text-white mb-2">UV Protection</h4>
<p className="text-sm text-neutral-500">Prevent harmful UV rays from damaging your skin and interior.</p>
</div>

<div className="">
<iconify-icon className="text-3xl text-white mb-4" height="30" icon="solar:sun-2-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<h4 className="font-medium text-white mb-2">Stay Cooler</h4>
<p className="text-sm text-neutral-500">Shaded windows block heat from cooking your car's interior.</p>
</div>

<div className="">
<iconify-icon className="text-3xl text-white mb-4" height="30" icon="solar:eye-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<h4 className="font-medium text-white mb-2">Privacy</h4>
<p className="text-sm text-neutral-500">Keep unwanted eyes from seeing into your vehicle &amp; belongings.</p>
</div>
</div>
</div>
</section>



<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-white/[0.02] transition-colors font-medium text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        How long does the tinting process take?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="leading-relaxed text-sm text-neutral-400 pr-6 pb-6 pl-6">
                        For a standard sedan, installation typically takes between 1.5 to 3 hours. We focus on quality over speed to ensure no dust or bubbles are trapped.
                    </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer hover:bg-white/[0.02] transition-colors font-medium text-white pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        What tint is best for my car?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="leading-relaxed text-sm text-neutral-400 pr-6 pb-6 pl-6">
                        If you want basic privacy and looks, Standard Carbon is great. If you want to significantly reduce heat inside the cabin and block 99% of UV rays, Ceramic Tint is the best investment.
                    </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                        Is there a warranty?
                        <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Yes! All our tint packages come with a manufacturer-backed Lifetime Warranty against fading, peeling, bubbling, and turning purple.
                    </div>
</details>
</div>
</div>
</section><section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="gallery">
<div className="max-w-6xl mx-auto">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight text-center mb-12">Recent Work</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
<img alt="Luxury Sedan Tint" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfbaaed0-fc9c-4c8d-9737-34611acff8d0_800w.png"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
<img alt="Sports Car Window Tint" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/448aeb24-cc96-4cfb-814a-aca0e4662099_800w.png"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
<img alt="Ceramic Tint Installation" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60a0ac3a-8927-4b51-9fa6-646a837cbc1e_800w.png"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
<img alt="SUV Privacy Tint" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65e8b925-c0d9-4224-b859-4d821c822e73_800w.png"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
<img alt="Tesla Window Tint" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a411e7f3-31ab-4291-b5ed-3ca03432acf7_800w.png"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group aspect-[4/3] overflow-hidden bg-neutral-900 border-white/10 border rounded-xl relative">
<img alt="Truck Tinting" className="transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 bg-center opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/600d736c-63d6-44a0-a5b3-cf8274921d9c_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="mt-12 flex justify-center">
<a className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-neutral-200" href="/gallery">
                View Full Gallery
                <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to Tint Your Vehicle?</h2>
<p className="text-neutral-400 mb-10 text-lg font-light">Get a free quote today and upgrade your ride with the best protection available.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-medium text-base flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                    Get a Free Quote
                    <iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-14 px-8 rounded-full bg-neutral-800 border border-white/5 text-white font-medium text-base flex items-center justify-center gap-2 hover:bg-neutral-700 transition-colors" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call or Text Now
                </a>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-white/5 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto gap-x-2 gap-y-2 items-center justify-between">
<div className="flex bg-center font-semibold text-white tracking-tight gap-x-2 gap-y-2 items-center"></div>
<div className="text-xs text-neutral-500 gap-x-2 gap-y-2">© 2026 Patty's Window Tinting. All rights reserved.</div>
<div className="flex gap-6 gap-x-2 gap-y-2">
<a className="hover:text-white transition-colors text-neutral-500" href="#">
<iconify-icon className="" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<img alt="Patty's Window Tinting" className="cursor-pointer w-auto h-16 object-contain" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4996785-bc4f-485e-aa62-24a342b05553_320w.png"/></footer>

    </>
  );
}
