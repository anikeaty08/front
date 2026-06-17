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
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
},
dark: '#0f172a',
light: '#F8FAFC',
},
boxShadow: {
'soft': '0 4px 24px rgba(0, 0, 0, 0.04)',
'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
'float': '0 20px 50px -12px rgba(37, 99, 235, 0.15)',
'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. SCROLL REVEAL OBSERVER
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 2. ROI CALCULATOR LOGIC
            const slider = document.getElementById('employee-slider');
            const empCountEl = document.getElementById('emp-count');
            const issuesEl = document.getElementById('est-issues');
            const fundsEl = document.getElementById('rec-funds');
            const hoursEl = document.getElementById('rec-hours');

            if(slider) {
                slider.addEventListener('input', (e) => {
                    const employees = parseInt(e.target.value);
                    const issues = Math.floor(employees * 0.25); // 25% utilization estimate
                    const funds = issues * 680; // Avg $680 savings per issue
                    const hours = issues * 3.8; // Avg 3.8 hours per issue

                    // Update DOM
                    empCountEl.innerText = employees.toLocaleString();
                    issuesEl.innerText = issues.toLocaleString();
                    fundsEl.innerText = '$' + funds.toLocaleString();
                    hoursEl.innerText = Math.floor(hours).toLocaleString() + ' hrs';
                });
            }
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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg group-hover:text-blue-600 transition-colors">TIAKI PRO</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#">Product</a>
<a className="hover:text-blue-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-blue-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-blue-600 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign In</a>
<a className="hidden sm:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5" href="#">
                    Get Started
                    <iconify-icon className="ml-1.5" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid mask-fade -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-100/50 blur-[120px] rounded-full -z-10 opacity-60"></div>
<div className="max-w-5xl mx-auto px-6 text-center">

<div className="reveal">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                    Resolve Employee Financial <br/> <span className="text-blue-600">Stress at Scale.</span>
</h1>
</div>

<div className="reveal delay-100">
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    An AI-led resolution system with professional advocates—resolving employee financial issues and restoring productive work hours automatically.
                </p>
</div>

<div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                    Start Saving Today
                </button>
<button className="h-12 px-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center gap-2">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
                    Calculate ROI
                </button>
</div>

<div className="reveal delay-300 relative w-full max-w-[440px] mx-auto perspective-[1000px]">

<div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-xl rounded-2xl"></div>

<div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-float border border-white/50 overflow-hidden text-left transform transition-transform hover:scale-[1.01] duration-500">

<div className="p-6 pb-2 relative z-10 border-b border-slate-100/50">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center text-white ring-4 ring-blue-50">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block font-bold text-slate-900 text-sm">Tiaki Assistant</span>
<span className="block text-xs text-slate-400">Online • AI Powered</span>
</div>
</div>
<div className="p-2 rounded-full hover:bg-slate-50 text-slate-400 cursor-pointer">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-[20px] font-semibold text-slate-800 tracking-tight leading-snug">Hi Tate, how can we help with your finances today?</h3>
</div>

<div className="p-4 space-y-2 relative z-10 bg-slate-50/50">

<div className="tiaki-item" style={{animationDelay: '0.5s'}}>
<button className="w-full flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-text-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Appeal a denied claim</span>
</button>
</div>

<div className="tiaki-item demo-row relative" style={{animationDelay: '0.6s'}}>
<button className="w-full flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm transition-all group text-left relative z-10">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:bill-list-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Reduce a medical bill</span>
</button>

<div className="cursor-hand text-slate-900">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19135L11.7841 12.3673H5.65376Z" fill="#1e293b" stroke="white"></path>
</svg>
</div>
</div>

<div className="tiaki-item" style={{animationDelay: '0.7s'}}>
<button className="w-full flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:danger-circle-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Resolve collections Issue</span>
</button>
</div>

<div className="tiaki-item" style={{animationDelay: '0.8s'}}>
<button className="w-full flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group text-left">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Lower Household Bills</span>
</button>
</div>
</div>

<div className="p-4 pt-2 bg-slate-50/50 tiaki-item" style={{animationDelay: '0.9s'}}>
<div className="h-12 bg-white rounded-xl flex items-center px-4 justify-between border border-slate-200 shadow-sm group transition-colors focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400">
<span className="text-sm text-slate-400">Type your request...</span>
<div className="text-blue-600 p-1.5 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="marquee-container relative w-full overflow-hidden">
<div className="flex gap-16 w-max animate-marquee">

<span className="text-xl font-bold text-slate-300 tracking-tighter">ACME CORP</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">NEXUS GLOBAL</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">STRATOS</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">POLYMER</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">VENTURE</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">HORIZON</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">ALTITUDE</span>

<span className="text-xl font-bold text-slate-300 tracking-tighter">ACME CORP</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">NEXUS GLOBAL</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">STRATOS</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">POLYMER</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">VENTURE</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">HORIZON</span>
<span className="text-xl font-bold text-slate-300 tracking-tighter">ALTITUDE</span>
</div>
</div>
</section>

<section className="bg-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="px-4 reveal">
<p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-2">50,000+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Issues Supported</p>
</div>
<div className="px-4 pt-8 md:pt-0 reveal delay-100">
<p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-2 text-blue-600">$10M+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Savings Identified</p>
</div>
<div className="px-4 pt-8 md:pt-0 reveal delay-200">
<p className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-2">30k+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Work Hours Recovered</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Financial Stress Is a Measurable Business Risk</h2>
<p className="text-lg text-slate-500">It silently drains productivity, engagement, and profit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-white group">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">76% Are Distracted at Work</h3>
<p className="text-slate-500 leading-relaxed text-sm">Financial stress impacts focus and output, reducing cognitive capacity for daily tasks.</p>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-white group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">60% Live Paycheck to Paycheck</h3>
<p className="text-slate-500 leading-relaxed text-sm">Unexpected expenses disrupt work rhythms and create immediate personal crises.</p>
</div>

<div className="reveal p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-white group">
<div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">35% Have Accounts in Collections</h3>
<p className="text-slate-500 leading-relaxed text-sm">Debt increases absenteeism, anxiety, and long-term health complications.</p>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-white group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Resolved on Company Time</h3>
<p className="text-slate-500 leading-relaxed text-sm">Insurers, Providers and Financial Institutions operate 9–5, forcing employees to call during work.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-3/5 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
                        End-to-End Resolution
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                        Employees Don’t Need Advice. <br/><span className="text-blue-600">They Need Resolution.</span>
</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        We take ownership of employee financial problems — end to end. No more endless phone trees or confusing paperwork.
                    </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">Denied medical claim appeals</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">Bill negotiation (Hospital/Provider)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">Collections account resolution</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">Insurance benefits disputes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">Recurring bill optimization</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-700">20+ financial issue types</span>
</li>
</ul>
</div>

<div className="w-full lg:w-2/5 relative reveal delay-200">

<div className="relative bg-white p-6 rounded-[24px] shadow-float border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
<div className="h-2 w-24 bg-slate-100 rounded"></div>
<div className="bg-green-100 text-green-700 rounded-lg flex items-center gap-1.5 text-xs font-bold px-3 py-1">
<iconify-icon icon="solar:verified-check-bold"></iconify-icon> RESOLVED
                            </div>
</div>

<div className="space-y-8">
<div className="flex gap-4 opacity-50 grayscale">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
</div>
<div className="h-full w-0.5 bg-slate-100 my-2"></div>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">Oct 12, 9:00 AM</div>
<div className="text-sm text-slate-600">Employee uploads denied claim.</div>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
<iconify-icon icon="solar:headset-bold" width="16"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">Oct 14, 2:00 PM</div>
<div className="text-sm text-slate-900 font-semibold">Advocate negotiates with provider.</div>
<div className="mt-3 p-4 bg-green-50/80 border border-green-100 rounded-xl">
<p className="text-sm text-green-800 font-medium flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
                                            $1,240 saved. Account cleared.
                                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white py-3 px-5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-blue-600 text-white rounded-full p-2 flex items-center justify-center">
<iconify-icon icon="solar:hourglass-line-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Time Saved</p>
<p className="text-sm font-bold text-slate-900">4 hrs 30 mins</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-white relative overflow-hidden" id="roi-calc">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">Calculate Your Productivity ROI</h2>
<p className="text-slate-400 text-lg">See how much lost time and money you can recover.</p>
</div>
<div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700 reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col justify-center">
<label className="block text-sm font-medium text-slate-300 mb-6">Number of Employees</label>
<div className="relative mb-8">
<div className="flex justify-between items-center mb-4">
<span className="text-slate-400 text-xs">50</span>
<span className="text-4xl font-bold text-blue-400 tracking-tight" id="emp-count">500</span>
<span className="text-slate-400 text-xs">5000</span>
</div>
<input className="custom-range" id="employee-slider" max="5000" min="50" step="10" type="range" value="500"/>
</div>
<p className="text-xs text-slate-500 italic">Based on 25% annual utilization rate.</p>
</div>

<div className="space-y-4">
<div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-slate-800 p-2 rounded-lg text-slate-400"><iconify-icon icon="solar:file-check-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Est. Issues Resolved</span>
</div>
<span className="text-xl font-mono font-bold" id="est-issues">125</span>
</div>
<div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-slate-800 p-2 rounded-lg text-green-400"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Funds Recovered</span>
</div>
<span className="text-xl font-mono font-bold text-green-400" id="rec-funds">$85,000</span>
</div>
<div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-slate-800 p-2 rounded-lg text-blue-400"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon></div>
<span className="text-sm text-slate-300">Hours Restored</span>
</div>
<span className="text-xl font-mono font-bold text-blue-400" id="rec-hours">475 hrs</span>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-700 text-center">
<button className="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
<iconify-icon icon="solar:file-download-linear"></iconify-icon>
                        Download Full ROI Report
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-16 tracking-tight reveal">Three Steps to Real Results</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 bg-white p-6 pt-0 text-center group reveal delay-100">
<div className="w-24 h-24 mx-auto bg-white border-4 border-white rounded-full flex items-center justify-center mb-6 relative shadow-soft">
<div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            1
                        </div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Submit</h3>
<p className="text-slate-500 text-sm leading-relaxed">Employees upload their issue in minutes via secure portal.</p>
</div>

<div className="relative z-10 bg-white p-6 pt-0 text-center group reveal delay-200">
<div className="w-24 h-24 mx-auto bg-white border-4 border-white rounded-full flex items-center justify-center mb-6 relative shadow-soft">
<div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            2
                        </div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Advocate</h3>
<p className="text-slate-500 text-sm leading-relaxed">AI workflows + human experts analyze billing codes and negotiate.</p>
</div>

<div className="relative z-10 bg-white p-6 pt-0 text-center group reveal delay-300">
<div className="w-24 h-24 mx-auto bg-white border-4 border-white rounded-full flex items-center justify-center mb-6 relative shadow-soft">
<div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-2xl font-bold text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            3
                        </div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Deliver</h3>
<p className="text-slate-500 text-sm leading-relaxed">Money recovered. Time restored. Stress permanently removed.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight reveal">Simple Pricing. Unlimited Impact.</h2>
<div className="max-w-md mx-auto mt-12 bg-white rounded-3xl shadow-float ring-1 ring-slate-100 relative overflow-hidden reveal delay-100 hover:scale-[1.02] transition-transform duration-500">
<div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
<div className="p-8 pb-0">
<span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 tracking-wide">ENTERPRISE</span>
<p className="text-sm text-slate-500 mb-2">Starting at just</p>
<div className="flex items-end justify-center gap-1 mb-2">
<span className="text-6xl font-bold text-slate-900 tracking-tighter">$20</span>
<span className="text-slate-500 font-medium mb-1">/ day</span>
</div>
<p className="text-xs text-slate-400 mb-6">For your entire workforce and households</p>
</div>
<div className="px-8 pb-8">
<div className="space-y-4 mb-8 text-left border-t border-slate-100 pt-8">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Unlimited usage
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            No per-employee fees
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            No long-term contracts
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Full access &amp; ROI reporting
                        </div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full h-12 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                            Get Pricing
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center text-white reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Restore Focus. Reduce Stress.<br/>Increase Productivity.</h2>
<p className="text-blue-100 text-xl mb-10">Trusted by modern enterprises. Starting at $20/day.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-lg">
                    Get Started Now
                </button>
<button className="h-12 px-8 rounded-xl bg-blue-700 border border-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                    Schedule Demo
                </button>
</div>
</div>
</section>

<footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg">TIAKI PRO</span>
</div>
<p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                        The enterprise-grade financial resolution platform. Recovering time and money for the modern workforce.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="font-semibold text-slate-900 mb-1">Platform</span>
<a className="hover:text-blue-600 transition-colors" href="#">Product</a>
<a className="hover:text-blue-600 transition-colors" href="#">Security</a>
<a className="hover:text-blue-600 transition-colors" href="#">Compliance</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold text-slate-900 mb-1">Company</span>
<a className="hover:text-blue-600 transition-colors" href="#">About</a>
<a className="hover:text-blue-600 transition-colors" href="#">Contact</a>
<a className="hover:text-blue-600 transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-semibold text-slate-900 mb-1">Legal</span>
<a className="hover:text-blue-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-blue-600 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
                © 2023 ReliefPoint. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
