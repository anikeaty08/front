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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function navigate(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            // Show target view
            document.getElementById(viewId).classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function toggleTab(tabId, contentId) {
            // Reset tabs styling
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-white', 'border-b-white');
                btn.classList.add('text-zinc-500', 'border-b-transparent');
            });
            // Activate clicked tab
            const activeBtn = document.getElementById(tabId);
            activeBtn.classList.remove('text-zinc-500', 'border-b-transparent');
            activeBtn.classList.add('text-white', 'border-b-white');

            // Switch Content
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(contentId).classList.remove('hidden');
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
      





<div className="view-section relative" id="landing-view">

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-950 rounded-full"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">ORBIT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigate('auth-view')">Log in</button>
<button className="bg-white text-zinc-950 hover:bg-zinc-200 px-4 py-2 rounded-full text-xs font-semibold transition-all" onclick="navigate('auth-view')">Start for free</button>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 animate-fade-in">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300">Orbit 2.0 is now available</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 animate-slide-up leading-[1.1]">
                Scale your infrastructure <br/>
<span className="text-zinc-500">without the complexity.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.1s'}}>
                The all-in-one platform for modern engineering teams. Monitor, deploy, and scale your applications with enterprise-grade security and zero configuration.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
<button className="h-10 px-6 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2" onclick="navigate('auth-view')">
                    Get Started 
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 font-medium text-sm hover:bg-zinc-800 transition-all">
                    View Documentation
                </button>
</div>

<div className="mt-20 relative rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black overflow-hidden mx-auto max-w-5xl animate-slide-up" style={{animationDelay: '0.3s'}}>
<div className="h-8 border-b border-zinc-800 bg-zinc-900 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
</div>
<div className="aspect-video bg-zinc-950 p-8 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950"></div>

<div className="grid grid-cols-3 gap-6 w-full z-10 opacity-80">
<div className="h-40 rounded-lg border border-zinc-800 bg-zinc-900/40 backdrop-blur p-4">
<div className="h-2 w-20 bg-zinc-800 rounded mb-4"></div>
<div className="h-8 w-12 bg-zinc-700 rounded mb-8"></div>
<div className="h-24 w-full bg-gradient-to-t from-indigo-500/10 to-transparent rounded"></div>
</div>
<div className="h-40 rounded-lg border border-zinc-800 bg-zinc-900/40 backdrop-blur p-4 col-span-2">
<div className="flex justify-between mb-4">
<div className="h-2 w-32 bg-zinc-800 rounded"></div>
<div className="h-2 w-8 bg-zinc-800 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-zinc-800/50 rounded"></div>
<div className="h-2 w-3/4 bg-zinc-800/50 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-zinc-900">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-white" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Deployment</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Push to git and your site is live. Automatic SSL, global CDN, and edge caching included.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-white" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-zinc-400 leading-relaxed">SOC2 Type II compliant. Role-based access control, audit logs, and SSO support.</p>
</div>
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-white" icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deep insights into traffic, performance, and user behavior without compromising privacy.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
</div>
<span className="font-medium">© 2023 Orbit Inc.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-zinc-300" href="#">Privacy</a>
<a className="hover:text-zinc-300" href="#">Terms</a>
<a className="hover:text-zinc-300" href="#">Twitter</a>
</div>
</div>
</footer>
</div>



<div className="view-section hidden min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden" id="auth-view">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="w-full max-w-md p-8 rounded-2xl glass-panel relative z-10">
<div className="text-center mb-8">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
<div className="w-5 h-5 bg-zinc-950 rounded-full"></div>
</div>
<h2 className="text-xl font-medium text-white tracking-tight">Sign in to Orbit</h2>
<p className="text-sm text-zinc-500 mt-2">Welcome back. Please enter your details.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); navigate('app-view');">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Email address</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-700" type="email" value="demo@orbit.com"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Password</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-700" type="password" value="password"/>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center gap-2 cursor-pointer group">

<div className="relative w-4 h-4 border border-zinc-700 rounded bg-zinc-900/50 flex items-center justify-center transition-colors group-hover:border-zinc-500">
<input className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 select-none">Remember for 30 days</span>
</label>
<a className="text-xs text-white hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full bg-white text-zinc-950 font-semibold text-sm rounded-lg py-2.5 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5" type="submit">
                    Sign in
                </button>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-zinc-500">Don't have an account? <span className="text-white cursor-pointer hover:underline" onclick="navigate('landing-view')">Sign up</span></p>
</div>
</div>
</div>



<div className="view-section hidden min-h-screen flex bg-zinc-950 text-zinc-300" id="app-view">

<aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col fixed inset-y-0 left-0 z-40">
<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('landing-view')">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-zinc-950 rounded-full"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">ORBIT</span>
</div>
</div>
<div className="p-3 space-y-1 flex-1 overflow-y-auto">
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-3 py-2 mt-2">Platform</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group" id="nav-home" onclick="toggleTab('nav-home', 'dash-home')">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:home" width="16"></iconify-icon>
                    Home
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:bar-chart-2" width="16"></iconify-icon>
                    Analytics
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:layers" width="16"></iconify-icon>
                    Projects
                </button>
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-3 py-2 mt-4">Settings</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group" id="nav-settings" onclick="toggleTab('nav-settings', 'dash-settings')">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:settings" width="16"></iconify-icon>
                    General
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group" id="nav-billing" onclick="toggleTab('nav-billing', 'dash-billing')">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:credit-card" width="16"></iconify-icon>
                    Billing
                </button>
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-3 py-2 mt-4">Admin</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-white transition-colors group" id="nav-admin" onclick="toggleTab('nav-admin', 'dash-admin')">
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:users" width="16"></iconify-icon>
                    Users &amp; Roles
                </button>
</div>
<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/50 transition-colors cursor-pointer">
<img alt="User" className="w-8 h-8 rounded-full border border-zinc-700" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">Alex Designer</p>
<p className="text-[10px] text-zinc-500 truncate">alex@orbit.com</p>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:more-vertical" width="14"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 ml-64 min-h-screen relative">

<header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-30 px-8 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span>Orbit</span>
<iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-white">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-zinc-900 border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-600 w-64 transition-colors" placeholder="Search..." type="text"/>
</div>
<button className="relative text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
</div>
</header>

<div className="tab-content p-8 max-w-6xl mx-auto" id="dash-home">
<div className="mb-8 flex items-center justify-between">
<h1 className="text-xl font-medium text-white tracking-tight">Overview</h1>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">Last 30 days</span>
<button className="p-1.5 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-zinc-500">Total Revenue</p>
<iconify-icon className="text-zinc-600" icon="lucide:dollar-sign" width="14"></iconify-icon>
</div>
<p className="text-2xl font-medium text-white tracking-tight">$45,231.89</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-500">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
<span>+20.1% from last month</span>
</div>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-zinc-500">Active Users</p>
<iconify-icon className="text-zinc-600" icon="lucide:users" width="14"></iconify-icon>
</div>
<p className="text-2xl font-medium text-white tracking-tight">+2,350</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-500">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
<span>+180.1% from last month</span>
</div>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-zinc-500">Bounce Rate</p>
<iconify-icon className="text-zinc-600" icon="lucide:activity" width="14"></iconify-icon>
</div>
<p className="text-2xl font-medium text-white tracking-tight">12.5%</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-rose-500">
<iconify-icon icon="lucide:arrow-down-right" width="10"></iconify-icon>
<span>-4.5% from last month</span>
</div>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-zinc-500">Active Sessions</p>
<iconify-icon className="text-zinc-600" icon="lucide:monitor" width="14"></iconify-icon>
</div>
<p className="text-2xl font-medium text-white tracking-tight">573</p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-500">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
<span>+10% since last hour</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
<div className="lg:col-span-2 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20">
<h3 className="text-sm font-medium text-white mb-6">Revenue Trajectory</h3>
<div className="h-64 flex items-end justify-between gap-2">

<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '40%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$4k</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '65%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$6.5k</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '50%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$5k</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '75%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$7.5k</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '60%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$6k</div></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm relative group hover:bg-indigo-500 transition-colors" style={{height: '90%', boxShadow: '0 0 20px rgba(99,102,241,0.2)'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-100">$9k</div></div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group hover:bg-zinc-800/50 transition-colors" style={{height: '45%'}}><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">$4.5k</div></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-zinc-500 uppercase font-medium">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20">
<h3 className="text-sm font-medium text-white mb-4">Recent Activity</h3>
<div className="space-y-6">
<div className="flex gap-3 relative">
<div className="absolute top-0 left-2.5 h-full w-px bg-zinc-800 -z-10"></div>
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div>
<p className="text-xs text-zinc-300">New subscriber: <span className="text-white font-medium">Acme Corp</span></p>
<p className="text-[10px] text-zinc-500 mt-0.5">2 minutes ago</p>
</div>
</div>
<div className="flex gap-3 relative">
<div className="absolute top-0 left-2.5 h-full w-px bg-zinc-800 -z-10"></div>
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
</div>
<div>
<p className="text-xs text-zinc-300">Deployment <span className="text-white font-medium">v2.4.0</span> completed</p>
<p className="text-[10px] text-zinc-500 mt-0.5">1 hour ago</p>
</div>
</div>
<div className="flex gap-3 relative">
<div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
</div>
<div>
<p className="text-xs text-zinc-300">Alert: <span className="text-white font-medium">High latency</span> in US-East</p>
<p className="text-[10px] text-zinc-500 mt-0.5">3 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden p-8 max-w-4xl mx-auto" id="dash-settings">
<div className="mb-8">
<h1 className="text-xl font-medium text-white tracking-tight">Settings</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your account preferences and workspace.</p>
</div>

<div className="flex gap-6 border-b border-zinc-800 mb-8">
<button className="tab-btn pb-3 text-sm font-medium text-white border-b border-white transition-colors" id="set-tab-general">General</button>
<button className="tab-btn pb-3 text-sm font-medium text-zinc-500 border-b border-transparent hover:text-white transition-colors" id="set-tab-team">Team</button>
<button className="tab-btn pb-3 text-sm font-medium text-zinc-500 border-b border-transparent hover:text-white transition-colors" id="set-tab-api">API Keys</button>
</div>
<div className="space-y-8">

<section className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/10">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-sm font-medium text-white">Profile Information</h3>
<p className="text-xs text-zinc-500 mt-1">Update your photo and personal details.</p>
</div>
<button className="text-xs bg-white text-zinc-950 px-3 py-1.5 rounded-md font-medium hover:bg-zinc-200 transition-colors">Save</button>
</div>
<div className="grid gap-6 max-w-xl">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700">
<img alt="Avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<button className="text-xs border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded hover:bg-zinc-800 transition-colors">Change avatar</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">First name</label>
<input className="w-full bg-transparent border border-zinc-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text" value="Alex"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Last name</label>
<input className="w-full bg-transparent border border-zinc-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text" value="Designer"/>
</div>
</div>
</div>
</section>

<section className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/10">
<h3 className="text-sm font-medium text-white mb-6">Notifications</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-zinc-300">Email Digest</p>
<p className="text-xs text-zinc-500">Receive a weekly summary of your analytics.</p>
</div>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<hr className="border-zinc-800"/>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-zinc-300">Deployment Alerts</p>
<p className="text-xs text-zinc-500">Get notified when a build fails or succeeds.</p>
</div>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300 ease-in-out right-0 border-white" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-indigo-600 cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>
</div>
</section>
</div>
</div>

<div className="tab-content hidden p-8 max-w-4xl mx-auto" id="dash-billing">
<div className="mb-8">
<h1 className="text-xl font-medium text-white tracking-tight">Billing</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your plan and payment details.</p>
</div>
<div className="grid grid-cols-3 gap-6 mb-8">

<div className="col-span-2 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Current Plan</p>
<h2 className="text-2xl font-bold text-white">Pro Plan</h2>
</div>
<span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-medium border border-indigo-500/20">Active</span>
</div>
<p className="text-sm text-zinc-400 mb-6 w-3/4">You are on the Pro plan with 100GB storage and unlimited members.</p>
<div className="w-full bg-zinc-800 rounded-full h-1.5 mb-2">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-6">
<span>75GB used</span>
<span>100GB total</span>
</div>
<div className="flex gap-3">
<button className="text-xs bg-white text-zinc-950 px-3 py-2 rounded-md font-medium hover:bg-zinc-200 transition-colors">Manage Subscription</button>
<button className="text-xs text-white px-3 py-2 rounded-md font-medium hover:bg-zinc-800 transition-colors">Upgrade Plan</button>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col justify-between">
<div>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Payment Method</p>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-5 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center">
<div className="w-4 h-4 bg-zinc-500 rounded-full"></div>
</div>
<span className="text-sm text-white font-medium">•••• 4242</span>
</div>
<p className="text-xs text-zinc-500">Expires 12/24</p>
</div>
<button className="text-xs text-zinc-400 hover:text-white border border-zinc-800 rounded px-3 py-1.5 w-max mt-4 transition-colors">Update</button>
</div>
</div>

<div className="border border-zinc-800 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/10">
<h3 className="text-sm font-medium text-white">Invoices</h3>
</div>
<table className="w-full text-left text-sm text-zinc-400">
<thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
<tr>
<th className="px-6 py-3 font-medium">Invoice</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-6 py-3 font-medium text-white">INV-2023-001</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Paid</span></td>
<td className="px-6 py-3">$29.00</td>
<td className="px-6 py-3">Oct 1, 2023</td>
<td className="px-6 py-3 text-right">
<button className="text-zinc-500 hover:text-white"><iconify-icon icon="lucide:download" width="14"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-zinc-900/30 transition-colors group">
<td className="px-6 py-3 font-medium text-white">INV-2023-002</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Paid</span></td>
<td className="px-6 py-3">$29.00</td>
<td className="px-6 py-3">Sep 1, 2023</td>
<td className="px-6 py-3 text-right">
<button className="text-zinc-500 hover:text-white"><iconify-icon icon="lucide:download" width="14"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden p-8 max-w-6xl mx-auto" id="dash-admin">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-xl font-medium text-white tracking-tight">User Management</h1>
<p className="text-sm text-zinc-500 mt-1">Manage access and roles for your team members.</p>
</div>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-md text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
                        Invite User
                    </button>
</div>
<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/10">

<div className="p-4 border-b border-zinc-800 flex items-center justify-between gap-4">
<div className="relative flex-1 max-w-xs">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-700" placeholder="Filter users..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-800 rounded-md hover:bg-zinc-800 bg-zinc-900">Export</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-800 rounded-md hover:bg-zinc-800 bg-zinc-900">Filter</button>
</div>
</div>
<table className="w-full text-left text-sm text-zinc-400">
<thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
<tr>
<th className="w-10 px-4 py-3"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0" type="checkbox"/></th>
<th className="px-4 py-3 font-medium">User</th>
<th className="px-4 py-3 font-medium">Role</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium">Last Active</th>
<th className="px-4 py-3 font-medium text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">

<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-4 py-3"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-xs font-bold">AD</div>
<div>
<div className="text-white font-medium text-sm">Alex Designer</div>
<div className="text-xs text-zinc-500">alex@orbit.com</div>
</div>
</div>
</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-300">Admin</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Active</span></td>
<td className="px-4 py-3 text-xs">Just now</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-zinc-800 rounded transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-4 py-3"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 text-xs font-bold">JD</div>
<div>
<div className="text-white font-medium text-sm">John Developer</div>
<div className="text-xs text-zinc-500">john@orbit.com</div>
</div>
</div>
</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-300">Editor</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 text-zinc-400 text-xs"><div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div> Offline</span></td>
<td className="px-4 py-3 text-xs">2 days ago</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-zinc-800 rounded transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="hover:bg-zinc-900/30 transition-colors">
<td className="px-4 py-3"><input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0" type="checkbox"/></td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 text-xs font-bold">SM</div>
<div>
<div className="text-white font-medium text-sm">Sarah Manager</div>
<div className="text-xs text-zinc-500">sarah@orbit.com</div>
</div>
</div>
</td>
<td className="px-4 py-3"><span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-300">Viewer</span></td>
<td className="px-4 py-3"><span className="inline-flex items-center gap-1.5 text-zinc-400 text-xs"><div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div> Offline</span></td>
<td className="px-4 py-3 text-xs">1 week ago</td>
<td className="px-4 py-3 text-right">
<button className="p-1 hover:bg-zinc-800 rounded transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

    </>
  );
}
