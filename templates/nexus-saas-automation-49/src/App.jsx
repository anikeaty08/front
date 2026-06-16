import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/[0.04]">
<div className="flex gap-10 gap-x-10 gap-y-10 items-center">
<a className="text-base font-semibold tracking-tighter text-white" href="#">euniceDesign</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-200 transition-colors" href="#">Serviços</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Portfólio</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Processo</a>
<a className="hover:text-zinc-200 transition-colors" href="#">Preços</a>
</div>
</div>
<div className="flex items-center gap-5">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors hidden sm:block" href="#">Contato</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Agendar Call</a>
</div>
</nav>

<main className="md:pt-52 md:pb-32 overflow-hidden flex flex-col text-center pt-40 pr-4 pb-20 pl-4 relative items-center justify-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" style={{zIndex: '-1'}}></div>


<h1 className="md:text-7xl bg-clip-text leading-tight text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-zinc-500 max-w-7xl mb-6">
            Landing pages de alta conversão <br className="hidden md:block"/> para escalar o seu negócio.
        </h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed">
            Unimos design estratégico e interfaces premium. A euniceDesign foca em GR, UI e UX para transformar visitantes em clientes fiéis.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="w-full sm:w-auto text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2">
                Começar meu projeto
                <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full sm:w-auto text-sm font-medium bg-white/[0.03] border border-white/[0.05] text-white px-6 py-3 rounded-full hover:bg-white/[0.06] transition-colors inline-flex items-center justify-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ver portfólio
            </button>
</div>

<div className="mt-24 w-full max-w-5xl relative group" style={{perspective: '1200px'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none h-full w-full"></div>
<div className="relative rounded-xl border border-white/[0.08] bg-[#0c0c0c] shadow-2xl overflow-hidden flex flex-col transition-transform duration-700 ease-out" style={{transform: 'rotateX(4deg) translateY(-10px)', transformStyle: 'preserve-3d'}}>

<div className="border-white/[0.04] flex h-12 border-b pr-4 pl-4 items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="flex items-center justify-center w-1/3 h-6 rounded-md bg-white/[0.02] border border-white/[0.02] text-xs text-zinc-600 font-medium">
                        eunice.design/preview
                    </div>
<div className="w-12"></div>
</div>

</div>
</div>
</main>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/[0.04] w-full">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-5">Design focado em resultados</h2>
<p className="text-base text-zinc-400 font-normal">Unimos estética avançada com usabilidade comprovada para elevar o posicionamento do seu produto e maximizar suas conversões.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.05] flex items-center justify-center text-zinc-200 mb-2">
<iconify-icon className="text-lg" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tighter text-white">Alta Performance</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Páginas otimizadas para carregamento instantâneo. Estruturas leves que garantem a melhor experiência e favorecem o SEO.</p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.05] flex items-center justify-center text-zinc-200 mb-2">
<iconify-icon className="text-lg" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tighter text-white">UI/UX Impecável</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Interfaces modernas e intuitivas que guiam o usuário naturalmente até o objetivo principal, eliminando atritos de conversão.</p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.05] flex items-center justify-center text-zinc-200 mb-2">
<iconify-icon className="text-lg" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tighter text-white">Design Responsivo</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Experiência perfeita e adaptável em qualquer dispositivo. Seu produto com aparência premium no desktop, tablet ou smartphone.</p>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/[0.04]">
<div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
<div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Pronto para elevar o nível da sua marca?</h2>
<p className="text-base text-zinc-400 mb-10 font-normal">Vamos criar uma landing page que destaca seu produto no mercado e converte visitantes em clientes.</p>
<button className="text-sm font-medium bg-white text-black px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Agendar consultoria
            </button>
</div>
</section>

<footer className="border-t border-white/[0.04] py-12 px-6 mt-auto">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-sm font-semibold tracking-tighter text-zinc-300">euniceDesign</span>
<div className="flex items-center gap-8 text-xs text-zinc-600 font-medium">
<a className="hover:text-zinc-300 transition-colors" href="#">Serviços</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Projetos</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Behance</a>
</div>
</div>
</footer>

    </>
  );
}
