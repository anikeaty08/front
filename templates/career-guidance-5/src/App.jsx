import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#4F8CFF',
accent: '#22C55E',
background: '#F8FAFC',
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                    NXTSTEP
                </a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Colleges</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Courses</a>
<a className="text-sm font-medium text-primary bg-blue-50 px-3 py-1.5 rounded-full transition-colors" href="#">Jobs &amp; Internships</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign In</a>
<a className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200" href="#">
                    Take Career Test
                </a>
</div>
</div>
</header>

<section className="relative bg-gradient-to-b from-blue-50/50 to-background pt-20 pb-16 px-4">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                Find Jobs &amp; Internships to <span className="text-primary">Kickstart Your Career</span>
</h1>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">
                Explore thousands of opportunities tailored for students, freshers, and early-career professionals across top companies.
            </p>

<div className="mt-10 bg-white p-2 sm:p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col sm:flex-row gap-3 items-center">

<div className="flex-1 flex items-center gap-3 px-4 w-full h-12">
<iconify-icon className="text-slate-400 text-lg flex-shrink-0" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="Job title, skills, or company" type="text"/>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-200"></div>

<div className="flex-1 flex items-center gap-3 px-4 w-full h-12 border-t border-slate-100 sm:border-none">
<iconify-icon className="text-slate-400 text-lg flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" placeholder="City or region" type="text"/>
</div>
<div className="hidden sm:block w-px h-8 bg-slate-200"></div>

<label className="hidden sm:flex items-center gap-2 px-4 cursor-pointer group whitespace-nowrap">
<div className="relative w-4 h-4 flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-primary checked:border-primary transition-colors focus:ring-2 focus:ring-blue-100 focus:outline-none cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Remote only</span>
</label>

<button className="w-full sm:w-auto bg-primary text-white px-8 py-3 h-12 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center gap-2 flex-shrink-0">
                    Search Jobs
                </button>
</div>

<div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
<span className="text-xs text-slate-400 font-medium py-2 px-1">Popular:</span>
<button className="bg-white border border-slate-200 text-slate-600 rounded-full px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors shadow-sm shadow-slate-100/50">Internship</button>
<button className="bg-white border border-slate-200 text-slate-600 rounded-full px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors shadow-sm shadow-slate-100/50">Full-Time</button>
<button className="bg-white border border-slate-200 text-slate-600 rounded-full px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors shadow-sm shadow-slate-100/50">React JS</button>
<button className="bg-white border border-slate-200 text-slate-600 rounded-full px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition-colors shadow-sm shadow-slate-100/50">Marketing</button>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-center sm:justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-primary text-lg" icon="solar:briefcase-linear"></iconify-icon>
<span className="text-sm font-medium">5,000+ Job Opportunities</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-primary text-lg" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm font-medium">Top Hiring Companies</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-primary text-lg" icon="solar:diploma-linear"></iconify-icon>
<span className="text-sm font-medium">Internships for Freshers</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-primary text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-medium">AI Career Matching</span>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

<aside className="hidden lg:block col-span-1 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Filters</h2>
<button className="text-xs font-medium text-slate-400 hover:text-primary transition-colors">Clear all</button>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-900">Job Type</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-primary checked:border-primary transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Internship</span>
<span className="text-xs text-slate-400 ml-auto">128</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-primary checked:border-primary transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Full-Time</span>
<span className="text-xs text-slate-400 ml-auto">84</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-primary checked:border-primary transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Part-Time</span>
<span className="text-xs text-slate-400 ml-auto">32</span>
</label>
</div>
</div>

<div className="space-y-4 pt-6 border-t border-slate-100">
<h3 className="text-sm font-medium text-slate-900">Experience</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-slate-300 rounded-full bg-white checked:border-primary transition-colors cursor-pointer" name="exp" type="radio"/>
<div className="absolute w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Fresher (No experience)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded-full bg-white checked:border-primary transition-colors cursor-pointer" name="exp" type="radio"/>
<div className="absolute w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">0 - 1 Years</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-slate-300 rounded-full bg-white checked:border-primary transition-colors cursor-pointer" name="exp" type="radio"/>
<div className="absolute w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">1 - 3 Years</span>
</label>
</div>
</div>

<div className="space-y-4 pt-6 border-t border-slate-100">
<h3 className="text-sm font-medium text-slate-900">Work Mode</h3>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-600 peer-checked:border-primary peer-checked:bg-blue-50 peer-checked:text-primary transition-all">
                            Remote
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-600 peer-checked:border-primary peer-checked:bg-blue-50 peer-checked:text-primary transition-all">
                            On-site
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-600 peer-checked:border-primary peer-checked:bg-blue-50 peer-checked:text-primary transition-all">
                            Hybrid
                        </div>
</label>
</div>
</div>

<div className="space-y-4 pt-6 border-t border-slate-100">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900">Stipend / Salary</h3>
<span className="text-xs text-slate-500 font-medium">$2k - $8k+</span>
</div>
<div className="relative h-1.5 bg-slate-100 rounded-full mt-4">
<div className="absolute inset-y-0 left-[20%] right-[30%] bg-primary rounded-full"></div>
<div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-4 h-4 bg-white border-[2.5px] border-primary rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
<div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-4 h-4 bg-white border-[2.5px] border-primary rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</aside>

<div className="col-span-1 lg:col-span-3">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">1-10</span> of 250 jobs</p>
<div className="flex items-center gap-3">
<span className="text-sm text-slate-500">Sort by:</span>
<div className="relative">
<select className="appearance-none bg-white border border-slate-200 text-sm font-medium rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-primary cursor-pointer text-slate-700 shadow-sm">
<option>Most Relevant</option>
<option>Latest Posted</option>
<option>Salary: High to Low</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Recommended for You</h4>
<p className="text-sm text-slate-600 mt-1">Based on your interest in <span className="font-medium text-slate-800">Frontend Development</span> and <span className="font-medium text-slate-800">Marketing</span>.</p>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-200 group relative">
<div className="absolute top-0 right-8 -mt-2.5 px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-semibold uppercase tracking-wider rounded-full border border-amber-200 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:fire-linear"></iconify-icon> High Demand
                    </div>
<div className="flex flex-col sm:flex-row gap-5">

<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-xl font-semibold text-slate-800 tracking-tighter">
                            V
                        </div>

<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-primary transition-colors truncate">Frontend Developer Intern</h3>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                        Vercel <span className="w-1 h-1 rounded-full bg-slate-300"></span> San Francisco, CA
                                    </p>
</div>

<button className="text-slate-300 hover:text-primary transition-colors mt-1">
<iconify-icon className="text-xl" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap gap-3 mt-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-primary text-xs font-medium border border-blue-100">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon> Internship
                                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200">
<iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon> Remote
                                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-accent text-xs font-medium border border-green-100">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> $3,000/mo
                                </span>
</div>

<div className="flex flex-wrap gap-2 mt-4">
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">React</span>
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Next.js</span>
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Tailwind</span>
</div>
<p className="text-sm text-slate-600 mt-4 line-clamp-2" style={{display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                                We are looking for an enthusiastic Frontend Engineering Intern to join our core product team. You will help build fast, accessible, and beautiful user interfaces for millions of developers.
                            </p>
</div>
</div>

<div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Posted 2 hours ago
                        </span>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">Details</button>
<button className="flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-200 group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-xl font-semibold text-slate-800 tracking-tighter">
                            S
                        </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-primary transition-colors truncate">Junior Product Designer</h3>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                        Stripe <span className="w-1 h-1 rounded-full bg-slate-300"></span> New York, NY
                                    </p>
</div>
<button className="text-slate-300 hover:text-primary transition-colors mt-1">
<iconify-icon className="text-xl" icon="solar:bookmark-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-wrap gap-3 mt-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon> Full-Time
                                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200">
<iconify-icon icon="solar:buildings-linear"></iconify-icon> Hybrid
                                </span>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Figma</span>
<span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Prototyping</span>
</div>
<p className="text-sm text-slate-600 mt-4 line-clamp-2" style={{display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                                Join our design team to create intuitive financial tools. Ideal for recent graduates with a strong portfolio showing systems thinking and visual execution.
                            </p>
</div>
</div>
<div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Posted 1 day ago
                        </span>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">Details</button>
<button className="flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 my-2 shadow-sm">
<div className="absolute -right-10 -top-10 text-green-200 opacity-50 rotate-12 pointer-events-none">
<iconify-icon icon="solar:ranking-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Not sure which job suits you best?</h3>
<p className="text-sm text-slate-600 mt-1">Get personalized job &amp; internship recommendations based on your unique profile.</p>
</div>
</div>
<button className="relative z-10 w-full sm:w-auto bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-600 shadow-sm shadow-green-200 transition-colors flex-shrink-0 whitespace-nowrap">
                        Take Career Test
                    </button>
</div>

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 transition-all duration-200 opacity-80 group">
<div className="flex flex-col sm:flex-row gap-5">
<div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-xl font-semibold text-slate-800 tracking-tighter">
                            L
                        </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 truncate">Marketing Analytics Intern</h3>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                        Linear <span className="w-1 h-1 rounded-full bg-slate-300"></span> Remote
                                    </p>
</div>

<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-50 text-accent text-[11px] font-medium border border-green-100 mt-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Applied
                                </span>
</div>
<div className="flex flex-wrap gap-3 mt-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-primary text-xs font-medium border border-blue-100">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon> Internship
                                </span>
</div>
<p className="text-sm text-slate-600 mt-4 line-clamp-2" style={{display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                                Help us understand user growth and campaign performance. You will work closely with the growth team to analyze data and present actionable insights.
                            </p>
</div>
</div>
<div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Applied on Oct 24, 2023
                        </span>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">View Application</button>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
<button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 border border-transparent">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Previous
                </button>
<div className="hidden sm:flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium bg-slate-900 text-white shadow-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">3</button>
<span className="w-8 h-8 flex items-center justify-center text-sm text-slate-400">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">25</button>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 border border-transparent">
                    Next <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 mt-10">
<div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 2023 NXTSTEP Career Guidance. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 text-xs font-medium text-slate-400">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> Verified Listings
                </span>
<span className="flex items-center gap-2 text-xs font-medium text-slate-400">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Trusted by 10k+ Students
                </span>
</div>
</div>
</footer>

    </>
  );
}
