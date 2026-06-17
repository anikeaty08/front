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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#f0fdf4',
100: '#dcfce7',
500: '#10b981',
800: '#064e3b',
900: '#022c22',
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="iconify text-brand-800 text-3xl" data-icon="solar:server-square-bold-duotone"></span>
<span className="font-semibold text-xl tracking-tight text-gray-900">Multi-CMS</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-600 hover:text-brand-800 transition-colors" href="#">Features</a>
<a className="text-base font-medium text-gray-600 hover:text-brand-800 transition-colors" href="#">For Agencies</a>
<a className="text-base font-medium text-gray-600 hover:text-brand-800 transition-colors" href="#">Pricing</a>
<a className="text-base font-medium text-gray-600 hover:text-brand-800 transition-colors" href="#">API &amp; Developers</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-900" href="#">Login</a>
<a className="bg-brand-800 hover:bg-brand-900 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-lg shadow-brand-500/20" href="#">
                        Start Free
                    </a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">

<div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute -bottom-10 -right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl mix-blend-multiply"></div>

<div className="relative bg-gradient-to-b from-brand-800 to-teal-900 rounded-3xl p-6 shadow-2xl shadow-brand-900/20 text-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] flex flex-col justify-between overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">

<div className="absolute -right-12 top-20 w-32 h-32 rounded-full border-[16px] border-brand-500/30 blur-sm"></div>

<div className="relative z-10">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 inline-block w-full">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-brand-100 text-sm font-medium mb-1">Active Projects</p>
<h3 className="text-3xl font-semibold tracking-tight">12</h3>
</div>
<span className="iconify text-brand-300 text-2xl" data-icon="solar:widget-bold-duotone"></span>
</div>
<div className="flex items-center gap-2 text-brand-200 text-xs">
<span className="bg-brand-500/20 text-brand-100 px-2 py-0.5 rounded text-xs font-medium">99.9%</span>
<span>Uptime</span>
</div>
</div>
</div>

<div className="relative h-48 w-full mt-8">
<svg className="w-full h-full drop-shadow-lg" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="white" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="white" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 Q30,70 50,60 T100,40 T150,20 T200,10 V100 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 Q30,70 50,60 T100,40 T150,20 T200,10" fill="none" stroke="white" strokeLinecap="round" strokeWidth="2"></path>

<circle cx="150" cy="20" fill="white" r="4"></circle>
</svg>

<div className="absolute top-0 right-10 bg-white text-brand-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
                                Status: Healthy
                            </div>
</div>

<div className="space-y-3 relative z-10">
<div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-500/20 rounded-lg text-brand-100">
<span className="iconify" data-icon="solar:code-square-bold-duotone"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Project Alpha</p>
<p className="text-xs text-brand-200">Next.js • Production</p>
</div>
</div>
<p className="text-sm font-medium text-white">450 Req</p>
</div>
<div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/20 rounded-lg text-purple-200">
<span className="iconify" data-icon="solar:database-bold-duotone"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Project Beta</p>
<p className="text-xs text-brand-200">Nuxt • Staging</p>
</div>
</div>
<p className="text-sm font-medium text-white">120 Req</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Headless Multi-CMS <br/>
<span className="text-brand-800">for Agencies.</span>
</h1>
<p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        One backend for all your projects. Manage posts, pages, media, leads, and website users for unlimited client projects — all from one centralized, headless REST API.
                    </p>
<div className="flex flex-wrap gap-4 mb-10">
<button className="bg-brand-800 text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-900 transition-all shadow-lg hover:shadow-xl">
                            Start Free
                        </button>
<button className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                            View Demo API
                        </button>
</div>
<div className="flex items-center gap-8 border-t border-gray-200 pt-8">

<div className="flex flex-col gap-1">
<span className="iconify text-gray-400 text-6xl" data-icon="solar:monitor-camera-bold-duotone" style={{filter: 'grayscale(100%)', opacity: '0.6'}}></span>
<p className="text-xs text-gray-400">Web Agency</p>
</div>
<div className="flex flex-col gap-1">
<span className="iconify text-gray-400 text-6xl" data-icon="solar:city-bold-duotone" style={{filter: 'grayscale(100%)', opacity: '0.6'}}></span>
<p className="text-xs text-gray-400">Real Estate</p>
</div>
</div>
<div className="mt-8 flex gap-6 text-sm font-medium text-gray-500">
<span className="flex items-center gap-1"><span className="iconify text-brand-600" data-icon="solar:check-circle-bold"></span> 1 project free</span>
<span className="flex items-center gap-1"><span className="iconify text-brand-600" data-icon="solar:check-circle-bold"></span> 5,000 requests/month</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">A new backend for every project? Not anymore.</h2>
<span className="text-sm text-gray-400 hidden md:block">(Scroll)</span>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-stone-50 rounded-3xl p-2 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Too many backends</h3>
<p className="text-lg text-gray-500">For every small landing page, you spin up a new CMS. Setup, deploy, maintenance… over and over again.</p>
</div>
<div className="mt-4 bg-gray-900 rounded-2xl p-6 relative overflow-hidden h-64 flex flex-col justify-end">

<div className="absolute top-6 left-6 bg-gray-800 rounded-xl p-3 border border-gray-700 shadow-lg w-48 z-10">
<p className="text-gray-400 text-xs mb-1">Wordpress Instances</p>
<p className="text-white text-xl font-medium">124 Sites</p>
<div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full w-full bg-red-500"></div>
</div>
</div>
<span className="iconify absolute -right-10 bottom-10 text-brand-900 opacity-20 text-9xl rotate-12" data-icon="solar:danger-square-bold-duotone"></span>
</div>
</div>

<div className="bg-stone-50 rounded-3xl p-2 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-2">No unified API</h3>
<p className="text-lg text-gray-500">Every project uses a different structure — your dev team loses consistency.</p>
</div>
<div className="mt-4 bg-brand-900 rounded-2xl p-6 relative overflow-hidden h-64 flex flex-col justify-between">
<div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
<div className="flex justify-between mb-2">
<span className="text-brand-100 text-xs">Error Rate</span>
<span className="text-brand-100 text-xs">Dec 2023</span>
</div>
<p className="text-white text-2xl font-medium">High</p>
</div>
<div className="space-y-2">
<div className="h-2 bg-white/10 rounded-full w-full"></div>
<div className="h-2 bg-white/10 rounded-full w-2/3"></div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-3xl p-2 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Leads &amp; content</h3>
<p className="text-lg text-gray-500">Leads in form tools, content in the CMS, emails somewhere else — reporting becomes painful.</p>
</div>
<div className="mt-4 bg-black rounded-2xl p-6 relative overflow-hidden h-64">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
<span className="iconify text-white text-lg" data-icon="solar:letter-bold"></span>
</div>
<div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
<span className="iconify text-white text-lg" data-icon="solar:user-bold"></span>
</div>
<div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
<span className="iconify text-white text-lg" data-icon="solar:file-text-bold"></span>
</div>
</div>
<div className="bg-white rounded-xl p-3 shadow-lg transform translate-y-4 scale-95 opacity-90">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
<span className="iconify text-white text-xs" data-icon="solar:danger-triangle-bold"></span>
</div>
<div>
<p className="text-xs font-semibold text-gray-900">Disconnected</p>
<p className="text-[10px] text-red-600">Manual Export Required</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 text-right">
<a className="text-sm font-medium text-brand-700 hover:text-brand-900 flex items-center justify-end gap-1" href="#">
                    Perfect for agencies that manage many projects <span className="underline">View Case Studies</span> <span className="iconify" data-icon="solar:arrow-right-bold"></span>
</a>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<div className="flex items-center gap-2 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-6">
<span className="iconify" data-icon="solar:shield-bold-duotone"></span> One system, all projects
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Headless, flexible, fast.
                    </h2>
<p className="text-lg text-gray-600 mb-8">
                        Manage unlimited client projects in one account. Log in, pick a project, update content — done. Clean, consistent API routes per customer &amp; project. Perfect for Next.js, Nuxt, Laravel, and more.
                    </p>
<div className="flex gap-4 mb-12">
<button className="bg-brand-800 text-white px-6 py-3 rounded-lg font-medium text-sm shadow hover:bg-brand-900 transition-colors">
                            Start Free
                        </button>
<button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
                            View API Docs
                        </button>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Hosted in the EU</p>
<p className="text-xs text-gray-500 max-w-[200px]">Hetzner + Cloudflare CDN</p>
</div>
</div>
</div>
<div className="relative">

<div className="absolute -top-12 -right-12 w-40 h-40 border-[20px] border-brand-300 rounded-full opacity-50 blur-sm animate-pulse"></div>
<div className="bg-gradient-to-br from-brand-700 to-teal-900 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">

<div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold text-gray-900">1.2M</h3>
<p className="text-sm text-green-600 flex items-center gap-1">
<span className="iconify" data-icon="solar:graph-new-up-bold"></span> 15.2% today
                                    </p>
<p className="text-xs text-gray-400 mt-1">Total API Requests</p>
</div>
<div className="bg-brand-50 text-brand-700 p-2 rounded-lg">
<span className="iconify text-xl" data-icon="solar:server-path-bold-duotone"></span>
</div>
</div>

<div className="h-32 w-full mb-6">
<svg className="w-full h-full overflow-visible" viewbox="0 0 300 100">
<path d="M0,80 C50,80 50,40 100,50 C150,60 150,20 200,30 C250,40 250,10 300,20" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0,80 L300,80" fill="none" stroke="#f3f4f6" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
<div className="flex gap-2 justify-between">
<div className="bg-gray-50 p-3 rounded-xl flex-1">
<p className="text-xs text-gray-500 mb-1">Storage</p>
<div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-brand-500"></div>
</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl w-24 text-center">
<p className="text-xs text-gray-500 mb-1">Projects</p>
<p className="text-xs font-semibold text-gray-900">12</p>
</div>
</div>
</div>

<div className="absolute bottom-10 -right-10 w-32 h-32 border-[24px] border-brand-400/30 rounded-full z-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Your productive Multi-CMS in 3 steps</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all border border-transparent hover:border-gray-100 group">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-gray-400">01</span>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Register</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Create your project</h3>
<p className="text-base text-gray-500 mb-8 leading-relaxed">Create your account, set up your first project, and define your post types.</p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                        Learn More <span className="iconify" data-icon="solar:arrow-right-bold"></span>
</a>
</div>

<div className="p-6 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all border border-transparent hover:border-gray-100 group">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-gray-400">02</span>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Structure</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Define content</h3>
<p className="text-base text-gray-500 mb-8 leading-relaxed">Add posts, pages, media, and website users. Configure SMTP and set up your forms.</p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                        Learn More <span className="iconify" data-icon="solar:arrow-right-bold"></span>
</a>
</div>

<div className="p-6 bg-stone-50 rounded-2xl hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all border border-transparent hover:border-gray-100 group">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-gray-400">03</span>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Frontend</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Integrate the API</h3>
<p className="text-base text-gray-500 mb-8 leading-relaxed">Use the generated REST routes to power your Next.js/Nuxt frontend.</p>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                        Learn More <span className="iconify" data-icon="solar:arrow-right-bold"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 flex flex-col justify-center">

<div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-500/30 rotate-12">
<span className="iconify text-3xl" data-icon="solar:quote-up-bold"></span>
</div>
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="font-semibold text-gray-900">Mark Davis</div>
<div className="h-1 w-1 bg-gray-300 rounded-full"></div>
<div className="text-gray-500 text-sm">CTO</div>
</div>
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Testimonial" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all">
<div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30 text-white pl-1 transition-transform group-hover:scale-110">
<span className="iconify text-2xl" data-icon="solar:play-bold"></span>
</div>
</div>
</div>
</div>
<blockquote className="text-lg font-medium text-gray-900 mb-4">
                        "One CMS for all client projects. Fast setup for new Next.js projects."
                    </blockquote>
<div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
<span className="iconify text-lg" data-icon="solar:monitor-bold-duotone"></span> Web Agency
                    </div>
</div>

<div className="lg:col-span-7">
<div className="mb-12">
<p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2">Built for agencies</p>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                            Scale your <br/> client projects.
                        </h2>
</div>
<div className="grid grid-cols-3 gap-4 h-80">
<div className="rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden relative mt-8">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold">Sarah</div>
</div>
<div className="rounded-2xl overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Simple, scalable pricing <br/> for every project stage.</h2>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="bg-black rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
<div className="relative z-10 bg-white rounded-2xl p-6 max-w-xs shadow-xl">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-sm font-semibold text-gray-900">GET /api/posts</span>
</div>
<div className="h-20 w-full overflow-hidden text-[10px] font-mono text-gray-400 bg-gray-50 p-2 rounded">
<span className="text-purple-600">"data"</span>: [<br/>
                              { <span className="text-brand-600">"id"</span>: 1, <span className="text-brand-600">"title"</span>: "Hello" }<br/>
                            ]
                         </div>
</div>
<div className="relative z-10 mt-12">
<h3 className="text-2xl text-white font-medium">Developer-friendly REST API. <br/> Consistent routes.</h3>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-brand-800 to-transparent opacity-50"></div>
<span className="iconify absolute bottom-8 right-8 text-brand-900 text-8xl opacity-50 animate-pulse" data-icon="solar:code-square-bold-duotone"></span>
</div>

<div className="grid grid-cols-2 gap-6">

<div className="bg-stone-50 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-all">
<div className="flex justify-between">
<div className="flex -space-x-2">
<span className="text-sm font-semibold text-gray-500 uppercase">Free</span>
</div>
<span className="iconify text-brand-500" data-icon="solar:star-circle-bold-duotone"></span>
</div>
<div>
<h4 className="text-3xl font-semibold text-gray-900">€0</h4>
<p className="text-sm text-gray-500">1 project, 50MB</p>
</div>
</div>

<div className="bg-stone-50 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden">
<span className="iconify absolute top-4 right-4 text-green-200 text-6xl rotate-45" data-icon="solar:verified-check-bold-duotone"></span>
<div className="relative z-10">
<h4 className="text-3xl font-semibold text-gray-900">€19 <span className="text-gray-400 text-lg">/mo</span></h4>
<p className="text-sm text-gray-500">Starter</p>
</div>
</div>

<div className="bg-stone-50 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-all">
<span className="iconify text-brand-500 text-2xl" data-icon="solar:case-round-bold-duotone"></span>
<div>
<h4 className="text-3xl font-semibold text-gray-900">€99 <span className="text-gray-400 text-lg">/mo</span></h4>
<p className="text-sm text-gray-500">Agency</p>
</div>
</div>

<div className="bg-stone-50 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-all relative">
<span className="iconify text-gray-900 text-2xl" data-icon="solar:buildings-bold-duotone"></span>
<div className="absolute top-6 right-6 bg-white shadow-sm px-2 py-1 rounded border border-gray-100 transform rotate-12">
<span className="text-[10px] font-bold text-gray-400">Scale</span>
</div>
<div>
<h4 className="text-3xl font-semibold text-gray-900">€299 <span className="text-gray-400 text-lg">/mo</span></h4>
<p className="text-sm text-gray-500">Enterprise</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wide mb-4">
<span className="iconify" data-icon="solar:chat-line-bold-duotone"></span> Q&amp;A
                    </div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">
                        Frequently asked questions
                    </h2>
<button className="bg-brand-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-900 transition-all">
                        Read Docs
                    </button>
</div>
<div className="lg:col-span-8 space-y-4">

<div className="border-b border-gray-200 pb-4">
<button className="flex items-center justify-between w-full text-left py-4 group">
<span className="text-lg font-medium text-gray-900 group-hover:text-brand-800 transition-colors">Who is this Multi-CMS for?</span>
<span className="iconify text-gray-400 text-xl" data-icon="solar:add-circle-bold"></span>
</button>
</div>

<div className="border-b border-gray-200 pb-4">
<button className="flex items-center justify-between w-full text-left py-4 group">
<span className="text-lg font-medium text-gray-900 group-hover:text-brand-800 transition-colors">Can I create custom content types?</span>
<span className="iconify text-gray-400 text-xl" data-icon="solar:add-circle-bold"></span>
</button>
</div>

<div className="border-b border-gray-200 pb-4">
<button className="flex items-center justify-between w-full text-left py-4">
<span className="text-lg font-semibold text-gray-900">Where is my data hosted?</span>
<span className="iconify text-brand-600 text-xl" data-icon="solar:minus-circle-bold"></span>
</button>
<div className="py-2">
<p className="text-gray-600 text-base leading-relaxed mb-4">
<strong className="text-gray-900">EU Hosting:</strong> Hosted in the EU (Hetzner), delivered via Cloudflare CDN — fast and GDPR-friendly.
                            </p>
<a className="text-sm text-gray-400 underline hover:text-brand-600" href="#">You can learn more in our Privacy Policy.</a>
</div>
</div>

<div className="border-b border-gray-200 pb-4">
<button className="flex items-center justify-between w-full text-left py-4 group">
<span className="text-lg font-medium text-gray-900 group-hover:text-brand-800 transition-colors">Which frontend frameworks work best?</span>
<span className="iconify text-gray-400 text-xl" data-icon="solar:add-circle-bold"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-24 pb-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-16">
<div>
<div className="flex items-center gap-2 mb-8">
<div className="bg-brand-800 text-white p-1 rounded">
<span className="iconify text-xl" data-icon="solar:server-square-bold-duotone"></span>
</div>
<span className="font-bold text-lg text-gray-900 tracking-tight">MULTI-CMS</span>
</div>
<div className="grid grid-cols-2 gap-8 text-sm text-gray-500">
<div className="space-y-3">
<h4 className="font-semibold text-gray-900 mb-4">Product</h4>
<a className="block hover:text-brand-800" href="#">For Agencies</a>
<a className="block hover:text-brand-800" href="#">Features</a>
<a className="block hover:text-brand-800" href="#">Pricing</a>
<a className="block hover:text-brand-800" href="#">API Docs</a>
<a className="block hover:text-brand-800" href="#">Login</a>
</div>
<div className="space-y-3">
<h4 className="font-semibold text-gray-900 mb-4">Support</h4>
<a className="block hover:text-brand-800" href="#">Start Free</a>
<a className="block hover:text-brand-800" href="#">Contact Sales</a>
<a className="block hover:text-brand-800" href="#">Privacy Policy</a>
<a className="block hover:text-brand-800" href="#">Terms</a>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to manage all your projects in one system?</h3>
<div className="mt-6 flex gap-2">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-brand-500 transition-colors" placeholder="Type your email" type="email"/>
<button className="bg-brand-800 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-brand-900 transition-colors">Start Free</button>
</div>
</div>

<span className="iconify absolute -bottom-10 -right-10 text-green-100 text-9xl opacity-50" data-icon="solar:infinity-bold"></span>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6 opacity-60 grayscale">
<span className="iconify text-2xl" data-icon="simple-icons:nextdotjs"></span>
<span className="iconify text-2xl" data-icon="simple-icons:nuxtdotjs"></span>
<span className="iconify text-2xl" data-icon="simple-icons:laravel"></span>
<span className="iconify text-2xl" data-icon="simple-icons:cloudflare"></span>
</div>
<p className="text-xs text-gray-400">Headless Multi-CMS for agencies &amp; projects. Hosting in the EU (Hetzner) · CDN via Cloudflare</p>
</div>
</div>
</footer>

    </>
  );
}
