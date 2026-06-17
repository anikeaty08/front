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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Sticky Reading Progress Bar ---
        const progressBar = document.getElementById('reading-progress');
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });

        // --- 2. Traffic-Based Community Savings Counter ---
        const savingsDisplay = document.getElementById('community-savings-display');
        let currentSavings = parseFloat(localStorage.getItem('gbl_community_savings')) || 1402890.00;
        
        // Add $0.05 per page view immediately
        currentSavings += 0.05;
        localStorage.setItem('gbl_community_savings', currentSavings.toFixed(2));
        
        const updateSavingsUI = (val) => {
            savingsDisplay.innerText = '$' + val.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        };
        updateSavingsUI(currentSavings);

        // Simulate live traffic reading & saving
        setInterval(() => {
            currentSavings += 0.05;
            updateSavingsUI(currentSavings);
            localStorage.setItem('gbl_community_savings', currentSavings.toFixed(2));
            
            // Subtle flash effect on update
            savingsDisplay.classList.add('text-[#2D5A27]');
            setTimeout(() => savingsDisplay.classList.remove('text-[#2D5A27]'), 300);
        }, 8500); // Triggers every 8.5 seconds

        // --- 3. Interactive 'Swap Validator' & Confetti ---
        let userPersonalSavings = parseFloat(localStorage.getItem('gbl_user_savings')) || 0.00;

        function createConfetti() {
            const colors = ['#2D5A27', '#D1E2C4', '#1B262C', '#F9F9F6'];
            for (let i = 0; i < 40; i++) {
                const conf = document.createElement('div');
                conf.classList.add('confetti');
                conf.style.left = Math.random() * 100 + 'vw';
                conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                conf.style.width = (Math.random() * 10 + 5) + 'px';
                conf.style.height = (Math.random() * 10 + 5) + 'px';
                conf.style.animationDuration = (Math.random() * 3 + 2) + 's';
                conf.style.animationDelay = (Math.random() * 0.5) + 's';
                document.body.appendChild(conf);
                setTimeout(() => conf.remove(), 5000); // cleanup
            }
        }

        function handleSwap(didSwap) {
            document.getElementById('swap-buttons').classList.add('hidden');
            if (didSwap) {
                createConfetti();
                // Add the default saving amount from the article (e.g., $17.70 net savings roughly from paper towels)
                userPersonalSavings += 17.70; 
                localStorage.setItem('gbl_user_savings', userPersonalSavings.toFixed(2));
                
                document.getElementById('user-total-saved').innerText = '$' + userPersonalSavings.toLocaleString('en-US', {minimumFractionDigits: 2});
                document.getElementById('swap-success').classList.remove('hidden');
            } else {
                const msg = document.createElement('p');
                msg.className = "text-[#1B262C]/60 italic mt-4";
                msg.innerText = "No problem. The ledger will be here when you're ready.";
                document.getElementById('swap-buttons').parentNode.appendChild(msg);
            }
        }

        function submitActualSaving() {
            const input = document.getElementById('actual-saving-input');
            const val = parseFloat(input.value);
            if (!isNaN(val) && val > 0) {
                // Remove default and add their actual input
                userPersonalSavings = (userPersonalSavings - 17.70) + val;
                localStorage.setItem('gbl_user_savings', userPersonalSavings.toFixed(2));
                document.getElementById('user-total-saved').innerText = '$' + userPersonalSavings.toLocaleString('en-US', {minimumFractionDigits: 2});
                input.value = '';
                input.placeholder = 'Saved!';
            }
        }

        // --- 4. Cost-Benefit Calculator Logic ---
        const initCostInput = document.getElementById('initial-cost');
        const moSavingsInput = document.getElementById('monthly-savings');
        const paybackResult = document.getElementById('payback-result');

        function calculatePayback() {
            const cost = parseFloat(initCostInput.value);
            const sav = parseFloat(moSavingsInput.value);
            
            if (cost > 0 && sav > 0) {
                const months = (cost / sav).toFixed(1);
                paybackResult.innerText = months + ' months';
            } else {
                paybackResult.innerText = 'N/A';
            }
        }

        initCostInput.addEventListener('input', calculatePayback);
        moSavingsInput.addEventListener('input', calculatePayback);

        // --- Utility: Modals & Mobile Menu ---
        function toggleModal(id) {
            const el = document.getElementById(id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
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
      

<div className="fixed top-0 left-0 h-1.5 bg-[#2D5A27] z-[60] w-0 transition-all duration-150 ease-out" id="reading-progress"></div>

<header className="sticky top-0 z-50 bg-[#D1E2C4]/80 backdrop-blur-md border-b border-[#1B262C]/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="font-serif text-2xl tracking-tight font-medium flex items-center gap-2" href="/">
<iconify-icon className="text-[#2D5A27]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                    Green Budget Lab.
                </a>

<nav className="hidden md:flex items-center gap-8 text-base font-medium text-[#1B262C]/70">
<a className="hover:text-[#1B262C] transition-colors" href="/household-audits/">Audits</a>
<a className="hover:text-[#1B262C] transition-colors" href="/zero-waste-swaps/">Zero-Waste</a>
<a className="hover:text-[#1B262C] transition-colors" href="/frugality-guides/">Extreme Frugality</a>
<a className="hover:text-[#1B262C] transition-colors" href="#ledger-reports">Ledger Reports</a>
</nav>
</div>
<div className="flex items-center gap-4 sm:gap-6">
<button className="hidden sm:block text-[#1B262C]/70 hover:text-[#1B262C] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="hidden sm:block bg-[#2D5A27] text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#1B262C] transition-colors" onclick="toggleModal('newsletter-modal')">
                    Get Newsletter
                </button>

<button className="md:hidden text-[#1B262C] text-2xl p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<nav className="hidden md:hidden bg-[#D1E2C4] border-t border-[#1B262C]/10 px-6 py-4 flex flex-col gap-4 text-base font-medium text-[#1B262C]/80 shadow-lg absolute w-full left-0" id="mobile-menu">
<a className="hover:text-[#1B262C]" href="/household-audits/">Audits</a>
<a className="hover:text-[#1B262C]" href="/zero-waste-swaps/">Zero-Waste</a>
<a className="hover:text-[#1B262C]" href="/frugality-guides/">Extreme Frugality</a>
<button className="bg-[#2D5A27] text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#1B262C] transition-colors text-center w-full mt-2" onclick="toggleModal('newsletter-modal')">
                Get Newsletter
            </button>
</nav>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="flex flex-col gap-6 lg:col-span-1">

<div className="group relative h-[300px] rounded-[20px] bg-white border border-[#1B262C]/10 p-6 flex flex-col hover:shadow-lg transition-shadow">
<span className="text-xs font-sans tracking-widest uppercase text-[#2D5A27] font-semibold mb-2">Monthly Audit</span>
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] leading-snug mb-4">Average Household Ledger</h3>

<div className="flex-grow flex flex-col justify-center gap-3 font-mono text-sm">
<div className="flex flex-col sm:flex-row justify-between sm:items-center ledger-row pb-2 text-[#1B262C]/80 gap-1 sm:gap-0">
<span>Single-use disposables</span>
<span className="text-red-600/80">-$45.00</span>
</div>
<div className="flex flex-col sm:flex-row justify-between sm:items-center ledger-row pb-2 text-[#1B262C]/80 gap-1 sm:gap-0">
<span>Bulk pantry staples</span>
<span className="text-[#2D5A27]">+$112.50</span>
</div>
<div className="flex flex-col sm:flex-row justify-between sm:items-center ledger-row pb-2 text-[#1B262C]/80 gap-1 sm:gap-0">
<span>Phantom electricity</span>
<span className="text-red-600/80">-$18.20</span>
</div>
<div className="flex justify-between pt-2 font-medium text-base border-t border-[#1B262C]/20">
<span>Net 30-Day Impact</span>
<span className="text-[#2D5A27]">+$49.30</span>
</div>
</div>
</div>

<div className="h-[300px] bg-[#F9F9F6] rounded-[20px] border border-[#1B262C]/10 p-6 flex flex-col justify-center items-center overflow-hidden relative shadow-[inset_0_0_30px_rgba(27,38,44,0.03)]">
<div className="absolute top-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBvbHlnb24gcG9pbnRzPSIwLDAgNSwxMCAxMCwwIiBmaWxsPSIjRDFFMkM0Ii8+PC9zdmc+')]"></div>
<iconify-icon className="text-3xl text-[#2D5A27] mb-4" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-xs font-sans tracking-widest uppercase text-[#1B262C]/50 font-semibold mb-2 text-center">Total Community Savings</span>

<div className="font-mono text-4xl lg:text-5xl tracking-tighter text-[#1B262C] font-semibold my-2 transition-all duration-300" id="community-savings-display">
                            $1,402,890.00
                        </div>
<span className="text-xs font-mono text-[#2D5A27] mt-4 px-3 py-1 bg-[#2D5A27]/10 rounded-full flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#2D5A27] rounded-full animate-pulse"></span> LIVE CALCULATION
                        </span>
<div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBvbHlnb24gcG9pbnRzPSIwLDEwIDUsMCAxMCwxMCIgZmlsbD0iI0QxRTJDNCIvPjwvc3ZnPg==')]"></div>
</div>
</div>

<a className="group relative h-[624px] lg:col-span-2 rounded-[20px] overflow-hidden border border-[#1B262C]/10 block" href="#article">

<img alt="Minimalist living interior for zero-waste lifestyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B262C]/90 via-[#1B262C]/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 flex flex-col gap-4 w-full md:w-4/5">
<span className="text-xs font-sans tracking-widest uppercase text-[#D1E2C4] font-medium">Zero-Waste Guide</span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-white leading-tight">The ultimate ledger for transitioning to a zero-waste household</h2>
<div className="flex items-center gap-4 mt-4">
<div className="flex items-center gap-2 text-white text-base border border-white/30 rounded-full px-4 py-1.5 backdrop-blur-sm group-hover:bg-white group-hover:text-[#1B262C] transition-colors">
                                Read Audit <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-white/80 text-base">
<img alt="Dr. Aris Vance" className="w-6 h-6 rounded-full border border-white/30" loading="lazy" src="https://i.pravatar.cc/100?img=33"/>
                                by Dr. Aris
                            </div>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="ledger-reports">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-xl">
<h2 className="font-serif text-4xl tracking-tight font-medium text-[#1B262C] mb-4">Archive: Ledger Reports</h2>
<p className="text-lg text-[#1B262C]/70">The latest cost-benefit analyses. See the guaranteed monthly savings before you dive into the methodology.</p>
</div>
<a className="bg-[#1B262C] text-[#D1E2C4] px-8 py-3 rounded-full text-base font-medium hover:bg-[#2D5A27] transition-colors shrink-0" href="/household-audits/">
                    View All Archives
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group flex flex-col gap-4" href="#article">
<div className="w-full h-64 rounded-[20px] overflow-hidden border border-[#1B262C]/10 bg-white relative">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#1B262C]/10 z-10 flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-[#2D5A27]" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs font-mono font-semibold text-[#1B262C]">Net Savings: <span className="text-[#2D5A27]">+$45/mo</span></span>
</div>
<img alt="Backyard composting ROI analysis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<span className="text-xs font-sans tracking-widest uppercase text-[#2D5A27] font-semibold block mb-2">Cost Analysis</span>
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] leading-snug group-hover:text-[#2D5A27] transition-colors">The true ROI of a backyard composting system</h3>
</div>
</a>

<a className="group flex flex-col gap-4" href="#article">
<div className="w-full h-64 rounded-[20px] overflow-hidden border border-[#1B262C]/10 bg-white relative">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#1B262C]/10 z-10 flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-[#2D5A27]" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs font-mono font-semibold text-[#1B262C]">Net Savings: <span className="text-[#2D5A27]">+$210/mo</span></span>
</div>
<img alt="Grocery savings habit swaps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<span className="text-xs font-sans tracking-widest uppercase text-[#2D5A27] font-semibold block mb-2">Extreme Frugality</span>
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] leading-snug group-hover:text-[#2D5A27] transition-colors">10 high-impact habit swaps that reduce grocery bills by 40%</h3>
</div>
</a>

<a className="group flex flex-col gap-4" href="#article">
<div className="w-full h-64 rounded-[20px] overflow-hidden border border-[#1B262C]/10 bg-white relative">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#1B262C]/10 z-10 flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-[#2D5A27]" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs font-mono font-semibold text-[#1B262C]">Net Savings: <span className="text-[#2D5A27]">+$18/mo</span></span>
</div>
<img alt="Eliminating paper towels math" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<span className="text-xs font-sans tracking-widest uppercase text-[#2D5A27] font-semibold block mb-2">Zero-Waste</span>
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] leading-snug group-hover:text-[#2D5A27] transition-colors">Why we stopped buying paper towels (and the math behind it)</h3>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 border-t border-[#1B262C]/10 pt-24" id="article">
<div className="flex flex-col lg:flex-row gap-16">

<article className="lg:w-2/3 max-w-[800px] lg:pr-12" id="article-body">
<div className="flex items-center gap-4 mb-6">
<span className="border border-[#1B262C]/20 rounded-full px-4 py-1 text-xs font-sans tracking-widest uppercase text-[#1B262C] font-semibold">The Listicle</span>
<span className="text-base text-[#1B262C]/60 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> 8 Min Read</span>
</div>
<h1 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-[#1B262C] leading-tight mb-8">
                        5 extreme frugality hacks that drastically cut our grocery budget
                    </h1>
<div className="prose prose-lg text-[#1B262C]/80 font-sans leading-relaxed space-y-6">
<p className="text-lg">When evaluating the return on investment for groceries, the true costs are often obscured by convenience packaging. In our latest household ledger review, we isolated the actual savings gained by transitioning to zero-waste bulk buying.</p>
<h2 className="font-serif text-3xl tracking-tight font-medium text-[#1B262C] mt-12 mb-6 flex items-baseline gap-3 border-b border-[#1B262C]/10 pb-4">
<span className="text-[#2D5A27] font-mono text-2xl font-semibold">01.</span> The 30-Day Pantry Audit
                        </h2>
<p className="text-lg">The baseline measurement was taken over a 30-day period. Our hypothesis was that eliminating single-use items would flatten the spending curve during peak inflation months.</p>

<h3 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] mt-10 mb-4">
                            Equipment Review: Countertop Composter
                        </h3>
<p className="text-lg mb-6">Before committing to the upfront cost, we ran a strict pros and cons ledger to see if this mechanical composter fit our zero-waste goals.</p>
<div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[20px] overflow-hidden border border-[#1B262C]/10 shadow-sm">
<div className="bg-white p-6 md:p-8">
<h5 className="font-serif text-xl text-[#1B262C] mb-5 flex items-center gap-2">
<iconify-icon className="text-[#2D5A27] text-2xl" icon="solar:check-circle-linear"></iconify-icon> Pros
                                </h5>
<ul className="space-y-4 text-base text-[#1B262C]/80">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#2D5A27] shrink-0" icon="solar:arrow-right-linear"></iconify-icon> 
                                        Reduces household garbage volume by 40%
                                    </li>
</ul>
</div>
<div className="bg-[#F9F9F6] p-6 md:p-8 border-t md:border-t-0 md:border-l border-[#1B262C]/10">
<h5 className="font-serif text-xl text-[#1B262C] mb-5 flex items-center gap-2">
<iconify-icon className="text-[#1B262C]/40 text-2xl" icon="solar:close-circle-linear"></iconify-icon> Cons
                                </h5>
<ul className="space-y-4 text-base text-[#1B262C]/80">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#1B262C]/40 shrink-0" icon="solar:arrow-right-linear"></iconify-icon> 
                                        High initial capital expenditure
                                    </li>
</ul>
</div>
</div>

<div className="my-12 bg-white rounded-[20px] p-8 border border-[#1B262C]/10 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#2D5A27]"></div>
<div className="flex items-center justify-between mb-2">
<h4 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] flex items-center gap-2">
<iconify-icon className="text-[#2D5A27]" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon> Interactive Ledger
                                </h4>
<span className="text-xs bg-[#D1E2C4]/50 text-[#2D5A27] px-2 py-1 rounded-full font-mono font-semibold">EDITABLE</span>
</div>
<p className="text-base text-[#1B262C]/70 mb-6">Adjust the inputs to calculate your personal payback period for replacing paper towels with Swedish dishcloths.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 bg-[#F9F9F6] p-6 rounded-[12px] border border-[#1B262C]/10">
<div className="flex flex-col">
<label className="text-xs font-sans tracking-widest uppercase text-[#1B262C]/50 block mb-2" htmlFor="initial-cost">Initial Investment ($)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-[#1B262C] font-mono">$</span>
<input className="w-full bg-white border border-[#1B262C]/20 rounded-lg pl-8 pr-4 py-2 font-mono text-lg text-[#1B262C] focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] transition-all" id="initial-cost" min="1" step="0.5" type="number" value="20"/>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs font-sans tracking-widest uppercase text-[#2D5A27] font-semibold block mb-2" htmlFor="monthly-savings">Monthly Savings ($)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-[#2D5A27] font-mono">$</span>
<input className="w-full bg-white border border-[#2D5A27]/30 rounded-lg pl-8 pr-4 py-2 font-mono text-lg text-[#2D5A27] focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] transition-all" id="monthly-savings" min="0.1" step="0.5" type="number" value="8"/>
</div>
</div>
</div>

<div className="mb-6 p-4 bg-[#D1E2C4]/40 rounded-lg border border-[#2D5A27]/20 flex items-center gap-3 transition-colors duration-300" id="payback-container">
<iconify-icon className="text-[#2D5A27] text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-mono text-sm text-[#1B262C] flex-grow">Estimated Payback Period:</span>
<strong className="text-[#2D5A27] font-mono text-xl" id="payback-result">2.5 months</strong>
</div>
</div>

<div className="mt-16 pt-10 border-t-2 border-dashed border-[#1B262C]/10">
<div className="bg-[#F9F9F6] rounded-[24px] p-8 text-center border border-[#1B262C]/10 shadow-[inset_0_0_20px_rgba(27,38,44,0.02)]">
<h4 className="font-serif text-2xl tracking-tight font-medium text-[#1B262C] mb-3">Did you make this swap?</h4>
<p className="text-base text-[#1B262C]/70 mb-6">Contribute to the Green Budget Lab's community ledger.</p>

<div className="flex items-center justify-center gap-4" id="swap-buttons">
<button className="bg-[#2D5A27] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#1B262C] transition-all transform hover:scale-105 shadow-sm" onclick="handleSwap(true)">
                                        YES, I did
                                    </button>
<button className="bg-white text-[#1B262C] border border-[#1B262C]/20 px-8 py-3 rounded-full text-base font-medium hover:bg-gray-50 transition-colors" onclick="handleSwap(false)">
                                        Not yet
                                    </button>
</div>

<div className="hidden flex flex-col items-center gap-4 animate-[fadeIn_0.5s_ease-out]" id="swap-success">
<div className="inline-flex items-center gap-2 bg-[#2D5A27]/10 text-[#2D5A27] px-4 py-1.5 rounded-full font-mono text-sm font-semibold">
<iconify-icon className="text-lg" icon="solar:verified-check-linear"></iconify-icon> Action Recorded
                                    </div>
<p className="text-lg text-[#1B262C]">You just saved another <strong className="text-[#2D5A27] text-xl font-mono" id="user-total-saved">$0.00</strong> this year!</p>
<div className="w-full max-w-sm mt-4">
<label className="text-xs font-sans tracking-widest uppercase text-[#1B262C]/50 block mb-2">Log actual monthly saving ($)</label>
<div className="flex gap-2">
<input className="w-full bg-white border border-[#1B262C]/20 rounded-lg px-4 py-2 font-mono text-base focus:outline-none focus:border-[#2D5A27]" id="actual-saving-input" placeholder="0.00" type="number"/>
<button className="bg-[#1B262C] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#2D5A27] transition-colors shrink-0" onclick="submitActualSaving()">Submit</button>
</div>
</div>
</div>
</div>
</div>
</div>
</article>

<aside className="lg:w-1/3 relative hidden lg:block">
<div className="sticky top-28 flex flex-col gap-8">
<div className="p-8 border border-[#1B262C]/10 rounded-[20px] bg-white shadow-sm">
<div className="flex items-center gap-4 mb-4">
<img alt="Dr. Aris Vance" className="w-16 h-16 rounded-full border-2 border-[#2D5A27] p-0.5" loading="lazy" src="https://i.pravatar.cc/150?img=33"/>
<div>
<h4 className="font-serif text-xl font-medium text-[#1B262C]">Dr. Aris Vance</h4>
<p className="text-base text-[#2D5A27]">Chief Auditor</p>
</div>
</div>
<p className="text-base text-[#1B262C]/70 mb-6">Quantifying extreme frugality through rigorous ledger tracking and lifestyle design.</p>
<a className="text-base font-medium text-[#1B262C] hover:text-[#2D5A27] transition-colors flex items-center gap-1 border-b border-[#1B262C]/20 pb-1 inline-flex w-fit" href="#">
                                View Author Ledger <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</aside>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#1B262C]/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2 flex flex-col gap-6">
<a className="font-serif text-2xl tracking-tight font-medium flex items-center gap-2 text-[#1B262C]" href="/">
<iconify-icon className="text-[#2D5A27]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                        Green Budget Lab.
                    </a>
<div className="flex flex-col gap-2 text-base font-mono text-[#1B262C]/70">
<a className="hover:text-[#2D5A27] transition-colors" href="mailto:hello@greenbudget.com">hello@greenbudget.com</a>
<span>Auditing Since 2024</span>
</div>
</div>
<div className="flex flex-col gap-6">
<h5 className="text-xs font-sans tracking-widest uppercase text-[#1B262C] font-semibold">HQ Ledger</h5>
<div className="flex flex-col gap-4 text-base text-[#1B262C]/70">
<p>1280 Thrift Ave, Suite 4,<br/>Portland, OR 97204</p>
</div>
</div>
<div className="flex flex-col gap-6">
<h5 className="text-xs font-sans tracking-widest uppercase text-[#1B262C] font-semibold">Categories</h5>
<nav className="flex flex-col gap-4 text-base text-[#1B262C]/70">
<a className="hover:text-[#1B262C] transition-colors" href="/household-audits/">Household Audits</a>
<a className="hover:text-[#1B262C] transition-colors" href="/zero-waste-swaps/">Zero-Waste Swaps</a>
<a className="hover:text-[#1B262C] transition-colors" href="/frugality-guides/">Extreme Frugality</a>
</nav>
</div>
<div className="flex flex-col gap-6">
<h5 className="text-xs font-sans tracking-widest uppercase text-[#1B262C] font-semibold">Legal &amp; Trust</h5>
<nav className="flex flex-col gap-4 text-base text-[#1B262C]/70">
<a className="hover:text-[#1B262C] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#1B262C] transition-colors" href="#">Affiliate Disclosure</a>
<a className="hover:text-[#1B262C] transition-colors" href="#">Contact</a>
</nav>
</div>
</div>

<div className="p-4 bg-[#F9F9F6] border border-[#1B262C]/10 rounded-lg mb-8 text-sm text-[#1B262C]/60 italic font-serif">
<span className="font-sans font-semibold text-[#1B262C]/80 not-italic uppercase text-xs tracking-widest block mb-1">Disclaimer</span>
                Calculations are estimates based on average US household data. Your results may vary. Content is for informational purposes and does not constitute financial advice.
            </div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1B262C]/10 text-base text-[#1B262C]/50">
<p>© 2024 Green Budget Lab. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-[#1B262C] transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center px-4 sm:px-0" id="newsletter-modal">
<div className="absolute inset-0 bg-[#1B262C]/60 backdrop-blur-sm" onclick="toggleModal('newsletter-modal')"></div>
<div className="bg-[#1B262C] w-full max-w-xl rounded-[32px] p-8 md:p-12 text-center relative z-10 shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 120%, #D1E2C4 0%, transparent 60%)'}}></div>
<button className="absolute top-6 right-6 text-[#D1E2C4]/50 hover:text-white transition-colors" onclick="toggleModal('newsletter-modal')">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<iconify-icon className="text-5xl text-[#D1E2C4] mb-4 mx-auto" icon="solar:letter-opened-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">
                Get the monthly <span className="text-[#2D5A27] bg-[#D1E2C4] px-2 rounded-sm italic">ledger</span>
</h2>
<p className="text-base md:text-lg text-[#D1E2C4]/70 mb-8">Join our community of rigorous savers. We send out real household budgets, zero-waste swaps, and extreme frugality tips every Tuesday.</p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); toggleModal('newsletter-modal'); alert('Subscribed to the Ledger!');">
<input className="w-full bg-white/5 border border-[#D1E2C4]/20 rounded-xl px-6 py-4 text-base text-white placeholder-[#D1E2C4]/40 focus:outline-none focus:border-[#D1E2C4] transition-colors font-mono text-center" placeholder="Email Address*" required="" type="email"/>
<button className="w-full bg-[#D1E2C4] text-[#1B262C] rounded-xl px-6 py-4 text-base font-semibold hover:bg-[#2D5A27] hover:text-white transition-colors" type="submit">
                    Access The Data
                </button>
</form>
<p className="text-xs text-[#D1E2C4]/40 mt-4 font-mono">No spam. Unsubscribe at any time.</p>
</div>
</div>



    </>
  );
}
