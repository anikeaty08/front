import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.3s ease-out forwards',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(-10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Initialize Icons
      lucide.createIcons();

      // Tab Switcher Logic
      function switchTab(tabId) {
        // Buttons
        document.querySelectorAll('.spine-tab').forEach(el => {
          el.classList.remove('active');
          el.classList.add('inactive');
          el.classList.remove('shadow-sm', 'border-slate-200'); // Remove active styles
          el.classList.add('border-transparent');
        });

        const activeBtn = document.getElementById('tab-' + tabId);
        activeBtn.classList.add('active');
        activeBtn.classList.remove('inactive');
        activeBtn.classList.add('shadow-sm');
        activeBtn.classList.remove('border-transparent');

        // Panels
        document.querySelectorAll('.spine-panel').forEach(el => el.classList.remove('active'));
        document.getElementById('panel-' + tabId).classList.add('active');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-[#FDFBF9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="font-display font-bold text-sm tracking-tight text-slate-900">
              Hatchearly
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#infrastructure">
              Infrastructure
            </a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">
              Process
            </a>
<a className="hover:text-slate-900 transition-colors" href="#integrations">
              Integrations
            </a>
<a className="hover:text-slate-900 transition-colors" href="#results">
              Results
            </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
              Pricing
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition-all active:scale-95" href="#book">
              Book strategy call
            </a>
</div>
</div>
</div>
</header>
<main className="pt-24 sm:pt-32">

<section className="relative overflow-hidden pb-20 lg:pb-24">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 opacity-60 pointer-events-none">
<div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/80 px-3 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8 transition-transform hover:scale-105 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[12px] font-medium text-slate-600 tracking-tight">
                Accepting new clients for Q2 2025
              </span>
</div>

<h1 className="sm:text-5xl lg:text-6xl text-balance leading-[1.15] text-4xl font-bold text-slate-900 tracking-tight font-display">Your emails won’t book meetings if they don’t <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                lands in the inbox.
              </span></h1>

<p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-slate-500 max-w-2xl text-balance">
              Hatchearly designs, builds, and monitors enterprise-grade outbound
              systems. We handle the domains, DNS, and warming so your team can
              focus on closing deals.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200" href="#book">
                Start your build
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition-all duration-200" href="#case-studies">
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                View results
              </a>
</div>

<div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col items-start">
<div className="flex gap-0.5 text-amber-500">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span>Trusted by 50+ outbound teams</span>
</div>
</div>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200/60 p-4 sm:px-6 bg-white/50">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-rose-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
</div>
<span className="text-xs font-mono text-slate-400 ml-2">
                  sys_monitor_v2.4
                </span>
</div>

<div className="flex p-1 gap-1 bg-slate-100/80 rounded-lg border border-slate-200/50">
<button className="spine-tab active inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm border transition-all" id="tab-live" onclick="switchTab('live')">
<svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                  Live Monitoring
                </button>
<button className="spine-tab inactive inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-semibold border border-transparent hover:bg-slate-50 transition-all" id="tab-volume" onclick="switchTab('volume')">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Volume Scaling
                </button>
</div>
</div>

<div className="spine-panel active bg-slate-50/30 p-6 sm:p-10 min-h-[400px] relative" id="panel-live">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.4'}}></div>
<div className="relative grid md:grid-cols-3 gap-6 items-start">

<div className="flex flex-col gap-3">
<div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-50 to-white -z-10 rounded-bl-full"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Source
                      </span>
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="text-sm font-semibold text-slate-900">
                      Dedicated IP Pool
                    </div>
<div className="text-xs text-slate-500 mt-1">
                      12 rotated domains
                    </div>
<div className="mt-3 flex gap-1">
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<div className="h-1 w-full bg-emerald-500 rounded-full"></div>
<div className="h-1 w-3/4 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="h-8 border-l-2 border-dashed border-slate-300 ml-8 relative">
<div className="absolute -bottom-1 -left-1.5 w-3 h-3 rounded-full border-2 border-slate-300 bg-slate-50"></div>
</div>
<div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Filtering
                    </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-700">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-indigo-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Bounce Guard Active
                    </div>
</div>
</div>

<div className="md:mt-12 bg-white rounded-2xl p-5 border border-indigo-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-indigo-500/10 relative z-10">
<div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-indigo-50 rounded-md text-indigo-600">
<svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<span className="text-sm font-bold text-slate-900">
                        Hatchearly Core
                      </span>
</div>
<span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                      98.4% Inbox
                    </span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Reputation Score</span>
<span className="font-mono font-medium text-slate-900">
                        99/100
                      </span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '99%'}}></div>
</div>
<div className="flex items-center justify-between text-xs pt-2">
<span className="text-slate-500">Warm-up Pool</span>
<span className="font-mono font-medium text-slate-900">
                        Active
                      </span>
</div>
<div className="grid grid-cols-6 gap-1">
<div className="h-6 rounded bg-slate-100 animate-pulse"></div>
<div className="h-6 rounded bg-slate-100 animate-pulse" style={{animationDelay: '100ms'}}></div>
<div className="h-6 rounded bg-slate-100 animate-pulse" style={{animationDelay: '200ms'}}></div>
<div className="h-6 rounded bg-slate-100 animate-pulse" style={{animationDelay: '300ms'}}></div>
<div className="h-6 rounded bg-slate-100 animate-pulse" style={{animationDelay: '400ms'}}></div>
<div className="h-6 rounded bg-slate-100 animate-pulse" style={{animationDelay: '500ms'}}></div>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3">
<div className="mt-0.5 p-1 bg-blue-50 text-blue-600 rounded">
<img alt="G" className="w-4 h-4" src="https://cdn.simpleicons.org/google/4285F4"/>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">
                        Google Workspace
                      </div>
<div className="text-[10px] text-slate-500 mt-0.5">
                        Primary Placement
                      </div>
</div>
<div className="ml-auto text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      PASS
                    </div>
</div>
<div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-start gap-3 opacity-90">
<div className="mt-0.5 p-1 bg-sky-50 text-sky-600 rounded">
<img alt="O" className="w-4 h-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">
                        Outlook 365
                      </div>
<div className="text-[10px] text-slate-500 mt-0.5">
                        Primary Placement
                      </div>
</div>
<div className="ml-auto text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      PASS
                    </div>
</div>
</div>
</div>
</div>

<div className="spine-panel bg-slate-50/30 p-6 sm:p-10 min-h-[400px] relative" id="panel-volume">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.4'}}></div>
<div className="relative flex flex-col items-center justify-center h-full gap-6">
<div className="w-full max-w-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-semibold text-slate-700">
                      Daily Send Volume
                    </span>
<span className="text-xs font-mono text-slate-500">
                      2,400 / 5,000 cap
                    </span>
</div>

<div className="h-48 w-full bg-white border border-slate-200 rounded-lg p-4 flex items-end justify-between gap-2 shadow-sm">
<div className="w-full bg-indigo-50 rounded-t-sm h-[30%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        Day 1
                      </div>
</div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-indigo-300 rounded-t-sm h-[65%]"></div>
<div className="w-full bg-indigo-400 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-indigo-600 rounded-t-sm h-[100%]"></div>
</div>
<div className="mt-4 flex gap-4 text-xs text-slate-500 justify-center">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                      Safe Ramp
                    </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      Burn Limit
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Powering outbound for
          </p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center space-x-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-display text-slate-800">
              AcmeCorp
            </span>
<span className="text-xl font-bold font-display text-slate-800 italic">
              GlobalSoft
            </span>
<span className="text-xl font-extrabold font-display text-slate-800 tracking-tighter">
              next_gen
            </span>
<span className="text-xl font-semibold font-display text-slate-800 flex items-center gap-1">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              Orbital
            </span>
<span className="text-xl font-bold font-display text-slate-800">
              VANTAGE
            </span>
<span className="text-xl font-serif font-bold text-slate-800">
              Stirling
            </span>

<span className="text-xl font-bold font-display text-slate-800">
              AcmeCorp
            </span>
<span className="text-xl font-bold font-display text-slate-800 italic">
              GlobalSoft
            </span>
<span className="text-xl font-extrabold font-display text-slate-800 tracking-tighter">
              next_gen
            </span>
<span className="text-xl font-semibold font-display text-slate-800 flex items-center gap-1">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
              Orbital
            </span>
<span className="text-xl font-bold font-display text-slate-800">
              VANTAGE
            </span>
<span className="text-xl font-serif font-bold text-slate-800">
              Stirling
            </span>
</div>
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
</div>
</section>

<section className="py-24 sm:py-32" id="infrastructure">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Enterprise-grade infrastructure,
              <br className="hidden sm:block"/>
              commoditized.
            </h2>
<p className="mt-4 text-lg text-slate-600">
              We don't just "warm up emails." We build a resilient network of
              domains and inboxes that acts as a shield for your primary brand.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 ring-1 ring-indigo-100">
<svg className="lucide lucide-globe w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="font-display font-bold text-xl text-slate-900">
                    Multi-Domain Architecture
                  </h3>
</div>
<p className="text-slate-500 mb-8 max-w-lg">
                  We procure and configure 10-50+ lookalike domains (e.g.,
                  gethatchearly.com) to distribute volume. If one burns, your
                  main domain stays pristine.
                </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 flex flex-col gap-2">
<span className="text-[10px] font-bold text-emerald-700 uppercase">
                      Primary
                    </span>
<span className="text-xs font-mono text-slate-700 truncate">
                      hatchearly.com
                    </span>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500 mt-auto" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex flex-col gap-2 opacity-60">
<span className="text-[10px] font-bold text-slate-500 uppercase">
                      Satellite 1
                    </span>
<span className="text-xs font-mono text-slate-600 truncate">
                      tryhatchearly.com
                    </span>
<div className="h-1 w-full bg-emerald-400 rounded-full mt-auto"></div>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex flex-col gap-2 opacity-60">
<span className="text-[10px] font-bold text-slate-500 uppercase">
                      Satellite 2
                    </span>
<span className="text-xs font-mono text-slate-600 truncate">
                      gethatchearly.com
                    </span>
<div className="h-1 w-full bg-emerald-400 rounded-full mt-auto"></div>
</div>
<div className="rounded-lg border border-rose-200 bg-rose-50/50 p-3 flex flex-col gap-2">
<span className="text-[10px] font-bold text-rose-700 uppercase">
                      Burned
                    </span>
<span className="text-xs font-mono text-slate-700 truncate decoration-line-through">
                      usehatchearly.com
                    </span>
<span className="text-[10px] font-bold text-rose-600 mt-auto flex items-center gap-1">
<svg className="lucide lucide-refresh-cw w-3 h-3" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                      Replaced
                    </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-sm">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative p-8 h-full flex flex-col justify-between">
<div>
<div className="p-2.5 w-fit bg-white/10 backdrop-blur rounded-xl mb-6 ring-1 ring-white/20">
<svg className="lucide lucide-radar w-6 h-6 text-emerald-300" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<h3 className="font-display font-bold text-xl mb-2">
                    Inbox Pulse™
                  </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Continuous placement testing across Gmail, Outlook, and
                    corporate filters. We know you're landing in spam before you
                    do.
                  </p>
</div>
<div className="mt-8 bg-white/5 rounded-xl border border-white/10 p-4 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-300">
                      Live Health
                    </span>
<span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
</div>
<div className="flex items-end gap-1 h-12">
<div className="w-1/6 bg-emerald-500/80 rounded-t-sm h-[80%]"></div>
<div className="w-1/6 bg-emerald-500/90 rounded-t-sm h-[90%]"></div>
<div className="w-1/6 bg-emerald-500 rounded-t-sm h-[100%]"></div>
<div className="w-1/6 bg-emerald-500/80 rounded-t-sm h-[85%]"></div>
<div className="w-1/6 bg-emerald-500/90 rounded-t-sm h-[95%]"></div>
<div className="w-1/6 bg-amber-500 rounded-t-sm h-[60%] animate-pulse"></div>
</div>
<div className="mt-2 text-[10px] text-amber-300 flex items-center gap-1">
<svg className="lucide lucide-alert-circle w-3 h-3" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                    Deviation detected on Node 4
                  </div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-center text-center">
<div className="mx-auto p-3 bg-amber-50 rounded-full text-amber-600 mb-4 ring-1 ring-amber-100">
<svg className="lucide lucide-shield-check w-8 h-8" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-display font-bold text-lg text-slate-900">
                Zero-Cost Replacement
              </h3>
<p className="mt-2 text-sm text-slate-500">
                If an inbox dips below 90% placement, we burn it and spin up a
                fresh one instantly. No extra fees.
              </p>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<h3 className="font-display font-bold text-xl text-slate-900">
                  14-Day Ramp Schedule
                </h3>
<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                  Standard Protocol
                </span>
</div>
<div className="relative">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
<div className="grid grid-cols-4 gap-4 relative z-10">

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      01
                    </div>
<div className="text-xs font-bold text-slate-900">Config</div>
<div className="text-[10px] text-slate-500 leading-tight">
                      DNS, SPF, DKIM, DMARC Setup
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-900 text-slate-900 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      07
                    </div>
<div className="text-xs font-bold text-slate-900">Warm-up</div>
<div className="text-[10px] text-slate-500 leading-tight">
                      Artificial traffic network
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      14
                    </div>
<div className="text-xs font-bold text-slate-500">Go Live</div>
<div className="text-[10px] text-slate-400 leading-tight">
                      Low volume sequence start
                    </div>
</div>

<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                      30
                    </div>
<div className="text-xs font-bold text-slate-500">Scale</div>
<div className="text-[10px] text-slate-400 leading-tight">
                      Full capacity reached
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-850 text-white overflow-hidden relative isolate border-t border-slate-800" id="testimonials">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Founder Story
              </div>
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6 leading-tight">
                "We went from 20% open rates to
                <span className="text-emerald-400">65% in three weeks.</span>
                "
              </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed text-balance">
                See how ScaleUp.io utilized Hatchearly's managed infrastructure
                to bypass spam filters and triple their pipeline generation
                without hiring a single SDR.
              </p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden">
<img alt="Speaker" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="font-bold text-white">Alex Rivera</div>
<div className="text-sm text-slate-500">CRO at ScaleUp.io</div>
</div>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-2xl shadow-black/50 border border-white/10 ring-1 ring-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center z-20">
<button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-play w-5 h-5 text-slate-900 fill-slate-900 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</button>
</div>
<div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">
                    Watch Interview
                  </span>
</div>
<span className="px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white border border-white/10">
                  02:14
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#FDFBF9] relative overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Seamlessly integrated stack.
            </h2>
<p className="mt-4 text-slate-500 text-lg">
              Connect your existing sales engagement platforms. We handle the
              plumbing, you keep your workflow.
            </p>
</div>
<div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-[600px] h-[600px] border border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] border border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
</div>
<div className="relative z-10 h-24 w-24 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center ring-4 ring-slate-50">
<div className="h-10 w-10 rounded-lg bg-slate-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
</div>
<div className="absolute top-1/2 left-[10%] -translate-y-1/2 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer">
<img alt="Salesforce" className="w-8 h-8" src="https://cdn.simpleicons.org/salesforce/00A1E0"/>
</div>
<div className="absolute top-[15%] right-[20%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1s'}}>
<img alt="HubSpot" className="w-8 h-8" src="https://cdn.simpleicons.org/hubspot/FF7A59"/>
</div>
<div className="absolute bottom-[20%] right-[15%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '2s'}}>
<img alt="Gmail" className="w-8 h-8" src="https://cdn.simpleicons.org/gmail/EA4335"/>
</div>
<div className="absolute bottom-[10%] left-[25%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '3s'}}>
<img alt="Outreach" className="w-8 h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute top-[10%] left-[30%] bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 animate-blob hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1.5s'}}>
<img alt="Outlook" className="w-8 h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-y border-slate-100" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  How long does the warm-up process take?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We typically require a 14-day warm-up period for fresh domains
                to reach optimal deliverability. However, our pre-warmed pools
                allow some clients to start sending at volume within 72 hours.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  Do you replace burned domains?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                Yes. If a domain's health score drops below our threshold
                despite following best practices, we replace it instantly from
                our reserve pool at no additional cost. It's part of the
                subscription.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  Can I use my existing domains?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We strongly recommend against using your primary corporate
                domain for high-volume outbound to protect your internal
                communication. We build a satellite infrastructure that mirrors
                your brand identity.
              </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl bg-slate-50 p-6 text-slate-900 transition-all hover:bg-slate-100 active:scale-[0.99]">
<h3 className="font-semibold text-sm sm:text-base">
                  What sending platforms do you integrate with?
                </h3>
<div className="bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 group-open:rotate-180 group-open:text-slate-900 transition-all duration-300 shadow-sm">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-slate-50 rounded-b-xl -mt-2 text-slate-600 leading-relaxed text-sm animate-fade-in">
                We are platform-agnostic. Whether you use Smartlead, Instantly,
                Outreach, Salesloft, or HubSpot, our infrastructure plugs
                directly into your existing SMTP/IMAP settings.
              </div>
</details>
</div>
</div>
</section>
<section className="py-24 bg-slate-850 text-white relative overflow-hidden" id="book">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-indigo-400 font-semibold tracking-wide uppercase text-xs">
                Availability Limited
              </span>
<h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
                Stop playing DNS roulette.
                <br/>
<span className="text-slate-400">Get a strategy that works.</span>
</h2>
<p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                We'll audit your current setup for free. If we work together,
                you only pay for the infrastructure you use, at cost, plus a
                simple management fee.
              </p>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    Full audit of existing domains and blacklist status
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    Volume capacity planning for your Q3 goals
                  </span>
</div>
<div className="flex items-center gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-slate-200">
                    No commitment required for the strategy call
                  </span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-2 shadow-2xl shadow-black/50">
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-slate-900 font-bold text-lg">
                      Book Infrastructure Audit
                    </h3>
<p className="text-slate-500 text-xs mt-1">
                      30 min • Google Meet
                    </p>
</div>
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Founder" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email
                    </label>
<input className="w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Monthly Sending Volume
                    </label>
<select className="w-full rounded-lg border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm">
<option>Less than 5,000 / mo</option>
<option>5,000 - 25,000 / mo</option>
<option>25,000 - 100,000 / mo</option>
<option>100,000+ / mo</option>
</select>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-[0.98]" type="button">
                    Select a Time
                  </button>
</form>
<p className="text-[10px] text-center text-slate-400 mt-4">
                  Prefer email?
                  <a className="text-indigo-600 underline" href="#">
                    hello@hatchearly.com
                  </a>
</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-6 w-6 rounded bg-slate-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<span className="font-display font-bold text-sm text-slate-900">
                  Hatchearly
                </span>
</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                The infrastructure layer for modern outbound teams. We protect
                your domains so you can scale your revenue.
              </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Infrastructure
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Monitoring
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">About</a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Case Studies
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600 transition" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-indigo-600 transition" href="#">Terms</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
              © 2025 Hatchearly Inc. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-600 transition" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
