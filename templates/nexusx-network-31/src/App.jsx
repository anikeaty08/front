import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

<div className="relative z-10 flex w-full h-full">

<aside className="w-64 flex flex-col border-r border-white/5 bg-[#080a0c]/80 backdrop-blur-xl h-full pt-6 pb-4 px-4 justify-between flex-shrink-0">
<div>

<div className="flex items-center gap-3 mb-8 px-2">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 p-[1px]">
<img alt="User" className="w-full h-full rounded-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=ryan"/>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-500 border-2 border-[#080a0c] rounded-full"></div>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium mb-0.5">@nexus_admin</p>
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Ryan Crawford</h3>
</div>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 text-teal-400 border border-white/5 font-medium transition-all shadow-[0_0_15px_rgba(45,212,191,0.1)]" href="#">
<svg className="lucide lucide-layout-grid" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors group" href="#">
<svg className="lucide lucide-map" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                        Mapa
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors group" href="#">
<svg className="lucide lucide-plus-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                        Añadir Dispositivo
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors group" href="#">
<svg className="lucide lucide-server" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                        Mis Dispositivos
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors group" href="#">
<svg className="lucide lucide-settings-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                        Configuración
                    </a>
</nav>
</div>

<div className="space-y-4">
<div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-4 border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center mb-2 border border-white/10 text-teal-400">
<svg className="lucide lucide-zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h4 className="text-xs font-semibold text-white mb-1">Modo Pro</h4>
<p className="text-[10px] text-zinc-400 leading-tight">Desbloquea análisis en tiempo real.</p>
</div>
</div>
<button className="w-full py-3 rounded-2xl bg-[#111316] border border-white/5 text-zinc-400 hover:text-white hover:border-teal-500/30 hover:bg-teal-500/5 transition-all flex items-center justify-center gap-2 group">
<div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-xs font-medium">Nueva Conexión</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#080a0c] relative">

<header className="flex items-center justify-between px-8 py-6 flex-shrink-0">
<div className="flex items-center gap-2 opacity-0">

</div>
<div className="flex items-center gap-5">
<div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<span className="text-xs">Buscar nodo...</span>
</div>
<div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
<svg className="lucide lucide-bell" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<div className="relative w-2 h-2 rounded-full bg-teal-500 -ml-2 -mt-2 border border-black"></div>
</div>
<div className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
<svg className="lucide lucide-settings" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</header>

<div className="px-8 pb-8 flex-1 overflow-y-auto no-scrollbar flex flex-col">

<div className="flex items-end justify-between mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
<span className="text-[10px] font-mono text-teal-500 tracking-wider uppercase">Sistema Activo</span>
<div className="bg-teal-500/10 text-teal-400 text-[10px] px-2 py-0.5 rounded-full border border-teal-500/20 flex items-center gap-1">
                                En línea <span className="w-1 h-1 rounded-full bg-teal-400"></span>
</div>
</div>
<h1 className="text-xl font-semibold text-white tracking-tight">Estado de la Red</h1>
</div>
<div className="flex gap-2">
<button className="bg-[#13161b] hover:bg-[#1c2026] text-zinc-400 text-xs px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 transition-colors">
                            Global <svg className="lucide lucide-globe" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="bg-[#13161b] hover:bg-[#1c2026] text-zinc-400 text-xs px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 transition-colors">
                            Latencia <svg className="lucide lucide-chevron-down" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-3 gap-5 mb-8">

<div className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
<div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1c2026] flex items-center justify-center border border-white/5 shadow-inner">
<svg className="lucide lucide-router text-teal-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6.01 18h.01"></path><path d="M10.01 18h.01"></path><path d="M15 10v4"></path><path d="M17.84 7.17a4 4 0 0 0-5.66 0"></path><path d="M20.66 4.34a8 8 0 0 0-11.31 0"></path></svg>
</div>
<div>
<h3 className="text-white font-medium text-sm">Router Principal</h3>
<p className="text-[10px] text-zinc-500 font-mono">ID: RT-90X</p>
</div>
</div>
<button className="text-zinc-600 hover:text-white transition-colors">
<svg className="lucide lucide-activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</button>
</div>
<div className="mb-4">
<p className="text-xs text-zinc-500 mb-1">Ancho de Banda</p>
<h2 className="text-3xl font-semibold text-white tracking-tight">2.4 Gbps</h2>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
<svg className="lucide lucide-arrow-up text-teal-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
<span className="text-[10px] font-bold text-teal-400">Estable</span>
</div>
<div className="h-8 w-24">
<svg className="w-full h-full stroke-teal-500/50 fill-none" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 30 Q 10 35 20 25 T 40 20 T 60 25 T 80 15 T 100 5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-5 relative overflow-hidden group border-rose-500/20">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1c2026] flex items-center justify-center border border-white/5 shadow-inner">
<svg className="lucide lucide-shield-alert text-rose-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div>
<h3 className="text-white font-medium text-sm">Firewall</h3>
<p className="text-[10px] text-zinc-500 font-mono">Estado: Alerta</p>
</div>
</div>
</div>
<div className="mb-4">
<p className="text-xs text-zinc-500 mb-1">Amenazas Bloqueadas</p>
<h2 className="text-3xl font-semibold text-white tracking-tight">12</h2>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
<span className="text-[10px] font-bold text-rose-400">Atención</span>
</div>
<div className="h-8 w-24">
<svg className="w-full h-full stroke-rose-500/50 fill-none" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 10 Q 20 5 40 20 T 60 25 T 80 30 T 100 35" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
<div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1c2026] flex items-center justify-center border border-white/5 shadow-inner">
<svg className="lucide lucide-cpu text-amber-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<div>
<h3 className="text-white font-medium text-sm">Carga CPU</h3>
<p className="text-[10px] text-zinc-500 font-mono">Cluster: A1</p>
</div>
</div>
</div>
<div className="mb-4">
<p className="text-xs text-zinc-500 mb-1">Uso Promedio</p>
<h2 className="text-3xl font-semibold text-white tracking-tight">42%</h2>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
<span className="text-[10px] font-bold text-amber-400">Normal</span>
</div>
<div className="h-8 w-24">
<svg className="w-full h-full stroke-amber-500/50 fill-none" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 35 Q 15 35 30 20 T 60 20 T 90 15 T 100 5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="mt-2 flex-1 flex flex-col min-h-[300px] mb-4">
<div className="flex items-center justify-between mb-4">
<div className="flex flex-col">
<h2 className="text-lg font-semibold text-white tracking-tight">Geolocalización de Dispositivos</h2>
<p className="text-xs text-zinc-500">Visualización en tiempo real de nodos activos.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-[10px] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5 text-zinc-300">
<div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div> Activos (24)
                             </button>
<button className="flex items-center gap-1 text-[10px] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5 text-zinc-300">
<div className="w-2 h-2 rounded-full bg-rose-500"></div> Offline (2)
                             </button>
</div>
</div>

<div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-white/10 bg-[#0b0e12] perspective-container group shadow-[0_0_50px_rgba(0,0,0,0.5)_inset]">

<div className="absolute inset-[-50%] w-[200%] h-[200%] map-plane opacity-30"></div>

<div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0b0e12] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-[#0b0e12]/50 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center transform-style-3d">

<div className="absolute text-teal-500 z-10">
<div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.8)] relative z-10 pin-glow"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-teal-500/30 text-[10px] font-mono text-teal-300">HUB PRINCIPAL</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<line stroke="#2dd4bf" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="30%"></line>
<line stroke="#2dd4bf" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="40%"></line>
<line stroke="#2dd4bf" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="70%"></line>
<line stroke="#fb7185" stroke-dasharray="2 2" strokeWidth="1" x1="50%" x2="70%" y1="50%" y2="80%"></line>
</svg>

<div className="absolute top-[30%] left-[20%] map-pin group/pin cursor-pointer">
<div className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)] pin-glow"></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity bg-[#1c2026] px-2 py-1 rounded border border-white/10 text-[9px] text-white flex flex-col items-center">
<span className="font-bold">Madrid Server</span>
<span className="text-zinc-400">98ms</span>
</div>
</div>

<div className="absolute top-[40%] right-[20%] map-pin group/pin cursor-pointer">
<div className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)] pin-glow"></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity bg-[#1c2026] px-2 py-1 rounded border border-white/10 text-[9px] text-white flex flex-col items-center">
<span className="font-bold">Tokyo Node</span>
<span className="text-zinc-400">140ms</span>
</div>
</div>

<div className="absolute bottom-[20%] right-[30%] map-pin group/pin cursor-pointer">
<div className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.5)] animate-pulse"></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1c2026] px-2 py-1 rounded border border-rose-500/30 text-[9px] text-rose-300 flex flex-col items-center">
<span className="font-bold">Error Conexión</span>
<span className="text-zinc-400">Sao Paulo</span>
</div>
</div>

<div className="absolute bottom-[30%] left-[30%] map-pin group/pin cursor-pointer">
<div className="w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)] pin-glow"></div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity bg-[#1c2026] px-2 py-1 rounded border border-white/10 text-[9px] text-white flex flex-col items-center">
<span className="font-bold">NY Data Center</span>
<span className="text-zinc-400">45ms</span>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="w-8 h-8 rounded-lg bg-[#1c2026] border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="w-8 h-8 rounded-lg bg-[#1c2026] border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
<svg className="lucide lucide-minus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 flex flex-col border-l border-white/5 bg-[#080a0c]/80 backdrop-blur-xl h-full p-6 flex-shrink-0">

<div className="relative rounded-3xl overflow-hidden mb-8 border border-white/5 group">

<div className="absolute inset-0 bg-[#0d1518] z-0"></div>
<div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>
<div className="relative z-10 p-5 flex flex-col items-center text-center">
<div className="w-24 h-24 mb-4 relative">
<div className="absolute inset-0 rounded-full border border-teal-500/30 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-radar text-teal-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>
<div className="flex items-center gap-1 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
<span className="text-[10px] font-bold text-white uppercase tracking-wider">Nexus Scan</span>
</div>
<h3 className="text-lg font-semibold text-white leading-tight mb-2">Escaneo Profundo</h3>
<p className="text-[10px] text-zinc-400 mb-5 px-2">Analiza la red local en busca de nuevos dispositivos IoT y optimiza la latencia.</p>
<div className="flex flex-col w-full gap-2">
<button className="w-full py-2 bg-teal-400 hover:bg-teal-300 text-black font-semibold rounded-full text-xs transition-colors shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                            Iniciar Escaneo
                        </button>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                         Uso de Recursos 
                         <svg className="lucide lucide-info text-zinc-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</h3>
</div>
<div className="flex items-end gap-3 mb-6">
<h2 className="text-3xl font-bold text-white tracking-tight">84.2%</h2>
<span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded mb-1.5">Alto</span>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700">
<svg className="lucide lucide-rotate-ccw" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<span className="text-[10px] text-zinc-400">Reiniciar</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700">
<svg className="lucide lucide-pause" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="1" width="4" x="14" y="4"></rect><rect height="16" rx="1" width="4" x="6" y="4"></rect></svg>
</div>
<span className="text-[10px] text-zinc-400">Pausar</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-700">
<svg className="lucide lucide-terminal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
</div>
<span className="text-[10px] text-zinc-400">Logs</span>
</button>
</div>
</div>

<div className="flex-1 glass-card rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-teal-400"></div>
<span className="text-[10px] text-zinc-400">RAM</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-[10px] text-zinc-400">SSD</span>
</div>
</div>
</div>
<div className="relative w-full h-32 flex items-center justify-center mt-auto">

<div className="w-48 h-24 overflow-hidden relative">
<div className="w-48 h-48 rounded-full border-[12px] border-[#1c2026] box-border absolute top-0 left-0"></div>

<div className="w-48 h-48 rounded-full border-[12px] border-transparent border-t-teal-400 border-l-teal-400 box-border absolute top-0 left-0 rotate-[-15deg]"></div>

<div className="w-48 h-48 rounded-full border-[12px] border-transparent border-t-emerald-400 border-r-emerald-400 box-border absolute top-0 left-0 rotate-[75deg] opacity-50 border-dashed"></div>
</div>
<div className="absolute bottom-0 flex flex-col items-center">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-bold text-white">Almacenamiento</span>
</div>
</div>
</div>
<div className="absolute bottom-4 left-4 bg-[#111316] border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
<span className="text-[9px] text-white font-medium">16GB</span>
</div>
</div>
</aside>
</div>

    </>
  );
}
