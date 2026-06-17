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



        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            
            // Show selected view
            const selectedView = document.getElementById('view-' + viewName);
            if (selectedView) {
                selectedView.classList.add('active');
            }

            // Navigation State Logic
            const navLinks = document.getElementById('nav-links');
            const authButtons = document.getElementById('auth-buttons');
            const userMenu = document.getElementById('user-menu');
            const nav = document.querySelector('nav');

            if (viewName === 'app') {
                navLinks.style.display = 'none';
                authButtons.style.display = 'none';
                userMenu.style.display = 'flex';
                // Adjust nav container for full width feel in app
                nav.querySelector('.max-w-7xl').classList.remove('max-w-7xl');
                nav.querySelector('.mx-auto').classList.remove('mx-auto');
                nav.querySelector('.justify-between').classList.add('w-full', 'px-6');
                window.scrollTo(0,0);
            } else {
                navLinks.style.display = 'flex';
                // Simple hack for responsive state in this demo:
                if(window.innerWidth < 768) navLinks.style.display = 'none';
                
                authButtons.style.display = 'flex';
                userMenu.style.display = 'none';
                
                // Restore container styles
                nav.querySelector('.h-14').classList.add('max-w-7xl', 'mx-auto');
                nav.querySelector('.h-14').classList.remove('w-full', 'px-6');
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter cursor-pointer" onclick="switchView('landing')">
<span className="iconify text-white" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="18"></span>
                TRADEPATH
            </div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400" id="nav-links">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-4" id="auth-buttons">
<button className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block" onclick="switchView('login')">Log in</button>
<button className="text-xs bg-white text-black font-medium px-4 py-2 rounded hover:bg-neutral-200 transition-colors" onclick="switchView('login')">
                        Get Started
                    </button>
</div>

<div className="hidden items-center gap-4 w-full justify-between" id="user-menu">
<span className="text-sm font-medium text-white tracking-tight">Dashboard</span>
<div className="flex items-center gap-3">
<button className="bg-[#1e1e1e] hover:bg-[#252525] text-white/80 text-[11px] font-medium px-3 py-1.5 rounded border border-white/5 flex items-center gap-2 transition-colors">
<span className="iconify" data-icon="lucide:play-circle" data-width="14"></span>
                            Start session
                        </button>
<button className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium px-3 py-1.5 rounded transition-colors">Log Trade</button>
<button className="bg-[#1e1e1e] hover:bg-[#252525] text-white/80 text-[11px] font-medium px-3 py-1.5 rounded border border-white/5 transition-colors">Log Day</button>
<div className="h-4 w-[1px] bg-white/10 mx-1"></div>
<button className="flex items-center gap-2 text-[11px] text-neutral-400 bg-[#0A0A0A] border border-white/5 px-2 py-1.5 rounded hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:calendar" data-width="12"></span>
<span>Jan 01, 2025 - Aug 31, 2025</span>
</button>
</div>
</div>
</div>
</div>
</nav>

<section className="view-section active pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid min-h-screen" id="view-landing">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                New: AI-Driven Insights Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                Master your <br/>
<span className="text-gradient">trading edge.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                The professional journaling platform for data-driven traders. Analyze performance, track psychology, and scale your strategy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" onclick="switchView('app')">
                    Start Journaling
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="h-10 px-6 rounded border border-white/10 text-neutral-300 text-sm hover:bg-white/5 transition-colors">
                    View Demo
                </button>
</div>

<div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600 gap-4">
<p>Trusted by 10,000+ traders worldwide.</p>
<div className="flex gap-6">
<span>SOC2 Compliant</span>
<span>256-bit Encryption</span>
<span>Real-time Sync</span>
</div>
</div>
</div>
</section>

<section className="view-section min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative" id="view-login">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-xl p-8 shadow-2xl relative z-10">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4 border border-white/5">
<span className="iconify text-white" data-icon="lucide:activity" data-width="24"></span>
</div>
<h2 className="text-xl font-medium text-white tracking-tight">Log in to TradePath</h2>
<p className="text-sm text-neutral-500 mt-2">Enter your email below to access your journal</p>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Email Address</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder:text-neutral-600" placeholder="name@example.com" type="email"/>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" onclick="switchView('app')">
                    Sign In with Email
                </button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center">
<span className="w-full border-t border-white/10"></span>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-[#0A0A0A] px-2 text-neutral-500">Or continue with</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-neutral-900/50 hover:bg-white/5 transition-colors text-white text-sm">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
                        GitHub
                    </button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg bg-neutral-900/50 hover:bg-white/5 transition-colors text-white text-sm">
<span className="iconify" data-icon="lucide:chrome" data-width="16"></span>
                        Google
                    </button>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-8">
                By clicking continue, you agree to our <a className="underline hover:text-neutral-400" href="#">Terms of Service</a> and <a className="underline hover:text-neutral-400" href="#">Privacy Policy</a>.
            </p>
</div>
</section>

<div className="view-section bg-[#050505] min-h-screen border-t border-white/5 mt-14" id="view-app">
<div className="flex min-h-[calc(100vh-3.5rem)]">

<aside className="w-16 border-r border-white/5 bg-[#050505] hidden lg:flex flex-col items-center py-6 gap-6 z-20">
<button className="p-2.5 rounded bg-white/10 text-white border border-white/5 hover:bg-white/20 transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<span className="iconify" data-icon="lucide:pie-chart" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<span className="iconify" data-icon="lucide:clipboard-list" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all mt-auto">
<span className="iconify" data-icon="lucide:target" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-neutral-500 hover:text-white hover:bg-white/5 transition-all">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</button>
<button className="p-2.5 rounded text-rose-500 hover:text-rose-400 hover:bg-rose-500/5 transition-all">
<span className="iconify" data-icon="lucide:flower-2" data-width="18"></span>
</button>
</aside>

<main className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

<div className="xl:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between mb-6 relative z-10">
<h2 className="text-xl font-medium text-white tracking-tight">August 2025</h2>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="p-1.5 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-3 mb-2">
<div className="text-center text-xs font-medium text-neutral-600 py-2">Mo</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">Tu</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">We</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">Th</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">Fr</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">Sa</div>
<div className="text-center text-xs font-medium text-neutral-600 py-2">Su</div>
</div>
<div className="grid grid-cols-7 gap-3 relative z-10 h-[400px]">

<div className="rounded-lg bg-white/[0.01] border border-white/[0.02]"></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02]"></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02]"></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02]"></div>


<div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 p-2 flex flex-col justify-between glow-green transition-all hover:bg-emerald-500/[0.15] cursor-pointer">
<span className="text-[10px] text-emerald-500/70 block text-right">1</span>
<span className="text-[11px] font-semibold text-emerald-400 tracking-tight text-center truncate">$14,430.00</span>
</div>

<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">2</span></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">3</span></div>


<div className="rounded-lg bg-rose-500/[0.08] border border-rose-500/30 p-2 flex flex-col justify-between glow-red transition-all hover:bg-rose-500/[0.15] cursor-pointer">
<span className="text-[10px] text-rose-500/70 block text-right">4</span>
<span className="text-[11px] font-semibold text-rose-400 tracking-tight text-center truncate">-$5,950.00</span>
</div>

<div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 p-2 flex flex-col justify-between glow-green transition-all hover:bg-emerald-500/[0.15] cursor-pointer">
<span className="text-[10px] text-emerald-500/70 block text-right">5</span>
<span className="text-[11px] font-semibold text-emerald-400 tracking-tight text-center truncate">$2,100.00</span>
</div>

<div className="rounded-lg bg-rose-500/[0.08] border border-rose-500/30 p-2 flex flex-col justify-between glow-red transition-all hover:bg-rose-500/[0.15] cursor-pointer">
<span className="text-[10px] text-rose-500/70 block text-right">6</span>
<span className="text-[11px] font-semibold text-rose-400 tracking-tight text-center truncate">-$5,234.00</span>
</div>

<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 flex flex-col justify-between hover:bg-white/[0.02] cursor-pointer">
<span className="text-[10px] text-neutral-600 block text-right">7</span>
</div>

<div className="rounded-lg bg-rose-500/[0.08] border border-rose-500/30 p-2 flex flex-col justify-between glow-red transition-all hover:bg-rose-500/[0.15] cursor-pointer">
<span className="text-[10px] text-rose-500/70 block text-right">8</span>
<span className="text-[11px] font-semibold text-rose-400 tracking-tight text-center truncate">-$5,497.00</span>
</div>

<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">9</span></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">10</span></div>


<div className="rounded-lg bg-neutral-900 border border-white/[0.08] p-2 flex flex-col justify-between opacity-60">
<span className="text-[10px] text-neutral-500 block text-right">11</span>
<span className="text-[10px] font-medium text-neutral-500 text-center">No Trade</span>
</div>

<div className="rounded-lg bg-neutral-900 border border-white/[0.08] p-2 flex flex-col justify-between opacity-60">
<span className="text-[10px] text-neutral-500 block text-right">12</span>
<span className="text-[10px] font-medium text-neutral-500 text-center">No Trade</span>
</div>

<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 flex flex-col justify-between hover:bg-white/[0.02] cursor-pointer">
<span className="text-[10px] text-neutral-600 block text-right">13</span>
</div>

<div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 p-2 flex flex-col justify-between glow-green transition-all hover:bg-emerald-500/[0.15] cursor-pointer">
<span className="text-[10px] text-emerald-500/70 block text-right">14</span>
<span className="text-[11px] font-semibold text-emerald-400 tracking-tight text-center truncate">$500.00</span>
</div>

<div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 p-2 flex flex-col justify-between glow-green transition-all hover:bg-emerald-500/[0.15] cursor-pointer">
<span className="text-[10px] text-emerald-500/70 block text-right">15</span>
<span className="text-[11px] font-semibold text-emerald-400 tracking-tight text-center truncate">$500.00</span>
</div>

<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">16</span></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">17</span></div>

<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">18</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">19</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">20</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">21</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">22</span></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">23</span></div>
<div className="rounded-lg bg-white/[0.01] border border-white/[0.02] p-2 text-right"><span className="text-[10px] text-neutral-700">24</span></div>

<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">25</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">26</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">27</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">28</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">29</span></div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 flex justify-end items-start">
<span className="h-5 w-5 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[10px] font-bold">30</span>
</div>
<div className="rounded-lg bg-[#111] border border-white/[0.04] p-2 text-right"><span className="text-[10px] text-neutral-600">31</span></div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
<h2 className="text-sm font-medium text-neutral-400 mb-4 relative z-10">Recent Trades</h2>
<div className="grid grid-cols-3 gap-3 relative z-10">

<div className="p-2 rounded bg-emerald-500/[0.03] border border-emerald-500/20 text-center hover:bg-emerald-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-emerald-400 group-hover:text-emerald-300">$500.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 08/15/2025</div>
</div>

<div className="p-2 rounded bg-emerald-500/[0.03] border border-emerald-500/20 text-center hover:bg-emerald-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-emerald-400 group-hover:text-emerald-300">$500.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 08/14/2025</div>
</div>

<div className="p-2 rounded bg-rose-500/[0.03] border border-rose-500/20 text-center hover:bg-rose-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-rose-400 group-hover:text-rose-300">-$5,497.00</div>
<div className="text-[9px] text-neutral-500 mt-1">nq <br/> 08/08/2025</div>
</div>

<div className="p-2 rounded bg-rose-500/[0.03] border border-rose-500/20 text-center hover:bg-rose-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-rose-400 group-hover:text-rose-300">-$5,234.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 08/06/2025</div>
</div>

<div className="p-2 rounded bg-emerald-500/[0.03] border border-emerald-500/20 text-center hover:bg-emerald-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-emerald-400 group-hover:text-emerald-300">$2,100.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 08/05/2025</div>
</div>

<div className="p-2 rounded bg-rose-500/[0.03] border border-rose-500/20 text-center hover:bg-rose-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-rose-400 group-hover:text-rose-300">-$5,950.00</div>
<div className="text-[9px] text-neutral-500 mt-1">Nq <br/> 08/04/2025</div>
</div>

<div className="p-2 rounded bg-emerald-500/[0.03] border border-emerald-500/20 text-center hover:bg-emerald-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-emerald-400 group-hover:text-emerald-300">$14,430.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 08/01/2025</div>
</div>

<div className="p-2 rounded bg-rose-500/[0.03] border border-rose-500/20 text-center hover:bg-rose-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-rose-400 group-hover:text-rose-300">-$2,210.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 06/26/2025</div>
</div>

<div className="p-2 rounded bg-emerald-500/[0.03] border border-emerald-500/20 text-center hover:bg-emerald-500/[0.08] transition-colors cursor-pointer group">
<div className="text-[10px] font-semibold text-emerald-400 group-hover:text-emerald-300">$1,550.00</div>
<div className="text-[9px] text-neutral-500 mt-1">NQ <br/> 06/26/2025</div>
</div>
</div>
<button className="mt-auto pt-6 text-xs text-neutral-500 hover:text-white transition-colors text-center w-full">View More</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gradient-to-b from-[#0e0e0e] to-[#0A0A0A] border border-white/5 rounded-xl p-6 relative overflow-hidden">
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-300">Trade Win %</h3>
<span className="iconify text-emerald-500" data-icon="lucide:info" data-width="14"></span>
</div>
<div className="mt-8 mb-4 text-center">
<span className="text-5xl font-semibold text-emerald-500 tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">57.9%</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="flex justify-center gap-6 mt-8 relative z-10">
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full border-2 border-emerald-500/30 flex items-center justify-center text-xs font-medium text-white shadow-[0_0_10px_rgba(16,185,129,0.1)]">11</div>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full border-2 border-rose-500/30 flex items-center justify-center text-xs font-medium text-white shadow-[0_0_10px_rgba(244,63,94,0.1)]">8</div>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 rounded-full border-2 border-neutral-500/30 flex items-center justify-center text-xs font-medium text-white">0</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#0e0e0e] to-[#0A0A0A] border border-white/5 rounded-xl p-6 relative overflow-hidden">
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-300">Avg Win/Loss</h3>
<span className="iconify text-emerald-500" data-icon="lucide:info" data-width="14"></span>
</div>
<div className="mt-8 mb-8 text-center">
<span className="text-6xl font-semibold text-emerald-500 tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">1.1</span>
</div>
<div className="space-y-3 mt-auto relative z-10">
<div className="flex items-center justify-between text-[10px] font-medium text-emerald-400 mb-1">
<span>$3,381.32</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
<div className="flex items-center justify-between text-[10px] font-medium text-rose-400 mb-1 pt-2">
<span>-$3,163.38</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden shadow-[0_0_10px_rgba(244,63,94,0.2)]">
<div className="h-full bg-rose-500 w-[90%] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#0e0e0e] to-[#0A0A0A] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col items-center">
<div className="w-full text-left mb-2">
<h3 className="text-sm font-medium text-neutral-300">Tradepath Score</h3>
</div>
<div className="relative w-40 h-40 mt-2">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">

<polygon fill="none" points="50,10 90,40 75,85 25,85 10,40" stroke="#333" strokeWidth="0.5"></polygon>
<polygon fill="none" points="50,25 75,44 65,70 35,70 25,44" stroke="#333" strokeWidth="0.5"></polygon>

<line stroke="#333" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="10"></line>
<line stroke="#333" strokeWidth="0.5" x1="50" x2="90" y1="50" y2="40"></line>
<line stroke="#333" strokeWidth="0.5" x1="50" x2="75" y1="50" y2="85"></line>
<line stroke="#333" strokeWidth="0.5" x1="50" x2="25" y1="50" y2="85"></line>
<line stroke="#333" strokeWidth="0.5" x1="50" x2="10" y1="50" y2="40"></line>

<polygon className="radar-chart-polygon drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" points="50,15 80,45 55,75 35,80 20,45"></polygon>

<circle cx="50" cy="15" fill="#0A0A0A" r="2" stroke="#10b981" strokeWidth="1.5"></circle>
<circle cx="80" cy="45" fill="#0A0A0A" r="2" stroke="#10b981" strokeWidth="1.5"></circle>
<circle cx="55" cy="75" fill="#0A0A0A" r="2" stroke="#10b981" strokeWidth="1.5"></circle>
<circle cx="35" cy="80" fill="#0A0A0A" r="2" stroke="#10b981" strokeWidth="1.5"></circle>
<circle cx="20" cy="45" fill="#0A0A0A" r="2" stroke="#10b981" strokeWidth="1.5"></circle>
</svg>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-emerald-400">Win %</div>
<div className="absolute top-1/3 -right-6 text-[8px] text-emerald-400">Profit Factor</div>
<div className="absolute bottom-0 -right-4 text-[8px] text-emerald-400 text-center leading-tight">Win/Loss<br/>Ratio</div>
<div className="absolute bottom-0 -left-4 text-[8px] text-emerald-400">Consistency</div>
<div className="absolute top-1/3 -left-8 text-[8px] text-emerald-400 text-right leading-tight">Rule<br/>Adherence</div>
</div>
<div className="mt-auto text-3xl font-bold text-emerald-500 tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            52.99
                        </div>
</div>

<div className="bg-gradient-to-b from-[#0e0e0e] to-[#0A0A0A] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-between text-center">
<div className="w-full text-left">
<h3 className="text-sm font-medium text-neutral-300">Avg. emotion</h3>
</div>
<div className="relative flex items-center justify-center my-6">
<div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"></div>
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2a2a2a] to-[#3a3a3a] border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
<span className="iconify text-yellow-100/80" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="48"></span>
</div>
</div>
<div>
<div className="text-lg font-medium text-white">Happy</div>
<div className="flex justify-center mt-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
