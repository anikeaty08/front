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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // --- AUTHENTICATION & STATE MANAGEMENT ---
        
        // Mock Database of Users (Mobile -> Password)
        const userDatabase = {};
        let currentUser = null; // null or mobile number string
        let pendingLinkCreation = false; // flag to auto-generate link after login

        function openAuthModal(mode = 'login') {
            const modal = document.getElementById('auth-modal');
            modal.classList.remove('hidden');
            switchAuthMode(mode);
        }

        function closeAuthModal() {
            document.getElementById('auth-modal').classList.add('hidden');
            // Reset forms
            document.getElementById('login-form').querySelector('form').reset();
            document.getElementById('signup-form').querySelector('form').reset();
            document.getElementById('login-error').classList.add('hidden');
        }

        function switchAuthMode(mode) {
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            
            if (mode === 'login') {
                loginForm.classList.remove('hidden');
                signupForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
            }
        }

        function handleSignup(e) {
            e.preventDefault();
            const mobile = document.getElementById('signup-mobile').value;
            const pass = document.getElementById('signup-pass').value;

            if (mobile && pass) {
                // "Save" user to mock DB
                userDatabase[mobile] = pass;
                // Auto Login
                currentUser = mobile;
                authSuccess();
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const mobile = document.getElementById('login-mobile').value;
            const pass = document.getElementById('login-pass').value;
            const errorMsg = document.getElementById('login-error');

            if (userDatabase[mobile] && userDatabase[mobile] === pass) {
                currentUser = mobile;
                authSuccess();
            } else {
                errorMsg.classList.remove('hidden');
                // Shake animation effect
                const form = e.target;
                form.classList.add('animate-pulse');
                setTimeout(() => form.classList.remove('animate-pulse'), 500);
            }
        }

        function authSuccess() {
            closeAuthModal();
            updateUIForLoggedInUser();
            
            if (pendingLinkCreation) {
                generateLinkAction(); // Continue the interrupted action
            } else {
                // Just go to dashboard empty state if they logged in manually
                toggleView(true);
            }
        }

        function logout() {
            currentUser = null;
            pendingLinkCreation = false;
            
            // Reset UI
            document.getElementById('nav-actions').classList.remove('hidden');
            document.getElementById('user-profile').classList.add('hidden');
            document.getElementById('user-profile').classList.remove('flex');
            
            // Go back to landing
            toggleView(false);
        }

        function updateUIForLoggedInUser() {
            document.getElementById('nav-actions').classList.add('hidden');
            const profile = document.getElementById('user-profile');
            profile.classList.remove('hidden');
            profile.classList.add('flex');
            document.getElementById('profile-mobile').textContent = currentUser;
            document.getElementById('dashboard-user-id').textContent = currentUser;
        }


        // --- VIEW CONTROLLER ---

        function toggleView(showDashboard) {
            const landing = document.getElementById('landing-view');
            const dashboard = document.getElementById('dashboard-view');

            if (showDashboard) {
                landing.classList.add('hidden');
                dashboard.classList.remove('hidden');
            } else {
                landing.classList.remove('hidden');
                dashboard.classList.add('hidden');
            }
        }

        function resetView() {
           // If logged in, reload stays logged in concept, but for this demo simple reload
           window.location.reload();
        }


        // --- CORE FUNCTIONALITY ---

        function initiateLinkCreation(e) {
            e.preventDefault();
            
            // Check Auth First
            if (!currentUser) {
                pendingLinkCreation = true;
                openAuthModal('signup'); // Prompt signup first for new users
                return;
            }

            generateLinkAction();
        }

        async function generateLinkAction() {
            const urlInput = document.getElementById('url-input');
            const landingView = document.getElementById('landing-view');
            
            // Show Dashboard
            toggleView(true);

            // Generate Fake Link ID
            const randomId = Math.random().toString(36).substring(7);
            document.getElementById('generated-link').textContent = `tr.ce/${randomId}`;

            // Trigger data simulation
            await simulateTracking();
        }

        async function simulateTracking() {
            const scanningUI = document.getElementById('scanning-ui');
            const dataDisplay = document.getElementById('location-data-display');
            
            // Reset dashboard state
            scanningUI.classList.remove('hidden');
            dataDisplay.classList.add('hidden');

            try {
                // Fetch public IP data (Free API for demo purposes)
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                setTimeout(() => {
                    scanningUI.classList.add('hidden');
                    dataDisplay.classList.remove('hidden');
                    updateDashboard(data);
                }, 2000); // 2s delay for dramatic effect

            } catch (error) {
                // Fallback
                console.log("API Fetch failed, using dummy data");
                setTimeout(() => {
                    scanningUI.classList.add('hidden');
                    dataDisplay.classList.remove('hidden');
                    updateDashboard({
                        ip: "203.0.113.45",
                        city: "Mumbai",
                        region: "Maharashtra",
                        country_name: "India",
                        latitude: 19.0760,
                        longitude: 72.8777,
                        org: "Jio Infocomm Ltd"
                    });
                }, 2000);
            }
        }

        function updateDashboard(data) {
            document.getElementById('disp-city').textContent = data.city || 'Unknown';
            document.getElementById('disp-country').textContent = data.country_name || 'Unknown';
            document.getElementById('disp-ip').textContent = data.ip || 'Unknown';
            document.getElementById('disp-coords').textContent = `${data.latitude?.toFixed(4)}°, ${data.longitude?.toFixed(4)}°`;
            document.getElementById('meta-isp').textContent = data.org || data.asn || 'ISP Detected';
            
            // Device detection
            const ua = navigator.userAgent;
            let os = "Windows";
            if (ua.indexOf("Mac") != -1) os = "MacOS";
            if (ua.indexOf("Android") != -1) os = "Android";
            if (ua.indexOf("iPhone") != -1) os = "iOS";
            document.getElementById('meta-os').textContent = os;

            // Add Table Row
            const tbody = document.getElementById('activity-log');
            const date = new Date().toLocaleTimeString();
            const row = `
                <tr class="animate-pulse-slow bg-indigo-500/5 transition-all duration-500">
                    <td class="px-6 py-4"><span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Success</span></td>
                    <td class="px-6 py-4 font-mono text-slate-300">${data.ip}</td>
                    <td class="px-6 py-4 text-white">${data.city}, ${data.country_code || 'IN'}</td>
                    <td class="px-6 py-4 text-slate-400">${os}</td>
                    <td class="px-6 py-4 text-slate-500">${date}</td>
                </tr>
            `;
            tbody.innerHTML = row + tbody.innerHTML;
        }

        // Initialize with one demo user for testing without signup
        userDatabase['9999999999'] = 'password';
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="resetView()">
<div className="w-8 h-8 bg-indigo-500/10 rounded-lg border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:radar" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">TRACE.AI</span>
</div>

<div className="flex items-center gap-4" id="nav-actions">
<button className="text-sm font-medium text-slate-400 hover:text-white transition-colors" onclick="openAuthModal('login')">Log in</button>
<button className="text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" onclick="openAuthModal('signup')">
                    Sign Up
                </button>
</div>

<div className="hidden items-center gap-4" id="user-profile">
<div className="text-xs text-right hidden sm:block">
<div className="text-white font-medium font-mono" id="profile-mobile"></div>
<div className="text-slate-500">Pro Plan</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 border border-white/10 flex items-center justify-center text-xs text-white font-bold cursor-pointer" onclick="logout()">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm hidden flex items-center justify-center p-4" id="auth-modal">
<div className="glass-panel w-full max-w-sm rounded-2xl p-8 relative shadow-2xl shadow-black/50 border border-slate-700/50">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors" onclick="closeAuthModal()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>

<div className="hidden" id="signup-form">
<div className="text-center mb-8">
<h2 className="text-xl font-medium text-white tracking-tight mb-2">Create Account</h2>
<p className="text-xs text-slate-400">Enter your mobile number to get started.</p>
</div>
<form className="space-y-4" onsubmit="handleSignup(event)">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1">Mobile Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
</div>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 placeholder-slate-600 font-mono tracking-wide" id="signup-mobile" placeholder="9876543210" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1">Set Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 placeholder-slate-600" id="signup-pass" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all mt-2" type="submit">Create Account</button>
</form>
<div className="mt-6 text-center text-xs text-slate-400">
                    Already have an account? <button className="text-indigo-400 hover:text-indigo-300 font-medium" onclick="switchAuthMode('login')">Log in</button>
</div>
</div>

<div id="login-form">
<div className="text-center mb-8">
<h2 className="text-xl font-medium text-white tracking-tight mb-2">Welcome Back</h2>
<p className="text-xs text-slate-400">Login to access your location data.</p>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div className="hidden text-xs text-red-400 bg-red-400/10 p-2 rounded border border-red-400/20 text-center" id="login-error">Invalid credentials</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1">Mobile Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
</div>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 placeholder-slate-600 font-mono tracking-wide" id="login-mobile" placeholder="9876543210" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 placeholder-slate-600" id="login-pass" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all mt-2" type="submit">Sign In</button>
</form>
<div className="mt-6 text-center text-xs text-slate-400">
                    Don't have an account? <button className="text-indigo-400 hover:text-indigo-300 font-medium" onclick="switchAuthMode('signup')">Sign Up</button>
</div>
</div>
</div>
</div>

<div className="flex-grow flex flex-col transition-opacity duration-500" id="landing-view">
<main className="relative pt-32 pb-20 flex-grow">
<div className="absolute inset-0 bg-grid mask-image-gradient pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-[100%] blur-[100px] -z-10 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    System Status: Operational
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                    Precision Location <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Intelligence API</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Track IP geolocation with pinpoint accuracy. Sign up to access real-time data streams.
                </p>

<div className="max-w-md mx-auto mb-16 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<form className="relative flex items-center bg-slate-900 border border-slate-700 rounded-lg p-1.5 shadow-2xl" onsubmit="initiateLinkCreation(event)">
<div className="pl-3 text-slate-500">
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none px-3 py-2" id="url-input" placeholder="Paste a URL to track (e.g., google.com)" required="" type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2.5 rounded-md transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 whitespace-nowrap" type="submit">
<span>Create Link</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</form>
<p className="text-xs text-slate-500 mt-3 text-center">Authentication required to view analytics.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto opacity-80">
<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><iconify-icon icon="lucide:globe" width="20"></iconify-icon></div>
<div className="text-left">
<div className="text-white text-sm font-medium">Global GPS</div>
<div className="text-xs text-slate-500">Lat/Long Precision</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><iconify-icon icon="lucide:smartphone" width="20"></iconify-icon></div>
<div className="text-left">
<div className="text-white text-sm font-medium">Device ID</div>
<div className="text-xs text-slate-500">OS &amp; Browser Data</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><iconify-icon icon="lucide:wifi" width="20"></iconify-icon></div>
<div className="text-left">
<div className="text-white text-sm font-medium">Network ISP</div>
<div className="text-xs text-slate-500">Carrier Detection</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="hidden flex-grow pt-24 pb-12 px-6" id="dashboard-view">
<div className="max-w-7xl mx-auto">

<div className="mb-8 p-4 rounded-lg bg-green-500/5 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-4 animate-pulse-slow" id="link-success">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-white text-sm font-medium">Tracking Link Active</h3>
<p className="text-slate-400 text-xs">Share this link. Data will appear below instantly.</p>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-950 border border-white/10 rounded px-3 py-1.5 w-full md:w-auto">
<span className="text-xs font-mono text-indigo-300" id="generated-link">tr.ce/x8j92k</span>
<button className="text-slate-500 hover:text-white ml-2"><iconify-icon icon="lucide:copy" width="12"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="glass-panel rounded-2xl h-[400px] relative overflow-hidden flex flex-col">
<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center grayscale invert opacity-10"></div>
<div className="absolute top-4 left-4 z-10">
<div className="px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-medium text-white backdrop-blur flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live Feed: <span className="font-mono text-slate-400" id="dashboard-user-id"></span>
</div>
</div>

<div className="relative z-10 m-auto text-center" id="scanning-ui">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 relative">
<div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping"></div>
<iconify-icon icon="lucide:radio" width="32"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-1">Waiting for clicks...</h3>
<p className="text-slate-500 text-xs">Listening on secure port</p>
</div>

<div className="hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent" id="location-data-display">
<div className="flex items-end justify-between">
<div>
<div className="text-xs text-indigo-400 mb-1 font-mono uppercase tracking-wider">Detected Location</div>
<div className="text-3xl font-medium text-white tracking-tight" id="disp-city">San Francisco</div>
<div className="text-sm text-slate-400 flex items-center gap-2 mt-1">
<span id="disp-country">United States</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span className="font-mono" id="disp-ip">192.168.1.1</span>
</div>
</div>
<div className="text-right hidden sm:block">
<div className="text-xs text-slate-500 mb-1">Coordinates</div>
<div className="text-sm font-mono text-white" id="disp-coords">37.7749° N, 122.4194° W</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Access Log</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">Export CSV</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-white/5 text-slate-400">
<tr>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">IP Address</th>
<th className="px-6 py-3 font-medium">Location</th>
<th className="px-6 py-3 font-medium">Device</th>
<th className="px-6 py-3 font-medium">Time</th>
</tr>
</thead>
<tbody className="text-slate-300 divide-y divide-white/5" id="activity-log">

</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-sm font-medium text-white mb-4">Target Device</h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-slate-500">OS</span>
<span className="text-xs text-white flex items-center gap-2">
<iconify-icon icon="lucide:monitor" width="12"></iconify-icon>
<span id="meta-os">Windows 11</span>
</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-slate-500">Browser</span>
<span className="text-xs text-white" id="meta-browser">Chrome 118</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-slate-500">ISP</span>
<span className="text-xs text-white" id="meta-isp">Comcast Cable</span>
</div>
<div className="flex justify-between items-center py-2">
<span className="text-xs text-slate-500">Connection</span>
<span className="text-xs text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Broadband
                                </span>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl bg-indigo-600/10 border-indigo-500/20">
<div className="flex items-start gap-3">
<div className="mt-1 text-indigo-400"><iconify-icon icon="lucide:shield-alert" width="16"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-indigo-200 mb-1">Threat Analysis</h4>
<p className="text-xs text-indigo-300/70 leading-relaxed">
                                    The detected IP shows no signs of VPN or Proxy usage. Confidence score: 98%.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
