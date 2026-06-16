import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Initialize Lucide icons
lucide.createIcons();

// Download functionality
document.getElementById('downloadBtn').addEventListener('click', () => {
  const html = document.documentElement.outerHTML;
  const blob = new Blob([html], {type: 'text/html'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'financeflow-banking.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Add smooth hover interactions
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-1px)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-900 font-sans">FinanceFlow</span>
</div>
<div className="hidden sm:flex items-center gap-6">
<a className="text-sm transition hover:text-slate-900 font-sans text-emerald-950" href="#">Features</a>
<a className="text-sm transition hover:text-slate-900 font-sans text-emerald-950" href="#">Pricing</a>
<a className="text-sm transition hover:text-slate-900 font-sans text-emerald-950" href="#">About</a>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition bg-slate-900 text-white hover:bg-slate-800 font-sans">Get Started</button>
</div>
<button className="sm:hidden p-2">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="flex-1 w-full max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12 lg:mb-16">
<h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-slate-900 tracking-tight font-manrope" style={{}}>
      Banking made
      <span className="bg-gradient-to-r bg-clip-text text-transparent from-emerald-600 to-blue-600 tracking-tight font-manrope" style={{}}>effortless</span>
</h1>
<p className="text-lg sm:text-xl max-w-2xl mx-auto font-sans text-emerald-950">
      Experience next-generation digital banking with intelligent spending insights and seamless money management
    </p>
</div>

<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center mb-16">

<div className="relative w-72 h-[600px] rounded-[40px] shadow-2xl overflow-hidden ring-1 bg-slate-900 ring-black/20">

<div className="absolute top-20 left-36 w-6 h-6 bg-gradient-to-br to-blue-500 rounded-xl rotate-12 floating-shapes from-emerald-400"></div>
<div className="absolute top-72 left-16 w-4 h-4 bg-gradient-to-br to-blue-500 rounded-lg -rotate-45 floating-shapes from-emerald-400" style={{animationDelay: '-2s'}}></div>
<div className="absolute top-44 left-8 w-5 h-5 bg-gradient-to-br to-blue-500 rounded-xl rotate-6 floating-shapes from-emerald-400" style={{animationDelay: '-4s'}}></div>

<div className="flex items-center justify-between px-6 pt-4 text-xs text-white/70">
<span className="font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-3 h-3" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-3 h-3" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex flex-col h-full justify-between px-6 py-8">

<button className="flex items-center text-sm gap-2 transition text-white/80 hover:text-white font-sans">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          Back
        </button>

<div className="space-y-6">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 rounded-2xl flex items-center justify-center mx-auto to-blue-600">
<svg className="lucide lucide-credit-card w-8 h-8 text-white" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="text-center">
<h1 className="leading-tight text-4xl text-white tracking-tight font-manrope text-center mb-4" style={{}}>secure payments made simple</h1>
<p className="text-sm leading-relaxed text-white/70 font-sans">
              Bank with confidence using advanced encryption and biometric security for all transactions
            </p>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-white/80 font-sans">
<div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-shield w-3 h-3 text-emerald-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
              256-bit encryption
            </div>
<div className="flex items-center gap-3 text-sm text-white/80 font-sans">
<div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-fingerprint w-3 h-3 text-blue-400" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
              Biometric authentication
            </div>
<div className="flex items-center gap-3 text-sm text-white/80 font-sans">
<div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-clock w-3 h-3 text-purple-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
              Instant notifications
            </div>
</div>
</div>

<div className="pb-2 space-y-3">
<button className="w-full bg-gradient-to-r from-emerald-500 rounded-2xl py-4 text-sm font-medium transition shadow-lg to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-sans" style={{transform: 'translateY(0px)'}}>
            Continue Setup
          </button>
<div className="flex justify-center">
<div className="flex gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
<div className="w-2 h-2 rounded-full bg-white/30"></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-72 h-[600px] rounded-[40px] backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 bg-white/70 ring-black/10">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white/50 to-blue-100/60"></div>

<div className="relative z-10 flex items-center justify-between px-6 pt-4 text-xs text-slate-700">
<span className="font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-3 h-3" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-6 h-3 border rounded-sm border-slate-400/50">
<div className="w-4 h-1.5 bg-green-500 rounded-sm"></div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col h-full px-6 py-6">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden ring-2 shadow-sm ring-white">
<img alt="Sarah Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1080&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900 font-sans">Good morning</p>
<p className="text-xs text-slate-500 font-sans">Sarah Chen</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 rounded-lg transition hover:bg-white/50">
<svg className="lucide lucide-bell w-5 h-5 text-emerald-950" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
</button>
<button className="p-2 rounded-lg transition hover:bg-white/50">
<svg className="lucide lucide-settings w-5 h-5 text-emerald-950" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="mb-6">
<div className="relative w-full h-44 rounded-3xl bg-gradient-to-br via-blue-500 shadow-xl overflow-hidden from-emerald-400 to-purple-600">
<div className="absolute inset-0 bg-black/10"></div>
<div className="relative z-10 p-6 text-white">
<div className="flex justify-between items-start mb-8">
<div className="">
<p className="text-sm opacity-90 font-sans">Total Balance</p>
<p className="text-3xl tracking-tight font-manrope" style={{}}>$12,847.92</p>
</div>
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="flex justify-between items-end">
<div className="">
<p className="text-xs opacity-75 font-sans">**** **** **** 4829</p>
<p className="text-xs opacity-75 mt-1 font-sans">Valid 12/28</p>
</div>
<div className="flex gap-1">
<div className="w-6 h-4 rounded bg-white/30"></div>
<div className="w-6 h-4 rounded bg-white/30"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3 mb-6">
<button className="flex flex-col items-center gap-2 p-3 rounded-xl transition shadow-sm bg-white/70 hover:bg-white/90" style={{transform: 'translateY(0px)'}}>
<div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-send w-4 h-4 text-emerald-600" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="text-xs font-medium text-slate-700 font-sans">Send</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 rounded-xl transition shadow-sm bg-white/70 hover:bg-white/90" style={{transform: 'translateY(0px)'}}>
<div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-download w-4 h-4 text-blue-600" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<span className="text-xs font-medium text-slate-700 font-sans">Request</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 rounded-xl transition shadow-sm bg-white/70 hover:bg-white/90" style={{transform: 'translateY(0px)'}}>
<div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-plus w-4 h-4 text-purple-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-xs font-medium text-slate-700 font-sans">Top up</span>
</button>
<button className="flex flex-col items-center gap-2 p-3 rounded-xl transition shadow-sm bg-white/70 hover:bg-white/90" style={{transform: 'translateY(0px)'}}>
<div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-orange-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<span className="text-xs font-medium text-slate-700 font-sans">More</span>
</button>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="rounded-xl p-4 shadow-sm bg-white/70">
<div className="flex items-center justify-between mb-2">
<div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up w-3 h-3 text-green-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs font-medium text-green-600 font-sans">+12.5%</span>
</div>
<p className="text-lg font-semibold text-slate-900 font-sans">$3,248</p>
<p className="text-xs text-slate-500 font-sans">Income this month</p>
</div>
<div className="rounded-xl p-4 shadow-sm bg-white/70">
<div className="flex items-center justify-between mb-2">
<div className="w-6 h-6 bg-red-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-down w-3 h-3 text-red-600" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<span className="text-xs font-medium text-red-600 font-sans">-8.2%</span>
</div>
<p className="text-lg font-semibold text-slate-900 font-sans">$1,892</p>
<p className="text-xs text-slate-500 font-sans">Spending this month</p>
</div>
</div>

<div className="flex-1">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-slate-900 font-sans">Recent Activity</h3>
<button className="text-xs transition text-blue-600 hover:text-blue-700 font-sans">View all</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
<div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-coffee w-4 h-4 text-blue-600" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900 font-sans">Brew &amp; Bean</p>
<p className="text-xs text-slate-500 font-sans">Coffee &amp; Food</p>
</div>
<p className="text-xs font-medium text-slate-900 font-sans">-$12.50</p>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
<div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-arrow-down-left w-4 h-4 text-green-600" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900 font-sans">Salary Deposit</p>
<p className="text-xs text-slate-500 font-sans">Direct Transfer</p>
</div>
<p className="text-xs font-medium text-green-600 font-sans">+$2,840.00</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm hover:shadow-md transition bg-white/60 border-white/20">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900 font-sans">Bank-level Security</h3>
<p className="text-sm font-sans text-emerald-950">Your money is protected with military-grade encryption and fraud detection.</p>
</div>
<div className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm hover:shadow-md transition bg-white/60 border-white/20">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-zap w-6 h-6 text-blue-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900 font-sans">Instant Transfers</h3>
<p className="text-sm font-sans text-emerald-950">Send money anywhere in seconds with zero hidden fees or delays.</p>
</div>
<div className="backdrop-blur-sm rounded-2xl p-6 border shadow-sm hover:shadow-md transition bg-white/60 border-white/20">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-purple-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-slate-900 font-sans">Smart Insights</h3>
<p className="text-sm font-sans text-emerald-950">Get AI-powered spending analysis and personalized financial recommendations.</p>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 rounded-full text-sm shadow-lg transition z-50 bg-slate-900 text-white hover:bg-slate-800" id="downloadBtn">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="hidden sm:inline font-sans">Download</span>
</button>


    </>
  );
}
