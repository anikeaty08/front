import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0">
<img alt="Alenmar" className="h-12" src="https://ntsayehzlwviuzxkgvqm.supabase.co/storage/v1/object/public/Midias/ALENMAR---Logotipo--horizontal2%201.png"/>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#000f3a] hover:text-[#001a5c] transition-colors" href="#servicos">Serviços</a>
<a className="text-sm font-medium text-[#000f3a] hover:text-[#001a5c] transition-colors" href="#sobre">Sobre</a>
<a className="text-sm font-medium text-[#000f3a] hover:text-[#001a5c] transition-colors" href="#projetos">Projetos</a>
<a className="text-sm font-medium text-[#000f3a] hover:text-[#001a5c] transition-colors" href="#parcerias">Parcerias</a>
<a className="text-sm font-medium text-[#000f3a] hover:text-[#001a5c] transition-colors" href="#contato">Contato</a>
</div>
<button className="md:hidden text-[#000f3a]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<video autoplay="" className="hero-video" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-ocean-waves-aerial-view-4099-large.mp4" type="video/mp4"/>
</video>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
                Somos especializados em estudo de implementação de sistemas ópticos submarinos
            </h1>
<p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Somos sua parceria estratégica e criativa nos desafios da Geociências em águas rasas e profundas, com soluções inovadoras, estudos e consultorias, especialista em Sistemas Submarinos de telecomunicação
            </p>
</div>
</section>

<section className="bg-[#000f3a] py-6 overflow-hidden" id="parcerias">
<div className="flex animate-scroll whitespace-nowrap gap-x-16 gap-y-16 items-center">
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">BLUE MARINE</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">TESSEC</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">GEOMARINE</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">ASN</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">TUSASS</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">LABMAR</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">IPT</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">ERRIA</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">OCEANS &amp; CABLES</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">PLANADRONE</span>

<span className="text-white/80 text-sm font-medium uppercase tracking-wider">BLUE MARINE</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">TESSEC</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">GEOMARINE</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">ASN</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">TUSASS</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">LABMAR</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">IPT</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">ERRIA</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">OCEANS &amp; CABLES</span>
<span className="text-white/80 text-sm font-medium uppercase tracking-wider">PLANADRONE</span>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="servicos">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#000f3a] mb-4">Nossos Serviços</h2>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-[#000f3a] mb-6">
                        Estudos para implementação de sistemas ópticos de telecomunicação (FOC – Fiber Optic Cables)
                    </h3>
<p className="text-base text-gray-600 leading-relaxed mb-8">
<span className="font-semibold text-gray-900">Especialista em todas as etapas</span> de um projeto de implementação de cabos de Fibra Óptica Submarina (FOC), desde os estudos e levantamentos iniciais até a instalação e análises pós-lançamento. Atuamos de forma integrada em cada fase do processo, garantindo <span className="font-semibold text-gray-900">eficiência, precisão e segurança operacional</span>.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Desktop Study (DTS)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Levantamento de reconhecimento de Rota</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Operações pré-lançamento (PLSE, PLGR, RC)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Lançamento de cabo</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Monitoramento Touchdown (TDM)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-5 h-5 text-[#000f3a] flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Operações pós-lançamento (PLI, PLB/PLIB, as-laid survey)</span>
</li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden aspect-video">
<img alt="Sistemas ópticos de telecomunicação" className="w-full h-full object-cover" src="https://ntsayehzlwviuzxkgvqm.supabase.co/storage/v1/object/public/Midias/ccabos.png"/>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-video">
<img alt="Projetos em Geociências" className="w-full h-full object-cover" src="https://revistaoilegasbrasil.com.br/wp-content/uploads/2024/03/Manobra-800x445.jpeg"/>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-3xl font-semibold tracking-tight text-[#000f3a] mb-6">
                        Projetos em Geociências
                    </h3>
<p className="text-base text-gray-600 leading-relaxed mb-8">
<span className="font-semibold text-gray-900">Soluções em Geociências Aplicadas</span>, com foco em levantamentos geofísicos de alta precisão em águas rasas e profundas, voltadas ao suporte de projetos de <span className="font-semibold text-gray-900">engenharia offshore</span>, sistemas submarinos de telecomunicação, energia e infraestrutura marinha.
                    </p>
<h4 className="text-lg font-medium text-[#000f3a] mb-3">Geofísica Submarina</h4>
<p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Realizamos <span className="font-semibold text-gray-900">levantamentos geofísicos com equipamentos de última geração</span> (SBP, MBES, SSS, Magnetometria, entre outros), aplicados ao mapeamento do leito marinho, identificação de feições geológicas e caracterização de substratos.
                    </p>
<h4 className="text-lg font-medium text-[#000f3a] mb-3">Meteoceanografia</h4>
<p className="text-sm text-gray-600 leading-relaxed">
                        Desenvolvemos análises e monitoramentos meteoceanográficos para caracterizar as <span className="font-semibold text-gray-900">condições ambientais e oceanográficas locais</span> — incluindo ondas, correntes, marés e ventos — fundamentais para o planejamento seguro e eficiente de operações offshore.
                    </p>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-[#000f3a] mb-6">
                        Estudos para Implementação de Obras Fluviais e Marítimas
                    </h3>
<p className="text-base text-gray-600 leading-relaxed mb-8">
                        Possuímos <span className="font-semibold text-gray-900">ampla expertise em levantamentos topográficos e hidrográficos</span> voltados ao planejamento, concepção e execução de obras fluviais, portuárias e marítimas, atuando em ambientes costeiros, estuarinos e interiores.
                    </p>
<h4 className="text-base font-medium text-[#000f3a] mb-2">Aerofotogrametria</h4>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Utilização de <span className="font-semibold text-gray-900">plataformas aéreas tripuladas e não tripuladas</span> (VANTs/Drones) para geração de ortofotos e modelos digitais.
                    </p>
<h4 className="text-base font-medium text-[#000f3a] mb-2">Levantamentos Topográficos e Geodésicos</h4>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Execução de <span className="font-semibold text-gray-900">medições de alta precisão</span> com GNSS e estações totais para apoio a obras civis e de infraestrutura portuária.
                    </p>
<h4 className="text-base font-medium text-[#000f3a] mb-2">Monitoramento e Investigação por Levantamentos Hidrográficos</h4>
<p className="text-sm text-gray-600 leading-relaxed">
                        Realização de levantamentos mono e multifeixe para análise de profundidade, morfologia do leito e sedimentação.
                    </p>
</div>
<div className="overflow-hidden aspect-video rounded-2xl">
<img alt="Obras Fluviais e Marítimas" className="w-full h-full object-cover" src="https://ntsayehzlwviuzxkgvqm.supabase.co/storage/v1/object/public/Midias/fluvias.png"/>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#000f3a] mt-500 mb-500 pb-0" id="sobre">
<div className="lg:pr-8 max-w-7xl mr-auto pr-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="overflow-hidden aspect-video rounded-none">
<img alt="Sobre Alenmar" className="w-full h-full object-cover rounded-none" src="https://ntsayehzlwviuzxkgvqm.supabase.co/storage/v1/object/public/Midias/Bitmap.png"/>
</div>
<div className="lg:px-0 my-2 px-6">
<h2 className="uppercase text-sm font-medium text-white/70 tracking-wider mb-4">Sobre nós</h2>
<p className="text-base text-white/80 leading-relaxed">
                        Desde 2017, a <span className="font-semibold text-white">AlenMar atua com o propósito de integrar conhecimento, inovação e responsabilidade socioambiental</span>. Uma empresa multidisciplinar, com foco em contribuir para o desenvolvimento sustentável e o progresso científico, constrói <span className="font-semibold text-white">alianças estratégicas com especialistas e parceiros de excelência</span>, oferecendo soluções de alto desempenho em Projetos Oceanográficos de Pesquisa e Desenvolvimento que unem <span className="font-semibold text-white">ciência, tecnologia e sustentabilidade</span>, assegurando padrões elevados de qualidade e inovação em todas as etapas de seus projetos.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#000f3a] mb-4">Por que escolher a AlenMar</h2>
<p className="text-lg text-gray-600 max-w-3xl mr-auto ml-auto">Na AlenMar, acreditamos que grandes resultados nascem de parcerias verdadeiras e responsáveis. Com ética, profissionalismo e dedicação, transformamos desafios em soluções inovadoras e sustentáveis, sempre priorizando o respeito, a confiança e a colaboração em cada projeto.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div className="p-8 border border-gray-100 rounded-2xl hover:border-[#000f3a]/20 transition-colors">
<div className="w-12 h-12 bg-[#000f3a]/5 rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-shield-check w-6 h-6 text-[#000f3a]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#000f3a] mb-3">Ética e Profissionalismo</h3>
<p className="leading-relaxed text-sm text-gray-600">Temos um propósito que ultrapassa números e resultados.
A AlenMar existe para construir conexões de valor, unindo pessoas, conhecimento e responsabilidade socioambiental.
Não queremos apenas prestar serviços — queremos caminhar ao seu lado, como uma parceira confiável e comprometida com o futuro do oceano e da sociedade.
</p>
</div>
<div className="hover:border-[#000f3a]/20 transition-colors border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-[#000f3a]/5 rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-lightbulb w-6 h-6 text-[#000f3a]" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#000f3a] mb-3">Experiencia de mercado</h3>
<p className="leading-relaxed text-sm text-gray-600">A AlenMar nasce da experiência de profissionais com trajetórias consolidadas há mais de 15 anos na indústria marítima e de geociências.
Mais do que conhecimento técnico, essa vivência traduz-se em confiança, eficiência e resultados que superam expectativas, sustentando nosso compromisso com a excelência e a inovação contínua.
</p>
</div>
<div className="hover:border-[#000f3a]/20 transition-colors border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-[#000f3a]/5 rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-search-check lucide-leaf w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 15, 58)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#000f3a] mb-3">Soluções Personalizadas</h3>
<p className="leading-relaxed text-sm text-gray-600">A força da AlenMar está nas parcerias que constrói.
Com uma rede sólida de profissionais e instituições de excelência, desenvolvemos soluções únicas e personalizadas, capazes de unir tecnologia, ciência e experiência para garantir resultados consistentes e de qualidade superior.
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="projetos">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Cases</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#000f3a]">Conheça mais sobre os nossos trabalhos</h2>
</div>
<div className="grid mb-12 gap-y-4 gap-x-4 md:grid-cols-2 lg:grid-cols-3">

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-blue-900 to-blue-950">
<div className="gradient-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">PETROBRAS</h3>
<p className="text-sm text-white/90">Submarine Cable System - Bacia de Santos</p>
</div>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-emerald-900 to-emerald-950">
<div className="gradient-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">EQUIANO</h3>
<p className="text-sm text-white/90">Google Inc - Atlantic Ocean West Africa</p>
</div>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-cyan-900 to-cyan-950">
<div className="absolute inset-0 gradient-overlay"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">HMN Tech</h3>
<p className="text-sm text-white/90">Route Survey - Bacia de Campos</p>
</div>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-indigo-900 to-indigo-950">
<div className="absolute inset-0 gradient-overlay"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">WAMKELEKILE</h3>
<p className="text-sm text-white/90">South Atlantic - Cape Town</p>
</div>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-purple-900 to-purple-950">
<div className="absolute inset-0 gradient-overlay"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">AFRICA-1</h3>
<p className="text-sm text-white/90">ASN - Red Sea, Aqaba</p>
</div>
</div>
</div>

<div className="project-card bg-white rounded-2xl overflow-hidden cursor-pointer">
<div className="relative h-64 bg-gradient-to-br from-teal-900 to-teal-950">
<div className="absolute inset-0 gradient-overlay"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">TANNAT</h3>
<p className="text-sm text-white/90">Uruguay - Cable Repair</p>
</div>
</div>
</div>
</div>
<div className="text-center">
<button className="inline-flex items-center gap-2 px-8 py-4 bg-[#000f3a] text-white rounded-full font-medium text-sm hover:bg-[#001a5c] transition-colors">
                    Ver todos os projetos
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#000f3a] text-white relative overflow-hidden" id="contato">
<div className="opacity-5 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
</div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8">
<svg className="lucide lucide-message-circle w-12 h-12 text-[#000f3a]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">Contato</p>
<h2 className="md:text-6xl text-5xl font-semibold tracking-tight mb-8">
                        Fale com nossos especialistas
                    </h2>
<a className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#000f3a] rounded-full font-medium text-base hover:bg-gray-100 transition-colors" href="https://wa.me/5511999999999" target="_blank">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        Entrar em contato
                    </a>
</div>
<div className="bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<form className="space-y-6">
<div className="">
<label className="block text-sm font-medium mb-2">Nome</label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors" placeholder="Seu nome" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors" placeholder="seu@email.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-2">Mensagem</label>
<textarea className="placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none text-white bg-white/10 w-full border-white/20 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Como podemos ajudar?" rows="4"></textarea>
</div>
<button className="w-full px-6 py-3 bg-white text-[#000f3a] rounded-lg font-medium hover:bg-gray-100 transition-colors" type="submit">
                            Enviar mensagem
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="relative bg-cover bg-center py-16" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&amp'}}>
<div className="bg-center bg-[#000f3a] absolute top-0 right-0 bottom-0 left-0"></div><div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12 items-center">

<div className="flex items-center gap-6">
<a className="text-white hover:text-white/80 transition-colors" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-white hover:text-white/80 transition-colors" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<span className="text-white text-base font-normal">Redes Sociais</span>
</div>

<div className="flex justify-center">
<img alt="Alenmar" className="h-16 invert brightness-0" src="https://ntsayehzlwviuzxkgvqm.supabase.co/storage/v1/object/public/Midias/ALENMAR---Logotipo--horizontal2%201.png"/>
</div>

<div className="flex flex-col items-end gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-sm font-normal hover:bg-white/10 transition-colors" href="https://wa.me/5511999999999" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                        Fale conosco!
                    </a>
<div className="flex gap-2 text-xs text-white/70 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.flowcode.cc/'" role="button">
<span className="">Desenvolvido por</span>
<svg className="w-[64px] h-[16px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '64px', height: '16px'}} viewbox="0 0 100 20">
<text className="" fontFamily="Arial, sans-serif" fontSize="14" font-weight="600" x="0" y="15">FlowCode</text>
</svg>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
