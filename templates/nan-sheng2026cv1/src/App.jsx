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
      
<div className="uppercase text-xs font-medium text-[#F5F3EF] tracking-wide text-center bg-[#1C1C1C] pt-3 pr-4 pb-3 pl-4">
<span className="">2026 personal Profolio</span>
</div>
<nav className="sticky z-50 flex transition-all duration-300 bg-[#F5F3EF]/90 w-full border-stone-200/50 border-b pt-5 pr-6 pb-5 pl-6 top-0 backdrop-blur-sm items-center justify-between">
<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="md:text-2xl leading-none uppercase text-xl text-stone-900 tracking-tight font-serif" href="#">Nan Sheng</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Personal Info</a>
<a className="hover:text-stone-900 transition-colors" href="#">Publications</a>
<a className="hover:text-stone-900 transition-colors" href="#">Design Projects</a>
<a className="hover:text-stone-900 transition-colors" href="#">Student Works</a>
<a className="hover:bg-stone-700 transition-colors duration-300 text-[#F5F3EF] bg-stone-900 rounded-full ml-4 pt-2.5 pr-5 pb-2.5 pl-5" href="#">Contact me</a>
</div>
<div className="flex items-center gap-4 md:hidden">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</nav>
<header className="min-h-[90vh] flex flex-col md:px-0 overflow-hidden text-center w-full pt-20 pr-4 pb-20 pl-4 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EBE8E0] rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="z-10 max-w-5xl mr-auto ml-auto space-y-8">
<span className="inline-block uppercase text-xs font-medium text-stone-500 tracking-widest bg-white/30 border-stone-300 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Elevate Your Authority</span>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl text-stone-900 tracking-tighter mix-blend-darken">Bridging design practice with studio pedagogy.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-600 max-w-xl mt-6 mr-auto ml-auto">Senior Lecturer in Information Design. I focus on developing resilient, practical design skills and critical thinking in the next generation of digital creators, transitioning industry workflows into the classroom.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
</div>
</div>
</header>
<section className="border-y overflow-hidden bg-[#EBE8E0] border-stone-300 pt-4 pb-4">
<div className="marquee-container w-full whitespace-nowrap overflow-hidden">
<div className="animate-scroll inline-block">
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest"></span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest">Brand Strategy</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest">information design</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest">GRAPHIC DESIGN</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest">INTERACTION DESIGN</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="md:text-base uppercase text-sm font-medium text-stone-800 tracking-widest">SERVICE DESIGN</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="text-sm md:text-base font-medium tracking-widest uppercase text-stone-800">Signature Websites</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="text-sm md:text-base font-medium tracking-widest uppercase text-stone-800">Social Content Systems</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="text-sm md:text-base font-medium tracking-widest uppercase text-stone-800">Video Production</span>
<span className="text-2xl md:text-4xl font-serif italic px-8 text-stone-400">•</span>
<span className="text-sm md:text-base font-medium tracking-widest uppercase text-stone-800">Paid Creative</span>
</div>
</div>
</section>
<section className="md:px-12 border-stone-200 border-t pt-20 pr-6 pb-20 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row gap-6 mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h3 className="text-4xl md:text-5xl text-stone-900 mb-2 tracking-tight">Premium Engagements</h3>
<p className="text-stone-500">Cohesive execution across every digital touchpoint.</p>
</div>
<a className="text-stone-900 border-b border-stone-900 pb-1 hover:opacity-60 transition-opacity" href="#">Explore all services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div className="group md:p-10 hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col bg-[#EBE8E0] h-full rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Brand Strategy &amp; 
Graphic Design</h4>
<p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                        Define your unique market positioning, content pillars, and visual identity before a single asset is created.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="group md:p-10 hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col bg-[#EBE8E0] h-full rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Interaction Design</h4>
<p className="leading-relaxed flex-grow text-stone-600 mb-8">
                        Bespoke, conversion-focused digital platforms designed to reflect your authority and capture high-value opportunities.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="group bg-[#EBE8E0] p-8 md:p-10 rounded-2xl hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col h-full">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Service Systems</h4>
<p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                        Editorial-grade content engines that scale your thought leadership across LinkedIn, Instagram, and specialized networks.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="group bg-[#EBE8E0] p-8 md:p-10 rounded-2xl hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col h-full">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Student Works</h4>
<p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                        Cinematic video production and campaign assets that elevate your speaking engagements, book launches, and flagship offers.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="group bg-[#EBE8E0] p-8 md:p-10 rounded-2xl hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col h-full">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Mentoring Process</h4>
<p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                        Cohesive visual systems for high-stakes launches, ensuring every touchpoint communicates premium value and drives conversion.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
<div className="group md:p-10 hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer flex flex-col bg-[#EBE8E0] h-full rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-stone-900 text-[#F5F3EF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-3xl text-stone-900 tracking-tight mb-4">Workshop &amp; Exhibition</h4>
<p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                        A dedicated creative partnership for continuous brand evolution, premium content production, and digital platform optimization.
                    </p>
<span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-stone-900 mt-auto">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>
</div>
</section>
<section className="md:px-12 bg-[#F5F3EF] pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-4xl mr-auto ml-auto">
<iconify-icon className="inline-block text-5xl text-stone-900 mb-4" height="48" icon="solar:shield-check-linear" strokeWidth="1.5" style={{color: 'rgb(28, 25, 23)'}} width="48"></iconify-icon>
<h4 className="md:text-5xl leading-tight text-3xl text-stone-900 tracking-tight font-serif mt-8">"The classroom must function as a safe iteration lab. I believe in teaching design not as a series of software tutorials, but as a framework for problem-solving. My goal is to guide students to discover their own process through rigorous critique, making mistakes early, and understanding the 'why' behind every pixel."

</h4>
<div className="mt-10 pt-8 border-t border-stone-300/60 flex flex-col items-center justify-center space-y-2">
<p className="uppercase text-sm font-medium text-stone-600 tracking-wide">Built for Founders • Executives • Authors • Speakers</p>
<p className="text-stone-500 text-sm">Transparent process. Editorial standards. Real outcomes.</p>
</div>
</div>
</section>
<section className="md:px-12 bg-[#EBE8E0] border-stone-200 border-t pt-20 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2 space-y-6">
<h3 className="text-4xl md:text-5xl text-stone-900 tracking-tight">Selected Work &amp; Transformations</h3>
<p className="text-lg text-stone-600 leading-relaxed">
                    Explore our archive of premium brand transformations. From author platform redesigns to executive thought leadership content systems, our work is defined by strategic clarity, cohesive execution, and editorial-grade creative direction.
                </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center text-stone-800">
<iconify-icon className="mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Personal Brand Websites
                    </li>
<li className="flex items-center text-stone-800">
<iconify-icon className="mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Thought Leadership Ecosystems
                    </li>
<li className="flex items-center text-stone-800">
<iconify-icon className="mr-3 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Speaker &amp; Book Launch Campaigns
                    </li>
</ul>
<div className="pt-6">
<button className="px-8 py-3 bg-transparent border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-[#F5F3EF] transition-all duration-300">
                        View Portfolio
                    </button>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="aspect-[4/3] bg-white rounded-xl shadow-lg border border-stone-200 p-8 flex flex-col justify-between rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="w-1/3 h-4 bg-stone-200 rounded"></div>
<div className="w-8 h-8 bg-stone-100 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="w-full h-px bg-stone-100"></div>
<div className="w-3/4 h-3 bg-stone-100 rounded"></div>
<div className="w-5/6 h-3 bg-stone-100 rounded"></div>
<div className="w-2/3 h-3 bg-stone-100 rounded"></div>
</div>
<div className="flex justify-between items-center mt-8">
<div className="px-4 py-2 bg-stone-900 text-white text-xs rounded">View Case Study</div>
<span className="text-stone-300 text-4xl font-serif italic">Work.</span>
</div>
</div>
</div>
</div>
</section>
<footer className="md:px-12 text-[#F5F3EF] bg-[#1C1C1C] pt-20 pr-6 pb-10 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-16">
<div className="md:col-span-1 space-y-6">
<a className="text-2xl font-serif tracking-tight uppercase" href="#">PREMIUM BRANDS</a>
<p className="text-stone-400 text-sm leading-relaxed">
                    Elevating personal brands for the world's most ambitious leaders. A full-service creative agency.
                </p>
<div className="flex space-x-4">
<a className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-[#F5F3EF] hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:bg-[#F5F3EF] hover:text-stone-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1">
<h5 className="font-serif text-xl mb-6 text-stone-300 tracking-tight">Explore</h5>
<ul className="text-sm text-stone-400 space-y-3">
<li className=""><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Work</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-serif text-xl mb-6 text-stone-300 tracking-tight">Services</h5>
<ul className="space-y-3 text-sm text-stone-400">
<li><a className="hover:text-white transition-colors" href="#">Brand Strategy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Signature Websites</a></li>
<li><a className="hover:text-white transition-colors" href="#">Content Systems</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-serif text-xl mb-6 text-stone-300 tracking-tight">Inquiries</h5>
<p className="text-xs text-stone-500 mb-6 leading-relaxed">Discuss your brand goals, digital presence, and potential scope.</p>
<a className="inline-block bg-[#F5F3EF] text-stone-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-300 transition-colors text-center w-full" href="#">
                     Book a Brand Audit
                 </a>
</div>
</div>
<div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<div className="space-y-1 text-center md:text-left">
<p>© 2024 Premium Brands Agency. All rights reserved.</p>
</div>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
