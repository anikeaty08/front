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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-card transition-all">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-[#001529]" href="#">PREVISO</a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="text-sm font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#diferenciais">Diferenciais</a>
<a className="text-sm font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#planos">Planos</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#001529] hover:text-[#73A743] transition-colors" href="#">Entrar</a>
<a className="text-sm font-medium bg-[#73A743] text-white px-4 py-2 rounded-full hover:bg-[#618e38] transition-colors shadow-sm" href="#planos">
                    Começar teste grátis
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center text-center px-6">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#73A743]/10 to-transparent rounded-full blur-3xl -z-10 opacity-70"></div>
<div className="max-w-3xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#001529]/10 bg-white shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#73A743]"></span>
<span className="text-xs font-medium text-[#001529]/80">Foco em previsibilidade financeira</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#001529] mb-6 leading-[1.1]">
                Sua plataforma,<br/>seu controle.
            </h1>
<p className="text-base sm:text-lg text-[#001529]/60 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Acompanhe seus dados, projete seu futuro financeiro e gerencie tudo em um só lugar. Gestão individual ou compartilhada com total segurança.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-base font-medium bg-[#73A743] text-white px-6 py-3 rounded-full hover:bg-[#618e38] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#planos">
                    Começar teste grátis de 7 dias
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto text-base font-medium bg-white text-[#001529] border border-[#001529]/15 px-6 py-3 rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#demo">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Ver demonstração
                </a>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-16 md:mt-24 perspective-1000 relative z-10">
<div className="bg-white rounded-2xl border border-[#001529]/10 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]">

<div className="w-full md:w-64 bg-[#FAFAFA] border-r border-[#001529]/5 p-6 flex flex-col gap-6 hidden md:flex">
<div className="text-lg font-semibold tracking-tighter">PREVISO</div>
<div className="flex flex-col gap-2 mt-4">
<div className="h-8 rounded-md bg-[#73A743]/10 flex items-center px-3 gap-3 text-[#73A743] font-medium text-sm">
<iconify-icon icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Dashboard
                        </div>
<div className="h-8 rounded-md hover:bg-[#001529]/5 flex items-center px-3 gap-3 text-[#001529]/60 font-medium text-sm transition-colors">
<iconify-icon icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Transações
                        </div>
<div className="h-8 rounded-md hover:bg-[#001529]/5 flex items-center px-3 gap-3 text-[#001529]/60 font-medium text-sm transition-colors">
<iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Cartões
                        </div>
<div className="h-8 rounded-md hover:bg-[#001529]/5 flex items-center px-3 gap-3 text-[#001529]/60 font-medium text-sm transition-colors">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Projeções
                        </div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-white flex flex-col gap-6">
<div className="flex justify-between items-center mb-2">
<div>
<h3 className="text-lg font-semibold tracking-tight">Visão Geral</h3>
<p className="text-xs text-[#001529]/50 font-medium">Projeção para os próximos 30 dias</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200"></div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border border-[#001529]/5 bg-[#FAFAFA]">
<p className="text-xs text-[#001529]/50 font-medium mb-1">Saldo Atual</p>
<p className="text-lg font-semibold tracking-tight">R$ 12.450,00</p>
</div>
<div className="p-4 rounded-xl border border-[#001529]/5 bg-[#FAFAFA]">
<p className="text-xs text-[#001529]/50 font-medium mb-1">Projeção (Fim do mês)</p>
<p className="text-lg font-semibold tracking-tight text-[#73A743]">R$ 15.200,00</p>
</div>
<div className="p-4 rounded-xl border border-[#001529]/5 bg-[#FAFAFA] hidden md:block">
<p className="text-xs text-[#001529]/50 font-medium mb-1">Despesas Previstas</p>
<p className="text-lg font-semibold tracking-tight text-red-500">R$ 3.840,00</p>
</div>
</div>

<div className="flex-1 rounded-xl border border-[#001529]/5 bg-[#FAFAFA] p-4 flex flex-col justify-end gap-2 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full h-[1px] bg-[#001529]/5 absolute top-1/4"></div>
<div className="w-full h-[1px] bg-[#001529]/5 absolute top-2/4"></div>
<div className="w-full h-[1px] bg-[#001529]/5 absolute top-3/4"></div>
</div>
<div className="flex items-end justify-between h-full w-full px-2 gap-2 relative z-10">

<div className="w-1/12 bg-[#001529]/10 rounded-t-sm h-[40%]"></div>
<div className="w-1/12 bg-[#001529]/10 rounded-t-sm h-[50%]"></div>
<div className="w-1/12 bg-[#001529]/10 rounded-t-sm h-[30%]"></div>
<div className="w-1/12 bg-[#73A743] rounded-t-sm h-[70%]"></div>
<div className="w-1/12 bg-[#73A743]/50 rounded-t-sm h-[80%] border border-[#73A743] border-dashed"></div>
<div className="w-1/12 bg-[#73A743]/50 rounded-t-sm h-[60%] border border-[#73A743] border-dashed"></div>
<div className="w-1/12 bg-[#73A743]/50 rounded-t-sm h-[90%] border border-[#73A743] border-dashed"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#001529]/5" id="funcionalidades">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-[#001529] mb-4">Centralização total das suas finanças</h2>
<p className="text-sm text-[#001529]/60 font-medium">Uma visão clara e unificada de todas as suas contas, moedas e cartões em um ambiente projetado para clareza.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5 hover:border-[#001529]/15 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-white border border-[#001529]/10 flex items-center justify-center mb-6 text-[#73A743] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Controle Total</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Gestão de contas bancárias ilimitadas com suporte a múltiplas moedas (Real, Dólar, Euro).</p>
</div>

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5 hover:border-[#001529]/15 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-white border border-[#001529]/10 flex items-center justify-center mb-6 text-[#73A743] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Visão de Fluxo</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Acompanhamento de receitas e despesas com projeção clara do seu fluxo de caixa futuro.</p>
</div>

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5 hover:border-[#001529]/15 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-white border border-[#001529]/10 flex items-center justify-center mb-6 text-[#73A743] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Gestão de Cartões</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Controle ilimitado de cartões de crédito e faturas, mantendo as despesas sob controle.</p>
</div>

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5 hover:border-[#001529]/15 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-white border border-[#001529]/10 flex items-center justify-center mb-6 text-[#73A743] group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Segurança e Privacidade</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Controle de visibilidade de saldos e proteção rigorosa dos seus dados financeiros.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="demo">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-[#001529] mb-6">Tudo o que você precisa no seu dia a dia</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="h-6 w-6 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-1">Dashboard financeiro</h4>
<p className="text-xs text-[#001529]/60 font-medium">Indicadores chave e resumos visuais para entender sua saúde financeira em segundos.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="h-6 w-6 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-1">Fluxo de caixa projetado</h4>
<p className="text-xs text-[#001529]/60 font-medium">Veja não apenas o que já aconteceu, mas planeje os próximos meses com base em despesas recorrentes.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="h-6 w-6 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-1">Controle de faturas</h4>
<p className="text-xs text-[#001529]/60 font-medium">Antecipe o impacto do cartão de crédito no seu orçamento mensal.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="h-6 w-6 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-1">Organização por categorias</h4>
<p className="text-xs text-[#001529]/60 font-medium">Classifique e entenda exatamente para onde o seu dinheiro está indo.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="relative rounded-2xl bg-white border border-[#001529]/10 shadow-lg p-6 overflow-hidden">

<div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-4">
<div className="space-y-2 w-1/3">
<div className="h-2 bg-slate-200 rounded-full w-full"></div>
<div className="h-2 bg-slate-200 rounded-full w-2/3"></div>
</div>
<div className="text-xs font-semibold text-[#73A743]">Fechamento Mês</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><iconify-icon icon="solar:home-smile-linear"></iconify-icon></div>
<div className="h-3 w-20 bg-slate-200 rounded-full"></div>
</div>
<div className="h-3 w-12 bg-slate-200 rounded-full"></div>
</div>
<div className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><iconify-icon icon="solar:cart-large-linear"></iconify-icon></div>
<div className="h-3 w-16 bg-slate-200 rounded-full"></div>
</div>
<div className="h-3 w-14 bg-slate-200 rounded-full"></div>
</div>
<div className="flex justify-between items-center p-3 rounded-xl border border-slate-100 bg-slate-50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#73A743]/20 flex items-center justify-center text-[#73A743]"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon></div>
<div className="h-3 w-24 bg-slate-200 rounded-full"></div>
</div>
<div className="h-3 w-16 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="diferenciais">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-[#001529] mb-4">Por que o Previso é diferente?</h2>
<p className="text-sm text-[#001529]/60 font-medium max-w-2xl mx-auto mb-16">Não somos apenas um histórico do seu dinheiro. Somos a ferramenta para você tomar decisões hoje, olhando para o amanhã.</p>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
<div className="flex gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5">
<div className="h-12 w-12 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">Previsão e não apenas passado</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Muitos apps mostram o que você gastou. Nós focamos na projeção financeira baseada no seu comportamento para que você não tenha surpresas.</p>
</div>
</div>
<div className="flex gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5">
<div className="h-12 w-12 rounded-full bg-[#001529]/5 text-[#001529] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">Multiusuário com permissões granulares</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Gerencie as finanças do casal ou da família. Convide usuários e controle exatamente o que cada um pode ver ou editar.</p>
</div>
</div>
<div className="flex gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5">
<div className="h-12 w-12 rounded-full bg-[#001529]/5 text-[#001529] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">Organização por contexto</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Separe visualmente suas despesas pessoais, familiares ou de projetos específicos sem perder a visão global do seu patrimônio.</p>
</div>
</div>
<div className="flex gap-4 p-6 rounded-2xl bg-[#FAFAFA] border border-[#001529]/5">
<div className="h-12 w-12 rounded-full bg-[#73A743]/10 text-[#73A743] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-2">Foco em tomada de decisão</h3>
<p className="text-xs text-[#001529]/60 font-medium leading-relaxed">Interfaces limpas, sem poluição visual. Os dados que você precisa para saber se pode ou não fazer aquele gasto importante.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#001529] text-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-white" icon="solar:lock-keyhole-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Segurança arquitetada desde o início</h2>
<p className="text-sm text-white/60 font-medium max-w-2xl mb-12">Seus dados financeiros são sensíveis. Nossa infraestrutura garante que apenas você e quem você autorizar tenham acesso às informações.</p>
<div className="grid sm:grid-cols-3 gap-8 w-full max-w-4xl">
<div className="border-t border-white/10 pt-6">
<h4 className="text-sm font-semibold tracking-tight mb-2">Proteção de dados</h4>
<p className="text-xs text-white/50 font-medium">Criptografia de ponta a ponta para informações sensíveis e comunicação segura.</p>
</div>
<div className="border-t border-white/10 pt-6">
<h4 className="text-sm font-semibold tracking-tight mb-2">Controle de permissões</h4>
<p className="text-xs text-white/50 font-medium">Gerencie quem pode visualizar saldos, editar transações ou acessar contas específicas.</p>
</div>
<div className="border-t border-white/10 pt-6">
<h4 className="text-sm font-semibold tracking-tight mb-2">Arquitetura segura</h4>
<p className="text-xs text-white/50 font-medium">Hospedagem em servidores de alta confiabilidade com rotinas de backup automatizadas.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="planos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#001529] mb-4">Planos simples e transparentes</h2>
<p className="text-sm text-[#001529]/60 font-medium">Comece com 7 dias grátis. Escolha o melhor ciclo de faturamento para você.</p>
</div>
<div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">

<div className="w-full md:w-1/2 p-8 rounded-3xl bg-white border border-[#001529]/10 shadow-sm flex flex-col">
<h3 className="text-lg font-semibold tracking-tight mb-2">Mensal</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm font-medium text-[#001529]/60">R$</span>
<span className="text-4xl font-semibold tracking-tighter">19,90</span>
<span className="text-sm font-medium text-[#001529]/60">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-[#001529]/80">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Todas as funcionalidades de gestão
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#001529]/80">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Contas e cartões ilimitados
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#001529]/80">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Projeção financeira completa
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-[#001529]/80">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Cobrança recorrente mensal
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-full border border-[#001529]/15 text-[#001529] font-medium text-sm hover:bg-slate-50 transition-colors">
                        Assinar mensal
                    </button>
</div>

<div className="w-full md:w-1/2 p-8 rounded-3xl bg-[#001529] text-white shadow-xl relative flex flex-col">
<div className="absolute top-0 right-6 -translate-y-1/2 bg-[#73A743] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                        MAIOR ECONOMIA
                    </div>
<h3 className="text-lg font-semibold tracking-tight mb-2 text-white/90">Anual</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-sm font-medium text-white/60">R$</span>
<span className="text-4xl font-semibold tracking-tighter">14,90</span>
<span className="text-sm font-medium text-white/60">/mês</span>
</div>
<p className="text-xs text-white/50 font-medium mb-6">Faturado anualmente (R$ 178,80)</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-white/90">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Todas as vantagens do plano mensal
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-white/90">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Desconto equivalente a 3 meses grátis
                        </li>
<li className="flex items-start gap-3 text-sm font-medium text-white/90">
<iconify-icon className="text-[#73A743] text-lg shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Acesso prioritário a novas funções
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-full bg-[#73A743] text-white font-medium text-sm hover:bg-[#618e38] transition-colors shadow-md">
                        Começar teste grátis
                    </button>
</div>
</div>

<div className="mt-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border border-dashed border-[#001529]/20 bg-transparent">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<div className="h-10 w-10 rounded-full bg-white border border-[#001529]/10 flex items-center justify-center text-[#001529]">
<iconify-icon icon="solar:user-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-[#001529]">Usuário Adicional</h4>
<p className="text-xs text-[#001529]/60 font-medium">Para gestão compartilhada (organizações)</p>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-[#001529]">+ R$ 4,90<span className="text-xs font-medium text-[#001529]/60">/mês</span></div>
<div className="text-xs text-[#001529]/50 font-medium">Adicione a qualquer momento</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#001529] mb-8 text-center">Perguntas frequentes</h2>
<div className="space-y-4">
<details className="group rounded-xl border border-[#001529]/10 bg-[#FAFAFA] overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm select-none">
                        Segurança e proteção dos dados
                        <iconify-icon className="text-lg text-[#001529]/40 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-[#001529]/60 font-medium leading-relaxed border-t border-[#001529]/5 mt-2 pt-4">
                        A segurança é nossa prioridade. Utilizamos criptografia de dados em repouso e em trânsito. Nossa arquitetura garante que apenas usuários autorizados tenham acesso às informações financeiras.
                    </div>
</details>
<details className="group rounded-xl border border-[#001529]/10 bg-[#FAFAFA] overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm select-none">
                        Como funciona o período de teste?
                        <iconify-icon className="text-lg text-[#001529]/40 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-[#001529]/60 font-medium leading-relaxed border-t border-[#001529]/5 mt-2 pt-4">
                        Você tem 7 dias de acesso completo e irrestrito a todas as funcionalidades do Previso, gratuitamente. Após esse período, você pode escolher o plano que melhor se adapta a você.
                    </div>
</details>
<details className="group rounded-xl border border-[#001529]/10 bg-[#FAFAFA] overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm select-none">
                        O que é a funcionalidade multiusuário?
                        <iconify-icon className="text-lg text-[#001529]/40 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-[#001529]/60 font-medium leading-relaxed border-t border-[#001529]/5 mt-2 pt-4">
                        O Previso permite que você convide outras pessoas (como parceiros ou familiares) para acessar sua organização financeira. Você define permissões específicas, podendo ocultar saldos ou restringir a edição de certos dados. O custo é de R$ 4,90/mês por usuário adicional.
                    </div>
</details>
<details className="group rounded-xl border border-[#001529]/10 bg-[#FAFAFA] overflow-hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-sm select-none">
                        Quais moedas são suportadas?
                        <iconify-icon className="text-lg text-[#001529]/40 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-xs text-[#001529]/60 font-medium leading-relaxed border-t border-[#001529]/5 mt-2 pt-4">
                        Atualmente o Previso oferece suporte completo para Real (BRL), Dólar (USD) e Euro (EUR), permitindo que você controle contas em diferentes moedas em um único dashboard.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<div className="w-[600px] h-[600px] bg-gradient-to-r from-[#73A743]/10 to-[#001529]/5 rounded-full blur-3xl"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#001529] mb-6">Comece a organizar sua vida financeira hoje</h2>
<p className="text-sm text-[#001529]/60 font-medium mb-10">Junte-se a pessoas que transformaram a forma como lidam com o dinheiro, com mais previsibilidade e menos ansiedade.</p>
<button className="text-base font-medium bg-[#001529] text-white px-8 py-4 rounded-full hover:bg-black transition-all shadow-xl hover:shadow-2xl">
                Criar conta gratuitamente
            </button>
<p className="text-xs text-[#001529]/40 font-medium mt-4">7 dias grátis. Cancele quando quiser.</p>
</div>
</section>

<footer className="bg-white border-t border-[#001529]/5 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-semibold tracking-tighter text-[#001529]">PREVISO</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#">Termos de uso</a>
<a className="text-xs font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#">Política de privacidade</a>
<a className="text-xs font-medium text-[#001529]/60 hover:text-[#001529] transition-colors" href="#">Contato</a>
</div>
<div className="text-xs font-medium text-[#001529]/40">
                © 2023 Previso. Todos os direitos reservados.
            </div>
</div>
</footer>

    </>
  );
}
