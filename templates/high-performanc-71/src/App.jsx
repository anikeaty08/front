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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Calculator Logic
        document.addEventListener('DOMContentLoaded', () => {
            const incomeInput = document.getElementById('income-range');
            const savingsInput = document.getElementById('savings-range');
            
            const incomeValDisplay = document.getElementById('income-val');
            const savingsValDisplay = document.getElementById('savings-val');
            const tradResultDisplay = document.getElementById('trad-result');
            const variantResultDisplay = document.getElementById('variant-result');
            const diffResultDisplay = document.getElementById('diff-result');

            function formatCurrency(num) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            function updateCalculator() {
                const income = parseInt(incomeInput.value);
                const savings = parseInt(savingsInput.value);

                // Update input displays
                incomeValDisplay.textContent = formatCurrency(income);
                savingsValDisplay.textContent = formatCurrency(savings);

                // Calculations
                // Traditional: Roughly 4.5x income + savings
                const tradAmount = Math.floor((income * 4.5) + savings);
                
                // Variant: Co-investment boosts power. Approx 40% boost on borrowing capacity or higher multiplier
                // Simplified: (Income * 4.5) * 1.4 + Savings
                const variantAmount = Math.floor((income * 4.5 * 1.4) + savings);
                
                const difference = variantAmount - tradAmount;

                // Update results
                tradResultDisplay.textContent = formatCurrency(tradAmount);
                variantResultDisplay.textContent = formatCurrency(variantAmount);
                diffResultDisplay.textContent = formatCurrency(difference);
            }

            incomeInput.addEventListener('input', updateCalculator);
            savingsInput.addEventListener('input', updateCalculator);
            
            // Initial calculation
            updateCalculator();
        });

        // Form Logic
        function submitLeadMagnet(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.textContent = 'Processing...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Sent to Inbox';
                btn.style.backgroundColor = '#065f46';
                btn.style.color = '#fff';
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = 'SEND ME THE REPORT <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>';
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2500);
            }, 1000);
        }

        function submitProjectForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'APPLICATION RECEIVED';
                btn.style.backgroundColor = '#059669';
                btn.style.color = '#fff';
                status.classList.remove('hidden');
                status.innerHTML = '<span class="text-emerald-600">Success. We will review your application within 24 hours.</span>';
                e.target.reset();
            }, 1500);
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none" style={{filter: 'invert(1) opacity(0.6) saturate(1.2)'}}>
<div className="absolute w-full h-full left-0 top-0" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>


<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-neutral-900 w-3 h-3"></div>
<span className="text-sm font-medium text-neutral-900 tracking-tight">VARIANT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#process">PROCESS</a>
<a className="hover:text-neutral-900 transition-colors" href="#calculator">CALCULATOR</a>
<a className="hover:text-neutral-900 transition-colors" href="#solutions">SOLUTIONS</a>
<a className="hover:text-neutral-900 transition-colors" href="#audit">FREE AUDIT</a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300" href="#contact">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="hidden sm:inline text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Start Project</span>
<span className="sm:hidden text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">Start</span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 sm:px-6 max-w-6xl z-10 mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full animate-in animate-in-delay-1 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-amber-400 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-[10px] uppercase font-medium text-amber-400 tracking-wide">Pilot launch soon</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-neutral-900 tracking-tighter">Own. Together. Smarter.<br/> <span className="text-4xl text-neutral-400 px--">A smarter way to buy a home, without doing it alone.</span></h1>
<p className="md:text-base leading-relaxed animate-in animate-in-delay-2 text-sm font-light text-neutral-500 max-w-xl">MI co-invests alongside you, lowering the barrier to homeownership.
No extra debt. No hidden incentives. Just aligned interests.</p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6" href="#contact">
                        START YOUR PROJECT
                    </a>
</div>

<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 w-full sm:w-auto shadow-sm hover:from-neutral-300 hover:to-neutral-400 transition-all">
<a className="hover:text-black transition-colors flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 text-center bg-white/90 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-sm" href="#audit">
<svg className="" data-icon-set="lucide" data-lucide="file-bar-chart-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3"></path></g></svg>
                        GET FREE SITE AUDIT
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

<div className="relative z-30 mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 animate-in animate-in-delay-3 bg-white/60 backdrop-blur-sm">
<div className="p-4 sm:p-8 border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1" style={{}}>Up to 40%</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">That we will co-invest</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">0% interest</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">No extra debt</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-200 text-center">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">Regulated</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">By Dutch law</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-200">
<div className="sm:text-2xl md:text-3xl text-xl font-medium text-neutral-900 tracking-tighter mb-1">Only for starters</div>
<div className="text-[9px] sm:text-[10px] uppercase text-neutral-500 tracking-widest font-mono">To get them on the market quicker</div>
</div>
</div>
</main>

<section className="py-12 border-b border-neutral-200 bg-white relative overflow-hidden pause-on-hover">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-scroll hover:pause">

<div className="flex items-center gap-16 px-8 min-w-max">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Acme Corp</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Prism</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<span className="font-semibold tracking-tight text-lg">Command</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span className="font-semibold tracking-tight text-lg">Pulse</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="font-semibold tracking-tight text-lg">Block</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Global</span>
</div>
</div>

<div className="flex items-center gap-16 px-8 min-w-max">
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Acme Corp</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Prism</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
<span className="font-semibold tracking-tight text-lg">Command</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span className="font-semibold tracking-tight text-lg">Pulse</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="font-semibold tracking-tight text-lg">Block</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300">
<svg className="lucide lucide-globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span className="font-semibold tracking-tight text-lg">Global</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                The Current State
            </h2>
<h3 className="sm:text-3xl md:text-4xl sm:mb-12 text-2xl font-medium text-neutral-900 tracking-tighter mb-8" style={{}}>Why the "Old Way" is failing your equity.</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-orange-500 shadow-sm">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="door-closed" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path><path d="M2 20h20"></path><path d="M14 12v.01"></path></svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">A Closed Door to Ownership</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">The housing market increasingly rewards those who already own.
Starters rent longer, paying monthly without building equity of their own.</p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 sm:mb-6 text-red-500 shadow-sm">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="euro" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12"></path><path d="M4 14h9"></path><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path></svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2" style={{}}>The Equity Gap</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">Incomes tend to rise gradually. Home prices don’t. Over time, the gap between what people earn and what homes cost keeps widening.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-neutral-50 relative z-10" id="calculator">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                    Power Calculator
                </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">See your new purchasing power.</h3>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white rounded-[1px] flex flex-col md:flex-row">

<div className="w-full md:w-1/2 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-neutral-100">
<div className="space-y-8">

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Annual Income</label>
<div className="font-medium text-neutral-900 text-sm">€<span id="income-val">45,000</span></div>
</div>
<input className="w-full" id="income-range" max="150000" min="30000" step="1000" type="range" value="45000"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>€30k</span>
<span>€150k</span>
</div>
</div>

<div>
<div className="flex justify-between items-baseline mb-3">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Savings Available</label>
<div className="font-medium text-neutral-900 text-sm">€<span id="savings-val">15,000</span></div>
</div>
<input className="w-full" id="savings-range" max="100000" min="0" step="1000" type="range" value="15000"/>
<div className="flex justify-between text-[10px] text-neutral-400 mt-2 font-mono">
<span>€0</span>
<span>€100k</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-6 sm:p-8 bg-neutral-50/50 flex flex-col justify-center">
<div className="mb-6 pb-6 border-b border-neutral-200">
<span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">Standard Bank Limit</span>
<div className="text-2xl font-medium text-neutral-400 tracking-tight">€<span id="trad-result">202,500</span></div>
</div>
<div>
<span className="block text-[10px] font-mono uppercase text-emerald-600 mb-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                With Variant
                            </span>
<div className="text-4xl font-semibold text-neutral-900 tracking-tighter mb-2">€<span id="variant-result">283,500</span></div>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                                You unlock <span className="text-emerald-600 font-medium">+€<span id="diff-result">81,000</span></span> in purchasing power without increasing your monthly debt obligations.
                            </p>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-neutral-400 text-center mt-4">Estimates only. Subject to official financial assessment.</p>
</div>
</section>

<section className="sm:py-24 bg-white z-10 pt-16 pb-16 relative" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-200 pb-6 sm:pb-8">
<div className="">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        Our Process
                    </h2>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tighter sm:text-2xl">We make home ownership possible. Step by step.</h3>
</div>
<p className="text-xs font-light text-neutral-500 max-w-md sm:text-xs">MI is designed to work alongside the existing housing and financial system - not around it.
Each step is transparent, compliant, and built for long-term ownership.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">01 / ASSESS</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Understand Your Buying Power</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">We start with your situation - income, savings, and the homes you’re considering.
This defines what’s possible today, and where shared equity can help.</p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">02 / CO-INVEST</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Buy Together</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">MI co-invests in the home with you at purchase. You become the 100% homeowner. We share in the equity - so you can buy your dream home.</p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="sm:mb-6 inline-block text-xs text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">03 / GROW</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">Build Equity Over Time</h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">As the home grows in value, so does your ownership.
You can buy out MI over time, or settle when you sell.
Simple, aligned, and long-term by design.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-24 z-10 bg-white border-neutral-200 border-b pt-16 pb-16 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-200 pb-6 sm:pb-8">
<h2 className="sm:text-3xl md:text-4xl leading-[1.1] text-2xl font-medium text-neutral-900 tracking-tight max-w-2xl">Helping starters enter the <span className="text-neutral-400">housing market</span> three years earlier.</h2>
<a className="flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-emerald-500 hover:text-emerald-600 transition-colors" href="#contact">
                    Start a Project
                    <svg className="" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="sm:p-8 flex flex-col min-h-[320px] z-10 bg-neutral-50 h-full rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
<h3 className="sm:text-lg leading-tight text-base font-medium text-neutral-900 tracking-tight mb-4">"Buying later has become the norm."</h3>
<p className="leading-relaxed sm:text-sm text-xs font-light text-neutral-500">"More people are financially ready to buy,
yet ownership keeps moving out of reach.
The gap isn’t confidence - it’s structure."</p>
</div>
<div className="mt-6 border-t border-neutral-200 pt-4">
<div className="flex items-center gap-3">
<div className="flex text-sm font-medium text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center">FF</div>
<div className="">
<div className="leading-none text-sm font-medium text-neutral-900 mb-1">Ference Feenstra</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-wider font-mono" style={{}}>co-Founder</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 transition-all duration-300 h-full">
<div className="bg-neutral-50 p-6 sm:p-8 rounded-[1px] flex flex-col items-center justify-between min-h-[320px] h-full relative z-10">
<div className="text-center">
<span className="uppercase block text-xs text-neutral-500 tracking-widest font-mono mb-2" style={{}}>OWNERSHIP MODEL</span>
<span className="text-sm font-medium text-neutral-900 tracking-tight">Shared Equity</span>
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="border-neutral-200 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-3xl font-medium text-neutral-900 tracking-tighter">98/100</div>
</div>
<button className="w-full bg-white border border-neutral-200 text-neutral-900 text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-100 transition-colors">
                            VIEW CASE STUDY
                        </button>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-700 sm:col-span-2 lg:col-span-1 h-full">
<div className="flex flex-col bg-neutral-900 min-h-[320px] h-full rounded-[1px] p-6 sm:p-8 justify-between relative z-10">
<div className="flex justify-between items-start text-white">
<span className="sm:text-lg text-base font-medium tracking-tight">Start Exploring</span>
<svg className="text-neutral-500" data-icon-set="lucide" data-lucide="arrow-up-right" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="leading-relaxed text-base font-light text-neutral-300">Whether you’re actively looking or just curious,
MI helps you understand what’s possible - clearly and calmly.</p>
<div className="text-sm text-neutral-400 space-y-3">
<a className="hover:text-white transition-colors flex gap-x-3 items-center text-sm text-neutral-300" href="/mailto:hello@mi.com">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                                hello@variant.sys
                            </a>
<div className="flex gap-2 text-sm text-neutral-300 gap-x-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                                +1 (555) 019-2834
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative z-10" id="audit">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1px]">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-sm mb-4 sm:mb-6">
<svg className="text-emerald-600" data-icon-set="lucide" data-lucide="unlock" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></g></svg>
<span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider">Free Access</span>
</div>
<h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight mb-4">Unlock Your Competitor Intelligence Report</h2>
<p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                                Don't redesign your site blindly. Enter your email to get a free checklist of what your top 3 competitors are doing right.
                            </p>
<ul className="space-y-2 mb-6 sm:mb-8">
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Speed &amp; Performance Benchmarks
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Conversion Funnel Analysis
                                </li>
<li className="flex items-center gap-3 text-xs text-neutral-600">
<svg className="text-emerald-500" data-icon-set="lucide" data-lucide="check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    SEO Gap Identification
                                </li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitLeadMagnet(event)">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-email">Work Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-url">Company Website</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-400" id="lm-url" placeholder="https://yourcompany.com" required="" type="url"/>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm">
<button className="w-full bg-neutral-900 text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" type="submit">
                                        SEND ME THE REPORT
                                        <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="text-[10px] text-neutral-400 text-center">Zero spam. 100% Value.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white relative z-10" id="solutions">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Deployment Options</h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter">Simple, transparent pricing.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col sm:p-8 bg-neutral-50 h-full z-10 rounded-[1px] pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-emerald-600 shadow-sm">
<svg className="" data-icon-set="lucide" data-lucide="search" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">AUDIT</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">The Competitor Audit</h3>
<p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                            Best for businesses who aren't ready to rebuild but want answers. Get a comprehensive analysis of your competitive landscape.
                        </p>
<ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Top 3 Competitor Analysis
                            </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Actionable Recommendations
                            </li>
</ul>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-300 h-full">
<div className="flex flex-col p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-sm flex items-center justify-center text-purple-600 shadow-sm">
<svg className="" data-icon-set="lucide" data-lucide="layers" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="text-[10px] font-mono border border-neutral-200 px-2 py-1 rounded-sm text-neutral-500 bg-white">ENTERPRISE</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight mb-2">The Full System Architecture</h3>
<p className="text-xs text-neutral-500 font-light mb-6 leading-relaxed">
                            Complete multi-page digital infrastructure. CMS integration, analytics dashboard setup, and advanced SEO foundation.
                        </p>
<ul className="space-y-2 mt-auto border-t border-neutral-200 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> 5-Page Structure
                            </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span> Analytics Dashboard
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t border-neutral-200 bg-white relative z-10" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">Secure Your Slot</h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 tracking-tighter mb-4">
                    Ready to stop guessing?
                </h3>
<p className="text-neutral-500 text-xs sm:text-sm font-light">
                    We limit our active builds to ensure we hit our 72-hour delivery standard.
                </p>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<form className="space-y-4 sm:space-y-6 bg-neutral-50 p-6 sm:p-8 rounded-[1px]" id="projectForm" onsubmit="submitProjectForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Full Name</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Work Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Company Website (Optional)</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="website" placeholder="https://" type="url"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Estimated Budget</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600" name="budget" required="">
<option disabled="" selected="" value="">Select Range</option>
<option value="1.5k-5k">$1,500 - $5,000</option>
<option value="5k-10k">$5,000 - $10,000</option>
<option value="10k+">$10,000+</option>
</select>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Timeline</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-600" name="timeline" required="">
<option disabled="" selected="" value="">Select Timeline</option>
<option value="asap">ASAP</option>
<option value="1month">Within 1 Month</option>
<option value="quarter">This Quarter</option>
</select>
</div>
</div>
<div className="">
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Primary Pain Point</label>
<textarea className="w-full input-base px-3 py-3 rounded-sm text-sm" name="message" placeholder="What is wrong with your current site?" required="" rows="4"></textarea>
</div>
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-sm mt-4">
<button className="w-full bg-neutral-900 text-white py-4 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2" id="submitBtn" type="submit">
                            SUBMIT APPLICATION
                            <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="hidden text-center text-xs mt-4" id="formStatus"></div>
</form>
</div>
</div>
</section>

<footer className="bg-white py-8 sm:py-12 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-900"></div>
<span>Variant Systems © 2025</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Systems Operational
            </div>
</div>
</footer>



    </>
  );
}
