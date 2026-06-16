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
      

<nav className="fixed z-50 bg-white/80 w-full border-neutral-200 border-b top-0 backdrop-blur-md">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex gap-2 cursor-pointer gap-x-2 gap-y-2 items-center">
<img alt="LeadMetrics Logo" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db66b1f6-9e06-459e-a704-28f57b991b1e_320w.png"/>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-black" href="#" style={{}}>Home</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-black" href="#" style={{}}>Features</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-black" href="#" style={{}}>Integrationen</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-black" href="#" style={{}}>Anwendungen</a>
<a className="transition-colors hover:text-black text-sm font-medium text-neutral-500" href="#">Preise</a>
</div>

<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-neutral-900 hover:text-neutral-600" href="#" style={{}}>Login</a>
<a className="text-sm font-medium px-4 py-2 rounded-sm transition-colors shadow-sm bg-black text-white hover:bg-neutral-800" href="#" style={{}}>
                        Demo buchen
                    </a>
</div>
</div>
</div>
</nav>

<div className="pt-16 border-x max-w-7xl mx-auto min-h-screen relative border-neutral-200 overflow-hidden z-10 bg-transparent" style={{}}>

<div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 w-full h-full z-0">
<div className="border-r h-full hidden md:block border-neutral-100/50" style={{}}></div>
<div className="border-r h-full hidden md:block border-neutral-100/50" style={{}}></div>
<div className="border-r h-full hidden md:block border-neutral-100/50" style={{}}></div>
<div className="border-r h-full hidden md:block border-neutral-100/50" style={{}}></div>
</div>

<section className="z-10 md:pt-32 md:pb-24 text-center pt-20 pr-4 pb-16 pl-4 relative">
<div className="inline-flex gap-2 bg-white/60 backdrop-blur-sm border-neutral-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 items-center" style={{}}>
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-neutral-600 tracking-wide">Erfasse deine B2B Leads richtig</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto text-neutral-900" style={{}}>
                Präzises Lead-Tracking für  
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-500 from-neutral-900 via-neutral-700" style={{}}>maximale Ad Performance.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 font-normal mb-10 max-w-2xl mx-auto leading-relaxed" style={{}}>
                Entwickelt für Agenturen &amp; Performance-Marketer. Schließen Sie die Lücke zwischen Klick und Conversion.
            </p>

<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-xs md:text-sm font-medium text-neutral-600" style={{}}>
<div className="flex items-center gap-2 px-3 py-1.5 border rounded-sm bg-white/50 backdrop-blur-sm border-neutral-200" style={{}}>
<svg className="text-lg text-indigo-600" data-icon-set="lucide" data-lucide="shield-check" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                    DSGVO Konform
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 border rounded-sm bg-white/50 backdrop-blur-sm border-neutral-200" style={{}}>
<svg className="text-lg text-cyan-600" data-icon-set="lucide" data-lucide="flag" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Entwickelt in Österreich
                </div>
<div className="flex items-center gap-2 px-3 py-1.5 border rounded-sm bg-white/50 backdrop-blur-sm border-neutral-200" style={{}}>
<svg className="text-lg text-blue-600" data-icon-set="lucide" data-lucide="server" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
                    Gehostet in Deutschland
                </div>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="sm:w-auto flex gap-2 transition-all hover:border-neutral-400 hover:text-neutral-900 font-medium text-neutral-700 bg-white/80 w-full border-neutral-200 border rounded-sm pt-3 pr-6 pb-3 pl-6 shadow-sm backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-center">
<svg className="" data-icon-set="lucide" data-lucide="play-circle" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Demo Video ansehen
                </button>
<button className="sm:w-auto transition-all hover:shadow-xl hover:-translate-y-0.5 hover:bg-neutral-800 font-medium text-white bg-black w-full rounded-sm pt-3 pr-6 pb-3 pl-6 shadow-lg">Software Demo buchen</button>
</div>
</section>

<section className="bg-neutral-50/50 z-10 border-neutral-200 border-t relative backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-4 py-12">

<div className="relative rounded-sm shadow-2xl border overflow-hidden aspect-video group cursor-pointer mb-16 border-neutral-200 bg-white" style={{}}>
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black rounded-sm overflow-hidden">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/XLk70DHoflg?rel=0" title="Product Demo"></iframe>
</div>
</div>

<div className="w-full overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r to-transparent from-neutral-50" style={{}}></div>
<div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l to-transparent from-neutral-50" style={{}}></div>
<div className="flex w-[200%] animate-scroll">

<div className="flex justify-around w-1/2 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
<span className="text-xl font-bold tracking-tighter">ACME Corp.</span>
<span className="text-xl font-bold tracking-tighter flex items-center gap-1"><svg className="" data-icon-set="lucide" data-lucide="hexagon" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Polymath</span>
<span className="text-xl font-bold tracking-tighter">STRATOS</span>
<span className="text-xl font-bold tracking-tighter">BoltShift</span>
<span className="text-xl font-bold tracking-tighter">Lumina</span>
<span className="text-xl font-bold tracking-tighter">FocalPoint</span>
</div>

<div className="flex justify-around w-1/2 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
<span className="text-xl font-bold tracking-tighter">ACME Corp.</span>
<span className="text-xl font-bold tracking-tighter flex items-center gap-1"><svg className="" data-icon-set="lucide" data-lucide="hexagon" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Polymath</span>
<span className="text-xl font-bold tracking-tighter">STRATOS</span>
<span className="text-xl font-bold tracking-tighter">BoltShift</span>
<span className="text-xl font-bold tracking-tighter">Lumina</span>
<span className="text-xl font-bold tracking-tighter">FocalPoint</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden bg-white border-neutral-200 border-b pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col justify-center lg:pr-8">
<h2 className="md:text-5xl text-4xl font-semibold text-neutral-900 tracking-tight mb-6" style={{}}>Bessere Daten. Bessere Ads.</h2>
<h3 className="text-lg font-normal text-neutral-600 mb-6 leading-relaxed">
            Unsere Conversion API sendet deine Leads in Echtzeit an Meta, Google, TikTok, LinkedIn und Microsoft – ganz ohne manuelles Setup.
        </h3>
<p className="text-neutral-500 leading-relaxed mb-8 max-w-md">
            LeadMetrics verknüpft Website-Daten, Formulare und Zahlungsinformationen mit deinen Ad-Plattformen – für präzisere Attribution, mehr Conversions und gezielteres Retargeting.
        </p>
<div className="">
<button className="hover:bg-sky-200 transition-colors text-sm font-medium text-slate-50 bg-zinc-950 border-sky-200/50 border rounded-none px-6 py-3 shadow-sm">
                Mehr zur Conversion API
            </button>
</div>
</div>

<div className="overflow-hidden flex select-none bg-neutral-50/30 w-full h-[500px] border-neutral-100 border rounded-2xl relative items-center justify-center">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<svg className="z-10 relative w-[581px] h-[498px]" data-icon-replaced="true" fill="none" strokeWidth="3" style={{width: '581px', height: '498px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="140%" id="shadow-card" width="140%" x="-20%" y="-20%">
<fedropshadow dx="0" dy="8" flood-color="#000000" flood-opacity="0.08" stddeviation="12"></fedropshadow>
</filter>
<lineargradient id="gradient-line" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stop-color="#38bdf8" stop-opacity="0.1"></stop>
<stop offset="0.5" stop-color="#38bdf8" stop-opacity="1"></stop>
<stop offset="1" stop-color="#38bdf8" stop-opacity="0.1"></stop>
</lineargradient>
</defs>

<g className="" fill="none" strokeWidth="1.5">

<path d="M 180 250 L 260 250" id="path-source" stroke="#bae6fd" stroke-dasharray="4 4"></path>


<path className="" d="M 340 250 C 400 250, 420 110, 500 110" id="path-m" stroke="url(#gradient-line)"></path>

<path className="" d="M 340 250 C 400 250, 420 180, 500 180" id="path-g" stroke="url(#gradient-line)"></path>

<path className="" d="M 340 250 L 500 250" id="path-t" stroke="url(#gradient-line)"></path>

<path className="" d="M 340 250 L 500 250" id="path-t-2" stroke="url(#gradient-line)"></path>

<path className="" d="M 340 250 C 400 250, 420 320, 500 320" id="path-l" stroke="url(#gradient-line)"></path>

<path className="" d="M 340 250 C 400 250, 420 390, 500 390" id="path-ms" stroke="url(#gradient-line)"></path>
</g>

<circle fill="#0ea5e9" r="3">
<animatemotion calcmode="linear" dur="2s" repeatcount="indefinite">
<mpath href="#path-source"></mpath>
</animatemotion>
</circle>
<circle className="" fill="#0ea5e9" r="2.5">
<animatemotion begin="0.5s" calcmode="linear" dur="2s" repeatcount="indefinite">
<mpath href="#path-m"></mpath>
</animatemotion>
</circle>
<circle className="" fill="#0ea5e9" r="2.5">
<animatemotion begin="0.7s" calcmode="linear" dur="2s" repeatcount="indefinite">
<mpath href="#path-g"></mpath>
</animatemotion>
</circle>
<circle className="" fill="#0ea5e9" r="2.5">
<animatemotion begin="0.6s" calcmode="linear" dur="1.8s" repeatcount="indefinite">
<mpath href="#path-t"></mpath>
</animatemotion>
</circle>

<circle className="" fill="#0ea5e9" r="2.5">
<animatemotion begin="1.1s" calcmode="linear" dur="1.9s" repeatcount="indefinite">
<mpath href="#path-t-2"></mpath>
</animatemotion>
</circle>
<circle className="" fill="#0ea5e9" r="2.5">
<animatemotion begin="0.8s" calcmode="linear" dur="2.1s" repeatcount="indefinite">
<mpath href="#path-l"></mpath>
</animatemotion>
</circle>
<circle fill="#0ea5e9" r="2.5">
<animatemotion begin="0.9s" calcmode="linear" dur="2.3s" repeatcount="indefinite">
<mpath href="#path-ms"></mpath>
</animatemotion>
</circle>

<foreignobject className="" height="140" width="140" x="40" y="180">
<div className="p-1 w-full h-full">
<div className="w-full h-full bg-white rounded-lg shadow-lg border border-neutral-100 flex flex-col overflow-hidden relative group transition-transform hover:-translate-y-1 duration-300">

<div className="h-6 bg-neutral-50/80 border-b border-neutral-100 flex items-center px-2.5 gap-1.5 backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-red-300/80"></div>
<div className="w-2 h-2 rounded-full bg-amber-300/80"></div>
<div className="w-2 h-2 rounded-full bg-green-300/80"></div>
</div>

<div className="p-3 flex flex-col gap-2.5">
<div className="flex justify-between items-center">
<div className="w-16 h-2 bg-neutral-200 rounded-full"></div>
<div className="w-4 h-2 bg-neutral-100 rounded-full"></div>
</div>
<div className="flex gap-2 h-full">
<div className="w-8 h-full bg-neutral-50 rounded-sm border border-neutral-50"></div>
<div className="flex-1 flex flex-col gap-2">
<div className="w-full h-12 bg-neutral-100/50 rounded-sm border border-dashed border-neutral-200"></div>
<div className="w-3/4 h-2 bg-neutral-100 rounded-full"></div>
<div className="w-1/2 h-2 bg-neutral-100 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-2 right-2 bg-neutral-900 text-white shadow-lg shadow-neutral-900/20 rounded-md px-2 py-1 flex items-center gap-1.5 border border-neutral-700/50">
<svg className="text-sky-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
<span className="text-[9px] font-mono font-medium tracking-tight">Script Active</span>
</div>
</div>
</div>
</foreignobject>

<foreignobject className="" height="80" width="80" x="260" y="210">
<div className="w-full h-full flex items-center justify-center">
<div className="relative w-16 h-16 bg-white rounded-2xl shadow-xl shadow-sky-900/5 border border-white flex items-center justify-center z-10">
<img alt="LM" className="w-9 h-9 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3deb3670-c4d4-4113-88f9-8663428aed36_320w.png"/>
</div>
</div>
</foreignobject>


<foreignobject className="" height="40" width="40" x="500" y="90">
<div className="flex hover:scale-110 transition-transform duration-200 hover:shadow-lg bg-white w-10 h-10 border-neutral-100 border rounded-xl shadow-md items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="#0668E1" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</div>
</foreignobject>

<foreignobject className="" height="40" width="40" x="500" y="160">
<div className="w-10 h-10 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-lg">
<svg className="w-5 h-5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path className="" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path className="" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
</div>
</foreignobject>

<foreignobject className="" height="40" width="40" x="500" y="230">
<div className="w-10 h-10 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-lg">
<svg className="w-5 h-5" fill="#000000" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.09v8.32c0 2.87-1.6 5.54-4.21 6.53-2.58.98-5.5.34-7.35-1.64-1.85-1.98-2.22-4.95-1-7.29 1.09-2.08 3.38-3.41 5.72-3.41v4c-1.11 0-2.12.52-2.73 1.44-.61.92-.61 2.13 0 3.06.61.92 1.62 1.44 2.73 1.44 1.77 0 3.21-1.43 3.21-3.21V.02h-.48z"></path></svg>
</div>
</foreignobject>

<foreignobject height="40" width="40" x="500" y="300">
<div className="w-10 h-10 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-lg">
<svg className="w-5 h-5" fill="#0077b5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</div>
</foreignobject>

<foreignobject className="" height="40" width="40" x="500" y="370">
<div className="w-10 h-10 bg-white rounded-xl shadow-md border border-neutral-100 flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:shadow-lg">
<svg className="w-5 h-5" viewbox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><path className="" d="M1 1h10v10H1z" fill="#f35325"></path><path d="M12 1h10v10H12z" fill="#81bc06"></path><path d="M1 12h10v10H1z" fill="#05a6f0"></path><path d="M12 12h10v10H12z" fill="#ffba08"></path></svg>
</div>
</foreignobject>
</svg>
</div>
</div>
</div>
</section>

<section className="z-10 bg-white border-neutral-200 border-t border-b pt-24 pb-24 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="animate-in text-center mb-16 max-w-3xl mx-auto">
<span className="inline-flex items-center gap-1.5 ring-inset uppercase text-xs font-medium text-slate-600 tracking-wide bg-blue-50 ring-blue-600/20 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3">
<svg className="" data-icon-set="lucide" data-lucide="plug-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9 2v6m6-6v6m-3 9v5M5 8h14M6 11V8h12v3a6 6 0 1 1-12 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Integrations
                    </span>
<h2 className="md:text-4xl text-4xl font-semibold text-neutral-900 tracking-tight mt-6 mb-4" style={{}}>Erstelle deine zentrale Tracking Infrastruktur</h2>
<p className="leading-relaxed text-lg text-neutral-500 max-w-2xl mr-auto ml-auto">Integriere LeadMetrics nahtlos in deinen Tool Stack.</p>
</div>

<div className="max-w-4xl mt-12 mr-auto mb-16 ml-auto relative">

<div className="sm:h-80 overflow-hidden w-full h-64 mt-12 relative">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[896px] h-[320px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '896px', height: '320px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 900 360">
<defs>
<filter height="200%" id="glow-light" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<feflood flood-color="#0ea5e9" flood-opacity="0.4" result="color"></feflood>
<fecomposite in="color" in2="blur" operator="in" result="glow"></fecomposite>
<femerge>
<femergenode in="glow"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<circle cx="150" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle className="" cx="270" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle className="" cx="390" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="510" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="630" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="750" cy="30" fill="#0ea5e9" filter="url(#glow-light)" r="5">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="0s" dur="3s" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" dur="3s" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" dur="3s" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" dur="3s" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" dur="3s" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#0284c7" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600', opacity: '0.8'}}>
<animate attributename="stroke-dashoffset" begin="1s" dur="3s" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center justify-center bg-white w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3deb3670-c4d4-4113-88f9-8663428aed36_1600w.png)] bg-contain border-sky-200 border-2 ring-sky-50 ring-1 rounded shadow-[0_0_30px_rgba(14,165,233,0.25)]">
</span>
</div>
</div>
</div>

<div className="animate-in stagger-delay-3 mx-auto mt-12 max-w-4xl border-t border-dashed border-neutral-200 pt-10">
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm">
<div className="inline-flex items-center gap-2.5 text-neutral-600 font-medium">
<svg className="w-[18px] h-[18px] text-slate-500" data-icon-replaced="true" data-icon-set="lucide" data-lucide="workflow" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
<span className="">Instant sync</span>
</div>
<div className="hidden sm:block w-px h-4 bg-neutral-200"></div>
<div className="inline-flex items-center gap-2.5 text-neutral-600 font-medium">
<svg className="w-[18px] h-[18px] text-slate-600" data-icon-replaced="true" data-icon-set="lucide" data-lucide="shield-check" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path className="" d="m9 12l2 2l4-4"></path></g></svg>
<span>Enterprise security</span>
</div>
<div className="hidden sm:block w-px h-4 bg-neutral-200"></div>
<div className="inline-flex items-center gap-2.5 text-neutral-600 font-medium">
<svg className="w-[18px] h-[18px] text-slate-500" data-icon-replaced="true" data-icon-set="lucide" data-lucide="gauge" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">Real-time updates</span>
</div>
<div className="hidden sm:block w-px h-4 bg-neutral-200"></div>
<div className="inline-flex items-center gap-2.5 text-neutral-600 font-medium">
<svg className="w-[18px] h-[18px] text-slate-500" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mouse-pointer-click" height="18" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="">One-click setup</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 bg-[#F8F9FB] border-b border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#13213C] mb-4 leading-tight">
                            Turn real-time tracking into
                            smarter decisions with LeadMetrics
                        </h2>
<p className="text-lg md:text-xl text-[#13213C]/80 font-medium">
                            Combine ad, funnel, and CRM data for unbeatable performance insights.
                        </p>
</div>
<div className="max-w-[400px] md:text-right">
<p className="text-neutral-500 leading-relaxed" style={{}}>
                            Understand which ads work, automate reports, and optimize your funnels in real-time.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-fr gap-x-8 gap-y-8">

<div className="feature-card group col-span-1 md:col-span-4 bg-white rounded-none border border-white/50 p-8 flex flex-col justify-between overflow-hidden relative">
<div className="relative z-10">
<h3 className="text-xl font-bold text-[#13213C] mb-3">One Code Tracking</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6" style={{}}>
                                One single script – full control. Track all sessions, clicks, and custom events without complexity.
                            </p>
</div>

<div className="mt-4 bg-[#F8F9FB] rounded-none border border-neutral-100 p-4 shadow-inner relative overflow-hidden h-40" style={{}}>
<div className="space-y-3 font-mono text-xs">
<div className="flex items-center justify-between p-2 bg-white rounded-none shadow-sm border border-neutral-100 translate-x-2 opacity-60" style={{}}>
<span className="text-neutral-400" style={{}}>09:41:12</span>
<span className="text-blue-500 font-semibold">Page View</span>
<span className="text-neutral-400" style={{}}>/pricing</span>
</div>
<div className="flex items-center justify-between p-2 bg-white rounded-none shadow-sm border border-neutral-100 -translate-x-1" style={{}}>
<span className="text-neutral-500" style={{}}>09:42:05</span>
<span className="text-[#13213C] font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-none bg-[#B1FC03]"></span> Form Submit</span>
<span className="text-neutral-500" style={{}}>Lead Gen</span>
</div>
<div className="flex items-center justify-between p-2 bg-white rounded-none shadow-sm border border-neutral-100 translate-x-1 opacity-80" style={{}}>
<span className="text-neutral-500" style={{}}>09:42:10</span>
<span className="text-purple-500 font-semibold">Custom Event</span>
<span className="text-neutral-500" style={{}}>Video Play</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FB] via-transparent to-transparent pointer-events-none"></div>
</div>
</div>

<div className="feature-card group col-span-1 md:col-span-4 flex flex-col overflow-hidden bg-white border-white/50 border rounded-none pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10">
<h3 className="text-xl font-bold text-[#13213C] mb-3">Conversion API</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6" style={{}}>
                                Automatically forward your events to Meta, TikTok &amp; Google – with perfect precision.
                            </p>
</div>

<div className="mt-4 h-40 flex items-center justify-center relative">
<div className="absolute inset-x-0 h-[1px] bg-neutral-100 top-1/2 -translate-y-1/2" style={{}}></div>
<div className="flex items-center justify-between w-full px-2 relative z-10">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 bg-[#13213C] rounded-none flex items-center justify-center text-white shadow-lg">
<svg className="" data-icon-set="lucide" data-lucide="activity" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[10px] font-semibold text-neutral-400 uppercase" style={{}}>Stream</span>
</div>
<svg className="text-neutral-300 animate-pulse" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="flex gap-2">
<div className="w-8 h-8 bg-blue-50 rounded-none flex items-center justify-center border border-blue-100 shadow-sm hover:scale-110 transition-transform">
<svg className="" data-icon-set="logos" data-logos="facebook" height="16" style={{}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" fill="#1877F2"></path><path d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" fill="#FFF"></path></svg>
</div>
<div className="w-8 h-8 bg-black rounded-none flex items-center justify-center border border-neutral-800 shadow-sm hover:scale-110 transition-transform text-white" style={{}}>
<svg className="" data-icon-set="logos" data-logos="tiktok-icon" height="16" style={{}} viewbox="0 0 256 290" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9" fill="#FF004F"></path><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"></path><path d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833" fill="#00F2EA"></path></svg>
</div>
<div className="w-8 h-8 bg-white rounded-none flex items-center justify-center border border-neutral-200 shadow-sm hover:scale-110 transition-transform" style={{}}>
<svg className="" data-icon-set="logos" data-logos="google-icon" height="14" style={{}} viewbox="0 0 256 262" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>
</div>
</div>
</div>

<div className="text-[9px] group-hover:opacity-100 transition-opacity -translate-y-1 font-bold text-[#13213C] bg-blue-200 opacity-0 rounded-none px-2 py-0.5 absolute top-2 right-1/2 shadow-sm translate-x-1/2">
                                Synced via EventSync
                            </div>
</div>
</div>

<div className="feature-card group col-span-1 md:col-span-4 flex flex-col overflow-hidden bg-white border-white/50 border-0 rounded-none pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10">
<h3 className="text-xl font-bold text-[#13213C] mb-3">Ad Performance</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6" style={{}}>
                                Compare ROAS, CPL, CTR, and other KPIs across platforms and creatives.
                            </p>
</div>

<div className="mt-4 bg-white rounded-none border border-neutral-100 shadow-sm overflow-hidden text-[10px]" style={{}}>
<table className="w-full text-left">
<thead className="bg-neutral-50 border-b border-neutral-100 text-neutral-400 uppercase tracking-wider" style={{}}>
<tr className="">
<th className="p-2 font-medium">Campaign</th>
<th className="p-2 font-medium">ROAS</th>
<th className="p-2 font-medium">CPL</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-50 text-[#13213C]" style={{}}>
<tr className="">
<td className="p-2 font-medium">Retargeting Q3</td>
<td className="p-2 text-cyan-600 font-bold">4.2x</td>
<td className="p-2">€12.50</td>
</tr>
<tr className="bg-[#B1FC03]/10">
<td className="p-2 font-medium flex items-center gap-1">
                                            Lookalike 1%
                                            <span className="w-1.5 h-1.5 rounded-none bg-[#B1FC03]"></span>
</td>
<td className="p-2 text-cyan-700 font-bold flex items-center gap-1">6.8x <svg className="text-[8px]" data-icon-set="lucide" data-lucide="arrow-up" height="8" style={{}} viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></td>
<td className="p-2 text-cyan-700 font-bold">€8.20</td>
</tr>
<tr className="">
<td className="p-2 font-medium">Broad Prospect</td>
<td className="p-2">1.8x</td>
<td className="p-2">€24.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="feature-card group col-span-1 md:col-span-6 bg-white rounded-none border border-white/50 p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
<div className="flex-1 relative z-10">
<h3 className="text-xl font-bold text-[#13213C] mb-3">Reporting Automation</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6" style={{}}>
                                Build beautiful reports for clients and teams – fully automated and on-brand.
                            </p>
</div>

<div className="flex-1 w-full max-w-[240px] relative perspective-1000">
<div className="bg-white rounded-none border border-neutral-200 shadow-md p-4 rotate-3 group-hover:rotate-0 transition-all duration-500 origin-bottom-right">
<div className="h-2 w-1/3 bg-neutral-200 mb-4 rounded-sm"></div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-neutral-100 rounded-sm"></div>
<div className="h-1.5 w-5/6 bg-neutral-100 rounded-sm"></div>
<div className="h-1.5 w-4/6 bg-neutral-100 rounded-sm"></div>
</div>
<div className="mt-4 flex gap-2">
<div className="flex-1 h-12 bg-indigo-50 rounded-sm border border-indigo-100"></div>
<div className="flex-1 h-12 bg-neutral-50 rounded-sm border border-neutral-100"></div>
</div>
</div>
</div>
</div>

<div className="feature-card group col-span-1 md:col-span-6 bg-white rounded-none border border-white/50 p-8 flex flex-col md:flex-row-reverse gap-8 items-center overflow-hidden relative">
<div className="flex-1 relative z-10">
<h3 className="text-xl font-bold text-[#13213C] mb-3">100% GDPR Compliant</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6" style={{}}>
                                Hosted on German servers with full data sovereignty. No data is shared with third parties without consent.
                            </p>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm relative group-hover:scale-110 transition-transform duration-500">
<svg className="text-4xl text-emerald-600 relative z-10" data-icon-set="lucide" data-lucide="shield-check" height="36" style={{}} viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<div className="absolute inset-0 bg-white/50 rounded-full animate-ping opacity-20"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-200 relative overflow-hidden z-10">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#13213C] mb-6">
                        Noch mehr automatisieren.Noch smarter skalieren.
                    </h2>
<p className="text-xl text-neutral-600 font-light mb-6">
                        Verbinde LeadMetrics mit Zapier oder Make – und automatisiere alles, was dich bisher Zeit gekostet hat.
                    </p>
<p className="text-base text-neutral-500 leading-relaxed max-w-2xl mx-auto">
                        Egal ob Leads aus Formularen, Zahlungsdaten von Stripe oder CRM-Updates: Mit nur wenigen Klicks richtest du wiederverwendbare Automationen ein, die deine Daten vollautomatisch dorthin bringen, wo du sie brauchst.
                    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">

<div className="order-2 lg:order-1 flex flex-col gap-2">

<div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200/60 cursor-default">
<div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-sky-600 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-100/50 transition-all duration-300">
<svg className="lucide lucide-table-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
</div>
<div className="pt-1">
<h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:text-sky-900 transition-colors">Lead-Erfassung</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">Automatisch aus Typeform, HeyFlow oder Google Sheets</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200/60 cursor-default">
<div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-sky-600 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-100/50 transition-all duration-300">
<svg className="lucide lucide-credit-card" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="pt-1">
<h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:text-sky-900 transition-colors">Zahlungsdaten-Import</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">Echtzeit-Import aus Stripe oder PayPal</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200/60 cursor-default">
<div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-sky-600 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-100/50 transition-all duration-300">
<svg className="lucide lucide-refresh-cw" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div className="pt-1">
<h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:text-sky-900 transition-colors">CRM-Synchronisation</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">Automatische Statuswechsel &amp; Deal-Updates</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200/60 cursor-default">
<div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-sky-600 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-100/50 transition-all duration-300">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="pt-1">
<h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:text-sky-900 transition-colors">Follow-up Automationen</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">Personalisierte Mailflows &amp; Sequenzen</p>
</div>
</div>

<div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50 border border-transparent hover:border-neutral-200/60 cursor-default">
<div className="shrink-0 w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-sky-600 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md group-hover:shadow-sky-100/50 transition-all duration-300">
<svg className="lucide lucide-bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="pt-1">
<h3 className="text-base font-semibold text-neutral-900 mb-1 group-hover:text-sky-900 transition-colors">Kampagnen-Metriken</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">Daten-Matching &amp; Reporting in Echtzeit</p>
</div>
</div>
</div>

<div className="flex overflow-hidden order-1 lg:order-2 bg-[#F8F9FB] w-full h-[400px] border-neutral-100 border rounded-sm relative items-center justify-center">

<div className="absolute inset-0 opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<style>
        @keyframes flow-dash {
            to { stroke-dashoffset: -24; }
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; border-width: 2px; }
            100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
        }
        .animate-flow { animation: flow-dash 1s linear infinite; }
        .animate-ring { animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
    </style>

<svg className="absolute inset-0 w-full h-full pointer-events-none" height="100%" preserveaspectratio="xMidYMid meet" viewbox="0 0 500 400" width="100%">

<defs>
<filter height="140%" id="glow-blue" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path d="M50,80 C150,80 150,200 250,200" fill="none" stroke="#e0f2fe" strokeWidth="2"></path>
<path d="M50,200 C150,200 150,200 250,200" fill="none" stroke="#e0f2fe" strokeWidth="2"></path>
<path d="M50,320 C150,320 150,200 250,200" fill="none" stroke="#e0f2fe" strokeWidth="2"></path>
<path d="M250,200 C350,200 350,200 450,200" fill="none" stroke="#e0f2fe" strokeWidth="2"></path>

<path className="animate-flow opacity-30" d="M50,80 C150,80 150,200 250,200" fill="none" stroke="#38bdf8" stroke-dasharray="4 8" strokeWidth="2"></path>
<path className="animate-flow opacity-30" d="M50,200 C150,200 150,200 250,200" fill="none" stroke="#38bdf8" stroke-dasharray="4 8" strokeWidth="2" style={{animationDelay: '0.3s'}}></path>
<path className="animate-flow opacity-30" d="M50,320 C150,320 150,200 250,200" fill="none" stroke="#38bdf8" stroke-dasharray="4 8" strokeWidth="2" style={{animationDelay: '0.6s'}}></path>
<path className="animate-flow opacity-60" d="M250,200 C350,200 350,200 450,200" fill="none" stroke="#38bdf8" stroke-dasharray="4 8" strokeWidth="2"></path>


<circle fill="#0ea5e9" filter="url(#glow-blue)" r="3">
<animatemotion calcmode="linear" dur="3s" path="M50,80 C150,80 150,200 250,200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>

<circle fill="#0ea5e9" filter="url(#glow-blue)" r="3">
<animatemotion begin="1s" calcmode="linear" dur="3s" path="M50,200 C150,200 150,200 250,200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1s" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>

<circle fill="#0ea5e9" filter="url(#glow-blue)" r="3">
<animatemotion begin="2s" calcmode="linear" dur="3s" path="M50,320 C150,320 150,200 250,200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="2s" dur="3s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>

<circle fill="#0ea5e9" filter="url(#glow-blue)" r="3">
<animatemotion begin="0.5s" calcmode="linear" dur="1.5s" path="M250,200 C350,200 350,200 450,200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="0.5s" dur="1.5s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
<circle fill="#0ea5e9" filter="url(#glow-blue)" r="3">
<animatemotion begin="1.25s" calcmode="linear" dur="1.5s" path="M250,200 C350,200 350,200 450,200" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" begin="1.25s" dur="1.5s" keytimes="0;0.1;0.9;1" repeatcount="indefinite" values="0;1;1;0"></animate>
</circle>
</svg>

<div className="z-10 group hover:border-blue-200 transition-colors bg-white border-neutral-100 border rounded-sm pt-3 pr-3 pb-3 pl-3 absolute top-[60px] left-6 shadow-sm">
<div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<svg className="group-hover:text-green-600 transition-colors duration-300 w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="file-spreadsheet" height="24" strokeWidth="2" style={{color: 'rgb(22, 163, 74)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline fill="none" points="14 2 14 8 20 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><path d="M8 13h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M8 17h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M14 13h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path className="" d="M14 17h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-sm border border-neutral-100 shadow-sm z-10 group hover:border-blue-200 transition-colors">
<div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<svg className="text-neutral-400 group-hover:text-blue-600 transition-colors duration-300" data-icon-set="lucide" data-lucide="credit-card" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="14" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="20" x="2" y="5"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="absolute left-6 bottom-[60px] bg-white p-3 rounded-sm border border-neutral-100 shadow-sm z-10 group hover:border-blue-200 transition-colors">
<div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-purple-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<svg className="text-neutral-400 group-hover:text-purple-600 transition-colors duration-300" data-icon-set="lucide" data-lucide="users" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 items-center bg-white p-4 rounded-full border-2 border-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.2)]">

<div className="bg-center [&amp;+svg]:hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ae0d285-f6f7-476e-9698-2259104e5379_320w.png)] bg-cover border rounded-full absolute top-0 right-0 bottom-0 left-0 scale-125 animate-pulse"></div>
<svg className="text-sky-500 animate-[spin_3s_linear_infinite]" data-icon-set="lucide" data-lucide="settings-2" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M14 17H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="17" cy="17" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="7" cy="7" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>

<div className="-translate-y-1/2 z-10 transition-all duration-300 hover:scale-110 hover:shadow-sky-500/20 bg-white border-neutral-200 border rounded-sm pt-3 pr-3 pb-3 pl-3 absolute top-1/2 right-6 shadow-lg">
<img alt="LM" className="w-8 h-8 object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3deb3670-c4d4-4113-88f9-8663428aed36_320w.png"/>
</div>
</div>
</div>

<div className="flex gap-12 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-80 mb-16 grayscale gap-x-12 gap-y-12 items-center justify-center">
<img alt="Zapier" className="w-auto h-7 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b29a992-83bb-4def-9d7d-f1b57f57fb97_320w.png"/>
<img alt="Make" className="bg-center w-auto h-8 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/761486a4-16c0-4eb8-a9f7-098b7c11c2af_800w.jpg"/>
</div>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 text-sm font-semibold text-slate-50 tracking-tight bg-zinc-950 rounded-sm px-8 py-3">
                        Jetzt verbinden
                    </button>
<a className="group flex items-center gap-2 text-[#13213C] font-medium text-sm transition-all px-4 py-2" href="#">
                        Mehr über Automationen erfahren
                        <svg className="group-hover:translate-x-1 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="">
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<img alt="LeadMetrics" className="h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db66b1f6-9e06-459e-a704-28f57b991b1e_320w.png"/>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                        Advanced tracking solution for data-driven performance marketers.
                    </p>
</div>
<div className="flex gap-16 text-sm text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Product</span>
<a className="hover:text-black" href="#">Features</a>
<a className="hover:text-black" href="#">Pricing</a>
<a className="hover:text-black" href="#">API</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Company</span>
<a className="hover:text-black" href="#">About</a>
<a className="hover:text-black" href="#">Blog</a>
<a className="hover:text-black" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Legal</span>
<a className="hover:text-black" href="#">Privacy</a>
<a className="hover:text-black" href="#">Terms</a>
<a className="hover:text-black" href="#">Imprint</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-100 text-xs text-neutral-400 flex justify-between">
<span>© 2024 LeadMetrics GmbH. All rights reserved.</span>
<div className="flex gap-4">
<svg className="hover:text-black cursor-pointer" data-icon-set="lucide" data-lucide="twitter" height="16" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg className="hover:text-black cursor-pointer" data-icon-set="lucide" data-lucide="linkedin" height="16" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"></svg></div></div></footer></div>
    </>
  );
}
