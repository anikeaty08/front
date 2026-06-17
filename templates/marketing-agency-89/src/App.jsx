import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            // Initial check for elements visible on load
            checkScroll();

            // Check on scroll
            window.addEventListener('scroll', checkScroll);

            function checkScroll() {
                const triggerBottom = window.innerHeight * 0.85; // Trigger slightly before element is fully in view

                reveals.forEach(reveal => {
                    const boxTop = reveal.getBoundingClientRect().top;
                    
                    if(boxTop < triggerBottom) {
                        reveal.classList.add('active');
                    }
                });
            }
            
            // Animate progress bar in Hero on load
            setTimeout(() => {
                const progressBar = document.querySelector('[style*="--target-width"]');
                if(progressBar) {
                    progressBar.style.width = progressBar.style.getPropertyValue('--target-width');
                }
            }, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2 group transition-opacity hover:opacity-80" href="#">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-12">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
                Marketing Pro
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors duration-200" href="#servicos">Serviços</a>
<a className="hover:text-blue-600 transition-colors duration-200" href="#cases">Cases</a>
<a className="hover:text-blue-600 transition-colors duration-200" href="#metodologia">Metodologia</a>
<a className="hover:text-blue-600 transition-colors duration-200" href="#time">Time</a>
<a className="hover:text-blue-600 transition-colors duration-200" href="#blog">Blog</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" href="#contato">
                Falar com Especialista
            </a>

<button className="md:hidden text-slate-900 hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eff6ff_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="animate-enter max-w-2xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full hover:bg-blue-100 transition-colors cursor-default">
<iconify-icon icon="solar:medal-star-linear" width="14"></iconify-icon>
                    Google Partner Premier
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Transforme Visitantes em <span className="text-blue-600 relative inline-block">
                        Clientes Pagantes
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-lg">
                    Estratégias de marketing digital que realmente geram resultados mensuráveis para seu negócio escalar com segurança.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1" href="#">
                        Agendar Diagnóstico Gratuito
                    </a>
<a className="group inline-flex justify-center items-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all duration-300" href="#">
<iconify-icon className="mr-2 transition-transform group-hover:translate-y-0.5" icon="solar:file-download-linear" width="20"></iconify-icon>
                        Baixar Case de Sucesso
                    </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 border-2 border-white rounded-full object-cover transition-transform hover:z-10 hover:scale-110 duration-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-10 h-10 border-2 border-white rounded-full object-cover transition-transform hover:z-10 hover:scale-110 duration-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-10 h-10 border-2 border-white rounded-full object-cover transition-transform hover:z-10 hover:scale-110 duration-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 border-2 border-white rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600 transition-transform hover:z-10 hover:scale-110 duration-200">
                            +500
                        </div>
</div>
<span className="font-medium">Empresas transformadas</span>
</div>
</div>

<div className="relative animate-enter delay-200 lg:ml-auto group perspective-1000">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-white transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2">
<img alt="Dashboard Analytics" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl border border-slate-100 shadow-lg transition-transform duration-500 group-hover:translate-y-[-10px]">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Crescimento Mensal</span>
<span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-full">+124%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 mb-1 overflow-hidden">
<div className="bg-blue-600 h-2 rounded-full animate-[width_1.5s_ease-out_forwards]" style={{width: '0%', animationDelay: '0.5s', '--target-width': '75%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 reveal">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Parceiros Oficiais</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
<div className="flex items-center gap-2 text-xl font-bold text-slate-700 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-105"><iconify-icon icon="logos:google" width="24"></iconify-icon> Partner</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-105"><iconify-icon icon="logos:meta-icon" width="24"></iconify-icon> Business Partner</div>
<div className="flex items-center gap-2 text-xl font-bold text-slate-700 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-105"><iconify-icon className="text-blue-500" icon="simple-icons:rdstation" width="24"></iconify-icon> RD Station</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Soluções que <span className="text-blue-600">escalam</span></h2>
<p className="text-lg text-slate-500 max-w-2xl">Nossa abordagem integra dados, criatividade e tecnologia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-12 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 reveal">
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300">
<iconify-icon icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Estratégia Completa 360º</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                                Não fazemos apenas anúncios. Desenvolvemos uma análise profunda do seu mercado, planejamos a jornada do cliente e executamos campanhas multicanal integradas para maximizar cada ponto de contato.
                            </p>
<a className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link" href="#">
                                Saber mais <iconify-icon className="transition-transform group-hover/link:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex-1 relative h-48 md:h-auto rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
<img alt="Strategy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 reveal delay-100">
<div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">ROI Garantido</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Foco total em performance. Nossos clientes observam um aumento médio de 300% no faturamento nos primeiros 6 meses.
                    </p>
</div>
<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Acompanhamento Semanal</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Nada de relatórios automáticos que ninguém lê. Reuniões de alinhamento com insights acionáveis e transparência total.
                    </p>
</div>
<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 reveal delay-300">
<div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Time Dedicado</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Uma squad completa à sua disposição: especialistas seniores em copywriting, design, tráfego pago e SEO.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="metodologia">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Por que escolher a Marketing Pro?</h2>
<p className="text-slate-500">Resultados consistentes construídos sobre quatro pilares fundamentais.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center group reveal delay-100 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 mb-5 shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all duration-300">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Metodologia Comprovada</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sistema próprio validado e aperfeiçoado em mais de 500 empresas de diversos nichos.</p>
</div>
<div className="flex flex-col items-center text-center group reveal delay-200 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 mb-5 shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all duration-300">
<iconify-icon icon="solar:diploma-verified-linear" width="28"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Certificações Oficiais</h3>
<p className="text-sm text-slate-500 leading-relaxed">Equipe técnica certificada diretamente pelo Google, Meta e principais plataformas de ads.</p>
</div>
<div className="flex flex-col items-center text-center group reveal delay-300 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 mb-5 shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all duration-300">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Garantia de Resultados</h3>
<p className="text-sm text-slate-500 leading-relaxed">Trabalhamos com metas claras. Se não atingirmos o ROI mínimo, devolvemos seu investimento.</p>
</div>
<div className="flex flex-col items-center text-center group reveal delay-300 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 mb-5 shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all duration-300">
<iconify-icon icon="solar:headset-linear" width="28"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Suporte Premium</h3>
<p className="text-sm text-slate-500 leading-relaxed">Acesso direto ao WhatsApp dos especialistas. Respostas em até 2 horas úteis.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center reveal">O que nossos parceiros dizem</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100">
<div className="flex gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 leading-relaxed">"Em 6 meses triplicamos o faturamento. A estratégia foi cirúrgica e o time é excepcional, sempre proativos com novas ideias."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<img alt="Ricardo" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-semibold text-slate-900">Ricardo Gomes</p>
<p className="text-xs text-slate-400">CEO, TechStore</p>
</div>
</div>
</div>

<div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="flex gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 leading-relaxed">"Finalmente marketing que traz resultado real e não apenas likes. Tivemos um ROI de 450% logo no primeiro ano de contrato."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<img alt="Fernanda" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-semibold text-slate-900">Fernanda Costa</p>
<p className="text-xs text-slate-400">Diretora, BeautyPro</p>
</div>
</div>
</div>

<div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-300">
<div className="flex gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 leading-relaxed">"Pararam de vender serviço e viraram parceiros do nosso negócio. Entendem nossas dores e resolvem rápido."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<img alt="Marcos" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-semibold text-slate-900">Marcos Oliveira</p>
<p className="text-xs text-slate-400">Fundador, EduTech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Dúvidas Frequentes</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none transition-colors group-hover:text-blue-600">
                        Quanto tempo para ver resultados?
                        <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        Geralmente, os primeiros resultados aparecem em 30 dias após o início das campanhas (leads qualificados). A transformação completa e escala robusta acontece entre 3 a 6 meses de maturação das contas.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none transition-colors group-hover:text-blue-600">
                        Funciona para meu nicho?
                        <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        Sim! Temos cases de sucesso em mais de 50 nichos diferentes, desde e-commerce, serviços B2B, infoprodutos até negócios locais. Nossa metodologia se adapta ao comportamento do seu consumidor.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none transition-colors group-hover:text-blue-600">
                        Qual o investimento mínimo?
                        <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        Trabalhamos com planos de gestão a partir de R$ 2.500/mês. Além disso, recomendamos um investimento mínimo em mídia paga (Google/Meta) alinhado aos seus objetivos para garantir tração.
                    </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-slate-900 select-none transition-colors group-hover:text-blue-600">
                        E se não der resultado?
                        <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        Confiamos tanto em nossa entrega que garantimos ROI mínimo de 200% em contrato, dependendo do plano escolhido, ou devolvemos a taxa de gestão integralmente. O risco é nosso.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden" id="contato">
<div className="max-w-7xl mx-auto px-6 relative z-10 reveal">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative shadow-2xl group">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"></div>
<div className="lg:w-1/2 z-10 mb-10 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Quero Multiplicar Meu Faturamento</h2>
<p className="text-slate-400 mb-8 text-lg max-w-md">Pare de perder dinheiro com estratégias que não funcionam. Fale com um especialista hoje mesmo.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all duration-200 hover:scale-105 active:scale-95" href="#">
                            Agendar Diagnóstico
                        </a>
<a className="inline-flex justify-center items-center px-6 py-3 text-base font-medium text-white border border-slate-700 bg-transparent rounded-lg hover:bg-slate-800 transition-all duration-200 hover:border-slate-600" href="#">
                            Ver Planos
                        </a>
</div>
</div>
<div className="lg:w-5/12 z-10 relative">

<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer">
<div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-3">
<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-2-bold"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Relatório Mensal</div>
<div className="text-xs text-slate-400">Atualizado agora</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800 rounded p-3 transition-colors hover:bg-slate-700/50">
<div className="text-xs text-slate-400 mb-1">Leads</div>
<div className="text-lg font-bold text-white">1,240</div>
</div>
<div className="bg-slate-800 rounded p-3 transition-colors hover:bg-slate-700/50">
<div className="text-xs text-slate-400 mb-1">Vendas</div>
<div className="text-lg font-bold text-green-400">R$ 450k</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] transition-transform group-hover:rotate-12 duration-300">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Marketing Pro</span>
</div>
<div className="flex items-center gap-6 text-slate-400">
<a className="hover:text-blue-600 transition-colors transform hover:scale-110 duration-200" href="#"><iconify-icon icon="mdi:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-pink-600 transition-colors transform hover:scale-110 duration-200" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="hover:text-red-600 transition-colors transform hover:scale-110 duration-200" href="#"><iconify-icon icon="mdi:youtube" width="20"></iconify-icon></a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-50 text-center md:text-left text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2025 Marketing Pro. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#">Termos</a>
<a className="hover:text-slate-600 transition-colors" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
