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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<div className="noise-bg"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute top-40 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

<header className="z-10 flex max-w-5xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 relative items-center justify-between">
<div className="text-white font-medium text-base tracking-tighter uppercase flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            SGT
        </div>
</header>

<section className="md:pt-32 flex flex-col text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 relative items-center">
<div className="inline-flex text-sm font-medium text-orange-400 bg-orange-500/10 border-orange-500/20 border rounded-full mb-12 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm items-center">Oferta de lançamento</div>

<div className="inline-block border-dashed md:p-12 w-full max-w-4xl border-zinc-800 border mb-10 pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-zinc-900 border border-zinc-700"></div>
<div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-zinc-900 border border-zinc-700"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-zinc-900 border border-zinc-700"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-zinc-900 border border-zinc-700"></div>
<h1 className="leading-[1.05] z-10 text-5xl font-medium text-white tracking-tighter mb-4 relative md:text-6xl">Tudo que você faz em horas na gestão de tráfego, <br className="hidden md:block"/> <span className="text-zinc-500">a IA faz em minutos</span></h1>

<div className="absolute -bottom-8 right-4 md:right-12 rotate-[-4deg] z-20">
<span className="md:text-3xl text-4xl text-blue-400 font-caveat drop-shadow-lg">Powered by Claude</span>
</div>
</div>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-12 ml-auto">Sistemas prontos e testados no campo de batalha para automatizar relatórios, criar anúncios sem depender de designer e analisar dados sem risco de bloqueio. De gestor para gestor</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 shadow-2xl w-full max-w-lg mx-auto">
<div className="flex-1 w-full bg-black border border-zinc-800 rounded px-4 py-2 flex items-center">
<span className="text-sm text-zinc-500">/instalar-stack-operacional</span>
<span className="ml-1 w-1.5 h-4 bg-orange-500 animate-pulse"></span>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors" href="#oferta">
                Executar
                <i className="ml-2 w-4 h-4" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-24 border-t border-zinc-900">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">O gargalo é o trabalho manual.</h2>
<p className="text-base text-zinc-500 font-light">A maioria dos gestores gasta a inteligência na operação e não na estratégia.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 flex items-start gap-5 hover:bg-zinc-900 transition-colors">
<i className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" data-lucide="calendar-x" strokeWidth="1.5"></i>
<p className="text-base text-zinc-300 leading-relaxed">Você passa o domingo montando relatório no Canva ou no Looker Studio pra cliente que mal abre o PDF?</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 flex items-start gap-5 hover:bg-zinc-900 transition-colors">
<i className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" data-lucide="image-off" strokeWidth="1.5"></i>
<p className="text-base text-zinc-300 leading-relaxed">Trava na hora de subir campanha nova porque o designer ou o cliente demorou pra entregar o criativo?</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 flex items-start gap-5 hover:bg-zinc-900 transition-colors">
<i className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" data-lucide="search-x" strokeWidth="1.5"></i>
<p className="text-base text-zinc-300 leading-relaxed">Passa horas caçando anúncios na biblioteca do concorrente na hora de prospectar ou fazer alinhamento?</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-950/50 border border-zinc-800/80 flex items-start gap-5 hover:bg-zinc-900 transition-colors">
<i className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" data-lucide="shield-alert" strokeWidth="1.5"></i>
<p className="text-base text-zinc-300 leading-relaxed">Sabe que precisa usar automação, mas tem medo de plugar ferramentas externas e tomar bloqueio na BM?</p>
</div>
</div>
</section>

<section className="relative z-10 max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
<div className="mb-16 md:w-2/3 max-w-2xl">
<span className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-4 block flex items-center gap-2">
<i className="w-4 h-4" data-lucide="cpu" strokeWidth="1.5"></i> Hardware Lógico
            </span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Instale o Stack na sua rotina</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                Esqueça prompts genéricos. Isto é um conjunto de "chips" operacionais prontos para integrar no seu modelo mental de gestão. Copie os sistemas, cole no Claude e veja o trabalho de horas ser finalizado em segundos.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 perspective-1000">

<div className="group relative bg-black rounded-3xl p-6 border border-zinc-800 chip-highlight overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mt-8 mb-6 h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center relative z-10 group-hover:border-blue-500/50 transition-colors shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="file-bar-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight relative z-10">Relatório Automático</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                    Insira os dados brutos. Receba análises profundas e prontas para envio, elevando a percepção de valor.
                </p>
</div>

<div className="group relative bg-black rounded-3xl p-6 border border-zinc-800 chip-highlight overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mt-8 mb-6 h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center relative z-10 group-hover:border-orange-500/50 transition-colors shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="radar" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight relative z-10">Prospector Profundo</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                    Mapeamento de mercado instantâneo. Descubra dores, ângulos e supere a concorrência antes da reunião.
                </p>
</div>

<div className="group relative bg-black rounded-3xl p-6 border border-zinc-800 chip-highlight overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-blue-500/50 transition-colors"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mt-8 mb-6 h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center relative z-10 group-hover:border-blue-500/50 transition-colors shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight relative z-10">Motor Criativo</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                    Gere copys de alta conversão e prompts visuais sem depender de designers ou esperar aprovações longas.
                </p>
</div>

<div className="group relative bg-black rounded-3xl p-6 border border-zinc-800 chip-highlight overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
<div className="w-4 h-1.5 bg-zinc-800 rounded-b-sm group-hover:bg-orange-500/50 transition-colors"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="mt-8 mb-6 h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center relative z-10 group-hover:border-orange-500/50 transition-colors shadow-inner">
<i className="w-7 h-7 text-white" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight relative z-10">Análise Blindada</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                    Identifique padrões ocultos de CPA e ROAS via IA sem plugar APIs externas, zerando riscos de bloqueio.
                </p>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-24 border-t border-zinc-900">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium text-white tracking-tighter mb-10 flex items-center">
<i className="mr-3 w-6 h-6 text-orange-500" data-lucide="package-open" strokeWidth="1.5"></i>
                    Componentes do pacote:
                </h2>
<ul className="space-y-6">
<li className="flex items-start group">
<div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 mt-0.5 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors shrink-0">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-400 font-light"><strong className="text-white font-normal">Acesso Direto:</strong> Aulas focadas na execução. Copie a estrutura e rode hoje mesmo.</span>
</li>
<li className="flex items-start group">
<div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 mt-0.5 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors shrink-0">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-400 font-light"><strong className="text-white font-normal">Sistemas Estruturados:</strong> Modelos formatados especificamente para a lógica do Claude.</span>
</li>
<li className="flex items-start group">
<div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 mt-0.5 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors shrink-0">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-400 font-light"><strong className="text-white font-normal">Templates Validados:</strong> Relatórios que convertem confusão em clareza para o cliente.</span>
</li>
<li className="flex items-start group">
<div className="h-6 w-6 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 mt-0.5 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors shrink-0">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-base text-zinc-400 font-light"><strong className="text-white font-normal">Biblioteca de Comandos:</strong> Engenharia de prompt voltada exclusivamente para performance.</span>
</li>
</ul>
</div>

<div className="relative">

<div className="absolute -inset-4 bg-zinc-900/30 rounded-3xl border border-zinc-800/50 -z-10 hidden lg:block"></div>
<div className="mb-12">
<h3 className="text-xl font-medium text-white tracking-tight mb-4 flex items-center">
<i className="mr-3 w-5 h-5 text-blue-400" data-lucide="user-plus" strokeWidth="1.5"></i>
                        Perfil Compatível
                    </h3>
<p className="text-base text-zinc-400 font-light leading-relaxed pl-8">
                        Gestores de tráfego, agências enxutas e freelancers que buscam escalar carteira reduzindo o atrito operacional e elevando a qualidade técnica da entrega.
                    </p>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4 flex items-center">
<i className="mr-3 w-5 h-5 text-zinc-600" data-lucide="user-minus" strokeWidth="1.5"></i>
                        Perfil Incompatível
                    </h3>
<p className="text-base text-zinc-500 font-light leading-relaxed pl-8">
                        Iniciantes que desconhecem os fundamentos das plataformas. Pessoas em busca de atalhos mágicos ou que acreditam que a IA fará 100% do trabalho estratégico sozinha.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-4xl mx-auto px-6 py-24" id="oferta">
<div className="relative p-10 md:p-16 rounded-[2rem] bg-zinc-950 border border-zinc-800 text-center overflow-hidden chip-highlight group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 blur-[100px] pointer-events-none group-hover:bg-orange-600/10 transition-colors duration-1000"></div>
<div className="inline-flex items-center gap-2 mb-6 relative z-10">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-sm text-zinc-400 tracking-wider uppercase font-medium">Acesso Vitalício</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4 relative z-10">Escale sem aumentar equipe.</h2>
<p className="text-lg text-zinc-400 mb-12 font-light relative z-10 max-w-xl mx-auto">
                Automatize o braçal. O custo de um almoço para instalar o sistema que vai devolver horas da sua semana.
            </p>
<div className="flex items-end justify-center gap-2 mb-12 relative z-10">
<span className="text-2xl text-zinc-500 font-medium pb-2">R$</span>
<span className="text-7xl md:text-8xl font-medium text-white tracking-tighter leading-none">97</span>
</div>
<a className="relative z-10 block w-full sm:w-2/3 md:w-1/2 mx-auto rounded bg-white px-8 py-5 text-base font-medium text-black hover:bg-orange-50 transition-all duration-300 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]" href="#">
                Inicializar Download do Stack
            </a>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500 font-light mt-8 relative z-10">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i> Criptografia Segura</span>
<span className="hidden sm:block w-1 h-1 bg-zinc-700 rounded-full"></span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="zap" strokeWidth="1.5"></i> Liberação Imediata</span>
</div>
</div>
<p className="mt-12 text-sm text-zinc-500 font-light max-w-2xl mx-auto text-center leading-relaxed">
            O ritmo do mercado mudou. A adoção de IA não é mais diferencial, é sobrevivência operacional. Por R$ 97, obtenha a base lógica para não ficar obsoleto.
        </p>
</section>

<footer className="border-t border-zinc-900 py-12 text-center relative z-10 mt-10 flex flex-col items-center">
<div className="w-6 h-6 border border-zinc-800 rounded mb-6 flex items-center justify-center bg-zinc-950">
<div className="w-2 h-2 bg-zinc-700 rounded-sm"></div>
</div>
<p className="text-sm text-zinc-600 font-light">
            © 2024 Stack do Gestor. Sistemas operacionais para tráfego.
        </p>
</footer>


    </>
  );
}
