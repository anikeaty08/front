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
      

<nav className="fixed top-0 w-full z-50 bg-[#09090F]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-['DM_Mono'] text-lg font-medium tracking-tighter text-[#F2F2F8] group-hover:text-[#2D6BE4] transition-colors">IBZS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#9090AA] hover:text-[#F2F2F8] transition-colors" href="#sobre">Quem Somos</a>
<a className="text-sm text-[#9090AA] hover:text-[#F2F2F8] transition-colors" href="#celulas">Células</a>
<a className="text-sm text-[#9090AA] hover:text-[#F2F2F8] transition-colors" href="#mensagens">Mensagens</a>
<a className="text-sm text-[#9090AA] hover:text-[#F2F2F8] transition-colors" href="#servir">Quero Servir</a>
<a className="ml-4 bg-[#2D6BE4] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#3D7CF4] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(45,107,228,0.3)] transition-all duration-200" href="#membro">
                    Seja Membro →
                </a>
</div>

<button className="md:hidden text-[#F2F2F8] p-2 -mr-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#09090F]">

<img alt="Adoração" className="bg-slideshow absolute inset-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<img alt="Serviço" className="bg-slideshow absolute inset-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1593113565694-c6f8716c0296?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<img alt="Pregação" className="bg-slideshow absolute inset-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1511806754518-53bada35f930?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#09090F]/80 mix-blend-multiply z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#09090F]/70 via-[#09090F]/30 to-[#09090F] z-10 pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-3xl">
<span className="animate-fade-up block font-['DM_Mono'] text-xs uppercase tracking-[0.15em] text-[#9090AA] mb-6">
                    Parnamirim · RN · Desde 2003
                </span>
<h1 className="animate-fade-up delay-100 font-['Outfit'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter uppercase leading-[0.95] text-[#F2F2F8]">
                    Transformando <br/> Vidas
                    <span className="text-[#2D6BE4] block mt-2">Através da Palavra</span>
</h1>
<p className="animate-fade-up delay-200 text-base md:text-lg text-[#9090AA] max-w-xl mt-8 leading-relaxed">
                    Uma comunidade batista que acolhe, cresce e serve em Nova Parnamirim. Encontre seu lugar na missão de compartilhar o amor e a verdade.
                </p>
<div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto text-center bg-[#2D6BE4] text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-[#3D7CF4] hover:scale-[1.02] transition-all duration-200 shadow-[0_4px_24px_rgba(45,107,228,0.2)]" href="#membro">
                        Seja Membro →
                    </a>
<a className="w-full sm:w-auto text-center bg-transparent border border-white/10 text-[#F2F2F8] px-8 py-3.5 rounded-md text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-all duration-200" href="#sobre">
                        Conheça nossa história
                    </a>
</div>
</div>
</div>

<div className="animate-fade-up delay-400 absolute bottom-8 right-6 md:right-12 bg-[#1A1A24]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hidden lg:block shadow-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-[#E8B84B]"></div>
<span className="font-['DM_Mono'] text-xs uppercase tracking-wider text-[#9090AA]">Próximos Cultos</span>
</div>
<div className="flex items-baseline gap-6">
<div>
<p className="text-sm text-[#9090AA] mb-1">Domingo</p>
<p className="font-['DM_Mono'] text-lg text-[#F2F2F8]">09h · 11h · 17h</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#09090F]" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111118] border border-white/5 rounded-2xl p-8 group hover:border-[#2D6BE4]/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#22222E] flex items-center justify-center text-[#2D6BE4] group-hover:scale-110 group-hover:bg-[#2D6BE4] group-hover:text-white transition-all duration-300 mb-6">
<iconify-icon height="24" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-['Outfit'] text-xl font-medium tracking-tight text-[#F2F2F8] mb-3">Palavra</h3>
<p className="text-sm text-[#9090AA] leading-relaxed">
                        A Bíblia como fundamento central de tudo que cremos, ensinamos e vivemos diariamente.
                    </p>
</div>

<div className="bg-[#111118] border border-white/5 rounded-2xl p-8 group hover:border-[#2D6BE4]/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#22222E] flex items-center justify-center text-[#2D6BE4] group-hover:scale-110 group-hover:bg-[#2D6BE4] group-hover:text-white transition-all duration-300 mb-6">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-['Outfit'] text-xl font-medium tracking-tight text-[#F2F2F8] mb-3">Comunidade</h3>
<p className="text-sm text-[#9090AA] leading-relaxed">
                        Um ambiente seguro para pertencer, construir relacionamentos profundos e crescer juntos.
                    </p>
</div>

<div className="bg-[#111118] border border-white/5 rounded-2xl p-8 group hover:border-[#2D6BE4]/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#22222E] flex items-center justify-center text-[#2D6BE4] group-hover:scale-110 group-hover:bg-[#2D6BE4] group-hover:text-white transition-all duration-300 mb-6">
<iconify-icon height="24" icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-['Outfit'] text-xl font-medium tracking-tight text-[#F2F2F8] mb-3">Missão</h3>
<p className="text-sm text-[#9090AA] leading-relaxed">
                        Comprometidos em impactar Parnamirim e o mundo através do serviço prático e amor real.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#09090F] relative overflow-hidden" id="membro">

<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2D6BE4]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<span className="font-['DM_Mono'] text-xs uppercase tracking-[0.15em] text-[#2D6BE4] mb-4 block">Seja Parte</span>
<h2 className="font-['Outfit'] text-4xl lg:text-5xl font-medium tracking-tighter text-[#F2F2F8] mb-6">
                        Sua jornada com a gente
                    </h2>
<p className="text-base text-[#9090AA] mb-12 max-w-md">
                        Acreditamos que a fé não deve ser vivida de forma isolada. Descubra os próximos passos para se tornar um membro ativo.
                    </p>
<div className="relative pl-6 border-l border-white/10 space-y-10">

<div className="relative">
<div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#09090F] border-[3px] border-[#2D6BE4]"></div>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Primeira visita</h4>
<p className="text-sm text-[#5A5A72]">Participe de um dos nossos cultos de domingo.</p>
</div>

<div className="relative">
<div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#09090F] border-[3px] border-white/20"></div>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Grupo de Integração</h4>
<p className="text-sm text-[#5A5A72]">4 semanas conhecendo nossa visão e valores.</p>
</div>

<div className="relative">
<div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#09090F] border-[3px] border-white/20"></div>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Batismo</h4>
<p className="text-sm text-[#5A5A72]">Uma declaração pública da sua fé.</p>
</div>

<div className="relative">
<div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#09090F] border-[3px] border-white/20"></div>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Membresia</h4>
<p className="text-sm text-[#5A5A72]">Compromisso oficial com nossa comunidade.</p>
</div>
</div>
</div>

<div className="bg-[#1A1A24] rounded-2xl p-8 lg:p-10 border border-white/5 shadow-2xl relative">
<h3 className="text-xl font-medium tracking-tight text-[#F2F2F8] mb-8">Quero dar o próximo passo</h3>
<form className="space-y-5">
<div>
<label className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[#9090AA] mb-2" htmlFor="name">
                                Nome Completo <span className="text-[#E8B84B]">*</span>
</label>
<input className="w-full bg-[#22222E] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F2F2F8] placeholder:text-[#5A5A72] focus:border-[#2D6BE4] focus:ring-1 focus:ring-[#2D6BE4] outline-none transition-all" id="name" placeholder="Como podemos te chamar?" type="text"/>
</div>
<div>
<label className="block text-xs font-['DM_Mono'] uppercase tracking-wider text-[#9090AA] mb-2" htmlFor="phone">
                                WhatsApp <span className="text-[#E8B84B]">*</span>
</label>
<input className="w-full bg-[#22222E] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F2F2F8] placeholder:text-[#5A5A72] focus:border-[#2D6BE4] focus:ring-1 focus:ring-[#2D6BE4] outline-none transition-all" id="phone" placeholder="(84) 90000-0000" type="tel"/>
</div>
<div className="pt-2">
<label className="flex items-center cursor-pointer group">
<div className="relative">
<input className="sr-only peer" type="checkbox" />

<div className="block bg-[#09090F] border border-white/10 w-11 h-6 rounded-full peer-checked:bg-[#2D6BE4] peer-checked:border-[#2D6BE4] transition-colors duration-300"></div>

<div className="absolute left-1 top-1 bg-[#9090AA] w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5 peer-checked:bg-white shadow-sm"></div>
</input></div>
<span className="ml-3 text-sm text-[#9090AA] group-hover:text-[#F2F2F8] transition-colors">Já frequento a IB Zona Sul</span>
</label>
</div>
<button className="w-full bg-[#2D6BE4] text-white py-3.5 rounded-lg text-sm font-medium mt-4 hover:bg-[#3D7CF4] hover:shadow-[0_0_20px_rgba(45,107,228,0.2)] transition-all duration-200" type="button">
                            Enviar meu interesse
                        </button>
</form>
<div className="mt-6 pt-6 border-t border-white/5 text-center">
<a className="inline-flex items-center gap-2 text-sm text-[#9090AA] hover:text-[#2D6BE4] transition-colors group" href="#">
                            Ou fale direto pelo WhatsApp
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050508] relative border-t border-b border-white/5" id="mensagens">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-block font-['DM_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#E8B84B] bg-[#E8B84B]/10 px-3 py-1 rounded-full mb-6">
                Última Mensagem
            </span>
<h2 className="font-['Outfit'] text-3xl md:text-5xl font-medium tracking-tighter text-[#F2F2F8] mb-4">
                Construindo Novas Histórias
            </h2>
<p className="text-sm text-[#9090AA] mb-12">Pastor Marcelo França</p>

<div className="w-full bg-[#111118] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-white/20 transition-colors max-w-2xl mx-auto cursor-pointer group">
<div className="w-16 h-16 rounded-lg bg-[#22222E] overflow-hidden relative shrink-0">
<img alt="Podcast cover" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-md group-hover:scale-110 transition-transform" height="28" icon="solar:play-circle-bold" width="28"></iconify-icon>
</div>
</div>
<div className="text-left flex-1 min-w-0">
<h4 className="text-sm font-medium text-[#F2F2F8] truncate">O poder do recomeço | Episódio 42</h4>
<p className="text-xs text-[#5A5A72] mt-1 truncate">IBZonaSul · No Spotify</p>
</div>
<div className="pr-4 hidden sm:block text-[#2D6BE4]">
<iconify-icon height="24" icon="solar:music-library-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<a className="inline-block mt-10 text-sm text-[#9090AA] hover:text-[#F2F2F8] border-b border-[#9090AA]/30 hover:border-[#F2F2F8] pb-1 transition-all" href="#">
                Ver todas as mensagens no Spotify
            </a>
</div>
</section>

<section className="py-24 bg-[#09090F]" id="celulas">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-2xl">
<h2 className="font-['Outfit'] text-3xl md:text-4xl font-medium tracking-tighter text-[#F2F2F8] mb-4">
                        Encontre sua célula
                    </h2>
<p className="text-base text-[#9090AA]">
                        Grupos pequenos que se reúnem semanalmente nas casas, perto de você. Onde a igreja se torna família.
                    </p>
</div>

<div className="mt-8 md:mt-0 flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="shrink-0 bg-[#2D6BE4]/10 text-[#2D6BE4] border border-[#2D6BE4]/20 px-4 py-1.5 rounded-full text-xs font-['DM_Mono'] uppercase tracking-wider">Todos</button>
<button className="shrink-0 bg-[#111118] text-[#9090AA] border border-white/5 hover:border-white/20 px-4 py-1.5 rounded-full text-xs font-['DM_Mono'] uppercase tracking-wider transition-colors">Adultos</button>
<button className="shrink-0 bg-[#111118] text-[#9090AA] border border-white/5 hover:border-white/20 px-4 py-1.5 rounded-full text-xs font-['DM_Mono'] uppercase tracking-wider transition-colors">Jovens</button>
<button className="shrink-0 bg-[#111118] text-[#9090AA] border border-white/5 hover:border-white/20 px-4 py-1.5 rounded-full text-xs font-['DM_Mono'] uppercase tracking-wider transition-colors">Casais</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-[#111118] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 hover:border-[#2D6BE4]/40 transition-colors group">
<div className="w-16 h-16 rounded-full bg-[#22222E] shrink-0 overflow-hidden border border-white/10">
<img alt="Líder" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<span className="inline-block font-['DM_Mono'] text-[10px] uppercase tracking-wider text-[#9090AA] bg-[#22222E] px-2 py-0.5 rounded mb-2">Jovens</span>
<h4 className="text-lg font-medium text-[#F2F2F8] tracking-tight">Célula Esperança</h4>
</div>
</div>
<p className="text-sm text-[#9090AA] mb-4">Liderado por Thiago e Amanda</p>
<div className="flex items-center gap-4 text-xs text-[#5A5A72] mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Terças, 20h</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Nova Parnamirim</span>
</div>
<button className="text-sm font-medium text-[#2D6BE4] hover:text-[#3D7CF4] transition-colors flex items-center gap-2">
                            Participar <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#111118] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 hover:border-[#2D6BE4]/40 transition-colors group">
<div className="w-16 h-16 rounded-full bg-[#22222E] shrink-0 overflow-hidden border border-white/10">
<img alt="Líder" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<span className="inline-block font-['DM_Mono'] text-[10px] uppercase tracking-wider text-[#9090AA] bg-[#22222E] px-2 py-0.5 rounded mb-2">Casais</span>
<h4 className="text-lg font-medium text-[#F2F2F8] tracking-tight">Célula Aliança</h4>
</div>
</div>
<p className="text-sm text-[#9090AA] mb-4">Liderado por Pr. Paulo e Sarah</p>
<div className="flex items-center gap-4 text-xs text-[#5A5A72] mb-6">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Quintas, 19h30</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Cidade Verde</span>
</div>
<button className="text-sm font-medium text-[#2D6BE4] hover:text-[#3D7CF4] transition-colors flex items-center gap-2">
                            Participar <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="servir">
<div className="absolute inset-0 bg-gradient-to-b from-[#111118]/30 to-[#09090F] z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-['Outfit'] text-3xl md:text-5xl font-medium tracking-tighter text-[#F2F2F8] mb-4">
                    Você foi feito para servir
                </h2>
<p className="text-base text-[#9090AA]">
                    Cada pessoa tem um dom. Encontre seu lugar na missão e faça a diferença na vida da comunidade.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="bg-[#111118] border border-white/5 rounded-xl p-5 hover:border-[#2D6BE4]/30 hover:bg-[#1A1A24] transition-all cursor-pointer group">
<iconify-icon className="text-[#5A5A72] group-hover:text-[#2D6BE4] transition-colors mb-4" height="24" icon="solar:music-note-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Louvor</h4>
<p className="text-xs text-[#5A5A72] line-clamp-2">Conduzindo a igreja em adoração através da música.</p>
</div>

<div className="bg-[#111118] border border-white/5 rounded-xl p-5 hover:border-[#2D6BE4]/30 hover:bg-[#1A1A24] transition-all cursor-pointer group">
<iconify-icon className="text-[#5A5A72] group-hover:text-[#2D6BE4] transition-colors mb-4" height="24" icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Mídia</h4>
<p className="text-xs text-[#5A5A72] line-clamp-2">Comunicação, transmissão e impacto digital.</p>
</div>

<div className="bg-[#111118] border border-white/5 rounded-xl p-5 hover:border-[#2D6BE4]/30 hover:bg-[#1A1A24] transition-all cursor-pointer group">
<iconify-icon className="text-[#5A5A72] group-hover:text-[#2D6BE4] transition-colors mb-4" height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Kids</h4>
<p className="text-xs text-[#5A5A72] line-clamp-2">Formando a próxima geração nos caminhos de Deus.</p>
</div>

<div className="bg-[#111118] border border-white/5 rounded-xl p-5 hover:border-[#2D6BE4]/30 hover:bg-[#1A1A24] transition-all cursor-pointer group">
<iconify-icon className="text-[#5A5A72] group-hover:text-[#2D6BE4] transition-colors mb-4" height="24" icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-[#F2F2F8] mb-1">Recepção</h4>
<p className="text-xs text-[#5A5A72] line-clamp-2">O primeiro abraço e sorriso que acolhe os visitantes.</p>
</div>
</div>

<div className="mt-16 bg-[#1A1A24] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="text-lg font-medium tracking-tight text-[#F2F2F8]">Pronto para começar?</h4>
<p className="text-sm text-[#9090AA] mt-1">Deixe seu contato e a liderança falará com você.</p>
</div>
<div className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
<div className="relative w-full sm:w-48">
<select className="w-full appearance-none bg-[#22222E] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#F2F2F8] outline-none focus:border-[#2D6BE4]">
<option disabled="" selected="" value="">Escolha uma área</option>
<option value="louvor">Louvor</option>
<option value="midia">Mídia</option>
<option value="kids">Kids</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5A5A72]" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<button className="w-full sm:w-auto bg-[#F2F2F8] text-[#09090F] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                        Enviar
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#050508] border-t border-white/5 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-2">
<span className="font-['DM_Mono'] text-xl font-medium tracking-tighter text-[#F2F2F8] block mb-4">IBZS</span>
<p className="text-sm text-[#5A5A72] max-w-sm mb-6">
                        Transformando vidas através da palavra. Uma comunidade acolhedora em Nova Parnamirim focada em crescimento e serviço.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#111118] border border-white/5 flex items-center justify-center text-[#9090AA] hover:text-[#F2F2F8] hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#111118] border border-white/5 flex items-center justify-center text-[#9090AA] hover:text-[#F2F2F8] hover:border-white/20 transition-all" href="#">
<iconify-icon icon="solar:music-notes-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="font-['DM_Mono'] text-xs uppercase tracking-widest text-[#F2F2F8] mb-6">Navegação</h5>
<ul className="space-y-3">
<li><a className="text-sm text-[#5A5A72] hover:text-[#2D6BE4] transition-colors" href="#sobre">Quem Somos</a></li>
<li><a className="text-sm text-[#5A5A72] hover:text-[#2D6BE4] transition-colors" href="#celulas">Encontre uma Célula</a></li>
<li><a className="text-sm text-[#5A5A72] hover:text-[#2D6BE4] transition-colors" href="#mensagens">Mensagens (Podcast)</a></li>
<li><a className="text-sm text-[#5A5A72] hover:text-[#2D6BE4] transition-colors" href="#servir">Ministérios</a></li>
</ul>
</div>

<div>
<h5 className="font-['DM_Mono'] text-xs uppercase tracking-widest text-[#F2F2F8] mb-6">Visite-nos</h5>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-[#5A5A72]">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Rua Heraldo Cunha, S/N<br/>Nova Parnamirim, RN</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#5A5A72]">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Domingos<br/>09h · 11h · 17h</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#5A5A72] font-['DM_Mono']">
                    © 2026 Igreja Batista Zona Sul. Todos os direitos reservados.
                </p>
<div className="flex gap-4 text-xs text-[#5A5A72]">
<a className="hover:text-[#F2F2F8] transition-colors" href="#">Privacidade</a>
<a className="hover:text-[#F2F2F8] transition-colors" href="#">Termos</a>
</div>
</div>
</div>
</footer>

<a aria-label="Fale conosco no WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform pulse-whatsapp" href="#">
<iconify-icon height="28" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>

    </>
  );
}
