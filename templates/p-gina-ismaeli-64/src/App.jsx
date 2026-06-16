import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        lucide.createIcons();

        const agents = [
            {
                tag: "Agente IA",
                title: "Inspeção de Funil",
                desc: "Avalia continuamente suas oportunidades com base em metodologias de vendas consagradas como MEDDPICC e os playbooks de vendas da sua empresa. Sinaliza riscos potenciais em tempo real e recomenda próximas ações específicas para corrigir gaps, antes que os negócios esfriem. Também auxilia na qualificação e desqualificação das oportunidades de vendas e probabilidades de fechamento. Seu time nunca mais vai perder um deal por falta de visibilidade.",
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a7c0eda-dda6-403e-a569-f00d20620a09_800w.png"
            },
            {
                tag: "Agente IA",
                title: "Analista de Forecast",
                desc: "Analisa milhares de variáveis que influenciam a conversão e identifica padrões nos dados de oportunidades e contas. Descobre tendências de perda de negócios e probabilidade de fechamento, entregando insights proativos que ajudam os gestores a alocar recursos com precisão, mitigar riscos e manter o momentum do pipeline.",
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/195c5152-f10f-4f56-a40b-abe71d5e26d0_800w.png"
            },
            {
                tag: "Agente IA",
                title: "Analista de Customer Success",
                desc: "Organiza e acompanha todas as demandas dos clientes — a partir de dados estruturados e não estruturados, para dar suporte em Revisões de Conta e garantir que nenhuma ação fique para trás. Oferece uma visão completa de quem fez o quê, quando e quais pendências existem, permitindo que os Account Managers atuem de forma proativa na sua base.",
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f52bb09-a01a-40d8-96cf-e96abbc920af_800w.png"
            },
            {
                tag: "Agente IA",
                title: "Sales Engineer",
                desc: "Responde a perguntas técnicas e competitivas em segundos. Fornece respostas contextualizadas tanto para os prospects quanto para os vendedores durante as negociações — com precisão técnica e linguagem comercial. Seu time entra em qualquer reunião preparado para responder perguntas mais técnicas ou objeções.",
                img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f181844-03ae-4156-bff4-a016c6482748_800w.png"
            },
            {
                tag: "Agente IA",
                title: "Sales Coach",
                desc: "Conduzem simulações realistas, fornecem feedback imediato e entregam relatórios detalhados sobre competências atuais e gaps de desenvolvimento — transformando cada vendedor na sua melhor versão.",
                img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
            },
            {
                tag: "Agente IA",
                title: "Sales Pro",
                desc: "Coaching de vendas consultivas que avalia seu cenário de vendas, identifica áreas de melhoria e fornece coaching para os próximos passos e ações de vendas. Auxilia em cada etapa do processo de vendas, desde o diagnóstico do cliente, qualificação, objeções, negociação, técnicas de fechamento e gestão do pipeline. É como ter um VP de Vendas ao seu lado em todos os deals.",
                img: "https://images.unsplash.com/photo-1620825937374-87fc1a600f2c?auto=format&fit=crop&q=80&w=800"
            }
        ];

        function showAgent(index) {
            const detail = document.getElementById('agentDetail');
            const img = document.getElementById('detailImage');
            const tag = document.getElementById('detailTag');
            const title = document.getElementById('detailTitle');
            const desc = document.getElementById('detailDesc');

            img.src = agents[index].img;
            tag.textContent = agents[index].tag;
            title.textContent = agents[index].title;
            desc.textContent = agents[index].desc;

            detail.classList.remove('hidden');
            detail.classList.add('flex');
            
            // Scroll to detail view smoothly
            detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function closeAgent() {
            const detail = document.getElementById('agentDetail');
            detail.classList.add('hidden');
            detail.classList.remove('flex');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500 ease-in-out">
<a className="group flex items-center hover:scale-105 transition-all duration-500 ease-in-out" href="#">
<img alt="Agentive Logo" className="md:h-16 w-auto h-14 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8492e79-ae6a-4d64-97ab-eaef146c5410_800w.png"/>
</a>
<ul className="hidden md:flex gap-8 items-center">
<li className=""><a className="inline-block text-xs font-normal text-slate-500 hover:text-blue-600 hover:-translate-y-0.5 uppercase tracking-widest transition-all duration-300 ease-in-out" href="#agentes">Agentes</a></li>
<li><a className="inline-block text-xs font-normal text-slate-500 hover:text-blue-600 hover:-translate-y-0.5 uppercase tracking-widest transition-all duration-300 ease-in-out" href="#visao">Nossa Visão</a></li>
<li><a className="inline-block text-xs font-normal text-slate-500 hover:text-blue-600 hover:-translate-y-0.5 uppercase tracking-widest transition-all duration-300 ease-in-out" href="#resultados">Resultados</a></li>
<li><a className="inline-block text-xs font-normal text-slate-500 hover:text-blue-600 hover:-translate-y-0.5 uppercase tracking-widest transition-all duration-300 ease-in-out" href="#sobre">Sobre</a></li>
<li><a className="inline-block text-xs font-normal text-slate-500 hover:text-blue-600 hover:-translate-y-0.5 uppercase tracking-widest transition-all duration-300 ease-in-out" href="#faq">FAQ</a></li>
</ul>
<a className="bg-slate-900 text-white text-xs font-normal uppercase tracking-widest px-6 py-3 rounded-md hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-500 ease-in-out cursor-pointer inline-block" href="#calendario">
            Falar com especialista
        </a>
</nav>
<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] px-6 md:px-12 py-16 lg:py-0 items-center gap-12 lg:gap-24 border-b border-slate-200 transition-all duration-500 ease-in-out">
<div className="flex flex-col transition-all duration-500 ease-in-out items-start">
<div className="flex items-center gap-3 mb-6 hover:translate-x-2 transition-transform duration-500 ease-in-out">
<div className="w-8 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
<span className="text-xs font-normal uppercase tracking-widest text-blue-600">A 1ª empresa brasileira de</span>
</div>
<div className="inline-flex bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-xs font-normal text-slate-700 mb-8 hover:bg-white hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 ease-in-out cursor-default">
                Orquestração de Receitas com IA
            </div>
<p className="text-xl md:text-2xl text-slate-500 mb-4 font-normal transition-all duration-500">Nossos agentes de receitas trabalham para você</p>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-slate-900 mb-10 leading-none transition-all duration-500 hover:scale-[1.01] origin-left">
                Crie.<br/>
<em className="font-['Playfair_Display'] italic font-normal text-blue-600 hover:text-blue-500 transition-colors duration-500">Converta.</em><br/>
                Feche.
            </h1>
<ul className="flex flex-col gap-4 mb-10">
<li className="flex items-start gap-3 text-slate-600 text-lg group cursor-default transition-all duration-300 ease-in-out hover:translate-x-2">
<i className="text-blue-500 mt-1 w-5 h-5 shrink-0 group-hover:scale-125 group-hover:text-blue-600 transition-all duration-500 ease-in-out" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors duration-300 ease-in-out">Preencha seu funil de vendas com mais velocidade e precisão</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-lg group cursor-default transition-all duration-300 ease-in-out hover:translate-x-2">
<i className="text-blue-500 mt-1 w-5 h-5 shrink-0 group-hover:scale-125 group-hover:text-blue-600 transition-all duration-500 ease-in-out" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors duration-300 ease-in-out">Priorize as ações dos vendedores para fechar mais negócios</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-lg group cursor-default transition-all duration-300 ease-in-out hover:translate-x-2">
<i className="text-blue-500 mt-1 w-5 h-5 shrink-0 group-hover:scale-125 group-hover:text-blue-600 transition-all duration-500 ease-in-out" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors duration-300 ease-in-out">Identifique quais negócios estão em risco antes que seja tarde</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-lg group cursor-default transition-all duration-300 ease-in-out hover:translate-x-2">
<i className="text-blue-500 mt-1 w-5 h-5 shrink-0 group-hover:scale-125 group-hover:text-blue-600 transition-all duration-500 ease-in-out" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors duration-300 ease-in-out">Apoie seus vendedores durante reuniões com dados técnicos e táticas de vendas consultivas</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-lg group cursor-default transition-all duration-300 ease-in-out hover:translate-x-2">
<i className="text-blue-500 mt-1 w-5 h-5 shrink-0 group-hover:scale-125 group-hover:text-blue-600 transition-all duration-500 ease-in-out" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="group-hover:text-slate-900 transition-colors duration-300 ease-in-out">Gere uma receita mais previsível e sustentável</span>
</li>
</ul>
<div className="flex flex-wrap gap-4 w-full">
<a className="bg-slate-900 text-white text-xs font-normal uppercase tracking-widest px-8 py-4 rounded-md hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-in-out inline-block" href="#calendario">
                    Agendar Demo
                </a>
<a className="bg-transparent border border-slate-300 text-slate-900 text-xs font-normal uppercase tracking-widest px-8 py-4 rounded-md hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-in-out inline-block" href="#calendario">
                    Falar com especialista
                </a>
</div>
</div>
<div className="w-full flex justify-center items-center relative perspective-1000 transition-all duration-700 ease-in-out">
<div className="w-full aspect-video bg-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-xl hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-3 hover:border hover:border-blue-500/40 hover:scale-[1.02] transition-all duration-700 ease-in-out z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-slate-900/20 to-transparent group-hover:from-blue-500/60 group-hover:scale-110 transition-all duration-700 ease-in-out"></div>
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative z-10 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-500 ease-in-out backdrop-blur-sm shadow-lg">
<i className="text-white w-8 h-8 ml-1 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-500 ease-in-out" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="relative z-10 text-center px-6 transition-all duration-500 ease-in-out group-hover:translate-y-1">
<div className="text-base text-white/50 tracking-wide mb-1 group-hover:text-white/80 transition-colors duration-500 ease-in-out">Assista os fundadores da Agentive explicar</div>
<div className="text-lg text-white/80 font-normal group-hover:text-white transition-colors duration-500 ease-in-out">como transformamos suas receitas</div>
</div>
</div>
</div>
</section>
<div className="bg-slate-50 border-b border-slate-200 px-6 md:px-12 py-6 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-x-auto transition-all duration-500 ease-in-out hover:bg-slate-100/50">
<span className="text-xs font-normal tracking-widest uppercase text-slate-500 whitespace-nowrap transition-colors duration-300">Integra com</span>
<div className="flex items-center gap-8 md:gap-12 min-w-max">
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">Salesforce</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">HubSpot</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">Gong</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">Clari</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">Slack</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out cursor-default">Zoom</span>
<span className="text-sm font-normal text-slate-400 hover:text-blue-600 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out cursor-default">+40 ferramentas</span>
</div>
</div>
<section className="bg-slate-900 px-6 md:px-12 py-24" id="agentes">
<div className="flex items-center gap-3 mb-4 hover:translate-x-2 transition-transform duration-500 ease-in-out">
<div className="w-6 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
<span className="text-xs font-normal uppercase tracking-widest text-white/50">Conheça o time</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4 transition-all duration-500 ease-in-out hover:scale-[1.01] origin-left">Apresentamos nosso time de <br className="hidden md:block"/><em className="font-['Playfair_Display'] italic font-normal text-blue-400 hover:text-blue-300 transition-colors duration-500">Agentes de Receitas</em></h2>
<p className="text-lg text-white/50 max-w-2xl mb-6 leading-relaxed transition-all duration-500 ease-in-out hover:text-white/70">
            Eles trabalham em conjunto com sua equipe comercial para que seu time possa focar no que mais importa — <strong className="text-white/90 font-normal">Fechar Negócios.</strong>
</p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-normal text-blue-300 mb-12 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
<i className="w-4 h-4" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<span>Clique nas imagens para ver mais detalhes</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(0)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Inspeção de Funil" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a7c0eda-dda6-403e-a569-f00d20620a09_800w.png"/>
<div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(1)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Análise de Forecast" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/195c5152-f10f-4f56-a40b-abe71d5e26d0_800w.png"/>
<div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(2)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Customer Success" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f52bb09-a01a-40d8-96cf-e96abbc920af_800w.png"/>
<div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(3)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Sales Engineer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f181844-03ae-4156-bff4-a016c6482748_800w.png"/>
<div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(4)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Sales Coach" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
<div className="group cursor-pointer flex flex-col items-center gap-3" onclick="showAgent(5)">
<div className="w-full aspect-square rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden relative group-hover:-translate-y-3 group-hover:scale-105 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] transition-all duration-500 ease-in-out">
<img alt="Sales Pro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1620825937374-87fc1a600f2c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 ease-in-out"></div>
</div>
</div>
</div>
<div className="hidden relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 gap-8 md:gap-10 items-center md:items-start transition-all duration-700 ease-in-out shadow-2xl hover:bg-white/10 hover:border-white/20" id="agentDetail">
<button className="absolute top-6 right-6 text-white/40 hover:text-white hover:rotate-180 hover:scale-125 transition-all duration-500 ease-in-out z-20" onclick="closeAgent()">
<i className="w-6 h-6" data-lucide="x-circle" strokeWidth="1.5"></i>
</button>
<div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl bg-slate-800/50 border border-white/10 overflow-hidden shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] relative group hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.6)] hover:border-blue-400" id="detailImageContainer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" id="detailImage" src=""/>
</div>
<div className="flex-1 text-center md:text-left transition-all duration-500 ease-in-out">
<div className="text-xs font-normal tracking-widest uppercase text-blue-400 mb-3 transition-colors duration-300" id="detailTag"></div>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4 transition-colors duration-300" id="detailTitle"></h3>
<p className="text-base md:text-lg text-white/60 leading-relaxed transition-colors duration-300 hover:text-white/80 text-justify md:text-left" id="detailDesc"></p>
</div>
</div>
</section>
<section className="bg-slate-50 px-6 md:px-12 py-24 border-b border-slate-200 transition-colors duration-700 ease-in-out hover:bg-white" id="visao">
<div className="flex items-center gap-3 mb-6 hover:translate-x-2 transition-transform duration-500 ease-in-out">
<div className="w-6 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
<span className="text-xs font-normal uppercase tracking-widest text-blue-600">Nossa Visão</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-6 transition-all duration-500 hover:scale-[1.01] origin-left">Agentes <em className="font-['Playfair_Display'] italic font-normal text-blue-600 hover:text-blue-500 transition-colors duration-500">sob medida</em> para<br/>o seu negócio</h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-16 transition-all duration-500 hover:text-slate-800">
            Criamos agentes com letramento e contexto específicos para a sua empresa. Tudo começa com a revisão das suas diretrizes comerciais, passando pelos playbooks de vendas e pela análise do perfil dos seus clientes — e se estende à <strong className="font-normal text-slate-900">manutenção contínua dos seus agentes</strong> por meio de um modelo de <strong className="font-normal text-slate-900">Managed AI Agents</strong> (Agent Ops): monitoramento, retraining e evolução constante para que seus agentes performem sempre no máximo.
        </p>
<div className="w-full bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col relative z-10 hover:shadow-2xl hover:border-blue-300 hover:scale-[1.01] transition-all duration-700 ease-in-out">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer">
<div className="w-full md:w-32 h-32 md:h-full shrink-0 relative overflow-hidden">
<img alt="Reunião de negócios" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-5 flex items-center gap-4 w-full transition-colors duration-500 ease-in-out group-hover:bg-blue-50/30">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:scale-110 transition-all duration-500 ease-in-out">
<i className="text-blue-600 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-in-out" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<span className="text-slate-800 font-normal text-base leading-snug group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Playbooks de Vendas &amp; Diretrizes Comerciais</span>
</div>
</div>
<div className="group flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer">
<div className="w-full md:w-32 h-32 md:h-full shrink-0 relative overflow-hidden">
<img alt="Análise de dados" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-5 flex items-center gap-4 w-full transition-colors duration-500 ease-in-out group-hover:bg-blue-50/30">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100 group-hover:border-blue-300 group-hover:scale-110 transition-all duration-500 ease-in-out">
<i className="text-blue-600 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-in-out" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-slate-800 font-normal text-base leading-snug group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Segmentação da Base de Clientes &amp; Análise Comportamental</span>
</div>
</div>
</div>
<div className="flex justify-center h-8 my-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="w-px border-l-2 border-dashed border-blue-300"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out flex flex-col cursor-pointer">
<div className="overflow-hidden w-full h-24 relative">
<img alt="Gestão de Pipeline" className="w-full h-full object-cover border-b border-slate-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-4 flex flex-col items-center text-center gap-2 flex-1 justify-center bg-slate-50/50 group-hover:bg-blue-50 transition-colors duration-500 ease-in-out">
<i className="text-blue-500 w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-in-out" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-slate-800 text-sm font-medium leading-tight uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Gestão de<br/>Pipeline</span>
</div>
</div>
<div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out flex flex-col cursor-pointer">
<div className="overflow-hidden w-full h-24 relative">
<img alt="Engajamento" className="w-full h-full object-cover border-b border-slate-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-4 flex flex-col items-center text-center gap-2 flex-1 justify-center bg-slate-50/50 group-hover:bg-blue-50 transition-colors duration-500 ease-in-out">
<i className="text-blue-500 w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-in-out" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-slate-800 text-sm font-medium leading-tight uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Engajamento &amp; Produtividade<br/>em Vendas</span>
</div>
</div>
<div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out flex flex-col cursor-pointer">
<div className="overflow-hidden w-full h-24 relative">
<img alt="Forecast" className="w-full h-full object-cover border-b border-slate-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-4 flex flex-col items-center text-center gap-2 flex-1 justify-center bg-slate-50/50 group-hover:bg-blue-50 transition-colors duration-500 ease-in-out">
<i className="text-blue-500 w-5 h-5 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-in-out" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-slate-800 text-sm font-medium leading-tight uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Forecast &amp; Inteligência<br/>de Receita</span>
</div>
</div>
<div className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out flex flex-col cursor-pointer">
<div className="overflow-hidden w-full h-24 relative">
<img alt="Retenção" className="w-full h-full object-cover border-b border-slate-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 ease-in-out"></div>
</div>
<div className="p-4 flex flex-col items-center text-center gap-2 flex-1 justify-center bg-slate-50/50 group-hover:bg-blue-50 transition-colors duration-500 ease-in-out">
<i className="text-blue-500 w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-in-out" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-slate-800 text-sm font-medium leading-tight uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-500 ease-in-out">Retenção &amp; Crescimento<br/>de Clientes</span>
</div>
</div>
</div>
<div className="flex justify-center h-8 my-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="w-px border-l-2 border-dashed border-blue-300"></div>
</div>
<div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center p-8 bg-slate-900 group hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/60 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-700 ease-in-out cursor-pointer">
<img alt="Data Servers" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-out mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-4 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-lg shadow-lg border border-slate-100 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-all duration-500 ease-in-out">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-500 ease-in-out">
<i className="text-blue-600 w-5 h-5 group-hover:scale-125 transition-transform duration-500 ease-in-out" data-lucide="server" strokeWidth="1.5"></i>
</div>
<span className="text-slate-900 font-medium text-base tracking-wide group-hover:text-blue-800 transition-colors duration-300">Camada de Dados de Clientes &amp; Vendas</span>
</div>
</div>
</div>
</section>
<section className="bg-white px-6 md:px-12 py-24 border-b border-slate-200 transition-colors duration-700 ease-in-out hover:bg-slate-50/50" id="resultados">
<div className="flex items-center gap-3 mb-6 hover:translate-x-2 transition-transform duration-500 ease-in-out">
<div className="w-6 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
<span className="text-xs font-normal uppercase tracking-widest text-blue-600">O que o mercado comprova</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-6 transition-all duration-500 hover:scale-[1.01] origin-left">Gestão de vendas <em className="font-['Playfair_Display'] italic font-normal text-blue-600 hover:text-blue-500 transition-colors duration-500">com IA</em>:<br/>os números que importam</h2>
<p className="text-lg text-slate-500 max-w-3xl mb-16 leading-relaxed transition-colors duration-500 hover:text-slate-700">
            Pesquisas de McKinsey, Bain &amp; Company, Gartner, Forrester e IDC mostram o impacto real de agentes de IA na gestão comercial — em pipeline, forecast, retenção e desenvolvimento de times.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-xl overflow-hidden mb-12 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-300 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-700 ease-in-out group/stats relative z-10">
<div className="p-10 md:p-12 bg-white border-b md:border-b-0 md:border-r border-slate-200 group-hover/stats:bg-blue-50/30 transition-colors duration-700 ease-in-out">
<div className="text-6xl md:text-7xl font-normal tracking-tight text-blue-600 mb-4 leading-none group-hover/stats:scale-110 group-hover/stats:text-blue-700 group-hover/stats:translate-x-2 transition-all duration-700 ease-out origin-left">45%</div>
<div className="text-lg font-normal text-slate-900 mb-3 transition-colors duration-300 group-hover/stats:text-blue-900">Mais negócios fechados com ferramentas de IA</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 transition-colors duration-300 group-hover/stats:text-slate-700">Vendedores que operam com ferramentas de IA fecham 45% mais deals do que equipes que dependem exclusivamente de processos manuais.</div>
<div className="text-xs font-normal tracking-widest uppercase text-blue-600/60 mt-auto transition-colors duration-300 group-hover/stats:text-blue-600">Forrester Research, 2025</div>
</div>
<div className="p-10 md:p-12 bg-white group-hover/stats:bg-blue-50/30 transition-colors duration-700 ease-in-out">
<div className="text-6xl md:text-7xl font-normal tracking-tight text-blue-500 mb-4 leading-none group-hover/stats:scale-110 group-hover/stats:text-blue-600 group-hover/stats:translate-x-2 transition-all duration-700 ease-out origin-left">65%</div>
<div className="text-lg font-normal text-slate-900 mb-3 transition-colors duration-300 group-hover/stats:text-blue-900">Redução em vendas perdidas com IA preditiva</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 transition-colors duration-300 group-hover/stats:text-slate-700">IA identifica riscos de perda antes que aconteçam — reduzindo em 65% as vendas perdidas por falta de visibilidade ou ação tardia no pipeline.</div>
<div className="text-xs font-normal tracking-widest uppercase text-blue-600/60 mt-auto transition-colors duration-300 group-hover/stats:text-blue-600">McKinsey, 2025</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16 relative">
<div className="bg-white p-8 md:p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:scale-[1.02] hover:border hover:border-blue-300 hover:rounded-xl hover:z-20 transition-all duration-500 ease-in-out flex flex-col relative group">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase text-slate-500 mb-6 group-hover:text-blue-600 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform duration-300"></div> Análise de Forecast
                </div>
<div className="text-5xl font-normal tracking-tight text-blue-600 mb-4 leading-none group-hover:scale-110 group-hover:translate-x-2 transition-all duration-500 ease-out origin-left">−35%</div>
<div className="text-base font-normal text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">Redução na variância de receita projetada</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 flex-1 group-hover:text-slate-700 transition-colors duration-300">Equipes com IA de inspeção de pipeline reduzem drasticamente a diferença entre o forecast e a receita realizada — entregando mais previsibilidade ao negócio.</div>
<div className="pt-4 border-t border-slate-100 text-xs font-normal tracking-widest uppercase text-slate-400 group-hover:text-blue-400 group-hover:border-blue-100 transition-colors duration-300">Forrester Sales Analytics Study, 2025</div>
</div>
<div className="bg-white p-8 md:p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:scale-[1.02] hover:border hover:border-blue-300 hover:rounded-xl hover:z-20 transition-all duration-500 ease-in-out flex flex-col relative group">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase text-slate-500 mb-6 group-hover:text-blue-600 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div> Todos os Agentes
                </div>
<div className="text-5xl font-normal tracking-tight text-blue-500 mb-4 leading-none group-hover:scale-110 group-hover:translate-x-2 transition-all duration-500 ease-out origin-left">66%</div>
<div className="text-base font-normal text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">Do tempo do vendedor é perdido em tarefas não comerciais</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 flex-1 group-hover:text-slate-700 transition-colors duration-300">Vendedores dedicam apenas 34% do tempo a vender. Os agentes de receitas automatizam o restante — devolvendo horas para relacionamento e fechamento.</div>
<div className="pt-4 border-t border-slate-100 text-xs font-normal tracking-widest uppercase text-slate-400 group-hover:text-blue-400 group-hover:border-blue-100 transition-colors duration-300">Forrester / ZoomInfo, 2025</div>
</div>
<div className="bg-white p-8 md:p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:scale-[1.02] hover:border hover:border-blue-300 hover:rounded-xl hover:z-20 transition-all duration-500 ease-in-out flex flex-col relative group">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase text-slate-500 mb-6 group-hover:text-blue-600 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div> Sales Engineer
                </div>
<div className="text-5xl font-normal tracking-tight text-blue-500 mb-4 leading-none group-hover:scale-110 group-hover:translate-x-2 transition-all duration-500 ease-out origin-left">+30%</div>
<div className="text-base font-normal text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">Das demos de presales são feitas para oportunidades não qualificadas</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 flex-1 group-hover:text-slate-700 transition-colors duration-300">Mais de 50% dos Sales Engineers relatam que ao menos 30% das demos envolvem deals subqualificados — desperdiçando o recurso mais caro da operação, com OTE médio de US$ 167 mil por profissional.</div>
<div className="pt-4 border-t border-slate-100 text-xs font-normal tracking-widest uppercase text-slate-400 group-hover:text-blue-400 group-hover:border-blue-100 transition-colors duration-300">Consensus SE Report / RepVue, 2025</div>
</div>
<div className="bg-white p-8 md:p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:scale-[1.02] hover:border hover:border-blue-300 hover:rounded-xl hover:z-20 transition-all duration-500 ease-in-out flex flex-col relative group">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase text-slate-500 mb-6 group-hover:text-blue-600 transition-colors duration-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform duration-300"></div> Sales Coach
                </div>
<div className="text-5xl font-normal tracking-tight text-blue-400 mb-4 leading-none group-hover:scale-110 group-hover:translate-x-2 transition-all duration-500 ease-out origin-left">275%</div>
<div className="text-base font-normal text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">Mais confiança dos vendedores com simulação por IA</div>
<div className="text-base text-slate-500 leading-relaxed mb-6 flex-1 group-hover:text-slate-700 transition-colors duration-300">Participantes de treinamentos com simulação baseada em IA são 275% mais confiantes na aplicação das habilidades — versus treinamentos tradicionais.</div>
<div className="pt-4 border-t border-slate-100 text-xs font-normal tracking-widest uppercase text-slate-400 group-hover:text-blue-400 group-hover:border-blue-100 transition-colors duration-300">PwC Research, 2025</div>
</div>
</div>
<div className="bg-slate-900 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-lg group/urgency hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-700 ease-in-out cursor-default border border-slate-800 hover:border-blue-500/50">
<div className="p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 ease-in-out group/card">
<div className="text-xs font-normal tracking-widest uppercase text-white/40 mb-4 group-hover/card:text-blue-300 transition-colors duration-300">O cenário atual</div>
<div className="text-5xl font-normal tracking-tight text-white mb-4 group-hover/card:scale-110 group-hover/card:translate-x-2 transition-all duration-500 ease-out origin-left">67<em className="not-italic text-blue-400">%</em></div>
<div className="text-base text-white/60 leading-relaxed mb-6 group-hover/card:text-white/90 transition-colors duration-300">dos líderes de operações de vendas afirmam que fazer forecasts precisos está mais difícil hoje do que há três anos.</div>
<div className="text-xs font-normal tracking-widest uppercase text-white/30 group-hover/card:text-white/50 transition-colors duration-300">Gartner, 2025</div>
</div>
<div className="p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 ease-in-out group/card">
<div className="text-xs font-normal tracking-widest uppercase text-white/40 mb-4 group-hover/card:text-blue-300 transition-colors duration-300">A janela está fechando</div>
<div className="text-5xl font-normal tracking-tight text-white mb-4 group-hover/card:scale-110 group-hover/card:translate-x-2 transition-all duration-500 ease-out origin-left">75<em className="not-italic text-blue-400">%</em></div>
<div className="text-base text-white/60 leading-relaxed mb-6 group-hover/card:text-white/90 transition-colors duration-300">das empresas B2B terão IA para scoring e otimização de funil implementada até o fim de 2025. Empresas que não agirem perderão vantagem competitiva permanente.</div>
<div className="text-xs font-normal tracking-widest uppercase text-white/30 group-hover/card:text-white/50 transition-colors duration-300">IDC FutureScape</div>
</div>
<div className="p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 ease-in-out group/card">
<div className="text-xs font-normal tracking-widest uppercase text-white/40 mb-4 group-hover/card:text-blue-300 transition-colors duration-300">O custo de esperar</div>
<div className="text-5xl font-normal tracking-tight text-white mb-4 group-hover/card:scale-110 group-hover/card:translate-x-2 transition-all duration-500 ease-out origin-left">25<em className="not-italic text-blue-400">%</em></div>
<div className="text-base text-white/60 leading-relaxed mb-6 group-hover/card:text-white/90 transition-colors duration-300">da receita potencial pode ser perdida por problemas de qualidade de dados e processes desalinhados — em empresas que ainda não adotaram orquestração de receitas.</div>
<div className="text-xs font-normal tracking-widest uppercase text-white/30 group-hover/card:text-white/50 transition-colors duration-300">Forrester, 2025</div>
</div>
</div>
<p className="mt-12 pt-6 border-t border-slate-100 text-sm text-slate-400 leading-relaxed text-justify hover:text-slate-500 transition-colors duration-500">
            Fontes: McKinsey &amp; Company (State of AI 2025 | B2B Future of Sales 2025), Bain &amp; Company (2025), Gartner (Sales Research 2024–2025 | State of RevOps), Forrester Research (Sales Analytics Study 2025 | State of RevOps 2025 | Future of Sales Jobs 2025), IDC FutureScape, HubSpot State of Sales (2024), ZoomInfo State of AI in Sales (2025), Salesforce State of Sales (2025), PwC Research (2025), Deloitte (2025), Consensus SE Report (2025), RepVue (2025), IBM Research (2025). Dados referentes a pesquisas publicadas entre 2024 e 2025.
        </p>
</section>
<section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 px-6 md:px-12 py-24 border-b border-blue-900 transition-colors duration-700 ease-in-out" id="sobre">
<div className="flex items-center gap-3 mb-6 transition-transform duration-500 ease-in-out">
<div className="w-6 h-[2px] bg-gradient-to-r from-blue-200 to-white"></div>
<span className="text-xs font-normal uppercase tracking-widest text-blue-100">Nossa Equipe</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6 transition-all duration-500 origin-left">As pessoas <em className="font-['Playfair_Display'] italic font-normal text-blue-300 transition-colors duration-500">por trás</em><br/>dos agentes</h2>
<p className="text-lg text-blue-100 max-w-3xl mb-16 leading-relaxed transition-colors duration-500">
            Uma combinação única de experiência comercial de alto nível e profundidade técnica em Inteligência Artificial — construída para transformar como empresas brasileiras orquestram receita.
        </p>
<div className="flex flex-col gap-8">
<div className="bg-white rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-16 items-center lg:items-start shadow-xl border border-transparent transition-all duration-700 ease-in-out relative z-10 cursor-default">
<div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full">
<div className="w-full aspect-[4/5] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out">
<img alt="Rosana Fernandes" className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/153995c7-4f21-48e4-92e4-b676dfde46b7_800w.png"/>
<i className="w-16 h-16 text-slate-300 hidden" data-lucide="user" strokeWidth="1.5" style={{display: 'none'}}></i>
</div>
<div className="w-full">
<div className="text-2xl lg:text-3xl font-normal text-slate-900 mb-2 transition-all duration-500 ease-in-out">Rosana Fernandes</div>
<div className="text-sm font-normal tracking-widest uppercase text-blue-600 mb-1 transition-colors duration-300">Fundadora</div>
<div className="text-sm font-normal tracking-widest uppercase text-blue-500 transition-colors duration-300">CEO</div>
</div>
</div>
<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<p className="text-base lg:text-lg font-normal text-slate-900 leading-relaxed mb-6 pl-4 border-l-2 border-blue-500 transition-all duration-500 ease-in-out">
                        Com 30 anos transformando operações comerciais, Rosana Fernandes fundou a Agentive para orquestrar receitas de empresas B2B com agentes de IA.
                    </p>
<div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8 transition-colors duration-500">
<p>Especialista em Revenue Operations, lidera projetos que integram Marketing, Vendas, CX e Produtos para ampliar receitas com consistência e escala. Ao longo da carreira, conduziu transformações comerciais em organizações como Microsoft, SAP, Bradesco, GM e Grupo Ultra — sempre na interseção entre estratégia e execução real.</p>
<p>Com passagem por IBM e KPMG, é Administradora de Empresas com Doutorado em Marketing pela EAESP/FGV e especialização pela Wharton School. Instrutora em eventos nacionais e internacionais para grandes corporações e multinacionais.</p>
<p>Hoje, na Agentive, combina essa trajetória com o letramento em IA — capacitando times de vendas a criar contexto e trabalhar com agentes de IA para elevar a performance comercial no Brasil.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Revenue Operations</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">CRM</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Customer Experience</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">FGV · Wharton</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">IBM · KPMG</span>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-16 items-center lg:items-start shadow-xl border border-transparent transition-all duration-700 ease-in-out relative z-10 cursor-default">
<div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full">
<div className="w-full aspect-[4/5] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shadow-lg transition-all duration-700 ease-in-out">
<img alt="Paulo Castro" className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ca6126f-32fd-4916-8e76-91418777c159_800w.png"/>
<i className="w-16 h-16 text-slate-300 hidden" data-lucide="user" strokeWidth="1.5" style={{display: 'none'}}></i>
</div>
<div className="w-full">
<div className="text-2xl lg:text-3xl font-normal text-slate-900 mb-2 transition-all duration-500 ease-in-out">Paulo Castro</div>
<div className="text-sm font-normal tracking-widest uppercase text-blue-600 mb-1 transition-colors duration-300">Co-fundador</div>
<div className="text-sm font-normal tracking-widest uppercase text-blue-500 transition-colors duration-300">CAIO — Chief Artificial Intelligence Officer</div>
</div>
</div>
<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<p className="text-base lg:text-lg font-normal text-slate-900 leading-relaxed mb-6 pl-4 border-l-2 border-blue-500 transition-all duration-500 ease-in-out">
                        Com 25 anos em tecnologia e 15 anos liderando iniciativas de Inteligência Artificial, Paulo Castro é o arquiteto por trás dos agentes de receitas da Agentive.
                    </p>
<div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8 transition-colors duration-500">
<p>Físico formado pela USP com Mestrado em Inteligência Artificial pela PUC-SP, ocupou posições de liderança executiva na Serasa Experian, EDP e Via Varejo — onde conduziu projetos de grande escala em IA, dados e automação, incluindo iniciativas de impacto direto em operações comerciais na Serasa Experian.</p>
<p>Na Agentive, traduz décadas de experiência em IA em resultados comerciais mensuráveis — liderando a arquitetura de agentes especializados em vendas consultivas e o desenvolvimento de plataformas de Sales Enablement projetadas para amplificar o potencial humano. Seu foco está em agentes que trabalham lado a lado com os times, potencializando pessoas — não as substituindo.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Agentic AI</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Sales Enablement</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">USP · PUC-SP</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Serasa Experian</span>
<span className="bg-slate-100 border border-slate-200 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 tracking-wide transition-all duration-300 ease-in-out">Via Varejo</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white px-6 md:px-12 py-24 border-b border-slate-200 transition-colors duration-700 ease-in-out hover:bg-slate-50/50" id="calendario">
<div className="max-w-5xl mx-auto flex flex-col items-center">
<div className="flex items-center gap-3 mb-6 hover:translate-x-2 transition-transform duration-500 ease-in-out">
<div className="w-6 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
<span className="text-xs font-normal uppercase tracking-widest text-blue-600">Próximos Passos</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-slate-900 mb-6 text-center transition-all duration-500 hover:scale-[1.01]">Vamos orquestrar sua <em className="font-['Playfair_Display'] italic font-normal text-blue-600 hover:text-blue-500 transition-colors duration-500">receita?</em></h2>
<p className="text-lg text-slate-500 text-center max-w-2xl mb-12 leading-relaxed transition-colors duration-500 hover:text-slate-700">
                Agende uma conversa com nossos especialistas. Descubra como nossos agentes podem se integrar à sua operação e gerar mais previsibilidade para as suas vendas.
            </p>
<div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden h-[700px] relative z-10 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 hover:-translate-y-1 transition-all duration-500 ease-in-out">

<iframe className="w-full h-full" frameborder="0" height="100%" src="https://calendly.com" title="Agendar Reunião Calendly" width="100%"></iframe>
</div>
</div>
</section>
<footer className="bg-slate-900 px-6 md:px-12 py-16 border-t border-slate-800 text-center md:text-left transition-all duration-500 ease-in-out">
<div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
<div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-500 ease-in-out">
<img alt="Agentive Logo" className="h-20 md:h-32 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8b85a72-a72f-4f95-b059-5cb9fdbfe245_1600w.png"/>
</div>
<div className="text-xs font-normal text-slate-500">
                © 2025 Agentive. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
