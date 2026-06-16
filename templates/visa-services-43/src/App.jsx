import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        const domains = ['integrity', 'properties', 'ecommerce'];

        function switchDomain(selectedDomain) {
            domains.forEach(d => {
                const btn = document.getElementById(`nav-${d}`);
                const content = document.getElementById(`content-${d}`);
                
                if (d === selectedDomain) {
                    btn.className = "domain-tab flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all active:scale-95";
                    if (btn.querySelector('svg')) {
                        btn.querySelector('svg').classList.remove('text-slate-400');
                        btn.querySelector('svg').classList.add('text-slate-900');
                    }
                    content.classList.remove('hidden');
                    if(d !== 'integrity') content.classList.add('flex');
                } else {
                    btn.className = "domain-tab flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium text-slate-500 transition-all hover:bg-white/50 hover:text-slate-900 active:scale-95";
                    if (btn.querySelector('svg')) {
                        btn.querySelector('svg').classList.remove('text-slate-900');
                        btn.querySelector('svg').classList.add('text-slate-400');
                    }
                    content.classList.add('hidden');
                    content.classList.remove('flex');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Re-trigger animations after tab switch
            setTimeout(() => {
                const reveals = document.querySelectorAll(".reveal-on-scroll");
                reveals.forEach((reveal) => {
                    reveal.classList.remove("is-visible");
                    setTimeout(() => reveal.classList.add("is-visible"), 100);
                });
            }, 100);
        }

        function setLanguage(lang) {
            const translations = {
                en: { dir: "ltr", nav1: "Visas", nav2: "Properties", nav3: "Platform" },
                ar: { dir: "rtl", nav1: "التأشيرات", nav2: "العقارات", nav3: "المنصة" }
            };
            
            const t = translations[lang] || translations['en'];
            document.documentElement.dir = t.dir;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) el.innerHTML = t[key];
            });

            document.getElementById('lang-en').className = lang === 'en' ? "px-2 py-0.5 text-[10px] font-semibold text-slate-900 bg-slate-100 rounded" : "px-2 py-0.5 text-[10px] font-medium text-slate-500 hover:text-slate-900";
            document.getElementById('lang-ar').className = lang === 'ar' ? "px-2 py-0.5 text-[10px] font-semibold text-slate-900 bg-slate-100 rounded" : "px-2 py-0.5 text-[10px] font-medium text-slate-500 hover:text-slate-900";
        }

        // Apple-style Scroll Animation
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // Reveal once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll(".reveal-on-scroll");
            revealElements.forEach((el) => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl transition-all duration-500">
<div className="flex lg:px-8 h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex gap-2.5 cursor-pointer transition-opacity hover:opacity-80 w-48 items-center">
<svg className="w-[38px] h-[38px]" data-icon-replaced="true" fill="none" height="42" strokeWidth="2" style={{width: '38px', height: '38px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 100 100" width="42" xmlns="http://www.w3.org/2000/svg">
<path d="M20 90 L45 20 L70 90" fill="url(#grad1)" stroke="#0044cc" strokeWidth="0"></path>
<path className="" d="M10 90 L40 15 L55 55 L35 90 Z" fill="#2563eb"></path>
<path className="" d="M60 90 L75 55 L90 20 L90 90 Z" fill="#0f172a"></path>
<path d="M10 85 Q 50 50 90 10 L 90 25 Q 50 65 10 95 Z" fill="#60a5fa" opacity="0.9"></path>
</svg>
<div className="flex flex-col justify-center">
<span className="leading-none text-lg font-semibold text-slate-900 tracking-tight" style={{}}>Ariana Integrity</span>
</div>
</div>

<nav className="hidden md:flex items-center justify-center">
<div className="flex items-center rounded-full border border-slate-200/60 bg-slate-50/50 p-1">
<button className="domain-tab flex items-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all active:scale-95" id="nav-integrity" onclick="switchDomain('integrity')">
<span data-i18n="nav1">Visas</span>
</button>
<button className="domain-tab flex gap-2 transition-all hover:bg-white/50 hover:text-slate-900 text-sm font-medium text-slate-500 rounded-full px-5 py-1.5 active:scale-95" id="nav-properties" onclick="switchDomain('properties')">
<span data-i18n="nav2">Properties</span>
</button>
<button className="domain-tab flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium text-slate-500 transition-all hover:bg-white/50 hover:text-slate-900 active:scale-95" id="nav-ecommerce" onclick="switchDomain('ecommerce')">
<span data-i18n="nav3">Platform</span>
</button>
</div>
</nav>

<div className="flex gap-4 w-48 items-center justify-end">
<div className="hidden lg:flex items-center rounded-md border border-slate-200 bg-white p-0.5">
<button className="px-2 py-0.5 text-[10px] font-semibold text-slate-900 bg-slate-100 rounded transition-colors" id="lang-en" onclick="setLanguage('en')">EN</button>
<button className="px-2 py-0.5 text-[10px] font-medium text-slate-500 hover:text-slate-900 transition-colors" id="lang-ar" onclick="setLanguage('ar')">عربي</button>
</div>
<button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors btn-animate">
                    Log in
                </button>
</div>
</div>
</header>

<main className="pt-20">

<div className="w-full" id="content-integrity">

<section className="overflow-hidden lg:pt-28 bg-white pt-20 pb-24 relative">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-3xl -z-10"></div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 gap-x-16 gap-y-16 items-center">

<div className="reveal-on-scroll is-visible max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                #1 Document Clearing Service in UAE
                            </div>
<h1 className="sm:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-8" data-i18n="heroTitle">
                                Visa approval made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">effortless.</span>
</h1>
<p className="text-lg leading-8 text-slate-500 mb-10 max-w-lg" data-i18n="heroSub">
                                Whether you're traveling for tourism, business, or residency, Airina streamlines the bureaucratic process so you can focus on your journey.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="btn-animate inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800">
<span data-i18n="ctaPrimary">Start Application</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-animate inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900">
<svg className="lucide lucide-play-circle h-4 w-4 text-slate-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span data-i18n="ctaSecondary">How it works</span>
</button>
</div>
</div>

<div className="relative w-full max-w-md lg:ml-auto reveal-on-scroll delay-200 is-visible">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl transform rotate-3 scale-105 opacity-60 blur-xl"></div>
<div className="relative rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5 border border-white">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-semibold text-slate-900">Visa Requirements</h3>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span className="w-2 h-2 rounded-full bg-green-400"></span>
</div>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="space-y-2">
<label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Citizenship</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<select className="block w-full rounded-xl border-0 bg-slate-50 py-3.5 pl-10 pr-8 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all hover:bg-slate-100/50">
<option>United Arab Emirates</option>
<option>United Kingdom</option>
<option>India</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Destination</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<select className="block w-full rounded-xl border-0 bg-slate-50 py-3.5 pl-10 pr-8 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all hover:bg-slate-100/50">
<option>Schengen Area</option>
<option>United Kingdom</option>
<option>USA</option>
</select>
</div>
</div>
<button className="btn-animate w-full rounded-xl bg-blue-600 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500">
                                        Check Eligibility
                                    </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50/50 border-slate-100 border-t pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="mx-auto max-w-3xl text-center mb-20 reveal-on-scroll">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="h-px w-8 bg-slate-300"></span>
<span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Global Reach</span>
<span className="h-px w-8 bg-slate-300"></span>
</div>
<h2 className="text-xl font-medium text-amber-500 mb-3">Airina Integrity</h2>
<h3 className="md:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-6">Visa Assistance Services UAE</h3>
<p className="text-lg leading-relaxed text-slate-600">
                            Airina Integrity (AI) is a trusted visa service in Dubai that provides global visa services for citizens and residents in the UAE. With Airina, you can find answers to your visa questions. We ensure that you get the most value for money in your visa application process.
                        </p>
</div>

<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="USA" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f625d75-4520-4ef7-82f0-b9cf5a2c3278_800w.png" style={{}}/>
<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">USA</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="UK" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">UK</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Canada" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-amber-500 transition-colors group-hover:text-amber-600">Canada</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Australia" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">Australia</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="New Zealand" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">New Zealand</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Turkey" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">Turkey</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Italy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">Italy</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="France" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">France</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-300">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Germany" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">Germany</h4>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-1">
<img alt="Switzerland" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h4 className="mt-4 text-center text-base font-semibold text-slate-900 transition-colors group-hover:text-blue-600">Switzerland</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Comprehensive Visa Solutions</h2>
<p className="mt-4 text-lg text-slate-600">We handle the complexities of global mobility so you don't have to.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 reveal-on-scroll delay-100">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-briefcase h-6 w-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900">Business Visas</h3>
<p className="mt-2 text-sm leading-6 text-slate-500">Expedited processing for corporate travelers and delegations.</p>
</div>

<div className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 reveal-on-scroll delay-200">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-palmtree h-6 w-6" data-lucide="palmtree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900">Tourist Visas</h3>
<p className="mt-2 text-sm leading-6 text-slate-500">Tourist visa assistance for over 120 countries with high approval rates.</p>
</div>

<div className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 reveal-on-scroll delay-300">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-gem h-6 w-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900">Golden Visa</h3>
<p className="mt-2 text-sm leading-6 text-slate-500">Expert guidance on investment and talent-based Golden Visas.</p>
</div>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-slate-900 py-20 sm:py-24 reveal-on-scroll">
<div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20">
<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" r="512"></circle>
<defs>
<radialgradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
<stop stop-color="#3b82f6"></stop>
<stop offset="1" stop-color="#1d4ed8"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to start your journey?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                        Join thousands of satisfied travelers who trusted Airina Integrity for their visa needs.
                    </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<button className="btn-animate rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Start Application
                        </button>
<button className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors">
                            Contact Support <span aria-hidden="true">→</span>
</button>
</div>
</div>
</section>
</div>

<section className="hidden min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-slate-50 px-6" id="content-properties">
<div className="text-center max-w-lg reveal-on-scroll">
<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200">
<svg className="lucide lucide-building-2 h-10 w-10 text-slate-900" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900" data-i18n="propTitle">Real Estate Division</h2>
<div className="mt-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
<span className="mr-1.5 h-2 w-2 rounded-full bg-orange-500"></span>
                    Coming Soon
                </div>
</div>
</section>

<section className="hidden min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-white px-6" id="content-ecommerce">
<div className="text-center max-w-lg reveal-on-scroll">
<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900 shadow-xl">
<svg className="lucide lucide-layout-dashboard h-10 w-10 text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900" data-i18n="ecomTitle">Airina Platform</h2>
<div className="mt-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
<span className="mr-1.5 h-2 w-2 rounded-full bg-blue-500"></span>
                    Beta Access
                </div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-bold tracking-tight text-slate-900">Airina</span>
<span className="text-xs text-slate-400">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 btn-animate" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-900 btn-animate" href="#"><svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 btn-animate">
<a className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600" href="#">
<svg className="h-7 w-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
</a>
</div>


    </>
  );
}
