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



        function switchPage(pageId) {
            // 1. Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('page-enter');
            });

            // 2. Show target page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('page-enter');
            }

            // 3. Update Nav State
            const navButtons = document.querySelectorAll('.nav-btn');
            navButtons.forEach(btn => {
                if(btn.dataset.page === pageId) {
                    btn.setAttribute('data-active', 'true');
                    btn.classList.remove('text-slate-500');
                    btn.classList.add('text-emerald-700', 'bg-emerald-50/50');
                } else {
                    btn.setAttribute('data-active', 'false');
                    btn.classList.add('text-slate-500');
                    btn.classList.remove('text-emerald-700', 'bg-emerald-50/50');
                }
            });

            // 4. Scroll to top
            window.scrollTo(0, 0);
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group cursor-pointer" href="#" onclick="switchPage('home'); return false;">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-700 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:store" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">MERCEARIA SACRISTÃO</span>
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-0.5">Casa Duarte</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1">
<button className="nav-btn px-4 py-2 text-sm font-medium hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 data-[active=true]:text-emerald-700 data-[active=true]:bg-emerald-50/50 text-emerald-700 bg-emerald-50/50" data-active="true" data-page="home" onclick="switchPage('home')">Início</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 data-[active=true]:text-emerald-700 data-[active=true]:bg-emerald-50/50" data-active="false" data-page="about" onclick="switchPage('about')">Sobre</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 data-[active=true]:text-emerald-700 data-[active=true]:bg-emerald-50/50" data-active="false" data-page="products" onclick="switchPage('products')">Produtos</button>
<button className="nav-btn ml-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 data-[active=true]:text-emerald-700 data-[active=true]:bg-emerald-50/50" data-active="false" data-page="contact" onclick="switchPage('contact')">Contactos</button>
</div>

<button className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col gap-2" id="mobile-menu">
<button className="text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onclick="switchPage('home'); toggleMobileMenu()">Início</button>
<button className="text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onclick="switchPage('about'); toggleMobileMenu()">Sobre</button>
<button className="text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onclick="switchPage('products'); toggleMobileMenu()">Produtos</button>
<button className="text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onclick="switchPage('contact'); toggleMobileMenu()">Contactos</button>
</div>
</nav>

<main className="flex-grow pt-16" id="main-content">

<div className="page-section page-enter" id="page-home">

<section className="md:pt-24 md:pb-24 overflow-hidden pt-12 pb-20 relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Aberto hoje das 09:00 às 20:00
                            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
                                Qualidade local <br/>
                                na sua <span className="text-emerald-600">Casa Duarte</span>.
                            </h1>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl mb-10">
                                A Mercearia Sacristão traz até si os produtos mais frescos e o atendimento de proximidade que Campia merece.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-900/10 hover:shadow-emerald-900/20" onclick="switchPage('products')">
                                    Ver Produtos
                                </button>
<button className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 text-sm font-medium rounded-xl hover:bg-slate-50 transition-all" onclick="switchPage('about')">
                                    Conheça a História
                                </button>
</div>
</div>

<div className="relative hidden md:block group perspective-1000">

<div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-blue-50 rounded-full blur-3xl opacity-70 -z-10"></div>

<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out rotate-1">
<img alt="Produtos Frescos" className="bg-center w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8be6ff50-d680-4670-a721-9cdccb488006_1600w.webp"/>

</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100 to-blue-50 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight text-slate-900">Promoções da Semana</h2>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Válido até Domingo</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wine" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Vinho Dão Tinto</h3>
<p className="text-xs text-slate-500 mb-2">Garrafa 75cl</p>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-emerald-600">3.99€</span>
<span className="text-xs text-slate-400 line-through">5.50€</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cookie" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10a4 4 0 0 1-5-5a4 4 0 0 1-5-5M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Queijo Curado</h3>
<p className="text-xs text-slate-500 mb-2">Unidade (aprox. 500g)</p>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-emerald-600">6.49€</span>
<span className="text-xs text-slate-400 line-through">7.99€</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:apple" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Maçã Bravo Esmolfe</h3>
<p className="text-xs text-slate-500 mb-2">Preço por Kg</p>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-emerald-600">1.89€</span>
<span className="text-xs text-slate-400 line-through">2.40€</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Uma Experiência de Sabores</h2>
<p className="text-slate-500 font-light text-sm max-w-md">Do pão quente acabado de sair do forno aos vegetais colhidos nesta manhã.</p>
</div>
<button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1" onclick="switchPage('products')">
                            Ver catálogo completo <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">

<div className="group relative col-span-2 row-span-2 rounded-2xl overflow-hidden cursor-pointer shadow-sm" onclick="switchPage('products')">
<img alt="Padaria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="p-2 bg-amber-500/20 backdrop-blur-md rounded-lg text-amber-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:croissant" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97a11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352a11 11 0 0 0-6.486.132"></path><path d="M18 5a4 3 0 0 1 4 3a2 2 0 0 1-2 2a10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4a2 2 0 0 0 2-2a10 10 0 0 1 1.42-5.14"></path><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155a1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"></path></g></svg>
</span>
</div>
<h3 className="text-white font-semibold text-lg">Padaria Diária</h3>
<p className="text-slate-200 text-xs mt-1 font-light line-clamp-2">Pão quente de Vouzela, broa de milho e bolos tradicionais todos os dias.</p>
</div>
</div>

<div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden cursor-pointer shadow-sm" onclick="switchPage('products')">
<img alt="Legumes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-4">
<h3 className="text-white font-medium text-sm">Frescos</h3>
<p className="text-emerald-100 text-[10px]">Da horta para si</p>
</div>
</div>

<div className="group relative col-span-1 row-span-2 rounded-2xl overflow-hidden cursor-pointer shadow-sm" onclick="switchPage('products')">
<img alt="Vinhos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-5">
<div className="mb-2 text-purple-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wine" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-white font-medium text-sm">Garrafeira</h3>
<p className="text-slate-300 text-[10px] mt-1 leading-tight">Vinhos selecionados da região do Dão.</p>
</div>
</div>

<div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden cursor-pointer shadow-sm" onclick="switchPage('products')">
<img alt="Charcutaria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-4">
<h3 className="text-white font-medium text-sm">Charcutaria</h3>
<p className="text-slate-200 text-[10px]">Qualidade superior</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-600 mb-4 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:apple" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Frescura Diária</h3>
<p className="text-xs text-slate-500 leading-relaxed">Fruta, legumes e pão recebidos diariamente de produtores locais e nacionais.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 mb-4 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Proximidade</h3>
<p className="text-xs text-slate-500 leading-relaxed">Um atendimento personalizado onde cada cliente é tratado como família.</p>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 mb-4 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Preço Justo</h3>
<p className="text-xs text-slate-500 leading-relaxed">Ofertas competitivas e promoções semanais para a sua despensa.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">O Coração da Freguesia</h2>
<p className="text-slate-500 font-light">Mais do que uma mercearia, somos um ponto de encontro. O que dizem os nossos vizinhos:</p>
</div>
<button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1" onclick="switchPage('contact')">
                            Visite-nos
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-emerald-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Encontro sempre o que preciso. A fruta é excelente e a simpatia do Sr. Duarte e equipa faz toda a diferença no meu dia."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">MC</div>
<span className="text-xs font-medium text-slate-900">Maria Costa, Campia</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-emerald-500 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-sm text-slate-600 italic mb-6">"Produtos regionais de qualidade superior. Adoro o pão fresco e os enchidos locais. Recomendo vivamente!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">AS</div>
<span className="text-xs font-medium text-slate-900">António Silva, Vouzela</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-2xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-emerald-500 mb-4 iconify--lucide" data-icon="lucide:mail-open" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z"></path><path d="m22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></g></svg>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Não perca as novidades</h2>
<p className="text-sm text-slate-500 mb-8">Receba o folheto semanal e saiba quando chegam os produtos frescos.</p>
<form className="flex gap-2">
<input className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" placeholder="O seu email" type="email"/>
<button className="px-6 py-3 bg-slate-900 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors" type="button">
                            Subscrever
                        </button>
</form>
</div>
</section>
</div>

<div className="page-section hidden" id="page-about">

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<div className="text-emerald-600 text-xs font-bold tracking-wider uppercase mb-3">Desde 1985</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Uma história de família e dedicação.</h2>
<p className="text-slate-500 font-light text-lg leading-relaxed">Há décadas a servir a comunidade de Campia com produtos de confiança e um sorriso no rosto.</p>
</div>
<div className="grid md:grid-cols-2 gap-16 items-start mb-20">
<div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] group shadow-lg">
<img alt="Mercearia Antiga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10"></div>
</div>
<div className="space-y-6">
<div className="prose prose-slate prose-sm text-slate-500 font-light leading-relaxed">
<p>
                                    A <strong>Mercearia Sacristão</strong>, carinhosamente conhecida por todos como Casa Duarte, é um pilar da comunidade de Campia. O que começou como um pequeno comércio transformou-se num ponto de encontro essencial.
                                </p>
<p>
                                    Acreditamos que fazer compras não deve ser apenas uma transação, mas uma experiência de confiança. Selecionamos os nossos fornecedores a dedo, privilegiando a produção regional de Vouzela e arredores sempre que possível.
                                </p>
</div>
</div>
</div>

<div className="border-t border-slate-100 py-16 mb-12">
<h3 className="text-lg font-semibold text-slate-900 mb-8">A Nossa Jornada</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-3 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="relative">
<div className="w-6 h-6 rounded-full bg-emerald-600 border-4 border-white shadow-sm mb-4"></div>
<div className="text-lg font-bold text-slate-900">1985</div>
<p className="text-sm text-slate-500 mt-1">Abertura de portas pelo Sr. Duarte pai.</p>
</div>
<div className="relative">
<div className="w-6 h-6 rounded-full bg-emerald-300 border-4 border-white shadow-sm mb-4"></div>
<div className="text-lg font-bold text-slate-900">2005</div>
<p className="text-sm text-slate-500 mt-1">Renovação do espaço e ampliação da oferta.</p>
</div>
<div className="relative">
<div className="w-6 h-6 rounded-full bg-emerald-300 border-4 border-white shadow-sm mb-4"></div>
<div className="text-lg font-bold text-slate-900">Hoje</div>
<p className="text-sm text-slate-500 mt-1">Foco na sustentabilidade e produtos bio locais.</p>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-xl font-medium text-slate-900 mb-6">A Arte de Bem Servir</h3>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[450px]">

<div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
<img alt="Interior da Loja" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="font-semibold text-lg">Ambiente Familiar</h4>
<p className="text-xs text-slate-200 mt-1">Um espaço onde todos se conhecem.</p>
</div>
</div>

<div className="col-span-2 md:col-span-1 relative rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
<img alt="Detalhe Produtos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
</div>

<div className="col-span-1 md:col-span-1 row-span-2 relative rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
<img alt="Cesto de Compras" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-xs font-medium">Frescura Garantida</p>
</div>
</div>

<div className="col-span-1 md:col-span-1 relative rounded-2xl overflow-hidden group border border-slate-100 shadow-sm">
<img alt="Frutas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:map" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Orgulho Regional
                        </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mel</p>
<p className="text-sm font-medium text-slate-800">Serra do Caramulo</p>
</div>
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Vinho</p>
<p className="text-sm font-medium text-slate-800">Região do Dão</p>
</div>
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pastelaria</p>
<p className="text-sm font-medium text-slate-800">Vouzela</p>
</div>
<div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fumeiro</p>
<p className="text-sm font-medium text-slate-800">Produtores Locais</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-products">
<section className="py-20 bg-slate-50 min-h-screen">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-6 shadow-sm">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                            Novidades todas as semanas
                        </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Os Nossos Produtos</h2>
<p className="text-slate-500 font-light text-lg">Da horta para a sua casa. Explore as nossas categorias principais.</p>
</div>

<div className="mb-12 bg-white rounded-3xl p-2 border border-slate-100 shadow-sm">
<div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 text-center md:text-left">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium mb-4 text-emerald-50 border border-white/10">Destaque da Estação</span>
<h3 className="text-2xl md:text-3xl font-semibold mb-2">Frutas de Outono</h3>
<p className="text-emerald-100 font-light max-w-md">Castanhas de Souto Bom, diospiros e as primeiras laranjas do Algarve.</p>
</div>
<div className="relative z-10 flex-shrink-0">
<button className="bg-white text-emerald-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-colors shadow-lg shadow-emerald-900/20" onclick="switchPage('contact')">
                                    Reservar Cabaz
                                </button>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Os Preferidos dos Clientes</h3>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
<div className="w-16 h-16 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:croissant" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97a11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352a11 11 0 0 0-6.486.132"></path><path d="M18 5a4 3 0 0 1 4 3a2 2 0 0 1-2 2a10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4a2 2 0 0 0 2-2a10 10 0 0 1 1.42-5.14"></path><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155a1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"></path></g></svg>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Pão de Vouzela</h4>
<p className="text-xs text-slate-500 mb-2">Fresco todos os dias às 09h.</p>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Regional</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
<div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dot" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></g></svg>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Queijo da Serra</h4>
<p className="text-xs text-slate-500 mb-2">Amanteigado ou curado.</p>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">DOP</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
<div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Cabaz da Horta</h4>
<p className="text-xs text-slate-500 mb-2">Seleção semanal de frescos.</p>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Económico</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default relative">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:carrot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"></path><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"></path></g></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Frutas &amp; Legumes</h3>
<p className="text-sm text-slate-500 mb-4">Produtos da época, frescos e cheios de sabor. Recebemos carga nova todas as manhãs.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wheat" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"></path><path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"></path></g></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Padaria &amp; Pastelaria</h3>
<p className="text-sm text-slate-500 mb-4">Pão quente várias vezes ao dia e bolos tradicionais como o folar e pão de ló.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:beef" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"></path><path d="m18.5 6l2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"></path><circle cx="12.5" cy="8.5" r="2.5"></circle></g></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Talho &amp; Charcutaria</h3>
<p className="text-sm text-slate-500 mb-4">Carnes selecionadas e enchidos regionais de qualidade, chouriça, morcela e presunto.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wine" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Garrafeira</h3>
<p className="text-sm text-slate-500 mb-4">Vinhos do Dão, licores caseiros e bebidas espirituosas para ocasiões especiais.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:milk" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path><path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 5 0"></path></g></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Laticínios &amp; Frio</h3>
<p className="text-sm text-slate-500 mb-4">Queijos da Serra, iogurtes, manteigas e uma vasta seleção de congelados.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all cursor-default">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:spray-can" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h.01M7 5h.01M11 7h.01M3 7h.01M7 9h.01M3 11h.01M15 5h4v4h-4zm4 4l2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2m-2 5l8-2m-8 7l8-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Higiene &amp; Limpeza</h3>
<p className="text-sm text-slate-500 mb-4">Tudo para o cuidado da casa e higiene pessoal, com as melhores marcas.</p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="bg-emerald-900 rounded-3xl p-8 text-white flex flex-col justify-between">
<div>
<h3 className="text-xl font-medium mb-4 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                                    Época Atual: Outono
                                </h3>
<p className="text-emerald-100 text-sm mb-6 leading-relaxed">Nesta altura do ano, privilegiamos os produtos quentes e reconfortantes. O que está no pico de sabor:</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Abóbora e Batata Doce</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Castanhas e Nozes</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Diospiros e Tangerinas</li>
</ul>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8">
<h3 className="text-xl font-medium text-slate-900 mb-6">Como fazer encomendas?</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center flex-shrink-0 text-sm">1</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Escolha os produtos</h4>
<p className="text-xs text-slate-500 mt-1">Faça a sua lista de compras habitual.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center flex-shrink-0 text-sm">2</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Contacte-nos</h4>
<p className="text-xs text-slate-500 mt-1">Ligue ou envie mensagem (WhatsApp disponível).</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center flex-shrink-0 text-sm">3</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Levante ou Receba</h4>
<p className="text-xs text-slate-500 mt-1">Pronto para levar ou entregue em casa.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-contact">
<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">

<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">Estamos à sua espera</h2>
<div className="space-y-8 mb-12">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Morada</h3>
<p className="text-slate-600 font-light text-sm">Rua da Igreja nº523670-056 Campia, Vouzela</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Telefone</h3>
<p className="text-slate-600 font-light text-sm"><a className="hover:underline hover:text-emerald-600 transition-colors" href="tel:+351232758988">+351 232 758 988</a></p>
<p className="text-[10px] text-slate-400 mt-1">Chamada para a rede fixa nacional</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Email</h3>
<p className="text-slate-600 font-light text-sm">c.duarte.campia@sapo.pt</p>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Horário de Funcionamento</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center text-slate-600 pb-3 border-b border-slate-200/50 last:border-0 last:pb-0">
<span>Segunda - Sexta</span>
<span className="font-medium text-slate-900">09:00 – 20:00</span>
</div>
<div className="flex justify-between items-center text-slate-600 pb-3 border-b border-slate-200/50 last:border-0 last:pb-0">
<span>Sábado</span>
<span className="font-medium text-slate-900">09:00 – 20:00</span>
</div>
<div className="flex justify-between items-center text-slate-600">
<span>Domingo</span>
<span className="font-medium text-slate-900">09:00 – 13:00</span>
</div>
</div>
</div>
</div>

<div>
<div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 p-8 h-full">
<h3 className="text-lg font-medium text-slate-900 mb-1">Fale Connosco</h3>
<p className="text-sm text-slate-500 mb-6">Encomendas, sugestões ou dúvidas? Envie mensagem.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Nome</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400" placeholder="Seu nome" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Telemóvel</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400" placeholder="9xx xxx xxx" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400" placeholder="exemplo@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Mensagem</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Escreva a sua mensagem aqui..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" type="button">
                                        Enviar Mensagem
                                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-16">
<h3 className="text-xl font-medium text-slate-900 mb-8 text-center">Perguntas Frequentes</h3>
<div className="grid md:grid-cols-3 gap-8 text-sm">
<div>
<h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:truck" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
                                    Fazem entregas ao domicílio?
                                </h4>
<p className="text-slate-500 leading-relaxed">Sim, realizamos entregas num raio de 5km de Campia para compras superiores a 30€. Contacte-nos para agendar.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:credit-card" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
                                    Que métodos de pagamento aceitam?
                                </h4>
<p className="text-slate-500 leading-relaxed">Aceitamos numerário, Multibanco e MB Way. Para entregas, o pagamento pode ser feito no ato da entrega.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:package-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"></path><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"></path><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"></path></g></svg>
                                    Aceitam encomendas de bolos?
                                </h4>
<p className="text-slate-500 leading-relaxed">Sim, aceitamos encomendas de padaria e pastelaria com 24h de antecedência. Especialmente para épocas festivas.</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-white border-t border-slate-100 py-12 mt-auto">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<p className="text-sm font-semibold text-slate-900">Mercearia Sacristão</p>
<p className="text-xs text-slate-500 mt-1">© 2024 Casa Duarte. Todos os direitos reservados.</p>
<p className="text-[10px] text-slate-400 mt-2">Feito com carinho em Campia.</p>
</div>
<div className="flex gap-6">
<a className="group flex items-center gap-2 text-slate-500 hover:text-emerald-700 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-100 hover:border-emerald-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium">Facebook</span>
</a>
<a className="group flex items-center gap-2 text-slate-500 hover:text-emerald-700 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-100 hover:border-emerald-200" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<span className="text-xs font-medium">Instagram</span>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
