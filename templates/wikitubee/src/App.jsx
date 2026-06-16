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



        // Inicializa os ícones Lucide
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="w-full max-w-5xl glass rounded-full px-6 h-14 flex items-center justify-between shadow-lg shadow-gray-900/5 border border-gray-200/80 transition-all hover:border-gray-300">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-semibold text-gray-900 tracking-tight text-base">ProSpark</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-500 hover:text-red-600 transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="text-xs font-medium text-gray-500 hover:text-red-600 transition-colors" href="#discovery">Discovery</a>
<a className="text-xs font-medium text-gray-500 hover:text-red-600 transition-colors" href="#precos">Preços</a>
</div>
<div>
<a className="group flex items-center gap-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all shadow-md shadow-red-500/20 active:scale-95" href="#">
                    Entrar
                    <i className="w-3 h-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
</div>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="heart-anim left-[10%]" style={{animationDuration: '15s', animationDelay: '0s'}}>
<i className="w-12 h-12 fill-red-50 opacity-30" data-lucide="heart"></i>
</div>
<div className="heart-anim left-[85%]" style={{animationDuration: '18s', animationDelay: '2s'}}>
<i className="w-8 h-8 fill-red-50 opacity-40" data-lucide="heart"></i>
</div>
<div className="heart-anim left-[20%]" style={{animationDuration: '20s', animationDelay: '5s'}}>
<i className="w-16 h-16 fill-red-50 opacity-20" data-lucide="heart"></i>
</div>
<div className="heart-anim left-[60%]" style={{animationDuration: '12s', animationDelay: '1s'}}>
<i className="w-6 h-6 fill-red-50 opacity-50" data-lucide="heart"></i>
</div>
<div className="heart-anim left-[75%]" style={{animationDuration: '25s', animationDelay: '8s'}}>
<i className="w-10 h-10 fill-red-50 opacity-30" data-lucide="heart"></i>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    Nova Integração: AbacatePay &amp; Kirvano
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                    Marketing de Influência com <span className="text-gradient-red">ROI Real</span>.
                </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Pare de adivinhar seus resultados. Rastreie cada venda, clique e conversão de influenciadores do YouTube com webhooks precisos e links inteligentes.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white h-12 px-8 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10">
                        Criar conta grátis
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 h-12 px-8 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                        Ver demonstração
                        <i className="w-4 h-4 text-gray-400" data-lucide="play-circle"></i>
</button>
</div>
</div>

<div className="relative mx-auto max-w-5xl group perspective-1000">
<div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01] hover:-translate-y-2">

<div className="border-b border-gray-100 bg-white px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs font-medium text-gray-400">prospark.app/dashboard/campaign/launch-v2</div>
</div>

<div className="p-8 bg-gray-50/50">
<div className="flex items-center justify-between mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Lançamento Q3</h3>
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">Ativa</span>
</div>
<p className="text-sm text-gray-500">Rastreamento em tempo real</p>
</div>
<button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Exportar Relatório</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Total Vendas</span>
<i className="w-4 h-4 text-green-600" data-lucide="dollar-sign"></i>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">R$ 142.5k</div>
<div className="text-xs text-green-600 mt-1 font-medium">+12% vs semana passada</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Impactos</span>
<i className="w-4 h-4 text-red-600" data-lucide="eye"></i>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">89.2k</div>
<div className="text-xs text-gray-400 mt-1">Cliques únicos</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Influenciadores</span>
<i className="w-4 h-4 text-blue-600" data-lucide="users"></i>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">14</div>
<div className="text-xs text-gray-400 mt-1">Ativos na campanha</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Conversão</span>
<i className="w-4 h-4 text-orange-600" data-lucide="trending-up"></i>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">3.2%</div>
<div className="text-xs text-green-600 mt-1 font-medium">Alta performance</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<span className="text-sm font-medium text-gray-900">Performance por Canal</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-gray-600">
<thead className="bg-gray-50 text-xs uppercase font-medium text-gray-400">
<tr>
<th className="px-6 py-3">Canal</th>
<th className="px-6 py-3">Inscritos</th>
<th className="px-6 py-3">Cliques</th>
<th className="px-6 py-3">Vendas</th>
<th className="px-6 py-3 text-right">ROI</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
<span className="font-medium text-gray-900">TechReview BR</span>
</td>
<td className="px-6 py-4">1.2M</td>
<td className="px-6 py-4">12,403</td>
<td className="px-6 py-4 text-green-600 font-medium">R$ 45,200</td>
<td className="px-6 py-4 text-right font-medium text-gray-900">8.5x</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
<span className="font-medium text-gray-900">Canal do Investidor</span>
</td>
<td className="px-6 py-4">850k</td>
<td className="px-6 py-4">8,100</td>
<td className="px-6 py-4 text-green-600 font-medium">R$ 32,150</td>
<td className="px-6 py-4 text-right font-medium text-gray-900">6.2x</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden lg:block animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-md">
<i className="w-5 h-5 text-green-600" data-lucide="shopping-cart"></i>
</div>
<div>
<div className="text-xs text-gray-500">Nova Venda (Hotmart)</div>
<div className="text-sm font-semibold text-gray-900">+ R$ 197,00</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-gray-400 mb-8">INTEGRAÇÃO NATIVA COM AS PRINCIPAIS PLATAFORMAS</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-xl font-semibold text-gray-800 flex items-center gap-2"><i className="text-orange-500 w-5 h-5" data-lucide="flame"></i> Hotmart</span>
<span className="text-xl font-semibold text-gray-800 flex items-center gap-2"><i className="text-green-500 w-5 h-5" data-lucide="zap"></i> Kiwify</span>
<span className="text-xl font-semibold text-gray-800 flex items-center gap-2"><i className="text-blue-500 w-5 h-5" data-lucide="layers"></i> Eduzz</span>
<span className="text-xl font-semibold text-gray-800 flex items-center gap-2"><i className="text-purple-500 w-5 h-5" data-lucide="credit-card"></i> Braip</span>
<span className="text-xl font-semibold text-gray-800 flex items-center gap-2"><i className="text-teal-500 w-5 h-5" data-lucide="anchor"></i> Monetizze</span>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="funcionalidades">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">A tecnologia por trás do <br/>seu faturamento.</h2>
<p className="text-lg text-gray-500">Resolvemos a cegueira de dados no marketing de influência. Conectamos a divulgação ao resultado financeiro em uma única plataforma.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="webhook"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">Rastreamento via Webhooks</h3>
<p className="text-gray-500 max-w-md mb-8">Receba notificações automáticas de vendas da Hotmart, Kiwify, Eduzz e outros. Configure webhooks personalizados e atribua cada centavo ao influenciador correto.</p>
<div className="bg-gray-900 rounded-lg p-4 shadow-lg font-mono text-xs text-gray-300 border border-gray-800 max-w-md transform transition-transform group-hover:translate-y-[-5px]">
<div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-gray-500">webhook-listener.js</span>
</div>
<div className="space-y-1">
<p><span className="text-purple-400">const</span> event = {</p>
<p className="pl-4">type: <span className="text-green-400">'PURCHASE_APPROVED'</span>,</p>
<p className="pl-4">platform: <span className="text-green-400">'hotmart'</span>,</p>
<p className="pl-4">value: <span className="text-orange-400">197.00</span>,</p>
<p className="pl-4">influencer_id: <span className="text-blue-400">'ref_yt_82'</span></p>
<p>}</p>
<p className="text-gray-500">// Venda atribuída com sucesso!</p>
</div>
</div>
</div>
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-red-50/50 to-transparent z-0"></div>
</div>

<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
<i className="w-6 h-6" data-lucide="link"></i>
</div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">Short Links Inteligentes</h3>
<p className="text-gray-500 mb-8">Crie links curtos (olink.yt/...) e monitore cada clique, dispositivo e origem de tráfego.</p>
<div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-gray-500">Cliques hoje</span>
<span className="text-xs font-medium text-green-600">+24%</span>
</div>
<div className="h-16 flex items-end gap-1">
<div className="w-1/5 bg-red-100 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-red-200 h-[60%] rounded-t-sm"></div>
<div className="w-1/5 bg-red-300 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-red-400 h-[80%] rounded-t-sm"></div>
<div className="w-1/5 bg-red-600 h-[100%] rounded-t-sm relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">1.2k</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 glass-card rounded-2xl p-8 md:p-12 bg-gray-900 text-white overflow-hidden relative" id="discovery">
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/50 border border-red-800 text-red-300 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="database"></i> 39.753 Canais Indexados
                            </div>
<h3 className="text-3xl font-semibold tracking-tight mb-4 text-white">Discovery Engine</h3>
<p className="text-gray-400 mb-8 text-lg">Encontre o parceiro ideal em nossa base de dados massiva. Filtre por nicho, engajamento e histórico de vendas.</p>
<div className="flex flex-col gap-4">
<div className="flex gap-2">
<i className="text-red-500 w-5 h-5" data-lucide="check-circle"></i>
<span className="text-gray-300">Métricas de conversão anteriores</span>
</div>
<div className="flex gap-2">
<i className="text-red-500 w-5 h-5" data-lucide="check-circle"></i>
<span className="text-gray-300">Adição manual de URLs de canais</span>
</div>
</div>
</div>

<div className="flex-1 w-full">
<div className="bg-gray-800 rounded-xl border border-gray-700 p-1 shadow-2xl">
<div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mb-2 flex gap-2">
<i className="text-gray-500" data-lucide="search"></i>
<span className="text-gray-500 text-sm">Buscar canal por nome ou URL...</span>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xs">TJ</div>
<div>
<div className="text-sm font-medium text-white">Tech Jornada</div>
<div className="text-xs text-gray-400">68M Inscritos</div>
</div>
</div>
<button className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md transition-colors">Adicionar</button>
</div>

<div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white text-xs">GC</div>
<div>
<div className="text-sm font-medium text-white">Gamer Club</div>
<div className="text-xs text-gray-400">2.4M Inscritos</div>
</div>
</div>
<button className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md transition-colors">Adicionar</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Como funciona o ciclo de rastreamento</h2>
<p className="text-gray-500 max-w-xl mx-auto">Um pipeline de dados desenhado para performance. Do clique à comissão, em segundos.</p>
</div>

<div className="relative">

<div className="hidden md:block absolute top-[26px] left-0 w-full h-[2px] workflow-line z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="group relative">
<div className="flex items-center md:justify-center mb-6">
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-900 shadow-sm z-10 group-hover:border-red-600 group-hover:text-red-600 transition-colors duration-300">
<span className="font-semibold text-lg">01</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<div className="mb-4 text-gray-900">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<h4 className="font-semibold text-gray-900 mb-2">Crie a Campanha</h4>
<p className="text-sm text-gray-500 leading-relaxed">Configure parâmetros UTM e gere links únicos para cada influenciador parceiro.</p>
</div>
</div>

<div className="group relative">
<div className="flex items-center md:justify-center mb-6">
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-900 shadow-sm z-10 group-hover:border-red-600 group-hover:text-red-600 transition-colors duration-300">
<span className="font-semibold text-lg">02</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<div className="mb-4 text-gray-900">
<i className="w-6 h-6" data-lucide="youtube"></i>
</div>
<h4 className="font-semibold text-gray-900 mb-2">Divulgação</h4>
<p className="text-sm text-gray-500 leading-relaxed">O influenciador posta o conteúdo. Nosso sistema aguarda o primeiro sinal de tráfego.</p>
</div>
</div>

<div className="group relative">
<div className="flex items-center md:justify-center mb-6">
<div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-red-600/20 z-10 ring-4 ring-red-50">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 ring-1 ring-red-50 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10">
<i className="w-24 h-24 text-red-600" data-lucide="webhook"></i>
</div>
<div className="mb-4 text-red-600">
<i className="w-6 h-6" data-lucide="webhook"></i>
</div>
<h4 className="font-semibold text-gray-900 mb-2">Webhook Trigger</h4>
<p className="text-sm text-gray-500 leading-relaxed">Venda aprovada na plataforma? Recebemos o JSON instantaneamente e processamos.</p>
</div>
</div>

<div className="group relative">
<div className="flex items-center md:justify-center mb-6">
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-900 shadow-sm z-10 group-hover:border-green-500 group-hover:text-green-600 transition-colors duration-300">
<span className="font-semibold text-lg">04</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
<div className="mb-4 text-green-600">
<i className="w-6 h-6" data-lucide="bar-chart-4"></i>
</div>
<h4 className="font-semibold text-gray-900 mb-2">Atribuição de ROI</h4>
<p className="text-sm text-gray-500 leading-relaxed">O dashboard é atualizado. O valor é somado ao canal específico para cálculo de comissão.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="precos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Preços simples para<br/>operações complexas.</h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-gray-500">Mensal</span>
<div className="relative w-14 h-8 bg-red-600 rounded-full cursor-pointer transition-colors p-1">
<div className="absolute right-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform"></div>
</div>
<span className="text-sm font-medium text-gray-900">Anual <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full ml-1 border border-red-100">-25% OFF</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
<h3 className="text-xl font-semibold text-gray-900 mb-2">Mensal</h3>
<p className="text-gray-500 text-sm mb-6">Para testar o poder da plataforma.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-gray-900 tracking-tight">R$ 147</span>
<span className="text-gray-500">/mês</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i> Acesso completo à base de canais
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i> Webhooks Ilimitados
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i> Links de Rastreamento
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors">Escolher Mensal</button>
</div>

<div className="p-8 rounded-2xl border-2 border-red-600 bg-gray-50/50 relative overflow-hidden shadow-2xl shadow-red-900/5 transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">MAIS POPULAR</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Anual</h3>
<p className="text-gray-500 text-sm mb-6">Para operações que buscam escala.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-gray-900 tracking-tight">R$ 997</span>
<span className="text-gray-500">/ano</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
<i className="w-4 h-4 text-red-600" data-lucide="check"></i> Tudo do plano mensal
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
<i className="w-4 h-4 text-red-600" data-lucide="check"></i> Economia de R$ 767,00
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
<i className="w-4 h-4 text-red-600" data-lucide="check"></i> Suporte Prioritário
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
<i className="w-4 h-4 text-red-600" data-lucide="check"></i> Onboarding Estratégico
                        </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-red-600 font-medium text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25">Assinar Anual e Economizar</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-100 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-8">Pronto para desbloquear o potencial real dos seus influenciadores?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 rounded-full font-medium transition-all shadow-xl shadow-red-600/20 text-lg w-full sm:w-auto">
                    Criar conta agora
                </button>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-semibold text-gray-900">ProSpark</span>
</div>
<p className="text-sm text-gray-500">Plataforma "all-in-one" para gestão e inteligência de dados em Marketing de Influência.</p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Produto</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-red-600" href="#">Discovery</a></li>
<li><a className="hover:text-red-600" href="#">Rastreamento</a></li>
<li><a className="hover:text-red-600" href="#">Integrações</a></li>
<li><a className="hover:text-red-600" href="#">Preços</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-red-600" href="#">Termos de Uso</a></li>
<li><a className="hover:text-red-600" href="#">Privacidade</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
<div className="border-t border-gray-200 pt-8 text-center md:text-left text-sm text-gray-400">
                © 2023 ProSpark. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
