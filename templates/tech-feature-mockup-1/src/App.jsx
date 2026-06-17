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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
},
slate: {
850: '#1e293b',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-4">
<a className="flex items-center space-x-3 rtl:space-x-reverse" href="#">

<img alt="TechFeatures Consulting Logo" className="h-10 w-auto" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/693a6ad6e03e9d4114cba6d1.png"/>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#contact">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                    Contact Support
                </a>
<a className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-200 shadow-lg shadow-slate-900/20" href="#contact">
                    Get Assessment
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors" href="#case-studies">Case Studies</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors" href="#about">Team</a>
</li>
</ul>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-200 bg-white" id="mobile-menu">
<ul className="flex flex-col p-4 font-medium">
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100" href="#case-studies">Case Studies</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100" href="#about">Our Team</a></li>
<li><a className="block py-2 px-3 text-brand-600 font-semibold rounded hover:bg-slate-100 mt-2" href="#contact">Contact Us</a></li>
</ul>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-fade-in-up shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Chilliwack Based • Global Reach
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                        Putting tech in its place, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">working for you.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl font-normal leading-relaxed">
                        Veteran Microsoft Windows &amp; IT Specialists. A small, agile team building from the Fraser Valley to the world. We handle the tech so you can build your business.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200 w-full sm:w-auto shadow-lg shadow-brand-900/10" href="#contact">
                            Schedule Free Assessment
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all focus:ring-4 focus:ring-slate-100 w-full sm:w-auto" href="#services">
                            Explore Services
                        </a>
</div>

<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="iconify text-[#0078D4]" data-icon="logos:microsoft-icon" data-width="20"></span>
<span className="iconify" data-icon="logos:microsoft-teams" data-width="20"></span>
<span className="iconify" data-icon="logos:microsoft-outlook" data-width="20"></span>
<span className="iconify" data-icon="logos:microsoft-onedrive" data-width="20"></span>
<span className="text-xs font-medium text-slate-400">Veteran Specialists</span>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-100/50 rounded-full blur-3xl filter -z-10"></div>
<div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-indigo-100/40 rounded-full blur-3xl filter -z-10"></div>

<div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700">
<img alt="TechFeatures Abstract Identity" className="w-full max-w-md mx-auto drop-shadow-2xl" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/693a6ad6e03e9d68c3cba6d2.png"/>

<div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl" style={{animationDuration: '3s'}}>
<div className="bg-green-100 p-2 rounded-lg text-green-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-800">100% Secure</div>
<div className="text-[10px] text-slate-500">Zero Data Loss</div>
</div>
</div>
<div className="absolute -top-6 -right-6 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-xl" style={{animationDuration: '4s'}}>
<div className="bg-blue-100 p-2 rounded-lg text-blue-600">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-800">Fast Migration</div>
<div className="text-[10px] text-slate-500">Minimal Downtime</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-xs font-bold text-brand-600 tracking-widest uppercase mb-3">Our Services</h2>
<p className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Enterprise solutions, scaled for you</p>
<p className="text-slate-500">Comprehensive Microsoft 365 and IT consulting services designed to modernize your workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
<div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors border border-brand-100">
<span className="iconify text-brand-600" data-icon="lucide:arrow-right-left" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Microsoft 365 Migration</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Complete office conversions with zero-downtime implementation. We handle the audit, planning, and transfer.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><span className="iconify text-brand-500" data-icon="lucide:check" data-width="14"></span> Cloud accessibility</li>
<li className="flex items-center gap-2"><span className="iconify text-brand-500" data-icon="lucide:check" data-width="14"></span> Zero data loss</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors border border-indigo-100">
<span className="iconify text-indigo-600" data-icon="lucide:message-square" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Teams Implementation</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Transform team collaboration. We set up custom channels, integrate workflows, and provide training.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Centralized files</li>
<li className="flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Video conferencing</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors border border-blue-100">
<span className="iconify text-blue-600" data-icon="lucide:database" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Data Migration Services</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Secure transfer from on-premise legacy systems to the cloud. Your entire business history, accessible securely.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="14"></span> Legacy extraction</li>
<li className="flex items-center gap-2"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="14"></span> Secure transfer</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors border border-emerald-100">
<span className="iconify text-emerald-600" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Data Backup &amp; Security</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Enterprise-grade backup solutions and Microsoft Defender implementation. Sleep easy knowing your business is protected.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="14"></span> Disaster recovery</li>
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="14"></span> Ransomware protection</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all group">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors border border-slate-200">
<span className="iconify text-slate-600" data-icon="lucide:monitor" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Windows &amp; IT Strategy</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Strategic technology guidance for growth. System optimization, updates, and ongoing support.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check" data-width="14"></span> Tech roadmap</li>
<li className="flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check" data-width="14"></span> System optimization</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-xl flex flex-col justify-center items-start text-left relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-white" data-icon="lucide:rocket" data-width="100"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Ready to upgrade?</h3>
<p className="text-sm text-slate-400 mb-6">Schedule your free technology assessment today.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-brand-300 transition-colors" href="#contact">
                        Get in touch
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24" id="case-studies">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Proven Track Record</h2>
<p className="text-slate-500">Real results for businesses across British Columbia.</p>
</div>
<div className="hidden md:block h-px flex-1 bg-slate-200 ml-8 mb-4"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:folder-kanban" data-width="40"></span>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-1 rounded">Manufacturing</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pinnacle Custom Cabinets</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-2">40% faster project delivery through seamless remote collaboration and OneDrive structuring.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:school" data-width="40"></span>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Education &amp; Non-Profit</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Central Village Childcare Society</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-2">Instant updates across locations and improved parent satisfaction via custom Microsoft Teams channels.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-50 rounded-lg mb-4 overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="40"></span>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Non-Profit</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Hope for Freedom Society</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-2">100% data protection and grant compliance achieved with Enterprise backup and Microsoft Defender.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block p-2 bg-white rounded-lg shadow-sm border border-slate-100 mb-6">
<span className="iconify text-brand-600" data-icon="lucide:users" data-width="24"></span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Small team.<br/>Global Standards.</h2>
<div className="space-y-6 text-slate-600">
<p className="leading-relaxed">
                            We are a dedicated group of veteran Microsoft &amp; IT specialists based in Chilliwack, BC. We believe that small businesses deserve the same level of data security, efficiency, and cloud capability as large enterprises—without the corporate red tape.
                        </p>
<p className="leading-relaxed">
                            Unlike big agencies where you're just a ticket number, or freelancers who might disappear, our team provides stable, long-term partnerships. We don't just set it up; we ensure it works for the way you do business.
                        </p>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-2xl font-bold text-slate-900 mb-1">27+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Migrations</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Data Safety</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
<span className="iconify text-slate-400 opacity-20" data-icon="lucide:globe-2" data-width="240"></span>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Proudly based in</p>
<p className="text-xs text-slate-500">Chilliwack, British Columbia</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Let's put your tech in its place.</h2>
<p className="text-slate-500">Schedule your free discovery call with our specialists. We typically respond within 4 business hours.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2" htmlFor="name">Name</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm py-2.5 px-3 border transition-colors hover:border-slate-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2" htmlFor="company">Company</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm py-2.5 px-3 border transition-colors hover:border-slate-400" id="company" placeholder="Your Business Ltd." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2" htmlFor="email">Email Address</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm py-2.5 px-3 border transition-colors hover:border-slate-400" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2" htmlFor="service">Interested In</label>
<div className="relative">
<select className="block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm py-2.5 px-3 border appearance-none bg-white transition-colors hover:border-slate-400" id="service">
<option>Microsoft 365 Migration</option>
<option>Teams Implementation</option>
<option>Data Backup &amp; Security</option>
<option>General IT Consulting</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2" htmlFor="message">Message</label>
<textarea className="block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm py-2.5 px-3 border transition-colors hover:border-slate-400" id="message" placeholder="Tell us about your current technology challenges..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors" type="submit">
                        Request Free Consultation
                    </button>
</form>
<div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
<a className="flex items-center justify-center sm:justify-start gap-3 text-sm text-slate-600 hover:text-brand-600 transition-colors" href="mailto:support@techfeaturesconsulting.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                        support@techfeaturesconsulting.com
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center space-x-2 text-white mb-4">
<img alt="Logo White" className="h-8 w-auto brightness-0 invert" src="https://storage.googleapis.com/msgsndr/MjyEHjDJZG3zbHPDNIPy/media/693a6ad6e03e9d4114cba6d1.png"/>
</div>
<p className="text-sm text-slate-500 mb-4">Putting tech in its place, working for you.</p>
</div>
<div>
<h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Services</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Microsoft 365</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teams Setup</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Migration</a></li>
<li><a className="hover:text-white transition-colors" href="#">IT Strategy</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#case-studies">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Connect</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Chilliwack, BC</li>
<li className="flex items-center gap-2"><a className="hover:text-white transition-colors" href="mailto:support@techfeaturesconsulting.com">support@techfeaturesconsulting.com</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 TechFeatures Consulting. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0 opacity-50">
<span>Built in BC</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
