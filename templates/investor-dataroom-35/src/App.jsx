import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const btn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-drawer-bg');
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen;
            if(isOpen) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        btn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        
        // Close on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth < 1024) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-14 flex items-center justify-between px-4 lg:px-8">
<div className="flex items-center gap-3">
<button className="lg:hidden text-slate-500 hover:text-slate-900 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center text-white text-[10px] font-semibold tracking-tight">Q</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">KARNAK Investor Dataroom</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-xs text-slate-500 font-medium">
<span className="hidden lg:inline">Last Updated: <span className="text-slate-900">Feb 13, 2026</span></span>
<span className="hidden lg:inline">Version: <span className="text-slate-900">Pre-A Fundraise</span></span>
<div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="font-semibold text-emerald-700 text-[10px] uppercase tracking-wide">Actively Fundraising</span>
</div>
<a className="ml-2 px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm" href="#">Schedule Demo</a>
</div>
</header>

<div className="fixed inset-0 bg-slate-900/20 z-40 hidden backdrop-blur-sm lg:hidden transition-opacity" id="mobile-drawer-bg"></div>
<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen max-w-[1440px] mx-auto pt-14">

<aside className="fixed lg:sticky h-[calc(100vh-3.5rem)] overflow-y-auto no-scrollbar hidden lg:block z-50 transform transition-transform duration-300 -translate-x-full lg:translate-x-0 bg-slate-50 w-[260px] border-slate-200 border-r pt-6 pb-6 top-14 left-0" id="sidebar">
<nav className="px-4 space-y-0.5">
<p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-3 pr-3 pl-3">Contents</p>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-100 border-r-2 border-indigo-600 rounded-l-md rounded-r-none transition-colors" href="#abstract">1. Overview</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#karnak-overview">2. KARNAK Overview</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#karnak-benefits">3. KARNAK Benefits</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#karnak-mvp">4. MVP Traction</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#why-karnak-wins">5. Why KARNAK Wins</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#ecosystem-traction">6. Ecosystem Traction</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#powering-karnak">7. Ecosystem Advantage</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#competitive-analysis">8. Competitive Analysis</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#financials">9. Financials</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#target-user">10. Target User Profile</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#team">11. Team</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#investor-faq">12. Investor FAQ</a>
<a className="block px-3 py-1.5 text-xs font-medium text-slate-600 border-r-2 border-transparent hover:text-slate-900 hover:bg-slate-100 rounded-l-md transition-colors" href="#the-ask">13. The Ask</a>
</nav>
</aside>

<main className="min-h-screen lg:px-16 lg:py-16 bg-white border-slate-100 border-l pt-12 pr-6 pb-12 pl-6">
<div className="max-w-4xl mr-auto ml-auto space-y-24">

<section className="scroll-mt-24" id="abstract">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 01</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">Overview</h2>
<div className="inline-flex items-center gap-2 bg-indigo-50/50 border border-indigo-100 rounded-lg mb-8 px-3 py-2">
<iconify-icon className="text-indigo-600" icon="solar:lock-password-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-semibold text-indigo-700">Confidential. For qualified investors only.</span>
</div>
<p className="leading-relaxed text-lg font-medium text-slate-800 mb-6 tracking-tight">KARNAK is a venture-backed spin-out from Quantum Temple, the regenerative travel platform that has spent 5+ years building government partnerships and cultural access infrastructure across 100+ countries. While Quantum Temple operates the B2B/B2G ecosystem ($5.67M FY25), KARNAK is the B2C agentic AI concierge that monetizes this infrastructure for ultra-high-net-worth individuals ($4.1M FY25 ARR). We validated the hard way. Now we're scaling the smart way.</p>
<div className="prose prose-slate prose-sm max-w-none text-slate-600">
<p className="leading-relaxed">We didn't start with AI because we could. We started with humans because we had to prove the model worked.<br/><br/> Travel exploded to $13.3T with 28.7% AI adoption. Yet, ultra-high net worth travellers still wait 24-48hours across 5-8 platforms for requests, as the $1.7B luxury concierge market remains locked in manual processes. We proved the demand for luxury concierge manually. $5.74M revenue. Purely human operations. Zero technology.<br/><br/>Every booking taught us what converts vs. what's theater. Every government clearance taught us approval mechanics. Every $171K customer validated pricing power at the highest tier. <br/><br/>We deliberately ran human-led processes to deeply understand operational mechanics across different booking scales: FITs, group bookings, large buyouts, impossible experiences. These are the same coordination problem at different scales, all sharing the same backend infrastructure and partnership requirements.<br/><br/>The result: proprietary operational insight into what converts, where friction exists, and how workflows actually function at the highest end of the market. Now we're building agentic AI on top of proven unit economics and real process knowledge.</p>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-overview">
<span className="text-[10px] uppercase block font-bold text-slate-400 tracking-wider mb-2">Section 02</span>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">KARNAK Overview</h2>
<div className="mb-10">
<p className="leading-relaxed text-base text-slate-600 mb-10">KARNAK is building the intelligent luxury concierge that remembers every preference, handles every request, delivers instantly. One voice. Complete orchestration. The operating system for how power moves through the world. What takes other concierges 3 hours, KARNAK does in 3 minutes. What others can't access, KARNAK delivers instantly, because we built the ecosystem first. (Quantum Temple) Think Superhuman for travel meets Amex Centurion, powered by agentic AI and backed by 5+ years of institutional and governmental relationships through Quantum Temple that money alone cannot buy. By combining agentic AI with deep institutional relationships, KARNAK removes the friction of coordination while unlocking access that money alone cannot buy.</p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
<span className="inline-flex items-center w-max rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Why Now</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">The Timing Argument: Three Converging Forces</h3>
</div>
<div className="space-y-8">

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Agentic AI Maturity</h4>
<p className="text-xs leading-relaxed text-slate-600">Before 2024, this would have required massive concierge teams. Now, agentic AI handles 85% of orchestration autonomously. The $47B agentic AI market is growing 40-44% CAGR. 78% of VC capital is shifting to vertical AI applications.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon icon="solar:hourglass-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Legacy Travel &amp; Concierge Not Innovating</h4>
<p className="text-xs leading-relaxed text-slate-600">Expedia’s core platform is 20+ years old. Amex Centurion still operates on 24-48hr response times. The gap between UHNW expectations and available solutions is widening. AI innovation in the space: $13.38T AI in travel market by 2030 (28.7% CAGR). $3.8B luxury concierge service market by 2030 (CAGR 10%).</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Not Starting from Scratch</h4>
<p className="text-xs leading-relaxed text-slate-600">Karnak is the direct result of 4 years running Quantum Temple on-the-ground partnerships with 100+ governments, $5.7M in annual tourism revenue, 25K+ travelers. We ran concierge manually for a year, saw the demand, and built the AI layer on top. This is user-pull, not founder speculation.</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Exclusive Access</h3>
<p className="leading-relaxed text-xs text-slate-500">Gated access to un-Googleable experiences curated by local experts.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">AI Orchestration</h3>
<p className="text-xs text-slate-500 leading-relaxed">Autonomous agents handle logistics, reducing human overhead by 85%.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Privacy First</h3>
<p className="text-xs text-slate-500 leading-relaxed">Zero-knowledge data architecture ensuring your preferences stay private.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:globus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Global Reach</h3>
<p className="text-xs text-slate-500 leading-relaxed">Direct partnerships with 100+ governments and ministries worldwide.</p>
</div>
</div>
<div className="mt-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
<img alt="KARNAK Experience" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-benefits">

<div className="max-w-3xl mb-10">
<span className="text-[10px] uppercase block font-bold text-slate-400 tracking-wider mb-2">Section 03</span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why KARNAK Wins: Five Defensible Advantages Competitors Cannot Replicate</h2>
<p className="text-sm text-slate-600 leading-relaxed border-l-2 border-indigo-500 pl-4">
            Built on <span className="font-semibold text-slate-900">$5.74M in validated transactions</span>, 18 months of operational learning, and government partnerships that take 12-18 months to establish.
        </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-2">One Voice Note, Complete Trip</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">
                Say where you want to go. Done. Flights, hotels, restaurants, ground transport, cultural experiences—all booked in 30 seconds. AI handles the speed. Humans handle what's impossible.
            </p>
<div className="border-t border-slate-200/80 pt-4 space-y-2">
<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1">Investor Value</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> via hybrid AI</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> without linear headcount</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">30s response vs 24-48h legacy</span>
</div>
</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:key-minimalistic-square-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-2">Access Beyond Loyalty Programs</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">
                Private Vatican Museums before public hours. Pyramid sunrise ceremonies inside King's Chamber. Orient Express buyouts. Tables at impossible restaurants. No points. No status. Just access.
            </p>
<div className="border-t border-slate-200/80 pt-4 space-y-2">
<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1">Investor Value</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:shield-check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> (Govt partnerships)</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> (Direct rates)</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">Cannot be fast-tracked by competitors</span>
</div>
</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-2">Hyper-Personalization via Obsidian</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">
                Remembers your preferences. Learns your style. Anticipates what you want before you ask. Aisle seat, early check-in, no shellfish. Every trip gets smarter, more personal, more you.
            </p>
<div className="border-t border-slate-200/80 pt-4 space-y-2">
<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1">Investor Value</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:database" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">Built on </span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">High switching costs for users</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">"Cold-start" barrier for new entrants</span>
</div>
</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-2">Your Data, Your Control</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-5 flex-1">
                Privacy-first from day one. Your preferences stay yours. We use data to serve you better—never to sell you out. Blockchain-based encryption. End-to-end security. Zero questions asked.
            </p>
<div className="border-t border-slate-200/80 pt-4 space-y-2">
<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1">Investor Value</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="lucide:lock" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> privacy architecture</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">Essential for UHNW &amp; Family Offices</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">Trust foundation for high-value clients</span>
</div>
</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-2">Complete Lifestyle Execution</h3>
<p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Travel. Dining. Wellness. Cultural access. Ground logistics. All orchestrated through one voice interface. No platform fragmentation. No app-switching. Complete lifestyle command infrastructure.
                    </p>
</div>
<div className="md:w-[260px] md:border-l md:border-slate-200 md:pl-6 flex flex-col justify-center">
<div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-3">Investor Value</div>
<div className="space-y-2">
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:trending-up" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> beyond travel spend</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight"> via multi-domain usage</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-slate-600 font-medium leading-tight">Higher ARPU from lifestyle cross-sell</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mb-12">
<div className="text-center mb-6">
<h3 className="text-lg font-semibold text-slate-900">See KARNAK in Action</h3>
<p className="text-xs text-slate-500 mt-1">Voice-first lifestyle orchestration for centimillionaires</p>
</div>
<div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group cursor-pointer">

<img alt="KARNAK Platform Demo" className="group-hover:opacity-40 transition-opacity duration-500 opacity-60 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b66e2854-bdce-40bd-846d-8ad2813beaf5_1600w.png"/>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
<iconify-icon className="text-white ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-end justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-[10px] font-bold text-indigo-100 uppercase tracking-wide">Platform Demo</span>
</div>
<h4 className="text-white font-medium text-sm md:text-base">Real-time Voice Orchestration</h4>
</div>
<div className="text-white/60 text-xs font-mono">01:42</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto">
<div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-lg relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>
<div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 relative z-10">
<div className="p-6 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-[#C4A574] transition-colors">$5.74M</div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-300">Validated Transactions</div>
</div>
<div className="p-6 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-[#C4A574] transition-colors">18 Months</div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-300">Operational Learning</div>
</div>
<div className="p-6 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-[#C4A574] transition-colors">1,800+</div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-300">Direct Partnerships</div>
</div>
<div className="p-6 text-center group hover:bg-white/5 transition-colors">
<div className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 group-hover:text-[#C4A574] transition-colors">12-15%</div>
<div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-300">Commission Rate</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-mvp">
<span className="block">
<span className="text-[10px] uppercase block font-bold text-slate-400 tracking-wider mb-2">Section 04</span>
<span className="block text-2xl font-semibold text-slate-900 tracking-tight mb-6">MVP Traction</span>
</span>
<div className="bg-slate-900 rounded-xl overflow-hidden relative border border-slate-800">

<div className="p-6 md:p-8 relative z-10">

<div className="mb-8 border-b border-white/10 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-white mb-3">KARNAK MVP</h2>
<p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                                    Q4 marked the transition from concept to MVP-ready platform. We integrated global inventory APIs and established direct commercial relationships with 100+ Tier-1 hospitality brands.
                                </p>
</div>
<div className="grid md:grid-cols-[1fr_260px] gap-8">

<div className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-semibold">Virtuoso API</div>
<div className="text-lg font-semibold text-white tracking-tight">1,800+</div>
<div className="text-xs text-slate-400 mt-1">Luxury Hotels</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-semibold">Duffle API</div>
<div className="text-lg font-semibold text-white tracking-tight">380+</div>
<div className="text-xs text-slate-400 mt-1">Global Airlines</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-white" icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<h3 className="text-sm font-medium text-white">Preferred Partnerships</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/5">Orient Express</span>
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/5">Clinique La Prairie</span>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-2">Access to the world's most exclusive properties</h4>
<p className="text-xs text-slate-400 leading-relaxed">Direct partnerships with 100+ Tier-1 hospitality brands give you privileged access, preferential rates, and experiences you won't find anywhere else.</p>
</div>
</div>

<div className="bg-gradient-to-b from-indigo-900/50 to-slate-900 rounded-xl border border-indigo-500/30 p-6 flex flex-col justify-center items-center text-center">
<div className="text-[10px] uppercase tracking-widest text-indigo-300 font-semibold mb-2">Pre-Launch Revenue</div>
<div className="text-4xl font-bold text-white tracking-tight mb-1">$1M+</div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 mt-2">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-emerald-400">IN 5 MONTHS</span>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="why-karnak-wins">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 05</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Why KARNAK Wins</h2>
<div className="text-white bg-slate-900 rounded-lg mb-8 p-6">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight mb-2">The Quantum Temple Advantage</h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">Most luxury concierges have vendor relationships. KARNAK has government partnerships. We spent 5 years building the rails that route $5.7M annually through closed-door cultural experiences and ministerial clearances. </p>
<div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-200">
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Vatican Dinners</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Pyramid Sunrise Access</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> 1,800+ Properties</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Ministerial Level Buyouts</div>
</div>
</div>
<div className="md:w-[200px] w-full bg-white/10 border border-white/10 rounded p-4 backdrop-blur-sm">
<div className="text-[10px] uppercase tracking-wide text-slate-400 mb-1">Replication Time</div>
<div className="text-2xl font-semibold text-white tracking-tight">18 Months+</div>
<p className="text-[10px] text-slate-400 mt-2 leading-snug">Time required for competitors to build equivalent government trust.</p>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Three Pillars of Impossible Service</h3>
<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Institutional Access</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">Reservations requiring government clearance. Vatican dinners, Orient Express buyouts, UNESCO site access.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">Not available to Amex Centurion</div>
</div>

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Agentic AI That Learns</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">One voice note → complete trip orchestration in 30 seconds. Flights, hotels, and dining, paid and synced instantly.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">Reduces human overhead by 85%</div>
</div>

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:hand-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Regenerative Impact</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">$2.5M+ distributed on-chain. When you book, local artisans and cultural guardians get paid fairly.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">5,336+ Jobs Created</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="ecosystem-traction">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 06</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">FY25 Ecosystem Traction</h2>
<p className="text-sm text-slate-600 mb-6">While competitors figure out hotel APIs, KARNAK launches with validated ecosystem revenue and 25,000+ travelers.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">$5.74M</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">FY25 Revenue</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-emerald-600 tracking-tight">642%</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">YoY Growth</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">$601k</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Dec '25 Monthly Rev</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">&gt;$1M</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Pre-launch Bookings</div>
</div>
</div>
<div className="space-y-6">

<div className="border border-slate-200 rounded-lg p-4 bg-white">
<div className="flex gap-3 mb-2 items-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wide">Proof Point</span>
<h4 className="text-sm font-semibold text-slate-900">Mirai Bajo Activation</h4>
</div>
<div className="text-xs text-slate-600 mb-4">
<p className="leading-relaxed mb-5">135 participants, ~$600K revenue. Largest regenerative activation validating the destination engine model. Partnership with Ministry of Creative Economy of Indonesia. x Marriott T'AAKANA x Studio Mirai x Wonderful Indonesia.</p>
<div className="grid grid-cols-2 gap-y-4 gap-x-3 border-t border-slate-100 pt-4">
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">+1,000</span>
<span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-tight">Job Creation</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">150</span>
<span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-tight">Global Leaders</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">93.6%</span>
<span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-tight">Local Procurement</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">150</span>
<span className="text-[10px] text-slate-500 font-bold uppercase tracking-wide leading-tight">Cultural Practitioners</span>
</div>
<div className="col-span-2 mt-2">
<div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 flex items-center justify-between group hover:border-emerald-200 transition-colors">
<div>
<div className="text-xl font-semibold text-emerald-700 tracking-tight mb-0.5">71.6</div>
<div className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">Regenerative Impact Index</div>
</div>
<div className="h-8 w-8 rounded-full bg-emerald-100/60 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="col-span-2 mt-1">
<a className="flex items-center gap-2 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group p-1.5 -ml-1.5 rounded-md hover:bg-indigo-50/50 w-max" href="https://getkarnak.com/report-miraibajo" target="_blank">
<span className="">Read Mirai Bajo Impact Report</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
<a className="block group relative w-full aspect-video rounded-md overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer no-underline" href="#">
<img alt="Activation Video" className="group-hover:opacity-60 transition-opacity duration-300 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83bf0bf4-60ec-4677-9a74-0aee013710ef_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white p-1.5 rounded-md shadow-sm z-10 border border-white/10">
<iconify-icon className="text-red-500" icon="solar:videocamera-record-bold" width="14"></iconify-icon>
</div>
<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex transform group-hover:scale-110 transition-all duration-300 bg-white/95 w-10 h-10 rounded-full shadow-lg backdrop-blur items-center justify-center">
<iconify-icon className="text-slate-900 ml-0.5" icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-white/90">Event Highlight</span>
<span className="text-xs font-semibold text-white tracking-tight">Official Recap Video</span>
</div>
</div>
</a>
</div>

<div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
<div className="flex gap-3 mb-2 items-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wide">Proof Point</span>
<h4 className="text-sm font-semibold text-slate-900">Token2049 Dubai</h4>
</div>
<p className="text-xs text-slate-600 mb-4">Held a cultural expedition during Token2049 Dubai for the web3 community, in partnership with SUI ecosystem and Studio Mirai.</p>
<a className="block group aspect-video overflow-hidden cursor-pointer no-underline bg-slate-900 w-full border border-slate-200 rounded-md relative" href="https://x.com/quantum_temple/status/1917815395743941083?s=20" target="_blank">
<img alt="Activation Video" className="group-hover:opacity-60 transition-opacity duration-300 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2520ee4f-211f-4d59-b586-58ec31d379c5_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white p-1.5 rounded-md shadow-sm z-10 border border-white/10">
<iconify-icon className="text-red-500" icon="solar:videocamera-record-bold" width="14"></iconify-icon>
</div>
<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex transform group-hover:scale-110 transition-all duration-300 bg-white/95 w-10 h-10 rounded-full shadow-lg backdrop-blur items-center justify-center">
<iconify-icon className="text-slate-900 ml-0.5" icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-white/90">Event Highlight</span>
<span className="text-xs font-semibold text-white tracking-tight">Official Recap Video</span>
</div>
</div>
</a>
</div>
</div>

<div className="mt-8 md:p-8 bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">

<div className="mb-8 border-b border-slate-100 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Partnerships</h2>
<p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                                KARNAK's partnerships demonstrate both operational depth and infrastructure quality across luxury hospitality and government sectors.
                            </p>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="space-y-8">
<div className="">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:file-text-linear" width="14"></iconify-icon>
                                        Formal Partnerships &amp; Contracts
                                    </h4>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
<span>Formal contract with preferred rates for exclusive destinations and experiences</span>
</li>
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
<span className="">Memorandum of Understanding (in place, renewal pending)</span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:bank-linear" width="14"></iconify-icon>
                                        Government &amp; Ministry Relations
                                    </h4>
<p className="leading-relaxed text-sm text-slate-600">
                                        We maintain formal relations with tourism and government entities, with our Indonesian Ministry of Tourism &amp; Creative Economy partnership serving as proof of concept for sustainable cultural tourism collaboration.
                                    </p>
</div>
</div>

<div className="flex flex-col">
<div className="mb-8">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:buildings-2-linear" width="14"></iconify-icon>
                                        Operational Hotel Partnerships
                                    </h4>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Our major hotel brand partnerships are demonstrated through our Obsidian partners directory, which shows real, operational relationships with properties across the globe.
                                    </p>
<p className="leading-relaxed text-sm text-slate-600">
                                        Rather than letters of intent, our data infrastructure proves partnership maturity by displaying direct property integrations, live availability, preferential rates for KARNAK members, and our proprietary data architecture managing 100+ hotel partners. This approach demonstrates both partnership depth and our data moat—potential investors can see the infrastructure in action.
                                    </p>
</div>

<div className="mt-auto">
<a className="group flex items-center justify-between hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-200 no-underline bg-white w-full border border-slate-200 rounded-lg p-3.5" href="https://obsidian.karnak.co/partners/" target="_blank">
<div className="flex items-center gap-3.5">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 group-hover:scale-105 transition-transform duration-200">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div>
<div className="group-hover:text-emerald-700 transition-colors text-sm font-semibold text-slate-900">Partnership MOUs</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">Live Partner Data</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
</div>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 border border-transparent group-hover:border-emerald-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="powering-karnak">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 07</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Ecosystem Advantage</h2>
<div className="space-y-8 mb-12">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">01</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Corporate Expeditions (Enterprise Validation)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">Immersive, invite-only cultural retreats for the world's most discerning organizations. Every corporate client becomes a qualified lead pool for KARNAK members.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="12"></iconify-icon> Validates institutional coordination at scale</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear" width="12"></iconify-icon> Partners: Studio Mirai, Ta'aktana, Ritz-Carlton</li>
</ul>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">02</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Hospitality Intelligence (Pricing Power)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">Direct hotel relationships, real-time availability, negotiated rates—organized in our Obsidian intelligence system trained on $5.74M in live transactions and 18 months of human-executed luxury bookings.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">1,800+ Virtuoso properties &amp; 380+ global airlines</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">12-15% commissions (vs 7% OTA standard)</li>
</ul>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">03</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Hospitality Partnerships (Pricing Advantage)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">KARNAK operates as the consumer layer of Quantum Temple—a blockchain regenerative travel ecosystem with proven government partnerships, UNESCO connections, and ministerial access requiring 12-18 month lead times.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">On-chain impact tracking and verified cultural access</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">Indonesia Tourism Ministry partnership,, UNESCO heritage sites privileged access</li>
</ul>
</div>
</div>
</div>

<div className="mb-12">
<div className="mb-6">
<div className="space-y-8">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">The Data Moat: Obsidian Intelligence System</h3>
<div className="space-y-8">
<p className="leading-relaxed text-sm text-slate-600 max-w-4xl">Obsidian is KARNAK's proprietary data intelligence platform — a centralized system that transforms fragmented luxury travel data into actionable intelligence. It functions as the operational brain behind KARNAK's AI concierge, storing, learning from, and activating insights across every client interaction, partnership, and booking. With Obsidian, every interaction feeds the intelligence engine. A client who books a Four Seasons property with ocean views automatically gets future recommendations optimized for these patterns  without ever asking again.</p>

<div className="space-y-5">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Architecture: Three Layers</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-indigo-200 hover:shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-slate-50 rounded-md text-slate-900 border border-slate-100">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Confidential Vault</div>
<div className="text-[10px] text-indigo-600 font-medium">Privacy Layer</div>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 leading-relaxed border-b border-slate-100 pb-3">
                        Encrypted storage of user preferences, travel history, and behavioral patterns.
                    </p>
<ul className="space-y-2.5">
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span className=""> Blockchain-based privacy ensures users own their data.</span>
</li>
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span> Protected at rest and transit.</span>
</li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-indigo-200 hover:shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-slate-50 rounded-md text-slate-900 border border-slate-100">
<iconify-icon className="" icon="lucide:brain" width="16"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">Intelligence Engine</div>
<div className="text-[10px] text-indigo-600 font-medium">Learning Layer</div>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 leading-relaxed border-b border-slate-100 pb-3">
                        Contextual AI that learns preferences across trips and compounds value over time.
                    </p>
<ul className="space-y-2.5">
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span className=""> Remembers ground-floor, dietary, seat choices.</span>
</li>
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span className=""> Anticipates needs before articulation.</span>
</li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-indigo-200 hover:shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-slate-50 rounded-md text-slate-900 border border-slate-100">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Curated Inventory</div>
<div className="text-[10px] text-indigo-600 font-medium">Access Layer</div>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 leading-relaxed border-b border-slate-100 pb-3">
                        Proprietary database of partnerships, exclusive access, and institutional relationships.
                    </p>
<ul className="space-y-2.5">
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span> Terms, SLAs, and exclusive benefits tracking.</span>
</li>
<li className="flex gap-2 items-start text-xs text-slate-600">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
<span> MOUs and clearance workflows.</span>
</li>
</ul>
</div>
</div>
</div>

<div className="space-y-5">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Strategic Benefits</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
<div className="space-y-3">
<div className="flex gap-2 text-sm font-semibold text-slate-900 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-indigo-600" icon="lucide:settings-2" width="16"></iconify-icon>
                        For Operations
                    </div>
<ul className="space-y-2 border-l border-slate-200 pl-4 text-xs text-slate-600">
<li className=""> Single platform for all data.</li>
<li className=""> Reduces manual lookups.</li>
</ul>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-indigo-600" icon="lucide:user" width="16"></iconify-icon>
                        For Clients
                    </div>
<ul className="text-xs text-slate-600 border-slate-200 border-l pl-4 space-y-2">
<li className=""> No repeating preferences.</li>
<li className=""> AI-driven suggestions.</li>
</ul>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
<iconify-icon className="text-indigo-600" icon="lucide:shield" width="16"></iconify-icon>
                        For Competitive Moat
                    </div>
<ul className="space-y-2 border-l border-slate-200 pl-4 text-xs text-slate-600">
<li> 4+ years of data accumulation.</li>
<li> "Cold-start" barrier for entrants.</li>
</ul>
</div>
</div>
</div>

</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
<div className="text-sm text-slate-600 space-y-4 mb-8">
<p className="font-semibold text-slate-900">Anyone can build a booking app. What's defensible is the knowledge infrastructure:</p>
<ul className="list-disc pl-5 space-y-2 marker:text-slate-300">
<li className="">Proprietary database of "impossible" providers (fixers, government liaisons, private access holders) that aren't on any API.</li>
<li className="">Structured data on clearance protocols for restricted sites (what paperwork, which ministry, what lead time).</li>
</ul>
</div>

<div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden relative shadow-lg">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0 pointer-events-none"></div>
<div className="relative z-10 p-6 space-y-8">

<div className="text-center max-w-2xl mx-auto mb-2">
<h4 className="text-white font-semibold text-base md:text-lg tracking-tight mb-2">Data is our next play</h4>
<p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto">We guide high-value travelers through personalized trips—capturing behavior, preferences, and spending across B2C, B2B, and B2G.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-3">
<div className="bg-slate-800/40 border border-white/5 rounded-lg p-3 text-center hover:bg-slate-800/60 transition-colors">
<div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1">User Behavior</div>
<div className="text-xs text-slate-300 leading-tight">Bookings &amp; preferences</div>
</div>
<div className="bg-slate-800/40 border border-white/5 rounded-lg p-3 text-center hover:bg-slate-800/60 transition-colors">
<div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1">AI-Assisted</div>
<div className="text-xs text-slate-300 leading-tight">Real-time analysis</div>
</div>
<div className="bg-slate-800/40 border border-white/5 rounded-lg p-3 text-center hover:bg-slate-800/60 transition-colors">
<div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1">Stakeholder</div>
<div className="text-xs text-slate-300 leading-tight">B2B &amp; B2G data</div>
</div>
<div className="bg-slate-800/40 border border-white/5 rounded-lg p-3 text-center hover:bg-slate-800/60 transition-colors">
<div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1">Global Sources</div>
<div className="text-xs text-slate-300 leading-tight">200+ premium feeds</div>
</div>
<div className="col-span-2 md:col-span-1 bg-slate-800/40 border border-white/5 rounded-lg p-3 text-center hover:bg-slate-800/60 transition-colors">
<div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1">Human Concierge</div>
<div className="text-xs text-slate-300 leading-tight">Worldwide network</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 items-stretch relative">

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-900 rounded-full p-1.5 border border-slate-700 text-slate-500 shadow-xl">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-6 text-center relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-xl pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-white font-medium mb-3 text-sm md:text-base">Karnak Confidential Vault</h3>
<p className="text-xs text-indigo-200/60 mb-6 leading-relaxed px-2">Encrypted storage for intent-rich, high-value traveler datasets across all channels</p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold text-indigo-300 uppercase tracking-wide">5+ Years Data</span>
<span className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-semibold text-indigo-300 uppercase tracking-wide">E2E Encrypted</span>
</div>
</div>
</div>

<div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-6 text-center relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-xl pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-white font-medium mb-3 text-sm md:text-base">Karnak Intelligence Engine</h3>
<p className="text-xs text-emerald-200/60 mb-6 leading-relaxed px-2">Contextual AI delivering personalized recommendations, predictive insights, and monetizable intelligence</p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-300 uppercase tracking-wide">Multi-model Stack</span>
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-300 uppercase tracking-wide">Adaptive</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="bg-slate-800/30 border border-white/5 rounded-lg p-3 text-center">
<div className="text-white text-xs font-semibold mb-0.5">Personalized Recs</div>
<div className="text-[10px] text-slate-500">Tailored for each traveler</div>
</div>
<div className="bg-slate-800/30 border border-white/5 rounded-lg p-3 text-center">
<div className="text-white text-xs font-semibold mb-0.5">Predictive Insights</div>
<div className="text-[10px] text-slate-500">Anticipate traveler needs</div>
</div>
<div className="bg-slate-800/30 border border-white/5 rounded-lg p-3 text-center">
<div className="text-white text-xs font-semibold mb-0.5">Market Intelligence</div>
<div className="text-[10px] text-slate-500">B2B &amp; B2G reports</div>
</div>
<div className="bg-slate-800/30 border border-white/5 rounded-lg p-3 text-center">
<div className="text-white text-xs font-semibold mb-0.5">API Access</div>
<div className="text-[10px] text-slate-500">Enterprise integrations</div>
</div>
</div>

<div className="flex justify-center pt-2">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 font-medium tracking-wide">
<svg className="lucide lucide-refresh-cw animate-[spin_10s_linear_infinite]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<span className="">CONTINUOUS LEARNING LOOP</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="">
<hr className="border-t border-slate-100 mb-24"/>

<section className="scroll-mt-24 mb-12" id="competitive-analysis">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 08</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Competitive Analysis</h2>
<p className="text-lg font-medium text-slate-800 mb-2 leading-tight tracking-tight">The First Agentic × Human Hybrid OS That Orchestrates Complete Lifestyle Execution</p>
<p className="text-sm text-slate-500 mb-10">Pre-launch positioning against legacy concierge, OTAs, and AI travel assistants.</p>

<div className="mb-12">
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:chart-2-linear" width="14"></iconify-icon>
                Market Landscape Overview
            </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">KARNAK operates at the convergence of three distinct markets, uniquely positioned as the only player combining agentic AI execution with luxury institutional access:</p>
<div className="grid md:grid-cols-3 gap-4 mb-8">
<div className="bg-slate-50 border border-slate-200 p-5 rounded-lg hover:border-slate-300 transition-colors">
<div className="flex items-baseline gap-2 mb-2">
<div className="text-indigo-600 font-bold text-2xl tracking-tight">$3.8B</div>
<div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">10% CAGR</div>
</div>
<div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Luxury Concierge</div>
<p className="text-xs text-slate-500 leading-relaxed">High margins, manual processes, zero AI innovation.</p>
</div>
<div className="bg-slate-50 border border-slate-200 p-5 rounded-lg hover:border-slate-300 transition-colors">
<div className="flex items-baseline gap-2 mb-2">
<div className="text-indigo-600 font-bold text-2xl tracking-tight">$4.7B</div>
<div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">44% CAGR</div>
</div>
<div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Agentic AI</div>
<p className="text-xs text-slate-500 leading-relaxed">Exploding automation capabilities across vertical applications.</p>
</div>
<div className="bg-slate-50 border border-slate-200 p-5 rounded-lg hover:border-slate-300 transition-colors">
<div className="flex items-baseline gap-2 mb-2">
<div className="text-indigo-600 font-bold text-2xl tracking-tight">$13.3T</div>
<div className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">28.7% AI</div>
</div>
<div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Global Travel</div>
<p className="text-xs text-slate-500 leading-relaxed">Massive TAM with fragmented solutions and low NPS.</p>
</div>
</div>
</div>

<div className="mb-12 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse min-w-[800px]">
<thead className="">
<tr className="bg-slate-50 border-b border-slate-200">
<th className="p-4 pl-6 font-semibold text-slate-900 w-1/5 text-xs uppercase tracking-wider">Category</th>
<th className="p-4 font-bold text-[#9d8255] bg-[#C4A574]/10 border-l border-r border-[#C4A574]/20 w-1/4 relative text-xs uppercase tracking-wider">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C4A574]"></div>
                                KARNAK
                            </th>
<th className="p-4 font-semibold text-slate-500 w-1/6 text-[10px] uppercase tracking-wider">Legacy Concierge</th>
<th className="p-4 font-semibold text-slate-500 w-1/6 text-[10px] uppercase tracking-wider">OTAs &amp; Platforms</th>
<th className="p-4 font-semibold text-slate-500 w-1/6 text-[10px] uppercase tracking-wider">AI Assistants</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="p-4 pl-6 font-medium text-slate-900 text-xs">Orchestration Scope</td>
<td className="p-4 bg-[#C4A574]/5 border-x border-[#C4A574]/20 font-medium text-slate-900 text-xs leading-relaxed">Five-pillar lifestyle OS: Travel, Access, Dining, Wellness, Execution</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Travel + ad-hoc requests</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Travel booking only</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Generic planning, unable to book</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="p-4 pl-6 font-medium text-slate-900 text-xs">Institutional Access</td>
<td className="p-4 bg-[#C4A574]/5 border-x border-[#C4A574]/20 font-medium text-slate-900 text-xs leading-relaxed">Government + UNESCO partnerships, ministerial clearances (12-18mo moat)</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Vendor relationships only</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">-</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">-</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="p-4 pl-6 font-medium text-slate-900 text-xs">Execution Speed</td>
<td className="p-4 bg-[#C4A574]/5 border-x border-[#C4A574]/20 font-medium text-slate-900 text-xs leading-relaxed">Voice → Complete orchestration in 30 seconds</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">24-48hr response (Human-operated)</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">User self-executes</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">No execution</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="p-4 pl-6 font-medium text-slate-900 text-xs">Intelligence</td>
<td className="p-4 bg-[#C4A574]/5 border-x border-[#C4A574]/20 font-medium text-slate-900 text-xs leading-relaxed">Agentic AI + vectorized memory across domains</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Manual notes per request</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Generic aggregator rates</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">Session-only memory</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="p-4 pl-6 font-medium text-slate-900 text-xs">Scale &amp; Margins</td>
<td className="p-4 bg-[#C4A574]/5 border-x border-[#C4A574]/20 font-medium text-slate-900 text-xs leading-relaxed">85% margins, infinite scale (Hybrid AI)</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">30% margins (Human-limited)</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">15-20% margins</td>
<td className="p-4 text-slate-500 text-xs leading-relaxed">No revenue model</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="mb-12 space-y-3">
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:shield-star-linear" width="14"></iconify-icon>
                Key Competitive Advantages
            </h3>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors">1</span>
                        Five-Pillar Lifestyle OS vs. Travel-Only
                    </span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-600 leading-relaxed ml-8">
<p className="mb-3 text-xs leading-relaxed">Clients don't segment their lives by domain. A Japan trip includes flights, ryokan booking, Michelin reservations, onsen experiences, and ground transport coordination. KARNAK orchestrates all of this; competitors require multiple platforms and manual coordination.</p>
<div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs flex gap-4">
<div className="flex-1">
<span className="text-[10px] uppercase font-bold text-indigo-600 mb-1 block">KARNAK</span>
<span className="text-slate-700 font-medium">Complete orchestration (Travel, Access, Dining, Wellness, Execution)</span>
</div>
<div className="w-px bg-slate-200"></div>
<div className="flex-1">
<span className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Competitors</span>
<span className="text-slate-500">Fragmented across 5-8 apps or manual agents.</span>
</div>
</div>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors">2</span>
                        Institutional Access Moat (12-18 Month Replication Time)
                    </span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-600 leading-relaxed ml-8">
<p className="mb-3 text-xs leading-relaxed">12-18 months minimum to establish ministerial relationships. Requires in-country presence, cultural fluency, and demonstrated track record. New entrants cannot fast-track this.</p>
<div className="bg-slate-50 p-3 rounded border border-slate-100 text-xs">
<span className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Examples</span>
<div className="grid grid-cols-2 gap-2 mt-1 text-slate-700">
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#C4A574]" icon="solar:star-linear" width="12"></iconify-icon> Private Pyramid Sunrise</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#C4A574]" icon="solar:star-linear" width="12"></iconify-icon> Vatican Museum Private Access</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#C4A574]" icon="solar:star-linear" width="12"></iconify-icon> Borobudur Temple Clearance</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#C4A574]" icon="solar:star-linear" width="12"></iconify-icon> Orient Express Buyouts</div>
</div>
</div>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900 flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors">3</span>
                        Agentic AI + Vectorized Memory vs. Manual
                    </span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-sm text-slate-600 leading-relaxed ml-8">
<p className="mb-3 text-xs leading-relaxed">The platform gets smarter with every booking. Cold-start problem for competitors who can't replicate transaction history and preference data. Obsidian intelligence layer is built on $5.74M in validated transactions.</p>
</div>
</details>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-12">

<div className="bg-gradient-to-br from-emerald-50/80 to-slate-50 border border-emerald-100 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:verified-check-bold" width="14"></iconify-icon>
                    Pre-Launch Validation
                </h3>
<p className="text-xs text-slate-600 mb-5 leading-relaxed relative z-10 border-b border-emerald-100 pb-4">
                    KARNAK is built on 18 months of operational validation, not theoretical assumptions.
                </p>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-500 bg-white rounded-full p-0.5 shadow-sm border border-emerald-100">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="">
<span className="text-sm font-semibold text-slate-900 block tracking-tight">$5.74M Live Transactions</span>
<span className="text-[11px] text-slate-500">Real client money, not GMV projections.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-500 bg-white rounded-full p-0.5 shadow-sm border border-emerald-100">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="">
<span className="text-sm font-semibold text-slate-900 block tracking-tight">Obsidian Intelligence Layer</span>
<span className="text-[11px] text-slate-500">18 months of preference learning.</span>
</div>
</li>
</ul>
</div>

<div className="bg-gradient-to-br from-indigo-50/80 to-slate-50 border border-indigo-100 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-4 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:graph-new-up-linear" width="14"></iconify-icon>
                    Strategic Exit &amp; Partnerships
                </h3>
<p className="text-xs text-slate-600 mb-5 leading-relaxed relative z-10 border-b border-indigo-100 pb-4">
                    Positioning for acquisition or white-label partnerships with major financial &amp; travel players.
                </p>
<div className="space-y-3 relative z-10">
<div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm hover:border-indigo-200 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-slate-900">Amex / Chase</span>
<span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">White-Label</span>
</div>
<p className="text-[10px] text-slate-500">We provide the AI concierge layer; they provide distribution.</p>
</div>
<div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm hover:border-indigo-200 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-slate-900">Virtuoso</span>
<span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">Infrastructure</span>
</div>
<p className="text-[10px] text-slate-500">Automating logistics for 20,000+ luxury advisors.</p>
</div>
<div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm hover:border-indigo-200 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-slate-900">Quintessentially</span>
<span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">Acquisition</span>
</div>
<p className="text-[10px] text-slate-500">Adding AI scalability to manual human operations.</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
</div>
</section>

<div className="scroll-mt-24 mb-24 space-y-16" id="financials">

<div className="">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 10</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Financials</h2>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div className="max-w-xl">
<div className="flex items-baseline gap-2 mb-3">
<h3 className="text-3xl font-bold text-slate-900 tracking-tight">$4.1M ARR <span className="text-slate-400 font-medium">Pre-Launch</span></h3>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    Generated through Karnak within a <span className="font-semibold text-slate-900">$5.74M ecosystem</span>. Validating strong product-market fit before official <span className="text-indigo-600 font-medium">launch</span>.
                </p>
</div>

<div className="flex items-center gap-4 text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-1">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></div>
<span>Karnak</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-sm bg-[#FDE047]"></div>
<span>Ecosystem</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-sm bg-[#FCA5A5]"></div>
<span>Burn</span>
</div>
</div>
</div>

<div className="relative w-full h-[320px] mb-10 select-none">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-[50px]">

<div className="border-b border-slate-50 w-full h-0 relative"></div>

<div className="border-b border-slate-100 w-full h-0 relative">
<span className="absolute -top-2.5 -left-8 text-[10px] text-slate-400 font-medium">400K</span>
</div>

<div className="border-b border-slate-100 w-full h-0 relative">
<span className="absolute -top-2.5 -left-8 text-[10px] text-slate-400 font-medium">200K</span>
</div>

<div className="border-b border-slate-200 w-full h-0 relative"></div>
</div>

<div className="absolute inset-0 flex items-end justify-between pl-2 pr-2 pb-[50px] gap-2 sm:gap-4">

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[15%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[30%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[18%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Jan</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[25%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[28%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[22%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Feb</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[18%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[40%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[12%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Mar</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[35%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[25%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[15%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Apr</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[2%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[65%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[15%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">May</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[45%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[22%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[14%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Jun</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[15%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[60%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[12%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Jul</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[20%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[58%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[20%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Aug</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[12%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[75%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[12%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Sep</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[20%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[65%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[12%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Oct</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">
<div className="w-full bg-[#FDE047] h-[2%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[92%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[10%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Nov</div>
</div>

<div className="relative w-full h-full flex flex-col justify-end group">

<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-lg border border-slate-200 px-2 py-1 rounded text-[10px] font-bold text-slate-700 whitespace-nowrap z-10">
                        601K
                    </div>
<div className="w-full bg-[#FDE047] h-[8%] rounded-t-sm opacity-90"></div>
<div className="w-full bg-emerald-500 h-[88%]"></div>
<div className="absolute top-full w-full bg-[#FCA5A5] h-[10%] rounded-b-sm"></div>
<div className="absolute -bottom-10 w-full text-center text-[10px] text-slate-400 font-medium">Dec</div>
</div>
</div>
</div>

<div className="space-y-4 pt-4">
<h4 className="text-sm font-semibold text-slate-900">Use of Funds</h4>

<div className="flex w-full h-3 rounded-full overflow-hidden">
<div className="w-[40%] bg-slate-800"></div>
<div className="w-[30%] bg-slate-500"></div>
<div className="w-[20%] bg-slate-300"></div>
<div className="w-[10%] bg-slate-100"></div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-slate-600 font-medium">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
<span>40% Product &amp; Eng</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
<span className="">30% Growth &amp; Mkt</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<span className="">20% Operations</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200"></div>
<span className="">10% Legal/Admin</span>
</div>
</div>
</div>
</div>

<div className="">

<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Data Room Access</h3>
<p className="text-sm text-slate-500">Deep dive into our financial models and projections.</p>
</div>
<div className="grid md:grid-cols-2 gap-5">

<a className="group hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer block no-underline overflow-hidden bg-white border-slate-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative" href="https://docs.google.com/spreadsheets/d/1nz6G4vuldXbXglt8AT_cx2v_OAGKnf94/edit?usp=sharing&amp;ouid=103149086969955913615&amp;rtpof=true&amp;sd=true" target="_blank">
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform duration-300 group-hover:bg-emerald-100">
<iconify-icon className="" icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Financial Model (FY25-FY28)</h4>
<iconify-icon className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4 group-hover:text-slate-600 transition-colors">Detailed revenue drivers, unit economics, and 3-year projections.</p>
<span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide flex items-center gap-1.5 border border-emerald-100 bg-emerald-50/50 w-max px-2 py-1 rounded-md group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-colors">
                        Open Sheet
                    </span>
</div>
</div>
</a>

<a className="group hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer block no-underline overflow-hidden bg-white border-slate-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative" href="https://drive.google.com/drive/u/1/home" target="_blank">
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform duration-300 group-hover:bg-emerald-100">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">Cap Table &amp; Deal Structure</h4>
<iconify-icon className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4 group-hover:text-slate-600 transition-colors">Current cap table, SAFE terms, and pro-forma ownership.</p>
<span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide flex items-center gap-1.5 border border-emerald-100 bg-emerald-50/50 w-max px-2 py-1 rounded-md group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-colors">
                        Open Sheet
                    </span>
</div>
</div>
</a>
</div>

<hr className="border-t border-slate-100 my-24"/>

<section className="scroll-mt-24" id="target-user">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 11</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Target User Profile</h2>
<p className="text-lg font-medium text-slate-800 mb-2 leading-tight tracking-tight">Centimillionaires Who've Outgrown Premium Travel Solutions</p>
<p className="text-sm text-slate-500 mb-10">Beachhead: $50M+ net worth individuals spending $100K+ annually on fragmented concierge services</p>

<div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-12 shadow-sm">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div className="">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="lucide:target" width="16"></iconify-icon>
                    Primary Beachhead Market
                </h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Centimillionaires and ultra-high-net-worth individuals ($50M+ net worth) who are wealthy but frustrated by:
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-slate-600">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="lucide:x" width="14"></iconify-icon>
<span>24-48 hour response times despite $50K+ fees</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-600">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="lucide:x" width="14"></iconify-icon>
<span>Manual coordination across 5-8 platforms per trip</span>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Market Size &amp; Penetration</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-slate-200 pb-2">
<span className="text-xs text-slate-600">Centimillionaires Global</span>
<span className="text-sm font-bold text-slate-900">240,000 <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1 rounded ml-1">+7.3% YoY</span></span>
</div>
<div className="flex items-center justify-between border-b border-slate-200 pb-2">
<span className="text-xs text-slate-600">Avg. Travel Spend</span>
<span className="text-sm font-bold text-slate-900">$100K+ / yr</span>
</div>
<div className="flex items-center justify-between border-b border-slate-200 pb-2">
<span className="text-xs text-slate-600">Addressable Market</span>
<span className="text-sm font-bold text-indigo-600">$24B</span>
</div>
<div className="pt-2">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Current Competitors</span>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 rounded-sm text-[10px] text-slate-500 font-medium">Amex Centurion</span>
<span className="px-2 py-1 bg-white border border-slate-200 rounded-sm text-[10px] text-slate-500 font-medium">Velocity Black</span>
<span className="px-2 py-1 bg-white border border-slate-200 rounded-sm text-[10px] text-slate-500 font-medium">Full-time EAs</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-6">The KARNAK Member Profile</h3>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
<div className="md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 md:p-8 flex flex-col justify-center">
<div className="w-20 h-20 rounded-full bg-slate-200 mb-6 mx-auto md:mx-0 overflow-hidden relative border-2 border-white shadow-sm">
<img alt="Member Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&amp;q=80"/>
</div>
<h4 className="md:text-left text-base font-bold text-slate-900 text-center mb-1">The "Time-Poor" Centi</h4>
<p className="text-xs text-slate-500 text-center md:text-left mb-6">Founders, Investors, C-Suite</p>
<div className="space-y-3">
<div className="flex justify-between text-xs items-center">
<span className="text-slate-500 font-medium">Net Worth</span>
<span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">$50M+</span>
</div>
<div className="flex justify-between text-xs items-center">
<span className="text-slate-500 font-medium">Trips/Year</span>
<span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">8-12+</span>
</div>
<div className="flex justify-between text-xs items-center">
<span className="text-slate-500 font-medium">Annual Spend</span>
<span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">$100K-500K</span>
</div>
</div>
</div>
<div className="md:w-2/3 p-6 md:p-8">
<div className="grid md:grid-cols-2 gap-8 h-full">
<div className="">
<h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Psychographics</h5>
<ul className="space-y-3">
<li className="text-xs text-slate-600 leading-relaxed flex gap-2.5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
<span className="">Value time over price: would pay premium for speed</span>
</li>
<li className="text-xs text-slate-600 leading-relaxed flex gap-2.5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
<span>Authenticity &gt; Status (Private Vatican dinners vs Instagram moments)</span>
</li>
</ul>
</div>
<div className="flex flex-col h-full">
<h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Key Insight</h5>
<div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5 flex-1 flex items-center">
<p className="text-sm text-indigo-900 font-medium italic leading-relaxed">
                                "They don't need access to luxury (they already have it). They need <span className="text-indigo-600 font-bold not-italic bg-white px-1 rounded-sm shadow-sm border border-indigo-100/50 mx-1">intelligence and orchestration</span> — a system that remembers, predicts, and executes across all domains without cognitive load."
                            </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-6">This Is For You If...</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-all duration-200 hover:shadow-sm group h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors group-hover:scale-105 transform">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Calendar &gt; Availability</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">Last-minute board meetings. Deal closings. Your EA scrambles to rebook while you're mid-flight.</p>
<div className="mt-auto pt-4 border-t border-slate-100">
<div className="text-[10px] uppercase font-bold text-indigo-600 mb-1.5 tracking-wide">KARNAK Solution</div>
<p className="text-[11px] text-slate-800 font-medium leading-snug">Voice note → complete itinerary rebooked in 30s.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-all duration-200 hover:shadow-sm group h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors group-hover:scale-105 transform">
<iconify-icon icon="lucide:repeat" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Repeating Preferences</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">Aisle seat, early check-in, hotel gym. You've said it 100 times. They still ask.</p>
<div className="mt-auto pt-4 border-t border-slate-100">
<div className="text-[10px] uppercase font-bold text-indigo-600 mb-1.5 tracking-wide">KARNAK Solution</div>
<p className="text-[11px] text-slate-800 font-medium leading-snug">Obsidian remembers every preference across transactions.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-all duration-200 hover:shadow-sm group h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors group-hover:scale-105 transform">
<iconify-icon icon="lucide:hourglass" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Waiting &amp; Follow-up</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">Three emails for dinner. Two calls for cars. Another message for the hotel upgrade.</p>
<div className="mt-auto pt-4 border-t border-slate-100">
<div className="text-[10px] uppercase font-bold text-indigo-600 mb-1.5 tracking-wide">KARNAK Solution</div>
<p className="text-[11px] text-slate-800 font-medium leading-snug">Single voice input. 30s response vs 24h.</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-all duration-200 hover:shadow-sm group h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors group-hover:scale-105 transform">
<iconify-icon icon="lucide:diamond" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Leverage &gt; Price</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">You don't want deals. You want the reservation that doesn't take reservations.</p>
<div className="mt-auto pt-4 border-t border-slate-100">
<div className="text-[10px] uppercase font-bold text-indigo-600 mb-1.5 tracking-wide">KARNAK Solution</div>
<p className="text-[11px] text-slate-800 font-medium leading-snug">Institutional access wealth alone can't buy.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 mb-12 relative group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A574]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-[#C4A574]/20 transition-colors duration-700"></div>
<div className="p-6 md:p-8 relative z-10">
<h3 className="text-lg font-semibold text-white mb-6 tracking-tight">What Defines Them</h3>
<div className="w-full">

<div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10 text-[10px] uppercase tracking-wider font-bold text-slate-500">
<div className="">Core Value</div>
<div className="text-right">Example</div>
</div>

<div className="grid grid-cols-2 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors px-2 -mx-2 rounded-md">
<div className="text-sm font-medium text-white flex items-center gap-2">Time &gt; Money</div>
<div className="text-xs text-slate-300 text-right">Would pay $50K to save 20 hours</div>
</div>

<div className="grid grid-cols-2 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors px-2 -mx-2 rounded-md">
<div className="text-sm font-medium text-white">Authenticity &gt; Status</div>
<div className="text-xs text-slate-300 text-right">Private Vatican dinners, not Instagram moments</div>
</div>

<div className="grid grid-cols-2 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors px-2 -mx-2 rounded-md">
<div className="text-sm font-medium text-white">Privacy &gt; Visibility</div>
<div className="text-xs text-slate-300 text-right">Discretion and white-glove service, not being "seen"</div>
</div>

<div className="grid grid-cols-2 gap-4 py-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors px-2 -mx-2 rounded-md">
<div className="text-sm font-medium text-white">Transformation &gt; Transaction</div>
<div className="text-xs text-slate-300 text-right">Experiences that create lasting memories</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 items-center hover:bg-white/5 transition-colors px-2 -mx-2 rounded-md">
<div className="text-sm font-medium text-white">Leverage &gt; Effort</div>
<div className="text-xs text-slate-300 text-right">One input, complete orchestration</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-6">Member Archetypes</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="border border-indigo-100 bg-indigo-50/30 rounded-lg p-5 flex flex-col h-full hover:shadow-md transition-all duration-200 hover:border-indigo-200">
<div className="mb-4">
<span className="px-2 py-0.5 rounded text-[9px] font-bold bg-indigo-100 text-indigo-700 uppercase tracking-wide border border-indigo-200">Early Adopter</span>
</div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Peak-Performance Founder</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">12+ flights/month, managing portfolio. Need speed &amp; precision above all.</p>
<div className="space-y-2 pt-3 border-t border-indigo-100/50">
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">Pattern</span>
<span className="font-semibold text-slate-900">SF → NYC → LDN</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">WTP</span>
<span className="font-semibold text-slate-900">$100K+ / yr</span>
</div>
</div>
</div>

<div className="border border-emerald-100 bg-emerald-50/30 rounded-lg p-5 flex flex-col h-full hover:shadow-md transition-all duration-200 hover:border-emerald-200">
<div className="mb-4">
<span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide border border-emerald-200">High Value</span>
</div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Institutional Investor</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">Coordinating LP events and deals. Requires environments that facilitate trust.</p>
<div className="space-y-2 pt-3 border-t border-emerald-100/50">
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">Need</span>
<span className="font-semibold text-slate-900">Impossible Access</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">WTP</span>
<span className="font-semibold text-slate-900">$150K+ / yr</span>
</div>
</div>
</div>

<div className="border border-slate-200 bg-white rounded-lg p-5 flex flex-col h-full hover:shadow-md transition-all duration-200 hover:border-slate-300">
<div className="mb-4">
<span className="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200">Multi-Gen</span>
</div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Family Office Principal</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">Multi-generational travel &amp; security. Complexity management is key.</p>
<div className="space-y-2 pt-3 border-t border-slate-100">
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">Need</span>
<span className="font-semibold text-slate-900">Unified Intelligence</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">WTP</span>
<span className="font-semibold text-slate-900">$200K+ / yr</span>
</div>
</div>
</div>

<div className="border border-slate-200 bg-white rounded-lg p-5 flex flex-col h-full hover:shadow-md transition-all duration-200 hover:border-slate-300">
<div className="mb-4">
<span className="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200">Zero Friction</span>
</div>
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Global C-Suite Exec</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-6 flex-1">40+ weeks traveling, juggling platforms. Fragmentation causes load.</p>
<div className="space-y-2 pt-3 border-t border-slate-100">
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">Need</span>
<span className="font-semibold text-slate-900">Single OS</span>
</div>
<div className="flex justify-between text-[10px]">
<span className="text-slate-500 font-medium">WTP</span>
<span className="font-semibold text-slate-900">$120K+ / yr</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-8 mb-12">

<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">What KARNAK Replaces</h3>
<div className="space-y-4">
<div className="p-5 rounded-lg bg-red-50/50 border border-red-100 relative">
<div className="text-[10px] uppercase font-bold text-red-500 mb-2 tracking-wide flex items-center justify-between">
<span className="">Before (Current State)</span>
<iconify-icon icon="lucide:x-circle" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-600 mb-3 leading-relaxed">Amex Centurion (24-48h), Velocity Black (3h+), or full-time EAs juggling 5-8 apps per trip.</p>
<div className="flex gap-4 text-[10px] text-red-600/70 font-semibold uppercase tracking-wide">
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:x" width="10"></iconify-icon> Manual Coord</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:x" width="10"></iconify-icon> Repeat Prefs</span>
</div>
</div>
<div className="flex justify-center text-slate-300 -my-2 relative z-10">
<div className="bg-white rounded-full p-1 border border-slate-100 shadow-sm">
<iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</div>
<div className="p-5 rounded-lg bg-emerald-50/50 border border-emerald-100 relative">
<div className="text-[10px] uppercase font-bold text-emerald-600 mb-2 tracking-wide flex items-center justify-between">
<span className="">After (KARNAK State)</span>
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
</div>
<p className="text-xs text-slate-600 mb-3 leading-relaxed">Voice note → complete orchestration in 30s across travel, dining, and access.</p>
<div className="flex gap-4 text-[10px] text-emerald-600 font-semibold uppercase tracking-wide">
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:check" width="10"></iconify-icon> 20+ Hours Saved</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:check" width="10"></iconify-icon> Zero Load</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-lg flex flex-col relative overflow-hidden h-full">
<div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<h3 className="text-lg font-semibold tracking-tight">Entry Criteria</h3>
<span className="px-2 py-0.5 border border-white/20 rounded text-[10px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-sm">Invitation Only</span>
</div>
<div className="space-y-4 mb-8 flex-1 relative z-10">
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="mt-0.5 bg-emerald-500/20 text-emerald-400 rounded-full p-0.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">$50M+ Net Worth</div>
<div className="text-[10px] text-slate-400 mt-0.5">Centimillionaires and above</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="mt-0.5 bg-emerald-500/20 text-emerald-400 rounded-full p-0.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<div className="text-sm font-400 mt-0.5">8+ trips/yr, $100K+ spend</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="mt-0.5 bg-emerald-500/20 text-emerald-400 rounded-full p-0.5">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Value Alignment</div>
<div className="text-[10px] text-slate-400 mt-0.5">Prioritizes time &amp; leverage over price</div>
</div>
</div>
</div>
<button className="uppercase hover:bg-indigo-50 transition-all duration-200 z-10 flex gap-2 group text-xs font-bold text-slate-900 tracking-wider bg-white w-full rounded-lg pt-3 pb-3 relative gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://karnak.co/'" role="button">
                Apply for Founding Cohort
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="lucide:trending-up" width="16"></iconify-icon>
            Why This Beachhead Wins
        </h3>
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-2xl font-bold text-slate-900 tracking-tight mb-1">$24B</div>
<div className="text-[10px] text-indigo-600 font-bold uppercase tracking-wide mb-2">Validated Market</div>
<p className="text-xs text-slate-600 leading-relaxed">240,000 centis spending $100K+ annually.</p>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-2xl font-bold text-slate-900 tracking-tight mb-1">20-30x</div>
<div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wide mb-2">LTV:CAC Ratio</div>
<p className="text-xs text-slate-600 leading-relaxed">$500K+ LTV driven by referral growth.</p>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-2xl font-bold text-slate-900 tracking-tight mb-1">18 Mo</div>
<div className="text-[10px] text-indigo-600 font-bold uppercase tracking-wide mb-2">Defensible Moat</div>
<p className="text-xs text-slate-600 leading-relaxed">Government partnerships + AI data history.</p>
</div>
</div>
<div className="border-t border-slate-200 pt-6">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Growth Path</h4>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 bg-white p-4 border border-indigo-200 rounded-lg shadow-sm ring-1 ring-indigo-500/5">
<div className="text-[10px] font-bold text-indigo-600 uppercase mb-1">Phase 1 (Current)</div>
<div className="text-sm font-semibold text-slate-900 mb-1">Beachhead</div>
<div className="text-xs text-slate-500">250 Founding Members</div>
</div>
<div className="hidden md:flex items-center text-slate-300">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
<div className="flex-1 bg-white p-4 border border-slate-200 rounded-lg opacity-60">
<div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Phase 2</div>
<div className="text-sm font-semibold text-slate-700 mb-1">Expansion</div>
<div className="text-xs text-slate-500">Decamillionaires ($10M+)</div>
</div>
<div className="hidden md:flex items-center text-slate-300">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
<div className="flex-1 bg-white p-4 border border-slate-200 rounded-lg opacity-60">
<div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Phase 3</div>
<div className="text-sm font-semibold text-slate-700 mb-1">White-Label</div>
<div className="text-xs text-slate-500">Private Banks &amp; Family Offices</div>
</div>
</div>
</div>
</div>

<hr className="border-t border-slate-100 my-24"/>

<div className="scroll-mt-24" id="team">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 12</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Team</h2>
<p className="text-lg font-medium text-slate-800 mb-2 leading-tight tracking-tight">Built by Operators from Deep Tech, Government, and Luxury Hospitality</p>
<p className="text-sm text-slate-500 mb-10">Combined expertise: $800M fund management, $120M ad spend optimization, government economic development, AI infrastructure at scale</p>

<div className="grid md:grid-cols-2 gap-4 mb-12 gap-x-4 gap-y-4">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-200 open:ring-1 open:ring-indigo-500/10 open:border-indigo-200">
<summary className="list-none cursor-pointer [&amp;::-webkit-details-marker]:hidden focus:outline-none pt-6 pr-6 pb-6 pl-6">
<div className="flex items-start gap-4">
<img alt="Linda Adami" className="shrink-0 w-16 h-16 object-cover border-slate-100 border rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02cc2759-8593-4113-8f8c-af11b09adae9_320w.png"/>
<div className="flex-1 min-w-0">
<div className="flex items-center flex-wrap gap-2 mb-2">
<h3 className="text-base font-bold text-slate-900">Linda Adami</h3>
<span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">CEO &amp; Co-Founder</span>
</div>
<ul className="space-y-1.5 mb-2">
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">Ex-Dubai Govt: Attracted 1,000+ tech companies ($200B impact)</span>
</li>
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">10 years in emerging markets &amp; economic development</span>
</li>
</ul>
<div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide group-open:hidden mt-3">
                                View Bio <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>
</summary>
<div className="px-6 pb-6 pt-0 md:pl-[5.5rem] text-xs text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4">
<p className="mb-4">Linda Adami is an Italian-born political economist building the infrastructure for luxury travel intelligence. As CEO and co-founder of KARNAK, she brings a unique combination of government economic development expertise and operational travel platform experience.</p>
<h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-wider">Career Background</h4>
<div className="space-y-3 mb-4">
<div>
<div className="font-semibold text-slate-800">Government of Dubai - Dubai Future Foundation</div>
<div className="text-slate-500">Developed public policy and programs to drive the deep tech ecosystem. Created FDI strategy that attracted 1,000+ tech companies.</div>
</div>
<div>
<div className="font-semibold text-slate-800">Quantum Temple (Founder &amp; CEO)</div>
<div className="text-slate-500">Built the operational foundation for KARNAK over 18 months, executing $5.74M in live transactions and establishing relationships with 1,800+ properties and ministerial bodies.</div>
</div>
</div>
<div className="bg-slate-50 p-3 rounded border border-slate-100 mb-2">
<span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">Why This Matters</span>
<p className="text-slate-500">Linda's government background enabled KARNAK's institutional access moat—ministerial relationships and UNESCO clearances that take 12-18 months to replicate.</p>
</div>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-200 open:ring-1 open:ring-indigo-500/10 open:border-indigo-200">
<summary className="list-none cursor-pointer p-6 [&amp;::-webkit-details-marker]:hidden focus:outline-none">
<div className="flex items-start gap-4">
<img alt="Vincent Guittet" className="shrink-0 w-16 h-16 object-cover border-slate-100 border rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8435-eacf-4d54-9f38-ec0e4db49b56_320w.png"/>
<div className="flex-1 min-w-0">
<div className="flex items-center flex-wrap gap-2 mb-2">
<h3 className="text-base font-bold text-slate-900">Vincent Guittet</h3>
<span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">Head of Growth</span>
</div>
<ul className="space-y-1.5 mb-2">
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">Expedia Group: Drove &gt;950k bookings w/ $120M ad spend</span>
</li>
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">Led Product Growth at Pollen to $60M funding ($800M val)</span>
</li>
</ul>
<div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide group-open:hidden mt-3">
                                View Bio <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>
</summary>
<div className="px-6 pb-6 pt-0 md:pl-[5.5rem] text-xs text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4">
<p className="mb-4">Vincent Guittet is a growth-focused technology leader with deep expertise in the tourism and experiences sector. He brings a proven track record of scaling travel platforms from industry giants (Expedia, VRBO, Club Med) and high-growth startups.</p>
<h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-wider">Career Background</h4>
<div className="space-y-3 mb-4">
<div>
<div className="font-semibold text-slate-800">Pollen - Head of Product Growth</div>
<div className="text-slate-500">Drove growth strategy securing $60M funding at $800M+ valuation. Achieved 3x quarterly user growth through product-led initiatives.</div>
</div>
<div>
<div className="font-semibold text-slate-800">Expedia Group - Growth &amp; Performance</div>
<div className="text-slate-500">Managed $120M ad spend with 150%-350% ROAS. Pioneered integration with Google's vacation rental widget for 2.5M properties.</div>
</div>
</div>
<div className="bg-slate-50 p-3 rounded border border-slate-100 mb-2">
<span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">Why This Matters</span>
<p className="text-slate-500">Vincent's experience scaling travel platforms provides the growth playbook for KARNAK. His AI-first approach aligns with automating what traditionally required massive ops teams.</p>
</div>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-200 open:ring-1 open:ring-indigo-500/10 open:border-indigo-200">
<summary className="list-none cursor-pointer p-6 [&amp;::-webkit-details-marker]:hidden focus:outline-none">
<div className="flex items-start gap-4">
<img alt="Hao Cheng" className="shrink-0 w-16 h-16 object-cover border-slate-100 border rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7574737c-8bfe-4cfa-9f50-45417d7101eb_320w.png"/>
<div className="flex-1 min-w-0">
<div className="flex items-center flex-wrap gap-2 mb-2">
<h3 className="text-base font-bold text-slate-900">Hao Cheng</h3>
<span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">Director of Tech</span>
</div>
<ul className="space-y-1.5 mb-2">
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">Architected secure vault &amp; AI intelligence engine</span>
</li>
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span className="">10+ years launching SaaS fintech &amp; e-commerce platforms</span>
</li>
</ul>
<div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide group-open:hidden mt-3">
                                View Bio <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>
</summary>
<div className="px-6 pb-6 pt-0 md:pl-[5.5rem] text-xs text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4">
<p className="mb-4">Hao Cheng is a seasoned technology innovator driving digital transformation globally. As Director of Technology, he oversees the development of the Obsidian platform and agentic AI architecture that powers lifestyle orchestration.</p>
<h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-wider">Career Background</h4>
<div className="space-y-3 mb-4">
<div>
<div className="font-semibold text-slate-800">KARNAK/Quantum Temple - Director of Tech</div>
<div className="text-slate-500">Architected the secure vault infrastructure and distributed systems enabling the hybrid agentic + human model. Processes $5.74M in transactions with end-to-end encryption.</div>
</div>
<div>
<div className="font-semibold text-slate-800">Major Fintech Firm - Tech Lead</div>
<div className="text-slate-500">Led creation of AI-driven analytics platforms and spearheaded innovations in financial technology processing high-value transactions.</div>
</div>
</div>
<div className="bg-slate-50 p-3 rounded border border-slate-100 mb-2">
<span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">Why This Matters</span>
<p className="text-slate-500">Hao's expertise in secure, high-value transaction systems ensures the platform handles $100K+ bookings with bank-grade security while maintaining consumer-app speed.</p>
</div>
</div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-200 open:ring-1 open:ring-indigo-500/10 open:border-indigo-200">
<summary className="list-none cursor-pointer [&amp;::-webkit-details-marker]:hidden focus:outline-none pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-x-4 gap-y-4 items-start">
<img alt="Sarah Tan" className="shrink-0 w-16 h-16 object-cover border-slate-100 border rounded-full shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4223a0a8-56f3-4180-bdab-259d8041d36c_320w.jpg"/>
<div className="flex-1 min-w-0">
<div className="flex items-center flex-wrap gap-2 mb-2">
<h3 className="text-base font-bold text-slate-900">Sarah Tan</h3>
<span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 tracking-wide uppercase">Head of Product</span>
</div>
<ul className="space-y-1.5 mb-2">
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span>Strategy for 30+ startups ($596M+ combined valuations)</span>
</li>
<li className="text-xs text-slate-600 flex gap-2 leading-relaxed">
<span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
<span>Ex-VC at Incubate Fund ($800M AUM) investing in AI/ML</span>
</li>
</ul>
<div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide group-open:hidden mt-3">
                                View Bio <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
</div>
</summary>
<div className="px-6 pb-6 pt-0 md:pl-[5.5rem] text-xs text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4">
<p className="mb-4">Sarah Tan brings deep expertise in 0-to-1 product design for AI startups and venture capital. She has led digital transformations for MNCs and helped 30+ B2B tech startups fundraise and launch.</p>
<h4 className="font-bold text-slate-900 mb-2 uppercase text-[10px] tracking-wider">Career Background</h4>
<div className="space-y-3 mb-4">
<div>
<div className="font-semibold text-slate-800">Incubate Fund - Venture Capitalist</div>
<div className="text-slate-500">Managed investments from $800M AUM fund, focusing on AI/ML. Portfolio includes companies with $596M+ in combined valuations.</div>
</div>
<div>
<div className="font-semibold text-slate-800">AI Singapore - Product Innovation</div>
<div className="text-slate-500">Co-developed Human-Centered AI product innovation framework. Conducted innovation workshops for leading universities and conferences globally.</div>
</div>
</div>
<div className="bg-slate-50 p-3 rounded border border-slate-100 mb-2">
<span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">Why This Matters</span>
<p className="text-slate-500">Sarah's VC background ensures KARNAK's positioning resonates with investors. Her AI product expertise translates cutting-edge tech into clear value propositions for UHNW users.</p>
</div>
</div>
</details>

<div className="md:col-span-2 border-slate-200 border-t mt-16 pt-12" id="investor-faq">

<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 13</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Investor FAQ</h2>
<div className="space-y-3">

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex cursor-pointer list-none select-none pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<span className="text-sm font-semibold text-slate-900">Q1: What exactly is KARNAK and why does the four-tier model make sense?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                KARNAK is the intelligent luxury concierge that turns one voice note into a complete trip in 30 seconds. The model runs four individual tiers — Baseline ($18K/yr, agentic-only), Power User ($36K/yr, agentic + human concierge), Sovereign ($60K/yr, agentic + human + VIP access), and Whale ($120K/yr, white-glove dedicated team) — plus Corporate accounts at $180K/yr covering up to 5 travelers. This tiered structure captures the full UHNWI spectrum from self-directed affluent travelers to principals who want zero cognitive load, while driving blended subscription revenue of $2.9M in 2026 scaling to $25M by 2030. The tiers also create a natural upgrade path — members enter at Baseline and migrate up as KARNAK compounds their preferences across trips.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q2: How is this actually different from Velocity Black or Amex Centurion?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                Velocity Black was a 100% human operation acquired for $500M — no AI, 30% margins, no compounding intelligence. KARNAK runs at 85%+ gross margins because AI handles 80% of requests. Beyond efficiency, the real difference is access: our government partnerships in Egypt and Indonesia and UNESCO relationships took 5track institutional trust.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex cursor-pointer list-none select-none pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<span className="text-sm font-semibold text-slate-900">Q3: What does "agentic AI" mean for our app?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                A member sends one voice note. KARNAK's voice-led AI parses intent, builds a unique travel profile from every interaction, and searches real-time inventory across 1,800+ Virtuoso properties and 380+ airlines. It applies loyalty perks, books, pays, and syncs the full itinerary without a single follow-up. By trip 3, the system anticipates 90% of preferences before the member asks — dietary restrictions, room type, pace of travel, personal rituals. Legacy services start from scratch every request. KARNAK compounds.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q4: What's the product moat, couldn't a better-funded competitor build this?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                Three layers that don't replicate overnight. First, Quantum Temple's 5-year institutional ecosystem — government partnerships, 100+ Tier-1 hospitality brands, and $5.74M in live transactions that trained the Obsidian intelligence system. Second, aggregated inventory and negotiated rates across 1,800+ Virtuoso properties and 380+ airlines that took years of direct relationships to unlock — giving members access and pricing no OTA or app can match. Third, a member intelligence layer that deepens with every booking, making KARNAK progressively harder to switch away from. A competitor starting today needs 18 months before they can offer what's already live.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q5: How does KARNAK actually make money  and what drives the 85% margin?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                Three revenue engines: subscriptions ($18K–$180K/yr across tiers), booking commissions at 12–15% vs. the 7% OTA standard, and enterprise retreats for family offices and corporates. The 85%+ gross margin is structural — AI handles 80% of requests at near-zero marginal cost, and Virtuoso direct relationships mean no middlemen on $30K+ average bookings. The more members transact, the higher the margin.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q6: The $5.74M revenue figure how much of that is real product traction vs. ecosystem revenue?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                $1M of that is confirmed pre-launch KARNAK App revenue, with $28.3K average revenue per customer and zero paid acquisition. The broader $5.74M validates QT's model — the same hospitality infrastructure, relationships, and transaction engine that KARNAK now scales through AI and membership. The numbers aren't projections; they're proof that the unit economics work before the tech fully kicks in.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q7: How do you get from current members to 2026 growth projection and what's the actual growth mechanism?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                KARNAK doesn't advertise. Growth flows through three zero-CAC channels: QT's 25,000+ validated UHNWI traveler database, the corporate expedition pipeline where every B2B client becomes a qualified member lead pool, and Virtuoso partner referrals. The 44:1 LTV:CAC ratio holds because acquisition is relationship-driven, not performance marketing. The Founders Circle (50 seats only) is the ignition event — scarcity forces velocity.
            </div>
</details>

<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-indigo-500/10 open:border-indigo-200 transition-all duration-200">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
<span className="text-sm font-semibold text-slate-900">Q8: What does the $10M raise actually unlock  and what's the path to $20M revenue in 2026?</span>
<span className="text-slate-400 group-open:text-indigo-600 transition-transform duration-200 group-open:rotate-180 flex items-center shrink-0 ml-4">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-50 group-open:pt-2">
                40% funds AI platform development to reduce human concierge hours per booking, compressing cost per request and pushing margins higher. 30% funds SEA and East Asia market expansion, where QT's government partnerships are already active. The $20M 2026 target is built on 240 members across tiers — that's 10x the current founding cohort, achievable through existing pipelines without a single dollar of paid CAC. This is execution capital, not exploration capital.
            </div>
</details>
</div>

<hr className="border-t border-slate-100 my-24"/>
<div className="" id="the-ask">
<span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">Section 14</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">The Ask</h2>

<div className="flex flex-wrap items-center gap-y-2 border-y border-slate-200 py-3 mb-6 bg-slate-50/50">
<div className="px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">$1M Pre-Launch Revenue</div>
<div className="hidden md:block w-px h-3 bg-slate-300"></div>
<div className="px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">$5.74M Ecosystem-Validated</div>
<div className="hidden md:block w-px h-3 bg-slate-300"></div>
<div className="px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">$28.3K Avg Booking</div>
<div className="hidden md:block w-px h-3 bg-slate-300"></div>
<div className="px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">40%+ EBITDA Margin</div>
<div className="hidden md:block w-px h-3 bg-slate-300"></div>
<div className="px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">Zero Paid CAC</div>
</div>
<p className="text-sm text-slate-500 mb-8 max-w-2xl">The infrastructure is built. The relationships took 5 years. This raise scales what's already working.</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 gap-x-5 gap-y-5">

<div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-full hover:border-indigo-300 transition-colors duration-200">
<div className="">
<div className="text-3xl font-bold text-slate-900 tracking-tight mb-1">$5M</div>
<div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-4">Pre-Money SAFE</div>
</div>
<div className="text-xs text-slate-500 pt-4 border-t border-slate-100">Series Pre-A Round</div>
</div>

<div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-full hover:border-indigo-300 transition-colors duration-200">
<div className="">
<div className="text-3xl font-bold text-slate-900 tracking-tight mb-1">$100M</div>
<div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-4">Pre-Money Valuation</div>
</div>
<div className="text-[10px] text-slate-400 italic leading-relaxed pt-4 border-t border-slate-100">
                    Velocity Black: $500M acquisition. No AI. No margins. No institutional access. We are priced at 1/10th.
                </div>
</div>

<div className="flex flex-col hover:border-indigo-300 transition-colors duration-200 bg-white h-full border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm justify-between">
<div className="space-y-4">
<div className="flex justify-between items-baseline">
<div className="text-2xl font-bold text-slate-900 tracking-tight">$250K</div>
<div className="uppercase text-xs font-bold text-slate-500 tracking-wide">InstitutionAL</div>
</div>
<div className="w-full h-px bg-slate-100"></div>
<div className="flex justify-between items-baseline">
<div className="text-2xl font-bold text-slate-900 tracking-tight">$50K</div>
<div className="uppercase text-xs font-bold text-indigo-600 tracking-wide">Backer's Circle</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border-slate-200 border rounded-xl mb-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="lucide:trending-up" width="16"></iconify-icon>
                    Projected Growth
                </h3>
<div className="flex items-center gap-2 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Conservative Case</span>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 mb-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col items-center">
<span className="text-xl font-bold text-slate-900">$7.3M</span>
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">2026</span>
</div>
<iconify-icon className="text-slate-300 hidden md:block" icon="lucide:arrow-right" width="20"></iconify-icon>
<iconify-icon className="text-slate-300 md:hidden" icon="lucide:arrow-down" width="20"></iconify-icon>
<div className="flex flex-col items-center">
<span className="text-xl font-bold text-slate-900">$13.9M</span>
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">2028</span>
</div>
<iconify-icon className="text-slate-300 hidden md:block" icon="lucide:arrow-right" width="20"></iconify-icon>
<iconify-icon className="text-slate-300 md:hidden" icon="lucide:arrow-down" width="20"></iconify-icon>
<div className="flex flex-col items-center">
<span className="text-xl font-bold text-slate-900">$51.3M</span>
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">2030</span>
</div>
</div>
<div className="space-y-1 text-center md:text-left border-t border-slate-200 pt-4">
<p className="text-xs text-slate-500">63% revenue CAGR 2026–2030. EBITDA margin expands from 40.9% in 2026 to 51.6% by 2030. 2029 is the breakout year with 105% YoY growth driven entirely by existing member pipelines, zero new distribution channels required</p>
</div>
</div>

<div className="mb-16">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Use of Funds</h3>
<div className="space-y-5">

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-1">
<div className="flex justify-between items-baseline">
<span className="text-xs font-bold text-slate-900">Product Dev</span>
<span className="text-[10px] text-slate-500 hidden md:inline ml-2">AI platform depth, voice orchestration, multi-agent framework</span>
</div>
<div className="text-xs font-bold text-slate-900 text-right">$2.0M</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-600 w-[40%] rounded-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-1 pt-2">
<div className="flex justify-between items-baseline">
<span className="text-xs font-bold text-slate-900">Expansion</span>
<span className="text-[10px] text-slate-500 hidden md:inline ml-2">SEA/East Asia markets, B2G partnership scaling</span>
</div>
<div className="text-xs font-bold text-slate-900 text-right">$1.5M</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[30%] rounded-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-1 pt-2">
<div className="flex justify-between items-baseline">
<span className="text-xs font-bold text-slate-900">Team</span>
<span className="text-[10px] text-slate-500 hidden md:inline ml-2">AI engineering talent, enterprise sales, concierge curators</span>
</div>
<div className="text-xs font-bold text-slate-900 text-right">$1.0M</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-400 w-[20%] rounded-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-1 pt-2">
<div className="flex justify-between items-baseline">
<span className="text-xs font-bold text-slate-900">18-Month Compounding Runway</span>
<span className="text-[10px] text-slate-500 hidden md:inline ml-2">Intentional pacing — 18 months to Series A with full optionality</span>
</div>
<div className="text-xs font-bold text-slate-900 text-right">$0.5M</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[10%] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-xl p-6 md:p-8 text-white mb-6 relative overflow-hidden shadow-xl border border-slate-800">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center gap-4 z-10 mb-2 relative gap-x-4 gap-y-4 justify-between">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold text-indigo-300 uppercase tracking-wide">
<iconify-icon icon="lucide:star" width="10"></iconify-icon> LIMITED OPPORTUNITY
                </span>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold tracking-tight">$50K</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">INVESTMENT TICKET</span>
</div>
</div>
<h3 className="z-10 text-xl font-bold text-white mb-1 relative">Backer's Circle Tier</h3>
<div className="h-px bg-white/10 w-full mb-8 relative z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 rounded bg-white/10 text-indigo-400">
<iconify-icon icon="lucide:pie-chart" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-bold uppercase tracking-wider">The Equity</h4>
</div>
<ul className="space-y-3 mb-4">
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            $50K stake at $50M pre-money valuation
                        </li>
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            Full pro-rata rights on future rounds
                        </li>
</ul>
<div className="bg-indigo-900/30 border border-indigo-500/30 p-2.5 rounded text-[10px] text-indigo-200 leading-relaxed">
                        Pro-rata rights secured at $50M cap. The same terms will not exist at Series A.
                    </div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 rounded bg-white/10 text-indigo-400">
<iconify-icon icon="lucide:infinity" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-bold uppercase tracking-wider">Lifetime Membership</h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            Value: $130K+ waived forever
                        </li>
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            Voice orchestration &amp; hyper-personalization across every trip
                        </li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 rounded bg-white/10 text-indigo-400">
<iconify-icon icon="lucide:crown" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-bold uppercase tracking-wider">Exclusive Perks</h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            Founding Member recognition — permanent
                        </li>
<li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check" width="12"></iconify-icon>
                            Direct line to leadership &amp; annual retreat access
                        </li>
</ul>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:border-indigo-300 transition-all duration-200">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-bold text-slate-900">Immediate Value Calculation</h4>
<span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wide">7.6X ROI DAY 1</span>
</div>
<div className="space-y-3 text-xs text-slate-600 mb-4">
<div className="flex justify-between">
<span className="">Equity Value</span>
<span className="font-semibold text-slate-900">$50,000</span>
</div>
<div className="flex justify-between">
<span className="">Initiation Fee (Waived)</span>
<span className="font-semibold text-slate-900">$100,000</span>
</div>
<div className="flex justify-between">
<span className="">Year 1 Membership (Waived)</span>
<span className="font-semibold text-slate-900">$30,000</span>
</div>
<div className="flex justify-between border-b border-slate-100 pb-2">
<span className="">Years 2–10 NPV (Waived)</span>
<span className="font-semibold text-slate-900">~$200,000</span>
</div>
<div className="flex justify-between text-sm font-bold text-slate-900 pt-1">
<span>Total Value</span>
<span className="">$380,000+</span>
</div>
</div>
<p className="text-[10px] leading-relaxed italic text-slate-400">Based on Sovereign tier ($60K/yr). Founding Members also benefit from curated access and founder benefits.</p>
</div>

<div className="flex flex-col overflow-hidden text-center bg-slate-900 border-slate-800 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg items-center justify-center">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="mb-3 text-indigo-400 relative z-10">
<iconify-icon icon="lucide:hourglass" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-bold text-white mb-2 relative z-10">50 Seats Only</h4>
<p className="text-xs text-slate-400 mb-6 max-w-xs mx-auto relative z-10">
                    Once the Founders Circle is filled, this tier closes permanently. No exceptions — scarcity is structural, not manufactured.
                </p>
<div className="text-left space-y-2 relative z-10">
<div className="text-[10px] text-slate-300 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ● 3 family offices already committed
                    </div>
<div className="text-[10px] text-slate-300 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ● 2 repeat founders from prior QT raises
                    </div>
<div className="text-[10px] text-slate-300 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ● Round expected to close Q1 2026
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>
</div>
</div>
</div> 
</div>
</main>
</div>



    </>
  );
}
