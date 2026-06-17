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
primary: {
100: '#0072FF',
200: '#6aa0ff',
300: '#e1ffff',
},
accent: {
100: '#4D8BFF',
200: '#003699',
},
neutral: {
100: '#333333',
200: '#5c5c5c',
},
bg: {
100: '#FFFFFF',
200: '#f5f5f5',
300: '#cccccc',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': '1.5'
            }
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-bg-200 bg-bg-100/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<div className="flex w-8 h-8 rounded-lg items-center justify-center">
<img alt="Percepvision Logo" className="w-full h-full object-contain rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png"/>
</div>
<span className="self-center whitespace-nowrap text-xl font-semibold text-neutral-100 tracking-tight">Percepvision</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<button className="text-neutral-200 hover:text-primary-100 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors" type="button">Log in</button>
<button className="text-white bg-primary-100 hover:bg-accent-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg shadow-primary-100/30" type="button">Get Started</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-200 rounded-lg md:hidden hover:bg-bg-200 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-bg-200 rounded-lg bg-bg-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li className="">
<a aria-current="page" className="block md:bg-transparent md:text-primary-100 md:p-0 text-neutral-100 rounded pt-2 pr-3 pb-2 pl-3" href="/#">Product</a>
</li>
<li className="">
<a className="block hover:bg-bg-200 md:hover:bg-transparent md:hover:text-primary-100 md:p-0 transition-colors text-neutral-200 rounded pt-2 pr-3 pb-2 pl-3" href="solutions">Solutions</a>
</li>
<li className="">
<a className="block hover:bg-bg-200 md:hover:bg-transparent md:hover:text-primary-100 md:p-0 transition-colors text-neutral-200 rounded pt-2 pr-3 pb-2 pl-3" href="blog">Blog</a>
</li>
<li className="">
<a className="block py-2 px-3 text-neutral-200 rounded hover:bg-bg-200 md:hover:bg-transparent md:hover:text-primary-100 md:p-0 transition-colors" href="#">Resources</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-28 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-200 border border-bg-300 text-xs font-medium text-neutral-200 mb-8">
<span className="w-2 h-2 rounded-full bg-primary-100 animate-pulse"></span>
                v2.0 Model Live Now
            </div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-neutral-100 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">AI-Powered Smart Safety  <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-accent-200">&amp; Video Analytics</span></h1>
<p className="leading-relaxed text-xl font-normal text-neutral-200 max-w-2xl mr-auto mb-10 ml-auto">PercepVision is a scalable AI solution that transforms your existing IP cameras into an intelligent platform for safety, security, and operational efficiency.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-neutral-100 text-white font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="contact">
    Request Demo <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="sm:w-auto border-bg-300 hover:bg-bg-200 transition-colors flex items-center justify-center gap-2 font-medium text-neutral-100 bg-white w-full border rounded-full pt-4 pr-8 pb-4 pl-8" href="#">
<svg aria-hidden="true" className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> Watch Video
  </a>
</div>

<div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-bg-300 shadow-2xl bg-white/50 backdrop-blur-sm overflow-hidden">
<div className="flex border-bg-200 bg-white/80 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-bg-300"></div>
<div className="w-3 h-3 rounded-full bg-bg-300"></div>
<div className="w-3 h-3 rounded-full bg-bg-300"></div>
</div>
<div className="ml-4 text-xs text-neutral-200 font-medium bg-bg-200 px-2 py-0.5 rounded">Product Demo</div>
</div>
<div className="aspect-video bg-black relative group overflow-hidden">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/pHhiqLOtfcM?si=EnSIkaIECMiOmarE" title="YouTube video player">
</iframe>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-bg-200 bg-bg-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-primary-100 font-bold tracking-wider uppercase text-sm mb-4 block">Why Percepvision</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100 mb-6">Redefining surveillance with intelligence.</h2>
<p className="text-lg text-neutral-200 leading-relaxed mx-auto max-w-2xl font-light">
                    Our platform provides enterprise-grade AI analytics that deliver actionable insights while keeping your infrastructure costs to a minimum.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-camera w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Legacy Camera Integration</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Works with existing CCTV &amp; IP camera systems seamlessly with no hardware replacement.
                    </p>
</div>

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-zap w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Real-time Safety Detection</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Instant alerts for safety violations, accidents, and security threats with low latency.
                    </p>
</div>

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Operational Analytics</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Reduce operational costs and improve efficiency with data-driven traffic and queue insights.
                    </p>
</div>

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-globe w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Nationwide Scalability</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Scale from single local sites to nationwide deployments with centralized management.
                    </p>
</div>

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-layers w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Flexible Deployment</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Deployment models that fit your needs: On-premise, Edge computing, or Cloud-centralized.
                    </p>
</div>

<div className="p-8 rounded-[2rem] border border-bg-300 bg-white hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 bg-primary-100/10 text-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-shield-check w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Enterprise-grade Security</h3>
<p className="text-neutral-200 leading-relaxed text-base">
                        Privacy-aware design with secure data handling and encryption at every stage.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-4xl mx-auto mb-20">
<span className="text-primary-100 font-semibold tracking-tight uppercase text-sm">Features</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-100 mt-2 mb-6">
<span className="text-primary-100">AI-driven video analytics</span> features include:
                </h2>
<p className="text-lg text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                    Our AI-driven video analytics platform effortlessly connects with your current CCTV security camera and VMS setups. Experience real-time event alerts and reports that enhance your security, crowd management and business operations.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-scan-face w-8 h-8" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Facial Recognition/access control</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-users w-8 h-8" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Occupancy Management</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-shield-alert w-8 h-8" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Intrusion Detection</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-8 h-8" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Violence/Threat Detection</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-footprints w-8 h-8" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Tailgating</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-file-search w-8 h-8" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3 15 18"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Search and Investigation</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-flame w-8 h-8" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Smoke and Fire</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-car w-8 h-8" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Car Park Management</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-bar-chart-big w-8 h-8" data-lucide="bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Business Intelligence</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-activity w-8 h-8" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Slip, Trip and Fall Detection</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-package w-8 h-8" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Unattended Object detection</h3>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-bg-300 shadow-sm flex items-center justify-center mb-5 text-neutral-100 group-hover:scale-110 group-hover:border-primary-100/30 group-hover:text-primary-100 group-hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="lucide lucide-crosshair w-8 h-8" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight">Weapon Detection</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="aspect-square rounded-2xl bg-gradient-to-tr from-bg-200 to-bg-100 border border-bg-300 p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
<div className="relative z-10 grid grid-cols-1 gap-4">
<div className="bg-white p-4 rounded-xl shadow-lg border border-bg-200 flex items-center gap-4">
<div className="p-2 bg-green-100 text-green-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<div>
<div className="text-sm font-semibold text-neutral-100">Safety Score</div>
<div className="text-xs text-neutral-200">Increased by 45%</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-lg border border-bg-200 flex items-center gap-4 ml-8">
<div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
<div>
<div className="text-sm font-semibold text-neutral-100">Response Time</div>
<div className="text-xs text-neutral-200">Reduced by 3 mins</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-lg border border-bg-200 flex items-center gap-4">
<div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><svg aria-hidden="true" className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></div>
<div className="">
<div className="text-sm font-semibold text-neutral-100">Ops Efficiency</div>
<div className="text-xs text-neutral-200">Optimized</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-primary-100 uppercase text-sm font-semibold tracking-tight">Why Aura</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mt-2 mb-6">Designed for peace of mind.</h2>
<p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                        Security shouldn't be a burden. Aura streamlines your operations while providing a layer of safety that never sleeps.
                    </p>
<ul className="space-y-6">
<li className="flex items-start">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 text-primary-100 mt-1 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="ml-4">
<h4 className="text-lg font-semibold text-neutral-100">Increased Safety</h4>
<p className="text-neutral-200 mt-1 text-lg">Proactive alerts prevent incidents before they escalate.</p>
</div>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 text-primary-100 mt-1 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="ml-4">
<h4 className="text-lg font-semibold text-neutral-100">Reduced Response Times</h4>
<p className="text-neutral-200 mt-1 text-lg">Direct integration with security teams cuts latency.</p>
</div>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 text-primary-100 mt-1 flex-shrink-0" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="ml-4">
<h4 className="text-lg font-semibold text-neutral-100">Actionable Insights</h4>
<p className="text-neutral-200 mt-1 text-lg">Data-driven decisions for property managers.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-200 border-t border-bg-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="text-primary-100 font-bold tracking-wider uppercase text-sm mb-4">The Process</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100 mb-20">Upgrade Your Existing Cameras</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-bg-300 -z-10 transform scale-x-75"></div>

<div className="relative flex flex-col items-center">
<div className="w-24 h-24 bg-white border border-bg-300 rounded-full flex items-center justify-center mb-6 z-10">
<svg aria-hidden="true" className="lucide lucide-network w-10 h-10 text-neutral-200" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Connect</h3>
<p className="text-base text-neutral-200 leading-relaxed max-w-xs mx-auto">
                        Connect to existing IP cameras and VMS seamlessly with no hardware replacement.
                    </p>
</div>

<div className="relative flex flex-col items-center">
<div className="w-24 h-24 bg-white border-2 border-primary-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary-100/10 z-10">
<svg aria-hidden="true" className="lucide lucide-cpu w-10 h-10 text-primary-100" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Analyze</h3>
<p className="text-base text-neutral-200 leading-relaxed max-w-xs mx-auto">
                        Our AI models scan your environment, learning patterns and detecting anomalies in real-time.
                    </p>
</div>

<div className="relative flex flex-col items-center">
<div className="w-24 h-24 bg-white border border-bg-300 rounded-full flex items-center justify-center mb-6 z-10">
<svg aria-hidden="true" className="lucide lucide-server w-10 h-10 text-neutral-200" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-100 mb-3 tracking-tight">Act</h3>
<p className="text-base text-neutral-200 leading-relaxed max-w-xs mx-auto">
                        Deploy AI analytics locally or in the cloud to get instant alerts on your dashboard.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-accent-200 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
<div className="p-4">
<div className="text-6xl font-semibold tracking-tighter mb-2">99.9%</div>
<div className="text-lg text-primary-200 font-medium">Detection Accuracy</div>
</div>
<div className="p-4">
<div className="text-6xl font-semibold tracking-tighter mb-2">&lt;0.1s</div>
<div className="text-lg text-primary-200 font-medium">Detection Speed</div>
</div>
<div className="p-4">
<div className="text-6xl font-semibold tracking-tighter mb-2">500+</div>
<div className="text-lg text-primary-200 font-medium">Enterprise Installs</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-neutral-100 tracking-tight">Trusted by Industry Leaders</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

<div className="bg-bg-100 p-10 rounded-2xl shadow-sm border border-bg-300">
<div className="flex gap-1 mb-6 text-primary-100">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="leading-relaxed text-xl font-medium text-neutral-100 mb-6" style={{}}>"The advanced analytics are fundamental to our security protocols. Intrusion Detection, Loitering Detection, and Unattended Object Detection provide crucial proactive monitoring capabilities, instantly alerting our teams before activity can escalate. The platform has elevated our operational planning, asset value, and public safety standards."</blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full"></div> 
<div className="">
<div className="text-base font-semibold text-neutral-100" style={{}}>Kuldeep Kainth</div>
<div className="text-sm text-neutral-200">Director of Innovative Solutions, CIS Security </div>
</div>
</div>
</div>

<div className="bg-bg-100 border-bg-300 border rounded-2xl pt-10 pr-10 pb-10 pl-10 shadow-sm">
<div className="flex gap-1 text-primary-100 mb-6 gap-x-1 gap-y-1">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="leading-relaxed text-xl font-medium text-neutral-100 mb-6">"PercepVision delivers a scalable, state-of-the-art AI video analytics platform engineered for reliability, performance, and seamless deployment across large-scale environments."</blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full"></div> 
<div className="">
<div className="text-base font-semibold text-neutral-100">Robert Yang</div>
<div className="text-sm text-neutral-200">PercepVision AI</div>
</div>
</div>
</div>
</div></div></section>

<section className="pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100 mb-6">Ready to secure your world?</h2>
<p className="text-xl text-neutral-200 mb-10 leading-relaxed">
      Join the forward-thinking companies using Aura to protect their assets and people. Schedule a personalized
      consultation today.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-primary-100 text-white font-medium rounded-full hover:bg-accent-200 transition-colors shadow-lg shadow-primary-100/30">
                    Schedule Consultation
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent text-neutral-100 border border-bg-300 font-medium rounded-full hover:bg-bg-200 transition-colors">
                    View Pricing
                </button>
</div>
</div>
</section>

<footer className="border-bg-300 border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">

<div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col pr-4 items-start">
<a className="flex items-center gap-2.5 mb-5 group" href="#">
<img alt="Percepvision Logo" className="w-8 h-8 object-contain rounded-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png"/>
<span className="text-lg font-medium text-neutral-100 tracking-tight group-hover:text-primary-100 transition-colors">Percepvision</span>
</a>
<p className="leading-relaxed text-sm font-light text-neutral-200 max-w-sm mb-6">
            Intelligent security solutions for the modern enterprise. Powered by advanced AI, designed for humans.
        </p>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a aria-label="X (formerly Twitter)" className="inline-flex align-middle ml-1 hover:text-primary-100 transition-colors" href="https://www.x.com" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="w-[14px] h-[14px] text-neutral-200 hover:text-primary-100 transition-colors" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="text-neutral-200 hover:text-primary-100 transition-colors" href="https://www.linkedin.com/company/percepvision-ai/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="YouTube" className="text-neutral-200 hover:text-primary-100 transition-colors" href="https://www.youtu.be/pHhiqLOtfcM" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-youtube w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="font-medium text-neutral-100 mb-4 text-sm">Product</h4>
<ul className="text-sm text-neutral-200 space-y-3">
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Features</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Hardware</a></li>

</ul>
</div>

<div className="">
<h4 className="font-medium text-neutral-100 mb-4 text-sm">Solutions</h4>
<ul className="space-y-3 text-sm text-neutral-200">
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Mixed-Use</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Stadiums</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="/blog">Museums</a></li>
<li><a className="hover:text-primary-100 transition-colors block" href="#">Transportation</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-neutral-100 mb-4 text-sm">Blog</h4>
<ul className="space-y-3 text-sm text-neutral-200">
<li className=""><a className="hover:text-primary-100 transition-colors block" href="/blog">Blog</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="/blog">Case Studies</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-neutral-100 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-200">
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">About Us</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Careers</a></li>
<li><a className="hover:text-primary-100 transition-colors block" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-neutral-100 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-200">
<li><a className="hover:text-primary-100 transition-colors block" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary-100 transition-colors block" href="#">Terms of Service</a></li>
<li className=""><a className="hover:text-primary-100 transition-colors block" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-bg-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-neutral-200">© 2025 Percepvision AI Limited. All rights reserved.</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm text-neutral-200 font-medium">All Systems Operational</span>
</div>
</div>
</div>
</footer>


--&gt;--&gt;
    </>
  );
}
