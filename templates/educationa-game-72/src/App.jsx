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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-red-100/40 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] aspect-square rounded-full bg-emerald-50/50 blur-[120px]"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[60%] aspect-square rounded-full bg-blue-50/40 blur-[120px]"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
<div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-sm shadow-gray-200/20 rounded-full px-6 py-3 flex items-center justify-between transition-all hover:bg-white/90 hover:shadow-md hover:shadow-gray-200/30">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-inner shadow-white/20">
<iconify-icon className="text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-base text-gray-900">EDGS</span>
</div>
<div className="hidden md:flex gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#concept">Concept</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#levels">Levels</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#research">Research Design</a>
</div>
<div className="md:hidden flex items-center">
<iconify-icon className="text-xl text-gray-600" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</nav>

<header className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 z-10">
<div className="absolute inset-0 grid-pattern pointer-events-none opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm shadow-gray-100 text-xs font-medium text-gray-600 mb-8 hover:border-red-200 hover:bg-red-50/50 transition-all group" href="#research">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Cycle One Education Study
                <iconify-icon className="text-gray-400 group-hover:text-red-500 transition-colors" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] mb-8 max-w-4xl">
                Fostering Digital Values Through <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">Interactive Gameplay</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                A highly engaging educational digital game designed to instill digital, identity, and citizenship values in young students through real-world scenarios.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium shadow-lg shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" href="#concept">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Explore Concept
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-gray-700 border border-gray-200 text-sm font-medium shadow-sm hover:bg-gray-50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2" href="#levels">
                    View Game Levels
                </a>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 pb-32 space-y-40 z-10 relative">

<section className="scroll-mt-32" id="concept">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 space-y-8">
<div>
<div className="inline-flex items-center gap-2 text-red-600 text-sm font-medium tracking-tight mb-3">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                            Game Mechanics
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 leading-tight">Reward-driven learning <br/> built for engagement.</h2>
<p className="text-base text-gray-500 leading-relaxed mt-4">
                            The game environment is meticulously structured to encourage careful decision-making and reward positive digital behavior natively within the gameplay loop.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/60 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 hover:border-gray-300/60 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-100 transition-all">
<iconify-icon className="text-xl" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Points System</h3>
<p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Dynamic scoring based on correct choices and ethical decisions.</p>
</div>
</div>
<div className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/60 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 hover:border-gray-300/60 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-100 transition-all">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Limited Lives</h3>
<p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Encourages thoughtful answers rather than random guessing.</p>
</div>
</div>
<div className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/60 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 hover:border-gray-300/60 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-unlocked-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Level Unlocking</h3>
<p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Progress sequentially as specific digital concepts are mastered.</p>
</div>
</div>
<div className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/60 hover:bg-white hover:shadow-lg hover:shadow-gray-200/40 hover:border-gray-300/60 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-100 transition-all">
<iconify-icon className="text-xl" icon="solar:volume-loud-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">Interactive Feedback</h3>
<p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Rich audio and visual cues to continuously motivate students.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md lg:max-w-none mx-auto relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-emerald-50 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl shadow-gray-200/50 p-8 overflow-hidden">
<div className="absolute inset-0 dot-pattern opacity-30"></div>
<div className="relative text-center space-y-8 w-full z-10">

<div className="absolute top-0 right-0 px-3 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 text-[10px] font-medium text-gray-600 flex items-center gap-1.5 animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-yellow-500" icon="solar:star-fall-linear"></iconify-icon> New Avatar
                            </div>
<div className="flex items-center justify-center gap-6 mt-4">

<div className="w-32 h-32 bg-gradient-to-b from-white to-gray-50 rounded-full shadow-md shadow-gray-200/50 border border-white flex items-end justify-center overflow-hidden relative group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-500 ease-out">
<svg className="w-full h-full translate-y-3 drop-shadow-sm" viewbox="0 0 100 100">

<path d="M15 100 Q15 65 50 65 Q85 65 85 100" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"></path>

<path d="M43 65 L50 72 L57 65" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<line stroke="#d1d5db" strokeWidth="1.5" x1="50" x2="50" y1="72" y2="84"></line>
<circle cx="50" cy="84" fill="#d1d5db" r="1.5"></circle>

<circle cx="50" cy="42" fill="#fcdbb6" r="18"></circle>

<circle cx="43" cy="44" fill="#374151" r="2.5"></circle>
<circle cx="57" cy="44" fill="#374151" r="2.5"></circle>
<path d="M46 52 Q50 56 54 52" fill="none" stroke="#374151" strokeLinecap="round" strokeWidth="2"></path>

<path d="M32 38 C32 12 68 12 68 38 Z" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5"></path>

<path d="M34 32 Q50 35 66 32" fill="none" stroke="#f87171" stroke-dasharray="2 4" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M38 24 Q50 27 62 24" fill="none" stroke="#f87171" stroke-dasharray="2 4" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>

<div className="w-32 h-32 bg-gradient-to-b from-white to-gray-50 rounded-full shadow-md shadow-gray-200/50 border border-white flex items-end justify-center overflow-hidden relative group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-500 ease-out delay-75">
<svg className="w-full h-full translate-y-3 drop-shadow-sm" viewbox="0 0 100 100">

<path d="M15 100 C15 65 85 65 85 100" fill="#047857" stroke="#065f46" strokeWidth="2"></path>

<path d="M28 40 C28 15 72 15 72 40 C72 65 60 85 50 85 C40 85 28 65 28 40 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"></path>

<circle cx="50" cy="46" fill="#fcdbb6" r="14"></circle>

<path d="M36 46 C36 30 64 30 64 46 C64 60 50 64 50 64 C50 64 36 60 36 46 Z" fill="none" stroke="#f3f4f6" strokeWidth="2"></path>

<circle cx="43" cy="46" fill="#374151" r="2.5"></circle>
<circle cx="57" cy="46" fill="#374151" r="2.5"></circle>
<path d="M46 54 Q50 58 54 54" fill="none" stroke="#374151" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl border border-gray-100 shadow-sm inline-block mx-auto">
<p className="text-sm font-semibold text-gray-900 tracking-tight">Omani Character Avatars</p>
<p className="text-xs text-gray-500 mt-1">Culturally representative designs fostering connection.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="levels">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-4">Level-Based Progression</h2>
<p className="text-base text-gray-500 max-w-2xl leading-relaxed">Students progress through distinct levels, each focusing on critical aspects of digital literacy, culminating in a comprehensive final challenge.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full z-10">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/50 border border-blue-100 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-2xl text-blue-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-1 mb-4">
<span className="text-[10px] font-semibold text-blue-500 tracking-widest uppercase">Level 1</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Digital Safety</h3>
</div>
<p className="relative z-10 text-sm text-gray-500 mb-8 flex-grow leading-relaxed">Learn basic online safety skills such as creating strong passwords and identifying unsafe messages or links.</p>
<div className="relative z-10 pt-6 border-t border-gray-100">
<ul className="space-y-3 text-xs text-gray-600">
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                Password safety quizzes
                            </li>
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                Safe vs. unsafe action scenarios
                            </li>
</ul>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full z-10">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-b from-purple-50 to-purple-100/50 border border-purple-100 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-2xl text-purple-600" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-1 mb-4">
<span className="text-[10px] font-semibold text-purple-500 tracking-widest uppercase">Level 2</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Digital Identity</h3>
</div>
<p className="relative z-10 text-sm text-gray-500 mb-8 flex-grow leading-relaxed">Teaches students how to protect personal information and respect others' privacy online.</p>
<div className="relative z-10 pt-6 border-t border-gray-100">
<ul className="space-y-3 text-xs text-gray-600">
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                Information sharing decisions
                            </li>
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                Photo and data privacy questions
                            </li>
</ul>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full z-10">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-b from-emerald-50 to-emerald-100/50 border border-emerald-100 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-1 mb-4">
<span className="text-[10px] font-semibold text-emerald-500 tracking-widest uppercase">Level 3</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Digital Citizenship</h3>
</div>
<p className="relative z-10 text-sm text-gray-500 mb-8 flex-grow leading-relaxed">Explore appropriate online communication and behavior to foster a positive digital environment.</p>
<div className="relative z-10 pt-6 border-t border-gray-100">
<ul className="space-y-3 text-xs text-gray-600">
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                Identifying polite comments
                            </li>
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                Cyberbullying response tactics
                            </li>
</ul>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full z-10">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 z-0"></div>
<div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-b from-orange-50 to-orange-100/50 border border-orange-100 flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-2xl text-orange-600" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-1 mb-4">
<span className="text-[10px] font-semibold text-orange-500 tracking-widest uppercase">Level 4</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Cultural Identity</h3>
</div>
<p className="relative z-10 text-sm text-gray-500 mb-8 flex-grow leading-relaxed">Connects digital behavior with national and cultural values, emphasizing Omani heritage.</p>
<div className="relative z-10 pt-6 border-t border-gray-100">
<ul className="space-y-3 text-xs text-gray-600">
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                Respectful use of national symbols
                            </li>
<li className="flex items-center gap-2.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                Matching cultural symbols
                            </li>
</ul>
</div>
</div>

<div className="group bg-gray-900 rounded-3xl border border-gray-800 p-8 hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col h-full lg:col-span-2 z-10">

<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-red-950 z-0"></div>
<div className="absolute right-0 top-0 w-96 h-96 bg-red-600/20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 z-0 group-hover:bg-red-500/30 transition-colors duration-700"></div>
<div className="absolute inset-0 dot-pattern opacity-10 z-0"></div>
<div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start justify-between h-full">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm text-white shadow-inner shadow-white/5">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-1 mb-4">
<span className="text-[10px] font-semibold text-red-400 tracking-widest uppercase">Final Challenge</span>
<h3 className="text-2xl font-medium tracking-tight text-white">The Ultimate Decision</h3>
</div>
<p className="text-sm text-gray-400 mb-8 max-w-md leading-relaxed">Students face complex, real-life digital scenarios requiring multiple layered decisions, integrating all previously learned digital values simultaneously.</p>
</div>
<div className="w-full sm:w-auto mt-auto sm:mt-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shrink-0 flex flex-col gap-4">
<div>
<div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-1">Primary Focus</div>
<div className="text-sm font-medium text-gray-200">Integration of All Values</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-1">Final Outcome</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
<iconify-icon className="text-sm" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
                                    "Digital Citizen" Certificate
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32 pb-10" id="research">
<div className="text-center mb-16 relative z-10">
<div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium tracking-tight mb-3">
<iconify-icon icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                    Methodology
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-4">Research Framework</h2>
<p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">A structured, quantitative approach designed to accurately measure the effectiveness of the educational intervention.</p>
</div>
<div className="relative max-w-5xl mx-auto z-10">

<div className="hidden md:block absolute top-[4.5rem] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 text-center shadow-lg shadow-gray-200/20 relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 border border-gray-100 text-gray-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-2 py-1 rounded bg-gray-100 text-[10px] font-semibold text-gray-500 tracking-widest uppercase mb-4">Phase 01</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Baseline Pre-Test</h3>
<p className="text-sm text-gray-500 leading-relaxed">Measures prior knowledge of digital safety, identity, and citizenship through structured multiple-choice questions.</p>
</div>

<div className="bg-white rounded-3xl border border-red-100 p-8 text-center shadow-xl shadow-red-900/5 relative transform md:-translate-y-4 group hover:-translate-y-5 transition-transform duration-300">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center mb-6 shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="relative z-10 inline-block px-2 py-1 rounded bg-red-50 text-[10px] font-semibold text-red-600 tracking-widest uppercase mb-4">Phase 02</span>
<h3 className="relative z-10 text-lg font-medium tracking-tight text-gray-900 mb-3">Active Intervention</h3>
<p className="relative z-10 text-sm text-gray-500 leading-relaxed">Educational videos combined with gameplay, seamlessly implemented over a targeted 2–3 week period.</p>
</div>

<div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 text-center shadow-lg shadow-gray-200/20 relative group hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 border border-gray-100 text-gray-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-2 py-1 rounded bg-gray-100 text-[10px] font-semibold text-gray-500 tracking-widest uppercase mb-4">Phase 03</span>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Outcome Post-Test</h3>
<p className="text-sm text-gray-500 leading-relaxed">Similar structure to the pre-test, utilized strictly to measure improvement and analyze quantitative progression.</p>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-gray-200/60 bg-white/50 backdrop-blur-lg py-10 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tighter text-gray-900 text-sm">EDGS</span>
<div className="w-px h-4 bg-gray-300 hidden md:block"></div>
<span className="text-xs text-gray-500">© Cycle One Study Design</span>
</div>
<div className="text-xs font-medium text-gray-400">
                Fostering Digital &amp; Cultural Values
            </div>
</div>
</footer>

    </>
  );
}
