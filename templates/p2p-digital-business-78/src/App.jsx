import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMobileMenu.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
<span className="text-white font-semibold text-xs tracking-tighter">P2P</span>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Prospect to Partner</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#dojo">The Dojo</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#membership">Membership</a>
</div>

<div className="hidden sm:flex items-center gap-3">
<a className="text-xs font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#membership">
                        Sign In
                    </a>
<a className="bg-neutral-900 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-neutral-800 transition-all shadow-sm" href="#membership">
                        Become a Member
                    </a>
</div>

<button className="md:hidden p-2 text-neutral-600" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-white hidden flex-col" id="mobileMenu">
<div className="p-6 flex justify-between items-center border-b border-neutral-100">
<span className="font-semibold text-sm tracking-tight">Menu</span>
<button className="p-2" id="closeMobileMenu">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-6 flex flex-col gap-6">
<a className="text-lg font-medium text-neutral-600" href="#how-it-works">How it Works</a>
<a className="text-lg font-medium text-neutral-600" href="#dojo">The Digital Dojo</a>
<a className="text-lg font-medium text-neutral-600" href="#services">Services</a>
<a className="text-lg font-medium text-neutral-600" href="#membership">Membership</a>
<div className="h-px bg-neutral-100 my-2"></div>
<a className="bg-neutral-900 text-white py-3 rounded-lg text-center font-medium" href="#membership">Become a Member</a>
</div>
</div>

<section className="pt-32 pb-20 px-6 border-b border-neutral-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">Welcome to the Digital Business Mall</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Turn Prospects into <br className="hidden sm:block"/>
<span className="text-neutral-400">Long Term Partners.</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                P2P is a business system and community training ground. 
                Every new visitor receives <span className="text-neutral-900 font-medium">1,000 free P2P coins</span>. 
                Order services, grow your business, and only pay when you are happy with the work.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm min-w-[180px]" href="#membership">
                    Become a Member
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-700 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all min-w-[180px]" href="#contact">
<i className="w-4 h-4" data-lucide="phone"></i>
                    Book Strategy Call
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
<div className="rounded-xl border border-neutral-200 shadow-2xl bg-white overflow-hidden p-2">
<div className="bg-neutral-50 rounded-lg aspect-[16/9] flex items-center justify-center relative overflow-hidden">

<div className="grid grid-cols-4 gap-4 p-8 w-full opacity-50 scale-95">
<div className="col-span-1 h-32 bg-neutral-200 rounded-lg"></div>
<div className="col-span-3 h-32 bg-neutral-200 rounded-lg"></div>
<div className="col-span-2 h-48 bg-neutral-200 rounded-lg"></div>
<div className="col-span-2 h-48 bg-neutral-200 rounded-lg"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/80 backdrop-blur-sm border border-neutral-200 px-6 py-4 rounded-xl shadow-sm text-center">
<p className="text-xs font-medium text-neutral-500 mb-1">Current Balance</p>
<div className="flex items-center justify-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="coins"></i>
<span className="text-2xl font-bold tracking-tight text-neutral-900">1,000 P2P</span>
</div>
<div className="mt-2 text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">
                                    Ready to spend
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">The P2P Workflow</h2>
<p className="text-neutral-500 max-w-xl">A risk-free environment designed for growth. We've removed the friction from starting new projects.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-neutral-200 via-neutral-200 to-transparent z-0"></div>

<div className="relative z-10 bg-white pr-4">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center mb-6 text-neutral-900 font-semibold shadow-sm">1</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Enter the Dojo</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Join the community and access the 8-floor digital mall. Your journey to partnership begins here.</p>
</div>

<div className="relative z-10 bg-white pr-4">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center mb-6 text-neutral-900 font-semibold shadow-sm">2</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Receive Gift</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Every new visitor is instantly credited with 1,000 P2P coins to start ordering services immediately.</p>
</div>

<div className="relative z-10 bg-white pr-4">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center mb-6 text-neutral-900 font-semibold shadow-sm">3</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Order via ATM</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Use our simplified ATM interface to request work. Brand, tech, or content—just a click away.</p>
</div>

<div className="relative z-10 bg-white pr-4">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center mb-6 text-neutral-900 font-semibold shadow-sm">4</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">Pay if Happy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Review the work delivered. Coins are only deducted and payment finalized when you are 100% satisfied.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center">Built for Every Stage</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-4 p-2 bg-neutral-100 w-fit rounded-md text-neutral-900">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Entrepreneurs &amp; Solo</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Launch your vision with minimal risk. Use coins to build your MVP and brand identity without upfront heavy lifting.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-4 p-2 bg-neutral-100 w-fit rounded-md text-neutral-900">
<i className="w-5 h-5" data-lucide="store"></i>
</div>
<h3 className="text-sm font-semibold mb-2">SMBs</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Scale your operations. Offload marketing, systems, and creative work to our partner network effortlessly.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-4 p-2 bg-neutral-100 w-fit rounded-md text-neutral-900">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Community Orgs</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Amplify your message. Get professional grade websites and campaigns to support your cause.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-sm">
<div className="mb-4 p-2 bg-neutral-100 w-fit rounded-md text-neutral-900">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Enterprise Teams</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Innovate faster. Deploy custom retainers for AI agents, software development, and strategic expansion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-100" id="dojo">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">The Digital Dojo</h2>
<p className="text-neutral-500 mb-8 text-sm leading-relaxed">
                        Imagine an eight-floor virtual skyscraper. Each floor is dedicated to a specific aspect of business growth. As you ascend, you unlock more advanced capabilities for your enterprise.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">01</span>
<span className="text-sm font-medium">Lobby &amp; Community</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">02</span>
<span className="text-sm font-medium">Brand &amp; Visuals</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">03</span>
<span className="text-sm font-medium">Web &amp; Funnels</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">04</span>
<span className="text-sm font-medium">Content Studio</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">05</span>
<span className="text-sm font-medium">Systems &amp; AI</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">06</span>
<span className="text-sm font-medium">Strategy &amp; Funding</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">07</span>
<span className="text-sm font-medium">Partner Storefronts</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
<span className="text-neutral-400 font-mono text-xs">08</span>
<span className="text-sm font-medium">Executive Suite</span>
</div>
</div>
</div>
<div className="relative h-[500px] bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex items-center justify-center">

<div className="w-64 space-y-2">
<div className="h-8 w-full bg-neutral-900 rounded opacity-10"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-20"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-30"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-40"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-50"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-60"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-70"></div>
<div className="h-8 w-full bg-neutral-900 rounded opacity-90"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur border border-neutral-200 rounded-xl">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-900 mt-1" data-lucide="map"></i>
<div>
<h4 className="text-sm font-semibold">Interactive Map</h4>
<p className="text-xs text-neutral-500">Navigate between floors to access specialized ATMs and services.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-100" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12">Service Menu</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="palette"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Brand &amp; Visuals</h3>
<p className="text-xs text-neutral-500 mb-4">Logo design, identity systems, UI/UX design, and marketing collateral.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Logo Packages</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Brand Guidelines</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="monitor"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Websites &amp; Apps</h3>
<p className="text-xs text-neutral-500 mb-4">High-conversion landing pages, full websites, web apps, and funnels.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Landing Pages</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> No-Code Development</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="megaphone"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Content &amp; Marketing</h3>
<p className="text-xs text-neutral-500 mb-4">Social media management, copywriting, SEO, and ad campaigns.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Social Strategy</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Email Marketing</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="cpu"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Systems &amp; AI Agents</h3>
<p className="text-xs text-neutral-500 mb-4">Workflow automation, CRM setup, and custom AI agents for support.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Zapier/Make Automation</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Custom Chatbots</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="camera"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Creative Media</h3>
<p className="text-xs text-neutral-500 mb-4">Video production, photography, podcast editing, and storytelling.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Video Editing</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Motion Graphics</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200">
<div className="w-8 h-8 rounded bg-neutral-100 text-neutral-600 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<h3 className="text-sm font-semibold mb-2">Funding &amp; Strategy</h3>
<p className="text-xs text-neutral-500 mb-4">Pitch decks, business plans, grant writing, and growth consulting.</p>
<ul className="text-[11px] text-neutral-400 space-y-1">
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Pitch Deck Design</li>
<li className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="check"></i> Financial Modeling</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 mb-6">
<i className="w-3 h-3 text-yellow-500" data-lucide="coins"></i>
<span className="text-xs font-medium text-neutral-300">Internal Economy</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">The P2P Coin System</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    We've gamified growth. Coins are the currency of the Dojo. You receive 1,000 coins just for showing up. Use them to "purchase" services from our ATMs. If you aren't happy with the result, you don't pay. It's that simple. Need more coins? You can purchase them as you grow.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">1 coin = 1 unit of value. Transparent pricing.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Use ATMs located on every digital floor to order instantly.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mt-0.5">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Complete satisfaction guarantee before coins are deducted.</span>
</li>
</ul>
</div>
<div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 sm:p-8 max-w-md mx-auto w-full">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-mono text-neutral-400">ATM: WEB_FLOOR_03</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
<div className="bg-neutral-900 rounded-lg p-4 mb-4 border border-neutral-700">
<div className="text-[10px] text-neutral-500 mb-1">SERVICE REQUEST</div>
<div className="text-sm font-medium text-white mb-2">Landing Page Optimization</div>
<div className="text-[10px] text-neutral-500 mb-1">COST</div>
<div className="text-xl font-bold text-white">450 <span className="text-yellow-500 text-sm font-normal">Coins</span></div>
</div>
<div className="space-y-3">
<button className="w-full bg-white text-neutral-900 py-3 rounded-md text-xs font-bold hover:bg-neutral-200 transition-colors">
                        CONFIRM ORDER
                    </button>
<button className="w-full bg-transparent border border-neutral-700 text-neutral-400 py-3 rounded-md text-xs font-medium hover:text-white transition-colors">
                        CANCEL
                    </button>
</div>
<div className="mt-6 pt-6 border-t border-neutral-700 text-center">
<p className="text-[10px] text-neutral-500">Balance after transaction: 550 Coins</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center">Your Journey</h2>
<div className="space-y-8">

<div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center shrink-0">
<span className="font-bold text-neutral-900">01</span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold">New Founder</h3>
<p className="text-xs text-neutral-500 mt-1">Enters Dojo -&gt; Claims 1000 Coins -&gt; Orders Logo &amp; Deck -&gt; Secures 1st Client -&gt; Upgrades to Member.</p>
</div>
<i className="hidden md:block w-5 h-5 text-neutral-300" data-lucide="arrow-right"></i>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center shrink-0">
<span className="font-bold text-neutral-900">02</span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold">Growing SMB</h3>
<p className="text-xs text-neutral-500 mt-1">Joins as Client -&gt; Deploys Content Strategy via ATM -&gt; Automates CRM -&gt; Increases Revenue -&gt; Becomes Storefront Partner.</p>
</div>
<i className="hidden md:block w-5 h-5 text-neutral-300" data-lucide="arrow-right"></i>
</div>

<div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center shrink-0">
<span className="font-bold text-neutral-900">03</span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold">Enterprise Team</h3>
<p className="text-xs text-neutral-500 mt-1">Book Strategy Call -&gt; Custom Retainer Setup -&gt; Access Floor 8 (Executive) -&gt; Scale with dedicated AI Agents.</p>
</div>
<i className="hidden md:block w-5 h-5 text-neutral-300" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-neutral-200 pb-12">
<div className="text-center">
<div className="text-3xl font-bold tracking-tight text-neutral-900 mb-1">5k+</div>
<div className="text-xs text-neutral-500 font-medium">Community Members</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold tracking-tight text-neutral-900 mb-1">1M+</div>
<div className="text-xs text-neutral-500 font-medium">Coins Exchanged</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold tracking-tight text-neutral-900 mb-1">98%</div>
<div className="text-xs text-neutral-500 font-medium">Satisfaction Rate</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold tracking-tight text-neutral-900 mb-1">24h</div>
<div className="text-xs text-neutral-500 font-medium">Avg. Turnaround</div>
</div>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center">Trusted by Partners</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 mb-4">"The coin system removed all the hesitation I had about hiring freelancers. I got my MVP designs done in 3 days."</p>
<p className="text-xs font-bold text-neutral-900">— Founder, Tech Startup</p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 mb-4">"We scaled our content output by 300% using P2P ATMs. The quality control is built into the payment model."</p>
<p className="text-xs font-bold text-neutral-900">— CMO, Digital Agency</p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-neutral-600 mb-4">"Finally, a place where community organizations can get enterprise-grade strategy support without the bureaucracy."</p>
<p className="text-xs font-bold text-neutral-900">— Director, Non-Profit</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100" id="membership">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-center">Membership Plans</h2>
<p className="text-center text-neutral-500 mb-12 text-sm">Choose how you want to interact with the P2P economy.</p>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold mb-2">Client Member</h3>
<p className="text-xs text-neutral-500">For those who need consistent work done.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold tracking-tight">125</span>
<span className="text-sm text-neutral-500">/ week</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Full Dojo Access</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Weekly Coin Allowance</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Priority ATM Support</li>
</ul>
<a className="w-full block text-center bg-neutral-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-neutral-800" href="#">Start Trial</a>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="mb-4">
<h3 className="text-lg font-semibold mb-2">Storefront Partner</h3>
<p className="text-xs text-neutral-500">Open your own shop in the mall.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold tracking-tight">500</span>
<span className="text-sm text-neutral-500"> one time</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Sell Services to Members</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Low 2% Vendor Fee</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Brand Placement in Lobby</li>
</ul>
<a className="w-full block text-center bg-white border border-neutral-200 text-neutral-900 py-3 rounded-lg text-sm font-medium hover:bg-neutral-100" href="#">Apply Now</a>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold mb-2">Enterprise / VIP</h3>
<p className="text-xs text-neutral-500">High volume &amp; custom solutions.</p>
</div>
<div className="mb-6">
<span className="text-3xl font-bold tracking-tight">Custom</span>
<span className="text-sm text-neutral-500"> retainers</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Dedicated Account Manager</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Custom AI Implementation</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><i className="w-4 h-4 text-neutral-900" data-lucide="check"></i> Strategic Consulting</li>
</ul>
<a className="w-full block text-center bg-white border border-neutral-200 text-neutral-900 py-3 rounded-lg text-sm font-medium hover:bg-neutral-100" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-neutral-50 rounded-lg border border-neutral-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span className="text-sm text-neutral-800">Is there really no risk?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Yes. You order services using your coins. The provider delivers the work. If you are not satisfied with the quality, the coins are not deducted, and you don't pay. We prioritize long-term partnership over quick transactions.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-lg border border-neutral-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span className="text-sm text-neutral-800">What can I use the 1,000 free coins for?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        You can use them for any service in the Digital Dojo. This includes small design tasks, content writing, website audits, or consultation calls. It's our way of letting you test the system.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-lg border border-neutral-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span className="text-sm text-neutral-800">How quickly are services delivered?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        It depends on the service, but most ATM orders are designed for speed. Simple tasks are often done within 24-48 hours. Larger projects have clear milestones.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-lg border border-neutral-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5">
<span className="text-sm text-neutral-800">Can I convert coins back to cash?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Coins are credits for services within the P2P ecosystem. They are not a crypto-currency and cannot be exchanged for cash, but they hold real value within our partner network.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-100" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter mb-6">Ready to enter the Dojo?</h2>
<p className="text-neutral-500 mb-10 max-w-xl mx-auto">Join thousands of entrepreneurs turning prospects into partners. Start with your 1,000 free coins today. Satisfaction guaranteed.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg min-w-[200px]" href="#membership">
                    Get 1,000 Free Coins
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-700 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all min-w-[200px]" href="mailto:strategy@p2p.com">
                    Book Strategy Call
                </a>
</div>
<p className="mt-8 text-xs text-neutral-400">
<i className="w-3 h-3 inline mr-1 mb-0.5" data-lucide="shield-check"></i>
                You do not pay until you are happy with the work.
            </p>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center">
<span className="text-white font-semibold text-[10px] tracking-tighter">P2P</span>
</div>
<span className="text-xs text-neutral-500">© 2024 Prospect to Partner.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Dojo Rules</a>
</div>
</div>
</footer>


    </>
  );
}
