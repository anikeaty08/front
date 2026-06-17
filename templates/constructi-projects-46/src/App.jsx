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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">
                4SEASONS
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="text-white" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Sectors</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<button className="text-white md:hidden">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative bg-slate-900 pt-40 pb-24 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 z-0"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 reveal-on-scroll is-visible">
<div className="max-w-3xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-slate-300 mb-6 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
                    Portfolio
                </span>
<h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Projects / Contracts
                </h1>
<p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
                    Our Proven Experience Across Oil &amp; Gas Fields in Iraq. Delivering scale, precision, and engineering excellence in every structural endeavor.
                </p>
</div>
</div>
</header>

<main className="relative z-10 -mt-10 pb-32">
<div className="md:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4 space-y-24">

<section className="group reveal-on-scroll is-visible">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Asia Towers</h2>
<p className="text-sm text-slate-500 mt-2 font-medium tracking-wide uppercase">Commercial High-Rise Development</p>
</div>
<p className="text-slate-600 text-sm md:text-base max-w-md leading-relaxed">
                        A landmark vertical development featuring state-of-the-art structural engineering tailored for mixed-use commercial activities.
                    </p>
</div>
<div className="w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 relative">
<img alt="Asia Towers" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div className="">
<h2 className="md:text-3xl text-2xl font-semibold text-slate-900 tracking-tight">Al Naseem</h2>
<p className="text-sm text-slate-500 mt-2 font-medium tracking-wide uppercase">Residential Community Infrastructure</p>
</div>
<div className="flex gap-4">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-2 h-80 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
<img alt="Al Naseem Main" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-1 h-64 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
<img alt="Al Naseem Detail" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 delay-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
<div className="max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Al Wod</h2>
<p className="text-slate-600 mt-4 leading-relaxed">
                            Comprehensive infrastructure development focusing on sustainable urban planning and modern utility integration within the region.
                        </p>
</div>
</div>
<div className="w-full h-[50vh] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 relative">
<img alt="Al Wod" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="mb-8">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Jawaher Dijlah</h2>
<p className="text-sm text-slate-500 mt-2 font-medium tracking-wide uppercase">Waterfront Commercial District</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[500px]">
<div className="h-80 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
<img alt="Jawaher Dijlah Exterior" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-80 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200 bg-slate-100 flex items-center justify-center p-8 text-center group-hover:bg-slate-50 transition-colors">

<img alt="Jawaher Dijlah Interior" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Al Safir</h2>
<div className="h-px bg-slate-200 flex-grow mx-6 hidden md:block"></div>
<p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Contract #440-A</p>
</div>
<div className="w-full h-[55vh] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 relative">
<img alt="Al Safir" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            Basra, Iraq
                        </div>
</div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Al Rawaan</h2>
<p className="text-sm text-slate-500 mt-2 font-medium tracking-wide uppercase">Logistic Centers &amp; Warehousing</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-1 h-64 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200 order-2 md:order-1">
<img alt="Al Rawaan Logistics" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-2 h-80 md:h-full rounded-2xl overflow-hidden relative shadow-sm border border-slate-200 order-1 md:order-2">
<img alt="Al Rawaan Site" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="mb-6">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Dijlah Land</h2>
</div>
<div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 relative">
<img alt="Dijlah Land" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">High Class</h2>
<p className="text-sm text-slate-500 mt-2 font-medium tracking-wide uppercase">Luxury Estates</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
<img alt="High Class Ext" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
<img alt="High Class Int" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 delay-100" src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="group reveal-on-scroll">
<div className="flex flex-col justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Basra Field Operations</h2>
<p className="text-slate-600 mt-2 max-w-2xl leading-relaxed">
                        Extensive on-site logistics and support structures catering to the specific needs of the Oil &amp; Gas sector in southern Iraq.
                    </p>
</div>
<div className="space-y-6">

<div className="w-full h-[50vh] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 relative">
<img alt="Field Operations Main" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer group/more">
<span className="text-lg font-semibold text-slate-900 group-hover/more:scale-110 transition-transform">+5</span>
<span className="text-xs mt-1">More Views</span>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<h3 className="text-white text-lg font-semibold tracking-tight mb-6">4SEASONS</h3>
<p className="text-sm leading-relaxed max-w-sm">
                        Enterprise-grade construction and engineering solutions. 
                        Proudly serving Iraq's Oil &amp; Gas infrastructure with precision, safety, and reliability.
                    </p>
<div className="mt-8 flex gap-4">

<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Projects / Contracts</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify mt-0.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Al-Jadiriyah, BaghdadIraq</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>+964 770 000 0000</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span>info@4seasons.iq</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 4Seasons General Contracting. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
