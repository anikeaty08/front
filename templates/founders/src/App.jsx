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
sans: ['Quicksand', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: '#ff2a2a',
surface: '#050505',
panel: 'rgba(255, 255, 255, 0.02)',
borderline: 'rgba(255, 255, 255, 0.05)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            /* --- AUTHENTICATION & CAPTCHA FLOW --- */
            const authLayer = document.getElementById('system-auth-layer');
            const loginModal = document.getElementById('login-modal');
            const captchaModal = document.getElementById('captcha-modal');
            const appContainer = document.getElementById('app-container');

            const uHost = document.getElementById('auth-host');
            const uUser = document.getElementById('auth-user');
            const uPass = document.getElementById('auth-pass');
            const authError = document.getElementById('auth-error');
            const authSubmit = document.getElementById('auth-submit');

            let captchaAnswer = 0;
            const cPrompt = document.getElementById('captcha-prompt');
            const cInput = document.getElementById('captcha-input');
            const cSubmit = document.getElementById('captcha-submit');
            const cError = document.getElementById('captcha-error');

            function generateCaptcha() {
                const n1 = Math.floor(Math.random() * 20) + 1;
                const n2 = Math.floor(Math.random() * 20) + 1;
                captchaAnswer = n1 + n2;
                cPrompt.innerText = `${n1} + ${n2}`;
                cInput.value = '';
                cError.classList.add('hidden');
            }

            authSubmit.addEventListener('click', () => {
                if(uHost.value === 'coretex.ly' && uUser.value === 'coretex' && uPass.value === 'coretex') {
                    authError.classList.add('hidden');
                    loginModal.classList.add('hidden');
                    generateCaptcha();
                    captchaModal.classList.remove('hidden');
                } else {
                    authError.classList.remove('hidden');
                }
            });

            cSubmit.addEventListener('click', () => {
                if(parseInt(cInput.value) === captchaAnswer) {
                    // Success, grant access
                    authLayer.classList.add('opacity-0');
                    setTimeout(() => {
                        authLayer.style.display = 'none';
                        appContainer.classList.remove('opacity-0', 'pointer-events-none');
                        initAppLogic(); // Boot system logic
                    }, 500);
                } else {
                    cError.classList.remove('hidden');
                    generateCaptcha();
                }
            });

            /* --- CORE DASHBOARD LOGIC --- */
            const STORAGE_KEY = 'coretex_system_data';

            function getAppData() {
                const rawData = localStorage.getItem(STORAGE_KEY);
                return rawData ? JSON.parse(rawData) : { logs: [] };
            }

            function saveAppData(data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }

            function formatMoney(amount) {
                if(amount == null) return '$0.00';
                const [dollars, cents] = Number(amount).toFixed(2).split('.');
                return `$${Number(dollars).toLocaleString()}<span class="text-white/30 text-lg">.${cents || '00'}</span>`;
            }

            function formatMoneyTable(amount) {
                if(amount == null) return '$0';
                return `$${Number(amount).toLocaleString()}`;
            }

            function updateDashboard() {
                const data = getAppData();
                let totalGross = 0;
                let totalWages = 0;
                const clientMap = {};
                const serviceMap = {};

                data.logs.forEach(log => {
                    totalGross += log.grossRev;
                    totalWages += log.laborCost;

                    if (!clientMap[log.clientId]) {
                        clientMap[log.clientId] = { client_id: log.clientId, total_logs: 0, gross_rev: 0, labor_cost: 0 };
                    }
                    clientMap[log.clientId].total_logs += 1;
                    clientMap[log.clientId].gross_rev += log.grossRev;
                    clientMap[log.clientId].labor_cost += log.laborCost;

                    if (!serviceMap[log.serviceType]) {
                        serviceMap[log.serviceType] = { name: log.serviceType, gross: 0, labor: 0 };
                    }
                    serviceMap[log.serviceType].gross += log.grossRev;
                    serviceMap[log.serviceType].labor += log.laborCost;
                });

                const totalTax = totalGross * 0.25;
                const totalNet = totalGross - totalTax - totalWages;

                document.getElementById('kpi-gross').innerHTML = formatMoney(totalGross);
                document.getElementById('kpi-net').innerHTML = formatMoney(totalNet);
                document.getElementById('kpi-tax').innerHTML = formatMoney(totalTax);
                document.getElementById('kpi-wages').innerHTML = formatMoney(totalWages);

                document.getElementById('kpi-gross-bar').style.width = totalGross > 0 ? '100%' : '0%';

                // Tables & Lists
                const clientTbody = document.getElementById('client-table-body');
                const directoryGrid = document.getElementById('directory-grid');
                const clientArr = Object.values(clientMap).map(c => {
                    c.net_profit = c.gross_rev - (c.gross_rev * 0.25) - c.labor_cost;
                    return c;
                }).sort((a, b) => b.net_profit - a.net_profit);

                if (clientArr.length === 0) {
                    clientTbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-xs font-mono text-white/30">Awaiting user input...</td></tr>`;
                    directoryGrid.innerHTML = `
                        <div class="col-span-full py-12 text-center border border-dashed border-borderline rounded-xl bg-panel">
                            <iconify-icon icon="solar:users-group-two-rounded-linear" class="text-white/20 mb-2" width="32"></iconify-icon>
                            <p class="text-sm text-white/40 font-mono">Directory dynamically populated from active service logs.</p>
                        </div>`;
                } else {
                    clientTbody.innerHTML = clientArr.map(client => `
                        <tr class="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                            <td class="px-6 py-4 font-mono text-white/60 group-hover:text-white transition-colors whitespace-nowrap">${client.client_id}</td>
                            <td class="px-6 py-4 font-mono text-white/40 text-center whitespace-nowrap">${client.total_logs}</td>
                            <td class="px-6 py-4 font-mono text-white/80 text-right whitespace-nowrap">${formatMoneyTable(client.gross_rev)}</td>
                            <td class="px-6 py-4 font-mono text-white/50 text-right whitespace-nowrap">${formatMoneyTable(client.labor_cost)}</td>
                            <td class="px-6 py-4 font-mono text-brand text-right whitespace-nowrap">${formatMoneyTable(client.net_profit)}</td>
                        </tr>
                    `).join('');

                    directoryGrid.innerHTML = clientArr.map(client => `
                        <div class="bg-panel border border-borderline rounded-xl p-5 hover:border-white/10 transition-colors flex flex-col relative overflow-hidden group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/60 border border-white/10 mb-2 inline-block">Entity Record</span>
                                    <h3 class="text-base font-medium text-white">${client.client_id}</h3>
                                </div>
                            </div>
                            <div class="space-y-2 mb-4 flex-1">
                                <div class="flex justify-between text-xs">
                                    <span class="text-white/40">Operations</span>
                                    <span class="text-white">${client.total_logs}</span>
                                </div>
                                <div class="flex justify-between text-xs">
                                    <span class="text-white/40">LTV</span>
                                    <span class="font-mono text-white/80">${formatMoneyTable(client.gross_rev)}</span>
                                </div>
                                <div class="flex justify-between text-xs">
                                    <span class="text-white/40">Net Profit</span>
                                    <span class="font-mono text-brand">${formatMoneyTable(client.net_profit)}</span>
                                </div>
                            </div>
                        </div>
                    `).join('');
                }

                const effContainer = document.getElementById('efficiency-container');
                const serviceArr = Object.values(serviceMap).map(s => {
                    s.margin = s.gross > 0 ? Math.round(((s.gross - (s.gross * 0.25) - s.labor) / s.gross) * 100) : 0;
                    return s;
                }).sort((a, b) => b.margin - a.margin);

                if (serviceArr.length === 0) {
                    effContainer.innerHTML = `<div class="text-center text-xs font-mono text-white/30 py-4">Awaiting user input...</div>`;
                } else {
                    effContainer.innerHTML = serviceArr.map((item, index) => {
                        let colorClass = index === 0 ? 'bg-brand' : (index === 1 ? 'bg-white/40' : 'bg-white/20');
                        return `
                            <div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="font-medium flex items-center gap-2">
                                        <iconify-icon icon="solar:folder-with-files-linear" class="text-white/60"></iconify-icon> 
                                        ${item.name}
                                    </span>
                                    <span class="font-mono text-white/80 text-xs">${item.margin}% Margin</span>
                                </div>
                                <div class="w-full h-1.5 bg-surface border border-borderline rounded-full overflow-hidden">
                                    <div class="h-full ${colorClass} rounded-full relative" style="width: ${Math.max(item.margin, 0)}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('');
                }

                const logsTbody = document.getElementById('logs-table-body');
                const reversedLogs = [...data.logs].reverse();
                if (reversedLogs.length === 0) {
                    logsTbody.innerHTML = `<tr><td colspan="6" class="px-4 py-8 text-center text-white/30">No local storage records found.</td></tr>`;
                } else {
                    logsTbody.innerHTML = reversedLogs.map(log => `
                        <tr class="border-b border-borderline/50 hover:bg-white/[0.02] transition-colors group">
                            <td class="px-4 py-3 text-white/30 whitespace-nowrap">${log.date}</td>
                            <td class="px-4 py-3 text-brand whitespace-nowrap">${log.action}</td>
                            <td class="px-4 py-3 text-white/60 whitespace-nowrap">${log.clientId}</td>
                            <td class="px-4 py-3 text-white/80 whitespace-nowrap">${log.serviceType}</td>
                            <td class="px-4 py-3 text-white/50 whitespace-nowrap">Val: ${log.grossRev.toFixed(2)}</td>
                            <td class="px-4 py-3 text-white/30 text-right whitespace-nowrap">Auth: ${log.auth}</td>
                        </tr>
                    `).join('');
                }
            }

            // Bind Global Functions
            window.clearLocalData = function() {
                if(confirm("Are you sure you want to clear all local dashboard data?")) {
                    localStorage.removeItem(STORAGE_KEY);
                    updateDashboard();
                }
            };

            window.exportDataJSON = function() {
                const data = localStorage.getItem(STORAGE_KEY);
                if(!data) return alert('No data to export.');
                const blob = new Blob([data], {type: "application/json"});
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `coretex_export_${new Date().toISOString().slice(0,10)}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };

            function initAppLogic() {
                // Navigation Logic
                const navLinks = document.querySelectorAll('.nav-link');
                const viewSections = document.querySelectorAll('.view-section');
                const headerTitle = document.getElementById('header-title');
                
                navLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = link.getAttribute('data-target');
                        
                        // Handle Styling
                        navLinks.forEach(l => {
                            l.classList.remove('bg-white/5', 'text-white', 'border-white/5');
                            l.classList.add('text-white/60', 'border-transparent');
                            const icon = l.querySelector('.nav-icon');
                            if(icon) {
                                icon.classList.remove('text-brand');
                                icon.classList.add('group-hover:text-white');
                            }
                        });
                        
                        link.classList.remove('text-white/60', 'border-transparent');
                        link.classList.add('bg-white/5', 'text-white', 'border-white/5');
                        const activeIcon = link.querySelector('.nav-icon');
                        if(activeIcon) {
                            activeIcon.classList.add('text-brand');
                            activeIcon.classList.remove('group-hover:text-white');
                        }
                        
                        if(headerTitle) headerTitle.textContent = link.textContent.trim();
                        
                        // Switch Views
                        viewSections.forEach(section => {
                            if (section.id === targetId) {
                                section.classList.remove('hidden');
                                section.classList.add('flex', 'view-active');
                            } else {
                                section.classList.add('hidden');
                                section.classList.remove('flex', 'view-active');
                            }
                        });

                        // Mobile sidebar auto-close
                        if (window.innerWidth < 768) {
                            document.getElementById('sidebar').classList.add('-translate-x-full');
                            document.getElementById('sidebar-overlay').classList.add('hidden');
                        }
                    });
                });

                // Mobile Menu Toggle
                document.getElementById('mobile-menu-btn').addEventListener('click', () => {
                    document.getElementById('sidebar').classList.remove('-translate-x-full');
                    document.getElementById('sidebar-overlay').classList.remove('hidden');
                });
                document.getElementById('sidebar-overlay').addEventListener('click', () => {
                    document.getElementById('sidebar').classList.add('-translate-x-full');
                    document.getElementById('sidebar-overlay').classList.add('hidden');
                });

                // Inject Data Logic
                document.getElementById('btn-inject-data').addEventListener('click', () => {
                    const clientId = document.getElementById('input-client-id').value.trim();
                    const serviceType = document.getElementById('input-service-type').value;
                    const grossRev = parseFloat(document.getElementById('input-gross-rev').value);
                    const laborCost = parseFloat(document.getElementById('input-labor-cost').value) || 0;
                    const empId = document.getElementById('input-emp-id').value.trim() || 'Sys-Anon';
                    const statusLabel = document.getElementById('inject-status');

                    if(!clientId || !serviceType || isNaN(grossRev)) {
                        statusLabel.innerText = "Error: Missing required fields";
                        return;
                    }

                    statusLabel.innerText = "Saving to Database...";
                    const appData = getAppData();
                    const formattedDate = new Date().toISOString().replace('T', ' ').split('.')[0];

                    appData.logs.push({
                        id: Date.now(),
                        date: formattedDate,
                        action: '[INJECT]',
                        clientId,
                        serviceType,
                        grossRev,
                        laborCost,
                        auth: empId
                    });

                    saveAppData(appData);

                    setTimeout(() => {
                        statusLabel.innerText = "Data Saved Successfully";
                        setTimeout(() => {
                            document.getElementById('input-client-id').value = '';
                            document.getElementById('input-service-type').value = '';
                            document.getElementById('input-gross-rev').value = '';
                            document.getElementById('input-labor-cost').value = '';
                            document.getElementById('input-emp-id').value = '';
                            document.getElementById('entry-modal').classList.add('hidden');
                            statusLabel.innerText = "";
                            updateDashboard();
                        }, 500);
                    }, 400);
                });

                // Load initial data
                updateDashboard();
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
      

<div className="fixed inset-0 z-[100] bg-surface flex items-center justify-center p-4 backdrop-blur-3xl transition-opacity duration-500" id="system-auth-layer">

<div className="w-full max-w-sm bg-panel border border-borderline rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300" id="login-modal">
<div className="absolute top-0 left-0 w-full h-1 bg-brand shadow-[0_0_20px_#ff2a2a]"></div>
<div className="flex items-center gap-3 mb-8">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-white uppercase font-mono">CoreTex Auth</span>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs text-white/40 uppercase tracking-widest font-mono ml-1">Host</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" icon="solar:server-linear" width="16"></iconify-icon>
<input className="w-full bg-[#030303] border border-borderline rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors font-mono" id="auth-host" placeholder="Network target" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/40 uppercase tracking-widest font-mono ml-1">User</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" icon="solar:user-linear" width="16"></iconify-icon>
<input className="w-full bg-[#030303] border border-borderline rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors font-mono" id="auth-user" placeholder="Identifier" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/40 uppercase tracking-widest font-mono ml-1">Passphrase</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" icon="solar:lock-password-linear" width="16"></iconify-icon>
<input className="w-full bg-[#030303] border border-borderline rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors font-mono" id="auth-pass" placeholder="••••••••" type="password"/>
</div>
</div>
<p className="text-xs text-brand font-mono hidden mt-2" id="auth-error">ERR: Invalid credentials. Access denied.</p>
<button className="w-full py-2.5 mt-4 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 group" id="auth-submit">
                    Establish Connection <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden w-full max-w-sm bg-panel border border-borderline rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300" id="captcha-modal">
<div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Human Verification</h3>
<p className="text-xs text-white/40 mb-6 font-mono">Solve the mathematical prompt to finalize handshake.</p>
<div className="space-y-4">
<div className="bg-[#030303] border border-borderline rounded-lg p-4 text-center">
<span className="text-xl font-mono text-white tracking-widest" id="captcha-prompt">-- + --</span>
</div>
<input className="w-full bg-[#030303] border border-borderline rounded-lg px-4 py-2.5 text-sm text-white text-center focus:outline-none focus:border-white/40 transition-colors font-mono" id="captcha-input" placeholder="Enter sum" type="number"/>
<p className="text-xs text-brand font-mono hidden text-center" id="captcha-error">ERR: Incorrect sum.</p>
<button className="w-full py-2.5 mt-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-all" id="captcha-submit">
                    Verify &amp; Enter
                </button>
</div>
</div>
</div>

<div className="w-full h-full flex opacity-0 pointer-events-none transition-opacity duration-1000" id="app-container">

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 hidden md:hidden" id="sidebar-overlay"></div>

<aside className="fixed inset-y-0 left-0 w-64 border-r border-borderline bg-surface/95 backdrop-blur-xl flex flex-col z-50 transform -translate-x-full md:translate-x-0 md:relative md:z-20 transition-transform duration-300 shrink-0" id="sidebar">
<div className="h-20 flex items-center px-6 border-b border-borderline shrink-0">
<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tighter text-white">CORETEX</span>
</a>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 custom-scrollbar">
<p className="px-3 text-xs font-mono uppercase tracking-widest text-white/30 mb-2 mt-4">System Views</p>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-white font-medium text-sm border border-white/5 transition-all group" data-target="view-dashboard" href="#">
<iconify-icon className="nav-icon text-brand transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Command Center
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium text-sm border border-transparent transition-all group" data-target="view-client-directory" href="#">
<iconify-icon className="nav-icon group-hover:text-white transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Client Directory
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium text-sm border border-transparent transition-all group" data-target="view-labor-force" href="#">
<iconify-icon className="nav-icon group-hover:text-white transition-colors" icon="solar:user-id-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Labor Force
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium text-sm border border-transparent transition-all group" data-target="view-service-logs" href="#">
<iconify-icon className="nav-icon group-hover:text-white transition-colors" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Service Logs
                </a>
<p className="px-3 text-xs font-mono uppercase tracking-widest text-white/30 mb-2 mt-8">Configuration</p>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium text-sm border border-transparent transition-all group" data-target="view-settings" href="#">
<iconify-icon className="nav-icon group-hover:text-white transition-colors" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    System Rules
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-medium text-sm border border-transparent transition-all group" data-target="view-export" href="#">
<iconify-icon className="nav-icon group-hover:text-white transition-colors" icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Data Export
                </a>
</nav>
<div className="p-4 border-t border-borderline bg-surface/90 shrink-0">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-panel border border-borderline">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand to-orange-500 flex items-center justify-center text-xs font-mono text-white">AD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">System Admin</span>
<span className="text-xs font-mono text-brand">Level 5 Access</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative z-10 overflow-hidden">

<header className="h-20 flex items-center justify-between px-4 md:px-8 border-b border-borderline shrink-0 bg-surface/80 backdrop-blur-md z-20">
<div className="flex items-center gap-4">

<button className="md:hidden flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div>
<h1 className="text-xl font-medium tracking-tight text-white transition-all" id="header-title">Command Center</h1>
<div className="flex items-center gap-2 mt-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-xs font-mono text-white/50 uppercase tracking-widest">Network Connected</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-borderline bg-panel text-xs font-mono text-white/50">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Live Session</span>
</div>
<button className="flex items-center gap-2 bg-brand hover:bg-red-600 text-white text-sm font-medium py-2 px-4 md:px-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.2)] hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] group border border-brand/50" onclick="document.getElementById('entry-modal').classList.remove('hidden')">
<iconify-icon className="group-hover:rotate-90 transition-transform duration-500" icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden md:inline">Log Service</span>
</button>
</div>
</header>

<div className="view-section view-active flex flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-dashboard">

<div className="bg-panel border border-borderline rounded-2xl p-6 mb-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand/5 pointer-events-none opacity-50"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 relative z-10 gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-white">System Velocity</h3>
<p className="text-xs text-white/40 font-light mt-1">Aggregated throughput tracking active nodes.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">30D TR</span>
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">LIVE</span>
</div>
</div>

<div className="h-48 md:h-64 w-full relative z-10">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 250">

<line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
<line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
<line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="rgba(255,255,255,0.03)" strokeWidth="1" x1="0" x2="1000" y1="200" y2="200"></line>
<defs>
<lineargradient id="velocityGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ff2a2a" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#ff2a2a" stop-opacity="0.0"></stop>
</lineargradient>
</defs>

<path className="graph-area" d="M0,200 Q150,150 250,180 T500,100 T750,130 T1000,40 L1000,250 L0,250 Z" fill="url(#velocityGrad)"></path>

<path className="graph-line" d="M0,200 Q150,150 250,180 T500,100 T750,130 T1000,40" fill="none" stroke="#ff2a2a" strokeLinecap="round" strokeWidth="2.5"></path>

<circle className="opacity-0 animate-[fadeIn_0.5s_ease-out_2s_forwards]" cx="250" cy="180" fill="#050505" r="4" stroke="#ff2a2a" strokeWidth="2"></circle>
<circle className="opacity-0 animate-[fadeIn_0.5s_ease-out_2.2s_forwards]" cx="500" cy="100" fill="#050505" r="4" stroke="#ff2a2a" strokeWidth="2"></circle>
<circle className="opacity-0 animate-[fadeIn_0.5s_ease-out_2.4s_forwards]" cx="750" cy="130" fill="#050505" r="4" stroke="#ff2a2a" strokeWidth="2"></circle>
<circle className="opacity-0 animate-[fadeIn_0.5s_ease-out_2.6s_forwards] shadow-[0_0_10px_#ff2a2a]" cx="1000" cy="40" fill="#ff2a2a" r="4" stroke="#ff2a2a" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-panel border border-borderline rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:wallet-money-linear" width="48"></iconify-icon>
</div>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">Gross Revenue</p>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1 font-mono" id="kpi-gross">$0.00</h3>
<div className="w-full h-1 bg-black/50 mt-4 rounded overflow-hidden">
<div className="h-full bg-white/20 w-[0%] rounded transition-all duration-1000" id="kpi-gross-bar"></div>
</div>
</div>
<div className="bg-panel border border-borderline rounded-2xl p-6 relative overflow-hidden group hover:border-brand/30 transition-colors shadow-[inset_0_0_40px_rgba(255,42,42,0.02)]">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-brand/5 pointer-events-none"></div>
<p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">Net Profit Bottom Line</p>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1 font-mono" id="kpi-net">$0.00</h3>
<p className="text-xs text-white/40 font-light mt-2">After all outflows &amp; tax provisioning</p>
</div>
<div className="bg-panel border border-borderline rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-brand/50"></div>
<p className="text-xs font-mono text-brand uppercase tracking-widest mb-2 flex items-center gap-2">Tax Reserve (25%)</p>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1 font-mono" id="kpi-tax">$0.00</h3>
<p className="text-xs text-white/40 font-light mt-2">Automated safe harbor allocation</p>
</div>
<div className="bg-panel border border-borderline rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-colors">
<p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">Total Wages &amp; OpEx</p>
<h3 className="text-3xl font-medium tracking-tight text-white mb-1 font-mono" id="kpi-wages">$0.00</h3>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-brand/50"></div>
<span className="text-xs text-white/40">Aggregated automatically</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-panel border border-borderline rounded-2xl flex flex-col overflow-hidden relative">
<div className="p-6 border-b border-borderline flex items-center justify-between bg-white/[0.01]">
<div>
<h3 className="text-lg font-medium tracking-tight text-white">Client ROI Leaderboard</h3>
<p className="text-xs text-white/40 font-light mt-1">Profitability segmented by unique client ID.</p>
</div>
<button className="hidden md:flex text-xs font-mono text-white/40 hover:text-white transition-colors items-center gap-1" onclick="clearLocalData()">
                                Clear Data <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="px-6 py-4 text-xs font-mono text-white/30 uppercase tracking-widest border-b border-borderline font-normal whitespace-nowrap">Client ID</th>
<th className="px-6 py-4 text-xs font-mono text-white/30 uppercase tracking-widest border-b border-borderline font-normal whitespace-nowrap">Total Logs</th>
<th className="px-6 py-4 text-xs font-mono text-white/30 uppercase tracking-widest border-b border-borderline font-normal text-right whitespace-nowrap">Gross Rev</th>
<th className="px-6 py-4 text-xs font-mono text-white/30 uppercase tracking-widest border-b border-borderline font-normal text-right whitespace-nowrap">Labor Cost</th>
<th className="px-6 py-4 text-xs font-mono text-brand uppercase tracking-widest border-b border-borderline font-normal text-right whitespace-nowrap">Net Profit</th>
</tr>
</thead>
<tbody className="text-sm" id="client-table-body">
<tr>
<td className="px-6 py-8 text-center text-xs font-mono text-white/30" colspan="5">Awaiting user input...</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-panel border border-borderline rounded-2xl flex flex-col overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/5 pointer-events-none"></div>
<div className="p-6 border-b border-borderline bg-white/[0.01]">
<h3 className="text-lg font-medium tracking-tight text-white">Service Efficiency</h3>
<p className="text-xs text-white/40 font-light mt-1">Margin analysis by sector.</p>
</div>
<div className="p-6 flex flex-col gap-6 flex-1 justify-center" id="efficiency-container">
<div className="text-center text-xs font-mono text-white/30 py-4">Awaiting user input...</div>
</div>
</div>
</div>
<div className="h-12 shrink-0"></div>
</div>

<div className="view-section hidden flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-client-directory">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-xl font-medium tracking-tight text-white">Directory Subsystem</h2>
<p className="text-xs text-white/40 font-light mt-1">Entity management and historical relational data.</p>
</div>
<div className="relative w-full md:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-panel border border-borderline rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/20 font-mono" placeholder="Search entity ID..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="directory-grid">
<div className="col-span-full py-12 text-center border border-dashed border-borderline rounded-xl bg-panel">
<iconify-icon className="text-white/20 mb-2" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<p className="text-sm text-white/40 font-mono">Directory dynamically populated from active service logs.</p>
</div>
</div>
<div className="h-12 shrink-0"></div>
</div>

<div className="view-section hidden flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-labor-force">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-panel border border-borderline rounded-xl p-5">
<p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Active Personnel</p>
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">--</h3>
</div>
<div className="bg-panel border border-borderline rounded-xl p-5">
<p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Weekly Burn Rate</p>
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">--</h3>
</div>
<div className="bg-panel border border-borderline rounded-xl p-5">
<p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Avg Utilization</p>
<h3 className="text-2xl font-medium tracking-tight text-brand font-mono">--</h3>
</div>
<div className="bg-panel border border-borderline rounded-xl p-5">
<p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Open Allocations</p>
<h3 className="text-2xl font-medium tracking-tight text-white font-mono">--</h3>
</div>
</div>
<div className="bg-panel border border-borderline rounded-2xl flex flex-col overflow-hidden relative flex-1">
<div className="p-5 border-b border-borderline flex items-center justify-between bg-white/[0.01]">
<h3 className="text-lg font-medium tracking-tight text-white">Allocation Matrix</h3>
</div>
<div className="overflow-x-auto custom-scrollbar flex-1 flex items-center justify-center p-8 text-center text-white/30 text-xs font-mono">
                        Module links to HR subsystem. Add items manually via Log Service modal.
                    </div>
</div>
<div className="h-12 shrink-0"></div>
</div>

<div className="view-section hidden flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-service-logs">
<div className="bg-panel border border-borderline rounded-2xl flex flex-col overflow-hidden relative flex-1">
<div className="p-4 border-b border-borderline flex flex-wrap gap-3 items-center bg-white/[0.01]">
<div className="flex items-center gap-2 mr-auto">
<div className="w-2 h-2 bg-brand rounded-full animate-pulse shadow-[0_0_10px_#ff2a2a]"></div>
<span className="text-xs font-mono text-brand uppercase tracking-widest">Live Feed</span>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar flex-1 bg-[#020202]">
<table className="w-full text-left border-collapse">
<tbody className="text-xs font-mono" id="logs-table-body">
<tr>
<td className="px-4 py-8 text-center text-white/30" colspan="6">No local storage records found.</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-12 shrink-0"></div>
</div>

<div className="view-section hidden flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-settings">
<div className="max-w-3xl w-full mx-auto space-y-6">
<div>
<h2 className="text-xl font-medium tracking-tight text-white mb-1">System Logic</h2>
<p className="text-sm text-white/40 mb-6">Modify automated calculation constraints and database endpoint parameters.</p>
</div>
<div className="bg-panel border border-borderline rounded-2xl p-6">
<h3 className="text-xs font-mono uppercase tracking-widest text-brand mb-6 flex items-center gap-2">
<iconify-icon icon="solar:calculator-linear"></iconify-icon> Financial Parameters
                        </h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-white mb-1">Global Tax Provisioning</h4>
<p className="text-xs text-white/40">Percentage diverted to safe harbor account per transaction.</p>
</div>
<div className="relative w-24">
<input className="w-full bg-surface border border-borderline rounded-lg px-3 py-2 text-sm text-white font-mono text-center focus:outline-none focus:border-white/20" disabled="" type="number" value="25"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 font-mono text-sm">%</span>
</div>
</div>
<div className="w-full h-px bg-borderline"></div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-white mb-1">Local Storage Mode</h4>
<p className="text-xs text-white/40">Dashboard currently operates independently via local storage.</p>
</div>
<label className="relative flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" disabled="" type="checkbox"/>
<div className="w-11 h-6 bg-black border border-borderline rounded-full peer transition-colors toggle-label"></div>
<div className="absolute left-1 top-1 w-4 h-4 bg-white/40 rounded-full transition-transform peer-checked:bg-white after-element"></div>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-col flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth custom-scrollbar" id="view-export">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
<div>
<h2 className="text-xl font-medium tracking-tight text-white mb-1">Data Pipeline</h2>
<p className="text-sm text-white/40 mb-8">Compile local ledgers and export securely.</p>
<div className="bg-panel border border-borderline rounded-2xl p-6 space-y-6">
<div className="space-y-3">
<label className="text-xs font-mono uppercase tracking-widest text-white/40">Target Format</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="export-format" type="radio"/>
<div className="border border-borderline bg-surface rounded-lg p-3 text-center peer-checked:border-brand peer-checked:bg-brand/5 transition-all text-sm text-white/60 peer-checked:text-white font-mono">.JSON (Raw)</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" disabled="" name="export-format" type="radio"/>
<div className="border border-borderline bg-surface rounded-lg p-3 text-center peer-checked:border-brand peer-checked:bg-brand/5 transition-all text-sm text-white/60 peer-checked:text-white font-mono opacity-50">.CSV</div>
</label>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mt-4" onclick="exportDataJSON()">
                                Initiate Export <iconify-icon icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="h-12 shrink-0"></div>
</div>
</main>
</div>

<div className="fixed inset-0 z-[60] flex items-center justify-center p-4 hidden" id="entry-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="document.getElementById('entry-modal').classList.add('hidden')"></div>
<div className="relative bg-[#0a0a0a] border border-borderline rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">
<div className="absolute top-0 left-0 w-full h-1 bg-brand rounded-t-2xl shadow-[0_0_15px_#ff2a2a]"></div>
<div className="p-6 border-b border-borderline flex justify-between items-center bg-white/[0.02]">
<div>
<h2 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-brand" icon="solar:document-add-linear"></iconify-icon>
                        New Service Log
                    </h2>
<p className="text-xs text-white/40 font-mono mt-1">Direct Local Storage Injection</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all" onclick="document.getElementById('entry-modal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
<div className="space-y-4">
<h3 className="text-xs font-mono uppercase tracking-widest text-white/30 flex items-center gap-2">
<span className="w-1 h-1 bg-brand rounded-full"></span> 01. Attribution
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-white/60 ml-1">Client ID <span className="text-brand">*</span></label>
<input className="w-full bg-surface border border-borderline rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-all font-mono" id="input-client-id" placeholder="e.g. CTX-089" type="text" />
</input></div>
<div className="space-y-1.5">
<label className="text-xs text-white/60 ml-1">Service Type <span className="text-brand">*</span></label>
<div className="relative">
<select className="w-full bg-surface border border-borderline rounded-xl px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-white/20 transition-all appearance-none cursor-pointer" id="input-service-type">
<option disabled="" selected="" value="">Select a service...</option>
<option value="Cloud Migration">Cloud Migration</option>
<option value="DevOps Integration">DevOps Integration</option>
<option value="Threat Protection">Threat Protection</option>
<option value="Big Data Analytics">Big Data Analytics</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-white/60 ml-1">Gross Revenue Attribution (USD) <span className="text-brand">*</span></label>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-mono text-sm">$</div>
<input className="w-full bg-surface border border-borderline rounded-xl pl-8 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all font-mono" id="input-gross-rev" placeholder="0.00" type="number" />
</input></div>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-borderline">
<h3 className="text-xs font-mono uppercase tracking-widest text-white/30 flex items-center gap-2">
<span className="w-1 h-1 bg-brand rounded-full"></span> 02. Labor Logistics
                    </h3>
<div className="bg-surface/50 border border-borderline rounded-xl p-4 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-white/60 ml-1">Assigned Employee ID</label>
<input className="w-full bg-[#0a0a0a] border border-borderline rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/20 transition-all font-mono" id="input-emp-id" placeholder="e.g. E1" type="text" />
</input></div>
<div className="space-y-1.5">
<label className="text-xs text-white/60 ml-1">Calculated Labor Cost (USD) <span className="text-brand">*</span></label>
<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 font-mono text-xs">$</div>
<input className="w-full bg-[#0a0a0a] border border-borderline rounded-lg pl-7 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/20 transition-all font-mono text-right" id="input-labor-cost" placeholder="0.00" type="number" />
</input></div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-borderline bg-white/[0.01] flex justify-between items-center shrink-0">
<span className="text-xs font-mono text-brand" id="inject-status"></span>
<div className="flex gap-3">
<button className="px-5 py-2.5 rounded-xl border border-borderline text-white/60 hover:text-white text-sm font-medium transition-colors" onclick="document.getElementById('entry-modal').classList.add('hidden')">Cancel</button>
<button className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2" id="btn-inject-data">
                        Inject Data <iconify-icon icon="solar:server-square-update-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>



    </>
  );
}
