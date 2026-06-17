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
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151f32', // Deep navy for high contrast
},
brand: {
50: '#fff8f6',
100: '#ffe4dd',
200: '#ffcbbf',
300: '#ff9e8a',
400: '#ff6b4a', // Primary Terracotta
500: '#f04f2d',
600: '#d93214',
900: '#6b1303',
},
sage: {
50: '#f4f7f5',
100: '#e3ebe6',
500: '#5c8c74', // Soft Green accent
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="absolute inset-0 glass border-b border-slate-200/50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<iconify-icon icon="solar:sun-2-bold" width="22"></iconify-icon>
</div>
<div>
<span className="block text-base font-bold font-display tracking-tight text-slate-900 leading-none">NOOR</span>
<span className="block text-[10px] font-semibold tracking-widest text-slate-500 uppercase leading-none mt-0.5">Academy</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-1">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-all" href="#philosophy">Philosophy</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-all" href="#curriculum">Programs</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-all" href="#campus">Campus</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-slate-50 transition-all" href="#community">Parents</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors" href="#">Parent Portal</a>
<button className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                        Schedule Tour
                        <iconify-icon className="ml-2 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-50/50 to-white rounded-full blur-3xl opacity-60"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/50 px-4 py-1.5 mb-8 backdrop-blur-sm animate-float">
<span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-xs font-semibold text-brand-700 tracking-wide uppercase">Fall 2024 Enrollment Open</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.05]">
                Cultivating curiosity in <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-600 to-amber-600">Tribeca's Future.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                A premium early learning sanctuary where modern Montessori meets compassionate care. Designed for the developing mind and the busy parent.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-14 px-8 rounded-full bg-brand-500 text-white text-base font-semibold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto">
                    Apply for Admission
                </button>
<button className="h-14 px-8 rounded-full border border-slate-200 bg-white text-slate-700 text-base font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
<iconify-icon className="text-brand-500" icon="solar:play-circle-bold" width="24"></iconify-icon>
                    Watch Our Story
                </button>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Trusted by parents working at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold font-display text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:globus-linear"></iconify-icon> GOLDMAN</h3>
<h3 className="text-xl font-bold font-display text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:city-linear"></iconify-icon> CITI</h3>
<h3 className="text-xl font-bold font-display text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:shop-linear"></iconify-icon> SHOPIFY</h3>
<h3 className="text-xl font-bold font-display text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:tv-linear"></iconify-icon> GOOGLE</h3>
<h3 className="text-xl font-bold font-display text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:case-linear"></iconify-icon> LAW FIRM</h3>
</div>
</div>
</section>

<section className="py-24 bg-white" id="philosophy">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mb-6 leading-tight">
                        More than daycare.<br/>
<span className="text-brand-500">This is early education reimagined.</span>
</h2>
<div className="space-y-6 text-lg text-slate-500">
<p>
                            We believe that the environment is the third teacher. Every corner of Noor Academy is intentionally designed to spark wonder, encourage independence, and foster social connection.
                        </p>
<p>
                            Our philosophy blends the best of Reggio Emilia creativity with Montessori structure, giving your child the tools to navigate a complex world with confidence and kindness.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">Emotional Intelligence</span>
</div>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:lightbulb-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">Critical Thinking</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative shadow-2xl shadow-slate-200">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:gallery-wide-bold" width="64"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl">
<div className="flex items-center gap-4">
<div className="text-4xl font-bold text-slate-900 font-display">1:3</div>
<div className="text-xs text-slate-600 font-medium uppercase tracking-wide leading-relaxed">
                                    Teacher to<br/>Student Ratio
                                </div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-100 rounded-full blur-2xl opacity-50 -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50 -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 mb-4">Everything modern families need.</h2>
<p className="text-slate-500">We've thought of every detail so you don't have to. Experience the peace of mind that comes with premium care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 p-8">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-keyhole-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Hospital-Grade Safety</h3>
<p className="text-slate-500 max-w-md">Biometric entry, HEPA air filtration, and 24/7 monitored security systems ensure your child is always protected.</p>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent"></div>
<iconify-icon className="absolute -bottom-4 -right-4 text-slate-50 opacity-50 -rotate-12 group-hover:scale-110 transition-transform duration-500" icon="solar:shield-check-bold" width="200"></iconify-icon>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 p-8 text-white shadow-lg shadow-brand-500/20">
<div className="flex justify-between items-start mb-auto">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
<iconify-icon icon="solar:smartphone-bold" width="20"></iconify-icon>
</div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-bold font-display mb-2">Real-time App</h3>
<p className="text-brand-100 text-sm">Photos, naps, and meals updates instantly on your phone.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 p-8">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon icon="solar:chef-hat-bold" width="80"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:leaf-bold" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold font-display text-slate-900 mb-2">Organic Nutrition</h3>
<p className="text-slate-500 text-sm">Chef-prepared meals catering to all dietary needs and allergies.</p>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
<div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 h-full">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                Masters Degree Certified
                            </div>
<h3 className="text-2xl font-bold font-display mb-3">Expert Educators</h3>
<p className="text-slate-400 text-sm leading-relaxed">Our teachers aren't just supervisors; they are career educators with degrees in Early Childhood Development, dedicated to nurturing your child's potential.</p>
</div>
<div className="flex -space-x-4">
<div className="w-14 h-14 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs">JP</div>
<div className="w-14 h-14 rounded-full border-2 border-slate-900 bg-slate-600 flex items-center justify-center text-xs">AS</div>
<div className="w-14 h-14 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-xs">MR</div>
<div className="w-14 h-14 rounded-full border-2 border-slate-900 bg-brand-500 flex items-center justify-center text-xs font-bold">+12</div>
</div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="curriculum">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 mb-12 text-center">Programs by Age</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-2xl border border-slate-100 bg-white p-2 hover:border-brand-200 transition-colors duration-300">
<div className="aspect-[4/3] rounded-xl bg-brand-50 mb-6 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
<iconify-icon className="text-brand-400" icon="solar:stars-minimalistic-bold" width="48"></iconify-icon>
</div>
<div className="px-4 pb-6">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-bold font-display text-slate-900">Infants</h3>
<span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">6w - 18m</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Focus on sensory exploration, tummy time, and building secure attachments with primary caregivers.</p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> 1:3 Ratio
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon> Daily Sensory Gym
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group rounded-2xl border border-slate-100 bg-white p-2 hover:border-blue-200 transition-colors duration-300">
<div className="aspect-[4/3] rounded-xl bg-blue-50 mb-6 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-blue-400" icon="solar:rocket-2-bold" width="48"></iconify-icon>
</div>
<div className="px-4 pb-6">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-bold font-display text-slate-900">Toddlers</h3>
<span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">18m - 3y</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Encouraging independence through language development, social play, and fine motor skills.</p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Language Immersion
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Potty Training
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group rounded-2xl border border-slate-100 bg-white p-2 hover:border-sage-500 transition-colors duration-300">
<div className="aspect-[4/3] rounded-xl bg-sage-50 mb-6 flex items-center justify-center group-hover:bg-sage-100 transition-colors">
<iconify-icon className="text-sage-500" icon="solar:diploma-bold" width="48"></iconify-icon>
</div>
<div className="px-4 pb-6">
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-bold font-display text-slate-900">Preschool</h3>
<span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">3y - 5y</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Project-based learning that prepares children for kindergarten with literacy, math, and STEAM.</p>
<ul className="space-y-2 mb-4">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-sage-500" icon="solar:check-circle-bold"></iconify-icon> Pre-Reading Skills
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-sage-500" icon="solar:check-circle-bold"></iconify-icon> Field Trips
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-sage-500 hover:text-sage-600" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3 sticky top-32">
<h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4 text-white">A day in the life.</h2>
<p className="text-slate-400 mb-8">Structure meets spontaneity. Our daily rhythm is designed to balance active learning with restorative rest.</p>
<button className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-brand-50 transition-colors">Download Sample Schedule</button>
</div>
<div className="md:w-2/3 grid gap-8 border-l border-slate-800 pl-8 md:pl-12">

<div className="relative">
<div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-brand-500 ring-4 ring-slate-900"></div>
<span className="text-brand-400 font-mono text-sm mb-1 block">08:00 AM</span>
<h4 className="text-xl font-bold mb-2">Arrival &amp; Free Play</h4>
<p className="text-slate-400 text-sm">Gentle transition from home. Children choose their initial activities.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-900"></div>
<span className="text-slate-500 font-mono text-sm mb-1 block">09:30 AM</span>
<h4 className="text-xl font-bold mb-2">Morning Circle &amp; Focus</h4>
<p className="text-slate-400 text-sm">Group songs followed by Montessori work cycles.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-900"></div>
<span className="text-slate-500 font-mono text-sm mb-1 block">11:30 AM</span>
<h4 className="text-xl font-bold mb-2">Organic Lunch</h4>
<p className="text-slate-400 text-sm">Family-style dining promoting social etiquette.</p>
</div>

<div className="relative">
<div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-slate-700 ring-4 ring-slate-900"></div>
<span className="text-slate-500 font-mono text-sm mb-1 block">03:00 PM</span>
<h4 className="text-xl font-bold mb-2">STEAM &amp; Outdoor</h4>
<p className="text-slate-400 text-sm">Art projects, science experiments, or park visits.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
<div className="absolute -left-20 -bottom-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<span className="text-brand-600 font-bold tracking-wider text-xs uppercase mb-2 block">Nutrition</span>
<h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-4">Farm to High Chair</h2>
<p className="text-slate-500 max-w-2xl mx-auto">We partner with local organic farms to provide seasonal, nutrient-dense meals designed by pediatric nutritionists.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-3">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">100% Organic</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-3">
<iconify-icon icon="solar:forbidden-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Nut Free</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
<iconify-icon icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Chef Made</h3>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-3">
<iconify-icon icon="solar:menu-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Diverse Menu</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="campus">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">Our Campus</h2>
<p className="text-slate-500 mt-2">Designed by award-winning architects for little explorers.</p>
</div>
<a className="hidden md:flex items-center text-sm font-semibold text-slate-900 hover:text-brand-600" href="#">View Gallery <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 no-scrollbar snap-x">

<div className="snap-center shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden relative group h-[250px] bg-slate-100">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:gallery-linear" width="40"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<h3 className="text-white font-bold text-lg">Sensory Gym</h3>
<p className="text-white/80 text-sm">Soft play and motor skills.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden relative group h-[250px] bg-slate-100">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:book-2-linear" width="40"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<h3 className="text-white font-bold text-lg">Library Nook</h3>
<p className="text-white/80 text-sm">Quiet corners for reading.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden relative group h-[250px] bg-slate-100">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:palette-linear" width="40"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<h3 className="text-white font-bold text-lg">Art Atelier</h3>
<p className="text-white/80 text-sm">Creative expression studio.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden relative group h-[250px] bg-slate-100">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:sun-2-linear" width="40"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
<h3 className="text-white font-bold text-lg">Private Garden</h3>
<p className="text-white/80 text-sm">Secure outdoor play area.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="community">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 text-center mb-16">Stories from our families</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The level of care at Noor is unmatched. My daughter runs into her classroom every morning. The app updates give me such peace of mind at work."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">SJ</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Sarah Jenkins</h4>
<p className="text-xs text-slate-400">Mother of Leo (2yo)</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"We toured 8 daycares in Tribeca and Noor was the clear winner. The facility is spotless and the curriculum is actually educational, not just babysitting."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">MK</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Michael Kim</h4>
<p className="text-xs text-slate-400">Father of Aria (4yo)</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The teachers really treat the children like their own. The organic food menu was a huge selling point for us as well. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">EL</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Emily Liu</h4>
<p className="text-xs text-slate-400">Mother of Sam (Infant)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/4] rounded-2xl bg-slate-100 translate-y-8"></div>
<div className="aspect-[3/4] rounded-2xl bg-slate-200"></div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-brand-500 font-bold tracking-wider text-xs uppercase mb-2 block">Our Educators</span>
<h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">Passionate experts.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">Our hiring process is rigorous. We look for educators who combine academic excellence with genuine warmth. Continuous professional development is a pillar of the Noor culture.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<h4 className="text-3xl font-bold text-slate-900">10+</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide">Years Avg Experience</p>
</div>
<div>
<h4 className="text-3xl font-bold text-slate-900">100%</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide">CPR/First Aid Certified</p>
</div>
</div>
<a className="text-sm font-semibold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-brand-600 hover:border-brand-600 transition-colors" href="#">Meet the full team</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold font-display text-slate-900 text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex items-center justify-between text-slate-900 font-semibold">
                        What are your operating hours?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        We are open Monday through Friday from 7:30 AM to 6:00 PM. We also offer extended care options until 7:00 PM for an additional fee.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex items-center justify-between text-slate-900 font-semibold">
                        Do you offer part-time enrollment?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        Yes, we offer 3-day and full-week options. We recommend full weeks for toddlers to establish a consistent routine, but we are flexible to family needs.
                    </p>
</details>
<details className="group bg-white rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex items-center justify-between text-slate-900 font-semibold">
                        How do you handle transitions/separation anxiety?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        We have a dedicated "phase-in" period where parents stay for shorter durations over the first week. Our teachers are trained to support children emotionally during drop-offs.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-blue-600/20"></div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
<div className="absolute w-96 h-96 bg-brand-500 rounded-full blur-[100px] -top-20 -left-20"></div>
<div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[100px] bottom-0 right-0"></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Secure your child's spot.</h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">Applications for the 2024-2025 school year are now being accepted. Tours are available by appointment only.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-brand-50 transition-colors shadow-lg">
                    Book a Private Tour
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 text-white font-semibold hover:bg-white/10 transition-colors">
                    Join Waitlist
                </button>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-16">
<div className="col-span-2 md:col-span-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:sun-2-bold" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold font-display text-slate-900">NOOR Academy</span>
</div>
<p className="text-slate-500 text-sm mb-6 max-w-xs">Elevating early childhood education in the heart of Tribeca. Fostering the next generation of thinkers and doers.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Programs</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Infants</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Toddlers</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Preschool</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Summer Camp</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Press</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2">
<h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Visit Us</h4>
<p className="text-sm text-slate-500 mb-2">123 Greenwich Street<br/>New York, NY 10013</p>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700" href="mailto:hello@nooracademy.com">hello@nooracademy.com</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Noor Academy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
