import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="spline-container top-0 w-full h-screen absolute -z-10" data-alpha-mask="81" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 81%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 81%, transparent)'}}><iframe frameborder="0" height="100%" src="https://my.spline.design/orbscrolltriggerforhero-hMO0VADovcOmumillYrdBZ4X/" width="100%"></iframe></div>

<nav className="fixed z-50 w-full pt-6 pr-4 pl-4 top-0">
<div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/50">
<div className="flex items-center gap-2">
<div className="flex bg-gradient-to-tr to-indigo-500 w-8 h-8 rounded-lg items-center justify-center from-violet-600">
<i className="w-5 h-5 text-white" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">Intellio</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="transition-colors hover:text-white" href="#soluciones">Soluciones</a>
<a className="transition-colors hover:text-white" href="#metodologia">Enfoque</a>
<a className="transition-colors hover:text-white" href="#plataforma">Plataforma</a>
</div>
<button className="transition-all flex gap-2 text-xs font-medium rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center hover:bg-white/20 text-white bg-white/10" style={{position: 'relative', -BorderGradient: 'linear-gradient(0deg, rgba(192, 132, 252, 1), rgba(75, 85, 99, 1))', -BorderRadiusBefore: '9999px'}}>
                Agendar Demo
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<section className="overflow-hidden pt-20 pb-20 relative">

<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hero-glow pointer-events-none blur-3xl"></div>
<div className="z-10 max-w-6xl mt-20 mr-auto ml-auto pr-0 pl-0 relative">
<div className="text-center max-w-4xl mr-auto mb-16 ml-auto">
<div className="inline-flex gap-2 text-xs font-medium bg-violet-500/10 border-violet-500/30 border rounded-full mb-5 pt-1 pr-3 pb-1 pl-3 items-center text-violet-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-violet-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Inteligencia en Operaciones 2026
                </div>
<h1 className="leading-[1.1] md:text-6xl md:bg-clip-text md:text-transparent text-5xl font-semibold tracking-tighter bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] mt-0 mb-6 from-white to-white/50">Deje de Automatizar Tareas<br/> <span className="font-semibold italic text-[#7c63b6]">Empiece a Orquestar Resultados</span></h1>
<p className="md:text-xl leading-relaxed text-lg max-w-2xl mr-auto mb-10 ml-auto text-slate-400">
                    Transformamos sus operaciones fragmentadas en ecosistemas donde agentes de IA, sistemas legacy y equipos humanos colaboran para escalar sin fricción.
                </p>
<div className="flex flex-col sm:flex-row mb-20 gap-x-4 gap-y-4 items-center justify-center">
<button className="bg-gradient-to-b from-violet-500 text-base font-medium px-8 py-3.5 rounded-full shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] border-t transition-all flex items-center gap-2 group to-violet-700 hover:to-violet-600 text-white border-white/20">
<i className="w-4 h-4" data-lucide="calendar"></i>
                        Agendar Diagnóstico
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
<button className="transition-all flex gap-2 text-base font-medium border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center hover:text-white hover:bg-white/5 text-slate-300 border-white/10">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Ver Demo Interactiva
                    </button>
</div>

<div className="group transform w-full max-w-5xl mr-auto ml-auto relative scale-105" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}>

<div className="glass-panel overflow-hidden transform group-hover:rotate-x-2 transition-transform duration-700 ease-out shadow-violet-900/20 bg-[#0B0C15]/80 border-white/10 border rounded-xl shadow-2xl rotate-x-6">


<div className="flex gap-2 bg-white/5 h-10 border-white/5 border-b pr-4 pl-4 gap-x-2 gap-y-2 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex text-xs text-slate-500 font-mono ml-4 gap-x-2 gap-y-2 items-center">
<i className="w-3 h-3" data-lucide="lock"></i>
        intellio.platform/orchestrator
      </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6">

<div className="col-span-1 hidden md:block border-r pr-6 space-y-4 border-white/5">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Flujos Activos</div>
<div className="flex items-center justify-between p-2 rounded bg-violet-500/10 border border-violet-500/20">
<div className="flex items-center gap-2 text-sm text-violet-200">
<i className="w-4 h-4" data-lucide="activity"></i>
            Gestión Devoluciones
          </div>
<span className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] bg-green-400"></span>
</div>
<div className="flex items-center gap-2 text-sm p-2 text-slate-400">
<i className="w-4 h-4" data-lucide="users"></i>
          Onboarding HR
        </div>
<div className="flex items-center gap-2 text-sm p-2 text-slate-400">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
          Recuperación Carrito
        </div>
</div>

<div className="col-span-2 h-[300px] relative">

<svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
<path className="animate-[dash_20s_linear_infinite]" d="M100,60 C100,120 280,40 280,100" fill="none" stroke="rgba(139, 92, 246, 0.4)" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M280,150 C280,180 150,180 150,220" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2">
</path>
</svg>

<div className="absolute top-4 left-4 bg-[#1A1B26] border p-3 rounded-lg shadow-lg w-48 flex items-center gap-3 border-white/10">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="webhook"></i>
</div>
<div className="">
<div className="text-xs font-medium text-slate-300">Ticket Recibido</div>
<div className="text-[10px] text-slate-500">Zendesk / ERP</div>
</div>
</div>

<div className="absolute top-24 left-1/2 -translate-x-1/2 bg-[#1A1B26] border border-violet-500/30 p-4 rounded-xl shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] w-56">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-violet-500 flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="bot"></i>
</div>
<span className="text-xs font-medium text-white">Agente Resolución</span>
</div>
<i className="w-3 h-3 animate-pulse text-violet-400" data-lucide="sparkles"></i>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-3/4 rounded bg-white/10"></div>
<div className="h-1.5 w-1/2 rounded bg-white/10"></div>
</div>
<div className="mt-3 flex gap-2">
<div className="px-2 py-0.5 bg-violet-500/10 rounded text-[10px] border border-violet-500/20 text-violet-300">
              Thinking...</div>
</div>
</div>

<div className="absolute bottom-4 left-20 bg-[#1A1B26] border p-3 rounded-lg shadow-lg w-48 flex items-center gap-3 opacity-60 border-white/10">
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div className="">
<div className="text-xs font-medium text-slate-300">Reembolso Aprobado</div>
<div className="text-[10px] text-slate-500">Stripe API</div>
</div>
</div>

<div className="-right-4 text-[9px] z-20 font-mono w-48 border rounded-lg pt-3 pr-3 pb-3 pl-3 absolute top-10 shadow-2xl backdrop-blur-md rotate-3 text-green-400 bg-black/90 border-white/20">
<div className="text-slate-500 mb-1">// Reasoning Log</div>
          &gt; Analizando sentimiento...<br/>
                                    &gt; Cliente VIP detectado.<br/>
                                    &gt; Política: Aprobación auto.<br/>
<span className="animate-pulse">_</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-t from-[#03040B] to-transparent w-full h-24 z-20 absolute bottom-0 left-0"></div>
</section>

<section className="py-12 border-b relative z-10 border-white/5">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 mx-auto md:mx-0 bg-white/5 border-white/10">
<i className="w-5 h-5 text-violet-400" data-lucide="brain-circuit"></i>
</div>
<h3 className="font-medium text-lg text-white">Agentes, no solo Bots</h3>
<p className="text-sm leading-relaxed text-slate-400">Sistemas que razonan y resuelven. Reduzca la intervención humana solo a excepciones estratégicas.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 mx-auto md:mx-0 bg-white/5 border-white/10">
<i className="w-5 h-5 text-violet-400" data-lucide="shield-check"></i>
</div>
<h3 className="font-medium text-lg text-white">Gobernanza Total</h3>
<p className="text-sm leading-relaxed text-slate-400">Elimine la "Shadow AI". Integraciones seguras, auditables y con cumplimiento SOC2 ready.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border mb-2 mx-auto md:mx-0 bg-white/5 border-white/10">
<i className="w-5 h-5 text-violet-400" data-lucide="trending-up"></i>
</div>
<h3 className="font-medium text-lg text-white">ROI Predictivo</h3>
<p className="text-sm leading-relaxed text-slate-400">Resiliencia operativa y crecimiento. No diseñamos para ahorrar horas, sino para escalar ingresos.</p>
</div>
</div>
</section>

<section className="py-24 relative" id="soluciones">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-white">Arquitectura de Soluciones</h2>
<p className="max-w-2xl text-lg text-slate-400">Cuatro pilares para la transformación operativa de extremo a extremo.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-3xl group-hover:bg-violet-500/20 transition-colors"></div>
<i className="w-8 h-8 mb-6 text-violet-400" data-lucide="message-square-heart"></i>
<h3 className="text-xl font-medium mb-3 text-white">Agentes de IA y CX</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400">
                        Hiper-personalización y resolución autónoma. Agentes que detectan emociones y gestionan el ciclo de vida completo del cliente.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 border-t pt-4 border-white/5">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Análisis de sentimiento real-time</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Human-in-the-loop crítico</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl group-hover:bg-green-500/10 transition-colors"></div>
<i className="w-8 h-8 mb-6 text-green-400" data-lucide="shopping-bag"></i>
<h3 className="text-xl font-medium mb-3 text-white">Comercio Conversacional</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400">
                        WhatsApp como canal de ventas completo. Recuperación de carritos y catálogos in-chat optimizados para nuevas tarifas Meta.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 border-t pt-4 border-white/5">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Estrategias Waterfall (ROI Max)</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Pagos nativos en chat</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
<i className="w-8 h-8 mb-6 text-blue-400" data-lucide="workflow"></i>
<h3 className="text-xl font-medium mb-3 text-white">Hiperautomatización Back-Office</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400">
                        Conectamos lo desconectado. Orquestación de flujos de trabajo entre ERPs legacy, CRMs y nómina usando IA generativa.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 border-t pt-4 border-white/5">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Automatización cuentas por pagar</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Onboarding empleados zero-touch</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
<i className="w-8 h-8 mb-6 text-orange-400" data-lucide="bar-chart-2"></i>
<h3 className="text-xl font-medium mb-3 text-white">Dashboards Predictivos</h3>
<p className="text-sm mb-6 leading-relaxed text-slate-400">
                        Adiós a reportes estáticos. Sistemas donde usted "conversa" con sus datos para obtener predicciones, no historia.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 border-t pt-4 border-white/5">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Insights proactivos</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 pt-2">
<i className="w-3 h-3 text-violet-400" data-lucide="check"></i>
<span>Analítica interactiva</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl font-semibold mb-6 tracking-tight text-white">Construido para el COO del futuro.</h2>
<p className="mb-8 leading-relaxed text-slate-400">
                        La mayoría de los proyectos de IA fallan porque automatizan procesos rotos. En Intellio, primero optimizamos, luego orquestamos. Actuamos como el "tejido conectivo" seguro entre su stack actual y la nueva era de inteligencia.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex-shrink-0 flex items-center justify-center border border-violet-500/20">
<i className="w-5 h-5 text-violet-400" data-lucide="layers"></i>
</div>
<div>
<h4 className="font-medium mb-1 text-white">Orquestación Agnóstica</h4>
<p className="text-sm text-slate-500">Integramos Salesforce, SAP, HubSpot con OpenAI o Anthropic. No le obligamos a cambiar de herramientas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex-shrink-0 flex items-center justify-center border border-violet-500/20">
<i className="w-5 h-5 text-violet-400" data-lucide="lock-shield"></i>
</div>
<div>
<h4 className="font-medium mb-1 text-white">Seguridad Empresarial</h4>
<p className="text-sm text-slate-500">Protección contra alucinaciones y fugas de datos. Estándares GDPR y SOC2 ready desde el día uno.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">

<div className="glass-panel p-1 rounded-xl">
<div className="bg-[#0B0C15] rounded-lg p-6 space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-white/5">
<span className="text-xs font-semibold text-slate-500 uppercase">Status Monitor</span>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>

<div className="flex items-center justify-between group p-2 rounded transition-colors cursor-default hover:bg-white/5">
<div className="flex items-center gap-3">
<i className="text-yellow-500 w-4 h-4" data-lucide="alert-triangle"></i>
<span className="text-sm text-slate-300">Pico de Demanda Detectado</span>
</div>
<span className="text-xs font-mono text-violet-400">Auto-scaling...</span>
</div>

<div className="flex items-center justify-between group p-2 rounded transition-colors cursor-default hover:bg-white/5">
<div className="flex items-center gap-3">
<i className="text-blue-500 w-4 h-4" data-lucide="database"></i>
<span className="text-sm text-slate-300">Sincronización ERP &lt;&gt; CRM</span>
</div>
<span className="text-xs font-mono text-green-400">Completado 0.4s</span>
</div>

<div className="flex items-center justify-between group p-2 rounded transition-colors cursor-default hover:bg-white/5">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-red-400" data-lucide="shield-alert"></i>
<span className="text-sm text-slate-300">Intento Shadow AI (ChatGPT)</span>
</div>
<span className="text-xs font-mono text-red-400">Bloqueado</span>
</div>

<div className="h-24 mt-4 flex items-end gap-1 px-2 pt-4 border-t opacity-50 border-white/5">
<div className="w-full bg-violet-500/20 h-[40%] rounded-t"></div>
<div className="w-full bg-violet-500/30 h-[60%] rounded-t"></div>
<div className="w-full bg-violet-500/50 h-[85%] rounded-t"></div>
<div className="w-full bg-violet-500 h-[100%] rounded-t relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] px-1.5 rounded text-white bg-violet-600">+240%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] hero-glow blur-[100px] opacity-40 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-white">¿Listo para salir del "Purgatorio de los Pilotos"?</h2>
<p className="text-lg mb-10 max-w-xl mx-auto text-slate-400">
                El 40% de los proyectos de IA fallan por falta de integración. Descubra dónde su operación pierde dinero hoy.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="text-base font-medium px-8 py-4 rounded-full transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] bg-white text-black hover:bg-slate-200">
                    Agendar Consultoría de Diagnóstico
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<span className="text-xs text-slate-500 mt-2">Sin compromiso. Auditoría inicial gratuita para empresas &gt;$10M ARR.</span>
</div>
</div>
</section>

<footer className="border-t bg-[#03040B] pt-16 pb-8 border-white/10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-gradient-to-tr to-indigo-500 rounded flex items-center justify-center from-violet-600">
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</div>
<span className="font-medium text-white">Intellio</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">Orquestación de operaciones y sistemas multi-agente para la empresa moderna.</p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Producto</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="transition-colors hover:text-violet-400" href="#">Agentes CX</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">WhatsApp API</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Back-Office</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Seguridad</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Compañía</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="transition-colors hover:text-violet-400" href="#">Sobre Nosotros</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Blog</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Carreras</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-white">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="transition-colors hover:text-violet-400" href="#">Privacidad</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">Términos</a></li>
<li><a className="transition-colors hover:text-violet-400" href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-xs text-slate-600">© 2026 Intellio Operations Inc. Todos los derechos reservados.</p>
<div className="flex gap-4">
<i className="w-4 h-4 cursor-pointer transition-colors text-slate-600 hover:text-white" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer transition-colors text-slate-600 hover:text-white" data-lucide="linkedin"></i>
<i className="w-4 h-4 cursor-pointer transition-colors text-slate-600 hover:text-white" data-lucide="github"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
