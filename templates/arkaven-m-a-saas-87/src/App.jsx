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
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // View Router
        function switchView(viewId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const views = ['landing-view', 'login-view', 'signup-view', 'about-view', 'admin-dashboard-view'];
            
            // Handle specific view visibility logic
            if (viewId === 'admin-dashboard-view') {
                document.getElementById('main-nav').classList.add('hidden');
                document.body.style.overflow = 'hidden'; // Lock scroll for dashboard
            } else {
                document.getElementById('main-nav').classList.remove('hidden');
                document.body.style.overflow = 'auto';
            }

            views.forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    if(id === viewId) {
                        el.classList.remove('hidden');
                        void el.offsetWidth; // Trigger reflow
                    } else {
                        el.classList.add('hidden');
                    }
                }
            });
        }

        // Login Handler - UPDATED to be defined globally and called securely
        function handleLogin() {
            // Get inputs by ID
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const errorMsg = document.getElementById('login-error');
            const btn = document.getElementById('login-btn');

            if(!emailInput || !passwordInput) {
                console.error("Login inputs not found");
                return;
            }

            // Get values
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            // Hardcoded Credentials match check
            if (email === 'jonahwtulmau@gmail.com' && password === 'MiloNgimak1!') {
                errorMsg.classList.add('hidden');
                
                // Simulate loading briefly
                const originalText = btn.innerText;
                btn.innerText = 'Authenticating...';
                btn.disabled = true;
                btn.classList.add('opacity-75', 'cursor-not-allowed');
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                    
                    // Switch to Dashboard
                    switchView('admin-dashboard-view');
                    
                }, 800);
            } else {
                errorMsg.classList.remove('hidden');
                
                // Shake animation effect
                const card = document.querySelector('#login-view .glass-card');
                if(card) {
                    card.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-5px)' },
                        { transform: 'translateX(5px)' },
                        { transform: 'translateX(0)' }
                    ], { duration: 300 });
                }
            }
        }

        // Admin Tab Switcher
        function switchAdminTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.admin-tab').forEach(el => el.classList.add('hidden'));
            document.querySelector(`#tab-${tabName}`).classList.remove('hidden');

            // Update Sidebar State
            document.querySelectorAll('aside button').forEach(btn => {
                btn.classList.remove('bg-white/5', 'text-white');
                btn.classList.add('text-slate-400');
            });
            
            const activeBtn = document.getElementById(`nav-${tabName}`);
            activeBtn.classList.remove('text-slate-400');
            activeBtn.classList.add('bg-white/5', 'text-white');
        }

        // Pricing Logic
        let isAnnual = false;
        function togglePricing() {
            isAnnual = !isAnnual;
            const circle = document.getElementById('toggle-circle');
            const starter = document.querySelector('.price-starter');
            const pro = document.querySelector('.price-pro');
            const monthlyLabel = document.getElementById('monthly-label');
            const yearlyLabel = document.getElementById('yearly-label');

            if(isAnnual) {
                circle.style.transform = 'translateX(24px)';
                starter.textContent = '$75';
                pro.textContent = '$212';
                monthlyLabel.classList.replace('text-slate-300', 'text-slate-500');
                yearlyLabel.classList.replace('text-slate-500', 'text-slate-300');
            } else {
                circle.style.transform = 'translateX(0)';
                starter.textContent = '$89';
                pro.textContent = '$249';
                monthlyLabel.classList.replace('text-slate-500', 'text-slate-300');
                yearlyLabel.classList.replace('text-slate-300', 'text-slate-500');
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300" id="main-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group" onclick="switchView('landing-view')">
<span className="text-indigo-500 group-hover:rotate-12 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</span>
<span className="text-white font-semibold tracking-tight text-sm uppercase">Arkaven Global</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<button className="hover:text-white transition-colors" onclick="switchView('landing-view'); window.location.hash='home'">Home</button>
<button className="hover:text-white transition-colors" onclick="switchView('landing-view'); window.location.hash='features'">Features</button>
<button className="hover:text-white transition-colors" onclick="switchView('landing-view'); window.location.hash='pricing'">Pricing</button>
<button className="hover:text-white transition-colors" onclick="switchView('about-view')">About Us</button>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-slate-300 hover:text-white transition-colors" onclick="switchView('login-view')">Log In</button>
<button className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" onclick="switchView('signup-view')">Request Access</button>
</div>
</div>
</nav>

<main className="relative z-10 min-h-screen">

<div className="block animate-[fadeIn_0.5s_ease-out] pt-16" id="landing-view">

<section className="pt-20 pb-32 flex flex-col items-center justify-center min-h-[90vh]" id="home">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium mb-8 fade-in-up tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        New: Valuation Engine v2.0
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1] fade-in-up delay-100">
                        The AI Infrastructure for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-300">Modern M&amp;A Brokers</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                        Arkaven equips business brokers with intelligent automation, deal flow management, and valuation intelligence. Close deals faster with data-driven confidence.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300 mb-24">
<button className="group px-6 py-3 bg-white text-slate-950 text-sm font-medium rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" onclick="switchView('signup-view')">
                            Start Free Trial
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<a className="px-6 py-3 bg-slate-800/50 border border-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all" href="#features">
                            View Features
                        </a>
</div>
</div>

<div className="w-full max-w-6xl mx-auto px-4 perspective-container fade-in-up delay-300">
<div className="rotate-3d relative">
<div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="h-10 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="ml-4 px-3 py-1 bg-slate-800 rounded text-[10px] text-slate-500 font-mono">arkaven.app/pipeline</div>
</div>

<div className="flex h-[500px] bg-slate-950">

<div className="w-48 border-r border-white/5 p-4 flex flex-col gap-1">
<div className="h-8 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded flex items-center px-3 border border-indigo-500/20">Dashboard</div>
<div className="h-8 text-slate-500 text-xs font-medium rounded flex items-center px-3 hover:bg-white/5 cursor-pointer">Pipeline</div>
<div className="h-8 text-slate-500 text-xs font-medium rounded flex items-center px-3 hover:bg-white/5 cursor-pointer">Valuations</div>
<div className="h-8 text-slate-500 text-xs font-medium rounded flex items-center px-3 hover:bg-white/5 cursor-pointer">CRM</div>
</div>

<div className="flex-1 p-8">
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-lg bg-slate-900 border border-white/5">
<div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">Active Volume</div>
<div className="text-xl text-white font-medium">$12.4M</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-white/5">
<div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">Deals in Progress</div>
<div className="text-xl text-white font-medium">8</div>
</div>
<div className="p-4 rounded-lg bg-slate-900 border border-white/5">
<div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-2">Avg. Close Time</div>
<div className="text-xl text-white font-medium">4.2 Mo</div>
</div>
</div>
<div className="space-y-3">
<div className="h-14 w-full bg-slate-900/50 rounded border border-white/5 flex items-center px-4 justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:building-2" data-width="16"></span>
</div>
<div>
<div className="text-xs text-white font-medium">Tech Logistics Corp</div>
<div className="text-[10px] text-slate-500">LOI Signed • $2.1M</div>
</div>
</div>
<div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded border border-emerald-500/20">On Track</div>
</div>
<div className="h-14 w-full bg-slate-900/50 rounded border border-white/5 flex items-center px-4 justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:store" data-width="16"></span>
</div>
<div>
<div className="text-xs text-white font-medium">Main St. Manufacturing</div>
<div className="text-[10px] text-slate-500">Valuation Phase • $850k</div>
</div>
</div>
<div className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] rounded border border-indigo-500/20">Processing</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white mb-4">Broker-First Intelligence</h2>
<p className="text-slate-400 max-w-2xl">Automate the tedious parts of the deal flow so you can focus on negotiation and client relationships.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">AI Valuations</h3>
<p className="text-sm text-slate-400 leading-relaxed">Instantly generate baseline valuations using comparable market data and AI-driven SDE analysis.</p>
</div>
<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">Smart CIM Builder</h3>
<p className="text-sm text-slate-400 leading-relaxed">Turn raw financials and interview notes into professional Confidential Information Memorandums in minutes.</p>
</div>
<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-lg text-white font-medium mb-3">Buyer Matching</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automatically match listings with qualified buyers in your database based on acquisition criteria.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-4">Transparent Pricing</h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-slate-300" id="monthly-label">Monthly</span>
<button className="w-12 h-6 bg-slate-800 rounded-full relative transition-colors focus:outline-none" id="toggle-btn" onclick="togglePricing()">
<div className="absolute left-1 top-1 w-4 h-4 bg-indigo-500 rounded-full transition-transform duration-300" id="toggle-circle"></div>
</button>
<span className="text-sm font-medium text-slate-500" id="yearly-label">Yearly <span className="text-emerald-400 text-xs ml-1">-15%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<h3 className="text-lg text-slate-300 font-medium mb-2">Starter</h3>
<div className="mb-6"><span className="text-4xl font-bold text-white price-starter">$89</span><span className="text-slate-500 text-sm">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-400">
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> 1 User Seat</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> 5 Active Listings</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Basic AI Tools</li>
</ul>
<button className="w-full py-2 rounded-lg border border-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Get Started</button>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col relative ring-1 ring-indigo-500/50 bg-indigo-500/5">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Popular</div>
<h3 className="text-lg text-white font-medium mb-2">Professional</h3>
<div className="mb-6"><span className="text-4xl font-bold text-white price-pro">$249</span><span className="text-slate-500 text-sm">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Up to 5 Seats</li>
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Unlimited Listings</li>
<li className="flex gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Advanced Valuations</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25">Get Started</button>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col">
<h3 className="text-lg text-slate-300 font-medium mb-2">Enterprise</h3>
<div className="mb-6"><span className="text-4xl font-bold text-white">Custom</span></div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-slate-400">
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Unlimited Seats</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> API Access</li>
<li className="flex gap-3"><span className="iconify text-indigo-500" data-icon="lucide:check"></span> Custom Implementation</li>
</ul>
<button className="w-full py-2 rounded-lg border border-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:layers" data-width="20"></span>
<span className="text-white font-semibold text-sm">Arkaven Global</span>
</div>
<div className="text-xs text-slate-500">
                        © 2024 Arkaven Global Inc. All rights reserved.
                    </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen pt-16 flex items-center justify-center" id="login-view">
<div className="glass-card w-full max-w-sm p-8 rounded-2xl mx-4 animate-[fadeInUp_0.4s_ease-out]">
<div className="text-center mb-8">
<h2 className="text-xl font-semibold text-white">Welcome Back</h2>
<p className="text-slate-400 text-xs mt-2">Sign in to your Arkaven dashboard</p>
</div>

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-slate-600" id="login-email" placeholder="name@firm.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" id="login-password" placeholder="••••••••" type="password"/>
</div>

<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2 rounded-lg transition-colors mt-2" id="login-btn" onclick="handleLogin()" type="button">Sign In</button>
<p className="hidden text-xs text-red-400 text-center mt-2" id="login-error">Invalid credentials. Please try again.</p>
</div>
<button className="w-full text-center mt-6 text-xs text-slate-500 hover:text-white transition-colors" onclick="switchView('landing-view')">← Back to Home</button>
</div>
</div>

<div className="hidden min-h-screen pt-16 flex items-center justify-center" id="signup-view">
<div className="glass-card w-full max-w-md p-8 rounded-2xl mx-4 animate-[fadeInUp_0.4s_ease-out]">
<div className="text-center mb-8">
<h2 className="text-xl font-semibold text-white">Request Access</h2>
<p className="text-slate-400 text-xs mt-2">Join the leading firms using Arkaven</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thanks for your interest!'); switchView('landing-view');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">First Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Last Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5">Firm Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text"/>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2 rounded-lg transition-colors mt-2">Submit Request</button>
</form>
<button className="w-full text-center mt-6 text-xs text-slate-500 hover:text-white transition-colors" onclick="switchView('landing-view')">← Back to Home</button>
</div>
</div>

<div className="hidden min-h-screen pt-20 pb-20 animate-[fadeIn_0.5s_ease-out]" id="about-view">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">About Arkaven Global</h2>
<div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
</div>
<div className="glass-card p-10 rounded-2xl relative overflow-hidden">
<div className="relative z-10 space-y-6 text-slate-300 leading-relaxed text-base">
<p className="font-medium text-white text-lg">We build the operating system for dealmakers.</p>
<p>In an industry built on relationships and trust, technology shouldn't replace the broker—it should give them superpowers. Arkaven Global was founded to bridge the gap between traditional M&amp;A practices and modern data intelligence.</p>
<p>Our platform handles the heavy lifting of valuation analysis, document generation, and pipeline tracking, allowing advisors to focus on what they do best: closing deals.</p>
<p>We do not broker deals ourselves. We are purely an infrastructure partner, dedicated to the success of the firms that use our software.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-sm text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto" onclick="switchView('landing-view')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="14"></span>
                        Return to Home
                    </button>
</div>
</div>
</div>

<div className="hidden h-screen overflow-hidden flex animate-[fadeIn_0.5s_ease-out]" id="admin-dashboard-view">

<aside className="w-64 border-r border-white/5 bg-slate-950/80 flex flex-col justify-between p-4 hidden md:flex">
<div>
<div className="flex items-center gap-2 mb-8 px-2">
<span className="text-indigo-500">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</span>
<span className="text-white font-semibold text-sm tracking-tight uppercase">Admin Console</span>
</div>
<div className="space-y-1">
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-white bg-white/5 flex items-center gap-3" id="nav-overview" onclick="switchAdminTab('overview')">
<span className="iconify" data-icon="lucide:layout-dashboard"></span> Overview
                        </button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3" id="nav-users" onclick="switchAdminTab('users')">
<span className="iconify" data-icon="lucide:users"></span> Users &amp; Roles
                        </button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3" id="nav-licenses" onclick="switchAdminTab('licenses')">
<span className="iconify" data-icon="lucide:key"></span> License Manager
                        </button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3" id="nav-api" onclick="switchAdminTab('api')">
<span className="iconify" data-icon="lucide:code-2"></span> API Controls
                        </button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3" id="nav-settings" onclick="switchAdminTab('settings')">
<span className="iconify" data-icon="lucide:settings"></span> System Settings
                        </button>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">JT</div>
<div>
<div className="text-xs font-medium text-white">Jonah Tulmau</div>
<div className="text-[10px] text-indigo-400">Super Admin</div>
</div>
</div>
<button className="w-full text-left px-2 py-1 text-xs text-slate-500 hover:text-white transition-colors" onclick="switchView('landing-view'); document.getElementById('main-nav').classList.remove('hidden');">Log Out</button>
</div>
</aside>

<div className="flex-1 overflow-y-auto bg-slate-950 p-8">

<div className="admin-tab block space-y-8" id="tab-overview">
<header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-white">System Overview</h1>
<p className="text-slate-400 text-sm">Real-time infrastructure metrics.</p>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                Server IP: 45.76.221.19
                            </div>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Revenue (MRR)</div>
<div className="text-2xl font-semibold text-white mt-1">$42,850</div>
</div>
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<span className="iconify" data-icon="lucide:trending-up"></span>
</div>
</div>
<div className="text-xs text-emerald-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
                                +12.5% from last month
                            </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Licenses</div>
<div className="text-2xl font-semibold text-white mt-1">143</div>
</div>
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<span className="iconify" data-icon="lucide:users"></span>
</div>
</div>
<div className="text-xs text-slate-400">
                                8 Pending Approvals
                            </div>
</div>
<div className="glass-panel p-6 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">API Requests</div>
<div className="text-2xl font-semibold text-white mt-1">1.2M</div>
</div>
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
<span className="iconify" data-icon="lucide:server"></span>
</div>
</div>
<div className="text-xs text-slate-400">
                                99.9% Uptime
                            </div>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Recent Activity Log</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-900/50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-6 py-3">Event</th>
<th className="px-6 py-3">User</th>
<th className="px-6 py-3">Time</th>
<th className="px-6 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="px-6 py-3 text-white">New License Issued</td>
<td className="px-6 py-3">Jonah Tulmau</td>
<td className="px-6 py-3">2 mins ago</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Success</span></td>
</tr>
<tr>
<td className="px-6 py-3 text-white">API Key Revoked</td>
<td className="px-6 py-3">System Admin</td>
<td className="px-6 py-3">15 mins ago</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">Warning</span></td>
</tr>
<tr>
<td className="px-6 py-3 text-white">Login Attempt</td>
<td className="px-6 py-3">m.scott@paper.com</td>
<td className="px-6 py-3">1 hour ago</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 rounded text-[10px] bg-slate-500/10 text-slate-400 border border-slate-500/20">Logged</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="admin-tab hidden space-y-8" id="tab-users">
<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-semibold text-white">User Management</h1>
<p className="text-slate-400 text-sm">Control access and permissions.</p>
</div>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus"></span> Add User
                        </button>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-900/50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-6 py-3">User</th>
<th className="px-6 py-3">Role</th>
<th className="px-6 py-3">Last Active</th>
<th className="px-6 py-3">Access</th>
<th className="px-6 py-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">JD</div>
<div>
<div className="text-white font-medium">John Doe</div>
<div className="text-xs text-slate-500">john@venture.com</div>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Admin</span></td>
<td className="px-6 py-4">Oct 24, 2024</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-slate-600 peer-checked:bg-emerald-500"></div>
</label>
</td>
<td className="px-6 py-4">
<button className="text-slate-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:more-vertical"></span></button>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs">AS</div>
<div>
<div className="text-white font-medium">Alice Smith</div>
<div className="text-xs text-slate-500">alice@broker.io</div>
</div>
</div>
</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">Viewer</span></td>
<td className="px-6 py-4">Oct 22, 2024</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" type="checkbox"/>
<div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-slate-600 peer-checked:bg-emerald-500"></div>
</label>
</td>
<td className="px-6 py-4">
<button className="text-slate-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:more-vertical"></span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="admin-tab hidden space-y-8" id="tab-licenses">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white">License Manager</h1>
<p className="text-slate-400 text-sm">Issue and revoke software licenses.</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="glass-panel p-6 rounded-xl h-fit">
<h3 className="text-white font-medium mb-4 flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:plus-circle"></span> Issue New License
                            </h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Client Name</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500" placeholder="Acme Corp" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Plan Type</label>
<select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500">
<option>Starter</option>
<option>Professional</option>
<option>Enterprise</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Duration</label>
<select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500">
<option>1 Month</option>
<option>1 Year</option>
<option>Lifetime</option>
</select>
</div>
<button className="w-full bg-white text-slate-950 hover:bg-slate-200 font-medium py-2 rounded-lg text-sm transition-colors mt-2">Generate License Key</button>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden lg:col-span-2">
<div className="px-6 py-4 border-b border-white/5">
<h3 className="text-sm font-medium text-white">Active Licenses</h3>
</div>
<div className="p-0">
<div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:building" data-width="20"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Horizon Partners</div>
<div className="text-xs text-slate-500 font-mono">LIC-8839-XKLS-9921</div>
</div>
</div>
<div className="text-right">
<div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20 inline-block mb-1">Active</div>
<div className="text-[10px] text-slate-500">Exp: Dec 2025</div>
</div>
</div>
<div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:building" data-width="20"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Eagle Eye Capital</div>
<div className="text-xs text-slate-500 font-mono">LIC-7721-MMAE-3310</div>
</div>
</div>
<div className="text-right">
<div className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20 inline-block mb-1">Expiring Soon</div>
<div className="text-[10px] text-slate-500">Exp: Nov 2024</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="admin-tab hidden space-y-8" id="tab-api">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white">API Management</h1>
<p className="text-slate-400 text-sm">Create and manage access tokens.</p>
</header>
<div className="glass-panel p-6 rounded-xl mb-8">
<h3 className="text-white font-medium mb-4">Create New Secret Key</h3>
<div className="flex gap-4">
<input className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-500" disabled="" type="text" value="ak_live_..."/>
<button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors">Create Key</button>
</div>
<p className="text-xs text-slate-500 mt-2">This key will grant full access to the Arkaven Engine. Keep it secure.</p>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-slate-900/50 text-xs uppercase font-medium text-slate-500">
<tr>
<th className="px-6 py-3">Name</th>
<th className="px-6 py-3">Token Hint</th>
<th className="px-6 py-3">Created</th>
<th className="px-6 py-3">Last Used</th>
<th className="px-6 py-3">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="px-6 py-4 text-white font-medium">Production Server 1</td>
<td className="px-6 py-4 font-mono text-xs">ak_live_...9f2a</td>
<td className="px-6 py-4">Oct 12, 2024</td>
<td className="px-6 py-4">Just now</td>
<td className="px-6 py-4"><button className="text-red-400 hover:text-red-300 text-xs">Revoke</button></td>
</tr>
<tr>
<td className="px-6 py-4 text-white font-medium">Staging Environment</td>
<td className="px-6 py-4 font-mono text-xs">ak_test_...b22c</td>
<td className="px-6 py-4">Sep 20, 2024</td>
<td className="px-6 py-4">Yesterday</td>
<td className="px-6 py-4"><button className="text-red-400 hover:text-red-300 text-xs">Revoke</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="admin-tab hidden space-y-8" id="tab-settings">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-white">System Settings</h1>
<p className="text-slate-400 text-sm">Global configurations.</p>
</header>
<div className="glass-panel p-8 rounded-xl flex items-center justify-center h-64 text-slate-500 flex-col gap-2">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="32"></span>
<span>Configuration Panel</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
