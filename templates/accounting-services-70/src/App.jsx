import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        let menuOpen = false;

        menuToggle.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                menuToggle.innerHTML = '<i data-lucide="x" class="w-7 h-7"></i>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                menuToggle.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
                document.body.style.overflow = '';
            }
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                menuToggle.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
                document.body.style.overflow = '';
                menuOpen = false;
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            });
        });

        // Tabs Toggle Function
        function switchTab(tabId) {
            document.querySelectorAll('.process-tab').forEach(el => el.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-[#b89818]', 'text-white');
                btn.classList.add('bg-white', 'text-gray-600');
            });
            
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.remove('bg-white', 'text-gray-600');
            activeBtn.classList.add('bg-[#b89818]', 'text-white');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">

<a className="flex items-center z-50" href="#">
<img alt="Hórus Gestão Financeira e Contábil" className="h-10 md:h-12 w-auto object-contain" src="logo.png"/>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#inicio">Início</a>
<a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#servicos">Serviços</a>
<a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#sobre">Sobre</a>
<a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#depoimentos">Depoimentos</a>
</div>

<div className="flex items-center space-x-4 z-50">
<a className="hidden md:inline-flex bg-[#b89818] text-white rounded-full px-6 py-2.5 font-normal text-base hover:bg-[#9a7f14] transition-colors shadow-sm" href="#contato">
                    Quero conhecer a Hórus
                </a>
<button className="md:hidden text-gray-900 focus:outline-none flex items-center justify-center p-2" id="menu-toggle">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 h-screen transition-transform duration-500 translate-x-full" id="mobile-menu">
<a className="text-3xl tracking-tight font-normal text-gray-900" href="#inicio">Início</a>
<a className="text-3xl tracking-tight font-normal text-gray-900" href="#servicos">Serviços</a>
<a className="text-3xl tracking-tight font-normal text-gray-900" href="#sobre">Sobre</a>
<a className="text-3xl tracking-tight font-normal text-gray-900" href="#depoimentos">Depoimentos</a>
<a className="bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-lg mt-4 shadow-sm hover:bg-[#9a7f14]" href="#contato">Quero conhecer a Hórus</a>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#f3f4f6] min-h-screen flex items-center overflow-hidden" id="inicio">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-16 xl:gap-24 items-center">

<div className="flex flex-col relative z-10">

<div className="border-b border-gray-200 pb-4 mb-10">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block">Precisa abrir sua empresa ou quer uma contabilidade realmente melhor?</span>
</div>

<h1 className="text-5xl lg:text-6xl tracking-tight font-normal text-gray-900 leading-[1.05] mb-8">
                    A Contabilidade Da Hórus Resolve Em Minutos O Que Outros Escritórios Pedem Semanas Para Entregar A Solução
                </h1>

<p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-12 font-light">
                    Abertura de CNPJ, contabilidade mensal, certificado digital na hora e suporte humano que atende quando você precisa. Em todo o Brasil.
                </p>

<div className="flex flex-col gap-3">
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-base hover:bg-[#9a7f14] transition-all w-full sm:w-auto shadow-sm" href="#contato">
                            Quero abrir minha empresa
                        </a>
<a className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-normal text-base hover:bg-gray-50 transition-all w-full sm:w-auto shadow-sm" href="#contato">
                            Quero uma contabilidade melhor
                        </a>
</div>
<p className="text-sm font-normal text-gray-400 mt-2">Atendimento humano. Sem robô. Sem fila.</p>
</div>
</div>

<div className="relative w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="relative bg-black rounded-[2rem] aspect-[3/4] md:aspect-[4/5] overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
<div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
<div>
<h3 className="text-white text-2xl tracking-tight font-normal">Contabilidade</h3>
<p className="text-gray-400 text-lg mt-1 font-light">Mensal &amp; Gestão</p>
</div>
<div className="flex items-end justify-between">
<h4 className="text-white text-3xl tracking-tight font-normal leading-tight max-w-[200px]">Suporte Rápido e Ativo</h4>
</div>
</div>
</div>

<div className="relative bg-black rounded-[2rem] aspect-[3/4] md:aspect-[4/5] overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
<div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
<div>
<h3 className="text-white text-2xl tracking-tight font-normal">Abertura de Empresa</h3>
<p className="text-gray-400 text-lg mt-1 font-light">CNPJ e Certificado</p>
</div>
<div className="flex flex-col justify-end">
<div className="flex items-end justify-between mb-4">
<h4 className="text-white text-3xl tracking-tight font-normal leading-tight max-w-[200px]">Sem Burocracia</h4>
</div>
<p className="text-gray-400 text-lg leading-relaxed max-w-[240px] font-light">Certificado digital na hora e tudo regularizado sem dores de cabeça.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-gray-900 border-t border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="mb-20 text-left max-w-3xl">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block mb-6">Especialistas em contabilidade para empresas de serviço</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-8">
                    Empresas em todo o Brasil já confiam na Hórus para cuidar da contabilidade
                </h2>
<p className="text-xl text-gray-500 font-light leading-relaxed">
                    Atendemos clientes em diferentes segmentos e profissionais que precisam de agilidade, segurança e suporte real.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Médicos</h3>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Advogados</h3>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Arquitetos</h3>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="ruler"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Engenheiros</h3>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="code"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Desenvolvedores</h3>
</div>
<div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex items-center gap-6 hover:bg-gray-100 transition-colors">
<div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#b89818] shadow-sm border border-gray-100">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="font-normal text-2xl tracking-tight">Prestadores de Serviço</h3>
</div>
</div>
<p className="text-xl text-gray-500 font-normal text-center">Empresas que precisam que a contabilidade funcione e não atrapalhe.</p>
</div>
</section>

<section className="py-24 bg-[#f3f4f6]">
<div className="max-w-[1000px] mx-auto px-6 lg:px-12">
<div className="flex items-center justify-center mb-16">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest">Problema + Segmentação</span>
</div>

<div className="bg-white border border-gray-100 p-10 md:p-14 rounded-[2rem] shadow-sm mb-16 text-center">
<h3 className="text-2xl md:text-3xl text-gray-900 leading-snug tracking-tight font-normal">
                    "Eu pago todo mês, mas na hora que preciso, parece que estou pedindo um favor."
                </h3>
</div>
<div className="text-xl text-gray-500 space-y-6 text-center mb-16 font-light">
<p>Se você ainda não tem uma empresa, a frase acima é a realidade hoje no mercado de contabilidade. Pergunte a qualquer PJ, ele irá confirmar. Todos os dias, as pessoas chegam até a Hórus com os seguintes problemas:</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<h4 className="font-normal text-2xl tracking-tight text-gray-900 mb-4">"Quero abrir empresa, mas cada site fala uma coisa diferente..."</h4>
<p className="text-gray-500 text-xl leading-relaxed font-light">Um desenvolvedor recebeu proposta de R$12 mil/mês como PJ. Não tinha CNPJ. Enquanto pesquisava como abrir, a empresa contratou outro. Perdeu R$72 mil no ano. Não por incompetência. Por burocracia.</p>
</div>
<div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<h4 className="font-normal text-2xl tracking-tight text-gray-900 mb-4">"Ligo para o meu contador e ninguém atende..."</h4>
<p className="text-gray-500 text-xl leading-relaxed font-light">Um médico faturou R$40 mil em plantões. O banco pediu demonstrações financeiras. O escritório demorou. Não por mal, mas por lentidão. O dinheiro ficou travado por semanas.</p>
</div>
<div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<h4 className="font-normal text-2xl tracking-tight text-gray-900 mb-4">"Abri meu CNPJ sozinho..."</h4>
<p className="text-gray-500 text-xl leading-relaxed font-light">Uma fisioterapeuta abriu um MEI seguindo tutorial do YouTube. Escolheu o CNAE errado. Seis meses depois: notificação, multa, retroativo. Ela achava que estava tudo certo.</p>
</div>
<div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<h4 className="font-normal text-2xl tracking-tight text-gray-900 mb-4">"Meu contador erra, atrasa, e quem paga a multa sou eu..."</h4>
<p className="text-gray-500 text-xl leading-relaxed font-light">Um empresário precisava de crédito para expandir. O banco pediu balanço. O contador entregou tarde demais. Os documentos venceram. O crédito foi negado. O crescimento parou.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 text-center max-w-4xl mx-auto mb-20 leading-tight">
                Do primeiro CNPJ à contabilidade completa: a Hórus cuida de tudo
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#f3f4f6] p-12 lg:p-16 rounded-[2.5rem] flex flex-col h-full">
<h3 className="text-3xl tracking-tight text-gray-900 mb-6 font-normal">Quer abrir seu CNPJ?</h3>
<p className="text-gray-500 text-xl mb-12 flex-grow font-light leading-relaxed">
                        Você não precisa entender de contabilidade. A gente escolhe o tipo certo de empresa para o seu perfil, abre tudo, emite seu certificado digital na hora e te acompanha desde o dia 1. Você foca no que sabe fazer a parte chata é com a gente.
                    </p>
<a className="inline-flex items-center justify-center bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-lg hover:bg-[#9a7f14] transition-colors w-max shadow-sm" href="#contato">
                        Quero abrir minha empresa <i className="ml-3 w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-[#f3f4f6] p-12 lg:p-16 rounded-[2.5rem] flex flex-col h-full">
<h3 className="text-3xl tracking-tight text-gray-900 mb-6 font-normal">Sente que merece uma contabilidade melhor?</h3>
<p className="text-gray-500 text-xl mb-12 flex-grow font-light leading-relaxed">
                        Se você já tem empresa: A gente cuida de todo o processo. Entra em contato com o escritório anterior, pede os documentos, assume a responsabilidade. Seu calendário fica organizado e, quando você liga, alguém atende.
                    </p>
<a className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-normal text-lg hover:bg-gray-50 transition-colors w-max shadow-sm" href="#contato">
                        Quero conhecer a Hórus <i className="ml-3 w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div>
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block mb-6">Nossa Filosofia</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-[1.1] mb-8">
                        O que a Hórus faz não é extraordinário. É o que toda contabilidade deveria fazer.
                    </h2>
<p className="text-xl text-gray-500 leading-relaxed font-light mb-8">
                        A Hórus nasceu para ser a contabilidade que a gente gostaria que existisse quando precisou: rápida, presente e humana. A verdade é que não fazemos nada de outro mundo, mas no mercado atual, isso virou exceção.
                    </p>
<div className="mt-8 space-y-6">
<div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
<h4 className="font-normal text-xl tracking-tight text-gray-900 mb-2">Se está abrindo empresa:</h4>
<p className="text-gray-500 text-lg font-light">A gente cuida de tipo de empresa, regime tributário, CNPJ e certificado digital. Você não precisa entender nada.</p>
</div>
<div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
<h4 className="font-normal text-xl tracking-tight text-gray-900 mb-2">Se já tem empresa:</h4>
<p className="text-gray-500 text-lg font-light">A gente cuida de toda a transição. Entra em contato com o escritório anterior, pede os documentos e assume a responsabilidade. Totalmente seguro.</p>
</div>
</div>
</div>

<div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100">
<ul className="space-y-6">
<li className="flex items-start gap-4 pb-6 border-b border-gray-200">
<i className="text-[#b89818] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<span className="text-xl font-normal text-gray-900">A gente atende o telefone.</span>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-gray-200">
<i className="text-[#b89818] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<span className="text-xl font-normal text-gray-900">Entrega seu documento rápido.</span>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-gray-200">
<i className="text-[#b89818] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<span className="text-xl font-normal text-gray-900">Avisa quando muda a lei.</span>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-gray-200">
<i className="text-[#b89818] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<span className="text-xl font-normal text-gray-900">Explica as coisas com paciência.</span>
</li>
<li className="flex items-start gap-4">
<i className="text-[#b89818] w-6 h-6 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<span className="text-xl font-normal text-gray-900">Trata cada cliente como gente, não como número.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f3f4f6]">
<div className="max-w-[1000px] mx-auto px-6 lg:px-12">
<div className="flex flex-col mb-20 text-center items-center">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block mb-6">Diferenciais</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-tight max-w-3xl">
                    O que você vai encontrar na Hórus e não encontra em nenhuma outra contabilidade
                </h2>
</div>
<div className="space-y-8">

<div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-sm">
<span className="absolute top-8 right-12 text-7xl font-extralight text-[#b89818]/10 tracking-tighter select-none">01</span>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4 relative z-10">App próprio com tudo na sua mão</h3>
<p className="text-xl text-gray-500 mb-0 relative z-10 max-w-xl font-light leading-relaxed">
                        Documentos, guias, boletos abre, baixa, copia o código e paga. Está no banco e o gerente pediu algo? Abre o app e mostra na tela. Sem ligar para ninguém. Na transição, a gente organiza tudo no app. Totalmente seguro.
                    </p>
</div>

<div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-sm">
<span className="absolute top-8 right-12 text-7xl font-extralight text-[#b89818]/10 tracking-tighter select-none">02</span>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4 relative z-10">Certificado digital em 5 minutos</h3>
<p className="text-xl text-gray-500 mb-0 relative z-10 max-w-xl font-light leading-relaxed">
                        Todo mundo demora de 7 a 15 dias. A gente emite na hora. Certificadora reconhecida no Brasil inteiro. "Meu certificado está com o escritório anterior". A gente resolve. Emitimos um novo em 5 minutos.
                    </p>
</div>

<div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-sm">
<span className="absolute top-8 right-12 text-7xl font-extralight text-[#b89818]/10 tracking-tighter select-none">03</span>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4 relative z-10">Suporte humano de verdade</h3>
<p className="text-xl text-gray-500 mb-0 relative z-10 max-w-xl font-light leading-relaxed">
                        Mais de 10 profissionais dedicados. Você liga, alguém atende. Manda mensagem, alguém responde. Aqui você não é o cliente 501. Tem um nome. Toda pergunta é bem-vinda.
                    </p>
</div>

<div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-sm">
<span className="absolute top-8 right-12 text-7xl font-extralight text-[#b89818]/10 tracking-tighter select-none">04</span>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4 relative z-10">Velocidade que o mercado não acompanha</h3>
<p className="text-xl text-gray-500 mb-0 relative z-10 max-w-xl font-light leading-relaxed">
                        Demonstração financeira para o banco? 5 minutos. Certidão? Minutos. Guia do mês? No app. Enquanto seu contador atual lê seu e-mail, a gente já resolveu. Assumimos a transição sem deixar buracos.
                    </p>
</div>

<div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-sm">
<span className="absolute top-8 right-12 text-7xl font-extralight text-[#b89818]/10 tracking-tighter select-none">05</span>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4 relative z-10">Você nunca é pego de surpresa</h3>
<p className="text-xl text-gray-500 mb-0 relative z-10 max-w-xl font-light leading-relaxed">
                        Mudou a lei? Disparo automático para todos os clientes. Calendário no app com cada prazo e cada guia. Nunca mais multa por esquecimento. Nunca mais "eu não sabia."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block mb-6">Passo a Passo</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-tight max-w-3xl mx-auto">
                    O processo simples para abrir sua empresa ou trocar de contabilidade
                </h2>
</div>

<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 max-w-xl mx-auto">
<button className="tab-btn flex-1 bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-lg transition-colors shadow-sm" id="btn-tab-abrir" onclick="switchTab('tab-abrir')">
                    Abrir empresa
                </button>
<button className="tab-btn flex-1 bg-white border border-gray-200 text-gray-600 rounded-full px-8 py-4 font-normal text-lg transition-colors hover:bg-gray-50" id="btn-tab-trocar" onclick="switchTab('tab-trocar')">
                    Quero uma contabilidade melhor
                </button>
</div>

<div className="process-tab grid grid-cols-1 md:grid-cols-3 gap-12 relative" id="tab-abrir">
<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-gray-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center text-2xl font-light text-gray-900 mb-8 shadow-sm">1</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Fala com a gente</h3>
<p className="text-gray-500 text-xl font-light">Entendemos seu perfil em 5 minutos.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center text-2xl font-light text-gray-900 mb-8 shadow-sm">2</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">A gente cuida de tudo</h3>
<p className="text-gray-500 text-xl font-light px-4">CNPJ, registro, certificado digital, regime tributário.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#b89818] rounded-full flex items-center justify-center text-2xl font-light text-white mb-8 shadow-sm">3</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Empresa nasce organizada</h3>
<p className="text-gray-500 text-xl font-light">App funcionando, suporte ativo, calendário em dia.</p>
</div>
</div>

<div className="process-tab hidden grid grid-cols-1 md:grid-cols-3 gap-12 relative" id="tab-trocar">
<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-gray-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center text-2xl font-light text-gray-900 mb-8 shadow-sm">1</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Fala com a gente</h3>
<p className="text-gray-500 text-xl font-light">Entendemos sua situação e o que te incomoda hoje.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center text-2xl font-light text-gray-900 mb-8 shadow-sm">2</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Toda a transição</h3>
<p className="text-gray-500 text-xl font-light px-4">Contatamos o escritório anterior, pegamos a documentação, assumimos a responsabilidade.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-[#b89818] rounded-full flex items-center justify-center text-2xl font-light text-white mb-8 shadow-sm">3</div>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Sente a diferença</h3>
<p className="text-gray-500 text-xl font-light">App pronto, documentos seguros, suporte que responde, velocidade real.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 mt-20">
<a className="inline-flex items-center justify-center bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-lg hover:bg-[#9a7f14] transition-colors shadow-sm" href="#contato">
                    Quero abrir minha empresa
                </a>
<a className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 rounded-full px-8 py-4 font-normal text-lg hover:bg-gray-50 transition-colors shadow-sm" href="#contato">
                    Quero conhecer a Hórus
                </a>
</div>
</div>
</section>

<section className="py-32 bg-[#f3f4f6]" id="servicos">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
<div className="lg:w-2/3">
<span className="text-sm font-normal text-[#b89818] uppercase tracking-widest block mb-6">Nossos Serviços</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-[1.1] mb-8">
                        Tudo Que Sua Empresa Precisa Para Funcionar. Num Lugar Só.
                    </h2>
<p className="text-xl text-gray-500 font-light leading-relaxed">
                        A Hórus foi criada para empresas e profissionais que precisam de agilidade, organização e suporte real.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="building-2"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Abertura de empresa</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">Do zero ao CNPJ pronto. Regime certo. Certificado digital na hora. Você não entende de contabilidade — e não precisa.</p>
</div>
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="file-text"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Contabilidade mensal</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">Escrituração, guias, obrigações, relatórios. Tudo no app, em tempo real, com suporte que responde no mesmo dia.</p>
</div>
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="shield-check"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Certificado digital</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">5 minutos. Não 15 dias. Brasil inteiro. Você sai com ele pronto para assinar documentos e emitir notas.</p>
</div>
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="wallet"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">BPO Financeiro</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">Fluxo de caixa, contas a pagar e receber, conciliação bancária. A gente organiza. Você empreende.</p>
</div>
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="lock"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Holding e blindagem</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">Proteção do que você construiu. Transferência de bens com segurança jurídica e estruturação patrimonial.</p>
</div>
<div className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-md transition-shadow">
<i className="w-10 h-10 text-[#b89818] mb-8" data-lucide="home"></i>
<h3 className="text-2xl tracking-tight font-normal text-gray-900 mb-4">Empreendimentos imobiliários</h3>
<p className="text-lg text-gray-500 leading-relaxed font-light">Assessoria jurídica, financeira e contábil completa especializada para o seu projeto decolar com segurança.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="depoimentos">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 leading-tight max-w-3xl mx-auto">
                    Eles Poderiam Ter Escolhido Qualquer Contabilidade. Escolheram A Hórus.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-gray-50 rounded-[2rem] p-10 md:p-12 relative border border-gray-100">
<i className="w-10 h-10 text-[#b89818]/30 mb-8" data-lucide="quote"></i>
<p className="text-2xl text-gray-900 mb-10 leading-relaxed font-normal tracking-tight">
                        "Organizei minha operação em menos de uma semana. O acesso foi liberado na hora. Nunca vi nada igual no mercado."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#b89818] flex items-center justify-center text-white font-normal text-xl">C</div>
<div>
<h4 className="font-normal text-lg text-gray-900">Carlos M.</h4>
<span className="text-base text-gray-500 font-light">Fundador</span>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-[2rem] p-10 md:p-12 relative border border-gray-100">
<i className="w-10 h-10 text-[#b89818]/30 mb-8" data-lucide="quote"></i>
<p className="text-2xl text-gray-900 mb-10 leading-relaxed font-normal tracking-tight">
                        "Mudei depois de anos sofrendo com lentidão. Eles cuidaram de tudo sem eu precisar me estressar."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#b89818] flex items-center justify-center text-white font-normal text-xl">A</div>
<div>
<h4 className="font-normal text-lg text-gray-900">Ana L.</h4>
<span className="text-base text-gray-500 font-light">Diretora Operacional</span>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-[2rem] p-10 md:p-12 relative border border-gray-100">
<i className="w-10 h-10 text-[#b89818]/30 mb-8" data-lucide="quote"></i>
<p className="text-2xl text-gray-900 mb-10 leading-relaxed font-normal tracking-tight">
                        "O sistema é incrível. Consigo ter visibilidade total em segundos. Meu time ficou impressionado com a agilidade."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#b89818] flex items-center justify-center text-white font-normal text-xl">R</div>
<div>
<h4 className="font-normal text-lg text-gray-900">Rafael T.</h4>
<span className="text-base text-gray-500 font-light">Tech Lead</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111827]" id="contato">
<div className="max-w-[900px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
<h2 className="text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.05] mb-12">
                A Contabilidade Que Você Queria Ter Desde O Primeiro Dia Está A Uma Conversa De Distância
            </h2>
<div className="mb-12 text-left">
<p className="text-xl text-gray-300 mb-6 font-normal text-center">Em 5 minutos de conversa você pode descobrir:</p>
<ul className="flex flex-col gap-4 mx-auto w-max">
<li className="flex items-center gap-3 text-white text-xl font-light"><i className="w-6 h-6 text-[#b89818]" data-lucide="check-circle"></i> Se seu tipo de empresa está correto</li>
<li className="flex items-center gap-3 text-white text-xl font-light"><i className="w-6 h-6 text-[#b89818]" data-lucide="check-circle"></i> Se está pagando mais imposto do que deveria</li>
<li className="flex items-center gap-3 text-white text-xl font-light"><i className="w-6 h-6 text-[#b89818]" data-lucide="check-circle"></i> Se existe forma mais simples de organizar sua contabilidade</li>
</ul>
</div>
<p className="text-lg text-gray-400 font-light mb-8">
                5 minutos de conversa. Sem enrolação. Sem compromisso.
            </p>
<div className="flex flex-col sm:flex-row justify-center w-full gap-4">
<a className="inline-flex items-center justify-center bg-[#b89818] text-white rounded-full px-8 py-4 font-normal text-lg hover:bg-[#9a7f14] transition-colors w-full sm:w-auto shadow-sm" href="#">
                    Quero abrir minha empresa
                </a>
<a className="inline-flex items-center justify-center border border-gray-600 text-white rounded-full px-8 py-4 font-normal text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto" href="#">
                    Quero conhecer a Hórus
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

<div className="flex flex-col">
<div className="flex flex-col mb-8">
<img alt="Hórus Gestão Financeira e Contábil" className="h-10 w-auto object-contain self-start" src="logo.png"/>
</div>
<p className="text-lg text-gray-500 leading-relaxed font-light mb-8">
                        Rua Monsenhor Leite, 200 - Sala 03<br/>
                        Centro, Boa Esperança - MG<br/>
<span className="text-gray-900 mt-2 block font-normal">Atendimento no Brasil inteiro</span>
</p>
<div className="flex items-center gap-6">
<a className="text-[#b89818] hover:text-[#9a7f14] transition-colors" href="#"><i className="w-6 h-6" data-lucide="phone"></i></a>
<a className="text-[#b89818] hover:text-[#9a7f14] transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="text-[#b89818] hover:text-[#9a7f14] transition-colors" href="#"><i className="w-6 h-6" data-lucide="mail"></i></a>
</div>
</div>

<div className="flex flex-col">
<h4 className="text-base font-normal text-gray-900 mb-6 tracking-tight">Institucional</h4>
<ul className="space-y-4">
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#inicio">Início</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Quem somos</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Parceiros</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#depoimentos">Depoimentos</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#contato">Contato</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-base font-normal text-gray-900 mb-6 tracking-tight">Soluções</h4>
<ul className="space-y-4">
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#servicos">Nossos serviços</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Gestão financeira</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Gestão contábil</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Área VIP</a></li>
<li><a className="text-lg font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">Portal do cliente</a></li>
</ul>
</div>

<div className="flex flex-col">
<h4 className="text-base font-normal text-gray-900 mb-6 tracking-tight">Fale Conosco</h4>
<ul className="space-y-4 mb-8">
<li className="text-lg font-light text-gray-500">(00) 0000-0000</li>
<li className="text-lg font-light text-gray-500">contato@horus.com.br</li>
</ul>
<a className="inline-block border border-[#b89818] text-[#b89818] px-6 py-3 rounded-full text-lg font-normal hover:bg-[#fbf9f1] transition-colors text-center w-max" href="#contato">Falar com especialista</a>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-base font-light text-gray-500">
                    © 2025 Hórus. Todos os direitos reservados.
                </p>
</div>
</div>
</footer>



    </>
  );
}
