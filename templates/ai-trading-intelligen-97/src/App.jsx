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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617', // Main bg
},
brand: {
blue: '#3b82f6',
cyan: '#06b6d4',
glow: '#60a5fa',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
}
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Reveal animation on scroll
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((element) => {
            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => element.classList.add('active'),
                once: true
            });
        });

        // Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-lg');
                navbar.style.background = 'rgba(2, 4, 10, 0.8)';
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.style.background = 'transparent';
            }
        });

        // Tab Logic
        function switchTab(tabId) {
            // Remove active class from all contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to selected content
            const selectedContent = document.getElementById('tab-' + tabId);
            if(selectedContent) {
                selectedContent.classList.add('active');
            }

            // Update Buttons styles
            const buttons = ['discovery', 'alert', 'milestone'];
            buttons.forEach(btn => {
                const buttonEl = document.getElementById('tab-btn-' + btn);
                if (btn === tabId) {
                    buttonEl.classList.remove('bg-slate-900', 'text-slate-400', 'border-white/10');
                    buttonEl.classList.add('bg-white', 'text-slate-950', 'shadow-lg', 'ring-1', 'ring-white');
                } else {
                    buttonEl.classList.add('bg-slate-900', 'text-slate-400', 'border-white/10');
                    buttonEl.classList.remove('bg-white', 'text-slate-950', 'shadow-lg', 'ring-1', 'ring-white');
                }
            });
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
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:chart-square-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">Wisu</span>
<span className="ml-2 px-2 py-0.5 text-[10px] font-medium tracking-wide text-cyan-400 bg-cyan-950/50 border border-cyan-900 rounded-full">BETA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#reviews">Daily Reviews</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative px-4 py-2 rounded-full overflow-hidden bg-white text-slate-950 text-sm font-semibold transition-transform hover:scale-105" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-1.5">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-cyan-400 mb-8 animate-float shadow-[0_0_20px_rgba(34,211,238,0.15)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    Now available for all Wisuno accounts
                </div>

<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                    Your AI that <br/>
<span className="text-gradient-subtle">knows your trades.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                    Wisu is built directly into Wisuno. Get daily trade reviews, behavioral analysis, and real-time risk alerts without lifting a finger. 
                    <span className="text-slate-200">100% Free.</span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2" href="#">
                        Open Free Account
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full glass text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center gap-2" href="#how-it-works">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Demo
                    </a>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] perspective-1000">

<div className="absolute inset-x-4 top-0 bottom-0 glass-card rounded-2xl border border-white/10 p-1 md:p-2 transform rotate-x-12 scale-95 opacity-90 transition-transform duration-1000 hover:scale-100 hover:rotate-x-0 overflow-hidden shadow-2xl shadow-blue-900/20" id="hero-dashboard">
<div className="bg-[#0B1121] rounded-xl w-full h-full p-6 flex flex-col relative overflow-hidden">

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="flex gap-4">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-slate-500 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                                    wisu.ai/dashboard
                                </div>
</div>

<div className="grid grid-cols-12 gap-6 h-full">

<div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-white/5 pr-4">
<div className="h-8 w-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4"><iconify-icon icon="solar:home-smile-linear"></iconify-icon></div>
<div className="h-8 w-8 rounded-lg hover:bg-white/5 text-slate-500 flex items-center justify-center transition-colors"><iconify-icon icon="solar:graph-new-linear"></iconify-icon></div>
<div className="h-8 w-8 rounded-lg hover:bg-white/5 text-slate-500 flex items-center justify-center transition-colors"><iconify-icon icon="solar:bell-bing-linear"></iconify-icon></div>
<div className="h-8 w-8 rounded-lg hover:bg-white/5 text-slate-500 flex items-center justify-center transition-colors"><iconify-icon icon="solar:settings-linear"></iconify-icon></div>
</div>

<div className="col-span-12 md:col-span-7 flex flex-col gap-6">

<div className="h-48 rounded-xl bg-gradient-to-b from-slate-800/20 to-transparent border border-white/5 relative p-4 group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMS0xaDM4VjFIMXYzOHoiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-slate-400 font-medium">Performance (Wisu Score)</span>
<span className="text-xs text-emerald-400">+12%</span>
</div>

<svg className="w-full h-24 overflow-visible" preserveaspectratio="none">
<path className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" d="M0,80 Q40,70 80,40 T160,50 T240,20 T320,60 T400,30" fill="none" stroke="#22d3ee" strokeWidth="2">
<animate attributename="d" dur="10s" repeatcount="indefinite" values="M0,80 Q40,70 80,40 T160,50 T240,20 T320,60 T400,30; M0,80 Q40,60 80,50 T160,30 T240,40 T320,50 T400,20; M0,80 Q40,70 80,40 T160,50 T240,20 T320,60 T400,30"></animate>
</path>
</svg>
</div>

<div className="flex gap-4">
<div className="flex-1 rounded-xl bg-slate-900/50 border border-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-400" icon="solar:shield-warning-linear"></iconify-icon>
<span className="text-xs text-slate-300">Risk Detected</span>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed">Revenge trading pattern identified on GBPUSD. Cool down suggested.</p>
</div>
<div className="flex-1 rounded-xl bg-slate-900/50 border border-white/5 p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-purple-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs text-slate-300">Daily Review</span>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed">Yesterday's win rate was 20% higher during London session.</p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-3 border-l border-white/5 pl-4 hidden md:flex flex-col gap-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Analysis</span>
<div className="h-2 rounded-full bg-slate-800 w-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
<div className="h-2 rounded-full bg-slate-800 w-full overflow-hidden">
<div className="h-full bg-cyan-500 w-1/2"></div>
</div>
<div className="h-2 rounded-full bg-slate-800 w-full overflow-hidden">
<div className="h-full bg-purple-500 w-2/3"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-1/4 glass-card p-3 rounded-lg flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-white">Discipline Score</div>
<div className="text-[10px] text-slate-400">Improved by 15%</div>
</div>
</div>
<div className="absolute -left-4 bottom-1/3 glass-card p-3 rounded-lg flex items-center gap-3 animate-float" style={{animationDelay: '2.5s'}}>
<div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-white">Risk Alert</div>
<div className="text-[10px] text-slate-400">High volatility ahead</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#02040a] to-transparent z-20"></div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Why Smart Traders <span className="text-slate-500 line-through">Lose</span> Fail</h2>
<p className="text-slate-400 max-w-xl mx-auto font-light">Self-sabotage is the #1 account killer. Wisu identifies the patterns you can't see.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 reveal">
<div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<iconify-icon className="text-red-400 mb-6 text-4xl" icon="solar:refresh-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Revenge Trading</h3>
<p className="text-sm text-slate-400 leading-relaxed">Trying to win back losses immediately, often leading to bigger drawdowns. Wisu detects the tilt before you execute.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<iconify-icon className="text-amber-400 mb-6 text-4xl" icon="solar:wad-of-money-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Over-Leveraging</h3>
<p className="text-sm text-slate-400 leading-relaxed">Taking risks disproportionate to your account size. Wisu analyzes position sizing relative to market volatility.</p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<iconify-icon className="text-blue-400 mb-6 text-4xl" icon="solar:blindframe-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Strategy Drift</h3>
<p className="text-sm text-slate-400 leading-relaxed">Abandoning your edge when bored or frustrated. Wisu reminds you of your historical best setups.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-950/50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2 block">Intelligence</span>
<h2 className="font-display text-3xl md:text-5xl font-medium text-white tracking-tight">Built into the platform.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden reveal">
<div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
<div className="w-64 h-64 bg-blue-500 rounded-full blur-[80px]"></div>
</div>
<div className="p-8 h-full flex flex-col justify-end relative z-10">
<div className="mb-auto">
<div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
<iconify-icon icon="solar:eye-scan-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-2">Zero-Touch Tracking</h3>
<p className="text-slate-400 max-w-md">No journaling apps. No spreadsheets. Wisu automatically logs every entry, exit, stop-loss, and take-profit directly from Wisuno.</p>
</div>
</div>

<div className="row-span-2 relative group rounded-3xl border border-white/10 bg-slate-900 overflow-hidden reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-6 w-fit">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-medium text-white mb-4">Daily Reviews</h3>
<p className="text-slate-400 mb-8">Wake up to a structured analysis of yesterday's performance in your inbox.</p>

<div className="mt-auto bg-white/5 rounded-t-xl border-t border-x border-white/10 p-4 transform translate-y-2 transition-transform group-hover:translate-y-0">
<div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div className="h-2 w-24 bg-slate-700 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-700/50 rounded"></div>
<div className="h-2 w-5/6 bg-slate-700/50 rounded"></div>
<div className="h-2 w-4/6 bg-slate-700/50 rounded"></div>
</div>
</div>
</div>
</div>

<div className="relative group rounded-3xl border border-white/10 bg-slate-900 overflow-hidden reveal">
<div className="p-8 h-full flex flex-col justify-between">
<iconify-icon className="text-3xl text-amber-400" icon="solar:bell-bing-linear"></iconify-icon>
<div>
<h3 className="text-xl font-display font-medium text-white mb-2">Contextual Alerts</h3>
<p className="text-sm text-slate-400">"High impact news in 5 mins." Wisu warns you before you enter a trap.</p>
</div>
</div>
</div>

<div className="relative group rounded-3xl border border-white/10 bg-slate-900 overflow-hidden reveal">
<div className="p-8 h-full flex flex-col justify-between">
<iconify-icon className="text-3xl text-emerald-400" icon="solar:graph-up-linear"></iconify-icon>
<div>
<h3 className="text-xl font-display font-medium text-white mb-2">Pattern Recognition</h3>
<p className="text-sm text-slate-400">Identify your most profitable sessions and pairs automatically.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12 reveal">
<h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">See what you're missing</h2>
<p className="text-slate-400">Toggle between insights Wisu generates for you.</p>
</div>
<div className="flex flex-col md:flex-row justify-center gap-4 mb-12 reveal">
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-white text-slate-950 shadow-lg shadow-white/10 ring-1 ring-white" id="tab-btn-discovery" onclick="switchTab('discovery')">Discovery</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-slate-900 text-slate-400 hover:text-white border border-white/10" id="tab-btn-alert" onclick="switchTab('alert')">Risk Alert</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-slate-900 text-slate-400 hover:text-white border border-white/10" id="tab-btn-milestone" onclick="switchTab('milestone')">Milestone</button>
</div>

<div className="tab-content active max-w-4xl mx-auto" id="tab-discovery">
<div className="glass-card rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
<div className="flex items-start gap-6">
<div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 hidden sm:block">
<iconify-icon icon="solar:lightbulb-linear" width="32"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-bold text-blue-400 tracking-wider uppercase">Insight</span>
<span className="text-xs text-slate-500">Just now</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Session Optimization</h3>
<p className="text-slate-300 leading-relaxed mb-4">
                                "You are 68% more profitable on <span className="text-white font-medium">GBP/USD</span> during the London Session compared to the NY Session. Consider focusing your volume between 8:00 AM and 11:00 AM GMT."
                            </p>
<div className="flex gap-4 text-xs font-mono text-slate-500">
<span>Trades analyzed: 142</span>
<span>Confidence: High</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content max-w-4xl mx-auto" id="tab-alert">
<div className="glass-card rounded-2xl p-8 border border-red-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
<div className="flex items-start gap-6">
<div className="p-3 rounded-xl bg-red-500/10 text-red-400 hidden sm:block">
<iconify-icon icon="solar:danger-triangle-linear" width="32"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-bold text-red-400 tracking-wider uppercase">Critical Warning</span>
<span className="text-xs text-slate-500">Live</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">High Volatility Event</h3>
<p className="text-slate-300 leading-relaxed mb-4">
                                "CPI Data release in 5 minutes. Spreads on <span className="text-white font-medium">XAU/USD</span> are widening. Your current stop-loss is within the expected volatility range (ATR x 2)."
                            </p>
<div className="flex gap-4 text-xs font-mono text-slate-500">
<span>Risk Level: Extreme</span>
<span>Action: Review SL</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content max-w-4xl mx-auto" id="tab-milestone">
<div className="glass-card rounded-2xl p-8 border border-emerald-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
<div className="flex items-start gap-6">
<div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 hidden sm:block">
<iconify-icon icon="solar:cup-star-linear" width="32"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Milestone</span>
<span className="text-xs text-slate-500">Today</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Discipline Streak</h3>
<p className="text-slate-300 leading-relaxed mb-4">
                                "Congratulations! You have adhered to your risk management plan (max 1% risk per trade) for <span className="text-white font-medium">20 consecutive trades</span>. This is your personal best."
                            </p>
<div className="flex gap-4 text-xs font-mono text-slate-500">
<span>Streak: 12 Days</span>
<span>P&amp;L impact: +4.2%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative border-y border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">Wake up smarter.</h2>
<p className="text-slate-400 text-lg mb-8 font-light">
                    Every morning at 8 AM, Wisu delivers a comprehensive review of your previous day. It highlights technical errors, emotional decisions, and execution quality.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Technical Context Analysis (RSI, MACD state at entry)
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Behavioral Flags (FOMO, Revenge)
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        News Impact Assessment
                    </li>
</ul>
<a className="text-white font-medium hover:text-cyan-400 transition-colors inline-flex items-center gap-2 border-b border-transparent hover:border-cyan-400 pb-0.5" href="#">
                    View a sample report
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative reveal delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
<div className="bg-slate-900 rounded-xl border border-white/10 p-1">

<div className="bg-slate-800/50 rounded-t-lg p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">W</div>
<div>
<div className="text-sm font-medium text-white">Your Daily Trade Review</div>
<div className="text-xs text-slate-500">From: Wisu AI &lt;ai@wisuno.com&gt;</div>
</div>
</div>
<div className="text-xs text-slate-500">8:02 AM</div>
</div>

<div className="p-6 bg-[#0f172a]">
<div className="h-4 w-32 bg-slate-800 rounded mb-6"></div>
<div className="space-y-3 mb-8">
<div className="h-2 w-full bg-slate-800 rounded"></div>
<div className="h-2 w-5/6 bg-slate-800 rounded"></div>
<div className="h-2 w-4/6 bg-slate-800 rounded"></div>
</div>

<div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 mb-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 mt-1" icon="solar:info-circle-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-amber-500 mb-1">Execution Warning</div>
<div className="text-xs text-slate-400 leading-relaxed">
                                        Trade #892 (EURUSD) was executed 2 minutes before major news. Historically, this leads to a 60% stop-out rate for your strategy.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950/20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6 reveal">Professional Intelligence.<br/>Zero Cost.</h2>
<p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto reveal">
                We believe in empowering traders, not gatekeeping data. Wisu is a core feature of the Wisuno platform.
            </p>
<div className="relative max-w-lg mx-auto reveal">
<div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur-sm opacity-50"></div>
<div className="relative bg-slate-900 rounded-[23px] p-8 md:p-12 border border-white/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Included Free</span>
</div>
<div className="text-5xl font-display font-medium text-white mb-2">$0</div>
<div className="text-slate-500 text-sm mb-8">/ month forever</div>
<div className="space-y-4 text-left mb-10 pl-4 md:pl-12">
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-300">Unlimited Trade Tracking</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-300">Daily Email Reviews</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-300">Real-time Risk Alerts</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-300">Behavioral Analytics</span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-white text-slate-950 font-bold text-sm hover:scale-[1.02] transition-transform shimmer-btn text-white relative overflow-hidden group">
<span className="relative z-10 flex items-center justify-center gap-2">
                             Start Trading with Wisu
                             <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<p className="text-xs text-slate-500 mt-4">No credit card required. Built into Wisuno.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-medium text-white mb-10 text-center">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-900/30 rounded-lg border border-white/5 open:bg-slate-900/50 open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-200">
<span>Is Wisu really 100% free?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 text-sm leading-relaxed">
                        Yes—Wisu is completely free and built into every Wisuno account by default. No trials, no credit cards, no hidden fees. All features included forever.
                    </div>
</details>

<details className="group bg-slate-900/30 rounded-lg border border-white/5 open:bg-slate-900/50 open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-200">
<span>Do I need to manually enter my trades?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 text-sm leading-relaxed">
                        No! Trades are imported automatically from your Wisuno account in real-time. Just trade as usual, and Wisu handles the rest.
                    </div>
</details>

<details className="group bg-slate-900/30 rounded-lg border border-white/5 open:bg-slate-900/50 open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-200">
<span>How does the AI analyze my trades?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 text-sm leading-relaxed">
                        Wisu uses machine learning models trained on millions of trades to evaluate entry quality, exit timing, risk management, and emotional state—comparing your trades to your personal history and broader market patterns.
                    </div>
</details>

<details className="group bg-slate-900/30 rounded-lg border border-white/5 open:bg-slate-900/50 open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-200">
<span>What makes Wisu different from other trading journals?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 px-5 pb-5 text-sm leading-relaxed">
                        Unlike manual journals or paid tools ($20-$50/month), Wisu is fully automatic, AI-powered, provides real-time insights and risk alerts, and it's 100% free—built into every Wisuno account.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
</div>
<span className="font-display font-medium text-white">Wisu</span>
<span className="text-slate-500 text-sm ml-2">by Wisuno</span>
</div>
<div className="text-sm text-slate-500">
                © 2023 Wisuno Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
