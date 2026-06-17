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



        // State
        let stream = null;
        let captureTimer = null;
        let countdownTimer = null;
        let totalCaptures = 0;
        const INTERVAL_SEC = 5;
        let secondsLeft = INTERVAL_SEC;
        let currentRole = 'admin';

        // Role Selection
        function selectRole(role) {
            currentRole = role;
            const adminBtn = document.getElementById('role-admin');
            const fieldBtn = document.getElementById('role-field');
            
            if (role === 'admin') {
                adminBtn.className = "flex-1 py-1.5 text-xs font-medium rounded-md transition-all shadow-sm bg-white text-zinc-900";
                fieldBtn.className = "flex-1 py-1.5 text-xs font-medium rounded-md transition-all text-zinc-500 hover:text-zinc-700";
                document.getElementById('role-badge').innerText = "Administrator";
            } else {
                fieldBtn.className = "flex-1 py-1.5 text-xs font-medium rounded-md transition-all shadow-sm bg-white text-zinc-900";
                adminBtn.className = "flex-1 py-1.5 text-xs font-medium rounded-md transition-all text-zinc-500 hover:text-zinc-700";
                document.getElementById('role-badge').innerText = "Field Unit";
            }
        }

        // Login Handler
        function handleLogin(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="20"></iconify-icon>`;
            btn.disabled = true;

            setTimeout(() => {
                const loginView = document.getElementById('login-view');
                const dashView = document.getElementById('dashboard-view');
                
                loginView.classList.add('opacity-0', 'pointer-events-none');
                
                setTimeout(() => {
                    loginView.style.display = 'none';
                    dashView.classList.remove('opacity-0', 'pointer-events-none');
                    addLog(`Session Started: ${currentRole.toUpperCase()}`);
                    addLog('Aura AI Engine: Connected');
                }, 500);
            }, 1000);
        }

        function logout() {
            stopSystem();
            window.location.reload();
        }

        // Modal Logic
        function openConsentModal() {
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');
            const content = document.getElementById('modal-content');

            backdrop.classList.remove('hidden');
            panel.classList.remove('hidden');
            
            // Trigger animation
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            });
        }

        function closeConsentModal() {
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');
            const content = document.getElementById('modal-content');

            backdrop.classList.add('opacity-0');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
                backdrop.classList.add('hidden');
                panel.classList.add('hidden');
            }, 300);
        }

        // System Core Logic
        async function activateSystem() {
            closeConsentModal();
            addLog('Initializing Optical Sensors...');
            addLog('Verifying Consent Token...', 'info');

            try {
                const video = document.getElementById('video-feed');
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                
                // UI Updates
                video.classList.remove('opacity-40');
                video.classList.add('opacity-100');
                document.getElementById('video-placeholder').classList.add('opacity-0');
                document.getElementById('scan-line').style.display = 'block';
                document.getElementById('rec-badge').classList.remove('hidden');
                document.getElementById('ai-badge').classList.remove('hidden');
                document.getElementById('btn-start').classList.add('hidden');
                document.getElementById('btn-stop').classList.remove('hidden');
                document.getElementById('status-text').innerText = "Aura Monitoring";
                document.getElementById('status-text').className = "text-sm text-indigo-600 font-medium";

                addLog('Stream Active. Aura AI Analysis Started.', 'success');
                startCaptureLoop();

            } catch (err) {
                console.error(err);
                addLog('Error: Camera Access Denied', 'error');
                alert("Could not access camera. Please allow permissions.");
            }
        }

        function stopSystem() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
            clearInterval(captureTimer);
            clearInterval(countdownTimer);
            
            // Reset UI
            const video = document.getElementById('video-feed');
            video.srcObject = null;
            video.classList.remove('opacity-100');
            video.classList.add('opacity-40');
            
            document.getElementById('video-placeholder').classList.remove('opacity-0');
            document.getElementById('scan-line').style.display = 'none';
            document.getElementById('rec-badge').classList.add('hidden');
            document.getElementById('ai-badge').classList.add('hidden');
            document.getElementById('btn-start').classList.remove('hidden');
            document.getElementById('btn-stop').classList.add('hidden');
            document.getElementById('status-text').innerText = "System Terminated";
            document.getElementById('status-text').className = "text-sm text-red-500 font-medium";
            
            document.getElementById('countdown-display').innerText = "--:--";
            document.getElementById('capture-progress').style.width = "0%";
            
            addLog('System Halted by User.');
        }

        function startCaptureLoop() {
            secondsLeft = INTERVAL_SEC;
            updateTimerDisplay();

            // 1 Second Timer
            countdownTimer = setInterval(() => {
                secondsLeft--;
                updateTimerDisplay();
                if (secondsLeft <= 0) {
                    secondsLeft = INTERVAL_SEC;
                    captureFrame();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            document.getElementById('countdown-display').innerText = `00:0${secondsLeft}`;
            const percentage = ((INTERVAL_SEC - secondsLeft) / INTERVAL_SEC) * 100;
            document.getElementById('capture-progress').style.width = `${percentage}%`;
        }

        function captureFrame() {
            const video = document.getElementById('video-feed');
            const canvas = document.getElementById('capture-canvas');
            
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0);
                
                // Simulate processing
                totalCaptures++;
                document.getElementById('capture-count').innerText = totalCaptures;
                
                // Flash effect
                const flash = document.createElement('div');
                flash.className = 'absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-300';
                video.parentElement.appendChild(flash);
                requestAnimationFrame(() => flash.classList.add('opacity-0'));
                setTimeout(() => flash.remove(), 300);

                const timestamp = new Date().toLocaleTimeString();
                addLog(`Frame #${totalCaptures} processed by Aura`, 'success');
            }
        }

        function addLog(message, type = 'info') {
            const feed = document.getElementById('log-feed');
            
            // Clear initial empty state
            if (feed.querySelector('.text-center')) {
                feed.innerHTML = '';
            }

            const item = document.createElement('div');
            let icon = 'solar:info-circle-linear';
            let color = 'text-zinc-500';

            if (type === 'success') {
                icon = 'solar:check-circle-linear';
                color = 'text-indigo-500';
            } else if (type === 'error') {
                icon = 'solar:danger-triangle-linear';
                color = 'text-red-500';
            }

            item.className = "flex items-start gap-2 p-2 rounded hover:bg-zinc-50 transition-colors animate-[fadeIn_0.3s_ease-out]";
            item.innerHTML = `
                <iconify-icon icon="${icon}" class="${color} mt-0.5 shrink-0" width="14"></iconify-icon>
                <div class="flex-1 min-w-0">
                    <p class="text-xs text-zinc-600 truncate">${message}</p>
                </div>
            `;
            
            feed.prepend(item);
            
            // Keep log size manageable
            if (feed.children.length > 20) {
                feed.lastElementChild.remove();
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
      

<div className="h-full w-full relative flex flex-col" id="app">

<div className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-50/90 backdrop-blur-sm transition-opacity duration-500" id="login-view">
<div className="w-full max-w-sm mx-4 p-8 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="mb-8 text-center relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 text-white mb-5 shadow-lg shadow-zinc-900/20 ring-1 ring-zinc-900/5">
<iconify-icon height="24" icon="solar:eye-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-zinc-900">Aegis Vision</h1>
<div className="flex items-center justify-center gap-1.5 mt-2">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<p className="text-xs text-zinc-500 font-medium tracking-wide">POWERED BY AURA AI</p>
</div>
</div>
<form className="space-y-5" id="login-form" onsubmit="handleLogin(event)">

<div className="p-1 bg-zinc-100 rounded-lg flex relative">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md transition-all shadow-sm bg-white text-zinc-900" id="role-admin" onclick="selectRole('admin')" type="button">Admin</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-md transition-all text-zinc-500 hover:text-zinc-700" id="role-field" onclick="selectRole('field')" type="button">Field Unit</button>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1 uppercase tracking-wider">Secure ID</label>
<div className="relative group">
<input className="w-full pl-10 pr-3 py-2.5 text-sm text-zinc-900 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 group-hover:border-zinc-300" placeholder="user@id" required="" type="email" value="admin@aegis.ai"/>
<iconify-icon className="absolute left-3 top-2.5 text-zinc-400 transition-colors group-focus-within:text-zinc-900" icon="solar:shield-user-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1 uppercase tracking-wider">Passkey</label>
<div className="relative group">
<input className="w-full pl-10 pr-3 py-2.5 text-sm text-zinc-900 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all placeholder:text-zinc-400 group-hover:border-zinc-300" placeholder="••••••••" required="" type="password" value="password123"/>
<iconify-icon className="absolute left-3 top-2.5 text-zinc-400 transition-colors group-focus-within:text-zinc-900" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
</div>
<button className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 flex items-center justify-center gap-2 group" type="submit">
<span>Authenticate</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
<div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span>Secure Connection 256-bit</span>
</div>
</div>
</div>

<div className="h-full flex opacity-0 pointer-events-none transition-opacity duration-700" id="dashboard-view">

<aside className="w-64 bg-white border-r border-zinc-200 flex flex-col justify-between hidden md:flex z-20">
<div>
<div className="h-16 flex items-center gap-3 px-6 border-b border-zinc-100">
<div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:eye-scan-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium tracking-tight text-sm text-zinc-900">Aegis Vision</span>
<span className="text-[10px] text-zinc-400 tracking-wide font-medium">ADMIN PANEL</span>
</div>
</div>
<nav className="p-4 space-y-1">
<div className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Monitoring</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 border border-zinc-100 rounded-lg group shadow-sm" href="#">
<iconify-icon className="text-zinc-900" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
                            Live Operations
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-zinc-900 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                            User Consents
                        </a>
<div className="mt-6 px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Intelligence</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-600 transition-colors" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                            Aura AI Insights
                        </a>
</nav>
</div>
<div className="p-4">
<div className="mb-4 px-3 py-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold text-indigo-900">Aura AI Active</span>
</div>
<p className="text-[10px] text-indigo-700/80 leading-snug">System is analyzing behavioral patterns in real-time.</p>
</div>
<div className="border-t border-zinc-100 pt-3">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-zinc-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
                            Sign Out
                        </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-50 relative overflow-hidden">

<header className="h-16 px-6 border-b border-zinc-200 bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
<div className="flex items-center gap-3">
<button className="md:hidden text-zinc-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-700">System Online</span>
</div>
<div className="hidden sm:flex h-4 w-px bg-zinc-200 mx-1"></div>
<span className="hidden sm:inline-flex text-[10px] uppercase font-semibold tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200" id="role-badge">
                            Administrator
                        </span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-mono">
<iconify-icon icon="solar:server-square-linear" width="14"></iconify-icon>
<span>aura-node-01: connected</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm">
<iconify-icon icon="solar:user-id-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
<div className="max-w-6xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-medium text-zinc-900 tracking-tight">Surveillance Hub</h2>
<p className="text-sm text-zinc-500">Manage active streams and compliance consents.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-500 bg-white border border-zinc-200 px-3 py-1.5 rounded-md shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                    Interval: 5s
                                </span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden group relative">

<div className="absolute top-4 left-4 z-10 flex gap-2">
<div className="bg-zinc-900/80 backdrop-blur text-white text-xs px-2 py-1 rounded font-medium flex items-center gap-1">
<iconify-icon icon="solar:camera-linear" width="12"></iconify-icon>
                                            CAM-01
                                        </div>
<div className="hidden bg-red-500/90 backdrop-blur text-white text-xs px-2 py-1 rounded font-medium flex items-center gap-1" id="rec-badge">
<div className="w-1.5 h-1.5 bg-white rounded-full blink"></div>
                                            REC
                                        </div>
<div className="hidden bg-indigo-500/90 backdrop-blur text-white text-xs px-2 py-1 rounded font-medium flex items-center gap-1" id="ai-badge">
<iconify-icon icon="solar:stars-minimalistic-linear" width="12"></iconify-icon>
                                            AURA AI
                                        </div>
</div>

<div className="relative aspect-video bg-zinc-950 flex items-center justify-center overflow-hidden">

<video autoplay="" className="w-full h-full object-cover opacity-40 transition-all duration-700 scale-100" id="video-feed" muted="" playsinline=""></video>

<div className="scan-line" id="scan-line"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500" id="video-placeholder">
<div className="w-16 h-16 rounded-full bg-zinc-900/50 border border-zinc-700/50 flex items-center justify-center mb-4 backdrop-blur-sm">
<iconify-icon className="text-zinc-400" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-400">Feed Offline</p>
</div>

<canvas className="hidden" id="capture-canvas"></canvas>
</div>

<div className="p-4 border-t border-zinc-100 bg-white flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Status</span>
<span className="text-sm text-zinc-500" id="status-text">Standby</span>
</div>
<div className="h-8 w-px bg-zinc-100"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Next Analysis</span>
<span className="text-sm font-mono text-zinc-500" id="countdown-display">--:--</span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-95" id="btn-start" onclick="openConsentModal()">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
                                                Initialize Monitor
                                            </button>
<button className="hidden flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-red-600 hover:bg-red-50 text-sm font-medium rounded-lg shadow-sm transition-all active:scale-95" id="btn-stop" onclick="stopSystem()">
<iconify-icon icon="solar:stop-linear" width="16"></iconify-icon>
                                                Terminate
                                            </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
<div className="h-full bg-indigo-500 transition-all duration-1000 ease-linear" id="capture-progress" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-50 rounded-full mix-blend-multiply opacity-50"></div>
<div className="flex items-center justify-between mb-4 relative">
<h3 className="text-sm font-medium text-zinc-900">Aura Processed</h3>
<iconify-icon className="text-zinc-400" icon="solar:gallery-check-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2 relative">
<span className="text-4xl font-semibold text-zinc-900 tracking-tight" id="capture-count">0</span>
<span className="text-sm text-zinc-500">frames</span>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100 text-xs text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:cloud-upload-linear" width="14"></iconify-icon>
                                        Encrypted upload to Aegis Cloud
                                    </div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-80">
<div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50 rounded-t-2xl">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">System Audit Log</h3>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1" id="log-feed">
<div className="text-center py-10">
<p className="text-xs text-zinc-400">System initialized.</p>
<p className="text-xs text-zinc-300 mt-1">Waiting for user consent...</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div aria-hidden="true" className="fixed inset-0 z-[100] bg-zinc-900/20 backdrop-blur-sm hidden transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-[101] flex items-center justify-center p-4 hidden pointer-events-none" id="modal-panel">
<div className="bg-white rounded-2xl shadow-2xl border border-zinc-200 w-full max-w-md p-6 transform scale-95 opacity-0 transition-all duration-300 pointer-events-auto" id="modal-content">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-900">Explicit Consent Required</h3>
<div className="flex items-center gap-1 mt-1 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:lock-keyhole-minimalistic-linear" width="12"></iconify-icon>
<span className="text-xs text-zinc-500 font-medium">Role: Administrator Override</span>
</div>
</div>
</div>
<div className="mt-4 bg-zinc-50 p-3 rounded-lg border border-zinc-100 text-xs text-zinc-600">
                    By proceeding, you authorize <strong>Aura AI</strong> to capture and process visual data every <span className="font-semibold">5 seconds</span> for security analysis.
                </div>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed">
                    This action is logged in the immutable ledger. Ensure all subjects in the field of view have been notified according to protocol <span className="font-mono text-xs bg-zinc-100 px-1 rounded">SEC-2024</span>.
                </p>
<div className="mt-6 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg transition-colors" onclick="closeConsentModal()">Deny Access</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg shadow-sm transition-colors flex items-center gap-2" onclick="activateSystem()">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                        Grant Consent &amp; Start
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
