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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">

<a className="flex items-center gap-3 group" href="#">
<svg className="h-10 w-auto" fill="none" viewbox="0 0 115 85" xmlns="http://www.w3.org/2000/svg">

<circle cx="20" cy="15" fill="#95ACB2" r="8"></circle>

<path d="M20 35 L35 70 L50 35" stroke="#D99F34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>

<path d="M65 35 V55 C65 65 70 70 80 70 C90 70 95 65 95 55 V35" stroke="#95ACB2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>

<circle cx="95" cy="15" fill="#D99F34" r="8"></circle>
</svg>
<span className="text-base font-semibold tracking-[0.3em] text-slate-600 uppercase pt-1">
                        Vetunita
                    </span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-800 transition-colors" href="#problema">Visione</a>
<a className="hover:text-slate-800 transition-colors" href="#liberta">Le 5 Libertà</a>
<a className="hover:text-slate-800 transition-colors" href="#vantaggi">Vantaggi</a>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm hover:shadow-md ring-1 ring-white/10">
                Analisi Gratuita
            </button>
</div>
</nav>

<section className="sticky min-h-screen flex mesh-bg overflow-hidden z-0 pt-16 top-0 items-center justify-center">

<div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-500 font-medium">
<iconify-icon className="text-amber-600" icon="solar:shield-check-linear"></iconify-icon>
<span className="">Unione Professionale Indipendente</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Riacquista il tuo <br/>
<span className="text-slate-400">potere contrattuale.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    L'unica cooperativa di veterinari indipendenti uniti per ottimizzare gli acquisti senza rinunciare alla libertà.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2">
                        Richiedi Analisi Gratuita
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                        Scopri come funziona
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full hidden md:flex items-center justify-center perspective-1000">

<div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-all duration-700 z-0">
<img alt="Veterinario" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>

<div className="absolute top-10 right-10 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

<div className="absolute bottom-20 left-10 glass-panel rounded-2xl border border-white/60 shadow-xl flex flex-col p-6 z-20 backdrop-blur-md max-w-xs -rotate-2 hover:rotate-0 transition-all duration-500">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-800">Crescita Margine</div>
<div className="text-xs text-slate-500">Ultimo trimestre</div>
</div>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-400">Media Network</span>
<span className="text-sm font-bold text-slate-900">+25%</span>
</div>
</div>
</div>
</div>
</section>

<section className="sticky top-0 z-10 min-h-screen flex items-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-slate-100" id="problema">
<div className="max-w-7xl mx-auto px-6 w-full py-20">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="grid grid-cols-2 gap-4">

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-64 flex flex-col justify-between">
<iconify-icon className="text-slate-400" icon="solar:pill-linear" width="32"></iconify-icon>
<div>
<div className="text-4xl font-medium text-slate-900 tracking-tight mb-1">30%</div>
<div className="text-sm text-slate-500">Del bilancio assorbito dai farmaci</div>
</div>
</div>

<div className="relative h-64 rounded-2xl overflow-hidden shadow-sm group">
<img alt="Farmaci veterinari" className="w-full h-full object-cover img-hover-zoom" src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
</div>

<div className="relative h-64 rounded-2xl overflow-hidden shadow-sm mt-8 lg:mt-0 group">
<img alt="Cura animali" className="w-full h-full object-cover img-hover-zoom" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
</div>

<div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-64 flex flex-col justify-between shadow-xl mt-8 lg:mt-0">
<iconify-icon className="text-amber-500" icon="solar:wallet-linear" width="32"></iconify-icon>
<div>
<div className="text-4xl font-medium text-white tracking-tight mb-1">15-25%</div>
<div className="text-sm text-slate-400">Risparmio immediato</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
                        Non combattere da solo contro i grandi gruppi.
                    </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                        Mentre le catene consolidano il mercato, il veterinario indipendente perde margine. Il 30% del tuo bilancio è assorbito dal costo dei farmaci. VetUnita inverte questa tendenza aggregando volumi senza aggregare le strutture.
                    </p>
<div className="pt-4">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Stop allo stoccaggio inutile di magazzino</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Stop alla perdita di potere d'acquisto</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="sticky top-0 z-20 min-h-screen flex flex-col justify-center bg-slate-50 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-slate-200" id="liberta">
<div className="max-w-7xl mx-auto px-6 w-full py-20">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3 block">Valori Core</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">Le 5 Libertà di VetUnita</h2>
<p className="mt-4 text-slate-500">Un modello disegnato per proteggere la tua indipendenza, non per comprarla.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-amber-600" icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Libertà Clinica</h3>
<p className="text-sm text-slate-500 leading-relaxed">Nessuna imposizione sui protocolli medici. Sei tu a decidere la cura migliore per i tuoi pazienti.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-amber-600" icon="solar:tag-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Libertà di Marchio</h3>
<p className="text-sm text-slate-500 leading-relaxed">Non cambiamo la tua insegna. La tua identità locale è il tuo asset più prezioso.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 opacity-10">
<img alt="Decoration" className="w-full h-full object-cover rounded-bl-full" src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-amber-600" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Nessun Minimo d'Acquisto</h3>
<p className="text-sm text-slate-500 leading-relaxed">Stop allo stoccaggio forzato. Compra solo ciò che ti serve, quando ti serve.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-amber-600" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Libertà di Gestione</h3>
<p className="text-sm text-slate-500 leading-relaxed">Il tuo gestionale, il tuo staff, le tue regole. Noi ottimizziamo solo i costi esterni.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group lg:col-span-2 relative overflow-hidden">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-slate-600 group-hover:text-amber-600" icon="solar:exit-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Libertà di Uscita</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-md">Nessun vincolo capestro. La nostra forza sta nei risultati che portiamo, non nei contratti che legano. Puoi uscire quando vuoi.</p>
</div>
</div>

<img alt="Uscita" className="absolute right-0 top-0 h-full w-1/3 object-cover opacity-5 mask-image-gradient" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="sticky top-0 z-30 min-h-screen flex items-center bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-slate-100" id="vantaggi">
<div className="max-w-7xl mx-auto px-6 w-full py-20">
<div className="grid lg:grid-cols-2 gap-20">

<div className="space-y-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Come funziona</h2>
<div className="space-y-8 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200"></div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 z-10 text-sm font-medium text-slate-600 shadow-sm">1</div>
<div className="pt-2">
<h4 className="text-base font-medium text-slate-900">Analisi</h4>
<p className="text-sm text-slate-500 mt-1">Studiamo i tuoi volumi d'acquisto attuali senza impegno.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 z-10 text-sm font-medium text-slate-600 shadow-sm">2</div>
<div className="pt-2">
<h4 className="text-base font-medium text-slate-900">Accesso</h4>
<p className="text-sm text-slate-500 mt-1">Ottieni le condizioni esclusive riservate al network.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-amber-500 border border-amber-500 flex items-center justify-center shrink-0 z-10 text-sm font-medium text-white shadow-md shadow-amber-200">3</div>
<div className="pt-2">
<h4 className="text-base font-medium text-slate-900">Risparmio</h4>
<p className="text-sm text-slate-500 mt-1">Migliora il tuo cash-flow immediatamente. Rimborso diretto.</p>
</div>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden h-32 relative border border-slate-200">
<img alt="Stretta di mano" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/60 flex items-center justify-center backdrop-blur-sm">
<div className="text-center">
<span className="text-sm font-semibold text-slate-800">Unisciti a 50+ colleghi</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-10 text-white flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

<img alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<h3 className="text-2xl font-medium tracking-tight mb-6 relative z-10">Vantaggi Misurabili</h3>
<div className="space-y-6 relative z-10">
<div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-amber-400 mt-1" icon="solar:wad-of-money-linear" width="24"></iconify-icon>
<div>
<div className="font-medium text-white">Zero Investimento</div>
<div className="text-sm text-slate-400 mt-1">Nessun costo d'iscrizione. Paghi solo una piccola fee sul risparmio reale ottenuto.</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-amber-400 mt-1" icon="solar:check-read-linear" width="24"></iconify-icon>
<div>
<div className="font-medium text-white">Trasparenza Totale</div>
<div className="text-sm text-slate-400 mt-1">Rimborso finanziario diretto sul conto, niente gadget, punti o cataloghi premi.</div>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/10 relative z-10">
<div className="text-center">
<button className="w-full bg-white text-slate-900 font-medium py-3 rounded-lg hover:bg-slate-100 transition-colors">
                                Inizia a risparmiare oggi
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="sticky top-0 z-40 bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left flex flex-col md:items-start items-center">

<a className="flex items-center gap-3 mb-4 group" href="#">
<svg className="h-8 w-auto" fill="none" viewbox="0 0 115 85" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="15" fill="#95ACB2" r="8"></circle>
<path d="M20 35 L35 70 L50 35" stroke="#D99F34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
<path d="M65 35 V55 C65 65 70 70 80 70 C90 70 95 65 95 55 V35" stroke="#95ACB2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14"></path>
<circle cx="95" cy="15" fill="#D99F34" r="8"></circle>
</svg>
<span className="text-sm font-semibold tracking-[0.3em] text-slate-600 uppercase pt-1">
                        Vetunita
                    </span>
</a>
<p className="text-xs text-slate-500">Il potere dell'acquisto collettivo per la medicina veterinaria italiana.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-2" href="mailto:info.vetunita@gmail.com">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                    info.vetunita@gmail.com
                </a>
</div>
<div className="text-xs text-slate-400">
                © 2023 VetUnita. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
