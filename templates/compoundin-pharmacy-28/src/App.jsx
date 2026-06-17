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
      

<header className="sticky top-0 z-50 w-full bg-[#FFFFFF]/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-[#3F5669] rounded-full flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="plus"></i>
</div>
<span className="font-heading font-semibold text-lg tracking-tight text-[#3F5669]">PHARMACY</span>
</div>

<nav className="hidden md:flex gap-8 items-center">
<a className="font-heading text-sm font-medium text-[#464646] hover:text-[#048489] transition-colors" href="#">Providers</a>
<a className="font-heading text-sm font-medium text-[#464646] hover:text-[#048489] transition-colors" href="#">Patients</a>
<a className="font-heading text-sm font-medium text-[#464646] hover:text-[#048489] transition-colors" href="#">Resources</a>
<a className="font-heading text-sm font-medium text-[#464646] hover:text-[#048489] transition-colors" href="#">Products</a>
<a className="font-heading text-sm font-medium text-[#464646] hover:text-[#048489] transition-colors" href="#">Company</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden lg:flex gap-6 items-center border-r border-gray-200 pr-6">
<a className="font-heading text-xs font-medium text-[#464646] hover:text-[#048489] uppercase tracking-wide" href="#">Refill</a>
<a className="font-heading text-xs font-medium text-[#464646] hover:text-[#048489] uppercase tracking-wide" href="#">Track Order</a>
</div>
<button className="bg-[#3F5669] hover:bg-[#244091] text-white font-heading text-sm font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-sm">
                        Provider Access
                    </button>

<button className="md:hidden text-[#464646]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
<div className="lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-4xl mx-auto">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-light text-[#3F5669] tracking-tight font-heading mb-8">
                    Primary Value Proposition Headline
                </h1>
<p className="text-xl md:text-2xl text-[#464646] leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                    One-sentence explanation describing the core positioning or benefit of the compounding approach.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
<button className="bg-[#3F5669] hover:bg-[#244091] text-white font-heading text-base font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
                        Primary Conversion Action
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-[#EFEDE8] hover:bg-gray-200 text-[#3F5669] font-heading text-base font-medium py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                        Secondary Supporting Action
                    </button>
</div>
<div className="max-w-xl mx-auto text-lg text-[#464646]/80 leading-relaxed">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
</section>

<section className="py-24 bg-[#EFEDE8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-normal text-[#3F5669] tracking-tight mb-4">
                    Core Value Pillars Overview
                </h2>
<p className="text-xl text-[#464646] leading-relaxed">
                    Brief explanation of foundational strengths. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:p-10 hover:border-[#048489]/30 transition-colors duration-300 bg-white border-gray-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#EFEDE8] flex items-center justify-center mb-6 text-[#048489]">
<i className="w-6 h-6" data-lucide="microscope"></i>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] mb-4 tracking-tight">Value Pillar One</h3>
<p className="text-lg leading-relaxed text-[#464646]/90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 hover:border-[#048489]/30 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-[#EFEDE8] flex items-center justify-center mb-6 text-[#048489]">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] mb-4 tracking-tight">Value Pillar Two</h3>
<p className="text-lg leading-relaxed text-[#464646]/90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
</div>

<div className="md:p-10 hover:border-[#048489]/30 transition-colors duration-300 bg-white border-gray-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#EFEDE8] flex items-center justify-center mb-6 text-[#048489]">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] mb-4 tracking-tight">Value Pillar Three</h3>
<p className="text-lg leading-relaxed text-[#464646]/90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="font-heading text-3xl md:text-4xl font-normal text-[#3F5669] tracking-tight">
                    Key Audience Pathways
                </h2>
<div className="h-px bg-gray-200 flex-grow ml-8 mb-2 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative block h-[400px] bg-[#EFEDE8] rounded-lg overflow-hidden border border-gray-100" href="#">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div className="">
<span className="font-heading text-xs font-semibold tracking-wider uppercase text-[#048489] mb-2 block">Pathway</span>
<h3 className="font-heading text-2xl font-medium text-[#3F5669] tracking-tight">Providers</h3>
</div>
<div>
<p className="text-lg text-[#464646] mb-6 opacity-90">Description placeholder for providers seeking precision.</p>
<span className="inline-flex items-center text-[#3F5669] font-heading text-sm font-medium group-hover:gap-2 transition-all">
                                Access Portal <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>

<a className="group relative block h-[400px] bg-[#F4F4F5] rounded-lg overflow-hidden border border-gray-100" href="#">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<span className="font-heading text-xs font-semibold tracking-wider uppercase text-[#048489] mb-2 block">Pathway</span>
<h3 className="font-heading text-2xl font-medium text-[#3F5669] tracking-tight">Patients</h3>
</div>
<div>
<p className="text-lg text-[#464646] mb-6 opacity-90">Description placeholder for patients needing care.</p>
<span className="inline-flex items-center text-[#3F5669] font-heading text-sm font-medium group-hover:gap-2 transition-all">
                                Learn More <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>

<a className="group relative block h-[400px] bg-[#EFEDE8] rounded-lg overflow-hidden border border-gray-100" href="#">
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div>
<span className="font-heading text-xs font-semibold tracking-wider uppercase text-[#048489] mb-2 block">Library</span>
<h3 className="font-heading text-2xl font-medium text-[#3F5669] tracking-tight">Resources</h3>
</div>
<div>
<p className="text-lg text-[#464646] mb-6 opacity-90">Description placeholder for educational materials.</p>
<span className="inline-flex items-center text-[#3F5669] font-heading text-sm font-medium group-hover:gap-2 transition-all">
                                View Library <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-normal text-[#3F5669] tracking-tight mb-4">
                    Areas of Care / Service Categories
                </h2>
<h3 className="font-heading text-xl text-[#464646] font-light">
                    Overview describing service breadth and clinical expertise.
                </h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Dermatology</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Hormone Health</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Pain Management</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Pediatrics</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Veterinary</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Wellness</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Dental</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Podiatry</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Gastroenterology</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Sports Medicine</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Urology</h4>
</div>
<div className="p-6 border border-gray-200 rounded-lg hover:border-[#048489] hover:bg-[#EFEDE8]/50 transition-colors duration-200 cursor-pointer">
<h4 className="font-heading text-base font-medium text-[#3F5669]">Ophthalmology</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EFEDE8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="font-heading text-3xl md:text-4xl font-normal text-[#3F5669] tracking-tight mb-4">
                        Featured Capabilities
                    </h2>
<p className="text-xl text-[#464646] mb-8">
                        Explanation of how offerings are grouped to provide tailored solutions for complex needs.
                    </p>
<a className="text-[#244091] font-heading font-medium hover:opacity-75 inline-flex items-center" href="#">
                        View All Capabilities <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="text-[#F4B11B] mb-4"><i className="w-6 h-6" data-lucide="flask-conical"></i></div>
<h4 className="font-heading text-xl font-medium text-[#3F5669] mb-3">Custom Formulations</h4>
<p className="text-lg text-[#464646]/80 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="text-[#F4B11B] mb-4"><i className="w-6 h-6" data-lucide="shield-check"></i></div>
<h4 className="font-heading text-xl font-medium text-[#3F5669] mb-3">Quality Assurance</h4>
<p className="text-lg text-[#464646]/80 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="text-[#F4B11B] mb-4"><i className="w-6 h-6" data-lucide="truck"></i></div>
<h4 className="font-heading text-xl font-medium text-[#3F5669] mb-3">Rapid Fulfillment</h4>
<p className="text-lg text-[#464646]/80 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="text-[#F4B11B] mb-4"><i className="w-6 h-6" data-lucide="activity"></i></div>
<h4 className="font-heading text-xl font-medium text-[#3F5669] mb-3">Clinical Support</h4>
<p className="text-lg text-[#464646]/80 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>

<div className="aspect-[4/5] bg-gray-100 rounded-lg relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<i className="w-12 h-12 opacity-20" data-lucide="image"></i>
</div>
</div>
</div>
<div>
<span className="font-heading text-xs font-semibold tracking-wider uppercase text-[#048489] mb-4 block">Our Approach</span>
<h2 className="font-heading text-3xl md:text-5xl font-light text-[#3F5669] tracking-tight mb-8">
                        Brand Philosophy and Approach
                    </h2>
<h3 className="text-2xl text-[#464646] mb-8 font-light italic leading-relaxed">
                        Editorial introduction describing values and partnership with an emphasis on human warmth.
                    </h3>
<div className="prose prose-lg text-[#464646] leading-relaxed mb-10">
<p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed metus ut leo tincidunt aliquet. Integer molestie magna ac dolor vestibulum, vitae luctus nibh finibus.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
</div>
<a className="text-[#3F5669] font-heading font-medium border-b border-[#3F5669] pb-1 hover:text-[#244091] hover:border-[#244091] transition-all" href="#">
                        Read Our Story
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EFEDE8] border-t border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

<div className="flex flex-col items-start p-8 lg:p-12 bg-white rounded-xl border border-gray-100">
<div className="w-10 h-10 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-6 text-[#244091]">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<h2 className="font-heading text-2xl md:text-3xl font-medium text-[#3F5669] tracking-tight mb-4">
                        Primary Conversion Prompt
                    </h2>
<p className="text-lg text-[#464646] mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
<button className="bg-[#3F5669] hover:bg-[#244091] text-white font-heading text-sm font-medium py-4 px-8 rounded-full transition-all duration-300 w-full md:w-auto">
                        Primary Action
                    </button>
</div>

<div className="flex flex-col items-start p-8 lg:p-12 bg-white rounded-xl border border-gray-100">
<div className="w-10 h-10 rounded-full bg-[#ECFDF5] flex items-center justify-center mb-6 text-[#048489]">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h2 className="font-heading text-2xl md:text-3xl font-medium text-[#3F5669] tracking-tight mb-4">
                        Secondary Conversion Prompt
                    </h2>
<p className="text-lg text-[#464646] mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
<button className="bg-white border border-[#3F5669] text-[#3F5669] hover:bg-gray-50 font-heading text-sm font-medium py-4 px-8 rounded-full transition-all duration-300 w-full md:w-auto">
                        Secondary Action
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-heading text-3xl md:text-4xl font-normal text-[#3F5669] tracking-tight mb-2">
                        Educational Resources and Insights
                    </h2>
<p className="text-lg text-[#464646] opacity-80">Latest clinical updates and compound news.</p>
</div>
<a className="hidden md:inline-flex items-center text-[#048489] font-heading font-medium hover:text-[#036c70]" href="#">
                    View All <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-[16/9] rounded-lg mb-6 overflow-hidden">
<div className="w-full h-full bg-[#EFEDE8] flex items-center justify-center">
<i className="text-gray-300 w-8 h-8" data-lucide="file"></i>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-heading font-semibold text-[#048489] uppercase tracking-wider">Clinical</span>
<span className="text-xs text-gray-400">Oct 12, 2023</span>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] group-hover:text-[#244091] transition-colors mb-2">
                        Placeholder Title for Resource Article
                    </h3>
<p className="text-base text-[#464646] line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-[16/9] rounded-lg mb-6 overflow-hidden">
<div className="w-full h-full bg-[#EFEDE8] flex items-center justify-center">
<i className="text-gray-300 w-8 h-8" data-lucide="file"></i>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-heading font-semibold text-[#048489] uppercase tracking-wider">Updates</span>
<span className="text-xs text-gray-400">Sep 28, 2023</span>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] group-hover:text-[#244091] transition-colors mb-2">
                        Placeholder Title for Regulatory News
                    </h3>
<p className="text-base text-[#464646] line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="bg-gray-100 aspect-[16/9] rounded-lg mb-6 overflow-hidden">
<div className="w-full h-full bg-[#EFEDE8] flex items-center justify-center">
<i className="text-gray-300 w-8 h-8" data-lucide="file"></i>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-heading font-semibold text-[#048489] uppercase tracking-wider">Patient Care</span>
<span className="text-xs text-gray-400">Sep 15, 2023</span>
</div>
<h3 className="font-heading text-xl font-medium text-[#3F5669] group-hover:text-[#244091] transition-colors mb-2">
                        Placeholder Title for Treatment Guide
                    </h3>
<p className="text-base text-[#464646] line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#3F5669] text-white pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="plus"></i>
</div>
<span className="font-heading font-semibold text-lg tracking-tight">PHARMACY</span>
</div>
<p className="text-white/70 text-base max-w-sm mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
</div>
<div>
<h4 className="font-heading font-medium text-white mb-6">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Providers</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Patients</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Products</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-medium text-white mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Track Order</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-medium text-white mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-white/70 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/50 text-sm">© 2023 Compounding Pharmacy Brand. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-white/50 hover:text-white text-sm" href="#">Privacy Policy</a>
<a className="text-white/50 hover:text-white text-sm" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
