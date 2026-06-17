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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="hospital" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v4"></path><path d="M14 14h-4"></path><path d="M14 18h-4"></path><path d="M14 8h-4"></path><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight leading-none">JDGH Samdari</span>
<span className="text-[10px] text-neutral-500 font-medium tracking-tight uppercase mt-0.5">Bhimji Ka Hospital</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#specialties">Dental &amp; General</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About Us</a>
</div>
<a className="flex items-center gap-2 hover:bg-neutral-800 transition-all text-xs font-medium text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4" href="tel:+910000000000">
<iconify-icon className="" icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Emergency 24x7</span>
</a>
</div>
</nav>

<section className="overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Open 24 Hours • 7 Days a Week
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-6 leading-[1.1]">
                Advanced Care in <br className="hidden md:block"/>
<span className="text-indigo-600">Samdari</span>
</h1>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
                Jodhpur Dental &amp; General Hospital (Bhimji Ka Hospital) provides comprehensive medical services ranging from dental care to emergency trauma support.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<button className="sm:w-auto hover:bg-indigo-700 transition-colors shadow-indigo-200 text-sm font-medium text-white bg-indigo-600 w-full rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-sm cursor-pointer" onclick="window.location.href='/doctors-list'" role="button">
                    Book Appointment
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 text-sm font-medium rounded-lg transition-colors">
                    View Departments
                </button>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-neutral-900">24x7</span>
<span className="text-xs text-neutral-500 font-medium">Emergency Service</span>
</div>
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:user-check" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-neutral-900">Expert</span>
<span className="text-xs text-neutral-500 font-medium">Bhimji's Supervision</span>
</div>
<div className="flex flex-col items-center md:items-start">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-neutral-900">Advanced</span>
<span className="text-xs text-neutral-500 font-medium">Equipment</span>
</div>
<div className="flex flex-col md:items-start items-center">
<svg className="text-indigo-600 mb-2" data-icon-set="lucide" data-lucide="map-pin" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-2xl font-semibold text-neutral-900 tracking-tight">Local</span>
<span className="text-xs text-neutral-500 font-medium">Samdari Center</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="specialties">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Our Specialties</h2>
<p className="text-neutral-500 max-w-xl text-sm leading-relaxed">
                Comprehensive treatment for all general health issues including ENT, Orthopedics, Dental, and Chronic Disease Management.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">Dental Care (Daat)</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Complete oral hygiene, root canals, extractions, and cosmetic dentistry.
                </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">Orthopedics (Haddi)</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Treatment for fractures, joint pain, arthritis, and bone related trauma.
                </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:ear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">ENT (Kan, Naak, Gala)</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Specialized care for Ear, Nose, and Throat infections and disorders.
                </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:heart-pulse" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">Cardiac &amp; BP (Hard/BP)</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                    Monitoring and treatment for Blood Pressure, Heart health, and Sugar (Diabetes).
                </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 md:col-span-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 h-full">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:ambulance" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2">24x7 Emergency Services</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                            Immediate care for accidents, trauma, and acute medical conditions. Always open.
                        </p>
</div>
<a className="shrink-0 hover:bg-blue-700 transition-colors text-xs font-medium text-white bg-blue-600 rounded-lg pt-2.5 pr-6 pb-2.5 pl-6" href="/tel:+91 8278684197">
                        Call Emergency
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 px-6 rounded-t-[40px] md:rounded-t-[60px] relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-900 to-neutral-900"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<span className="text-indigo-400 font-medium tracking-tight text-sm uppercase mb-4 block">Trusted Healthcare</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Bhimji Ka Hospital</h2>
<p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-8">
                    Serving the Samdari community with dedication. We ensure that quality healthcare, from dental procedures to general medicine, is accessible to everyone at any time of the day.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-indigo-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                        Advanced Diagnostic Lab
                    </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-indigo-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                        Qualified Medical Staff
                    </li>
<li className="flex items-center gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-indigo-400" icon="lucide:check-circle-2" width="18"></iconify-icon>
                        Hygienic &amp; Modern Facility
                    </li>
</ul>
</div>
<div className="w-full md:w-1/3">
<div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
<h3 className="text-xl font-medium tracking-tight mb-6">OPD Timings</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-neutral-700 pb-3">
<span className="text-neutral-400">Monday - Saturday</span>
<span className="font-medium">24 Hours</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-neutral-700 pb-3">
<span className="text-neutral-400">Sunday</span>
<span className="font-medium">24 Hours</span>
</div>
<div className="flex justify-between items-center text-sm pt-1">
<span className="text-neutral-400">Emergency</span>
<span className="text-blue-400 font-medium flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Open 24/7
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-neutral-900">JDGH Samdari</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Jodhpur Dental &amp; General Hospital (Bhimji Ka Hospital). Committed to providing excellent healthcare services to the Samdari region.
                    </p>
</div>
<div className="">
<h4 className="font-medium text-sm text-neutral-900 mb-4">Departments</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">Dental</a></li>
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">Orthopedics</a></li>
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">ENT</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm text-neutral-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5" icon="lucide:map-pin" width="16"></iconify-icon>
                            Samdari, Rajasthan
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="lucide:phone" width="16"></iconify-icon>
                            +91 8278684197
                            
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="lucide:mail" width="16"></iconify-icon>
                            contact@jdghsamdari.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-neutral-400">© 2024 Jodhpur Dental &amp; General Hospital. All rights reserved.</span>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
