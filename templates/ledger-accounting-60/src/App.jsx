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
colors: {
slate: { 850: '#151f32' }
}
}
}
}



        // 1. Particle/Mesh Canvas Animation (Same as previous)
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; 
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = '#cbd5e1'; 
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(width / 10, 80); 
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(1, "rgba(241, 245, 249, 0.5)"); 
            ctx.fillStyle = gradient;
            ctx.fillRect(0,0,width,height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(203, 213, 225, ${1 - dist/150})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => { resize(); initParticles(); });
        resize();
        initParticles();
        animate();

        // 2. Dashboard Mini Chart
        const barContainer = document.getElementById('mini-chart');
        if(barContainer) {
            for(let i=0; i<15; i++) {
                const h = Math.floor(Math.random() * 70) + 30;
                const el = document.createElement('div');
                el.className = 'w-full rounded-t-sm bg-indigo-100';
                el.style.height = `${h}%`;
                barContainer.appendChild(el);
            }
        }

        // 3. Calculator Logic
        const txSlider = document.getElementById('tx-slider');
        const rateSlider = document.getElementById('rate-slider');
        const txDisplay = document.getElementById('tx-display');
        const rateDisplay = document.getElementById('rate-display');
        const savingsDisplay = document.getElementById('savings-display');
        const hoursDisplay = document.getElementById('hours-display');

        function calculateSavings() {
            const tx = parseInt(txSlider.value);
            const rate = parseInt(rateSlider.value);
            
            // Format Displays
            txDisplay.textContent = tx.toLocaleString();
            rateDisplay.textContent = '$' + rate + '/hr';

            // Logic: Assume manual takes 3 mins (0.05 hrs) per tx. 
            // Automated takes ~0.
            const hoursSavedPerMonth = Math.round(tx * 0.05);
            const moneySavedPerMonth = hoursSavedPerMonth * rate;
            const moneySavedPerYear = moneySavedPerMonth * 12;

            hoursDisplay.textContent = hoursSavedPerMonth.toLocaleString();
            savingsDisplay.textContent = '$' + moneySavedPerYear.toLocaleString('en-US');
            
            // Animation class for effect
            savingsDisplay.classList.remove('animate-pulse');
            void savingsDisplay.offsetWidth; // trigger reflow
            savingsDisplay.classList.add('animate-pulse');
        }

        txSlider.addEventListener('input', calculateSavings);
        rateSlider.addEventListener('input', calculateSavings);
        
        // Initial calc
        calculateSavings();

    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium text-lg tracking-tighter">L</span>
</div>
<span className="font-medium text-slate-900 tracking-tight group-hover:opacity-80 transition-opacity">Ledger</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Product</a>
<a className="hover:text-slate-900 transition-colors" href="#customers">Customers</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md" href="#">
                    Start Trial
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<canvas className="absolute inset-0 w-full h-full opacity-40 -z-10 pointer-events-none" id="heroCanvas"></canvas>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    New: AI-Powered Reconciliation v2.0
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Accounting for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900">modern economy</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                    Automate your bookkeeping, visualize cash flow in real-time, and close your books 10x faster with Ledger's intelligent engine.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2">
                        Get Started Free
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative mx-auto max-w-5xl perspective-1000 group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
<div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
<div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="p-6 bg-slate-50/30">
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Revenue</div>
<div className="text-xl font-semibold text-slate-900">$124,500.00</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Expenses</div>
<div className="text-xl font-semibold text-slate-900">$42,300.20</div>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
<div className="text-xs text-slate-500 mb-1">Profit</div>
<div className="text-xl font-semibold text-slate-900">$82,199.80</div>
</div>
</div>
<div className="h-32 w-full bg-white rounded-lg border border-slate-100 p-4 flex items-end justify-between gap-2" id="mini-chart"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by finance teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><div className="w-4 h-4 bg-slate-800 rounded-sm"></div> ACME</div>
<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><div className="w-4 h-4 rounded-full border-2 border-slate-800"></div> GLOBEX</div>
<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="lucide:hexagon" width="20"></iconify-icon> SOYANT</div>
<div className="text-xl font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="lucide:triangle" width="20"></iconify-icon> VOLTEX</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Zero-touch reconciliation.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Our AI engine ingests data from thousands of banks and payment processors, automatically categorizing 99% of your transactions with human-level accuracy.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Smart rules engine for custom logic</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Direct integration with Stripe, PayPal, and Wise</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Detect duplicates and anomalies instantly</span>
</li>
</ul>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white rounded-2xl -z-10"></div>
<div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-6 relative max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="flex items-center justify-between mb-6">
<div className="text-sm font-medium text-slate-900">Unreconciled Items</div>
<div className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded tracking-wide">3 Matches Found</div>
</div>

<div className="space-y-3">

<div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-xs font-semibold text-slate-900">AWS Cloud Svc</span>
<span className="text-xs font-medium text-slate-900">-$2,400.00</span>
</div>
<div className="text-[10px] text-slate-400 mt-0.5">Oct 24 • Ending in 4242</div>
</div>
</div>

<div className="flex justify-center -my-1 relative z-10">
<div className="bg-white border border-slate-200 rounded-full p-1 shadow-sm">
<iconify-icon className="text-slate-300" icon="lucide:arrow-down" width="14"></iconify-icon>
</div>
</div>

<div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-500" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">AI Suggested Match</span>
</div>
<div className="flex items-center justify-between bg-white p-2 rounded border border-indigo-100 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center">
<iconify-icon className="text-slate-500" icon="lucide:receipt" width="12"></iconify-icon>
</div>
<div className="text-xs text-slate-600">Invoice #INV-2023-001</div>
</div>
<button className="bg-indigo-600 text-white text-[10px] font-medium px-3 py-1.5 rounded hover:bg-indigo-500 transition-colors">
                                        Confirm
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row-reverse items-center gap-16">

<div className="lg:w-1/2">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Financial clarity at a glance.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Stop waiting for end-of-month reports. Visualize your runway, burn rate, and profit margins in real-time with interactive dashboards designed for decision makers.
                    </p>
<div className="flex gap-4">
<div className="pl-4 border-l-2 border-slate-200">
<div className="text-2xl font-medium text-slate-900 tracking-tight">120+</div>
<div className="text-xs text-slate-500 font-medium">Pre-built Reports</div>
</div>
<div className="pl-4 border-l-2 border-slate-200">
<div className="text-2xl font-medium text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-500 font-medium">Exportable Data</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full">
<div className="bg-white border border-slate-200 rounded-xl shadow-xl p-6 relative max-w-md mx-auto">

<div className="flex justify-between items-end mb-6">
<div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Net Cash Flow</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$64,230.50</div>
</div>
<div className="flex gap-1">
<span className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 text-xs text-slate-600 font-medium cursor-pointer">1M</span>
<span className="w-8 h-8 flex items-center justify-center rounded bg-slate-900 text-xs text-white font-medium shadow cursor-pointer">3M</span>
<span className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 text-xs text-slate-600 font-medium cursor-pointer">1Y</span>
</div>
</div>

<div className="relative h-48 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-300">
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
<div className="border-b border-dashed border-slate-100 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,40 C50,40 50,70 100,70 C150,70 150,20 200,30 C250,40 300,90 350,60 C380,45 400,10 420,5" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,40 C50,40 50,70 100,70 C150,70 150,20 200,30 C250,40 300,90 350,60 C380,45 400,10 420,5 V 190 H 0 Z" fill="url(#gradient)" opacity="0.1"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-[10px] right-[20px] bg-slate-900 text-white text-[10px] py-1 px-2 rounded shadow-lg">
                                +$12,400 (Oct)
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
<div className="absolute top-[32px] right-[26px] w-3 h-3 bg-white border-2 border-indigo-600 rounded-full z-10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Built for modern teams.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Delegate without losing control. Set up granular permission levels, custom approval workflows, and collaborate with your accountant directly within the platform.
                    </p>
<button className="text-indigo-600 font-medium text-sm hover:text-indigo-700 inline-flex items-center gap-1 group">
                        Explore Team Features 
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative max-w-md mx-auto">

<div className="bg-white border border-slate-200 rounded-xl shadow-xl p-5 z-10 relative">
<div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold border border-slate-200">
                                    mk
                                </div>
<div>
<div className="text-sm font-medium text-slate-900">Expense Request</div>
<div className="text-xs text-slate-500">From Mike Ross • Marketing</div>
</div>
<div className="ml-auto px-2 py-0.5 bg-yellow-50 text-yellow-600 text-[10px] font-semibold rounded uppercase">Pending</div>
</div>
<div className="mb-4">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$850.00</div>
<div className="text-xs text-slate-500 mt-1">Q4 Advertising Campaign Assets</div>
</div>
<div className="bg-slate-50 rounded p-3 mb-4 border border-slate-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="lucide:message-square" width="12"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Recent Activity</span>
</div>
<div className="text-[11px] text-slate-500 leading-normal">
<span className="font-medium text-slate-800">Mike:</span> "Attached the invoice from the agency. Need approval by Friday."
                                </div>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-slate-900 text-white text-xs font-medium py-2 rounded hover:bg-slate-800 transition-colors">Approve</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium py-2 rounded hover:bg-slate-50 transition-colors">Reject</button>
</div>
</div>

<div className="absolute top-4 -right-4 w-full h-full bg-slate-50 border border-slate-100 rounded-xl -z-10 transform scale-95 opacity-60"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="customers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Loved by CFOs</h2>
<p className="text-lg text-slate-500">Join thousands of companies scaling with Ledger.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-indigo-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-600 mb-6 leading-relaxed">"Ledger has completely transformed how we close our books. What used to take 5 days now takes 2 hours."</blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">SK</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Klein</div>
<div className="text-xs text-slate-400">CFO, TechFlow</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-indigo-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-600 mb-6 leading-relaxed">"The UI is incredibly intuitive. It feels less like accounting software and more like a modern productivity tool."</blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">MJ</div>
<div>
<div className="text-sm font-medium text-slate-900">Marcus Jones</div>
<div className="text-xs text-slate-400">Founder, Designify</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-indigo-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-slate-600 mb-6 leading-relaxed">"Finally, software that handles multi-currency correctly without a headache. Best investment this year."</blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">EL</div>
<div>
<div className="text-sm font-medium text-slate-900">Elena Liu</div>
<div className="text-xs text-slate-400">Finance Dir, GlobalX</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Calculate your ROI</h2>
<p className="text-slate-500">See how much time and money you can save with automated bookkeeping.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

<div className="p-8 md:w-3/5 space-y-8">
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-slate-900">Monthly Transactions</label>
<span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded" id="tx-display">1,500</span>
</div>
<input className="w-full" id="tx-slider" max="10000" min="100" step="100" type="range" value="1500"/>
<div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
<span>100</span>
<span>10,000</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-slate-900">Accountant Hourly Rate</label>
<span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded" id="rate-display">$75/hr</span>
</div>
<input className="w-full" id="rate-slider" max="200" min="20" step="5" type="range" value="75"/>
<div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
<span>$20</span>
<span>$200</span>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="mt-0.5 text-slate-400" icon="lucide:info" width="14"></iconify-icon>
<p>Based on average manual entry time of 3 minutes per transaction vs 0.1 seconds with Ledger.</p>
</div>
</div>
</div>

<div className="bg-slate-900 md:w-2/5 p-8 flex flex-col justify-center text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[60px] opacity-30 -mr-10 -mt-10"></div>
<div className="relative z-10">
<div className="mb-6">
<div className="text-sm font-medium text-slate-400 mb-1">Estimated Annual Savings</div>
<div className="text-4xl font-semibold tracking-tight text-white" id="savings-display">$135,000</div>
</div>
<div className="mb-8">
<div className="text-sm font-medium text-slate-400 mb-1">Hours Saved Per Month</div>
<div className="text-2xl font-semibold tracking-tight text-emerald-400 flex items-center gap-2">
<span id="hours-display">75</span> hrs
                                <iconify-icon icon="lucide:trending-up" width="18"></iconify-icon>
</div>
</div>
<button className="w-full bg-white text-slate-900 hover:bg-indigo-50 py-3 rounded-lg font-medium text-sm transition-colors">
                            Start Saving Today
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="relative bg-slate-900 rounded-2xl overflow-hidden p-12 text-center shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-40 -top-20 -left-20"></div>
<div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-40 bottom-0 right-0"></div>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to upgrade your finance stack?</h2>
<p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Start your 14-day free trial today. No credit card required.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors">
                            Get Started
                        </button>
<button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-8 py-3 rounded-lg font-medium transition-colors">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-medium text-xs tracking-tighter">L</span>
</div>
<span className="font-medium text-slate-900 tracking-tight">Ledger</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        The operating system for modern finance teams. Built for speed, accuracy, and clarity.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">© 2023 Ledger Inc. All rights reserved.</div>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500 font-medium">Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
