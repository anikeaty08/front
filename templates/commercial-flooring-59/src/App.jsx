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



                if (window.lucide) {
            lucide.createIcons();
        }
            
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
      

<header className="fixed bg-[#F4F6F8]/80 w-full z-50 border-gray-200/50 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-2 items-center">
<img alt="Skyline Logo" className="cursor-pointer bg-center w-auto h-16 object-cover rounded" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e9d375e-f8a2-4d29-ad3e-d25a2977e221_800w.png"/>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#1F2D3D] transition-colors" href="/about-us">About Us</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="/services">Services</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="/projects">Projects</a>
<a className="hover:text-[#1F2D3D] transition-colors" href="/contact-us">Contact Us</a>
</nav>
<div className="flex gap-4 items-center">
<a className="hidden lg:flex items-center gap-2 hover:text-[#F97316] transition-colors text-sm font-medium text-[#1F2D3D]" href="/tel:#571-286-2005">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                571-286-2005
            </a>
<a className="hidden sm:flex hover:bg-[#F97316] transition-colors duration-300 text-sm font-medium text-white bg-[#1F2D3D] rounded-md pt-2.5 pr-5 pb-2.5 pl-5" href="/contact-us">Contact Us</a>
<button aria-label="Toggle menu" className="md:hidden flex items-center justify-center p-2 text-gray-600 hover:text-[#1F2D3D] transition-colors" onclick="
                const menu = document.getElementById('mobile-menu');
                const openIcon = document.getElementById('menu-icon');
                const closeIcon = document.getElementById('close-icon');
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            ">
<svg className="lucide lucide-menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-x hidden" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="hidden absolute top-20 left-0 w-full bg-[#F4F6F8] border-b border-gray-200 shadow-md md:hidden flex-col pt-4 pr-6 pb-6 pl-6 gap-4 z-40" id="mobile-menu">
<nav className="flex flex-col gap-2 text-base font-medium text-gray-600">
<a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="/about-us">About Us</a>
<a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="/services">Services</a>
<a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="/projects">Projects</a>
<a className="hover:text-[#1F2D3D] transition-colors py-3 border-b border-gray-200/50" href="/contact-us">Contact Us</a>
</nav>
</div>
</div>
</header>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0de6a96-d086-4784-82cd-1989e6ef8886_3840w.jpg)] bg-cover pt-48 pr-6 pb-32 pl-6 relative">

<div className="absolute inset-0 bg-zinc-950/65 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 z-10 max-w-7xl mr-auto ml-auto relative gap-x-16 gap-y-16 items-center">
<div className="relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm mb-6">
<div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Commercial Contractors</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                Commercial Flooring Installed On Time. <span className="text-[#F97316]">Every Time.</span>
</h1>
<p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
                Trusted by general contractors for fast turnaround, reliable crews, and precision installation across
                commercial projects.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 gap-x-4 gap-y-4">
<a className="inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-all text-base font-medium text-white bg-[#F97316] rounded-md pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" href="/contact-us">
    Contact Us
    <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:gap-8">
<div className="flex items-center gap-2.5">
<svg className="lucide lucide-check-circle-2" fill="none" height="18" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-medium text-gray-200">20+ Years Experience</span>
</div>
<div className="flex items-center gap-2.5">
<svg className="lucide lucide-check-circle-2" fill="none" height="18" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-medium text-gray-200">Family Owned &amp; Operated</span>
</div>
<div className="flex items-center gap-2.5">
<svg className="lucide lucide-check-circle-2" fill="none" height="18" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm font-medium text-gray-200">Fast Turnaround Crews</span>
</div>
</div>
</div>
<div className="lg:ml-auto w-full max-w-2xl ml-auto relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10">
</div>

</div>
</div>
</section>

<section className="border-y bg-white border-gray-100 pt-24 pb-24" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative group">
<img alt="Modern commercial building lobby" className="w-full h-[600px] object-cover rounded-xl ring-gray-200 ring-1 shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd6657c1-8315-4f5d-9058-8ce1e4a6e233_1600w.jpg"/>
<div className="ring-inset bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16c746c1-5a38-45cf-b150-2c3e7394b7e3_1600w.jpg)] bg-cover ring-black/10 ring-1 rounded-xl absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1F2D3D]">Built for Commercial
                    Builders</h2>
<p className="leading-relaxed text-lg text-gray-600 mt-6">
                    We specialize in partnering with general contractors who need dependable flooring subcontractors
                    that meet deadlines and maintain uncompromising quality on every job site.
                </p>
<div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex items-center gap-4 p-4 rounded-lg bg-[#F4F6F8] border border-gray-100 transition-colors hover:border-gray-200">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1F2D3D] shadow-sm">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#1F2937]">Office Buildings</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-[#F4F6F8] border border-gray-100 transition-colors hover:border-gray-200">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1F2D3D] shadow-sm">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#1F2937]">Retail Spaces</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-[#F4F6F8] border border-gray-100 transition-colors hover:border-gray-200">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1F2D3D] shadow-sm">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#1F2937]">Multi-Family</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-[#F4F6F8] border border-gray-100 transition-colors hover:border-gray-200">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1F2D3D] shadow-sm">
<iconify-icon className="text-xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#1F2937]">Hospitality</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-[#F4F6F8] border border-gray-100 transition-colors hover:border-gray-200 sm:col-span-2">
<div className="w-10 h-10 rounded bg-white flex items-center justify-center text-[#1F2D3D] shadow-sm">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-base font-medium text-[#1F2937]">Industrial Facilities</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">The Flooring Partner That Keeps Your Project
                Moving</h2>
<p className="mt-4 text-lg text-gray-300">We understand that delays cost money. Our focus is pure reliability
                and execution from start to finish.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 gap-x-8 gap-y-8">

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-4xl text-[#F97316] mb-6" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Fast Mobilization</h3>
<p className="text-base text-gray-400 leading-relaxed">Flexible scheduling and quick deployment to keep up
            with your aggressive project timelines.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-4xl text-[#F97316] mb-6" icon="solar:chat-round-check-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Clear Communication</h3>
<p className="text-base text-gray-400 leading-relaxed">No guessing games. You get transparent updates from
            the initial bid right through to completion.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-4xl text-[#F97316] mb-6" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Experienced Crews</h3>
<p className="text-base text-gray-400 leading-relaxed">Our teams have deep commercial expertise, ensuring
            installation meets strict architectural specs.</p>
</div>

<div className="hover:bg-white/10 transition-colors lg:col-start-1 bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<iconify-icon className="text-4xl text-[#F97316] mb-6" icon="solar:clipboard-list-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Accurate Pricing</h3>
<p className="text-base text-gray-400 leading-relaxed">Detailed takeoffs mean competitive pricing with zero
    hidden surprises when the invoice arrives.</p>
</div>

<div className="hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<iconify-icon className="text-4xl text-[#F97316] mb-6" icon="solar:broom-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight mb-3">Clean Job Sites</h3>
<p className="text-base text-gray-400 leading-relaxed">We respect your site. We maintain professional,
            organized workspaces and leave it spotless.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F6F8] pt-24 pb-24" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1F2D3D]">Proven Performance Across Commercial Builds</h2>
<p className="mt-4 text-lg text-gray-600 max-w-2xl">A snapshot of our execution across various commercial sectors.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-5 relative">
<img alt="Retail concrete flooring" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77a79a32-814a-406d-a825-b38c696fae08_800w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-600">Retail</span>
<span className="text-xs text-gray-500">24,000 sq ft</span>
</div>
<h3 className="text-lg font-medium text-[#1F2D3D] tracking-tight">Porcelain Tile Project</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-5 relative">
<img alt="Office LVP flooring" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9154378b-1b61-4df0-b6fd-db0299d92f4a_800w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-600">Corporate Office</span>
<span className="text-xs text-gray-500">18,500 sq ft</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#1F2D3D]">Commercial LVP Integration</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-5 relative">
<img alt="Multi-family carpet and tile" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70f9eb5e-d20c-4b1f-bdc7-a176ac66b171_800w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-xs font-medium px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-600">Multi-Family</span>
<span className="text-xs text-gray-500">120 Units</span>
</div>
<h3 className="text-lg font-medium text-[#1F2D3D] tracking-tight">Rustic Oak Workplace Flooring Design</h3>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-900 border-white/5 pt-24 pb-24" id="process">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="lg:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">From Project Kickoff to Final Walkthrough</h2>
<p className="text-lg text-gray-400 leading-relaxed">Our streamlined workflow is designed to integrate seamlessly with your project management office, ensuring no detail is overlooked.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 relative gap-x-8 gap-y-8">

<div className="group flex flex-col items-start bg-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1">
<div className="mb-8 text-[#F97316] transition-transform duration-300 group-hover:scale-105">
<svg className="lucide lucide-clipboard-list" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full w-fit">Step 01</span>
<div className="">
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Project Review &amp; Take off</h3>
<p className="leading-relaxed text-sm text-gray-400">We review project plans and specifications in detail to ensure accurate scope alignment, material requirements, and seamless coordination with your team.</p>
</div>
</div>
</div>

<div className="group flex flex-col items-start bg-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1">
<div className="mb-8 text-[#F97316] transition-transform duration-300 group-hover:scale-105">
<svg className="lucide lucide-calendar-days" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full w-fit">Step 02</span>
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Scheduling &amp; Coordination</h3>
<p className="text-sm text-gray-400 leading-relaxed">We sync with your project managers to align delivery and mobilization with your master schedule.</p>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-start">
<div className="mb-8 text-[#F97316] transition-transform duration-300 group-hover:scale-105">
<svg className="lucide lucide-layers" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path className="" d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full w-fit">Step 03</span>
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Professional Installation</h3>
<p className="text-sm text-gray-400 leading-relaxed">Our experienced commercial crews execute the work efficiently, safely, and exactly to spec.</p>
</div>
</div>
</div>

<div className="group flex flex-col items-start bg-white/[0.02] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1">
<div className="mb-8 text-[#F97316] transition-transform duration-300 group-hover:scale-105">
<svg className="lucide lucide-check-circle" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full w-fit">Step 04</span>
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Final Inspection</h3>
<p className="text-sm text-gray-400 leading-relaxed">Thorough walkthrough, punch list completion, and formal sign-off to ensure 100% satisfaction.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F6F8] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1F2D3D] text-center mb-16">Trusted by
            Contractors Who Value Reliability</h2>
<div className="relative">
<style className="">
                #slider-aura-emm3j0389159wr94n::-webkit-scrollbar {
                    display: none;
                }
            </style>
<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 md:mx-0 md:px-0 pr-4 pb-6 pl-4 gap-x-6" id="slider-aura-emm3j0389159wr94n" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="flex-none w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center">
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full justify-between">
<div className="flex-grow">
<div className="flex gap-1 text-[#F97316] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-base italic text-gray-700 mb-8">"Skyline Flooring is by far
                                one of my favorite contractors to work with. Their level of communication, attention to
                                detail, expertise and dedication to the trade makes it a no-brainer for me. I have
                                always been able to count on them to work through any challenges that arise and on the
                                projects that don’t have challenges, the projects are a breeze. This is something I
                                value as a partner for my projects."</p>
</div>
<div className="flex items-center gap-3 border-gray-100 border-t pt-4">
<img alt="September Chase" className="flex-none w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d181f5e7-3f24-45ea-826e-7fa702c641f2_320w.webp"/>
<div className="">
<p className="text-sm font-semibold text-[#1F2D3D]">September Chase</p>
<p className="text-xs text-gray-500 mt-0.5">Senior Project Manager</p>
</div>
</div>
</div>
</div>

<div className="flex-none w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center">
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full justify-between">
<div className="flex-grow">
<div className="flex gap-1 text-[#F97316] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-base italic text-gray-700 mb-8">"I have worked with Skyline
                                Flooring on numerous projects, including an interior buildout of my company’s
                                headquarters. Their customer service is consistently responsive and easy to work with,
                                and their attention to detail truly sets them apart. Every project has been completed
                                efficiently with minimal disruption, and the quality of the finished floors always
                                exceeds expectations. I highly recommend Skyline Flooring for commercial projects of any
                                size."</p>
</div>
<div className="flex items-center gap-3 border-gray-100 border-t pt-4">
<img alt="David Miller" className="flex-none w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c857e6e-943c-4c74-af31-2f2e218eb806_320w.png"/>
<div className="">
<p className="text-sm font-semibold text-[#1F2D3D]">Mike Swarrow</p>
<p className="text-xs text-gray-500 mt-0.5">Director of Construction</p>
</div>
</div>
</div>
</div>

<div className="flex-none w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center">
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full justify-between">
<div className="flex-grow">
<div className="flex gap-1 text-[#F97316] mb-6">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-base italic text-gray-700 mb-8">"Accurate takeoffs and
                                transparent pricing are what we look for in our subs. Skyline provides exactly that,
                                along with a high level of craftsmanship that makes our final inspections a breeze.
                                Highly recommend for any commercial build."</p>
</div>
<div className="flex items-center gap-3 border-gray-100 border-t pt-4">
<img alt="Marcus Thompson" className="w-10 h-10 rounded-full object-cover flex-none" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;q=80&amp;fit=crop"/>
<div className="">
<p className="text-sm font-semibold text-[#1F2D3D]">Marcus Thompson</p>
<p className="text-xs text-gray-500 mt-0.5">Pre-Construction Manager</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 mt-8 gap-x-4 gap-y-4 items-center justify-center">
<button className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-[#F97316] hover:border-[#F97316] hover:shadow-md transition-all active:scale-95 group/btn" onclick="document.getElementById('slider-aura-emm3j0389159wr94n').scrollBy({left: -document.getElementById('slider-aura-emm3j0389159wr94n').offsetWidth, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex hover:text-[#F97316] hover:border-[#F97316] hover:shadow-md transition-all active:scale-95 group/btn text-gray-500 bg-white w-11 h-11 border-gray-200 border rounded-full items-center justify-center" onclick="document.getElementById('slider-aura-emm3j0389159wr94n').scrollBy({left: document.getElementById('slider-aura-emm3j0389159wr94n').offsetWidth, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>


</div>
</div>
</section>

<section className="relative py-24 lg:py-32 bg-[#1F2D3D] overflow-hidden" id="bid">

<div className="absolute inset-0">
<img alt="Commercial interior background" className="w-full h-full object-cover opacity-20 filter blur-sm" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-slate-900/50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative" id="basic-form">
<h2 className="lg:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Need a Flooring Partner Who Delivers?
    </h2>
<p className="lg:text-xl text-lg text-gray-300 max-w-2xl mr-auto mb-10 ml-auto">Let’s review your blueprints and provide a competitive, clear bid. No fluff, just accurate pricing and reliable execution.
</p>
<form className="text-left bg-white max-w-md border-gray-100 border rounded-xl mr-auto mb-8 ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl">
<div className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
<input className="focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all text-sm bg-gray-50 w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" placeholder="Enter your full name" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
<input className="focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all text-sm bg-gray-50 w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" placeholder="name@company.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
<input className="focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all text-sm bg-gray-50 w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
<textarea className="focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all text-sm bg-gray-50 w-full border-gray-200 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4 resize-none" placeholder="How can we help with your flooring project?" rows="4"></textarea>
</div>
<button className="w-full bg-[#F97316] hover:bg-orange-500 text-white font-semibold py-3 rounded-md transition-colors mt-2 text-base shadow-sm" type="submit">
                        Submit Inquiry
                    </button>
</div>
</form>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-[#F97316]" icon="solar:bolt-linear"></iconify-icon>
<span className="">Fast 48-hour response</span>
</div>
<div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-[#F97316]" icon="solar:shield-check-linear"></iconify-icon>
<span className="">Clear pricing</span>
</div>
<div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-[#F97316]" icon="solar:eye-linear"></iconify-icon>
<span className="">No surprises</span>
</div>
</div>
</div>
</section>

<footer className="md:text-left text-gray-400 text-center bg-gray-900 border-white/10 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
<div className="">
<span className="inline-block mb-1"><img alt="Skyline Flooring Logo" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-20 object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7f09fa7-d59b-4b3c-8cb9-e7c49ccae01b_800w.png"/></span>
<p className="text-xs mt-2">Commercial Flooring Subcontractors</p>
</div>
<div className="flex justify-center md:justify-start gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
<div className="md:text-right text-xs">© 2026 Skyline Flooring. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
