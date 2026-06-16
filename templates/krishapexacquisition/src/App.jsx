import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Extremely robust Single Page Navigation Logic using Event Delegation
        function navigate(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(el => el.classList.remove('active'));
            
            // Show target page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // Close mobile menu if it's open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }

        // Use event delegation to guarantee clicks are registered no matter what
        document.addEventListener('click', function(e) {
            const navLink = e.target.closest('[data-page]');
            if (navLink) {
                e.preventDefault();
                const pageId = navLink.getAttribute('data-page');
                navigate(pageId);
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                document.getElementById('mobileMenu').classList.toggle('hidden');
            });
        }

        // Revenue Calculator Logic
        const inputs = ['currentMrr', 'targetMrr', 'ticketSize', 'appts', 'showUp', 'closeRate'];
        let mode = 'diy';

        function getVal(id) {
            const el = document.getElementById(id);
            if (!el) return 0;
            let val = parseFloat(el.value);
            return isNaN(val) ? 0 : val;
        }

        function formatNum(num) {
            return num.toLocaleString('en-US', { maximumFractionDigits: 1 });
        }

        function setMode(newMode) {
            mode = newMode;
            const bg = document.getElementById('toggleBg');
            const btnDiy = document.getElementById('btnDiy');
            const btnK = document.getElementById('btnKrishapex');
            const disclaimer = document.getElementById('krishapexDisclaimer');
            const cta = document.getElementById('krishapexCta');

            if (mode === 'diy') {
                bg.style.transform = 'translateX(0)';
                btnDiy.classList.remove('text-neutral-400');
                btnDiy.classList.add('text-black');
                btnK.classList.remove('text-black');
                btnK.classList.add('text-neutral-400');
                disclaimer.classList.add('hidden', 'opacity-0');
                cta.classList.add('hidden', 'opacity-0');
            } else {
                bg.style.transform = 'translateX(100%)';
                btnK.classList.remove('text-neutral-400');
                btnK.classList.add('text-black');
                btnDiy.classList.remove('text-black');
                btnDiy.classList.add('text-neutral-400');
                disclaimer.classList.remove('hidden');
                setTimeout(() => disclaimer.classList.add('opacity-100'), 10);
                cta.classList.remove('hidden');
                setTimeout(() => cta.classList.add('opacity-100'), 10);
            }
            calculate();
        }

        function calculate() {
            const currentMrr = getVal('currentMrr');
            const targetMrr = getVal('targetMrr');
            const ticket = getVal('ticketSize');
            const appts = getVal('appts');
            const showUp = getVal('showUp') / 100;
            const closeRate = getVal('closeRate') / 100;

            const revenueGap = Math.max(0, targetMrr - currentMrr);
            const mainOutput = document.getElementById('mainTimeOutput');
            const diyClients = appts * showUp * closeRate;
            const diyMrrAdded = diyClients * ticket;
            const diyTime = diyMrrAdded > 0 ? revenueGap / diyMrrAdded : Infinity;

            const kClientsLow = 76 * 0.9 * 0.35;
            const kClientsHigh = 76 * 0.9 * 0.40;
            const kTimeLow = ticket > 0 ? revenueGap / (kClientsHigh * ticket) : Infinity;
            const kTimeHigh = ticket > 0 ? revenueGap / (kClientsLow * ticket) : Infinity;

            const tdCalls = document.getElementById('tblDiyCalls');
            const tdShow = document.getElementById('tblDiyShow');
            const tdClose = document.getElementById('tblDiyClose');
            const tdTime = document.getElementById('tblDiyTime');

            if(tdCalls) tdCalls.textContent = formatNum(appts);
            if(tdShow) tdShow.textContent = (showUp * 100).toFixed(0) + '%';
            if(tdClose) tdClose.textContent = (closeRate * 100).toFixed(0) + '%';
            if(tdTime) tdTime.textContent = diyMrrAdded <= 0 ? '—' : (diyTime > 120 ? '> 10 yrs' : formatNum(diyTime) + ' mo');

            if (mode === 'diy') {
                if (revenueGap <= 0) mainOutput.textContent = 'Goal Reached';
                else if (diyMrrAdded <= 0) mainOutput.textContent = '—';
                else mainOutput.textContent = (diyTime > 120 ? '> 10 yrs' : formatNum(diyTime) + ' months');
            } else {
                if (revenueGap <= 0) mainOutput.textContent = 'Goal Reached';
                else if (ticket <= 0) mainOutput.textContent = '—';
                else mainOutput.textContent = `${formatNum(kTimeLow)} – ${formatNum(kTimeHigh)} months`;
            }
        }

        // Initialize calculator events
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('input', calculate);
        });
        
        // Initial calculation on load
        calculate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none h-screen w-full"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="bg-[#050505]/80 w-full z-50 border-white/5 border-b sticky top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-3 group hover:opacity-100 transition-opacity opacity-90" data-page="home" href="#">
<svg className="w-7 h-7" fill="none" height="24" viewbox="0 0 100 100" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 26 L80 20 L80 38 L38 42 Z" fill="white"></path>
<path d="M22 46 L72 46 C 88 46 90 75 90 75 L65 75 C 65 75 62 64 50 64 L 50 85 L 22 85 Z" fill="white"></path>
</svg>
<span className="uppercase text-sm font-medium text-white tracking-widest">Krishapex Acquisition</span>
</a>
<div className="hidden md:flex items-center gap-8 relative z-50">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" data-page="about" href="#">About</a>
<div className="relative group cursor-pointer flex gap-1 hover:text-white transition-colors text-sm font-medium text-neutral-300 items-center py-4">
                    Services
                    <iconify-icon className="group-hover:opacity-100 transition-opacity opacity-60" height="14" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col p-2 z-50">
<a className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group/link" data-page="dwy" href="#">DWY (Done-With-You) <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group/link" data-page="dfy" href="#">DFY (Done-For-You) <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon></a>
<a className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group/link" data-page="diy" href="#">DIY (Do-It-Yourself) <iconify-icon className="opacity-0 group-hover/link:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" data-page="case-studies" href="#">Case Studies</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" data-page="who-we-serve" href="#">Who We Serve</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" data-page="contact" href="#">Contact</a>
</div>
<button className="md:hidden text-neutral-400 hover:text-white relative z-50" id="mobileMenuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden border-t border-white/10 bg-[#050505]" id="mobileMenu">
<div className="flex flex-col p-6 gap-4">
<a className="text-base font-medium text-neutral-300" data-page="about" href="#">About</a>
<a className="text-base font-medium text-neutral-300" data-page="dwy" href="#">DWY (Done-With-You)</a>
<a className="text-base font-medium text-neutral-300" data-page="dfy" href="#">DFY (Done-For-You)</a>
<a className="text-base font-medium text-neutral-300" data-page="diy" href="#">DIY (Do-It-Yourself)</a>
<a className="text-base font-medium text-neutral-300" data-page="case-studies" href="#">Case Studies</a>
<a className="text-base font-medium text-neutral-300" data-page="who-we-serve" href="#">Who We Serve</a>
<a className="text-base font-medium text-neutral-300" data-page="contact" href="#">Contact</a>
</div>
</div>
</nav>

<main className="page-view active relative z-10 w-full" id="page-home">

<section className="min-h-screen flex flex-col justify-center items-center md:pt-32 md:pb-40 pt-20 px-6 pb-15 relative">
<div className="text-center max-w-full mx-auto">
<div className="inline-flex bg-white/5 border-white/10 border rounded-full py-1 px-3 backdrop-blur-sm gap-2 items-center mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">Infrastructure for Scale</span>
</div>
<h1 className="leading-[1.1] md:text-6xl lg:text-8xl text-4xl font-semibold text-white tracking-tight mb-6">Client Acquisition <br className="hidden md:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Built to Scale</span></h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">Predictable High-Ticket Clients Without Ads, Hustle, or Referrals.</p>
<div className="flex flex-col gap-4 items-center">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-neutral-200 w-full md:w-auto" data-page="contact" href="#">
<span className="mr-2">Book a Free Call</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<p className="text-xs text-neutral-600">This isn’t a sales pitch. We map your acquisition system and check fit.</p>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-3">Our Strategy</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Growth Paths. One Scalable System.</h3>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mx-auto">Our engagements are designed to help you book more calls, close high-ticket clients, and scale revenue predictably.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">DWY (Done-With-You)</h4>
</div>
<p className="leading-relaxed text-base font-light text-neutral-400 mb-8 flex-grow">We work closely with you to install a complete client-acquisition infrastructure for your business. Transferring the knowledge while building it together.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Yes, we focus on implementation.</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Results are guaranteed.</li>
</ul>
<div className="pt-6 border-t border-white/5 mb-6">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Best for:</p>
<ul className="space-y-2 text-sm text-neutral-400 font-light">
<li>• Businesses doing less than $10k/month</li>
<li>• Founders who want to systemize from scratch</li>
</ul>
</div>
<a className="inline-flex items-center justify-center h-12 w-full rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors mt-auto" data-page="dwy" href="#">Explore DWY <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center">
<iconify-icon height="20" icon="solar:rocket-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">DFY (Done-For-You)</h4>
</div>
<p className="leading-relaxed text-base font-light text-neutral-400 mb-8 flex-grow">We take full ownership of execution. From engineering offers to building appointment systems and refining sales. Everything is handled end-to-end.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Built for scale.</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Results guaranteed.</li>
</ul>
<div className="pt-6 border-t border-white/5 mb-6">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Best for:</p>
<ul className="space-y-2 text-sm text-neutral-400 font-light">
<li>• Businesses doing $25-100k/month</li>
<li>• Founders aiming for multi-figure growth</li>
</ul>
</div>
<a className="inline-flex items-center justify-center h-12 w-full rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors mt-auto" data-page="dfy" href="#">Explore DFY <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:hammer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">DIY (Do-It-Yourself)</h4>
</div>
<p className="leading-relaxed text-base font-light text-neutral-400 mb-8 flex-grow">We guide you through building your client-acquisition system step by step using our proven frameworks, playbooks, and operating systems.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Coaching with steps.</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><iconify-icon className="text-white" height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>Results are guaranteed.</li>
</ul>
<div className="pt-6 border-t border-white/5 mb-6">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Best for:</p>
<ul className="space-y-2 text-sm text-neutral-400 font-light">
<li>• Businesses doing less than $10k/month</li>
<li>• Founders who want to build it themselves</li>
</ul>
</div>
<a className="inline-flex items-center justify-center h-12 w-full rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors mt-auto" data-page="diy" href="#">Explore DIY <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t py-32 relative" id="calculator-section">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-3">Revenue Growth Calculator</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">See how long it really takes to reach your revenue goal.</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 space-y-8">
<div className="space-y-6">
<h4 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-neutral-400" height="18" icon="solar:buildings-linear" width="18"></iconify-icon> Business Inputs
                            </h4>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Current Monthly Revenue ($)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="currentMrr" type="number" value="10000"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Target Monthly Revenue ($)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="targetMrr" type="number" value="50000"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Average Ticket Size ($)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="ticketSize" type="number" value="3000"/>
</div>
</div>
</div>
<div className="space-y-6 pt-2 border-t border-white/5">
<h4 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-neutral-400" height="18" icon="solar:chart-linear" width="18"></iconify-icon> Sales Inputs
                            </h4>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Appointments / Month</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="appts" type="number" value="10"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Show-up Rate (%)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="showUp" max="100" type="number" value="60"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Closing Rate (%)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors font-light" id="closeRate" max="100" type="number" value="15"/>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 lg:p-10 sticky top-24">
<div className="flex justify-center mb-10">
<div className="inline-flex bg-black border-white/10 border rounded-full p-1 relative">
<div className="absolute top-1 left-1 bottom-1 w-[140px] bg-white rounded-full transition-all duration-300 ease-out z-0" id="toggleBg"></div>
<button className="relative z-10 w-[140px] py-2 text-sm font-medium transition-colors duration-300 rounded-full text-black" id="btnDiy" onclick="setMode('diy')">Doing It Yourself</button>
<button className="transition-colors duration-300 hover:text-white text-sm font-medium text-neutral-400 w-[140px] z-10 rounded-full py-2 relative" id="btnKrishapex" onclick="setMode('krishapex')">With Krishapex</button>
</div>
</div>
<div className="text-center mb-12 relative">
<p className="text-neutral-400 text-base font-light mb-2 relative z-10">Time to reach target MRR</p>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight relative z-10 transition-all duration-300" id="mainTimeOutput">14.8 months</h2>
<div className="hidden mt-4 opacity-0 transition-opacity duration-500" id="krishapexDisclaimer">
<p className="text-xs text-neutral-500 font-light">Based on 26 working days, 90% show-up rate, and 35–40% close rate.</p>
</div>
</div>
<div className="overflow-hidden rounded-xl border border-white/5 bg-[#050505] mb-8">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="p-4 font-medium text-neutral-500 uppercase text-xs tracking-wider">Metric</th>
<th className="p-4 font-medium text-white">Doing It Yourself</th>
<th className="p-4 font-medium text-white">With Krishapex</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-neutral-400 font-light">
<tr>
<td className="p-4 text-neutral-500">Booked calls / mo</td>
<td className="p-4 text-white" id="tblDiyCalls">10</td>
<td className="p-4 text-white">76 (Locked)</td>
</tr>
<tr>
<td className="p-4 text-neutral-500">Show-up rate</td>
<td className="p-4 text-white" id="tblDiyShow">60%</td>
<td className="p-4 text-white">90% (Locked)</td>
</tr>
<tr>
<td className="p-4 text-neutral-500">Closing rate</td>
<td className="p-4 text-white" id="tblDiyClose">15%</td>
<td className="p-4 text-white">35% – 40%</td>
</tr>
<tr>
<td className="p-4 text-neutral-500">Time to target</td>
<td className="p-4 text-white font-medium" id="tblDiyTime">14.8 months</td>
<td className="p-4 text-white font-medium">0.5 – 0.6 months</td>
</tr>
</tbody>
</table>
</div>
<div className="hidden opacity-0 transition-opacity duration-500 text-center border-t border-white/5 pt-8" id="krishapexCta">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-neutral-200 w-full md:w-auto" data-page="contact" href="#">
<span className="mr-2">Book a strategy call</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-about">
<section className="min-h-[70vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Get To Know Krishapex Acquisition</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">Empowering Founders &amp; Businesses Through Innovation, Systems &amp; Execution</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">We've spent years perfecting the science of client acquisition. Here you'll learn who we help, what we do, our mission, and the story behind the system that's built predictable high-ticket revenue for our clients.</p>
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" href="#about-content">
<span className="mr-2">Let's Explore</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
<section className="py-24 border-t border-white/5" id="about-content">
<div className="max-w-4xl mx-auto px-6">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-3 text-center">Why We Exist</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8 text-center">Why We Exist</h2>
<div className="text-neutral-400 font-light text-base leading-relaxed space-y-6">
<p>It takes most founders years of painful trial and error to figure out how to consistently acquire clients. The frustration of chasing leads, depending on referrals that may or may not come, and grinding through outreach with nothing to show for it — that cycle is what Krishapex Acquisition was built to end.</p>
<p>We exist to close the gap between your skills and the number of clients you sign every month — permanently. Our mission is to help founders build businesses that grow rationally, predictably, and automatically.</p>
<ul className="list-disc pl-5 space-y-2 marker:text-neutral-600">
<li>A rock-solid business foundation that doesn't crack under pressure</li>
<li>An irresistible, scalable offer that ideal clients feel compelled to say yes to</li>
<li>An automated appointment booking engine that fills your calendar</li>
<li>A proven high-ticket sales framework that converts calls</li>
<li>The clarity, structure, and confidence to scale fast without burning out</li>
</ul>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
<div className="p-10 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-4">Our Vision</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">To Scale Multi-Figure Founders</h3>
<p className="text-neutral-400 font-light leading-relaxed">To help agency owners, coaches, consultants, and service providers scale to multi-six and seven figures using proven, automated, and systemised client acquisition processes — so their growth is never at the mercy of luck, referrals, or founder energy.</p>
</div>
<div className="p-10 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-4">Our Mission</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Predictable Acquisition</h3>
<p className="text-neutral-400 font-light leading-relaxed">To make client acquisition easy and predictable — where founders can acquire clients consistently without being personally involved in the process every single day. We remove you from the process while locking in results.</p>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-3">What We Stand For</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Our Core Values</h2>
<p className="text-neutral-400 font-light text-lg">These aren't words on a wall. These are the operating principles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:puzzle-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Product Centric</h4>
<p className="text-sm text-neutral-400 font-light">We build world-class systems that consistently deliver results and genuinely delight clients.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:gem-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Client Obsession</h4>
<p className="text-sm text-neutral-400 font-light">Everything starts and ends with client success. We don't win unless you win.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:star-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">High Standards</h4>
<p className="text-sm text-neutral-400 font-light">"Good" is not good enough. We operate at the level of excellence, or we don't operate at all.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Long-Term Thinking</h4>
<p className="text-sm text-neutral-400 font-light">We sacrifice short-term comfort for results that compound. Quick wins are a trap.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Speed of Execution</h4>
<p className="text-sm text-neutral-400 font-light">Move fast. Take decisive action. When the plan is clear, we execute without hesitation.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:target-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Laser Focus</h4>
<p className="text-sm text-neutral-400 font-light">Keep the main thing the main thing. We protect your focus and ours relentlessly.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:key-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Simplicity Wins</h4>
<p className="text-sm text-neutral-400 font-light">Complex systems don't scale. We build every layer for simplicity and clarity.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:fire-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">All or Nothing</h4>
<p className="text-sm text-neutral-400 font-light">Be fully committed. Krishapex operates with 100% commitment from both sides.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Radical Transparency</h4>
<p className="text-sm text-neutral-400 font-light">We say the truth, even when uncomfortable. No sugarcoating, just absolute clarity.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2">Ruthless Commitment</h4>
<p className="text-sm text-neutral-400 font-light">We do not stop until results show up. Period. Our commitment doesn't waver.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-dfy">
<section className="min-h-[70vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Done-For-You Client Acquisition</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">This Isn't Another Agency Service. It's Your Client Acquisition System.</h1>
<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">Built, Managed, and Operated by Us. You focus on vision. We handle acquisition, end to end.</p>
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" href="#dfy-process">
<span className="mr-2">See The Process</span>
<iconify-icon height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-[#050505]" id="dfy-process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-3">Our Three-Phase Execution Framework</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">How We Build Your Acquisition System</h2>
</div>
<div className="space-y-16 relative">
<div className="absolute left-[21px] top-4 bottom-4 w-px bg-white/10 hidden md:block"></div>

<div className="relative pl-0 md:pl-20">
<div className="absolute left-0 top-1 w-11 h-11 rounded-full border border-white/10 bg-[#050505] items-center justify-center hidden md:flex text-sm text-neutral-500">01</div>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">Auditing &amp; Establishing Foundations</h4>
<p className="text-sm text-neutral-500 italic mb-4">The foundation determines everything.</p>
<div className="text-neutral-400 font-light text-base space-y-4">
<p>Most businesses don't fail because their service is bad — they fail because their acquisition foundations are broken. Wrong offers. Unclear positioning.</p>
<p>We start by completely auditing your current operation and rebuilding it from the ground up — bulletproof.</p>
<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 mt-4">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Outcome</p>
<p className="text-white text-sm">Your business is structurally ready for serious, sustainable scale — before a single dollar is spent on growth.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Ready to Scale Without the Stress?</h2>
<p className="text-neutral-400 font-light mb-10 text-lg">If you're ready to delegate your client acquisition completely and focus on what truly matters, DFY is built for exactly where you are.</p>
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" data-page="contact" href="#">
<span className="mr-2">Book a Free Call</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-dwy">
<section className="min-h-[70vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Done-With-You Client Acquisition</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">It's Your Client Acquisition Engine — Built Alongside You.</h1>
<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">We don't just teach you what to do. We sit beside you, build it with you piece by piece, and transfer full mastery.</p>
<a className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" data-page="contact" href="#">
<span className="mr-2">Explore the Curriculum</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-diy">
<section className="min-h-[70vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Do-It-Yourself Client Acquisition</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">Build Your Own Client Acquisition System Using Our Proven Playbooks.</h1>
<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">Develop real, practical skills. Build genuine clarity about your niche, offer, and market.</p>
<a className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" data-page="contact" href="#">
<span className="mr-2">Get Started</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-who-we-serve">
<section className="min-h-[70vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Who We Serve</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">Not Every Business Is Built for High-Ticket Growth.</h1>
<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">If you're ready to scale smarter, faster, and without burning out — let's talk. We work exclusively with businesses ready for predictable infrastructure.</p>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<iconify-icon className="text-white mb-6" height="24" icon="solar:case-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white uppercase tracking-wide mb-3">Agencies</h4>
<p className="text-sm text-neutral-400 font-light">We Help Agencies Scale Faster with predictable client flow.</p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<iconify-icon className="text-white mb-6" height="24" icon="solar:microphone-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white uppercase tracking-wide mb-3">Coaches</h4>
<p className="text-sm text-neutral-400 font-light">We Help Coaches Build Authority without chasing trends.</p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<iconify-icon className="text-white mb-6" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white uppercase tracking-wide mb-3">Consultants</h4>
<p className="text-sm text-neutral-400 font-light">We Help Consultants Win Bigger Deals with structured systems.</p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]">
<iconify-icon className="text-white mb-6" height="24" icon="solar:shop-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white uppercase tracking-wide mb-3">Local Businesses</h4>
<p className="text-sm text-neutral-400 font-light">We Help Local Businesses Get Consistent Leads.</p>
</div>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-case-studies">
<section className="min-h-[60vh] flex flex-col justify-center items-center py-32 px-6">
<div className="text-center max-w-4xl mx-auto">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Proven Results</p>
<h1 className="leading-tight md:text-6xl text-4xl font-semibold text-white tracking-tight mb-8">Real Clients. Real Businesses. Real Numbers.</h1>
<p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">Every result here represents a founder who made a decision to stop relying on referrals, guesswork, and manual hustle.</p>
</div>
</section>
<section className="py-16 border-t border-white/5 bg-[#0a0a0a]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<h4 className="text-4xl md:text-5xl font-semibold text-white mb-2">1,750+</h4>
<p className="text-sm text-neutral-500 uppercase tracking-widest">Client Wins</p>
</div>
<div>
<h4 className="text-4xl md:text-5xl font-semibold text-white mb-2">97%</h4>
<p className="text-sm text-neutral-500 uppercase tracking-widest">Book in Week 1</p>
</div>
<div>
<h4 className="text-4xl md:text-5xl font-semibold text-white mb-2">$2M+</h4>
<p className="text-sm text-neutral-500 uppercase tracking-widest">Revenue Generated</p>
</div>
<div>
<h4 className="text-4xl md:text-5xl font-semibold text-white mb-2">0.6%</h4>
<p className="text-sm text-neutral-500 uppercase tracking-widest">Refund Rate</p>
</div>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-contact">
<section className="py-32 px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Get In Touch</p>
<h1 className="leading-tight md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Take the First Step Toward Scalable Client Acquisition</h1>
<p className="text-neutral-400 font-light text-lg">Every great system starts with one honest conversation. No pressure. No hard selling.</p>
</div>
<div className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 font-light" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 font-light" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 font-light" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">Tell us about your business</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 font-light" rows="4"></textarea>
</div>
<button className="w-full h-12 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Submit <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-xs text-center text-neutral-600 font-light">We typically respond within 24 hours. Your information is never shared.</p>
</form>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-faq">
<section className="py-32 px-6 max-w-3xl mx-auto">
<div className="text-center mb-16">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Have a question?</p>
<h1 className="leading-tight md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Everything You Want to Know</h1>
</div>
<div className="space-y-4">
<details className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        What makes Krishapex different?
                        <iconify-icon className="transition group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
                        We don't sell tactics or motivation. We install client-acquisition infrastructure built to scale — outbound, inbound, sales, and paid ads.
                    </div>
</details>
<details className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-6 text-white font-medium">
                        Who is this built for?
                        <iconify-icon className="transition group-open:rotate-180 text-neutral-500" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light text-sm leading-relaxed">
                        Founders, agency owners, consultants, and coaches who want predictable high-ticket clients, not short-term hacks.
                    </div>
</details>
</div>
</section>
</main>

<main className="page-view relative z-10 w-full" id="page-careers">
<section className="py-32 px-6 max-w-4xl mx-auto text-center">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase mb-6">Join The Team</p>
<h1 className="leading-tight md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Build Your Career at Krishapex</h1>
<p className="text-neutral-400 font-light text-lg mb-10">We believe great careers are built through dedication, consistency, and real-world execution.</p>
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-neutral-200" href="mailto:krishapexacquisition@gmail.com">
                Apply Now <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</section>
</main>

<main className="page-view relative z-10 w-full min-h-[60vh] py-32 px-6 max-w-3xl mx-auto" id="page-privacy">
<h1 className="text-3xl font-semibold text-white mb-8">Privacy Policy — Krishapex Acquisition</h1>
<div className="text-neutral-400 font-light space-y-6 text-sm">
<p>Effective Date: 2026</p>
<p>We are committed to protecting your privacy. This policy outlines how we collect, use, and handle your information across our digital platforms.</p>
</div>
</main>
<main className="page-view relative z-10 w-full min-h-[60vh] py-32 px-6 max-w-3xl mx-auto" id="page-terms">
<h1 className="text-3xl font-semibold text-white mb-8">Terms of Use — Krishapex Acquisition</h1>
<div className="text-neutral-400 font-light space-y-6 text-sm">
<p>By accessing or using Krishapex Acquisition services, you agree to be bound by these Terms of Service. You must be 18+ to utilize our programs.</p>
</div>
</main>
<main className="page-view relative z-10 w-full min-h-[60vh] py-32 px-6 max-w-3xl mx-auto" id="page-refund">
<h1 className="text-3xl font-semibold text-white mb-8">Refund Policy — Krishapex Acquisition</h1>
<div className="text-neutral-400 font-light space-y-6 text-sm">
<p>Refund eligibility is governed by the service agreement executed at the time of onboarding and requires full compliance with agreed execution tasks.</p>
</div>
</main>

<footer className="border-t-[6px] border-white/5 overflow-hidden z-20 pt-24 pb-8 relative bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center justify-center mb-16">
<h2 className="md:text-6xl lg:text-7xl uppercase leading-[1.05] text-4xl font-semibold text-slate-200 tracking-tight text-center max-w-3xl" style={{maskImage: 'linear-gradient(210deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 0%, black 70%, transparent)'}}>Client Acquisition,<br/> Built to scale</h2>
</div>
<div className="flex gap-6 mb-24 items-center justify-center">
<a className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-colors" href="#"><iconify-icon height="24" icon="mdi:instagram" width="24"></iconify-icon></a>
<a className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-colors" href="#"><iconify-icon height="24" icon="mdi:youtube" width="24"></iconify-icon></a>
<a className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-colors" href="#"><iconify-icon height="24" icon="mdi:linkedin" width="24"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto mb-20 text-center md:text-left">
<div>
<h3 className="uppercase text-sm font-semibold text-slate-50 tracking-wider mb-6">Company</h3>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="about" href="#">Who We are</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="who-we-serve" href="#">Who We Serve</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="careers" href="#">Careers</a></li>
</ul>
</div>
<div className="md:border-l md:border-white/10 md:pl-10">
<h3 className="uppercase text-sm font-semibold text-slate-50 tracking-wider mb-6">Our Services</h3>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="dwy" href="#">DWY Service</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="dfy" href="#">DFY Service</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="diy" href="#">DIY Service</a></li>
</ul>
</div>
<div className="md:border-l md:border-white/10 md:pl-10">
<h3 className="uppercase text-sm font-semibold text-slate-50 tracking-wider mb-6">Quick Links</h3>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="case-studies" href="#">Testimonials</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="faq" href="#">FAQ</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors text-sm font-light" data-page="contact" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<p className="text-neutral-500 text-xs font-light">Copyright © 2026 Krishapex Acquisition - All Rights Reserved</p>
<div className="flex gap-6">
<a className="text-neutral-500 text-xs hover:text-white transition-colors font-light" data-page="privacy" href="#">Privacy Policy</a>
<a className="text-neutral-500 text-xs hover:text-white transition-colors font-light" data-page="terms" href="#">Terms of Service</a>
<a className="text-neutral-500 text-xs hover:text-white transition-colors font-light" data-page="refund" href="#">Refund Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
