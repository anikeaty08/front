import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init
        document.addEventListener("DOMContentLoaded", () => {
            lucide.createIcons();
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
        });

        const landingView = document.getElementById('landing-view');
        const loginModal = document.getElementById('login-modal');
        const loginContent = document.getElementById('login-content');
        const dashboardView = document.getElementById('dashboard-view');
        const loginError = document.getElementById('login-error');
        const loginBtn = document.getElementById('login-btn');
        const rightSidebar = document.getElementById('right-sidebar');
        
        // State
        let currentUserRole = 'user'; // 'user' or 'admin'
        let currentLang = 'EN';

        // --- View Logic ---

        function toggleLogin() {
            if (loginModal.classList.contains('hidden')) {
                loginModal.classList.remove('hidden');
                loginError.classList.add('hidden');
                loginBtn.disabled = false;
                loginBtn.innerHTML = '<span>Initialize Session</span>';
                setTimeout(() => {
                    loginModal.classList.remove('opacity-0');
                    loginContent.classList.remove('scale-95');
                    loginContent.classList.add('scale-100');
                    document.getElementById('login-user').focus();
                }, 10);
            } else {
                loginModal.classList.add('opacity-0');
                loginContent.classList.remove('scale-100');
                loginContent.classList.add('scale-95');
                setTimeout(() => {
                    loginModal.classList.add('hidden');
                }, 300);
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const user = document.getElementById('login-user').value.toLowerCase();
            const pass = document.getElementById('login-pass').value.toLowerCase();

            // Check credentials
            let valid = false;
            if (user === 'admin' && pass === 'admin') {
                valid = true;
                currentUserRole = 'admin';
            } else if (user === 'user' && pass === 'user') {
                valid = true;
                currentUserRole = 'user';
            }

            if (!valid) {
                loginError.classList.remove('hidden');
                loginContent.classList.remove('shake');
                void loginContent.offsetWidth; 
                loginContent.classList.add('shake');
                return;
            }

            // Success Animation
            loginBtn.innerHTML = '<div class="loader mx-auto"></div>';
            loginBtn.disabled = true;

            setTimeout(() => {
                loginModal.classList.add('opacity-0');
                setTimeout(() => {
                    loginModal.classList.add('hidden');
                    landingView.style.opacity = '0';
                    setTimeout(() => {
                        landingView.style.display = 'none'; 
                        dashboardView.classList.remove('hidden');
                        dashboardView.style.display = 'flex';
                        void dashboardView.offsetWidth;
                        dashboardView.style.opacity = '1';
                        
                        // Setup Dashboard based on Role
                        setupDashboard();
                        lucide.createIcons();
                    }, 400);
                }, 200);
            }, 800);
        }

        function setupDashboard() {
            // Update User Info
            document.getElementById('user-name-display').innerText = currentUserRole === 'admin' ? 'Administrator' : 'Commercial User';
            document.getElementById('user-role-display').innerText = currentUserRole === 'admin' ? 'System Operator' : 'Standard Access';
            
            // Switch to Dashboard tab by default
            switchPage('dashboard');

            // Render Documents based on Permissions
            renderDocuments();
        }

        function renderDocuments() {
            const grid = document.getElementById('docs-grid');
            const docs = [
                { name: 'Corporate Image', role: 'admin' }, // write: admin, read: user
                { name: 'Product Prices', role: 'admin' },
                { name: 'Policies', role: 'admin' },
                { name: 'Onboarding', role: 'admin' },
                { name: 'Science', role: 'admin' },
                { name: 'Compensation', role: 'admin' },
                { name: 'Best Practices', role: 'admin' },
                { name: 'My Documents', role: 'user' } // write: both usually, simplified here
            ];

            let html = '';
            docs.forEach(doc => {
                let permissionIcon = '';
                let statusText = '';
                
                // Logic: Admin can write all except maybe "My Docs" depending on interpretation, 
                // but requirement says Admin = Read/Upload, User = Read Only (Download) for most.
                
                if (currentUserRole === 'admin') {
                    permissionIcon = '<svg class="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>';
                    statusText = 'Read & Write';
                } else {
                    if (doc.name === 'My Documents') {
                         permissionIcon = '<svg class="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>';
                         statusText = 'Read & Write';
                    } else {
                        permissionIcon = '<svg class="w-3 h-3 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>';
                        statusText = 'Read Only';
                    }
                }

                html += `
                <div class="p-6 rounded-xl border border-white/10 bg-[#0a0a0a] hover:bg-white/5 transition group cursor-pointer">
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-10 h-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                           <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
                        </div>
                        <div class="p-1 rounded bg-white/5 border border-white/5" title="${statusText}">${permissionIcon}</div>
                    </div>
                    <h3 class="text-white font-medium text-sm">${doc.name}</h3>
                    <p class="text-[10px] text-slate-500 mt-1">${statusText}</p>
                </div>`;
            });
            grid.innerHTML = html;
        }

        function switchPage(pageId) {
            // Update Headers
            document.getElementById('header-page').innerText = pageId.charAt(0).toUpperCase() + pageId.slice(1);
            document.getElementById('agent-context-name').innerText = pageId.charAt(0).toUpperCase() + pageId.slice(1);

            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected
            const target = document.getElementById('page-' + pageId);
            if(target) target.classList.remove('hidden');

            // Update Nav State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-white', 'bg-white/5', 'border-white/5');
                el.classList.add('text-slate-400');
                if(el.id === 'nav-' + pageId) {
                    el.classList.remove('text-slate-400');
                    el.classList.add('text-white', 'bg-white/5', 'border-white/5');
                }
            });
        }

        function toggleRightSidebar() {
            if (rightSidebar.classList.contains('w-0')) {
                rightSidebar.classList.remove('w-0');
                rightSidebar.classList.add('w-80');
            } else {
                rightSidebar.classList.add('w-0');
                rightSidebar.classList.remove('w-80');
            }
        }

        function exitDashboard() {
            dashboardView.style.opacity = '0';
            setTimeout(() => {
                dashboardView.classList.add('hidden');
                dashboardView.style.display = 'none';
                landingView.style.display = 'block';
                void landingView.offsetWidth; 
                landingView.style.opacity = '1';
                lucide.createIcons();
                loginBtn.innerHTML = '<span>Initialize Session</span>';
                loginBtn.disabled = false;
                document.getElementById('login-pass').value = ''; // clear pass
            }, 500);
        }

        function toggleThemeUI() {
            const btn = document.getElementById('theme-toggle');
            // Since we can't change tailwind config on the fly without rebuild, we just visual mock toggle
            // In a real app, this would toggle 'dark' class on html
            btn.classList.add('rotate-180');
            setTimeout(() => btn.classList.remove('rotate-180'), 300);
            alert("Dark/Light Mode toggled (Visual representation only in this strict mode)");
        }
        
        function toggleLang() {
            currentLang = currentLang === 'EN' ? 'ES' : 'EN';
            document.getElementById('lang-display').innerText = currentLang;
            // In real app, this would swap text strings
        }

        function showUserDetail(name, role, rank, warning = false) {
            const popup = document.getElementById('user-popup');
            document.getElementById('popup-name').innerText = name;
            document.getElementById('popup-role').innerText = role;
            document.getElementById('popup-rank').innerText = rank;
            
            const warnEl = document.getElementById('popup-warning');
            if(warning) warnEl.classList.remove('hidden');
            else warnEl.classList.add('hidden');

            popup.classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full transition-opacity duration-500 block" id="landing-view">

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onclick="window.scrollTo(0,0)">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<span className="text-white font-semibold tracking-tight text-lg">LINARIS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#solutions">Agents</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">

<button className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors" onclick="toggleLang()">
<svg className="lucide lucide-globe w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span id="lang-display">EN</span>
</button>
<button className="hover:bg-white transition-all hover:text-black text-xs font-semibold text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5" onclick="toggleLogin()">
                        Sign In
                    </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden mesh-bg min-h-screen flex flex-col justify-center">
<div className="contrast-150 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Executive Summary 2024
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        Leadership for the <br/>
<span className="gradient-text">Agentic AI Era</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed font-light">
                        LINARIS is not for the masses. It's a strategic partner for the top 10% of leaders who understand that the future of MLM is not built with effort, but with intelligent systems.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2" onclick="toggleLogin()">
                            Start Platform
                            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden h-[450px] flex flex-col">
<div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center">
<svg className="lucide lucide-bot w-5 h-5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Linaris Architect</h3>
<p className="text-[10px] text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online</p>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-2" id="landing-chat-feed">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex-shrink-0 flex items-center justify-center mt-1"><svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div>
<div className="bg-white/5 rounded-lg rounded-tl-none p-3 text-xs text-slate-300 leading-relaxed border border-white/5">
                                    Hello. I'm capable of analyzing your network structure and predicting churn vectors. How can I assist your leadership strategy today?
                                </div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<div className="relative">
<input className="w-full bg-black/50 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Ask about 'Churn Stopper' or 'Empire Builder'..." type="text"/>
<button className="absolute right-2 top-2.5 text-indigo-400 hover:text-white transition-colors">
<svg className="lucide lucide-send-horizontal w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path><path d="M6 12h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]" id="solutions">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">From "Human-First" to "AI-First"</h2>
<p className="text-slate-500 max-w-2xl mx-auto">The traditional MLM model is broken. Linaris fixes the structural pain points with autonomous precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-red-500/10 hover:border-red-500/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-users-2 w-5 h-5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="S 14 9 14 14.5"></path><path d="M21 21v-2a4 4 0 0 0-3-3.87"></path><path d="M3 21v-2a4 4 0 0 1 3-3.87"></path><path d="M9 10a4 4 0 1 1 8 0"></path><path d="M9 21v-1.6c0-2.2 2-3.4 4-3.4s4 1.2 4 3.4v1.6"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-2">Churn Crisis</h3>
<p className="text-sm text-slate-500 mb-4">70% drop out in year one due to low profitability and social stigma.</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs font-semibold text-indigo-400">Solution: Predictive Behavior Agent</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-orange-500/10 hover:border-orange-500/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-clock w-5 h-5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="text-white text-lg font-medium mb-2">Time Arbitrage</h3>
<p className="text-sm text-slate-500 mb-4">80% of leadership time is wasted on micromanagement and low-value tasks.</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs font-semibold text-indigo-400">Solution: Project &amp; Community Agent</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-yellow-500/10 hover:border-yellow-500/20 transition-all">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-alert w-5 h-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-2">Regulatory Risk</h3>
<p className="text-sm text-slate-500 mb-4">FTC scrutiny on income claims poses a massive financial risk.</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs font-semibold text-indigo-400">Solution: Compliance Agent</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Strategic Investment</h2>
<p className="text-slate-500">Not software spend, but direct asset investment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl glass flex flex-col">
<div className="mb-4 text-white font-medium">Base</div>
<div className="text-3xl font-bold text-white mb-2">$299<span className="text-sm font-normal text-slate-500">/mo</span></div>
<p className="text-xs text-slate-400 mb-6">"Churn Stopper"</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 50 Licenses</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Predictive Agent</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition-colors">Select Base</button>
</div>

<div className="p-8 rounded-2xl glass bg-white/5 border-indigo-500/30 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500 text-[10px] font-bold text-white rounded-bl-lg">POPULAR</div>
<div className="mb-4 text-white font-medium">Pro</div>
<div className="text-3xl font-bold text-white mb-2">$599<span className="text-sm font-normal text-slate-500">/mo</span></div>
<p className="text-xs text-slate-400 mb-6">"The Duplicator"</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 100 Licenses</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Content Agent</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Auto-Funnels</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition-colors">Select Pro</button>
</div>

<div className="p-8 rounded-2xl glass flex flex-col">
<div className="mb-4 text-white font-medium">Enterprise</div>
<div className="text-3xl font-bold text-white mb-2">$999+<span className="text-sm font-normal text-slate-500">/mo</span></div>
<p className="text-xs text-slate-400 mb-6">"Empire Builder"</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full API Access</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom Agents</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 24/7 Support</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 text-center bg-[#050505]">
<p className="text-xs text-slate-600">© 2024 Linaris Network Technologies. "Empire Builder" System Operational.</p>
</footer>
</div>

<div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="login-modal">
<div className="w-full max-w-[400px] bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl relative transform scale-95 transition-transform duration-300 overflow-hidden" id="login-content">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10 p-1" onclick="toggleLogin()">
<svg className="lucide lucide-x w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="p-8">
<div className="mb-8">
<h2 className="text-xl font-medium text-white mb-2 tracking-tight">Access Terminal</h2>
<p className="text-sm text-slate-500">Authenticate to enter Linaris Network.</p>
</div>
<form className="space-y-4" id="loginForm">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">Username</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700" id="login-user" placeholder="user or admin" type="text" value="admin"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-300">Password</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700" id="login-pass" placeholder="Same as username" type="password" value="admin"/>
</div>
<div className="hidden flex items-center gap-2 text-xs text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20" id="login-error">
<svg className="lucide lucide-alert-circle w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                        Invalid credentials. Use user/user or admin/admin.
                    </div>
<button className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded-lg hover:bg-slate-200 active:scale-[0.98] transition-all mt-2 flex items-center justify-center gap-2 shadow-lg shadow-white/5" id="login-btn" type="submit">
<span>Initialize Session</span>
</button>
</form>
<div className="mt-4 text-[10px] text-center text-slate-600">
                    Protected by Quantum Encryption Layer v4.2
                </div>
</div>
</div>
</div>

<div className="hidden min-h-screen flex bg-[#050505] fixed inset-0 z-[100] overflow-hidden opacity-0 transition-opacity duration-500" id="dashboard-view">

<aside className="w-64 border-r border-white/5 flex flex-col h-full bg-[#050505] z-20 flex-shrink-0">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-sm mr-3"></div>
<span className="text-white font-medium tracking-tight">LINARIS</span>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-1">
<div className="text-[10px] font-bold text-slate-600 px-3 py-2 mt-2 uppercase tracking-wider">Main Menu</div>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5 font-medium transition-colors" id="nav-dashboard" onclick="switchPage('dashboard')">
<svg className="lucide lucide-layout-dashboard w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" id="nav-tasks" onclick="switchPage('tasks')">
<svg className="lucide lucide-check-square w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> Tareas
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" id="nav-documents" onclick="switchPage('documents')">
<svg className="lucide lucide-file-text w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Documentos
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" id="nav-team" onclick="switchPage('team')">
<svg className="lucide lucide-network w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg> Equipo
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" id="nav-research" onclick="switchPage('research')">
<svg className="lucide lucide-search w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> Research
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" id="nav-campaigns" onclick="switchPage('campaigns')">
<svg className="lucide lucide-megaphone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg> Campañas
                </button>
</div>
<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/5 rounded-md transition-colors" onclick="exitDashboard()">
<svg className="lucide lucide-log-out w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Log Out
                </button>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur sticky top-0 z-10">
<div className="flex items-center text-sm breadcrumbs text-slate-500">
<span id="header-section">Main</span><span className="mx-2 text-slate-700">/</span><span className="text-white" id="header-page">Dashboard</span>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-slate-400 hover:bg-white/5 hover:text-white transition-colors" id="theme-toggle" onclick="toggleThemeUI()">
<svg className="lucide lucide-moon w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="p-2 rounded-full text-slate-400 hover:bg-white/5 hover:text-white transition-colors relative">
<svg className="lucide lucide-bell w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#050505]"></span>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-white/10">
<div className="text-right hidden sm:block">
<div className="text-xs font-medium text-white" id="user-name-display">Admin User</div>
<div className="text-[10px] text-indigo-400" id="user-role-display">System Operator</div>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white ring-2 ring-indigo-500/20">U</div>
</div>

<button className="ml-2 p-2 rounded-md bg-white/5 text-slate-400 hover:text-white transition-colors" onclick="toggleRightSidebar()">
<svg className="lucide lucide-panel-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="15" x2="15" y1="3" y2="21"></line></svg>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-8 relative" id="main-content-container">

<div className="page-view fade-in" id="page-dashboard">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Overview</h2>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
<div className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium text-slate-500">Predictive Revenue</p>
<h4 className="text-2xl font-medium text-white mt-1">$45,231</h4>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium text-slate-500">Churn Risk</p>
<h4 className="text-2xl font-medium text-white mt-1 text-red-400">12 Users</h4>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium text-slate-500">Compliance Score</p>
<h4 className="text-2xl font-medium text-white mt-1 text-emerald-400">98%</h4>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a]">
<p className="text-xs font-medium text-slate-500">Team Growth</p>
<h4 className="text-2xl font-medium text-white mt-1">+8.4%</h4>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6">
<h3 className="text-sm font-medium text-white mb-6">Agent Events Stream</h3>
<div className="space-y-6">

<div className="flex gap-4 group">
<div className="mt-1 relative"><div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div><div className="absolute top-8 left-4 w-px h-full bg-white/5 group-last:hidden"></div></div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Predictive</span>
<p className="text-xs text-slate-300 font-medium">Risk Detected: User "Marta G."</p>
</div>
<p className="text-xs text-slate-500 mt-1">High probability of churn (85%) detected due to lack of activity in 14 days.</p>
</div>
<span className="text-[10px] text-slate-600 ml-auto">2m</span>
</div>

<div className="flex gap-4 group">
<div className="mt-1 relative"><div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg></div><div className="absolute top-8 left-4 w-px h-full bg-white/5 group-last:hidden"></div></div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">Compliance</span>
<p className="text-xs text-slate-300 font-medium">Content Flagged</p>
</div>
<p className="text-xs text-slate-500 mt-1">Post by "Team Alpha" flagged for unauthorized income claim. Auto-quarantined.</p>
</div>
<span className="text-[10px] text-slate-600 ml-auto">15m</span>
</div>

<div className="flex gap-4 group">
<div className="mt-1 relative"><div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path></svg></div></div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Manager</span>
<p className="text-xs text-slate-300 font-medium">Daily Task Assignment</p>
</div>
<p className="text-xs text-slate-500 mt-1">Distributed 45 new leads to "Gold Tier" distributors based on availability.</p>
</div>
<span className="text-[10px] text-slate-600 ml-auto">1h</span>
</div>
</div>
</div>
</div>

<div className="page-view hidden fade-in" id="page-tasks">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">Task Manager</h2>
<div className="flex bg-white/5 rounded-lg p-1 gap-1">
<button className="px-3 py-1 text-xs font-medium text-black bg-white rounded shadow-sm">Table</button>
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">Kanban</button>
<button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">Calendar</button>
</div>
</div>

<div className="flex gap-3 mb-6">
<select className="bg-[#111] border border-white/10 text-xs text-white rounded px-3 py-2"><option>Filter by User</option></select>
<select className="bg-[#111] border border-white/10 text-xs text-white rounded px-3 py-2"><option>Status: All</option></select>
<select className="bg-[#111] border border-white/10 text-xs text-white rounded px-3 py-2"><option>Date: All Time</option></select>
</div>

<div className="border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a]">
<table className="w-full text-left text-sm text-slate-400">
<thead className="bg-white/5 text-xs uppercase font-medium text-slate-300">
<tr>
<th className="px-6 py-4">Description</th>
<th className="px-6 py-4">User</th>
<th className="px-6 py-4">Type</th>
<th className="px-6 py-4">Due Date</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">AI Summary</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-white font-medium">Follow up with Lead #492</td>
<td className="px-6 py-4 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-500/20 text-[10px] flex items-center justify-center text-blue-300">JD</div> John Doe</td>
<td className="px-6 py-4"><span className="bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-1 rounded">Lead Venta</span></td>
<td className="px-6 py-4">Oct 24, 2024</td>
<td className="px-6 py-4"><span className="text-yellow-400 text-xs">● Pending</span></td>
<td className="px-6 py-4"><svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></td>
<td className="px-6 py-4 text-right"><button className="text-indigo-400 hover:text-white">View</button></td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 text-white font-medium">Onboard New Team</td>
<td className="px-6 py-4 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[10px] flex items-center justify-center text-emerald-300">AS</div> Ana S.</td>
<td className="px-6 py-4"><span className="bg-pink-500/10 text-pink-400 text-[10px] px-2 py-1 rounded">Team Building</span></td>
<td className="px-6 py-4">Oct 25, 2024</td>
<td className="px-6 py-4"><span className="text-emerald-400 text-xs">● Done</span></td>
<td className="px-6 py-4"><svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></td>
<td className="px-6 py-4 text-right"><button className="text-indigo-400 hover:text-white">View</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="page-view hidden fade-in" id="page-documents">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Documents</h2>
<p className="text-sm text-slate-500 mb-8">Single Source of Truth. Access managed by Protocol Level.</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="docs-grid">

</div>
</div>

<div className="page-view hidden fade-in" id="page-team">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Network Hierarchy</h2>
<div className="flex flex-col items-center overflow-x-auto pb-12">

<div className="relative group cursor-pointer" onclick="showUserDetail('Alexander Great', 'Commercial Leader', 'Diamond')">
<div className="w-16 h-16 rounded-full border-2 border-indigo-500 bg-slate-800 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] z-10 relative">AG</div>
<div className="mt-2 text-center"><p className="text-sm text-white font-medium">Alexander</p><p className="text-[10px] text-indigo-400">Leader</p></div>
<div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse border border-black" title="Action Needed"></div>
</div>

<div className="h-12 w-px bg-slate-700 my-2"></div>
<div className="w-[400px] h-px bg-slate-700 mb-8 relative">
<div className="absolute left-0 top-0 h-4 w-px bg-slate-700"></div>
<div className="absolute left-1/2 top-0 h-4 w-px bg-slate-700"></div>
<div className="absolute right-0 top-0 h-4 w-px bg-slate-700"></div>
</div>

<div className="flex gap-24">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-white/20 bg-slate-900 flex items-center justify-center text-slate-300 text-sm hover:border-white transition cursor-pointer" onclick="showUserDetail('Sarah J.', 'Commercial', 'Gold')">SJ</div>
<div className="mt-2 text-center"><p className="text-xs text-slate-300">Sarah</p></div>

<div className="h-8 w-px bg-slate-800 my-1"></div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-white/20 bg-slate-900 flex items-center justify-center text-slate-300 text-sm hover:border-white transition cursor-pointer" onclick="showUserDetail('Mike T.', 'Commercial', 'Silver')">MT</div>
<div className="mt-2 text-center"><p className="text-xs text-slate-300">Mike</p></div>
<div className="h-8 w-px bg-slate-800 my-1"></div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-red-500/50 bg-slate-900 flex items-center justify-center text-slate-300 text-sm hover:border-red-500 transition cursor-pointer" onclick="showUserDetail('Elena R.', 'Commercial', 'Bronze', true)">ER</div>
<div className="mt-2 text-center"><p className="text-xs text-slate-300">Elena</p></div>
<div className="h-8 w-px bg-slate-800 my-1"></div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
</div>
</div>
</div>

<div className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-white/20 p-6 rounded-xl shadow-2xl z-50 w-80" id="user-popup">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-white" id="popup-name">Name</h3>
<button className="text-slate-500 hover:text-white" onclick="document.getElementById('user-popup').classList.add('hidden')"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="space-y-2 text-sm text-slate-400">
<p>Rank: <span className="text-white" id="popup-rank">Rank</span></p>
<p>Role: <span className="text-white" id="popup-role">Role</span></p>
<div className="hidden mt-4 bg-red-900/20 border border-red-500/20 p-2 rounded text-xs text-red-300" id="popup-warning">
                                Warning: Low performance detected.
                            </div>
</div>
</div>
</div>

<div className="page-view hidden fade-in h-full flex flex-col" id="page-research">
<div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-white">Market Research Agent</h2>
<p className="text-sm text-slate-500">Deep dive analysis with internet access.</p>
</div>

<div className="flex-1 bg-white/5 border border-white/10 rounded-xl mb-4 p-4 overflow-y-auto space-y-4">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 flex-shrink-0 flex items-center justify-center"><svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
<div className="space-y-2">
<div className="bg-[#1a1a1a] rounded-lg rounded-tl-none p-4 text-sm text-slate-300 leading-relaxed border border-white/5">
                                        I'm ready to research market trends. Upload documents or ask me to search the web for competitor analysis.
                                    </div>
<div className="flex gap-2">
<button className="text-xs text-slate-500 hover:text-white flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy</button>
<button className="text-xs text-slate-500 hover:text-white flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4-4 4"></path><path d="M9 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1"></path></svg> Rate</button>
</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-white/10 rounded-xl p-2 relative">
<div className="flex items-center gap-2 mb-2 px-2">
<button className="text-slate-500 hover:text-white p-1" title="Upload Image/Doc"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></button>
<button className="text-indigo-400 hover:text-indigo-300 p-1 bg-indigo-500/10 rounded text-xs px-2 flex items-center gap-1 border border-indigo-500/20"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Search On</button>
</div>
<textarea className="w-full bg-transparent text-white text-sm p-2 focus:outline-none resize-none h-20 placeholder:text-slate-600" placeholder="Analyze the impact of anti-aging trends in Spain..."></textarea>
<button className="absolute bottom-3 right-3 p-2 bg-white text-black rounded-lg hover:bg-slate-200"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
</div>
</div>
</div>

<div className="page-view hidden fade-in pb-20" id="page-campaigns">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Create Campaign</h2>
<div className="max-w-3xl space-y-8">

<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-4 border-b border-white/5 pb-2">1. Definition</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-500 mb-1">Campaign Name</label>
<input className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-white" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Objective</label>
<select className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-white">
<option>New Customer (Direct Sales)</option>
<option>Reactivation</option>
<option>Recruitment</option>
<option>Branding</option>
</select>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Start Date</label>
<input className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-slate-400" type="date"/>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">End Date</label>
<input className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-slate-400" type="date"/>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-4 border-b border-white/5 pb-2">2. Product &amp; Segment</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-500 mb-1">Region</label>
<select className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-white">
<option>Spain &gt; Madrid</option>
<option>Spain &gt; Catalonia</option>
</select>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Product Line</label>
<select className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-white">
<option>Nutritional Supplements</option>
<option>Anti-Aging Dermocosmetics</option>
<option>Weight Control</option>
<option>Energy</option>
</select>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-4 border-b border-white/5 pb-2">3. Channels &amp; KPIs</h3>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs text-slate-500 mb-1">Primary Social Channel</label>
<div className="flex gap-2">
<button className="p-2 bg-[#111] border border-white/10 rounded hover:border-indigo-500 text-slate-400 hover:text-indigo-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></button>
<button className="p-2 bg-[#111] border border-white/10 rounded hover:border-indigo-500 text-slate-400 hover:text-indigo-500"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Target Conversion Rate</label>
<input className="w-full bg-[#111] border border-white/10 rounded p-2 text-sm text-white" placeholder="e.g. 2.5%" type="text"/>
</div>
</div>
<button className="w-full bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-500 transition">Launch Campaign</button>
</div>
</div>
</div>
</main>
</div>

<aside className="sidebar-right w-0 overflow-hidden bg-[#080808] border-l border-white/5 flex flex-col relative" id="right-sidebar">
<div className="w-80 h-full flex flex-col"> 
<div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
<span className="text-sm font-medium text-white">Contextual Agent</span>
<button className="text-slate-500 hover:text-white" onclick="toggleRightSidebar()"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>
</div>
<div className="p-4 bg-indigo-500/5 border-b border-indigo-500/10">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
<p className="text-xs text-slate-300 leading-tight">I am tracking your <span className="font-bold text-white" id="agent-context-name">Dashboard</span> actions. Ask me anything about this view.</p>
</div>
</div>
<div className="flex-1 p-4 overflow-y-auto space-y-4">
<div className="flex flex-col items-end">
<div className="bg-indigo-600 text-white text-xs p-2 rounded-lg rounded-tr-none max-w-[80%]">Show me pending tasks?</div>
</div>
<div className="flex flex-col items-start">
<div className="bg-white/10 text-slate-300 text-xs p-2 rounded-lg rounded-tl-none max-w-[80%]">You have 3 critical tasks pending approval for the 'Summer' campaign.</div>
</div>
</div>
<div className="p-4 border-t border-white/5">
<div className="relative">
<input className="w-full bg-[#111] border border-white/10 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500" placeholder="Type..." type="text"/>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
