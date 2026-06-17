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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-stone-900 text-stone-50 flex items-center justify-center rounded-sm group-hover:bg-stone-700 transition-colors duration-300">
<span className="font-serif text-lg font-medium">O</span>
</div>
<span className="uppercase tracking-widest text-xs font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">On The Level</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">Philosophy</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#experience">Experience</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#services">Expertise</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="px-5 py-2 bg-stone-900 text-white text-xs uppercase tracking-wide font-medium rounded-sm hover:bg-stone-800 transition-colors duration-300" href="#contact">
                    Inquire
                </a>
</div>

<button className="md:hidden text-stone-900">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Custom Home Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full mt-20">
<div className="md:max-w-3xl fade-in-up">
<p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-medium">Est. 2005 — Premier General Contractors</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.1] tracking-tight mb-8">
                    Building Legacies <br/>
<span className="serif italic text-stone-200">One Level at a Time.</span>
</h1>
<p className="text-stone-200 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
                    Delivering precision in residential construction, complex high-detail builds, and government projects. We bring architectural visions to life with uncompromising integrity.
                </p>
<div className="flex flex-col md:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 bg-white text-stone-900 text-sm uppercase tracking-wide font-medium hover:bg-stone-100 transition-colors rounded-sm" href="#portfolio">
                        View Our Work
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white backdrop-blur-sm text-sm uppercase tracking-wide font-medium hover:bg-white/10 transition-colors rounded-sm" href="#contact">
                        Start a Project
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
<iconify-icon icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</header>

<section className="pt-24 md:pt-32 pb-16 bg-stone-50" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<span className="block text-stone-500 text-xs uppercase tracking-widest mb-4 font-semibold">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl font-normal text-stone-900 leading-tight tracking-tight mb-6">
                    Integrity in every beam, <br/>
<span className="text-stone-400 serif italic">precision in every detail.</span>
</h2>
</div>
<div className="space-y-6 pt-2">
<p className="text-stone-600 leading-relaxed font-light text-lg">
                    At On The Level Builders, we believe a structure is more than just materials; it is a testament to rigorous planning and expert craftsmanship. For nearly two decades, we have partnered with discerning clients and top-tier architects to execute complex projects with seamless precision.
                </p>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                    Whether managing a high-detail residential build or a regulated government project, our approach remains grounded in transparency, safety, and an unwavering commitment to the "level" of quality you deserve.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200/60" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-7 space-y-8">
<div>
<span className="block text-stone-500 text-xs uppercase tracking-widest mb-4 font-semibold">Leadership Profile</span>
<h2 className="text-3xl md:text-4xl font-normal text-stone-900 tracking-tight">Owner Experience &amp; Qualifications</h2>
</div>
<div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed">
<p>
                            On The Level Builders, Inc. is led by hands-on ownership with over 40 years of experience in the construction industry, spanning custom residential work and large-scale government projects.
                        </p>
<p>
                            The owner completed a Carpenter Apprenticeship Program in Chicago in 1991 and holds OSHA certification. Professional experience includes custom residential homes and additions, finish carpentry, and leadership roles as a Foreman, Superintendent, and Project Manager.
                        </p>
<p>
                            While employed by a major government contractor, the owner served as Superintendent on new employee housing construction in Grand Teton National Park, including projects at Colter Bay. Additional Project Manager assignments included work at Altus Air Force Base and White Sands Missile Range.
                        </p>
<p>
                            Further experience includes superintendent oversight on facility expansions and remodels at Colter Bay employee housing, subcontractor work on government employee housing renovations in West Yellowstone National Park, window replacement projects in Grand Teton National Park, and subcontracted construction work at a federal IRS facility.
                        </p>
<p>
                            This depth of experience across residential, commercial, and federal environments ensures projects are executed with strong field leadership, regulatory awareness, and attention to detail.
                        </p>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-stone-50 border border-stone-200 p-8 md:p-10 rounded-sm">
<div className="flex items-center gap-3 mb-8">
<div className="h-10 w-10 bg-white border border-stone-200 text-stone-900 rounded-sm flex items-center justify-center">
<iconify-icon icon="lucide:award" width="20"></iconify-icon>
</div>
<h3 className="serif text-xl font-medium text-stone-900">Key Qualifications</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">40+ Years Construction Experience</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">Carpenter Apprenticeship Program (Chicago, 1991)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">OSHA Certified</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">Superintendent &amp; Project Manager Experience</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">Federal, Government, and Residential Project Background</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="text-sm text-stone-700 font-medium">Finish Carpentry, Framing, and Remodel Expertise</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-stone-200">
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-3xl serif font-medium text-stone-900">1991</span>
<span className="text-xs uppercase tracking-wider text-stone-500 mt-1">Apprenticeship</span>
</div>
<div className="flex flex-col">
<span className="text-3xl serif font-medium text-stone-900">100%</span>
<span className="text-xs uppercase tracking-wider text-stone-500 mt-1">Dedication</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<span className="block text-stone-500 text-xs uppercase tracking-widest mb-4 font-semibold">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-normal text-stone-900 tracking-tight">Core Areas of Operation</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#contact">
                    Discuss your needs <iconify-icon className="text-stone-400" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-500 rounded-sm flex flex-col">
<div className="h-10 w-10 bg-stone-50 border border-stone-200 flex items-center justify-center rounded-sm mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-stone-50 group-hover:border-stone-900 transition-colors">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
</div>
<h3 className="text-xl serif font-medium text-stone-900 mb-3">Custom Residential Construction</h3>
<p className="text-stone-600 font-light leading-relaxed text-sm">
                        High-end custom homes requiring precision framing, engineered assemblies, and strict adherence to approved construction documents. Work is coordinated closely with builders, architects, and engineers to ensure accuracy and constructability from foundation through final framing.
                    </p>
</div>

<div className="group p-8 bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-500 rounded-sm flex flex-col">
<div className="h-10 w-10 bg-stone-50 border border-stone-200 flex items-center justify-center rounded-sm mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-stone-50 group-hover:border-stone-900 transition-colors">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="text-xl serif font-medium text-stone-900 mb-3">Complex &amp; High-Detail Builds</h3>
<p className="text-stone-600 font-light leading-relaxed text-sm">
                        Projects involving structural complexity, custom layouts, and demanding schedules. Experienced in sequencing work efficiently, resolving field conditions proactively, and maintaining clean, organized job sites that support downstream trades.
                    </p>
</div>

<div className="group p-8 bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all duration-500 rounded-sm flex flex-col">
<div className="h-10 w-10 bg-stone-50 border border-stone-200 flex items-center justify-center rounded-sm mb-6 text-stone-900 group-hover:bg-stone-900 group-hover:text-stone-50 group-hover:border-stone-900 transition-colors">
<iconify-icon icon="lucide:landmark" width="20"></iconify-icon>
</div>
<h3 className="text-xl serif font-medium text-stone-900 mb-3">Government &amp; Federally Funded Projects</h3>
<p className="text-stone-600 font-light leading-relaxed text-sm">
                        Experience on publicly funded projects requiring compliance with federal standards, safety protocols, documentation, and schedule accountability. Proven ability to perform within regulated environments while maintaining production efficiency and quality.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="block text-stone-500 text-xs uppercase tracking-widest mb-4 font-semibold">Selected Works</span>
<h2 className="text-3xl md:text-5xl serif font-normal text-stone-900 tracking-tight">The Art of Construction</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-4">
<img alt="Modern Farmhouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl serif font-medium text-stone-900">The Highland Estate</h3>
<p className="text-stone-500 text-sm mt-1">Custom Residential · 6,500 sqft</p>
</div>
<button className="h-8 w-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-4">
<img alt="Structural Steel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl serif font-medium text-stone-900">Civic Center Plaza</h3>
<p className="text-stone-500 text-sm mt-1">Government Project · Public Works</p>
</div>
<button className="h-8 w-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-4">
<img alt="Complex Framing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl serif font-medium text-stone-900">Cantilevered Residence</h3>
<p className="text-stone-500 text-sm mt-1">Complex Build · Structural Engineering</p>
</div>
<button className="h-8 w-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-4">
<img alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl serif font-medium text-stone-900">Lakeside Contemporary</h3>
<p className="text-stone-500 text-sm mt-1">Custom Residential · Precision Framing</p>
</div>
<button className="h-8 w-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-stone-900 text-sm font-medium border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all" href="#">
                    View Complete Portfolio
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-600 mb-8 mx-auto" icon="lucide:quote" width="32"></iconify-icon>
<blockquote className="text-2xl md:text-3xl serif leading-relaxed mb-10 text-stone-200">
                "On The Level Builders navigated the complexities of our project with remarkable efficiency. Their ability to handle the rigorous documentation and compliance required for our federally funded initiative was as impressive as their build quality."
            </blockquote>
<cite className="not-italic flex flex-col items-center">
<span className="text-sm font-medium tracking-wide uppercase">Robert D.</span>
<span className="text-stone-500 text-xs mt-1">Project Manager, Municipal Works</span>
</cite>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-100" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-5">
<span className="block text-stone-500 text-xs uppercase tracking-widest mb-4 font-semibold">Contact Us</span>
<h2 className="text-4xl serif font-normal text-stone-900 tracking-tight mb-6">Let's Build Something Exceptional</h2>
<p className="text-stone-600 font-light leading-relaxed mb-10">
                    We are currently accepting new projects. Whether you have a complex custom build or a government contract requiring strict compliance, we invite you to get in touch.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:map-pin" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-stone-900">Office</h4>
<p className="text-stone-600 text-sm mt-1">123 Builder Lane, Suite 100<br/>Construction City, ST 12345</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:phone" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-stone-900">Phone</h4>
<p className="text-stone-600 text-sm mt-1">(555) 123-4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="lucide:mail" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-stone-900">Email</h4>
<p className="text-stone-600 text-sm mt-1">info@onthelevelbuildersinc.com</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-7 bg-white p-8 md:p-10 rounded-sm shadow-sm border border-stone-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-stone-500" htmlFor="firstName">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all placeholder:text-stone-300" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-stone-500" htmlFor="lastName">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all placeholder:text-stone-300" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-stone-500" htmlFor="email">Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all placeholder:text-stone-300" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-stone-500">Project Type</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="projectType" type="radio"/>
<div className="w-full p-3 border border-stone-200 bg-stone-50 rounded-sm text-center text-sm text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">
                                    Residential
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="projectType" type="radio"/>
<div className="w-full p-3 border border-stone-200 bg-stone-50 rounded-sm text-center text-sm text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">
                                    Government
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="projectType" type="radio"/>
<div className="w-full p-3 border border-stone-200 bg-stone-50 rounded-sm text-center text-sm text-stone-600 peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">
                                    Other
                                </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-stone-500" htmlFor="message">Project Details</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all placeholder:text-stone-300 resize-none" id="message" placeholder="Tell us about your vision..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-stone-900 text-white font-medium text-sm py-4 rounded-sm uppercase tracking-wide hover:bg-stone-800 transition-all duration-300 shadow-sm" type="button">
                            Send Message
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 bg-stone-50 text-stone-900 flex items-center justify-center rounded-sm">
<span className="font-serif text-sm font-bold">O</span>
</div>
<span className="uppercase tracking-widest text-xs font-semibold text-stone-100">On The Level Builders</span>
</div>
<p className="text-xs leading-relaxed max-w-xs text-stone-500">
                    Crafting superior structures with precision and integrity since 2005. Specializing in residential, complex, and government projects.
                </p>
</div>
<div className="flex gap-16">
<div>
<h5 className="text-stone-100 text-xs uppercase tracking-widest font-semibold mb-4">Navigation</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#experience">Experience</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Expertise</a></li>
<li><a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-stone-100 text-xs uppercase tracking-widest font-semibold mb-4">Connect</h5>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
<p>© 2023 On The Level Builders Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-400" href="#">Privacy Policy</a>
<a className="hover:text-stone-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
