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



tailwind = {};
tailwind.config = { darkMode: "class" };



function toggleTheme() {
const html = document.documentElement;
const isDark = html.classList.contains("dark");
if (isDark) {
html.classList.remove("dark");
localStorage.setItem("theme", "light");
updateThemeToggleUI(false);
} else {
html.classList.add("dark");
localStorage.setItem("theme", "dark");
updateThemeToggleUI(true);
}
}
function updateThemeToggleUI(isDark) {
const btn = document.getElementById("theme-toggle-btn");
const on = document.getElementById("theme-indicator-on");
const off = document.getElementById("theme-indicator-off");
if (!btn) return;
if (isDark) {
on.className =
"text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all";
off.className =
"text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all";
btn.className =
"inline-flex items-center rounded-full bg-neutral-800 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors";
} else {
on.className =
"text-[0.65rem] px-2 py-0.5 rounded-full text-neutral-500 transition-all";
off.className =
"text-[0.65rem] px-2 py-0.5 rounded-full bg-white text-neutral-900 shadow-sm transition-all";
btn.className =
"inline-flex items-center rounded-full bg-neutral-200 px-1 py-0.5 border border-neutral-300 dark:border-white/10 cursor-pointer transition-colors";
}
}
(function () {
const saved = localStorage.getItem("theme");
const html = document.documentElement;
if (saved === "dark") {
html.classList.add("dark");
updateThemeToggleUI(true);
} else {
html.classList.remove("dark");
updateThemeToggleUI(false);
}
})();



const translations = {
en: {
heroTagline: "AI-First Operating System FOR MLM",
heroTitle: "Leadership for the Agentic AI Era",
heroSubtitle: "LINARIS is not for the masses. It's a strategic partner for the top 10% of leaders who understand that the future of MLM is not built with effort, but with intelligent systems.",
heroCTA: "REQUEST ACCESS",
heroOverlayTitle: "System Analysis",
navSolutions: "SOLUTIONS",
navAgents: "AGENTS",
navPrice: "PRICING",
authSignIn: "Sign In",
langLabel: "EN",
modalTitle: "Welcome to LINARIS",
modalSubtitle: "Enter your credentials to access the OS",
loginError: "Invalid credentials. Try user/user or admin/admin",
lblUser: "User / Email",
lblPass: "Password",
btnLoginSubmit: "Sign In",
txtOr: "Or continue with",
probTag: "The Structural Problem",
probTitle: "From Door-to-Door to 'Social Selling' & Agentic AI Era",
probDesc: "The traditional MLM model is limited. Technology has reconfigured the channel but amplified inefficiencies, creating a multi-billion dollar battlefield.",
p1Title: "Retention Crisis",
p1Desc: "Between 50% and 70% drop out in the first year. 73% fail, generating a social stigma of 'burning' contacts.",
p2Title: "Hidden 80% Cost",
p2Desc: "Inefficient time arbitrage. Leaders invest 80% of their day in micromanagement and basic coaching.",
p3Title: "Regulatory Risk",
p3Desc: "Scrutiny from bodies like the FTC demands compliance. A millionaire financial and reputational risk.",
solTag: "The AI-First Solution",
solTitle: "Autonomous Agent Architecture",
thPain: "Pain Point",
thAgent: "LINARIS Agent",
thAlgo: "Algorithmic Solution",
priceTag: "B2B2C SaaS Model",
priceTitle: "A strategic investment with a clear ROI.",
mo1: "/mo",
mo2: "/mo",
priceCustom: "Custom",
baseF1: "1 Admin License + 3 Sales Reps",
baseF2: "\"Backoffice Sales\" Agent",
baseF3: "Behavioral Predictive Agent",
proF1: "1 Admin License + 9 Sales Reps",
proF2: "Everything in Base +",
proF3: "Lead \"Sniper\" Agent",
entF1: "Full API Integration",
entF2: "24/7 Dedicated Support",
entF3: "Agent Customization",
btnP1: "Select Plan",
btnP2: "Start Now",
btnP3: "Contact Sales",
badgePop: "Most Popular",
statRetention: "Retention Rate",
statVs: "vs Industry Avg",
statChurn: "Team Churn",
statAi: "AI Predicted",
statSystem: "System Status",
sys1: "> Agent \"Sniper\"",
sys2: "> Compliance Scan",
sys3: "> Churn Prediction",
agentSidebarTitle: "Agent Command",
agentSidebarSubtitle: "Linaris Neural Network Active",
agentGreeting: "Hello, I am your executive assistant. How can I help you lead your team today?",
footerPrivacy: "Privacy Policy",
footerTerms: "Terms",
footerTagline: "Built for the top 10% of leaders."
},
es: {
heroTagline: "Sistema Operativo AI-First PARA MLM",
heroTitle: "Liderazgo para la Era de la IA Agéntica",
heroSubtitle: "LINARIS no es para las masas. Es un socio estratégico para el 10% de líderes que entienden que el futuro del MLM no se construye con esfuerzo, sino con sistemas inteligentes.",
heroCTA: "SOLICITAR ACCESO",
heroOverlayTitle: "Análisis del Sistema",
navSolutions: "SOLUCIONES",
navAgents: "AGENTES",
navPrice: "PRECIOS",
authSignIn: "Acceder",
langLabel: "ES",
modalTitle: "Bienvenido a LINARIS",
modalSubtitle: "Introduce tus credenciales para acceder al OS",
loginError: "Credenciales inválidas. Prueba user/user o admin/admin",
lblUser: "Usuario / Email",
lblPass: "Contraseña",
btnLoginSubmit: "Iniciar sesión",
txtOr: "O continúa con",
probTag: "El Problema Estructural",
probTitle: "De Puerta a Puerta al \"Social Selling\" y la Era de la IA Agéntica",
probDesc: "El modelo tradicional de MLM es limitado. La tecnología ha reconfigurado el canal pero ha amplificado las ineficiencias, creando un campo de batalla de miles de millones.",
p1Title: "Crisis de Retención",
p1Desc: "Entre el 50% y el 70% abandona en el primer año. El 73% fracasa, generando un estigma social de \"quemar\" contactos.",
p2Title: "El Coste Oculto del 80%",
p2Desc: "Arbitraje ineficiente del tiempo. Los líderes invierten el 80% de su día en micromanagement y coaching básico.",
p3Title: "Riesgo Regulatorio",
p3Desc: "El escrutinio de organismos como la FTC exige cumplimiento. Un riesgo financiero y reputacional millonario.",
solTag: "La Solución AI-First",
solTitle: "Arquitectura de Agentes Autónomos",
thPain: "Dolor",
thAgent: "Agente LINARIS",
thAlgo: "Solución Algorítmica",
priceTag: "Modelo SaaS B2B2C",
priceTitle: "Una inversión estratégica con ROI claro.",
mo1: "/mes",
mo2: "/mes",
priceCustom: "A medida",
baseF1: "1 Licencia Admin + 3 Vendedores",
baseF2: "Agente \"Backoffice Comercial\"",
baseF3: "Agente Predictivo Conductual",
proF1: "1 Licencia Admin + 9 Vendedores",
proF2: "Todo en Base +",
proF3: "Agente \"Sniper\" de Leads",
entF1: "Integración completa vía API",
entF2: "Soporte dedicado 24/7",
entF3: "Personalización de Agentes",
btnP1: "Elegir Plan",
btnP2: "Empezar ahora",
btnP3: "Contactar Ventas",
badgePop: "Más Popular",
statRetention: "Tasa de Retención",
statVs: "vs Media del Sector",
statChurn: "Rotación de Equipo",
statAi: "Predicho por IA",
statSystem: "Estado del Sistema",
sys1: "> Agente \"Sniper\"",
sys2: "> Escaneo de Cumplimiento",
sys3: "> Predicción de Rotación",
agentSidebarTitle: "Comando de Agentes",
agentSidebarSubtitle: "Red Neural de Linaris Activa",
agentGreeting: "Hola, soy tu asistente ejecutivo. ¿Cómo puedo ayudarte a liderar tu equipo hoy?",
footerPrivacy: "Política de Privacidad",
footerTerms: "Términos",
footerTagline: "Creado para el 10% de líderes de alto rendimiento."
}
};
function applyTranslations(lang) {
const t = translations[lang] || translations.en;
const map = [
['hero-tagline', 'heroTagline'],
['hero-title', 'heroTitle'],
['hero-subtitle', 'heroSubtitle'],
['hero-cta', 'heroCTA'],
['hero-overlay-title', 'heroOverlayTitle'],
['nav-solutions', 'navSolutions'],
['nav-agents', 'navAgents'],
['nav-price', 'navPrice'],
['btn-signin-text', 'authSignIn'],
['lang-text', 'langLabel'],
['modal-title', 'modalTitle'],
['modal-subtitle', 'modalSubtitle'],
['login-error', 'loginError'],
['lbl-user', 'lblUser'],
['lbl-pass', 'lblPass'],
['btn-login-submit', 'btnLoginSubmit'],
['txt-or', 'txtOr'],
['prob-tag', 'probTag'],
['prob-title', 'probTitle'],
['prob-desc', 'probDesc'],
['p1-title', 'p1Title'],
['p1-desc', 'p1Desc'],
['p2-title', 'p2Title'],
['p2-desc', 'p2Desc'],
['p3-title', 'p3Title'],
['p3-desc', 'p3Desc'],
['sol-tag', 'solTag'],
['sol-title', 'solTitle'],
['th-pain', 'thPain'],
['th-agent', 'thAgent'],
['th-algo', 'thAlgo'],
['price-tag', 'priceTag'],
['price-title', 'priceTitle'],
['mo1', 'mo1'],
['mo2', 'mo2'],
['price-custom', 'priceCustom'],
['base-f1', 'baseF1'],
['base-f2', 'baseF2'],
['base-f3', 'baseF3'],
['pro-f1', 'proF1'],
['pro-f2', 'proF2'],
['pro-f3', 'proF3'],
['ent-f1', 'entF1'],
['ent-f2', 'entF2'],
['ent-f3', 'entF3'],
['btn-p1', 'btnP1'],
['btn-p2', 'btnP2'],
['btn-p3', 'btnP3'],
['badge-pop', 'badgePop'],
['stat-retention', 'statRetention'],
['stat-vs', 'statVs'],
['stat-churn', 'statChurn'],
['stat-ai', 'statAi'],
['stat-system', 'statSystem'],
['sys-1', 'sys1'],
['sys-2', 'sys2'],
['sys-3', 'sys3'],
['agent-sidebar-title', 'agentSidebarTitle'],
['agent-sidebar-subtitle', 'agentSidebarSubtitle'],
['agent-greeting', 'agentGreeting'],
['footer-privacy', 'footerPrivacy'],
['footer-terms', 'footerTerms'],
['footer-tagline', 'footerTagline']
];
map.forEach(([id, key]) => {
const el = document.getElementById(id);
if (!el || !t[key]) return;
if (id === 'login-error') {
const span = el.querySelector('span');
if (span) span.textContent = t[key];
} else {
el.textContent = t[key];
}
});
}
function toggleLanguage() {
const current = localStorage.getItem('lang') || 'en';
const next = current === 'en' ? 'es' : 'en';
localStorage.setItem('lang', next);
applyTranslations(next);
}
window.addEventListener('DOMContentLoaded', function () {
const lang = localStorage.getItem('lang') || 'en';
applyTranslations(lang);
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
});



// Enhanced language handling with UI toggle support
window.setLanguage = function(lang) {
const current = localStorage.getItem('lang') || 'en';
if (current !== lang) {
localStorage.setItem('lang', lang);
applyTranslations(lang);
}
};
// Hook into existing applyTranslations to update UI
(function() {
const oldApply = window.applyTranslations;
window.applyTranslations = function(lang) {
if (oldApply) oldApply(lang);
const en = document.getElementById('lang-en-indicator');
const es = document.getElementById('lang-es-indicator');
if (!en || !es) return;
const activeClass = "px-3 py-1 rounded-full text-[0.65rem] font-bold bg-neutral-900 text-white shadow-sm transition-all";
const inactiveClass = "px-3 py-1 rounded-full text-[0.65rem] font-medium text-neutral-500 hover:text-neutral-900 transition-all";
if (lang === 'en') {
en.className = activeClass;
es.className = inactiveClass;
} else {
en.className = inactiveClass;
es.className = activeClass;
}
};
// Initialize toggle state on load
const saved = localStorage.getItem('lang') || 'en';
window.addEventListener('DOMContentLoaded', () => window.applyTranslations(saved));
})();



function toggleAgent() {
const sidebar = document.getElementById('agent-sidebar');
const arrow = document.getElementById('agent-arrow');
if (!sidebar || !arrow) return;
const current = sidebar.style.transform || window.getComputedStyle(sidebar).transform;
const isHidden = sidebar.style.transform.includes('calc(100% -') || current === 'none';
if (isHidden) {
sidebar.style.transform = 'translateX(0)';
arrow.classList.add('rotate-180');
} else {
sidebar.style.transform = 'translateX(calc(100% - 2.5rem))';
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

<div className="fixed flex sidebar-transition h-[70vh] z-50 top-[40%] -translate-y-1/2 right-0 translate-x-[calc(100%-2.5rem)] items-center md:h-[80vh] md:translate-x-[calc(100%-3rem)]" id="agent-sidebar" style={{transform: 'translateX(calc(100% - 2.5rem))'}}>
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
<svg className="lucide lucide-chevron-left transition-transform duration-500-[1.25rem] h-[1.25rem]" fill="none" height="1.25rem" id="agent-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="w-full max-w-md h-full bg-white border-l border-neutral-200 shadow-2xl p-4 flex flex-col relative z-10 rounded-bl-2xl md:w-[28rem] md:p-6 md:rounded-bl-3xl">
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white">
<svg className="lucide lucide-bot" fill="none" height="1.25rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="1.25rem" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
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
<div className="flex items-center gap-1 rounded-full bg-white/50 p-1 border border-neutral-300 backdrop-blur-sm z-50">
<button className="px-3 py-1 rounded-full text-[0.65rem] font-bold bg-neutral-900 text-white shadow-sm transition-all" id="lang-en-indicator" onclick="setLanguage('en')">
              EN
            </button>
<button className="px-3 py-1 rounded-full text-[0.65rem] font-medium text-neutral-500 hover:text-neutral-900 transition-all" id="lang-es-indicator" onclick="setLanguage('es')">
              ES
            </button>
</div>
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
                  Leadership for the Agentic AI Era
                </h1>
</div>
<div className="lg:col-span-5 group h-full mt-1 relative">
<div className="absolute inset-0 bg-neutral-900 rounded-2xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl h-[27.5rem] lg:h-[34.375rem] w-full">
<img alt="Futuristic AI Leadership" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50040b25-162c-4f33-9ec2-1548e670a5c3_1600w.jpg"/>
<div className="bg-gradient-to-t from-neutral-900/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 p-3 bg-neutral-950/50 backdrop-blur-md rounded-xl border border-white/10 text-white overflow-hidden shadow-xl ring-1 ring-white/5 group transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent animate-[scan-vertical_4s_linear_infinite] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-emerald-400 font-space" id="hero-overlay-title">
                              System Analysis
                            </span>
</div>
<div className="text-[0.6rem] text-neutral-400 font-mono tracking-wide">
                            NEURAL NETWORK:
                            <span className="text-white">ONLINE</span>
</div>
</div>
<div className="flex items-end gap-1">
<span className="text-xl font-oswald font-medium leading-none">
                            98.4
                          </span>
<span className="text-xs text-emerald-500 mb-1">%</span>
</div>
</div>
<div className="flex items-end justify-between h-8 gap-1 mb-2 px-1 border-b border-white/5 pb-2">
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_1.5s_ease-in-out_infinite]" style={{height: '40%'}}></div>
<div className="w-1 bg-emerald-500/80 rounded-full animate-[bar-height_2.2s_ease-in-out_infinite_0.1s]" style={{height: '70%'}}></div>
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_1.8s_ease-in-out_infinite_0.2s]" style={{height: '30%'}}></div>
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_2.5s_ease-in-out_infinite_0.3s]" style={{height: '80%'}}></div>
<div className="w-1 bg-emerald-500/80 rounded-full animate-[bar-height_2s_ease-in-out_infinite_0.4s]" style={{height: '50%'}}></div>
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_1.7s_ease-in-out_infinite_0.5s]" style={{height: '90%'}}></div>
<div className="w-1 bg-emerald-500/80 rounded-full animate-[bar-height_2.1s_ease-in-out_infinite_0.6s]" style={{height: '40%'}}></div>
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_1.9s_ease-in-out_infinite_0.7s]" style={{height: '60%'}}></div>
<div className="w-1 bg-emerald-500/80 rounded-full animate-[bar-height_2.3s_ease-in-out_infinite_0.8s]" style={{height: '75%'}}></div>
<div className="w-1 bg-white/20 rounded-full animate-[bar-height_1.6s_ease-in-out_infinite_0.9s]" style={{height: '30%'}}></div>
</div>
<div className="flex justify-between text-[0.55rem] uppercase tracking-wider text-neutral-500 font-mono">
<span>Latency: 12ms</span>
<span>Nodes: 4,021</span>
</div>
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
                  From Door-to-Door to 'Social Selling' &amp; Agentic AI Era
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
                  generating a social stigma of 'burning' contacts.
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
<div className="col-span-2 text-gray-50 border-neutral-800 border-b pt-4 pr-4 pb-4 pl-0" id="th-tier">
                    Tier
                  </div>
<div className="col-span-3 text-gray-50 border-neutral-800 border-b border-l pt-4 pr-4 pb-4" id="th-pain">
                    Pain Point
                  </div>
<div className="col-span-3 text-gray-50 border-neutral-800 border-b border-l px-4 py-4" id="th-agent">
                    LINARIS Agent
                  </div>
<div className="col-span-4 text-gray-50 border-neutral-800 border-b border-l pt-4 pl-4" id="th-desc">
                    Description
                  </div>
</div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-blue-300">Base</span>
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
<span className="font-space" id="r1-agent" style={{}}>
                    Behavioral Predictive Agent
                  </span>
</div>
<div className="col-span-1 md:pl-4 md:border-l text-sm font-normal text-neutral-400 border-neutral-800 border-b pt-6 pb-6 pl-4 md:col-span-4" id="r1-algo">
                  Boosts Retention: Proactively identifies and flags
                  high-potential distributors, enabling timely strategic support
                  to maximize their success.
                </div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-blue-300">Base</span>
</div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
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
<div className="col-span-1 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 pt-6 pb-6 md:col-span-4" id="r6-algo">
                  Empowers Team Knowledge: Acts as the central intelligence hub,
                  ensuring fast, precise information exchange for immediate team
                  success.
                </div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-blue-300">Base</span>
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
<div className="col-span-1 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6 md:col-span-4" id="r4-algo">
                  Maximizes Productivity: Automatically assigns and tracks key
                  tasks based on insights, optimizing team focus for maximum
                  impact.
                </div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-emerald-300">Pro</span>
</div>
<div className="col-span-1 md:col-span-3 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-4">
<span className="font-medium text-red-400" id="r5-pain">
                    Commercial Strategy and Campaigns
                  </span>
</div>
<div className="col-span-1 md:col-span-3 md:px-4 md:border-l flex gap-3 border-neutral-800 border-b pt-6 pb-6 gap-x-3 gap-y-3 items-center">
<svg className="" fill="none" height="2.875rem" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="2.875rem" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
<span className="font-space" id="r5-agent">
                    Market Research and Social Media Content Creation Agent
                  </span>
</div>
<div className="col-span-1 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6 md:col-span-4" id="r5-algo">
                  Drives Visibility: Executes market analysis and generates
                  strategic content, positioning your team as the industry
                  expert.
                </div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-emerald-300">Pro</span>
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
<div className="col-span-1 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6 md:col-span-4" id="r2-algo">
                  Optimizes Prospecting: Monitors social networks to find
                  high-quality leads with buying intent, turning outreach into
                  effective connections.
                </div>

<div className="col-span-1 md:col-span-2 border-neutral-800 border-b pt-10 pr-4 pb-6 pl-0">
<span className="font-medium text-emerald-300">Pro</span>
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
<div className="col-span-1 md:pl-4 md:border-l text-sm text-neutral-400 border-neutral-800 border-b pt-6 pb-6 md:col-span-4" id="r3-algo">
                  Guarantees Integrity: Audits content for 100% regulatory and
                  ethical compliance. It serves as your team’s "Shield of
                  Trust."
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
<div className="">
<div className="text-sm font-space uppercase tracking-widest text-neutral-500 mb-4">
                  Base Tier
                </div>
<h4 className="text-3xl font-medium font-oswald mb-2">
                  Churn Stopper
                </h4>
<div className="text-4xl font-semibold text-neutral-900 font-space mb-6">
                  199 €
                </div>
<ul className="space-y-4 text-base text-neutral-600 mb-8">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    1 Admin License + 3 Sales Representatives
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Behavioral Predictive Agent
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Commercial Backoffice Agent
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Project &amp; Community Manager Agent
                  </li>
</ul>
</div>
<button className="w-full py-4 border border-neutral-900 text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-colors" id="btn-p1">
                Select Plan
              </button>
</div>
<div className="flex flex-col transform md:-translate-y-4 overflow-hidden text-white bg-neutral-900 border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl justify-between">
<div className="absolute top-0 right-0 bg-white text-neutral-900 text-[0.6rem] font-semibold uppercase px-3 py-1" id="badge-pop">
                Most Popular
              </div>
<div className="">
<div className="text-sm font-space uppercase tracking-widest text-neutral-400 mb-4">
                  Pro Tier
                </div>
<h4 className="text-3xl font-medium font-oswald mb-2">
                  The Duplicator
                </h4>
<div className="text-4xl font-semibold text-white font-space mb-6">
                  299 €
                </div>
<ul className="space-y-4 text-base text-neutral-300 mb-8">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    1 Admin License + 3 Sales Representatives
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Base Tier Agents +
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Campaign Agent
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Sniper Agent
                  </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
                    Compliance Agent
                  </li>
</ul>
</div>
<button className="w-full py-4 bg-white text-neutral-900 font-medium uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors" id="btn-p2">
                Start Now
              </button>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all-300">
<div className="">
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
                    Full API Integration
                  </li>
<li className="flex items-start gap-3" id="ent-f2">
                    24/7 Dedicated Support
                  </li>
<li className="flex items-start gap-3" id="ent-f3">
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
<div className="w-full flex flex-col gap-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-neutral-800 pb-10">
<div className="max-w-xl space-y-4">
<div className="flex items-center gap-2 text-neutral-200">
<span className="uppercase text-xl font-oswald font-medium tracking-tight">
                    LINARIS
                    <span className="text-orange-400">.io</span>
</span>
<span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 font-space">
                    MLM Agentic OS
                  </span>
</div>
<p className="leading-relaxed text-sm text-neutral-400">
                  Leadership infrastructure for the Agentic AI era. LINARIS
                  equips top MLM leaders with autonomous agents to scale
                  retention, compliance, and growth.
                </p>
</div>
<div className="flex flex-col gap-4 text-sm">
<div className="flex flex-wrap gap-8 font-medium text-neutral-300">
<a className="hover:text-white transition-colors tracking-wide font-space text-xs uppercase" href="#">
                    SOLUTIONS
                  </a>
<a className="hover:text-white transition-colors tracking-wide font-space text-xs uppercase" href="#">
                    AGENTS
                  </a>
<a className="hover:text-white transition-colors tracking-wide font-space text-xs uppercase" href="#">
                    PRICING
                  </a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<div className="flex flex-wrap items-center gap-6">
<span>
                  ©
                  <span id="footer-year">2025</span>
                  LINARIS.io. All rights reserved.
                </span>
<a className="hover:text-neutral-200 transition-colors" href="#" id="footer-privacy">
                  Privacy Policy
                </a>
<a className="hover:text-neutral-200 transition-colors" href="#" id="footer-terms">
                  Terms
                </a>
</div>
<span className="text-right" id="footer-tagline">
                Built for the top 10% of leaders.
              </span>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
