import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
            });
            // Reset all buttons
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('border-black', 'text-black', 'active');
                el.classList.add('border-transparent', 'text-zinc-500');
            });
            
            // Show target content
            document.getElementById(tabId).classList.remove('hidden');
            // Activate target button
            const btn = document.getElementById('btn-' + tabId);
            btn.classList.remove('border-transparent', 'text-zinc-500');
            btn.classList.add('border-black', 'text-black', 'active');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="text-xl font-semibold tracking-tighter uppercase text-black">HÓRUS</div>
<a className="text-sm font-medium text-zinc-500 hover:text-black transition-colors" href="#contato">Fale conosco</a>
</div>
</nav>

<header className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center">
<span className="text-[#b89818] text-xs font-semibold uppercase tracking-widest mb-6 block bg-[#b89818]/10 px-3 py-1 rounded-full">
            Precisa abrir sua empresa ou quer uma contabilidade realmente melhor?
        </span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-black leading-[1.1] mb-6">
            A Contabilidade Da Hórus Resolve Em Minutos O Que Outros Escritórios Pedem Semanas Para Entregar
        </h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl font-normal leading-relaxed">
            Abertura de CNPJ, contabilidade mensal, certificado digital na hora e suporte humano que atende quando você precisa. Em todo o Brasil.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 w-full sm:w-auto">
<a className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto" href="#abrir">
                Quero abrir minha empresa
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white text-black border border-zinc-200 px-8 py-3.5 rounded-full text-sm font-medium hover:border-black hover:bg-zinc-50 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm" href="#trocar">
                Quero uma contabilidade melhor
            </a>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium bg-zinc-50 px-4 py-2 rounded-full border border-zinc-100">
<iconify-icon className="text-[#b89818] text-base" icon="solar:user-check-linear"></iconify-icon>
            Atendimento humano. Sem robô. Sem fila.
        </div>
</header>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mb-4">Confiança a nível nacional</p>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black mb-4">Empresas em todo o Brasil já confiam na Hórus para cuidar da contabilidade</h2>
<p className="text-sm md:text-base text-zinc-500">Especialistas em contabilidade para empresas de serviço e profissionais que precisam de agilidade, segurança e suporte real.</p>
</div>

<div className="flex flex-wrap justify-center gap-8 mb-12 opacity-40 grayscale">
<iconify-icon className="text-4xl text-zinc-800" icon="solar:buildings-linear"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-800" icon="solar:shop-linear"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-800" icon="solar:city-linear"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-800" icon="solar:hospital-linear"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-800" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div className="text-center mb-8 text-sm text-zinc-400 font-medium">Atendemos clientes em diferentes segmentos:</div>
<div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:stethoscope-linear"></iconify-icon> Médicos</span>
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:scale-linear"></iconify-icon> Advogados</span>
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> Arquitetos</span>
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:helmet-linear"></iconify-icon> Engenheiros</span>
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:code-linear"></iconify-icon> Desenvolvedores</span>
<span className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-xs text-zinc-700 font-medium shadow-sm flex items-center gap-2"><iconify-icon icon="solar:briefcase-linear"></iconify-icon> Prestadores de serviço</span>
</div>
<p className="text-center mt-12 text-sm md:text-base font-medium text-black">Empresas que precisam que a contabilidade funcione e não atrapalhe.</p>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6 leading-tight">"Eu pago todo mês, mas na hora que preciso, parece que estou pedindo um favor."</h2>
<p className="text-zinc-500 text-base md:text-lg mb-4">Se você ainda não tem uma empresa, a frase acima é a realidade hoje no mercado de contabilidade. Pergunte a qualquer PJ, ele irá confirmar.</p>
<p className="text-sm text-zinc-400 font-medium">Todos os dias, as pessoas chegam até a Hórus com os seguintes problemas:</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:danger-circle-linear"></iconify-icon>
<h3 className="text-sm font-semibold mb-3 tracking-tight">“A gente aceita de contador o que não aceitaria de nenhum outro profissional.”</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Você paga um contador todo mês, sem falta e quando precisa de um documento, espera 15 dias. Quando liga, ninguém atende. Quando finalmente atendem, pedem mais prazo. Quando entregam, cometem erros.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:magnifer-bug-linear"></iconify-icon>
<h3 className="text-sm font-semibold mb-3 tracking-tight">"Quero abrir empresa, mas cada site fala uma coisa diferente. Tenho medo de escolher errado."</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Um desenvolvedor recebeu proposta de R$12 mil/mês como PJ. Não tinha CNPJ. Enquanto pesquisava como abrir, a empresa contratou outro. Perdeu R$72 mil no ano. Não por incompetência. Por burocracia.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-sm font-semibold mb-3 tracking-tight">"Ligo para o meu contador e ninguém atende. Quando atende, não resolve."</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Um médico faturou R$40 mil. O banco pediu demonstrações financeiras. O escritório demorou. O dinheiro ficou travado por semanas. Não era um contador ruim. Era um contador que não era rápido o suficiente.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:document-medicine-linear"></iconify-icon>
<h3 className="text-sm font-semibold mb-3 tracking-tight">"Abri meu CNPJ sozinho. Torço para estar tudo certo."</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Uma fisioterapeuta abriu um MEI seguindo tutorial do YouTube. Escolheu o CNAE errado. Seis meses depois: notificação, multa, retroativo. Ela achava que estava tudo certo.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:graph-down-linear"></iconify-icon>
<h3 className="text-sm font-semibold mb-3 tracking-tight">“Meu contador erra, atrasa, e quem paga a multa sou eu. Quero algo melhor."</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Um empresário precisava de crédito para expandir. O banco pediu balanço. O contador entregou tarde demais. Os documentos venceram. O crédito foi negado. O crescimento parou.</p>
</div>
</div>
</section>

<section className="py-24 bg-black text-white" id="abrir">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Do primeiro CNPJ à contabilidade completa:<br/><span className="text-[#b89818]">a Hórus cuida de tudo</span></h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 md:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
<div className="bg-[#b89818]/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#b89818]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Quer abrir seu CNPJ?</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                        Você não precisa entender de contabilidade. A gente escolhe o tipo certo de empresa para o seu perfil, abre tudo, emite seu certificado digital na hora e te acompanha desde o dia 1. Você foca no que sabe fazer a parte chata é com a gente.
                    </p>
<a className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-between group" href="#">
                        Quero abrir minha empresa
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="p-8 md:p-10 rounded-3xl border border-zinc-800 flex flex-col h-full relative overflow-hidden" id="trocar">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-transparent z-0"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Sente que merece uma contabilidade melhor?</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                            Se você já tem empresa: A gente cuida de todo o processo. Entra em contato com o escritório anterior, pede os documentos, assume a responsabilidade. Seus documentos ficarão disponíveis no app, totalmente seguros. Seu calendário de obrigações fica organizado.
                        </p>
<a className="border border-zinc-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center justify-between group" href="#">
                            Quero conhecer a Hórus
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 text-center border-b border-zinc-100">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-6">O que a Hórus faz não é extraordinário. <br className="hidden md:block text-zinc-400"/> É o que toda contabilidade deveria fazer.</h2>
<p className="text-base text-zinc-500 mb-10 leading-relaxed">
            A Hórus nasceu para ser a contabilidade que a gente gostaria que existisse quando precisou: rápida, presente e humana. A verdade é que não fazemos nada de outro mundo.
        </p>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-left max-w-3xl mx-auto mb-16">
<div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
<iconify-icon className="text-[#b89818] text-lg" icon="solar:check-circle-linear"></iconify-icon> A gente atende o telefone.
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
<iconify-icon className="text-[#b89818] text-lg" icon="solar:check-circle-linear"></iconify-icon> Entrega documento rápido.
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
<iconify-icon className="text-[#b89818] text-lg" icon="solar:check-circle-linear"></iconify-icon> Avisa quando muda a lei.
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
<iconify-icon className="text-[#b89818] text-lg" icon="solar:check-circle-linear"></iconify-icon> Explica com paciência.
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-medium sm:col-span-2 md:col-span-2">
<iconify-icon className="text-[#b89818] text-lg" icon="solar:check-circle-linear"></iconify-icon> Trata cliente como gente, não como número.
            </div>
</div>
<p className="text-sm font-medium text-zinc-500 mb-12">Isso deveria ser o mínimo. Mas no mercado de contabilidade, isso virou exceção. E é por isso que quem chega na Hórus sente a diferença no primeiro dia.</p>
<div className="flex flex-col md:flex-row bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden text-left">
<div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-zinc-200">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#b89818] mb-3">Se está abrindo empresa</h4>
<p className="text-sm text-zinc-600 leading-relaxed">A gente cuida de tipo de empresa, regime tributário, CNPJ e certificado digital. Você não precisa entender nada.</p>
</div>
<div className="flex-1 p-8 md:p-10 bg-white">
<h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-3">Se já tem empresa</h4>
<p className="text-sm text-zinc-600 leading-relaxed">A gente cuida de toda a transição. Entra em contato com o escritório anterior, pede os documentos, assume a responsabilidade. Totalmente seguro no app.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">O que você vai encontrar na Hórus e não encontra em nenhuma outra contabilidade</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
<div className="space-y-12">

<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">1</span>
<h3 className="text-lg font-semibold tracking-tight">App próprio com tudo na sua mão</h3>
</div>
<div className="pl-12">
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Documentos, guias, boletos: abre, baixa, copia o código e paga. Está no banco e o gerente pediu algo? Abre o app e mostra na tela. Sem ligar para ninguém.</p>
<div className="bg-white p-4 rounded-xl border border-zinc-200 text-xs text-zinc-600 relative">
<span className="absolute -top-2 left-4 bg-white px-2 text-[#b89818] font-medium">Objeção Quebrada</span>
<strong>"Mas e se eu trocar de contador, vou perder meus documentos?"</strong> Não. Na transição, a gente organiza tudo e disponibiliza no app. Totalmente seguro.
                            </div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">2</span>
<h3 className="text-lg font-semibold tracking-tight">Certificado digital em 5 minutos</h3>
</div>
<div className="pl-12">
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Todo mundo demora de 7 a 15 dias. A gente emite na hora. Certificadora reconhecida no Brasil inteiro. As pessoas saem rindo de tão rápido.</p>
<div className="bg-white p-4 rounded-xl border border-zinc-200 text-xs text-zinc-600 relative">
<span className="absolute -top-2 left-4 bg-white px-2 text-[#b89818] font-medium">Objeção Quebrada</span>
<strong>"Meu certificado está com o escritório anterior."</strong> A gente resolve. Emitimos um novo para você em 5 minutos. Nunca precisou levar dias.
                            </div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">3</span>
<h3 className="text-lg font-semibold tracking-tight">Suporte humano de verdade</h3>
</div>
<div className="pl-12">
<p className="text-sm text-zinc-500 leading-relaxed mb-4">Mais de 10 profissionais dedicados. Você liga, alguém atende. Manda mensagem, alguém responde. Aqui você não é o cliente 501. Aqui você tem um nome.</p>
<div className="bg-white p-4 rounded-xl border border-zinc-200 text-xs text-zinc-600 relative">
<span className="absolute -top-2 left-4 bg-white px-2 text-[#b89818] font-medium">Objeção Quebrada</span>
<strong>"E se eu não entender nada de contabilidade?"</strong> Estamos aqui para isso. Toda pergunta é bem-vinda. Você precisa de alguém que saiba por você.
                            </div>
</div>
</div>
</div>
<div className="space-y-12">

<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">4</span>
<h3 className="text-lg font-semibold tracking-tight">Velocidade que o mercado não acompanha</h3>
</div>
<div className="pl-12">
<ul className="text-sm text-zinc-500 mb-4 space-y-2">
<li className="flex items-center justify-between border-b border-zinc-100 pb-2"><span>Demonstração financeira?</span> <span className="font-medium text-black">5 minutos</span></li>
<li className="flex items-center justify-between border-b border-zinc-100 pb-2"><span>Certidão?</span> <span className="font-medium text-black">Minutos</span></li>
<li className="flex items-center justify-between pb-2"><span>Guia do mês?</span> <span className="font-medium text-black">No app</span></li>
</ul>
<p className="text-sm text-zinc-500 mb-4 font-medium">Enquanto seu contador atual lê seu e-mail, a gente já resolveu.</p>
<div className="bg-white p-4 rounded-xl border border-zinc-200 text-xs text-zinc-600 relative">
<span className="absolute -top-2 left-4 bg-white px-2 text-[#b89818] font-medium">Objeção Quebrada</span>
<strong>"E se durante a transição eu ficar sem contabilidade?"</strong> Não fica. A gente só assume quando tudo está organizado. Sem janela, sem risco.
                            </div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold">5</span>
<h3 className="text-lg font-semibold tracking-tight">Você nunca é pego de surpresa</h3>
</div>
<div className="pl-12">
<p className="text-sm text-zinc-500 leading-relaxed">Mudou a lei? Disparo automático para todos os clientes. Calendário no app com cada prazo e cada guia. Nunca mais multa por esquecimento. Nunca mais "eu não sabia."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">O processo simples para começar</h2>
</div>
<div className="border-b border-zinc-200 flex justify-center gap-8 mb-12">
<button className="tab-btn active pb-4 text-sm font-medium border-b-2 border-black text-black transition-colors px-2" id="btn-tab-abrir" onclick="switchTab('tab-abrir')">Abrir empresa</button>
<button className="tab-btn pb-4 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-black transition-colors px-2" id="btn-tab-trocar" onclick="switchTab('tab-trocar')">Trocar contabilidade</button>
</div>

<div className="tab-content" id="tab-abrir">
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">1</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Fala com a gente</h4>
<p className="text-xs text-zinc-500">Entendemos seu perfil em 5 minutos de conversa.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">2</div>
<h4 className="text-base font-semibold tracking-tight mb-2">A gente cuida de tudo</h4>
<p className="text-xs text-zinc-500">CNPJ, registro, certificado digital, regime tributário.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">3</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Sua empresa nasce organizada</h4>
<p className="text-xs text-zinc-500">App funcionando, suporte ativo, calendário em dia.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-block" href="#">Quero abrir minha empresa</a>
</div>
</div>

<div className="tab-content hidden" id="tab-trocar">
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">1</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Fala com a gente</h4>
<p className="text-xs text-zinc-500">Entendemos sua situação e o que te incomoda hoje.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">2</div>
<h4 className="text-base font-semibold tracking-tight mb-2">A gente cuida da transição</h4>
<p className="text-xs text-zinc-500">Contatamos o escritório anterior, pegamos a documentação. Você não faz nada.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-[#b89818] font-semibold">3</div>
<h4 className="text-base font-semibold tracking-tight mb-2">Você sente a diferença</h4>
<p className="text-xs text-zinc-500">App com tudo pronto, documentos seguros, suporte que responde.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-block" href="#">Quero conhecer a Hórus</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white rounded-[2.5rem] max-w-[96%] mx-auto mb-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<p className="text-[#b89818] text-xs font-semibold uppercase tracking-widest mb-4">Nossos Serviços</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Tudo Que Sua Empresa Precisa Para Funcionar. Num Lugar Só.</h2>
<p className="text-sm text-zinc-400">A Hórus foi criada para empresas e profissionais que precisam de agilidade, organização e suporte real.</p>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-black/50 px-4 py-2 rounded-full border border-zinc-800">
<iconify-icon className="text-[#b89818]" icon="solar:check-read-linear"></iconify-icon> Profissionais abrindo a 1ª empresa
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-black/50 px-4 py-2 rounded-full border border-zinc-800">
<iconify-icon className="text-[#b89818]" icon="solar:check-read-linear"></iconify-icon> Prestadores de serviço PJ
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-black/50 px-4 py-2 rounded-full border border-zinc-800">
<iconify-icon className="text-[#b89818]" icon="solar:check-read-linear"></iconify-icon> Empresas que precisam de agilidade
                </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-300 bg-black/50 px-4 py-2 rounded-full border border-zinc-800">
<iconify-icon className="text-[#b89818]" icon="solar:check-read-linear"></iconify-icon> Cansados de contadores lentos
                </div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">Abertura de empresa</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Do zero ao CNPJ pronto. Regime certo. Certificado digital na hora. Você não entende de contabilidade — e não precisa.</p>
</div>
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:calculator-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">Contabilidade mensal</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Escrituração, guias, obrigações, relatórios. Tudo no app, em tempo real, com suporte que responde no mesmo dia.</p>
</div>
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:password-minimalistic-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">Certificado digital</h3>
<p className="text-xs text-zinc-400 leading-relaxed">5 minutos. Não 15 dias. Brasil inteiro. Você sai com ele pronto.</p>
</div>
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">BPO Financeiro</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Fluxo de caixa, contas a pagar e receber, conciliação bancária. A gente organiza. Você empreende.</p>
</div>
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">Holding e blindagem</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Proteção do que você construiu. Transferência de bens com segurança jurídica.</p>
</div>
<div className="p-6 bg-black rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
<iconify-icon className="text-2xl text-[#b89818] mb-4 block" icon="solar:city-linear"></iconify-icon>
<h3 className="text-base font-semibold mb-2 tracking-tight">Empreendimentos imob.</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Assessoria jurídica, financeira e contábil completa para o seu projeto.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-b border-zinc-100 mb-24">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">Eles Poderiam Ter Escolhido Qualquer Contabilidade. Escolheram A Hórus.</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex gap-1 mb-4 text-[#b89818]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"A transição foi transparente. Em poucos dias eu já tinha acesso a todos os meus documentos no aplicativo. A agilidade deles para emitir certidões salvou um contrato importante."</p>
<p className="text-xs font-semibold uppercase tracking-widest text-black">Cliente Hórus</p>
<p className="text-xs text-zinc-400">Prestador de Serviços</p>
</div>
<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex gap-1 mb-4 text-[#b89818]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"Sempre tive medo da burocracia para abrir CNPJ. A equipe da Hórus fez tudo parecer fácil. Em minutos já estávamos com o certificado digital resolvido. Recomendo de olhos fechados."</p>
<p className="text-xs font-semibold uppercase tracking-widest text-black">Cliente Hórus</p>
<p className="text-xs text-zinc-400">Área Médica</p>
</div>
<div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<div className="flex gap-1 mb-4 text-[#b89818]">
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-fall-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 italic">"O que mais impressiona é o atendimento. Diferente dos contadores antigos onde você é só um número, aqui sempre tem alguém humano e rápido no WhatsApp para resolver."</p>
<p className="text-xs font-semibold uppercase tracking-widest text-black">Cliente Hórus</p>
<p className="text-xs text-zinc-400">Desenvolvedor PJ</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 text-center mb-32" id="contato">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-tight">A Contabilidade Que Você Queria Ter Desde O Primeiro Dia Está A Uma Conversa De Distância</h2>
<p className="text-sm text-zinc-500 font-medium mb-6 uppercase tracking-widest">Em 5 minutos de conversa você pode descobrir:</p>
<div className="flex flex-col items-center gap-3 mb-10 text-sm text-zinc-700">
<div className="flex items-center gap-2"><iconify-icon className="text-[#b89818]" icon="solar:check-circle-linear"></iconify-icon> Se seu tipo de empresa está correto</div>
<div className="flex items-center gap-2"><iconify-icon className="text-[#b89818]" icon="solar:check-circle-linear"></iconify-icon> Se está pagando mais imposto do que deveria</div>
<div className="flex items-center gap-2"><iconify-icon className="text-[#b89818]" icon="solar:check-circle-linear"></iconify-icon> Se existe forma mais simples de organizar sua contabilidade</div>
</div>
<p className="text-xs text-zinc-400 mb-8 font-medium">5 minutos de conversa. Sem enrolação. Sem compromisso.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto" href="#">
                Quero abrir minha empresa
            </a>
<a className="bg-white text-black border border-zinc-200 px-8 py-3.5 rounded-full text-sm font-medium hover:border-black hover:bg-zinc-50 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm" href="#">
                Quero conhecer a Hórus
            </a>
</div>
</section>

<footer className="bg-zinc-50 py-16 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4">
<div className="text-xl font-semibold tracking-tighter uppercase text-black mb-4">HÓRUS</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-6 max-w-xs">
                    Gestão Financeira e Contábil.<br/>
                    Rua Monsenhor Leite, 200 - Sala 03<br/>
                    Centro, Boa Esperança - MG<br/>
                    Atendimento no Brasil inteiro.
                </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-[#b89818] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-bold"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#b89818] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a> 
<a className="text-zinc-400 hover:text-[#b89818] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
<div className="flex flex-col gap-3">
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Início</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Quem somos</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Nossos serviços</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Parceiros</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Gestão financeira</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Gestão contábil</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Depoimentos</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-zinc-500 hover:text-black transition-colors font-medium" href="#">Área VIP</a>
<a className="text-zinc-500 hover:text-black transition-colors font-medium" href="#">Portal do cliente</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">Contato</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Hórus Contabilidade. Todos os direitos reservados.</p>
</div>
</footer>



    </>
  );
}
