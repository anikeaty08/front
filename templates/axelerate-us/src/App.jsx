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



        // --- View Switching (Home vs Contact) ---
        function toggleView(viewName) {
            const homeView = document.getElementById('view-home');
            const contactView = document.getElementById('view-contact');
            const footer = document.getElementById('footer');
            const navLinks = document.getElementById('nav-links');
            
            window.scrollTo(0, 0);

            if (viewName === 'contact') {
                homeView.classList.add('hidden');
                contactView.classList.remove('hidden');
                navLinks.classList.add('opacity-0', 'pointer-events-none'); // Hide nav links on contact page
            } else {
                homeView.classList.remove('hidden');
                contactView.classList.add('hidden');
                navLinks.classList.remove('opacity-0', 'pointer-events-none');
            }
        }

        // --- 1. Tab Switching Logic ---
        function switchTab(tabId) {
            // Update Tab Styling
            const tabs = document.querySelectorAll('.service-tab');
            tabs.forEach(tab => {
                tab.classList.remove('active', 'border-bottom', 'text-blue-600', 'bg-blue-50');
                tab.classList.add('text-slate-500');
            });
            
            // Find active tab
            const activeTabBtn = Array.from(tabs).find(t => t.getAttribute('onclick').includes(tabId));
            if(activeTabBtn) {
                activeTabBtn.classList.add('active');
                activeTabBtn.classList.remove('text-slate-500');
            }

            // Update Content Visibility
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.add('hidden'));
            
            const activeContent = document.getElementById(`content-${tabId}`);
            if(activeContent) {
                activeContent.classList.remove('hidden');
                activeContent.classList.add('animate-fade-in');
            }
        }

        // --- 2. Chart Render Logic ---
        document.addEventListener('DOMContentLoaded', function() {
            
            // --- Chart 1: Growth Model (Line Chart) ---
            const ctxGrowth = document.getElementById('growthChart').getContext('2d');
            
            const gradient = ctxGrowth.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

            new Chart(ctxGrowth, {
                type: 'line',
                data: {
                    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                    datasets: [
                        {
                            label: 'Axelerate Model (Brand Equity)',
                            data: [10, 25, 50, 90, 150],
                            borderColor: '#2563EB', // Blue-600
                            backgroundColor: gradient,
                            borderWidth: 3,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 4,
                            pointBackgroundColor: '#2563EB',
                            pointHoverRadius: 6
                        },
                        {
                            label: 'Traditional Trading',
                            data: [15, 16, 16, 15, 16], // Flat
                            borderColor: '#94A3B8', // Slate-400
                            borderWidth: 2,
                            borderDash: [5, 5],
                            tension: 0.1,
                            fill: false,
                            pointRadius: 2,
                            pointHoverRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { 
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 8,
                                font: { family: "'Inter', sans-serif", size: 12 }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            titleFont: { family: "'Inter', sans-serif" },
                            bodyFont: { family: "'Inter', sans-serif" },
                            padding: 10,
                            cornerRadius: 8,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + ' (Index)';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Brand Value / Equity', color: '#94a3b8', font: { size: 10 } },
                            grid: { color: '#f1f5f9', borderDash: [2, 2] },
                            ticks: { color: '#64748b', font: { size: 10 } }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#64748b', font: { size: 11 } }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    }
                }
            });

            // --- Chart 2: Capability Radar (Radar Chart) ---
            const ctxRadar = document.getElementById('radarChart').getContext('2d');
            new Chart(ctxRadar, {
                type: 'radar',
                data: {
                    labels: ['Localization', 'Execution', 'Partnership', 'Channels', 'Risk Control'],
                    datasets: [{
                        label: 'Axelerate',
                        data: [9, 10, 10, 9, 8],
                        fill: true,
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        borderColor: '#2563EB',
                        pointBackgroundColor: '#2563EB',
                        borderWidth: 2
                    }, {
                        label: 'Avg. Agency',
                        data: [4, 6, 3, 5, 4],
                        fill: true,
                        backgroundColor: 'rgba(148, 163, 184, 0.2)',
                        borderColor: '#94A3B8',
                        pointBackgroundColor: '#94A3B8',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: { line: { borderWidth: 3 } },
                    scales: {
                        r: {
                            angleLines: { color: '#e2e8f0' },
                            grid: { color: '#e2e8f0' },
                            pointLabels: {
                                font: { size: 11, weight: '600', family: "'Inter', sans-serif" },
                                color: '#475569'
                            },
                            suggestedMin: 0,
                            suggestedMax: 10,
                            ticks: { display: false } 
                        }
                    },
                    plugins: {
                        legend: { 
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 8,
                                font: { family: "'Inter', sans-serif", size: 12 }
                            }
                        }
                    }
                }
            });
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 cursor-pointer" href="#" onclick="toggleView('home')">
<iconify-icon className="text-blue-600 text-xl" icon="lucide:rocket"></iconify-icon>
<span className="cursor-pointer text-xl font-bold text-slate-900 tracking-tight" onclick="window.location.href='/home';window.location.href='/home';window.location.href='/home';window.location.href='/home';window.location.href='/home';window.location.href='/home'" role="button">Axelerate</span>
</a>

<div className="hidden md:flex space-x-8" id="nav-links">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#problem">Challenges</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#value">Advantages</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#roadmap">Roadmap</a>
</div>

<div className="flex items-center gap-6">

<div className="flex gap-3 text-xs font-medium gap-x-3 gap-y-3 items-center">
<a className="hover:text-slate-900 transition-colors text-slate-400" href="/cn-version">CN</a>
<span className="text-slate-300">|</span>
<span className="text-slate-900 cursor-default">EN</span>
</div>

<button className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-lg shadow-slate-900/20 items-center gap-2" onclick="toggleView('contact')">
<span className="">Contact Us</span>
<svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow fade-in" id="view-home">

<header className="relative bg-slate-900 text-white overflow-hidden">
<div className="absolute inset-0 bg-slate-950">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 md:py-32 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative items-center">
<span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
    Your Partner for US Market Growth
    </span>
<h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
        Empower Supply Chains<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Build American Brands</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
        We are not just a trading agency; we are your
        <strong className="text-white font-medium">Overseas Co-founder</strong>.<br/>
                    Connecting premium global supply chains with the US market to build lasting brand equity.
    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-base transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 group" href="#value">
            Explore Advantages
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right"></iconify-icon>
</a>
<a className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold text-base transition backdrop-blur-sm flex items-center justify-center" href="#problem">
            Market Challenges
        </a>
</div>
</div>
</header>

<section className="py-24 bg-white" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Great Product, But Hard to Build a Brand?</h2>
<p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                        There is a massive chasm between "Made in China" and "American Brand". Most factories get stuck in OEM/ODM due to four core pain points:
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Culture Gap</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Marketing content that feels "foreign" fails to emotionally connect with US consumers or build resonance.
                        </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white border border-slate-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:brick-wall" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Channel Barriers</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Difficulty accessing offline retail networks and distributors, getting stuck in the Amazon price war loop.
                        </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white border border-slate-100 text-yellow-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:scale" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Compliance Risks</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Lack of depth in US legal entities, tax systems, and IP protection creates hidden liabilities.
                        </p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white border border-slate-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:cone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Operations Gap</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            No local team for customer service or last-mile delivery, severely impacting user experience.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Full-Stack Solutions</h2>
<p className="text-slate-500">From brand reshaping to channel expansion, covering the entire lifecycle.</p>
</div>

<div className="flex flex-wrap border-b border-slate-200 mb-8" id="serviceTabs">
<button className="service-tab active px-6 py-4 font-medium text-slate-500 hover:text-slate-800 focus:outline-none text-base w-full sm:w-auto text-left sm:text-center flex items-center gap-2" onclick="switchTab('local')">
<iconify-icon icon="lucide:map-pin"></iconify-icon> 1. Localization
                    </button>
<button className="service-tab px-6 py-4 font-medium text-slate-500 hover:text-slate-800 focus:outline-none text-base w-full sm:w-auto text-left sm:text-center flex items-center gap-2" onclick="switchTab('channel')">
<iconify-icon icon="lucide:share-2"></iconify-icon> 2. Omni-channel
                    </button>
<button className="service-tab px-6 py-4 font-medium text-slate-500 hover:text-slate-800 focus:outline-none text-base w-full sm:w-auto text-left sm:text-center flex items-center gap-2" onclick="switchTab('ops')">
<iconify-icon icon="lucide:trending-up"></iconify-icon> 3. Growth &amp; Ops
                    </button>
</div>

<div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-200 min-h-[400px] flex items-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

<div className="tab-content w-full grid md:grid-cols-2 gap-12 items-center relative z-10" id="content-local">
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Brand Localization</h3>
<ul className="space-y-6">
<li className="flex items-start">
<span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Redesign VI and packaging to fit US aesthetics, removing the "cheap" perception.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Rewrite brand narratives with native copywriters to evoke emotion or humor.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Legal entity setup, tax compliance, and trademark registration to build a moat.</span>
</div>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center gap-8 shadow-inner h-64 border border-slate-100 text-slate-300">
<iconify-icon icon="lucide:palette" width="64"></iconify-icon>
<iconify-icon icon="lucide:map" width="64"></iconify-icon>
<iconify-icon icon="lucide:file-shield" width="64"></iconify-icon>
</div>
</div>

<div className="tab-content w-full grid md:grid-cols-2 gap-12 items-center hidden relative z-10" id="content-channel">
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Omni-channel Expansion</h3>
<ul className="space-y-6">
<li className="flex items-start">
<span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Amazon optimization, Shopify DTC stores, and TikTok Shop live commerce.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Leverage local resources to reach Distributors and Big-box retailers.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Penetrating industry-specific distribution networks (e.g., Medical, Auto).</span>
</div>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center gap-8 shadow-inner h-64 border border-slate-100 text-slate-300">
<iconify-icon icon="lucide:shopping-bag" width="64"></iconify-icon>
<iconify-icon icon="lucide:store" width="64"></iconify-icon>
<iconify-icon icon="lucide:smartphone" width="64"></iconify-icon>
</div>
</div>

<div className="tab-content w-full grid md:grid-cols-2 gap-12 items-center hidden relative z-10" id="content-ops">
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Growth &amp; Operations</h3>
<ul className="space-y-6">
<li className="flex items-start">
<span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Precise market entry timing, pricing architecture, and cold start plans.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Integrated 3PL/FBA resources to optimize fulfillment costs and speed.</span>
</div>
</li>
<li className="flex items-start">
<span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</span>
<div>
<span className="text-slate-500 text-sm leading-relaxed">Native local teams handling support to boost reputation and reviews.</span>
</div>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center gap-8 shadow-inner h-64 border border-slate-100 text-slate-300">
<iconify-icon icon="lucide:bar-chart-2" width="64"></iconify-icon>
<iconify-icon icon="lucide:truck" width="64"></iconify-icon>
<iconify-icon icon="lucide:users" width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="value">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Data &amp; Model</h2>
<p className="mt-4 text-lg text-slate-500">Why choose Axelerate as your long-term partner?</p>
</div>
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col">
<div className="mb-8 px-4 border-l-4 border-blue-600">
<h3 className="text-xl font-bold text-slate-900 mb-2">ROI Comparison</h3>
<p className="text-slate-500 text-sm">Traditional trading earns short-term margins. Axelerate builds long-term brand equity with compounding growth.</p>
</div>
<div className="chart-container">
<canvas height="451" id="growthChart" style={{display: 'block', boxSizing: 'border-box', height: '300.7px', width: '526.7px'}} width="790"></canvas>
</div>
</div>

<div className="flex flex-col">
<div className="mb-8 px-4 border-l-4 border-indigo-500">
<h3 className="text-xl font-bold text-slate-900 mb-2">Capability Comparison</h3>
<p className="text-slate-500 text-sm">Compared to remote agencies, we excel in "Boots on the Ground" execution and a "Co-founder Mindset".</p>
</div>
<div className="chart-container">
<canvas height="451" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '300.7px', width: '526.7px'}} width="790"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
<div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
<div className="text-blue-600 mb-4 flex justify-center">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">On the Ground</h4>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">US Based &amp; Fast Response</p>
</div>
<div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
<div className="text-blue-600 mb-4 flex justify-center">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Execution DNA</h4>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">0-to-1 Experience</p>
</div>
<div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
<div className="text-blue-600 mb-4 flex justify-center">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Co-founder Mindset</h4>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Shared Interest &amp; Growth</p>
</div>
<div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
<div className="text-blue-600 mb-4 flex justify-center">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Local Resources</h4>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Direct Media &amp; Retail Access</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="roadmap">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#3341552e_1px,transparent_1px),linear-gradient(to_bottom,#3341552e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl font-bold mb-4 tracking-tight">The 5-Step Roadmap</h2>
<p className="text-slate-400">A clear path to ensure steady growth at every stage.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>

<div className="space-y-16">

<div className="relative flex flex-col md:flex-row items-center timeline-item group">
<div className="flex-1 md:text-right md:pr-16 mb-4 md:mb-0">
<span className="inline-block text-xs font-semibold text-blue-500 mb-1">PHASE 01</span>
<h3 className="text-xl font-bold text-white">Evaluation</h3>
<p className="text-slate-400 mt-2 text-sm leading-relaxed">Market opportunity analysis and product potential assessment (PMF).</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 rounded-full -translate-x-1.5 md:-translate-x-4 border border-slate-700 z-10 timeline-dot flex items-center justify-center group-hover:border-blue-500 transition-colors">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex-1 md:pl-16 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center timeline-item group">
<div className="flex-1 md:pr-16 hidden md:block"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 rounded-full -translate-x-1.5 md:-translate-x-4 border border-slate-700 z-10 timeline-dot flex items-center justify-center group-hover:border-blue-500 transition-colors">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex-1 md:pl-16 md:text-left pl-12">
<span className="inline-block text-xs font-semibold text-blue-500 mb-1">PHASE 02</span>
<h3 className="text-xl font-bold text-white">Strategy</h3>
<p className="text-slate-400 mt-2 text-sm leading-relaxed">Pricing architecture, brand positioning, and compliance preparation.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center timeline-item group">
<div className="flex-1 md:text-right md:pr-16 mb-4 md:mb-0 pl-12 md:pl-0">
<span className="inline-block text-xs font-semibold text-blue-500 mb-1">PHASE 03</span>
<h3 className="text-xl font-bold text-white">Preparation</h3>
<p className="text-slate-400 mt-2 text-sm leading-relaxed">Visual upgrades, marketing assets creation, and initial stocking.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 rounded-full -translate-x-1.5 md:-translate-x-4 border border-slate-700 z-10 timeline-dot flex items-center justify-center group-hover:border-blue-500 transition-colors">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex-1 md:pl-16 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center timeline-item group">
<div className="flex-1 md:pr-16 hidden md:block"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 rounded-full -translate-x-1.5 md:-translate-x-4 border border-slate-700 z-10 timeline-dot flex items-center justify-center group-hover:border-blue-500 transition-colors">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex-1 md:pl-16 md:text-left pl-12">
<span className="inline-block text-xs font-semibold text-blue-500 mb-1">PHASE 04</span>
<h3 className="text-xl font-bold text-white">Launch</h3>
<p className="text-slate-400 mt-2 text-sm leading-relaxed">Omni-channel go-live and marketing campaigns. Data-driven optimization.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center timeline-item group">
<div className="flex-1 md:text-right md:pr-16 mb-4 md:mb-0 pl-12 md:pl-0">
<span className="inline-block text-xs font-semibold text-blue-500 mb-1">PHASE 05</span>
<h3 className="text-xl font-bold text-white">Scale</h3>
<p className="text-slate-400 mt-2 text-sm leading-relaxed">Review, reinvest, and expand into new channels and categories.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 rounded-full -translate-x-1.5 md:-translate-x-4 border border-slate-700 z-10 timeline-dot flex items-center justify-center group-hover:border-blue-500 transition-colors">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex-1 md:pl-16 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="hidden flex-grow bg-white fade-in" id="view-contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="max-w-2xl mx-auto">
<div className="mb-10 text-center">
<span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Get Started</span>
<h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Contact Our Team</h1>
<p className="text-slate-500 text-lg">Tell us about your brand. We'll get back to you within 24 hours.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
<form action="mailto:admin@axelerateglobal.com" className="space-y-6" enctype="text/plain" method="post">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="firstName">First Name</label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400" id="firstName" name="firstName" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="lastName">Last Name</label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="email">Work Email</label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="company">Company / Brand Name</label>
<input className="custom-input w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="message">How can we help?</label>
<textarea className="custom-input w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400" id="message" name="message" placeholder="Tell us about your product and current market status..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10" type="submit">
                            Send Message
                            <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
<div className="mt-8 text-center">
<button className="text-slate-500 hover:text-slate-900 text-sm font-medium flex items-center justify-center gap-2 mx-auto" onclick="toggleView('home')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
                        Back to Home
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800" id="footer">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<iconify-icon className="text-white text-xl" icon="lucide:rocket"></iconify-icon>
<span className="text-2xl font-bold text-white tracking-tight">Axelerate</span>
</div>
<p className="mt-2 text-sm text-slate-500">Your Partner for US Market Growth.</p>
<div className="mt-6 flex gap-4 justify-center md:justify-start">
<span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400">🇺🇸 US Office</span>
<span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400">🇨🇳 China Office</span>
</div>
</div>
<div className="text-center md:text-right space-y-3">
<h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact &amp; Connect</h3>
<a className="flex items-center justify-center md:justify-end gap-2 text-sm hover:text-white transition-colors cursor-pointer group" href="mailto:admin@axelerateglobal.com">
<iconify-icon className="group-hover:text-blue-400 transition-colors" icon="lucide:mail" width="16"></iconify-icon> 
                    admin@axelerateglobal.com
                </a>
<p className="flex items-center justify-center md:justify-end gap-2 text-sm hover:text-white transition-colors cursor-default">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon> 
                    WeChat: TCC---Mark
                </p>
<button className="mt-6 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-2 rounded-lg transition text-sm flex items-center gap-2 mx-auto md:mx-0 md:ml-auto">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                    Download Deck
                </button>
</div>
</div>
<div className="text-center mt-12 pt-8 border-t border-slate-900 text-xs text-slate-700">
            © 2024 Axelerate Inc. All rights reserved.
        </div>
</footer>



    </>
  );
}
