import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-transparent transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">

<a className="flex items-center gap-2 group opacity-90 hover:opacity-100 transition-opacity" href="#">
<span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">Aurora</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors" href="#inicio">Início</a>
<a className="text-xs font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors" href="#servicos">Tratamentos</a>
<a className="text-xs font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors" href="#sobre">A Clínica</a>
<a className="text-xs font-normal text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors" href="#contato">Contato</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-3 py-1 text-[11px] font-medium text-white transition-all bg-[#1d1d1f] rounded-full hover:bg-black hover:scale-105" href="#contato">
                    Agendar
                </a>
<button className="md:hidden text-[#1d1d1f]">
<iconify-icon height="20" icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white" id="inicio">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-x-0 top-0 h-[800px] hero-mask opacity-80 md:opacity-100">
<img alt="Mulher em tratamento estético relaxante" className="w-full h-full object-cover object-center md:object-[center_30%]" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white"></div>
</div>
<div className="max-w-[980px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<h1 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold tracking-tighter text-[#1d1d1f] mb-6 leading-[1.05] fade-up">
                Beleza natural.<br/>
                Elevada à ciência.
            </h1>
<p className="text-lg md:text-xl text-[#1d1d1f]/70 font-normal mb-10 max-w-2xl mx-auto leading-relaxed fade-up delay-100">
                Uma abordagem minimalista e tecnológica para o cuidado estético. Projetada para quem valoriza a sofisticação.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-up delay-200">
<a className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0071e3] text-white text-sm font-medium rounded-full hover:bg-[#0077ED] transition-all" href="#contato">
                    Agende sua avaliação
                </a>
<a className="group inline-flex items-center gap-1 text-[#0071e3] text-sm font-medium hover:underline decoration-1 underline-offset-4 transition-all" href="#servicos">
                    Ver tratamentos
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicos">
<div className="max-w-[1024px] mx-auto px-6">
<div className="mb-14">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] mb-4">Procedimentos.</h2>
<p className="text-xl font-normal text-[#86868b]">Tecnologia avançada para resultados precisos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 lg:col-span-2 group relative overflow-hidden bg-[#f5f5f7] rounded-[2rem] h-[400px] md:h-[500px] transition-transform duration-500 hover:scale-[1.01]">
<div className="absolute inset-0 z-0">
<img alt="Skin Care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute top-8 left-8 md:top-12 md:left-12 max-w-sm z-10">
<span className="text-xs font-semibold text-white/90 uppercase tracking-widest mb-2 block">Destaque</span>
<h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-2">Protocolos Faciais</h3>
<p className="text-sm md:text-base text-white/90 font-medium">Rejuvenescimento e glow natural com ativos premium.</p>
</div>
<div className="absolute bottom-8 right-8 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
<iconify-icon height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>
</div>

<div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between h-[400px] md:h-[500px] transition-transform duration-500 hover:scale-[1.01] group cursor-pointer">
<div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1d1d1f] mb-6 shadow-sm">
<iconify-icon height="20" icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-3">Toxina Botulínica</h3>
<p className="text-sm text-[#86868b] leading-relaxed">
                            Prevenção de linhas dinâmicas mantendo a expressão natural do rosto.
                        </p>
</div>
<div className="flex justify-end">
<span className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="bg-[#f5f5f7] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between h-[400px] transition-transform duration-500 hover:scale-[1.01] group cursor-pointer">
<div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1d1d1f] mb-6 shadow-sm">
<iconify-icon height="20" icon="lucide:scan-face" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-3">Harmonização</h3>
<p className="text-sm text-[#86868b] leading-relaxed">
                            Estruturação facial estratégica respeitando sua anatomia única.
                        </p>
</div>
<div className="flex justify-end">
<span className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="col-span-1 md:col-span-2 group relative overflow-hidden bg-[#f5f5f7] rounded-[2rem] h-[400px] transition-transform duration-500 hover:scale-[1.01]">
<div className="absolute inset-0 z-0">
<img alt="Ambiente" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-10">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Laser &amp; Tecnologias</h3>
<p className="text-sm md:text-base text-white/90">Equipamentos de última geração.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f5f7]" id="sobre">
<div className="max-w-[980px] mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] mb-8">
                O cuidado que você merece.<br/>
<span className="text-[#86868b]">No ambiente que você precisa.</span>
</h2>
<p className="text-lg text-[#424245] font-normal leading-relaxed max-w-3xl mx-auto mb-16">
                A Clínica Aurora não é apenas sobre estética. É sobre confiança, ciência e bem-estar. Nossos especialistas combinam arte e medicina para resultados que realçam sua melhor versão.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[#d2d2d7] pt-12">
<div>
<span className="block text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-1">+5k</span>
<span className="text-xs font-medium text-[#86868b]">Pacientes</span>
</div>
<div>
<span className="block text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-1">10</span>
<span className="text-xs font-medium text-[#86868b]">Anos de Experiência</span>
</div>
<div>
<span className="block text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-1">15+</span>
<span className="text-xs font-medium text-[#86868b]">Tecnologias</span>
</div>
<div>
<span className="block text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-1">4.9</span>
<span className="text-xs font-medium text-[#86868b]">Avaliação</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contato">
<div className="max-w-[600px] mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1d1d1f] mb-4">Contato</h2>
<p className="text-base text-[#86868b]">
                    Estamos prontos para receber você.
                </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<input className="w-full px-4 py-3 bg-[#f5f5f7] border-none rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3]/50 focus:outline-none transition-all" placeholder="Nome" type="text"/>
</div>
<div className="space-y-1">
<input className="w-full px-4 py-3 bg-[#f5f5f7] border-none rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3]/50 focus:outline-none transition-all" placeholder="Telefone" type="tel"/>
</div>
</div>
<div className="space-y-1">
<input className="w-full px-4 py-3 bg-[#f5f5f7] border-none rounded-xl text-sm text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3]/50 focus:outline-none transition-all" placeholder="E-mail" type="email"/>
</div>
<div className="space-y-1 relative">
<select className="w-full px-4 py-3 bg-[#f5f5f7] border-none rounded-xl text-sm text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3]/50 focus:outline-none transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Selecione o tratamento</option>
<option>Avaliação Facial</option>
<option>Botox</option>
<option>Harmonização</option>
<option>Outros</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#86868b]">
<iconify-icon height="16" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<button className="w-full mt-4 bg-[#0071e3] text-white font-medium text-sm py-3.5 rounded-xl hover:bg-[#0077ED] transition-colors flex items-center justify-center gap-2" type="button">
                    Enviar
                </button>
</form>
<div className="mt-12 pt-12 border-t border-[#f5f5f7] grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div>
<h4 className="text-xs font-semibold text-[#1d1d1f] mb-1">Endereço</h4>
<p className="text-xs text-[#86868b]">Av. Bela Estética, 123<br/>São Paulo, SP</p>
</div>
<div>
<h4 className="text-xs font-semibold text-[#1d1d1f] mb-1">Contato</h4>
<p className="text-xs text-[#86868b]">(11) 91234-5678<br/>ola@aurora.com</p>
</div>
<div>
<h4 className="text-xs font-semibold text-[#1d1d1f] mb-1">Horários</h4>
<p className="text-xs text-[#86868b]">Seg-Sex: 9h-19h<br/>Sáb: 9h-14h</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#f5f5f7] pt-12 pb-8 border-t border-white">
<div className="max-w-[980px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-[#86868b]">
                © 2026 Aurora Estética. Todos os direitos reservados.
            </p>
<div className="flex gap-6">
<a className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] hover:underline" href="#">Privacidade</a>
<a className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] hover:underline" href="#">Termos de Uso</a>
<a className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] hover:underline" href="#">Instagram</a>
</div>
</div>
</footer>

    </>
  );
}
