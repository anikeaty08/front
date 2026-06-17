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



        function showPage(pageId) {
            // Hide all pages
            const pages = ['home-page', 'page-uiux', 'page-mobile', 'page-web', 'page-nocode'];
            pages.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });

            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-zinc-100/50">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-zinc-900 flex items-center gap-2" href="#" onclick="showPage('home-page')">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg">T</span>
</div>
                TechNamah
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page')">Home</button>
<button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page'); setTimeout(() =&gt; document.getElementById('services').scrollIntoView(), 100)">Services</button>
<button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page'); setTimeout(() =&gt; document.getElementById('process').scrollIntoView(), 100)">Process</button>
<button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page'); setTimeout(() =&gt; document.getElementById('portfolio').scrollIntoView(), 100)">Work</button>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full text-sm font-semibold text-white bg-zinc-900 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-zinc-900/10 hover:shadow-orange-600/20" href="#contact">
                    Book Consultation
                </a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20" id="main-content">

<div className="fade-in" id="home-page">

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden hero-glow">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold tracking-wide uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Accepting New Projects
                    </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl text-zinc-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto font-playfair font-medium">
                        We build future-ready <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 font-playfair font-medium">digital experiences.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        TechNamah is a premium tech agency helping startups and visionary businesses transform ideas into scalable, high-impact digital products.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-600/20 hover:shadow-orange-600/30" href="#contact">
                            Get Started
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-200 hover:border-zinc-300 bg-white text-zinc-700 font-semibold text-sm flex items-center justify-center hover:bg-zinc-50 transition-all" href="#portfolio">
                            View Our Work
                        </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-200/50">
<div className="aspect-[16/9] rounded-xl bg-zinc-50 border border-zinc-100 overflow-hidden relative group">
<div className="absolute top-0 left-0 w-full h-full flex flex-col p-8">
<div className="flex gap-4 mb-8">
<div className="w-1/4 h-32 rounded-lg bg-white shadow-sm border border-zinc-100"></div>
<div className="w-1/4 h-32 rounded-lg bg-white shadow-sm border border-zinc-100"></div>
<div className="w-1/4 h-32 rounded-lg bg-white shadow-sm border border-zinc-100"></div>
<div className="w-1/4 h-32 rounded-lg bg-white shadow-sm border border-zinc-100"></div>
</div>
<div className="flex gap-4 flex-1">
<div className="w-2/3 h-full rounded-lg bg-white shadow-sm border border-zinc-100"></div>
<div className="w-1/3 h-full rounded-lg bg-zinc-100 border border-zinc-200/50"></div>
</div>
</div>
</div>
</div>
<div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-zinc-400/20 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-y border-zinc-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl tracking-tight text-zinc-900 mb-4 font-playfair font-medium">Crafting Digital Excellence</h2>
<p className="text-zinc-500 max-w-2xl mx-auto">Select a service below to explore our capabilities.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="showPage('page-uiux')">
<div className="absolute inset-0 bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                    UI/UX Design
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">User-centric strategies and intuitive interfaces.</p>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="showPage('page-mobile')">
<div className="absolute inset-0 bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                    Mobile App Dev
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Scalable iOS and Android applications.</p>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="showPage('page-web')">
<div className="absolute inset-0 bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                    Web Development
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Fast, SEO-friendly SaaS platforms.</p>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="showPage('page-nocode')">
<div className="absolute inset-0 bg-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-orange-50 group-hover:text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                                    No-Code Dev
                                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Rapid MVP development and automation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl tracking-tight text-zinc-900 mb-4 font-playfair font-medium">From Concept to Scale</h2>
<p className="text-zinc-500">A streamlined workflow designed for efficiency and quality.</p>
</div>
<div className="grid md:grid-cols-4 gap-4 relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-200 -z-10"></div>
<div className="relative bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-full bg-white border-2 border-orange-500 text-orange-600 font-bold flex items-center justify-center mb-6 z-10 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2 text-center md:text-left">Discover</h3>
<p className="text-sm text-zinc-500 text-center md:text-left">We dive deep into your requirements and business goals.</p>
</div>
<div className="relative bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-200 text-zinc-400 font-bold flex items-center justify-center mb-6 z-10 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2 text-center md:text-left">Strategy</h3>
<p className="text-sm text-zinc-500 text-center md:text-left">Creating the roadmap and high-fidelity prototypes.</p>
</div>
<div className="relative bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-200 text-zinc-400 font-bold flex items-center justify-center mb-6 z-10 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2 text-center md:text-left">Development</h3>
<p className="text-sm text-zinc-500 text-center md:text-left">Clean code execution using modern tech stacks.</p>
</div>
<div className="relative bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-full bg-white border-2 border-zinc-200 text-zinc-400 font-bold flex items-center justify-center mb-6 z-10 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2 text-center md:text-left">Scale</h3>
<p className="text-sm text-zinc-500 text-center md:text-left">Deployment, testing, and post-launch support.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl lg:text-4xl tracking-tight text-zinc-900 mb-2 font-playfair font-medium">Featured Projects</h2>
<p className="text-zinc-500">Real problems solved with elegant technology.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white mb-6 aspect-[4/3] relative">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg border border-zinc-100/50 flex flex-col p-4">
<div className="h-4 w-1/3 bg-zinc-100 rounded mb-4"></div>
<div className="flex-1 bg-zinc-50 rounded"></div>
</div>
</div>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-1">FinFlow Dashboard</h3>
<p className="text-sm text-zinc-500">SaaS Platform • FinTech</p>
</div>
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white mb-6 aspect-[4/3] relative">
<div className="absolute inset-0 bg-gradient-to-bl from-orange-50 to-zinc-50 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<div className="w-48 h-full bg-white shadow-lg rounded-t-xl mt-12 border border-zinc-100/50 p-2">
<div className="h-full bg-zinc-50 rounded-lg"></div>
</div>
</div>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-1">VitalSync App</h3>
<p className="text-sm text-zinc-500">Mobile App • HealthTech</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[80px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl text-white mb-6 tracking-tight font-playfair font-medium">Ready to build something <br/>extraordinary?</h2>
<div className="flex justify-center gap-4">
<a className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-semibold transition-colors shadow-lg shadow-orange-900/50" href="#contact">Book Consultation</a>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in min-h-screen" id="page-uiux">

<section className="pt-24 pb-16 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-600 mb-8 transition-colors" onclick="showPage('home-page')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-playfair font-medium text-zinc-900 mb-6">UI/UX Design</h1>
<p className="text-lg text-zinc-500 leading-relaxed">
                        We don't just design screens; we craft intuitive journeys. Our design process bridges the gap between user needs and business goals.
                    </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-2xl font-playfair font-medium text-zinc-900 mb-6">Logic Meets Aesthetics</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0"><iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon></div>
<div><h4 className="font-bold text-zinc-900">User Research</h4><p className="text-sm text-zinc-500 mt-1">Deep dives into user persona and behavioral analysis.</p></div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0"><iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon></div>
<div><h4 className="font-bold text-zinc-900">Wireframing</h4><p className="text-sm text-zinc-500 mt-1">Structuring information architecture for clarity.</p></div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0"><iconify-icon icon="solar:devices-linear" width="20"></iconify-icon></div>
<div><h4 className="font-bold text-zinc-900">Prototyping</h4><p className="text-sm text-zinc-500 mt-1">High-fidelity clickable prototypes for validation.</p></div>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 relative">

<div className="space-y-4">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 bg-white rounded-full shadow-sm border border-zinc-100"></div>
<div className="h-4 w-32 bg-zinc-200 rounded"></div>
</div>
<div className="h-32 bg-white rounded-xl shadow-sm border border-zinc-100"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-white rounded-xl shadow-sm border border-zinc-100"></div>
<div className="h-20 bg-white rounded-xl shadow-sm border border-zinc-100"></div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in min-h-screen" id="page-mobile">
<section className="pt-24 pb-16 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-600 mb-8 transition-colors" onclick="showPage('home-page')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:smartphone-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-playfair font-medium text-zinc-900 mb-6">Mobile App Development</h1>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Pocket-sized powerhouses. We build native and cross-platform applications that offer seamless performance on iOS and Android.
                    </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 border border-zinc-200 rounded-2xl hover:border-orange-200 transition-colors">
<iconify-icon className="text-zinc-900 mb-4" icon="solar:apple-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg mb-2">iOS Development</h3>
<p className="text-sm text-zinc-500">Swift-based native applications optimized for the Apple ecosystem.</p>
</div>
<div className="p-6 border border-zinc-200 rounded-2xl hover:border-orange-200 transition-colors">
<iconify-icon className="text-green-600 mb-4" icon="solar:android-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg mb-2">Android Development</h3>
<p className="text-sm text-zinc-500">Kotlin-based robust apps for the vast Android userbase.</p>
</div>
<div className="p-6 border border-zinc-200 rounded-2xl hover:border-orange-200 transition-colors">
<iconify-icon className="text-blue-600 mb-4" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg mb-2">Flutter / React Native</h3>
<p className="text-sm text-zinc-500">Cross-platform solutions to launch on both stores simultaneously.</p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in min-h-screen" id="page-web">
<section className="pt-24 pb-16 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-600 mb-8 transition-colors" onclick="showPage('home-page')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:monitor-camera-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-playfair font-medium text-zinc-900 mb-6">Web Development</h1>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Modern web solutions built for speed, SEO, and scalability. From complex SaaS dashboards to marketing websites.
                    </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div className="space-y-8">
<div>
<h3 className="text-xl font-bold text-zinc-900 mb-2">Frontend Engineering</h3>
<p className="text-zinc-500 text-sm mb-4">We use React.js and Next.js to build blazing fast user interfaces that feel like native apps.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">React</span>
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">Tailwind</span>
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">TypeScript</span>
</div>
</div>
<div>
<h3 className="text-xl font-bold text-zinc-900 mb-2">Backend &amp; API</h3>
<p className="text-zinc-500 text-sm mb-4">Secure and scalable server-side logic using Node.js, Python, or Go.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">Node.js</span>
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">PostgreSQL</span>
<span className="px-3 py-1 bg-zinc-100 rounded text-xs text-zinc-600">AWS</span>
</div>
</div>
</div>
<div className="bg-zinc-900 rounded-2xl p-6 text-zinc-300 font-mono text-xs overflow-hidden">
<div className="flex gap-1.5 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<p><span className="text-purple-400">import</span> { scale } <span className="text-purple-400">from</span> 'technamah';</p>
<p><br/></p>
<p><span className="text-blue-400">const</span> <span className="text-yellow-300">app</span> = <span className="text-blue-400">await</span> scale.init({</p>
<p className="pl-4">performance: <span className="text-green-400">'100%'</span>,</p>
<p className="pl-4">security: <span className="text-green-400">'enterprise'</span>,</p>
<p className="pl-4">uptime: <span className="text-green-400">99.99</span></p>
<p>});</p>
<p><br/></p>
<p className="text-zinc-500">// Ready to launch</p>
<p>app.deploy();</p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in min-h-screen" id="page-nocode">
<section className="pt-24 pb-16 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-600 mb-8 transition-colors" onclick="showPage('home-page')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Home
                    </button>
<div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-playfair font-medium text-zinc-900 mb-6">No-Code Development</h1>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Validate your idea in weeks, not months. We leverage powerful visual development tools to build fully functional MVPs at a fraction of the cost.
                    </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6 mb-16">
<div className="p-8 bg-zinc-50 rounded-2xl text-center">
<div className="text-4xl font-bold text-orange-600 mb-2 font-playfair">3x</div>
<p className="text-sm text-zinc-500 font-semibold">Faster Development</p>
</div>
<div className="p-8 bg-zinc-50 rounded-2xl text-center">
<div className="text-4xl font-bold text-orange-600 mb-2 font-playfair">50%</div>
<p className="text-sm text-zinc-500 font-semibold">Cost Reduction</p>
</div>
<div className="p-8 bg-zinc-50 rounded-2xl text-center">
<div className="text-4xl font-bold text-orange-600 mb-2 font-playfair">100%</div>
<p className="text-sm text-zinc-500 font-semibold">Scalable Logic</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="border border-zinc-200 p-6 rounded-xl flex items-start gap-4">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded flex items-center justify-center shrink-0"><iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon></div>
<div>
<h4 className="font-bold text-zinc-900">Bubble.io Development</h4>
<p className="text-sm text-zinc-500 mt-2">Complex web apps with databases, workflows, and API integrations without writing code.</p>
</div>
</div>
<div className="border border-zinc-200 p-6 rounded-xl flex items-start gap-4">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded flex items-center justify-center shrink-0"><iconify-icon icon="solar:shop-linear" width="20"></iconify-icon></div>
<div>
<h4 className="font-bold text-zinc-900">Webflow</h4>
<p className="text-sm text-zinc-500 mt-2">Pixel-perfect marketing sites and CMS driven platforms designed for high conversion.</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<section className="py-24 bg-white border-t border-zinc-100" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tight text-zinc-900 mb-2 font-playfair font-medium">Get in Touch</h2>
<p className="text-zinc-500">Fill out the form below and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Name</label>
<input className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Project Type</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="project" type="radio"/>
<div className="text-sm border border-zinc-200 rounded-lg py-2 px-3 text-center text-zinc-500 hover:bg-zinc-50 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">UI/UX</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="project" type="radio"/>
<div className="text-sm border border-zinc-200 rounded-lg py-2 px-3 text-center text-zinc-500 hover:bg-zinc-50 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">Mobile</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="project" type="radio"/>
<div className="text-sm border border-zinc-200 rounded-lg py-2 px-3 text-center text-zinc-500 hover:bg-zinc-50 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">Web</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="project" type="radio"/>
<div className="text-sm border border-zinc-200 rounded-lg py-2 px-3 text-center text-zinc-500 hover:bg-zinc-50 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">Other</div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-zinc-200 py-3 text-zinc-900 focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-300 resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-bold text-sm tracking-wide transition-colors mt-8" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-bold tracking-tighter text-zinc-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white">
<span className="font-bold text-xs">T</span>
</div>
                        TechNamah
                    </a>
<p className="text-zinc-500 text-sm max-w-sm mb-6">
                        Innovating for the future. We build scalable, high-performance digital products for startups and enterprises worldwide.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-orange-600 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-zinc-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><button className="hover:text-orange-600 transition-colors" onclick="showPage('page-uiux')">UI/UX Design</button></li>
<li><button className="hover:text-orange-600 transition-colors" onclick="showPage('page-mobile')">App Development</button></li>
<li><button className="hover:text-orange-600 transition-colors" onclick="showPage('page-web')">Web Development</button></li>
</ul>
</div>
<div>
<h4 className="font-bold text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page')">About Us</button></li>
<li><button className="hover:text-orange-600 transition-colors" onclick="showPage('home-page'); setTimeout(() =&gt; document.getElementById('process').scrollIntoView(), 100)">Process</button></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 TechNamah. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
