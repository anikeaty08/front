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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 grid-bg z-[-1]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05050A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tighter text-white font-medium flex items-center gap-2" href="#">
<span className="iconify text-violet-500" data-icon="lucide:cpu" data-width="24"></span>
                SPONAi
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#usluge">Usluge</a>
<a className="hover:text-white transition-colors" href="#proces">Proces</a>
<a className="hover:text-white transition-colors" href="#faq">Pitanja</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 group" href="#kontakt">
                    Zakaži Poziv
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                Agencija za AI Automatizaciju
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-white mb-6 leading-[1.1]">
                Tvoj biznis na <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-blue-400">autopilotu.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Povezujemo (Spona) tradicionalno poslovanje sa veštačkom inteligencijom. Oslobađamo vaše vreme dok AI sistemi rade za vas.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium text-sm rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#kontakt">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
                    Zakaži Konsultacije
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#usluge">
                    Istraži Usluge
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-4xl perspective-[2000px]">
<div className="relative rounded-xl border border-white/10 bg-[#0A0A10]/50 backdrop-blur-xl p-2 shadow-2xl transform rotate-x-12 translate-y-10 opacity-80 mask-image-gradient">
<div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-black relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full p-8 grid grid-cols-3 gap-4 opacity-70">
<div className="col-span-1 rounded bg-white/5 border border-white/5 animate-pulse"></div>
<div className="col-span-2 rounded bg-white/5 border border-white/5 flex items-center justify-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-violet-500/50 flex items-center justify-center text-violet-400">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
</div>
<div className="h-px w-20 bg-gradient-to-r from-violet-500/50 to-transparent"></div>
<div className="w-12 h-12 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:database" data-width="24"></span>
</div>
</div>
</div>
<div className="col-span-3 h-32 rounded bg-gradient-to-r from-violet-900/10 to-transparent border border-white/5"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-violet-600/30 blur-[100px] -z-10"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030308]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                        Dok konkurencija spava, <br/>
<span className="text-violet-400">vaš biznis radi.</span>
</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Većina malih i srednjih preduzeća gubi preko 40% vremena na repetitivne zadatke. Ručno slanje mejlova, odgovaranje na iste poruke i neorganizovani podaci su prošlost.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
<span className="iconify" data-icon="lucide:x" data-width="12"></span>
</div>
<span className="text-slate-400 text-sm">Ručna obrada podataka i gubljenje sati dnevno.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-slate-200 text-sm">Automatizovan sistem koji radi 24/7 bez pauze.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-[50px]"></div>
<div className="space-y-4">

<div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-violet-500/20 flex items-center justify-center text-violet-400">
<span className="iconify" data-icon="lucide:webhook" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500">Upravo sada</div>
<div className="text-sm text-slate-200 font-medium">Novi lead dodat u CRM</div>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500">Pre 2 min</div>
<div className="text-sm text-slate-200 font-medium">Personalizovan email poslat</div>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-500">Pre 5 min</div>
<div className="text-sm text-slate-200 font-medium">Uplata procesuirana</div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 text-center">
<span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Ušteđeno vreme: 12h/nedeljno</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="usluge">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">Naše Usluge</h2>
<p className="text-slate-400">Sveobuhvatna rešenja za digitalnu transformaciju.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass rounded-2xl p-8 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#05050A] border border-white/10 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:workflow" data-width="24"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">AI Automatizacija</h3>
<p className="text-slate-400 text-sm max-w-sm">
                            Implementacija chatbota, AI agenata i automatizovanih tokova koristeći Make.com i n8n. Vaš sistem radi bez prestanka.
                        </p>
</div>

<div className="absolute bottom-0 right-0 w-2/3 h-1/2 opacity-50">
<svg className="w-full h-full text-violet-500/20" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10 50 C 30 50, 30 20, 50 20 C 70 20, 70 80, 90 80" stroke="currentColor" strokeWidth="2"></path>
<circle cx="10" cy="50" fill="currentColor" r="3"></circle>
<circle cx="50" cy="20" fill="currentColor" r="3"></circle>
<circle cx="90" cy="80" fill="currentColor" r="3"></circle>
</svg>
</div>
</div>

<div className="glass rounded-2xl p-8 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#05050A] border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Dizajn &amp; SEO</h3>
<p className="text-slate-400 text-sm">
                            Moderne, brze web stranice optimizovane za pretraživače. Infrastruktura koja konvertuje posetioce u klijente.
                        </p>
</div>
</div>

<div className="glass rounded-2xl p-8 relative group overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#05050A] border border-white/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:megaphone" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Kreativa &amp; Oglasi</h3>
<p className="text-slate-400 text-sm">
                            Meta &amp; Google kampanje vođene podacima. Kreiranje sadržaja koji privlači pažnju u moru informacija.
                        </p>
</div>
</div>

<div className="md:col-span-2 glass rounded-2xl p-8 relative group overflow-hidden flex items-center">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent"></div>
<div className="grid md:grid-cols-2 gap-8 items-center w-full relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">Potrebno specifično rešenje?</h3>
<p className="text-slate-400 text-sm mb-6">
                                Kreiramo custom AI rešenja prilagođena tačno vašim potrebama.
                            </p>
<a className="text-white text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors" href="#kontakt">
                                Kontaktirajte nas
                            </a>
</div>
<div className="flex justify-end gap-3 opacity-60">
<div className="px-4 py-2 rounded border border-white/10 bg-[#05050A] text-xs">OpenAI</div>
<div className="px-4 py-2 rounded border border-white/10 bg-[#05050A] text-xs">Make</div>
<div className="px-4 py-2 rounded border border-white/10 bg-[#05050A] text-xs">Stripe</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#030308] border-y border-white/5" id="proces">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium text-white mb-16 text-center tracking-tight">Kako radimo</h2>
<div className="space-y-12 relative">

<div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10"></div>

<div className="flex gap-8 relative">
<div className="w-14 h-14 rounded-full bg-[#030308] border border-white/10 flex items-center justify-center text-white shrink-0 z-10 relative shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
                        1
                    </div>
<div>
<h3 className="text-xl text-white font-medium mb-2">Analiza &amp; Audit</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                            Detaljno analiziramo vaše trenutne procese. Identifikujemo uska grla i mesta gde veštačka inteligencija može doneti najveći ROI (povrat investicije).
                        </p>
</div>
</div>

<div className="flex gap-8 relative">
<div className="w-14 h-14 rounded-full bg-[#030308] border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 z-10 relative shadow-[0_0_15px_-3px_rgba(139,92,246,0.2)]">
                        2
                    </div>
<div>
<h3 className="text-xl text-white font-medium mb-2">Implementacija Sistema</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                            Gradimo i povezujemo sisteme. Bez prekida vašeg poslovanja, integrišemo chatbotove, automatizaciju i nove prodajne kanale.
                        </p>
</div>
</div>

<div className="flex gap-8 relative">
<div className="w-14 h-14 rounded-full bg-[#030308] border border-white/10 flex items-center justify-center text-white shrink-0 z-10 relative">
                        3
                    </div>
<div>
<h3 className="text-xl text-white font-medium mb-2">Skaliranje &amp; Rast</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                            Kada sistem radi, fokusiramo se na optimizaciju. Pratimo rezultate, povećavamo budžete za oglase i skaliramo vaš profit.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl font-semibold text-white mb-2">24/7</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Dostupnost</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white mb-2">10x</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Brže izvršenje</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white mb-2">0%</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Ljudskih grešaka</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-white mb-2">100%</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Fokus na rast</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="kontakt">
<div className="absolute inset-0 bg-gradient-to-b from-[#030308] to-violet-950/20"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Spremni za budućnost?</h2>
<p className="text-slate-400 mb-10 text-lg">
                Svaki biznis je jedinstven. Zato nemamo fiksne cenovnike. Kontaktirajte nas za ponudu skrojenu prema vašim ciljevima.
            </p>
<div className="glass p-8 rounded-2xl max-w-lg mx-auto">
<form className="space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Email Adresa</label>
<input className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors text-sm" placeholder="vas@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Tip Usluge</label>
<select className="w-full bg-[#05050A] border border-white/10 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-violet-500 transition-colors text-sm appearance-none">
<option>Izaberite opciju...</option>
<option>AI Automatizacija</option>
<option>Marketing &amp; Oglasi</option>
<option>Web Dizajn</option>
</select>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors mt-4 text-sm flex items-center justify-center gap-2" type="button">
                        Pošalji Upit <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
<p className="mt-4 text-xs text-slate-500 text-center">Odgovaramo u roku od 24h.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030308]" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-10 tracking-tight">Često postavljana pitanja</h2>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.07] transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200">
                        Da li je AI previše komplikovan za moj mali biznis?
                        <span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
                        Apsolutno ne. Mi preuzimamo svu tehničku kompleksnost na sebe. Vi dobijate jednostavan interfejs i rezultate, dok "teška mašinerija" radi u pozadini.
                    </div>
</details>
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.07] transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200">
                        Koliko vremena je potrebno za implementaciju?
                        <span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
                        Za osnovne automatizacije (npr. lead capture, email odgovori) potrebno je 3-7 dana. Kompleksniji sistemi i web sajtovi mogu potrajati 2-4 nedelje.
                    </div>
</details>
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.07] transition-all">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-200">
                        Da li radite samo sa IT firmama?
                        <span className="iconify text-slate-500 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed">
                        Ne. Naši klijenti su stomatolozi, agencije za nekretnine, advokati, e-commerce prodavnice i uslužne delatnosti koje žele da modernizuju poslovanje.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-[#020205] text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<a className="text-xl tracking-tighter text-white font-medium flex items-center gap-2" href="#">
<span className="iconify text-violet-500" data-icon="lucide:cpu" data-width="20"></span>
                    SPONAi
                </a>
<p className="text-slate-500 text-center md:text-left">Most ka digitalnoj budućnosti.</p>
</div>
<div className="flex gap-8 text-slate-400">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter/X</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center md:text-left text-slate-600 text-xs">
            © 2024 SPONAi Agencija. Sva prava zadržana.
        </div>
</footer>

    </>
  );
}
