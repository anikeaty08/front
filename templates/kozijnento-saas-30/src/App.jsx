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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#020617] group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">Kozijnentool</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#features">Functies</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#workflow">Werkwijze</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#testimonials">Klanten</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Inloggen</a>
<a className="bg-white hover:bg-slate-200 text-[#020617] text-sm font-medium py-2 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#demo">
                        Demo aanvragen
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 -z-10 overflow-hidden">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] opacity-40 glow-animate"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-20"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium mb-8 fade-in-up backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                Nu beschikbaar voor montage teams
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1] fade-in-up delay-100">
                Van verkoop tot montage <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">in één systeem.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed fade-in-up delay-200">
                Stop met de chaos van Excel en WhatsApp. Kozijnentool geeft je volledige controle over planning, werkvoorbereiding en montage.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 fade-in-up delay-300">
<a className="group inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-base font-medium py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5" href="#demo">
                    Demo aanvragen
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-base font-medium py-3 px-8 rounded-xl transition-all backdrop-blur-sm" href="#features">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
                    Meer informatie
                </a>
</div>

<div className="relative max-w-5xl mx-auto fade-in-up delay-300 perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-lg opacity-20"></div>
<div className="relative bg-[#0F1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1] ring-1 ring-white/5">

<div className="absolute left-0 top-0 bottom-0 w-16 md:w-64 border-r border-white/5 bg-[#0B0D13] p-4 hidden md:flex flex-col gap-4">
<div className="h-8 w-8 bg-indigo-500 rounded-lg mb-4 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="space-y-2">
<div className="h-8 w-full bg-white/10 rounded-lg border border-white/5"></div>
<div className="h-8 w-3/4 bg-transparent rounded-lg opacity-40 hover:bg-white/5 transition-colors"></div>
<div className="h-8 w-5/6 bg-transparent rounded-lg opacity-40 hover:bg-white/5 transition-colors"></div>
</div>
</div>

<div className="absolute top-0 left-0 md:left-64 right-0 h-16 border-b border-white/5 bg-[#0F1117] flex items-center px-6 justify-between">
<div className="h-4 w-32 bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white/10"></div>
<div className="h-8 w-8 rounded-full bg-white/10"></div>
</div>
</div>

<div className="absolute top-16 left-0 md:left-64 right-0 bottom-0 bg-[#0F1117] p-6 grid grid-cols-3 gap-6">

<div className="col-span-3 grid grid-cols-3 gap-4 h-24">
<div className="bg-[#161922] rounded-xl border border-white/5 p-4">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-6 w-12 bg-white/20 rounded"></div>
</div>
<div className="bg-[#161922] rounded-xl border border-white/5 p-4">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-6 w-12 bg-white/20 rounded"></div>
</div>
<div className="bg-[#161922] rounded-xl border border-white/5 p-4">
<div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
<div className="h-6 w-12 bg-white/20 rounded"></div>
</div>
</div>

<div className="col-span-2 bg-[#161922] rounded-xl border border-white/5 p-4 space-y-3">
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<div className="h-3 w-24 bg-white/10 rounded"></div>
<div className="h-3 w-4 bg-white/10 rounded"></div>
</div>
<div className="h-10 w-full bg-white/5 rounded border border-white/5 flex items-center px-3 gap-3">
<div className="h-4 w-4 bg-indigo-500/20 border border-indigo-500/50 rounded-full"></div>
<div className="h-2 w-32 bg-white/10 rounded"></div>
</div>
<div className="h-10 w-full bg-white/5 rounded border border-white/5 flex items-center px-3 gap-3">
<div className="h-4 w-4 bg-emerald-500/20 border border-emerald-500/50 rounded-full"></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
</div>
</div>

<div className="col-span-1 bg-[#161922] rounded-xl border border-white/5 p-4">
<div className="h-3 w-20 bg-white/10 rounded mb-4"></div>
<div className="grid grid-cols-7 gap-1">
<div className="aspect-square bg-white/5 rounded-sm"></div>
<div className="aspect-square bg-white/5 rounded-sm"></div>
<div className="aspect-square bg-indigo-600 rounded-sm shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
<div className="aspect-square bg-white/5 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0D13] border-y border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">De chaos van groei</h2>
<p className="text-slate-400 font-light text-lg">Zonder het juiste systeem verlies je grip op je projecten. Herkenbaar?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-red-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 group-hover:bg-red-500/10 transition-all">
<iconify-icon icon="solar:file-remove-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Eindeloze Excel lijsten</h3>
<p className="text-slate-400 font-light leading-relaxed">Planningen in losse sheets die nooit up-to-date zijn. Versiebeheer is een nachtmerrie.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-orange-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Communicatie via App</h3>
<p className="text-slate-400 font-light leading-relaxed">Belangrijke foto's en afspraken raken kwijt in privé chats van monteurs en verkopers.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all">
<iconify-icon icon="solar:eye-closed-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Geen totaaloverzicht</h3>
<p className="text-slate-400 font-light leading-relaxed">Niemand weet precies wat de status is van een montage. Planners bellen continu rond.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] relative" id="features">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-16">
<span className="text-indigo-400 font-medium tracking-wide text-sm uppercase">Oplossing</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mt-2">Alles in één platform</h2>
<p className="text-slate-400 font-light text-lg mt-4 max-w-2xl">Kozijnentool verbindt kantoor met de werkvloer. Efficiëntie van lead tot oplevering.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Slimme Planning</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Drag-and-drop planning voor inmeters en montageteams. Direct inzicht in beschikbaarheid.</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Team Management</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Beheer rollen voor verkopers, planners en monteurs. Iedereen ziet alleen wat relevant is.</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Documentbeheer</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Centraliseer contracten, meetrapporten en opleverdocumenten. Altijd toegankelijk.</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Validatie Workflows</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Voorkom fouten. Verkoopopdrachten moeten goedgekeurd worden voor de volgende stap.</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Mobiele App</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">De buitendienst heeft alle info in de broekzak. Foto's uploaden en uren registreren.</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:text-indigo-300 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">Multi-tenant</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Werken met onderaannemers? Geef ze beperkte toegang tot specifieke projecten.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0D13] border-y border-white/5" id="workflow">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Hoe Kozijnentool werkt</h2>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#0B0D13] rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center text-sm font-medium border-4 border-[#0B0D13]">1</div>
<iconify-icon className="text-indigo-400" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Verkoop</h3>
<p className="text-sm text-slate-400 font-light px-4">Sales registreert de lead en uploadt de offerte. De workflow start.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#0B0D13] rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-white/30 transition-colors">
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1F2937] rounded-full text-slate-300 flex items-center justify-center text-sm font-medium border-4 border-[#0B0D13]">2</div>
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Inmeten</h3>
<p className="text-sm text-slate-400 font-light px-4">De inmeter krijgt een notificatie, plant de afspraak en voert maten in.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#0B0D13] rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-white/30 transition-colors">
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1F2937] rounded-full text-slate-300 flex items-center justify-center text-sm font-medium border-4 border-[#0B0D13]">3</div>
<iconify-icon icon="solar:hammer-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Montage</h3>
<p className="text-sm text-slate-400 font-light px-4">Montageteam ziet de planning in de app. Ze starten het werk en maken foto's.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#0B0D13] rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white mb-6 relative z-10 group-hover:border-white/30 transition-colors">
<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1F2937] rounded-full text-slate-300 flex items-center justify-center text-sm font-medium border-4 border-[#0B0D13]">4</div>
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Oplevering</h3>
<p className="text-sm text-slate-400 font-light px-4">Klant tekent digitaal voor akkoord. Service meldingen worden direct geregistreerd.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#020617]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-8">Vertrouwd door toonaangevende montagebedrijven</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 hover:opacity-100 transition-all duration-500 text-white">

<div className="flex items-center gap-2 text-xl font-bold">
<iconify-icon icon="solar:window-frame-linear"></iconify-icon> KOZIJNPLUS
                </div>
<div className="flex items-center gap-2 text-xl font-bold">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon> WoonTotaal
                </div>
<div className="flex items-center gap-2 text-xl font-bold">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> VELUXIA
                </div>
<div className="flex items-center gap-2 text-xl font-bold">
<iconify-icon icon="solar:sun-2-linear"></iconify-icon> GlasGroep
                </div>
</div>
</div>
</section>

<section className="py-24 px-4" id="demo">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900/50 to-black rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="relative z-10 px-8 py-16 md:p-20 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Klaar om jouw planning te digitaliseren?</h2>
<p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
                    Krijg vandaag nog inzicht in hoe Kozijnentool jouw bedrijfsprocessen kan stroomlijnen. Vraag een vrijblijvende demo aan.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto bg-white text-[#020617] hover:bg-slate-200 text-base font-medium py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5">
                        Plan een demo
                    </button>
<button className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/5 text-base font-medium py-3 px-8 rounded-xl transition-all">
                        Contact opnemen
                    </button>
</div>
<p className="mt-6 text-xs text-slate-500">Geen creditcard nodig • Direct aan de slag na demo</p>
</div>
</div>
</section>

<footer className="bg-[#020617] pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-medium text-base tracking-tight text-white">Kozijnentool</span>
</div>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        De alles-in-één softwareoplossing voor kozijnenbedrijven en montageteams in Nederland.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Planning</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Mobiele App</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Prijzen</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Bedrijf</h4>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Over ons</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Carrière</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@kozijnentool.nl</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +31 20 123 4567</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Amsterdam, NL</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 font-light">© 2023 Kozijnentool BV. Alle rechten voorbehouden.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
