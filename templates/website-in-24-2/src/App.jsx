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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-neutral-950/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<svg className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
<path className="text-white" d="M10 50 C 10 50 35 25 80 35 C 60 40 45 60 25 60 C 15 60 10 50 10 50 Z" fill="currentColor"></path>
<path d="M40 50 C 40 50 65 25 110 35 C 90 40 75 60 55 60 C 45 60 40 50 40 50 Z" fill="#38BDF8"></path>
<path d="M70 50 C 70 50 95 25 140 35 C 120 40 105 60 85 60 C 75 60 70 50 70 50 Z" fill="#3B82F6"></path>
<path className="text-white" d="M60 25 L 70 15 H 120 C 135 15 145 22 150 28 L 130 35 H 85 L 60 25 Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-white">MediaJet</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#proces">Hoe het werkt</a>
<a className="transition-colors hover:text-white" href="#voordelen">Voordelen</a>
<a className="transition-colors hover:text-white" href="#pricing">Prijzen</a>
</div>
<a className="hidden md:flex px-4 py-2 rounded-full text-xs font-medium transition-colors items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200" href="tel:+31532340712">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                053 234 0712
            </a>

<button className="md:hidden text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute inset-0 bg-grid -z-20 opacity-20 mask-linear"></div>
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium mb-8 animate-fade-in text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Nu beschikbaar voor 24u sprints
            </div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                Uw website in 24 uur.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">Eerst zien, dan betalen.</span>
</h1>
<p className="text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed text-neutral-400">
                Wij nemen het risico weg. MediaJet bouwt uw volledige website binnen één dag. 
                Bent u tevreden? Dan betaalt u €500. Niet tevreden? Geen kosten, geen verplichtingen.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white text-neutral-950 hover:bg-neutral-200" href="tel:+31532340712">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Bel 053 234 0712
                </a>
<a className="sm:w-auto flex items-center justify-center gap-2 transition-colors font-medium w-full h-12 border rounded-full pr-8 pl-8 hover:bg-neutral-900 text-neutral-300 border-neutral-800" href="https://wa.me/31532340712" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    WhatsApp ons
                </a>
</div>

<div className="mt-20 relative max-w-3xl mx-auto group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 to-blue-600"></div>
<div className="relative border rounded-xl p-2 shadow-2xl animate-float bg-neutral-900 border-white/10">
<div className="flex items-center gap-2 px-4 py-3 border-b rounded-t-lg border-white/5 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
</div>
<div className="ml-4 h-5 w-64 rounded-md text-[10px] flex items-center px-2 text-neutral-500 font-mono bg-neutral-800/50">mediajet.io/uw-bedrijf</div>
</div>

<div className="p-6 rounded-b-lg grid grid-cols-12 gap-6 min-h-[300px] bg-neutral-950">
<div className="col-span-8 space-y-4">
<div className="h-8 w-3/4 rounded animate-pulse bg-neutral-800"></div>
<div className="h-4 w-1/2 rounded bg-neutral-800/60"></div>
<div className="flex gap-3 pt-4">
<div className="h-24 w-full border rounded bg-neutral-900 border-neutral-800"></div>
<div className="h-24 w-full border rounded bg-neutral-900 border-neutral-800"></div>
</div>
</div>
<div className="col-span-4 space-y-3">
<div className="h-32 w-full bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-indigo-500 animate-spin iconify--lucide" data-icon="lucide:loader-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="h-4 w-full rounded bg-neutral-800"></div>
<div className="h-4 w-2/3 rounded bg-neutral-800"></div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 border p-4 rounded-lg shadow-xl flex items-center gap-3 bg-neutral-900 border-neutral-700">
<div className="bg-blue-500/20 p-2 rounded-full text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-xs text-neutral-400">Status</div>
<div className="text-sm font-medium text-white">Klaar in 24u</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t bg-neutral-950 border-white/5" id="proces">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Eenvoudig. Risicoloos. Snel.</h2>
<p className="text-neutral-400">Hoe wij uw nieuwe website realiseren.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent z-0 via-neutral-800"></div>

<div className="relative z-10 group">
<div className="border p-1 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] bg-neutral-950 border-neutral-800">
<div className="w-full h-full rounded-xl flex items-center justify-center border bg-neutral-900 border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide text-neutral-100" data-icon="lucide:phone-call" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded border text-[10px] text-neutral-500 mb-2 font-mono border-neutral-800 bg-neutral-900/50">STAP 01</div>
<h3 className="text-lg font-medium mb-2 text-white">Bel ons</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                            Geef uw wensen telefonisch door. Geen lange meetings, geen offertes. Wij gaan direct aan de slag.
                        </p>
</div>
</div>

<div className="relative z-10 group">
<div className="border border-indigo-500/30 p-1 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] bg-neutral-950">
<div className="w-full h-full bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
<svg aria-hidden="true" className="iconify relative z-10 iconify--lucide text-indigo-400" data-icon="lucide:code-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded border border-indigo-500/20 bg-indigo-500/10 text-[10px] mb-2 font-mono text-indigo-300">Binnen 24u</div>
<h3 className="text-lg font-medium mb-2 text-white">Wij Bouwen</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                            Onze designers en developers bouwen een complete, responsive website. Geoptimaliseerd voor conversie en SEO.
                        </p>
</div>
</div>

<div className="relative z-10 group">
<div className="border p-1 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] bg-neutral-950 border-neutral-800">
<div className="w-full h-full rounded-xl flex items-center justify-center border bg-neutral-900 border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide text-neutral-100" data-icon="lucide:scale" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
</div>
<div className="text-center px-4">
<div className="inline-block px-2 py-0.5 rounded border text-[10px] text-neutral-500 mb-2 font-mono border-neutral-800 bg-neutral-900/50">STAP 03</div>
<h3 className="text-lg font-medium mb-2 text-white">U Beslist</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                            Wij leveren op. U beoordeelt het resultaat. Is het mooi? Dan betaalt u €500. Zo niet? Dan scheiden onze wegen kosteloos.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/20" id="voordelen">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6 text-white">Waarom kiezen voor risicoloos?</h2>
<p className="mb-8 leading-relaxed text-neutral-400">
                        Traditionele bureaus vragen 50% aanbetaling voordat u één pixel ziet. Wij draaien het om. Wij geloven in onze kwaliteit, daarom durven we eerst te leveren.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-sm text-white">Geen offertes, geen wachttijd</h4>
<p className="text-neutral-500 text-xs mt-1">Direct actie. Geen weken wachten op een voorstel.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="">
<h4 className="font-medium text-sm text-white">Premium Design &amp; Code</h4>
<p className="text-neutral-500 text-xs mt-1">Wij gebruiken de nieuwste technologieën (Tailwind, Modern HTML) voor een razendsnelle site.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[20px] text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-medium text-sm text-white">Eén vaste prijs</h4>
<p className="text-neutral-500 text-xs mt-1">Altijd €500. Geen verborgen uurtje-factuurtje.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-3xl -z-10 rounded-full"></div>
<div className="border rounded-2xl p-8 shadow-2xl bg-neutral-950 border-neutral-800">
<div className="flex justify-between items-center border-b pb-6 mb-6 border-neutral-800">
<div className="text-sm font-medium text-white">Factuur #concept</div>
<div className="px-2 py-1 rounded text-xs font-mono bg-neutral-900 text-neutral-400">Concept</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">Website Ontwerp &amp; Bouw</span>
<span className="font-medium text-white">€ 500,00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-400">Oplevering</span>
<span className="font-medium text-white">24 Uur</span>
</div>
<div className="flex justify-between items-center text-sm pt-4 border-t border-neutral-800">
<span className="text-neutral-400">Totaal bij tevredenheid</span>
<span className="font-medium text-lg text-indigo-400">€ 500,00</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="py-3 rounded-lg border text-xs font-medium transition-colors flex items-center justify-center gap-2 border-blue-900/30 bg-blue-900/10 text-blue-400 hover:bg-blue-900/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Afwijzen (Gratis)
                            </button>
<button className="py-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2 bg-white text-neutral-950 hover:bg-neutral-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Goedkeuren
                            </button>
</div>
<p className="text-center text-[10px] mt-4 text-neutral-600">Simulatie van uw beslissingsproces</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Klaar om te starten?</h2>
<p className="text-lg mb-10 text-neutral-400">
                Laat ons u overtuigen met resultaat, niet met woorden. <br/>Neem direct contact op.
            </p>
<div className="bg-gradient-to-b border p-8 rounded-3xl relative overflow-hidden group from-neutral-900 to-black border-neutral-800">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-left">
<div className="text-sm font-medium mb-1 text-neutral-400">Volledig pakket</div>
<div className="text-3xl font-medium tracking-tight text-white">€500 <span className="text-sm text-neutral-500 font-normal">eenmalig</span></div>
<p className="text-xs text-neutral-500 mt-2">Alleen te betalen bij 100% tevredenheid.</p>
</div>
<div className="h-12 w-[1px] hidden md:block bg-neutral-800"></div>
<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
<a className="flex-1 px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-neutral-950" href="tel:+31532340712">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Bel Direct
                        </a>
<a className="flex-1 border px-6 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700" href="https://wa.me/31532340712" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            WhatsApp
                        </a>
</div>
</div>
</div>
<p className="mt-8 text-xs text-neutral-600">
                Door te bellen gaat u akkoord met onze werkwijze. Binnen 24 uur presenteren wij het eerste concept.
            </p>
</div>
</section>

<footer className="border-t py-12 border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">

<svg className="h-4 w-auto text-zinc-600" fill="none" viewbox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
<path d="M10 50 C 10 50 35 25 80 35 C 60 40 45 60 25 60 C 15 60 10 50 10 50 Z" fill="currentColor"></path>
<path className="text-zinc-500" d="M40 50 C 40 50 65 25 110 35 C 90 40 75 60 55 60 C 45 60 40 50 40 50 Z" fill="currentColor"></path>
<path className="text-zinc-400" d="M70 50 C 70 50 95 25 140 35 C 120 40 105 60 85 60 C 75 60 70 50 70 50 Z" fill="currentColor"></path>
<path d="M60 25 L 70 15 H 120 C 135 15 145 22 150 28 L 130 35 H 85 L 60 25 Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-medium text-neutral-500">MediaJet © 2024</span>
</div>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="transition-colors hover:text-neutral-400" href="#">Privacy</a>
<a className="transition-colors hover:text-neutral-400" href="#">Voorwaarden</a>
<a className="transition-colors hover:text-neutral-400" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
