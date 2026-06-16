import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
gray: {
850: '#1f1f23',
900: '#18181b',
950: '#09090b',
},
pluvio: {
500: '#3b82f6', // Brand Blue
600: '#2563eb',
},
flexera: {
500: '#10b981', // Brand Emerald
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
reveal: {
'0%': { opacity: '0', transform: 'scale(0.98) translateY(10px)' },
'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
}
}
}
}
}



      // Initialize Icons
      lucide.createIcons();
    


      (function() {
        const slider = document.getElementById('calcRange');
        const spendDisplay = document.getElementById('spendValue');
        const savingsDisplay = document.getElementById('calcSavings');
        const roiDisplay = document.getElementById('calcROI');
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

        function updateCalc() {
            const val = parseInt(slider.value);
            const savings = val * 12 * 0.32;
            const percentage = ((val - slider.min) / (slider.max - slider.min)) * 100;

            slider.style.background = `linear-gradient(to right, #3b82f6, #10b981 ${percentage}%, #27272a ${percentage}%)`;
            if(spendDisplay) spendDisplay.textContent = formatter.format(val);
            if(savingsDisplay) savingsDisplay.textContent = formatter.format(savings);
        }

        if(slider) {
            slider.addEventListener('input', updateCalc);
            updateCalc();
        }

        // Refresh icons for new content
        if(typeof lucide !== 'undefined') lucide.createIcons();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pluvio-600/5 blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-flexera-500/5 blur-[120px]"></div>
<div className="absolute top-[20%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-white/[0.01] blur-[100px]"></div>
</div>


<main className="relative z-10 pt-32 pb-20 px-4 sm:px-6">

<div className="max-w-5xl mx-auto text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pluvio-500/20 bg-pluvio-500/5 text-[11px] font-medium text-pluvio-400 mb-6 opacity-0 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pluvio-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-pluvio-500"></span>
</span>
          Introducing Next-Gen Cloud Optimization
        </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 opacity-0 animate-fade-in-up delay-100">
          Orchestrate your
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
            Cloud Financial Operations.
          </span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up delay-200">
          Pluvio combines advanced FinOps intelligence with expert managed
          services. We leverage Flexera to deliver unparalleled visibility,
          governance, and cost control across your multi-cloud estate.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
<button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
            Book a Demo
            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white text-sm font-medium hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="play-circle"></i>
            See how it works
          </button>
</div>
</div>
<div className="max-w-6xl mx-auto mt-0 mb-24 text-center opacity-0 animate-fade-in delay-500">
<p className="text-sm text-gray-500 font-medium mb-8">
          TRUSTED BY FORWARD-THINKING CLOUD TEAMS
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<i className="w-5 h-5" data-lucide="sparkles"></i>
            Runway AI
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<i className="w-5 h-5" data-lucide="moon"></i>
            Eight Sleep
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<div className="w-5 h-5 rounded-full border-4 border-current"></div>
            Pepsi
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<i className="w-5 h-5" data-lucide="play-circle"></i>
            JW Player
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<i className="w-5 h-5" data-lucide="radio-tower"></i>
            Sinclair
          </div>
<div className="flex items-center gap-2 text-white font-semibold text-lg hover:text-pluvio-400 transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
            Leadsquared
          </div>
</div>
</div>

<div className="max-w-[1400px] mx-auto opacity-0 animate-reveal delay-500">
<div className="relative rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden ring-1 ring-white/5 group">

<div className="grid lg:grid-cols-[260px_1fr] h-[800px] lg:h-[750px]">

<aside className="hidden lg:flex flex-col border-r border-white/5 bg-[#0c0c0e] p-4">
<div className="mb-8 px-2">
<div className="flex items-center gap-2 text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-4 mt-2">
                  FinOps Control
                </div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.08] text-white text-xs font-medium border border-white/5 shadow-sm" href="#">
<i className="w-4 h-4 text-pluvio-500" data-lucide="layout-grid"></i>
                    Executive Dashboard
                  </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-medium group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-300" data-lucide="bar-chart-3"></i>
                    Cost Allocation
                  </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-medium group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-300" data-lucide="target"></i>
                    Budgets &amp; Forecasting
                  </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-medium group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-300" data-lucide="zap"></i>
                    Optimization Engine
                  </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-medium group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-300" data-lucide="file-check"></i>
                    Flexera Reporting
                  </a>
</nav>
</div>
<div className="mt-auto px-2">
<div className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-20">
<i className="w-12 h-12 text-flexera-500" data-lucide="trending-up"></i>
</div>
<p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
                    Projected Savings
                  </p>
<p className="text-xl font-mono text-white tracking-tight">
                    $2.4M
                    <span className="text-gray-500 text-sm">/yr</span>
</p>
<div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-gradient-to-r from-flexera-500 to-pluvio-500 rounded-full animate-pulse"></div>
</div>
<p className="text-[10px] text-gray-500 mt-2">
                    75% of goal reached
                  </p>
</div>
</div>
</aside>

<div className="flex flex-col bg-[#09090b] overflow-hidden relative">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-white">
                    October 2025 Overview
                  </h2>
<span className="h-4 w-px bg-white/10"></span>
<div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>Data Refresh Complete</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 bg-[#18181b] border border-white/10 rounded-md p-1 pr-3">
<div className="p-1 text-gray-400">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i>
</div>
<span className="text-xs text-white">Last 30 Days</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pluvio-600 to-indigo-600 border border-white/10 shadow-inner flex items-center justify-center text-xs font-medium text-white">
                    JD
                  </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

<div className="glass-card p-5 rounded-xl group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all">
<i className="w-4 h-4" data-lucide="cloud"></i>
</div>
<span className="text-[10px] font-medium text-red-400 bg-red-500/10 px-2 py-1 rounded-full flex items-center gap-1 border border-red-500/10">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
                        2.4%
                      </span>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        Total Amortized Cost
                      </p>
<p className="text-2xl font-semibold text-white font-mono tracking-tight">
                        $842,291
                      </p>
</div>
</div>

<div className="glass-card p-5 rounded-xl group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-flexera-500 group-hover:bg-flexera-500/10 transition-all">
<i className="w-4 h-4" data-lucide="piggy-bank"></i>
</div>
<span className="text-[10px] font-medium text-flexera-500 bg-flexera-500/10 px-2 py-1 rounded-full flex items-center gap-1 border border-flexera-500/10">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
                        12.5%
                      </span>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        Realized Savings
                      </p>
<p className="text-2xl font-semibold text-white font-mono tracking-tight">
                        $124,500
                      </p>
</div>
</div>

<div className="glass-card p-5 rounded-xl group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-pluvio-500 group-hover:bg-pluvio-500/10 transition-all">
<i className="w-4 h-4" data-lucide="percent"></i>
</div>
<span className="text-[10px] font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/10">
                        Optimized
                      </span>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        RI/SP Coverage
                      </p>
<p className="text-2xl font-semibold text-white font-mono tracking-tight">
                        84.2%
                      </p>
</div>
</div>

<div className="glass-card p-5 rounded-xl group">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
</div>
<span className="text-[10px] font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/10">
                        Action Req
                      </span>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        Anomalies Detected
                      </p>
<p className="text-2xl font-semibold text-white font-mono tracking-tight">
                        3
                      </p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 glass-card rounded-xl border border-white/5 p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-sm font-semibold text-white">
                          Spend Forecast vs. Actuals
                        </h3>
<p className="text-[11px] text-gray-500 mt-1">
                          Multi-cloud cost aggregation (AWS, Azure, GCP)
                        </p>
</div>
<div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 text-[10px] font-medium text-white bg-white/10 rounded shadow-sm">
                          30D
                        </button>
<button className="px-3 py-1 text-[10px] font-medium text-gray-500 hover:text-white transition-colors">
                          90D
                        </button>
<button className="px-3 py-1 text-[10px] font-medium text-gray-500 hover:text-white transition-colors">
                          1Y
                        </button>
</div>
</div>

<div className="relative h-64 w-full mt-4 flex items-end justify-between gap-3 px-2">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<div className="relative flex-1 h-full flex items-end group">
<div className="w-full bg-gray-800 rounded-t-sm h-[0%] animate-bar" style={{height: '40%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[35%] border-t-2 border-dashed border-pluvio-500/50 w-full z-10"></div>
</div>
<div className="relative flex-1 h-full flex items-end group">
<div className="w-full bg-gray-800 rounded-t-sm h-[0%] animate-bar delay-100" style={{height: '55%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[45%] border-t-2 border-dashed border-pluvio-500/50 w-full z-10"></div>
</div>
<div className="relative flex-1 h-full flex items-end group">
<div className="w-full bg-gray-800 rounded-t-sm h-[0%] animate-bar delay-200" style={{height: '48%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[42%] border-t-2 border-dashed border-pluvio-500/50 w-full z-10"></div>
</div>
<div className="relative flex-1 h-full flex items-end group">
<div className="w-full bg-gray-800 rounded-t-sm h-[0%] animate-bar delay-300" style={{height: '65%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[58%] border-t-2 border-dashed border-pluvio-500/50 w-full z-10"></div>
</div>
<div className="relative flex-1 h-full flex items-end group">
<div className="w-full bg-pluvio-600/20 rounded-t-sm h-[0%] animate-bar delay-500" style={{height: '70%'}}></div>
<div className="absolute bottom-0 left-0 right-0 h-[62%] border-t-2 border-pluvio-500 w-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
<div className="relative flex-1 h-full flex items-end group">

<div className="w-full bg-gray-800/50 rounded-t-sm h-[0%] animate-bar delay-700 relative overflow-hidden" style={{height: '85%'}}>
<div className="absolute top-0 w-full bg-flexera-500/20 h-[20%] border-b border-flexera-500/30 flex items-center justify-center">
<span className="text-[8px] font-bold text-flexera-500">
                              SAVED
                            </span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-[68%] border-t-2 border-pluvio-500 w-full z-10 relative">
<div className="absolute -top-1.5 -right-0.5 w-2 h-2 rounded-full bg-pluvio-500 border-2 border-[#09090b]"></div>
</div>
</div>
</div>
<div className="flex justify-between mt-4 px-2 text-[10px] text-gray-500 font-mono">
<span>MAY</span>
<span>JUN</span>
<span>JUL</span>
<span>AUG</span>
<span>SEP</span>
<span>OCT</span>
</div>
</div>

<div className="glass-card rounded-xl border border-white/5 p-6 flex flex-col">
<h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-flexera-500" data-lucide="sparkles"></i>
                      Top Recommendations
                    </h3>
<div className="space-y-3 flex-1 overflow-y-auto pr-1">

<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-orange-500/10 text-orange-500">
<i className="w-3 h-3" data-lucide="server"></i>
</div>
<span className="text-xs font-medium text-gray-200">
                              Rightsize EC2 (m5.xl)
                            </span>
</div>
<span className="text-[10px] font-mono text-flexera-500 font-bold">
                            $4,290
                          </span>
</div>
<p className="text-[11px] text-gray-500 mb-2 pl-7">
                          24 instances &lt; 5% CPU Utilization
                        </p>
</div>

<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-blue-500/10 text-blue-500">
<i className="w-3 h-3" data-lucide="database"></i>
</div>
<span className="text-xs font-medium text-gray-200">
                              Delete Unattached EBS
                            </span>
</div>
<span className="text-[10px] font-mono text-flexera-500 font-bold">
                            $840
                          </span>
</div>
<p className="text-[11px] text-gray-500 mb-2 pl-7">
                          12 volumes unattached &gt; 30 days
                        </p>
</div>

<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-gray-500/10 text-gray-400">
<i className="w-3 h-3" data-lucide="archive"></i>
</div>
<span className="text-xs font-medium text-gray-200">
                              S3 Lifecycle Policy
                            </span>
</div>
<span className="text-[10px] font-mono text-flexera-500 font-bold">
                            $320
                          </span>
</div>
<p className="text-[11px] text-gray-500 mb-2 pl-7">
                          Move 4TB to Glacier Instant Retrieval
                        </p>
</div>
</div>
<button className="w-full mt-4 py-2 border border-pluvio-500/20 bg-pluvio-500/10 rounded-lg text-xs font-medium text-pluvio-400 hover:text-white hover:bg-pluvio-500 transition-all flex items-center justify-center gap-2">
                      Automate Fixes
                      <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto w-[90%] h-12 bg-pluvio-500/20 blur-3xl mt-[-20px] rounded-[100%] opacity-50"></div>
</div>


<div className="max-w-6xl mx-auto mt-32">
<div className="flex items-center gap-2 mb-8">
<span className="h-px w-8 bg-gradient-to-r from-transparent to-pluvio-500"></span>
<span className="text-xs font-bold text-pluvio-500 uppercase tracking-widest">
            Pluvio + Flexera
          </span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
          Complete financial visibility.
          <br/>
<span className="text-gray-600">Unified across every cloud.</span>
</h2>
<p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-16">
          Stop guessing your cloud bill. Pluvio normalizes data from AWS, Azure,
          GCP, and Alibaba to give you a single source of truth.
        </p>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-[#0c0c0e] hover:border-pluvio-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-pluvio-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-pluvio-500/10">
<i className="w-6 h-6 text-pluvio-500" data-lucide="scan-search"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Cost Allocation
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Tag untagged resources and allocate shared costs (like Kubernetes
              clusters) to specific teams or projects with 99.9% accuracy.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-[#0c0c0e] hover:border-flexera-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-flexera-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-flexera-500/10">
<i className="w-6 h-6 text-flexera-500" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Automated Optimization
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Execute rate optimization strategies automatically. We manage
              Reserved Instances and Savings Plans to maximize coverage without
              risk.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-[#09090b] hover:bg-[#0c0c0e] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/10">
<i className="w-6 h-6 text-purple-500" data-lucide="siren"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">
              Governance &amp; Guardrails
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Detect cost anomalies in real-time. Set budget thresholds and
              receive alerts via Slack before you overrun your monthly commit.
            </p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-40 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#09090b] rounded-xl border border-white/5 p-8 md:p-14 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-pluvio-500/20 blur-[80px]"></div>
<h3 className="text-3xl font-medium text-white mb-3 relative z-10">
            Calculate your potential
          </h3>
<p className="text-gray-400 text-sm mb-12 relative z-10">
            Based on Pluvio's average optimization rate of 32% for new
            customers.
          </p>
<div className="max-w-md mx-auto relative z-10">
<div className="flex justify-between text-sm font-medium text-gray-300 mb-4">
<span>Monthly Cloud Spend</span>
<span className="text-white" id="spendValue">$50,000</span>
</div>

<input aria-label="Monthly Spend Slider" className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer mb-12 focus:outline-none" id="calcRange" max="250000" min="10000" step="5000" type="range" value="50000"/>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                  Annual Savings
                </p>
<p className="text-4xl font-mono text-flexera-500 tracking-tight font-medium" id="calcSavings">
                  $192,000
                </p>
</div>
<div>
<p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                  Platform ROI
                </p>
<p className="text-4xl font-mono text-white tracking-tight font-medium" id="calcROI">
                  4.5x
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="text-center mt-32 mb-20">
<h2 className="text-3xl text-white font-medium mb-6">
          Ready to regain control?
        </h2>
<div className="flex justify-center gap-4">
<button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors">
            Contact Sales
          </button>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 pr-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-pluvio-500 to-flexera-500 flex items-center justify-center text-white text-[10px] font-bold tracking-tighter">
                P
              </div>
<span className="text-white font-medium tracking-tight text-sm">
                Pluvio
              </span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
              Helping modern enterprises decode their cloud bill. The only
              FinOps platform built on Flexera intelligence.
            </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-gray-600">
            © 2025 Pluvio Inc. All rights reserved.
          </p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-gray-500">All systems operational</span>
</div>
</div>
</div>
</footer>

<style>
      #calcRange::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid #18181b;
          border-radius: 50%;
          cursor: grab;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.1s;
      }
      #calcRange::-webkit-slider-thumb:hover {
          transform: scale(1.1);
      }
    </style>


    </>
  );
}
