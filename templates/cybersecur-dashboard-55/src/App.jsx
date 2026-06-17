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
background: '#050505',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#222222',
primary: '#06b6d4', // Cyan 500
primaryDim: 'rgba(6, 182, 212, 0.1)',
textMain: '#EDEDED',
textMuted: '#888888',
}
}
}
}



        // State
        let currentView = 'dashboard';

        // Login Handler
        function handleLogin(e) {
            e.preventDefault();
            const loginView = document.getElementById('login-view');
            const appShell = document.getElementById('app-shell');
            
            // Animation out
            loginView.style.opacity = '0';
            loginView.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                loginView.classList.add('hidden');
                appShell.classList.remove('hidden');
                appShell.classList.add('animate-fade-in');
            }, 500);
        }

        // Logout Handler
        function handleLogout() {
            const loginView = document.getElementById('login-view');
            const appShell = document.getElementById('app-shell');
            
            appShell.classList.add('hidden');
            loginView.classList.remove('hidden');
            loginView.style.opacity = '1';
            
            // Reset form
            document.getElementById('login-form').reset();
        }

        // Router
        function router(viewName) {
            // Update active link styling
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                // Reset to default
                item.className = 'nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group';
                
                // If matches current view (naive check)
                if(item.getAttribute('onclick').includes(viewName)) {
                    item.className = 'nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-surfaceHighlight text-white border border-border group transition-all';
                }
            });

            // Hide all views
            const views = document.querySelectorAll('.page-view');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show target view
            const target = document.getElementById('view-' + viewName);
            if(target) {
                target.classList.remove('hidden');
            }

            // Update Title
            const titles = {
                'dashboard': 'Security Overview',
                'email-scan': 'Email Analysis',
                'url-scan': 'URL Inspector',
                'alerts': 'Threat Management',
                'reports': 'System Reports',
                'settings': 'Configuration'
            };
            document.getElementById('page-title').innerText = titles[viewName] || 'PhishGuardAI';
        }

        // Email Tab Toggle
        function toggleEmailTab(tab) {
            const pasteArea = document.getElementById('email-paste-area');
            const uploadArea = document.getElementById('email-upload-area');
            const tabPaste = document.getElementById('tab-paste');
            const tabUpload = document.getElementById('tab-upload');

            if(tab === 'paste') {
                pasteArea.classList.remove('hidden');
                uploadArea.classList.add('hidden');
                tabPaste.className = 'pb-2 text-sm font-medium text-primary border-b-2 border-primary transition-colors';
                tabUpload.className = 'pb-2 text-sm font-medium text-textMuted hover:text-white transition-colors';
            } else {
                pasteArea.classList.add('hidden');
                uploadArea.classList.remove('hidden');
                tabUpload.className = 'pb-2 text-sm font-medium text-primary border-b-2 border-primary transition-colors';
                tabPaste.className = 'pb-2 text-sm font-medium text-textMuted hover:text-white transition-colors';
            }
        }

        // Simulation Logic
        function simulateScan(type) {
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = `<iconify-icon icon="solar:restart-linear" class="animate-spin text-lg"></iconify-icon> Scanning...`;
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                // Reset button
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');

                // Show results based on type
                if(type === 'email') {
                    const results = document.getElementById('email-results');
                    results.classList.remove('hidden');
                    results.classList.add('animate-fade-in');
                } else if(type === 'url') {
                    const results = document.getElementById('url-results');
                    results.classList.remove('hidden');
                    results.classList.add('animate-fade-in');
                }
            }, 1500);
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
      

<div className="fixed flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background z-50 top-0 right-0 bottom-0 left-0 items-center justify-center" id="login-view">
<div className="w-full max-w-md p-8 glass-panel rounded-xl shadow-2xl animate-fade-in">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primaryDim border border-cyan-900/30">
<iconify-icon className="text-primary text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-2">PhishGuardAI</h1>
<p className="text-textMuted text-xs font-light">AI-Powered Phishing Detection System</p>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div className="space-y-1">
<label className="text-xs text-textMuted ml-1">Email Address</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-textMuted group-focus-within:text-primary transition-colors">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="block w-full py-2.5 pl-10 pr-3 text-textMain bg-surfaceHighlight border border-border rounded-lg placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all sm:text-sm font-light" placeholder="name@company.com" required="" type="email" value="admin@phishguard.ai"/>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between ml-1">
<label className="text-xs text-textMuted">Password</label>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-textMuted group-focus-within:text-primary transition-colors">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<input className="block w-full py-2.5 pl-10 pr-3 text-textMain bg-surfaceHighlight border border-border rounded-lg placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all sm:text-sm font-light" placeholder="••••••••" required="" type="password" value="password"/>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center">
<input className="custom-checkbox" id="remember" type="checkbox"/>
<label className="ml-2 block text-xs text-textMuted" htmlFor="remember">Remember me</label>
</div>
<a className="text-xs text-primary hover:text-cyan-300 transition-colors" href="#">Forgot password?</a>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-primary hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all mt-6" type="submit">
                    Sign In to Console
                </button>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-textMuted">Protected by Enterprise Grade Encryption</p>
</div>
</div>
</div>

<div className="hidden flex h-screen bg-background text-textMain" id="app-shell">

<aside className="w-64 border-r border-border bg-surface hidden md:flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-border">
<div className="flex items-center gap-2">
<iconify-icon className="text-primary text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium tracking-tight text-white">PhishGuardAI</span>
</div>
</div>
<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
<p className="px-3 text-[10px] font-medium text-textMuted uppercase tracking-wider mb-2">Platform</p>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-surfaceHighlight text-white border border-border group transition-all" onclick="router('dashboard')">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:widget-2-linear"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group" onclick="router('email-scan')">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:letter-linear"></iconify-icon>
                    Email Scanner
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group" onclick="router('url-scan')">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:link-circle-linear"></iconify-icon>
                    URL Scanner
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group" onclick="router('alerts')">
<div className="relative">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-surface"></span>
</div>
                    Threat Alerts
                </button>
<p className="px-3 text-[10px] font-medium text-textMuted uppercase tracking-wider mb-2 mt-6">Management</p>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group" onclick="router('reports')">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:file-text-linear"></iconify-icon>
                    Reports &amp; History
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-light text-textMuted rounded-md hover:bg-surfaceHighlight hover:text-white transition-all group" onclick="router('settings')">
<iconify-icon className="text-lg group-hover:text-primary transition-colors" icon="solar:settings-linear"></iconify-icon>
                    Settings
                </button>
</nav>
<div className="p-4 border-t border-border">
<div className="flex items-center gap-3 p-2 rounded-lg bg-surfaceHighlight/50 border border-white/5">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-900 to-slate-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">JD</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">John Doe</p>
<p className="text-[10px] text-textMuted truncate">SecOps Analyst</p>
</div>
<button className="text-textMuted hover:text-white transition-colors" onclick="handleLogout()">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">

<header className="h-16 flex items-center justify-between px-8 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-textMuted hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h2 className="text-sm font-medium text-white tracking-tight" id="page-title">Security Overview</h2>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-500">System Protected</span>
</div>
<button className="text-textMuted hover:text-white relative">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>

<div className="page-view animate-fade-in space-y-6" id="view-dashboard">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-border bg-surface hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">+12% <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">24,592</div>
<div className="text-xs text-textMuted mt-1">Total Emails Scanned</div>
</div>
<div className="p-5 rounded-xl border border-border bg-surface hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-red-500/10 text-red-400">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-red-400 flex items-center gap-1">+5% <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1,204</div>
<div className="text-xs text-textMuted mt-1">Phishing Detected</div>
</div>
<div className="p-5 rounded-xl border border-border bg-surface hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-white tracking-tight">23,388</div>
<div className="text-xs text-textMuted mt-1">Legitimate Emails</div>
</div>
<div className="p-5 rounded-xl border border-border bg-surface hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-orange-400 tracking-tight">Low Risk</div>
<div className="text-xs text-textMuted mt-1">Current Threat Level</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-xl border border-border bg-surface">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Threat Analysis</h3>
<div className="flex gap-2">
<span className="flex items-center text-xs text-textMuted gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Legitimate</span>
<span className="flex items-center text-xs text-textMuted gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Phishing</span>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-2">
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '60%'}}></div>
<div className="absolute bottom-[60%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '10%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '75%'}}></div>
<div className="absolute bottom-[75%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '5%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '45%'}}></div>
<div className="absolute bottom-[45%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '35%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '80%'}}></div>
<div className="absolute bottom-[80%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '8%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '90%'}}></div>
<div className="absolute bottom-[90%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '2%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '55%'}}></div>
<div className="absolute bottom-[55%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '15%'}}></div>
</div>
<div className="w-full bg-surfaceHighlight rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-500" style={{height: '70%'}}></div>
<div className="absolute bottom-[70%] w-full bg-red-500/80 rounded-t-sm transition-all duration-500 hover:bg-red-500 border-b border-surface" style={{height: '5%'}}></div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-textMuted uppercase">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="col-span-1 p-6 rounded-xl border border-border bg-surface flex flex-col">
<h3 className="text-sm font-medium text-white mb-4">Recent Threats</h3>
<div className="flex-1 overflow-y-auto space-y-4">
<div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="solar:danger-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white font-medium">CEO Impersonation</p>
<p className="text-[10px] text-textMuted">Detected 2 mins ago • High Risk</p>
</div>
</div>
<div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
<iconify-icon icon="solar:link-broken-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white font-medium">Malicious URL</p>
<p className="text-[10px] text-textMuted">Detected 15 mins ago • Medium Risk</p>
</div>
</div>
<div className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="solar:file-corrupted-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white font-medium">Credential Harvesting</p>
<p className="text-[10px] text-textMuted">Detected 1 hr ago • High Risk</p>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 text-xs text-center border border-border rounded-lg text-textMuted hover:text-white hover:bg-surfaceHighlight transition-colors">View All Activity</button>
</div>
</div>
</div>

<div className="page-view hidden space-y-6 animate-fade-in" id="view-email-scan">
<div className="max-w-4xl mx-auto">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Email Scanner</h3>
<p className="text-xs text-textMuted">Analyze email content headers and body for malicious indicators.</p>
</div>
<div className="p-6 rounded-xl border border-border bg-surface">

<div className="flex space-x-4 mb-6 border-b border-border">
<button className="pb-2 text-sm font-medium text-primary border-b-2 border-primary transition-colors" id="tab-paste" onclick="toggleEmailTab('paste')">Paste Content</button>
<button className="pb-2 text-sm font-medium text-textMuted hover:text-white transition-colors" id="tab-upload" onclick="toggleEmailTab('upload')">Upload .EML</button>
</div>

<div id="email-paste-area">
<textarea className="w-full bg-surfaceHighlight border border-border rounded-lg p-4 text-sm font-mono text-textMain placeholder-gray-600 focus:outline-none focus:border-primary/50" id="email-content" placeholder="Paste email header and body here..." rows="10"></textarea>
</div>
<div className="hidden" id="email-upload-area">
<div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer bg-surfaceHighlight/30">
<iconify-icon className="text-4xl text-textMuted mb-2" icon="solar:upload-linear"></iconify-icon>
<p className="text-sm text-white font-medium">Click to upload or drag and drop</p>
<p className="text-xs text-textMuted mt-1">Supported formats: .eml, .msg</p>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="px-6 py-2.5 bg-primary text-black text-sm font-medium rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 flex items-center gap-2" onclick="simulateScan('email')">
<iconify-icon className="text-lg" icon="solar:scanner-linear"></iconify-icon>
                                    Analyze Email
                                </button>
</div>
</div>

<div className="hidden mt-6 p-6 rounded-xl border border-red-500/30 bg-red-950/10" id="email-results">
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Phishing Attempt Detected</h4>
<p className="text-xs text-red-400">High Confidence Level (92%)</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                        CRITICAL RISK
                                    </span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h5 className="text-xs font-medium text-textMuted uppercase tracking-wider mb-3">Indicators of Compromise</h5>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                                            Mismatched Sender Domain
                                        </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                                            Urgency Language Pattern
                                        </li>
<li className="flex items-center gap-2 text-sm text-white">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon>
                                            Suspicious Link Redirection
                                        </li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-textMuted uppercase tracking-wider mb-3">Technical Details</h5>
<div className="bg-surfaceHighlight p-3 rounded-lg border border-border">
<div className="flex justify-between text-xs mb-1">
<span className="text-textMuted">SPF Check:</span>
<span className="text-red-400">Fail</span>
</div>
<div className="flex justify-between text-xs mb-1">
<span className="text-textMuted">DKIM Signature:</span>
<span className="text-yellow-400">None</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-textMuted">DMARC Policy:</span>
<span className="text-textMain">Quarantine</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden space-y-6 animate-fade-in" id="view-url-scan">
<div className="max-w-4xl mx-auto">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">URL Inspector</h3>
<p className="text-xs text-textMuted">Real-time deep scanning of websites for phishing kits and malware.</p>
</div>
<div className="p-8 rounded-xl border border-border bg-surface flex flex-col items-center">
<div className="w-full max-w-2xl relative">
<input className="w-full py-4 pl-12 pr-4 bg-surfaceHighlight border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-inner" id="url-input" placeholder="https://example.com/login" type="text"/>
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-textMuted text-lg" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
<button className="mt-6 px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20" onclick="simulateScan('url')">
                                Scan URL
                            </button>
</div>

<div className="hidden mt-6 p-6 rounded-xl border border-emerald-500/30 bg-emerald-950/10" id="url-results">
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Safe to Browse</h4>
<p className="text-xs text-emerald-400">Domain is legitimate and SSL is valid.</p>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        LOW RISK
                                    </span>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="p-3 bg-surfaceHighlight border border-border rounded-lg text-center">
<p className="text-[10px] text-textMuted uppercase">Domain Age</p>
<p className="text-sm font-medium text-white mt-1">4 Years</p>
</div>
<div className="p-3 bg-surfaceHighlight border border-border rounded-lg text-center">
<p className="text-[10px] text-textMuted uppercase">SSL Issuer</p>
<p className="text-sm font-medium text-white mt-1">DigiCert Inc</p>
</div>
<div className="p-3 bg-surfaceHighlight border border-border rounded-lg text-center">
<p className="text-[10px] text-textMuted uppercase">Blacklist Status</p>
<p className="text-sm font-medium text-emerald-400 mt-1">Clean (0/45)</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden space-y-6 animate-fade-in" id="view-alerts">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white">Threat Alerts</h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-surfaceHighlight border border-border rounded-md hover:bg-white/5">Export CSV</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-primary/20 border border-primary/30 text-primary rounded-md">Mark All Read</button>
</div>
</div>
<div className="rounded-xl border border-border bg-surface overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="bg-surfaceHighlight border-b border-border">
<th className="px-6 py-3 text-xs font-medium text-textMuted uppercase tracking-wider">Severity</th>
<th className="px-6 py-3 text-xs font-medium text-textMuted uppercase tracking-wider">Threat Type</th>
<th className="px-6 py-3 text-xs font-medium text-textMuted uppercase tracking-wider">Source</th>
<th className="px-6 py-3 text-xs font-medium text-textMuted uppercase tracking-wider">Date</th>
<th className="px-6 py-3 text-xs font-medium text-textMuted uppercase tracking-wider">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">High</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-white">CEO Fraud Attempt</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">boss@company-update.com</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">Oct 24, 10:42 AM</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-primary hover:text-cyan-300">Review</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">Medium</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-white">Credential Phishing</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">support@m1crosoft-auth.net</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-textMuted">Oct 24, 09:15 AM</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="text-primary hover:text-cyan-300">Review</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="page-view hidden animate-fade-in" id="view-reports">
<div className="p-12 text-center border border-border border-dashed rounded-xl bg-surfaceHighlight/20">
<iconify-icon className="text-4xl text-textMuted mb-2" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-lg text-white">Report Generation</h3>
<p className="text-textMuted text-xs mt-1">PDF and CSV reports will be available here.</p>
</div>
</div>
<div className="page-view hidden animate-fade-in space-y-6" id="view-settings">
<h3 className="text-lg font-medium text-white mb-6">Settings</h3>
<div className="max-w-2xl space-y-6">
<div className="p-6 rounded-xl border border-border bg-surface">
<h4 className="text-sm font-medium text-white mb-4">Notification Preferences</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-white">Email Alerts</p>
<p className="text-xs text-textMuted">Receive immediate alerts for high-risk threats.</p>
</div>
<input checked="" className="custom-checkbox" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-white">Weekly Digest</p>
<p className="text-xs text-textMuted">Summary of all scanned activity.</p>
</div>
<input className="custom-checkbox" type="checkbox"/>
</div>
</div>
</div>
<div className="p-6 rounded-xl border border-border bg-surface">
<h4 className="text-sm font-medium text-white mb-4">API Configuration</h4>
<div className="space-y-2">
<label className="text-xs text-textMuted">API Key</label>
<div className="flex gap-2">
<input className="flex-1 bg-surfaceHighlight border border-border rounded-lg px-3 py-2 text-sm text-textMain focus:outline-none focus:border-primary/50" type="password" value="pk_live_51M..."/>
<button className="px-3 py-2 bg-surfaceHighlight border border-border rounded-lg text-white text-xs hover:bg-white/5">Regenerate</button>
</div>
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
