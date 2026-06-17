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
zinc: { 850: '#1f1f22', 900: '#18181b', 950: '#09090b' },
mani: { 500: '#6366f1', 600: '#4f46e5' } // Indigo base for AI
},
letterSpacing: { tightest: '-0.05em' }
}
}
}



        const router = {
            history: [],
            navigate: (targetId) => {
                // Hide all screens
                document.querySelectorAll('#app-container > div').forEach(el => {
                    if(!el.id.startsWith('modal')) el.classList.add('hidden');
                });
                
                // Show target
                const target = document.getElementById(targetId);
                target.classList.remove('hidden');
                
                // Manage history
                router.history.push(targetId);

                // Manage Nav Bar visibility
                const nav = document.getElementById('bottom-nav');
                if(['screen-dashboard', 'screen-chat', 'screen-profile'].includes(targetId)) {
                    nav.classList.remove('hidden');
                    nav.classList.add('flex');
                    router.updateNavActiveState(targetId);
                } else {
                    nav.classList.add('hidden');
                    nav.classList.remove('flex');
                }
            },
            back: () => {
                if(router.history.length > 1) {
                    router.history.pop();
                    const prev = router.history[router.history.length - 1];
                    router.navigate(prev);
                    router.history.pop(); // Remove the duplicate push from navigate call
                }
            },
            updateNavActiveState: (activeId) => {
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    const icon = btn.querySelector('.iconify');
                    const text = btn.querySelector('span:last-child');
                    if(btn.dataset.target === activeId) {
                        icon.classList.remove('text-zinc-500');
                        icon.classList.add('text-white');
                        text.classList.remove('text-zinc-500');
                        text.classList.add('text-white');
                    } else {
                        icon.classList.add('text-zinc-500');
                        icon.classList.remove('text-white');
                        text.classList.add('text-zinc-500');
                        text.classList.remove('text-white');
                    }
                });
            }
        };

        const ui = {
            openBankModal: () => {
                const modal = document.getElementById('modal-bank');
                const panel = document.getElementById('modal-bank-panel');
                modal.classList.remove('hidden', 'flex');
                modal.classList.add('flex', 'opacity-100');
                // Trigger animation frame
                setTimeout(() => panel.classList.remove('translate-y-full'), 10);
            },
            openGoalModal: () => {
                const modal = document.getElementById('modal-goal');
                const panel = document.getElementById('modal-goal-panel');
                modal.classList.remove('hidden', 'flex');
                modal.classList.add('flex', 'opacity-100');
                setTimeout(() => panel.classList.remove('scale-95'), 10);
            },
            closeModals: () => {
                const modals = ['modal-bank', 'modal-goal'];
                modals.forEach(id => {
                    const m = document.getElementById(id);
                    if(!m.classList.contains('hidden')) {
                        m.classList.remove('opacity-100');
                        const panel = m.firstElementChild;
                        if(id === 'modal-bank') panel.classList.add('translate-y-full');
                        else panel.classList.add('scale-95');
                        
                        setTimeout(() => m.classList.add('hidden'), 300);
                    }
                });
            },
            simulateConnection: () => {
                const loading = document.getElementById('bank-loading');
                loading.classList.remove('hidden');
                loading.classList.add('flex');
                
                setTimeout(() => {
                    loading.classList.add('hidden');
                    ui.closeModals();
                    router.navigate('screen-dashboard');
                }, 2000);
            }
        };

        // Init
        // router.navigate('screen-onboarding'); // Default Start
        
        // For preview purposes, checking if url has hash to jump
        window.addEventListener('load', () => {
             router.navigate('screen-onboarding');
        });

        // Close modal on outside click
        document.querySelectorAll('[id^="modal-"]').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if(e.target === modal) ui.closeModals();
            })
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
      

<div className="w-full max-w-md h-full bg-zinc-950 relative shadow-2xl overflow-hidden flex flex-col">

<div className="flex-1 relative overflow-hidden" id="app-container">

<div className="absolute inset-0 bg-zinc-950 z-50 flex flex-col justify-between p-6 animate-fade-in" id="screen-onboarding">
<div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
<div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
<span className="iconify text-white w-8 h-8" data-icon="lucide:sparkles"></span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white">Mani.ai</h1>
<p className="text-zinc-400 text-lg leading-relaxed max-w-xs">Your personal wealth coach tailored to your life goals.</p>
</div>
<div className="space-y-3 pb-8">
<button className="w-full bg-white text-black h-12 rounded-xl font-medium text-sm hover:bg-zinc-200 transition tap-scale tracking-tight" onclick="router.navigate('screen-connect-card')">Get Started</button>
<button className="w-full bg-transparent border border-zinc-800 text-zinc-400 h-12 rounded-xl font-medium text-sm hover:text-white transition tap-scale tracking-tight">Log In</button>
</div>
</div>

<div className="absolute inset-0 bg-zinc-950 z-40 hidden flex-col p-6" id="screen-connect-card">
<div className="flex justify-between items-center mb-8">
<button className="text-zinc-400 hover:text-white" onclick="router.back()"><span className="iconify w-6 h-6" data-icon="lucide:arrow-left"></span></button>
<button className="text-xs font-medium text-zinc-500" onclick="router.navigate('screen-dashboard')">Skip</button>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
<div className="w-64 h-40 border border-dashed border-zinc-800 rounded-2xl flex items-center justify-center bg-zinc-900/50">
<span className="iconify text-zinc-700 w-10 h-10" data-icon="lucide:credit-card"></span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Connect First</h2>
<p className="text-zinc-400 text-sm max-w-[250px]">To give you accurate insights, Mani needs to analyze your transaction history securely.</p>
</div>
<button className="w-full bg-indigo-600 text-white h-12 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-indigo-500 transition tap-scale shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)]" onclick="ui.openBankModal()">
<span className="iconify w-4 h-4" data-icon="lucide:lock"></span>
                    Connect Securely
                </button>
</div>

<div className="absolute inset-0 bg-zinc-950 z-0 hidden flex-col pb-20 overflow-y-auto no-scrollbar" id="screen-dashboard">

<header className="p-6 pb-2 flex justify-between items-start pt-12">
<div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</p>
<h1 className="text-3xl font-semibold tracking-tight text-white flex items-start gap-1">
                            $24,502<span className="text-lg text-zinc-500 mt-1">.45</span>
</h1>
<div className="flex items-center gap-1 mt-2 text-emerald-500 text-xs bg-emerald-500/10 px-2 py-1 rounded-full w-max">
<span className="iconify" data-icon="lucide:trending-up"></span>
<span>+12.4% vs last month</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center relative">
<span className="iconify text-zinc-300 w-5 h-5" data-icon="lucide:bell"></span>
<div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-zinc-950"></div>
</div>
</header>

<div className="px-6 mt-6 space-y-6">

<div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-indigo-500/30 relative overflow-hidden group">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex items-start gap-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
<span className="iconify text-white w-5 h-5" data-icon="lucide:sparkles"></span>
</div>
<div>
<h3 className="text-sm font-medium text-white mb-1">Subscription Alert</h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-3">You're spending $45/mo on unused streaming services. Cancel them to save $540/yr.</p>
<button className="text-xs text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-1" onclick="router.navigate('screen-chat')">
                                    Ask Mani to fix this <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="glass p-4 rounded-2xl flex flex-col justify-between h-36">
<div className="flex justify-between items-start">
<span className="text-xs text-zinc-500 font-medium">Spending</span>
<span className="iconify text-zinc-600 w-4 h-4" data-icon="lucide:bar-chart-2"></span>
</div>
<div className="flex items-end justify-between h-16 gap-1">
<div className="w-full bg-zinc-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[100%]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[30%]"></div>
</div>
</div>
<div className="glass p-4 rounded-2xl flex flex-col justify-between h-36 relative">
<span className="text-xs text-zinc-500 font-medium">Fin-Health</span>
<div className="absolute right-3 top-3">
<span className="iconify text-emerald-500 w-4 h-4" data-icon="lucide:activity"></span>
</div>
<div className="flex items-center justify-center mt-2">
<div className="relative w-20 h-20">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-800" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-emerald-500" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" stroke-dasharray="226" stroke-dashoffset="45" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-lg font-bold text-white tracking-tight">82</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass p-4 rounded-2xl">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-white">Japan Trip</h3>
<span className="text-xs text-zinc-400">Target: $5,000</span>
</div>
<div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-2">
<div className="bg-white h-full w-[65%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>$3,250 saved</span>
<span className="text-white font-medium">65%</span>
</div>
</div>

<div className="flex justify-between items-center pt-2">
<h3 className="text-sm font-medium text-zinc-300">Recent</h3>
<button className="text-xs text-indigo-500 font-medium">View All</button>
</div>

<div className="space-y-4 pb-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="iconify text-white w-4 h-4" data-icon="lucide:coffee"></span>
</div>
<div>
<p className="text-sm text-white font-medium">Starbucks</p>
<p className="text-xs text-zinc-500">Today, 9:41 AM</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$5.50</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="iconify text-white w-4 h-4" data-icon="lucide:shopping-bag"></span>
</div>
<div>
<p className="text-sm text-white font-medium">Whole Foods</p>
<p className="text-xs text-zinc-500">Yesterday</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$84.20</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-zinc-950 z-0 hidden flex-col pb-20" id="screen-chat">

<div className="h-24 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-end p-4 pb-3 z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="iconify text-white w-5 h-5" data-icon="lucide:bot"></span>
</div>
<div>
<h2 className="text-sm font-medium text-white">Mani Coach</h2>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-zinc-500">Online</span>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar" id="chat-messages">

<div className="flex justify-center"><span className="text-[10px] text-zinc-600 font-medium bg-zinc-900 px-2 py-1 rounded">Today</span></div>

<div className="flex gap-3 items-start animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="w-6 h-6 rounded bg-indigo-600/20 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-indigo-400 w-3.5 h-3.5" data-icon="lucide:sparkles"></span>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm p-3">
<p className="text-sm text-zinc-300 leading-relaxed">I noticed your dining expenses are 20% higher this week. Want to set a temporary limit?</p>
</div>

<div className="flex gap-2 flex-wrap">
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 rounded-lg text-xs font-medium text-white transition">Set Limit</button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 rounded-lg text-xs font-medium text-white transition">Show Details</button>
</div>
</div>
</div>

<div className="flex gap-3 items-start justify-end animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="bg-indigo-600 rounded-2xl rounded-tr-sm p-3 max-w-[85%]">
<p className="text-sm text-white leading-relaxed">Show me how much I can save for the Japan trip this month.</p>
</div>
</div>

<div className="flex gap-3 items-start animate-slide-up" style={{animationDelay: '0.8s'}}>
<div className="w-6 h-6 rounded bg-indigo-600/20 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-indigo-400 w-3.5 h-3.5" data-icon="lucide:sparkles"></span>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm p-4 w-64">
<p className="text-sm text-zinc-300 mb-3">Based on your cash flow, here is a projection:</p>
<div className="h-24 flex items-end justify-between gap-1 mb-2">
<div className="w-full bg-zinc-800 rounded-sm h-[40%]"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[50%]"></div>
<div className="w-full bg-emerald-500/50 rounded-sm h-[70%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-[10px] px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition">+$400</div>
</div>
</div>
<p className="text-xs text-zinc-500 text-center">Projected Savings: <span className="text-emerald-400 font-medium">+$450</span></p>
</div>
</div>
</div>

<div className="p-4 pt-2 bg-zinc-950 z-10">
<div className="relative flex items-center">
<input className="w-full bg-zinc-900 text-white text-sm rounded-full pl-4 pr-12 py-3 border border-zinc-800 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition placeholder:text-zinc-600" placeholder="Ask Mani anything..." type="text"/>
<button className="absolute right-1.5 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-up"></span>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-zinc-950 z-0 hidden flex-col pb-20 overflow-y-auto no-scrollbar" id="screen-profile">
<div className="p-6 pt-12">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 flex items-center justify-center text-xl font-medium text-white">
                            JS
                        </div>
<div>
<h2 className="text-lg font-semibold text-white">John Smith</h2>
<p className="text-sm text-zinc-500">Premium Member</p>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Active Goals</h3>
<button className="w-6 h-6 rounded bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition" onclick="ui.openGoalModal()">
<span className="iconify w-4 h-4" data-icon="lucide:plus"></span>
</button>
</div>
<div className="space-y-3">
<div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-emerald-900/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
<span className="iconify w-5 h-5" data-icon="lucide:plane"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Japan Trip</p>
<p className="text-xs text-zinc-500">$3,250 / $5,000</p>
</div>
</div>
<div className="w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                                    65%
                                </div>
</div>
</div>
</div>

<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3 pl-1">Settings</h3>
<button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 transition group">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400 group-hover:text-white" data-icon="lucide:credit-card"></span>
<span className="text-sm text-zinc-300 group-hover:text-white">Connected Cards</span>
</div>
<span className="iconify text-zinc-600 w-4 h-4" data-icon="lucide:chevron-right"></span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 transition group">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400 group-hover:text-white" data-icon="lucide:bell"></span>
<span className="text-sm text-zinc-300 group-hover:text-white">Notifications</span>
</div>
<div className="w-8 h-4 bg-zinc-700 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 transition group">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400 group-hover:text-white" data-icon="lucide:shield"></span>
<span className="text-sm text-zinc-300 group-hover:text-white">Security</span>
</div>
<span className="iconify text-zinc-600 w-4 h-4" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-end opacity-0 transition-opacity duration-300" id="modal-bank">
<div className="w-full bg-zinc-900 rounded-t-3xl border-t border-zinc-800 p-6 transform translate-y-full transition-transform duration-300 ease-out h-[80%] flex flex-col" id="modal-bank-panel">
<div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mb-6"></div>
<h3 className="text-lg font-semibold text-white mb-4">Connect Bank</h3>
<div className="relative mb-6">
<span className="iconify absolute left-3 top-3 text-zinc-500" data-icon="lucide:search"></span>
<input className="w-full bg-zinc-950 text-white text-sm rounded-xl pl-10 pr-4 py-3 border border-zinc-800 focus:outline-none focus:border-indigo-500 transition" placeholder="Search for your bank" type="text"/>
</div>
<div className="space-y-2 overflow-y-auto no-scrollbar flex-1">
<div className="flex items-center justify-between p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition cursor-pointer" onclick="ui.simulateConnection()">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-black font-bold text-xs">ch</div>
<span className="text-sm font-medium text-white">Chase</span>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:chevron-right"></span>
</div>
<div className="flex items-center justify-between p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-600 transition cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">Am</div>
<span className="text-sm font-medium text-white">Amex</span>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:chevron-right"></span>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-zinc-900 rounded-t-3xl flex-col items-center justify-center hidden" id="bank-loading">
<div className="w-12 h-12 border-4 border-zinc-800 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
<p className="text-sm font-medium text-white animate-pulse">Securing Connection...</p>
</div>
</div>

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="modal-goal">
<div className="w-full bg-zinc-900 rounded-2xl border border-zinc-800 p-6 transform scale-95 transition-transform duration-300" id="modal-goal-panel">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white">New Goal</h3>
<button className="text-zinc-500 hover:text-white" onclick="ui.closeModals()"><span className="iconify" data-icon="lucide:x"></span></button>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-400 mb-1 block">Goal Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none" placeholder="e.g. New Macbook" type="text"/>
</div>
<div>
<label className="text-xs text-zinc-400 mb-1 block">Target Amount</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white focus:border-indigo-500 outline-none" placeholder="$0.00" type="text"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition mt-2" onclick="ui.closeModals()">Create Goal</button>
</div>
</div>
</div>
</div>

<nav className="h-20 glass-nav absolute bottom-0 w-full z-30 hidden items-start justify-around pt-4 px-2" id="bottom-nav">
<button className="nav-btn group flex flex-col items-center gap-1 w-16" data-target="screen-dashboard" onclick="router.navigate('screen-dashboard')">
<span className="iconify w-6 h-6 text-zinc-500 group-hover:text-white transition duration-300" data-icon="lucide:layout-grid"></span>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-white transition duration-300">Home</span>
</button>
<button className="nav-btn group flex flex-col items-center gap-1 w-16" data-target="screen-chat" onclick="router.navigate('screen-chat')">
<div className="relative">
<span className="iconify w-6 h-6 text-zinc-500 group-hover:text-white transition duration-300" data-icon="lucide:message-square"></span>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
</span>
</div>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-white transition duration-300">Mani</span>
</button>
<button className="nav-btn group flex flex-col items-center gap-1 w-16" data-target="screen-profile" onclick="router.navigate('screen-profile')">
<span className="iconify w-6 h-6 text-zinc-500 group-hover:text-white transition duration-300" data-icon="lucide:user"></span>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-white transition duration-300">Profile</span>
</button>
</nav>
</div>



    </>
  );
}
