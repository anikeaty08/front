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
colors: {
slate: {
25: '#fcfcfc',
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
},
accent: {
500: '#2563eb',
600: '#1d4ed8',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'popover': '0 0 0 1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
}
}
}
}



        // Sidebar Navigation Logic
        function setActiveNav(element, title) {
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active', 'bg-slate-100', 'text-slate-900');
                el.classList.add('text-slate-500');
                const icon = el.querySelector('iconify-icon');
                if(icon) icon.classList.remove('text-slate-900');
                if(icon) icon.classList.add('text-slate-400');
            });

            // Add active class to clicked item
            element.classList.add('active', 'bg-slate-100', 'text-slate-900');
            element.classList.remove('text-slate-500');
            const activeIcon = element.querySelector('iconify-icon');
            if(activeIcon) {
                activeIcon.classList.remove('text-slate-400');
                activeIcon.classList.add('text-slate-900');
            }

            // Update Header Title
            const titleEl = document.getElementById('page-title');
            titleEl.style.opacity = '0';
            setTimeout(() => {
                titleEl.textContent = title;
                titleEl.style.opacity = '1';
            }, 150);
            titleEl.style.transition = 'opacity 0.15s ease';
        }

        // Notification Toggle
        function toggleNotifications() {
            const dropdown = document.getElementById('notif-dropdown');
            const dot = document.getElementById('notif-dot');
            
            if (dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden');
                // Hide the red dot when opened
                if(dot) dot.style.display = 'none';
            } else {
                dropdown.classList.add('hidden');
            }
        }

        // Contest Registration Toggle
        function toggleRegister(btn) {
            if (btn.innerText === "Register") {
                // Loading state
                const originalText = btn.innerText;
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="16"></iconify-icon>';
                
                setTimeout(() => {
                    btn.innerText = "Registered";
                    btn.classList.remove('bg-slate-900', 'text-white', 'hover:bg-slate-800');
                    btn.classList.add('bg-emerald-50', 'text-emerald-600', 'border', 'border-emerald-100', 'hover:bg-emerald-100');
                    showToast("Successfully registered for contest!");
                }, 800);
            } else {
                // Unregister logic
                btn.innerText = "Register";
                btn.classList.add('bg-slate-900', 'text-white', 'hover:bg-slate-800');
                btn.classList.remove('bg-emerald-50', 'text-emerald-600', 'border', 'border-emerald-100', 'hover:bg-emerald-100');
            }
        }

        // File Upload Simulation
        function handleFileSelect(input) {
            if (input.files && input.files[0]) {
                const fileName = input.files[0].name;
                const container = document.getElementById('job-list');
                
                showToast(`Uploading ${fileName}...`);

                // Create new job element
                const newJob = document.createElement('div');
                newJob.className = "flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-lg shadow-sm animate-pulse";
                newJob.innerHTML = `
                    <div class="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm font-medium text-slate-900">${fileName}</span>
                            <span class="text-xs font-medium text-slate-500">Initializing...</span>
                        </div>
                        <div class="h-1 w-full bg-slate-100 rounded-full overflow-hidden mt-2">
                            <div class="h-full bg-indigo-500 rounded-full" style="width: 0%" id="progress-${fileName.replace(/\s/g, '').replace(/\./g, '')}"></div>
                        </div>
                    </div>
                `;

                container.prepend(newJob);

                // Simulate progress
                setTimeout(() => {
                    newJob.classList.remove('animate-pulse');
                    const bar = newJob.querySelector(`div[id^="progress-"]`);
                    let width = 0;
                    const interval = setInterval(() => {
                        if (width >= 100) {
                            clearInterval(interval);
                            showToast(`${fileName} processing complete`);
                            // Update status text
                            newJob.querySelector('.text-xs.font-medium.text-slate-500').innerText = "Complete";
                            newJob.querySelector('.text-xs.font-medium.text-slate-500').classList.add('text-emerald-600');
                            bar.classList.replace('bg-indigo-500', 'bg-emerald-500');
                        } else {
                            width += Math.random() * 10;
                            if(width > 100) width = 100;
                            bar.style.width = width + '%';
                        }
                    }, 300);
                }, 500);
            }
        }

        // Toast Notification System
        function showToast(message) {
            const container = document.getElementById('toast-container');
            
            const toast = document.createElement('div');
            toast.className = "bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-3 toast-enter pointer-events-auto min-w-[200px]";
            toast.innerHTML = `
                <iconify-icon icon="solar:check-circle-linear" class="text-emerald-400" width="16"></iconify-icon>
                ${message}
            `;
            
            container.appendChild(toast);

            // Remove after 3 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('notif-dropdown');
            const button = event.target.closest('button');
            const isBell = button && button.onclick && button.onclick.toString().includes('toggleNotifications');
            
            if (!isBell && !dropdown.contains(event.target) && !dropdown.classList.contains('hidden')) {
                dropdown.classList.add('hidden');
            }
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
      

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 hidden md:flex z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100 cursor-pointer" onclick="window.location.reload()">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-medium text-xs tracking-tight">QG</div>
<span className="font-medium tracking-tight text-slate-900">QuizGen AI</span>
</div>
</div>

<nav className="p-4 space-y-1" id="sidebar-nav">
<div className="px-2 pb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Platform</div>
<button className="nav-item active w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-slate-100 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'Dashboard')">
<iconify-icon className="text-slate-900" icon="solar:widget-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'AI Pipeline')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    AI Pipeline
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'Contests')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:cup-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Contests
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'Analytics')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Analytics
                </button>
<div className="mt-6 px-2 pb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Engine</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'Cluster Status')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:server-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Cluster Status
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 rounded-md font-medium group transition-all" onclick="setActiveNav(this, 'Knowledge Base')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:database-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Knowledge Base
                </button>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left group" onclick="showToast('Opening Profile Settings...')">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-400 border border-slate-200 group-hover:border-slate-300 transition-colors">
<iconify-icon icon="solar:user-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Administrator</p>
<p className="text-xs text-slate-500 truncate">System Architect</p>
</div>
<iconify-icon className="text-slate-400 group-hover:rotate-90 transition-transform duration-500" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-4">
<span className="text-slate-400 text-sm">Overview</span>
<span className="text-slate-300 text-sm">/</span>
<span className="text-slate-900 font-medium text-sm" id="page-title">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200 cursor-help" title="System Status: Optimal">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-slate-600">System Healthy</span>
</div>
<div className="relative">
<button className="relative text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-50" onclick="toggleNotifications()">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white hidden" id="notif-dot"></div>
</button>

<div className="hidden absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-popover border border-slate-100 py-2 z-50" id="notif-dropdown">
<div className="px-4 py-2 border-b border-slate-50">
<h3 className="text-xs font-medium text-slate-900">Notifications</h3>
</div>
<div className="max-h-64 overflow-y-auto">

<div className="py-8 text-center px-4">
<p className="text-xs text-slate-400">No new notifications</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8" id="main-scroll">
<div className="max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white p-5 rounded-xl shadow-card border border-slate-100 group hover:shadow-md transition-shadow cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:text-slate-900 transition-colors group-hover:bg-slate-100">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">0</div>
<div className="text-xs text-slate-500 font-medium mt-1">Active Students</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-card border border-slate-100 group hover:shadow-md transition-shadow cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:text-slate-900 transition-colors group-hover:bg-slate-100">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">0</div>
<div className="text-xs text-slate-500 font-medium mt-1">Questions Generated</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-card border border-slate-100 group hover:shadow-md transition-shadow cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:text-slate-900 transition-colors group-hover:bg-slate-100">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">0</div>
<div className="text-xs text-slate-500 font-medium mt-1">Live Contests</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-card border border-slate-100 group hover:shadow-md transition-shadow cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:text-slate-900 transition-colors group-hover:bg-slate-100">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">--</div>
<div className="text-xs text-slate-500 font-medium mt-1">Inference Speed</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<div className="bg-white rounded-xl shadow-card border border-slate-100 overflow-hidden min-h-[300px] flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="font-medium text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                                    Generation Pipeline
                                </h3>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-2 py-1 rounded transition-colors" onclick="showToast('Fetching system logs...')">View Logs</button>
</div>

<div className="p-6 flex-1 flex flex-col">
<input className="hidden" id="file-upload" onchange="handleFileSelect(this)" type="file"/>
<div className="border border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer group active:scale-[0.99]" onclick="document.getElementById('file-upload').click()">
<div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-slate-400 group-hover:text-accent-600">
<iconify-icon icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900">Upload course material</p>
<p className="text-xs text-slate-500 mt-1">Supports PDF, DOCX, TXT</p>
</div>

<div className="mt-6 space-y-4 flex-1" id="job-list">

</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-card border border-slate-100 min-h-[250px] flex flex-col">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="font-medium text-slate-900 tracking-tight">Active Contests</h3>
<div className="flex gap-2">
<button className="w-6 h-6 flex items-center justify-center rounded border border-slate-200 text-slate-300 cursor-not-allowed" disabled="">
<iconify-icon icon="solar:arrow-left-linear" width="14"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center rounded border border-slate-200 text-slate-300 cursor-not-allowed" disabled="">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-3">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-900 font-medium">No Active Contests</p>
<p className="text-xs text-slate-500 mt-1">Scheduled contests will appear here.</p>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">

<div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 min-h-[300px]">
<h3 className="font-medium text-slate-900 tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:graph-down-linear"></iconify-icon>
                                Weak Topic Detection
                            </h3>
<div className="space-y-5 h-40 flex items-center justify-center">
<div className="text-center">
<p className="text-xs text-slate-400">Waiting for performance data...</p>
</div>
</div>
<div className="mt-6 pt-5 border-t border-slate-50">
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
<div className="flex gap-2 items-start">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:chat-round-line-linear" width="16"></iconify-icon>
<div>
<p className="text-xs text-slate-600 leading-relaxed">
<span className="font-medium text-slate-900">AI Tutor:</span> 
                                                System ready. Analysis will begin once user data is populated.
                                            </p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-card border border-slate-100 p-6">
<h3 className="font-medium text-slate-900 tracking-tight mb-4 flex justify-between items-center">
                                Architecture Health
                                <button className="text-slate-400 hover:text-slate-900" onclick="showToast('Refreshing Status...')"><iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon></button>
</h3>
<div className="space-y-3">
<div className="flex items-center justify-between py-2 border-b border-slate-50 group cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-600">API Gateway</span>
</div>
<span className="text-[10px] text-slate-400 font-mono">Idle</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-slate-50 group cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-600">Auth Service</span>
</div>
<span className="text-[10px] text-slate-400 font-mono">Idle</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-slate-50 group cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-600">Quiz Engine</span>
</div>
<span className="text-[10px] text-slate-400 font-mono">Idle</span>
</div>
<div className="flex items-center justify-between py-2 group cursor-default">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-600">GPU Inference</span>
</div>
<span className="text-[10px] text-slate-400 font-mono">Idle</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-slate-900 rounded-xl shadow-card border border-slate-800 p-6 text-white relative overflow-hidden group min-h-[250px] flex flex-col">

<div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 group-hover:opacity-75 transition-opacity duration-1000"></div>
<h3 className="font-medium tracking-tight mb-6 relative z-10 flex items-center gap-2">
<iconify-icon icon="solar:rocket-2-linear"></iconify-icon>
                            Roadmap
                        </h3>
<div className="flex-1 flex items-center justify-center relative z-10 text-slate-500 text-xs">
<div className="text-center">
<iconify-icon className="mb-2 opacity-50" icon="solar:clipboard-list-linear" width="24"></iconify-icon>
<p>No active milestones</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-card border border-slate-100 p-6 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="font-medium text-slate-900 tracking-tight">Schema Viewer</h3>
<button className="text-slate-400 hover:text-slate-900" onclick="showToast('Exporting Schema SQL...')"><iconify-icon icon="solar:export-linear" width="16"></iconify-icon></button>
</div>
<div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-4 relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing min-h-[200px]" title="Drag to pan">

<div className="flex gap-6 text-xs transition-transform hover:scale-105 duration-500 opacity-60">
<div className="w-24 bg-white border border-slate-200 rounded p-2 shadow-sm">
<div className="font-bold text-slate-400 border-b pb-1 mb-1">Table_A</div>
<div className="text-slate-300 space-y-1">
<div className="h-1.5 bg-slate-100 w-full rounded"></div>
<div className="h-1.5 bg-slate-100 w-3/4 rounded"></div>
</div>
</div>
<div className="self-center text-slate-300">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</div>
<div className="w-28 bg-white border border-slate-200 rounded p-2 shadow-sm">
<div className="font-bold text-slate-400 border-b pb-1 mb-1">Table_B</div>
<div className="text-slate-300 space-y-1">
<div className="h-1.5 bg-slate-100 w-full rounded"></div>
<div className="h-1.5 bg-slate-100 w-3/4 rounded"></div>
</div>
</div>
<div className="self-center text-slate-300">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</div>
<div className="w-24 bg-white border border-slate-200 rounded p-2 shadow-sm">
<div className="font-bold text-slate-400 border-b pb-1 mb-1">Table_C</div>
<div className="text-slate-300 space-y-1">
<div className="h-1.5 bg-slate-100 w-full rounded"></div>
<div className="h-1.5 bg-slate-100 w-3/4 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
