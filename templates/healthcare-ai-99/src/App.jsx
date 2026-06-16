import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// In-view animation trigger
(function () {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});
})();



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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-violet-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vh] bg-emerald-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
<span className="iconify text-white" data-icon="lucide:bot" data-width="20"></span>
</div>
<span className="text-lg font-manrope font-semibold text-white tracking-tight">Power Agents</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Plataforma</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Para Clínicas</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Planos</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors" href="#">Entrar</a>
<button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all hover:bg-violet-50 hover:text-violet-900 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
<span className="text-xs font-semibold tracking-wide">Falar com Consultor</span>
<span className="iconify ml-2 transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-green-200 tracking-wide uppercase">Atendimento 24h no WhatsApp</span>
</div>
<h1 className="animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white font-manrope mb-6 leading-[1.1]">
                Sua clínica no piloto <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-white">automático com IA</span>
</h1>
<p className="animate-on-scroll text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                O assistente inteligente que tira dúvidas, agenda consultas e responde pacientes no WhatsApp em segundos. Humanizado e integrado à sua agenda.
            </p>
<div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_30px_rgba(109,40,217,0.6)] flex items-center gap-2">
<span className="iconify" data-icon="logos:whatsapp-icon" data-width="16"></span>
                    Testar no WhatsApp
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all backdrop-blur-sm flex items-center gap-2">
<span className="iconify" data-icon="lucide:calendar-check-2" data-width="16"></span>
                    Agendar Demo
                </button>
</div>

<div className="animate-on-scroll relative max-w-5xl mx-auto mt-12 group perspective-distant">

<div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-green-600 to-indigo-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>

<div className="relative bg-[#0A0A0C] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:rotate-x-2">

<div className="h-10 border-b border-white/5 bg-[#0F0F12] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto flex items-center gap-4 text-[10px] text-gray-500 font-mono">
<span>bot_clinica_v2.1 running</span>
<span className="text-green-500">● Online</span>
</div>
</div>

<div className="p-8 md:p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 to-transparent">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

<div className="relative z-10 grid grid-cols-3 gap-8 md:gap-16 items-center w-full max-w-4xl">

<div className="flex flex-col gap-4">
<div className="bg-[#151518] p-4 rounded-xl border border-white/10 shadow-lg relative group/node hover:border-green-500/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<span className="iconify" data-icon="ic:baseline-whatsapp" data-width="20"></span>
</div>
<div>
<div className="text-xs text-gray-400">Paciente</div>
<div className="text-sm text-white font-medium">Nova Mensagem</div>
</div>
</div>

<div className="absolute -right-16 top-1/2 w-16 h-[1px] bg-gradient-to-r from-green-500/50 to-violet-500/50 hidden md:block"></div>
</div>
<div className="bg-[#151518] p-4 rounded-xl border border-white/10 shadow-lg relative group/node hover:border-green-500/50 transition-colors mt-4 opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</div>
<div>
<div className="text-xs text-gray-400">Paciente</div>
<div className="text-sm text-white font-medium">Direct Message</div>
</div>
</div>

<div className="absolute -right-8 top-1/2 w-4 h-[1px] bg-white/10 hidden md:block"></div>
<div className="absolute -right-16 -top-[3.5rem] w-[1px] h-28 bg-white/10 hidden md:block rotate-12 origin-bottom"></div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-violet-500/20 blur-xl rounded-full animate-pulse"></div>
<div className="bg-[#1A1A20] p-6 rounded-2xl border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-4 shadow-inner">
<span className="iconify text-white" data-icon="lucide:brain-circuit" data-width="32"></span>
</div>
<h3 className="text-white font-semibold mb-1">IA da Clínica</h3>
<div className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 font-mono">Verificando Agenda...</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<rect fill="none" height="100" rx="16" stroke="url(#gradient-border)" strokeWidth="0.5" width="100" x="0" y="0"></rect>
<defs>
<lineargradient id="gradient-border" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#8b5cf6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#8b5cf6" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute -right-8 top-1/2 w-8 h-[1px] bg-gradient-to-r from-violet-500/50 to-blue-500/50 hidden md:block"></div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-[#151518] p-4 rounded-xl border border-white/10 shadow-lg relative group/node hover:border-blue-500/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:calendar-check" data-width="18"></span>
</div>
<div>
<div className="text-xs text-gray-400">CRM/ERP</div>
<div className="text-sm text-white font-medium">Agendamento</div>
</div>
</div>
</div>
<div className="bg-[#151518] p-4 rounded-xl border border-white/10 shadow-lg relative group/node hover:border-green-500/50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
</div>
<div>
<div className="text-xs text-gray-400">WhatsApp</div>
<div className="text-sm text-white font-medium">Confirmação</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-manrope font-medium text-white tracking-tight mb-4">Por que usar Power Agents?</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">Nossa IA é treinada especificamente para o setor de saúde, entendendo termos médicos e lidando com pacientes de forma empática.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="animate-on-scroll border-gradient-purple rounded-3xl p-8 md:p-12 overflow-hidden group bg-white/[0.02]">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
<span className="iconify" data-icon="lucide:messages-square" data-width="24"></span>
</div>
<h3 className="text-2xl font-manrope text-white font-medium mb-3">Conversas Humanizadas</h3>
<p className="text-gray-400 leading-relaxed mb-8">A IA entende o contexto do paciente e responde naturalmente, eliminando a frustração dos chatbots antigos com menus numéricos.</p>

<div className="bg-[#050507] border border-white/5 rounded-2xl p-6 relative">
<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-50"></div>

<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
<div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-gray-300">
                                        Olá, qual o valor da consulta com dermatologista?
                                    </div>
</div>
<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white text-xs" data-icon="lucide:bot"></span>
</div>
<div className="bg-violet-900/20 border border-violet-500/20 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-violet-100">
                                        Olá! A consulta particular é R$ 350, mas aceitamos diversos convênios. Você possui algum plano de saúde?
                                    </div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[80px] group-hover:bg-green-600/20 transition duration-700"></div>
</div>

<div className="animate-on-scroll border-gradient-purple rounded-3xl p-8 md:p-12 overflow-hidden group bg-white/[0.02]">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="24"></span>
</div>
<h3 className="text-2xl font-manrope text-white font-medium mb-3">Agendamento Real</h3>
<p className="text-gray-400 leading-relaxed mb-8">Integrado diretamente ao seu sistema de gestão. O paciente escolhe o horário e a IA bloqueia na agenda do médico automaticamente.</p>

<div className="bg-[#050507] border border-white/5 rounded-2xl p-6 relative flex items-center justify-between gap-2">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
<span className="iconify text-green-400" data-icon="ic:baseline-whatsapp"></span>
</div>
<span className="text-[10px] text-gray-500">Pedido</span>
</div>
<div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500 w-1/2 animate-beam"></div>
</div>
<div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse">
<span className="iconify text-blue-400" data-icon="lucide:refresh-cw"></span>
</div>
<div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500 w-1/2 animate-beam" style={{animationDelay: '1.5s'}}></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
<span className="iconify text-blue-400" data-icon="lucide:calendar"></span>
</div>
<span className="text-[10px] text-gray-500">Agenda</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/20 transition duration-700"></div>
</div>
</div>
</div>
</section>

<section className="py-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="animate-on-scroll border border-white/10 bg-[#0A0A0C] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="relative z-10 text-center mb-12">
<span className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="iconify text-indigo-400 text-xl" data-icon="lucide:git-branch"></span>
</span>
<h2 className="text-3xl md:text-4xl font-manrope font-medium text-white mb-4">Triagem Inteligente</h2>
<p className="text-gray-400 max-w-xl mx-auto">A IA identifica a necessidade do paciente e encaminha para a especialidade correta ou resolve dúvidas administrativas.</p>
</div>

<div className="relative z-10 flex flex-col items-center">

<div className="w-48 p-3 rounded-full border border-indigo-500/30 bg-indigo-900/20 text-indigo-200 text-sm font-medium flex items-center justify-center gap-2 mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<span className="iconify" data-icon="lucide:stethoscope"></span>
                        Análise de Sintomas
                    </div>

<div className="relative w-full max-w-2xl h-12 mb-4">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 border-t border-white/10 rounded-t-full"></div>

<div className="absolute bottom-0 left-0 h-4 w-[1px] bg-white/10 translate-y-full"></div>
<div className="absolute bottom-0 left-1/2 h-4 w-[1px] bg-white/10 translate-y-full -translate-x-1/2"></div>
<div className="absolute bottom-0 right-0 h-4 w-[1px] bg-white/10 translate-y-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full max-w-3xl mt-4">
<div className="animate-on-scroll bg-[#111] border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:border-white/20 transition-colors">
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><span className="iconify" data-icon="lucide:calendar-days"></span></div>
<span className="text-sm text-gray-300">Agendar Consulta</span>
</div>
<div className="animate-on-scroll delay-100 bg-[#111] border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:border-white/20 transition-colors">
<div className="w-8 h-8 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center"><span className="iconify" data-icon="lucide:file-text"></span></div>
<span className="text-sm text-gray-300">Resultados Exames</span>
</div>
<div className="animate-on-scroll delay-200 bg-[#111] border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:border-white/20 transition-colors">
<div className="w-8 h-8 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center"><span className="iconify" data-icon="lucide:help-circle"></span></div>
<span className="text-sm text-gray-300">Dúvidas Gerais</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-gradient-to-r from-violet-900/20 via-[#050507] to-indigo-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<span className="text-2xl font-manrope font-semibold text-white">2s</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Tempo de Resposta</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-2xl font-manrope font-semibold text-white">24/7</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Disponibilidade</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-2xl font-manrope font-semibold text-white">-40%</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Faltas (No-show)</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-2xl font-manrope font-semibold text-white">LGPD</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">100% Seguro</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-manrope font-medium text-white mb-4">Controle Total</h2>
<p className="text-gray-400">Acompanhe todas as conversas da IA em tempo real.</p>
</div>
<div className="animate-on-scroll relative rounded-xl border border-white/10 bg-[#0E0E10] shadow-2xl overflow-hidden min-h-[600px] flex">

<div className="w-64 border-r border-white/5 bg-[#0A0A0C] hidden md:flex flex-col p-4">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-6 h-6 rounded bg-violet-600"></div>
<span className="text-sm font-semibold text-white">Clínica Saúde</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm">
<span className="iconify" data-icon="lucide:message-square" data-width="16"></span>
                            Conversas Ativas
                        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
                            Agenda
                        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                            Pacientes
                        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-sm">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                            Configurações IA
                        </div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs">
<div className="text-white">Dr. Fernando</div>
<div className="text-gray-500">Administrador</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0E0E10]">

<div className="h-16 border-b border-white/5 flex items-center justify-between px-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<h3 className="text-white font-medium">WhatsApp - Ana Silva</h3>
</div>
<div className="flex gap-3">
<button className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">Ver Perfil</button>
<button className="px-3 py-1.5 rounded-md bg-red-600/20 text-red-400 border border-red-500/20 text-xs">Assumir Conversa</button>
</div>
</div>

<div className="p-6 flex-1 overflow-y-auto custom-scrollbar bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-5 bg-fixed">
<div className="max-w-3xl mx-auto space-y-6">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-700 shrink-0 flex items-center justify-center text-xs text-white">AS</div>
<div className="flex-1 space-y-2">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white">Ana Silva</span>
<span className="text-xs text-gray-500">14:30</span>
</div>
<div className="bg-[#202c33] border border-white/5 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed w-fit">
                                        Boa tarde, gostaria de marcar um retorno com a Dra. Júlia para semana que vem.
                                    </div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0">
<span className="iconify text-white text-xs" data-icon="lucide:bot"></span>
</div>
<div className="flex-1 space-y-2 flex flex-col items-end">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white">Power Agent</span>
<span className="text-xs text-gray-500">14:30</span>
</div>
<div className="bg-[#005c4b] p-3 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed w-fit shadow-sm">
                                        Boa tarde, Ana! Tudo bem? Verifiquei a agenda da Dra. Júlia. <br/><br/>
                                        Temos estes horários disponíveis:<br/>
                                        🗓️ Terça (12/09) às 14:00<br/>
                                        🗓️ Quinta (14/09) às 09:30<br/><br/>
                                        Qual prefere?
                                    </div>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-700 shrink-0 flex items-center justify-center text-xs text-white">AS</div>
<div className="flex-1 space-y-2">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white">Ana Silva</span>
<span className="text-xs text-gray-500">14:31</span>
</div>
<div className="bg-[#202c33] border border-white/5 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed w-fit">
                                        Pode ser na terça às 14h.
                                    </div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse opacity-70">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0">
<span className="animate-spin" data-icon="lucide:loader-2"></span>
</div>
<div className="flex-1 space-y-2 flex flex-col items-end">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium text-white">Power Agent</span>
<span className="text-xs text-gray-500">Digitando...</span>
</div>
<div className="w-24 h-8 bg-[#005c4b] rounded-2xl rounded-tr-none flex items-center px-4 gap-1 justify-center">
<div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-100"></div>
<div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#050507] to-violet-900/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="animate-on-scroll text-3xl md:text-5xl font-manrope font-medium text-white text-center mb-16">
                Veja como clínicas estão <br/> modernizando o atendimento
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-on-scroll bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl hover:border-violet-500/30 transition-colors duration-300">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"O Power Agents revolucionou nossa recepção. Reduzimos as ligações em 90% e as faltas diminuíram drasticamente com as confirmações automáticas."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">DR</div>
<div>
<div className="text-sm font-medium text-white">Dr. Roberto Mendes</div>
<div className="text-xs text-gray-500">Cardiologista, Clínica Mendes</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-100 bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl hover:border-violet-500/30 transition-colors duration-300">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Meus pacientes adoram a agilidade no WhatsApp. Ninguém mais quer esperar na linha telefônica para marcar uma simples consulta."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">MA</div>
<div>
<div className="text-sm font-medium text-white">Maria Alice</div>
<div className="text-xs text-gray-500">Gestora, DermaClinic</div>
</div>
</div>
</div>

<div className="animate-on-scroll delay-200 bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl hover:border-violet-500/30 transition-colors duration-300">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Fiquei impressionado com a capacidade da IA de entender perguntas complexas sobre exames e preparos. É como ter uma secretária extra."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">PA</div>
<div>
<div className="text-sm font-medium text-white">Pedro Alvarez</div>
<div className="text-xs text-gray-500">Diretor, Laboratórios Alpha</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="animate-on-scroll max-w-5xl mx-auto relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a1a20] to-[#0A0A0C] border border-white/10 text-center p-12 md:p-24 group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-600/20 to-transparent opacity-50 group-hover:opacity-70 transition duration-1000"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-green-400">
<span className="iconify" data-icon="lucide:phone-call" data-width="32"></span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-medium text-white mb-6">Experimente o Futuro do <br/> Atendimento Médico</h2>
<p className="text-gray-400 mb-10 max-w-lg">Comece com uma demonstração gratuita e veja quanto tempo sua recepção pode economizar.</p>
<button className="h-14 px-10 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-violet-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:-translate-y-1">
                    Começar Agora
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030304] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bot" data-width="14"></span>
</div>
<span className="text-base font-manrope font-semibold text-white">Power Agents</span>
</div>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg h-10 px-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 transition-colors" placeholder="Seu melhor e-mail" type="email"/>
<button className="absolute right-1 top-1 h-8 w-8 rounded bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Produto</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Funcionalidades</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Para Clínicas</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Integrações</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Segurança LGPD</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Empresa</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-violet-400 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Carreiras</a></li>
<li><a className="hover:text-violet-400 transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Redes</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>© 2024 Power Agents Ltda. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-gray-400" href="#">Política de Privacidade</a>
<a className="hover:text-gray-400" href="#">Termos de Uso</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
