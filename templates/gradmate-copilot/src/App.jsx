import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f2023',
950: '#09090b', // Darker black
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-1.5" href="#">
<span className="iconify" data-icon="lucide:compass" data-inline="false" data-width="18"></span>
                    GRADMATE
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#features">Features</a>
<a className="hover:text-zinc-900 transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200" href="#">Start Free</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-50/50 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Now available for Marketing &amp; Product tracks
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 text-balance leading-[1.1] animate-fade-in [animation-delay:100ms]">
                Turn career uncertainty into <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500">a job-ready plan in 7 days.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-fade-in [animation-delay:200ms]">
                GradMate is the GPS for your early career. Assess your fit, target the right companies, and build a portfolio that proves your worth—before the interview.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:300ms]">
<button className="h-11 px-6 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-zinc-200 w-full md:w-auto flex items-center justify-center gap-2">
                    Start Assessment
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-11 px-6 rounded-full bg-white border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors w-full md:w-auto">
                    View Methodology
                </button>
</div>

<div className="mt-16 pt-8 border-t border-zinc-100 animate-fade-in [animation-delay:400ms]">
<p className="text-xs text-zinc-400 mb-4 uppercase tracking-widest font-medium">Graduates hired at</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="font-bold text-lg tracking-tight text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> Acme Corp</span>
<span className="font-semibold text-lg tracking-tight text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> Vercel</span>
<span className="font-semibold text-lg tracking-tight text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:box" data-width="20"></span> Dropbox</span>
<span className="font-bold text-lg tracking-tight text-zinc-800 italic">stripe</span>
<span className="font-semibold text-lg tracking-tight text-zinc-800">Linear</span>
</div>
</div>
</div>
</section>

<section className="pb-24 px-4 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="relative bg-zinc-50 rounded-2xl md:rounded-3xl border border-zinc-200 p-2 md:p-3 shadow-2xl shadow-zinc-200/50">

<div className="absolute top-0 left-0 w-full h-12 flex items-center px-6 gap-2 z-20">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>

<div className="bg-white rounded-xl md:rounded-2xl overflow-hidden flex h-[600px] md:h-[700px] relative border border-zinc-100">

<aside className="hidden md:flex w-64 flex-col border-r border-zinc-100 bg-zinc-50/50 pt-14 pb-6 px-4">
<div className="mb-8">
<div className="px-2 mb-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Navigation</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
                                    Dashboard
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200" href="#">
<span className="iconify" data-icon="lucide:map" data-width="18"></span>
                                    My Path
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:target" data-width="18"></span>
                                    Companies
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:library" data-width="18"></span>
                                    Library
                                </a>
</nav>
</div>
<div className="mt-auto">
<div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
<p className="text-xs font-semibold text-indigo-900 mb-1">Weekly Sprint</p>
<div className="flex items-end justify-between mb-2">
<span className="text-2xl font-bold text-indigo-700 tracking-tight">Day 3</span>
<span className="text-xs text-indigo-500">of 7</span>
</div>
<div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-600 h-full w-[42%] rounded-full"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto pt-14 p-6 md:p-10 relative">

<div className="flex items-center justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Career Path: Product Management</h2>
<p className="text-sm text-zinc-500 mt-1">Based on your assessment (INTJ / Analytical)</p>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 flex items-center gap-2">
<span className="iconify" data-icon="lucide:share-2" data-width="14"></span>
                                    Share Profile
                                </button>
<div className="h-9 w-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 border border-zinc-200">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-zinc-900">Associate Product Manager</h3>
<p className="text-xs text-zinc-500">Fit Match: <span className="text-emerald-600 font-medium">92% High</span></p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                                            Recommended
                                        </span>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
<p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Salary Range</p>
<p className="text-sm font-semibold text-zinc-900 mt-1">$65k – $90k</p>
</div>
<div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
<p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Demand</p>
<p className="text-sm font-semibold text-zinc-900 mt-1">Growing (+12%)</p>
</div>
<div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
<p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Difficulty</p>
<p className="text-sm font-semibold text-zinc-900 mt-1">High Entry</p>
</div>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-zinc-900">Required Artifacts (Portfolio)</p>
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-zinc-50/50">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-full border border-zinc-300 flex items-center justify-center bg-white">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-zinc-600 line-through">Market Research Case</span>
</div>
<a className="text-xs text-zinc-400 underline" href="#">View</a>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-full border border-zinc-300 flex items-center justify-center"></div>
<span className="text-sm text-zinc-900">Product Teardown</span>
</div>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Start Draft</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-zinc-900">Target Companies</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900">Filter</button>
</div>
<div className="overflow-hidden rounded-lg border border-zinc-100">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 text-zinc-500">
<tr>
<th className="px-4 py-3 font-medium text-xs">Company</th>
<th className="px-4 py-3 font-medium text-xs">Role</th>
<th className="px-4 py-3 font-medium text-xs text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-4 py-3 font-medium text-zinc-900">Revolut</td>
<td className="px-4 py-3 text-zinc-600">Product Grad</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Apply Now</span></td>
</tr>
<tr>
<td className="px-4 py-3 font-medium text-zinc-900">Monzo</td>
<td className="px-4 py-3 text-zinc-600">APM Rotation</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">Saved</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-900 rounded-xl p-6 text-white shadow-xl shadow-zinc-200">
<div className="flex items-center gap-2 mb-4 text-zinc-400 text-xs font-medium uppercase tracking-wider">
<span className="text-amber-400" data-icon="lucide:zap" data-width="14"></span>
                                        Today's Action
                                    </div>
<h3 className="text-lg font-semibold mb-2">Metrics Framework</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                        Learn the AARRR framework and apply it to a fictional Spotify feature.
                                    </p>
<button className="w-full py-2.5 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors">
                                        Start (15 min)
                                    </button>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
<h4 className="text-sm font-medium text-zinc-900 mb-3">Saved Resources</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 text-zinc-400 group-hover:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
</div>
<div>
<p className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">Case Interview Cheat Sheet</p>
<p className="text-[10px] text-zinc-400">PDF • 2 min read</p>
</div>
</li>
<li className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 text-zinc-400 group-hover:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
</div>
<div>
<p className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">Mock Interview: Behavorial</p>
<p className="text-[10px] text-zinc-400">Video • 12 min</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none md:rounded-b-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                    A complete operating system for your job search.
                </h2>
<p className="text-lg text-zinc-500">
                    Stop applying blindly. GradMate organizes the chaos into a structured workflow tailored to your profile.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-900" data-icon="lucide:compass" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Smart Assessment</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        An adaptive 20-question quiz analyzes your strengths and maps you to 5-8 specific roles where you have a competitive advantage.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-900" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Portfolio Builder</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Don't just send a CV. Generate a portfolio link with 3 key artifacts (case studies, audits) created in our 7-day guided sprint.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-900" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Community &amp; AMA</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Access role-specific threads and weekly AMAs with mentors from top tech companies. Never prepare alone.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100" id="methodology">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 text-center mb-16">From lost to hired in 4 steps</h2>
<div className="relative">

<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-100 md:left-1/2 md:-ml-[1px]"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group">
<div className="md:w-1/2 md:text-right pr-0 md:pr-12">
<h3 className="text-lg font-semibold text-zinc-900">1. Take the Assessment</h3>
<p className="text-sm text-zinc-500 mt-1">Identify your major/minor strengths and get matched to roles.</p>
</div>
<div className="absolute left-0 md:left-1/2 -ml-1.5 md:-ml-2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 z-10"></div>
<div className="md:w-1/2 pl-12 md:pl-12">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-600">Day 1</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse gap-8 items-start md:items-center group">
<div className="md:w-1/2 md:text-left pl-0 md:pl-12">
<h3 className="text-lg font-semibold text-zinc-900">2. Choose Your Track</h3>
<p className="text-sm text-zinc-500 mt-1">Select one path (e.g., Growth Marketing) to focus your energy.</p>
</div>
<div className="absolute left-0 md:left-1/2 -ml-1.5 md:-ml-2 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white z-10 group-hover:bg-indigo-600 transition-colors"></div>
<div className="md:w-1/2 pr-12 md:pr-12 md:text-right text-left pl-12 md:pl-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-600">Day 1</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group">
<div className="md:w-1/2 md:text-right pr-0 md:pr-12">
<h3 className="text-lg font-semibold text-zinc-900">3. The 7-Day Sprint</h3>
<p className="text-sm text-zinc-500 mt-1">Daily micro-tasks to build 3 portfolio artifacts.</p>
</div>
<div className="absolute left-0 md:left-1/2 -ml-1.5 md:-ml-2 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white z-10 group-hover:bg-indigo-600 transition-colors"></div>
<div className="md:w-1/2 pl-12 md:pl-12">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-600">Day 2-7</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse gap-8 items-start md:items-center group">
<div className="md:w-1/2 md:text-left pl-0 md:pl-12">
<h3 className="text-lg font-semibold text-zinc-900">4. Apply with Evidence</h3>
<p className="text-sm text-zinc-500 mt-1">Share your public portfolio link and target verified companies.</p>
</div>
<div className="absolute left-0 md:left-1/2 -ml-1.5 md:-ml-2 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white z-10 group-hover:bg-indigo-600 transition-colors"></div>
<div className="md:w-1/2 pr-12 md:pr-12 md:text-right text-left pl-12 md:pl-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-600">Day 8+</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Invest in your career, not courses.</h2>
<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-sm font-medium text-zinc-500">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="toggle-label"></div>
</label>
<span className="text-sm font-medium text-zinc-900">Yearly <span className="text-indigo-600 text-xs ml-1 font-semibold">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm relative">
<h3 className="text-lg font-semibold text-zinc-900">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-zinc-900">$0</span>
<span className="ml-1 text-sm font-medium text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-500 mt-2">Explore roles and take the assessment.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span>
                            Basic Assessment
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span>
                            View Career Paths
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700">
<span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span>
                            1 Portfolio Draft
                        </li>
</ul>
<a className="mt-8 block w-full py-3 px-4 bg-white border border-zinc-200 rounded-xl text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">Start for free</a>
</div>

<div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify text-white w-32 h-32" data-icon="lucide:zap" data-width="128"></span>
</div>
<h3 className="text-lg font-semibold text-white">Pro Sprint</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-white">$9</span>
<span className="ml-1 text-sm font-medium text-zinc-400">/mo</span>
</div>
<p className="text-sm text-zinc-400 mt-2">For serious job seekers ready to commit.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Everything in Starter
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Portfolio Artifacts
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Full Case Library &amp; Solutions
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-indigo-400" data-icon="lucide:check" data-width="16"></span>
                            Community Access (AMA)
                        </li>
</ul>
<a className="mt-8 block w-full py-3 px-4 bg-indigo-600 rounded-xl text-center text-sm font-medium text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/50" href="#">Get Started</a>
</div>
</div>
<p className="text-center text-xs text-zinc-400 mt-8">7-day money-back guarantee. No questions asked.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<a className="text-lg font-bold tracking-tighter flex items-center gap-1.5 mb-4" href="#">
<span className="iconify" data-icon="lucide:compass" data-inline="false" data-width="18"></span>
                    GRADMATE
                </a>
<p className="text-sm text-zinc-500">Helping graduates navigate the gap between university and their first career breakthrough.</p>
</div>
<div>
<h4 className="font-semibold text-sm text-zinc-900 mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Assessment</a></li>
<li><a className="hover:text-zinc-900" href="#">Career Paths</a></li>
<li><a className="hover:text-zinc-900" href="#">Portfolio Builder</a></li>
<li><a className="hover:text-zinc-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-zinc-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Case Library</a></li>
<li><a className="hover:text-zinc-900" href="#">Interview Guides</a></li>
<li><a className="hover:text-zinc-900" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About</a></li>
<li><a className="hover:text-zinc-900" href="#">Manifesto</a></li>
<li><a className="hover:text-zinc-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400">
<p>© 2023 GradMate Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
