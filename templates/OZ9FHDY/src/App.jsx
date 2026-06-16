import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    /* Dropdown interactions */
    const btn   = document.getElementById('dropdownBtn');
    const menu  = document.getElementById('dropdownMenu');
    const label = document.getElementById('dropdownLabel');

    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.querySelectorAll('button').forEach(option =>{
      option.addEventListener('click', e=>{
        const value = e.target.dataset.value;
        label.textContent = e.target.textContent.trim();
        menu.classList.add('hidden');

        document.querySelectorAll('[data-category]').forEach(card=>{
          card.style.display = (value==='all' || card.dataset.category===value) ? 'flex' : 'none';
        });
      });
    });

    /* Close dropdown on outside click */
    window.addEventListener('click',e=>{
      if(!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.add('hidden');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full sm:px-6 pt-10 pr-4 pb-10 pl-4 backdrop-blur-lg">
<div className="max-w-7xl mx-auto flex flex-col gap-6">
<div className="flex items-center justify-between">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight font-instrument-serif">Catálogo de Agentes de IA</h1>

<div className="relative" id="dropdown">
<button className="flex items-center gap-2 border border-zinc-700/70 hover:border-zinc-500 px-4 py-2 rounded-xl text-sm font-medium" id="dropdownBtn">
<span id="dropdownLabel">Todas as áreas</span>
<svg className="lucide lucide-chevron-down w-[16px] h-[16px]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl py-2 hidden" id="dropdownMenu">
<button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800" data-value="all">Todas as áreas</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800" data-value="medicina">Medicina</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800" data-value="engenharia">Engenharia</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800" data-value="arquitetura">Arquitetura</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800" data-value="direito">Direito</button>
</div>
</div>
</div>
<p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">Explore soluções de inteligência artificial especializadas por área profissional. Selecione o segmento acima para filtrar os agentes disponíveis.</p>
</div>
</header>

<main className="flex-1 w-full px-4 sm:px-6 pb-16">
<div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-[url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;w=800&amp;q=60')] bg-cover p-8 sm:p-10 hover:scale-105 transition-transform duration-300 shadow-[0_2.8px_2.2px_rgba(0,0,0,.034),_0_6.7px_5.3px_rgba(0,0,0,.048),_0_12.5px_10px_rgba(0,0,0,.06),_0_100px_80px_rgba(0,0,0,.12)]" data-category="medicina">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-stethoscope w-8 h-8 text-emerald-200" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
<span className="text-xs px-3 py-1.5 bg-emerald-400/20 text-emerald-200 rounded-full font-medium">Medicina</span>
</div>
<span className="text-xs text-zinc-200/80">v2.3</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Diagnóstico Assistido</h2>
<p className="text-sm text-zinc-100/90 leading-relaxed">Analisa exames de imagem e sugere hipóteses diagnósticas em segundos, otimizando decisões clínicas.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-emerald-700">
<span className="text-xs font-semibold">IA HEALTH</span>
<a className="text-emerald-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-10 hover:scale-105 transition-transform duration-300" data-category="medicina">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-pill w-8 h-8 text-pink-200" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
<span className="text-xs px-3 py-1.5 bg-pink-400/20 text-pink-200 rounded-full font-medium">Medicina</span>
</div>
<span className="text-xs text-zinc-400">v1.8</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Prescritor Inteligente</h2>
<p className="text-sm text-zinc-400 leading-relaxed">Recomenda tratamentos personalizados baseado em histórico, alergias e evidências atualizadas.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-pink-600">
<span className="text-xs font-semibold">RX GENIUS</span>
<a className="text-pink-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39e?auto=format&amp;w=800&amp;q=60')] bg-cover p-8 sm:p-10 hover:scale-105 transition-transform duration-300 shadow-[0_2.8px_2.2px_rgba(0,0,0,.034),_0_100px_80px_rgba(0,0,0,.12)]" data-category="engenharia">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-settings w-8 h-8 text-cyan-200" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs px-3 py-1.5 bg-cyan-400/20 text-cyan-200 rounded-full font-medium">Engenharia</span>
</div>
<span className="text-xs text-zinc-200/80">v4.1</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Otimização de Projeto</h2>
<p className="text-sm text-zinc-100/90 leading-relaxed">Avalia milhões de combinações estruturais para reduzir peso e custo mantendo a segurança.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-cyan-600">
<span className="text-xs font-semibold">BUILD AI</span>
<a className="text-cyan-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-10 hover:scale-105 transition-transform duration-300" data-category="arquitetura">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-briefcase w-8 h-8 text-yellow-200" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-xs px-3 py-1.5 bg-yellow-400/20 text-yellow-200 rounded-full font-medium">Arquitetura</span>
</div>
<span className="text-xs text-zinc-400">beta</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Gerador de Plantas 3D</h2>
<p className="text-sm text-zinc-400 leading-relaxed">Transforma requisitos dos clientes em modelos 3D iteráveis, prontos para renderização.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-yellow-600">
<span className="text-xs font-semibold">SPACE CRAFT</span>
<a className="text-yellow-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-[url('https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&amp;w=800&amp;q=60')] bg-cover p-8 sm:p-10 hover:scale-105 transition-transform duration-300 shadow-[0_2.8px_2.2px_rgba(0,0,0,.034),_0_100px_80px_rgba(0,0,0,.12)]" data-category="direito">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-gavel w-8 h-8 text-indigo-200" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
<span className="text-xs px-3 py-1.5 bg-indigo-400/20 text-indigo-200 rounded-full font-medium">Direito</span>
</div>
<span className="text-xs text-zinc-200/80">v3.0</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Análise de Contratos</h2>
<p className="text-sm text-zinc-100/90 leading-relaxed">Identifica cláusulas de risco e gera resumos executivos de documentos jurídicos extensos.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-indigo-600">
<span className="text-xs font-semibold">LEGALBOT</span>
<a className="text-indigo-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="card-animate flex flex-col justify-between aspect-[3/5] rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-10 hover:scale-105 transition-transform duration-300" data-category="engenharia">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-cpu w-8 h-8 text-orange-200" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xs px-3 py-1.5 bg-orange-400/20 text-orange-200 rounded-full font-medium">Engenharia</span>
</div>
<span className="text-xs text-zinc-400">v1.1</span>
</div>
<div className="space-y-4 mt-6 flex-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-instrument-serif">Simulação em Tempo-Real</h2>
<p className="text-sm text-zinc-400 leading-relaxed">Executa simulações físicas complexas on-the-fly para acelerar ciclos de desenvolvimento.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-orange-600">
<span className="text-xs font-semibold">SIMULATE.AI</span>
<a className="text-orange-200 text-sm font-medium hover:underline flex items-center gap-1" href="#">
            Detalhes
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</main>


    </>
  );
}
