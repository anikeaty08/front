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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Tab Logic ---
        function switchTab(tabId) {
            // Reset Tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active', 'border-blue-600');
                btn.classList.add('border-transparent');
                
                // Reset circle icon
                const circle = btn.querySelector('span');
                circle.classList.remove('bg-blue-600', 'text-white');
                circle.classList.add('bg-slate-100', 'text-slate-500');
            });

            // Set Active Tab
            const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
            if(activeBtn) {
                activeBtn.classList.add('active', 'border-blue-600');
                activeBtn.classList.remove('border-transparent');
                
                // Active circle
                const circle = activeBtn.querySelector('span');
                circle.classList.remove('bg-slate-100', 'text-slate-500');
                circle.classList.add('bg-blue-600', 'text-white');
            }

            // Toggle Content
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            const activeContent = document.getElementById(`content-${tabId}`);
            if(activeContent) activeContent.classList.remove('hidden');
        }

        // --- Chart Config & Render ---
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#64748b';
        Chart.defaults.scale.grid.color = '#f1f5f9';

        document.addEventListener('DOMContentLoaded', function() {
            // Line Chart
            const ctxGrowth = document.getElementById('growthChart').getContext('2d');
            
            // Create gradient
            let gradient = ctxGrowth.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.1)');
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

            new Chart(ctxGrowth, {
                type: 'line',
                data: {
                    labels: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
                    datasets: [
                        {
                            label: 'Axelerate Model',
                            data: [15, 35, 65, 110, 180],
                            borderColor: '#2563EB', // Blue 600
                            backgroundColor: gradient,
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            pointHoverBackgroundColor: '#2563EB'
                        },
                        {
                            label: 'Traditional Trading',
                            data: [20, 22, 21, 23, 22],
                            borderColor: '#94A3B8', // Slate 400
                            borderWidth: 2,
                            borderDash: [6, 6],
                            tension: 0.2,
                            fill: false,
                            pointRadius: 0,
                            pointHoverRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 6 } },
                        tooltip: {
                            backgroundColor: '#1e293b',
                            padding: 12,
                            cornerRadius: 8,
                            titleFont: { size: 13, weight: 600 },
                            bodyFont: { size: 12 },
                            displayColors: false
                        }
                    },
                    scales: {
                        y: { display: false, beginAtZero: true },
                        x: { grid: { display: false }, ticks: { font: { size: 11 } } }
                    }
                }
            });

            // Radar Chart
            const ctxRadar = document.getElementById('radarChart').getContext('2d');
            new Chart(ctxRadar, {
                type: 'radar',
                data: {
                    labels: ['Localization', 'Execution', 'Partnership', 'Channels', 'Risk Control'],
                    datasets: [{
                        label: 'Axelerate',
                        data: [9, 10, 10, 9, 8],
                        fill: true,
                        backgroundColor: 'rgba(37, 99, 235, 0.15)',
                        borderColor: '#2563EB',
                        borderWidth: 2,
                        pointRadius: 3,
                        pointBackgroundColor: '#2563EB'
                    }, {
                        label: 'Standard Agency',
                        data: [5, 6, 4, 6, 4],
                        fill: true,
                        backgroundColor: 'rgba(148, 163, 184, 0.1)',
                        borderColor: '#94A3B8',
                        borderWidth: 2,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            ticks: { display: false, maxTicksLimit: 5 },
                            pointLabels: { font: { size: 11, weight: 600 }, color: '#475569' },
                            grid: { color: '#e2e8f0' },
                            angleLines: { color: '#e2e8f0' },
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    },
                    plugins: {
                        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 6 } }
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2.5" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">Axelerate</span>
</div>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#problem">Challenges</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#services">Solutions</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#value">Advantages</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#roadmap">Roadmap</a>
</div>

<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center bg-slate-100/80 p-1 rounded-full border border-slate-200">
<span className="text-[11px] cursor-default font-semibold text-slate-900 tracking-tight bg-white border-slate-100/50 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 shadow-sm">EN</span>
<a className="text-[11px] hover:text-slate-900 transition-colors font-medium text-slate-500 tracking-tight pt-1 pr-2.5 pb-1 pl-2.5" href="/cn-version">中文</a>
</div>

<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2" onclick="document.getElementById('footer').scrollIntoView({behavior: 'smooth'})">
<span className="">Contact Us</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden bg-white pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-[20%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse"></div>
<div className="absolute top-40 right-[20%] w-96 h-96 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
</div>
<div className="z-10 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8 hover:bg-slate-100 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                Your Partner for US Market Growth
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Empowering Supply Chains,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Building American Brands</span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                We are not just a trade agent; we are your <span className="text-slate-900 font-medium">"Overseas Co-founder."</span> 
                Connecting global manufacturing excellence with the US market to build long-term brand equity.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
<a className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2" href="#value">
                    Core Advantages
                    <iconify-icon className="" icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium text-sm transition-all flex items-center justify-center" href="#problem">
                    The Challenge
                </a>
</div>

<div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-slate-200/60 bg-slate-50/50 backdrop-blur-sm shadow-2xl shadow-slate-200/40 p-2 lg:p-4">
<div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-slate-100 to-white overflow-hidden border border-slate-100 relative group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-8 w-3/4 opacity-80">
<div className="h-32 bg-white rounded-lg shadow-sm border border-slate-100 p-4">
<div className="w-8 h-8 rounded bg-blue-50 mb-3 flex items-center justify-center"><iconify-icon className="text-blue-500" icon="lucide:package"></iconify-icon></div>
<div className="w-16 h-2 bg-slate-100 rounded mb-2"></div>
<div className="w-10 h-2 bg-slate-100 rounded"></div>
</div>
<div className="h-32 bg-white rounded-lg shadow-sm border border-slate-100 p-4 mt-8">
<div className="w-8 h-8 rounded bg-indigo-50 mb-3 flex items-center justify-center"><iconify-icon className="text-indigo-500" icon="lucide:bar-chart-2"></iconify-icon></div>
<div className="w-16 h-2 bg-slate-100 rounded mb-2"></div>
<div className="w-20 h-2 bg-slate-100 rounded"></div>
</div>
<div className="h-32 bg-white rounded-lg shadow-sm border border-slate-100 p-4">
<div className="w-8 h-8 rounded bg-teal-50 mb-3 flex items-center justify-center"><iconify-icon className="text-teal-500" icon="lucide:globe"></iconify-icon></div>
<div className="w-12 h-2 bg-slate-100 rounded mb-2"></div>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50/50 border-t border-slate-200/50" id="problem">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why do great products<br/>struggle to become great brands?</h2>
<p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                    There is a massive gap between "Made in China" and "American Brand." Most factories are stuck in OEM/ODM due to four core barriers.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
<div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-rose-500" icon="lucide:messages-square" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Cultural Gap</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Marketing content gets "lost in translation," failing to resonate emotionally with US consumers.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-amber-500" icon="lucide:store" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Channel Barriers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Difficulty accessing offline retail networks and professional distributors, limiting reach to just Amazon.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500" icon="lucide:scale" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Compliance Risks</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Lack of depth in US legal entities, tax systems, and IP protection creates hidden liabilities.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-500" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Operational Gaps</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        No local team to handle customer service and "last-mile" delivery, damaging user experience.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">End-to-End Solutions</h2>
<p className="text-slate-500 text-lg">From brand reshaping to channel expansion.</p>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto no-scrollbar lg:border-l border-slate-200">
<button className="tab-btn active group flex items-center gap-4 px-6 py-4 border-b-2 lg:border-b-0 lg:border-l-2 border-transparent hover:bg-slate-50 transition-all text-left min-w-[240px]" onclick="switchTab('local')">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium group-hover:bg-white group-hover:shadow-sm transition-all">01</span>
<div className="">
<span className="block text-sm font-medium transition-colors">Localization</span>
</div>
</button>
<button className="tab-btn group flex items-center gap-4 px-6 py-4 border-b-2 lg:border-b-0 lg:border-l-2 border-transparent hover:bg-slate-50 transition-all text-left min-w-[240px]" onclick="switchTab('channel')">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium group-hover:bg-white group-hover:shadow-sm transition-all">02</span>
<div className="">
<span className="block transition-colors text-sm font-medium">Channel Expansion</span>
</div>
</button>
<button className="tab-btn group flex items-center gap-4 px-6 py-4 border-b-2 lg:border-b-0 lg:border-l-2 border-transparent hover:bg-slate-50 transition-all text-left min-w-[240px]" onclick="switchTab('ops')">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium group-hover:bg-white group-hover:shadow-sm transition-all">03</span>
<div>
<span className="block text-sm font-medium transition-colors">Growth &amp; Ops</span>
</div>
</button>
</div>

<div className="lg:w-2/3 min-h-[400px] relative">

<div className="tab-content animate-fade-in absolute inset-0" id="content-local">
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 lg:p-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600" icon="lucide:palette" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Brand Localization</h3>
<div className="space-y-4">
<div className="flex gap-4">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div className="">
<p className="text-sm font-medium text-slate-900">Visual &amp; Packaging Rebranding</p>
<p className="text-sm text-slate-500 mt-1">Refining packaging design and VI to fit US aesthetics, removing the "cheap import" look.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div className="">
<p className="text-sm font-medium text-slate-900">Local Storytelling</p>
<p className="text-sm text-slate-500 mt-1">Rewriting brand narratives and producing culturally relevant marketing assets.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Compliance &amp; Risk Control</p>
<p className="text-sm text-slate-500 mt-1">Handling legal entities, tax compliance, and IP registration to build a competitive moat.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden animate-fade-in absolute inset-0" id="content-channel">
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 lg:p-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-600" icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Channel Expansion</h3>
<div className="space-y-4">
<div className="flex gap-4">
<iconify-icon className="text-emerald-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Online Coverage</p>
<p className="text-sm text-slate-500 mt-1">Amazon operations, Shopify DTC brand sites, and TikTok Shop live commerce.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-emerald-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Offline Penetration</p>
<p className="text-sm text-slate-500 mt-1">Leveraging local resources to develop Distributors and enter Big-box retailers.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-emerald-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Niche Channels</p>
<p className="text-sm text-slate-500 mt-1">Entering specialized distribution networks for specific verticals.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden animate-fade-in absolute inset-0" id="content-ops">
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 lg:p-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Growth &amp; Operations</h3>
<div className="space-y-4">
<div className="flex gap-4">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">GTM Strategy</p>
<p className="text-sm text-slate-500 mt-1">Precise market entry timelines, pricing architecture, and cold-start plans.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Local Logistics</p>
<p className="text-sm text-slate-500 mt-1">Integrating US warehousing to optimize fulfillment costs and speed.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-indigo-600 mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Customer Service (CS)</p>
<p className="text-sm text-slate-500 mt-1">Local teams handling after-sales to boost brand reputation and reviews.</p>
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

<section className="py-24 bg-slate-50/50 border-t border-slate-200" id="value">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Advantages &amp; Data Model</h2>
<p className="mt-4 text-lg text-slate-500">Why choose Axelerate as your long-term partner?</p>
</div>
<div className="grid lg:grid-cols-2 lg:gap-12 gap-x-8 gap-y-8">

<div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="lucide:bar-chart-2"></iconify-icon>
                            ROI Comparison
                        </h3>
<p className="text-sm text-slate-500 mt-1">Axelerate model builds long-term brand equity.</p>
</div>
<div className="relative w-full h-[300px]">
<canvas className="" height="750" id="growthChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '656.4px'}} width="1641"></canvas>
</div>
</div>

<div className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="lucide:radar"></iconify-icon>
                            Capability Radar
                        </h3>
<p className="text-sm text-slate-500 mt-1">Significant advantages in Local Execution.</p>
</div>
<div className="relative w-full h-[300px]">
<canvas className="" height="750" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '656.4px'}} width="1641"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
<div className="mx-auto w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
<iconify-icon className="text-slate-900" icon="lucide:flag"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">On the Ground</h4>
<p className="text-xs text-slate-500 mt-1">Based in US, Instant Response</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
<div className="mx-auto w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
<iconify-icon className="text-slate-900" icon="lucide:zap"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Execution DNA</h4>
<p className="text-xs text-slate-500 mt-1">0-to-1 Proven Track Record</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
<div className="mx-auto w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
<iconify-icon className="text-slate-900" icon="lucide:handshake"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Partnership Mindset</h4>
<p className="text-xs text-slate-500 mt-1">Shared Risk, Shared Growth</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
<div className="mx-auto w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
<iconify-icon className="text-slate-900" icon="lucide:network"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Local Network</h4>
<p className="text-xs text-slate-500 mt-1">Direct to Channels &amp; Media</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="roadmap">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<span className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-2 block">The Path</span>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Roadmap to US Market</h2>
<p className="text-slate-400">A clear 5-step path to ensure steady growth.</p>
</div>
<div className="relative max-w-3xl mx-auto">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2"></div>
<div className="space-y-12 md:space-y-16">

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="flex-1 md:text-right md:pr-12 pl-16 md:pl-0 mb-2 md:mb-0">
<span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-blue-400 text-xs font-medium mb-2">01</span>
<h3 className="text-lg font-semibold text-white">Evaluation</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">Market opportunity analysis and product potential assessment.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-[5px] md:-translate-x-[5px] ring-4 ring-slate-900 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="flex-1 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="flex-1 md:pr-12 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-slate-700 rounded-full -translate-x-[5px] md:-translate-x-[5px] ring-4 ring-slate-900 z-10 border border-slate-600"></div>
<div className="flex-1 md:pl-12 pl-16">
<span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-2">02</span>
<h3 className="text-lg font-semibold text-white">Strategy</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">Pricing architecture, brand positioning, and compliance preparation.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="flex-1 md:text-right md:pr-12 pl-16 md:pl-0 mb-2 md:mb-0">
<span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-2">03</span>
<h3 className="text-lg font-semibold text-white">Preparation</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">Visual upgrade, marketing asset production, and initial stocking.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-slate-700 rounded-full -translate-x-[5px] md:-translate-x-[5px] ring-4 ring-slate-900 z-10 border border-slate-600"></div>
<div className="flex-1 md:pl-12 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="flex-1 md:pr-12 hidden md:block"></div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-slate-700 rounded-full -translate-x-[5px] md:-translate-x-[5px] ring-4 ring-slate-900 z-10 border border-slate-600"></div>
<div className="flex-1 md:pl-12 pl-16">
<span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-2">04</span>
<h3 className="text-lg font-semibold text-white">Launch</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">All channels go live, marketing campaigns start. Data-driven optimization.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="flex-1 md:text-right md:pr-12 pl-16 md:pl-0 mb-2 md:mb-0">
<span className="inline-block px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-2">05</span>
<h3 className="text-lg font-semibold text-white">Scale</h3>
<p className="text-sm text-slate-400 mt-1 leading-relaxed">Data review, increased investment, and channel expansion.</p>
</div>
<div className="absolute left-6 md:left-1/2 w-3 h-3 bg-slate-700 rounded-full -translate-x-[5px] md:-translate-x-[5px] ring-4 ring-slate-900 z-10 border border-slate-600"></div>
<div className="flex-1 md:pl-12 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900" id="footer">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<span className="text-xl font-bold text-white tracking-tight">Axelerate</span>
<p className="mt-4 text-sm text-slate-500 leading-relaxed">
                        Connecting global manufacturing excellence with the US market. We act as your on-the-ground partner for sustainable brand growth.
                    </p>
<div className="mt-6 flex gap-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400">US Office</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400">China Liaison</span>
</div>
</div>
<div className="flex flex-col md:items-end gap-6">
<div className="">
<h3 className="text-white font-medium mb-4 text-sm">Contact</h3>
<div className="space-y-3 text-sm">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:contact@axelerate.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                                contact@axelerate.com
                            </a>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
                                WeChat: Axelerate_BD
                            </div>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-white text-slate-900 rounded-md text-xs font-medium transition-all">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Download Corporate Deck
                    </button>
</div>
</div>
<div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 Axelerate Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
