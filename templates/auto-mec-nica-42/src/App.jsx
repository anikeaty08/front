import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
600: '#475569',
800: '#1e293b',
900: '#0f172a',
},
red: {
600: '#dc2626',
700: '#b91c1c',
50: '#fef2f2',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-9 h-9 rounded bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
<span className="font-bold text-sm tracking-tighter">R</span>
</div>
<span className="text-xl font-bold tracking-tight uppercase italic text-slate-900">Rodrigues</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-red-600 transition-colors duration-200" href="#catalogo">Catálogo de Serviços</a>
<a className="hover:text-red-600 transition-colors duration-200" href="#diferenciais">Diferenciais</a>
<a className="hover:text-red-600 transition-colors duration-200" href="#localizacao">Oficina</a>
</div>
<div className="hidden md:flex">
<a className="group flex items-center gap-2 text-sm font-bold bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md shadow-red-600/20" href="https://wa.me/">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>Agendar Agora</span>
</a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="Mecânico trabalhando" className="w-full h-full object-cover opacity-10 grayscale" src="https://images.unsplash.com/photo-1486262715619-01b80258e0c5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
                Oficina Premium em SP
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1] max-w-4xl">
                SEU CARRO <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">NO MÁXIMO POTENCIAL.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 font-light leading-relaxed border-l-2 border-red-600 pl-6">
                Especialistas em diagnósticos complexos e injeção eletrônica. Recuperamos a performance original do seu veículo com transparência total.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 text-lg group">
<iconify-icon icon="solar:whatsapp-linear" width="24"></iconify-icon>
                    Orçamento Rápido
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 border border-slate-300 hover:bg-slate-100 text-slate-900 rounded-full font-medium transition-all duration-200 bg-white/50 backdrop-blur-sm">
                    Ver Catálogo de Serviços
                </button>
</div>

<div className="mt-16 flex flex-wrap gap-8 items-center border-t border-slate-200 pt-8">
<div className="flex items-center gap-3">
<div className="bg-red-50 p-2 rounded-lg text-red-600 border border-red-100">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-bold">Garantia Total</span>
<span className="text-xs text-slate-500">Em peças e serviços</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="bg-red-50 p-2 rounded-lg text-red-600 border border-red-100">
<iconify-icon icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-bold">Scanner Oficial</span>
<span className="text-xs text-slate-500">Bosch &amp; Napro</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="catalogo">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">Catálogo de Serviços</h2>
<p className="text-slate-500 max-w-md">Selecione o serviço que seu carro precisa. Atendemos nacionais e importados.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Diagnóstico" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold text-slate-900">Injeção Eletrônica</h3>
<iconify-icon className="text-red-600" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Limpeza de Bicos
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Diagnóstico via Scanner
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Correção de Falhas
                            </li>
</ul>
<button className="w-full py-3 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-colors">
                            Agendar Avaliação
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Motor" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold text-slate-900">Mecânica de Motor</h3>
<iconify-icon className="text-red-600" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Retífica de Cabeçote
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Troca de Correia Dentada
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Revisão Geral
                            </li>
</ul>
<button className="w-full py-3 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-colors">
                            Agendar Avaliação
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Suspensão" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold text-slate-900">Freios e Suspensão</h3>
<iconify-icon className="text-red-600" icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Troca de Pastilhas
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Amortecedores
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Alinhamento 3D
                            </li>
</ul>
<button className="w-full py-3 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-colors">
                            Agendar Avaliação
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-slate-50 relative" id="diferenciais">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100/40 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">O Padrão Rodrigues</h2>
<p className="text-slate-500 mt-2">Tecnologia de ponta aliada à experiência prática.</p>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
<span className="text-slate-900 font-bold text-lg">4.9/5</span>
<div className="flex text-amber-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-500 text-sm ml-1">+200 Avaliações</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-rows-2 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 rounded-2xl bg-white border border-slate-200 p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
<img alt="Scanner" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1632823471565-1ecf548cf82f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-red-600/30">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Diagnóstico Computadorizado</h3>
<p className="text-slate-600 leading-relaxed">
                            Não trabalhamos com "achismos". Utilizamos scanners de última geração para identificar falhas com precisão milimétrica, economizando seu tempo e dinheiro na troca de peças desnecessárias.
                        </p>
</div>
</div>

<div className="md:col-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-red-200 transition-colors shadow-sm">
<iconify-icon className="text-red-600 mb-4" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-1">Agilidade</h3>
<p className="text-sm text-slate-500">Cumprimento rigoroso de prazos.</p>
</div>
</div>

<div className="md:col-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-red-200 transition-colors shadow-sm">
<iconify-icon className="text-red-600 mb-4" icon="solar:videocamera-record-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-1">Transparência</h3>
<p className="text-sm text-slate-500">Vídeos das peças trocadas no WhatsApp.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl bg-gradient-to-r from-red-50 to-white border border-slate-200 p-6 flex items-center justify-between relative overflow-hidden shadow-sm">
<div className="relative z-10">
<h3 className="text-xl font-bold text-slate-900 mb-2">Peças Originais</h3>
<p className="text-slate-600 text-sm max-w-xs">
                            Trabalhamos apenas com fornecedores certificados para garantir a durabilidade do serviço.
                        </p>
</div>
<div className="opacity-50 rotate-12 absolute right-4">
<iconify-icon className="text-red-200" icon="solar:box-linear" width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="localizacao">

<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 flex flex-col md:flex-row">
<div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-slate-900 mb-6">Pronto para resolver o problema?</h2>
<p className="text-slate-500 mb-8">
                        Não deixe um pequeno barulho se tornar um grande prejuízo. Agende agora sua avaliação.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium">Endereço</h4>
<p className="text-sm text-slate-500">Av. das Indústrias, 1234 - Distrito Industrial, SP</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium">Horário de Funcionamento</h4>
<p className="text-sm text-slate-500">Seg - Sex: 08h às 18h | Sáb: 08h às 12h</p>
</div>
</div>
</div>
<a className="mt-10 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-full font-bold transition-all shadow-lg shadow-red-600/30 w-full md:w-fit" href="#">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon>
                        Chamar no WhatsApp
                    </a>
</div>

<div className="md:w-1/2 relative min-h-[300px] bg-slate-200">
<img alt="Oficina Interior" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale" src="https://images.unsplash.com/photo-1562519819-016930d66141?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white text-slate-900 font-medium flex items-center gap-2 shadow-sm">
<iconify-icon className="text-red-600" icon="solar:map-arrow-right-bold"></iconify-icon>
                            Ver no Google Maps
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 text-slate-900 mb-6">
<div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold">R</div>
<span className="text-lg font-bold tracking-tight uppercase">Rodrigues</span>
</div>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                        Compromisso com a qualidade e a transparência. Sua oficina de confiança para manutenção preventiva e corretiva de veículos nacionais e importados.
                    </p>
</div>
<div>
<h4 className="text-slate-900 font-bold mb-4">Serviços Rápidos</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-red-600 transition-colors" href="#">Injeção Eletrônica</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Troca de Óleo</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Alinhamento 3D</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Revisão de Férias</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-bold mb-4">Contato</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>contato@mecanicarodrigues.com.br</li>
<li>(11) 99999-9999</li>
<li className="flex gap-4 mt-4 text-slate-400">
<a className="hover:text-red-600 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="24"></iconify-icon></a>
<a className="hover:text-red-600 transition-colors" href="#"><iconify-icon icon="solar:brand-facebook-linear" width="24"></iconify-icon></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2023 Auto Mecânica Rodrigues. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-slate-800" href="#">Termos</a>
<a className="hover:text-slate-800" href="#">Privacidade</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
