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
colors: {
brand: {
bg: '#0c0c0c',
surface: '#111111',
border: '#222222',
gold: '#FFCF00',
text: '#FFFFFF',
muted: '#A1A1AA'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // State
        const state = {
            isLoggedIn: false,
            role: null // 'admin' | 'customer'
        };

        // DOM Elements
        const loginScreen = document.getElementById('login-screen');
        const appLayout = document.getElementById('app-layout');
        const userNameDisplay = document.getElementById('user-name');
        const userRoleDisplay = document.getElementById('user-role-label');
        const userAvatar = document.getElementById('user-avatar');
        const headerBreadcrumb = document.getElementById('header-breadcrumb');
        
        // Navigation items to manage active states
        const navIds = ['nav-dashboard', 'nav-customers', 'nav-projects', 'nav-messages'];
        const viewIds = ['view-dashboard-admin', 'view-dashboard-customer', 'view-customers', 'view-projects', 'view-messages'];

        // Init
        lucide.createIcons();

        function handleLogin(role) {
            state.isLoggedIn = true;
            state.role = role;
            
            // UI Update for loading simulation
            const btn = event.currentTarget;
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<span class="animate-pulse">Logger inn...</span>`;
            
            setTimeout(() => {
                // Hide Login, Show App
                loginScreen.classList.add('hidden-section');
                appLayout.classList.remove('hidden-section');
                
                // Configure User Profile
                if (role === 'admin') {
                    userNameDisplay.innerText = "Christian Berg";
                    userRoleDisplay.innerText = "Admin";
                    userAvatar.src = "https://i.pravatar.cc/150?img=11";
                    // Reset Button
                    btn.innerHTML = originalContent;
                    navigate('dashboard');
                } else {
                    userNameDisplay.innerText = "Erik Hansen";
                    userRoleDisplay.innerText = "Kunde (Nordic Living)";
                    userAvatar.src = "https://i.pravatar.cc/150?img=32";
                    // Reset Button
                    btn.innerHTML = originalContent;
                    navigate('dashboard');
                }
            }, 600);
        }

        function handleLogout() {
            state.isLoggedIn = false;
            state.role = null;
            appLayout.classList.add('hidden-section');
            loginScreen.classList.remove('hidden-section');
            // Reset views
            hideAllViews();
        }

        function hideAllViews() {
            viewIds.forEach(id => {
                document.getElementById(id).classList.add('hidden-section');
            });
            navIds.forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    el.classList.remove('bg-white/5', 'text-white', 'border-white/5');
                    el.classList.add('text-brand-muted', 'border-transparent');
                }
            });
        }

        function navigate(viewName) {
            hideAllViews();
            
            // Determine logic based on role
            let targetViewId = '';
            
            if (viewName === 'dashboard') {
                targetViewId = state.role === 'admin' ? 'view-dashboard-admin' : 'view-dashboard-customer';
            } else {
                targetViewId = `view-${viewName}`;
            }

            // Show Target View
            const targetEl = document.getElementById(targetViewId);
            if(targetEl) targetEl.classList.remove('hidden-section');

            // Update Header
            const titleMap = {
                'dashboard': 'Oversikt',
                'customers': 'Kundeoversikt',
                'projects': 'Prosjekter',
                'messages': 'Meldinger'
            };
            headerBreadcrumb.innerText = titleMap[viewName];

            // Update Active Sidebar Link
            const activeNavId = `nav-${viewName}`;
            const activeNavEl = document.getElementById(activeNavId);
            if(activeNavEl) {
                activeNavEl.classList.remove('text-brand-muted', 'border-transparent');
                activeNavEl.classList.add('bg-white/5', 'text-white', 'border-white/5');
            }

            // Role specific restrictions (Simple simulation)
            if (state.role === 'customer' && (viewName === 'customers' || viewName === 'projects')) {
                // If customer tries to access restricted areas, redirect or show simplified
                if(viewName === 'projects') {
                    // Let them see projects but maybe modify content (not implemented in this simple demo)
                }
                 if(viewName === 'customers') {
                    // Hide customers view for customers, go back to dashboard
                     navigate('dashboard');
                     alert("Ingen tilgang til kundeliste.");
                }
            }
            
            // Re-render icons just in case
            lucide.createIcons();
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
      

<div className="w-full h-full flex flex-col items-center justify-center relative z-50 bg-brand-bg" id="login-screen">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
</div>
<div className="w-full max-w-md p-8 glass-panel rounded-2xl relative z-10 border-brand-border/50">
<div className="flex items-center justify-center gap-3 mb-8">
<div className="w-10 h-10 bg-brand-gold rounded flex items-center justify-center text-black font-semibold tracking-tighter text-lg">
                    N
                </div>
<span className="text-xl tracking-tight font-medium">NextLevvel<span className="text-brand-gold">OS</span></span>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-brand-muted mb-1.5 ml-1">E-postadresse</label>
<input className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold/50 text-white placeholder:text-zinc-700 transition-all" type="email" value="admin@nextlevvel.no"/>
</div>
<div>
<label className="block text-xs font-medium text-brand-muted mb-1.5 ml-1">Passord</label>
<input className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-gold/50 text-white placeholder:text-zinc-700 transition-all" type="password" value="password123"/>
</div>
<button className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-zinc-200 transition-colors mt-2" onclick="handleLogin('admin')">
                    Logg inn
                </button>
</div>
<div className="mt-8 pt-6 border-t border-brand-border">
<p className="text-[10px] text-center text-brand-muted uppercase tracking-widest mb-4">Demo Tilgang</p>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-2 border border-brand-border rounded hover:bg-white/5 transition-colors group" onclick="handleLogin('admin')">
<i className="w-4 h-4 text-brand-gold" data-lucide="shield"></i>
<span className="text-xs text-brand-muted group-hover:text-white">Som Admin</span>
</button>
<button className="flex items-center justify-center gap-2 py-2 border border-brand-border rounded hover:bg-white/5 transition-colors group" onclick="handleLogin('customer')">
<i className="w-4 h-4 text-brand-gold" data-lucide="user"></i>
<span className="text-xs text-brand-muted group-hover:text-white">Som Kunde</span>
</button>
</div>
</div>
</div>
<p className="mt-8 text-xs text-brand-muted opacity-50">© 2024 NextLevvel. All rights reserved.</p>
</div>

<div className="hidden-section h-full w-full flex overflow-hidden" id="app-layout">

<aside className="w-64 border-r border-brand-border bg-brand-bg flex-col justify-between hidden md:flex z-50">
<div className="p-6">
<div className="flex items-center gap-3 mb-10 cursor-pointer" onclick="navigate('dashboard')">
<div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center text-black font-semibold tracking-tighter">
                        N
                    </div>
<span className="text-lg tracking-tight font-medium">NextLevvel<span className="text-brand-gold">OS</span></span>
</div>
<nav className="space-y-1">
<div className="text-xs font-normal text-brand-muted uppercase tracking-widest mb-4 mt-2 px-3">Meny</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5 transition-all group" id="nav-dashboard" onclick="navigate('dashboard')">
<i className="w-4 h-4 text-brand-gold" data-lucide="layout-dashboard"></i>
<span className="font-normal">Oversikt</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-brand-muted hover:text-white hover:bg-white/5 rounded-md border border-transparent transition-all" id="nav-customers" onclick="navigate('customers')">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="font-normal">Kunder</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-brand-muted hover:text-white hover:bg-white/5 rounded-md border border-transparent transition-all" id="nav-projects" onclick="navigate('projects')">
<i className="w-4 h-4" data-lucide="layers"></i>
<span className="font-normal">Prosjekter</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-brand-muted hover:text-white hover:bg-white/5 rounded-md border border-transparent transition-all" id="nav-messages" onclick="navigate('messages')">
<i className="w-4 h-4" data-lucide="message-square"></i>
<span className="font-normal">Meldinger</span>
<span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-gold" id="msg-badge"></span>
</button>
</nav>
</div>

<div className="p-4 border-t border-brand-border bg-brand-surface/50">
<div className="flex items-center gap-3 px-2 group">
<img alt="User" className="w-8 h-8 rounded-full border border-brand-border opacity-80" id="user-avatar" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate" id="user-name">Christian Berg</p>
<p className="text-xs text-brand-muted truncate" id="user-role-label">Admin</p>
</div>
<button className="text-brand-muted hover:text-red-400 transition-colors" onclick="handleLogout()" title="Logg ut">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-brand-bg relative">

<header className="h-16 border-b border-brand-border flex items-center justify-between px-6 bg-brand-bg/80 backdrop-blur-md sticky top-0 z-40">
<div className="flex items-center gap-4">
<button className="md:hidden text-brand-muted"><i className="w-5 h-5" data-lucide="menu"></i></button>
<div className="hidden md:flex items-center gap-2 text-sm text-brand-muted">
<span className="hover:text-white cursor-pointer" onclick="navigate('dashboard')">Hjem</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="text-white" id="header-breadcrumb">Oversikt</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" data-lucide="search"></i>
<input className="bg-brand-surface border border-brand-border rounded-full pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-brand-gold/50 text-white w-64 placeholder:text-zinc-600 transition-all" placeholder="Søk (Cmd+K)" type="text"/>
</div>
<div className="relative">
<i className="w-4 h-4 text-brand-muted hover:text-white cursor-pointer transition-colors" data-lucide="bell"></i>
<span className="absolute -top-1 -right-0.5 w-2 h-2 bg-brand-gold rounded-full"></span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth bg-brand-bg" id="main-scroll-area">

<div className="view-section hidden-section max-w-7xl mx-auto space-y-8" id="view-dashboard-admin">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-normal tracking-tight text-white mb-1">God morgen, Christian</h1>
<p className="text-sm text-brand-muted font-light">Oversikt over NextLevvel aktiviteter.</p>
</div>
<button className="bg-brand-gold text-black text-xs font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-brand-gold/90 transition-colors gold-glow">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                            Nytt Prosjekt
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="glass-panel p-5 rounded-xl hover:border-brand-border/80 transition-colors cursor-pointer" onclick="navigate('customers')">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-normal text-brand-muted uppercase tracking-wide">Aktive Kunder</span>
<i className="w-4 h-4 text-brand-gold" data-lucide="users"></i>
</div>
<div className="text-3xl font-normal text-white tracking-tight mb-1">42</div>
</div>
<div className="glass-panel p-5 rounded-xl hover:border-brand-border/80 transition-colors cursor-pointer" onclick="navigate('projects')">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-normal text-brand-muted uppercase tracking-wide">Prosjekter</span>
<i className="w-4 h-4 text-brand-muted" data-lucide="briefcase"></i>
</div>
<div className="text-3xl font-normal text-white tracking-tight mb-1">18</div>
</div>
<div className="glass-panel p-5 rounded-xl hover:border-brand-border/80 transition-colors cursor-pointer" onclick="navigate('messages')">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-normal text-brand-muted uppercase tracking-wide">Meldinger</span>
<i className="w-4 h-4 text-brand-muted" data-lucide="mail"></i>
</div>
<div className="text-3xl font-normal text-white tracking-tight mb-1">7</div>
</div>
<div className="glass-panel p-5 rounded-xl">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-normal text-brand-muted uppercase tracking-wide">Reach</span>
<i className="w-4 h-4 text-brand-muted" data-lucide="bar-chart-2"></i>
</div>
<div className="text-3xl font-normal text-white tracking-tight mb-1">1.2M</div>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-7xl mx-auto space-y-8" id="view-dashboard-customer">
<div className="flex items-end justify-between border-b border-brand-border pb-6">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-medium">Kundeportal</span>
</div>
<h1 className="text-3xl font-normal tracking-tight text-white">Nordic Living AS</h1>
</div>
<div className="flex gap-3">
<button className="bg-brand-surface border border-brand-border text-white text-xs font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-white/5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                                Månedsrapport
                            </button>
<button className="bg-brand-gold text-black text-xs font-medium px-4 py-2 rounded flex items-center gap-2 hover:bg-brand-gold/90 transition-colors gold-glow" onclick="navigate('messages')">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
                                Kontakt Teamet
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
<div className="absolute right-0 top-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-brand-gold/10 transition-colors"></div>
<div className="text-xs text-brand-muted uppercase tracking-wider mb-2">Konverteringer</div>
<div className="text-4xl font-normal text-white tracking-tight mb-2">482</div>
<div className="text-xs text-emerald-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 14% økning
                            </div>
</div>
<div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
<div className="text-xs text-brand-muted uppercase tracking-wider mb-2">ROI (RoAS)</div>
<div className="text-4xl font-normal text-white tracking-tight mb-2">4.2x</div>
<div className="text-xs text-brand-muted flex items-center gap-1">Mål: 4.0x</div>
</div>
<div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
<div className="text-xs text-brand-muted uppercase tracking-wider mb-2">Mediebruk</div>
<div className="text-4xl font-normal text-white tracking-tight mb-2">145k</div>
<div className="text-xs text-brand-muted flex items-center gap-1">NOK (YTD)</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl">
<h3 className="text-lg font-medium text-white tracking-tight mb-6">Nylige Filer</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer border border-brand-border/30">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="image"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">Campaign_Hero_Nov.png</p>
<p className="text-[10px] text-brand-muted">Lastet opp i dag</p>
</div>
<i className="w-4 h-4 text-brand-muted opacity-0 group-hover:opacity-100" data-lucide="download"></i>
</div>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-7xl mx-auto space-y-6" id="view-customers">
<div className="flex justify-between items-center">
<h2 className="text-xl font-medium text-white">Kundeoversikt</h2>
<button className="bg-white/5 border border-brand-border text-xs px-3 py-1.5 rounded hover:bg-white/10 text-white">Eksporter Liste</button>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-white/5">
<tr className="text-xs text-brand-muted border-b border-brand-border">
<th className="font-normal py-3 px-5">Selskap</th>
<th className="font-normal py-3 px-5">Kontaktperson</th>
<th className="font-normal py-3 px-5">Status</th>
<th className="font-normal py-3 px-5">Neste Faktura</th>
<th className="font-normal py-3 px-5"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-white/[0.02] border-b border-brand-border/50">
<td className="py-3 px-5 text-white font-medium">Nordic Living AS</td>
<td className="py-3 px-5 text-brand-muted">Erik Hansen</td>
<td className="py-3 px-5"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px]">Aktiv</span></td>
<td className="py-3 px-5 text-brand-muted">01. Nov</td>
<td className="py-3 px-5 text-right"><button className="text-brand-muted hover:text-white" onclick="navigate('messages')">Melding</button></td>
</tr>
<tr className="group hover:bg-white/[0.02] border-b border-brand-border/50">
<td className="py-3 px-5 text-white font-medium">TechFlow Systems</td>
<td className="py-3 px-5 text-brand-muted">Sarah Jensen</td>
<td className="py-3 px-5"><span className="bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded text-[10px]">Onboarding</span></td>
<td className="py-3 px-5 text-brand-muted">15. Nov</td>
<td className="py-3 px-5 text-right"><button className="text-brand-muted hover:text-white" onclick="navigate('messages')">Melding</button></td>
</tr>
<tr className="group hover:bg-white/[0.02] border-b border-brand-border/50">
<td className="py-3 px-5 text-white font-medium">Urban Coffee</td>
<td className="py-3 px-5 text-brand-muted">Ola Normann</td>
<td className="py-3 px-5"><span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px]">Pauset</span></td>
<td className="py-3 px-5 text-brand-muted">-</td>
<td className="py-3 px-5 text-right"><button className="text-brand-muted hover:text-white" onclick="navigate('messages')">Melding</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden-section max-w-full mx-auto h-[calc(100vh-140px)]" id="view-projects">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-medium text-white">Prosjekter (Kanban)</h2>
<div className="flex gap-2">
<span className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-[#0c0c0c]" src="https://i.pravatar.cc/150?img=32"/>
<img alt="" className="w-6 h-6 rounded-full border border-[#0c0c0c]" src="https://i.pravatar.cc/150?img=12"/>
</span>
</div>
</div>
<div className="flex gap-6 h-full overflow-x-auto pb-4">

<div className="w-72 flex-shrink-0 flex flex-col">
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-medium text-brand-muted uppercase tracking-wider">To Do</span>
<span className="bg-white/10 text-white text-[10px] px-1.5 rounded">3</span>
</div>
<div className="flex-1 space-y-3 overflow-y-auto">
<div className="p-3 bg-brand-surface border border-brand-border rounded-lg hover:border-brand-gold/30 cursor-pointer group transition-all">
<div className="flex justify-between mb-2"><span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 rounded">Strategy</span></div>
<p className="text-sm text-white mb-2 group-hover:text-brand-gold transition-colors">Q1 2024 Planning</p>
<div className="flex items-center justify-between text-[10px] text-brand-muted">
<span>Nordic Living</span>
<i className="w-3 h-3" data-lucide="flag"></i>
</div>
</div>
<div className="p-3 bg-brand-surface border border-brand-border rounded-lg hover:border-brand-gold/30 cursor-pointer group transition-all">
<div className="flex justify-between mb-2"><span className="text-[10px] bg-purple-500/10 text-purple-400 px-1.5 rounded">Content</span></div>
<p className="text-sm text-white mb-2">Skriv blogginnlegg SEO</p>
<div className="flex items-center justify-between text-[10px] text-brand-muted">
<span>TechFlow</span>
<i className="w-3 h-3" data-lucide="clock"></i>
</div>
</div>
</div>
</div>

<div className="w-72 flex-shrink-0 flex flex-col">
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-medium text-brand-gold uppercase tracking-wider">In Progress</span>
<span className="bg-brand-gold/20 text-brand-gold text-[10px] px-1.5 rounded">2</span>
</div>
<div className="flex-1 space-y-3 overflow-y-auto">
<div className="p-3 bg-brand-surface border border-l-2 border-l-brand-gold border-y-brand-border border-r-brand-border rounded-lg cursor-pointer">
<div className="flex justify-between mb-2"><span className="text-[10px] bg-pink-500/10 text-pink-400 px-1.5 rounded">Ads</span></div>
<p className="text-sm text-white mb-2">Oppsett Meta Kampanje</p>
<div className="w-full bg-white/5 h-1 rounded-full mb-2"><div className="bg-brand-gold h-1 rounded-full w-2/3"></div></div>
<div className="flex items-center justify-between text-[10px] text-brand-muted">
<span>Nordic Living</span>
<img className="w-4 h-4 rounded-full" src="https://i.pravatar.cc/150?img=11"/>
</div>
</div>
<div className="p-3 bg-brand-surface border border-brand-border rounded-lg cursor-pointer">
<div className="flex justify-between mb-2"><span className="text-[10px] bg-orange-500/10 text-orange-400 px-1.5 rounded">Design</span></div>
<p className="text-sm text-white mb-2">Nye Bannere Black Week</p>
<div className="flex items-center justify-between text-[10px] text-brand-muted">
<span>Urban Coffee</span>
<img className="w-4 h-4 rounded-full" src="https://i.pravatar.cc/150?img=5"/>
</div>
</div>
</div>
</div>

<div className="w-72 flex-shrink-0 flex flex-col">
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Review</span>
<span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 rounded">1</span>
</div>
<div className="flex-1 space-y-3 overflow-y-auto">
<div className="p-3 bg-brand-surface border border-brand-border rounded-lg cursor-pointer opacity-80 hover:opacity-100">
<div className="flex justify-between mb-2"><span className="text-[10px] bg-zinc-700 text-zinc-300 px-1.5 rounded">Reporting</span></div>
<p className="text-sm text-white mb-2">Oktober Rapport</p>
<div className="flex items-center justify-between text-[10px] text-brand-muted">
<span>Alle Kunder</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden-section max-w-5xl mx-auto h-[calc(100vh-140px)] flex gap-4" id="view-messages">

<div className="w-64 flex flex-col glass-panel rounded-xl overflow-hidden">
<div className="p-4 border-b border-brand-border">
<input className="w-full bg-brand-bg border border-brand-border rounded p-2 text-xs text-white" placeholder="Søk samtale..." type="text"/>
</div>
<div className="flex-1 overflow-y-auto">
<div className="p-3 hover:bg-white/5 cursor-pointer border-l-2 border-brand-gold bg-white/[0.02]">
<div className="flex justify-between mb-1">
<span className="text-xs font-medium text-white">Nordic Living</span>
<span className="text-[10px] text-brand-muted">10:30</span>
</div>
<p className="text-[11px] text-brand-muted truncate text-white">Godkjent! Kjør på med annonsene.</p>
</div>
<div className="p-3 hover:bg-white/5 cursor-pointer border-l-2 border-transparent">
<div className="flex justify-between mb-1">
<span className="text-xs font-medium text-brand-muted">TechFlow Systems</span>
<span className="text-[10px] text-brand-muted">I går</span>
</div>
<p className="text-[11px] text-brand-muted truncate">Når er rapporten klar?</p>
</div>
</div>
</div>

<div className="flex-1 glass-panel rounded-xl flex flex-col overflow-hidden">
<div className="p-4 border-b border-brand-border flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-brand-gold flex items-center justify-center text-black font-bold text-xs">NL</div>
<div>
<p className="text-sm font-medium text-white">Nordic Living AS</p>
<p className="text-[10px] text-brand-muted">Erik Hansen • Online</p>
</div>
</div>
<i className="text-brand-muted w-4 h-4 cursor-pointer" data-lucide="more-horizontal"></i>
</div>
<div className="flex-1 p-4 space-y-4 overflow-y-auto bg-brand-surface/30">

<div className="flex gap-3">
<img className="w-8 h-8 rounded-full self-end" src="https://i.pravatar.cc/150?img=32"/>
<div className="bg-brand-border text-xs text-zinc-300 p-3 rounded-t-lg rounded-br-lg max-w-xs">
                                    Hei Christian, har dere sett på endringene i budsjettet?
                                </div>
</div>

<div className="flex gap-3 justify-end">
<div className="bg-brand-gold text-xs text-black font-medium p-3 rounded-t-lg rounded-bl-lg max-w-xs">
                                    Hei Erik! Ja, vi har justert det opp mot Black Week nå. Sender ny plan straks.
                                </div>
<img className="w-8 h-8 rounded-full self-end" src="https://i.pravatar.cc/150?img=11"/>
</div>

<div className="flex gap-3">
<img className="w-8 h-8 rounded-full self-end" src="https://i.pravatar.cc/150?img=32"/>
<div className="bg-brand-border text-xs text-zinc-300 p-3 rounded-t-lg rounded-br-lg max-w-xs">
                                    Godkjent! Kjør på med annonsene.
                                </div>
</div>
</div>
<div className="p-4 border-t border-brand-border bg-brand-bg">
<div className="flex gap-2">
<button className="p-2 text-brand-muted hover:text-white"><i className="w-4 h-4" data-lucide="paperclip"></i></button>
<input className="flex-1 bg-brand-surface border border-brand-border rounded-lg px-3 text-xs text-white focus:outline-none focus:border-brand-gold" placeholder="Skriv en melding..." type="text"/>
<button className="p-2 bg-brand-gold text-black rounded hover:bg-brand-gold/90"><i className="w-4 h-4" data-lucide="send"></i></button>
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
