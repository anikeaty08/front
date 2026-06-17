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
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.5s ease-out',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="bg-gray-900 text-white p-1.5 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">PixelCraft</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all shadow-sm" href="#contact">
                        Get a Quote
                    </a>
<button className="md:hidden p-2 text-gray-500 hover:text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-4xl mr-auto mb-16 ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    Now accepting new projects for Q4
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                    Scale your business with <br className="hidden sm:block"/>
<span className="text-gradient">world-class digital talent.</span>
</h1>
<p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    We connect you with vetted experts for design, development, and marketing. 
                    Premium quality, managed delivery, zero overhead.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-gray-800 transition-all shadow-gray-200 hover:shadow-gray-300 text-sm font-medium text-white bg-gray-900 w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#contact">
                        Start a Project
                        <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all" href="#services">
                        View Services
                    </a>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/50">
<div className="absolute inset-0 bg-gray-900/5 z-10"></div>
<img alt="Digital Agency Team" className="w-full h-[400px] sm:h-[600px] object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="mt-20 border-t border-gray-100 pt-10 text-center">
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by 500+ innovative companies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<svg aria-hidden="true" className="iconify h-8 w-auto iconify--lucide" data-icon="lucide:activity" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify h-8 w-auto iconify--lucide" data-icon="lucide:aperture" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<svg aria-hidden="true" className="iconify h-8 w-auto iconify--lucide" data-icon="lucide:command" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify h-8 w-auto iconify--lucide" data-icon="lucide:cpu" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<svg aria-hidden="true" className="iconify h-8 w-auto iconify--lucide" data-icon="lucide:globe" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-70"></div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Our Services</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Scalable digital solutions tailored to your growth. We handle the complexity, you get the results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden bg-gray-100">
<img alt="Logo Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-gray-50 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</span>
<h3 className="text-lg font-semibold text-gray-900">Logo &amp; Identity</h3>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Unique, memorable brand identities designed to stand out. Includes style guides and vector assets.</p>
<ul className="space-y-2 mb-6 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3 Concepts</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited Revisions</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline" href="#contact">Get Quote <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden bg-gray-100">
<img alt="Web Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-gray-50 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</span>
<h3 className="text-lg font-semibold text-gray-900">Website Design</h3>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">High-performance websites built on WordPress or custom stacks. Mobile responsive and SEO-ready.</p>
<ul className="space-y-2 mb-6 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Responsive Design</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Speed Optimization</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline" href="#contact">Get Quote <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden bg-gray-100">
<img alt="Social Media" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-gray-50 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</span>
<h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Full-stack management of your social channels. Content creation, scheduling, and community growth.</p>
<ul className="space-y-2 mb-6 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Content Calendar</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Growth Analytics</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline" href="#contact">Get Quote <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden bg-gray-100">
<img alt="Graphic Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-gray-50 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</span>
<h3 className="text-lg font-semibold text-gray-900">Graphic Design</h3>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Marketing materials, brochures, ads, and banners designed to convert viewers into customers.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline" href="#contact">Get Quote <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden bg-gray-100">
<img alt="SEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-gray-50 text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="text-lg font-semibold text-gray-900">SEO &amp; Ads</h3>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed">Boost your organic rankings and manage paid campaigns for maximum ROI and visibility.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline" href="#contact">Get Quote <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="group bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
<div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Need something else?</h3>
<p className="text-sm text-gray-500 mb-6">Our network of experts covers everything from copywriting to app development.</p>
<a className="text-sm font-medium text-gray-900 underline" href="#contact">Contact Support</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h2>
<p className="text-gray-500 max-w-2xl mx-auto">We've simplified the agency model. Four steps to success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

<div className="relative z-10 bg-white p-6 text-center">
<div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
</div>
<div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-4">Step 01</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Briefing</h3>
<p className="text-sm text-gray-500">Fill out our intake form detailing your vision and goals.</p>
</div>

<div className="relative z-10 bg-white p-6 text-center">
<div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-4">Step 02</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Matching</h3>
<p className="text-sm text-gray-500">We assign the perfect vetted expert to your project.</p>
</div>

<div className="relative z-10 bg-white p-6 text-center">
<div className="w-24 h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-4">Step 03</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Production</h3>
<p className="text-sm text-gray-500">Work begins. We manage quality control and timelines.</p>
</div>

<div className="relative z-10 bg-white p-6 text-center">
<div className="w-24 h-24 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-gray-200">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:rocket" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<div className="inline-block px-3 py-1 bg-gray-900 rounded-full text-xs font-semibold text-white mb-4">Step 04</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h3>
<p className="text-sm text-gray-500">Receive your final assets, ready for launch.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Flexible Pricing Plans</h2>
<p className="text-gray-500 max-w-2xl mx-auto">Choose the billing cycle that fits your project needs. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative group">
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900">Daily Pass</h3>
<p className="text-sm text-gray-500 mt-2">Perfect for quick fixes and small tasks.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-gray-900 tracking-tight">$50</span>
<span className="text-gray-500">/day</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-500">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            One expert assigned
                        </li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            24h turnaround time
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-gray-200 text-gray-900 font-medium text-center rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors" href="#contact">Select Daily</a>
</div>

<div className="bg-gray-900 rounded-2xl p-8 border border-gray-900 shadow-xl relative lg:-mt-4 lg:pb-12">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white">Monthly Retainer</h3>
<p className="text-sm text-gray-400 mt-2">Continuous support for growing brands.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$999</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Dedicated project manager
                        </li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Unlimited requests
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-emerald-500 text-white font-medium text-center rounded-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20" href="#contact">Subscribe Monthly</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">Save 20%</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900">Annual Partner</h3>
<p className="text-sm text-gray-500 mt-2">Long-term scale for established companies.</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-gray-900 tracking-tight">$9,599</span>
<span className="text-gray-500">/year</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-500">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Everything in Monthly
                        </li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Strategy workshops
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white border border-gray-200 text-gray-900 font-medium text-center rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors" href="#contact">Subscribe Annually</a>
</div>
</div>

<div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
<span className="text-sm text-gray-500">Secure payments via</span>
<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">

<svg aria-hidden="true" className="iconify iconify--logos text-3xl w-[93px] h-[30px]" data-icon="logos:visa" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '93px', height: '30px', color: 'rgb(75, 85, 99)'}} viewbox="0 0 256 83" width="3.09em" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="IconifyId19b9d0902c6b344540" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></lineargradient></defs><path className="" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" fill="url(#IconifyId19b9d0902c6b344540)" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>

<svg aria-hidden="true" className="iconify text-2xl iconify--logos" data-icon="logos:mastercard" height="1em" role="img" viewbox="0 0 256 199" width="1.29em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634s-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976s4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976s4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"></path><path d="M93.298 16.903h69.15v124.251h-69.15z" fill="#FF5F00"></path><path className="" d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029s35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125" fill="#EB001B"></path><path d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125s-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029" fill="#F79E1B"></path></svg>

<svg aria-hidden="true" className="iconify text-3xl iconify--logos" data-icon="logos:stripe" height="1em" role="img" viewbox="0 0 512 214" width="2.4em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774" fill="#635BFF"></path></svg>

<svg aria-hidden="true" className="iconify text-2xl iconify--logos" data-icon="logos:paypal" height="1em" role="img" viewbox="0 0 256 302" width="0.85em" xmlns="http://www.w3.org/2000/svg"><path d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765" fill="#27346A"></path><path d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74" fill="#27346A"></path><path d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477" fill="#2790C3"></path><path d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865" fill="#1F264F"></path></svg>

<svg aria-hidden="true" className="iconify text-2xl iconify--logos" data-icon="logos:amex" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M256 138.548V0H0v256h256v-74.69c-.57 0 0-42.762 0-42.762" fill="#006FCF"></path><path d="M224.641 124.294h19.386V79.252H222.93v6.271l-3.991-6.271h-18.245v7.982l-3.421-7.982h-33.64c-1.14 0-2.28.57-3.42.57s-1.71.57-2.851 1.14c-1.14.57-1.71.57-2.85 1.14v-2.85H58.155l-2.85 7.412l-2.852-7.412H29.648v7.982l-3.42-7.982H7.981L0 98.637v25.657h13.114l2.28-6.272h4.561l2.281 6.272h100.348v-5.702l3.99 5.702h27.938v-3.42c.57.57 1.71.57 2.28 1.14c.571.57 1.711.57 2.281 1.14c1.14.57 2.281.57 3.421.57h20.526l2.28-6.272h4.562l2.28 6.272h27.938v-5.702zM256 181.31v-42.192H99.207l-3.991 5.702l-3.991-5.702H45.612v45.042h45.613l3.991-5.701l3.991 5.701h28.508v-9.692h-1.14q5.986 0 10.262-1.71v11.973h20.526v-5.702l3.991 5.702h84.953c3.421-1.14 6.842-1.711 9.693-3.421" fill="#FFF"></path><path d="M246.307 170.477h-15.394v6.271h14.824c6.272 0 10.263-3.99 10.263-9.692s-3.42-8.553-9.122-8.553h-6.842c-1.71 0-2.851-1.14-2.851-2.85s1.14-2.851 2.85-2.851h13.114L256 146.53h-15.394c-6.272 0-10.263 3.991-10.263 9.123c0 5.701 3.42 8.552 9.122 8.552h6.842c1.71 0 2.851 1.14 2.851 2.85c.57 2.281-.57 3.422-2.85 3.422m-27.937 0h-15.394v6.271H217.8c6.271 0 10.262-3.99 10.262-9.692s-3.42-8.553-9.122-8.553h-6.842c-1.71 0-2.85-1.14-2.85-2.85s1.14-2.851 2.85-2.851h13.114l2.85-6.272h-15.394c-6.272 0-10.263 3.991-10.263 9.123c0 5.701 3.421 8.552 9.123 8.552h6.842c1.71 0 2.85 1.14 2.85 2.85c.57 2.281-1.14 3.422-2.85 3.422m-19.956-18.245v-6.272h-23.946v30.218h23.946v-6.272H181.31v-6.271h16.534v-6.272H181.31v-5.702h17.104zm-38.77 0c2.85 0 3.99 1.71 3.99 3.42c0 1.711-1.14 3.421-3.99 3.421h-8.553v-7.412zm-8.553 13.113h3.421l9.123 10.833h8.552l-10.263-11.403c5.132-1.14 7.982-4.561 7.982-9.122c0-5.702-3.99-9.693-10.262-9.693h-15.965v30.218h6.842zm-18.245-9.122c0 2.28-1.14 3.99-3.99 3.99h-9.123v-7.981h8.552c2.85 0 4.561 1.71 4.561 3.99m-19.955-10.263v30.218h6.842v-10.263h9.122c6.272 0 10.833-3.99 10.833-10.262c0-5.702-3.99-10.263-10.263-10.263zm-10.263 30.218h8.552l-11.973-15.394l11.973-14.824h-8.552l-7.412 9.693l-7.412-9.693h-8.552l11.973 14.824l-11.973 14.824h8.552l7.412-9.693zm-25.657-23.946v-6.272H53.024v30.218h23.947v-6.272H59.866v-6.271h16.535v-6.272H59.866v-5.702h17.105zm138.548-53.595l11.973 18.245h8.553V86.664h-6.842v19.955l-1.71-2.85l-10.834-17.105h-9.122v30.218h6.842V96.356zm-29.648-.57l2.28-6.272l2.281 6.272l2.85 6.842H183.02zm11.973 18.815h7.412l-13.113-30.218h-9.123l-13.114 30.218h7.412l2.851-6.272h14.824zm-31.929 0l2.851-6.272h-1.71c-5.132 0-7.983-3.42-7.983-8.552v-.57c0-5.132 2.851-8.553 7.983-8.553h7.412v-6.271h-7.982c-9.123 0-14.254 6.271-14.254 14.824v.57c0 9.122 5.131 14.824 13.683 14.824m-25.657 0h6.842V87.234h-6.842zm-14.824-23.947c2.851 0 3.991 1.71 3.991 3.421s-1.14 3.421-3.99 3.421h-8.553v-7.412zm-8.552 13.114h3.42l9.123 10.833h8.553l-10.263-11.403c5.131-1.14 7.982-4.561 7.982-9.123c0-5.701-3.991-9.692-10.263-9.692H109.47v30.218h6.842zm-12.543-13.114v-6.271H80.392v30.218h23.947v-6.272H87.234v-6.271h16.534v-6.272H87.234v-5.702h17.105zm-51.885 23.947h6.272l8.552-24.517v24.517h6.842V86.664H62.717l-6.842 20.525l-6.842-20.525H37.63v30.218h6.842V92.365zm-37.06-18.815l2.28-6.272l2.281 6.272l2.851 6.842H12.543zm11.973 18.815h7.413L21.666 86.664h-8.552L0 116.882h7.412l2.85-6.272h14.825z" fill="#006FCF"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Built for speed,<br/><span className="text-gray-400">designed for quality.</span></h2>
<p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        PixelCraft was born from a simple idea: Agencies are too slow, and freelance marketplaces are too risky. We bridge the gap.
                    </p>
<p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        By using a drop-servicing model, we curate top-tier global talent and manage the process for you. This means agency-level quality at a fraction of the cost.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<div className="text-3xl font-bold text-white mb-1">500+</div>
<div className="text-sm text-gray-500">Projects Completed</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">98%</div>
<div className="text-sm text-gray-500">Client Satisfaction</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">24h</div>
<div className="text-sm text-gray-500">Avg. Response Time</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">50+</div>
<div className="text-sm text-gray-500">Vetted Experts</div>
</div>
</div>
<a className="inline-flex items-center text-sm font-medium text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors" href="#contact">
                        Read our full story <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="relative">
<img alt="Creative Team" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-90 border border-gray-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>

<div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<p className="text-sm font-bold">100% Vetted</p>
<p className="text-xs text-gray-500">Expert Talent Only</p>
</div>
</div>
<p className="text-xs text-gray-500 leading-relaxed">We rigorously test every freelancer before they join our network.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Why PixelCraft?</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<svg aria-hidden="true" className="iconify text-gray-900 mb-4 iconify--lucide" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
<p className="text-sm text-gray-500">Save up to 60% compared to traditional agencies without sacrificing quality.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<svg aria-hidden="true" className="iconify text-gray-900 mb-4 iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
<p className="text-sm text-gray-500">Streamlined workflows mean you get your deliverables in days, not weeks.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
<svg aria-hidden="true" className="iconify text-gray-900 mb-4 iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
<p className="text-sm text-gray-500">A dedicated project manager handles all communication with the experts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Client Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-yellow-500 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"PixelCraft took our vague ideas and turned them into a stunning brand identity. The logo design process was smooth and the results exceeded expectations."</p>
<div className="flex items-center gap-3">
<img alt="Sarah" className="h-10 w-10 rounded-full object-cover bg-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-500">CEO, Bloom Tech</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-yellow-500 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"We needed a website refresh urgently. Their drop-servicing model meant we got an expert developer assigned immediately. Fantastic speed."</p>
<div className="flex items-center gap-3">
<img alt="Mark" className="h-10 w-10 rounded-full object-cover bg-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-sm font-semibold text-gray-900">Mark Roberts</p>
<p className="text-xs text-gray-500">Director, Elevate Marketing</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-yellow-500 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Affordable SEO services that actually work. We saw a 40% increase in organic traffic within 3 months. Highly recommended."</p>
<div className="flex items-center gap-3">
<img alt="Emily" className="h-10 w-10 rounded-full object-cover bg-gray-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<p className="text-sm font-semibold text-gray-900">Emily Liu</p>
<p className="text-xs text-gray-500">Founder, The Good Shop</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Latest Insights</h2>
<p className="text-gray-500 max-w-xl">Tips and trends for growing your digital presence.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                    View all posts <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 relative h-48">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Design" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-gray-400">Design</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs font-medium text-gray-400">5 min read</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Why Minimalist Web Design Converts Better</h3>
<p className="text-sm text-gray-500 line-clamp-2">Exploring the psychology behind whitespace and user attention spans in modern web interfaces.</p>
</article>

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 relative h-48">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="SEO" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-gray-400">SEO</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs font-medium text-gray-400">3 min read</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">The Ultimate Guide to Local SEO in 2024</h3>
<p className="text-sm text-gray-500 line-clamp-2">How small businesses can dominate local search results with simple optimization tricks.</p>
</article>

<article className="group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 relative h-48">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Brand" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex gap-2 mb-2">
<span className="text-xs font-medium text-gray-400">Branding</span>
<span className="text-xs text-gray-300">•</span>
<span className="text-xs font-medium text-gray-400">7 min read</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Building a Brand Identity That Lasts</h3>
<p className="text-sm text-gray-500 line-clamp-2">Consistency is key. Learn how to create a style guide that scales with your company.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Let's build something <br/><span className="text-gray-400">extraordinary together.</span></h2>
<p className="text-gray-500 mb-10 text-lg">Ready to start? Fill out the form, and we'll get back to you within 24 hours with a quote and a plan.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="">
<p className="text-base font-semibold text-gray-900">Email Us</p>
<p className="text-sm text-gray-500 mb-1">jerryjoachim0@gmail.com</p>
<a className="text-xs font-medium text-gray-900 underline" href="#">Send an email</a>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
<svg aria-hidden="true" className="iconify text-gray-900 iconify--lucide" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<p className="text-base font-semibold text-gray-900">WhatsApp</p>
<p className="text-sm text-gray-500 mb-1">Chat directly with our sales team.</p>
<a className="underline text-xs font-medium text-gray-900" href="#">+255 55592543</a>
</div>
</div>
</div>
<div className="mt-12 rounded-2xl overflow-hidden h-48 w-full border border-gray-200 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<img alt="Office" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg shadow-gray-200/50">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all shadow-sm" id="first-name" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all shadow-sm" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide" htmlFor="email">Work Email</label>
<input className="block w-full rounded-lg border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all shadow-sm" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide" htmlFor="service">Service Interested In</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all shadow-sm" id="service">
<option>Logo &amp; Branding</option>
<option>Website Design</option>
<option>Social Media Management</option>
<option>SEO Services</option>
<option>Graphic Design</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="block w-full rounded-lg border-gray-200 bg-white p-3 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all shadow-sm" id="message" placeholder="Tell us about your budget, timeline, and goals..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all" type="submit">
                            Send Request
                        </button>
<p className="text-xs text-center text-gray-400 mt-4">We usually respond within 2 hours during business hours.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-gray-900 text-white p-1 rounded-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">PixelCraft</span>
</div>
<p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">Premium drop-servicing solutions for modern businesses. We connect you with the world's best talent.</p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
                            &lt;</a></div></div></div></div></footer>
    </>
  );
}
