import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');

            function updateView() {
                let hash = window.location.hash || '#home';
                
                // Hide all sections
                sections.forEach(section => section.classList.remove('active'));
                
                // Show target section
                const targetSection = document.querySelector(hash + '-page');
                if (targetSection) {
                    targetSection.classList.add('active');
                } else {
                    document.getElementById('home-page').classList.add('active');
                    hash = '#home';
                }

                // Update nav active states
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === hash) {
                        link.classList.remove('text-stone-500', 'bg-transparent');
                        link.classList.add('text-stone-900', 'bg-white', 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]', 'border', 'border-stone-100');
                    } else {
                        link.classList.add('text-stone-500', 'bg-transparent');
                        link.classList.remove('text-stone-900', 'bg-white', 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]', 'border', 'border-stone-100');
                    }
                });

                window.scrollTo(0, 0);
            }

            window.addEventListener('hashchange', updateView);
            updateView(); // Run on initial load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex items-center gap-3 cursor-pointer group" href="#home">
<div className="w-10 h-10 bg-[#1C1917] rounded-sm flex items-center justify-center text-white shadow-xl shadow-stone-900/10 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-lg font-medium tracking-tight text-stone-900 leading-none serif">ONLINE</span>
<span className="text-xs uppercase tracking-[0.2em] text-[#A18058] font-normal mt-0.5 scale-75 origin-left">Business.com</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 bg-stone-100/50 p-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm" id="nav-links">
<a className="nav-link px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-normal transition-all" href="#home">Home</a>
<a className="nav-link px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-normal transition-all" href="#buy">Buy</a>
<a className="nav-link px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-normal transition-all" href="#partner">Partner</a>
<a className="nav-link px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-normal transition-all" href="#about">About</a>
</div>

<div className="flex items-center gap-8">
<a className="hidden md:block text-xs font-normal text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#partner">Sign in</a>
<a className="group bg-[#1C1917] hover:bg-[#292524] text-[#FAFAF9] text-xs font-normal py-3 px-6 rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-3" href="#buy">
<span>View Opportunities</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="page-section active" id="home-page">

<header className="relative pt-36 pb-32 lg:pt-52 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Modern Workspace" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#3f3b35]/30 mix-blend-multiply"></div>
<div className="absolute inset-0 hero-mask"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
<div className="lg:w-7/12">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1C1917]/80 backdrop-blur-md border border-[#A18058]/30 text-[#FAFAF9] text-xs font-normal tracking-widest uppercase mb-8 shadow-2xl scale-90 origin-left">
<span className="w-1.5 h-1.5 rounded-full bg-[#A18058] animate-pulse"></span>
                            Premium domains turned into launch-ready businesses
                        </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl text-stone-50 mb-8 leading-[1.05] drop-shadow-lg tracking-tight">
                            Premium-domain online businesses <br/>
<span className="italic font-light opacity-90 text-stone-200">already in motion.</span>
</h1>
<p className="text-stone-200 text-lg font-light mb-12 max-w-xl leading-relaxed opacity-90 drop-shadow-md">
                            Buy a starter business outright, or partner with us to build it into something bigger. OnlineBusiness.com offers researched, branded, launch-ready web businesses built on premium domains.
                        </p>
<div className="bg-[#FAFAF9]/95 p-3 rounded-[2rem] shadow-2xl shadow-[#1C1917]/10 max-w-2xl border border-white/40 backdrop-blur-xl">
<div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
<div className="w-full md:w-[35%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-xs font-semibold text-[#A18058] uppercase tracking-widest mb-1.5 scale-90 origin-left">Business Model</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent border-none outline-none text-stone-900 text-sm font-normal cursor-pointer group-hover:bg-transparent font-sans" readonly="" type="text" value="SaaS Platform"/>
</div>
</div>
<div className="w-full md:w-[30%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-xs font-semibold text-[#A18058] uppercase tracking-widest mb-1.5 scale-90 origin-left">Industry</label>
<div className="flex items-center justify-between">
<span className="text-sm font-normal text-stone-900">B2B Software</span>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="w-full md:w-[35%] px-6 py-3 flex items-center gap-3">
<div className="flex-1 group cursor-pointer hover:bg-white rounded-2xl transition-colors -ml-4 pl-4 py-1">
<label className="block text-xs font-semibold text-[#A18058] uppercase tracking-widest mb-1.5 scale-90 origin-left">Valuation</label>
<span className="text-sm font-normal text-stone-900">$25k - $150k+</span>
</div>
<button className="w-14 h-14 bg-[#1C1917] rounded-full flex items-center justify-center text-[#A18058] hover:bg-[#292524] transition-colors shadow-lg hover:scale-105 duration-300">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="hidden lg:block lg:w-5/12 pb-4">
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#1C1917]/40 backdrop-blur-xl border border-white/10 p-6 rounded-t-2xl rounded-bl-2xl text-white">
<div className="text-3xl font-light serif italic mb-1 tracking-tight">150+</div>
<div className="text-xs text-stone-300 font-normal uppercase tracking-wider scale-90 origin-left">Premium Domains</div>
</div>
<div className="bg-[#FAFAF9]/90 backdrop-blur-xl border border-white/20 p-6 rounded-t-2xl rounded-br-2xl text-stone-900">
<div className="text-3xl font-light serif italic mb-1 tracking-tight">45</div>
<div className="text-xs text-stone-500 font-normal uppercase tracking-wider scale-90 origin-left">Launch-Ready Sites</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200 bg-[#FAFAF9]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
<span className="text-xs font-medium text-[#A18058] tracking-[0.2em] uppercase shrink-0">Featured &amp; Discussed In</span>
<div className="flex items-center gap-16 flex-wrap justify-center w-full opacity-40 grayscale mix-blend-multiply">
<iconify-icon className="text-stone-900" icon="simple-icons:techcrunch" width="80"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:forbes" width="80"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:bloomberg" width="90"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:fastcompany" width="100"></iconify-icon>
</div>
</div>
</section>

<section className="py-28 bg-[#F5F5F4]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex justify-between items-end border-b border-stone-200 pb-8">
<div className="max-w-xl">
<span className="text-[#A18058] font-semibold tracking-widest text-xs uppercase mb-3 block">Our Methodology</span>
<h2 className="text-4xl md:text-5xl text-stone-900 mb-4 serif leading-tight tracking-tight">We build the beginning, <br/>so you don't start from zero.</h2>
<p className="text-stone-500 text-sm leading-relaxed max-w-md">Combining premium tier domain names with early-stage business execution and positioning.</p>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-all" href="#buy">
                            View current listings
                            <iconify-icon className="-rotate-45" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 row-span-1 bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-[#FAFAF9] border border-stone-100 flex items-center justify-center text-[#A18058] mb-6 shadow-sm">
<iconify-icon icon="solar:radar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-stone-900 mb-3 serif italic tracking-tight">Skip the messy beginning</h3>
<p className="text-stone-500 text-sm max-w-sm leading-relaxed">We’ve already done the early work: research, positioning, site setup, core content, and initial marketing direction so you can focus on scale.</p>
</div>
</div>
<div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden mask-image-l">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>
<div className="md:col-span-1 row-span-2 bg-[#1C1917] rounded-[2rem] p-10 border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#A18058]/10 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-800/50 border border-stone-700 flex items-center justify-center text-[#D4B996] mb-8">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-[#FAFAF9] mb-3 serif italic tracking-tight">Start with a stronger asset</h3>
<p className="text-stone-400 text-sm leading-relaxed mb-10 font-light">
                                Each opportunity begins with a premium domain that gives the business a stronger brand position, credibility, and defensive moat from day one.
                            </p>
</div>
<div className="relative h-40 w-full border-t border-stone-800 pt-6">
<div className="flex justify-between items-center mb-4">
<span className="text-xs uppercase text-stone-500 font-semibold tracking-widest scale-90 origin-left">Brand Equity Growth</span>
<span className="text-xs font-normal text-[#A18058]">Proprietary</span>
</div>
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 30 20, 50 25 C 70 30, 80 5, 100 0" fill="none" stroke="#57534E" stroke-dasharray="2 2" strokeWidth="1"></path>
<path d="M0 35 C 20 32, 30 15, 50 18 C 70 21, 80 2, 100 -5" fill="none" stroke="#A18058" strokeWidth="2"></path>
<circle className="animate-ping" cx="100" cy="-5" fill="#A18058" opacity="0.5" r="3"></circle>
<circle cx="100" cy="-5" fill="#FAFAF9" r="2"></circle>
</svg>
</div>
</div>
<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-stone-900 mb-3 serif italic tracking-tight">Buy the business outright</h3>
<p className="text-stone-500 text-xs leading-relaxed">Acquire the premium domain, live website, brand foundation, and core business concept entirely for yourself.</p>
</div>
</div>
<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-stone-900 mb-3 serif italic tracking-tight">Partner to build it</h3>
<p className="text-stone-500 text-xs leading-relaxed">If you’re an operator, subject matter expert, or strategic fit, we may be open to building the business together.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1917] py-28 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#292524] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A18058]/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-24">
<div className="lg:w-6/12">
<h2 className="text-4xl md:text-5xl text-[#FAFAF9] serif italic mb-6 tracking-tight">
                            We don't just sell <br/>domain names.
                        </h2>
<p className="text-stone-400 text-base mb-12 leading-relaxed font-light">
                            We build online businesses around premium domains and bring them to life far enough to make the opportunity real. The result is a more credible, strategic starting point.
                        </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-stone-200 text-sm font-normal">Not an empty shell.</h4>
<p className="text-stone-500 text-xs mt-1">It has real thought behind it, a defined market angle, foundational assets, and a clear direction for growth.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-stone-200 text-sm font-normal">Not a fully mature company.</h4>
<p className="text-stone-500 text-xs mt-1">It’s a head start — the domain, positioning, and groundwork are in place, so the next owner can move faster.</p>
</div>
</li>
</ul>
<div className="flex gap-4">
<a className="bg-[#FAFAF9] text-[#1C1917] px-8 py-3.5 rounded-xl text-sm font-normal hover:bg-stone-200 transition-colors flex items-center gap-3" href="#buy">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Explore Businesses
                            </a>
</div>
</div>

<div className="lg:w-6/12 relative flex justify-center lg:justify-end">
<div className="relative w-[340px] h-[680px] bg-[#0c0a09] rounded-[56px] border-[8px] border-[#292524] shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-all duration-700 ring-1 ring-white/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-20"></div>
<div className="w-full h-full bg-[#FAFAF9] relative overflow-hidden flex flex-col">
<div className="absolute inset-0 z-0 bg-[#F5F5F4]">
<div className="absolute top-20 left-6 right-6 h-32 bg-white rounded-xl shadow-sm border border-stone-100 p-4">
<div className="w-1/3 h-2 bg-stone-200 rounded-full mb-4"></div>
<div className="flex items-end gap-2 h-16">
<div className="w-full bg-stone-100 h-1/3 rounded-t-md"></div>
<div className="w-full bg-stone-200 h-2/3 rounded-t-md"></div>
<div className="w-full bg-[#A18058]/40 h-full rounded-t-md"></div>
<div className="w-full bg-stone-100 h-1/2 rounded-t-md"></div>
<div className="w-full bg-[#A18058]/80 h-3/4 rounded-t-md"></div>
</div>
</div>
</div>
<div className="relative z-10 p-6 pt-16 flex flex-col h-full">
<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-stone-900/5 p-4 flex items-center gap-3 mb-6 border border-stone-100 mt-40">
<iconify-icon className="text-stone-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex-1 text-xs text-stone-600 font-normal">SaaS Opportunities</div>
<div className="w-8 h-8 rounded-full bg-[#1C1917] flex items-center justify-center text-white">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="absolute top-52 left-8 bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-lg text-xs font-normal shadow-xl flex items-center gap-2 animate-bounce duration-[2000ms]">
                                        $45k Valuation
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
</div>
<div className="absolute top-[280px] right-6 bg-white text-[#1C1917] px-4 py-2 rounded-lg text-xs font-normal shadow-xl border border-stone-100">
                                        DA: 42
                                    </div>
<div className="mt-auto bg-white/95 backdrop-blur-xl rounded-[20px] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border border-stone-100">
<div className="flex gap-4">
<div className="w-20 h-20 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm text-stone-900 serif italic font-normal">DataStack</h4>
<iconify-icon className="text-stone-300" icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<p className="text-xs text-stone-500 mb-3 uppercase tracking-wider scale-90 origin-left">Premium SaaS</p>
<div className="flex justify-between items-center">
<span className="text-sm font-normal text-stone-900">$35,000</span>
<button className="w-8 h-8 rounded-full bg-[#1C1917] text-[#FAFAF9] flex items-center justify-center hover:bg-[#A18058] transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section bg-[#FAFAF9] pt-36 pb-28 min-h-screen" id="buy-page">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[#A18058] font-semibold tracking-[0.2em] text-xs uppercase mb-3 block">Live Opportunities</span>
<h1 className="text-4xl md:text-5xl text-stone-900 serif leading-tight tracking-tight">Acquire a Starter Business</h1>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-6 py-2 bg-[#1C1917] text-white rounded-full text-xs font-normal tracking-wide shadow-lg">All Assets</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-normal tracking-wide transition-all whitespace-nowrap">SaaS</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-normal tracking-wide transition-all whitespace-nowrap">Content</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-normal tracking-wide transition-all whitespace-nowrap">E-commerce</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="SaaS Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#FAFAF9]/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-xs font-semibold text-stone-900 uppercase tracking-widest shadow-sm scale-90 origin-left">SaaS / B2B</span>
</div>
<div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-full text-xs font-normal shadow-xl flex items-center gap-2">
                                View Details <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">DataStack.io</h3>
<span className="text-lg font-normal text-stone-900 font-sans">$35,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Acquire Outright</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>1.2k Traffic</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Pre-revenue</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>DA 28</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Community Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#1C1917]/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-xs font-semibold text-white uppercase tracking-widest border border-white/10 scale-90 origin-left">Content Hub</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">FintechInsider.co</h3>
<span className="text-lg font-normal text-stone-900 font-sans">$18,500</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Open to Partner</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>8.5k Traffic</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>$450 MRR</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>DA 34</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Marketplace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#A18058] backdrop-blur-md px-3 py-1.5 rounded-sm text-xs font-semibold text-white uppercase tracking-widest shadow-sm scale-90 origin-left">Marketplace</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">SupplyChain.net</h3>
<span className="text-lg font-normal text-stone-900 font-sans">$75,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Acquire Outright</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>3.4k Traffic</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Pre-revenue</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>DA 42</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="SaaS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#FAFAF9]/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-xs font-semibold text-stone-900 uppercase tracking-widest shadow-sm scale-90 origin-left">SaaS</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic tracking-tight">PropManage.app</h3>
<span className="text-lg font-normal text-stone-900 font-sans">$42,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Acquire Outright</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>2.1k Traffic</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>$120 MRR</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>DA 31</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-section bg-[#F5F5F4] pt-36 pb-28 min-h-screen" id="partner-page">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<span className="text-[#A18058] font-semibold tracking-widest text-xs uppercase mb-3 block">Partnership Model</span>
<h1 className="text-4xl md:text-5xl text-stone-900 mb-6 serif leading-tight tracking-tight">Co-build with <br/>OnlineBusiness.com</h1>
<p className="text-stone-500 text-base leading-relaxed mb-12 max-w-lg font-light">
                        We hold a portfolio of high-value, category-defining domains. If you are an experienced operator, developer, or subject matter expert, we want to partner with you to turn these assets into thriving businesses.
                    </p>
<div className="space-y-8">
<div className="flex gap-6">
<div className="text-3xl text-stone-300 serif italic">01</div>
<div>
<h3 className="text-lg font-normal text-stone-900 mb-2">Apply &amp; Match</h3>
<p className="text-stone-500 text-sm leading-relaxed">Tell us about your background and what industries you know best. We'll match you with a premium domain from our vault that fits your expertise.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-3xl text-stone-300 serif italic">02</div>
<div>
<h3 className="text-lg font-normal text-stone-900 mb-2">We Provide the Foundation</h3>
<p className="text-stone-500 text-sm leading-relaxed">We contribute the domain, brand identity, initial site architecture, and funding for early-stage development expenses.</p>
</div>
</div>
<div className="flex gap-6">
<div className="text-3xl text-stone-300 serif italic">03</div>
<div>
<h3 className="text-lg font-normal text-stone-900 mb-2">You Execute &amp; Scale</h3>
<p className="text-stone-500 text-sm leading-relaxed">You act as the operating founder. You build the product, manage the operations, and drive growth. We share the equity.</p>
</div>
</div>
</div>
</div>

<div>
<div className="bg-white p-10 rounded-[2rem] border border-stone-200 shadow-sm">
<h3 className="text-2xl text-stone-900 mb-8 serif italic tracking-tight">Submit your profile</h3>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">First Name</label>
<input className="w-full bg-[#FAFAF9] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#A18058] transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Last Name</label>
<input className="w-full bg-[#FAFAF9] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#A18058] transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Email Address</label>
<input className="w-full bg-[#FAFAF9] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#A18058] transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">LinkedIn Profile URL</label>
<input className="w-full bg-[#FAFAF9] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#A18058] transition-colors" type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Area of Expertise</label>
<select className="w-full bg-[#FAFAF9] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#A18058] transition-colors appearance-none">
<option>B2B SaaS</option>
<option>E-commerce / D2C</option>
<option>Content / Media</option>
<option>Marketplaces</option>
</select>
</div>
<button className="w-full bg-[#1C1917] hover:bg-[#A18058] text-white rounded-xl py-4 text-sm font-normal transition-colors duration-300 mt-4 flex justify-center items-center gap-2" type="button">
                                Start Application
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</main>

<main className="page-section bg-[#FAFAF9] pt-36 pb-28 min-h-screen" id="about-page">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#A18058] font-semibold tracking-[0.2em] text-xs uppercase mb-4 block">Our Story</span>
<h1 className="text-4xl md:text-6xl text-stone-900 serif leading-tight tracking-tight mb-6">A great domain is the ultimate <span className="italic font-light">unfair advantage.</span></h1>
<p className="text-stone-500 text-lg leading-relaxed font-light">
                    We've spent the last decade acquiring category-defining domain names. Instead of simply parking them, we decided to build the foundations of the businesses they were always meant to be.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] mb-20">
<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-[#A18058] mb-4">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-stone-900 mb-2 serif tracking-tight">Founded in 2012</h3>
<p className="text-stone-500 text-sm leading-relaxed">Starting as a boutique domain brokerage, evolving into a venture studio model.</p>
</div>
</div>
<div className="bg-[#1C1917] text-white rounded-[2rem] p-10 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-[#D4B996] mb-4">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-4xl text-[#FAFAF9] mb-1 serif italic tracking-tight">$40M+</div>
<p className="text-stone-400 text-xs uppercase tracking-widest scale-90 origin-left">In Domain Transactions</p>
</div>
</div>
<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-[#A18058] mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-stone-900 mb-2 serif tracking-tight">Global Team</h3>
<p className="text-stone-500 text-sm leading-relaxed">A distributed team of researchers, designers, and operators building foundations.</p>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-20 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<img alt="Team meeting" className="rounded-[2rem] object-cover h-[400px] w-full shadow-lg" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="md:w-1/2 max-w-lg">
<h2 className="text-3xl text-stone-900 serif tracking-tight mb-6">Our Mission</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        The hardest part of any online venture is getting from zero to one. Finding the right name, establishing credibility, and building the initial structure takes months of effort and significant capital.
                    </p>
<p className="text-stone-500 text-sm leading-relaxed">
                        We believe that by providing premium tier domains equipped with an already functioning business model, we dramatically increase the probability of success for the next operator.
                    </p>
</div>
</div>
</div>
</main>

<footer className="bg-[#FAFAF9] pt-24 pb-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
<div className="lg:w-1/3">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-[#1C1917] rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-normal tracking-tight text-stone-900 serif">ONLINE Business</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm font-light">
                        OnlineBusiness.com is a platform for buying or partnering on premium-domain starter businesses that have already been researched, built, and set in motion.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<iconify-icon icon="simple-icons:x" width="14"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24 w-full lg:w-auto">
<div>
<h4 className="font-normal text-[#A18058] text-xs uppercase tracking-[0.2em] mb-8 scale-90 origin-left">Platform</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#buy">Browse Businesses</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#partner">Partnership Model</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Valuation Criteria</a></li>
</ul>
</div>
<div>
<h4 className="font-normal text-[#A18058] text-xs uppercase tracking-[0.2em] mb-8 scale-90 origin-left">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#about">About</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors flex items-center" href="#">Careers <span className="text-xs text-[#A18058] bg-[#A18058]/10 px-1.5 py-0.5 rounded ml-2 font-normal scale-75 origin-left">Hiring</span></a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="hidden md:block">
<h4 className="font-normal text-[#A18058] text-xs uppercase tracking-[0.2em] mb-8 scale-90 origin-left">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-stone-400 text-xs font-normal">© 2024 OnlineBusiness.com. All rights reserved.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
<span className="text-stone-500 text-xs font-normal">Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
