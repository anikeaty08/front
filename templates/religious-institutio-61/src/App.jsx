import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D] text-white h-16 flex items-center justify-between px-6 lg:px-12 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="church" strokeWidth="1.5"></i>
<span className="font-['Playfair_Display'] text-lg font-medium tracking-tight italic">Nazareno</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
<a className="hover:text-white transition-colors duration-200" href="#missao">Nossa Missão</a>
<a className="hover:text-white transition-colors duration-200" href="#trajetoria">Nossa Trajetória</a>
<a className="hover:text-white transition-colors duration-200" href="#contribuir">Como Contribuir</a>
<a className="hover:text-white transition-colors duration-200" href="#materiais">Lista de Materiais</a>
<a className="hover:text-white transition-colors duration-200" href="#mensagem">Mensagem do Pastor</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-[#0D0D0D] px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200" href="#contribuir">
            Faça uma Oferta <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[90vh] flex items-center" id="hero">
<div className="grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="flex flex-col items-start max-w-2xl">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Futuro Templo da Nazareno</span>
<h1 className="font-['Playfair_Display'] text-5xl lg:text-7xl font-semibold tracking-tight text-[#0D0D0D] leading-[1.05] mb-6">
                    Nosso Lugar
                </h1>
<p className="text-xl lg:text-2xl font-['Playfair_Display'] text-[#6B6B6B] mb-10 leading-snug">
                    Estamos nos preparando para viver no Nosso Lugar.
                </p>
<div className="flex flex-wrap gap-4 w-full sm:w-auto">
<a className="flex items-center gap-2 bg-[#0D0D0D] text-white px-8 py-4 text-sm font-medium hover:bg-black/80 transition-colors w-full sm:w-auto justify-center" href="#trajetoria">
                        Acompanhe nossa trajetória <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="flex items-center gap-2 bg-white text-[#0D0D0D] border border-[#D9D2C7] px-8 py-4 text-sm font-medium hover:border-[#0D0D0D] transition-colors w-full sm:w-auto justify-center" href="#contribuir">
                        Junte-se a nós
                    </a>
<a className="flex items-center gap-2 bg-transparent text-[#0D0D0D] px-4 py-4 text-sm font-medium hover:opacity-70 transition-opacity w-full sm:w-auto justify-center" href="#materiais">
                        Lista de materiais
                    </a>
</div>
</div>
<div className="relative aspect-video bg-[#EDE8E0] w-full flex items-center justify-center group cursor-pointer overflow-hidden">
<img alt="Construção" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="relative w-16 h-16 bg-white/90 flex items-center justify-center rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#0D0D0D] ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-white border-b border-[#D9D2C7] shadow-sm">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex overflow-x-auto hide-scrollbar gap-8 py-4 text-sm font-medium text-[#6B6B6B] whitespace-nowrap">
<a className="hover:text-[#0D0D0D] transition-colors" href="#hero">Nosso Lugar</a>
<a className="hover:text-[#0D0D0D] transition-colors" href="#missao">Nossa Missão</a>
<a className="hover:text-[#0D0D0D] transition-colors" href="#trajetoria">Nossa Trajetória</a>
<a className="hover:text-[#0D0D0D] transition-colors" href="#contribuir">Como Contribuir</a>
<a className="hover:text-[#0D0D0D] transition-colors" href="#materiais">Lista de Materiais</a>
<a className="hover:text-[#0D0D0D] text-[#0D0D0D] flex items-center gap-1 transition-colors ml-auto" href="#contribuir">
                    Faça uma Oferta <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<section className="bg-[#EDE8E0] py-24 lg:py-32" id="missao">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="aspect-[3/4] bg-[#D9D2C7] w-full max-w-md mx-auto lg:mx-0 overflow-hidden">
<img alt="Projeto Arquitetônico" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Nossa Missão</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-8">
                    Preparar o Caminho
                </h2>
<div className="space-y-6 text-lg text-[#1A1A1A] leading-relaxed">
<p>Como um movimento de avivamento, ouvimos o clamor de um mundo que anseia por conhecer a Jesus e estamos determinados a respondê-lo com Sua presença. Cremos que esta é a hora da Igreja se levantar e brilhar.</p>
<p>Agora é o momento — tempo de nos levantarmos e edificarmos para os propósitos do nosso Deus, como pessoas unidas, capacitadas e fortalecidas para impactar comunidades, cidades e nações para Ele, levando Sua presença manifesta aos cantos mais obscuros da Terra.</p>
<p>Cremos que, ao nos unirmos como um só, alcançaremos aqueles que são atraídos pelo resplendor da nossa aurora (Isaías 60), para que o mundo que anseia conhecer Jesus seja reavivado pela esperança transformadora que somente Ele pode trazer — à medida que as pessoas encontram o poder do Deus vivo.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="trajetoria">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Nossa Trajetória</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-8">
                        Fundações e Dias Presentes
                    </h2>
<p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
                        Ao longo dos anos, a Igreja do Nazareno tem sido um farol de esperança e transformação. Começamos com pequenos encontros e fomos expandindo nossa capacidade de acolher à medida que Deus trazia crescimento. Cada tijolo colocado em nossa história representa vidas restauradas. Hoje, olhamos para trás com gratidão e para frente com fé, sabendo que a fundação sólida que recebemos é a base para o mover extraordinário que está por vir.
                    </p>
<a className="inline-flex items-center gap-2 bg-transparent text-[#0D0D0D] border-b border-[#0D0D0D] pb-1 text-sm font-medium hover:opacity-70 transition-opacity" href="#">
                        Conheça nossa história <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-[#EDE8E0] p-8 lg:p-12">
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-8">Progresso da Obra</h3>
<div className="mb-10">
<div className="flex justify-between text-sm font-medium mb-3 text-[#1A1A1A]">
<span>Total Arrecadado</span>
<span>R$ 1.250.000 / R$ 3.000.000</span>
</div>
<div className="w-full bg-[#D9D2C7] h-2">
<div className="bg-[#0D0D0D] h-full" style={{width: '41%'}}></div>
</div>
<div className="mt-3 text-sm text-[#6B6B6B]">Faltam R$ 1.750.000</div>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm font-medium mb-2 text-[#1A1A1A] items-center">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-green-600" data-lucide="check-circle-2" strokeWidth="1.5"></i> Fundação e Terraplanagem
                                </span>
<span>100%</span>
</div>
<div className="w-full bg-[#D9D2C7] h-1.5">
<div className="bg-green-600 h-full" style={{width: '100%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm font-medium mb-2 text-[#1A1A1A] items-center">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-red-600" data-lucide="clock" strokeWidth="1.5"></i> Estrutura e Alvenaria
                                </span>
<span>45%</span>
</div>
<div className="w-full bg-[#D9D2C7] h-1.5">
<div className="bg-red-600 h-full" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm font-medium mb-2 text-[#6B6B6B] items-center">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-[#6B6B6B]" data-lucide="circle" strokeWidth="1.5"></i> Cobertura
                                </span>
<span>0%</span>
</div>
<div className="w-full bg-[#D9D2C7] h-1.5">
<div className="bg-[#0D0D0D] h-full" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight">Diários de Obra</h3>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors" href="#">
                        Acompanhe no Instagram <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="aspect-square bg-[#EDE8E0]">
<img alt="Obra 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#EDE8E0]">
<img alt="Obra 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-[#EDE8E0]">
<img alt="Obra 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square bg-[#EDE8E0]">
<img alt="Obra 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0D0D0D] text-white" id="futuro">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 mb-6 block">O Nosso Futuro</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
                    Edificando para as Próximas Gerações
                </h2>
<div className="space-y-6 text-lg text-white/80 leading-relaxed">
<p>Visualizamos um espaço onde o avivamento não seja apenas um evento, mas uma cultura contínua. O design do Nosso Lugar foi intencionalmente pensado para facilitar a adoração profunda, o discipulado autêntico e a comunhão que transforma vidas.</p>
<p>Este novo templo será um centro apostólico de envio, equipado para treinar líderes, abençoar a cidade e ser um refúgio de paz em tempos de incerteza. Não estamos apenas construindo paredes; estamos preparando o palco para o que Deus fará nos próximos cem anos.</p>
</div>
</div>
<div className="relative w-full aspect-[4/3] bg-white/5">
<img alt="Render do Futuro Templo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-10 h-10 bg-white text-[#0D0D0D] flex items-center justify-center hover:bg-white/80 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 bg-white text-[#0D0D0D] flex items-center justify-center hover:bg-white/80 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="mensagem">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Uma mensagem a você, contribuinte!</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-8">
                    Uma mensagem do Pastor
                </h2>
<div className="text-lg text-[#1A1A1A] leading-relaxed mb-10">
<p>Sou imensamente grato pelo seu generoso apoio ao nosso movimento Nosso Lugar. Graças à união de seus corações ao nosso, tornamo-nos parceiros na concretização de um poderoso mover de Deus que levará multidões a um encontro com o amor de Jesus. Essa é a essência: pessoas conhecendo o amor de Deus. Portanto, do fundo do meu coração, digo: muito obrigado!</p>
<p className="mt-6">A missão da nossa Igreja é levantar-se e edificar este centro apostólico, que nos permitirá acolher um avivamento cada vez maior, que continuará a arder nos corações das futuras gerações. É uma honra estar nesta jornada com vocês. Obrigado pela sua amorosa parceria.</p>
</div>
<div className="font-['Playfair_Display'] text-xl font-semibold text-[#0D0D0D] italic">
                    Pastor João Silva <br/>
<span className="font-sans text-sm font-medium text-[#6B6B6B] not-italic uppercase tracking-widest mt-2 block">Igreja do Nazareno</span>
</div>
</div>
<div className="relative aspect-square md:aspect-[3/4] bg-[#EDE8E0] w-full group cursor-pointer overflow-hidden">
<img alt="Pastor" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#0D0D0D] ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#EDE8E0]" id="contribuir">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Como Contribuir</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
                    Formas de Participar desta Obra
                </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 mb-24">

<div className="bg-white p-10 flex flex-col items-start border border-[#D9D2C7]">
<div className="w-12 h-12 bg-[#EDE8E0] flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#0D0D0D]" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-4">PIX</h3>
<p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 flex-grow">
                        Transferência rápida e segura diretamente pelo app do seu banco. Chave CNPJ.
                    </p>
<p className="text-sm font-medium text-[#1A1A1A] mb-4">Chave: 12.345.678/0001-90</p>
<button className="w-full flex items-center justify-center gap-2 bg-[#0D0D0D] text-white px-6 py-4 text-sm font-medium hover:bg-black/80 transition-colors">
                        Copiar chave PIX <i className="w-4 h-4" data-lucide="copy" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-white p-10 flex flex-col items-start border border-[#D9D2C7]">
<div className="w-12 h-12 bg-[#EDE8E0] flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#0D0D0D]" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-4">Maquininha na Igreja</h3>
<p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 flex-grow">
                        Compareça a um de nossos cultos e realize o pagamento presencialmente com cartão de crédito ou débito junto à equipe.
                    </p>
<button className="w-full flex items-center justify-center gap-2 bg-transparent text-[#0D0D0D] border border-[#0D0D0D] px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors mt-auto">
                        Ver horários de culto
                    </button>
</div>

<div className="bg-white p-10 flex flex-col items-start border border-[#D9D2C7]">
<div className="w-12 h-12 bg-[#EDE8E0] flex items-center justify-center mb-6">
<i className="w-6 h-6 text-[#0D0D0D]" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-4">Link de Pagamento Online</h3>
<p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 flex-grow">
                        Acesse o link seguro e realize sua doação online com cartão, sem precisar vir até a Igreja.
                    </p>
<a className="w-full flex items-center justify-center gap-2 bg-transparent text-[#0D0D0D] border border-[#0D0D0D] px-6 py-4 text-sm font-medium hover:bg-black/5 transition-colors mt-auto" href="#">
                        Acessar link <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="max-w-3xl mx-auto">
<h3 className="font-['Playfair_Display'] text-2xl font-semibold tracking-tight mb-8">Dúvidas Frequentes</h3>
<div className="border-t border-[#D9D2C7]">
<details className="group py-6 border-b border-[#D9D2C7] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-medium text-[#1A1A1A]">
                            Minha doação é dedutível do Imposto de Renda?
                            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                            Sim, emitimos recibo para pessoas físicas e jurídicas conforme a legislação vigente. Entre em contato após a doação.
                        </p>
</details>
<details className="group py-6 border-b border-[#D9D2C7] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-medium text-[#1A1A1A]">
                            Posso fazer doação recorrente?
                            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                            Sim! Entre em contato pelo WhatsApp e configuramos um débito mensal automático para você.
                        </p>
</details>
<details className="group py-6 border-b border-[#D9D2C7] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-medium text-[#1A1A1A]">
                            Como acompanho o uso da minha doação?
                            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                            Atualizamos a barra de progresso mensalmente e postamos os diários de obra no nosso Instagram.
                        </p>
</details>
<details className="group py-6 border-b border-[#D9D2C7] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none text-lg font-medium text-[#1A1A1A]">
                            Posso doar materiais fisicamente?
                            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-[#6B6B6B]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-lg text-[#6B6B6B] mt-4 leading-relaxed">
                            Sim! Entre em contato pelo WhatsApp para combinar a entrega diretamente na obra.
                        </p>
</details>
</div>
<div className="mt-12 bg-white p-8 border border-[#D9D2C7] flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="font-medium text-[#1A1A1A] mb-1 text-lg">Outras dúvidas? Fale conosco:</h4>
<p className="text-[#6B6B6B] text-lg">Nossa equipe está à disposição para ajudar.</p>
</div>
<a className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-4 text-sm font-medium hover:opacity-90 transition-opacity w-full md:w-auto justify-center" href="https://wa.me/5519996080331">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp (19) 99608-0331
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="materiais">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6B6B] mb-6 block">Lista de Materiais</span>
<h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-6">
                        Doe um Material para a Obra
                    </h2>
<p className="text-lg text-[#6B6B6B] leading-relaxed">
                        Escolha um item, defina a quantidade e contribua diretamente com a construção do Nosso Lugar. Após o pagamento, envie o comprovante para o nosso WhatsApp.
                    </p>
</div>
<div className="bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800 flex gap-3 max-w-sm shrink-0">
<i className="w-5 h-5 shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<p>Após finalizar sua doação, envie o comprovante para o WhatsApp (19) 99608-0331. Nossa equipe confirma em até 24h.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Bloco" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-001</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Estrutura</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Bloco de Concreto</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Bloco estrutural para alvenaria</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 4,50</span>
<span className="text-xs text-[#6B6B6B]">/ unid.</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Cimento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-002</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Estrutura</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Saco de Cimento</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Cimento CP II 50kg</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 38,00</span>
<span className="text-xs text-[#6B6B6B]">/ saco</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Ferro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-003</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Estrutura</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Barra de Ferro</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Aço CA-50 nervurado 12m</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 32,00</span>
<span className="text-xs text-[#6B6B6B]">/ barra</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Telha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-70" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-004</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Cobertura</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Telha Metálica</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Galvanizada termoacústica</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 85,00</span>
<span className="text-xs text-[#6B6B6B]">/ m²</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Tijolo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-005</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Alvenaria</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Tijolo Cerâmico</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Tijolo furado 9 furos</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 1,20</span>
<span className="text-xs text-[#6B6B6B]">/ unid.</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group border border-[#D9D2C7] flex flex-col">
<div className="aspect-square bg-[#EDE8E0] relative overflow-hidden">
<img alt="Areia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-[#6B6B6B]">MAT-006</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<span className="text-xs text-[#6B6B6B] mb-1">Estrutura</span>
<h4 className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#1A1A1A] mb-1">Areia Média</h4>
<p className="text-sm text-[#6B6B6B] mb-4 flex-grow">Lavada para argamassa</p>
<div className="flex items-end justify-between mb-4">
<span className="text-xl font-medium text-[#0D0D0D]">R$ 120,00</span>
<span className="text-xs text-[#6B6B6B]">/ m³</span>
</div>
<div className="flex gap-2">
<div className="flex items-center border border-[#D9D2C7] bg-white text-[#1A1A1A]">
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium w-6 text-center">1</span>
<button className="px-3 py-2 hover:bg-[#EDE8E0] transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<button className="flex-grow bg-[#0D0D0D] text-white text-sm font-medium hover:bg-black/80 transition-colors py-2 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 bg-transparent text-[#0D0D0D] border border-[#0D0D0D] px-8 py-4 text-sm font-medium hover:bg-black/5 transition-colors" href="#">
                    Carregar mais materiais <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="bg-[#0D0D0D] text-white pt-24 pb-12">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6 text-white">
<i className="w-6 h-6" data-lucide="church" strokeWidth="1.5"></i>
<span className="font-['Playfair_Display'] text-xl font-medium tracking-tight italic">Nazareno</span>
</div>
<p className="text-white/70 text-lg leading-relaxed max-w-sm">
                        A missão da Igreja é o avivamento — pessoal, regional e a expansão global do Reino de Deus por Sua presença manifesta.
                    </p>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-[0.12em] text-white/50 mb-6">Projeto</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="text-white/80 hover:text-white transition-colors" href="#missao">Nossa Missão</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#trajetoria">Trajetória</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#futuro">O Nosso Futuro</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#trajetoria">Fotos da Obra</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-[0.12em] text-white/50 mb-6">Contribuir</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="text-white/80 hover:text-white transition-colors" href="#contribuir">PIX</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#contribuir">Maquininha</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#materiais">Lista de Materiais</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="https://wa.me/5519996080331">WhatsApp</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-bold uppercase tracking-[0.12em] text-white/50 mb-6">Igreja</h5>
<ul className="space-y-4 text-sm font-medium">
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Site Oficial</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">YouTube</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
<p>© 2025 Igreja do Nazareno · Todos os direitos reservados</p>
<p>WhatsApp: (19) 99608-0331</p>
</div>
</div>
</footer>



    </>
  );
}
