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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
700: '#c2410c',
800: '#9a3412',
900: '#7c2d12',
950: '#431407',
}
}
}
},
plugins: []
};

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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="trader" width="100%"></iframe></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg group-hover:bg-brand-600 transition-colors duration-300 bg-white text-black font-light font-manrope">Z</div>
<span className="text-xl text-white tracking-tight font-montserrat font-medium">Web Zorro</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="transition-colors hover:text-white text-sm text-indigo-400 font-light font-manrope" href="#how-it-works">How it Works</a>
<a className="transition-colors hover:text-white text-sm text-indigo-400 font-light font-manrope" href="#sectors">Sectors</a>
<a className="text-sm transition-colors text-indigo-400 hover:text-white font-light font-manrope" href="#work">Work</a>
<a className="text-sm transition-colors text-indigo-400 hover:text-white font-light font-manrope" href="#pricing">Pricing</a>
</div>

<div className="">
<a className="inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 text-sm border-transparent border rounded-lg pt-2 pr-4 pb-2 pl-4 hover:bg-indigo-200 text-black bg-white font-light font-manrope" href="#preview-form">Free Website Preview</a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-24 overflow-hidden pt-32 pb-16">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6 border bg-blue-950/30 text-blue-300 border-blue-900/50 font-light font-manrope">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
</span>
                Now accepting new UK clients
            </div>
<h1 className="sm:text-6xl lg:text-7xl text-5xl tracking-tight max-w-4xl mr-auto mb-6 ml-auto text-white font-montserrat font-medium">Sharp Web Design for UK Trades &amp; Businesses</h1>
<p className="leading-relaxed text-lg text-indigo-400 max-w-2xl mr-auto mb-10 ml-auto font-light font-manrope">We build high-converting websites for local trades, professional services, and e-commerce stores across the UK. Get a free preview before you pay a penny.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center">
<a className="inline-flex flex-col items-center justify-center hover:-translate-y-0.5 transition-all rounded-lg pt-3 pr-10 pb-3 pl-10 shadow-lg shadow-brand-500/20 text-black bg-white hover:bg-indigo-100" href="#preview-form">
<span className="text-base font-light font-manrope">Get a Free Website Preview</span>
<span className="text-xs mt-0.5 text-indigo-600 font-light font-manrope">(No commitment required)</span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base border rounded-lg transition-all flex items-center justify-center gap-2 text-white bg-white/5 border-white/10 hover:bg-white/10 font-light font-manrope" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    See Process
                </a>
</div>

</div>
</section>

<section className="border-y bg-indigo-950/50 border-white/5 pt-16 pb-16" id="sectors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="uppercase text-sm tracking-wider mb-12 text-indigo-500 font-light font-manrope">We Build Websites For UK Businesses</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 text-left">

<div className="flex items-start gap-4">
<div className="flex-shrink-0 text-indigo-300 bg-black border-indigo-800 border rounded-lg mt-0.5 pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-sm">
<iconify-icon className="" icon="solar:hammer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-base tracking-tight text-white font-light font-manrope">Local Trades</span>
<p className="text-sm text-indigo-400 mt-1 leading-relaxed font-light font-manrope">Plumbers, Electricians, Builders, Landscapers in your area.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-shrink-0 text-indigo-300 bg-black border-indigo-800 border rounded-lg mt-0.5 pt-2.5 pr-2.5 pb-2.5 pl-2.5 shadow-sm">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="heart-pulse-linear" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(165, 180, 252)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><path className="" d="M18 12h-.801c-.83 0-1.245 0-1.589.195c-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989s-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963c-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11c-.326.17-.709.17-1.474.17H6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><path className="" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z" fill="currentColor"></path></g></svg>
</div>
<div className="">
<span className="block text-base tracking-tight text-white font-light font-manrope">Health &amp; Wellness</span>
<p className="text-sm text-indigo-400 mt-1 leading-relaxed font-light font-manrope">Private Clinics, Physios, Gyms, and Dental Practices.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-0.5 p-2.5 rounded-lg border shadow-sm bg-black border-indigo-800 text-indigo-300">
<iconify-icon className="" height="24" icon="solar:case-linear" strokeWidth="1.5" style={{color: 'rgb(165, 180, 252)'}} width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-base tracking-tight text-white font-light font-manrope">Professional Services</span>
<p className="text-sm text-indigo-400 mt-1 leading-relaxed font-light font-manrope">Accountants, Consultants, Solicitors, and Agencies.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-0.5 p-2.5 rounded-lg border shadow-sm bg-black border-indigo-800 text-indigo-300">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-base tracking-tight text-white font-light font-manrope">E-commerce</span>
<p className="text-sm text-indigo-400 mt-1 leading-relaxed font-light font-manrope">Independent retailers, boutique shops, and Shopify stores.</p>
</div>
</div>
</div>
</div>
</section><section className="text-white bg-black border-white/5 border-b py-32" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl tracking-tight mb-4 text-white font-montserrat font-medium">Selected Work</h2>
<p className="text-lg text-indigo-400 font-light font-manrope">High-performance designs tailored to your industry.</p>
</div>
<a className="inline-flex items-center justify-center transition-all text-sm border rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 hover:bg-indigo-900 text-white bg-black border-indigo-800 font-light font-manrope" href="#pricing">View Pricing</a>
</div>


<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl bg-indigo-900 border border-indigo-800 hover:border-indigo-700 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden">

<div className="h-9 bg-indigo-950 border-b border-indigo-800 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-red-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-cyan-500 transition-colors duration-300"></div>
</div>
<div className="ml-4 flex-1 h-5 bg-indigo-900 rounded-md flex items-center px-2 border border-indigo-800/50">
<iconify-icon className="text-indigo-600 mr-2" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<div className="w-20 h-1.5 bg-indigo-800 rounded-full"></div>
</div>
</div>

<div className="h-[400px] bg-cyan-900 relative overflow-hidden group-hover:bg-cyan-950 transition-colors">

<div className="absolute inset-0">
<img alt="Plumber working" className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-overlay" src="https://images.unsplash.com/photo-1581578014439-080536c31700?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-cyan-900/80 to-transparent"></div>
</div>

<div className="absolute inset-0 p-8 flex flex-col group-hover:scale-[1.01] transition-transform duration-700 origin-top">

<div className="flex justify-between items-center mb-12 relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm text-white shadow-lg shadow-blue-500/20 font-light font-manrope">F</div>
<div className="flex flex-col">
<span className="text-xs text-white tracking-widest uppercase font-light font-manrope">FlowPro</span>
<span className="text-[8px] text-blue-400 font-light font-manrope">Plumbing &amp; Heating</span>
</div>
</div>
<div className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded text-[10px] flex items-center gap-1 font-light font-manrope">
<iconify-icon icon="solar:phone-calling-linear" width="10"></iconify-icon> 020 8123 4567
                                </div>
</div>

<div className="relative z-10 max-w-sm mt-auto mb-auto">
<div className="inline-block px-2 py-1 rounded border border-green-500/30 bg-green-950/30 text-green-500 text-[8px] tracking-wider mb-4 flex items-center w-fit gap-1 font-light font-manrope">
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon> RATED 5/5 ON CHECKATRADE
                                </div>
<h2 className="text-3xl text-white leading-[1.1] mb-4 tracking-tight font-montserrat font-medium">Emergency Plumbing <br/><span className="text-blue-500 font-montserrat font-medium">Done Right.</span></h2>
<p className="text-xs text-cyan-400 leading-relaxed mb-8 max-w-[280px] font-light font-manrope">Local experts in boiler repairs, leak detection, and bathroom installations. We arrive within 60 minutes.</p>
<div className="grid grid-cols-2 gap-3 max-w-[300px]">
<button className="bg-blue-600 text-white text-[10px] px-4 py-3 rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 text-center font-light font-manrope">
                                        Book Online
                                    </button>
<button className="bg-cyan-800 border border-cyan-700 text-white text-[10px] px-4 py-3 rounded hover:bg-cyan-700 transition-colors text-center font-light font-manrope">
                                        View Services
                                    </button>
</div>
</div>

<div className="mt-auto border-t border-white/5 pt-4 flex gap-6 opacity-60 grayscale">
<div className="h-6 w-16 bg-white/10 rounded"></div>
<div className="h-6 w-16 bg-white/10 rounded"></div>
<div className="h-6 w-16 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="bg-black p-5 border-t border-indigo-800">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm text-white font-light font-manrope">FlowPro Plumbing</h3>
<p className="text-xs text-indigo-500 mt-1 font-light font-manrope">Lead generation &amp; booking system.</p>
</div>
<span className="text-[10px] border border-blue-900/50 text-blue-400 bg-blue-950/20 px-2 py-0.5 rounded font-light font-manrope">Trades</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-indigo-900 border border-indigo-800 hover:border-indigo-700 hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 overflow-hidden">

<div className="h-9 bg-indigo-950 border-b border-indigo-800 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-red-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-cyan-500 transition-colors duration-300"></div>
</div>
<div className="ml-4 flex-1 h-5 bg-indigo-900 rounded-md flex items-center px-2 border border-indigo-800/50">
<iconify-icon className="text-indigo-600 mr-2" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<div className="w-20 h-1.5 bg-indigo-800 rounded-full"></div>
</div>
</div>

<div className="h-[400px] bg-[#0c0a09] relative overflow-hidden group-hover:bg-black transition-colors">
<div className="absolute inset-0 flex flex-col group-hover:scale-[1.01] transition-transform duration-700 origin-top">

<div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-black/20 backdrop-blur-sm z-20 absolute top-0 w-full">
<span className="text-white text-sm tracking-widest font-light font-manrope">RALSS LUXE</span>
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" width="16"></iconify-icon>
</div>

<div className="absolute inset-0 z-0">
<img alt="Fashion" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
</div>

<div className="relative z-10 mt-auto p-8 pb-16 text-center">
<p className="text-[8px] tracking-[0.3em] text-rose-200 uppercase mb-3 font-light font-manrope">Premium Experience</p>
<h2 className="text-3xl text-white mb-6 font-montserrat font-medium">Luxury Hair, Skin &amp; <br/>Grooming.</h2>
<button className="bg-rose-950/80 backdrop-blur text-white text-[9px] px-6 py-3 rounded-full border border-rose-500/30 uppercase tracking-widest hover:bg-rose-900 transition-colors font-light font-manrope">Book Appointment</button>
</div>
</div>
</div>

<div className="bg-black p-5 border-t border-indigo-800">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm text-white font-light font-manrope">Ralss Luxe</h3>
<p className="text-xs text-indigo-500 mt-1 font-light font-manrope">High-end salon booking website.</p>
</div>
<span className="text-[10px] border border-rose-900/30 text-rose-300 bg-rose-950/20 px-2 py-0.5 rounded font-light font-manrope">Beauty</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-indigo-900 border border-indigo-800 hover:border-indigo-700 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 overflow-hidden">

<div className="h-9 bg-indigo-950 border-b border-indigo-800 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-red-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-cyan-500 transition-colors duration-300"></div>
</div>
<div className="ml-4 flex-1 h-5 bg-indigo-900 rounded-md flex items-center px-2 border border-indigo-800/50">
<iconify-icon className="text-indigo-600 mr-2" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<div className="w-20 h-1.5 bg-indigo-800 rounded-full"></div>
</div>
</div>

<div className="h-[400px] bg-white relative overflow-hidden">
<div className="absolute inset-0 p-6 flex flex-col group-hover:scale-[1.01] transition-transform duration-700 origin-top">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-1">
<div className="text-green-600"><iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon></div>
<span className="text-xs text-cyan-800 tracking-tight font-light font-manrope">NovaDental</span>
</div>
<div className="bg-cyan-900 text-white text-[9px] px-3 py-1.5 rounded-full font-light font-manrope">Book Visit</div>
</div>

<div className="flex gap-4 mb-4 h-full">
<div className="w-1/2 pt-4 flex flex-col">
<h2 className="text-cyan-900 text-xl leading-tight mb-3 tracking-tight font-montserrat font-medium">Dental Care, Designed for Comfort.</h2>
<p className="text-[10px] text-cyan-500 leading-relaxed mb-6 font-light font-manrope">Experience gentle treatments, modern technology, and a calm clinic environment.</p>
<div className="flex gap-1 mb-auto">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center border border-white"><img className="w-full h-full rounded-full" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-6 h-6 rounded-full bg-cyan-100 -ml-2 flex items-center justify-center border border-white"><img className="w-full h-full rounded-full" src="https://i.pravatar.cc/100?img=5"/></div>
<span className="text-[8px] text-cyan-400 self-center ml-1 font-light font-manrope">Trusted by 500+</span>
</div>

<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="bg-cyan-50 p-2 rounded border border-cyan-100">
<iconify-icon className="text-green-500 mb-1" icon="solar:smile-circle-linear" width="14"></iconify-icon>
<div className="text-[8px] text-cyan-800 font-light font-manrope">Cosmetic</div>
<div className="h-0.5 w-6 bg-cyan-200 mt-1 rounded"></div>
</div>
<div className="bg-cyan-50 p-2 rounded border border-cyan-100">
<iconify-icon className="text-green-500 mb-1" icon="solar:shield-check-linear" width="14"></iconify-icon>
<div className="text-[8px] text-cyan-800 font-light font-manrope">Implants</div>
<div className="h-0.5 w-6 bg-cyan-200 mt-1 rounded"></div>
</div>
</div>
</div>
<div className="w-1/2 h-full">
<div className="h-full w-full rounded-xl overflow-hidden bg-cyan-100 relative">
<img alt="Clinic" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur rounded p-1.5 shadow-sm">
<div className="flex gap-0.5 text-green-400 text-[8px]">
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="8"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-black p-5 border-t border-indigo-800">
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-sm text-white font-light font-manrope">Nova Dental</h3>
<p className="text-xs text-indigo-500 mt-1 font-light font-manrope">Medical practice with patient portal.</p>
</div>
<span className="text-[10px] border border-green-900/30 text-green-300 bg-green-950/20 px-2 py-0.5 rounded font-light font-manrope">Health</span>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-indigo-900 border border-indigo-800 hover:border-indigo-700 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-500 overflow-hidden">

<div className="h-9 bg-indigo-950 border-b border-indigo-800 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-red-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-700 group-hover:bg-cyan-500 transition-colors duration-300"></div>
</div>
<div className="ml-4 flex-1 h-5 bg-indigo-900 rounded-md flex items-center px-2 border border-indigo-800/50">
<iconify-icon className="text-indigo-600 mr-2" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<div className="w-20 h-1.5 bg-indigo-800 rounded-full"></div>
</div>
</div>

<div className="h-[400px] bg-white relative overflow-hidden group-hover:bg-neutral-50 transition-colors">

<div className="absolute inset-0 w-full h-full bg-black">
<img alt="Fashion 1" className="absolute inset-0 w-full h-full object-cover animate-cycle-1" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Fashion 2" className="absolute inset-0 w-full h-full object-cover animate-cycle-2" src="https://images.unsplash.com/photo-1529139574466-a302d27f6054?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Fashion 3" className="absolute inset-0 w-full h-full object-cover animate-cycle-3" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-20"></div>
</div>

<div className="absolute inset-0 flex flex-col z-30 p-6">

<div className="flex justify-between items-center text-white border-b border-white/20 pb-4">
<span className="tracking-widest uppercase text-sm font-light font-manrope">URBN WEAR</span>
<div className="flex gap-3">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:bag-3-linear" width="16"></iconify-icon>
</div>
</div>

<div className="mt-auto mb-8">
<span className="bg-white text-black text-[9px] px-2 py-0.5 uppercase tracking-wide mb-3 inline-block font-light font-manrope">New Season</span>
<h2 className="text-3xl text-white mb-2 leading-none font-montserrat font-medium">Summer <br/>Collection.</h2>
<p className="text-neutral-300 text-[10px] mb-4 font-light font-manrope">Discover the latest trends in urban fashion.</p>
<button className="bg-white text-black text-[10px] px-6 py-2.5 uppercase tracking-wider hover:bg-neutral-200 transition-colors w-fit font-light font-manrope">
                                    Shop Now
                                </button>
</div>

<div className="border-t border-white/20 pt-3 flex justify-between text-white/60 text-[8px] uppercase tracking-wider">
<span className="font-light font-manrope">Free UK Delivery</span>
<span className="font-light font-manrope">Returns within 30 days</span>
</div>
</div>
</div>

<div className="bg-black p-5 border-t border-indigo-800">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm text-white font-light font-manrope">Urban Wear Store</h3>
<p className="text-xs text-indigo-500 mt-1 font-light font-manrope">E-commerce with automated inventory.</p>
</div>
<span className="text-[10px] border border-cyan-900/30 text-cyan-300 bg-cyan-950/20 px-2 py-0.5 rounded font-light font-manrope">Retail</span>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="pt-24 pb-24 relative bg-indigo-950/50 border-b border-white/5" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight mb-4 text-white font-montserrat font-medium">Transparent UK Pricing</h2>
<p className="text-lg text-indigo-400 font-light font-manrope">Pay a one-off build fee or spread the cost. VAT where applicable.</p>
</div>

<div className="max-w-5xl mx-auto mb-12">
<div className="rounded-2xl shadow-xl border overflow-hidden flex flex-col md:flex-row bg-black border-indigo-800">

<div className="md:w-5/12 lg:p-10 md:border-b-0 md:border-r flex flex-col border-b pt-8 pr-8 pb-8 pl-8 justify-center bg-indigo-900/50 border-indigo-800">
<h3 className="text-xl tracking-tight mb-6 text-white font-montserrat font-medium">Website Package Includes:</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0 text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-indigo-300 font-light font-manrope">Custom Design (5-7 Pages)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0 text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-indigo-300 font-light font-manrope">Mobile &amp; Tablet Responsive</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0 text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-indigo-300 font-light font-manrope">Google Business Profile Setup</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-0.5 flex-shrink-0 text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-indigo-300 font-light font-manrope">Contact Forms &amp; Booking Links</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-shrink-0 text-blue-500" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-indigo-300 font-light font-manrope">Fast UK Hosting Setup</span>
</li>
</ul>
</div>

<div className="md:w-7/12 p-8 lg:p-10 flex flex-col justify-center bg-black">
<div className="mb-8">
<h3 className="text-xl tracking-tight mb-2 text-white font-montserrat font-medium">Choose your payment plan</h3>
<p className="text-sm text-indigo-500 font-light font-manrope">Flexible options for small business cash flow.</p>
</div>
<div className="space-y-4">

<div className="relative group cursor-pointer">
<div className="flex z-10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative items-center justify-between group-hover:border-blue-500 transition-colors bg-blue-950/20 border-blue-900/50">
<div className="absolute -top-3 right-4 text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm bg-blue-500 text-white font-light font-manrope">Save £200</div>
<div className="">
<span className="block text-base text-white font-light font-manrope">One-Off Build</span>
<span className="block text-xs mt-0.5 text-blue-400 font-light font-manrope">Pay once, own forever</span>
</div>
<div className="text-right">
<span className="block text-2xl tracking-tight text-white font-montserrat font-medium">£995</span>
<span className="block text-xs text-indigo-500 font-light font-manrope">GBP</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="flex items-center justify-between p-5 border rounded-xl transition-colors border-indigo-800 bg-indigo-900 hover:border-indigo-600">
<div className="">
<span className="block text-base text-white font-light font-manrope">12-Month Plan</span>
<span className="block text-xs text-indigo-500 mt-0.5 font-light font-manrope">Lower upfront cost</span>
</div>
<div className="text-right">
<span className="block text-2xl tracking-tight text-white font-montserrat font-medium">£99</span>
<span className="block text-xs text-indigo-500 font-light font-manrope">GBP / mo</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="preview-form">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row bg-black border-indigo-800">

<div className="p-8 md:p-12 w-full">
<div className="text-center mb-10">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-950 text-blue-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl tracking-tight mb-2 text-white font-montserrat font-medium">Get Your Free Website Preview</h2>
<p className="text-indigo-500 font-light font-manrope">Fill out this form and we'll design a homepage concept for your business. No cost, no obligation.</p>
</div>

<form action="#" className="space-y-6 max-w-lg mx-auto" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm mb-1 text-indigo-400 font-light font-manrope" htmlFor="name">Your Name</label>
<input className="w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all border-indigo-700 text-white bg-indigo-900" id="name" name="name" placeholder="John Smith" required="" type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-indigo-400 font-light font-manrope" htmlFor="email">Email Address</label>
<input className="w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all border-indigo-700 text-white bg-indigo-900" id="email" name="email" placeholder="john@company.co.uk" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm mb-1 text-indigo-400 font-light font-manrope" htmlFor="business">Business Name &amp; Industry</label>
<input className="w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all border-indigo-700 text-white bg-indigo-900" id="business" name="business" placeholder="e.g. Smith Plumbing, E-commerce Store" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm mb-1 text-indigo-400 font-light font-manrope" htmlFor="details">What do you need?</label>
<textarea className="w-full rounded-lg border px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all border-indigo-700 text-white bg-indigo-900" id="details" name="details" placeholder="Tell us about your services or what you want your site to do..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group bg-white hover:bg-indigo-200 text-black shadow-indigo-900 font-light font-manrope" type="submit">
                            Request Free Preview
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-16 bg-black border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-10">

<div className="max-w-md">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded flex items-center justify-center text-xs bg-white text-black font-light font-manrope">Z</div>
<span className="text-lg tracking-tight text-white font-light font-manrope">Web Zorro</span>
</div>
<p className="text-base text-indigo-500 font-light font-manrope">Premium web design for UK small businesses.</p>
<p className="text-sm mt-2 text-indigo-600 font-light font-manrope">London • Manchester • UK Wide</p>
</div>

<div className="flex flex-col md:items-end gap-3">
<a className="text-base transition-colors text-white hover:text-blue-400 font-light font-manrope" href="mailto:webzorro@gmail.com">webzorro@gmail.com</a>
<div className="flex items-center gap-3 text-sm text-indigo-500">
<a className="transition-colors hover:text-white font-light font-manrope" href="#">Privacy Policy</a>
<span className="text-indigo-700 font-light font-manrope">|</span>
<a className="transition-colors hover:text-white font-light font-manrope" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
