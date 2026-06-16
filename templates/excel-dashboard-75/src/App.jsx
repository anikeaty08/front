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



        function toggleModal(show) {
            const modal = document.getElementById('video-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const panel = document.getElementById('modal-panel');
            
            if (show) {
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('opacity-0', 'scale-95');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                backdrop.classList.add('opacity-0');
                panel.classList.add('opacity-0', 'scale-95');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = ''; // Restore scrolling
                }, 300); // Match duration
            }
        }

        // Close on clicking outside
        document.getElementById('video-modal').addEventListener('click', function(e) {
            if (e.target === this || e.target.closest('#modal-backdrop')) {
                toggleModal(false);
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !document.getElementById('video-modal').classList.contains('hidden')) {
                toggleModal(false);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 grid-bg pointer-events-none opacity-40"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:chart-square-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Curso DASHBOARD PRO para Excel</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-zinc-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors" href="#">Início</a>
<a className="hover:text-white transition-colors" href="#transformacao">Antes vs Depois</a>
<a className="hover:text-white transition-colors" href="#conteudo">Conteúdo</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4"></div>
</div>
</nav>

<header className="md:pt-40 md:pb-24 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 max-w-6xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Método Validado em Projetos Reais
                </div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Tome decisões mais rápidas com<br/> <span className="text-gradient-excel">dashboards </span> no Excel.</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-xl mb-8">Você irá aprender a criar dashboards com o mesmo método que uso em projetos reais com clientes.</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm">
                        Quero criar dashboards profissionais
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon icon="solar:file-download-linear" width="14"></iconify-icon>
<span>Downloads inclusos</span>
</div>
</div>
</div>

<div className="relative group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

<div className="relative bg-[#09090b] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="h-8 bg-zinc-900/50 border-b border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono">dashboard.xlsx</div>
</div>
<div className="p-4 grid grid-cols-4 gap-4 aspect-video">
<div className="col-span-1 bg-zinc-900/30 rounded-lg border border-white/5 p-3 flex flex-col gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/20 mb-4 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<div className="h-2 w-16 bg-zinc-800 rounded"></div>
<div className="h-2 w-12 bg-zinc-800 rounded"></div>
<div className="h-2 w-14 bg-zinc-800 rounded opacity-50"></div>
<div className="mt-auto h-2 w-full bg-zinc-800 rounded opacity-30"></div>
</div>
<div className="col-span-3 flex flex-col gap-4">
<div className="grid grid-cols-3 gap-3">
<div className="bg-zinc-800/20 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">Receita Total</div>
<div className="text-sm text-white font-medium">R$ 145.2k</div>
</div>
<div className="bg-zinc-800/20 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">Pedidos</div>
<div className="text-sm text-white font-medium">3,402</div>
</div>
<div className="bg-zinc-800/20 p-3 rounded border border-white/5">
<div className="text-[10px] text-zinc-500 mb-1">Ticket Médio</div>
<div className="text-sm text-white font-medium">R$ 42.00</div>
</div>
</div>
<div className="flex-1 bg-zinc-800/20 p-4 rounded border border-white/5 relative flex items-end justify-between gap-2 overflow-hidden">
<div className="absolute top-3 left-4 text-[10px] text-zinc-500">Performance Mensal</div>
<div className="w-full bg-emerald-500/20 rounded-t dashboard-bar" style={{height: '40%'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t dashboard-bar" style={{height: '65%', animationDelay: '0.1s'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t dashboard-bar" style={{height: '50%', animationDelay: '0.2s'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t dashboard-bar" style={{height: '85%', animationDelay: '0.3s'}}></div>
<div className="w-full bg-emerald-500/50 rounded-t dashboard-bar" style={{height: '95%', animationDelay: '0.4s'}}></div>
<div className="w-full bg-emerald-500/20 rounded-t dashboard-bar" style={{height: '60%', animationDelay: '0.5s'}}></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 z-20 rounded-lg p-[1px] overflow-hidden group/badge cursor-pointer hover:scale-105 transition-transform duration-300" onclick="toggleModal(true)">
<div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#10b981_100%)] opacity-100"></div>
<div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-lg p-3 pr-4 flex items-center gap-3 border border-white/5 h-full">
<div className="relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
<div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black relative z-10">
<iconify-icon height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-semibold text-white">Veja meu vídeo sobre o curso</div>
<div className="text-[10px] text-zinc-400">Te explico como irá funcionar</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y bg-zinc-900/10 border-white/5 py-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-[3.5/4] rounded-2xl overflow-hidden border border-white/10 relative bg-zinc-800">
<img alt="Matheus" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-24">
<h3 className="text-white font-medium text-lg">Matheus</h3>
<p className="text-emerald-400 text-sm">Fundador do Zé Planilha</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-medium uppercase tracking-wider">
<iconify-icon icon="solar:user-id-linear" width="16"></iconify-icon>
                    Quem vai te ensinar
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">Experiência prática <br/> <span className="text-zinc-500">além da teoria.</span></h2>
<div className="space-y-6 text-zinc-400 leading-relaxed font-light text-base">
<p>Meu nome é <strong className="text-white font-medium">Matheus</strong>, sou fundador do <strong className="text-white font-medium">Zé Planilha</strong>, um site especializado na criação de planilhas práticas para o dia a dia de empresas e profissionais.</p>
<p>Ao longo dos últimos anos, já vendi <strong className="text-white font-medium border-b border-emerald-500/30">mais de 10 mil planilhas</strong>, todas criadas para resolver problemas reais de organização.</p>
<div className="pl-4 border-l-2 border-emerald-500 text-white italic">"Essa vivência prática é o que deu origem a este curso: ensinar você a pensar, organizar e transformar dados em decisões."</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="transformacao">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Entenda a sua evolução</h2>
<p className="text-zinc-500 text-sm">Você está prestes a sair do Excel comum para o Excel profissional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center z-10 hidden md:flex">
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="glass-panel p-8 rounded-2xl border-dashed border-zinc-800 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-6 text-red-400/80">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Como é hoje</span>
</div>
<div className="space-y-4 font-mono text-xs text-zinc-500 bg-black/40 p-4 rounded border border-white/5">
<div className="grid grid-cols-4 gap-2 border-b border-zinc-800 pb-2">
<span>Dados</span><span>Jan</span><span>Fev</span><span>Mar</span>
</div>
<div className="grid grid-cols-4 gap-2"><span>Vendas</span><span>100</span><span>120</span><span className="">110</span></div>
<div className="grid grid-cols-4 gap-2"><span>Custo</span><span>50</span><span>60</span><span>55</span></div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl border-emerald-500/30 bg-emerald-900/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
<div className="flex items-center gap-2 mb-6 text-emerald-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">O seu objetivo</span>
</div>
<div className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg shadow-lg mb-6 flex flex-col gap-3">
<div className="flex justify-between items-center pb-2 border-b border-white/5">
<div className="text-[10px] text-zinc-400 font-medium">Resultado Consolidado</div>
<iconify-icon className="text-zinc-500 text-xs" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
<div className="text-[9px] text-emerald-400 mb-1">Faturamento Real</div>
<div className="text-sm font-semibold text-white">R$ 245.890</div>
</div>
<div className="bg-zinc-800/40 p-2 rounded border border-white/5">
<div className="text-[9px] text-zinc-500 mb-1">Margem Líquida</div>
<div className="text-sm font-semibold text-white">32.4%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y text-center bg-black border-white/5 pt-12 pb-12">
<div className="max-w-3xl mr-auto ml-auto pr-6 pl-6">
<p className="md:text-2xl text-xl font-light italic text-zinc-300">“Clareza gera velocidade. Velocidade gera <span className="font-normal text-emerald-400">produtividade</span>.”</p>
</div>
</section>

<section className="bg-zinc-950/50 pt-24 pr-6 pb-24 pl-6" id="conteudo">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<span className="text-emerald-400 font-medium text-xs tracking-wider uppercase mb-2 block">Conteúdo Programático</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">O que você vai dominar</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fundamentos e Organização</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Aprenda a pensar a estrutura antes do visual. Como organizar bases de dados para garantir que seu dashboard nunca "quebre".</p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Construção Passo a Passo</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Criação completa do zero. Vídeos mostrando cada clique e decisão de design, com download de todas as planilhas.</p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tuning-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Controles Avançados</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Técnicas que não aparecem em cursos básicos. Dashboards interativos e controles dinâmicos.</p>
</div>
<div className="glass-panel p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-black border-emerald-500/20 group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Bônus</span>
</div>
<h3 className="text-lg font-medium text-emerald-400 mb-2">Biblioteca Criatividade do Zé</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Acesso total aos arquivos da minha série do YouTube. Modelos prontos para você estudar.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">O que você vai construir</h2>
<p className="text-lg text-emerald-400 font-light">“Você não recebe apenas aulas. Você recebe um arsenal de modelos prontos.”</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-default bg-zinc-900 border border-white/10">
<img alt="Dashboard Comercial" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-400 shadow-lg">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white font-medium text-xl tracking-tight mb-1">Gestão Comercial</h3>
<p className="text-xs text-zinc-400 line-clamp-2">Controle de leads, conversão e metas de vendas mensais.</p>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-default bg-zinc-900 border border-white/10">
<img alt="Controle Financeiro" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-400 shadow-lg">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white font-medium text-xl tracking-tight mb-1">Painel Financeiro</h3>
<p className="text-xs text-zinc-400 line-clamp-2">DRE simplificado, fluxo de caixa e centros de custo.</p>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-default bg-zinc-900 border border-white/10">
<img alt="Recursos Humanos" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-purple-400 shadow-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white font-medium text-xl tracking-tight mb-1">Recursos Humanos</h3>
<p className="text-xs text-zinc-400 line-clamp-2">Headcount, turnover e indicadores de performance do time.</p>
</div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden cursor-default bg-zinc-900 border border-white/10">
<img alt="Logística" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-lg">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-white font-medium text-xl tracking-tight mb-1">Logística &amp; Estoque</h3>
<p className="text-xs text-zinc-400 line-clamp-2">Curva ABC, ruptura de estoque e previsão de demanda.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-black">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-white font-medium mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon>
                    Para quem é
                </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                        Quer decidir mais rápido usando dashboards claros
                    </li>
<li className="flex gap-3 text-sm text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                        Quer transformar dados em produtividade
                    </li>
<li className="flex gap-3 text-sm text-zinc-400">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                        Quer aprender com exemplos reais
                    </li>
</ul>
</div>
<div className="opacity-60">
<h3 className="text-zinc-300 font-medium mb-6 flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon>
                    Para quem não é
                </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-1.5 shrink-0"></div>
                        Procura atalhos sem entender o raciocínio
                    </li>
<li className="flex gap-3 text-sm text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-1.5 shrink-0"></div>
                        Quem não pretende aplicar na prática
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Perguntas Frequentes</h2>
<div className="space-y-4">

<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-zinc-900/80">
<summary className="flex items-center justify-between p-5 cursor-pointer text-zinc-200 font-medium hover:text-white transition-colors">
<span>Por quanto tempo tenho acesso ao curso?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-0">
                        O acesso é vitalício. Você pode assistir às aulas no seu próprio ritmo, quantas vezes quiser, e receberá todas as atualizações futuras sem custo adicional.
                    </div>
</details>

<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-zinc-900/80">
<summary className="flex items-center justify-between p-5 cursor-pointer text-zinc-200 font-medium hover:text-white transition-colors">
<span>Preciso ser avançado em Excel?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-0">
                        Não. O curso foi desenhado para quem tem conhecimentos básicos. Começamos com os fundamentos e avançamos passo a passo até a construção dos dashboards completos.
                    </div>
</details>

<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-zinc-900/80">
<summary className="flex items-center justify-between p-5 cursor-pointer text-zinc-200 font-medium hover:text-white transition-colors">
<span>Emitem certificado?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-0">
                        Sim! Ao concluir todas as aulas, você receberá automaticamente um certificado de conclusão com carga horária para enriquecer seu currículo e LinkedIn.
                    </div>
</details>

<details className="group bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-zinc-900/80">
<summary className="flex items-center justify-between p-5 cursor-pointer text-zinc-200 font-medium hover:text-white transition-colors">
<span>E se eu não gostar?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-0">
                        Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, devolvemos 100% do seu dinheiro, sem perguntas.
                    </div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden text-center pt-32 pr-6 pb-32 pl-6 relative" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tighter mb-6">Pare de improvisar</h2>
<p className="text-lg text-zinc-400 mb-10">Tudo que eu aprendi criando dashboards para clientes, agora organizado para você. Acesso imediato.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-zinc-200 transition-colors font-semibold text-black bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Comece agora a criar dashboards que aceleram suas decisões
                </button>
</div>
<p className="mt-6 text-xs text-zinc-600">
                Garantia de 7 dias • Compra segura • Acesso imediato
            </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:chart-square-linear" width="20"></iconify-icon>
<span className="text-zinc-500 font-medium text-sm">DASHBOARD PRO</span>
</div>
<div className="text-[10px] text-zinc-600">
                © 2023 Todos os direitos reservados.
            </div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="video-modal" role="dialog">

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-black text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-white/10 opacity-0 scale-95 duration-300" id="modal-panel">
<div className="absolute top-0 right-0 pt-4 pr-4 z-20">
<button className="rounded-full p-1 bg-black/50 hover:bg-zinc-800 text-zinc-400 hover:text-white focus:outline-none transition-colors border border-white/10" onclick="toggleModal(false)" type="button">
<span className="sr-only">Close</span>
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="aspect-video w-full bg-zinc-900 relative">

<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/76979871?h=8272103f6e&amp;title=0&amp;byline=0&amp;portrait=0" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
