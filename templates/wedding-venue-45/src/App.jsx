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
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
850: '#1c1917', // Custom dark
},
olive: {
50: '#f7fcf5',
100: '#ecf7e9',
200: '#d7ebd1',
500: '#5c8d48',
600: '#4d7a3b',
800: '#36512c', // Elegant deep green
900: '#1a2e16',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-stone-900/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 lg:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse z-50 group" href="#">
<span className="self-center text-lg md:text-xl font-serif font-medium whitespace-nowrap text-stone-100 tracking-tight uppercase group-hover:text-white transition-colors">Quinta da Capela</span>
</a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-stone-300 rounded-lg md:hidden hover:bg-stone-800 focus:outline-none transition-colors" id="mobile-menu-btn" type="button">
<span className="sr-only">Abrir menu</span>
<span className="iconify text-xl" data-icon="lucide:menu"></span>
</button>
<div className="hidden w-full md:block md:w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent text-sm">
<li><a className="block py-2 px-3 text-stone-300 rounded hover:text-white transition-colors" href="#inicio">Início</a></li>
<li><a className="block py-2 px-3 text-stone-300 rounded hover:text-white transition-colors" href="#sobre">Sobre</a></li>
<li><a className="block py-2 px-3 text-stone-300 rounded hover:text-white transition-colors" href="#espacos">Espaços &amp; Serviços</a></li>
<li><a className="block py-2 px-3 text-stone-300 rounded hover:text-white transition-colors" href="#galeria">Galeria</a></li>
<li><a className="block py-2 px-4 text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-all shadow-sm font-semibold tracking-tight ml-2" href="#contactos">Reservar</a></li>
</ul>
</div>
</div>

<div className="hidden absolute top-full left-0 w-full bg-stone-900 border-b border-stone-800 md:hidden p-4 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="mobile-link text-stone-300 hover:text-white block py-2 px-2 rounded hover:bg-stone-800 transition-colors" href="#inicio">Início</a>
<a className="mobile-link text-stone-300 hover:text-white block py-2 px-2 rounded hover:bg-stone-800 transition-colors" href="#sobre">Sobre</a>
<a className="mobile-link text-stone-300 hover:text-white block py-2 px-2 rounded hover:bg-stone-800 transition-colors" href="#espacos">Espaços</a>
<a className="mobile-link text-stone-300 hover:text-white block py-2 px-2 rounded hover:bg-stone-800 transition-colors" href="#galeria">Galeria</a>
<a className="mobile-link text-olive-400 font-medium block py-2 px-2 rounded hover:bg-stone-800 transition-colors" href="#contactos">Reservar Visita</a>
</div>
</nav>

<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden" id="inicio">

<div className="absolute inset-0 z-0">
<img alt="Jardim da Quinta da Capela preparado para casamento" className="w-full h-full object-cover animate-fade-in" src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 pt-20">
<div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/10 text-stone-200 text-xs font-medium tracking-wide uppercase backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-olive-500"></span>
                Campia, Vouzela
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.1]">
                O seu evento de sonho <br/> no coração da serra
            </h1>
<p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
                Quinta da Capela — Um refúgio de natureza, elegância e conforto para casamentos, celebrações e eventos inesquecíveis.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-all shadow-lg hover:scale-105" href="#contactos">
                    Agendar Visita
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white border border-white/20 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm" href="#espacos">
                    Ver Espaços
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col items-start space-y-3 group">
<div className="p-3 bg-olive-50 text-olive-800 border border-olive-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:users"></span>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 tracking-tight">Até 900 Convidados</h3>
<p className="text-sm text-stone-500 leading-relaxed">Capacidade flexível para grandes banquetes ou cerimónias íntimas.</p>
</div>
<div className="flex flex-col items-start space-y-3 group">
<div className="p-3 bg-olive-50 text-olive-800 border border-olive-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:bed-double"></span>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 tracking-tight">Alojamento</h3>
<p className="text-sm text-stone-500 leading-relaxed">Suite de noivos e quartos confortáveis com WC privativo.</p>
</div>
<div className="flex flex-col items-start space-y-3 group">
<div className="p-3 bg-olive-50 text-olive-800 border border-olive-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:utensils"></span>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 tracking-tight">Catering Próprio</h3>
<p className="text-sm text-stone-500 leading-relaxed">Cozinha regional e moderna com opções veganas e personalizadas.</p>
</div>
<div className="flex flex-col items-start space-y-3 group">
<div className="p-3 bg-olive-50 text-olive-800 border border-olive-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:trees"></span>
</div>
<h3 className="text-lg font-serif font-medium text-stone-900 tracking-tight">Ambiente Rural</h3>
<p className="text-sm text-stone-500 leading-relaxed">Jardins exuberantes e paisagem serena em Campia.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-stone-50 overflow-hidden" id="sobre">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-2xl">
<img alt="Detalhe de mesa de casamento na Quinta da Capela" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-olive-200/50 -z-10 rounded-full blur-3xl opacity-60"></div>
<div className="absolute -top-10 -left-10 w-40 h-40 bg-stone-200/50 -z-10 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="space-y-4">
<span className="text-olive-600 text-xs font-semibold tracking-wider uppercase">Nossa História &amp; Filosofia</span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
                            Momentos especiais transformados em memórias eternas.
                        </h2>
</div>
<div className="space-y-6 text-stone-600 font-light leading-relaxed">
<p>
                            Situada na pitoresca aldeia de Campia, em Vouzela, a <strong>Quinta da Capela</strong> combina o encanto rústico da região de Lafões com a sofisticação necessária para o evento moderno.
                        </p>
<p>
                            A nossa missão é simples: oferecer um refúgio de tranquilidade onde cada detalhe é pensado. Desde os jardins cuidados até aos salões de banquetes versáteis, tudo foi desenhado para acolher casamentos, batizados e eventos empresariais com distinção.
                        </p>
</div>
<div className="pt-6 border-t border-stone-200/60">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center shadow-sm flex-shrink-0">
<span className="iconify text-olive-600 w-5 h-5" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="text-stone-900 font-medium tracking-tight">Localização Privilegiada</h4>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">Acesso rápido via A25 (saída Caramulo / Oliveira de Frades).<br/>Largo do Relógio, 3670-056 Campia.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="espacos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">Espaços &amp; Eventos</h2>
<p className="text-stone-500 font-light">
                    Da cerimónia ao corte do bolo, oferecemos diversos cenários interiores e exteriores adaptáveis ao seu estilo e número de convidados.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-stone-200 transition-all duration-300 bg-stone-50/50 hover:bg-white">
<div className="aspect-video overflow-hidden">
<img alt="Cerimónia de casamento civil no jardim" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xl font-serif font-medium text-stone-900">Casamentos</h3>
<span className="iconify text-olive-600" data-icon="lucide:heart-handshake"></span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                            Cerimónias civis no jardim ou receções grandiosas no salão. Inclui suite para noivos, personalização de decoração e menus exclusivos.
                        </p>
<ul className="text-xs text-stone-400 space-y-2 pt-2">
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Bar aberto incluído</li>
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Menus personalizáveis</li>
</ul>
</div>
</div>

<div className="group border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-stone-200 transition-all duration-300 bg-stone-50/50 hover:bg-white">
<div className="aspect-video overflow-hidden">
<img alt="Festa de aniversário e banquete" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xl font-serif font-medium text-stone-900">Batizados &amp; Festas</h3>
<span className="iconify text-olive-600" data-icon="lucide:party-popper"></span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                            O espaço ideal para reunir a família. Zona infantil para as crianças, segurança e menus adaptados a todas as idades e restrições.
                        </p>
<ul className="text-xs text-stone-400 space-y-2 pt-2">
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Zona Infantil / Parque</li>
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Flexibilidade de horários</li>
</ul>
</div>
</div>

<div className="group border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-stone-200 transition-all duration-300 bg-stone-50/50 hover:bg-white">
<div className="aspect-video overflow-hidden">
<img alt="Evento corporativo e jantar de empresa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-xl font-serif font-medium text-stone-900">Eventos Corporativos</h3>
<span className="iconify text-olive-600" data-icon="lucide:briefcase"></span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
                            Jantares de empresa, lançamentos ou conferências. Espaços amplos, estacionamento privativo e acesso Wi-Fi.
                        </p>
<ul className="text-xs text-stone-400 space-y-2 pt-2">
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Estacionamento amplo</li>
<li className="flex items-center gap-2"><span className="iconify text-olive-500" data-icon="lucide:check"></span> Acessibilidade total</li>
</ul>
</div>
</div>
</div>

<div className="mt-16 grid md:grid-cols-2 gap-8 border-t border-stone-100 pt-16">
<div className="bg-olive-50 p-8 rounded-2xl border border-olive-100/50">
<h4 className="text-lg font-serif font-medium text-olive-900 mb-6">Serviços Incluídos &amp; Extras</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-olive-600" data-icon="lucide:utensils-crossed"></span>
<span>Catering flexível (Vegano/Celíaco)</span>
</div>
<div className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-olive-600" data-icon="lucide:music"></span>
<span>Pista de dança e acústica</span>
</div>
<div className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-olive-600" data-icon="lucide:camera"></span>
<span>Jardins para fotografia</span>
</div>
<div className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-olive-600" data-icon="lucide:home"></span>
<span>Alojamento no local</span>
</div>
</div>
</div>
<div className="flex flex-col justify-center items-start space-y-6 md:pl-8">
<h4 className="text-2xl font-serif font-medium text-stone-900 tracking-tight">Personalização Total</h4>
<p className="text-stone-500 font-light leading-relaxed">
                        Cada evento na Quinta da Capela é único. Trabalhamos com os melhores parceiros da região ou recebemos os seus fornecedores de eleição. O espaço também pode ser alugado sem catering.
                    </p>
<a className="text-olive-700 font-medium hover:text-olive-900 inline-flex items-center group transition-colors" href="#contactos">
                        Pedir orçamento personalizado
                        <span className="iconify ml-1 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="galeria">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="space-y-2">
<span className="text-olive-600 text-xs font-semibold tracking-wider uppercase">Portfolio</span>
<h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight">Galeria de Momentos</h2>
</div>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 flex items-center gap-2 transition-colors" href="https://www.instagram.com/" target="_blank">
<span className="iconify" data-icon="lucide:instagram"></span>
                    Siga-nos no Instagram
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">

<div className="col-span-1 row-span-2 md:col-span-1 md:row-span-2 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Noiva nos jardins da quinta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>

<div className="col-span-1 md:col-span-2 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Salão de banquetes decorado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>

<div className="col-span-1 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Serviço de catering e bebidas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>

<div className="col-span-1 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Detalhes florais do casamento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
</div>

<div className="col-span-2 md:col-span-2 rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Evento noturno com iluminação" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-800 tracking-wide border border-white/50">Festas ao entardecer</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-200">
<div className="max-w-4xl mx-auto px-4 text-center">
<span className="iconify w-12 h-12 text-olive-200 mx-auto mb-8" data-icon="lucide:quote"></span>
<p className="text-xl md:text-3xl font-serif text-stone-800 leading-relaxed italic tracking-tight">
                "Um lugar mágico. A equipa da Quinta da Capela foi incansável e a comida estava divinal. Os nossos convidados ficaram encantados com a beleza de Campia e o conforto dos quartos."
            </p>
<div className="mt-8">
<p className="font-medium text-stone-900 tracking-wide">Ana &amp; Pedro</p>
<p className="text-sm text-stone-500 font-light mt-1">Casamento, Setembro 2023</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 tracking-tight">Inspiração &amp; Dicas</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:border-olive-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider bg-olive-50 px-2 py-1 rounded-full">Dicas</span>
<span className="iconify text-stone-300 group-hover:text-olive-500 transition-colors" data-icon="lucide:arrow-up-right"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-olive-800 transition-colors">5 razões para casar no campo</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-3 leading-relaxed">Descubra porque é que a tranquilidade de Campia e o ar puro da Serra são o cenário perfeito para o "Sim".</p>
</article>
<article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:border-olive-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider bg-olive-50 px-2 py-1 rounded-full">Gastronomia</span>
<span className="iconify text-stone-300 group-hover:text-olive-500 transition-colors" data-icon="lucide:arrow-up-right"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-olive-800 transition-colors">Escolher o Menu Ideal</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-3 leading-relaxed">Da cozinha regional aos pratos gourmet: como agradar a todos os convidados, incluindo opções vegetarianas.</p>
</article>
<article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:border-olive-200 hover:shadow-md transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider bg-olive-50 px-2 py-1 rounded-full">Planeamento</span>
<span className="iconify text-stone-300 group-hover:text-olive-500 transition-colors" data-icon="lucide:arrow-up-right"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-olive-800 transition-colors">Alojamento para convidados</h3>
<p className="text-sm text-stone-500 mb-4 line-clamp-3 leading-relaxed">Receba a família de longe com conforto. Saiba como funcionam as nossas suites e quartos.</p>
</article>
</div>
</div>
</section>

<section className="relative bg-stone-900 text-stone-300 py-24 md:py-32" id="contactos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 lg:gap-24">

<div className="space-y-10">
<div className="space-y-4">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight leading-tight">Vamos planear o seu dia?</h2>
<p className="text-stone-400 font-light text-lg">Estamos prontos para tornar o seu evento realidade. Peça o seu orçamento ou agende uma visita sem compromisso.</p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-6 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-olive-500/50 transition-colors">
<span className="iconify w-6 h-6 text-olive-400" data-icon="lucide:map-pin"></span>
</div>
<div>
<h4 className="text-white font-medium text-lg">Morada</h4>
<p className="text-stone-400 mt-2 font-light">Largo do Relógio, 3670-056 Campia<br/>Vouzela, Distrito de Viseu, Portugal</p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-olive-500/50 transition-colors">
<span className="iconify w-6 h-6 text-olive-400" data-icon="lucide:phone"></span>
</div>
<div>
<h4 className="text-white font-medium text-lg">Telefones</h4>
<p className="text-stone-400 mt-2 hover:text-white transition-colors"><a href="tel:+351232752107">232 752 107</a></p>
<p className="text-stone-400 mt-1 hover:text-white transition-colors"><a href="tel:+351964374470">964 374 470</a></p>
</div>
</div>
<div className="flex items-start gap-6 group">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-olive-500/50 transition-colors">
<span className="iconify w-6 h-6 text-olive-400" data-icon="lucide:clock"></span>
</div>
<div>
<h4 className="text-white font-medium text-lg">Horário de Visitas</h4>
<p className="text-stone-400 mt-2 font-light">Por marcação prévia.<br/>Flexibilidade de horários, incluindo fins de semana.</p>
</div>
</div>
</div>

<div className="w-full h-48 rounded-2xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12053.48662998822!2d-8.2185!3d40.6855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd236965112e4c9f%3A0x400ebbde49036c0!2sCampia%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1698765432100!5m2!1spt-PT!2spt" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<form className="bg-stone-850 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="nome">Nome</label>
<input className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 transition-all outline-none placeholder-stone-700" id="nome" placeholder="Seu nome" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="telefone">Telefone</label>
<input className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 transition-all outline-none placeholder-stone-700" id="telefone" placeholder="9xx xxx xxx" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 transition-all outline-none placeholder-stone-700" id="email" placeholder="nome@exemplo.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="tipo">Tipo de Evento</label>
<div className="relative">
<select className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 appearance-none transition-all outline-none cursor-pointer" id="tipo">
<option>Casamento</option>
<option>Batizado</option>
<option>Evento Empresarial</option>
<option>Festa Privada</option>
<option>Outro</option>
</select>
<span className="iconify absolute right-3 top-3.5 text-stone-600 pointer-events-none" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="convidados">Nº Convidados</label>
<input className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 transition-all outline-none placeholder-stone-700" id="convidados" placeholder="Ex: 150" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wider" htmlFor="mensagem">Mensagem</label>
<textarea className="w-full bg-stone-900 border border-stone-800 text-white text-sm rounded-lg focus:ring-2 focus:ring-olive-500/50 focus:border-olive-500 block p-3 transition-all outline-none placeholder-stone-700" id="mensagem" placeholder="Conte-nos um pouco sobre o seu evento..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-0.5" id="terms" type="checkbox"/>
<label className="text-xs text-stone-500 cursor-pointer select-none leading-relaxed" htmlFor="terms">Concordo com o processamento dos meus dados para efeitos de contacto e pedido de orçamento.</label>
</div>
<button className="w-full text-stone-900 bg-white hover:bg-stone-200 focus:ring-4 focus:ring-stone-500/20 font-semibold rounded-xl text-sm px-5 py-4 text-center transition-all shadow-lg mt-2" type="submit">
                    Solicitar Orçamento Grátis
                </button>
</form>
</div>
</section>

<footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
<span className="text-stone-600">© 2023 Quinta da Capela.</span>
<a className="hover:text-stone-300 transition-colors" href="#">Política de Privacidade</a>
<a className="hover:text-stone-300 transition-colors" href="#">Termos de Uso</a>
</div>
<div className="flex gap-6">
<a className="text-stone-600 hover:text-white transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook"></span>
<span className="sr-only">Facebook</span>
</a>
<a className="text-stone-600 hover:text-white transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram"></span>
<span className="sr-only">Instagram</span>
</a>
</div>
</div>
</footer>



    </>
  );
}
