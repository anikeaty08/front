import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let selectedGender = null;

        // Gender Selection Logic
        function selectGender(gender) {
            selectedGender = gender;
            document.querySelectorAll('.gender-btn').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-offset-2', 'border-transparent');
                btn.classList.add('border-gray-200');
            });
            const btn = document.getElementById(`btn-${gender}`);
            if (gender === 'boy') {
                btn.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2', 'border-transparent');
                btn.classList.remove('border-gray-200');
            } else if (gender === 'girl') {
                btn.classList.add('ring-2', 'ring-pink-500', 'ring-offset-2', 'border-transparent');
                btn.classList.remove('border-gray-200');
            }
        }

        function applyTheme() {
            const root = document.documentElement;
            if (selectedGender === 'boy') {
                root.style.setProperty('--primary', '#60a5fa');
                root.style.setProperty('--primary-dark', '#2563eb');
                root.style.setProperty('--primary-soft', '#eff6ff');
            } else if (selectedGender === 'girl') {
                root.style.setProperty('--primary', '#f472b6');
                root.style.setProperty('--primary-dark', '#db2777');
                root.style.setProperty('--primary-soft', '#fdf2f8');
            }
        }

        // Onboarding Navigation
        function nextStep(step) {
            document.querySelectorAll('[id^="step-"]').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });
            const next = document.getElementById(`step-${step}`);
            next.classList.remove('hidden');
            next.classList.add('fade-in');
        }

        function finishOnboarding() {
            applyTheme();
            const onboarding = document.getElementById('onboarding-flow');
            const mainApp = document.getElementById('main-app');
            onboarding.style.opacity = '0';
            setTimeout(() => {
                onboarding.style.display = 'none';
                mainApp.classList.remove('hidden');
                mainApp.classList.add('fade-in');
            }, 500);
        }

        // Tab Switching Logic
        function switchTab(tabName) {
            document.querySelectorAll('main').forEach(el => {
                el.classList.add('hidden');
            });
            const selectedTab = document.getElementById(`tab-${tabName}`);
            if(selectedTab) {
                selectedTab.classList.remove('hidden');
                selectedTab.classList.add('fade-in');
            }
            document.querySelectorAll('.nav-item').forEach(btn => {
                const iconDiv = btn.querySelector('.icon-container');
                const textSpan = btn.querySelector('.label');
                const dot = btn.querySelector('.active-dot');
                const target = btn.dataset.target;
                if (target === tabName) {
                    iconDiv.classList.remove('text-gray-400');
                    iconDiv.classList.add('theme-text-primary');
                    textSpan.classList.remove('text-gray-400');
                    textSpan.classList.add('theme-text-primary');
                    if(dot) {
                        dot.classList.remove('hidden', 'bg-gray-900');
                        dot.classList.add('theme-bg-primary');
                    }
                } else {
                    iconDiv.classList.add('text-gray-400');
                    iconDiv.classList.remove('theme-text-primary');
                    textSpan.classList.add('text-gray-400');
                    textSpan.classList.remove('theme-text-primary');
                    if(dot) dot.classList.add('hidden');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-sm h-[850px] sm:h-[800px] bg-white sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative border border-gray-200">

<div className="w-full h-12 flex justify-between items-end px-6 pb-2 bg-white sticky top-0 z-30">
<span className="text-xs font-semibold tracking-wide text-gray-900">9:41</span>
<div className="flex gap-1.5 items-center">
<span className="iconify text-gray-900" data-icon="lucide:signal" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify text-gray-900" data-icon="lucide:wifi" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify text-gray-900" data-icon="lucide:battery-medium" data-strokeWidth="1.5" data-width="16"></span>
</div>
</div>

<div className="absolute inset-0 bg-white z-50 flex flex-col pt-12 transition-opacity duration-500" id="onboarding-flow">

<div className="flex-1 flex flex-col px-6 fade-in" id="step-1">
<div className="mt-8 mb-8 flex flex-col items-center text-center">
<div className="mb-6 flex items-center justify-center gap-3">
<svg fill="none" height="48" viewbox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 44C32.8366 44 40 36.8366 40 28C40 19.1634 32.8366 4 24 4C15.1634 4 8 19.1634 8 28C8 36.8366 15.1634 44 24 44Z" fill="#FEF3C7" stroke="#1F2937" strokeWidth="2"></path>
<path d="M8 28C8 28 14 36 24 36C34 36 40 28 40 28" stroke="#1F2937" strokeLinecap="round" strokeWidth="2"></path>
<path d="M24 36V44" stroke="#1F2937" strokeWidth="2"></path>
<circle cx="24" cy="20" fill="#FFEDD5" r="8" stroke="#1F2937" strokeWidth="2"></circle>
<circle cx="21" cy="18" fill="#1F2937" r="1"></circle>
<circle cx="27" cy="18" fill="#1F2937" r="1"></circle>
<circle cx="24" cy="23" fill="#FDBA74" r="1.5" stroke="#1F2937" strokeWidth="1"></circle>
<path d="M24 4C18 4 12 10 10 16" stroke="#2DD4BF" strokeLinecap="round" strokeWidth="3"></path>
<path d="M24 4C30 4 36 10 38 16" stroke="#FDBA74" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<h1 className="text-3xl font-semibold tracking-tight text-teal-600">Snuggle<span className="text-orange-400">bug</span></h1>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Welcome parent</h2>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">The AI-powered companion for your parenting journey. Let's get set up.</p>
</div>
<div className="space-y-3">
<label className="cursor-pointer group">
<input checked="" className="custom-radio hidden" name="role" type="radio" value="parent"/>
<div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 transition-all hover:border-gray-300">
<div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<span className="iconify" data-icon="lucide:baby" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<span className="block text-sm font-medium text-gray-900">I'm a new parent</span>
<span className="block text-xs text-gray-500 mt-0.5">My baby is already born</span>
</div>
<span className="iconify check-icon opacity-0 transform scale-50 transition-all" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="role" type="radio" value="expecting"/>
<div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 transition-all hover:border-gray-300">
<div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<span className="iconify" data-icon="lucide:egg" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<span className="block text-sm font-medium text-gray-900">I'm expecting</span>
<span className="block text-xs text-gray-500 mt-0.5">Baby is on the way</span>
</div>
<span className="iconify check-icon opacity-0 transform scale-50 transition-all" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
</label>
</div>
<div className="mt-auto mb-10">
<button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-gray-200/50" onclick="nextStep(2)">Continue</button>
</div>
</div>

<div className="flex-1 flex flex-col px-6 hidden" id="step-2">
<div className="mt-4 mb-8">
<button className="mb-6 p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors" onclick="nextStep(1)">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="20"></span>
</button>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Tell us about the baby</h1>
<p className="text-sm text-gray-500">We'll personalize the app colors and insights based on this.</p>
</div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Baby's Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all placeholder-gray-400" placeholder="e.g. Oliver" type="text" value="Leo"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Date of Birth</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-2 ml-1">Gender </label>
<div className="flex gap-3">
<button className="gender-btn flex-1 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group" id="btn-boy" onclick="selectGender('boy')">
<span className="iconify text-gray-400 group-hover:text-blue-500" data-icon="lucide:baby" data-width="16"></span> Boy
                            </button>
<button className="gender-btn flex-1 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group" id="btn-girl" onclick="selectGender('girl')">
<span className="iconify text-gray-400 group-hover:text-pink-500" data-icon="lucide:baby" data-width="16"></span> Girl
                            </button>
</div>
</div>
</div>
<div className="mt-auto mb-10">
<button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-gray-200/50 flex items-center justify-center gap-2" onclick="finishOnboarding()">
                        Get Started <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col bg-white overflow-hidden h-full" id="main-app">

<header className="px-6 pt-3 pb-3 flex justify-between items-center bg-white/80 backdrop-blur-sm z-20 sticky top-0 border-b border-gray-50">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full theme-bg-soft flex items-center justify-center theme-text-primary font-semibold text-xs border theme-border relative">
                        L
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h1 className="text-sm font-semibold tracking-tight text-gray-900 flex items-center gap-1">
                            Leo's Space
                            <span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-width="12"></span>
</h1>
<p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">8 Months Old</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-gray-50 text-gray-400 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="p-2 rounded-full hover:bg-gray-50 text-gray-400 transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 fade-in" id="tab-home">

<section className="px-6 mt-4 mb-6">
<div className="ai-gradient rounded-2xl p-0.5 shadow-xl shadow-gray-200/50">
<div className="bg-gray-900 rounded-[14px] p-5 relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
<div className="absolute -left-6 bottom-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Snuggle AI</span>
</div>
<span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-indigo-200 border border-white/10">Beta</span>
</div>
<div className="space-y-3 relative z-10">
<div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<p className="text-xs text-gray-300 leading-relaxed"><span className="text-indigo-300 font-medium">Suggestion:</span> Leo's wake window is closing. Start the nap routine in 15 mins to avoid overtiredness.</p>
</div>
<button className="w-full py-2.5 rounded-lg bg-white text-gray-900 text-xs font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-square-plus" data-width="14"></span> Ask Parenting Question
                                </button>
</div>
</div>
</div>
</section>

<div className="px-6 grid grid-cols-2 gap-3 mb-6">
<div className="p-4 rounded-2xl theme-bg-soft border theme-border flex flex-col justify-between h-28 relative overflow-hidden group transition-all hover:shadow-md">
<div className="flex items-center gap-2 theme-text-primary mb-2 relative z-10">
<span className="iconify" data-icon="lucide:milk" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Feed</span>
</div>
<div className="relative z-10">
<p className="text-xl font-semibold text-gray-900 tracking-tight">2:00 PM</p>
<p className="text-xs text-gray-500 font-medium">in 45 mins</p>
</div>
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-28 relative overflow-hidden group transition-all hover:shadow-md">
<div className="flex items-center gap-2 text-slate-600 mb-2 relative z-10">
<span className="iconify" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Sleep</span>
</div>
<div className="relative z-10">
<p className="text-xl font-semibold text-gray-900 tracking-tight">10h 30m</p>
<p className="text-xs text-gray-500 font-medium">Total today</p>
</div>
</div>
</div>

<section className="px-6 mb-2">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight">Up Next</h2>
<button className="flex items-center gap-1 text-xs theme-text-primary font-medium hover:opacity-80 transition-opacity">
<span className="iconify" data-icon="lucide:plus-circle" data-width="14"></span> Add Task
                        </button>
</div>
<div className="space-y-2">
<div className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-all">
<div className="h-9 w-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-colors">
<span className="iconify" data-icon="lucide:pill" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Vitamin D</p>
<p className="text-xs text-gray-500">Scheduled for 1:00 PM</p>
</div>
<button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:theme-text-primary hover:theme-border transition-colors">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</button>
</div>
<div className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-all">
<div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors">
<span className="iconify" data-icon="lucide:stethoscope" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Dr. Smith Appt</p>
<p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
</div>
<button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:theme-text-primary hover:theme-border transition-colors">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</button>
</div>
</div>
</section>
</main>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 hidden fade-in" id="tab-tracker">

<section className="px-6 py-4">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-3">Quick Log</h2>
<div className="grid grid-cols-3 gap-3">
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-orange-300 hover:bg-orange-50/30 transition-all gap-2 h-20">
<span className="iconify text-orange-500" data-icon="lucide:baby" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">Diaper</span>
</button>
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-300 hover:bg-blue-50/30 transition-all gap-2 h-20">
<span className="iconify text-blue-500" data-icon="lucide:milk" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">Feed</span>
</button>
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-purple-300 hover:bg-purple-50/30 transition-all gap-2 h-20">
<span className="iconify text-purple-500" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">Sleep</span>
</button>
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-teal-300 hover:bg-teal-50/30 transition-all gap-2 h-20">
<span className="iconify text-teal-500" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">Bath</span>
</button>
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-red-300 hover:bg-red-50/30 transition-all gap-2 h-20">
<span className="iconify text-red-500" data-icon="lucide:thermometer" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">Health</span>
</button>
<button className="tracker-btn flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all gap-2 h-20">
<span className="iconify text-gray-400" data-icon="lucide:more-horizontal" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium text-gray-700">More</span>
</button>
</div>
</section>

<section className="px-6 py-2">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight">Growth &amp; Patterns</h2>
<button className="text-xs theme-text-primary font-medium flex items-center gap-1 hover:opacity-80">
<span className="iconify" data-icon="lucide:line-chart" data-width="12"></span> View Charts
                        </button>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<div className="flex-1 min-w-[140px] p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-10 opacity-10 pointer-events-none">
<svg className="w-full h-full text-indigo-500 fill-current" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q 20 25, 40 28 T 100 10 V 40 H 0 Z"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-3 text-gray-500">
<span className="iconify" data-icon="lucide:scale" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-[10px] uppercase font-bold tracking-wider">Weight</span>
</div>
<div className="flex items-baseline gap-1 mt-auto z-10">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">8.4</span>
<span className="text-sm text-gray-500">kg</span>
</div>
<div className="flex items-center gap-1 mt-1 text-[10px] text-green-600 font-medium">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span> +0.2kg
                            </div>
</div>
<div className="flex-1 min-w-[140px] p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-10 opacity-10 pointer-events-none">
<svg className="w-full h-full text-teal-500 fill-current" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 30 30, 60 20 T 100 5 V 40 H 0 Z"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-3 text-gray-500">
<span className="iconify" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="14"></span>
<span className="text-[10px] uppercase font-bold tracking-wider">Height</span>
</div>
<div className="flex items-baseline gap-1 mt-auto z-10">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">72</span>
<span className="text-sm text-gray-500">cm</span>
</div>
<div className="flex items-center gap-1 mt-1 text-[10px] text-green-600 font-medium">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span> +1.5cm
                            </div>
</div>
</div>
</section>

<section className="px-6 pt-4">
<h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Today's Logs</h2>
<div className="relative pl-4 border-l border-gray-200 space-y-6">
<div className="relative group">
<div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 border-2 border-white ring-1 ring-gray-100 group-hover:ring-blue-100 transition-all"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Breastfed right side</p>
<p className="text-xs text-gray-500 mt-0.5">15 mins duration</p>
</div>
<span className="text-xs font-medium text-gray-400">11:30 AM</span>
</div>
</div>
<div className="relative group">
<div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500 border-2 border-white ring-1 ring-gray-100 group-hover:ring-orange-100 transition-all"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Diaper Change</p>
<p className="text-xs text-gray-500 mt-0.5">Wet &amp; Dirty</p>
</div>
<span className="text-xs font-medium text-gray-400">09:15 AM</span>
</div>
</div>
<div className="relative group">
<div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-purple-500 border-2 border-white ring-1 ring-gray-100 group-hover:ring-purple-100 transition-all"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-gray-900">Woke up</p>
<p className="text-xs text-gray-500 mt-0.5">Good mood</p>
</div>
<span className="text-xs font-medium text-gray-400">07:00 AM</span>
</div>
</div>
</div>
</section>
</main>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 hidden fade-in" id="tab-wellness">

<section className="px-6 py-6 bg-gradient-to-b from-teal-50/50 to-white">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Parental Wellness</h2>
<p className="text-xs text-gray-500 mb-4">Taking care of yourself helps you take care of Leo.</p>
<div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
<span className="text-xs font-medium text-gray-600">How are you feeling?</span>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-xl grayscale hover:grayscale-0 transition-all">😫</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-xl grayscale hover:grayscale-0 transition-all">😐</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-50 text-xl transition-all shadow-sm ring-1 ring-teal-100">🙂</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-xl grayscale hover:grayscale-0 transition-all">🤩</button>
</div>
</div>
</section>

<section className="px-6 mb-6">
<div className="relative p-5 rounded-2xl gradient-warm border border-orange-100 shadow-sm flex flex-col gap-2 group">
<button className="absolute top-3 right-3 text-orange-300 hover:text-orange-500 transition-colors">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
<div className="flex items-center gap-2 text-orange-600 mb-1">
<span className="iconify" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-[10px] font-bold uppercase tracking-wider">Assurance</span>
</div>
<p className="text-sm font-medium text-gray-800 italic leading-relaxed">"You are doing an amazing job. It's okay to feel overwhelmed sometimes—take a deep breath."</p>
</div>
</section>

<section className="px-6 mb-6">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center gap-3 hover:border-teal-200 transition-colors cursor-pointer">
<div className="h-10 w-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:wind" data-width="20"></span>
</div>
<div>
<p className="text-xs font-semibold text-gray-900">Breathe</p>
<p className="text-[10px] text-gray-500">2 min reset</p>
</div>
</div>
<div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center gap-3 hover:border-purple-200 transition-colors cursor-pointer">
<div className="h-10 w-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:headphones" data-width="20"></span>
</div>
<div>
<p className="text-xs font-semibold text-gray-900">Listen</p>
<p className="text-[10px] text-gray-500">Calm sounds</p>
</div>
</div>
</div>
</section>

<section className="mb-6 pl-6">
<div className="flex items-center justify-between pr-6 mb-3">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Meditation &amp; Exercises</h3>
<button className="text-xs text-teal-600 font-medium">See All</button>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 pr-6">

<div className="min-w-[200px] h-32 rounded-2xl relative overflow-hidden flex flex-col justify-end p-4 group cursor-pointer">
<img alt="Meditation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="relative z-10 text-white">
<div className="flex items-center gap-1 mb-1">
<span className="iconify" data-icon="lucide:play-circle" data-width="14"></span>
<span className="text-[10px] font-medium opacity-90">5 min</span>
</div>
<p className="text-sm font-semibold">Morning Reset</p>
</div>
</div>

<div className="min-w-[200px] h-32 rounded-2xl relative overflow-hidden flex flex-col justify-end p-4 group cursor-pointer">
<img alt="Stretching" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="relative z-10 text-white">
<div className="flex items-center gap-1 mb-1">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
<span className="text-[10px] font-medium opacity-90">10 min</span>
</div>
<p className="text-sm font-semibold">Stroller Stretches</p>
</div>
</div>

<div className="min-w-[200px] h-32 rounded-2xl relative overflow-hidden flex flex-col justify-end p-4 group cursor-pointer">
<img alt="Sleep" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
<div className="relative z-10 text-white">
<div className="flex items-center gap-1 mb-1">
<span className="iconify" data-icon="lucide:moon" data-width="14"></span>
<span className="text-[10px] font-medium opacity-90">15 min</span>
</div>
<p className="text-sm font-semibold">Sleep Prep</p>
</div>
</div>
</div>
</section>

<section className="px-6 mb-6">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight mb-3">Soothing Sounds</h3>
<div className="space-y-2">

<div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
<span className="iconify" data-icon="lucide:cloud-rain" data-width="20"></span>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-gray-900">Gentle Rain</p>
<p className="text-[10px] text-gray-500">Continuous Loop</p>
</div>
<button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-indigo-200 hover:text-indigo-600 hover:bg-white transition-all">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="12"></span>
</button>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-gray-900">White Noise</p>
<p className="text-[10px] text-gray-500">Deep focus &amp; sleep</p>
</div>
<button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-amber-200 hover:text-amber-600 hover:bg-white transition-all">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="12"></span>
</button>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
<span className="iconify" data-icon="lucide:trees" data-width="20"></span>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-gray-900">Forest Ambience</p>
<p className="text-[10px] text-gray-500">Birds &amp; Wind</p>
</div>
<button className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-emerald-200 hover:text-emerald-600 hover:bg-white transition-all">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="12"></span>
</button>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-2 flex justify-between items-center z-40">
<button className="nav-item group flex flex-col items-center gap-1 w-14 pt-2 pb-1" data-target="home" onclick="switchTab('home')">
<div className="relative p-1 transition-colors text-gray-900 icon-container">
<span className="iconify" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="22"></span>
<span className="active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></span>
</div>
<span className="text-[10px] font-medium text-gray-900 label">Home</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1 w-14 pt-2 pb-1" data-target="tracker" onclick="switchTab('tracker')">
<div className="relative p-1 transition-colors text-gray-400 group-hover:text-gray-600 icon-container">
<span className="iconify" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="22"></span>
<span className="active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full hidden"></span>
</div>
<span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600 label">Tracker</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1 w-14 pt-2 pb-1" data-target="wellness" onclick="switchTab('wellness')">
<div className="relative p-1 transition-colors text-gray-400 group-hover:text-gray-600 icon-container">
<span className="iconify" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="22"></span>
<span className="active-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full hidden"></span>
</div>
<span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600 label">Wellness</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1 w-14 pt-2 pb-1">
<div className="relative p-1 transition-colors text-gray-400 group-hover:text-gray-600 icon-container">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="22"></span>
</div>
<span className="text-[10px] font-medium text-gray-400 group-hover:text-gray-600 label">Snuggle AI</span>
</button>
</nav>
</div>
</div>


    </>
  );
}
