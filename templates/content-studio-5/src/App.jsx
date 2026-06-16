import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                        // Original Images
                        const baseImages = [
                            "https://images.unsplash.com/photo-1542206391-78c489518c23?q=80&w=600&auto=format&fit=crop", 
                            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", 
                            "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&auto=format&fit=crop", 
                            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop", 
                            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop", 
                            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                        ];
                        
                        // Duplicate array 3 times to ensure infinite scroll coverage without gaps
                        const carouselImages = [...baseImages, ...baseImages, ...baseImages];

                        for(let i=0; i<carouselImages.length; i++) {
                            const img = carouselImages[i];
                            document.write(`
                                <div class="carousel-card relative w-[280px] sm:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-black/5 shrink-0 bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] select-none">
                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover" alt="Work" loading="lazy">
                                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div class="text-[10px] font-bold text-white/80 mb-1 uppercase tracking-widest font-mono">Case Study</div>
                                        <div class="text-white font-bold text-lg leading-tight">Campanha Viral</div>
                                    </div>
                                </div>
                            `);
                        }
                     
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-[#E0E0D8] bg-[#F5F5F0]/95 backdrop-blur-xl">
<div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-sm">
<span className="font-bold text-lg leading-none">M</span>
</div>
<span className="text-lg font-bold tracking-tight text-[#1A1A1A]">MUUTOS</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-[15px] font-medium text-[#2D2D2D] hover:text-[#000] rounded-lg hover:bg-black/5 transition-all" href="#metodo">Método</a>
<a className="px-4 py-2 text-[15px] font-medium text-[#2D2D2D] hover:text-[#000] rounded-lg hover:bg-black/5 transition-all" href="#servicos">Serviços</a>
<a className="px-4 py-2 text-[15px] font-medium text-[#2D2D2D] hover:text-[#000] rounded-lg hover:bg-black/5 transition-all" href="#cases">Cases</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-[15px] font-semibold text-[#1A1A1A] bg-[#FFD60A] hover:bg-[#FFC700] px-6 py-3 rounded-lg transition-all shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5" href="#contato">
                    Agendar Call <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-[#1A1A1A] pt-1">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden flex flex-col items-center bg-[#F5F5F0]">

<div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">

<div className="font-mono text-[13px] font-medium text-[#6B6B66] uppercase tracking-wider mb-6 flex items-center justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FF6B35]"></span>
                Vagas para Q3 2024
            </div>

<h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#1A1A1A] mb-8 leading-[1.05]">
                Conteúdo que <br/>
<span className="relative inline-block z-10">
                    vende por você.
                    
<svg className="absolute w-[105%] left-[-2.5%] -bottom-2 z-[-1] h-3 text-[#FF6B35]/30" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00026 6.99997C38.5369 3.86435 125.645 -1.94276 197.965 2.50881" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</span>
</h1>

<p className="text-lg md:text-xl text-[#6B6B66] max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
                Não é apenas edição de vídeo. É estratégia validada no campo de batalha para marcas que buscam <span className="text-[#1A1A1A] font-bold underline decoration-[#FFD60A] decoration-4 underline-offset-2">LTV</span> e escala real.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-black text-white px-8 py-4 rounded-lg font-bold text-[16px] tracking-wide transition-all shadow-lg hover:-translate-y-1" href="#contato">
                    GARANTIR CONSULTORIA
                </a>
<a className="flex items-center gap-3 bg-white border-2 border-[#E0E0D8] hover:border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-lg font-bold text-[16px] transition-all" href="#cases">
                    Ver Resultados
                </a>
</div>
</div>

<div className="w-full relative z-10 mt-8 group">
<div className="hero-scroller">
<div className="hero-track">


</div>
</div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F5F0] to-transparent pointer-events-none z-20"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F5F0] to-transparent pointer-events-none z-20"></div>
</div>

<div className="mt-12 flex flex-col items-center gap-4 relative z-10">
<div className="flex -space-x-3 items-center hover:scale-105 transition-transform duration-300 cursor-pointer p-1">
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#F5F5F0] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#F5F5F0] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#F5F5F0] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#F5F5F0] object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-[3px] border-[#F5F5F0] bg-[#FFD60A] text-[#1A1A1A] flex items-center justify-center text-xs font-bold shadow-sm">
                    +42
                </div>
</div>
<p className="text-sm font-medium text-[#6B6B66]">
                Empresas que escalaram com a Muutos.
            </p>
</div>
</section>

<div className="bg-white border-y border-[#E0E0D8] py-10 overflow-hidden">
<div className="scroller">
<div className="scroller-inner flex gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="zap"></i> CREATOR<span className="font-normal text-[#6B6B66]">PRO</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="layers"></i> STUDIO<span className="font-normal text-[#6B6B66]">X</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="check-circle-2"></i> BRAND<span className="font-normal text-[#6B6B66]">FLOW</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="trending-up"></i> SCALE<span className="font-normal text-[#6B6B66]">UP</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="crown"></i> ELITE<span className="font-normal text-[#6B6B66]">CORP</span></span>

<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="zap"></i> CREATOR<span className="font-normal text-[#6B6B66]">PRO</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="layers"></i> STUDIO<span className="font-normal text-[#6B6B66]">X</span></span>
<span className="text-xl font-bold font-inter tracking-tight text-[#1A1A1A] flex items-center gap-2"><i className="text-[#FF6B35] w-6 h-6" data-lucide="check-circle-2"></i> BRAND<span className="font-normal text-[#6B6B66]">FLOW</span></span>
</div>
</div>
</div>

<section className="py-32 bg-white relative">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative w-[300px] mx-auto border-[8px] border-[#F5F5F0] rounded-[3rem] h-[600px] bg-white shadow-[0_24px_48px_rgba(0,0,0,0.12)] overflow-hidden ring-1 ring-black/5">
<div className="absolute top-0 w-full h-full bg-white overflow-hidden flex flex-col">

<div className="bg-white px-4 py-4 border-b border-gray-100 flex justify-between items-center text-[#1A1A1A]">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="text-xs font-bold uppercase tracking-wide">Insights</span>
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</div>
<div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-8">
<div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-2">
<i className="w-10 h-10" data-lucide="trending-down"></i>
</div>
<div>
<h3 className="text-3xl font-bold text-[#1A1A1A] mb-1">-42% Alcance</h3>
<p className="text-[#6B6B66] text-sm">Últimos 30 dias</p>
</div>
<div className="w-full bg-[#F5F5F0] rounded-xl p-5 border border-[#E0E0D8]">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-[#6B6B66]">Retenção Média</span>
<span className="text-xs text-red-500 font-bold bg-white px-2 py-0.5 rounded shadow-sm">2s avg</span>
</div>
<div className="w-full h-2 bg-[#E0E0D8] rounded-full overflow-hidden">
<div className="w-[10%] h-full bg-red-500 rounded-full"></div>
</div>
</div>
<div className="px-6 py-4 bg-red-50 border border-red-100 rounded-xl text-left">
<div className="flex gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="alert-circle"></i>
<p className="text-[12px] text-red-700 leading-relaxed">
<span className="font-bold block mb-1 text-red-900">ALERTA DE ALGORITMO</span>
                                        Seu conteúdo está sendo ignorado por falta de ganchos visuais nos primeiros 3 segundos.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-[#FF6B35] font-bold font-mono text-xs tracking-widest uppercase mb-4 block">O Cenário Comum</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6 leading-[1.1]">
                    Você posta, posta, e... <br/><span className="text-[#6B6B66]">nada acontece.</span>
</h2>
<div className="space-y-6 text-lg text-[#2D2D2D] leading-relaxed">
<p>
                        O Instagram não odeia você. O algoritmo não está "quebrado". O problema é que conteúdo sem estratégia é apenas ruído digital.
                    </p>
<p>
                        Enquanto você gasta horas editando vídeos que ninguém vê, seus concorrentes estão convertendo audiência em receita. A diferença? Eles não contam com a sorte. Eles têm um método.
                    </p>
</div>
<div className="mt-10 p-8 bg-[#F5F5F0] rounded-xl border-l-4 border-[#FF6B35]">
<p className="font-medium text-[#1A1A1A] text-lg italic">
                        "Produzir conteúdo sem objetivo claro é a forma mais cara de ser ignorado."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F0] relative border-t border-[#E0E0D8]" id="metodo">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-20 md:text-center max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1A1A1A]">O Método M5</h2>
<p className="text-[#6B6B66] text-lg">Um processo linear e previsível para transformar ideias soltas em ativos de marketing.</p>
</div>

<div className="bg-[#E8E8E0] p-2 rounded-2xl max-w-5xl mx-auto grid md:grid-cols-4 gap-2 mb-8">
<button className="active-tab-btn py-3 px-4 rounded-xl text-sm font-bold transition-all bg-white shadow-sm text-[#1A1A1A]" onclick="setTab(0, this)">
                    01. Diagnóstico
                </button>
<button className="py-3 px-4 rounded-xl text-sm font-medium text-[#6B6B66] hover:bg-white/50 transition-all" onclick="setTab(1, this)">
                    02. Roteirização
                </button>
<button className="py-3 px-4 rounded-xl text-sm font-medium text-[#6B6B66] hover:bg-white/50 transition-all" onclick="setTab(2, this)">
                    03. Produção
                </button>
<button className="py-3 px-4 rounded-xl text-sm font-medium text-[#6B6B66] hover:bg-white/50 transition-all" onclick="setTab(3, this)">
                    04. Growth
                </button>
</div>

<div className="apollo-card p-12 max-w-5xl mx-auto min-h-[400px] flex items-center relative overflow-hidden group" id="tab-display">

<div className="relative z-10 tab-content w-full grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="w-16 h-16 bg-[#FFE67E] rounded-xl flex items-center justify-center mb-8">
<i className="w-8 h-8 text-[#1A1A1A]" data-lucide="users"></i>
</div>
<h3 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Mapeamento de Audiência</h3>
<p className="text-[#6B6B66] text-lg leading-relaxed mb-8">
                            Não começamos gravando. Começamos entendendo. Analisamos seus concorrentes, definimos suas personas e criamos linhas editoriais que posicionam você como autoridade.
                        </p>
</div>
<div className="bg-[#F5F5F0] rounded-xl p-8 h-full flex flex-col justify-center">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-[#1A1A1A] font-medium"><div className="bg-[#FF6B35] p-1 rounded-full"><i className="text-white w-3 h-3" data-lucide="check"></i></div> Definição de Brand Voice</li>
<li className="flex items-center gap-3 text-[#1A1A1A] font-medium"><div className="bg-[#FF6B35] p-1 rounded-full"><i className="text-white w-3 h-3" data-lucide="check"></i></div> Análise de Concorrentes</li>
<li className="flex items-center gap-3 text-[#1A1A1A] font-medium"><div className="bg-[#FF6B35] p-1 rounded-full"><i className="text-white w-3 h-3" data-lucide="check"></i></div> Linhas Editoriais</li>
<li className="flex items-center gap-3 text-[#1A1A1A] font-medium"><div className="bg-[#FF6B35] p-1 rounded-full"><i className="text-white w-3 h-3" data-lucide="check"></i></div> Calendário Estratégico</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#FF6B35] font-bold font-mono text-xs tracking-widest uppercase mb-4 block">Resultados Reais</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
                    O Impacto da Estratégia
                </h2>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.12)] border border-[#E0E0D8] group select-none">

<div className="absolute inset-0 bg-[#F5F5F0] flex flex-col items-center justify-center text-center p-8">

<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'radial-gradient(#FFD60A 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 transform translate-x-4 md:translate-x-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8EE] text-[#1D7C4D] border border-[#1D7C4D]/20 text-xs font-bold uppercase mb-4">
<i className="w-3 h-3" data-lucide="trending-up"></i> Pós-Muutos
                        </div>
<h3 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-2 tracking-tight">152 Leads</h3>
<p className="text-[#6B6B66] font-medium text-lg">Agenda lotada em 14 dias</p>
</div>
</div>

<div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 border-r border-[#E0E0D8] w-[50%] overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.05)]" id="slider-overlay">

<div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center bg-white text-[#1A1A1A]">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ccc_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10 transform -translate-x-4 md:-translate-x-10 opacity-60 grayscale">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F0] text-[#6B6B66] border border-[#E0E0D8] text-xs font-bold uppercase mb-4">
<i className="w-3 h-3" data-lucide="trending-down"></i> Antes
                            </div>
<h3 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-2 tracking-tight">3 Leads</h3>
<p className="text-[#6B6B66] font-medium text-lg">Postando todo dia, sem direção</p>
</div>
</div>
</div>

<input className="range-slider" max="100" min="0" oninput="moveDivider(this.value)" type="range" value="50"/>

<div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-white z-40 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-ew-resize" id="slider-handle">
<div className="w-10 h-10 bg-[#FF6B35] rounded-full shadow-lg flex items-center justify-center text-white border-4 border-white">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
</div>
</div>
</div>
<p className="text-center text-[#6B6B66] text-sm mt-6 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i> Arraste para comparar os resultados
            </p>
</div>
</section>

<section className="py-32 bg-[#F5F5F0] px-6 border-t border-[#E0E0D8]" id="servicos">
<div className="max-w-[1200px] mx-auto">
<div className="mb-16 md:text-center">
<h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-4">Como podemos ajudar</h2>
<p className="text-[#6B6B66] max-w-2xl mx-auto">Soluções flexíveis para marcas em diferentes estágios de maturidade digital.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="apollo-card p-10 group relative hover:-translate-y-2">
<div className="w-12 h-12 bg-[#D6F0FF] rounded-lg flex items-center justify-center text-[#00609C] mb-8 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Reels Estratégicos</h3>
<p className="text-[15px] text-[#6B6B66] mb-8 leading-relaxed">
                        Pacotes de vídeos curtos desenhados para retenção. Inclui roteiro, gravação e edição.
                    </p>
<ul className="space-y-3 text-sm text-[#2D2D2D] border-t border-[#E0E0D8] pt-8">
<li className="flex items-center gap-2"><i className="text-[#FF6B35] w-4 h-4" data-lucide="check"></i> 4 a 12 vídeos/mês</li>
<li className="flex items-center gap-2"><i className="text-[#FF6B35] w-4 h-4" data-lucide="check"></i> Edição dinâmica</li>
</ul>
</div>

<div className="apollo-card p-10 group relative hover:-translate-y-2 border-[#FFD60A] border-2">
<div className="absolute top-4 right-4 bg-[#FFD60A] text-[#1A1A1A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Mais Escolhido</div>
<div className="w-12 h-12 bg-[#FFE67E] rounded-lg flex items-center justify-center text-[#7A5C00] mb-8 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Gestão Full-Service</h3>
<p className="text-[15px] text-[#6B6B66] mb-8 leading-relaxed">
                        Nós assumimos seu Instagram. Estratégia, produção, postagem e análise completa.
                    </p>
<ul className="space-y-3 text-sm text-[#2D2D2D] border-t border-[#E0E0D8] pt-8">
</ul></div></div></div></section>
    </>
  );
}
