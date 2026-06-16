import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#F2F6FA', // Light blue-grey background
surface: '#FFFFFF',    // Pure white cards
sidebar: '#FFFFFF',    // White sidebar
primary: '#00C2FF',    // Vivid Blue from reference
secondary: '#1E293B',  // Slate 900 for headings
border: '#E2E8F0',     // Slate 200 for subtle borders
'primary-light': '#E0F7FF', // Very light blue for backgrounds
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(0, 194, 255, 0.3)',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="hidden lg:flex flex-col w-72 bg-sidebar h-full px-6 py-8 border-r border-slate-100 shadow-sm z-20">

<div className="flex items-center gap-3 mb-12">
<div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center shadow-glow shadow-primary/40">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div>
<h1 className="text-secondary text-xl font-semibold tracking-tight leading-none">PromoVoice</h1>
<p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">HEALTH &amp; MEDIA</p>
</div>
</div>

<nav className="flex-1 space-y-3">
<a className="flex items-center gap-3 px-5 py-4 bg-primary text-white rounded-3xl shadow-lg shadow-primary/30 transition-all group" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="font-medium text-[15px]">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-5 py-4 text-slate-500 hover:text-primary hover:bg-primary-light rounded-3xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="history"></i>
<span className="font-medium text-[15px]">History</span>
</a>
<a className="flex items-center gap-3 px-5 py-4 text-slate-500 hover:text-primary hover:bg-primary-light rounded-3xl transition-all group" href="#">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="settings"></i>
<span className="font-medium text-[15px]">Settings</span>
</a>
</nav>

<div className="mt-auto space-y-6">

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 relative overflow-hidden group cursor-pointer shadow-xl shadow-slate-900/10">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-16 h-16 text-white rotate-12" data-lucide="zap"></i>
</div>
<div className="flex items-center gap-2 mb-3 text-white relative z-10">
<div className="p-1.5 bg-white/20 rounded-full">
<i className="w-3.5 h-3.5 text-white fill-white" data-lucide="crown"></i>
</div>
<span className="font-semibold text-sm">Pro Plan</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed relative z-10 font-medium">Unlock unlimited voices &amp; faster processing.</p>
</div>

<a className="flex items-center gap-3 px-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">
<i className="w-5 h-5" data-lucide="help-circle"></i>
<span>Help &amp; Support</span>
</a>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto p-8 lg:p-12 space-y-10 relative z-10">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h2 className="text-3xl lg:text-4xl text-secondary font-semibold tracking-tight mb-2">Health Status Review</h2>
<p className="text-slate-500 text-lg font-medium">Your promotional conversion metrics</p>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="bg-secondary hover:bg-slate-800 text-white pl-5 pr-6 py-3.5 rounded-full font-semibold flex items-center gap-2.5 transition-all shadow-lg shadow-slate-900/20 active:scale-95">
<i className="w-5 h-5" data-lucide="plus"></i>
                            New Project
                        </button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<span className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full">+12%</span>
</div>
<div className="text-4xl text-secondary font-semibold mb-1 tracking-tight">842</div>
<div className="text-slate-400 text-sm font-medium">Emails Processed</div>
</div>

<div className="bg-surface rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="headphones"></i>
</div>
<span className="bg-green-100 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full">+5%</span>
</div>
<div className="text-4xl text-secondary font-semibold mb-1 tracking-tight">328</div>
<div className="text-slate-400 text-sm font-medium">Podcasts Created</div>
</div>

<div className="bg-primary rounded-3xl p-6 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
<i className="w-32 h-32 text-white -mb-8 -mr-8" data-lucide="bar-chart-2"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
</div>
<div className="text-4xl text-white font-semibold mb-1 tracking-tight relative z-10">24.5h</div>
<div className="text-blue-100 text-sm font-medium relative z-10">Total Listen Time</div>
</div>

<div className="bg-surface rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<span className="bg-slate-100 text-slate-500 text-xs font-bold px-2.5 py-1 rounded-full">0%</span>
</div>
<div className="text-4xl text-secondary font-semibold mb-1 tracking-tight">98%</div>
<div className="text-slate-400 text-sm font-medium">Success Rate</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 space-y-8">

<div className="bg-surface rounded-[2rem] p-12 flex flex-col items-center justify-center text-center h-[360px] shadow-soft border border-slate-50 relative overflow-hidden group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
<div className="relative z-10 bg-white p-6 rounded-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-10 h-10 text-primary" data-lucide="mic"></i>
</div>
<h3 className="text-2xl text-secondary font-semibold mb-3 tracking-tight">No podcasts yet</h3>
<p className="text-slate-400 text-lg mb-8 max-w-sm">Upload your first email content to generate an AI podcast instantly.</p>
<button className="bg-primary hover:bg-sky-400 text-white px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-2.5 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50">
<i className="w-5 h-5" data-lucide="plus"></i>
                                Start Generation
                            </button>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl text-secondary font-semibold tracking-tight">Recent Activity</h3>
<button className="text-primary text-sm font-semibold hover:underline">View All</button>
</div>
<div className="bg-surface rounded-[2rem] p-8 shadow-soft border border-slate-50 min-h-[160px] flex items-center justify-center">
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 mb-3 text-slate-300">
<i className="w-6 h-6" data-lucide="list-music"></i>
</div>
<p className="text-slate-400 font-medium">Your generated podcasts will appear here.</p>
</div>
</div>
</div>
</div>

<div className="space-y-8">

<div className="bg-surface rounded-[2rem] p-8 shadow-soft border border-slate-50 h-full max-h-[500px]">
<h3 className="text-xl text-secondary font-semibold mb-8 tracking-tight">Processing Status</h3>
<div className="relative space-y-8 pl-2">

<div className="absolute left-[27px] top-4 bottom-8 w-[2px] bg-slate-100"></div>
<div className="absolute left-[27px] top-4 h-1/4 w-[2px] bg-primary"></div>

<div className="relative flex items-center gap-5 group">
<div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 ring-4 ring-white">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<span className="text-secondary font-semibold block text-base">Email Received</span>
<span className="text-slate-400 text-sm">Successfully parsed</span>
</div>
</div>

<div className="relative flex items-center gap-5">
<div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary ring-4 ring-white">
<div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
</div>
<div>
<span className="text-secondary font-semibold block text-base">AI Analysis</span>
<span className="text-primary text-sm font-medium">Processing...</span>
</div>
</div>

<div className="relative flex items-center gap-5 opacity-60">
<div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 ring-4 ring-white">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
<span className="text-slate-500 font-medium text-base">Voice Gen</span>
</div>

<div className="relative flex items-center gap-5 opacity-60">
<div className="relative z-10 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 ring-4 ring-white">
<i className="w-5 h-5 pl-0.5" data-lucide="send"></i>
</div>
<span className="text-slate-500 font-medium text-base">Delivery</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<button className="w-full py-3 rounded-xl bg-slate-50 text-slate-600 font-semibold hover:bg-slate-100 transition-colors text-sm">View Details</button>
</div>
</div>

<div className="bg-primary rounded-[2rem] p-8 shadow-lg shadow-primary/20 text-white relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
<svg className="w-full h-full" fill="none" viewbox="0 0 1440 320">
<path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#fff"></path>
</svg>
</div>
<h3 className="text-lg font-semibold mb-1 relative z-10">Monthly Usage</h3>
<p className="text-blue-100 text-sm mb-6 relative z-10">Voice tokens remaining</p>
<div className="flex items-end gap-3 h-24 mb-4 relative z-10 px-2">
<div className="w-full bg-white/20 rounded-t-lg h-[40%]"></div>
<div className="w-full bg-white/20 rounded-t-lg h-[65%]"></div>
<div className="w-full bg-white/20 rounded-t-lg h-[50%]"></div>
<div className="w-full bg-white/20 rounded-t-lg h-[80%]"></div>
<div className="w-full bg-white rounded-t-lg h-[100%] shadow-lg"></div>
</div>
<div className="flex justify-between text-xs text-blue-100 font-medium px-1 relative z-10">
<span>Mon</span>
<span>Fri</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
