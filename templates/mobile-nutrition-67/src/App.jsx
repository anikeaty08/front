import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Simple Router Logic to toggle views
        const router = {
            navigate: (viewId) => {
                // Hide all views
                document.querySelectorAll('.view-section').forEach(el => {
                    el.classList.remove('active', 'fade-in');
                });
                
                // Show target view
                const target = document.getElementById(`view-${viewId}`);
                if(target) {
                    target.classList.add('active', 'fade-in');
                }

                // Handle Navigation Bar Visibility
                const nav = document.getElementById('main-nav');
                if(viewId === 'splash' || viewId === 'onboarding' || viewId === 'scanner') {
                    nav.style.transform = 'translateY(100%)';
                } else {
                    nav.style.transform = 'translateY(0)';
                }

                // Update active state on nav icons (simple color toggle)
                if(viewId === 'dashboard' || viewId === 'stats') {
                    document.querySelectorAll('.nav-btn').forEach(btn => {
                        const isHome = btn.innerText.trim() === 'Home' && viewId === 'dashboard';
                        const isStats = btn.innerText.trim() === 'Stats' && viewId === 'stats';
                        if (isHome || isStats) {
                            btn.classList.remove('text-zinc-400');
                            btn.classList.add('text-zinc-900');
                        } else {
                            btn.classList.add('text-zinc-400');
                            btn.classList.remove('text-zinc-900');
                        }
                    });
                }
            }
        };

        // Initial Flow: Splash -> Onboarding
        setTimeout(() => {
            router.navigate('onboarding');
        }, 2200);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-white h-[100dvh] shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col">

<div className="view-section active absolute inset-0 z-50 bg-white flex-col items-center justify-center" id="view-splash">
<div className="flex flex-col items-center gap-6 animate-pulse">
<div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center text-white font-medium tracking-tighter text-2xl shadow-xl shadow-zinc-200">
                    CA
                </div>
<h1 className="text-xl font-medium tracking-tight text-zinc-900">calor.ai</h1>
</div>
</div>

<div className="view-section absolute inset-0 z-40 bg-white flex-col p-8" id="view-onboarding">
<div className="flex-1 flex flex-col justify-end pb-12">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-8">
<svg className="lucide lucide-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-3">Shape your <br/>lifestyle tailored <br/>to you.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">AI-driven nutrition planning that adapts to your metabolism and daily activity in real-time.</p>
<div className="space-y-3">
<button className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-medium transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2" onclick="router.navigate('dashboard')">
                        Get Started
                        <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</button>
<button className="w-full py-3.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 rounded-xl text-sm font-medium transition-all">
                        I already have an account
                    </button>
</div>
</div>
<div className="text-center pb-4">
<p className="text-[10px] text-zinc-400">By continuing you agree to our Terms of Service.</p>
</div>
</div>

<div className="view-section flex-col h-full bg-white relative" id="view-dashboard">

<header className="flex items-center justify-between px-6 pt-12 pb-2 bg-white/90 sticky top-0 z-20 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-medium tracking-tighter text-xs">
                        CA
                    </div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-400">Good Morning</span>
<h1 className="text-sm font-semibold tracking-tight text-zinc-900">Felix Vance</h1>
</div>
</div>
<button className="relative p-2 hover:bg-zinc-50 rounded-full transition-colors">
<svg className="lucide lucide-bell w-5 h-5 text-zinc-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
</button>
</header>

<div className="flex items-center justify-between px-6 py-2 border-b border-zinc-50">
<button className="p-1 rounded-md hover:bg-zinc-50 text-zinc-400"><svg className="lucide lucide-chevron-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<div className="flex flex-col items-center cursor-pointer hover:bg-zinc-50 px-4 py-1 rounded-lg transition-colors">
<span className="text-xs font-medium text-zinc-900">Today, Oct 24</span>
</div>
<button className="p-1 rounded-md hover:bg-zinc-50 text-zinc-400"><svg className="lucide lucide-chevron-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<main className="flex-1 overflow-y-auto no-scrollbar pb-24">

<section className="px-6 py-6 flex flex-col items-center justify-center relative">
<div className="relative w-64 h-64 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-100" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-zinc-900" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" stroke-dasharray="690" stroke-dashoffset="180" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-zinc-400 text-[10px] font-semibold uppercase tracking-widest mb-1">Remaining</span>
<span className="text-6xl font-medium tracking-tighter text-zinc-900">842</span>
<span className="text-zinc-500 text-xs font-medium mt-1">kcal</span>
</div>
</div>

<div className="grid grid-cols-3 gap-3 w-full mt-4">
<div className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex justify-between items-center">
<span className="text-[10px] uppercase font-semibold text-zinc-400">Protein</span>
<span className="text-xs font-semibold text-zinc-900">82g</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-3/4 rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex justify-between items-center">
<span className="text-[10px] uppercase font-semibold text-zinc-400">Carbs</span>
<span className="text-xs font-semibold text-zinc-900">140g</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-1/2 rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex justify-between items-center">
<span className="text-[10px] uppercase font-semibold text-zinc-400">Fat</span>
<span className="text-xs font-semibold text-zinc-900">45g</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 w-1/3 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold tracking-tight text-zinc-900 flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-500 fill-indigo-50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path></svg>
                            Suggestion
                        </h2>
</div>
<div className="bg-gradient-to-br from-white to-zinc-50 rounded-2xl p-5 border border-zinc-200 shadow-sm relative overflow-hidden group">
<div className="flex items-start justify-between mb-2 relative z-10">
<div>
<h3 className="text-sm font-medium text-zinc-900">Salmon &amp; Quinoa Bowl</h3>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">High protein, perfectly balanced for your dinner goals.</p>
</div>
</div>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-zinc-100">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-flame w-3.5 h-3.5 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-xs font-medium text-zinc-600">450 kcal</span>
</div>
<button className="ml-auto flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 text-zinc-900 rounded-lg text-xs font-medium hover:bg-zinc-50 transition-colors shadow-sm">
<svg className="lucide lucide-plus w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
                            </button>
</div>
</div>
</section>

<section className="px-6">
<h2 className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-4">Timeline</h2>
<div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[1px] before:bg-zinc-100">

<div className="relative pl-10">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center z-10 shadow-sm text-zinc-400">
<svg className="lucide lucide-coffee w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path></svg>
</div>
<div className="flex items-center justify-between p-3.5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all cursor-pointer shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]">
<div>
<h4 className="text-sm font-medium text-zinc-900">Oatmeal &amp; Berries</h4>
<p className="text-[10px] font-medium text-zinc-400 mt-0.5">8:30 AM</p>
</div>
<span className="text-sm font-semibold text-zinc-900">320</span>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center z-10 shadow-sm text-zinc-400">
<svg className="lucide lucide-utensils w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<div className="flex items-center justify-between p-3.5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all cursor-pointer shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]">
<div>
<h4 className="text-sm font-medium text-zinc-900">Chicken Salad</h4>
<p className="text-[10px] font-medium text-zinc-400 mt-0.5">1:15 PM</p>
</div>
<span className="text-sm font-semibold text-zinc-900">480</span>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="view-section absolute inset-0 z-50 bg-black text-white flex-col" id="view-scanner">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=2680&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>

<div className="relative z-10 px-6 pt-12 flex justify-between items-center">
<button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10" onclick="router.navigate('dashboard')">
<svg className="lucide lucide-x w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
<span className="text-xs font-medium text-white/90">AI Scanner Active</span>
</div>
<button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10">
<svg className="lucide lucide-zap w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</button>
</div>

<div className="flex-1 relative z-10 flex flex-col items-center justify-center p-8">
<div className="w-64 h-64 border-2 border-white/30 rounded-3xl relative">
<div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-xl -mt-1 -ml-1"></div>
<div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-xl -mt-1 -mr-1"></div>
<div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-xl -mb-1 -ml-1"></div>
<div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white rounded-br-xl -mb-1 -mr-1"></div>

<div className="absolute inset-x-0 h-0.5 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<p className="mt-8 text-sm text-white/70 font-medium bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">Point camera at food</p>
</div>

<div className="relative z-10 px-8 pb-12 flex justify-center items-center gap-8">
<button className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<svg className="lucide lucide-image w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<button className="w-16 h-16 rounded-full bg-white border-4 border-zinc-300 flex items-center justify-center text-black hover:scale-105 transition-transform">
<div className="w-14 h-14 rounded-full border-2 border-black"></div>
</button>
<button className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<svg className="lucide lucide-keyboard w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="20" x="2" y="4"></rect><path d="M6 8h.001"></path><path d="M10 8h.001"></path><path d="M14 8h.001"></path><path d="M18 8h.001"></path><path d="M6 12h.001"></path><path d="M10 12h.001"></path><path d="M14 12h.001"></path><path d="M18 12h.001"></path><path d="M7 16h10"></path></svg>
</button>
</div>
<style>
                @keyframes scan { 0%, 100% { top: 10%; opacity: 0; } 50% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
            </style>
</div>

<div className="view-section flex-col h-full bg-white pt-12 pb-24" id="view-stats">
<header className="px-6 pb-6 flex items-center justify-between">
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">Weekly Progress</h1>
<select className="bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs rounded-lg p-2 font-medium outline-none">
<option>Last 7 Days</option>
<option>Last Month</option>
</select>
</header>
<div className="px-6 flex-1 overflow-y-auto no-scrollbar">

<div className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm mb-6">
<h3 className="text-sm font-medium text-zinc-900 mb-4">Weight Trend</h3>
<div className="h-40 flex items-end justify-between gap-2">

<div className="w-full bg-zinc-100 rounded-t-sm h-[40%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">70.1</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[55%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">70.4</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[45%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">70.2</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[60%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">70.6</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[50%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">70.3</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[70%] hover:bg-zinc-800 transition-colors group relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] hidden group-hover:block">69.8</div></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[65%] relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">69.5</div></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-medium uppercase">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 mb-2 text-zinc-500">
<svg className="lucide lucide-flame" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-[10px] font-semibold uppercase tracking-wider">Avg Cals</span>
</div>
<p className="text-xl font-semibold text-zinc-900">2,140</p>
</div>
<div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex items-center gap-2 mb-2 text-zinc-500">
<svg className="lucide lucide-trophy" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
<span className="text-[10px] font-semibold uppercase tracking-wider">Streak</span>
</div>
<p className="text-xl font-semibold text-zinc-900">12 Days</p>
</div>
</div>
</div>
</div>

<nav className="flex bg-white/90 w-full z-[100] border-zinc-200 border-t pt-3 pb-6 px-6 absolute bottom-0 left-0 backdrop-blur-xl items-end justify-between transition-transform duration-300" id="main-nav">
<button className="nav-btn group flex flex-col items-center gap-1.5 text-zinc-900 w-12" onclick="router.navigate('dashboard')">
<svg className="lucide lucide-home w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium tracking-tight">Home</span>
</button>
<button className="nav-btn group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 transition-colors w-12" onclick="router.navigate('stats')">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-[10px] font-medium tracking-tight">Stats</span>
</button>

<div className="relative -top-5">
<button className="flex items-center justify-center w-14 h-14 bg-zinc-900 text-white rounded-full shadow-[0_8px_20px_-6px_rgba(24,24,27,0.4)] hover:scale-105 hover:bg-zinc-800 transition-all border-[4px] border-white ring-1 ring-zinc-100" onclick="router.navigate('scanner')">
<svg className="lucide lucide-scan-line w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</button>
</div>
<button className="nav-btn group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 transition-colors w-12">
<svg className="lucide lucide-calendar w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span className="text-[10px] font-medium tracking-tight">Plan</span>
</button>
<button className="nav-btn group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-600 transition-colors w-12">
<svg className="lucide lucide-user w-6 h-6 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium tracking-tight">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
