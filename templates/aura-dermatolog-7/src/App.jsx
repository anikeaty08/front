import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const app = {
            state: { currentTab: 'dashboard' },

            navigate(tab) {
                this.state.currentTab = tab;
                
                // Animate Out current
                document.querySelectorAll('.view-section').forEach(el => {
                    if(!el.classList.contains('hidden')) {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(-10px)';
                        setTimeout(() => el.classList.add('hidden'), 200);
                    }
                });

                // Animate In new
                setTimeout(() => {
                    const activeView = document.getElementById(`view-${tab}`);
                    activeView.style.opacity = '0';
                    activeView.style.transform = 'translateY(10px)';
                    activeView.classList.remove('hidden');
                    
                    // Trigger reflow
                    void activeView.offsetWidth;
                    
                    activeView.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                    activeView.style.opacity = '1';
                    activeView.style.transform = 'translateY(0)';
                }, 200);

                // Update Sidebar Active State
                document.querySelectorAll('.nav-item').forEach(el => {
                    const icon = el.querySelector('svg');
                    if(el.dataset.tab === tab) {
                        el.classList.add('bg-zinc-100/80', 'text-zinc-900', 'shadow-sm');
                        el.classList.remove('text-zinc-500', 'hover:bg-zinc-50/50');
                    } else {
                        el.classList.remove('bg-zinc-100/80', 'text-zinc-900', 'shadow-sm');
                        el.classList.add('text-zinc-500', 'hover:bg-zinc-50/50');
                    }
                });

                const titles = { dashboard: 'Dashboard', analyze: 'Analyzer', research: 'Research', journal: 'Journal', settings: 'Settings' };
                document.getElementById('header-breadcrumb').textContent = titles[tab];
                document.getElementById('mobile-menu').classList.add('hidden');
            },

            toggleNotifications() {
                const panel = document.getElementById('notification-panel');
                if (panel.classList.contains('hidden')) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            },

            renderNav() {
                const navItems = [
                    { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
                    { id: 'analyze', icon: 'scan-line', label: 'Analyze' },
                    { id: 'research', icon: 'microscope', label: 'Research' },
                    { id: 'journal', icon: 'book-open', label: 'Journal' },
                    { id: 'settings', icon: 'settings', label: 'Settings' }
                ];

                // Desktop Nav (Icon only default, expands on hover)
                const desktopHtml = navItems.map(item => `
                    <button onclick="app.navigate('${item.id}')" data-tab="${item.id}" class="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900 relative overflow-hidden group/item">
                        <div class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            <span class="iconify" data-icon="lucide:${item.icon}" data-width="20" data-stroke-width="1.5"></span>
                        </div>
                        <span class="absolute left-12 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-geist">${item.label}</span>
                    </button>
                `).join('');

                document.getElementById('sidebar-nav').innerHTML = desktopHtml;

                // Mobile Nav (Standard list)
                const mobileHtml = navItems.map(item => `
                    <button onclick="app.navigate('${item.id}')" class="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20">
                        <span class="iconify" data-icon="lucide:${item.icon}" data-width="18"></span>
                        ${item.label}
                    </button>
                `).join('');
                document.getElementById('mobile-nav-items').innerHTML = mobileHtml;
            },

            renderHeatmap() {
                const container = document.getElementById('heatmap-grid');
                let html = '';
                for(let w=0; w<5; w++) {
                    html += '<div class="flex flex-col gap-1.5">';
                    for(let d=0; d<7; d++) {
                        const active = Math.random() > 0.6;
                        const color = active ? (Math.random() > 0.5 ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]' : 'bg-emerald-200') : 'bg-zinc-100/50';
                        html += `<div class="w-3 h-3 md:w-4 md:h-4 rounded-full ${color} transition-all duration-300 hover:scale-125 cursor-pointer"></div>`;
                    }
                    html += '</div>';
                }
                container.innerHTML = html;
            },

            analyzeProduct() {
                const btn = document.getElementById('analyze-btn');
                const originalText = btn.innerHTML;
                const results = document.getElementById('analysis-results');
                
                btn.innerHTML = '<div class="loader border-white/20 border-t-white"></div>';
                btn.classList.add('opacity-80', 'cursor-not-allowed');
                results.classList.add('hidden');

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('opacity-80', 'cursor-not-allowed');
                    results.classList.remove('hidden');

                    // Score Animation
                    const score = 82;
                    const ring = document.getElementById('score-ring');
                    const circumference = 2 * Math.PI * 45;
                    const offset = circumference - (score / 100) * circumference;
                    
                    setTimeout(() => {
                        ring.style.strokeDashoffset = offset;
                        let current = 0;
                        const interval = setInterval(() => {
                            if(current >= score) clearInterval(interval);
                            document.getElementById('score-value').innerText = current++;
                        }, 10);
                    }, 100);

                    // List
                    const ingredients = [
                        { name: 'Water', safety: 'safe', desc: 'Solvent' },
                        { name: 'Niacinamide', safety: 'safe', desc: 'Active: Brightening', active: true },
                        { name: 'Phenoxyethanol', safety: 'caution', desc: 'Preservative' },
                        { name: 'Fragrance', safety: 'avoid', desc: 'Potential Irritant' }
                    ];

                    document.getElementById('ingredient-list').innerHTML = ingredients.map(ing => `
                        <li class="p-4 flex items-center justify-between group hover:bg-zinc-50/50 transition-colors">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-medium text-zinc-900 font-geist">${ing.name}</span>
                                    ${ing.active ? '<span class="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-medium">Active</span>' : ''}
                                </div>
                                <p class="text-xs text-zinc-500 font-geist">${ing.desc}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full ${ing.safety === 'safe' ? 'bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]' : ing.safety === 'caution' ? 'bg-amber-500' : 'bg-rose-500'}"></div>
                                <span class="text-[10px] font-bold uppercase text-zinc-400 font-geist tracking-wider">${ing.safety}</span>
                            </div>
                        </li>
                    `).join('');
                }, 1200);
            },

            getRecommendations() {
                const container = document.getElementById('research-results');
                container.innerHTML = `<div class="p-8 flex justify-center"><div class="loader w-8 h-8 border-zinc-200 border-t-zinc-800"></div></div>`;
                
                setTimeout(() => {
                    container.innerHTML = `
                        <div class="glass-panel rounded-2xl shadow-sm overflow-hidden animate-fade-in">
                            <div class="bg-zinc-900 px-6 py-4 flex justify-between items-center">
                                <h3 class="text-white font-medium font-geist text-sm">Protocol: Acne Control</h3>
                                <span class="text-[10px] font-bold text-zinc-400 border border-zinc-700 px-2 py-1 rounded uppercase tracking-wider">Moderate</span>
                            </div>
                            <div class="p-6 space-y-6">
                                <div class="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50 text-sm text-zinc-700 leading-relaxed font-geist">
                                    "Topical retinoids remain the mainstay of therapy. Evidence suggests combining with benzoyl peroxide increases efficacy."
                                </div>
                                <div class="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 class="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Recommended</h4>
                                        <ul class="space-y-2">
                                            <li class="text-sm flex items-center gap-2 font-geist"><div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><span class="iconify" data-icon="lucide:check" data-width="12"></span></div> Salicylic Acid (2%)</li>
                                            <li class="text-sm flex items-center gap-2 font-geist"><div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><span class="iconify" data-icon="lucide:check" data-width="12"></span></div> Niacinamide</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Avoid</h4>
                                        <ul class="space-y-2">
                                            <li class="text-sm flex items-center gap-2 font-geist"><div class="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center"><span class="iconify" data-icon="lucide:x" data-width="12"></span></div> Coconut Oil</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }, 800);
            },

            saveJournalEntry() {
                this.showToast('Daily log saved');
            },

            showToast(msg) {
                const toast = document.getElementById('toast');
                document.getElementById('toast-message').textContent = msg;
                toast.classList.remove('translate-y-24', 'opacity-0');
                setTimeout(() => toast.classList.add('translate-y-24', 'opacity-0'), 3000);
            },

            init() {
                this.renderNav();
                this.navigate('dashboard');
                this.renderHeatmap();
                
                document.addEventListener('click', (e) => {
                    const panel = document.getElementById('notification-panel');
                    const btn = document.getElementById('bell-btn');
                    if (!panel.classList.contains('hidden') && !panel.contains(e.target) && !btn.contains(e.target)) {
                        panel.classList.add('hidden');
                    }
                });
            }
        };

        document.addEventListener('DOMContentLoaded', () => app.init());
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr mix-blend-overlay pointer-events-none z-10 from-purple-100/40 via-cyan-100/40 to-cyan-100/40"></div>
<iframe className="w-full h-full scale-110" frameborder="0" src="https://my.spline.design/untitled-fTkSZQYpVYnu5qlasnlmfMtE/" style={{filter: 'contrast(1.1) saturate(1.2)'}}></iframe>
</div>

<aside className="flex-shrink-0 flex flex-col hidden md:flex glass-sidebar h-full z-50 border-r justify-between group sidebar-transition w-20 hover:w-64 absolute left-0 top-0 shadow-2xl border-white/40 shadow-slate-200/50" style={{}}>
<div className="flex flex-col h-full">

<div className="h-16 flex items-center px-0 justify-center group-hover:justify-start group-hover:px-6 transition-all duration-300 border-b border-slate-100/50" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-xs font-geist shadow-lg flex-shrink-0 bg-slate-500 default" style={{}}>A</div>
<span className="font-semibold tracking-tight text-sm font-geist opacity-0 group-hover:opacity-100 absolute left-16 transition-opacity duration-300 whitespace-nowrap">AURA</span>
</div>
</div>

<nav className="flex-1 mt-4 pt-3 pr-3 pb-3 pl-3 space-y-2" id="sidebar-nav">
<button className="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all hover:text-zinc-900 relative overflow-hidden group/item bg-zinc-100/80 text-zinc-900 shadow-sm" data-tab="dashboard" onclick="app.navigate('dashboard')">
<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
</div>
<span className="absolute left-12 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-geist">Dashboard</span>
</button>
<button className="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900 relative overflow-hidden group/item" data-tab="analyze" onclick="app.navigate('analyze')">
<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan-line" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="absolute left-12 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-geist">Analyze</span>
</button>
<button className="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900 relative overflow-hidden group/item" data-tab="research" onclick="app.navigate('research')">
<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:microscope" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="absolute left-12 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-geist">Research</span>
</button>
<button className="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900 relative overflow-hidden group/item" data-tab="journal" onclick="app.navigate('journal')">
<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="whitespace-nowrap group-hover:opacity-100 transition-opacity duration-300 delay-75 text-sm font-medium font-geist opacity-0 absolute left-12">Journal</span>
</button>
<button className="nav-item flex items-center h-10 w-full px-2.5 rounded-lg transition-all text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900 relative overflow-hidden group/item" data-tab="settings" onclick="app.navigate('settings')">
<div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<span className="absolute left-12 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-geist">Settings</span>
</button>
</nav>
</div>

<div className="p-3 border-t border-slate-100/50" style={{}}>
<button className="flex items-center gap-3 w-full p-2 rounded-lg transition-colors text-left group/profile overflow-hidden relative hover:bg-slate-50/50" onclick="app.navigate('settings')" style={{}}>
<div className="w-9 h-9 rounded-full bg-gradient-to-br border flex items-center justify-center text-xs font-medium font-geist shadow-sm flex-shrink-0 from-purple-100 to-white border-white text-cyan-600" style={{}}>AL</div>
<div className="flex-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-14 top-2.5 whitespace-nowrap">
<p className="text-xs font-semibold font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Alex Lewis</p>
<p className="text-[10px] font-geist text-cyan-600" style={{}}>Pro Plan</p>
</div>
</button>
</div>
</aside>

<div className="md:hidden fixed top-0 left-0 right-0 h-14 glass-sidebar border-b z-30 flex items-center justify-between px-4 border-white/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center font-semibold text-[10px] font-geist bg-slate-500 default" style={{}}>A</div>
<span className="font-semibold tracking-tight text-sm font-geist">AURA</span>
</div>
<button className="p-2 active:scale-95 transition-transform text-cyan-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden fixed inset-0 z-40 md:hidden animate-fade-in" id="mobile-menu">
<div className="absolute inset-0 backdrop-blur-sm bg-black/20" onclick="document.getElementById('mobile-menu').classList.add('hidden')"></div>
<div className="absolute right-0 top-0 bottom-0 w-64 glass-sidebar shadow-2xl p-4 pt-16 border-l border-white/50">
<nav className="space-y-1" id="mobile-nav-items">
<button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20" onclick="app.navigate('dashboard')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                        Dashboard
                    </button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20" onclick="app.navigate('analyze')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan-line" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Analyze
                    </button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20" onclick="app.navigate('research')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:microscope" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Research
                    </button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20" onclick="app.navigate('journal')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Journal
                    </button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-600 border-b border-white/20" onclick="app.navigate('settings')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                        Settings
                    </button>
</nav>
</div>
</div>


<main className="flex-1 relative h-full overflow-hidden pt-14 md:pt-0 md:ml-20 transition-all duration-300">

<header className="flex md:px-10 h-16 mt-2 pr-6 pl-6 items-center justify-between">
<div className="flex glass-panel text-sm rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center text-slate-600/80" style={{}}>
<span className="opacity-50">App</span>
<svg aria-hidden="true" className="iconify opacity-50 iconify--lucide" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold tracking-tight font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" id="header-breadcrumb" style={{}}>Dashboard</span>
</div>
<div className="relative z-50">
<button className="transition-colors relative p-2 rounded-full outline-none glass-panel shadow-sm hover:text-slate-800 hover:bg-white/50 text-cyan-600" id="bell-btn" onclick="app.toggleNotifications()" style={{}}>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full border z-10 hidden border-white" id="notif-dot" style={{}}></span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute top-12 right-0 w-80 glass-panel rounded-2xl shadow-2xl z-50 overflow-hidden origin-top-right hidden animate-fade-in ring-1 ring-black/5" id="notification-panel">
<div className="px-4 py-3 border-b flex justify-between items-center border-slate-100/50 bg-white/40" style={{}}>
<span className="text-xs font-semibold font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Notifications</span>
<button className="text-[10px] transition-colors font-medium font-geist hover:text-slate-900 text-cyan-600" onclick="app.markAllRead()" style={{}}>Mark all read</button>
</div>
<div className="max-h-[320px] overflow-y-auto">
<div className="p-4 border-b transition-colors flex gap-3 cursor-pointer group border-slate-50/50 hover:bg-white/40" style={{}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border shadow-sm bg-amber-50 text-amber-600 border-amber-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<div>
<div className="flex justify-between items-start">
<p className="text-xs font-semibold font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>High UV Alert</p>
<span className="text-[9px] font-geist text-cyan-600" style={{}}>Now</span>
</div>
<p className="text-xs mt-0.5 leading-snug font-geist text-cyan-600" style={{}}>UV Index is currently 7.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="h-[calc(100vh-5rem)] overflow-y-auto md:px-10 scroll-smooth no-scrollbar pt-2 pb-10" id="main-scroll">

<div className="view-section space-y-6 max-w-6xl mx-auto fade-in" id="view-dashboard" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="flex flex-col mb-6 gap-x-1 gap-y-1">
<h1 className="text-3xl font-semibold tracking-tight font-space-grotesk mix-blend-multiply text-slate-600" style={{}}>Good morning, Alex</h1>
<p className="text-sm font-geist glass-panel inline-block px-3 py-1 rounded-full self-start text-cyan-600" style={{}}>Your skin wellness overview for <span className="font-medium text-slate-800" id="current-date" style={{}}>Friday, Dec 5</span>.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-4 glass-panel rounded-2xl shadow-sm overflow-hidden flex flex-col">
<div className="p-4 border-b flex items-center justify-between border-slate-100/50 bg-white/40" style={{}}>
<h3 className="uppercase text-xs font-semibold tracking-wider font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Daily Routine</h3>
<span className="text-xs font-mono font-geist px-2 py-0.5 rounded-full bg-white/50 text-cyan-600" style={{}}>2/4</span>
</div>
<div className="p-3 space-y-1">
<label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer group transition-all duration-200 hover:bg-white/50">
<div className="relative flex items-center">
<input checked="" className="peer w-5 h-5 rounded-md focus:ring-slate-900/20 checked:bg-slate-900 checked:border-slate-900 transition-colors bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default border-slate-300 text-slate-600" style={{}} type="checkbox"/>
</div>
<span className="text-sm peer-checked:text-slate-400 peer-checked:line-through transition-all font-geist decoration-slate-300 text-cyan-600" style={{}}>Gentle Cleanser</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer group transition-all duration-200 hover:bg-white/50">
<input checked="" className="w-5 h-5 rounded-md focus:ring-slate-900/20 checked:bg-slate-900 transition-colors bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default border-slate-300 text-slate-600" style={{}} type="checkbox"/>
<span className="text-sm line-through transition-all font-geist decoration-slate-300 text-cyan-600" style={{}}>Vitamin C Serum</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer group transition-all duration-200 hover:bg-white/50">
<input className="w-5 h-5 rounded-md focus:ring-slate-900/20 transition-colors bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default border-slate-400 text-slate-600" style={{}} type="checkbox"/>
<span className="text-sm font-medium transition-all font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Moisturizer + SPF</span>
</label>
<label className="flex items-center gap-3 p-2 rounded-xl cursor-pointer group transition-all duration-200 hover:bg-white/50">
<input className="w-5 h-5 rounded-md focus:ring-slate-900/20 transition-colors bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default border-slate-400 text-slate-600" style={{}} type="checkbox"/>
<span className="text-sm font-medium transition-all font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Night Repair Cream</span>
</label>
</div>
</div>

<div className="md:col-span-4 flex flex-col glass-panel rounded-2xl p-6 shadow-sm justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none bg-amber-100/50"></div>
<div className="flex items-start justify-between relative z-10">
<div className="">
<h3 className="text-sm font-semibold font-geist text-slate-600" style={{}}>Environment</h3>
<p className="text-xs mt-0.5 font-geist flex items-center gap-1 text-cyan-600" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> San Francisco, CA</p>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm bg-white/80 text-cyan-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 relative z-10">
<div className="">
<div className="text-4xl font-medium tracking-tighter font-space-grotesk text-slate-600" style={{}}>72°</div>
<div className="text-xs font-geist font-medium text-cyan-600" style={{}}>Sunny</div>
</div>
<div className="space-y-2 pt-1">
<div className="flex items-center justify-between text-xs p-1.5 rounded-lg bg-white/40">
<span className="font-geist text-cyan-600" style={{}}>UV Index</span>
<span className="font-bold font-geist text-amber-600">High (7)</span>
</div>
<div className="flex items-center justify-between text-xs p-1.5 rounded-lg bg-white/40">
<span className="font-geist text-cyan-600" style={{}}>Humidity</span>
<span className="font-bold font-geist text-cyan-600" style={{}}>45%</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 glass-panel rounded-2xl shadow-sm p-6 flex flex-col">
<h3 className="text-sm font-semibold mb-4 font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Wellness Trend</h3>
<div className="flex-1 flex items-end gap-3 h-32 w-full pb-2 px-1">

<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '40%'}}></div>
<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '65%'}}></div>
<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '50%'}}></div>
<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '80%'}}></div>
<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '60%'}}></div>
<div className="flex-1 rounded-full relative group transition-all bg-slate-900/5 hover:bg-slate-900/10" style={{height: '75%'}}></div>
<div className="flex-1 rounded-full relative group shadow-lg bg-slate-500 shadow-slate-900/20" style={{height: '90%'}}>
<div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] px-2 py-1 rounded-md font-geist transition-opacity bg-slate-500 default" style={{}}>Today</div>
</div>
</div>
<div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100/50" style={{}}>
<span className="px-2 py-0.5 rounded-md text-xs font-semibold flex items-center gap-1 font-geist text-cyan-700 bg-cyan-100/50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg> 12%
                            </span>
<span className="text-xs font-geist text-cyan-600" style={{}}>improvement this week</span>
</div>
</div>
</div>
</div>

<div className="view-section max-w-4xl mx-auto space-y-6 hidden" id="view-analyze">
<div className="text-center space-y-3 mb-10">
<h1 className="text-3xl tracking-tight font-space-grotesk font-semibold mix-blend-multiply bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Ingredient Analyzer</h1>
<p className="text-sm max-w-md mx-auto font-geist glass-panel px-4 py-2 rounded-full inline-block text-cyan-600" style={{}}>Paste a product's ingredient list below to decode safety.</p>
</div>

<div className="glass-panel rounded-2xl shadow-lg p-1.5 transition-all focus-within:ring-2 ring-black/5">
<div className="p-3 border-b border-slate-100/50" style={{}}>
<input className="w-full text-sm font-medium placeholder:text-slate-400 focus:outline-none bg-transparent bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" placeholder="Product Name (Optional)" style={{}} type="text"/>
</div>
<div className="p-1">
<textarea className="w-full p-3 text-sm resize-none focus:outline-none rounded-xl bg-white/30 text-cyan-600" id="ingredient-input" placeholder="Paste ingredients (e.g., Water, Glycerin, Niacinamide...)" rows="6" style={{}}></textarea>
</div>
<div className="p-2 flex justify-between items-center">
<button className="text-xs flex items-center gap-1.5 font-geist px-2 py-1 rounded-lg transition-colors hover:text-slate-800 hover:bg-white/50 text-cyan-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg> Upload Label
                        </button>
<button className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg flex items-center gap-2 transform active:scale-95 bg-slate-500 default hover:bg-slate-800 shadow-slate-900/20" id="analyze-btn" onclick="app.analyzeProduct()" style={{}}>
<span className="font-geist">Analyze</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</button>
</div>
</div>

<div className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" id="analysis-results">
<div className="glass-panel rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center text-center">
<div className="relative w-36 h-36 mb-4">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(0,0,0,0.05)" strokeWidth="6"></circle>
<circle className="transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)]" cx="50" cy="50" fill="none" id="score-ring" r="45" stroke="#10b981" stroke-dasharray="283" stroke-dashoffset="283" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl tracking-tighter font-space-grotesk font-semibold bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" id="score-value" style={{}}>0</span>
<span className="text-[10px] uppercase tracking-widest font-bold font-geist mt-1 text-cyan-600" style={{}}>Score</span>
</div>
</div>
</div>
<div className="md:col-span-2 glass-panel rounded-2xl shadow-sm overflow-hidden flex flex-col">
<div className="border-b flex border-slate-100/50" style={{}}>
<button className="px-6 py-4 text-sm font-semibold border-b-2 font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default border-slate-900 bg-white/40 text-slate-600" style={{}}>Ingredients</button>
</div>
<div className="p-0 overflow-y-auto max-h-[300px]">
<ul className="divide-y divide-slate-50/50" id="ingredient-list" style={{}}></ul>
</div>
</div>
</div>
</div>

<div className="view-section max-w-5xl mx-auto space-y-6 hidden" id="view-research">
<div className="flex items-center justify-between glass-panel p-2 rounded-xl">
<h1 className="text-lg font-semibold tracking-tight font-geist px-4 bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Research Hub</h1>
<div className="relative w-64">
<svg aria-hidden="true" className="absolute left-3 top-2.5 iconify iconify--lucide text-red-600" data-icon="lucide:search" data-width="16" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="w-full pl-10 pr-3 py-2 text-sm border-none rounded-lg focus:ring-2 focus:ring-slate-200 focus:outline-none transition-colors bg-white/50" placeholder="Search conditions..." style={{}} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-4 space-y-4">
<div className="glass-panel rounded-2xl shadow-sm p-6">
<h3 className="text-sm font-semibold mb-5 font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Get Recommendations</h3>
<div className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium font-geist text-cyan-600" style={{}}>Skin Condition</label>
<div className="relative">
<select className="w-full p-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:outline-none appearance-none font-geist bg-white/60 border-white/40" id="condition-select" style={{}}>
<option value="acne">Acne Vulgaris</option>
<option value="eczema">Eczema (Atopic)</option>
<option value="rosacea">Rosacea</option>
<option value="dry">Xerosis (Dry Skin)</option>
<option value="aging">Photoaging</option>
</select>
<svg className="absolute right-3 top-3 pointer-events-none w-4 h-4 text-red-600" fill="none" stroke="currentColor" style={{}} viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-colors shadow-lg mt-2 font-geist bg-slate-500 default hover:bg-slate-800 shadow-slate-900/20" onclick="app.getRecommendations()" style={{}}>
                                    Generate Protocol
                                </button>
</div>
</div>
</div>
<div className="md:col-span-8 space-y-4" id="research-results">
<div className="glass-panel rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center text-center min-h-[300px] text-cyan-600" style={{}}>
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm backdrop-blur-md bg-white/50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm font-geist">Select a condition to view treatment protocols.</p>
</div>
</div>
</div>
</div>

<div className="view-section max-w-5xl mx-auto space-y-6 hidden" id="view-journal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 space-y-6">
<div className="glass-panel rounded-2xl shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Activity &amp; Severity Log</h3>
<div className="flex items-center gap-2 text-[10px] px-2 py-1 rounded-full bg-white/40 text-cyan-600" style={{}}>
<span className="font-geist">Healthy</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-cyan-300"></div>
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
</div>
<span className="font-geist">Flare-up</span>
</div>
</div>
<div className="flex justify-between" id="heatmap-grid"><div className="flex flex-col gap-1.5"><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div></div><div className="flex flex-col gap-1.5"><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div></div><div className="flex flex-col gap-1.5"><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div></div><div className="flex flex-col gap-1.5"><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-200 transition-all duration-300 hover:scale-125 cursor-pointer"></div></div><div className="flex flex-col gap-1.5"><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div><div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-100/50 transition-all duration-300 hover:scale-125 cursor-pointer"></div></div></div>
</div>
</div>
<div className="md:col-span-4">
<div className="glass-panel rounded-2xl shadow-sm p-6 sticky top-20">
<h3 className="text-sm font-semibold mb-5 font-geist bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Log Today's Progress</h3>
<div className="space-y-5">
<div className="space-y-3">
<div className="flex justify-between items-end">
<label className="text-xs font-medium font-geist text-cyan-600" style={{}}>Skin Condition</label>
<span className="text-2xl font-bold font-space-grotesk bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" id="severity-display" style={{}}>6<span className="text-xs font-normal ml-1 font-geist text-cyan-600" style={{}}>/10</span></span>
</div>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-slate-900" max="10" min="1" oninput="document.getElementById('severity-display').innerHTML = this.value + '&lt;span class=\'text-xs font-normal text-zinc-400 ml-1 font-geist\'&gt;/10&lt;/span&gt;'" style={{}} type="range" value="6"/>
</div>
<textarea className="w-full p-3 text-sm border rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:outline-none resize-none h-24 placeholder:text-slate-400 bg-white/50 border-white/40 text-slate-700" placeholder="Add notes..." style={{}}></textarea>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-colors shadow-md font-geist bg-slate-500 default hover:bg-slate-800" onclick="app.saveJournalEntry()" style={{}}>
                                    Save Entry
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="view-section max-w-2xl mx-auto space-y-6 hidden" id="view-settings">
<h1 className="text-2xl font-semibold tracking-tight font-space-grotesk px-2 bg-[conic-gradient(from_135deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] bg-[conic-gradient(from_105deg,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] to-amber-500 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] default text-slate-600" style={{}}>Settings</h1>
<div className="glass-panel rounded-2xl shadow-sm overflow-hidden">
<div className="p-8 space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider font-geist text-cyan-600" style={{}}>Display Name</label>
<input className="w-full p-3 text-sm border rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:outline-none bg-white/50 border-white/40" style={{}} type="text" value="Alex Lewis"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider font-geist text-cyan-600" style={{}}>Age</label>
<input className="w-full p-3 text-sm border rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:outline-none bg-white/50 border-white/40" style={{}} type="number" value="28"/>
</div>
</div>
</div>
<div className="p-4 border-t flex justify-end bg-slate-50/50 border-slate-100/50" style={{}}>
<button className="px-5 py-2 rounded-xl text-sm font-medium shadow-lg font-geist bg-slate-500 default shadow-slate-900/10" onclick="app.showToast('Profile updated')" style={{}}>
                            Save Changes
                        </button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 transform transition-all duration-500 z-[100] translate-y-24 opacity-0" id="toast">
<div className="backdrop-blur-md px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium ring-1 default bg-slate-900/90 ring-white/10" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-emerald-400" data-icon="lucide:check-circle" data-width="16" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="font-geist" id="toast-message">Updated</span>
</div>
</div>



    </>
  );
}
