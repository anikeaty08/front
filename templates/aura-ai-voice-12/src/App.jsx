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
on.className =
'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
off.className =
'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
btn.className =
'inline-flex items-center rounded-full bg-neutral-800 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
} else {
on.className =
'text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all';
off.className =
'text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all';
btn.className =
'inline-flex items-center rounded-full bg-neutral-200 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors';
}
}
(function () {
const saved = localStorage.getItem('theme');
const html = document.documentElement;
if (saved === 'dark') {
html.classList.add('dark');
updateThemeToggleUI(true);
} else {
html.classList.remove('dark');
updateThemeToggleUI(false);
}
})();



// Sidebar Agent Logic
function toggleAgent() {
const sidebar = document.getElementById('agent-sidebar');
const arrow = document.getElementById('agent-arrow');
if (!sidebar || !arrow) return;
const isHidden = sidebar.style.transform === '' || sidebar.style.transform.includes('100%');
if (isHidden) {
sidebar.style.transform = 'translateY(-50%) translateX(0)';
arrow.classList.add('rotate-180');
} else {
sidebar.style.transform = 'translateY(-50%) translateX(calc(100% - 3rem))'; // Reset to hidden state
arrow.classList.remove('rotate-180');
}
}



// Pricing Toggle Logic
let isAnnual = false;
function toggleBilling() {
isAnnual = !isAnnual;
const toggleCircle = document.getElementById('billing-circle');
const toggleBg = document.getElementById('billing-bg');
const periods = document.querySelectorAll('.billing-period');
if(isAnnual) {
toggleCircle.classList.add('translate-x-6');
toggleBg.classList.replace('bg-neutral-200', 'bg-neutral-900');
// Update Prices to Annual
updatePriceText('price-starter', '390');
updatePriceText('price-growth', '4,990');
// Update Savings Text
document.getElementById('savings-starter').textContent = 'Save €78';
document.getElementById('savings-growth').textContent = 'Save €998';
periods.forEach(p => p.textContent = '/yr');
} else {
toggleCircle.classList.remove('translate-x-6');
toggleBg.classList.replace('bg-neutral-900', 'bg-neutral-200');
// Update Prices to Monthly
updatePriceText('price-starter', '39');
updatePriceText('price-growth', '499');
// Update Savings Text
document.getElementById('savings-starter').textContent = 'or €390/year';
document.getElementById('savings-growth').textContent = 'or €4,990/year';
periods.forEach(p => p.textContent = '/mo');
}
}
function updatePriceText(id, text) {
const el = document.getElementById(id);
if(el) el.textContent = text;
}



function toggleLoginModal() {
const modal = document.getElementById('login-modal');
const backdrop = document.getElementById('login-backdrop');
const card = document.getElementById('login-card');
const errorBox = document.getElementById('login-error');
if (!modal || !backdrop || !card) return;
const isHidden = modal.classList.contains('hidden');
if (isHidden) {
modal.classList.remove('hidden');
setTimeout(function () {
backdrop.classList.remove('opacity-0');
backdrop.classList.add('opacity-100');
card.classList.remove('opacity-0', 'scale-95');
card.classList.add('opacity-100', 'scale-100');
}, 10);
if (errorBox) {
errorBox.classList.add('hidden');
}
} else {
backdrop.classList.remove('opacity-100');
backdrop.classList.add('opacity-0');
card.classList.remove('opacity-100', 'scale-100');
card.classList.add('opacity-0', 'scale-95');
setTimeout(function () {
modal.classList.add('hidden');
}, 200);
}
}
function showLoginError() {
const errorBox = document.getElementById('login-error');
if (errorBox) {
errorBox.classList.remove('hidden');
}
}
function handleLogin(event) {
event.preventDefault();
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const username = usernameInput ? usernameInput.value.trim() : '';
const password = passwordInput ? passwordInput.value.trim() : '';
if (username === 'admin' && password === 'admin') {
localStorage.setItem('aura-auth', 'admin');
enterDashboard('Admin User');
toggleLoginModal();
} else if (username === 'user' && password === 'user') {
localStorage.setItem('aura-auth', 'user');
enterDashboard('Standard User');
toggleLoginModal();
} else {
showLoginError();
}
}
function enterDashboard(name) {
const landing = document.getElementById('landing-shell');
const app = document.getElementById('app-shell');
const authBtn = document.getElementById('auth-btn');
const userProfile = document.getElementById('user-profile');
const userName = document.getElementById('user-name');
if (landing) landing.classList.add('hidden');
if (app) app.classList.remove('hidden');
if (authBtn) authBtn.classList.add('hidden');
if (userProfile) userProfile.classList.remove('hidden');
if (userName && name) userName.textContent = name;
window.location.hash = '#dashboard';
}
function logout() {
localStorage.removeItem('aura-auth');
const landing = document.getElementById('landing-shell');
const app = document.getElementById('app-shell');
const authBtn = document.getElementById('auth-btn');
const userProfile = document.getElementById('user-profile');
if (landing) landing.classList.remove('hidden');
if (app) app.classList.add('hidden');
if (authBtn) authBtn.classList.remove('hidden');
if (userProfile) userProfile.classList.add('hidden');
}
window.addEventListener('load', function () {
const auth = localStorage.getItem('aura-auth');
if (auth) {
var label = 'Admin User';
if (auth === 'user') label = 'Standard User';
enterDashboard(label);
}
});



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            
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
      

<div className="fixed inset-0 z-[100] hidden items-center justify-center flex" id="login-modal" style={{visibility: 'hidden', display: 'none'}}>
<div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity opacity-0 duration-200" id="login-backdrop" onclick="toggleLoginModal()"></div>
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10 transform scale-95 opacity-0 transition-all duration-300 border border-white/20" id="login-card">
<button className="hover:text-neutral-900 hover:bg-neutral-100 transition-colors text-neutral-400 rounded-full pt-2 pr-2 pb-2 pl-2 absolute top-4 right-4" onclick="toggleLoginModal()">
<svg className="lucide lucide-x" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500 text-white mb-4 shadow-lg shadow-orange-500/20">
<svg className="lucide lucide-mic" fill="none" height="1.75rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.75rem" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<h3 className="text-2xl font-oswald font-medium text-neutral-900 tracking-tight">Welcome to Aura</h3>
<p className="text-base text-neutral-500 mt-2">Sign in to manage your voice agents</p>
<div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg hidden" id="login-error">
<div className="flex items-center gap-2 text-red-600">
<svg className="lucide lucide-alert-circle" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="text-xs font-medium">Invalid credentials. Try admin/admin</span>
</div>
</div>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-1.5">User / Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-neutral-400" id="username-input" placeholder="admin" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-1.5">Password</label>
<input className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-neutral-400" id="password-input" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-[0.98]" type="submit">Sign In</button>
</form>
</div>
</div>

<div className="fixed flex sidebar-transition -translate-y-1/2 md:h-[85vh] md:translate-x-[calc(100%-3rem)] z-50 h-[70vh] top-1/2 right-0 translate-x-[calc(100%-2.5rem)] items-center" id="agent-sidebar">
<button className="flex flex-col border-y cursor-pointer hover:bg-neutral-800 transition-colors outline-none md:w-12 md:h-48 text-white bg-neutral-900 w-10 h-40 z-20 border-white/10 rounded-l-xl border-l shadow-lg gap-x-4 gap-y-4 items-center justify-center" onclick="toggleAgent()">
<svg className="lucide lucide-phone-call w-[1.25rem] h-[1.25rem] text-orange-400" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
<div className="h-px w-6 bg-white/20"></div>
<svg className="lucide lucide-chevron-left transition-transform duration-500 w-[1.25rem] h-[1.25rem] w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="1.25rem" id="agent-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="w-full max-w-md h-full bg-white border-l border-neutral-200 shadow-2xl p-4 flex flex-col relative z-10 rounded-bl-2xl md:w-[28rem] md:p-6 md:rounded-bl-3xl">
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
<svg className="lucide lucide-waves" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
</path>
<path className="" d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
</path>
<path className="" d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1">
</path>
</svg>
</div>
<div className="">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold uppercase tracking-wide font-oswald text-neutral-900">Live Demo</span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<p className="text-[0.65rem] text-neutral-400 font-space uppercase tracking-widest">Connected to Aura Engine</p>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-6 mb-4 pr-2">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mic text-orange-500" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>
<div className="bg-neutral-50 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm border border-neutral-100">
          Hi, this is Aura. I can take your order, book an appointment, or answer questions about store hours. Go ahead,
          try a scenario.
        </div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
<span className="text-xs font-bold">YOU</span>
</div>
<div className="bg-white p-4 rounded-2xl rounded-tr-none text-sm text-neutral-700 leading-relaxed shadow-sm border border-neutral-100">
          I'd like to order a large pepperoni pizza for delivery.
        </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mic text-orange-500" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>
<div className="bg-neutral-50 p-4 rounded-2xl rounded-tl-none text-sm text-neutral-700 leading-relaxed shadow-sm border border-neutral-100">
          Got it. One large pepperoni pizza. Would you like to add a side of garlic knots or a drink with that?
        </div>
</div>
</div>
<div className="relative mt-auto pt-4 border-t border-neutral-100">
<button className="w-full py-3 bg-neutral-900 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10">
<svg className="lucide lucide-phone" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 -3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="text-sm font-medium tracking-wide uppercase">Start Call Simulation</span>
</button>
</div>
</div>
</div>

<main className="relative w-full xl:max-w-[96rem] bg-[#EAEAEA] xl:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col min-h-screen xl:min-h-[calc(100vh-4rem)]" id="landing-shell">
<div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb5bb57f-d64c-4557-800e-a51f190e6ac0_3840w.png)]" style={{}}></div>
<div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-b from-white/60 to-transparent opacity-50 blur-3xl pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3"></div>

<nav className="flex flex-wrap md:px-12 z-30 bg-stone-100 pt-6 pr-6 pb-6 pl-6 relative gap-x-20 gap-y-6 items-center justify-between">
<div className="flex gap-3 group cursor-pointer mr-8 gap-x-3 gap-y-3 items-center">
<img alt="Aura Voice" className="w-auto h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e955e5d-4f83-4166-92b0-25a8377d1247_320w.png" style={{}}/>
<div className="flex flex-col">
<span className="text-[0.6rem] uppercase block leading-tight text-neutral-500 tracking-widest font-space">
  Real-time AI Voice Agent
</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 mr-auto">
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#use-cases">Use Cases</a>
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#features">Features</a>
<a className="uppercase hover:text-neutral-900 transition-colors text-xs font-semibold text-neutral-600 tracking-widest" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3 ml-auto">
<button className="uppercase hover:bg-neutral-800 transition-colors flex shadow-neutral-900/10 text-xs font-semibold text-white tracking-wider bg-neutral-900 rounded-full pt-2 pr-6 pb-2 pl-6 shadow-lg gap-x-2 gap-y-2 items-center" id="auth-btn" onclick="toggleLoginModal()">
<span>Sign In</span>
<svg className="lucide lucide-arrow-right" fill="none" height="0.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="0.875rem" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="hidden items-center gap-3 pl-2" id="user-profile">
<div className="flex flex-col items-end">
<span className="text-xs font-semibold font-oswald uppercase tracking-tight" id="user-name">Admin User</span>
</div>
<button className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors" onclick="logout()">
<svg className="lucide lucide-log-out" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
</button>
</div>
</div>
</nav>

<div className="flex-1 overflow-y-auto bg-zinc-100 z-10 relative" id="landing-content">

<section className="md:px-12 md:pb-24 bg-zinc-100 max-w-[90rem] mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">
<div className="flex flex-col gap-8">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-0 gap-y-12 items-start">
<div className="lg:col-span-7 flex flex-col gap-8 gap-x-8 gap-y-8">
<div className="flex gap-4 animate-fade-in-up gap-x-4 gap-y-4 items-center">
<div className="h-px w-12 bg-neutral-400"></div>
<span className="uppercase text-sm font-medium text-neutral-500 tracking-widest">Real-time AI Voice Agent</span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.85] uppercase text-6xl font-medium text-neutral-900 tracking-tight font-oswald py-4" style={{}}>Automate phone calls
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600 block">Your rules,</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600 block">Your scripts,</span>
<span className="bg-clip-text block text-transparent bg-gradient-to-r from-orange-500 to-amber-600">Your data.</span>
</h1>
<div className="uppercase text-xl font-medium text-neutral-900 tracking-wide font-oswald">
          Every call answered. Every order captured. Every location aligned.
        </div>
<div className="bg-white w-full border-neutral-200 border rounded-2xl mt-10 mr-auto ml-auto pt-12 pb-12 shadow-sm">
<div className="md:px-12 max-w-[90rem] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col sm:flex-row gap-8 gap-x-8 gap-y-8 items-start">

<div className="flex flex-col gap-3 items-start">
<button className="shrink-0 hover:shadow-xl hover:shadow-neutral-500/20 transition-all group flex gap-3 text-white bg-neutral-900 rounded-lg pt-4 pr-8 pb-4 pl-8 items-center">
<span className="uppercase text-sm font-medium tracking-widest">TALK TO OUR TEAM</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform shrink-0" fill="none" height="1rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<span className="text-[0.6rem] leading-tight normal-case text-neutral-500 max-w-[14rem]">Book a call with our team to tailor solutions for your business needs.</span>
</div>

<div className="flex flex-col gap-3 items-start">
<button className="shrink-0 hover:bg-neutral-50 transition-all group text-neutral-900 bg-white border-neutral-300 border rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-sm" onclick="toggleAgent()">
<span className="flex items-center gap-2 uppercase text-sm font-medium tracking-widest">
            TALK WITH AURA
            <svg className="lucide lucide-mic w-4 h-4 text-orange-500 transition-transform group-hover:scale-110" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path className="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</span>
</button>
<span className="text-[0.6rem] leading-tight normal-case text-neutral-500 tracking-normal max-w-[14rem]">
          Hear how Aura handles taking orders or booking appointments.
        </span>
</div>
</div>

<div className="flex flex-wrap gap-8 w-full border-neutral-100 border-t mt-8 pt-8 gap-x-8 gap-y-8 items-center">
<div className="flex text-xs text-neutral-600 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-lock-keyhole-open w-[16px] h-[16px]" data-lucide="lock-keyhole-open" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(22, 163, 74)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="16" r="1"></circle>
<rect height="12" rx="2" width="18" x="3" y="10"></rect>
<path d="M7 10V7a5 5 0 0 1 9.33-2.5"></path>
</svg>
        GDPR-compliant
      </div>
<div className="flex gap-2 text-xs text-neutral-600 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-globe w-[16px] h-[16px]" data-lucide="globe" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(22, 163, 74)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
        Multilingual (27 langs)
      </div>
<div className="flex gap-2 text-xs text-neutral-600 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-book-heart" data-lucide="book-heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(22, 163, 74)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20">
</path>
<path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z">
</path>
</svg>
        One standard everywhere
      </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 group h-full mt-1 relative">
<div className="group-hover:rotate-6 transition-transform duration-500 bg-orange-500 opacity-10 rounded-2xl absolute top-0 right-0 left-0 h-[34rem] rotate-3">
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl h-[34rem] w-full bg-neutral-900">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black"></div>
<div className="absolute inset-0 opacity-30 flex items-center justify-center">
<div className="w-64 h-64 bg-orange-500 rounded-full blur-[80px] animate-pulse"></div>
</div>
<div className="flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute inset-0 z-0">
<img alt="AI Agent" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/40 to-transparent mix-blend-multiply">
</div>
<div className="flex flex-col z-20 bg-gradient-to-t from-gray-950/80 to-transparent pt-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-start">

</div>
</div>
<div className="z-10 overflow-hidden group transition-all duration-300 hover:border-white/20 bg-neutral-950/90 border-white/10 border rounded-[2rem] mb-4 relative shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl translate-y-8">

<div className="flex flex-row items-center gap-3 bg-transparent border-white/5 border-b p-3 w-full">

<div className="relative w-10 h-10 shrink-0">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-500 rounded-full animate-pulse opacity-40 blur-md">
</div>
<div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 p-[1px]">
<div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden relative">
<div className="z-20 flex bg-neutral-950 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-sparkles text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
<path d="M4 17v2"></path>
<path d="M5 18H3"></path>
</svg>
</div>
<svg className="w-4 h-4 z-10 relative text-white" fill="currentColor" height="16" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="w-full min-w-0">
<div className="flex items-center justify-between mb-0.5">
<h3 className="text-sm font-semibold text-white tracking-tight">Store #042</h3>
<div className="flex gap-1 shadow-green-500/20 text-black bg-[#2cdb5b] rounded-full px-2 py-0.5 shadow-lg items-center">
<svg className="w-2.5 h-2.5" fill="currentColor" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
<span className="text-[10px] font-bold tracking-wide">2:13</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-green-400 overflow-hidden">
<span className="text-[11px] truncate font-medium opacity-90">AI is writing your order into Ordering System</span>
</div>
</div>
</div>

<div className="pt-5 pr-5 pb-5 pl-5 space-y-5">

<div className="flex gap-4 group/msg">
<div className="w-1 bg-white/20 rounded-full h-auto min-h-[2rem] shrink-0 group-hover/msg:bg-white/40 transition-colors">
</div>
<p className="text-sm text-white/80 font-medium leading-relaxed">"I'd like to place an order for pick up."</p>
</div>

<div className="flex gap-4 group/msg">
<div className="w-1 bg-orange-500 rounded-full h-auto min-h-[3rem] shrink-0 shadow-[0_0_12px_rgba(249,115,22,0.6)] animate-pulse">
</div>
<p className="leading-relaxed text-sm font-medium text-orange-100">"Certainly. I can help with that. What would
              you like to order today?"</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-200 border-t pt-24 pb-24">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

<div className="bg-red-50 p-8 rounded-3xl border border-red-100 flex flex-col h-full">
<span className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-4 block">The Problem</span>
<h3 className="text-3xl font-medium text-neutral-900 tracking-tight font-oswald mb-4">When demand jumps, phones
          break first.</h3>
<p className="text-neutral-600 leading-relaxed mt-auto">
          Staff can't keep up during rush. Customers hang up. Orders disappear. Every missed call is revenue walking
          out the door.
        </p>
</div>

<div className="bg-neutral-900 text-white p-8 rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col h-full">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 blur-[60px] opacity-20 rounded-full"></div>
<span className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-4 block relative z-10">The Outcome</span>
<h3 className="text-3xl font-medium text-white tracking-tight font-oswald mb-4 relative z-10">Answer every call.
          Capture every order.</h3>
<p className="text-neutral-400 leading-relaxed relative z-10 mt-auto">
          Aura answers every call, captures every order, and escalates when needed. Your team stays in control. Your
          customers stay happy. 24/7.
        </p>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-zinc-50 pt-24 pb-24 pr-6 pl-6 border-t border-neutral-200" id="use-cases">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<span className="uppercase block text-xs font-semibold text-neutral-500 tracking-widest mb-2">Use Cases</span>
<h3 className="md:text-5xl text-3xl font-medium text-neutral-900 tracking-tight font-oswald mb-4">Purpose-built for
          customer-facing teams</h3>
<p className="text-neutral-600 max-w-2xl text-lg">From reservations to order-taking, Aura adapts to the workflows
          that keep your business running.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group flex flex-col h-full">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-utensils" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
<path d="M7 2v20"></path>
<path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
</svg>
</div>
<h4 className="text-xl font-oswald font-medium mb-3">Restaurants &amp; Food</h4>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Takes orders, answers menu questions, confirms
            reservations, and upsells add-ons.</p>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 relative mt-auto">
<button className="absolute top-3 right-3 w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-900 shadow-sm hover:scale-105 transition-transform">
<svg className="" fill="currentColor" height="0.75rem" stroke="none" viewbox="0 0 24 24" width="0.75rem" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
<p className="text-xs font-medium text-neutral-900 mb-1">"I'd like to order the veggie bowl..."</p>
<p className="text-xs text-neutral-500 italic">→ Aura confirms, suggests drink, gives ETA.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group flex flex-col h-full">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-heart-pulse" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
</path>
<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
</svg>
</div>
<h4 className="text-xl font-oswald font-medium mb-3">Healthcare &amp; Wellness</h4>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Books appointments, answers service FAQs, handles
            cancellations, and sends reminders.</p>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 relative mt-auto">
<button className="absolute top-3 right-3 w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-900 shadow-sm hover:scale-105 transition-transform">
<svg fill="currentColor" height="0.75rem" stroke="none" viewbox="0 0 24 24" width="0.75rem" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
<p className="text-xs font-medium text-neutral-900 mb-1">"Need to book a cleaning for..."</p>
<p className="text-xs text-neutral-500 italic">→ Aura checks slots, confirms, sends SMS.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group flex flex-col h-full">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-store" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
<path className="" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
<path className="" d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
<path d="M2 7h20"></path>
<path className="" d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7">
</path>
</svg>
</div>
<h4 className="text-xl font-oswald font-medium mb-3">Multi-Location Retail</h4>
<p className="text-sm text-neutral-600 mb-6 leading-relaxed">Handles hours, stock checks, directions, and routes
            complex requests to staff.</p>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 relative mt-auto">
<button className="absolute top-3 right-3 w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-900 shadow-sm hover:scale-105 transition-transform">
<svg fill="currentColor" height="0.75rem" stroke="none" viewbox="0 0 24 24" width="0.75rem" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
<p className="text-xs font-medium text-neutral-900 mb-1">"Do you have the blue jacket in M?"</p>
<p className="text-xs text-neutral-500 italic">→ Aura checks inventory, confirms stock.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-white border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<span className="uppercase block text-xs font-semibold text-neutral-500 tracking-widest mb-2">Why Teams Choose Aura</span>
<h3 className="md:text-4xl text-3xl font-medium text-neutral-900 tracking-tight font-oswald">Answer more. Capture
          more. Scale faster.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex gap-4 hover:bg-neutral-50 transition-colors bg-neutral-50/50 h-full border-neutral-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-start">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">Rush-hour ready</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Scale instantly without hiring more staff. Handle concurrent calls with zero wait times.</p>
</div>
</div><div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors h-full">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">Every call answered</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Even after hours, never miss a customer opportunity. We handle the volume so you don't have to.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors h-full">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-file-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">One standard everywhere</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Consistent brand voice across all locations. Ensure every customer gets the same high-quality service.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors h-full">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-braces" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">Change scripts in minutes</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Update hours, promos, or greetings instantly across your entire fleet of agents.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors h-full">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-database" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path className="" d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">Improve with data</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Real call data to refine your approach. Identify bottlenecks and customer sentiment trends.</p>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors h-full">
<div className="flex shrink-0 text-orange-600 bg-orange-100 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-trending-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div className="">
<h5 className="font-bold text-neutral-900 mb-1">Simple forecasting</h5>
<p className="text-sm text-neutral-600 leading-relaxed">Predictable costs with simple plans. No surprise bills or complex metered usage.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="pricing">

<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-24"></div>

<div className="text-center max-w-3xl mr-auto mb-16 ml-auto">
<span className="uppercase block text-xs font-semibold text-neutral-500 tracking-widest mb-2">Pricing Plans</span>
<h3 className="md:text-5xl text-4xl font-medium text-neutral-900 tracking-tight font-oswald mb-4">
            Simple pricing that scales with your business
        </h3>
<p className="text-lg text-neutral-600 mb-8">Predictable monthly costs. Transparent overage. No hidden fees. Each plan includes bundled minutes, concurrent call capacity, and automated agent flows.</p>

<div className="flex items-center justify-center gap-4 mb-4">
<span className="text-sm font-medium text-neutral-600">Monthly</span>
<button className="transition-colors duration-300 bg-neutral-200 w-14 h-8 rounded-full relative" id="billing-bg" onclick="toggleBilling()">
<div className="transition-transform duration-300 bg-white w-6 h-6 rounded-full absolute top-1 left-1 shadow-md" id="billing-circle"></div>
</button>
<span className="text-sm font-medium text-neutral-900">Annual <span className="text-xs text-orange-600 font-bold ml-1">Save 17%</span></span>
</div>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Pay for 10 months, get 12 months with annual billing.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 gap-x-6 gap-y-6 items-start">

<div className="flex flex-col hover:shadow-lg transition-all group bg-white h-full border-neutral-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="h-6 mb-4"></div>
<div className="mb-4">
<h4 className="text-3xl font-medium text-neutral-900 tracking-tight font-oswald mb-1">Starter</h4>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-neutral-900">€<span className="" id="price-starter">39</span></span>
<span className="text-sm text-neutral-500 billing-period">/mo</span>
</div>
<p className="text-xs text-neutral-400 mb-4" id="savings-starter">or €390/year</p>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Perfect for single locations.</p>
</div>
<ul className="flex-1 text-sm text-neutral-700 mb-8 space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="" style={{}}>120 inbound minutes/month <span className="text-neutral-500" style={{}}>(~2 hours)</span></span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 concurrent call</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 agent flow</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 phone number included</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Real-time dashboard</span>
</li>
</ul>
<button className="w-full py-4 border border-neutral-900 text-neutral-900 font-semibold uppercase tracking-widest text-xs hover:bg-neutral-50 transition-colors rounded-lg mt-auto">Start Now</button>
</div>

<div className="relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900 text-white shadow-2xl flex flex-col p-8 h-full transform scale-105 z-10">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-500"></div>
<div className="absolute top-6 right-6">
<span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-[0.6rem] font-bold uppercase tracking-widest shadow-md shadow-orange-500/20">Most Popular</span>
</div>
<div className="h-6 mb-4"></div>
<div className="mb-4">
<h4 className="text-3xl font-oswald font-medium tracking-tight text-white mb-1">Growth</h4>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-white">€<span className="" id="price-growth">499</span></span>
<span className="text-sm text-neutral-400 billing-period">/mo</span>
</div>
<p className="text-xs text-neutral-500 mb-4" id="savings-growth">or €4,990/year (Save €998)</p>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Premium high-capacity solution for high-volume operations.</p>
</div>
<div className="flex-1 mb-6">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-semibold">Everything in Starter, plus:</p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">2,280 inbound minutes/month <span className="text-neutral-500">(~38 hours)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Unlimited overage <span className="text-neutral-500">(€0.25/min)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 concurrent call <span className="text-neutral-500">(base, add more at +€19/mo)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 agent flow <span className="text-neutral-500">(base, add more at +€19/mo)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">1 phone number <span className="text-neutral-500">(add more at +€2/mo)</span></span>
</li>
</ul>
</div>
<div className="border-t border-neutral-800 pt-4 mb-6">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-semibold">Flexible add-ons</p>
<div className="text-xs text-neutral-400 space-y-1">
<div className="flex justify-between"><span className="">Extra Concurrent Calls</span> <span className="text-white">+€19/mo</span></div>
<div className="flex justify-between"><span className="">Extra Agent Flows</span> <span className="text-white">+€19/mo</span></div>
<div className="flex justify-between"><span className="">Extra Phone Numbers</span> <span className="text-white">+€2/mo</span></div>
</div>
</div>
<button className="w-full py-4 bg-white text-neutral-900 font-semibold uppercase tracking-widest text-xs hover:bg-neutral-100 transition-colors rounded-lg mt-auto">Scale Now</button>
</div>

<div className="bg-neutral-50 border border-neutral-200 shadow-sm rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-all relative">
<div className="h-6 mb-4"></div>
<div className="mb-4">
<h4 className="text-3xl font-oswald font-medium tracking-tight text-neutral-900 mb-1">Custom</h4>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-semibold tracking-tight text-neutral-900">Contact Us</span>
</div>
<p className="text-xs text-neutral-500 mb-4"> </p>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Enterprise-grade customization.</p>
</div>
<div className="flex-1 mb-6">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-semibold">Everything in Growth, plus:</p>
<ul className="space-y-4 text-sm text-neutral-700">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Unlimited concurrent calls</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Unlimited agent flows</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Custom integrations <span className="text-neutral-500">(CRM, POS, ERP)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Volume-based minute discounts</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neutral-900 shrink-0" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Dedicated account manager</span>
</li>
</ul>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-semibold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors rounded-lg mt-auto">Contact Sales</button>
</div>
</div>

<div className="max-w-4xl mx-auto mb-24 bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-10">
<div className="text-center mb-8">
<h4 className="text-2xl font-oswald font-medium text-neutral-900 mb-3">Pay only for what you use. No hidden fees.</h4>
<p className="text-neutral-600">Unlike traditional phone systems that charge per-seat or lock you into enterprise bundles, Aura pricing is simple and fair.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-600">Pay for actual call time (Starter: 120 min cap, Growth: unlimited at €0.25/min)</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-600">No surprise fees for AI voice technology or telephony</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-600">Extra capacity available when you need it (+€19/mo per concurrent call)</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-xs text-neutral-600">No penalties, no forced commitments</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mb-24 overflow-x-auto">
<h3 className="text-2xl font-oswald font-medium text-neutral-900 mb-8 text-center">Compare Plans</h3>
<table className="w-full text-left border-collapse min-w-[600px]">
<thead className="">
<tr className="border-b border-neutral-200">
<th className="py-4 pl-4 text-xs font-bold text-neutral-500 uppercase tracking-widest w-1/4">Feature</th>
<th className="py-4 px-4 text-lg font-oswald font-medium text-neutral-900 w-1/4">Starter</th>
<th className="py-4 px-4 text-lg font-oswald font-medium text-orange-600 w-1/4">Growth</th>
<th className="py-4 px-4 text-lg font-oswald font-medium text-neutral-900 w-1/4">Custom</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-700">

<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Monthly Price</td>
<td className="py-4 px-4">€39</td>
<td className="py-4 px-4 font-bold">€499</td>
<td className="py-4 px-4">Contact us</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Minutes/month</td>
<td className="py-4 px-4">120 (2 hrs)</td>
<td className="py-4 px-4 font-bold">2,280 (38 hrs)</td>
<td className="py-4 px-4">Custom</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Overage Rate</td>
<td className="py-4 px-4 text-red-500 font-medium">Hard cap (None)</td>
<td className="py-4 px-4">€0.25/min</td>
<td className="py-4 px-4">Custom</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Concurrent Calls</td>
<td className="py-4 px-4">1</td>
<td className="py-4 px-4">1 (+€19/mo)</td>
<td className="py-4 px-4">Unlimited</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Agent Flows</td>
<td className="py-4 px-4">1</td>
<td className="py-4 px-4">1 (+€19/mo)</td>
<td className="py-4 px-4">Unlimited</td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Phone Numbers</td>
<td className="py-4 px-4">1 included</td>
<td className="py-4 px-4">1 (+€2/mo)</td>
<td className="py-4 px-4">Unlimited</td>
</tr>

<tr className=""><td className="h-8" colspan="4"></td></tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Call Dashboard</td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Logs &amp; Transcripts</td>
<td className="py-4 px-4 text-neutral-300"><svg className="lucide lucide-minus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Multi-location Governance</td>
<td className="py-4 px-4 text-neutral-300"><svg className="lucide lucide-minus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
</tr>
<tr className="border-b border-neutral-100 hover:bg-neutral-50/50">
<td className="py-4 pl-4 font-medium">Priority Onboarding</td>
<td className="py-4 px-4 text-neutral-300"><svg className="lucide lucide-minus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
<td className="py-4 px-4 text-green-600"><svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></td>
</tr>
</tbody>
</table>
</div>

<div className="max-w-4xl mx-auto border-t border-neutral-200 pt-16">
<h3 className="text-2xl font-oswald font-medium text-neutral-900 mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-neutral-50 rounded-xl border border-neutral-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer font-medium text-neutral-900 text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between" style={{}}>Are there additional fees?<span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-neutral-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span></summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                   No hidden fees. Starter plan (€39/mo) includes 120 minutes/month with a hard cap. Growth plan (€499/mo) includes 2,280 minutes/month with unlimited overage at €0.25/min. Custom plans are tailored to your specific needs. No setup fees, no long-term contracts.
                </div>
</details>
<details className="group bg-neutral-50 rounded-xl border border-neutral-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex w-full items-center justify-between p-6 cursor-pointer text-left font-medium text-neutral-900">
                   What happens if I exceed my limit?
                    <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-neutral-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                    We'll notify you when you reach 80% of your limit. On Starter plan, calls stop at 120 minutes (hard cap) — you can upgrade to Growth anytime for unlimited overage at €0.25/min (prorated billing). On Growth plan, Aura never stops answering calls — you just pay €0.25/min for usage beyond your included 2,280 minutes.
                </div>
</details>
<details className="group bg-neutral-50 rounded-xl border border-neutral-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex w-full items-center justify-between p-6 cursor-pointer text-left font-medium text-neutral-900">
                    What support do you provide?
                    <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-neutral-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                    Starter plan includes email support (24-hour response). Growth plan includes priority email + chat support (4-hour response) with priority onboarding. Custom plan includes dedicated account manager, phone support, and onboarding assistance. All plans include comprehensive documentation and video tutorials.
                </div>
</details>
<details className="group bg-neutral-50 rounded-xl border border-neutral-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex w-full items-center justify-between p-6 cursor-pointer text-left font-medium text-neutral-900">
                    Does it integrate with my POS system?
                    <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-neutral-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                    Custom integrations available on Growth and Custom plans. We can connect with Toast, Square, Lightspeed, and other major POS systems to enable direct order injection and menu syncing.
                </div>
</details>
</div>
<div className="text-center mt-8">
<p className="text-sm text-neutral-500">Need help choosing? <a className="text-neutral-900 font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 transition-all" href="#">Contact us</a></p>
</div>
</div>
</section>

<div className="bg-zinc-100 border-neutral-200 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mr-auto ml-auto">

<div className="mb-24 border-b border-neutral-200 pb-24">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-3 block">Customer Stories</span>
<h2 className="text-3xl md:text-4xl font-oswald font-medium text-neutral-900 tracking-tight mb-6">Trusted by forward-thinking teams</h2>
<p className="text-neutral-500 text-sm leading-relaxed">
          Join hundreds of businesses using Aura to automate their phone lines without sacrificing the personal touch your customers expect.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
<div className="">
<div className="mb-6 text-orange-500">
<svg className="lucide lucide-quote opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed text-sm mb-6">"We used to miss 20% of calls during our Friday dinner rush. Aura now captures every single order, and order accuracy has actually improved."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-sm">MR</div>
<div className="">
<div className="text-xs font-semibold text-neutral-900">Marco Rossi</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">General Manager</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
<div className="">
<div className="mb-6 text-orange-500">
<svg className="lucide lucide-quote opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed text-sm mb-6">"Implementation took less than an afternoon. We uploaded our FAQs, set our hours, and the voice agent sounded professional immediately."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-sm">SJ</div>
<div className="">
<div className="text-xs font-semibold text-neutral-900">Sarah Jenkins</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Ops Director</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
<div className="">
<div className="mb-6 text-orange-500">
<svg className="lucide lucide-quote opacity-50" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
</div>
<p className="text-neutral-700 leading-relaxed text-sm mb-6">"The best part is the consistency. Whether a customer calls at 2 PM or 2 AM, they get the exact same high-quality service and accurate information."</p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
<div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-sm">DC</div>
<div className="">
<div className="text-xs font-semibold text-neutral-900">David Chen</div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Franchise Owner</div>
</div>
</div>
</div>
</div>
</div>

<div className="overflow-hidden text-center border-neutral-200 border-t mt-20 pt-12 relative">

<div className="aura-background-component absolute inset-0 w-full h-full pointer-events-none" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component absolute inset-0 w-full h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA">
</div>

</div>
</div>

<div className="relative z-10">

<h2 className="md:text-3xl text-2xl font-medium tracking-tight font-oswald mb-6">
            Ready to automate your phone lines?
        </h2>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 justify-center">
<button className="hover:shadow-xl transition-all uppercase hover:-translate-y-0.5 text-xs font-semibold text-white tracking-widest bg-neutral-900 rounded-lg pt-3.5 pr-8 pb-3.5 pl-8">Talk to our team</button>
<button className="px-8 py-3.5 bg-white border border-neutral-300 text-neutral-900 rounded-lg hover:bg-neutral-50 transition-all uppercase text-xs font-semibold tracking-widest hover:-translate-y-0.5">Talk with Aura now</button>
</div>
</div>
</div>
</div>
</div>
<footer className="md:px-12 text-neutral-400 bg-neutral-900 border-neutral-800 border-t pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col md:flex-row gap-8 max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-start justify-between">
<div className="">
<div className="flex items-center gap-2 mb-4 text-white">
<span className="uppercase text-lg font-medium tracking-tight font-oswald">
<img alt="Aura Logo" className="w-auto h-10 object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e955e5d-4f83-4166-92b0-25a8377d1247_320w.png" style={{}}/>
</span>
</div>
<p className="leading-relaxed text-base max-w-xs">Turn missed calls into revenue. Never lose an order to a busy line. 24/7
  coverage that sounds like you.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-base">
<div className="flex flex-col gap-3">
<span className="uppercase text-xs font-medium text-white tracking-widest">Platform</span>
<a className="hover:text-white transition-colors" href="#">Use Cases</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium uppercase tracking-widest text-xs">Company</span>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-xs flex justify-between">
<span className="" style={{}}>© 2025 Aura. All rights reserved.</span>
<div className="flex gap-4">
<span className="">Privacy</span>
<span className="">Terms</span>
</div>
</div>
</footer>
</div>
</main>

<main className="hidden w-full xl:max-w-[96rem] bg-[#EAEAEA] xl:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col min-h-screen xl:min-h-[calc(100vh-4rem)] relative transition-colors duration-300" id="app-shell">
<div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064f54d1-ac6e-4d18-8b47-ce52263964d0_800w.png)]" style={{}}></div>
<header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5 border-b border-neutral-200 bg-stone-100/90 backdrop-blur-xl transition-colors">
<div className="flex items-center gap-3">
<span className="font-oswald text-xl uppercase tracking-tight">Aura Dashboard</span>
</div>
<button className="text-xs uppercase font-bold text-neutral-500 hover:text-red-500" onclick="logout()">Logout</button>
</header>
<div className="flex-1 p-10 flex items-center justify-center">
<div className="text-center">
<h2 className="text-2xl font-oswald mb-4">Dashboard View</h2>
<p className="text-neutral-500">This area is reserved for the logged-in application state.</p>
</div>
</div>
</main>

    </>
  );
}
