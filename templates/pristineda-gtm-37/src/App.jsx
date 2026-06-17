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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
slate: {
850: '#152033',
950: '#020617', // Deeper black for dark mode
},
brand: {
red: '#F43F5E',
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
tight: '-.025em',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(37, 99, 235, 0.1)',
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // THEME TOGGLE LOGIC
            const toggleButton = document.getElementById('theme-toggle');
            const html = document.documentElement;

            // Check system preference on load
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }

            toggleButton.addEventListener('click', () => {
                if (html.classList.contains('dark')) {
                    html.classList.remove('dark');
                    localStorage.theme = 'light';
                } else {
                    html.classList.add('dark');
                    localStorage.theme = 'dark';
                }
            });

            // TYPEWRITER EFFECT
            const el = document.getElementById('prompt');
            const tabPeople = document.getElementById('tab-people');
            const tabCompany = document.getElementById('tab-company');

            const peoplePhrases = [
                "Find CMOs at Series A companies with $10M+ ARR...",
                "Search for VPs of Sales in London...",
                "Find React Engineers with 5+ years experience...",
                "Show me Founders who recently raised funds...",
                "Find Marketing Directors using HubSpot..."
            ];

            const companyPhrases = [
                "Show me SaaS startups in San Francisco...",
                "List e-commerce brands using Shopify Plus...",
                "Find B2B fintech companies with $50M+ funding...",
                "Show me companies hiring for Enterprise Sales...",
                "List healthcare companies in New York..."
            ];

            let activePhrases = peoplePhrases;
            let i = 0;
            let j = 0;
            let currentPhrase = [];
            let isDeleting = false;
            let isEnd = false;
            let timeoutId = null;

            function loop() {
                isEnd = false;
                
                if (i < activePhrases.length) {
                    if (!isDeleting && j <= activePhrases[i].length) {
                        currentPhrase.push(activePhrases[i][j]);
                        j++;
                        el.setAttribute('placeholder', currentPhrase.join(''));
                    }

                    if(isDeleting && j <= activePhrases[i].length) {
                        currentPhrase.pop(activePhrases[i][j]);
                        j--;
                        el.setAttribute('placeholder', currentPhrase.join(''));
                    }

                    if (j == activePhrases[i].length) {
                        isEnd = true;
                        isDeleting = true;
                    }

                    if (isDeleting && j === 0) {
                        currentPhrase = [];
                        isDeleting = false;
                        i++;
                        if (i === activePhrases.length) {
                            i = 0;
                        }
                    }
                }
                const speed = isEnd ? 2000 : isDeleting ? 30 : 50;
                timeoutId = setTimeout(loop, speed);
            }

            function resetLoop(newPhrases) {
                clearTimeout(timeoutId);
                activePhrases = newPhrases;
                i = 0;
                j = 0;
                currentPhrase = [];
                isDeleting = false;
                isEnd = false;
                el.setAttribute('placeholder', '');
                loop();
            }

            // Event Listeners for Toggles
            tabPeople.addEventListener('change', () => {
                if(tabPeople.checked) resetLoop(peoplePhrases);
            });

            tabCompany.addEventListener('change', () => {
                if(tabCompany.checked) resetLoop(companyPhrases);
            });

            // Start loop
            loop();
        });
    
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
      

<nav className="fixed w-full z-50 transition-all duration-300 top-0 glass-nav bg-white/80 dark:bg-slate-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 rounded-md bg-slate-800 text-white flex items-center justify-center border border-transparent dark:border-slate-700">
<iconify-icon icon="solar:database-bold" width="14"></iconify-icon>
</div>

<span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white">PristineData</span>
</a>

<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Data Scale</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Resources</a>
</div>
</div>
<div className="flex items-center gap-3">

<button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-2" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="16"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="16"></iconify-icon>
</button>
<a className="hidden md:block hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-semibold text-slate-600 dark:text-slate-400" href="#">Log in</a>
<a className="px-3.5 py-1.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-xs font-semibold rounded-lg transition-all shadow-sm" href="#">
                    Book a Demo
                </a>
</div>
</div>
</nav>

<section className="min-h-[600px] flex overflow-hidden h-[80vh] pt-16 relative items-center justify-center">

<div className="absolute inset-0 grid-bg opacity-40 dark:opacity-10 pointer-events-none -z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-950/50 dark:to-slate-950 pointer-events-none -z-10"></div>
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-50/50 dark:bg-rose-900/10 rounded-full blur-[80px] -z-10 opacity-60"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[80px] -z-10 opacity-60"></div>
<div className="z-10 flex flex-col text-center w-full max-w-4xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex gap-1.5 dark:bg-slate-900 dark:border-slate-800 transition-transform hover:scale-105 cursor-default bg-white border-slate-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-sm gap-x-1.5 gap-y-1.5 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
</span>

<span className="text-[10px] uppercase dark:text-slate-300 font-semibold text-slate-600 tracking-wider">largest coverage in the category - 700M+ Contacts</span>
</div>

<h1 className="md:text-6xl leading-[1.15] dark:text-white text-4xl font-semibold text-slate-950 tracking-tighter mb-4">Your Entire Revenue Stack. <br className="hidden md:block"/> One AI-Powered Platform.</h1>

<p className="leading-relaxed dark:text-slate-400 text-base font-medium text-slate-700 max-w-lg mr-auto mb-10 ml-auto">Find prospects, enrich data, and run outreach — all in one place. Stop paying for ZoomInfo, Amplemarket, and OpenAI separately.</p>

<div className="relative w-full max-w-2xl mx-auto group">

<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 ring-4 ring-slate-50/50 dark:ring-slate-800/20">
<form className="flex flex-col">

<div className="pt-4 pr-4 pb-2 pl-4">
<label className="sr-only" htmlFor="prompt">Search</label>
<div className="relative flex items-start gap-3">
<div className="mt-1 text-slate-400 dark:text-slate-500">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>

<textarea className="placeholder:text-slate-400 dark:placeholder:text-slate-600 border-none resize-none leading-relaxed text-lg font-medium text-slate-600 dark:text-slate-200 bg-transparent w-full pt-0 pr-0 pb-0 pl-0" id="prompt" placeholder="F" rows="2"></textarea>
</div>
</div>

<div className="px-4 pb-4 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-transparent sm:border-slate-50 dark:sm:border-slate-800">

<div className="flex items-center gap-1 p-0.5 bg-slate-100/80 dark:bg-slate-800 rounded-lg self-start sm:self-center">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" id="tab-people" name="search_type" type="radio"/>
<div className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-800 dark:peer-checked:text-white peer-checked:shadow-sm transition-all flex items-center gap-1.5">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> People
                                    </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" id="tab-company" name="search_type" type="radio"/>
<div className="peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-slate-800 dark:peer-checked:text-white peer-checked:shadow-sm transition-all flex gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon icon="solar:buildings-2-linear" width="14"></iconify-icon> Company
                                    </div>
</label>
</div>

<button className="sm:w-auto hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 shadow-slate-900/10 dark:shadow-none transition-all hover:translate-y-px active:translate-y-0.5 flex gap-2 text-xs font-semibold text-white bg-slate-900 w-full rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/contact'" type="button">
    Generate Leads
    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

<div className="mt-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<p className="text-[10px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-4 text-center">Trusted by</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
<span className="text-sm font-bold font-sans text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><iconify-icon className="" icon="solar:bolt-bold" width="16"></iconify-icon> Acme</span>
<span className="text-sm font-bold font-sans text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><iconify-icon icon="solar:layers-minimalistic-bold" width="16"></iconify-icon> Stack</span>
<span className="text-sm font-bold font-sans text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><iconify-icon className="" icon="solar:atom-bold" width="16"></iconify-icon> Nucleus</span>
<span className="text-sm font-bold font-sans text-slate-600 dark:text-slate-400 flex items-center gap-1.5"><iconify-icon className="" icon="solar:infinity-bold" width="16"></iconify-icon> Vaudit</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-slate-900 dark:bg-slate-900/50 pt-24 pb-24 relative border-t border-b border-transparent dark:border-slate-800">
<div className="absolute inset-0 grid-bg-dark opacity-20 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-900 dark:from-slate-950 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900 dark:from-slate-950 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-8 text-indigo-400">
<iconify-icon icon="solar:global-circle-bold" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">Unrivaled Scale</span>
</div>

<div className="grid grid-cols-2 gap-8 mb-10">
<div className="relative group">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-2">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">700M+</span>
</h2>
<p className="text-white text-xl md:text-2xl font-medium tracking-tight group-hover:text-indigo-200 transition-colors">Contacts.</p>
</div>
<div className="relative group">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-2">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">90%</span>
</h2>
<p className="md:text-2xl group-hover:text-emerald-200 transition-colors text-xl font-medium text-white tracking-tight">Accuracy.</p>
</div>
</div>

<p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md border-l-2 border-slate-800 pl-6">
                        The world's largest database meets the highest accuracy standards. While others offer stale data, we offer verified reality at scale.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-sm font-medium text-slate-300">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 border border-slate-700 shadow-sm shadow-indigo-500/10">
<iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<span className="">Global Coverage (700M+)</span>
</div>
<div className="flex items-center gap-4 text-sm font-medium text-slate-300">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 border border-slate-700 shadow-sm shadow-emerald-500/10">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="">Real-time Verification Engine</span>
</div>
</div>
</div>

<div className="relative perspective-midrange group">

<div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full translate-x-10 translate-y-10 group-hover:bg-indigo-500/30 transition-all duration-700"></div>

<div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:rotate-y-5 hover:rotate-x-5 transform-style-preserve-3d">

<div className="flex justify-between items-center mb-8 border-b border-slate-700/50 pb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="text-sm font-semibold text-slate-200">Validation Log</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wide shadow-[0_0_10px_rgba(99,102,241,0.2)]">Scanning Live</span>
</div>

<div className="space-y-3">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<div className="text-sm text-slate-200 font-mono">alex.m@stripe.com</div>
</div>
<div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon> VALID
                                </div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30 opacity-80">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<div className="text-sm text-slate-200 font-mono">j.doe@uber.com</div>
</div>
<div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon> VALID
                                </div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/20 border border-slate-700/20 opacity-50">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
<div className="text-sm text-slate-400 font-mono line-through">sarah@deadstartup.io</div>
</div>
<div className="text-[10px] font-bold text-brand-red font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:close-circle-linear" width="12"></iconify-icon> BOUNCE
                                </div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/10 border border-slate-700/10 opacity-30">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="text-sm text-slate-200 font-mono">mike@vercel.com</div>
</div>
<div className="text-[10px] font-bold text-emerald-400 font-mono flex items-center gap-1.5">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon> VERIFYING...
                                </div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-slate-700/50 grid grid-cols-2 gap-4">
<div className="text-center md:text-left">
<div className="text-2xl font-bold text-white mb-1 tracking-tight">712M</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Total Records</div>
</div>
<div className="text-center md:text-right">
<div className="text-2xl font-bold text-emerald-400 mb-1 tracking-tight">98.2%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Deliverability</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 border-b pt-24 pb-24 relative">
<div className="absolute inset-0 grid-bg opacity-30 dark:opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16 max-w-3xl mx-auto">

<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4">
                    Stop building "Franken-stacks"
                </h2>

<p className="leading-relaxed md:text-lg text-base text-slate-700 dark:text-slate-400">
                    Connecting disparate tools like ZoomInfo, Clay, Amplemarket, and Smartlead is expensive and brittle. Reduce or eliminate GTM engineering.
                </p>
</div>

<div className="flex flex-col gap-12">

<div className="relative bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 overflow-hidden shadow-sm">
<div className="dark:bg-slate-800 dark:border-slate-800 text-[10px] dark:text-slate-400 uppercase font-bold text-slate-500 tracking-widest bg-slate-200/50 border-slate-200/50 rounded-br-2xl border-r border-b pt-2 pr-4 pb-2 pl-4 absolute top-0 left-0">
                        The "Modern" Stack (Fragmented)
                    </div>
<div className="w-full py-6 px-4">
<div className="flex flex-col xl:flex-row items-stretch justify-center gap-6 w-full max-w-7xl mx-auto px-4 py-2">

<div className="flex flex-col gap-3 w-full xl:w-64 shrink-0">
<div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-1 text-center xl:text-left">Input Sources</div>

<div className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-900/40 hover:border-amber-300 rounded-xl p-3 flex items-center justify-between shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 group cursor-default">
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 leading-tight">Event Data</span>
<span className="text-[10px] dark:text-amber-400 font-medium text-amber-600/80">Conference &amp; Webinar</span>
</div>
<div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 ml-2 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/60 transition-colors">
<iconify-icon icon="solar:ticket-bold" width="14"></iconify-icon>
</div>
</div>

<div className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-900/40 hover:border-amber-300 rounded-xl p-3 flex items-center justify-between shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 group cursor-default">
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 leading-tight">Competitor Customers</span>
<span className="text-[10px] dark:text-amber-400 font-medium text-amber-600/80">Technographics</span>
</div>
<div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 ml-2 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/60 transition-colors">
<iconify-icon icon="solar:shield-warning-bold" width="14"></iconify-icon>
</div>
</div>

<div className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/60 dark:border-amber-900/40 hover:border-amber-300 rounded-xl p-3 flex items-center justify-between shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 group cursor-default">
<div className="flex flex-col">
<span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 leading-tight">Intent Signals</span>
<span className="text-[10px] dark:text-amber-400 font-medium text-amber-600/80">ZoomInfo / LinkedIn</span>
</div>
<div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 ml-2 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/60 transition-colors">
<iconify-icon icon="solar:users-group-rounded-bold" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-center text-slate-300 dark:text-slate-600 xl:self-center py-2 xl:py-0">
<iconify-icon className="hidden xl:block text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
<iconify-icon className="xl:hidden text-2xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="flex-1 w-full bg-slate-50/80 dark:bg-slate-800/20 rounded-2xl border border-slate-200 dark:border-slate-800 border-dashed p-4 md:p-5 relative group">
<div className="absolute -top-2.5 left-4 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-400 text-[9px] font-bold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 uppercase tracking-widest shadow-sm">Expensive Engineering</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full">

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">Data Normalisation</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:database-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Clay</span>
</div>
</div>

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">ICP Qualification</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">OpenAI</span>
</div>
</div>

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">Deep Research</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:magnifer-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Perplexity</span>
</div>
</div>

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">Buying Committee</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:users-group-rounded-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">ZoomInfo</span>
</div>
</div>

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">Verify Contact</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:shield-check-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Amplemarket</span>
</div>
</div>

<div className="bg-white dark:bg-slate-800/80 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between gap-2 h-24">
<span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center">Account Journey</span>
<div className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-md py-1 px-2 w-full mt-auto">
<iconify-icon className="text-indigo-500" icon="solar:graph-new-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Gemini</span>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center text-slate-300 dark:text-slate-600 xl:self-center py-2 xl:py-0">
<iconify-icon className="hidden xl:block text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
<iconify-icon className="xl:hidden text-2xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="flex flex-col gap-3 w-full xl:w-64 shrink-0">
<div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-1 text-center xl:text-left">Destinations</div>

<div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-900/40 hover:border-blue-300 rounded-xl p-3 shadow-sm flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:flag-bold" width="14"></iconify-icon>
</div>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Competitor Takeout</span>
</div>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">Steal revenue from competitors</span>
</div>

<div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-900/40 hover:border-blue-300 rounded-xl p-3 shadow-sm flex flex-col gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:plain-bold" width="14"></iconify-icon>
</div>
<span className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Event Outreach</span>
</div>
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">Engage event attendees instantly</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-900 rounded-3xl p-1 md:p-1 overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-1000"></div>
<div className="md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 bg-slate-900 rounded-[22px] pt-8 pr-8 pb-8 pl-8 relative gap-x-8 gap-y-8 items-center justify-between">

<div className="absolute top-0 left-0 px-6 py-2 bg-slate-800 rounded-br-2xl text-[10px] font-bold text-indigo-400 uppercase tracking-widest border-r border-b border-slate-700">
                            The Pristine Way
                        </div>

<div className="flex flex-col gap-3 w-full md:w-auto relative z-10">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 text-slate-300 rounded-xl p-4 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-slate-800 flex items-center justify-center text-amber-600 text-[10px]"><iconify-icon icon="solar:ticket-bold"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-slate-800 flex items-center justify-center text-blue-600 text-[10px]"><iconify-icon icon="solar:shield-warning-bold"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-indigo-100 border-2 border-slate-800 flex items-center justify-center text-indigo-600 text-[10px]"><iconify-icon icon="solar:global-bold"></iconify-icon></div>
</div>
<span className="text-sm font-semibold">Events &amp; Competitors</span>
</div>
</div>

<div className="hidden md:flex flex-1 items-center justify-center relative">
<div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
<div className="animate-pulse-slow text-indigo-400 bg-slate-900 border-slate-700 border rounded-full pt-2 pr-2 pb-2 pl-2 absolute shadow-[0_0_20px_rgba(99,102,241,0.3)] items-center justify-center">
<svg className="" data-icon-set="solar" data-solar="magic-stick-3-bold" height="20" style={{color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51l.038-.04l4-4l.04-.038l-1.588-1.587a2.883 2.883 0 0 0-4.077 0m6.723 2.645l-.038.04l-4 4l-.04.038l9.588 9.588a2.884 2.884 0 0 0 4.078-4.078zM16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor"></path></svg>
</div>
</div>
<div className="md:hidden flex flex-col items-center gap-2 text-indigo-500 opacity-50">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 text-center relative w-full md:w-auto">
<div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl relative overflow-hidden group-hover:border-indigo-500/50 transition-colors">
<div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
<div className="flex items-center justify-center gap-3 mb-2">
<iconify-icon className="text-white" icon="solar:database-bold" width="24"></iconify-icon>
<span className="text-xl font-bold text-white tracking-tight">Pristine AI</span>
</div>
<p className="text-xs text-slate-400">Zero GTM Engineering Required</p>
</div>
</div>

<div className="hidden md:flex flex-1 items-center justify-center relative">
<div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
<div className="text-emerald-400 bg-slate-900 border-slate-700 border rounded-full pt-2 pr-2 pb-2 pl-2 absolute shadow-[0_0_20px_rgba(16,185,129,0.3)]">
<svg className="" data-icon-set="solar" data-solar="check-circle-bold" height="20" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</div>
<div className="md:hidden flex flex-col items-center gap-2 text-emerald-500 opacity-50">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="w-full md:w-auto relative z-10">
<div className="bg-emerald-500/10 backdrop-blur border border-emerald-500/30 text-emerald-300 rounded-xl p-4 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-lg">
<iconify-icon icon="solar:rocket-2-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold text-white">Event Outreach</span>
<span className="text-[10px] text-emerald-400/80">Automated &amp; Personalized</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">

<h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                    The Intelligence Engine
                </h2>

<p className="text-base text-slate-700 dark:text-slate-400 max-w-xl mx-auto">
                    From raw search to closed deal, powered by granular data and deep AI agents.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
<div className="mb-8 flex-1">
<div className="relative bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-4 shadow-inner h-full flex flex-col">

<div className="relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-3 rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm mb-4">
<span className="absolute -top-2 left-2 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-800">Prompt</span>
                                "Find me CMOs at SaaS companies with $10M+ ARR"
                            </div>

<div className="flex-1 space-y-2">
<div className="flex justify-between items-center px-1 mb-2">
<span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Found: 712,405 matches</span>
<span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium cursor-pointer">View All</span>
</div>

<div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-24 mb-1.5"></div>
<div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded w-16"></div>
</div>
<div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[10px] text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>

<div className="bg-white dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-20 mb-1.5"></div>
<div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded w-12"></div>
</div>
<div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[10px] text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>

<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Natural Language Search</h3>

<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Stop filtering columns. Just ask. Our AI parses complex queries to find people, companies, and revenue data instantly.
                        </p>
</div>
</div>

<div className="bg-white dark:bg-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
<div className="mb-8 flex-1 flex flex-col justify-center">
<div className="space-y-2">

<div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-subtle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">JM</div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">john@acme.com</div>
</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> SMTP OK
                                </div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-subtle opacity-70">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">SD</div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">sarah@corp.io</div>
</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> SMTP OK
                                </div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-subtle opacity-40">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">MK</div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">mike@krea.ai</div>
</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> SMTP OK
                                </div>
</div>
</div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
<iconify-icon className="" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Verified SMTP Lists</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Create lists that actually land in the inbox. We perform real-time SMTP pings to verify validity before you export.
                        </p>
</div>
</div>

<div className="flex flex-col hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 bg-white dark:bg-slate-950 h-full border-slate-200 dark:border-slate-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex-1 mb-8">
<div className="text-[11px] leading-loose text-slate-600 dark:text-slate-400 font-mono bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<span className="text-indigo-500 dark:text-indigo-400">Subject:</span> Solving the {{strategic_challenge}}<br/>
                            Hi {{first_name}},<br/>
<span className="bg-yellow-100/50 dark:bg-yellow-900/20 text-slate-700 dark:text-slate-300 px-1 rounded">Noticed in your Q3 report that reducing CAC is a priority.</span> 
                            Given your goal to <span className="bg-yellow-100/50 dark:bg-yellow-900/20 text-slate-700 dark:text-slate-300 px-1 rounded">expand into EMEA</span>...
                        </div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:target-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Strategy-Led Outreach</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Generate emails based on the strategic objectives and challenges of the company. We analyze reports to find their pain points.
                        </p>
</div>
</div>

<div className="flex flex-col hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 bg-white dark:bg-slate-950 h-full border-slate-200 dark:border-slate-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="mb-8 flex-1">

<div className="playbook-grid bg-slate-100 dark:bg-slate-800 border-slate-100 dark:border-slate-800 border rounded-xl">

<div className="playbook-cell hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:key-minimalistic-square-linear"></iconify-icon> Openers
                                </div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">"Saw your talk at SaaStr..."</div>
</div>

<div className="playbook-cell hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:target-linear"></iconify-icon> Objectives
                                </div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Reduce CAC by 20%</div>
</div>

<div className="playbook-cell hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Social
                                </div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Active on LinkedIn (Daily)</div>
</div>

<div className="playbook-cell hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:case-minimalistic-linear"></iconify-icon> Experience
                                </div>
<div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Ex-Salesforce VP</div>
</div>
</div>
</div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Opportunity Playbook</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Deep intelligence on every prospect. Get instant access to Sales Openers, Strategic Objectives, Social Summaries, and Experience data.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-950 pt-24 pb-24 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">

<h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">Why the top 1% choose Pristine</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm">Don't settle for stale databases or fragmented tools.</p>
</div>
<div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-950">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
<th className="p-6 w-1/3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Feature</th>
<th className="p-6 w-1/3 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center text-[10px]">
<iconify-icon icon="solar:database-bold"></iconify-icon>
</div>
<span className="font-bold text-slate-800 dark:text-white">PristineData</span>
</div>
</th>
<th className="p-6 w-1/3 text-sm font-semibold text-slate-400 dark:text-slate-500">Traditional Stack</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">

<tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
<td className="p-6 text-sm font-medium text-slate-700 dark:text-slate-300">Database Size</td>
<td className="p-6 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                                        700M+ Contacts
                                    </div>
</td>
<td className="p-6 text-sm text-slate-500 dark:text-slate-500">
<div className="flex gap-2 items-center">
<iconify-icon className="text-slate-300 dark:text-slate-600" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                        ~250M Contacts
                                    </div>
</td>
</tr>

<tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
<td className="p-6 text-sm font-medium text-slate-700 dark:text-slate-300">Data Accuracy</td>
<td className="p-6 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                                        90% Verified
                                    </div>
</td>
<td className="text-sm text-slate-500 dark:text-slate-500 pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-2 items-center">
<iconify-icon className="text-slate-300 dark:text-slate-600" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                        ~70% Verified
                                    </div>
</td>
</tr>

<tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
<td className="p-6 text-sm font-medium text-slate-700 dark:text-slate-300">Search Engine</td>
<td className="p-6 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                                        Natural Language AI
                                    </div>
</td>
<td className="p-6 text-sm text-slate-500 dark:text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300 dark:text-slate-600" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                        Filter Columns
                                    </div>
</td>
</tr>

<tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
<td className="p-6 text-sm font-medium text-slate-700 dark:text-slate-300">Enrichment Cost</td>
<td className="p-6 bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                                        All-in-one Platform
                                    </div>
</td>
<td className="p-6 text-sm text-slate-500 dark:text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300 dark:text-slate-600" icon="solar:close-circle-linear" width="18"></iconify-icon>
                                        ZoomInfo + Clay + OpenAI
                                    </div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="px-8 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold rounded-xl shadow-lg shadow-slate-900/20 dark:shadow-none transition-all hover:scale-[1.02] flex items-center gap-2">
                    Book a Custom Demo
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center text-xs">
<iconify-icon icon="solar:database-bold"></iconify-icon>
</div>
<span className="font-bold text-sm text-slate-700 dark:text-slate-300">PristineData</span>
</div>
<div className="flex gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400">
<a className="hover:text-slate-700 dark:hover:text-slate-200" href="#">Product</a>
<a className="hover:text-slate-700 dark:hover:text-slate-200" href="#">Scale</a>
<a className="hover:text-slate-700 dark:hover:text-slate-200" href="#">Login</a>
<a className="hover:text-slate-700 dark:hover:text-slate-200" href="#">Privacy</a>
</div>
<div className="text-xs text-slate-400 dark:text-slate-500">
                © 2024 Pristine Inc.
            </div>
</div>
</footer>



    </>
  );
}
