import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed', // Primary Purple
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
950: '#2e1065',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tight" href="#">
<img alt="Purple Builder" className="w-auto h-8 object-contain" src="https://www.aura.build/editor/default"/>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">

<div className="relative group h-16 flex items-center">
<button className="flex items-center gap-1 hover:text-neutral-900 transition-colors">
                            Target Users 
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="absolute top-14 left-0 w-56 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-neutral-200/50 p-2 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 z-50">
<div className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Investors</div>
<a className="block px-3 py-2 rounded-lg hover:bg-brand-50 hover:text-brand-700 text-sm" href="#">Angel Investors</a>
<a className="block px-3 py-2 rounded-lg hover:bg-brand-50 hover:text-brand-700 text-sm" href="#">Venture Capitalists</a>
<div className="my-1 border-t border-neutral-100"></div>
<div className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Makers</div>
<a className="block px-3 py-2 rounded-lg hover:bg-brand-50 hover:text-brand-700 text-sm" href="#">Founders &amp; Builders</a>
<a className="block px-3 py-2 rounded-lg hover:bg-brand-50 hover:text-brand-700 text-sm" href="#">Product Managers</a>
</div>
</div>
<a className="hover:text-neutral-900 transition-colors" href="#personas">Explore AI Personas</a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-neutral-900 transition-colors" href="#resources">Resources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 hidden sm:block" href="#">Log In</a>
<a className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-200" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<header className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none h-full w-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-200/30 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 shadow-sm mb-8 animate-fade-in">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-brand-700 uppercase tracking-wide">New: Enterprise Buyer Persona</span>
</div>
<h1 className="md:text-7xl leading-[1.05] animate-fade-in text-5xl font-semibold text-neutral-900 tracking-tighter max-w-4xl mr-auto mb-6 ml-auto" style={{animationDelay: '0.1s'}}>Get Feedback From AI Personas with Purple Builder.</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in font-normal" style={{animationDelay: '0.2s'}}>
                Select AI-powered agentic personas that think like real users, experts, and decision-makers. Get instant, actionable feedback on your websites, pitch decks, copy, and designs.
            </p>

<div className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/40 p-2 animate-fade-in overflow-hidden" style={{animationDelay: '0.3s'}}>

<div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-50 rounded-xl mb-4 overflow-x-auto hide-scrollbar">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white text-brand-700 rounded-lg shadow-sm ring-1 ring-neutral-200 whitespace-nowrap">
<iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon> Upload Pitch Deck
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap">
<iconify-icon icon="solar:figma-file-linear" width="16"></iconify-icon> Figma Link
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap">
<iconify-icon icon="solar:globe-linear" width="16"></iconify-icon> Website
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors whitespace-nowrap">
<iconify-icon icon="solar:document-add-linear" width="16"></iconify-icon> Google Doc
                    </button>
</div>

<div className="border-2 border-dashed border-neutral-200 rounded-xl bg-neutral-50/50 p-8 sm:p-12 text-center hover:bg-brand-50/30 hover:border-brand-300 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-white rounded-full shadow-sm ring-1 ring-neutral-200 flex items-center justify-center mx-auto mb-4 text-brand-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:upload-minimalistic-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<h3 className="text-neutral-900 font-medium mb-1">Click to upload your Pitch Deck</h3>
<p className="text-sm text-neutral-500 mb-4">PDF or PPT, max 20MB</p>
<p className="text-xs text-neutral-400">AI personas review clarity, storytelling, and investor appeal</p>
</div>

<div className="mt-4 flex flex-col sm:flex-row gap-3">
<button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-200">
                        Go to Next Step
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mt-6 flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
<button className="text-sm text-neutral-500 font-medium hover:text-brand-600 flex items-center gap-2 transition-colors">
<iconify-icon icon="logos:chrome" width="16"></iconify-icon>
                    Install Chrome Extension
                </button>
</div>
</div>
</header>

<section className="py-16 bg-white border-y border-neutral-100" id="demo">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-[320px] h-[640px] bg-neutral-900 rounded-[40px] border-[8px] border-neutral-900 shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-neutral-50 flex flex-col font-sans">

<div className="pt-12 pb-4 px-6 bg-white border-b border-neutral-100">
<div className="flex mb-4 items-center justify-between">
<div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
<iconify-icon className="" icon="solar:user-linear" width="16"></iconify-icon>
</div>
<iconify-icon className="text-neutral-400" icon="solar:bell-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Recent Feedback</h3>
</div>

<div className="p-4 space-y-3 overflow-y-auto">
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-500">Reviewed</span>
</div>
<span className="text-[10px] text-neutral-400">2m ago</span>
</div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Pitch Deck Review</h4>
<div className="flex -space-x-2 mb-3">
<img alt="" className="w-6 h-6 rounded-full border border-white bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" style={{}}/>
<img alt="" className="w-6 h-6 rounded-full border border-white bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
</div>
<div className="p-2 bg-neutral-50 rounded text-xs text-neutral-600">
                                        "Slide 4 lacks clear ROI data. Expand on the CAC/LTV ratio."
                                    </div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 opacity-80">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-500">In Progress</span>
</div>
<span className="text-[10px] text-neutral-400">Now</span>
</div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Landing Page Copy</h4>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear"></iconify-icon>
                                        Analyzing tone...
                                    </div>
</div>
</div>

<div className="mt-auto p-6">
<button className="w-full py-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-200 font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                                    New Project
                                </button>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="mb-6">
<div className="inline-flex items-center gap-2 text-brand-600 bg-brand-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                            Browser Integration
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-neutral-900">
                            Feedback directly in your workflow.
                        </h2>
<p className="text-neutral-500 text-lg leading-relaxed">
                            Don't leave your site. Use the Chrome Extension to summon agentic personas on top of your live pages, Figma designs, or Google Docs.
                        </p>
</div>

<div className="bg-white rounded-xl border border-neutral-200 shadow-2xl overflow-hidden relative group">

<div className="h-10 bg-neutral-50 border-b border-neutral-200 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 bg-white border border-neutral-200 h-6 rounded px-2 text-[10px] text-neutral-400 flex items-center">
                                yourwebsite.com
                            </div>
</div>

<div className="h-64 bg-neutral-50 p-8 relative">
<div className="w-3/4 h-4 bg-neutral-200 rounded mb-4"></div>
<div className="w-full h-32 bg-neutral-200 rounded opacity-50"></div>

<div className="absolute right-4 top-12 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 animate-float">
<div className="flex items-center justify-between mb-3 border-b border-neutral-100 pb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">P</div>
<span className="text-xs font-bold">Purple Builder</span>
</div>
<iconify-icon className="text-neutral-300" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<img alt="Persona" className="w-8 h-8 rounded-full bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elon" style={{}}/>
<div>
<p className="text-xs font-bold">Elon M.</p>
<p className="text-[10px] text-neutral-500">First Principles</p>
</div>
</div>
<div className="bg-brand-50 p-2 rounded-lg text-xs text-brand-900 leading-snug">
                                    "This headline is too vague. What is the fundamental value prop? Reduce it to one sentence."
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-neutral-900">Get Feedback Wherever You Build</h2>
<p className="text-neutral-500 text-lg">Purple Builder’s Chrome extension gives context-aware, agentic feedback across every surface where decisions are made — not just websites.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="group flex flex-col h-full bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-300 transition-all duration-300 overflow-hidden">

<div className="h-48 bg-neutral-100 border-b border-neutral-200 relative overflow-hidden group-hover:bg-white transition-colors">

<div className="absolute inset-4 bg-white rounded-lg shadow-sm border border-neutral-200 flex flex-col overflow-hidden">
<div className="h-6 bg-neutral-50 border-b border-neutral-100 flex items-center px-2 space-x-1">
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
<div className="w-20 h-3 bg-neutral-200 rounded-sm"></div>
</div>
<div className="p-3 flex-1 space-y-2">
<div className="w-1/2 h-3 bg-neutral-800 rounded mb-2"></div>
<div className="w-full h-2 bg-neutral-200 rounded"></div>
<div className="w-3/4 h-2 bg-neutral-200 rounded"></div>

<div className="absolute bottom-3 right-3 left-3 bg-brand-50 border border-brand-100 p-2 rounded shadow-lg flex gap-2 items-start transform translate-y-0 opacity-100 transition-all">
<div className="w-5 h-5 flex-shrink-0 rounded-full bg-brand-200 overflow-hidden">
<img alt="Buyer" className="w-full h-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Biz" style={{}}/>
</div>
<p className="text-[10px] text-brand-900 leading-tight">"As an enterprise buyer, the value proposition isn’t clear above the fold."</p>
</div>
</div>
</div>
</div>

<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Chrome Extension</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Live Page Analysis</span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Website Feedback</h3>
<p className="text-sm text-neutral-500 mb-4">Agents read your live website content to evaluate messaging, structure, clarity, and positioning.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
                                Flag confusing sections and weak CTAs
                            </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:magic-stick-3-linear"></iconify-icon>
                                Suggest wording and layout improvements
                            </li>
</ul>
<div className="mt-auto">
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#">
                                Try on a Website <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-300 transition-all duration-300 overflow-hidden">

<div className="h-48 bg-neutral-100 border-b border-neutral-200 relative overflow-hidden group-hover:bg-white transition-colors flex items-center justify-center">

<div className="w-48 aspect-[4/3] bg-white rounded shadow-sm border border-neutral-200 relative p-3 flex flex-col">
<div className="text-[8px] font-bold text-neutral-900 mb-1">Growth Traction</div>
<div className="flex items-end gap-1 h-12 mb-2">
<div className="w-2 bg-neutral-200 h-4"></div>
<div className="w-2 bg-neutral-200 h-6"></div>
<div className="w-2 bg-brand-200 h-8"></div>
<div className="w-2 bg-brand-400 h-10"></div>
</div>

<div className="absolute -right-4 top-8 bg-white border border-red-100 shadow-md p-2 rounded-lg w-32 z-10">
<p className="text-[8px] text-red-600 font-medium leading-tight">"Slide 5 introduces traction too late for an early-stage investor."</p>
<div className="absolute -left-1 top-2 w-2 h-2 bg-white border-l border-b border-red-100 transform rotate-45"></div>
</div>
</div>
</div>

<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">PDF / PPT Upload</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Investor Perspective</span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Pitch Deck Feedback</h3>
<p className="text-sm text-neutral-500 mb-4">Analyze storytelling, flow, clarity, and conviction slide-by-slide.</p>
<div className="mb-4">
<p className="text-xs font-semibold text-neutral-900 mb-2 uppercase tracking-wide">Get feedback from:</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">Investors</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">Founders</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">Strategists</span>
</div>
</div>
<div className="mt-auto">
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#">
                                Upload Pitch Deck <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-300 transition-all duration-300 overflow-hidden">

<div className="h-48 bg-neutral-800 border-b border-neutral-700 relative overflow-hidden flex">

<div className="w-12 bg-neutral-900 h-full border-r border-neutral-700 p-2 space-y-2">
<div className="w-full aspect-square rounded bg-neutral-700"></div>
<div className="w-full aspect-square rounded bg-neutral-700"></div>
</div>

<div className="flex-1 relative p-4">
<div className="w-32 h-10 bg-brand-600 rounded flex items-center justify-center text-[10px] text-white font-medium shadow-lg opacity-50">
                                Sign Up
                             </div>

<div className="absolute top-8 left-20">
<iconify-icon className="text-white drop-shadow-md text-xl" icon="solar:cursor-linear"></iconify-icon>
<div className="ml-3 mt-1 bg-brand-500 text-white text-[8px] p-1.5 rounded rounded-tl-none">
                                    Primary action is visually competing with secondary elements.
                                </div>
</div>
</div>
</div>

<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Figma Link</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">UX &amp; Hierarchy</span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Figma &amp; Design</h3>
<p className="text-sm text-neutral-500 mb-4">Paste a Figma link to evaluate UX flow, visual hierarchy, cognitive load, and conversion friction.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:layers-minimalistic-linear"></iconify-icon>
                                Feedback tied to frames &amp; components
                            </li>
</ul>
<div className="mt-auto">
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#">
                                Analyze Design <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-300 transition-all duration-300 overflow-hidden">

<div className="h-48 bg-neutral-100 border-b border-neutral-200 relative overflow-hidden group-hover:bg-white transition-colors flex items-center justify-center">
<div className="w-40 h-52 bg-white shadow-sm border border-neutral-200 mt-8 p-4">
<div className="h-2 w-16 bg-blue-100 mb-4 rounded-sm"></div> 
<div className="space-y-2">
<div className="h-1.5 bg-neutral-200 w-full rounded-sm"></div>
<div className="h-1.5 bg-brand-100 w-full rounded-sm ring-1 ring-brand-300"></div> 
<div className="h-1.5 bg-neutral-200 w-3/4 rounded-sm"></div>
</div>

<div className="absolute right-4 top-16 w-24 bg-white shadow-md border border-neutral-100 rounded p-1.5">
<div className="flex items-center gap-1 mb-1">
<div className="w-3 h-3 rounded-full bg-brand-200"></div>
<span className="text-[6px] text-neutral-500">Just now</span>
</div>
<p className="text-[7px] text-neutral-700 leading-tight">"The opening paragraph lacks a strong point of view."</p>
</div>
</div>
</div>

<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Docs / Slides Link</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Content &amp; Structure</span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Google Docs &amp; Slides</h3>
<p className="text-sm text-neutral-500 mb-4">Paste a link to have agents review tone, clarity, argument strength, and readability.</p>
<p className="text-xs font-semibold text-neutral-900 mb-2 uppercase tracking-wide">Ideal for:</p>
<ul className="flex flex-wrap gap-2 mb-6">
<li className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">Strategy Docs</li>
<li className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-600">Sales Decks</li>
</ul>
<div className="mt-auto">
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#">
                                Get Content Feedback <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col h-full bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-brand-300 transition-all duration-300 overflow-hidden md:col-span-2">

<div className="h-48 bg-neutral-100 border-b border-neutral-200 relative overflow-hidden group-hover:bg-white transition-colors flex items-center justify-center p-8">

<div className="w-full max-w-md h-24 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-lg shadow-lg flex items-center justify-between px-6 relative">
<div className="w-2/3">
<div className="h-2 w-16 bg-neutral-600 rounded mb-2"></div>
<div className="h-3 w-48 bg-white rounded opacity-90"></div>
</div>
<div className="w-8 h-8 rounded-full bg-brand-500"></div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-neutral-200 shadow-xl rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap">
<iconify-icon className="text-brand-600 text-xs" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-[10px] font-medium text-neutral-700">"Descriptive, but not compelling enough to stop scrolling."</span>
</div>
</div>
</div>

<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Text / PDF / Banners</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Messaging Review</span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Marketing Copy &amp; Assets</h3>
<p className="text-sm text-neutral-500 max-w-lg mb-4">Evaluate audience relevance, persuasiveness, and emotional resonance. Optimize ads, landing copy, brochures, and banners.</p>
<div className="mt-auto">
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#">
                                Optimize Copy <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h3 className="text-2xl font-semibold text-neutral-900 mb-6">Unified Insight</h3>
<p className="text-neutral-500 mb-8">All feedback — across websites, decks, designs, and documents — is:</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm font-medium text-neutral-700">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand-600 shadow-sm">
<iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon>
</div>
                            Stored in one dashboard
                        </div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand-600 shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
                            Organized by persona
                        </div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand-600 shadow-sm">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
                            Comparable iterations
                        </div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-brand-600 shadow-sm">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
                            Actionable, not generic
                        </div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
                        You don’t just get feedback.
                        <span className="text-brand-600">You get decision clarity.</span>
</h4>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center gap-2">
                            Start With Any Surface <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-xl font-semibold text-neutral-600 border border-neutral-300 hover:bg-white hover:text-neutral-900 transition-colors bg-white">
                            Install Chrome Extension
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="personas">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-brand-400 font-medium tracking-wide text-xs uppercase mb-2 block">Agentic Marketplace</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">Explore Agentic Personas</h2>
</div>
<p className="text-neutral-400 max-w-sm text-sm">These personas simulate thinking styles and decision frameworks. They are not impersonations.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-800 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden">
<img alt="Matthew" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Matt" style={{}}/>
</div>
<span className="px-2 py-1 rounded bg-brand-900/50 text-brand-300 text-[10px] font-semibold uppercase border border-brand-800">Storyteller</span>
</div>
<h3 className="text-lg font-semibold mb-1">Matthew Mc.</h3>
<p className="text-sm text-neutral-400 mb-6 h-10 line-clamp-2">Creative, narrative-driven perspective on tone, emotion, and storytelling.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white text-neutral-900 text-xs font-semibold hover:bg-brand-50 transition-colors">Try Agent</button>
</div>
</div>

<div className="group bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-800 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden">
<img alt="Peter" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Peter"/>
</div>
<span className="px-2 py-1 rounded bg-blue-900/50 text-blue-300 text-[10px] font-semibold uppercase border border-blue-800">Contrarian</span>
</div>
<h3 className="text-lg font-semibold mb-1">Peter T.</h3>
<p className="text-sm text-neutral-400 mb-6 h-10 line-clamp-2">Contrarian startup logic, monopoly thinking, first-principles critique.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white text-neutral-900 text-xs font-semibold hover:bg-brand-50 transition-colors">Try Agent</button>
</div>
</div>

<div className="group bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-800 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden">
<img alt="Elon" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elon" style={{}}/>
</div>
<span className="px-2 py-1 rounded bg-purple-900/50 text-purple-300 text-[10px] font-semibold uppercase border border-purple-800">Visionary</span>
</div>
<h3 className="text-lg font-semibold mb-1">Elon M.</h3>
<p className="text-sm text-neutral-400 mb-6 h-10 line-clamp-2">Visionary, engineering-first, ruthless clarity on fundamentals.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white text-neutral-900 text-xs font-semibold hover:bg-brand-50 transition-colors">Try Agent</button>
</div>
</div>

<div className="group bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 hover:bg-neutral-800 transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:suitcase-linear" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-green-900/50 text-green-300 text-[10px] font-semibold uppercase border border-green-800">B2B</span>
</div>
<h3 className="text-lg font-semibold mb-1">Enterprise Buyer</h3>
<p className="text-sm text-neutral-400 mb-6 h-10 line-clamp-2">Budget-conscious, risk-aware, procurement-focused feedback.</p>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-white text-neutral-900 text-xs font-semibold hover:bg-brand-50 transition-colors">Try Agent</button>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-900 to-brand-950 border border-brand-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
<div className="flex -space-x-3 mb-4">
<img alt="" className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" style={{}}/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" style={{}}/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-brand-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" style={{}}/>
<div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-brand-700 flex items-center justify-center text-xs font-bold">+10k</div>
</div>
<h3 className="text-2xl font-semibold mb-2">Explore 10,000+ AI Personas</h3>
<p className="text-brand-200 text-sm mb-6">From legal experts to Gen Z consumers.</p>
<button className="px-6 py-2 bg-white text-brand-900 font-semibold rounded-lg hover:bg-brand-100 transition-colors">Visit Marketplace</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-neutral-900">Simple, Transparent Pricing</h2>
<p className="text-neutral-500 text-lg">Subscription + Agentic Tokens.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-lg font-semibold text-neutral-900">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">$29</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<p className="text-sm text-neutral-500 mt-2">1,000 Agentic Tokens</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon> 3 Agents
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600" icon="solar:check-circle-linear"></iconify-icon> Chrome Extension
                    </li>
</ul>
<button className="mt-8 w-full py-2.5 rounded-lg border border-neutral-200 font-semibold text-sm hover:bg-neutral-50 transition-colors">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl border border-brand-200 bg-brand-50/50 relative">
<div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
<h3 className="text-lg font-semibold text-brand-900">Pro</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-brand-900">$79</span>
<span className="text-sm text-brand-700">/month</span>
</div>
<p className="text-sm text-brand-700 mt-2">5,000 Agentic Tokens</p>
<ul className="mt-8 space-y-4 text-sm text-brand-900">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600" icon="solar:check-circle-bold"></iconify-icon> 10 Agents
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600" icon="solar:check-circle-bold"></iconify-icon> Custom Persona Creation
                    </li>
</ul>
<button className="mt-8 w-full py-2.5 rounded-lg bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-white">
<h3 className="text-lg font-semibold text-neutral-900">Enterprise</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">Custom</span>
</div>
<p className="text-sm text-neutral-500 mt-2">Custom Token Allocation</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Agents
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Private Data Integrations
                    </li>
</ul>
<button className="mt-8 w-full py-2.5 rounded-lg border border-neutral-200 font-semibold text-sm hover:bg-neutral-50 transition-colors">Contact Sales</button>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" style={{}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8">Stop Guessing. Get Feedback From AI Personas.</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-neutral-900 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="logos:chrome" width="18"></iconify-icon>
                    Install Chrome Extension
                </button>
<button className="bg-transparent border border-neutral-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-colors">
                    Explore Marketplace
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tight flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
</div>
                        Purple Builder
                    </a>
<p className="text-sm text-neutral-500">Agentic feedback for the builders of tomorrow.</p>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Extension</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Marketplace</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 Purple Builder. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="hover:text-neutral-900 cursor-pointer" icon="simple-icons:twitter"></iconify-icon>
<iconify-icon className="hover:text-neutral-900 cursor-pointer" icon="simple-icons:linkedin"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
