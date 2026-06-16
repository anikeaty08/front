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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200 glass-panel">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center rounded-lg text-sm font-semibold tracking-tighter">
                    CS
                </div>
<span className="text-sm font-medium tracking-tight text-stone-600 hidden sm:block">Cocina Saludable</span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#recipes">Recetas</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#bonuses">Bonos</a>
<a className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors shadow-sm" href="#buy">
                    Obtener el Ebook
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 sm:pt-40 sm:pb-32 px-6 border-b border-stone-200 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-stone-50/0 to-stone-50/0 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 animate-fade">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Nueva Versión v1.0</span>
</div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-stone-900 mb-6 leading-[1.1]">
                Come sano.<br/>
<span className="text-stone-400">Cocina en minutos.</span>
</h1>
<p className="text-lg sm:text-xl text-stone-500 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
                30 recetas creadas por chefs para estilos de vida ocupados. Ingredientes integrales, preparación mínima y máximo sabor sin estrés.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-200" href="#buy">
                    Comprar por $17
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-2 text-stone-500 text-xs font-medium px-4">
<iconify-icon className="text-green-600" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
                    Descarga Inmediata en PDF
                </div>
</div>
</div>

<div className="mt-20 max-w-xs mx-auto relative group perspective-1000 animate-fade" style={{animationDelay: '0.2s'}}>
<div className="relative aspect-[3/4] bg-white rounded-r-xl shadow-2xl border border-stone-100 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">

<div className="absolute left-0 top-0 bottom-0 w-3 bg-stone-200 rounded-l-sm border-r border-stone-300"></div>

<div className="absolute inset-0 ml-3 p-8 flex flex-col justify-between bg-stone-50/50">
<div className="space-y-4">
<div className="w-8 h-8 border border-stone-900 rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold">CS</span>
</div>
<h3 className="text-3xl font-medium tracking-tighter leading-none text-stone-900">
                            La<br/>Cocina<br/>Saludable
                        </h3>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:chef-hat" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs text-stone-400 font-medium">Vol. 1 — Rápido y Sano</p>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-r-xl"></div>
</div>

<div className="absolute -bottom-8 left-4 right-4 h-4 bg-stone-900/10 blur-xl rounded-full"></div>
</div>
</header>

<section className="py-12 border-b border-stone-200 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-stone-500 mb-6">Diseñado para cocinas reales</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-stone-800 tracking-tight"><iconify-icon icon="lucide:utensils" width="18"></iconify-icon> CocinaFácil</div>
<div className="flex items-center gap-2 font-semibold text-stone-800 tracking-tight"><iconify-icon icon="lucide:carrot" width="18"></iconify-icon> DiarioOrgánico</div>
<div className="flex items-center gap-2 font-semibold text-stone-800 tracking-tight"><iconify-icon icon="lucide:heart" width="18"></iconify-icon> VidaSana</div>
<div className="flex items-center gap-2 font-semibold text-stone-800 tracking-tight"><iconify-icon icon="lucide:coffee" width="18"></iconify-icon> CaféMañana</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6" id="recipes">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-stone-900 mb-4">¿Qué incluye?</h2>
<p className="text-stone-500 text-lg">Una colección seleccionada de 30 recetas divididas en tres categorías esenciales.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-orange-200 transition-colors shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:sunrise" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Energía Matutina</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">10 desayunos ricos en proteínas y rápidos para empezar el día con energía sostenida.</p>
<ul className="space-y-2 text-xs font-medium text-stone-600">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="12"></iconify-icon> Avena Reposada</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="12"></iconify-icon> Tostadas de Aguacate</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="lucide:check" width="12"></iconify-icon> Batidos de 5 minutos</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-green-200 transition-colors shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:utensils-crossed" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Comidas Principales</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">10 recetas nutritivas para el almuerzo o la cena. Diseñadas para cocinarse en menos de 30 min.</p>
<ul className="space-y-2 text-xs font-medium text-stone-600">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check" width="12"></iconify-icon> Salmón a la sartén</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check" width="12"></iconify-icon> Bowls de Quinua</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check" width="12"></iconify-icon> Salteado de Pavo</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:cookie" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Snacks Inteligentes</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">10 snacks sin culpa para calmar los antojos. Opciones dulces y saladas que te sacian.</p>
<ul className="space-y-2 text-xs font-medium text-stone-600">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check" width="12"></iconify-icon> Bolitas de Energía</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check" width="12"></iconify-icon> Garbanzos Tostados</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check" width="12"></iconify-icon> Corteza de Yogur</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200" id="bonuses">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-xs font-medium mb-6">
<iconify-icon icon="lucide:gift" strokeWidth="1.5" width="14"></iconify-icon>
                    Incluido Gratis
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-stone-900 mb-6">
                    3 Bonos Exclusivos.<br/>
<span className="text-stone-400">Sin costo extra.</span>
</h2>
<p className="text-stone-500 mb-8 max-w-md">Queremos que tengas éxito. Por eso incluimos estas herramientas para ayudarte a planificar, comprar y alimentar a toda la familia.</p>
<div className="space-y-4">

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Planificador Semanal</h4>
<p className="text-xs text-stone-500 mt-1">Un PDF imprimible para organizar tu semana.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:shopping-cart" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Lista de Compras Maestra</h4>
<p className="text-xs text-stone-500 mt-1">Lista categorizada para agilizar las compras.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:baby" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900">5 Recetas para Niños</h4>
<p className="text-xs text-stone-500 mt-1">Verduras escondidas y sabores aprobados.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">

<div className="relative w-full max-w-sm mx-auto h-64">
<div className="absolute top-0 left-0 w-full h-48 bg-white border border-stone-200 rounded-xl shadow-sm z-10 p-6 transform -rotate-3">
<div className="h-2 w-1/3 bg-stone-100 rounded mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-stone-50 rounded"></div>
<div className="h-2 w-full bg-stone-50 rounded"></div>
<div className="h-2 w-5/6 bg-stone-50 rounded"></div>
</div>
<div className="absolute bottom-4 right-4 text-xs font-medium text-stone-400">Hoja de Planificación</div>
</div>
<div className="absolute top-4 left-4 w-full h-48 bg-stone-50 border border-stone-200 rounded-xl shadow-md z-20 p-6 transform rotate-2">
<div className="flex items-center justify-between mb-4">
<div className="h-2 w-1/4 bg-stone-200 rounded"></div>
<iconify-icon className="text-green-500 text-xs" icon="lucide:check-circle"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex gap-2">
<div className="w-3 h-3 border border-stone-300 rounded-sm"></div>
<div className="h-3 w-3/4 bg-stone-200 rounded"></div>
</div>
<div className="flex gap-2">
<div className="w-3 h-3 border border-stone-300 rounded-sm"></div>
<div className="h-3 w-1/2 bg-stone-200 rounded"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 text-xs font-medium text-stone-400">Lista de Compras</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="buy">
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-4xl font-medium tracking-tighter text-stone-900 mb-6">Empieza a comer mejor hoy.</h2>
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xl shadow-stone-200/50 mb-8 inline-block w-full max-w-md">
<div className="flex justify-between items-baseline mb-8 border-b border-stone-100 pb-8">
<div className="text-left">
<span className="block text-sm text-stone-500 font-medium">Pago único</span>
<span className="text-4xl font-medium tracking-tight text-stone-900">$17</span>
<span className="text-stone-400 text-sm">USD</span>
</div>
<div className="text-right">
<span className="inline-block bg-green-50 text-green-700 text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded">Acceso Instantáneo</span>
</div>
</div>
<ul className="space-y-3 text-left mb-8">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900" icon="lucide:book-open" width="16"></iconify-icon>
                        30 Recetas Rápidas y Sanas
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900" icon="lucide:smartphone" width="16"></iconify-icon>
                        PDF para Móvil y Tablet
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900" icon="lucide:gift" width="16"></iconify-icon>
                        Los 3 Bonos Incluidos
                    </li>
</ul>
<button className="w-full bg-stone-900 text-white font-medium py-3 rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group">
                    Descargar Ahora
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<p className="text-xs text-stone-400 mt-4">Pago seguro vía Stripe. Garantía de devolución de 14 días.</p>
</div>
</div>
</section>

<footer className="py-12 border-t border-stone-200 bg-white">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-200 text-stone-600 flex items-center justify-center rounded text-xs font-bold">CS</div>
<span className="text-xs text-stone-500 font-medium">© 2023 Cocina Saludable</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Soporte</a>
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Privacidad</a>
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Términos</a>
</div>
</div>
</footer>

    </>
  );
}
