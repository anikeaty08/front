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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // View Navigation Logic
      function switchView(viewId, btnElement) {
          document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden-view'));
          
          const targetView = document.getElementById('view-' + viewId);
          if(targetView) targetView.classList.remove('hidden-view');

          // Handle Sidebar state
          if(btnElement) {
              document.querySelectorAll('nav button').forEach(btn => {
                  btn.classList.remove('active-nav', 'bg-slate-50', 'text-slate-900', 'ring-1', 'ring-slate-200/50');
                  btn.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-slate-50');
                  const icon = btn.querySelector('iconify-icon');
                  if(icon) icon.classList.remove('text-indigo-600');
              });
              btnElement.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-slate-50');
              btnElement.classList.add('active-nav', 'bg-slate-50', 'text-slate-900', 'ring-1', 'ring-slate-200/50');
              const activeIcon = btnElement.querySelector('iconify-icon');
              if(activeIcon) activeIcon.classList.add('text-indigo-600');
          }

          const titles = {
              'dashboard': 'Dashboard',
              'requisiciones': 'Requisiciones',
              'candidatos': 'Candidatos',
              'req-detail': 'Detalle de Requisición'
          };
          document.getElementById('page-title').innerText = titles[viewId] || 'BIA';
      }

      // Specific Tab Logic for Req Detail View
      function switchTab(tabName) {
          // Hide all tab contents
          ['req-details', 'req-linkedin', 'req-candidates', 'req-whatsapp'].forEach(id => {
             document.getElementById(`tab-${id}`).classList.add('hidden');
          });

          // Show selected
          document.getElementById(`tab-${tabName}`).classList.remove('hidden');

          // Update Tab Styling
          document.querySelectorAll('.req-tab-btn').forEach(btn => {
              btn.classList.remove('text-indigo-600');
              btn.classList.add('text-slate-500');
              const indicator = btn.querySelector('.tab-indicator');
              if(indicator) {
                  indicator.classList.remove('bg-indigo-600');
                  indicator.classList.add('bg-transparent');
              }
          });

          // Target current button styling
          const currentBtn = event.currentTarget;
          currentBtn.classList.remove('text-slate-500');
          currentBtn.classList.add('text-indigo-600');
          const currentIndicator = currentBtn.querySelector('.tab-indicator');
          if(currentIndicator) {
              currentIndicator.classList.remove('bg-transparent');
              currentIndicator.classList.add('bg-indigo-600');
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
      

<aside className="w-72 bg-white border-r border-slate-100 flex-shrink-0 flex flex-col z-30 h-full relative">
<div className="h-16 flex items-center px-6 border-b border-slate-50">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">
            BIA <span className="text-slate-400 font-normal">HR</span>
</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-0.5">
<div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Principal</div>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all" onclick="switchView('dashboard', this)">
<iconify-icon className="group-hover:text-indigo-600 transition-colors" icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Dashboard
        </button>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all" onclick="switchView('requisiciones', this)">
<iconify-icon className="group-hover:text-indigo-600 transition-colors" icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Requisiciones
        </button>

<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium active-nav rounded-md ring-1 ring-slate-200/50 transition-all" onclick="switchView('req-detail', this)">
<iconify-icon className="text-indigo-600" icon="solar:folder-open-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Requisición Activa
        </button>
<button className="w-full group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all" onclick="switchView('candidatos', this)">
<iconify-icon className="group-hover:text-indigo-600 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
          Candidatos
        </button>
</nav>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 ring-1 ring-white shadow-sm overflow-hidden">
<img alt="Admin" className="w-full h-full object-cover opacity-90" src="https://ui-avatars.com/api/?name=Carlos+M&amp;background=random"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Carlos Méndez</p>
<p className="text-xs text-slate-500 truncate">Recruiter Admin</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-white">
<div className="absolute inset-0 z-0 grid-bg pointer-events-none opacity-60"></div>
<header className="h-16 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-8 flex-shrink-0">
<div className="flex items-center gap-4 text-sm text-slate-500">
<span className="text-slate-900 font-medium">BIA Corporativo</span>
<span className="text-slate-300">/</span>
<span id="page-title">Detalle de Requisición</span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 flex items-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<input className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md w-64 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-white/50" placeholder="Buscar..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto flex flex-col z-10 view-section animate-enter" id="view-req-detail">

<div className="bg-white border-b border-slate-200 px-8 pt-10 pb-8 flex-shrink-0">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Senior UX/UI Designer</h1>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Activa
                  </span>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                    REQ-2023-142
                  </span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-2xl leading-relaxed">
                  Buscamos un diseñador de producto con experiencia para liderar la renovación de nuestra plataforma core. Debe tener fuerte enfoque en sistemas de diseño y accesibilidad.
                </p>

<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Ciudad de México (Híbrido)</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="18"></iconify-icon>
<span>Producto &amp; Diseño</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:wallet-linear" width="18"></iconify-icon>
<span>$3,500 - $4,500 USD</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-slate-400" icon="solar:calendar-date-linear" width="18"></iconify-icon>
<span>Creada: 12 Oct, 2023</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="px-4 py-2 border border-slate-200 bg-white rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                  Editar Vacante
                </button>
<button className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:pause-circle-linear" width="18"></iconify-icon>
                  Pausar
                </button>
</div>
</div>
</div>
</div>

<div className="bg-white px-8 border-b border-slate-200 sticky top-0 z-10 flex-shrink-0">
<div className="max-w-6xl mx-auto flex gap-8">
<button className="req-tab-btn active-tab relative py-4 text-sm font-medium text-indigo-600 transition-colors flex items-center gap-2" onclick="switchTab('req-details')">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
              1. Detalles
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full tab-indicator"></div>
</button>
<button className="req-tab-btn relative py-4 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" onclick="switchTab('req-linkedin')">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
              2. LinkedIn
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent rounded-t-full tab-indicator"></div>
</button>
<button className="req-tab-btn relative py-4 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" onclick="switchTab('req-candidates')">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
              3. Candidatos
              <span className="ml-1 bg-indigo-50 text-indigo-600 py-0.5 px-2 rounded-full text-[10px] font-bold">12</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent rounded-t-full tab-indicator"></div>
</button>
<button className="req-tab-btn relative py-4 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2" onclick="switchTab('req-whatsapp')">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
              4. WhatsApp AI
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent rounded-t-full tab-indicator"></div>
</button>
</div>
</div>

<div className="flex-1 bg-slate-50/50 p-8 overflow-y-auto">
<div className="max-w-6xl mx-auto h-full">

<div className="space-y-6 animate-enter" id="tab-req-details">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
                      Requisitos del Perfil
                    </h3>
<div className="grid grid-cols-2 gap-6 mb-6">
<div>
<span className="block text-xs text-slate-500 mb-1">Experiencia Mínima</span>
<span className="text-sm font-medium text-slate-900">4 a 6 años</span>
</div>
<div>
<span className="block text-xs text-slate-500 mb-1">Nivel Educativo</span>
<span className="text-sm font-medium text-slate-900">Licenciatura o afín</span>
</div>
<div>
<span className="block text-xs text-slate-500 mb-1">Inglés</span>
<span className="text-sm font-medium text-slate-900">Avanzado (C1)</span>
</div>
<div>
<span className="block text-xs text-slate-500 mb-1">Tipo de Contrato</span>
<span className="text-sm font-medium text-slate-900">Tiempo Completo (Indefinido)</span>
</div>
</div>
<div>
<span className="block text-xs text-slate-500 mb-2">Habilidades Clave</span>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">Figma</span>
<span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">Design Systems</span>
<span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">User Research</span>
<span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">Prototipado</span>
<span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">Agile</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-3">Justificación de la Vacante</h3>
<p className="text-sm text-slate-600 leading-relaxed">
                      La posición surge como una necesidad estratégica para liderar el rediseño del portal de clientes (Q1 2024). Actualmente el equipo de producto no cuenta con un perfil Senior dedicado exclusivamente a estandarizar la librería de componentes, lo que está generando inconsistencias visuales y deuda técnica en el frontend.
                    </p>
</div>
</div>

<div className="space-y-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-3">Estado de Aprobación</h3>
<div className="space-y-5">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Manager Directo</p>
<p className="text-xs text-slate-500">Aprobado por Laura G. (12 Oct)</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Finanzas</p>
<p className="text-xs text-slate-500">Presupuesto OK (13 Oct)</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Director HR</p>
<p className="text-xs text-slate-500">Publicación Autorizada (13 Oct)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-enter h-full" id="tab-req-linkedin">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

<div className="space-y-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#0077b5]/10 rounded-lg flex items-center justify-center text-[#0077b5]">
<iconify-icon icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Sincronización LinkedIn</h3>
<p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Publicado y Activo
                          </p>
</div>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 z-10" id="toggle-linkedin" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-linkedin"></label>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="block text-xs text-slate-500 mb-1">Visualizaciones</span>
<span className="text-xl font-semibold text-slate-900">1,248</span>
</div>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="block text-xs text-slate-500 mb-1">Clics a Aplicar</span>
<span className="text-xl font-semibold text-slate-900">45</span>
</div>
</div>
</div>
<div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-10">
<iconify-icon icon="solar:magic-stick-3-linear" width="120"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-indigo-900 mb-2 flex items-center gap-2 relative z-10">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                      Copy Generado por IA
                    </h3>
<p className="text-xs text-indigo-700/80 mb-4 relative z-10">El texto de la publicación fue optimizado automáticamente para mayor alcance basándose en la descripción del puesto.</p>
<button className="text-xs font-medium bg-white text-indigo-600 px-3 py-1.5 rounded-md shadow-sm border border-indigo-200 hover:bg-indigo-50 transition-colors relative z-10">
                      Regenerar Copy
                    </button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[500px]">
<div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">Vista Previa (LinkedIn Feed)</span>
<iconify-icon className="text-slate-400" icon="solar:maximize-linear" width="16"></iconify-icon>
</div>
<div className="p-5 flex-1 overflow-y-auto">

<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-lg">
                        B
                      </div>
<div>
<h4 className="text-sm font-semibold text-slate-900">BIA Tech Corporation</h4>
<p className="text-xs text-slate-500">25,401 seguidores</p>
<p className="text-[10px] text-slate-400 flex items-center gap-1">2 d • <iconify-icon icon="solar:global-linear" width="10"></iconify-icon></p>
</div>
</div>

<div className="text-sm text-slate-800 space-y-4 mb-4">
<p>🚀 ¡Estamos buscando a nuestro próximo <span className="font-semibold">Senior UX/UI Designer</span> para unirse al equipo de BIA en Ciudad de México!</p>
<p>Si te apasiona crear experiencias digitales memorables, liderar sistemas de diseño y trabajar en un entorno ágil e innovador, esta oportunidad es para ti.</p>
<p>¿Qué ofrecemos?<br/>✨ Modalidad Híbrida<br/>✨ Paquete de compensación competitivo<br/>✨ Oportunidad de impactar productos usados por millones</p>
<p>Aplica directamente en el enlace de abajo o etiqueta a alguien que le pueda interesar. 👇</p>
<p className="text-indigo-600">#UXDesign #Hiring #TechJobs #UI #Mexico</p>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:bg-slate-50 transition-colors">
<div className="h-32 bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:gallery-wide-linear" width="40"></iconify-icon>
</div>
<div className="p-4 bg-white border-t border-slate-200">
<p className="text-xs text-slate-500 mb-1">careers.bia.com</p>
<h5 className="text-sm font-semibold text-slate-900">Senior UX/UI Designer - BIA Careers</h5>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 animate-enter" id="tab-req-candidates">
<div className="flex items-center justify-between mb-4">
<div className="flex gap-2">
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">Todos (12)</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">Nuevos (5)</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">Entrevista (2)</span>
</div>
<button className="flex items-center gap-2 text-sm text-indigo-600 font-medium hover:text-indigo-700">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
                  Filtros
                </button>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50/80 border-b border-slate-100">
<tr>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Candidato</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Match IA</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Origen</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Acción</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full border border-slate-100" src="https://ui-avatars.com/api/?name=Mariana+R&amp;background=c7d2fe&amp;color=3730a3"/>
<div>
<div className="font-medium text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">Mariana Ríos</div>
<div className="text-xs text-slate-500">Hace 2 horas</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-emerald-500 w-[94%] h-full rounded-full"></div></div>
<span className="text-xs font-semibold text-emerald-600">94%</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">LinkedIn</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-xs font-medium">Nuevo</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full border border-slate-100" src="https://ui-avatars.com/api/?name=Fernando+C&amp;background=fde68a&amp;color=92400e"/>
<div>
<div className="font-medium text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">Fernando Castro</div>
<div className="text-xs text-slate-500">Ayer</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-emerald-500 w-[88%] h-full rounded-full"></div></div>
<span className="text-xs font-semibold text-emerald-600">88%</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">Web Careers</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md text-xs font-medium">Screening WhatsApp</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full border border-slate-100 bg-slate-100 flex items-center justify-center text-slate-500 font-medium text-xs">AL</div>
<div>
<div className="font-medium text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">Ana López</div>
<div className="text-xs text-slate-500">Hace 2 días</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="bg-amber-400 w-[65%] h-full rounded-full"></div></div>
<span className="text-xs font-semibold text-amber-600">65%</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600">Referido</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-md text-xs font-medium">Entrevista</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden space-y-6 animate-enter h-full" id="tab-req-whatsapp">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">

<div className="space-y-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center text-[#25D366]">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Agente Evaluador IA (WhatsApp)</h3>
<p className="text-xs text-slate-500">Contacta candidatos automáticamente.</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300 z-10" id="toggle-wa" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle-wa"></label>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-3">Preguntas de Pre-Filtro Configuradas</h3>
<div className="space-y-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700">
<span className="text-xs font-semibold text-indigo-600 block mb-1">Pregunta 1 (Experiencia)</span>
                        "¿Cuántos años de experiencia tienes liderando la creación o mantenimiento de Sistemas de Diseño?"
                      </div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700">
<span className="text-xs font-semibold text-indigo-600 block mb-1">Pregunta 2 (Herramientas)</span>
                        "¿Cuál es tu nivel de dominio en Figma utilizando variables y autolayout avanzado?"
                      </div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700">
<span className="text-xs font-semibold text-indigo-600 block mb-1">Pregunta 3 (Disponibilidad)</span>
                        "¿Estarías dispuesto/a a trabajar en formato híbrido acudiendo 2 días a la oficina en CDMX?"
                      </div>
<button className="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-sm hover:border-indigo-500 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Agregar Pregunta
                      </button>
</div>
</div>
</div>

<div className="flex justify-center">
<div className="w-[320px] bg-slate-50 border border-slate-200 rounded-[2.5rem] p-3 shadow-xl relative overflow-hidden h-[600px] flex flex-col">

<div className="bg-[#075e54] rounded-t-3xl pt-8 pb-3 px-4 text-white flex items-center gap-3 shrink-0 shadow-md relative z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">BIA</div>
<div>
<p className="text-[13px] font-semibold">BIA Recruiting Bot</p>
<p className="text-[10px] text-white/80">en línea</p>
</div>
</div>

<div className="flex-1 bg-[#efeae2] p-4 overflow-y-auto space-y-4 text-[13px] leading-snug relative">
<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/always-grey.png\')'}}></div>
<div className="flex justify-start">
<div className="bg-white p-3 rounded-tr-xl rounded-b-xl max-w-[85%] shadow-sm relative text-slate-800">
                          ¡Hola Fernando! 👋 Soy el asistente virtual de BIA. Hemos recibido tu aplicación para la vacante de <b>Senior UX/UI Designer</b>. Para avanzar, me gustaría hacerte 3 breves preguntas. ¿Estás listo?
                          <span className="text-[9px] text-slate-400 absolute right-2 bottom-1">10:42</span>
</div>
</div>
<div className="flex justify-end">
<div className="bg-[#dcf8c6] p-3 rounded-tl-xl rounded-b-xl max-w-[85%] shadow-sm relative text-slate-800">
                          Hola! Sí, claro, adelante.
                          <span className="text-[9px] text-emerald-600 absolute right-2 bottom-1 flex items-center gap-0.5">10:45 <iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></span>
</div>
</div>
<div className="flex justify-start">
<div className="bg-white p-3 rounded-tr-xl rounded-b-xl max-w-[85%] shadow-sm relative text-slate-800">
                          Excelente. Primero: ¿Cuántos años de experiencia tienes liderando la creación o mantenimiento de Sistemas de Diseño?
                          <span className="text-[9px] text-slate-400 absolute right-2 bottom-1">10:45</span>
</div>
</div>

<div className="flex justify-end">
<div className="bg-[#dcf8c6] px-3 py-2 rounded-tl-xl rounded-b-xl shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-emerald-600/50 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
<span className="w-1.5 h-1.5 bg-emerald-600/50 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
<span className="w-1.5 h-1.5 bg-emerald-600/50 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
</div>
</div>
</div>

<div className="bg-[#f0f0f0] rounded-b-3xl p-2 shrink-0 flex gap-2 items-center">
<div className="flex-1 bg-white rounded-full px-4 py-2.5 text-[13px] text-slate-400 shadow-sm flex items-center justify-between">
                        Escribe un mensaje...
                        <iconify-icon className="text-slate-400" icon="solar:camera-linear" width="18"></iconify-icon>
</div>
<div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:microphone-2-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden-view p-8" id="view-dashboard">...</div>
<div className="hidden-view p-8" id="view-requisiciones">...</div>
<div className="hidden-view p-8" id="view-candidatos">...</div>
</main>


    </>
  );
}
