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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.4s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(4px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // DOM Elements
        const loginScreen = document.getElementById('login-screen');
        const dashboardScreen = document.getElementById('dashboard-screen');
        const navUser = document.getElementById('nav-user');
        
        const btnLogin = document.getElementById('btn-tab-login');
        const btnSignup = document.getElementById('btn-tab-signup');
        const nameField = document.getElementById('name-field');
        const submitBtn = document.getElementById('submit-btn');
        
        const targetUrl = document.getElementById('target-url');
        const generateBtn = document.getElementById('generate-btn');
        const resultBox = document.getElementById('result-box');
        const logsContainer = document.getElementById('logs-container');
        const emptyState = document.getElementById('empty-state');

        // Toggle Login/Signup
        function toggleAuth(mode) {
            if (mode === 'login') {
                btnLogin.className = "py-1.5 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all";
                btnSignup.className = "py-1.5 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all";
                nameField.classList.add('hidden');
                submitBtn.querySelector('span').innerText = "Authenticate";
            } else {
                btnSignup.className = "py-1.5 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all";
                btnLogin.className = "py-1.5 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all";
                nameField.classList.remove('hidden');
                submitBtn.querySelector('span').innerText = "Create Account";
            }
        }

        // Handle Login Action
        function handleLogin() {
            // UI Feedback
            const btnText = submitBtn.querySelector('span');
            const btnIcon = submitBtn.querySelector('.iconify');
            const originalText = btnText.innerText;
            
            btnText.innerText = "Processing...";
            if(btnIcon) btnIcon.classList.add('hidden');
            
            // Create loader
            const loader = document.createElement('span');
            loader.className = 'loader mr-2';
            loader.style.width = '12px';
            loader.style.height = '12px';
            submitBtn.prepend(loader);
            submitBtn.disabled = true;

            // Simulate Delay
            setTimeout(() => {
                loginScreen.classList.add('hidden');
                dashboardScreen.classList.remove('hidden');
                navUser.classList.remove('hidden');
                navUser.classList.add('flex');
            }, 1200);
        }

        // Mock Data for "Trace"
        const mockIPs = ["192.168.0.1", "45.22.19.11", "104.22.18.9", "201.11.90.88"];
        const mockCities = ["San Francisco, US", "Berlin, DE", "London, UK", "Toronto, CA"];
        const mockDevices = ["iPhone 13 Pro", "Windows 11 Chrome", "MacOS Safari", "Android Pixel 6"];

        // Handle Trace Generation
        function generateTrace() {
            // Validation
            if (!targetUrl.value) {
                targetUrl.classList.add('border-red-500');
                setTimeout(() => targetUrl.classList.remove('border-red-500'), 1500);
                return;
            }

            // Button Loading
            const originalBtnContent = generateBtn.innerHTML;
            generateBtn.innerHTML = '<span class="loader"></span>';
            generateBtn.disabled = true;

            setTimeout(() => {
                // Reset Button
                generateBtn.innerHTML = originalBtnContent;
                generateBtn.disabled = false;

                // Show Result Box
                resultBox.classList.remove('hidden');

                // Add Log Entry
                addLogEntry(targetUrl.value);

            }, 800);
        }

        function addLogEntry(url) {
            // Remove empty state if visible
            if (emptyState) {
                emptyState.style.display = 'none';
            }

            const ip = mockIPs[Math.floor(Math.random() * mockIPs.length)];
            const city = mockCities[Math.floor(Math.random() * mockCities.length)];
            const device = mockDevices[Math.floor(Math.random() * mockDevices.length)];
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

            const row = document.createElement('div');
            row.className = "grid grid-cols-12 gap-2 px-4 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center animate-fade-in";
            row.innerHTML = `
                <div class="col-span-5 flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <div class="overflow-hidden">
                        <p class="text-xs text-zinc-200 font-mono truncate">${ip}</p>
                        <p class="text-[10px] text-zinc-500 truncate w-32">${url}</p>
                    </div>
                </div>
                <div class="col-span-4">
                    <p class="text-xs text-zinc-300 truncate">${city}</p>
                    <p class="text-[10px] text-zinc-600 truncate">${device}</p>
                </div>
                <div class="col-span-3 text-right">
                    <span class="text-[10px] text-zinc-500 font-mono">${time}</span>
                </div>
            `;

            // Insert at top
            logsContainer.insertBefore(row, logsContainer.firstChild);
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
      

<nav className="w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<span className="iconify" data-icon="lucide:radar" data-strokeWidth="2.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold text-zinc-100 tracking-tight">GeoTrace</span>
</div>

<div className="hidden items-center gap-3" id="nav-user">
<div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Connected
                </div>
<div className="h-6 w-px bg-white/10"></div>
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] text-zinc-300 font-medium">
                    JD
                </div>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col relative z-10 p-4 md:p-6 lg:p-10 max-w-6xl mx-auto w-full">

<div className="flex flex-col items-center justify-center min-h-[60vh] w-full animate-fade-in" id="login-screen">
<div className="text-center mb-6">
<h1 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-2">Access Terminal</h1>
<p className="text-zinc-500 text-sm">Enter your credentials to continue.</p>
</div>
<div className="glass-panel w-full max-w-[380px] rounded-xl p-6">

<div className="grid grid-cols-2 gap-1 p-1 bg-zinc-900/50 rounded-lg mb-6 border border-white/5">
<button className="py-1.5 text-xs font-medium rounded text-zinc-100 bg-zinc-800 shadow-sm transition-all" id="btn-tab-login" onclick="toggleAuth('login')">Login</button>
<button className="py-1.5 text-xs font-medium rounded text-zinc-500 hover:text-zinc-300 transition-all" id="btn-tab-signup" onclick="toggleAuth('signup')">Register</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); handleLogin();">
<div className="hidden space-y-1.5 animate-fade-in" id="name-field">
<label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Full Name</label>
<input className="input-field w-full rounded-md py-2 px-3 text-sm text-zinc-200" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Email</label>
<input className="input-field w-full rounded-md py-2 px-3 text-sm text-zinc-200" placeholder="admin@geotrace.ai" type="email" value="admin@geotrace.ai"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wide">Password</label>
<input className="input-field w-full rounded-md py-2 px-3 text-sm text-zinc-200" placeholder="••••••••" type="password" value="password"/>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-zinc-950 text-sm font-medium py-2 rounded-md transition-colors mt-2 flex items-center justify-center gap-2" id="submit-btn" type="submit">
<span>Authenticate</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</form>
</div>
</div>

<div className="hidden w-full animate-fade-in" id="dashboard-screen">
<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="glass-panel rounded-xl p-6 relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<h3 className="text-zinc-100 font-medium text-sm flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:link-2" data-width="16"></span>
                                Smart Link Generator
                            </h3>
<span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/80 px-2 py-1 rounded border border-white/5">V3.1 Secure</span>
</div>
<div className="flex gap-2">
<div className="relative flex-grow">
<span className="absolute left-3 top-2.5 text-zinc-600 iconify" data-icon="lucide:globe" data-width="14"></span>
<input className="input-field w-full rounded-md py-2 pl-9 pr-4 text-sm font-mono text-zinc-200 placeholder-zinc-700 h-9" id="target-url" placeholder="https://target-site.com" type="text"/>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs px-4 rounded-md shadow-lg shadow-indigo-900/20 transition-all flex items-center gap-2 h-9 min-w-[100px] justify-center" id="generate-btn" onclick="generateTrace()">
                                Trace
                            </button>
</div>

<div className="hidden mt-4 pt-4 border-t border-white/5 animate-fade-in" id="result-box">
<div className="flex items-center justify-between bg-zinc-950/50 border border-indigo-500/20 rounded-md p-3">
<div>
<p className="text-[10px] text-zinc-500 uppercase">Tracking URL Active</p>
<p className="text-sm text-indigo-400 font-mono tracking-tight">geotrace.ai/t/8xK9m2</p>
</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden flex flex-col h-[400px]">
<div className="p-3 border-b border-white/5 flex items-center justify-between bg-zinc-900/30">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300">Live Interceptions</span>
</div>
<button className="p-1 hover:bg-white/5 rounded text-zinc-500 hover:text-zinc-300 transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
</button>
</div>
<div className="grid grid-cols-12 gap-2 px-4 py-2 bg-zinc-950/30 border-b border-white/5 text-[10px] font-medium text-zinc-500 uppercase tracking-wide">
<div className="col-span-5">Target IP / Source</div>
<div className="col-span-4">Geolocation</div>
<div className="col-span-3 text-right">Timestamp</div>
</div>
<div className="overflow-y-auto custom-scroll p-0 flex-grow relative" id="logs-container">

<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600" id="empty-state">
<span className="iconify mb-2 opacity-30" data-icon="lucide:activity" data-width="32"></span>
<p className="text-xs">Waiting for target engagement...</p>
</div>

</div>
</div>
</div>

<div className="lg:col-span-1 space-y-4">

<div className="glass-panel p-5 rounded-xl">
<h4 className="text-xs font-medium text-zinc-400 mb-4">Network Status</h4>
<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>API Latency</span>
<span className="text-emerald-400">24ms</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1">
<span>Daily Quota</span>
<span className="text-indigo-400">84%</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[84%]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-1 rounded-xl h-48 relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900 opacity-50"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.2'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-indigo-500/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-500">
<span className="iconify" data-icon="lucide:crosshair" data-width="20"></span>
</div>
<div className="absolute bottom-3 left-3">
<p className="text-[10px] text-zinc-400 font-mono">SCANNING_GLOBAL_NODES</p>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="14"></span>
</div>
<div>
<p className="text-xs text-zinc-200">2 Alerts Detected</p>
<p className="text-[10px] text-zinc-500">Proxy detected on recent hit</p>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
