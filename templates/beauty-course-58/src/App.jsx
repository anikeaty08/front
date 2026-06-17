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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[150px] rounded-full"></div>
</div>
<div className="relative z-10 flex flex-col min-h-screen">

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start space-y-8">

<div className="inline-flex items-center gap-3 pr-4 pl-1 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<img alt="Ludmila" className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-500/50" src="https://i.pravatar.cc/100?img=47"/>
<span className="text-sm font-medium text-slate-300">Hi, I’m Ludmila</span>
</div>

<div className="space-y-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                            Domine o Alinhamento na Régua e fature <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">3x mais</span> com design em 30 dias.
                        </h1>
<p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-lg">
                            O método de mapeamento simétrico que transforma olhares com precisão matemática, sem depender de "olhômetro".
                        </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-500 transition-colors shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]" href="#checkout">
                            Quero Dominar a Régua
                            <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=2"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=3"/>
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://i.pravatar.cc/100?img=4"/>
</div>
<div className="flex flex-col">
<div className="flex items-center text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-medium text-slate-400">4.9/5 Média</span>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 aspect-[9/16] perspective-[1000px]">

<div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
<img alt="Model Eyebrow" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-12 -left-8 right-8 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-purple-300 uppercase tracking-widest">Módulo 1</span>
<div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
</div>
<p className="text-base font-medium text-white mb-3">A Matemática da Simetria Perfeita</p>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto w-full relative z-20">
<div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/5 shadow-2xl text-center">
<i className="w-10 h-10 text-purple-500/50 mx-auto mb-6" data-lucide="quote"></i>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">A agonia de rezar para os dois lados ficarem iguais acabou.</h2>
<div className="text-lg text-slate-300 leading-relaxed space-y-4 max-w-3xl mx-auto text-left">
<p>Você sabe exatamente como é o sentimento. A cliente senta na cadeira, você prepara os materiais e, no fundo, sente aquela leve pontada de insegurança. O "olhômetro" já te traiu antes. Você faz uma marcação, apaga, faz de novo. O tempo passa e a pressão aumenta.</p>
<p>Eu passei anos refém da tentativa e erro. Via profissionais cobrando valores altos por designs impecáveis e me perguntava qual era o segredo. A verdade é brutal: não é talento nato, é técnica pura. Quando você domina a marcação geométrica e entende como transferir as proporções exatas usando apenas uma régua e linha, o jogo vira.</p>
<p>O método "Alinhamento na Régua" não é apenas sobre desenhar linhas no rosto de alguém. É sobre construir uma arquitetura facial que valoriza o olhar com precisão matemática. Quando você aplica essa lógica, o medo de errar desaparece e dá lugar a uma confiança inabalável que suas clientes percebem imediatamente.</p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto w-full">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Resultados que você entrega amanhã</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Mapeamento Ultra-Rápido</h3>
<p className="text-base text-slate-400">Reduza seu tempo de marcação pela metade. Entregue agilidade sem perder um milímetro de precisão.</p>
</div>
</div>

<div className="group p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="scan-line"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Simetria Perfeita</h3>
<p className="text-base text-slate-400">Domine os eixos faciais e crie designs que harmonizam perfeitamente com a estrutura óssea da cliente.</p>
</div>
</div>

<div className="group p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Pigmentação Ideal</h3>
<p className="text-base text-slate-400">Aprenda a preencher o design estruturado de forma a reter a cor por mais tempo e com aspecto natural.</p>
</div>
</div>

<div className="group p-6 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Confiança Total</h3>
<p className="text-base text-slate-400">Postura profissional que justifica um preço premium. A cliente percebe a técnica antes mesmo do resultado.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 max-w-4xl mx-auto w-full text-center">
<h2 className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-8">O que você recebe ao entrar hoje</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-base font-medium text-slate-300 backdrop-blur-sm flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check-circle-2"></i> Masterclass Live
                </div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-base font-medium text-slate-300 backdrop-blur-sm flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check-circle-2"></i> PDF Workbook
                </div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-base font-medium text-slate-300 backdrop-blur-sm flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="check-circle-2"></i> Certificado de Conclusão
                </div>
<div className="px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-base font-medium text-purple-200 backdrop-blur-sm flex items-center gap-2 shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
<i className="w-4 h-4 text-purple-400" data-lucide="star"></i> Acesso Grupo VIP
                </div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950 z-0"></div>
<div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Imagine sua agenda lotada e suas clientes impactadas pelo seu novo nível de entrega.
                </h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    A diferença entre a profissional que briga por preço e a que escolhe clientes está nos detalhes técnicos invisíveis aos olhos destreinados.
                </p>

<div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-xl mx-auto">
<div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div className="text-left">
<p className="text-base font-medium text-white">7 Dias de Garantia</p>
<p className="text-sm text-slate-400">Incondicional. Risco zero.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
<div className="md:col-span-3 space-y-6">
<h2 className="text-sm font-medium uppercase tracking-widest text-purple-400">Sobre a Instrutora</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Ludmila, Designer &amp; Master Educator</h3>
<div className="text-lg text-slate-400 leading-relaxed space-y-4">
<p>Iniciei na área de estética com uma pinça simples e muita vontade de transformar olhares. Após anos estudando visagismo e arquitetura facial, desenvolvi métodos que simplificam o complexo.</p>
<p>Minha missão é elevar o padrão do design de sobrancelhas no Brasil, formando profissionais que dominam a técnica a ponto de cobrar o que realmente merecem.</p>
</div>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">8+</p>
<p className="text-base text-slate-500">Anos de experiência</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">3.2k</p>
<p className="text-base text-slate-500">Alunas formadas</p>
</div>
</div>
</div>
<div className="md:col-span-2 relative">
<div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
<img alt="Ludmila" className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-slate-900/30 flex flex-col justify-between">
<div>
<span className="text-sm font-medium text-slate-500 uppercase tracking-widest block mb-4">Escolha A</span>
<h3 className="text-2xl font-medium text-slate-300 mb-4">Continuar no amadorismo</h3>
<ul className="space-y-3 text-base text-slate-500">
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-slate-700 mt-0.5" data-lucide="x"></i> Perder tempo apagando marcações.</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-slate-700 mt-0.5" data-lucide="x"></i> Insegurança com clientes exigentes.</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-slate-700 mt-0.5" data-lucide="x"></i> Cobrar o preço médio do bairro.</li>
</ul>
</div>
<p className="text-sm text-slate-600 mt-8">Custo: Estagnação profissional.</p>
</div>

<div className="p-8 md:p-10 rounded-3xl border border-purple-500/30 bg-purple-900/10 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
<div className="relative z-10">
<span className="text-sm font-medium text-purple-400 uppercase tracking-widest block mb-4">Escolha B</span>
<h3 className="text-2xl font-medium text-white mb-4">Tornar-se uma autoridade</h3>
<ul className="space-y-3 text-base text-slate-300">
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-purple-400 mt-0.5" data-lucide="check"></i> Marcação precisa na primeira tentativa.</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-purple-400 mt-0.5" data-lucide="check"></i> Confiança para atender qualquer tipo de rosto.</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 shrink-0 text-purple-400 mt-0.5" data-lucide="check"></i> Liberdade para dobrar o valor do serviço.</li>
</ul>
</div>
<a className="relative z-10 mt-8 inline-flex items-center justify-center w-full py-4 text-base font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors" href="#checkout">
                        Escolher o caminho da autoridade
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto w-full">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">Dúvidas Frequentes</h2>
</div>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-200 select-none hover:text-white transition-colors">
                        Preciso ter experiência prévia?
                        <span className="relative flex items-center justify-center w-6 h-6 shrink-0 text-purple-400">
<i className="lucide-plus w-5 h-5 absolute" data-lucide="plus"></i>
<i className="lucide-minus w-5 h-5 absolute" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Não. O método foi desenhado partindo do zero, ensinando os fundamentos da geometria facial até a execução avançada. Ideal tanto para iniciantes quanto para profissionais que desejam refinar a técnica.
                    </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-200 select-none hover:text-white transition-colors">
                        Por quanto tempo tenho acesso ao curso?
                        <span className="relative flex items-center justify-center w-6 h-6 shrink-0 text-purple-400">
<i className="lucide-plus w-5 h-5 absolute" data-lucide="plus"></i>
<i className="lucide-minus w-5 h-5 absolute" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        O acesso é válido por 1 ano inteiro a partir da data da compra. Você pode assistir e rever as aulas quantas vezes quiser, de qualquer dispositivo.
                    </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-slate-200 select-none hover:text-white transition-colors">
                        Os materiais (régua, linha) estão inclusos?
                        <span className="relative flex items-center justify-center w-6 h-6 shrink-0 text-purple-400">
<i className="lucide-plus w-5 h-5 absolute" data-lucide="plus"></i>
<i className="lucide-minus w-5 h-5 absolute" data-lucide="minus"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        Este é um treinamento digital. Você receberá uma lista detalhada no módulo 1 com todas as recomendações de materiais profissionais e onde comprá-los com melhor custo-benefício.
                    </div>
</details>
</div>
</section>

<footer className="relative pt-32 pb-12 mt-auto overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-20">
<h2 className="text-[15vw] leading-none font-serif-custom text-white tracking-tighter mix-blend-overlay">LUDMILA</h2>
</div>
<div className="relative z-10 flex flex-col items-center px-6">
<div className="mb-12 text-center space-y-4">
<p className="text-sm font-medium uppercase tracking-widest text-slate-400">O próximo passo para a sua carreira</p>
<a className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-white/10 border border-white/20 backdrop-blur-xl rounded-full hover:bg-white/20 hover:border-white/30 transition-all shadow-2xl" href="#checkout" id="checkout">
                        Acessar Alinhamento na Régua
                        <i className="ml-2 w-5 h-5 text-purple-400" data-lucide="arrow-right"></i>
</a>
</div>
<div className="text-xs text-slate-600 mt-16 text-center">
<p>© 2024 Ludmila Design. Todos os direitos reservados.</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
