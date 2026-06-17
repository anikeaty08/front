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



tailwind.config = { darkMode: 'class' };



function toggleTheme() {
const html = document.documentElement;
const isDark = html.classList.contains('dark');
if (isDark) {
html.classList.remove('dark');
localStorage.setItem('theme', 'light');
updateThemeToggleUI(false);
} else {
html.classList.add('dark');
localStorage.setItem('theme', 'dark');
updateThemeToggleUI(true);
}
}
function updateThemeToggleUI(isDark) {
const btn = document.getElementById('theme-toggle-btn');
const on = document.getElementById('theme-indicator-on');
const off = document.getElementById('theme-indicator-off');
if (!btn) return;
if (isDark) {
on.className = 'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
off.className = 'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
btn.className = 'inline-flex items-center rounded-full bg-neutral-800 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
} else {
on.className = 'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
off.className = 'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
btn.className = 'inline-flex items-center rounded-full bg-neutral-200 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
}
}
(function() {
const saved = localStorage.getItem('theme');
const html = document.documentElement;
// Default to Light Mode (only enable dark if explicitly saved as 'dark')
if (saved === 'dark') {
html.classList.add('dark');
updateThemeToggleUI(true);
} else {
html.classList.remove('dark');
updateThemeToggleUI(false);
}
})();



function toggleMenuAgent(menu) {
const panel = document.getElementById('menu-agent-panel');
const arrow = document.getElementById('menu-agent-arrow');
const title = document.getElementById('menu-agent-title');
const subtitle = document.getElementById('menu-agent-subtitle');
const container = document.getElementById('menu-agent-chat-container');
if (!panel || !arrow || !title || !subtitle || !container) return;
let agentName = '';
let agentSubtitle = '';
switch (menu) {
case 'dashboard':
agentName = 'Command Agent';
agentSubtitle = 'Agentic overview & KPIs';
break;
case 'tasks':
agentName = 'Project & Community Agent';
agentSubtitle = 'Execution layer · tasks & workflows';
break;
case 'documents':
agentName = 'Backoffice Agent';
agentSubtitle = 'Playbooks, assets & knowledge base';
break;
case 'team':
agentName = 'Team Structure Agent';
agentSubtitle = 'Pods, leaders & churn risk';
break;
case 'campaigns':
agentName = 'Campaigns Agent';
agentSubtitle = 'Multi-agent growth initiatives';
break;
default:
agentName = 'Command Agent';
agentSubtitle = 'Agentic OS Assistant';
}
title.textContent = agentName;
subtitle.textContent = agentSubtitle;
// Reset chat container to initial greeting for each menu
container.innerHTML = `
<div class="flex gap-4">
<div class="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot">
<path d="M12 8V4H8"></path>
<rect width="16" height="12" x="4" y="8" rx="2"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div class="bg-neutral-100 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm">
Hola, soy tu agente para <span class="font-medium">${agentName}</span>. ¿En qué puedo ayudarte en este entorno?
</div>
</div>`;
const isHidden = panel.style.transform === '' || panel.style.transform.includes('100%');
if (isHidden) {
panel.style.transform = 'translateX(0)';
arrow.classList.add('rotate-180');
} else {
panel.style.transform = 'translateX(100%)';
arrow.classList.remove('rotate-180');
}
}



function toggleMenuAgent(menu) {
const panel = document.getElementById('menu-agent-panel');
const arrow = document.getElementById('menu-agent-arrow');
const title = document.getElementById('menu-agent-title');
const subtitle = document.getElementById('menu-agent-subtitle');
const container = document.getElementById('menu-agent-chat-container');
if (!panel || !arrow || !title || !subtitle || !container) return;
let agentName = '';
let agentSubtitle = '';
switch (menu) {
case 'dashboard':
agentName = 'Command Agent';
agentSubtitle = 'Agentic overview & KPIs';
break;
case 'tasks':
agentName = 'Project & Community Agent';
agentSubtitle = 'Execution layer · tasks & workflows';
break;
case 'documents':
agentName = 'Backoffice Agent';
agentSubtitle = 'Playbooks, assets & knowledge base';
break;
case 'team':
agentName = 'Team Structure Agent';
agentSubtitle = 'Pods, leaders & churn risk';
break;
case 'campaigns':
agentName = 'Campaigns Agent';
agentSubtitle = 'Multi-agent growth initiatives';
break;
default:
agentName = 'Command Agent';
agentSubtitle = 'Agentic OS Assistant';
}
title.textContent = agentName;
subtitle.textContent = agentSubtitle;
// Reset chat container to initial greeting for each menu
container.innerHTML = `
<div class="flex gap-4">
<div class="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot">
<path d="M12 8V4H8"></path>
<rect width="16" height="12" x="4" y="8" rx="2"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div class="bg-neutral-100 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm">
Hola, soy tu agente para <span class="font-medium">${agentName}</span>. ¿En qué puedo ayudarte en este entorno?
</div>
</div>`;
const isHidden = panel.style.transform === '' || panel.style.transform.includes('100%');
if (isHidden) {
panel.style.transform = 'translateX(0)';
arrow.classList.add('rotate-180');
} else {
panel.style.transform = 'translateX(100%)';
arrow.classList.remove('rotate-180');
}
}



      // Simple state
      let currentLang = 'EN';
      let isAgentOpen = false;

      function toggleLoginModal() {
          const modal = document.getElementById('login-modal');
          const card = document.getElementById('login-card');
          const backdrop = document.getElementById('login-backdrop');
          const isHidden = modal.classList.contains('hidden');

          if (isHidden) {
              modal.classList.remove('hidden');
              requestAnimationFrame(() => {
                  backdrop.classList.remove('opacity-0');
                  card.classList.remove('opacity-0', 'scale-95');
              });
          } else {
              backdrop.classList.add('opacity-0');
              card.classList.add('opacity-0', 'scale-95');
              setTimeout(() => modal.classList.add('hidden'), 200);
          }
      }

      function handleLogin(event) {
          event.preventDefault();
          const user = document.getElementById('username-input').value.trim();
          const pass = document.getElementById('password-input').value.trim();
          const errorBox = document.getElementById('login-error');

          if (
              (user === 'admin' && pass === 'admin') ||
              (user === 'user' && pass === 'user')
          ) {
              errorBox.classList.add('hidden');
              toggleLoginModal();
              enterApp(user === 'admin' ? 'Admin User' : 'Standard User');
          } else {
              errorBox.classList.remove('hidden');
          }
      }

      function handleSocialLogin(provider) {
          // Demo only – accept any social login
          toggleLoginModal();
          enterApp(provider + ' User');
      }

      function enterApp(name) {
          const landing = document.getElementById('landing-shell');
          const app = document.getElementById('app-shell');
          const authBtn = document.getElementById('auth-btn');
          const userProfile = document.getElementById('user-profile');

          landing.classList.add('hidden');
          app.classList.remove('hidden');

          authBtn.classList.add('hidden');
          userProfile.classList.remove('hidden');

          // Update visible names
          document.getElementById('user-name').textContent = name;
          document.getElementById('app-user-name').textContent = name;
          document.getElementById('user-panel-name').textContent = name;
      }

      function logout() {
          const landing = document.getElementById('landing-shell');
          const app = document.getElementById('app-shell');
          const authBtn = document.getElementById('auth-btn');
          const userProfile = document.getElementById('user-profile');

          app.classList.add('hidden');
          landing.classList.remove('hidden');

          authBtn.classList.remove('hidden');
          userProfile.classList.add('hidden');

          document.getElementById('user-panel').classList.add('hidden');
      }

      function logoutToLanding() {
          logout();
      }

      function toggleUserPanel() {
          const panel = document.getElementById('user-panel');
          panel.classList.toggle('hidden');
          if (!panel.classList.contains('hidden')) {
              panel.classList.add('flex');
          } else {
              panel.classList.remove('flex');
          }
      }

      function toggleAgent() {
          const sidebar = document.getElementById('agent-sidebar');
          const arrow = document.getElementById('agent-arrow');

          isAgentOpen = !isAgentOpen;
          if (isAgentOpen) {
              sidebar.style.transform = 'translateX(0) translateY(-50%)';
              arrow.classList.add('rotate-180');
          } else {
              sidebar.style.transform = 'translateX(calc(100% - 3rem)) translateY(-50%)';
              arrow.classList.remove('rotate-180');
          }
      }

      function switchAppView(view) {
          const views = document.querySelectorAll('.app-view');
          views.forEach(v => v.classList.add('hidden'));

          const active = document.getElementById('view-' + view);
          if (active) active.classList.remove('hidden');

          document.getElementById('breadcrumb-view').textContent =
              view.charAt(0).toUpperCase() + view.slice(1);

          const navButtons = document.querySelectorAll('.app-nav-item');
          navButtons.forEach(btn => btn.classList.remove('bg-white/10', 'border', 'border-white/20'));

          const desktopNav = document.getElementById('nav-' + view);
          const mobileNav = document.getElementById('m-nav-' + view);
          [desktopNav, mobileNav].forEach(btn => {
              if (btn) btn.classList.add('bg-white/10', 'border', 'border-white/20');
          });
      }

      function toggleLanguage() {
          currentLang = currentLang === 'EN' ? 'ES' : 'EN';
          document.getElementById('lang-text').textContent = currentLang;
          const userLang = document.getElementById('user-panel-lang');
          if (userLang) userLang.textContent = currentLang;
          // Copy and textual localization hooks would be wired here.
      }

      // Default view
      switchAppView('dashboard');
    


      function toggleTheme() {
          const html = document.documentElement;
          const isDark = html.classList.contains('dark');
          if (isDark) {
              html.classList.remove('dark');
              localStorage.setItem('theme', 'light');
              updateThemeToggleUI(false);
          } else {
              html.classList.add('dark');
              localStorage.setItem('theme', 'dark');
              updateThemeToggleUI(true);
          }
      }

      function updateThemeToggleUI(isDark) {
          const btn = document.getElementById('theme-toggle-btn');
          const on = document.getElementById('theme-indicator-on');
          const off = document.getElementById('theme-indicator-off');

          if (!btn) return;

          if (isDark) {
              on.className = 'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
              off.className = 'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
              btn.className = 'inline-flex items-center rounded-full bg-neutral-800 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
          } else {
              on.className = 'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
              off.className = 'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
              btn.className = 'inline-flex items-center rounded-full bg-neutral-200 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
          }
      }

      (function() {
          const saved = localStorage.getItem('theme');
          const html = document.documentElement;
          // Default to Light Mode (only enable dark if explicitly saved as 'dark')
          if (saved === 'dark') {
              html.classList.add('dark');
              updateThemeToggleUI(true);
          } else {
              html.classList.remove('dark');
              updateThemeToggleUI(false);
          }
      })();
    


      function toggleMenuAgent(menu) {
        if (menu === 'research') {
          // Mantener el comportamiento actual de Research sin abrir el panel de agente de menú
          return;
        }

        const panel = document.getElementById('menu-agent-panel');
        const arrow = document.getElementById('menu-agent-arrow');
        const title = document.getElementById('menu-agent-title');
        const subtitle = document.getElementById('menu-agent-subtitle');
        const container = document.getElementById('menu-agent-chat-container');

        if (!panel || !arrow || !title || !subtitle || !container) return;

        let agentName = '';
        let agentSubtitle = '';

        switch (menu) {
          case 'dashboard':
            agentName = 'Command Agent';
            agentSubtitle = 'Agentic overview & KPIs';
            break;
          case 'tasks':
            agentName = 'Project & Community Agent';
            agentSubtitle = 'Execution layer · tasks & workflows';
            break;
          case 'documents':
            agentName = 'Backoffice Agent';
            agentSubtitle = 'Playbooks, assets & knowledge base';
            break;
          case 'team':
            agentName = 'Team Structure Agent';
            agentSubtitle = 'Pods, leaders & churn risk';
            break;
          case 'campaigns':
            agentName = 'Campaigns Agent';
            agentSubtitle = 'Multi-agent growth initiatives';
            break;
          default:
            agentName = 'Command Agent';
            agentSubtitle = 'Agentic OS Assistant';
        }

        title.textContent = agentName;
        subtitle.textContent = agentSubtitle;

        // Reset chat container to initial greeting for each menu
        container.innerHTML = `
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <div class="bg-neutral-100 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm">
              Hola, soy tu agente para <span class="font-medium">${agentName}</span>. ¿En qué puedo ayudarte en este entorno?
            </div>
          </div>`;

        const isHidden = panel.style.transform === '' || panel.style.transform.includes('100%');

        if (isHidden) {
          panel.style.transform = 'translateX(0)';
          arrow.classList.add('rotate-180');
        } else {
          panel.style.transform = 'translateX(100%)';
          arrow.classList.remove('rotate-180');
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
      

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center" id="login-modal">
<div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity opacity-0" id="login-backdrop" onclick="toggleLoginModal()"></div>
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10 transform scale-95 opacity-0 transition-all duration-300 border border-white/20" id="login-card">
<button className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors" onclick="toggleLoginModal()">
<svg className="lucide lucide-x" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 text-white mb-4 shadow-lg shadow-neutral-900/20">
<svg className="lucide lucide-user" fill="none" height="1.75rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.75rem" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-2xl font-oswald font-medium text-neutral-900 tracking-tight" id="modal-title">
            Welcome to LINARIS
          </h3>
<p className="text-base text-neutral-500 mt-2" id="modal-subtitle">
            Enter your credentials to access the OS
          </p>
<div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg hidden" id="login-error">
<div className="flex items-center gap-2 text-red-600">
<svg className="lucide lucide-alert-circle" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
<span className="text-xs font-medium">
                Invalid credentials. Try user/user or admin/admin
              </span>
</div>
</div>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-1.5" id="lbl-user">
              User / Email
            </label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400" id="username-input" placeholder="admin" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-1.5" id="lbl-pass">
              Password
            </label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400" id="password-input" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-[0.98]" id="btn-login-submit" type="submit">
            Sign In
          </button>
</form>
<div className="relative my-8">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-neutral-200"></div>
</div>
<div className="relative flex justify-center text-xs uppercase tracking-wider">
<span className="bg-white px-2 text-neutral-400 font-medium" id="txt-or">
              Or continue with
            </span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all group active:scale-95" onclick="handleSocialLogin('Google')">
<svg height="1.125rem" viewbox="0 0 24 24" width="1.125rem" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">
              Google
            </span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-neutral-300 transition-all group active:scale-95" onclick="handleSocialLogin('Meta')">
<svg fill="#0668E1" height="1.25rem" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.66c-1.33 0-1.92-.61-2.45-1.69l-.16-.36c-.53-1.15-1.07-2.3-2.03-2.3s-1.5.89-2.03 2.3l-.16.36c-.52 1.09-1.12 1.69-2.45 1.69-1.53 0-2.37-1.12-2.37-2.45 0-1.92 1.65-3.65 3.65-3.65.65 0 1.25.17 1.76.5.34.22.69.49 1.01.76l.09.07c.45.39.9.78 1.5.78.6 0 1.05-.39 1.5-.78l.09-.07c.32-.27.67-.54 1.01-.76.51-.33 1.11-.5 1.76-.5 2 0 3.65 1.73 3.65 3.65 0 1.33-.84 2.45-2.37 2.45z"></path>
</svg>
<span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900">
              Meta
            </span>
</button>
</div>
</div>
</div>

<div className="fixed flex sidebar-transition h-[70vh] z-50 top-1/2 -translate-y-1/2 right-0 translate-x-[calc(100%-2.5rem)] items-center md:h-[85vh] md:translate-x-[calc(100%-3rem)]" id="agent-sidebar">
<button className="bg-neutral-900 text-white w-10 h-40 rounded-l-xl shadow-lg flex flex-col gap-4 items-center justify-center border-y border-l border-white/10 cursor-pointer hover:bg-neutral-800 transition-colors z-20 outline-none md:w-12 md:h-48" onclick="toggleAgent()">
<svg className="lucide lucide-bot w-[1.25rem] h-[1.25rem] text-slate-50" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<div className="h-px w-6 bg-white/20"></div>
<svg className="lucide lucide-chevron-left transition-transform duration-500 w-[1.25rem] h-[1.25rem]" fill="none" height="1.25rem" id="agent-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="w-full max-w-md h-full bg-white border-l border-neutral-200 shadow-2xl p-4 flex flex-col relative z-10 rounded-bl-2xl md:w-[28rem] md:p-6 md:rounded-bl-3xl">
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white">
<svg className="lucide lucide-sparkles" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"></path>
</svg>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold uppercase tracking-wide font-oswald text-neutral-900" id="agent-sidebar-title">
                Agent Command
              </span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<p className="text-[0.65rem] text-neutral-400 font-space uppercase tracking-widest" id="agent-sidebar-subtitle">
              Linaris Neural Network Active
            </p>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-6 mb-4 pr-2" id="agent-chat-container">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
<svg className="lucide lucide-bot" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="bg-neutral-100 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm" id="agent-greeting">
              Hello, I am your executive assistant. How can I help you lead your
              team today?
            </div>
</div>
</div>
<div className="relative mt-auto pt-4 border-t border-neutral-100">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" id="agent-input" placeholder="Ask your agent to analyze retention, start a campaign, or train your team..." rows="3"></textarea>
<button className="absolute right-3 bottom-3 p-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10">
<svg className="lucide lucide-arrow-up" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</div>
</div>
<main className="relative w-full xl:max-w-[96rem] bg-[#EAEAEA] xl:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col min-h-screen xl:min-h-[calc(100vh-4rem)]" id="landing-shell">
<div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-b from-white/60 to-transparent opacity-50 blur-3xl pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3"></div>

<nav className="flex flex-wrap md:px-12 z-30 bg-stone-100 pt-6 pr-6 pb-6 pl-6 relative gap-x-20 gap-y-6 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer mr-8">
<div className="flex text-white bg-neutral-900 w-9 h-9 rounded-lg relative items-center justify-center">
<svg className="lucide lucide-bot w-[1.25rem] h-[1.25rem] text-slate-50" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="uppercase leading-none text-2xl font-medium tracking-tight font-oswald">
              LINARIS
              <span className="text-orange-400">.io</span>
</span>
<span className="text-[0.6rem] uppercase text-neutral-700 tracking-widest font-space">
              MLM Agentic OS
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 mr-auto">
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#" id="nav-solutions">
            SOLUTIONS
          </a>
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#" id="nav-agents">
            AGENTS
          </a>
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#" id="nav-price">
            PRICING
          </a>
</div>
<div className="flex items-center gap-3 ml-auto">
<button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white/50 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer z-50" onclick="toggleLanguage()">
<svg className="lucide lucide-globe" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide" id="lang-text">
              EN
            </span>
</button>
<button className="uppercase hover:bg-neutral-800 transition-colors flex shadow-neutral-900/10 text-xs font-semibold text-white tracking-wider bg-neutral-900 rounded-full pt-2 pr-6 pb-2 pl-6 shadow-lg gap-x-2 gap-y-2 items-center" id="auth-btn" onclick="toggleLoginModal()">
<span id="btn-signin-text">Sign In</span>
<svg className="lucide lucide-arrow-right" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<div className="hidden items-center gap-3 pl-2" id="user-profile">
<div className="flex flex-col items-end">
<span className="text-xs font-semibold font-oswald uppercase tracking-tight" id="user-name">
                Admin User
              </span>
<span className="text-[0.6rem] text-neutral-500 uppercase tracking-widest" id="user-role">
                Administrator
              </span>
</div>
<button className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-300 hover:text-neutral-900 transition-colors" onclick="toggleUserPanel()">
<svg className="lucide lucide-user-round" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="4"></circle>
</svg>
</button>
<button className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors" onclick="logout()">
<svg className="lucide lucide-log-out" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
</button>
</div>
</div>
</nav>


<div className="flex-1 overflow-y-auto bg-zinc-100 z-10 relative" id="landing-content">

<section className="md:px-12 md:pb-10 bg-zinc-100 max-w-[90rem] mr-auto ml-auto pt-12 pr-6 pb-24 pl-6">
<div className="flex flex-col gap-x-12 gap-y-5">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-0 gap-y-8 items-start">
<div className="lg:col-span-7 flex flex-col gap-x-8 gap-y-8">
<div className="flex gap-4 animate-fade-in-up gap-x-4 gap-y-4 items-center">
<div className="h-px w-12 bg-neutral-400"></div>
<span className="uppercase text-sm font-medium text-neutral-500 tracking-widest" id="hero-tagline">
                    AI-First Operating System FOR MLM
                  </span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.85] uppercase text-6xl font-medium text-neutral-900 tracking-tight font-oswald pt-8 pb-6" id="hero-title">
                  Leadership for the
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-neutral-900">
                    Agentic AI Era
                  </span>
</h1>
</div>
<div className="lg:col-span-5 group h-full mt-1 relative">
<div className="absolute inset-0 bg-neutral-900 rounded-2xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl h-[27.5rem] lg:h-[34.375rem] w-full">
<img alt="Futuristic AI Leadership" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50040b25-162c-4f33-9ec2-1548e670a5c3_1600w.jpg"/>
<div className="bg-gradient-to-t from-neutral-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
<div className="flex justify-between items-center mb-2">
<span className="text-[0.65rem] uppercase tracking-widest font-space" id="hero-overlay-title">
                        System Analysis
                      </span>
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-2/3 animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row mt-4 gap-x-12 gap-y-12 items-start">
<div className="max-w-2xl">
<h2 className="md:text-2xl leading-tight -mt-6 md:-mt-12 text-xl font-medium text-neutral-800 tracking-tight font-space mb-6" id="hero-subtitle">
                  LINARIS is not for the masses. It's a strategic partner for
                  the top 10% of leaders who understand that the future of MLM
                  is not built with effort, but with intelligent systems.
                </h2>
<div className="mt-8 flex gap-4">
<button className="group relative px-8 py-4 bg-neutral-900 text-white rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-neutral-500/20">
<span className="z-10 flex items-center gap-2 uppercase text-sm font-semibold tracking-widest relative" id="hero-cta">
                      REQUEST ACCESS
                      <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
<div className="w-full lg:w-5/12 ml-auto overflow-hidden bg-neutral-950 border-neutral-200 border rounded-2xl pt-6 pr-6 pl-6 relative shadow-sm">
<div className="absolute top-0 right-0 p-4 opacity-10">
<svg className="w-[7.5rem] h-[7.5rem]" fill="none" height="7.5rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{color: 'rgb(251, 146, 60)'}} viewbox="0 0 24 24" width="7.5rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 border-neutral-100 border rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="uppercase text-xs text-neutral-400 font-space mb-1" id="stat-retention">
                      Retention Rate
                    </div>
<div className="text-3xl font-medium text-neutral-900 font-oswald">
                      +45%
                    </div>
<div className="text-[0.6rem] text-green-600 mt-2 flex items-center gap-1" id="stat-vs">
<svg fill="none" height="0.625rem" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="0.625rem">
<path d="m18 15-6-6-6 6"></path>
</svg>
                      vs Industry Avg
                    </div>
</div>
<div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
<div className="text-xs font-space uppercase text-neutral-400 mb-1" id="stat-churn">
                      Team Churn
                    </div>
<div className="text-3xl font-oswald font-medium text-neutral-900">
                      -70%
                    </div>
<div className="text-[0.6rem] text-green-600 mt-2 flex items-center gap-1" id="stat-ai">
<svg fill="none" height="0.625rem" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="0.625rem">
<path d="m18 15-6-6-6 6"></path>
</svg>
                      AI Predicted
                    </div>
</div>
<div className="col-span-2 text-white bg-neutral-900 rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-center mb-4">
<span className="uppercase text-xs text-orange-500 tracking-widest font-space" id="stat-system">
                        System Status
                      </span>
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
</div>
<div className="space-y-2 font-geist-mono text-[0.65rem] text-neutral-400">
<div className="flex justify-between">
<span id="sys-1">&gt; Agent "Sniper"</span>
<span className="text-white">Active</span>
</div>
<div className="flex justify-between">
<span id="sys-2">&gt; Compliance Scan</span>
<span className="text-white">Running</span>
</div>
<div className="flex justify-between">
<span id="sys-3">&gt; Churn Prediction</span>
<span className="text-emerald-400">98.2% Acc</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-200 border-top pt-14 pb-10">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row mb-16 gap-x-8 gap-y-8 items-end justify-between">
<div className="max-w-xl">
<span className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-2 block" id="prob-tag">
                  The Structural Problem
                </span>
<h3 className="md:text-5xl text-4xl font-medium text-neutral-900 tracking-tight font-oswald" id="prob-title">
                  From Door-to-Door to "Social Selling" &amp; Agentic AI Era
                </h3>
<p className="leading-relaxed text-neutral-600 mt-4" id="prob-desc">
                  The traditional MLM model is limited. Technology has
                  reconfigured the channel but amplified inefficiencies,
                  creating a multi-billion dollar battlefield.
                </p>
</div>
<div className="flex gap-2">
<div className="bg-neutral-200 w-12 h-1 rounded-full"></div>
<div className="w-12 h-1 bg-neutral-900 rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
<svg className="lucide lucide-users-round" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</svg>
</div>
<h4 className="text-lg font-semibold font-oswald uppercase mb-3" id="p1-title">
                  Retention Crisis
                </h4>
<p className="text-base text-neutral-600 leading-relaxed" id="p1-desc">
                  Between 50% and 70% drop out in the first year. 73% fail,
                  generating a social stigma of "burning" contacts.
                </p>
</div>
<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<svg className="lucide lucide-clock" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h4 className="text-lg font-semibold font-oswald uppercase mb-3" id="p2-title">
                  Hidden 80% Cost
                </h4>
<p className="text-base text-neutral-600 leading-relaxed" id="p2-desc">
                  Inefficient time arbitrage. Leaders invest 80% of their day in
                  micromanagement and basic coaching.
                </p>
</div>
<div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 bg-neutral-200 text-neutral-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<svg className="lucide lucide-shield-alert" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<h4 className="text-lg font-semibold font-oswald uppercase mb-3" id="p3-title">
                  Regulatory Risk
                </h4>
<p className="text-base text-neutral-600 leading-relaxed" id="p3-desc">
                  Scrutiny from bodies like the FTC demands compliance. A
                  millionaire financial and reputational risk.
                </p>
</div>
</div>

<div className="md:p-12 overflow-hidden text-white bg-neutral-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="blur-[6.25rem] bg-blue-500/10 w-96 h-96 rounded-full absolute top-0 right-0"></div>
<div className="relative z-10 mb-12">
<span className="uppercase block text-xs font-semibold text-blue-400 tracking-widest mb-2" id="sol-tag">
                  The AI-First Solution
                </span>
<h3 className="md:text-5xl text-3xl font-medium tracking-tight font-oswald" id="sol-title">
                  Autonomous Agent Architecture
                </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 border-neutral-700 border-t">
<div className="hidden md:contents text-xs font-space uppercase tracking-widest text-neutral-500">
<div className="col-span-3 text-gray-50 border-neutral-800 border-b pt-4 pr-4 pb-4" id="th-pain">
                    Pain Point
                  </div>
<div className="col-span-3 text-gray-50 border-neutral-800 border-b border-l px-4 py-4" id="th-agent">
                    LINARIS Agent
                  </div>
<div className="col-span-6 text-gray-50 border-neutral-800 border-b border-l pt-4 pl-4" id="th-algo">
                    Algorithmic Solution
                  </div>
</div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="font-medium text-red-400" id="r1-pain">
                    High Attrition Rate
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
<svg fill="none" height="1.375rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.375rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 17-1.4-1.4"></path>
<path d="m19.1 4.9-1.4 1.4"></path>
<path d="M22 12h-2"></path>
<path d="M2 12h2"></path>
<path d="m4.9 19.1 1.4-1.4"></path>
<path d="m4.9 4.9 1.4 1.4"></path>
</svg>
<span className="font-space" id="r1-agent">
                    Behavioral Predictive Agent
                  </span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm font-normal text-neutral-400 border-neutral-800 border-b pt-6 pb-6 pl-4" id="r1-algo">
                  Boosts Retention: Proactively identifies and flags
                  high-potential distributors, enabling timely strategic support
                  to maximize their success.
                </div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="font-medium text-red-400" id="r2-pain">
                    Inefficient Prospecting
                  </span>
</div>
<div className="col-span-1 md:col-span-3 py-6 md:px-4 border-b border-neutral-800 md:border-l flex items-center gap-3">
<svg fill="none" height="1.125rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.125rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
<span className="font-space" id="r2-agent">"Sniper" Agent</span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6" id="r2-algo">
                  Optimizes Prospecting: Monitors social networks to find
                  high-quality leads with buying intent, turning outreach into
                  effective connections.
                </div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="text-red-400 font-medium" id="r3-pain">
                    Regulatory Risk
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex gap-3 border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
<svg fill="none" height="1.375rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.375rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-space" id="r3-agent">
                    Content &amp; Compliance Agent
                  </span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6" id="r3-algo">
                  Guarantees Integrity: Audits content for 100% regulatory and
                  ethical compliance. It serves as your team’s "Shield of
                  Trust."
                </div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="font-medium text-red-400" id="r4-pain">
                    Team Task Management
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex gap-3 border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
<svg fill="none" height="1.5rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
<span className="font-space" id="r4-agent">
                    Project &amp; Community Manager Agent
                  </span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6" id="r4-algo">
                  Maximizes Productivity: Automatically assigns and tracks key
                  tasks based on insights, optimizing team focus for maximum
                  impact.
                </div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="font-medium text-red-400" id="r5-pain">
                    Commercial Strategy and Campaigns
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex gap-3 border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
<svg fill="none" height="2.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="2.875rem" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
<span className="font-space" id="r5-agent">
                    Market Research and Social Media Content Creation Agent
                  </span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6" id="r5-algo">
                  Drives Visibility: Executes market analysis and generates
                  strategic content, positioning your team as the industry
                  expert.
                </div>
<div className="col-span-1 md:col-span-3 pt-10 pr-4 pb-6 pl-4 border-neutral-800 border-b">
<span className="font-medium text-red-400" id="r6-pain">
                    Training, Capacity Building, and Conversation
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex gap-3 border-neutral-800 pt-6 pb-6 gap-x-3 gap-y-3 items-center border-b">
<svg fill="none" height="1.375rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.375rem" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="font-space" id="r6-agent">
                    "Commercial Backoffice" Agent
                  </span>
</div>
<div className="col-span-1 md:col-span-6 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 pt-6 pb-6" id="r6-algo">
                  Empowers Team Knowledge: Acts as the central intelligence hub,
                  ensuring fast, precise information exchange for immediate team
                  success.
                </div>
</div>
</div>
</div>
</section>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-16">
<span className="uppercase block text-xs font-semibold text-neutral-500 tracking-widest mb-2" id="price-tag">
              B2B2C SaaS Model
            </span>
<h3 className="md:text-6xl text-4xl font-medium text-neutral-900 tracking-tight font-oswald max-w-3xl" id="price-title">
              A strategic investment with a clear ROI.
            </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all-300">
<div>
<div className="text-sm font-space uppercase tracking-widest text-neutral-500 mb-4">
                  Base Tier
                </div>
<h4 className="text-3xl font-oswald font-medium mb-2">
                  Churn Stopper
                </h4>
<div className="text-4xl font-space font-semibold text-neutral-900 mb-6">
                  299 €
                  <span className="text-lg text-neutral-400 font-normal" id="mo1">
                    /mo
                  </span>
</div>
<ul className="space-y-4 text-base text-neutral-600 mb-8">
<li className="flex items-start gap-3" id="base-f1">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    1 Admin License + 3 Sales Reps
                  </li>
<li className="flex items-start gap-3" id="base-f2">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    "Backoffice Sales" Agent
                  </li>
<li className="flex items-start gap-3" id="base-f3">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    Behavioral Predictive Agent
                  </li>
</ul>
</div>
<button className="w-full py-4 border border-neutral-900 text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-colors" id="btn-p1">
                Select Plan
              </button>
</div>
<div className="bg-neutral-900 text-white border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between transform md:-translate-y-4 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-white text-neutral-900 text-[0.6rem] font-semibold uppercase px-3 py-1" id="badge-pop">
                Most Popular
              </div>
<div>
<div className="text-sm font-space uppercase tracking-widest text-neutral-400 mb-4">
                  Pro Tier
                </div>
<h4 className="text-3xl font-oswald font-medium mb-2">
                  The Duplicator
                </h4>
<div className="text-4xl font-space font-semibold text-white mb-6">
                  599 €
                  <span className="text-lg text-neutral-500 font-normal" id="mo2">
                    /mo
                  </span>
</div>
<ul className="space-y-4 text-base text-neutral-300 mb-8">
<li className="flex items-start gap-3" id="pro-f1">
<svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    1 Admin License + 9 Sales Reps
                  </li>
<li className="flex items-start gap-3" id="pro-f2">
<svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    Everything in Base +
                  </li>
<li className="flex items-start gap-3" id="pro-f3">
<svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    Lead "Sniper" Agent
                  </li>
</ul>
</div>
<button className="w-full py-4 bg-white text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors" id="btn-p2">
                Start Now
              </button>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all-300">
<div>
<div className="text-sm font-space uppercase tracking-widest text-neutral-500 mb-4">
                  Enterprise
                </div>
<h4 className="text-3xl font-oswald font-medium mb-2">
                  Empire Builder
                </h4>
<div className="text-4xl font-space font-semibold text-neutral-900 mb-6" id="price-custom">
                  Custom
                </div>
<ul className="space-y-4 text-base text-neutral-600 mb-8">
<li className="flex items-start gap-3" id="ent-f1">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    Full API Integration
                  </li>
<li className="flex items-start gap-3" id="ent-f2">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    24/7 Dedicated Support
                  </li>
<li className="flex items-start gap-3" id="ent-f3">
<svg className="w-5 h-5 text-neutral-900 shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    Agent Customization
                  </li>
</ul>
</div>
<button className="w-full py-4 border border-neutral-900 text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-colors" id="btn-p3">
                Contact Sales
              </button>
</div>
</div>
</section>
<footer className="md:px-12 text-neutral-400 bg-neutral-900 border-neutral-800 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="flex items-center gap-2 mb-4 text-white">
<span className="font-oswald text-lg font-medium tracking-tight uppercase">
                  LINARIS
                </span>
</div>
<p className="text-base max-w-xs leading-relaxed" id="footer-desc">
                The catalyst for the next evolution of the MLM industry.
                Algorithmic certainty for elite leaders.
              </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-base">
<div className="flex flex-col gap-3">
<span className="text-white font-medium uppercase tracking-widest text-xs" id="ft-plat">
                  Platform
                </span>
<a className="hover:text-white transition-colors" href="#" id="ft-l1">
                  Agents
                </a>
<a className="hover:text-white transition-colors" href="#" id="ft-l2">
                  Integrations
                </a>
<a className="hover:text-white transition-colors" href="#" id="ft-l3">
                  Pricing
                </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium uppercase tracking-widest text-xs" id="ft-comp">
                  Company
                </span>
<a className="hover:text-white transition-colors" href="#" id="ft-l4">
                  About Us
                </a>
<a className="hover:text-white transition-colors" href="#" id="ft-l5">
                  Careers
                </a>
<a className="hover:text-white transition-colors" href="#" id="ft-l6">
                  Legal
                </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-xs flex justify-between">
<span id="copy">© 2026 LINARIS.io. All rights reserved.</span>
<div className="flex gap-4">
<span id="priv">Privacy</span>
<span id="term">Terms</span>
</div>
</div>
</footer>
</div>
</main>

<main className="hidden w-full xl:max-w-[96rem] bg-[#EAEAEA] xl:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col min-h-screen xl:min-h-[calc(100vh-4rem)] relative transition-colors duration-300" id="app-shell">
<div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
<div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-gradient-to-b from-white/60 to-transparent blur-3xl opacity-60 pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4"></div>

<header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5 border-b border-neutral-200 bg-stone-100/90 backdrop-blur-xl transition-colors">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-900 text-white shadow-lg">
<svg className="lucide lucide-bot" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-oswald text-xl font-medium uppercase tracking-tight text-neutral-900">
              LINARIS
              <span className="text-orange-500 dark:text-orange-400">.OS</span>
</span>
<span className="text-[0.6rem] text-neutral-500 uppercase tracking-[0.16em]">
              Agentic Team Console
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 px-3 py-1">
<span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-neutral-600 dark:text-neutral-200 font-medium">
              Cluster Online
            </span>
</div>
<button className="flex items-center gap-3 rounded-full bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 px-3 py-1.5 transition-colors" onclick="toggleUserPanel()">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white">
<svg className="lucide lucide-user-round" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="4"></circle>
</svg>
</div>
<div className="hidden sm:flex flex-col items-start">
<span className="text-xs font-medium text-neutral-900 dark:text-white tracking-tight" id="app-user-name">
                Alex Rivera
              </span>
<span className="text-[0.6rem] text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.16em]" id="app-user-role">
                Sales Leader
              </span>
</div>
<svg className="lucide lucide-chevron-down text-neutral-400" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</header>

<div className="hidden fixed inset-0 z-[90] items-start justify-end pt-20 pr-4 pl-4 bg-neutral-900/20 dark:bg-neutral-950/40 backdrop-blur-sm" id="user-panel">
<div className="w-full max-w-sm rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 shadow-2xl p-6 space-y-5 relative">
<button className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800" onclick="toggleUserPanel()">
<svg className="lucide lucide-x" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white">
<svg className="lucide lucide-user-round" fill="none" height="1.5rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="4"></circle>
</svg>
</div>
<div>
<p className="text-base font-medium text-neutral-900 tracking-tight" id="user-panel-name">
                Alex Rivera
              </p>
<p className="text-xs text-neutral-500 uppercase tracking-[0.16em]" id="user-panel-role">
                Sales Leader
              </p>
</div>
</div>
<div className="space-y-3 pt-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.16em]">
                Account
              </span>
<span className="text-[0.65rem] text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                Active
              </span>
</div>
<div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
<div className="flex justify-between">
<span>Email</span>
<span className="text-neutral-400">alex@linaris.io</span>
</div>
<div className="flex justify-between">
<span>Workspace</span>
<span className="text-neutral-400">Global Leaders</span>
</div>
<div className="flex justify-between">
<span>Role</span>
<span className="text-neutral-400" id="user-panel-role-label">
                  Sales Leader
                </span>
</div>
</div>
</div>
<div className="space-y-3 pt-3 border-t border-neutral-100">
<p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.16em]">
              Preferences
            </p>
<div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-300">
<span>Dark Mode</span>
<button className="inline-flex items-center rounded-full bg-neutral-200 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors" id="theme-toggle-btn" onclick="toggleTheme()">
<span className="text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all" id="theme-indicator-on">
                  On
                </span>
<span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all" id="theme-indicator-off">
                  Off
                </span>
</button>
</div>
<div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-300">
<span>Language</span>
<span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-0.5">
<span id="user-panel-lang">EN</span>
</span>
</div>
</div>
<div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
<button className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline decoration-dotted decoration-neutral-400 dark:decoration-neutral-600" onclick="logoutToLanding()">
              Return to landing
            </button>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-red-50 hover:bg-red-100 dark:hover:bg-red-500/20 text-xs text-red-600 border border-red-200" onclick="logout()">
<svg className="lucide lucide-log-out" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
<span>Sign out</span>
</button>
</div>
</div>
</div>

<div className="relative z-10 flex-1 flex overflow-hidden">

<aside className="hidden md:flex flex-col w-64 border-r border-neutral-200 bg-stone-50/90 backdrop-blur-xl px-4 py-6 space-y-6 transition-colors">
<div>
<p className="text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500 mb-3">
              Navigation
            </p>
<nav className="space-y-1 text-sm">
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors bg-white/60 bg-white/10 border border-white/20" id="nav-dashboard" onclick="switchAppView('dashboard')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-600 dark:text-sky-400">
<svg className="lucide lucide-activity" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 7L9 5l-3 7H2"></path>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Dashboard</span>
<span className="text-[0.65rem] text-neutral-500">
                    KPIs &amp; Agent Events
                  </span>
</div>
</button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors" id="nav-tasks" onclick="switchAppView('tasks')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600">
<svg className="lucide lucide-list-checks" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 17 2 2 4-4"></path>
<path d="m3 7 2 2 4-4"></path>
<path d="M13 6h8"></path>
<path d="M13 12h8"></path>
<path d="M13 18h8"></path>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Tareas</span>
<span className="text-[0.65rem] text-neutral-500">
                    Tabla · Kanban · Calendario
                  </span>
</div>
</button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors" id="nav-documents" onclick="switchAppView('documents')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
<svg className="lucide lucide-folders" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h5l2 2h9v11a1 1 0 0 1-1 1H4Z"></path>
<path d="M4 4v13a1 1 0 0 0 1 1h14"></path>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Documentos</span>
<span className="text-[0.65rem] text-neutral-500">
                    Single source of truth
                  </span>
</div>
</button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors" id="nav-team" onclick="switchAppView('team')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-600 dark:text-amber-400">
<svg className="lucide lucide-hierarchy" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16v-4"></path>
<path d="M10 6h4"></path>
<rect height="4" rx="1" width="4" x="2" y="14"></rect>
<rect height="4" rx="1" width="4" x="18" y="14"></rect>
<rect height="4" rx="1" width="4" x="9" y="4"></rect>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Equipo</span>
<span className="text-[0.65rem] text-neutral-500">
                    Estructura de comerciales
                  </span>
</div>
</button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors" id="nav-research" onclick="switchAppView('research')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400">
<svg className="lucide lucide-orbit" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<circle cx="19" cy="5" r="2"></circle>
<circle cx="5" cy="19" r="2"></circle>
<path d="M8 22a10 10 0 0 1 10-10 9.7 9.7 0 0 1 4 .8"></path>
<path d="M9 2.7A10 10 0 0 0 4 12a9.7 9.7 0 0 0 .8 4"></path>
<path d="M22 8a10 10 0 0 0-10-6 9.7 9.7 0 0 0-4 .8"></path>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Research</span>
<span className="text-[0.65rem] text-neutral-500">
                    Análisis de mercado
                  </span>
</div>
</button>
<button className="app-nav-item flex w-full items-center gap-3 rounded-xl px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 text-sm transition-colors" id="nav-campaigns" onclick="switchAppView('campaigns')">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-pink-100 text-pink-600">
<svg className="lucide lucide-megaphone" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3Z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.6-1.6"></path>
</svg>
</span>
<div className="flex flex-col items-start">
<span className="font-medium tracking-tight">Campañas</span>
<span className="text-[0.65rem] text-neutral-500">
                    Definición &amp; KPIs
                  </span>
</div>
</button>
</nav>
</div>
<div className="mt-auto space-y-3 text-xs text-neutral-500">
<div className="flex items-center justify-between rounded-xl bg-white dark:bg-white/5 border border-neutral-200 px-3 py-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
<svg className="lucide lucide-cpu" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M9 2v2"></path>
<path d="M15 2v2"></path>
<path d="M9 20v2"></path>
<path d="M15 20v2"></path>
<path d="M20 9h2"></path>
<path d="M20 15h2"></path>
<path d="M2 9h2"></path>
<path d="M2 15h2"></path>
</svg>
</span>
<div className="flex flex-col">
<span className="text-[0.65rem] uppercase tracking-[0.16em]">
                    Agent Load
                  </span>
<span className="text-[0.65rem] text-neutral-400">
                    3 / 6 active
                  </span>
</div>
</div>
<span className="text-[0.65rem] text-emerald-500">OK</span>
</div>
<p className="text-[0.65rem] text-neutral-500">© 2026 LINARIS.io</p>
</div>
</aside>

<aside className="flex md:hidden flex-col w-full border-b border-neutral-200 bg-stone-50/95 backdrop-blur-xl px-4 py-3 space-y-3 transition-colors">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-neutral-600 dark:text-neutral-300">
                Agents online
              </span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-200" onclick="toggleUserPanel()">
<span>Alex</span>
<svg className="lucide lucide-user-round" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20a6 6 0 0 0-12 0"></path>
<circle cx="12" cy="10" r="4"></circle>
</svg>
</button>
</div>
<div className="grid grid-cols-3 gap-2 text-[0.7rem]">
<button className="app-nav-item flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 bg-neutral-100 dark:bg-white/10 border-neutral-200 dark:border-white/20 bg-white/10 border border-white/20" id="m-nav-dashboard" onclick="switchAppView('dashboard')">
<svg className="lucide lucide-activity" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 7L9 5l-3 7H2"></path>
</svg>
<span>Dashboard</span>
</button>
<button className="app-nav-item flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5" id="m-nav-tasks" onclick="switchAppView('tasks')">
<svg className="lucide lucide-list-checks" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 17 2 2 4-4"></path>
<path d="m3 7 2 2 4-4"></path>
<path d="M13 6h8"></path>
<path d="M13 12h8"></path>
<path d="M13 18h8"></path>
</svg>
<span>Tareas</span>
</button>
<button className="app-nav-item flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5" id="m-nav-team" onclick="switchAppView('team')">
<svg className="lucide lucide-hierarchy" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16v-4"></path>
<path d="M10 6h4"></path>
<rect height="4" rx="1" width="4" x="2" y="14"></rect>
<rect height="4" rx="1" width="4" x="18" y="14"></rect>
<rect height="4" rx="1" width="4" x="9" y="4"></rect>
</svg>
<span>Equipo</span>
</button>
</div>
</aside>

<section className="flex-1 flex flex-col overflow-hidden">

<div className="hidden md:flex items-center justify-between px-6 md:px-8 py-4 border-b border-neutral-200 dark:border-white/5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl transition-colors">
<div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
<span className="uppercase tracking-[0.18em] text-neutral-500">
                Workspace
              </span>
<span className="text-neutral-900 dark:text-neutral-200 font-medium">
                Global Leaders ›
              </span>
<span className="text-neutral-500 dark:text-neutral-400" id="breadcrumb-view">
                Dashboard
              </span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<input className="w-52 lg:w-72 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-8 py-1.5 text-xs text-neutral-900 dark:text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition-colors" placeholder="Search agents, tasks, people..." type="text"/>
<svg className="lucide lucide-search absolute left-2 top-1/2 -translate-y-1/2 text-neutral-500" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<button className="relative w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors">
<svg className="lucide lucide-bell" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
<span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-rose-500 border border-white dark:border-neutral-950"></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8 text-neutral-900 bg-zinc-100" id="app-views">

<div className="app-view space-y-6" id="view-dashboard">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">
<div className="rounded-2xl border border-neutral-200 bg-white/90 p-5 md:p-6 relative overflow-hidden shadow-sm">
<div className="absolute -right-24 -top-24 w-72 h-72 bg-sky-500/10 dark:bg-sky-500/20 rounded-full blur-3xl"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400 mb-2">
                          Agentic Overview
                        </p>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                          Today’s Operating Picture
                        </h2>
<p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
                          Real-time visibility into your funnel, churn risk, and
                          top performers. Orchestrated by your agent cluster.
                        </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-1.5 text-xs font-medium shadow-lg shadow-sky-500/20 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors" onclick="toggleAgent()">
<svg className="lucide lucide-bot" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span>Hablar con Command Agent</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 flex flex-col gap-3 shadow-sm dark:shadow-none bg-white/90">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
                          Team Retention
                        </span>
<span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[0.7rem]">
<svg className="lucide lucide-arrow-up-right" fill="none" height="0.8rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.8rem" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
                          +12% QoQ
                        </span>
</div>
<p className="text-2xl font-semibold tracking-tight">86.4%</p>
<div className="mt-1 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
<div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 dark:from-emerald-400 dark:to-sky-400"></div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 flex flex-col gap-3 shadow-sm dark:shadow-none">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
                          Churn Risk
                        </span>
<span className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-300 text-[0.7rem]">
                          14 flagged
                        </span>
</div>
<p className="text-2xl font-semibold tracking-tight">7.2%</p>
<div className="mt-1 flex items-center gap-2 text-[0.7rem] text-neutral-500 dark:text-neutral-400">
<span className="inline-flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                          Stable
                        </span>
<span>Pred. accuracy 96.3%</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 flex flex-col gap-3 shadow-sm dark:shadow-none">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500">
                          Pipeline Value
                        </span>
<span className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 text-[0.7rem]">
                          42 opps
                        </span>
</div>
<p className="text-2xl font-semibold tracking-tight">€184K</p>
<div className="mt-1 flex items-center gap-2 text-[0.7rem] text-neutral-500 dark:text-neutral-400">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="0.8rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.8rem" xmlns="http://www.w3.org/2000/svg">
<polyline points="3 17 9 11 13 15 21 7"></polyline>
<polyline points="14 7 21 7 21 14"></polyline>
</svg>
                          +19% vs last 30 days
                        </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-3 shadow-sm dark:shadow-none bg-white/90">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400">
<svg className="lucide lucide-radar" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m19 5-7 7-4-4"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium">
                              Live agent signals
                            </p>
<p className="text-[0.7rem] text-neutral-500">
                              What your agents are prioritizing right now
                            </p>
</div>
</div>
<span className="text-[0.65rem] text-neutral-500">
                          Last 2 min
                        </span>
</div>
<div className="space-y-2 text-[0.8rem]">
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="w-1.5 h-8 bg-emerald-400 rounded-full"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                                Sniper Agent
                              </p>
<p className="text-neutral-500 text-[0.7rem]">
                                Identified 12 high-intent leads in ES &amp; FR
                                markets.
                              </p>
</div>
</div>
<span className="text-neutral-500 text-[0.65rem]">
                            Now
                          </span>
</div>
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="w-1.5 h-8 bg-sky-400 rounded-full"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                                Churn Guard
                              </p>
<p className="text-neutral-500 text-[0.7rem]">
                                Flagged 3 leaders with negative slope in
                                activity.
                              </p>
</div>
</div>
<span className="text-neutral-500 text-[0.65rem]">
                            3 min
                          </span>
</div>
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2">
<span className="w-1.5 h-8 bg-amber-400 rounded-full"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                                Compliance Agent
                              </p>
<p className="text-neutral-500 text-[0.7rem]">
                                Cleaned 27 posts; 0 red-flag claims pending
                                review.
                              </p>
</div>
</div>
<span className="text-neutral-500 text-[0.65rem]">
                            10 min
                          </span>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-3 shadow-sm dark:shadow-none">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
<svg className="lucide lucide-list-checks" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 17 2 2 4-4"></path>
<path d="m3 7 2 2 4-4"></path>
<path d="M13 6h8"></path>
<path d="M13 12h8"></path>
<path d="M13 18h8"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium">
                              Your next three moves
                            </p>
<p className="text-[0.7rem] text-neutral-500">
                              From the Project &amp; Community Agent
                            </p>
</div>
</div>
<button className="text-[0.7rem] text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 underline underline-offset-2 decoration-dotted" onclick="switchAppView('tasks')">
                          Open tasks
                        </button>
</div>
<ol className="space-y-2 text-[0.8rem]">
<li className="flex gap-2 items-start">
<span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                              Call María about Spain expansion pod.
                            </p>
<p className="text-neutral-500 text-[0.7rem]">
                              High-potential leader; at risk if no touch in 48h.
                            </p>
</div>
</li>
<li className="flex gap-2 items-start">
<span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                              Approve content pack for Q2 product launch.
                            </p>
<p className="text-neutral-500 text-[0.7rem]">
                              Reviewed by compliance, ready for localization.
                            </p>
</div>
</li>
<li className="flex gap-2 items-start">
<span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-sky-400"></span>
<div>
<p className="text-neutral-900 dark:text-neutral-100">
                              Schedule leadership training for Tier 2 managers.
                            </p>
<p className="text-neutral-500 text-[0.7rem]">
                              Template agenda suggested by Commercial
                              Backoffice.
                            </p>
</div>
</li>
</ol>
</div>
</div>
<aside className="mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-6 lg:w-80 xl:w-96 lg:self-start rounded-2xl border border-neutral-200 bg-white/95 shadow-sm p-4 flex flex-col gap-3 z-10">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-bot" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                            Command Agent
                          </span>
<span className="text-[0.65rem] text-neutral-500">
                            Resumen ejecutivo &amp; KPIs
                          </span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                      Pídele al agente que explique el estado actual del
                      negocio, riesgos de churn o próximas decisiones
                      recomendadas.
                    </p>
<div className="relative mt-1">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" placeholder="Ej. Explícame los 3 riesgos principales que ves hoy en el dashboard..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 p-1.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</aside>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-3 shadow-sm dark:shadow-none bg-white/90">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Team health index</p>
<span className="inline-flex items-center gap-1 text-[0.7rem] text-emerald-600 dark:text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                        Healthy
                      </span>
</div>
<p className="text-3xl font-semibold tracking-tight">
                      8.7
                      <span className="text-sm text-neutral-500">/10</span>
</p>
<div className="mt-2 grid grid-cols-3 gap-2 text-[0.7rem] text-neutral-400">
<div className="space-y-1">
<p>Engagement</p>
<div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
<div className="h-full w-[82%] bg-emerald-400 rounded-full"></div>
</div>
<p className="text-neutral-500">82%</p>
</div>
<div className="space-y-1">
<p>Activity</p>
<div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
<div className="h-full w-[76%] bg-sky-400 rounded-full"></div>
</div>
<p className="text-neutral-500">76%</p>
</div>
<div className="space-y-1">
<p>Compliance</p>
<div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
<div className="h-full w-[94%] bg-emerald-300 rounded-full"></div>
</div>
<p className="text-neutral-500">94%</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-3 shadow-sm dark:shadow-none">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Agent cluster</p>
<span className="text-[0.7rem] text-neutral-500">
                        3 / 6 slots active
                      </span>
</div>
<div className="space-y-2 text-[0.8rem]">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-sky-100 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400">
<svg className="lucide lucide-crosshair" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8"></circle>
<line x="22" y="12"></line>
<line x="6" y="12"></line>
<line x="12" y="6"></line>
<line x="12" y="22"></line>
</svg>
</span>
<span>Sniper</span>
</div>
<span className="text-emerald-500 dark:text-emerald-400 text-[0.7rem]">
                          Running
                        </span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
<svg className="lucide lucide-shield-check" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</span>
<span>Compliance</span>
</div>
<span className="text-emerald-500 dark:text-emerald-400 text-[0.7rem]">
                          Running
                        </span>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400">
<svg className="lucide lucide-users-round" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5">
<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
</circle>
</svg>
</span>
<span>Backoffice</span>
</div>
<span className="text-sky-600 dark:text-sky-400 text-[0.7rem]">
                          On-demand
                        </span>
</div>
<button className="mt-3 w-full rounded-xl border border-dashed border-neutral-300 dark:border-white/20 py-1.5 text-[0.7rem] text-neutral-500 dark:text-neutral-400 hover:border-sky-500/60 hover:text-sky-500 dark:hover:text-sky-300 transition-colors">
                        Configure new agent
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-tasks">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                    Execution layer
                  </p>
<h2 className="text-xl font-semibold tracking-tight">
                    Agent-assigned tasks
                  </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Stay in the 20% of activities that move the 80% of your
                    volume.
                  </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-[0.75rem] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-white/10">
<span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                    Synced with agents
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 py-1.5 text-[0.75rem] font-medium hover:bg-neutral-800" onclick="toggleAgent()">
<svg className="lucide lucide-bot-message-square" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V2H8"></path>
<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
<path d="M2 12h2"></path>
<path d="M9 11v2"></path>
<path d="M15 11v2"></path>
<path d="M20 12h2"></path>
</svg>
<span>Hablar con Agent de Tareas</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1.5 text-[0.75rem] text-neutral-900 font-medium hover:bg-emerald-400">
<svg className="lucide lucide-plus" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                    New manual task
                  </button>
</div>
</div>
<div className="mt-1 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 overflow-hidden shadow-sm dark:shadow-none bg-white/95">
<div className="flex items-center justify-between px-4 py-2 border-b border-neutral-100 dark:border-white/5 text-[0.75rem] text-neutral-500 dark:text-neutral-400">
<div className="flex items-center gap-3">
<button className="rounded-full bg-neutral-100 dark:bg-white/5 px-3 py-1 text-neutral-900 dark:text-neutral-100">
                      Table
                    </button>
<button className="rounded-full px-3 py-1 hover:bg-neutral-100 dark:hover:bg-white/5">
                      Kanban
                    </button>
<button className="rounded-full px-3 py-1 hover:bg-neutral-100 dark:hover:bg-white/5">
                      Calendar
                    </button>
</div>
<div className="flex items-center gap-3">
<span>Showing 8 tasks</span>
<button className="inline-flex items-center gap-1 rounded-full bg-neutral-100 dark:bg-white/5 px-3 py-1">
<svg className="lucide lucide-filter" fill="none" height="0.8rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.8rem" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M7 12h10"></path>
<path d="M10 18h4"></path>
</svg>
                      Filter
                    </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-left text-[0.8rem]">
<thead className="bg-neutral-50 text-neutral-500 border-b border-neutral-200">
<tr>
<th className="px-4 py-2 font-medium">Task</th>
<th className="px-4 py-2 font-medium">Owner</th>
<th className="px-4 py-2 font-medium">Agent</th>
<th className="px-4 py-2 font-medium">Priority</th>
<th className="px-4 py-2 font-medium">Due</th>
<th className="px-4 py-2 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 dark:divide-white/5">
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02]">
<td className="px-4 py-3 text-neutral-900 dark:text-neutral-100">
                          Follow-up with Spain expansion pod
                          <p className="text-[0.7rem] text-neutral-500">
                            Call María &amp; confirm onboarding milestones.
                          </p>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Alex Rivera
                        </td>
<td className="px-4 py-3 text-sky-600 dark:text-sky-300">
                          Backoffice
                        </td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-300 px-2 py-0.5 text-[0.7rem]">
                            High
                          </span>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Today
                        </td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 text-[0.7rem]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300"></span>
                            In progress
                          </span>
</td>
</tr>
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02]">
<td className="px-4 py-3 text-neutral-900 dark:text-neutral-100">
                          Approve Q2 content pack
                          <p className="text-[0.7rem] text-neutral-500">
                            Review 24 posts suggested by Compliance Agent.
                          </p>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Alex Rivera
                        </td>
<td className="px-4 py-3 text-emerald-600 dark:text-emerald-300">
                          Compliance
                        </td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-300 px-2 py-0.5 text-[0.7rem]">
                            Medium
                          </span>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Tomorrow
                        </td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-200 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-200 px-2 py-0.5 text-[0.7rem]">
                            Pending
                          </span>
</td>
</tr>
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02]">
<td className="px-4 py-3 text-neutral-900 dark:text-neutral-100">
                          Export weekly activity report
                          <p className="text-[0.7rem] text-neutral-500">
                            Send to corporate before Monday 10:00 CET.
                          </p>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Ops Bot
                        </td>
<td className="px-4 py-3 text-sky-600 dark:text-sky-300">
                          Backoffice
                        </td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 text-[0.7rem]">
                            Low
                          </span>
</td>
<td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                          Mon
                        </td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 px-2 py-0.5 text-[0.7rem]">
                            Completed
                          </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<aside className="mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-6 lg:w-80 xl:w-96 rounded-2xl border border-neutral-200 bg-white/95 shadow-sm p-4 flex flex-col gap-3 z-10">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-bot-message-square" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V2H8"></path>
<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
<path d="M2 12h2"></path>
<path d="M9 11v2"></path>
<path d="M15 11v2"></path>
<path d="M20 12h2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        Project &amp; Community Agent
                      </span>
<span className="text-[0.65rem] text-neutral-500">
                        Tareas priorizadas para hoy
                      </span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                  Describe qué quieres conseguir y el agente te propone,
                  reorganiza o cierra tareas para mantenerte en el 20% de
                  impacto.
                </p>
<div className="relative mt-1">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" placeholder="Ej. Reorganiza mis tareas para enfocarme en retención esta semana..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 p-1.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</aside>
</div>

<div className="app-view hidden space-y-5" id="view-documents">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                    Knowledge layer
                  </p>
<h2 className="text-xl font-semibold tracking-tight">
                    Playbooks &amp; documents
                  </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Centralize scripts, FAQs, training, and compliance assets.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white border border-neutral-900 px-3 py-1.5 text-[0.75rem] font-medium hover:bg-neutral-800" onclick="toggleAgent()">
<svg className="lucide lucide-bot" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span>Hablar con Agent de Documentos</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-[0.75rem] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-white/10">
<svg className="lucide lucide-upload" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
<polyline points="7 9 12 4 17 9"></polyline>
<line x1="12" x2="12" y1="4" y2="16"></line>
</svg>
                  Upload new
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-2 hover:border-indigo-400/60 transition-colors cursor-pointer shadow-sm dark:shadow-none bg-neutral-50">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">
<svg className="lucide lucide-book-open-text" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14"></path>
<path d="M16 12h2"></path>
<path d="M16 8h2"></path>
<path d="M4 19.5V7a2 2 0 0 1 2-2h13"></path>
<path d="M20 22V5a2 2 0 0 0-2-2H6"></path>
<path d="M8 12h2"></path>
<path d="M8 8h2"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium">Onboarding Playbook</p>
<p className="text-[0.7rem] text-neutral-500">
                        How to take a new recruit to first commission in 10
                        days.
                      </p>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>Last updated: 5 days ago</span>
<span>32 pages</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-2 hover:border-indigo-400/60 transition-colors cursor-pointer shadow-sm dark:shadow-none">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300">
<svg className="lucide lucide-message-circle" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8 8 0 1 1 3.8 3.8Z"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium">Conversation Scripts</p>
<p className="text-[0.7rem] text-neutral-500">
                        Discovery, objections, and follow-up templates.
                      </p>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>Used in 74% of deals</span>
<span>18 templates</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-2 hover:border-indigo-400/60 transition-colors cursor-pointer shadow-sm dark:shadow-none">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300">
<svg className="lucide lucide-shield-alert" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium">Compliance Framework</p>
<p className="text-[0.7rem] text-neutral-500">
                        Claims, income disclosures, and do / don’t library.
                      </p>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>Aligned with EU &amp; FTC</span>
<span>14 modules</span>
</div>
</div>
</div>
<aside className="mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-6 lg:w-80 xl:w-96 rounded-2xl border border-neutral-200 bg-white/95 shadow-sm p-4 flex flex-col gap-3 z-10">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-folders" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h5l2 2h9v11a1 1 0 0 1-1 1H4Z"></path>
<path d="M4 4v13a1 1 0 0 0 1 1h14"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        Backoffice Agent
                      </span>
<span className="text-[0.65rem] text-neutral-500">
                        Playbooks &amp; base de conocimiento
                      </span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                  Pregunta por guiones, materiales de formación o documentos
                  concretos y el agente localizará y resumirá lo relevante.
                </p>
<div className="relative mt-1">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" placeholder="Ej. Dame un resumen accionable del playbook de onboarding en 5 bullets..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 p-1.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</aside>
</div>

<div className="app-view hidden space-y-5" id="view-team">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                    People layer
                  </p>
<h2 className="text-xl font-semibold tracking-tight">
                    Team structure
                  </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Visualize leaders, pods, and succession risk.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white border border-neutral-900 px-3 py-1.5 text-[0.75rem] font-medium hover:bg-neutral-800" onclick="toggleAgent()">
<svg className="lucide lucide-bot" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span>Hablar con Agent de Equipo</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3 py-1.5 text-[0.75rem] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-white/10">
                  Export org chart
                </button>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-4 shadow-sm dark:shadow-none bg-white/95">
<div className="flex flex-wrap gap-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white">
<span className="text-xs font-semibold">AR</span>
</div>
<div>
<p className="text-sm font-medium">Alex Rivera</p>
<p className="text-[0.7rem] text-neutral-500">
                        Global Leader · 184 active distributors
                      </p>
</div>
</div>
<div className="flex gap-3 text-[0.7rem] text-neutral-500 dark:text-neutral-400">
<span>3 pods</span>
<span>7 direct leaders</span>
<span>
                      Churn risk:
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Low
                      </span>
</span>
</div>
</div>
<div className="border-t border-neutral-100 dark:border-white/5 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-[0.8rem]">
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Pod Alpha (ES)
                    </p>
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      María López
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      62 active / 8 new last 30 days
                    </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                      Health: 8.9 /10
                    </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Pod Beta (FR)
                    </p>
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      Julien Martin
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      48 active / 5 new last 30 days
                    </p>
<p className="text-[0.7rem] text-amber-500 dark:text-amber-300">
                      Health: 7.6 /10
                    </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Pod Gamma (LATAM)
                    </p>
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      Carla Díaz
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      74 active / 14 new last 30 days
                    </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                      Health: 9.1 /10
                    </p>
</div>
</div>
</div>
<aside className="mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-6 lg:w-80 xl:w-96 rounded-2xl border border-neutral-200 bg-white/95 shadow-sm p-4 flex flex-col gap-3 z-10">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-hierarchy" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16v-4"></path>
<path d="M10 6h4"></path>
<rect height="4" rx="1" width="4" x="2" y="14"></rect>
<rect height="4" rx="1" width="4" x="18" y="14"></rect>
<rect height="4" rx="1" width="4" x="9" y="4"></rect>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        Team Structure Agent
                      </span>
<span className="text-[0.65rem] text-neutral-500">
                        Pods, líderes &amp; riesgo de sucesión
                      </span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                  Pide análisis de salud de pods, identifica líderes en riesgo o
                  simula escenarios de reestructuración de equipo.
                </p>
<div className="relative mt-1">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" placeholder="Ej. Señálame los 3 líderes con mayor riesgo de churn y por qué..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 p-1.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</aside>
</div>

<div className="app-view hidden space-y-5" id="view-research">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
                    Market layer
                  </p>
<h2 className="text-xl font-semibold tracking-tight">
                    Research &amp; signals
                  </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Sniper Agent scans social platforms for opportunity
                    clusters.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/90 px-3 py-1.5 text-[0.75rem] text-neutral-900 font-medium hover:bg-sky-400">
                  Run new scan
                </button>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-4 shadow-sm dark:shadow-none bg-white/95">
<div className="flex flex-col h-full">
<div className="flex flex-wrap items-center justify-between gap-3 mb-4">
<div className="flex flex-wrap items-center gap-3 text-[0.8rem] text-neutral-500 dark:text-neutral-400">
<span className="inline-flex items-center gap-1 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1">
                        Región:
                        <span className="text-neutral-900 dark:text-neutral-100">
                          EU
                        </span>
</span>
<span className="inline-flex items-center gap-1 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1">
                        Plataforma:
                        <span className="text-neutral-900 dark:text-neutral-100">
                          Instagram
                        </span>
</span>
<span className="inline-flex items-center gap-1 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1">
                        Nicho:
                        <span className="text-neutral-900 dark:text-neutral-100">
                          Wellness &amp; nutrition
                        </span>
</span>
</div>
<div className="flex items-center gap-2 text-[0.75rem] text-neutral-500 dark:text-neutral-400">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Research Agent activo
                      </span>
</div>
</div>
<div className="flex-1 flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950/60 p-4 space-y-4">
<div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-white/10">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white">
<svg className="lucide lucide-orbit" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<circle cx="19" cy="5" r="2"></circle>
<circle cx="5" cy="19" r="2"></circle>
<path d="M8 22a10 10 0 0 1 10-10 9.7 9.7 0 0 1 4 .8"></path>
<path d="M9 2.7A10 10 0 0 0 4 12a9.7 9.7 0 0 0 .8 4"></path>
<path d="M22 8a10 10 0 0 0-10-6 9.7 9.7 0 0 0-4 .8"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            Research Agent
                          </p>
<p className="text-[0.7rem] text-neutral-500 dark:text-neutral-400">
                            Conversación dedicada para análisis de mercado
                          </p>
</div>
</div>
<div className="flex items-center gap-2 text-[0.75rem] text-neutral-500 dark:text-neutral-400">
<button className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 px-2.5 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900">
<svg className="lucide lucide-paperclip" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="m13.234 20.252-6.59-6.59a4 4 0 0 1 5.657-5.657l6.59 6.59a2.828 2.828 0 0 1-4 4l-6.125-6.125"></path>
</svg>
<span>Adjuntar archivo</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 px-2.5 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900">
<svg className="lucide lucide-folders" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h5l2 2h9v11a1 1 0 0 1-1 1H4Z"></path>
<path d="M4 4v13a1 1 0 0 0 1 1h14"></path>
</svg>
<span>Desde Documentos</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 px-2.5 py-1 hover:bg-neutral-50 dark:hover:bg-neutral-900">
<svg className="lucide lucide-link-2" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
<path d="M15 7h2a5 5 0 0 1 0 10h-2"></path>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
<span>Link externo</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-4 pr-1">
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
<svg className="lucide lucide-bot" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="bg-white dark:bg-neutral-900/80 p-3 rounded-2xl rounded-tl-none text-sm text-neutral-800 dark:text-neutral-100 leading-relaxed shadow-sm max-w-xl">
                          Hola, soy tu
                          <span className="font-medium">Research Agent</span>
                          . Puedo analizar conversaciones sociales, segmentos de
                          mercado y señales de intención de compra. Adjunta
                          documentos, activos desde Documentos o links externos
                          para enriquecer el contexto.
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[0.8rem]">
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/70 p-3 space-y-1">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                            Fitness creators con preguntas sobre ingresos extra
                          </p>
<p className="text-[0.7rem] text-neutral-500">
                            42 perfiles · CTR est. 7.3%
                          </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                            Recomendación: Outreach sequence A
                          </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/70 p-3 space-y-1">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                            Madres hablando de trabajo flexible e ingresos
                            remotos
                          </p>
<p className="text-[0.7rem] text-neutral-500">
                            65 perfiles · CTR est. 9.1%
                          </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                            Recomendación: Story funnel B
                          </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/70 p-3 space-y-1">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                            Vendedores existentes que se quejan de falta de
                            soporte
                          </p>
<p className="text-[0.7rem] text-neutral-500">
                            21 perfiles · CTR est. 5.8%
                          </p>
<p className="text-[0.7rem] text-amber-500 dark:text-amber-300">
                            Recomendación: Posicionamiento de liderazgo
                          </p>
</div>
</div>
</div>
<div className="pt-3 border-t border-neutral-200 dark:border-white/10 relative">
<textarea className="w-full bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 rounded-xl p-3 pr-11 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-sky-500/60 resize-none" placeholder="Pide al Research Agent que analice un nicho, compare segmentos o priorice clusters de oportunidad..." rows="3"></textarea>
<button className="absolute right-3 bottom-3 p-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-md">
<svg className="lucide lucide-arrow-up" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden space-y-5" id="view-campaigns">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-pink-600 dark:text-pink-400">
                    Growth layer
                  </p>
<h2 className="text-xl font-semibold tracking-tight">
                    Campaigns
                  </h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Define, launch, and track multi-agent initiatives.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white border border-neutral-900 px-3 py-1.5 text-[0.75rem] font-medium hover:bg-neutral-800" onclick="toggleAgent()">
<svg className="lucide lucide-bot" fill="none" height="0.85rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.85rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span>Hablar con Agent de Campañas</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/90 px-3 py-1.5 text-[0.75rem] text-neutral-900 font-medium hover:bg-pink-400">
                  New campaign
                </button>
</div>
<div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950/80 p-4 space-y-4 shadow-sm dark:shadow-none bg-white/95">
<div className="flex flex-wrap items-center gap-3 text-[0.8rem] text-neutral-500 dark:text-neutral-400 mb-2">
<span className="inline-flex items-center gap-1 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1">
                    Active:
                    <span className="text-neutral-900 dark:text-neutral-100">
                      3
                    </span>
</span>
<span className="inline-flex items-center gap-1 border border-neutral-200 dark:border-white/10 rounded-full px-2 py-1">
                    Scheduled:
                    <span className="text-neutral-900 dark:text-neutral-100">
                      1
                    </span>
</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[0.8rem]">
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      Q2 Product Launch
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      Coordinated content + training + follow-up push.
                    </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                      Progress: 64% · Conversion 7.5%
                    </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      Spain Recruitment Sprint
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      30 days · Sniper + Backoffice + Training bundle.
                    </p>
<p className="text-[0.7rem] text-emerald-500 dark:text-emerald-400">
                      Progress: 41% · 23 new signups
                    </p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/70 p-3 space-y-2">
<p className="text-sm text-neutral-900 dark:text-neutral-100">
                      Retention Win-Back
                    </p>
<p className="text-[0.7rem] text-neutral-500">
                      Targeting inactive Tier 1 &amp; 2 leaders.
                    </p>
<p className="text-[0.7rem] text-amber-500 dark:text-amber-300">
                      Progress: 18% · Re-activation 4.2%
                    </p>
</div>
</div>
</div>
<aside className="mt-4 lg:mt-0 lg:absolute lg:right-8 lg:top-6 lg:w-80 xl:w-96 rounded-2xl border border-neutral-200 bg-white/95 shadow-sm p-4 flex flex-col gap-3 z-10">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-megaphone" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path d="m3 11 18-5v12L3 14v-3Z"></path>
<path d="M11.6 16.8a3 3 0 1 1-5.6-1.6"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
                        Campaigns Agent
                      </span>
<span className="text-[0.65rem] text-neutral-500">
                        Diseño &amp; optimización de campañas
                      </span>
</div>
</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                  Define objetivos y restricciones, y el agente te ayuda a
                  diseñar campañas, ajustar KPIs y priorizar segmentos.
                </p>
<div className="relative mt-1">
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 pr-10 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none" placeholder="Ej. Propón una campaña de win‑back para líderes inactivos en LATAM..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 p-1.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="0.9rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.9rem" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</button>
</div>
</aside>
</div>
</div>
</section>
</div>
</main>




    </>
  );
}
