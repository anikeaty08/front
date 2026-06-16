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
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
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
}



        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-google-sans-flex" href="#">
                Intent<span className="transition-colors text-stone-500">Ads</span>
</a>

<nav className="hidden lg:flex font-montserrat gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#strategy">Strategy</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#options">Ad Options</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-600" href="#results">Results</a>
</nav>

<div className="flex gap-x-8 items-center">
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Get an Audit
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">

<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-6" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        An Intentional Marketing Company
                    </div>

<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
                        Multifamily 
                        <span className="text-slate-950 font-google-sans-flex relative inline-block">Google, Meta &amp; Geo Ads
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-montserrat max-w-2xl">
                        Strategically developed. Thoughtfully managed. Maximum conversions.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
                                Start Your Strategy
                            </span>
<div className="button-shine"></div>
</button>
</div>
<style>
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                        box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                        backdrop-filter: blur(4px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.98); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-0 max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
<iconify-icon className="" icon="lucide:award" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Multifamily Experts</p>
<span className="text-[10px] text-stone-400">Since 2014</span>
</div>
<p className="text-xs text-stone-500 truncate">Paid Search Specialists</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">10+ Years</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
<iconify-icon icon="logos:google-icon" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Google Certified</p>
<span className="text-[10px] text-stone-400">Team</span>
</div>
<p className="text-xs text-stone-500 truncate">Advanced Search Mastery</p>
</div>
<span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">Verified</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon className="" icon="lucide:key" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Leasing Outcomes</p>
<span className="text-[10px] text-stone-400">Focus</span>
</div>
<p className="text-xs text-stone-500 truncate">Built for Operators at Scale</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Active</span>
</div>
</div>
</div>
</section>

<section className="lg:px-12 max-w-[1600px] mr-auto ml-auto pr-6 pb-[240px] pl-6 pt-12 lg:pt-16">
<div className="glass-panel rounded-3xl border border-stone-200/70 p-6 lg:p-10 shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="bg-[#f8ffa5] w-2 h-2 rounded-full"></span>
                    Onboarding Sequence
                </div>
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mt-4">
                    Launch in a clear, proven timeline
                </h2>
<p className="text-stone-500 text-lg font-montserrat mt-3">
                    Strategy &amp; campaign development timeline:
                    <span className="text-stone-900 font-semibold">5 business days</span> from technical submission approval
                    to campaign launch.
                </p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-400">
<span className="px-3 py-1 rounded-full border border-stone-200 bg-stone-50">Fast Start</span>
<span className="px-3 py-1 rounded-full border border-stone-200 bg-stone-50">Operator Friendly</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">

<div className="relative bg-white/60 rounded-2xl border border-stone-200 p-5 lg:p-6">
<div className="flex items-start gap-3">
<div className="flex shrink-0 text-lime-700 bg-[#f8ffa5] w-9 h-9 border-stone-200 border rounded-xl items-center justify-center">
<span className="text-sm font-semibold">1</span>
</div>
<div className="min-w-0">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Agreement sign off</h3>
<p className="text-sm text-stone-500 font-montserrat mt-1">Confirm scope and authorize the
                            engagement.</p>
</div>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-500" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="relative bg-white/60 rounded-2xl border border-stone-200 p-5 lg:p-6">
<div className="flex items-start gap-3">
<div className="flex shrink-0 text-stone-700 bg-stone-100 w-9 h-9 border-stone-200 border rounded-xl items-center justify-center">
<span className="text-sm font-semibold">2</span>
</div>
<div className="min-w-0">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Billing Set up</h3>
<p className="text-sm text-stone-500 font-montserrat mt-1">Configure billing so campaigns can launch
                            without delays.</p>
</div>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-500" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="relative bg-white/60 rounded-2xl border border-stone-200 p-5 lg:p-6">
<div className="flex items-start gap-3">
<div className="flex shrink-0 text-sky-700 bg-stone-100 w-9 h-9 border-stone-200 border rounded-xl items-center justify-center">
<span className="text-sm font-semibold text-slate-800">3</span>
</div>
<div className="min-w-0">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Kickoff call</h3>
<p className="text-sm text-stone-500 font-montserrat mt-1">Align on goals, targeting, and success
                            metrics.</p>
</div>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-stone-500" icon="solar:arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white/60 rounded-2xl border border-stone-200 p-5 lg:p-6">
<div className="flex items-start gap-3">
<div className="flex shrink-0 text-[#c1ff72] bg-stone-100 w-9 h-9 border-stone-800 border rounded-xl items-center justify-center">
<span className="text-sm font-semibold text-slate-800 bg-stone-100">4</span>
</div>
<div className="min-w-0">
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Technical Submission</h3>
<p className="text-sm text-stone-500 font-montserrat mt-1">Via our onboarding portal.</p>
</div>
</div>
<div className="mt-5 flex items-center gap-2 text-xs font-medium text-stone-500">
<span className="bg-[#f8ffa5] w-2 h-2 rounded-full"></span>
                    5 business days to launch after approval
                </div>
</div>
</div>
</div>
</section>

<div className="z-20 bg-white w-full rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<div className="bg-neutral-50 rounded-2xl p-6 lg:p-10 border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="flex flex-col gap-2">
<span className="uppercase text-xs font-bold text-[#f8ffa5] tracking-widest">Built by Intentional Marketing</span>
<h3 className="text-xl lg:text-2xl font-bold font-google-sans-flex text-stone-900">Multifamily Paid Search Specialists</h3>
</div>
<div className="h-12 w-[1px] bg-stone-200 hidden md:block"></div>
<div className="flex items-center gap-8 text-stone-500">
<div className="flex flex-col items-center md:items-start">
<span className="font-bold text-stone-900 text-lg">Google Certified</span>
<span className="text-xs uppercase tracking-wider">Team</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="font-bold text-stone-900 text-lg">10+ Years</span>
<span className="text-xs uppercase tracking-wider">In Strategy</span>
</div>
</div>
</div>
</section>

<section className="lg:px-12 animate-fade-up lg:mb-20 w-full max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12 max-w-3xl mx-auto">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-montserrat mb-4">
                            We Don’t Just Run Ads. 
                            <span className="text-stone-400">We Manage Leasing Outcomes.</span>
</h2>
<p className="text-stone-500 text-lg font-montserrat">Intent Ads is built to connect ad spend directly to walk-throughs, applications, and signed leases.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-lime-100 text-lime-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:building-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">Portfolio Operation</h3>
<p className="text-stone-500 text-sm leading-relaxed">Portfolio-wide reporting and intelligence that informs executive decisions across all your properties.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="" icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Property Level Strategy</h3>
<p className="text-stone-500 text-sm leading-relaxed">We don't set and forget. Campaigns are built around real leasing performance, rent rolls, and unit mix.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-stone-200 text-stone-700 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="lucide:user-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">Results</h3>
<p className="text-stone-500 text-sm leading-relaxed">Optimization focused on leases, not clicks. We analyze which platforms actually drive signed leases.</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" id="options">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 lg:mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat mb-4">Hyper-Targeted Ad Strategy</h2>
<p className="text-lg text-stone-500 font-montserrat">We deploy the right channels based on intent, not trends.</p>
</div>
<div className="flex gap-2 text-sm font-medium text-stone-400">
<span className="px-3 py-1 rounded-full border border-stone-200 bg-stone-50">Strategy-First</span>
<span className="px-3 py-1 rounded-full border border-stone-200 bg-stone-50">Full-Funnel</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#002f43] border-[#002f43] border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="lucide:search" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-montserrat mb-3">Google PPC &amp; PMAX</h3>
<p className="text-stone-300 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Capture high-intent searches like "apartments in Melbourne" or "apartments near me".
                                </p>
<ul className="text-stone-400 text-sm space-y-2 mb-4">
<li className="flex items-center gap-2"><iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon> Phrase-match Strategy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon> Negative Keywords</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#c1ff72]" icon="lucide:check"></iconify-icon> Brand Safety</li>
</ul>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-white w-full max-w-[280px] z-10 rounded-xl pt-4 pr-4 pb-4 pl-4 relative shadow-2xl border border-stone-200">
<div className="flex gap-2 items-center border border-stone-200 rounded-full px-3 py-2 mb-4 shadow-sm">
<iconify-icon className="text-stone-400 text-xs" icon="lucide:search"></iconify-icon>
<span className="text-[10px] text-stone-800">best apartments for rent</span>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<div className="bg-stone-900 text-white text-[8px] px-1 rounded h-fit mt-0.5">Ad</div>
<div>
<div className="text-[10px] text-blue-600 font-semibold underline decoration-blue-600">Luxury Living | Move In Specials</div>
<div className="text-[8px] text-stone-500">Spacious floorplans available now. Book a tour...</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:share-2" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-montserrat mb-3">Social &amp; Geofencing</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Meta (Facebook/Instagram) and Programmatic Display. Retarget website visitors or fence a specific location.
                                    </p>
</div>
<div className="flex gap-3 flex-wrap">
<span className="bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800">Retargeting</span>
<span className="bg-white/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800">Geofencing</span>
</div>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">

<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 transition-all duration-500 ease-out">
<div className="bg-stone-900 rounded-xl shadow-lg border border-stone-800 p-4 aspect-video relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0 animate-pulse-slow" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#c1ff72] rounded-full bg-[#c1ff72]/10 animate-pulse-slow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#c1ff72] rounded-full shadow-[0_0_10px_#c1ff72]"></div>

<div className="absolute top-1/3 left-1/3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md animate-float" style={{animationDelay: '0.5s'}}>
<iconify-icon icon="logos:facebook" width="14"></iconify-icon>
</div>
<div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md animate-float" style={{animationDelay: '1s'}}>
<iconify-icon icon="logos:instagram-icon" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-lime-100/80 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-lime-200">

<div className="relative w-full h-32 mb-4 flex justify-end">
<div className="bg-stone-900 w-32 h-20 rounded-lg shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform border border-stone-700 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-800 to-stone-900"></div>
<iconify-icon className="text-white opacity-50 relative z-10" icon="lucide:tv" width="24"></iconify-icon>
<div className="absolute bottom-2 left-2 right-2 h-1 bg-stone-700 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-[#c1ff72]"></div>
</div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon className="" icon="lucide:monitor-play" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">Streaming TV &amp; TikTok</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Digital billboards. Show display ads based on user activities across apps and TV.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">
<div className="flex w-full h-32 relative justify-end">
<div className="relative group-hover:-translate-y-1 transition-transform duration-500">
<div className="bg-white p-3 rounded-xl shadow-lg border border-sky-100 w-32 space-y-2">
<div className="h-2 bg-stone-100 rounded w-full"></div>
<div className="h-2 bg-stone-100 rounded w-2/3"></div>
<div className="h-2 bg-[#c1ff72] rounded w-1/2 mt-2"></div>
</div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-montserrat mb-2">Omni Channel Analysis</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Unified view of all lead sources. We track the entire funnel so nothing gets missed.</p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="space-y-6">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-montserrat leading-tight">
                                Real-Time Performance You Can Trust
                            </h2>
<p className="text-stone-500 text-lg">Why Intent Ads Outperforms DIY and Traditional Vendors.</p>
<div className="space-y-4 pt-4">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-stone-900">1</span>
</div>
<div>
<h4 className="font-bold text-stone-900 text-lg">No Generic Automation</h4>
<p className="text-stone-500 text-sm">Most keywords are phrase-match. Broad types avoided. Branded search limited efficiently.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-stone-900">2</span>
</div>
<div>
<h4 className="font-bold text-stone-900 text-lg">No “Set It And Forget It”</h4>
<p className="text-stone-500 text-sm">We analyze search terms with common sense and monitor exactly where location searches originate.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-[#c1ff72] flex items-center justify-center shrink-0 mt-1">
<span className="font-bold text-stone-900">3</span>
</div>
<div>
<h4 className="font-bold text-stone-900 text-lg">Constant Refinement</h4>
<p className="text-stone-500 text-sm">Strategic planning built upon tailored leasing success to capture location interest with high conversion rates.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-stone-900 text-white p-8 lg:p-12 rounded-[32px] relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#c1ff72] blur-[100px] opacity-10 rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-bold mb-8 relative z-10 font-google-sans-flex">The Intent Difference</h3>
<div className="space-y-6 relative z-10">
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
<span className="font-medium text-stone-300">Google Partner</span>
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
<span className="font-medium text-stone-300">Multifamily Operators First</span>
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
<span className="font-medium text-stone-300">Uncover Campaign Potential</span>
<iconify-icon className="text-[#c1ff72]" icon="lucide:check-circle"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20" id="results">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-zinc-900/30 bg-stone-900 border-stone-800">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
<span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Pipeline Management</span>
</div>
<h2 className="lg:text-4xl xl:text-5xl leading-tight lg:mr-6 lg:mb-8 text-3xl font-medium text-white tracking-tight font-montserrat mb-6">
                                We’re not just managing your ad account.  <span className="text-stone-400">We’re managing your leasing pipeline.</span>
</h2>
<p className="text-base lg:text-lg text-stone-500 font-montserrat max-w-md mb-8 lg:mb-10 leading-relaxed">
                                Ready to see what you're leaving on the table?
                            </p>
<button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(193,255,114,0.3)] text-stone-900">
<span>Get Performance Audit</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
<div className="transform [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-slate-950/80 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
<div className="flex items-center justify-between border-b pb-4 mb-4 border-stone-800">
<span className="text-stone-300">Performance_Report.pdf</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 bg-orange-700/50 rounded-full"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-lime-500/50"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-4 text-center">
<div className="p-3 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-1 text-[10px] uppercase">ILSs</span>
<span className="text-xl font-bold text-white block">60</span>
</div>
<div className="p-3 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-1 text-[10px] uppercase">Comps</span>
<span className="text-xl font-bold text-white block">10</span>
</div>
<div className="p-3 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-1 text-[10px] uppercase">Bidding</span>
<span className="text-xl font-bold text-[#c1ff72] block">30</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500 text-sm" icon="lucide:alert-circle"></iconify-icon>
<span className="text-stone-300">Uncover Poor Campaigns</span>
</div>
<span className="text-[#c1ff72]">Fixed</span>
</div>
<div className="flex items-center justify-between p-3 rounded transition-colors border border-transparent bg-stone-900/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-sm" icon="lucide:building"></iconify-icon>
<span className="text-stone-300">Irrelevant Properties Filtered</span>
</div>
<span className="text-[#c1ff72]">Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-6">
<h2 className="text-3xl lg:text-5xl leading-tight font-medium text-stone-900 tracking-tight font-montserrat">Ready to See What You’re Leaving on the Table?</h2>
<p className="text-stone-800 font-semibold text-lg">Launch in 5 Business Days or Less!</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                                    Start Your Optimization
                                </button>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-google-sans-flex">Intent<span className="text-lime-500">Ads</span></span>
</div>
<p className="text-sm text-stone-500 font-montserrat max-w-sm leading-relaxed">
                                An Intentional Marketing Company.
                            </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Company</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#strategy">Strategy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#options">Ad Options</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#results">Results</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Connect</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2026 Intent Ads. All rights reserved.</p>
</div>
</div>
</footer>
</div>

</main>
</div>


    </>
  );
}
