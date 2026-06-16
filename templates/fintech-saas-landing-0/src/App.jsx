import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gray: {
25: '#FCFCFD',
50: '#F9FAFB',
100: '#F2F4F7',
200: '#EAECF0',
300: '#D0D5DD',
400: '#98A2B3',
500: '#667085',
600: '#475467',
700: '#344054',
800: '#1D2939',
900: '#101828',
},
ios: {
blue: '#007AFF',
bg: '#F5F5F7',
card: 'rgba(255, 255, 255, 0.72)',
}
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
'ios': '0 4px 24px -1px rgba(0, 0, 0, 0.04)',
'glow': '0 0 80px -20px rgba(59, 130, 246, 0.3)',
}
}
},
plugins: [
function({ addUtilities }) {
const rotateValues = [0, 5, 10, 15, 20, 30];
const utilities = {
'.perspective-distant': { perspective: '2000px' },
'.perspective-none': { perspective: 'none' },
'.transform-style-preserve-3d': { 'transform-style': 'preserve-3d' },
'.backface-hidden': { 'backface-visibility': 'hidden' },
};
rotateValues.forEach(v => {
utilities[`.rotate-x-${v}`] = { transform: `rotateX(${v}deg)` };
utilities[`.-rotate-x-${v}`] = { transform: `rotateX(-${v}deg)` };
utilities[`.rotate-y-${v}`] = { transform: `rotateY(${v}deg)` };
});
addUtilities(utilities);
}
]
}



        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6">
<div className="relative flex h-14 items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm shadow-black/5 px-2">

<a className="flex items-center gap-2 pl-4 group" href="#">
<span className="text-lg font-bold tracking-tight text-gray-900 font-heading">Maxima</span>
</a>

<nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<ul className="flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
<li><a className="px-4 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">Platform</a></li>
<li><a className="px-4 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">Customers</a></li>
<li><a className="px-4 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all" href="#">Pricing</a></li>
</ul>
</nav>

<div className="flex items-center gap-2 pr-1">
<button className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors">Log in</button>
<button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-gray-900 px-5 text-white transition-transform active:scale-95 shadow-lg shadow-gray-900/20">
<span className="text-xs font-semibold relative z-10 flex items-center gap-2">
                            Get Started
                            <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>
</div>
</header>

<main className="relative z-10 pt-32 pb-24">

<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16 relative">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/60 shadow-sm backdrop-blur-md mb-8 cursor-pointer hover:bg-white/80 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-semibold text-gray-600 tracking-tight">Introducing Auto-Recon 2.0</span>
<svg className="lucide lucide-chevron-right w-3 h-3 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 font-heading max-w-4xl mx-auto leading-[1.1]">
                The operating system for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">modern finance.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
                Consolidate ledgers, automate reconciliation, and close your books in real-time. Maxima is the AI copilot for finance teams that move fast.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-2xl bg-gray-900 text-white font-semibold text-sm shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    See how it works
                </button>
<button className="h-12 px-8 rounded-2xl bg-white text-gray-700 border border-gray-200/60 font-semibold text-sm shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                    Book a demo
                </button>
</div>
</div>

<div className="relative w-full max-w-[1100px] mx-auto perspective-distant px-4 sm:px-6">

<div className="absolute inset-x-0 top-20 h-[400px] bg-gradient-to-b from-blue-500/20 via-indigo-500/5 to-transparent blur-[80px] -z-10 rounded-full"></div>

<div className="relative w-full bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)] rotate-x-15 hover:rotate-x-5 transition-transform duration-[1.5s] ease-out transform-style-preserve-3d group">

<div className="absolute top-0 left-0 w-full h-14 border-b border-gray-200/50 flex items-center px-6 justify-between z-20 bg-white/50 rounded-t-[2rem] backdrop-blur-xl">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100/50 border border-gray-200/50">
<svg className="lucide lucide-lock w-3 h-3 text-gray-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-[11px] font-medium text-gray-500 font-mono">maxima.ai/dashboard</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gray-200/50 flex items-center justify-center">
<svg className="lucide lucide-bell w-3 h-3 text-gray-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-12 h-[640px] pt-14 rounded-b-[2rem] overflow-hidden">

<div className="hidden md:block col-span-3 bg-gray-50/50 border-r border-gray-200/50 p-4 flex flex-col justify-between">
<div className="space-y-6">
<div className="space-y-1">
<div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-white rounded-xl shadow-sm border border-gray-100" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-blue-600" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                                    Dashboard
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-arrow-left-right w-4 h-4" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
                                    Transactions
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-pie-chart w-4 h-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
                                    Reports
                                </a>
</div>
<div className="space-y-1">
<div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Workflows</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
                                    Month End
                                    <span className="ml-auto bg-orange-100 text-orange-600 text-[10px] font-bold px-1.5 py-0.5 rounded-md">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                    Vendors
                                </a>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border border-white shadow-sm flex items-center justify-center text-xs font-bold text-blue-600">JP</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900">Julia P.</span>
<span className="text-[10px] text-gray-500">Controller</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 bg-white p-8 overflow-y-auto no-scrollbar relative">

<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-bold text-gray-900 tracking-tight font-heading">October Close</h2>
<p className="text-sm text-gray-500 mt-1">Financial reconciliation is 92% complete.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 transition-colors">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10">
                                    Generate Report
                                </button>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Cash on Hand
                                </div>
<div className="text-2xl font-bold text-gray-900 tracking-tight font-heading">$2.4M</div>
<div className="text-[11px] text-green-600 font-medium mt-1">+12% vs last month</div>
</div>
<div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Monthly Burn
                                </div>
<div className="text-2xl font-bold text-gray-900 tracking-tight font-heading">$184k</div>
<div className="text-[11px] text-gray-400 font-medium mt-1">Within budget</div>
</div>
<div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Unreconciled
                                </div>
<div className="text-2xl font-bold text-gray-900 tracking-tight font-heading">14</div>
<div className="text-[11px] text-orange-500 font-medium mt-1">Action required</div>
</div>
</div>

<div className="relative h-64 w-full bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl border border-gray-100 p-6 mb-8 group-hover:border-blue-100 transition-colors">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-gray-900">Revenue Velocity</h3>
<div className="flex gap-2 text-[10px] font-medium text-gray-400">
<span className="px-2 py-1 rounded-md bg-white shadow-sm text-gray-600">30D</span>
<span className="px-2 py-1">90D</span>
<span className="px-2 py-1">YTD</span>
</div>
</div>

<div className="flex items-end justify-between h-32 gap-2 px-2">
<div className="w-full bg-blue-100 rounded-t-sm h-[40%] relative group-hover:h-[45%] transition-all duration-700"><div className="absolute top-0 w-full h-1 bg-blue-500 rounded-t-sm"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[55%] relative group-hover:h-[60%] transition-all duration-700 delay-75"><div className="absolute top-0 w-full h-1 bg-blue-500 rounded-t-sm"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[45%] relative group-hover:h-[50%] transition-all duration-700 delay-100"><div className="absolute top-0 w-full h-1 bg-blue-500 rounded-t-sm"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[75%] relative group-hover:h-[80%] transition-all duration-700 delay-150"><div className="absolute top-0 w-full h-1 bg-blue-500 rounded-t-sm"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[60%] relative group-hover:h-[65%] transition-all duration-700 delay-200"><div className="absolute top-0 w-full h-1 bg-blue-500 rounded-t-sm"></div></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[85%] relative group-hover:h-[90%] transition-all duration-700 delay-300"><div className="absolute top-0 w-full h-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] rounded-t-sm"></div></div>
</div>
</div>

<div className="absolute bottom-8 right-8 w-72 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 border-t-white transform translate-y-2 hover:-translate-y-1 transition-transform cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">AI Insight</p>
<p className="text-xs font-medium text-gray-800 leading-snug">
                                        Detected a recurring $12k variance in Stripe payouts vs bank deposits for Q3.
                                    </p>
<div className="mt-2 flex gap-2">
<button className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md hover:bg-blue-100 transition-colors">Fix automatically</button>
<button className="text-[10px] font-semibold text-gray-500 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">Review</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t border-gray-200/60 bg-white/40 backdrop-blur-sm py-12">
<p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">Trusted by finance teams at</p>
<div className="flex justify-center items-center gap-12 flex-wrap px-6 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<div className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight font-heading"><svg className="lucide lucide-hexagon stroke-[2.5]" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Stripe</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight font-heading"><svg className="lucide lucide-layers stroke-[2.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Brex</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight font-heading"><svg className="lucide lucide-wind stroke-[2.5]" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg> Rippling</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight font-heading"><svg className="lucide lucide-triangle stroke-[2.5]" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Vercel</div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight font-heading"><svg className="lucide lucide-box stroke-[2.5]" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Dropbox</div>
</div>
</div>
</main>


    </>
  );
}
