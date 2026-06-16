import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind = { config: { darkMode: 'class' } };



      lucide.createIcons(); const translations = { en: { 'nav.summary': 'Summary', 'nav.summary_sub': 'Global Overview', 'nav.tasks': 'Tasks', 'nav.tasks_sub': 'Management', 'nav.documents': 'Documents', 'nav.documents_sub': 'Library', 'nav.team': 'Team', 'nav.team_sub': 'Network', 'nav.messages': 'Messages', 'nav.messages_sub': 'Team Chat', 'nav.mentoring': 'Mentoring', 'nav.mentoring_sub': 'Academy', 'nav.compliance': 'Compliance', 'nav.compliance_sub': 'Risk Control', 'nav.campaigns': 'Campaigns', 'nav.campaigns_sub': 'Workflow', 'nav.leads': 'Leads', 'nav.leads_sub': 'Pipeline' }, es: { 'nav.summary': 'Resumen', 'nav.summary_sub': 'Visión Global', 'nav.tasks': 'Tareas', 'nav.tasks_sub': 'Gestión', 'nav.documents': 'Documentos', 'nav.documents_sub': 'Biblioteca', 'nav.team': 'Equipo', 'nav.team_sub': 'Red Comercial', 'nav.messages': 'Mensajes', 'nav.messages_sub': 'Chat de Equipo', 'nav.mentoring': 'Mentoring', 'nav.mentoring_sub': 'Academia', 'nav.compliance': 'Compliance', 'nav.compliance_sub': 'Control Riesgos', 'nav.campaigns': 'Campañas', 'nav.campaigns_sub': 'Flujo de Trabajo', 'nav.leads': 'Leads', 'nav.leads_sub': 'Pipeline' } }; function setLang(lang) { const dict = translations[lang]; if (!dict) return; document.querySelectorAll('[data-t]').forEach(el => { const key = el.getAttribute('data-t'); if (dict[key]) el.textContent = dict[key]; }); } function toggleUserMenu() { document.getElementById('user-menu-dropdown').classList.toggle('hidden'); } document.addEventListener('click', (e) => { const btn = document.querySelector('button[onclick="toggleUserMenu()"]'); const menu = document.getElementById('user-menu-dropdown'); if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) menu.classList.add('hidden'); }); const navItems = document.querySelectorAll('.nav-item'); const sections = { summary: document.getElementById('section-summary'), tareas: document.getElementById('section-tareas'), documentos: document.getElementById('section-documentos'), equipo: document.getElementById('section-equipo'), messages: document.getElementById('section-messages'), mentoring: document.getElementById('section-mentoring'), compliance: document.getElementById('section-compliance'), campanias: document.getElementById('section-campanias'), leads: document.getElementById('section-leads'), settings: document.getElementById('section-settings'), }; const breadcrumb = document.getElementById('breadcrumb-section'); const rightSidebar = document.getElementById('right-sidebar'); navItems.forEach((btn) => { btn.addEventListener('click', () => { navItems.forEach(b => { b.classList.remove('bg-white', 'shadow-sm', 'border-slate-200/50', 'text-slate-900'); b.classList.add('text-slate-600'); }); btn.classList.add('bg-white', 'shadow-sm', 'border-slate-200/50', 'text-slate-900'); btn.classList.remove('text-slate-600'); const target = btn.dataset.section; Object.values(sections).forEach(el => el && el.classList.add('hidden')); if (sections[target]) sections[target].classList.remove('hidden'); if(target) breadcrumb.textContent = target.charAt(0).toUpperCase() + target.slice(1); if (target === 'messages') { if(rightSidebar) { rightSidebar.classList.remove('xl:flex'); rightSidebar.classList.add('hidden'); } } else { if(rightSidebar) { rightSidebar.classList.add('xl:flex'); rightSidebar.classList.remove('hidden'); } } const mentActions = document.getElementById('mentoring-actions'); if(mentActions) mentActions.classList.add('hidden'); if(target === 'mentoring') { document.getElementById('agent-panel-title').textContent = 'Mentoring Coach'; document.getElementById('agent-panel-greeting').textContent = 'Hola. Soy tu coach personal. ¿Qué habilidad quieres entrenar hoy?'; if(mentActions) mentActions.classList.remove('hidden'); } else if (target === 'summary') { document.getElementById('agent-panel-title').textContent = 'Command Agent'; document.getElementById('agent-panel-greeting').textContent = 'Hola, soy tu agente de mando. Te ayudo con KPIs y decisiones.'; } else if (target === 'leads') { document.getElementById('agent-panel-title').textContent = 'Lead Manager'; document.getElementById('agent-panel-greeting').textContent = 'Hola. Analizo tus leads y sugiero acciones de conversión.'; } else if (target === 'compliance') { document.getElementById('agent-panel-title').textContent = 'Compliance Officer'; document.getElementById('agent-panel-greeting').textContent = 'Hola. Superviso el cumplimiento normativo. ¿Deseas auditar contenido?'; } }); }); const modal = document.getElementById('user-modal'); function openUserModal(name, role, hasWarning) { document.getElementById('modal-name').textContent = name; document.getElementById('modal-role').textContent = role; document.getElementById('modal-avatar').textContent = name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase(); if(hasWarning) document.getElementById('modal-warning').classList.remove('hidden'); else document.getElementById('modal-warning').classList.add('hidden'); modal.classList.remove('hidden'); } function closeUserModal() { modal.classList.add('hidden'); } modal.addEventListener('click', (e) => { if(e.target === modal) closeUserModal(); }); const chatContainer = document.getElementById('agent-panel-chat'); const input = document.getElementById('agent-panel-input'); const sendBtn = document.getElementById('agent-panel-send'); function sendMessage() { const text = input.value.trim(); if(!text) return; const userMsg = document.createElement('div'); userMsg.className = 'flex gap-4 flex-row-reverse fade-in'; userMsg.innerHTML = `<div class="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-md">AU</div><div class="bg-slate-900 text-white p-3 px-4 rounded-2xl rounded-tr-none text-sm shadow-md leading-relaxed">${text}</div>`; chatContainer.appendChild(userMsg); input.value = ''; chatContainer.scrollTop = chatContainer.scrollHeight; setTimeout(() => { const agentMsg = document.createElement('div'); agentMsg.className = 'flex gap-4 fade-in'; agentMsg.innerHTML = `<div class="flex-shrink-0 w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center"><i data-lucide="bot" class="w-4 h-4 text-slate-700"></i></div><div class="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-sm text-slate-600 shadow-sm leading-relaxed">Processing your request...</div>`; chatContainer.appendChild(agentMsg); chatContainer.scrollTop = chatContainer.scrollHeight; lucide.createIcons(); }, 1000); } if(sendBtn) sendBtn.addEventListener('click', sendMessage); if(input) input.addEventListener('keydown', (e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative w-full max-w-[1600px] h-[95vh] bg-slate-50/95 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/20" id="app-shell">

<div className="pointer-events-none absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

<header className="lg:px-8 flex bg-white h-20 z-20 border-slate-200/60 border-b pr-6 pl-6 relative items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
<svg className="lucide lucide-bot w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="leading-none text-xl font-medium text-slate-900 tracking-tight font-oswald">
              LINARIS
              <span className="text-orange-500">.IO</span>
</span>
<span className="text-[0.65rem] uppercase font-medium text-slate-500 tracking-[0.25em] mt-0.5">
              Agentic Team Console
            </span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200 mr-2">
<button className="px-3 py-1 rounded-full text-[0.65rem] font-bold transition-all bg-white text-slate-900 shadow-sm" id="btn-lang-en" onclick="setLang('en')">
              EN
            </button>
<button className="px-3 py-1 rounded-full text-[0.65rem] font-bold text-slate-500 hover:text-slate-900 transition-all" id="btn-lang-es" onclick="setLang('es')">
              ES
            </button>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-tight">
              Cluster Online
            </span>
</div>
<button aria-expanded="false" aria-haspopup="true" className="relative flex items-center gap-3 bg-white border border-slate-200 rounded-full pl-1.5 pr-4 py-1.5 hover:bg-slate-50 transition-colors shadow-sm" id="user-menu-btn" onclick="toggleUserMenu()">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 flex items-center justify-center text-white text-xs font-bold">
              AU
            </div>
<div className="hidden sm:flex flex-col items-start text-left">
<span className="text-xs font-semibold text-slate-900 leading-none">
                Admin User
              </span>
<span className="text-[0.65rem] text-slate-500 uppercase tracking-wide leading-none mt-1">
                Sales Leader
              </span>
</div>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div aria-labelledby="user-menu-btn" className="hidden absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 z-50 ring-1 ring-slate-900/5 origin-top-right transition-all transform flex flex-col" id="user-menu-dropdown" role="menu">

<div className="px-5 py-4 border-b border-slate-100 flex items-center gap-4 bg-slate-50/30">
<div className="relative flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 flex items-center justify-center text-white text-lg font-bold shadow-md ring-2 ring-white">
                  AU
                </div>
<span aria-label="Status: Online" className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" title="Online"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-slate-900 truncate">
                  Admin User
                </p>
<p className="text-xs text-slate-500 truncate">admin@linaris.os</p>
<div className="flex items-center gap-1.5 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[0.65rem] font-medium text-emerald-700">
                    Online
                  </span>
</div>
</div>
</div>

<div className="p-2 space-y-1">

<div aria-label="Quick Actions" className="pb-2 border-b border-slate-50" role="group">
<a className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<div className="flex items-center gap-3">
<svg className="lucide lucide-user w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="font-medium">View Profile</span>
</div>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" role="menuitem">
<svg className="lucide lucide-edit w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
</svg>
<span className="font-medium">Edit Profile</span>
</button>
</div>

<div aria-label="Settings" className="py-2 border-b border-slate-50" role="group">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<svg className="lucide lucide-settings w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="font-medium">Account Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<svg className="lucide lucide-lock w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="font-medium">Change Password</span>
</a>
<div className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group" role="menuitem">
<div className="flex items-center gap-3">
<svg className="lucide lucide-moon w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
</svg>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      Dark Mode
                    </span>
</div>
<div className="w-8 h-4 bg-slate-200 rounded-full relative">
<div className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div aria-label="Activity" className="py-2" role="group">
<a className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<span className="font-medium">Messages</span>
</div>
<span className="px-1.5 py-0.5 rounded-md bg-rose-50 text-rose-600 text-[0.65rem] font-bold border border-rose-100">
                    3
                  </span>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<div className="flex items-center gap-3">
<svg className="lucide lucide-bell w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<span className="font-medium">Notifications</span>
</div>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#" role="menuitem">
<svg className="lucide lucide-history w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M12 7v5l4 2"></path>
</svg>
<span className="font-medium">Activity History</span>
</a>
</div>
</div>

<div className="p-2 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl">
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors group" href="#" role="menuitem">
<svg className="lucide lucide-log-out w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 17 5-5-5-5"></path>
<path d="M21 12H9"></path>
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
</svg>
                Log out
              </a>
</div>
</div>
</div>
</header>

<div className="relative z-10 flex-1 flex overflow-hidden">

<aside className="hidden lg:flex flex-col bg-slate-50 w-64 border-slate-200/60 border-r pt-6 pr-4 pb-6 pl-4">
<div className="mb-4 pr-2 pl-2">
<span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Navigation
            </span>
</div>
<nav className="flex-1 space-y-1">
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 bg-white shadow-sm border border-slate-200/50 text-slate-900" data-section="summary">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-sky-100 text-sky-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.summary">
                  Summary
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.summary_sub">
                  Global Overview
                </span>
</div>
</button>
<div className="h-px bg-slate-200/60 mx-2 my-2"></div>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="tareas">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.tasks">
                  Tasks
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.tasks_sub">
                  Management
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="documentos">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-amber-100 text-amber-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-folder-open w-4 h-4" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.documents">
                  Documents
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.documents_sub">
                  Library
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="equipo">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.team">Team</span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.team_sub">
                  Network
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="messages">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-pink-100 text-pink-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.messages">
                  Messages
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.messages_sub">
                  Team Chat
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="mentoring">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-violet-100 text-violet-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-graduation-cap w-4 h-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
<path d="M22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.mentoring">
                  Mentoring
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.mentoring_sub">
                  Academy
                </span>
</div>
</button>
<div className="h-px bg-slate-200/60 mx-2 my-2"></div>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="compliance">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-red-100 text-red-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-alert w-4 h-4" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.compliance">
                  Compliance
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.compliance_sub">
                  Risk Control
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="campanias">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-lime-100 text-lime-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-flag w-4 h-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.campaigns">
                  Campaigns
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.campaigns_sub">
                  Workflow
                </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="leads">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium" data-t="nav.leads">
                  Leads
                </span>
<span className="text-[0.65rem] text-slate-500" data-t="nav.leads_sub">
                  Pipeline
                </span>
</div>
</button>
</nav>
<div className="mt-auto pt-4">
<div className="mb-2 pr-2 pl-2 border-t border-slate-300 pt-4">
<span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Configuration
              </span>
</div>
<div className="space-y-1">
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600" data-section="settings">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-slate-100 text-slate-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-settings-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium">Settings</span>
<span className="text-[0.65rem] text-slate-500">
                    System &amp; Preferences
                  </span>
</div>
</button>
<button className="nav-item group flex w-full items-start gap-3 rounded-2xl px-3 py-3 hover:bg-white hover:shadow-sm hover:border-slate-200/50 transition-all text-slate-600">
<div className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg bg-slate-100 text-slate-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-life-buoy w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.93 4.93 4.24 4.24"></path>
<path d="m14.83 9.17 4.24-4.24"></path>
<path d="m14.83 14.83 4.24 4.24"></path>
<path d="m9.17 14.83-4.24 4.24"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium">Support</span>
<span className="text-[0.65rem] text-slate-500">
                    Docs &amp; Help Center
                  </span>
</div>
</button>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col min-w-0 bg-slate-50/30">

<header className="flex pt-5 pr-8 pb-5 pl-8 items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
<span className="uppercase tracking-widest text-[0.65rem] font-semibold text-slate-400">
                  Workspace
                </span>
<span className="font-medium text-slate-700">Global Leaders</span>
<svg className="lucide lucide-chevron-right w-3 h-3 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="font-medium text-slate-900" id="breadcrumb-section">
                  Summary
                </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-4 h-4 text-slate-400 group-focus-within:text-slate-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<input className="w-64 py-2 pl-10 pr-4 bg-white border border-slate-200 rounded-full text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all shadow-sm" placeholder="Search agents, tasks, people..." type="text"/>
</div>
<button className="relative p-2 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-700 shadow-sm">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<span className="absolute top-0 right-0 h-2.5 w-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pr-8 pb-8 pl-8">

<div className="space-y-6" id="section-summary">
<div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-2xl">
<span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-2 block">
                      Agentic Overview
                    </span>
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
                      Today's Operating Picture
                    </h1>
<p className="text-slate-500 leading-relaxed">
                      Real-time visibility into your funnel, churn risk, and top
                      performers. Orchestrated by your agent cluster.
                    </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                      Team Retention
                    </span>
<span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
<svg className="lucide lucide-arrow-up-right w-3 h-3 mr-1" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
                      +12% QoQ
                    </span>
</div>
<div className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
                    86.4%
                  </div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-400 to-sky-400 w-[86%] rounded-full"></div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                      Churn Risk
                    </span>
<span className="text-xs font-medium text-amber-500">
                      14 flagged
                    </span>
</div>
<div className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
                    7.2%
                  </div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-emerald-700 font-medium">Stable</span>
<span>Pred. accuracy 96.3%</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                      Pipeline Value
                    </span>
<span className="text-xs font-medium text-sky-600">
                      42 opps
                    </span>
</div>
<div className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
                    €184K
                  </div>
<div className="flex items-center gap-1 text-xs text-slate-400">
<svg className="lucide lucide-trending-up w-3 h-3 text-slate-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span>+19% vs last 30 days</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pt-2">

<div className="xl:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20">
<svg className="lucide lucide-zap w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<div>
<h3 className="font-bold text-slate-900 text-lg">
                          Agent Events Log
                        </h3>
<p className="text-xs text-slate-500 font-medium">
                          Real-time interventions &amp; task generation
                        </p>
</div>
</div>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
                      View Full Log
                    </button>
</div>
<div className="space-y-4">

<div className="group relative flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
<div className="absolute top-4 right-4 text-[0.6rem] font-bold text-slate-400">
                        2m ago
                      </div>
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center border border-white shadow-sm flex-shrink-0">
<svg className="lucide lucide-crosshair w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-slate-900">
                            Sniper Agent
                          </span>
<span className="px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-700 text-[0.6rem] font-bold uppercase tracking-wide">
                            High Value Lead
                          </span>
</div>
<p className="text-sm text-slate-600 mb-3 leading-relaxed">
                          Identified high-intent signal from
                          <span className="font-semibold text-slate-900">
                            Dr. Elena Rodriguez
                          </span>
                          (Dermatologist). Engagement score 94/100.
                        </p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all group/btn">
<svg className="lucide lucide-user-check w-3.5 h-3.5 text-slate-400 group-hover/btn:text-rose-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<polyline points="16 11 18 13 22 9"></polyline>
</svg>
                            Task #2841: Qualify Lead
                          </button>
<span className="text-[0.65rem] text-slate-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            Pending
                          </span>
</div>
</div>
</div>

<div className="group relative flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
<div className="absolute top-4 right-4 text-[0.6rem] font-bold text-slate-400">
                        45m ago
                      </div>
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center border border-white shadow-sm flex-shrink-0">
<svg className="lucide lucide-shield-alert w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-slate-900">
                            Churn Guard
                          </span>
<span className="px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-700 text-[0.6rem] font-bold uppercase tracking-wide">
                            Risk Flag
                          </span>
</div>
<p className="text-sm text-slate-600 mb-3 leading-relaxed">
                          Distributor
                          <span className="font-semibold text-slate-900">
                            Marco V.
                          </span>
                          (Lvl 2) zero activity detected (14 days). Predicted
                          churn: 78%.
                        </p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all group/btn">
<svg className="lucide lucide-phone w-3.5 h-3.5 text-slate-400 group-hover/btn:text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                            Task: Retention Call
                          </button>
<span className="text-[0.65rem] text-slate-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                            Unassigned
                          </span>
</div>
</div>
</div>

<div className="group relative flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
<div className="absolute top-4 right-4 text-[0.6rem] font-bold text-slate-400">
                        1h ago
                      </div>
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-white shadow-sm flex-shrink-0">
<svg className="lucide lucide-scale w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path>
<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-slate-900">
                            Compliance
                          </span>
<span className="px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[0.6rem] font-bold uppercase tracking-wide">
                            Policy Audit
                          </span>
</div>
<p className="text-sm text-slate-600 mb-3 leading-relaxed">
                          Detected unapproved medical claim in Instagram story
                          by
                          <span className="font-semibold text-slate-900">
                            Sarah K.
                          </span>
                          Auto-flagged.
                        </p>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all group/btn">
<svg className="lucide lucide-check-square w-3.5 h-3.5 text-slate-400 group-hover/btn:text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 11 12 14 22 4"></polyline>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
                            Task: Review Violation
                          </button>
<span className="text-[0.65rem] text-slate-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Legal Team
                          </span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 shadow-lg text-white flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="font-bold text-lg mb-1">Weekly Priorities</h3>
<p className="text-xs text-slate-400 mb-6">Cluster Analysis</p>
<div className="space-y-4 flex-1">
<div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-slate-300">
                          Recruitment Efficiency
                        </span>
<span className="text-[0.6rem] font-bold text-emerald-400">
                          +4.2%
                        </span>
</div>
<div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-2">
<div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<p className="text-[0.65rem] text-slate-400 leading-snug">
                        Sniper agent performing above baseline. Recommendation:
                        Increase budget.
                      </p>
</div>
<div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-medium text-slate-300">
                          Churn Risk
                        </span>
<span className="text-[0.6rem] font-bold text-amber-400">
                          Attention
                        </span>
</div>
<div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-2">
<div className="bg-amber-400 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<p className="text-[0.65rem] text-slate-400 leading-snug">
                        Mid-tier distributors showing fatigue. Churn Guard
                        active.
                      </p>
</div>
</div>
<button className="mt-4 w-full py-2.5 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">
                    View AI Report
                  </button>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col" id="section-tareas">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

<div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 self-start">
<button className="px-3 py-1.5 rounded-md bg-white text-slate-900 text-xs font-medium shadow-sm ring-1 ring-black/5 transition-all">
                    Tabla
                  </button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-700 text-xs font-medium transition-all">
                    Kanban
                  </button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-700 text-xs font-medium transition-all">
                    Calendario
                  </button>
</div>

<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-user w-3.5 h-3.5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                    Usuario
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-list-filter w-3.5 h-3.5" data-lucide="list-filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5h20"></path>
<path d="M6 12h12"></path>
<path d="M9 19h6"></path>
</svg>
                    Status
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                    Fecha
                  </button>
<button className="ml-2 flex items-center justify-center w-7 h-7 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-200/60">
<th className="pl-6 pr-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest w-1/3">
                        Descripción
                      </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                        Usuario
                      </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                        Tipo
                      </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                        Fecha
                      </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                        Status
                      </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest text-center">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 inline text-sky-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                        AI
                      </th>
<th className="px-4 py-3 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border-2 border-slate-300 group-hover:border-slate-400 transition-colors"></div>
<span className="text-sm font-medium text-slate-700">
                            Call María about Spain expansion
                          </span>
</div>
</td>
<td className="px-4 py-3">
<div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                          JS
                        </div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.65rem] font-medium bg-blue-50 text-blue-600 border border-blue-100">
                          Lead Comercial
                        </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">Oct 24</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[0.65rem] font-medium border border-amber-100">
<div className="w-1 h-1 rounded-full bg-amber-500"></div>
                          In Progress
                        </span>
</td>
<td className="px-4 py-3 text-center">
<div className="group/tooltip relative inline-block">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-slate-300 hover:text-sky-500 cursor-pointer transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border-2 border-slate-300 group-hover:border-slate-400 transition-colors"></div>
<span className="text-sm font-medium text-slate-700">
                            Approve Q2 Product Launch Pack
                          </span>
</div>
</td>
<td className="px-4 py-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                          AU
                        </div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.65rem] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                          Lead Venta
                        </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">Oct 25</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[0.65rem] font-medium border border-slate-200">
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
                          Todo
                        </span>
</td>
<td className="px-4 py-3 text-center">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-slate-300 hover:text-sky-500 cursor-pointer transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</td>
<td className="px-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border-2 border-slate-300 group-hover:border-slate-400 transition-colors"></div>
<span className="text-sm font-medium text-slate-700">
                            Team Bonding: Winter Retreat
                          </span>
</div>
</td>
<td className="px-4 py-3">
<div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                          MR
                        </div>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.65rem] font-medium bg-purple-50 text-purple-600 border border-purple-100">
                          Team Building
                        </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">Nov 10</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[0.65rem] font-medium border border-emerald-100">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                          Done
                        </span>
</td>
<td className="px-4 py-3 text-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</td>
<td className="px-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden h-full" id="section-documentos">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">
                    Librería Corporativa
                  </h2>
<p className="text-sm text-slate-500 mt-1">
                    Single source of truth para toda la organización.
                  </p>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
<svg className="lucide lucide-upload-cloud w-3.5 h-3.5" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13v8"></path>
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="m8 17 4-4 4 4"></path>
</svg>
                  Subir archivo
                </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
<svg className="lucide lucide-image w-6 h-6" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Imagen Corporativa
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Logos, Brand Book, Assets
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-archive text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
<path d="M4 16v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"></path>
<rect height="8" rx="1" width="20" x="2" y="8"></rect>
<path d="M10 12h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          logo_pack_v2.zip
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 13H8"></path>
<path d="M16 13h-2"></path>
<path d="M10 17H8"></path>
<path d="M16 17h-2"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Brand_Book_2024.pdf
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
<svg className="lucide lucide-tag w-6 h-6" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
<circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Producto Precios
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Catálogo Q4, Tarifas
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-spreadsheet text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M8 13h2"></path>
<path d="M14 13h2"></path>
<path d="M8 17h2"></path>
<path d="M14 17h2"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Tarifa_2024_Q4.xlsx
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Catalogo_Productos.pdf
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-amber-50 group-hover:text-amber-600 transition-all">
<svg className="lucide lucide-shield-alert w-6 h-6" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Políticas
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Compliance, GDPR, Legal
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          GDPR_Policy_Update.pdf
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Terms_of_Use.pdf
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600 transition-all">
<svg className="lucide lucide-rocket w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Onboarding
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Guías de inicio, Training
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Welcome_Kit_v3.pdf
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-video text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m22 8-6 4 6 4V8Z"></path>
<rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Getting_Started.mp4
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all">
<svg className="lucide lucide-flask-conical w-6 h-6" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
<path d="M6.453 15h11.094"></path>
<path d="M8.5 2h7"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Ciencia</h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Estudios, Whitepapers
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flask-conical text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
<path d="M6.453 15h11.094"></path>
<path d="M8.5 2h7"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Clinical_Study_2024.pdf
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Whitepaper_Product_X.pdf
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-rose-50 group-hover:text-rose-600 transition-all">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
<path d="M7 6h1v4"></path>
<path d="m16.71 13.88.7.71-2.82 2.82"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Compensación
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Plan de carrera, Bonos
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Comp_Plan_Overview.pdf
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-spreadsheet text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M8 13h2"></path>
<path d="M14 13h2"></path>
<path d="M8 17h2"></path>
<path d="M14 17h2"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Bonus_Calculator.xlsx
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all">
<svg className="lucide lucide-thumbs-up w-6 h-6" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12"></path>
<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Buenas Prácticas
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Scripts de venta, Tips
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Sales_Scripts_v5.pdf
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Handling_Objections.docx
                        </span>
</div>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 group-hover:bg-slate-200 group-hover:text-slate-800 transition-all">
<svg className="lucide lucide-folder-lock w-6 h-6" data-lucide="folder-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="8" x="14" y="17"></rect>
<path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"></path>
<path d="M20 17v-2a2 2 0 1 0-4 0v2"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">
                    Mis Documentos
                  </h3>
<p className="text-[0.65rem] text-slate-500 mt-1">
                    Privado, Borradores
                  </p>
<div className="mt-4 pt-3 border-t border-slate-100">
<p className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Últimos archivos
                    </p>
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          My_Notes_Draft.txt
                        </span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-presentation text-slate-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
<span className="text-[0.65rem] font-medium text-slate-600 truncate">
                          Presentation_Draft.pptx
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col" id="section-equipo">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">
                    Estructura Comercial
                  </h2>
<p className="text-sm text-slate-500 mt-1">
                    Visualización jerárquica de líderes y red.
                  </p>
</div>
</div>
<div className="flex-1 overflow-x-auto overflow-y-auto pb-10">
<div className="min-w-[800px] flex justify-center py-8">

<div className="flex flex-col items-center gap-12">

<div className="relative z-10" onclick="openUserModal('Ana López', 'Commercial Leader', false)">
<div className="w-48 bg-white border-2 border-slate-900 rounded-2xl p-3 shadow-xl cursor-pointer hover:scale-105 transition-transform flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                          AL
                        </div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900">
                            Ana López
                          </span>
<span className="text-[0.6rem] text-slate-500 uppercase tracking-wide">
                            Comm. Leader
                          </span>
</div>
</div>

<div className="absolute -bottom-12 left-1/2 w-px h-12 bg-slate-300 -translate-x-1/2"></div>
</div>

<div className="relative flex items-start gap-16">

<div className="absolute top-[-2rem] left-[15%] right-[15%] h-px bg-slate-300"></div>

<div className="flex flex-col items-center relative">
<div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-300 -translate-x-1/2"></div>
<div className="w-40 bg-white border border-slate-200 rounded-xl p-3 shadow-md cursor-pointer hover:border-sky-500 hover:shadow-md transition-all mb-12" onclick="openUserModal('Carlos Ruiz', 'Senior Commercial', true)">
<div className="flex items-center gap-2">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-[0.65rem]">
                                CR
                              </div>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
<span className="text-[0.5rem] text-white font-bold">
                                  !
                                </span>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">
                                Carlos Ruiz
                              </span>
<span className="text-[0.6rem] text-slate-500">
                                Senior
                              </span>
</div>
</div>
</div>

<div className="absolute bottom-[6.5rem] left-1/2 w-px h-6 bg-slate-300 -translate-x-1/2"></div>

<div className="flex gap-4 relative mt-[-2rem]">
<div className="absolute -top-4 left-4 right-4 h-px bg-slate-300"></div>

<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 1', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Eva M.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 2', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Juan P.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 3', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Sara L.
                              </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center relative">
<div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-300 -translate-x-1/2"></div>
<div className="w-40 bg-white border border-slate-200 rounded-xl p-3 shadow-md cursor-pointer hover:border-sky-500 hover:shadow-md transition-all mb-12" onclick="openUserModal('Maria Gomez', 'Senior Commercial', false)">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[0.65rem]">
                              MG
                            </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">
                                Maria G.
                              </span>
<span className="text-[0.6rem] text-slate-500">
                                Senior
                              </span>
</div>
</div>
</div>

<div className="absolute bottom-[6.5rem] left-1/2 w-px h-6 bg-slate-300 -translate-x-1/2"></div>

<div className="flex gap-4 relative mt-[-2rem]">
<div className="absolute -top-4 left-4 right-4 h-px bg-slate-300"></div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 4', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Luis R.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 5', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Ana S.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 6', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Tom T.
                              </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center relative">
<div className="absolute -top-8 left-1/2 w-px h-8 bg-slate-300 -translate-x-1/2"></div>
<div className="w-40 bg-white border border-slate-200 rounded-xl p-3 shadow-md cursor-pointer hover:border-sky-500 hover:shadow-md transition-all mb-12" onclick="openUserModal('David P.', 'Senior Commercial', false)">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-[0.65rem]">
                              DP
                            </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">
                                David P.
                              </span>
<span className="text-[0.6rem] text-slate-500">
                                Senior
                              </span>
</div>
</div>
</div>

<div className="absolute bottom-[6.5rem] left-1/2 w-px h-6 bg-slate-300 -translate-x-1/2"></div>

<div className="flex gap-4 relative mt-[-2rem]">
<div className="absolute -top-4 left-4 right-4 h-px bg-slate-300"></div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 7', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Pol Q.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 8', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Kim J.
                              </div>
</div>
</div>
<div className="flex flex-col items-center relative">
<div className="absolute -top-4 w-px h-4 bg-slate-300"></div>
<div className="w-24 bg-white border border-slate-100 rounded-lg p-2 text-center shadow-sm hover:bg-slate-50 cursor-pointer" onclick="openUserModal('User 9', 'Junior', false)">
<div className="text-[0.6rem] font-medium text-slate-700">
                                Noa B.
                              </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col bg-slate-50" id="section-messages">
<div className="flex-1 flex overflow-hidden">
<aside className="w-80 bg-white border-r border-slate-200 flex flex-col">
<div className="p-4 border-b border-slate-100">
<h2 className="text-lg font-bold text-slate-900">Chats</h2>
<div className="mt-2 relative">
<input className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-xs focus:ring-1 focus:ring-slate-200 outline-none" placeholder="Search..." type="text"/>
<svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="search"></svg>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<div className="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                        MG
                      </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">
                            Maria Gomez
                          </span>
<span className="text-[0.6rem] text-slate-400">
                            10:42
                          </span>
</div>
<p className="text-xs text-slate-500 truncate">
                          Docs for Q4 ready?
                        </p>
</div>
</div>
<div className="p-3 bg-sky-50 cursor-pointer border-l-2 border-sky-500 flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xs">
                        JS
                      </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">
                            Juan Soler
                          </span>
<span className="text-[0.6rem] text-slate-400">Now</span>
</div>
<p className="text-xs text-slate-700 font-medium truncate">
                          Meeting at 3 PM confirmed.
                        </p>
</div>
</div>
</div>
</aside>
<div className="flex-1 flex flex-col bg-[#efeae2] bg-opacity-50">
<header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-xs">
                        JS
                      </div>
<div>
<h3 className="text-sm font-bold text-slate-900">
                          Juan Soler
                        </h3>
<p className="text-xs text-emerald-600">Online</p>
</div>
</div>
<div className="flex gap-3 text-slate-400">
<svg className="w-5 h-5 cursor-pointer hover:text-slate-600" data-lucide="phone"></svg><svg className="w-5 h-5 cursor-pointer hover:text-slate-600" data-lucide="more-vertical"></svg>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 space-y-4">
<div className="flex justify-center">
<span className="bg-white/80 px-3 py-1 rounded-full text-[0.6rem] text-slate-500 shadow-sm">
                        Today
                      </span>
</div>
<div className="flex justify-end">
<div className="bg-sky-100 text-slate-900 px-4 py-2 rounded-2xl rounded-tr-none max-w-md shadow-sm text-sm">
<p>Hi Juan, are we still on for 3 PM?</p>
<span className="block text-[0.6rem] text-sky-700/60 text-right mt-1">
                          10:30 AM
                        </span>
</div>
</div>
<div className="flex justify-start">
<div className="bg-white text-slate-900 px-4 py-2 rounded-2xl rounded-tl-none max-w-md shadow-sm text-sm">
<p>Yes, absolutely. Meeting at 3 PM confirmed.</p>
<span className="block text-[0.6rem] text-slate-400 text-right mt-1">
                          10:45 AM
                        </span>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-slate-200">
<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-slate-600">
<svg className="w-5 h-5" data-lucide="paperclip"></svg>
</button>
<input className="flex-1 px-4 py-2.5 bg-slate-100 rounded-full text-sm outline-none focus:ring-1 focus:ring-slate-300" placeholder="Type a message" type="text"/>
<button className="p-2.5 bg-sky-500 text-white rounded-full hover:bg-sky-600 shadow-md">
<svg className="w-4 h-4" data-lucide="send"></svg>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col p-8 bg-slate-50/50" id="section-mentoring">
<div className="flex flex-col h-full bg-slate-50/50">

<div className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200/60">
<div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Mentoring Academy
                    </h2>
<p className="text-sm text-slate-500 mt-1">
                      Skill development &amp; AI-powered roleplay scenarios.
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold border border-indigo-100 flex items-center gap-2">
<svg className="lucide lucide-trophy" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17"></path>
<path d="M14 14.66V17"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
                      Level 4: Leader
                    </div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

<div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-full overflow-hidden xl:col-span-12">
<div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<div className="flex items-center gap-2">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<svg className="lucide lucide-graduation-cap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
<path d="M22 10v6"></path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</svg>
</div>
<h3 className="font-bold text-slate-900 text-sm">
                            Historial de Cursos
                          </h3>
</div>
<div className="flex gap-2">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-transparent hover:bg-white hover:shadow-sm transition-all">
                            All Levels
                          </button>
<button className="text-xs font-medium text-white bg-slate-900 px-3 py-1.5 rounded-lg shadow-md hover:bg-slate-800 transition-all flex items-center gap-1">
<svg className="lucide lucide-download" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                            Export
                          </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-100 text-[0.65rem] uppercase tracking-widest text-slate-400 font-bold">
<th className="px-6 py-4">Título del Curso</th>
<th className="px-4 py-4">Área de conocimiento</th>
<th className="px-4 py-4">Status</th>
<th className="px-4 py-4 text-right">
                                Fecha de Finalización
                              </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="font-semibold text-slate-900">
                                    Compliance Basics
                                  </span>
</div>
</td>
<td className="px-4 py-4">
<span className="text-sm text-slate-600">
                                  Legal y Ética
                                </span>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[0.65rem] font-bold border border-emerald-100">
                                  Completed
                                </span>
</td>
<td className="px-4 py-4 text-slate-500 text-xs text-right">
                                Oct 15, 2023
                              </td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
<span className="font-semibold text-slate-900">
                                    Handling Price Objections
                                  </span>
</div>
</td>
<td className="px-4 py-4">
<span className="text-sm text-slate-600">
                                  Ventas y Negociación
                                </span>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[0.65rem] font-bold border border-amber-100">
                                  In Progress
                                </span>
</td>
<td className="px-4 py-4 text-slate-400 text-xs text-right">
                                -
                              </td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<span className="font-semibold text-slate-500">
                                    Advanced Leadership
                                  </span>
</div>
</td>
<td className="px-4 py-4">
<span className="text-sm text-slate-600">
                                  Gestión de Equipos
                                </span>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[0.65rem] font-bold border border-slate-200">
                                  Pending
                                </span>
</td>
<td className="px-4 py-4 text-slate-400 text-xs text-right">
                                -
                              </td>
</tr>
<tr className="hover:bg-rose-50/10 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<span className="font-semibold text-slate-900">
                                    Product Line Q4
                                  </span>
</div>
</td>
<td className="px-4 py-4">
<span className="text-sm text-slate-600">
                                  Producto
                                </span>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[0.65rem] font-bold border border-rose-100">
                                  Expired
                                </span>
</td>
<td className="px-4 py-4 text-rose-600 font-bold text-xs text-right">
                                Oct 20, 2024
                              </td>
</tr>
</tbody>
</table>
</div>
</div>

</div>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col p-8 overflow-y-auto" id="section-compliance">
<div className="flex flex-col h-full bg-slate-50/50">

<div className="px-8 py-8">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Compliance &amp; Risk Center
                      </h2>
<p className="text-sm text-slate-500 mt-1">
                        Automated monitoring of social activity and claims.
                      </p>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 text-slate-700 shadow-sm">
<svg className="lucide lucide-download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                      Export Report
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                          Compliance Score
                        </span>
<span className="flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full">
<svg className="lucide lucide-shield-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-bold text-slate-900 tracking-tight">
                          94
                          <span className="text-lg text-slate-400 font-normal">
                            /100
                          </span>
</span>
</div>
<p className="text-xs text-slate-500 mt-2">
                        Top 5% of organization. Keep it up!
                      </p>
</div>

<div className="bg-white border-l-4 border-l-amber-500 border-y border-r border-slate-200 rounded-r-2xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                          Active Alerts
                        </span>
<span className="flex items-center justify-center w-6 h-6 bg-amber-100 text-amber-600 rounded-full">
<svg className="lucide lucide-alert-octagon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-bold text-slate-900 tracking-tight">
                          2
                        </span>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                          Needs Action
                        </span>
</div>
<p className="text-xs text-slate-500 mt-2">
                        1 High Risk, 1 Medium Risk
                      </p>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">
                          Auto-Resolved
                        </span>
<span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full">
<svg className="lucide lucide-bot" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-bold text-slate-900 tracking-tight">
                          142
                        </span>
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          This Month
                        </span>
</div>
<p className="text-xs text-slate-500 mt-2">
                        Typos, minor brand inconsistencies
                      </p>
</div>
</div>

<h3 className="text-sm font-bold text-slate-900 mb-4">
                    Flagged Activity Feed
                  </h3>
<div className="space-y-4">

<div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
<div className="w-32 h-24 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-slate-400 overflow-hidden relative group cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<span className="relative z-10 bg-black/50 text-white px-2 py-1 rounded text-[0.6rem] font-bold">
                          Instagram
                        </span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h4 className="text-sm font-bold text-slate-900">
                              Income Claim Violation
                            </h4>
<p className="text-xs text-slate-500">
                              Posted by
                              <span className="font-medium text-slate-700">
                                Sarah J.
                              </span>
                              • 2 hours ago
                            </p>
</div>
<span className="px-2 py-1 bg-rose-50 text-rose-600 border border-rose-100 rounded text-[0.6rem] font-bold uppercase">
                            High Risk
                          </span>
</div>
<div className="bg-slate-50 p-2 rounded-lg border border-slate-100 mb-2">
<p className="text-xs text-slate-600 italic">
                            "Join my team and make
                            <span className="bg-rose-100 text-rose-800 px-1 rounded">
                              $5k in your first month guaranteed!
                            </span>
                            💸 #easy money"
                          </p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-indigo-600">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                            Suggestion: "Potential to earn..." (Add Income
                            Disclosure)
                          </div>
<div className="flex-1 h-px bg-slate-100"></div>
<button className="text-xs font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                            Review Content
                          </button>
</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
<div className="w-32 h-24 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-slate-400 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center">
<svg className="lucide lucide-file-text text-slate-300 mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
</svg>
<span className="text-[0.6rem] font-bold text-slate-400">
                            Blog Post
                          </span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h4 className="text-sm font-bold text-slate-900">
                              Missing Distributor Logo
                            </h4>
<p className="text-xs text-slate-500">
                              Posted by
                              <span className="font-medium text-slate-700">
                                Mike T.
                              </span>
                              • Yesterday
                            </p>
</div>
<span className="px-2 py-1 bg-amber-50 text-amber-600 border border-amber-100 rounded text-[0.6rem] font-bold uppercase">
                            Medium Risk
                          </span>
</div>
<p className="text-xs text-slate-600 mb-2">
                          Personal blog post "My Wellness Journey" mentions
                          brand products but lacks required "Independent
                          Distributor" badge in footer.
                        </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            Auto-email sent to user.
                          </div>
<div className="flex-1 h-px bg-slate-100"></div>
<button className="text-xs font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                            Dismiss
                          </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col" id="section-campanias">
<div className="flex flex-col h-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pt-6 px-8">

<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-list-filter w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 17h20"></path>
<path d="M2 12h20"></path>
<path d="M2 7h20"></path>
</svg>
                      Status
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-percent w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="19" x2="5" y1="5" y2="19"></line>
<circle cx="6.5" cy="6.5" r="2.5"></circle>
<circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>
                      Valor Actual (%)
                    </button>
</div>

<button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all group">
<svg className="lucide lucide-plus group-hover:scale-110 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                    Nueva Campaña
                  </button>
</div>

<div className="flex-1 overflow-hidden px-8 pb-8">
<div className="bg-white border border-slate-200 rounded-3xl shadow-sm h-full flex flex-col">
<div className="overflow-auto flex-1">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="sticky top-0 bg-white z-10">
<tr className="border-b border-slate-200/60 bg-slate-50/50">
<th className="pl-6 pr-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Nombre de Campaña
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Fecha Inicio
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Responsable
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Comerciales
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Objetivo
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Status
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Valor Actual
                            </th>
<th className="px-4 py-4 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                              Progreso (%)
                            </th>
<th className="pr-6 pl-4 py-4 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                                Summer Clearance
                              </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">
                              Aug 15
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                                  MG
                                </div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex -space-x-1.5 overflow-hidden">
<div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[0.5rem] text-white font-bold">
                                  +13
                                </div>
</div>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              €100,000
                            </td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[0.6rem] font-bold border border-emerald-100">
<div className="w-1 h-1 rounded-full bg-emerald-500 mr-1.5"></div>
                                Active
                              </span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              €84,200
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-slate-100 rounded-full w-16 overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '84%'}}></div>
</div>
<span className="text-[0.6rem] font-bold text-slate-600">
                                  84%
                                </span>
</div>
</td>
<td className="pr-6 pl-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-more-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                                Q4 Early Bird
                              </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">
                              Oct 24
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                                  AU
                                </div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-xs text-slate-400 italic">
                                Pending assignment
                              </span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              €50,000
                            </td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[0.6rem] font-bold border border-slate-200">
<div className="w-1 h-1 rounded-full bg-slate-400 mr-1.5"></div>
                                Draft
                              </span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              €0
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-slate-100 rounded-full w-16 overflow-hidden">
<div className="h-full bg-slate-300 rounded-full" style={{width: '0%'}}></div>
</div>
<span className="text-[0.6rem] font-bold text-slate-400">
                                  0%
                                </span>
</div>
</td>
<td className="pr-6 pl-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-more-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                                Black Friday Teaser
                              </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">
                              Nov 01
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                                  MR
                                </div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex -space-x-1.5 overflow-hidden">
<div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[0.5rem] text-white font-bold">
                                  +10
                                </div>
</div>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              500 Leads
                            </td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[0.6rem] font-bold border border-amber-100">
<div className="w-1 h-1 rounded-full bg-amber-500 mr-1.5"></div>
                                Approval
                              </span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              0 Leads
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-slate-100 rounded-full w-16 overflow-hidden">
<div className="h-full bg-amber-400 rounded-full" style={{width: '0%'}}></div>
</div>
<span className="text-[0.6rem] font-bold text-slate-400">
                                  0%
                                </span>
</div>
</td>
<td className="pr-6 pl-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-more-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                                New Distributor Promo
                              </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">
                              Sep 01
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-[0.6rem] font-bold border border-white shadow-sm">
                                  JS
                                </div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex -space-x-1.5 overflow-hidden">
<div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[0.5rem] text-white font-bold">
                                  +2
                                </div>
</div>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              50 Recruits
                            </td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[0.6rem] font-bold border border-emerald-100">
<div className="w-1 h-1 rounded-full bg-emerald-500 mr-1.5"></div>
                                Active
                              </span>
</td>
<td className="px-4 py-3 text-xs font-medium text-slate-700">
                              32 Recruits
                            </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-slate-100 rounded-full w-16 overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '64%'}}></div>
</div>
<span className="text-[0.6rem] font-bold text-slate-600">
                                  64%
                                </span>
</div>
</td>
<td className="pr-6 pl-4 py-3 text-right">
<button className="text-slate-300 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-more-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col" id="section-leads">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

<div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 self-start">
<button className="px-3 py-1.5 rounded-md bg-white text-slate-900 text-xs font-medium shadow-sm ring-1 ring-black/5 transition-all">
                    Table
                  </button>
<button className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-700 text-xs font-medium transition-all">
                    Kanban
                  </button>
</div>

<div className="flex items-center gap-2 flex-wrap">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-flag w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
                    Campaña
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-share-2 w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
                    Red Social
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-user w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                    Assigned to
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-list-filter w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2 17h20"></path>
<path d="M2 12h20"></path>
<path d="M2 7h20"></path>
</svg>
                    Status
                  </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 border-dashed rounded-full text-xs font-medium text-slate-600 hover:border-slate-300 transition-all">
<svg className="lucide lucide-calendar w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                    Fecha Fin
                  </button>
<button className="ml-2 flex items-center justify-center w-7 h-7 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-md group">
<svg className="lucide lucide-plus w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex-1 flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-200/60">
<th className="pl-6 pr-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          ID Lead
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Nombre
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Tipología
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Campaña
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Red Social
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest w-48">
                          Hot Topics
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Assigned
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Status
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                          Fecha Fin
                        </th>
<th className="px-4 py-3 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest text-center">
                          Summary
                        </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3 text-xs font-mono text-slate-500">
                          #L-2041
                        </td>
<td className="px-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                            Elena Foster
                          </span>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-blue-50 text-blue-600 border border-blue-100">
                            Comercial
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-600">
                          Q4 Early Bird
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<svg className="lucide lucide-instagram text-pink-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
                            Instagram
                          </div>
</td>
<td className="px-4 py-3 text-xs text-slate-500 truncate max-w-[12rem]">
                          Product inquiry, Pricing, Shipping
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[0.6rem] font-bold">
                              MG
                            </div>
<span className="text-xs text-slate-600">Maria G.</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[0.6rem] font-bold border border-amber-100">
                            Opportunity
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">Nov 15</td>
<td className="px-4 py-3 text-center">
<button className="text-slate-300 hover:text-sky-600 transition-colors">
<svg className="lucide lucide-file-text" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3 text-xs font-mono text-slate-500">
                          #L-2042
                        </td>
<td className="px-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                            David Chen
                          </span>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-purple-50 text-purple-600 border border-purple-100">
                            Cliente
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-600">
                          Black Friday Teaser
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<svg className="lucide lucide-linkedin text-blue-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
                            LinkedIn
                          </div>
</td>
<td className="px-4 py-3 text-xs text-slate-500 truncate max-w-[12rem]">
                          Bulk order, Partnership
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-[0.6rem] font-bold">
                              JS
                            </div>
<span className="text-xs text-slate-600">Juan S.</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[0.6rem] font-bold border border-emerald-100">
                            Quote Sent
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">Nov 02</td>
<td className="px-4 py-3 text-center">
<button className="text-slate-300 hover:text-sky-600 transition-colors">
<svg className="lucide lucide-file-text" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="pl-6 pr-4 py-3 text-xs font-mono text-slate-500">
                          #L-2043
                        </td>
<td className="px-4 py-3">
<span className="text-sm font-semibold text-slate-900">
                            Sarah Miller
                          </span>
</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 rounded text-[0.6rem] font-bold bg-blue-50 text-blue-600 border border-blue-100">
                            Comercial
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-600">
                          Organic Search
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<svg className="lucide lucide-facebook text-blue-700" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
                            Facebook
                          </div>
</td>
<td className="px-4 py-3 text-xs text-slate-500 truncate max-w-[12rem]">
                          Join team, Compensation plan
                        </td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[0.6rem] font-bold">
                              --
                            </div>
<span className="text-xs text-slate-400">
                              Unassigned
                            </span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[0.6rem] font-bold border border-slate-200">
                            SQL
                          </span>
</td>
<td className="px-4 py-3 text-xs text-slate-500">-</td>
<td className="px-4 py-3 text-center">
<button className="text-slate-300 hover:text-sky-600 transition-colors">
<svg className="lucide lucide-file-text" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="hidden h-full flex flex-col" id="section-settings">
<div className="h-full overflow-y-auto px-8 pb-12">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight" data-t="settings.title">
                      Settings
                    </h2>
<p className="text-sm text-slate-500 mt-1" data-t="settings.sub">
                      Manage system preferences, agent behaviors, and security.
                    </p>
</div>
<button className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium hover:bg-slate-800 shadow-lg shadow-slate-900/10" data-t="settings.save">
                    Save Changes
                  </button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="space-y-6">

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-user w-4 h-4 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                        Profile Information
                      </h3>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 flex items-center justify-center text-white text-xl font-bold shadow-md ring-4 ring-slate-50">
                          AU
                        </div>
<div>
<button className="text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 transition-colors">
                            Change Avatar
                          </button>
<p className="text-[0.6rem] text-slate-400 mt-1.5">
                            Max file size 5MB
                          </p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Full Name
                          </label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 transition-all" type="text" value="Admin User"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Email Address
                          </label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 transition-all" type="email" value="admin@linaris.os"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Role
                          </label>
<input className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed" disabled="" type="text" value="Sales Leader"/>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-monitor w-4 h-4 text-slate-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
                        System
                      </h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-700">
                            Language
                          </span>
<select className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none">
<option>English</option>
<option>Español</option>
</select>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-700">
                            Timezone
                          </span>
<select className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none">
<option>Europe/Madrid (CET)</option>
<option>UTC</option>
</select>
</div>
<div className="flex items-center justify-between pt-2 border-t border-slate-50">
<span className="text-xs font-medium text-slate-700">
                            Dark Mode
                          </span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition-colors">
<span className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform translate-x-1"></span>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
<h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-bot w-4 h-4 text-slate-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
                        Agent Behavior
                      </h3>
<div className="mb-6">
<div className="flex justify-between items-end mb-2">
<label className="text-xs font-medium text-slate-700">
                            Autonomy Level
                          </label>
<span className="text-[0.65rem] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                            Semi-Autonomous
                          </span>
</div>
<input className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500" max="3" min="1" step="1" type="range" value="2"/>
<div className="flex justify-between mt-1 text-[0.6rem] text-slate-400 font-medium uppercase tracking-wide">
<span>Human-in-loop</span>
<span>Hybrid</span>
<span>Full Auto</span>
</div>
<p className="text-[0.65rem] text-slate-500 mt-2 leading-snug">
                          Agents will draft tasks and suggest actions, but
                          require approval for communications sent to high-value
                          leads.
                        </p>
</div>
<div className="space-y-4 pt-4 border-t border-slate-50">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Daily Action Cap (Global)
                          </label>
<div className="relative">
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sky-500/20 transition-all pl-10" type="number" value="500"/>
<div className="absolute left-3 top-2 text-slate-400">
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">
                            Enabled Models
                          </label>
<div className="space-y-2">
<label className="flex items-center justify-between p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-700">
                                  GPT-4o (Reasoning)
                                </span>
</div>
<span className="text-[0.6rem] text-slate-400">
                                High Cost
                              </span>
</label>
<label className="flex items-center justify-between p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-700">
                                  Claude 3.5 Sonnet (Coding)
                                </span>
</div>
<span className="text-[0.6rem] text-slate-400">
                                Medium Cost
                              </span>
</label>
<label className="flex items-center justify-between p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-slate-300"></span>
<span className="text-xs font-medium text-slate-500">
                                  Llama 3 (Local)
                                </span>
</div>
<span className="text-[0.6rem] text-slate-400">
                                Free
                              </span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-bell w-4 h-4 text-slate-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
                        Notifications
                      </h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<span className="block text-xs font-medium text-slate-700">
                              Critical Alerts
                            </span>
<span className="block text-[0.6rem] text-slate-400">
                              Churn risk, compliance flags
                            </span>
</div>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500 transition-colors">
<span className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform translate-x-5 shadow-sm"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<span className="block text-xs font-medium text-slate-700">
                              Daily Digest
                            </span>
<span className="block text-[0.6rem] text-slate-400">
                              Morning summary email
                            </span>
</div>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500 transition-colors">
<span className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform translate-x-5 shadow-sm"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<span className="block text-xs font-medium text-slate-700">
                              Task Assignments
                            </span>
<span className="block text-[0.6rem] text-slate-400">
                              When agents assign tasks
                            </span>
</div>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition-colors">
<span className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform translate-x-1 shadow-sm"></span>
</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-shield w-4 h-4 text-slate-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
                        Security &amp; API
                      </h3>
<div className="space-y-4">
<button className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors group">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
<svg className="lucide lucide-key" data-lucide="key" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="15.5" r="5.5"></circle>
<path d="m21 2-9.6 9.6"></path>
<path d="m15.5 7.5 3 3L22 7l-3-3"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-700">
                              Manage API Keys
                            </span>
</div>
<svg className="lucide lucide-chevron-right text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors group">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500">
<svg className="lucide lucide-lock" data-lucide="lock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-700">
                              Two-Factor Auth
                            </span>
</div>
<span className="text-[0.6rem] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                            Enabled
                          </span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="hidden xl:flex flex-col w-[26rem] border-l border-slate-200/60 bg-white shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.03)] z-20" id="right-sidebar">
<div className="flex flex-col h-full" id="panel-command-agent">

<div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between">
<div>
<span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                  IA Agent
                </span>
<span className="text-sm font-bold text-slate-900" id="agent-panel-title">
                  Command Agent
                </span>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
</svg>
</button>
<button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M12 7v5l4 2"></path>
</svg>
</button>
<div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100 ml-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[0.65rem] font-medium text-emerald-700">
                    Online
                  </span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30" id="agent-panel-chat">
<div className="hidden grid grid-cols-2 gap-2 mb-2 fade-in" id="mentoring-actions">
<button className="flex flex-col gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-400 hover:shadow-md transition-all text-left group">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-mic" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
<line x1="8" x2="16" y1="22" y2="22"></line>
</svg>
</div>
<div>
<span className="block text-xs font-bold text-slate-900 group-hover:text-indigo-700">
                      Roleplay
                    </span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">
                      Simular
                    </span>
</div>
</button>
<button className="flex flex-col gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition-all text-left group">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<svg className="lucide lucide-book-open" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</div>
<div>
<span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                      Resumir
                    </span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">
                      Conceptos
                    </span>
</div>
</button>
<button className="flex flex-col gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all text-left group">
<div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
<svg className="lucide lucide-edit-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<div>
<span className="block text-xs font-bold text-slate-900 group-hover:text-amber-700">
                      Refinar
                    </span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">
                      Pitch
                    </span>
</div>
</button>
<button className="flex flex-col gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:border-pink-400 hover:shadow-md transition-all text-left group">
<div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
<svg className="lucide lucide-brain-circuit" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 1 19.5 5.62"></path>
<path d="M12 18a4.5 4.5 0 0 0 3-4"></path>
<path d="M21.5 13a4.5 4.5 0 0 0-3-4"></path>
<path d="M15 9a3 3 0 0 1 3-3"></path>
</svg>
</div>
<div>
<span className="block text-xs font-bold text-slate-900 group-hover:text-pink-700">
                      Quiz
                    </span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">
                      Test
                    </span>
</div>
</button>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
<svg className="lucide lucide-bot w-4 h-4 text-slate-700" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="space-y-1">
<div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-sm text-slate-600 shadow-sm leading-relaxed" id="agent-panel-greeting">
                    Hola, soy tu agente de mando. Te ayudo con KPIs, campañas y
                    decisiones sobre tu red MLM.
                  </div>
</div>
</div>
</div>

<div className="p-6 pt-0 bg-slate-50/30">
<div className="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:border-slate-300 transition-all">
<textarea className="w-full text-sm text-slate-700 placeholder:text-slate-400 resize-none outline-none bg-transparent p-2" id="agent-panel-input" placeholder="Pide un resumen ejecutivo..." rows="3"></textarea>
<div className="flex items-center justify-between px-2 pb-1">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-plus-circle w-5 h-5" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors shadow-lg shadow-slate-900/10" id="agent-panel-send">
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="hidden flex flex-col h-full bg-white" id="panel-research-history">

<div className="h-16 px-6 border-b border-slate-100 flex items-center justify-between bg-white">
<div>
<span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                  Library
                </span>
<span className="text-sm font-bold text-slate-900">
                  Research History
                </span>
</div>
<button className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
</svg>
</button>
</div>

<div className="p-4 border-b border-slate-100 bg-slate-50/50">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all shadow-sm" placeholder="Search past analysis..." type="text"/>
</div>
<div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
<button className="px-2.5 py-1 bg-slate-900 text-white rounded-lg text-[0.65rem] font-medium whitespace-nowrap shadow-sm">
                  All
                </button>
<button className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-[0.65rem] font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">
                  Market
                </button>
<button className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-[0.65rem] font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">
                  Competitors
                </button>
<button className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-[0.65rem] font-medium whitespace-nowrap hover:bg-slate-50 transition-colors">
                  Trends
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30">

<div className="group p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md cursor-pointer transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-700 line-clamp-1 group-hover:text-slate-900">
                    Anti-aging Trends Spain
                  </span>
<span className="text-[0.6rem] text-slate-400">2h ago</span>
</div>
<p className="text-[0.65rem] text-slate-500 line-clamp-2 mb-2 leading-relaxed">
                  Analysis of top 5 competitors in the dermocosmetic sector
                  focused on Q4 projections.
                </p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded-md bg-violet-50 text-violet-600 text-[0.6rem] font-medium border border-violet-100">
                    Market
                  </span>
<span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[0.6rem] font-medium border border-slate-200">
                    PDF
                  </span>
</div>
</div>

<div className="group p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md cursor-pointer transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-700 line-clamp-1 group-hover:text-slate-900">
                    Competitor Pricing Q4
                  </span>
<span className="text-[0.6rem] text-slate-400">Yesterday</span>
</div>
<p className="text-[0.65rem] text-slate-500 line-clamp-2 mb-2 leading-relaxed">
                  Price changes in energy supplements across top 3 brands.
                </p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[0.6rem] font-medium border border-emerald-100">
                    Competitors
                  </span>
</div>
</div>

<div className="group p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md cursor-pointer transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-700 line-clamp-1 group-hover:text-slate-900">
                    Sentiment Analysis
                  </span>
<span className="text-[0.6rem] text-slate-400">Oct 24</span>
</div>
<p className="text-[0.65rem] text-slate-500 line-clamp-2 mb-2 leading-relaxed">
                  Review of social media sentiment regarding new product launch.
                </p>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded-md bg-sky-50 text-sky-600 text-[0.6rem] font-medium border border-sky-100">
                    Sentiment
                  </span>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4" id="user-modal">
<div className="bg-white w-full max-w-md rounded-3xl shadow-2xl ring-1 ring-white/20 p-6 transform transition-all scale-100">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xl font-bold border-4 border-white shadow-sm" id="modal-avatar">
              XY
            </div>
<div>
<h3 className="text-lg font-bold text-slate-900" id="modal-name">
                User Name
              </h3>
<span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-full" id="modal-role">
                Role
              </span>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600" onclick="closeUserModal()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="hidden mb-6 bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-3" id="modal-warning">
<svg className="lucide lucide-alert-triangle w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<div>
<span className="text-xs font-bold text-red-800 block">
              Performance Warning
            </span>
<p className="text-xs text-red-600 mt-0.5">
              Activity dropped 15% below threshold this week.
            </p>
</div>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
<span className="text-[0.65rem] text-slate-400 uppercase font-bold tracking-wider">
                Sales YTD
              </span>
<p className="text-lg font-bold text-slate-900">€42,500</p>
</div>
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
<span className="text-[0.65rem] text-slate-400 uppercase font-bold tracking-wider">
                Active Deals
              </span>
<p className="text-lg font-bold text-slate-900">12</p>
</div>
</div>
<button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
            View Full Profile
          </button>
</div>
</div>
</div>


    </>
  );
}
