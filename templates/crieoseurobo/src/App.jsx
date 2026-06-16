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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');
gtag('config', 'G-49JMMXPDFV');



    // Contador Online Header
    function updateOnlineCount() {
        const min = 91;
        const max = 139;
        const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
        const el = document.getElementById('online-count');
        if(el) el.textContent = randomCount;
    }
    setInterval(updateOnlineCount, 10000);
    updateOnlineCount();

    // Lote Promocional (0h e 39min)
    const end = Date.now() + 39*60000 + 59000;
    function tick() {
        const d = end - Date.now();
        if (d <= 0) { ['t-hours','t-minutes','t-seconds'].forEach(id => document.getElementById(id).textContent = '00'); return; }
        document.getElementById('t-hours').textContent = String(Math.floor(d/3600000)).padStart(2,'0');
        document.getElementById('t-minutes').textContent = String(Math.floor(d%3600000/60000)).padStart(2,'0');
        document.getElementById('t-seconds').textContent = String(Math.floor(d%60000/1000)).padStart(2,'0');
    }
    setInterval(tick, 1000); tick();

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    function toggleFaq(btn) {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        const isOpen = content.classList.contains('open');
        
        document.querySelectorAll('.faq-content.open').forEach(c => { 
            c.classList.remove('open'); 
            c.previousElementSibling.querySelector('.faq-icon').classList.remove('open'); 
        });
        
        if (!isOpen) { 
            content.classList.add('open'); 
            icon.classList.add('open'); 
        }
    }

    function toggleMod(card) {
        const content = card.querySelector('.faq-content');
        const icon = card.querySelector('.faq-icon');
        const isOpen = content.classList.contains('open');
        
        document.querySelectorAll('.card .faq-content.open').forEach(c => { 
            c.classList.remove('open'); 
            c.closest('.card').querySelector('.faq-icon').classList.remove('open'); 
        });
        
        if (!isOpen) { 
            content.classList.add('open'); 
            icon.classList.add('open'); 
        }
    }

    window.addEventListener('scroll', () => {
        const h = document.getElementById('header');
        if (window.scrollY > 40) { 
            h.style.background = 'rgba(9,9,11,0.8)'; 
            h.style.borderBottomColor = 'rgba(255,255,255,0.08)'; 
        }
        else { 
            h.style.background = 'rgba(9,9,11,0.5)'; 
            h.style.borderBottomColor = 'transparent'; 
        }
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header id="header" style={{background: 'rgba(9, 9, 11, 0.5)', borderBottom: '1px solid transparent', backdropFilter: 'blur(24px)'}}>
<div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
<div className="w-2 h-2 rounded-full bg-[#D4FF00] animate-[pulse-dot_2s_infinite]"></div>
<span className="font-display text-xs md:text-sm font-normal text-white/90 tracking-wide">
<span id="online-count">109</span> online agora
            </span>
</div>
<div className="flex items-center gap-5">
<div className="hidden sm:flex items-center gap-2">
<div className="text-xs text-white/40 line-through font-light">R$ 1.890</div>
<div className="text-sm font-normal text-white flex items-baseline gap-0.5">
                    R$ 59<span className="text-xs text-white/60">,90</span>
</div>
</div>
<a className="btn-primary px-6 py-2.5 text-xs md:text-sm font-medium" href="https://pay.kiwify.com.br/tIgbS7O">
                GARANTIR VAGA
            </a>
</div>
</div>
</header>
<section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[95vh] flex items-center">
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-[#D4FF00]/[0.04] blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
</div>
<div className="grid-bg"></div>
<div className="max-w-[1100px] mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
<div className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start">
<div className="reveal mb-8">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4FF00]/5 border border-[#D4FF00]/15 text-[#D4FF00] text-xs md:text-sm font-normal tracking-widest uppercase shadow-[0_0_20px_rgba(212,255,0,0.08)]">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
                    O Novo Padrão de Operação
                </span>
</div>
<h1 className="reveal reveal-d1 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tighter text-white mb-6 leading-[1.05] max-w-[800px]">
<span className="text-gradient">Seu negócio lucrando</span><br/>
<span className="block text-[#D4FF00] mt-2 drop-shadow-[0_0_25px_rgba(212,255,0,0.2)]">24h por dia</span>
<span className="block sm:text-4xl md:text-5xl lg:text-6xl text-3xl text-white/50 tracking-tight mt-2">sem você apertar um botão.</span>
</h1>
<p className="reveal reveal-d2 text-lg sm:text-xl md:text-2xl font-light text-white/50 max-w-2xl mb-12 leading-relaxed px-2 lg:px-0">
                Descubra como empresários estão usando Agentes Autônomos de IA para automatizar vendas, atendimento e gestão. <strong className="text-white/80 font-normal">Sem saber programar e sem custos mensais.</strong>
</p>
<div className="reveal reveal-d2 mb-10 w-full max-w-md px-2 lg:px-0">
<div className="card flex flex-col items-center px-6 py-5 relative overflow-hidden w-full border-[#D4FF00]/10 bg-gradient-to-b from-[#D4FF00]/[0.02] to-transparent">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4FF00]/40 to-transparent"></div>
<div className="text-xs tracking-widest uppercase text-white/60 mb-4 flex items-center gap-2 font-normal">
<iconify-icon className="text-base text-[#D4FF00]" icon="solar:stopwatch-linear"></iconify-icon>
                        Disponível por apenas:
                    </div>
<div className="flex items-center gap-3">
<div className="flex flex-col items-center bg-white/[0.04] border border-white/10 rounded-xl w-[64px] md:w-[72px] py-2.5 shadow-inner shadow-white/5">
<div className="text-2xl md:text-3xl font-medium tracking-tight text-white/90" id="t-hours">00</div>
<div className="text-[10px] md:text-xs tracking-widest uppercase text-white/40 mt-0.5 font-light">horas</div>
</div>
<div className="text-xl md:text-2xl font-light text-white/30 pb-3">:</div>
<div className="flex flex-col items-center bg-white/[0.04] border border-white/10 rounded-xl w-[64px] md:w-[72px] py-2.5 shadow-inner shadow-white/5">
<div className="text-2xl md:text-3xl font-medium tracking-tight text-white/90" id="t-minutes">39</div>
<div className="text-[10px] md:text-xs tracking-widest uppercase text-white/40 mt-0.5 font-light">min</div>
</div>
<div className="text-xl md:text-2xl font-light text-white/30 pb-3">:</div>
<div className="flex flex-col items-center bg-[#D4FF00]/5 border border-[#D4FF00]/30 rounded-xl w-[64px] md:w-[72px] py-2.5 shadow-[0_0_15px_rgba(212,255,0,0.1)]">
<div className="text-2xl md:text-3xl font-medium tracking-tight text-[#D4FF00]" id="t-seconds">59</div>
<div className="text-[10px] md:text-xs tracking-widest uppercase text-[#D4FF00]/70 mt-0.5 font-normal">seg</div>
</div>
</div>
</div>
</div>
<div className="reveal reveal-d3 flex flex-col items-center lg:items-start gap-4 px-2 lg:px-0 w-full">
<div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap">
<span className="text-sm md:text-base text-white/30 line-through font-light">De R$ 1.890,00</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-[#D4FF00]/10 text-[#D4FF00] text-[10px] md:text-xs font-medium tracking-wide uppercase border border-[#D4FF00]/20">96% OFF</span>
</div>
<div className="font-display text-5xl md:text-6xl font-medium tracking-tighter text-white/90 leading-none flex items-baseline mb-2">
<span className="text-3xl md:text-4xl text-white/50 mr-1 font-light">Por</span>R$ 59<span className="text-2xl md:text-3xl font-light text-white/50 ml-1">,90</span>
</div>
<a className="btn-primary w-full sm:w-auto px-10 py-4 md:px-12 md:py-4 text-sm md:text-base font-medium whitespace-nowrap" href="https://pay.kiwify.com.br/tIgbS7O">
                    DESTRAVAR MEU ACESSO AGORA
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-4 mt-3 opacity-60">
<p className="text-[11px] md:text-xs text-white flex items-center gap-1.5 font-light">
<iconify-icon className="text-base text-[#D4FF00]" icon="solar:shield-check-linear"></iconify-icon>
                        Garantia 7 dias
                    </p>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<p className="text-[11px] md:text-xs text-white flex items-center gap-1.5 font-light">
<iconify-icon className="text-base text-[#D4FF00]" icon="solar:bolt-circle-linear"></iconify-icon>
                        Acesso Imediato
                    </p>
</div>
</div>
</div>
<div className="w-full lg:w-[45%] reveal reveal-d3 mt-12 lg:mt-0 perspective-1000">
<div className="relative w-full max-w-[380px] mx-auto animate-float-3d">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent blur-[120px] -z-10 rounded-full"></div>
<div className="bg-[#09090b]/80 border border-white/10 rounded-[2rem] shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col font-sans relative z-10 backdrop-blur-2xl">
<div className="px-6 py-4 flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02]">
<span className="text-xs font-normal tracking-widest text-white/50 uppercase flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:cpu-bolt-linear"></iconify-icon>
                            Painel de Agentes
                        </span>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D4FF00]/80 shadow-[0_0_12px_#D4FF00]"></div>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#D4FF00]/10 flex items-center justify-center text-[#D4FF00] border border-[#D4FF00]/20">
<iconify-icon className="text-xl" icon="solar:chat-round-money-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm md:text-base font-normal text-white/90">Agente Vendedor</span>
<span className="text-xs text-white/40 font-light mt-0.5">Ativo • Qualificando Leads</span>
</div>
</div>
<div className="text-[#D4FF00] text-xs font-normal tracking-wider animate-pulse">24/7</div>
</div>
<div className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 border border-white/10">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm md:text-base font-normal text-white/90">Gestor de Tráfego</span>
<span className="text-xs text-white/40 font-light mt-0.5">Otimizando ROAS Meta</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]"></div>
</div>
<div className="flex items-center justify-between p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 border border-white/10">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm md:text-base font-normal text-white/90">Suporte N1</span>
<span className="text-xs text-white/40 font-light mt-0.5">Lendo caixa de entrada</span>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="border-y border-white/[0.04] py-3 overflow-hidden bg-white/[0.01]">
<div className="ticker-wrap">
<div className="ticker-inner text-white/30">
<span className="font-display text-[11px] md:text-xs font-medium tracking-widest uppercase flex items-center gap-8">
<span>VENDAS NO AUTOMÁTICO</span> <span className="text-[#D4FF00]/50">✦</span>
<span>SEM CÓDIGO</span> <span className="text-[#D4FF00]/50">✦</span>
<span>EQUIPE 24 HORAS</span> <span className="text-[#D4FF00]/50">✦</span>
<span>REDUÇÃO DE CUSTOS</span> <span className="text-[#D4FF00]/50">✦</span>
<span>QUALIFICAÇÃO DE LEADS</span> <span className="text-[#D4FF00]/50">✦</span>
<span>GESTÃO DE DADOS</span> <span className="text-[#D4FF00]/50">✦</span>
<span>ESCALA INFINITA</span> <span className="text-[#D4FF00]/50">✦</span>
<span>CLAUDE 3.5 SONNET</span> <span className="text-[#D4FF00]/50">✦</span>
<span>VENDAS NO AUTOMÁTICO</span> <span className="text-[#D4FF00]/50">✦</span>
<span>SEM CÓDIGO</span> <span className="text-[#D4FF00]/50">✦</span>
<span>EQUIPE 24 HORAS</span> <span className="text-[#D4FF00]/50">✦</span>
</span>
</div>
</div>
</div>
<section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
<div className="reveal text-center mb-16 md:mb-24">
<span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/60 text-xs font-normal tracking-widest uppercase mb-6">O Fim da Era Manual</span>
<h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tighter text-gradient mb-6 leading-[1.1]">
            Você está perdendo dinheiro fazendo<br/>
<span className="text-white/40">o que um robô faria de graça.</span>
</h2>
<p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto font-light">
            Enquanto você perde horas respondendo clientes e organizando planilhas, seus concorrentes já têm agentes operando em silêncio e escalando lucros.
        </p>
</div>
<div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
<div className="card bg-white/[0.01] border-white/5 p-8 md:p-10 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-10">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
<iconify-icon className="text-2xl" icon="solar:close-square-linear"></iconify-icon>
</div>
<span className="font-display text-sm md:text-base font-medium text-white/50 tracking-widest uppercase">A FORMA ANTIGA</span>
</div>
<ul className="flex flex-col gap-6">
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-2xl text-red-400/50 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Funcionários caros que erram e trabalham apenas 8h por dia.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-2xl text-red-400/50 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Você travado na operação, apagando incêndios diários.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-2xl text-red-400/50 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Chatbots engessados que irritam o cliente com menus infinitos.
                </li>
</ul>
</div>
<div className="relative bg-gradient-to-br from-[#D4FF00]/[0.04] to-transparent border border-[#D4FF00]/20 rounded-[24px] p-8 md:p-10 overflow-hidden shadow-[0_0_40px_rgba(212,255,0,0.04)] backdrop-blur-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_60%)] pointer-events-none rounded-[24px]"></div>
<div className="flex items-center gap-3 mb-10 relative">
<div className="w-12 h-12 rounded-2xl bg-[#D4FF00]/10 border border-[#D4FF00]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.1)] text-[#D4FF00]">
<iconify-icon className="text-2xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<span className="font-display text-sm md:text-base font-medium text-[#D4FF00] tracking-widest uppercase">O NOVO PADRÃO (AGENTES)</span>
</div>
<ul className="flex flex-col gap-6 relative">
<li className="flex items-start gap-4 text-base md:text-lg text-white/90 leading-relaxed font-light">
<iconify-icon className="text-2xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Você define a meta, o Agente raciocina e executa de ponta a ponta.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/90 leading-relaxed font-light">
<iconify-icon className="text-2xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Opera silenciosamente lendo emails, preenchendo planilhas e fechando vendas.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/90 leading-relaxed font-light">
<iconify-icon className="text-2xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Escala infinita: ele trabalha Domingos e Feriados, sem reclamar de cansaço.
                </li>
</ul>
</div>
</div>
<div className="reveal flex justify-center">
<a className="btn-primary px-10 py-4 md:px-12 md:py-4 text-sm md:text-base font-medium" href="https://pay.kiwify.com.br/tIgbS7O">
            QUERO CRIAR MEUS AGENTES AGORA
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
<section className="py-16 md:py-24 px-6 border-y border-white/[0.04] bg-white/[0.01]">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="reveal py-4 md:py-0">
<div className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white/90 mb-4">10k<span className="text-[#D4FF00]">++</span></div>
<div className="text-base md:text-lg text-white/50 leading-relaxed font-light px-4">alunos construindo<br/>sistemas autônomos</div>
</div>
<div className="reveal reveal-d1 py-8 md:py-0">
<div className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white/90 mb-4">24<span className="text-[#D4FF00] font-light">/</span>7</div>
<div className="text-base md:text-lg text-white/50 leading-relaxed font-light px-4">de operação sem pagar<br/>nenhum salário extra</div>
</div>
<div className="reveal reveal-d2 py-4 md:py-0">
<div className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white/90 mb-4">4.9<span className="text-[#D4FF00] font-light text-4xl">/5</span></div>
<div className="text-base md:text-lg text-white/50 leading-relaxed font-light px-4">nota média de aprovação<br/>na plataforma Kiwify</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="reveal flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
<div className="w-full md:w-[40%] relative group">
<div className="absolute -inset-2 bg-gradient-to-br from-[#D4FF00]/10 to-transparent rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 -z-10"></div>
<img alt="Theo Barros - Arquiteto de Automação" className="relative z-10 w-full rounded-[2rem] border border-white/10 shadow-2xl object-cover aspect-[4/5] transition-all duration-700" src="https://i.postimg.cc/XjR3vRGW/theo.jpg"/>
</div>
<div className="w-full md:w-[60%] flex flex-col items-start text-left">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-xs md:text-sm font-normal tracking-widest uppercase mb-6 backdrop-blur-md">
<iconify-icon className="text-lg text-[#D4FF00]" icon="solar:user-id-linear"></iconify-icon>
                Seu Mentor
            </span>
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-gradient mb-4 leading-tight">
                Theo Barros
            </h2>
<h3 className="text-xl md:text-2xl text-white/60 font-light tracking-tight mb-8">
                Especialista em Escala e Inteligência Artificial
            </h3>
<div className="flex flex-col gap-5 text-base md:text-lg text-white/50 leading-relaxed font-light mb-10 max-w-xl">
<p className="">
                    Com vasta experiência em implementação de IA para negócios de alto faturamento, Theo decodificou a lógica por trás do Claude para criar <strong className="text-white/90 font-normal">arquiteturas autônomas reais e sem código</strong>.
                </p>
<p className="">
                    Seu método transforma empresários presos no operacional em arquitetos de negócios, substituindo tarefas exaustivas por engrenagens silenciosas que vendem e gerenciam dados sem descanso.
                </p>
</div>
<a className="btn-secondary px-8 py-4 md:px-10 md:py-4 text-sm md:text-base font-medium" href="https://pay.kiwify.com.br/tIgbS7O">
                APRENDER COM O THEO
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 max-w-4xl mx-auto border-t border-white/[0.04] bg-white/[0.01]">
<div className="reveal mb-16 md:mb-24 text-center flex flex-col items-center">
<span className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[#D4FF00] text-xs font-normal tracking-widest uppercase mb-6">Metodologia Direta ao Ponto</span>
<h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tighter text-gradient mb-6 leading-tight">
            Do zero ao seu primeiro agente<br/>operacional em poucas horas.
        </h2>
<p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-light">
            Sem teorias complexas de programação. Assista as aulas práticas, copie a estrutura e coloque para rodar hoje mesmo.
        </p>
</div>
<div className="flex flex-col gap-6">
<div className="reveal card px-6 md:px-10 py-8 cursor-pointer group hover:bg-white/[0.03]" onclick="toggleMod(this)">
<div className="flex justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
<span className="font-display text-base font-medium text-white/30 group-hover:text-[#D4FF00] transition-colors tracking-widest min-w-[32px]">01</span>
<div className="">
<div className="font-display text-xl md:text-2xl font-medium tracking-tight text-white/90 mb-2 transition-colors">A Fundação Autônoma</div>
<div className="text-base md:text-lg text-white/50 font-light">Como fazer a IA pensar exatamente como o melhor funcionário da sua empresa.</div>
</div>
</div>
<iconify-icon className="faq-icon text-2xl text-white/30 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content md:ml-[64px]">
<div className="pt-8 flex flex-col">
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">1.1</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Engenharia Reversa do Claude</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">Descubra por que o Claude é a única IA capaz de orquestrar processos sem falhar no meio do caminho.</div>
</div>
</div>
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">1.2</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Injeção de Conhecimento</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">O script exato para transferir o "cérebro" da sua empresa para a IA de forma segura.</div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal reveal-d1 card px-6 md:px-10 py-8 cursor-pointer group hover:bg-white/[0.03]" onclick="toggleMod(this)">
<div className="flex justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
<span className="font-display text-base font-medium text-white/30 group-hover:text-[#D4FF00] transition-colors tracking-widest min-w-[32px]">02</span>
<div className="">
<div className="font-display text-xl md:text-2xl font-medium tracking-tight text-white/90 mb-2 transition-colors">A Máquina de Vendas e Suporte</div>
<div className="text-base md:text-lg text-white/50 font-light">Agentes que qualificam leads e gerenciam clientes sem intervenção.</div>
</div>
</div>
<iconify-icon className="faq-icon text-2xl text-white/30 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content md:ml-[64px]">
<div className="pt-8 flex flex-col">
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">2.1</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Triagem e Atendimento High-Ticket</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">Configure o robô para ler mensagens, identificar intenção de compra e fechar vendas simulando um humano.</div>
</div>
</div>
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">2.2</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Gestão Autônoma de Emails</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">Nunca mais perca tempo na caixa de entrada. O agente categoriza, responde e te alerta apenas do essencial.</div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal reveal-d2 card px-6 md:px-10 py-8 cursor-pointer group hover:bg-white/[0.03]" onclick="toggleMod(this)">
<div className="flex justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full">
<span className="font-display text-base font-medium text-white/30 group-hover:text-[#D4FF00] transition-colors tracking-widest min-w-[32px]">03</span>
<div>
<div className="font-display text-xl md:text-2xl font-medium tracking-tight text-white/90 mb-2 transition-colors">O Gestor de Dados 24/7</div>
<div className="text-base md:text-lg text-white/50 font-light">Análise de métricas, controle de planilhas e relatórios automáticos.</div>
</div>
</div>
<iconify-icon className="faq-icon text-2xl text-white/30 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content md:ml-[64px]">
<div className="pt-8 flex flex-col">
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">3.1</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Planilhas Autogerenciáveis</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">Conecte o Claude ao Sheets/Excel para atualizar fluxos de caixa e dados de clientes sozinho.</div>
</div>
</div>
<div className="module-item">
<span className="module-num text-xs font-medium min-w-[32px] opacity-60">3.2</span>
<div>
<div className="text-base md:text-lg font-normal text-white/90 mb-2">Diretoria de Análise (Ads &amp; Finanças)</div>
<div className="text-sm md:text-base text-white/50 font-light leading-relaxed">O agente analisa o painel de anúncios, identifica desperdícios e te envia um plano de ação claro toda manhã.</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal mt-16 flex justify-center">
<a className="btn-primary px-10 py-4 md:px-12 md:py-4 text-sm md:text-base font-medium" href="https://pay.kiwify.com.br/tIgbS7O">
            LIBERAR MEU ACESSO IMEDIATO
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
<section className="py-24 md:py-32 px-6 bg-white/[0.01] border-y border-white/[0.04]">
<div className="max-w-6xl mx-auto">
<div className="reveal text-center mb-16 md:mb-24 flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/70 text-xs font-normal tracking-widest uppercase mb-6">Prova Social</span>
<h2 className="md:text-5xl lg:text-5xl text-gradient leading-tight text-3xl font-medium tracking-tighter">A diferença real no bolso de quem já aplica.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="reveal card p-10 flex flex-col justify-between relative overflow-hidden group border-white/10 hover:border-white/20">
<div className="absolute top-6 right-8 text-7xl font-display text-white/[0.03] rotate-12 group-hover:text-white/[0.06] transition-colors">"</div>
<div className="relative z-10">
<div className="flex gap-1.5 mb-8 text-[#D4FF00]/90">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base md:text-lg text-white/60 leading-relaxed font-light mb-12">"Substituí 2 salários mínimos por 1 agente de IA. O bot atende os clientes na madrugada, qualifica o perfil e agenda as reuniões no automático. A melhor decisão do ano."</p>
</div>
<div className="flex items-center gap-4 relative z-10">
<img alt="Mariana" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm md:text-base font-normal text-white/90">Mariana Lopes</div>
<div className="text-xs font-light text-white/50 mt-0.5">Dona de E-commerce</div>
</div>
</div>
</div>
<div className="reveal reveal-d1 card p-10 flex flex-col justify-between relative overflow-hidden group border-white/10 hover:border-white/20">
<div className="absolute top-6 right-8 text-7xl font-display text-white/[0.03] rotate-12 group-hover:text-white/[0.06] transition-colors">"</div>
<div className="relative z-10">
<div className="flex gap-1.5 mb-8 text-[#D4FF00]/90">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base md:text-lg text-white/60 leading-relaxed font-light mb-12">"Eu passava 4 horas por dia preenchendo planilhas e checando campanhas. Agora o Claude faz tudo sozinho e me entrega um resumo no WhatsApp às 8 da manhã."</p>
</div>
<div className="flex items-center gap-4 relative z-10">
<img alt="Ricardo" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm md:text-base font-normal text-white/90">Ricardo Costa</div>
<div className="text-xs font-light text-white/50 mt-0.5">Consultor de Vendas</div>
</div>
</div>
</div>
<div className="reveal reveal-d2 card p-10 flex flex-col justify-between relative overflow-hidden group border-white/10 hover:border-white/20">
<div className="absolute top-6 right-8 text-7xl font-display text-white/[0.03] rotate-12 group-hover:text-white/[0.06] transition-colors">"</div>
<div className="relative z-10">
<div className="flex gap-1.5 mb-8 text-[#D4FF00]/90">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base md:text-lg text-white/60 leading-relaxed font-light mb-12">"Escalamos o faturamento da agência sem contratar mais ninguém. Configurei um agente focado em analisar ROAS no Meta Ads e ele toma as decisões táticas diárias."</p>
</div>
<div className="flex items-center gap-4 relative z-10">
<img alt="Felipe" className="w-12 h-12 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm md:text-base font-normal text-white/90">Felipe Souza</div>
<div className="text-xs font-light text-white/50 mt-0.5">Sócio de Agência Digital</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
<div className="reveal text-center md:text-left mb-16 md:mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-gradient leading-tight">
            Para quem foi feito este investimento?
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="reveal card p-10 md:p-12 border-[#D4FF00]/20 bg-gradient-to-br from-[#D4FF00]/[0.04] to-transparent shadow-[0_0_30px_rgba(212,255,0,0.03)]">
<div className="w-12 h-12 rounded-2xl bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-center justify-center mb-8 text-[#D4FF00]">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl md:text-3xl font-medium text-white/90 tracking-tight mb-8">Público Alvo (Perfil Ideal)</h3>
<ul className="flex flex-col gap-6">
<li className="flex items-start gap-4 text-base md:text-lg text-white/70 leading-relaxed font-light">
<iconify-icon className="text-xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Empreendedores exaustos que desejam sair do operacional diário da empresa.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/70 leading-relaxed font-light">
<iconify-icon className="text-xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Empresas que querem escalar faturamento sem inchar a folha de pagamento.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/70 leading-relaxed font-light">
<iconify-icon className="text-xl text-[#D4FF00] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                    Profissionais sem nenhum conhecimento prévio de códigos ou programação.
                </li>
</ul>
</div>
<div className="reveal reveal-d1 card p-10 md:p-12 opacity-80 border-white/5 bg-white/[0.01]">
<div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-8 text-white/40">
<iconify-icon className="text-2xl" icon="solar:forbidden-circle-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl md:text-3xl font-medium text-white/50 tracking-tight mb-8">Não compre se:</h3>
<ul className="flex flex-col gap-6">
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-xl text-white/30 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Acha que IA é uma "modinha" passageira e prefere processos lentos e manuais.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-xl text-white/30 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Não tem 1 ou 2 horas na semana para configurar algo que vai salvar dias inteiros do seu mês.
                </li>
<li className="flex items-start gap-4 text-base md:text-lg text-white/50 leading-relaxed font-light">
<iconify-icon className="text-xl text-white/30 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                    Gosta de rasgar dinheiro pagando salários para tarefas repetitivas básicas.
                </li>
</ul>
</div>
</div>
</section>
<section className="py-20 md:py-24 px-6 max-w-4xl mx-auto">
<div className="reveal card p-10 md:p-16 border-[#D4FF00]/20 bg-gradient-to-r from-white/[0.02] via-[#D4FF00]/[0.05] to-white/[0.02] text-center flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 flex items-center justify-center mb-8 text-[#D4FF00] shadow-[0_0_30px_rgba(212,255,0,0.15)]">
<iconify-icon className="text-4xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white/90 mb-6">Seu risco é absolutamente zero.</h2>
<p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-light mb-8">
            Você tem <strong>7 dias de Garantia Incondicional</strong>. Entre, assista as aulas, configure seu primeiro agente. Se por qualquer motivo achar que automatizar seu negócio não é pra você, devolvemos 100% do seu dinheiro. Sem letras miúdas.
        </p>
<span className="inline-flex items-center px-4 py-2 rounded border border-white/10 bg-white/5 text-sm font-normal text-white/70">
            Compra protegida e processada pela Kiwify
        </span>
</div>
</section>
<section className="py-24 px-6 bg-white/[0.01] border-t border-white/[0.04]">
<div className="max-w-3xl mx-auto">
<div className="reveal text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-gradient leading-tight">Dúvidas Frequentes</h2>
</div>
<div className="flex flex-col gap-4">
<div className="reveal card px-8 py-2 border-white/10">
<button className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left gap-6 group py-6 outline-none" onclick="toggleFaq(this)">
<span className="font-display text-lg md:text-xl font-normal tracking-tight text-white/80 group-hover:text-white transition-colors">Preciso saber programar?</span>
<iconify-icon className="faq-icon text-xl text-white/40 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-base md:text-lg text-white/50 leading-relaxed pb-8 font-light">Não. O treinamento ensina a configurar tudo usando linguagem natural e ferramentas no-code (sem código). Você constrói os sistemas avançados apenas conversando com a IA e conectando processos via integrações prontas.</p>
</div>
</div>
<div className="reveal card px-8 py-2 border-white/10">
<button className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left gap-6 group py-6 outline-none" onclick="toggleFaq(this)">
<span className="font-display text-lg md:text-xl font-normal tracking-tight text-white/80 group-hover:text-white transition-colors">O agente acessa os dados reais da minha empresa?</span>
<iconify-icon className="faq-icon text-xl text-white/40 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-base md:text-lg text-white/50 leading-relaxed pb-8 font-light">Sim, e de forma totalmente segura. Uma das etapas cruciais ensinadas é a "injeção de contexto", onde fornecemos seus manuais, tabelas de preços e dados históricos para que ele responda de forma cirúrgica.</p>
</div>
</div>
<div className="reveal card px-8 py-2 border-white/10">
<button className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left gap-6 group py-6 outline-none" onclick="toggleFaq(this)">
<span className="font-display text-lg md:text-xl font-normal tracking-tight text-white/80 group-hover:text-white transition-colors">Em quanto tempo começo a ver resultados?</span>
<iconify-icon className="faq-icon text-xl text-white/40 group-hover:text-white/80" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-base md:text-lg text-white/50 leading-relaxed pb-8 font-light">O conteúdo é desenhado para aplicação rápida. Muitos alunos configuram seu primeiro agente operacional no mesmo dia em que assistem ao primeiro módulo prático.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 md:py-40 px-6 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[#D4FF00]/[0.03] blur-[150px] pointer-events-none mix-blend-screen"></div>
<div className="max-w-2xl mx-auto text-center relative z-10 w-full">
<div className="reveal mb-10">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-normal tracking-widest uppercase backdrop-blur-md">
<iconify-icon className="text-sm" icon="solar:danger-triangle-linear"></iconify-icon>
                Últimas Vagas Com Desconto
            </span>
</div>
<h2 className="reveal reveal-d1 text-4xl md:text-6xl font-medium tracking-tighter text-white/90 leading-tight mb-8">
            A decisão que muda<br/>
<span className="text-[#D4FF00]">a velocidade do seu negócio.</span>
</h2>
<p className="reveal reveal-d1 text-lg md:text-xl text-white/60 leading-relaxed font-light mb-14 px-4 max-w-xl mx-auto">
            O preço de um jantar para ter em mãos o exato sistema capaz de economizar milhares de reais em folha de pagamento.
        </p>
<div className="reveal reveal-d2 card px-8 md:px-14 py-12 md:py-14 mb-10 relative overflow-hidden bg-gradient-to-b from-[#D4FF00]/[0.03] to-transparent border-[#D4FF00]/20 shadow-[0_0_50px_rgba(212,255,0,0.05)]">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4FF00]/40 to-transparent"></div>
<div className="flex items-baseline justify-center gap-4 mb-3 flex-wrap">
<span className="text-lg md:text-xl text-white/40 line-through font-light">De R$ 1.890</span>
<span className="inline-flex items-center px-2 py-1 rounded bg-[#D4FF00]/10 text-[#D4FF00] text-[10px] md:text-xs font-medium tracking-wide uppercase border border-[#D4FF00]/20">Economia de R$ 1.830</span>
</div>
<div className="font-display text-7xl md:text-[5.5rem] font-medium tracking-tighter text-white/90 leading-none flex justify-center items-baseline mb-10">
<span className="text-2xl md:text-3xl font-light text-white/50 mr-2">Por R$</span>59<span className="text-3xl md:text-4xl font-light text-white/50 ml-1">,90</span>
</div>
<ul className="flex flex-col gap-4 mb-10 text-left max-w-sm mx-auto border-t border-white/10 pt-8">
<li className="flex items-center gap-4 text-base md:text-lg text-white/80 font-light">
<iconify-icon className="text-xl text-[#D4FF00]" icon="solar:check-circle-bold"></iconify-icon>
                    Acesso imediato ao método completo
                </li>
<li className="flex items-center gap-4 text-base md:text-lg text-white/80 font-light">
<iconify-icon className="text-xl text-[#D4FF00]" icon="solar:check-circle-bold"></iconify-icon>
                    Acesso vitalício sem mensalidades
                </li>
<li className="flex items-center gap-4 text-base md:text-lg text-white/80 font-light">
<iconify-icon className="text-xl text-[#D4FF00]" icon="solar:check-circle-bold"></iconify-icon>
                    Garantia incondicional de 7 dias
                </li>
</ul>
<a className="btn-primary w-full text-sm md:text-base px-8 py-5 md:px-12 md:py-5 font-medium shadow-[0_0_30px_rgba(212,255,0,0.2)]" href="https://pay.kiwify.com.br/tIgbS7O">
                DESTRAVAR MEU ACESSO AGORA
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center justify-center gap-6 mt-6 opacity-60">
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-xs md:text-sm text-white font-light">Compra Segura</span>
</div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-white" icon="solar:card-linear"></iconify-icon>
<span className="text-xs md:text-sm text-white font-light">Pix ou Cartão</span>
</div>
</div>
</div>
</div>
</section>
<footer className="py-16 px-6 border-t border-white/[0.04] text-center bg-[#09090b]">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="font-display text-xl text-white/30 font-medium tracking-widest mb-6">AUTOMAÇÃO IA</div>
<p className="text-sm md:text-base text-white/40 mb-10 font-light tracking-wide max-w-md leading-relaxed">Este site não faz parte e não é endossado pela Meta, Facebook, Google ou Anthropic.</p>
<div className="flex gap-8 justify-center">
<a className="text-sm text-white/30 hover:text-white/80 transition-colors font-light" href="#">Termos de Uso</a>
<a className="text-sm text-white/30 hover:text-white/80 transition-colors font-light" href="#">Políticas de Privacidade</a>
<a className="text-sm text-white/30 hover:text-white/80 transition-colors font-light" href="#">Contato</a>
</div>
<p className="text-xs text-white/20 mt-10 font-light">© 2024 Automação IA. Todos os direitos reservados.</p>
</div>
</footer>


    </>
  );
}
