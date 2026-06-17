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
bluegray: '#3F5669',
teal: '#048489',
blue: '#244091',
dark: '#464646',
gold: '#F4B11B',
warm: '#EFEDE8',
white: '#FFFFFF',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Lora', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



                    const categories = ['Dermatology', 'Men\'s Health', 'Women\'s Health', 'Pediatrics', 'Veterinary', 'Pain Management', 'Endocrinology', 'Dentistry', 'Podiatry', 'Gastroenterology', 'Ophthalmology', 'Sports Medicine'];
                    categories.forEach(cat => {
                        document.write(`
                            <a href="#" class="bg-white p-6 rounded-lg border border-transparent hover:border-brand-teal/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center justify-center h-32">
                                <span class="text-brand-blue font-medium group-hover:text-brand-teal transition-colors">${cat}</span>
                            </a>
                        `);
                    });
                


        // Initialize Lucide Icons
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
      

<nav className="fixed w-full z-50 bg-brand-white/90 backdrop-blur-md border-b border-brand-bluegray/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-brand-blue rounded-full flex items-center justify-center">
<i className="text-white h-5 w-5" data-lucide="plus"></i>
</div>
<span className="text-lg font-medium tracking-tight text-brand-blue">Compounding<span className="font-light opacity-70">Rx</span></span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium hover:text-brand-teal transition-colors" href="#">Providers</a>
<a className="text-sm font-medium hover:text-brand-teal transition-colors" href="#">Patients</a>
<a className="text-sm font-medium hover:text-brand-teal transition-colors" href="#">Resources</a>
<a className="text-sm font-medium hover:text-brand-teal transition-colors" href="#">Products</a>
<a className="text-sm font-medium hover:text-brand-teal transition-colors" href="#">Company</a>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4 text-xs font-medium text-brand-bluegray">
<a className="hover:text-brand-teal" href="#">Refill</a>
<span className="w-px h-3 bg-brand-bluegray/30"></span>
<a className="hover:text-brand-teal" href="#">Track Order</a>
</div>
<a className="bg-brand-blue text-brand-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-brand-teal transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="#">
                    Provider Access
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-warm">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-white border border-brand-bluegray/20">
<span className="w-2 h-2 rounded-full bg-brand-teal"></span>
<span className="text-xs font-medium tracking-wide text-brand-bluegray uppercase">Reimagining Formulation</span>
</div>
<h1 className="text-5xl lg:text-7xl font-light tracking-tighter text-brand-blue leading-[1.1]">
                    Primary Value <br/>
<span className="font-serif italic text-brand-teal">Proposition Headline</span>
</h1>
<p className="text-lg lg:text-xl text-brand-bluegray font-serif leading-relaxed max-w-md">
                    One-sentence explanation describing the core positioning or benefit that establishes immediate credibility and trust.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-brand-blue text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-teal transition-all duration-300 flex items-center gap-2 group">
                        Get Started
                        <i className="h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3.5 rounded-full font-medium text-brand-blue border border-brand-blue/20 hover:bg-white transition-colors">
                        Learn More
                    </button>
</div>
<div className="pt-8 border-t border-brand-dark/5">
<p className="text-sm text-brand-bluegray/80 max-w-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block">

<div className="absolute top-0 right-10 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out z-10">
<img alt="Lab Context" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute bottom-10 left-10 w-72 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-brand-warm transform hover:scale-[1.02] transition-transform duration-700 ease-out delay-100 z-20">
<img alt="Pill Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute bottom-20 right-20 bg-brand-white p-6 rounded-xl shadow-lg z-30 max-w-[200px]">
<i className="text-brand-teal h-6 w-6 mb-3" data-lucide="activity"></i>
<p className="text-xs font-serif text-brand-dark">"Precision in every formulation defines our standard."</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-brand-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-blue mb-4">Core Value Pillars Overview</h2>
<p className="text-lg text-brand-bluegray font-serif leading-relaxed">
                    Intro subhead describing foundational strengths. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="h-12 w-12 rounded-lg bg-brand-warm flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 transition-colors">
<i className="text-brand-blue group-hover:text-brand-teal transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-brand-blue mb-3">Clinical Rigor</h3>
<p className="text-brand-bluegray leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros nec ante ultrices pulvinar.
                    </p>
</div>

<div className="group">
<div className="h-12 w-12 rounded-lg bg-brand-warm flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 transition-colors">
<i className="text-brand-blue group-hover:text-brand-teal transition-colors" data-lucide="microscope"></i>
</div>
<h3 className="text-xl font-medium text-brand-blue mb-3">Custom Formulation</h3>
<p className="text-brand-bluegray leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros nec ante ultrices pulvinar.
                    </p>
</div>

<div className="group">
<div className="h-12 w-12 rounded-lg bg-brand-warm flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 transition-colors">
<i className="text-brand-blue group-hover:text-brand-teal transition-colors" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-brand-blue mb-3">Patient Partnership</h3>
<p className="text-brand-bluegray leading-relaxed text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros nec ante ultrices pulvinar.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-blue text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<h2 className="text-4xl md:text-5xl font-light tracking-tight">Key Audience <br/>Pathways</h2>
<div className="h-px w-full md:w-64 bg-white/20 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative bg-brand-teal p-8 md:p-12 rounded-2xl md:col-span-2 overflow-hidden hover:bg-opacity-90 transition-all" href="#">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
<i className="w-64 h-64" data-lucide="stethoscope"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
<span className="text-xs font-semibold tracking-wide uppercase">For Professionals</span>
</div>
<h3 className="text-3xl font-normal mb-4">Providers</h3>
<p className="text-white/80 max-w-md font-serif text-lg leading-relaxed">
                                Description placeholder regarding advanced partnership tools and prescribing efficiency.
                            </p>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium">
<span>Access Portal</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative bg-brand-bluegray p-8 rounded-2xl overflow-hidden hover:bg-[#4a6378] transition-all" href="#">
<div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
<span className="text-xs font-semibold tracking-wide uppercase">For Health</span>
</div>
<h3 className="text-2xl font-normal mb-3">Patients</h3>
<p className="text-white/80 font-serif text-base leading-relaxed">
                                Description placeholder focusing on care, delivery, and personalized support.
                            </p>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium">
<span>Get Started</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative bg-white text-brand-dark p-8 rounded-2xl overflow-hidden md:col-span-3 lg:col-span-3 hover:shadow-xl transition-all" href="#">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-normal text-brand-blue mb-2">Resources &amp; Clinical Data</h3>
<p className="text-brand-bluegray font-serif max-w-xl">
                                Description placeholder for formulary access and educational libraries.
                            </p>
</div>
<div className="h-12 w-12 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-brand-warm/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-light tracking-tight text-brand-blue mb-4">Areas of Care / Service Categories</h2>
<p className="text-brand-bluegray font-serif">Subhead describing the breadth of medical specialties covered.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl font-light tracking-tight text-brand-blue mb-2">Featured Capabilities</h2>
<p className="text-brand-bluegray font-serif">Explaining our advanced technical grouping logic.</p>
</div>

<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-brand-bluegray/20 flex items-center justify-center hover:bg-brand-warm transition-colors">
<i className="w-4 h-4 text-brand-blue" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-brand-bluegray/20 flex items-center justify-center hover:bg-brand-warm transition-colors">
<i className="w-4 h-4 text-brand-blue" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto px-6 max-w-7xl mx-auto pb-8 no-scrollbar snap-x">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-brand-warm rounded-xl p-8 flex flex-col justify-between h-[400px] group cursor-pointer hover:bg-brand-bluegray hover:text-white transition-colors duration-500">
<div>
<span className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-4 block">Technology</span>
<h3 className="text-2xl font-light mb-4">Sterile Compounding</h3>
<p className="font-serif text-sm leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
</div>
<div className="w-full h-px bg-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Learn more</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-brand-warm rounded-xl p-8 flex flex-col justify-between h-[400px] group cursor-pointer hover:bg-brand-bluegray hover:text-white transition-colors duration-500">
<div>
<span className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-4 block">Process</span>
<h3 className="text-2xl font-light mb-4">Quality Assurance</h3>
<p className="font-serif text-sm leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
</div>
<div className="w-full h-px bg-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Learn more</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-brand-warm rounded-xl p-8 flex flex-col justify-between h-[400px] group cursor-pointer hover:bg-brand-bluegray hover:text-white transition-colors duration-500">
<div>
<span className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-4 block">Facility</span>
<h3 className="text-2xl font-light mb-4">Clean Room Standards</h3>
<p className="font-serif text-sm leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
</div>
<div className="w-full h-px bg-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Learn more</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-brand-warm rounded-xl p-8 flex flex-col justify-between h-[400px] group cursor-pointer hover:bg-brand-bluegray hover:text-white transition-colors duration-500">
<div>
<span className="text-xs font-semibold tracking-wider uppercase opacity-60 mb-4 block">Innovation</span>
<h3 className="text-2xl font-light mb-4">Digital Integrations</h3>
<p className="font-serif text-sm leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
</div>
<div className="w-full h-px bg-current opacity-20 my-6"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Learn more</span>
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-warm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] bg-brand-bluegray rounded-lg overflow-hidden relative">
<img alt="Pharmacist working" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-brand-blue/20"></div>
</div>

<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-gold rounded-full opacity-20 blur-2xl"></div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center h-full pt-8">
<span className="text-brand-teal font-medium tracking-wider uppercase text-xs mb-6">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-blue mb-8">
                        Brand Philosophy <br/>
<span className="font-serif italic text-brand-bluegray">and Approach</span>
</h2>
<p className="text-xl md:text-2xl font-serif text-brand-dark leading-relaxed mb-8">
                        "We believe that precision medicine is the future of patient care. Our commitment goes beyond the prescription—building partnerships founded on transparency and clinical excellence."
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<p className="text-brand-bluegray text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                        </p>
<p className="text-brand-bluegray text-sm leading-relaxed">
                            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                        </p>
</div>
<a className="text-brand-blue font-medium hover:text-brand-teal transition-colors flex items-center gap-2" href="#">
                        Read our story <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

<div className="bg-brand-blue rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-brand-teal/20 transform scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center"></div>
<div className="relative z-10">
<h3 className="text-3xl font-light mb-4">Primary Conversion Prompt</h3>
<p className="text-white/80 font-serif mb-8 max-w-sm mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                    </p>
<button className="bg-white text-brand-blue px-8 py-3 rounded-full font-medium hover:bg-brand-gold hover:text-brand-dark transition-all shadow-lg">
                        Primary Action
                    </button>
</div>
</div>

<div className="bg-brand-warm rounded-2xl p-10 md:p-16 text-brand-blue text-center border border-brand-bluegray/10">
<h3 className="text-3xl font-light mb-4">Secondary Conversion Prompt</h3>
<p className="text-brand-bluegray font-serif mb-8 max-w-sm mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
<button className="bg-transparent border border-brand-blue text-brand-blue px-8 py-3 rounded-full font-medium hover:bg-brand-blue hover:text-white transition-all">
                    Secondary Action
                </button>
</div>
</div>
</section>

<section className="py-24 bg-brand-white border-t border-brand-dark/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-light tracking-tight text-brand-blue">Educational Resources <br/>and Insights</h2>
<a className="text-sm font-medium text-brand-bluegray hover:text-brand-teal hidden md:block" href="#">View all resources</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-brand-warm rounded-lg mb-6 overflow-hidden">

<div className="w-full h-full bg-brand-bluegray/10 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Clinical Study</span>
<h3 className="text-xl font-medium text-brand-blue mt-2 mb-3 group-hover:text-brand-teal transition-colors">Placeholder Title for Clinical Research Outcome</h3>
<p className="text-sm text-brand-bluegray line-clamp-3 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
<div className="flex items-center text-sm font-medium text-brand-blue">
                        Read Findings <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-brand-warm rounded-lg mb-6 overflow-hidden">
<div className="w-full h-full bg-brand-bluegray/10 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Industry News</span>
<h3 className="text-xl font-medium text-brand-blue mt-2 mb-3 group-hover:text-brand-teal transition-colors">Changes in Compounding Regulations 2024</h3>
<p className="text-sm text-brand-bluegray line-clamp-3 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
<div className="flex items-center text-sm font-medium text-brand-blue">
                        Read Article <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-brand-warm rounded-lg mb-6 overflow-hidden">
<div className="w-full h-full bg-brand-bluegray/10 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-brand-teal uppercase tracking-wide">Provider Guide</span>
<h3 className="text-xl font-medium text-brand-blue mt-2 mb-3 group-hover:text-brand-teal transition-colors">Optimizing Patient Adherence Strategies</h3>
<p className="text-sm text-brand-bluegray line-clamp-3 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
<div className="flex items-center text-sm font-medium text-brand-blue">
                        Download Guide <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-brand-warm pt-20 pb-10 border-t border-brand-dark/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 bg-brand-blue rounded-full flex items-center justify-center">
<i className="text-white h-3 w-3" data-lucide="plus"></i>
</div>
<span className="text-base font-medium text-brand-blue">Compounding<span className="font-light opacity-70">Rx</span></span>
</div>
<p className="text-brand-bluegray text-sm leading-relaxed max-w-xs mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Precision medicine for a healthier tomorrow.
                    </p>
</div>
<div>
<h4 className="font-semibold text-brand-blue mb-6 text-sm">Navigation</h4>
<ul className="space-y-4 text-sm text-brand-bluegray">
<li><a className="hover:text-brand-teal transition-colors" href="#">Providers</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Patients</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Products</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-brand-blue mb-6 text-sm">Support</h4>
<ul className="space-y-4 text-sm text-brand-bluegray">
<li><a className="hover:text-brand-teal transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-brand-blue mb-6 text-sm">Legal</h4>
<ul className="space-y-4 text-sm text-brand-bluegray">
<li><a className="hover:text-brand-teal transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-brand-bluegray opacity-60">© 2024 CompoundingRx Brand. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-brand-bluegray hover:text-brand-blue transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-brand-bluegray hover:text-brand-blue transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-brand-bluegray hover:text-brand-blue transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
