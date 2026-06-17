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
navy: {
50: '#f0f4f8',
100: '#d9e2ec',
800: '#102a43',
900: '#0b1d2e',
},
service: {
orange: '#f97316'
}
}
}
}
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
      

<div className="bg-navy-900 text-white py-2 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium">
<div className="flex items-center space-x-6">
<span className="flex items-center"><svg aria-hidden="true" className="iconify mr-2 text-orange-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Serving Fairfield County &amp; Westchester</span>
<span className="flex items-center"><svg aria-hidden="true" className="iconify mr-2 text-orange-500 iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 24/7 Emergency Dispatch Available</span>
</div>
<div className="flex items-center space-x-4">
<a className="hover:text-orange-400 transition-colors" href="#">Careers</a>
<a className="hover:text-orange-400 transition-colors" href="#">Pay Bill</a>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 glass-nav shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-orange-500 rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<span className="text-lg tracking-tight font-bold text-navy-900 group-hover:opacity-80 transition-opacity">
                    AURA <span className="font-normal text-slate-500">SERVICES</span>
</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors" href="#about">Our Process</a>
<a className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors" href="#plans">Maintenance Plans</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">24/7 Support</span>
<span className="text-sm font-bold text-navy-900">(888) 902-AURA</span>
</div>
<a className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2" href="#">
                    Book Now
                </a>
</div>

<button className="md:hidden p-2 text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="relative h-[600px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Professional Technician" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>

<div className="bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent opacity-100 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6 relative">
<div className="fade-up max-w-2xl">
<div className="inline-flex items-center rounded-md bg-orange-500/20 border border-orange-500/30 px-3 py-1 text-xs font-bold text-orange-400 mb-6 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify mr-1.5 iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Rated #1 Home Service Provider 2023
                </div>
<h1 className="md:text-6xl leading-tight text-5xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
                    Total Home Care.<br/>
<span className="text-orange-500">One Call Away.</span>
</h1>
<p className="text-lg text-slate-100 mb-8 font-medium leading-relaxed max-w-lg drop-shadow-sm">
                    Premium plumbing, electrical, and HVAC services for residential properties. Licensed, bonded, and trusted by over 2,000 homeowners.
                </p>
<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
<button className="h-12 px-8 rounded-lg bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all w-full sm:w-auto shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2">
                        Schedule Service
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</button>
<button className="h-12 px-8 rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-bold hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone-call" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Emergency: (888) 902-AURA
                    </button>
</div>
<div className="mt-10 flex items-center gap-6 text-slate-200 text-xs font-medium drop-shadow">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">

<div className="h-8 w-8 rounded-full border-2 border-navy-900 bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-8 w-8 rounded-full border-2 border-navy-900 bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-8 w-8 rounded-full border-2 border-navy-900 bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<span>500+ 5-Star Reviews</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-orange-600 font-bold text-xs tracking-wider uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">Complete Home Systems Care</h2>
<p className="text-slate-500">We handle the complex infrastructure of your home so you don't have to. Certified experts in every trade.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-2xl border border-slate-200 bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden relative">
<img alt="HVAC" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=1600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-navy-900 flex items-center gap-1 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:fan" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618zM12 12v.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Climate
                        </div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-navy-900 mb-2">Heating &amp; Cooling</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                            Installation, repair, and maintenance of central air, furnaces, and heat pumps.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Annual Tune-ups
                            </li>
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Duct Cleaning
                            </li>
</ul>
<a className="text-orange-600 text-sm font-semibold flex items-center hover:text-orange-700" href="#">
                            Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden relative">
<img alt="Plumbing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-navy-900 flex items-center gap-1 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplets" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg> Water
                        </div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-navy-900 mb-2">Plumbing &amp; Drains</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                            Leak detection, pipe repair, water heaters, and filtration system installation.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Emergency Leak Repair
                            </li>
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Water Heater Flush
                            </li>
</ul>
<a className="text-orange-600 text-sm font-semibold flex items-center hover:text-orange-700" href="#">
                            Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group rounded-2xl border border-slate-200 bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden relative">
<img alt="Electrical" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542013936693-884638332954?w=1600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-navy-900 flex items-center gap-1 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Power
                        </div>
</div>
<div className="p-6">
<h3 className="text-lg font-bold text-navy-900 mb-2">Electrical &amp; Generators</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                            Panel upgrades, lighting installation, generator maintenance, and EV chargers.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Safety Inspections
                            </li>
<li className="flex items-center text-xs text-slate-600">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg> Backup Generators
                            </li>
</ul>
<a className="text-orange-600 text-sm font-semibold flex items-center hover:text-orange-700" href="#">
                            Learn more <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-navy-100 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
<img alt="Technician Working" className="w-full h-auto object-cover bg-center" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-3">
<div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<div className="text-sm font-bold text-navy-900">Background Checked</div>
<div className="text-xs text-slate-500">Every technician verified</div>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-full rounded-full"></div>
</div>
</div>
</div>
<div className="">
<span className="text-orange-600 font-bold text-xs tracking-wider uppercase mb-2 block">Why Aura?</span>
<h2 className="md:text-4xl text-navy-900 text-3xl font-bold tracking-tight mb-6">Service you can trust. Quality you can see.</h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We're not just contractors; we're your neighbors. Our team consists of licensed master plumbers, electricians, and HVAC technicians dedicated to keeping your home safe and comfortable.
                </p>
<div className="space-y-6">
<div className="flex">
<div className="flex-shrink-0 mt-1">
<div className="h-8 w-8 rounded bg-navy-900 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-bold text-navy-900">Licensed &amp; Insured Experts</h4>
<p className="text-sm text-slate-500 mt-1">Our team undergoes rigorous training and certification. We never use subcontractors.</p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0 mt-1">
<div className="h-8 w-8 rounded bg-navy-900 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dollar-sign" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-bold text-navy-900">Upfront Pricing</h4>
<p className="text-sm text-slate-500 mt-1">No hidden fees or surprise costs. We provide a detailed quote before any work begins.</p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0 mt-1">
<div className="h-8 w-8 rounded bg-navy-900 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
</div>
<div className="ml-4">
<h4 className="text-base font-bold text-navy-900">100% Satisfaction Guarantee</h4>
<p className="text-sm text-slate-500 mt-1">If the job isn't done right, we'll come back and fix it for free. Your comfort is our priority.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-navy-900 font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-600 transition-colors" href="#">
                        Read our 500+ Reviews
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="plans">
<div className="max-w-5xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-4">Aura Club Membership</h2>
<p className="text-slate-500 max-w-lg mx-auto">Prevent costly breakdowns with our annual maintenance plans. Priority service included.</p>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-200 bg-white">
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-bold text-navy-900">Silver Plan</h3>
</div>
<div className="mb-6">
<span className="text-4xl font-bold tracking-tight text-navy-900">$19</span>
<span className="text-slate-500 text-sm font-medium">/month</span>
</div>
<p className="text-xs text-slate-500 mb-6">Basic protection for heating and cooling systems.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-700 font-medium">
<svg aria-hidden="true" className="iconify text-green-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 HVAC Tune-up/Year
                    </li>
<li className="flex items-center text-sm text-slate-700 font-medium">
<svg aria-hidden="true" className="iconify text-green-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 10% Discount on Repairs
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 bg-white text-navy-900 text-sm font-bold hover:bg-slate-50 transition-colors">Select Silver</button>
</div>

<div className="relative p-8 rounded-2xl bg-navy-900 text-white shadow-xl ring-4 ring-orange-500/20 transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold uppercase">
                    Best Value
                </div>
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h3 className="text-lg font-bold text-white">Gold Plan</h3>
</div>
<div className="mb-6">
<span className="text-4xl font-bold tracking-tight text-white">$39</span>
<span className="text-slate-300 text-sm font-medium">/month</span>
</div>
<p className="text-xs text-slate-300 mb-6">Complete coverage for HVAC, Plumbing &amp; Electric.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-100 font-medium">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 2 HVAC Tune-ups (Spring/Fall)
                    </li>
<li className="flex items-center text-sm text-slate-100 font-medium">
<svg aria-hidden="true" className="iconify text-orange-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Annual Plumbing Inspection
                    </li>
</ul>
<button className="w-full py-3 rounded-lg bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg">Join Gold Club</button>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white">
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:crown" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-bold text-navy-900">Platinum</h3>
</div>
<div className="mb-6">
<span className="text-4xl font-bold tracking-tight text-navy-900">$69</span>
<span className="text-slate-500 text-sm font-medium">/month</span>
</div>
<p className="text-xs text-slate-500 mb-6">For large estates requiring frequent maintenance.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-700 font-medium">
<svg aria-hidden="true" className="iconify text-green-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> All Gold Plan Benefits
                    </li>
<li className="flex items-center text-sm text-slate-700 font-medium">
<svg aria-hidden="true" className="iconify text-green-500 mr-2 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Water Heater Flush Included
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 bg-white text-navy-900 text-sm font-bold hover:bg-slate-50 transition-colors">Select Platinum</button>
</div>
</div>
</section>

<section className="py-20 bg-navy-900 relative overflow-hidden">

<div className="w-1/2 h-full absolute top-0 right-0 translate-x-20 skew-x-12"></div>
<div className="flex flex-col md:flex-row max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<div className="md:w-1/2 mb-10 md:mb-0">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Need help right now?</h2>
<p className="text-slate-300 text-lg mb-8 max-w-md">
                    Our fully stocked trucks are ready to roll. We handle plumbing leaks, AC failures, and electrical outages 24/7.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-orange-600 transition-all" href="tel:8889022872">
<svg aria-hidden="true" className="iconify mr-2 iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> (888) 902-AURA
                    </a>
<a className="inline-flex items-center justify-center rounded-lg bg-transparent border border-slate-600 px-8 py-4 text-base font-bold text-white hover:bg-white/5 transition-all" href="#">
                        Book Online
                    </a>
</div>
</div>
<div className="md:w-1/2 flex justify-center md:justify-end">

<img alt="Service Van Fleet" className="transform hover:rotate-0 transition-transform duration-500 bg-center w-full max-w-md object-cover border-white/10 border-4 rounded-lg shadow-2xl rotate-2" src="https://images.unsplash.com/photo-1646324554833-f0b6a479fa5d?w=1600&amp;q=80"/>
</div>
</div>
</section>

<footer className="bg-white border-slate-200 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-orange-500 rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<span className="text-lg font-bold text-navy-900">AURA</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed max-w-xs mb-6">
                        The trusted name in home services. Plumbing, HVAC, and Electrical done right the first time.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-navy-900" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-400 hover:text-navy-900" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-400 hover:text-navy-900" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-orange-500 transition-colors" href="#">AC Repair</a></li>
<li><a className="text-xs text-slate-500 hover:text-orange-500 transition-colors" href="#">Furnace Installation</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-slate-500 hover:text-orange-500 transition-colors" href="#">Service Area</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide mb-4">Contact Info</h4>
<ul className="space-y-3">
<li className="flex items-start text-xs text-slate-500">
<svg aria-hidden="true" className="iconify mr-2 mt-0.5 text-orange-500 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            123 Service Way,Fairfield, CT 06824
                        </li>
<li className="flex items-center text-xs text-slate-500">
<svg aria-hidden="true" className="iconify mr-2 text-orange-500 iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> (888) 902-AURA
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200">
<p className="text-[10px] text-slate-400">© 2023 Aura Home Services LLC. License #12345.</p>
<div className="flex space-x-4 mt-4 md:mt-0 text-[10px] text-slate-400">
<a className="hover:text-navy-900" href="#">Privacy Policy</a>
<a className="hover:text-navy-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
