import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="w-full py-5 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-zinc-100/50 reveal">
<div className="flex items-center gap-2">
<img alt="Bittencurt Turismo" className="h-10 w-auto object-contain" src="https://bittencurtturismo.com.br/wp-content/uploads/2026/01/20260116-20251201-design-sem-nome-1.png"/>
</div>
<nav className="hidden lg:flex gap-8">
<a className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-cyan-600 transition-colors font-display" href="#">Dúvidas</a>
<a className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-cyan-600 transition-colors font-display" href="#">História</a>
<a className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-cyan-600 transition-colors font-display" href="#">Blog</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-500/20 active:scale-95 duration-300">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<span className="text-xs font-bold tracking-wide font-display">Fale Conosco</span>
</button>
</div>
</header>
<main className="px-4 md:px-6 lg:px-12 pb-20">

<section className="relative w-full min-h-[85vh] rounded-[2rem] overflow-hidden group mt-4 reveal">
<img alt="Lençóis Maranhenses" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" src="https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/americas/brazil/lencoismaranhenses/0/stills/00page/01LENC-IM0001-lencois-maranhenses.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent/10"></div>
<div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20 max-w-5xl">
<div className="flex flex-col items-start gap-4 mb-8">
<div className="flex items-center gap-2 reveal delay-100">
<span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/20 font-display">Agência Especializada</span>
<div className="flex text-cyan-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] reveal delay-200">
                        Descubra os Lençóis <br/>
                        com a <span className="text-cyan-300 italic font-light">Melhor Agência</span> <br/>
                        de Barreirinhas.
                    </h1>
</div>
<div className="space-y-4 mb-12 max-w-xl">
<div className="flex items-start gap-3 text-zinc-100 reveal delay-300">
<iconify-icon className="text-cyan-300 flex-shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-base font-light tracking-wide">+1532 famílias atendidas com excelência.</span>
</div>
<div className="flex items-start gap-3 text-zinc-100 reveal delay-400">
<iconify-icon className="text-cyan-300 flex-shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-base font-light tracking-wide">Roteiros personalizados e exclusivos.</span>
</div>
<div className="flex items-start gap-3 text-zinc-100 reveal delay-500">
<iconify-icon className="text-cyan-300 flex-shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-base font-light tracking-wide">Pacotes a partir de <strong className="text-white font-semibold font-display">R$1040</strong> por pessoa.</span>
</div>
</div>
<div className="flex flex-wrap gap-4 reveal delay-500">
<button className="bg-white text-zinc-900 px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-cyan-50 transition-all flex items-center gap-2 group font-display">
                        Quero um roteiro
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full text-sm font-bold tracking-wide text-white border border-white/30 hover:bg-white/10 transition-all font-display backdrop-blur-sm">
                        Ver Vídeo
                    </button>
</div>
</div>
</section>

<section className="mt-8 mb-24 reveal">
<div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-zinc-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
<div className="flex-shrink-0 relative z-10">
<img alt="Google" className="h-10 w-auto opacity-70 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/20250626-logo-google-png-1-1024x427.png"/>
</div>
<div className="w-px h-12 bg-zinc-100 hidden md:block"></div>
<div className="flex-1 relative z-10 text-center md:text-left">
<div className="flex justify-center md:justify-start text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-lg font-light italic mb-4 leading-relaxed font-serif">
                        "Experiência maravilhosa, equipe super alinhada. Desde o primeiro contato as informações foram claras. São a melhor agência."
                    </p>
<div className="flex items-center justify-center md:justify-start gap-3 text-xs font-bold text-zinc-900 uppercase tracking-widest font-display">
<span>Elias M.</span>
<span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
<span className="text-zinc-400">Há 2 meses</span>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight">Por que escolher a<br/><span className="text-cyan-600">Bittencurt Turismo?</span></h2>
<p className="text-zinc-500 max-w-xs text-sm mt-4 md:mt-0 text-right md:text-left">Compromisso com sua segurança e a melhor experiência nos Lençóis.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group reveal delay-100">
<div className="w-14 h-14 bg-white border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="group-hover:text-cyan-600 transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Credibilidade</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        7 anos de mercado. Mais de 1532 famílias viajaram com total segurança e suporte.
                    </p>
<div className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-700 bg-cyan-100/50 px-3 py-1.5 rounded-md uppercase tracking-wider font-display">
                        Líder em avaliações
                    </div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group reveal delay-200">
<div className="w-14 h-14 bg-white border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="group-hover:text-cyan-600 transition-colors" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Especialistas Locais</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Conheça os segredos dos Lençóis com guias nativos que amam o que fazem.
                    </p>
<div className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-700 bg-cyan-100/50 px-3 py-1.5 rounded-md uppercase tracking-wider font-display">
                        Imersão Cultural
                    </div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group reveal delay-300">
<div className="w-14 h-14 bg-white border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="group-hover:text-cyan-600 transition-colors" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">Melhor Valor</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Experiências premium com preços justos. O paraíso cabe no seu bolso.
                    </p>
<div className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-700 bg-cyan-100/50 px-3 py-1.5 rounded-md uppercase tracking-wider font-display">
                        A partir de R$ 1040
                    </div>
</div>
</div>
</section>

<section className="mb-32">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-12 reveal">Experiências <span className="text-zinc-400 font-light italic">Inesquecíveis</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative h-[550px] lg:col-span-2 rounded-3xl overflow-hidden group cursor-pointer reveal">
<img alt="Lagoas Azul e Bonita" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/circuito-lagoa-azul5.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
<span className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20 font-display">Mais Procurado</span>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<h3 className="text-white text-4xl font-medium tracking-tight">Lagoas Azul e Bonita</h3>
<p className="text-cyan-300 text-xl font-bold font-display">R$ 300 <span className="text-xs text-white/60 font-normal ml-1">/ pessoa</span></p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-zinc-300 text-xs font-medium tracking-wide">
<div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-cyan-400" icon="solar:water-drops-linear"></iconify-icon> Águas Cristalinas
                            </div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-cyan-400" icon="solar:camera-linear"></iconify-icon> Fotos Incríveis
                            </div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
<iconify-icon className="text-cyan-400" icon="solar:sun-fog-linear"></iconify-icon> Pôr do Sol
                            </div>
</div>
<button className="bg-white text-zinc-900 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-cyan-50 transition-colors w-full md:w-auto font-display">
                            Reservar Agora
                        </button>
</div>
</div>

<div className="relative h-[550px] rounded-3xl overflow-hidden group cursor-pointer reveal delay-100">
<img alt="Atins" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/20250627-barreirinhas-tabela2.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
<span className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20 font-display">Aventura</span>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="text-white text-3xl font-medium tracking-tight mb-2">Atins</h3>
<p className="text-cyan-300 text-lg font-bold mb-6 font-display">R$ 290</p>
<div className="space-y-3 mb-8 text-zinc-300 text-xs">
<p className="line-clamp-2 leading-relaxed">O encontro do rio com o mar em uma vila de pescadores rústica e charmosa.</p>
</div>
<button className="w-full bg-transparent border border-white/30 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-zinc-900 transition-all font-display">
                            Detalhes
                        </button>
</div>
</div>

<div className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer reveal">
<img alt="Santo Amaro" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/circuito-santo-amaro7.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<span className="absolute top-6 left-6 bg-zinc-900/30 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest font-display">Exclusivo</span>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-white text-2xl font-medium">Santo Amaro</h3>
<p className="text-cyan-300 text-sm font-bold font-display">R$ 320</p>
</div>
<p className="text-zinc-400 text-xs leading-relaxed mb-6">As lagoas mais profundas e coloridas do parque nacional.</p>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer reveal delay-100">
<img alt="Caburé" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/circuito-cabure3.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-white text-2xl font-medium">Caburé</h3>
<p className="text-cyan-300 text-sm font-bold font-display">Rio e Mar</p>
</div>
<p className="text-zinc-400 text-xs leading-relaxed mb-6">Relaxe em redes sobre as águas onde o rio encontra o mar.</p>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer reveal delay-200">
<img alt="Quadriciclo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/fotos-circuito-quadriciclo8.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
<span className="absolute top-6 left-6 bg-red-500/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest font-display">Off-Road</span>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex justify-between items-end mb-2">
<h3 className="text-white text-2xl font-medium">Quadriciclo</h3>
<p className="text-cyan-300 text-sm font-bold font-display">Adrenalina</p>
</div>
<p className="text-zinc-400 text-xs leading-relaxed mb-6">Acelere pelas dunas e trilhas dos pequenos lençóis.</p>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="bg-zinc-900 text-white p-10 rounded-[2rem] reveal relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity opacity-50 group-hover:opacity-80"></div>
<iconify-icon className="text-cyan-400 mb-6 relative z-10" icon="solar:clipboard-check-linear" width="40"></iconify-icon>
<h3 className="text-3xl font-medium mb-4 relative z-10">Roteiros <br/>Personalizados</h3>
<p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                        Desenhamos cada detalhe da sua viagem. Do transporte privativo aos melhores horários para visitar as lagoas sem multidões.
                    </p>
</div>
<div className="bg-cyan-50 text-zinc-900 p-10 rounded-[2rem] border border-cyan-100 reveal delay-100 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
<iconify-icon className="text-cyan-700 mb-6" icon="solar:headphones-round-sound-linear" width="40"></iconify-icon>
<h3 className="text-3xl font-medium mb-4">Suporte <br/>24 Horas</h3>
<p className="text-zinc-600 text-sm leading-relaxed">
                        Nossa equipe local monitora cada passo da sua jornada para garantir segurança e conforto absoluto.
                    </p>
</div>
</div>

<div className="lg:col-span-7 space-y-10 lg:pl-10 flex flex-col justify-center">
<div className="reveal delay-200">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-8">Planeje sua viagem<br/>para o paraíso.</h2>
<div className="prose prose-zinc text-zinc-500 text-base leading-7 space-y-6">
<p>Saber o que fazer nos Lençóis Maranhenses é indispensável antes de organizar o roteiro. Repleta de dunas imensas e lagoas cristalinas, a região é um dos destinos mais cobiçados do mundo.</p>
<p>A <span className="text-zinc-900 font-bold bg-cyan-50 px-1 rounded">Bittencurt Turismo</span> não vende apenas passeios; entregamos memórias. Somos nativos, conhecemos cada duna, cada fluxo do vento e os horários perfeitos de luz.</p>
</div>
</div>
<div className="w-full h-px bg-zinc-100 reveal delay-300"></div>
<div className="reveal delay-400">
<h3 className="text-2xl font-medium text-zinc-900 mb-4">Natureza e conforto alinhados</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Nossos veículos são modernos (Hilux 4x4) e nossas lanchas são revisadas constantemente. Aventura com segurança é nossa prioridade absoluta.
                    </p>
</div>
</div>
</div>

<section className="mb-12 relative rounded-[2.5rem] overflow-hidden bg-zinc-900 reveal">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
<div className="relative h-full w-full overflow-hidden group">
<img alt="Cliente nas dunas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://bittencurtturismo.com.br/wp-content/uploads/2025/06/20250626-lencois-maranhenses-11-jun-2022.jpg"/>
<div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-12 md:p-20 flex flex-col justify-center relative">
<div className="absolute top-0 right-0 p-12 opacity-10">
<iconify-icon className="text-white" icon="solar:quote-up-square-bold" width="120"></iconify-icon>
</div>
<div className="flex gap-1 text-cyan-400 mb-8">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h2 className="text-2xl md:text-4xl font-medium text-white mb-10 leading-snug font-display">
                        "Atendimento excepcional. Super atenciosos. Com certeza viajarei com eles novamente. A melhor agência de Barreirinhas."
                    </h2>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl font-display">L</div>
<div className="flex flex-col">
<span className="text-white font-bold text-lg">Larissa Santos</span>
<span className="text-zinc-400 text-xs uppercase tracking-widest font-display">Cliente Verificada</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-20 pb-10 px-6 lg:px-12 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2 pr-10">
<img alt="Bittencurt" className="h-10 mb-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://bittencurtturismo.com.br/wp-content/uploads/2026/01/20260116-20251201-design-sem-nome-1.png"/>
<p className="text-zinc-500 text-sm max-w-sm mb-8 leading-relaxed">
                    Sua porta de entrada para o paraíso. Conectamos você à natureza bruta dos Lençóis Maranhenses com sofisticação e alma local.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="reveal delay-100">
<h4 className="text-zinc-900 font-bold mb-8 font-display tracking-wide">Contato</h4>
<ul className="space-y-5 text-sm text-zinc-500">
<li className="flex items-center gap-3 hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        (98) 8896-3634
                    </li>
<li className="flex items-center gap-3 hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                        bittencurt_transfer@hotmail.com
                    </li>
<li className="flex items-center gap-3 hover:text-cyan-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon>
                        CNPJ: 37.238.621/0001-18
                    </li>
</ul>
</div>
<div className="reveal delay-200">
<h4 className="text-zinc-900 font-bold mb-8 font-display tracking-wide">Links Rápidos</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-cyan-600 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-zinc-300 rounded-full"></span> Nossos Passeios</a></li>
<li><a className="hover:text-cyan-600 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-zinc-300 rounded-full"></span> Sobre a Bittencurt</a></li>
<li><a className="hover:text-cyan-600 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-zinc-300 rounded-full"></span> Blog de Viagem</a></li>
<li><a className="hover:text-cyan-600 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-zinc-300 rounded-full"></span> Termos de Uso</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-medium">
<p>Copyright © 2026 Bittencurt Turismo.</p>
<div className="flex gap-8">
<span className="cursor-pointer hover:text-zinc-600">Privacidade</span>
<span className="cursor-pointer hover:text-zinc-600">Legal</span>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group reveal" href="https://wa.me/559888963634" target="_blank">
<span className="absolute right-full mr-4 bg-white text-zinc-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Fale conosco</span>
<img alt="WhatsApp" className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
</a>



    </>
  );
}
