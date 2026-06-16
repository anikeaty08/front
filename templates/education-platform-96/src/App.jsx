import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-600 text-white overflow-hidden relative flex items-center h-8">
<div className="whitespace-nowrap animate-marquee flex items-center space-x-8 text-xs font-medium tracking-wide">
<span>🔥 Admissions open for B.Tech 2024 at Top Private Universities</span>
<span>•</span>
<span>✨ Get up to 50% scholarship based on 12th Marks</span>
<span>•</span>
<span>🚀 AI Career Guidance Test is now FREE for a limited time</span>
<span>•</span>
<span>🔥 Admissions open for B.Tech 2024 at Top Private Universities</span>
<span>•</span>
<span>✨ Get up to 50% scholarship based on 12th Marks</span>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">
                    EDUPATH
                </a>

<div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-500">
<a className="text-slate-900 transition-colors" href="#">Colleges</a>
<a className="hover:text-slate-900 transition-colors" href="#">Courses</a>
<a className="hover:text-slate-900 transition-colors flex items-center gap-1" href="#">
                        Career Test
                        <span className="bg-brand-100 text-brand-600 text-[0.65rem] px-1.5 py-0.5 rounded-full uppercase tracking-tighter font-semibold">New</span>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">Internships</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log in</button>
<button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-sm shadow-slate-900/10">
                    Sign Up Free
                </button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-brand-500/10 rounded-full blur-3xl opacity-50 -z-10 animate-blob mix-blend-multiply"></div>
<div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-50 -z-10 animate-blob animation-delay-2000 mix-blend-multiply"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                Trusted by 2M+ Students Nationwide
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                Find Your Perfect <br className="hidden md:block"/>
<span className="text-gradient">Career &amp; College.</span>
</h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Discover top colleges, explore career paths, and secure your future with our AI-driven guidance platform.
            </p>

<div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg shadow-slate-200/50 border border-slate-200 p-2 flex flex-col md:flex-row items-center gap-2 relative z-10">
<div className="flex items-center w-full md:w-auto flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
<iconify-icon className="text-slate-400 text-lg mr-2" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="City or State" type="text"/>
</div>
<div className="flex items-center w-full flex-1 px-4 py-2">
<iconify-icon className="text-slate-400 text-lg mr-2" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Search colleges, courses, exams..." type="text"/>
</div>
<button className="w-full md:w-auto bg-brand-600 text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-brand-500 transition-colors shadow-sm active:scale-95 flex items-center justify-center gap-2">
                    Search
                </button>
</div>
<div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
<span>Popular:</span>
<a className="hover:text-brand-600 transition-colors border-b border-dashed border-slate-300 hover:border-brand-600" href="#">B.Tech in CSE</a>
<a className="hover:text-brand-600 transition-colors border-b border-dashed border-slate-300 hover:border-brand-600" href="#">MBA Marketing</a>
<a className="hover:text-brand-600 transition-colors border-b border-dashed border-slate-300 hover:border-brand-600" href="#">MBBS</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Explore Disciplines</h2>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 group" href="#">
                View all <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Engineering</h3>
<p className="text-xs text-slate-500 mt-0.5">4,200+ Colleges</p>
</div>
</a>

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Medical</h3>
<p className="text-xs text-slate-500 mt-0.5">1,100+ Colleges</p>
</div>
</a>

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Management</h3>
<p className="text-xs text-slate-500 mt-0.5">3,500+ Colleges</p>
</div>
</a>

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Law</h3>
<p className="text-xs text-slate-500 mt-0.5">800+ Colleges</p>
</div>
</a>

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Design</h3>
<p className="text-xs text-slate-500 mt-0.5">600+ Colleges</p>
</div>
</a>

<a className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-100/50 transition-all flex flex-col items-center text-center gap-3" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-50 transition-colors">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Architecture</h3>
<p className="text-xs text-slate-500 mt-0.5">450+ Colleges</p>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Top Colleges in India</h2>
<p className="text-sm text-slate-500 font-medium">Found 12,450 results based on your preferences</p>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 shrink-0 space-y-8">

<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Location</h4>
<div className="relative mb-4">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow" placeholder="Search city..." type="text"/>
</div>
<div className="space-y-3">
<label className="custom-checkbox flex items-center cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Delhi NCR</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Bangalore</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Mumbai</span>
</label>
</div>
</div>
<div className="h-px bg-slate-200"></div>

<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Course Type</h4>
<div className="space-y-3">
<label className="custom-checkbox flex items-center cursor-pointer group">
<input checked="" className="hidden" name="ctype" type="radio"/>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 transition-opacity"></div>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Full Time</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="hidden" name="ctype" type="radio"/>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 transition-opacity"></div>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Part Time</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="hidden" name="ctype" type="radio"/>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center mr-3 transition-colors group-hover:border-brand-500">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 transition-opacity"></div>
</div>
<span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Distance</span>
</label>
</div>
</div>
<div className="h-px bg-slate-200"></div>

<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Fees per year</h4>
<input className="w-full accent-brand-500" max="100" min="0" type="range"/>
<div className="flex justify-between text-xs text-slate-500 font-medium mt-2">
<span>₹0</span>
<span>₹25L+</span>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-2">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm cursor-pointer hover:bg-slate-50">
                            Engineering <iconify-icon className="ml-1.5 text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
</span>
</div>

<button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-sm">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
                        Sort by: Rating
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all group flex flex-col h-full">
<div className="h-32 bg-slate-100 relative w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

<div className="w-full h-full bg-slate-200"></div>
<div className="absolute bottom-3 left-4 z-20 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[0.65rem] font-semibold px-2 py-0.5 rounded uppercase tracking-tighter">Private</span>
<span className="bg-brand-500/90 backdrop-blur-sm text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
<iconify-icon className="text-[0.6rem]" icon="solar:star-bold"></iconify-icon> 4.8
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex gap-4 items-start mb-3">

<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 -mt-8 z-20">
<span className="font-semibold tracking-tighter text-slate-900">IIT</span>
</div>
<div className="flex-1">
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-brand-600 transition-colors">Indian Institute of Technology, Delhi</h3>
<p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> New Delhi, Delhi NCR
                                    </p>
</div>
</div>
<div className="mt-auto pt-4 space-y-3 border-t border-slate-100">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 font-medium text-xs">B.Tech Fees</span>
<span className="text-slate-900 font-semibold tracking-tight">₹2.15 Lakhs <span className="text-slate-400 font-medium text-[0.65rem]">/yr</span></span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Computer Science</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Mechanical</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-500">+12 more</span>
</div>
</div>
</div>
<div className="p-2 border-t border-slate-100 bg-slate-50/50 flex gap-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">View Details</button>
<button className="flex-1 bg-brand-600 text-white text-xs font-semibold py-2 rounded-lg hover:bg-brand-500 transition-colors shadow-sm">Apply Now</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all group flex flex-col h-full">
<div className="h-32 bg-slate-100 relative w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
<div className="w-full h-full bg-slate-200"></div>
<div className="absolute bottom-3 left-4 z-20 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[0.65rem] font-semibold px-2 py-0.5 rounded uppercase tracking-tighter">Deemed</span>
<span className="bg-brand-500/90 backdrop-blur-sm text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
<iconify-icon className="text-[0.6rem]" icon="solar:star-bold"></iconify-icon> 4.5
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex gap-4 items-start mb-3">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 -mt-8 z-20">
<span className="font-semibold tracking-tighter text-slate-900 text-xs">BITS</span>
</div>
<div className="flex-1">
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-brand-600 transition-colors">Birla Institute of Technology</h3>
<p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Pilani, Rajasthan
                                    </p>
</div>
</div>
<div className="mt-auto pt-4 space-y-3 border-t border-slate-100">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 font-medium text-xs">B.Tech Fees</span>
<span className="text-slate-900 font-semibold tracking-tight">₹5.42 Lakhs <span className="text-slate-400 font-medium text-[0.65rem]">/yr</span></span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Electronics</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Chemical</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-500">+8 more</span>
</div>
</div>
</div>
<div className="p-2 border-t border-slate-100 bg-slate-50/50 flex gap-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">View Details</button>
<button className="flex-1 bg-brand-600 text-white text-xs font-semibold py-2 rounded-lg hover:bg-brand-500 transition-colors shadow-sm">Apply Now</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all group flex flex-col h-full">
<div className="h-32 bg-slate-100 relative w-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
<div className="w-full h-full bg-slate-200"></div>
<div className="absolute bottom-3 left-4 z-20 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[0.65rem] font-semibold px-2 py-0.5 rounded uppercase tracking-tighter">Private</span>
<span className="bg-brand-500/90 backdrop-blur-sm text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
<iconify-icon className="text-[0.6rem]" icon="solar:star-bold"></iconify-icon> 4.3
                                </span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex gap-4 items-start mb-3">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 -mt-8 z-20">
<span className="font-semibold tracking-tighter text-slate-900 text-xs">VIT</span>
</div>
<div className="flex-1">
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-brand-600 transition-colors">Vellore Institute of Technology</h3>
<p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Vellore, Tamil Nadu
                                    </p>
</div>
</div>
<div className="mt-auto pt-4 space-y-3 border-t border-slate-100">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 font-medium text-xs">B.Tech Fees</span>
<span className="text-slate-900 font-semibold tracking-tight">₹1.98 Lakhs <span className="text-slate-400 font-medium text-[0.65rem]">/yr</span></span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Information Tech</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-600">Civil</span>
<span className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[0.65rem] font-medium text-slate-500">+15 more</span>
</div>
</div>
</div>
<div className="p-2 border-t border-slate-100 bg-slate-50/50 flex gap-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors">View Details</button>
<button className="flex-1 bg-brand-600 text-white text-xs font-semibold py-2 rounded-lg hover:bg-brand-500 transition-colors shadow-sm">Apply Now</button>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="bg-white border border-slate-200 text-slate-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                        Load More Colleges
                    </button>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative z-10 px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-brand-400 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Powered by NextGen AI
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Confused about your career?</h2>
<p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                        Take our 10-minute scientifically backed psychometric test. Discover career paths tailored to your personality, skills, and interests.
                    </p>
<button className="bg-brand-500 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/25 active:scale-95 flex items-center gap-2 mx-auto md:mx-0">
                        Start Free Assessment <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="w-full md:w-[400px] shrink-0 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6">
<h3 className="text-white text-sm font-semibold tracking-tight mb-4">How it works</h3>
<ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-700">
<li className="relative pl-8 text-sm">
<span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center text-[0.65rem] text-slate-400 font-bold z-10">1</span>
<span className="text-white font-medium block">Answer Simple Questions</span>
<span className="text-slate-400 text-xs block mt-0.5">Scenario based quick assessment.</span>
</li>
<li className="relative pl-8 text-sm">
<span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center text-[0.65rem] text-slate-400 font-bold z-10">2</span>
<span className="text-white font-medium block">Get Detailed Report</span>
<span className="text-slate-400 text-xs block mt-0.5">Strengths, weaknesses, and top 3 paths.</span>
</li>
<li className="relative pl-8 text-sm">
<span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-500 border border-brand-400 flex items-center justify-center text-[0.65rem] text-white font-bold z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]">3</span>
<span className="text-white font-medium block">Map Colleges &amp; Courses</span>
<span className="text-brand-400 text-xs block mt-0.5">Directly explore best fitting options.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Featured Internships</h2>
<p className="text-sm text-slate-500 font-medium mt-1">Kickstart your career with top companies</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 hidden md:flex items-center gap-1 group" href="#">
                Browse all <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-brand-200 transition-all group">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center text-white font-bold tracking-tighter text-xs">GO</div>
<span className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug">Software Engineer Intern</h3>
<p className="text-sm text-slate-500 font-medium mb-4">TechFlow Inc.</p>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Remote (India)
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear"></iconify-icon> ₹25,000 / month
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon> 6 Months
                    </div>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold py-2 rounded-lg transition-colors">Apply Now</button>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-brand-200 transition-all group">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold tracking-tighter text-xs">AZ</div>
<span className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug">Marketing Analyst</h3>
<p className="text-sm text-slate-500 font-medium mb-4">Azure Media</p>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Bangalore
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear"></iconify-icon> ₹15,000 / month
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon> 3 Months
                    </div>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold py-2 rounded-lg transition-colors">Apply Now</button>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-brand-200 transition-all group">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded bg-orange-500 flex items-center justify-center text-white font-bold tracking-tighter text-xs">ST</div>
<span className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug">UI/UX Design Intern</h3>
<p className="text-sm text-slate-500 font-medium mb-4">Studio Nexa</p>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Mumbai
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear"></iconify-icon> ₹20,000 / month
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon> 4 Months
                    </div>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold py-2 rounded-lg transition-colors">Apply Now</button>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-brand-200 transition-all group">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 rounded bg-purple-600 flex items-center justify-center text-white font-bold tracking-tighter text-xs">NX</div>
<span className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug">Data Science Intern</h3>
<p className="text-sm text-slate-500 font-medium mb-4">Nexus Analytics</p>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Remote
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear"></iconify-icon> ₹30,000 / month
                    </div>
<div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon> 6 Months
                    </div>
</div>
<button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold py-2 rounded-lg transition-colors">Apply Now</button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
<div className="lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-slate-900 mb-4 inline-block" href="#">
                        EDUPATH
                    </a>
<p className="text-sm text-slate-500 font-medium mb-6 max-w-sm leading-relaxed">
                        The most trusted college discovery and career guidance platform. Empowering students to make data-driven career choices.
                    </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:minimalistic-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:minimalistic-linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:minimalistic-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Platform</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Browse Colleges</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">AI Career Test</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Find Internships</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Admission 2024</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Resources</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Exam Updates</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Career Articles</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">E-Books &amp; Guides</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">College Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-4">Company</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-medium">© 2024 EduPath Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    Made with <iconify-icon className="text-red-500" icon="solar:heart-bold"></iconify-icon> for Students
                </div>
</div>
</div>
</footer>

    </>
  );
}
